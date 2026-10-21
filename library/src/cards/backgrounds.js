(() => {
// Ambient backgrounds. Each card is a full-bleed background with a little foreground content so it
// reads as "background behind content". White + blues only, calm, transform/opacity driven.

const BASE = `.d{display:grid;place-items:center}
.d .fg{position:relative;z-index:2;display:grid;gap:6px;justify-items:center;text-align:center;pointer-events:none}
.d .hl{font:600 26px/1.05 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .sb{font:500 11.5px/1.3 var(--ml-font);color:var(--ml-ink-2)}
`;
const END = ` Keep the content in a separate layer above the background (position: relative; z-index: 1) and check text contrast against the lightest and darkest moment of the animation. Under prefers-reduced-motion stop the animation and show a still frame. Plain HTML, CSS and JS, no libraries.`;
const FG = (h, s) => `<div class="fg"><h4 class="hl">${h}</h4><p class="sb">${s}</p></div>`;

// ---- helpers that only build strings -------------------------------------------------------
const wavesSvg = () => {
  const cols = ['#BBD9FF', '#FFB8A3', '#FF997A', '#FF7A3D', '#2E86FF', '#FF4433'];
  const periods = [190, 230, 170, 260, 210, 150];
  let g = '';
  for (let i = 0; i < 6; i++) {
    const y0 = 128 + i * 26;
    const amp = 9 + (i % 3) * 4;
    const p = periods[i];
    let d = '';
    for (let x = 0; x <= 800; x += 10) {
      const y = y0 + amp * Math.sin((x / p) * Math.PI * 2 + i * 0.9);
      d += (x ? 'L' : 'M') + x + ' ' + y.toFixed(1);
    }
    g += `<path class="wv" style="--p:-${p}px;--t:${9 + i * 1.7}s" d="${d}" stroke="${cols[i]}" stroke-opacity="${(0.45 + i * 0.09).toFixed(2)}"/>`;
  }
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">${g}</svg>`;
};

const ring = (cx, cy, r, seed) => {
  const n = 16;
  const pts = [];
  for (let k = 0; k < n; k++) {
    const a = (k / n) * Math.PI * 2;
    const rr = r * (1 + 0.13 * Math.sin(2 * a + seed) + 0.08 * Math.sin(3 * a - seed * 1.3) + 0.04 * Math.sin(5 * a + seed * 0.7));
    pts.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a) * 0.86]);
  }
  let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
  for (let k = 0; k < n; k++) {
    const p0 = pts[(k - 1 + n) % n], p1 = pts[k], p2 = pts[(k + 1) % n], p3 = pts[(k + 2) % n];
    const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
  }
  return d + 'Z';
};
const topoSvg = () => {
  const grp = (cx, cy, r0, step, count, cls, seed) => {
    let s = `<g class="tg ${cls}" style="transform-origin:${cx}px ${cy}px">`;
    for (let i = 0; i < count; i++) {
      s += `<path class="tr${i % 3 === 0 ? ' k' : ''}" style="--dl:-${(i * 0.8).toFixed(1)}s" d="${ring(cx, cy, r0 + i * step, seed + i * 0.28)}"/>`;
    }
    return s + '</g>';
  };
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${grp(120, 105, 16, 15, 8, 'ga', 1)}${grp(300, 205, 12, 14, 8, 'gb', 3.4)}</svg>`;
};

const tilesHtml = (() => {
  let s = '<div class="tg">';
  for (let r = 0; r < 6; r++) for (let c = 0; c < 8; c++) s += `<i style="--dl:${((c + r) * 0.13).toFixed(2)}s"></i>`;
  return s + '</div>';
})();

const bokehHtml = (() => {
  const o = [
    [8, 14, 46, 0], [30, 62, 34, 1.4], [62, 12, 54, 2.8], [80, 58, 40, 0.7], [48, 40, 28, 3.6],
    [18, 80, 52, 2.1], [70, 80, 30, 4.4], [90, 22, 26, 1.9], [40, 84, 24, 3.1], [56, 66, 44, 5.0], [4, 48, 30, 4.0],
  ];
  return o.map(([x, y, s, d]) => `<i class="o" style="left:${x}%;top:${y}%;--s:${s}px;--dl:${d}s"></i>`).join('');
})();

const cloud = (w, cls, style) =>
  `<svg class="cl ${cls}" style="${style}" viewBox="0 0 120 52" width="${w}" aria-hidden="true"><path d="M22 46a16 16 0 0 1-2-31.8A24 24 0 0 1 66 10a20 20 0 0 1 30 12 14 14 0 0 1 2 24z"/></svg>`;
const cloudLayer = (cls, items) => {
  const half = items.map(([l, t, w]) => cloud(w, '', `left:${l / 2}%;top:${t}%`)).join('');
  const half2 = items.map(([l, t, w]) => cloud(w, '', `left:${50 + l / 2}%;top:${t}%`)).join('');
  return `<div class="ly ${cls}">${half}${half2}</div>`;
};

// ---- 1 aurora --------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-aurora',
  cat: 'backgrounds',
  title: 'Aurora',
  sub: 'Soft blue ribbons drift and fold',
  html: `<i class="rb a"></i><i class="rb b"></i><i class="rb c"></i>` + FG('Quietly alive.', 'Soft light, always moving.'),
  css: BASE + `
.d{background:linear-gradient(180deg,#F8FBFF,#E3EFFF)}
.d .rb{position:absolute;left:-30%;width:160%;height:24%;border-radius:50%;filter:blur(11px);will-change:transform}
.d .a{top:6%;background:linear-gradient(90deg,transparent,#FF997A 30%,#2E86FF 62%,transparent);opacity:.85;animation:rbA 9s ease-in-out infinite}
.d .b{top:34%;background:linear-gradient(90deg,transparent,#FFD0CA 25%,#6DB0FF 55%,#FF4433 80%,transparent);opacity:.6;animation:rbB 12s ease-in-out infinite}
.d .c{top:60%;background:linear-gradient(90deg,transparent,#A9CFFF 35%,#6DB0FF 70%,transparent);opacity:.7;animation:rbC 10s ease-in-out infinite}
@keyframes rbA{0%,100%{transform:translateX(-7%) rotate(-9deg) scaleY(1)}50%{transform:translateX(9%) rotate(-3deg) scaleY(1.55)}}
@keyframes rbB{0%,100%{transform:translateX(8%) rotate(6deg) scaleY(1.3)}50%{transform:translateX(-9%) rotate(-2deg) scaleY(.8)}}
@keyframes rbC{0%,100%{transform:translateX(-5%) rotate(-4deg) scaleY(.9)}50%{transform:translateX(7%) rotate(5deg) scaleY(1.5)}}
`,
  prompt: `Build an aurora background for a hero section. Make a full-bleed container with a pale sky gradient (white to very light blue). Inside it place three absolutely positioned ribbons, each about 160% of the container width and 30% of its height, with border-radius: 50%, a horizontal linear-gradient that fades to transparent at both ends, and filter: blur(20px). Each ribbon gets its own keyframes that combine translateX (about +-8%), a small rotate (-9deg to 6deg) and scaleY (0.8 to 1.55), with different durations between 9s and 12s, ease-in-out, infinite, so the ribbons drift past each other and fold. Animate transform only and add will-change: transform. Use soft sky blues plus one stronger accent ribbon at low opacity (0.55-0.8). Never use neon or purple.` + END,
});

// ---- 2 mesh ----------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-mesh',
  cat: 'backgrounds',
  title: 'Mesh gradient',
  sub: 'Four color points slowly shift',
  html: `<i class="mp p1"></i><i class="mp p2"></i><i class="mp p3"></i><i class="mp p4"></i>` + FG('Color, in motion.', 'A mesh that never repeats.'),
  css: BASE + `
.d{background:#FFEFEA}
.d .mp{position:absolute;width:95%;height:120%;border-radius:50%;will-change:transform}
.d .p1{left:-30%;top:-40%;background:radial-gradient(closest-side,rgba(255,68,51,.8),rgba(255,68,51,0));animation:mp1 15s ease-in-out infinite}
.d .p2{right:-35%;top:-30%;background:radial-gradient(closest-side,rgba(79,163,255,.75),rgba(79,163,255,0));animation:mp2 18s ease-in-out infinite}
.d .p3{left:-20%;bottom:-60%;background:radial-gradient(closest-side,rgba(255,255,255,.95),rgba(255,255,255,0));animation:mp3 16s ease-in-out infinite}
.d .p4{right:-25%;bottom:-55%;background:radial-gradient(closest-side,rgba(145,196,255,.9),rgba(145,196,255,0));animation:mp4 20s ease-in-out infinite}
@keyframes mp1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(38%,30%) scale(1.15)}}
@keyframes mp2{0%,100%{transform:translate(0,0) scale(1.1)}50%{transform:translate(-34%,38%) scale(.9)}}
@keyframes mp3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(42%,-28%) scale(1.2)}}
@keyframes mp4{0%,100%{transform:translate(0,0) scale(.95)}50%{transform:translate(-40%,-34%) scale(1.1)}}
`,
  prompt: `Build a mesh gradient background. Use a container with a light blue base color (#FFEFEA style, your palette) and four absolutely positioned layers, each about 95% wide and 120% tall, one near each corner. Each layer is a radial-gradient(closest-side, color, transparent) in a different tone: your strong accent at about 60% alpha, a mid sky blue, pure white, and a light blue. Animate each layer with its own transform keyframes (translate by 30-40% of its size plus a scale between 0.9 and 1.2), durations 15-20s, ease-in-out, infinite, so the four colors slowly trade places and the mesh never settles. Animate transform only, add will-change: transform, and keep the blending in the gradients rather than using mix-blend-mode or heavy blur filters, which keeps it cheap on mobile.` + END,
});

// ---- 3 dot spotlight --------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-dot-spotlight',
  cat: 'backgrounds',
  title: 'Dot grid spotlight',
  sub: 'Dots brighten around a moving light',
  html: `<i class="gl"></i><i class="dots"></i><i class="lit"></i>` + FG('Follow the light.', 'Move your pointer over this card.'),
  css: BASE + `
.d{background:#F8FAFE}
.d .dots,.d .lit,.d .gl{position:absolute;inset:0}
.d .dots{background-image:radial-gradient(circle,#C8D6EA 1.3px,transparent 1.8px);background-size:16px 16px}
.d .lit{background-image:radial-gradient(circle,#FF4433 1.7px,transparent 2.3px);background-size:16px 16px;-webkit-mask-image:radial-gradient(circle 78px at var(--x,50%) var(--y,50%),#000,transparent);mask-image:radial-gradient(circle 78px at var(--x,50%) var(--y,50%),#000,transparent)}
.d .gl{background:radial-gradient(circle 120px at var(--x,50%) var(--y,50%),rgba(79,163,255,.2),transparent)}
`,
  run: (root) => {
    let until = 0;
    let t = 0;
    let last = 0;
    root.addEventListener('pointermove', (e) => {
      const r = root.getBoundingClientRect();
      root.style.setProperty('--x', e.clientX - r.left + 'px');
      root.style.setProperty('--y', e.clientY - r.top + 'px');
      until = performance.now() + 2500;
    });
    const loop = (now) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = now - last;
      last = now;
      if (root.dataset.paused || dt > 200) return;
      if (now < until) return;
      t += dt / 1000;
      const w = root.clientWidth;
      const h = root.clientHeight;
      root.style.setProperty('--x', (w * (0.5 + 0.36 * Math.sin(t * 0.8))).toFixed(1) + 'px');
      root.style.setProperty('--y', (h * (0.5 + 0.32 * Math.sin(t * 1.3 + 1))).toFixed(1) + 'px');
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a dot grid background with a spotlight that follows the pointer. Layer one: a full-bleed element with background-image: radial-gradient(circle, a light grey-blue 1.3px, transparent 1.8px) and background-size: 16px 16px. Layer two: the same grid in your accent color, brighter and slightly larger dots, with mask-image: radial-gradient(circle 80px at var(--x) var(--y), #000, transparent) so only the dots near the light show. Add a faint radial-gradient glow at the same point. On pointermove update --x and --y on the container in a requestAnimationFrame callback (not on every event). When there is no pointer, drive --x and --y along a slow Lissajous path (sin with different frequencies) and yield to the real pointer for a couple of seconds after it moves. On touch devices keep the autoplay path.` + END,
});

// ---- 4 grid lines -----------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-grid-lines',
  cat: 'backgrounds',
  title: 'Moving grid floor',
  sub: 'A perspective grid scrolls toward you',
  html: `<i class="sun"></i><div class="fl"><div class="pl"></div></div>` + FG('Built to go far.', 'Infinite runway, zero effort.'),
  css: BASE + `
.d{background:linear-gradient(180deg,#F7FBFF 0%,#FFEFEA 46%,#F4F8FF 46%);place-items:start center}
.d .fg{margin-top:15%}
.d .sun{position:absolute;left:50%;top:33%;width:34%;aspect-ratio:1;margin-left:-17%;border-radius:50%;background:linear-gradient(180deg,#FFFFFF,#FFB8A3);opacity:.85}
.d .fl{position:absolute;left:0;right:0;bottom:0;height:54%;perspective:220px;perspective-origin:50% 0;overflow:hidden;-webkit-mask-image:linear-gradient(180deg,transparent 0%,#000 45%);mask-image:linear-gradient(180deg,transparent 0%,#000 45%)}
.d .pl{position:absolute;left:-60%;width:220%;top:0;height:400%;transform-origin:50% 0;transform:rotateX(72deg);background:linear-gradient(#FF997A 1.6px,transparent 1.6px) 0 0/30px 30px,linear-gradient(90deg,#FF997A 1.6px,transparent 1.6px) 0 0/30px 30px;animation:gf 1.8s linear infinite;will-change:transform}
@keyframes gf{from{transform:rotateX(72deg) translateY(0)}to{transform:rotateX(72deg) translateY(30px)}}
`,
  prompt: `Build a retro-clean perspective grid floor background. Make a horizon at about 46% of the container height: pale sky gradient above, with a soft sun disc (a circle with a white to light blue gradient) sitting on the horizon. Below it, a floor element with perspective: 220px and perspective-origin: 50% 0, overflow: hidden, and a mask-image: linear-gradient(transparent, #000 45%) so the grid fades into the horizon. Inside, one plane that is 220% wide and 400% tall, transform-origin: 50% 0, transform: rotateX(72deg), with two repeating 1.6px linear-gradient lines (horizontal and vertical) on a 30px background-size in a mid sky blue. Animate the plane with transform: rotateX(72deg) translateY(0) to translateY(30px) (exactly one cell), linear, 1.8s, infinite, so the loop is seamless and only transform animates.` + END,
});

// ---- 5 grain ---------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-grain',
  cat: 'backgrounds',
  title: 'Film grain',
  sub: 'Animated grain over a blue gradient',
  html: `<i class="gr"></i><svg class="nz" aria-hidden="true"><filter id="mlgn" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#mlgn)"/></svg>` + FG('Texture, not noise.', 'Grain that feels like film.'),
  css: BASE + `
.d{background:#8CC1FF}
.d .gr{position:absolute;left:-25%;top:-25%;width:150%;height:150%;background:radial-gradient(60% 60% at 30% 25%,#F4F9FF,transparent 70%),radial-gradient(70% 70% at 80% 80%,#2E86FF,transparent 70%),linear-gradient(160deg,#CFE4FF,#FF997A);animation:grs 16s ease-in-out infinite alternate;will-change:transform}
.d .nz{position:absolute;left:-10%;top:-10%;width:120%;height:120%;opacity:.5;mix-blend-mode:overlay;animation:grn 1s steps(1) infinite}
@keyframes grs{from{transform:rotate(0) scale(1)}to{transform:rotate(14deg) scale(1.1)}}
@keyframes grn{0%{transform:translate(0,0)}17%{transform:translate(-3%,2%)}34%{transform:translate(2%,-3%)}51%{transform:translate(-2%,-1%)}68%{transform:translate(3%,3%)}85%{transform:translate(-1%,3%)}}
`,
  prompt: `Build a film grain background over a blue gradient. Layer one is a slowly moving gradient: an oversized element (150% of the container) with two radial-gradients (a near-white highlight and a deeper accent blue) over a sky blue linear-gradient, animated with a gentle rotate and scale over about 16s, alternate. Layer two is the grain: an inline SVG with <filter><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter> applied to a full-size rect, positioned slightly larger than the container, with opacity around 0.5 and mix-blend-mode: overlay. Animate the grain layer with a steps(1) keyframe that jumps its translate between five or six offsets once per second so it flickers like film, without re-running the filter. Keep the grain subtle; if text looks dirty, lower the opacity.` + END,
});

// ---- 6 blobs ---------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-blobs',
  cat: 'backgrounds',
  title: 'Floating blobs',
  sub: 'Blurred blobs float and merge',
  html: `<i class="bl b1"></i><i class="bl b2"></i><i class="bl b3"></i><i class="bl b4"></i><div class="cd"><span class="lb">Weekly report</span><div class="rw"><i style="width:82%"></i></div><div class="rw"><i style="width:56%"></i></div><div class="rw"><i style="width:70%"></i></div></div>`,
  css: `
.d{display:grid;place-items:center;background:#FFFFFF}
.d .bl{position:absolute;border-radius:50%;filter:blur(16px);will-change:transform}
.d .b1{width:46%;aspect-ratio:1;left:6%;top:-10%;background:#FF7A3D;opacity:.55;animation:bf1 13s ease-in-out infinite}
.d .b2{width:38%;aspect-ratio:1;right:4%;top:22%;background:#A9CFFF;opacity:.8;animation:bf2 16s ease-in-out infinite}
.d .b3{width:44%;aspect-ratio:1;left:14%;bottom:-18%;background:#FF4433;opacity:.32;animation:bf3 15s ease-in-out infinite}
.d .b4{width:26%;aspect-ratio:1;right:24%;bottom:6%;background:#FF997A;opacity:.6;animation:bf4 11s ease-in-out infinite}
@keyframes bf1{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(58%,42%) scale(1.15)}}
@keyframes bf2{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-62%,24%) scale(1.25)}}
@keyframes bf3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(64%,-38%) scale(.85)}}
@keyframes bf4{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(-90%,-50%) scale(1.3)}}
.d .cd{position:relative;z-index:2;width:56%;display:grid;gap:9px;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,.82);box-shadow:var(--ml-shadow),inset 0 0 0 1px rgba(255,255,255,.9)}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}
.d .rw{height:6px;border-radius:3px;background:var(--ml-bar-2);overflow:hidden}
.d .rw i{display:block;height:100%;border-radius:3px;background:var(--ml-grad)}
`,
  prompt: `Build a floating blobs background behind a small glass card. Use a white container and four absolutely positioned circles of different sizes (26-46% of the container width), each filled with a flat blue from your palette (sky blue, light blue, accent) at 0.3-0.8 opacity, with filter: blur(16px). Give each its own transform keyframes that travel 40-90% of their own size in different directions and scale between 0.85 and 1.3, durations 11-16s, ease-in-out, infinite, so they drift into each other and the overlaps blend into new shades. Put the content (for example a card with background: rgba(255,255,255,.82) and a soft shadow) on top. Animate transform only; blur the elements statically, never animate the blur radius.` + END,
});

