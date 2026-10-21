// Navigation cards. Mostly wireframe-in-a-window: the nav is the real component, the page body is abstract bars.
(() => {
const BASE = `.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:86%;height:86%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{flex:none;display:flex;align-items:center;gap:4px;padding:7px 10px;border-bottom:1px solid var(--ml-line);background:var(--ml-bg);position:relative;z-index:6}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .pg{position:relative;flex:1;min-height:0;overflow:hidden}
.d .sc{position:absolute;inset:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .top{height:32px}
.d .r{height:6px;margin:8px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .r.t{height:10px;width:58%;background:var(--ml-bar)}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:64px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:13px;height:13px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}
.d .nv{display:flex;align-items:center;gap:12px;height:32px;padding:0 12px;font:500 10px/1 var(--ml-font);color:var(--ml-ink-2);white-space:nowrap}
.d .nv b{font-weight:600;color:var(--ml-ink)}
.d .lg{flex:none;width:11px;height:11px;border-radius:4px;background:var(--ml-grad)}
.d .sp{flex:1}
.d .cta{padding:5px 9px;border-radius:999px;background:var(--ml-accent);color:#fff;font-weight:600}
.d button{appearance:none;border:0;background:none;cursor:pointer}
`;
const WIN = `<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>`;
const PAGE = (n) => Array.from({ length: n }, () => `<div class="im"></div><p class="r t"></p><p class="r"></p><p class="r m"></p>`).join('');
const SVG = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;

ML.add({
  id: 'nav-glass-sticky',
  cat: 'nav',
  title: 'Glass on scroll',
  sub: 'Header gains blur and a hairline',
  html: WIN + `<div class="pg"><div class="sc"><div class="top"></div>${PAGE(4)}</div>
<div class="nv g"><i class="lg"></i><b>Northwind</b><span class="sp"></span><span>Product</span><span>Pricing</span><span>Docs</span></div></div></div>`,
  css: BASE + `
.d .nv.g{position:absolute;left:0;right:0;top:0;z-index:3}
.d .nv.g::before{content:"";position:absolute;inset:0;z-index:-1;background:rgba(255,255,255,.62);-webkit-backdrop-filter:blur(14px) saturate(1.5);backdrop-filter:blur(14px) saturate(1.5);box-shadow:0 1px 0 var(--ml-line);opacity:0;transition:opacity .35s ease}
.d .nv.g.on::before{opacity:1}
.d .im{background:linear-gradient(135deg,var(--ml-accent-line),var(--ml-accent-soft))}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const nv = root.querySelector('.nv');
    let uu = 0;
    const yu = () => { uu = performance.now() + 2500; };
    ['wheel', 'pointerdown', 'touchstart'].forEach((n) => sc.addEventListener(n, yu, { passive: true }));
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const period = 6500;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < uu) {
        start = t - ((t - start) % period);
      } else {
        const p = ((t - start) % period) / period;
        const max = sc.scrollHeight - sc.clientHeight;
        const k = p < 0.12 ? 0 : p < 0.5 ? ease((p - 0.12) / 0.38) : p < 0.62 ? 1 : 1 - ease((p - 0.62) / 0.38);
        sc.scrollTop = k * max * 0.7;
      }
      nv.classList.toggle('on', sc.scrollTop > 8);
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a sticky site header that starts fully transparent over the hero and turns into frosted glass once the page scrolls. Make the header position: sticky; top: 0 (or fixed) and put the glass on a ::before layer so it can fade: background rgba(255,255,255,.6), backdrop-filter: blur(14px) saturate(1.5), and a 1px hairline as box-shadow: 0 1px 0 rgba(0,0,0,.08). Keep that layer at opacity: 0 and fade it to 1 over about 350ms when the page has scrolled past 8px. Detect the scroll with a tiny sentinel element at the top of the page watched by an IntersectionObserver (toggle a data-scrolled attribute on the header) instead of a scroll listener, or use animation-timeline: scroll() where supported. The content must slide visibly under the header, so keep the first section tall and image-rich. Use a solid background fallback when backdrop-filter is unsupported. Respect prefers-reduced-transparency. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

ML.add({
  id: 'nav-hide-show',
  cat: 'nav',
  title: 'Hide on scroll down',
  sub: 'Slides away down, returns on scroll up',
  html: WIN + `<div class="pg"><div class="sc"><div class="top"></div>${PAGE(5)}</div>
<div class="nv h"><i class="lg"></i><b>Northwind</b><span class="sp"></span><span>Work</span><span class="cta">Start</span></div>
<div class="chip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M6 13l6 6 6-6"/></svg><span>Scrolling down</span></div></div></div>`,
  css: BASE + `
.d .nv.h{position:absolute;left:0;right:0;top:0;z-index:3;background:rgba(255,255,255,.96);box-shadow:0 1px 0 var(--ml-line),0 6px 16px rgba(35,15,10,.06);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .nv.h.off{transform:translateY(-110%)}
.d .chip{position:absolute;left:50%;bottom:8px;z-index:4;transform:translateX(-50%);display:flex;align-items:center;gap:5px;padding:5px 9px 5px 7px;border-radius:999px;background:var(--ml-ink);color:#fff;font:500 9px/1 var(--ml-mono);white-space:nowrap}
.d .chip svg{width:10px;height:10px;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .chip.up svg{transform:rotate(180deg)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const nv = root.querySelector('.nv');
    const chip = root.querySelector('.chip');
    const label = chip.querySelector('span');
    let uu = 0;
    const yu = () => { uu = performance.now() + 2500; };
    ['wheel', 'pointerdown', 'touchstart'].forEach((n) => sc.addEventListener(n, yu, { passive: true }));
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let last = 0;
    const onScroll = () => {
      const y = sc.scrollTop;
      const dy = y - last;
      if (Math.abs(dy) > 1.5) {
        const down = dy > 0;
        nv.classList.toggle('off', down && y > 36);
        chip.classList.toggle('up', !down);
        label.textContent = down ? 'Scrolling down' : 'Scrolling up';
        last = y;
      }
      if (y < 20) nv.classList.remove('off');
    };
    sc.addEventListener('scroll', onScroll, { passive: true });
    const period = 7500;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < uu) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      const k = p < 0.08 ? 0 : p < 0.38 ? ease((p - 0.08) / 0.3) : p < 0.5 ? 1 : p < 0.72 ? 1 - 0.55 * ease((p - 0.5) / 0.22) : p < 0.82 ? 0.45 : 0.45 * (1 - ease((p - 0.82) / 0.18));
      sc.scrollTop = k * max;
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a header that hides when the visitor scrolls down and comes back the moment they scroll up. Use a position: sticky (or fixed) header and a passive scroll listener that compares the current scrollY with the last value: if the delta is more than 2px downward and scrollY is past the header height, add a hidden class; if the delta is upward, remove it. Always show the header when scrollY is near 0. The hidden class is transform: translateY(-110%), transitioned with a critically damped spring such as 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 1 100%). Never hide the header while a menu inside it is open or while a link inside it has keyboard focus (use :focus-within). Throttle the listener with requestAnimationFrame. Animate transform only. Under prefers-reduced-motion keep the header always visible. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'nav-shrink-pill',
  cat: 'nav',
  title: 'Shrink to floating pill',
  sub: 'Full bar morphs into a compact pill',
  html: WIN + `<div class="pg"><div class="sc"><div class="top"></div>${PAGE(4)}</div>
<div class="nv sk"><i class="bgl"></i><i class="lg"></i><span class="sp"></span><span>Work</span><span>Pricing</span><span>Docs</span><span class="sp"></span><span class="cta">Start</span></div></div></div>`,
  css: BASE + `
.d .nv.sk{position:absolute;left:0;right:0;top:0;z-index:3;gap:14px;transition:transform var(--ml-spring-dur) var(--ml-spring),filter var(--ml-spring-dur) var(--ml-spring);filter:drop-shadow(0 0 0 rgba(35,15,10,0))}
.d .bgl{position:absolute;inset:0;z-index:-1;background:var(--ml-bg);box-shadow:inset 0 -1px 0 var(--ml-line);clip-path:inset(0 0 0 0 round 0);transition:clip-path var(--ml-spring-dur) var(--ml-spring)}
.d .nv.sk .lg,.d .nv.sk .cta{transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .nv.sk.on{transform:translateY(5px);filter:drop-shadow(0 6px 10px rgba(35,15,10,.14)) drop-shadow(0 1px 1px rgba(35,15,10,.1))}
.d .nv.sk.on .bgl{clip-path:inset(0 12% 0 12% round 999px);box-shadow:none}
.d .nv.sk.on .lg{transform:translateX(26px)}
.d .nv.sk.on .cta{transform:translateX(-26px)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const nv = root.querySelector('.nv');
    let uu = 0;
    const yu = () => { uu = performance.now() + 2500; };
    ['wheel', 'pointerdown', 'touchstart'].forEach((n) => sc.addEventListener(n, yu, { passive: true }));
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const period = 6200;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < uu) {
        start = t - ((t - start) % period);
      } else {
        const p = ((t - start) % period) / period;
        const max = sc.scrollHeight - sc.clientHeight;
        const k = p < 0.12 ? 0 : p < 0.4 ? ease((p - 0.12) / 0.28) : p < 0.66 ? 1 : p < 0.9 ? 1 - ease((p - 0.66) / 0.24) : 0;
        sc.scrollTop = k * max * 0.6;
      }
      nv.classList.toggle('on', sc.scrollTop > 14);
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a header that starts as a full-width bar and, once the page scrolls past about 16px, morphs into a compact floating pill centered at the top. Put the background on its own layer inside the header and animate it with clip-path: inset(0 0 0 0 round 0) to inset(0 12% 0 12% round 999px), transitioned over about 600ms with a critically damped spring easing. Move the logo and the CTA inward with transform: translateX(26px) and translateX(-26px) so they stay inside the pill, and nudge the whole header down with translateY(5px). Add the floating shadow with filter: drop-shadow on the header (it follows the clipped shape, box-shadow would not). Toggle one class from an IntersectionObserver watching a 1px sentinel at the top of the page. Do not animate width or padding. Keep every link focusable and visible in both states, and under prefers-reduced-motion switch states without the transition. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

ML.add({
  id: 'nav-hover-indicator',
  cat: 'nav',
  title: 'Sliding hover pill',
  sub: 'One highlight glides between links',
  html: WIN + `<div class="pg"><div class="nv ix"><i class="lg"></i><div class="lks"><i class="ind"></i><a>Product</a><a>Pricing</a><a>Docs</a><a>Blog</a></div></div>
<div class="body"><div class="im"></div><p class="r t"></p><p class="r"></p><p class="r m"></p><p class="r s"></p></div></div></div>`,
  css: BASE + `
.d .nv.ix{height:40px;border-bottom:1px solid var(--ml-line);gap:10px}
.d .lks{position:relative;display:flex;align-items:center;gap:2px}
.d .lks a{position:relative;z-index:1;padding:7px 8px;font-size:10.5px;font-weight:500;cursor:pointer;transition:color .25s ease}
.d .lks a.on{color:var(--ml-accent-ink)}
.d .ind{position:absolute;left:0;top:50%;width:40px;height:26px;margin-top:-13px;border-radius:8px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transform:translateX(0) scaleX(1);transform-origin:0 50%;opacity:0;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .25s ease}
.d .ind.show{opacity:1}
.d .body{padding-top:6px}
`,
  run: (root) => {
    const lks = root.querySelector('.lks');
    const nv = root.querySelector('.nv');
    const ind = root.querySelector('.ind');
    const links = [...root.querySelectorAll('.lks a')];
    let hover = false;
    const go = (i) => {
      const a = links[i];
      ind.style.transform = 'translateX(' + a.offsetLeft + 'px) scaleX(' + (a.offsetWidth / 40).toFixed(3) + ')';
      ind.classList.add('show');
      links.forEach((l, n) => l.classList.toggle('on', n === i));
    };
    const off = () => {
      ind.classList.remove('show');
      links.forEach((l) => l.classList.remove('on'));
    };
    links.forEach((a, i) => a.addEventListener('pointerenter', () => { hover = true; go(i); }));
    nv.addEventListener('pointerleave', () => { hover = false; off(); });
    let i = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        if (i >= links.length) { off(); i = 0; setTimeout(tick, 700); return; }
        go(i);
        i += 1;
      }
      setTimeout(tick, 900);
    };
    setTimeout(tick, 600);
  },
  prompt: `Build a navigation bar where a single highlight pill glides between links instead of each link having its own hover background. Put the links in a relatively positioned list and add one absolutely positioned indicator element (border-radius 8px, a soft tint of your accent color with a 1px accent hairline). On pointerenter or focus of a link, measure its offsetLeft and offsetWidth and move the indicator with transform: translateX(left) scaleX(width / baseWidth), where baseWidth is the indicator's own fixed width, with transform-origin: 0 50%. Never animate width or left. Transition transform with a critically damped spring: 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 1 100%). Fade the indicator out on pointerleave of the whole list and park it on the current page link otherwise. Re-measure on resize. Make it work with keyboard focus too, and keep the text color change on the active link. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'nav-underline',
  cat: 'nav',
  title: 'Underline grow',
  sub: 'Line grows in left, exits right',
  html: `<div class="st"><nav class="bx"><i class="lg"></i><a>Product</a><a>Pricing</a><a>Docs</a><a>Contact</a></nav>
<div class="big"><a>Work</a><a>Studio</a><a>Journal</a></div></div>`,
  css: `.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .st{width:90%;display:grid;gap:22px;justify-items:center}
.d .bx{display:flex;align-items:center;gap:14px;padding:0 14px;height:40px;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);font-size:12px;color:var(--ml-ink-2)}
.d .lg{width:12px;height:12px;border-radius:4px;background:var(--ml-grad);margin-right:2px}
.d a{position:relative;display:inline-block;cursor:pointer;padding:3px 0;transition:color .3s ease}
.d a::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent);transform:scaleX(0);transform-origin:100% 50%;transition:transform 520ms var(--ml-ease)}
.d a:hover,.d a.is-auto{color:var(--ml-ink)}
.d a:hover::after,.d a.is-auto::after{transform:scaleX(1);transform-origin:0 50%}
.d .big{display:flex;gap:22px;font:600 24px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink-2)}
.d .big a{padding:5px 0}
.d .big a::after{height:3px;bottom:0}
`,
  run: (root) => {
    const small = [...root.querySelectorAll('.bx a')];
    const big = [...root.querySelectorAll('.big a')];
    let hover = false;
    root.addEventListener('pointerenter', () => (hover = true));
    root.addEventListener('pointerleave', () => (hover = false));
    let n = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        small.forEach((a, i) => a.classList.toggle('is-auto', i === n % small.length));
        big.forEach((a, i) => a.classList.toggle('is-auto', i === (n + 1) % big.length));
        n += 1;
      } else if (!root.dataset.paused) {
        small.concat(big).forEach((a) => a.classList.remove('is-auto'));
      }
      setTimeout(tick, 1100);
    };
    setTimeout(tick, 500);
  },
  prompt: `Add a grow-in underline to my navigation links. Give each link position: relative and a ::after pseudo-element: height 2px, border-radius 2px, background your accent color, positioned left: 0; right: 0; bottom: -1px, with transform: scaleX(0) and transform-origin: 100% 50% (the right edge). On :hover and :focus-visible set transform: scaleX(1) and transform-origin: 0 50% (the left edge). Because the origin flips at the same moment the state changes, the line grows in from the left and, when the pointer leaves, shrinks away toward the right. Transition transform only, 500ms cubic-bezier(.32,.72,0,1). Also shift the link text from muted to full ink color on hover. For the active page keep the line fully drawn with aria-current="page". Works the same on large display-type links in a footer or menu: scale the thickness with the type. Under prefers-reduced-motion show the line instantly. Plain CSS, no JavaScript, no libraries.`,
});

ML.add({
  id: 'nav-mega-menu',
  cat: 'nav',
  title: 'Mega menu',
  sub: 'Panel drops, columns stagger in',
  html: WIN + `<div class="pg"><div class="nv mg"><i class="lg"></i><button class="trg" type="button">Product<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button><span>Solutions</span><span>Pricing</span></div>
<div class="body"><div class="im"></div><p class="r t"></p><p class="r"></p><p class="r m"></p></div>
<div class="dim"></div>
<div class="pn"><div class="cl"><h6 class="it" style="--i:0">Platform</h6><a class="it" style="--i:1">Analytics</a><a class="it" style="--i:2">Automations</a><a class="it" style="--i:3">Integrations</a></div>
<div class="cl"><h6 class="it" style="--i:1">Solutions</h6><a class="it" style="--i:2">Startups</a><a class="it" style="--i:3">Agencies</a><a class="it" style="--i:4">Enterprise</a></div>
<div class="ft it" style="--i:3"><b>What's new</b><span>Sync 2.0 is here</span></div></div></div></div>`,
  css: BASE + `
.d .nv.mg{gap:6px;border-bottom:1px solid var(--ml-line);position:relative;z-index:4;background:var(--ml-bg)}
.d .nv.mg>span,.d .trg{padding:6px 8px;border-radius:8px}
.d .trg{display:flex;align-items:center;gap:4px;font:500 10px/1 var(--ml-font);color:var(--ml-ink-2);transition:background-color .25s ease,color .25s ease}
.d .trg svg{width:9px;height:9px;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .lg{margin-right:6px}
.d.open .trg,.d .win.open .trg{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .win.open .trg svg{transform:rotate(180deg)}
.d .dim{position:absolute;inset:0;z-index:2;background:rgba(35,15,10,.1);opacity:0;pointer-events:none;transition:opacity .3s ease}
.d .win.open .dim{opacity:1}
.d .pn{position:absolute;left:6px;right:6px;top:36px;z-index:3;display:grid;grid-template-columns:1fr 1fr .9fr;gap:8px;padding:10px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);transform-origin:20% 0;transform:translateY(-8px) scale(.96);opacity:0;pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .22s ease}
.d .win.open .pn{transform:none;opacity:1;pointer-events:auto}
.d .cl{display:grid;gap:2px;align-content:start}
.d h6{font:600 8.5px/1 var(--ml-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ml-muted);padding:2px 6px 5px}
.d .cl a{padding:5px 6px;border-radius:7px;font-size:10px;color:var(--ml-ink);cursor:pointer;transition:background-color .2s ease}
.d .cl a:hover{background:var(--ml-surface)}
.d .ft{display:grid;align-content:end;gap:2px;padding:9px;border-radius:9px;background:var(--ml-grad);color:#fff}
.d .ft b{font-size:10.5px;font-weight:600}
.d .ft span{font-size:8.5px;opacity:.85}
.d .it{opacity:0;transform:translateY(8px);transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .win.open .it{opacity:1;transform:none;transition-delay:calc(var(--i) * 45ms + 70ms)}
.d .body{padding-top:4px}
`,
  run: (root) => {
    const win = root.querySelector('.win');
    const trg = root.querySelector('.trg');
    const pn = root.querySelector('.pn');
    let hover = false;
    let hold = 0;
    const open = (v) => win.classList.toggle('open', v);
    const enter = () => { hover = true; clearTimeout(hold); open(true); };
    const leave = () => { hover = false; clearTimeout(hold); hold = setTimeout(() => open(false), 140); };
    trg.addEventListener('pointerenter', enter);
    pn.addEventListener('pointerenter', enter);
    trg.addEventListener('pointerleave', leave);
    pn.addEventListener('pointerleave', leave);
    let on = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        on = !on;
        open(on);
      }
      setTimeout(tick, on ? 3000 : 1500);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build a mega menu for the main navigation. The Product trigger is a button with aria-expanded and aria-controls pointing at a wide panel that sits directly under the header, spanning most of the header width. The panel holds two or three columns of links under small uppercase headings, plus one feature tile with a short blurb. Open it on pointerenter and on click/Enter, close it on pointerleave (with a 140ms grace delay so the pointer can cross the gap), on Escape, and when focus leaves. Animate the panel with transform: translateY(-8px) scale(.96) to none and opacity 0 to 1 over about 600ms using a critically damped spring easing, with transform-origin at the top near the trigger. Stagger the contents: each heading, link and tile starts at opacity 0 and translateY(8px), and gets a transition-delay of index * 45ms plus 70ms. Dim the page behind with a light scrim. Rotate the trigger chevron 180 degrees when open. Keep the panel in the DOM and use pointer-events: none plus visibility when closed. Under prefers-reduced-motion drop the stagger and the movement. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'nav-side-drawer',
  cat: 'nav',
  title: 'Right-side drawer',
  sub: 'Menu slides in over a dimmed page',
  html: `<div class="ph"><div class="sb"><i></i><i></i></div><div class="nv m"><i class="lg"></i><b>Northwind</b><span class="sp"></span><button class="bg" type="button" aria-label="Menu"><i></i><i></i><i></i></button></div>
<div class="im"></div><p class="r t"></p><p class="r"></p><p class="r m"></p><p class="r s"></p><div class="im"></div>
<div class="scrim"></div>
<aside class="dr"><a class="it" style="--i:0">Home</a><a class="it" style="--i:1">Work</a><a class="it" style="--i:2">About</a><a class="it" style="--i:3">Contact</a><span class="cta it" style="--i:4">Get started</span></aside></div>`,
  css: `.d{display:block;background:var(--ml-surface)}
.d .ph{position:absolute;left:50%;top:7%;width:52%;max-width:200px;min-width:150px;height:112%;transform:translateX(-50%);background:var(--ml-bg);border-radius:26px;box-shadow:0 0 0 5px #fff,0 0 0 6px var(--ml-line),var(--ml-shadow-lg);overflow:hidden}
.d .sb{display:flex;justify-content:space-between;padding:9px 16px 0}
.d .sb i{width:16px;height:4px;border-radius:2px;background:var(--ml-bar)}
.d .nv{display:flex;align-items:center;gap:7px;height:34px;padding:0 12px;font:600 10.5px/1 var(--ml-font);color:var(--ml-ink)}
.d .lg{width:11px;height:11px;border-radius:4px;background:var(--ml-grad)}
.d .sp{flex:1}
.d .bg{appearance:none;border:0;background:none;cursor:pointer;width:24px;height:24px;display:grid;align-content:center;justify-items:center;gap:3.5px;border-radius:8px}
.d .bg i{width:14px;height:1.8px;border-radius:2px;background:var(--ml-ink)}
.d .r{height:6px;margin:8px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .r.t{height:10px;width:58%;background:var(--ml-bar)}
.d .im{position:relative;overflow:hidden;margin:6px 12px;height:58px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:12px;height:12px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}
.d .scrim{position:absolute;inset:0;background:rgba(35,15,10,.34);opacity:0;pointer-events:none;transition:opacity .35s ease}
.d .dr{position:absolute;right:0;top:0;bottom:0;width:72%;padding:40px 12px 0;display:grid;align-content:start;gap:1px;background:var(--ml-bg);box-shadow:-12px 0 32px rgba(35,15,10,.14);transform:translateX(104%);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .dr a{padding:5px 8px;border-radius:9px;font:600 12.5px/1.2 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink);cursor:pointer}
.d .dr a:hover{background:var(--ml-surface)}
.d .dr .cta{margin-top:8px;justify-self:start;padding:8px 13px;border-radius:999px;background:var(--ml-accent);color:#fff;font:600 10.5px/1 var(--ml-font)}
.d .it{opacity:0;transform:translateX(12px);transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .ph.open .scrim{opacity:1;pointer-events:auto}
.d .ph.open .dr{transform:none}
.d .ph.open .it{opacity:1;transform:none;transition-delay:calc(var(--i) * 40ms + 120ms)}
.d .bg{position:relative;z-index:3}
`,
  run: (root) => {
    const ph = root.querySelector('.ph');
    const btn = root.querySelector('.bg');
    const scrim = root.querySelector('.scrim');
    let uu = 0;
    const set = (v) => ph.classList.toggle('open', v);
    btn.addEventListener('click', () => { uu = performance.now() + 2500; set(!ph.classList.contains('open')); });
    scrim.addEventListener('click', () => { uu = performance.now() + 2500; set(false); });
    let on = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > uu) {
        on = !on;
        set(on);
      }
      setTimeout(tick, on ? 2600 : 1500);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build a mobile navigation drawer that slides in from the right. A hamburger button (aria-expanded, aria-controls) toggles a drawer element that covers about 72% of the viewport width, anchored right: 0 and full height, white with a soft left-cast shadow. Behind it a full-screen scrim (rgba(35,15,10,.34)) fades in over 350ms and closes the drawer on click. Move the drawer with transform: translateX(104%) to none over about 600ms using a critically damped spring easing (no overshoot); never animate right or width. Stagger the links in: each starts at opacity 0 and translateX(12px) and gets a transition-delay of index * 40ms plus 120ms. Lock body scroll while open, trap focus inside the drawer, move focus to the first link on open, close on Escape and return focus to the button. Keep the drawer in the DOM with visibility hidden while closed so it is not tabbable. Under prefers-reduced-motion use a plain opacity fade. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'nav-fullscreen',
  cat: 'nav',
  title: 'Full-screen menu',
  sub: 'Overlay wipes in, big links rise',
  html: WIN + `<div class="pg"><div class="nv fs"><i class="lg"></i><b>Northwind</b></div>
<div class="body"><div class="im"></div><p class="r t"></p><p class="r"></p><p class="r m"></p></div>
<div class="ov"><a class="ln"><span style="--i:0"><em>01</em>Work</span></a><a class="ln"><span style="--i:1"><em>02</em>Studio</span></a><a class="ln"><span style="--i:2"><em>03</em>Journal</span></a><a class="ln"><span style="--i:3"><em>04</em>Contact</span></a></div>
<button class="mn" type="button" aria-label="Menu"><span class="lb">Menu</span><span class="hb"><i></i><i></i></span></button></div></div>`,
  css: BASE + `
.d .nv.fs{border-bottom:1px solid var(--ml-line)}
.d .body{padding-top:4px}
.d .ov{position:absolute;inset:0;z-index:3;display:grid;align-content:center;gap:2px;padding:30px 18px 8px;background:var(--ml-grad);clip-path:inset(0 0 100% 0);transition:clip-path 640ms var(--ml-ease)}
.d .pg.open .ov{clip-path:inset(0 0 0 0)}
.d .ln{display:block;overflow:hidden;cursor:pointer;padding:1px 0}
.d .ln span{display:flex;align-items:baseline;gap:8px;font:600 23px/1.15 var(--ml-font);letter-spacing:-.035em;color:#fff;transform:translateY(110%);transition:transform 560ms var(--ml-ease)}
.d .ln em{font:500 8.5px/1 var(--ml-mono);font-style:normal;opacity:.7;letter-spacing:.06em}
.d .pg.open .ln span{transform:none;transition-delay:calc(var(--i) * 60ms + 160ms)}
.d .mn{position:absolute;right:10px;top:6px;z-index:5;display:flex;align-items:center;gap:6px;padding:5px 9px;border-radius:999px;background:var(--ml-surface);color:var(--ml-ink);font:600 9.5px/1 var(--ml-font);transition:background-color .3s ease,color .3s ease}
.d .hb{position:relative;width:11px;height:8px}
.d .hb i{position:absolute;left:0;right:0;height:1.8px;border-radius:2px;background:currentColor;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .hb i:first-child{top:1px}
.d .hb i:last-child{top:5px}
.d .pg.open .mn{background:rgba(255,255,255,.2);color:#fff}
.d .pg.open .hb i:first-child{transform:translateY(2px) rotate(45deg)}
.d .pg.open .hb i:last-child{transform:translateY(-2px) rotate(-45deg)}
`,
  run: (root) => {
    const pg = root.querySelector('.pg');
    const mn = root.querySelector('.mn');
    const lb = root.querySelector('.lb');
    let uu = 0;
    const set = (v) => { pg.classList.toggle('open', v); lb.textContent = v ? 'Close' : 'Menu'; };
    mn.addEventListener('click', () => { uu = performance.now() + 2500; set(!pg.classList.contains('open')); });
    let on = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > uu) {
        on = !on;
        set(on);
      }
      setTimeout(tick, on ? 2800 : 1500);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build a full-screen overlay menu. A Menu button in the header (aria-expanded, aria-controls) opens an overlay that covers the whole viewport. Reveal the overlay with clip-path: inset(0 0 100% 0) to inset(0 0 0 0) over about 640ms with cubic-bezier(.32,.72,0,1); fill it with your accent color or a deep neutral. Inside, set the main links in very large semibold type (clamp(2.5rem, 9vw, 6rem), tight negative tracking) with a small mono index number beside each. Make each link a line mask: wrap the text in an overflow: hidden block and animate the inner span from translateY(110%) to none with a 60ms stagger per line, starting about 160ms after the overlay begins to open. On close reverse the stagger or simply fade. The button label swaps to Close and the two-line icon morphs into an X. Lock body scroll, move focus to the first link, trap focus, close on Escape. Keep the header button above the overlay. Under prefers-reduced-motion use a simple opacity fade with no line stagger. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'nav-hamburger-morph',
  cat: 'nav',
  title: 'Hamburger to X',
  sub: 'Three lines morph into a cross',
  html: `<div class="row">
<div class="cell"><button class="hm a" type="button" aria-label="Menu"><i></i><i></i><i></i></button><span>Cross</span></div>
<div class="cell"><button class="hm b" type="button" aria-label="Menu"><i></i><i></i><i></i></button><span>Spin</span></div>
<div class="cell"><button class="hm c" type="button" aria-label="Menu"><i></i><i></i><i></i></button><span>Pop</span></div></div>`,
  css: `.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .row{display:flex;gap:6%;align-items:flex-start;justify-content:center;width:100%}
.d .cell{display:grid;justify-items:center;gap:12px}
.d .cell span{font:500 9.5px/1 var(--ml-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ml-muted)}
.d .hm{position:relative;appearance:none;border:0;cursor:pointer;width:62px;height:62px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow);transition:transform var(--ml-spring-dur) var(--ml-spring),background-color .3s ease,box-shadow var(--ml-spring-dur) var(--ml-spring)}
.d .hm:active{transform:scale(.94);transition-duration:90ms}
.d .hm:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .hm i{position:absolute;left:19px;top:30px;width:24px;height:2.4px;margin-top:-1.2px;border-radius:2px;background:var(--ml-ink);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease,background-color .3s ease}
.d .hm i:nth-child(1){transform:translateY(-8px)}
.d .hm i:nth-child(3){transform:translateY(8px)}
.d .hm.open i:nth-child(1){transform:translateY(0) rotate(45deg)}
.d .hm.open i:nth-child(3){transform:translateY(0) rotate(-45deg)}
.d .hm.open i:nth-child(2){opacity:0;transform:scaleX(.2)}
.d .hm.b i{transition-duration:700ms}
.d .hm.b.open{transform:rotate(180deg)}
.d .hm.b.open:active{transform:rotate(180deg) scale(.94)}
.d .hm.b.open i:nth-child(1){transform:translateY(0) rotate(135deg)}
.d .hm.b.open i:nth-child(3){transform:translateY(0) rotate(-135deg)}
.d .hm.c i:nth-child(1){width:24px}
.d .hm.c i:nth-child(2){width:16px;left:19px}
.d .hm.c i:nth-child(3){width:20px}
.d .hm.c.open{background:var(--ml-accent);box-shadow:0 1px 2px rgba(255,68,51,.25),0 10px 22px rgba(255,68,51,.24)}
.d .hm.c.open i{background:#fff;transition-timing-function:var(--ml-bounce);transition-duration:var(--ml-bounce-dur)}
.d .hm.c.open i:nth-child(1),.d .hm.c.open i:nth-child(3){width:24px}
`,
  run: (root) => {
    const btns = [...root.querySelectorAll('.hm')];
    let uu = 0;
    btns.forEach((b) => b.addEventListener('click', () => { uu = performance.now() + 2500; b.classList.toggle('open'); }));
    let on = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > uu) {
        on = !on;
        btns.forEach((b, i) => setTimeout(() => b.classList.toggle('open', on), i * 110));
      }
      setTimeout(tick, 1700);
    };
    setTimeout(tick, 600);
  },
  prompt: `Build an animated hamburger button that morphs into an X. Use a 44px or larger button containing three absolutely positioned 2px lines, each 24px wide and centered. Closed: top line at translateY(-8px), bottom line at translateY(8px), middle line in place. Open (toggle on aria-expanded="true"): the top and bottom lines go to translateY(0) rotate(45deg) and rotate(-45deg), and the middle line fades to opacity 0 while scaling to scaleX(.2). Animate transform and opacity only, with a critically damped spring such as 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 1 100%). Optional variants: rotate the whole button 180deg while the lines cross, or fill the button with your accent color and use a slight overshoot easing for a playful pop. Add a 90ms scale(.94) on :active, a visible :focus-visible ring, an aria-label that switches between Open menu and Close menu, and plain transitions under prefers-reduced-motion. Plain HTML and CSS plus one click handler, no libraries.`,
});

