import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const LIB = path.join(ROOT, 'library');

let indexP, ctxP;
const catCache = new Map();

export const getIndex = () => (indexP ||= readFile(path.join(LIB, 'index.json'), 'utf8').then(JSON.parse));
export const getCtx = () => (ctxP ||= readFile(path.join(LIB, 'ctx.json'), 'utf8').then(JSON.parse));

export async function getCategory(cat) {
  if (!/^[a-z0-9-]+$/.test(cat)) throw new Error('bad category');
  if (!catCache.has(cat)) catCache.set(cat, readFile(path.join(LIB, 'modules', `${cat}.json`), 'utf8').then(JSON.parse));
  return catCache.get(cat);
}

export async function getModule(id) {
  const idx = await getIndex();
  const slim = idx.modules.find((m) => m.id === id);
  if (!slim) return null;
  return (await getCategory(slim.cat)).find((m) => m.id === id) || null;
}

export function libraryReady() {
  return readFile(path.join(LIB, 'index.json')).then(() => true, () => false);
}
