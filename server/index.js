import 'dotenv/config';
import express from 'express';
import multer from 'multer';
import path from 'node:path';
import { ROOT, getIndex, getCtx, getCategory, libraryReady } from './lib/library.js';
import { analyzeImage } from './agent/vision.js';
import { matchSections, candidatesFor } from './agent/matcher.js';
import { retext } from './agent/retext.js';
import { hasKey, isMock } from './agent/gemini.js';

const app = express();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 12 * 1024 * 1024 } });
const OK_MIME = new Set(['image/png', 'image/jpeg', 'image/webp']);

app.use(express.json({ limit: '2mb' }));

// CORS for local cross-port access (e.g. Laragon Apache on port 80 -> Node on port 3000)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});
// Clean route aliases
app.get('/library', (_req, res) => res.sendFile(path.join(ROOT, 'library.html')));
app.get('/builder', (_req, res) => res.sendFile(path.join(ROOT, 'builder.html')));
app.get('/creator', (_req, res) => res.sendFile(path.join(ROOT, 'creator.html')));

app.use(express.static(ROOT));
app.use('/shared', express.static(path.join(ROOT, 'shared')));
// Local mirror of the module library. Keep this server private: do not deploy ./library publicly (see NOTICE.md).
app.use('/library', express.static(path.join(ROOT, 'library')));

const wrap = (fn) => (req, res) => fn(req, res).catch((err) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

app.get('/api/status', wrap(async (_req, res) => {
  res.json({ library: await libraryReady(), agent: hasKey() || isMock(), mock: isMock() });
}));

app.get('/api/catalog', wrap(async (_req, res) => res.json(await getIndex())));
app.get('/api/ctx', wrap(async (_req, res) => res.json(await getCtx())));
app.get('/api/category/:id', wrap(async (req, res) => res.json(await getCategory(req.params.id))));

// Image -> spec -> picks (+ optional real copy substituted into the chosen modules)
app.post('/api/plan', upload.single('image'), wrap(async (req, res) => {
  const f = req.file;
  if (!f) return res.status(400).json({ error: 'Upload an image in the "image" field' });
  if (!OK_MIME.has(f.mimetype)) return res.status(415).json({ error: 'Use a PNG, JPEG or WebP image' });
  const spec = await analyzeImage(f.buffer, f.mimetype, String(req.body.notes || '').slice(0, 500));
  const sections = await matchSections(f.buffer, f.mimetype, spec);
  const html = req.body.retext === '0' ? {} : await retext(sections);
  res.json({ page: spec.page, sections: sections.map((s) => ({ ...s, html: html[s.order] || null })) });
}));

// Alternatives for one section (used by "swap module")
app.post('/api/candidates', wrap(async (req, res) => {
  const list = await candidatesFor(req.body.section || { role: 'other' }, { max: 40 });
  res.json(list.map((m) => ({ id: m.id, title: m.title, sub: m.sub, cat: m.cat })));
}));

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => {
  console.log(`Automato AI unified server: http://localhost:${port}`);
  libraryReady().then((ok) => ok || console.warn('Library not built. Run: npm run setup:library'));
  if (!hasKey() && !isMock()) console.warn('GEMINI_API_KEY not set: library browsing works, the agent will return 503.');
});
