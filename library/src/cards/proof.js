// Logos and social proof. Made-up wordmarks and abstract marks only, no real brands.
(() => {
const C = `.d{display:grid;place-items:center;background:var(--ml-surface)}`;
const ic = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const SP = `linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 0.994 77.8%, 0.996 83.3%, 0.998 88.9%, 1 100%)`;
const BN = `linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1 100%)`;
const END = ` Put the real text in the DOM for screen readers, never rely on color alone, and under prefers-reduced-motion show the final state with no movement. Plain HTML, CSS and JS, no libraries.`;

const MARKS = [
  `<circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="3.6"/>`,
  `<path d="M12 3 21.5 20H2.5z" fill="currentColor"/>`,
  `<path d="M12 2.5 20.5 7.5v9L12 21.5 3.5 16.5v-9z" fill="currentColor"/>`,
  `<rect x="3" y="11" width="4.4" height="10" rx="1.4" fill="currentColor"/><rect x="9.8" y="6" width="4.4" height="15" rx="1.4" fill="currentColor"/><rect x="16.6" y="2.5" width="4.4" height="18.5" rx="1.4" fill="currentColor"/>`,
  `<path d="M12 2 22 12 12 22 2 12z" fill="currentColor"/><circle cx="12" cy="12" r="3.2" fill="#fff"/>`,
  `<path d="M4.5 19.5C4.5 10 10 4.5 19.5 4.5c0 9.5-5.5 15-15 15z" fill="currentColor"/>`,
  `<path d="M2.5 14c3-6 6-6 9.5 0s6.5 6 9.5 0" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"/>`,
  `<rect x="3" y="3" width="18" height="5.4" rx="2.2" fill="currentColor"/><rect x="3" y="9.8" width="18" height="5.4" rx="2.2" fill="currentColor" opacity=".7"/><rect x="3" y="16.6" width="18" height="5.4" rx="2.2" fill="currentColor" opacity=".45"/>`,
  `<path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor"/><circle cx="16" cy="12" r="5" fill="currentColor" opacity=".55"/>`,
  `<path d="M9.8 3h4.4v6.8H21v4.4h-6.8V21H9.8v-6.8H3V9.8h6.8z" fill="currentColor"/>`,
  `<path d="M3.5 19a8.5 8.5 0 0 1 17 0" fill="none" stroke="currentColor" stroke-width="3.6" stroke-linecap="round"/><circle cx="12" cy="8" r="2.4" fill="currentColor"/>`,
  `<circle cx="7" cy="7" r="3.4" fill="currentColor"/><circle cx="17" cy="7" r="3.4" fill="currentColor" opacity=".6"/><circle cx="7" cy="17" r="3.4" fill="currentColor" opacity=".6"/><circle cx="17" cy="17" r="3.4" fill="currentColor"/>`,
];
const NAMES = ['Northwind', 'Lumen', 'Arcwise', 'Pinecrest', 'Halcyon', 'Verity', 'Kestrel', 'Meridian', 'Cobalt', 'Fathom', 'Orbital', 'Quill'];
const logo = (i) => `<span class="lg"><svg viewBox="0 0 24 24" aria-hidden="true">${MARKS[i]}</svg><b>${NAMES[i]}</b></span>`;
const LG = `.d .lg{display:inline-flex;align-items:center;gap:7px;color:#7D8CA5;white-space:nowrap}
.d .lg svg{width:21px;height:21px;flex:none}
.d .lg b{font:600 16px/1 var(--ml-font);letter-spacing:-.03em}`;

ML.add({
  id: 'proof-logo-marquee',
  cat: 'proof',
  title: 'Logo marquee',
  sub: 'Endless logo rows with soft edge fades',
  html: `<div class="wrap"><span class="lb">Trusted by teams at</span><div class="rw"><div class="tr">${[0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5].map(logo).join('')}</div></div><div class="rw"><div class="tr rev">${[6, 7, 8, 9, 10, 11, 6, 7, 8, 9, 10, 11].map(logo).join('')}</div></div></div>`,
  css: C + LG + `
.d{background:var(--ml-bg)}
.d .wrap{width:100%;display:grid;gap:22px}
.d .lb{text-align:center;font:500 10.5px/1 var(--ml-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ml-muted)}
.d .rw{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 16%,#000 84%,transparent);mask-image:linear-gradient(90deg,transparent,#000 16%,#000 84%,transparent)}
.d .tr{display:flex;width:max-content;animation:mq 20s linear infinite}
.d .tr.rev{animation-direction:reverse;animation-duration:26s}
.d .tr .lg{margin-right:34px}
@keyframes mq{to{transform:translateX(-50%)}}
`,
  prompt: `Build an endless logo marquee for a "Trusted by" section. Render one row of logos twice back to back inside a flex track with width: max-content, give every logo a right margin (not gap, so the half-width math stays exact), and animate the track with @keyframes { to { transform: translateX(-50%) } } at 20s linear infinite so the loop is seamless. Add a second row moving the other way (animation-direction: reverse, 26s) for depth. Fade both edges with mask-image: linear-gradient(90deg, transparent, #000 16%, #000 84%, transparent) on the row wrapper. Use monochrome logos at a muted color so no single brand shouts. Animate transform only. Pause on hover (animation-play-state: paused), mark the duplicate set aria-hidden="true", and keep a static visually hidden list of the company names for screen readers.` + END,
});

ML.add({
  id: 'proof-logo-cycle',
  cat: 'proof',
  title: 'Logo grid cycle',
  sub: 'Cells swap logos one at a time',
  html: `<div class="gd">${[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => `<div class="cl"><div class="ct">${logo(i)}</div></div>`).join('')}</div><div class="pool">${Array.from({ length: 12 }, (_, i) => logo(i)).join('')}</div>`,
  css: C + LG + `
.d .gd{width:88%;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.d .cl{display:grid;place-items:center;aspect-ratio:1.55;border-radius:13px;background:var(--ml-bg);box-shadow:var(--ml-shadow);overflow:hidden}
.d .ct{transition:opacity 280ms ease,transform 380ms var(--ml-ease)}
.d .ct.out{opacity:0;transform:translateY(-10px) scale(.92)}
.d .ct.pre{opacity:0;transform:translateY(10px) scale(.92);transition:none}
.d .lg{flex-direction:column;gap:5px}
.d .lg svg{width:22px;height:22px}
.d .lg b{font-size:11.5px}
.d .pool{display:none}
`,
  run: (root) => {
    const cts = [...root.querySelectorAll('.ct')];
    const pool = [...root.querySelectorAll('.pool .lg')].map((n) => n.outerHTML);
    let cur = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let spare = [9, 10, 11];
    const order = [4, 0, 7, 2, 5, 8, 1, 6, 3];
    let k = 0, hov = false;
    root.addEventListener('pointerenter', () => { hov = true; });
    root.addEventListener('pointerleave', () => { hov = false; });
    const swap = () => {
      const c = order[k++ % order.length];
      const ct = cts[c];
      ct.classList.add('out');
      setTimeout(() => {
        const next = spare.shift();
        spare.push(cur[c]);
        cur[c] = next;
        ct.innerHTML = pool[next];
        ct.classList.remove('out');
        ct.classList.add('pre');
        void ct.offsetWidth;
        ct.classList.remove('pre');
      }, 300);
    };
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov) swap();
      setTimeout(tick, 850);
    };
    setTimeout(tick, 600);
  },
  prompt: `Build a logo wall that cycles one cell at a time. Lay out a 3x3 grid of equal cards; each cell holds a monochrome mark with its wordmark. Keep a pool of extra logos beyond the nine shown. On a timer of about 850ms pick the next cell in a shuffled order, fade the old logo out (opacity to 0, translateY(-10px) scale(.92), 280ms), swap in a logo that is not currently visible, then bring it in from translateY(10px) scale(.92) to rest with transition: opacity 280ms, transform 380ms cubic-bezier(.32,.72,0,1). Only one cell animates at a time so the wall feels calm. Pause while the pointer is over it or the tab is hidden. Keep the real company names in a visually hidden list for screen readers and mark the animated cells aria-hidden="true".` + END,
});

