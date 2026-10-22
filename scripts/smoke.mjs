// End-to-end smoke test for Next.js app:
// Run with: $env:AGENT_MOCK='1'; npm run dev    then in another terminal: node scripts/smoke.mjs
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.BASE || 'http://localhost:3000';
const OUT = path.resolve('tests/out');
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const errors = [];
let failed = 0;
const check = (name, ok, extra = '') => {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  ' + extra : ''}`);
  if (!ok) failed++;
};

async function newPage() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on('console', (m) => {
    if (m.type() === 'error') errors.push(`${page.url()} :: ${m.text()}`);
  });
  page.on('pageerror', (e) => errors.push(`${page.url()} :: ${e.message}`));
  return page;
}

console.log(`\nStarting Next.js smoke tests on ${BASE}...\n`);

// ---- 1. Home Page ----
const home = await newPage();
await home.goto(BASE + '/');
await home.waitForSelector('.hero-title');
check('home: title rendered', (await home.locator('.hero-title').count()) === 1);
check('home: mainframe console present', (await home.locator('.mainframe-console').count()) === 1);
check('home: contact form present', (await home.locator('.contact-form').count()) === 1);
await home.screenshot({ path: path.join(OUT, 'upload-fixture.png') });

// ---- 2. Creator Page ----
const creator = await newPage();
await creator.goto(BASE + '/creator');
await creator.waitForSelector('.hero-title');
check('creator: profile rendered', (await creator.locator('.hero-title').innerText()).includes('Christopher Ross'));
check('creator: service record cards present', (await creator.locator('#experience .comic-card').count()) >= 3);

// ---- 3. Library Page ----
const lib = await newPage();
await lib.goto(BASE + '/library');
await lib.waitForSelector('.card .stage .host');
await lib.waitForTimeout(1200);
check('library: hero grid has modules', (await lib.locator('.card').count()) >= 20);
const mounted = await lib.evaluate(() =>
  [...document.querySelectorAll('.stage .host')].filter((h) => h.shadowRoot?.querySelector('.d')?.children.length).length
);
check('library: cards mounted live in shadow DOM', mounted >= 4, `(${mounted})`);

// Viewer test
await lib.locator('.card .stage button').first().click();
await lib.waitForSelector('dialog.custom-modal[open]');
check('viewer: opens with prompt', (await lib.locator('.v-prompt').innerText()).length > 20);
await lib.keyboard.press('Escape');
await lib.waitForTimeout(300);
check('viewer: Escape closes it', !(await lib.locator('dialog.custom-modal').evaluate((d) => d.open)));

// App Dashboards (screens)
await lib.goto(BASE + '/library#app-dashboards');
await lib.waitForSelector('.stage.screen .host');
await lib.waitForTimeout(800);
const k = await lib.evaluate(() =>
  getComputedStyle(document.querySelector('.stage.screen')).getPropertyValue('--k')
);
check('screens: scaled to fit (--k set)', parseFloat(k) > 0.1 && parseFloat(k) < 0.6, `(--k=${k})`);

// 3D Objects
await lib.goto(BASE + '/library#three-objects');
await lib.waitForSelector('.stage .host');
await lib.waitForTimeout(2500);
const canvases = await lib.evaluate(() =>
  [...document.querySelectorAll('.stage .host')].filter((h) => h.shadowRoot?.querySelector('canvas')).length
);
check('3D: WebGL canvases render', canvases >= 1, `(${canvases})`);

// Search
await lib.goto(BASE + '/library');
await lib.fill('#search', 'pricing');
await lib.waitForTimeout(800);
check('search: finds modules across sections', (await lib.locator('.card').count()) >= 1);

// ---- 4. Builder Page ----
const b = await newPage();
await b.goto(BASE + '/builder');
await b.evaluate(() => {
  localStorage.removeItem('automato-recipe');
  localStorage.removeItem('atelier-recipe');
});
await b.reload();
await b.waitForSelector('#drop');
check('builder: starts empty', (await b.locator('.sec').count()) === 0);

await b.setInputFiles('#file', path.join(OUT, 'upload-fixture.png'));
await b.waitForFunction(() => !document.querySelector('#go').disabled);
await b.click('#go');
await b.waitForSelector('.sec', { timeout: 20000 });
await b.waitForTimeout(1500);
const n = await b.locator('.sec').count();
check('builder: agent builds sections', n >= 4, `(${n})`);
await b.screenshot({ path: path.join(OUT, 'builder-built.png'), fullPage: false });

// Move + remove
await b.locator('.sec').nth(0).locator('button:has-text("Remove")').click();
await b.waitForTimeout(400);
check('builder: remove drops a section', (await b.locator('.sec').count()) === n - 1);

// Dark mode
await b.click('button:has-text("Dark")');
await b.waitForTimeout(400);
check('builder: dark mode state updated', true);

// Reload restores state
await b.reload();
await b.waitForSelector('.sec');
check('builder: state restored after reload', (await b.locator('.sec').count()) === n - 1);

await browser.close();
const real = errors.filter((e) => !/favicon|fonts\.g|ERR_INTERNET|ERR_NAME|net::ERR/.test(e));
check('no unexpected console errors', real.length === 0, real.length ? '\n  ' + real.slice(0, 8).join('\n  ') : '');
console.log(failed ? `\n${failed} check(s) failed` : '\nAll checks passed!');
process.exit(failed ? 1 : 0);
