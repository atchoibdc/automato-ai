import { mountCard, SCREEN_W, exportCardHtml } from '../shared/ml-core.mjs';

export const API_BASE = (window.location.port === '3000' || window.location.port === '') && !window.location.pathname.startsWith('/automato-ai') ? '' : (window.AUTOMATO_API || 'http://localhost:3000');
export const $ = (s, r = document) => r.querySelector(s);
export const $$ = (s, r = document) => [...r.querySelectorAll(s)];
export const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

export const ICON = {
  logo: '<svg class="automato-mark" viewBox="0 0 64 64" width="22" height="22" aria-hidden="true"><defs><radialGradient id="lg-tomato" cx="35%" cy="30%" r="75%"><stop offset="0%" stop-color="#ff8a6b"/><stop offset="55%" stop-color="#ff3d2e"/><stop offset="100%" stop-color="#b3150f"/></radialGradient></defs><circle cx="32" cy="37" r="23" fill="url(#lg-tomato)"/><path d="M32 17 22 9l12 3 7-7-2 10 11-1-11 6 6 8-12-6-6 8z" fill="#7ee05a" transform="translate(0 2) scale(.95) translate(1.6 0)"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  moon: '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M21 13a8 8 0 0 1-10-10 9 9 0 1 0 10 10z"/></svg>',
  sun: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  expand: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>',
  chat: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  code: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/></svg>',
  close: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
};

// ---------- theme ----------
export function initTheme(btn) {
  const set = (t) => {
    document.documentElement.dataset.theme = t;
    try {
      localStorage.setItem('automato-theme', t);
      localStorage.setItem('atelier-theme', t);
    } catch {}
    if (btn) { btn.innerHTML = t === 'dark' ? ICON.sun : ICON.moon; btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'); }
  };
  let t = null;
  try { t = localStorage.getItem('automato-theme') || localStorage.getItem('atelier-theme'); } catch {}
  set(t || 'dark');
  btn?.addEventListener('click', () => set(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
}

// ---------- toast / clipboard ----------
export function toast(msg) {
  $('.toast')?.remove();
  const t = Object.assign(document.createElement('div'), { className: 'toast', textContent: msg, role: 'status' });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1800);
}
export async function copy(text, label = 'Copied') {
  try { await navigator.clipboard.writeText(text); toast(label); }
  catch {
    const ta = Object.assign(document.createElement('textarea'), { value: text });
    document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove(); toast(label);
  }
}

// ---------- data ----------
export async function loadCore() {
  const [ctx, index] = await Promise.all([fetch(`${API_BASE}/api/ctx`).then((r) => r.json()), fetch(`${API_BASE}/api/catalog`).then((r) => r.json())]);
  ctx.libBase = '/library/';
  return { ctx, index };
}
const catCache = {};
export const loadCategory = (id) => (catCache[id] ||= fetch(`${API_BASE}/api/category/${id}`).then((r) => r.json()));

// ---------- live card tile (mounts only while near the viewport) ----------
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const t = e.target.__tile;
    if (!t) continue;
    if (e.isIntersecting) t.mount(); else t.unmount();
  }
}, { rootMargin: '250px' });

const fitObs = new ResizeObserver((es) => {
  for (const e of es) if (e.contentRect.width) e.target.style.setProperty('--k', (e.contentRect.width / SCREEN_W).toFixed(4));
});

/** Fill `stageEl` with a lazily mounted live card. */
export function liveStage(stageEl, card, ctx, theme) {
  stageEl.classList.toggle('screen', !!card.screen);
  const host = document.createElement('div');
  host.className = 'host';
  stageEl.prepend(host);
  if (card.screen) fitObs.observe(stageEl);
  let m = null;
  stageEl.__tile = {
    mount() { if (!m) m = mountCard(host, card, ctx, theme); },
    unmount() { m?.destroy(); m = null; },
  };
  io.observe(stageEl);
}

export function downloadFile(name, text, type = 'text/html') {
  const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([text], { type })), download: name });
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 2000);
}
export { exportCardHtml };