ML.add({
  id: 'proof-avatar-stack',
  cat: 'proof',
  title: 'Avatar stack',
  sub: 'Avatars slide in, the count ticks up',
  html: `<div class="cd"><div class="stk">${['MR', 'TL', 'PS', 'AK', 'JW'].map((n, i) => `<span class="av" style="--i:${i}">${n}</span>`).join('')}<span class="av cn" style="--i:5"><b>+0k</b></span></div><p><b>Joined by 2,400+ makers</b><span>Teams ship faster with Arcwise</span></p></div>`,
  css: C + `
.d .cd{width:80%;display:grid;justify-items:center;gap:16px;padding:22px 16px 20px;border-radius:20px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .stk{display:flex;padding-left:12px}
.d .av{display:grid;place-items:center;width:44px;height:44px;margin-left:-12px;border-radius:50%;border:3px solid var(--ml-bg);font:600 12px/1 var(--ml-font);color:var(--ml-accent-ink);background:var(--bg,var(--ml-accent-soft));opacity:0;transform:translateX(-26px) scale(.6);transition:opacity 260ms ease,transform 620ms var(--ml-bounce);transition-delay:calc(var(--i) * 85ms)}
.d .av:nth-child(1){--bg:#FFEBE8}.d .av:nth-child(2){--bg:#C4DBFB;color:#0A3E91}.d .av:nth-child(3){--bg:#E9EEF6;color:#3A4A66}.d .av:nth-child(4){--bg:#B5D1FA;color:#0A3E91}.d .av:nth-child(5){--bg:#D5E3F8}
.d .av.cn{background:var(--ml-grad);color:#fff;width:auto;min-width:52px;padding:0 10px;border-radius:999px}
.d .av.cn b{font:600 13px/1 var(--ml-font);font-variant-numeric:tabular-nums}
.d.on .av{opacity:1;transform:none}
.d p{display:grid;gap:5px;text-align:center}
.d p b{font:600 14px/1 var(--ml-font);letter-spacing:-.02em}
.d p span{font:500 11.5px/1 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const num = root.querySelector('.cn b');
    let v = 0, tweenStart = 0;
    const on = () => {
      root.classList.add('on');
      tweenStart = performance.now() + 700;
    };
    const off = () => {
      root.classList.remove('on');
      tweenStart = 0;
      v = 0;
      num.textContent = '+0k';
    };
    const loop = () => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || !tweenStart) return;
      const k = Math.min(1, Math.max(0, (performance.now() - tweenStart) / 1100));
      v = 2.4 * (1 - Math.pow(1 - k, 3));
      num.textContent = '+' + v.toFixed(1) + 'k';
    };
    const cycle = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        if (root.classList.contains('on')) off(); else on();
      }
      setTimeout(cycle, root.classList.contains('on') ? 4300 : 700);
    };
    requestAnimationFrame(loop);
    setTimeout(cycle, 300);
  },
  prompt: `Build an avatar stack social-proof row. Show five overlapping circular avatars (44px, 3px ring in the page background, margin-left: -12px, initials on soft blue and grey tints) followed by a gradient count pill reading "+2.4k". Reveal them on scroll-in: each avatar transitions from opacity 0 and transform: translateX(-26px) scale(.6) to rest with transition: opacity 260ms, transform 620ms ${BN}, delayed by index * 85ms. After the last avatar lands, tick the count from 0 to 2.4 over about 1.1 seconds in a requestAnimationFrame loop with an ease-out-cubic curve and tabular-nums, formatted as "+" + value.toFixed(1) + "k". Add a one-line caption below with the real number. Use real <img> avatars with alt="" in production and give the group a single aria-label such as "Joined by 2,400 makers".` + END,
});

ML.add({
  id: 'proof-stars',
  cat: 'proof',
  title: 'Star rating',
  sub: 'Stars fill one by one to 4.9',
  html: `<div class="cd"><div class="sc">4.9</div><div class="stars">${[0, 1, 2, 3, 4].map((i) => `<span class="st" style="--i:${i};--r:${i === 4 ? '10%' : '0%'}"><svg class="bg" viewBox="0 0 24 24"><path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z"/></svg><svg class="fg" viewBox="0 0 24 24"><path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z"/></svg></span>`).join('')}</div><p>Rated by 3,120 customers</p></div>`,
  css: C + `
.d .cd{width:74%;display:grid;justify-items:center;gap:11px;padding:22px 16px 20px;border-radius:20px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .sc{font:600 54px/1 var(--ml-font);letter-spacing:-.055em;font-variant-numeric:tabular-nums}
.d .stars{display:flex;gap:5px}
.d .st{position:relative;width:27px;height:27px}
.d .st svg{position:absolute;inset:0;width:100%;height:100%}
.d .bg{fill:var(--ml-bar-2);stroke:var(--ml-bar);stroke-width:1;stroke-linejoin:round}
.d .fg{fill:var(--ml-accent);stroke:var(--ml-accent);stroke-width:1;stroke-linejoin:round;clip-path:inset(0 100% 0 0);animation:sf 5.8s infinite both;animation-delay:calc(var(--i) * 190ms)}
.d .st{animation:sp 5.8s infinite both;animation-delay:calc(var(--i) * 190ms)}
.d p{font:500 12px/1 var(--ml-font);color:var(--ml-muted)}
@keyframes sf{0%,6%{clip-path:inset(0 100% 0 0);animation-timing-function:var(--ml-ease)}16%,84%{clip-path:inset(0 var(--r) 0 0)}94%,100%{clip-path:inset(0 100% 0 0)}}
@keyframes sp{0%,6%{transform:scale(1)}11%{transform:scale(1.25);animation-timing-function:var(--ml-bounce)}18%,100%{transform:scale(1)}}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const cycle = 5800;
    let e = 0, last = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = Math.min(t - last, 100);
      last = t;
      if (root.dataset.paused) return;
      e = (e + dt) % cycle;
      const p = Math.min(1, Math.max(0, (e - 350) / 1300));
      const q = e > 5300 ? 0 : 1 - Math.pow(1 - p, 3);
      sc.textContent = (4.9 * q).toFixed(1);
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a star-rating block that fills to 4.9. Draw five star SVGs (24 viewBox, rounded joins). Each star is two stacked copies: a pale outline copy as the base and an accent-filled copy on top that is clipped with clip-path: inset(0 100% 0 0), revealed to inset(0 0 0 0) over about 400ms with cubic-bezier(.32,.72,0,1), staggered 190ms per star. The fifth star stops at inset(0 10% 0 0) so 4.9 reads as nearly full (compute the percent as (1 - fraction) * 100 for any rating). Pop each star as it fills with a brief scale(1.25) and a slight-overshoot spring. Tick the big score from 0.0 to 4.9 in sync using requestAnimationFrame and toFixed(1) with tabular-nums. Trigger on scroll-in. Give the group role="img" and aria-label="Rated 4.9 out of 5 from 3,120 reviews".` + END,
});

ML.add({
  id: 'proof-live-count',
  cat: 'proof',
  title: 'Live signup counter',
  sub: 'A live number ticks up with a pulsing dot',
  html: `<div class="cd"><span class="live"><i></i>Live</span><div class="n"><b>1,284</b></div><p>people signed up this week</p><div class="wk"><u style="--h:44%"></u><u style="--h:58%"></u><u style="--h:50%"></u><u style="--h:68%"></u><u style="--h:62%"></u><u style="--h:76%"></u><u class="td" style="--h:100%"></u></div><span class="chip">+2 just now</span></div>`,
  css: C + `
.d .cd{position:relative;width:76%;display:grid;justify-items:center;gap:9px;padding:18px 16px 16px;border-radius:20px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .live{display:inline-flex;align-items:center;gap:6px;font:600 10.5px/1 var(--ml-font);color:var(--ml-accent-ink);padding:5px 9px;border-radius:999px;background:var(--ml-accent-soft)}
.d .live i{position:relative;width:6px;height:6px;border-radius:50%;background:var(--ml-accent)}
.d .live i::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:lv 1.6s ease-out infinite}
.d .n{height:50px;overflow:hidden}
.d .n b{display:block;font:600 46px/50px var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums}
.d .n b.bump{animation:bp 460ms var(--ml-ease)}
.d p{font:500 12px/1 var(--ml-font);color:var(--ml-muted)}
.d .wk{display:flex;align-items:flex-end;gap:5px;height:34px;width:70%;margin-top:4px}
.d .wk u{flex:1;height:var(--h);border-radius:3px;background:var(--ml-accent-line)}
.d .wk u.td{background:var(--ml-grad);transform-origin:bottom;transition:transform 500ms var(--ml-spring)}
.d .chip{position:absolute;right:12px;top:14px;font:600 10.5px/1 var(--ml-font);padding:5px 8px;border-radius:999px;background:#E5F6EA;color:#12803A;opacity:0;transform:translateY(6px) scale(.9);transition:opacity 200ms ease,transform 500ms var(--ml-bounce)}
.d .chip.on{opacity:1;transform:none}
@keyframes lv{0%{transform:scale(1);opacity:.5}100%{transform:scale(3.2);opacity:0}}
@keyframes bp{0%{transform:translateY(40%);opacity:.2}100%{transform:none;opacity:1}}
`,
  run: (root) => {
    const b = root.querySelector('.n b');
    const chip = root.querySelector('.chip');
    const td = root.querySelector('.td');
    const base = 1284;
    let n = base, i = 0;
    const steps = [2, 1, 3, 1, 2, 1];
    td.style.transform = 'scaleY(.5)';
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        if (i >= steps.length) {
          i = 0; n = base;
          b.textContent = n.toLocaleString('en-US');
          td.style.transform = 'scaleY(.5)';
        } else {
          const d = steps[i++];
          n += d;
          b.classList.remove('bump');
          void b.offsetWidth;
          b.textContent = n.toLocaleString('en-US');
          b.classList.add('bump');
          chip.textContent = '+' + d + ' just now';
          chip.classList.add('on');
          setTimeout(() => chip.classList.remove('on'), 800);
          td.style.transform = 'scaleY(' + (0.5 + 0.5 * (i / steps.length)).toFixed(2) + ')';
        }
      }
      setTimeout(tick, i >= steps.length ? 1800 : 1050);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build a live signup counter. Show a small "Live" pill with a dot that pulses (a ::after copy of the dot scaling from 1 to 3.2 while fading out, 1.6s ease-out infinite), a large tabular-nums number (about 46px, tight tracking) and a caption "people signed up this week". Every second or so add one to three to the number: swap the text and play a short entrance on the digits (translateY(40%) with opacity .2 to rest in 460ms with cubic-bezier(.32,.72,0,1)) inside an overflow: hidden wrapper, and pop a green "+2 just now" chip that fades in with a slight-overshoot spring and leaves after 800ms. Optionally add a tiny 7-bar week chart whose last bar grows with scaleY as the count rises. Drive real numbers from your backend over SSE or polling, throttle updates so the page never flickers, and announce changes sparingly with aria-live="off" plus a periodic polite summary.` + END,
});

ML.add({
  id: 'proof-toast',
  cat: 'proof',
  title: 'Activity toast',
  sub: 'Purchase toasts slide in over a page',
  html: `<div class="win"><div class="bar"><i></i><i></i><i></i><u></u></div><div class="pg"><u class="h1"></u><u class="h2"></u><div class="plans"><div></div><div class="hl"></div><div></div></div></div><div class="toast"><span class="av">MR</span><div><b class="nm">Maya from Austin</b><span class="ac">just upgraded to Pro</span></div><em>2 min ago</em></div></div>`,
  css: C + `
.d .win{position:relative;width:88%;height:78%;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:5px;padding:9px 11px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:7px;height:7px;border-radius:50%;background:var(--ml-bar)}
.d .bar u{margin-left:8px;height:9px;width:46%;border-radius:999px;background:var(--ml-bar-2)}
.d .pg{padding:14px 14px;display:grid;gap:9px}
.d .pg u{display:block;border-radius:4px}
.d .h1{width:56%;height:10px;background:var(--ml-bar)}
.d .h2{width:36%;height:7px;background:var(--ml-bar-2)}
.d .plans{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:6px}
.d .plans div{height:62px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .plans .hl{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .toast{position:absolute;left:10px;bottom:10px;display:flex;align-items:center;gap:9px;padding:9px 12px 9px 9px;border-radius:14px;background:var(--ml-bg);box-shadow:0 2px 4px rgba(35,15,10,.08),0 14px 30px rgba(35,15,10,.18);transform:translateX(-130%);opacity:0;transition:transform 640ms var(--ml-bounce),opacity 240ms ease}
.d .toast.show{transform:none;opacity:1}
.d .toast.hide{transform:translateX(-130%);opacity:0;transition:transform 420ms var(--ml-ease),opacity 360ms ease}
.d .toast .av{display:grid;place-items:center;flex:none;width:30px;height:30px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font:600 10.5px/1 var(--ml-font)}
.d .toast div{display:grid;gap:3px}
.d .toast .nm{font:600 11.5px/1 var(--ml-font);white-space:nowrap}
.d .toast .ac{font:500 10.5px/1 var(--ml-font);color:var(--ml-muted);white-space:nowrap}
.d .toast em{align-self:flex-start;font:500 9px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted);white-space:nowrap}
`,
  run: (root) => {
    const t = root.querySelector('.toast');
    const av = t.querySelector('.av');
    const nm = t.querySelector('.nm');
    const ac = t.querySelector('.ac');
    const tm = t.querySelector('em');
    const items = [
      ['MR', 'Maya from Austin', 'just upgraded to Pro', '2 min ago'],
      ['TL', 'Tomas from Lisbon', 'started a free trial', 'just now'],
      ['PS', 'Priya from Toronto', 'booked a demo', '5 min ago'],
    ];
    let k = 0;
    const cycle = () => {
      if (!root.isConnected) return;
      if (root.dataset.paused) { setTimeout(cycle, 500); return; }
      const it = items[k++ % items.length];
      av.textContent = it[0]; nm.textContent = it[1]; ac.textContent = it[2]; tm.textContent = it[3];
      t.classList.remove('hide');
      t.classList.add('show');
      setTimeout(() => { t.classList.remove('show'); t.classList.add('hide'); }, 2300);
      setTimeout(cycle, 3500);
    };
    setTimeout(cycle, 600);
  },
  prompt: `Build a recent-activity toast for a landing page. Place a small card in the bottom-left corner of the viewport (position: fixed on a real site; inset 20px) with a round initials avatar, a bold line "Maya from Austin", a muted line "just upgraded to Pro" and a tiny relative time. Show it by transitioning from transform: translateX(-130%) and opacity 0 to rest with transition: transform 640ms ${BN}, opacity 240ms; hold for about 2.3 seconds; then leave with transform: translateX(-130%) over 420ms cubic-bezier(.32,.72,0,1). Rotate through a list of events from your backend, one at a time, with a gap of 3 to 8 seconds between toasts, and stop after a handful per session. Add a close button, pause on hover, never cover the primary call to action on mobile, and render it inside an aria-live="polite" region. Use only genuine, anonymized data.` + END,
});

ML.add({
  id: 'proof-press',
  cat: 'proof',
  title: 'Press quotes',
  sub: 'Quotes rotate under "As featured in"',
  html: `<div class="cd"><span class="lb">As featured in</span><div class="outs"><span class="o o1 on">The Dispatch</span><span class="o o2">WIRELINE</span><span class="o o3">foldmag</span></div><div class="qt"><div class="q"><p>The calmest way to run a team.</p><em>Sam Okafor, The Dispatch</em></div></div><div class="dots"><i class="on"></i><i></i><i></i></div></div>`,
  css: C + `
.d .cd{width:84%;display:grid;justify-items:center;gap:15px;padding:20px 16px 16px;border-radius:20px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ml-muted)}
.d .outs{display:flex;align-items:center;justify-content:center;gap:13px;white-space:nowrap}
.d .o{color:#B2BCCD;transition:color 400ms ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .o.on{color:var(--ml-ink);transform:scale(1.06)}
.d .o1{font:700 13px/1 var(--ml-font);letter-spacing:-.04em}
.d .o2{font:700 10.5px/1 var(--ml-font);letter-spacing:.1em}
.d .o3{font:600 14px/1 var(--ml-font);letter-spacing:-.03em}
.d .qt{height:70px;display:grid;align-items:center;text-align:center;overflow:hidden}
.d .q{display:grid;gap:9px;justify-items:center;transition:opacity 280ms ease,transform 500ms var(--ml-spring)}
.d .q.out{opacity:0;transform:translateY(-8px)}
.d .q.pre{opacity:0;transform:translateY(10px);transition:none}
.d .q p{font:600 17px/1.2 var(--ml-font);letter-spacing:-.03em}
.d .q em{font:500 11px/1 var(--ml-font);font-style:normal;color:var(--ml-muted)}
.d .dots{display:flex;gap:6px}
.d .dots i{width:6px;height:6px;border-radius:999px;background:var(--ml-bar);transition:transform var(--ml-spring-dur) var(--ml-spring),background 300ms ease}
.d .dots i.on{background:var(--ml-accent);transform:scaleX(2.6)}
`,
  run: (root) => {
    const os = [...root.querySelectorAll('.o')];
    const ds = [...root.querySelectorAll('.dots i')];
    const q = root.querySelector('.q');
    const qp = q.querySelector('p');
    const qe = q.querySelector('em');
    const list = [
      ['The calmest way to run a team.', 'Sam Okafor, The Dispatch'],
      ['Finally, software that gets out of the way.', 'Lena Park, Wireline'],
      ['A small tool with a big effect.', 'Diego Ruiz, Foldmag'],
    ];
    let k = 0;
    const show = (i) => {
      q.classList.add('out');
      os.forEach((o, j) => o.classList.toggle('on', j === i));
      ds.forEach((d, j) => d.classList.toggle('on', j === i));
      setTimeout(() => {
        qp.textContent = list[i][0];
        qe.textContent = list[i][1];
        q.classList.remove('out');
        q.classList.add('pre');
        void q.offsetWidth;
        q.classList.remove('pre');
      }, 300);
    };
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) { k = (k + 1) % list.length; show(k); }
      setTimeout(tick, 2500);
    };
    setTimeout(tick, 2500);
  },
  prompt: `Build an "As featured in" press strip with rotating quotes. Show a small uppercase mono label, a row of three publication wordmarks in a muted color, and below it one short quote with an attribution line and three indicator dots. Rotate every 2.5 seconds: the active outlet's wordmark animates to your ink color and scale(1.06), the current quote fades up and out (opacity 0, translateY(-8px), 280ms), the next quote is set and enters from translateY(10px) with transition: opacity 280ms, transform 500ms ${SP}, and the active dot stretches with scaleX(2.6). Keep the quote container a fixed height so the layout never jumps. Pause on hover and focus, let the dots be buttons that jump to a quote, and wrap each quote in <blockquote> with <cite> so it reads naturally to assistive tech. Only use quotes you are licensed to show and link each to its source.` + END,
});