// ---- 7 particles (canvas) ------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-particles',
  cat: 'backgrounds',
  title: 'Particle drift',
  sub: 'Tiny dots float up with depth',
  html: `<canvas class="cv"></canvas>` + FG('Rising quietly.', 'Depth without the weight.'),
  css: BASE + `
.d{background:linear-gradient(180deg,#F4F9FF,#DDEBFF)}
.d .cv{position:absolute;inset:0;width:100%;height:100%;display:block}
`,
  run: (root) => {
    const cv = root.querySelector('.cv');
    const ctx = cv.getContext('2d');
    let w = 0;
    let h = 0;
    let dpr = 1;
    const ps = [];
    const fit = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = root.clientWidth;
      h = root.clientHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
    };
    fit();
    for (let i = 0; i < 70; i++) {
      const z = Math.random();
      ps.push({ x: Math.random(), y: Math.random(), z, ph: Math.random() * 6.28 });
    }
    let last = 0;
    let t = 0;
    const loop = (now) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = now - last;
      last = now;
      if (root.dataset.paused || dt > 200) return;
      if (root.clientWidth !== w || root.clientHeight !== h) fit();
      t += dt / 1000;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      for (const p of ps) {
        p.y -= (dt / 1000) * (0.02 + p.z * 0.09);
        if (p.y < -0.05) {
          p.y = 1.05;
          p.x = Math.random();
        }
        const x = (p.x + Math.sin(t * 0.5 + p.ph) * 0.012 * (0.4 + p.z)) * w;
        const y = p.y * h;
        const r = 0.9 + p.z * 2.6;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 6.2832);
        ctx.fillStyle = 'rgba(255,68,51,' + (0.14 + p.z * 0.5).toFixed(2) + ')';
        ctx.fill();
      }
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a particle drift background with a canvas. Put a <canvas> absolutely positioned behind the content, sized from clientWidth and clientHeight times devicePixelRatio (capped at 2) and resized when the container changes. Create about 60-80 particles with a random depth value z from 0 to 1. Depth controls everything: radius (1px to 3.5px), opacity (0.14 to 0.64) and upward speed (slow for far, faster for near), plus a tiny horizontal sine sway. In a requestAnimationFrame loop move each particle up by speed times delta time, wrap it to the bottom with a new random x when it leaves the top, clearRect and draw filled circles in your accent color with rgba alpha. Skip all work while the tab or the section is hidden, and cap the delta time so a pause does not cause a jump.` + END,
});

// ---- 8 waves (SVG) ---------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-waves',
  cat: 'backgrounds',
  title: 'Wave lines',
  sub: 'Stacked sine lines undulate',
  html: wavesSvg() + `<div class="fg"><h4 class="hl">Steady rhythm.</h4><p class="sb">Lines that keep time.</p></div>`,
  css: BASE + `
