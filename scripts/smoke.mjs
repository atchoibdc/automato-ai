// End-to-end smoke test (needs the server running with AGENT_MOCK=1):
//   $env:AGENT_MOCK='1'; npm start     then     node scripts/smoke.mjs
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.BASE || 'http://localhost:3000';
const OUT = path.resolve('tests/out');
await mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const errors = [];
let failed = 0;
const check = (name, ok, extra = '') => { console.log(`${ok ? 'PASS' : 'FAIL'}  ${name}${extra ? '  ' + extra : ''}`); if (!ok) failed++; };

async function newPage() {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${page.url()} :: ${m.text()}`); });
  page.on('pageerror', (e) => errors.push(`${page.url()} :: ${e.message}`));
  return page;
}

// ---- Library ----
const lib = await newPage();
await lib.goto(BASE + '/');
await lib.waitForSelector('.card .stage .host');
await lib.waitForTimeout(1200);
check('library: hero grid has 30 cards', (await lib.locator('.card').count()) === 30);
const mounted = await lib.evaluate(() => [...document.querySelectorAll('.stage .host')].filter((h) => h.shadowRoot?.querySelector('.d')?.children.length).length);
check('library: cards mounted live', mounted >= 6, `(${mounted})`);

await lib.locator('.card .stage').first().click();
await lib.waitForSelector('#viewer[open]');
check('viewer: opens with prompt', (await lib.locator('#v-prompt').innerText()).length > 50);
await lib.keyboard.press('Escape');
await lib.waitForTimeout(300);
check('viewer: Escape closes it', !(await lib.locator('#viewer').evaluate((d) => d.open)));

await lib.goto(BASE + '/#app-dashboards');
await lib.waitForSelector('.stage.screen .host');
await lib.waitForTimeout(800);
const k = await lib.evaluate(() => getComputedStyle(document.querySelector('.stage.screen')).getPropertyValue('--k'));
check('screens: scaled to fit (--k set)', parseFloat(k) > 0.1 && parseFloat(k) < 0.6, `(--k=${k})`);
await lib.screenshot({ path: path.join(OUT, 'library-dashboards.png') });

await lib.goto(BASE + '/#three-objects');
await lib.waitForSelector('.stage .host');
await lib.waitForTimeout(2500);
const canvases = await lib.evaluate(() => [...document.querySelectorAll('.stage .host')].filter((h) => h.shadowRoot?.querySelector('canvas')).length);
check('3D: WebGL canvases render', canvases >= 1, `(${canvases})`);

await lib.goto(BASE + '/');
await lib.fill('#search', 'pricing toggle');
await lib.waitForTimeout(600);
check('search: finds modules across sections', (await lib.locator('.card').count()) >= 1);

// ---- Builder ----
await lib.goto(BASE + '/');
await lib.screenshot({ path: path.join(OUT, 'upload-fixture.png') });
const b = await newPage();
await b.goto(BASE + '/builder.html');
await b.evaluate(() => localStorage.removeItem('atelier-recipe'));
await b.reload();
await b.waitForSelector('#drop');
check('builder: starts empty', (await b.locator('.sec').count()) === 0);
await b.setInputFiles('#file', path.join(OUT, 'upload-fixture.png'));
await b.waitForFunction(() => !document.querySelector('#go').disabled);
await b.click('#go');
await b.waitForSelector('.sec', { timeout: 20000 });
await b.waitForTimeout(1500);
const n = await b.locator('.sec').count();
check('builder: agent builds sections', n >= 5, `(${n})`);
await b.screenshot({ path: path.join(OUT, 'builder-built.png'), fullPage: false });

// swap
const before = await b.locator('.sec').nth(1).locator('.chip').innerText();
await b.locator('.sec').nth(1).hover();
await b.locator('.sec').nth(1).locator('[data-act=swap]').click();
await b.waitForSelector('#picker[open] .card');
await b.locator('#picker .card:not(.cur)').first().click();
await b.waitForTimeout(600);
const after = await b.locator('.sec').nth(1).locator('.chip').innerText();
check('builder: swap changes the module', before !== after, `("${before.split('\n').pop()}" -> "${after.split('\n').pop()}")`);

// move + remove
await b.locator('.sec').nth(1).hover();
await b.locator('.sec').nth(1).locator('[data-act=down]').click();
await b.waitForTimeout(400);
await b.locator('.sec').nth(0).hover();
await b.locator('.sec').nth(0).locator('[data-act=del]').click();
await b.waitForTimeout(400);
check('builder: remove drops a section', (await b.locator('.sec').count()) === n - 1);

// dark mode re-themes
await b.click('[data-mode=dark]');
await b.waitForTimeout(800);
check('builder: dark mode applied', await b.locator('.page.dark').count() === 1);

// export opens clean and mounts every section
const html = await b.evaluate(async () => {
  const m = await import('/shared/ml-core.mjs');
  const ctx = await fetch('/api/ctx').then((r) => r.json());
  const rec = JSON.parse(localStorage.getItem('atelier-recipe'));
  const cards = await Promise.all(rec.sections.map(async (s) => {
    const idx = await fetch('/api/catalog').then((r) => r.json());
    const slim = idx.modules.find((x) => x.id === s.id);
    return (await fetch(`/api/category/${slim.cat}`).then((r) => r.json())).find((c) => c.id === s.id);
  }));
  return m.exportPageHtml(ctx, { title: 'T', sections: cards.map((card, i) => ({ card, aspect: rec.sections[i].aspect })), theme: rec.theme });
});
const exp = await newPage();
await exp.setContent(html, { waitUntil: 'load' });
await exp.waitForTimeout(2000);
const mountedSecs = await exp.evaluate(() => [...document.querySelectorAll('.ml-sec')].filter((s) => s.firstElementChild.shadowRoot?.querySelector('.d')).length);
check('export: every section mounted', mountedSecs === (await b.locator('.sec').count()), `(${mountedSecs})`);
await exp.screenshot({ path: path.join(OUT, 'export.png'), fullPage: true });

// reload restores
await b.reload();
await b.waitForSelector('.sec');
check('builder: state restored after reload', (await b.locator('.sec').count()) === n - 1);

await browser.close();
const real = errors.filter((e) => !/favicon|fonts\.g|ERR_INTERNET|ERR_NAME|net::ERR/.test(e));
check('no console errors', real.length === 0, real.length ? '\n  ' + real.slice(0, 8).join('\n  ') : '');
console.log(failed ? `\n${failed} check(s) failed` : '\nAll checks passed');
process.exit(failed ? 1 : 0);
