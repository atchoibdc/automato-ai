import { $, $, esc, ICON, initTheme, toast, copy, loadCore, loadCategory, liveStage, downloadFile, API_BASE } from './ui.js';
import { mountCard, exportPageHtml, SECTION_W, SCREEN_W } from '../shared/ml-core.mjs';

const ROLES = ['nav', 'hero', 'logos', 'features', 'stats', 'testimonials', 'pricing', 'faq', 'form', 'cta', 'gallery', 'footer', 'background', 'other'];
const ASPECTS = [['21:9', 21 / 9], ['16:9', 16 / 9], ['3:2', 3 / 2], ['4:3', 4 / 3], ['1:1', 1], ['3:1', 3], ['4:1', 4], ['5:1', 5]];
const snap = (a) => ASPECTS.reduce((b, x) => (Math.abs(x[1] - a) < Math.abs(b[1] - a) ? x : b))[1];
const STORE = 'automato-recipe';

$('#logo').innerHTML = ICON.logo;
$('#pk-close').innerHTML = ICON.close;
initTheme($('#theme'));

const { ctx, index } = await loadCore();
const modById = new Map(index.modules.map((m) => [m.id, m]));
const cardCache = new Map();
async function getCard(id) {
  if (cardCache.has(id)) return cardCache.get(id);
  const slim = modById.get(id);
  if (!slim) return null;
  const all = await loadCategory(slim.cat);
  for (const c of all) cardCache.set(c.id, c);
  return cardCache.get(id) || null;
}

// ---------- state ----------
let uid = 0;
const state = { theme: { mode: 'dark', accent: '#ff4433' }, sections: [], file: null };

const save = () => {
  try {
    const data = JSON.stringify({ theme: state.theme, sections: state.sections.map(({ id, aspect, role, html, conf, reason }) => ({ id, aspect, role, html, conf, reason })) });
    localStorage.setItem(STORE, data);
    localStorage.setItem('atelier-recipe', data);
  } catch {}
};

// ---------- rendering ----------
const mounts = [];
const pageEl = $('#page');
const pauser = new IntersectionObserver((es) => {
  for (const e of es) {
    const root = e.target.querySelector('.inner')?.shadowRoot?.querySelector('.d');
    if (root) e.isIntersecting ? root.removeAttribute('data-paused') : root.setAttribute('data-paused', '1');
  }
}, { rootMargin: '200px' });
let paused = false;

function teardown() {
  pauser.disconnect();
  while (mounts.length) mounts.pop().destroy();
}

