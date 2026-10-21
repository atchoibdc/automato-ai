// Galleries and media. "Real component" demos on --ml-surface; photos are drawn with inline SVG scenes.
(() => {
const PAL = [
  ['#FFDCD6', '#F3F8FF', '#A9C9F7', '#FFA185', '#FF7A59', 80, 26, 11],
  ['#FFF2ED', '#FFFFFF', '#B7D3FA', '#FFA88F', '#FF5E4D', 34, 30, 9],
  ['#A8CBFF', '#E9F2FF', '#8DB5F0', '#5F97E6', '#FF5442', 92, 40, 7],
  ['#E1EEFF', '#F7FAFF', '#FFE8E2', '#9CC0F2', '#FF8A6B', 56, 22, 12],
  ['#9EC4FF', '#FFEFEA', '#7EA9EA', '#FF7043', '#C92818', 24, 34, 8],
  ['#CCE2FF', '#F6F9FF', '#AFCDF5', '#7FA9E9', '#FF6347', 100, 24, 10],
  ['#FFD8D0', '#EEF5FF', '#FFB299', '#FF8A6B', '#FF6D4F', 46, 36, 13],
  ['#FFEBE8', '#FBFDFF', '#FFD8D0', '#FF9A78', '#E63926', 70, 20, 6],
];
const sc = (i) => {
  const p = PAL[i % PAL.length];
  const k = 'g' + (i % PAL.length);
  const tree = i % 2 ? '<path d="M14 76l5-15 5 15zM24 78l4-11 4 11z" fill="' + p[4] + '" opacity=".9"/>' : '<path d="M96 74l5-14 5 14zM106 77l4-10 4 10z" fill="' + p[4] + '" opacity=".9"/>';
  return '<svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="' + k + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p[0] + '"/><stop offset="1" stop-color="' + p[1] + '"/></linearGradient></defs><rect width="120" height="90" fill="url(#' + k + ')"/><circle cx="' + p[5] + '" cy="' + p[6] + '" r="' + (p[7] + 6) + '" fill="#fff" opacity=".35"/><circle cx="' + p[5] + '" cy="' + p[6] + '" r="' + p[7] + '" fill="#fff" opacity=".95"/><path d="M0 60Q26 38 52 56T120 48V90H0Z" fill="' + p[2] + '"/><path d="M0 72Q32 52 64 70T120 62V90H0Z" fill="' + p[3] + '"/><path d="M0 82Q40 68 80 80T120 76V90H0Z" fill="' + p[4] + '"/>' + tree + '</svg>';
};
const IM = `.d .im{position:absolute;inset:0;overflow:hidden}
.d .im svg{width:100%;height:100%;display:block}`;
const S = `.d{background:var(--ml-surface)}`;
const BTN = `.d button{appearance:none;border:0;background:none;cursor:pointer}`;
const XI = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 6l12 12M18 6 6 18"/></svg>`;
const END = ` Plain HTML, CSS and JS, no libraries. Give every image meaningful alt text and keep keyboard access with visible focus-visible outlines.`;

ML.add({
  id: 'media-lightbox',
  cat: 'media',
  title: 'Lightbox grow',
  sub: 'A thumbnail grows to center and returns',
  html: `<div class="hd"><b>Lisbon trip</b><span>6 photos</span></div><div class="grid">${[0, 1, 2, 3, 4, 5].map((i) => `<button class="th" type="button" aria-label="Open photo ${i + 1}"><div class="im">${sc(i)}</div></button>`).join('')}</div><div class="lbx"><div class="scrim"></div><div class="big"><div class="im pic"></div><span class="x">${XI}</span></div></div>`,
  css: S + BTN + IM + `
.d .hd{position:absolute;left:14px;right:14px;top:12px;display:flex;justify-content:space-between;align-items:baseline}
.d .hd b{font:600 13px/1 var(--ml-font);letter-spacing:-.02em}
.d .hd span{font:500 10px/1 var(--ml-mono);color:var(--ml-muted)}
.d .grid{position:absolute;left:14px;right:14px;top:36px;bottom:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px;align-content:center}
.d .th{position:relative;aspect-ratio:4/3;border-radius:10px;overflow:hidden;box-shadow:var(--ml-shadow);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .th:hover{transform:scale(1.04)}
.d .lbx{position:absolute;inset:0;pointer-events:none}
.d .lbx.on{pointer-events:auto}
.d .scrim{position:absolute;inset:0;background:rgba(244,247,252,.82);opacity:0;transition:opacity .35s ease}
.d .lbx.on .scrim{opacity:1}
.d .big{position:absolute;inset:0;margin:auto;width:68%;aspect-ratio:4/3;height:auto;border-radius:14px;overflow:hidden;box-shadow:var(--ml-shadow-lg);opacity:0;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .x{position:absolute;right:8px;top:8px;width:22px;height:22px;display:grid;place-items:center;border-radius:50%;background:rgba(255,255,255,.9);color:var(--ml-ink);opacity:0;transition:opacity .25s ease .15s}
.d .lbx.on .x{opacity:1}
.d .x svg{width:12px;height:12px}
`,
  run: (root) => {
    const th = [...root.querySelectorAll('.th')];
    const lbx = root.querySelector('.lbx');
    const big = root.querySelector('.big');
    const pic = root.querySelector('.pic');
    const ord = [1, 4, 2, 5, 0, 3];
    let cur = -1;
    let user = 0;
    let k = 0;
    const mark = () => (user = performance.now() + 2500);
    root.addEventListener('pointerdown', mark);
    const xf = (i) => {
      const r = th[i].getBoundingClientRect();
      const p = root.getBoundingClientRect();
      const dx = r.left - p.left + r.width / 2 - (big.offsetLeft + big.offsetWidth / 2);
      const dy = r.top - p.top + r.height / 2 - (big.offsetTop + big.offsetHeight / 2);
      return 'translate(' + dx + 'px,' + dy + 'px) scale(' + r.width / big.offsetWidth + ')';
    };
    const open = (i) => {
      if (cur >= 0) return;
      cur = i;
      pic.innerHTML = th[i].querySelector('.im').innerHTML;
      big.style.transition = 'none';
      big.style.transform = xf(i);
      big.style.opacity = '1';
      void big.offsetWidth;
      th[i].style.visibility = 'hidden';
      big.style.transition = '';
      big.style.transform = 'none';
      lbx.classList.add('on');
    };
    const close = () => {
      if (cur < 0) return;
      const i = cur;
      lbx.classList.remove('on');
      big.style.transform = xf(i);
      setTimeout(() => {
        th[i].style.visibility = '';
        big.style.transition = 'none';
        big.style.opacity = '0';
        big.style.transform = 'none';
        void big.offsetWidth;
        big.style.transition = '';
        if (cur === i) cur = -1;
      }, 620);
    };
    th.forEach((t, i) => t.addEventListener('click', () => { mark(); open(i); }));
    lbx.addEventListener('click', () => { mark(); close(); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > user) {
        if (cur >= 0) close();
        else open(ord[k++ % ord.length]);
      }
      setTimeout(tick, cur >= 0 ? 2000 : 1700);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a lightbox where the clicked thumbnail itself grows into the centered viewer, then shrinks back to the exact same spot. Use the FLIP technique: on click read the thumbnail's getBoundingClientRect(), place a fixed-position viewer element at its final centered size, then set its transform to translate(dx, dy) scale(thumbWidth / viewerWidth) so it sits exactly over the thumbnail, force a reflow, and transition the transform to none over about 600ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.976 61.1%, 0.99 72.2%, 1 100%). Hide the original thumbnail while the viewer is open so it looks like one object, and fade a soft scrim in behind it. Closing runs the same transform back to the thumbnail rect, then restores it. Close on scrim click, Escape and a close button. Use a dialog element or role="dialog" with aria-modal, move focus in, trap it, and return it to the thumbnail on close. Animate transform and opacity only.` + END,
});

ML.add({
  id: 'media-masonry',
  cat: 'media',
  title: 'Masonry fade-up',
  sub: 'Uneven tiles rise in, column by column',
  html: `<div class="mz">${[
    [[3, 0], [2, 3], [4, 6]],
    [[2, 1], [4, 4], [3, 7]],
    [[4, 2], [3, 5], [2, 8]],
  ].map((c) => `<div class="col">${c.map(([f, i], n) => `<div class="t" style="--f:${f};--i:${i}"><div class="im">${sc(i + n)}</div></div>`).join('')}</div>`).join('')}</div>`,
  css: S + IM + `
.d .mz{position:absolute;inset:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.d .col{display:flex;flex-direction:column;gap:8px;min-height:0}
.d .col:nth-child(2){padding-top:14px}
.d .t{position:relative;flex:var(--f) 1 0;border-radius:11px;overflow:hidden;box-shadow:var(--ml-shadow);opacity:0;animation:up 6s infinite both;animation-delay:calc(var(--i) * 110ms)}
@keyframes up{0%,4%{opacity:0;transform:translateY(22px) scale(.96);animation-timing-function:var(--ml-spring)}22%,82%{opacity:1;transform:none;animation-timing-function:ease-in}94%,100%{opacity:0;transform:translateY(-8px) scale(.98)}}
`,
  prompt: `Build a masonry photo grid whose tiles fade and rise in one after another. Lay it out with three flex columns (or CSS columns: 3 with break-inside: avoid) so tiles of different heights pack tightly; give each tile its own aspect-ratio or flex weight and a 10-12px radius with a soft layered shadow. Start every tile at opacity: 0 and transform: translateY(24px) scale(.96), and reveal it with an IntersectionObserver (threshold 0.15) that adds a class setting opacity 1 and transform none, transitioning over about 700ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%). Stagger the delay by about 100ms in reading order, and offset the middle column by 14px so the grid feels organic. Reveal each tile once and never replay it. Set width and height on images to avoid layout shift and use loading="lazy". Under prefers-reduced-motion show all tiles immediately. Animate transform and opacity only.` + END,
});

ML.add({
  id: 'media-marquee-rows',
  cat: 'media',
  title: 'Photo marquee',
  sub: 'Two photo rows drift in opposite ways',
  html: `<div class="rows">${[0, 1].map((r) => `<div class="row"><div class="tr ${r ? 'rev' : ''}">${[0, 1].map(() => [0, 1, 2, 3, 4, 5].map((i) => `<div class="p ${(i + r) % 3 === 0 ? 'w' : ''}"><div class="im">${sc(i * 2 + r + 1)}</div></div>`).join('')).join('')}</div></div>`).join('')}</div>`,
  css: S + IM + `
.d .rows{position:absolute;inset:0;display:grid;align-content:center;gap:10px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.d .row{overflow:hidden;padding:4px 0}
.d .tr{display:flex;gap:10px;width:max-content;animation:mq 22s linear infinite}
.d .tr.rev{animation-direction:reverse;animation-duration:26s}
.d .p{position:relative;flex:none;width:76px;height:74px;border-radius:12px;overflow:hidden;box-shadow:var(--ml-shadow)}
.d .p.w{width:112px}
@keyframes mq{to{transform:translateX(-50%)}}
`,
  prompt: `Build a two-row photo marquee for a logo-wall or gallery strip. Each row is a flex track (display: flex; gap: 10px; width: max-content) holding the same set of photos twice back to back, so translating the track by exactly -50% loops with no jump. Animate transform: translateX(0) to translateX(-50%) with animation: linear infinite, about 22 seconds for the first row and 26 seconds for the second row with animation-direction: reverse, so the rows drift in opposite directions at slightly different speeds. Mix tile widths (some wide, some square) with 12px radius and a soft shadow. Fade both edges with mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent). Pause on hover or focus-within with animation-play-state: paused. Duplicate the second set with aria-hidden="true" and empty alt text so screen readers read each photo once. Under prefers-reduced-motion stop the animation and let the row scroll natively. Animate transform only.` + END,
});

ML.add({
  id: 'media-ken-burns',
  cat: 'media',
  title: 'Ken Burns slideshow',
  sub: 'Slow pan and zoom with crossfades',
  html: `<div class="fr">${[
    [0, '0%', '0%', '-4%', '-3%', 'Quiet coast'],
    [4, '-3%', '2%', '3%', '-2%', 'Blue hour'],
    [2, '2%', '-3%', '-3%', '3%', 'Open hills'],
  ].map(([s, x0, y0, x1, y1, cap], i) => `<div class="sl" style="--i:${i};--x0:${x0};--y0:${y0};--x1:${x1};--y1:${y1}"><div class="im">${sc(s)}</div><span class="cp">${cap}</span></div>`).join('')}<div class="sg">${[0, 1, 2].map((i) => `<i style="--i:${i}"><b></b></i>`).join('')}</div></div>`,
  css: S + IM + `
.d .fr{position:absolute;inset:14px;border-radius:16px;overflow:hidden;box-shadow:var(--ml-shadow-lg);background:var(--ml-bar-2)}
.d .sl{position:absolute;inset:0;opacity:0;animation:kb 12s linear infinite both;animation-delay:calc(var(--i) * 4s)}
.d .sl .im{animation:pan 12s linear infinite both;animation-delay:calc(var(--i) * 4s)}
.d .cp{position:absolute;left:12px;bottom:26px;padding:5px 10px;border-radius:999px;background:rgba(255,255,255,.88);font:600 11px/1 var(--ml-font);color:var(--ml-ink)}
.d .sg{position:absolute;left:12px;right:12px;bottom:10px;display:flex;gap:5px}
.d .sg i{flex:1;height:3px;border-radius:2px;background:rgba(255,255,255,.55);overflow:hidden}
.d .sg b{display:block;height:100%;background:#fff;transform-origin:left;transform:scaleX(0);animation:fl 12s linear infinite both;animation-delay:calc(var(--i) * 4s)}
@keyframes kb{0%{opacity:0}8%,33%{opacity:1}41%,100%{opacity:0}}
@keyframes pan{0%{transform:scale(1.04) translate(var(--x0),var(--y0))}41%,100%{transform:scale(1.24) translate(var(--x1),var(--y1))}}
@keyframes fl{0%{transform:scaleX(0)}33%,100%{transform:scaleX(1)}}
@media (prefers-reduced-motion:reduce){.d .sl .im{animation:none}}
`,
  prompt: `Build a Ken Burns slideshow: a hero image frame that slowly pans and zooms while slides crossfade. Stack the slides absolutely inside an overflow: hidden frame. Each slide's image runs a long transform animation, about 5 seconds, from scale(1.04) translate(var(--x0), var(--y0)) to scale(1.24) translate(var(--x1), var(--y1)) with linear timing, and every slide gets different start and end offsets so the drift direction varies. Crossfade slides by animating opacity over roughly 1 second, starting each slide's fade-in before the previous one is fully gone so there is never a blank frame. Offset slides with animation-delay (or drive the active class from a timer in JS). Add a caption pill and thin segmented progress bars at the bottom, each filling with transform: scaleX over its slide's duration. Animate transform and opacity only, use will-change: transform on the moving image, and size photos 20-30 percent larger than the frame so zoom never reveals edges. Provide pause on hover and a pause button; under prefers-reduced-motion drop the zoom and keep only the crossfade.` + END,
});

ML.add({
  id: 'media-compare',
  cat: 'media',
  title: 'Before and after',
  sub: 'Drag the divider, autoplay sweeps it',
  html: `<div class="cmp"><div class="im bf">${sc(3)}</div><div class="im af">${sc(4)}</div><span class="tag l">Before</span><span class="tag r">After</span><div class="hn"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 7-5 5 5 5M15 7l5 5-5 5"/></svg></span></div></div>`,
  css: S + IM + `
.d .cmp{position:absolute;inset:14px;border-radius:16px;overflow:hidden;box-shadow:var(--ml-shadow-lg);cursor:ew-resize;touch-action:none;background:var(--ml-bar-2)}
.d .bf{filter:grayscale(1) contrast(.8) brightness(1.08)}
.d .af{clip-path:inset(0 50% 0 0)}
.d .tag{position:absolute;top:10px;padding:5px 9px;border-radius:999px;background:rgba(255,255,255,.9);font:600 10.5px/1 var(--ml-font);color:var(--ml-ink)}
.d .tag.l{right:10px}
.d .tag.r{left:10px;background:var(--ml-accent);color:#fff}
.d .hn{position:absolute;left:0;top:0;bottom:0;width:2px;margin-left:-1px;background:#fff;box-shadow:0 0 0 1px rgba(35,15,10,.06),0 2px 10px rgba(35,15,10,.2)}
.d .hn span{position:absolute;left:50%;top:50%;width:34px;height:34px;margin:-17px 0 0 -17px;display:grid;place-items:center;border-radius:50%;background:#fff;color:var(--ml-accent);box-shadow:var(--ml-shadow-lg)}
.d .hn svg{width:16px;height:16px}
`,
  run: (root) => {
    const cmp = root.querySelector('.cmp');
    const af = root.querySelector('.af');
    const hn = root.querySelector('.hn');
    let p = 0.5;
    let drag = false;
    let user = 0;
    const set = (v) => {
      p = Math.max(0, Math.min(1, v));
      af.style.clipPath = 'inset(0 ' + (100 - p * 100) + '% 0 0)';
      hn.style.transform = 'translateX(' + p * cmp.clientWidth + 'px)';
    };
    const at = (e) => {
      const r = cmp.getBoundingClientRect();
      set((e.clientX - r.left) / r.width);
      user = performance.now() + 2500;
    };
    cmp.addEventListener('pointerdown', (e) => { drag = true; cmp.setPointerCapture(e.pointerId); at(e); });
    cmp.addEventListener('pointermove', (e) => { if (drag) at(e); });
    cmp.addEventListener('pointerup', () => (drag = false));
    cmp.addEventListener('pointercancel', () => (drag = false));
    let t0 = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      if (t > user) {
        const ph = ((t - t0) % 5200) / 5200;
        set(0.5 + 0.38 * Math.sin(ph * Math.PI * 2 - 0.4));
      } else t0 = t - ((t - t0) % 5200);
    };
    set(0.5);
    requestAnimationFrame(loop);
  },
  prompt: `Build a before and after image comparison slider. Stack the two images in one rounded container with overflow: hidden; the top image ("after") is clipped with clip-path: inset(0 calc(100% - var(--p)) 0 0) where --p is the divider position as a percentage, so no layout work happens while dragging. Draw a 2px white divider line with a round 34px handle that has chevron arrows, positioned with transform: translateX using the same value. Use pointer events on the container: pointerdown calls setPointerCapture and updates --p from (clientX - rect.left) / rect.width, pointermove updates it while captured, and set touch-action: pan-y so vertical page scrolling still works on phones. Put small "Before" and "After" pills in the corners. Make the handle a real range input (or role="slider" with aria-valuenow, left and right arrow keys moving 2 percent steps, Home and End) so keyboard users can operate it, with a visible focus-visible ring. Optionally sweep the divider once when the component scrolls into view. Under prefers-reduced-motion skip the sweep.` + END,
});

ML.add({
  id: 'media-hover-pan',
  cat: 'media',
  title: 'Hover zoom-pan',
  sub: 'The image zooms toward the pointer',
  html: `<div class="zm"><div class="lay"><svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="hp-s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD8D0"/><stop offset="1" stop-color="#F3F8FF"/></linearGradient></defs><rect width="120" height="90" fill="url(#hp-s)"/><circle cx="92" cy="20" r="8" fill="#fff"/><path d="M0 60Q30 44 60 56T120 50V90H0Z" fill="#A9C9F7"/><g fill="#FF8A6B"><rect x="8" y="44" width="10" height="30"/><rect x="20" y="36" width="12" height="38"/><rect x="34" y="48" width="9" height="26"/><rect x="48" y="30" width="14" height="44"/><rect x="64" y="42" width="10" height="32"/><rect x="76" y="34" width="12" height="40"/><rect x="90" y="46" width="10" height="28"/><rect x="102" y="38" width="11" height="36"/></g><g fill="#FFF0EE"><rect x="22" y="40" width="3" height="3"/><rect x="27" y="40" width="3" height="3"/><rect x="22" y="48" width="3" height="3"/><rect x="51" y="35" width="3" height="3"/><rect x="56" y="35" width="3" height="3"/><rect x="51" y="43" width="3" height="3"/><rect x="56" y="43" width="3" height="3"/><rect x="79" y="39" width="3" height="3"/><rect x="79" y="47" width="3" height="3"/><rect x="104" y="43" width="3" height="3"/></g><path d="M0 78Q40 66 80 77T120 72V90H0Z" fill="#FF5442"/></svg></div><span class="lens"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 7v10M7 12h10"/></svg></span><span class="tg">Hover to zoom</span></div>`,
  css: S + `
.d .zm{position:absolute;inset:14px;border-radius:16px;overflow:hidden;box-shadow:var(--ml-shadow-lg);cursor:zoom-in;background:var(--ml-bar-2)}
.d .lay{position:absolute;inset:0;will-change:transform}
.d .lay svg{width:100%;height:100%;display:block}
.d .lens{position:absolute;left:0;top:0;width:28px;height:28px;margin:-14px 0 0 -14px;display:grid;place-items:center;border-radius:50%;background:rgba(255,255,255,.9);color:var(--ml-accent);box-shadow:var(--ml-shadow);pointer-events:none}
.d .lens svg{width:14px;height:14px}
.d .tg{position:absolute;left:10px;bottom:10px;padding:5px 10px;border-radius:999px;background:rgba(255,255,255,.9);font:600 10.5px/1 var(--ml-font);transition:opacity .3s ease}
`,
  run: (root) => {
    const zm = root.querySelector('.zm');
    const lay = root.querySelector('.lay');
    const lens = root.querySelector('.lens');
    const tg = root.querySelector('.tg');
    let inside = false;
    let px = 0.5;
    let py = 0.5;
    let s = 1;
    let x = 0;
    let y = 0;
    let t0 = 0;
    zm.addEventListener('pointerenter', () => (inside = true));
    zm.addEventListener('pointerleave', () => (inside = false));
    zm.addEventListener('pointermove', (e) => {
      const r = zm.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width;
      py = (e.clientY - r.top) / r.height;
    });
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = zm.clientWidth;
      const h = zm.clientHeight;
      let tz = 1;
      if (inside) tz = 2.2;
      else {
        const ph = ((t - t0) % 7000) / 7000;
        px = 0.5 + 0.4 * Math.sin(ph * Math.PI * 2);
        py = 0.5 + 0.3 * Math.sin(ph * Math.PI * 4 + 1);
        tz = ph > 0.12 && ph < 0.88 ? 2.2 : 1;
      }
      s += (tz - s) * 0.08;
      const tx = (0.5 - px) * (tz - 1) * w;
      const ty = (0.5 - py) * (tz - 1) * h;
      x += (tx - x) * 0.1;
      y += (ty - y) * 0.1;
      lay.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + s.toFixed(3) + ')';
      lens.style.transform = 'translate(' + (px * w).toFixed(1) + 'px,' + (py * h).toFixed(1) + 'px) scale(' + (s > 1.5 ? 1.2 : 1) + ')';
      tg.style.opacity = s > 1.5 ? '0' : '1';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a hover zoom and pan image viewer for product or portfolio photos. Put a large image in a rounded container with overflow: hidden and cursor: zoom-in. On pointerenter zoom the image to about 2.2x; on pointermove pan it so the point under the cursor drifts toward the center: with the image scaled by s around its center, translate by ((0.5 - px) * (s - 1) * width, (0.5 - py) * (s - 1) * height) where px and py are the pointer position as 0-1 fractions of the container. Do not apply the values directly; ease them in a requestAnimationFrame loop with x += (target - x) * 0.1 so the image glides and follows with soft lag, and ease the scale the same way. On pointerleave return to scale 1. Animate transform only with will-change: transform, and use an image at least 2.5x the display size so the zoom stays sharp. Add a small round plus lens that follows the pointer. On touch devices use tap to toggle zoom and drag to pan. Keyboard: Enter toggles zoom and arrow keys pan. Disable the smoothing under prefers-reduced-motion.` + END,
});

ML.add({
  id: 'media-carousel',
  cat: 'media',
  title: 'Peek carousel',
  sub: 'Next slide peeks, active dot stretches',
  html: `<div class="cr"><div class="tk">${[0, 5, 2, 6].map((s, i) => `<div class="sd"><div class="im">${sc(s)}</div><span class="cp">${['Studio light', 'Open coast', 'High ridge', 'Still water'][i]}</span></div>`).join('')}</div><div class="dots">${[0, 1, 2, 3].map((i) => `<button type="button" class="${i ? '' : 'on'}" aria-label="Slide ${i + 1}"></button>`).join('')}</div></div>`,
  css: S + IM + BTN + `
.d .cr{position:absolute;inset:0;display:grid;grid-template-columns:minmax(0,1fr);align-content:center;gap:14px;padding:0 0 0 12%}
.d .tk{display:flex;gap:10px;transition:transform .8s var(--ml-spring);transform:translateX(calc(var(--n,0) * -1 * (100% * .7 + 10px)))}
.d .sd{position:relative;flex:none;width:70%;aspect-ratio:4/3;border-radius:14px;overflow:hidden;box-shadow:var(--ml-shadow);opacity:.55;transform:scale(.94);transition:opacity .5s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .sd.on{opacity:1;transform:none}
.d .cp{position:absolute;left:10px;bottom:10px;padding:5px 10px;border-radius:999px;background:rgba(255,255,255,.9);font:600 10.5px/1 var(--ml-font)}
.d .dots{display:flex;gap:5px;align-items:center}
.d .dots button{width:6px;height:6px;border-radius:999px;background:var(--ml-bar);transition:width var(--ml-spring-dur) var(--ml-spring),background .3s ease}
.d .dots button.on{width:22px;background:var(--ml-accent)}
`,
  run: (root) => {
    const tk = root.querySelector('.tk');
    const sd = [...root.querySelectorAll('.sd')];
    const dots = [...root.querySelectorAll('.dots button')];
    let n = 0;
    let user = 0;
    const go = (i) => {
      n = (i + sd.length) % sd.length;
      tk.style.setProperty('--n', n);
      sd.forEach((s, j) => s.classList.toggle('on', j === n));
      dots.forEach((d, j) => d.classList.toggle('on', j === n));
    };
    dots.forEach((d, j) => d.addEventListener('click', () => { user = performance.now() + 2500; go(j); }));
    sd.forEach((s, j) => s.addEventListener('click', () => { user = performance.now() + 2500; go(j); }));
    go(0);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > user) go(n + 1);
      setTimeout(tick, 1900);
    };
    setTimeout(tick, 1400);
  },
  prompt: `Build a peek carousel for a gallery or feature showcase. Use a flex track whose slides are 70 percent of the container wide with a 10px gap, and pad the container on the left so the active slide sits at the left of center and the next slide visibly peeks in on the right. Move the track with transform: translateX(calc(var(--n) * -1 * (70% + 10px))) where --n is the active index, transitioning over about 800ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%). Fade and shrink inactive slides to opacity .55 and scale(.94) so the active one clearly leads. Below the track show pagination dots; the active dot stretches from 6px to 22px wide as a pill and recolors to your accent, animating width with the same spring. Support swipe via scroll-snap-type: x mandatory with scroll-padding, or pointer drag, plus previous and next buttons and arrow keys. Autoplay every 4 seconds and pause on hover, focus or when the user interacts. Give the region aria-roledescription="carousel", label each slide "n of total", and drop autoplay and animation under prefers-reduced-motion.` + END,
});

ML.add({
  id: 'media-coverflow',
  cat: 'media',
  title: 'Coverflow',
  sub: 'Covers rotate around a center item',
  html: `<div class="cf">${[0, 1, 2, 3, 4].map((i) => `<button class="cv" type="button" aria-label="Cover ${i + 1}"><div class="im">${sc(i * 3 + 2)}</div></button>`).join('')}</div><div class="nm"><b>Slow Coast</b><span>Maya R.</span></div>`,
  css: S + IM + BTN + `
.d .cf{position:absolute;left:0;right:0;top:8%;height:62%;perspective:620px}
.d .cv{position:absolute;left:50%;top:0;width:44%;aspect-ratio:1;height:auto;margin-left:-22%;border-radius:12px;overflow:hidden;box-shadow:var(--ml-shadow-lg);transition:transform .8s var(--ml-spring),opacity .6s ease}
.d .nm{position:absolute;left:0;right:0;bottom:7%;display:grid;justify-items:center;gap:5px}
.d .nm b{font:600 14px/1 var(--ml-font);letter-spacing:-.02em}
.d .nm span{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const cv = [...root.querySelectorAll('.cv')];
    const nm = root.querySelector('.nm');
    const names = [['Slow Coast', 'Maya R.'], ['Paper Hills', 'Tomas K.'], ['Blue Hour', 'Priya N.'], ['Soft Static', 'Leo B.'], ['Open Air', 'Ines C.']];
    let a = 2;
    let user = 0;
    const layout = () => {
      cv.forEach((c, i) => {
        const d = i - a;
        const side = Math.sign(d);
        const abs = Math.abs(d);
        c.style.transform = 'translateX(' + (side * (abs ? 74 + (abs - 1) * 28 : 0)) + '%) translateZ(' + (abs ? -120 - abs * 40 : 40) + 'px) rotateY(' + -side * (abs ? 58 : 0) + 'deg)';
        c.style.zIndex = 10 - abs;
        c.style.opacity = abs > 2 ? '0' : '1';
      });
      nm.innerHTML = '<b>' + names[a][0] + '</b><span>' + names[a][1] + '</span>';
    };
    cv.forEach((c, i) => c.addEventListener('click', () => { user = performance.now() + 2500; a = i; layout(); }));
    layout();
    let dir = 1;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > user) {
        if (a + dir > cv.length - 1 || a + dir < 0) dir = -dir;
        a += dir;
        layout();
      }
      setTimeout(tick, 1500);
    };
    setTimeout(tick, 1100);
  },
  prompt: `Build a coverflow gallery with 3D covers. Put the covers in a container with perspective: 620px. Each cover is absolutely positioned at the horizontal center. Compute its offset d from the active index: the active cover sits at translateZ(40px) facing forward; covers on either side are pushed out with translateX(sign(d) * (48% + (|d| - 1) * 20%)), pushed back with translateZ(-120px - |d| * 40px) and turned toward the middle with rotateY(-sign(d) * 58deg). Set z-index to 10 - |d| so the center is on top, and fade covers beyond two steps away. Write the transform from JS on every change and transition it over about 800ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%). Show the title and artist of the active item below, swapping them as it changes. Clicking a cover, pressing arrow keys, or swiping selects it. Use role="listbox" semantics, keep covers focusable with a visible focus-visible ring, and with prefers-reduced-motion switch without the rotation animation. Animate transform and opacity only.` + END,
});

ML.add({
  id: 'media-stack-cycle',
  cat: 'media',
  title: 'Photo stack cycle',
  sub: 'The top photo flies to the back',
  html: `<div class="stk">${[0, 1, 2, 3].map((i) => `<div class="ph"><div class="pi"><div class="im">${sc(i * 2 + 1)}</div></div><span>${['Lisbon', 'Faro', 'Sintra', 'Porto'][i]}</span></div>`).join('')}</div>`,
  css: S + IM + `
.d .stk{position:absolute;inset:0;display:grid;place-items:center}
.d .ph{grid-area:1/1;width:46%;aspect-ratio:4/5;height:auto;padding:6px 6px 0;border-radius:6px;background:#fff;box-shadow:var(--ml-shadow-lg);transition:transform .7s var(--ml-spring);cursor:pointer}
.d .pi{position:relative;height:calc(100% - 26px);border-radius:3px;overflow:hidden}
.d .ph span{display:block;padding-top:7px;text-align:center;font:500 10px/1 var(--ml-mono);letter-spacing:.06em;color:var(--ml-muted)}
`,
  run: (root) => {
    const ph = [...root.querySelectorAll('.ph')];
    const order = [0, 1, 2, 3];
    const rot = [-2, 6, -8, 4];
    const off = [[0, 0], [9, -4], [-9, -9], [5, -13]];
    let user = 0;
    const place = () => {
      order.forEach((idx, p) => {
        const el = ph[idx];
        el.style.zIndex = 10 - p;
        el.style.transform = 'translate(' + off[p][0] + 'px,' + off[p][1] + 'px) rotate(' + rot[p] + 'deg) scale(' + (1 - p * 0.04) + ')';
      });
    };
    const fly = () => {
      const el = ph[order[0]];
      el.style.transform = 'translate(72%,-8%) rotate(17deg)';
      setTimeout(() => {
        order.push(order.shift());
        place();
      }, 380);
    };
    root.addEventListener('click', () => { user = performance.now() + 2500; fly(); });
    place();
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > user) fly();
      setTimeout(tick, 1700);
    };
    setTimeout(tick, 1000);
  },
  prompt: `Build a stacked photo gallery where the top photo flies off and tucks under the stack. Absolutely position four or five photo cards (white 6px frame, small caption, soft shadow) in the same spot, each with a slightly different rotation (for example -2, 6, -8, 4 degrees), a small offset and a scale that drops about 4 percent per layer, with z-index descending from the top. On click, swipe or a 1.7 second timer, send the top card out with transform: translate(72%, -8%) rotate(17deg), then after about 380ms move it to the end of the order array and rewrite every card's transform and z-index from its new position. Because the flown card now has the lowest z-index it slides back behind the others and the rest advance one layer. Use transition: transform 700ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%). Animate transform only. Make the stack a button with an accessible name ("Next photo"), support Enter, Space and arrow keys, and under prefers-reduced-motion swap cards with a simple crossfade.` + END,
});