ML.add({
  id: 'nav-island',
  cat: 'nav',
  title: 'Dynamic island nav',
  sub: 'A small pill expands into links',
  html: `<div class="pgx"><div class="im"></div><p class="r t"></p><p class="r"></p><p class="r m"></p><p class="r s"></p></div>
<nav class="isl"><i class="bgi"></i><div class="c1"><span class="dot"></span>Northwind</div><div class="c2"><a>Work</a><a>Docs</a><a>Pricing</a><span class="av"></span></div></nav>`,
  css: `.d{display:block;background:var(--ml-surface)}
.d .pgx{position:absolute;left:12%;right:12%;top:26%;bottom:-10%;padding-top:6px;background:var(--ml-bg);border-radius:14px 14px 0 0;box-shadow:var(--ml-shadow)}
.d .r{height:6px;margin:9px 14px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .r.t{height:10px;width:50%;background:var(--ml-bar)}
.d .im{position:relative;overflow:hidden;margin:20px 14px 10px;height:56px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:13px;height:13px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}
.d .isl{position:absolute;left:50%;top:9%;width:236px;height:46px;margin-left:-118px;display:grid;place-items:center;color:#fff;font:500 11px/1 var(--ml-font)}
.d .bgi{position:absolute;inset:0;border-radius:23px;background:var(--ml-ink);box-shadow:0 10px 24px rgba(35,15,10,.22);clip-path:inset(27% 35% 27% 35% round 99px);transition:clip-path 700ms var(--ml-bounce)}
.d .c1,.d .c2{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:9px;white-space:nowrap;transition:opacity .25s ease}
.d .c1{font-size:9.5px;font-weight:600;gap:5px;transition-delay:.25s}
.d .dot{width:6px;height:6px;border-radius:50%;background:#3DDC84}
.d .c2{opacity:0;gap:15px;padding:0 10px 0 4px}
.d .c2 a{cursor:pointer;opacity:.85}
.d .c2 a:hover{opacity:1}
.d .av{width:22px;height:22px;border-radius:50%;background:var(--ml-grad);margin-left:2px}
.d .isl.open .bgi{clip-path:inset(0 0 0 0 round 23px)}
.d .isl.open .c1{opacity:0;transition-delay:0s}
.d .isl.open .c2{opacity:1;transition-delay:.18s}
`,
  run: (root) => {
    const isl = root.querySelector('.isl');
    let hover = false;
    isl.addEventListener('pointerenter', () => { hover = true; isl.classList.add('open'); });
    isl.addEventListener('pointerleave', () => { hover = false; isl.classList.remove('open'); });
    let on = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        on = !on;
        isl.classList.toggle('open', on);
      }
      setTimeout(tick, on ? 2400 : 1500);
    };
    setTimeout(tick, 600);
  },
  prompt: `Build a Dynamic Island style navigation: a small black pill centered at the top of the page that expands into a full link bar and contracts back. Make the nav a fixed-size box (for example 236px by 46px) and put the black background on a child layer clipped with clip-path. Collapsed: clip-path: inset(27% 35% 27% 35% round 99px), which shows a small pill with just the brand and a status dot. Expanded: clip-path: inset(0 0 0 0 round 23px) with the links, and an avatar. Transition clip-path over about 700ms with a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1.018 66.7%, 1.014 72.2%, 1 100%). Crossfade the two content layers with opacity only: the collapsed label fades out first, the link row fades in about 180ms later. Expand on hover, focus-within and click; contract on pointerleave and blur. Keep links keyboard reachable (make them tabbable only when expanded). Under prefers-reduced-motion swap states with a plain opacity fade. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

ML.add({
  id: 'nav-tab-bar',
  cat: 'nav',
  title: 'Bottom tab bar',
  sub: 'Active pill slides, icon bumps',
  html: `<div class="ph"><div class="sb"><i></i><i></i></div><h5 class="ttl">Home</h5>