.d{background:linear-gradient(180deg,#FBFDFF,#EAF3FF);place-items:start center}
.d .fg{margin-top:10%}
.d svg{position:absolute;inset:0;width:100%;height:100%}
.d .wv{fill:none;stroke-width:1.6;vector-effect:non-scaling-stroke;animation:wvm var(--t) linear infinite;will-change:transform}
@keyframes wvm{from{transform:translateX(0)}to{transform:translateX(var(--p))}}
`,
  prompt: `Build a wave lines background with SVG. Use one full-size <svg> with viewBox="0 0 400 300" and preserveAspectRatio="none". Draw five to seven <path> lines stacked about 26 units apart in the lower two thirds, each a sine wave generated as a polyline (y = y0 + amplitude * sin(x / period * 2 * PI + phase)) that is wider than the viewBox (0 to 800). Give each line its own period (150-260), amplitude (9-17) and a stroke from light sky blue to your accent with rising opacity, stroke-width 1.6 and vector-effect: non-scaling-stroke. Animate each path with transform: translateX(0) to translateX(-period) linear infinite at different speeds (9-18s); because the translate equals exactly one period the loop is seamless. Put the headline in the clear top third.` + END,
});

// ---- 9 constellation (canvas) ---------------------------------------------------------------
ML.add({
  id: 'backgrounds-constellation',
  cat: 'backgrounds',
  title: 'Constellation',
  sub: 'Nodes drift and link when near',
  html: `<canvas class="cv"></canvas>` + FG('Everything connects.', 'Move over the card to join in.'),
  css: BASE + `
.d{background:radial-gradient(90% 90% at 50% 40%,#FFFFFF,#E4F0FF)}
.d .cv{position:absolute;inset:0;width:100%;height:100%;display:block}
`,
  run: (root) => {
    const cv = root.querySelector('.cv');
    const ctx = cv.getContext('2d');
    let w = 0;
    let h = 0;
    let dpr = 1;
    const fit = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = root.clientWidth;
      h = root.clientHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
    };
    fit();
    const ns = [];
    for (let i = 0; i < 34; i++) {
      const a = Math.random() * 6.28;
      const v = 0.012 + Math.random() * 0.02;
      ns.push({ x: Math.random(), y: Math.random(), vx: Math.cos(a) * v, vy: Math.sin(a) * v });
    }
    const m = { x: -1, y: -1, on: false };
    root.addEventListener('pointermove', (e) => {
      const r = root.getBoundingClientRect();
      m.x = (e.clientX - r.left) / r.width;
      m.y = (e.clientY - r.top) / r.height;
      m.on = true;
    });
    root.addEventListener('pointerleave', () => (m.on = false));
    let last = 0;
    const loop = (now) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = now - last;
      last = now;
      if (root.dataset.paused || dt > 200) return;
      if (root.clientWidth !== w || root.clientHeight !== h) fit();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);
      const pts = ns.map((n) => {
        n.x += n.vx * (dt / 1000);
        n.y += n.vy * (dt / 1000);
        if (n.x < 0 || n.x > 1) n.vx *= -1;
        if (n.y < 0 || n.y > 1) n.vy *= -1;
        return [n.x * w, n.y * h];
      });
      if (m.on) pts.push([m.x * w, m.y * h]);
      const lim = Math.min(w, h) * 0.3;
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1]);
          if (d < lim) {
            ctx.strokeStyle = 'rgba(255,68,51,' + ((1 - d / lim) * 0.42).toFixed(3) + ')';
            ctx.beginPath();
            ctx.moveTo(pts[i][0], pts[i][1]);
            ctx.lineTo(pts[j][0], pts[j][1]);
            ctx.stroke();
          }
        }
      }
      ctx.fillStyle = 'rgba(255,68,51,.7)';
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p[0], p[1], 2, 0, 6.2832);
        ctx.fill();
      }
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a constellation background with a canvas. Spawn about 35-60 nodes with random positions and slow random velocities, bouncing at the edges. Each frame in requestAnimationFrame, move the nodes by velocity times delta time, then for every pair closer than roughly 30% of the shorter container side draw a 1px line whose alpha falls off linearly with distance (max about 0.4) in your accent color, then draw each node as a 2px filled circle. Treat the pointer as one extra node so lines reach toward the cursor. Size the canvas from clientWidth and clientHeight times devicePixelRatio (cap 2), cap the node count on small screens (O(n squared) pair checks), and cap the frame delta so a tab switch does not teleport the nodes.` + END,
});

// ---- 10 conic -----------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-conic',
  cat: 'backgrounds',
  title: 'Conic sweep',
  sub: 'A soft conic gradient rotates',
  html: `<i class="cn"></i><div class="cd"><span class="lb">Pro plan</span><b class="pr">$12<small>/mo</small></b><span class="bt">Start free trial</span></div>`,
  css: `
.d{display:grid;place-items:center;background:#F6FAFF}
.d .cn{position:absolute;left:50%;top:50%;width:170%;aspect-ratio:1;margin:-85% 0 0 -85%;border-radius:50%;background:conic-gradient(from 0deg,#FFFFFF,#BBD9FF 18%,#FF7A3D 34%,#E4F0FF 52%,#8CC1FF 70%,#FFFFFF 86%,#BBD9FF);filter:blur(26px);opacity:.8;animation:cnr 16s linear infinite;will-change:transform}
@keyframes cnr{to{transform:rotate(360deg)}}
.d .cd{position:relative;z-index:2;width:50%;display:grid;gap:10px;justify-items:start;padding:16px 18px;border-radius:16px;background:rgba(255,255,255,.88);box-shadow:var(--ml-shadow-lg),inset 0 0 0 1px rgba(255,255,255,.9)}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}
.d .pr{font:600 32px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .pr small{font:500 12px/1 var(--ml-font);color:var(--ml-muted);letter-spacing:0;margin-left:2px}
.d .bt{padding:8px 12px;border-radius:999px;background:var(--ml-grad);color:#fff;font:600 11px/1 var(--ml-font)}
`,
  prompt: `Build a conic sweep glow behind a pricing or feature card. Place an oversized circle (about 170% of the container width, centered with negative margins) behind the card with background: conic-gradient(from 0deg, white, light blue, sky blue, pale blue, mid blue, white) and a static filter: blur(26px), opacity about 0.8. Rotate it with transform: rotate(0) to rotate(360deg), linear, 16s, infinite, will-change: transform. Because the gradient is smooth and the element is blurred, the rotation reads as slow drifting light behind the card instead of a spinner. Put the card on top with a translucent white background (rgba(255,255,255,.88)), a 1px white inner border and a soft layered shadow. Do not animate the blur and do not use backdrop-filter over the rotating layer.` + END,
});

