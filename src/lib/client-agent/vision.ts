import { generateJson, imagePart, hasKey } from './gemini';
import type { PageSpec, SectionSpec } from '../types';

export const ROLES = [
  'nav',
  'hero',
  'logos',
  'features',
  'stats',
  'testimonials',
  'pricing',
  'faq',
  'form',
  'cta',
  'gallery',
  'footer',
  'background',
  'other',
] as const;

const S = (description: string) => ({ type: 'STRING', description });
const SPEC_SCHEMA = {
  type: 'OBJECT',
  properties: {
    page: {
      type: 'OBJECT',
      properties: {
        mode: { type: 'STRING', enum: ['light', 'dark'], description: 'Overall page background brightness' },
        accent: S('Dominant brand/accent color as #RRGGBB'),
        font_style: S('One of: sans, serif, mono, display'),
        tone: S('2-5 words describing the visual style'),
      },
      required: ['mode', 'accent'],
    },
    sections: {
      type: 'ARRAY',
      description: 'Every distinct horizontal band of the page, top to bottom',
      items: {
        type: 'OBJECT',
        properties: {
          role: { type: 'STRING', enum: ROLES },
          description: S('What this section looks like: layout, columns, imagery, decoration'),
          layout: S(
            'e.g. "centered headline over product screenshot", "3 equal cards in a row", "2 columns: text left, image right"'
          ),
          elements: {
            type: 'ARRAY',
            items: { type: 'STRING' },
            description: 'Visible UI elements, e.g. "logo", "5 nav links", "primary button", "pricing toggle"',
          },
          motion_hint: S(
            'Any visible hint of animation or 3D (marquee, floating cards, 3D object, gradient glow). Empty if none.'
          ),
          wants_3d: { type: 'BOOLEAN', description: 'True only if the section features a 3D rendered object or scene' },
          aspect: {
            type: 'NUMBER',
            description: 'Section width divided by height as seen in the image (e.g. 2.4 for a wide short band). Estimate.',
          },
          texts: {
            type: 'OBJECT',
            properties: {
              headline: S('Main heading text, verbatim'),
              subhead: S('Supporting paragraph text, verbatim, shortened to one sentence'),
              cta: S('Primary button label'),
              items: {
                type: 'ARRAY',
                items: { type: 'STRING' },
                description: 'Other visible labels: nav links, card titles, plan names, stat labels',
              },
            },
          },
        },
        required: ['role', 'description', 'aspect'],
      },
    },
  },
  required: ['page', 'sections'],
};

const SYSTEM = `You are a UI analyst. You look at a screenshot or mockup of a web page and describe its structure so a builder can reproduce it from a library of pre-built section modules.
Rules:
- List every distinct section top to bottom, in order. Do not merge different sections and do not invent sections that are not visible.
- Choose the closest role from the allowed list. A sticky top bar is "nav"; the first big banner is "hero"; a strip of company logos is "logos"; benefit/feature cards or bento grids are "features"; big numbers are "stats"; quotes/reviews are "testimonials"; plan tiers are "pricing"; Q&A accordions are "faq"; sign-up or contact fields are "form"; a closing call-to-action band is "cta"; photo grids/carousels are "gallery"; the bottom link area is "footer".
- Copy visible text verbatim where legible. Never fabricate text you cannot read.
- Colors: accent is the dominant brand color for buttons/links, as #RRGGBB.`;

export async function analyzeImageClient(
  base64Data: string,
  mimeType: string,
  notes = '',
  forceMock = false
): Promise<PageSpec> {
  if (forceMock || !hasKey()) {
    // Instant client mock spec
    return mockSpec();
  }

  const spec = await generateJson<PageSpec>({
    system: SYSTEM,
    parts: [imagePart(base64Data, mimeType), { text: `Analyze this page design.${notes ? ` User notes: ${notes}` : ''}` }],
    schema: SPEC_SCHEMA,
  });
  return normalizeSpec(spec);
}

export function normalizeSpec(spec: any): PageSpec {
  const sections: SectionSpec[] = (spec.sections || [])
    .filter((s: any) => s && (ROLES as readonly string[]).includes(s.role))
    .map((s: any, i: number) => ({
      order: i,
      role: s.role,
      description: String(s.description || ''),
      layout: String(s.layout || ''),
      elements: Array.isArray(s.elements) ? s.elements.slice(0, 20) : [],
      motion_hint: String(s.motion_hint || ''),
      wants_3d: !!s.wants_3d,
      aspect: Math.min(Math.max(Number(s.aspect) || 2, 0.8), 6),
      texts: { headline: '', subhead: '', cta: '', items: [], ...(s.texts || {}) },
    }));

  if (!sections.length) throw new Error('No sections detected in the image');
  const p = spec.page || {};
  return {
    page: {
      mode: p.mode === 'dark' ? 'dark' : 'light',
      accent: /^#[0-9a-f]{6}$/i.test(p.accent || '') ? p.accent : '#0A6CFF',
      font_style: p.font_style || 'sans',
      tone: p.tone || '',
    },
    sections,
  };
}

export function mockSpec(): PageSpec {
  return normalizeSpec({
    page: { mode: 'light', accent: '#1D4ED8', font_style: 'sans', tone: 'clean saas' },
    sections: [
      {
        role: 'nav',
        description: 'logo left, links, button right',
        aspect: 5,
        texts: { items: ['Product', 'Pricing', 'Docs'], cta: 'Sign up' },
      },
      {
        role: 'hero',
        description: 'centered headline over product screenshot',
        aspect: 1.8,
        texts: {
          headline: 'Ship faster with Acme',
          subhead: 'The workspace for modern teams.',
          cta: 'Get started',
        },
      },
      { role: 'logos', description: 'row of 5 company logos', aspect: 5 },
      { role: 'features', description: '3 cards in a row with icons', aspect: 2, texts: { headline: 'Everything you need' } },
      { role: 'pricing', description: '3 plan cards, middle highlighted', aspect: 1.8 },
      { role: 'footer', description: 'multi column links', aspect: 3 },
    ],
  });
}