ML.add({
  id: 'media-play-morph',
  cat: 'media',
  title: 'Play button morph',
  sub: 'Play morphs to pause, progress runs',
  html: `<div class="vd"><div class="im">${sc(6)}</div><div class="shade"></div><button class="pb" type="button" aria-label="Play video"><span class="ic"><i class="a"></i><i class="b"></i></span></button><div class="ctl"><span class="tm">0:00</span><div class="pr"><b></b></div><span class="tt">0:45</span></div></div>`,
  css: S + IM + BTN + `
.d .vd{position:absolute;inset:14px;border-radius:16px;overflow:hidden;box-shadow:var(--ml-shadow-lg);cursor:pointer;background:var(--ml-bar-2)}
.d .shade{position:absolute;left:0;right:0;bottom:0;height:46%;background:linear-gradient(to top,rgba(16,40,90,.5),transparent)}
.d .pb{position:absolute;left:50%;top:50%;width:58px;height:58px;margin:-29px 0 0 -29px;display:grid;place-items:center;border-radius:50%;background:rgba(255,255,255,.95);color:var(--ml-accent);box-shadow:var(--ml-shadow-lg);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .3s ease}
.d .pb:active{transform:scale(.92);transition-duration:90ms}
.d .ic{position:relative;width:20px;height:22px;display:block;margin-left:2px;transition:margin .4s ease}
.d .ic i{position:absolute;top:0;bottom:0;width:50%;background:currentColor;transition:clip-path .45s var(--ml-ease)}
.d .ic .a{left:0;clip-path:polygon(0 0,100% 25%,100% 75%,0 100%)}
.d .ic .b{left:50%;clip-path:polygon(0 25%,100% 50%,100% 50%,0 75%)}
.d .vd.on .ic{margin-left:0}
.d .vd.on .ic .a{clip-path:polygon(0 0,70% 0,70% 100%,0 100%)}
.d .vd.on .ic .b{clip-path:polygon(30% 0,100% 0,100% 100%,30% 100%)}
.d .vd.on .pb{opacity:0;transition:opacity .35s ease 1s,transform var(--ml-spring-dur) var(--ml-spring)}
.d .vd.on:hover .pb{opacity:1;transition-delay:0s}
.d .ctl{position:absolute;left:12px;right:12px;bottom:11px;display:flex;align-items:center;gap:8px;color:#fff;font:500 10px/1 var(--ml-mono)}
.d .pr{flex:1;height:4px;border-radius:2px;background:rgba(255,255,255,.4);overflow:hidden}
.d .pr b{display:block;height:100%;border-radius:2px;background:#fff;transform-origin:left;transform:scaleX(0)}
`,
  run: (root) => {
    const vd = root.querySelector('.vd');
    const pb = root.querySelector('.pb');
    const bar = root.querySelector('.pr b');
    const tm = root.querySelector('.tm');
    let playing = false;
    let prog = 0;
    let wait = 0;
    let user = 0;
    let last = 0;
    const set = (v) => {
      playing = v;
      vd.classList.toggle('on', v);
      pb.setAttribute('aria-label', v ? 'Pause video' : 'Play video');
    };
    vd.addEventListener('click', () => {
      user = performance.now() + 2500;
      if (!playing && prog >= 1) prog = 0;
      set(!playing);
    });
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = Math.min(t - last, 100);
      last = t;
      if (root.dataset.paused) return;
      if (playing) {
        prog += dt / 5200;
        if (prog >= 1) {
          prog = 1;
          set(false);
          wait = 0;
        }
      } else if (t > user) {
        wait += dt;
        if (wait > 1400) {
          if (prog >= 1) prog = 0;
          set(true);
          wait = 0;
        }
      }
      bar.style.transform = 'scaleX(' + prog.toFixed(4) + ')';
      const s = Math.round(prog * 45);
      tm.textContent = '0:' + String(s).padStart(2, '0');
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a video tile with a play button that morphs into a pause button. Draw the icon from two absolutely positioned halves, each with a clip-path polygon that has exactly four points so the browser can interpolate them. Play state: the left half is polygon(0 0, 100% 25%, 100% 75%, 0 100%) and the right half is polygon(0 25%, 100% 50%, 100% 50%, 0 75%), which together form a triangle. Pause state: left polygon(0 0, 70% 0, 70% 100%, 0 100%) and right polygon(30% 0, 100% 0, 100% 100%, 30% 100%), which form two bars. Transition clip-path over about 450ms with cubic-bezier(.32,.72,0,1). Put the icon in a 58px white circle that scales to 0.92 on :active with a 90ms transition, and fade it out about a second after playback starts, bringing it back on hover. Add a bottom control row with a current-time label and a thin progress bar that fills with transform: scaleX driven from the video's timeupdate event (or a requestAnimationFrame clock for a mock). Use a real button with aria-label toggling between Play and Pause and aria-pressed, a visible focus-visible ring, and Space to toggle. Under prefers-reduced-motion swap the icon instantly.` + END,
});

ML.add({
  id: 'media-thumb-sync',
  cat: 'media',
  title: 'Thumbnail strip sync',
  sub: 'Main photo changes, indicator glides',
  html: `<div class="gs"><div class="mn">${[0, 3, 5, 1, 7].map((s, i) => `<div class="sl ${i ? '' : 'on'}"><div class="im">${sc(s)}</div></div>`).join('')}</div><div class="st"><i class="ind"></i>${[0, 3, 5, 1, 7].map((s, i) => `<button class="tb" type="button" aria-label="Photo ${i + 1}"><div class="im">${sc(s)}</div></button>`).join('')}</div></div>`,
  css: S + IM + BTN + `
.d .gs{position:absolute;inset:14px;display:flex;flex-direction:column;gap:10px}
.d .mn{position:relative;flex:1;border-radius:14px;overflow:hidden;box-shadow:var(--ml-shadow-lg)}
.d .sl{position:absolute;inset:0;opacity:0;transform:scale(1.06);transition:opacity .6s ease,transform .9s var(--ml-spring)}
.d .sl.on{opacity:1;transform:none}
.d .st{position:relative;display:grid;grid-template-columns:repeat(5,1fr);gap:6px}
.d .tb{position:relative;aspect-ratio:4/3;border-radius:8px;overflow:hidden;opacity:.6;transition:opacity .3s ease}
.d .tb.on{opacity:1}
.d .ind{position:absolute;left:-3px;top:-3px;bottom:-3px;width:calc((100% - 24px) / 5 + 6px);border-radius:11px;border:2px solid var(--ml-accent);pointer-events:none;transform:translateX(calc(var(--n,0) * 100%));transition:transform .6s var(--ml-spring)}
`,
  run: (root) => {
    const sl = [...root.querySelectorAll('.sl')];
    const tb = [...root.querySelectorAll('.tb')];
    const ind = root.querySelector('.ind');
    let n = 0;
    let user = 0;
    const go = (i) => {
      n = (i + sl.length) % sl.length;
      ind.style.setProperty('--n', n);
      sl.forEach((s, j) => s.classList.toggle('on', j === n));
      tb.forEach((t, j) => t.classList.toggle('on', j === n));
    };
    tb.forEach((t, j) => t.addEventListener('click', () => { user = performance.now() + 2500; go(j); }));
    go(0);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > user) go(n + 1);
      setTimeout(tick, 1700);
    };
    setTimeout(tick, 1200);
  },
  prompt: `Build a product gallery with a main image and a thumbnail strip whose active indicator slides between thumbnails. Stack the large images absolutely and show one at a time: inactive images sit at opacity 0 and scale(1.06), the active image is at opacity 1 and scale(1), transitioning over about 600ms (opacity) and 900ms (transform) with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%). Below it, lay the thumbnails in a 5-column grid with a 6px gap. Add one extra absolutely positioned outline element with a 2px accent border and a 3px outset that is exactly one cell plus one gap wide, and move it with transform: translateX(calc(var(--n) * 100%)) so a single element glides under whichever thumb is active instead of each thumb toggling its own border. Dim inactive thumbs to opacity .6. Clicking a thumbnail, arrow keys or swipe changes the image. Make the thumbs a radiogroup or tablist with aria-selected, announce the current index, and keep a focus-visible ring. Under prefers-reduced-motion switch instantly.` + END,
});