ML.add({
  id: 'proof-badge',
  cat: 'proof',
  title: 'Award badge',
  sub: 'A rosette badge with a shine and tilt',
  html: (() => {
    const pts = [];
    for (let i = 0; i < 36; i++) {
      const a = (i / 36) * Math.PI * 2;
      const r = i % 2 ? 43 : 48;
      pts.push((50 + Math.cos(a) * r).toFixed(1) + ',' + (50 + Math.sin(a) * r).toFixed(1));
    }
    const P = pts.join(' ');
    return `<div class="sc"><div class="bd"><svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--ml-accent-2)"/><stop offset="1" style="stop-color:var(--ml-accent)"/></linearGradient><linearGradient id="sh" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".7"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><clipPath id="cp"><polygon points="${P}"/></clipPath></defs><polygon points="${P}" fill="url(#bg)"/><circle cx="50" cy="50" r="37" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.2"/><path d="m50 24 3.6 7.4 8.1 1.1-5.9 5.7 1.4 8.1L50 42.4l-7.2 3.9 1.4-8.1-5.9-5.7 8.1-1.1z" fill="#fff"/><text x="50" y="58" text-anchor="middle" fill="#fff" font-size="7.4" font-weight="700" letter-spacing=".9">TOP RATED</text><text x="50" y="72" text-anchor="middle" fill="#fff" font-size="12" font-weight="700" letter-spacing="-.2">2026</text><g clip-path="url(#cp)"><rect class="shine" x="-60" y="-10" width="40" height="120" fill="url(#sh)" transform="skewX(-18)"/></g></svg></div><p><b>Product of the Year</b><span>Voted by 4,000 reviewers</span></p></div>`;
  })(),
  css: C + `
.d .sc{display:grid;justify-items:center;gap:14px;perspective:700px}
.d .bd{width:132px;height:132px;filter:drop-shadow(0 10px 18px rgba(10,80,200,.28));animation:tl 6s ease-in-out infinite}
.d .bd svg{width:100%;height:100%;display:block;overflow:visible}
.d text{font-family:var(--ml-font)}
.d .shine{animation:sw 3.6s var(--ml-ease) infinite}
.d p{display:grid;gap:5px;text-align:center}
.d p b{font:600 14px/1 var(--ml-font);letter-spacing:-.02em}
.d p span{font:500 11.5px/1 var(--ml-font);color:var(--ml-muted)}
@keyframes tl{0%,100%{transform:rotateY(-16deg) rotateX(5deg)}50%{transform:rotateY(16deg) rotateX(-4deg)}}
@keyframes sw{0%,25%{transform:translateX(0) skewX(-18deg)}70%,100%{transform:translateX(230px) skewX(-18deg)}}
`,
  prompt: `Build an award badge with a shine sweep and a subtle tilt. Draw the badge as an inline SVG (viewBox 0 0 100 100): a scalloped rosette polygon with 36 alternating points at radius 48 and 43, filled with your accent gradient, an inner thin white ring, a white star, and two text lines ("TOP RATED" in small caps with letter-spacing, and the year in bold). Define the same polygon as a clipPath and place a skewed rect filled with a horizontal white gradient (transparent, 70% white, transparent) inside a group that uses that clipPath, then animate the rect's transform from translateX(0) skewX(-18deg) to translateX(230px) skewX(-18deg) every 3.6 seconds with cubic-bezier(.32,.72,0,1) so the glint only shows on the badge. Wrap the SVG in a perspective container and sway it between rotateY(-16deg) and rotateY(16deg) over 6s ease-in-out, with a soft drop-shadow. Add a caption below naming the award. Give the SVG role="img" and an aria-label.` + END,
});

