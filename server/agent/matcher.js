// Phase 4: pick a library module for every detected section.
// Stage A: restrict by role -> categories.  Stage B: lexical pre-rank.  Stage C: model picks, with fallbacks.
import { getIndex } from '../lib/library.js';
import { generateJson, imagePart, isMock } from './gemini.js';

const ROLE_CATS = {
  nav: ['nav'],
  hero: ['hero'],
  logos: ['proof'],
  features: ['cards', 'gsap-flip'],
  stats: ['stats'],
  testimonials: ['testimonials'],
  pricing: ['pricing'],
  faq: ['faq'],
  form: ['forms'],
  cta: ['buttons', 'footer', 'hero'],
  gallery: ['media'],
  footer: ['footer'],
  background: ['backgrounds'],
  other: ['cards', 'hero'],
};
const STOP = new Set('a an the of and or to in on with for at by from as is are it its this that over under row each one two three four five six left right'.split(' '));
const tokens = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w));
const stem = (w) => w.replace(/(ing|es|s|ed)$/, '');

export async function candidatesFor(section, { max = 24 } = {}) {
  const idx = await getIndex();
  const cats = new Set(ROLE_CATS[section.role] || ROLE_CATS.other);
  if (section.wants_3d) cats.add('three-objects');
  const q = new Set(
    tokens([section.description, section.layout, section.motion_hint, ...(section.elements || []), ...(section.texts?.items || [])].join(' ')).map(stem),
  );
  const scored = idx.modules
    .filter((m) => cats.has(m.cat) && m.kind === 'section')
    .map((m) => {
      const t = new Set(tokens(m.title).map(stem));
      const d = new Set(tokens(`${m.sub} ${m.text}`).map(stem));
      let score = 0;
      for (const w of q) score += (t.has(w) ? 2 : 0) + (d.has(w) ? 1 : 0);
      // keep the section's own category ahead of fallbacks
      if (m.cat === (ROLE_CATS[section.role] || [])[0]) score += 0.5;
      return { m, score };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, max).map((s) => s.m);
}

const PICK_SCHEMA = {
  type: 'OBJECT',
  properties: {
    picks: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          order: { type: 'INTEGER' },
          id: { type: 'STRING', description: 'Chosen module id, exactly as listed' },
          confidence: { type: 'NUMBER', description: '0 to 1: how well the module fits the design' },
          reason: { type: 'STRING', description: 'One short sentence' },
          alternatives: { type: 'ARRAY', items: { type: 'STRING' }, description: 'Up to 3 other listed ids that could also work' },
        },
        required: ['order', 'id', 'confidence', 'reason'],
      },
    },
  },
  required: ['picks'],
};

const SYSTEM = `You choose pre-built UI section modules to reproduce a design.
For each section of the design, you get a short list of candidate modules (id, title, what it does). Pick the one whose structure and layout best matches that section in the image. Prefer structural fit (columns, arrangement, elements present) over decorative motion. Only return ids that appear in that section's candidate list.
If nothing fits well, pick the plainest candidate and give a low confidence.`;

export async function matchSections(buffer, mimeType, spec) {
  const lists = [];
  for (const s of spec.sections) lists.push(await candidatesFor(s));

  let picks = [];
  if (!isMock()) {
    const payload = spec.sections.map((s, i) => ({
      order: s.order,
      role: s.role,
      description: s.description,
      layout: s.layout,
      elements: s.elements,
      candidates: lists[i].map((m) => ({ id: m.id, title: m.title, does: m.sub })),
    }));
    const parts = buffer ? [imagePart(buffer, mimeType)] : [];
    parts.push({ text: `Sections and their candidates:\n${JSON.stringify(payload)}` });
    try {
      picks = (await generateJson({ system: SYSTEM, parts, schema: PICK_SCHEMA })).picks || [];
    } catch (err) {
      console.warn('[matcher] model pick failed, using lexical fallback:', err.message);
    }
  }

  return spec.sections.map((s, i) => {
    const allowed = new Set(lists[i].map((m) => m.id));
    const p = picks.find((x) => x.order === s.order && allowed.has(x.id));
    const chosen = p || { id: lists[i][0]?.id, confidence: 0.2, reason: 'Fallback: best keyword match', alternatives: [] };
    const alts = [...new Set([...(p?.alternatives || []), ...lists[i].map((m) => m.id)])].filter((id) => id !== chosen.id && allowed.has(id)).slice(0, 6);
    return {
      ...s,
      pick: { id: chosen.id, confidence: Math.min(Math.max(+chosen.confidence || 0, 0), 1), reason: chosen.reason || '' },
      alternatives: alts,
      candidates: lists[i].map((m) => ({ id: m.id, title: m.title, sub: m.sub })),
    };
  });
}
