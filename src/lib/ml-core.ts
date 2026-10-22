// Shared by the browser (library + builder) and server export.
// Mirrors the mount/export contract of the reference library:
//   shadow root = <style>STAGE_BASE + css</style><div class="d">html</div>, then run(root, lib) -> cleanup?
// Section cards are authored on a small "logical" stage and scaled up uniformly to fit the page width.
import type { LibraryContext, ModuleCard, PageTheme } from './types';
import { withBasePath } from './base-path';

export const SECTION_W = 560; // logical width of a section card stage
export const SCREEN_W = 1024; // app screens use a 1024x768 canvas
export const SCREEN_H = 768;

export const esc = (s: unknown): string =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] || c));

/** Logical width (px) a card is authored at. */
export const logicalWidth = (isScreen?: boolean): number => (isScreen ? SCREEN_W : SECTION_W);

/** CSS variable overrides derived from a theme */
export function themeCss(theme: Partial<PageTheme> = {}): string {
  const out: string[] = [];
  if (theme.mode === 'dark') {
    out.push(
      '--ml-bg:#130C0A',
      '--ml-surface:#1C1310',
      '--ml-line:rgba(255,244,234,0.1)',
      '--ml-bar:rgba(255,244,234,0.14)',
      '--ml-bar-2:rgba(255,244,234,0.07)',
      '--ml-ink:#FFF4EA',
      '--ml-ink-2:#D8C7BB',
      '--ml-muted:#B9A79B',
      '--ml-shadow:0 1px 2px rgba(0,0,0,.4),0 8px 24px rgba(0,0,0,.35)',
      '--ml-shadow-lg:0 2px 4px rgba(0,0,0,.4),0 18px 40px rgba(0,0,0,.5)'
    );
  }
  if (/^#[0-9a-f]{3,8}$/i.test(theme.accent || '')) {
    const a = theme.accent || '#FF4433';
    out.push(
      `--ml-accent:${a}`,
      `--ml-accent-2:color-mix(in srgb,${a} 65%,white)`,
      `--ml-accent-ink:color-mix(in srgb,${a} 75%,black)`,
      `--ml-accent-soft:color-mix(in srgb,${a} 12%,${theme.mode === 'dark' ? '#0B0F17' : 'white'})`,
      `--ml-accent-line:color-mix(in srgb,${a} 35%,${theme.mode === 'dark' ? '#0B0F17' : 'white'})`,
      `--ml-grad:linear-gradient(135deg,${a} 0%,color-mix(in srgb,${a} 65%,white) 100%)`
    );
  }
  return out.length ? `.d{${out.join(';')}}` : '';
}

/** The CSS placed inside a card's shadow root: base, screen base, theme, card css. */
export function stageCss(ctx: LibraryContext, card: Partial<ModuleCard>, theme?: Partial<PageTheme>): string {
  return `${ctx.stageBase || ''}${card.screen ? ctx.screenBase || '' : ''}${themeCss(theme)}${card.css || ''}`;
}

// ---------- Browser: library loading + mounting ----------
const libLoads: Record<string, Promise<any>> = {};

export function loadLibs(
  libsMeta: LibraryContext['libsMeta'] = {},
  keys: string[] = [],
  libBase?: string
): Promise<any> {
  const base = libBase || withBasePath('/library/');
  if (typeof window === 'undefined') return Promise.resolve({});
  return Promise.all(
    keys.map(
      (k) =>
        (libLoads[k] ||= new Promise((res, rej) => {
          if (!libsMeta[k]) return res({});
          const s = document.createElement('script');
          s.src = base + libsMeta[k].bundle;
          s.onload = () => res((window as any)[libsMeta[k].global]);
          s.onerror = () => rej(new Error(`could not load ${s.src}`));
          document.head.appendChild(s);
        }))
    )
  ).then((mods) => Object.assign({}, ...mods, { pixelRatio: Math.min(window.devicePixelRatio || 1, 1.5) }));
}

export interface MountResult {
  root: HTMLElement;
  destroy: () => void;
}

/**
 * Mount a card into `host` (an element that can take a shadow root).
 */
export function mountCard(
  host: HTMLElement,
  card: Partial<ModuleCard>,
  ctx: LibraryContext,
  theme?: Partial<PageTheme>
): MountResult {
  const shadow = host.shadowRoot || host.attachShadow({ mode: 'open' });
  shadow.innerHTML = `<style>${stageCss(ctx, card, theme)}</style><div class="d">${card.html || ''}</div>`;
  const root = shadow.querySelector('.d') as HTMLElement;
  let cleanup: (() => void) | null = null;
  let dead = false;

  const start = (lib?: any) => {
    if (dead) return;
    try {
      if (card.run) {
        const fn = new Function(`return (${card.run})`)();
        const out = fn(root, lib);
        if (typeof out === 'function') cleanup = out;
      }
    } catch (err) {
      console.error('[card]', card.id, err);
    }
  };

  if (card.run) {
    if (card.libs?.length) {
      loadLibs(ctx.libsMeta, card.libs, ctx.libBase || withBasePath('/library/')).then(start, (e) =>
        console.error('[card]', card.id, e)
      );
    } else {
      start();
    }
  }

  return {
    root,
    destroy() {
      dead = true;
      if (root) root.dataset.paused = '1';
      try {
        cleanup?.();
      } catch (e) {
        console.error('[card] cleanup', e);
      }
      shadow.innerHTML = '';
    },
  };
}

