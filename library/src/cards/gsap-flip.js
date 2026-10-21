// GSAP Flip layout cards (GSAP 3.15.0): record state, change the DOM / classes, Flip.from.
(() => {
  const ico = (p, w = 1.8) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
  // Painted "photo" tiles drawn with gradients + clip-path only (no assets).
  const SCENES = `
.d .ph{position:relative;overflow:hidden;background:var(--g,linear-gradient(160deg,#FFF2ED,#9CC4FF))}
.d .ph::before{content:"";position:absolute;width:19%;aspect-ratio:1;border-radius:50%;background:rgba(255,255,255,.92);top:15%;left:var(--sx,68%)}
.d .ph::after{content:"";position:absolute;left:0;right:0;bottom:0;height:60%;background:var(--m,#3E8BFF);clip-path:var(--p,polygon(0 100%,0 62%,22% 30%,40% 58%,62% 14%,100% 64%,100% 100%))}
.d .ph.a{--g:linear-gradient(160deg,#FFF2ED,#8DBBFF);--m:#2F80FF;--sx:66%}
.d .ph.b{--g:linear-gradient(160deg,#EAF2FF,#FFD0CA);--m:#FF4433;--sx:14%;--p:polygon(0 100%,0 40%,30% 62%,58% 22%,100% 56%,100% 100%)}
.d .ph.c{--g:linear-gradient(160deg,#FFEFEA,#FF8E6E);--m:#B3150F;--sx:44%;--p:polygon(0 100%,0 54%,18% 26%,36% 50%,70% 18%,100% 48%,100% 100%)}
.d .ph.d{--g:linear-gradient(160deg,#F1F7FF,#FFC2B3);--m:#FF7A3D;--sx:76%;--p:polygon(0 100%,0 30%,26% 54%,48% 36%,74% 64%,100% 40%,100% 100%)}
.d .ph.e{--g:linear-gradient(160deg,#E1EDFF,#9CC4FF);--m:#1F78FF;--sx:28%;--p:polygon(0 100%,0 70%,34% 34%,52% 56%,80% 24%,100% 50%,100% 100%)}
`;

  // ---------------------------------------------------------------------------------------------
  // 1. Grid filter
  // ---------------------------------------------------------------------------------------------
  const PROD = {
    lamp: ico('<path d="M8 4h8l3 9H5z"/><path d="M12 13v6M8 20h8"/>'),
    chair: ico('<path d="M7 3h10v8H7z"/><path d="M5 11h14v3H5z"/><path d="M7 14v6M17 14v6"/>'),
    vase: ico('<path d="M9 3h6"/><path d="M10 3c0 3-4 4-4 9a6 6 0 0 0 12 0c0-5-4-6-4-9"/><path d="M9 21h6"/>'),
  };
  const tile = (c, name, price, tint) => `<article class="it" data-c="${c}"><div class="pic t${tint}">${PROD[c]}</div><div class="meta"><b>${name}</b><span>${price}</span></div></article>`;
  ML.add({
    id: 'gsap-flip-grid-filter',
    cat: 'gsap-flip',
    title: 'Filterable product grid',
    sub: 'Chips filter, tiles glide to new slots',
    libs: ['gsap'],
    html: `<div class="app">
  <div class="top"><b>Home</b><div class="chips" role="group" aria-label="Filter products"><button class="chip is-on" type="button">All</button><button class="chip" type="button">Lamps</button><button class="chip" type="button">Chairs</button><button class="chip" type="button">Vases</button></div></div>
  <div class="grid">${tile('lamp', 'Arc lamp', '$89', 1)}${tile('chair', 'Oak chair', '$140', 2)}${tile('vase', 'Clay vase', '$36', 3)}${tile('lamp', 'Desk lamp', '$54', 2)}${tile('chair', 'Pod chair', '$210', 3)}${tile('vase', 'Glass vase', '$42', 1)}</div>
</div>`,
    css: `
.d .app{position:absolute;inset:0;padding:14px;background:var(--ml-surface);display:flex;flex-direction:column;gap:10px}
.d .top{display:flex;align-items:center;justify-content:space-between;gap:8px}
.d .top b{font:650 14px/1 var(--ml-font);letter-spacing:-.03em}
.d .chips{display:flex;gap:4px}
.d .chip{border:0;background:#fff;box-shadow:inset 0 0 0 1px var(--ml-line);border-radius:99px;padding:5px 9px;font:600 9.5px/1 var(--ml-font);color:var(--ml-ink-2);cursor:pointer;transition:background .3s,color .3s,box-shadow .3s}
.d .chip.is-on{background:var(--ml-accent);color:#fff;box-shadow:none}
.d .grid{position:relative;flex:1;min-height:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));gap:8px}
.d .it{display:flex;flex-direction:column;gap:5px;padding:6px;background:#fff;border-radius:12px;box-shadow:var(--ml-shadow);min-height:0}
.d .it.off{display:none}
.d .pic{flex:1;min-height:0;border-radius:8px;display:grid;place-items:center;color:var(--ml-accent-ink)}
.d .pic svg{width:42%;height:42%}
.d .t1{background:var(--ml-accent-soft)}
.d .t2{background:#FFEBE8}
.d .t3{background:#EAF1FB}
.d .meta{display:flex;justify-content:space-between;align-items:baseline;gap:4px}
.d .meta b{font:600 9.5px/1.1 var(--ml-font);letter-spacing:-.01em;white-space:nowrap}
.d .meta span{font:500 9px/1 var(--ml-mono);color:var(--ml-muted)}
`,
    run: (root, lib) => {
      const { gsap, Flip } = lib;
      gsap.registerPlugin(Flip);
      // Autoplay + yield: a master timeline calls go() on a beat; a real click pauses it for 3s.
      let auto, resume, cur = 0;
      let ctx;
      const offs = [];
      const yieldAuto = () => { if (auto) auto.pause(); if (resume) resume.restart(true); };
      const tap = (el, fn) => {
        const h = (e) => { e.stopPropagation(); yieldAuto(); ctx.add(() => fn(e)); };
        const k = (e) => { e.stopPropagation(); if ((e.key === 'Enter' || e.key === ' ') && el.tagName !== 'BUTTON') { e.preventDefault(); h(e); } };
        el.addEventListener('click', h);
        el.addEventListener('keydown', k);
        offs.push(() => { el.removeEventListener('click', h); el.removeEventListener('keydown', k); });
      };
      const loop = (n, hold) => {
        auto = gsap.timeline({ repeat: -1, delay: hold });
        for (let k = 0; k < n; k++) auto.call(() => ctx.add(() => go((cur + 1) % n)), null, k * hold);
        auto.to({}, { duration: hold }, (n - 1) * hold);
        resume = gsap.delayedCall(3, () => auto.play()).pause();
      };
      const items = Array.from(root.querySelectorAll('.it'));
      const chips = Array.from(root.querySelectorAll('.chip'));
      const keys = ['all', 'lamp', 'chair', 'vase'];
      const go = (i) => {
        cur = i;
        const f = keys[i];
        const state = Flip.getState(items);
        items.forEach((it) => it.classList.toggle('off', f !== 'all' && it.dataset.c !== f));
        chips.forEach((c, k) => c.classList.toggle('is-on', k === i));
        Flip.from(state, {
          duration: 0.75, ease: 'power3.inOut', absolute: true, scale: true,
          onEnter: (els) => gsap.fromTo(els, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 0.5, delay: 0.3, ease: 'back.out(1.5)', overwrite: 'auto' }),
          onLeave: (els) => gsap.to(els, { opacity: 0, scale: 0.5, duration: 0.4, ease: 'power2.in', overwrite: 'auto' }),
        });
      };
      ctx = gsap.context(() => {
        chips.forEach((c, k) => tap(c, () => go(k)));
        loop(4, 2.4);
      }, root);
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

      return () => {
        mo.disconnect();
        offs.forEach((f) => f());
        ctx.revert();
      };
    },
    prompt: `Build a filterable product grid where changing the filter makes the tiles glide instead of jump, using GSAP 3 and the Flip plugin (import gsap and Flip, then gsap.registerPlugin(Flip)). Markup: a row of filter buttons (All, Lamps, Chairs, Vases) above a CSS grid of 3 columns, each tile an article with a data-category attribute, an image area and a name and price row. On click: 1) const state = Flip.getState(tiles); 2) toggle a class on each tile that sets display: none when it does not match, and update the active button; 3) Flip.from(state, { duration: 0.75, ease: 'power3.inOut', absolute: true, scale: true, onEnter: els => gsap.fromTo(els, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, delay: 0.3, duration: 0.5, ease: 'back.out(1.5)' }), onLeave: els => gsap.to(els, { opacity: 0, scale: 0.5, duration: 0.4 }) }). Tiles that stay slide to their new grid slots, tiles that match but were hidden pop in after the move, tiles that no longer match shrink and fade first. The grid needs position: relative because absolute: true takes leaving tiles out of the flow. Make buttons real <button> elements with aria-pressed, keep focus-visible rings, and under prefers-reduced-motion set the duration to 0 so the filter just applies. Wrap the handlers in gsap.context and revert it on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  // 2. Card expands to detail
  // ---------------------------------------------------------------------------------------------
  const trip = (c, t, m, d) => `<div class="row" role="button" tabindex="0" aria-label="${t}"><div class="th ph ${c}"></div><div class="tx"><h4 class="ttl">${t}</h4><p class="meta">${m}</p></div><div class="more"><p>${d}</p><span class="cta">Book trip</span></div></div>`;
  ML.add({
    id: 'gsap-flip-card-expand',
    cat: 'gsap-flip',
    title: 'Card expands to detail',
    sub: 'A list row grows into a detail panel',
    libs: ['gsap'],
    html: `<div class="app">
  <div class="top"><b>Trips</b><span class="pill">3 saved</span></div>
  <div class="list">${trip('a', 'Lisbon weekend', '3 nights, from $420', 'Flights, a river-view room and two guided walks are included.')}${trip('c', 'Kyoto in spring', '6 nights, from $1,180', 'Cherry-blossom week with a tea house stay and a day in Nara.')}${trip('b', 'Oslo fjords', '4 nights, from $760', 'A fjord cruise, a sauna session and an old-town food tour.')}</div>
</div>`,
    css: `${SCENES}
.d .app{position:absolute;inset:0;padding:14px;background:var(--ml-surface);display:flex;flex-direction:column;gap:10px}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .top b{font:650 14px/1 var(--ml-font);letter-spacing:-.03em}
.d .pill{padding:4px 8px;border-radius:99px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font:600 9px/1 var(--ml-font)}
.d .list{position:relative;flex:1;min-height:0;display:flex;flex-direction:column;gap:8px}
.d .row{flex:1 1 0;max-height:84px;display:flex;align-items:center;gap:10px;padding:7px;background:#fff;border-radius:14px;box-shadow:var(--ml-shadow);cursor:pointer}
.d .row.off{display:none}
.d .th{flex:none;align-self:stretch;aspect-ratio:1;border-radius:9px}
.d .tx{min-width:0}
.d .ttl{font:600 12px/1.15 var(--ml-font);letter-spacing:-.02em;white-space:nowrap}
.d .meta{margin-top:3px;font:500 9.5px/1.1 var(--ml-font);color:var(--ml-muted);white-space:nowrap}
.d .more{display:none}
.d .row.open{flex:1 1 auto;max-height:none;flex-direction:column;align-items:stretch;gap:8px;padding:8px;cursor:default}
.d .open .th{flex:1 1 0;min-height:0;aspect-ratio:auto;border-radius:10px}
.d .open .ttl{font-size:16px;letter-spacing:-.035em}
.d .open .more{display:block}
.d .more p{font:500 10px/1.35 var(--ml-font);color:var(--ml-muted)}
.d .cta{display:inline-block;margin-top:7px;padding:7px 13px;border-radius:99px;background:var(--ml-accent);color:#fff;font:600 10px/1 var(--ml-font)}
`,
    run: (root, lib) => {
      const { gsap, Flip } = lib;
      gsap.registerPlugin(Flip);
      // Autoplay + yield: a master timeline calls go() on a beat; a real click pauses it for 3s.
      let auto, resume, cur = 0;
      let ctx;
      const offs = [];
      const yieldAuto = () => { if (auto) auto.pause(); if (resume) resume.restart(true); };
      const tap = (el, fn) => {
        const h = (e) => { e.stopPropagation(); yieldAuto(); ctx.add(() => fn(e)); };
        const k = (e) => { e.stopPropagation(); if ((e.key === 'Enter' || e.key === ' ') && el.tagName !== 'BUTTON') { e.preventDefault(); h(e); } };
        el.addEventListener('click', h);
        el.addEventListener('keydown', k);
        offs.push(() => { el.removeEventListener('click', h); el.removeEventListener('keydown', k); });
      };
      const loop = (n, hold) => {
        auto = gsap.timeline({ repeat: -1, delay: hold });
        for (let k = 0; k < n; k++) auto.call(() => ctx.add(() => go((cur + 1) % n)), null, k * hold);
        auto.to({}, { duration: hold }, (n - 1) * hold);
        resume = gsap.delayedCall(3, () => auto.play()).pause();
      };
      const rows = Array.from(root.querySelectorAll('.row'));
      const parts = Array.from(root.querySelectorAll('.th, .ttl, .meta, .more'));
      const opens = [-1, 1, -1, 0, -1, 2];
      const show = (r) => {
        const state = Flip.getState(rows.concat(parts), { props: 'fontSize,borderRadius' });
        rows.forEach((row, k) => {
          row.classList.toggle('open', k === r);
          row.classList.toggle('off', r >= 0 && k !== r);
        });
        Flip.from(state, {
          duration: 0.8, ease: 'power3.inOut', scale: false, nested: true, absoluteOnLeave: true,
          onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.45, delay: 0.3, ease: 'power3.out', overwrite: 'auto' }),
          onLeave: (els) => gsap.to(els, { opacity: 0, duration: 0.25, ease: 'power2.in', overwrite: 'auto' }),
        });
      };
      const go = (i) => { cur = i; show(opens[i]); };
      ctx = gsap.context(() => {
        // whole-row targets would swallow the stage click that opens the preview, so they only react in the modal / export
        if (!(root.getRootNode() instanceof ShadowRoot)) rows.forEach((row, k) => tap(row, () => {
          const was = row.classList.contains('open');
          cur = was ? 0 : opens.indexOf(k);
          show(was ? -1 : k);
        }));
        loop(opens.length, 2.2);
      }, root);
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

      return () => {
        mo.disconnect();
        offs.forEach((f) => f());
        ctx.revert();
      };
    },
    prompt: `Build a list card that expands into its own detail panel with a shared-element morph, using GSAP 3 and the Flip plugin. Markup: a vertical list of rows, each row holding a thumbnail, a title (h4), a meta line and a hidden .more block with a description and a call-to-action. Clicking a row (role="button", tabindex 0, Enter and Space too) toggles an .open class on it and a display: none class on the other rows. The open row becomes a flex column: the thumbnail grows to fill the free height, the title jumps from 12px to 16px, the .more block shows. Animate it with Flip: const state = Flip.getState(rows.concat(thumbs, titles, metas, mores), { props: 'fontSize,borderRadius' }); apply the classes; Flip.from(state, { duration: 0.8, ease: 'power3.inOut', scale: false, nested: true, absoluteOnLeave: true, onEnter: els => gsap.fromTo(els, { opacity: 0, y: 8 }, { opacity: 1, y: 0, delay: 0.3 }), onLeave: els => gsap.to(els, { opacity: 0 }) }). scale: false animates real width and height so text is never stretched, and nested: true keeps the thumbnail and title in step with the growing parent. Clicking the open card flips it back. Keep titles on one line (white-space: nowrap), add focus-visible outlines, and with prefers-reduced-motion use duration 0. Call ctx.revert() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  // 3. List to grid toggle
  // ---------------------------------------------------------------------------------------------
  const album = (c, t, m) => `<article class="it"><div class="th ph ${c}"></div><div class="tx"><b>${t}</b><span>${m}</span></div></article>`;
  ML.add({
    id: 'gsap-flip-list-grid',
    cat: 'gsap-flip',
    title: 'List to grid toggle',
    sub: 'Same items, two layouts, one glide',
    libs: ['gsap'],
    html: `<div class="app">
  <div class="top"><b>Albums</b><div class="seg" role="group" aria-label="View"><button class="sb is-on" type="button" aria-label="List view">${ico('<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>', 2)}<i class="knob"></i></button><button class="sb" type="button" aria-label="Grid view">${ico('<rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/>', 2)}</button></div></div>
  <div class="wrap">${album('a', 'Harbor light', '12 photos')}${album('c', 'Quiet ridge', '8 photos')}${album('b', 'Blue hour', '21 photos')}${album('d', 'Salt flats', '6 photos')}${album('e', 'Morning mist', '14 photos')}</div>
</div>`,
    css: `${SCENES}
.d .app{position:absolute;inset:0;padding:14px;background:var(--ml-surface);display:flex;flex-direction:column;gap:10px}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .top b{font:650 14px/1 var(--ml-font);letter-spacing:-.03em}
.d .seg{display:flex;padding:2px;border-radius:99px;background:#E4EBF6}
.d .sb{position:relative;isolation:isolate;border:0;background:none;width:28px;height:20px;display:grid;place-items:center;color:var(--ml-muted);cursor:pointer;transition:color .3s}
.d .sb.is-on{color:#fff}
.d .sb svg{width:12px;height:12px}
.d .knob{position:absolute;inset:0;z-index:-1;border-radius:99px;background:var(--ml-accent)}
.d .wrap{flex:1;min-height:0;display:flex;flex-direction:column;gap:4px}
.d .it{display:flex;align-items:center;gap:9px;padding:4px 10px 4px 4px;background:#fff;border-radius:10px;box-shadow:var(--ml-shadow)}
.d .th{flex:none;width:20px;height:20px;border-radius:6px}
.d .tx{display:flex;flex-direction:column;gap:2px;min-width:0}
.d .tx b{font:600 10px/1 var(--ml-font);letter-spacing:-.015em;white-space:nowrap}
.d .tx span{font:500 8.5px/1 var(--ml-font);color:var(--ml-muted);white-space:nowrap}
.d .wrap.is-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));gap:8px}
.d .is-grid .it{flex-direction:column;align-items:stretch;gap:6px;padding:6px;border-radius:12px;min-height:0}
.d .is-grid .th{width:auto;height:auto;flex:1;min-height:0;border-radius:8px}
`,
    run: (root, lib) => {
      const { gsap, Flip } = lib;
      gsap.registerPlugin(Flip);
      // Autoplay + yield: a master timeline calls go() on a beat; a real click pauses it for 3s.
      let auto, resume, cur = 0;
      let ctx;
      const offs = [];
      const yieldAuto = () => { if (auto) auto.pause(); if (resume) resume.restart(true); };
      const tap = (el, fn) => {
        const h = (e) => { e.stopPropagation(); yieldAuto(); ctx.add(() => fn(e)); };
        const k = (e) => { e.stopPropagation(); if ((e.key === 'Enter' || e.key === ' ') && el.tagName !== 'BUTTON') { e.preventDefault(); h(e); } };
        el.addEventListener('click', h);
        el.addEventListener('keydown', k);
        offs.push(() => { el.removeEventListener('click', h); el.removeEventListener('keydown', k); });
      };
      const loop = (n, hold) => {
        auto = gsap.timeline({ repeat: -1, delay: hold });
        for (let k = 0; k < n; k++) auto.call(() => ctx.add(() => go((cur + 1) % n)), null, k * hold);
        auto.to({}, { duration: hold }, (n - 1) * hold);
        resume = gsap.delayedCall(3, () => auto.play()).pause();
      };
      const wrap = root.querySelector('.wrap');
      const knob = root.querySelector('.knob');
      const btns = Array.from(root.querySelectorAll('.sb'));
      const parts = Array.from(root.querySelectorAll('.it, .th, .tx'));
      const set = (grid) => {
        const state = Flip.getState(parts.concat(knob), { props: 'borderRadius' });
        wrap.classList.toggle('is-grid', grid);
        btns.forEach((b, k) => b.classList.toggle('is-on', k === (grid ? 1 : 0)));
        btns[grid ? 1 : 0].appendChild(knob);
        Flip.from(state, { duration: 0.8, ease: 'power3.inOut', scale: false, nested: true, stagger: { each: 0.03, from: 'start' } });
      };
      const go = (i) => { cur = i; set(i % 2 === 1); };
      ctx = gsap.context(() => {
        btns.forEach((b, k) => tap(b, () => { if (wrap.classList.contains('is-grid') !== (k === 1)) { cur = k; set(k === 1); } }));
        loop(2, 3);
      }, root);
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

      return () => {
        mo.disconnect();
        offs.forEach((f) => f());
        ctx.revert();
      };
    },
    prompt: `Build a view toggle that switches a collection between a compact list and a card grid with a smooth layout glide, using GSAP 3 and the Flip plugin. Markup: a header with a two-button segmented control (list icon, grid icon, aria-label on each) and a wrapper holding the items; each item has a thumbnail (.th) and a text block (.tx) with a title and a count. CSS: the wrapper is display: flex column for the list, and a .is-grid class switches it to grid-template-columns: repeat(3, minmax(0, 1fr)); in grid mode each item becomes a column card where the thumbnail flexes to fill the card, in list mode the thumbnail is a 20 to 40px square beside the text. On click: const state = Flip.getState(items.concat(thumbs, texts, knob), { props: 'borderRadius' }); toggle .is-grid on the wrapper and move the active-pill element into the clicked button with appendChild; then Flip.from(state, { duration: 0.8, ease: 'power3.inOut', scale: false, nested: true, stagger: { each: 0.03, from: 'start' } }). scale: false animates real width and height so thumbnails and text never stretch, and nested: true keeps children in step with their moving parents. Persist the chosen view in localStorage and restore it before first paint. Use <button> elements with aria-pressed, focus-visible rings, and duration 0 under prefers-reduced-motion. Revert the gsap.context on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  // 4. Move between columns (kanban)
  // ---------------------------------------------------------------------------------------------
  const kc = (t, tag, who, hot) => `<div class="k${hot ? ' hot' : ''}"><b>${t}</b><div class="mt"><i class="tag">${tag}</i><i class="av">${who}</i></div></div>`;
  ML.add({
    id: 'gsap-flip-kanban-move',
    cat: 'gsap-flip',
    title: 'Kanban card moves columns',
    sub: 'The card hops over, the rest close the gap',
    libs: ['gsap'],
    html: `<div class="app">
  <div class="top"><b>Sprint 12</b><span class="pill">5 tasks</span></div>
  <div class="board">
    <section class="col"><header><span>To do</span><em class="n">3</em></header><div class="cb">${kc('Review UI', 'Design', 'M', true)}${kc('Write copy', 'Content', 'T')}${kc('Update docs', 'Docs', 'P')}</div></section>
    <section class="col"><header><span>Doing</span><em class="n">1</em></header><div class="cb">${kc('Fix login', 'Bug', 'J')}</div></section>
    <section class="col"><header><span>Done</span><em class="n">1</em></header><div class="cb">${kc('Ship site', 'Launch', 'L')}</div></section>
  </div>
</div>`,
    css: `
.d .app{position:absolute;inset:0;padding:14px;background:var(--ml-surface);display:flex;flex-direction:column;gap:10px}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .top b{font:650 14px/1 var(--ml-font);letter-spacing:-.03em}
.d .pill{padding:4px 8px;border-radius:99px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font:600 9px/1 var(--ml-font)}
.d .board{flex:1;min-height:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px}
.d .col{background:#E8EEF8;border-radius:12px;padding-bottom:6px;min-height:0}
.d .col header{display:flex;justify-content:space-between;align-items:center;padding:8px 8px 6px}
.d .col header span{font:650 9.5px/1 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink-2)}
.d .n{font:600 8.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted);background:#fff;border-radius:99px;padding:3px 6px}
.d .cb{display:flex;flex-direction:column;gap:6px;padding:0 6px}
.d .k{background:#fff;border-radius:9px;padding:7px;box-shadow:0 1px 2px rgba(35,15,10,.08);display:flex;flex-direction:column;gap:6px}
.d .k.lift{box-shadow:var(--ml-shadow-lg)}
.d .k b{font:600 9.5px/1.15 var(--ml-font);letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .mt{display:flex;justify-content:space-between;align-items:center}
.d .tag{font:600 8px/1 var(--ml-font);font-style:normal;padding:3px 6px;border-radius:99px;background:#EAF0F9;color:var(--ml-ink-2)}
.d .hot .tag{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .av{display:grid;place-items:center;width:14px;height:14px;border-radius:50%;background:var(--ml-bar);color:var(--ml-ink-2);font:600 7.5px/1 var(--ml-font);font-style:normal}
.d .hot .av{background:var(--ml-accent);color:#fff}
`,
    run: (root, lib) => {
      const { gsap, Flip } = lib;
      gsap.registerPlugin(Flip);
      // Autoplay + yield: a master timeline calls go() on a beat; a real click pauses it for 3s.
      let auto, resume, cur = 0;
      let ctx;
      const offs = [];
      const yieldAuto = () => { if (auto) auto.pause(); if (resume) resume.restart(true); };
      const tap = (el, fn) => {
        const h = (e) => { e.stopPropagation(); yieldAuto(); ctx.add(() => fn(e)); };
        const k = (e) => { e.stopPropagation(); if ((e.key === 'Enter' || e.key === ' ') && el.tagName !== 'BUTTON') { e.preventDefault(); h(e); } };
        el.addEventListener('click', h);
        el.addEventListener('keydown', k);
        offs.push(() => { el.removeEventListener('click', h); el.removeEventListener('keydown', k); });
      };
      const loop = (n, hold) => {
        auto = gsap.timeline({ repeat: -1, delay: hold });
        for (let k = 0; k < n; k++) auto.call(() => ctx.add(() => go((cur + 1) % n)), null, k * hold);
        auto.to({}, { duration: hold }, (n - 1) * hold);
        resume = gsap.delayedCall(3, () => auto.play()).pause();
      };
      const bodies = Array.from(root.querySelectorAll('.cb'));
      const counts = Array.from(root.querySelectorAll('.n'));
      const cards = Array.from(root.querySelectorAll('.k'));
      const star = root.querySelector('.hot');
      const advance = (card) => {
        const from = bodies.indexOf(card.parentElement);
        const state = Flip.getState(cards);
        bodies[(from + 1) % 3].prepend(card);
        bodies.forEach((b, k) => { counts[k].textContent = b.children.length; });
        Flip.from(state, { duration: 0.8, ease: 'power3.inOut', zIndex: 5, toggleClass: 'lift' });
      };
      const go = () => advance(star);
      ctx = gsap.context(() => {
        cards.forEach((c) => tap(c, () => advance(c)));
        loop(3, 2.1);
      }, root);
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

      return () => {
        mo.disconnect();
        offs.forEach((f) => f());
        ctx.revert();
      };
    },
    prompt: `Build a kanban board where moving a card between columns is a smooth glide and the other cards close the gap, using GSAP 3 and the Flip plugin. Markup: three columns (To do, Doing, Done), each with a header that shows a task count and a body that stacks cards in a flex column with a 6px gap. Each card has a title, a small tag pill and an avatar. To move a card (on click, on a keyboard shortcut, or after a drop): const state = Flip.getState(allCards); targetColumnBody.prepend(card); update the counts from children.length; Flip.from(state, { duration: 0.8, ease: 'power3.inOut', zIndex: 5, toggleClass: 'lift' }). Flip works out the new position of every card across the DOM change, so the moved card travels from one column to the next while the cards below it in the old column slide up and the cards in the new column slide down. The toggleClass option adds a lift class (stronger shadow) only while a card is in motion. No absolute positioning is needed because the layout stays a normal flex flow. Give each card a button or role="button" with a visible focus ring and an aria-live region that announces "Moved to Doing". Under prefers-reduced-motion use duration 0. Call ctx.revert() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  // 5. Shared element: thumbnail to hero
  // ---------------------------------------------------------------------------------------------
  const CAP = [['Fjord at dusk', 'Norway'], ['Salt flats', 'Bolivia'], ['Cedar ridge', 'Japan'], ['Harbor light', 'Portugal'], ['Morning mist', 'Scotland']];
  const shot = (c, i) => `<div class="ph ${c}" data-t="${CAP[i][0]}" data-p="${CAP[i][1]}"></div>`;
  ML.add({
    id: 'gsap-flip-thumb-hero',
    cat: 'gsap-flip',
    title: 'Thumbnail flies to hero',
    sub: 'A shared image swaps places with the hero',
    libs: ['gsap'],
    html: `<div class="app">
  <div class="top"><b>Gallery</b><span class="pill">5 photos</span></div>
  <div class="hero"><div class="slot hs">${shot('a', 0)}</div><p class="cap"><b>Fjord at dusk</b><span>Norway</span></p></div>
  <div class="strip"><div class="slot">${shot('b', 1)}</div><div class="slot">${shot('c', 2)}</div><div class="slot">${shot('d', 3)}</div><div class="slot">${shot('e', 4)}</div></div>
</div>`,
    css: `${SCENES}
.d .app{position:absolute;inset:0;padding:14px;background:var(--ml-surface);display:flex;flex-direction:column;gap:8px}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .top b{font:650 14px/1 var(--ml-font);letter-spacing:-.03em}
.d .pill{padding:4px 8px;border-radius:99px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font:600 9px/1 var(--ml-font)}
.d .hero{position:relative;flex:1;min-height:0}
.d .slot{position:relative;border-radius:10px;box-shadow:var(--ml-shadow)}
.d .hs{position:absolute;inset:0;border-radius:14px;box-shadow:var(--ml-shadow-lg)}
.d .ph{position:absolute;inset:0;border-radius:inherit;cursor:pointer}
.d .ph.fly{box-shadow:var(--ml-shadow-lg)}
.d .cap{position:absolute;left:0;right:0;bottom:0;z-index:6;padding:16px 12px 9px;border-radius:0 0 14px 14px;background:linear-gradient(180deg,rgba(0,40,120,0),rgba(0,40,120,.34));display:flex;flex-direction:column;gap:2px;pointer-events:none;color:#fff}
.d .cap b{font:650 13px/1 var(--ml-font);letter-spacing:-.03em}
.d .cap span{font:500 9px/1 var(--ml-font);opacity:.85}
.d .strip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:7px;height:19%;min-height:38px}
`,
    run: (root, lib) => {
      const { gsap, Flip } = lib;
      gsap.registerPlugin(Flip);
      // Autoplay + yield: a master timeline calls go() on a beat; a real click pauses it for 3s.
      let auto, resume, cur = 0;
      let ctx;
      const offs = [];
      const yieldAuto = () => { if (auto) auto.pause(); if (resume) resume.restart(true); };
      const tap = (el, fn) => {
        const h = (e) => { e.stopPropagation(); yieldAuto(); ctx.add(() => fn(e)); };
        const k = (e) => { e.stopPropagation(); if ((e.key === 'Enter' || e.key === ' ') && el.tagName !== 'BUTTON') { e.preventDefault(); h(e); } };
        el.addEventListener('click', h);
        el.addEventListener('keydown', k);
        offs.push(() => { el.removeEventListener('click', h); el.removeEventListener('keydown', k); });
      };
      const loop = (n, hold) => {
        auto = gsap.timeline({ repeat: -1, delay: hold });
        for (let k = 0; k < n; k++) auto.call(() => ctx.add(() => go((cur + 1) % n)), null, k * hold);
        auto.to({}, { duration: hold }, (n - 1) * hold);
        resume = gsap.delayedCall(3, () => auto.play()).pause();
      };
      const heroSlot = root.querySelector('.hs');
      const slots = Array.from(root.querySelectorAll('.strip .slot'));
      const capB = root.querySelector('.cap b');
      const capS = root.querySelector('.cap span');
      const cap = root.querySelector('.cap');
      const swap = (slot) => {
        const incoming = slot.firstElementChild;
        const outgoing = heroSlot.firstElementChild;
        if (!incoming || !outgoing) return;
        const state = Flip.getState([incoming, outgoing]);
        slot.appendChild(outgoing);
        heroSlot.appendChild(incoming);
        Flip.from(state, { duration: 0.9, ease: 'power3.inOut', scale: true, zIndex: 5, toggleClass: 'fly' });
        gsap.timeline()
          .to(cap, { opacity: 0, y: 4, duration: 0.2, ease: 'power2.in' })
          .add(() => { capB.textContent = incoming.dataset.t; capS.textContent = incoming.dataset.p; })
          .to(cap, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, '+=0.25');
      };
      const go = (i) => { cur = i; swap(slots[i % 4]); };
      ctx = gsap.context(() => {
        slots.forEach((s, k) => tap(s, () => { cur = k; swap(s); }));
        loop(4, 2.3);
      }, root);
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

      return () => {
        mo.disconnect();
        offs.forEach((f) => f());
        ctx.revert();
      };
    },
    prompt: `Build a gallery where clicking a thumbnail makes that exact image fly into the large hero position while the old hero drops into the thumbnail's slot, using GSAP 3 and the Flip plugin. Markup: a hero container with one slot, a strip of four thumbnail slots below, and a caption overlay on the hero. Every image element lives inside a slot, and a slot is just a sized, positioned wrapper (position: relative; the image is position: absolute; inset: 0; border-radius: inherit). Do not set overflow: hidden on the hero or the strip, or the flying image gets clipped. On click: const state = Flip.getState([clickedImage, currentHeroImage]); clickedSlot.appendChild(currentHeroImage); heroSlot.appendChild(clickedImage); Flip.from(state, { duration: 0.9, ease: 'power3.inOut', scale: true, zIndex: 5, toggleClass: 'fly' }). Reparenting is the whole trick: Flip measures both images before and after the move and animates x, y, scaleX and scaleY between them. Cross-fade the caption by tweening its opacity out, swapping the text from data attributes, then tweening it back in after 0.25s. Use buttons or role="button" tiles with arrow-key support and focus rings, and duration 0 under prefers-reduced-motion. For a single clone flying to a target, Flip.fit(element, target, { scale: true, duration: 0.8 }) does the same job. Revert the gsap.context on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  // 6. Reorder by sort (leaderboard)
  // ---------------------------------------------------------------------------------------------
  const lb = (n, name, v, rank) => `<li class="r${rank === 1 ? ' first' : ''}"><span class="rk">${rank}</span><i class="av">${name[0]}</i><span class="nm">${name}</span><span class="bar"><i style="transform:scaleX(${v / 100})"></i></span><b class="sc">${v}</b></li>`;
  ML.add({
    id: 'gsap-flip-leaderboard',
    cat: 'gsap-flip',
    title: 'Leaderboard re-sort',
    sub: 'Rows glide to new ranks as scores count',
    libs: ['gsap'],
    html: `<div class="app">
  <div class="top"><b>Leaderboard</b><span class="pill">Week 42</span></div>
  <ol class="rows">${lb(0, 'Maya R.', 82, 1)}${lb(1, 'Tomas', 74, 2)}${lb(2, 'Priya', 68, 3)}${lb(3, 'Jonas', 55, 4)}${lb(4, 'Lena', 41, 5)}</ol>
</div>`,
    css: `
.d .app{position:absolute;inset:0;padding:14px;background:var(--ml-surface);display:flex;flex-direction:column;gap:10px}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .top b{font:650 14px/1 var(--ml-font);letter-spacing:-.03em}
.d .pill{padding:4px 8px;border-radius:99px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font:600 9px/1 var(--ml-font)}
.d .rows{flex:1;min-height:0;list-style:none;display:flex;flex-direction:column;gap:5px}
.d .r{flex:1 1 0;max-height:58px;display:flex;align-items:center;gap:8px;padding:0 10px 0 8px;background:#fff;border-radius:10px;box-shadow:0 1px 2px rgba(35,15,10,.07);cursor:pointer;transition:background .4s}
.d .r.first{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .r.moving{box-shadow:var(--ml-shadow-lg)}
.d .rk{width:10px;font:600 9.5px/1 var(--ml-mono);color:var(--ml-muted);text-align:center}
.d .first .rk{color:var(--ml-accent-ink)}
.d .av{flex:none;display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:var(--ml-bar);color:var(--ml-ink-2);font:600 9px/1 var(--ml-font);font-style:normal}
.d .first .av{background:var(--ml-accent);color:#fff}
.d .nm{flex:none;width:44px;font:600 10px/1 var(--ml-font);letter-spacing:-.01em;white-space:nowrap}
.d .bar{flex:1;height:5px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .bar i{display:block;height:100%;border-radius:99px;background:var(--ml-accent-2);transform-origin:0 50%}
.d .first .bar i{background:var(--ml-accent)}
.d .sc{flex:none;width:18px;text-align:right;font:600 10px/1 var(--ml-mono)}
`,
    run: (root, lib) => {
      const { gsap, Flip } = lib;
      gsap.registerPlugin(Flip);
      // Autoplay + yield: a master timeline calls go() on a beat; a real click pauses it for 3s.
      let auto, resume, cur = 0;
      let ctx;
      const offs = [];
      const yieldAuto = () => { if (auto) auto.pause(); if (resume) resume.restart(true); };
      const tap = (el, fn) => {
        const h = (e) => { e.stopPropagation(); yieldAuto(); ctx.add(() => fn(e)); };
        const k = (e) => { e.stopPropagation(); if ((e.key === 'Enter' || e.key === ' ') && el.tagName !== 'BUTTON') { e.preventDefault(); h(e); } };
        el.addEventListener('click', h);
        el.addEventListener('keydown', k);
        offs.push(() => { el.removeEventListener('click', h); el.removeEventListener('keydown', k); });
      };
      const loop = (n, hold) => {
        auto = gsap.timeline({ repeat: -1, delay: hold });
        for (let k = 0; k < n; k++) auto.call(() => ctx.add(() => go((cur + 1) % n)), null, k * hold);
        auto.to({}, { duration: hold }, (n - 1) * hold);
        resume = gsap.delayedCall(3, () => auto.play()).pause();
      };
      const list = root.querySelector('.rows');
      const rows = Array.from(root.querySelectorAll('.r'));
      const data = rows.map((el) => ({
        el, v: +el.querySelector('.sc').textContent, bar: el.querySelector('.bar i'), out: el.querySelector('.sc'), rk: el.querySelector('.rk'),
      }));
      // scores per person in the original DOM order: Maya, Tomas, Priya, Jonas, Lena
      const SETS = [[82, 74, 68, 55, 41], [82, 74, 95, 60, 88], [85, 91, 66, 97, 70]];
      const apply = (scores) => {
        const state = Flip.getState(rows);
        data.forEach((d, k) => {
          const o = { v: d.v };
          gsap.to(o, { v: scores[k], duration: 1, ease: 'power2.out', onUpdate: () => { d.out.textContent = Math.round(o.v); } });
          gsap.to(d.bar, { scaleX: scores[k] / 100, duration: 1, ease: 'power3.out' });
          d.v = scores[k];
        });
        data.slice().sort((a, b) => b.v - a.v).forEach((d, k) => {
          list.appendChild(d.el);
          d.rk.textContent = k + 1;
          d.el.classList.toggle('first', k === 0);
        });
        Flip.from(state, { duration: 0.9, ease: 'power2.inOut', prune: true, toggleClass: 'moving' });
      };
      const go = (i) => { cur = i; apply(SETS[i]); };
      ctx = gsap.context(() => {
        // whole-row targets would swallow the stage click that opens the preview, so they only react in the modal / export
        if (!(root.getRootNode() instanceof ShadowRoot)) data.forEach((d, k) => tap(d.el, () => apply(data.map((x, j) => (j === k ? Math.min(99, x.v + 15) : x.v)))));
        loop(SETS.length, 2.6);
      }, root);
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

      return () => {
        mo.disconnect();
        offs.forEach((f) => f());
        ctx.revert();
      };
    },
    prompt: `Build a live leaderboard whose rows glide to their new ranks whenever scores change, using GSAP 3 and the Flip plugin. Markup: an ordered list of rows, each with a rank number, an avatar, a name, a thin progress bar (transform-origin: left, scaleX = score / 100) and a numeric score in a monospace font. When new scores arrive: 1) const state = Flip.getState(rows); 2) tween each score with gsap.to({ v: oldScore }, { v: newScore, duration: 1, ease: 'power2.out', onUpdate }) and write Math.round(v) into the score element, and tween each bar's scaleX with gsap.to(bar, { scaleX: newScore / 100, duration: 1, ease: 'power3.out' }); 3) sort your data and re-append the row elements to the list in the new order, rewriting the rank numbers and toggling a highlight class on first place; 4) Flip.from(state, { duration: 0.9, ease: 'power2.inOut', prune: true, toggleClass: 'moving' }). prune: true skips rows whose position did not change, and toggleClass adds a lifted shadow to the rows that move. The rows keep a normal flex column flow, so no absolute positioning is needed. Use tabular-nums or a mono font so counting numbers do not jitter, give the list aria-live="polite", and under prefers-reduced-motion set the Flip duration and the count duration to 0. Revert the gsap.context on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  // 7. Tab underline + content resize
  // ---------------------------------------------------------------------------------------------
  const av = (c, n) => `<i class="av">${c}</i><span>${n}</span>`;
  ML.add({
    id: 'gsap-flip-tab-indicator',
    cat: 'gsap-flip',
    title: 'Tab underline and panel',
    sub: 'The indicator glides, the panel resizes',
    libs: ['gsap'],
    html: `<div class="app">
  <div class="tabs" role="tablist"><button class="tab is-on" type="button" role="tab">Overview<i class="ind"></i></button><button class="tab" type="button" role="tab">Usage</button><button class="tab" type="button" role="tab">Billing</button><button class="tab" type="button" role="tab">Team</button></div>
  <div class="panel" role="tabpanel">
    <div class="tc"><div class="stats"><div><b>2.4k</b><span>Visits</span></div><div><b>18%</b><span>Growth</span></div><div><b>$1.2k</b><span>Revenue</span></div></div></div>
    <div class="tc off"><div class="chart"><i style="height:38%"></i><i style="height:56%"></i><i style="height:44%"></i><i style="height:72%"></i><i style="height:62%"></i><i style="height:88%"></i><i style="height:70%"></i></div><p class="lab">Requests this week</p></div>
    <div class="tc off"><ul class="inv"><li><span>Pro plan</span><b>$29</b></li><li><span>Extra seats x4</span><b>$48</b></li><li><span>Tax</span><b>$6</b></li><li class="tot"><span>Total</span><b>$83</b></li></ul></div>
    <div class="tc off"><ul class="ppl"><li>${av('M', 'Maya R.')}<em>Owner</em></li><li>${av('T', 'Tomas')}<em>Editor</em></li></ul></div>
  </div>
  <p class="foot">Recent activity</p>
  <ul class="log"><li><i></i><span style="width:62%"></span><em>2m</em></li><li><i></i><span style="width:44%"></span><em>1h</em></li></ul>
</div>`,
    css: `
.d .app{position:absolute;inset:0;padding:8% 5%;background:var(--ml-surface);display:flex;flex-direction:column;gap:10px}
.d .tabs{display:flex;gap:2px;border-bottom:1px solid var(--ml-line)}
.d .tab{position:relative;border:0;background:none;padding:8px 10px 9px;font:600 10.5px/1 var(--ml-font);letter-spacing:-.01em;color:var(--ml-muted);cursor:pointer;transition:color .3s}
.d .tab.is-on{color:var(--ml-ink)}
.d .ind{position:absolute;left:8px;right:8px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .panel{position:relative;background:#fff;border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .tc{padding:12px}
.d .tc.off{display:none}
.d .stats{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.d .stats b{display:block;font:650 17px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-accent-ink)}
.d .stats span{display:block;margin-top:5px;font:500 9px/1 var(--ml-font);color:var(--ml-muted)}
.d .chart{height:58px;display:flex;align-items:flex-end;gap:6px}
.d .chart i{flex:1;border-radius:4px 4px 2px 2px;background:var(--ml-accent-line)}
.d .chart i:nth-child(6){background:var(--ml-accent)}
.d .lab{margin-top:8px;font:500 9px/1 var(--ml-font);color:var(--ml-muted)}
.d .inv,.d .ppl{list-style:none;display:flex;flex-direction:column;gap:9px}
.d .inv li,.d .ppl li{display:flex;align-items:center;justify-content:space-between;gap:8px;font:500 10px/1 var(--ml-font)}
.d .inv b{font:600 10px/1 var(--ml-mono)}
.d .inv .tot{padding-top:9px;border-top:1px solid var(--ml-line);font-weight:650}
.d .ppl li{justify-content:flex-start}
.d .ppl .av{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font:600 9px/1 var(--ml-font);font-style:normal}
.d .ppl em{margin-left:auto;font:500 9px/1 var(--ml-font);font-style:normal;color:var(--ml-muted)}
.d .foot{font:600 9px/1 var(--ml-font);color:var(--ml-muted)}
.d .log{list-style:none;display:flex;flex-direction:column;gap:7px}
.d .log li{display:flex;align-items:center;gap:8px}
.d .log i{flex:none;width:8px;height:8px;border-radius:50%;background:var(--ml-accent-line)}
.d .log span{height:5px;border-radius:99px;background:var(--ml-bar)}
.d .log em{margin-left:auto;font:500 8.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
`,
    run: (root, lib) => {
      const { gsap, Flip } = lib;
      gsap.registerPlugin(Flip);
      // Autoplay + yield: a master timeline calls go() on a beat; a real click pauses it for 3s.
      let auto, resume, cur = 0;
      let ctx;
      const offs = [];
      const yieldAuto = () => { if (auto) auto.pause(); if (resume) resume.restart(true); };
      const tap = (el, fn) => {
        const h = (e) => { e.stopPropagation(); yieldAuto(); ctx.add(() => fn(e)); };
        const k = (e) => { e.stopPropagation(); if ((e.key === 'Enter' || e.key === ' ') && el.tagName !== 'BUTTON') { e.preventDefault(); h(e); } };
        el.addEventListener('click', h);
        el.addEventListener('keydown', k);
        offs.push(() => { el.removeEventListener('click', h); el.removeEventListener('keydown', k); });
      };
      const loop = (n, hold) => {
        auto = gsap.timeline({ repeat: -1, delay: hold });
        for (let k = 0; k < n; k++) auto.call(() => ctx.add(() => go((cur + 1) % n)), null, k * hold);
        auto.to({}, { duration: hold }, (n - 1) * hold);
        resume = gsap.delayedCall(3, () => auto.play()).pause();
      };
      const tabs = Array.from(root.querySelectorAll('.tab'));
      const ind = root.querySelector('.ind');
      const panels = Array.from(root.querySelectorAll('.tc'));
      const panel = root.querySelector('.panel');
      const foot = root.querySelector('.foot');
      const log = root.querySelector('.log');
      const show = (t) => {
        const state = Flip.getState([ind, panel, foot, log].concat(panels));
        tabs.forEach((b, k) => b.classList.toggle('is-on', k === t));
        tabs[t].appendChild(ind);
        panels.forEach((p, k) => p.classList.toggle('off', k !== t));
        Flip.from(state, {
          duration: 0.7, ease: 'power3.inOut', scale: false, absoluteOnLeave: true,
          onEnter: (els) => gsap.fromTo(els, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.45, delay: 0.25, ease: 'power3.out', overwrite: 'auto' }),
          onLeave: (els) => gsap.to(els, { opacity: 0, duration: 0.25, ease: 'power2.in', overwrite: 'auto' }),
        });
      };
      const go = (i) => { cur = i; show(i); };
      ctx = gsap.context(() => {
        tabs.forEach((b, k) => tap(b, () => { cur = k; show(k); }));
        loop(4, 2.3);
      }, root);
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

      return () => {
        mo.disconnect();
        offs.forEach((f) => f());
        ctx.revert();
      };
    },
    prompt: `Build a tab bar whose active underline glides between tabs while the content panel smoothly resizes to fit each tab, using GSAP 3 and the Flip plugin. Markup: a row of role="tab" buttons, each position: relative, a single <i class="ind"> indicator (position: absolute; left: 8px; right: 8px; bottom: -1px; height: 2px; accent color), then a panel (position: relative; overflow: hidden; no padding of its own) holding one .tc content block per tab with padding on the block, and a footer line below the panel. On tab change: const state = Flip.getState([indicator, panel, footer, ...blocks]); set the active class, move the indicator into the new tab with newTab.appendChild(indicator), toggle a display: none class so only the active block shows; Flip.from(state, { duration: 0.7, ease: 'power3.inOut', scale: false, absoluteOnLeave: true, onEnter: els => gsap.fromTo(els, { opacity: 0, y: 8 }, { opacity: 1, y: 0, delay: 0.25 }), onLeave: els => gsap.to(els, { opacity: 0 }) }). The indicator tweens x and width, the panel tweens its real height (scale: false), the footer slides to follow, the outgoing block fades while taken out of flow by absoluteOnLeave and the incoming block fades up after the resize starts. Add arrow-key navigation, aria-selected and aria-controls, and duration 0 under prefers-reduced-motion. Revert the gsap.context on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  // 8. Add to cart fly
  // ---------------------------------------------------------------------------------------------
  const BAG = ico('<path d="M6 8h12l1 12H5z"/><path d="M9 8a3 3 0 0 1 6 0"/>');
  const GOODS = [
    ico('<path d="M6 8h12l1 12H5z"/><path d="M9 8a3 3 0 0 1 6 0"/>'),
    ico('<path d="M10 3h4v3l2 3v11H8V9l2-3z"/><path d="M8 13h8"/>'),
    ico('<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>'),
  ];
  const good = (k, name, price, on) => `<div class="p"><div class="thumb">${GOODS[k]}</div><div class="info"><b>${name}</b><span>${price}</span></div><button class="add${on ? ' is-added' : ''}" type="button">${on ? 'Added' : 'Add'}</button></div>`;
  ML.add({
    id: 'gsap-flip-add-to-cart',
    cat: 'gsap-flip',
    title: 'Add to cart fly',
    sub: 'The product flies into the cart badge',
    libs: ['gsap'],
    html: `<div class="app">
  <div class="top"><b>Studio shop</b><div class="cart" aria-label="Cart">${BAG}<i class="badge">1</i></div></div>
  <div class="items">${good(0, 'Canvas tote', '$28', true)}${good(1, 'Steel bottle', '$24', false)}${good(2, 'Studio headphones', '$119', false)}</div>
  <div class="fx"></div>
</div>`,
    css: `
.d .app{position:absolute;inset:0;padding:14px;background:var(--ml-surface);display:flex;flex-direction:column;gap:10px}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .top b{font:650 14px/1 var(--ml-font);letter-spacing:-.03em}
.d .cart{position:relative;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#fff;box-shadow:var(--ml-shadow);color:var(--ml-ink)}
.d .cart svg{width:16px;height:16px}
.d .badge{position:absolute;top:-4px;right:-4px;min-width:15px;height:15px;padding:0 4px;border-radius:99px;background:var(--ml-accent);color:#fff;font:600 9px/15px var(--ml-font);font-style:normal;text-align:center}
.d .badge.zero{opacity:0}
.d .items{flex:1;min-height:0;display:flex;flex-direction:column;gap:7px}
.d .p{flex:1 1 0;min-height:0;max-height:92px;display:flex;align-items:center;gap:10px;padding:7px;background:#fff;border-radius:13px;box-shadow:var(--ml-shadow)}
.d .thumb{flex:none;min-height:0;align-self:stretch;aspect-ratio:1;display:grid;place-items:center;border-radius:9px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .thumb svg{width:50%;height:auto;aspect-ratio:1}
.d .info{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.d .info b{font:600 11px/1.1 var(--ml-font);letter-spacing:-.02em;white-space:nowrap}
.d .info span{font:500 9.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .add{flex:none;min-width:44px;border:0;border-radius:99px;padding:7px 11px;background:var(--ml-accent);color:#fff;font:600 10px/1 var(--ml-font);cursor:pointer;transition:background .3s,color .3s}
.d .add.is-added{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .fx{position:absolute;inset:0;pointer-events:none;z-index:5}
.d .fly{position:absolute;box-shadow:var(--ml-shadow-lg);background:var(--ml-accent-soft)}
`,
    run: (root, lib) => {
      const { gsap, Flip } = lib;
      gsap.registerPlugin(Flip);
      // Autoplay + yield: a master timeline calls go() on a beat; a real click pauses it for 3s.
      let auto, resume, cur = 0;
      let ctx;
      const offs = [];
      const yieldAuto = () => { if (auto) auto.pause(); if (resume) resume.restart(true); };
      const tap = (el, fn) => {
        const h = (e) => { e.stopPropagation(); yieldAuto(); ctx.add(() => fn(e)); };
        const k = (e) => { e.stopPropagation(); if ((e.key === 'Enter' || e.key === ' ') && el.tagName !== 'BUTTON') { e.preventDefault(); h(e); } };
        el.addEventListener('click', h);
        el.addEventListener('keydown', k);
        offs.push(() => { el.removeEventListener('click', h); el.removeEventListener('keydown', k); });
      };
      const loop = (n, hold) => {
        auto = gsap.timeline({ repeat: -1, delay: hold });
        for (let k = 0; k < n; k++) auto.call(() => ctx.add(() => go((cur + 1) % n)), null, k * hold);
        auto.to({}, { duration: hold }, (n - 1) * hold);
        resume = gsap.delayedCall(3, () => auto.play()).pause();
      };
      const cart = root.querySelector('.cart');
      const cartIcon = cart.querySelector('svg');
      const badge = root.querySelector('.badge');
      const fx = root.querySelector('.fx');
      const prods = Array.from(root.querySelectorAll('.p'));
      const btns = prods.map((p) => p.querySelector('.add'));
      const added = [true, false, false];
      let count = 1;
      const paint = (bump) => {
        badge.textContent = count;
        badge.classList.toggle('zero', !count);
        if (bump) gsap.fromTo(badge, { scale: 1.8 }, { scale: 1, duration: 0.6, ease: 'back.out(3)', overwrite: 'auto' });
        if (bump) gsap.fromTo(cart, { y: 0 }, { y: -2, duration: 0.12, yoyo: true, repeat: 1, ease: 'power1.out' });
      };
      const fly = (k) => {
        const src = prods[k].querySelector('.thumb');
        const rr = root.getBoundingClientRect();
        const sc = rr.width / root.offsetWidth || 1;
        const r = src.getBoundingClientRect();
        const el = src.cloneNode(true);
        el.classList.add('fly');
        el.style.left = (r.left - rr.left) / sc + 'px';
        el.style.top = (r.top - rr.top) / sc + 'px';
        el.style.width = r.width / sc + 'px';
        el.style.height = r.height / sc + 'px';
        fx.appendChild(el);
        // Flip.fit measures where el would have to be to sit exactly on the cart icon (position + size)
        const v = Flip.fit(el, cartIcon, { scale: true, getVars: true });
        gsap.timeline({ onComplete: () => { el.remove(); count++; paint(true); } })
          .to(el, { x: v.x, duration: 0.9, ease: 'power2.in' }, 0)
          .to(el, { y: v.y, duration: 0.9, ease: 'power2.out' }, 0)
          .to(el, { scaleX: v.scaleX, scaleY: v.scaleY, duration: 0.9, ease: 'power2.inOut' }, 0)
          .to(el, { opacity: 0.2, duration: 0.2, ease: 'none' }, 0.7);
      };
      const addItem = (k) => {
        if (added[k]) return;
        added[k] = true;
        btns[k].textContent = 'Added';
        btns[k].classList.add('is-added');
        fly(k);
      };
      const clear = () => {
        added.fill(false);
        count = 0;
        btns.forEach((b) => { b.textContent = 'Add'; b.classList.remove('is-added'); });
        paint(false);
      };
      const go = (i) => { cur = i; if (i === 3) clear(); else addItem(i); };
      ctx = gsap.context(() => {
        btns.forEach((b, k) => tap(b, () => addItem(k)));
        loop(4, 2.2);
      }, root);
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

      return () => {
        mo.disconnect();
        offs.forEach((f) => f());
        ctx.revert();
      };
    },
    prompt: `Build an add-to-cart interaction where the product image visibly flies into the cart icon and the cart badge bumps, using GSAP 3 and the Flip plugin (Flip.fit). Markup: a header with a cart icon button (position: relative, with a small count badge) and product rows, each with a thumbnail, a name, a price and an Add button; an empty absolutely positioned overlay layer (position: absolute; inset: 0; pointer-events: none; z-index: 5) over the page. On Add: clone the thumbnail, place the clone in the overlay at the thumbnail's exact rect, then const v = Flip.fit(clone, cartIcon, { scale: true, getVars: true }) to get the x, y, scaleX and scaleY that make the clone sit exactly on the cart icon. Animate it with a timeline so the path curves: tween x with ease 'power2.in' and y with ease 'power2.out' over 0.9s from the same start (the item rises first, then sweeps into the cart), tween scaleX and scaleY with 'power2.inOut', and fade it out at the end. In onComplete remove the clone, increment the count and play gsap.fromTo(badge, { scale: 1.8 }, { scale: 1, duration: 0.6, ease: 'back.out(3)' }) plus a tiny cart nudge. Change the button to an Added state. Real buttons with focus rings, an aria-live status that says "Added Canvas tote to cart", and under prefers-reduced-motion skip the flight and only bump the badge. Revert the gsap.context on unmount.`,
  });
})();
