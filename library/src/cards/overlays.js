// Modals, toasts and drawers. Every overlay sits inside a mini window or phone so a page lies beneath it.
(() => {
const C = `.d{background:var(--ml-surface)}`;
const I = (p, w) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${w || 2.2}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
const X = I('<path d="M18 6 6 18M6 6l12 12"/>');
const CHECK = I('<path d="M5 12.5l4.5 4.5L19 7.5"/>', 2.8);
const PG = (extra) => `<div class="pg"><div class="tb"><i></i><i></i><i></i><span class="u"></span></div><div class="bd"><div class="ln h"></div><div class="ln"></div><div class="ln s"></div><div class="tl"><b></b><b></b></div></div>${extra || ''}</div>`;
const WIN = `
.d .win{position:absolute;inset:12px 16px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow);overflow:hidden}
.d .pg{position:absolute;inset:0;transform-origin:center;transition:transform 560ms var(--ml-ease),filter 560ms var(--ml-ease)}
.d .tb{display:flex;align-items:center;gap:4px;height:22px;padding:0 9px;border-bottom:1px solid var(--ml-line)}
.d .tb i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .tb .u{margin-left:8px;height:9px;width:38%;border-radius:99px;background:var(--ml-bar-2)}
.d .bd{display:grid;gap:7px;padding:12px 14px;align-content:start}
.d .ln{height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .ln.h{height:9px;width:44%;background:var(--ml-bar)}
.d .ln.s{width:68%}
.d .tl{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:3px}
.d .tl b{height:44px;border-radius:9px;background:var(--ml-bar-2)}
.d .sc{position:absolute;inset:0;background:rgba(35,15,10,.4);opacity:0;pointer-events:none;transition:opacity 380ms var(--ml-ease)}
.d.open .sc{opacity:1;pointer-events:auto}
.d .btn{appearance:none;border:0;cursor:pointer;border-radius:9px;padding:8px 12px;font:600 11.5px/1 var(--ml-font);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .btn:active,.d .btn.press{transform:scale(.94);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .btn.p{background:var(--ml-accent);color:#fff;box-shadow:0 4px 12px rgba(255,68,51,.28)}
.d .btn.g{background:var(--ml-surface);color:var(--ml-ink-2)}
`;
const END = ` Trap and restore focus (move focus into the layer on open, return it to the trigger on close, close on Escape), set the right role and aria attributes, and under prefers-reduced-motion drop the transforms and keep only a short opacity fade. Plain HTML, CSS and JS, no libraries.`;
const SPR = `linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.976 61.1%, 1 100%)`;
const BNC = `linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%)`;

ML.add({
  id: 'overlays-modal',
  cat: 'overlays',
  title: 'Modal from trigger',
  sub: 'Dialog scales out of the button',
  html: `<div class="win">${PG('<button class="btn p trg" type="button">Invite</button>')}<div class="sc"></div><div class="mw"><div class="mdl" role="dialog" aria-label="Invite your team"><b>Invite your team</b><p>They get access to every project.</p><div class="fld">maya@studio.co</div><div class="ac"><button class="btn g cl" type="button">Cancel</button><button class="btn p" type="button">Send invite</button></div></div></div></div>`,
  css: C + WIN + `
.d .trg{position:absolute;left:14px;bottom:14px}
.d .mw{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none}
.d .mdl{width:74%;display:grid;gap:8px;padding:14px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);transform:scale(.12);opacity:0;transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity 220ms ease}
.d.open .mdl{transform:scale(1);opacity:1;pointer-events:auto}
.d .mdl b{font:600 13.5px/1.1 var(--ml-font);letter-spacing:-.01em}
.d .mdl p{font:500 11px/1.3 var(--ml-font);color:var(--ml-muted)}
.d .fld{padding:9px 10px;border-radius:9px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 11.5px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .ac{display:flex;justify-content:flex-end;gap:6px;margin-top:2px}
`,
  run: (root) => {
    const btn = root.querySelector('.trg');
    const mdl = root.querySelector('.mdl');
    const sc = root.querySelector('.sc');
    const cl = root.querySelector('.cl');
    let hold = 0;
    let isOpen = false;
    const set = (v) => {
      if (v) {
        mdl.style.transition = 'none';
        mdl.style.transform = 'none';
        const m = mdl.getBoundingClientRect();
        const b = btn.getBoundingClientRect();
        mdl.style.transformOrigin = b.left + b.width / 2 - m.left + 'px ' + (b.top + b.height / 2 - m.top) + 'px';
        void mdl.offsetWidth;
        mdl.style.transform = '';
        void mdl.offsetWidth;
        mdl.style.transition = '';
      }
      isOpen = v;
      root.classList.toggle('open', v);
    };
    const user = (v) => () => {
      hold = Date.now() + 2500;
      set(v);
    };
    btn.addEventListener('click', user(true));
    sc.addEventListener('click', user(false));
    cl.addEventListener('click', user(false));
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) set(!isOpen);
      setTimeout(tick, isOpen ? 2300 : 1500);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a modal that scales out of the button that opened it. On open, measure the trigger's center relative to the dialog (getBoundingClientRect with the dialog's transform temporarily cleared) and set the dialog's transform-origin to that point in px, then transition the dialog from transform: scale(.12); opacity: 0 to scale(1); opacity: 1 over 600ms using a slight-overshoot spring such as ${BNC}. Dim the page with a scrim (rgba of your ink at 40 percent) that fades in over 380ms with cubic-bezier(.32,.72,0,1). Closing reverses it back into the trigger. Use the native <dialog> element with showModal() or role="dialog" aria-modal="true", close on Escape and scrim click, and lock page scroll while open.` + END,
});

ML.add({
  id: 'overlays-bottom-sheet',
  cat: 'overlays',
  title: 'Bottom sheet',
  sub: 'Slides up, drags down, rubber-bands at top',
  html: `<div class="ph"><i class="nt"></i><div class="scr"><div class="ah"><b>Photos</b></div><div class="g"><i></i><i></i><i></i><i></i><i></i><i></i></div><div class="sc"></div><div class="sh" style="touch-action:none"><i class="gr"></i><b>Share with</b><div class="op"><span><em>${I('<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>')}</em>Message</span><span><em>${I('<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>')}</em>Mail</span><span><em>${I('<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>')}</em>Copy</span><span><em>${I('<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>')}</em>More</span></div></div></div></div>`,
  css: C + `
.d .ph{position:absolute;left:50%;top:10px;bottom:10px;width:128px;margin-left:-64px;border-radius:24px;background:var(--ml-bg);box-shadow:0 0 0 4px var(--ml-ink),var(--ml-shadow-lg);overflow:hidden}
.d .nt{position:absolute;left:50%;top:5px;z-index:3;width:30px;height:8px;margin-left:-15px;border-radius:99px;background:var(--ml-ink)}
.d .scr{position:absolute;inset:0;overflow:hidden}
.d .ah{padding:22px 12px 8px}
.d .ah b{font:600 14px/1 var(--ml-font);letter-spacing:-.02em}
.d .g{display:grid;grid-template-columns:1fr 1fr 1fr;gap:3px;padding:0 6px}
.d .g i{aspect-ratio:1;border-radius:6px;background:linear-gradient(160deg,var(--ml-bar-2),var(--ml-bar))}
.d .g i:nth-child(2n){background:linear-gradient(160deg,var(--ml-accent-soft),var(--ml-accent-line))}
.d .sc{position:absolute;inset:0;background:rgba(35,15,10,.38);opacity:0;pointer-events:none;transition:opacity 380ms var(--ml-ease)}
.d.open .sc{opacity:1}
.d .sh{position:absolute;left:0;right:0;bottom:0;height:52%;padding:7px 10px 0;border-radius:18px 18px 0 0;background:var(--ml-bg);box-shadow:0 -8px 28px rgba(35,15,10,.16);transform:translateY(104%);transition:transform 620ms var(--ml-ease);cursor:grab}
.d.open .sh{transform:translateY(0)}
.d .gr{display:block;width:30px;height:4px;margin:0 auto 9px;border-radius:99px;background:var(--ml-bar)}
.d .sh>b{display:block;font:600 11.5px/1 var(--ml-font);margin-bottom:10px}
.d .op{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;text-align:center}
.d .op span{display:grid;justify-items:center;gap:5px;font:500 8.5px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .op em{display:grid;place-items:center;width:23px;height:23px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .op svg{width:12px;height:12px}
`,
  run: (root) => {
    const sh = root.querySelector('.sh');
    const sc = root.querySelector('.sc');
    let drag = false;
    let y0 = 0;
    let hold = 0;
    let isOpen = false;
    const rubber = (d) => -Math.min(26, Math.pow(-d, 0.72));
    sh.addEventListener('pointerdown', (e) => {
      drag = true;
      y0 = e.clientY;
      hold = Date.now() + 4000;
      sh.style.transition = 'none';
      sh.setPointerCapture(e.pointerId);
    });
    sh.addEventListener('pointermove', (e) => {
      if (!drag) return;
      const d = e.clientY - y0;
      sh.style.transform = 'translateY(' + (d > 0 ? d : rubber(d)) + 'px)';
    });
    const end = (e) => {
      if (!drag) return;
      drag = false;
      const d = e.clientY - y0;
      sh.style.transition = '';
      sh.style.transform = '';
      hold = Date.now() + 2500;
      if (d > sh.offsetHeight * 0.3) {
        isOpen = false;
        root.classList.remove('open');
      }
    };
    sh.addEventListener('pointerup', end);
    sh.addEventListener('pointercancel', end);
    sc.addEventListener('click', () => {
      isOpen = false;
      root.classList.remove('open');
      hold = Date.now() + 2500;
    });
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    const loop = async () => {
      while (root.isConnected) {
        if (root.dataset.paused || drag || Date.now() < hold) {
          await wait(300);
          continue;
        }
        isOpen = true;
        root.classList.add('open');
        await wait(1500);
        if (root.dataset.paused || drag || Date.now() < hold) continue;
        sh.style.transition = 'transform 280ms cubic-bezier(.2,.8,.3,1)';
        sh.style.transform = 'translateY(-15px)';
        await wait(300);
        sh.style.transition = '';
        sh.style.transform = '';
        await wait(1100);
        if (root.dataset.paused || drag || Date.now() < hold) continue;
        isOpen = false;
        root.classList.remove('open');
        await wait(1500);
      }
    };
    setTimeout(loop, 600);
  },
  prompt: `Build a draggable bottom sheet for a mobile web view. The sheet is position: absolute (or fixed on a real page) at the bottom, with a 30x4px grabber, 18px top radius and a soft upward shadow. Closed it sits at transform: translateY(104%); open it springs to translateY(0) over 620ms with cubic-bezier(.32,.72,0,1), while a scrim fades in. Dragging: on pointerdown capture the pointer, set transition: none and set touch-action: none on the sheet; on pointermove translate by the drag distance when pulling down, and when pulling up past the open position apply a rubber band, translateY(-min(26px, pow(-d, .72))) so it resists instead of moving freely. On pointerup, close if the sheet was dragged past about 30 percent of its height or flicked fast, otherwise clear the inline transform so the CSS spring returns it to 0. Tapping the scrim closes it. Add role="dialog", move focus inside on open, and a visible close control for keyboard users.` + END,
});

ML.add({
  id: 'overlays-drawer',
  cat: 'overlays',
  title: 'Side drawer',
  sub: 'Settings slide in, page steps back',
  html: `<div class="win">${PG('<button class="btn g trg" type="button" aria-label="Open settings">' + I('<path d="M21 4h-7M10 4H3M21 12h-9M8 12H3M21 20h-5M12 20H3M14 2v4M8 10v4M16 18v4"/>') + 'Settings</button>')}<div class="sc"></div><aside class="dr" aria-label="Settings"><div class="dh"><b>Settings</b><button class="x" type="button" aria-label="Close">${X}</button></div>
<div class="rw"><span>Notifications</span><i class="sw on"></i></div><div class="rw"><span>Auto-save</span><i class="sw"></i></div><div class="rw"><span>Weekly digest</span><i class="sw on"></i></div><div class="rw"><span>Two-step login</span><i class="sw"></i></div></aside></div>`,
  css: C + WIN + `
.d .trg{position:absolute;right:12px;bottom:12px;display:flex;align-items:center;gap:6px;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .trg svg{width:12px;height:12px}
.d.open .pg{transform:translateX(-14px) scale(.93);filter:saturate(.8)}
.d .dr{position:absolute;top:0;right:0;bottom:0;width:60%;padding:12px 13px;background:var(--ml-bg);box-shadow:-10px 0 32px rgba(35,15,10,.18);transform:translateX(104%);transition:transform 620ms var(--ml-ease);display:grid;align-content:start;gap:2px}
.d.open .dr{transform:translateX(0)}
.d .dh{display:flex;justify-content:space-between;align-items:center;margin-bottom:6px}
.d .dh b{font:600 13.5px/1 var(--ml-font);letter-spacing:-.01em}
.d .x{appearance:none;border:0;cursor:pointer;display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--ml-surface);color:var(--ml-ink-2)}
.d .x svg{width:10px;height:10px}
.d .x:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .rw{display:flex;justify-content:space-between;align-items:center;padding:9px 0;border-top:1px solid var(--ml-bar-2);font:500 11.5px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .sw{position:relative;width:28px;height:16px;border-radius:99px;background:var(--ml-bar);transition:background 300ms ease 400ms}
.d .sw::after{content:"";position:absolute;left:2px;top:2px;width:12px;height:12px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(35,15,10,.3);transition:transform var(--ml-bounce-dur) var(--ml-bounce) 400ms}
.d .sw.on{background:var(--ml-accent)}
.d .sw.on::after{transform:translateX(12px)}
`,
  run: (root) => {
    const btn = root.querySelector('.trg');
    const sc = root.querySelector('.sc');
    const x = root.querySelector('.x');
    const sws = [...root.querySelectorAll('.sw')];
    let hold = 0;
    let isOpen = false;
    const set = (v) => {
      isOpen = v;
      root.classList.toggle('open', v);
      if (v) setTimeout(() => sws[1].classList.add('on'), 900);
      else setTimeout(() => sws[1].classList.remove('on'), 700);
    };
    const user = (v) => () => {
      hold = Date.now() + 2500;
      set(v);
    };
    btn.addEventListener('click', user(true));
    sc.addEventListener('click', user(false));
    x.addEventListener('click', user(false));
    sws.forEach((s) => s.addEventListener('click', () => {
      hold = Date.now() + 2500;
      s.classList.toggle('on');
    }));
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) set(!isOpen);
      setTimeout(tick, isOpen ? 2700 : 1400);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a right-side settings drawer. A panel 60 percent of the viewport wide (max 420px) is position: absolute or fixed to the right edge, closed at transform: translateX(104%) and open at translateX(0) over 620ms with cubic-bezier(.32,.72,0,1), with a soft leftward shadow. At the same time push the page back: give the page wrapper transition: transform 560ms and on open set transform: translateX(-14px) scale(.93) with a slight desaturate, and fade in a scrim (ink at 40 percent) over it. Inside the drawer list setting rows separated by hairlines, each with a toggle switch (28x16 track, 12px knob that moves with translateX(12px) and a slight-overshoot spring such as ${BNC}). Close with the X button, Escape or a scrim click. Use <aside role="dialog" aria-modal="true" aria-label="Settings"> and keep the page inert while open.` + END,
});

ML.add({
  id: 'overlays-toast-stack',
  cat: 'overlays',
  title: 'Toast stack',
  sub: 'Toasts stack, older ones scale back',
  html: `<div class="win">${PG()}<div class="ts" role="status"></div></div>`,
  css: C + WIN + `
.d .ts{position:absolute;right:10px;bottom:10px;width:66%;height:50px}
.d .t{position:absolute;right:0;bottom:0;width:100%;display:flex;align-items:center;gap:9px;padding:9px 11px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);transform-origin:bottom right;transform:translateY(calc(var(--k,0) * -9px)) scale(calc(1 - var(--k,0) * .06));opacity:calc(1 - var(--k,0) * .22);transition:transform 520ms var(--ml-ease),opacity 360ms ease}
.d .t.in{transform:translateY(26px) scale(.92);opacity:0}
.d .t.out{transform:translateX(115%);opacity:0;transition:transform 420ms var(--ml-ease),opacity 320ms ease}
.d .t em{flex:none;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .t em svg{width:11px;height:11px}
.d .t div{display:grid;gap:3px;min-width:0}
.d .t b{font:600 11.5px/1 var(--ml-font);color:var(--ml-ink);white-space:nowrap}
.d .t span{font:500 10px/1 var(--ml-font);color:var(--ml-muted);white-space:nowrap}
.d .t u{margin-left:auto;display:grid;place-items:center;width:16px;height:16px;color:var(--ml-muted)}
.d .t u svg{width:9px;height:9px}
`,
  run: (root) => {
    const box = root.querySelector('.ts');
    const data = [
      ['Saved to library', '4 files added'],
      ['Maya R. joined', 'Invite accepted'],
      ['Export ready', 'report.csv, 2.4 MB'],
    ];
    const icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
    const cross = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
    const list = [];
    const layout = () => list.forEach((el, i) => {
      el.style.setProperty('--k', list.length - 1 - i);
      el.style.zIndex = i;
    });
    const wait = (ms) => new Promise((res) => {
      const t0 = Date.now();
      const step = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused) {
          setTimeout(step, 200);
          return;
        }
        if (Date.now() - t0 >= ms) return res();
        setTimeout(step, 40);
      };
      step();
    });
    const add = (d) => {
      const el = document.createElement('div');
      el.className = 't in';
      el.innerHTML = '<em>' + icon + '</em><div><b>' + d[0] + '</b><span>' + d[1] + '</span></div><u>' + cross + '</u>';
      box.appendChild(el);
      list.push(el);
      layout();
      void el.offsetWidth;
      el.classList.remove('in');
    };
    const drop = async () => {
      const el = list.pop();
      if (!el) return;
      el.classList.add('out');
      layout();
      await wait(450);
      el.remove();
    };
    box.addEventListener('click', (e) => {
      if (e.target.closest('u')) drop();
    });
    const loop = async () => {
      while (root.isConnected) {
        for (const d of data) {
          add(d);
          await wait(800);
        }
        await wait(1100);
        for (let i = 0; i < 3; i++) {
          await drop();
          await wait(250);
        }
        await wait(900);
      }
    };
    setTimeout(loop, 400);
  },
  prompt: `Build a toast stack in the bottom-right corner. Each toast is a white rounded card with a tinted check chip, a title, a one-line detail and a small close button. Stack them in one fixed-size container: every toast is position: absolute; bottom: 0; right: 0 and gets a --k custom property equal to its distance from the newest (0 for the newest). Style them from --k: transform: translateY(calc(var(--k) * -9px)) scale(calc(1 - var(--k) * .06)) with transform-origin: bottom right, and opacity: calc(1 - var(--k) * .22), so older toasts peek out above and shrink behind. A new toast enters from translateY(26px) scale(.92); opacity: 0 over 520ms cubic-bezier(.32,.72,0,1), and the older ones re-layout through the same transition. Dismiss by sliding right with translateX(115%) and fading, then remove the node. Cap the visible stack at three, pause auto-dismiss while the pointer hovers the stack, use role="status" aria-live="polite", and give the close buttons accessible names.` + END,
});

ML.add({
  id: 'overlays-tooltip',
  cat: 'overlays',
  title: 'Tooltip',
  sub: 'Springs from its anchor after a delay',
  html: `<div class="win">${PG()}<div class="bar">
<span class="an"><button class="ib" type="button" aria-label="Bookmark">${I('<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>')}</button><span class="tip" role="tooltip">Bookmark</span></span>
<span class="an"><button class="ib" type="button" aria-label="Copy link">${I('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>')}</button><span class="tip" role="tooltip">Copy link</span></span>
<span class="an"><button class="ib" type="button" aria-label="Duplicate">${I('<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>')}</button><span class="tip" role="tooltip">Duplicate</span></span>
</div></div>`,
  css: C + WIN + `
.d .pg{background:var(--ml-bg)}
.d .bar{position:absolute;left:50%;top:64%;transform:translate(-50%,-50%);display:flex;gap:10px;padding:7px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow),inset 0 0 0 1px var(--ml-line)}
.d .an{position:relative;display:block}
.d .ib{appearance:none;border:0;cursor:pointer;display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--ml-surface);color:var(--ml-ink-2);transition:background 250ms ease,color 250ms ease}
.d .ib svg{width:16px;height:16px}
.d .an:hover .ib,.d .an.on .ib{background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ib:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .tip{position:absolute;left:50%;bottom:calc(100% + 9px);margin-left:-35px;width:70px;text-align:center;padding:6px 0;border-radius:8px;background:var(--ml-ink);color:#fff;font:600 10.5px/1 var(--ml-font);white-space:nowrap;pointer-events:none;opacity:0;transform:translateY(8px) scale(.5);transform-origin:50% 100%;transition:transform 160ms ease,opacity 140ms ease}
.d .tip::after{content:"";position:absolute;left:50%;top:100%;width:8px;height:8px;margin:-4px 0 0 -4px;background:var(--ml-ink);transform:rotate(45deg);border-radius:0 0 2px 0}
.d .an:hover .tip,.d .an.on .tip{opacity:1;transform:none;transition:transform var(--ml-bounce-dur) var(--ml-bounce) 220ms,opacity 160ms ease 220ms}
`,
  run: (root) => {
    const ans = [...root.querySelectorAll('.an')];
    let hover = false;
    root.addEventListener('pointerenter', () => {
      hover = true;
      ans.forEach((a) => a.classList.remove('on'));
    });
    root.addEventListener('pointerleave', () => (hover = false));
    let k = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        const i = k++ % 4;
        ans.forEach((a, j) => a.classList.toggle('on', j === i));
      }
      setTimeout(tick, 1400);
    };
    setTimeout(tick, 600);
  },
  prompt: `Build a tooltip that springs out of its anchor. Wrap each icon button in a position: relative anchor and place the tooltip above it (bottom: calc(100% + 9px), centered) as a dark rounded label with a small rotated-square arrow (::after, 8px, rotated 45deg) pointing at the button. Hidden state: opacity 0, transform: translateY(8px) scale(.5), transform-origin: 50% 100% so it grows from the arrow tip. On :hover and :focus-visible of the anchor, show it with a 220ms hover-intent delay (transition-delay: 220ms on the show only) and a slight-overshoot spring such as ${BNC} over 600ms; hide it instantly with a short 160ms ease so moving across buttons feels snappy. Connect it with aria-describedby and role="tooltip", make Escape dismiss it, and show it on keyboard focus as well as hover. On touch devices skip hover tooltips. Animate only transform and opacity.` + END,
});

ML.add({
  id: 'overlays-popover',
  cat: 'overlays',
  title: 'Popover menu',
  sub: 'Menu grows from origin, items stagger',
  html: `<div class="win">${PG('<button class="btn g trg" type="button" aria-haspopup="menu" aria-expanded="false">Actions' + I('<path d="M6 9l6 6 6-6"/>', 2.6) + '</button>')}<div class="pop" role="menu">
<button type="button" role="menuitem" style="--i:0">${I('<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>')}Rename</button>
<button type="button" role="menuitem" style="--i:1">${I('<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>')}Duplicate</button>
<button type="button" role="menuitem" style="--i:2">${I('<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M10 12h4"/>')}Archive</button>
<button type="button" role="menuitem" style="--i:3" class="dg">${I('<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>')}Delete</button></div></div>`,
  css: C + WIN + `
.d .trg{position:absolute;right:12px;top:32px;display:flex;align-items:center;gap:5px;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .trg svg{width:11px;height:11px;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d.open .trg svg{transform:rotate(180deg)}
.d .pop{position:absolute;right:12px;top:68px;width:126px;padding:5px;border-radius:13px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);transform-origin:100% 0;transform:scale(.5);opacity:0;pointer-events:none;transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity 200ms ease}
.d.open .pop{transform:scale(1);opacity:1;pointer-events:auto}
.d .pop button{appearance:none;border:0;cursor:pointer;width:100%;display:flex;align-items:center;gap:8px;padding:8px 8px;border-radius:8px;background:none;text-align:left;font:500 11.5px/1 var(--ml-font);color:var(--ml-ink-2);opacity:0;transform:translateY(-6px);transition:opacity 200ms ease,transform 300ms var(--ml-ease),background 200ms ease}
.d .pop svg{width:12px;height:12px;color:var(--ml-muted)}
.d.open .pop button{opacity:1;transform:none;transition-delay:calc(70ms + var(--i) * 55ms),calc(70ms + var(--i) * 55ms),0ms}
.d .pop button:hover{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .pop button:hover svg{color:var(--ml-accent)}
.d .pop .dg:hover{background:#FFECEA;color:#D92D20}
.d .pop .dg:hover svg{color:#D92D20}
.d .pop button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
`,
  run: (root) => {
    const btn = root.querySelector('.trg');
    let hold = 0;
    let isOpen = false;
    const set = (v) => {
      isOpen = v;
      root.classList.toggle('open', v);
      btn.setAttribute('aria-expanded', String(v));
    };
    btn.addEventListener('click', () => {
      hold = Date.now() + 2500;
      set(!isOpen);
    });
    root.querySelectorAll('.pop button').forEach((b) => b.addEventListener('click', () => {
      hold = Date.now() + 1500;
      set(false);
    }));
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) set(!isOpen);
      setTimeout(tick, isOpen ? 2500 : 1400);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a popover menu that grows from its trigger. Anchor a small card under a button (position: absolute, aligned to the button's right edge) and set transform-origin to the corner nearest the button, here 100% 0. Closed: transform: scale(.5); opacity: 0; open: scale(1); opacity: 1 over 600ms with a slight-overshoot spring such as ${BNC}. The menu items stagger in after the container starts growing: each starts at opacity 0 and translateY(-6px) and settles over 300ms cubic-bezier(.32,.72,0,1) with transition-delay: calc(70ms + var(--i) * 55ms), where --i is the item index; remove the delay on close so it dismisses at once. Rotate the trigger's chevron 180deg while open. Items have a leading icon and a soft accent hover fill; the destructive item hovers red. Use aria-haspopup="menu", aria-expanded, role="menu" and role="menuitem", arrow-key navigation, Escape to close and return focus to the trigger.` + END,
});

ML.add({
  id: 'overlays-cookie',
  cat: 'overlays',
  title: 'Cookie banner',
  sub: 'Slides up, Accept collapses it away',
  html: `<div class="win">${PG()}<div class="ck" role="region" aria-label="Cookie consent"><span class="ci">${I('<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/><path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01M11 17v.01M7 14v.01"/>')}</span><div class="tx"><b>We use cookies</b><span>To improve your experience on this site.</span></div><div class="bt"><button class="btn g" type="button">Settings</button><button class="btn p acc" type="button">Accept</button></div></div></div>`,
  css: C + WIN + `
.d .ck{position:absolute;left:10px;right:10px;bottom:10px;display:flex;flex-wrap:wrap;align-items:center;gap:9px;padding:11px 12px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);transform-origin:50% 100%;transform:translateY(130%);transition:transform 640ms var(--ml-ease),opacity 360ms ease}
.d.open .ck{transform:none}
.d.gone .ck{transform:translateY(40%) scale(.85,.2);opacity:0;transition:transform 520ms var(--ml-ease),opacity 320ms ease 80ms}
.d .ci{flex:none;display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ci svg{width:14px;height:14px}
.d .tx{display:grid;gap:3px;min-width:0;flex:1}
.d .tx b{font:600 11.5px/1 var(--ml-font)}
.d .tx span{font:500 10px/1.25 var(--ml-font);color:var(--ml-muted)}
.d .bt{display:flex;justify-content:flex-end;gap:6px;flex:1 0 100%}
.d .bt .btn{padding:7px 12px;font-size:10.5px}
`,
  run: (root) => {
    const acc = root.querySelector('.acc');
    let hold = 0;
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    const accept = () => {
      acc.classList.add('press');
      setTimeout(() => acc.classList.remove('press'), 160);
      setTimeout(() => root.classList.add('gone'), 220);
    };
    acc.addEventListener('click', () => {
      hold = Date.now() + 2500;
      root.classList.add('gone');
    });
    const loop = async () => {
      while (root.isConnected) {
        if (root.dataset.paused || Date.now() < hold) {
          await wait(300);
          continue;
        }
        root.classList.remove('gone');
        root.classList.remove('open');
        await wait(700);
        root.classList.add('open');
        await wait(2300);
        accept();
        await wait(1900);
      }
    };
    setTimeout(loop, 400);
  },
  prompt: `Build a cookie consent banner that slides up from the bottom of the page. A rounded white bar, inset 10px from the edges, holds a tinted cookie icon, a short title with one line of explanation, and two buttons: a quiet "Settings" and a primary "Accept". It enters with transform: translateY(130%) to none over 640ms cubic-bezier(.32,.72,0,1), after a short delay on first paint. Pressing Accept gives the button a 90ms scale(.94) press, then the banner collapses away: transform: translateY(40%) scale(.85, .2) with transform-origin: 50% 100% plus opacity to 0, over about 520ms, then set hidden and remember the choice in localStorage (wrapped in try/catch) so it never reappears. Use role="region" with an accessible name, keep it out of the way of the page's primary actions, move no focus on load, and make sure both buttons are keyboard reachable.` + END,
});

ML.add({
  id: 'overlays-snackbar',
  cat: 'overlays',
  title: 'Undo snackbar',
  sub: 'Countdown bar runs, Undo restores the row',
  html: `<div class="win"><div class="tb"><i></i><i></i><i></i><span class="u"></span></div><div class="ib">
<div class="rw"><div class="in"><i class="av"></i><div><b>Maya R.</b><span>Design review notes</span></div></div></div>
<div class="rw gone-me" id="arch"><div class="in"><i class="av b"></i><div><b>Tomas</b><span>Invoice 2041 is attached</span></div></div></div>
<div class="rw"><div class="in"><i class="av c"></i><div><b>Priya</b><span>Re: launch checklist</span></div></div></div>
<div class="rw"><div class="in"><i class="av"></i><div><b>Noah</b><span>Lunch on Friday?</span></div></div></div></div>
<div class="sn" role="status"><span>Message archived</span><button type="button" class="un">Undo</button><i class="cd"></i></div></div>`,
  css: C + WIN + `
.d .ib{padding:4px 12px}
.d .rw{display:grid;grid-template-rows:1fr;transition:grid-template-rows 480ms var(--ml-ease),opacity 320ms ease,transform 480ms var(--ml-ease)}
.d .rw>.in{overflow:hidden;min-height:0;display:flex;align-items:center;gap:9px;border-bottom:1px solid var(--ml-bar-2);padding:9px 0}
.d .rw.arch{grid-template-rows:0fr;opacity:0;transform:translateX(30px)}
.d .rw.arch>.in{padding:0;border-color:transparent}
.d .av{flex:none;width:24px;height:24px;border-radius:50%;background:linear-gradient(160deg,var(--ml-accent-line),var(--ml-accent-2))}
.d .av.b{background:linear-gradient(160deg,var(--ml-bar-2),var(--ml-bar))}
.d .av.c{background:linear-gradient(160deg,var(--ml-accent-soft),var(--ml-accent-line))}
.d .in div{display:grid;gap:4px}
.d .in b{font:600 11.5px/1 var(--ml-font)}
.d .in span{font:500 10.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .sn{position:absolute;left:10px;right:10px;bottom:10px;display:flex;align-items:center;justify-content:space-between;padding:12px 8px 12px 14px;border-radius:12px;background:var(--ml-ink);color:#fff;font:500 12px/1 var(--ml-font);overflow:hidden;box-shadow:var(--ml-shadow-lg);transform:translateY(150%);transition:transform 560ms var(--ml-ease)}
.d.open .sn{transform:none}
.d .un{appearance:none;border:0;cursor:pointer;padding:6px 10px;border-radius:7px;background:none;color:var(--ml-accent-2);font:600 12px/1 var(--ml-font);transition:background 200ms ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .un:hover{background:rgba(255,255,255,.1)}
.d .un.press{background:rgba(255,255,255,.16);transform:scale(.92)}
.d .un:focus-visible{outline:2px solid var(--ml-accent-2);outline-offset:1px}
.d .cd{position:absolute;left:0;bottom:0;width:100%;height:3px;background:var(--ml-accent-2);transform-origin:left center;transform:scaleX(1)}
.d.open .cd{animation:cd 3200ms linear forwards}
@keyframes cd{from{transform:scaleX(1)}to{transform:scaleX(0)}}
`,
  run: (root) => {
    const row = root.querySelector('#arch');
    const un = root.querySelector('.un');
    let hold = 0;
    let timer = 0;
    const archive = () => {
      row.classList.add('arch');
      root.classList.remove('open');
      void root.offsetWidth;
      root.classList.add('open');
      clearTimeout(timer);
      timer = setTimeout(() => root.classList.remove('open'), 3300);
    };
    const undo = () => {
      clearTimeout(timer);
      row.classList.remove('arch');
      root.classList.remove('open');
    };
    un.addEventListener('click', () => {
      hold = Date.now() + 2500;
      undo();
    });
    row.addEventListener('click', () => {
      hold = Date.now() + 2500;
      archive();
    });
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    const loop = async () => {
      while (root.isConnected) {
        if (root.dataset.paused || Date.now() < hold) {
          await wait(300);
          continue;
        }
        archive();
        await wait(2000);
        if (root.dataset.paused || Date.now() < hold) continue;
        un.classList.add('press');
        await wait(170);
        un.classList.remove('press');
        undo();
        await wait(2200);
      }
    };
    setTimeout(loop, 700);
  },
  prompt: `Build an undo snackbar for a destructive-but-reversible action such as archiving an email. When the row is archived, collapse it without animating height: the row wrapper is display: grid with grid-template-rows: 1fr that transitions to 0fr, with opacity 0 and translateX(30px), over 480ms cubic-bezier(.32,.72,0,1), and its inner child has overflow: hidden and min-height: 0. At the same time slide a dark snackbar up from the bottom edge (translateY(150%) to none over 560ms) reading "Message archived" with an accent "Undo" text button. Draw a 3px countdown bar along its bottom edge using transform: scaleX(1) to scaleX(0), transform-origin: left, linear, over the dismiss time (about 5 seconds on a real site). Pause the countdown while the pointer or focus is on the snackbar. Undo cancels the timer and restores the row with the reverse transition; if the timer ends, hide the snackbar and commit the action. Use role="status" so the message is announced, and make Undo reachable by keyboard (also bind it to Ctrl/Cmd+Z).` + END,
});

ML.add({
  id: 'overlays-context-menu',
  cat: 'overlays',
  title: 'Context menu',
  sub: 'Opens at the pointer, scales from a corner',
  html: `<div class="win" tabindex="-1"><div class="tb"><i></i><i></i><i></i><span class="u"></span></div><div class="fl"><div><i></i><span>Brief.pdf</span></div><div><i></i><span>Mockup</span></div><div><i></i><span>Notes</span></div><div><i></i><span>Budget</span></div><div><i></i><span>Photos</span></div><div><i></i><span>Roadmap</span></div></div>
<div class="cm" role="menu"><button type="button" role="menuitem">Open<small>Enter</small></button><button type="button" role="menuitem">Rename<small>F2</small></button><button type="button" role="menuitem">Duplicate<small>Ctrl D</small></button><button type="button" role="menuitem" class="dg">Delete<small>Del</small></button></div>
<i class="cur">${'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3l14 7-6 2-2 6z" fill="#1D1D1F" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>'}</i><i class="rp"></i></div>`,
  css: C + WIN + `
.d .fl{display:grid;grid-template-columns:repeat(3,1fr);gap:10px 8px;padding:14px 16px}
.d .fl div{display:grid;justify-items:center;gap:6px}
.d .fl i{width:100%;max-width:56px;aspect-ratio:1.15;border-radius:9px;background:linear-gradient(160deg,var(--ml-bar-2),var(--ml-bar))}
.d .fl div:nth-child(3n+2) i{background:linear-gradient(160deg,var(--ml-accent-soft),var(--ml-accent-line))}
.d .fl span{font:500 10px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .cm{position:absolute;left:0;top:0;width:116px;padding:4px;border-radius:11px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg),0 0 0 1px var(--ml-line);opacity:0;transform:scale(.6);pointer-events:none;transition:transform 380ms var(--ml-bounce),opacity 160ms ease}
.d .cm.on{opacity:1;transform:scale(1);pointer-events:auto}
.d .cm button{appearance:none;border:0;cursor:pointer;width:100%;display:flex;justify-content:space-between;align-items:center;padding:7px 8px;border-radius:7px;background:none;font:500 11px/1 var(--ml-font);color:var(--ml-ink-2);text-align:left}
.d .cm small{font:500 8.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .cm button:hover{background:var(--ml-accent);color:#fff}
.d .cm button:hover small{color:rgba(255,255,255,.75)}
.d .cm .dg{color:#D92D20}
.d .cm .dg:hover{background:#D92D20;color:#fff}
.d .cm button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
.d .cur{position:absolute;left:0;top:0;width:15px;height:15px;pointer-events:none;transition:transform 780ms var(--ml-ease),opacity 250ms ease;z-index:3}
.d .cur svg{display:block;width:100%;height:100%}
.d .rp{position:absolute;left:0;top:0;width:24px;height:24px;margin:-12px 0 0 -12px;border-radius:50%;box-shadow:0 0 0 2px var(--ml-accent-2);opacity:0;pointer-events:none}
.d .rp.go{animation:rp 520ms ease-out}
@keyframes rp{0%{opacity:.9;transform:scale(.2)}100%{opacity:0;transform:scale(1.3)}}
`,
  run: (root) => {
    const win = root.querySelector('.win');
    const cm = root.querySelector('.cm');
    const cur = root.querySelector('.cur');
    const rp = root.querySelector('.rp');
    let real = false;
    let hold = 0;
    const show = (x, y) => {
      const W = win.clientWidth;
      const H = win.clientHeight;
      const w = cm.offsetWidth;
      const h = cm.offsetHeight;
      const fx = x + w > W - 4;
      const fy = y + h > H - 4;
      const left = fx ? x - w : x;
      const top = fy ? y - h : y;
      cm.style.transition = 'none';
      cm.classList.remove('on');
      void cm.offsetWidth;
      cm.style.transition = '';
      cm.style.left = left + 'px';
      cm.style.top = top + 'px';
      cm.style.transformOrigin = (fx ? 'right' : 'left') + ' ' + (fy ? 'bottom' : 'top');
      cm.classList.add('on');
    };
    const hide = () => cm.classList.remove('on');
    win.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const r = win.getBoundingClientRect();
      real = true;
      hold = Date.now() + 3000;
      cur.style.opacity = '0';
      show(e.clientX - r.left, e.clientY - r.top);
    });
    win.addEventListener('pointerdown', (e) => {
      if (e.button === 0 && !cm.contains(e.target)) hide();
    });
    cm.addEventListener('click', hide);
    root.addEventListener('pointerleave', () => {
      real = false;
      cur.style.opacity = '1';
    });
    const pts = [[0.2, 0.34], [0.78, 0.7], [0.58, 0.28], [0.16, 0.76]];
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    let k = 0;
    const loop = async () => {
      while (root.isConnected) {
        if (root.dataset.paused || real || Date.now() < hold) {
          await wait(300);
          continue;
        }
        const p = pts[k++ % pts.length];
        const x = p[0] * win.clientWidth;
        const y = p[1] * win.clientHeight;
        cur.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        await wait(850);
        if (real) continue;
        rp.style.transform = 'translate(' + x + 'px,' + y + 'px)';
        rp.classList.remove('go');
        void rp.offsetWidth;
        rp.classList.add('go');
        show(x, y);
        await wait(2000);
        hide();
        await wait(600);
      }
    };
    cur.style.transform = 'translate(' + win.clientWidth * 0.5 + 'px,' + win.clientHeight * 0.9 + 'px)';
    setTimeout(loop, 500);
  },
  prompt: `Build a custom context menu. Listen for the contextmenu event on the surface, call preventDefault(), and position a small menu absolutely at the pointer coordinates relative to its container. Before showing, measure the menu: if it would overflow the right edge, place it at x - width; if it would overflow the bottom, place it at y - height; then set transform-origin to the corner that touches the pointer (left/right and top/bottom accordingly). Closed: transform: scale(.6); opacity: 0; open: scale(1); opacity: 1 over about 380ms with a gentle overshoot such as ${BNC}. Items are 11px rows with right-aligned shortcut hints, an accent fill on hover and a red destructive item. Close on outside click, Escape, scroll or window blur. Use role="menu" and role="menuitem", move focus to the first item on open, support arrow keys, and keep the browser's native menu available via Shift+right-click for accessibility.` + END,
});

ML.add({
  id: 'overlays-alert',
  cat: 'overlays',
  title: 'Alert dialog',
  sub: 'Outside click gives a gentle shake',
  html: `<div class="win">${PG()}<div class="sc"></div><i class="rp"></i><div class="mw"><div class="dlg" role="alertdialog" aria-label="Delete project"><span class="ic">${I('<path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>')}</span><b>Delete this project?</b><p>All files and history will be removed. This cannot be undone.</p><div class="ac"><button class="btn g cl" type="button">Cancel</button><button class="btn dg" type="button">Delete</button></div></div></div></div>`,
  css: C + WIN + `
.d.open .pg{filter:blur(1.5px)}
.d .mw{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none}
.d .dlg{width:72%;display:grid;justify-items:center;gap:7px;padding:15px 14px 13px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);text-align:center;transform:scale(.9);opacity:0;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity 240ms ease}
.d.open .dlg{transform:scale(1);opacity:1;pointer-events:auto}
.d .dlg.shake{animation:shk 520ms ease-in-out}
.d .ic{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#FFECEA;color:#D92D20}
.d .ic svg{width:14px;height:14px}
.d .dlg b{font:600 13px/1.1 var(--ml-font);letter-spacing:-.01em}
.d .dlg p{font:500 10.5px/1.35 var(--ml-font);color:var(--ml-muted);max-width:190px}
.d .ac{display:grid;grid-template-columns:1fr 1fr;gap:6px;width:100%;margin-top:4px}
.d .btn.dg{background:#E5372B;color:#fff;box-shadow:0 4px 12px rgba(229,55,43,.26)}
.d .rp{position:absolute;left:12%;top:26%;width:26px;height:26px;margin:-13px 0 0 -13px;border-radius:50%;box-shadow:0 0 0 2px #fff;opacity:0;pointer-events:none}
.d .rp.go{animation:rp 560ms ease-out}
@keyframes rp{0%{opacity:.95;transform:scale(.2)}100%{opacity:0;transform:scale(1.4)}}
@keyframes shk{0%,100%{transform:translateX(0)}14%{transform:translateX(-7px)}30%{transform:translateX(6px)}46%{transform:translateX(-4px)}62%{transform:translateX(3px)}78%{transform:translateX(-1.5px)}}
`,
  run: (root) => {
    const dlg = root.querySelector('.dlg');
    const sc = root.querySelector('.sc');
    const rp = root.querySelector('.rp');
    const cl = root.querySelector('.cl');
    const del = root.querySelector('.dg');
    let hold = 0;
    const shake = () => {
      dlg.classList.remove('shake');
      void dlg.offsetWidth;
      dlg.classList.add('shake');
    };
    sc.addEventListener('click', () => {
      hold = Date.now() + 2500;
      shake();
    });
    cl.addEventListener('click', () => {
      hold = Date.now() + 2500;
      root.classList.remove('open');
    });
    del.addEventListener('click', () => {
      hold = Date.now() + 2500;
      root.classList.remove('open');
    });
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));
    const loop = async () => {
      while (root.isConnected) {
        if (root.dataset.paused || Date.now() < hold) {
          await wait(300);
          continue;
        }
        root.classList.add('open');
        await wait(1200);
        rp.classList.remove('go');
        void rp.offsetWidth;
        rp.classList.add('go');
        shake();
        await wait(1500);
        cl.classList.add('press');
        await wait(170);
        cl.classList.remove('press');
        root.classList.remove('open');
        await wait(1500);
      }
    };
    setTimeout(loop, 500);
  },
  prompt: `Build a destructive confirmation dialog. Dim and slightly blur the page behind it, then show a centered card with a red-tinted icon chip, a clear question ("Delete this project?"), one line of consequence, and two buttons: a neutral Cancel and a red Delete. It enters from transform: scale(.9); opacity: 0 with a critically damped spring such as ${SPR} over 590ms. Because this is an alert dialog, clicking the scrim must NOT dismiss it; instead replay a gentle shake on the card: @keyframes with translateX values -7px, 6px, -4px, 3px, -1.5px, 0 over 520ms ease-in-out, restarted each time by removing the class, forcing a reflow and adding it again. Escape and Cancel close it. Use role="alertdialog" with aria-labelledby and aria-describedby, focus Cancel first (the safe choice), trap focus, and under prefers-reduced-motion replace the shake with a brief outline flash.` + END,
});

ML.add({
  id: 'overlays-island',
  cat: 'overlays',
  title: 'Island notification',
  sub: 'A pill expands into a message and back',
  html: `<div class="ph"><div class="bg"></div><div class="st"><b>9:41</b><span></span></div><div class="isl" role="status"><div class="blk"><div class="mini"><i class="mav"></i></div><div class="full"><i class="fav"></i><div><b>Maya R.</b><span>Sent you 3 photos</span></div><em>now</em></div></div></div><div class="wd"><i></i><i></i><i></i><i></i></div></div>`,
  css: C + `
.d .ph{position:absolute;left:50%;top:10px;width:176px;height:260px;margin-left:-88px;border-radius:30px;background:var(--ml-bg);box-shadow:0 0 0 4px var(--ml-ink),var(--ml-shadow-lg);overflow:hidden}
.d .bg{position:absolute;inset:0;background:linear-gradient(170deg,var(--ml-accent-soft),#fff 62%)}
.d .st{position:absolute;left:0;right:0;top:11px;display:flex;justify-content:space-between;padding:0 18px;font:600 10px/1 var(--ml-font);color:var(--ml-ink)}
.d .st span{width:16px;height:7px;border-radius:2px;background:var(--ml-ink)}
.d .isl{position:absolute;left:8%;top:8px;width:84%;height:50px;background:var(--ml-ink);color:#fff;clip-path:inset(0 31% 62% 31% round 10px);transition:clip-path 640ms var(--ml-bounce)}
.d .isl.big{clip-path:inset(0 0 0 0 round 24px)}
.d .blk{position:absolute;inset:0}
.d .mini{position:absolute;left:0;right:0;top:0;height:19px;opacity:1;transition:opacity 160ms ease}
.d .isl.big .mini{opacity:0}
.d .mav{position:absolute;right:7px;top:6px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent-2)}
.d .full{position:absolute;inset:0;display:flex;align-items:center;gap:9px;padding:0 13px;opacity:0;transform:scale(.92);transition:opacity 160ms ease,transform 300ms var(--ml-ease)}
.d .isl.big .full{opacity:1;transform:none;transition:opacity 280ms ease 200ms,transform 520ms var(--ml-ease) 160ms}
.d .fav{flex:none;width:28px;height:28px;border-radius:50%;background:var(--ml-grad)}
.d .full div{display:grid;gap:4px;min-width:0}
.d .full b{font:600 11.5px/1 var(--ml-font)}
.d .full span{font:500 10px/1 var(--ml-font);color:rgba(255,255,255,.7);white-space:nowrap}
.d .full em{margin-left:auto;font:500 9px/1 var(--ml-font);font-style:normal;color:rgba(255,255,255,.5)}
.d .wd{position:absolute;left:12px;right:12px;top:82px;display:grid;grid-template-columns:1fr 1fr;gap:8px}
.d .wd i{height:52px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .wd i:nth-child(1){grid-column:span 2;height:60px}
`,
  run: (root) => {
    const isl = root.querySelector('.isl');
    let hold = 0;
    let big = false;
    const set = (v) => {
      big = v;
      isl.classList.toggle('big', v);
    };
    isl.addEventListener('click', () => {
      hold = Date.now() + 2500;
      set(!big);
    });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) set(!big);
      setTimeout(tick, big ? 2300 : 1300);
    };
    setTimeout(tick, 800);
  },
  prompt: `Build an island-style notification: a small black pill at the top center of a phone-shaped view that expands into a rich notification and contracts back. Make one dark element at its full expanded size and morph it with clip-path rather than animating width and height: collapsed clip-path: inset(0 31% 62% 31% round 10px), expanded clip-path: inset(0 0 0 0 round 24px), transitioning over 640ms with a slight-overshoot spring such as ${BNC}. Inside, the compact state shows only a small accent dot; the expanded content (avatar, sender name, message preview, "now") fades and scales in from scale(.92) with a 160-200ms delay so it appears after the shape opens, and fades out first on contraction. Auto-dismiss after about 2.5 seconds, tapping the pill toggles it, and announce the message through a role="status" live region. Under prefers-reduced-motion cross-fade between the two states instead of morphing.` + END,
});

