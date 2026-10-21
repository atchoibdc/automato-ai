// Stats and numbers. "Real component" demos: KPI cards, counters and charts on --ml-surface.
(() => {
const C = `.d{display:grid;place-items:center;background:var(--ml-surface)}`;
const CARD = `.d .card{width:84%;display:grid;gap:14px;padding:16px 18px;background:var(--ml-bg);border-radius:16px;box-shadow:var(--ml-shadow)}
.d .lb{font:500 10.5px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}`;
const END = ` Format numbers with Intl.NumberFormat, keep the final value in the DOM text or an aria-label for screen readers, and under prefers-reduced-motion render the final state with no animation. Plain HTML, CSS and JS, no libraries.`;

ML.add({
  id: 'stats-count-up',
  cat: 'stats',
  title: 'Count up',
  sub: 'A big number counts up and decelerates',
  html: `<div class="k"><span class="lb">Customers served</span><div class="n" aria-live="off">0</div><span class="sb">Since January</span></div>`,
  css: C + `
.d .k{display:grid;justify-items:center;gap:10px}
.d .lb{font:500 10.5px/1 var(--ml-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ml-muted)}
.d .n{font:600 70px/1 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .sb{font:500 12px/1 var(--ml-font);color:var(--ml-accent-ink);padding:6px 11px;border-radius:999px;background:var(--ml-accent-soft)}
`,
  run: (root) => {
    const n = root.querySelector('.n');
    const target = 24860;
    const cycle = 5200;
    const dur = 1900;
    let e = 0;
    let last = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = t - last;
      last = t;
      if (root.dataset.paused || dt > 200) return;
      e = (e + dt) % cycle;
      const p = Math.min(Math.max((e - 250) / dur, 0), 1);
      const k = 1 - Math.pow(1 - p, 4);
      n.textContent = Math.round(target * k).toLocaleString('en-US');
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a count-up statistic. Show a big semibold number (about 64-72px, tight tracking, font-variant-numeric: tabular-nums so the width stays still) with a small uppercase label above it. When the block scrolls into view (IntersectionObserver, threshold 0.5, fire once), animate from 0 to the target in a requestAnimationFrame loop over 1.8-2 seconds using an ease-out-quart curve: value = target * (1 - Math.pow(1 - t, 4)), where t is elapsed / duration clamped to 1. That makes it race at first and settle gently on the final digits. Format each frame with toLocaleString('en-US'). Put the final number in an aria-label and mark the ticking text aria-hidden so screen readers do not hear every frame; under prefers-reduced-motion print the final value immediately.`,
});

ML.add({
  id: 'stats-odometer',
  cat: 'stats',
  title: 'Odometer metric',
  sub: 'A revenue stat rolls digit by digit',
  html: `<div class="card"><div class="top"><span class="lb">Revenue</span><span class="live"><i></i>Live</span></div><div class="od" aria-label="Revenue"></div><span class="ft">Updated just now</span></div>`,
  css: C + CARD + `
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .live{display:inline-flex;align-items:center;gap:5px;font:500 10.5px/1 var(--ml-font);color:var(--ml-accent-ink);padding:4px 8px;border-radius:999px;background:var(--ml-accent-soft)}
.d .live i{width:5px;height:5px;border-radius:50%;background:var(--ml-accent);animation:pl 1.6s ease-in-out infinite}
.d .od{display:flex;justify-content:center;align-items:center;gap:4px;font:600 40px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .col{position:relative;width:.7em;height:1.3em;overflow:hidden;border-radius:8px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .col::after{content:"";position:absolute;left:0;right:0;top:50%;height:1px;background:var(--ml-line)}
.d .strip{display:block;transition:transform 900ms var(--ml-bounce)}
.d .strip span{display:grid;place-items:center;height:1.3em}
.d .pre,.d .cm{align-self:flex-end;padding-bottom:.18em;color:var(--ml-muted)}
.d .ft{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
@keyframes pl{0%,100%{opacity:1}50%{opacity:.35}}
`,
  run: (root) => {
    const od = root.querySelector('.od');
    const vals = [48392, 51207, 49860, 53014];
    const strips = [];
    const add = (cls, txt) => {
      const s = document.createElement('span');
      s.className = cls;
      s.textContent = txt;
      od.appendChild(s);
    };
    add('pre', '$');
    for (const ch of '00,000') {
      if (ch === ',') {
        add('cm', ',');
        continue;
      }
      const col = document.createElement('div');
      col.className = 'col';
      const strip = document.createElement('div');
      strip.className = 'strip';
      strip.innerHTML = '0123456789'.split('').map((d) => '<span>' + d + '</span>').join('');
      col.appendChild(strip);
      od.appendChild(col);
      strips.push(strip);
    }
    const show = (v, delayed) => {
      String(v).split('').forEach((d, i) => {
        strips[i].style.transitionDelay = delayed ? (strips.length - 1 - i) * 80 + 'ms' : '0ms';
        strips[i].style.transform = 'translateY(' + -d * 10 + '%)';
      });
      od.setAttribute('aria-label', '$' + v.toLocaleString('en-US'));
    };
    let k = 0;
    show(vals[0], false);
    const next = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        k = (k + 1) % vals.length;
        show(vals[k], true);
      }
      setTimeout(next, 2600);
    };
    setTimeout(next, 1300);
  },
  prompt: `Build a metric card whose number rolls like a mechanical odometer. Each digit is a small rounded tile (surface-tint background, 1px inset hairline, a faint center line) of fixed width and height with overflow: hidden, holding a vertical strip of the digits 0-9. Show a digit by setting transform: translateY(calc(d * -10%)) on the strip with transition: transform 900ms and a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1.0 100%). Stagger tiles right to left (about 80ms each) so the ones digit lands first. Add a currency prefix and static commas in a muted color, a small "Live" pill with a softly pulsing dot, and a footnote. Use tabular-nums. Update an aria-label with the real value on every change and hide the strips from assistive tech. Under prefers-reduced-motion remove the transition.`,
});

ML.add({
  id: 'stats-bars',
  cat: 'stats',
  title: 'Progress bars',
  sub: 'Labeled bars fill with a spring',
  html: `<div class="card"><span class="lb">Team scores</span>
<div class="r" style="--v:.92;--i:0"><span>Quality</span><div class="tk"><i></i></div><b>92%</b></div>
<div class="r" style="--v:.78;--i:1"><span>Speed</span><div class="tk"><i></i></div><b>78%</b></div>
<div class="r" style="--v:.85;--i:2"><span>Support</span><div class="tk"><i></i></div><b>85%</b></div>
<div class="r" style="--v:.64;--i:3"><span>Reach</span><div class="tk"><i></i></div><b>64%</b></div></div>`,
  css: C + CARD + `
.d .card{gap:13px}
.d .r{display:grid;grid-template-columns:50px 1fr 30px;align-items:center;gap:10px;font:500 12px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .r b{font:600 12px/1 var(--ml-font);text-align:right;color:var(--ml-ink);animation:vl 5.6s ease infinite both;animation-delay:calc(var(--i) * 120ms)}
.d .tk{height:9px;border-radius:999px;background:var(--ml-bar-2);overflow:hidden}
.d .tk i{display:block;height:100%;border-radius:999px;background:var(--ml-grad);transform-origin:left center;transform:scaleX(0);animation:fill 5.6s infinite both;animation-delay:calc(var(--i) * 120ms)}
.d .r:nth-child(n) .tk i{width:calc(var(--v) * 100%)}
@keyframes fill{0%,6%{transform:scaleX(0);animation-timing-function:var(--ml-bounce)}34%,84%{transform:scaleX(1);animation-timing-function:ease-in}96%,100%{transform:scaleX(0)}}
@keyframes vl{0%,14%{opacity:0}34%,84%{opacity:1}94%,100%{opacity:0}}
`,
  prompt: `Build a set of labeled progress bars that fill with a spring. Each row is a CSS grid (label, track, value). The track is a 9px pill with a light tint and overflow: hidden. The fill is a pill with your accent gradient whose width equals the final value (set with a custom property, width: calc(var(--v) * 100%)) and which is animated with transform: scaleX(0) to scaleX(1), transform-origin: left center, so the animation is compositor-only. Use a slight-overshoot spring easing such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1.0 100%) over about 800ms, and stagger rows by 120ms. Fade each value label in as its bar lands. Trigger on scroll-in with an IntersectionObserver. Give each track role="progressbar" with aria-valuenow, aria-valuemin and aria-valuemax, and a visible text value; under prefers-reduced-motion show full bars immediately.`,
});

ML.add({
  id: 'stats-ring',
  cat: 'stats',
  title: 'Ring progress',
  sub: 'A ring fills to 72% and holds',
  html: `<div class="card"><div class="rg"><svg viewBox="0 0 120 120" aria-hidden="true"><defs><linearGradient id="sr-g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--ml-accent-2)"/><stop offset="1" style="stop-color:var(--ml-accent)"/></linearGradient></defs><circle class="bg" cx="60" cy="60" r="46" pathLength="100"/><circle class="fg" cx="60" cy="60" r="46" pathLength="100" transform="rotate(-90 60 60)"/></svg><div class="v"><b>0%</b></div></div><div class="tx"><span class="lb">Goal reached</span><span class="s">Q3 target</span></div></div>`,
  css: C + CARD + `
.d .card{width:auto;padding:16px 30px 16px;justify-items:center;gap:10px}
.d .rg{position:relative;width:112px;height:112px}
.d .rg svg{width:100%;height:100%;display:block}
.d circle{fill:none;stroke-width:10}
.d .bg{stroke:var(--ml-bar-2)}
.d .fg{stroke:url(#sr-g);stroke-linecap:round;stroke-dasharray:0 100}
.d .v{position:absolute;inset:0;display:grid;place-items:center}
.d .v b{font:600 28px/1 var(--ml-font);letter-spacing:-.04em;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .tx{display:grid;gap:6px;justify-items:center}
.d .s{font:500 12px/1 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const fg = root.querySelector('.fg');
    const num = root.querySelector('.v b');
    const card = root.querySelector('.card');
    const target = 72;
    const cycle = 5400;
    let e = 0;
    let last = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = t - last;
      last = t;
      if (root.dataset.paused || dt > 200) return;
      e = (e + dt) % cycle;
      const p = Math.min(Math.max((e - 300) / 1700, 0), 1);
      const v = target * (1 - Math.pow(1 - p, 3));
      fg.style.strokeDasharray = v.toFixed(2) + ' 100';
      fg.style.opacity = v < 0.4 ? '0' : '1';
      num.textContent = Math.round(v) + '%';
      card.style.opacity = e > 4800 ? String(1 - (e - 4800) / 600) : '1';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a progress ring that fills once to a percentage with the number in the middle. Use an inline SVG (viewBox 0 0 120 120) with two circles of r=46 and stroke-width 10: a light track, and a foreground circle with stroke-linecap: round, rotated -90deg so it starts at 12 o'clock. Give both circles pathLength="100" so the stroke-dasharray values are plain percentages: animate stroke-dasharray from "0 100" to "72 100" over about 1.7 seconds with an ease-out curve (or drive it from requestAnimationFrame so the center number counts in sync using value = target * (1 - Math.pow(1 - t, 3))). Fill the ring with a blue gradient (linearGradient from your lighter to your main accent). Trigger on scroll-in, hold the final state, and only replay when re-entered. Add role="progressbar" with aria-valuenow, aria-valuemin and aria-valuemax and a visible label under the ring. Under prefers-reduced-motion draw it filled immediately. This is a progress indicator, not a loading spinner.`,
});

ML.add({
  id: 'stats-bar-chart',
  cat: 'stats',
  title: 'Bar chart',
  sub: 'Columns grow from the baseline',
  html: `<div class="card"><div class="top"><span class="lb">Weekly signups</span><b class="up">+18%</b></div><div class="plot"><i style="--h:46%;--i:0"></i><i style="--h:63%;--i:1"></i><i style="--h:38%;--i:2"></i><i style="--h:82%;--i:3"></i><i style="--h:57%;--i:4"></i><i class="hi" style="--h:96%;--i:5"></i><i style="--h:71%;--i:6"></i></div><div class="ax"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div></div>`,
  css: C + CARD + `
.d .card{gap:10px}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .up{font:600 11px/1 var(--ml-font);color:var(--ml-accent-ink);padding:4px 8px;border-radius:999px;background:var(--ml-accent-soft)}
.d .plot{height:116px;display:grid;grid-template-columns:repeat(7,1fr);align-items:end;gap:8px;border-bottom:1px solid var(--ml-line)}
.d .plot i{display:block;height:var(--h);border-radius:7px 7px 3px 3px;background:var(--ml-accent-line);transform-origin:bottom;transform:scaleY(0);animation:gr 5s infinite both;animation-delay:calc(var(--i) * 80ms)}
.d .plot i.hi{background:var(--ml-grad)}
.d .ax{display:grid;grid-template-columns:repeat(7,1fr);gap:8px;text-align:center;font:500 10px/1 var(--ml-mono);color:var(--ml-muted)}
@keyframes gr{0%,6%{transform:scaleY(0);animation-timing-function:var(--ml-bounce)}34%,84%{transform:scaleY(1);animation-timing-function:ease-in}96%,100%{transform:scaleY(0)}}
`,
  prompt: `Build a column chart whose bars grow up from the baseline. Lay the plot out as a 7-column CSS grid with align-items: end and a 1px baseline under it; each column is an element with its final height set by a custom property (height: var(--h)), rounded on top (7px 7px 3px 3px), colored a soft tint, with the peak column in your accent gradient. Animate each from transform: scaleY(0) to scaleY(1) with transform-origin: bottom using a slight-overshoot spring (linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1.0 100%)) over about 700ms, staggered left to right by 80ms. Label the axis in small monospace type. Trigger once on scroll-in with an IntersectionObserver. For real data compute --h from value / max. Provide the numbers as a visually hidden table or aria-labels for screen readers, and show the final chart under prefers-reduced-motion.`,
});

ML.add({
  id: 'stats-line-chart',
  cat: 'stats',
  title: 'Line chart draw',
  sub: 'The line draws, area fades, dot pulses',
  html: `<div class="card"><div class="top"><span class="lb">Visitors</span><b class="val">9,420</b></div><svg viewBox="0 0 240 118" aria-hidden="true"><defs><linearGradient id="lc-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--ml-accent);stop-opacity:.28"/><stop offset="1" style="stop-color:var(--ml-accent);stop-opacity:0"/></linearGradient></defs><g class="grid"><path d="M0 28H240M0 62H240M0 96H240"/></g><g class="cv"><path class="ar" d="M8 92 C30 88 40 60 62 64 S100 84 122 52 S164 36 186 40 S214 22 232 14 L232 112 L8 112 Z"/><path class="ln" pathLength="1" d="M8 92 C30 88 40 60 62 64 S100 84 122 52 S164 36 186 40 S214 22 232 14"/><circle class="pu" cx="232" cy="14" r="4.5"/><circle class="dt" cx="232" cy="14" r="4.5"/></g></svg></div>`,
  css: C + CARD + `
.d .card{gap:8px}
.d .top{display:flex;justify-content:space-between;align-items:baseline}
.d .val{font:600 20px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d svg{width:100%;height:auto;display:block;overflow:visible}
.d .grid path{stroke:var(--ml-line);stroke-width:1;stroke-dasharray:3 4;fill:none}
.d .cv{animation:cf 6s linear infinite}
.d .ar{fill:url(#lc-a);animation:ar 6s ease infinite}
.d .ln{fill:none;stroke:var(--ml-accent);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:ld 6s var(--ml-ease) infinite}
.d .dt{fill:var(--ml-accent);stroke:#fff;stroke-width:2;transform-box:fill-box;transform-origin:center;transform:scale(0);animation:dt 6s var(--ml-bounce) infinite}
.d .pu{fill:var(--ml-accent);opacity:0;transform-box:fill-box;transform-origin:center;animation:pu 6s ease-out infinite}
@keyframes ld{0%,4%{stroke-dashoffset:1}38%,100%{stroke-dashoffset:0}}
@keyframes ar{0%,32%{opacity:0}50%,100%{opacity:1}}
@keyframes dt{0%,36%{transform:scale(0)}44%,100%{transform:scale(1)}}
@keyframes pu{0%,40%{opacity:0;transform:scale(1)}42%{opacity:.45;transform:scale(1)}58%,100%{opacity:0;transform:scale(3.4)}}
@keyframes cf{0%,90%{opacity:1}98%,100%{opacity:0}}
`,
  prompt: `Build a line chart that draws itself. Use an inline SVG with a smooth cubic-curve path for the line (fill none, stroke your accent, stroke-width 2.5, round caps and joins), a second closed path for the area under it filled with a vertical linearGradient from accent at 28% opacity to transparent, and faint dashed horizontal gridlines. Give the line pathLength="1", stroke-dasharray: 1 and animate stroke-dashoffset from 1 to 0 over about 1.8 seconds with cubic-bezier(.32,.72,0,1). Fade the area in during the last third of the draw, then pop an end-point dot (white stroke, accent fill) from scale(0) with a slight overshoot (transform-box: fill-box; transform-origin: center) and emit a single pulse ring that scales to about 3.4x while fading out, once. Trigger on scroll-in. Make the SVG responsive with viewBox and width: 100%, and describe the trend in text (aria-label) with the values available in a hidden table. Under prefers-reduced-motion show the finished chart.`,
});

ML.add({
  id: 'stats-sparkline',
  cat: 'stats',
  title: 'Live sparkline',
  sub: 'New points tick in like live data',
  html: `<div class="card"><div class="top"><span class="lb">Requests / sec</span><span class="live"><i></i>Live</span></div><b class="val">1,284</b><div class="wp"><svg viewBox="0 0 240 80" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="sp-a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--ml-accent);stop-opacity:.22"/><stop offset="1" style="stop-color:var(--ml-accent);stop-opacity:0"/></linearGradient></defs><path class="ar"/><path class="ln"/></svg><i class="hd"></i></div></div>`,
  css: C + CARD + `
.d .card{position:relative;gap:8px;overflow:hidden}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .live{display:inline-flex;align-items:center;gap:5px;font:500 10.5px/1 var(--ml-font);color:var(--ml-accent-ink);padding:4px 8px;border-radius:999px;background:var(--ml-accent-soft)}
.d .live i{width:5px;height:5px;border-radius:50%;background:var(--ml-accent);animation:pl 1.2s ease-in-out infinite}
.d .val{font:600 30px/1 var(--ml-font);letter-spacing:-.04em;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d svg{width:100%;height:86px;display:block;overflow:visible}
.d .ar{fill:url(#sp-a);stroke:none}
.d .ln{fill:none;stroke:var(--ml-accent);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.d .wp{position:relative}
.d .hd{position:absolute;right:0;top:0;width:9px;height:9px;margin:-4.5px -4.5px 0 0;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px var(--ml-bg),0 0 0 6px var(--ml-accent-soft)}
@keyframes pl{0%,100%{opacity:1}50%{opacity:.3}}
`,
  run: (root) => {
    const ln = root.querySelector('.ln');
    const ar = root.querySelector('.ar');
    const hd = root.querySelector('.hd');
    const val = root.querySelector('.val');
    const N = 30;
    const W = 240;
    const H = 80;
    const step = W / (N - 1);
    const v = [];
    let y = 55;
    const nextVal = () => {
      y += (Math.random() - 0.45) * 22;
      y = Math.max(14, Math.min(90, y));
      return y;
    };
    for (let i = 0; i <= N; i++) v.push(nextVal());
    let off = 0;
    let last = 0;
    const per = 420;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = t - last;
      last = t;
      if (root.dataset.paused || dt > 200) return;
      off += dt / per;
      if (off >= 1) {
        off -= 1;
        v.shift();
        v.push(nextVal());
        val.textContent = Math.round(900 + v[N - 1] * 7).toLocaleString('en-US');
      }
      const Y = (a) => H - 6 - (a / 100) * (H - 14);
      let d = 'M' + (-off * step).toFixed(1) + ' ' + Y(v[0]).toFixed(1);
      for (let i = 1; i < N; i++) d += 'L' + ((i - off) * step).toFixed(1) + ' ' + Y(v[i]).toFixed(1);
      const hy = Y(v[N - 1] + (v[N] - v[N - 1]) * off);
      d += 'L' + W + ' ' + hy.toFixed(1);
      ln.setAttribute('d', d);
      ar.setAttribute('d', d + 'L' + W + ' ' + H + 'L' + (-off * step).toFixed(1) + ' ' + H + 'Z');
      hd.style.top = (hy / H) * 100 + '%';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a live sparkline that keeps ticking forward like streaming data. Keep an array of about 30 recent values. In a requestAnimationFrame loop, advance a fractional offset by dt / 420ms; every time it passes 1, shift the oldest value off, push a new one (a random walk), and update the big readout next to it. On every frame rebuild one SVG path: point i sits at x = (i - offset) * step, and a final head point is pinned to the right edge with a y interpolated between the last two values by the offset, so the line scrolls smoothly without jumps. Use stroke-linejoin: round, vector-effect: non-scaling-stroke, a soft gradient area under the line, a glowing-free head dot in your accent color on the newest point, and a small "Live" pill with a slowly pulsing dot. Use tabular-nums for the readout. Pause the loop when the card is offscreen or the tab is hidden, announce the value with a throttled aria-live="off" region, and under prefers-reduced-motion update the line once per second without scrolling.`,
});

ML.add({
  id: 'stats-compare',
  cat: 'stats',
  title: 'Comparison bars',
  sub: 'You versus the rest, bars race to value',
  html: `<div class="card"><span class="lb">Response score</span>
<div class="r me" style="--v:.94;--i:0"><span>You</span><div class="tk"><i></i></div><b>94</b></div>
<div class="r" style="--v:.61;--i:1"><span>Rival A</span><div class="tk"><i></i></div><b>61</b></div>
<div class="r" style="--v:.48;--i:2"><span>Rival B</span><div class="tk"><i></i></div><b>48</b></div>
<div class="r" style="--v:.37;--i:3"><span>Average</span><div class="tk"><i></i></div><b>37</b></div></div>`,
  css: C + CARD + `
.d .card{gap:13px}
.d .r{display:grid;grid-template-columns:50px 1fr 22px;align-items:center;gap:10px;font:500 12px/1 var(--ml-font);color:var(--ml-muted)}
.d .r.me{color:var(--ml-ink);font-weight:600}
.d .r b{font:600 12px/1 var(--ml-font);text-align:right;color:var(--ml-ink-2);animation:vl 5.4s ease infinite both;animation-delay:calc(var(--i) * 140ms + 700ms)}
.d .tk{height:14px;border-radius:7px;background:var(--ml-bar-2);overflow:hidden}
.d .tk i{display:block;height:100%;border-radius:7px;background:var(--ml-bar);transform-origin:left center;transform:scaleX(0);animation:race 5.4s infinite both;animation-delay:calc(var(--i) * 140ms)}
.d .me .tk i{background:var(--ml-grad)}
.d .me b{color:var(--ml-accent-ink)}
@keyframes race{0%,6%{transform:scaleX(0);animation-timing-function:cubic-bezier(.2,.7,.1,1)}44%,86%{transform:scaleX(var(--v));animation-timing-function:ease-in}98%,100%{transform:scaleX(0)}}
@keyframes vl{0%,40%{opacity:0}52%,86%{opacity:1}96%,100%{opacity:0}}
`,
  prompt: `Build a comparison bar chart where "you" races ahead of competitors. Render one row per competitor as a CSS grid (label, track, value). Every fill spans the full track width and is scaled to its value with transform: scaleX(var(--v)) where --v is value / 100, with transform-origin: left center; animate from scaleX(0) to scaleX(var(--v)) over about 1.6 seconds with cubic-bezier(.2,.7,.1,1) so the biggest value covers the most ground and visibly leads. Start rows 140ms apart. Color your own bar with the accent gradient and the others a neutral grey-blue so the comparison reads at a glance, bold your own label, and fade each value in as its bar lands. Trigger on scroll-in. Make each row role="img" with an aria-label like "You: 94", or use a real table. Keep bars the same height and spacing, and under prefers-reduced-motion show the final bars immediately.`,
});

ML.add({
  id: 'stats-delta',
  cat: 'stats',
  title: 'Number and delta',
  sub: 'KPI ticks up, green badge pops',
  html: `<div class="card"><span class="lb">Monthly revenue</span><div class="num">$71,480</div><div class="row"><span class="bd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>+12.4%</span><span class="vs">vs last month</span></div></div>`,
  css: C + CARD + `
.d .card{gap:12px;padding:20px 22px}
.d .num{font:600 50px/1 var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .row{display:flex;align-items:center;gap:9px}
.d .bd{display:inline-flex;align-items:center;gap:4px;padding:6px 10px 6px 8px;border-radius:999px;font:600 13px/1 var(--ml-font);color:#12803A;background:#E5F6EA;transform:scale(0);opacity:0;transform-origin:left center;transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity .2s ease}
.d .bd.on{transform:scale(1);opacity:1}
.d .bd svg{width:14px;height:14px}
.d .vs{font:500 12px/1 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const num = root.querySelector('.num');
    const bd = root.querySelector('.bd');
    const from = 71480;
    const to = 84230;
    const cycle = 5600;
    let e = 0;
    let last = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = t - last;
      last = t;
      if (root.dataset.paused || dt > 200) return;
      e = (e + dt) % cycle;
      const p = Math.min(Math.max((e - 300) / 1600, 0), 1);
      const k = 1 - Math.pow(1 - p, 3);
      num.textContent = '$' + Math.round(from + (to - from) * k).toLocaleString('en-US');
      bd.classList.toggle('on', e > 1950 && e < 5100);
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a KPI card with a big number and a change badge. Show a small uppercase label, a large semibold number (46-52px, tight tracking, tabular-nums) and a row below with a pill badge and a muted "vs last month". On scroll-in, tick the number from the previous value to the new one over about 1.6 seconds with an ease-out-cubic curve in a requestAnimationFrame loop (value = from + (to - from) * (1 - Math.pow(1 - t, 3))), formatted with toLocaleString. When the count finishes, pop the badge: it starts at transform: scale(0), transform-origin: left center, and transitions to scale(1) with a slight overshoot spring (transition: transform 594ms linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1.0 100%)). Style positive deltas as a green text on a pale green pill with an up-right arrow icon; never rely on color alone, keep the sign and arrow. Put the final value in an aria-label, and under prefers-reduced-motion show everything immediately.`,
});

ML.add({
  id: 'stats-donut',
  cat: 'stats',
  title: 'Donut segments',
  sub: 'Segments sweep in, legend follows',
  html: `<div class="card"><span class="lb">Traffic sources</span><div class="bx"><div class="dn"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="s" style="--l:44.5;--s:0;--i:0;stroke:var(--ml-accent)" cx="60" cy="60" r="40" pathLength="100"/><circle class="s" style="--l:26.5;--s:46;--i:1;stroke:var(--ml-accent-2)" cx="60" cy="60" r="40" pathLength="100"/><circle class="s" style="--l:14.5;--s:74;--i:2;stroke:var(--ml-accent-line)" cx="60" cy="60" r="40" pathLength="100"/><circle class="s" style="--l:8.5;--s:90;--i:3;stroke:var(--ml-bar)" cx="60" cy="60" r="40" pathLength="100"/></svg><div class="ct"><b>8.4k</b><span>visits</span></div></div><ul><li style="--i:0"><i style="background:var(--ml-accent)"></i>Direct<b>46%</b></li><li style="--i:1"><i style="background:var(--ml-accent-2)"></i>Social<b>28%</b></li><li style="--i:2"><i style="background:var(--ml-accent-line)"></i>Search<b>16%</b></li><li style="--i:3"><i style="background:var(--ml-bar)"></i>Other<b>10%</b></li></ul></div></div>`,
  css: C + CARD + `
.d .card{gap:14px}
.d .bx{display:flex;align-items:center;gap:18px}
.d .dn{position:relative;flex:none;width:104px;height:104px}
.d .dn svg{width:100%;height:100%;display:block}
.d .s{fill:none;stroke-width:15;transform-box:fill-box;transform-origin:center;transform:rotate(calc(-90deg + var(--s) * 3.6deg));stroke-dasharray:0 100;animation:sw 5.6s infinite both;animation-delay:calc(var(--i) * 420ms)}
.d .ct{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:3px}
.d .ct b{font:600 20px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .ct span{font:500 10px/1 var(--ml-font);color:var(--ml-muted)}
.d ul{list-style:none;display:grid;gap:9px;flex:1}
.d li{display:grid;grid-template-columns:8px 1fr auto;align-items:center;gap:8px;font:500 12px/1 var(--ml-font);color:var(--ml-ink-2);animation:lg 5.6s ease infinite both;animation-delay:calc(var(--i) * 420ms)}
.d li i{width:8px;height:8px;border-radius:3px}
.d li b{font:600 12px/1 var(--ml-font);color:var(--ml-ink)}
@keyframes sw{0%,4%{stroke-dasharray:0 100;animation-timing-function:var(--ml-ease)}22%,80%{stroke-dasharray:var(--l) 100;animation-timing-function:ease-in}94%,100%{stroke-dasharray:0 100}}
@keyframes lg{0%,8%{opacity:0;transform:translateX(-6px)}22%,80%{opacity:1;transform:none}92%,100%{opacity:0;transform:none}}
`,
  prompt: `Build a donut chart whose segments sweep in one after another, with a legend. Use an inline SVG (viewBox 0 0 120 120) with one circle per segment (r=40, fill none, stroke-width 15) and pathLength="100" on every circle so values are plain percentages. Rotate each circle to its start angle with transform: rotate(calc(-90deg + var(--s) * 3.6deg)) using transform-box: fill-box and transform-origin: center, where --s is the cumulative percentage before it. Subtract about 1.5 from each segment length for a small gap. Animate stroke-dasharray from "0 100" to "var(--l) 100" over about 1 second with cubic-bezier(.32,.72,0,1), starting each segment 400ms after the previous. Use shades of your accent (strong to faint) and a neutral for "other". Put the total in the center in semibold type and fade the legend rows in alongside their segment. Trigger on scroll-in. Provide the numbers in the legend text (never rely on color alone) and give the SVG aria-hidden. Under prefers-reduced-motion show the finished donut.`,
});
})();