async function render() {
  teardown();
  pageEl.classList.toggle('dark', state.theme.mode === 'dark');
  $('#summary').textContent = state.sections.length
    ? `${state.sections.length} section${state.sections.length > 1 ? 's' : ''}. Hover a section to swap, reorder or remove it.`
    : 'No sections yet. Upload a design or add a section by hand.';
  if (!state.sections.length) {
    pageEl.innerHTML = `<div class="placeholder"><h2>Nothing here yet</h2><p>Upload a design on the left and the agent will build the page from library modules.</p><button class="btn primary" id="add-first" type="button">Add a section</button></div>`;
    $('#add-first').onclick = () => addSection(-1);
    return;
  }
  const cards = await Promise.all(state.sections.map((s) => getCard(s.id)));
  pageEl.innerHTML = '';
  state.sections.forEach((s, i) => {
    const card = cards[i];
    if (!card) return;
    const lw = card.screen ? SCREEN_W : SECTION_W;
    const el = document.createElement('section');
    el.className = 'sec';
    el.dataset.uid = s.uid;
    const opts = ASPECTS.map(([l, v]) => `<option value="${v}"${Math.abs(v - s.aspect) < 0.01 ? ' selected' : ''}>${l}</option>`).join('');
    const conf = s.conf != null ? `<span class="conf">${Math.round(s.conf * 100)}%</span>` : '';
    el.innerHTML = `
      <div class="bar">
        <span class="chip${s.conf != null && s.conf < 0.5 ? ' low' : ''}"><i>${esc(s.role || card.cat)}</i>${esc(card.title)}${conf}</span>
        <span class="sp"></span>
        <label class="tool">Ratio <select data-act="aspect" aria-label="Aspect ratio">${opts}</select></label>
        <button class="tool" data-act="swap" type="button">Swap</button>
        <button class="tool" data-act="up" type="button" aria-label="Move up"${i === 0 ? ' disabled' : ''}>Up</button>
        <button class="tool" data-act="down" type="button" aria-label="Move down"${i === state.sections.length - 1 ? ' disabled' : ''}>Down</button>
        <button class="tool" data-act="add" type="button">Add below</button>
        <button class="tool danger" data-act="del" type="button">Remove</button>
      </div>
      ${s.reason ? `<div class="reason">${esc(s.reason)}</div>` : ''}
      <div class="fit" style="--ar:${s.aspect}"><div class="inner"></div></div>`;
    pageEl.append(el);
    const fit = $('.fit', el), inner = $('.inner', el);
    inner.style.width = `${lw}px`;
    inner.style.height = `${lw / s.aspect}px`;
    const m = mountCard(inner, s.html ? { ...card, html: s.html } : card, ctx, state.theme);
    mounts.push(m);
    const ro = new ResizeObserver(() => { inner.style.transform = `scale(${fit.clientWidth / lw})`; });
    ro.observe(fit);
    mounts.push({ destroy: () => ro.disconnect() });
    pauser.observe(el);
    if (paused) m.root.dataset.paused = '1';
  });
  const add = document.createElement('div');
  add.className = 'add';
  add.innerHTML = `<button class="btn sm" id="add-end" type="button">Add section</button>`;
  pageEl.append(add);
  $('#add-end').onclick = () => addSection(state.sections.length - 1);
}

pageEl.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-act]');
  if (!btn || btn.tagName === 'SELECT') return;
  const el = btn.closest('.sec');
  const i = state.sections.findIndex((s) => String(s.uid) === el.dataset.uid);
  const act = btn.dataset.act;
  if (act === 'del') state.sections.splice(i, 1);
  else if (act === 'up' && i > 0) [state.sections[i - 1], state.sections[i]] = [state.sections[i], state.sections[i - 1]];
  else if (act === 'down' && i < state.sections.length - 1) [state.sections[i + 1], state.sections[i]] = [state.sections[i], state.sections[i + 1]];
  else if (act === 'swap') return openPicker({ role: state.sections[i].role, current: state.sections[i].id, onPick: (id) => { Object.assign(state.sections[i], { id, html: null, conf: null, reason: '' }); commit(); } });
  else if (act === 'add') return addSection(i);
  commit();
});
pageEl.addEventListener('change', (e) => {
  if (e.target.dataset.act !== 'aspect') return;
  const el = e.target.closest('.sec');
  const s = state.sections.find((x) => String(x.uid) === el.dataset.uid);
  s.aspect = +e.target.value;
  commit();
});

const commit = () => { save(); return render(); };

function addSection(after) {
  openPicker({ role: 'hero', onPick: (id, role) => {
    state.sections.splice(after + 1, 0, { uid: ++uid, id, role, aspect: 16 / 9, html: null, conf: null, reason: '' });
    commit();
  } });
}

