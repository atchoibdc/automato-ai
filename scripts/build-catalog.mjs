// Builds library/index.json (slim catalog for the agent) and library/modules/<cat>.json (full card data)
// by executing each mirrored card file in a sandbox with a stub ML.add().
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LIB = path.join(ROOT, 'library');

// Category -> page role the agent matches against.
const ROLE = {
  hero: 'hero', nav: 'nav', scroll: 'effect', text: 'typography', buttons: 'cta', cards: 'features',
  media: 'gallery', proof: 'logos', testimonials: 'testimonials', pricing: 'pricing', stats: 'stats',
  faq: 'faq', forms: 'form', overlays: 'overlay', loaders: 'loader', transitions: 'effect',
  backgrounds: 'background', cursor: 'effect', footer: 'footer',
  'three-objects': 'hero-3d', 'three-particles': 'background', 'three-shaders': 'background',
  'three-interactive': 'hero-3d', 'three-scroll': 'effect', 'gsap-scroll': 'effect', 'gsap-text': 'typography',
  'gsap-svg': 'effect', 'gsap-flip': 'features', 'gsap-drag': 'features', lenis: 'effect',
};
// Website-focused categories get priority in matching.
const WEBSITE = new Set(['hero', 'nav', 'cards', 'media', 'proof', 'testimonials', 'pricing', 'stats', 'faq', 'forms', 'footer', 'buttons', 'backgrounds']);

const load = async (rel) => readFile(path.join(LIB, rel), 'utf8');

const base = { window: {}, console, setTimeout, clearTimeout };
vm.createContext(base);
for (const f of ['src/registry.js', 'src/stage-base.js', 'src/libs.js']) vm.runInContext(await load(f), base, { filename: f });
const cats = base.window.ML_CATEGORIES;

const slim = [];
const issues = [];
await mkdir(path.join(LIB, 'modules'), { recursive: true });

for (const c of cats) {
  const captured = [];
  const sb = {
    window: {}, console, setTimeout, clearTimeout,
    document: new Proxy({}, { get: () => () => ({}) }),
    matchMedia: () => ({ matches: false, addEventListener() {} }),
    requestAnimationFrame: () => 0, cancelAnimationFrame() {}, performance: { now: () => 0 }, Math, Date,
  };
  sb.window.ML = { cards: captured, byId: {}, add(card) { captured.push(card); } };
  sb.ML = sb.window.ML;
  sb.window.ML_STAGE_BASE = base.window.ML_STAGE_BASE;
  sb.window.ML_LIBS = base.window.ML_LIBS;
  vm.createContext(sb);
  try {
    vm.runInContext(await load(`src/cards/${c.id}.js`), sb, { filename: `${c.id}.js` });
  } catch (e) {
    issues.push(`${c.id}: ${e.message}`);
    continue;
  }
  const full = captured.map((card) => ({
    id: card.id, cat: c.id, title: card.title, sub: card.sub, libs: card.libs || [],
    live: !!card.live, screen: !!c.screen, html: card.html, css: card.css,
    run: typeof card.run === 'function' ? card.run.toString() : card.run || '',
    prompt: card.prompt || '',
  }));
  await writeFile(path.join(LIB, 'modules', `${c.id}.json`), JSON.stringify(full));
  for (const m of full) {
    slim.push({
      id: m.id, cat: c.id, role: ROLE[c.id] || (c.screen ? 'app-screen' : c.live ? 'mobile-component' : 'other'),
      kind: c.screen ? 'screen' : c.live ? 'mobile' : 'section', website: WEBSITE.has(c.id),
      title: m.title, sub: m.sub, libs: m.libs,
      text: `${m.title}. ${m.sub}. ${m.prompt.slice(0, 280)}`,
    });
  }
  console.log(c.id.padEnd(20), full.length, 'cards');
}

await writeFile(path.join(LIB, 'index.json'), JSON.stringify({
  generated: new Date().toISOString(),
  categories: cats.map(({ id, name, blurb, screen, live }) => ({ id, name, blurb, screen: !!screen, live: !!live, role: ROLE[id] || null })),
  modules: slim,
}));
console.log(`\n${slim.length} modules in ${cats.length} categories`);
await writeFile(path.join(LIB, 'ctx.json'), JSON.stringify({
  stageBase: base.window.ML_STAGE_BASE,
  screenBase: base.window.ML_SCREEN_BASE,
  libsMeta: JSON.parse(JSON.stringify(base.window.ML_LIBS)),
}));
if (issues.length) console.warn('Issues:\n' + issues.join('\n'));
