(() => {
// Bottom navigation for phone apps. Every card is a phone close-up cropped at the top: the phone
// is sized from the stage width and everything inside it is in em, so 1em = phone width / 16 and the
// same card reads at the 300px grid size and the 560px export. File-level helpers only build strings.

const P = {
  home: '<path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  msg: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  up: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
  cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
  skipB: '<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" x2="5" y1="19" y2="5"/>',
  skipF: '<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/>',
  play: '<polygon points="6 3 20 12 6 21 6 3"/>',
  pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
  down: '<path d="m6 9 6 6 6-6"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  chart: '<line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>',
  wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
  grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  mark: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  film: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/><path d="M17 16.5h4"/>',
  ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
  news: '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  help: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/>',
  swap: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  sliders: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
  lib: '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
  mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
  cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
};
const SV = (d, cls) => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const ic = (n, cls) => SV(P[n], cls);

// Phone shell + app content primitives, shared by every card in the file.
const PHONE_CSS = `.d{display:block;container-type:inline-size;background:radial-gradient(90% 70% at 50% 100%,var(--ml-accent-soft),transparent 72%),var(--ml-surface)}
.d .ph{--pw:clamp(160px,54cqw,300px);position:absolute;left:50%;top:-14%;bottom:6%;width:var(--pw);font-size:calc(var(--pw) / 16);transform:translateX(-50%);border-radius:3em;background:var(--ml-bg);box-shadow:0 0 0 .5em #fff,0 0 0 .6em var(--ml-line),var(--ml-shadow-lg)}
.d .scr{position:absolute;inset:0;border-radius:3em;overflow:hidden;background:var(--ml-bg)}
.d .hi{position:absolute;left:30%;width:40%;bottom:.7em;height:.4em;border-radius:.2em;background:rgba(29,29,31,.85);z-index:30;pointer-events:none}
.d .scr::after{content:"";position:absolute;left:0;right:0;bottom:0;height:2.8em;background:linear-gradient(rgba(255,255,255,0),var(--ml-bg) 72%);z-index:3;pointer-events:none}
.d .ct{position:absolute;inset:0}
.d .pg{position:absolute;inset:0;padding:3.7em 1.3em 0;opacity:0;pointer-events:none;transform:translateX(1.4em);transition:opacity .13s ease-in,transform .13s ease-in}
.d .pg.on{opacity:1;pointer-events:auto;transform:none;transition:opacity .22s ease .15s,transform 350ms var(--ml-spring) .15s}
.d .pg.bf{transform:translateX(-1.4em)}
.d .ttl{font:650 2.1em/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink);margin-bottom:.55em}
.d .rw{display:flex;align-items:center;gap:.7em;padding:.55em 0}
.d .av{flex:none;width:2.6em;height:2.6em;border-radius:50%;display:grid;place-items:center;font:700 .85em/1 var(--ml-font);background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .av.b{background:var(--ml-bar-2);color:var(--ml-ink-2)}
.d .tx{flex:1;min-width:0;display:grid;gap:.2em}
.d .tx b{font:600 1.15em/1.1 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .tx span{color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .rw em{font-style:normal;color:var(--ml-muted);font-weight:600}
.d .gd{display:grid;grid-template-columns:1fr 1fr;gap:.8em}
.d .tl{display:grid;gap:.2em}
.d .tl .im{position:relative;overflow:hidden;height:5.2em;border-radius:1em;margin-bottom:.25em;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .tl .im::before{content:"";position:absolute;right:20%;top:18%;width:1.1em;height:1.1em;border-radius:50%;background:var(--ml-accent-line)}
.d .tl .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:48%;background:var(--ml-bar);clip-path:polygon(0 100%,0 60%,24% 20%,46% 64%,64% 34%,100% 70%,100% 100%)}
.d .tl:nth-child(2n) .im{background:linear-gradient(180deg,var(--ml-bar-2),var(--ml-accent-soft))}
.d .tl b{font:600 1.1em/1.15 var(--ml-font);color:var(--ml-ink)}
.d .tl span{color:var(--ml-muted)}
.d .big{font:650 2.9em/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .bsub{margin:.5em 0 1em;color:var(--ml-accent-ink);font-weight:600}
.d .bars{display:flex;align-items:flex-end;gap:.55em;height:5.6em}
.d .bars i{flex:1;border-radius:.5em .5em .2em .2em;background:var(--ml-bar-2)}
.d .bars i.h{background:var(--ml-accent)}
.d .hero{position:relative;overflow:hidden;height:7em;border-radius:1.3em;margin-bottom:.8em;background:linear-gradient(160deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .hero::before{content:"";position:absolute;right:16%;top:16%;width:1.6em;height:1.6em;border-radius:50%;background:var(--ml-accent-line)}
.d .hero::after{content:"";position:absolute;left:0;right:0;bottom:0;height:55%;background:var(--ml-bar);clip-path:polygon(0 100%,0 55%,22% 18%,44% 62%,64% 30%,100% 66%,100% 100%)}
.d .fg{position:absolute;left:0;top:0;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;background:rgba(29,29,31,.16);box-shadow:0 0 0 2px #fff,0 3px 10px rgba(35,15,10,.2);opacity:0;pointer-events:none;z-index:60;--x:60%;--y:70%;--s:1;transform:translate(var(--x),var(--y)) scale(var(--s));transition:transform .55s var(--ml-ease),opacity .25s ease}
.d .fg.on{opacity:1}
.d .fg{--x:150px;--y:170px}
.d button{appearance:none;border:0;background:none;cursor:pointer;font:inherit;color:inherit}
.d button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:1em}
`;
const phone = (inner, cls) => `<div class="ph${cls ? ' ' + cls : ''}"><div class="scr">${inner}<i class="hi"></i></div></div><i class="fg"></i>`;

// app content builders
const rw = (a, n, s, r, alt) => `<div class="rw"><i class="av${alt ? ' b' : ''}">${a}</i><div class="tx"><b>${n}</b><span>${s}</span></div>${r ? `<em>${r}</em>` : ''}</div>`;
const tl = (n, p) => `<div class="tl"><i class="im"></i><b>${n}</b><span>${p}</span></div>`;
const pg = (title, body, on) => `<section class="pg${on ? ' on' : ''}"><h5 class="ttl">${title}</h5>${body}</section>`;
const list = (rows) => rows.map((r) => rw(r[0], r[1], r[2], r[3], r[4])).join('');
const tiles = (items) => `<div class="gd">${items.map((i) => tl(i[0], i[1])).join('')}</div>`;
const stat = (big, sub, hs) => `<div class="big">${big}</div><p class="bsub">${sub}</p><div class="bars">${hs.map((h, i) => `<i${i === 4 ? ' class="h"' : ''} style="height:${h}%"></i>`).join('')}</div>`;
const tab = (icon, label, cls) => `<button class="tb${cls ? ' ' + cls : ''}" type="button" aria-label="${label}">${ic(icon)}<span>${label}</span></button>`;

// ---- cards ----

const SPR = 'linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 1 100%)';
const BNC = 'linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1.018 66.7%, 1.014 72.2%, 1 100%)';

// 1. expand-label ------------------------------------------------------------------------------
const ltab = (icon, label, on) => `<button class="tb${on ? ' on' : ''}" type="button" aria-label="${label}">${ic(icon)}<span class="lb"><span><b>${label}</b></span></span></button>`;
ML.add({
  id: 'mobile-nav-expand-label',
  cat: 'mobile-nav',
  title: 'Expanding label tab',
  sub: 'Active tab widens to show its label',
  html: phone(`<div class="ct">${pg('Home', stat('$4,280.50', '+2.4% this week', [40, 55, 35, 62, 80, 50, 70]), true)}${pg('Pay', list([['MR', 'Maya R.', 'Rent share, Oct', '-$420'], ['TK', 'Tomas', 'Lunch split', '+$18', 1], ['EL', 'Elena', 'Concert tickets', '-$96']]))}${pg('Plan', tiles([['Rent', '$1,200'], ['Food', '$380'], ['Travel', '$240'], ['Fun', '$120']]))}${pg('Me', list([['KJ', 'Kenji Mori', 'Premium plan', ''], ['BK', 'Bank link', 'Chase ending 4021', 'Active', 1], ['SE', 'Security', 'Face ID on', '']]))}</div>
<nav class="tbr" aria-label="Main">${ltab('home', 'Home', 1)}${ltab('wallet', 'Pay')}${ltab('target', 'Plan')}${ltab('user', 'Me')}</nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:0 .45em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;align-items:center;justify-content:space-between;z-index:5}
.d .tb{flex:none;display:flex;align-items:center;height:3.3em;padding:0 .45em;border-radius:1.65em;color:var(--ml-muted);transition:background-color .3s ease,color .3s ease}
.d .tb svg{flex:none;width:1.7em;height:1.7em}
.d .lb{display:grid;grid-template-columns:0fr;transition:grid-template-columns var(--ml-spring-dur) var(--ml-spring)}
.d .lb>span{min-width:0;overflow:hidden}
.d .lb b{display:block;padding-left:.45em;font:600 1.1em/1 var(--ml-font);letter-spacing:-.01em;white-space:nowrap}
.d .tb.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .tb.on .lb{grid-template-columns:1fr}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    go(0);
    loop([...tap(tabs[1], () => go(1)), ...tap(tabs[2], () => go(2), 800), ...tap(tabs[3], () => go(3)), ...tap(tabs[0], () => go(0), 900)], 900);
  },
  prompt: `Build a mobile bottom tab bar where only the active tab shows its label. Make a floating pill bar above the home indicator (position absolute or fixed, bottom: calc(env(safe-area-inset-bottom) + 12px), radius 999px, white, layered shadow) with four buttons in a flex row, justify-content: space-between. Each button holds a 24px Lucide-style SVG and a label wrapper. Reveal the label with a grid column, not a width: .label { display: grid; grid-template-columns: 0fr; transition: grid-template-columns 587ms ${SPR}; } with the inner span set to min-width: 0; overflow: hidden, and .tab[aria-current="page"] .label { grid-template-columns: 1fr; }. The active button gets a soft accent tint background and accent text, the others stay muted grey and icon-only. Keep every hit area at least 44px tall. Use a nav element with aria-current="page" on the active link, visible focus-visible rings and an aria-label on every icon-only button. Crossfade the page content with opacity and a 14px translateX in the direction of travel. Under prefers-reduced-motion swap the grid transition for an instant change. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 2. liquid ------------------------------------------------------------------------------------
ML.add({
  id: 'mobile-nav-liquid',
  cat: 'mobile-nav',
  title: 'Liquid blob indicator',
  sub: 'Blob stretches to the next tab, settles',
  html: phone(`<div class="ct">${pg('Feed', list([['MR', 'Maya R.', 'Posted 3 photos', '2m'], ['TK', 'Tomas', 'Started a live room', '9m', 1], ['EL', 'Elena', 'Replied to your story', '21m'], ['JB', 'Jonah B.', 'Shared a reel', '1h', 1]]), true)}${pg('Explore', tiles([['Night markets', '2.4k saves'], ['Ceramics', '1.1k saves'], ['Trail runs', '980 saves'], ['Film cameras', '3.2k saves']]))}${pg('Chat', list([['SO', 'Studio Orbit', 'Shoot moved to 4pm', 'now'], ['MR', 'Maya R.', 'Sent a voice note', '5m', 1], ['TK', 'Tomas', 'See you at 8', '1h']]))}${pg('Me', list([['KJ', 'Kenji Mori', '412 followers', ''], ['PH', 'Posts', '86 this year', '', 1], ['SV', 'Saved', '24 collections', '']]))}</div>
<nav class="tbr" aria-label="Main"><i class="bl"></i>${tab('home', 'Feed', 'on')}${tab('compass', 'Explore')}${tab('msg', 'Chat')}${tab('user', 'Me')}</nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:.5em .4em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;z-index:5}
.d .bl{position:absolute;left:.4em;top:.5em;height:3.4em;width:calc((100% - .8em) / 4);border-radius:1.7em;background:var(--ml-grad);box-shadow:0 .5em 1em rgba(255,68,51,.28);transform-origin:0 50%}
.d .tb{position:relative;z-index:1;flex:1;display:grid;place-items:center;height:3.4em;color:var(--ml-muted);transition:color .25s ease .08s}
.d .tb svg{width:1.8em;height:1.8em}
.d .tb span{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}
.d .tb.on{color:#fff}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const bl = root.querySelector('.bl');
    let from = 0;
    let tm = 0;
    const move = (i) => {
      if (i === from) return;
      const d = Math.abs(i - from);
      const right = i > from;
      clearTimeout(tm);
      const a = from;
      from = i;
      bl.style.transition = 'transform 230ms cubic-bezier(.55,0,.3,1)';
      bl.style.transformOrigin = right ? '0 50%' : '100% 50%';
      bl.style.transform = 'translateX(' + a * 100 + '%) scale(' + (1 + d) + ',.82)';
      tm = setTimeout(() => {
        bl.style.transition = 'none';
        bl.style.transformOrigin = right ? '100% 50%' : '0 50%';
        bl.style.transform = 'translateX(' + i * 100 + '%) scale(' + (1 + d) + ',.82)';
        bl.getBoundingClientRect();
        bl.style.transition = 'transform var(--ml-bounce-dur) var(--ml-bounce)';
        bl.style.transform = 'translateX(' + i * 100 + '%) scale(1,1)';
      }, 225);
    };
    hook = move;
    go(0);
    loop([...tap(tabs[2], () => go(2), 1100), ...tap(tabs[1], () => go(1), 1000), ...tap(tabs[3], () => go(3), 1100), ...tap(tabs[0], () => go(0), 1000)], 700);
  },
  prompt: `Build a bottom tab bar with a liquid indicator that stretches toward the next tab and then settles, without SVG goo filters. Put one absolutely positioned pill (accent gradient, radius 999px) behind the tab row, exactly one tab wide: width: calc((100% - padding) / 4). Phase 1, when a tab is chosen: stretch the pill toward it with transform only, transform-origin on the side it leaves from (left edge when moving right, right edge when moving left), transform: translateX(oldIndex * 100%) scale(1 + distance, .82) over about 230ms cubic-bezier(.55,0,.3,1). Phase 2: without a transition, re-express the same shape with the opposite origin (translateX(newIndex * 100%) scale(1 + distance, .82), identical on screen), force a reflow, then transition to scale(1,1) on a slight-overshoot spring such as 594ms ${BNC}, so the tail snaps into the new tab and the blob wobbles once. Icons in the pill turn white with a short color delay. Keep labels as visually hidden text and aria-labels, role nav with aria-current="page", 44px hit areas, focus-visible rings. Under prefers-reduced-motion skip the stretch and just translate. Plain HTML, CSS and JS, no libraries.`,
});

// 3. notch -------------------------------------------------------------------------------------
ML.add({
  id: 'mobile-nav-notch',
  cat: 'mobile-nav',
  title: 'Curved notch bar',
  sub: 'A cut-out follows the raised icon',
  html: phone(`<div class="ct">${pg('Explore', `<div class="hero"></div>${list([['LS', 'Lisbon', '3 nights from $420', '4.8'], ['KY', 'Kyoto', 'Autumn leaves, Oct 21', '4.9', 1]])}`, true)}${pg('Trips', list([['LH', 'Lisbon', 'Oct 28 - Nov 2', 'Booked'], ['OS', 'Osaka', 'Dec 12 - Dec 19', 'Planning', 1], ['RK', 'Reykjavik', 'Feb 6 - Feb 10', 'Idea']]))}${pg('Saved', tiles([['Alfama stay', '$96 / night'], ['Ramen tour', '$48'], ['Sintra day trip', '$62'], ['Tile workshop', '$35']]))}${pg('Me', list([['AM', 'Ana M.', 'Gold traveller', ''], ['PS', 'Passport', 'Valid to 2031', '', 1], ['PY', 'Payments', 'Visa ending 8812', '']]))}</div>
<nav class="tbr" aria-label="Main"><svg class="shp" aria-hidden="true"><path fill="#fff" d=""/></svg><div class="row">${tab('compass', 'Explore', 'on')}${tab('pin', 'Trips')}${tab('mark', 'Saved')}${tab('user', 'Me')}</div><i class="cr">${ic('compass', 'on')}${ic('pin')}${ic('mark')}${ic('user')}</i></nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:0;right:0;bottom:0;height:6em;z-index:5}
.d .shp{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible;filter:drop-shadow(0 -.3em .8em rgba(35,15,10,.1)) drop-shadow(0 0 .04em rgba(35,15,10,.3))}
.d .row{position:absolute;left:0;right:0;top:0;height:4.4em;display:flex}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.3em;padding-top:.2em;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:1.8em;height:1.8em;transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .tb span{font:600 .95em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .tb.on svg{opacity:0;transform:translateY(.8em)}
.d .cr{position:absolute;left:0;top:-1.1em;width:3em;height:3em;margin-left:-1.5em;border-radius:50%;background:var(--ml-grad);color:#fff;display:grid;place-items:center;box-shadow:0 .5em 1em rgba(255,68,51,.3);pointer-events:none;will-change:transform}
.d .cr svg{grid-area:1/1;width:1.5em;height:1.5em;opacity:0;transform:scale(.6);transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .cr svg.on{opacity:1;transform:none}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const bar = root.querySelector('.tbr');
    const shp = root.querySelector('.shp');
    const path = root.querySelector('.shp path');
    const cr = root.querySelector('.cr');
    const crs = [...cr.querySelectorAll('svg')];
    let x = 0;
    let v = 0;
    let tx = 0;
    let anim = false;
    const center = (i) => (i + 0.5) * (bar.offsetWidth / 4);
    const draw = () => {
      const W = bar.offsetWidth;
      const H = bar.offsetHeight;
      if (!W) return;
      const em = parseFloat(getComputedStyle(bar).fontSize);
      const cy = 0.35 * em;
      const R = 1.8 * em;
      const hw = Math.sqrt(R * R - cy * cy);
      shp.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      path.setAttribute('d', 'M0 0H' + (x - hw).toFixed(2) + 'A' + R.toFixed(2) + ' ' + R.toFixed(2) + ' 0 1 0 ' + (x + hw).toFixed(2) + ' 0H' + W + 'V' + H + 'H0Z');
      cr.style.transform = 'translateX(' + x.toFixed(2) + 'px)';
    };
    const kick = () => {
      if (anim) return;
      anim = true;
      const step = () => {
        if (!root.isConnected) { anim = false; return; }
        if (!root.dataset.paused) {
          v += (tx - x) * 0.2;
          v *= 0.74;
          x += v;
          draw();
          if (Math.abs(tx - x) < 0.05 && Math.abs(v) < 0.05) { x = tx; draw(); anim = false; return; }
        }
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    let cur0 = 0;
    hook = (i) => {
      cur0 = i;
      tx = center(i);
      crs.forEach((s, n) => s.classList.toggle('on', n === i));
      kick();
    };
    if (window.ResizeObserver) new ResizeObserver(() => { x = tx = center(cur0); draw(); }).observe(bar);
    x = tx = center(0);
    draw();
    go(0);
    loop([...tap(tabs[2], () => go(2), 1000), ...tap(tabs[1], () => go(1), 1000), ...tap(tabs[3], () => go(3), 1000), ...tap(tabs[0], () => go(0), 1000)], 600);
  },
  prompt: `Build a bottom tab bar with a curved notch that slides under the active tab, and a raised circle that carries the active icon inside the notch. Make the bar a full-width element pinned to the bottom (padding-bottom: env(safe-area-inset-bottom)). Draw its background as an inline SVG path in an element with filter: drop-shadow(...) so the shadow follows the cut: M0 0 H(x - hw) A R R 0 1 0 (x + hw) 0 H width V height H0 Z, where x is the center of the active tab, R is the notch radius (circle radius plus 4px gap) and hw = sqrt(R^2 - cy^2) for a circle center cy px below the top edge. Animate x with a small spring integrator in requestAnimationFrame (v += (target - x) * .2; v *= .74; x += v) and update the path d attribute and the circle transform: translateX(x) together each frame, so cut and circle never drift apart. The circle is accent gradient, about 48px, sticking 18px above the bar, and its icon crossfades with a small scale. The active tab's own icon fades and drops 8px while its label stays visible below the notch. Tabs are real buttons in a nav with aria-current="page", 44px hit areas, focus-visible rings. Under prefers-reduced-motion jump x without the spring. Plain HTML, CSS and JS, no libraries.`,
});

// 4. fab-radial --------------------------------------------------------------------------------
ML.add({
  id: 'mobile-nav-fab-radial',
  cat: 'mobile-nav',
  title: 'Center button fan',
  sub: 'Plus turns to X, three actions fan out',
  html: phone(`<div class="ct">${pg('Shop', tiles([['Linen shirt', '$58'], ['Clay mug set', '$34'], ['Canvas tote', '$27'], ['Desk lamp', '$89']]), true)}${pg('Search', list([['CT', 'Canvas tote', 'in Bags', '12'], ['CM', 'Clay mug', 'in Kitchen', '8', 1], ['LS', 'Linen shirt', 'in Mens', '21']]))}${pg('Orders', list([['#1', 'Order 1042', 'Out for delivery', 'Today'], ['#2', 'Order 1038', 'Delivered Oct 9', '$74', 1], ['#3', 'Order 1031', 'Delivered Oct 2', '$38']]))}${pg('Me', list([['TS', 'Tess Alvarez', 'Member since 2024', ''], ['AD', 'Addresses', '2 saved', '', 1], ['RW', 'Rewards', '340 points', '']]))}</div><i class="sc"></i>
<nav class="tbr" aria-label="Main"><div class="row">${tab('home', 'Shop', 'on')}${tab('search', 'Search')}<span></span>${tab('bag', 'Orders')}${tab('user', 'Me')}</div>
<button class="ac a1" type="button" tabindex="-1">${ic('camera')}<span>Scan</span></button><button class="ac a2" type="button" tabindex="-1">${ic('tag')}<span>Sell</span></button><button class="ac a3" type="button" tabindex="-1">${ic('pen')}<span>List</span></button>
<button class="fab" type="button" aria-label="Create" aria-expanded="false">${ic('plus')}</button></nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);z-index:5}
.d .row{display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;height:100%;padding:0 .2em}
.d .tb{display:grid;justify-items:center;align-content:center;gap:.3em;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:1.7em;height:1.7em}
.d .tb span{font:600 .85em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .fab{position:absolute;left:50%;top:-1.5em;width:3.8em;height:3.8em;margin-left:-1.9em;border-radius:50%;background:var(--ml-grad);color:#fff;display:grid;place-items:center;box-shadow:0 .6em 1.2em rgba(255,68,51,.32),0 0 0 .45em var(--ml-bg);z-index:3}
.d .fab svg{width:1.9em;height:1.9em;transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .fab[aria-expanded=true] svg{transform:rotate(135deg)}
.d .ac{position:absolute;left:50%;top:.4em;width:3.7em;height:3.7em;margin:-1.85em 0 0 -1.85em;border-radius:50%;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:grid;place-items:center;align-content:center;gap:.15em;color:var(--ml-accent-ink);opacity:0;transform:scale(.3);transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity .18s ease;pointer-events:none;z-index:2}
.d .ac svg{width:1.5em;height:1.5em}
.d .ac span{font:600 .85em/1 var(--ml-font);color:var(--ml-ink-2)}
.d .tbr.open .ac{opacity:1;pointer-events:auto}
.d .tbr.open .a1{transform:translate(-5.2em,-3em)}
.d .tbr.open .a2{transform:translate(0,-6em);transition-delay:.04s}
.d .tbr.open .a3{transform:translate(5.2em,-3em);transition-delay:.08s}
.d .sc{position:absolute;inset:0;background:rgba(255,255,255,.72);opacity:0;pointer-events:none;transition:opacity .3s ease;z-index:4}
.d .sc.on{opacity:1;pointer-events:auto}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const bar = root.querySelector('.tbr');
    const fab = root.querySelector('.fab');
    const sc = root.querySelector('.sc');
    const acs = [...root.querySelectorAll('.ac')];
    const set = (o) => {
      bar.classList.toggle('open', o);
      sc.classList.toggle('on', o);
      fab.setAttribute('aria-expanded', o ? 'true' : 'false');
      acs.forEach((a) => a.setAttribute('tabindex', o ? '0' : '-1'));
    };
    fab.addEventListener('click', () => set(!bar.classList.contains('open')));
    sc.addEventListener('click', () => set(false));
    acs.forEach((a) => a.addEventListener('click', () => set(false)));
    go(0);
    loop([...tap(fab, () => set(true), 1500), ...tap(acs[1], () => set(false), 900), ...tap(tabs[2], () => go(2), 900), ...tap(tabs[0], () => go(0), 600)], 800);
  },
  prompt: `Build a bottom tab bar with a raised center action button that turns into an X and fans three actions out in an arc above the bar. Lay the bar out as a 5-column grid (two tabs, a wider empty center cell, two tabs). Put a 60px accent-gradient circle absolutely at the center, top: -24px, with a 7px ring in the page background so it reads as cut into the bar. The button is a real button with aria-expanded and aria-controls pointing at the actions. On open, rotate the plus icon 45deg (so it reads as an X) on a slight-overshoot spring (594ms ${BNC}) and move three action circles (58px, white, label inside) from the button center to points on an arc with transform: translate(x, y) scale(1): about (-82px, -48px), (0, -96px) and (82px, -48px), staggered 40ms apart, opacity 0 to 1 over 180ms. Put a 72% white scrim under the bar that fades in and closes the menu on tap; Escape also closes it and returns focus to the button. Actions are tabbable only while open. Animate transform and opacity only. Under prefers-reduced-motion fade the actions in place instead of travelling. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 5. line-stretch ------------------------------------------------------------------------------
ML.add({
  id: 'mobile-nav-line-stretch',
  cat: 'mobile-nav',
  title: 'Stretching top line',
  sub: 'Hairline reaches across, then contracts',
  html: phone(`<div class="ct">${pg('Today', `<div class="hero"></div>${list([['MT', 'Metro line 4 opens', 'The Courier, 4 min read', ''], ['HS', 'Harbor market returns', 'City Desk, 3 min read', '', 1]])}`, true)}${pg('Topics', tiles([['Cities', '128 stories'], ['Science', '94 stories'], ['Food', '77 stories'], ['Design', '61 stories']]))}${pg('Saved', list([['RW', 'Why rail beats air', 'Saved Oct 12', ''], ['BK', 'Bread, in 5 steps', 'Saved Oct 9', '', 1], ['TL', 'Tiny libraries', 'Saved Oct 3', '']]))}${pg('Me', list([['SR', 'Sofia Reyes', 'Reader since 2023', ''], ['NT', 'Notifications', 'Morning brief, 7:30', '', 1], ['TH', 'Text size', 'Medium', '']]))}</div>
<nav class="tbr" aria-label="Main"><div class="ind"><i></i></div><div class="row">${tab('news', 'Today', 'on')}${tab('grid', 'Topics')}${tab('mark', 'Saved')}${tab('user', 'Me')}</div></nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:0;right:0;bottom:0;height:6.4em;background:var(--ml-bg);box-shadow:0 -1px 0 var(--ml-line),0 -.6em 1.4em rgba(35,15,10,.05);z-index:5}
.d .row{display:flex;height:4.6em}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.3em;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:1.8em;height:1.8em}
.d .tb span{font:600 .95em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .ind{position:absolute;left:0;right:0;top:0;height:3.4em;clip-path:inset(0 75% 0 0);transition:clip-path 210ms cubic-bezier(.5,0,.2,1);pointer-events:none;background:linear-gradient(180deg,var(--ml-accent-soft),transparent)}
.d .ind i{position:absolute;left:0;right:0;top:0;height:.25em;background:var(--ml-accent)}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const ind = root.querySelector('.ind');
    let from = 0;
    let tm = 0;
    const inset = (l, r) => 'inset(0 ' + (100 - (r + 1) * 25) + '% 0 ' + l * 25 + '%)';
    hook = (i) => {
      if (i === from) return;
      clearTimeout(tm);
      const a = from;
      from = i;
      ind.style.clipPath = i > a ? inset(a, i) : inset(i, a);
      tm = setTimeout(() => { ind.style.clipPath = inset(i, i); }, 215);
    };
    go(0);
    loop([...tap(tabs[3], () => go(3), 1000), ...tap(tabs[1], () => go(1), 1000), ...tap(tabs[2], () => go(2), 1000), ...tap(tabs[0], () => go(0), 1000)], 600);
  },
  prompt: `Build a flat bottom tab bar whose indicator is a 2px accent hairline on the bar's top edge that stretches from the old tab to the new one and then contracts onto it. Make the bar full width with a 1px top border. Inside it put one full-width indicator element (a 2px accent line plus a soft accent-to-transparent glow about 32px tall under it) and drive it with clip-path: inset(0 R% 0 L%), where each tab is a quarter of the width, so tab n is L = n * 25 and R = 100 - (n + 1) * 25. Phase 1: transition clip-path over 210ms cubic-bezier(.5,0,.2,1) to the union of old and new tab (moving right: keep L of the old tab and take R of the new tab; moving left: take L of the new tab and R of the old one). Phase 2, 215ms later: transition to the new tab's own inset, so the trailing edge catches up and the line contracts. Only clip-path animates, no width or left. Active icon and label turn your accent color. Use a nav with aria-current="page", 44px minimum tab height, safe-area padding at the bottom and visible focus rings. Under prefers-reduced-motion jump straight to the final inset. Plain HTML, CSS and JS, no libraries.`,
});

// 6. dot ---------------------------------------------------------------------------------------
ML.add({
  id: 'mobile-nav-dot',
  cat: 'mobile-nav',
  title: 'Springing dot, filled icons',
  sub: 'A dot hops under the icon, icon fills',
  html: phone(`<div class="ct">${pg('Today', stat('8,420', 'steps, 84% of your goal', [45, 60, 38, 72, 84, 52, 66]), true)}${pg('Heart', list([['72', 'Resting rate', 'bpm, steady all week', '-2'], ['HV', 'Variability', '48 ms average', '+4', 1], ['EX', 'Cardio load', 'Moderate this week', '']]))}${pg('Sleep', `${stat('7h 42m', 'Deep sleep up 12 minutes', [70, 55, 80, 62, 48, 74, 66])}`)}${pg('You', list([['NA', 'Nadia K.', 'Day streak: 31', ''], ['GL', 'Goals', 'Steps, sleep, water', '', 1], ['SH', 'Sharing', 'Coach Idris only', '']]))}</div>
<nav class="tbr" aria-label="Main"><div class="row">${tab('home', 'Today', 'on')}${tab('heart', 'Heart')}${tab('moon', 'Sleep')}${tab('user', 'You')}</div><i class="dt"><b></b></i></nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:0 .4em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);z-index:5}
.d .row{display:flex;height:100%}
.d .tb{flex:1;display:grid;place-items:center;padding-bottom:.55em;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:2em;height:2em;fill:currentColor;fill-opacity:0;transition:fill-opacity .3s ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .tb span{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}
.d .tb.on{color:var(--ml-accent)}
.d .tb.on svg{fill-opacity:1;transform:translateY(-.15em)}
.d .dt{position:absolute;left:.4em;bottom:.5em;width:calc((100% - .8em) / 4);height:.6em;display:grid;place-items:center;transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .dt b{width:.5em;height:.5em;border-radius:50%;background:var(--ml-accent)}
.d .dt b.pp{animation:ml-dpop 560ms var(--ml-ease)}
@keyframes ml-dpop{0%{transform:scale(.3,1.7)}40%{transform:scale(1.7,.6)}70%{transform:scale(.9,1.15)}100%{transform:scale(1)}}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const dt = root.querySelector('.dt');
    const dot = dt.querySelector('b');
    hook = (i) => {
      dt.style.transform = 'translateX(' + i * 100 + '%)';
      dot.classList.remove('pp');
      dot.getBoundingClientRect();
      dot.classList.add('pp');
    };
    go(0);
    loop([...tap(tabs[1], () => go(1), 900), ...tap(tabs[2], () => go(2), 900), ...tap(tabs[3], () => go(3), 900), ...tap(tabs[0], () => go(0), 900)], 700);
  },
  prompt: `Build an icon-only bottom tab bar where the active icon goes from outline to filled and a small dot springs in underneath it. Use a floating pill bar with four buttons (each with an aria-label, no visible text). Draw icons as Lucide-style SVGs with stroke: currentColor and fill: currentColor; fill-opacity: 0, and on the active tab transition fill-opacity to 1 over 300ms and lift the icon translateY(-2px) on a slight-overshoot spring (594ms ${BNC}). Add one absolutely positioned dot wrapper exactly one tab wide (width: calc((100% - padding) / 4)) with a 6px accent dot centered inside it, and move it with transform: translateX(index * 100%) on the same spring. On arrival restart a short squash and stretch keyframe on the dot itself (scale(.3, 1.7), then scale(1.7, .6), then scale(1)) over 560ms, by removing and re-adding the class after a forced reflow. Active color is your accent. Keep 44px hit areas, a nav with aria-current="page", visible focus rings, and under prefers-reduced-motion move the dot without the squash. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 7. animated-icons ----------------------------------------------------------------------------
const atab = (svg, label, cls) => `<button class="tb${cls ? ' ' + cls : ''}" type="button" aria-label="${label}"><span class="ib">${svg}</span><span class="lt">${label}</span></button>`;
const AI = (inner, cls) => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
ML.add({
  id: 'mobile-nav-animated-icons',
  cat: 'mobile-nav',
  title: 'Animated tab icons',
  sub: 'Door opens, bell rings, heart beats',
  html: phone(`<div class="ct">${pg('Home', list([['PR', 'Priya N.', 'Lending a ladder on Elm St', '5m'], ['GD', 'Garden club', 'Seedling swap, Saturday', '1h', 1], ['BM', 'Bruno M.', 'Lost: grey cat, Maple Ave', '3h']]), true)}${pg('Alerts', list([['LK', 'Lena liked your post', 'Porch concert photos', '2m'], ['RP', 'New reply', 'Bruno: I can bring chairs', '14m', 1], ['EV', 'Event tomorrow', 'Street cleanup, 9am', '1h']]))}${pg('Likes', tiles([['Porch concert', '48 likes'], ['Seedling swap', '31 likes'], ['Block party', '27 likes'], ['Cleanup crew', '19 likes']]))}${pg('Me', list([['DO', 'Dana Okafor', 'Elm Street, 3 years', ''], ['NB', 'Neighbors', '64 connected', '', 1], ['GR', 'Groups', '5 joined', '']]))}</div>
<nav class="tbr" aria-label="Main">${atab(AI('<path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path class="dr" d="M10 22v-6h4v6"/>', 'ai home'), 'Home', 'on')}${atab(AI(P.bell, 'ai bell'), 'Alerts')}${atab(AI(P.heart, 'ai heart'), 'Likes')}${atab(AI('<path d="M4 21a8 8 0 0 1 16 0"/><circle class="hd" cx="12" cy="8" r="4"/>', 'ai user'), 'Me')}</nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.6em;padding:0 .3em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;z-index:5}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.2em;color:var(--ml-muted);transition:color .25s ease}
.d .ib{display:grid;place-items:center;width:3.2em;height:2.2em;border-radius:1.1em;transition:background-color .3s ease}
.d .ib svg{width:1.8em;height:1.8em;overflow:visible}
.d .lt{font:600 .9em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .tb.on .ib{background:var(--ml-accent-soft)}
.d .ai *{transform-box:fill-box}
.d .dr{transform-origin:0 100%}
.d .tb.on .home .dr{animation:ml-door 1.1s var(--ml-ease)}
.d .bell{transform-origin:50% 8%}
.d .tb.on .bell{animation:ml-ring 1s ease-out}
.d .heart{fill:currentColor;fill-opacity:0;transition:fill-opacity .3s ease}
.d .tb.on .heart{fill-opacity:.9;animation:ml-beat .9s var(--ml-ease)}
.d .hd{transform-origin:50% 100%}
.d .tb.on .user .hd{animation:ml-nod 1s ease-in-out}
@keyframes ml-door{0%{transform:scaleX(1)}25%,60%{transform:scaleX(.18)}100%{transform:scaleX(1)}}
@keyframes ml-ring{0%{transform:rotate(0)}12%{transform:rotate(-20deg)}28%{transform:rotate(16deg)}44%{transform:rotate(-11deg)}60%{transform:rotate(7deg)}76%{transform:rotate(-3deg)}100%{transform:rotate(0)}}
@keyframes ml-beat{0%{transform:scale(1)}15%{transform:scale(1.4)}32%{transform:scale(1)}48%{transform:scale(1.28)}70%,100%{transform:scale(1)}}
@keyframes ml-nod{0%,100%{transform:translateY(0)}22%{transform:translateY(1.6px)}44%{transform:translateY(-.6px)}66%{transform:translateY(1.6px)}}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    go(0);
    loop([...tap(tabs[1], () => go(1), 1300), ...tap(tabs[2], () => go(2), 1300), ...tap(tabs[3], () => go(3), 1300), ...tap(tabs[0], () => go(0), 1400)], 500);
  },
  prompt: `Build a bottom tab bar where every icon has its own micro animation when its tab is selected. Use inline SVG icons and give the moving parts their own elements with transform-box: fill-box so transform-origin works in the icon's own box. Home: draw the walls and a separate door path, and on select run a 1.1s keyframe that squeezes the door with transform: scaleX(.18) (origin at its left edge, hold, then back) so it reads as opening. Bell: rotate the whole icon from transform-origin 50% 8% through -20deg, 16deg, -11deg, 7deg, -3deg, 0 over 1s so it rings and decays. Heart: fill-opacity goes to .9 and scale does 1, 1.4, 1, 1.28, 1 over 900ms (a double beat). User: the head circle nods, translateY 0, 1.6px, -.6px, 1.6px, 0 over 1s while the shoulders stay still. Trigger each with a selector like .tab[aria-current="page"] .bell { animation: ring 1s ease-out } so the animation restarts every time the tab becomes current. Put the icon in a 52px by 36px pill that tints with a soft accent on the active tab, keep labels visible, 44px hit areas, focus-visible rings. Under prefers-reduced-motion drop the keyframes and keep the tint. Plain HTML and CSS plus a few lines of JS for aria-current, no libraries.`,
});

// 8. hide-scroll -------------------------------------------------------------------------------
const rcp = (n, m, k) => `<div class="rc"><i class="th t${k % 3}"></i><div class="tx"><b>${n}</b><span>${m}</span></div></div>`;
ML.add({
  id: 'mobile-nav-hide-scroll',
  cat: 'mobile-nav',
  title: 'Hide on scroll',
  sub: 'Bar slips away down, returns going up',
  html: phone(`<div class="sx"><h5 class="ttl">Kitchen</h5><div class="hero"></div>${rcp('Lemon ricotta pancakes', '25 min, serves 4', 0)}${rcp('Miso butter noodles', '15 min, serves 2', 1)}${rcp('Roasted tomato soup', '40 min, serves 6', 2)}${rcp('Chickpea shawarma bowl', '30 min, serves 3', 3)}${rcp('Apple cardamom galette', '55 min, serves 8', 4)}${rcp('Sesame cucumber salad', '10 min, serves 2', 5)}${rcp('Weeknight dal', '35 min, serves 4', 6)}${rcp('Brown butter cookies', '45 min, 18 cookies', 7)}<div class="sp"></div></div>
<nav class="tbr" aria-label="Main">${tab('compass', 'Browse', 'on')}${tab('mark', 'Saved')}${tab('cal', 'Plan')}${tab('cart', 'Cart')}</nav>`),
  css: PHONE_CSS + `
.d .sx{position:absolute;inset:0;padding:3.7em 1.3em 0;overflow-y:auto;scrollbar-width:none;overscroll-behavior:contain}
.d .sx::-webkit-scrollbar{display:none}
.d .sp{height:9em}
.d .rc{display:flex;align-items:center;gap:.8em;padding:.5em 0}
.d .th{flex:none;position:relative;overflow:hidden;width:4.4em;height:4.4em;border-radius:1em;background:linear-gradient(160deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .th.t1{background:linear-gradient(160deg,var(--ml-bar-2),var(--ml-accent-line))}
.d .th.t2{background:linear-gradient(200deg,var(--ml-accent-soft),var(--ml-bar))}
.d .th::after{content:"";position:absolute;left:0;right:0;bottom:0;height:50%;background:var(--ml-bar);opacity:.7;clip-path:polygon(0 100%,0 60%,30% 20%,55% 62%,75% 36%,100% 70%,100% 100%)}
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:0 .4em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;z-index:5;transition:transform .5s var(--ml-ease)}
.d .tbr.hid{transform:translateY(7em)}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.3em;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:1.75em;height:1.75em}
.d .tb span{font:600 .9em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const sx = root.querySelector('.sx');
    const bar = root.querySelector('.tbr');
    const tabs = [...root.querySelectorAll('.tb')];
    tabs.forEach((t) => t.addEventListener('click', () => tabs.forEach((u) => u.classList.toggle('on', u === t))));
    let last = 0;
    sx.addEventListener('scroll', () => {
      const t = sx.scrollTop;
      const d = t - last;
      if (t < 12) bar.classList.remove('hid');
      else if (Math.abs(d) > 4) bar.classList.toggle('hid', d > 0);
      if (Math.abs(d) > 4) last = t;
    }, { passive: true });
    const drag = (to, fy) => [
      [() => { show(true); at(sx, 0.55, fy[0]); }, 600],
      [() => dn(true), 120],
      [() => { at(sx, 0.55, fy[1]); sx.scrollTo({ top: Math.round(to * sx.clientHeight), behavior: 'smooth' }); }, 1150],
      [() => dn(false), 1000],
    ];
    loop([...drag(0.5, [0.78, 0.4]), ...drag(0, [0.4, 0.78])], 900);
  },
  prompt: `Build a bottom tab bar that slides away when the user scrolls down and returns the moment they scroll up. Keep the bar pinned (position: sticky or fixed at the bottom with env(safe-area-inset-bottom)) and listen for scroll on the real scroller with a passive listener. Track the last scrollTop: if the delta is greater than 4px downward and scrollTop is past 12px, add a hidden class; if the delta is greater than 4px upward, or scrollTop is under 12px, remove it. Only update the stored position when the delta passes the 4px threshold so tiny jitters and rubber banding do not flicker the bar. The hidden state is transform: translateY(calc(100% + 24px)) with a 500ms cubic-bezier(.32,.72,0,1) transition, never top or bottom. Keep the bar reachable: show it again on focus-within, when the page reaches the bottom, and when the user taps near the bottom edge. Do not hide it while a tab menu or sheet is open. Under prefers-reduced-motion use a 150ms opacity fade instead of the slide. Use a nav element with aria-current="page", 44px hit areas and visible focus rings. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 9. minimize ----------------------------------------------------------------------------------
const plc = (n, m, k) => `<div class="rc"><i class="th t${k % 3}"></i><div class="tx"><b>${n}</b><span>${m}</span></div></div>`;
ML.add({
  id: 'mobile-nav-minimize',
  cat: 'mobile-nav',
  title: 'Minimize to a pill',
  sub: 'Bar shrinks, search button floats out',
  html: phone(`<div class="sx"><h5 class="ttl">Nearby</h5><div class="hero"></div>${plc('Harbor Coffee', '0.2 mi, open until 6pm', 0)}${plc('Pine Street Books', '0.4 mi, open until 8pm', 1)}${plc('Mercado 41', '0.6 mi, open until 9pm', 2)}${plc('Juniper Yoga', '0.7 mi, next class 5:30', 3)}${plc('Old Mill Bakery', '0.9 mi, open until 3pm', 4)}${plc('Riverside Park', '1.1 mi, open 24 hours', 5)}${plc('Studio 9 Gallery', '1.3 mi, open until 7pm', 6)}<div class="sp"></div></div>
<nav class="tbr" aria-label="Main" style="--i:1"><i class="bgp"></i><div class="grp">${tab('compass', 'Explore')}${tab('mark', 'Saved', 'on')}${tab('pin', 'Trips')}${tab('user', 'Me')}</div></nav><button class="sr" type="button" aria-label="Search">${ic('search')}</button>`),
  css: PHONE_CSS + `
.d .sx{position:absolute;inset:0;padding:3.7em 1.3em 0;overflow-y:auto;scrollbar-width:none;overscroll-behavior:contain}
.d .sx::-webkit-scrollbar{display:none}
.d .sp{height:9em}
.d .rc{display:flex;align-items:center;gap:.8em;padding:.5em 0}
.d .th{flex:none;position:relative;overflow:hidden;width:4.4em;height:4.4em;border-radius:1em;background:linear-gradient(160deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .th.t1{background:linear-gradient(160deg,var(--ml-bar-2),var(--ml-accent-line))}
.d .th.t2{background:linear-gradient(200deg,var(--ml-accent-soft),var(--ml-bar))}
.d .th::after{content:"";position:absolute;left:0;right:0;bottom:0;height:50%;background:var(--ml-bar);opacity:.7;clip-path:polygon(0 100%,0 60%,30% 20%,55% 62%,75% 36%,100% 70%,100% 100%)}
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;z-index:5;filter:drop-shadow(0 .5em .9em rgba(35,15,10,.13)) drop-shadow(0 0 .04em rgba(35,15,10,.35))}
.d .bgp{position:absolute;inset:0;background:var(--ml-bg);clip-path:inset(0 0 0 0 round 2.2em);transition:clip-path var(--ml-spring-dur) var(--ml-spring)}
.d .grp{position:absolute;inset:0;display:flex;padding:0 .2em;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.3em;color:var(--ml-muted);transition:color .25s ease,opacity .25s ease}
.d .tb svg{width:1.75em;height:1.75em}
.d .tb span{font:600 .9em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .tbr.min .bgp{clip-path:inset(.5em 72% .5em 0 round 1.7em)}
.d .tbr.min .grp{transform:translateX(calc(-25% * var(--i) + .4em))}
.d .tbr.min .tb:not(.on){opacity:0;pointer-events:none}
.d .sr{position:absolute;right:.8em;bottom:2.4em;width:3.4em;height:3.4em;border-radius:50%;background:var(--ml-bg);color:var(--ml-ink);display:grid;place-items:center;box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);opacity:0;transform:translateX(-1.4em) scale(.5);pointer-events:none;transition:opacity .25s ease,transform var(--ml-bounce-dur) var(--ml-bounce);z-index:5}
.d .sr svg{width:1.7em;height:1.7em}
.d .tbr.min ~ .sr{opacity:1;transform:none;pointer-events:auto}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const sx = root.querySelector('.sx');
    const bar = root.querySelector('.tbr');
    const tabs = [...root.querySelectorAll('.tb')];
    const ttl = root.querySelector('.ttl');
    const names = ['Nearby', 'Saved', 'Trips', 'Profile'];
    tabs.forEach((t, i) => t.addEventListener('click', () => {
      if (bar.classList.contains('min')) { bar.classList.remove('min'); return; }
      tabs.forEach((u) => u.classList.toggle('on', u === t));
      bar.style.setProperty('--i', i);
      ttl.textContent = names[i];
    }));
    let last = 0;
    sx.addEventListener('scroll', () => {
      const t = sx.scrollTop;
      const d = t - last;
      if (t < 12) bar.classList.remove('min');
      else if (Math.abs(d) > 4) bar.classList.toggle('min', d > 0);
      if (Math.abs(d) > 4) last = t;
    }, { passive: true });
    const drag = (to, fy) => [
      [() => { show(true); at(sx, 0.55, fy[0]); }, 600],
      [() => dn(true), 120],
      [() => { at(sx, 0.55, fy[1]); sx.scrollTo({ top: Math.round(to * sx.clientHeight), behavior: 'smooth' }); }, 1150],
      [() => dn(false), 1200],
    ];
    loop([...drag(0.5, [0.78, 0.4]), ...drag(0, [0.4, 0.78])], 900);
  },
  prompt: `Build a bottom tab bar that minimizes into a compact pill on scroll, with a separate round search button floating beside it. Expanded: a floating bar with four tabs in a flex row and a white background layer. Minimized (scrolling down past 12px with a 4px delta threshold): crop the background layer with clip-path: inset(8px 72% 8px 0 round 28px) so only one tab's width stays visible, translate the tab row with transform: translateX(calc(-25% * activeIndex + 6px)) so the ACTIVE tab sits inside the pill, and fade the other tabs out with opacity and pointer-events: none. Both clip-path and transform use a critically damped spring such as 587ms ${SPR}. The round search button (54px, white, hairline ring) sits at the right edge, hidden at opacity 0 and scale(.5), and pops in with translateX(0) scale(1) on a slight-overshoot spring. Scrolling up, reaching the top, or tapping the pill restores the full bar. Because clip-path hides the shadow, put filter: drop-shadow(...) on the wrapper. Use a nav element, aria-current="page", a labelled search button, 44px hit areas, focus rings and safe-area padding. Under prefers-reduced-motion cross-fade the two states. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 10. search-morph -----------------------------------------------------------------------------
const key = (n) => `<i class="kr" style="--n:${n}"></i>`;
ML.add({
  id: 'mobile-nav-search-morph',
  cat: 'mobile-nav',
  title: 'Search tab morph',
  sub: 'Search tab grows into a field',
  html: phone(`<div class="ct">${pg('Listen', list([['NM', 'Night Market', 'Kiri Nova, new today', ''], ['SL', 'Slow Lanterns', 'Aya Sato, 2026', '', 1], ['PL', 'Daily mix 3', 'Made for you', '']]), true)}${pg('Browse', tiles([['Focus', '48 playlists'], ['Late night', '32 playlists'], ['Workout', '61 playlists'], ['Acoustic', '27 playlists']]))}${pg('Library', list([['LK', 'Liked songs', '312 songs', ''], ['DL', 'Downloads', '64 songs', '', 1], ['RP', 'Road trip', '18 songs', '']]))}${pg('Search', list([['LB', 'lo-fi beats', 'Recent', ''], ['KN', 'Kiri Nova', 'Recent', '', 1], ['RN', 'rainy night jazz', 'Recent', '']]))}</div>
<div class="kb">${key(10)}${key(9)}${key(7)}<i class="sp2"></i></div>
<nav class="tbr" aria-label="Main"><div class="row">${tab('music', 'Listen', 'on')}${tab('grid', 'Browse')}${tab('lib', 'Library')}${tab('search', 'Search')}</div><div class="sf"><span class="si">${ic('search')}</span><span class="fx"><em class="hint">Search</em><b class="ty"></b><i class="cu"></i></span><button class="cn" type="button" tabindex="-1">Cancel</button></div></nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:.5em .4em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);z-index:5;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .row{display:flex;height:100%}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.2em;border-radius:1.7em;color:var(--ml-muted);transition:color .25s ease,background-color .3s ease,opacity .2s ease}
.d .tb svg{width:1.7em;height:1.7em}
.d .tb span{font:600 .85em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink);background:var(--ml-accent-soft)}
.d .sf{position:absolute;left:.4em;right:.4em;top:.5em;bottom:.5em;display:flex;align-items:center;gap:.6em;padding:0 1.1em;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);clip-path:inset(0 0 0 75% round 1.7em);opacity:0;pointer-events:none;transition:clip-path var(--ml-spring-dur) var(--ml-spring),opacity .15s ease}
.d .si{flex:none;color:var(--ml-accent-ink);display:grid;opacity:0;transition:opacity .2s ease}
.d .si svg{width:1.6em;height:1.6em}
.d .fx{position:relative;flex:1;min-width:0;display:flex;align-items:center;font:500 1.15em/1 var(--ml-font);opacity:0;transition:opacity .2s ease}
.d .fx{overflow:hidden}
.d .hint{font-style:normal;color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;position:absolute;left:0;right:0}
.d .ty{font-weight:500;color:var(--ml-ink);white-space:nowrap}
.d .cu{flex:none;width:.14em;height:1.3em;margin-left:.1em;border-radius:.1em;background:var(--ml-accent);animation:ml-blink 1s steps(1) infinite}
.d .cn{flex:none;font:600 1.05em/1 var(--ml-font);color:var(--ml-accent-ink);opacity:0;transition:opacity .2s ease}
@keyframes ml-blink{0%,55%{opacity:1}56%,100%{opacity:0}}
.d .kb{position:absolute;left:0;right:0;bottom:0;height:8.2em;padding-top:.4em;background:var(--ml-bar);transform:translateY(101%);transition:transform var(--ml-spring-dur) var(--ml-spring);z-index:4}
.d .kr{display:block;height:1.8em;margin:.45em .3em 0;border-radius:.4em;background:repeating-linear-gradient(90deg,var(--ml-bg) 0 calc(100% / var(--n) - .3em),transparent calc(100% / var(--n) - .3em) calc(100% / var(--n)))}
.d .sp2{display:block;height:1.8em;margin:.45em 2.4em 0;border-radius:.4em;background:var(--ml-bg)}
.d .sh .tbr{transform:translateY(-6.9em)}
.d .sh .kb{transform:none}
.d .sh .sf{opacity:1;clip-path:inset(0 0 0 0 round 1.7em);pointer-events:auto}
.d .sh .si,.d .sh .fx,.d .sh .cn{opacity:1;transition-delay:.12s}
.d .sh .tb:not(:last-child){opacity:0;pointer-events:none}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const scr = root.querySelector('.scr');
    const ty = root.querySelector('.ty');
    const hint = root.querySelector('.hint');
    const cn = root.querySelector('.cn');
    let prev = 0;
    const open = (o) => {
      scr.classList.toggle('sh', o);
      cn.tabIndex = o ? 0 : -1;
      if (!o) { ty.textContent = ''; hint.style.display = ''; }
    };
    const text = (s) => { ty.textContent = s; hint.style.display = s ? 'none' : ''; };
    tabs[3].addEventListener('click', () => open(true));
    tabs.slice(0, 3).forEach((t, i) => t.addEventListener('click', () => { prev = i; }));
    cn.addEventListener('click', () => { open(false); go(prev); });
    const word = 'lofi beats';
    const typing = [...word].map((c, k) => [() => text(word.slice(0, k + 1)), 105]);
    go(0);
    loop([...tap(tabs[3], () => { go(3); open(true); }, 1200), ...typing, [() => {}, 800], ...tap(cn, () => { open(false); go(prev); }, 900), ...tap(tabs[1], () => { prev = 1; go(1); }, 900), ...tap(tabs[0], () => { prev = 0; go(0); }, 600)], 700);
  },
  prompt: `Build a bottom tab bar whose Search tab morphs into a search field that spans the whole bar, with a keyboard-ready caret and a Cancel that morphs it back. Put a field layer on top of the bar, tinted like the active tab, and crop it to the Search tab's slot with clip-path: inset(0 0 0 75% round 28px) (it is the last of four tabs). Opening: transition clip-path to inset(0 0 0 0 round 28px) on a critically damped spring such as 587ms ${SPR}, fade the other three tabs out with opacity and pointer-events: none, then fade in (120ms delay) the magnifier, a text input and a Cancel button. Lift the bar by the keyboard height with transform: translateY(-keyboardHeight) while the keyboard sheet slides up on the same spring; on a real device read visualViewport to get the height. Focus the input on open (a blinking 2px accent caret is the native one), keep placeholder text until the first character, and swap the page content to a recent-searches list. Cancel, Escape and an empty-field blur close it, reverse the morph and restore the previous tab and its page. Only clip-path, transform and opacity animate. The input needs a visible label for screen readers (aria-label="Search"). Under prefers-reduced-motion cross-fade. Plain HTML, CSS and JS, no libraries.`,
});

// 11. badge ------------------------------------------------------------------------------------
const btab = (icon, label, cls, badge) => `<button class="tb${cls ? ' ' + cls : ''}" type="button" aria-label="${label}"><span class="ib">${ic(icon)}${badge || ''}</span><span class="lt">${label}</span></button>`;
ML.add({
  id: 'mobile-nav-badge',
  cat: 'mobile-nav',
  title: 'Count badge',
  sub: 'Badge pops in, rolls 3 to 4, clears',
  html: phone(`<div class="ct">${pg('Channels', list([['DS', 'Design crit', 'Tomas: pushed v3 to Figma', '4m'], ['LN', 'Launch plan', 'Elena: copy is approved', '12m', 1], ['GN', 'General', 'Maya R. joined the team', '1h']]), true)}${pg('Inbox', list([['TK', 'Tomas', 'Can you review the deck?', 'now'], ['EL', 'Elena', 'Approved, ship it', '2m', 1], ['MR', 'Maya R.', 'Lunch at 1?', '5m'], ['JB', 'Jonah B.', 'Invoice attached', '9m', 1]]))}${pg('Saved', tiles([['Brand notes', '12 items'], ['Moodboard', '34 items'], ['Roadmap', '6 items'], ['Quotes', '19 items']]))}${pg('Me', list([['KJ', 'Kenji Mori', 'Product designer', ''], ['ST', 'Status', 'Heads down until 3pm', '', 1], ['NT', 'Notifications', 'Mentions only', '']]))}</div>
<nav class="tbr" aria-label="Main">${btab('home', 'Home', 'on')}${btab('msg', 'Inbox', '', '<b class="bd" aria-hidden="true"><span class="nm"><em class="cl"><i>3</i><i>4</i></em></span></b>')}${btab('mark', 'Saved')}${btab('user', 'Me')}</nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.6em;padding:0 .3em;border-radius:2.3em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;z-index:5}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.2em;color:var(--ml-muted);transition:color .25s ease}
.d .ib{position:relative;display:grid;place-items:center;width:3.2em;height:2.2em;border-radius:1.1em;transition:background-color .3s ease}
.d .ib>svg{width:1.8em;height:1.8em}
.d .lt{font:600 .9em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .tb.on .ib{background:var(--ml-accent-soft)}
.d .bd{position:absolute;top:-.55em;right:-.2em;min-width:1.8em;height:1.8em;padding:0 .35em;border-radius:.9em;background:#FF3B30;color:#fff;font:700 .9em/1.8em var(--ml-font);text-align:center;box-shadow:0 0 0 .22em var(--ml-bg);transform:scale(0);transition:transform .2s ease-in}
.d .bd.in{transform:scale(1);transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .nm{display:block;height:1.8em;overflow:hidden}
.d .cl{display:block;font-style:normal;transition:transform .45s var(--ml-ease)}
.d .cl.r{transform:translateY(-1.8em)}
.d .cl i{display:block;font-style:normal;height:1.8em;line-height:1.8em}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const bd = root.querySelector('.bd');
    const cl = root.querySelector('.cl');
    hook = (i) => { if (i === 1) bd.classList.remove('in'); };
    go(0);
    loop([
      [() => { go(0); bd.classList.remove('in'); cl.classList.remove('r'); }, 900],
      [() => bd.classList.add('in'), 1500],
      [() => cl.classList.add('r'), 1500],
      ...tap(tabs[1], () => go(1), 1300),
      ...tap(tabs[0], () => go(0), 600),
    ], 500);
  },
  prompt: `Build a count badge on a bottom tab that pops in, rolls to the next number and shrinks away when the tab is opened. Position a 16px red badge (the one semantic color allowed, with a 2px ring in the bar color) at the top right of the tab icon. Pop in: transition transform from scale(0) to scale(1) on a slight-overshoot spring such as 594ms ${BNC}. Roll: render the digits as a vertical column of lines inside an overflow: hidden window exactly one line tall (height 16px, line-height 16px), and when the count changes move the column with transform: translateY(-16px) over 450ms cubic-bezier(.32,.72,0,1); for a counter that keeps changing, append the new number and animate to it, then trim the old one. Clear: when the tab becomes current, remove the visible class so the badge scales to 0 over 200ms ease-in, and reset the count in your data layer. Never animate width, only transform; let the badge grow with min-width and padding for two digits. Expose the count to assistive tech: aria-label="Inbox, 4 unread" on the tab and aria-live="polite" on a visually hidden status. Use 44px hit areas, aria-current="page", focus rings. Under prefers-reduced-motion swap the badge without the roll. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 12. material ---------------------------------------------------------------------------------
const mtab = (icon, label, on) => `<button class="tb${on ? ' on' : ''}" type="button" aria-label="${label}"><span class="ib"><i class="rpl"></i>${ic(icon)}</span><span class="lt">${label}</span></button>`;
ML.add({
  id: 'mobile-nav-material',
  cat: 'mobile-nav',
  title: 'Material pill indicator',
  sub: 'Pill grows from center, soft ripple',
  html: phone(`<div class="ct">${pg('Today', stat('34 min', 'active, 6 min to your goal', [40, 62, 30, 78, 55, 70, 46]), true)}${pg('Train', list([['RN', 'Morning run', '5.2 km, 31:08', '612'], ['YG', 'Yoga flow', '20 min, beginner', '110', 1], ['CY', 'Cycle loop', '14 km, 41:20', '470']]))}${pg('Stats', stat('6 days', 'longest streak this month', [30, 45, 70, 52, 88, 60, 74]))}${pg('Profile', list([['TR', 'Tariq R.', 'Level 12 member', ''], ['GL', 'Weekly goal', '4 workouts', '', 1], ['WD', 'Wearables', 'Band connected', '']]))}</div>
<nav class="tbr" aria-label="Main">${mtab('home', 'Today', 1)}${mtab('activity', 'Train')}${mtab('chart', 'Stats')}${mtab('user', 'Profile')}</nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:0;right:0;bottom:0;height:6.2em;background:var(--ml-bar-2);display:flex;padding:.2em .2em 1.6em;z-index:5}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.4em;color:var(--ml-ink-2);transition:color .25s ease}
.d .ib{position:relative;overflow:hidden;display:grid;place-items:center;width:3.7em;height:2.6em;border-radius:1.3em}
.d .ib::before{content:"";position:absolute;inset:0;border-radius:1.3em;background:var(--ml-accent-line);transform:scaleX(0);opacity:0;transition:transform .38s var(--ml-ease),opacity .2s ease}
.d .ib svg{position:relative;width:1.7em;height:1.7em;transition:color .25s ease}
.d .lt{font:600 .95em/1 var(--ml-font);color:var(--ml-muted);transition:color .25s ease}
.d .tb.on .ib::before{transform:scaleX(1);opacity:1}
.d .tb.on .ib svg{color:var(--ml-accent-ink)}
.d .tb.on .lt{color:var(--ml-ink)}
.d .rpl{position:absolute;left:var(--rx,50%);top:var(--ry,50%);width:5.6em;height:5.6em;margin:-2.8em 0 0 -2.8em;border-radius:50%;background:rgba(255,68,51,.26);opacity:0;pointer-events:none}
.d .ib.rp .rpl{animation:ml-rip .62s var(--ml-ease)}
@keyframes ml-rip{0%{transform:scale(0);opacity:.55}100%{transform:scale(1);opacity:0}}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const ibs = [...root.querySelectorAll('.ib')];
    const rip = (ib, x, y) => {
      ib.style.setProperty('--rx', x === undefined ? '50%' : x + 'px');
      ib.style.setProperty('--ry', y === undefined ? '50%' : y + 'px');
      ib.classList.remove('rp');
      ib.getBoundingClientRect();
      ib.classList.add('rp');
    };
    ibs.forEach((ib) => ib.addEventListener('animationend', () => ib.classList.remove('rp')));
    tabs.forEach((t, i) => t.addEventListener('pointerdown', (e) => {
      const r = ibs[i].getBoundingClientRect();
      const k = ibs[i].offsetWidth / (r.width || 1);
      rip(ibs[i], (e.clientX - r.left) * k, (e.clientY - r.top) * k);
    }));
    hook = (i) => { if (!ibs[i].classList.contains('rp')) rip(ibs[i]); };
    go(0);
    loop([...tap(tabs[1], () => go(1), 1000), ...tap(tabs[2], () => go(2), 1000), ...tap(tabs[3], () => go(3), 1000), ...tap(tabs[0], () => go(0), 900)], 600);
  },
  prompt: `Build a Material 3 style navigation bar: a full-width bar in a tonal surface color at the bottom, four destinations, labels always visible under the icons. Each icon sits in a 64px by 32px indicator container. The active indicator is a pill (secondary-container tone, a light accent tint) that grows from the center of the icon: a ::before layer with transform: scaleX(0), opacity 0 that goes to scaleX(1), opacity 1 on the current tab over 380ms cubic-bezier(.32,.72,0,1), transform-origin center. Active icon takes the accent-dark color, active label turns the ink color. Add a soft state-layer ripple: a 56px circle of your accent at 26% opacity, positioned at the pointer-down point inside the indicator (overflow: hidden, border-radius 16px), animated transform: scale(0) to scale(1) with opacity .55 to 0 over 620ms; restart it by removing and re-adding the class after a forced reflow and clear it on animationend. Also fire the center ripple when the tab changes from the keyboard. Use a nav with aria-current="page", 48px minimum touch targets, padding-bottom: env(safe-area-inset-bottom), visible focus rings. Under prefers-reduced-motion drop the ripple and fade the pill. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 13. mini-player ------------------------------------------------------------------------------
ML.add({
  id: 'mobile-nav-mini-player',
  cat: 'mobile-nav',
  title: 'Mini player to sheet',
  sub: 'Tap docks open as the bar slides down',
  html: phone(`<div class="ct">${pg('Home', list([['AL', 'Album of the week', 'Slow Lanterns, Aya Sato', ''], ['NM', 'Night Market', 'Kiri Nova, new today', '', 1], ['DM', 'Daily mix 3', 'Made for you', '']]), true)}${pg('Search', tiles([['Pop', '120 playlists'], ['Jazz', '64 playlists'], ['Indie', '88 playlists'], ['Focus', '48 playlists']]))}${pg('Library', list([['LK', 'Liked songs', '312 songs', ''], ['DL', 'Downloads', '64 songs', '', 1], ['RP', 'Road trip', '18 songs', '']]))}${pg('Me', list([['TH', 'Theo W.', 'Premium family', ''], ['SQ', 'Sound quality', 'Lossless', '', 1], ['TM', 'Sleep timer', 'Off', '']]))}</div>
<div class="fp"><button class="cv" type="button" aria-label="Close player">${ic('down')}</button><i class="art"></i><div class="tt"><b>Midnight Drive</b><span>Kiri Nova</span></div><div class="sb2"><i class="trk"><i class="fl"></i></i><span><em>1:24</em><em>3:48</em></span></div><div class="ctl"><button type="button" aria-label="Previous">${ic('skipB')}</button><button class="big2" type="button" aria-label="Pause">${ic('pause')}</button><button type="button" aria-label="Next">${ic('skipF')}</button></div></div>
<div class="mp" role="button" tabindex="0" aria-label="Open player"><i class="art s"></i><div class="tx"><b>Midnight Drive</b><span>Kiri Nova</span></div><button type="button" aria-label="Pause">${ic('pause')}</button><i class="pr"></i></div>
<nav class="tbr" aria-label="Main">${tab('home', 'Home', 'on')}${tab('search', 'Search')}${tab('lib', 'Library')}${tab('user', 'Me')}</nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:0 .4em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;z-index:6;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.3em;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:1.75em;height:1.75em}
.d .tb span{font:600 .9em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .mp{position:absolute;left:.5em;right:.5em;bottom:6.8em;height:3.6em;display:flex;align-items:center;gap:.7em;padding:0 .5em 0 .5em;border-radius:1.3em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);z-index:7;cursor:pointer;overflow:hidden;transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .mp .tx b{font-size:1.1em}
.d .mp button{flex:none;width:2.4em;height:2.4em;display:grid;place-items:center;border-radius:50%;color:var(--ml-ink)}
.d .mp button svg{width:1.4em;height:1.4em;fill:currentColor}
.d .art{display:block;flex:none;position:relative;overflow:hidden;border-radius:.9em;background:linear-gradient(150deg,var(--ml-accent-2),var(--ml-accent))}
.d .art::before{content:"";position:absolute;left:50%;top:24%;width:30%;aspect-ratio:1;border-radius:50%;background:rgba(255,255,255,.85);transform:translateX(-50%)}
.d .art::after{content:"";position:absolute;left:0;right:0;bottom:0;height:44%;background:rgba(255,255,255,.28);clip-path:polygon(0 100%,0 60%,30% 20%,55% 66%,78% 34%,100% 70%,100% 100%)}
.d .art.s{width:2.6em;height:2.6em;border-radius:.7em}
.d .pr{position:absolute;left:0;right:0;bottom:0;height:.22em;background:var(--ml-accent);transform-origin:0 50%;transform:scaleX(.3);animation:ml-prog 14s linear infinite}
@keyframes ml-prog{from{transform:scaleX(.3)}to{transform:scaleX(1)}}
.d .fp{position:absolute;inset:0;z-index:4;display:flex;flex-direction:column;align-items:center;padding:3em 1.7em 0;background:var(--ml-bg);clip-path:inset(13.6em .5em 6.8em .5em round 1.3em);visibility:hidden;transition:clip-path var(--ml-spring-dur) var(--ml-spring),visibility 0s .6s}
.d .fp>*{opacity:0;transition:opacity .2s ease}
.d .cv{width:2.4em;height:1.6em;display:grid;place-items:center;border-radius:.8em;color:var(--ml-muted)}
.d .cv svg{width:1.7em;height:1.7em}
.d .fp .art{width:6.4em;height:6.4em;border-radius:1.3em;box-shadow:var(--ml-shadow-lg)}
.d .tt{margin-top:.7em;text-align:center;display:grid;gap:.2em}
.d .tt b{font:650 1.5em/1.1 var(--ml-font);letter-spacing:-.02em}
.d .tt span{color:var(--ml-muted);font-size:1.05em}
.d .sb2{width:100%;margin-top:.6em}
.d .trk{display:block;height:.35em;border-radius:.2em;background:var(--ml-bar)}
.d .fl{display:block;width:37%;height:100%;border-radius:.2em;background:var(--ml-ink)}
.d .sb2 span{display:flex;justify-content:space-between;margin-top:.4em;color:var(--ml-muted)}
.d .sb2 em{font-style:normal;font-size:.9em}
.d .ctl{display:flex;align-items:center;gap:1.6em;margin-top:.3em}
.d .ctl button{width:3em;height:3em;display:grid;place-items:center;color:var(--ml-ink)}
.d .ctl svg{width:1.7em;height:1.7em;fill:currentColor}
.d .ctl .big2{width:3.6em;height:3.6em;border-radius:50%;background:var(--ml-grad);color:#fff;box-shadow:0 .5em 1em rgba(255,68,51,.3)}
.d .sh .fp{clip-path:inset(0 0 0 0 round 3em);visibility:visible;transition:clip-path var(--ml-spring-dur) var(--ml-spring),visibility 0s}
.d .sh .fp>*{opacity:1;transition-delay:.18s}
.d .sh .tbr{transform:translateY(8em)}
.d .sh .mp{opacity:0;transform:translateY(-1.2em);pointer-events:none}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const scr = root.querySelector('.scr');
    const mp = root.querySelector('.mp');
    const cv = root.querySelector('.cv');
    const set = (o) => scr.classList.toggle('sh', o);
    mp.addEventListener('click', (e) => { if (!e.target.closest('button')) set(true); });
    mp.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') set(true); });
    cv.addEventListener('click', () => set(false));
    go(0);
    loop([...tap(mp, () => set(true), 2000), ...tap(cv, () => set(false), 1000), ...tap(tabs[2], () => go(2), 900), ...tap(tabs[0], () => go(0), 500)], 700);
  },
  prompt: `Build a music app shell with a mini player docked above the bottom tab bar that expands into a full player sheet when tapped, while the tab bar slides down out of the way. Dock the mini player (60px tall card, art thumbnail, title, artist, pause and next buttons, a 3px progress line along its bottom edge) 8px above the tab bar. The full player is a full-screen layer behind the tab bar and mini player with the same white background. Closed, crop it to exactly the mini player's rectangle with clip-path: inset(top right bottom left round 20px) and visibility: hidden (visibility transitions with a delay so it hides after the close finishes). Open: transition clip-path to inset(0 round 0) on a critically damped spring such as 587ms ${SPR}, fade the sheet content in 180ms later, translate the tab bar translateY(calc(100% + 24px)) on the same spring and fade and lift the mini player. A chevron button, a swipe down and Escape close it. Clicks on the mini player's own buttons must not open the sheet. Make the mini player a role="button" with tabindex 0 and Enter and Space support, move focus into the sheet on open and back on close, and use inert on the content behind. Animate clip-path, transform and opacity only. Under prefers-reduced-motion fade the sheet. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 14. swipe-pages ------------------------------------------------------------------------------
const day = (n, h, on) => `<div class="dy"><span>${n}</span><i class="pb"><i style="width:${h}%"></i></i></div>`;
const cal = () => {
  let s = '<div class="cg">' + ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d) => `<em>${d}</em>`).join('');
  for (let i = 0; i < 3; i++) s += '<span></span>';
  for (let d = 1; d <= 31; d++) s += `<span${d === 14 ? ' class="now"' : ''}>${d}</span>`;
  return s + '</div>';
};
const ck = (t, m, done) => `<div class="rw"><i class="ck${done ? ' d' : ''}"></i><div class="tx"><b>${t}</b><span>${m}</span></div></div>`;
ML.add({
  id: 'mobile-nav-swipe-pages',
  cat: 'mobile-nav',
  title: 'Swipe pages, live indicator',
  sub: 'Indicator tracks scroll, not just taps',
  html: phone(`<div class="sw"><section class="px"><h5 class="ttl">Today</h5>${ck('Review Q4 budget', '9:30, Finance', 1)}${ck('Book dentist', 'Before Friday', 0)}${ck('Call Mum', '6:00pm', 0)}</section><section class="px"><h5 class="ttl">Week</h5>${day('Mon 12', 80)}${day('Tue 13', 55)}${day('Wed 14', 35)}${day('Thu 15', 20)}${day('Fri 16', 10)}</section><section class="px"><h5 class="ttl">October</h5>${cal()}</section></div>
<nav class="tbr" aria-label="Main"><i class="ind"></i><button class="tb on" type="button">${ic('list')}<span>Today</span></button><button class="tb" type="button">${ic('cal')}<span>Week</span></button><button class="tb" type="button">${ic('grid')}<span>Month</span></button></nav>`),
  css: PHONE_CSS + `
.d .sw{position:absolute;inset:0;display:flex;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;scrollbar-width:none;touch-action:pan-x;overscroll-behavior:contain}
.d .sw::-webkit-scrollbar{display:none}
.d .px{flex:none;width:100%;scroll-snap-align:start;padding:3.7em 1.3em 0}
.d .ck{flex:none;width:1.8em;height:1.8em;border-radius:.55em;box-shadow:inset 0 0 0 .16em var(--ml-accent-line);position:relative}
.d .ck.d{background:var(--ml-accent);box-shadow:none}
.d .ck.d::after{content:"";position:absolute;left:.5em;top:.28em;width:.5em;height:.9em;border:solid #fff;border-width:0 .18em .18em 0;transform:rotate(45deg) scale(.9)}
.d .dy{display:flex;align-items:center;gap:.8em;padding:.7em 0}
.d .dy span{flex:none;width:3.6em;font-weight:600;color:var(--ml-ink-2)}
.d .pb{display:block;flex:1;height:1.1em;border-radius:.55em;background:var(--ml-bar-2);overflow:hidden}
.d .pb i{display:block;height:100%;border-radius:.55em;background:var(--ml-accent)}
.d .cg{display:grid;grid-template-columns:repeat(7,1fr);gap:.2em;text-align:center}
.d .cg em{font-style:normal;color:var(--ml-muted);font-weight:600;padding-bottom:.4em}
.d .cg span{display:grid;place-items:center;height:2.1em;border-radius:50%;color:var(--ml-ink-2);font-weight:500}
.d .cg span.now{background:var(--ml-accent);color:#fff;font-weight:700}
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:.5em .4em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;z-index:5}
.d .ind{position:absolute;left:.4em;top:.5em;height:3.4em;width:calc((100% - .8em) / 3);border-radius:1.7em;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);will-change:transform}
.d .tb{position:relative;flex:1;display:grid;justify-items:center;align-content:center;gap:.25em;color:var(--ml-muted);transition:color .2s ease}
.d .tb svg{width:1.7em;height:1.7em}
.d .tb span{font:600 .9em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const sw = root.querySelector('.sw');
    const ind = root.querySelector('.ind');
    const tabs = [...root.querySelectorAll('.tb')];
    const upd = () => {
      const p = sw.scrollLeft / (sw.clientWidth || 1);
      const f = p - Math.floor(p);
      ind.style.transform = 'translateX(' + (p * 100).toFixed(2) + '%) scaleX(' + (1 + 0.3 * Math.sin(Math.PI * f)).toFixed(3) + ')';
      const k = Math.round(p);
      tabs.forEach((t, n) => t.classList.toggle('on', n === k));
    };
    sw.addEventListener('scroll', upd, { passive: true });
    tabs.forEach((t, i) => t.addEventListener('click', () => sw.scrollTo({ left: i * sw.clientWidth, behavior: 'smooth' })));
    upd();
    let x0 = null;
    let s0 = 0;
    sw.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse') return;
      x0 = e.clientX;
      s0 = sw.scrollLeft;
      sw.style.scrollSnapType = 'none';
      sw.setPointerCapture(e.pointerId);
    });
    sw.addEventListener('pointermove', (e) => {
      if (x0 === null) return;
      sw.scrollLeft = s0 - (e.clientX - x0) * (sw.offsetWidth / (sw.getBoundingClientRect().width || 1));
    });
    const end = () => {
      if (x0 === null) return;
      x0 = null;
      sw.style.scrollSnapType = '';
      const w = sw.clientWidth;
      sw.scrollTo({ left: Math.round(sw.scrollLeft / w) * w, behavior: 'smooth' });
    };
    sw.addEventListener('pointerup', end);
    sw.addEventListener('pointercancel', end);
    const swipe = (i) => [
      [() => { show(true); at(sw, 0.8, 0.5); }, 600],
      [() => dn(true), 120],
      [() => { at(sw, 0.2, 0.5); sw.scrollTo({ left: i * sw.clientWidth, behavior: 'smooth' }); }, 1100],
      [() => dn(false), 700],
    ];
    loop([...swipe(1), ...swipe(2), ...tap(tabs[0], () => sw.scrollTo({ left: 0, behavior: 'smooth' }), 1500)], 500);
  },
  prompt: `Build horizontally swipeable pages with a bottom tab indicator that follows the scroll position continuously, not only when the swipe settles. Make the pages a flex row inside one scroller: overflow-x: auto; scroll-snap-type: x mandatory; each page flex: none; width: 100%; scroll-snap-align: start; hide the scrollbar and set overscroll-behavior: contain. On the scroller's scroll event (passive, throttled to requestAnimationFrame) compute progress = scrollLeft / clientWidth and set the indicator pill, which is one tab wide, to transform: translateX(progress * 100%) scaleX(1 + .3 * sin(PI * fractionalPart)), so it stretches between tabs while the finger is still down and relaxes when the page snaps. Set the current tab styling from Math.round(progress). Tapping a tab calls scroller.scrollTo({ left: index * clientWidth, behavior: 'smooth' }), so the same code path animates the indicator. Never write left or width to move the pill. Use role="tablist" with role="tab" and aria-selected, tabpanels for the pages with only the visible one exposed, arrow keys to move between tabs, 44px hit areas and focus rings. Under prefers-reduced-motion use behavior: 'auto' and drop the stretch. Plain HTML, CSS and JS, no libraries.`,
});

// 15. long-press -------------------------------------------------------------------------------
const acct = (k, a, n, h, on) => `<button class="ac2${on ? ' on' : ''}" type="button" data-k="${k}"><i class="av${on ? '' : ' b'}">${a}</i><span><b>${n}</b><em>${h}</em></span>${ic('plus').replace('<path d="M5 12h14"/><path d="M12 5v14"/>', '<path d="M20 6 9 17l-5-5"/>')}</button>`;
ML.add({
  id: 'mobile-nav-long-press',
  cat: 'mobile-nav',
  title: 'Long press account switcher',
  sub: 'Hold the profile tab, popover opens',
  html: phone(`<div class="ct">${pg('Feed', list([['MR', 'Maya R.', 'Posted 3 photos', '2m'], ['TK', 'Tomas', 'Started a live room', '9m', 1], ['EL', 'Elena', 'Replied to your story', '21m']]), true)}${pg('Explore', tiles([['Night markets', '2.4k saves'], ['Ceramics', '1.1k saves'], ['Trail runs', '980 saves'], ['Film cameras', '3.2k saves']]))}${pg('Inbox', list([['SO', 'Studio Orbit', 'Shoot moved to 4pm', 'now'], ['MR', 'Maya R.', 'Sent a voice note', '5m', 1], ['TK', 'Tomas', 'See you at 8', '1h']]))}${pg('You', list([['KJ', 'Kenji Mori', '412 followers', ''], ['PH', 'Posts', '86 this year', '', 1], ['SV', 'Saved', '24 collections', '']]))}</div><i class="sc"></i>
<div class="po" role="menu" aria-label="Switch account">${acct(0, 'KJ', 'Kenji Mori', '@kenji', 1)}${acct(1, 'SO', 'Studio Orbit', '@studio.orbit')}${acct(2, 'MR', 'Maya R.', '@mayar')}<p>Add account</p></div>
<nav class="tbr" aria-label="Main">${tab('home', 'Feed', 'on')}${tab('compass', 'Explore')}${tab('msg', 'Inbox')}<button class="tb me" type="button" aria-label="Profile"><i class="av pf">KJ</i><span>You</span><i class="hp"></i></button></nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:0 .4em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;z-index:5}
.d .tb{position:relative;flex:1;display:grid;justify-items:center;align-content:center;gap:.3em;color:var(--ml-muted);transition:color .25s ease,transform .2s ease;touch-action:manipulation;-webkit-user-select:none;user-select:none}
.d .tb svg{width:1.75em;height:1.75em}
.d .tb span{font:600 .9em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .tb .pf{width:1.9em;height:1.9em;font-size:.8em;box-shadow:0 0 0 .15em var(--ml-bg),0 0 0 .3em var(--ml-accent-line)}
.d .tb.on .pf{background:var(--ml-accent);color:#fff}
.d .tb.hold{transform:scale(.9)}
.d .hp{position:absolute;left:22%;right:22%;bottom:.45em;height:.22em;border-radius:.1em;background:var(--ml-accent);transform:scaleX(0);transform-origin:0 50%;opacity:0}
.d .tb.hold .hp{opacity:1;transform:scaleX(1);transition:transform 450ms linear}
.d .sc{position:absolute;inset:0;background:rgba(255,255,255,.7);opacity:0;pointer-events:none;transition:opacity .25s ease;z-index:4}
.d .sc.on{opacity:1;pointer-events:auto}
.d .po{position:absolute;right:.6em;bottom:6.9em;width:12.2em;padding:.4em;border-radius:1.4em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);transform-origin:86% 100%;transform:scale(.5);opacity:0;pointer-events:none;transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity .18s ease;z-index:8}
.d .po.on{transform:none;opacity:1;pointer-events:auto}
.d .ac2{display:flex;align-items:center;gap:.7em;width:100%;padding:.35em .5em;border-radius:1em;text-align:left;transition:background-color .2s ease}
.d .ac2:active{background:var(--ml-surface)}
.d .ac2 .av{width:2.2em;height:2.2em}
.d .ac2 span{flex:1;min-width:0;display:grid;gap:.15em;white-space:nowrap}
.d .ac2 b{font:600 1.1em/1.1 var(--ml-font);color:var(--ml-ink)}
.d .ac2 em{font-style:normal;color:var(--ml-muted)}
.d .ac2 svg{flex:none;width:1.5em;height:1.5em;color:var(--ml-accent);opacity:0;transform:scale(.5);transition:opacity .2s ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .ac2.on svg{opacity:1;transform:none}
.d .po p{margin:.3em .5em .2em;padding-top:.6em;border-top:1px solid var(--ml-line);color:var(--ml-accent-ink);font-weight:600}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const me = root.querySelector('.me');
    const pf = root.querySelector('.pf');
    const po = root.querySelector('.po');
    const sc = root.querySelector('.sc');
    const rows = [...root.querySelectorAll('.ac2')];
    const ini = ['KJ', 'SO', 'MR'];
    let tm = 0;
    let held = false;
    const openPo = () => { held = true; me.classList.remove('hold'); po.classList.add('on'); sc.classList.add('on'); };
    const closePo = () => { po.classList.remove('on'); sc.classList.remove('on'); };
    const pick = (k) => {
      rows.forEach((r, n) => r.classList.toggle('on', n === k));
      pf.textContent = ini[k];
      closePo();
    };
    me.addEventListener('pointerdown', () => { held = false; me.classList.add('hold'); clearTimeout(tm); tm = setTimeout(openPo, 450); });
    const cancel = () => { clearTimeout(tm); me.classList.remove('hold'); };
    me.addEventListener('pointerup', cancel);
    me.addEventListener('pointerleave', cancel);
    me.addEventListener('pointercancel', cancel);
    me.addEventListener('contextmenu', (e) => e.preventDefault());
    me.addEventListener('click', (e) => { if (held) { e.stopImmediatePropagation(); held = false; } }, true);
    rows.forEach((r, n) => r.addEventListener('click', () => pick(n)));
    sc.addEventListener('click', closePo);
    go(0);
    loop([
      [() => { closePo(); pick(0); go(0); }, 300],
      [() => { show(true); at(me); }, 650],
      [() => { dn(true); me.classList.add('hold'); }, 520],
      [() => { dn(false); openPo(); }, 900],
      ...tap(rows[1], () => pick(1), 1500),
    ], 600);
  },
  prompt: `Build a bottom tab bar where pressing and holding the profile tab opens a quick account switcher popover above it, while a normal tap still navigates. On pointerdown start a 450ms timer and add a holding class that scales the tab to .9 and fills a thin progress line under the avatar with transform: scaleX(1) over 450ms linear; on pointerup, pointerleave or pointercancel before the timer fires, clear the timer and the class so a short press is an ordinary tap. When the timer fires, open the popover: a white card (radius 22px, layered shadow, 180px wide) anchored above the tab with transform-origin at the tab's x position and its bottom edge, scale(.5) opacity 0 to scale(1) opacity 1 on a slight-overshoot spring such as 594ms ${BNC}. Suppress the click that follows the release (capture phase, stopImmediatePropagation) so the hold does not also navigate. Add a light haptic where available (navigator.vibrate(8)), put a translucent scrim under the popover that closes it on tap, and list accounts as menuitems with the active one checked; picking one swaps the avatar and closes the menu. Also open it with a context menu event and Shift+F10 / the Menu key for keyboard and mouse users, set aria-haspopup="menu" and aria-expanded on the tab, trap and restore focus, and disable the native touch callout with -webkit-touch-callout: none. Under prefers-reduced-motion fade the popover. Plain HTML, CSS and JS, no libraries.`,
});

// 16. split ------------------------------------------------------------------------------------
ML.add({
  id: 'mobile-nav-split',
  cat: 'mobile-nav',
  title: 'Split pills with lens',
  sub: 'Tabs pill, compose button, glass lens',
  html: phone(`<div class="ct">${pg('Inbox', list([['TK', 'Tomas', 'Q4 roadmap, draft two', '9:12'], ['EL', 'Elena', 'Invoice 1042 approved', '8:40', 1], ['MR', 'Maya R.', 'Lunch on Thursday?', 'Tue'], ['JB', 'Jonah B.', 'Photos from the offsite', 'Mon', 1]]), true)}${pg('Starred', list([['AD', 'Adrián', 'Contract, signed copy', 'Oct 9'], ['LN', 'Lena', 'Keynote slides v6', 'Oct 6', 1], ['PR', 'Priya N.', 'Visa appointment details', 'Oct 2']]))}${pg('Sent', list([['TK', 'To Tomas', 'Re: Q4 roadmap, draft two', 'Tue'], ['EL', 'To Elena', 'Invoice 1042', 'Mon', 1], ['OM', 'To Omar', 'Intro call, Thursday 3pm', 'Oct 8']]))}</div>
<nav class="tp" aria-label="Mailboxes"><i class="ln"></i>${tab('mail', 'Inbox', 'on')}${tab('star', 'Starred')}${tab('send', 'Sent')}</nav>
<button class="cp" type="button" aria-label="Compose">${ic('pen')}</button>`),
  css: PHONE_CSS + `
.d .tp{position:absolute;left:.6em;bottom:1.9em;width:calc(100% - 5.7em);height:4.4em;padding:.5em;border-radius:2.2em;background:var(--ml-bar-2);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);display:flex;z-index:5}
.d .ln{position:absolute;left:.5em;top:.5em;height:3.4em;width:calc((100% - 1em) / 3);border-radius:1.7em;background:linear-gradient(180deg,#fff,rgba(255,255,255,.62));box-shadow:inset 0 0 0 1px rgba(255,255,255,.95),inset 0 .12em .25em #fff,0 .35em .9em rgba(35,15,10,.14),0 0 0 1px rgba(35,15,10,.05);transform-origin:50% 50%;will-change:transform}
.d .tb{position:relative;flex:1;display:grid;justify-items:center;align-content:center;gap:.25em;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:1.7em;height:1.7em}
.d .tb span{font:600 .8em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .cp{position:absolute;right:.6em;bottom:2.1em;width:4em;height:4em;border-radius:50%;background:var(--ml-grad);color:#fff;display:grid;place-items:center;box-shadow:0 .5em 1.1em rgba(255,68,51,.3);z-index:5;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .cp svg{width:1.8em;height:1.8em}
.d .cp:active,.d .cp.pr{transform:scale(.9);transition-duration:90ms}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const ln = root.querySelector('.ln');
    const cp = root.querySelector('.cp');
    let tm = 0;
    hook = (i) => {
      clearTimeout(tm);
      ln.style.transition = 'transform 200ms var(--ml-ease)';
      ln.style.transform = 'translateX(' + i * 100 + '%) scale(1.16,1.1)';
      tm = setTimeout(() => {
        ln.style.transition = 'transform var(--ml-bounce-dur) var(--ml-bounce)';
        ln.style.transform = 'translateX(' + i * 100 + '%) scale(1)';
      }, 170);
    };
    go(0);
    loop([...tap(tabs[1], () => go(1), 1000), ...tap(tabs[2], () => go(2), 1000), ...tap(tabs[0], () => go(0), 900), ...tap(cp, () => { cp.classList.add('pr'); setTimeout(() => cp.classList.remove('pr'), 160); }, 700)], 600);
  },
  prompt: `Build a bottom navigation made of two floating pieces: a tabs pill and a separate round compose button, with the selection shown as a soft glass lens. Lay them out at the bottom with 10px gaps (pill: calc(100% - compose size - gaps), 56px tall, radius 999px, a light tinted background with a hairline inset ring; compose: 56px circle in your accent gradient). Inside the pill put one lens element behind the tab row, exactly one tab wide: a near-white vertical gradient (white to 62% white), an inset 1px white ring, an inset top highlight and a soft outer shadow so it reads as a thin piece of glass. Move it with transform only: on change, translateX(index * 100%) scale(1.16, 1.1) over 200ms cubic-bezier(.32,.72,0,1) (the lens swells as it travels), then 170ms later settle to scale(1) on a slight-overshoot spring such as 594ms ${BNC}. Do not use backdrop-filter over scrolling content, a static tinted fill is enough and cheaper. The compose button scales to .9 on :active in 90ms and springs back. Use role="tablist" in the pill, aria-current or aria-selected on tabs, a labelled compose button, 44px hit areas, focus rings, env(safe-area-inset-bottom) spacing. Under prefers-reduced-motion skip the swell. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 17. spotlight --------------------------------------------------------------------------------
ML.add({
  id: 'mobile-nav-spotlight',
  cat: 'mobile-nav',
  title: 'Spotlight cone bar',
  sub: 'Light falls from the bar edge, slides',
  html: phone(`<div class="ct">${pg('Now showing', tiles([['Night Tide', '2h 04m'], ['Paper Moons', '1h 48m'], ['Low Orbit', '2h 21m'], ['Greenhouse', '1h 37m']]), true)}${pg('Search', list([['NT', 'Night Tide', 'Drama, 2026', '4.6'], ['PM', 'Paper Moons', 'Comedy, 2026', '4.4', 1], ['LO', 'Low Orbit', 'Sci-fi, 2026', '4.7']]))}${pg('Tickets', list([['14', 'Paper Moons', 'Wed 14 Oct, 7:30pm, F12', 'Ready'], ['17', 'Night Tide', 'Sat 17 Oct, 4:00pm, C8', 'Ready', 1]]))}${pg('Me', list([['IR', 'Iris Romero', 'Gold member', ''], ['PT', 'Points', '1,240 earned', '', 1], ['CD', 'Cinemas', 'Harbor Mall, Studio 9', '']]))}</div>
<nav class="tbr" aria-label="Main"><div class="cn"></div><div class="row">${tab('film', 'Now', 'on')}${tab('search', 'Search')}${tab('ticket', 'Tickets')}${tab('user', 'Me')}</div></nav>`),
  css: PHONE_CSS + `
.d .hi{background:rgba(255,255,255,.85)}
.d .tbr{position:absolute;left:0;right:0;bottom:0;height:6.4em;background:var(--ml-ink);z-index:5;overflow:hidden}
.d .row{position:relative;display:flex;height:4.6em}
.d .cn{position:absolute;left:0;top:0;width:25%;height:5em;transition:transform var(--ml-bounce-dur) var(--ml-bounce);pointer-events:none}
.d .cn::before{content:"";position:absolute;left:31%;right:31%;top:0;height:.22em;border-radius:0 0 .2em .2em;background:var(--ml-accent-2)}
.d .cn::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,.5),rgba(255,255,255,0) 88%);clip-path:polygon(33% 0,67% 0,100% 100%,0 100%)}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.3em;color:rgba(255,255,255,.5);transition:color .3s ease}
.d .tb svg{width:1.8em;height:1.8em}
.d .tb span{font:600 .95em/1 var(--ml-font)}
.d .tb.on{color:#fff}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const cn = root.querySelector('.cn');
    hook = (i) => { cn.style.transform = 'translateX(' + i * 100 + '%)'; };
    go(0);
    loop([...tap(tabs[2], () => go(2), 1100), ...tap(tabs[1], () => go(1), 1000), ...tap(tabs[3], () => go(3), 1000), ...tap(tabs[0], () => go(0), 1000)], 600);
  },
  prompt: `Build a dark bottom tab bar where a cone of light falls from the bar's top edge onto the active icon and slides with it. Use a full-width bar in near-black ink (overflow: hidden, safe-area padding at the bottom) with four equal tabs. Add one absolutely positioned light element exactly one tab wide and as tall as the tab row. Its ::before is a 3px lamp strip at the top edge (about 38% of the tab width, rounded bottom, your accent color) and its ::after is the cone: background: linear-gradient(180deg, rgba(255,255,255,.4), rgba(255,255,255,0) 88%) clipped with clip-path: polygon(33% 0, 67% 0, 100% 100%, 0 100%). Move it with transform: translateX(index * 100%) on a slight-overshoot spring such as 594ms ${BNC}, so the light swings past the target and settles. Inactive icons and labels are white at 50%, the active ones go pure white over 300ms. No blur filters and no box-shadow glow, the cone is a plain gradient so it stays cheap. Use a nav element with aria-current="page", 44px hit areas, visible focus rings and a light home indicator. Under prefers-reduced-motion move the light without overshoot. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

// 18. dark-chip --------------------------------------------------------------------------------
const dtab = (icon, label, on) => `<button class="tb${on ? ' on' : ''}" type="button" aria-label="${label}">${ic(icon)}<span>${label}</span></button>`;
ML.add({
  id: 'mobile-nav-dark-chip',
  cat: 'mobile-nav',
  title: 'Ink bar, white chip',
  sub: 'A white chip travels and takes the label',
  html: phone(`<div class="ct">${pg('Shop', tiles([['Wool throw', '$96'], ['Oak stool', '$140'], ['Glass carafe', '$38'], ['Brass hook', '$14']]), true)}${pg('Saved', list([['OS', 'Oak stool', 'Back in stock', '$140'], ['WT', 'Wool throw', 'Price dropped', '$96', 1], ['GC', 'Glass carafe', '2 left', '$38']]))}${pg('Bag', list([['1', 'Brass hook x2', 'Free delivery over $50', '$28'], ['2', 'Glass carafe', 'Ships Friday', '$38', 1]]))}${pg('Me', list([['NB', 'Noor B.', 'Member since 2025', ''], ['AD', 'Addresses', '2 saved', '', 1], ['OR', 'Orders', '7 delivered', '']]))}</div>
<nav class="tbr" aria-label="Main"><i class="cp"></i>${dtab('home', 'Shop', 1)}${dtab('mark', 'Saved')}${dtab('bag', 'Bag')}${dtab('user', 'Me')}</nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.4em;right:.4em;bottom:1.9em;height:4.4em;padding:0 .35em;border-radius:2.2em;background:var(--ml-ink);box-shadow:0 .6em 1.4em rgba(35,15,10,.28);display:flex;align-items:center;justify-content:space-between;z-index:5}
.d .cp{position:absolute;left:0;top:.5em;width:100px;height:3.4em;border-radius:1.7em;background:#fff;transform-origin:0 50%;pointer-events:none}
.d .tb{position:relative;z-index:1;flex:none;display:flex;align-items:center;gap:.4em;height:3.4em;padding:0 .5em;border-radius:1.7em;color:rgba(255,255,255,.55);transition:color .25s ease}
.d .tb svg{flex:none;width:1.7em;height:1.7em}
.d .tb span{display:none;font:600 1.05em/1 var(--ml-font);letter-spacing:-.01em;white-space:nowrap}
.d .tb.on{color:var(--ml-ink);padding:0 .75em 0 .65em}
.d .tb.on span{display:block;animation:ml-lbl .22s ease .24s both}
@keyframes ml-lbl{from{opacity:0}to{opacity:1}}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    let hook = null;
    const go = (i) => {
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
      if (hook) hook(i);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => go(i)));
    const bar = root.querySelector('.tbr');
    const cp = root.querySelector('.cp');
    const geo = () => tabs.map((t) => ({ l: t.offsetLeft, w: t.offsetWidth }));
    let prev = geo();
    let pi = 0;
    const place = (r, anim) => {
      cp.style.transition = anim ? 'transform var(--ml-spring-dur) var(--ml-spring)' : 'none';
      cp.style.transform = 'translateX(' + r.l + 'px) scaleX(' + r.w / 100 + ')';
    };
    hook = (i) => {
      const now = geo();
      tabs.forEach((t, n) => {
        t.style.transition = 'none';
        t.style.transform = 'translateX(' + (prev[n].l - now[n].l) + 'px)';
      });
      place({ l: prev[pi].l, w: prev[pi].w }, false);
      bar.getBoundingClientRect();
      tabs.forEach((t) => {
        t.style.transition = 'transform var(--ml-spring-dur) var(--ml-spring),color .25s ease';
        t.style.transform = '';
      });
      place(now[i], true);
      prev = now;
      pi = i;
    };
    place(prev[0], false);
    go(0);
    loop([...tap(tabs[2], () => go(2), 1100), ...tap(tabs[1], () => go(1), 1000), ...tap(tabs[3], () => go(3), 1000), ...tap(tabs[0], () => go(0), 1000)], 600);
  },
  prompt: `Build a dark floating tab bar where the active tab becomes a white chip showing its label, and the chip travels between tabs. Use an ink-colored pill bar with four buttons. Only the active button shows its text label (display: block), so layout changes when the selection changes; animate that with a FLIP pass instead of animating widths: before the class change record every tab's offsetLeft, apply the class, record the new offsetLeft, set each tab's transform: translateX(oldLeft - newLeft) with no transition, force a reflow, then clear the transform with a transition of 587ms ${SPR}. The white chip is one separate absolutely positioned element with a fixed base width (say 100px) and transform-origin 0 50%: start it at translateX(oldLeft) scaleX(oldWidth / 100), then transition to translateX(newLeft) scaleX(newWidth / 100) on the same spring, so it slides and resizes on the compositor. Fade the new label in over 300ms after an 80ms delay. Active icon and label are ink on the white chip, others are white at 55%. Keep hit areas 44px, aria-current="page", focus-visible rings, and measure again on resize. Under prefers-reduced-motion skip the FLIP and cross-fade. Plain HTML, CSS and JS, no libraries.`,
});

// 19. reselect ---------------------------------------------------------------------------------
const pst = (a, n, t, c, k) => `<div class="pst"><div class="rw"><i class="av${k ? ' b' : ''}">${a}</i><div class="tx"><b>${n}</b><span>${t}</span></div></div><div class="hero"></div><p>${c}</p></div>`;
ML.add({
  id: 'mobile-nav-reselect',
  cat: 'mobile-nav',
  title: 'Tap active tab: top, refresh',
  sub: 'Icon turns arrow, feed jumps up',
  html: phone(`<div class="ct"><section class="pg sx on"><h5 class="ttl">Postcard</h5>${pst('MR', 'Maya R.', '2h', 'Sunday market, first peaches', 0)}${pst('EL', 'Elena', '3h', 'New studio window, finally', 1)}${pst('JB', 'Jonah B.', '5h', 'Trail day, 14 km', 0)}${pst('PR', 'Priya N.', '6h', 'Dumpling night at ours', 1)}<div class="sp"></div></section>${pg('Search', list([['MK', 'markets', 'Trending', ''], ['CR', 'ceramics', 'Trending', '', 1]]))}${pg('Reels', tiles([['Peach pie', '1.2M plays'], ['Studio tour', '840k plays']]))}${pg('Me', list([['KJ', 'Kenji Mori', '412 followers', ''], ['PH', 'Posts', '86 this year', '', 1]]))}</div>
<div class="rf"><i></i><span>Updating</span></div>
<nav class="tbr" aria-label="Main"><button class="tb on" type="button" aria-label="Home"><span class="ib">${ic('home', 'i1')}${ic('up', 'i2')}</span><span class="lt"><i class="l1">Home</i><i class="l2">Top</i></span></button>${tab('search', 'Search')}${tab('play', 'Reels')}${tab('user', 'Me')}</nav>`),
  css: PHONE_CSS + `
.d .sx{overflow-y:auto;scrollbar-width:none;overscroll-behavior:contain}
.d .sx::-webkit-scrollbar{display:none}
.d .sp{height:9em}
.d .pst{padding-bottom:.4em}
.d .pst .hero{height:6.4em;margin:.2em 0 .5em}
.d .pst p{color:var(--ml-ink-2);font-weight:500}
.d .pst.fl .tx b{color:var(--ml-accent-ink)}
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:0 .4em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;z-index:5}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.3em;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:1.75em;height:1.75em}
.d .tb span{font:600 .9em/1 var(--ml-font)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .ib{display:grid;place-items:center}
.d .ib svg{grid-area:1/1;transition:opacity .22s ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .i2{opacity:0;transform:translateY(.7em) scale(.6)}
.d .tb.up .i1{opacity:0;transform:translateY(-.7em) scale(.6)}
.d .tb.up .i2{opacity:1;transform:none}
.d .lt{display:grid;font:600 .9em/1 var(--ml-font)}
.d .lt i{grid-area:1/1;font-style:normal;text-align:center;transition:opacity .12s ease-in}
.d .tb:not(.up) .l1{transition-delay:.16s}
.d .l2{opacity:0;transition-delay:0s}
.d .tb.up .l1{opacity:0;transition-delay:0s}
.d .tb.up .l2{opacity:1;transition-delay:.16s}
.d .rf{position:absolute;left:50%;top:3.4em;display:flex;align-items:center;gap:.6em;padding:.55em 1em .55em .7em;border-radius:1.4em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);transform:translate(-50%,-1.6em);opacity:0;pointer-events:none;z-index:6;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease}
.d .rf.on{transform:translate(-50%,0);opacity:1}
.d .rf i{width:2.6em;height:.5em;border-radius:.25em;background:linear-gradient(90deg,var(--ml-bar) 0,var(--ml-accent-line) 50%,var(--ml-bar) 100%);background-size:200% 100%;animation:ml-shim 1.1s linear infinite}
.d .rf span{font-weight:600;color:var(--ml-ink-2)}
@keyframes ml-shim{from{background-position:200% 0}to{background-position:-200% 0}}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    const sx = root.querySelector('.sx');
    const rf = root.querySelector('.rf');
    const home = tabs[0];
    const first = root.querySelector('.pst');
    const fb = first.querySelector('b');
    const fs = first.querySelector('.tx span');
    const fp = first.querySelector('p');
    const fa = first.querySelector('.av');
    let cur = 0;
    let t1 = 0;
    let t2 = 0;
    let t3 = 0;
    const go = (i) => {
      cur = i;
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === i); p.classList.toggle('bf', n < i); });
    };
    const fresh = (v) => {
      fb.textContent = v ? 'Tomas' : 'Maya R.';
      fs.textContent = v ? 'just now' : '2h';
      fp.textContent = v ? 'Cold brew at the new place on Pine' : 'Sunday market, first peaches';
      fa.textContent = v ? 'TK' : 'MR';
      first.classList.toggle('fl', v);
    };
    const reselect = () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      home.classList.add('up');
      sx.scrollTo({ top: 0, behavior: 'smooth' });
      t1 = setTimeout(() => rf.classList.add('on'), 480);
      t2 = setTimeout(() => { fresh(true); rf.classList.remove('on'); }, 1500);
      t3 = setTimeout(() => home.classList.remove('up'), 1800);
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => {
      if (i === cur) { if (i === 0) reselect(); return; }
      go(i);
    }));
    const drag = (to, fy) => [
      [() => { show(true); at(sx, 0.55, fy[0]); }, 600],
      [() => dn(true), 120],
      [() => { at(sx, 0.55, fy[1]); sx.scrollTo({ top: Math.round(to * sx.clientHeight), behavior: 'smooth' }); }, 1150],
      [() => dn(false), 600],
    ];
    loop([
      [() => { fresh(false); go(0); home.classList.remove('up'); rf.classList.remove('on'); }, 200],
      ...drag(0.55, [0.78, 0.4]),
      ...tap(home, reselect, 2200),
    ], 600);
  },
  prompt: `Build the "tap the active tab again" behavior: re-selecting the current tab scrolls its content back to the top and refreshes it, and the tab icon tells the user that is what will happen. Keep one real scroller for the page. A click on a tab that is already current calls reselect(): add an up class to the tab, call scroller.scrollTo({ top: 0, behavior: 'smooth' }), then about 480ms later show a small pill ("Updating", with a shimmer bar built from a moving background-position gradient, never a circular spinner) that drops in with transform: translateY on a critically damped spring such as 587ms ${SPR}, then fetch new items, insert them at the top, hide the pill and remove the up class. The icon swap is two stacked SVGs in one grid cell: the house fades out moving up 7px at scale .6 while the arrow-up fades in from below on a slight-overshoot spring (594ms ${BNC}), and the label crossfades from Home to Top. If the user is already at the top, skip the scroll and only refresh. Debounce repeated taps, clear pending timers on a new tap, and announce "Feed updated" through a polite live region. Use a nav with aria-current="page", 44px hit areas and visible focus rings. Under prefers-reduced-motion jump to the top with behavior: 'auto'. Plain HTML, CSS and JS, no libraries.`,
});

// 20. more-sheet -------------------------------------------------------------------------------
const mt = (icon, label) => `<button class="mt" type="button" tabindex="-1"><i>${ic(icon)}</i><span>${label}</span></button>`;
ML.add({
  id: 'mobile-nav-more-sheet',
  cat: 'mobile-nav',
  title: 'More sheet swaps a tab',
  sub: 'Pick a destination, it joins the bar',
  html: phone(`<div class="ct">${pg('Home', stat('$4,280.50', 'across 3 accounts', [40, 55, 35, 62, 80, 50, 70]), true)}${pg('Pay', list([['MR', 'Maya R.', 'Rent share, Oct', '-$420'], ['TK', 'Tomas', 'Lunch split', '+$18', 1], ['EL', 'Elena', 'Concert tickets', '-$96']]))}${pg('Cards', list([['VS', 'Visa debit', 'Ending 4021', 'Active'], ['VC', 'Virtual card', 'Streaming', 'Paused', 1]]))}${pg('Stats', stat('$1,860', 'spent this month', [30, 62, 44, 70, 52, 80, 38]))}${pg('Goals', list([['SM', 'Summary', 'Updated today', ''], ['RC', 'Recent activity', '3 new items', '3', 1], ['PL', 'Plan', 'On track this month', '']]))}</div><i class="sc"></i>
<div class="sh2" role="dialog" aria-label="More"><i class="gr"></i><h6>More</h6><div class="mg">${mt('target', 'Budgets')}${mt('help', 'Goals')}${mt('file', 'Bills')}${mt('card', 'Invoices')}${mt('swap', 'Send')}${mt('shield', 'Security')}${mt('phone', 'Support')}${mt('sliders', 'Settings')}</div></div>
<nav class="tbr" aria-label="Main">${tab('home', 'Home', 'on')}${tab('wallet', 'Pay')}${tab('card', 'Cards')}${tab('chart', 'Stats')}<button class="tb mr" type="button" aria-label="More" aria-expanded="false">${ic('more')}<span>More</span></button></nav>`),
  css: PHONE_CSS + `
.d .tbr{position:absolute;left:.5em;right:.5em;bottom:1.9em;height:4.4em;padding:0 .3em;border-radius:2.2em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);display:flex;z-index:6}
.d .tb{flex:1;display:grid;justify-items:center;align-content:center;gap:.3em;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:1.7em;height:1.7em}
.d .tb span{font:600 .8em/1 var(--ml-font);max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.d .tb.on{color:var(--ml-accent-ink)}
.d .tb.pop svg,.d .tb.pop span{animation:ml-pop .5s var(--ml-ease)}
@keyframes ml-pop{0%{transform:scale(.5);opacity:0}60%{transform:scale(1.15);opacity:1}100%{transform:scale(1)}}
.d .sc{position:absolute;inset:0;background:rgba(255,255,255,.7);opacity:0;pointer-events:none;transition:opacity .3s ease;z-index:4}
.d .sc.on{opacity:1;pointer-events:auto}
.d .sh2{position:absolute;left:.5em;right:.5em;bottom:6.8em;padding:.7em .7em 1em;border-radius:1.8em;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);transform:translateY(160%);visibility:hidden;transition:transform var(--ml-spring-dur) var(--ml-spring),visibility 0s .6s;z-index:5}
.d .sh2.on{transform:none;visibility:visible;transition:transform var(--ml-spring-dur) var(--ml-spring),visibility 0s}
.d .gr{display:block;width:3em;height:.35em;margin:0 auto .6em;border-radius:.2em;background:var(--ml-bar)}
.d .sh2 h6{font:650 1.4em/1 var(--ml-font);letter-spacing:-.02em;margin:0 0 .6em .4em}
.d .mg{display:grid;grid-template-columns:repeat(4,1fr);gap:.4em .3em}
.d .mt{display:grid;justify-items:center;gap:.4em;padding:.3em 0;color:var(--ml-ink-2);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .mt:active,.d .mt.pr{transform:scale(.92);transition-duration:90ms}
.d .mt i{display:grid;place-items:center;width:3.2em;height:3.2em;border-radius:1.05em;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .mt svg{width:1.6em;height:1.6em}
.d .mt span{font:600 .78em/1 var(--ml-font)}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let busy = 0;
    const hit = () => { busy = performance.now() + 2500; };
    root.addEventListener('pointerdown', hit, true);
    root.addEventListener('wheel', hit, { passive: true });
    const off = () => !root.isConnected || root.dataset.paused || performance.now() < busy;
    const at = (el, fx = 0.5, fy = 0.5) => {
      const a = root.getBoundingClientRect();
      const b = el.getBoundingClientRect();
      fg.style.setProperty('--x', b.left - a.left + b.width * fx + 'px');
      fg.style.setProperty('--y', b.top - a.top + b.height * fy + 'px');
    };
    const dn = (v) => fg.style.setProperty('--s', v ? '.82' : '1');
    const show = (v) => fg.classList.toggle('on', v);
    const play = async (steps) => {
      for (const s of steps) {
        if (off()) break;
        s[0]();
        await wait(s[1]);
      }
      show(false);
      dn(false);
    };
    const loop = async (steps, rest, first = 800) => {
      await wait(first);
      while (root.isConnected) {
        while (root.isConnected && off()) await wait(250);
        if (!root.isConnected) return;
        await play(steps);
        await wait(rest);
      }
    };
    const tap = (el, fn, rest = 700) => [
      [() => { show(true); at(el); }, 620],
      [() => dn(true), 110],
      [() => { dn(false); fn(); }, rest],
    ];
    const tabs = [...root.querySelectorAll('.tb')];
    const pgs = [...root.querySelectorAll('.pg')];
    const more = tabs[4];
    const slot = tabs[3];
    const orig = slot.innerHTML;
    const origLabel = slot.getAttribute('aria-label');
    const sc = root.querySelector('.sc');
    const sh = root.querySelector('.sh2');
    const mts = [...root.querySelectorAll('.mt')];
    let swapped = false;
    const pane = (i) => (i === 3 && swapped ? 4 : i);
    const go = (i) => {
      const k = pane(i);
      tabs.forEach((t, n) => { t.classList.toggle('on', n === i); t.setAttribute('aria-current', n === i ? 'page' : 'false'); });
      pgs.forEach((p, n) => { p.classList.toggle('on', n === k); p.classList.toggle('bf', n < k); });
    };
    const open = (o) => {
      sh.classList.toggle('on', o);
      sc.classList.toggle('on', o);
      more.setAttribute('aria-expanded', o ? 'true' : 'false');
      mts.forEach((m) => { m.tabIndex = o ? 0 : -1; });
    };
    const restore = () => {
      swapped = false;
      slot.innerHTML = orig;
      slot.setAttribute('aria-label', origLabel);
    };
    const pick = (m) => {
      const label = m.querySelector('span').textContent;
      swapped = true;
      slot.innerHTML = m.querySelector('svg').outerHTML + '<span>' + label + '</span>';
      slot.setAttribute('aria-label', label);
      pgs[4].querySelector('.ttl').textContent = label;
      slot.classList.remove('pop');
      slot.getBoundingClientRect();
      slot.classList.add('pop');
      open(false);
      go(3);
    };
    tabs.slice(0, 4).forEach((t, i) => t.addEventListener('click', () => go(i)));
    more.addEventListener('click', () => open(!sh.classList.contains('on')));
    sc.addEventListener('click', () => open(false));
    mts.forEach((m) => m.addEventListener('click', () => pick(m)));
    go(0);
    loop([
      [() => { open(false); restore(); go(0); }, 200],
      ...tap(more, () => open(true), 1500),
      ...tap(mts[1], () => pick(mts[1]), 1600),
      ...tap(tabs[0], () => go(0), 700),
    ], 700);
  },
  prompt: `Build a bottom tab bar with a More tab that opens a sheet containing a grid of extra destinations, where picking one swaps it into the bar. The bar has five buttons: four destinations and More (aria-expanded, aria-controls pointing at the sheet). The sheet is a floating white card above the bar (radius 29px, grabber, title, a 4 by 2 grid of 54px rounded tiles with an icon and a label) that slides in with transform: translateY(130%) to none on a critically damped spring such as 587ms ${SPR}, with a 70% white scrim under it that closes it on tap. Tiles are tabbable only while open, Escape closes the sheet and returns focus to More. Picking a tile does three things: store the chosen destination as the fourth slot in your data (persist it so the bar remembers it), replace the fourth button's icon and label with the tile's, and play a short pop (scale .5 to 1.15 to 1 with opacity, 500ms) on the new content, then close the sheet and show that destination's page with the same directional crossfade the other tabs use. Tapping the fourth button again goes to the swapped destination. Only transform and opacity animate. Use a nav with aria-current="page", 44px hit areas, focus rings, role="dialog" on the sheet and inert on the page behind while open. Under prefers-reduced-motion fade the sheet. Plain HTML, CSS and JS, no libraries.`,
});

})();
