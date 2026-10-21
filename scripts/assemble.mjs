// Assemble a recipe into one self-contained HTML page.
//   node scripts/assemble.mjs recipe.json out.html
// recipe: { "theme": { "mode": "light|dark", "accent": "#RRGGBB" },
//           "sections": [ { "id": "hero-split-reveal", "aspect": 1.78, "texts": { "0": "Real headline" } } ] }
// "texts" is optional: { textNodeIndex: replacement } using indices from `--nodes <id>`.
//   node scripts/assemble.mjs --nodes hero-split-reveal     (list editable text nodes of a module)
import { readFile, writeFile } from 'node:fs/promises';
import { getCtx, getModule } from '../server/lib/library.js';
import { exportPageHtml } from '../shared/ml-core.mjs';
import { applyTexts, textNodes } from '../server/agent/retext.js';

const [a, b] = process.argv.slice(2);

if (a === '--nodes') {
  const m = await getModule(b);
  if (!m) { console.error(`Unknown module id: ${b}`); process.exit(1); }
  console.log(JSON.stringify(textNodes(m.html).map((text, i) => ({ i, text })), null, 2));
  process.exit(0);
}
if (!a || !b) { console.error('Usage: node scripts/assemble.mjs recipe.json out.html'); process.exit(1); }

const recipe = JSON.parse(await readFile(a, 'utf8'));
const ctx = await getCtx();
const sections = [];
for (const s of recipe.sections || []) {
  const card = await getModule(s.id);
  if (!card) { console.error(`Unknown module id: ${s.id}`); process.exit(1); }
  const html = s.texts && Object.keys(s.texts).length ? applyTexts(card.html, s.texts) : card.html;
  sections.push({ card: { ...card, html }, aspect: Number(s.aspect) || 16 / 9, label: card.title });
}
if (!sections.length) { console.error('Recipe has no sections'); process.exit(1); }
await writeFile(b, exportPageHtml(ctx, { title: recipe.title || 'Wireframe', sections, theme: recipe.theme || {} }));
console.log(`Wrote ${b} (${sections.length} sections)`);
