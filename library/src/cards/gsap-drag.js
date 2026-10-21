// GSAP Draggable + InertiaPlugin cards (GSAP 3.15.0).
// Each run() is self-contained (it is serialized into the export), so the ghost-cursor loop, pause sync
// and cleanup are repeated per card.
(() => {
  // 1. Snapping carousel
  const SLIDES = [
    ['Atlas', 'Travel journal', 'a1'],
    ['Meridian', 'World clock', 'a2'],
    ['Solstice', 'Daily light', 'a3'],
    ['Harbor', 'Shared boards', 'a4'],
    ['Lumen', 'Reading list', 'a5'],
  ];
  ML.add({
    id: 'gsap-drag-snap-carousel',
    cat: 'gsap-drag',
    title: 'Snapping card carousel',
    sub: 'Throw the deck, it lands on a card',
    libs: ['gsap'],
    html: `<header class="top"><b>Collections</b><span><em class="cnt">1</em> / ${SLIDES.length}</span></header>
<div class="vp"><div class="track">${SLIDES.map(([t, s, a]) => `<article class="sl"><div class="art ${a}"><i class="sun"></i><i class="mt"></i></div><b>${t}</b><p>${s}</p></article>`).join('')}</div></div>
<div class="dots">${SLIDES.map((_, i) => `<i${i ? '' : ' class="on"'}></i>`).join('')}</div>
<i class="ghost"></i>`,
    css: `
.d{background:linear-gradient(180deg,#fff 0%,#FAF6F2 100%);isolation:isolate;user-select:none;-webkit-user-select:none}
.d .top{position:absolute;left:8%;right:8%;top:6%;display:flex;justify-content:space-between;align-items:baseline}
.d .top b{font:650 15px/1 var(--ml-font);letter-spacing:-.03em}
.d .top span{font:600 9px/1 var(--ml-mono);letter-spacing:.06em;color:var(--ml-muted)}
.d .top em{font-style:normal;color:var(--ml-accent)}
.d .vp{position:absolute;left:0;right:0;top:17%;height:66%;cursor:grab}
.d .track{position:absolute;left:0;top:0;height:100%;display:flex;gap:12px;will-change:transform}
.d .sl{flex:0 0 auto;width:168px;height:100%;padding:8px 8px 10px;border-radius:16px;background:#fff;box-shadow:var(--ml-shadow-lg);display:flex;flex-direction:column;gap:3px}
.d .art{position:relative;flex:1;border-radius:10px;overflow:hidden;margin-bottom:5px}
.d .a1{background:linear-gradient(160deg,#FFF0ED,#EEF4FF)}
.d .a2{background:linear-gradient(160deg,#FFC2B3,#FFEFEA)}
.d .a3{background:linear-gradient(160deg,#8FBDFF,#D3E5FF)}
.d .a4{background:linear-gradient(160deg,#BCD6FF,#F0F6FF)}
.d .a5{background:var(--ml-grad)}
.d .sun{position:absolute;right:16%;top:16%;width:20%;aspect-ratio:1;border-radius:50%;background:rgba(255,255,255,.85)}
.d .mt{position:absolute;left:-6%;right:-6%;bottom:-2px;height:48%;background:rgba(255,255,255,.55);clip-path:polygon(0 100%,0 62%,22% 30%,40% 64%,62% 18%,100% 70%,100% 100%)}
.d .sl b{font:650 13px/1.1 var(--ml-font);letter-spacing:-.03em}
.d .sl p{font:500 10px/1.2 var(--ml-font);color:var(--ml-muted)}
.d .dots{position:absolute;left:0;right:0;bottom:6%;display:flex;justify-content:center;gap:5px}
.d .dots i{width:6px;height:6px;border-radius:99px;background:var(--ml-bar);transition:width var(--ml-spring-dur) var(--ml-spring),background-color 200ms}
.d .dots i.on{width:18px;background:var(--ml-accent)}
.d .ghost{position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;z-index:60;pointer-events:none;opacity:0;background:rgba(255,255,255,.6);box-shadow:0 0 0 1.5px var(--ml-accent),var(--ml-shadow)}
.d .ghost::after{content:"";position:absolute;inset:7px;border-radius:50%;background:var(--ml-accent);transform:scale(.4);transition:transform 160ms var(--ml-ease)}
.d .ghost.is-down::after{transform:scale(1)}
`,
    run: (root, lib) => {
      const { gsap, Draggable, InertiaPlugin } = lib;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      const q = (s) => root.querySelector(s);
      const qa = (s) => Array.from(root.querySelectorAll(s));
      const ghost = q('.ghost');
      const drags = [];
      let ctx, build, gx, gy, cycle = null, resume = null, down = false, endedAt = 0;
      let layout = () => {};
      let abort = () => {};
      let settle = () => {};
      let dispose = () => {};

      // Point of an element in root coordinates (stays right when the preview scales the stage).
      const rel = (el, fx, fy) => {
        const rr = root.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const k = root.clientWidth / rr.width;
        return { x: (r.left + r.width * fx - rr.left) * k, y: (r.top + r.height * fy - rr.top) * k };
      };
      const tw = (...a) => ctx.add(() => gsap.to(...a));
      // A drag must never reach the stage's click-to-open handler.
      const hold = function () { this.pointerEvent && this.pointerEvent.stopPropagation(); };
      const ended = () => { endedAt = performance.now(); };

      // Ghost cursor: appears, presses, drags, releases. Each step returns a tween (or nothing).
      const gIn = (p) => () => {
        ghost.classList.remove('is-down');
        gsap.set(ghost, { x: p.x - 28, y: p.y + 22, scale: 1 });
        return gsap.to(ghost, { x: p.x, y: p.y, opacity: 1, duration: 0.5, ease: 'power3.out' });
      };
      const gDown = () => {
        ghost.classList.add('is-down');
        return gsap.to(ghost, { scale: 0.82, duration: 0.14, ease: 'power2.out' });
      };
      const gUp = () => {
        ghost.classList.remove('is-down');
        gsap.to(ghost, { scale: 1, opacity: 0, duration: 0.45, ease: 'power2.out' });
      };

      const seq = (steps) => {
        let i = 0, live = null, dead = false;
        const next = () => {
          if (dead) return;
          if (i >= steps.length) { cycle = null; later(1.1); return; }
          live = ctx.add(steps[i++]);
          if (!live || !live.eventCallback) return next();
          const prev = live.eventCallback('onComplete');
          live.eventCallback('onComplete', function () { prev && prev.apply(this, arguments); next(); });
        };
        next();
        return { kill() { dead = true; live && live.kill(); } };
      };
      const later = (s) => {
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(s, begin));
      };
      const begin = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused || down || drags.some((d) => d.isPressed || d.isThrowing)) return later(0.6);
        cycle = seq(build());
      };
      // The visitor takes over: the ghost leaves at once, the card settles where it is.
      const halt = () => {
        down = true;
        cycle && cycle.kill();
        cycle = null;
        resume && resume.kill();
        gsap.killTweensOf(ghost);
        ghost.classList.remove('is-down');
        tw(ghost, { opacity: 0, scale: 1, duration: 0.2 });
        abort();
      };
      // On release, once Draggable has had its turn (a throw it started owns the card), settle anything the
      // interrupted ghost left between snaps.
      const free = () => {
        if (!down) return;
        down = false;
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(0.12, () => {
          if (!drags.some((d) => d.isPressed || d.isThrowing)) settle();
          later(2.4);
        }));
      };
      // A drag that ends outside the draggable can still fire a click on the stage; swallow it.
      const swallow = (e) => { if (performance.now() - endedAt < 450) e.stopPropagation(); };
      const vp = q('.vp');
      const track = q('.track');
      const slides = qa('.sl');
      const dots = qa('.dots i');
      const cnt = q('.cnt');
      const n = slides.length;
      let step = 180, W = 0, cur = -1, drag, qs, qo, qx, k = 0;

      ctx = gsap.context(() => {
        gx = gsap.quickSetter(ghost, 'x', 'px');
        gy = gsap.quickSetter(ghost, 'y', 'px');
        gsap.set(ghost, { x: -40, y: -40, opacity: 0 });
        qs = slides.map((s) => gsap.quickSetter(s, 'scale'));
        qo = slides.map((s) => gsap.quickSetter(s, 'opacity'));
        qx = gsap.quickSetter(track, 'x', 'px');
        const snapX = (v) => Math.max(-(n - 1) * step, Math.min(0, Math.round(v / step) * step));
        // Active card scales up, the others recede; the dots follow whatever sits nearest the centre.
        const paint = () => {
          const x = gsap.getProperty(track, 'x');
          let a = 0;
          slides.forEach((s, i) => {
            const d = Math.min(1, Math.abs(x + i * step) / step);
            qs[i](1 - 0.13 * d);
            qo[i](1 - 0.5 * d);
            if (d < 0.5) a = i;
          });
          if (a !== cur) {
            cur = a;
            dots.forEach((e, i) => e.classList.toggle('on', i === a));
            cnt.textContent = a + 1;
          }
        };
        layout = () => {
          W = root.clientWidth;
          if (!W) return;
          const sw = Math.round(W * 0.56);
          step = sw + 12;
          slides.forEach((s) => (s.style.width = sw + 'px'));
          track.style.paddingLeft = track.style.paddingRight = Math.round((W - sw) / 2) + 'px';
          const i = Math.max(0, Math.min(n - 1, Math.round(-gsap.getProperty(track, 'x') / step)));
          qx(-i * step);
          if (drag) { drag.applyBounds({ minX: -(n - 1) * step, maxX: 0 }); drag.update(); }
          paint();
        };
        layout();
        drag = Draggable.create(track, {
          type: 'x',
          trigger: vp,
          bounds: { minX: -(n - 1) * step, maxX: 0 },
          inertia: true,
          edgeResistance: 0.8,
          throwResistance: 1600,
          snap: { x: snapX },
          zIndexBoost: false,
          onPress: hold,
          onDrag: paint,
          onThrowUpdate: paint,
          onDragEnd: ended,
        })[0];
        drags.push(drag);

        settle = () => {
          tw(track, { x: snapX(gsap.getProperty(track, 'x')), duration: 0.5, ease: 'power3.out', onUpdate: paint, onComplete: () => drag.update() });
        };
        // Ghost: drag the deck left, let go, inertia carries it to the next card. From the last card it
        // flicks back to the first.
        build = () => {
          const x0 = gsap.getProperty(track, 'x');
          const i = Math.round(-x0 / step);
          const last = i >= n - 1;
          const p = rel(vp, 0.5, 0.52);
          const dir = last ? 1 : -1;
          const dist = step * (last ? 0.5 : 0.36);
          const dur = last ? 0.36 : 0.5;
          const tgt = last ? 0 : -(i + 1) * step;
          const v = ((dir * 2 * dist) / dur) * (last ? 1.6 : 1);
          const s = { v: 0 };
          return [
            gIn(p),
            gDown,
            () => gsap.to(s, {
              v: 1, duration: dur, ease: 'power1.in',
              onUpdate() { const dx = dir * dist * s.v; qx(x0 + dx); paint(); gx(p.x + dx); gy(p.y); },
            }),
            () => {
              gUp();
              return gsap.to(track, {
                inertia: { x: { velocity: v, end: tgt, min: -(n - 1) * step, max: 0 } },
                onUpdate: paint,
                onComplete: () => drag.update(),
              });
            },
          ];
        };
      }, root);
      root.addEventListener('pointerdown', halt, true);
      root.addEventListener('click', swallow, true);
      window.addEventListener('pointerup', free);
      window.addEventListener('pointercancel', free);

      // The page sets root.dataset.paused offscreen / behind the modal: hold every running animation.
      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();
      const ro = new ResizeObserver(() => layout());
      ro.observe(root);
      later(0.8);

      return () => {
        cycle && cycle.kill();
        resume && resume.kill();
        mo.disconnect();
        ro.disconnect();
        root.removeEventListener('pointerdown', halt, true);
        root.removeEventListener('click', swallow, true);
        window.removeEventListener('pointerup', free);
        window.removeEventListener('pointercancel', free);
        dispose();
        ctx.revert();
      };
    },
    prompt: `Build a snapping card carousel with GSAP 3 Draggable and InertiaPlugin. A row of 5 rounded cards (about 56 percent of the container wide, 12px gap, soft layered shadow) sits in a clipped viewport with padding so the first and last card can centre. Register Draggable and InertiaPlugin, then Draggable.create(track, { type: 'x', trigger: viewport, bounds: { minX: -(count - 1) * step, maxX: 0 }, inertia: true, edgeResistance: 0.8, snap: { x: (v) => gsap.utils.snap(step, v) } }) where step is card width plus gap. Inertia projects the throw and the snap function picks the nearest card, so a quick flick can travel two cards and a slow drag settles on the closest one. In onDrag and onThrowUpdate read gsap.getProperty(track, 'x'), measure each card's distance from the centre and set scale from 1 to 0.87 and opacity from 1 to 0.5 with gsap.quickSetter, then toggle the active page dot (a 6px dot that stretches into an 18px pill). Keep touch-action pan-y on the viewport so vertical page scroll still works, add keyboard arrows that call gsap.to(track, { x, duration: 0.6, ease: 'power3.out' }), and recompute step in a ResizeObserver with draggable.applyBounds. Under prefers-reduced-motion drop the scale effect. Wrap setup in gsap.context and call ctx.revert() on unmount.`,
  });
  // 2. Bottom sheet
  const STUDIOS = [
    ['Northlight Pilates', '0.4 km', 'Open until 8 pm', '4.9'],
    ['Kiln and Clay Studio', '0.7 km', 'Open until 6 pm', '4.8'],
    ['Harbor Yoga Loft', '1.1 km', 'Open until 9 pm', '4.7'],
    ['Tempo Cycle Club', '1.4 km', 'Open until 10 pm', '4.9'],
    ['Fern Climbing Gym', '2.0 km', 'Open until 11 pm', '4.6'],
  ];
  ML.add({
    id: 'gsap-drag-bottom-sheet',
    cat: 'gsap-drag',
    title: 'Bottom sheet detents',
    sub: 'A sheet that throws to peek, half, full',
    libs: ['gsap'],
    html: `<div class="map"><i class="pin" style="left:24%;top:16%"></i><i class="pin" style="left:60%;top:10%"></i><i class="pin" style="left:78%;top:26%"></i><i class="pin" style="left:40%;top:30%"></i></div>
<div class="scrim"></div>
<section class="sheet">
  <div class="grab"><i class="bar"></i><div class="hd"><b>Nearby studios</b><span class="st">Half</span></div>
  <div class="srch"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>Search studios</div></div>
  <ul class="rows">${STUDIOS.map(([n, d, o, r]) => `<li><i class="av"></i><div><b>${n}</b><span>${d} - ${o}</span></div><em>${r}</em></li>`).join('')}</ul>
</section>
<i class="ghost"></i>`,
    css: `
.d{background:#E3ECF8;isolation:isolate;user-select:none;-webkit-user-select:none}
.d .map{position:absolute;inset:0;background:
  linear-gradient(90deg,transparent 0 22%,rgba(255,255,255,.92) 22% 25%,transparent 25% 61%,rgba(255,255,255,.92) 61% 63.5%,transparent 63.5%),
  linear-gradient(0deg,transparent 0 30%,rgba(255,255,255,.92) 30% 33%,transparent 33% 70%,rgba(255,255,255,.92) 70% 72%,transparent 72%),
  linear-gradient(115deg,transparent 0 40%,rgba(255,255,255,.7) 40% 42.5%,transparent 42.5%),
  #DCE7F6}
.d .pin{position:absolute;width:14px;height:14px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--ml-accent);box-shadow:var(--ml-shadow)}
.d .pin::after{content:"";position:absolute;inset:4px;border-radius:50%;background:#fff}
.d .scrim{position:absolute;inset:0;background:#2E140C;opacity:0;pointer-events:none}
.d .sheet{position:absolute;left:0;right:0;top:0;height:100%;border-radius:18px 18px 0 0;background:#fff;box-shadow:0 -6px 28px rgba(35,15,10,.16);will-change:transform}
.d .grab{padding:8px 16px 4px;cursor:grab}
.d .bar{display:block;width:34px;height:4px;border-radius:99px;background:var(--ml-bar);margin:0 auto 10px}
.d .hd{display:flex;justify-content:space-between;align-items:center}
.d .hd b{font:650 15px/1 var(--ml-font);letter-spacing:-.03em}
.d .st{font:600 9px/1 var(--ml-mono);letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent);background:var(--ml-accent-soft);padding:4px 8px;border-radius:99px}
.d .srch{display:flex;gap:6px;align-items:center;margin-top:9px;height:28px;padding:0 10px;border-radius:10px;background:var(--ml-surface);color:var(--ml-muted);font:500 11px/1 var(--ml-font)}
.d .srch svg{width:13px;height:13px}
.d .rows{list-style:none;padding:2px 16px}
.d .rows li{display:flex;align-items:center;gap:10px;height:44px;border-bottom:1px solid var(--ml-line)}
.d .av{flex:none;width:28px;height:28px;border-radius:9px;background:var(--ml-accent-soft)}
.d .rows li:nth-child(even) .av{background:var(--ml-bar)}
.d .rows div{flex:1;min-width:0}
.d .rows b{display:block;font:600 12px/1.2 var(--ml-font);letter-spacing:-.02em}
.d .rows span{display:block;margin-top:2px;font:500 10px/1.2 var(--ml-font);color:var(--ml-muted)}
.d .rows em{font:600 10px/1 var(--ml-mono);font-style:normal;color:var(--ml-accent-ink)}
.d .ghost{position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;z-index:60;pointer-events:none;opacity:0;background:rgba(255,255,255,.6);box-shadow:0 0 0 1.5px var(--ml-accent),var(--ml-shadow)}
.d .ghost::after{content:"";position:absolute;inset:7px;border-radius:50%;background:var(--ml-accent);transform:scale(.4);transition:transform 160ms var(--ml-ease)}
.d .ghost.is-down::after{transform:scale(1)}
`,
    run: (root, lib) => {
      const { gsap, Draggable, InertiaPlugin } = lib;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      const q = (s) => root.querySelector(s);
      const qa = (s) => Array.from(root.querySelectorAll(s));
      const ghost = q('.ghost');
      const drags = [];
      let ctx, build, gx, gy, cycle = null, resume = null, down = false, endedAt = 0;
      let layout = () => {};
      let abort = () => {};
      let settle = () => {};
      let dispose = () => {};

      // Point of an element in root coordinates (stays right when the preview scales the stage).
      const rel = (el, fx, fy) => {
        const rr = root.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const k = root.clientWidth / rr.width;
        return { x: (r.left + r.width * fx - rr.left) * k, y: (r.top + r.height * fy - rr.top) * k };
      };
      const tw = (...a) => ctx.add(() => gsap.to(...a));
      // A drag must never reach the stage's click-to-open handler.
      const hold = function () { this.pointerEvent && this.pointerEvent.stopPropagation(); };
      const ended = () => { endedAt = performance.now(); };

      // Ghost cursor: appears, presses, drags, releases. Each step returns a tween (or nothing).
      const gIn = (p) => () => {
        ghost.classList.remove('is-down');
        gsap.set(ghost, { x: p.x - 28, y: p.y + 22, scale: 1 });
        return gsap.to(ghost, { x: p.x, y: p.y, opacity: 1, duration: 0.5, ease: 'power3.out' });
      };
      const gDown = () => {
        ghost.classList.add('is-down');
        return gsap.to(ghost, { scale: 0.82, duration: 0.14, ease: 'power2.out' });
      };
      const gUp = () => {
        ghost.classList.remove('is-down');
        gsap.to(ghost, { scale: 1, opacity: 0, duration: 0.45, ease: 'power2.out' });
      };

      const seq = (steps) => {
        let i = 0, live = null, dead = false;
        const next = () => {
          if (dead) return;
          if (i >= steps.length) { cycle = null; later(1.1); return; }
          live = ctx.add(steps[i++]);
          if (!live || !live.eventCallback) return next();
          const prev = live.eventCallback('onComplete');
          live.eventCallback('onComplete', function () { prev && prev.apply(this, arguments); next(); });
        };
        next();
        return { kill() { dead = true; live && live.kill(); } };
      };
      const later = (s) => {
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(s, begin));
      };
      const begin = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused || down || drags.some((d) => d.isPressed || d.isThrowing)) return later(0.6);
        cycle = seq(build());
      };
      // The visitor takes over: the ghost leaves at once, the card settles where it is.
      const halt = () => {
        down = true;
        cycle && cycle.kill();
        cycle = null;
        resume && resume.kill();
        gsap.killTweensOf(ghost);
        ghost.classList.remove('is-down');
        tw(ghost, { opacity: 0, scale: 1, duration: 0.2 });
        abort();
      };
      // On release, once Draggable has had its turn (a throw it started owns the card), settle anything the
      // interrupted ghost left between snaps.
      const free = () => {
        if (!down) return;
        down = false;
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(0.12, () => {
          if (!drags.some((d) => d.isPressed || d.isThrowing)) settle();
          later(2.4);
        }));
      };
      // A drag that ends outside the draggable can still fire a click on the stage; swallow it.
      const swallow = (e) => { if (performance.now() - endedAt < 450) e.stopPropagation(); };
      const sheet = q('.sheet');
      const grab = q('.grab');
      const scrim = q('.scrim');
      const lab = q('.st');
      const NAMES = ['Full', 'Half', 'Peek'];
      let ys = [0, 0, 0], cur = -1, drag, qy, qo, k = 0;

      ctx = gsap.context(() => {
        gx = gsap.quickSetter(ghost, 'x', 'px');
        gy = gsap.quickSetter(ghost, 'y', 'px');
        gsap.set(ghost, { x: -40, y: -40, opacity: 0 });
        qy = gsap.quickSetter(sheet, 'y', 'px');
        qo = gsap.quickSetter(scrim, 'opacity');
        const near = (v) => ys.reduce((a, b) => (Math.abs(b - v) < Math.abs(a - v) ? b : a));
        const paint = () => {
          const y = gsap.getProperty(sheet, 'y');
          qo(0.34 * Math.max(0, Math.min(1, (ys[2] - y) / (ys[2] - ys[0]))));
          const i = ys.indexOf(near(y));
          if (i !== cur) { cur = i; lab.textContent = NAMES[i]; }
        };
        layout = () => {
          const H = root.clientHeight;
          if (!H) return;
          ys = [Math.round(H * 0.1), Math.round(H * 0.47), Math.round(H * 0.77)];
          qy(ys[cur < 0 ? 1 : cur]);
          if (drag) { drag.applyBounds({ minY: ys[0], maxY: ys[2] }); drag.update(); }
          paint();
        };
        layout();
        // Release projects the throw; snap picks the detent nearest to where it would land. Past the
        // top edge the sheet resists (edgeResistance) and springs back.
        drag = Draggable.create(sheet, {
          type: 'y',
          trigger: grab,
          bounds: { minY: ys[0], maxY: ys[2] },
          inertia: true,
          edgeResistance: 0.6,
          throwResistance: 1500,
          snap: { y: near },
          zIndexBoost: false,
          onPress: hold,
          onDrag: paint,
          onThrowUpdate: paint,
          onDragEnd: ended,
        })[0];
        drags.push(drag);

        settle = () => {
          tw(sheet, { y: near(gsap.getProperty(sheet, 'y')), duration: 0.5, ease: 'power3.out', onUpdate: paint, onComplete: () => drag.update() });
        };
        // Ghost: grab the handle, drag partway, release. Going to Full pulls past the top first so the
        // rubber band shows.
        build = () => {
          const g = [0, 1, 2, 1][k++ % 4];
          const y0 = gsap.getProperty(sheet, 'y');
          const tgt = ys[g];
          const sgn = tgt < y0 ? -1 : 1;
          const dist = Math.abs(tgt - y0) * 0.55;
          const over = g === 0 ? 18 : 0;
          const total = dist + over;
          const dur = 0.55;
          const p = rel(grab, 0.5, 0.1);
          const s = { v: 0 };
          return [
            gIn(p),
            gDown,
            () => gsap.to(s, {
              v: 1, duration: dur, ease: 'power1.in',
              onUpdate() {
                const d = total * s.v;
                const sd = d <= dist ? d : dist + (d - dist) * 0.3;
                qy(y0 + sgn * sd);
                paint();
                gx(p.x);
                gy(p.y + sgn * d);
              },
            }),
            () => {
              gUp();
              return gsap.to(sheet, {
                inertia: { y: { velocity: (sgn * 2 * total) / dur, end: tgt, min: ys[0], max: ys[2] } },
                onUpdate: paint,
                onComplete: () => drag.update(),
              });
            },
          ];
        };
      }, root);
      root.addEventListener('pointerdown', halt, true);
      root.addEventListener('click', swallow, true);
      window.addEventListener('pointerup', free);
      window.addEventListener('pointercancel', free);

      // The page sets root.dataset.paused offscreen / behind the modal: hold every running animation.
      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();
      const ro = new ResizeObserver(() => layout());
      ro.observe(root);
      later(0.8);

      return () => {
        cycle && cycle.kill();
        resume && resume.kill();
        mo.disconnect();
        ro.disconnect();
        root.removeEventListener('pointerdown', halt, true);
        root.removeEventListener('click', swallow, true);
        window.removeEventListener('pointerup', free);
        window.removeEventListener('pointercancel', free);
        dispose();
        ctx.revert();
      };
    },
    prompt: `Build a draggable bottom sheet with three detents (peek, half, full) using GSAP 3 Draggable and InertiaPlugin, over a map or content page. The sheet is a white panel with a 18px top radius, an upward soft shadow and a grab handle. Position it with top: 0 and height 100 percent, and move it only with transform y. Register Draggable and InertiaPlugin and call Draggable.create(sheet, { type: 'y', trigger: gripArea, bounds: { minY: fullY, maxY: peekY }, inertia: true, edgeResistance: 0.6, snap: { y: (v) => nearestDetent(v) } }). Because the snap function receives the projected landing value, a fast flick up jumps to full even from a short drag, while a slow release settles on the closest detent. edgeResistance gives the rubber band when the sheet is pulled past the top. In onDrag and onThrowUpdate map y to a 0-1 progress and drive a dark scrim opacity up to 0.34 and a small status label. Use the grip area as the trigger so the list inside can still scroll natively on phones, make the handle a focusable button with arrow keys that gsap.to the next detent, and respect prefers-reduced-motion with short linear moves. Wrap in gsap.context and revert on unmount.`,
  });
  // 3. Rotary knob
  const KNOB_TICKS = Array.from({ length: 11 }, (_, i) => {
    const a = ((-135 + i * 27) * Math.PI) / 180;
    const f = (r) => (50 + r * Math.sin(a)).toFixed(2) + ' ' + (50 - r * Math.cos(a)).toFixed(2);
    return `<path class="tk" d="M${f(39.5)}L${f(43)}"/>`;
  }).join('');
  ML.add({
    id: 'gsap-drag-rotary-knob',
    cat: 'gsap-drag',
    title: 'Rotary knob with ticks',
    sub: 'Spin a dial, it settles on a tick',
    libs: ['gsap'],
    html: `<p class="lb">Output gain</p>
<div class="dial">
  <svg class="ring" viewBox="0 0 100 100" aria-hidden="true">
    <path class="trk" pathLength="100" d="M17.47 82.53A46 46 0 1 1 82.53 82.53"/>
    <path class="arc" pathLength="100" d="M17.47 82.53A46 46 0 1 1 82.53 82.53"/>
    ${KNOB_TICKS}
  </svg>
  <div class="knob"></div>
</div>
<p class="rd"><b class="val">60</b><span>%</span></p>
<i class="ghost"></i>`,
    css: `
.d{background:linear-gradient(180deg,#fff 0%,#F1F5FB 100%);isolation:isolate;user-select:none;-webkit-user-select:none}
.d .lb{position:absolute;left:0;right:0;top:7%;text-align:center;font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-muted)}
.d .dial{position:absolute;left:50%;top:47%;width:36%;aspect-ratio:1;transform:translate(-50%,-50%)}
.d .ring{position:absolute;left:-18.5%;top:-18.5%;width:137%;height:137%;overflow:visible}
.d .ring path{fill:none;stroke-linecap:round}
.d .trk{stroke:var(--ml-bar-2);stroke-width:3.2}
.d .arc{stroke:var(--ml-accent);stroke-width:3.2;stroke-dasharray:100;stroke-dashoffset:60}
.d .tk{stroke:var(--ml-bar);stroke-width:1.3;transition:stroke 160ms}
.d .tk.on{stroke:var(--ml-accent)}
.d .knob{position:absolute;inset:0;border-radius:50%;cursor:grab;background:radial-gradient(circle at 34% 26%,#fff 0,#F3F6FB 52%,#DEE6F2 100%);box-shadow:inset 0 1px 0 #fff,0 12px 26px rgba(35,15,10,.18),0 2px 5px rgba(35,15,10,.1)}
.d .knob::before{content:"";position:absolute;left:50%;top:8%;width:6%;height:20%;margin-left:-3%;border-radius:99px;background:var(--ml-accent)}
.d .knob::after{content:"";position:absolute;inset:22%;border-radius:50%;background:radial-gradient(circle at 60% 70%,#fff 0,#EEF2F9 100%);box-shadow:inset 0 2px 4px rgba(35,15,10,.1)}
.d .rd{position:absolute;left:0;right:0;bottom:5%;text-align:center;font:650 20px/1 var(--ml-font);letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .rd span{margin-left:2px;font:600 11px/1 var(--ml-font);color:var(--ml-muted)}
.d .ghost{position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;z-index:60;pointer-events:none;opacity:0;background:rgba(255,255,255,.6);box-shadow:0 0 0 1.5px var(--ml-accent),var(--ml-shadow)}
.d .ghost::after{content:"";position:absolute;inset:7px;border-radius:50%;background:var(--ml-accent);transform:scale(.4);transition:transform 160ms var(--ml-ease)}
.d .ghost.is-down::after{transform:scale(1)}
`,
    run: (root, lib) => {
      const { gsap, Draggable, InertiaPlugin } = lib;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      const q = (s) => root.querySelector(s);
      const qa = (s) => Array.from(root.querySelectorAll(s));
      const ghost = q('.ghost');
      const drags = [];
      let ctx, build, gx, gy, cycle = null, resume = null, down = false, endedAt = 0;
      let layout = () => {};
      let abort = () => {};
      let settle = () => {};
      let dispose = () => {};

      // Point of an element in root coordinates (stays right when the preview scales the stage).
      const rel = (el, fx, fy) => {
        const rr = root.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const k = root.clientWidth / rr.width;
        return { x: (r.left + r.width * fx - rr.left) * k, y: (r.top + r.height * fy - rr.top) * k };
      };
      const tw = (...a) => ctx.add(() => gsap.to(...a));
      // A drag must never reach the stage's click-to-open handler.
      const hold = function () { this.pointerEvent && this.pointerEvent.stopPropagation(); };
      const ended = () => { endedAt = performance.now(); };

      // Ghost cursor: appears, presses, drags, releases. Each step returns a tween (or nothing).
      const gIn = (p) => () => {
        ghost.classList.remove('is-down');
        gsap.set(ghost, { x: p.x - 28, y: p.y + 22, scale: 1 });
        return gsap.to(ghost, { x: p.x, y: p.y, opacity: 1, duration: 0.5, ease: 'power3.out' });
      };
      const gDown = () => {
        ghost.classList.add('is-down');
        return gsap.to(ghost, { scale: 0.82, duration: 0.14, ease: 'power2.out' });
      };
      const gUp = () => {
        ghost.classList.remove('is-down');
        gsap.to(ghost, { scale: 1, opacity: 0, duration: 0.45, ease: 'power2.out' });
      };

      const seq = (steps) => {
        let i = 0, live = null, dead = false;
        const next = () => {
          if (dead) return;
          if (i >= steps.length) { cycle = null; later(1.1); return; }
          live = ctx.add(steps[i++]);
          if (!live || !live.eventCallback) return next();
          const prev = live.eventCallback('onComplete');
          live.eventCallback('onComplete', function () { prev && prev.apply(this, arguments); next(); });
        };
        next();
        return { kill() { dead = true; live && live.kill(); } };
      };
      const later = (s) => {
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(s, begin));
      };
      const begin = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused || down || drags.some((d) => d.isPressed || d.isThrowing)) return later(0.6);
        cycle = seq(build());
      };
      // The visitor takes over: the ghost leaves at once, the card settles where it is.
      const halt = () => {
        down = true;
        cycle && cycle.kill();
        cycle = null;
        resume && resume.kill();
        gsap.killTweensOf(ghost);
        ghost.classList.remove('is-down');
        tw(ghost, { opacity: 0, scale: 1, duration: 0.2 });
        abort();
      };
      // On release, once Draggable has had its turn (a throw it started owns the card), settle anything the
      // interrupted ghost left between snaps.
      const free = () => {
        if (!down) return;
        down = false;
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(0.12, () => {
          if (!drags.some((d) => d.isPressed || d.isThrowing)) settle();
          later(2.4);
        }));
      };
      // A drag that ends outside the draggable can still fire a click on the stage; swallow it.
      const swallow = (e) => { if (performance.now() - endedAt < 450) e.stopPropagation(); };
      const knob = q('.knob');
      const arc = q('.arc');
      const ticks = qa('.tk');
      const val = q('.val');
      const MIN = -135, MAX = 135, STEP = 27;
      let cur = -1, tick = -1, drag, qr, k = 0;

      ctx = gsap.context(() => {
        gx = gsap.quickSetter(ghost, 'x', 'px');
        gy = gsap.quickSetter(ghost, 'y', 'px');
        gsap.set(ghost, { x: -40, y: -40, opacity: 0 });
        qr = gsap.quickSetter(knob, 'rotation', 'deg');
        const snapR = (v) => Math.max(MIN, Math.min(MAX, Math.round((v - MIN) / STEP) * STEP + MIN));
        const paint = () => {
          const f = (gsap.getProperty(knob, 'rotation') - MIN) / (MAX - MIN);
          arc.style.strokeDashoffset = String(100 - f * 100);
          const v = Math.round(f * 100);
          if (v !== cur) { cur = v; val.textContent = v; }
          const t = Math.floor(f * 10 + 0.001);
          if (t !== tick) { tick = t; ticks.forEach((e, i) => e.classList.toggle('on', i <= t)); }
        };
        layout = paint;
        gsap.set(knob, { rotation: MIN + 6 * STEP });
        paint();
        drag = Draggable.create(knob, {
          type: 'rotation',
          bounds: { minRotation: MIN, maxRotation: MAX },
          inertia: true,
          edgeResistance: 0.85,
          snap: { rotation: snapR },
          zIndexBoost: false,
          onPress: hold,
          onDrag: paint,
          onThrowUpdate: paint,
          onDragEnd: ended,
        })[0];
        drags.push(drag);

        settle = () => {
          tw(knob, { rotation: snapR(gsap.getProperty(knob, 'rotation')), duration: 0.45, ease: 'power3.out', onUpdate: paint, onComplete: () => drag.update() });
        };
        // Ghost: grab the rim, turn the dial, let go; the spin glides to a tick.
        build = () => {
          const vals = [100, 20, 80, 40, 60];
          const tgt = MIN + vals[k++ % vals.length] * 2.7;
          const r0 = gsap.getProperty(knob, 'rotation');
          const c = rel(knob, 0.5, 0.5);
          const rad = knob.offsetWidth * 0.36;
          const pos = (r) => {
            const a = ((r + 38) * Math.PI) / 180;
            return { x: c.x + rad * Math.sin(a), y: c.y - rad * Math.cos(a) };
          };
          const dr = (tgt - r0) * 0.5;
          const dur = 0.6;
          const s = { v: 0 };
          return [
            gIn(pos(r0)),
            gDown,
            () => gsap.to(s, {
              v: 1, duration: dur, ease: 'power1.in',
              onUpdate() { const r = r0 + dr * s.v; qr(r); paint(); const p = pos(r); gx(p.x); gy(p.y); },
            }),
            () => {
              gUp();
              return gsap.to(knob, {
                inertia: { rotation: { velocity: (2 * dr) / dur, end: tgt, min: MIN, max: MAX } },
                onUpdate: paint,
                onComplete: () => drag.update(),
              });
            },
          ];
        };
      }, root);
      root.addEventListener('pointerdown', halt, true);
      root.addEventListener('click', swallow, true);
      window.addEventListener('pointerup', free);
      window.addEventListener('pointercancel', free);

      // The page sets root.dataset.paused offscreen / behind the modal: hold every running animation.
      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();
      const ro = new ResizeObserver(() => layout());
      ro.observe(root);
      later(0.8);

      return () => {
        cycle && cycle.kill();
        resume && resume.kill();
        mo.disconnect();
        ro.disconnect();
        root.removeEventListener('pointerdown', halt, true);
        root.removeEventListener('click', swallow, true);
        window.removeEventListener('pointerup', free);
        window.removeEventListener('pointercancel', free);
        dispose();
        ctx.revert();
      };
    },
    prompt: `Build a rotary knob control with GSAP 3 Draggable in rotation mode plus InertiaPlugin. Draw a round knob (radial white-to-grey gradient, soft drop shadow, a blue indicator pill near the top edge) inside an SVG ring: a grey arc from -135 to 135 degrees, a blue value arc on top (stroke-dasharray 100 with pathLength 100, change stroke-dashoffset) and 11 tick marks. Register Draggable and InertiaPlugin and call Draggable.create(knob, { type: 'rotation', bounds: { minRotation: -135, maxRotation: 135 }, inertia: true, edgeResistance: 0.85, snap: { rotation: (r) => Math.round((r + 135) / 27) * 27 - 135 } }). Dragging around the centre turns the knob, and on release the spin keeps going with momentum and lands on the nearest 27 degree tick. In onDrag and onThrowUpdate convert the rotation to 0-100, update a tabular-number readout, set the value arc offset and light every tick up to the current one. Make the knob a focusable role slider with aria-valuenow and arrow keys that gsap.to the next tick, and under prefers-reduced-motion skip the inertia and jump to the tick. Wrap in gsap.context and revert on unmount.`,
  });
  // 4. Range slider with momentum
  const HIST = [22, 34, 48, 60, 70, 82, 90, 100, 92, 80, 70, 64, 52, 44, 36, 30, 24, 18, 14, 10];
  ML.add({
    id: 'gsap-drag-range-thumb',
    cat: 'gsap-drag',
    title: 'Momentum range slider',
    sub: 'Throw the thumb, it settles on a step',
    libs: ['gsap'],
    html: `<header class="top"><p class="k">Max price</p><b class="v">$1,100</b></header>
<div class="hist">${HIST.map((h) => `<i style="height:${h}%"></i>`).join('')}</div>
<div class="rail"><i class="fill"></i><div class="ticks">${HIST.concat([0]).map(() => '<i></i>').join('')}</div><div class="th"><i></i></div></div>
<p class="ends"><span>$0</span><span>$2,000</span></p>
<i class="ghost"></i>`,
    css: `
.d{background:linear-gradient(180deg,#fff 0%,#FAF6F2 100%);isolation:isolate;user-select:none;-webkit-user-select:none}
.d .top{position:absolute;left:10%;right:10%;top:9%;display:flex;justify-content:space-between;align-items:baseline}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-muted)}
.d .v{font:650 24px/1 var(--ml-font);letter-spacing:-.045em;font-variant-numeric:tabular-nums}
.d .hist{position:absolute;left:10%;right:10%;top:26%;height:34%;display:flex;align-items:flex-end;gap:3px}
.d .hist i{flex:1;border-radius:3px 3px 1px 1px;background:var(--ml-bar-2);transition:background-color 220ms var(--ml-ease)}
.d .hist i.on{background:var(--ml-accent-2)}
.d .rail{position:absolute;left:10%;right:10%;top:70%;height:6px;margin-top:-3px;border-radius:99px;background:var(--ml-bar)}
.d .fill{position:absolute;inset:0;border-radius:99px;background:var(--ml-grad);transform-origin:0 50%;transform:scaleX(.55)}
.d .ticks{position:absolute;left:0;right:0;top:12px;height:5px;display:flex;justify-content:space-between}
.d .ticks i{width:1px;height:100%;background:var(--ml-bar)}
.d .th{position:absolute;left:0;top:50%;width:24px;height:24px;margin:-12px 0 0 -12px;border-radius:50%;background:#fff;box-shadow:0 0 0 1px var(--ml-line),var(--ml-shadow-lg);cursor:grab;display:grid;place-items:center}
.d .th::before{content:"";position:absolute;inset:-10px;border-radius:50%}
.d .th i{width:8px;height:8px;border-radius:50%;background:var(--ml-accent);transition:transform 200ms var(--ml-ease)}
.d .th.is-grab i{transform:scale(1.5)}
.d .ends{position:absolute;left:10%;right:10%;bottom:7%;display:flex;justify-content:space-between;font:600 9px/1 var(--ml-mono);color:var(--ml-muted)}
.d .ghost{position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;z-index:60;pointer-events:none;opacity:0;background:rgba(255,255,255,.6);box-shadow:0 0 0 1.5px var(--ml-accent),var(--ml-shadow)}
.d .ghost::after{content:"";position:absolute;inset:7px;border-radius:50%;background:var(--ml-accent);transform:scale(.4);transition:transform 160ms var(--ml-ease)}
.d .ghost.is-down::after{transform:scale(1)}
`,
    run: (root, lib) => {
      const { gsap, Draggable, InertiaPlugin } = lib;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      const q = (s) => root.querySelector(s);
      const qa = (s) => Array.from(root.querySelectorAll(s));
      const ghost = q('.ghost');
      const drags = [];
      let ctx, build, gx, gy, cycle = null, resume = null, down = false, endedAt = 0;
      let layout = () => {};
      let abort = () => {};
      let settle = () => {};
      let dispose = () => {};

      // Point of an element in root coordinates (stays right when the preview scales the stage).
      const rel = (el, fx, fy) => {
        const rr = root.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const k = root.clientWidth / rr.width;
        return { x: (r.left + r.width * fx - rr.left) * k, y: (r.top + r.height * fy - rr.top) * k };
      };
      const tw = (...a) => ctx.add(() => gsap.to(...a));
      // A drag must never reach the stage's click-to-open handler.
      const hold = function () { this.pointerEvent && this.pointerEvent.stopPropagation(); };
      const ended = () => { endedAt = performance.now(); };

      // Ghost cursor: appears, presses, drags, releases. Each step returns a tween (or nothing).
      const gIn = (p) => () => {
        ghost.classList.remove('is-down');
        gsap.set(ghost, { x: p.x - 28, y: p.y + 22, scale: 1 });
        return gsap.to(ghost, { x: p.x, y: p.y, opacity: 1, duration: 0.5, ease: 'power3.out' });
      };
      const gDown = () => {
        ghost.classList.add('is-down');
        return gsap.to(ghost, { scale: 0.82, duration: 0.14, ease: 'power2.out' });
      };
      const gUp = () => {
        ghost.classList.remove('is-down');
        gsap.to(ghost, { scale: 1, opacity: 0, duration: 0.45, ease: 'power2.out' });
      };

      const seq = (steps) => {
        let i = 0, live = null, dead = false;
        const next = () => {
          if (dead) return;
          if (i >= steps.length) { cycle = null; later(1.1); return; }
          live = ctx.add(steps[i++]);
          if (!live || !live.eventCallback) return next();
          const prev = live.eventCallback('onComplete');
          live.eventCallback('onComplete', function () { prev && prev.apply(this, arguments); next(); });
        };
        next();
        return { kill() { dead = true; live && live.kill(); } };
      };
      const later = (s) => {
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(s, begin));
      };
      const begin = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused || down || drags.some((d) => d.isPressed || d.isThrowing)) return later(0.6);
        cycle = seq(build());
      };
      // The visitor takes over: the ghost leaves at once, the card settles where it is.
      const halt = () => {
        down = true;
        cycle && cycle.kill();
        cycle = null;
        resume && resume.kill();
        gsap.killTweensOf(ghost);
        ghost.classList.remove('is-down');
        tw(ghost, { opacity: 0, scale: 1, duration: 0.2 });
        abort();
      };
      // On release, once Draggable has had its turn (a throw it started owns the card), settle anything the
      // interrupted ghost left between snaps.
      const free = () => {
        if (!down) return;
        down = false;
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(0.12, () => {
          if (!drags.some((d) => d.isPressed || d.isThrowing)) settle();
          later(2.4);
        }));
      };
      // A drag that ends outside the draggable can still fire a click on the stage; swallow it.
      const swallow = (e) => { if (performance.now() - endedAt < 450) e.stopPropagation(); };
      const rail = q('.rail');
      const th = q('.th');
      const fill = q('.fill');
      const valEl = q('.v');
      const bars = qa('.hist i');
      const NS = 20, MAXV = 2000;
      let RW = 1, step = 1, cur = -1, nb = -1, drag, qx, qf, k = 0;

      ctx = gsap.context(() => {
        gx = gsap.quickSetter(ghost, 'x', 'px');
        gy = gsap.quickSetter(ghost, 'y', 'px');
        gsap.set(ghost, { x: -40, y: -40, opacity: 0 });
        qx = gsap.quickSetter(th, 'x', 'px');
        qf = gsap.quickSetter(fill, 'scaleX');
        const snapS = (v) => Math.max(0, Math.min(RW, Math.round(v / step) * step));
        // The readout counts through every ten dollars while the thumb travels, then rests on a step.
        const paint = () => {
          const x = gsap.getProperty(th, 'x');
          const f = x / RW;
          qf(f);
          const v = Math.round((f * MAXV) / 10) * 10;
          if (v !== cur) { cur = v; valEl.textContent = '$' + v.toLocaleString('en-US'); }
          const b = Math.max(0, Math.min(NS, Math.floor(x / step + 0.5)));
          if (b !== nb) { nb = b; bars.forEach((e, i) => e.classList.toggle('on', i < b)); }
        };
        layout = () => {
          const w = rail.clientWidth;
          if (!w) return;
          const f = RW > 1 ? gsap.getProperty(th, 'x') / RW : 11 / NS;
          RW = w;
          step = RW / NS;
          qx(f * RW);
          if (drag) { drag.applyBounds({ minX: 0, maxX: RW }); drag.update(); }
          paint();
        };
        layout();
        drag = Draggable.create(th, {
          type: 'x',
          bounds: { minX: 0, maxX: RW },
          inertia: true,
          edgeResistance: 0.9,
          throwResistance: 1500,
          snap: { x: snapS },
          zIndexBoost: false,
          onPress() { th.classList.add('is-grab'); hold.call(this); },
          onRelease() { th.classList.remove('is-grab'); },
          onDrag: paint,
          onThrowUpdate: paint,
          onDragEnd: ended,
        })[0];
        drags.push(drag);

        settle = () => {
          th.classList.remove('is-grab');
          tw(th, { x: snapS(gsap.getProperty(th, 'x')), duration: 0.45, ease: 'power3.out', onUpdate: paint, onComplete: () => drag.update() });
        };
        // Ghost: press the thumb, drag a bit, let go; momentum carries it to the target step.
        build = () => {
          const goals = [16, 5, 18, 8, 13, 3];
          let g = goals[k++ % goals.length];
          const x0 = gsap.getProperty(th, 'x');
          if (Math.abs(g * step - x0) < step * 2) g = g > 10 ? 4 : 17;
          const tgt = g * step;
          const dx = (tgt - x0) * 0.55;
          const dur = 0.55;
          const p = rel(th, 0.5, 0.5);
          const s = { v: 0 };
          return [
            gIn(p),
            () => { th.classList.add('is-grab'); return gDown(); },
            () => gsap.to(s, {
              v: 1, duration: dur, ease: 'power1.in',
              onUpdate() { qx(x0 + dx * s.v); paint(); gx(p.x + dx * s.v); gy(p.y); },
            }),
            () => {
              gUp();
              th.classList.remove('is-grab');
              return gsap.to(th, {
                inertia: { x: { velocity: (2 * dx) / dur, end: tgt, min: 0, max: RW } },
                onUpdate: paint,
                onComplete: () => drag.update(),
              });
            },
          ];
        };
      }, root);
      root.addEventListener('pointerdown', halt, true);
      root.addEventListener('click', swallow, true);
      window.addEventListener('pointerup', free);
      window.addEventListener('pointercancel', free);

      // The page sets root.dataset.paused offscreen / behind the modal: hold every running animation.
      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();
      const ro = new ResizeObserver(() => layout());
      ro.observe(root);
      later(0.8);

      return () => {
        cycle && cycle.kill();
        resume && resume.kill();
        mo.disconnect();
        ro.disconnect();
        root.removeEventListener('pointerdown', halt, true);
        root.removeEventListener('click', swallow, true);
        window.removeEventListener('pointerup', free);
        window.removeEventListener('pointercancel', free);
        dispose();
        ctx.revert();
      };
    },
    prompt: `Build a price range slider whose thumb has momentum, using GSAP 3 Draggable and InertiaPlugin. Layout: a big tabular-number readout at the top right, a 20-bar histogram, a 6px rail with a blue fill and 21 tick marks, and a 24px white thumb with a blue centre dot that grows while pressed. Register Draggable and InertiaPlugin, measure the rail width, set step = railWidth / 20 and call Draggable.create(thumb, { type: 'x', bounds: { minX: 0, maxX: railWidth }, inertia: true, edgeResistance: 0.9, snap: { x: (v) => Math.round(v / step) * step } }). A flick keeps travelling after release and the snap function settles it on a step. In onDrag and onThrowUpdate read gsap.getProperty(thumb, 'x'), scaleX the fill from the left origin, update the value to the nearest 10 dollars so the number counts, and tint the histogram bars the thumb has passed. Extend the thumb hit area with a pseudo-element, keep touch-action pan-y so the page still scrolls, expose role slider with aria-valuenow and arrow keys that move one step with gsap.to, and recalculate on resize with draggable.applyBounds. Wrap in gsap.context and revert on unmount.`,
  });
  // 5. Swipe to dismiss stack
  const CARD_HTML = `<article class="cd"><div class="ph"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="38" r="15"/><path d="M20 100c0-20 13-34 30-34s30 14 30 34z"/></svg><span class="stamp keep">Keep</span><span class="stamp skip">Skip</span></div><div class="tx"><b class="nm"></b><p class="rl"></p><div class="tg"><i></i><i></i></div></div></article>`;
  ML.add({
    id: 'gsap-drag-swipe-stack',
    cat: 'gsap-drag',
    title: 'Swipe to dismiss stack',
    sub: 'Fling cards away, the next one rises',
    libs: ['gsap'],
    html: `<header class="top"><b>Design shortlist</b><span><em class="rv">0</em> reviewed</span></header>
<div class="deck">${CARD_HTML.repeat(4)}</div>
<div class="act"><button class="b-skip" aria-label="Skip"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button><button class="b-keep" aria-label="Keep"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></button></div>
<i class="ghost"></i>`,
    css: `
.d{background:linear-gradient(180deg,#fff 0%,#F1F5FB 100%);isolation:isolate;user-select:none;-webkit-user-select:none}
.d .top{position:absolute;left:8%;right:8%;top:5%;display:flex;justify-content:space-between;align-items:baseline}
.d .top b{font:650 14px/1 var(--ml-font);letter-spacing:-.03em}
.d .top span{font:600 9px/1 var(--ml-mono);letter-spacing:.04em;color:var(--ml-muted)}
.d .top em{font-style:normal;color:var(--ml-accent)}
.d .deck{position:absolute;left:19%;right:19%;top:15%;height:64%}
.d .cd{position:absolute;inset:0;border-radius:16px;background:#fff;box-shadow:var(--ml-shadow-lg);overflow:hidden;cursor:grab;display:flex;flex-direction:column;will-change:transform}
.d .ph{position:relative;flex:1;background:linear-gradient(160deg,#BCD6FF,#EAF2FF);overflow:hidden}
.d .ph.c1{background:linear-gradient(160deg,#FFC2B3,#E4EFFF)}
.d .ph.c2{background:linear-gradient(160deg,#FFF0ED,#F3F8FF)}
.d .ph.c3{background:var(--ml-grad)}
.d .ph svg{position:absolute;left:50%;bottom:-6%;width:68%;transform:translateX(-50%);fill:rgba(255,255,255,.8)}
.d .tx{padding:8px 11px 10px}
.d .nm{display:block;font:650 14px/1.1 var(--ml-font);letter-spacing:-.03em}
.d .rl{margin-top:2px;font:500 10px/1.2 var(--ml-font);color:var(--ml-muted)}
.d .tg{margin-top:6px;display:flex;gap:4px}
.d .tg i{font:600 9px/1 var(--ml-font);font-style:normal;padding:3px 7px;border-radius:99px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .stamp{position:absolute;top:10px;padding:3px 8px;border-radius:7px;font:700 11px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;background:rgba(255,255,255,.9);opacity:0}
.d .keep{left:10px;color:var(--ml-accent);box-shadow:inset 0 0 0 1.5px var(--ml-accent);transform:rotate(-10deg)}
.d .skip{right:10px;color:#E5372D;box-shadow:inset 0 0 0 1.5px #E5372D;transform:rotate(10deg)}
.d .act{position:absolute;left:0;right:0;bottom:4.5%;display:flex;justify-content:center;gap:22px}
.d .act button{width:34px;height:34px;border:0;border-radius:50%;background:#fff;box-shadow:var(--ml-shadow);display:grid;place-items:center;cursor:pointer;transition:transform 90ms var(--ml-ease)}
.d .act button:active{transform:scale(.92)}
.d .act svg{width:16px;height:16px}
.d .b-skip{color:#E5372D}
.d .b-keep{color:var(--ml-accent)}
.d .ghost{position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;z-index:60;pointer-events:none;opacity:0;background:rgba(255,255,255,.6);box-shadow:0 0 0 1.5px var(--ml-accent),var(--ml-shadow)}
.d .ghost::after{content:"";position:absolute;inset:7px;border-radius:50%;background:var(--ml-accent);transform:scale(.4);transition:transform 160ms var(--ml-ease)}
.d .ghost.is-down::after{transform:scale(1)}
`,
    run: (root, lib) => {
      const { gsap, Draggable, InertiaPlugin } = lib;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      const q = (s) => root.querySelector(s);
      const qa = (s) => Array.from(root.querySelectorAll(s));
      const ghost = q('.ghost');
      const drags = [];
      let ctx, build, gx, gy, cycle = null, resume = null, down = false, endedAt = 0;
      let layout = () => {};
      let abort = () => {};
      let settle = () => {};
      let dispose = () => {};

      // Point of an element in root coordinates (stays right when the preview scales the stage).
      const rel = (el, fx, fy) => {
        const rr = root.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const k = root.clientWidth / rr.width;
        return { x: (r.left + r.width * fx - rr.left) * k, y: (r.top + r.height * fy - rr.top) * k };
      };
      const tw = (...a) => ctx.add(() => gsap.to(...a));
      // A drag must never reach the stage's click-to-open handler.
      const hold = function () { this.pointerEvent && this.pointerEvent.stopPropagation(); };
      const ended = () => { endedAt = performance.now(); };

      // Ghost cursor: appears, presses, drags, releases. Each step returns a tween (or nothing).
      const gIn = (p) => () => {
        ghost.classList.remove('is-down');
        gsap.set(ghost, { x: p.x - 28, y: p.y + 22, scale: 1 });
        return gsap.to(ghost, { x: p.x, y: p.y, opacity: 1, duration: 0.5, ease: 'power3.out' });
      };
      const gDown = () => {
        ghost.classList.add('is-down');
        return gsap.to(ghost, { scale: 0.82, duration: 0.14, ease: 'power2.out' });
      };
      const gUp = () => {
        ghost.classList.remove('is-down');
        gsap.to(ghost, { scale: 1, opacity: 0, duration: 0.45, ease: 'power2.out' });
      };

      const seq = (steps) => {
        let i = 0, live = null, dead = false;
        const next = () => {
          if (dead) return;
          if (i >= steps.length) { cycle = null; later(1.1); return; }
          live = ctx.add(steps[i++]);
          if (!live || !live.eventCallback) return next();
          const prev = live.eventCallback('onComplete');
          live.eventCallback('onComplete', function () { prev && prev.apply(this, arguments); next(); });
        };
        next();
        return { kill() { dead = true; live && live.kill(); } };
      };
      const later = (s) => {
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(s, begin));
      };
      const begin = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused || down || drags.some((d) => d.isPressed || d.isThrowing)) return later(0.6);
        cycle = seq(build());
      };
      // The visitor takes over: the ghost leaves at once, the card settles where it is.
      const halt = () => {
        down = true;
        cycle && cycle.kill();
        cycle = null;
        resume && resume.kill();
        gsap.killTweensOf(ghost);
        ghost.classList.remove('is-down');
        tw(ghost, { opacity: 0, scale: 1, duration: 0.2 });
        abort();
      };
      // On release, once Draggable has had its turn (a throw it started owns the card), settle anything the
      // interrupted ghost left between snaps.
      const free = () => {
        if (!down) return;
        down = false;
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(0.12, () => {
          if (!drags.some((d) => d.isPressed || d.isThrowing)) settle();
          later(2.4);
        }));
      };
      // A drag that ends outside the draggable can still fire a click on the stage; swallow it.
      const swallow = (e) => { if (performance.now() - endedAt < 450) e.stopPropagation(); };
      const deck = q('.deck');
      const cards = qa('.cd');
      const rv = q('.rv');
      const P = [
        ['Maya R.', 'Product designer, Lisbon', 'Figma', 'Motion'],
        ['Tomas', 'Frontend engineer, Brno', 'React', 'CSS'],
        ['Priya', 'Brand strategist, Pune', 'Naming', 'Voice'],
        ['Jonas', 'Illustrator, Malmo', 'Vector', 'Print'],
        ['Lena', 'UX researcher, Berlin', 'Surveys', 'Interviews'],
        ['Omar', 'Motion designer, Cairo', 'After Effects', 'GSAP'],
        ['Aiko', 'Art director, Osaka', 'Layout', 'Type'],
        ['Diego', 'Copywriter, Lima', 'Web copy', 'Email'],
      ];
      let order = cards.slice(), pi = 0, reviewed = 0, W = 300, FLY = 280, SLY = [0, 9, 18, 18], k = 0;
      const SC = [1, 0.94, 0.88, 0.88];
      const SO = [1, 1, 1, 0];
      const qx = new Map(), qr = new Map();

      ctx = gsap.context(() => {
        gx = gsap.quickSetter(ghost, 'x', 'px');
        gy = gsap.quickSetter(ghost, 'y', 'px');
        gsap.set(ghost, { x: -40, y: -40, opacity: 0 });
        cards.forEach((c) => { qx.set(c, gsap.quickSetter(c, 'x', 'px')); qr.set(c, gsap.quickSetter(c, 'rotation', 'deg')); });
        const fill = (c) => {
          const p = P[pi % P.length];
          c.querySelector('.nm').textContent = p[0];
          c.querySelector('.rl').textContent = p[1];
          c.querySelectorAll('.tg i').forEach((e, i) => (e.textContent = p[2 + i]));
          c.querySelector('.ph').className = 'ph c' + (pi % 4);
          pi++;
        };
        const tilt = (c) => {
          const x = gsap.getProperty(c, 'x');
          qr.get(c)((x / W) * 24);
          c.querySelector('.keep').style.opacity = Math.max(0, Math.min(1, x / (W * 0.28)));
          c.querySelector('.skip').style.opacity = Math.max(0, Math.min(1, -x / (W * 0.28)));
        };
        const place = (animate) => {
          order.forEach((c, i) => {
            c.style.zIndex = 10 - i;
            c.style.pointerEvents = i ? 'none' : '';
            const to = { y: SLY[i], scale: SC[i], opacity: SO[i] };
            if (animate && i < 3) tw(c, { ...to, duration: 0.6, ease: 'back.out(1.3)' });
            else gsap.set(c, to);
          });
        };
        // The front card goes to the back with a new face; the others rise one slot.
        const dismiss = (c) => {
          order.push(order.shift());
          fill(c);
          gsap.set(c, { x: 0, rotation: 0 });
          tilt(c);
          reviewed++;
          rv.textContent = reviewed;
          place(true);
          drags.forEach((d) => d.update());
        };
        const fling = (c, dir) => gsap.to(c, {
          inertia: { x: { velocity: dir * 1500, end: dir * FLY } },
          onUpdate: () => tilt(c),
          onComplete: () => dismiss(c),
        });
        layout = () => {
          W = root.clientWidth;
          if (!W) return;
          FLY = Math.round(W * 0.95);
          const h = deck.clientHeight;
          SLY = [0, h * 0.065, h * 0.13, h * 0.13];
          place(false);
        };
        cards.forEach(fill);
        layout();
        cards.forEach((c) => {
          drags.push(Draggable.create(c, {
            type: 'x',
            inertia: true,
            minimumMovement: 3,
            throwResistance: 1300,
            zIndexBoost: false,
            snap: { x: (v) => (Math.abs(v) > W * 0.3 ? Math.sign(v) * FLY : 0) },
            onPress: hold,
            onDrag() { tilt(c); },
            onThrowUpdate() { tilt(c); },
            onDragEnd: ended,
            onThrowComplete() { if (Math.abs(gsap.getProperty(c, 'x')) > W * 0.5) dismiss(c); },
          })[0]);
        });
        const onBtn = (dir) => () => { const c = order[0]; if (!down && !gsap.isTweening(c)) ctx.add(() => fling(c, dir)); };
        const bs = q('.b-skip'), bk = q('.b-keep');
        const fs = onBtn(-1), fk = onBtn(1);
        bs.addEventListener('click', fs);
        bk.addEventListener('click', fk);
        dispose = () => { bs.removeEventListener('click', fs); bk.removeEventListener('click', fk); };

        settle = () => {
          const c = order[0];
          tw(c, { x: 0, duration: 0.45, ease: 'power3.out', onUpdate: () => tilt(c) });
        };
        // Ghost: two swipes out (right, left), then a half-hearted drag that springs back.
        build = () => {
          const kind = k++ % 3;
          const dir = kind === 1 ? -1 : 1;
          const cancel = kind === 2;
          const c = order[0];
          const p = rel(c, 0.5, 0.42);
          const dist = W * (cancel ? 0.13 : 0.2);
          const dur = 0.5;
          const s = { v: 0 };
          return [
            gIn(p),
            gDown,
            () => gsap.to(s, {
              v: 1, duration: dur, ease: 'power1.in',
              onUpdate() { const dx = dir * dist * s.v; qx.get(c)(dx); tilt(c); gx(p.x + dx); gy(p.y - 8 * s.v); },
            }),
            () => {
              gUp();
              if (cancel) return gsap.to(c, { x: 0, duration: 0.7, ease: 'back.out(1.6)', onUpdate: () => tilt(c), onComplete: () => drags.forEach((d) => d.update()) });
              return fling(c, dir);
            },
          ];
        };
      }, root);
      root.addEventListener('pointerdown', halt, true);
      root.addEventListener('click', swallow, true);
      window.addEventListener('pointerup', free);
      window.addEventListener('pointercancel', free);

      // The page sets root.dataset.paused offscreen / behind the modal: hold every running animation.
      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();
      const ro = new ResizeObserver(() => layout());
      ro.observe(root);
      later(0.8);

      return () => {
        cycle && cycle.kill();
        resume && resume.kill();
        mo.disconnect();
        ro.disconnect();
        root.removeEventListener('pointerdown', halt, true);
        root.removeEventListener('click', swallow, true);
        window.removeEventListener('pointerup', free);
        window.removeEventListener('pointercancel', free);
        dispose();
        ctx.revert();
      };
    },
    prompt: `Build a swipe-to-dismiss card stack (the Tinder pattern) with GSAP 3 Draggable and InertiaPlugin. Stack 4 absolutely positioned cards: slot 0 at scale 1, slot 1 at 0.94 and 9 percent lower, slot 2 at 0.88, slot 3 hidden. Only the front card takes pointer events. Register Draggable and InertiaPlugin and call Draggable.create(card, { type: 'x', inertia: true, minimumMovement: 3, snap: { x: (v) => Math.abs(v) > width * 0.3 ? Math.sign(v) * width * 0.95 : 0 } }). The snap function sees the projected landing point, so a short fast flick counts as a swipe and a slow half drag springs back to 0. In onDrag and onThrowUpdate set rotation to x / width * 24 degrees and fade a Keep stamp in on the right and a Skip stamp in on the left. In onThrowComplete, if the card left the frame, move it to the back of the array with fresh content, set x and rotation to 0, then gsap.to every card to its new slot with ease back.out(1.3) so the next card rises. Keep touch-action pan-y so the page scrolls, add Keep and Skip buttons that trigger the same fling, announce changes with an aria-live region, and under prefers-reduced-motion fade cards instead of throwing them. Wrap in gsap.context and revert on unmount.`,
  });
  // 6. Sortable list
  const TASKS = [
    ['Write release notes', 'Docs'],
    ['Review pull request', 'Review'],
    ['Fix onboarding copy', 'Copy'],
    ['Update pricing page', 'Build'],
    ['Plan Friday demo', 'Plan'],
  ];
  ML.add({
    id: 'gsap-drag-sortable-list',
    cat: 'gsap-drag',
    title: 'Sortable task list',
    sub: 'Drag a row, the others make room',
    libs: ['gsap'],
    html: `<header class="top"><b>This sprint</b><span>${TASKS.length} tasks</span></header>
<div class="lst">${TASKS.map(([t, g], i) => `<div class="row"><div class="rw"><span class="gr"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="9" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg></span><span class="rk">${i + 1}</span><b>${t}</b><em>${g}</em></div></div>`).join('')}</div>
<i class="ghost"></i>`,
    css: `
.d{background:linear-gradient(180deg,#fff 0%,#FAF6F2 100%);isolation:isolate;user-select:none;-webkit-user-select:none}
.d .top{position:absolute;left:8%;right:8%;top:6%;display:flex;justify-content:space-between;align-items:baseline}
.d .top b{font:650 15px/1 var(--ml-font);letter-spacing:-.03em}
.d .top span{font:600 9px/1 var(--ml-mono);letter-spacing:.04em;color:var(--ml-muted)}
.d .lst{position:absolute;left:7%;right:7%;top:20%;bottom:6%}
.d .row{position:absolute;left:0;right:0;top:0;height:20%;padding:3px 0}
.d .rw{height:100%;display:flex;align-items:center;gap:8px;padding:0 12px 0 4px;border-radius:12px;background:#fff;box-shadow:0 1px 2px rgba(35,15,10,.06),0 2px 8px rgba(35,15,10,.05);transition:transform 240ms var(--ml-ease),box-shadow 240ms var(--ml-ease)}
.d .rw.lift{transform:scale(1.035);box-shadow:var(--ml-shadow-lg)}
.d .gr{flex:none;width:30px;height:100%;display:grid;place-items:center;color:var(--ml-bar);cursor:grab;touch-action:none}
.d .gr svg{width:16px;height:16px}
.d .rw.lift .gr{color:var(--ml-accent)}
.d .rk{flex:none;width:16px;height:16px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font:600 9px/16px var(--ml-mono);text-align:center}
.d .rw b{flex:1;min-width:0;font:600 12px/1.2 var(--ml-font);letter-spacing:-.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .rw em{font:600 9px/1 var(--ml-font);font-style:normal;padding:4px 8px;border-radius:99px;background:var(--ml-surface);color:var(--ml-muted)}
.d .ghost{position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;z-index:60;pointer-events:none;opacity:0;background:rgba(255,255,255,.6);box-shadow:0 0 0 1.5px var(--ml-accent),var(--ml-shadow)}
.d .ghost::after{content:"";position:absolute;inset:7px;border-radius:50%;background:var(--ml-accent);transform:scale(.4);transition:transform 160ms var(--ml-ease)}
.d .ghost.is-down::after{transform:scale(1)}
`,
    run: (root, lib) => {
      const { gsap, Draggable, InertiaPlugin } = lib;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      const q = (s) => root.querySelector(s);
      const qa = (s) => Array.from(root.querySelectorAll(s));
      const ghost = q('.ghost');
      const drags = [];
      let ctx, build, gx, gy, cycle = null, resume = null, down = false, endedAt = 0;
      let layout = () => {};
      let abort = () => {};
      let settle = () => {};
      let dispose = () => {};

      // Point of an element in root coordinates (stays right when the preview scales the stage).
      const rel = (el, fx, fy) => {
        const rr = root.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const k = root.clientWidth / rr.width;
        return { x: (r.left + r.width * fx - rr.left) * k, y: (r.top + r.height * fy - rr.top) * k };
      };
      const tw = (...a) => ctx.add(() => gsap.to(...a));
      // A drag must never reach the stage's click-to-open handler.
      const hold = function () { this.pointerEvent && this.pointerEvent.stopPropagation(); };
      const ended = () => { endedAt = performance.now(); };

      // Ghost cursor: appears, presses, drags, releases. Each step returns a tween (or nothing).
      const gIn = (p) => () => {
        ghost.classList.remove('is-down');
        gsap.set(ghost, { x: p.x - 28, y: p.y + 22, scale: 1 });
        return gsap.to(ghost, { x: p.x, y: p.y, opacity: 1, duration: 0.5, ease: 'power3.out' });
      };
      const gDown = () => {
        ghost.classList.add('is-down');
        return gsap.to(ghost, { scale: 0.82, duration: 0.14, ease: 'power2.out' });
      };
      const gUp = () => {
        ghost.classList.remove('is-down');
        gsap.to(ghost, { scale: 1, opacity: 0, duration: 0.45, ease: 'power2.out' });
      };

      const seq = (steps) => {
        let i = 0, live = null, dead = false;
        const next = () => {
          if (dead) return;
          if (i >= steps.length) { cycle = null; later(1.1); return; }
          live = ctx.add(steps[i++]);
          if (!live || !live.eventCallback) return next();
          const prev = live.eventCallback('onComplete');
          live.eventCallback('onComplete', function () { prev && prev.apply(this, arguments); next(); });
        };
        next();
        return { kill() { dead = true; live && live.kill(); } };
      };
      const later = (s) => {
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(s, begin));
      };
      const begin = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused || down || drags.some((d) => d.isPressed || d.isThrowing)) return later(0.6);
        cycle = seq(build());
      };
      // The visitor takes over: the ghost leaves at once, the card settles where it is.
      const halt = () => {
        down = true;
        cycle && cycle.kill();
        cycle = null;
        resume && resume.kill();
        gsap.killTweensOf(ghost);
        ghost.classList.remove('is-down');
        tw(ghost, { opacity: 0, scale: 1, duration: 0.2 });
        abort();
      };
      // On release, once Draggable has had its turn (a throw it started owns the card), settle anything the
      // interrupted ghost left between snaps.
      const free = () => {
        if (!down) return;
        down = false;
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(0.12, () => {
          if (!drags.some((d) => d.isPressed || d.isThrowing)) settle();
          later(2.4);
        }));
      };
      // A drag that ends outside the draggable can still fire a click on the stage; swallow it.
      const swallow = (e) => { if (performance.now() - endedAt < 450) e.stopPropagation(); };
      const lst = q('.lst');
      const rows = qa('.row');
      let order = rows.slice(), RH = 40, k = 0;
      const qy = new Map();

      ctx = gsap.context(() => {
        gx = gsap.quickSetter(ghost, 'x', 'px');
        gy = gsap.quickSetter(ghost, 'y', 'px');
        gsap.set(ghost, { x: -40, y: -40, opacity: 0 });
        rows.forEach((r) => qy.set(r, gsap.quickSetter(r, 'y', 'px')));
        const ranks = () => order.forEach((r, i) => (r.querySelector('.rk').textContent = i + 1));
        // Reorder when the dragged row crosses a slot midpoint; everyone else glides into place.
        const move = (r) => {
          const y = gsap.getProperty(r, 'y');
          const ni = Math.max(0, Math.min(rows.length - 1, Math.round(y / RH)));
          const oi = order.indexOf(r);
          if (ni === oi) return;
          order.splice(oi, 1);
          order.splice(ni, 0, r);
          order.forEach((o, i) => { if (o !== r) tw(o, { y: i * RH, duration: 0.34, ease: 'power3.out', overwrite: true }); });
          ranks();
        };
        const lift = (r) => { r.style.zIndex = 20; r.firstElementChild.classList.add('lift'); };
        const drop = (r) => {
          r.firstElementChild.classList.remove('lift');
          return tw(r, {
            y: order.indexOf(r) * RH, duration: 0.5, ease: 'back.out(1.5)', overwrite: true,
            onComplete: () => { r.style.zIndex = ''; drags.forEach((d) => d.update()); },
          });
        };
        layout = () => {
          const h = lst.clientHeight;
          if (!h) return;
          RH = h / rows.length;
          rows.forEach((r) => (r.style.height = RH + 'px'));
          order.forEach((r, i) => qy.get(r)(i * RH));
          drags.forEach((d) => { d.applyBounds({ minY: 0, maxY: (rows.length - 1) * RH }); d.update(); });
        };
        layout();
        rows.forEach((r) => {
          drags.push(Draggable.create(r, {
            type: 'y',
            trigger: r.querySelector('.gr'),
            bounds: { minY: 0, maxY: (rows.length - 1) * RH },
            zIndexBoost: false,
            onPress() { lift(r); hold.call(this); },
            onDrag() { move(r); },
            onRelease() { drop(r); },
            onDragEnd: ended,
          })[0]);
        });

        settle = () => {
          const r = rows.find((e) => e.firstElementChild.classList.contains('lift'));
          if (r) drop(r);
        };
        // Ghost: grab a handle, carry the row across other rows, drop it into its new slot.
        build = () => {
          const [a, b] = [[0, 2], [3, 1], [1, 4], [4, 0]][k++ % 4];
          const r = order[a];
          const y0 = a * RH;
          const y1 = b * RH;
          const p = rel(r.querySelector('.gr'), 0.5, 0.5);
          const s = { v: 0 };
          return [
            gIn(p),
            gDown,
            () => {
              lift(r);
              return gsap.to(s, {
                v: 1, duration: 0.9, ease: 'power2.inOut',
                onUpdate() { const y = y0 + (y1 - y0) * s.v; qy.get(r)(y); move(r); gx(p.x); gy(p.y + (y - y0)); },
              });
            },
            () => { gUp(); return drop(r); },
          ];
        };
      }, root);
      root.addEventListener('pointerdown', halt, true);
      root.addEventListener('click', swallow, true);
      window.addEventListener('pointerup', free);
      window.addEventListener('pointercancel', free);

      // The page sets root.dataset.paused offscreen / behind the modal: hold every running animation.
      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();
      const ro = new ResizeObserver(() => layout());
      ro.observe(root);
      later(0.8);

      return () => {
        cycle && cycle.kill();
        resume && resume.kill();
        mo.disconnect();
        ro.disconnect();
        root.removeEventListener('pointerdown', halt, true);
        root.removeEventListener('click', swallow, true);
        window.removeEventListener('pointerup', free);
        window.removeEventListener('pointercancel', free);
        dispose();
        ctx.revert();
      };
    },
    prompt: `Build a sortable list where rows glide out of the way, using GSAP 3 Draggable. Position every row absolutely at top: 0 with a fixed slot height rowH and move it with transform y = index * rowH. Each row has a grip handle, a rank number, a title and a tag pill. Register Draggable and call Draggable.create(row, { type: 'y', trigger: gripHandle, bounds: { minY: 0, maxY: (count - 1) * rowH }, zIndexBoost: false }). In onPress add a lift class to an inner element (scale 1.035 and a larger shadow, animated with CSS) and raise z-index. In onDrag compute newIndex = clamp(round(y / rowH)); when it differs from the row's current index, splice the row in an order array, then gsap.to every other row to index * rowH with duration 0.34, ease power3.out and overwrite true, and renumber the ranks. In onRelease tween the row to its slot with duration 0.5 and ease back.out(1.5), drop the lift class and persist the new order. Using the grip as trigger keeps touch scrolling alive on phones. Also support keyboard reordering with Alt plus arrow keys and an aria-live announcement. Under prefers-reduced-motion use short linear moves. Wrap in gsap.context and revert on unmount.`,
  });
  // 7. Throwable sticker board
  const ICON = (d) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  ML.add({
    id: 'gsap-drag-sticker-board',
    cat: 'gsap-drag',
    title: 'Throwable sticker board',
    sub: 'Toss stickers, they bounce off the walls',
    libs: ['gsap'],
    html: `<div class="board">
  <div class="st s1"><div class="sp">${ICON('<path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>')}</div></div>
  <div class="st s2"><div class="sp">${ICON('<path d="M20 6 9 17l-5-5"/>')}</div></div>
  <div class="st s3"><div class="sp">Shipped</div></div>
  <div class="st s4"><div class="sp">${ICON('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>')}</div></div>
  <div class="st s5"><div class="sp">${ICON('<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>')}</div></div>
</div>
<i class="ghost"></i>`,
    css: `
.d{background:linear-gradient(180deg,#fff 0%,#FAF6F2 100%);isolation:isolate;user-select:none;-webkit-user-select:none}
.d .board{position:absolute;left:5%;right:5%;top:6%;bottom:6%;border-radius:18px;background:radial-gradient(circle,var(--ml-bar) 1px,transparent 1.5px) 0 0/16px 16px,#EEF3FB;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .st{position:absolute;left:0;top:0;width:19%;aspect-ratio:1;cursor:grab;touch-action:none}
.d .s3{width:30%;aspect-ratio:2.3}
.d .sp{width:100%;height:100%;display:grid;place-items:center;border:3px solid #fff;border-radius:22%;box-shadow:0 2px 6px rgba(35,15,10,.2),0 0 0 .5px rgba(35,15,10,.08);transition:transform 260ms var(--ml-ease),box-shadow 260ms var(--ml-ease)}
.d .sp svg{width:46%;height:46%}
.d .st.up .sp{transform:scale(1.14) rotate(0);box-shadow:var(--ml-shadow-lg)}
.d .s1 .sp{background:var(--ml-grad);color:#fff;border-radius:50%;transform:rotate(-8deg)}
.d .s2 .sp{background:#fff;color:var(--ml-accent);transform:rotate(7deg)}
.d .s3 .sp{background:var(--ml-accent-soft);color:var(--ml-accent-ink);border-radius:99px;font:700 11px/1 var(--ml-font);letter-spacing:-.01em;transform:rotate(-5deg)}
.d .s4 .sp{background:#1D1D1F;color:#fff;border-radius:50%;transform:rotate(10deg)}
.d .s5 .sp{background:#DCE9FF;color:var(--ml-accent);transform:rotate(-12deg)}
.d .st.up .sp{transform:scale(1.14)}
.d .ghost{position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;z-index:90;pointer-events:none;opacity:0;background:rgba(255,255,255,.6);box-shadow:0 0 0 1.5px var(--ml-accent),var(--ml-shadow)}
.d .ghost::after{content:"";position:absolute;inset:7px;border-radius:50%;background:var(--ml-accent);transform:scale(.4);transition:transform 160ms var(--ml-ease)}
.d .ghost.is-down::after{transform:scale(1)}
`,
    run: (root, lib) => {
      const { gsap, Draggable, InertiaPlugin } = lib;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      const q = (s) => root.querySelector(s);
      const qa = (s) => Array.from(root.querySelectorAll(s));
      const ghost = q('.ghost');
      const drags = [];
      let ctx, build, gx, gy, cycle = null, resume = null, down = false, endedAt = 0;
      let layout = () => {};
      let abort = () => {};
      let settle = () => {};
      let dispose = () => {};

      // Point of an element in root coordinates (stays right when the preview scales the stage).
      const rel = (el, fx, fy) => {
        const rr = root.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const k = root.clientWidth / rr.width;
        return { x: (r.left + r.width * fx - rr.left) * k, y: (r.top + r.height * fy - rr.top) * k };
      };
      const tw = (...a) => ctx.add(() => gsap.to(...a));
      // A drag must never reach the stage's click-to-open handler.
      const hold = function () { this.pointerEvent && this.pointerEvent.stopPropagation(); };
      const ended = () => { endedAt = performance.now(); };

      // Ghost cursor: appears, presses, drags, releases. Each step returns a tween (or nothing).
      const gIn = (p) => () => {
        ghost.classList.remove('is-down');
        gsap.set(ghost, { x: p.x - 28, y: p.y + 22, scale: 1 });
        return gsap.to(ghost, { x: p.x, y: p.y, opacity: 1, duration: 0.5, ease: 'power3.out' });
      };
      const gDown = () => {
        ghost.classList.add('is-down');
        return gsap.to(ghost, { scale: 0.82, duration: 0.14, ease: 'power2.out' });
      };
      const gUp = () => {
        ghost.classList.remove('is-down');
        gsap.to(ghost, { scale: 1, opacity: 0, duration: 0.45, ease: 'power2.out' });
      };

      const seq = (steps) => {
        let i = 0, live = null, dead = false;
        const next = () => {
          if (dead) return;
          if (i >= steps.length) { cycle = null; later(1.1); return; }
          live = ctx.add(steps[i++]);
          if (!live || !live.eventCallback) return next();
          const prev = live.eventCallback('onComplete');
          live.eventCallback('onComplete', function () { prev && prev.apply(this, arguments); next(); });
        };
        next();
        return { kill() { dead = true; live && live.kill(); } };
      };
      const later = (s) => {
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(s, begin));
      };
      const begin = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused || down || drags.some((d) => d.isPressed || d.isThrowing)) return later(0.6);
        cycle = seq(build());
      };
      // The visitor takes over: the ghost leaves at once, the card settles where it is.
      const halt = () => {
        down = true;
        cycle && cycle.kill();
        cycle = null;
        resume && resume.kill();
        gsap.killTweensOf(ghost);
        ghost.classList.remove('is-down');
        tw(ghost, { opacity: 0, scale: 1, duration: 0.2 });
        abort();
      };
      // On release, once Draggable has had its turn (a throw it started owns the card), settle anything the
      // interrupted ghost left between snaps.
      const free = () => {
        if (!down) return;
        down = false;
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(0.12, () => {
          if (!drags.some((d) => d.isPressed || d.isThrowing)) settle();
          later(2.4);
        }));
      };
      // A drag that ends outside the draggable can still fire a click on the stage; swallow it.
      const swallow = (e) => { if (performance.now() - endedAt < 450) e.stopPropagation(); };
      const board = q('.board');
      const els = qa('.st');
      const FR = [[0.08, 0.12], [0.66, 0.08], [0.36, 0.5], [0.72, 0.58], [0.1, 0.62]];
      const REST = 0.72, FRIC = 2.1;
      let BW = 0, BH = 0, z = 1, k = 0;
      const S = els.map((el) => ({ el, hist: [], w: 0, h: 0, x: 0, y: 0, vx: 0, vy: 0, fly: false }));
      const flying = [];

      ctx = gsap.context(() => {
        gx = gsap.quickSetter(ghost, 'x', 'px');
        gy = gsap.quickSetter(ghost, 'y', 'px');
        gsap.set(ghost, { x: -40, y: -40, opacity: 0 });
        S.forEach((s) => { s.sx = gsap.quickSetter(s.el, 'x', 'px'); s.sy = gsap.quickSetter(s.el, 'y', 'px'); });
        const bounds = (s) => ({ minX: 0, maxX: Math.max(0, BW - s.w), minY: 0, maxY: Math.max(0, BH - s.h) });
        // Own tiny physics for the glide: friction every frame, mirror the velocity at each wall.
        const tick = (t, dms) => {
          if (!flying.length || root.dataset.paused) return;
          const dt = Math.min(dms, 40) / 1000;
          const damp = Math.exp(-FRIC * dt);
          for (let i = flying.length - 1; i >= 0; i--) {
            const s = flying[i];
            s.vx *= damp; s.vy *= damp;
            s.x += s.vx * dt; s.y += s.vy * dt;
            const mx = BW - s.w, my = BH - s.h;
            if (s.x < 0) { s.x = 0; s.vx = Math.abs(s.vx) * REST; } else if (s.x > mx) { s.x = mx; s.vx = -Math.abs(s.vx) * REST; }
            if (s.y < 0) { s.y = 0; s.vy = Math.abs(s.vy) * REST; } else if (s.y > my) { s.y = my; s.vy = -Math.abs(s.vy) * REST; }
            s.sx(s.x); s.sy(s.y);
            if (Math.hypot(s.vx, s.vy) < 14) { s.fly = false; flying.splice(i, 1); drags[S.indexOf(s)].update(); }
          }
        };
        gsap.ticker.add(tick);
        let cur = null;
        const sample = (e) => {
          if (!cur) return;
          cur.hist.push({ t: e.timeStamp, x: e.clientX, y: e.clientY });
          while (cur.hist.length > 2 && e.timeStamp - cur.hist[0].t > 110) cur.hist.shift();
        };
        dispose = () => { gsap.ticker.remove(tick); window.removeEventListener('pointermove', sample); flying.length = 0; };
        const launch = (s, vx, vy) => {
          const m = Math.hypot(vx, vy);
          if (m < 60) return;
          const c = m > 2600 ? 2600 / m : 1;
          s.x = gsap.getProperty(s.el, 'x'); s.y = gsap.getProperty(s.el, 'y');
          s.vx = vx * c; s.vy = vy * c;
          if (!s.fly) { s.fly = true; flying.push(s); }
        };
        const catchIt = (s) => { if (s.fly) { s.fly = false; flying.splice(flying.indexOf(s), 1); } };
        layout = () => {
          BW = board.clientWidth; BH = board.clientHeight;
          if (!BW) return;
          S.forEach((s, i) => {
            s.w = s.el.offsetWidth; s.h = s.el.offsetHeight;
            const b = bounds(s);
            const init = !s.placed;
            s.placed = true;
            const x = init ? FR[i][0] * b.maxX : Math.min(gsap.getProperty(s.el, 'x'), b.maxX);
            const y = init ? FR[i][1] * b.maxY : Math.min(gsap.getProperty(s.el, 'y'), b.maxY);
            s.sx(x); s.sy(y);
            if (drags[i]) { drags[i].applyBounds(b); drags[i].update(); }
          });
        };
        layout();
        S.forEach((s) => {
          drags.push(Draggable.create(s.el, {
            type: 'x,y',
            bounds: bounds(s),
            zIndexBoost: false,
            onPress() {
              catchIt(s);
              s.hist = [];
              cur = s;
              window.addEventListener('pointermove', sample);
              s.el.style.zIndex = ++z;
              s.el.classList.add('up');
              hold.call(this);
            },
            onRelease() {
              window.removeEventListener('pointermove', sample);
              s.el.classList.remove('up');
              // Release velocity from the last ~100ms of pointer moves (event timestamps, so it does not
              // depend on the frame rate); the tracker's value is used when it is larger.
              const a = s.hist[0], b = s.hist[s.hist.length - 1];
              const up = this.pointerEvent && this.pointerEvent.timeStamp ? this.pointerEvent.timeStamp : performance.now();
              const live = b && up - b.t < 90 && b.t - a.t > 8;
              const k = root.clientWidth / root.getBoundingClientRect().width;
              const sx = live ? ((b.x - a.x) / (b.t - a.t)) * 1000 * k : 0;
              const sy = live ? ((b.y - a.y) / (b.t - a.t)) * 1000 * k : 0;
              const tx = InertiaPlugin.getVelocity(s.el, 'x') || 0;
              const ty = InertiaPlugin.getVelocity(s.el, 'y') || 0;
              launch(s, Math.abs(sx) > Math.abs(tx) ? sx : tx, Math.abs(sy) > Math.abs(ty) ? sy : ty);
            },
            onDragEnd: ended,
          })[0]);
        });

        // Ghost: pick a sticker up, drag it a short way, throw it across the board.
        build = () => {
          const T = [[1250, -520], [1150, 640], [620, 1250], [1350, 300], [950, 950]];
          const s = S[k % 5];
          const t = T[(k++ * 2) % 5];
          const b = bounds(s);
          const cx = gsap.getProperty(s.el, 'x'), cy = gsap.getProperty(s.el, 'y');
          // Throw toward the side with more room so the stickers spread out instead of piling up.
          const vx = cx < b.maxX / 2 ? t[0] : -t[0];
          const vy = cy < b.maxY / 2 ? Math.abs(t[1]) : -Math.abs(t[1]);
          const m = Math.hypot(vx, vy);
          const dx = (vx / m) * 56, dy = (vy / m) * 56;
          const x0 = Math.max(Math.abs(dx) + 4, Math.min(b.maxX - Math.abs(dx) - 4, cx));
          const y0 = Math.max(Math.abs(dy) + 4, Math.min(b.maxY - Math.abs(dy) - 4, cy));
          const c = rel(s.el, 0.5, 0.5);
          const g0 = { x: c.x + (x0 - gsap.getProperty(s.el, 'x')), y: c.y + (y0 - gsap.getProperty(s.el, 'y')) };
          const o = { v: 0 };
          return [
            () => { catchIt(s); s.sx(x0); s.sy(y0); s.x = x0; s.y = y0; s.el.style.zIndex = ++z; return gIn(g0)(); },
            () => { s.el.classList.add('up'); return gDown(); },
            () => gsap.to(o, {
              v: 1, duration: 0.45, ease: 'power1.in',
              onUpdate() { s.sx(x0 + dx * o.v); s.sy(y0 + dy * o.v); gx(g0.x + dx * o.v); gy(g0.y + dy * o.v); },
            }),
            () => {
              gUp();
              s.el.classList.remove('up');
              launch(s, vx, vy);
              return gsap.delayedCall(2.4, () => {});
            },
          ];
        };
      }, root);
      root.addEventListener('pointerdown', halt, true);
      root.addEventListener('click', swallow, true);
      window.addEventListener('pointerup', free);
      window.addEventListener('pointercancel', free);

      // The page sets root.dataset.paused offscreen / behind the modal: hold every running animation.
      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();
      const ro = new ResizeObserver(() => layout());
      ro.observe(root);
      later(0.8);

      return () => {
        cycle && cycle.kill();
        resume && resume.kill();
        mo.disconnect();
        ro.disconnect();
        root.removeEventListener('pointerdown', halt, true);
        root.removeEventListener('click', swallow, true);
        window.removeEventListener('pointerup', free);
        window.removeEventListener('pointercancel', free);
        dispose();
        ctx.revert();
      };
    },
    prompt: `Build a sticker board where stickers can be grabbed and thrown, using GSAP 3 Draggable and InertiaPlugin. Put 5 stickers (round, square and pill shapes with a 3px white border, a soft shadow and a slight tilt) absolutely positioned inside a rounded board with a dot-grid background. Register Draggable and InertiaPlugin and call Draggable.create(sticker, { type: 'x,y', bounds: { minX: 0, maxX: boardWidth - stickerWidth, minY: 0, maxY: boardHeight - stickerHeight }, zIndexBoost: false, onPress, onRelease }). In onPress raise z-index above every other sticker with a counter, add a lifted class (scale 1.14, larger shadow) and cancel any glide in progress. In onRelease read the release velocity with InertiaPlugin.getVelocity(el, 'x') and 'y' and start a small physics loop on gsap.ticker.add: each frame multiply the velocity by Math.exp(-2.1 * dt), add velocity * dt to the position, and when a coordinate leaves the board mirror its velocity with a restitution of 0.72, so the sticker bounces and loses energy. Stop below 14 pixels per second, remove the ticker callback on unmount, and cap the speed. Use touch-action none on stickers only, make them focusable with arrow-key nudges, and under prefers-reduced-motion skip the glide. Wrap in gsap.context and revert on unmount.`,
  });
  // 8. Pull to refresh
  ML.add({
    id: 'gsap-drag-pull-refresh',
    cat: 'gsap-drag',
    title: 'Pull to refresh',
    sub: 'Pull the list down, it reloads and springs',
    libs: ['gsap'],
    html: `<header class="top"><b>Inbox</b><span class="upd">Updated 2 min ago</span></header>
<div class="view">
  <div class="ind"><svg class="ring" viewBox="0 0 36 36" aria-hidden="true"><circle class="trk" cx="18" cy="18" r="14" pathLength="100"/><circle class="arc" cx="18" cy="18" r="14" pathLength="100"/></svg><svg class="arw" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"/></svg></div>
  <div class="lst">${[0, 1, 2, 3, 4].map(() => '<div class="msg"><i class="av"></i><div class="mt"><b></b><span></span></div><em></em></div>').join('')}</div>
</div>
<i class="ghost"></i>`,
    css: `
.d{background:#fff;isolation:isolate;user-select:none;-webkit-user-select:none}
.d .top{position:absolute;left:0;right:0;top:0;height:15%;padding:0 6%;display:flex;justify-content:space-between;align-items:center;background:#fff;z-index:3;box-shadow:0 1px 0 var(--ml-line)}
.d .top b{font:650 16px/1 var(--ml-font);letter-spacing:-.035em}
.d .top span{font:600 9px/1 var(--ml-mono);letter-spacing:.03em;color:var(--ml-muted)}
.d .view{position:absolute;left:0;right:0;top:15%;bottom:0;overflow:hidden;background:var(--ml-surface)}
.d .ind{position:absolute;left:50%;top:9px;width:30px;height:30px;margin-left:-15px;border-radius:50%;background:#fff;box-shadow:var(--ml-shadow);display:grid;place-items:center;opacity:0}
.d .ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.d .ring circle{fill:none;stroke-width:2.6;stroke-linecap:round}
.d .trk{stroke:var(--ml-bar-2)}
.d .arc{stroke:var(--ml-accent);stroke-dasharray:100;stroke-dashoffset:100}
.d .arw{position:relative;width:13px;height:13px;color:var(--ml-accent)}
.d .lst{position:absolute;inset:0;background:#fff;cursor:grab;will-change:transform}
.d .msg{height:20%;display:flex;align-items:center;gap:10px;padding:0 6%;border-bottom:1px solid var(--ml-line)}
.d .av{flex:none;width:28px;height:28px;border-radius:50%;background:var(--ml-accent-soft)}
.d .msg:nth-child(2n) .av{background:var(--ml-bar)}
.d .mt{flex:1;min-width:0}
.d .mt b{display:block;font:600 12px/1.2 var(--ml-font);letter-spacing:-.02em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .mt span{display:block;margin-top:2px;font:500 10px/1.2 var(--ml-font);color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .msg em{font:600 9px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .msg.new em{padding:3px 7px;border-radius:99px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .ghost{position:absolute;left:-12px;top:-12px;width:24px;height:24px;border-radius:50%;z-index:60;pointer-events:none;opacity:0;background:rgba(255,255,255,.6);box-shadow:0 0 0 1.5px var(--ml-accent),var(--ml-shadow)}
.d .ghost::after{content:"";position:absolute;inset:7px;border-radius:50%;background:var(--ml-accent);transform:scale(.4);transition:transform 160ms var(--ml-ease)}
.d .ghost.is-down::after{transform:scale(1)}
`,
    run: (root, lib) => {
      const { gsap, Draggable, InertiaPlugin } = lib;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      const q = (s) => root.querySelector(s);
      const qa = (s) => Array.from(root.querySelectorAll(s));
      const ghost = q('.ghost');
      const drags = [];
      let ctx, build, gx, gy, cycle = null, resume = null, down = false, endedAt = 0;
      let layout = () => {};
      let abort = () => {};
      let settle = () => {};
      let dispose = () => {};

      // Point of an element in root coordinates (stays right when the preview scales the stage).
      const rel = (el, fx, fy) => {
        const rr = root.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const k = root.clientWidth / rr.width;
        return { x: (r.left + r.width * fx - rr.left) * k, y: (r.top + r.height * fy - rr.top) * k };
      };
      const tw = (...a) => ctx.add(() => gsap.to(...a));
      // A drag must never reach the stage's click-to-open handler.
      const hold = function () { this.pointerEvent && this.pointerEvent.stopPropagation(); };
      const ended = () => { endedAt = performance.now(); };

      // Ghost cursor: appears, presses, drags, releases. Each step returns a tween (or nothing).
      const gIn = (p) => () => {
        ghost.classList.remove('is-down');
        gsap.set(ghost, { x: p.x - 28, y: p.y + 22, scale: 1 });
        return gsap.to(ghost, { x: p.x, y: p.y, opacity: 1, duration: 0.5, ease: 'power3.out' });
      };
      const gDown = () => {
        ghost.classList.add('is-down');
        return gsap.to(ghost, { scale: 0.82, duration: 0.14, ease: 'power2.out' });
      };
      const gUp = () => {
        ghost.classList.remove('is-down');
        gsap.to(ghost, { scale: 1, opacity: 0, duration: 0.45, ease: 'power2.out' });
      };

      const seq = (steps) => {
        let i = 0, live = null, dead = false;
        const next = () => {
          if (dead) return;
          if (i >= steps.length) { cycle = null; later(1.1); return; }
          live = ctx.add(steps[i++]);
          if (!live || !live.eventCallback) return next();
          const prev = live.eventCallback('onComplete');
          live.eventCallback('onComplete', function () { prev && prev.apply(this, arguments); next(); });
        };
        next();
        return { kill() { dead = true; live && live.kill(); } };
      };
      const later = (s) => {
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(s, begin));
      };
      const begin = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused || down || drags.some((d) => d.isPressed || d.isThrowing)) return later(0.6);
        cycle = seq(build());
      };
      // The visitor takes over: the ghost leaves at once, the card settles where it is.
      const halt = () => {
        down = true;
        cycle && cycle.kill();
        cycle = null;
        resume && resume.kill();
        gsap.killTweensOf(ghost);
        ghost.classList.remove('is-down');
        tw(ghost, { opacity: 0, scale: 1, duration: 0.2 });
        abort();
      };
      // On release, once Draggable has had its turn (a throw it started owns the card), settle anything the
      // interrupted ghost left between snaps.
      const free = () => {
        if (!down) return;
        down = false;
        resume && resume.kill();
        resume = ctx.add(() => gsap.delayedCall(0.12, () => {
          if (!drags.some((d) => d.isPressed || d.isThrowing)) settle();
          later(2.4);
        }));
      };
      // A drag that ends outside the draggable can still fire a click on the stage; swallow it.
      const swallow = (e) => { if (performance.now() - endedAt < 450) e.stopPropagation(); };
      const lst = q('.lst');
      const ind = q('.ind');
      const ring = q('.ring');
      const arc = q('.arc');
      const arw = q('.arw');
      const upd = q('.upd');
      const rows = qa('.msg');
      const DATA = [
        [['Maya R.', 'Moodboard is ready for review', '9:41'], ['Tomas', 'Re: pricing page copy', '9:12'], ['Priya', 'Invoice 0042 was paid', '8:50'], ['Jonas', 'New icons exported', 'Mon'], ['Lena', 'Interview notes attached', 'Mon']],
        [['Omar', 'Rough cut v3 is up', 'Now'], ['Maya R.', 'Moodboard is ready for review', '9:41'], ['Tomas', 'Re: pricing page copy', '9:12'], ['Priya', 'Invoice 0042 was paid', '8:50'], ['Jonas', 'New icons exported', 'Mon']],
        [['Aiko', 'Can we move the sync to 3 pm?', 'Now'], ['Omar', 'Rough cut v3 is up', '9:44'], ['Maya R.', 'Moodboard is ready for review', '9:41'], ['Tomas', 'Re: pricing page copy', '9:12'], ['Priya', 'Invoice 0042 was paid', '8:50']],
      ];
      let THR = 56, busy = false, set = 0, rt = null, drag, qy, qo, qa2, k = 0;

      ctx = gsap.context(() => {
        gx = gsap.quickSetter(ghost, 'x', 'px');
        gy = gsap.quickSetter(ghost, 'y', 'px');
        gsap.set(ghost, { x: -40, y: -40, opacity: 0 });
        qy = gsap.quickSetter(lst, 'y', 'px');
        qo = gsap.quickSetter(ind, 'opacity');
        qa2 = gsap.quickSetter(arw, 'rotation', 'deg');
        const fill = () => {
          DATA[set].forEach((d, i) => {
            const r = rows[i];
            r.querySelector('b').textContent = d[0];
            r.querySelector('span').textContent = d[1];
            r.querySelector('em').textContent = i === 0 && set ? 'New' : d[2];
            r.classList.toggle('new', i === 0 && set > 0);
          });
        };
        // Progress: the ring fills with the pull and the arrow turns to point up once it is far enough.
        const prog = () => {
          const y = gsap.getProperty(lst, 'y');
          const f = Math.max(0, Math.min(1, y / THR));
          if (!busy) arc.style.strokeDashoffset = String(100 - f * 100);
          qo(Math.min(1, y / (THR * 0.45)));
          qa2(f * 180);
        };
        const pullEnd = () => {
          const y = gsap.getProperty(lst, 'y');
          if (busy) return null;
          if (y < THR) return tw(lst, { y: 0, duration: 0.6, ease: 'power4.out', onUpdate: prog, onComplete: () => drag.update() });
          busy = true;
          rt = ctx.add(() => gsap.timeline({ onComplete: () => { busy = false; rt = null; drag.update(); } })
            .to(lst, { y: THR, duration: 0.3, ease: 'power3.out', onUpdate: prog })
            .to(arw, { opacity: 0, duration: 0.15 }, '<')
            .to(arc, { strokeDashoffset: 28, duration: 0.15 }, '<')
            .to(ring, { rotation: 630, duration: 0.9, ease: 'power2.inOut', transformOrigin: '50% 50%' }, '>')
            .call(() => {
              set = (set + 1) % DATA.length;
              fill();
              upd.textContent = 'Updated just now';
              ctx.add(() => gsap.fromTo(rows, { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power3.out' }));
            }, null, '>-0.15')
            .to(lst, { y: 0, duration: 0.7, ease: 'power4.out', onUpdate: prog }, '>0.1')
            .set([ring, arc, arw], { clearProps: 'all' }, '>'));
          return rt;
        };
        layout = () => {
          const h = root.clientHeight;
          if (!h) return;
          THR = Math.round(h * 0.24);
          if (drag) { drag.applyBounds({ minY: 0, maxY: THR * 1.9 }); drag.update(); }
        };
        fill();
        layout();
        drag = Draggable.create(lst, {
          type: 'y',
          bounds: { minY: 0, maxY: THR * 1.9 },
          dragResistance: 0.3,
          edgeResistance: 0.8,
          zIndexBoost: false,
          onPress() { if (rt) { rt.kill(); rt = null; busy = false; gsap.set([ring, arc, arw], { clearProps: 'all' }); } hold.call(this); },
          onDrag: prog,
          onRelease: pullEnd,
          onDragEnd: ended,
        })[0];
        drags.push(drag);

        abort = () => {
          if (rt) { rt.kill(); rt = null; busy = false; gsap.set([ring, arc, arw], { clearProps: 'all' }); }
        };
        settle = () => {
          if (!busy && gsap.getProperty(lst, 'y') > 0.5) tw(lst, { y: 0, duration: 0.5, ease: 'power3.out', onUpdate: prog, onComplete: () => drag.update() });
        };
        // Ghost: pull the list past the threshold, let go, it refreshes and springs back.
        build = () => {
          const p = rel(lst, 0.5, 0.16);
          const pull = THR * 1.8;
          const s = { v: 0 };
          return [
            gIn(p),
            gDown,
            () => gsap.to(s, {
              v: 1, duration: 0.9, ease: 'power2.out',
              onUpdate() { const d = pull * s.v; qy(d * 0.7); prog(); gx(p.x); gy(p.y + d); },
            }),
            () => { gUp(); return pullEnd(); },
          ];
        };
      }, root);
      root.addEventListener('pointerdown', halt, true);
      root.addEventListener('click', swallow, true);
      window.addEventListener('pointerup', free);
      window.addEventListener('pointercancel', free);

      // The page sets root.dataset.paused offscreen / behind the modal: hold every running animation.
      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();
      const ro = new ResizeObserver(() => layout());
      ro.observe(root);
      later(0.8);

      return () => {
        cycle && cycle.kill();
        resume && resume.kill();
        mo.disconnect();
        ro.disconnect();
        root.removeEventListener('pointerdown', halt, true);
        root.removeEventListener('click', swallow, true);
        window.removeEventListener('pointerup', free);
        window.removeEventListener('pointercancel', free);
        dispose();
        ctx.revert();
      };
    },
    prompt: `Build a pull-to-refresh list with GSAP 3 Draggable. A scrollless list panel sits over a light grey view; behind it, at the top, a 30px round indicator holds a progress ring and a down arrow. Register Draggable and call Draggable.create(list, { type: 'y', bounds: { minY: 0, maxY: threshold * 1.9 }, dragResistance: 0.3, edgeResistance: 0.8, inertia: false }) with threshold around 56px. In onDrag read the list y, set the ring stroke-dashoffset from 100 to 0 (pathLength 100), fade the indicator in over the first 45 percent of the pull and rotate the arrow up to 180 degrees. In onRelease, if y is below the threshold tween back to 0 with ease power4.out. Otherwise run one gsap.timeline: hold the list at the threshold, fade the arrow out, turn the ring into a three-quarter arc and rotate it 630 degrees over 0.9s with power2.inOut, swap in the new rows with a 0.05 stagger, then spring the list back to 0 with power4.out. Guard against double refreshes with a busy flag, announce the update in an aria-live region, and offer a Refresh button for keyboard users. Under prefers-reduced-motion skip the spin. Wrap in gsap.context and revert on unmount.`,
  });
})();