// ---- 11 stripes ---------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-stripes',
  cat: 'backgrounds',
  title: 'Moving stripes',
  sub: 'Thin diagonal stripes glide',
  html: `<div class="rt"><i class="s1"></i><i class="s2"></i></div>` + FG('Smooth lines.', 'Thin, calm and in step.'),
  css: BASE + `
.d{background:linear-gradient(135deg,#FFFFFF,#E8F2FF)}
.d .rt{position:absolute;left:-30%;top:-30%;width:160%;height:160%;transform:rotate(-28deg);-webkit-mask-image:radial-gradient(closest-side,#000 40%,transparent 95%);mask-image:radial-gradient(closest-side,#000 40%,transparent 95%)}
.d .rt i{position:absolute;inset:0;will-change:transform}
.d .s1{background:repeating-linear-gradient(90deg,transparent 0 22px,rgba(255,68,51,.4) 22px 24px);animation:st1 2.6s linear infinite}
.d .s2{background:repeating-linear-gradient(90deg,transparent 0 56px,rgba(125,184,255,.34) 56px 70px);animation:st2 6s linear infinite}
@keyframes st1{to{transform:translateX(24px)}}
.d .fg::before{content:"";position:absolute;inset:-18px -34px;z-index:-1;background:radial-gradient(closest-side,rgba(255,255,255,.95) 55%,transparent)}
@keyframes st2{to{transform:translateX(-70px)}}
`,
  prompt: `Build a moving diagonal stripes background. Make a wrapper about 160% of the container size, centered, with transform: rotate(-28deg) and a radial mask (mask-image: radial-gradient(closest-side, #000 40%, transparent 95%)) so the stripes fade out toward the edges. Inside, stack two full-size layers. The first is a fine pattern, repeating-linear-gradient(90deg, transparent 0 22px, accent at 40% alpha 22px 24px); animate it with transform: translateX(0) to translateX(24px), linear, about 2.6s, infinite. The second is a wider, paler band pattern, repeating-linear-gradient(90deg, transparent 0 56px, light blue 56px 70px), animated the other way by exactly its period (translateX(-70px)) over 6s. Translating by exactly one pattern period makes the loop seamless, and only transform animates. Add will-change: transform.` + END,
});

