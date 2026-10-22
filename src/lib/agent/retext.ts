// Swap the sample copy inside a chosen module for the real text read from the design.
import { getModule } from '../library';
import { generateJson, isMock } from './gemini';
import type { SectionSpec } from '../types';

const NODE_RE = /(<(style|script)\b[\s\S]*?<\/\2>)|>([^<>]{2,})</g;

/** Visible text nodes of a module's html, in document order. */
export function textNodes(html: string): string[] {
  const out: string[] = [];
  html.replace(NODE_RE, (m, block, _tag, text) => {
    if (!block && /[A-Za-z]/.test(text) && text.trim().length > 1) out.push(text.trim());
    return m;
  });
  return out;
}

/** Replace text nodes by index. `map` is { [index]: newText }. */
export function applyTexts(html: string, map: Record<number, string>): string {
  let i = -1;
  return html.replace(NODE_RE, (m, block, _tag, text) => {
    if (block) return m;
    if (!/[A-Za-z]/.test(text) || text.trim().length <= 1) return m;
    i += 1;
    if (!(i in map)) return m;
    const lead = text.match(/^\s*/)?.[0] || '';
    const trail = text.match(/\s*$/)?.[0] || '';
    const safe = String(map[i]).replace(/[<>]/g, '').replace(/&(?!#?\w+;)/g, '&amp;');
    return `>${lead}${safe}${trail}<`;
  });
}

const SCHEMA = {
  type: 'OBJECT',
  properties: {
    sections: {
      type: 'ARRAY',
      items: {
        type: 'OBJECT',
        properties: {
          order: { type: 'INTEGER' },
          replacements: {
            type: 'ARRAY',
            items: {
              type: 'OBJECT',
              properties: { i: { type: 'INTEGER' }, text: { type: 'STRING' } },
              required: ['i', 'text'],
            },
          },
        },
        required: ['order', 'replacements'],
      },
    },
  },
  required: ['sections'],
};

const SYSTEM = `You localize placeholder text inside UI modules.
For each section you get the module's text nodes (index + current sample text) and the real text found in the design.
Return replacements only for nodes where a real text clearly belongs (headline, subhead, button label, nav links, plan names, card titles, stats labels). Leave everything else out.
Keep each replacement close to the original length (within about 50 percent longer) so the layout does not overflow. Never invent facts: use only the real text provided. Plain text only, no HTML.`;

interface RetextResult {
  sections: Array<{
    order: number;
    replacements: Array<{ i: number; text: string }>;
  }>;
}

/** sections: [{ order, pick:{id}, texts }] -> { [order]: html } with substituted copy. */
export async function retext(sections: SectionSpec[]): Promise<Record<number, string>> {
  const jobs: Array<{ order: number; nodes: string[]; real: any }> = [];
  for (const s of sections) {
    const t = s.texts || {};
    const has = t.headline || t.subhead || t.cta || (t.items || []).length;
    if (!has || !s.pick?.id) continue;
    const mod = await getModule(s.pick.id);
    if (!mod) continue;
    const nodes = textNodes(mod.html);
    if (nodes.length) jobs.push({ order: s.order, nodes, real: t });
  }

  if (!jobs.length || isMock()) return {};

  let res: RetextResult | undefined;
  try {
    res = await generateJson<RetextResult>({
      system: SYSTEM,
      parts: [
        {
          text: JSON.stringify(
            jobs.map((j) => ({
              order: j.order,
              nodes: j.nodes.map((text, i) => ({ i, text })),
              real: j.real,
            }))
          ),
        },
      ],
      schema: SCHEMA,
    });
  } catch (err: any) {
    console.warn('[retext] skipped:', err.message);
    return {};
  }

  const out: Record<number, string> = {};
  for (const r of res?.sections || []) {
    const job = jobs.find((j) => j.order === r.order);
    if (!job) continue;
    const map: Record<number, string> = {};
    for (const x of r.replacements || []) {
      if (Number.isInteger(x.i) && x.i >= 0 && x.i < job.nodes.length && x.text?.trim()) {
        map[x.i] = x.text.trim();
      }
    }
    const targetSection = sections.find((s) => s.order === r.order);
    if (!targetSection?.pick?.id) continue;
    const mod = await getModule(targetSection.pick.id);
    if (mod && Object.keys(map).length) {
      out[r.order] = applyTexts(mod.html, map);
    }
  }

  return out;
}
