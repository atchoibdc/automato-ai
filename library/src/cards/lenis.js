// Smooth scroll (Lenis 1.3.26). Each card runs a Lenis instance on its own wrapper/content, driven by
// the card's rAF (autoRaf off) so data-paused holds it, and calls destroy() in cleanup.
(() => {
  ML.add({
    id: 'lenis-velocity-skew',
    cat: 'lenis',
    title: 'Velocity skew gallery',
    sub: 'Smooth scroll that leans into speed',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner">
  <header class="nav"><b>Field Notes</b><span>Issue 07</span></header>
  <section class="intro"><p class="k">Photo essay</p><h3>Slow roads,<br>long light.</h3></section>
  <figure class="ph p1"><i></i><figcaption>Coastal road, 06:12</figcaption></figure>
  <figure class="ph p2"><i></i><figcaption>Ridge line, 07:40</figcaption></figure>
  <figure class="ph p3"><i></i><figcaption>Salt flats, 16:05</figcaption></figure>
  <figure class="ph p4"><i></i><figcaption>Harbour, 19:22</figcaption></figure>
  <p class="end">Fourteen days, one lens, no itinerary.</p>
</div></div>
<div class="bar" aria-hidden="true"><i></i></div>`,
    css: `
.d{background:#fff}
.d .sc{position:absolute;inset:0;overflow-y:auto;scrollbar-width:none;-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 9%,#000 91%,transparent 100%);mask-image:linear-gradient(180deg,transparent 0,#000 9%,#000 91%,transparent 100%)}
.d .sc::-webkit-scrollbar{display:none}
.d .inner{padding:0 10% 14%}
.d .nav{display:flex;justify-content:space-between;align-items:center;padding:16px 0}
.d .nav b{font:700 13px/1 var(--ml-font);letter-spacing:-.02em;color:var(--ml-ink)}
.d .nav span{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-muted)}
.d .intro{padding:12% 0 10%}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-accent)}
.d h3{margin-top:8px;font:650 28px/1 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .ph{margin:0 0 9%;will-change:transform}
.d .ph i{display:block;aspect-ratio:16/10;border-radius:14px;box-shadow:var(--ml-shadow);background-size:cover}
.d .p1 i{background:radial-gradient(60% 50% at 70% 30%,#fff 0 9%,transparent 10%),linear-gradient(180deg,#FFF0ED 0%,#9cc3ff 52%,#2f6bff 52.5%,#1d4fd8 100%)}
.d .p2 i{background:linear-gradient(160deg,transparent 45%,#1d4fd8 45.5%,#0b3aa8 100%),linear-gradient(180deg,#FFF0EE,#a9c8ff)}
.d .p3 i{background:radial-gradient(40% 30% at 30% 35%,#fff 0 30%,transparent 31%),linear-gradient(180deg,#bcd6ff 0%,#eaf2ff 55%,#d3e3ff 56%,#f6f9ff 100%)}
.d .p4 i{background:radial-gradient(14% 10% at 72% 30%,#fff7d6 0 60%,transparent 61%),linear-gradient(180deg,#0b2a6b 0%,#2f6bff 60%,#0a1f55 60.5%,#123b9c 100%)}
.d figcaption{margin-top:8px;font:500 10px/1 var(--ml-font);color:var(--ml-muted)}
.d .end{padding:4% 0 0;font:600 15px/1.25 var(--ml-font);letter-spacing:-.02em;color:var(--ml-ink)}
.d .bar{position:absolute;left:0;right:0;top:0;height:2px;background:transparent;pointer-events:none}
.d .bar i{display:block;height:100%;background:var(--ml-accent);transform-origin:0 50%;transform:scaleX(0)}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const bar = root.querySelector('.bar i');
      const photos = [...root.querySelectorAll('.ph')];

      // Lenis smooths this card's own scroller, never the page. autoRaf stays off: the loop below
      // drives it, so the card stops when the page pauses it.
      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.085, wheelMultiplier: 0.9 });

      // Autoplay: eased jumps section to section, handed to the visitor on any wheel/touch input.
      const stops = () => [0, ...photos.map((p) => p.offsetTop - 24), lenis.limit];
      let i = 0;
      let next = performance.now() + 2200; // hold on the headline first: it is the first impression
      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const ease = (t) => 1 - Math.pow(1 - t, 4);

      let skew = 0;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          const s = stops();
          i = (i + 1) % s.length;
          lenis.scrollTo(Math.min(s[i], lenis.limit), { duration: i === 0 ? 2.2 : 1.6, easing: ease });
          next = t + (i === 0 ? 3400 : 2600);
        }
        lenis.raf(t);
        // lean the photos into the scroll speed, ease back when it settles
        skew += (Math.max(-7, Math.min(7, lenis.velocity * 0.35)) - skew) * 0.12;
        for (const p of photos) p.style.transform = `skewY(${skew.toFixed(2)}deg) scale(${(1 - Math.abs(skew) * 0.006).toFixed(4)})`;
        bar.style.transform = `scaleX(${lenis.progress.toFixed(4)})`;
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        offVirtual();
        lenis.destroy();
        for (const p of photos) p.style.transform = '';
      };
    },
    prompt: `Build a smooth-scrolling photo essay with Lenis where the photos lean into the scroll speed. Load Lenis from a pinned CDN (lenis@1.3.26, ES module) and create it on the page (or on a scroll container with wrapper and content options) with lerp 0.085 and wheelMultiplier 0.9 so the wheel glides with weight. Turn autoRaf off and drive it from your own requestAnimationFrame loop with lenis.raf(time), which lets you pause it. Layout: a small masthead, a two-line headline, four tall photo cards with captions, a closing line. Each frame, read lenis.velocity, clamp it to about plus or minus 7, ease a skew value toward velocity * 0.35 with a factor of 0.12, and apply skewY(skew deg) plus a tiny scale-down to every photo so fast scrolls make them lean and they settle when the scroll stops. Drive a 2px progress bar at the top with scaleX(lenis.progress). For a hero demo, add a gentle autoplay that calls lenis.scrollTo(nextSectionTop, { duration: 1.6, easing: t => 1 - Math.pow(1 - t, 4) }) and pauses for 2.5s whenever lenis.on('virtual-scroll') reports real wheel or touch input. Call lenis.destroy() on unmount. Lenis already respects prefers-reduced-motion by default; also drop the skew in that case.`,
  });

  // Shared string pieces (used only to build html/css/prompt; never referenced inside run).
  const SC = `.d .sc{position:absolute;inset:0;overflow-y:auto;scrollbar-width:none}
.d .sc::-webkit-scrollbar{display:none}`;
  const FADE_V = `-webkit-mask-image:linear-gradient(180deg,transparent 0,#000 7%,#000 93%,transparent 100%);mask-image:linear-gradient(180deg,transparent 0,#000 7%,#000 93%,transparent 100%)`;
  const K = `font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-accent)`;

  // ---------------------------------------------------------------------------------------------
  const lerpTiles = [
    ['01', 'Arrival', 70],
    ['02', 'Studio', 54],
    ['03', 'Harbour', 82],
    ['04', 'Market', 46],
    ['05', 'Ridge', 66],
    ['06', 'Salt flats', 58],
    ['07', 'Departure', 74],
  ]
    .map(([n, t, w]) => `<div class="t"><span>${n}</span><b>${t}</b><u style="width:${w}%"></u></div>`)
    .join('');

  ML.add({
    id: 'lenis-lerp-compare',
    cat: 'lenis',
    title: 'Native vs Lenis lerp',
    sub: 'Same wheel, two very different glides',
    libs: ['lenis'],
    html: `<div class="cols">
  <div class="side"><div class="lab"><b>Native wheel</b><i>1:1 steps</i></div>
    <div class="col nat"><div>${lerpTiles}</div></div>
    <svg class="tr" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><polyline class="pn" points=""/></svg></div>
  <div class="side smooth"><div class="lab"><b>Lenis</b><i>lerp 0.08</i></div>
    <div class="col sc"><div class="inner">${lerpTiles}</div></div>
    <svg class="tr" viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true"><polyline class="pl" points=""/></svg></div>
</div>`,
    css: `
.d{background:#fff}
.d .cols{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:10px}
.d .side{display:flex;flex-direction:column;gap:6px;min-height:0}
.d .lab{display:flex;justify-content:space-between;align-items:baseline;padding:0 2px}
.d .lab b{font:650 11px/1 var(--ml-font);letter-spacing:-.02em;color:var(--ml-ink)}
.d .lab i{font:600 8px/1 var(--ml-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted);font-style:normal}
.d .smooth .lab b{color:var(--ml-accent)}
.d .col{flex:1;min-height:0;position:relative;overflow-y:auto;scrollbar-width:none;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);${FADE_V}}
.d .col::-webkit-scrollbar{display:none}
.d .t{height:54px;margin:8px;padding:9px 10px;border-radius:10px;background:#fff;box-shadow:var(--ml-shadow);display:flex;flex-direction:column;justify-content:space-between}
.d .t span{${K}}
.d .t b{font:650 14px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .t u{display:block;height:5px;border-radius:99px;background:var(--ml-bar)}
.d .tr{flex:none;width:100%;height:34px;border-radius:9px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .tr polyline{fill:none;stroke-width:1.8;stroke-linejoin:round;stroke-linecap:round;vector-effect:non-scaling-stroke}
.d .pn{stroke:#9AA7BD}
.d .pl{stroke:var(--ml-accent)}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const cols = root.querySelector('.cols');
      const nat = root.querySelector('.nat');
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const pn = root.querySelector('.pn');
      const pl = root.querySelector('.pl');

      // The right column is smoothed by Lenis; the left one is a plain scroller that obeys every wheel
      // notch at once. Both listen to the same wheel on the whole card (eventsTarget).
      const lenis = new Lenis({ wrapper: sc, content: inner, eventsTarget: root, lerp: 0.08 });
      let nt = 0;
      const onWheel = (e) => {
        e.preventDefault();
        const dy = e.deltaY * (e.deltaMode === 1 ? 16 : 1);
        nt = Math.max(0, Math.min(nat.scrollHeight - nat.clientHeight, nt + dy));
        nat.scrollTop = nt;
      };
      root.addEventListener('wheel', onWheel, { passive: false });

      // Autoplay: bursts of synthetic wheel notches through the real pipeline; a real wheel takes over for 2.5s.
      let userUntil = 0;
      let synth = false;
      let burst = 0;
      let at = 0;
      let dir = 1;
      let next = performance.now() + 900;
      const offVirtual = lenis.on('virtual-scroll', () => {
        if (synth) return;
        userUntil = performance.now() + 2500;
        burst = 0;
      });
      const fire = () => {
        synth = true;
        cols.dispatchEvent(new WheelEvent('wheel', { deltaY: dir * 90, bubbles: true, cancelable: true, composed: true }));
        synth = false;
      };

      // Scroll trace: the last N frames of each scrollTop on one shared scale.
      const N = 110;
      const A = new Array(N).fill(0);
      const B = new Array(N).fill(0);
      const pts = (arr, lo, span) => arr.map((v, i) => ((i * 100) / (N - 1)).toFixed(1) + ',' + (27 - ((v - lo) / span) * 24).toFixed(1)).join(' ');

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        if (t > userUntil) {
          if (burst > 0 && t >= at) {
            fire();
            burst--;
            at = t + 95;
            if (!burst) next = t + 2400;
          } else if (!burst && t > next) {
            dir = lenis.progress > 0.6 ? -1 : 1;
            burst = 3;
            at = t;
          }
        }
        lenis.raf(t);
        A.push(nat.scrollTop);
        A.shift();
        B.push(sc.scrollTop);
        B.shift();
        let lo = Infinity;
        let hi = -Infinity;
        for (let i = 0; i < N; i++) {
          lo = Math.min(lo, A[i], B[i]);
          hi = Math.max(hi, A[i], B[i]);
        }
        const span = Math.max(hi - lo, 60);
        pn.setAttribute('points', pts(A, lo, span));
        pl.setAttribute('points', pts(B, lo, span));
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        offVirtual();
        root.removeEventListener('wheel', onWheel);
        lenis.destroy();
      };
    },
    prompt: `Build a scroll comparison panel that shows what smooth scrolling changes. Two identical columns sit side by side inside one card: on the left a native scroller, on the right a scroller smoothed by Lenis. One wheel drives both. Load Lenis from a pinned CDN (lenis@1.3.26, ES module) and create it on the right column with new Lenis({ wrapper: rightEl, content: rightInner, eventsTarget: cardEl, lerp: 0.08 }). Keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. On the left column add a wheel listener on the same card with { passive: false }, call preventDefault and add event.deltaY straight to its scrollTop (clamped), so it moves in hard steps. Label the columns "Native wheel" and "Lenis, lerp 0.08". Under each column draw a small SVG polyline trace of its scrollTop over the last 110 frames on one shared vertical scale, so the native trace is a staircase and the Lenis trace is a curve; use a muted line for native and your accent for Lenis. For a hero demo, dispatch synthetic WheelEvents (three notches of 90px, 95ms apart) every 2.4s and stop the moment a real wheel arrives (lenis.on('virtual-scroll')). Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'lenis-horizontal-gallery',
    cat: 'lenis',
    title: 'Horizontal film strip',
    sub: 'Vertical wheel drives a sideways glide',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner">
  <figure class="fr"><i class="a1"></i><figcaption><b>Arches</b><span>Lisbon</span></figcaption></figure>
  <figure class="fr"><i class="a2"></i><figcaption><b>Dunes</b><span>Namib</span></figcaption></figure>
  <figure class="fr"><i class="a3"></i><figcaption><b>Night harbour</b><span>Hong Kong</span></figcaption></figure>
  <figure class="fr"><i class="a4"></i><figcaption><b>Tide lines</b><span>Cornwall</span></figcaption></figure>
  <figure class="fr"><i class="a5"></i><figcaption><b>Towers</b><span>Chicago</span></figcaption></figure>
  <figure class="fr"><i class="a6"></i><figcaption><b>Halo</b><span>Marrakesh</span></figcaption></figure>
</div></div>
<header class="hd"><b>Atlas</b><span>Six places, one line</span></header>
<div class="ct"><b class="no">01</b><span>/ 06</span></div>
<div class="rail" aria-hidden="true"><i></i></div>`,
    css: `
.d{background:linear-gradient(180deg,#fff 0%,#FAF6F2 100%)}
.d .sc{position:absolute;inset:0;overflow-x:auto;overflow-y:hidden;scrollbar-width:none;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 8%,#000 92%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 8%,#000 92%,transparent 100%)}
.d .sc::-webkit-scrollbar{display:none}
.d .inner{position:relative;display:flex;align-items:center;height:100%;width:max-content;padding:22px calc(var(--w,300px)*.2) 22px;gap:calc(var(--w,300px)*.05)}
.d .fr{flex:none;width:calc(var(--w,300px)*.6);will-change:transform,opacity}
.d .fr i{display:block;width:100%;aspect-ratio:4/3;border-radius:14px;box-shadow:var(--ml-shadow-lg)}
.d .a1{background:radial-gradient(34% 46% at 25% 100%,#FFF0EE 0 97%,transparent 100%),radial-gradient(34% 46% at 75% 100%,#FFF0EE 0 97%,transparent 100%),linear-gradient(180deg,#2f6bff,#0a3fb8)}
.d .a2{background:linear-gradient(165deg,transparent 50%,#1d4fd8 50.5%),linear-gradient(195deg,transparent 62%,#0b2a6b 62.5%),linear-gradient(180deg,#FFF0EE,#9cc3ff)}
.d .a3{background:radial-gradient(18% 24% at 68% 36%,#fff 0 95%,transparent 100%),linear-gradient(180deg,#0b2a6b,#2f6bff 85%)}
.d .a4{background:repeating-linear-gradient(180deg,#FFF0ED 0 12%,#9cc3ff 12% 24%,#4f86ff 24% 36%)}
.d .a5{background:linear-gradient(90deg,#1d4fd8 0 14%,transparent 14% 20%,#0b3aa8 20% 38%,transparent 38% 44%,#2f6bff 44% 60%,transparent 60% 66%,#0a1f55 66% 86%,transparent 86%) bottom/100% 66% no-repeat,linear-gradient(180deg,#FFF0EE,#FFD0CA)}
.d .a6{background:radial-gradient(circle at 50% 55%,#fff 0 14%,#FFF0ED 15% 28%,transparent 29%),linear-gradient(135deg,#FF4433,#FF7A3D)}
.d figcaption{display:flex;justify-content:space-between;align-items:baseline;margin-top:8px;padding:0 2px;transition:opacity var(--ml-spring-dur) var(--ml-spring)}
.d figcaption b{font:650 12px/1 var(--ml-font);letter-spacing:-.025em;color:var(--ml-ink)}
.d figcaption span{font:500 9px/1 var(--ml-font);color:var(--ml-muted)}
.d .fr:not(.on) figcaption{opacity:.35}
.d .hd{position:absolute;left:6%;right:6%;top:10px;display:flex;justify-content:space-between;align-items:baseline;pointer-events:none}
.d .hd b{font:700 13px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .hd span{font:600 8px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-muted)}
.d .ct{position:absolute;left:6%;bottom:9px;display:flex;align-items:baseline;gap:4px;font:500 9px/1 var(--ml-mono);color:var(--ml-muted)}
.d .ct b{font:650 16px/1 var(--ml-mono);letter-spacing:-.04em;color:var(--ml-accent)}
.d .rail{position:absolute;right:6%;bottom:14px;width:38%;height:2px;border-radius:99px;background:var(--ml-bar)}
.d .rail i{display:block;height:100%;border-radius:99px;background:var(--ml-accent);transform-origin:0 50%;transform:scaleX(0)}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const frames = [...root.querySelectorAll('.fr')];
      const no = root.querySelector('.no');
      const rail = root.querySelector('.rail i');

      const fit = () => root.style.setProperty('--w', sc.clientWidth + 'px');
      fit();
      // orientation: 'horizontal' makes Lenis scroll scrollLeft; gestureOrientation 'both' lets a plain
      // vertical wheel (deltaY) drive it.
      const lenis = new Lenis({ wrapper: sc, content: inner, orientation: 'horizontal', gestureOrientation: 'both', lerp: 0.085, wheelMultiplier: 1.1 });

      let mids = [];
      const measure = () => {
        fit();
        mids = frames.map((f) => f.offsetLeft + f.offsetWidth / 2);
        lenis.resize();
      };
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(sc);

      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const ease = (t) => 1 - Math.pow(1 - t, 4);
      let next = performance.now() + 2200;
      let active = -1;

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const W = sc.clientWidth;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          const i = (Math.max(active, 0) + 1) % frames.length;
          lenis.scrollTo(Math.max(0, Math.min(mids[i] - W / 2, lenis.limit)), { duration: i === 0 ? 2.2 : 1.4, easing: ease });
          next = t + (i === 0 ? 3600 : 2600);
        }
        lenis.raf(t);
        // each frame reads its distance from the centre of the strip and leans, scales and fades with it
        const c = lenis.scroll + W / 2;
        let best = 0;
        let bestD = Infinity;
        for (let i = 0; i < frames.length; i++) {
          const d = (mids[i] - c) / W;
          const a = Math.min(1, Math.abs(d) / 0.55);
          if (Math.abs(d) < bestD) {
            bestD = Math.abs(d);
            best = i;
          }
          frames[i].style.transform = `perspective(700px) translateY(${(a * 7).toFixed(1)}px) rotateY(${(-d * 34).toFixed(1)}deg) scale(${(1 - a * 0.2).toFixed(3)})`;
          frames[i].style.opacity = (1 - a * 0.55).toFixed(3);
        }
        if (best !== active) {
          if (active > -1) frames[active].classList.remove('on');
          frames[best].classList.add('on');
          active = best;
          no.textContent = String(best + 1).padStart(2, '0');
        }
        rail.style.transform = `scaleX(${lenis.progress.toFixed(4)})`;
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        offVirtual();
        lenis.destroy();
        root.style.removeProperty('--w');
        for (const f of frames) {
          f.style.transform = '';
          f.style.opacity = '';
        }
      };
    },
    prompt: `Build a horizontal photo strip that scrolls sideways when the visitor uses the normal vertical mouse wheel. Load Lenis from a pinned CDN (lenis@1.3.26, ES module). Put the frames in a flex row inside a wrapper with overflow-x auto, hidden scrollbar and a soft left and right fade mask, then create new Lenis({ wrapper, content, orientation: 'horizontal', gestureOrientation: 'both', lerp: 0.085, wheelMultiplier: 1.1 }). Keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Pad the row so the first and last frame can sit exactly in the centre. Each frame, read lenis.scroll, compute every frame's distance from the viewport centre as a fraction of the wrapper width, and write transform: perspective(700px) translateY(a * 7px) rotateY(-distance * 34deg) scale(1 - a * 0.2) plus opacity 1 - a * 0.55, where a is the distance clamped to 0..1 after dividing by 0.55. Highlight the frame nearest the centre, update a "02 / 06" counter, and fill a thin progress rail with scaleX(lenis.progress). For a hero demo, call lenis.scrollTo(frameCenter - width / 2, { duration: 1.4, easing: t => 1 - Math.pow(1 - t, 4) }) frame by frame, paused 2.5s after any virtual-scroll event. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  const works = [
    ['01', 'Northwind', 'Banking app'],
    ['02', 'Fieldnote', 'Notes for teams'],
    ['03', 'Kiln', 'Ceramics shop'],
    ['04', 'Orbit Air', 'Flight booking'],
    ['05', 'Plainview', 'Analytics suite'],
    ['06', 'Tidewater', 'Marine logistics'],
  ];
  const workRow = ([n, t, s], i, clone) =>
    `<div class="rw"${clone ? ' aria-hidden="true"' : ''}><span class="n">${n}</span><div class="tx"><b>${t}</b><span class="s">${s}</span></div><i class="th t${i + 1}"></i></div>`;
  const loopRows = works.map((w, i) => workRow(w, i, false)).join('') + works.slice(0, 3).map((w, i) => workRow(w, i, true)).join('');

  ML.add({
    id: 'lenis-infinite-loop',
    cat: 'lenis',
    title: 'Infinite loop list',
    sub: 'Scroll never ends, the list wraps',
    libs: ['lenis'],
    html: `<header class="hd"><b>Selected work</b><span class="lap">Lap 1</span><div class="ct"><b class="no">01</b><span>/ 06</span></div></header>
<div class="sc"><div class="inner">${loopRows}</div></div>`,
    css: `
.d{background:#fff}
.d .hd{position:absolute;left:0;right:0;top:0;height:34px;z-index:2;display:flex;align-items:center;gap:8px;padding:0 6%;background:#fff;box-shadow:0 1px 0 var(--ml-line)}
.d .hd b{font:700 13px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .lap{padding:3px 6px;border-radius:99px;background:var(--ml-accent-soft);font:600 8px/1 var(--ml-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .ct{margin-left:auto;display:flex;align-items:baseline;gap:4px;font:500 9px/1 var(--ml-mono);color:var(--ml-muted)}
.d .ct b{font:650 14px/1 var(--ml-mono);letter-spacing:-.04em;color:var(--ml-accent)}
.d .sc{position:absolute;left:0;right:0;bottom:0;top:34px;overflow-y:auto;scrollbar-width:none}
.d .sc::-webkit-scrollbar{display:none}
.d .inner{position:relative}
.d .rw{height:var(--rh,64px);display:grid;grid-template-columns:22px 1fr 24%;align-items:center;gap:8px;padding:0 6%;box-shadow:0 1px 0 var(--ml-line);will-change:transform,opacity}
.d .n{font:600 9px/1 var(--ml-mono);letter-spacing:.04em;color:var(--ml-muted)}
.d .tx{display:flex;flex-direction:column;gap:5px;min-width:0}
.d .tx b{font:650 18px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .s{font:500 9px/1 var(--ml-font);color:var(--ml-muted)}
.d .th{display:block;height:68%;border-radius:9px;box-shadow:var(--ml-shadow)}
.d .rw.on .n{color:var(--ml-accent)}
.d .rw.on .tx b{color:var(--ml-accent)}
.d .t1{background:linear-gradient(135deg,#FF4433,#FF7A3D)}
.d .t2{background:radial-gradient(circle at 70% 30%,#fff 0 12%,transparent 13%),linear-gradient(180deg,#FFF0ED,#7fb0ff)}
.d .t3{background:linear-gradient(160deg,transparent 52%,#1d4fd8 52.5%),linear-gradient(180deg,#FFF0EE,#FFD0CA)}
.d .t4{background:linear-gradient(180deg,#0b2a6b,#2f6bff)}
.d .t5{background:repeating-linear-gradient(90deg,#9cc3ff 0 14%,#FFF0EE 14% 28%)}
.d .t6{background:radial-gradient(60% 80% at 50% 110%,#fff 0 40%,transparent 41%),linear-gradient(180deg,#FF7A3D,#FF4433)}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const rows = [...root.querySelectorAll('.rw')];
      const no = root.querySelector('.no');
      const lapEl = root.querySelector('.lap');
      const N = 6;

      // Three rows are always in view, so every row is a third of the scroller. The list repeats its
      // first three rows at the end: when the scroll value wraps from the limit back to 0 the view is identical.
      const rh = () => sc.clientHeight / 3;
      const fit = () => root.style.setProperty('--rh', rh() + 'px');
      fit();
      const lenis = new Lenis({ wrapper: sc, content: inner, infinite: true, lerp: 0.09 });
      const ro = new ResizeObserver(() => {
        fit();
        lenis.resize();
      });
      ro.observe(sc);

      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
      let next = performance.now() + 2000;
      let active = -1;
      let lap = 0;
      let prev = lenis.scroll;

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          lenis.scrollTo(lenis.scroll + rh(), { duration: 1.1, easing: ease });
          next = t + 2100;
        }
        lenis.raf(t);
        const h = rh();
        const s = lenis.scroll;
        // wrap bookkeeping: a jump of more than half the loop means the value wrapped
        if (s - prev < -lenis.limit / 2) lap++;
        else if (s - prev > lenis.limit / 2) lap--;
        prev = s;
        const c = s + sc.clientHeight / 2;
        for (let i = 0; i < rows.length; i++) {
          const d = ((i + 0.5) * h - c) / h;
          const a = Math.min(1, Math.abs(d) / 1.6);
          rows[i].style.transform = `scale(${(1 - a * 0.07).toFixed(3)})`;
          rows[i].style.opacity = (1 - a * 0.6).toFixed(3);
          rows[i].classList.toggle('on', Math.abs(d) < 0.5);
        }
        const idx = Math.floor(c / h) % N;
        if (idx !== active) {
          active = idx;
          no.textContent = String(idx + 1).padStart(2, '0');
        }
        lapEl.textContent = 'Lap ' + (Math.abs(lap) + 1);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        offVirtual();
        lenis.destroy();
        root.style.removeProperty('--rh');
        for (const r of rows) {
          r.style.transform = '';
          r.style.opacity = '';
        }
      };
    },
    prompt: `Build an endless "selected work" list that wraps seamlessly in both directions. Load Lenis from a pinned CDN (lenis@1.3.26, ES module) and create it on a scroll wrapper with new Lenis({ wrapper, content, infinite: true, lerp: 0.09 }); keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Size every row to exactly one third of the wrapper height so three rows are visible. Render the six projects, then repeat the first three rows at the end of the content (aria-hidden), so the content is six rows plus the view; Lenis wraps its scroll value with a modulo at the limit, and the repeated rows make the wrap invisible. Each frame read lenis.scroll, find each row's distance from the vertical centre in row heights, and write scale(1 - a * 0.07) and opacity 1 - a * 0.6 where a is that distance over 1.6, clamped to 1. The row in the centre turns your accent colour and drives a "02 / 06" counter; count wraps by watching for a jump bigger than half the limit. For autoplay, call lenis.scrollTo(lenis.scroll + rowHeight, { duration: 1.1 }) every 2s and pause 2.5s after a virtual-scroll event. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  const STAR = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6z"/></svg>`;
  const rowGroup = (words) => `<span class="g">${words.map((w) => `<span>${w}</span>${STAR}`).join('')}</span>`;
  const marqueeRows = [
    ['Move with weight', 'Built for motion', 'Calm by default'],
    ['Scroll speed', 'is a feeling', 'you can tune'],
    ['Smooth is a choice', 'Not a gimmick', 'Made for people'],
    ['Design in motion', 'Studio Nine', 'Est. 2019'],
  ]
    .map((w, i) => `<div class="row r${i + 1}"><div class="trk">${rowGroup(w)}${rowGroup(w)}</div></div>`)
    .join('');

  ML.add({
    id: 'lenis-velocity-marquee',
    cat: 'lenis',
    title: 'Velocity marquee',
    sub: 'Type races with your scroll speed',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner"><div class="stick">
  <header class="nav"><b>Studio Nine</b><span>Work / Info</span></header>
  <div class="rows">${marqueeRows}</div>
  <div class="hud"><svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg><b class="sp">1.0x</b><span class="lbl">idle drift</span><i class="mt"><u></u></i></div>
  <div class="rl" aria-hidden="true"><i></i></div>
</div></div></div>`,
    css: `
.d{background:#fff}
${SC}
.d .inner{height:500%}
.d .stick{position:sticky;top:0;height:20%;overflow:hidden;background:#fff}
.d .nav{position:absolute;left:0;right:0;top:0;display:flex;justify-content:space-between;align-items:center;padding:12px 6% 0}
.d .nav b{font:700 13px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .nav span{font:600 8px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-muted)}
.d .rows{position:absolute;left:0;right:0;top:34px;bottom:30px;display:flex;flex-direction:column;justify-content:center}
.d .row{overflow:hidden;will-change:transform}
.d .trk{display:flex;width:max-content;will-change:transform;font:700 32px/1.12 var(--ml-font);letter-spacing:-.045em;white-space:nowrap}
.d .g{display:inline-flex;align-items:center;gap:.32em;padding-right:.32em;flex:none}
.d .g svg{width:.5em;height:.5em;flex:none}
.d .r1 .trk{color:var(--ml-ink)}
.d .r2 .trk{color:transparent;-webkit-text-stroke:1.2px var(--ml-accent)}
.d .r2 .g svg{color:var(--ml-accent)}
.d .r3 .trk{color:var(--ml-accent)}
.d .r4 .trk{color:var(--ml-bar)}
.d .hud{position:absolute;left:6%;right:12%;bottom:9px;display:flex;align-items:center;gap:7px}
.d .ar{width:12px;height:12px;color:var(--ml-accent);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .ar.rev{transform:rotate(180deg)}
.d .sp{min-width:30px;font:650 12px/1 var(--ml-mono);letter-spacing:-.04em;color:var(--ml-ink)}
.d .lbl{font:600 8px/1 var(--ml-mono);letter-spacing:.07em;text-transform:uppercase;color:var(--ml-muted)}
.d .mt{margin-left:auto;width:34%;height:3px;border-radius:99px;background:var(--ml-bar)}
.d .mt u{display:block;height:100%;border-radius:99px;background:var(--ml-accent);transform-origin:0 50%;transform:scaleX(0)}
.d .rl{position:absolute;right:7px;top:40px;bottom:30px;width:2px;border-radius:99px;background:var(--ml-bar-2)}
.d .rl i{display:block;width:100%;height:20%;border-radius:99px;background:var(--ml-accent)}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const rows = [...root.querySelectorAll('.row')];
      const trks = rows.map((r) => r.firstElementChild);
      const sp = root.querySelector('.sp');
      const lbl = root.querySelector('.lbl');
      const ar = root.querySelector('.ar');
      const mt = root.querySelector('.mt u');
      const rl = root.querySelector('.rl i');

      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.09 });

      // Each row repeats one group twice; sliding by one group width and wrapping with a modulo is seamless.
      const dirs = [1, -1, 1, -1];
      const mult = [1, 0.82, 1.2, 0.92];
      const pos = [0, 0, 0, 0];
      let W = [1, 1, 1, 1];
      const measure = () => {
        W = trks.map((t) => t.firstElementChild.offsetWidth || 1);
      };
      measure();
      document.fonts.ready.then(() => root.isConnected && measure());
      const ro = new ResizeObserver(measure);
      ro.observe(sc);

      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2;
      const seq = [
        [0.74, 1.7],
        [0.06, 1.6],
      ];
      let k = 0;
      let next = performance.now() + 1900; // let the idle drift be the first impression
      let sv = 0;
      let last = 0;
      let txt = '';
      let lab = '';

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = last ? Math.min(3, (t - last) / 16.667) : 1;
        last = t;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          lenis.scrollTo(lenis.limit * seq[k][0], { duration: seq[k][1], easing: ease });
          k = (k + 1) % seq.length;
          next = t + 3600;
        }
        lenis.raf(t);
        // smoothed velocity (px per frame) adds to a slow idle drift; a negative velocity reverses every row
        sv += (lenis.velocity - sv) * 0.18;
        const s = 0.8 + sv * 0.9;
        const skew = Math.max(-10, Math.min(10, -sv * 0.35));
        for (let i = 0; i < rows.length; i++) {
          pos[i] += s * dirs[i] * mult[i] * dt;
          const x = -(((pos[i] % W[i]) + W[i]) % W[i]);
          trks[i].style.transform = `translate3d(${x.toFixed(1)}px,0,0)`;
          rows[i].style.transform = `skewX(${skew.toFixed(2)}deg)`;
        }
        const label = Math.abs(sv) < 0.5 ? 'idle drift' : lenis.direction > 0 ? 'scrolling down' : 'scrolling up';
        const v = Math.abs(s / 0.8).toFixed(1) + 'x';
        if (v !== txt) {
          txt = v;
          sp.textContent = v;
        }
        if (label !== lab) {
          lab = label;
          lbl.textContent = label;
        }
        ar.classList.toggle('rev', s < 0);
        mt.style.transform = `scaleX(${Math.min(1, Math.abs(s) / 20).toFixed(3)})`;
        rl.style.transform = `translateY(${(lenis.progress * 400).toFixed(1)}%)`;
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        offVirtual();
        lenis.destroy();
        for (let i = 0; i < rows.length; i++) {
          rows[i].style.transform = '';
          trks[i].style.transform = '';
        }
      };
    },
    prompt: `Build a hero with four rows of oversized type that race with the visitor's scroll speed. Load Lenis from a pinned CDN (lenis@1.3.26, ES module), create it on a scroll wrapper with lerp 0.09, keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Make a sticky stage (position: sticky; top: 0) inside a tall scrolling content block so the page scrolls but the type stays put. Each row is a flex track holding the same group of phrases twice, separated by small star icons; rows alternate direction and use different weights: solid ink, outlined with -webkit-text-stroke in your accent, solid accent, pale grey-blue. Keep a smoothed velocity: sv += (lenis.velocity - sv) * 0.18. Each frame move every row by (0.8 + sv * 0.9) * rowDirection * frameDelta pixels, wrap the offset with a modulo of one group width, and write translate3d(x, 0, 0). A negative velocity makes the speed negative, so scrolling up reverses the rows, and when scrolling stops Lenis lets velocity decay so the rows ease back to the idle drift. Add skewX(-sv * 0.35deg), clamped to 10 degrees, to each row. Show a small readout with an arrow that flips, the speed as "3.4x", and lenis.direction as a label. Autoplay with lenis.scrollTo(limit * 0.74, { duration: 1.7 }) and back, paused 2.5s after a virtual-scroll event. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  const tabNames = ['Work', 'Process', 'Pricing', 'Contact'];
  ML.add({
    id: 'lenis-anchor-nav',
    cat: 'lenis',
    title: 'Eased anchor nav',
    sub: 'Tabs glide the page, pill glides too',
    libs: ['lenis'],
    html: `<nav class="nav" aria-label="Sections"><div class="tabs">${tabNames.map((n) => `<button type="button">${n}</button>`).join('')}</div><div class="hl" aria-hidden="true">${tabNames.map((n) => `<span>${n}</span>`).join('')}</div></nav>
<div class="sc"><div class="inner">
  <section class="s s1"><p class="k">Selected work</p><h3>Interfaces that<br>feel inevitable.</h3><div class="tl"><i class="a"></i><i class="b"></i><i class="c"></i></div></section>
  <section class="s s2"><p class="k">Process</p><h3>Three steps,<br>no surprises.</h3><ol><li><b>01</b>Listen</li><li><b>02</b>Sketch</li><li><b>03</b>Ship</li></ol></section>
  <section class="s s3"><p class="k">Pricing</p><h3>One flat<br>monthly rate.</h3><div class="pc"><b>$4,800</b><span>per month, pause anytime</span><u></u><u></u></div></section>
  <section class="s s4"><p class="k">Contact</p><h3>Start a project.</h3><span class="btn">Say hello</span><p>hello@studionine.co</p></section>
</div></div>
<div class="tip">lenis.scrollTo(section)</div>`,
    css: `
.d{background:#fff}
${SC}
.d .inner{position:relative;height:400%}
.d .nav{position:absolute;top:9px;left:50%;transform:translateX(-50%);z-index:3;padding:3px;border-radius:99px;background:rgba(255,255,255,.94);box-shadow:var(--ml-shadow);white-space:nowrap}
.d .tabs{position:relative;display:flex}
.d .tabs button{padding:6px 10px;border:0;border-radius:99px;background:none;font:600 10px/1 var(--ml-font);color:var(--ml-ink-2);cursor:pointer}
.d .tabs button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:1px}
.d .hl{position:absolute;inset:3px;display:flex;border-radius:99px;background:var(--ml-accent);color:#fff;pointer-events:none;clip-path:inset(0 100% 0 0 round 99px);transition:clip-path var(--ml-spring-dur) var(--ml-spring)}
.d .hl span{padding:6px 10px;font:600 10px/1 var(--ml-font)}
.d .s{height:25%;padding:52px 8% 0;display:flex;flex-direction:column;align-items:flex-start}
.d .s2,.d .s4{background:var(--ml-surface)}
.d .s4{background:var(--ml-grad);color:#fff}
.d .k{${K}}
.d .s4 .k{color:rgba(255,255,255,.82)}
.d h3{margin-top:8px;font:650 24px/1.02 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .s4 h3{color:#fff}
.d .tl{margin-top:auto;margin-bottom:12%;display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:6px;width:100%;height:30%}
.d .tl i{border-radius:10px;box-shadow:var(--ml-shadow)}
.d .tl .a{background:linear-gradient(135deg,#FF4433,#FF7A3D)}
.d .tl .b{background:linear-gradient(180deg,#FFF0ED,#9cc3ff)}
.d .tl .c{background:linear-gradient(160deg,transparent 50%,#1d4fd8 50.5%),linear-gradient(180deg,#FFF0EE,#FFD0CA)}
.d ol{margin-top:12px;list-style:none;width:100%;display:flex;flex-direction:column;gap:6px}
.d li{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:10px;background:#fff;box-shadow:var(--ml-shadow);font:650 12px/1 var(--ml-font);letter-spacing:-.02em}
.d li b{font:600 9px/1 var(--ml-mono);color:var(--ml-accent)}
.d .pc{margin-top:12px;padding:12px 14px;border-radius:14px;background:#fff;box-shadow:var(--ml-shadow-lg);display:flex;flex-direction:column;gap:5px;width:78%}
.d .pc b{font:700 24px/1 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink)}
.d .pc span{font:500 9px/1 var(--ml-font);color:var(--ml-muted);margin-bottom:3px}
.d .pc u{display:block;height:5px;border-radius:99px;background:var(--ml-bar)}
.d .pc u+u{width:64%}
.d .btn{margin-top:14px;padding:9px 16px;border-radius:99px;background:#fff;color:var(--ml-accent-ink);font:650 11px/1 var(--ml-font)}
.d .s4 p:last-child{margin-top:10px;font:500 10px/1 var(--ml-mono);color:rgba(255,255,255,.85)}
.d .tip{position:absolute;left:8px;bottom:8px;z-index:3;padding:5px 8px;border-radius:99px;background:rgba(29,29,31,.86);color:#fff;font:500 8px/1 var(--ml-mono);letter-spacing:.02em}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const nav = root.querySelector('.nav');
      const tabs = root.querySelector('.tabs');
      const hl = root.querySelector('.hl');
      const btns = [...tabs.querySelectorAll('button')];
      const secs = [...root.querySelectorAll('.s')];
      const tip = root.querySelector('.tip');
      const names = ['work', 'process', 'pricing', 'contact'];

      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.1 });

      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const expo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
      let active = -1;
      // The highlight is a white-on-blue copy of the tabs, clipped to the active tab's box: the pill and the
      // label colour travel together.
      const place = () => {
        if (active < 0) return;
        const b = btns[active];
        const L = b.offsetLeft;
        const R = tabs.offsetWidth - L - b.offsetWidth;
        hl.style.clipPath = `inset(0 ${R}px 0 ${L}px round 99px)`;
      };
      const go = (i) => {
        lenis.scrollTo(secs[i], { duration: 1.5, easing: expo });
        tip.textContent = `lenis.scrollTo(#${names[i]}, 1.5s)`;
      };
      const onNav = (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        userUntil = performance.now() + 2500;
        go(btns.indexOf(b));
      };
      nav.addEventListener('click', onNav);
      document.fonts.ready.then(() => root.isConnected && place());

      let next = performance.now() + 2200;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          go((Math.max(active, 0) + 1) % secs.length);
          next = t + 2700;
        }
        lenis.raf(t);
        const y = lenis.scroll + sc.clientHeight * 0.35;
        let a = 0;
        for (let i = 0; i < secs.length; i++) if (secs[i].offsetTop <= y) a = i;
        if (a !== active) {
          active = a;
          place();
        }
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        nav.removeEventListener('click', onNav);
        offVirtual();
        lenis.destroy();
        hl.style.clipPath = '';
      };
    },
    prompt: `Build a sticky in-page navigation whose links glide the page to each section and whose active pill glides with it. Load Lenis from a pinned CDN (lenis@1.3.26, ES module), create it with lerp 0.1, keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Put four buttons in a rounded floating bar (Work, Process, Pricing, Contact). On click call lenis.scrollTo(sectionElement, { duration: 1.5, easing: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t) }); you can also pass anchors: true to the constructor so plain href="#id" links do the same. Each frame read lenis.scroll and pick the last section whose offsetTop is at or above scroll + 35% of the viewport as active. Draw the active pill with a duplicate of the bar (aria-hidden, accent background, white labels) stacked on top and clipped with clip-path: inset(0 R px 0 L px round 999px), where L and R come from the active button's offsetLeft and width. Transition clip-path 600ms with a critically damped spring linear() curve, so the pill and its white label slide together. Give the buttons a visible :focus-visible ring and keep real hrefs for no-JS. For a hero demo, step through the sections every 2.7s and pause 2.5s after any click or virtual-scroll. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'lenis-parallax-depth',
    cat: 'lenis',
    title: 'Parallax depth scene',
    sub: 'Layers drift apart on smoothed scroll',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner">
  <section class="scene">
    <div class="ly sun" data-r="0.8"></div>
    <svg class="ly cl" data-r="0.62" viewBox="0 0 300 70" preserveAspectRatio="none" aria-hidden="true"><rect x="20" y="20" width="110" height="16" rx="8" fill="#fff" opacity=".9"/><rect x="50" y="36" width="80" height="14" rx="7" fill="#fff" opacity=".75"/><rect x="170" y="6" width="100" height="16" rx="8" fill="#fff" opacity=".8"/></svg>
    <svg class="ly m1" data-r="0.78" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true"><path d="M0 130 L60 70 L100 105 L170 30 L230 100 L280 62 L340 110 L400 78 V200 H0Z" fill="#cfe0ff"/></svg>
    <svg class="ly m2" data-r="0.52" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true"><path d="M0 120 L70 60 L130 110 L200 40 L270 112 L330 70 L400 120 V200 H0Z" fill="#9cc3ff"/></svg>
    <svg class="ly m3" data-r="0.28" viewBox="0 0 400 200" preserveAspectRatio="none" aria-hidden="true"><path d="M0 110 C60 60 120 60 190 100 C250 130 320 70 400 96 V200 H0Z" fill="#4f86ff"/></svg>
    <svg class="ly m4" data-r="0.06" viewBox="0 0 400 140" preserveAspectRatio="none" aria-hidden="true"><path d="M0 90 L30 40 L60 90 L80 90 L110 28 L140 90 L260 90 L290 36 L320 90 L350 90 L380 46 L400 90 V140 H0Z" fill="#1d4fd8"/><path d="M0 140 V112 C80 96 160 124 240 108 C310 96 360 112 400 104 V140Z" fill="#0b2a6b"/></svg>
    <div class="ttl" data-r="-0.3"><p class="k">Aletsch ridge</p><h3>Above the<br>tree line.</h3></div>
  </section>
  <section class="after"><p class="k">Field guide</p><h3>Stay a while.</h3><p class="b">Every layer moves at its own pace, so the picture keeps its depth.</p></section>
</div></div>
<div class="alt"><b>2,140</b><span>m</span></div>`,
    css: `
.d{background:#fff}
${SC}
.d .inner{height:200%}
.d .scene{position:relative;height:50%;overflow:hidden;background:linear-gradient(180deg,#FFB8A3 0%,#FFEFEA 62%,#f4f9ff 100%)}
.d .ly{position:absolute;will-change:transform}
.d .sun{top:15%;left:62%;width:17%;aspect-ratio:1;border-radius:50%;background:#fff;box-shadow:0 0 0 7px rgba(255,255,255,.4)}
.d .cl{left:6%;top:12%;width:70%;height:18%}
.d .m1,.d .m2,.d .m3,.d .m4{left:-2%;width:104%;bottom:0}
.d .m1{height:62%}
.d .m2{height:50%}
.d .m3{height:36%}
.d .m4{height:27%}
.d .ttl{position:absolute;left:8%;top:12%;will-change:transform,opacity}
.d .k{${K}}
.d h3{margin-top:7px;font:650 24px/1 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .after{height:50%;padding:0 10%;display:flex;flex-direction:column;justify-content:center;gap:8px;background:#fff}
.d .b{max-width:82%;font:500 11px/1.4 var(--ml-font);color:var(--ml-muted)}
.d .alt{position:absolute;right:8px;bottom:8px;display:flex;align-items:baseline;gap:3px;padding:5px 9px;border-radius:99px;background:rgba(255,255,255,.92);box-shadow:var(--ml-shadow)}
.d .alt b{font:650 11px/1 var(--ml-mono);letter-spacing:-.03em;color:var(--ml-ink)}
.d .alt span{font:600 8px/1 var(--ml-mono);color:var(--ml-muted)}
@media (prefers-reduced-motion:reduce){.d .ly{transform:none!important}}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const layers = [...root.querySelectorAll('[data-r]')];
      const rates = layers.map((l) => parseFloat(l.dataset.r));
      const ttl = root.querySelector('.ttl');
      const alt = root.querySelector('.alt b');

      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.085 });

      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2;
      // fraction of the scroll limit, glide seconds
      const seq = [
        [0.55, 2.4],
        [1, 1.8],
        [0, 2.6],
      ];
      let k = 0;
      let next = performance.now() + 2200;
      let shown = '';

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          lenis.scrollTo(lenis.limit * seq[k][0], { duration: seq[k][1], easing: ease });
          next = t + seq[k][1] * 1000 + 1600;
          k = (k + 1) % seq.length;
        }
        lenis.raf(t);
        // Each layer lags the page by its own rate: far layers barely move, the foreground moves 1:1.
        const s = lenis.scroll;
        for (let i = 0; i < layers.length; i++) layers[i].style.transform = `translate3d(0,${(s * rates[i]).toFixed(1)}px,0)`;
        const p = Math.min(1, s / Math.max(1, sc.clientHeight));
        ttl.style.opacity = (1 - Math.min(1, p * 1.6)).toFixed(3);
        const m = (Math.round((2140 + p * 1260) / 10) * 10).toLocaleString('en-US');
        if (m !== shown) {
          shown = m;
          alt.textContent = m;
        }
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        offVirtual();
        lenis.destroy();
        for (const l of layers) l.style.transform = '';
        ttl.style.opacity = '';
      };
    },
    prompt: `Build a layered parallax landscape hero where the depth comes from a smoothed scroll value. Load Lenis from a pinned CDN (lenis@1.3.26, ES module), create it with lerp 0.085, keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. The hero section is one viewport tall with overflow hidden and a pale blue sky gradient. Stack absolutely positioned layers inside it, each an inline SVG with preserveAspectRatio="none" anchored to the bottom: a sun, a cloud strip, a far ridge, a mid ridge, a near hill and a foreground line of pines, getting darker and more saturated toward the front. Give each layer a rate: 0.8, 0.62, 0.78, 0.52, 0.28, 0.06. Every frame read lenis.scroll and write transform: translate3d(0, scroll * rate, 0) on each layer, so the far layers lag behind the page and the foreground moves with it. Fade the headline out over the first 60 percent of the hero height while it moves up faster than the page (rate -0.3), and drive a small altitude readout from the scroll fraction. Because the source value is already smoothed by Lenis, the layers never judder; do not add CSS transitions to them. Follow with a plain content section so the hero can scroll away. Add a prefers-reduced-motion rule that removes the layer transforms. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'lenis-scrolltrigger-pinned',
    cat: 'lenis',
    title: 'Lenis + ScrollTrigger pin',
    sub: 'A pinned panel scrubs through 3 states',
    libs: ['lenis', 'gsap'],
    html: `<div class="sc"><div class="inner">
  <section class="intro"><p class="k">How Marlin ships</p><h3>From first note<br>to live page.</h3></section>
  <section class="pin">
    <div class="rail" aria-hidden="true"><i></i></div>
    <div class="copy">
      <p class="cnt"><b class="cn">01</b> / 03</p>
      <div class="stp s1"><b>Capture</b><span>Drop every idea into one place.</span></div>
      <div class="stp s2"><b>Shape</b><span>Arrange it into a real layout.</span></div>
      <div class="stp s3"><b>Ship</b><span>Publish with a single click.</span></div>
    </div>
    <div class="dev" aria-hidden="true">
      <div class="v v1"><i class="hd"></i><i style="width:92%"></i><i style="width:70%"></i><i style="width:84%"></i><i style="width:58%"></i><i class="gap"></i><i class="hd s"></i><i style="width:88%"></i><i style="width:64%"></i><i class="cur"></i></div>
      <div class="v v2"><b></b><b></b><b></b><b></b></div>
      <div class="v v3"><div class="bars"><i style="height:35%"></i><i style="height:55%"></i><i style="height:48%"></i><i style="height:82%"></i></div><span class="live"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>Live</span></div>
    </div>
  </section>
  <section class="out"><b>Live in minutes.</b><span class="btn">Try Marlin</span></section>
</div></div>`,
    css: `
.d{background:#fff}
${SC}
.d .inner{position:relative}
.d .intro{height:calc(var(--h,225px)*.62);padding:0 8%;display:flex;flex-direction:column;justify-content:center;gap:8px}
.d .k{${K}}
.d h3{font:650 26px/1 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .pin{position:relative;height:var(--h,225px);display:grid;grid-template-columns:1fr 1.05fr;align-items:center;gap:7%;padding:0 8% 0 11%;background:linear-gradient(180deg,#fff 0%,#EEF4FF 100%);overflow:hidden}
.d .rail{position:absolute;left:5%;top:20%;bottom:20%;width:2px;border-radius:99px;background:var(--ml-bar)}
.d .rail i{display:block;width:100%;height:100%;border-radius:99px;background:var(--ml-accent);transform-origin:50% 0;transform:scaleY(0)}
.d .copy{position:relative;height:96px}
.d .cnt{font:500 9px/1 var(--ml-mono);color:var(--ml-muted)}
.d .cnt b{font:650 11px/1 var(--ml-mono);color:var(--ml-accent)}
.d .stp{position:absolute;left:0;right:0;top:24px;display:flex;flex-direction:column;gap:6px}
.d .stp b{font:650 22px/1 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .stp span{font:500 10px/1.35 var(--ml-font);color:var(--ml-muted);max-width:94%}
.d .dev{position:relative;aspect-ratio:4/5;border-radius:16px;background:#fff;box-shadow:var(--ml-shadow-lg);overflow:hidden}
.d .v{position:absolute;inset:0;padding:14px;display:flex;flex-direction:column;gap:8px}
.d .v1 i{display:block;height:7px;border-radius:99px;background:var(--ml-bar)}
.d .v1 .hd{width:56%;height:11px;margin-bottom:4px;background:var(--ml-ink-2);opacity:.82}
.d .v1 .hd.s{width:40%;background:var(--ml-accent);opacity:1}
.d .v1 .gap{height:6px;background:none}
.d .v1 .cur{width:2px;height:12px;border-radius:2px;background:var(--ml-accent)}
.d .v2{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr}
.d .v2 b{border-radius:10px;background:var(--ml-accent-soft)}
.d .v2 b:first-child{background:var(--ml-grad)}
.d .v2 b:nth-child(4){background:var(--ml-bar)}
.d .v3{justify-content:flex-end}
.d .bars{flex:1;display:flex;align-items:flex-end;gap:7px}
.d .bars i{flex:1;border-radius:6px 6px 3px 3px;background:var(--ml-accent-line)}
.d .bars i:nth-child(4){background:var(--ml-accent)}
.d .live{position:absolute;left:14px;top:14px;display:inline-flex;align-items:center;gap:4px;padding:4px 8px 4px 6px;border-radius:99px;background:var(--ml-accent);color:#fff;font:650 9px/1 var(--ml-font)}
.d .live svg{width:10px;height:10px}
.d .out{height:calc(var(--h,225px)*.62);padding:0 8%;display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:12px}
.d .out b{font:650 20px/1 var(--ml-font);letter-spacing:-.04em}
.d .btn{padding:8px 15px;border-radius:99px;background:var(--ml-accent);color:#fff;font:600 11px/1 var(--ml-font)}
`,
    run: (root, lib) => {
      const { Lenis, gsap, ScrollTrigger } = lib;
      gsap.registerPlugin(ScrollTrigger);
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');

      const setH = () => root.style.setProperty('--h', sc.clientHeight + 'px');
      setH();
      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.09 });
      // Lenis scrolls the wrapper; ScrollTrigger must be told on every smoothed frame.
      const offScroll = lenis.on('scroll', ScrollTrigger.update);

      let st = null;
      const ctx = gsap.context(() => {
        const pin = root.querySelector('.pin');
        const rail = root.querySelector('.rail i');
        const cn = root.querySelector('.cn');
        const [s1, s2, s3] = root.querySelectorAll('.stp');
        const [v1, v2, v3] = root.querySelectorAll('.v');
        const live = root.querySelector('.live');
        gsap.set([s2, s3], { autoAlpha: 0, y: 14 });
        gsap.set([v2, v3], { autoAlpha: 0, scale: 0.94 });
        gsap.set(live, { autoAlpha: 0, scale: 0.6 });

        // scrub: true ties the timeline to the scroll position exactly; Lenis already supplies the smoothing.
        const tl = gsap.timeline({
          defaults: { ease: 'power2.inOut' },
          scrollTrigger: {
            trigger: pin,
            scroller: sc,
            start: 'top top',
            end: () => '+=' + sc.clientHeight * 1.8,
            pin: true,
            scrub: true,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const n = String(self.progress * 3 < 1.4 ? 1 : self.progress * 3 < 2.4 ? 2 : 3).padStart(2, '0');
              if (cn.textContent !== n) cn.textContent = n;
            },
          },
        });
        tl.to(rail, { scaleY: 1, ease: 'none', duration: 3 }, 0)
          .to(s1, { autoAlpha: 0, y: -14, duration: 0.5 }, 0.75)
          .to(v1, { autoAlpha: 0, scale: 1.05, duration: 0.5 }, 0.75)
          .to(s2, { autoAlpha: 1, y: 0, duration: 0.5 }, 1)
          .to(v2, { autoAlpha: 1, scale: 1, duration: 0.5 }, 1)
          .to(s2, { autoAlpha: 0, y: -14, duration: 0.5 }, 1.75)
          .to(v2, { autoAlpha: 0, scale: 1.05, duration: 0.5 }, 1.75)
          .to(s3, { autoAlpha: 1, y: 0, duration: 0.5 }, 2)
          .to(v3, { autoAlpha: 1, scale: 1, duration: 0.5 }, 2)
          .to(live, { autoAlpha: 1, scale: 1, ease: 'back.out(2.2)', duration: 0.4 }, 2.45);
        st = tl.scrollTrigger;
      }, root);

      // The pin adds spacing to the content: tell Lenis the new height, and again once fonts settle.
      const refresh = () => {
        setH();
        ScrollTrigger.getAll().forEach((t) => t.scroller === sc && t.refresh());
        lenis.resize();
      };
      lenis.resize();
      const ro = new ResizeObserver(refresh);
      ro.observe(root);
      document.fonts.ready.then(() => root.isConnected && refresh());

      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2;
      let i = 0;
      let next = performance.now() + 2200;
      const stops = () => {
        const d = st.end - st.start;
        return [0, st.start + d * 0.1, st.start + d * 0.5, st.start + d * 0.93, lenis.limit];
      };

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        if (st && t > userUntil && t > next && !lenis.isScrolling) {
          const s = stops();
          i = (i + 1) % s.length;
          lenis.scrollTo(Math.min(s[i], lenis.limit), { duration: i === 0 ? 2.6 : 1.7, easing: ease });
          next = t + (i === 0 ? 3000 : 2500);
        }
        lenis.raf(t);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        offVirtual();
        offScroll();
        ctx.revert();
        lenis.destroy();
        root.style.removeProperty('--h');
      };
    },
    prompt: `Build a pinned three-step product story that scrubs with smooth scroll, using Lenis and GSAP ScrollTrigger together. Load lenis@1.3.26 and gsap@3.15.0 with ScrollTrigger from a pinned CDN and register the plugin. Create Lenis with lerp 0.09, keep autoRaf off, and connect the two in this order: lenis.on('scroll', ScrollTrigger.update), then drive lenis.raf(time) from your own requestAnimationFrame loop (or gsap.ticker.add(t => lenis.raf(t * 1000)) with gsap.ticker.lagSmoothing(0) on a full-page setup). Layout: a short intro, then a pinned panel with a step counter, one headline plus sentence per step, a thin progress rail, and a phone-like device on the right with three stacked screens (notes, layout grid, live chart), then a closing section. Build one gsap.timeline with scrollTrigger { trigger: panel, start: 'top top', end: '+=180%', pin: true, scrub: true } (scrub true, because Lenis already supplies the smoothing). On the timeline: scale the rail from 0 to 1 over 3 units with ease 'none'; at 0.75 fade step one and screen one out, at 1 fade step two in; repeat at 1.75 and 2; pop a "Live" badge with ease 'back.out(2.2)' at 2.45. After pin creation call lenis.resize() so the new spacer height is counted. Wrap everything in gsap.context and call ctx.revert() and lenis.destroy() on unmount. Under prefers-reduced-motion show the three steps as a normal stacked list.`,
  });

  // ---------------------------------------------------------------------------------------------
  const paras = [
    'Every product team measures speed in milliseconds. Fewer measure how that speed feels, and the difference is where people decide whether to stay.',
    'A page that jumps to its destination is fast. A page that glides there is calm. Users rarely notice the second, but they remember the first as abrupt.',
    'Smooth scrolling is not decoration. It gives the eye a path to follow, so the layout never teleports and the reader keeps their place.',
    'The cost is small: one interpolated value per frame. The return is a reading experience that feels weighted, like turning a page instead of swapping it.',
    'Done badly, smoothing adds lag. Done well, it disappears. Tune the easing until the page answers the hand at once and settles without wobble.',
    'Respect people who ask for less motion. Turn the smoothing off, keep the layout, and let the browser do what it already does well.',
    'That is the whole trick: follow the reader, then get out of the way.',
  ];
  ML.add({
    id: 'lenis-progress-ring',
    cat: 'lenis',
    title: 'Reading progress ring',
    sub: 'A ring and minutes left follow the scroll',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner">
  <header class="ah"><p class="k">Essay - 6 min read</p><h3>The quiet cost of fast software</h3><p class="by">Maya R. - Oct 2026</p></header>
  ${paras.map((p) => `<p class="pp">${p}</p>`).join('\n  ')}
</div></div>
<div class="left">6 min left</div>
<div class="ring"><svg viewBox="0 0 44 44" aria-hidden="true"><circle class="bg" cx="22" cy="22" r="18"/><circle class="fg" cx="22" cy="22" r="18"/></svg><b class="pct">0%</b><svg class="ok" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div>`,
    css: `
.d{background:#fff}
${SC}
.d .inner{position:relative;padding:14px 8% 36%}
.d .ah{padding-right:50px;padding-bottom:2px}
.d .k{${K}}
.d h3{margin-top:7px;font:650 19px/1.05 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .by{margin-top:7px;font:500 9px/1 var(--ml-font);color:var(--ml-muted)}
.d .pp{margin-top:11px;font:500 10px/1.55 var(--ml-font);color:var(--ml-ink-2);transition:opacity .35s var(--ml-ease)}
.d .pp:not(.on){opacity:.38}
.d .left{position:absolute;left:8px;bottom:8px;padding:5px 9px;border-radius:99px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 8px/1 var(--ml-mono);letter-spacing:.05em;text-transform:uppercase;color:var(--ml-ink-2);transition:background .3s,color .3s}
.d .left.done{background:var(--ml-accent);color:#fff;box-shadow:none}
.d .ring{position:absolute;right:10px;top:10px;width:44px;height:44px;border-radius:50%;background:#fff;box-shadow:var(--ml-shadow)}
.d .ring svg:first-child{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.d .ring circle{fill:none;stroke-width:3.4}
.d .ring .bg{stroke:var(--ml-bar-2)}
.d .ring .fg{stroke:var(--ml-accent);stroke-linecap:round}
.d .pct{position:absolute;inset:0;display:grid;place-items:center;font:650 9px/1 var(--ml-mono);letter-spacing:-.03em;color:var(--ml-ink)}
.d .ok{position:absolute;left:50%;top:50%;width:16px;height:16px;margin:-8px 0 0 -8px;color:var(--ml-accent);opacity:0;transform:scale(.4);transition:opacity .3s,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .ring.done .ok{opacity:1;transform:scale(1)}
.d .ring.done .pct{opacity:0}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const ps = [...root.querySelectorAll('.pp')];
      const fg = root.querySelector('.fg');
      const pct = root.querySelector('.pct');
      const ring = root.querySelector('.ring');
      const left = root.querySelector('.left');
      const TOTAL = 6;
      const C = 2 * Math.PI * 18;
      fg.style.strokeDasharray = C.toFixed(2);

      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.09 });

      let mids = [];
      const measure = () => {
        mids = ps.map((p) => p.offsetTop + p.offsetHeight / 2);
      };
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(sc);
      document.fonts.ready.then(() => root.isConnected && measure());

      let userUntil = 0;
      let next = performance.now() + 1500;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
        next = userUntil;
      });
      const expo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));
      let active = -1;
      let lastLeft = '';
      let lastPct = '';

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          next = Infinity;
          if (lenis.progress > 0.985) {
            lenis.scrollTo(0, { duration: 1.8, easing: expo, onComplete: () => (next = performance.now() + 1500) });
          } else {
            // reading pace: one long linear glide, a few seconds per paragraph
            lenis.scrollTo(lenis.limit, { duration: 14 * (1 - lenis.progress) + 0.5, easing: (x) => x, onComplete: () => (next = performance.now() + 2200) });
          }
        }
        lenis.raf(t);
        const p = lenis.progress;
        fg.style.strokeDashoffset = (C * (1 - p)).toFixed(2);
        fg.style.opacity = p < 0.004 ? '0' : '1';
        const done = p > 0.992;
        const mins = done ? 'Finished' : Math.max(1, Math.ceil(TOTAL * (1 - p))) + ' min left';
        const pc = Math.round(p * 100) + '%';
        if (mins !== lastLeft) {
          lastLeft = mins;
          left.textContent = mins;
        }
        if (pc !== lastPct) {
          lastPct = pc;
          pct.textContent = pc;
        }
        ring.classList.toggle('done', done);
        left.classList.toggle('done', done);
        // the paragraph nearest the middle of the view is "being read"
        const y = lenis.scroll + sc.clientHeight * 0.5;
        let a = 0;
        let best = Infinity;
        for (let i = 0; i < mids.length; i++) {
          const d = Math.abs(mids[i] - y);
          if (d < best) {
            best = d;
            a = i;
          }
        }
        if (a !== active) {
          if (active > -1) ps[active].classList.remove('on');
          ps[a].classList.add('on');
          active = a;
        }
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        offVirtual();
        lenis.destroy();
        fg.style.strokeDasharray = '';
        fg.style.strokeDashoffset = '';
        fg.style.opacity = '';
      };
    },
    prompt: `Build a long-form article with a circular reading-progress ring and a live "minutes left" label. Load Lenis from a pinned CDN (lenis@1.3.26, ES module), create it on the article scroller with lerp 0.09, keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Put a 44px white circle with a soft shadow in the top-right corner holding an SVG ring: a pale track circle and an accent circle (r 18, stroke-width 3.4, round caps) rotated -90 degrees. Set stroke-dasharray to the circumference 2 * PI * 18 once, then every frame write stroke-dashoffset = circumference * (1 - lenis.progress). Show the rounded percentage in the centre. Next to the ring show a pill with Math.max(1, Math.ceil(totalMinutes * (1 - lenis.progress))) + " min left"; at progress above 0.992 swap the percentage for a check icon that pops in with a slight overshoot and change the pill to "Finished". Because lenis.progress is already smoothed, the ring glides instead of jumping. Also dim every paragraph except the one nearest the vertical middle of the view (opacity 0.38 with a 350ms transition). For a hero demo, call lenis.scrollTo(lenis.limit, { duration: 14, easing: t => t }) as a slow reading pace, return with an eased scrollTo(0) at the end, and pause 2.5s after a virtual-scroll event. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  const FACE_LINES = '<u></u><u></u>';
  ML.add({
    id: 'lenis-image-sequence',
    cat: 'lenis',
    title: 'Scroll-scrubbed sequence',
    sub: 'A product assembles frame by frame',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner"><div class="stick">
  <div class="stage">
    <div class="sh"></div>
    <div class="cube">
      <i class="f f1">${FACE_LINES}<s></s></i><i class="f f2">${FACE_LINES}</i><i class="f f3">${FACE_LINES}</i>
      <i class="f f4">${FACE_LINES}</i><i class="f f5"></i><i class="f f6"></i>
    </div>
  </div>
  <div class="cap"><p class="k">Product 360</p><h3>Hub One</h3></div>
  <span class="tag">Assembled</span>
  <div class="hud"><span>Frame</span><b class="fr">001</b><span>/ 096</span></div>
  <div class="scrub" aria-hidden="true"><i class="ph"></i></div>
</div></div></div>`,
    css: `
.d{background:linear-gradient(180deg,#fff 0%,#EEF4FF 100%)}
${SC}
.d .inner{height:500%}
.d .stick{position:sticky;top:0;height:20%;overflow:hidden}
.d .stage{position:absolute;inset:0;perspective:620px;perspective-origin:50% 40%}
.d .cube{position:absolute;left:50%;top:47%;width:0;height:0;transform-style:preserve-3d;will-change:transform}
.d .f{position:absolute;left:calc(var(--s,90px)/-2);top:calc(var(--s,90px)/-2);width:var(--s,90px);height:var(--s,90px);border-radius:9px;display:flex;flex-direction:column;justify-content:flex-end;gap:5px;padding:12%;box-shadow:inset 0 0 0 1px rgba(255,255,255,.4)}
.d .f u{display:block;height:4px;border-radius:99px;background:rgba(255,255,255,.55)}
.d .f u+u{width:60%}
.d .f s{position:absolute;left:12%;top:12%;width:22%;aspect-ratio:1;border-radius:50%;background:#fff}
.d .f1{transform:translateZ(calc(var(--s,90px)/2 + var(--x,0px)));background:linear-gradient(135deg,#FF7A3D,#FF4433)}
.d .f2{transform:rotateY(180deg) translateZ(calc(var(--s,90px)/2 + var(--x,0px)));background:linear-gradient(135deg,#0a4fc0,#0b3aa8)}
.d .f3{transform:rotateY(90deg) translateZ(calc(var(--s,90px)/2 + var(--x,0px)));background:linear-gradient(135deg,#6fb3ff,#FF7A3D)}
.d .f4{transform:rotateY(-90deg) translateZ(calc(var(--s,90px)/2 + var(--x,0px)));background:linear-gradient(135deg,#1d5be0,#0a4fc0)}
.d .f5{transform:rotateX(90deg) translateZ(calc(var(--s,90px)/2 + var(--x,0px)));background:linear-gradient(135deg,#eaf2ff,#FFF0ED)}
.d .f6{transform:rotateX(-90deg) translateZ(calc(var(--s,90px)/2 + var(--x,0px)));background:#0b2a6b}
.d .sh{position:absolute;left:50%;top:76%;width:44%;height:9%;margin-left:-22%;background:radial-gradient(closest-side,rgba(16,40,100,.22),transparent)}
.d .cap{position:absolute;left:6%;top:11px}
.d .k{${K}}
.d h3{margin-top:6px;font:650 17px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .tag{position:absolute;right:6%;top:12px;padding:4px 8px;border-radius:99px;background:var(--ml-accent);color:#fff;font:650 8px/1 var(--ml-mono);letter-spacing:.06em;text-transform:uppercase;opacity:0;transform:scale(.8);transition:opacity .3s,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .tag.on{opacity:1;transform:scale(1)}
.d .hud{position:absolute;left:6%;bottom:24px;display:flex;align-items:baseline;gap:5px;font:600 8px/1 var(--ml-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .hud b{font:650 13px/1 var(--ml-mono);letter-spacing:-.03em;color:var(--ml-accent)}
.d .scrub{position:absolute;left:6%;right:6%;bottom:10px;height:8px;background:repeating-linear-gradient(90deg,var(--ml-bar) 0 1px,transparent 1px 6px)}
.d .ph{position:absolute;left:0;top:-3px;bottom:-3px;width:2px;border-radius:2px;background:var(--ml-accent)}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const cube = root.querySelector('.cube');
      const fr = root.querySelector('.fr');
      const tag = root.querySelector('.tag');
      const scrub = root.querySelector('.scrub');
      const ph = root.querySelector('.ph');
      const FRAMES = 96;

      let size = 90;
      const fit = () => {
        size = Math.round(Math.min(sc.clientWidth, sc.clientHeight) * 0.34) || 90;
        root.style.setProperty('--s', size + 'px');
        shown = -1; // redraw the current frame at the new size
      };
      let shown = -1;
      fit();
      const ro = new ResizeObserver(fit);
      ro.observe(sc);
      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.08 });

      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2;
      const seq = [
        [1, 6],
        [0, 2.6],
      ];
      let k = 0;
      let next = performance.now() + 1800;

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          lenis.scrollTo(lenis.limit * seq[k][0], { duration: seq[k][1], easing: ease });
          next = t + seq[k][1] * 1000 + 1500;
          k = (k + 1) % seq.length;
        }
        lenis.raf(t);
        // The smoothed progress picks a whole frame, like a real image sequence; only a new frame is drawn.
        const frame = Math.round(lenis.progress * (FRAMES - 1));
        if (frame === shown) return;
        shown = frame;
        const pf = frame / (FRAMES - 1);
        const u = Math.min(1, pf / 0.55);
        const e = 1 - Math.pow(1 - u, 3);
        cube.style.setProperty('--x', ((1 - e) * size * 1.05).toFixed(1) + 'px');
        const ry = -35 + pf * 540;
        const rx = -22 + 12 * Math.sin(pf * Math.PI * 2);
        const sc3 = 0.8 + 0.2 * e;
        cube.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale3d(${sc3.toFixed(3)},${sc3.toFixed(3)},${sc3.toFixed(3)})`;
        fr.textContent = String(frame + 1).padStart(3, '0');
        tag.classList.toggle('on', pf > 0.62);
        ph.style.transform = `translateX(${(pf * (scrub.clientWidth - 2)).toFixed(1)}px)`;
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        offVirtual();
        lenis.destroy();
        root.style.removeProperty('--s');
        cube.style.transform = '';
        cube.style.removeProperty('--x');
      };
    },
    prompt: `Build a scroll-scrubbed product sequence where a 3D box assembles and spins as the visitor scrolls, drawn frame by frame from the smoothed scroll progress. Load Lenis from a pinned CDN (lenis@1.3.26, ES module), create it with lerp 0.08, keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Make a tall scrolling block with a position: sticky; top: 0 stage that stays on screen. Inside it, build a CSS 3D cube: a perspective of 620px on the stage, a zero-size element with transform-style: preserve-3d, and six square faces placed with rotateY/rotateX and translateZ(half the size + var(--x)), each a different blue so the form reads. Define 96 frames. Each frame of your loop turn lenis.progress into a whole frame number with Math.round(progress * 95), and skip all work when it has not changed. From that frame derive pf (0 to 1): the explode distance --x eases from about 1.05 times the face size to 0 over the first 55 percent (cubic ease out), the cube rotates rotateY(-35deg + pf * 540deg) with a slight rotateX sway, and it scales from 0.8 to 1. Show "Frame 047 / 096", a tick-mark scrubber with a playhead moved by translateX, and an "Assembled" badge that pops in after 62 percent. Lenis interpolates the progress, so playback is buttery even with a coarse mouse wheel. For autoplay glide with lenis.scrollTo(limit, { duration: 6 }) and back, pausing 2.5s after a virtual-scroll event. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  const spell = (w) => [...w].map((c) => (c === ' ' ? '<span class="gap"></span>' : `<span class="l">${c === '&' ? '&amp;' : c}</span>`)).join('');
  ML.add({
    id: 'lenis-stretch-speed',
    cat: 'lenis',
    title: 'Stretch on speed',
    sub: 'Letters pull tall, then spring back',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner"><div class="stick">
  <div class="grid" aria-hidden="true"></div>
  <p class="k">Spring physics</p>
  <h2 class="w" aria-label="Stretch and snap"><span class="ln" aria-hidden="true">${spell('STRETCH')}</span><span class="ln a" aria-hidden="true">${spell('& SNAP')}</span></h2>
  <div class="hud"><span>Velocity</span><b class="vv">0.0</b><i class="mt"><u></u></i></div>
</div></div></div>`,
    css: `
.d{background:#fff}
${SC}
.d .inner{height:500%}
.d .stick{position:sticky;top:0;height:20%;overflow:hidden;background:#fff}
.d .grid{position:absolute;left:0;right:0;top:-24px;bottom:-24px;background:repeating-linear-gradient(180deg,var(--ml-line) 0 1px,transparent 1px 24px);will-change:transform}
.d .k{position:absolute;left:7%;top:12px;${K}}
.d .w{position:absolute;left:7%;right:7%;top:50%;transform:translateY(-52%);display:flex;flex-direction:column;gap:.2em;font:700 calc(var(--w,300px)*.135)/1 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink)}
.d .ln{display:flex}
.d .ln.a{color:var(--ml-accent)}
.d .l{display:inline-block;transform-origin:50% 100%;will-change:transform}
.d .ln.a .l{transform-origin:50% 0}
.d .gap{display:inline-block;width:.28em}
.d .hud{position:absolute;left:7%;right:7%;bottom:10px;display:flex;align-items:center;gap:7px;font:600 8px/1 var(--ml-mono);letter-spacing:.07em;text-transform:uppercase;color:var(--ml-muted)}
.d .vv{min-width:28px;font:650 12px/1 var(--ml-mono);letter-spacing:-.04em;color:var(--ml-ink)}
.d .mt{margin-left:auto;width:42%;height:3px;border-radius:99px;background:var(--ml-bar)}
.d .mt u{display:block;height:100%;border-radius:99px;background:var(--ml-accent);transform-origin:0 50%;transform:scaleX(0)}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const L = [...root.querySelectorAll('.l')];
      const grid = root.querySelector('.grid');
      const vv = root.querySelector('.vv');
      const mt = root.querySelector('.mt u');

      const fit = () => root.style.setProperty('--w', root.clientWidth + 'px');
      fit();
      const ro = new ResizeObserver(fit);
      ro.observe(root);
      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.1 });

      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const out3 = (t) => 1 - Math.pow(1 - t, 3);
      const stops = [0.42, 0.08, 0.7, 0.2];
      let k = 0;
      let next = performance.now() + 1500;

      // One underdamped spring per letter. Each letter reads the speed from a few frames earlier than the one
      // before it, so the pull travels along the word like a wave.
      const H = 64;
      const hist = new Array(H).fill(0);
      let hi = 0;
      const y = L.map(() => 1);
      const vy = L.map(() => 0);
      let last = 0;
      let shown = '';

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const h = last ? Math.min(0.034, (t - last) / 1000) : 0.016;
        last = t;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          lenis.scrollTo(lenis.limit * stops[k], { duration: 1.0, easing: out3 });
          k = (k + 1) % stops.length;
          next = t + 2700;
        }
        lenis.raf(t);
        const v = Math.abs(lenis.velocity);
        hist[hi] = v;
        hi = (hi + 1) % H;
        for (let i = 0; i < L.length; i++) {
          const sv = hist[(hi - 1 - i * 2 + H * 4) % H];
          const target = 1 + Math.min(0.9, sv * 0.06);
          const a = -300 * (y[i] - target) - 11 * vy[i];
          vy[i] += a * h;
          y[i] += vy[i] * h;
          const sy = Math.max(0.6, Math.min(2.0, y[i]));
          const sx = Math.max(0.74, Math.min(1.12, 1 + (1 - sy) * 0.22));
          L[i].style.transform = `scale(${sx.toFixed(3)},${sy.toFixed(3)})`;
        }
        grid.style.transform = `translateY(${(-(lenis.scroll % 24)).toFixed(1)}px)`;
        const txt = v.toFixed(1);
        if (txt !== shown) {
          shown = txt;
          vv.textContent = txt;
        }
        mt.style.transform = `scaleX(${Math.min(1, v / 24).toFixed(3)})`;
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        offVirtual();
        lenis.destroy();
        root.style.removeProperty('--w');
        for (const l of L) l.style.transform = '';
        grid.style.transform = '';
      };
    },
    prompt: `Build a headline whose letters stretch tall when the page is scrolled fast and spring back when it stops. Load Lenis from a pinned CDN (lenis@1.3.26, ES module), create it with lerp 0.1, keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Make a sticky stage (position: sticky; top: 0) inside tall scrolling content so the headline stays put while the page scrolls. Split the headline into one inline-block span per letter with transform-origin at the bottom edge for the top line and the top edge for the bottom line, so the two lines pull apart instead of colliding; keep an aria-label on the heading and aria-hidden on the spans. Each frame store Math.abs(lenis.velocity) in a ring buffer of 64 values. Give every letter its own spring: target = 1 + min(0.9, delayedSpeed * 0.06), where delayedSpeed is read from the buffer i * 2 frames in the past so the stretch travels along the word like a wave; integrate acceleration = -300 * (y - target) - 11 * velocity with a step of min(0.034, frameSeconds). That damping is deliberately underdamped, so letters overshoot below 1 and squash before settling. Write transform: scale(sx, sy) with sy clamped to 0.6..2 and sx = 1 + (1 - sy) * 0.22 to keep the volume. Behind the text, translate a repeating line grid by -(lenis.scroll % 24) so the scroll direction is visible, and show a small velocity readout. Autoplay with lenis.scrollTo(limit * fraction, { duration: 1, easing: t => 1 - Math.pow(1 - t, 3) }) every 2.7s, paused 2.5s after a virtual-scroll event. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  const feed = [
    ['M', 'Maya R.', 'commented on Q3 plan', '2m'],
    ['T', 'Tomas', 'shared Roadmap', '9m'],
    ['P', 'Priya', 'approved Pricing page', '21m'],
    ['L', 'Leo', 'edited Brand notes', '34m'],
    ['A', 'Ana', 'joined the workspace', '1h'],
    ['S', 'Sam', 'renamed Launch list', '2h'],
    ['N', 'Noor', 'uploaded 4 files', '3h'],
    ['K', 'Ken', 'mentioned you in Sprint 12', '5h'],
    ['I', 'Iris', 'archived Old drafts', '6h'],
    ['J', 'Jon', 'resolved 3 threads', '8h'],
    ['E', 'Eli', 'invited Maria', '1d'],
    ['Z', 'Zoe', 'commented on Hiring', '1d'],
  ]
    .map(([a, n, w, t]) => `<li><i>${a}</i><p><b>${n}</b> ${w}</p><span>${t}</span></li>`)
    .join('');
  const notes = [
    ['Faster sync', 'Changes land on every device in under a second.', 'a'],
    ['Offline mode', 'Keep working on a plane. Edits merge on reconnect.', 'b'],
    ['Shared folders', 'Invite a team and choose who can edit.', 'c'],
    ['Smarter search', 'Find a note by what it says, not what it is called.', 'a'],
    ['Dark theme', 'Easy on the eyes after sunset.', 'b'],
    ['Export', 'Take everything with you as plain files.', 'c'],
  ]
    .map(([t, s, c]) => `<section class="bl"><b>${t}</b><span>${s}</span><i class="${c}"></i></section>`)
    .join('');

  ML.add({
    id: 'lenis-nested-scroll',
    cat: 'lenis',
    title: 'Nested scroll panel',
    sub: 'Smooth page, native panel scrolling inside',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner">
  <div class="dock"><aside class="panel" data-lenis-prevent aria-label="Activity"><header><b>Activity</b><span>12 new</span></header><ul>${feed}</ul></aside></div>
  <article class="pg"><p class="k">Release notes</p><h3>Version 4.2</h3>${notes}</article>
</div></div>
<div class="lg"><span class="lp"><i></i>Page: Lenis glide</span><span class="ln"><i></i>Panel: native scroll</span></div>`,
    css: `
.d{background:#fff}
${SC}
.d .inner{position:relative}
.d .dock{position:sticky;top:0;height:0;z-index:3}
.d .panel{position:absolute;right:4%;top:12px;width:41%;height:calc(var(--h,225px) - 50px);overflow-y:auto;overscroll-behavior:contain;scrollbar-width:none;border-radius:14px;background:#fff;box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line)}
.d .panel::-webkit-scrollbar{display:none}
.d .panel header{position:sticky;top:0;z-index:1;display:flex;justify-content:space-between;align-items:center;padding:10px 11px 8px;background:#fff;box-shadow:0 1px 0 var(--ml-line)}
.d .panel header b{font:650 12px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .panel header span{padding:3px 6px;border-radius:99px;background:var(--ml-accent-soft);font:600 8px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d ul{list-style:none}
.d li{display:grid;grid-template-columns:20px 1fr auto;align-items:center;gap:7px;padding:8px 11px;box-shadow:0 1px 0 var(--ml-bar-2)}
.d li i{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--ml-accent-soft);font:650 9px/1 var(--ml-font);font-style:normal;color:var(--ml-accent-ink)}
.d li p{font:500 9px/1.3 var(--ml-font);color:var(--ml-muted)}
.d li p b{font-weight:650;color:var(--ml-ink)}
.d li span{font:500 8px/1 var(--ml-mono);color:var(--ml-muted)}
.d .pg{padding:16px 50% 22% 8%}
.d .k{${K}}
.d h3{margin-top:7px;font:650 22px/1 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .bl{margin-top:14px;display:flex;flex-direction:column;gap:5px}
.d .bl b{font:650 12px/1.1 var(--ml-font);letter-spacing:-.025em;color:var(--ml-ink)}
.d .bl span{font:500 9px/1.4 var(--ml-font);color:var(--ml-muted)}
.d .bl i{display:block;height:34px;margin-top:3px;border-radius:9px;box-shadow:var(--ml-shadow)}
.d .bl .a{background:linear-gradient(135deg,#FF4433,#FF7A3D)}
.d .bl .b{background:linear-gradient(180deg,#FFF0ED,#9cc3ff)}
.d .bl .c{background:linear-gradient(160deg,transparent 50%,#1d4fd8 50.5%),linear-gradient(180deg,#FFF0EE,#FFD0CA)}
.d .lg{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);z-index:4;display:flex;gap:5px;white-space:nowrap}
.d .lg span{display:inline-flex;align-items:center;gap:5px;padding:5px 8px;border-radius:99px;background:rgba(255,255,255,.95);box-shadow:var(--ml-shadow);font:600 8px/1 var(--ml-mono);letter-spacing:.03em;color:var(--ml-muted);transition:background .25s,color .25s}
.d .lg i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .lg span.on{background:var(--ml-accent);color:#fff}
.d .lg span.on i{background:#fff}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const panel = root.querySelector('.panel');
      const lp = root.querySelector('.lp');
      const ln = root.querySelector('.ln');

      const fit = () => root.style.setProperty('--h', sc.clientHeight + 'px');
      fit();
      const ro = new ResizeObserver(fit);
      ro.observe(sc);
      // The panel sits inside the Lenis wrapper, so its wheel events reach Lenis. data-lenis-prevent on the
      // panel makes Lenis ignore them: the panel scrolls natively and overscroll-behavior stops it chaining.
      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.09 });

      let panelUntil = 0;
      const onPanel = () => {
        panelUntil = performance.now() + 380;
      };
      panel.addEventListener('scroll', onPanel, { passive: true });

      let userUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        userUntil = performance.now() + 2500;
      });
      const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2;
      const steps = [
        () => lenis.scrollTo(lenis.limit * 0.55, { duration: 1.8, easing: ease }),
        () => panel.scrollTo({ top: panel.scrollHeight, behavior: 'smooth' }),
        () => lenis.scrollTo(lenis.limit, { duration: 1.6, easing: ease }),
        () => panel.scrollTo({ top: 0, behavior: 'smooth' }),
        () => lenis.scrollTo(0, { duration: 2, easing: ease }),
      ];
      let k = 0;
      let next = performance.now() + 2000;

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        if (t > userUntil && t > next && !lenis.isScrolling) {
          steps[k]();
          k = (k + 1) % steps.length;
          next = t + 2500;
        }
        lenis.raf(t);
        lp.classList.toggle('on', !!lenis.isScrolling);
        ln.classList.toggle('on', t < panelUntil);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        panel.removeEventListener('scroll', onPanel);
        offVirtual();
        lenis.destroy();
        root.style.removeProperty('--h');
      };
    },
    prompt: `Build a smooth-scrolling page with a sticky activity panel that scrolls natively inside it. Load Lenis from a pinned CDN (lenis@1.3.26, ES module), create it on the page scroller with lerp 0.09, keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Lay out a release-notes column on the left and, inside the same scrolling content, a zero-height position: sticky; top: 0 dock holding an absolutely positioned panel on the right (about 40 percent wide, rounded, soft shadow) with a sticky header and a list of 12 activity rows. Put the data-lenis-prevent attribute on the panel: Lenis checks it on every wheel and touch event and, when it is present, lets the browser scroll the panel natively instead of smoothing it. Add overflow-y: auto and overscroll-behavior: contain to the panel so reaching its end does not drag the page. Use data-lenis-prevent-wheel or data-lenis-prevent-touch if you only want one input type excluded, or the allowNestedScroll option to detect scrollable children automatically. Show two small pills: "Page: Lenis glide" lights while lenis.isScrolling is truthy, "Panel: native scroll" lights briefly on the panel's scroll event. For a hero demo alternate lenis.scrollTo(fraction, { duration: 1.8 }) on the page with panel.scrollTo({ top, behavior: 'smooth' }), and pause 2.5s after a virtual-scroll event. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  const MOUSE = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="6" y="3" width="12" height="18" rx="6"/><path d="M12 7v4"/></svg>`;
  const LOCK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`;
  ML.add({
    id: 'lenis-stop-start-lock',
    cat: 'lenis',
    title: 'Menu scroll lock',
    sub: 'lenis.stop() freezes the page behind it',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner">
  <section class="hero"><p class="k">Harbor Coffee</p><h3>Slow mornings,<br>steady beans.</h3><i class="ph"></i></section>
  <section class="pts"><div class="pt"><i class="p1"></i><b>Ember</b><span>$14</span></div><div class="pt"><i class="p2"></i><b>Tideline</b><span>$16</span></div><div class="pt"><i class="p3"></i><b>Ridge</b><span>$15</span></div><div class="pt"><i class="p4"></i><b>Salt</b><span>$13</span></div></section>
  <section class="story"><b>Roasted on Tuesdays.</b><span>Small batches, shipped within two days of the roast.</span><i></i><i></i></section>
</div></div>
<header class="bar"><b>Harbor</b><button class="mb" type="button" aria-label="Menu" aria-expanded="false"><i></i><i></i></button></header>
<div class="shade"></div>
<nav class="menu" aria-hidden="true"><button type="button">Shop</button><button type="button">Journal</button><button type="button">Visit</button><button type="button">Contact</button></nav>
<div class="chip"><i class="dot"></i><span class="ta">Scroll live</span><span class="tb">${LOCK}Scroll locked</span><code class="ca">lenis.start()</code><code class="cb">lenis.stop()</code></div>
<div class="ghost">${MOUSE}Wheel ignored</div>`,
    css: `
.d{background:#fff}
${SC}
.d .inner{height:300%}
.d .hero{height:33.333%;padding:50px 8% 0;display:flex;flex-direction:column;gap:8px;background:linear-gradient(180deg,#fff,#EEF4FF)}
.d .k{${K}}
.d h3{font:650 25px/1 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .ph{display:block;flex:1;margin:6px 0 16px;border-radius:14px;box-shadow:var(--ml-shadow);background:radial-gradient(circle at 70% 36%,#fff 0 11%,transparent 12%),linear-gradient(160deg,transparent 56%,#1d4fd8 56.5%),linear-gradient(180deg,#FFF0ED,#7fb0ff)}
.d .pts{height:33.333%;padding:16px 8%;display:grid;grid-template-columns:1fr 1fr;gap:9px;background:#fff}
.d .pt{display:flex;flex-direction:column;gap:4px;padding:7px;border-radius:12px;background:var(--ml-surface)}
.d .pt i{display:block;flex:1;border-radius:8px}
.d .pt b{font:650 11px/1 var(--ml-font);letter-spacing:-.025em;color:var(--ml-ink)}
.d .pt span{font:500 9px/1 var(--ml-mono);color:var(--ml-muted)}
.d .p1{background:linear-gradient(135deg,#FF4433,#FF7A3D)}
.d .p2{background:linear-gradient(180deg,#FFF0ED,#9cc3ff)}
.d .p3{background:linear-gradient(160deg,transparent 50%,#1d4fd8 50.5%),linear-gradient(180deg,#FFF0EE,#FFD0CA)}
.d .p4{background:linear-gradient(180deg,#0b2a6b,#2f6bff)}
.d .story{height:33.333%;padding:34px 8% 0;display:flex;flex-direction:column;gap:7px;background:var(--ml-surface)}
.d .story b{font:650 17px/1.05 var(--ml-font);letter-spacing:-.04em}
.d .story span{max-width:86%;font:500 10px/1.4 var(--ml-font);color:var(--ml-muted)}
.d .story i{display:block;height:7px;border-radius:99px;background:var(--ml-bar)}
.d .story i+i{width:62%}
.d .bar{position:absolute;left:0;right:0;top:0;z-index:7;height:36px;display:flex;align-items:center;justify-content:space-between;padding:0 6%;background:rgba(255,255,255,.94);box-shadow:0 1px 0 var(--ml-line)}
.d .bar b{font:700 13px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .mb{position:relative;width:28px;height:28px;border:0;border-radius:50%;background:var(--ml-surface);cursor:pointer}
.d .mb:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .mb i{position:absolute;left:8px;right:8px;height:2px;border-radius:2px;background:var(--ml-ink);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .mb i:first-child{top:11px}
.d .mb i:last-child{top:15px}
.d.open .mb i:first-child{transform:translateY(2px) rotate(45deg)}
.d.open .mb i:last-child{transform:translateY(-2px) rotate(-45deg)}
.d .shade{position:absolute;inset:0;z-index:5;background:rgba(14,32,76,.3);opacity:0;pointer-events:none;transition:opacity .3s var(--ml-ease)}
.d.open .shade{opacity:1;pointer-events:auto}
.d .menu{position:absolute;top:0;right:0;bottom:0;z-index:6;width:60%;padding:48px 8% 0;display:flex;flex-direction:column;gap:2px;background:#fff;box-shadow:var(--ml-shadow-lg);transform:translateX(104%);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d.open .menu{transform:none}
.d .menu button{padding:8px 0;border:0;background:none;text-align:left;font:650 19px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink);cursor:pointer}
.d .chip svg{width:9px;height:9px;margin-right:3px;vertical-align:-1px}
.d .chip{position:absolute;left:8px;bottom:8px;z-index:8;display:flex;align-items:center;gap:6px;padding:5px 9px 5px 8px;border-radius:99px;background:#fff;box-shadow:var(--ml-shadow)}
.d .dot{width:7px;height:7px;border-radius:50%;background:#1DB954;transition:background .25s}
.d.locked .dot{background:var(--ml-accent)}
.d .chip span{font:650 9px/1 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink)}
.d .chip code{font:500 8px/1 var(--ml-mono);color:var(--ml-muted)}
.d .tb,.d .cb{display:none}
.d.locked .tb,.d.locked .cb{display:inline}
.d.locked .ta,.d.locked .ca{display:none}
.d .ghost{position:absolute;left:8px;bottom:34px;z-index:8;display:flex;align-items:center;gap:5px;padding:5px 9px;border-radius:99px;background:rgba(29,29,31,.88);color:#fff;font:600 8px/1 var(--ml-mono);letter-spacing:.05em;text-transform:uppercase;opacity:0;transform:translateY(6px);transition:opacity .2s,transform var(--ml-spring-dur) var(--ml-spring);pointer-events:none}
.d .ghost svg{width:11px;height:11px}
.d .ghost.hit{opacity:1;transform:none}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const btn = root.querySelector('.mb');
      const menu = root.querySelector('.menu');
      const ghost = root.querySelector('.ghost');

      // eventsTarget is the whole card, like a window-level Lenis: wheel over the scrim and the menu still
      // reaches Lenis, which is what stop() has to swallow.
      const lenis = new Lenis({ wrapper: sc, content: inner, eventsTarget: root, lerp: 0.09 });

      const setOpen = (open) => {
        root.classList.toggle('open', open);
        btn.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-hidden', String(!open));
        // the whole lock: stop() ignores wheel/touch and programmatic scrolls, start() hands them back
        if (open) lenis.stop();
        else lenis.start();
      };

      let userUntil = 0;
      let synth = false;
      let ghostUntil = 0;
      const offVirtual = lenis.on('virtual-scroll', () => {
        if (lenis.isStopped) ghostUntil = performance.now() + 700;
        if (!synth) userUntil = performance.now() + 2500;
      });
      const onBtn = () => {
        userUntil = performance.now() + 2500;
        setOpen(!root.classList.contains('open'));
      };
      btn.addEventListener('click', onBtn);

      const ease = (t) => 0.5 - Math.cos(Math.PI * t) / 2;
      const wheel = () => {
        synth = true;
        menu.dispatchEvent(new WheelEvent('wheel', { deltaY: 120, bubbles: true, cancelable: true, composed: true }));
        synth = false;
      };
      // [ms from loop start, action]; the clock is frozen while the visitor is interacting
      const steps = [
        [1500, () => lenis.scrollTo(lenis.limit * 0.3, { duration: 1.4, easing: ease })],
        [3400, () => setOpen(true)],
        [4100, wheel],
        [4400, wheel],
        [4700, wheel],
        [6200, () => setOpen(false)],
        [6700, () => lenis.scrollTo(lenis.limit * 0.8, { duration: 1.5, easing: ease })],
        [9000, () => lenis.scrollTo(0, { duration: 1.8, easing: ease })],
      ];
      const LOOP = 11400;
      let i = 0;
      let t0 = performance.now();
      let lastT = t0;

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          t0 += t - lastT;
          lastT = t;
          return;
        }
        if (t < userUntil) t0 += t - lastT;
        else {
          while (i < steps.length && t - t0 >= steps[i][0]) steps[i++][1]();
          if (t - t0 >= LOOP) {
            i = 0;
            t0 = t;
          }
        }
        lastT = t;
        lenis.raf(t);
        root.classList.toggle('locked', lenis.isStopped);
        ghost.classList.toggle('hit', t < ghostUntil);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        btn.removeEventListener('click', onBtn);
        offVirtual();
        lenis.destroy();
        root.classList.remove('open', 'locked');
      };
    },
    prompt: `Build a mobile-style header with a menu that locks the page scroll while it is open, using Lenis. Load Lenis from a pinned CDN (lenis@1.3.26, ES module), create it with lerp 0.09, keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Layout: a product page (hero, a two-column product grid, a story block) under a sticky header with a hamburger button. The button toggles an "open" class on the page root: two bars morph into an X with a spring transition, a dim scrim fades in (0.3s) and a white menu panel slides in from the right (translateX(104%) to 0, 600ms critically damped spring linear() curve). On open call lenis.stop(); on close call lenis.start(). While stopped Lenis cancels wheel and touch scrolling (it calls preventDefault) and ignores programmatic scrollTo unless you pass force: true, so nothing moves behind the menu; start() resets velocity and lets scrolling resume from the same position. Reflect the state with a small chip that reads lenis.isStopped ("Scroll live" with a green dot, "Scroll locked" with an accent dot); Lenis also puts the class lenis-stopped on the wrapper, which you can style. Set aria-expanded on the button and aria-hidden on the menu, close on Escape, and return focus to the button. If the menu contains its own scrollable list add data-lenis-prevent to it. Call lenis.destroy() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'lenis-section-snap',
    cat: 'lenis',
    title: 'Soft section snap',
    sub: 'Let go, and the page eases to a section',
    libs: ['lenis'],
    html: `<div class="sc"><div class="inner">
  <section class="sn n1"><p class="k">01 - Cover</p><h3>Quarterly<br>review.</h3><span class="sb">Q3 2026</span></section>
  <section class="sn n2"><p class="k">02 - Method</p><h3>How we<br>measured.</h3><div class="bars"><i style="width:84%"></i><i style="width:62%"></i><i style="width:74%"></i></div></section>
  <section class="sn n3"><p class="k">03 - Results</p><b class="big">+38%</b><span class="cp">Weekly active teams</span></section>
  <section class="sn n4"><p class="k">04 - Next</p><h3>What ships<br>in Q4.</h3><ul><li>Offline mode</li><li>Shared folders</li><li>Faster search</li></ul></section>
</div></div>
<div class="rl" aria-hidden="true"><i class="tk"></i><i class="tk"></i><i class="tk"></i><i class="tk"></i><b class="dt"></b></div>
<div class="tip">Section 01</div>`,
    css: `
.d{background:#fff}
${SC}
.d .inner{height:400%}
.d .sn{height:25%;padding:0 16% 0 9%;display:flex;flex-direction:column;justify-content:center;gap:9px}
.d .n1{background:linear-gradient(180deg,#fff,#EEF4FF)}
.d .n2{background:#fff}
.d .n3{background:var(--ml-grad);color:#fff}
.d .n4{background:var(--ml-surface)}
.d .k{${K}}
.d .n3 .k{color:rgba(255,255,255,.82)}
.d h3{font:650 28px/1 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink)}
.d .sb{align-self:flex-start;padding:5px 10px;border-radius:99px;background:var(--ml-accent);color:#fff;font:650 10px/1 var(--ml-font)}
.d .bars{display:flex;flex-direction:column;gap:7px;margin-top:4px}
.d .bars i{display:block;height:9px;border-radius:99px;background:var(--ml-accent-line)}
.d .bars i:first-child{background:var(--ml-accent)}
.d .big{font:700 58px/.95 var(--ml-font);letter-spacing:-.07em}
.d .cp{font:500 11px/1 var(--ml-font);color:rgba(255,255,255,.88)}
.d ul{list-style:none;display:flex;flex-direction:column;gap:6px;margin-top:2px}
.d li{padding:7px 10px;border-radius:9px;background:#fff;box-shadow:var(--ml-shadow);font:650 11px/1 var(--ml-font);letter-spacing:-.02em}
.d .rl{position:absolute;right:9px;top:14%;bottom:14%;width:8px;z-index:3}
.d .tk{position:absolute;left:0;width:8px;height:2px;border-radius:2px;background:var(--ml-bar);transition:background .2s,transform var(--ml-spring-dur) var(--ml-spring)}
.d .tk:nth-child(1){top:3px}
.d .tk:nth-child(2){top:calc((100% - 8px)/3 + 3px)}
.d .tk:nth-child(3){top:calc((100% - 8px)*2/3 + 3px)}
.d .tk:nth-child(4){top:calc(100% - 5px)}
.d .tk.on{background:var(--ml-ink);transform:scaleX(1.8);transform-origin:100% 50%}
.d .dt{position:absolute;left:0;top:0;width:8px;height:8px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px #fff,var(--ml-shadow)}
.d .tip{position:absolute;left:8px;bottom:8px;z-index:3;padding:5px 9px;border-radius:99px;background:rgba(29,29,31,.86);color:#fff;font:600 8px/1 var(--ml-mono);letter-spacing:.05em;text-transform:uppercase;transition:background .25s}
.d .tip.snap{background:var(--ml-accent)}
`,
    run: (root, lib) => {
      const { Lenis } = lib;
      const sc = root.querySelector('.sc');
      const inner = root.querySelector('.inner');
      const rl = root.querySelector('.rl');
      const dt = root.querySelector('.dt');
      const ticks = [...root.querySelectorAll('.tk')];
      const tip = root.querySelector('.tip');
      const N = 4;

      // Lenis core has no snap option (lenis-snap is a separate package). Soft snap is built from its own
      // events: wait until the last wheel/touch input is old and the glide has slowed, then scrollTo the
      // nearest section top with a short eased duration.
      const lenis = new Lenis({ wrapper: sc, content: inner, lerp: 0.1 });

      let railH = 0;
      const measure = () => {
        railH = rl.clientHeight - 8;
      };
      measure();
      const ro = new ResizeObserver(measure);
      ro.observe(sc);

      let userUntil = 0;
      let synth = false;
      let lastInput = 0;
      let snapping = false;
      let target = -1;
      const offVirtual = lenis.on('virtual-scroll', () => {
        lastInput = performance.now();
        snapping = false; // any new input cancels our own glide (Lenis replaces the animation)
        target = -1;
        if (!synth) userUntil = lastInput + 2500;
      });
      const out3 = (t) => 1 - Math.pow(1 - t, 3);

      // Autoplay is just a visitor flicking the wheel: partial pushes in sections units, snap does the rest.
      const flicks = [0.6, 0.7, 0.28, 0.65, -0.62, -0.68, -0.7];
      let fi = 0;
      let queue = 0;
      let per = 0;
      let at = 0;
      let next = performance.now() + 1900;

      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const H = sc.clientHeight;
        if (t > userUntil) {
          if (queue > 0 && t >= at) {
            synth = true;
            sc.dispatchEvent(new WheelEvent('wheel', { deltaY: per, bubbles: true, cancelable: true, composed: true }));
            synth = false;
            queue--;
            at = t + 55;
          } else if (!queue && t > next) {
            per = (flicks[fi] * H) / 3;
            fi = (fi + 1) % flicks.length;
            queue = 3;
            at = t;
            next = t + 3000;
          }
        }
        lenis.raf(t);
        if (!snapping && t - lastInput > 140 && Math.abs(lenis.velocity) < 1.2) {
          const idx = Math.max(0, Math.min(N - 1, Math.round(lenis.scroll / H)));
          if (Math.abs(idx * H - lenis.scroll) > 1.5) {
            snapping = true;
            target = idx;
            lenis.scrollTo(idx * H, {
              duration: 0.7,
              easing: out3,
              onComplete: () => {
                snapping = false;
                target = -1;
              },
            });
          }
        }
        // rail: the dot follows the live scroll; the tick it is being pulled to lights up
        dt.style.transform = `translateY(${(lenis.progress * railH).toFixed(1)}px)`;
        const near = Math.max(0, Math.min(N - 1, Math.round(lenis.scroll / H)));
        for (let i = 0; i < N; i++) ticks[i].classList.toggle('on', i === (target > -1 ? target : near));
        const label = snapping ? 'Snap to 0' + (target + 1) : lenis.isScrolling ? 'Free scroll' : 'Section 0' + (near + 1);
        if (tip.textContent !== label) tip.textContent = label;
        tip.classList.toggle('snap', snapping);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        offVirtual();
        lenis.destroy();
        dt.style.transform = '';
      };
    },
    prompt: `Build a soft section snap on top of Lenis smooth scrolling. Lenis core has no snap option (the separate lenis-snap package does that), so implement it from Lenis events. Load Lenis from a pinned CDN (lenis@1.3.26, ES module), create it with lerp 0.1, keep autoRaf off and call lenis.raf(time) from your own requestAnimationFrame loop. Make four full-height sections. Record performance.now() on every lenis.on('virtual-scroll') event (real wheel or touch input) and clear any snap in progress. Each frame, if no snap is running, at least 140ms have passed since the last input, and Math.abs(lenis.velocity) is below 1.2, compute the nearest section with Math.round(lenis.scroll / viewportHeight); if it is more than 1.5px away call lenis.scrollTo(index * viewportHeight, { duration: 0.7, easing: t => 1 - Math.pow(1 - t, 3), onComplete }) and flag snapping until it completes. A small scroll therefore falls back to its section and a bigger push lands on the next one, without the hard feel of CSS scroll-snap. Add a vertical rail on the right with four ticks and a dot at lenis.progress, light the tick being pulled to, and show a pill reading "Free scroll", "Snap to 03" or "Section 02". For a hero demo dispatch synthetic WheelEvents of 0.6, 0.7, 0.28 and so on of a section height, and pause 2.5s after real input. Call lenis.destroy() on unmount.`,
  });
})();
