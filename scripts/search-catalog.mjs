// Search the local module catalog.
//   node scripts/search-catalog.mjs --role hero --q "split screen product screenshot" [--limit 10] [--3d]
//   node scripts/search-catalog.mjs --roles          (list roles and their categories)
import { candidatesFor } from '../server/agent/matcher.js';

const args = process.argv.slice(2);
const get = (k) => { const i = args.indexOf(`--${k}`); return i >= 0 ? args[i + 1] : undefined; };
const has = (k) => args.includes(`--${k}`);

if (has('roles')) {
  console.log(['nav', 'hero', 'logos', 'features', 'stats', 'testimonials', 'pricing', 'faq', 'form', 'cta', 'gallery', 'footer', 'background', 'other'].join(', '));
  process.exit(0);
}
const role = get('role') || 'other';
const q = get('q') || '';
const limit = Number(get('limit')) || 10;
const list = await candidatesFor({ role, description: q, layout: '', elements: [], wants_3d: has('3d') }, { max: limit });
console.log(JSON.stringify(list.map((m) => ({ id: m.id, cat: m.cat, title: m.title, does: m.sub, libs: m.libs })), null, 2));
