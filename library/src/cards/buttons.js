(() => {
// Buttons and CTAs. Reference card for interactive effects: the real :active state works, and an
// autoplay class plays the same state on a timer while nobody is hovering the stage.

ML.add({
  id: 'buttons-press',
  cat: 'buttons',
  title: 'Press and settle',
  sub: 'Shrinks on press, springs back',
  html: `<button class="btn" type="button">Get started</button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{appearance:none;border:0;cursor:pointer;padding:14px 28px;border-radius:999px;font-size:15px;font-weight:600;letter-spacing:-.01em;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.25),0 10px 24px rgba(255,68,51,.24);transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow var(--ml-spring-dur) var(--ml-spring)}
.d .btn:active,.d .btn.is-auto{transform:scale(.94);box-shadow:0 1px 2px rgba(255,68,51,.25),0 4px 10px rgba(255,68,51,.2);transition-duration:90ms;transition-timing-function:ease-out}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const btn = root.querySelector('.btn');
    let hover = false;
    root.addEventListener('pointerenter', () => (hover = true));
    root.addEventListener('pointerleave', () => (hover = false));
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        btn.classList.add('is-auto');
        setTimeout(() => btn.classList.remove('is-auto'), 140);
      }
      setTimeout(tick, 1600);
    };
    setTimeout(tick, 500);
  },
  prompt: `Add Apple-style press feedback to the primary buttons on my site. The feedback must start on pointer-down, not on click: use the :active state to scale the button to 0.94 and tighten its shadow, with a fast 90ms ease-out transition so it reacts instantly. On release, let it settle back to scale(1) with a critically damped spring curve (no overshoot): transition: transform 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.990 72.2%, 0.994 77.8%, 0.996 83.3%, 0.998 88.9%, 1 100%). Animate transform and box-shadow only. Keep a visible :focus-visible outline for keyboard users. Do not put the scale on an element that already has a translate transform; put it on an inner wrapper instead. Plain CSS, no libraries.`,
});

ML.add({
  id: 'buttons-shine',
  cat: 'buttons',
  title: 'Shine sweep',
  sub: 'A light glint crosses the button',
  html: `<button class="btn" type="button"><span class="t">Upgrade to Pro</span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{position:relative;overflow:hidden;appearance:none;border:0;cursor:pointer;padding:15px 32px;border-radius:14px;font-size:15px;font-weight:600;letter-spacing:-.01em;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.25),0 10px 24px rgba(255,68,51,.22);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .btn .t{position:relative;z-index:1}
.d .btn::after{content:"";position:absolute;top:-20%;bottom:-20%;left:0;width:46%;background:linear-gradient(100deg,transparent 0%,rgba(255,255,255,.55) 50%,transparent 100%);transform:translateX(-140%) skewX(-18deg)}
.d .btn:hover::after,.d .btn.is-auto::after{transform:translateX(330%) skewX(-18deg);transition:transform 950ms var(--ml-ease)}
.d .btn:active{transform:scale(.96);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const btn = root.querySelector('.btn');
    let hover=false;root.addEventListener('pointerenter',()=>(hover=true));root.addEventListener('pointerleave',()=>(hover=false));
    const tick=()=>{if(!root.isConnected)return;if(!root.dataset.paused&&!hover){btn.classList.add('is-auto');setTimeout(()=>btn.classList.remove('is-auto'),1300);}setTimeout(tick,2900);};
    setTimeout(tick,500);
  },
  prompt: `Add a shine sweep to my primary call-to-action button. Give the button position: relative and overflow: hidden. Add a ::after pseudo-element, about 45% of the button width and taller than the button, filled with linear-gradient(100deg, transparent, rgba(255,255,255,.55), transparent) and skewed with transform: translateX(-140%) skewX(-18deg). On :hover and :focus-visible, move it across with transform: translateX(330%) skewX(-18deg) over about 900ms using cubic-bezier(.32,.72,0,1). Do not transition the return, so the glint snaps back off-screen and waits for the next hover. Keep the label above the glint with position: relative; z-index: 1. Animate transform only. Add a quick 90ms scale(.96) on :active and a visible focus-visible outline. Respect prefers-reduced-motion by disabling the sweep. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'buttons-magnetic',
  cat: 'buttons',
  title: 'Magnetic button',
  sub: 'Button and label pull to the pointer',
  html: `<div class="zone"><button class="btn" type="button"><span class="lb">Get in touch</span></button><i class="cur"></i></div>`,
  css: `
.d{background:var(--ml-surface)}
.d .zone{position:absolute;inset:0;display:grid;place-items:center}
.d .btn{appearance:none;border:0;cursor:pointer;padding:16px 34px;border-radius:999px;font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ml-ink);background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);will-change:transform}
.d .lb{display:block;will-change:transform}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .cur{position:absolute;left:0;top:0;width:20px;height:20px;margin:-10px 0 0 -10px;border-radius:50%;background:var(--ml-accent-soft);border:1.5px solid var(--ml-accent-2);pointer-events:none;transition:opacity .25s ease;opacity:1}
.d .zone.real .cur{opacity:0}
`,
  run: (root) => {
    const zone = root.querySelector('.zone');
    const btn = root.querySelector('.btn');
    const lb = root.querySelector('.lb');
    const cur = root.querySelector('.cur');
    let real = false, px = 0, py = 0, t = 0;
    const s = { x: 0, y: 0, vx: 0, vy: 0 };
    zone.addEventListener('pointerenter', () => { real = true; zone.classList.add('real'); });
    zone.addEventListener('pointerleave', () => { real = false; zone.classList.remove('real'); });
    zone.addEventListener('pointermove', (e) => {
      const r = zone.getBoundingClientRect();
      px = e.clientX - r.left;
      py = e.clientY - r.top;
    });
    const frame = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        const w = zone.clientWidth, h = zone.clientHeight, cx = w / 2, cy = h / 2;
        if (!real) {
          t += 0.016;
          px = cx + w * 0.4 * Math.cos(t);
          py = cy + h * 0.26 * Math.sin(t);
        }
        const dx = px - cx, dy = py - cy;
        const near = Math.hypot(dx, dy) < Math.max(80, w * 0.3);
        const tx = near ? dx * 0.38 : 0, ty = near ? dy * 0.38 : 0;
        s.vx += (tx - s.x) * 0.14; s.vy += (ty - s.y) * 0.14;
        s.vx *= 0.76; s.vy *= 0.76;
        s.x += s.vx; s.y += s.vy;
        btn.style.transform = 'translate(' + s.x.toFixed(2) + 'px,' + s.y.toFixed(2) + 'px)';
        lb.style.transform = 'translate(' + (s.x * 0.55).toFixed(2) + 'px,' + (s.y * 0.55).toFixed(2) + 'px)';
        cur.style.transform = 'translate(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px)';
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  },
  prompt: `Build a magnetic button for my hero call-to-action. On pointermove inside a zone that extends about 80px beyond the button, compute the pointer offset from the button center and translate the button by roughly 35 percent of that offset, and translate the inner label by a smaller 55 percent of the button movement so the text trails slightly behind. Drive it from a requestAnimationFrame loop with a light spring (velocity += (target - position) * 0.14, velocity *= 0.76) so it settles with a tiny overshoot. When the pointer leaves the zone set the target back to 0 and let the spring pull it home. Animate transform only, with will-change: transform. Disable the effect on touch devices (pointer: coarse) and under prefers-reduced-motion. Keep a visible :focus-visible outline. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-arrow',
  cat: 'buttons',
  title: 'Arrow slide',
  sub: 'One arrow leaves, the next arrives',
  html: `<button class="btn" type="button"><span class="t">See pricing</span><span class="ic"><svg class="a1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><svg class="a2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{display:inline-flex;align-items:center;gap:12px;appearance:none;border:0;cursor:pointer;padding:8px 8px 8px 24px;border-radius:999px;font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ml-ink);background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .ic{position:relative;overflow:hidden;width:36px;height:36px;border-radius:50%;background:var(--ml-accent);color:#fff}
.d .ic svg{position:absolute;left:50%;top:50%;width:16px;height:16px;margin:-8px 0 0 -8px;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .a2{transform:translateX(-30px)}
.d .a1{transition-delay:0ms}
.d .a2{transition-delay:50ms}
.d .btn:hover .a1,.d .btn.is-auto .a1{transform:translateX(30px)}
.d .btn:hover .a2,.d .btn.is-auto .a2{transform:translateX(0)}
.d .btn:active{transform:scale(.96);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const btn = root.querySelector('.btn');
    let hover=false;root.addEventListener('pointerenter',()=>(hover=true));root.addEventListener('pointerleave',()=>(hover=false));
    const tick=()=>{if(!root.isConnected)return;if(!root.dataset.paused&&!hover){btn.classList.add('is-auto');setTimeout(()=>btn.classList.remove('is-auto'),1300);}setTimeout(tick,2900);};
    setTimeout(tick,500);
  },
  prompt: `Build an arrow-slide button for navigation CTAs. Put the label and a round icon chip inside one pill button. The chip has overflow: hidden and holds two identical arrow SVGs stacked in the same spot. The first arrow rests at translateX(0), the second waits off to the left at translateX(-30px). On :hover and :focus-visible, slide the first arrow to translateX(30px) and the second to translateX(0), with the second delayed by 50ms, using a critically damped spring such as cubic-bezier(.32,.72,0,1) at 550ms. Animate transform only. Add scale(.96) on :active with a 90ms transition. Use aria-hidden on the arrows so the label alone is read. Flip the direction for RTL layouts. Disable the slide under prefers-reduced-motion and show a plain arrow instead. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'buttons-fill',
  cat: 'buttons',
  title: 'Fill from edge',
  sub: 'Color floods in, text inverts',
  html: `<button class="btn" type="button"><span class="t">Browse templates</span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{position:relative;overflow:hidden;appearance:none;cursor:pointer;padding:14px 28px;border-radius:12px;border:1.5px solid var(--ml-accent);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ml-accent-ink);background:transparent;transition:color 380ms var(--ml-ease)}
.d .btn::before{content:"";position:absolute;inset:0;background:var(--ml-accent);transform:scaleX(0);transform-origin:left center;transition:transform 520ms var(--ml-ease)}
.d .btn .t{position:relative;z-index:1}
.d .btn:hover,.d .btn.is-auto{color:#fff}
.d .btn:hover::before,.d .btn.is-auto::before{transform:scaleX(1)}
.d .btn:active{transform:scale(.97)}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const btn = root.querySelector('.btn');
    let hover=false;root.addEventListener('pointerenter',()=>(hover=true));root.addEventListener('pointerleave',()=>(hover=false));
    const tick=()=>{if(!root.isConnected)return;if(!root.dataset.paused&&!hover){btn.classList.add('is-auto');setTimeout(()=>btn.classList.remove('is-auto'),1300);}setTimeout(tick,2900);};
    setTimeout(tick,500);
  },
  prompt: `Build an outline button that fills with color from the left edge on hover. Give the button position: relative, overflow: hidden, a 1.5px accent border, accent text and a transparent background. Add a ::before pseudo-element covering the button with your accent color, set to transform: scaleX(0) and transform-origin: left center. On :hover and :focus-visible, set it to scaleX(1) over about 500ms with cubic-bezier(.32,.72,0,1), and at the same time transition the text color to white over 380ms. On pointer leave the fill should retract toward the right: set transform-origin: right center on the non-hover state so it exits the way it did not enter. Keep the label above the fill with position: relative; z-index: 1. Animate transform and color only. Keep a visible focus ring and honor prefers-reduced-motion. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'buttons-text-roll',
  cat: 'buttons',
  title: 'Text roll',
  sub: 'Label rolls up, a copy rolls in',
  html: `<button class="btn" type="button"><span class="win"><span class="in"><span class="l">Subscribe</span><span class="l">Subscribe</span></span></span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{appearance:none;cursor:pointer;padding:0 30px;height:48px;border-radius:999px;border:1px solid var(--ml-accent-line);font-size:16px;font-weight:600;letter-spacing:-.01em;color:var(--ml-accent-ink);background:var(--ml-accent-soft);transition:background-color 400ms var(--ml-ease),color 400ms var(--ml-ease),transform var(--ml-spring-dur) var(--ml-spring)}
.d .win{display:block;overflow:hidden;height:20px}
.d .in{display:flex;flex-direction:column;transition:transform 520ms var(--ml-ease)}
.d .l{display:block;height:20px;line-height:20px}
.d .btn:hover,.d .btn.is-auto{background:var(--ml-accent);color:#fff}
.d .btn:hover .in,.d .btn.is-auto .in{transform:translateY(-20px)}
.d .btn:active{transform:scale(.96);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const btn = root.querySelector('.btn');
    let hover=false;root.addEventListener('pointerenter',()=>(hover=true));root.addEventListener('pointerleave',()=>(hover=false));
    const tick=()=>{if(!root.isConnected)return;if(!root.dataset.paused&&!hover){btn.classList.add('is-auto');setTimeout(()=>btn.classList.remove('is-auto'),1300);}setTimeout(tick,2900);};
    setTimeout(tick,500);
  },
  prompt: `Build a text-roll hover for buttons. Wrap the label in a window element with a fixed line height (for example 20px) and overflow: hidden. Inside, stack two identical copies of the label in a column. On :hover and :focus-visible translate the column up by exactly one line height so the first copy rolls out through the top while the identical copy rolls in from below. Use transform: translateY over about 500ms with cubic-bezier(.32,.72,0,1). Optionally transition the background and text color in the same beat. Set aria-hidden on the second copy so screen readers announce the label once, and keep the button width driven by the text so nothing shifts. Animate transform only. Honor prefers-reduced-motion by skipping the roll and changing color only. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'buttons-loading-success',
  cat: 'buttons',
  title: 'Loading to success',
  sub: 'Pill shrinks, dots, then a check',
  html: `<div class="w"><button class="btn" type="button" data-s="idle"><i class="g"></i><span class="lab">Place order</span><span class="dots"><b></b><b></b><b></b></span><svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></button></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .w{filter:drop-shadow(0 10px 14px rgba(255,68,51,.26))}
.d .btn{position:relative;display:grid;place-items:center;overflow:hidden;width:178px;height:48px;appearance:none;border:0;cursor:pointer;border-radius:999px;font-size:15px;font-weight:600;letter-spacing:-.01em;color:#fff;background:var(--ml-grad);clip-path:inset(0 0 round 999px);transition:clip-path 560ms var(--ml-ease)}
.d .btn>*{grid-area:1/1}
.d .g{position:absolute;inset:0;background:#1DB954;opacity:0;transition:opacity 300ms ease}
.d .lab,.d .dots,.d .ck{position:relative;transition:opacity 220ms ease,transform 420ms var(--ml-ease)}
.d .dots{display:flex;gap:5px;opacity:0;transform:scale(.6)}
.d .dots b{width:7px;height:7px;border-radius:50%;background:#fff;animation:ml-dot 900ms ease-in-out infinite}
.d .dots b:nth-child(2){animation-delay:120ms}
.d .dots b:nth-child(3){animation-delay:240ms}
.d .ck{width:22px;height:22px;opacity:0;transform:scale(.5)}
.d .ck path{stroke-dasharray:24;stroke-dashoffset:24;transition:stroke-dashoffset 380ms var(--ml-ease) 120ms}
.d .btn[data-s="load"],.d .btn[data-s="done"]{clip-path:inset(0 65px round 999px)}
.d .btn[data-s="load"] .lab,.d .btn[data-s="done"] .lab{opacity:0;transform:scale(.8)}
.d .btn[data-s="load"] .dots{opacity:1;transform:scale(1)}
.d .btn[data-s="done"] .g{opacity:1}
.d .btn[data-s="done"] .ck{opacity:1;transform:scale(1)}
.d .btn[data-s="done"] .ck path{stroke-dashoffset:0}
.d .btn:focus-visible{outline:2px solid #fff;outline-offset:-5px}
@keyframes ml-dot{0%,100%{transform:translateY(0);opacity:.55}40%{transform:translateY(-5px);opacity:1}}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let hover=false,userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    root.addEventListener('pointerenter',()=>(hover=true));
    root.addEventListener('pointerleave',()=>(hover=false));
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&!hover&&performance.now()>userUntil;
    const btn = root.querySelector('.btn');
    let busy = false;
    const go = async () => {
      if (busy) return;
      busy = true;
      btn.dataset.s = 'load';
      await wait(1700);
      btn.dataset.s = 'done';
      await wait(1700);
      btn.dataset.s = 'idle';
      await wait(700);
      busy = false;
    };
    btn.addEventListener('click', () => { touch(); go(); });
    (async () => {
      await wait(500);
      while (root.isConnected) {
        if (idle()) await go();
        await wait(1200);
      }
    })();
  },
  prompt: `Build a submit button that morphs through loading and success states, with no spinner. Keep the button at a fixed width and use clip-path: inset(0 Xpx round 999px) on it, where X is half the width minus half the height, so the pill shrinks into a circle while its text is hidden. Use three states set through a data attribute: idle (label visible), loading (clip-path animates to the circle, label fades out, three small dots bounce with staggered keyframes on transform and opacity), done (green background layer fades in, an SVG check draws with stroke-dasharray and stroke-dashoffset over about 380ms). Use cubic-bezier(.32,.72,0,1) at 560ms for the morph. Put the shadow on a wrapper using filter: drop-shadow so it follows the clipped shape. Set aria-busy during loading and announce the result in an aria-live region. Return to idle after a short pause. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-ripple',
  cat: 'buttons',
  title: 'Soft ripple',
  sub: 'A ripple grows from the press point',
  html: `<button class="btn" type="button"><span class="t">Book a demo</span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{position:relative;overflow:hidden;appearance:none;border:0;cursor:pointer;width:200px;padding:18px 0;border-radius:16px;font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ml-ink);background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);-webkit-tap-highlight-color:transparent}
.d .btn .t{position:relative;z-index:1}
.d .rp{position:absolute;width:150px;height:150px;margin:-75px 0 0 -75px;border-radius:50%;background:radial-gradient(circle,rgba(255,68,51,.3) 0%,rgba(255,68,51,.16) 55%,rgba(255,68,51,0) 72%);transform:scale(0);opacity:1;pointer-events:none;animation:ml-rp 800ms var(--ml-ease) forwards}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
@keyframes ml-rp{to{transform:scale(2.6);opacity:0}}
`,
  run: (root) => {
    const btn = root.querySelector('.btn');
    const spawn = (x, y) => {
      const s = document.createElement('span');
      s.className = 'rp';
      s.style.left = x + 'px';
      s.style.top = y + 'px';
      btn.appendChild(s);
      setTimeout(() => s.remove(), 850);
    };
    btn.addEventListener('pointerdown', (e) => {
      const r = btn.getBoundingClientRect();
      spawn(e.clientX - r.left, e.clientY - r.top);
    });
    let hover = false, i = 0;
    root.addEventListener('pointerenter', () => (hover = true));
    root.addEventListener('pointerleave', () => (hover = false));
    const spots = [[0.25, 0.5], [0.72, 0.4], [0.5, 0.65], [0.85, 0.6]];
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        const p = spots[i++ % spots.length];
        spawn(btn.offsetWidth * p[0], btn.offsetHeight * p[1]);
      }
      setTimeout(tick, 1500);
    };
    setTimeout(tick, 500);
  },
  prompt: `Add a soft ripple to my buttons. Give the button position: relative and overflow: hidden. On pointerdown, read the press point with getBoundingClientRect (clientX minus rect.left, clientY minus rect.top), then append an absolutely positioned span there, about 150px wide and centered on the point with negative margins, filled with a radial-gradient of your accent color fading from about 30 percent alpha to transparent. Animate it with CSS keyframes from transform: scale(0), opacity: 1 to transform: scale(2.6), opacity: 0 over 800ms using cubic-bezier(.32,.72,0,1), then remove the span on animationend. Keep the label above with z-index: 1. For keyboard activation, spawn the ripple from the center. Use pointer events so touch works. Animate transform and opacity only. Skip the ripple under prefers-reduced-motion. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-gradient-border',
  cat: 'buttons',
  title: 'Moving border',
  sub: 'A blue arc travels the outline',
  html: `<button class="btn" type="button"><i class="sp"></i><span class="t">Try it free</span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{position:relative;overflow:hidden;isolation:isolate;appearance:none;border:0;cursor:pointer;padding:16px 38px;border-radius:999px;font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ml-ink);background:var(--ml-accent-line);box-shadow:var(--ml-shadow)}