// ---- 12 bokeh -----------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-bokeh',
  cat: 'backgrounds',
  title: 'Bokeh',
  sub: 'Soft circles of light fade in and out',
  html: bokehHtml + FG('Soft focus.', 'Out of focus, never out of mind.'),
  css: BASE + `
.d{background:linear-gradient(170deg,#FFF2ED,#F4F9FF 70%)}
.d .o{position:absolute;width:var(--s);aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 35% 30%,rgba(255,255,255,.95),rgba(125,184,255,.38) 60%,rgba(255,68,51,.12));box-shadow:inset 0 0 0 1px rgba(255,255,255,.8);opacity:0;animation:bk 7s ease-in-out var(--dl) infinite;will-change:transform,opacity}
@keyframes bk{0%{opacity:0;transform:translateY(8px) scale(.8)}35%,60%{opacity:.9}100%{opacity:0;transform:translateY(-14px) scale(1.12)}}
`,
  prompt: `Build a bokeh background. Place 10-12 absolutely positioned circles of varied sizes (24-54px) around a pale blue gradient. Each circle uses radial-gradient(circle at 35% 30%, white at 95%, light blue at 38% alpha, accent at 12% alpha) plus a 1px inset white ring, which gives a glassy out-of-focus disc. Animate each with a keyframe from opacity 0, translateY(8px), scale(0.8), to opacity 0.9 around 35-60%, back to opacity 0 with translateY(-14px) scale(1.12), 7s ease-in-out infinite, with negative or positive animation-delay values staggered between 0 and 5s so the discs never fade in unison. Animate only transform and opacity. Keep the discs low contrast so the text on top stays readable.` + END,
});