<div class="im"></div><p class="r"></p><p class="r m"></p><div class="im"></div>
<div class="tbr"><i class="pl"></i>
<button class="tb on" type="button" aria-label="Home"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/></svg></button>
<button class="tb" type="button" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></button>
<button class="tb" type="button" aria-label="Alerts"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg></button>
<button class="tb" type="button" aria-label="Profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg></button></div></div>`,
  css: `.d{display:block;background:var(--ml-surface)}
.d .ph{position:absolute;left:50%;top:-20%;width:54%;max-width:210px;min-width:158px;height:114%;transform:translateX(-50%);background:var(--ml-bg);border-radius:28px;box-shadow:0 0 0 5px #fff,0 0 0 6px var(--ml-line),var(--ml-shadow-lg);overflow:hidden}
.d .sb{display:flex;justify-content:space-between;padding:10px 16px 0}
.d .sb i{width:16px;height:4px;border-radius:2px;background:var(--ml-bar)}
.d .ttl{margin:44% 14px 6px;font:600 18px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .r{height:6px;margin:8px 14px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.m{width:70%}
.d .im{position:relative;overflow:hidden;margin:8px 14px;height:58px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:12px;height:12px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}
.d .tbr{position:absolute;left:9px;right:9px;bottom:12%;display:flex;padding:4px;border-radius:22px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line)}
.d .pl{position:absolute;left:4px;top:4px;bottom:4px;width:calc((100% - 8px) / 4);border-radius:18px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .tb{position:relative;appearance:none;border:0;background:none;cursor:pointer;flex:1;height:38px;display:grid;place-items:center;color:var(--ml-muted);transition:color .25s ease}
.d .tb svg{width:18px;height:18px;transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .tb.on{color:var(--ml-accent)}
.d .tb.on svg{transform:translateY(-1.5px) scale(1.18)}
.d .tb:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:18px}
`,
  run: (root) => {
    const tabs = [...root.querySelectorAll('.tb')];
    const pl = root.querySelector('.pl');
    const ttl = root.querySelector('.ttl');
    const names = ['Home', 'Search', 'Alerts', 'Profile'];
    let uu = 0;
    const go = (i) => {
      pl.style.transform = 'translateX(' + i * 100 + '%)';
      tabs.forEach((t, n) => t.classList.toggle('on', n === i));
      ttl.textContent = names[i];
    };
    tabs.forEach((t, i) => t.addEventListener('click', () => { uu = performance.now() + 2500; go(i); }));
    let i = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > uu) {
        i = (i + 1) % tabs.length;
        go(i);
      }
      setTimeout(tick, 1300);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a mobile bottom tab bar with a sliding active pill. Make a floating bar pinned to the bottom of the viewport (respect env(safe-area-inset-bottom)), white, border-radius 22px, soft layered shadow, with four equal buttons (icon only or icon plus tiny label) laid out in a flex row. Behind them put one absolutely positioned pill the width of a single tab (calc((100% - padding) / 4)), tinted with a soft version of your accent color. Move it between tabs with transform: translateX(index * 100%) and a slight-overshoot spring such as 594ms linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1.018 66.7%, 1.014 72.2%, 1 100%). The active icon turns your accent color and bumps up with translateY(-1.5px) scale(1.18) on the same spring. Use role="tablist" or a nav with aria-current="page", visible focus rings, 44px minimum hit areas. Never animate left or width. Under prefers-reduced-motion move the pill without the overshoot. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

