(() => {
// Mobile gestures. Phone close-ups (framing A bottom crop, B whole phone, C top crop) where a real
// pointer gesture drives the UI 1:1 and a demo finger plays it when nobody is touching the stage.
// Pointer events everywhere, so mouse and touch both work.

const IP = {
  archive: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
  trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
  pin: '<path d="M12 17v5"/><path d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  back: '<path d="m15 18-6-6 6-6"/>',
  next: '<path d="m9 18 6-6-6-6"/>',
  share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>',
  copy: '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  undo: '<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>',
  box: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
  mappin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  coffee: '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>',
  book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
  folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
  plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  grip: '<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>',
  bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  bike: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>',
  info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
  clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  zoom: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M11 8v6"/><path d="M8 11h6"/>',
  home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
};
const ic = (n) => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + IP[n] + '</svg>';

// Shared phone look + demo finger + tiny app atoms. Every card prepends this to its own css.
const PHONE_CSS = `
.d{background:radial-gradient(90% 70% at 50% 100%,var(--ml-accent-soft),transparent 70%),var(--ml-surface)}
.d .ph{position:absolute;left:50%;transform:translateX(-50%);overflow:hidden;background:#fff;box-shadow:0 0 0 5px #fff,0 0 0 6px var(--ml-line),var(--ml-shadow-lg);font-size:10px;line-height:1.3;user-select:none;-webkit-user-select:none}
.d .ph.a{width:58%;min-width:160px;max-width:300px;top:-16%;bottom:6%;border-radius:30px}
.d .ph.b{height:92%;top:4%;aspect-ratio:9/19.5;border-radius:26px}
.d .ph.c{width:58%;min-width:160px;max-width:300px;top:6%;bottom:-16%;border-radius:30px}
.d .ph::after{content:"";position:absolute;left:0;right:0;bottom:0;height:26px;background:linear-gradient(rgba(255,255,255,0),#fff 62%);z-index:55;pointer-events:none}
.d .ph.c::after{display:none}
.d .hi{position:absolute;left:30%;width:40%;height:4px;bottom:6px;border-radius:2px;background:rgba(29,29,31,.85);z-index:60;pointer-events:none}
.d .sb{display:flex;align-items:center;justify-content:space-between;padding:9px 18px 0;font:600 9px/1 var(--ml-font)}
.d .sb span{display:flex;gap:2px;align-items:center}
.d .sb i{display:block;height:6px;border-radius:2px;background:var(--ml-ink)}
.d .fg{position:absolute;left:0;top:0;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;background:rgba(29,29,31,.16);border:2px solid #fff;box-shadow:0 2px 8px rgba(35,15,10,.22);opacity:0;pointer-events:none;z-index:90;transition:opacity .22s ease,scale 120ms ease-out}
.d .av{flex:none;width:26px;height:26px;border-radius:50%;display:grid;place-items:center;font:600 9px/1 var(--ml-font);color:var(--ml-accent-ink);background:var(--ml-accent-soft)}
.d .ln{height:5px;border-radius:3px;background:var(--ml-bar-2)}
.d .tx b{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .lt{font:700 20px/1.1 var(--ml-font);letter-spacing:-.03em}
.d svg{width:14px;height:14px;display:block}
`;
const SB = '<div class="sb"><b>9:41</b><span><i style="width:9px"></i><i style="width:6px"></i><i style="width:13px"></i></span></div>';
const FG = '<i class="fg"></i>';

// ---------------------------------------------------------------- 1. sheet detents
const plc = (icn, name, sub, r) => `<div class="pl"><span class="ti">${ic(icn)}</span><div><b>${name}</b><em>${sub}</em></div><u>${r}</u></div>`;

ML.add({
  id: 'mobile-gestures-sheet-detents',
  cat: 'mobile-gestures',
  title: 'Sheet detents',
  sub: 'Flick a sheet between peek, half, full',
  html: `<div class="ph a">
<div class="map"><i class="rd r1"></i><i class="rd r2"></i><i class="rd r3"></i><i class="bk k1"></i><i class="bk k2"></i><i class="bk k3"></i><i class="pn p1"></i><i class="pn p2"></i><i class="me"></i></div>
<div class="dim"></div>
<div class="sh"><i class="gr"></i>
<div class="sr">${ic('search')}<span>Search places</span></div>
<h5>Nearby</h5>
${plc('coffee', 'Cafe Alma', 'Coffee - 0.2 mi', '4.8')}${plc('bag', 'North Pier Bakery', 'Bakery - 0.4 mi', '4.6')}${plc('book', 'Loop Books', 'Bookstore - 0.6 mi', '4.9')}${plc('mappin', 'Harbor Market', 'Grocery - 0.8 mi', '4.5')}
</div><i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .map{position:absolute;inset:0;background:linear-gradient(180deg,#E8F0FA,#DFE8F5);overflow:hidden}
.d .rd{position:absolute;background:#fff;border-radius:6px}
.d .r1{left:-10%;width:130%;top:36%;height:10px;transform:rotate(-12deg)}
.d .r2{left:-10%;width:130%;top:58%;height:8px;transform:rotate(7deg)}
.d .r3{top:-10%;height:130%;left:38%;width:9px;transform:rotate(14deg)}
.d .bk{position:absolute;border-radius:8px;background:var(--ml-bar-2);border:1px solid #fff}
.d .k1{left:6%;top:44%;width:26%;height:12%}
.d .k2{right:6%;top:24%;width:30%;height:14%}
.d .k3{right:8%;top:62%;width:24%;height:10%}
.d .pn{position:absolute;width:12px;height:12px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:var(--ml-accent-2);box-shadow:0 2px 4px rgba(255,68,51,.3)}
.d .p1{left:22%;top:40%}
.d .p2{right:26%;top:30%}
.d .me{position:absolute;left:52%;top:50%;width:12px;height:12px;margin:-6px;border-radius:50%;background:var(--ml-accent);border:2.5px solid #fff;box-shadow:0 0 0 8px rgba(255,68,51,.16)}
.d .dim{position:absolute;inset:0;background:var(--ml-ink);opacity:0;pointer-events:none}
.d .sh{position:absolute;left:0;right:0;bottom:0;height:76%;padding:7px 14px 0;background:#fff;border-radius:22px 22px 0 0;box-shadow:0 -6px 24px rgba(35,15,10,.16);touch-action:none;will-change:transform;cursor:grab;overflow:hidden}
.d .gr{display:block;width:32px;height:4px;margin:0 auto 9px;border-radius:2px;background:var(--ml-bar)}
.d .sr{display:flex;align-items:center;gap:6px;height:26px;padding:0 9px;border-radius:9px;background:var(--ml-bar-2);color:var(--ml-muted);font-size:11px}
.d h5{margin:11px 0 3px;font:700 13px/1.1 var(--ml-font);letter-spacing:-.02em}
.d .pl{display:flex;align-items:center;gap:9px;height:40px;border-bottom:1px solid var(--ml-line)}
.d .ti{flex:none;display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .pl div{flex:1;min-width:0}
.d .pl b{display:block;font-size:11px;font-weight:600}
.d .pl em{display:block;font-style:normal;font-size:9px;color:var(--ml-muted)}
.d .pl u{text-decoration:none;font:600 10px/1 var(--ml-mono);color:var(--ml-accent-ink)}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const ph = root.querySelector('.ph');
    const sh = root.querySelector('.sh');
    const dim = root.querySelector('.dim');
    let Y = [0, 0, 0], y = 0, y0 = 0;
    const geo = () => {
      const P = ph.clientHeight, H = sh.offsetHeight;
      Y = [0, H - 0.46 * P, H - 0.22 * P];
    };
    const render = (v) => {
      y = v;
      sh.style.transform = 'translateY(' + v + 'px)';
      dim.style.opacity = Math.max(0, Math.min(1, 1 - v / Y[2])) * 0.4;
    };
    const band = (v) => (v < 0 ? v * 0.22 : v > Y[2] ? Y[2] + (v - Y[2]) * 0.22 : v);
    const snap = (vy) => {
      const p = y + vy * 0.18;
      let t = Y[0];
      for (const d of Y) if (Math.abs(d - p) < Math.abs(t - p)) t = d;
      return spr(y, t, vy, render, 200, 19);
    };
    dragger(sh, {
      down: () => { geo(); y0 = y; },
      move: (dx, dy) => render(band(y0 + dy)),
      up: (dx, dy, vx, vy) => snap(vy),
    });
    const fpos = (p) => { const a = at(sh, 0.5, 0); fgo(a[0], a[1] + 12, p, 1); };
    const drag = async (to, d, v) => {
      const from = y;
      fpos(1);
      await hold(140);
      await tw(d, (k) => { render(from + (to - from) * k); fpos(1); }, ezio);
      fgo(...at(sh, 0.5, 0), 0, 0);
      await snap(v);
    };
    const reset = () => { geo(); sp++; render(Y[2]); fg.style.opacity = 0; };
    const script = async () => {
      fpos(0);
      await hold(700);
      await drag(Y[2] - 0.55 * (Y[2] - Y[1]), 520, -620);
      await hold(1100);
      fpos(0);
      await hold(300);
      await drag(Y[1] * 0.62, 480, -820);
      await hold(1200);
      fpos(0);
      await hold(300);
      await drag(Y[1] * 0.25, 460, 980);
      await hold(1300);
    };
    play(reset, script);
  },
  prompt: `Build a map-style bottom sheet with three detents: peek (about 22 percent of the viewport), half (46 percent) and full (about 90 percent, leaving a strip of the map visible). The sheet is a fixed element at the bottom with a 32x4px grabber, 22px top radius and a soft upward shadow; its position is only ever changed with transform: translateY(), never top or height. Use pointer events: on pointerdown call setPointerCapture and set touch-action: none on the sheet, follow the finger 1:1 on pointermove, and beyond the first and last detent apply a rubber band (distance * 0.22). Track velocity over the last 100ms of moves. On pointerup project the end position as y + velocity * 0.18s and snap to the nearest detent with a spring (stiffness 200, damping 19, seeded with the release velocity), so a short flick travels a whole detent. Drive a dim layer behind the sheet from the same position: opacity = 0.4 * progress between peek and full. If the sheet holds a scrolling list, only let it scroll at the full detent and hand the drag back to the sheet when scrollTop is 0. Use env(safe-area-inset-bottom) for bottom padding, keep the grabber focusable with ArrowUp and ArrowDown moving one detent, and respect prefers-reduced-motion by switching detents without the spring. Plain HTML, CSS and JS, no libraries.`,
});

// ---------------------------------------------------------------- 2. swipe actions
const mrow = (av, who, subj, time) => `<div class="it"><div class="in"><div class="rw">
<div class="pl2" data-tap>${ic('pin')}<span>Pin</span></div>
<div class="ab" data-tap>${ic('archive')}<span>Archive</span></div>
<div class="rf"><div class="dl" data-tap>${ic('trash')}<span>Delete</span></div></div>
<div class="fr" data-tap><span class="av">${av}</span><div class="tx"><b>${who}</b><em>${subj}</em><i class="ln"></i></div><u>${time}</u><s>${ic('pin')}</s></div>
</div></div></div>`;

ML.add({
  id: 'mobile-gestures-swipe-actions',
  cat: 'mobile-gestures',
  title: 'Swipe actions',
  sub: 'Rows reveal actions, a full swipe deletes',
  html: `<div class="ph a"><div class="hd"><div class="lt">Inbox</div></div><div class="ls">
${mrow('MR', 'Maya R.', 'Q4 invoice draft is ready', '9:12')}${mrow('TO', 'Tomas', 'Standup moved to 10:30', '8:47')}${mrow('PN', 'Priya N.', 'Photos from Saturday', 'Tue')}${mrow('NW', 'Northwind', 'Your order has shipped', 'Tue')}${mrow('LK', 'Lena K.', 'Lunch on Thursday?', 'Mon')}
</div><i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .hd{padding:44px 14px 6px}
.d .it{display:grid;grid-template-rows:1fr;transition:grid-template-rows 420ms var(--ml-ease)}
.d .it.gone{grid-template-rows:0fr}
.d .in{min-height:0;overflow:hidden}
.d .rw{position:relative;height:46px;overflow:hidden;border-top:1px solid var(--ml-line);background:var(--ml-surface)}
.d .fr{position:absolute;inset:0;display:flex;align-items:center;gap:9px;padding:0 14px;background:#fff;touch-action:pan-y;will-change:transform;cursor:grab}
.d .tx{flex:1;min-width:0;display:grid;gap:3px}
.d .tx b{font-size:11px;font-weight:600}
.d .tx em{font-style:normal;font-size:9.5px;color:var(--ml-ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .tx .ln{width:70%}
.d .fr u{align-self:flex-start;margin-top:9px;text-decoration:none;font-size:9px;color:var(--ml-muted)}
.d .fr s{display:none;position:absolute;left:3px;top:19px;width:8px;height:8px;color:var(--ml-accent)}
.d .fr s svg{width:8px;height:8px}
.d .fr.pinned s{display:block}
.d .pl2,.d .ab,.d .dl{position:absolute;top:0;bottom:0;width:48px;display:grid;place-content:center;justify-items:center;gap:2px;color:#fff;font:600 9px/1 var(--ml-font)}
.d .pl2{left:0;background:var(--ml-accent)}
.d .ab{right:48px;background:var(--ml-muted)}
.d .rf{position:absolute;inset:0;background:#FF3B30;transform:translateX(calc(100% - 48px));transition:transform 360ms var(--ml-ease)}
.d .rf.full{transform:translateX(0)}
.d .dl{right:0;background:transparent}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const rows = [...root.querySelectorAll('.it')].map((it) => ({ it, fr: it.querySelector('.fr'), rf: it.querySelector('.rf'), x: 0, W: 0, pinned: false }));
    const set = (r, x) => {
      r.x = x;
      r.fr.style.transform = 'translateX(' + x + 'px)';
      r.rf.classList.toggle('full', x < -r.W * 0.66);
    };
    const kill = async (r, v) => {
      await spr(r.x, -r.W, v, (x) => set(r, x), 160, 22);
      r.it.classList.add('gone');
    };
    const settle = (r, vx) => {
      const p = r.x + vx * 0.12;
      if (r.x < -r.W * 0.66 || (vx < -1000 && r.x < -80)) return kill(r, vx);
      if (r.x > r.W * 0.66) { r.pinned = !r.pinned; r.fr.classList.toggle('pinned', r.pinned); return spr(r.x, 0, vx, (x) => set(r, x)); }
      const t = p < -48 ? -96 : p > 24 ? 48 : 0;
      return spr(r.x, t, vx, (x) => set(r, x), 200, 20);
    };
    rows.forEach((r) => {
      let x0 = 0;
      dragger(r.fr, {
        down: () => { r.W = r.fr.offsetWidth; x0 = r.x; },
        move: (dx) => set(r, Math.max(-r.W, Math.min(r.W, x0 + dx))),
        up: (dx, dy, vx) => (Math.abs(dx) < 4 ? spr(r.x, 0, 0, (x) => set(r, x), 200, 22) : settle(r, vx)),
      });
      r.it.querySelector('.dl').addEventListener('click', () => { r.W = r.fr.offsetWidth; kill(r, -600); });
      r.it.querySelector('.ab').addEventListener('click', () => { r.W = r.fr.offsetWidth; kill(r, -600); });
      r.it.querySelector('.pl2').addEventListener('click', () => { r.pinned = !r.pinned; r.fr.classList.toggle('pinned', r.pinned); spr(r.x, 0, 0, (x) => set(r, x)); });
    });
    const reset = () => {
      sp++;
      rows.forEach((r) => { r.W = r.fr.offsetWidth; set(r, 0); r.pinned = false; r.fr.classList.remove('pinned'); r.it.classList.remove('gone'); });
      fg.style.opacity = 0;
    };
    const swipe = async (r, to, d, v) => {
      r.W = r.fr.offsetWidth;
      const a = at(r.fr, 0.62, 0.5), from = r.x, sx = a[0] - r.x;
      fgo(a[0], a[1], 0, 1);
      await hold(450);
      fgo(a[0], a[1], 1, 1);
      await hold(140);
      await tw(d, (k) => { set(r, from + (to - from) * k); fgo(sx + r.x, a[1], 1, 1); }, ezio);
      fgo(sx + r.x, a[1], 0, 0);
      await settle(r, v);
    };
    const script = async () => {
      await hold(600);
      await swipe(rows[1], -80, 520, -260);
      await hold(1300);
      await spr(rows[1].x, 0, 0, (x) => set(rows[1], x), 200, 22);
      await swipe(rows[0], 40, 440, 180);
      await hold(1100);
      await spr(rows[0].x, 0, 0, (x) => set(rows[0], x), 200, 22);
      await swipe(rows[2], -rows[2].W * 0.78, 560, -900);
      await hold(1700);
    };
    play(reset, script);
  },
  prompt: `Build swipeable list rows like a mail inbox. Each row is a relatively positioned container with overflow: hidden holding two layers: action buttons underneath (Archive and Delete fixed to the right edge, Pin fixed to the left, each about 48px wide) and the row content on top, moved only with transform: translateX(). Use pointer events with setPointerCapture and touch-action: pan-y on the row so vertical page scroll still works. Follow the finger 1:1. On release project the end position with x + velocity * 0.12s: past minus 48px snap open to minus 96px, past 24px snap the Pin side open to 48px, otherwise snap closed, using a spring (stiffness 200, damping 20). A full swipe (past about 65 percent of the row width, or a fast flick) expands the red Delete layer over the whole revealed area, flies the row off with a spring, then collapses it by animating grid-template-rows from 1fr to 0fr with the inner wrapper at min-height: 0 and overflow: hidden. Tapping an open row closes it. Give every action a real button with an aria-label, offer the same actions in a menu for keyboard and screen reader users, and skip the spring under prefers-reduced-motion. Plain HTML, CSS and JS, no libraries.`,
});

// ---------------------------------------------------------------- 3. pull to refresh
const orow = (id, what, st, cls) => `<div class="${cls || 'or'}"><div class="ow"><div class="oi"><span class="av">${ic('box')}</span><div class="tx"><b>${id}</b><em>${what}</em></div><u>${st}</u></div></div></div>`;

ML.add({
  id: 'mobile-gestures-pull-refresh',
  cat: 'mobile-gestures',
  title: 'Pull to refresh',
  sub: 'Rubber band, bars fill, new rows land',
  html: `<div class="ph a"><div class="hd"><div class="lt">Orders</div></div>
<div class="pi"><i></i><i></i><i></i><i></i><i></i></div>
<div class="ls">
${orow('#4821', 'Linen shirt x2', 'New', 'or nw')}${orow('#4820', 'Ceramic mug set', 'Packing', 'or nw')}
${orow('#4819', 'Canvas tote', 'Shipped', '')}${orow('#4818', 'Desk lamp', 'Delivered', '')}${orow('#4817', 'Wool socks, 3 pairs', 'Delivered', '')}${orow('#4816', 'Notebook bundle', 'Delivered', '')}
</div><i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .hd{position:relative;z-index:2;padding:44px 14px 8px;background:#fff}
.d .pi{position:absolute;left:0;right:0;top:74px;height:40px;display:flex;justify-content:center;align-items:center;gap:4px}
.d .pi i{width:3px;height:18px;border-radius:2px;background:var(--ml-accent);opacity:.25;transform:scaleY(.3)}
.d .pi.go i{opacity:1;animation:mgbar 760ms ease-in-out infinite}
.d .pi.go i:nth-child(2){animation-delay:90ms}.d .pi.go i:nth-child(3){animation-delay:180ms}.d .pi.go i:nth-child(4){animation-delay:270ms}.d .pi.go i:nth-child(5){animation-delay:360ms}
@keyframes mgbar{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}
.d .ls{position:absolute;left:0;right:0;top:74px;bottom:0;background:#fff;touch-action:none;will-change:transform;cursor:grab}
.d .or{display:grid;grid-template-rows:1fr;transition:grid-template-rows 520ms var(--ml-ease)}
.d .or.nw{grid-template-rows:0fr}
.d .or.nw.on{grid-template-rows:1fr}
.d .ow{min-height:0;overflow:hidden}
.d .oi{display:flex;align-items:center;gap:9px;height:44px;padding:0 14px;border-top:1px solid var(--ml-line)}
.d .or.nw .oi{opacity:0;transition:opacity 420ms ease 140ms}
.d .or.nw.on .oi{opacity:1}
.d .oi .av svg{width:13px;height:13px}
.d .tx{flex:1;min-width:0}
.d .tx b{display:block;font-size:11px;font-weight:600}
.d .tx em{display:block;font-style:normal;font-size:9.5px;color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .oi u{text-decoration:none;font-size:9.5px;font-weight:600;color:var(--ml-muted)}
.d .or.nw u{color:var(--ml-accent-ink)}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const ls = root.querySelector('.ls');
    const pi = root.querySelector('.pi');
    const bars = [...pi.children];
    const news = [...root.querySelectorAll('.or.nw')];
    const T = 58, HOLD = 46;
    let pull = 0, busyR = false;
    const render = (v) => {
      pull = v;
      ls.style.transform = 'translateY(' + v + 'px)';
      if (!busyR) {
        const pr = Math.min(1, v / T);
        bars.forEach((b, i) => {
          const f = Math.max(0, Math.min(1, pr * 5.2 - i));
          b.style.transform = 'scaleY(' + (0.3 + 0.7 * f) + ')';
          b.style.opacity = 0.25 + 0.75 * f;
        });
      }
    };
    const clearBars = () => bars.forEach((b) => { b.style.transform = ''; b.style.opacity = ''; });
    const refresh = async () => {
      busyR = true;
      clearBars();
      pi.classList.add('go');
      await spr(pull, HOLD, 0, render, 220, 24);
      await wait(1100);
      pi.classList.remove('go');
      busyR = false;
      news.forEach((n) => n.classList.add('on'));
      await spr(pull, 0, 0, render, 190, 22);
    };
    const release = () => (pull >= T ? refresh() : spr(pull, 0, 0, render, 220, 21));
    const resist = (dy) => 130 * (1 - Math.exp(-Math.max(0, dy) / 150));
    let ok = true;
    dragger(ls, {
      ok: () => ok && !busyR,
      down: () => {},
      move: (dx, dy) => render(resist(dy)),
      up: () => release(),
    });
    const reset = () => {
      sp++; busyR = false; pi.classList.remove('go');
      news.forEach((n) => { n.style.transition = 'none'; n.querySelector('.oi').style.transition = 'none'; n.classList.remove('on'); });
      void root.offsetHeight;
      news.forEach((n) => { n.style.transition = ''; n.querySelector('.oi').style.transition = ''; });
      render(0); fg.style.opacity = 0;
    };
    const script = async () => {
      const a = at(ls, 0.55, 0.25);
      fgo(a[0], a[1], 0, 1);
      await hold(900);
      fgo(a[0], a[1], 1, 1);
      await hold(160);
      await tw(1050, (k) => { const dy = 118 * k; render(resist(dy)); fgo(a[0], a[1] + dy, 1, 1); }, ezio);
      await hold(260);
      fgo(a[0], a[1] + 118, 0, 0);
      await release();
      await hold(2200);
    };
    play(reset, script);
  },
  prompt: `Build pull to refresh for a mobile list without a circular spinner. Wrap the list in a scroller and only start the gesture when scrollTop is 0 and the finger moves down. Use pointer events (touch-action: pan-x pinch-zoom on the scroller so the browser leaves vertical pulls to you, or touch-action: none on a demo surface) and translate the list with transform only. Apply rubber-band resistance: pull = 130 * (1 - exp(-dy / 150)), so the first pixels follow the finger and later ones give less. Behind the list sit five thin vertical bars; map pull progress (pull / 58px threshold) to each bar in turn, scaleY from 0.3 to 1 and opacity from 0.25 to 1, so the indicator visibly fills. On release past the threshold hold the list at 46px with a spring (stiffness 220, damping 24), run the bars as a looping wave (scaleY 0.35 to 1, 760ms ease-in-out, 90ms stagger) while you fetch, then spring back to 0 and insert the new rows with grid-template-rows going from 0fr to 1fr over 520ms cubic-bezier(.32,.72,0,1). Below the threshold spring back without refreshing. Announce the result in an aria-live region, offer a Refresh button for keyboard users, and replace the wave with a static label under prefers-reduced-motion. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 4. action sheet
const pgt = (a, b) => `<i style="background:linear-gradient(145deg,${a},${b})"></i>`;

ML.add({
  id: 'mobile-gestures-action-sheet',
  cat: 'mobile-gestures',
  title: 'Action sheet',
  sub: 'Rises with a Cancel, page scales back',
  html: `<div class="ph a"><div class="bk"></div>
<div class="pg"><div class="hd"><div class="lt">Recents</div><button class="sb2" type="button" aria-label="Share">${ic('share')}</button></div>
<div class="gd">${pgt('#CFE0F7', '#9CC0F0')}${pgt('#E9EEF5', '#C9D6E8')}${pgt('#DDE6F2', '#B1C4DE')}${pgt('#D8DEE8', '#A9B6C9')}${pgt('#CFE3FA', '#8FB8F0')}${pgt('#E4EAF3', '#BFCDE2')}${pgt('#D3E2F6', '#A3C2EE')}${pgt('#E1E7F0', '#B7C5DA')}${pgt('#CDDDF3', '#97B9EA')}</div></div>
<div class="sc"></div>
<div class="as"><div class="g1"><div class="gt">Beach Day.jpg</div><button type="button">Copy Link</button><button type="button">Save to Files</button><button type="button">Add to Album</button><button type="button" class="dg">Delete Photo</button></div><button type="button" class="cn">Cancel</button></div>
<i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .ph::after{display:none}
.d .bk{position:absolute;inset:0;background:#0F1218}
.d .pg{position:absolute;inset:0;background:#fff;transform-origin:50% 60%;transition:transform 620ms var(--ml-ease),border-radius 620ms var(--ml-ease);overflow:hidden}
.d .open .pg{transform:scale(.92);border-radius:22px}
.d .hd{display:flex;align-items:flex-end;justify-content:space-between;padding:44px 14px 8px}
.d .sb2{appearance:none;border:0;cursor:pointer;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent);transition:transform 90ms ease-out}
.d .sb2:active,.d .sb2.is-auto{transform:scale(.88)}
.d .gd{display:grid;grid-template-columns:repeat(3,1fr);gap:3px;padding:0 3px}
.d .gd i{aspect-ratio:1;border-radius:4px}
.d .sc{position:absolute;inset:0;background:rgba(35,15,10,.28);opacity:0;pointer-events:none;transition:opacity 420ms var(--ml-ease)}
.d .open .sc{opacity:1;pointer-events:auto}
.d .as{position:absolute;left:8px;right:8px;bottom:14px;display:grid;gap:6px;transform:translateY(112%);transition:transform 620ms var(--ml-ease)}
.d .open .as{transform:translateY(0)}
.d .g1,.d .cn{background:rgba(255,255,255,.96);border-radius:14px;overflow:hidden;box-shadow:var(--ml-shadow)}
.d .as button{appearance:none;border:0;cursor:pointer;display:block;width:100%;height:25px;background:transparent;font:500 11.5px/1 var(--ml-font);color:var(--ml-accent);border-top:1px solid var(--ml-line)}
.d .as button:active,.d .as button.is-auto{background:var(--ml-bar-2)}
.d .as .dg{color:#FF3B30}
.d .as .cn{height:28px;font-weight:700;border:0;color:var(--ml-accent)}
.d .gt{height:20px;display:grid;place-items:center;font-size:9.5px;color:var(--ml-muted)}
.d .as button:focus-visible,.d .sb2:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const ph = root.querySelector('.ph');
    const share = root.querySelector('.sb2');
    const sc = root.querySelector('.sc');
    const cancel = root.querySelector('.cn');
    const acts = [...root.querySelectorAll('.g1 button')];
    const open = (v) => ph.classList.toggle('open', v);
    share.addEventListener('click', () => open(true));
    sc.addEventListener('click', () => open(false));
    acts.concat(cancel).forEach((b) => b.addEventListener('click', () => open(false)));
    root.addEventListener('keydown', (e) => { if (e.key === 'Escape') open(false); });
    const reset = () => { open(false); fg.style.opacity = 0; share.classList.remove('is-auto'); cancel.classList.remove('is-auto'); };
    const tap = async (el, cls) => {
      const a = at(el, 0.5, 0.5);
      fgo(a[0], a[1], 0, 1);
      await hold(650);
      fgo(a[0], a[1], 1, 1);
      el.classList.add(cls);
      await hold(170);
      el.classList.remove(cls);
      fgo(a[0], a[1], 0, 0);
    };
    const script = async () => {
      await hold(500);
      await tap(share, 'is-auto');
      open(true);
      await hold(1900);
      await tap(cancel, 'is-auto');
      open(false);
      await hold(1700);
    };
    play(reset, script);
  },
  prompt: `Build an iOS-style action sheet for a photo or file screen. A trigger (a round share button) opens it. The page content scales back with transform: scale(.92) and a 22px radius around a 50 percent / 60 percent origin over 620ms cubic-bezier(.32,.72,0,1) while a dark layer behind shows through; a scrim fades in. The sheet is two separate rounded cards anchored near the bottom with a 7px gap: a group card (a small muted title like the file name, then one full-width button per action, 30px rows with 1px hairline separators, accent-colored labels, destructive action in system red) and a distinct bold Cancel card. It rises with transform: translateY(112%) to 0 on the same curve. Rows get an instant :active background. Tapping the scrim, Cancel or pressing Escape closes it and everything reverses. Accessibility: role="dialog" aria-modal="true" with an accessible name, move focus to the first action on open and return it to the trigger on close, trap Tab inside, 44px minimum hit targets on a real device, env(safe-area-inset-bottom) padding. Under prefers-reduced-motion drop the scale and use opacity only. Plain HTML, CSS and a few lines of JS.`,
});

// ---------------------------------------------------------------- 5. snackbar undo
const wrow = (name, price, a, b) => `<div class="it"><div class="in"><div class="rw"><i class="th" style="background:linear-gradient(145deg,${a},${b})"></i><div class="tx"><b>${name}</b><em>${price}</em></div><button class="tb" type="button" aria-label="Remove ${name}">${ic('trash')}</button></div></div></div>`;

ML.add({
  id: 'mobile-gestures-snackbar-undo',
  cat: 'mobile-gestures',
  title: 'Snackbar with undo',
  sub: 'Delete, Undo slides up, swipe it away',
  html: `<div class="ph a"><div class="hd"><div class="lt">Wishlist</div></div><div class="ls">
${wrow('Linen shirt', '$48.00', '#D6E4F7', '#A9C6EE')}${wrow('Canvas tote', '$32.00', '#E6ECF4', '#C3D0E3')}${wrow('Desk lamp', '$64.00', '#D2E2F8', '#9FC0EC')}${wrow('Wool socks', '$18.00', '#EAE1D9', '#BDCADF')}${wrow('Notebook set', '$22.00', '#DAE6F6', '#B0C8EA')}
</div><div class="sn"><div class="si"><span>Item removed</span><button class="un" type="button">Undo</button><i class="pr"></i></div></div><i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .hd{padding:44px 14px 8px}
.d .it{display:grid;grid-template-rows:1fr;transition:grid-template-rows 420ms var(--ml-ease)}
.d .it.gone{grid-template-rows:0fr}
.d .in{min-height:0;overflow:hidden}
.d .rw{display:flex;align-items:center;gap:8px;height:46px;padding:0 10px 0 12px;border-top:1px solid var(--ml-line)}
.d .th{flex:none;width:30px;height:30px;border-radius:8px}
.d .tx{flex:1;min-width:0}
.d .tx b{display:block;font-size:11px;font-weight:600}
.d .tx em{display:block;font-style:normal;font-size:9.5px;color:var(--ml-muted)}
.d .tb{appearance:none;border:0;cursor:pointer;flex:none;display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--ml-bar-2);color:var(--ml-ink-2);transition:transform 90ms ease-out}
.d .tb:active,.d .tb.is-auto{transform:scale(.86)}
.d .tb svg{width:12px;height:12px}
.d .sn{position:absolute;left:10px;right:10px;bottom:24px;z-index:58;transform:translateY(190%);opacity:0;transition:transform 560ms var(--ml-ease),opacity 200ms ease}
.d .sn.show{transform:translateY(0);opacity:1}
.d .si{position:relative;overflow:hidden;display:flex;align-items:center;justify-content:space-between;height:34px;padding:0 6px 0 13px;border-radius:12px;background:var(--ml-ink);color:#fff;font-size:11px;box-shadow:var(--ml-shadow-lg);touch-action:none;cursor:grab;will-change:transform}
.d .un{appearance:none;border:0;cursor:pointer;height:26px;padding:0 10px;border-radius:8px;background:transparent;color:var(--ml-accent-2);font:700 11px/1 var(--ml-font);transition:background-color .15s ease}
.d .un:active,.d .un.is-auto{background:rgba(255,255,255,.14)}
.d .pr{position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--ml-accent-2);transform-origin:0 50%;transform:scaleX(0)}
.d .sn.show .pr{animation:mgpr 4200ms linear forwards}
@keyframes mgpr{from{transform:scaleX(1)}to{transform:scaleX(0)}}
.d button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const sn = root.querySelector('.sn');
    const si = root.querySelector('.si');
    const undo = root.querySelector('.un');
    const rows = [...root.querySelectorAll('.it')].map((it) => ({ it, tb: it.querySelector('.tb') }));
    let cur = null, timer = 0, W = 0, x0 = 0;
    const hide = () => { clearTimeout(timer); cur = null; sn.classList.remove('show'); };
    const show = (r) => {
      clearTimeout(timer);
      cur = r;
      si.style.transform = ''; si.style.opacity = '';
      sn.classList.remove('show');
      void sn.offsetWidth;
      sn.classList.add('show');
      timer = setTimeout(hide, 4200);
    };
    rows.forEach((r) => r.tb.addEventListener('click', () => { r.it.classList.add('gone'); show(r); }));
    undo.addEventListener('click', () => { if (cur) cur.it.classList.remove('gone'); hide(); });
    const sx = (v) => { x0 = v; si.style.transform = 'translateX(' + v + 'px)'; si.style.opacity = 1 - Math.min(1, Math.abs(v) / W) * 0.9; };
    const away = async (v, dir) => {
      await spr(x0, dir * W * 1.3, v, sx, 150, 20);
      hide();
    };
    dragger(si, {
      ok: (e) => !e.target.closest('button'),
      down: () => { W = sn.offsetWidth; clearTimeout(timer); x0 = 0; },
      move: (dx) => sx(dx),
      up: (dx, dy, vx) => {
        if (Math.abs(dx) > W * 0.35 || Math.abs(vx) > 700) return away(vx, dx < 0 || vx < -700 ? -1 : 1);
        timer = setTimeout(hide, 4200);
        return spr(x0, 0, vx, sx, 200, 20);
      },
    });
    const reset = () => {
      sp++; hide(); si.style.transform = ''; si.style.opacity = ''; x0 = 0;
      rows.forEach((r) => { r.it.style.transition = 'none'; r.it.classList.remove('gone'); });
      void root.offsetHeight;
      rows.forEach((r) => { r.it.style.transition = ''; });
      fg.style.opacity = 0;
    };
    const tap = async (el) => {
      const a = at(el, 0.5, 0.5);
      fgo(a[0], a[1], 0, 1);
      await hold(650);
      fgo(a[0], a[1], 1, 1);
      el.classList.add('is-auto');
      await hold(150);
      el.classList.remove('is-auto');
      el.click();
      fgo(a[0], a[1], 0, 0);
    };
    const script = async () => {
      await hold(700);
      await tap(rows[1].tb);
      await hold(1500);
      await tap(undo);
      await hold(1300);
      await tap(rows[2].tb);
      await hold(1000);
      W = sn.offsetWidth;
      const a = at(si, 0.3, 0.5);
      fgo(a[0], a[1], 0, 1);
      await hold(400);
      fgo(a[0], a[1], 1, 1);
      await hold(130);
      await tw(300, (k) => { sx(k * W * 0.42); fgo(a[0] + x0, a[1], 1, 1); }, ezio);
      fgo(a[0] + x0, a[1], 0, 0);
      await away(700, 1);
      await hold(1500);
    };
    play(reset, script);
  },
  prompt: `Build the delete-with-undo pattern for a list, using a snackbar instead of a confirm dialog. Deleting a row collapses it immediately (grid-template-rows from 1fr to 0fr over 420ms cubic-bezier(.32,.72,0,1), inner wrapper min-height: 0 and overflow: hidden) and nothing is destroyed yet. A snackbar slides up from the bottom edge with transform: translateY(190%) to 0 over 560ms on the same curve, sits above the home indicator (bottom: calc(env(safe-area-inset-bottom) + 16px)), is dark with white text, one short message ("Item removed") and an Undo text button in your accent color. A 2px line along its bottom edge shrinks with scaleX over 4200ms linear and the snackbar dismisses itself when it ends. Tapping Undo expands the row back and dismisses. The snackbar also follows a sideways drag (pointer events, touch-action: none, setPointerCapture, translateX with opacity fading): release past 35 percent of its width or a flick faster than 700px/s flies it off with a spring and commits the deletion; otherwise it springs back and the timer restarts. Do not start drag capture on the Undo button, or its click is lost. Only one snackbar at a time (a new delete commits the previous one). Use role="status" with aria-live="polite", keep the timer paused while focus is inside it, give the Undo button a 44px hit area, and fade instead of slide under prefers-reduced-motion. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 6. large title
const brow = (t, au, pct, a, b) => `<div class="bw"><i class="cv" style="background:linear-gradient(150deg,${a},${b})"></i><div class="tx"><b>${t}</b><em>${au}</em><s><u style="width:${pct}%"></u></s></div></div>`;

ML.add({
  id: 'mobile-gestures-large-title',
  cat: 'mobile-gestures',
  title: 'Large title collapse',
  sub: 'Title shrinks into the bar, search tucks',
  html: `<div class="ph a"><div class="nb"><span class="bkl">${ic('back')}</span><b class="it2">Reading list</b><span class="ed">Edit</span></div>
<div class="sc"><div class="big"><div class="lt">Reading list</div></div><div class="sf">${ic('search')}<span>Search titles</span></div><div class="rs">
${brow('The Quiet Hour', 'Mina Okafor', 62, '#D6E4F7', '#9FBEEA')}${brow('Salt and Signal', 'Jonas Weber', 18, '#E5EBF4', '#BFCDE2')}${brow('Field Notes on Rain', 'Priya Nair', 91, '#D1E1F6', '#A2C2EC')}${brow('A Map of Small Towns', 'Tomas Reyes', 40, '#E2E8F1', '#B9C7DC')}${brow('Slow Machines', 'Lena Kowalski', 5, '#D9E6F7', '#A9C5EC')}${brow('The Last Ferry', 'Omar Haddad', 73, '#E4EAF3', '#C0CEE2')}${brow('Quiet Rooms', 'Maya Ross', 28, '#D3E3F7', '#9DBFEB')}
</div></div><i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .nb{position:absolute;left:0;right:0;top:34px;height:30px;z-index:3;display:flex;align-items:center;justify-content:space-between;padding:0 12px;background:rgba(255,255,255,.96);font-size:11px;color:var(--ml-accent);box-shadow:0 1px 0 transparent;transition:box-shadow .2s ease}
.d .nb.on{box-shadow:0 1px 0 var(--ml-line)}
.d .bkl{display:flex;align-items:center;gap:1px;font-weight:500}
.d .bkl svg{width:13px;height:13px}
.d .it2{position:absolute;left:50%;transform:translateX(-50%);font:600 12px/1 var(--ml-font);color:var(--ml-ink);opacity:0}
.d .ed{font-weight:500}
.d .sc{position:absolute;left:0;right:0;top:34px;bottom:0;overflow-y:auto;scrollbar-width:none;padding-top:30px;scroll-padding-top:30px;scroll-snap-type:y proximity}
.d .sc::-webkit-scrollbar{display:none}
.d .big{scroll-snap-align:start;padding:2px 14px 8px;transform-origin:0 100%}
.d .lt{font-size:24px}
.d .sf{display:flex;align-items:center;gap:6px;height:28px;margin:0 12px 10px;padding:0 9px;border-radius:9px;background:var(--ml-bar-2);color:var(--ml-muted);font-size:11px}
.d .rs{scroll-snap-align:start;padding-bottom:40px}
.d .bw{display:flex;align-items:center;gap:10px;height:50px;padding:0 14px;border-top:1px solid var(--ml-line)}
.d .cv{flex:none;width:28px;height:38px;border-radius:4px;box-shadow:0 1px 3px rgba(35,15,10,.18)}
.d .tx{flex:1;min-width:0;display:grid;gap:2px}
.d .tx b{font-size:11px;font-weight:600}
.d .tx em{font-style:normal;font-size:9.5px;color:var(--ml-muted)}
.d .tx s{display:block;height:3px;margin-top:2px;border-radius:2px;background:var(--ml-bar-2);overflow:hidden}
.d .tx u{display:block;height:100%;border-radius:2px;background:var(--ml-accent)}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const sc = root.querySelector('.sc');
    const nb = root.querySelector('.nb');
    const it2 = root.querySelector('.it2');
    const big = root.querySelector('.big');
    const sf = root.querySelector('.sf');
    const cl = (v) => Math.max(0, Math.min(1, v));
    const upd = () => {
      const st = sc.scrollTop;
      big.style.opacity = 1 - cl((st - 10) / 30);
      big.style.transform = 'scale(' + (1 - 0.1 * cl(st / 40)) + ')';
      it2.style.opacity = cl((st - 34) / 22);
      sf.style.opacity = 1 - cl((st - 4) / 34);
      sf.style.transform = 'scale(' + (1 - 0.05 * cl(st / 40)) + ')';
      nb.classList.toggle('on', st > 70);
    };
    sc.addEventListener('scroll', upd, { passive: true });
    let st0 = 0;
    dragger(sc, {
      ok: (e) => e.pointerType === 'mouse',
      down: () => { st0 = sc.scrollTop; sc.style.scrollSnapType = 'none'; },
      move: (dx, dy) => { sc.scrollTop = st0 - dy; },
      up: (dx, dy, vx, vy) => {
        sc.scrollTo({ top: Math.max(0, sc.scrollTop - vy * 0.18), behavior: 'smooth' });
        setTimeout(() => { sc.style.scrollSnapType = ''; }, 500);
      },
    });
    const reset = () => { sc.style.scrollSnapType = 'none'; sc.scrollTop = 0; sc.style.scrollSnapType = ''; upd(); fg.style.opacity = 0; };
    const drag = async (to, d) => {
      const from = sc.scrollTop;
      const a = at(sc, 0.62, 0.55);
      const dir = to > from ? -1 : 1;
      const sy = dir < 0 ? a[1] + 40 : a[1] - 40;
      fgo(a[0], sy, 0, 1);
      await hold(500);
      fgo(a[0], sy, 1, 1);
      await hold(140);
      sc.style.scrollSnapType = 'none';
      await tw(d, (k) => { sc.scrollTop = from + (to - from) * k; fgo(a[0], sy + dir * Math.min(70, Math.abs(to - from) * k), 1, 1); }, ezio);
      fgo(a[0], sy + dir * Math.min(70, Math.abs(to - from)), 0, 0);
      sc.style.scrollSnapType = '';
    };
    const script = async () => {
      await hold(500);
      await drag(86, 1000);
      await hold(1100);
      await drag(210, 900);
      await hold(900);
      await drag(0, 1100);
      await hold(1000);
    };
    play(reset, script);
    upd();
  },
  prompt: `Build an iOS-style large title that collapses into the navigation bar on scroll, with a real scroller (no scroll-jacking). Layout: a fixed navigation bar (back label left, action right, an inline title centered at opacity 0) sits above one overflow-y: auto scroller that holds the large title (24-34px, bold, tight tracking), a search field and the list. Because they are normal scroll content, the large title and the search field scroll up under the bar by themselves, which is what makes the search "tuck away". Add polish from scrollTop in a passive scroll listener: large title opacity 1 - clamp((st - 10) / 30) and scale down to 0.9 from a bottom-left origin, search field opacity 1 - clamp((st - 4) / 34) with a 5 percent scale, inline title opacity clamp((st - 34) / 22), and a 1px hairline under the bar once scrollTop passes the large header height. Use scroll-snap-type: y proximity with scroll-snap-align: start on the large header and on the list plus scroll-padding-top equal to the bar height, so a half-collapsed header settles to a clean state (touch and wheel use the native scroller; for mouse drag, add a pointer-events drag that writes scrollTop). Only transform and opacity are written from the listener. Use position: sticky or a fixed bar with safe-area-inset-top padding, make the large title the real h1 and keep the inline title aria-hidden, and under prefers-reduced-motion remove the scale and keep the opacity crossfade. Plain HTML, CSS and JS, no libraries.`,
});

// ---------------------------------------------------------------- 7. card swipe
const ecard = (t, when, where, a, b) => `<div class="cd"><div class="im" style="background:linear-gradient(170deg,${a},${b})"><i class="sun"></i><i class="mt"></i></div><div class="ct"><b>${t}</b><em>${when}</em><span>${where}</span></div><i class="st gx">GOING</i><i class="st sk">SKIP</i></div>`;

ML.add({
  id: 'mobile-gestures-card-swipe',
  cat: 'mobile-gestures',
  title: 'Swipeable card stack',
  sub: 'Drag, tilt, stamp, fly off, next rises',
  html: `<div class="ph a"><div class="hd"><div class="lt">Meetups</div></div>
<div class="stk">${ecard('Sunrise Run Club', 'Sat, 17 Oct - 6:30 AM', 'Riverside Park - 14 going', '#DCE9FA', '#A8C7EF')}${ecard('Pottery Night', 'Wed, 21 Oct - 7:00 PM', 'Clay Studio - 8 going', '#E6ECF4', '#BCCADF')}${ecard('Sunday Market Crawl', 'Sun, 25 Oct - 10:00 AM', 'Old Quarter - 22 going', '#D4E4F8', '#9FC0EC')}${ecard('Board Game Cafe', 'Fri, 23 Oct - 8:00 PM', 'Dice and Tea - 11 going', '#EAE1D9', '#B6C5DB')}</div>
<div class="bt"><button class="no" type="button" aria-label="Skip">${ic('x')}</button><button class="yes" type="button" aria-label="Going">${ic('check')}</button></div><i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .hd{padding:44px 14px 0}
.d .stk{position:absolute;left:11%;right:11%;top:29%;bottom:27%}
.d .cd{position:absolute;inset:0;border-radius:16px;background:#fff;box-shadow:var(--ml-shadow);overflow:hidden;touch-action:none;will-change:transform;cursor:grab;transition:opacity .3s ease}
.d .im{position:relative;height:60%;overflow:hidden}
.d .sun{position:absolute;right:18%;top:16%;width:16px;height:16px;border-radius:50%;background:rgba(255,255,255,.85)}
.d .mt{position:absolute;left:0;right:0;bottom:0;height:46%;background:rgba(255,255,255,.4);clip-path:polygon(0 100%,0 64%,22% 24%,44% 66%,64% 38%,100% 72%,100% 100%)}
.d .ct{padding:7px 10px;display:grid;gap:1px}
.d .ct b{font:700 12px/1.2 var(--ml-font);letter-spacing:-.01em}
.d .ct em{font-style:normal;font-size:9.5px;color:var(--ml-ink-2)}
.d .ct span{font-size:9px;color:var(--ml-accent-ink);font-weight:600}
.d .st{position:absolute;top:12px;padding:3px 7px;border:2px solid;border-radius:6px;background:rgba(255,255,255,.88);font:800 10px/1 var(--ml-font);letter-spacing:.08em;opacity:0;font-style:normal}
.d .gx{left:10px;color:var(--ml-accent);transform:rotate(-14deg)}
.d .sk{right:10px;color:var(--ml-ink-2);transform:rotate(14deg)}
.d .bt{position:absolute;left:0;right:0;bottom:6.5%;display:flex;justify-content:center;gap:24px;z-index:56}
.d .bt button{appearance:none;border:0;cursor:pointer;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:#fff;box-shadow:var(--ml-shadow);color:var(--ml-ink-2);transition:transform 90ms ease-out}
.d .bt .yes{color:var(--ml-accent)}
.d .bt button:active{transform:scale(.88)}
.d .bt svg{width:14px;height:14px}
.d .bt button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const stk = root.querySelector('.stk');
    const cs = [...root.querySelectorAll('.cd')];
    let order = cs.slice(), W = 0, thr = 0, dx = 0, dyv = 0;
    const cl = (v) => Math.max(0, Math.min(1, v));
    const layout = (p) => {
      order.forEach((c, i) => {
        c.style.zIndex = 10 - i;
        if (i === 0) { c.querySelector('.ct').style.opacity = 1; return; }
        if (i > 2) { c.style.opacity = 0; c.style.transform = 'scale(.82) translateY(30px)'; return; }
        c.style.opacity = 1;
        c.style.transform = 'translateY(' + (8 * i - 8 * p) + 'px) scale(' + (1 - 0.06 * i + 0.06 * p) + ')';
        c.querySelector('.ct').style.opacity = i === 1 ? p : 0;
      });
    };
    const place = (x, y) => {
      dx = x; dyv = y;
      const c = order[0];
      c.style.transform = 'translate(' + x + 'px,' + y + 'px) rotate(' + (x / W) * 16 + 'deg)';
      c.querySelector('.gx').style.opacity = cl(x / thr);
      c.querySelector('.sk').style.opacity = cl(-x / thr);
      layout(cl(Math.abs(x) / thr));
    };
    const geo = () => { W = stk.offsetWidth; thr = W * 0.36; };
    const next = () => {
      const fl = order[0];
      fl.style.transition = 'none';
      fl.style.opacity = 0;
      fl.querySelector('.gx').style.opacity = 0;
      fl.querySelector('.sk').style.opacity = 0;
      order.push(order.shift());
      order[0].style.transform = 'none';
      layout(0);
      void fl.offsetWidth;
      fl.style.transition = '';
      dx = 0; dyv = 0;
    };
    const fly = async (dir, v) => {
      geo();
      const y0 = dyv, s0 = dx;
      await spr(dx, dir * W * 1.7, Math.max(Math.abs(v), 900) * dir, (x) => place(x, y0 + (x - s0) * 0.02), 90, 17);
      next();
    };
    const release = (vx) => {
      if (Math.abs(dx) > thr || Math.abs(vx) > 650) return fly(dx < 0 || (dx === 0 && vx < 0) ? -1 : 1, vx);
      const s0 = dx, y0 = dyv;
      return spr(dx, 0, vx, (x) => place(x, y0 * (x / (s0 || 1))), 200, 19);
    };
    let y0 = 0, x0 = 0;
    dragger(stk, {
      ok: (e) => !!e.target,
      down: () => { geo(); x0 = dx; y0 = dyv; },
      move: (ddx, ddy) => place(x0 + ddx, y0 + ddy * 0.35),
      up: (ddx, ddy, vx) => release(vx),
    });
    root.querySelector('.no').addEventListener('click', () => { geo(); fly(-1, -900); });
    root.querySelector('.yes').addEventListener('click', () => { geo(); fly(1, 900); });
    const reset = () => {
      sp++; geo();
      order = cs.slice();
      cs.forEach((c) => { c.style.transition = 'none'; c.querySelector('.gx').style.opacity = 0; c.querySelector('.sk').style.opacity = 0; });
      order[0].style.transform = 'none'; order[0].style.opacity = 1;
      dx = 0; dyv = 0; layout(0);
      void root.offsetHeight;
      cs.forEach((c) => { c.style.transition = ''; });
      fg.style.opacity = 0;
    };
    const swipe = async (dir) => {
      geo();
      const a = at(order[0], 0.5, 0.45);
      fgo(a[0], a[1], 0, 1);
      await hold(600);
      fgo(a[0], a[1], 1, 1);
      await hold(150);
      const D = dir * W * 0.58;
      await tw(620, (k) => { place(D * k, -D * k * 0.08); fgo(a[0] + D * k, a[1] - D * k * 0.08, 1, 1); }, ezio);
      fgo(a[0] + D, a[1], 0, 0);
      await fly(dir, dir * 900);
    };
    const script = async () => {
      await hold(500);
      await swipe(1);
      await hold(1000);
      await swipe(-1);
      await hold(1200);
    };
    play(reset, script);
  },
  prompt: `Build a swipeable card stack for a discovery screen (events, recipes, listings). Stack three cards with absolute positioning: card i sits at translateY(8px * i) scale(1 - 0.06 * i). Only the top card takes input: pointer events with setPointerCapture and touch-action: none; on pointermove set transform: translate(dx, dy * 0.35) rotate(dx / cardWidth * 16deg), and fade in a GOING stamp (top left, rotated -14deg, accent color) when dragging right and a SKIP stamp (top right, neutral) when dragging left, with opacity = clamp(|dx| / threshold). Threshold is 36 percent of the card width. The cards behind interpolate toward the next slot from the same progress p = clamp(|dx| / threshold): translateY(8 * i - 8p) and scale(1 - 0.06i + 0.06p), so the next card visibly rises as you drag. Release past the threshold or faster than 650px/s sends the card off with a spring (stiffness 90, damping 17, seeded with the release velocity), then moves it to the back, fades it in as the fourth card and renders the next one; otherwise spring back (stiffness 200, damping 19). Add two round buttons (skip and going) that trigger the same fly-off, and let ArrowLeft and ArrowRight do it from the keyboard. Only transform and opacity animate. Mark the stack as a list with an aria-live announcement of the decision, and use a plain crossfade under prefers-reduced-motion. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 8. wheel picker
const wcol = (items, k) => `<div class="col" data-k="${k}">${items.map((t) => `<div class="op">${t}</div>`).join('')}</div>`;
const HRS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(String);
const MNS = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

ML.add({
  id: 'mobile-gestures-wheel-picker',
  cat: 'mobile-gestures',
  title: 'Wheel time picker',
  sub: 'Snap columns with a 3D roll-off',
  html: `<div class="ph a">
<div class="rdo"><b class="tm">7:30</b><span class="ap">AM</span><em>Wake up</em></div>
<div class="pk"><i class="band"></i><div class="cols">${wcol(HRS, 'h')}${wcol(MNS, 'm')}${wcol(['AM', 'PM'], 'a')}</div></div><i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .rdo{display:flex;align-items:baseline;gap:5px;padding:44px 14px 0}
.d .tm{font:700 26px/1 var(--ml-font);letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .ap{font:600 12px/1 var(--ml-font);color:var(--ml-accent)}
.d .rdo em{margin-left:auto;font-style:normal;font-size:10px;color:var(--ml-muted)}
.d .pk{position:absolute;left:10px;right:10px;bottom:24px;height:110px;border-radius:14px;overflow:hidden;background:var(--ml-surface)}
.d .band{position:absolute;left:5px;right:5px;top:44px;height:22px;border-radius:8px;background:var(--ml-accent-soft);pointer-events:none}
.d .cols{position:absolute;inset:0;display:flex;padding:0 6px}
.d .col{flex:1;height:100%;overflow-y:auto;scrollbar-width:none;scroll-snap-type:y mandatory;padding:44px 0;perspective:190px;touch-action:pan-y;cursor:grab}
.d .col::-webkit-scrollbar{display:none}
.d .op{height:22px;text-align:center;font:600 14px/22px var(--ml-font);scroll-snap-align:center;will-change:transform;font-variant-numeric:tabular-nums}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const cols = [...root.querySelectorAll('.col')];
    const tm = root.querySelector('.tm');
    const ap = root.querySelector('.ap');
    const IH = 22;
    const items = cols.map((c) => [...c.children]);
    const upd = (ci) => {
      const c = cols[ci], st = c.scrollTop;
      items[ci].forEach((el, i) => {
        const d = (i * IH - st) / IH, a = Math.abs(d);
        if (a > 3.2) { el.style.opacity = 0; return; }
        el.style.opacity = Math.max(0.12, 1 - a * 0.34);
        el.style.transform = 'rotateX(' + -d * 26 + 'deg) scale(' + (1 - Math.min(1, a) * 0.1) + ')';
      });
      const idx = cols.map((cc) => Math.max(0, Math.min(cc.children.length - 1, Math.round(cc.scrollTop / IH))));
      tm.textContent = cols[0].children[idx[0]].textContent + ':' + cols[1].children[idx[1]].textContent;
      ap.textContent = cols[2].children[idx[2]].textContent;
    };
    cols.forEach((c, ci) => {
      c.addEventListener('scroll', () => upd(ci), { passive: true });
      let st0 = 0;
      dragger(c, {
        ok: (e) => e.pointerType === 'mouse',
        down: () => { st0 = c.scrollTop; c.style.scrollSnapType = 'none'; },
        move: (dx, dy) => { c.scrollTop = st0 - dy; },
        up: (dx, dy, vx, vy) => {
          const n = c.children.length - 1;
          const t = Math.max(0, Math.min(n, Math.round((c.scrollTop - vy * 0.14) / IH)));
          c.scrollTo({ top: t * IH, behavior: 'smooth' });
          setTimeout(() => { c.style.scrollSnapType = ''; }, 450);
        },
      });
    });
    const setAll = (a) => { cols.forEach((c, i) => { c.style.scrollSnapType = 'none'; c.scrollTop = a[i] * IH; }); cols.forEach((c, i) => upd(i)); cols.forEach((c) => { c.style.scrollSnapType = ''; }); };
    const reset = () => { setAll([6, 6, 0]); fg.style.opacity = 0; };
    const spin = async (ci, to, d) => {
      const c = cols[ci], from = c.scrollTop, dir = to * IH > from ? -1 : 1;
      const a = at(c, 0.5, 0.5);
      const sy = a[1] + (dir < 0 ? 22 : -22);
      fgo(a[0], sy, 0, 1);
      await hold(450);
      fgo(a[0], sy, 1, 1);
      await hold(130);
      c.style.scrollSnapType = 'none';
      await tw(d, (k, raw) => { c.scrollTop = from + (to * IH - from) * k; fgo(a[0], sy + dir * 44 * Math.min(1, raw * 3), raw < 0.34 ? 1 : 0, raw < 0.34 ? 1 : 0); }, ez);
      c.scrollTop = to * IH;
      c.style.scrollSnapType = '';
    };
    const script = async () => {
      await hold(700);
      await spin(0, 8, 900);
      await hold(500);
      await spin(1, 9, 800);
      await hold(500);
      await spin(2, 1, 500);
      await hold(1600);
    };
    play(reset, script);
    setAll([6, 6, 0]);
  },
  prompt: `Build an iOS-style wheel time picker from real scroll-snap columns. Each column (hours 1-12, minutes in 5s, AM/PM) is an overflow-y: auto element with scroll-snap-type: y mandatory, hidden scrollbars, perspective: 190px, and vertical padding of two item heights so the first and last item can reach the center; every item is 22px tall with scroll-snap-align: center. A selection band (rounded 9px, accent-soft fill) is a pointer-events: none layer behind the center row. On scroll, for each nearby item compute its distance from the center in item units d = (index * itemHeight - scrollTop) / itemHeight and set transform: rotateX(-d * 26deg) scale(1 - min(1, |d|) * 0.1) plus opacity max(0.12, 1 - |d| * 0.34), hide items beyond 3 steps, and update a live readout above (7:30 AM) from the rounded scrollTop of each column. Touch uses native momentum scrolling; for mouse add pointer-event drag-to-scroll (set scrollTop = start - dy, disable snap during the drag, then scrollTo the nearest item projected with velocity * 0.14s and re-enable snap after about 450ms). Mark each column role="listbox" with aria-activedescendant or use a hidden native select for assistive tech, support ArrowUp and ArrowDown by one item, and respect prefers-reduced-motion by skipping the smooth scroll. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 9. context menu
const ptile = (a, b) => `<div class="tl" style="background:linear-gradient(160deg,${a},${b})"><i class="sun"></i><i class="mt"></i><i class="fv">${ic('heart')}</i></div>`;

ML.add({
  id: 'mobile-gestures-context-menu',
  cat: 'mobile-gestures',
  title: 'Long-press menu',
  sub: 'Photo lifts, scene dims, menu springs out',
  html: `<div class="ph a"><div class="hd"><div class="lt">Photos</div></div>
<div class="gd">${ptile('#D6E5F8', '#9DBFEC')}${ptile('#E5EBF4', '#BCCADF')}${ptile('#DCE8F8', '#B3CDEF')}${ptile('#E1E7F0', '#B5C3D8')}</div>
<div class="dm"></div>
<div class="mn"><button type="button">Favorite${ic('heart')}</button><button type="button">Share${ic('share')}</button><button type="button" class="dg">Delete${ic('trash')}</button></div>
<i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .hd{padding:42px 14px 6px}
.d .gd{position:relative;display:grid;grid-template-columns:1fr 1fr;gap:7px;padding:0 10px}
.d .tl{position:relative;aspect-ratio:1.35;border-radius:12px;overflow:hidden;touch-action:none;user-select:none;-webkit-touch-callout:none;cursor:pointer;transition:transform 560ms var(--ml-bounce),box-shadow 400ms var(--ml-ease)}
.d .tl.pressing{transform:scale(.965);transition:transform 420ms var(--ml-ease)}
.d .tl.lift{z-index:30;transform:scale(1.07);box-shadow:0 16px 36px rgba(35,15,10,.3)}
.d .sun{position:absolute;right:18%;top:16%;width:12px;height:12px;border-radius:50%;background:rgba(255,255,255,.85)}
.d .mt{position:absolute;left:0;right:0;bottom:0;height:46%;background:rgba(255,255,255,.38);clip-path:polygon(0 100%,0 64%,22% 24%,44% 66%,64% 38%,100% 72%,100% 100%)}
.d .fv{position:absolute;left:6px;bottom:6px;width:14px;height:14px;color:#fff;opacity:0;transform:scale(.4);transition:transform 420ms var(--ml-bounce),opacity 200ms ease}
.d .fv svg{width:14px;height:14px;fill:#fff}
.d .tl.fav .fv{opacity:1;transform:scale(1)}
.d .dm{position:absolute;inset:0;z-index:20;background:rgba(35,15,10,.34);opacity:0;pointer-events:none;transition:opacity 360ms var(--ml-ease)}
.d .dm.on{opacity:1;pointer-events:auto}
.d .mn{position:absolute;left:10px;top:150px;z-index:40;width:124px;padding:3px 0;border-radius:14px;background:rgba(255,255,255,.97);box-shadow:var(--ml-shadow-lg);transform-origin:0 0;transform:scale(.45);opacity:0;pointer-events:none;transition:transform 520ms var(--ml-bounce),opacity 180ms ease}
.d .mn.on{transform:scale(1);opacity:1;pointer-events:auto}
.d .mn button{appearance:none;border:0;cursor:pointer;display:flex;align-items:center;justify-content:space-between;width:100%;height:27px;padding:0 11px;background:transparent;font:500 11px/1 var(--ml-font);color:var(--ml-ink);text-align:left}
.d .mn button+button{border-top:1px solid var(--ml-line)}
.d .mn button:active,.d .mn button.is-auto{background:var(--ml-bar-2)}
.d .mn .dg{color:#FF3B30}
.d .mn svg{width:13px;height:13px}
.d .mn button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const ph = root.querySelector('.ph');
    const gd = root.querySelector('.gd');
    const dm = root.querySelector('.dm');
    const mn = root.querySelector('.mn');
    const tiles = [...root.querySelectorAll('.tl')];
    const items = [...mn.querySelectorAll('button')];
    let cur = null, timer = 0, sx = 0, sy = 0, pend = null;
    const openAt = (t) => {
      clearTimeout(timer);
      swallow = true;
      const mw = mn.offsetWidth;
      const L = Math.max(8, Math.min(gd.offsetLeft + t.offsetLeft, ph.clientWidth - mw - 8));
      const T = gd.offsetTop + t.offsetTop + t.offsetHeight + t.offsetHeight * 0.035 + 8;
      mn.style.left = L + 'px';
      mn.style.top = T + 'px';
      t.classList.remove('pressing');
      t.classList.add('lift');
      dm.classList.add('on');
      mn.classList.add('on');
      cur = t;
    };
    const close = () => {
      clearTimeout(timer);
      tiles.forEach((t) => t.classList.remove('lift', 'pressing'));
      dm.classList.remove('on');
      mn.classList.remove('on');
      cur = null;
    };
    const cancel = () => { clearTimeout(timer); if (pend && !cur) pend.classList.remove('pressing'); pend = null; };
    gd.addEventListener('pointerdown', (e) => {
      const t = e.target.closest('.tl');
      if (!t || cur) return;
      pend = t; sx = e.clientX; sy = e.clientY;
      t.classList.add('pressing');
      timer = setTimeout(() => openAt(t), 460);
    });
    gd.addEventListener('pointermove', (e) => { if (pend && Math.hypot(e.clientX - sx, e.clientY - sy) > 8) cancel(); });
    gd.addEventListener('pointerup', cancel);
    gd.addEventListener('pointercancel', cancel);
    gd.addEventListener('contextmenu', (e) => { e.preventDefault(); const t = e.target.closest('.tl'); if (t && !cur) openAt(t); });
    dm.addEventListener('click', close);
    root.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    items.forEach((b, i) => b.addEventListener('click', () => { if (i === 0 && cur) cur.classList.toggle('fav'); close(); }));
    const reset = () => { close(); tiles.forEach((t) => t.classList.remove('fav')); items.forEach((b) => b.classList.remove('is-auto')); fg.style.opacity = 0; };
    const script = async () => {
      const t = tiles[0];
      const a = at(t, 0.55, 0.5);
      await hold(600);
      fgo(a[0], a[1], 0, 1);
      await hold(700);
      fgo(a[0], a[1], 1, 1);
      t.classList.add('pressing');
      await hold(520);
      openAt(t);
      fgo(a[0], a[1], 0, 0);
      await hold(1500);
      const b = at(items[0], 0.5, 0.5);
      fgo(b[0], b[1], 0, 1);
      await hold(650);
      fgo(b[0], b[1], 1, 1);
      items[0].classList.add('is-auto');
      await hold(170);
      items[0].classList.remove('is-auto');
      fgo(b[0], b[1], 0, 0);
      items[0].click();
      await hold(2000);
    };
    play(reset, script);
  },
  prompt: `Build an iOS-style long-press context menu for a photo grid. Start a 460ms timer on pointerdown over a tile and cancel it if the pointer moves more than 8px or lifts early; while the timer runs the tile eases down to scale(.965) as press feedback. When it fires, lift the tile to scale(1.07) with a deep shadow (0 16px 36px rgba(0,0,0,.3)) using a slight-overshoot spring (cubic-bezier or linear() with about 2 percent overshoot, 560ms), raise it above a scrim that fades to rgba(35,15,10,.34) in 360ms, and spring a menu out just below it: transform-origin at the tile's left edge, scale(.45) to scale(1) plus opacity over 520ms. Measure the tile with offsetLeft and offsetTop (not getBoundingClientRect, the tile is scaled) and flip the menu to the right edge or above the tile when there is no room. The menu is a rounded 14px white card with 27px rows: label left, icon right, hairline separators, a destructive row in red. Also open it on the contextmenu event (preventDefault) so right-click and Android long-press work, close it on scrim tap, Escape or choosing an item, and swallow the click that follows the long press. Use touch-action: none, user-select: none and -webkit-touch-callout: none on tiles. Accessibility: role="menu" and role="menuitem", focus the first item on open, arrow keys move, Escape returns focus to the tile, and always offer the same actions through a visible More button. No blur filters over the grid. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 10. pinch zoom
ML.add({
  id: 'mobile-gestures-pinch-zoom',
  cat: 'mobile-gestures',
  title: 'Pinch to zoom',
  sub: 'Pinch or double-click, pan, spring back',
  html: `<div class="ph a"><div class="nv"><span>Done</span><b>Lake Day</b><i>${ic('share')}</i></div>
<div class="vw" data-tap><div class="pic"><i class="sky"></i><i class="sn"></i><i class="m1"></i><i class="m2"></i><i class="lk"></i><i class="bt"></i><i class="sl"></i><i class="r1"></i><i class="r2"></i></div></div>
<i class="hi"></i></div>${FG}<i class="fg f2"></i>`,
  css: PHONE_CSS + `
.d .nv{position:absolute;left:0;right:0;top:36px;height:26px;z-index:3;display:flex;align-items:center;justify-content:space-between;padding:0 14px;font-size:11px;color:var(--ml-accent);background:#fff}
.d .nv b{position:absolute;left:50%;transform:translateX(-50%);color:var(--ml-ink);font-weight:600}
.d .nv i{display:block;width:14px;height:14px}
.d .vw{position:absolute;left:0;right:0;top:62px;bottom:0;overflow:hidden;touch-action:none;cursor:zoom-in;background:var(--ml-surface)}
.d .pic{position:absolute;inset:0;transform-origin:50% 50%;will-change:transform}
.d .pic i{position:absolute;display:block}
.d .sky{inset:0;background:linear-gradient(180deg,#BFD8F7 0%,#E3EEFB 58%,#F1F6FD 60%)}
.d .sn{right:20%;top:12%;width:14%;aspect-ratio:1;border-radius:50%;background:#fff;box-shadow:0 0 0 6px rgba(255,255,255,.4)}
.d .m1{left:-6%;width:62%;top:30%;height:30%;background:#9DB8DA;clip-path:polygon(0 100%,38% 8%,52% 40%,64% 22%,100% 100%)}
.d .m2{left:34%;width:72%;top:38%;height:22%;background:#B8CBE4;clip-path:polygon(0 100%,30% 14%,50% 52%,70% 20%,100% 100%)}
.d .lk{left:0;right:0;top:60%;bottom:0;background:linear-gradient(180deg,#8FB8EE,#5C95E0)}
.d .bt{left:52%;top:66%;width:11%;height:5%;background:#fff;clip-path:polygon(0 30%,100% 30%,86% 100%,14% 100%)}
.d .sl{left:56.5%;top:56%;width:6%;height:10%;background:#fff;clip-path:polygon(0 100%,0 0,100% 100%)}
.d .r1,.d .r2{left:0;right:0;background:repeating-linear-gradient(90deg,transparent 0 9px,rgba(255,255,255,.4) 9px 16px)}
.d .r1{top:74%;height:2px}
.d .r2{top:86%;height:2px;opacity:.7}
.d .f2{z-index:91}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const vw = root.querySelector('.vw');
    const pic = root.querySelector('.pic');
    const fgo2 = (x, y, p, o) => { fg2.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg2.style.scale = p ? 0.82 : 1; fg2.style.opacity = o; };
    let S = 1, TX = 0, TY = 0, g = null;
    const MAXS = 4;
    const apply = () => { pic.style.transform = 'translate(' + TX + 'px,' + TY + 'px) scale(' + S + ')'; };
    const rel = (cx, cy) => { const r = vw.getBoundingClientRect(); return [cx - r.left - r.width / 2, cy - r.top - r.height / 2]; };
    const bound = (s) => [(Math.max(s, 1) - 1) * vw.clientWidth / 2, (Math.max(s, 1) - 1) * vw.clientHeight / 2];
    const soft = (v, b) => (Math.abs(v) > b ? Math.sign(v) * (b + (Math.abs(v) - b) * 0.3) : v);
    const begin = (mx, my, d) => { g = { s0: S, qx: (mx - TX) / S, qy: (my - TY) / S, d0: d }; };
    const upd = (mx, my, d) => {
      let s = g.d0 > 1 ? (g.s0 * d) / g.d0 : g.s0;
      s = s > MAXS ? MAXS + (s - MAXS) * 0.35 : s < 1 ? 1 - (1 - s) * 0.5 : s;
      S = s;
      const b = bound(S);
      TX = soft(mx - g.qx * S, b[0]);
      TY = soft(my - g.qy * S, b[1]);
      apply();
    };
    const animTo = (s1, x1, y1) => {
      const s0 = S, x0 = TX, y0 = TY;
      return spr(0, 100, 0, (u) => { const k = u / 100; S = s0 + (s1 - s0) * k; TX = x0 + (x1 - x0) * k; TY = y0 + (y1 - y0) * k; apply(); }, 170, 22);
    };
    const settle = () => {
      const s1 = Math.max(1, Math.min(MAXS, S));
      const b = bound(s1);
      return animTo(s1, Math.max(-b[0], Math.min(b[0], TX)) * (s1 === 1 ? 0 : 1), Math.max(-b[1], Math.min(b[1], TY)) * (s1 === 1 ? 0 : 1));
    };
    const zoomAt = (mx, my) => {
      if (S > 1.2) return animTo(1, 0, 0);
      const s1 = 2.5, qx = (mx - TX) / S, qy = (my - TY) / S, b = bound(s1);
      return animTo(s1, Math.max(-b[0], Math.min(b[0], mx - qx * s1)), Math.max(-b[1], Math.min(b[1], my - qy * s1)));
    };
    const ptrs = new Map();
    const geoP = () => { const a = [...ptrs.values()]; return [(a[0][0] + a[1][0]) / 2, (a[0][1] + a[1][1]) / 2, Math.hypot(a[0][0] - a[1][0], a[0][1] - a[1][1])]; };
    const start = () => {
      sp++;
      if (ptrs.size === 2) { const m = geoP(), r = rel(m[0], m[1]); begin(r[0], r[1], m[2]); }
      else if (ptrs.size === 1) { const a = [...ptrs.values()][0], r = rel(a[0], a[1]); begin(r[0], r[1], 0); }
    };
    vw.addEventListener('pointerdown', (e) => {
      if (ptrs.size >= 2) return;
      try { vw.setPointerCapture(e.pointerId); } catch (x) {}
      ptrs.set(e.pointerId, [e.clientX, e.clientY, e.clientX, e.clientY]);
      start();
    });
    vw.addEventListener('pointermove', (e) => {
      const p = ptrs.get(e.pointerId);
      if (!p) return;
      p[0] = e.clientX; p[1] = e.clientY;
      if (Math.hypot(p[0] - p[2], p[1] - p[3]) > 5) swallow = true;
      if (ptrs.size === 2) { const m = geoP(), r = rel(m[0], m[1]); upd(r[0], r[1], m[2]); }
      else if (S > 1.01) { const r = rel(p[0], p[1]); upd(r[0], r[1], 0); }
    });
    const up = (e) => {
      if (!ptrs.delete(e.pointerId)) return;
      if (ptrs.size === 1) start(); else if (ptrs.size === 0) settle();
    };
    vw.addEventListener('pointerup', up);
    vw.addEventListener('pointercancel', up);
    vw.addEventListener('dblclick', (e) => { const r = rel(e.clientX, e.clientY); zoomAt(r[0], r[1]); });
    const reset = () => { sp++; ptrs.clear(); S = 1; TX = 0; TY = 0; apply(); fg.style.opacity = 0; fg2.style.opacity = 0; };
    const script = async () => {
      const c = at(vw, 0.56, 0.56);
      const R = rel(c[0], c[1]);
      await hold(800);
      const dA = 15, dB = 40;
      fgo(c[0] - dA, c[1] + dA * 0.6, 0, 1); fgo2(c[0] + dA, c[1] - dA * 0.6, 0, 1);
      await hold(700);
      fgo(c[0] - dA, c[1] + dA * 0.6, 1, 1); fgo2(c[0] + dA, c[1] - dA * 0.6, 1, 1);
      await hold(160);
      g = { s0: 1, qx: R[0] - TX, qy: R[1] - TY, d0: dA * 2.33 };
      await tw(950, (k) => {
        const d = dA + (dB - dA) * k;
        fgo(c[0] - d, c[1] + d * 0.6, 1, 1); fgo2(c[0] + d, c[1] - d * 0.6, 1, 1);
        upd(R[0], R[1], d * 2.33);
      }, ezio);
      await hold(500);
      fgo2(c[0] + dB, c[1] - dB * 0.6, 0, 0);
      const f0 = [c[0] - dB, c[1] + dB * 0.6];
      begin(R[0], R[1], 0);
      await tw(650, (k) => { fgo(f0[0] + 46 * k, f0[1] + 14 * k, 1, 1); upd(R[0] + 46 * k, R[1] + 14 * k, 0); }, ezio);
      fgo(f0[0] + 46, f0[1] + 14, 0, 0);
      await settle();
      await hold(800);
      const m = [c[0] - 6, c[1] + 4], Rm = rel(m[0], m[1]);
      fgo(m[0] - dB, m[1] + dB * 0.6, 0, 1); fgo2(m[0] + dB, m[1] - dB * 0.6, 0, 1);
      await hold(500);
      fgo(m[0] - dB, m[1] + dB * 0.6, 1, 1); fgo2(m[0] + dB, m[1] - dB * 0.6, 1, 1);
      await hold(140);
      begin(Rm[0], Rm[1], dB * 2.33);
      await tw(800, (k) => {
        const d = dB + (9 - dB) * k;
        fgo(m[0] - d, m[1] + d * 0.6, 1, 1); fgo2(m[0] + d, m[1] - d * 0.6, 1, 1);
        upd(Rm[0], Rm[1], d * 2.33);
      }, ezio);
      fgo(m[0] - 9, m[1] + 5, 0, 0); fgo2(m[0] + 9, m[1] - 5, 0, 0);
      await settle();
      await hold(1700);
    };
    play(reset, script);
  },
  prompt: `Build a photo viewer with pinch to zoom, pan and a spring release. Put the image in a clipped viewport (overflow: hidden, touch-action: none) and move it only with transform: translate(x, y) scale(s) from a 50 percent / 50 percent origin. Track pointers in a Map (pointer events + setPointerCapture). With two pointers, record the start distance d0, the start scale s0 and the image point under the midpoint q = (mid - t0) / s0; on every move set s = s0 * d / d0 and t = mid - q * s, which zooms around the fingers and pans with the midpoint at the same time. With one pointer and s above 1 it pans. Beyond the limits add resistance instead of a hard stop: above 4x use 4 + (s - 4) * 0.35, below 1x use 1 - (1 - s) * 0.5, and past the pan bound ((s - 1) * size / 2) keep 30 percent of the overshoot. On release animate scale and translation to the nearest valid state with a spring (stiffness 170, damping 22) so it settles smoothly. Mouse users have no second pointer, so add a dblclick handler that springs to 2.5x around the click point and back to 1x on the next one, plus Ctrl or Cmd with the wheel for stepped zoom. When one of two pointers lifts, rebase the gesture from the remaining pointer so the image does not jump. Accessibility: plus and minus buttons and keyboard (+, -, 0, arrow keys to pan), an accessible name on the viewport, and under prefers-reduced-motion jump to the target without the spring. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 11. segmented control
const sbars = (arr, lab) => `<div class="bars">${arr.map((h) => `<i style="height:${h}%"></i>`).join('')}</div><div class="axl">${lab.map((t) => `<span>${t}</span>`).join('')}</div>`;

ML.add({
  id: 'mobile-gestures-segmented',
  cat: 'mobile-gestures',
  title: 'Segmented control',
  sub: 'Thumb slides, content follows direction',
  html: `<div class="ph a"><div class="hd"><div class="lt">Activity</div></div>
<div class="sg" data-tap><i class="th"></i><button type="button" class="on">Day</button><button type="button">Week</button><button type="button">Month</button></div>
<div class="pn">
<div class="pg"><div class="big"><b>6,420</b><span>steps</span><em>+12%</em></div><div class="cap">Wed, 14 Oct</div>${sbars([14, 22, 40, 30, 72, 54, 88, 46], ['6a', '9a', '12p', '3p', '6p'])}</div>
<div class="pg"><div class="big"><b>41,880</b><span>steps</span><em>+4%</em></div><div class="cap">12 - 18 Oct</div>${sbars([62, 48, 80, 71, 90, 38, 56], ['M', 'T', 'W', 'T', 'F', 'S', 'S'])}</div>
<div class="pg"><div class="big"><b>168,300</b><span>steps</span><em>+9%</em></div><div class="cap">October 2026</div>${sbars([40, 58, 46, 72, 64, 52, 80, 68, 90, 74], ['1', '8', '15', '22', '29'])}</div>
</div><i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .hd{padding:42px 14px 8px}
.d .sg{position:relative;display:grid;grid-template-columns:repeat(3,1fr);height:28px;margin:0 14px;padding:2px;border-radius:9px;background:var(--ml-bar-2);touch-action:none;cursor:grab}
.d .th{position:absolute;left:2px;top:2px;bottom:2px;width:calc((100% - 4px) / 3);border-radius:7px;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.18),0 3px 8px rgba(35,15,10,.08);will-change:transform}
.d .sg button{position:relative;appearance:none;border:0;background:transparent;cursor:pointer;font:500 11px/1 var(--ml-font);color:var(--ml-muted);transition:color .2s ease}
.d .sg button.on{color:var(--ml-ink);font-weight:600}
.d .sg button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:7px}
.d .pn{position:absolute;left:0;right:0;top:112px;bottom:0;overflow:hidden}
.d .pg{position:absolute;left:0;right:0;top:0;padding:12px 14px 0;will-change:transform,opacity}
.d .big{display:flex;align-items:baseline;gap:5px}
.d .big b{font:700 21px/1 var(--ml-font);letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .big span{font-size:10px;color:var(--ml-muted)}
.d .big em{margin-left:auto;font-style:normal;font:700 9.5px/1 var(--ml-font);padding:3px 6px;border-radius:99px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .cap{margin-top:3px;font-size:10px;color:var(--ml-muted)}
.d .bars{display:flex;align-items:flex-end;gap:4px;height:40px;margin-top:10px;border-bottom:1px solid var(--ml-line)}
.d .bars i{flex:1;border-radius:3px 3px 0 0;background:var(--ml-accent-line)}
.d .bars i:nth-child(4n+1){background:var(--ml-accent)}
.d .axl{display:flex;justify-content:space-between;margin-top:4px;font:500 8.5px/1 var(--ml-mono);color:var(--ml-muted)}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const sg = root.querySelector('.sg');
    const th = root.querySelector('.th');
    const btns = [...sg.querySelectorAll('button')];
    const pgs = [...root.querySelectorAll('.pg')];
    let P = 0, idx = 0, SW = 0;
    const render = (p) => {
      P = p;
      th.style.transform = 'translateX(' + p * SW + 'px)';
      pgs.forEach((g, i) => {
        const d = i - p;
        g.style.transform = 'translateX(' + d * 62 + '%)';
        g.style.opacity = Math.max(0, 1 - Math.abs(d) * 1.1);
      });
      const n = Math.max(0, Math.min(2, Math.round(p)));
      if (n !== idx) { idx = n; btns.forEach((b, i) => b.classList.toggle('on', i === n)); }
    };
    const geo = () => { SW = (sg.clientWidth - 4) / 3; };
    const go = (i) => { geo(); return spr(P, i, 0, render, 170, 22); };
    const goS = (i) => spr(P * 100, i * 100, 0, (u) => render(u / 100), 170, 22);
    btns.forEach((b, i) => b.addEventListener('click', () => { geo(); goS(i); }));
    root.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { geo(); goS(Math.min(2, idx + 1)); }
      if (e.key === 'ArrowLeft') { geo(); goS(Math.max(0, idx - 1)); }
    });
    let p0 = 0;
    dragger(sg, {
      down: () => { geo(); p0 = P; },
      move: (dx) => render(Math.max(-0.12, Math.min(2.12, p0 + dx / SW))),
      up: (dx, dy, vx, vy, e) => {
        if (Math.abs(dx) < 4) { const r = sg.getBoundingClientRect(); return goS(Math.max(0, Math.min(2, Math.floor((e.clientX - r.left) / (r.width / 3))))); }
        const t = Math.max(0, Math.min(2, Math.round(P + (vx / SW) * 0.12)));
        return spr(P * 100, t * 100, (vx / SW) * 100, (u) => render(u / 100), 170, 22);
      },
    });
    const reset = () => { sp++; geo(); idx = 0; btns.forEach((b, i) => b.classList.toggle('on', i === 0)); render(0); fg.style.opacity = 0; };
    const tap = async (i) => {
      const a = at(btns[i], 0.5, 0.5);
      fgo(a[0], a[1], 0, 1);
      await hold(650);
      fgo(a[0], a[1], 1, 1);
      await hold(160);
      fgo(a[0], a[1], 0, 0);
      await goS(i);
    };
    const script = async () => {
      geo();
      await hold(500);
      await tap(1);
      await hold(1300);
      await tap(2);
      await hold(1300);
      const a = at(btns[2], 0.5, 0.5), b = at(btns[0], 0.5, 0.5);
      fgo(a[0], a[1], 0, 1);
      await hold(500);
      fgo(a[0], a[1], 1, 1);
      await hold(150);
      await tw(620, (k) => { render(2 - 2 * k); fgo(a[0] + (b[0] - a[0]) * k, a[1], 1, 1); }, ezio);
      fgo(b[0], b[1], 0, 0);
      await goS(0);
      await hold(1500);
    };
    play(reset, script);
    geo(); render(0);
  },
  prompt: `Build an iOS-style segmented control whose content follows the direction of travel. The control is a 28px rounded track with a white thumb exactly one third wide, moved only with transform: translateX(progress * segmentWidth). Keep one fractional progress value p (0 to 2) and drive everything from it: the thumb, and one content panel per segment placed at transform: translateX((i - p) * 62%) with opacity max(0, 1 - |i - p| * 1.1), so panels slide in from the side you are moving toward, and the label of round(p) becomes bold. Tapping a segment springs p to that index (stiffness 170, damping 22); dragging the thumb with pointer events (setPointerCapture, touch-action: none) follows the finger 1:1 with a little overshoot allowed at the ends, and on release projects with velocity * 0.12s and springs to the nearest segment. Segments are real buttons in a role="tablist" with role="tab", aria-selected and aria-controls, panels are role="tabpanel", ArrowLeft and ArrowRight move selection, focus rings use focus-visible. Keep panel content static while it moves (transform and opacity only) and use a crossfade without translation under prefers-reduced-motion. Plain HTML, CSS and JS, no libraries.`,
});

// ---------------------------------------------------------------- 12. drag reorder
const trow = (t, sub) => `<div class="rw"><div class="ri"><span class="ck"></span><div class="tx"><b>${t}</b><em>${sub}</em></div><i class="gp">${ic('grip')}</i></div></div>`;

ML.add({
  id: 'mobile-gestures-drag-reorder',
  cat: 'mobile-gestures',
  title: 'Long-press reorder',
  sub: 'Lift a row, drag, the rest make room',
  html: `<div class="ph a"><div class="hd"><div class="lt">Today</div></div>
<div class="ls">${trow('Review invoice draft', '9:30 AM')}${trow('Call the florist', '11:00 AM')}${trow('Book dentist for Thursday', '12:15 PM')}${trow('Pack for Lisbon', '3:00 PM')}</div>
<i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .hd{padding:42px 14px 6px}
.d .ls{position:absolute;left:10px;right:10px;top:70px;height:152px}
.d .rw{position:absolute;left:0;right:0;top:0;height:33px;transition:transform 420ms var(--ml-spring);touch-action:none;cursor:grab}
.d .rw.drag{transition:none;z-index:5}
.d .ri{display:flex;align-items:center;gap:9px;height:100%;padding:0 10px;border-radius:12px;background:#fff;border:1px solid var(--ml-line);transition:transform 420ms var(--ml-bounce),box-shadow 300ms var(--ml-ease),border-color 300ms ease}
.d .rw.lift .ri{transform:scale(1.04);box-shadow:0 12px 28px rgba(35,15,10,.22);border-color:var(--ml-accent-line)}
.d .ck{flex:none;width:15px;height:15px;border-radius:50%;border:1.5px solid var(--ml-bar)}
.d .tx{flex:1;min-width:0}
.d .tx b{display:block;font-size:10.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .tx em{display:block;font-style:normal;font-size:9px;color:var(--ml-muted)}
.d .gp{color:var(--ml-muted)}
.d .gp svg{width:13px;height:13px}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const ls = root.querySelector('.ls');
    const rws = [...root.querySelectorAll('.rw')];
    const RH = 38;
    let order = rws.slice(), cur = null, timer = 0, sx = 0, sy = 0, base = 0, started = false;
    const slot = (r) => order.indexOf(r) * RH;
    const place = (r, y) => { r.style.transform = 'translateY(' + y + 'px)'; };
    const layoutAll = () => order.forEach((r) => { if (r !== cur) place(r, slot(r)); });
    const lift = (r) => {
      cur = r; swallow = true;
      r.classList.add('lift', 'drag');
      base = slot(r);
    };
    const moveTo = (y) => {
      const yy = Math.max(-4, Math.min((order.length - 1) * RH + 4, y));
      place(cur, yy);
      const ni = Math.max(0, Math.min(order.length - 1, Math.round(yy / RH)));
      if (order.indexOf(cur) !== ni) { order.splice(order.indexOf(cur), 1); order.splice(ni, 0, cur); layoutAll(); }
    };
    const drop = () => {
      if (!cur) return;
      const r = cur; cur = null;
      r.classList.remove('lift', 'drag');
      place(r, slot(r));
    };
    rws.forEach((r) => {
      r.addEventListener('pointerdown', (e) => {
        if (cur) return;
        sx = e.clientX; sy = e.clientY; started = false;
        try { r.setPointerCapture(e.pointerId); } catch (x) {}
        timer = setTimeout(() => { started = true; lift(r); }, 380);
      });
      r.addEventListener('pointermove', (e) => {
        if (!started) { if (Math.hypot(e.clientX - sx, e.clientY - sy) > 7) clearTimeout(timer); return; }
        if (cur === r) moveTo(base + (e.clientY - sy));
      });
      const end = () => { clearTimeout(timer); if (cur === r) drop(); started = false; };
      r.addEventListener('pointerup', end);
      r.addEventListener('pointercancel', end);
    });
    const reset = () => {
      clearTimeout(timer); cur = null;
      order = rws.slice();
      rws.forEach((r) => { r.classList.remove('lift', 'drag'); });
      layoutAll();
      fg.style.opacity = 0;
    };
    const mv = async (r, to, d) => {
      const a = at(r, 0.9, 0.5);
      fgo(a[0], a[1], 0, 1);
      await hold(500);
      fgo(a[0], a[1], 1, 1);
      await hold(300);
      lift(r);
      await hold(300);
      const from = base;
      await tw(d, (k) => { moveTo(from + (to * RH - from) * k); fgo(a[0], a[1] + (to * RH - from) * k, 1, 1); }, ezio);
      await hold(250);
      fgo(a[0], a[1] + (to * RH - from), 0, 0);
      drop();
    };
    const script = async () => {
      await hold(500);
      await mv(order[1], 3, 800);
      await hold(1300);
      await mv(order[3], 0, 900);
      await hold(1500);
    };
    play(reset, script);
    layoutAll();
  },
  prompt: `Build a long-press-to-reorder list. Lay the rows out absolutely in a container of rows * 38px, each row moved only with transform: translateY(index * 38px), with transition: transform 420ms and a critically damped spring curve so the rows make room smoothly. Start a 380ms timer on pointerdown (setPointerCapture) and cancel it if the pointer moves more than 7px first, so quick vertical swipes can still scroll the page. When it fires, lift the row: switch its outer transition off, give its inner card scale(1.04), a deeper shadow and an accent hairline with a slight-overshoot spring, raise its z-index, and let it follow the finger 1:1 (clamped to the list with a few pixels of give). On every move compute newIndex = round(y / 38); when it changes, splice the row into the new index in your order array and re-place every other row, which animates them into the gap. On pointerup drop the row into its slot by restoring the transition and setting translateY(slot * 38px) while the card scales back to 1. Swallow the click that follows a drag. Accessibility: a visible grab handle button on each row, keyboard reorder with Space to pick up, ArrowUp and ArrowDown to move, Space to drop, Escape to cancel, and an aria-live announcement of the new position. Use will-change: transform and nothing but transform and shadow transitions. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 13. slide to confirm
ML.add({
  id: 'mobile-gestures-slide-confirm',
  cat: 'mobile-gestures',
  title: 'Slide to pay',
  sub: 'Knob follows the finger, 90% confirms',
  html: `<div class="ph a"><div class="hd"><div class="lt">Confirm</div></div>
<div class="cd"><div class="mr"><span class="av">HM</span><div class="tx"><b>Harbor Market</b><em>Groceries - Today</em></div></div>
<div class="am">$84.20</div>
<div class="kv"><span>Status</span><u class="stt"><s>Pending</s><s>Paid</s></u></div></div>
<div class="tk"><i class="fl"></i><span class="lb">Slide to pay</span><span class="dn">Payment sent</span><button class="kn" type="button" aria-label="Slide to pay"><svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg><svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></button></div>
<i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .ph::after{display:none}
.d .hd{padding:40px 14px 4px}
.d .cd{margin:0 12px;padding:9px 12px 4px;border-radius:16px;background:var(--ml-surface);border:1px solid var(--ml-line)}
.d .mr{display:flex;align-items:center;gap:8px}
.d .tx{flex:1;min-width:0}
.d .tx b{display:block;font-size:11px;font-weight:600}
.d .tx em{display:block;font-style:normal;font-size:9px;color:var(--ml-muted)}
.d .stt{position:relative;width:44px;height:15px;text-decoration:none;overflow:hidden;border-radius:99px;background:var(--ml-bar-2)}
.d .stt s{position:absolute;inset:0;display:grid;place-items:center;text-decoration:none;font:700 8.5px/1 var(--ml-font);color:var(--ml-ink-2);transition:opacity .3s ease}
.d .stt s+s{opacity:0;color:#fff;background:#1DB954}
.d .paid .stt s:first-child{opacity:0}
.d .paid .stt s+s{opacity:1}
.d .am{margin:6px 0 5px;font:700 26px/1 var(--ml-font);letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .kv{display:flex;align-items:center;justify-content:space-between;padding:4px 0;border-top:1px solid var(--ml-line);font-size:10px;color:var(--ml-muted)}
.d .kv b{color:var(--ml-ink);font-weight:600}
.d .tk{position:absolute;left:12px;right:12px;bottom:15px;height:40px;border-radius:20px;background:var(--ml-accent-soft);overflow:hidden;touch-action:none}
.d .fl{position:absolute;inset:0;border-radius:20px;background:var(--ml-grad);clip-path:inset(0 100% 0 0 round 20px);transition:background .3s ease}
.d .paid .fl{background:#1DB954}
.d .lb,.d .dn{position:absolute;left:44px;right:8px;top:0;bottom:0;display:grid;place-items:center;font:600 11px/1 var(--ml-font);pointer-events:none}
.d .lb{background:linear-gradient(100deg,var(--ml-accent-ink) 30%,var(--ml-accent-2) 50%,var(--ml-accent-ink) 70%) 200% 0/200% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:mgsh 2.6s linear infinite}
@keyframes mgsh{to{background-position:-100% 0}}
.d .dn{left:12px;right:46px;color:#fff;opacity:0;transition:opacity .3s ease .1s}
.d .paid .dn{opacity:1}
.d .kn{position:absolute;left:3px;top:3px;width:34px;height:34px;appearance:none;border:0;border-radius:50%;background:#fff;color:var(--ml-accent);display:grid;place-items:center;box-shadow:0 1px 3px rgba(35,15,10,.2),0 4px 10px rgba(35,15,10,.12);touch-action:none;cursor:grab;will-change:transform}
.d .kn svg{grid-area:1/1;width:15px;height:15px;transition:opacity .2s ease,transform .3s var(--ml-bounce)}
.d .kn .ck{opacity:0;transform:scale(.4);color:#1DB954}
.d .paid .kn .ar{opacity:0;transform:scale(.4)}
.d .paid .kn .ck{opacity:1;transform:scale(1)}
.d .kn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const ph = root.querySelector('.ph');
    const tk = root.querySelector('.tk');
    const kn = root.querySelector('.kn');
    const fl = root.querySelector('.fl');
    const lb = root.querySelector('.lb');
    let X = 0, TR = 0, done = false, x0 = 0, back = 0;
    const geo = () => { TR = tk.clientWidth - 40; };
    const render = (x) => {
      X = x;
      const p = Math.max(0, Math.min(1, x / TR));
      kn.style.transform = 'translateX(' + x + 'px)';
      fl.style.clipPath = 'inset(0 ' + Math.max(0, tk.clientWidth - (x + 37)) + 'px 0 0 round 20px)';
      lb.style.opacity = Math.max(0, 1 - p * 1.7);
      lb.style.transform = 'translateX(' + p * 14 + 'px)';
    };
    const finish = (v) => { done = true; ph.classList.add('paid'); return spr(X, TR, v || 0, render, 200, 22); };
    const undo = () => { ph.classList.remove('paid'); return spr(X, 0, 0, render, 170, 18).then(() => { done = false; }); };
    dragger(kn, {
      ok: () => !done,
      down: () => { geo(); x0 = X; },
      move: (dx) => render(Math.max(0, Math.min(TR, x0 + dx))),
      up: (dx, dy, vx) => {
        if (X / TR >= 0.9 || (vx > 900 && X / TR > 0.6)) { const r = finish(vx); clearTimeout(back); back = setTimeout(() => { if (done) undo(); }, 2400); return r; }
        return spr(X, 0, vx, render, 200, 16);
      },
    });
    const reset = () => { sp++; clearTimeout(back); done = false; ph.classList.remove('paid'); geo(); render(0); fg.style.opacity = 0; };
    const attempt = async (frac, d) => {
      const a = at(kn, 0.5, 0.5), x00 = X;
      fgo(a[0], a[1], 0, 1);
      await hold(550);
      fgo(a[0], a[1], 1, 1);
      await hold(160);
      await tw(d, (k) => { render(x00 + (TR * frac - x00) * k); fgo(a[0] + X, a[1], 1, 1); }, ezio);
      await hold(180);
      fgo(a[0] + X, a[1], 0, 0);
    };
    const script = async () => {
      geo();
      await hold(600);
      await attempt(0.58, 750);
      await spr(X, 0, 0, render, 200, 16);
      await hold(700);
      await attempt(1, 900);
      await finish(500);
      await hold(1700);
      await undo();
      await hold(500);
    };
    play(reset, script);
    geo(); render(0);
  },
  prompt: `Build a slide-to-confirm control for a payment or other irreversible action. The track is a 40px pill with an accent-soft fill; the knob is a 34px white circle with a 3px inset, moved only with transform: translateX(x), with x between 0 and trackWidth - 40. Use pointer events on the knob (setPointerCapture, touch-action: none) and follow the finger 1:1, clamped to the track. Drive the rest from p = x / travel: a solid accent fill revealed with clip-path: inset(0 (trackWidth - x - 37)px 0 0 round 20px) so it grows exactly under the knob, and the label ("Slide to pay", with a slow gradient shimmer on background-position) fading with opacity max(0, 1 - p * 1.7) while drifting right 14px. Release at 90 percent or beyond (or faster than 900px/s past 60 percent) completes: spring the knob to the end (stiffness 200, damping 22), swap the arrow for a check with a small overshoot scale, turn the fill success green, show a "Payment sent" label and mark the status pill as Paid. Release earlier springs the knob back (stiffness 200, damping 16) so it visibly bounces. The action fires once, on completion, and the knob is locked afterward. Accessibility: the knob is a real button with an accessible name, Enter or Space triggers the same confirmation after a short press-and-hold or a second confirming press so keyboard and switch users are not blocked, announce completion in an aria-live region, and under prefers-reduced-motion drop the shimmer and the overshoot. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 14. carousel dots
const cpage = (t, s, a, b) => `<div class="pc"><div class="cdx" style="background:linear-gradient(160deg,${a},${b})"><i class="ob o1"></i><i class="ob o2"></i><i class="ob o3"></i></div><b>${t}</b><em>${s}</em></div>`;

ML.add({
  id: 'mobile-gestures-carousel-dots',
  cat: 'mobile-gestures',
  title: 'Carousel page dots',
  sub: 'Active dot stretches, next one grows',
  html: `<div class="ph a"><div class="hd"><div class="lt">Welcome</div></div>
<div class="cr">${cpage('Plan your week', 'Drag tasks onto any day', '#D6E5F8', '#A3C3EE')}${cpage('Share with a tap', 'Send a list to anyone nearby', '#E4EAF3', '#BBC9DE')}${cpage('Stay on budget', 'See spending as it happens', '#D2E2F7', '#98BCEA')}${cpage('Ready when you are', 'Everything stays in sync', '#DEE8F6', '#AEC7EA')}</div>
<div class="dt"><i data-tap></i><i data-tap></i><i data-tap></i><i data-tap></i></div>
<i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .hd{padding:42px 14px 6px}
.d .cr{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;touch-action:pan-x;cursor:grab}
.d .cr::-webkit-scrollbar{display:none}
.d .pc{flex:none;width:100%;scroll-snap-align:center;padding:0 14px;display:grid;gap:2px}
.d .cdx{position:relative;height:84px;border-radius:16px;overflow:hidden;margin-bottom:6px}
.d .ob{position:absolute;border-radius:50%;background:rgba(255,255,255,.55)}
.d .o1{right:16%;top:18%;width:18px;height:18px;background:#fff}
.d .o2{left:12%;bottom:-18px;width:70px;height:70px}
.d .o3{right:-14px;bottom:-22px;width:56px;height:56px;background:rgba(255,255,255,.35)}
.d .pc b{font:700 13px/1.2 var(--ml-font);letter-spacing:-.02em}
.d .pc em{font-style:normal;font-size:10px;color:var(--ml-muted)}
.d .dt{position:absolute;left:0;right:0;bottom:26px;display:flex;justify-content:center}
.d .dt i{display:block;width:18px;height:6px;margin:0 -2px;border-radius:3px;background:var(--ml-accent);cursor:pointer;clip-path:inset(0 6px 0 6px round 3px);opacity:.3}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const cr = root.querySelector('.cr');
    const dots = [...root.querySelectorAll('.dt i')];
    const upd = () => {
      const W = cr.clientWidth, pos = cr.scrollLeft / Math.max(1, W);
      dots.forEach((d, i) => {
        const pr = Math.max(0, 1 - Math.abs(pos - i)), ins = (1 - pr) * 6;
        d.style.clipPath = 'inset(0 ' + ins + 'px 0 ' + ins + 'px round 3px)';
        d.style.opacity = 0.28 + 0.72 * pr;
      });
    };
    cr.addEventListener('scroll', upd, { passive: true });
    dots.forEach((d, i) => d.addEventListener('click', () => cr.scrollTo({ left: i * cr.clientWidth, behavior: 'smooth' })));
    let s0 = 0;
    dragger(cr, {
      ok: (e) => e.pointerType === 'mouse',
      down: () => { s0 = cr.scrollLeft; cr.style.scrollSnapType = 'none'; },
      move: (dx) => { cr.scrollLeft = s0 - dx; },
      up: (dx, dy, vx) => {
        const W = cr.clientWidth;
        const t = Math.max(0, Math.min(3, Math.round((cr.scrollLeft - vx * 0.14) / W)));
        cr.scrollTo({ left: t * W, behavior: 'smooth' });
        setTimeout(() => { cr.style.scrollSnapType = ''; }, 500);
      },
    });
    const reset = () => { cr.style.scrollSnapType = 'none'; cr.scrollLeft = 0; cr.style.scrollSnapType = ''; upd(); fg.style.opacity = 0; };
    const page = async (i, dir) => {
      const W = cr.clientWidth, from = cr.scrollLeft;
      const a = at(cr, dir < 0 ? 0.74 : 0.26, 0.45);
      const dist = W * 0.5 * -dir;
      fgo(a[0], a[1], 0, 1);
      await hold(450);
      fgo(a[0], a[1], 1, 1);
      await hold(140);
      cr.style.scrollSnapType = 'none';
      await tw(430, (k) => { cr.scrollLeft = from - dist * k; fgo(a[0] + dist * k, a[1], 1, 1); }, ez);
      fgo(a[0] + dist, a[1], 0, 0);
      cr.style.scrollSnapType = '';
      cr.scrollTo({ left: i * W, behavior: 'smooth' });
      await hold(900);
    };
    const script = async () => {
      await hold(600);
      await page(1, -1);
      await page(2, -1);
      await page(3, -1);
      await hold(500);
      await page(2, 1);
      await page(1, 1);
      await page(0, 1);
      await hold(700);
    };
    play(reset, script);
    upd();
  },
  prompt: `Build a paging carousel with page dots that react to scroll progress, using a real scroller. The carousel is a flex row with overflow-x: auto, scroll-snap-type: x mandatory, hidden scrollbars and touch-action: pan-x; each page is flex: none, width 100 percent, scroll-snap-align: center (add scroll-snap-stop: always so a flick cannot skip pages). On scroll (passive listener) compute pos = scrollLeft / pageWidth and, for every dot i, proximity = max(0, 1 - |pos - i|). Each dot is an 18x6px element in a 14px slot (margin 0 -2px); show it as a circle or a pill with clip-path: inset(0 (1 - proximity) * 6px 0 (1 - proximity) * 6px round 3px) and opacity 0.28 + 0.72 * proximity, so the active dot stretches into a pill while the next dot grows in at the same rate as you drag, with no layout shift. Tapping a dot calls scrollTo({ left: i * pageWidth, behavior: 'smooth' }). Touch and trackpads use native momentum; for mouse add pointer-event drag-to-scroll (disable snap during the drag, then scrollTo the page projected with velocity * 0.14s and restore snap after 500ms). Accessibility: the carousel is a region with aria-roledescription="carousel", pages are labelled "1 of 4", dots are buttons with aria-current on the active one, ArrowLeft and ArrowRight change page, and under prefers-reduced-motion use behavior: 'auto'. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 15. live island
ML.add({
  id: 'mobile-gestures-live-island',
  cat: 'mobile-gestures',
  title: 'Dynamic Island activity',
  sub: 'Pill expands into a live ETA and back',
  html: `<div class="ph c">${SB}
<button class="isl" type="button" aria-expanded="false" aria-label="Delivery live activity">
<span class="cl"><i class="bi">${ic('bike')}</i><b>6m</b></span>
<span class="ex"><span class="r1"><i class="ap">${ic('bike')}</i><span class="tt"><b>On the way</b><em>Harbor Market</em></span><u>6 min</u></span><span class="tk"><i class="pf"></i><i class="mk">${ic('bike')}</i></span></span>
</button>
<div class="lock"><div class="dd">Wednesday, 14 October</div><div class="tm">9:41</div></div>
<div class="nt"><i></i><i></i></div></div>${FG}`,
  css: PHONE_CSS + `
.d .ph.c{background:linear-gradient(180deg,#E6F0FC 0%,#fff 62%)}
.d .isl{position:absolute;left:2.5%;right:2.5%;top:10px;height:80px;z-index:70;padding:0;border:0;border-radius:0;background:#0B0B0F;color:#fff;text-align:left;cursor:pointer;clip-path:inset(0 calc((100% - 82px) / 2) calc(100% - 24px) calc((100% - 82px) / 2) round 12px);transition:clip-path 640ms var(--ml-bounce)}
.d .isl.open{clip-path:inset(0 0 0 0 round 28px)}
.d .isl:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .cl{position:absolute;top:0;left:calc(50% - 41px);width:82px;height:24px;display:flex;align-items:center;justify-content:space-between;padding:0 10px;transition:opacity 200ms ease}
.d .isl.open .cl{opacity:0;transition-duration:120ms}
.d .cl i{display:block;width:12px;height:12px;color:var(--ml-accent-2)}
.d .cl i svg{width:12px;height:12px}
.d .cl b{font:700 9px/1 var(--ml-font);color:var(--ml-accent-2)}
.d .ex{position:absolute;inset:0;padding:12px 13px;display:grid;align-content:start;gap:10px;opacity:0;transform:scale(.94);transform-origin:50% 0;transition:opacity 160ms ease,transform 400ms var(--ml-spring)}
.d .isl.open .ex{opacity:1;transform:scale(1);transition:opacity 300ms ease 160ms,transform 600ms var(--ml-bounce) 120ms}
.d .r1{display:flex;align-items:center;gap:8px}
.d .ap{flex:none;display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:var(--ml-grad);color:#fff}
.d .ap svg{width:15px;height:15px}
.d .tt{flex:1;min-width:0;display:grid}
.d .tt b{font-size:10.5px;font-weight:600;white-space:nowrap}
.d .tt em{font-style:normal;font-size:9px;color:rgba(255,255,255,.6);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .r1 u{flex:none;text-decoration:none;font:700 14px/1 var(--ml-font);color:var(--ml-accent-2);letter-spacing:-.02em}
.d .tk{position:relative;height:4px;margin:6px 8px 0;border-radius:2px;background:rgba(255,255,255,.22)}
.d .pf{position:absolute;inset:0;border-radius:2px;background:var(--ml-accent-2);transform-origin:0 50%;transform:scaleX(.5)}
.d .mk{position:absolute;left:-9px;top:-7px;display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:#fff;color:var(--ml-accent);transform:translateX(0);will-change:transform}
.d .mk svg{width:10px;height:10px}
.d .lock{position:absolute;left:0;right:0;top:118px;text-align:center}
.d .dd{font:500 11px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .tm{margin-top:4px;font:700 44px/1 var(--ml-font);letter-spacing:-.05em}
.d .nt{position:absolute;left:12px;right:12px;top:204px;display:grid;gap:7px}
.d .nt i{display:block;height:34px;border-radius:14px;background:rgba(255,255,255,.9);box-shadow:var(--ml-shadow)}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const isl = root.querySelector('.isl');
    const pf = root.querySelector('.pf');
    const mk = root.querySelector('.mk');
    const tk = root.querySelector('.tk');
    let open = false;
    const setP = (p) => { pf.style.transform = 'scaleX(' + p + ')'; mk.style.transform = 'translateX(' + p * tk.clientWidth + 'px)'; };
    const toggle = (v) => {
      open = v;
      isl.classList.toggle('open', v);
      isl.setAttribute('aria-expanded', v ? 'true' : 'false');
      if (v) { setP(0.5); return spr(50, 72, 0, (u) => setP(u / 100), 14, 8); }
      sp++;
    };
    isl.addEventListener('click', () => toggle(!open));
    root.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) toggle(false); });
    const reset = () => { sp++; toggle(false); setP(0.5); fg.style.opacity = 0; };
    const tap = async (fx, fy) => {
      const a = at(isl, fx, fy);
      fgo(a[0], a[1], 0, 1);
      await hold(650);
      fgo(a[0], a[1], 1, 1);
      await hold(160);
      fgo(a[0], a[1], 0, 0);
    };
    const script = async () => {
      await hold(600);
      await tap(0.5, 0.14);
      toggle(true);
      await hold(2800);
      await tap(0.5, 0.5);
      toggle(false);
      await hold(1800);
    };
    play(reset, script);
    setP(0.5);
  },
  prompt: `Build a Dynamic Island style live activity: a black pill at the top center that expands into a delivery tracker when tapped and contracts back. Make it one real button (aria-expanded, an accessible name) sized to the expanded card (height 80px, left and right 2.5 percent) and show it as a pill by clipping it: collapsed clip-path: inset(0 calc((100% - 82px) / 2) calc(100% - 24px) calc((100% - 82px) / 2) round 12px), expanded clip-path: inset(0 0 0 0 round 28px), transitioning over 640ms with a slight-overshoot spring (linear() curve, about 2 percent overshoot). Because only the clip changes, nothing reflows and the content never distorts. Inside it keep two layers: a collapsed layer positioned in the pill area (small bike icon at the left, "6m" at the right, accent text), which fades out in 120ms, and the expanded layer (app icon, "On the way", the store name, a bold "6 min" ETA, and a 4px progress track with a white bike marker) which scales from .94 to 1 from the top center and fades in over 300ms with a 160ms delay. Drive progress with scaleX on the fill and translateX on the marker, easing from 50 to 72 percent after opening. Tap again or press Escape to contract. Respect the real device safe area (the pill sits at env(safe-area-inset-top) plus 10px), keep the live region polite for ETA changes, and under prefers-reduced-motion switch to an opacity crossfade between the two layers. Plain HTML, CSS and JS.`,
});

// ---------------------------------------------------------------- 16. edge back
const srow = (icn, t) => `<div class="sr" data-tap><i class="ti">${ic(icn)}</i><b>${t}</b><s>${ic('next')}</s></div>`;
const trw = (t, on) => `<div class="tg"><b>${t}</b><i class="sw${on ? ' on' : ''}"></i></div>`;

ML.add({
  id: 'mobile-gestures-edge-back',
  cat: 'mobile-gestures',
  title: 'Edge swipe back',
  sub: 'Page follows, the one behind parallaxes',
  html: `<div class="ph a">
<div class="p1"><div class="hd"><div class="lt">Settings</div></div><div class="grp">${srow('bell', 'Notifications')}${srow('star', 'Favorites')}${srow('folder', 'Storage')}${srow('info', 'About')}</div><i class="dm"></i></div>
<div class="p2"><div class="nb"><button class="bk" type="button" aria-label="Back">${ic('back')}Settings</button></div><div class="hd2"><div class="lt">Notifications</div></div>${trw('Allow notifications', 1)}${trw('Sounds', 1)}${trw('Badges', 0)}${trw('Show previews', 1)}</div>
<i class="ed" data-tap></i><i class="hi"></i></div>${FG}`,
  css: PHONE_CSS + `
.d .p1,.d .p2{position:absolute;inset:0;will-change:transform}
.d .p1{background:var(--ml-surface)}
.d .p2{background:#fff;box-shadow:-10px 0 24px rgba(35,15,10,.12)}
.d .hd{padding:42px 14px 8px}
.d .hd2{padding:4px 14px 8px}
.d .grp{margin:0 12px;border-radius:14px;background:#fff;overflow:hidden;box-shadow:0 0 0 1px var(--ml-line)}
.d .sr{display:flex;align-items:center;gap:9px;height:36px;padding:0 10px;cursor:pointer}
.d .sr+.sr{border-top:1px solid var(--ml-line)}
.d .ti{flex:none;display:grid;place-items:center;width:22px;height:22px;border-radius:7px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ti svg{width:12px;height:12px}
.d .sr b{flex:1;font-size:11px;font-weight:500}
.d .sr s{color:var(--ml-muted);text-decoration:none}
.d .sr s svg{width:12px;height:12px}
.d .dm{position:absolute;inset:0;background:var(--ml-ink);opacity:.2;pointer-events:none}
.d .nb{height:30px;margin-top:34px;display:flex;align-items:center;padding:0 8px 0 26px}
.d .bk{appearance:none;border:0;background:transparent;cursor:pointer;display:flex;align-items:center;gap:1px;font:500 11px/1 var(--ml-font);color:var(--ml-accent)}
.d .bk svg{width:13px;height:13px}
.d .tg{display:flex;align-items:center;justify-content:space-between;height:36px;margin:0 14px;border-top:1px solid var(--ml-line);font-size:11px}
.d .tg b{font-weight:500}
.d .sw{position:relative;display:block;width:26px;height:16px;border-radius:8px;background:var(--ml-bar)}
.d .sw::after{content:"";position:absolute;left:2px;top:2px;width:12px;height:12px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(35,15,10,.25)}
.d .sw.on{background:var(--ml-accent)}
.d .sw.on::after{transform:translateX(10px)}
.d .ed{position:absolute;left:0;top:0;bottom:0;width:26px;z-index:50;touch-action:none}
.d .bk:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px;border-radius:6px}
`,
  run: (root) => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    let userUntil = 0, held = 0, heldAt = 0;
    const touch = () => { userUntil = performance.now() + 2500; };
    const relx = () => { held = Math.max(0, held - 1); touch(); };
    let swallow = false;
    root.addEventListener('pointerdown', () => { held++; heldAt = performance.now(); swallow = false; touch(); }, true);
    root.addEventListener('click', (e) => { if (swallow || e.target.closest('button,[data-tap]')) e.stopPropagation(); swallow = false; });
    root.addEventListener('pointerup', relx, true);
    root.addEventListener('pointercancel', relx, true);
    root.addEventListener('pointermove', () => { if (held) { heldAt = performance.now(); touch(); } }, true);
    root.addEventListener('wheel', touch, { passive: true, capture: true });
    root.addEventListener('dblclick', touch, true);
    root.addEventListener('keydown', touch, true);
    const busy = () => (held > 0 && performance.now() - heldAt < 8000) || performance.now() < userUntil;
    const ez = (k) => 1 - Math.pow(1 - k, 3);
    const ezio = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
    const tw = (d, fn, e) => new Promise((res, rej) => {
      let el = 0, l = performance.now();
      const f = (t) => {
        if (!root.isConnected || busy()) return rej('y');
        const dt = t - l; l = t;
        if (!root.dataset.paused) el += Math.min(dt, 50);
        const k = Math.min(1, el / d);
        fn(e ? e(k) : k, k);
        if (k < 1) requestAnimationFrame(f); else res();
      };
      requestAnimationFrame(f);
    });
    const hold = (d) => tw(d, () => {});
    let sp = 0;
    const spr = (from, to, v0, cb, k, c) => new Promise((res) => {
      const id = ++sp; k = k || 190; c = c || 19;
      let x = from, v = v0 || 0, l = performance.now();
      const f = (t) => {
        if (id !== sp || !root.isConnected) return res();
        let dt = Math.min(0.032, (t - l) / 1000); l = t;
        if (root.dataset.paused) dt = 0;
        const n = Math.ceil(dt / 0.008) || 1;
        for (let i = 0; i < n; i++) { v += (-k * (x - to) - c * v) * (dt / n); x += (v * dt) / n; }
        if (dt > 0 && Math.abs(x - to) < 0.2 && Math.abs(v) < 6) { cb(to); return res(); }
        cb(x);
        requestAnimationFrame(f);
      };
      requestAnimationFrame(f);
    });
    const dragger = (el, o) => {
      let id = null, x0 = 0, y0 = 0, pts = [];
      el.addEventListener('pointerdown', (e) => {
        if (id !== null || (o.ok && !o.ok(e))) return;
        id = e.pointerId; x0 = e.clientX; y0 = e.clientY;
        pts = [[performance.now(), e.clientX, e.clientY]];
        try { el.setPointerCapture(id); } catch (x) {}
        sp++;
        if (o.down) o.down(e);
      });
      el.addEventListener('pointermove', (e) => {
        if (e.pointerId !== id) return;
        const t = performance.now();
        pts.push([t, e.clientX, e.clientY]);
        while (pts.length > 2 && t - pts[0][0] > 100) pts.shift();
        if (Math.abs(e.clientX - x0) + Math.abs(e.clientY - y0) > 5) swallow = true;
        o.move(e.clientX - x0, e.clientY - y0, e);
      });
      const end = (e) => {
        if (e.pointerId !== id) return;
        id = null;
        const a = pts[0], b = pts[pts.length - 1];
        const dt = Math.max(16, b[0] - a[0]) / 1000;
        o.up(e.clientX - x0, e.clientY - y0, (b[1] - a[1]) / dt, (b[2] - a[2]) / dt, e);
      };
      el.addEventListener('pointerup', end);
      el.addEventListener('pointercancel', end);
    };
    const fg = root.querySelector('.fg');
    const fg2 = root.querySelector('.f2');
    const fgo = (x, y, p, o) => { fg.style.transform = 'translate(' + x + 'px,' + y + 'px)'; fg.style.scale = p ? 0.82 : 1; fg.style.opacity = o; };
    const at = (el, fx, fy) => {
      const r = el.getBoundingClientRect(), b = root.getBoundingClientRect();
      return [r.left - b.left + r.width * fx, r.top - b.top + r.height * fy];
    };
    const play = async (reset, script) => {
      await wait(500);
      while (root.isConnected) {
        try { reset(); await script(); } catch (x) {
          fg.style.opacity = 0;
          if (fg2) fg2.style.opacity = 0;
          if (x !== 'y') setTimeout(() => { throw x; });
          await wait(300);
        }
        while (root.isConnected && (busy() || root.dataset.paused)) await wait(250);
      }
    };
    const ph = root.querySelector('.ph');
    const p1 = root.querySelector('.p1');
    const p2 = root.querySelector('.p2');
    const dm = root.querySelector('.dm');
    const ed = root.querySelector('.ed');
    const row = root.querySelector('.sr');
    let X = 0, W = 0, x0 = 0;
    const geo = () => { W = ph.clientWidth; };
    const render = (x) => {
      X = x;
      const k = Math.max(0, Math.min(1, x / W));
      p2.style.transform = 'translateX(' + x + 'px)';
      p2.style.boxShadow = x >= W - 0.5 ? 'none' : '';
      p1.style.transform = 'translateX(' + -W * 0.3 * (1 - k) + 'px)';
      dm.style.opacity = 0.2 * (1 - k);
    };
    const pop = (v) => { geo(); return spr(X, W, v || 0, render, 170, 22); };
    const push = () => { geo(); return spr(X, 0, 0, render, 170, 22); };
    dragger(ed, {
      ok: () => X < W * 0.5 || W === 0,
      down: () => { geo(); x0 = X; },
      move: (dx) => render(Math.max(0, Math.min(W, x0 + dx))),
      up: (dx, dy, vx) => (X + vx * 0.12 > W * 0.5 ? pop(vx) : spr(X, 0, vx, render, 200, 20)),
    });
    root.querySelector('.bk').addEventListener('click', () => pop(0));
    row.addEventListener('click', () => { if (X > W * 0.5) push(); });
    const reset = () => { sp++; geo(); render(0); fg.style.opacity = 0; };
    const script = async () => {
      geo();
      await hold(700);
      const a = at(ph, 0, 0.55);
      const fx = a[0] + 9;
      fgo(fx, a[1], 0, 1);
      await hold(650);
      fgo(fx, a[1], 1, 1);
      await hold(150);
      await tw(760, (k) => { render(W * 0.66 * k); fgo(fx + X, a[1], 1, 1); }, ezio);
      fgo(fx + X, a[1], 0, 0);
      await pop(900);
      await hold(1100);
      const b = at(row, 0.5, 0.5);
      fgo(b[0], b[1], 0, 1);
      await hold(650);
      fgo(b[0], b[1], 1, 1);
      await hold(160);
      fgo(b[0], b[1], 0, 0);
      await push();
      await hold(1700);
    };
    play(reset, script);
    geo(); render(0);
  },
  prompt: `Build the iOS edge-swipe back gesture for a stacked page navigation. Keep two full-size pages absolutely stacked: the current page on top (with a soft shadow on its left edge) and the previous page underneath, with a dim layer on it. Put an invisible 26px strip along the left edge as the only touch target for the gesture (pointer events, setPointerCapture, touch-action: none) so ordinary horizontal swipes inside the page are untouched. While dragging, set the top page to translateX(dx) and the page behind to translateX(-30% of the width * (1 - progress)) with the dim layer at opacity 0.2 * (1 - progress), where progress = dx / width, so the previous page parallaxes in at a third of the speed. On release project the position with velocity * 0.12s: past half the width completes (spring the page off to the right with stiffness 170, damping 22, seeded with the release velocity) and then pops your router state; otherwise spring back to 0 with stiffness 200, damping 20. Pushing a page is the reverse, from translateX(100%) to 0 on the same spring. Use only transform and opacity, keep the strip off while a page is already popping, and let the visible Back button and the Escape key do the same pop for keyboard users. Move focus to the previous page heading after the pop, and under prefers-reduced-motion crossfade the pages instead of translating. Plain HTML, CSS and JS; wire it to your router's history.back().` ,
});

})();