// ---- 13 topo ------------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-topo',
  cat: 'backgrounds',
  title: 'Topographic',
  sub: 'Contour lines shift slowly',
  html: topoSvg() + `<div class="fg"><span class="tag">Elev 1,240 m</span><h4 class="hl">Lay of the land.</h4></div>`,
  css: BASE + `
.d{background:#F7FAFF;place-items:end start}
.d .fg{margin:0 0 9% 8%;justify-items:start;text-align:left}
.d .tag{padding:4px 8px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font:500 10px/1 var(--ml-mono)}
.d svg{position:absolute;inset:0;width:100%;height:100%}
.d .tr{fill:none;stroke:#FFD0CA;stroke-width:1.1;transform-box:fill-box;transform-origin:center;animation:tb 10s ease-in-out var(--dl) infinite}
.d .tr.k{stroke:#FF7A3D;stroke-width:1.5}
.d .ga{animation:tgr 70s linear infinite}
.d .gb{animation:tgr 90s linear infinite reverse}
@keyframes tb{0%,100%{transform:scale(.965)}50%{transform:scale(1.045)}}
@keyframes tgr{to{transform:rotate(360deg)}}
`,
  prompt: `Build a topographic contour background with inline SVG. Generate two clusters of 8 nested closed paths in JS (or by hand). Each path is a smooth closed curve through about 16 points whose radius is r * (1 + 0.13 sin(2a + seed) + 0.08 sin(3a - 1.3 seed) + 0.04 sin(5a + 0.7 seed)), converted to cubic Beziers with Catmull-Rom control points; give each ring a slightly different seed so adjacent rings look related, like real contours. Stroke only: 1.1px in a pale blue, and every third ring 1.5px in a mid blue. Animate each ring with transform: scale(0.965) to scale(1.045) over 10s ease-in-out infinite using transform-box: fill-box and transform-origin: center, with negative animation-delay stepped per ring so the rings breathe in a ripple, and rotate each cluster very slowly (70-90s linear). Set vector strokes only, no fills, and keep the labels small and left aligned.` + END,
});

// ---- 14 ripples ---------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-ripples',
  cat: 'backgrounds',
  title: 'Ripples',
  sub: 'Rings expand from a point and fade',
  html: `<div class="src"><i class="rp"></i><i class="rp" style="--dl:1.2s"></i><i class="rp" style="--dl:2.4s"></i><i class="rp" style="--dl:3.6s"></i><b class="dot"></b></div>` + FG('Make an impact.', 'Every action travels outward.'),
  css: BASE + `
.d{background:radial-gradient(80% 80% at 50% 40%,#FFFFFF,#E2EEFF);place-items:end center}
.d .fg{margin-bottom:11%}
.d .src{position:absolute;left:50%;top:40%;width:0;height:0}
.d .rp{position:absolute;left:0;top:0;width:150px;aspect-ratio:1;margin:-75px 0 0 -75px;border-radius:50%;border:1.5px solid #FF7A3D;opacity:0;transform:scale(.05);animation:rpl 4.8s cubic-bezier(.2,.6,.3,1) var(--dl,0s) infinite;will-change:transform,opacity}
.d .dot{position:absolute;left:-5px;top:-5px;width:10px;height:10px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft)}
@keyframes rpl{0%{opacity:.8;transform:scale(.05)}100%{opacity:0;transform:scale(2.4)}}
`,
  prompt: `Build a ripples background centered on a point, for example behind a "listening" or "live" section. Put a zero-size anchor at the point (for example left: 50%, top: 40%). Inside it add four ring elements, each a 150px circle with margin to center it, border: 1.5px solid a mid sky blue, opacity 0 and transform: scale(0.05). Animate each with a keyframe from opacity 0.8 and scale(0.05) to opacity 0 and scale(2.4), 4.8s, cubic-bezier(0.2, 0.6, 0.3, 1), infinite, with animation-delay 0s, 1.2s, 2.4s and 3.6s so there is always a ring at a different stage. Add a solid 10px accent dot at the center with a soft 4px halo. Animate only transform and opacity. For an interactive version, spawn a new ring at the pointer on click and remove it on animationend.` + END,
});

// ---- 15 beams -----------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-beams',
  cat: 'backgrounds',
  title: 'Light beams',
  sub: 'Angled beams sweep across',
  html: `<div class="bw"><i class="bm" style="left:4%;width:12%;--dl:0s;--t:9s"></i><i class="bm" style="left:24%;width:7%;--dl:-3s;--t:11s"></i><i class="bm" style="left:42%;width:16%;--dl:-6s;--t:10s"></i><i class="bm" style="left:66%;width:9%;--dl:-2s;--t:12s"></i><i class="bm" style="left:82%;width:13%;--dl:-8s;--t:9.5s"></i></div>` + FG('See it clearly.', 'Light that moves with you.'),
  css: BASE + `
.d{background:linear-gradient(160deg,#FF8E6E,#BBD8FF 55%,#E4F0FF)}
.d .bw{position:absolute;left:-30%;top:-30%;width:160%;height:160%;transform:rotate(24deg)}
.d .bm{position:absolute;top:0;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.95),transparent);animation:bms var(--t) ease-in-out var(--dl) infinite;will-change:transform,opacity}
@keyframes bms{0%,100%{transform:translateX(-90%);opacity:.2}50%{transform:translateX(90%);opacity:.9}}
`,
  prompt: `Build a light beams background. Use a sky blue gradient container (deeper blue at the top left fading to near white). Inside place a wrapper about 160% of the container size, centered, rotated 24deg. Add five tall beams of different widths (7-16% of the wrapper) at different left offsets, each filled with linear-gradient(90deg, transparent, rgba(255,255,255,.7), transparent). Animate each beam with a keyframe from translateX(-90%) with opacity 0.2 through translateX(90%) with opacity 0.9 and back, using different durations (9-12s) and negative delays so beams cross each other. ease-in-out, infinite. Animate transform and opacity only. Keep the beams soft (no hard edges, no blur filter needed) and place content in a clear central area.` + END,
});

