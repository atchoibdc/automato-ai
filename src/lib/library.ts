import { readFile } from 'node:fs/promises';
import path from 'node:path';
import type { LibraryIndex, LibraryContext, ModuleCard } from './types';

const ROOT = process.cwd();
const LIB = path.join(ROOT, 'library');

let indexP: Promise<LibraryIndex> | null = null;
let ctxP: Promise<LibraryContext> | null = null;
const catCache = new Map<string, Promise<ModuleCard[]>>();

export const getIndex = (): Promise<LibraryIndex> => {
  if (!indexP) {
    indexP = readFile(path.join(LIB, 'index.json'), 'utf8').then((data) => JSON.parse(data) as LibraryIndex);
  }
  return indexP;
};

export const getCtx = (): Promise<LibraryContext> => {
  if (!ctxP) {
    ctxP = readFile(path.join(LIB, 'ctx.json'), 'utf8').then((data) => JSON.parse(data) as LibraryContext);
  }
  return ctxP;
};

export async function getCategory(cat: string): Promise<ModuleCard[]> {
  if (!/^[a-z0-9-]+$/.test(cat)) throw new Error('bad category');
  if (!catCache.has(cat)) {
    const p = readFile(path.join(LIB, 'modules', `${cat}.json`), 'utf8').then(
      (data) => JSON.parse(data) as ModuleCard[]
    );
    catCache.set(cat, p);
  }
  return catCache.get(cat)!;
}

export async function getModule(id: string): Promise<ModuleCard | null> {
  const idx = await getIndex();
  const slim = idx.modules.find((m) => m.id === id);
  if (!slim) return null;
  const cards = await getCategory(slim.cat);
  return cards.find((m) => m.id === id) || null;
}

export function libraryReady(): Promise<boolean> {
  return readFile(path.join(LIB, 'index.json'))
    .then(() => true)
    .catch(() => false);
}