// ---------- picker ----------
const dlg = $('#picker');
$('#pk-role').innerHTML = ROLES.map((r) => `<option value="${r}">${r}</option>`).join('');
let pk = null;
async function openPicker(opts) {
  pk = opts;
  $('#pk-role').value = ROLES.includes(opts.role) ? opts.role : 'other';
  $('#pk-q').value = '';
  if (!dlg.open) dlg.showModal();
  fillPicker();
}
async function fillPicker() {
  const grid = $('#pk-grid');
  grid.innerHTML = '<div class="empty">Loading modules</div>';
  const role = $('#pk-role').value;
  const list = await fetch(`${API_BASE}/api/candidates`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ section: { role } }) }).then((r) => r.json());
  const q = $('#pk-q').value.trim().toLowerCase();
  const rows = list.filter((m) => !q || `${m.title} ${m.sub}`.toLowerCase().includes(q));
  const cards = (await Promise.all(rows.map((m) => getCard(m.id)))).filter(Boolean);
  grid.innerHTML = '';
  for (const c of cards) {
    const el = document.createElement('article');
    el.className = `card${c.id === pk.current ? ' cur' : ''}`;
    el.innerHTML = `<div class="stage"></div><div class="card-info"><h3>${esc(c.title)}</h3><p>${esc(c.sub)}</p></div>`;
    el.addEventListener('click', () => { dlg.close(); pk.onPick(c.id, $('#pk-role').value); });
    grid.append(el);
    liveStage($('.stage', el), c, ctx, state.theme);
  }
  if (!cards.length) grid.innerHTML = '<div class="empty">No modules match.</div>';
}
$('#pk-role').onchange = fillPicker;
let pt; $('#pk-q').oninput = () => { clearTimeout(pt); pt = setTimeout(fillPicker, 150); };
$('#pk-close').onclick = () => dlg.close();
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });
dlg.addEventListener('close', () => $$('#pk-grid .stage').forEach((s) => s.__tile?.unmount()));

// ---------- style controls ----------
const syncStyle = () => {
  $$('[data-mode]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.mode === state.theme.mode)));
  $('#accent').value = state.theme.accent;
};
$$('[data-mode]').forEach((b) => b.addEventListener('click', () => { state.theme.mode = b.dataset.mode; syncStyle(); commit(); }));
let at; $('#accent').addEventListener('input', (e) => { state.theme.accent = e.target.value; clearTimeout(at); at = setTimeout(commit, 120); });

// ---------- upload ----------
const drop = $('#drop');
function setFile(f) {
  if (!f) return;
  if (!/^image\/(png|jpeg|webp)$/.test(f.type)) return toast('Use a PNG, JPEG or WebP image');
  if (f.size > 12 * 1024 * 1024) return toast('Image is larger than 12 MB');
  state.file = f;
  $('#ref-img').src = URL.createObjectURL(f);
  $('#ref').hidden = false;
  $('#go').disabled = !agentReady;
}
$('#file').addEventListener('change', (e) => setFile(e.target.files[0]));
['dragenter', 'dragover'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.add('over'); }));
['dragleave', 'drop'].forEach((t) => drop.addEventListener(t, (e) => { e.preventDefault(); drop.classList.remove('over'); }));
drop.addEventListener('drop', (e) => setFile(e.dataTransfer.files[0]));
addEventListener('paste', (e) => setFile([...(e.clipboardData?.files || [])].find((f) => f.type.startsWith('image/'))));

let agentReady = false;
const status = (msg, kind = '', spin = false) => {
  const el = $('#status');
  el.hidden = !msg;
  el.className = `status ${kind}`;
  el.innerHTML = `${spin ? '<span class="spin"></span>' : ''}<span>${esc(msg)}</span>`;
};
fetch(`${API_BASE}/api/status`).then((r) => r.json()).then((s) => {
  agentReady = s.agent;
  if (!s.library) status('Library is not built. Run: npm run setup:library', 'err');
  else if (!s.agent) status('Agent is off. Add GEMINI_API_KEY to .env and restart the server. Manual building still works.', 'err');
  else if (s.mock) status('Mock agent is on (AGENT_MOCK=1): results are canned, not read from your image.');
  $('#go').disabled = !(agentReady && state.file);
});

const stepEls = $$('#steps li');
function setStep(name) {
  const order = ['read', 'match', 'copy', 'draw'];
  const at = order.indexOf(name);
  $('#steps').hidden = at < 0;
  stepEls.forEach((li) => { const i = order.indexOf(li.dataset.s); li.className = i < at ? 'done' : i === at ? 'on' : ''; });
}

