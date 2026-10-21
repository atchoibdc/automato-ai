// Cards: real component demos on --ml-surface.
(() => {
const C = `.d{display:grid;place-items:center;background:var(--ml-surface)}`;
const IMG = `.d .im{position:relative;overflow:hidden;background:linear-gradient(165deg,var(--g1,#FFEFEA),var(--g2,#FFB8A3))}
.d .im::before{content:"";position:absolute;width:20%;aspect-ratio:1;border-radius:50%;right:16%;top:16%;background:rgba(255,255,255,.92)}
.d .im::after{content:"";position:absolute;left:-4%;right:-4%;bottom:0;height:54%;background:var(--g3,#FF8B6B);clip-path:polygon(0 100%,0 64%,20% 30%,38% 60%,58% 14%,80% 54%,100% 34%,100% 100%)}`;
const ic = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const SP = `linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 0.994 77.8%, 0.996 83.3%, 0.998 88.9%, 1 100%)`;
const A11Y = ` Keep it keyboard reachable with a visible :focus-visible state, and under prefers-reduced-motion drop the motion and keep the final static state. Plain HTML, CSS and JS, no libraries.`;

ML.add({
  id: 'cards-tilt',
  cat: 'cards',
  title: '3D tilt',
  sub: 'Card tilts toward the pointer',
  html: `<div class="card"><div class="im"></div><div class="tx"><b>Alpine Retreat</b><span>3 nights from $420</span></div><i class="hl"></i></div>`,
  css: C + IMG + `
.d .card{position:relative;width:68%;aspect-ratio:1.18;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);overflow:hidden;will-change:transform;--mx:50%;--my:50%}
.d .im{position:absolute;left:8px;right:8px;top:8px;height:58%;border-radius:12px}
.d .tx{position:absolute;left:14px;right:14px;bottom:12px;display:grid;gap:4px}
.d .tx b{font:600 14px/1.1 var(--ml-font);letter-spacing:-.02em}
.d .tx span{font:500 11.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .hl{position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at var(--mx) var(--my),rgba(255,255,255,.7),rgba(255,255,255,0) 55%)}
`,
  run: (root) => {
    const card = root.querySelector('.card');
    let user = -9999, px = 0.5, py = 0.5, cx = 0.5, cy = 0.5, t = 0;
    root.addEventListener('pointermove', (e) => {
      const r = root.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width;
      py = (e.clientY - r.top) / r.height;
      user = performance.now();
    });
    const f = () => {
      if (!root.isConnected) return;
      requestAnimationFrame(f);
      if (root.dataset.paused) return;
      t += 0.016;
      if (performance.now() - user > 2500) {
        px = 0.5 + 0.38 * Math.cos(t * 1.1);
        py = 0.5 + 0.38 * Math.sin(t * 1.6);
      }
      cx += (px - cx) * 0.12;
      cy += (py - cy) * 0.12;
      card.style.transform = 'perspective(700px) rotateY(' + ((cx - 0.5) * 30).toFixed(2) + 'deg) rotateX(' + ((0.5 - cy) * 26).toFixed(2) + 'deg) scale(1.02)';
      card.style.setProperty('--mx', (cx * 100).toFixed(1) + '%');
      card.style.setProperty('--my', (cy * 100).toFixed(1) + '%');
    };
    requestAnimationFrame(f);
  },
  prompt: `Build a 3D tilt card. On pointermove over the card, read the pointer position as 0-1 values inside the card, then set transform: perspective(700px) rotateY((x - .5) * 24deg) rotateX((.5 - y) * 20deg) scale(1.02). Smooth it in a requestAnimationFrame loop (current += (target - current) * 0.12) so it feels weighted rather than snapping. Add a soft highlight layer: an absolutely positioned overlay with radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,.7), transparent 55%), where --mx and --my follow the pointer. On pointerleave ease the target back to the center. Animate transform only, add will-change: transform, and give the card a layered soft shadow.` + A11Y + ` Disable the tilt for touch pointers (pointer: coarse).`,
});

ML.add({
  id: 'cards-spotlight-border',
  cat: 'cards',
  title: 'Spotlight border',
  sub: 'A soft light follows the card edge',
  html: `<div class="ring"><div class="card"><span class="tag">${ic('<path d="M12 3v18M3 12h18"/>')}Workspace</span><b>Plan the quarter in one place</b><p>Goals, owners and deadlines stay in sync as the team edits.</p></div></div>`,
  css: C + `
.d .ring{--mx:-50%;--my:-50%;width:72%;padding:1.5px;border-radius:19px;background:radial-gradient(150px circle at var(--mx) var(--my),var(--ml-accent-2),rgba(79,163,255,0) 72%),var(--ml-line)}
.d .card{position:relative;display:grid;gap:9px;padding:18px;border-radius:17.5px;background:radial-gradient(220px circle at var(--mx) var(--my),var(--ml-accent-soft),var(--ml-bg) 70%)}
.d .tag{display:inline-flex;align-items:center;gap:5px;justify-self:start;padding:5px 9px 5px 7px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 10.5px/1 var(--ml-font);color:var(--ml-accent-ink)}
.d .tag svg{width:12px;height:12px}
.d b{font:600 16px/1.2 var(--ml-font);letter-spacing:-.025em}
.d p{font:500 12px/1.45 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const ring = root.querySelector('.ring');
    let user = -9999, px = 0, py = 0, t = 0;
    root.addEventListener('pointermove', (e) => {
      const r = ring.getBoundingClientRect();
      px = e.clientX - r.left;
      py = e.clientY - r.top;
      user = performance.now();
    });
    const f = () => {
      if (!root.isConnected) return;
      requestAnimationFrame(f);
      if (root.dataset.paused) return;
      t += 0.014;
      if (performance.now() - user > 2500) {
        const w = ring.clientWidth, h = ring.clientHeight;
        const a = t % (Math.PI * 2);
        px = w / 2 + Math.cos(a) * w * 0.62;
        py = h / 2 + Math.sin(a) * h * 0.62;
      }
      ring.style.setProperty('--mx', px.toFixed(1) + 'px');
      ring.style.setProperty('--my', py.toFixed(1) + 'px');
    };
    requestAnimationFrame(f);
  },
  prompt: `Build a card with a spotlight border. Wrap the card in a container with 1.5px padding and the same radius plus 1.5px; its background is radial-gradient(150px circle at var(--mx) var(--my), your lighter accent, transparent 72%) layered over a flat hairline color, so the gradient only shows through the 1.5px gap and reads as a light running along the edge. The inner card has a solid background, and a second faint radial-gradient of your accent tint at 220px also follows the pointer inside it. Update --mx and --my from pointermove (pixels relative to the wrapper) inside requestAnimationFrame; when the pointer leaves, fade the light out by moving it off-card. No neon glow: keep the light soft and one hue. Apply to pricing and feature grids.` + A11Y,
});

ML.add({
  id: 'cards-flip',
  cat: 'cards',
  title: 'Flip card',
  sub: 'Front turns to back on a spring',
  html: `<div class="fl"><div class="in"><div class="f"><div class="im"></div><div class="tx"><b>Studio Pass</b><span>Hover for details</span></div></div><div class="b"><b>Studio Pass</b><ul><li>${ic('<path d="m5 12 5 5L20 7"/>')}Unlimited projects</li><li>${ic('<path d="m5 12 5 5L20 7"/>')}Shared libraries</li><li>${ic('<path d="m5 12 5 5L20 7"/>')}Priority support</li></ul><span class="btn">Choose plan</span></div></div></div>`,
  css: C + IMG + `
.d .fl{width:58%;aspect-ratio:.86;perspective:900px}
.d .in{position:relative;width:100%;height:100%;transform-style:preserve-3d;transition:transform 760ms var(--ml-bounce)}
.d .fl:hover .in,.d .fl.is-auto .in{transform:rotateY(180deg)}
.d .f,.d .b{position:absolute;inset:0;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);backface-visibility:hidden;-webkit-backface-visibility:hidden;overflow:hidden}
.d .f .im{position:absolute;left:8px;right:8px;top:8px;bottom:50px;border-radius:12px}
.d .tx{position:absolute;left:14px;right:14px;bottom:12px;display:grid;gap:4px}
.d .tx b{font:600 14px/1.1 var(--ml-font);letter-spacing:-.02em}
.d .tx span{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
.d .b{transform:rotateY(180deg);display:grid;align-content:center;gap:11px;padding:16px;background:linear-gradient(170deg,#fff,var(--ml-accent-soft))}
.d .b b{font:600 15px/1 var(--ml-font);letter-spacing:-.02em}
.d .b ul{list-style:none;display:grid;gap:7px}
.d .b li{display:flex;align-items:center;gap:6px;font:500 11.5px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .b li svg{width:13px;height:13px;color:var(--ml-accent);stroke-width:2.6;flex:none}
.d .btn{justify-self:start;padding:8px 13px;border-radius:999px;background:var(--ml-grad);color:#fff;font:600 11.5px/1 var(--ml-font)}
`,
  run: (root) => {
    const fl = root.querySelector('.fl');
    let hov = false, hold = 0, on = false;
    root.addEventListener('pointerenter', () => { hov = true; fl.classList.remove('is-auto'); });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) {
        on = !on;
        fl.classList.toggle('is-auto', on);
      }
      setTimeout(tick, 2300);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a flip card. A wrapper with perspective: 900px holds an inner element with transform-style: preserve-3d and transition: transform 760ms using a slight-overshoot spring such as ${'linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1 100%)'}. Front and back faces are absolutely positioned with the same radius, backface-visibility: hidden, and the back pre-rotated rotateY(180deg). On hover, focus-within and click/tap, rotate the inner element to rotateY(180deg). Put interactive content (buttons, links) only on the back and make them non-focusable while hidden (use inert or visibility on the face that is turned away). The front shows an image and title, the back a short feature list and a call to action.` + A11Y,
});

ML.add({
  id: 'cards-expand',
  cat: 'cards',
  title: 'Expand to detail',
  sub: 'A tile grows into its full view',
  html: `<div class="g"><div class="t t1"><div class="im"></div><b>Coastline</b></div><div class="t"><div class="im" style="--g1:#EAF2FF;--g2:#B7D3FB;--g3:#FFA88F"></div><b>Harbor</b></div><div class="t"><div class="im" style="--g1:#E3EEFF;--g2:#A8CBFA;--g3:#5E9AEB"></div><b>Summit</b></div><div class="t"><div class="im" style="--g1:#F0F5FD;--g2:#C7DAF5;--g3:#8FB1E6"></div><b>Meadow</b></div></div><div class="sh"><div class="im"></div><div class="bd"><b>Coastline</b><p>Six quiet bays, one slow road. Book a cabin with ocean views.</p><span class="btn">Book a stay</span></div></div>`,
  css: C + IMG + `
.d{display:block}
.d .g{position:absolute;inset:14px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:10px;transition:opacity 220ms ease}
.d .t{position:relative;border-radius:14px;overflow:hidden;background:var(--ml-bg);box-shadow:var(--ml-shadow);cursor:pointer}
.d .t .im{position:absolute;inset:0}
.d .t b{position:absolute;left:10px;bottom:8px;font:600 12px/1 var(--ml-font);color:#fff;text-shadow:0 1px 8px rgba(10,60,140,.5)}
.d .sh{position:absolute;inset:0;background:var(--ml-bg);clip-path:inset(14px calc(50% + 5px) calc(50% + 5px) 14px round 14px);opacity:0;pointer-events:none;transition:clip-path 760ms var(--ml-spring),opacity 160ms ease 0ms}
.d .sh .im{position:absolute;left:0;right:0;top:0;height:44%}
.d .sh .bd{position:absolute;left:18px;right:18px;top:calc(44% + 13px);display:grid;gap:7px;opacity:0;transform:translateY(10px);transition:opacity 300ms ease,transform 400ms var(--ml-spring)}
.d .sh b{font:600 17px/1 var(--ml-font);letter-spacing:-.025em}
.d .sh p{font:500 12px/1.45 var(--ml-font);color:var(--ml-muted)}
.d .btn{justify-self:start;padding:8px 14px;border-radius:999px;background:var(--ml-grad);color:#fff;font:600 11.5px/1 var(--ml-font)}
.d.open .sh{clip-path:inset(0 0 0 0 round 0);opacity:1;pointer-events:auto;transition:clip-path 760ms var(--ml-spring),opacity 80ms ease}
.d.open .sh .bd{opacity:1;transform:none;transition-delay:260ms}
.d.open .g{opacity:0}
`,
  run: (root) => {
    let hov = false, hold = 0;
    const set = (v) => root.classList.toggle('open', v);
    root.querySelector('.t1').addEventListener('click', () => set(true));
    root.querySelector('.sh').addEventListener('click', () => set(false));
    root.addEventListener('pointerenter', () => { hov = true; });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    root.addEventListener('pointerdown', () => { hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) set(!root.classList.contains('open'));
      setTimeout(tick, 2400);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build an expand-to-detail card. A grid of tiles; clicking one opens its detail view, which grows out of that tile's rectangle and shrinks back on close. Technique: render the detail sheet as an absolutely positioned overlay covering the grid, and animate clip-path from inset(<tile top> <tile right> <tile bottom> <tile left> round 14px) to inset(0 round 0) over about 700ms with a critically damped spring ${SP}. Measure the tile with getBoundingClientRect to compute the starting inset. Fade the tile grid out and the sheet's text in with a 250ms delay and a small translateY. Closing runs the same animation in reverse. Move focus into the sheet on open (and return it to the tile on close), close on Escape, and use role="dialog" aria-modal on the sheet. Where supported you may upgrade to the View Transitions API.` + A11Y,
});

ML.add({
  id: 'cards-lift',
  cat: 'cards',
  title: 'Lift on hover',
  sub: 'Card rises, shadow deepens, image zooms',
  html: `<div class="row"><div class="card c1"><div class="im"></div><div class="tx"><b>Daypack</b><span>$48</span></div></div><div class="card c2"><div class="im" style="--g1:#E6F0FF;--g2:#A9CCFB;--g3:#5D9BEE"></div><div class="tx"><b>Trail Pack</b><span>$72</span></div></div></div>`,
  css: C + IMG + `
.d .row{width:82%;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.06),0 4px 10px rgba(35,15,10,.05);padding:7px;transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow var(--ml-spring-dur) var(--ml-spring)}
.d .card .im{aspect-ratio:1.05;border-radius:11px;overflow:hidden}
.d .card .im{transition:transform 0s}
.d .tx{display:flex;justify-content:space-between;align-items:center;padding:9px 5px 4px}
.d .tx b{font:600 12.5px/1 var(--ml-font);letter-spacing:-.015em}
.d .tx span{font:600 11.5px/1 var(--ml-font);color:var(--ml-accent-ink)}
.d .card:hover,.d .card.is-auto{transform:translateY(-12px);box-shadow:0 2px 4px rgba(35,15,10,.06),0 22px 38px rgba(35,15,10,.16)}
.d .card .im::after,.d .card .im::before{transition:transform 700ms var(--ml-ease)}
.d .card:hover .im::after,.d .card.is-auto .im::after{transform:scale(1.14) translateY(-3%)}
.d .card:hover .im::before,.d .card.is-auto .im::before{transform:scale(1.14)}
`,
  run: (root) => {
    const cs = [...root.querySelectorAll('.card')];
    let hov = false, hold = 0, k = 0;
    root.addEventListener('pointerenter', () => { hov = true; cs.forEach((c) => c.classList.remove('is-auto')); });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) {
        cs.forEach((c, i) => c.classList.toggle('is-auto', i === k % 2 && k % 3 !== 2));
        k++;
      }
      setTimeout(tick, 1400);
    };
    setTimeout(tick, 500);
  },
  prompt: `Add a lift-on-hover effect to product cards. On :hover and :focus-within, translateY(-10px) the card and deepen its shadow from a tight 1px/4px pair to a long soft one such as 0 2px 4px rgba(35,15,10,.06), 0 22px 38px rgba(35,15,10,.16). Use transition: transform 587ms ${SP}, box-shadow 587ms with the same curve; the lift must start instantly on pointer-in and settle without overshoot. Inside, the image sits in an overflow: hidden rounded frame and scales to 1.08-1.12 over 700ms with cubic-bezier(.32,.72,0,1) so the zoom lags the lift slightly. Animate transform and box-shadow only; avoid animating margin or top. Make the whole card a single link so the lift also shows on keyboard focus.` + A11Y,
});

ML.add({
  id: 'cards-bento-focus',
  cat: 'cards',
  title: 'Bento focus',
  sub: 'Hover one tile, the rest recede',
  html: `<div class="g"><div class="t a">${ic('<path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/>')}<b>Insights</b><span>Live dashboards</span></div><div class="t b">${ic('<rect x="5" y="3" width="14" height="18" rx="3"/><path d="M11 18h2"/>')}<b>Mobile</b><span>Any screen</span></div><div class="t c">${ic('<path d="M4 7h16M4 12h16M4 17h10"/>')}<b>Docs</b></div><div class="t d">${ic('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>')}<b>Flows</b></div></div>`,
  css: C + `
.d .g{width:88%;height:78%;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:1fr 1fr;gap:9px}
.d .t{display:grid;align-content:end;gap:4px;padding:11px;border-radius:15px;background:var(--ml-bg);box-shadow:var(--ml-shadow);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity 400ms ease,box-shadow var(--ml-spring-dur) var(--ml-spring);cursor:pointer;position:relative}
.d .t svg{position:absolute;left:11px;top:11px;width:19px;height:19px;color:var(--ml-accent)}
.d .t b{font:600 12.5px/1 var(--ml-font);letter-spacing:-.015em}
.d .t span{font:500 10.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .a{grid-column:span 2;background:linear-gradient(150deg,#fff,var(--ml-accent-soft))}
.d .b{grid-row:span 2;background:linear-gradient(170deg,#fff,var(--ml-bar-2))}
.d .d{background:var(--ml-accent-soft)}
.d .g:has(.t:hover) .t:not(:hover),.d .g.f .t:not(.is-auto){opacity:.42;transform:scale(.94)}
.d .t:hover,.d .t.is-auto{transform:scale(1.04);box-shadow:var(--ml-shadow-lg)}
`,
  run: (root) => {
    const g = root.querySelector('.g');
    const ts = [...root.querySelectorAll('.t')];
    let hov = false, hold = 0, k = 0;
    const clear = () => { g.classList.remove('f'); ts.forEach((t) => t.classList.remove('is-auto')); };
    root.addEventListener('pointerenter', () => { hov = true; clear(); });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) {
        clear();
        g.classList.add('f');
        ts[k % ts.length].classList.add('is-auto');
        k++;
      }
      setTimeout(tick, 1500);
    };
    setTimeout(tick, 600);
  },
  prompt: `Build a bento grid with hover focus. Lay out 4-6 tiles in a CSS grid with mixed spans (one wide, one tall). When one tile is hovered or focused, dim and shrink all the others: use the parent selector .grid:has(.tile:hover) .tile:not(:hover) { opacity: .42; transform: scale(.94) } and give the hovered tile transform: scale(1.04) plus a deeper shadow. Transition transform and box-shadow with a critically damped spring ${SP} over about 587ms, and opacity over 400ms. Include :focus-within in the same selectors so keyboard users get the same effect. For browsers without :has(), set a class on the grid from pointerenter/pointerleave instead. Animate transform and opacity only so the grid never reflows.` + A11Y,
});

ML.add({
  id: 'cards-swipe-deck',
  cat: 'cards',
  title: 'Swipe deck',
  sub: 'Top card flies off, next one rises',
  html: `<div class="deck"><div class="c"><div class="im"></div><div class="tx"><b>Lisbon</b><span>4 days, April</span></div></div><div class="c"><div class="im" style="--g1:#E6F0FF;--g2:#A9CCFB;--g3:#5D9BEE"></div><div class="tx"><b>Kyoto</b><span>6 days, October</span></div></div><div class="c"><div class="im" style="--g1:#EEF4FE;--g2:#BDD6F7;--g3:#85ABE0"></div><div class="tx"><b>Oslo</b><span>3 days, March</span></div></div></div>`,
  css: C + IMG + `
.d .deck{position:relative;height:72%;aspect-ratio:.82;touch-action:none;cursor:grab}
.d .c{position:absolute;inset:0;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);overflow:hidden;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity 260ms ease;user-select:none}
.d .c .im{position:absolute;left:8px;right:8px;top:8px;bottom:54px;border-radius:12px}
.d .tx{position:absolute;left:14px;right:14px;bottom:13px;display:grid;gap:5px}
.d .tx b{font:600 15px/1 var(--ml-font);letter-spacing:-.02em}
.d .tx span{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const deck = root.querySelector('.deck');
    const cs = [...root.querySelectorAll('.c')];
    let hov = false, hold = 0, drag = null, busy = false, dirn = 1;
    const lay = () => cs.forEach((c, i) => {
      c.style.zIndex = String(10 - i);
      if (c !== drag) c.style.transform = 'translateY(' + i * 10 + 'px) scale(' + (1 - i * 0.055) + ')';
    });
    const fly = (dir) => {
      if (busy) return;
      busy = true;
      const c = cs.shift();
      drag = null;
      c.style.transition = 'transform 520ms cubic-bezier(.3,.7,.2,1),opacity 520ms ease';
      c.style.transform = 'translate(' + dir * 130 + '%,-6%) rotate(' + dir * 20 + 'deg)';
      c.style.opacity = '0';
      lay();
      setTimeout(() => {
        c.style.transition = 'none';
        cs.push(c);
        c.style.opacity = '0';
        lay();
        void c.offsetWidth;
        c.style.transition = '';
        c.style.opacity = '1';
        busy = false;
      }, 580);
    };
    lay();
    let x0 = 0, y0 = 0, dx = 0;
    deck.addEventListener('pointerdown', (e) => {
      if (busy) return;
      drag = cs[0];
      x0 = e.clientX; y0 = e.clientY; dx = 0;
      drag.style.transition = 'none';
      deck.setPointerCapture(e.pointerId);
      hold = performance.now();
    });
    deck.addEventListener('pointermove', (e) => {
      if (!drag) return;
      dx = e.clientX - x0;
      drag.style.transform = 'translate(' + dx + 'px,' + (e.clientY - y0) * 0.3 + 'px) rotate(' + dx * 0.07 + 'deg)';
    });
    const up = () => {
      if (!drag) return;
      hold = performance.now();
      if (Math.abs(dx) > 50) fly(dx > 0 ? 1 : -1);
      else { const c = drag; drag = null; c.style.transition = ''; lay(); }
    };
    deck.addEventListener('pointerup', up);
    deck.addEventListener('pointercancel', up);
    root.addEventListener('pointerenter', () => { hov = true; });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && !drag && performance.now() - hold > 1500) { fly(dirn); dirn = -dirn; }
      setTimeout(tick, 2100);
    };
    setTimeout(tick, 1000);
  },
  prompt: `Build a swipe card deck. Stack 3-4 absolutely positioned cards; card i gets transform: translateY(i * 10px) scale(1 - i * .055) and z-index descending so the next cards peek from below. Make the top card draggable with Pointer Events (setPointerCapture, touch-action: none): while dragging, set transition: none and transform: translate(dx, dy * .3) rotate(dx * .07deg). On release, if |dx| passes about 50px (or the velocity is high) fly it off with transform: translate(130%, -6%) rotate(20deg) and opacity 0 over 520ms cubic-bezier(.3,.7,.2,1); otherwise spring it back. When it leaves, re-run the layout so every remaining card rises one slot with a spring (${SP}), then recycle the flown card to the back. Add keyboard arrows or buttons for the same swipe so it is not pointer-only.` + A11Y,
});

ML.add({
  id: 'cards-image-zoom',
  cat: 'cards',
  title: 'Image zoom',
  sub: 'Image grows inside a fixed frame',
  html: `<div class="fig"><div class="frame"><div class="im"></div><span class="pill">${ic('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4M11 8v6M8 11h6"/>')}View</span></div><div class="cap"><b>Mountain light</b><span>Photo series, 2026</span></div></div>`,
  css: C + IMG + `
.d .fig{width:70%;display:grid;gap:10px}
.d .frame{position:relative;aspect-ratio:1.28;border-radius:20px;overflow:hidden;box-shadow:var(--ml-shadow);transform:translateZ(0)}
.d .frame .im{position:absolute;inset:0;--g1:#E3EEFF;--g2:#8FBDF8;--g3:#4F8DE0}
.d .frame .im::before,.d .frame .im::after{transition:transform 1000ms var(--ml-ease)}
.d .frame .im::after{transform-origin:50% 100%}
.d .frame:hover .im::after,.d .frame.is-auto .im::after{transform:scale(1.35)}
.d .frame:hover .im::before,.d .frame.is-auto .im::before{transform:scale(1.5) translate(-30%,20%)}
.d .pill{position:absolute;right:10px;top:10px;display:inline-flex;align-items:center;gap:5px;padding:6px 10px 6px 8px;border-radius:999px;background:rgba(255,255,255,.92);font:600 11px/1 var(--ml-font);color:var(--ml-ink);opacity:0;transform:translateY(-6px);transition:opacity 300ms ease,transform 500ms var(--ml-spring)}
.d .pill svg{width:13px;height:13px;color:var(--ml-accent)}
.d .frame:hover .pill,.d .frame.is-auto .pill{opacity:1;transform:none}
.d .cap{display:grid;gap:4px;padding:0 4px}
.d .cap b{font:600 13.5px/1 var(--ml-font);letter-spacing:-.015em}
.d .cap span{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const fr = root.querySelector('.frame');
    let hov = false, hold = 0, on = false;
    root.addEventListener('pointerenter', () => { hov = true; fr.classList.remove('is-auto'); });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) { on = !on; fr.classList.toggle('is-auto', on); }
      setTimeout(tick, 1900);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build an image-zoom-on-hover card. The image sits in a frame with border-radius: 20px and overflow: hidden (add transform: translateZ(0) so the rounded clip holds during the animation). On :hover and :focus-visible, scale the image from 1 to about 1.12-1.2 with transform and transition: transform 1000ms cubic-bezier(.32,.72,0,1), using a transform-origin where the subject is. The frame itself never moves or resizes, only the image inside it. Fade and slide in a small glass "View" pill from the corner at the same time (opacity and translateY, 300ms). Put a caption below the frame. Use a real <img> with object-fit: cover and alt text, and wrap the whole figure in a link.` + A11Y,
});

ML.add({
  id: 'cards-overlay',
  cat: 'cards',
  title: 'Hover overlay',
  sub: 'A caption panel slides up over the image',
  html: `<div class="card"><div class="im"></div><div class="cap"><span class="k">Journal</span><b>Quiet places to work</b><p>Seven studios with great light.</p><span class="more">Read story${ic('<path d="M5 12h14M13 6l6 6-6 6"/>')}</span></div><b class="ttl">Quiet places to work</b></div>`,
  css: C + IMG + `
.d .card{position:relative;width:70%;aspect-ratio:1.12;border-radius:20px;overflow:hidden;box-shadow:var(--ml-shadow-lg);transform:translateZ(0)}
.d .im{position:absolute;inset:0;--g1:#D5E6FF;--g2:#7EB0F5;--g3:#3F7FDB}
.d .ttl{position:absolute;left:14px;bottom:12px;font:600 14px/1 var(--ml-font);letter-spacing:-.02em;color:#fff;text-shadow:0 1px 10px rgba(10,50,120,.5);transition:opacity 250ms ease}
.d .cap{position:absolute;left:8px;right:8px;bottom:8px;display:grid;gap:6px;padding:13px 14px;border-radius:14px;background:rgba(255,255,255,.95);box-shadow:0 8px 24px rgba(16,40,90,.18);transform:translateY(calc(100% + 16px));transition:transform 640ms var(--ml-spring)}
.d .k{font:600 10px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .cap b{font:600 14px/1.15 var(--ml-font);letter-spacing:-.02em}
.d .cap p{font:500 11.5px/1.3 var(--ml-font);color:var(--ml-muted)}
.d .more{display:inline-flex;align-items:center;gap:4px;font:600 11.5px/1 var(--ml-font);color:var(--ml-accent-ink)}
.d .more svg{width:13px;height:13px}
.d .card:hover .cap,.d .card.is-auto .cap{transform:none}
.d .card:hover .ttl,.d .card.is-auto .ttl{opacity:0}
`,
  run: (root) => {
    const card = root.querySelector('.card');
    let hov = false, hold = 0, on = false;
    root.addEventListener('pointerenter', () => { hov = true; card.classList.remove('is-auto'); });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) { on = !on; card.classList.toggle('is-auto', on); }
      setTimeout(tick, 1900);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build an image card with a hover caption panel. The card clips its children (overflow: hidden, border-radius 20px) and shows a full-bleed image with the title in white over a soft shadow. A white panel (radius 14px, inset 8px from the edges) holds a small uppercase kicker, a title, one line of text and a "Read story" link, and rests off-card at transform: translateY(calc(100% + 16px)). On :hover and :focus-within, slide it to translateY(0) with transition: transform 640ms ${SP} and fade the resting title out in 250ms. Animate transform and opacity only. The panel text must be in the DOM (not generated) so screen readers and keyboard users always get it; make the whole card one link so focus-within triggers the same reveal.` + A11Y,
});

ML.add({
  id: 'cards-feature-tabs',
  cat: 'cards',
  title: 'Feature tabs',
  sub: 'Tabs swap the preview with a crossfade',
  html: `<div class="w"><div class="tabs" role="tablist"><button class="tb on" role="tab" data-i="0">${ic('<path d="M3 3v18h18"/><path d="m7 15 4-5 3 3 5-7"/>')}<span>Analytics</span><i></i></button><button class="tb" role="tab" data-i="1">${ic('<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>')}<span>Automate</span><i></i></button><button class="tb" role="tab" data-i="2">${ic('<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.2 2.7-5.5 6-5.5s6 2.3 6 5.5M16 5.5a3 3 0 0 1 0 5.8M18 14.8c1.8.8 3 2.4 3 5.2"/>')}<span>Teams</span><i></i></button></div><div class="pv"><div class="p on"><div class="ch"><u style="--h:40%"></u><u style="--h:62%"></u><u style="--h:48%"></u><u style="--h:84%"></u><u style="--h:70%"></u></div><s></s></div><div class="p"><div class="fl"><em></em><em></em><em></em></div></div><div class="p"><div class="av"><o></o><o></o><o></o><o></o></div><s></s></div></div></div>`,
  css: C + `
.d .w{width:90%;height:68%;display:grid;grid-template-columns:34% 1fr;gap:10px}
.d .tabs{display:grid;align-content:start;gap:6px}
.d .tb{position:relative;display:flex;align-items:center;gap:7px;padding:9px 9px;border:0;border-radius:11px;background:transparent;font:600 11.5px/1 var(--ml-font);color:var(--ml-muted);cursor:pointer;text-align:left;overflow:hidden;transition:background 300ms ease,color 300ms ease}
.d .tb svg{width:15px;height:15px;flex:none}
.d .tb.on{background:var(--ml-bg);color:var(--ml-ink);box-shadow:var(--ml-shadow)}
.d .tb.on svg{color:var(--ml-accent)}
.d .tb i{position:absolute;left:9px;right:9px;bottom:0;height:2px;border-radius:2px;background:var(--ml-accent);transform:scaleX(0);transform-origin:left}
.d .tb.on i{animation:tp 2.6s linear forwards}
@keyframes tp{to{transform:scaleX(1)}}
.d .pv{position:relative;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow);overflow:hidden}
.d .p{position:absolute;inset:0;padding:13px;opacity:0;transform:scale(.97);transition:opacity 450ms ease,transform 600ms var(--ml-spring)}
.d .p.on{opacity:1;transform:none}
.d .ch{height:68%;display:flex;align-items:flex-end;gap:7px}
.d .ch u{flex:1;height:var(--h);border-radius:5px 5px 2px 2px;background:var(--ml-accent-line)}
.d .ch u:nth-child(4){background:var(--ml-grad)}
.d .p s{display:block;margin-top:12px;height:7px;width:60%;border-radius:4px;background:var(--ml-bar)}
.d .fl{display:grid;gap:8px;height:100%;align-content:center}
.d .fl em{display:block;height:20px;border-radius:7px;background:var(--ml-bar-2);position:relative}
.d .fl em:nth-child(2){margin-left:18%;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .fl em:nth-child(3){margin-left:36%}
.d .av{display:grid;grid-template-columns:1fr 1fr;gap:8px;height:62%}
.d .av o{border-radius:50%;background:linear-gradient(150deg,var(--ml-accent-soft),var(--ml-accent-line));justify-self:center;height:100%;aspect-ratio:1}
.d .av o:nth-child(2){background:linear-gradient(150deg,#fff,var(--ml-bar))}
.d .av o:nth-child(3){background:linear-gradient(150deg,var(--ml-bar-2),var(--ml-accent-2))}
`,
  run: (root) => {
    const tbs = [...root.querySelectorAll('.tb')];
    const ps = [...root.querySelectorAll('.p')];
    let k = 0, tm = 0;
    const show = (i) => {
      k = i;
      tbs.forEach((t, j) => { t.classList.remove('on'); if (j === i) { void t.offsetWidth; t.classList.add('on'); } });
      ps.forEach((p, j) => p.classList.toggle('on', j === i));
      clearTimeout(tm);
      tm = setTimeout(next, 2600);
    };
    const next = () => {
      if (!root.isConnected) return;
      if (root.dataset.paused || hov) { tm = setTimeout(next, 400); return; }
      show((k + 1) % tbs.length);
    };
    let hov = false;
    root.addEventListener('pointerenter', () => { hov = true; });
    root.addEventListener('pointerleave', () => { hov = false; clearTimeout(tm); tm = setTimeout(next, 2500); });
    tbs.forEach((t, i) => t.addEventListener('click', () => show(i)));
    tm = setTimeout(next, 2600);
  },
  prompt: `Build feature tabs: a vertical tab list on the left and a preview panel on the right. Tabs are real buttons with role="tab" inside a role="tablist", each with a small icon, a label and a thin progress line along the bottom of the active tab that fills over 2.6s (transform: scaleX(0) to scaleX(1), transform-origin left). When the line completes, advance to the next tab; clicking a tab selects it and restarts the timer; pause autoplay while the pointer is over the component. Previews are absolutely stacked in one container and crossfade: the inactive ones sit at opacity 0 and transform: scale(.97), the active one at opacity 1 and none, with transition: opacity 450ms, transform 600ms ${SP}. Support ArrowUp/ArrowDown to move between tabs, set aria-selected and aria-controls, and mark inactive panels hidden from assistive tech.` + A11Y,
});

ML.add({
  id: 'cards-accordion',
  cat: 'cards',
  title: 'Expanding card',
  sub: 'A card opens to reveal its details',
  html: `<div class="st"><div class="ac" style="--i:0"><div class="hd"><span class="ico">${ic('<path d="M12 20h9M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/>')}</span><b>Design</b><span class="chev">${ic('<path d="m6 9 6 6 6-6"/>')}</span></div><div class="bx"><div><p>Wireframes, systems and prototypes shaped with your team.</p></div></div></div><div class="ac" style="--i:1"><div class="hd"><span class="ico">${ic('<path d="m8 8-5 4 5 4M16 8l5 4-5 4M14 5l-4 14"/>')}</span><b>Develop</b><span class="chev">${ic('<path d="m6 9 6 6 6-6"/>')}</span></div><div class="bx"><div><p>Clean, tested code shipped in small, reviewable releases.</p></div></div></div><div class="ac" style="--i:2"><div class="hd"><span class="ico">${ic('<path d="M5 15c-1 3-1 5-1 5s2 0 5-1M14 10l-4 4M15 4c3 0 5 2 5 5-1 4-5 7-9 8l-4-4c1-4 4-8 8-9z"/>')}</span><b>Launch</b><span class="chev">${ic('<path d="m6 9 6 6 6-6"/>')}</span></div><div class="bx"><div><p>Go live with monitoring and clear handover docs.</p></div></div></div></div>`,
  css: C + `
.d .st{width:80%;display:grid;gap:8px}
.d .ac{border-radius:15px;background:var(--ml-bg);box-shadow:var(--ml-shadow);cursor:pointer;transition:box-shadow var(--ml-spring-dur) var(--ml-spring)}
.d .hd{display:flex;align-items:center;gap:10px;padding:8px 11px}
.d .ico{display:grid;place-items:center;width:27px;height:27px;border-radius:9px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ico svg{width:15px;height:15px}
.d .hd b{flex:1;font:600 13.5px/1 var(--ml-font);letter-spacing:-.02em}
.d .chev svg{width:15px;height:15px;color:var(--ml-muted);display:block;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .bx{display:grid;grid-template-rows:0fr;transition:grid-template-rows 640ms var(--ml-spring)}
.d .bx>div{overflow:hidden;min-height:0;display:grid;gap:8px;padding:0 12px 0 50px}
.d .bx p{font:500 11.5px/1.4 var(--ml-font);color:var(--ml-muted);opacity:0;transition:opacity 300ms ease}
.d .tg{justify-self:start;margin-bottom:0;padding:4px 8px;border-radius:999px;background:var(--ml-accent-soft);font:600 10.5px/1 var(--ml-font);color:var(--ml-accent-ink);opacity:0;transition:opacity 300ms ease}
.d .ac.open{box-shadow:var(--ml-shadow-lg)}
.d .ac.open .bx{grid-template-rows:1fr}
.d .ac.open .bx>div{padding-bottom:11px}
.d .ac.open .bx p,.d .ac.open .tg{opacity:1;transition-delay:140ms}
.d .ac.open .chev svg{transform:rotate(180deg)}
`,
  run: (root) => {
    const acs = [...root.querySelectorAll('.ac')];
    let hov = false, hold = 0, k = 0;
    const open = (i) => acs.forEach((a, j) => a.classList.toggle('open', j === i));
    acs.forEach((a, i) => a.addEventListener('click', () => { open(a.classList.contains('open') ? -1 : i); hold = performance.now(); }));
    root.addEventListener('pointerenter', () => { hov = true; });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    open(0);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) { k = (k + 1) % acs.length; open(k); }
      setTimeout(tick, 2200);
    };
    setTimeout(tick, 2200);
  },
  prompt: `Build expanding cards (accordion). Each card has a header button (icon tile, title, chevron) and a details region. Animate the height without touching height: make the region a grid with grid-template-rows: 0fr, the inner child min-height: 0 and overflow: hidden, and switch to grid-template-rows: 1fr when open, with transition: grid-template-rows 640ms ${SP}. Fade the details text in after a 140ms delay, rotate the chevron 180deg and deepen the card shadow. Only one card is open at a time. Use a real <button> in an <h3> with aria-expanded and aria-controls, the region with role="region" and aria-labelledby, and toggle on Enter and Space. Under prefers-reduced-motion remove the transitions.` + A11Y,
});

ML.add({
  id: 'cards-carousel',
  cat: 'cards',
  title: 'Snap carousel',
  sub: 'Cards glide and snap, next one peeks',
  html: `<div class="cw"><div class="sc"><div class="c"><div class="im"></div><b>Basics</b><span>12 lessons</span></div><div class="c"><div class="im" style="--g1:#E6F0FF;--g2:#A9CCFB;--g3:#5D9BEE"></div><b>Layout</b><span>9 lessons</span></div><div class="c"><div class="im" style="--g1:#EEF4FE;--g2:#BDD6F7;--g3:#85ABE0"></div><b>Motion</b><span>14 lessons</span></div><div class="c"><div class="im" style="--g1:#DDEBFF;--g2:#93BEF8;--g3:#4E8CE0"></div><b>Systems</b><span>8 lessons</span></div></div><div class="dots"><i class="on"></i><i></i><i></i><i></i></div></div>`,
  css: C + IMG + `
.d .cw{width:100%;display:grid;gap:12px}
.d .sc{display:flex;gap:11px;overflow-x:auto;scroll-snap-type:x mandatory;padding:6px 0 14px 14%;scroll-padding-left:14%;scrollbar-width:none}
.d .sc::-webkit-scrollbar{display:none}
.d .c{flex:none;width:62%;scroll-snap-align:start;display:grid;gap:5px;padding:7px 7px 11px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .c .im{aspect-ratio:1.3;border-radius:11px;margin-bottom:5px}
.d .c b{font:600 13px/1 var(--ml-font);letter-spacing:-.02em;padding:0 4px}
.d .c span{font:500 11px/1 var(--ml-font);color:var(--ml-muted);padding:0 4px}
.d .sc::after{content:"";flex:none;width:calc(38% - 11px)}
.d .dots{display:flex;justify-content:center;gap:6px}
.d .dots i{width:6px;height:6px;border-radius:999px;background:var(--ml-bar);transition:transform var(--ml-spring-dur) var(--ml-spring),background 300ms ease}
.d .dots i.on{background:var(--ml-accent);transform:scaleX(2.6)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const cs = [...root.querySelectorAll('.c')];
    const dots = [...root.querySelectorAll('.dots i')];
    let hov = false, hold = 0, k = 0;
    const mark = () => {
      const x = sc.scrollLeft;
      let best = 0, bd = 1e9;
      cs.forEach((c, i) => { const d = Math.abs(c.offsetLeft - sc.offsetLeft - sc.clientWidth * 0.14 - x); if (d < bd) { bd = d; best = i; } });
      dots.forEach((d, i) => d.classList.toggle('on', i === best));
      k = best;
    };
    sc.addEventListener('scroll', mark);
    ['pointerdown', 'wheel', 'touchstart'].forEach((ev) => sc.addEventListener(ev, () => { hold = performance.now(); }, { passive: true }));
    root.addEventListener('pointerenter', () => { hov = true; });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) {
        const n = (k + 1) % cs.length;
        sc.scrollTo({ left: n === 0 ? 0 : cs[n].offsetLeft - sc.offsetLeft - sc.clientWidth * 0.14, behavior: 'smooth' });
      }
      setTimeout(tick, 1900);
    };
    setTimeout(tick, 1000);
  },
  prompt: `Build a snap carousel with a peek of the next card. Use a horizontal flex scroller: overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-left set to your gutter; hide the scrollbar (scrollbar-width: none). Cards are flex: none with width about 62% of the scroller and scroll-snap-align: start, so the next card is always partly visible. Add trailing space so the last card can snap. Track the active card from scrollLeft (or IntersectionObserver with the scroller as root) to drive a row of dots where the active dot stretches with scaleX and a spring. Give previous/next buttons that call scrollBy with behavior: 'smooth', make the scroller focusable with ArrowLeft/ArrowRight, and add role="region" aria-roledescription="carousel". Never drive scroll with per-frame scrollLeft writes, it fights snapping.` + A11Y,
});

ML.add({
  id: 'cards-glare',
  cat: 'cards',
  title: 'Glossy glare',
  sub: 'A reflection sweeps across the card',
  html: `<div class="cd"><div class="top"><b>Arcwise</b><span class="chip"></span></div><div class="num">4821  ••••  ••••  7305</div><div class="bt"><span>Maya Reyes</span><span>09 / 29</span></div><i class="gl"></i></div>`,
  css: C + `
.d .cd{position:relative;width:76%;aspect-ratio:1.6;border-radius:18px;padding:16px 18px;display:grid;align-content:space-between;color:#fff;background:linear-gradient(140deg,#FF4433 0%,#3E93FF 55%,#79B6FF 100%);box-shadow:0 2px 4px rgba(10,60,160,.2),0 22px 38px rgba(10,80,200,.28);overflow:hidden;transform:translateZ(0)}
.d .cd::before{content:"";position:absolute;right:-30%;top:-60%;width:80%;aspect-ratio:1;border-radius:50%;background:rgba(255,255,255,.1)}
.d .top{display:flex;justify-content:space-between;align-items:center;position:relative}
.d .top b{font:600 15px/1 var(--ml-font);letter-spacing:-.03em}
.d .chip{width:30px;height:22px;border-radius:6px;background:linear-gradient(135deg,#FAF6F2,#C9D8EE)}
.d .num{font:500 13px/1 var(--ml-mono);letter-spacing:.06em;position:relative;white-space:nowrap}
.d .bt{display:flex;justify-content:space-between;font:500 11px/1 var(--ml-font);opacity:.9;position:relative}
.d .gl{position:absolute;top:-30%;bottom:-30%;left:0;width:42%;background:linear-gradient(100deg,rgba(255,255,255,0) 0%,rgba(255,255,255,.55) 50%,rgba(255,255,255,0) 100%);transform:translateX(-160%) skewX(-20deg);pointer-events:none}
.d .cd:hover .gl,.d .cd.is-auto .gl{transform:translateX(330%) skewX(-20deg);transition:transform 1100ms var(--ml-ease)}
.d .cd{transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .cd:hover,.d .cd.is-auto{transform:translateZ(0) rotate(-1.5deg) scale(1.02)}
`,
  run: (root) => {
    const cd = root.querySelector('.cd');
    let hov = false, hold = 0;
    root.addEventListener('pointerenter', () => { hov = true; cd.classList.remove('is-auto'); });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) {
        cd.classList.add('is-auto');
        setTimeout(() => cd.classList.remove('is-auto'), 1400);
      }
      setTimeout(tick, 3200);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build a glossy glare effect on a card. The card has overflow: hidden and a rich blue gradient. Add a child element about 42% of the card width and 160% of its height, filled with linear-gradient(100deg, transparent, rgba(255,255,255,.55), transparent), skewed with transform: translateX(-160%) skewX(-20deg). On :hover and :focus-visible, move it across with transform: translateX(330%) skewX(-20deg) over 1100ms using cubic-bezier(.32,.72,0,1); do not transition the return so it resets off-card and is ready for the next hover. Lift the card slightly (rotate(-1.5deg) scale(1.02)) with a spring at the same moment. Animate transform only. Keep the glare on a pseudo-element with pointer-events: none so it never blocks clicks, and keep any card text above it readable.` + A11Y,
});

ML.add({
  id: 'cards-holo',
  cat: 'cards',
  title: 'Holographic foil',
  sub: 'Foil sheen shifts with the pointer',
  html: `<div class="tc"><div class="art"><div class="im"></div></div><div class="nm"><b>Aurora Fox</b><span>HP 120</span></div><div class="ln"></div><p>Light Burst</p><i class="foil"></i><i class="shine"></i></div>`,
  css: C + IMG + `
.d .tc{position:relative;height:88%;aspect-ratio:.72;border-radius:14px;padding:9px;display:grid;grid-template-rows:auto auto 1px auto;gap:7px;align-content:start;background:linear-gradient(160deg,#EAF1FB,#C7D6EC 60%,#E4ECF8);box-shadow:0 2px 4px rgba(16,40,90,.15),0 18px 34px rgba(16,40,90,.22);overflow:hidden;will-change:transform;--px:50%;--py:50%}
.d .art{border-radius:9px;padding:3px;background:linear-gradient(135deg,#fff,#AFC4E3)}
.d .art .im{aspect-ratio:1.12;border-radius:7px;--g1:#FFF0ED;--g2:#FF8B6B;--g3:#2F6FD6}
.d .nm{display:flex;justify-content:space-between;align-items:baseline}
.d .nm b{font:600 13px/1 var(--ml-font);letter-spacing:-.02em;color:#17315E}
.d .nm span{font:600 10px/1 var(--ml-mono);color:#17315E}
.d .ln{background:rgba(23,49,94,.18)}
.d p{font:600 10.5px/1 var(--ml-font);color:#35507F}
.d .foil{position:absolute;inset:0;pointer-events:none;mix-blend-mode:color-dodge;opacity:.85;background:repeating-linear-gradient(115deg,rgba(120,180,255,.5) 0 8px,rgba(255,255,255,.35) 8px 14px,rgba(150,170,220,.45) 14px 22px,rgba(210,230,255,.4) 22px 30px);background-size:240% 240%;background-position:var(--px) var(--py)}
.d .shine{position:absolute;inset:0;pointer-events:none;background:radial-gradient(circle at var(--px) var(--py),rgba(255,255,255,.75),rgba(255,255,255,0) 52%)}
`,
  run: (root) => {
    const tc = root.querySelector('.tc');
    let user = -9999, px = 0.5, py = 0.5, cx = 0.5, cy = 0.5, t = 0;
    root.addEventListener('pointermove', (e) => {
      const r = root.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width;
      py = (e.clientY - r.top) / r.height;
      user = performance.now();
    });
    const f = () => {
      if (!root.isConnected) return;
      requestAnimationFrame(f);
      if (root.dataset.paused) return;
      t += 0.016;
      if (performance.now() - user > 2500) {
        px = 0.5 + 0.34 * Math.cos(t * 0.9);
        py = 0.5 + 0.36 * Math.sin(t * 1.3);
      }
      cx += (px - cx) * 0.1;
      cy += (py - cy) * 0.1;
      tc.style.transform = 'perspective(700px) rotateY(' + ((cx - 0.5) * 24).toFixed(2) + 'deg) rotateX(' + ((0.5 - cy) * 20).toFixed(2) + 'deg)';
      tc.style.setProperty('--px', (cx * 100).toFixed(1) + '%');
      tc.style.setProperty('--py', (cy * 100).toFixed(1) + '%');
    };
    requestAnimationFrame(f);
  },
  prompt: `Build a holographic foil trading card kept in cool silvers and blues. The card is a rounded rectangle with a silver-blue gradient, a framed art window, a name row and a rule. Layer two overlays above the content with pointer-events: none: (1) a foil layer with repeating-linear-gradient(115deg, ...) bands of blue, white and grey-blue, background-size: 240% 240%, mix-blend-mode: color-dodge, opacity around .55, whose background-position is driven by custom properties --px and --py; (2) a radial-gradient(circle at var(--px) var(--py), rgba(255,255,255,.75), transparent 52%) glint. On pointermove set --px and --py (percent within the card) and tilt the card with perspective(700px) rotateY and rotateX up to about 12deg, smoothing every value in a requestAnimationFrame loop (current += (target - current) * .1). Reset gently on pointerleave. Keep colors restrained, no rainbow saturation.` + A11Y + ` Disable tilt on coarse pointers.`,
});

ML.add({
  id: 'cards-shuffle',
  cat: 'cards',
  title: 'Shuffle stack',
  sub: 'Top card slides out and goes to the back',
  html: `<div class="sk"><div class="c"><span class="n">01</span><b>Ideas</b><i></i></div><div class="c"><span class="n">02</span><b>Draft</b><i></i></div><div class="c"><span class="n">03</span><b>Review</b><i></i></div><div class="c"><span class="n">04</span><b>Ship</b><i></i></div></div>`,
  css: C + `
.d .sk{position:relative;width:40%;aspect-ratio:.76}
.d .c{position:absolute;inset:0;border-radius:16px;padding:12px;display:grid;align-content:space-between;background:var(--bgc,#fff);box-shadow:0 1px 2px rgba(35,15,10,.08),0 10px 24px rgba(35,15,10,.12);transition:transform 520ms var(--ml-ease);transform-origin:50% 100%}
.d .c:nth-child(1){--bgc:#fff}.d .c:nth-child(2){--bgc:#F1F6FF}.d .c:nth-child(3){--bgc:#E4EEFE}.d .c:nth-child(4){--bgc:#D6E5FD}
.d .n{font:600 10.5px/1 var(--ml-mono);color:var(--ml-accent-ink);letter-spacing:.08em}
.d .c b{font:600 17px/1 var(--ml-font);letter-spacing:-.03em}
.d .c i{height:34%;border-radius:9px;background:linear-gradient(180deg,rgba(255,68,51,.12),rgba(255,68,51,.04))}
`,
  run: (root) => {
    const cs = [...root.querySelectorAll('.c')];
    let hov = false, hold = 0, busy = false;
    const lay = () => cs.forEach((c, i) => {
      c.style.zIndex = String(10 - i);
      c.style.transform = 'translate(' + i * 12 + 'px,' + -i * 5 + 'px) rotate(' + i * 3.5 + 'deg)';
    });
    const shuffle = () => {
      if (busy) return;
      busy = true;
      const c = cs.shift();
      c.style.zIndex = '20';
      c.style.transform = 'translate(-62%,-4%) rotate(-10deg)';
      setTimeout(() => {
        cs.push(c);
        c.style.zIndex = '0';
        lay();
        c.style.zIndex = '0';
        setTimeout(() => { busy = false; }, 540);
      }, 430);
    };
    lay();
    root.addEventListener('pointerenter', () => { hov = true; });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    root.addEventListener('click', () => { shuffle(); hold = performance.now(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && performance.now() - hold > 1500) shuffle();
      setTimeout(tick, 1700);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a shuffling card stack. Stack 4 absolutely positioned cards fanned with transform: translate(i * 12px, -i * 5px) rotate(i * 3.5deg) and descending z-index, transform-origin bottom center, each a slightly different tint. To shuffle: take the front card, slide it out to the side with transform: translate(-72%, -4%) rotate(-12deg) and raise its z-index above the rest (about 430ms), then drop it to the back of the array, re-apply the fan layout so every card moves up one slot, and set its z-index lowest so it slides in behind the stack. Use transition: transform 520ms cubic-bezier(.32,.72,0,1). Repeat on a timer and on click/tap or Enter. Pause when hovered or offscreen and announce the new top card through an aria-live="polite" region.` + A11Y,
});

ML.add({
  id: 'cards-icon-animate',
  cat: 'cards',
  title: 'Animated feature icons',
  sub: 'Each icon draws or bounces in turn',
  html: `<div class="row"><div class="f" style="--i:0"><span class="tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9" class="ci"/><path d="m8 12.5 3 3 5-6" class="ck" pathLength="1"/></svg></span><b>Verified</b><span>Every account checked</span></div><div class="f" style="--i:1"><span class="tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bolt"><path d="M13 2 4 14h7l-1 8 9-12h-7z"/></svg></span><b>Instant</b><span>Sync in real time</span></div><div class="f" style="--i:2"><span class="tile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></span><b>Alerts</b><span>Never miss a thing</span></div></div>`,
  css: C + `
.d .row{width:92%;display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.d .f{display:grid;justify-items:center;gap:6px;padding:14px 6px 12px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow);text-align:center;animation:fcard 6s infinite;animation-delay:calc(var(--i) * 2s)}
.d .tile{display:grid;place-items:center;width:42px;height:42px;border-radius:13px;background:var(--ml-accent-soft);color:var(--ml-accent);margin-bottom:4px;animation:ftile 6s infinite;animation-delay:calc(var(--i) * 2s)}
.d .tile svg{width:22px;height:22px;overflow:visible}
.d .f b{font:600 12.5px/1 var(--ml-font);letter-spacing:-.02em}
.d .f>span:last-child{font:500 10.5px/1.25 var(--ml-font);color:var(--ml-muted)}
.d .ck{stroke-dasharray:1;stroke-dashoffset:1;animation:fdraw 6s infinite;animation-delay:calc(var(--i) * 2s)}
.d .ci{stroke-dasharray:1;opacity:.35}
.d .bolt{transform-origin:50% 100%;animation:fbolt 6s infinite;animation-delay:calc(var(--i) * 2s)}
.d .bell{transform-origin:50% 12%;animation:fbell 6s infinite;animation-delay:calc(var(--i) * 2s)}
@keyframes fcard{0%,4%{transform:none}10%,28%{transform:translateY(-6px)}38%,100%{transform:none}}
@keyframes ftile{0%,4%{background:var(--ml-accent-soft);color:var(--ml-accent)}10%,28%{background:var(--ml-accent);color:#fff}38%,100%{background:var(--ml-accent-soft);color:var(--ml-accent)}}
@keyframes fdraw{0%,8%{stroke-dashoffset:1}22%,34%{stroke-dashoffset:0}40%,100%{stroke-dashoffset:1}}
@keyframes fbolt{0%,8%{transform:none}12%{transform:translateY(-4px) scale(1.12)}16%{transform:translateY(0) scale(.94)}20%{transform:translateY(-2px) scale(1.06)}26%,100%{transform:none}}
@keyframes fbell{0%,8%{transform:rotate(0)}11%{transform:rotate(18deg)}14%{transform:rotate(-16deg)}17%{transform:rotate(11deg)}20%{transform:rotate(-7deg)}24%,100%{transform:rotate(0)}}
`,
  prompt: `Build a three-feature row where each feature icon animates in turn, looping. Each feature is a small card with a 42px rounded icon tile, a title and one line of text. Use inline SVG icons (24 viewBox, stroke 2, round caps and joins): a circle with a check whose check path has pathLength="1", stroke-dasharray: 1 and animates stroke-dashoffset from 1 to 0 (the draw-on); a lightning bolt that bounces with translateY and a quick scale squash at transform-origin: 50% 100%; and a bell that swings with rotate keyframes around its top, decaying from 18deg to 0. Run one 6s keyframe cycle per feature offset by animation-delay of 0s, 2s and 4s so only one is active at a time; the active card lifts 6px and its tile flips to the solid accent with a white icon. Animate transform, opacity, stroke-dashoffset and color only.` + A11Y,
});

ML.add({
  id: 'cards-progress',
  cat: 'cards',
  title: 'Progress card',
  sub: 'Checklist completes, the bar fills',
  html: `<div class="card"><div class="hd"><span class="ico">${ic('<path d="M4 19.5V5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2"/><path d="M8 7h7"/>')}</span><div><b>Intro to Product Design</b><span>4 lessons</span></div><em class="done">Done</em></div><div class="bar"><div class="tk"><i></i></div><b class="pc">0%</b></div><ul><li><s>${ic('<path d="m5 12 5 5L20 7"/>')}</s>Define the problem</li><li><s>${ic('<path d="m5 12 5 5L20 7"/>')}</s>Sketch three options</li><li><s>${ic('<path d="m5 12 5 5L20 7"/>')}</s>Build a prototype</li><li><s>${ic('<path d="m5 12 5 5L20 7"/>')}</s>Test with five users</li></ul></div>`,
  css: C + `
.d .card{width:80%;display:grid;gap:11px;padding:13px 15px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .hd{display:flex;align-items:center;gap:10px}
.d .hd>div{flex:1;display:grid;gap:4px}
.d .hd>div b{font:600 13px/1.1 var(--ml-font);letter-spacing:-.02em}
.d .hd>div span{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
.d .ico{display:grid;place-items:center;flex:none;width:34px;height:34px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ico svg{width:17px;height:17px}
.d .done{font:600 10.5px/1 var(--ml-font);font-style:normal;padding:5px 9px;border-radius:999px;background:#E5F6EA;color:#12803A;transform:scale(0);opacity:0;transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity 200ms ease}
.d .card.fin .done{transform:scale(1);opacity:1}
.d .bar{display:flex;align-items:center;gap:10px}
.d .tk{flex:1;height:8px;border-radius:999px;background:var(--ml-bar-2);overflow:hidden}
.d .tk i{display:block;height:100%;border-radius:999px;background:var(--ml-grad);transform-origin:left;transform:scaleX(0);transition:transform 700ms var(--ml-spring)}
.d .pc{font:600 12px/1 var(--ml-font);font-variant-numeric:tabular-nums;width:32px;text-align:right}
.d ul{list-style:none;display:grid;gap:8px}
.d li{display:flex;align-items:center;gap:9px;font:500 12px/1 var(--ml-font);color:var(--ml-ink-2);transition:color 300ms ease}
.d li s{display:grid;place-items:center;width:18px;height:18px;border-radius:6px;box-shadow:inset 0 0 0 1.5px var(--ml-bar);background:var(--ml-bg);color:#fff;transition:background 250ms ease,box-shadow 250ms ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d li s svg{width:12px;height:12px;stroke-width:3;opacity:0;transition:opacity 200ms ease}
.d li.ok{color:var(--ml-muted)}
.d li.ok s{background:var(--ml-accent);box-shadow:none;transform:scale(1.08)}
.d li.ok s svg{opacity:1}
`,
  run: (root) => {
    const card = root.querySelector('.card');
    const fill = root.querySelector('.tk i');
    const pc = root.querySelector('.pc');
    const lis = [...root.querySelectorAll('li')];
    let target = 0, shown = 0, step = 0, wait = 600, last = 0;
    const set = (n) => {
      lis.forEach((l, i) => l.classList.toggle('ok', i < n));
      fill.style.transform = 'scaleX(' + n / lis.length + ')';
      target = (n / lis.length) * 100;
      card.classList.toggle('fin', n === lis.length);
    };
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = Math.min(t - last, 100);
      last = t;
      if (root.dataset.paused) return;
      wait -= dt;
      if (wait <= 0) {
        step++;
        if (step > lis.length + 2) { step = 0; set(0); wait = 900; }
        else { set(Math.min(step, lis.length)); wait = step >= lis.length ? 2000 : 900; }
      }
      shown += (target - shown) * Math.min(1, dt / 160);
      pc.textContent = Math.round(shown) + '%';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a course progress card. The header has an icon tile, the course title, the lesson count and a hidden "Done" pill. Below sits a progress row (a pill track with a gradient fill and a percentage) and a checklist of four tasks, each with a rounded-square checkbox. As each task completes, fill its checkbox with the accent color and pop it with a slight-overshoot spring, fade the label to muted, set the bar with transform: scaleX(done / total), transform-origin: left, transition: transform 700ms ${SP}, and tween the percentage text with requestAnimationFrame. When all are checked, pop the green "Done" pill in with transform: scale(0) to scale(1). Make the bar a real role="progressbar" with aria-valuenow, the checklist real checkboxes, and update the percentage in an aria-live="polite" region. Never use a circular spinner for this.` + A11Y,
});

ML.add({
  id: 'cards-notification-stack',
  cat: 'cards',
  title: 'Notification stack',
  sub: 'Stacked alerts fan out, then restack',
  html: `<div class="ph"><div class="clk"><b>9:41</b><span>Tuesday, October 14</span></div><div class="nt"><div class="n" style="--i:0"><span class="ap" style="--bg:#FF4433">${ic('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>')}</span><div><em>Messages</em><b>Maya R.</b><span>Sent you the new designs</span></div></div><div class="n" style="--i:1"><span class="ap" style="--bg:#FF7A3D">${ic('<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 11h18"/>')}</span><div><em>Calendar</em><b>Design review</b><span>Starts in 15 minutes</span></div></div><div class="n" style="--i:2"><span class="ap" style="--bg:#6B8CC7">${ic('<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m3 8 9 6 9-6"/>')}</span><div><em>Mail</em><b>Tomas L.</b><span>Invoice #2047 is ready</span></div></div></div></div>`,
  css: C + `
.d{background:linear-gradient(170deg,#FFEBE8 0%,#A9CBFA 55%,#7FAEF1 100%);display:block}
.d .clk{position:absolute;left:0;right:0;top:11px;display:grid;justify-items:center;gap:3px;color:#fff;text-shadow:0 1px 10px rgba(20,70,160,.3)}
.d .clk b{font:600 30px/1 var(--ml-font);letter-spacing:-.04em}
.d .clk span{font:500 11px/1 var(--ml-font);opacity:.9}
.d .nt{position:absolute;left:5%;right:5%;top:60px}
.d .n{position:absolute;left:0;right:0;top:0;display:flex;align-items:center;gap:10px;height:44px;padding:0 11px;border-radius:15px;background:rgba(255,255,255,.88);box-shadow:0 6px 18px rgba(20,60,140,.16);z-index:calc(5 - var(--i));animation:fan 6.4s infinite}
.d .ap{display:grid;place-items:center;flex:none;width:26px;height:26px;border-radius:8px;background:var(--bg);color:#fff}
.d .ap svg{width:14px;height:14px}
.d .n>div{display:grid;gap:2px;min-width:0}
.d .n em{font:600 9px/1 var(--ml-mono);font-style:normal;letter-spacing:.1em;text-transform:uppercase;color:var(--ml-muted)}
.d .n b{font:600 11.5px/1 var(--ml-font)}
.d .n div span{font:500 10.5px/1 var(--ml-font);color:var(--ml-ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
@keyframes fan{
0%,8%{transform:translateY(calc(var(--i) * 7px)) scale(calc(1 - var(--i) * .05));opacity:calc(1 - var(--i) * .22);animation-timing-function:var(--ml-bounce)}
26%,66%{transform:translateY(calc(var(--i) * 50px)) scale(1);opacity:1;animation-timing-function:var(--ml-ease)}
84%,100%{transform:translateY(calc(var(--i) * 7px)) scale(calc(1 - var(--i) * .05));opacity:calc(1 - var(--i) * .22)}}
`,
  prompt: `Build an iOS-style notification stack on a phone lock screen. Show a large clock, then three notification cards absolutely positioned at the same spot, each a frosted-white rounded rectangle (radius 15px, no backdrop blur needed) with an app icon tile, a tiny uppercase app name, a bold sender and one line of text. Collapsed state: card i uses transform: translateY(i * 7px) scale(1 - i * .05) and lowered opacity so the cards behind peek out underneath, with the newest on top by z-index. Expanded state: translateY(i * 52px) scale(1) so they fan into a list. Toggle between the two on tap, or loop with CSS keyframes (rest, fan out with a slight-overshoot spring, hold, restack with cubic-bezier(.32,.72,0,1)). Animate transform and opacity only. For real use, make the stack a button with aria-expanded and give each card its full text in the DOM.` + A11Y,
});

ML.add({
  id: 'cards-compare',
  cat: 'cards',
  title: 'Before and after',
  sub: 'A slider divider compares two designs',
  html: `<div class="cp"><div class="pane bf"><div class="hdr"><i></i><u></u><u></u></div><div class="bd"><u class="h1"></u><u class="h2"></u><div class="hero"></div><span class="bt"></span></div><em class="lb l1">Before</em></div><div class="pane af"><div class="hdr"><i></i><u></u><u></u></div><div class="bd"><u class="h1"></u><u class="h2"></u><div class="hero im"></div><span class="bt"></span></div><em class="lb l2">After</em></div><div class="hdl"><span class="kn">${ic('<path d="m9 6-6 6 6 6M15 6l6 6-6 6"/>')}</span></div></div>`,
  css: C + IMG + `
.d .cp{position:relative;width:80%;aspect-ratio:1.28;border-radius:18px;overflow:hidden;box-shadow:var(--ml-shadow-lg);touch-action:none;cursor:ew-resize;--p:50%;background:#fff}
.d .pane{position:absolute;inset:0;padding:12px}
.d .bf{background:#ECEEF2}
.d .af{background:#fff;clip-path:inset(0 0 0 var(--p))}
.d .hdr{display:flex;align-items:center;gap:7px;margin-bottom:12px}
.d .hdr i{width:15px;height:15px;border-radius:5px;background:#C9CED8}
.d .hdr u{display:block;width:26px;height:6px;border-radius:3px;background:#D3D8E0}
.d .hdr u:first-of-type{margin-left:auto}
.d .bd{display:grid;gap:7px}
.d .bd u{display:block;border-radius:4px}
.d .h1{width:70%;height:10px;background:#B7BDC9}
.d .h2{width:48%;height:6px;background:#D0D5DE}
.d .hero{height:62px;border-radius:9px;background:#DDE1E8;margin-top:3px}
.d .bt{width:64px;height:20px;border-radius:7px;background:#D3D8E0}
.d .af .hdr i{background:var(--ml-accent)}
.d .af .hdr u{background:var(--ml-bar)}
.d .af .h1{background:var(--ml-ink);height:11px;width:64%}
.d .af .h2{background:var(--ml-bar)}
.d .af .hero{background:none;--g1:#D5E6FF;--g2:#7EB0F5;--g3:#3F7FDB;border-radius:11px}
.d .af .bt{background:var(--ml-grad);border-radius:999px;box-shadow:0 6px 12px rgba(255,68,51,.3)}
.d .lb{position:absolute;top:10px;padding:5px 8px;border-radius:999px;font:600 10px/1 var(--ml-font);font-style:normal;background:rgba(255,255,255,.9);color:var(--ml-ink-2);box-shadow:0 1px 3px rgba(35,15,10,.12)}
.d .l1{left:10px;top:auto;bottom:10px}
.d .l2{right:10px;top:auto;bottom:10px;color:var(--ml-accent-ink)}
.d .hdl{position:absolute;top:0;bottom:0;left:var(--p);width:2px;margin-left:-1px;background:#fff;box-shadow:0 0 0 .5px rgba(35,15,10,.12)}
.d .kn{position:absolute;top:50%;left:50%;width:30px;height:30px;margin:-15px 0 0 -15px;border-radius:50%;background:#fff;box-shadow:var(--ml-shadow-lg);display:grid;place-items:center;color:var(--ml-accent)}
.d .kn svg{width:15px;height:15px}
`,
  run: (root) => {
    const cp = root.querySelector('.cp');
    let user = -9999, p = 0.5, tgt = 0.5, t = 0, drag = false;
    const setP = (e) => {
      const r = cp.getBoundingClientRect();
      tgt = Math.max(0.04, Math.min(0.96, (e.clientX - r.left) / r.width));
      user = performance.now();
    };
    cp.addEventListener('pointerdown', (e) => { drag = true; cp.setPointerCapture(e.pointerId); setP(e); });
    cp.addEventListener('pointermove', (e) => { if (drag) setP(e); });
    cp.addEventListener('pointerup', () => { drag = false; user = performance.now(); });
    const f = () => {
      if (!root.isConnected) return;
      requestAnimationFrame(f);
      if (root.dataset.paused) return;
      t += 0.016;
      if (performance.now() - user > 2500) tgt = 0.5 + 0.38 * Math.sin(t * 0.85);
      p += (tgt - p) * 0.14;
      cp.style.setProperty('--p', (p * 100).toFixed(2) + '%');
    };
    requestAnimationFrame(f);
  },
  prompt: `Build a before/after comparison slider inside a card. Stack two panes absolutely: "before" underneath (muted greys, plain button) and "after" on top (your brand blue, real hero image, rounded button). Clip the top pane with clip-path: inset(0 0 0 var(--p)) so only its right side shows, and place a 2px white divider with a round 30px knob (two chevrons) at left: var(--p). Update --p from pointer events: pointerdown plus setPointerCapture on the card, then pointermove sets --p to the pointer x as a percentage (clamped 4-96%); set touch-action: none and cursor: ew-resize. Smooth the value toward the target in requestAnimationFrame so it feels weighted. Label the sides "Before" and "After" with small pills. For accessibility render the knob as role="slider" with aria-valuenow, aria-label="Comparison position", and move it 5% per ArrowLeft/ArrowRight.` + A11Y,
});

ML.add({
  id: 'cards-drag-reorder',
  cat: 'cards',
  title: 'Drag to reorder',
  sub: 'One row lifts, the others make room',
  html: `<div class="ls"><div class="li"><span class="gr">${ic('<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>')}</span><b>Design review</b><em>Mon</em></div><div class="li"><span class="gr">${ic('<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>')}</span><b>Write release notes</b><em>Tue</em></div><div class="li"><span class="gr">${ic('<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>')}</span><b>Update pricing page</b><em>Wed</em></div><div class="li"><span class="gr">${ic('<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>')}</span><b>Ship version 2.1</b><em>Fri</em></div></div>`,
  css: C + `
.d .ls{position:relative;width:80%;height:181px}
.d .li{position:absolute;left:0;right:0;top:0;height:40px;display:flex;align-items:center;gap:9px;padding:0 12px;border-radius:13px;background:var(--ml-bg);box-shadow:var(--ml-shadow);cursor:grab;touch-action:none;user-select:none;transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow 300ms ease}
.d .gr svg{width:14px;height:14px;color:var(--ml-muted);display:block}
.d .li b{flex:1;font:600 12px/1 var(--ml-font);letter-spacing:-.015em}
.d .li em{font:600 10.5px/1 var(--ml-mono);font-style:normal;padding:4px 7px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .li.up{box-shadow:0 2px 4px rgba(35,15,10,.08),0 16px 30px rgba(35,15,10,.2);cursor:grabbing}
.d .li.drag{transition:box-shadow 300ms ease}
`,
  run: (root) => {
    const rows = [...root.querySelectorAll('.li')];
    const S = 47;
    const order = rows.slice();
    let drag = null, hov = false, hold = 0, busy = false, seq = 0;
    const place = () => order.forEach((r, i) => { if (r !== drag) { r.style.transform = 'translateY(' + i * S + 'px)'; r.style.zIndex = '1'; } });
    const move = (r, y) => {
      y = Math.max(0, Math.min((order.length - 1) * S, y));
      r.style.transform = 'translateY(' + y + 'px) scale(1.04)';
      r.style.zIndex = '5';
      const to = Math.round(y / S);
      const from = order.indexOf(r);
      if (to !== from) { order.splice(from, 1); order.splice(to, 0, r); place(); }
    };
    place();
    rows.forEach((r) => {
      let off = 0;
      r.addEventListener('pointerdown', (e) => {
        if (busy) return;
        drag = r; hold = performance.now();
        off = e.clientY - order.indexOf(r) * S;
        r.classList.add('up', 'drag');
        r.setPointerCapture(e.pointerId);
        move(r, order.indexOf(r) * S);
      });
      r.addEventListener('pointermove', (e) => { if (drag === r && !busy) move(r, e.clientY - off); });
      const end = () => {
        if (drag !== r || busy) return;
        drag = null; hold = performance.now();
        r.classList.remove('up', 'drag');
        place();
      };
      r.addEventListener('pointerup', end);
      r.addEventListener('pointercancel', end);
    });
    root.addEventListener('pointerenter', () => { hov = true; });
    root.addEventListener('pointerleave', () => { hov = false; hold = performance.now(); });
    const moves = [[0, 2], [3, 0], [1, 3], [2, 1]];
    const auto = () => {
      const [a, b] = moves[seq++ % moves.length];
      const r = order[a];
      busy = true; drag = r;
      r.classList.add('up', 'drag');
      let e = 0, last = 0, started = false;
      const loop = (t) => {
        if (!root.isConnected) return;
        const dt = Math.min(t - last, 60);
        last = t;
        if (!root.dataset.paused) e += started ? dt : 0;
        started = true;
        const k = Math.min(1, Math.max(0, (e - 350) / 750));
        const ease = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
        move(r, (a + (b - a) * ease) * S);
        if (e < 1500) requestAnimationFrame(loop);
        else { drag = null; busy = false; r.classList.remove('up', 'drag'); place(); }
      };
      requestAnimationFrame(loop);
    };
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hov && !drag && !busy && performance.now() - hold > 1500) auto();
      setTimeout(tick, 3000);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a drag-to-reorder list of cards. Give the list position: relative and a fixed row height; every row is absolutely positioned and placed with transform: translateY(slot * (rowHeight + gap)), with transition: transform 587ms ${SP} so rows glide into place. On pointerdown (setPointerCapture, touch-action: none) lift the row: add a deeper shadow and scale(1.04), turn its transform transition off, and make it follow the pointer (translateY = pointerY - grabOffset, clamped to the list). Compute the target slot with Math.round(y / step); when it changes, splice the row to that slot in your order array and re-place every other row so they slide out of the way. On release drop the row into its slot and restore transitions. Add keyboard support (Space to pick up, arrows to move, Space to drop) with an aria-live announcement of the new position.` + A11Y,
});

ML.add({
  id: 'cards-chart',
  cat: 'cards',
  title: 'Chart card',
  sub: 'A metric card whose chart rises in',
  html: `<div class="card"><div class="top"><span class="lb">Revenue</span><b class="up">${ic('<path d="M7 17 17 7M8 7h9v9"/>')}12.4%</b></div><div class="num">$48.2k</div><div class="plot">${[34, 48, 40, 58, 52, 66, 46, 60, 72, 55, 68, 80, 62, 74, 92, 70, 78, 66, 84, 76].map((h, i) => `<i style="--h:${h}%;--i:${i}"${i === 14 ? ' class="hi"' : ''}></i>`).join('')}<em class="tip">$3.1k</em></div><div class="ax"><span>Jan</span><span>Jun</span><span>Dec</span></div></div>`,
  css: C + `
.d .card{width:82%;display:grid;gap:8px;padding:15px 16px 13px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .lb{font:500 10.5px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}
.d .up{display:inline-flex;align-items:center;gap:3px;font:600 11px/1 var(--ml-font);color:#12803A;padding:4px 8px 4px 6px;border-radius:999px;background:#E5F6EA}
.d .up svg{width:12px;height:12px;stroke-width:2.6}
.d .num{font:600 30px/1 var(--ml-font);letter-spacing:-.045em}
.d .plot{position:relative;height:84px;margin-top:20px;display:flex;align-items:flex-end;gap:3.5px}
.d .plot i{flex:1;height:var(--h);border-radius:3px 3px 2px 2px;background:var(--ml-accent-line);transform-origin:bottom;transform:scaleY(0);animation:rise 5.6s infinite both;animation-delay:calc(var(--i) * 38ms)}
.d .plot i.hi{background:var(--ml-grad)}
.d .tip{position:absolute;left:calc(14 * 5% + 2.5%);bottom:calc(92% + 6px);transform:translateX(-50%) scale(0);transform-origin:50% 100%;padding:5px 8px;border-radius:8px;background:var(--ml-ink);color:#fff;font:600 10.5px/1 var(--ml-font);font-style:normal;animation:tip 5.6s infinite both}
.d .ax{display:flex;justify-content:space-between;font:500 9.5px/1 var(--ml-mono);color:var(--ml-muted)}
@keyframes rise{0%,6%{transform:scaleY(0);animation-timing-function:var(--ml-bounce)}30%,86%{transform:scaleY(1);animation-timing-function:ease-in}98%,100%{transform:scaleY(0)}}
@keyframes tip{0%,38%{transform:translateX(-50%) scale(0);animation-timing-function:var(--ml-bounce)}48%,84%{transform:translateX(-50%) scale(1)}92%,100%{transform:translateX(-50%) scale(0)}}
`,
  prompt: `Build a metric card with a mini chart that animates in. The card has a small uppercase label, a green change pill with an arrow, a large tabular number (30px, tight tracking), then a row of about 20 thin rounded columns (flex, align-items: flex-end, 3-4px gaps) whose heights come from a custom property (height: var(--h)). Animate each column from transform: scaleY(0) to scaleY(1) with transform-origin: bottom using a slight-overshoot spring such as ${'linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%)'}, delaying each by 38ms times its index so it ripples left to right. Color the peak column with your accent gradient and the rest a tint; then pop a dark tooltip bubble above the peak with transform: scale(0) to scale(1). Trigger on scroll-in with an IntersectionObserver. Expose the data as a visually hidden table and show the final chart under prefers-reduced-motion.` + A11Y,
});

ML.add({
  id: 'cards-timeline',
  cat: 'cards',
  title: 'Timeline cards',
  sub: 'Milestones appear along a drawn line',
  html: `<div class="tl"><div class="ln"><i></i></div><div class="it" style="--i:0"><span class="dt"></span><div class="cd"><em>Jan 2026</em><b>Kickoff</b></div></div><div class="it" style="--i:1"><span class="dt"></span><div class="cd"><em>Mar 2026</em><b>First prototype</b></div></div><div class="it" style="--i:2"><span class="dt"></span><div class="cd"><em>Jun 2026</em><b>Private beta</b></div></div><div class="it" style="--i:3"><span class="dt"></span><div class="cd"><em>Sep 2026</em><b>Public launch</b></div></div></div>`,
  css: C + `
.d .tl{position:relative;width:76%;display:grid;gap:7px;padding-left:28px}
.d .ln{position:absolute;left:8px;top:14px;bottom:14px;width:2px;border-radius:2px;background:var(--ml-bar-2);overflow:hidden}
.d .ln i{display:block;height:100%;background:var(--ml-grad);transform-origin:top;transform:scaleY(0);animation:lnd 7.2s infinite both}
.d .it{position:relative}
.d .dt{position:absolute;left:-26px;top:50%;width:14px;height:14px;margin-top:-7px;border-radius:50%;background:var(--ml-bg);border:3px solid var(--ml-accent);transform:scale(0);animation:dot 7.2s infinite both;animation-delay:calc(var(--i) * 760ms)}
.d .cd{display:grid;gap:5px;padding:8px 12px;border-radius:13px;background:var(--ml-bg);box-shadow:var(--ml-shadow);opacity:0;animation:itm 7.2s infinite both;animation-delay:calc(var(--i) * 760ms)}
.d .cd em{font:600 9.5px/1 var(--ml-mono);font-style:normal;letter-spacing:.1em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .cd b{font:600 13px/1 var(--ml-font);letter-spacing:-.02em}
@keyframes lnd{0%,4%{transform:scaleY(0);animation-timing-function:linear}48%,88%{transform:scaleY(1)}96%,100%{transform:scaleY(1);opacity:0}}
@keyframes dot{0%,6%{transform:scale(0);animation-timing-function:var(--ml-bounce)}14%,86%{transform:scale(1)}94%,100%{transform:scale(0)}}
@keyframes itm{0%,6%{opacity:0;transform:translateX(14px);animation-timing-function:var(--ml-ease)}16%,86%{opacity:1;transform:none}94%,100%{opacity:0;transform:none}}
`,
  prompt: `Build a vertical timeline where milestone cards appear one after another. A 2px track line runs down the left; a gradient fill inside it is drawn with transform: scaleY(0) to scaleY(1), transform-origin: top, over about 3 seconds. Each milestone is a row with a 14px ring dot on the line and a white card (radius 13px, soft shadow) holding a small uppercase mono date and a bold title. Stagger milestones by about 760ms: the dot pops from scale(0) with a slight-overshoot spring and the card fades in while sliding from translateX(14px) with cubic-bezier(.32,.72,0,1). Trigger on scroll-in with an IntersectionObserver, or tie the reveal to scroll position by computing progress from the section's bounding box and setting the line's scaleY and a --reveal count. Use an ordered list (<ol>) with <time> elements so the sequence is semantic.` + A11Y,
});

ML.add({
  id: 'cards-glass',
  cat: 'cards',
  title: 'Glass card',
  sub: 'Frosted card over drifting blue blobs',
  html: `<i class="bl b1"></i><i class="bl b2"></i><i class="bl b3"></i><div class="gc"><div class="top"><span class="lb">Total balance</span><span class="pill">Savings</span></div><div class="num">$12,480</div><div class="row"><span>${ic('<path d="M7 17 17 7M8 7h9v9"/>')}+$320 this week</span><span class="cn">**** 4821</span></div></div>`,
  css: C + `
.d{background:linear-gradient(160deg,#EEF5FF,#D3E4FD)}
.d .bl{position:absolute;border-radius:50%;width:62%;aspect-ratio:1;will-change:transform}
.d .b1{left:-8%;top:-18%;background:radial-gradient(circle,#FF7A3D 0 30%,rgba(79,163,255,0) 68%);animation:d1 11s ease-in-out infinite alternate}
.d .b2{right:-14%;bottom:-24%;background:radial-gradient(circle,#FF4433 0 28%,rgba(255,68,51,0) 66%);animation:d2 13s ease-in-out infinite alternate}
.d .b3{left:30%;top:36%;width:42%;background:radial-gradient(circle,#FFB8A3 0 30%,rgba(156,198,255,0) 68%);animation:d3 9s ease-in-out infinite alternate}
.d .gc{position:relative;width:74%;display:grid;gap:12px;padding:16px 17px;border-radius:20px;background:rgba(255,255,255,.42);border:1px solid rgba(255,255,255,.75);box-shadow:0 1px 1px rgba(255,255,255,.6) inset,0 18px 40px rgba(20,70,160,.18);-webkit-backdrop-filter:blur(14px) saturate(1.5);backdrop-filter:blur(14px) saturate(1.5)}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .lb{font:500 10.5px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-ink-2)}
.d .pill{font:600 10.5px/1 var(--ml-font);padding:5px 9px;border-radius:999px;background:rgba(255,255,255,.7);color:var(--ml-accent-ink)}
.d .num{font:600 34px/1 var(--ml-font);letter-spacing:-.05em}
.d .row{display:flex;justify-content:space-between;align-items:center;font:600 11px/1 var(--ml-font);color:var(--ml-accent-ink)}
.d .row span:first-child{display:inline-flex;align-items:center;gap:4px}
.d .row svg{width:13px;height:13px;stroke-width:2.6}
.d .cn{font:500 11px/1 var(--ml-mono);color:var(--ml-ink-2)}
@keyframes d1{to{transform:translate(48%,36%) scale(1.15)}}
@keyframes d2{to{transform:translate(-52%,-34%) scale(.9)}}
@keyframes d3{to{transform:translate(-60%,-24%) scale(1.25)}}
`,
  prompt: `Build a frosted glass card over slowly drifting blue blobs. Behind the card, place three large absolutely positioned circles filled with soft radial-gradient(circle, color 0 30%, transparent 68%) (no filter: blur needed) in different blues; animate each with a long ease-in-out alternate keyframe (9-13 seconds) that moves transform: translate(...) scale(...) only, so they drift continuously and out of sync. The card on top is static: background: rgba(255,255,255,.42); border: 1px solid rgba(255,255,255,.75); backdrop-filter: blur(14px) saturate(1.5); radius 20px; a faint inner top highlight and a soft long shadow. Keep the card small so the backdrop blur stays cheap, add a solid-color fallback with @supports not (backdrop-filter: blur(1px)), and ensure text contrast stays above 4.5:1 against the lightest and darkest blob.` + A11Y,
});

ML.add({
  id: 'cards-morph',
  cat: 'cards',
  title: 'Shape morph',
  sub: 'Pill becomes square, then a card',
  html: `<div class="m"><span class="a">${ic('<path d="M6 4v16l14-8z"/>')}Play</span><span class="b">${ic('<path d="M9 18V5l11-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="17" cy="16" r="3"/>')}</span><span class="c"><em>Now playing</em><b>Morning Light</b><u></u><u></u></span></div>`,
  css: C + `
.d .m{position:absolute;inset:0;background:var(--ml-grad);color:#fff;clip-path:inset(40% 22% 40% 22% round 40px);animation:mor 7.6s infinite;will-change:clip-path}
.d .m>span{position:absolute;inset:0;display:grid;place-items:center;opacity:0}
.d .a{grid-auto-flow:column;gap:7px;justify-content:center;font:600 14px/1 var(--ml-font);letter-spacing:-.01em;animation:ca 7.6s infinite}
.d .a svg{width:15px;height:15px;fill:#fff;stroke-width:2}
.d .b{animation:cb 7.6s infinite}
.d .b svg{width:44px;height:44px;stroke-width:1.8}
.d .c{place-items:center start;align-content:center;gap:9px;padding:0 20%;animation:cc 7.6s infinite}
.d .c em{font:600 9.5px/1 var(--ml-mono);font-style:normal;letter-spacing:.12em;text-transform:uppercase;opacity:.85}
.d .c b{font:600 21px/1 var(--ml-font);letter-spacing:-.03em}
.d .c u{display:block;height:6px;border-radius:3px;background:rgba(255,255,255,.55);width:100%}
.d .c u+u{width:62%}
@keyframes mor{
0%,12%{clip-path:inset(40% 22% 40% 22% round 40px);animation-timing-function:cubic-bezier(.34,1.35,.5,1)}
30%,42%{clip-path:inset(17% 26.5% 17% 26.5% round 40px);animation-timing-function:cubic-bezier(.34,1.3,.5,1)}
62%,86%{clip-path:inset(12% 12% 12% 12% round 20px);animation-timing-function:cubic-bezier(.5,0,.2,1)}
100%{clip-path:inset(40% 22% 40% 22% round 40px)}}
@keyframes ca{0%,10%{opacity:1}16%,90%{opacity:0}98%,100%{opacity:1}}
@keyframes cb{0%,18%{opacity:0;transform:scale(.7)}30%,42%{opacity:1;transform:none}50%,100%{opacity:0;transform:scale(.7)}}
@keyframes cc{0%,52%{opacity:0;transform:translateY(8px)}64%,84%{opacity:1;transform:none}92%,100%{opacity:0}}
`,
  prompt: `Build a shape-morphing element that turns from a pill into a square into a card, using clip-path rather than animating width or height. Make one full-size layer filled with your accent gradient and animate clip-path with inset() values that interpolate smoothly: pill inset(40% 22% 40% 22% round 40px), rounded square inset(17% 26.5% 17% 26.5% round 40px) (compute the side insets from the box aspect ratio so it is truly square), card inset(12% 12% 12% 12% round 20px). Use a slight-overshoot easing such as cubic-bezier(.34,1.35,.5,1) for the expand steps and ease for the return, and cycle on a 7-8 second loop with long holds. Put three content layers inside (a "Play" label, an icon, and a title with two skeleton lines) and cross-fade them with opacity and a small translateY as each shape lands. Trigger by click or hover in a real product (play button morphs to a mini player), and respect prefers-reduced-motion by switching shapes without interpolation.` + A11Y,
});
})();