ML.add({
  id: 'nav-scrollspy',
  cat: 'nav',
  title: 'Scrollspy side nav',
  sub: 'Marker follows the section in view',
  html: WIN + `<div class="pg sp2"><nav class="sn"><i class="mk"></i><a class="on">Overview</a><a>Features</a><a>Pricing</a><a>FAQ</a></nav>
<div class="sc"><section class="sec"><p class="r t"></p><div class="im"></div><p class="r"></p><p class="r m"></p></section>
<section class="sec"><p class="r t"></p><p class="r"></p><p class="r m"></p><div class="im"></div></section>
<section class="sec"><p class="r t"></p><div class="im"></div><p class="r s"></p><p class="r m"></p></section>
<section class="sec"><p class="r t"></p><p class="r"></p><p class="r m"></p><p class="r s"></p></section></div></div></div>`,
  css: BASE + `
.d .pg.sp2{display:flex}
.d .sn{position:relative;flex:none;width:68px;padding:14px 0 0 10px;display:grid;align-content:start;border-right:1px solid var(--ml-line)}
.d .sn a{display:block;height:24px;line-height:24px;padding-left:9px;font:500 9.5px/24px var(--ml-font);color:var(--ml-muted);cursor:pointer;transition:color .25s ease}
.d .sn a.on{color:var(--ml-accent-ink);font-weight:600}
.d .mk{position:absolute;left:9px;top:14px;width:2.5px;height:24px;border-radius:2px;background:var(--ml-accent);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .sp2 .sc{position:relative;inset:auto;flex:1;min-width:0}
.d .sec{height:76cqh;padding-top:12px;border-bottom:1px solid var(--ml-line)}
.d .sec .im{height:48px}
.d .sec:nth-child(odd) .im{background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const items = [...root.querySelectorAll('.sn a')];
    const mk = root.querySelector('.mk');
    const secs = [...root.querySelectorAll('.sec')];
    let uu = 0;
    const yu = () => { uu = performance.now() + 2500; };
    ['wheel', 'pointerdown', 'touchstart'].forEach((n) => sc.addEventListener(n, yu, { passive: true }));
    const spy = () => {
      const y = sc.scrollTop + sc.clientHeight * 0.4;
      let c = 0;
      secs.forEach((s, i) => { if (s.offsetTop <= y) c = i; });
      items.forEach((a, i) => a.classList.toggle('on', i === c));
      mk.style.transform = 'translateY(' + c * 24 + 'px)';
    };
    const jump = (i) => sc.scrollTo({ top: Math.min(secs[i].offsetTop, sc.scrollHeight - sc.clientHeight), behavior: 'smooth' });
    sc.addEventListener('scroll', spy, { passive: true });
    items.forEach((a, i) => a.addEventListener('click', () => { yu(); jump(i); }));
    let i = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > uu) {
        i = (i + 1) % secs.length;
        jump(i);
      }
      setTimeout(tick, 1600);
    };
    spy();
    setTimeout(tick, 1100);
  },
  prompt: `Build a scrollspy side navigation for a long documentation or landing page. Put a sticky table of contents beside the content (position: sticky; top: 1.5rem), with one link per section that points at the section id. Track which section is in view with an IntersectionObserver using rootMargin: "-40% 0px -55% 0px" so the active section is the one crossing the upper middle of the viewport, and set aria-current="true" on its link. Style the active link with your accent color and semibold weight, and move a single 2.5px accent marker bar to it with transform: translateY(index * rowHeight) on a critically damped spring such as 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 1 100%). Clicking a link smooth-scrolls to its section (scroll-behavior: smooth, scroll-margin-top matching your header) and updates the hash. Make sure the last short section can still become active near the bottom of the page. Under prefers-reduced-motion use instant scrolling. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'nav-breadcrumb',
  cat: 'nav',
  title: 'Breadcrumb collapse',
  sub: 'Middle crumbs fold into an ellipsis',
  html: `<div class="cd"><nav class="bc" aria-label="Breadcrumb"><a>Home</a><s></s>
<span class="gx cl"><span class="in"><button class="dt" type="button" aria-label="Show full path"><i></i><i></i><i></i></button><s></s></span></span>
<span class="gx mid"><span class="in"><a>Work</a><s></s><a>Atlas</a><s></s><a>Brand</a><s></s></span></span>
<a>Logos</a><s></s><b>v2</b></nav>
<div class="bd"><h5>Logo set</h5><p class="r"></p><p class="r m"></p></div></div>`,
  css: `.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .cd{width:92%;background:var(--ml-bg);border-radius:14px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bc{display:flex;align-items:center;height:40px;padding:0 12px;border-bottom:1px solid var(--ml-line);font-size:11px;white-space:nowrap;color:var(--ml-muted)}
.d .bc a{cursor:pointer;transition:color .2s ease}
.d .bc a:hover{color:var(--ml-ink)}
.d .bc b{font-weight:600;color:var(--ml-ink)}
.d .bc s{flex:none;width:5px;height:5px;margin:0 6px;border-top:1.5px solid var(--ml-bar);border-right:1.5px solid var(--ml-bar);transform:rotate(45deg) scale(.9)}
.d .bc>a,.d .bc>b{flex:none}
.d .gx{flex:none;overflow:hidden;transition:max-width var(--ml-spring-dur) var(--ml-spring),opacity .25s ease}
.d .gx .in{display:flex;align-items:center;white-space:nowrap}
.d .gx.cl{max-width:var(--cw,44px)}
.d .gx.mid{max-width:0;opacity:0}
.d .bc.open .gx.cl{max-width:0;opacity:0}
.d .bc.open .gx.mid{max-width:var(--mw,200px);opacity:1;transition-delay:0s,.1s}
.d .dt{appearance:none;border:0;cursor:pointer;display:flex;align-items:center;gap:2.5px;padding:6px 7px;border-radius:7px;background:var(--ml-surface)}
.d .dt i{width:3px;height:3px;border-radius:50%;background:var(--ml-muted)}
.d .dt:hover{background:var(--ml-accent-soft)}
.d .dt:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
.d .bd{padding:14px 14px 12px}
.d .bd h5{font:600 17px/1 var(--ml-font);letter-spacing:-.03em;margin-bottom:6px}
.d .r{height:6px;margin:9px 0 0;border-radius:3px;background:var(--ml-bar-2)}
.d .r.m{width:68%}
`,
  run: (root) => {
    const bc = root.querySelector('.bc');
    bc.style.setProperty('--mw', bc.querySelector('.mid .in').scrollWidth + 20 + 'px');
    bc.style.setProperty('--cw', bc.querySelector('.cl .in').scrollWidth + 20 + 'px');
    let hover = false;
    bc.addEventListener('pointerenter', () => { hover = true; bc.classList.add('open'); });
    bc.addEventListener('pointerleave', () => { hover = false; bc.classList.remove('open'); });
    let on = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        on = !on;
        bc.classList.toggle('open', on);
      }
      setTimeout(tick, on ? 2200 : 1500);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build a breadcrumb that collapses its middle items into an ellipsis button and expands them on hover or focus. Render the trail as a nav with aria-label="Breadcrumb" and an ordered list, with a small chevron separator drawn in CSS (a rotated 1.5px border corner). Always show the first crumb and the last two. Wrap the middle crumbs in a wrapper with overflow: hidden and animate its max-width from 0 to the measured scrollWidth of its contents (store it in a CSS variable once, and re-measure on resize), and fade the crumbs in with opacity. At the same time collapse the ellipsis button's own wrapper from its width to 0. Use a spring easing such as 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 1 100%). Expand on pointerenter or focus-within of the trail and also on click/Enter of the ellipsis button (aria-label="Show full path"); collapse on leave. The last crumb is plain text with aria-current="page". On narrow screens keep it collapsed by default. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

ML.add({
  id: 'nav-command-palette',
  cat: 'nav',
  title: 'Command palette',
  sub: 'Opens, filters as you type',
  html: WIN + `<div class="pg"><div class="nv cm"><i class="lg"></i><b>Northwind</b><span class="sp"></span><button class="sr" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Search<kbd>Ctrl K</kbd></button></div>
<div class="body"><div class="im"></div><p class="r t"></p><p class="r"></p><p class="r m"></p></div>
<div class="shd"></div>
<div class="cp"><div class="qi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg><input class="q" type="text" placeholder="Type a command" autocomplete="off" spellcheck="false"><kbd>Esc</kbd></div>
<ul class="ls"><i class="sel"></i><li>Open dashboard<kbd>G D</kbd></li><li>Create project<kbd>N</kbd></li><li>Invite teammate<kbd>I</kbd></li><li>Billing settings<kbd>B</kbd></li><li>Switch theme<kbd>T</kbd></li></ul></div></div></div>`,
  css: BASE + `
.d .nv.cm{border-bottom:1px solid var(--ml-line)}
.d .sr{display:flex;align-items:center;gap:5px;padding:5px 6px 5px 8px;border-radius:8px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 9.5px/1 var(--ml-font);color:var(--ml-muted);transition:transform 90ms ease-out}
.d .sr svg{width:10px;height:10px}
.d .sr.press{transform:scale(.94)}
.d kbd{font:500 8px/1 var(--ml-mono);padding:3px 5px;border-radius:5px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .body{padding-top:4px}
.d .shd{position:absolute;inset:0;z-index:3;background:rgba(35,15,10,.22);opacity:0;pointer-events:none;transition:opacity .3s ease}
.d .cp{position:absolute;left:8%;right:8%;top:11%;z-index:4;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);transform-origin:50% 0;transform:translateY(-8px) scale(.95);opacity:0;pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease}
.d .pg.open .shd{opacity:1}
.d .pg.open .cp{transform:none;opacity:1;pointer-events:auto}
.d .qi{display:flex;align-items:center;gap:7px;height:34px;padding:0 10px;border-bottom:1px solid var(--ml-line);color:var(--ml-muted)}
.d .qi svg{flex:none;width:12px;height:12px}
.d .q{flex:1;min-width:0;border:0;outline:0;background:none;font:500 11px/1 var(--ml-font);color:var(--ml-ink)}
.d .q::placeholder{color:var(--ml-muted)}
.d .ls{position:relative;list-style:none;padding:5px}
.d .ls li{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;height:24px;padding:0 8px;border-radius:7px;font-size:10.5px;color:var(--ml-ink);cursor:pointer}
.d .ls li.hide{display:none}
.d .sel{position:absolute;left:5px;right:5px;top:5px;height:24px;border-radius:7px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease}
.d .sel.go{background:var(--ml-accent)}
.d .ls li.cur{color:var(--ml-accent-ink);font-weight:600}
.d .sel.go~li.cur{color:#fff}
.d .sel.go~li.cur kbd{color:var(--ml-accent-ink)}
`,
  run: (root) => {
    const pg = root.querySelector('.pg');
    const q = root.querySelector('.q');
    const sr = root.querySelector('.sr');
    const sel = root.querySelector('.sel');
    const items = [...root.querySelectorAll('.ls li')];
    let idx = 0;
    let uu = 0;
    const vis = () => items.filter((l) => !l.classList.contains('hide'));
    const paint = () => {
      const v = vis();
      if (idx >= v.length) idx = Math.max(0, v.length - 1);
      items.forEach((l) => l.classList.remove('cur'));
      sel.style.opacity = v.length ? 1 : 0;
      if (v.length) {
        v[idx].classList.add('cur');
        sel.style.transform = 'translateY(' + idx * 24 + 'px)';
      }
    };
    const filter = () => {
      const s = q.value.trim().toLowerCase();
      items.forEach((l) => l.classList.toggle('hide', !!s && !l.firstChild.textContent.toLowerCase().includes(s)));
      idx = 0;
      paint();
    };
    const open = (v) => {
      pg.classList.toggle('open', v);
      sel.classList.remove('go');
      if (!v) { q.value = ''; filter(); }
    };
    q.addEventListener('input', () => { uu = performance.now() + 4000; filter(); });
    q.addEventListener('keydown', (e) => {
      uu = performance.now() + 4000;
      const n = vis().length;
      if (e.key === 'ArrowDown') { idx = (idx + 1) % n; paint(); e.preventDefault(); }
      if (e.key === 'ArrowUp') { idx = (idx - 1 + n) % n; paint(); e.preventDefault(); }
      if (e.key === 'Escape') open(false);
      if (e.key === 'Enter') { sel.classList.add('go'); setTimeout(() => open(false), 350); }
    });
    sr.addEventListener('click', () => { uu = performance.now() + 4000; open(true); q.focus({ preventScroll: true }); });
    root.querySelector('.shd').addEventListener('click', () => open(false));
    items.forEach((l) => l.addEventListener('pointerenter', () => { idx = vis().indexOf(l); paint(); }));
    const text = 'inv';
    const steps = [
      [() => { sr.classList.add('press'); }, 260],
      [() => { sr.classList.remove('press'); open(true); }, 900],
      [() => { idx = 1; paint(); }, 650],
      [() => { idx = 2; paint(); }, 750],
      [() => { q.value = text.slice(0, 1); filter(); }, 330],
      [() => { q.value = text.slice(0, 2); filter(); }, 330],
      [() => { q.value = text.slice(0, 3); filter(); }, 900],
      [() => { sel.classList.add('go'); }, 500],
      [() => { open(false); }, 1500],
    ];
    let s = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (root.dataset.paused || performance.now() < uu) {
        setTimeout(tick, 500);
        return;
      }
      steps[s][0]();
      const d = steps[s][1];
      s = (s + 1) % steps.length;
      setTimeout(tick, d);
    };
    paint();
    setTimeout(tick, 800);
  },
  prompt: `Build a command palette opened with Ctrl K (Cmd K on Mac) and by clicking a Search button in the header. Open it as a centered dialog near the top of the viewport: role="dialog", aria-modal, with a dimmed scrim. The panel is white, border-radius 12px, layered shadow, with a search input row on top (magnifier icon, input, an Esc hint) and a list of commands below, each with a right-aligned keyboard hint in a small mono badge. Animate the open with transform: translateY(-8px) scale(.95) to none and opacity 0 to 1 over about 600ms on a critically damped spring, transform-origin at the top center. Filter the list on input by case-insensitive substring and reset the selection to the first visible result. One highlight element (soft accent tint with a 1px accent hairline) sits behind the selected row and slides with transform: translateY(index * rowHeight) on the same spring. ArrowUp and ArrowDown move the selection (with wraparound), Enter runs it, Escape closes and returns focus to the trigger. Use role="listbox" and aria-activedescendant. Under prefers-reduced-motion fade only. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'nav-dropdown',
  cat: 'nav',
  title: 'Origin-aware dropdown',
  sub: 'Menu scales out of its trigger',
  html: `<div class="hdr"><i class="lg"></i><b>Atlas</b><span class="sp"></span>
<div class="wrap"><button class="trg" type="button" aria-haspopup="menu" aria-expanded="false"><span class="av"></span>Maya R.<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg></button>
<div class="mnu" role="menu"><a role="menuitem">Profile</a><a role="menuitem">Billing</a><a role="menuitem">Team</a><hr><a role="menuitem" class="out">Sign out</a></div></div></div>
<div class="ghost"><p class="r t"></p><p class="r"></p><p class="r m"></p></div>`,
  css: `.d{display:block;background:var(--ml-surface)}
.d .hdr{position:absolute;left:6%;right:6%;top:9%;height:42px;display:flex;align-items:center;gap:8px;padding:0 8px 0 12px;border-radius:13px;background:var(--ml-bg);box-shadow:var(--ml-shadow);z-index:3;font:600 11.5px/1 var(--ml-font)}
.d .lg{width:12px;height:12px;border-radius:4px;background:var(--ml-grad)}
.d .sp{flex:1}
.d .wrap{position:relative}
.d .trg{appearance:none;border:0;cursor:pointer;display:flex;align-items:center;gap:6px;padding:5px 8px 5px 5px;border-radius:999px;background:var(--ml-surface);font:500 10.5px/1 var(--ml-font);color:var(--ml-ink);transition:background-color .25s ease}
.d .trg svg{width:9px;height:9px;color:var(--ml-muted);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .av{width:20px;height:20px;border-radius:50%;background:var(--ml-grad)}
.d .wrap.open .trg{background:var(--ml-accent-soft)}
.d .wrap.open .trg svg{transform:rotate(180deg)}
.d .mnu{position:absolute;right:0;top:calc(100% + 7px);width:128px;padding:5px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);transform-origin:calc(100% - 26px) 0;transform:scale(.82) translateY(-4px);opacity:0;pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .16s ease}
.d .wrap.open .mnu{transform:none;opacity:1;pointer-events:auto}
.d .mnu a{display:block;padding:7px 9px;border-radius:7px;font:500 10.5px/1 var(--ml-font);color:var(--ml-ink);cursor:pointer;transition:background-color .15s ease}
.d .mnu a:hover,.d .mnu a.hl{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .mnu hr{border:0;height:1px;margin:4px 3px;background:var(--ml-line)}
.d .mnu .out{color:#E5302A}
.d .ghost{position:absolute;left:6%;right:6%;top:46%;bottom:-10%;padding-top:10px;border-radius:14px 14px 0 0;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .r{height:6px;margin:9px 14px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.m{width:70%}
.d .r.t{height:10px;width:46%;background:var(--ml-bar)}
`,
  run: (root) => {
    const wrap = root.querySelector('.wrap');
    const trg = root.querySelector('.trg');
    const item = root.querySelectorAll('.mnu a')[1];
    let uu = 0;
    const set = (v) => { wrap.classList.toggle('open', v); trg.setAttribute('aria-expanded', v); item.classList.remove('hl'); };
    trg.addEventListener('click', () => { uu = performance.now() + 2500; set(!wrap.classList.contains('open')); });
    root.addEventListener('pointerdown', (e) => { if (!wrap.contains(e.target)) { uu = performance.now() + 2500; set(false); } });
    let on = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > uu) {
        on = !on;
        set(on);
        if (on) setTimeout(() => { if (wrap.classList.contains('open')) item.classList.add('hl'); }, 900);
      }
      setTimeout(tick, on ? 2500 : 1400);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build an origin-aware dropdown menu: it must scale out of the button that opened it, not from its own center. Wrap a trigger button (aria-haspopup="menu", aria-expanded) and a menu panel in a position: relative container. Place the panel at top: calc(100% + 7px), right-aligned to the trigger, and set its transform-origin to the trigger's position in the panel's own coordinates (for example calc(100% - 26px) 0 so the origin sits under the middle of the button). Closed: transform: scale(.82) translateY(-4px), opacity 0, pointer-events none. Open: transform none, opacity 1. Transition transform over about 600ms on a critically damped spring and opacity over 160ms. Do not animate height. Rotate the trigger chevron 180 degrees when open. Close on outside pointerdown, Escape and Tab-out; open on click, Enter, Space and ArrowDown; ArrowUp/ArrowDown move focus between role="menuitem" links with a soft tinted hover background. Return focus to the trigger on close. Under prefers-reduced-motion fade only. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

ML.add({
  id: 'nav-progress',
  cat: 'nav',
  title: 'Reading progress bar',
  sub: 'A thin bar fills as you scroll',
  html: WIN + `<div class="pg col"><header class="nv pr"><b>Field notes</b><span class="sp"></span><span class="pc">0%</span><i class="trk"><i class="fill"></i></i></header>
<div class="sc"><h5 class="hd">Shipping faster with less</h5>${PAGE(1)}<p class="r"></p><p class="r m"></p><p class="r"></p><p class="r s"></p><p class="r"></p><p class="r m"></p><p class="r"></p><p class="r"></p><p class="r s"></p><p class="r m"></p><p class="r"></p><p class="r"></p><p class="r m"></p><p class="r s"></p><p class="r"></p><p class="r"></p><p class="r m"></p><p class="r"></p><p class="r s"></p><p class="r"></p><p class="r m"></p><p class="r"></p></div></div></div>`,
  css: BASE + `
.d .pg.col{display:flex;flex-direction:column}
.d .nv.pr{position:relative;flex:none;height:34px;background:var(--ml-bg)}
.d .nv.pr .pc{font:600 9px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d .trk{position:absolute;left:0;right:0;bottom:0;height:2.5px;background:var(--ml-bar-2);overflow:hidden}
.d .fill{position:absolute;inset:0;background:var(--ml-grad);transform:scaleX(0);transform-origin:0 50%}
.d .pg.col .sc{position:relative;inset:auto;flex:1}
.d .hd{margin:12px 12px 2px;font:600 15px/1.15 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const fill = root.querySelector('.fill');
    const pc = root.querySelector('.pc');
    let uu = 0;
    const yu = () => { uu = performance.now() + 2500; };
    ['wheel', 'pointerdown', 'touchstart'].forEach((n) => sc.addEventListener(n, yu, { passive: true }));
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const upd = () => {
      const max = Math.max(1, sc.scrollHeight - sc.clientHeight);
      const k = Math.min(1, sc.scrollTop / max);
      fill.style.transform = 'scaleX(' + k.toFixed(4) + ')';
      pc.textContent = Math.round(k * 100) + '%';
    };
    sc.addEventListener('scroll', upd, { passive: true });
    const period = 7000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < uu) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      const k = p < 0.08 ? 0 : p < 0.7 ? ease((p - 0.08) / 0.62) : p < 0.8 ? 1 : 1 - ease((p - 0.8) / 0.2);
      sc.scrollTop = k * max;
    };
    requestAnimationFrame(loop);
  },
  prompt: `Add a reading progress bar to the bottom edge of a sticky article header. Make the header position: sticky; top: 0 and give it a 3px track along its bottom edge with overflow: hidden. Inside the track put a fill element that spans the full track with a gradient of your accent color, transform: scaleX(0) and transform-origin: 0 50%. Where supported, drive it with pure CSS: animation: grow linear both; animation-timeline: scroll(root block) with keyframes from scaleX(0) to scaleX(1). Otherwise add a passive scroll listener, throttled with requestAnimationFrame, that sets scaleX(scrollTop / (scrollHeight - clientHeight)) on the fill. Measure against the article element rather than the whole page if the footer is long. Optionally show a small tabular-number percentage next to the title. Add role="progressbar" with aria-valuenow only if you expose it to assistive tech, and never rely on the bar alone to convey anything. Animate transform only. Under prefers-reduced-motion keep the bar but drop any easing. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'nav-announcement',
  cat: 'nav',
  title: 'Announcement bar dismiss',
  sub: 'Bar slides away, nav moves up',
  html: WIN + `<div class="pg col"><div class="ann"><div class="ai"><span class="tag">New</span><span class="tx">Sync 2.0 is live</span><span class="ln">Learn more</span><button class="x" type="button" aria-label="Dismiss"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6L6 18"/></svg></button></div></div>
<div class="nv an"><i class="lg"></i><b>Northwind</b><span class="sp"></span><span>Pricing</span><span class="cta">Start</span></div>
<div class="body"><div class="im"></div><p class="r t"></p><p class="r"></p><p class="r m"></p><p class="r s"></p></div></div></div>`,
  css: BASE + `
.d .pg.col{display:flex;flex-direction:column}
.d .ann{display:grid;grid-template-rows:1fr;transition:grid-template-rows var(--ml-spring-dur) var(--ml-spring)}
.d .ann.off{grid-template-rows:0fr}
.d .ai{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;min-height:0;overflow:hidden;padding:0 30px;height:28px;background:var(--ml-grad);color:#fff;font:500 9.5px/1 var(--ml-font);white-space:nowrap;transition:opacity .25s ease}
.d .ann.off .ai{opacity:0}
.d .tag{padding:3px 6px;border-radius:999px;background:rgba(255,255,255,.22);font-weight:600;font-size:8.5px}
.d .ln{text-decoration:underline;text-underline-offset:2px;opacity:.9}
.d .x{position:absolute;right:7px;top:50%;margin-top:-9px;width:18px;height:18px;display:grid;place-items:center;border-radius:6px;color:#fff;transition:transform 90ms ease-out,background-color .2s ease}
.d .x svg{width:10px;height:10px}
.d .x:hover,.d .x.press{background:rgba(255,255,255,.22)}
.d .x.press{transform:scale(.88)}
.d .nv.an{flex:none;border-bottom:1px solid var(--ml-line)}
.d .body{padding-top:6px}
`,
  run: (root) => {
    const ann = root.querySelector('.ann');
    const x = root.querySelector('.x');
    let uu = 0;
    x.addEventListener('click', () => { uu = performance.now() + 3200; ann.classList.add('off'); });
    let step = 0;
    const tick = () => {
      if (!root.isConnected) return;
      let d = 900;
      if (!root.dataset.paused && performance.now() > uu) {
        if (step === 0) { x.classList.add('press'); d = 220; }
        else if (step === 1) { x.classList.remove('press'); ann.classList.add('off'); d = 2100; }
        else { ann.classList.remove('off'); d = 2000; }
        step = (step + 1) % 3;
      } else if (performance.now() > uu && ann.classList.contains('off')) {
        step = 2;
      }
      setTimeout(tick, d);
    };
    setTimeout(tick, 1500);
  },
  prompt: `Build a dismissible announcement bar above the site header where the header and page move up to fill the space when it is dismissed. Wrap the bar in a grid container with grid-template-rows: 1fr and give the inner element min-height: 0; overflow: hidden. Dismissing sets grid-template-rows: 0fr, transitioned over about 600ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 1 100%), while the contents fade with opacity over 250ms. Because the bar's row collapses, the nav and everything under it glide up with no layout measuring. Style the bar with an accent gradient, a small pill tag, a message, an underlined link and a 18px close button on the right with a 90ms press scale. Persist the dismissal in localStorage (guard access with try/catch) and set the initial state before first paint so it never flashes. If the header is sticky, set its top offset from a CSS variable that you also collapse. Give the close button an aria-label and make the region a role="region" with an accessible name. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

ML.add({
  id: 'nav-sidebar-rail',
  cat: 'nav',
  title: 'Sidebar to icon rail',
  sub: 'App sidebar folds to icons and back',
  html: WIN + `<div class="app"><aside class="side"><div class="sh"><i class="lg"></i><b>Atlas</b></div>
<a class="si on">${SVG('<path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/>')}<span>Home</span></a>
<a class="si">${SVG('<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>')}<span>Projects</span></a>
<a class="si">${SVG('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/>')}<span>Team</span></a>
<a class="si">${SVG('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>')}<span>Settings</span></a>
<button class="tg" type="button" aria-label="Collapse sidebar">${SVG('<path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"/>')}</button></aside>
<main class="mn"><p class="r t"></p><div class="gr"><div class="tl"></div><div class="tl"></div><div class="tl"></div><div class="tl"></div></div><p class="r"></p><p class="r m"></p></main></div></div>`,
  css: BASE + `
.d .app{flex:1;min-height:0;display:grid;grid-template-columns:104px 1fr;transition:grid-template-columns var(--ml-spring-dur) var(--ml-spring)}
.d .app.rail{grid-template-columns:38px 1fr}
.d .side{position:relative;min-width:0;overflow:hidden;display:flex;flex-direction:column;gap:2px;padding:8px 5px;background:var(--ml-surface);border-right:1px solid var(--ml-line)}
.d .sh{display:flex;align-items:center;gap:7px;height:22px;padding:0 5px;margin-bottom:6px;white-space:nowrap;font:600 11px/1 var(--ml-font)}
.d .si{display:flex;align-items:center;gap:8px;height:26px;padding:0 6px;border-radius:8px;white-space:nowrap;color:var(--ml-ink-2);font:500 10.5px/1 var(--ml-font);cursor:pointer;transition:background-color .2s ease}
.d .si svg{flex:none;width:14px;height:14px}
.d .si.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .si span,.d .sh b{transition:opacity .2s ease .08s}
.d .app.rail .si span,.d .app.rail .sh b{opacity:0;transition-delay:0s}
.d .tg{appearance:none;border:0;cursor:pointer;margin-top:auto;height:24px;display:flex;align-items:center;padding:0 6px;border-radius:8px;color:var(--ml-muted)}
.d .tg:hover{background:var(--ml-bg)}
.d .tg svg{width:14px;height:14px;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .app.rail .tg svg{transform:rotate(180deg)}
.d .mn{min-width:0;padding:10px 10px 0}
.d .mn .r{margin:0 0 9px}
.d .gr{display:grid;grid-template-columns:repeat(auto-fit,minmax(48px,1fr));gap:7px;margin:12px 0 12px}
.d .tl{height:38px;border-radius:9px;background:var(--ml-surface);border:1px solid var(--ml-line)}
.d .tl:first-child{background:var(--ml-accent-soft);border-color:var(--ml-accent-line)}
`,
  run: (root) => {
    const app = root.querySelector('.app');
    const tg = root.querySelector('.tg');
    let uu = 0;
    tg.addEventListener('click', () => { uu = performance.now() + 2500; app.classList.toggle('rail'); });
    let on = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > uu) {
        on = !on;
        app.classList.toggle('rail', on);
      }
      setTimeout(tick, 2200);
    };
    setTimeout(tick, 1000);
  },
  prompt: `Build a collapsible app sidebar that folds into an icon rail. Lay the app out as a CSS grid: grid-template-columns: 240px 1fr, and collapse the sidebar to a 64px rail by switching to 64px 1fr; transition grid-template-columns over about 600ms on a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 1 100%). The sidebar has min-width: 0 and overflow: hidden; every item is icon plus label with white-space: nowrap and icon padding chosen so the icon's center sits at the rail's center, so icons never move while the column resizes. Fade labels out with opacity (no delay when collapsing, a short delay when expanding) and rotate the double-chevron toggle 180 degrees. The main area simply reflows, so cards re-flow with auto-fit grid. Give the rail items title attributes or tooltips, aria-expanded on the toggle button, a keyboard shortcut such as Cmd B, and remember the state in localStorage with try/catch. Under prefers-reduced-motion switch instantly. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'nav-segmented',
  cat: 'nav',
  title: 'Segmented section switch',
  sub: 'Thumb slides, panels swap below',
  html: WIN + `<div class="pg seg"><div class="sg" role="tablist"><i class="th"></i><button class="on" type="button" role="tab">Overview</button><button type="button" role="tab">Activity</button><button type="button" role="tab">Team</button></div>
<div class="pn"><section class="p on"><div class="st"><div><b>2.4k</b><span class="r"></span></div><div><b>98%</b><span class="r"></span></div><div><b>12</b><span class="r"></span></div></div><div class="ch"><i style="--h:40%"></i><i style="--h:62%"></i><i style="--h:48%"></i><i style="--h:80%"></i><i style="--h:58%"></i><i style="--h:92%"></i><i style="--h:70%"></i></div></section>
<section class="p"><div class="rw"><i></i><p class="r m"></p></div><div class="rw"><i></i><p class="r"></p></div><div class="rw"><i></i><p class="r s"></p></div><div class="rw"><i></i><p class="r m"></p></div></section>
<section class="p"><div class="pp"><i></i><span>Maya R.</span></div><div class="pp"><i></i><span>Tomas</span></div><div class="pp"><i></i><span>Priya S.</span></div><div class="pp"><i></i><span>Jonas</span></div></section></div></div></div>`,
  css: BASE + `
.d .pg.seg{padding:10px 12px 0}
.d .sg{position:relative;display:flex;padding:3px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .th{position:absolute;left:3px;top:3px;bottom:3px;width:calc((100% - 6px) / 3);border-radius:8px;background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.12),0 3px 8px rgba(35,15,10,.08);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .sg button{position:relative;flex:1;height:24px;font:500 10px/1 var(--ml-font);color:var(--ml-muted);transition:color .25s ease}
.d .sg button.on{color:var(--ml-accent-ink);font-weight:600}
.d .pn{position:relative;margin-top:12px;height:calc(100% - 46px)}
.d .p{position:absolute;inset:0;opacity:0;transform:translateX(14px);pointer-events:none;transition:opacity .22s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .p.on{opacity:1;transform:none;pointer-events:auto}
.d .p.l{transform:translateX(-14px)}
.d .st{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
.d .st>div{padding:8px;border-radius:10px;background:var(--ml-surface);border:1px solid var(--ml-line)}
.d .st b{display:block;font:600 14px/1 var(--ml-font);letter-spacing:-.03em;margin-bottom:7px}
.d .st .r{display:block;margin:0;width:70%}
.d .ch{display:flex;align-items:flex-end;gap:6px;height:44px;margin-top:12px}
.d .ch i{flex:1;height:var(--h);border-radius:5px 5px 2px 2px;background:var(--ml-accent-line)}
.d .ch i:nth-child(6){background:var(--ml-accent)}
.d .rw{display:flex;align-items:center;gap:9px;padding:7px 4px;border-bottom:1px solid var(--ml-line)}
.d .rw i{flex:none;width:14px;height:14px;border-radius:5px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .rw .r{flex:1;margin:0}
.d .pp{display:inline-flex;align-items:center;gap:6px;width:calc(50% - 4px);margin:0 4px 8px 0;padding:6px;border-radius:10px;background:var(--ml-surface);font-size:10px}
.d .pp i{width:18px;height:18px;border-radius:50%;background:var(--ml-grad)}
.d .pp:nth-child(2) i{background:var(--ml-accent-line)}
.d .pp:nth-child(3) i{background:var(--ml-accent-2)}
.d .pp:nth-child(4) i{background:var(--ml-bar)}
`,
  run: (root) => {
    const btns = [...root.querySelectorAll('.sg button')];
    const panels = [...root.querySelectorAll('.p')];
    const th = root.querySelector('.th');
    let cur = 0;
    let uu = 0;
    const go = (i) => {
      th.style.transform = 'translateX(' + i * 100 + '%)';
      btns.forEach((b, n) => b.classList.toggle('on', n === i));
      panels.forEach((p, n) => {
        p.classList.toggle('on', n === i);
        p.classList.toggle('l', n < i);
      });
      cur = i;
    };
    btns.forEach((b, i) => b.addEventListener('click', () => { uu = performance.now() + 2500; go(i); }));
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > uu) go((cur + 1) % btns.length);
      setTimeout(tick, 1900);
    };
    setTimeout(tick, 1200);
  },
  prompt: `Build a segmented control that switches the section of the page below it. Use a pill-shaped track (surface tint, 1px inset hairline, 3px padding) with role="tablist" and N equal buttons with role="tab", aria-selected and aria-controls. Put one absolutely positioned thumb (white, radius 8px, soft shadow, width calc((100% - 6px) / N)) behind the buttons and slide it with transform: translateX(index * 100%) on a critically damped spring such as 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 1 100%). The panels below are stacked in one grid cell; the active one is opacity 1 and none, the others opacity 0 with translateX(14px) when they are ahead and translateX(-14px) when they are behind, so content slides in the direction of travel. Inactive panels get pointer-events: none and inert or hidden once the transition ends. Support ArrowLeft and ArrowRight with roving tabindex, Home and End, and keep the selected tab in the URL hash if the sections are bookmarkable. Under prefers-reduced-motion cross-fade only. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

ML.add({
  id: 'nav-dock',
  cat: 'nav',
  title: 'Magnifying dock',
  sub: 'Icons swell as the pointer passes',
  html: `<div class="dock"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8v9a2 2 0 0 1-2 2h-4v-7H9v7H5a2 2 0 0 1-2-2z"/></svg></span>
<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></span>
<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></span>
<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg></span>
<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg></span>
<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></span><i class="pb"></i></div><i class="cur"></i>`,
  css: `.d{display:block;background:linear-gradient(180deg,var(--ml-surface),var(--ml-accent-soft))}
.d .dock{position:absolute;left:50%;bottom:14%;transform:translateX(-50%);display:flex;align-items:flex-end;gap:6px}
.d .pb{position:absolute;left:50%;bottom:-8px;width:0;height:0;border-radius:22px;background:rgba(255,255,255,.78);box-shadow:0 0 0 1px rgba(255,255,255,.9),var(--ml-shadow-lg);transform:translateX(-50%);pointer-events:none;z-index:0}
.d .ic{position:relative;z-index:1;flex:none;display:grid;place-items:center;width:26px;height:26px;border-radius:9px;background:var(--ml-bg);color:var(--ml-accent-ink);box-shadow:0 1px 2px rgba(35,15,10,.1),0 3px 8px rgba(35,15,10,.08);transform-origin:50% 100%;will-change:transform}
.d .ic svg{width:55%;height:55%}
.d .ic:nth-child(2n){background:var(--ml-accent-soft)}
.d .ic:nth-child(3){background:var(--ml-grad);color:#fff}
.d .cur{position:absolute;left:0;top:0;width:16px;height:16px;margin:-8px 0 0 -8px;border-radius:50%;background:var(--ml-accent-soft);border:1.5px solid var(--ml-accent-2);pointer-events:none;transition:opacity .25s ease}
.d.real .cur{opacity:0}
`,
  run: (root) => {
    const dock = root.querySelector('.dock');
    const pb = root.querySelector('.pb');
    const cur = root.querySelector('.cur');
    const icons = [...root.querySelectorAll('.ic')];
    const S = icons.map(() => 1);
    let real = false;
    let px = 0;
    let t = 0;
    root.addEventListener('pointerenter', () => { real = true; root.classList.add('real'); });
    root.addEventListener('pointerleave', () => { real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', (e) => { px = e.clientX - dock.getBoundingClientRect().left; });
    const frame = () => {
      if (!root.isConnected) return;
      requestAnimationFrame(frame);
      if (root.dataset.paused) return;
      const dw = dock.offsetWidth;
      const base = icons.map((ic) => ic.offsetLeft + ic.offsetWidth / 2);
      const w = icons[0].offsetWidth;
      const gap = 6;
      if (!real) {
        t += 0.011;
        px = dw / 2 + (dw / 2) * 0.92 * Math.sin(t);
      }
      const sig = w * 1.4;
      icons.forEach((_, i) => {
        const d = (base[i] - px) / sig;
        const target = 1 + 0.65 * Math.exp(-d * d);
        S[i] += (target - S[i]) * 0.28;
      });
      const total = S.reduce((a, s) => a + s * w, 0) + gap * (icons.length - 1);
      const baseTotal = w * icons.length + gap * (icons.length - 1);
      let left = (baseTotal - total) / 2 + (dw - baseTotal) / 2;
      icons.forEach((ic, i) => {
        const cx = left + (S[i] * w) / 2;
        const dx = cx - base[i];
        ic.style.transform = 'translateX(' + dx.toFixed(2) + 'px) scale(' + S[i].toFixed(3) + ')';
        left += S[i] * w + gap;
      });
      pb.style.width = (total + 20).toFixed(1) + 'px';
      pb.style.height = (w * Math.max(...S) + 16).toFixed(1) + 'px';
      const r = root.getBoundingClientRect();
      const dr = dock.getBoundingClientRect();
      cur.style.transform = 'translate(' + (px + dr.left - r.left).toFixed(1) + 'px,' + (dr.top - r.top + 6).toFixed(1) + 'px)';
    };
    requestAnimationFrame(frame);
  },
  prompt: `Build a macOS-style magnifying dock. Lay the icons out in a flex row with the frosted pill (rgba(255,255,255,.78), radius 22px, layered shadow) as a separate absolutely positioned element behind them, 26px rounded-square tiles with a 55% inline SVG glyph, aligned to the bottom, with transform-origin: 50% 100% so tiles grow upward. On pointermove over the dock compute each tile's scale from its distance to the pointer with a gaussian: scale = 1 + 0.65 * exp(-(distance / sigma)^2), sigma about 1.4 tile widths. Smooth each scale toward its target each frame in a requestAnimationFrame loop (scale += (target - scale) * 0.28) so it feels springy and settles on pointerleave. To make neighbors make room, recompute the row layout from the scaled widths and apply a matching translateX to every tile (new center minus original center), so the dock grows from the middle like the real one. Size the pill behind the tiles from the same scaled widths (sum of scaled widths + gaps + padding) and from the tallest scaled tile, so every tile stays inside it at peak magnification. Animate transform only, with will-change: transform. Show tile labels in a small tooltip on hover or focus. Make each tile a focusable link or button; on keyboard focus magnify the focused tile to its peak. Disable the effect on touch devices and under prefers-reduced-motion. Plain HTML, CSS and JS, no libraries.`,
});

})();
