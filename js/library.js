import { $, $$, esc, ICON, initTheme, copy, loadCore, loadCategory, liveStage, exportCardHtml } from './ui.js';
import { mountCard, SCREEN_W } from '../shared/ml-core.mjs';

const GROUPS = [
  ['Website', ['hero', 'nav', 'scroll', 'text', 'buttons', 'cards', 'media', 'proof', 'testimonials', 'pricing', 'stats', 'faq', 'forms', 'overlays', 'loaders', 'transitions', 'backgrounds', 'cursor', 'footer']],
  ['3D (Three.js)', ['three-objects', 'three-particles', 'three-shaders', 'three-interactive', 'three-scroll']],
  ['GSAP and Lenis', ['gsap-scroll', 'gsap-text', 'gsap-svg', 'gsap-flip', 'gsap-drag', 'lenis']],
  ['App screens', ['app-shells', 'app-auth', 'app-onboarding', 'app-settings', 'app-states', 'app-dashboards', 'app-industry', 'app-crm', 'app-portals', 'app-commerce', 'app-data', 'app-inbox', 'app-ai', 'app-editors']],
  ['Mobile', ['app-mobile', 'mobile-nav', 'mobile-gestures']],
];

const logoEl = $('#logo');
if (logoEl) logoEl.innerHTML = ICON.logo;

const searchIco = $('#search-ico');
if (searchIco) searchIco.innerHTML = ICON.search;

const closeBtn = $('#v-close');
if (closeBtn) closeBtn.innerHTML = ICON.close;

initTheme($('#theme'));

const { ctx, index } = await loadCore();
const cats = new Map(index.categories.map((c) => [c.id, c]));
const counts = {};
for (const m of index.modules) counts[m.cat] = (counts[m.cat] || 0) + 1;
$('#total').textContent = index.modules.length;

// ----- sidebar -----
$('#nav').innerHTML = GROUPS.map(([g, ids]) =>
  `<h4>${esc(g)}</h4>${ids.filter((id) => cats.has(id)).map((id) => `<a href="#${id}" data-cat="${id}">${esc(cats.get(id).name)}<span>${counts[id] || 0}</span></a>`).join('')}`).join('');

// ----- render -----
let current = []; // cards currently shown (full objects) for the viewer
let renderToken = 0;

const cardHtml = (c) => `
  <article class="card" data-id="${esc(c.id)}">
    <div class="stage"><button class="btn sm expand" type="button" aria-label="Open preview">${ICON.expand}</button></div>
    <div class="card-info"><h3>${esc(c.title)}</h3><p>${esc(c.sub)}</p>
      ${c.libs?.length ? `<div class="badges">${c.libs.map((l) => `<span class="badge">${esc(ctx.libsMeta[l]?.label || l)}</span>`).join('')}</div>` : ''}</div>
    <div class="card-act">
      <button class="btn sm" data-copy="prompt" type="button">${ICON.chat} Prompt</button>
      <button class="btn sm primary" data-copy="code" type="button">${ICON.code} Code</button>
    </div>
  </article>`;

async function show(cards, title, blurb) {
  const token = ++renderToken;
  current = cards;
  $('#title').textContent = title;
  $('#blurb').textContent = blurb || '';
  $('#count').textContent = cards.length;
  $('#empty').hidden = cards.length > 0;
  const grid = $('#grid');
  grid.innerHTML = '';
  // stop old tiles
  for (const st of $$('.stage')) st.__tile?.unmount();
  const frag = document.createDocumentFragment();
  const tpl = document.createElement('template');
  tpl.innerHTML = cards.map(cardHtml).join('');
  frag.append(...tpl.content.children);
  if (token !== renderToken) return;
  grid.append(frag);
  $$('.card', grid).forEach((el, i) => liveStage($('.stage', el), cards[i], ctx));
  scrollTo({ top: 0 });
}