ML.add({
  id: 'media-polaroids',
  cat: 'media',
  title: 'Polaroid scatter',
  sub: 'Photos drop and settle at odd angles',
  html: `<div class="sc2">${[
    [6, 8, -8, 0],
    [36, 4, 5, 1],
    [58, 14, -4, 2],
    [14, 42, 7, 3],
    [46, 42, -6, 4],
  ].map(([l, t, r, i]) => `<div class="pl" style="left:${l}%;top:${t}%;--r:${r}deg;--i:${i}"><div class="pi"><div class="im">${sc(i * 3 + 1)}</div></div><span>${['Spring', 'Cafe', 'Roof', 'Night', 'Ferry'][i]}</span>${i % 2 ? '<em></em>' : ''}</div>`).join('')}</div>`,
  css: S + IM + `
.d .sc2{position:absolute;inset:0}
.d .pl{position:absolute;width:36%;aspect-ratio:.86;height:auto;padding:5px 5px 0;border-radius:4px;background:#fff;box-shadow:var(--ml-shadow-lg);opacity:0;animation:drop 6.4s infinite both;animation-delay:calc(var(--i) * 300ms);z-index:calc(var(--i) + 1)}
.d .pi{position:relative;height:calc(100% - 22px);border-radius:2px;overflow:hidden}
.d .pl span{display:block;padding-top:6px;text-align:center;font:500 9.5px/1 var(--ml-mono);letter-spacing:.06em;color:var(--ml-muted)}
.d .pl em{position:absolute;left:50%;top:-6px;width:34px;height:12px;margin-left:-17px;background:rgba(185,212,255,.7);transform:rotate(-4deg)}
@keyframes drop{0%,3%{opacity:0;transform:translateY(-130%) rotate(calc(var(--r) * 3));animation-timing-function:var(--ml-bounce)}20%,82%{opacity:1;transform:rotate(var(--r));animation-timing-function:ease-in}94%,100%{opacity:0;transform:translateY(8px) rotate(var(--r))}}
`,
  prompt: `Build a polaroid scatter where photos drop onto a board and settle at random angles. Each polaroid is an absolutely positioned card with a white frame (5px sides, a taller bottom strip with a small monospace caption), a 4px radius and a layered shadow, placed with left and top percentages and a final rotation stored in a custom property --r between about -8 and 8 degrees. Add a translucent tape strip on some cards. Animate each card from translateY(-130%) rotate(calc(var(--r) * 3)) and opacity 0 to translateY(0) rotate(var(--r)) and opacity 1, using a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1.0 100%) over about 900ms, staggering the delay by 300ms and increasing z-index so later photos land on top of earlier ones. Trigger once with an IntersectionObserver. Hover lifts a card (translateY(-6px) rotate(0deg) and a bigger shadow) with the same spring. Animate transform and opacity only, give each image alt text, and under prefers-reduced-motion render the final layout immediately.` + END,
});