// ---- 16 tiles -----------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-tiles',
  cat: 'backgrounds',
  title: 'Tile shimmer',
  sub: 'Squares light up in a traveling wave',
  html: tilesHtml + `<div class="fg"><span class="pill"><i></i>All systems normal</span></div>`,
  css: BASE + `
.d{background:var(--ml-surface)}
.d .tg{position:absolute;inset:7%;display:grid;grid-template-columns:repeat(8,1fr);grid-template-rows:repeat(6,1fr);gap:6px}
.d .tg i{position:relative;border-radius:7px;background:#fff;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .tg i::after{content:"";position:absolute;inset:0;border-radius:7px;background:var(--ml-grad);opacity:0;animation:tl 3.6s ease-in-out var(--dl) infinite}
@keyframes tl{0%,52%,100%{opacity:0}18%,30%{opacity:.85}}
.d .pill{display:inline-flex;align-items:center;gap:7px;padding:9px 14px;border-radius:999px;background:#fff;box-shadow:var(--ml-shadow-lg);font:600 12px/1 var(--ml-font);color:var(--ml-ink)}
.d .pill i{width:7px;height:7px;border-radius:50%;background:var(--ml-accent)}
`,
  prompt: `Build a tile shimmer background. Make a CSS grid of 8 columns by 6 rows of white rounded squares (radius 7px, 6px gap, 1px inset hairline) covering the section. Give every tile an ::after overlay filled with your accent gradient and opacity 0. Animate the overlay with a keyframe where opacity is 0 at the start and the end and peaks at about 0.85 at 14%, back to 0 by 36%, duration 3.6s, ease-in-out, infinite, and set animation-delay per tile to (column + row) * 0.13s so the light travels as a diagonal wave. Set the delay with a CSS custom property per tile. Only opacity animates. Put a solid white pill with a soft shadow in the middle so the foreground stays readable over the lit tiles.` + END,
});

