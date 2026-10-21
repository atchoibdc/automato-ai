// Mirrors the BrewedOps Motion Library source files into ./library for LOCAL, PRIVATE use.
// License reminder: cards may be used inside things you build, but the library itself must not be
// republished as a collection. Do not deploy ./library publicly. See NOTICE.md.
import { mkdir, writeFile, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'library');
const BASE = 'https://brewedops.cloud/motionlibrary/';
const DELAY_MS = 400; // be polite
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function exists(p) {
  try { await stat(p); return true; } catch { return false; }
}

async function get(rel, { binary = false } = {}) {
  const dest = path.join(OUT, rel);
  if (await exists(dest)) return binary ? readFile(dest) : readFile(dest, 'utf8');
  await sleep(DELAY_MS);
  const res = await fetch(BASE + rel, { headers: { 'user-agent': 'motion-wireframe-agent/0.1 (local mirror)' } });
  if (!res.ok) throw new Error(`${res.status} ${BASE + rel}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
  console.log('fetched', rel, `(${buf.length} bytes)`);
  return binary ? buf : buf.toString('utf8');
}

// 1. Core files
for (const f of ['src/registry.js', 'src/stage-base.js', 'src/libs.js', 'src/manifest.js']) await get(f);

// 2. Read the category list by evaluating registry.js in a sandbox.
const sandbox = { window: {}, console };
vm.createContext(sandbox);
vm.runInContext(await readFile(path.join(OUT, 'src/registry.js'), 'utf8'), sandbox);
const cats = sandbox.window.ML_CATEGORIES;
if (!Array.isArray(cats) || !cats.length) throw new Error('Could not read ML_CATEGORIES');
console.log(`Found ${cats.length} categories`);

// 2b. Vendored libs (three, gsap, lenis) that lib-based cards need at runtime
vm.runInContext(await readFile(path.join(OUT, 'src/libs.js'), 'utf8'), sandbox);
for (const lib of Object.values(sandbox.window.ML_LIBS || {})) {
  try { await get(lib.bundle, { binary: true }); } catch (e) { console.warn('lib bundle failed:', lib.bundle, e.message); }
}

// 3. Card files, one per category
const failed = [];
for (const c of cats) {
  try { await get(`src/cards/${c.id}.js`); } catch (e) { failed.push(`${c.id}: ${e.message}`); }
}

// 4. Fonts (SIL OFL) used by the demos
for (const f of ['geist-latin', 'montserrat-latin-700']) {
  try { await get(`assets/fonts/${f}.woff2`, { binary: true }); } catch (e) { failed.push(`${f}: ${e.message}`); }
}

if (failed.length) console.warn('\nFailed:\n' + failed.join('\n'));
console.log('\nDone. Next: npm run catalog');