ML.add({
  id: 'media-list-hover',
  cat: 'media',
  title: 'List image reveal',
  sub: 'A preview follows the pointer over a list',
  html: `<div class="ls"><span class="lb">Selected work</span>${['Northwind', 'Atlas Studio', 'Paper Planes', 'Harbor Lane', 'Soft Static'].map((n, i) => `<div class="rw"><b>${n}</b><span>${['Brand', 'Web', 'Print', 'Motion', 'Audio'][i]}</span></div>`).join('')}</div><div class="pv">${[0, 2, 4, 6, 7].map((s) => `<div class="im">${sc(s)}</div>`).join('')}</div><svg class="cur" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l14 7.5-6 1.8-2.2 6.2z" fill="#1D1D1F" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
  css: S + IM + `
.d{display:grid;place-items:center}
.d .ls{position:relative;width:86%;display:grid}
.d .lb{padding-bottom:8px;font:500 10px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}
.d .rw{display:flex;justify-content:space-between;align-items:baseline;padding:9px 0;border-top:1px solid var(--ml-line);color:var(--ml-muted);transition:color .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .rw b{font:600 19px/1 var(--ml-font);letter-spacing:-.03em}
.d .rw span{font:500 10px/1 var(--ml-mono)}
.d .rw.on{color:var(--ml-ink);transform:translateX(6px)}
.d .pv{position:absolute;left:0;top:0;width:36%;aspect-ratio:4/3;height:auto;border-radius:12px;overflow:hidden;box-shadow:var(--ml-shadow-lg);opacity:0;pointer-events:none;will-change:transform}
.d .pv .im{opacity:0;transition:opacity .25s ease}
.d .pv .im.on{opacity:1}
.d .cur{position:absolute;left:0;top:0;width:18px;height:18px;margin:-3px 0 0 -4px;pointer-events:none;transition:opacity .2s ease;filter:drop-shadow(0 1px 2px rgba(35,15,10,.25))}
.d.real .cur{opacity:0}
`,
  run: (root) => {
    const rows = [...root.querySelectorAll('.rw')];
    const ls = root.querySelector('.ls');
    const pv = root.querySelector('.pv');
    const cur = root.querySelector('.cur');
    const ims = [...pv.querySelectorAll('.im')];
    let real = false;
    let px = 0;
    let py = 0;
    let x = 0;
    let y = 0;
    let sc = 0.7;
    let op = 0;
    let act = -1;
    let shown = 0;
    root.addEventListener('pointerenter', () => { real = true; root.classList.add('real'); });
    root.addEventListener('pointerleave', () => { real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', (e) => {
      const r = root.getBoundingClientRect();
      px = e.clientX - r.left;
      py = e.clientY - r.top;
    });
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const pw = pv.offsetWidth;
      const ph = pv.offsetHeight;
      const rh = rows[0].offsetHeight;
      const top = ls.offsetTop + rows[0].offsetTop;
      if (!real) {
        const p = (t % 9000) / 9000;
        const k = 2.5 + 2.1 * Math.sin(p * Math.PI * 2 - Math.PI / 2);
        py = top + rh * k;
        px = w * 0.46 + w * 0.12 * Math.sin(p * Math.PI * 6);
      }
      const i = Math.floor((py - top) / rh);
      const n = px > w * 0.04 && px < w * 0.96 && i >= 0 && i < rows.length ? i : -1;
      if (n !== act) {
        act = n;
        rows.forEach((r, j) => r.classList.toggle('on', j === n));
        if (n >= 0) {
          shown = n;
          ims.forEach((m, j) => m.classList.toggle('on', j === n));
        }
      }
      const tx = Math.min(px + 16, w - pw - 8);
      const ty = py - ph / 2;
      x += (tx - x) * 0.14;
      y += (ty - y) * 0.14;
      sc += ((act >= 0 ? 1 : 0.7) - sc) * 0.14;
      op += ((act >= 0 ? 1 : 0) - op) * 0.2;
      pv.style.opacity = op.toFixed(3);
      pv.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) scale(' + sc.toFixed(3) + ')';
      cur.style.transform = 'translate(' + px.toFixed(1) + 'px,' + py.toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a text list where hovering a row reveals a preview image that follows the pointer. Render the list as large semibold rows (about 20-40px on a real page) separated by 1px hairlines, with a small category label on the right; rows default to a muted color and the hovered row turns to full ink and nudges right with translateX(6px). Add one absolutely positioned preview card (rounded 12px, soft shadow) containing one image per row, stacked; on pointermove store the pointer coordinates, and in a requestAnimationFrame loop ease the card toward them (x += (targetX - x) * 0.14) so it trails the cursor with soft lag, offset about 16px to the right and vertically centered, clamped inside the viewport. Fade and scale the card from opacity 0 and scale(.7) to 1 when a row is hovered, and crossfade the images with opacity when the active row changes. Animate transform and opacity only, with pointer-events: none on the preview. On touch devices and for keyboard focus show the image inline below the focused row instead. Under prefers-reduced-motion drop the trailing lag and pin the image beside the row.` + END,
});

ML.add({
  id: 'media-drag-gallery',
  cat: 'media',
  title: 'Momentum gallery',
  sub: 'A strip glides on after a flick',
  html: `<div class="vp"><div class="tk">${[0, 3, 5, 1, 6, 2, 4, 7].map((s, i) => `<figure class="tl"><div class="pic"><div class="im">${sc(s)}</div></div><figcaption>${['Dawn', 'Harbor', 'Terrace', 'Meadow', 'Lantern', 'Cliffs', 'Valley', 'Dusk'][i]}</figcaption></figure>`).join('')}</div></div><div class="rl"><i></i></div>`,
  css: S + IM + `
.d .vp{position:absolute;left:0;right:0;top:0;bottom:30px;display:grid;align-content:center;overflow:hidden;cursor:grab;touch-action:pan-y}
.d .vp:active{cursor:grabbing}
.d .tk{display:flex;gap:10px;width:300%;padding:6px 14px;will-change:transform}
.d .tl{flex:1 1 0;min-width:0;display:grid;gap:7px;user-select:none}
.d .pic{position:relative;aspect-ratio:1/1.1;border-radius:12px;overflow:hidden;box-shadow:var(--ml-shadow)}
.d figcaption{font:500 10.5px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .rl{position:absolute;left:14px;right:14px;bottom:14px;height:3px;border-radius:2px;background:var(--ml-bar)}
.d .rl i{display:block;width:30%;height:100%;border-radius:2px;background:var(--ml-accent)}
`,
  run: (root) => {
    const vp = root.querySelector('.vp');
    const tk = root.querySelector('.tk');
    const rl = root.querySelector('.rl i');
    let x = 0;
    let v = 0;
    let drag = false;
    let lx = 0;
    let user = 0;
    let last = 0;
    let nextFlick = 1200;
    let dir = -1;
    const bounds = () => Math.min(0, vp.clientWidth - tk.offsetWidth);
    vp.addEventListener('pointerdown', (e) => { drag = true; lx = e.clientX; v = 0; vp.setPointerCapture(e.pointerId); });
    vp.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const dx = e.clientX - lx;
      lx = e.clientX;
      const mn = bounds();
      x += x > 0 || x < mn ? dx * 0.35 : dx;
      v = v * 0.5 + dx * 0.5;
      user = performance.now() + 2500;
    });
    const up = () => { drag = false; };
    vp.addEventListener('pointerup', up);
    vp.addEventListener('pointercancel', up);
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = Math.min((t - last) / 16.67, 3);
      last = t;
      if (root.dataset.paused) return;
      const mn = bounds();
      if (!drag) {
        if (x > 0 || x < mn) {
          x += ((x > 0 ? 0 : mn) - x) * 0.16 * dt;
          v = 0;
        } else {
          x += v * dt;
          v *= Math.pow(0.95, dt);
        }
        if (t > user && Math.abs(v) < 0.4 && t > nextFlick) {
          if (x < mn * 0.85) dir = 1;
          else if (x > mn * 0.15) dir = -1;
          v = dir * 17;
          nextFlick = t + 3300;
        }
      }
      tk.style.transform = 'translateX(' + x.toFixed(1) + 'px)';
      const prog = mn ? Math.max(0, Math.min(1, x / mn)) : 0;
      rl.style.transform = 'translateX(' + prog * (rl.parentElement.clientWidth * 0.7) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a horizontal gallery strip that you can drag and that keeps gliding after a flick. Put a flex track of tall photo cards (3:4, 12px radius, caption below) inside an overflow: hidden viewport with touch-action: pan-y and cursor: grab. Use pointer events: on pointerdown call setPointerCapture and zero the velocity; on pointermove add the delta to the track position and keep a smoothed velocity (v = v * 0.5 + dx * 0.5); on pointerup keep that velocity. Run a requestAnimationFrame loop that, when not dragging, adds the velocity to the position each frame and multiplies it by 0.95 so the strip coasts to a stop, scaled by frame time so it behaves the same at 60 and 120 Hz. Clamp to the content bounds with rubber banding: past an edge, drag at 35 percent of the delta and spring back with x += (bound - x) * 0.16 on release. Apply the position with transform: translateX only and will-change: transform. Show a thin progress rail below that moves with the position. Keep keyboard access with arrow keys and focusable cards, prevent image dragging with draggable="false", and under prefers-reduced-motion switch to native overflow-x scrolling with scroll-snap.` + END,
});

ML.add({
  id: 'media-accordion-panels',
  cat: 'media',
  title: 'Expanding panels',
  sub: 'The active image panel widens',
  html: `<div class="ac">${[0, 3, 1, 5, 2].map((s, i) => `<div class="pn ${i === 1 ? 'on' : ''}"><div class="im">${sc(s)}</div><div class="sh"></div><span class="no">0${i + 1}</span><div class="tt"><b>${['Coast', 'Harbor', 'Meadow', 'Ridge', 'Lake'][i]}</b><span>${['12 photos', '8 photos', '21 photos', '9 photos', '14 photos'][i]}</span></div></div>`).join('')}</div>`,
  css: S + IM + `
.d .ac{position:absolute;inset:14px;display:flex;gap:6px}
.d .pn{position:relative;flex:1 1 0;min-width:0;border-radius:14px;overflow:hidden;box-shadow:var(--ml-shadow);cursor:pointer;transition:flex-grow .8s var(--ml-spring)}
.d .pn.on{flex-grow:5}
.d .sh{position:absolute;inset:0;background:linear-gradient(to top,rgba(16,40,90,.5),transparent 60%);opacity:0;transition:opacity .4s ease}
.d .pn.on .sh{opacity:1}
.d .no{position:absolute;left:50%;bottom:10px;transform:translateX(-50%);font:600 10px/1 var(--ml-mono);color:#fff;opacity:.9;transition:opacity .25s ease}
.d .pn.on .no{opacity:0}
.d .tt{position:absolute;left:12px;bottom:12px;display:grid;gap:4px;color:#fff;white-space:nowrap;opacity:0;transform:translateY(8px);transition:opacity .35s ease,transform .5s var(--ml-spring)}
.d .pn.on .tt{opacity:1;transform:none;transition-delay:.15s}
.d .tt b{font:600 15px/1 var(--ml-font);letter-spacing:-.02em}
.d .tt span{font:500 10.5px/1 var(--ml-font);opacity:.85}
`,
  run: (root) => {
    const pn = [...root.querySelectorAll('.pn')];
    const ac = root.querySelector('.ac');
    let a = 1;
    let user = 0;
    let inside = false;
    const set = (i) => {
      a = i;
      pn.forEach((p, j) => p.classList.toggle('on', j === i));
    };
    pn.forEach((p, i) => {
      p.addEventListener('pointerenter', () => { user = performance.now() + 2500; set(i); });
      p.addEventListener('click', () => { user = performance.now() + 2500; set(i); });
    });
    ac.addEventListener('pointerenter', () => (inside = true));
    ac.addEventListener('pointerleave', () => (inside = false));
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !inside && performance.now() > user) set((a + 1) % pn.length);
      setTimeout(tick, 1700);
    };
    setTimeout(tick, 1200);
  },
  prompt: `Build an expanding image panel gallery: a row of tall, narrow image panels in a flex container with a 6px gap, where the hovered or focused panel widens and the others stay narrow. Give every panel flex: 1 1 0 and min-width: 0, and the active one flex-grow: 5, with transition: flex-grow 800ms and a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%). Animating flex-grow does cause layout, so keep the panel count small (4 to 6), fix the container height, and size every image with object-fit: cover and a fixed min width so the picture is simply revealed instead of rescaling. Collapsed panels show a small number at the bottom; the active panel fades in its title and subtitle with a 150ms delay and a short translateY(8px) rise, and gains a soft gradient scrim for legibility. Set the active panel on pointerenter, focus and click, and autoplay through them on a timer when idle. Make each panel a button or tab with aria-expanded and a visible focus-visible ring. On narrow screens stack the panels vertically. Under prefers-reduced-motion switch instantly.` + END,
});

ML.add({
  id: 'media-waveform',
  cat: 'media',
  title: 'Audio waveform',
  sub: 'Bars react as the playhead moves',
  html: `<div class="au"><div class="top"><div class="cv"><div class="im">${sc(5)}</div></div><div class="mt"><b>Morning Light</b><span>Maya R. - Single</span></div></div><div class="wv" role="img" aria-label="Waveform"><div class="bars"></div><i class="hd"></i></div><div class="tm"><span class="cu">0:00</span><span>3:12</span></div><button class="pb" type="button" aria-label="Play"><span class="ic"><i class="a"></i><i class="b"></i></span></button></div>`,
  css: S + IM + BTN + `
.d{display:grid;place-items:center}
.d .au{width:86%;display:grid;gap:12px;padding:16px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);justify-items:stretch}
.d .top{display:flex;align-items:center;gap:10px}
.d .cv{position:relative;flex:none;width:38px;height:38px;border-radius:9px;overflow:hidden}
.d .mt{display:grid;gap:4px}
.d .mt b{font:600 13px/1 var(--ml-font);letter-spacing:-.02em}
.d .mt span{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
.d .wv{position:relative;height:50px;cursor:pointer}
.d .bars{position:absolute;inset:0;display:flex;align-items:center;gap:2px}
.d .bars i{flex:1;height:100%;border-radius:2px;background:var(--ml-bar);transform:scaleY(.3);transition:background .25s ease}
.d .bars i.pl{background:var(--ml-accent)}
.d .hd{position:absolute;left:0;top:-2px;bottom:-2px;width:2px;margin-left:-1px;border-radius:1px;background:var(--ml-ink)}
.d .tm{display:flex;justify-content:space-between;font:500 10px/1 var(--ml-mono);color:var(--ml-muted)}
.d .pb{justify-self:center;width:42px;height:42px;margin-top:-2px;display:grid;place-items:center;border-radius:50%;background:var(--ml-accent);color:#fff;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .pb:active{transform:scale(.92);transition-duration:90ms}
.d .ic{position:relative;width:14px;height:16px;display:block;margin-left:2px;transition:margin .4s ease}
.d .ic i{position:absolute;top:0;bottom:0;width:50%;background:currentColor;transition:clip-path .45s var(--ml-ease)}
.d .ic .a{left:0;clip-path:polygon(0 0,100% 25%,100% 75%,0 100%)}
.d .ic .b{left:50%;clip-path:polygon(0 25%,100% 50%,100% 50%,0 75%)}
.d .au.on .ic{margin-left:0}
.d .au.on .ic .a{clip-path:polygon(0 0,70% 0,70% 100%,0 100%)}
.d .au.on .ic .b{clip-path:polygon(30% 0,100% 0,100% 100%,30% 100%)}
`,
  run: (root) => {
    const au = root.querySelector('.au');
    const wv = root.querySelector('.wv');
    const bars = root.querySelector('.bars');
    const hd = root.querySelector('.hd');
    const pb = root.querySelector('.pb');
    const cu = root.querySelector('.cu');
    const N = 38;
    const base = [];
    for (let i = 0; i < N; i++) {
      bars.appendChild(document.createElement('i'));
      base.push(0.22 + 0.72 * Math.abs(Math.sin(i * 1.3) * Math.cos(i * 0.37 + 0.6)));
    }
    const el = [...bars.children];
    let playing = false;
    let prog = 0;
    let wait = 0;
    let user = 0;
    let last = 0;
    const set = (v) => {
      playing = v;
      au.classList.toggle('on', v);
      pb.setAttribute('aria-label', v ? 'Pause' : 'Play');
    };
    pb.addEventListener('click', () => { user = performance.now() + 2500; if (!playing && prog >= 1) prog = 0; set(!playing); });
    wv.addEventListener('pointerdown', (e) => {
      const r = wv.getBoundingClientRect();
      prog = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
      user = performance.now() + 2500;
    });
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = Math.min(t - last, 100);
      last = t;
      if (root.dataset.paused) return;
      if (playing) {
        prog += dt / 7000;
        if (prog >= 1) { prog = 1; set(false); wait = 0; }
      } else if (t > user) {
        wait += dt;
        if (wait > 1300) { if (prog >= 1) prog = 0; set(true); wait = 0; }
      }
      const head = prog * N;
      for (let i = 0; i < N; i++) {
        const d = i + 0.5 - head;
        const near = playing ? Math.exp(-(d * d) / 14) : 0;
        const wob = playing ? 0.5 + 0.5 * Math.sin(t * 0.012 + i * 1.7) : 0;
        const s = Math.min(1, base[i] * (1 + near * (0.15 + 0.6 * wob)));
        el[i].style.transform = 'scaleY(' + s.toFixed(3) + ')';
        el[i].classList.toggle('pl', i + 0.5 < head);
      }
      hd.style.transform = 'translateX(' + (prog * wv.clientWidth).toFixed(1) + 'px)';
      const sec = Math.round(prog * 192);
      cu.textContent = Math.floor(sec / 60) + ':' + String(sec % 60).padStart(2, '0');
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build an audio player card with a live waveform. Render about 40 bars in a flex row (2px gap, 2px radius, full-height elements scaled with transform: scaleY(h)) from an array of normalized peaks; bars before the playhead take your accent color, the rest a light grey-blue. Add a 2px ink playhead line moved with transform: translateX(progress * width). While playing, run a requestAnimationFrame loop that sets progress from audio.currentTime / audio.duration, and boosts bars close to the playhead with a gaussian falloff, scale = peak * (1 + exp(-(d * d) / 14) * (0.15 + 0.6 * wobble)) where wobble is a sine of time plus the bar index, so the bars around the playhead dance while the rest stay still. For real audio compute peaks once with the Web Audio API (decodeAudioData, then max per bucket) or ship them as JSON. Clicking or dragging the waveform seeks. Include cover art, title, artist, elapsed and total time in tabular monospace, and a round play button whose icon morphs between play and pause with equal-point clip-path polygons over 450ms. Use a real button with aria-label toggling Play and Pause, expose the waveform as role="slider" with arrow-key seeking, and under prefers-reduced-motion stop the wobble and move only the playhead.` + END,
});
})();