$('#go').addEventListener('click', async () => {
  if (!state.file) return;
  const btn = $('#go');
  btn.disabled = true;
  status('Working', '', true);
  setStep('read');
  const t1 = setTimeout(() => setStep('match'), 6000);
  const t2 = setTimeout(() => setStep('copy'), 14000);
  try {
    const fd = new FormData();
    fd.append('image', state.file);
    fd.append('notes', $('#notes').value);
    fd.append('retext', $('#retext').checked ? '1' : '0');
    const res = await fetch(`${API_BASE}/api/plan`, { method: 'POST', body: fd });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || `Request failed (${res.status})`);
    setStep('draw');
    state.theme = { mode: data.page.mode, accent: data.page.accent };
    state.sections = data.sections.map((s) => ({
      uid: ++uid, id: s.pick.id, role: s.role, aspect: snap(s.aspect), html: s.html || null, conf: s.pick.confidence, reason: s.pick.reason,
    }));
    syncStyle();
    await commit();
    const low = state.sections.filter((s) => s.conf < 0.5).length;
    status(`Built ${state.sections.length} sections${low ? `. ${low} low-confidence, worth a Swap.` : '.'}`, 'ok');
  } catch (err) {
    status(err.message, 'err');
  } finally {
    clearTimeout(t1); clearTimeout(t2);
    setStep(null);
    btn.disabled = !(agentReady && state.file);
  }
});

// ---------- export ----------
async function buildHtml() {
  const cards = await Promise.all(state.sections.map((s) => getCard(s.id)));
  const sections = state.sections.map((s, i) => ({ card: s.html ? { ...cards[i], html: s.html } : cards[i], aspect: s.aspect, label: cards[i].title }));
  return exportPageHtml(ctx, { title: 'Automato AI Wireframe', sections, theme: state.theme });
}
const needSections = () => (state.sections.length ? true : (toast('Add a section first'), false));
$('#dl').onclick = async () => needSections() && downloadFile('automato-wireframe.html', await buildHtml());
$('#copyhtml').onclick = async () => needSections() && copy(await buildHtml(), 'HTML copied');
$('#preview').onclick = async () => {
  if (!needSections()) return;
  const url = URL.createObjectURL(new Blob([await buildHtml()], { type: 'text/html' }));
  window.open(url, '_blank');
};
$('#recipe').onclick = () => needSections() && downloadFile('automato-recipe.json', JSON.stringify({ version: 1, app: 'automato-ai', theme: state.theme, sections: state.sections.map(({ id, aspect, role, html }) => ({ id, aspect, role, html })) }, null, 2), 'application/json');
$('#recipe-in').onchange = async (e) => {
  try {
    const r = JSON.parse(await e.target.files[0].text());
    if (!Array.isArray(r.sections)) throw new Error('bad recipe');
    state.theme = { mode: r.theme?.mode === 'dark' ? 'dark' : 'light', accent: r.theme?.accent || '#ff4433' };
    state.sections = r.sections.filter((s) => modById.has(s.id)).map((s) => ({ uid: ++uid, id: s.id, role: s.role, aspect: +s.aspect || 16 / 9, html: s.html || null, conf: null, reason: '' }));
    syncStyle(); await commit(); toast('Recipe loaded');
  } catch { toast('That file is not a valid recipe'); }
  e.target.value = '';
};

// ---------- misc controls ----------
$('#pause').addEventListener('click', (e) => {
  paused = e.currentTarget.getAttribute('aria-pressed') !== 'true';
  e.currentTarget.setAttribute('aria-pressed', paused);
  e.currentTarget.textContent = paused ? 'Resume motion' : 'Pause motion';
  $$('.inner', pageEl).forEach((n) => n.shadowRoot?.querySelector('.d')?.toggleAttribute('data-paused', paused));
});
$('#clear').addEventListener('click', () => { if (!state.sections.length || confirm('Remove all sections?')) { state.sections = []; commit(); } });

// ---------- restore ----------
try {
  const raw = localStorage.getItem(STORE) || localStorage.getItem('atelier-recipe');
  const saved = JSON.parse(raw || 'null');
  if (saved?.sections?.length) {
    state.theme = { mode: saved.theme?.mode === 'dark' ? 'dark' : 'light', accent: saved.theme?.accent || '#ff4433' };
    state.sections = saved.sections.filter((s) => modById.has(s.id)).map((s) => ({ ...s, uid: ++uid }));
  }
} catch {}
syncStyle();
render();
