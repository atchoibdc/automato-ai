// Cursor and pointer effects. Every demo shows a simulated pointer on an autoplay path; when the
// visitor's real pointer is inside the stage the effect follows it and the simulated one hides.
(() => {
const FK = `<svg class="fk" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l14 7.5-6 1.8-2.2 6.2z" fill="#1D1D1F" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
const FKC = `.d .fk{position:absolute;left:0;top:0;width:20px;height:20px;margin:-2.5px 0 0 -4px;pointer-events:none;z-index:50;filter:drop-shadow(0 1px 2px rgba(35,15,10,.25));transition:opacity .2s ease}
.d.real .fk{opacity:0}`;
const S = `.d{background:var(--ml-surface)}`;
const NOTE = ` Plain HTML, CSS and JS, no libraries. Enable it only for fine pointers: wrap the setup in matchMedia('(pointer: fine)') so touch devices keep their normal behavior, keep every control reachable by keyboard with a visible focus-visible outline, and under prefers-reduced-motion switch the effect off or snap it with no easing.`;
const SC = (i) => {
  const p = [['#FFDCD6', '#F3F8FF', '#FFA88F', '#FF7043'], ['#FFF2ED', '#FFFFFF', '#A9C9F7', '#FF5442'], ['#A8CBFF', '#E9F2FF', '#FFA185', '#FF5E4D'], ['#CCE2FF', '#F6F9FF', '#9CC0F2', '#FF7A59']][i % 4];
  const k = 'c' + (i % 4);
  return '<svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="' + k + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + p[0] + '"/><stop offset="1" stop-color="' + p[1] + '"/></linearGradient></defs><rect width="120" height="90" fill="url(#' + k + ')"/><circle cx="' + (30 + i * 22) + '" cy="28" r="10" fill="#fff" opacity=".95"/><path d="M0 62Q30 42 60 58T120 50V90H0Z" fill="' + p[2] + '"/><path d="M0 78Q40 62 80 76T120 70V90H0Z" fill="' + p[3] + '"/></svg>';
};
// The run bodies below each repeat the same small pointer setup on purpose: run must be self-contained.

ML.add({
  id: 'cursor-follower',
  cat: 'cursor',
  title: 'Spring follower',
  sub: 'A ring trails the dot with spring lag',
  html: `<div class="hero"><b>Design that follows you</b><span>Move your pointer around</span><button class="cta" type="button">Explore work</button></div><i class="ring"></i><i class="dot"></i>`,
  css: S + `
.d{display:grid;place-items:center;cursor:none}
.d .hero{display:grid;gap:8px;justify-items:center;text-align:center}
.d .hero b{font:600 20px/1.1 var(--ml-font);letter-spacing:-.04em}
.d .hero span{font:500 12px/1 var(--ml-font);color:var(--ml-muted)}
.d .cta{margin-top:8px;appearance:none;border:0;cursor:none;padding:10px 18px;border-radius:999px;background:var(--ml-ink);color:#fff;font:600 12px/1 var(--ml-font)}
.d .ring{position:absolute;left:0;top:0;width:38px;height:38px;margin:-19px 0 0 -19px;border-radius:50%;border:1.5px solid var(--ml-accent);pointer-events:none;transition:background .3s ease,border-color .3s ease}
.d .ring.big{background:var(--ml-accent-soft)}
.d .dot{position:absolute;left:0;top:0;width:8px;height:8px;margin:-4px 0 0 -4px;border-radius:50%;background:var(--ml-accent);pointer-events:none}
`,
  run: (root) => {
    const ring = root.querySelector('.ring');
    const dot = root.querySelector('.dot');
    const cta = root.querySelector('.cta');
    const st = { x: 0, y: 0, tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    root.addEventListener('pointerenter', (e) => { st.real = true; root.classList.add('real'); pt(e); st.x = st.tx; st.y = st.ty; });
    root.addEventListener('pointerleave', () => { st.real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', pt);
    const sp = { x: 0, y: 0, vx: 0, vy: 0, s: 1 };
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        st.tx = w * (0.5 + 0.36 * Math.sin(t * 0.0011));
        st.ty = h * (0.5 + 0.3 * Math.sin(t * 0.0017 + 1));
      }
      const k = st.real ? 1 : 0.2;
      st.x += (st.tx - st.x) * k;
      st.y += (st.ty - st.y) * k;
      sp.vx += (st.x - sp.x) * 0.1;
      sp.vy += (st.y - sp.y) * 0.1;
      sp.vx *= 0.78;
      sp.vy *= 0.78;
      sp.x += sp.vx;
      sp.y += sp.vy;
      const r = cta.getBoundingClientRect();
      const b = root.getBoundingClientRect();
      const over = st.x > r.left - b.left && st.x < r.right - b.left && st.y > r.top - b.top && st.y < r.bottom - b.top;
      sp.s += ((over ? 1.7 : 1) - sp.s) * 0.18;
      ring.classList.toggle('big', over);
      ring.style.transform = 'translate(' + sp.x.toFixed(1) + 'px,' + sp.y.toFixed(1) + 'px) scale(' + sp.s.toFixed(3) + ')';
      dot.style.transform = 'translate(' + st.x.toFixed(1) + 'px,' + st.y.toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a custom cursor made of a small dot and a larger ring. Hide the native cursor on the page (cursor: none) and add two fixed-position elements with pointer-events: none. The dot is 8px, your accent color, and sits exactly on the pointer: set its transform from pointermove directly with no easing so it never feels laggy. The ring is 38px with a 1.5px accent border and trails behind with spring physics from a requestAnimationFrame loop: velocity += (pointer - ring) * 0.1, velocity *= 0.78, ring += velocity, so it overshoots slightly and settles. Apply every position with transform: translate(x, y) only, never left or top. When the pointer is over an interactive element (links, buttons, [data-cursor]) scale the ring to 1.7 and fill it with a soft accent tint, easing the scale with scale += (target - scale) * 0.18. Hide both elements until the first pointermove and when the pointer leaves the window. Restore the native cursor inside text inputs. Keep keyboard focus outlines untouched.` + NOTE,
});

ML.add({
  id: 'cursor-blend',
  cat: 'cursor',
  title: 'Mask cursor',
  sub: 'A blue disc flips the letters to white',
  html: `<div class="ly base"><div class="tx"><b>Make it</b><b>move.</b><span>Hover the headline</span></div></div><div class="ly top" aria-hidden="true"><div class="tx"><b>Make it</b><b>move.</b><span>Hover the headline</span></div></div>`,
  css: S + `
.d{background:var(--ml-bg);cursor:none}
.d .ly{position:absolute;inset:0;pointer-events:none}
.d .tx{position:absolute;inset:0;display:grid;align-content:center;justify-content:center;gap:0;padding-left:2%}
.d .tx b{font:700 52px/.98 var(--ml-font);letter-spacing:-.06em;color:var(--ml-ink)}
.d .tx span{margin-top:12px;font:500 12px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .top{background:var(--ml-accent);clip-path:circle(0px at -200px -200px);will-change:clip-path}
.d .top .tx b,.d .top .tx span{color:#fff}
`,
  run: (root) => {
    const top = root.querySelector('.top');
    const st = { tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    const p = { x: 0, y: 0 };
    root.addEventListener('pointerenter', (e) => { st.real = true; pt(e); });
    root.addEventListener('pointerleave', () => { st.real = false; });
    root.addEventListener('pointermove', pt);
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        st.tx = w * (0.5 + 0.3 * Math.sin(t * 0.0009));
        st.ty = h * (0.46 + 0.16 * Math.sin(t * 0.0014 + 1));
      }
      p.x += (st.tx - p.x) * 0.14;
      p.y += (st.ty - p.y) * 0.14;
      top.style.clipPath = 'circle(45px at ' + p.x.toFixed(1) + 'px ' + p.y.toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a mask cursor: a blue disc that turns the letters beneath it white. Do not use mix-blend-mode. Stack two identical copies of a big headline (48-120px, weight 700, tight tracking) in the same container, both position: absolute; inset: 0 with the same font, size and flex or grid centering so every letter lines up exactly. The bottom copy is in your ink color on a light page. The top copy sits on a solid accent-colored background with white text, is aria-hidden="true", has pointer-events: none, and is clipped with clip-path: circle(45px at X Y) so only a roughly 90px disc of it shows. Move X and Y from a requestAnimationFrame loop that eases toward the pointer (x += (pointerX - x) * 0.14) and write the value with element.style.clipPath. Start the circle at 0px so nothing shows until the pointer enters, and let it grow to 45px with a spring on enter. Hide the native cursor over the headline only, and grow the disc to about 70px radius over links. Keep real text in the bottom layer for accessibility and SEO.` + NOTE,
});

ML.add({
  id: 'cursor-trail',
  cat: 'cursor',
  title: 'Dot trail',
  sub: 'A fading chain of dots follows the path',
  html: `<div class="gr"></div>${Array.from({ length: 14 }, (_, i) => `<i class="td" style="--i:${i}"></i>`).join('')}${FK}`,
  css: S + FKC + `
.d .gr{position:absolute;inset:0;background-image:radial-gradient(var(--ml-bar) 1px,transparent 1.3px);background-size:18px 18px;opacity:.9}
.d .td{position:absolute;left:0;top:0;width:calc(14px - var(--i) * .8px);height:calc(14px - var(--i) * .8px);margin:calc(var(--i) * .4px - 7px) 0 0 calc(var(--i) * .4px - 7px);border-radius:50%;background:var(--ml-accent);opacity:calc(1 - var(--i) * .07);pointer-events:none;will-change:transform}
`,
  run: (root) => {
    const dots = [...root.querySelectorAll('.td')];
    const fk = root.querySelector('.fk');
    const st = { x: 0, y: 0, tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    root.addEventListener('pointerenter', (e) => { st.real = true; root.classList.add('real'); pt(e); st.x = st.tx; st.y = st.ty; });
    root.addEventListener('pointerleave', () => { st.real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', pt);
    const pos = dots.map(() => ({ x: 0, y: 0 }));
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        st.tx = w * (0.5 + 0.36 * Math.sin(t * 0.0016));
        st.ty = h * (0.5 + 0.3 * Math.sin(t * 0.0032));
      }
      const k = st.real ? 1 : 0.25;
      st.x += (st.tx - st.x) * k;
      st.y += (st.ty - st.y) * k;
      pos[0].x = st.x;
      pos[0].y = st.y;
      for (let i = 1; i < pos.length; i++) {
        pos[i].x += (pos[i - 1].x - pos[i].x) * 0.34;
        pos[i].y += (pos[i - 1].y - pos[i].y) * 0.34;
      }
      dots.forEach((d, i) => { d.style.transform = 'translate(' + pos[i].x.toFixed(1) + 'px,' + pos[i].y.toFixed(1) + 'px)'; });
      fk.style.transform = 'translate(' + st.x.toFixed(1) + 'px,' + st.y.toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a cursor trail made of a chain of fading dots. Create 14 absolutely or fixed positioned dots with pointer-events: none, each smaller and fainter than the one before (14px down to about 4px, opacity falling about 7 percent per dot) in your accent color. In a requestAnimationFrame loop set the first dot to the pointer position and move every following dot toward the one in front of it with pos[i] += (pos[i - 1] - pos[i]) * 0.34, so the chain stretches into a smooth tail when you move fast and collapses into a single dot when you stop. Apply positions with transform: translate(x, y) only and will-change: transform. Do not create or destroy elements per mouse move; reuse the fixed pool. Keep the native cursor visible (this is a flourish on top of it), skip the effect on touch devices and under prefers-reduced-motion, and stop the loop while the tab is hidden or the pointer has been still for a couple of seconds so it does not burn battery.` + NOTE,
});

ML.add({
  id: 'cursor-magnetic',
  cat: 'cursor',
  title: 'Magnetic menu items',
  sub: 'Pills lean toward the passing cursor',
  html: `<div class="mn">${['Work', 'Studio', 'Journal'].map((n) => `<button class="mg" type="button"><span>${n}</span></button>`).join('')}</div>${FK}`,
  css: S + FKC + `
.d{display:grid;place-items:center}
.d .mn{display:grid;gap:12px;justify-items:center}
.d .mg{appearance:none;border:0;cursor:pointer;padding:12px 30px;border-radius:999px;background:var(--ml-bg);box-shadow:var(--ml-shadow);color:var(--ml-ink);font:600 16px/1 var(--ml-font);letter-spacing:-.02em;will-change:transform;transition:background .3s ease,color .3s ease,box-shadow .3s ease}
.d .mg span{display:block;will-change:transform}
.d .mg.on{background:var(--ml-accent);color:#fff;box-shadow:0 8px 22px rgba(255,68,51,.28)}
.d .mg:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const bt = [...root.querySelectorAll('.mg')];
    const lb = bt.map((b) => b.firstElementChild);
    const fk = root.querySelector('.fk');
    const st = { x: 0, y: 0, tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    root.addEventListener('pointerenter', (e) => { st.real = true; root.classList.add('real'); pt(e); st.x = st.tx; st.y = st.ty; });
    root.addEventListener('pointerleave', () => { st.real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', pt);
    const s = bt.map(() => ({ x: 0, y: 0, vx: 0, vy: 0 }));
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        st.tx = w * (0.5 + 0.34 * Math.sin(t * 0.0013 + 2));
        st.ty = h * (0.5 + 0.38 * Math.sin(t * 0.0009));
      }
      const k = st.real ? 1 : 0.2;
      st.x += (st.tx - st.x) * k;
      st.y += (st.ty - st.y) * k;
      const b0 = root.getBoundingClientRect();
      bt.forEach((b, i) => {
        const r = b.getBoundingClientRect();
        const cx = r.left - b0.left + r.width / 2 - s[i].x;
        const cy = r.top - b0.top + r.height / 2 - s[i].y;
        const dx = st.x - cx;
        const dy = st.y - cy;
        const d = Math.hypot(dx, dy);
        const R = 84;
        const pull = d < R ? 1 - d / R : 0;
        const tx = dx * 0.4 * pull;
        const ty = dy * 0.4 * pull;
        s[i].vx += (tx - s[i].x) * 0.14;
        s[i].vy += (ty - s[i].y) * 0.14;
        s[i].vx *= 0.76;
        s[i].vy *= 0.76;
        s[i].x += s[i].vx;
        s[i].y += s[i].vy;
        b.style.transform = 'translate(' + s[i].x.toFixed(2) + 'px,' + s[i].y.toFixed(2) + 'px) scale(' + (1 + pull * 0.08).toFixed(3) + ')';
        lb[i].style.transform = 'translate(' + (s[i].x * 0.4).toFixed(2) + 'px,' + (s[i].y * 0.4).toFixed(2) + 'px)';
        b.classList.toggle('on', pull > 0.45);
      });
      fk.style.transform = 'translate(' + st.x.toFixed(1) + 'px,' + st.y.toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build magnetic navigation items: pill buttons that lean toward the cursor as it passes near them. For each item, on every animation frame measure its rest center (getBoundingClientRect minus its current offset), compute the vector to the pointer, and when the distance is under a radius of about 84px set pull = 1 - distance / radius. The target offset is the vector times 0.4 times pull, and the item chases it with a light spring (velocity += (target - position) * 0.14, velocity *= 0.76) so it overshoots slightly and settles. Also scale the item by 1 + pull * 0.08, move the inner label about 40 percent of the item's offset so the text trails the pill, and switch to a filled accent state once pull passes 0.45. Apply transform: translate(x, y) scale(s) only, with will-change: transform. When the pointer leaves the radius the target returns to zero and the spring brings it home. Disable on touch and under prefers-reduced-motion, keep :focus-visible outlines, and never move the hit area so far that neighbouring items overlap.` + NOTE,
});

ML.add({
  id: 'cursor-label',
  cat: 'cursor',
  title: 'Cursor label',
  sub: 'The cursor grows into a View pill',
  html: `<div class="gd">${[0, 1, 2, 3].map((i) => `<div class="cd"><div class="im">${SC(i)}</div><span class="nm">${['Atlas', 'Harbor', 'Fernhill', 'Quill'][i]}</span></div>`).join('')}</div><div class="cl"><i class="dt"></i><span class="pl">View <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg></span></div>`,
  css: S + `
.d{cursor:none}
.d .gd{position:absolute;inset:14px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr;gap:9px}
.d .cd{position:relative;border-radius:12px;overflow:hidden;box-shadow:var(--ml-shadow)}
.d .im{position:absolute;inset:0}
.d .im svg{width:100%;height:100%;display:block}
.d .nm{position:absolute;left:9px;bottom:8px;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.9);font:600 10px/1 var(--ml-font)}
.d .cl{position:absolute;left:0;top:0;pointer-events:none;z-index:20;will-change:transform}
.d .dt{position:absolute;left:-5px;top:-5px;width:10px;height:10px;border-radius:50%;background:var(--ml-accent);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease}
.d .pl{position:absolute;left:-30px;top:-15px;width:60px;height:30px;display:flex;align-items:center;justify-content:center;gap:4px;border-radius:999px;background:var(--ml-accent);color:#fff;font:600 11px/1 var(--ml-font);box-shadow:0 8px 22px rgba(255,68,51,.3);transform:scale(.2);opacity:0;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease}
.d .pl svg{width:11px;height:11px}
.d .cl.on .pl{transform:scale(1);opacity:1}
.d .cl.on .dt{transform:scale(0);opacity:0}
`,
  run: (root) => {
    const cl = root.querySelector('.cl');
    const cds = [...root.querySelectorAll('.cd')];
    const st = { x: 0, y: 0, tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    root.addEventListener('pointerenter', (e) => { st.real = true; root.classList.add('real'); pt(e); st.x = st.tx; st.y = st.ty; });
    root.addEventListener('pointerleave', () => { st.real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', pt);
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        const p = (t % 7000) / 7000;
        st.tx = w * (0.5 + 0.3 * Math.sin(p * Math.PI * 4 + 0.6));
        st.ty = h * (0.5 + 0.3 * Math.sin(p * Math.PI * 2));
      }
      const k = st.real ? 1 : 0.12;
      st.x += (st.tx - st.x) * k;
      st.y += (st.ty - st.y) * k;
      const b = root.getBoundingClientRect();
      let over = false;
      cds.forEach((c) => {
        const r = c.getBoundingClientRect();
        if (st.x > r.left - b.left && st.x < r.right - b.left && st.y > r.top - b.top && st.y < r.bottom - b.top) over = true;
      });
      cl.classList.toggle('on', over);
      cl.style.transform = 'translate(' + st.x.toFixed(1) + 'px,' + st.y.toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a context-aware cursor label for a project grid. Hide the native cursor over the grid and use one fixed-position wrapper, pointer-events: none, moved with transform: translate(x, y) from pointermove. Inside it keep two layers centered on the pointer: a 10px accent dot and a 60x30 accent pill that reads "View" with a small arrow icon. By default the dot shows and the pill sits at scale(.2) with opacity 0. When the pointer enters a project card (pointerenter on the card, or data-cursor="view"), add a class that scales the pill to 1 and fades the dot out, using transition: transform 587ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%) and opacity over 200ms; remove it on pointerleave. Animate transform and opacity only, never the pill's width. Keep the card links real anchors so keyboard and screen reader users get the same destination, and restore the native cursor on touch and for reduced-motion users.` + NOTE,
});

ML.add({
  id: 'cursor-spotlight',
  cat: 'cursor',
  title: 'Spotlight reveal',
  sub: 'Light uncovers the finished design',
  html: `<div class="un"><div class="lay"><div class="h">Found it.</div><div class="s">Ship the small details</div><div class="b">Start</div><div class="t"><i></i></div></div></div><div class="cv" aria-hidden="true"><div class="lay"><div class="h"></div><div class="s"></div><div class="b"></div><div class="t"></div></div></div>${FK}`,
  css: S + FKC + `
.d{--x:-200px;--y:-200px}
.d .un,.d .cv{position:absolute;inset:0}
.d .un{background:var(--ml-surface)}
.d .lay{position:absolute;inset:0;display:grid;align-content:center;justify-items:start;gap:10px;padding:0 0 0 12%}
.d .h{width:56%;height:36px;display:flex;align-items:center;font:700 34px/1 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink);white-space:nowrap}
.d .s{width:56%;height:14px;display:flex;align-items:center;font:500 12px/1 var(--ml-font);color:var(--ml-muted);white-space:nowrap}
.d .b{width:76px;height:28px;display:flex;align-items:center;justify-content:center;border-radius:999px;font:600 12px/1 var(--ml-font);margin-top:4px}
.d .t{position:absolute;right:9%;top:50%;width:26%;aspect-ratio:4/5;transform:translateY(-50%);border-radius:14px}
.d .un .b{background:var(--ml-accent);color:#fff;box-shadow:0 6px 16px rgba(255,68,51,.28)}
.d .un .t{background:var(--ml-grad);overflow:hidden;box-shadow:var(--ml-shadow)}
.d .un .t i{position:absolute;right:18%;top:16%;width:22%;aspect-ratio:1;border-radius:50%;background:rgba(255,255,255,.92)}
.d .un .t::after{content:"";position:absolute;left:0;right:0;bottom:0;height:42%;background:rgba(255,255,255,.3);clip-path:polygon(0 60%,35% 20%,60% 55%,80% 35%,100% 60%,100% 100%,0 100%)}
.d .cv{background:var(--ml-bg);-webkit-mask-image:radial-gradient(circle at var(--x) var(--y),transparent 0,transparent 44px,#000 62px);mask-image:radial-gradient(circle at var(--x) var(--y),transparent 0,transparent 44px,#000 62px)}
.d .cv .h::before{content:"";width:100%;height:20px;border-radius:6px;background:var(--ml-bar)}
.d .cv .s::before{content:"";width:86%;height:9px;border-radius:5px;background:var(--ml-bar-2)}
.d .cv .b,.d .cv .t{background:var(--ml-bar-2)}
`,
  run: (root) => {
    const fk = root.querySelector('.fk');
    const st = { x: 0, y: 0, tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    root.addEventListener('pointerenter', (e) => { st.real = true; root.classList.add('real'); pt(e); st.x = st.tx; st.y = st.ty; });
    root.addEventListener('pointerleave', () => { st.real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', pt);
    const p = { x: 0, y: 0 };
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        st.tx = w * (0.5 + 0.34 * Math.sin(t * 0.0009));
        st.ty = h * (0.5 + 0.28 * Math.sin(t * 0.0015 + 1));
      }
      const k = st.real ? 1 : 0.2;
      st.x += (st.tx - st.x) * k;
      st.y += (st.ty - st.y) * k;
      p.x += (st.x - p.x) * 0.2;
      p.y += (st.y - p.y) * 0.2;
      root.style.setProperty('--x', p.x.toFixed(1) + 'px');
      root.style.setProperty('--y', p.y.toFixed(1) + 'px');
      fk.style.transform = 'translate(' + st.x.toFixed(1) + 'px,' + st.y.toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a spotlight reveal: a circle of light that uncovers the finished design hidden under a wireframe. Stack two full-size layers with identical geometry: the same element structure, the same absolute inset: 0 box, the same grid centering, gap and padding, and the same fixed heights for the headline, subline, button and image tile. The bottom layer is the colorful finished design with real text (an ink headline, a muted subline, an accent pill button, an accent gradient image tile). The top layer is the same layout drawn as a soft wireframe: grey-blue bars where the text sits, a muted pill and a muted tile, with no text at all so the two layers can never clash. Cut a soft hole in the top layer that follows the pointer with a radial mask: mask-image: radial-gradient(circle at var(--x) var(--y), transparent 0, transparent 44px, #000 62px) (include the -webkit- prefix). Update --x and --y on the container from pointermove, eased in a requestAnimationFrame loop (x += (pointerX - x) * 0.2) so the light trails the cursor slightly, and start both at -200px so nothing is revealed until the pointer enters. Only the mask changes each frame, so keep the layers simple and avoid filters. Keep the finished design as real DOM text for accessibility, hide the effect on touch devices (show the finished layer), and under prefers-reduced-motion show it statically.` + NOTE,
});

ML.add({
  id: 'cursor-image-trail',
  cat: 'cursor',
  title: 'Image trail',
  sub: 'Small images spawn and fade on the path',
  html: `<div class="hint"><b>Move across</b><span>Photos follow your path</span></div><div class="pool">${Array.from({ length: 8 }, (_, i) => `<div class="tl"><div class="im">${SC(i)}</div></div>`).join('')}</div>${FK}`,
  css: S + FKC + `
.d .hint{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:6px;text-align:center}
.d .hint b{font:600 20px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-bar)}
.d .hint span{font:500 11.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .pool{position:absolute;inset:0;pointer-events:none}
.d .tl{position:absolute;left:0;top:0;width:54px;height:68px;margin:-34px 0 0 -27px;border-radius:9px;overflow:hidden;box-shadow:var(--ml-shadow-lg);opacity:0;will-change:transform,opacity}
.d .im{position:absolute;inset:0}
.d .im svg{width:100%;height:100%;display:block}
`,
  run: (root) => {
    const tl = [...root.querySelectorAll('.tl')];
    const st = { x: 0, y: 0, tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    root.addEventListener('pointerenter', (e) => { st.real = true; root.classList.add('real'); pt(e); st.x = st.tx; st.y = st.ty; lx = st.x; ly = st.y; });
    root.addEventListener('pointerleave', () => { st.real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', pt);
    let lx = 0;
    let ly = 0;
    let n = 0;
    let z = 1;
    const spawn = (x, y, dx, dy) => {
      const el = tl[n++ % tl.length];
      el.getAnimations().forEach((a) => a.cancel());
      el.style.zIndex = String(z++);
      const rot = (Math.random() - 0.5) * 14;
      el.animate(
        [
          { opacity: 0, transform: 'translate(' + x + 'px,' + y + 'px) scale(.6) rotate(' + rot + 'deg)' },
          { opacity: 1, transform: 'translate(' + x + 'px,' + y + 'px) scale(1) rotate(' + rot + 'deg)', offset: 0.18 },
          { opacity: 1, transform: 'translate(' + (x + dx * 0.4) + 'px,' + (y + dy * 0.4) + 'px) scale(1) rotate(' + rot + 'deg)', offset: 0.55 },
          { opacity: 0, transform: 'translate(' + (x + dx * 0.9) + 'px,' + (y + dy * 0.9) + 'px) scale(.85) rotate(' + rot + 'deg)' },
        ],
        { duration: 1400, easing: 'cubic-bezier(.32,.72,0,1)' },
      );
    };
    const fk = root.querySelector('.fk');
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        const p = (t % 4500) / 4500;
        st.tx = w * (0.5 + 0.4 * Math.sin(p * Math.PI * 2));
        st.ty = h * (0.5 + 0.3 * Math.sin(p * Math.PI * 4 + 1));
      }
      const k = st.real ? 1 : 0.3;
      st.x += (st.tx - st.x) * k;
      st.y += (st.ty - st.y) * k;
      const dx = st.x - lx;
      const dy = st.y - ly;
      if (Math.hypot(dx, dy) > 34) {
        const len = Math.hypot(dx, dy) || 1;
        spawn(st.x, st.y, (dx / len) * 22, (dy / len) * 22);
        lx = st.x;
        ly = st.y;
      }
      fk.style.transform = 'translate(' + st.x.toFixed(1) + 'px,' + st.y.toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build an image trail: small photos spawn along the cursor path, drift forward a little and fade out. Keep a fixed pool of 8 absolutely or fixed positioned image cards (about 54x68px, 9px radius, soft shadow, pointer-events: none) and never create elements on mouse move. Track the distance since the last spawn; each time the pointer has travelled about 54px, take the next card from the pool, cancel its previous animation, raise its z-index so the newest sits on top, and run a Web Animations API animation with element.animate(): keyframes from opacity 0 and scale(.6) at the pointer, to opacity 1 and scale(1) at 18 percent, then drift 40 percent of a 22px step further along the movement direction, then fade to opacity 0 and scale(.85) at a 90 percent drift, over about 1100ms with cubic-bezier(.32,.72,0,1). Give each card a small random rotation (plus or minus 7 degrees). Animate transform and opacity only. Swap the photo sources in a loop so consecutive cards differ, preload them, and give the section a visible fallback (plain grid) for touch devices and under prefers-reduced-motion.` + NOTE,
});

ML.add({
  id: 'cursor-tilt',
  cat: 'cursor',
  title: 'Tilt toward cursor',
  sub: 'A grid of tiles leans to the pointer',
  html: `<div class="gd">${[0, 1, 2, 3, 4, 5].map((i) => `<div class="tl"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${['<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>', '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>', '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>', '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="M9 12h6"/>', '<path d="M12 3v18M3 12h18"/>', '<path d="m5 12 5 5L20 7"/>'][i]}</svg></span><i></i><i class="s"></i></div>`).join('')}</div>${FK}`,
  css: S + FKC + `
.d .gd{position:absolute;inset:14px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(2,1fr);gap:10px;perspective:700px}
.d .tl{display:grid;align-content:center;justify-items:start;gap:7px;padding:0 12%;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow);will-change:transform;transform-style:preserve-3d}
.d .ic{width:26px;height:26px;display:grid;place-items:center;border-radius:8px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ic svg{width:15px;height:15px}
.d .tl i{display:block;width:76%;height:5px;border-radius:3px;background:var(--ml-bar-2)}
.d .tl i.s{width:48%}
`,
  run: (root) => {
    const tl = [...root.querySelectorAll('.tl')];
    const fk = root.querySelector('.fk');
    const st = { x: 0, y: 0, tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    root.addEventListener('pointerenter', (e) => { st.real = true; root.classList.add('real'); pt(e); st.x = st.tx; st.y = st.ty; });
    root.addEventListener('pointerleave', () => { st.real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', pt);
    const a = tl.map(() => ({ rx: 0, ry: 0, z: 0 }));
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        st.tx = w * (0.5 + 0.4 * Math.sin(t * 0.0009));
        st.ty = h * (0.5 + 0.34 * Math.sin(t * 0.0013 + 1));
      }
      const k = st.real ? 1 : 0.18;
      st.x += (st.tx - st.x) * k;
      st.y += (st.ty - st.y) * k;
      const b = root.getBoundingClientRect();
      tl.forEach((el, i) => {
        const r = el.getBoundingClientRect();
        const cx = r.left - b.left + r.width / 2;
        const cy = r.top - b.top + r.height / 2;
        const dx = st.x - cx;
        const dy = st.y - cy;
        const f = Math.max(0, 1 - Math.hypot(dx, dy) / 170);
        const ty = Math.max(-1, Math.min(1, dx / 90)) * 22 * f;
        const tx = -Math.max(-1, Math.min(1, dy / 70)) * 22 * f;
        a[i].rx += (tx - a[i].rx) * 0.14;
        a[i].ry += (ty - a[i].ry) * 0.14;
        a[i].z += (f * 14 - a[i].z) * 0.14;
        el.style.transform = 'rotateX(' + a[i].rx.toFixed(2) + 'deg) rotateY(' + a[i].ry.toFixed(2) + 'deg) translateZ(' + a[i].z.toFixed(1) + 'px)';
      });
      fk.style.transform = 'translate(' + st.x.toFixed(1) + 'px,' + st.y.toFixed(1) + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a grid of tiles that lean toward the cursor. Put the tiles in a container with perspective: 700px. On every animation frame, for each tile compute the vector from its center to the pointer and a falloff f = max(0, 1 - distance / 150), so only tiles near the cursor react. Set the target rotateY to clamp(dx / 90, -1, 1) * 16deg * f and the target rotateX to -clamp(dy / 70, -1, 1) * 16deg * f, plus translateZ(f * 14px) so the closest tiles also rise toward you. Ease the current values toward the targets (value += (target - value) * 0.14) and write transform: rotateX() rotateY() translateZ() only, with will-change: transform and transform-style: preserve-3d. When the pointer leaves the grid the targets fall to zero and every tile settles flat. Keep each tile's content (icon, text) inside so it tilts as one piece, and add a soft shadow that deepens with f. Disable on touch devices and under prefers-reduced-motion, and keep tiles focusable with a visible focus ring.` + NOTE,
});

ML.add({
  id: 'cursor-click-ripple',
  cat: 'cursor',
  title: 'Click ripple',
  sub: 'Each click leaves expanding rings',
  html: `<div class="hint"><b>Click anywhere</b><span>Every tap leaves a ripple</span></div><div class="rp"></div>${FK}`,
  css: S + FKC + `
.d .hint{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:6px;text-align:center}
.d .hint b{font:600 20px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-bar)}
.d .hint span{font:500 11.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .rp{position:absolute;inset:0;pointer-events:none}
.d .ring{position:absolute;left:0;top:0;width:44px;height:44px;margin:-22px 0 0 -22px;border-radius:50%;border:1.5px solid var(--ml-accent);pointer-events:none}
.d .core{position:absolute;left:0;top:0;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:var(--ml-accent-soft);border:1.5px solid var(--ml-accent-2);pointer-events:none}
.d .fk{transition:opacity .2s ease,transform .12s ease}
`,
  run: (root) => {
    const rp = root.querySelector('.rp');
    const fk = root.querySelector('.fk');
    const st = { x: 0, y: 0, tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    root.addEventListener('pointerenter', (e) => { st.real = true; root.classList.add('real'); pt(e); st.x = st.tx; st.y = st.ty; });
    root.addEventListener('pointerleave', () => { st.real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', pt);
    const ripple = (x, y) => {
      for (let i = 0; i < 2; i++) {
        const r = document.createElement('i');
        r.className = 'ring';
        rp.appendChild(r);
        const a = r.animate(
          [
            { opacity: 0.85, transform: 'translate(' + x + 'px,' + y + 'px) scale(.15)' },
            { opacity: 0, transform: 'translate(' + x + 'px,' + y + 'px) scale(' + (3.4 - i * 0.9) + ')' },
          ],
          { duration: 1100 + i * 150, delay: i * 140, easing: 'cubic-bezier(.2,.7,.1,1)', fill: 'both' },
        );
        a.onfinish = () => r.remove();
      }
      const c = document.createElement('i');
      c.className = 'core';
      rp.appendChild(c);
      const b = c.animate(
        [
          { opacity: 1, transform: 'translate(' + x + 'px,' + y + 'px) scale(1)' },
          { opacity: 0, transform: 'translate(' + x + 'px,' + y + 'px) scale(2.2)' },
        ],
        { duration: 500, easing: 'ease-out', fill: 'both' },
      );
      b.onfinish = () => c.remove();
    };
    root.addEventListener('pointerdown', (e) => {
      const r = root.getBoundingClientRect();
      ripple(e.clientX - r.left, e.clientY - r.top);
    });
    let next = 900;
    let target = 0;
    let press = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        if (t > next) {
          st.tx = w * (0.18 + Math.random() * 0.64);
          st.ty = h * (0.2 + Math.random() * 0.6);
          next = t + 1100;
          target = t + 620;
        }
        if (target && t > target) {
          target = 0;
          press = t + 140;
          ripple(st.tx, st.ty);
        }
      }
      const k = st.real ? 1 : 0.14;
      st.x += (st.tx - st.x) * k;
      st.y += (st.ty - st.y) * k;
      fk.style.transform = 'translate(' + st.x.toFixed(1) + 'px,' + st.y.toFixed(1) + 'px) scale(' + (t < press ? 0.86 : 1) + ')';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a click ripple effect that leaves expanding rings wherever the visitor clicks or taps. Add a full-size layer with pointer-events: none inside the container (or listen on the container with pointerdown, which also covers touch). On pointerdown, create two ring elements and one small core dot at the click coordinates (clientX minus the container's rect), each absolutely positioned with a 1.5px accent border and a transparent fill. Animate them with the Web Animations API: rings go from opacity .85 and scale(.15) to opacity 0 and scale(3.4) and scale(2.5) respectively over about 1100ms with cubic-bezier(.2,.7,.1,1), the second ring delayed by 140ms; the core dot scales to 2.2 and fades over 500ms. Remove each element in the animation's onfinish handler so the DOM never grows. Use only transform and opacity, keep pointer-events: none so rings never block clicks, and let clicks pass through to the real controls underneath. Do not trigger on keyboard activation of buttons unless you want it to. Under prefers-reduced-motion show a single quick fade instead of the expanding rings.` + NOTE,
});

ML.add({
  id: 'cursor-crosshair',
  cat: 'cursor',
  title: 'Crosshair guides',
  sub: 'Guide lines and live x/y follow the pointer',
  html: `<div class="ob"><i></i><i></i></div><i class="ln v"></i><i class="ln h"></i><span class="co">x 0  y 0</span>${FK}`,
  css: S + FKC + `
.d{background-color:var(--ml-bg);background-image:linear-gradient(var(--ml-bar-2) 1px,transparent 1px),linear-gradient(90deg,var(--ml-bar-2) 1px,transparent 1px);background-size:24px 24px}
.d .ob{position:absolute;left:18%;top:26%;width:34%;height:38%;display:grid;align-content:center;gap:8px;padding:0 14px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .ob i{display:block;height:6px;border-radius:3px;background:var(--ml-bar)}
.d .ob i+i{width:60%}
.d .ln{position:absolute;left:0;top:0;background:var(--ml-accent);opacity:.55;pointer-events:none;will-change:transform}
.d .ln.v{width:1px;height:100%}
.d .ln.h{width:100%;height:1px}
.d .co{position:absolute;left:0;top:0;padding:5px 8px;border-radius:7px;background:var(--ml-ink);color:#fff;font:500 10px/1 var(--ml-mono);white-space:pre;pointer-events:none;will-change:transform}
`,
  run: (root) => {
    const v = root.querySelector('.v');
    const hz = root.querySelector('.h');
    const co = root.querySelector('.co');
    const fk = root.querySelector('.fk');
    const st = { x: 0, y: 0, tx: 0, ty: 0, real: false };
    const pt = (e) => { const r = root.getBoundingClientRect(); st.tx = e.clientX - r.left; st.ty = e.clientY - r.top; };
    root.addEventListener('pointerenter', (e) => { st.real = true; root.classList.add('real'); pt(e); st.x = st.tx; st.y = st.ty; });
    root.addEventListener('pointerleave', () => { st.real = false; root.classList.remove('real'); });
    root.addEventListener('pointermove', pt);
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const w = root.clientWidth;
      const h = root.clientHeight;
      if (!st.real) {
        st.tx = w * (0.5 + 0.38 * Math.sin(t * 0.0011));
        st.ty = h * (0.5 + 0.34 * Math.sin(t * 0.0017 + 0.8));
      }
      const k = st.real ? 1 : 0.2;
      st.x += (st.tx - st.x) * k;
      st.y += (st.ty - st.y) * k;
      const x = Math.round(st.x);
      const y = Math.round(st.y);
      v.style.transform = 'translateX(' + x + 'px)';
      hz.style.transform = 'translateY(' + y + 'px)';
      const fl = x > w - 80;
      const fb = y > h - 28;
      co.style.transform = 'translate(' + (fl ? x - 76 : x + 12) + 'px,' + (fb ? y - 26 : y + 12) + 'px)';
      co.textContent = 'x ' + String(x).padStart(3, ' ') + '  y ' + String(y).padStart(3, ' ');
      fk.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a crosshair cursor with guide lines and live coordinates, like a design tool. Add a 1px full-height vertical line and a 1px full-width horizontal line (your accent color at about 55 percent opacity, pointer-events: none) plus a small ink pill showing the pointer position in monospace. Over a faint 24px grid background, update everything from pointermove: the vertical line with transform: translateX(x), the horizontal with transform: translateY(y), and the pill with transform: translate(x + 12px, y + 12px), flipping it to the left or above when it would cross the right or bottom edge so it always stays visible. Round the coordinates and pad them (x 142 y 088) so the label does not jitter in width, using a monospace font with white-space: pre. Update in a requestAnimationFrame loop rather than directly in the event so it runs once per frame. Hide everything when the pointer leaves. Position lines with transform only, never left or top. Skip it on touch devices, and under prefers-reduced-motion keep the lines but drop any easing.` + NOTE,
});
})();