.d .sp{position:absolute;left:50%;top:50%;width:300px;height:300px;margin:-150px 0 0 -150px;background:conic-gradient(from 0deg,rgba(79,163,255,0) 0%,rgba(79,163,255,0) 58%,var(--ml-accent-2) 82%,var(--ml-accent) 100%);animation:ml-spin 3.2s linear infinite;z-index:-2}
.d .btn::after{content:"";position:absolute;inset:2px;border-radius:999px;background:var(--ml-bg);z-index:-1;transition:background-color .3s ease}
.d .btn:hover::after{background:var(--ml-accent-soft)}
.d .btn:active{transform:scale(.97)}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
@keyframes ml-spin{to{transform:rotate(360deg)}}
`,
  prompt: `Build a button with a moving gradient border, soft and without any neon glow. Make the button position: relative, overflow: hidden, isolation: isolate, with a border-radius of 999px and a hairline-colored background. Inside it place a square element much larger than the button (about 300px), centered, filled with conic-gradient(from 0deg, transparent 0 58%, your light accent 82%, your accent 100%), and spin it with a CSS keyframe animation of transform: rotate(360deg) over about 3 seconds, linear, infinite. Cover its middle with a ::after at inset: 2px using the button's solid background so only a 2px ring shows, and sit the label above. Because it animates only transform, it stays on the compositor. Add a gentle tint on :hover, a visible focus-visible outline, and stop the spin under prefers-reduced-motion. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'buttons-icon-swap',
  cat: 'buttons',
  title: 'Icon swap',
  sub: 'Copy icon springs into a check',
  html: `<div class="row"><span class="url">brewedops.co/invite</span><button class="btn" type="button" aria-label="Copy link"><svg class="i1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2.5"/><path d="M5 15V6.5A2.5 2.5 0 0 1 7.5 4H15"/></svg><svg class="i2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></button></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .row{display:flex;align-items:center;gap:6px;padding:7px 7px 7px 18px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .url{font:500 13px/1 var(--ml-mono);color:var(--ml-ink-2)}
.d .btn{position:relative;width:42px;height:42px;appearance:none;border:0;cursor:pointer;border-radius:10px;color:var(--ml-ink-2);background:var(--ml-surface);transition:background-color 300ms ease,color 300ms ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .btn svg{position:absolute;left:50%;top:50%;width:20px;height:20px;margin:-10px 0 0 -10px;transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity 200ms ease}
.d .i2{opacity:0;transform:scale(.3) rotate(-60deg)}
.d .btn.on{background:var(--ml-accent);color:#fff}
.d .btn.on .i1{opacity:0;transform:scale(.3) rotate(60deg)}
.d .btn.on .i2{opacity:1;transform:scale(1) rotate(0)}
.d .btn:active{transform:scale(.92);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let hover=false,userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    root.addEventListener('pointerenter',()=>(hover=true));
    root.addEventListener('pointerleave',()=>(hover=false));
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&!hover&&performance.now()>userUntil;
    const btn = root.querySelector('.btn');
    const flash = async () => {
      btn.classList.add('on');
      await wait(1300);
      btn.classList.remove('on');
    };
    btn.addEventListener('click', () => { touch(); flash(); });
    (async () => {
      await wait(600);
      while (root.isConnected) {
        if (idle()) await flash();
        await wait(1800);
      }
    })();
  },
  prompt: `Build a copy-to-clipboard icon button with an icon swap. Stack two SVG icons (copy and check) in the same box with position: absolute and a shared center. The check starts at opacity: 0; transform: scale(.3) rotate(-60deg). On click, call navigator.clipboard.writeText, add an is-copied class for about 1.3 seconds, and during that class send the copy icon to scale(.3) rotate(60deg) with opacity 0 while the check springs to scale(1) rotate(0) and opacity 1. Use a slightly overshooting spring such as linear() easing that peaks near 1.02 at about 600ms, because this is a pop moment. Also tint the button background to your accent with white icon color. Add aria-label that changes to Copied and announce it through an aria-live region. Honor prefers-reduced-motion by crossfading only. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-expand',
  cat: 'buttons',
  title: 'Expand on hover',
  sub: 'Round icon buttons reveal labels',
  html: `<div class="row">
<button class="pill" type="button"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V4M8 8l4-4 4 4M5 13v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg></span><span class="lab"><span>Share</span></span></button>
<button class="pill" type="button"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4h10a1 1 0 0 1 1 1v15l-6-4-6 4V5a1 1 0 0 1 1-1z"/></svg></span><span class="lab"><span>Save</span></span></button>
<button class="pill" type="button"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-5 4v-4H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/></svg></span><span class="lab"><span>Reply</span></span></button>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .row{display:flex;gap:8px;align-items:center}
.d .pill{display:grid;grid-template-columns:auto 0fr;align-items:center;appearance:none;border:0;cursor:pointer;height:42px;border-radius:999px;color:var(--ml-ink);background:var(--ml-bg);box-shadow:var(--ml-shadow);font-size:13px;font-weight:600;transition:grid-template-columns 520ms var(--ml-ease),background-color 300ms ease,color 300ms ease}
.d .ico{display:grid;place-items:center;width:42px;height:42px}
.d .ico svg{width:18px;height:18px}
.d .lab{overflow:hidden;min-width:0}
.d .lab span{display:block;white-space:nowrap;padding-right:16px;opacity:0;transform:translateX(-6px);transition:opacity 300ms ease,transform 520ms var(--ml-ease)}
.d .pill:hover,.d .pill.is-auto{grid-template-columns:auto 1fr;background:var(--ml-accent);color:#fff}
.d .pill:hover .lab span,.d .pill.is-auto .lab span{opacity:1;transform:none}
.d .pill:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const pills = [...root.querySelectorAll('.pill')];
    let hover = false, i = 0;
    root.addEventListener('pointerenter', () => (hover = true));
    root.addEventListener('pointerleave', () => (hover = false));
    const tick = () => {
      if (!root.isConnected) return;
      pills.forEach((p) => p.classList.remove('is-auto'));
      if (!root.dataset.paused && !hover) pills[i++ % pills.length].classList.add('is-auto');
      setTimeout(tick, 1500);
    };
    setTimeout(tick, 500);
  },
  prompt: `Build icon-only round buttons that expand to reveal their label on hover, for a floating action bar. Each button is display: grid with grid-template-columns: auto 0fr, a 42px round icon cell and a label wrapper with overflow: hidden and min-width: 0. On :hover and :focus-visible switch to grid-template-columns: auto 1fr, which animates smoothly in modern browsers, over about 500ms with cubic-bezier(.32,.72,0,1). The label text has white-space: nowrap, right padding, and fades and slides from translateX(-6px) to 0 at the same time. Tint the expanded button with your accent color. Keep aria-label on the button so the name is available when collapsed, and keep targets at least 42px. On touch devices expand the focused button instead of hovering. Honor prefers-reduced-motion. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'buttons-switch',
  cat: 'buttons',
  title: 'iOS switch',
  sub: 'Knob springs across, track tints',
  html: `<div class="box"><button class="sw" type="button" role="switch" aria-checked="false" aria-label="Wi-Fi"><i class="kn"></i></button><span class="cap">Wi-Fi <b>Off</b></span></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .box{display:flex;flex-direction:column;align-items:center;gap:16px}
.d .sw{position:relative;width:84px;height:50px;appearance:none;border:0;cursor:pointer;border-radius:999px;background:#D1D6E0;transition:background-color 360ms var(--ml-ease)}
.d .kn{position:absolute;left:3px;top:3px;width:44px;height:44px;border-radius:999px;background:#fff;box-shadow:0 2px 4px rgba(35,15,10,.2),0 6px 12px rgba(35,15,10,.14);transform-origin:left center;transition:transform var(--ml-bounce-dur) var(--ml-bounce),width 200ms var(--ml-ease)}
.d .sw.on{background:var(--ml-accent)}
.d .sw.on .kn{transform:translateX(34px)}
.d .sw:active .kn{width:54px}
.d .sw.on:active .kn{transform:translateX(24px)}
.d .cap{font-size:15px;font-weight:600;color:var(--ml-ink)}
.d .cap b{margin-left:4px;font-weight:600;color:var(--ml-muted);transition:color 300ms ease}
.d .sw.on + .cap b{color:var(--ml-accent)}
.d .sw:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let hover=false,userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    root.addEventListener('pointerenter',()=>(hover=true));
    root.addEventListener('pointerleave',()=>(hover=false));
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&!hover&&performance.now()>userUntil;
    const sw = root.querySelector('.sw');
    const label = root.querySelector('.cap b');
    const set = (on) => {
      sw.classList.toggle('on', on);
      sw.setAttribute('aria-checked', String(on));
      label.textContent = on ? 'On' : 'Off';
    };
    sw.addEventListener('click', () => set(!sw.classList.contains('on')));
    (async () => {
      await wait(700);
      while (root.isConnected) {
        if (idle()) set(!sw.classList.contains('on'));
        await wait(1900);
      }
    })();
  },
  prompt: `Build an iOS-style switch as a real button with role="switch" and aria-checked. Track: 84px by 50px, fully rounded, neutral grey when off, your accent color when on, with the background transitioning over 360ms. Knob: a white 44px circle inset 3px with a layered soft shadow. When on, move the knob with transform: translateX(34px) using a slightly overshooting spring (linear() easing peaking near 1.02 over about 600ms). On :active, stretch the knob wider (width 54px, growing toward the direction it will travel, so shift the translate by the extra width when on) to feel pressed. Toggle on click and on Space or Enter, keep a visible focus-visible outline, and update a text status next to it. Honor prefers-reduced-motion by switching instantly. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-like',
  cat: 'buttons',
  title: 'Like burst',
  sub: 'Heart fills and sparks fly out',
  html: `<button class="btn" type="button" aria-pressed="false"><span class="hw"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.6a4.3 4.3 0 0 1 7.5 2.7c0 5.6-7.5 10.2-7.5 10.2z"/></svg><span class="bst"><i style="--a:0deg"></i><i style="--a:45deg"></i><i style="--a:90deg"></i><i style="--a:135deg"></i><i style="--a:180deg"></i><i style="--a:225deg"></i><i style="--a:270deg"></i><i style="--a:315deg"></i></span></span><span class="n">128</span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{display:flex;align-items:center;gap:10px;appearance:none;border:0;cursor:pointer;padding:12px 22px 12px 16px;border-radius:999px;font-size:16px;font-weight:600;color:var(--ml-ink-2);background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .hw{position:relative;width:30px;height:30px;display:grid;place-items:center}
.d .hw svg{width:28px;height:28px;fill:transparent;stroke:var(--ml-muted);transition:fill 200ms ease,stroke 200ms ease}
.d .hw::after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid var(--ml-accent-2);opacity:0;transform:scale(.4)}
.d .bst i{position:absolute;left:50%;top:50%;width:4px;height:8px;margin:-4px 0 0 -2px;border-radius:2px;background:var(--ml-accent-2);opacity:0}
.d .btn.on .hw svg{fill:var(--ml-accent);stroke:var(--ml-accent);animation:ml-pop 520ms var(--ml-bounce)}
.d .btn.on .hw::after{animation:ml-ring 520ms var(--ml-ease)}
.d .btn.on .bst i{animation:ml-burst 560ms var(--ml-ease)}
.d .btn:active{transform:scale(.94);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
@keyframes ml-pop{0%{transform:scale(.5)}60%{transform:scale(1.22)}100%{transform:scale(1)}}
@keyframes ml-ring{0%{opacity:.8;transform:scale(.4)}100%{opacity:0;transform:scale(1.7)}}
@keyframes ml-burst{0%{opacity:1;transform:rotate(var(--a)) translateY(-12px) scaleY(.8)}100%{opacity:0;transform:rotate(var(--a)) translateY(-30px) scaleY(.2)}}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let hover=false,userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    root.addEventListener('pointerenter',()=>(hover=true));
    root.addEventListener('pointerleave',()=>(hover=false));
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&!hover&&performance.now()>userUntil;
    const btn = root.querySelector('.btn');
    const n = root.querySelector('.n');
    const set = (on) => {
      btn.classList.remove('on');
      void btn.offsetWidth;
      btn.classList.toggle('on', on);
      btn.setAttribute('aria-pressed', String(on));
      n.textContent = on ? '129' : '128';
    };
    btn.addEventListener('click', () => { touch(); set(!btn.classList.contains('on')); });
    (async () => {
      await wait(600);
      while (root.isConnected) {
        if (idle()) {
          set(true);
          await wait(1800);
          if (idle()) set(false);
        }
        await wait(1200);
      }
    })();
  },
  prompt: `Build a like button with a particle burst, drawn entirely in SVG and CSS. The heart is an SVG path with fill transparent and a muted stroke. On click toggle an is-liked class and aria-pressed. When liked, fill and stroke the heart with your accent color and play a pop keyframe (scale .5, 1.22, 1 over about 520ms with an overshooting spring easing). At the same time expand a thin ring from scale(.4) to scale(1.7) while fading out, and fire eight short rounded sparks arranged every 45 degrees: each is rotate(var(--angle)) translateY(-12px) fading to translateY(-30px) with opacity 0 over about 560ms. Restart the animation on every like by removing and re-adding the class after a forced reflow. Update the count with a small text swap. Animate transform and opacity only, keep a focus-visible outline, and skip the burst under prefers-reduced-motion. Plain HTML/CSS/JS.`,
});

ML.add({
  id: 'buttons-download',
  cat: 'buttons',
  title: 'Download progress',
  sub: 'Button fills as a progress bar',
  html: `<button class="btn" type="button" data-s="idle"><span class="face base"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg><span class="lb">Download</span></span><span class="face top"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 11l5 5 5-5M5 20h14"/></svg><span class="lb">Download</span></span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{position:relative;overflow:hidden;display:grid;width:216px;height:50px;appearance:none;border:1px solid var(--ml-accent-line);cursor:pointer;border-radius:14px;font-size:15px;font-weight:600;letter-spacing:-.01em;background:var(--ml-accent-soft);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .face{grid-area:1/1;display:flex;align-items:center;justify-content:center;gap:9px;font-variant-numeric:tabular-nums}