ML.add({
  id: 'overlays-tour',
  cat: 'overlays',
  title: 'Onboarding tour',
  sub: 'A spotlight hops between UI elements',
  html: `<div class="win"><div class="hdr"><span class="lg"></span><span class="lg s"></span><i class="avt"></i></div><div class="bd"><div class="ln h"></div><div class="ln s"></div><button class="btn p nb" type="button">New project</button><div class="tl"><b></b><b class="t3"></b></div></div>
<div class="spot"></div><div class="tp" role="dialog" aria-label="Product tour"><small class="stp">1 of 3</small><b class="ttl">Your profile</b><p class="txt">Switch accounts and manage billing here.</p><button class="btn p nx" type="button">Next</button></div></div>`,
  css: C + `
.d .win{position:absolute;inset:12px 16px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow);overflow:hidden}
.d .hdr{display:flex;align-items:center;gap:8px;height:28px;padding:0 10px;border-bottom:1px solid var(--ml-line)}
.d .lg{width:30px;height:8px;border-radius:99px;background:var(--ml-bar)}
.d .lg.s{width:20px;background:var(--ml-bar-2)}
.d .avt{margin-left:auto;width:16px;height:16px;border-radius:50%;background:var(--ml-grad)}
.d .bd{display:grid;gap:7px;padding:11px 12px;justify-items:start}
.d .ln{height:6px;border-radius:3px;background:var(--ml-bar-2);width:60%}
.d .ln.h{height:9px;width:40%;background:var(--ml-bar)}
.d .ln.s{width:52%}
.d .btn{appearance:none;border:0;cursor:pointer;border-radius:9px;padding:8px 12px;font:600 11.5px/1 var(--ml-font);background:var(--ml-accent);color:#fff;box-shadow:0 4px 12px rgba(255,68,51,.28);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .btn:active{transform:scale(.94);transition-duration:90ms}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .nb{padding:7px 10px;font-size:10.5px;margin:2px 0 3px}
.d .tl{display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%}
.d .tl b{height:46px;border-radius:9px;background:var(--ml-bar-2)}
.d .spot{position:absolute;left:0;top:0;width:20px;height:20px;border-radius:9px;box-shadow:0 0 0 2px var(--ml-accent-2),0 0 0 999px rgba(35,15,10,.5);pointer-events:none;transition:transform 640ms var(--ml-ease),width 640ms var(--ml-ease),height 640ms var(--ml-ease)}
.d .tp{position:absolute;left:0;top:0;width:128px;display:grid;gap:5px;padding:10px 11px 10px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);transition:transform 640ms var(--ml-ease)}
.d .stp{font:500 8.5px/1 var(--ml-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ml-muted)}
.d .ttl{font:600 12px/1.1 var(--ml-font);letter-spacing:-.01em}
.d .txt{font:500 10px/1.3 var(--ml-font);color:var(--ml-muted)}
.d .nx{justify-self:end;padding:6px 10px;font-size:10px;margin-top:2px}
.d .tp .swap{animation:sw 380ms var(--ml-ease)}
@keyframes sw{0%{opacity:.2}100%{opacity:1}}
`,
  run: (root) => {
    const win = root.querySelector('.win');
    const spot = root.querySelector('.spot');
    const tp = root.querySelector('.tp');
    const nx = root.querySelector('.nx');
    const stp = root.querySelector('.stp');
    const ttl = root.querySelector('.ttl');
    const txt = root.querySelector('.txt');
    const sel = ['.avt', '.nb', '.t3'];
    const copy = [
      ['Your profile', 'Switch accounts and manage billing here.'],
      ['Start a project', 'Create your first project in one click.'],
      ['Track results', 'Reports update live as your team works.'],
    ];
    let i = 0;
    let hold = 0;
    const go = (n, instant) => {
      i = n % 3;
      const w = win.getBoundingClientRect();
      const r = root.querySelector(sel[i]).getBoundingClientRect();
      const x = r.left - w.left - 4;
      const y = r.top - w.top - 4;
      const sw = r.width + 8;
      const sh = r.height + 8;
      if (instant) {
        spot.style.transition = 'none';
        tp.style.transition = 'none';
      }
      spot.style.width = sw + 'px';
      spot.style.height = sh + 'px';
      spot.style.transform = 'translate(' + x + 'px,' + y + 'px)';
      const tw = tp.offsetWidth;
      const th = tp.offsetHeight;
      let ty = y + sh + 8;
      if (ty + th > win.clientHeight - 6) ty = y - th - 8;
      const tx = Math.max(6, Math.min(win.clientWidth - tw - 6, x + sw / 2 - tw / 2));
      tp.style.transform = 'translate(' + tx + 'px,' + Math.max(6, ty) + 'px)';
      stp.textContent = i + 1 + ' of 3';
      ttl.textContent = copy[i][0];
      txt.textContent = copy[i][1];
      nx.textContent = i === 2 ? 'Done' : 'Next';
      [ttl, txt].forEach((el) => {
        el.classList.remove('swap');
        void el.offsetWidth;
        el.classList.add('swap');
      });
      if (instant) {
        void spot.offsetWidth;
        spot.style.transition = '';
        tp.style.transition = '';
      }
    };
    nx.addEventListener('click', () => {
      hold = Date.now() + 2500;
      go(i + 1);
    });
    go(0, true);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) go(i + 1);
      setTimeout(tick, 2200);
    };
    setTimeout(tick, 1500);
  },
  prompt: `Build an onboarding product tour with a moving spotlight. Overlay the page with one absolutely positioned "spot" element whose box-shadow does the dimming: box-shadow: 0 0 0 2px your-accent-light, 0 0 0 999px rgba(ink, .5), with a 9px radius, so the page stays visible through a cutout. For each step, read the target's getBoundingClientRect relative to the container, add 4px padding, and move the spot with transform: translate(x, y) while its width and height ease to the target's size, 640ms cubic-bezier(.32,.72,0,1). A step card follows it with its own translate: place it below the target, flip above when it would overflow, and clamp it inside the container. The card shows "1 of 3", a title, one sentence and a Next button (Done on the last step); the title and text cross-fade on each step. Re-measure on resize and scroll. Use role="dialog" with aria-describedby, move focus to Next, allow Escape to skip and arrow keys to step, and scroll the target into view before measuring.` + END,
});
})();
