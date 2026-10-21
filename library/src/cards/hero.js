// Hero section cards. Each is a miniature website hero.
(() => {
const win = (inner, cls = '') =>
  `<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div><div class="pg ${cls}">${inner}</div></div>`;
const NV = `<div class="nv"><b></b><span></span><span></span><span></span></div>`;
const ic = (p) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const WIN = `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{width:88%;height:88%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line);flex:none}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:40%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .pg{position:relative;flex:1;overflow:hidden;background:var(--ml-bg)}
.d .nv{position:absolute;top:0;left:0;right:0;z-index:3;display:flex;align-items:center;gap:6px;padding:8px 10px}
.d .nv b{width:10px;height:10px;border-radius:3px;background:var(--ml-accent)}
.d .nv span{width:14px;height:4px;border-radius:2px;background:var(--ml-bar)}
.d .nv span:first-of-type{margin-left:auto}
.d .cta{height:15px;width:54px;border-radius:999px;background:var(--ml-grad);box-shadow:0 4px 10px rgba(255,68,51,.25)}
.d .b{height:5px;border-radius:3px;background:var(--ml-bar)}
.d .b.s{width:40%}
.d .b.m{width:66%}
.d .hd{font:700 19px/1.08 var(--ml-font);letter-spacing:-.035em;color:var(--ml-ink)}
.d .ac{color:var(--ml-accent)}
`;
const RM = ' Add a prefers-reduced-motion fallback that shows the final state with no movement. Plain HTML, CSS and JS, no libraries.';

// 1
ML.add({
  id: 'hero-split-reveal',
  cat: 'hero',
  title: 'Split headline reveal',
  sub: 'Headline lines rise out of a mask',
  html: win(`${NV}<div class="c">
<div class="ln"><span style="--d:0s">Design that</span></div>
<div class="ln"><span style="--d:.13s">moves people,</span></div>
<div class="ln"><span class="ac" style="--d:.26s">not pixels.</span></div>
<div class="fd" style="margin-top:9px"><div class="b m"></div></div>
<div class="fd" style="margin-top:8px;animation-delay:.6s"><div class="cta"></div></div></div>`),
  css: `${WIN}
.d .c{position:absolute;inset:0;padding-top:10px;display:flex;flex-direction:column;align-items:center;justify-content:center}
.d .ln{overflow:hidden;padding:1px 6px 4px;font:700 20px/1.08 var(--ml-font);letter-spacing:-.035em}
.d .ln span{display:block;animation:rise 5s var(--ml-ease) infinite both;animation-delay:var(--d)}
.d .fd{width:56%;display:flex;justify-content:center;animation:fd 5s var(--ml-ease) infinite both;animation-delay:.45s}
.d .fd .b{width:100%}
@keyframes rise{0%,3%{transform:translateY(115%)}16%,80%{transform:none}93%,100%{transform:translateY(-115%)}}
@keyframes fd{0%,10%{opacity:0;transform:translateY(8px)}24%,80%{opacity:1;transform:none}92%,100%{opacity:0}}
`,
  prompt: `Build a hero headline that reveals line by line. Split the h1 into one block per visual line and wrap each line's text in a span inside an overflow: hidden wrapper (add a few px of bottom padding so descenders are not clipped). Start each span at transform: translateY(110%) and animate to none, so the text appears to rise out of a mask. Stagger the lines by 120ms using a CSS custom property per line (animation-delay: calc(var(--i) * 120ms)). Use a critically damped spring easing, for example a linear() curve that settles in about 700ms, or cubic-bezier(.32,.72,0,1) over 800ms. Fade the subcopy and CTA in after the last line, about 300ms later. Trigger it on page load or when the hero enters the viewport with an IntersectionObserver. Animate only transform and opacity. Keep the real text in the DOM and give the h1 an aria-label if you split by JS.${RM}`,
});

// 2
ML.add({
  id: 'hero-blur-words',
  cat: 'hero',
  title: 'Blur-in words',
  sub: 'Each word sharpens in, one by one',
  html: win(`${NV}<div class="c"><div class="hd">${'Work that feels effortless'
    .split(' ')
    .map((w, i) => `<span class="w" style="--d:${(i * 0.14).toFixed(2)}s">${w}</span>`)
    .join(' ')}</div>
<div class="sb"><div class="b m"></div><div class="b s"></div></div><div class="cta"></div></div>`),
  css: `${WIN}
.d .c{position:absolute;inset:0;padding:14px 12% 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center}
.d .w{display:inline-block;animation:bw 5.2s var(--ml-ease) infinite both;animation-delay:var(--d)}
.d .w:last-of-type{color:var(--ml-accent)}
.d .sb{width:70%;display:flex;flex-direction:column;align-items:center;gap:4px;animation:bw 5.2s var(--ml-ease) infinite both;animation-delay:.9s}
.d .sb .b{width:100%}
.d .sb .b.s{width:60%}
.d .cta{animation:bw 5.2s var(--ml-ease) infinite both;animation-delay:1.05s}
@keyframes bw{0%,4%{opacity:0;filter:blur(9px);transform:translateY(5px)}20%,80%{opacity:1;filter:blur(0);transform:none}93%,100%{opacity:0;filter:blur(7px)}}
`,
  prompt: `Build a hero headline where each word fades in from a blur. Split the h1 into word spans (display: inline-block, keep a normal space between them) and animate each from opacity: 0; filter: blur(10px); transform: translateY(6px) to opacity: 1; filter: blur(0); transform: none over about 700ms with cubic-bezier(.32,.72,0,1). Stagger each word by 70-140ms using a --i custom property in animation-delay. Fade the subcopy and button after the final word. Run it on load or when the hero scrolls into view with an IntersectionObserver, then remove will-change. Keep blur radius under 12px and only blur short headline text, never full-screen layers. Keep the original text readable to screen readers (aria-label on the h1 if split by script).${RM}`,
});

// 3
ML.add({
  id: 'hero-product-float',
  cat: 'hero',
  title: 'Product float',
  sub: 'App mockup floats over a soft shadow',
  html: win(`${NV}<div class="row"><div class="tx"><div class="hd">Your day, <span class="ac">organized</span></div><div class="b m"></div><div class="b s"></div><div class="cta"></div></div>
<div class="fl"><div class="dv"><div class="dh"><i></i><i></i><i></i></div><div class="db"><div class="sd"><u></u><u></u><u></u></div><div class="mn"><div class="st"></div><div class="ch"><u style="--h:38%"></u><u style="--h:62%"></u><u style="--h:48%"></u><u style="--h:84%" class="on"></u><u style="--h:56%"></u></div></div></div></div><div class="sh"></div></div></div>`),
  css: `${WIN}
.d .row{position:absolute;inset:0;padding:22px 5% 8px 7%;display:flex;align-items:center;gap:6%}
.d .tx{flex:1.05;display:flex;flex-direction:column;gap:6px}
.d .tx .hd{font-size:17px;margin-bottom:2px}
.d .tx .cta{margin-top:5px}
.d .fl{flex:1;position:relative;height:78%;display:grid;place-items:center}
.d .dv{width:100%;height:86%;background:var(--ml-bg);border-radius:10px;border:1px solid var(--ml-line);box-shadow:var(--ml-shadow-lg);overflow:hidden;display:flex;flex-direction:column;animation:flt 4.4s ease-in-out infinite}
.d .dh{display:flex;gap:3px;padding:5px 6px;border-bottom:1px solid var(--ml-line)}
.d .dh i{width:4px;height:4px;border-radius:50%;background:var(--ml-bar)}
.d .db{flex:1;display:flex}
.d .sd{width:22%;background:var(--ml-surface);padding:6px 5px;display:flex;flex-direction:column;gap:4px}
.d .sd u{height:4px;border-radius:2px;background:var(--ml-bar)}
.d .mn{flex:1;padding:7px;display:flex;flex-direction:column;gap:6px}
.d .st{height:8px;width:55%;border-radius:3px;background:var(--ml-bar)}
.d .ch{flex:1;display:flex;align-items:flex-end;gap:4px}
.d .ch u{flex:1;height:var(--h);border-radius:3px 3px 0 0;background:var(--ml-accent-soft)}
.d .ch u.on{background:var(--ml-grad)}
.d .sh{position:absolute;left:12%;right:12%;bottom:2%;height:8px;border-radius:50%;background:rgba(35,15,10,.22);filter:blur(4px);animation:shd 4.4s ease-in-out infinite}
@keyframes flt{0%,100%{transform:translateY(5px) rotate(-1.2deg)}50%{transform:translateY(-6px) rotate(1deg)}}
@keyframes shd{0%,100%{transform:scaleX(1);opacity:.7}50%{transform:scaleX(.72);opacity:.35}}
`,
  prompt: `Build a hero with a product mockup that floats gently. Put the mockup (an app screenshot in a rounded device frame with a hairline border and a soft layered shadow) on one side of a two-column hero. Animate the frame with a 4-5s ease-in-out infinite loop moving translateY between about +5px and -7px with a tiny rotate of +/-1deg, animating only transform. Add a separate blurred ellipse under it as the shadow and animate it the opposite way: scaleX shrinks and opacity drops while the mockup is high, grows back when it is low. Use filter: blur only on that small static ellipse. Add a subtle pointer parallax by translating the mockup a few px toward the cursor on pointermove, with a spring-like transition. Stack the columns on mobile.${RM}`,
});

// 4
ML.add({
  id: 'hero-tilt-screen',
  cat: 'hero',
  title: 'Tilted screen settles',
  sub: 'Tilted app shot rotates flat on scroll',
  html: win(`<div class="sc"><div class="stk">${NV}<div class="tx"><div class="hd">Your whole team, <span class="ac">one screen</span></div></div><div class="pp"><div class="scr"><div class="dh"><i></i><i></i><i></i></div><div class="db"><div class="sd"><u></u><u></u><u></u><u></u></div><div class="mn"><div class="st"></div><div class="rw"><u></u><u></u><u></u></div><div class="ch"><u style="--h:40%"></u><u style="--h:66%"></u><u style="--h:52%"></u><u style="--h:88%" class="on"></u><u style="--h:60%"></u><u style="--h:74%"></u></div></div></div></div></div></div><div class="sp"></div></div><div class="th"></div>`),
  css: `${WIN}
.d .sc{position:absolute;inset:0;overflow-y:auto;scrollbar-width:none}
.d .sc::-webkit-scrollbar{display:none}
.d .stk{position:sticky;top:0;height:100%;display:flex;flex-direction:column;background:var(--ml-bg)}
.d .sp{height:100%}
.d .tx{padding:24px 10% 0;text-align:center}
.d .tx .hd{font-size:16px}
.d .pp{flex:1;perspective:520px;display:flex;justify-content:center;padding-top:10px}
.d .scr{width:82%;height:92%;transform-origin:50% 0;transform:rotateX(42deg) scale(.9);background:var(--ml-bg);border:1px solid var(--ml-line);border-radius:10px 10px 0 0;box-shadow:var(--ml-shadow-lg);overflow:hidden;display:flex;flex-direction:column}
.d .dh{display:flex;gap:3px;padding:5px 6px;border-bottom:1px solid var(--ml-line)}
.d .dh i{width:4px;height:4px;border-radius:50%;background:var(--ml-bar)}
.d .db{flex:1;display:flex}
.d .sd{width:20%;background:var(--ml-surface);padding:6px 5px;display:flex;flex-direction:column;gap:4px}
.d .sd u{height:4px;border-radius:2px;background:var(--ml-bar)}
.d .mn{flex:1;padding:7px;display:flex;flex-direction:column;gap:6px}
.d .st{height:7px;width:40%;border-radius:3px;background:var(--ml-bar)}
.d .rw{display:flex;gap:5px}
.d .rw u{flex:1;height:16px;border-radius:5px;background:var(--ml-surface);border:1px solid var(--ml-line)}
.d .ch{flex:1;display:flex;align-items:flex-end;gap:4px}
.d .ch u{flex:1;height:var(--h);border-radius:3px 3px 0 0;background:var(--ml-accent-soft)}
.d .ch u.on{background:var(--ml-grad)}
.d .th{position:absolute;right:3px;top:4px;width:3px;height:24px;border-radius:2px;background:var(--ml-bar);z-index:4}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const scr = root.querySelector('.scr');
    const th = root.querySelector('.th');
    if (!sc || !scr) return;
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const period = 6500;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
      } else {
        const p = ((t - start) % period) / period;
        const max = sc.scrollHeight - sc.clientHeight;
        const k = p < 0.12 ? 0 : p < 0.5 ? ease((p - 0.12) / 0.38) : p < 0.66 ? 1 : 1 - ease((p - 0.66) / 0.34);
        sc.scrollTop = k * max;
      }
      const max = sc.scrollHeight - sc.clientHeight;
      const q = max > 0 ? sc.scrollTop / max : 0;
      scr.style.transform = 'rotateX(' + (1 - q) * 42 + 'deg) scale(' + (0.9 + 0.1 * q) + ')';
      if (th) th.style.transform = 'translateY(' + q * (sc.clientHeight - 32) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a hero where a 3D-tilted app screenshot settles flat as the visitor scrolls. Make the hero section tall (about 200vh) with a position: sticky; top: 0; height: 100vh inner stage so the screenshot stays on screen while scroll progress runs. Put the screenshot in a wrapper with perspective: 1200px and set transform-origin: 50% 0 on the image. Compute progress = clamp(scrollY relative to the hero / (heroHeight - viewportHeight), 0, 1) in a passive scroll listener (or animation-timeline: view() where supported) and apply transform: rotateX(calc(42deg * (1 - progress))) scale(calc(.9 + .1 * progress)). Animate only transform. Give the frame a hairline border and layered shadow. Use requestAnimationFrame to batch writes. For prefers-reduced-motion, render the screenshot flat with no scroll link.${RM}`,
});

// 5
ML.add({
  id: 'hero-video-scrim',
  cat: 'hero',
  title: 'Video hero with scrim',
  sub: 'Moving plate, scrim, headline on top',
  html: win(`<div class="vp"><div class="pl"></div><div class="sun"></div><div class="mt m1"></div><div class="mt m2"></div></div><div class="scrim"></div>${NV}
<div class="cp"><div class="hd">See it in motion</div><div class="b m"></div><div class="cta2"></div></div><div class="pr"><u></u></div>`),
  css: `${WIN}
.d .vp{position:absolute;inset:0}
.d .pl{position:absolute;top:0;bottom:0;left:0;width:200%;background:linear-gradient(90deg,#FF4433 0%,#6FB1FF 25%,#FF4433 50%,#6FB1FF 75%,#FF4433 100%);animation:pan 8s linear infinite}
.d .sun{position:absolute;width:30%;aspect-ratio:1;border-radius:50%;right:14%;top:12%;background:rgba(255,255,255,.85);animation:sunr 6s ease-in-out infinite alternate}
.d .mt{position:absolute;left:-10%;width:130%;bottom:0;height:46%;background:rgba(255,255,255,.28);clip-path:polygon(0 100%,0 62%,14% 30%,28% 58%,44% 14%,62% 60%,78% 34%,100% 66%,100% 100%)}
.d .m2{height:32%;background:rgba(255,255,255,.4);animation:mt2 8s ease-in-out infinite alternate}
.d .m1{animation:mt1 11s ease-in-out infinite alternate}
.d .scrim{position:absolute;inset:0;background:linear-gradient(to top,rgba(6,24,66,.7) 0%,rgba(6,24,66,.28) 55%,rgba(6,24,66,.08) 100%)}
.d .nv b{background:#fff}
.d .nv span{background:rgba(255,255,255,.55)}
.d .cp{position:absolute;left:8%;bottom:18%;right:30%;display:flex;flex-direction:column;gap:6px;align-items:flex-start}
.d .cp .hd{color:#fff;font-size:21px}
.d .cp .b{background:rgba(255,255,255,.6);width:75%}
.d .cta2{margin-top:3px;height:16px;width:58px;border-radius:999px;background:#fff;box-shadow:0 4px 12px rgba(0,0,0,.2)}
.d .pr{position:absolute;left:8%;right:8%;bottom:7%;height:3px;border-radius:2px;background:rgba(255,255,255,.3);overflow:hidden}
.d .pr u{display:block;height:100%;background:#fff;transform-origin:0 50%;animation:prog 9s linear infinite}
@keyframes pan{to{transform:translateX(-50%)}}
@keyframes sunr{from{transform:translate(0,0)}to{transform:translate(-30%,10%)}}
@keyframes mt1{from{transform:translateX(0)}to{transform:translateX(-7%)}}
@keyframes mt2{from{transform:translateX(0)}to{transform:translateX(5%)}}
@keyframes prog{from{transform:scaleX(0)}to{transform:scaleX(1)}}
`,
  prompt: `Build a full-bleed video hero with a readability scrim. Put a muted, autoplaying, looping, playsinline <video> (with a poster image) absolutely behind the content with object-fit: cover. Layer a scrim above it: a linear-gradient from rgba(0,0,0,.65) at the bottom to rgba(0,0,0,.1) at the top so white headline text keeps at least 4.5:1 contrast on any frame. Place the headline, one line of subcopy and a primary button bottom-left over the scrim. Add a thin progress line at the bottom that scales from 0 to 1 over the clip length (transform: scaleX). Add a pause/play button for accessibility, pause the video when the hero leaves the viewport (IntersectionObserver) and swap to the poster under prefers-reduced-motion. Keep the video under 3 MB for the web, with a webm and mp4 source.${RM}`,
});

// 6
ML.add({
  id: 'hero-mesh-drift',
  cat: 'hero',
  title: 'Gradient mesh drift',
  sub: 'Soft blue blobs drift behind the text',
  html: win(`<div class="mesh"><i class="k1"></i><i class="k2"></i><i class="k3"></i><i class="k4"></i></div>${NV}<div class="c"><div class="hd">Calm, clear,<br><span class="ac">yours.</span></div><div class="b m"></div><div class="cta"></div></div>`),
  css: `${WIN}
.d .mesh{position:absolute;inset:0;background:#fff}
.d .mesh i{position:absolute;border-radius:50%;width:70%;aspect-ratio:1;will-change:transform}
.d .k1{left:-18%;top:-30%;background:radial-gradient(circle,rgba(255,68,51,.42),rgba(255,68,51,0) 68%);animation:d1 9s ease-in-out infinite alternate}
.d .k2{right:-22%;top:-10%;background:radial-gradient(circle,rgba(79,163,255,.5),rgba(79,163,255,0) 68%);animation:d2 11s ease-in-out infinite alternate}
.d .k3{left:20%;bottom:-48%;background:radial-gradient(circle,rgba(185,212,255,.95),rgba(185,212,255,0) 68%);animation:d3 8s ease-in-out infinite alternate}
.d .k4{right:2%;bottom:-40%;width:50%;background:radial-gradient(circle,rgba(255,68,51,.28),rgba(255,68,51,0) 68%);animation:d4 12s ease-in-out infinite alternate}
.d .c{position:absolute;inset:0;padding-top:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;text-align:center}
.d .c .hd{font-size:23px}
.d .c .b{width:46%;background:rgba(29,29,31,.14)}
@keyframes d1{to{transform:translate(38%,28%) scale(1.15)}}
@keyframes d2{to{transform:translate(-34%,30%) scale(.9)}}
@keyframes d3{to{transform:translate(30%,-34%) scale(1.2)}}
@keyframes d4{to{transform:translate(-42%,-20%) scale(1.1)}}
`,
  prompt: `Build a hero background made of drifting soft gradient blobs. Absolutely position 3-4 circular elements behind the headline, each filled with a radial-gradient from a translucent brand color to fully transparent at about 68% (this gives the soft mesh look with no filter: blur). Use two or three tints of your accent color plus one very light tint on a white page. Animate each blob with its own transform keyframes (translate plus a little scale), 8-12 seconds, ease-in-out, infinite alternate, with different durations so the pattern never visibly repeats. Animate transform only. Put the headline and CTA above with position: relative and keep text contrast above 4.5:1 against the lightest and darkest blob positions. Use overflow: hidden on the hero, set pointer-events: none on the blobs, and stop the animation under prefers-reduced-motion.${RM}`,
});

// 7
ML.add({
  id: 'hero-typewriter',
  cat: 'hero',
  title: 'Typewriter headline',
  sub: 'Last word types, deletes, cycles',
  html: win(`${NV}<div class="c"><div class="hd">Software built for</div><div class="hd tl"><span class="tw"></span></div><div class="b m"></div><div class="cta"></div></div>`),
  css: `${WIN}
.d .c{position:absolute;inset:0;padding-top:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-align:center}
.d .c .hd{font-size:22px}
.d .tl{margin-bottom:8px;color:var(--ml-accent);min-height:1.1em}
.d .tw{display:inline-block;min-height:1em}
.d .tw::after{content:"";display:inline-block;width:2px;height:.9em;margin-left:2px;vertical-align:-.1em;background:var(--ml-accent);animation:cr 1s steps(1) infinite}
.d .c .b{width:50%;margin-bottom:7px}
@keyframes cr{50%{opacity:0}}
`,
  run: (root) => {
    const el = root.querySelector('.tw');
    if (!el) return;
    const words = ['designers', 'founders', 'creators', 'everyone'];
    let w = 0;
    let i = 0;
    let del = false;
    const step = () => {
      if (!root.isConnected) return;
      if (root.dataset.paused) {
        setTimeout(step, 300);
        return;
      }
      const word = words[w];
      if (!del) {
        i++;
        el.textContent = word.slice(0, i);
        if (i === word.length) {
          del = true;
          setTimeout(step, 1300);
          return;
        }
        setTimeout(step, 85);
      } else {
        i--;
        el.textContent = word.slice(0, i);
        if (i === 0) {
          del = false;
          w = (w + 1) % words.length;
          setTimeout(step, 380);
          return;
        }
        setTimeout(step, 42);
      }
    };
    setTimeout(step, 500);
  },
  prompt: `Build a hero headline whose last word types and deletes in a loop. Markup: <h1>Software built for <span class="rotator" aria-hidden="true"></span><span class="sr-only">designers, founders, creators and everyone</span></h1>. In JS keep an array of words, type the current word one character at a time (80-100ms per character), hold it for about 1.3s, delete it faster (40ms per character), pause 350ms, then move to the next word. Use a self-scheduling setTimeout chain, not setInterval, and stop it when the tab is hidden or the hero is offscreen. Render the caret as a ::after pseudo-element (2px wide, accent color) that blinks with animation: blink 1s steps(1) infinite. Reserve the line height with min-height so the layout never jumps. Under prefers-reduced-motion show the first word statically.${RM}`,
});

// 8
ML.add({
  id: 'hero-word-slot',
  cat: 'hero',
  title: 'Rotating word slot',
  sub: 'One word rolls like a slot reel',
  html: win(`${NV}<div class="c"><div class="hd">Launch your</div><div class="hd ln2"><span class="slot"><span class="rl"><b>app</b><b>site</b><b>store</b><b>brand</b><b>app</b></span></span> <span class="td">today.</span></div><div class="b m"></div><div class="cta"></div></div>`),
  css: `${WIN}
.d .c{position:absolute;inset:0;padding-top:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-align:center}
.d .c .hd{font-size:23px}
.d .ln2{display:flex;align-items:center;justify-content:center;gap:6px;margin-bottom:9px}
.d .slot{display:block;height:1.2em;width:3.3em;overflow:hidden;border-radius:8px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .rl{display:block;animation:slot 6.4s var(--ml-ease) infinite}
.d .rl b{display:block;height:1.2em;line-height:1.2em;font-weight:700}
.d .c .b{width:46%;margin-bottom:7px}
@keyframes slot{0%,15%{transform:translateY(0)}22%,37%{transform:translateY(-20%)}44%,59%{transform:translateY(-40%)}66%,81%{transform:translateY(-60%)}88%,100%{transform:translateY(-80%)}}
`,
  prompt: `Build a hero headline with one word that rolls vertically like a slot reel. Wrap the changing word in an inline-block "slot" with height: 1.2em; overflow: hidden and a fixed width equal to the longest word so the sentence does not reflow. Inside, stack the words in a column (each exactly 1.2em tall) and repeat the first word at the end. Animate the column with translateY in steps of -100%/N (N = word count including the repeat): hold each word about 2s, then roll to the next in 500-600ms with cubic-bezier(.32,.72,0,1). After the last roll the repeated first word makes the loop seamless. Optionally add a light accent-colored pill behind the slot. Use aria-label with the full sentence on the h1 and aria-hidden on the reel. Under prefers-reduced-motion show only the first word.${RM}`,
});

// 9
const LOGOS = [
  `<svg viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="currentColor"/><circle cx="8" cy="8" r="3" fill="#fff"/></svg><u style="width:26px"></u>`,
  `<svg viewBox="0 0 16 16"><path d="M8 1.5 15 14H1z" fill="currentColor"/></svg><u style="width:20px"></u>`,
  `<svg viewBox="0 0 16 16"><path d="M8 1 14.5 4.5v7L8 15 1.5 11.5v-7z" fill="currentColor"/></svg><u style="width:30px"></u>`,
  `<svg viewBox="0 0 16 16"><path d="M1 11c2.5-6 4.5-6 7 0s4.5 6 7 0" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/></svg><u style="width:22px"></u>`,
  `<svg viewBox="0 0 16 16"><rect x="1.5" y="1.5" width="6" height="6" rx="1.5" fill="currentColor"/><rect x="8.5" y="8.5" width="6" height="6" rx="1.5" fill="currentColor"/></svg><u style="width:28px"></u>`,
  `<svg viewBox="0 0 16 16"><rect x="1" y="1" width="14" height="14" rx="7" fill="none" stroke="currentColor" stroke-width="3"/></svg><u style="width:18px"></u>`,
];
const logoRow = LOGOS.map((l) => `<span class="lg">${l}</span>`).join('');
ML.add({
  id: 'hero-logo-marquee',
  cat: 'hero',
  title: 'Hero with logo strip',
  sub: 'Logos scroll endlessly under the CTA',
  html: win(`${NV}<div class="c"><div class="hd">Ship faster with <span class="ac">Flowly</span></div><div class="b m"></div><div class="cta"></div></div>
<div class="lw"><div class="lb"></div><div class="mq"><div class="tr">${logoRow}${logoRow}</div></div></div>`),
  css: `${WIN}
.d .c{position:absolute;left:0;right:0;top:0;bottom:30%;padding:18px 10% 0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;text-align:center}
.d .c .b{width:52%}
.d .lw{position:absolute;left:0;right:0;bottom:0;height:30%;border-top:1px solid var(--ml-line);background:var(--ml-surface);display:flex;flex-direction:column;justify-content:center;gap:7px}
.d .lb{height:4px;width:22%;margin:0 auto;border-radius:2px;background:var(--ml-bar)}
.d .mq{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent);mask-image:linear-gradient(90deg,transparent,#000 14%,#000 86%,transparent)}
.d .tr{display:flex;width:max-content;animation:mq 9s linear infinite}
.d .lg{display:flex;align-items:center;gap:5px;margin-right:26px;color:#9FB0C8}
.d .lg svg{width:16px;height:16px}
.d .lg u{height:5px;border-radius:3px;background:currentColor;opacity:.7}
@keyframes mq{to{transform:translateX(-50%)}}
`,
  prompt: `Build a hero with a trusted-by logo marquee along its bottom edge. Put the headline and CTA above, and below them a full-width strip with a small "Trusted by" label and a row of customer logos (SVG, single color, grey-blue at about 60% strength). Make the track an inline flex row with width: max-content that contains the logo set twice, and animate transform: translateX(0) to translateX(-50%) with linear timing, 25-40s infinite, so the loop is seamless. Fade the edges with mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent). Pause on hover and on focus-within (animation-play-state: paused). Give the logos alt text and mark the duplicate set aria-hidden. Under prefers-reduced-motion stop the animation and let the row wrap or scroll horizontally.${RM}`,
});

// 10
ML.add({
  id: 'hero-bento-assemble',
  cat: 'hero',
  title: 'Bento assemble',
  sub: 'Tiles fly in and lock into a grid',
  html: win(`<div class="bn">
<div class="t t1" style="--x:-90%;--y:-60%;--d:0s"><i class="ln1"></i><i class="ln2"></i><i class="ln3"></i></div>
<div class="t t2" style="--x:0%;--y:-120%;--d:.08s"><span class="dn"></span></div>
<div class="t t3" style="--x:90%;--y:-70%;--d:.16s"><div class="bars"><u style="--h:40%"></u><u style="--h:70%"></u><u style="--h:52%"></u><u style="--h:90%"></u><u style="--h:62%"></u></div></div>
<div class="t tc" style="--x:0%;--y:0%;--d:.24s"><div class="hd">One place<br><span class="ac">for it all</span></div></div>
<div class="t t4" style="--x:110%;--y:50%;--d:.32s"><i class="r"></i><i class="r"></i><i class="r"></i><i class="r"></i></div>
<div class="t t5" style="--x:-100%;--y:90%;--d:.4s"><span class="pl"></span></div>
<div class="t t6" style="--x:20%;--y:120%;--d:.48s"><svg viewBox="0 0 100 30" preserveAspectRatio="none"><path d="M0 24 C14 22 20 8 34 12 S56 26 70 14 S90 4 100 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" vector-effect="non-scaling-stroke"/></svg></div>
</div>`),
  css: `${WIN}
.d .bn{position:absolute;inset:8px;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(3,1fr);gap:6px}
.d .t{position:relative;border-radius:10px;background:var(--ml-surface);border:1px solid var(--ml-line);padding:7px;display:flex;flex-direction:column;gap:5px;overflow:hidden;animation:fly 6s var(--ml-ease) infinite both;animation-delay:var(--d)}
.d .t1{grid-column:1;grid-row:1/3;background:var(--ml-grad);border-color:transparent}
.d .t1 i{display:block;height:4px;border-radius:2px;background:rgba(255,255,255,.7)}
.d .t1 .ln2{width:70%}
.d .t1 .ln3{width:45%}
.d .t2{grid-column:2;grid-row:1;align-items:center;justify-content:center}
.d .dn{width:60%;aspect-ratio:1;border-radius:50%;background:conic-gradient(var(--ml-accent) 0 68%,var(--ml-bar) 0);-webkit-mask:radial-gradient(circle,transparent 46%,#000 48%);mask:radial-gradient(circle,transparent 46%,#000 48%)}
.d .t3{grid-column:3/5;grid-row:1}
.d .bars{flex:1;display:flex;align-items:flex-end;gap:5px}
.d .bars u{flex:1;height:var(--h);border-radius:3px;background:var(--ml-accent-line)}
.d .bars u:nth-child(4){background:var(--ml-accent)}
.d .tc{grid-column:2/4;grid-row:2;align-items:center;justify-content:center;text-align:center;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .tc .hd{font-size:14px;line-height:1.1}
.d .t4{grid-column:4;grid-row:2/4}
.d .t4 .r{display:block;height:5px;border-radius:3px;background:var(--ml-bar)}
.d .t4 .r:nth-child(2){width:60%}
.d .t4 .r:nth-child(3){width:80%}
.d .t5{grid-column:1;grid-row:3;background:var(--ml-accent-soft);border-color:var(--ml-accent-line);align-items:center;justify-content:center}
.d .pl{width:16px;height:16px;border-radius:50%;background:var(--ml-accent)}
.d .t6{grid-column:2/4;grid-row:3;color:var(--ml-accent);justify-content:center}
.d .t6 svg{width:100%;height:100%}
@keyframes fly{0%,4%{opacity:0;transform:translate(var(--x),var(--y)) scale(.55) rotate(-6deg)}22%,82%{opacity:1;transform:none}94%,100%{opacity:0;transform:scale(.9)}}
`,
  prompt: `Build a bento-grid hero where the tiles fly in and lock into place around the headline. Use CSS grid (grid-template-columns: repeat(4, 1fr), 3 rows, 8px gap) with a few tiles spanning two rows or columns and the headline tile near the center; mix tile types (a gradient accent tile, a donut, a small bar chart, a list, a sparkline) with 16px radius and a hairline border. Give each tile a start offset in custom properties (--x, --y) pointing away from its slot and animate from opacity: 0; transform: translate(var(--x), var(--y)) scale(.6) to none with a spring easing (about 700ms), staggered 70-90ms per tile. Trigger it once when the hero enters the viewport with an IntersectionObserver; do not loop in production. Animate transform and opacity only. Collapse to two columns on mobile and show the final layout with no motion under prefers-reduced-motion.${RM}`,
});

// 11
ML.add({
  id: 'hero-spotlight',
  cat: 'hero',
  title: 'Cursor spotlight',
  sub: 'A light follows the cursor over dots',
  html: win(`<div class="dots"></div><div class="dots hi"></div>${NV}<div class="c"><div class="hd">Find your <span class="ac">focus</span></div><div class="b m"></div><div class="cta"></div></div>`),
  css: `${WIN}
.d .pg{--x:50%;--y:50%;cursor:crosshair}
.d .dots{position:absolute;inset:0;background-image:radial-gradient(var(--ml-bar) 1.3px,transparent 1.7px);background-size:14px 14px}
.d .hi{background-image:radial-gradient(var(--ml-accent) 1.9px,transparent 2.3px),radial-gradient(circle 80px at var(--x) var(--y),rgba(255,68,51,.12),transparent);background-size:14px 14px,100% 100%;-webkit-mask-image:radial-gradient(circle 84px at var(--x) var(--y),#000 0,transparent 100%);mask-image:radial-gradient(circle 84px at var(--x) var(--y),#000 0,transparent 100%)}
.d .c{position:absolute;inset:0;padding-top:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;text-align:center;pointer-events:none}
.d .c .hd{font-size:23px;text-shadow:0 0 12px #fff,0 0 20px #fff}
.d .c .b{width:42%}
`,
  run: (root) => {
    const pg = root.querySelector('.pg');
    if (!pg) return;
    let until = 0;
    let tx = 0;
    let ty = 0;
    let cx = -1;
    let cy = 0;
    pg.addEventListener('pointermove', (e) => {
      const r = pg.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      until = performance.now() + 2500;
    });
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = pg.offsetWidth;
      const h = pg.offsetHeight;
      if (t >= until) {
        tx = w * (0.5 + 0.36 * Math.sin(t / 1250));
        ty = h * (0.5 + 0.3 * Math.sin(t / 830 + 1));
      }
      if (cx < 0) {
        cx = tx;
        cy = ty;
      }
      cx += (tx - cx) * 0.14;
      cy += (ty - cy) * 0.14;
      pg.style.setProperty('--x', cx.toFixed(1) + 'px');
      pg.style.setProperty('--y', cy.toFixed(1) + 'px');
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a hero where a soft spotlight follows the cursor over a dotted grid. Layer two identical dot grids (background-image: radial-gradient dots on a 16px background-size): a base layer in a pale grey-blue and a top layer in your accent color with larger dots. Mask the top layer with mask-image: radial-gradient(circle 110px at var(--x) var(--y), #000, transparent) so only dots near the cursor light up, and add a faint accent radial-gradient glow at the same point. On pointermove set --x and --y on the hero from clientX/Y minus getBoundingClientRect, but ease toward the target inside a requestAnimationFrame loop (lerp 0.12-0.16) so the light trails smoothly. When the pointer is idle for 2-3s, drive the light along a slow Lissajous path so touch devices still see it. Keep text above with pointer-events: none on the effect layers. Under prefers-reduced-motion keep the light static at center.${RM}`,
});

// 12
ML.add({
  id: 'hero-scroll-shrink',
  cat: 'hero',
  title: 'Shrink into card',
  sub: 'Full-bleed hero scales into a card',
  html: win(`<div class="sc"><div class="stk"><div class="im"><div class="sun"></div><div class="mt"></div><div class="mt m2"></div><div class="ov"><div class="hd">Wide open<br>spaces.</div></div></div><div class="nxt"><div class="b m"></div><div class="b s"></div></div></div><div class="sp"></div></div>${NV}<div class="th"></div>`),
  css: `${WIN}
.d .sc{position:absolute;inset:0;overflow-y:auto;scrollbar-width:none}
.d .sc::-webkit-scrollbar{display:none}
.d .stk{position:sticky;top:0;height:100%;background:var(--ml-bg);overflow:hidden}
.d .sp{height:100%}
.d .im{position:absolute;inset:0;transform-origin:50% 40%;background:linear-gradient(180deg,#FFDCD6 0%,#FFF0EE 70%,#fff 100%);overflow:hidden;will-change:transform}
.d .sun{position:absolute;width:26%;aspect-ratio:1;border-radius:50%;right:16%;top:16%;background:var(--ml-grad)}
.d .mt{position:absolute;left:-5%;width:110%;bottom:0;height:46%;background:var(--ml-accent-line);clip-path:polygon(0 100%,0 56%,16% 26%,30% 54%,46% 10%,64% 56%,80% 30%,100% 62%,100% 100%)}
.d .m2{height:30%;background:var(--ml-bar)}
.d .ov{position:absolute;left:8%;top:30%}
.d .ov .hd{font-size:22px}
.d .nxt{position:absolute;left:12%;right:12%;bottom:8%;display:flex;flex-direction:column;gap:5px;opacity:.9}
.d .th{position:absolute;right:3px;top:4px;width:3px;height:24px;border-radius:2px;background:var(--ml-bar);z-index:4}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const im = root.querySelector('.im');
    const th = root.querySelector('.th');
    if (!sc || !im) return;
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const period = 6500;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
      } else {
        const p = ((t - start) % period) / period;
        const max = sc.scrollHeight - sc.clientHeight;
        const k = p < 0.12 ? 0 : p < 0.5 ? ease((p - 0.12) / 0.38) : p < 0.66 ? 1 : 1 - ease((p - 0.66) / 0.34);
        sc.scrollTop = k * max;
      }
      const max = sc.scrollHeight - sc.clientHeight;
      const q = max > 0 ? sc.scrollTop / max : 0;
      im.style.transform = 'scale(' + (1 - 0.3 * q) + ') translateY(' + -8 * q + '%)';
      im.style.borderRadius = 22 * q + 'px';
      if (th) th.style.transform = 'translateY(' + q * (sc.clientHeight - 32) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a hero where a full-bleed image scales down into a rounded card as the page scrolls. Make the hero container about 180vh tall with a position: sticky; top: 0; height: 100vh stage. Inside, a full-viewport image wrapper uses transform-origin: 50% 40%. Compute progress = clamp(scrolled / (heroHeight - viewportHeight), 0, 1) in a passive scroll listener (or animation-timeline: scroll() where supported) and set transform: scale(calc(1 - .3 * progress)) and border-radius: calc(24px * progress). Fade the headline out by progress .5 and reveal the next section's content underneath in the space the image frees up. Animate transform and opacity (radius changes are paint-only). Batch writes in requestAnimationFrame and fall back to the final card layout under prefers-reduced-motion.${RM}`,
});

// 13
const SHOTS = [
  `<div class="sh0"><div class="a"></div><div class="ch"><u style="--h:40%"></u><u style="--h:70%"></u><u style="--h:55%"></u><u style="--h:92%" class="on"></u><u style="--h:62%"></u></div></div>`,
  `<div class="sh1"><i></i><i></i><i></i><i></i></div>`,
  `<div class="sh2"><u></u><u></u><u></u><u></u><u></u><u></u></div>`,
];
ML.add({
  id: 'hero-stacked-shots',
  cat: 'hero',
  title: 'Stacked screenshots',
  sub: 'Three app screens cycle to the front',
  html: win(`${NV}<div class="row"><div class="tx"><div class="hd">Every view,<br><span class="ac">in reach</span></div><div class="b m"></div><div class="cta"></div></div><div class="stack">${SHOTS.map(
    (s, i) => `<div class="sh" data-p="${i}"><div class="th2"><i></i><i></i><i></i></div>${s}</div>`,
  ).join('')}</div></div>`),
  css: `${WIN}
.d .row{position:absolute;inset:0;padding:22px 4% 8px 7%;display:flex;align-items:center;gap:4%}
.d .tx{flex:.9;display:flex;flex-direction:column;gap:7px}
.d .tx .hd{font-size:17px}
.d .stack{flex:1.15;position:relative;height:84%}
.d .sh{position:absolute;left:8%;top:8%;width:78%;height:78%;background:var(--ml-bg);border:1px solid var(--ml-line);border-radius:9px;box-shadow:var(--ml-shadow);overflow:hidden;transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity .3s ease,z-index 0s .12s}
.d .sh[data-p="0"]{transform:translate(0,0) rotate(0) scale(1);z-index:3}
.d .sh[data-p="1"]{transform:translate(14%,-9%) rotate(6deg) scale(.94);z-index:2}
.d .sh[data-p="2"]{transform:translate(-8%,8%) rotate(-7deg) scale(.9);z-index:1;opacity:.92}
.d .th2{display:flex;gap:3px;padding:5px 6px;border-bottom:1px solid var(--ml-line)}
.d .th2 i{width:4px;height:4px;border-radius:50%;background:var(--ml-bar)}
.d .sh0{height:calc(100% - 15px);padding:7px;display:flex;flex-direction:column;gap:6px}
.d .sh0 .a{height:7px;width:45%;border-radius:3px;background:var(--ml-bar)}
.d .ch{flex:1;display:flex;align-items:flex-end;gap:4px}
.d .ch u{flex:1;height:var(--h);border-radius:3px 3px 0 0;background:var(--ml-accent-soft)}
.d .ch u.on{background:var(--ml-grad)}
.d .sh1{padding:7px;display:flex;flex-direction:column;gap:5px}
.d .sh1 i{display:block;height:14px;border-radius:5px;background:var(--ml-surface);border:1px solid var(--ml-line)}
.d .sh1 i:first-child{background:var(--ml-accent-soft);border-color:var(--ml-accent-line)}
.d .sh2{padding:7px;display:grid;grid-template-columns:1fr 1fr;gap:5px}
.d .sh2 u{height:26px;border-radius:5px;background:var(--ml-bar-2)}
.d .sh2 u:nth-child(2){background:var(--ml-accent-line)}
`,
  run: (root) => {
    const shots = [...root.querySelectorAll('.sh')];
    let k = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        k = (k + 1) % shots.length;
        shots.forEach((s, i) => (s.dataset.p = String((i + shots.length - k) % shots.length)));
      }
      setTimeout(tick, 2100);
    };
    setTimeout(tick, 1500);
  },
  prompt: `Build a hero with three product screenshots fanned in a stack that takes turns coming to the front. Position the three frames absolutely in one container and drive their pose with a data-pos attribute (0 front, 1 and 2 behind): front is translate(0) rotate(0) scale(1); the second is translate(14%, -9%) rotate(6deg) scale(.94); the third is translate(-8%, 8%) rotate(-7deg) scale(.9). Transition transform with a slightly overshooting spring (linear() curve, about 600ms) and give z-index a short delay so the frame goes behind mid-flight. Every 2-3s rotate the data-pos values with a setTimeout chain, and pause on hover or when the hero is offscreen. Make each frame a button-less image with alt text; add previous/next controls and arrow-key support if you show it to users as a carousel. Under prefers-reduced-motion switch frames with a plain opacity crossfade.${RM}`,
});

// 14
ML.add({
  id: 'hero-parallax-layers',
  cat: 'hero',
  title: 'Layered parallax',
  sub: 'Mountains and sun shift at depths',
  html: win(`<div class="sk"></div>
<div class="ly" data-z="0.15"><div class="sun"></div></div>
<div class="ly" data-z="0.35"><div class="mt f"></div></div>
<div class="ly" data-z="0.7"><div class="mt n"></div></div>
<div class="ly" data-z="1.2"><div class="mt c"></div></div>
${NV}<div class="ly" data-z="1.7"><div class="ttl hd">Above it all</div></div>`),
  css: `${WIN}
.d .pg{cursor:grab}
.d .sk{position:absolute;inset:0;background:linear-gradient(180deg,#FFEFEA 0%,#F4F8FF 62%,#fff 100%)}
.d .ly{position:absolute;inset:0 -14%;will-change:transform}
.d .sun{position:absolute;left:66%;top:38%;width:15%;aspect-ratio:1;border-radius:50%;background:var(--ml-grad)}
.d .mt{position:absolute;left:0;right:0;bottom:0;background:var(--ml-bar-2)}
.d .mt.f{height:50%;background:#E3ECF8;clip-path:polygon(0 100%,0 50%,12% 30%,24% 48%,40% 14%,58% 46%,72% 28%,88% 44%,100% 24%,100% 100%)}
.d .mt.n{height:38%;background:var(--ml-bar);clip-path:polygon(0 100%,0 56%,18% 30%,34% 58%,52% 22%,70% 60%,86% 36%,100% 54%,100% 100%)}
.d .mt.c{height:22%;background:var(--ml-accent-line);clip-path:polygon(0 100%,0 54%,20% 20%,40% 58%,62% 12%,82% 52%,100% 30%,100% 100%)}
.d .ttl{position:absolute;left:14%;right:14%;top:15%;text-align:center;font-size:23px;color:var(--ml-ink)}
`,
  run: (root) => {
    const pg = root.querySelector('.pg');
    const layers = [...root.querySelectorAll('.ly')];
    if (!pg || !layers.length) return;
    let until = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;
    pg.addEventListener('pointermove', (e) => {
      const r = pg.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      until = performance.now() + 2500;
    });
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      if (t >= until) {
        tx = Math.sin(t / 1500);
        ty = Math.sin(t / 2300 + 1) * 0.6;
      }
      cx += (tx - cx) * 0.1;
      cy += (ty - cy) * 0.1;
      for (const l of layers) {
        const z = parseFloat(l.dataset.z);
        l.style.transform = 'translate(' + (-cx * z * 9).toFixed(2) + 'px,' + (-cy * z * 3).toFixed(2) + 'px)';
      }
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a layered parallax hero from 4-6 stacked transparent PNG or SVG layers (sky, sun, far mountains, near mountains, foreground, headline). Absolutely position each layer slightly wider than the hero (left/right: -8%) so it can shift without exposing edges, and give each a depth value (0.1 for the sun up to 1.5 for the foreground and text). On pointermove normalize the cursor to -1..1 and, inside a requestAnimationFrame loop, ease the current offset toward the target (lerp 0.1) and set transform: translate3d(-x * depth * 12px, -y * depth * 4px, 0) on each layer. Also add a scroll component (translateY = scrollY * depth * 0.1). When there is no pointer for 2-3s, drive a gentle sine path so touch devices see depth. Animate only transform. Disable the parallax under prefers-reduced-motion, keep the layers stacked statically.${RM}`,
});

// 15
const SCENE = `<div class="sg"><div class="sun"></div><div class="mt"></div><div class="mt m2"></div></div>`;
ML.add({
  id: 'hero-zoom-through',
  cat: 'hero',
  title: 'Zoom through',
  sub: 'Camera dives into a window, new scene',
  html: win(`<div class="b2 scene">${SCENE}<div class="nx hd">Next stop:<br><span class="ac">everywhere.</span></div></div>
<div class="a"><div class="fra">${NV}<div class="tl"><div class="hd">Step inside</div></div><div class="frm">${SCENE}</div><div class="rw"><div class="b s"></div><div class="b m"></div></div></div></div>`),
  css: `${WIN}
.d .b2{position:absolute;inset:0}
.d .sg{position:absolute;inset:0;background:linear-gradient(180deg,#FFDCD6 0%,#FFF0EE 72%,#fff 100%);overflow:hidden}
.d .sg .sun{position:absolute;width:24%;aspect-ratio:1;border-radius:50%;right:18%;top:16%;background:var(--ml-grad)}
.d .sg .mt{position:absolute;left:-4%;width:108%;bottom:0;height:46%;background:var(--ml-accent-line);clip-path:polygon(0 100%,0 56%,16% 26%,30% 54%,46% 10%,64% 56%,80% 30%,100% 62%,100% 100%)}
.d .sg .m2{height:30%;background:var(--ml-bar)}
.d .nx{position:absolute;left:8%;bottom:14%;font-size:21px;animation:nx 6s var(--ml-ease) infinite both}
.d .a{position:absolute;inset:0;background:var(--ml-bg);transform-origin:50% 54%;animation:zin 6s cubic-bezier(.6,0,.3,1) infinite both}
.d .fra{position:absolute;inset:0}
.d .tl{position:absolute;top:16px;left:0;right:0;text-align:center}
.d .tl .hd{font-size:14px}
.d .frm{position:absolute;left:34%;width:32%;aspect-ratio:1.48;top:54%;transform:translateY(-50%);border-radius:6px;overflow:hidden;box-shadow:var(--ml-shadow-lg);border:1px solid var(--ml-line)}
.d .rw{position:absolute;left:0;right:0;bottom:8%;display:flex;flex-direction:column;align-items:center;gap:4px}
.d .rw .b{width:30%}
.d .rw .b.m{width:46%}
@keyframes zin{0%,10%{transform:scale(1);opacity:1}46%{transform:scale(3.05);opacity:1}52%{transform:scale(3.05);opacity:0}90%{transform:scale(3.05);opacity:0}90.1%{transform:scale(1);opacity:0}100%{transform:scale(1);opacity:1}}
@keyframes nx{0%,50%{opacity:0;transform:translateY(8px)}60%,84%{opacity:1;transform:none}92%,100%{opacity:0}}
@media (prefers-reduced-motion: reduce){.d .a{animation:none}}
`,
  prompt: `Build a hero where the camera zooms through a window into the next scene. Stack two layers: the first scene on top, with a framed window in its center that shows a preview of the second scene, and the second scene full-size underneath. Set transform-origin on the first scene to the center of that window and animate transform: scale() from 1 to the ratio (viewport width / window width), about 3x, with an ease-in-out curve like cubic-bezier(.6, 0, .3, 1) over 1.2-1.6s. Once the window fills the screen, fade the first scene out (opacity) to reveal the matching full-size second scene, then animate its headline in. Drive it from scroll (sticky stage, progress mapped to scale) or from a click on the window. Animate transform and opacity only, use will-change: transform briefly, and under prefers-reduced-motion cut straight to the second scene with a short crossfade.${RM}`,
});

// 16
const CH = (s) =>
  s
    .split(' ')
    .map((w) => `<span class="wd">${[...w].map((c, i) => `<span class="ch" style="--d:${(i * 0.05).toFixed(2)}s">${c}</span>`).join('')}</span>`)
    .join(' ');
ML.add({
  id: 'hero-char-stagger',
  cat: 'hero',
  title: 'Character stagger',
  sub: 'Letters drop in on springs, staggered',
  html: win(`${NV}<div class="c"><div class="hd">${CH('Make it')}<br>${CH('move.')}</div><div class="ul"></div><div class="cta"></div></div>`),
  css: `${WIN}
.d .c{position:absolute;inset:0;padding-top:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center}
.d .c .hd{font-size:34px;font-weight:800;line-height:1.02;letter-spacing:-.045em}
.d .wd{display:inline-block;white-space:nowrap}
.d .ch{display:inline-block;animation:cd 5s var(--ml-ease) infinite both;animation-delay:var(--d)}
.d .c .hd br+.wd{color:var(--ml-accent)}
.d .ul{height:3px;width:34%;border-radius:2px;background:var(--ml-grad);transform-origin:0 50%;animation:ul 5s var(--ml-ease) infinite both;animation-delay:.5s}
.d .cta{animation:cf 5s var(--ml-ease) infinite both;animation-delay:.7s}
@keyframes cd{0%,3%{opacity:0;transform:translateY(-130%) rotate(-8deg);animation-timing-function:var(--ml-bounce)}16%,80%{opacity:1;transform:none}92%,100%{opacity:0;transform:translateY(40%)}}
@keyframes ul{0%,12%{transform:scaleX(0)}28%,80%{transform:scaleX(1)}92%,100%{transform:scaleX(0);transform-origin:100% 50%}}
@keyframes cf{0%,14%{opacity:0;transform:translateY(6px)}28%,80%{opacity:1;transform:none}92%,100%{opacity:0}}
`,
  prompt: `Build a hero headline where each letter drops in with a spring, staggered. Split the h1 into words (display: inline-block; white-space: nowrap so lines never break mid-word) and each word into letter spans with a --i index; keep the real text in an aria-label on the h1 and aria-hidden on the spans. Animate each letter from opacity: 0; transform: translateY(-120%) rotate(-8deg) to none using a slightly overshooting spring easing (a linear() curve with a 2% overshoot, about 650ms), delayed by calc(var(--i) * 45ms). Play it once when the hero enters the viewport (IntersectionObserver), then underline the headline with a gradient bar that scales from 0 to 1 on transform: scaleX and fade in the CTA after the last letter lands. Animate only transform and opacity. Under prefers-reduced-motion show the headline immediately.${RM}`,
});

// 17
const OI = [
  ic(`<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>`),
  ic(`<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>`),
  ic(`<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`),
  ic(`<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>`),
  ic(`<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>`),
  ic(`<path d="M12 20V10M18 20V4M6 20v-4"/>`),
  ic(`<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>`),
];
const orbitItems = (icons, ang) => icons.map((s, i) => `<div class="it" style="--a:${ang[i]}deg;--na:${-ang[i]}deg"><i>${s}</i></div>`).join('');
ML.add({
  id: 'hero-orbit',
  cat: 'hero',
  title: 'Orbiting icons',
  sub: 'App icons orbit a central logo',
  html: win(`${NV}<div class="ob"><div class="rg r1">${orbitItems([OI[0], OI[1], OI[2]], [0, 120, 240])}</div><div class="rg r2">${orbitItems([OI[3], OI[4], OI[5], OI[6]], [45, 135, 225, 315])}</div><div class="ctr"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 10 5-10 5L2 7z"/><path d="m2 12 10 5 10-5"/></svg></div></div>`),
  css: `${WIN}
.d .ob{position:absolute;left:50%;top:54%;height:90%;aspect-ratio:1;transform:translate(-50%,-50%)}
.d .rg{position:absolute;border:1px dashed var(--ml-accent-line);border-radius:50%;animation:sp var(--t) linear infinite}
.d .r1{inset:24%;--t:14s}
.d .r2{inset:0;--t:22s;animation-direction:reverse}
.d .it{position:absolute;inset:0;transform:rotate(var(--a))}
.d .it i{position:absolute;left:50%;top:0;width:24px;height:24px;margin:-12px 0 0 -12px;border-radius:8px;background:var(--ml-bg);border:1px solid var(--ml-line);box-shadow:var(--ml-shadow);display:grid;place-items:center;color:var(--ml-accent);animation:cs var(--t) linear infinite}
.d .r2 .it i{animation-direction:reverse}
.d .it svg{width:13px;height:13px}
.d .ctr{position:absolute;left:50%;top:50%;width:15%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:30%;background:var(--ml-grad);display:grid;place-items:center;box-shadow:0 8px 20px rgba(255,68,51,.3)}
.d .ctr svg{width:56%;height:56%}
.d .ctr::after{content:"";position:absolute;inset:0;border-radius:30%;border:2px solid var(--ml-accent);animation:pu 2.6s ease-out infinite}
@keyframes sp{to{transform:rotate(360deg)}}
@keyframes cs{from{transform:rotate(var(--na))}to{transform:rotate(calc(var(--na) - 360deg))}}
@keyframes pu{from{transform:scale(1);opacity:.5}to{transform:scale(2.2);opacity:0}}
`,
  prompt: `Build a hero visual where app icons orbit around a central logo. Make a square container (aspect-ratio: 1) with the logo centered, and two concentric dashed ring elements (inset 0 and inset 24%). Each ring rotates with transform: rotate(360deg) linear infinite, 14s and 22s in opposite directions. Place each icon on its ring by wrapping it in an absolutely positioned layer rotated by its starting angle (transform: rotate(var(--a))) and positioning the icon at left: 50%; top: 0. Counter-rotate every icon with an animation of the same duration and direction that runs from rotate(-angle) to rotate(-angle - 360deg) so the icons stay upright. Give the icons a white rounded tile, hairline border and soft shadow, and add a slow expanding ring pulse behind the logo. Pause on hover if the icons are links. Use real links with accessible names, and stop the motion under prefers-reduced-motion.${RM}`,
});

// 18
const chipIc = (p) => `<s>${ic(p)}</s>`;
ML.add({
  id: 'hero-floating-chips',
  cat: 'hero',
  title: 'Floating UI chips',
  sub: 'Notification chips bob around a headline',
  html: win(`${NV}<div class="c"><div class="hd">Everything,<br><span class="ac">at a glance</span></div><div class="cta"></div></div>
<div class="ck k1">${chipIc(`<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>`)}<span><b>New signup</b>Maya R. joined</span></div>
<div class="ck k2">${chipIc(`<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>`)}<span><b>+24%</b>revenue</span></div>
<div class="ck k3">${chipIc(`<path d="M20 6 9 17l-5-5"/>`)}<span><b>Paid $480</b>Tomas K.</span></div>
<div class="ck k4">${chipIc(`<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>`)}<span><b>3 replies</b>just now</span></div>`),
  css: `${WIN}
.d .c{position:absolute;inset:0;padding-top:6px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;text-align:center}
.d .c .hd{font-size:16px}
.d .ck{position:absolute;display:flex;align-items:center;gap:5px;padding:5px 8px 5px 5px;border-radius:999px;background:var(--ml-bg);border:1px solid var(--ml-line);box-shadow:var(--ml-shadow);font-size:9px;line-height:1.15;color:var(--ml-muted);white-space:nowrap;animation:bob var(--t) ease-in-out infinite alternate;animation-delay:var(--dl)}
.d .ck b{display:block;font-size:10px;color:var(--ml-ink);font-weight:600}
.d .ck s{width:18px;height:18px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent);display:grid;place-items:center}
.d .ck s svg{width:10px;height:10px}
.d .ck span{display:block}
.d .k1{left:4%;top:30px;--t:3.4s;--dl:0s}
.d .k2{right:4%;top:36px;--t:4.1s;--dl:-1.2s}
.d .k3{left:4%;bottom:8px;--t:3.8s;--dl:-2s}
.d .k4{right:4%;bottom:12px;--t:3.1s;--dl:-.6s}
@keyframes bob{from{transform:translateY(4px) rotate(-1.2deg)}to{transform:translateY(-6px) rotate(1.2deg)}}
`,
  prompt: `Build a hero with small UI "chips" that float around the headline: a notification ("New signup - Maya R."), a metric ("+24% revenue"), a payment ("Paid $480") and a message count. Each chip is a pill with a hairline border, soft layered shadow and a small round icon tile in your accent tint, positioned absolutely near a corner of the hero (hide two of them under 640px). Animate each with a gentle bob: @keyframes bob { from { transform: translateY(4px) rotate(-1.2deg) } to { transform: translateY(-6px) rotate(1.2deg) } } with ease-in-out, alternate, infinite, a different duration per chip (3-4.2s) and a negative animation-delay so they are out of phase. Optionally let chips enter with a one-time spring scale-in staggered by 100ms and add a small pointer parallax. Mark the chips aria-hidden since they are decorative, keep the headline and CTA as the real content, and disable the bobbing under prefers-reduced-motion.${RM}`,
});

// 19
ML.add({
  id: 'hero-split-screen',
  cat: 'hero',
  title: 'Split screen reveal',
  sub: 'Image panel wipes in beside the text',
  html: win(`${NV}<div class="row"><div class="tx"><div class="hd">Plan less.<br><span class="ac">Ship more.</span></div><div class="b m"></div><div class="b s"></div><div class="cta"></div></div>
<div class="pn"><div class="img"><div class="sun"></div><div class="mt"></div><div class="mt m2"></div></div></div></div>`),
  css: `${WIN}
.d .row{position:absolute;inset:0;padding:24px 4% 10px 7%;display:flex;align-items:stretch;gap:5%}
.d .tx{flex:1;display:flex;flex-direction:column;justify-content:center;gap:6px;animation:tx 5.5s var(--ml-ease) infinite both}
.d .tx .hd{font-size:18px;margin-bottom:2px}
.d .tx .cta{margin-top:4px}
.d .pn{flex:1.05;border-radius:12px;background:var(--ml-surface);overflow:hidden;animation:wipe 5.5s var(--ml-ease) infinite both}
.d .img{position:absolute;inset:0;background:linear-gradient(180deg,#FFDCD6 0%,#FFF0EE 100%);animation:zm 5.5s var(--ml-ease) infinite both}
.d .pn{position:relative}
.d .sun{position:absolute;width:30%;aspect-ratio:1;border-radius:50%;left:50%;top:16%;background:var(--ml-grad)}
.d .mt{position:absolute;left:-5%;width:110%;bottom:0;height:52%;background:var(--ml-accent-line);clip-path:polygon(0 100%,0 56%,20% 24%,38% 54%,58% 12%,78% 52%,100% 30%,100% 100%)}
.d .m2{height:32%;background:var(--ml-bar)}
@keyframes wipe{0%,6%{clip-path:inset(0 0 0 100% round 12px)}28%,82%{clip-path:inset(0 0 0 0 round 12px)}94%,100%{clip-path:inset(0 100% 0 0 round 12px)}}
@keyframes zm{0%,6%{transform:scale(1.35)}30%,82%{transform:scale(1)}100%{transform:scale(1.2)}}
@keyframes tx{0%,4%{opacity:0;transform:translateX(-10px)}22%,82%{opacity:1;transform:none}94%,100%{opacity:0;transform:translateX(-6px)}}
`,
  prompt: `Build a two-column split-screen hero: copy on the left, an image panel on the right that is revealed with a clip-path wipe. Start the panel at clip-path: inset(0 0 0 100% round 20px) and animate to inset(0 0 0 0 round 20px) over 900ms with cubic-bezier(.32,.72,0,1), so the image appears to slide in from the right edge. At the same time scale the image inside from 1.3 to 1 so it settles under the wipe, and fade and slide the left copy in from -12px with a 120ms delay. Trigger once on load or on entering the viewport with an IntersectionObserver. Animate clip-path and transform only. Stack to one column under 768px with the image on top. Give the image a descriptive alt, and under prefers-reduced-motion render the final state at once.${RM}`,
});

// 20
ML.add({
  id: 'hero-sequence-scrub',
  cat: 'hero',
  title: 'Image sequence scrub',
  sub: 'Product turns frame by frame on scroll',
  html: win(`<div class="sc"><div class="stk">${NV}<div class="tx"><div class="hd">Meet <span class="ac">Orbit</span></div></div>
<div class="vw"><div class="phone"><div class="fc f"><i></i><i></i><u></u></div><div class="fc bk"></div><div class="fc rt"></div><div class="fc lf"></div></div></div>
<div class="fm"><span class="lb">Frame 01 / 12</span><div class="tk">${'<u></u>'.repeat(12)}</div></div></div><div class="sp"></div></div><div class="th"></div>`),
  css: `${WIN}
.d .sc{position:absolute;inset:0;overflow-y:auto;scrollbar-width:none}
.d .sc::-webkit-scrollbar{display:none}
.d .stk{position:sticky;top:0;height:100%;background:var(--ml-bg);display:flex;flex-direction:column}
.d .sp{height:100%}
.d .tx{padding-top:22px;text-align:center}
.d .tx .hd{font-size:15px}
.d .vw{flex:1;display:grid;place-items:center;perspective:600px}
.d .phone{position:relative;width:40px;height:78px;transform-style:preserve-3d;transform:rotateY(-20deg) rotateX(-8deg)}
.d .fc{position:absolute;inset:0;border-radius:8px;backface-visibility:hidden}
.d .f{transform:translateZ(5px);background:var(--ml-grad);padding:7px 6px;display:flex;flex-direction:column;gap:4px;box-shadow:inset 0 0 0 2px rgba(255,255,255,.35)}
.d .f i{display:block;height:4px;border-radius:2px;background:rgba(255,255,255,.75)}
.d .f i+i{width:60%}
.d .f u{display:block;flex:1;margin-top:3px;border-radius:5px;background:rgba(255,255,255,.28)}
.d .bk{transform:rotateY(180deg) translateZ(5px);background:var(--ml-bar)}
.d .rt,.d .lf{inset:0 17px;background:var(--ml-accent-ink);backface-visibility:visible}
.d .rt{transform:rotateY(90deg) translateZ(20px)}
.d .lf{transform:rotateY(-90deg) translateZ(20px)}
.d .fm{padding:0 14% 9px;display:flex;flex-direction:column;align-items:center;gap:5px}
.d .lb{font:600 8px/1 var(--ml-mono);color:var(--ml-muted);letter-spacing:.04em}
.d .tk{display:flex;gap:4px;width:100%}
.d .tk u{flex:1;height:5px;border-radius:2px;background:var(--ml-bar)}
.d .tk u.on{background:var(--ml-accent)}
.d .th{position:absolute;right:3px;top:4px;width:3px;height:24px;border-radius:2px;background:var(--ml-bar);z-index:4}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const phone = root.querySelector('.phone');
    const ticks = [...root.querySelectorAll('.tk u')];
    const lb = root.querySelector('.lb');
    const th = root.querySelector('.th');
    if (!sc || !phone) return;
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const period = 7000;
    let start = performance.now();
    let last = -1;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
      } else {
        const p = ((t - start) % period) / period;
        const max = sc.scrollHeight - sc.clientHeight;
        const k = p < 0.08 ? 0 : p < 0.7 ? (p - 0.08) / 0.62 : p < 0.82 ? 1 : 1 - (p - 0.82) / 0.18;
        sc.scrollTop = k * max;
      }
      const max = sc.scrollHeight - sc.clientHeight;
      const q = max > 0 ? sc.scrollTop / max : 0;
      const frame = Math.min(11, Math.floor(q * 12));
      if (frame !== last) {
        last = frame;
        phone.style.transform = 'rotateY(' + (-20 + frame * 30) + 'deg) rotateX(-8deg)';
        ticks.forEach((u, i) => u.classList.toggle('on', i === frame));
        if (lb) lb.textContent = 'Frame ' + String(frame + 1).padStart(2, '0') + ' / 12';
      }
      if (th) th.style.transform = 'translateY(' + q * (sc.clientHeight - 32) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a scroll-scrubbed product rotation hero (the Apple product-page technique). Use a tall section (about 300vh) with a position: sticky; top: 0; height: 100vh stage holding one <canvas> (or an <img> whose src you swap). Preload 60-120 sequential frames of the product turning, named frame-001.webp onward. In a passive scroll listener compute progress = clamp(scrollInSection / (sectionHeight - viewportHeight), 0, 1), map it to a frame index Math.min(count - 1, Math.floor(progress * count)), and when the index changes draw that frame inside requestAnimationFrame (canvas drawImage, cover-fit). Never animate between frames, the scroll position is the playhead. Show a small frame counter or progress ticks if useful. Set the first frame as the poster and load the rest progressively. Under prefers-reduced-motion show a single still frame.${RM}`,
});

// 21
ML.add({
  id: 'hero-number-ticker',
  cat: 'hero',
  title: 'Big number hero',
  sub: 'A huge stat counts up with its label',
  html: win(`${NV}<div class="c"><div class="lbl"><span class="dt"></span>Live this week</div><div class="n">0</div><div class="hd">teams ship with <span class="ac">Flowly</span></div><div class="up">${ic(`<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>`)}+18% this month</div></div>`),
  css: `${WIN}
.d .c{position:absolute;inset:0;padding-top:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;text-align:center}
.d .lbl{display:flex;align-items:center;gap:5px;font:600 8px/1 var(--ml-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted);margin-bottom:4px}
.d .dt{width:6px;height:6px;border-radius:50%;background:var(--ml-accent);animation:ps 1.6s ease-in-out infinite}
.d .n{font:800 44px/1 var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums;background:var(--ml-grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.d .c .hd{font-size:14px;margin-top:3px}
.d .up{display:flex;align-items:center;gap:4px;margin-top:9px;padding:4px 8px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:9px;font-weight:600;opacity:0;transform:translateY(5px);transition:opacity .4s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .up.on{opacity:1;transform:none}
.d .up svg{width:10px;height:10px}
@keyframes ps{50%{opacity:.3}}
`,
  run: (root) => {
    const n = root.querySelector('.n');
    const chip = root.querySelector('.up');
    if (!n) return;
    const target = 12480;
    const dur = 1900;
    const total = 5200;
    const ease = (x) => 1 - Math.pow(1 - x, 4);
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) {
        start = t - ((t - start) % total);
        return;
      }
      const ph = (t - start) % total;
      const v = ph < dur ? target * ease(ph / dur) : ph < total - 500 ? target : 0;
      n.textContent = Math.round(v).toLocaleString('en-US');
      if (chip) chip.classList.toggle('on', ph > dur * 0.8 && ph < total - 500);
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a hero built around one huge statistic that counts up. Show a small uppercase mono label ("Live this week"), the number at 56-96px, weight 800, letter-spacing -0.05em, font-variant-numeric: tabular-nums (so digits do not jitter), with a single accent gradient fill via background-clip: text, and a one-line description under it. In JS animate from 0 to the target over about 1.8s using requestAnimationFrame and an ease-out quartic (1 - (1 - t)^4), format with toLocaleString, and write textContent each frame. Start it when the hero is visible (IntersectionObserver), run it once, and reserve the final width (min-width in ch) so the layout never shifts. Fade a small delta chip ("+18% this month") in after the count lands. Put the real final value in an aria-label or visually hidden text so screen readers get the number, not the animation. Under prefers-reduced-motion render the final number.${RM}`,
});

// 22
const GX = [20, 40, 60, 80];
const GY = [25, 50, 75];
ML.add({
  id: 'hero-grid-draw',
  cat: 'hero',
  title: 'Blueprint grid draw',
  sub: 'Grid lines draw in, headline follows',
  html: win(`<div class="gd">${GX.map((x, i) => `<u class="v" style="--p:${x}%;--d:${(i * 0.12).toFixed(2)}s"></u>`).join('')}${GY.map(
    (y, i) => `<u class="h" style="--p:${y}%;--d:${(0.1 + i * 0.12).toFixed(2)}s"></u>`,
  ).join('')}<u class="frame"></u>${GX.map((x) => GY.map((y) => `<em class="x" style="left:${x}%;top:${y}%"></em>`).join('')).join('')}</div>${NV}
<div class="c"><div class="tg">SPEC 01 / GRID</div><div class="hd">Built on <span class="ac">a grid.</span></div><div class="b m"></div></div>`),
  css: `${WIN}
.d .gd{position:absolute;inset:0}
.d .gd u{position:absolute;background:var(--ml-accent-line)}
.d .v{top:0;bottom:0;width:1px;left:var(--p);transform-origin:50% 0;animation:dv 6s var(--ml-ease) infinite both;animation-delay:var(--d)}
.d .h{left:0;right:0;height:1px;top:var(--p);transform-origin:0 50%;animation:dh 6s var(--ml-ease) infinite both;animation-delay:var(--d)}
.d .gd .frame{inset:8px;background:none;border:1px solid var(--ml-accent-line);animation:fr 6s var(--ml-ease) infinite both}
.d .x{position:absolute;width:7px;height:7px;margin:-3px 0 0 -3px;background:linear-gradient(var(--ml-accent),var(--ml-accent)) center/100% 1px no-repeat,linear-gradient(var(--ml-accent),var(--ml-accent)) center/1px 100% no-repeat;animation:xi 6s var(--ml-ease) infinite both}
.d .c{position:absolute;left:50%;top:54%;transform:translate(-50%,-50%);padding:10px 16px;background:rgba(255,255,255,.92);display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;animation:tt 6s var(--ml-ease) infinite both;white-space:nowrap}
.d .tg{font:600 7px/1 var(--ml-mono);letter-spacing:.1em;color:var(--ml-accent-ink)}
.d .c .hd{font-size:21px}
.d .c .b{width:80%}
@keyframes dv{0%,2%{transform:scaleY(0)}22%,86%{transform:scaleY(1)}96%,100%{transform:scaleY(1);opacity:0}}
@keyframes dh{0%,2%{transform:scaleX(0)}22%,86%{transform:scaleX(1)}96%,100%{transform:scaleX(1);opacity:0}}
@keyframes fr{0%,2%{opacity:0}18%,86%{opacity:1}96%,100%{opacity:0}}
@keyframes xi{0%,24%{opacity:0;transform:scale(0)}34%,86%{opacity:1;transform:scale(1)}96%,100%{opacity:0}}
@keyframes tt{0%,28%{opacity:0;transform:translate(-50%,-44%)}42%,84%{opacity:1;transform:translate(-50%,-50%)}95%,100%{opacity:0}}
`,
  prompt: `Build a blueprint-style hero where grid lines draw themselves in, then the headline appears. Create the grid from absolutely positioned 1px elements (4 vertical, 3 horizontal, plus an inset frame) in a pale accent tint. Animate verticals with transform: scaleY(0) to 1 from transform-origin: 50% 0 and horizontals with scaleX(0) to 1 from 0 50%, 600-900ms with cubic-bezier(.32,.72,0,1), staggered by 100-120ms. (Do not animate width/height; scale a full-size line, or use stroke-dashoffset on SVG lines.) After the lines land, pop small crosshair markers on the intersections (scale 0 to 1) and fade the headline block in with a 12px upward settle and a white background so it stays readable over the lines. Optionally add mono spec labels. Run once when the hero enters the viewport. Mark the grid aria-hidden. Under prefers-reduced-motion render the finished grid.${RM}`,
});

// 23
ML.add({
  id: 'hero-search',
  cat: 'hero',
  title: 'Search hero',
  sub: 'Query types out, results drop in',
  html: win(`${NV}<div class="c"><div class="hd">Find anything</div>
<div class="sb">${ic(`<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`)}<span class="q"></span><kbd>/</kbd></div>
<div class="res"><div class="rs"><s></s><span class="t"></span><u></u></div><div class="rs"><s></s><span class="t"></span><u></u></div><div class="rs"><s></s><span class="t"></span><u></u></div></div></div>`),
  css: `${WIN}
.d .c{position:absolute;inset:0;padding:24px 10% 0;display:flex;flex-direction:column;align-items:center;gap:7px}
.d .c .hd{font-size:15px}
.d .sb{width:100%;height:24px;display:flex;align-items:center;gap:6px;padding:0 8px;border-radius:999px;background:var(--ml-bg);border:1px solid var(--ml-accent-line);box-shadow:0 0 0 3px var(--ml-accent-soft)}
.d .sb svg{width:12px;height:12px;color:var(--ml-accent);flex:none}
.d .q{flex:1;font-size:11px;font-weight:500;color:var(--ml-ink);white-space:nowrap;overflow:hidden}
.d .q::after{content:"";display:inline-block;width:1.5px;height:11px;margin-left:1px;vertical-align:-2px;background:var(--ml-accent);animation:cr 1s steps(1) infinite}
.d .sb kbd{font:600 8px/1 var(--ml-mono);color:var(--ml-muted);border:1px solid var(--ml-line);border-radius:4px;padding:2px 4px}
.d .res{width:100%;display:flex;flex-direction:column;gap:4px}
.d .rs{display:flex;align-items:center;gap:7px;padding:5px 7px;border-radius:9px;background:var(--ml-surface);border:1px solid var(--ml-line);opacity:0;transform:translateY(-8px) scale(.97);transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .rs.in{opacity:1;transform:none}
.d .rs s{width:14px;height:14px;border-radius:5px;background:var(--ml-accent-soft);flex:none}
.d .rs .t{flex:1;font-size:10px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .rs u{width:20px;height:4px;border-radius:2px;background:var(--ml-bar)}
@keyframes cr{50%{opacity:0}}
`,
  run: (root) => {
    const q = root.querySelector('.q');
    const rows = [...root.querySelectorAll('.rs')];
    if (!q || !rows.length) return;
    const sets = [
      ['pricing plans', ['Pricing and plans', 'Compare plans', 'Billing FAQ']],
      ['team calendar', ['Team calendar', 'Shared availability', 'Book a room']],
      ['invoice template', ['Invoice templates', 'Send an invoice', 'Payment terms']],
    ];
    let s = 0;
    const wait = (ms, fn) => setTimeout(() => (root.isConnected ? (root.dataset.paused ? wait(300, fn) : fn()) : 0), ms);
    const type = (txt, i, done) => {
      q.textContent = txt.slice(0, i);
      if (i < txt.length) wait(70, () => type(txt, i + 1, done));
      else done();
    };
    const play = () => {
      const [txt, items] = sets[s];
      rows.forEach((r, i) => {
        r.querySelector('.t').textContent = items[i];
      });
      type(txt, 0, () =>
        wait(250, () => {
          rows.forEach((r, i) => setTimeout(() => r.classList.add('in'), i * 110));
          wait(2300, () => {
            rows.forEach((r) => r.classList.remove('in'));
            q.textContent = '';
            s = (s + 1) % sets.length;
            wait(500, play);
          });
        }),
      );
    };
    wait(500, play);
  },
  prompt: `Build a search-forward hero: a centered headline, a large pill search field, and a results list that drops in under it. For the demo behavior, cycle through 3-4 example queries: type each into the placeholder/field one character at a time (65-80ms), pause 250ms, then reveal 3 result rows with a staggered spring (opacity 0 and translateY(-8px) scale(.97) to none, 110ms apart, transform transition about 600ms with a critically damped linear() curve), hold 2-3s, hide them and clear the text, then continue with the next query. Style the field with a 1px accent-tinted border and a 3px soft accent ring, an icon on the left and a "/" keyboard hint on the right. Use a self-scheduling setTimeout chain, stop as soon as the real user focuses the input, and expose results as role="listbox" with aria-live="polite" when real. Under prefers-reduced-motion show one static query and results.${RM}`,
});

// 24
ML.add({
  id: 'hero-chat',
  cat: 'hero',
  title: 'Chat demo hero',
  sub: 'Bubbles pop in, the reply streams',
  html: win(`${NV}<div class="c"><div class="hd">Ask <span class="ac">Nova</span> anything</div>
<div class="th"><div class="m u"><span class="tu"></span></div><div class="m a"><s>${ic(`<path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/>`)}</s><div class="bb"><span class="ta"></span><i class="dts"><u></u><u></u><u></u></i></div></div></div>
<div class="inp"><span></span><i>${ic(`<path d="M5 12h14M12 5l7 7-7 7"/>`)}</i></div></div>`),
  css: `${WIN}
.d .c{position:absolute;inset:0;padding:22px 7% 8px;display:flex;flex-direction:column;gap:6px}
.d .c .hd{font-size:13px;text-align:center}
.d .th{flex:1;display:flex;flex-direction:column;gap:6px;justify-content:flex-end;min-height:0}
.d .m{display:flex;gap:5px;max-width:86%;opacity:0;transform:translateY(8px) scale(.9);transition:opacity .2s ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .m.on{opacity:1;transform:none}
.d .m.u{align-self:flex-end;transform-origin:100% 100%}
.d .m.a{align-self:flex-start;transform-origin:0 100%}
.d .m.u .tu{padding:6px 9px;border-radius:12px 12px 3px 12px;background:var(--ml-grad);color:#fff;font-size:10px;font-weight:500;display:block}
.d .m.a s{width:16px;height:16px;flex:none;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent);display:grid;place-items:center;margin-top:2px}
.d .m.a s svg{width:10px;height:10px}
.d .bb{padding:6px 9px;border-radius:12px 12px 12px 3px;background:var(--ml-surface);border:1px solid var(--ml-line);font-size:10px;line-height:1.35;color:var(--ml-ink-2);min-width:34px}
.d .dts{display:inline-flex;gap:3px;align-items:center;height:11px}
.d .dts[hidden]{display:none}
.d .dts u{width:4px;height:4px;border-radius:50%;background:var(--ml-muted);animation:bn 1s ease-in-out infinite}
.d .dts u:nth-child(2){animation-delay:.15s}
.d .dts u:nth-child(3){animation-delay:.3s}
.d .inp{height:22px;display:flex;align-items:center;justify-content:space-between;padding:0 4px 0 10px;border-radius:999px;border:1px solid var(--ml-line);background:var(--ml-bg);flex:none}
.d .inp span{width:34%;height:4px;border-radius:2px;background:var(--ml-bar-2)}
.d .inp i{width:16px;height:16px;border-radius:50%;background:var(--ml-grad);color:#fff;display:grid;place-items:center}
.d .inp i svg{width:9px;height:9px}
@keyframes bn{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-3px);opacity:1}}
`,
  run: (root) => {
    const u = root.querySelector('.m.u');
    const a = root.querySelector('.m.a');
    const tu = root.querySelector('.tu');
    const ta = root.querySelector('.ta');
    const dots = root.querySelector('.dts');
    if (!u || !a || !tu || !ta) return;
    const ask = 'Plan my launch week';
    const reply = 'Done. Teaser Monday, demo Wednesday, ship Friday.'.split(' ');
    const wait = (ms, fn) => setTimeout(() => (root.isConnected ? (root.dataset.paused ? wait(300, fn) : fn()) : 0), ms);
    const reset = () => {
      u.classList.remove('on');
      a.classList.remove('on');
      tu.textContent = '';
      ta.textContent = '';
      dots.hidden = false;
    };
    const stream = (i) => {
      ta.textContent = reply.slice(0, i).join(' ');
      if (i < reply.length) wait(150, () => stream(i + 1));
      else
        wait(2600, () => {
          reset();
          wait(600, play);
        });
    };
    const typeU = (i) => {
      tu.textContent = ask.slice(0, i);
      if (i < ask.length) wait(48, () => typeU(i + 1));
      else
        wait(350, () => {
          a.classList.add('on');
          dots.hidden = false;
          wait(900, () => {
            dots.hidden = true;
            stream(1);
          });
        });
    };
    const play = () => {
      reset();
      u.classList.add('on');
      typeU(1);
    };
    reset();
    wait(500, play);
  },
  prompt: `Build a hero that demonstrates an AI chat. Under a short headline, show a chat thread and a pill input. Run a looped demo: pop the user bubble in (opacity 0 and translateY(8px) scale(.9) to none from its bottom-right corner, using a slightly overshooting spring over about 600ms) while its text types in at 45-50ms per character; then show the assistant bubble with three bouncing dots for ~900ms; then stream the reply word by word every 150ms with a trailing caret; hold 2.5s, fade the thread out and restart. Style the user bubble in your accent gradient with white text, the assistant bubble as a light surface with a hairline border, and a small sparkle avatar. Use a self-scheduling setTimeout chain that stops when the hero is offscreen. Mark the thread role="log" aria-live="off" for the decorative loop. Under prefers-reduced-motion show the full finished conversation.${RM}`,
});

// 25
ML.add({
  id: 'hero-code-preview',
  cat: 'hero',
  title: 'Code plus live preview',
  sub: 'Code types left, preview updates right',
  html: win(`${NV}<div class="row"><div class="cd"><div class="tbs"><span>card.css</span></div><div class="ln"><i class="a"></i><i class="b2"></i></div><div class="ln"><i class="a"></i><i class="b2"></i></div><div class="ln"><i class="a"></i><i class="b2"></i></div><div class="ln"><i class="a"></i><i class="b2"></i></div></div>
<div class="pv"><div class="pc"><div class="t1">Pro plan</div><div class="t2">$12 / month</div><div class="pb">Start</div></div></div></div>`),
  css: `${WIN}
.d .row{position:absolute;inset:0;padding:24px 5% 10px;display:flex;gap:4%}
.d .cd{flex:1.15;border-radius:9px;background:var(--ml-surface);border:1px solid var(--ml-line);padding:6px 7px;display:flex;flex-direction:column;gap:5px;font:500 8.5px/1.3 var(--ml-mono);color:var(--ml-ink-2);min-width:0}
.d .tbs span{display:inline-block;padding:2px 6px;border-radius:5px;background:var(--ml-bg);color:var(--ml-muted);font-size:8px}
.d .ln{height:11px;white-space:nowrap;overflow:hidden}
.d .ln .a{color:var(--ml-accent-ink);font-style:normal}
.d .ln .b2{color:var(--ml-ink-2);font-style:normal}
.d .pv{flex:1;border-radius:9px;background:repeating-conic-gradient(var(--ml-surface) 0 25%,var(--ml-bg) 0 50%) 0 0/10px 10px;border:1px solid var(--ml-line);display:grid;place-items:center}
.d .pc{width:72%;padding:9px;border:1px dashed var(--ml-bar);background:var(--ml-bg);color:var(--ml-ink);display:flex;flex-direction:column;gap:3px;transition:all .45s var(--ml-ease)}
.d .t1{font-size:11px;font-weight:700}
.d .t2{font-size:9px;opacity:.8}
.d .pb{margin-top:4px;padding:3px 0;text-align:center;font-size:9px;font-weight:600;background:var(--ml-bar-2);color:var(--ml-ink-2);transition:all .45s var(--ml-ease)}
.d .pc.s1{padding:14px;border-style:solid;border-color:var(--ml-line)}
.d .pc.s2{background:var(--ml-grad);border-color:transparent;color:#fff}
.d .pc.s3{border-radius:16px}
.d .pc.s3 .pb{border-radius:999px}
.d .pc.s4{box-shadow:var(--ml-shadow-lg)}
.d .pc.s2 .pb{background:#fff;color:var(--ml-accent-ink)}
`,
  run: (root) => {
    const lines = [...root.querySelectorAll('.ln')];
    const pc = root.querySelector('.pc');
    if (!lines.length || !pc) return;
    const src = ['padding: 14px;', 'background: brand;', 'border-radius: 16px;', 'box-shadow: soft;'];
    const wait = (ms, fn) => setTimeout(() => (root.isConnected ? (root.dataset.paused ? wait(300, fn) : fn()) : 0), ms);
    const clear = () => {
      lines.forEach((l) => {
        l.querySelector('.a').textContent = '';
        l.querySelector('.b2').textContent = '';
      });
      pc.className = 'pc';
    };
    const typeLine = (li, i) => {
      if (li >= src.length) {
        wait(2600, () => {
          clear();
          wait(500, () => typeLine(0, 0));
        });
        return;
      }
      const txt = src[li];
      const cut = txt.indexOf(':');
      const l = lines[li];
      l.querySelector('.a').textContent = txt.slice(0, Math.min(i, cut));
      l.querySelector('.b2').textContent = i > cut ? txt.slice(cut, i) : '';
      if (i < txt.length) wait(55, () => typeLine(li, i + 1));
      else {
        pc.classList.add('s' + (li + 1));
        wait(450, () => typeLine(li + 1, 0));
      }
    };
    clear();
    wait(500, () => typeLine(0, 0));
  },
  prompt: `Build a hero that shows code and its live result side by side. Left: a code panel (monospace, 11-13px, light surface, hairline border, syntax-tinted property names in your accent and values in ink) with a filename tab. Right: a preview area with a faint checkerboard background containing a small component (for example a pricing card). Run a looped demo: type the CSS lines one character at a time (50-60ms), and the moment each line finishes, apply the matching class to the preview component so it visibly updates with a 450ms ease transition (padding, then background gradient, then radius, then shadow). Hold the finished state 2.5s, clear both sides and restart. Use a self-scheduling setTimeout chain and pause offscreen. Put the code in a <pre><code> with aria-hidden for the demo, and under prefers-reduced-motion show the finished code and component statically.${RM}`,
});

// 26
ML.add({
  id: 'hero-dashboard',
  cat: 'hero',
  title: 'Dashboard assemble',
  sub: 'Widgets and a chart pop into place',
  html: win(`<div class="db"><div class="sd" style="--d:0s"><b></b><u></u><u></u><u></u><u></u></div>
<div class="mn"><div class="tp" style="--d:.1s"><div class="hd">Overview</div><span class="av"></span></div>
<div class="st"><div class="w" style="--d:.2s"><small>Users</small><strong>2,481</strong></div><div class="w" style="--d:.3s"><small>Revenue</small><strong>$18.2k</strong></div><div class="w" style="--d:.4s"><small>Uptime</small><strong>99.9%</strong></div></div>
<div class="row"><div class="w cc" style="--d:.5s"><svg viewBox="0 0 100 40" preserveAspectRatio="none"><path class="ar" d="M0 34 C12 30 18 14 32 18 S54 32 68 14 S90 6 100 8 V40 H0z"/><path class="ln" pathLength="1" d="M0 34 C12 30 18 14 32 18 S54 32 68 14 S90 6 100 8"/></svg></div>
<div class="w bc" style="--d:.62s"><u style="--h:44%"></u><u style="--h:72%"></u><u style="--h:56%"></u><u style="--h:90%"></u></div></div></div></div>`),
  css: `${WIN}
.d .db{position:absolute;inset:0;display:flex}
.d .sd{width:16%;background:var(--ml-surface);border-right:1px solid var(--ml-line);padding:8px 6px;display:flex;flex-direction:column;gap:6px}
.d .sd b{width:10px;height:10px;border-radius:3px;background:var(--ml-accent);margin-bottom:4px}
.d .sd u{height:4px;border-radius:2px;background:var(--ml-bar)}
.d .sd u:nth-of-type(1){background:var(--ml-accent-line)}
.d .mn{flex:1;padding:8px 9px;display:flex;flex-direction:column;gap:6px;min-width:0}
.d .tp{display:flex;align-items:center;justify-content:space-between}
.d .tp .hd{font-size:12px}
.d .av{width:12px;height:12px;border-radius:50%;background:var(--ml-grad)}
.d .st{display:grid;grid-template-columns:repeat(3,1fr);gap:5px}
.d .w{border-radius:8px;border:1px solid var(--ml-line);background:var(--ml-bg);box-shadow:var(--ml-shadow);padding:5px 6px;animation:pop 6s var(--ml-bounce) infinite both;animation-delay:var(--d)}
.d .w small{display:block;font-size:7px;color:var(--ml-muted)}
.d .w strong{font-size:11px;letter-spacing:-.02em}
.d .row{flex:1;display:flex;gap:5px;min-height:0}
.d .cc{flex:1.6;padding:6px}
.d .cc svg{width:100%;height:100%}
.d .ar{fill:var(--ml-accent-soft)}
.d .cc .ln{fill:none;stroke:var(--ml-accent);stroke-width:2;stroke-linecap:round;stroke-dasharray:1;animation:dr 6s var(--ml-ease) infinite both;animation-delay:.9s}
.d .bc{flex:1;padding:6px;display:flex;align-items:flex-end;gap:4px}
.d .bc u{flex:1;height:var(--h);border-radius:3px 3px 0 0;background:var(--ml-accent-line)}
.d .bc u:nth-child(4){background:var(--ml-accent)}
.d .sd,.d .tp{animation:pop 6s var(--ml-ease) infinite both;animation-delay:var(--d)}
@keyframes pop{0%,3%{opacity:0;transform:scale(.8) translateY(8px)}16%,82%{opacity:1;transform:none}94%,100%{opacity:0;transform:scale(.96)}}
@keyframes dr{0%,6%{stroke-dashoffset:1}28%,82%{stroke-dashoffset:0}94%,100%{stroke-dashoffset:-1}}
`,
  prompt: `Build a hero whose visual is a dashboard mock that assembles itself. Draw the dashboard in HTML/CSS/SVG (not an image): a slim sidebar, a header row, three stat widgets, a line-area chart and a bar chart, all with 1px hairline borders, 8-10px radius and layered soft shadows. Animate each piece in with opacity 0 and scale(.8) translateY(8px) to none using a slightly overshooting spring (linear() curve, about 600ms), staggered 80-120ms in reading order (sidebar, header, stat cards, charts). Draw the chart line with stroke-dasharray: 1 and stroke-dashoffset 1 to 0 on a pathLength="1" path over 1.2s, and let the bars grow with transform: scaleY from the bottom. Trigger once when the hero enters the viewport. Animate transform, opacity and stroke-dashoffset only. Show the final dashboard immediately under prefers-reduced-motion.${RM}`,
});

// 27
ML.add({
  id: 'hero-mask-reveal',
  cat: 'hero',
  title: 'Masked image reveal',
  sub: 'Image wipes up behind the headline',
  html: win(`<div class="im"><div class="in"><div class="sun"></div><div class="mt"></div><div class="mt m2"></div></div></div>${NV}<div class="ov"><div class="hd">Wide open<br>spaces.</div><div class="cta"></div></div>`),
  css: `${WIN}
.d .im{position:absolute;left:7%;right:7%;top:24px;bottom:10px;border-radius:14px;overflow:hidden;background:var(--ml-surface);animation:wp 5.6s cubic-bezier(.7,0,.2,1) infinite both}
.d .in{position:absolute;inset:0;background:linear-gradient(180deg,#FFDCD6 0%,#FFF0EE 80%,#fff 100%);animation:zi 5.6s cubic-bezier(.7,0,.2,1) infinite both}
.d .sun{position:absolute;width:24%;aspect-ratio:1;border-radius:50%;right:14%;top:14%;background:var(--ml-grad)}
.d .mt{position:absolute;left:-4%;width:108%;bottom:0;height:50%;background:var(--ml-accent-line);clip-path:polygon(0 100%,0 54%,16% 24%,32% 52%,50% 8%,68% 54%,84% 28%,100% 58%,100% 100%)}
.d .m2{height:30%;background:var(--ml-bar)}
.d .ov{position:absolute;left:14%;top:34%;display:flex;flex-direction:column;gap:9px;align-items:flex-start;animation:ot 5.6s var(--ml-ease) infinite both}
.d .ov .hd{font-size:26px;font-weight:800;letter-spacing:-.045em;line-height:1}
@keyframes wp{0%,6%{clip-path:inset(100% 0 0 0 round 14px)}34%,84%{clip-path:inset(0 0 0 0 round 14px)}96%,100%{clip-path:inset(0 0 100% 0 round 14px)}}
@keyframes zi{0%,6%{transform:scale(1.3) translateY(10%)}38%,100%{transform:none}}
@keyframes ot{0%,22%{opacity:0;transform:translateY(10px)}40%,84%{opacity:1;transform:none}96%,100%{opacity:0}}
`,
  prompt: `Build a hero where a large image is revealed by a clip-path wipe behind the headline. Make the image container position: absolute inside a rounded hero card and animate clip-path from inset(100% 0 0 0 round 24px) to inset(0 0 0 0 round 24px) over 1.1s with cubic-bezier(.7, 0, .2, 1), so the picture wipes up from the bottom edge. At the same time animate the inner image from scale(1.3) translateY(10%) to none so it settles under the mask. After the wipe is about 60% done, fade and lift the headline and CTA in (opacity and translateY(10px) to none). Keep the headline in ink color over a light image or add a scrim for dark photos so contrast stays at 4.5:1. Trigger once on load or on entering the viewport. Animate clip-path, transform and opacity only. Under prefers-reduced-motion show the revealed state.${RM}`,
});

// 28
const MQ1 = ['BUILD FASTER', 'SHIP LIGHTER', 'DESIGN BOLDER'].map((t) => `<span>${t}</span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l2.2 8.8L23 12l-8.8 2.2L12 23l-2.2-8.8L1 12l8.8-2.2z"/></svg>`).join('');
ML.add({
  id: 'hero-kinetic-marquee',
  cat: 'hero',
  title: 'Kinetic marquee',
  sub: 'Giant text rows scroll in opposite ways',
  html: win(`${NV}<div class="rws"><div class="rw r1"><div class="tr">${MQ1}${MQ1}</div></div><div class="rw r2"><div class="tr">${MQ1}${MQ1}</div></div></div><div class="ft"><div class="b m"></div><div class="cta"></div></div>`),
  css: `${WIN}
.d .rws{position:absolute;left:0;right:0;top:22px;bottom:26px;display:flex;flex-direction:column;justify-content:center;gap:2px}
.d .rw{overflow:hidden}
.d .tr{display:flex;align-items:center;width:max-content;gap:12px;padding-right:12px;font:800 38px/1.02 var(--ml-font);letter-spacing:-.05em;white-space:nowrap;animation:l 11s linear infinite}
.d .tr svg{width:22px;height:22px;flex:none;color:var(--ml-accent)}
.d .r1 .tr{color:var(--ml-ink)}
.d .r2 .tr{color:transparent;-webkit-text-stroke:1.5px var(--ml-accent);animation-name:r;animation-duration:13s}
.d .r2 .tr svg{color:var(--ml-ink)}
.d .ft{position:absolute;left:8%;right:8%;bottom:7px;display:flex;align-items:center;justify-content:space-between}
.d .ft .b{width:38%}
@keyframes l{to{transform:translateX(-50%)}}
@keyframes r{from{transform:translateX(-50%)}to{transform:translateX(0)}}
`,
  prompt: `Build a kinetic typography hero: two rows of huge uppercase headline text scrolling horizontally in opposite directions. Each row is an overflow: hidden wrapper with an inner flex track (width: max-content, white-space: nowrap) containing the phrase set twice, separated by a small accent star icon. Animate the first track translateX(0) to translateX(-50%) and the second translateX(-50%) to translateX(0), linear, 20-30s infinite, so the loops are seamless. Set the type at 64-160px, weight 800, letter-spacing -0.05em; fill the first row with ink and make the second an outline (color: transparent; -webkit-text-stroke: 1.5px your accent). Optionally tie speed to scroll by adding scroll velocity to the offset. Keep a real h1 for screen readers (visually hidden) and mark the rows aria-hidden. Pause on hover and under prefers-reduced-motion stop the movement.${RM}`,
});

// 29
const BEFORE = `<div class="pa"><div class="nv2"><b></b><u></u><u></u><u></u><u></u><u></u></div><div class="bn1"></div><div class="cl"><div class="b"></div><div class="b"></div><div class="b s"></div><div class="b"></div></div><div class="bxs"><i></i><i></i><i></i></div></div>`;
const AFTER = `<div class="pb"><div class="nv3"><b></b><u></u><u></u></div><div class="hd">Simple,<br><span class="ac">at last.</span></div><div class="b m"></div><div class="cta"></div></div>`;
ML.add({
  id: 'hero-before-after',
  cat: 'hero',
  title: 'Before and after',
  sub: 'A divider sweeps old design to new',
  html: win(`<div class="lyr bf">${BEFORE}<span class="tag">Before</span></div><div class="lyr af">${AFTER}<span class="tag t2">After</span></div><div class="hn"><i>${ic(`<path d="m9 18-6-6 6-6M15 6l6 6-6 6"/>`)}</i></div>`),
  css: `${WIN}
.d .pg{cursor:ew-resize}
.d .lyr{position:absolute;inset:0;overflow:hidden}
.d .bf{background:#EEF1F6}
.d .af{background:var(--ml-bg);clip-path:inset(0 100% 0 0);will-change:clip-path}
.d .tag{position:absolute;top:8px;left:9px;font:600 7px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;padding:3px 6px;border-radius:999px;background:rgba(29,29,31,.78);color:#fff;z-index:2}
.d .t2{left:auto;right:9px;background:var(--ml-accent)}
.d .pa{position:absolute;inset:0;padding:28px 8px 6px;display:flex;flex-direction:column;gap:5px}
.d .nv2{position:absolute;top:0;left:0;right:0;height:22px;background:#D9DFE9;display:flex;align-items:center;gap:5px;padding:0 8px}
.d .nv2 b{width:10px;height:10px;background:#9AA6B8}
.d .nv2 u{width:12px;height:4px;background:#B3BDCC}
.d .bn1{height:30px;background:repeating-linear-gradient(45deg,#C7D0DE 0 6px,#D6DDE8 6px 12px);border:1px solid #AEB9CA}
.d .cl{display:grid;grid-template-columns:1fr 1fr;gap:3px 8px}
.d .cl .b{background:#C7D0DE;border-radius:0;height:4px}
.d .bxs{display:flex;gap:4px}
.d .bxs i{flex:1;height:22px;background:#D6DDE8;border:1px solid #AEB9CA}
.d .pb{position:absolute;inset:0;padding:22px 9% 0;display:flex;flex-direction:column;justify-content:center;gap:7px}
.d .pb .hd{font-size:22px}
.d .pb .b{width:60%}
.d .nv3{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;gap:6px;padding:8px 10px}
.d .nv3 b{width:10px;height:10px;border-radius:3px;background:var(--ml-accent)}
.d .nv3 u{width:14px;height:4px;border-radius:2px;background:var(--ml-bar)}
.d .nv3 u:first-of-type{margin-left:auto}
.d .hn{position:absolute;top:0;bottom:0;left:0;width:2px;margin-left:-1px;background:var(--ml-accent);z-index:4;will-change:transform}
.d .hn i{position:absolute;left:50%;top:50%;width:22px;height:22px;margin:-11px;border-radius:50%;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);border:1px solid var(--ml-accent-line);display:grid;place-items:center;color:var(--ml-accent)}
.d .hn i svg{width:12px;height:12px}
`,
  run: (root) => {
    const pg = root.querySelector('.pg');
    const af = root.querySelector('.af');
    const hn = root.querySelector('.hn');
    if (!pg || !af || !hn) return;
    let until = 0;
    let target = 0;
    let cur = 0;
    pg.addEventListener('pointermove', (e) => {
      const r = pg.getBoundingClientRect();
      target = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      until = performance.now() + 2500;
    });
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      if (t >= until) target = 0.5 + 0.5 * Math.sin(t / 1100 - Math.PI / 2) * 0.96;
      cur += (target - cur) * 0.16;
      const w = pg.offsetWidth;
      af.style.clipPath = 'inset(0 ' + (100 - cur * 100).toFixed(2) + '% 0 0)';
      hn.style.transform = 'translateX(' + (cur * w).toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a before/after comparison hero: two versions of a design stacked in one box, with a draggable divider that sweeps across. Stack the "after" layer over the "before" layer (both position: absolute; inset: 0) and clip the after layer with clip-path: inset(0 calc(100% - var(--pos)) 0 0), updating --pos as a percentage. Draw the divider as a 2px accent line with a round handle containing a left-right chevron icon, positioned with transform: translateX. On pointermove (and touch drag) set the position from clientX over the box width, easing toward the target with requestAnimationFrame. When idle for 2-3s, autoplay a smooth sine sweep. Make the handle keyboard accessible: role="slider" with aria-valuemin 0, aria-valuemax 100, aria-valuenow, and arrow keys moving by 5. Label the corners "Before" and "After". Under prefers-reduced-motion hold the divider at 50%.${RM}`,
});

// 30
const FAN = [
  [-26, -34, 'a'],
  [-13, -17, 'b'],
  [0, 0, 'c'],
  [13, 17, 'd'],
  [26, 34, 'e'],
]
  .map(
    ([a, x, k], i) =>
      `<div class="cd" style="--a:${a}deg;--x:${x}%;--i:${i};--d:${(Math.abs(i - 2) * 0.05).toFixed(2)}s"><div class="th3 ${k}"></div><div class="b"></div><div class="b s"></div></div>`,
  )
  .join('');
ML.add({
  id: 'hero-card-fan',
  cat: 'hero',
  title: 'Card fan',
  sub: 'A deck fans out from behind the CTA',
  html: win(`${NV}<div class="c"><div class="hd">Templates for <span class="ac">everything</span></div></div><div class="deck">${FAN}</div><div class="btn">Browse templates</div>`),
  css: `${WIN}
.d .c{position:absolute;left:0;right:0;top:22px;text-align:center;padding:0 10%}
.d .c .hd{font-size:16px}
.d .deck{position:absolute;left:50%;bottom:26px;width:0;height:0}
.d .cd{position:absolute;left:-26px;bottom:0;width:52px;height:74px;border-radius:9px;background:var(--ml-bg);border:1px solid var(--ml-line);box-shadow:var(--ml-shadow);padding:5px;display:flex;flex-direction:column;gap:4px;transform-origin:50% 130%;z-index:calc(var(--i) + 1);animation:fan 5.6s var(--ml-bounce) infinite both;animation-delay:var(--d)}
.d .th3{flex:1;border-radius:5px;background:var(--ml-bar-2)}
.d .th3.a{background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .th3.b{background:var(--ml-bar)}
.d .th3.c{background:var(--ml-grad)}
.d .th3.d{background:var(--ml-accent-line)}
.d .th3.e{background:var(--ml-bar-2)}
.d .cd .b{height:3px}
.d .btn{position:absolute;left:50%;bottom:9px;transform:translateX(-50%);z-index:9;padding:5px 12px;border-radius:999px;background:var(--ml-grad);color:#fff;font-size:10px;font-weight:600;white-space:nowrap;box-shadow:0 6px 14px rgba(255,68,51,.3);animation:bt 5.6s var(--ml-spring) infinite both}
@keyframes fan{0%,8%{transform:translate(0,8px) rotate(0) scale(.86)}28%,78%{transform:translate(var(--x),0) rotate(var(--a)) scale(1.12)}94%,100%{transform:translate(0,8px) rotate(0) scale(.86)}}
@keyframes bt{0%,5%{transform:translateX(-50%) scale(1)}8%{transform:translateX(-50%) scale(.94)}16%,100%{transform:translateX(-50%) scale(1)}}
`,
  prompt: `Build a hero with a deck of cards that fans out from behind the main button. Position 5 thumbnail cards absolutely at the center above the CTA, stacked, all sharing transform-origin: 50% 130% (a point below the card so rotation sweeps like a hand of cards). The closed state is translate(0, 8px) rotate(0) scale(.86); the open state sets each card's rotation (-26, -13, 0, 13, 26deg), a horizontal offset (-34%, -17%, 0, 17%, 34%) and scale(1.1), using custom properties --a and --x so one rule handles every card. Transition transform with a slightly overshooting spring (a linear() curve, about 600ms), staggered 40-50ms outward from the middle card. Trigger it on button hover/focus-visible and on click for touch, and press the button to scale(.94) first. Cards are decorative, so mark the deck aria-hidden. Animate transform only, and under prefers-reduced-motion show the open fan without motion.${RM}`,
});
})();