.d .base{color:var(--ml-accent-ink)}
.d .top{position:absolute;inset:0;color:#fff;background:var(--ml-grad);clip-path:inset(0 100% 0 0);transition:clip-path 130ms linear}
.d .btn[data-s="idle"] .top{transition:clip-path 360ms var(--ml-ease)}
.d .ic{width:18px;height:18px}
.d .btn:active{transform:scale(.97);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let hover=false,userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    root.addEventListener('pointerenter',()=>(hover=true));
    root.addEventListener('pointerleave',()=>(hover=false));
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&!hover&&performance.now()>userUntil;
    const btn = root.querySelector('.btn');
    const top = root.querySelector('.top');
    const labels = [...root.querySelectorAll('.lb')];
    const icons = [...root.querySelectorAll('.ic')];
    const check = '<path d="M5 12.5l4.5 4.5L19 7.5"/>';
    const arrow = '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>';
    const say = (t, ic) => {
      labels.forEach((l) => (l.textContent = t));
      icons.forEach((i) => (i.innerHTML = ic));
    };
    let busy = false;
    const go = async () => {
      if (busy) return;
      busy = true;
      btn.dataset.s = 'run';
      let p = 0;
      while (p < 100) {
        p = Math.min(100, p + 3 + Math.round(Math.random() * 7));
        top.style.clipPath = 'inset(0 ' + (100 - p) + '% 0 0)';
        say('Downloading ' + p + '%', arrow);
        await wait(110);
      }
      btn.dataset.s = 'done';
      say('Done', check);
      await wait(1500);
      btn.dataset.s = 'idle';
      top.style.clipPath = 'inset(0 100% 0 0)';
      say('Download', arrow);
      await wait(500);
      busy = false;
    };
    btn.addEventListener('click', () => { touch(); go(); });
    (async () => {
      await wait(600);
      while (root.isConnected) {
        if (idle()) await go();
        await wait(1300);
      }
    })();
  },
  prompt: `Build a download button that becomes its own progress bar. Stack two identical faces inside one rounded button: a base face with a soft accent tint and accent text, and a top face with your accent gradient and white text, absolutely positioned over it and revealed with clip-path: inset(0 100% 0 0). As the real download progresses, update the top face with clip-path: inset(0 (100 - percent)% 0 0) and a short linear transition (around 120ms) so the fill and the text color flip together at exactly the same edge. Update both labels to Downloading N% with font-variant-numeric: tabular-nums so the width never jitters. On completion show a check icon and Done, hold about 1.5 seconds, then retract the fill. Use aria-live polite for the status and set aria-busy while running. Honor prefers-reduced-motion. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-split',
  cat: 'buttons',
  title: 'Split button',
  sub: 'Chevron opens a menu from its corner',
  html: `<div class="sp"><div class="grp"><button class="main" type="button">Publish</button><button class="chev" type="button" aria-label="More publish options" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button></div><div class="menu" role="menu"><button type="button" role="menuitem">Publish now</button><button type="button" role="menuitem" class="hot">Schedule</button><button type="button" role="menuitem">Save as draft</button></div></div>`,
  css: `
.d{display:flex;justify-content:center;align-items:flex-start;padding-top:11%;background:var(--ml-surface)}
.d .sp{position:relative}
.d .grp{display:flex;border-radius:12px;overflow:hidden;box-shadow:0 1px 2px rgba(255,68,51,.25),0 10px 22px rgba(255,68,51,.22)}
.d .main,.d .chev{appearance:none;border:0;cursor:pointer;height:44px;color:#fff;background:var(--ml-grad);font-size:15px;font-weight:600;letter-spacing:-.01em;transition:filter 200ms ease}
.d .main{padding:0 22px}
.d .chev{display:grid;place-items:center;width:42px;border-left:1px solid rgba(255,255,255,.35)}
.d .chev svg{width:16px;height:16px;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .chev[aria-expanded="true"] svg{transform:rotate(180deg)}
.d .main:hover,.d .chev:hover{filter:brightness(1.07)}
.d .menu{position:absolute;right:0;top:calc(100% + 8px);width:156px;padding:5px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);border:1px solid var(--ml-line);transform-origin:top right;transform:scale(.88) translateY(-6px);opacity:0;pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity 180ms ease}
.d .menu.open{transform:none;opacity:1;pointer-events:auto}
.d .menu button{display:block;width:100%;text-align:left;appearance:none;border:0;cursor:pointer;padding:8px 10px;border-radius:8px;background:transparent;font-size:13px;font-weight:500;color:var(--ml-ink)}
.d .menu button:hover,.d .menu button.hot{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .main:focus-visible,.d .chev:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-3px}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let hover=false,userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    root.addEventListener('pointerenter',()=>(hover=true));
    root.addEventListener('pointerleave',()=>(hover=false));
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&!hover&&performance.now()>userUntil;
    const chev = root.querySelector('.chev');
    const menu = root.querySelector('.menu');
    const items = [...menu.querySelectorAll('button')];
    const set = (open) => {
      menu.classList.toggle('open', open);
      chev.setAttribute('aria-expanded', String(open));
    };
    chev.addEventListener('click', () => { touch(); set(!menu.classList.contains('open')); });
    items.forEach((b) => b.addEventListener('click', () => { touch(); set(false); }));
    (async () => {
      await wait(600);
      while (root.isConnected) {
        if (idle()) {
          items.forEach((b) => b.classList.remove('hot'));
          set(true);
          await wait(900);
          items[1].classList.add('hot');
          await wait(1100);
          if (idle()) set(false);
        }
        await wait(1400);
      }
    })();
  },
  prompt: `Build a split button: a primary action joined to a chevron button that opens a small menu. Wrap both in a flex group with one shared radius and a thin translucent divider between them. The chevron toggles aria-expanded and rotates 180 degrees with a critically damped spring. The menu is absolutely positioned under the chevron, aligned to the right edge, with transform-origin: top right, and opens from transform: scale(.88) translateY(-6px), opacity 0 to none, opacity 1 over about 580ms with a spring easing, so it appears to grow out of the chevron. Menu items use role="menuitem", a soft accent hover tint, arrow-key navigation, Escape to close and focus return to the chevron, and close on outside click. Animate transform and opacity only. Honor prefers-reduced-motion by fading only. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-hold',
  cat: 'buttons',
  title: 'Hold to confirm',
  sub: 'Fill rises while held, rewinds on release',
  html: `<button class="btn" type="button"><span class="face base"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg><span class="lb">Hold to delete</span></span><span class="face top"><svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg><span class="lb">Hold to delete</span></span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{position:relative;overflow:hidden;display:grid;width:206px;height:52px;appearance:none;border:1.5px solid var(--ml-accent-line);cursor:pointer;border-radius:16px;font-size:15px;font-weight:600;letter-spacing:-.01em;background:var(--ml-bg);box-shadow:var(--ml-shadow);touch-action:none;user-select:none;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .face{grid-area:1/1;display:flex;align-items:center;justify-content:center;gap:9px}
.d .base{color:var(--ml-accent-ink)}
.d .top{position:absolute;inset:0;color:#fff;background:var(--ml-grad);clip-path:inset(100% 0 0 0);transition:clip-path 320ms var(--ml-ease)}
.d .ic{width:18px;height:18px}
.d .btn.held{transform:scale(.97)}
.d .btn.held .top{clip-path:inset(0);transition:clip-path 1200ms linear}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let hover=false,userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    root.addEventListener('pointerenter',()=>(hover=true));
    root.addEventListener('pointerleave',()=>(hover=false));
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&!hover&&performance.now()>userUntil;
    const btn = root.querySelector('.btn');
    const labels = [...root.querySelectorAll('.lb')];
    const say = (t) => labels.forEach((l) => (l.textContent = t));
    let timer = 0, done = false;
    const start = () => {
      if (done) return;
      btn.classList.add('held');
      timer = setTimeout(() => {
        done = true;
        say('Deleted');
        setTimeout(() => {
          btn.classList.remove('held');
          setTimeout(() => { say('Hold to delete'); done = false; }, 400);
        }, 1100);
      }, 1200);
    };
    const end = () => {
      clearTimeout(timer);
      if (!done) btn.classList.remove('held');
    };
    btn.addEventListener('pointerdown', () => { touch(); start(); });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach((e) => btn.addEventListener(e, end));
    btn.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') start(); });
    btn.addEventListener('keyup', end);
    (async () => {
      await wait(700);
      while (root.isConnected) {
        if (idle()) {
          start();
          await wait(650);
          end();
          await wait(1000);
          if (idle()) {
            start();
            await wait(2700);
          }
        }
        await wait(1300);
      }
    })();
  },
  prompt: `Build a hold-to-confirm button for destructive actions. Stack two faces in one rounded button: a base face (outline style, accent text) and a top face (accent gradient, white text) revealed with clip-path: inset(100% 0 0 0) so it rises from the bottom. While the pointer is held, add a held class that animates the top face to clip-path: inset(0) over exactly the hold duration (for example 1200ms) with linear easing, and starts a timer; when the timer fires, run the action and show a confirmed state. If the pointer is released, leaves or is cancelled early, clear the timer and remove the class so the fill rewinds quickly (about 320ms) with a spring easing. Support keyboard: hold Space or Enter. Add touch-action: none and user-select: none, a subtle scale(.97) while held, and an aria-live message. Animate clip-path and transform only. Honor prefers-reduced-motion by showing a plain countdown label. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-pulse',
  cat: 'buttons',
  title: 'Attention pulse',
  sub: 'A faint ring expands behind the CTA',
  html: `<div class="wrap"><i class="ring r1"></i><i class="ring r2"></i><button class="btn" type="button">Start free trial</button></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .wrap{position:relative;isolation:isolate}
.d .ring{position:absolute;inset:0;border-radius:999px;background:var(--ml-accent);opacity:0;z-index:-1;animation:ml-pulse 2.8s var(--ml-ease) infinite}
.d .r2{animation-delay:.45s}
.d .btn{appearance:none;border:0;cursor:pointer;padding:16px 32px;border-radius:999px;font-size:15px;font-weight:600;letter-spacing:-.01em;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.25),0 10px 22px rgba(255,68,51,.22);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .btn:active{transform:scale(.95);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
@keyframes ml-pulse{0%{transform:scale(1,1);opacity:.3}55%{transform:scale(1.34,1.7);opacity:0}100%{transform:scale(1.34,1.7);opacity:0}}
@media (prefers-reduced-motion:reduce){.d .ring{animation:none}}
`,
  prompt: `Add a subtle attention pulse behind my main call-to-action. Wrap the button in a position: relative; isolation: isolate container. Add two absolutely positioned siblings with inset: 0, the same border-radius as the button and a flat fill of your accent color, placed behind it with z-index: -1. Animate each with a CSS keyframe that starts at transform: scale(1) with opacity .3, grows to about scale(1.34, 1.7) while fading to opacity 0 by 55 percent of the cycle, then rests for the remaining time. Use a 2.8 second duration, cubic-bezier(.32,.72,0,1), infinite, and delay the second ring by about 450ms so the pulses ripple. Keep it quiet: the ring should be hardly noticeable, never a glow. Animate transform and opacity only, never box-shadow. Pause the pulse on hover and remove it entirely under prefers-reduced-motion. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'buttons-3d-press',
  cat: 'buttons',
  title: '3D press',
  sub: 'Depth edge squashes on press',
  html: `<div class="wrap"><button class="btn" type="button"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg><span>Play now</span></button><i class="floor"></i></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .wrap{position:relative;padding-bottom:10px}
.d .btn{position:relative;display:flex;align-items:center;gap:10px;appearance:none;border:0;cursor:pointer;padding:16px 34px;border-radius:16px;font-size:16px;font-weight:700;letter-spacing:-.01em;color:#fff;background:linear-gradient(180deg,#3C8CFF 0%,#FF4433 100%);box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 8px 0 #B3150F;transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow var(--ml-spring-dur) var(--ml-spring)}
.d .btn svg{width:16px;height:16px}
.d .floor{position:absolute;left:6%;right:6%;bottom:-2px;height:14px;border-radius:50%;background:rgba(35,15,10,.16);filter:blur(7px);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity var(--ml-spring-dur) var(--ml-spring)}
.d .btn:hover{transform:translateY(-2px);box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 10px 0 #B3150F}
.d .btn:active,.d .btn.is-auto{transform:translateY(8px);box-shadow:inset 0 1px 0 rgba(255,255,255,.35),0 0 0 #B3150F;transition-duration:90ms;transition-timing-function:ease-out}
.d .wrap:has(.btn:active) .floor,.d .wrap:has(.btn.is-auto) .floor{transform:scaleX(.9);opacity:.6}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:4px}
`,
  run: (root) => {
    const btn = root.querySelector('.btn');
    let hover = false;
    root.addEventListener('pointerenter', () => (hover = true));
    root.addEventListener('pointerleave', () => (hover = false));
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        btn.classList.add('is-auto');
        setTimeout(() => btn.classList.remove('is-auto'), 420);
      }
      setTimeout(tick, 1800);
    };
    setTimeout(tick, 500);
  },
  prompt: `Build a chunky 3D push button with a visible depth edge. Make the button a gradient surface with a 1px inset top highlight and a hard, solid darker-accent shadow offset straight down by 8px (box-shadow: 0 8px 0 darkAccent, with no blur) that reads as the button's side wall. On :active, translateY(8px) and set the hard shadow to 0 0 0 so the face lands exactly where the edge was; use a fast 90ms ease-out on press and a critically damped spring such as cubic-bezier(.32,.72,0,1) over about 590ms on release. Add a small lift of translateY(-2px) with a 10px edge on :hover. Put a soft blurred ellipse floor shadow under the button that narrows and fades slightly while pressed. Keep padding on the wrapper so the shadow never clips, add a visible :focus-visible outline, and support keyboard Space and Enter. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'buttons-ghost-solid',
  cat: 'buttons',
  title: 'Ghost to solid',
  sub: 'Outline blooms into a gradient',
  html: `<button class="btn" type="button"><span class="t">Learn more</span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{position:relative;overflow:hidden;isolation:isolate;appearance:none;cursor:pointer;padding:15px 34px;border-radius:999px;border:1.5px solid var(--ml-accent);font-size:15px;font-weight:600;letter-spacing:-.01em;color:var(--ml-accent-ink);background:transparent;transition:color 360ms var(--ml-ease),box-shadow 500ms var(--ml-ease),transform var(--ml-spring-dur) var(--ml-spring)}
.d .btn::before{content:"";position:absolute;inset:-2px;z-index:-1;background:var(--ml-grad);clip-path:circle(0% at 50% 50%);transition:clip-path 620ms var(--ml-ease)}
.d .btn:hover,.d .btn.is-auto{color:#fff;box-shadow:0 10px 24px rgba(255,68,51,.24)}
.d .btn:hover::before,.d .btn.is-auto::before{clip-path:circle(75% at 50% 50%)}
.d .btn:active{transform:scale(.96);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const btn = root.querySelector('.btn');
    let hover=false;root.addEventListener('pointerenter',()=>(hover=true));root.addEventListener('pointerleave',()=>(hover=false));
    const tick=()=>{if(!root.isConnected)return;if(!root.dataset.paused&&!hover){btn.classList.add('is-auto');setTimeout(()=>btn.classList.remove('is-auto'),1300);}setTimeout(tick,2900);};
    setTimeout(tick,500);
  },
  prompt: `Build a ghost-to-solid button. At rest it is an outline: a 1.5px accent border, accent text, transparent background, pill radius. Add a ::before layer behind the label (position: relative; overflow: hidden; isolation: isolate on the button, z-index: -1 on the layer) that holds your accent gradient and is hidden with clip-path: circle(0% at 50% 50%). On :hover and :focus-visible, grow it to circle(75% at 50% 50%) over about 620ms with cubic-bezier(.32,.72,0,1) so the color blooms from the center, while the text color transitions to white and a soft accent-tinted shadow fades in. On leave it shrinks back. Add scale(.96) on :active at 90ms. Animate clip-path, color and box-shadow only on this small element. Keep a visible focus-visible outline and honor prefers-reduced-motion by switching instantly. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'buttons-glow-follow',
  cat: 'buttons',
  title: 'Inner light',
  sub: 'A soft highlight follows the pointer',
  html: `<button class="btn" type="button"><i class="gl"></i><span class="t">Join the beta</span></button>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .btn{position:relative;overflow:hidden;appearance:none;border:0;cursor:pointer;width:210px;height:60px;border-radius:18px;font-size:16px;font-weight:600;letter-spacing:-.01em;color:#fff;background:var(--ml-ink);box-shadow:var(--ml-shadow-lg);--x:50%;--y:50%;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .gl{position:absolute;inset:0;background:radial-gradient(circle 82px at var(--x) var(--y),rgba(79,163,255,.9) 0%,rgba(79,163,255,.34) 45%,rgba(79,163,255,0) 100%);opacity:0;transition:opacity 400ms ease}
.d .btn:hover .gl,.d .btn.is-auto .gl{opacity:1}
.d .t{position:relative}
.d .btn:active{transform:scale(.97);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const btn = root.querySelector('.btn');
    let real = false, t = 0, cx = 105, cy = 30, tx = 105, ty = 30;
    btn.addEventListener('pointerenter', () => { real = true; btn.classList.remove('is-auto'); });
    btn.addEventListener('pointerleave', () => { real = false; });
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
    });
    const frame = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        if (!real) {
          t += 0.016;
          btn.classList.add('is-auto');
          tx = btn.offsetWidth * (0.5 + 0.42 * Math.sin(t * 1.1));
          ty = btn.offsetHeight * (0.5 + 0.34 * Math.sin(t * 1.9));
        }
        cx += (tx - cx) * 0.16;
        cy += (ty - cy) * 0.16;
        btn.style.setProperty('--x', cx.toFixed(1) + 'px');
        btn.style.setProperty('--y', cy.toFixed(1) + 'px');
      }
      requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  },
  prompt: `Build a button with an inner light that follows the pointer. Use a dark neutral button (position: relative; overflow: hidden) with a child layer filling it, painted with radial-gradient(circle 82px at var(--x) var(--y), rgba(accent, .9), rgba(accent, .34) 45%, transparent). On pointermove over the button, set --x and --y to the pointer position relative to the button (clientX minus rect.left, clientY minus rect.top), easing toward the target in a requestAnimationFrame loop with a 0.16 lerp so the light glides rather than snaps. Fade the layer in on :hover over 400ms and out on leave. Keep the label above with position: relative. Use CSS variables so only the gradient paint changes, with no layout. Keep a visible :focus-visible outline and, for keyboard focus, park the light at the center. Skip the effect on touch and under prefers-reduced-motion. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-segmented',
  cat: 'buttons',
  title: 'Segmented buttons',
  sub: 'A pill slides between options',
  html: `<div class="box"><div class="seg" role="tablist" style="--i:0"><i class="pill"></i><button type="button" role="tab" class="on" aria-selected="true">Day</button><button type="button" role="tab" aria-selected="false">Week</button><button type="button" role="tab" aria-selected="false">Month</button></div><div class="val"><span class="k">Revenue</span><b>$1,240</b></div></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .box{display:flex;flex-direction:column;align-items:center;gap:20px}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(3,1fr);width:240px;padding:4px;border-radius:999px;background:var(--ml-bar-2);border:1px solid var(--ml-line)}