// ---------- Export (browser or Node) ----------
const FONT_LINKS =
  '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
  '<link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@500&display=swap" rel="stylesheet">';

const safeScript = (s: string) => String(s).replace(/<\/script/gi, '<\\/script');
const jsonIsland = (v: any) =>
  JSON.stringify(v).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');

export interface ExportSection {
  card: ModuleCard;
  aspect?: number;
  label?: string;
}

export interface ExportOptions {
  title?: string;
  sections: ExportSection[];
  theme?: Partial<PageTheme>;
  single?: boolean;
}

/** One card as a standalone HTML file */
export function exportCardHtml(card: ModuleCard, ctx: LibraryContext): string {
  return exportPageHtml(ctx, {
    title: card.title,
    sections: [{ card, aspect: card.screen ? 4 / 3 : 4 / 3 }],
    single: true,
  });
}

/** A whole page: sections stacked top to bottom isolated in shadow roots */
export function exportPageHtml(
  ctx: LibraryContext,
  { title = 'Wireframe', sections, theme = {}, single = false }: ExportOptions
): string {
  const libsMeta = ctx.libsMeta || {};
  const libKeys = [...new Set(sections.flatMap((s) => s.card.libs || []))];
  const importmap = Object.assign({}, ...libKeys.map((k) => libsMeta[k]?.importmap || {}));
  const imports: string[] = [];
  const names: string[] = [];

  for (const k of libKeys) {
    if (!libsMeta[k]?.exports) continue;
    for (const [name, [spec, exp]] of Object.entries(libsMeta[k].exports)) {
      const used =
        name === 'THREE' ||
        sections.some((s) => (s.card.libs || []).includes(k) && new RegExp(`\\b${name}\\b`).test(s.card.run || ''));
      if (!used || names.includes(name)) continue;
      imports.push(
        exp === '*'
          ? `import * as ${name} from '${spec}';`
          : `import { ${exp === name ? name : `${exp} as ${name}`} } from '${spec}';`
      );
      names.push(name);
    }
  }

  const runs = sections
    .map((s, i) => (s.card.run ? `  ${i}: (${safeScript(s.card.run)}),` : ''))
    .filter(Boolean)
    .join('\n');

  const data = {
    base: ctx.stageBase,
    screenBase: ctx.screenBase,
    theme: themeCss(theme),
    cards: sections.map((s) => ({ css: s.card.css || '', html: s.card.html, screen: !!s.card.screen })),
    ar: sections.map((s) => Math.min(Math.max(s.aspect || 16 / 9, 0.6), 6)),
  };

  const secHtml = sections
    .map(
      (s, i) =>
        `<section class="ml-sec" data-i="${i}" data-id="${esc(s.card.id)}" aria-label="${esc(
          s.label || s.card.title
        )}"><div class="ml-inner"></div></section>`
    )
    .join('\n');

  const pageBg = theme.mode === 'dark' ? '#0B0F17' : '#FFFFFF';

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
${FONT_LINKS}
<style>
html,body{margin:0;background:${pageBg}}
.ml-sec{position:relative;width:100%;overflow:hidden;aspect-ratio:var(--ar)}
.ml-inner{position:absolute;left:0;top:0;transform-origin:0 0}
${
  single
    ? 'body{display:grid;place-items:center;min-height:100vh;background:#F2F5FA}.ml-sec{width:min(92vw,900px);border-radius:20px;box-shadow:0 20px 50px rgba(16,24,40,.12)}'
    : ''
}
</style>
</head>
<body>
${secHtml}
<script type="application/json" id="ml-data">${jsonIsland(data)}</script>${
    libKeys.length
      ? `\n<script type="importmap">\n${JSON.stringify({ imports: importmap }, null, 2)}\n</script>`
      : ''
  }
<script type="module">
${imports.join('\n')}
const lib = { ${names.join(', ')}${names.length ? ', ' : ''}pixelRatio: Math.min(window.devicePixelRatio, 2) };
const runs = {
${runs}
};
const data = JSON.parse(document.getElementById('ml-data').textContent);
const W = { false: ${SECTION_W}, true: ${SCREEN_W} };
document.querySelectorAll('.ml-sec').forEach((sec) => {
  const i = +sec.dataset.i, c = data.cards[i], lw = W[c.screen];
  sec.style.setProperty('--ar', data.ar[i]);
  const inner = sec.firstElementChild;
  inner.style.width = lw + 'px';
  inner.style.height = lw / data.ar[i] + 'px';
  const shadow = inner.attachShadow({ mode: 'open' });
  shadow.innerHTML = '<style>' + data.base + (c.screen ? data.screenBase : '') + data.theme + c.css + '</style><div class="d">' + c.html + '</div>';
  const root = shadow.querySelector('.d');
  new ResizeObserver(() => { inner.style.transform = 'scale(' + sec.clientWidth / lw + ')'; }).observe(sec);
  new IntersectionObserver(([e]) => { if (e.isIntersecting) delete root.dataset.paused; else root.dataset.paused = '1'; }).observe(sec);
  if (runs[i]) { try { runs[i](root, lib); } catch (err) { console.error(sec.dataset.id, err); } }
});
</script>
</body>
</html>
`;
}