// ---- 17 blob morph (SVG + JS) ---------------------------------------------------------------
ML.add({
  id: 'backgrounds-blob-morph',
  cat: 'backgrounds',
  title: 'Morphing blob',
  sub: 'One SVG blob changes its shape',
  html: `<svg viewBox="-100 -100 200 200" aria-hidden="true"><defs><linearGradient id="mlbm" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#E3F0FF"/><stop offset="1" stop-color="#FF997A"/></linearGradient></defs><path class="b2" fill="none" stroke="#FFD0CA" stroke-width="1"/><path class="b1" fill="url(#mlbm)"/></svg>` + FG('Shape shifts.', 'One path, endless forms.'),
  css: BASE + `
.d{background:#FBFDFF}
.d svg{position:absolute;left:50%;top:50%;height:96%;aspect-ratio:1;transform:translate(-50%,-50%)}
`,
  run: (root) => {
    const b1 = root.querySelector('.b1');
    const b2 = root.querySelector('.b2');
    const N = 8;
    const shape = (t, base, ph) => {
      const pts = [];
      for (let k = 0; k < N; k++) {
        const a = (k / N) * Math.PI * 2;
        const r = base * (1 + 0.13 * Math.sin(2 * a + t * 0.8 + ph) + 0.09 * Math.sin(3 * a - t * 0.6 + ph * 2) + 0.05 * Math.sin(4 * a + t * 1.1));
        pts.push([r * Math.cos(a), r * Math.sin(a)]);
      }
      let d = 'M' + pts[0][0].toFixed(1) + ' ' + pts[0][1].toFixed(1);
      for (let k = 0; k < N; k++) {
        const p0 = pts[(k + N - 1) % N], p1 = pts[k], p2 = pts[(k + 1) % N], p3 = pts[(k + 2) % N];
        d += 'C' + (p1[0] + (p2[0] - p0[0]) / 6).toFixed(1) + ' ' + (p1[1] + (p2[1] - p0[1]) / 6).toFixed(1) + ' ' + (p2[0] - (p3[0] - p1[0]) / 6).toFixed(1) + ' ' + (p2[1] - (p3[1] - p1[1]) / 6).toFixed(1) + ' ' + p2[0].toFixed(1) + ' ' + p2[1].toFixed(1);
      }
      return d + 'Z';
    };
    let last = 0;
    let t = 0;
    const loop = (now) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = now - last;
      last = now;
      if (root.dataset.paused || dt > 200) return;
      t += dt / 1000;
      b1.setAttribute('d', shape(t, 62, 0));
      b2.setAttribute('d', shape(t, 80, 1.6));
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a morphing blob background with SVG and a small requestAnimationFrame loop (CSS cannot reliably interpolate path data across browsers). Draw one <path> in a square viewBox centered on the origin, filled with a light-to-mid sky blue linear-gradient, plus a second unfilled outline path with a 1px pale blue stroke behind it. Each frame compute 8 points around a circle, with radius = base * (1 + 0.13 sin(2a + 0.8t) + 0.09 sin(3a - 0.6t) + 0.05 sin(4a + 1.1t)), where a is the point angle and t is elapsed seconds. Convert the points to a closed cubic Bezier path with Catmull-Rom control points and set the d attribute. Use slow time factors so a full change takes 6-8 seconds. Cap the delta time, pause when offscreen, and give the SVG aria-hidden="true".` + END,
});

// ---- 18 clouds ----------------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-clouds',
  cat: 'backgrounds',
  title: 'Clouds parallax',
  sub: 'Cloud layers drift at different speeds',
  html:
    cloudLayer('far', [[6, 12, 46], [36, 30, 40], [66, 8, 50], [88, 34, 42]]) +
    cloudLayer('mid', [[12, 46, 70], [48, 58, 62], [82, 40, 74]]) +
    cloudLayer('near', [[0, 70, 108], [58, 78, 120]]) +
    FG('Head in the clouds.', 'Layers that move at their own pace.'),
  css: BASE + `
.d{background:linear-gradient(180deg,#A9CFFF 0%,#D5E7FF 55%,#F2F8FF 100%);place-items:start center}
.d .fg{margin-top:14%}
.d .ly{position:absolute;left:0;top:0;width:200%;height:100%;will-change:transform}
.d .cl{position:absolute;height:auto;fill:#fff}
.d .far{opacity:.55;animation:cly 80s linear infinite}
.d .mid{opacity:.8;animation:cly 46s linear infinite}
.d .near{opacity:.95;animation:cly 26s linear infinite}
@keyframes cly{to{transform:translateX(-50%)}}
`,
  prompt: `Build a clouds parallax background. Use a vertical sky gradient (mid sky blue at the top, near white at the bottom). Create three cloud layers, each a div twice the container width with the same set of inline SVG clouds (a single path made of circles, fill white) repeated in both halves, so translating the layer by -50% loops seamlessly. Far layer: small clouds, opacity 0.55, 80s. Middle layer: medium clouds, opacity 0.8, 46s. Near layer: large clouds low in the frame, opacity 0.95, 26s. All linear, infinite, transform: translateX(0) to translateX(-50%). The speed difference between layers sells the depth. Keep the headline in the clear sky area and make sure text stays readable when a near cloud passes behind it.` + END,
});

// ---- 19 isometric (SVG + JS) --------------------------------------------------------------------
ML.add({
  id: 'backgrounds-isometric',
  cat: 'backgrounds',
  title: 'Isometric blocks',
  sub: 'Blocks rise and fall in a wave',
  html: `<svg viewBox="0 0 400 300" aria-hidden="true"><g class="gg"></g></svg><div class="fg"><h4 class="hl">Built in layers.</h4><p class="sb">Depth you can feel.</p></div>`,
  css: BASE + `
.d{background:linear-gradient(180deg,#FBFDFF,#EAF3FF);place-items:start start}
.d .fg{margin:11% 0 0 8%;justify-items:start;text-align:left}
.d svg{position:absolute;inset:0;width:100%;height:100%}
.d .tp{fill:#F2F8FF;stroke:#fff;stroke-width:.8}
.d .lf{fill:#B6D4FF;stroke:#fff;stroke-width:.8}
.d .rt{fill:#FF997A;stroke:#fff;stroke-width:.8}
.d .hi .tp{fill:#FF7A3D}
.d .hi .lf{fill:#1F7BFF}
.d .hi .rt{fill:#FF4433}
`,
  run: (root) => {
    const NS = 'http://www.w3.org/2000/svg';
    const g = root.querySelector('.gg');
    const W = 25;
    const cx = 268;
    const cy = 122;
    const n = 6;
    const cols = [];
    const mk = (cls) => {
      const p = document.createElementNS(NS, 'polygon');
      p.setAttribute('class', cls);
      return p;
    };
    for (let s = 0; s <= (n - 1) * 2; s++) {
      for (let i = 0; i < n; i++) {
        const j = s - i;
        if (j < 0 || j >= n) continue;
        const grp = document.createElementNS(NS, 'g');
        const lf = mk('lf');
        const rt = mk('rt');
        const tp = mk('tp');
        grp.appendChild(lf);
        grp.appendChild(rt);
        grp.appendChild(tp);
        g.appendChild(grp);
        cols.push({ i, j, grp, lf, rt, tp, X: cx + (i - j) * W, Y: cy + (i + j) * (W / 2) });
      }
    }
    const draw = (t) => {
      for (const c of cols) {
        const k = 0.5 + 0.5 * Math.sin(t * 1.15 - (c.i + c.j) * 0.75);
        const h = 5 + 34 * k * k;
        const X = c.X;
        const Y = c.Y - h;
        const f = (a) => a.map((p) => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
        c.tp.setAttribute('points', f([[X, Y], [X + W, Y + W / 2], [X, Y + W], [X - W, Y + W / 2]]));
        c.lf.setAttribute('points', f([[X - W, Y + W / 2], [X, Y + W], [X, Y + W + h], [X - W, Y + W / 2 + h]]));
        c.rt.setAttribute('points', f([[X + W, Y + W / 2], [X, Y + W], [X, Y + W + h], [X + W, Y + W / 2 + h]]));
        c.grp.setAttribute('class', k > 0.9 ? 'hi' : '');
      }
    };
    let last = 0;
    let t = 0;
    draw(0);
    const loop = (now) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = now - last;
      last = now;
      if (root.dataset.paused || dt > 200) return;
      t += dt / 1000;
      draw(t);
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build an isometric block grid background with SVG. Use a 6 by 6 grid of columns. Project each cell with x = cx + (i - j) * W and y = cy + (i + j) * W / 2, where W is the half width of a cell. Draw each column as three polygons: a top diamond, a left face and a right face, in three tones of one blue (very light top, light blue left, mid blue right) with a thin white stroke. Create the polygons in painter order (sorted by i + j ascending) so nearer columns overlap farther ones. In a requestAnimationFrame loop set the height of each column to 5 + 34 * k squared, where k = 0.5 + 0.5 * sin(t * 1.15 - (i + j) * 0.75), so a wave of rising and falling blocks travels diagonally. Highlight the tallest column with your accent blue. Update only the points attribute, pause offscreen, and cap the delta time.` + END,
});

// ---- 20 radial pulse ----------------------------------------------------------------------------
ML.add({
  id: 'backgrounds-radial-pulse',
  cat: 'backgrounds',
  title: 'Radial glow',
  sub: 'A soft glow breathes behind a headline',
  html: `<i class="gw w2"></i><i class="gw w1"></i><div class="fg"><h4 class="hl">Calm by design.</h4><p class="sb">It breathes about once every seven seconds.</p></div>`,
  css: BASE + `
.d{background:#FFFFFF}
.d .hl{font-size:30px}
.d .gw{position:absolute;left:50%;top:50%;border-radius:50%;will-change:transform,opacity}
.d .w1{width:86%;aspect-ratio:1;margin:-43% 0 0 -43%;background:radial-gradient(closest-side,rgba(79,163,255,.42),rgba(79,163,255,.14) 55%,transparent);animation:gb 7s ease-in-out infinite}
.d .w2{width:130%;aspect-ratio:1;margin:-65% 0 0 -65%;background:radial-gradient(closest-side,rgba(255,68,51,.12),transparent);animation:gb 7s ease-in-out -3.5s infinite}
@keyframes gb{0%,100%{transform:scale(.94);opacity:.7}50%{transform:scale(1.07);opacity:1}}
`,
  prompt: `Build a breathing radial glow behind a hero headline. Use a white container. Center two absolutely positioned circles: an inner one about 86% of the container width with radial-gradient(closest-side, accent-light at 42% alpha, 14% alpha at 55%, transparent), and an outer one about 130% wide with a much fainter radial-gradient of your accent at 12% alpha. Animate both with the same keyframes, transform: scale(0.94) with opacity 0.7 at the ends and scale(1.07) with opacity 1 at 50%, duration 7s, ease-in-out, infinite, with the outer one offset by half a cycle (negative delay of 3.5s). The amplitude must stay low: it should feel like breathing, not pulsing. Animate only transform and opacity, and place the headline above at z-index 1 with enough contrast over the brightest glow.` + END,
});

})();