ML.add({
  id: 'proof-trust-bar',
  cat: 'proof',
  title: 'Trust bar',
  sub: 'Trust facts light up and tick through',
  html: `<div class="wrap"><b class="hd">Built for teams that cannot go down</b><div class="bar"><i class="ind"></i><div class="cl on"><span class="ico">${ic('<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>')}</span><b class="v">SOC 2</b><span>Type II audited</span></div><div class="cl"><span class="ico">${ic('<path d="M3 12h4l3 8 4-16 3 8h4"/>')}</span><b class="v" data-n="99.99" data-d="2" data-s="%">99.99%</b><span>Uptime, last 12 months</span></div><div class="cl"><span class="ico">${ic('<path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z"/>')}</span><b class="v" data-n="4.9" data-d="1" data-s="/5">4.9/5</b><span>From 3,100 reviews</span></div></div></div>`,
  css: C + `
.d .wrap{width:90%;display:grid;justify-items:center;gap:15px}
.d .hd{font:600 15px/1.2 var(--ml-font);letter-spacing:-.025em;text-align:center;max-width:78%}
.d .bar{position:relative;width:100%;display:grid;grid-template-columns:repeat(3,1fr);padding:5px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .ind{position:absolute;left:5px;top:5px;bottom:5px;width:calc((100% - 10px) / 3);border-radius:14px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform 640ms var(--ml-spring)}
.d .cl{position:relative;display:grid;justify-items:center;align-content:center;gap:6px;padding:13px 4px 12px;text-align:center}
.d .ico{display:grid;place-items:center;width:26px;height:26px;border-radius:9px;background:var(--ml-surface);color:var(--ml-muted);transition:background 300ms ease,color 300ms ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .ico svg{width:14px;height:14px}
.d .cl.on .ico{background:var(--ml-accent);color:#fff;transform:scale(1.12)}
.d .v{font:600 15px/1 var(--ml-font);letter-spacing:-.03em;font-variant-numeric:tabular-nums;color:var(--ml-ink-2);transition:color 300ms ease}
.d .cl.on .v{color:var(--ml-ink)}
.d .cl>span:last-child{font:500 9.5px/1.25 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const cls = [...root.querySelectorAll('.cl')];
    const ind = root.querySelector('.ind');
    let k = 0, tw = 0;
    const tween = (cl) => {
      const v = cl.querySelector('.v');
      if (!v.dataset.n) return;
      const n = parseFloat(v.dataset.n), d = parseInt(v.dataset.d, 10), s = v.dataset.s;
      const st = performance.now();
      cancelAnimationFrame(tw);
      const f = () => {
        if (!root.isConnected) return;
        const p = Math.min(1, (performance.now() - st) / 800);
        v.textContent = (n * (1 - Math.pow(1 - p, 3))).toFixed(d) + s;
        if (p < 1) tw = requestAnimationFrame(f);
      };
      f();
    };
    const go = (i) => {
      k = i;
      ind.style.transform = 'translateX(' + i * 100 + '%)';
      cls.forEach((c, j) => c.classList.toggle('on', j === i));
      tween(cls[i]);
    };
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) go((k + 1) % cls.length);
      setTimeout(tick, 1900);
    };
    setTimeout(tick, 1500);
  },
  prompt: `Build a trust bar: one rounded card holding three equal cells, each with a small icon tile, a bold fact and a one-line label (for example "SOC 2 / Type II certified", "99.99% / Uptime, last 12 months", "4.9/5 / From 3,100 reviews"). Add a highlight pill behind the active cell that slides with transform: translateX(index * 100%) and transition: transform 640ms ${SP}; move to the next cell every 1.9 seconds and loop. When a cell becomes active, flip its icon tile to the solid accent with a small scale(1.12) overshoot spring and tick its number up from zero over 800ms with an ease-out-cubic requestAnimationFrame tween, ending on the real value. Keep every fact visible at all times in the DOM (the highlight only emphasizes), so nothing important is hidden by the animation. Pause on hover and focus-within, let a click select a cell, and use only claims you can document (link each to its audit report or status page).` + END,
});

ML.add({
  id: 'proof-score-ring',
  cat: 'proof',
  title: 'Review score ring',
  sub: 'A tick ring lights up to 4.8 of 5',
  html: `<div class="cd"><div class="rg"><svg viewBox="0 0 120 120" aria-hidden="true"><g class="tk"></g></svg><div class="v"><b>0.0</b><span>out of 5</span></div></div><div class="ft"><span class="stars">${[0, 1, 2, 3, 4].map(() => `<svg viewBox="0 0 24 24"><path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.6l1.2-6.5L2.5 9.5l6.6-.9z"/></svg>`).join('')}</span><b class="rc">0</b><span> reviews</span></div></div>`,
  css: C + `
.d .cd{width:72%;display:grid;justify-items:center;gap:12px;padding:18px 14px 16px;border-radius:22px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .rg{position:relative;width:132px;height:132px}
.d .rg svg{width:100%;height:100%;display:block}
.d line{stroke:var(--ml-bar);stroke-width:2.6;stroke-linecap:round;transition:stroke 160ms ease}
.d line.on{stroke:var(--ml-accent)}
.d line.pk{stroke:var(--ml-accent-2)}
.d .v{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:3px}
.d .v b{font:600 36px/1 var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums}
.d .v span{font:500 10.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .ft{display:flex;align-items:center;gap:6px;font:500 11.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .ft .rc{font-weight:600;color:var(--ml-ink);font-variant-numeric:tabular-nums;margin-left:3px}
.d .stars{display:flex;gap:1px}
.d .stars svg{width:12px;height:12px;fill:var(--ml-accent);stroke:var(--ml-accent);stroke-width:1.2;stroke-linejoin:round}
`,
  run: (root) => {
    const g = root.querySelector('.tk');
    const num = root.querySelector('.v b');
    const rc = root.querySelector('.rc');
    const NS = 'http://www.w3.org/2000/svg';
    const N = 50;
    const lines = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2 - Math.PI / 2;
      const l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', (60 + Math.cos(a) * 46).toFixed(2));
      l.setAttribute('y1', (60 + Math.sin(a) * 46).toFixed(2));
      l.setAttribute('x2', (60 + Math.cos(a) * 55).toFixed(2));
      l.setAttribute('y2', (60 + Math.sin(a) * 55).toFixed(2));
      g.appendChild(l);
      lines.push(l);
    }
    const cycle = 6200;
    let e = 0, last = 0, lit = -1;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = Math.min(t - last, 100);
      last = t;
      if (root.dataset.paused) return;
      e = (e + dt) % cycle;
      const p = Math.min(1, Math.max(0, (e - 300) / 1800));
      const k = e > 5600 ? 0 : 1 - Math.pow(1 - p, 3);
      const n = Math.round(48 * k);
      if (n !== lit) {
        lit = n;
        lines.forEach((l, i) => { l.classList.toggle('on', i < n); l.classList.toggle('pk', i === n - 1 && n < 48); });
      }
      num.textContent = (4.8 * k).toFixed(1);
      rc.textContent = Math.round(2318 * k).toLocaleString('en-US');
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a review score ring made of tick marks. Draw an inline SVG (viewBox 0 0 120 120) with 50 short round-capped lines placed around a circle, from radius 46 to 55, starting at 12 o'clock (angle = i / 50 * 2PI - PI/2). Unlit ticks use a pale tint; light the first 48 (4.8 / 5 = 96%) in your accent color in order over about 1.8 seconds with an ease-out-cubic curve driven from requestAnimationFrame, giving the leading tick a lighter accent so the fill head reads. Put the score in the middle (36px semibold, tabular-nums, "out of 5" beneath) and tick it from 0.0 to 4.8 in sync, with a row of five small filled stars and the review count ticking up to 2,318 underneath. Trigger once on scroll-in. Give the ring role="img" and aria-label="Rated 4.8 out of 5 from 2,318 reviews". This is a score display, not a loading spinner.` + END,
});
})();