async function route() {
  const q = $('#search').value.trim().toLowerCase();
  const id = decodeURIComponent(location.hash.slice(1)) || 'hero';
  $$('#nav a').forEach((a) => a.setAttribute('aria-current', String(!q && a.dataset.cat === id)));
  if (q) {
    const terms = q.split(/\s+/);
    const hits = index.modules.filter((m) => terms.every((t) => `${m.title} ${m.sub} ${m.cat} ${m.role}`.toLowerCase().includes(t))).slice(0, 60);
    const needed = [...new Set(hits.map((h) => h.cat))];
    const data = await Promise.all(needed.map(loadCategory));
    const byId = new Map(data.flat().map((c) => [c.id, c]));
    return show(hits.map((h) => byId.get(h.id)).filter(Boolean), 'Search results', `Matches for "${q}" across all sections.`);
  }
  const cat = cats.has(id) ? cats.get(id) : cats.get('hero');
  const cards = await loadCategory(cat.id);
  show(cards, cat.name, cat.blurb);
}

let st;
$('#search').addEventListener('input', () => { clearTimeout(st); st = setTimeout(route, 160); });
addEventListener('hashchange', () => { $('#search').value = ''; route(); });
addEventListener('keydown', (e) => { if (e.key === '/' && document.activeElement.tagName !== 'INPUT') { e.preventDefault(); $('#search').focus(); } });
route();

// ----- pause motion -----
$('#pause').addEventListener('click', (e) => {
  const on = e.currentTarget.getAttribute('aria-pressed') !== 'true';
  e.currentTarget.setAttribute('aria-pressed', on);
  e.currentTarget.textContent = on ? 'Resume motion' : 'Pause motion';
  for (const st of $$('.stage .host')) st.shadowRoot?.querySelector('.d')?.toggleAttribute('data-paused', on);
});

// ----- card actions -----
const cardOf = (el) => current.find((c) => c.id === el.closest('.card')?.dataset.id);
$('#grid').addEventListener('click', (e) => {
  const card = cardOf(e.target);
  if (!card) return;
  const copyBtn = e.target.closest('[data-copy]');
  if (copyBtn) return doCopy(card, copyBtn.dataset.copy);
  if (e.target.closest('.expand') || e.target.closest('.stage')) openViewer(card);
});
const doCopy = (card, what) => what === 'prompt' ? copy(card.prompt, 'Prompt copied') : copy(exportCardHtml(card, ctx), 'Code copied');

// ----- viewer -----
const dlg = $('#viewer');
let vi = 0, vm = null;
function openViewer(card) {
  vi = current.findIndex((c) => c.id === card.id);
  paintViewer();
  if (!dlg.open) dlg.showModal();
}
function paintViewer() {
  const c = current[vi];
  vm?.destroy();
  const frame = $('#v-frame');
  frame.innerHTML = '';
  frame.classList.toggle('screen', !!c.screen);
  const host = document.createElement('div');
  host.className = 'host';
  frame.append(host);
  if (c.screen) frame.style.setProperty('--k', (frame.clientWidth / SCREEN_W).toFixed(4));
  vm = mountCard(host, c, { ...ctx, libBase: (window.location.pathname.includes('/automato-ai') ? 'library/' : '/library/') });
  $('#v-cat').textContent = cats.get(c.cat)?.name || c.cat;
  $('#v-title').textContent = c.title;
  $('#v-sub').textContent = c.sub;
  $('#v-prompt').textContent = c.prompt;
  $('#v-badges').innerHTML = (c.libs || []).map((l) => `<span class="badge">${esc(ctx.libsMeta[l]?.label || l)}</span>`).join('');
  $('#v-pos').textContent = `${vi + 1} / ${current.length}`;
  $('[data-copy=prompt]', dlg).innerHTML = `${ICON.chat} Copy prompt`;
  $('[data-copy=code]', dlg).innerHTML = `${ICON.code} Copy code`;
  if (c.screen) requestAnimationFrame(() => frame.style.setProperty('--k', (frame.clientWidth / SCREEN_W).toFixed(4)));
}
$('#v-prev').onclick = () => { vi = (vi - 1 + current.length) % current.length; paintViewer(); };
$('#v-next').onclick = () => { vi = (vi + 1) % current.length; paintViewer(); };
$('#v-close').onclick = () => dlg.close();
dlg.addEventListener('close', () => { vm?.destroy(); vm = null; });
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
$$('[data-copy]', dlg).forEach((b) => b.addEventListener('click', () => doCopy(current[vi], b.dataset.copy)));
addEventListener('keydown', (e) => {
  if (!dlg.open) return;
  if (e.key === 'ArrowLeft') $('#v-prev').click();
  if (e.key === 'ArrowRight') $('#v-next').click();
});