.d .pill{position:absolute;left:4px;top:4px;bottom:4px;width:calc((100% - 8px) / 3);border-radius:999px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.14),0 4px 10px rgba(35,15,10,.08);transform:translateX(calc(var(--i) * 100%));transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .seg button{position:relative;appearance:none;border:0;cursor:pointer;height:36px;background:transparent;border-radius:999px;font-size:14px;font-weight:600;color:var(--ml-muted);transition:color 250ms ease}
.d .seg button.on{color:var(--ml-ink)}
.d .val{display:flex;flex-direction:column;align-items:center;gap:2px}
.d .val .k{font-size:12px;color:var(--ml-muted);font-weight:500}
.d .val b{font-size:30px;font-weight:600;letter-spacing:-.03em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .seg button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let hover=false,userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    root.addEventListener('pointerenter',()=>(hover=true));
    root.addEventListener('pointerleave',()=>(hover=false));
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&!hover&&performance.now()>userUntil;
    const seg = root.querySelector('.seg');
    const btns = [...seg.querySelectorAll('button')];
    const val = root.querySelector('.val b');
    const vals = ['$1,240', '$8,910', '$36,420'];
    let cur = 0;
    const pick = (i) => {
      cur = i;
      seg.style.setProperty('--i', i);
      btns.forEach((b, k) => {
        b.classList.toggle('on', k === i);
        b.setAttribute('aria-selected', String(k === i));
      });
      val.textContent = vals[i];
    };
    btns.forEach((b, i) => b.addEventListener('click', () => { touch(); pick(i); }));
    (async () => {
      await wait(900);
      while (root.isConnected) {
        if (idle()) pick((cur + 1) % 3);
        await wait(1600);
      }
    })();
  },
  prompt: `Build a segmented control with a sliding pill. Use a three-column grid track with a soft tinted background and a hairline border, holding three tab buttons (role="tab", aria-selected). Add one absolutely positioned white pill behind them, as wide as one column (calc((100% - 8px) / 3)), and move it with transform: translateX(calc(var(--i) * 100%)), where --i is set on the track to the selected index. Use a slightly overshooting spring such as linear() easing peaking near 1.02 over about 600ms, because the pill is a flicked object. Switch the selected label color from muted to ink in the same beat. Support arrow keys (roving tabindex), Home and End, a visible :focus-visible outline, and update the related content panel. Animate transform only. Honor prefers-reduced-motion by moving instantly. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'buttons-fly-cart',
  cat: 'buttons',
  title: 'Fly to cart',
  sub: 'A dot arcs into the cart, badge bumps',
  html: `<div class="cart" aria-label="Cart"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M3 4h2.5l2.2 11h10.3l2-8H6.2"/></svg><b class="bd">2</b></div><div class="prod"><div class="img"><i class="sun"></i><i class="hill"></i></div><div class="meta"><span class="nm">Aero Mug</span><span class="pr">$24</span></div><button class="btn" type="button">Add to cart</button></div>`,
  css: `
.d{background:var(--ml-surface)}
.d .cart{position:absolute;right:16px;top:14px;width:42px;height:42px;display:grid;place-items:center;border-radius:50%;background:var(--ml-bg);box-shadow:var(--ml-shadow);color:var(--ml-ink)}
.d .cart svg{width:20px;height:20px}
.d .cart.wig svg{animation:ml-wig 460ms var(--ml-ease)}
.d .bd{position:absolute;right:-3px;top:-3px;min-width:18px;height:18px;padding:0 4px;display:grid;place-items:center;border-radius:9px;background:var(--ml-accent);color:#fff;font-size:11px;font-weight:700}
.d .bd.bump{animation:ml-bump 520ms var(--ml-bounce)}
.d .prod{position:absolute;left:50%;bottom:7%;width:60%;transform:translateX(-50%);padding:10px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .img{position:relative;overflow:hidden;height:56px;border-radius:10px;background:var(--ml-bar-2)}
.d .sun{position:absolute;right:16%;top:16%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-2)}
.d .hill{position:absolute;left:-10%;bottom:-40%;width:80%;height:90%;border-radius:50%;background:var(--ml-bar)}
.d .meta{display:flex;justify-content:space-between;margin:9px 2px 9px;font-size:13px;font-weight:600}
.d .pr{color:var(--ml-muted)}
.d .btn{display:block;width:100%;appearance:none;border:0;cursor:pointer;height:34px;border-radius:10px;font-size:13px;font-weight:600;color:#fff;background:var(--ml-grad);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .btn:active{transform:scale(.96);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .fx{position:absolute;left:0;top:0;width:0;height:0;pointer-events:none;z-index:3}
.d .fy{position:absolute;left:-7px;top:-7px;width:14px;height:14px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px var(--ml-accent-soft)}
@keyframes ml-bump{0%{transform:scale(1)}40%{transform:scale(1.5)}100%{transform:scale(1)}}
@keyframes ml-wig{0%,100%{transform:rotate(0)}30%{transform:rotate(-14deg)}65%{transform:rotate(8deg)}}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let hover=false,userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    root.addEventListener('pointerenter',()=>(hover=true));
    root.addEventListener('pointerleave',()=>(hover=false));
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&!hover&&performance.now()>userUntil;
    const btn = root.querySelector('.btn');
    const cart = root.querySelector('.cart');
    const bd = root.querySelector('.bd');
    let count = 2, busy = false;
    const fire = () => {
      if (busy) return;
      busy = true;
      const rr = root.getBoundingClientRect(), br = btn.getBoundingClientRect(), cr = cart.getBoundingClientRect();
      const k = rr.width / root.clientWidth || 1;
      const sx = (br.left + br.width / 2 - rr.left) / k, sy = (br.top + br.height / 2 - rr.top) / k;
      const dx = (cr.left + cr.width / 2 - rr.left) / k - sx, dy = (cr.top + cr.height / 2 - rr.top) / k - sy;
      const fx = document.createElement('span');
      fx.className = 'fx';
      fx.style.left = sx + 'px';
      fx.style.top = sy + 'px';
      const fy = document.createElement('span');
      fy.className = 'fy';
      fx.appendChild(fy);
      root.appendChild(fx);
      const o = { duration: 720, fill: 'forwards' };
      fx.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(' + dx + 'px)' }], { ...o, easing: 'cubic-bezier(.45,0,.85,.55)' });
      fy.animate([{ transform: 'translateY(0) scale(1)' }, { transform: 'translateY(' + dy + 'px) scale(.45)' }], { ...o, easing: 'cubic-bezier(.1,.6,.4,1)' });
      setTimeout(() => {
        fx.remove();
        count = count >= 9 ? 2 : count + 1;
        bd.textContent = count;
        bd.classList.remove('bump');
        cart.classList.remove('wig');
        void bd.offsetWidth;
        bd.classList.add('bump');
        cart.classList.add('wig');
        busy = false;
      }, 740);
    };
    btn.addEventListener('click', () => { touch(); fire(); });
    (async () => {
      await wait(700);
      while (root.isConnected) {
        if (idle()) fire();
        await wait(2400);
      }
    })();
  },
  prompt: `Build a fly-to-cart interaction. On clicking Add to cart, read the button center and the cart icon center with getBoundingClientRect, then create a small accent dot at the button. Animate it along an arc without any library by using two nested elements: the outer one animates transform: translateX(dx) with an ease-in curve such as cubic-bezier(.45,0,.85,.55), the inner one animates translateY(dy) with an ease-out curve such as cubic-bezier(.1,.6,.4,1), both for about 720ms with the Web Animations API, and the inner one shrinks to scale(.45). Because the axes use different easings the dot traces a curved path. When it lands, remove it, increment the cart count, play a bump keyframe on the badge (scale 1 to 1.5 to 1 with an overshooting spring) and a short wiggle on the cart icon. Announce the new count in an aria-live region. Animate transform and opacity only, and in prefers-reduced-motion just bump the badge. Plain HTML/CSS/JS, no libraries.`,
});

})();
