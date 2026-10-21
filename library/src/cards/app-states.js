(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    dash: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    refresh: '<path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    wifi: '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>',
    wifiOff: '<path d="M12 20h.01"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/><path d="M5 12.859a10 10 0 0 1 5.17-2.69"/><path d="M19 12.859a10 10 0 0 0-2.007-1.523"/><path d="M2 8.82a15 15 0 0 1 4.177-2.643"/><path d="M22 8.82a15 15 0 0 0-11.288-3.764"/><path d="m2 2 20 20"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    userPlus: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    archive: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
    tasks: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    server: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    box: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    timer: '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
    hash: '<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    life: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/>',
    dollar: '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    sliders: '<line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/>',
  };
  const I = (d, s = 18, w = 2) =>
    `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  // A check whose path can draw itself (pathLength 1 for the dashoffset trick).
  const CHK = (s = 16, w = 2.6) => I(P.check.replace('<path ', '<path pathLength="1" '), s, w);
  // The demo cursor every screen card uses for its autoplay (Lucide mouse-pointer-2, filled).
  const CURSOR = `<div class="cur off" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4.04 4.6a.5.5 0 0 1 .56-.56l15.5 6.1a.5.5 0 0 1-.05.94l-6.3 1.9a1 1 0 0 0-.66.66l-1.9 6.3a.5.5 0 0 1-.94.05Z"/></svg></div>`;
  const CURSOR_CSS = `
.d .cur{position:absolute;left:0;top:0;z-index:50;pointer-events:none;transition:transform 780ms var(--ml-ease),opacity .25s ease}
.d .cur svg{display:block;filter:drop-shadow(0 2px 3px rgba(35,15,10,.28));transition:transform 90ms ease-out}
.d .cur path{fill:var(--ml-ink);stroke:#fff;stroke-width:1.6;stroke-linejoin:round}
.d .cur.press svg{transform:scale(.8)}
.d .cur.off{opacity:0}`;

  // Shared styling for every card in this file (strings only). Each card adds its own layout on top.
  const BASE = `
.d .app{position:relative;height:100%;min-width:0}
.d .mark{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .brand{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:650;letter-spacing:-.02em;white-space:nowrap}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .av.s{width:28px;height:28px;font-size:10.5px}
.d .av.l{width:44px;height:44px;font-size:14px}
.d .av.t2{background:var(--ml-accent-line)}
.d .av.t3{background:#FFEFEA}
.d h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d h2{font-size:22px;line-height:1.2;font-weight:650;letter-spacing:-.025em}
.d .sub{margin-top:4px;font-size:13.5px;color:var(--ml-muted)}
.d .txt{font-size:14px;line-height:1.5;color:var(--ml-muted)}
.d .lbl{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .cta,.d .ghost{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:7px;height:40px;padding:0 16px;border:0;border-radius:11px;overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease,opacity .2s ease,box-shadow .2s ease}
.d .cta{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d .ghost{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);color:var(--ml-ink-2)}
.d .ghost:hover{background:var(--ml-surface)}
.d .cta:active,.d .ghost:active,.d button.press{transform:scale(.96)}
.d .cta:focus-visible,.d .ghost:focus-visible,.d .it:focus-visible,.d .chip:focus-visible,.d .tp:focus-visible,.d .ic:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .cta:disabled{opacity:.5;cursor:default;box-shadow:none}
.d .cta.busy{pointer-events:none}
.d .cta.busy::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.38) 50%,transparent 70%);background-size:220% 100%;animation:st-sheen 1.1s linear infinite}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .pill{display:inline-flex;align-items:center;gap:6px;padding:4px 9px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:600;white-space:nowrap}
.d .pill.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .pill.warn{background:rgba(255,159,10,.12);color:#B25E00}
.d .pill.bad{background:rgba(255,59,48,.09);color:#D70015}
.d .pill.mut{background:var(--ml-surface);color:var(--ml-muted)}
.d .ic{position:relative;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease}
.d .ic:hover{background:var(--ml-bg)}
.d .ic i{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px var(--ml-surface)}
.d .lk{padding:0;border:0;background:none;font:inherit;font-weight:600;color:var(--ml-accent-ink);cursor:pointer}
.d .lk:hover{text-decoration:underline}
.d .toast{position:absolute;left:50%;bottom:24px;z-index:30;display:flex;align-items:center;gap:9px;padding:11px 16px 11px 12px;border-radius:12px;background:var(--ml-ink);color:#fff;font-size:13px;font-weight:600;white-space:nowrap;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translate(-50%,14px);pointer-events:none;transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .toast.on{opacity:1;transform:translate(-50%,0)}
.d .toast svg{color:#5BE08A}
.d .shim{background:linear-gradient(100deg,var(--ml-bar-2) 30%,#F7F9FD 50%,var(--ml-bar-2) 70%);background-size:220% 100%;animation:st-sheen 1.3s linear infinite}
.d .okc{display:grid;place-items:center;width:64px;height:64px;border-radius:50%;background:rgba(29,185,84,.12);color:#12893C}
.d .il{display:block;width:100%;height:auto;overflow:visible}
.d .il .f1{fill:var(--ml-accent-soft)}.d .il .f2{fill:var(--ml-accent-line)}.d .il .f3{fill:var(--ml-accent)}.d .il .f4{fill:var(--ml-bar-2)}.d .il .f5{fill:#fff}.d .il .f6{fill:var(--ml-accent-2)}.d .il .f7{fill:var(--ml-bar)}.d .il .f8{fill:var(--ml-accent-ink)}.d .il .red{fill:#FF3B30}
.d .il .k1{fill:none;stroke:var(--ml-accent-line);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.d .il .k2{fill:none;stroke:var(--ml-accent);stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.d .il .k3{fill:none;stroke:var(--ml-bar);stroke-width:2.5;stroke-dasharray:2 7;stroke-linecap:round}
.d .il .k4{fill:none;stroke:var(--ml-accent-ink);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.d .il .k5{fill:none;stroke:#FF3B30;stroke-width:3;stroke-linecap:round}
@keyframes st-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes st-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes st-draw{to{stroke-dashoffset:0}}
@keyframes st-pop{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.06);opacity:1}100%{transform:none}}`;
  // Left sidebar (white, hairline) used by the shell-style screens.
  const SIDE = `
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .side .brand{padding:2px 6px 20px}
.d .nav{display:flex;flex-direction:column;gap:2px}
.d .nav .lbl{padding:0 10px 8px}
.d .it{display:flex;align-items:center;gap:11px;width:100%;height:38px;padding:0 10px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;cursor:pointer;transition:color .2s ease,background-color .2s ease}
.d .it svg{flex:none;color:var(--ml-muted)}
.d .it:hover{background:var(--ml-surface)}
.d .it.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:600}
.d .it.on svg{color:var(--ml-accent)}
.d .it em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .it.on em{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .foot{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .foot p{display:flex;flex-direction:column;min-width:0}
.d .foot b{font-size:13px;font-weight:600}
.d .foot small{overflow:hidden;font-size:12px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}`;
  // Top bar + scrolling page region.
  const TOP = `
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .top{display:flex;flex:none;align-items:center;gap:12px;height:62px;padding:0 28px;background:rgba(255,255,255,.72);border-bottom:1px solid var(--ml-line)}
.d .crumb{margin-right:auto;font-size:13.5px;color:var(--ml-muted)}
.d .crumb span{margin:0 7px;color:var(--ml-bar)}
.d .crumb b{font-weight:600;color:var(--ml-ink)}
.d .search{display:flex;align-items:center;gap:8px;height:38px;padding:0 12px;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .2s ease,color .2s ease}
.d .search:focus-within,.d .search.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .search input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:13.5px;color:var(--ml-ink)}
.d .search input::placeholder{color:var(--ml-muted)}
.d .page{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:24px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .head{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}`;
  // Compact autoplay driver text for the prompts (the same idea in every card).
  const ENDP = ' Plain HTML, CSS and JS, no libraries; React-friendly structure.';

  // ---------------------------------------------------------------- 1. Empty first project
  ML.add({
    id: 'app-states-empty-project',
    cat: 'app-states',
    title: 'Empty first project',
    sub: 'Create fills the empty page with a project',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span>Halden</div>
    <nav class="nav" aria-label="Main">
      <p class="lbl">Workspace</p>
      <button class="it" type="button">${I(P.dash)}<span>Overview</span></button>
      <button class="it on" type="button" aria-current="page">${I(P.folder)}<span>Projects</span></button>
      <button class="it" type="button">${I(P.users)}<span>Clients</span></button>
      <button class="it" type="button">${I(P.receipt)}<span>Invoices</span></button>
      <button class="it" type="button">${I(P.chart)}<span>Reports</span></button>
    </nav>
    <div class="foot"><span class="av">MR</span><p><b>Maya Reyes</b><small>maya@halden.co</small></p></div>
  </aside>
  <div class="main">
    <header class="top">
      <p class="crumb">Halden<span>/</span><b>Projects</b></p>
      <label class="search" style="width:280px">${I(P.search, 16)}<input type="search" placeholder="Search projects" aria-label="Search projects"></label>
      <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
      <span class="av">MR</span>
    </header>
    <main class="page" data-s="empty">
      <div class="head">
        <div><h1>Projects</h1><p class="sub cnt">No projects yet</p></div>
        <button class="cta new" type="button">${I(P.plus, 16)}New project</button>
      </div>
      <div class="stage">
        <section class="pane empty" aria-label="No projects">
          <div class="hero">
            <div class="ill"><svg class="il" viewBox="0 0 240 170" aria-hidden="true">
              <ellipse class="f4" cx="120" cy="156" rx="84" ry="8"/>
              <g class="st-f2"><rect class="f2" x="50" y="42" width="112" height="88" rx="14" transform="rotate(-8 106 86)"/></g>
              <g class="st-f1"><rect class="f1" x="76" y="36" width="112" height="90" rx="14" transform="rotate(6 132 80)"/></g>
              <rect class="f5" x="70" y="30" width="116" height="100" rx="14"/><rect class="k1" x="70" y="30" width="116" height="100" rx="14"/>
              <rect class="f4" x="84" y="44" width="46" height="8" rx="4"/><rect class="f4" x="84" y="58" width="24" height="6" rx="3"/>
              <circle class="k3" cx="128" cy="96" r="22"/><path class="k2" d="M128 86v20M118 96h20"/>
              <g class="st-spark"><path class="f6" d="M200 30l3.2 8.4 8.4 3.2-8.4 3.2-3.2 8.4-3.2-8.4-8.4-3.2 8.4-3.2z"/></g>
              <circle class="f2" cx="46" cy="104" r="4"/><circle class="f2" cx="208" cy="112" r="3"/>
            </svg></div>
            <h2>Start your first project</h2>
            <p class="txt">Projects keep the tasks, files and invoices for one client in one place.</p>
            <div class="btns"><button class="cta mk" type="button">${I(P.plus, 16)}<span>Create project</span></button><button class="ghost" type="button">${I(P.file, 16)}Import from CSV</button></div>
          </div>
          <div class="card tpl">
            <p class="lbl">Or start from a template</p>
            <div class="tpls">
              <button class="tp" type="button"><span class="ti">${I(P.userPlus, 20)}</span><span class="tn"><b>Client onboarding</b><small>12 tasks - 2 weeks</small></span></button>
              <button class="tp" type="button"><span class="ti">${I(P.layers, 20)}</span><span class="tn"><b>Website build</b><small>18 tasks - 6 weeks</small></span></button>
              <button class="tp" type="button"><span class="ti">${I(P.receipt, 20)}</span><span class="tn"><b>Monthly retainer</b><small>8 tasks - recurring</small></span></button>
            </div>
          </div>
        </section>
        <section class="pane full" aria-label="Your projects">
          <div class="pg">
            <article class="card pc in" style="--i:0">
              <div class="ph"><span class="pi">${I(P.folder, 22)}</span><div class="pnm"><h3 class="pn">Halden launch plan</h3><p class="pt">Blank project</p></div><span class="pill">Planning</span><button class="ic more" type="button" aria-label="Archive project">${I(P.archive, 18)}</button></div>
              <div class="stats"><p><span class="lbl">Tasks</span><b class="pk">0</b></p><p><span class="lbl">Due</span><b>30 Oct</b></p><p><span class="lbl">Budget</span><b>$4,800</b></p></div>
              <div class="prog"><p><span>Progress</span><b>0%</b></p><i><s></s></i></div>
              <div class="pf"><span class="av s">MR</span><span>Created just now by you</span></div>
            </article>
            <button class="newtile in" style="--i:1" type="button">${I(P.plus, 20)}<span>New project</span></button>
            <aside class="card steps in" style="--i:2">
              <div class="sh"><h3>Get set up</h3><span class="pill">1 of 4</span></div>
              <ul>
                <li class="dn"><span class="ck">${I(P.check, 12, 3)}</span>Create a project</li>
                <li><span class="ck"></span>Invite your team</li>
                <li><span class="ck"></span>Add the first task</li>
                <li><span class="ck"></span>Send an invoice</li>
              </ul>
            </aside>
          </div>
        </section>
      </div>
    </main>
  </div>
  <div class="toast" role="status">${I(P.check, 16, 2.6)}<span>Project created</span></div>
  ${CURSOR}
</div>`,
    css: `${BASE}${SIDE}${TOP}
.d .app{display:grid;grid-template-columns:220px minmax(0,1fr)}
.d .stage{position:relative;display:grid;flex:1;min-height:0}
.d .pane{grid-area:1/1;min-height:0;min-width:0;transition:opacity .45s var(--ml-ease),transform .6s var(--ml-spring)}
.d .page[data-s="full"] .pane.empty,.d .page[data-s="empty"] .pane.full{opacity:0;visibility:hidden;pointer-events:none;transition:opacity .35s ease,transform .5s var(--ml-ease),visibility 0s linear .4s}
.d .page[data-s="full"] .pane.empty{transform:translateY(-14px)}
.d .page[data-s="empty"] .pane.full{transform:translateY(14px)}
.d .pane.empty{display:grid;grid-template-rows:minmax(0,1fr) auto;gap:18px}
.d .hero{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:0;padding:8px 0;text-align:center}
.d .ill{width:min(230px,100%);margin-bottom:14px}
.d .st-f2{animation:st-bob 5.4s ease-in-out infinite}
.d .st-f1{animation:st-bob 5.4s ease-in-out -1.8s infinite}
.d .st-spark{transform-origin:200px 41px;animation:st-twinkle 3.2s ease-in-out infinite}
.d .hero .txt{max-width:380px;margin-top:8px}
.d .btns{display:flex;gap:10px;margin-top:20px}
.d .tpl{padding:16px 18px 18px}
.d .tpls{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:12px}
.d .tp{display:flex;align-items:center;gap:12px;padding:14px;border:0;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:left;cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease,box-shadow .2s ease}
.d .tp:hover{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .tp.press,.d .tp:active{transform:scale(.97)}
.d .ti{display:grid;flex:none;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--ml-bg);color:var(--ml-accent);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .tn{display:flex;flex-direction:column;gap:2px;min-width:0}
.d .tn b{font-size:14px;font-weight:600}
.d .tn small{font-size:12.5px;color:var(--ml-muted)}
.d .pg{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);gap:16px;height:100%}
.d .pg .in{animation:st-in 560ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 70ms + 160ms)}
.d .pc{grid-column:1;grid-row:1;display:flex;flex-direction:column;gap:18px;padding:20px}
.d .ph{display:flex;align-items:center;gap:14px}
.d .pi{display:grid;flex:none;place-items:center;width:48px;height:48px;border-radius:14px;color:#fff;background:var(--ml-grad);box-shadow:0 8px 18px rgba(255,68,51,.22)}
.d .pnm{flex:1;min-width:0}
.d h3{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .pt{margin-top:2px;font-size:13px;color:var(--ml-muted)}
.d .stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.d .stats p{display:flex;flex-direction:column;gap:6px;padding:12px 14px;border-radius:12px;background:var(--ml-surface)}
.d .stats b{font-size:20px;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.d .prog p{display:flex;justify-content:space-between;font-size:12.5px;color:var(--ml-muted)}
.d .prog b{font-weight:600;color:var(--ml-ink)}
.d .prog i{display:block;height:6px;margin-top:8px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .prog s{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.04);transform-origin:0 50%}
.d .pf{display:flex;align-items:center;gap:10px;font-size:12.5px;color:var(--ml-muted)}
.d .newtile{grid-column:1;grid-row:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;min-height:96px;border:0;border-radius:16px;background:rgba(255,255,255,.5);box-shadow:inset 0 0 0 1.5px var(--ml-bar);font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease}
.d .newtile:hover{background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .steps{grid-column:2;grid-row:1/3;padding:20px}
.d .sh{display:flex;align-items:center;justify-content:space-between}
.d .steps ul{display:flex;flex-direction:column;margin-top:10px;list-style:none}
.d .steps li{display:flex;align-items:center;gap:12px;padding:14px 0;border-bottom:1px solid var(--ml-line);font-size:14px;font-weight:500;color:var(--ml-ink-2)}
.d .steps li:last-child{border-bottom:0}
.d .ck{display:grid;flex:none;place-items:center;width:22px;height:22px;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff}
.d li.dn{color:var(--ml-muted);text-decoration:line-through}
.d li.dn .ck{background:var(--ml-accent);box-shadow:none}
.d .page[data-s="full"] .prog s{animation:st-grow 900ms var(--ml-ease) 500ms both}
@keyframes st-grow{from{transform:scaleX(0)}to{transform:scaleX(.04)}}
@keyframes st-bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes st-twinkle{0%,100%{transform:scale(1) rotate(0)}50%{transform:scale(.7) rotate(18deg)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .top .search{display:none}
  .d .top{padding:0 16px}
  .d .page{padding:18px 16px}
  .d .head{align-items:flex-start}
  .d .tpls{grid-template-columns:minmax(0,1fr)}
  .d .btns{flex-direction:column;width:100%;max-width:260px}
  .d .pg{grid-template-columns:minmax(0,1fr);grid-template-rows:auto}
  .d .pc,.d .newtile,.d .steps{grid-column:1;grid-row:auto}
  .d .stats b{font-size:17px}
}
@media (prefers-reduced-motion: reduce){.d .st-f1,.d .st-f2,.d .st-spark{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const page = $('.page');
      const cnt = $('.cnt');
      const toast = $('.toast');
      const mk = $('.mk');
      const T = [['Client onboarding', 'Northgate onboarding', 12], ['Website build', 'Solace website build', 18], ['Monthly retainer', 'Kestrel retainer', 8]];
      let busy = false;
      const say = async (msg) => {
        toast.querySelector('span').textContent = msg;
        toast.classList.add('on');
        await wait(2000);
        toast.classList.remove('on');
      };
      const create = async (name, tpl, tasks, btn) => {
        if (busy || page.dataset.s === 'full') return;
        busy = true;
        btn.classList.add('busy');
        await wait(700);
        $('.pn').textContent = name;
        $('.pt').textContent = tpl;
        $('.pk').textContent = tasks;
        page.dataset.s = 'full';
        cnt.textContent = '1 project';
        btn.classList.remove('busy');
        busy = false;
        say('Project created');
      };
      mk.addEventListener('click', () => create('Halden launch plan', 'Blank project', 0, mk));
      $('.new').addEventListener('click', () => mk.click());
      $('.newtile').addEventListener('click', () => say('Archive this project to start another'));
      root.querySelectorAll('.tp').forEach((b, i) => b.addEventListener('click', () => create(T[i][1], T[i][0], T[i][2], b)));
      $('.more').addEventListener('click', () => {
        page.dataset.s = 'empty';
        cnt.textContent = 'No projects yet';
        say('Project archived');
      });

      // Autoplay: the cursor presses Create project, holds on the filled page, then archives it again.
      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(2600);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (page.dataset.s !== 'empty') $('.more').click();
          if (!(await tap(mk, 0.5, 0.55))) continue;
          await wait(4200);
          if (!idle()) continue;
          if (!(await tap($('.more'), 0.5, 0.55))) continue;
          await wait(2800);
        }
      })();
    },
    prompt: `Build an empty state for the first visit to a Projects page inside an app shell (white sidebar 220px, 62px top bar, scrolling page region). The screen is a finished composition on first paint, not an empty page that loads.

Layout: page header with the title "Projects", a muted line "No projects yet" and a primary "New project" button. Below, the state fills the region: a centered block with a drawn SVG illustration (three stacked rounded cards, the front one holding a dashed circle with a plus, a small star that twinkles), an h2 "Start your first project", one sentence of help text, a primary "Create project" button and a secondary "Import from CSV". Under it a card with a "Or start from a template" micro-label and three template buttons (icon tile, name, "12 tasks - 2 weeks") in a 3-column grid.

Behavior: Create project or any template button shows a light sheen across the button (no spinner) for 700ms, then the empty pane fades up and out (opacity plus translateY -14px) while the filled pane rises in: a project card (icon tile, name, template, status pill, 3 stat tiles, progress bar, avatar), a dashed "New project" tile and a "Get set up" checklist with the first item already ticked. The blocks enter with opacity and translateY(8px), staggered 70ms, the progress bar grows with scaleX. A toast slides in ("Project created"). The card's archive button returns to the empty state with an "archived" toast. Update the header count text with each change. The illustration floats slowly (translateY 6px, 5s).

Accessibility: panes are labelled sections, the toast has role="status", real buttons with focus-visible rings, prefers-reduced-motion stops the float. Phone layout below 760px: hide the sidebar, stack templates and the filled layout in one column.${ENDP} Components: Sidebar, TopBar, EmptyState, TemplateRow, ProjectCard, SetupChecklist, Toast.`,
  });

  // ---------------------------------------------------------------- 2. No search results
  ML.add({
    id: 'app-states-no-results',
    cat: 'app-states',
    title: 'No search results',
    sub: 'Clear filters and the results come back',
    html: `
<div class="app">
  <header class="top">
    <div class="brand"><span class="mark">${I(P.tasks, 16)}</span>Fernway</div>
    <nav class="tabs" aria-label="Main"><button class="tab on" type="button" aria-current="page">Tasks</button><button class="tab" type="button">Projects</button><button class="tab" type="button">People</button><button class="tab" type="button">Reports</button></nav>
    <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
    <span class="av">TL</span>
  </header>
  <main class="page">
    <div class="head">
      <div><h1>All tasks</h1><p class="sub">184 tasks across 12 projects</p></div>
      <button class="ghost sv" type="button">${I(P.sliders, 16)}Saved view</button>
    </div>
    <section class="card panel">
      <div class="bar">
        <label class="search big">${I(P.search, 17)}<input type="search" value="retrospective" placeholder="Search tasks" aria-label="Search tasks"></label>
        <span class="cnt" aria-live="polite">0 results</span>
      </div>
      <div class="chips">
        <button class="chip" data-k="st" type="button" aria-label="Remove filter Status: Done">Status: Done${I(P.x, 13, 2.4)}</button>
        <button class="chip" data-k="ow" type="button" aria-label="Remove filter Owner: Hana Kim">Owner: Hana Kim${I(P.x, 13, 2.4)}</button>
        <button class="chip" data-k="du" type="button" aria-label="Remove filter Due: This week">Due: This week${I(P.x, 13, 2.4)}</button>
      </div>
      <div class="body" data-n="0">
        <div class="none">
          <div class="ill"><svg class="il" viewBox="0 0 220 150" aria-hidden="true">
            <ellipse class="f4" cx="110" cy="138" rx="78" ry="7"/>
            <rect class="f5" x="34" y="26" width="132" height="22" rx="8"/><rect class="k1" x="34" y="26" width="132" height="22" rx="8"/>
            <rect class="f4" x="46" y="34" width="56" height="6" rx="3"/>
            <rect class="f5" x="34" y="56" width="132" height="22" rx="8"/><rect class="k1" x="34" y="56" width="132" height="22" rx="8"/>
            <rect class="f4" x="46" y="64" width="72" height="6" rx="3"/>
            <rect class="f5" x="34" y="86" width="132" height="22" rx="8"/><rect class="k1" x="34" y="86" width="132" height="22" rx="8"/>
            <rect class="f4" x="46" y="94" width="40" height="6" rx="3"/>
            <g class="st-lens"><circle class="f1" cx="146" cy="84" r="30"/><circle class="k2" cx="146" cy="84" r="30"/><path class="k2" d="M168 106l18 18"/><path class="k1" d="M136 78l20 12M156 78l-20 12" style="stroke:var(--ml-accent-2)"/></g>
          </svg></div>
          <h2>No results for "<span class="qq"></span>"</h2>
          <p class="txt why">Nothing matches that search with 3 filters applied.</p>
          <div class="acts"><button class="cta clr" type="button">Clear all filters</button></div>
          <p class="try"><span>Or try</span><button class="sg" type="button">sprint</button><button class="sg" type="button">launch</button><button class="sg" type="button">template</button></p>
        </div>
        <ul class="res" aria-label="Results"></ul>
      </div>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:flex;flex-direction:column}
.d .top{display:flex;flex:none;align-items:center;gap:16px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tabs{display:flex;gap:4px;margin:0 auto 0 18px;height:100%}
.d .tab{position:relative;height:100%;padding:0 14px;border:0;background:none;font-size:14px;font-weight:500;color:var(--ml-muted);cursor:pointer;transition:color .2s ease}
.d .tab:hover{color:var(--ml-ink)}
.d .tab.on{color:var(--ml-ink);font-weight:600}
.d .tab.on::after{content:"";position:absolute;left:12px;right:12px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .page{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:24px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .head{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}
.d .panel{display:flex;flex:1;flex-direction:column;min-height:0;padding:18px 20px 20px}
.d .bar{display:flex;align-items:center;gap:16px}
.d .search{display:flex;align-items:center;gap:10px;flex:1;max-width:520px;height:44px;padding:0 14px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .2s ease,background-color .2s ease,color .2s ease}
.d .search:focus-within,.d .search.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .search input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:14.5px;color:var(--ml-ink)}
.d .cnt{margin-left:auto;font:600 12.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .chips{display:flex;flex-wrap:wrap;gap:8px;min-height:36px;margin-top:14px}
.d .chip{display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 10px 0 13px;border:0;border-radius:999px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:13px;font-weight:600;color:var(--ml-accent-ink);cursor:pointer;transition:opacity .22s ease,transform .3s var(--ml-ease),background-color .2s ease}
.d .chip:hover{background:var(--ml-accent-line)}
.d .chip.out{opacity:0;transform:scale(.88)}
.d .chip[hidden]{display:none}
.d .body{display:flex;flex:1;flex-direction:column;min-height:0;margin-top:6px;border-top:1px solid var(--ml-line)}
.d .none{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;padding:12px 0;text-align:center;animation:st-in 520ms var(--ml-spring) both}
.d .body:not([data-n="0"]) .none,.d .body[data-n="0"] .res{display:none}
.d .none .ill{width:min(210px,60%);margin-bottom:12px}
.d .st-lens{animation:st-scan 4.2s ease-in-out infinite}
.d .none .txt{max-width:380px;margin-top:6px}
.d .acts{margin-top:18px}
.d .try{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:8px;margin-top:18px;font-size:13px;color:var(--ml-muted)}
.d .sg{height:30px;padding:0 12px;border:0;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease}
.d .sg:hover{background:var(--ml-accent-soft)}
.d .res{display:flex;flex:1;flex-direction:column;min-height:0;overflow-y:auto;list-style:none}
.d .res li{display:flex;flex:1;align-items:center;gap:14px;min-height:60px;padding:0 4px;border-bottom:1px solid var(--ml-line);animation:st-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i) * 70ms + 80ms)}
.d .res li:last-child{border-bottom:0}
.d .res p{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0}
.d .res b{overflow:hidden;font-size:14.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .res small{font-size:12.5px;color:var(--ml-muted)}
.d .res mark{padding:1px 3px;border-radius:5px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .res time{width:60px;text-align:right;font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
@keyframes st-scan{0%,100%{transform:translate(0,0)}50%{transform:translate(-14px,10px)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .tabs{display:none}
  .d .top{padding:0 16px}
  .d .brand{margin-right:auto}
  .d .page{padding:18px 16px}
  .d .head{align-items:flex-start}
  .d .panel{padding:16px}
  .d .cnt,.d .res time{display:none}
  .d .search{max-width:none}
}
@media (prefers-reduced-motion: reduce){.d .st-lens{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const D = [
        { t: 'Sprint 41 retrospective', p: 'Fernway app', o: 'Hana Kim', s: 'Open', d: 'this', due: 'Fri' },
        { t: 'Q3 retrospective notes', p: 'Operations', o: 'Tomas Lindqvist', s: 'Done', d: 'last', due: 'Oct 9' },
        { t: 'Retrospective template refresh', p: 'Playbooks', o: 'Priya Nair', s: 'Open', d: 'next', due: 'Oct 21' },
        { t: 'Launch retrospective, Meridian app', p: 'Meridian', o: 'Luis Ortega', s: 'Done', d: 'this', due: 'Thu' },
      ];
      const F = { st: ['Status: Done', (d) => d.s === 'Done'], ow: ['Owner: Hana Kim', (d) => d.o === 'Hana Kim'], du: ['Due: This week', (d) => d.d === 'this'] };
      const input = $('.search input');
      const body = $('.body');
      const chips = [...root.querySelectorAll('.chip')];
      let act = ['st', 'ow', 'du'];
      let q = 'retrospective';
      const initials = (n) => n.split(' ').map((w) => w[0]).join('');
      const render = () => {
        const term = q.trim().toLowerCase();
        const m = D.filter((d) => d.t.toLowerCase().includes(term) && act.every((k) => F[k][1](d)));
        body.dataset.n = m.length;
        $('.cnt').textContent = `${m.length} ${m.length === 1 ? 'result' : 'results'}`;
        $('.qq').textContent = q.trim();
        $('.why').textContent = act.length ? `Nothing matches that search with ${act.length} ${act.length === 1 ? 'filter' : 'filters'} applied.` : 'Check the spelling or try a shorter search.';
        $('.acts').style.display = act.length ? '' : 'none';
        $('.res').innerHTML = m
          .map((d, i) => {
            const at = d.t.toLowerCase().indexOf(term);
            const t = term && at >= 0 ? `${d.t.slice(0, at)}<mark>${d.t.slice(at, at + term.length)}</mark>${d.t.slice(at + term.length)}` : d.t;
            return `<li style="--i:${i}"><span class="av s">${initials(d.o)}</span><p><b>${t}</b><small>${d.p} - ${d.o}</small></p><span class="pill ${d.s === 'Done' ? 'ok' : ''}">${d.s}</span><time>${d.due}</time></li>`;
          })
          .join('');
      };
      const setChip = async (k, on) => {
        const c = chips.find((x) => x.dataset.k === k);
        if (on) {
          c.hidden = false;
          void c.offsetWidth;
          c.classList.remove('out');
        } else {
          c.classList.add('out');
          await wait(240);
          if (!act.includes(k)) c.hidden = true;
        }
      };
      const removeAll = async () => {
        const ks = act.slice();
        act = [];
        ks.forEach((k, i) => setTimeout(() => !root.dataset.paused && setChip(k, false), i * 110));
        await wait(ks.length * 110 + 320);
        render();
      };
      chips.forEach((c) =>
        c.addEventListener('click', () => {
          act = act.filter((k) => k !== c.dataset.k);
          setChip(c.dataset.k, false);
          render();
        }),
      );
      $('.clr').addEventListener('click', removeAll);
      $('.sv').addEventListener('click', () => {
        ['st', 'ow', 'du'].forEach((k) => !act.includes(k) && act.push(k) && setChip(k, true));
        render();
      });
      input.addEventListener('input', () => {
        q = input.value;
        render();
      });
      root.querySelectorAll('.sg').forEach((b) =>
        b.addEventListener('click', () => {
          q = b.textContent;
          input.value = q;
          render();
        }),
      );
      render();

      // Autoplay: Clear all filters brings the results back; Saved view puts the filters (and the empty state) back.
      cur.style.transform = 'translate(760px,560px)';
      (async () => {
        await wait(2600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (act.length < 3 || q !== 'retrospective') {
            q = 'retrospective';
            input.value = q;
            act = ['st', 'ow', 'du'];
            chips.forEach((c) => {
              c.hidden = false;
              c.classList.remove('out');
            });
            render();
          }
          if (!(await tap($('.clr'), 0.5, 0.55))) continue;
          await wait(4200);
          if (!idle()) continue;
          if (!(await tap($('.sv'), 0.5, 0.55))) continue;
          await wait(3200);
        }
      })();
    },
    prompt: `Build a "no search results" state for a task list page with a top-nav layout (64px header with logo, tabs with a 2px underline on the active tab, bell, avatar). The state is a composed screen on first paint.

Layout: page title "All tasks" and a secondary "Saved view" button. One large card fills the rest of the height: a search field (44px, leading icon, the query already typed), a mono result counter on the right ("0 results"), a row of removable filter chips ("Status: Done", "Owner: Hana Kim", "Due: This week", pill shaped, accent-soft fill, x icon), a hairline, then the empty state centered in the remaining space: a drawn SVG of a stack of empty list rows with a magnifier that drifts slowly, an h2 with the query in quotes ("No results for retrospective"), one line that names the cause ("Nothing matches that search with 3 filters applied"), a primary "Clear all filters" button and a "Or try" row of suggestion pills that set the query when clicked.

Behavior: real filtering over a small dataset. Removing a chip (x) re-renders the list. "Clear all filters" fades the chips out one by one (opacity and scale .88, 110ms stagger), then the empty pane is replaced by result rows that rise in (opacity, translateY 8px, 70ms stagger) with the matching text highlighted in an accent mark; the counter changes to "4 results". "Saved view" re-applies the filters and shows the empty state again. Typing in the field filters live.

Accessibility: the counter is aria-live="polite", chips are buttons with aria-labels "Remove filter ...", the field is type="search" with a label, focus-visible rings, prefers-reduced-motion stops the magnifier. Phone layout below 760px: tabs and counter hide, padding 16px.${ENDP} Components: TopNav, SearchField, FilterChips, EmptyResults, ResultRow.`,
  });

  // ---------------------------------------------------------------- 3. 404 in-app
  ML.add({
    id: 'app-states-404',
    cat: 'app-states',
    title: '404 inside the app',
    sub: 'A compass swings, search finds the page',
    html: `
<div class="app">
  <nav class="rail" aria-label="Main">
    <span class="mark">${I(P.mark, 16)}</span>
    <button class="rb" type="button" aria-label="Dashboard">${I(P.home, 20)}</button>
    <button class="rb" type="button" aria-label="Projects">${I(P.folder, 20)}</button>
    <button class="rb" type="button" aria-label="Invoices">${I(P.receipt, 20)}</button>
    <button class="rb" type="button" aria-label="Clients">${I(P.users, 20)}</button>
    <button class="rb" type="button" aria-label="Reports">${I(P.chart, 20)}</button>
    <span class="sp"></span>
    <button class="rb" type="button" aria-label="Settings">${I(P.gear, 20)}</button>
    <span class="av s">AL</span>
  </nav>
  <div class="main">
    <header class="top">
      <p class="crumb">Northgate<span>/</span><i class="mid">Projects<span>/</span></i><b>Page not found</b></p>
      <button class="ic" type="button" aria-label="Help">${I(P.help)}</button>
      <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
      <span class="av">AL</span>
    </header>
    <main class="page">
      <div class="c404">
        <div class="num" aria-hidden="true"><span>4</span><span class="cmp"><svg class="il" viewBox="0 0 120 120">
          <circle class="f1" cx="60" cy="60" r="56"/><circle class="k1" cx="60" cy="60" r="56"/><circle class="f5" cx="60" cy="60" r="43"/>
          <path class="k1" d="M60 12v9M60 99v9M12 60h9M99 60h9"/>
          <g class="nd"><path class="f3" d="M60 22l10 38H50z"/><path class="f7" d="M60 98L50 60h20z"/><circle class="f5" cx="60" cy="60" r="5"/><circle class="k4" cx="60" cy="60" r="5"/></g>
        </svg></span><span>4</span></div>
        <h2>We could not find that page</h2>
        <p class="txt">The link may be out of date, or the page moved. Search for what you need, or jump back in below.</p>
        <div class="sf">
          <label class="search">${I(P.search, 17)}<input type="search" placeholder="Search Northgate" aria-label="Search Northgate" autocomplete="off"></label>
          <ul class="sug" role="listbox" aria-label="Suggestions"></ul>
        </div>
        <div class="links">
          <button class="lnk" type="button"><span class="li">${I(P.home, 18)}</span><span><b>Dashboard</b><small>Your overview</small></span></button>
          <button class="lnk" type="button"><span class="li">${I(P.folder, 18)}</span><span><b>Projects</b><small>14 active</small></span></button>
          <button class="lnk" type="button"><span class="li">${I(P.receipt, 18)}</span><span><b>Invoices</b><small>3 awaiting</small></span></button>
          <button class="lnk" type="button"><span class="li">${I(P.life, 18)}</span><span><b>Help centre</b><small>Guides and chat</small></span></button>
        </div>
        <p class="path"><code>/projects/venue-2026/budget-v2</code> was not found. Error 404.</p>
      </div>
    </main>
  </div>
  <div class="toast" role="status">${I(P.arrow, 16, 2.6)}<span>Opening Invoices</span></div>
  ${CURSOR}
</div>`,
    css: `${BASE}${TOP}
.d .app{display:grid;grid-template-columns:72px minmax(0,1fr)}
.d .rail{display:flex;flex-direction:column;align-items:center;gap:6px;min-height:0;padding:16px 0 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .rail .mark{margin-bottom:14px}
.d .rb{display:grid;place-items:center;width:44px;height:44px;border:0;border-radius:12px;background:none;color:var(--ml-muted);cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .rb:hover{background:var(--ml-surface);color:var(--ml-ink)}
.d .rb:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .sp{flex:1}
.d .page{align-items:center;justify-content:center}
.d .c404{display:flex;flex-direction:column;align-items:center;width:100%;max-width:760px;margin:auto 0;text-align:center}
.d .mid{font-style:normal}
.d .num{display:flex;align-items:center;justify-content:center;gap:10px;margin-bottom:6px;font-size:132px;line-height:1;font-weight:700;letter-spacing:-.06em}
.d .num > span:not(.cmp){background:var(--ml-grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.d .cmp{width:112px;flex:none}
.d .nd{transform-origin:60px 60px;animation:nf-swing 5s ease-in-out infinite}
.d .c404 .txt{max-width:420px;margin-top:8px}
.d .sf{position:relative;width:100%;max-width:460px;margin-top:22px;text-align:left}
.d .sf .search{height:48px;padding:0 14px;border-radius:13px;font-size:14.5px;box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow)}
.d .sf .search input{font-size:14.5px}
.d .sug{position:absolute;top:calc(100% + 8px);left:0;right:0;z-index:6;display:none;padding:6px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);list-style:none}
.d .sug.on{display:block;animation:st-in 320ms var(--ml-spring) both}
.d .si{display:flex;align-items:center;gap:11px;width:100%;height:42px;padding:0 10px;border:0;border-radius:9px;background:none;text-align:left;font-size:14px;color:var(--ml-ink-2);cursor:pointer;transition:background-color .15s ease}
.d .si:hover,.d .si.press{background:var(--ml-accent-soft)}
.d .si .dot{width:8px;height:8px;border-radius:3px;background:var(--ml-accent-line)}
.d .si span:nth-child(2){flex:1}
.d .si b{font-weight:650;color:var(--ml-accent-ink)}
.d .si small{font-size:12px;color:var(--ml-muted)}
.d .links{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;width:100%;margin-top:26px}
.d .lnk{display:flex;align-items:center;gap:11px;padding:13px 14px;border:0;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);text-align:left;cursor:pointer;transition:transform .3s var(--ml-ease),box-shadow .2s ease}
.d .lnk:hover{transform:translateY(-2px);box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow-lg)}
.d .lnk:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .li{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:10px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .lnk span:last-child{display:flex;flex-direction:column;gap:1px;min-width:0}
.d .lnk b{font-size:13.5px;font-weight:600;white-space:nowrap}
.d .lnk small{font-size:12px;color:var(--ml-muted);white-space:nowrap}
.d .path{margin-top:26px;font-size:12.5px;color:var(--ml-muted)}
.d .path code{padding:3px 7px;border-radius:7px;background:var(--ml-bar-2);font:500 12px/1 var(--ml-mono);color:var(--ml-ink-2)}
@keyframes nf-swing{0%,100%{transform:rotate(-24deg)}30%{transform:rotate(38deg)}55%{transform:rotate(12deg)}78%{transform:rotate(30deg)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .rail,.d .mid,.d .path{display:none}
  .d .top{padding:0 16px}
  .d .page{padding:18px 16px}
  .d .num{font-size:96px}
  .d .cmp{width:84px}
  .d .links{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (prefers-reduced-motion: reduce){.d .nd{animation:none;transform:rotate(24deg)}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const S = [['Invoices', 'Billing'], ['Invoice #1042', 'Kestrel & Co'], ['Invoice settings', 'Settings'], ['Venue budget', 'Projects'], ['Clients', 'People']];
      const input = $('.sf input');
      const field = $('.sf .search');
      const sug = $('.sug');
      const toast = $('.toast');
      const esc = (t) => t.replace(/&/g, '&amp;');
      const render = () => {
        const t = input.value.trim().toLowerCase();
        const m = t ? S.filter((s) => s[0].toLowerCase().includes(t)) : [];
        sug.innerHTML = m
          .map((s) => {
            const i = s[0].toLowerCase().indexOf(t);
            const name = `${esc(s[0].slice(0, i))}<b>${esc(s[0].slice(i, i + t.length))}</b>${esc(s[0].slice(i + t.length))}`;
            return `<li><button class="si" type="button" role="option" data-n="${esc(s[0])}"><span class="dot"></span><span>${name}</span><small>${esc(s[1])}</small></button></li>`;
          })
          .join('');
        sug.classList.toggle('on', m.length > 0);
      };
      const go = async (name) => {
        input.value = name;
        sug.classList.remove('on');
        toast.querySelector('span').textContent = `Opening ${name}`;
        toast.classList.add('on');
        await wait(2200);
        toast.classList.remove('on');
      };
      input.addEventListener('input', render);
      input.addEventListener('keydown', (e) => {
        const first = sug.querySelector('.si');
        if (e.key === 'Enter' && first) go(first.dataset.n);
        if (e.key === 'Escape') sug.classList.remove('on');
      });
      sug.addEventListener('click', (e) => {
        const b = e.target.closest('.si');
        if (b) go(b.dataset.n);
      });
      root.querySelectorAll('.lnk').forEach((b) => b.addEventListener('click', () => go(b.querySelector('b').textContent)));
      const type = async (text) => {
        field.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          input.value += ch;
          render();
          await wait(75 + Math.random() * 55);
        }
        return true;
      };

      // Autoplay: type into search, pick the match; any real input hands control to the visitor for 4s.
      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(2800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          input.value = '';
          render();
          cur.classList.toggle('off', !moveTo(field, 0.5, 0.55));
          await wait(900);
          if (!(await type('invoice'))) continue;
          await wait(900);
          if (!(await tap(sug.querySelector('.si'), 0.4, 0.5))) continue;
          field.classList.remove('is-auto');
          await wait(3600);
        }
      })();
    },
    prompt: `Build an in-app 404 page that lives inside the normal app shell (72px icon rail on the left, 62px top bar with breadcrumb "Northgate / Projects / Page not found", help and bell buttons, avatar), so people still see where they are. The page region centers a 760px max-width column.

Content: a huge "404" (132px, weight 700, letter-spacing -0.06em, your accent gradient as text fill) where the zero is replaced by a drawn compass (inline SVG: soft ring, tick marks, a two-tone needle). The needle swings between about -24deg and 38deg on a 5s ease-in-out loop (transform-origin at the center). Under it an h2 "We could not find that page", one line of help, a 460px search field (48px tall, accent ring on focus) with a suggestions popover below, and a row of four "useful link" tiles (icon tile, title, small caption: Dashboard, Projects, Invoices, Help centre) that lift 2px on hover. At the bottom the missing path in a mono code chip.

Behavior: typing filters a list of known destinations and shows up to five matches in an absolutely positioned popover (8px below the field, 14px radius, soft large shadow) with the matched text in bold; Enter or click opens the first/chosen item (show a small "Opening Invoices" toast). Escape closes the popover. Keep playful but restrained: no extra characters, one moving element.

Accessibility: popover is role="listbox" with options as buttons, the search is type="search" with an aria-label, tiles are real buttons with focus-visible rings, prefers-reduced-motion freezes the compass at a fixed angle. Phone layout below 760px: rail hidden, tiles 2 per row, number 96px.${ENDP} Components: Rail, TopBar, NotFound, CompassIllustration, SearchPopover, LinkTile.`,
  });

  // ---------------------------------------------------------------- 4. 500 with retry + error id
  ML.add({
    id: 'app-states-500',
    cat: 'app-states',
    title: '500 with retry',
    sub: 'Copy the error ID, retry, recovered',
    html: `
<div class="app">
  <header class="top">
    <div class="brand"><span class="mark">${I(P.bolt, 16)}</span>Lumen Labs</div>
    <span class="env">Production</span>
    <a class="stat" href="#"><i></i>Status</a>
    <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
    <span class="av">DO</span>
  </header>
  <main class="page" data-s="err">
    <div class="head">
      <div><p class="crumb">Experiments<span>/</span><b>Pricing page test</b></p><h1>Pricing page test</h1></div>
      <span class="pill live"><i></i>Running since Oct 6</span>
    </div>
    <div class="cols">
      <div class="stage">
        <section class="card pane errp" aria-label="Something went wrong">
          <div class="ill"><svg class="il" viewBox="0 0 200 150" aria-hidden="true">
            <ellipse class="f4" cx="100" cy="140" rx="72" ry="7"/>
            <rect class="f5" x="42" y="14" width="116" height="42" rx="11"/><rect class="k1" x="42" y="14" width="116" height="42" rx="11"/>
            <rect class="f5" x="42" y="62" width="116" height="42" rx="11"/><rect class="k1" x="42" y="62" width="116" height="42" rx="11"/>
            <circle class="f6" cx="62" cy="35" r="4.5"/><rect class="f4" x="76" y="31" width="50" height="8" rx="4"/><rect class="f4" x="132" y="31" width="14" height="8" rx="4"/>
            <circle class="red st-blink" cx="62" cy="83" r="4.5"/><rect class="f4" x="76" y="79" width="34" height="8" rx="4"/>
            <path class="k1" d="M100 104v8c0 8-12 8-12 16"/>
            <rect class="f2" x="78" y="126" width="22" height="12" rx="4"/>
            <g class="st-zap"><path class="k5" d="M116 118l9-7M120 130h11M114 140l8 7"/></g>
          </svg></div>
          <h2>Something went wrong on our side</h2>
          <p class="txt">We could not load this experiment (error 500). Our team has been alerted. Try again in a moment.</p>
          <div class="eid"><span class="lbl">Error ID</span><code>err_7f3a91c2</code><button class="cp" type="button" aria-label="Copy error ID">${I(P.copy, 14)}<span>Copy</span></button></div>
          <div class="acts"><button class="cta rt" type="button">${I(P.refresh, 16)}<span>Retry</span></button><button class="ghost" type="button">${I(P.life, 16)}Contact support</button></div>
          <p class="note">${I(P.clock, 14)}First seen 14:02 UTC, 3 minutes ago</p>
        </section>
        <section class="pane okp" aria-label="Experiment results">
          <div class="kp">
            <div class="card k in" style="--i:0"><p class="lbl">Visitors</p><p class="v">18,420</p><span class="pill ok">+6.1%</span></div>
            <div class="card k in" style="--i:1"><p class="lbl">Conversion</p><p class="v">4.8%</p><span class="pill ok">+0.9 pt</span></div>
            <div class="card k in" style="--i:2"><p class="lbl">Lift vs control</p><p class="v">+12.4%</p><span class="pill">96% confidence</span></div>
          </div>
          <div class="card vs in" style="--i:3">
            <p class="lbl">Variant results</p>
            <div class="vr"><p><span>Control</span><b>3.9%</b></p><i><s style="--w:.62"></s></i></div>
            <div class="vr"><p><span>Variant B - annual first</span><b>4.8%</b></p><i><s class="b" style="--w:.78"></s></i></div>
            <div class="vr"><p><span>Variant C - three tiers</span><b>4.2%</b></p><i><s style="--w:.67"></s></i></div>
          </div>
        </section>
      </div>
      <aside class="rt-col">
        <section class="card svc">
          <p class="lbl">Service status</p>
          <ul>
            <li><span>API</span><span class="pill warn api">Degraded</span></li>
            <li><span>Dashboard</span><span class="pill ok">Operational</span></li>
            <li><span>Data pipeline</span><span class="pill ok">Operational</span></li>
            <li><span>Webhooks</span><span class="pill ok">Operational</span></li>
          </ul>
        </section>
        <section class="card hist">
          <p class="lbl">Recent incidents</p>
          <ul>
            <li><b>Elevated API errors</b><small>Today, 13:48 - investigating</small></li>
            <li><b>Dashboard latency</b><small>Oct 9 - resolved in 22 min</small></li>
            <li><b>Planned maintenance</b><small>Oct 2 - completed</small></li>
          </ul>
        </section>
      </aside>
    </div>
  </main>
  <div class="toast" role="status">${I(P.check, 16, 2.6)}<span>Connection restored</span></div>
  ${CURSOR}
</div>`,
    css: `${BASE}${TOP}
.d .app{display:flex;flex-direction:column}
.d .top{gap:14px;padding:0 28px;background:var(--ml-bg)}
.d .env{margin-right:auto;padding:5px 10px;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12px;font-weight:600;color:var(--ml-ink-2)}
.d .stat{display:inline-flex;align-items:center;gap:7px;font-size:13px;font-weight:600;color:var(--ml-ink-2);text-decoration:none}
.d .stat i{width:8px;height:8px;border-radius:50%;background:#FF9F0A;box-shadow:0 0 0 3px rgba(255,159,10,.18)}
.d .top .crumb{display:none}
.d .head .crumb{display:block;margin:0 0 6px;font-size:13px}
.d .pill.live i{width:7px;height:7px;border-radius:50%;background:#1DB954;animation:st-ping 2s ease-out infinite}
.d .cols{display:grid;flex:1;grid-template-columns:minmax(0,1fr) 300px;gap:16px;min-height:0}
.d .stage{position:relative;display:grid;min-height:0}
.d .pane{grid-area:1/1;min-width:0;min-height:0;transition:opacity .45s var(--ml-ease),transform .6s var(--ml-spring)}
.d .page[data-s="ok"] .errp,.d .page[data-s="err"] .okp{opacity:0;visibility:hidden;pointer-events:none;transition:opacity .3s ease,transform .5s var(--ml-ease),visibility 0s linear .35s}
.d .page[data-s="ok"] .errp{transform:translateY(-12px) scale(.985)}
.d .page[data-s="err"] .okp{transform:translateY(12px)}
.d .errp{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;text-align:center}
.d .errp .ill{width:min(190px,60%);margin-bottom:10px}
.d .st-blink{animation:st-blink 1.6s ease-in-out infinite}
.d .st-zap{animation:st-blink 1.1s steps(2,end) infinite}
.d .errp .txt{max-width:400px;margin-top:8px}
.d .eid{display:flex;align-items:center;gap:10px;margin-top:20px;padding:6px 6px 6px 14px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .eid code{font:600 13.5px/1 var(--ml-mono);color:var(--ml-ink)}
.d .cp{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 10px;border:0;border-radius:8px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:transform 90ms ease-out,color .2s ease,background-color .2s ease}
.d .cp.done{color:#12893C;background:rgba(29,185,84,.1)}
.d .cp:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .acts{display:flex;gap:10px;margin-top:20px}
.d .note{display:flex;align-items:center;gap:6px;margin-top:16px;font-size:12.5px;color:var(--ml-muted)}
.d .okp{display:flex;flex-direction:column;gap:16px}
.d .okp .in{animation:st-in 560ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 70ms + 160ms)}
.d .page[data-s="err"] .okp .in{animation:none}
.d .kp{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d .k{display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:16px}
.d .k .v{font-size:28px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .vs{display:flex;flex:1;flex-direction:column;gap:6px;padding:18px 20px}
.d .vr{display:flex;flex:1;flex-direction:column;justify-content:center;gap:9px}
.d .vr p{display:flex;justify-content:space-between;font-size:13.5px;color:var(--ml-ink-2)}
.d .vr b{font-weight:650;font-variant-numeric:tabular-nums}
.d .vr i{display:block;height:10px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .vr s{display:block;height:100%;border-radius:inherit;background:var(--ml-bar);transform:scaleX(var(--w));transform-origin:0 50%}
.d .vr s.b{background:var(--ml-grad)}
.d .page[data-s="ok"] .vr s{animation:st-bar 900ms var(--ml-ease) 520ms both}
.d .rt-col{display:flex;flex-direction:column;gap:16px;min-height:0}
.d .svc,.d .hist{padding:18px}
.d .hist{flex:1}
.d .svc ul,.d .hist ul{display:flex;flex-direction:column;margin-top:8px;list-style:none}
.d .svc li{display:flex;align-items:center;justify-content:space-between;padding:11px 0;border-bottom:1px solid var(--ml-line);font-size:13.5px;font-weight:500}
.d .svc li:last-child{border-bottom:0}
.d .hist li{display:flex;flex-direction:column;gap:2px;padding:12px 0;border-bottom:1px solid var(--ml-line)}
.d .hist li:last-child{border-bottom:0}
.d .hist b{font-size:13.5px;font-weight:600}
.d .hist small{font-size:12.5px;color:var(--ml-muted)}
@keyframes st-bar{from{transform:scaleX(0)}to{transform:scaleX(var(--w))}}
@keyframes st-blink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes st-ping{0%{box-shadow:0 0 0 0 rgba(29,185,84,.45)}80%,100%{box-shadow:0 0 0 7px rgba(29,185,84,0)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .env,.d .stat{display:none}
  .d .brand{margin-right:auto}
  .d .page{padding:18px 16px}
  .d .head{flex-direction:column;align-items:flex-start}
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .rt-col{display:none}
  .d .kp{grid-template-columns:minmax(0,1fr)}
  .d .eid{flex-wrap:wrap;justify-content:center}
}
@media (prefers-reduced-motion: reduce){.d .st-blink,.d .st-zap,.d .pill.live i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const page = $('.page');
      const rt = $('.rt');
      const cp = $('.cp');
      const api = $('.api');
      const toast = $('.toast');
      const dot = $('.stat i');
      let busy = false;
      root.querySelectorAll('a[href="#"]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
      const setApi = (ok) => {
        api.className = `pill ${ok ? 'ok' : 'warn'} api`;
        api.textContent = ok ? 'Operational' : 'Degraded';
        dot.style.background = ok ? '#1DB954' : '#FF9F0A';
        dot.style.boxShadow = ok ? '0 0 0 3px rgba(29,185,84,.18)' : '0 0 0 3px rgba(255,159,10,.18)';
      };
      cp.addEventListener('click', async () => {
        try {
          navigator.clipboard.writeText('err_7f3a91c2').catch(() => {});
        } catch (e) {}
        cp.classList.add('done');
        cp.querySelector('span').textContent = 'Copied';
        await wait(1700);
        cp.classList.remove('done');
        cp.querySelector('span').textContent = 'Copy';
      });
      rt.addEventListener('click', async () => {
        if (busy || page.dataset.s === 'ok') return;
        busy = true;
        rt.classList.add('busy');
        rt.querySelector('span').textContent = 'Retrying';
        await wait(1500);
        page.dataset.s = 'ok';
        setApi(true);
        rt.classList.remove('busy');
        rt.querySelector('span').textContent = 'Retry';
        busy = false;
        toast.classList.add('on');
        await wait(2000);
        toast.classList.remove('on');
      });

      // Autoplay: copy the ID, press Retry, hold on the recovered page, then the incident returns.
      cur.style.transform = 'translate(640px,560px)';
      (async () => {
        await wait(2400);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (page.dataset.s !== 'err') {
            page.dataset.s = 'err';
            setApi(false);
            await wait(700);
          }
          if (!(await tap(cp, 0.5, 0.5))) continue;
          await wait(1500);
          if (!(await tap(rt, 0.5, 0.55))) continue;
          await wait(5600);
          if (!idle()) continue;
          page.dataset.s = 'err';
          setApi(false);
          await wait(1200);
        }
      })();
    },
    prompt: `Build a full-page server error (500) state for a SaaS dashboard, rendered inside the normal chrome so people keep their bearings: a 62px header (logo, "Production" environment chip, "Status" link with an amber dot, bell, avatar), a page title row ("Pricing page test" with a "Running since Oct 6" pill and a small breadcrumb), and a two-column body (main column and a 300px aside).

Main column: one large card with a drawn SVG server (two stacked rack units, a blinking red indicator on the lower unit, an unplugged cable with a short red spark), an h2 "Something went wrong on our side", one honest sentence with the status code and what the team is doing, an Error ID chip (micro-label "Error ID", mono code, a small Copy button) and two buttons: primary "Retry" and secondary "Contact support", plus a "First seen" timestamp line. The aside holds a "Service status" list (API shows an amber Degraded pill, the others green Operational) and a "Recent incidents" list that stretches to the bottom.

Behavior: Copy writes the ID with navigator.clipboard (catch failures) and turns green "Copied" for 1.7s. Retry shows a sheen sweep across the button (no spinner) and changes the label to "Retrying" for about 1.5s, then crossfades the error card out (opacity, translateY -12px) and the real page in: three KPI cards and variant result bars (scaleX from 0, 900ms), the API pill flips to Operational, the header dot turns green and a "Connection restored" toast slides up. The live dot pings.

Accessibility: the error card is a labelled section, toast is role="status", buttons have focus-visible rings, prefers-reduced-motion stops blinking. Phone layout below 760px: single column, the aside hides, KPIs stack.${ENDP} Components: Header, ErrorState, ErrorIdChip, StatusPanel, ResultsPane, Toast.`,
  });

  // ---------------------------------------------------------------- 5. Offline -> reconnecting -> back online
  ML.add({
    id: 'app-states-offline',
    cat: 'app-states',
    title: 'Offline and back online',
    sub: 'Queued changes sync down to zero',
    html: `
<div class="app" data-s="off">
  <header class="top">
    <div class="brand"><span class="mark">${I(P.layers, 16)}</span>Solace</div>
    <p class="dtl"><b>Fernway brand brief</b><small>Solace Studio</small></p>
    <span class="avs"><span class="av s">MR</span><span class="av s t2">AT</span><span class="av s t3">HK</span></span>
    <button class="sync warn" type="button" aria-live="polite"><svg class="i-off" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P.wifiOff}</svg><svg class="i-on" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P.wifi}</svg><span class="st">Offline</span></button>
    <button class="cta sm" type="button">Share</button>
  </header>
  <div class="ban">
    <div class="bi">
      <p class="bs off">${I(P.wifiOff, 18)}<span><b>You are offline.</b> Changes are saved on this device and will sync when you reconnect.</span><button class="ghost sm rc" type="button">Reconnect</button></p>
      <p class="bs con">${I(P.wifi, 18)}<span><b>Reconnecting</b> to Solace...</span><i class="bar"></i></p>
      <p class="bs on">${I(P.check, 18, 2.6)}<span><b class="bt">Back online.</b> <span class="bd">Syncing your changes.</span></span></p>
    </div>
  </div>
  <main class="page">
    <div class="cols">
      <article class="card doc">
        <p class="lbl">Brand / Brief</p>
        <h1>Fernway rebrand brief<span class="caret"></span></h1>
        <p class="meta">Last edited by you, just now</p>
        <p>Fernway wants to feel calm, local and quietly confident. The identity has to work on a shop sign as well as a phone screen, and it should never look like a chain.</p>
        <h3>Voice and tone</h3>
        <p>Plain words and short sentences. We <span class="ed">never shout</span>, we never hide the price, and we write like a neighbour who happens to know a lot about plants.</p>
        <h3>Next steps</h3>
        <ul class="todo"><li class="dn"><span class="ck">${I(P.check, 12, 3)}</span>Collect three logo routes</li><li class="dn"><span class="ck">${I(P.check, 12, 3)}</span>Pick the primary palette</li><li><span class="ck"></span>Write the one-page guidelines</li></ul>
      </article>
      <aside class="card q">
        <div class="qh"><div><p class="lbl">Pending changes</p><p class="qn">0</p></div><span class="pill warn qp">Not synced</span></div>
        <ul class="ql"></ul>
        <p class="qe">${I(P.check, 16, 2.6)}All changes saved</p>
        <p class="qf">${I(P.file, 14)}Stored on this device</p>
      </aside>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:flex;flex-direction:column;background:var(--ml-surface)}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:62px;padding:0 24px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .dtl{display:flex;flex-direction:column;margin-right:auto;padding-left:14px;border-left:1px solid var(--ml-line)}
.d .dtl b{font-size:14px;font-weight:600}
.d .dtl small{font-size:12px;color:var(--ml-muted)}
.d .avs{display:flex}
.d .avs .av{margin-left:-6px;box-shadow:0 0 0 2px var(--ml-bg)}
.d .avs .av:first-child{margin-left:0}
.d .cta.sm,.d .ghost.sm{height:34px;padding:0 13px;border-radius:10px;font-size:13px}
.d .sync{display:inline-flex;align-items:center;gap:7px;height:34px;padding:0 12px;border:0;border-radius:999px;font-size:12.5px;font-weight:650;cursor:pointer;transition:background-color .3s ease,color .3s ease,transform 90ms ease-out}
.d .sync.warn{background:rgba(255,159,10,.12);color:#B25E00}
.d .sync.blue{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .sync.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .sync:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .app[data-s="off"] .i-on,.d .app:not([data-s="off"]) .i-off{display:none}
.d .ban{flex:none;padding:0 24px;border-bottom:1px solid var(--ml-line);transition:background-color .45s ease}
.d .app[data-s="off"] .ban{background:rgba(255,159,10,.1)}
.d .app[data-s="con"] .ban{background:var(--ml-accent-soft)}
.d .app[data-s="on"] .ban{background:rgba(29,185,84,.09)}
.d .bi{display:grid}
.d .bs{grid-area:1/1;display:flex;align-items:center;gap:10px;height:52px;font-size:13.5px;color:var(--ml-ink-2);opacity:0;transform:translateY(6px);pointer-events:none;transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .bs > span{flex:1;min-width:0}
.d .bs b{font-weight:650;color:var(--ml-ink)}
.d .bs.off{color:#8A4B00}
.d .bs.off > svg{color:#B25E00}
.d .bs.con > svg{color:var(--ml-accent)}
.d .bs.on > svg{color:#12893C}
.d .app[data-s="off"] .bs.off,.d .app[data-s="con"] .bs.con,.d .app[data-s="on"] .bs.on{opacity:1;transform:none;pointer-events:auto}
.d .bar{position:relative;flex:none;width:150px;height:6px;border-radius:99px;background:var(--ml-accent-line);overflow:hidden}
.d .bar::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 20%,var(--ml-accent) 50%,transparent 80%);background-size:220% 100%;animation:st-sheen 1.1s linear infinite}
.d .page{display:flex;flex:1;min-height:0;padding:20px 24px 24px}
.d .cols{display:grid;flex:1;grid-template-columns:minmax(0,1fr) 300px;gap:16px;min-height:0}
.d .doc{min-height:0;padding:30px 40px;overflow-y:auto;scrollbar-width:thin}
.d .doc h1{margin-top:10px;font-size:30px}
.d .caret{display:inline-block;width:2px;height:.85em;margin-left:4px;vertical-align:-2px;background:var(--ml-accent);animation:st-blink 1s steps(2,end) infinite}
.d .meta{margin:6px 0 20px;font-size:13px;color:var(--ml-muted)}
.d .doc p{max-width:620px;font-size:14.5px;line-height:1.65;color:var(--ml-ink-2)}
.d .doc h3{margin:20px 0 6px;font-size:16px;font-weight:650;letter-spacing:-.01em}
.d .ed{padding:1px 2px;border-radius:4px;background:var(--ml-accent-soft);box-shadow:0 2px 0 var(--ml-accent-line)}
.d .todo{display:flex;flex-direction:column;gap:10px;margin-top:6px;list-style:none}
.d .todo li{display:flex;align-items:center;gap:12px;font-size:14.5px;color:var(--ml-ink-2)}
.d .ck{display:grid;flex:none;place-items:center;width:20px;height:20px;border-radius:6px;box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff}
.d li.dn .ck{background:var(--ml-accent);box-shadow:none}
.d li.dn{color:var(--ml-muted)}
.d .q{display:flex;flex-direction:column;min-height:0;padding:18px}
.d .qh{display:flex;align-items:flex-start;justify-content:space-between}
.d .qn{margin-top:6px;font-size:40px;line-height:1;font-weight:650;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .qn.pop{animation:st-pop 420ms var(--ml-bounce)}
.d .ql{display:flex;flex-direction:column;margin-top:12px;list-style:none}
.d .qi{display:grid;grid-template-rows:1fr;transition:grid-template-rows .45s var(--ml-ease),opacity .35s ease}
.d .qi.gone{grid-template-rows:0fr;opacity:0}
.d .qr{display:flex;align-items:center;gap:11px;min-height:0;padding:12px 0;overflow:hidden;border-top:1px solid var(--ml-line)}
.d .qr p{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0}
.d .qr b{font-size:13.5px;font-weight:600}
.d .qr small{font-size:12px;color:var(--ml-muted)}
.d .qd{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;background:var(--ml-surface);color:var(--ml-muted);transition:background-color .3s ease,color .3s ease}
.d .qi.sync .qd{background:rgba(29,185,84,.12);color:#12893C}
.d .qi.sync .pill{background:rgba(29,185,84,.1);color:#12893C}
.d .qe{display:none;align-items:center;gap:8px;margin-top:14px;font-size:13.5px;font-weight:600;color:#12893C}
.d .q.empty .qe{display:flex;animation:st-in 420ms var(--ml-spring) both}
.d .qf{display:flex;align-items:center;gap:7px;margin-top:auto;padding-top:14px;font-size:12.5px;color:var(--ml-muted)}
@keyframes st-blink{0%,100%{opacity:1}50%{opacity:0}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{gap:10px;padding:0 14px}
  .d .dtl,.d .avs,.d .cta.sm{display:none}
  .d .brand{margin-right:auto}
  .d .ban{padding:0 14px}
  .d .bs{height:auto;min-height:64px;padding:8px 0;font-size:12.5px}
  .d .bar{width:70px}
  .d .page{padding:14px}
  .d .cols{grid-template-columns:minmax(0,1fr);grid-template-rows:auto minmax(0,1fr)}
  .d .doc{padding:20px;order:2}
  .d .q{order:1}
  .d .qn{font-size:30px}
}
@media (prefers-reduced-motion: reduce){.d .caret,.d .bar::after{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const app = $('.app');
      const ql = $('.ql');
      const qn = $('.qn');
      const qp = $('.qp');
      const sync = $('.sync');
      const q = $('.q');
      let busy = false;
      const FILE = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>';
      const live = () => ql.querySelectorAll('.qi:not(.sync)').length;
      const status = (cls, text) => {
        sync.className = `sync ${cls}`;
        sync.querySelector('.st').textContent = text;
      };
      const setCount = () => {
        const n = live();
        qn.textContent = n;
        qn.classList.remove('pop');
        void qn.offsetWidth;
        qn.classList.add('pop');
        q.classList.toggle('empty', n === 0);
        qp.className = `pill qp ${app.dataset.s === 'off' ? 'warn' : app.dataset.s === 'on' ? (n ? '' : 'ok') : ''}`;
        qp.textContent = app.dataset.s === 'off' ? 'Not synced' : n ? 'Syncing' : 'Synced';
      };
      const addItem = (text, time) => {
        const li = document.createElement('li');
        li.className = 'qi gone';
        li.innerHTML = `<div class="qr"><span class="qd">${FILE}</span><p><b>${text}</b><small>${time}</small></p><span class="pill warn">Queued</span></div>`;
        ql.prepend(li);
        void li.offsetWidth;
        li.classList.remove('gone');
        setCount();
      };
      const goOffline = () => {
        if (busy) return;
        app.dataset.s = 'off';
        status('warn', 'Offline');
        ql.innerHTML = '';
        addItem('Checked 2 tasks', '2 min ago');
        addItem('Edited heading', '1 min ago');
      };
      const reconnect = async () => {
        if (busy || app.dataset.s !== 'off') return;
        busy = true;
        app.dataset.s = 'con';
        status('blue', 'Reconnecting');
        await wait(2000);
        app.dataset.s = 'on';
        const lis = [...ql.querySelectorAll('.qi:not(.sync)')].reverse();
        let left = lis.length;
        $('.bt').textContent = 'Back online.';
        $('.bd').textContent = `Syncing ${left} ${left === 1 ? 'change' : 'changes'}.`;
        status('blue', `Syncing ${left}`);
        setCount();
        for (const li of lis) {
          await wait(750);
          li.classList.add('sync');
          li.querySelector('.pill').textContent = 'Synced';
          await wait(420);
          li.classList.add('gone');
          left -= 1;
          setCount();
          status('blue', left ? `Syncing ${left}` : 'Saved');
          $('.bd').textContent = left ? `Syncing ${left} ${left === 1 ? 'change' : 'changes'}.` : 'All changes synced.';
        }
        status('ok', 'Saved');
        busy = false;
      };
      $('.rc').addEventListener('click', reconnect);
      sync.addEventListener('click', () => (app.dataset.s === 'off' ? reconnect() : goOffline()));
      goOffline();

      // Autoplay: a new edit queues up, Reconnect, the queue syncs to zero, then the device goes offline again.
      cur.style.transform = 'translate(720px,520px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (app.dataset.s !== 'off') goOffline();
          await wait(900);
          if (live() < 3) addItem('Edited paragraph', 'just now');
          await wait(2200);
          if (!(await tap($('.rc'), 0.5, 0.55))) continue;
          while (busy && root.isConnected) await wait(200);
          await wait(3400);
          if (!idle()) continue;
          if (!(await tap(sync, 0.5, 0.55))) continue;
          await wait(900);
        }
      })();
    },
    prompt: `Build an offline / reconnecting / back-online experience for a collaborative document editor. Layout: 62px header (logo, document title with a "Solace Studio" caption, collaborator avatar stack, a connection status pill, a "Share" button), a 52px connectivity banner under it, then a two-column body: the document on a white card (30px title, paragraphs at 14.5px/1.65 with one edited phrase highlighted with an accent-soft background, a small checklist) and a 300px "Pending changes" card with a big tabular count, a status pill, a list of queued edits (icon tile, title, "2 min ago", a "Queued" pill) and a "Stored on this device" footer.

States, driven by one data attribute (off / con / on) on the root: Offline = amber banner "You are offline. Changes are saved on this device and will sync when you reconnect." with a Reconnect button, header pill "Offline" with a wifi-off icon, queue count 2 (a third edit can arrive: the new row opens with grid-template-rows 0fr to 1fr at the top). Reconnecting = the banner turns accent-soft with a sliding sheen bar (no spinner) for about 2s, pill "Reconnecting". Back online = green banner "Syncing 3 changes", the pill reads "Syncing 3", and the queue drains one row every ~750ms: the row turns green "Synced", then collapses (0fr, opacity 0), the big count pops (scale 0.6 to 1 with a small overshoot) and counts 3, 2, 1, 0, ending on "All changes saved" and a green "Saved" pill. Banner text cross-fades with opacity and translateY 6px.

Make the header pill a real toggle (online click goes offline, offline click reconnects), listen to the browser online and offline events in production, and queue edits in IndexedDB. Accessibility: the pill has aria-live="polite", the banner is role="status", real buttons with focus-visible rings, prefers-reduced-motion stops the caret and the sheen. Phone layout below 760px: the queue card moves above the document, the avatars and Share hide.${ENDP} Components: Header, ConnectionBanner, SyncPill, Document, PendingQueue.`,
  });

  // ---------------------------------------------------------------- 6. Scheduled maintenance
  ML.add({
    id: 'app-states-maintenance',
    cat: 'app-states',
    title: 'Scheduled maintenance',
    sub: 'Progress ticks, status updates arrive',
    html: `
<div class="app">
  <header class="top">
    <div class="brand"><span class="mark">${I(P.box, 16)}</span>Meridian Foods</div>
    <span class="hd">Order portal</span>
    <button class="lk" type="button">Help centre</button>
    <span class="av">KM</span>
  </header>
  <main class="page">
    <div class="wrap">
      <section class="card mn">
        <div class="band" aria-hidden="true"><svg class="il" viewBox="0 0 520 130" preserveAspectRatio="xMidYMid slice">
          <rect class="f4" x="40" y="26" width="140" height="14" rx="7"/><rect class="f4" x="40" y="52" width="104" height="14" rx="7"/><rect class="f4" x="40" y="78" width="124" height="14" rx="7"/>
          <rect class="f2" x="340" y="34" width="136" height="14" rx="7"/><rect class="f2" x="372" y="60" width="104" height="14" rx="7"/><rect class="f2" x="352" y="86" width="124" height="14" rx="7"/>
          <path class="k3" d="M190 66h60M270 66h60"/>
          <g transform="translate(226 18) scale(3.7)" class="gear">${P.gear}</g>
          <g class="wr"><g transform="translate(296 66) scale(1.7) translate(-12 -12)" class="gear">${P.wrench}</g></g>
        </svg></div>
        <div class="mb">
          <span class="pill warn">${I(P.wrench, 13)}Scheduled maintenance</span>
          <h2>We are upgrading Meridian ordering</h2>
          <p class="txt">Saturday 17 October, 01:00 to 03:00 UTC. Orders and invoices are paused while we move to faster storage. Nothing is lost and your data stays safe.</p>
          <div class="facts">
            <p><span class="lbl">Window</span><b>01:00 - 03:00 UTC</b></p>
            <p><span class="lbl">Started</span><b>01:00 UTC</b></p>
            <p><span class="lbl">Back by</span><b>Sat 17 Oct, 03:00</b></p>
          </div>
          <div class="pr">
            <div class="pt"><span>Upgrade progress</span><b class="pv">38%</b></div>
            <i class="trk"><s class="fill"></s></i>
            <p class="eta">About 71 minutes left</p>
          </div>
          <ol class="steps">
            <li class="s dn"><span class="sd">${I(P.check, 12, 3)}</span>Backup</li>
            <li class="s act"><span class="sd"></span>Migrate data</li>
            <li class="s"><span class="sd"></span>Verify</li>
            <li class="s"><span class="sd"></span>Reopen</li>
          </ol>
        </div>
      </section>
      <aside class="col">
        <section class="card aff">
          <p class="lbl">What is affected</p>
          <ul>
            <li>${I(P.receipt, 18)}<span>Orders</span><span class="pill warn">Paused</span></li>
            <li>${I(P.file, 18)}<span>Invoices</span><span class="pill warn">Paused</span></li>
            <li>${I(P.chart, 18)}<span>Reports</span><span class="pill mut">Delayed</span></li>
            <li>${I(P.users, 18)}<span>Customer portal</span><span class="pill ok">Operational</span></li>
          </ul>
        </section>
        <section class="card upd">
          <div class="uh"><p class="lbl">Status updates</p><button class="ghost sm nt" type="button">${I(P.bell, 14)}<span>Notify me</span></button></div>
          <ul class="ul"></ul>
        </section>
      </aside>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:flex;flex-direction:column}
.d .top{display:flex;flex:none;align-items:center;gap:16px;height:62px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .hd{margin-right:auto;padding-left:16px;border-left:1px solid var(--ml-line);font-size:13.5px;color:var(--ml-muted)}
.d .lk{font-size:13.5px}
.d .page{display:flex;flex:1;min-height:0;padding:24px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .wrap{display:grid;flex:1;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:16px;width:100%;max-width:1100px;min-height:0;margin:0 auto}
.d .mn{display:flex;flex-direction:column;min-height:0;overflow:hidden}
.d .band{flex:1 1 130px;min-height:130px;max-height:250px;background:linear-gradient(135deg,var(--ml-accent-soft),#fff 85%)}
.d .band{overflow:hidden}
.d .band svg{height:100%}
.d .gear{fill:none}
.d .gear *{fill:none;stroke:var(--ml-accent);stroke-width:1.1;stroke-linecap:round;stroke-linejoin:round}
.d .wr{transform-box:fill-box;transform-origin:50% 50%;animation:mt-rock 3.6s ease-in-out infinite}
.d .wr .gear *{stroke:var(--ml-accent-ink)}
.d .mb{display:flex;flex:1;flex-direction:column;align-items:flex-start;gap:12px;padding:22px 26px 24px}
.d .mb h2{font-size:24px}
.d .mb .txt{max-width:460px}
.d .facts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;width:100%;margin-top:6px}
.d .facts p{display:flex;flex-direction:column;gap:5px;padding:12px 14px;border-radius:12px;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .facts b{font-size:13.5px;font-weight:650}
.d .pr{width:100%;margin-top:auto;padding:16px 18px;border-radius:14px;background:var(--ml-surface)}
.d .pt{display:flex;align-items:baseline;justify-content:space-between;font-size:13px;color:var(--ml-muted)}
.d .pv{font-size:30px;line-height:1;font-weight:650;letter-spacing:-.03em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .trk{display:block;height:10px;margin-top:12px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .fill{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.38);transform-origin:0 50%}
.d .eta{margin-top:10px;font-size:12.5px;color:var(--ml-muted)}
.d .steps{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;width:100%;list-style:none}
.d .s{display:flex;align-items:center;gap:8px;font-size:12.5px;font-weight:600;color:var(--ml-muted)}
.d .sd{display:grid;flex:none;place-items:center;width:20px;height:20px;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .3s ease,box-shadow .3s ease}
.d .s.dn{color:var(--ml-ink-2)}
.d .s.dn .sd{background:var(--ml-accent);box-shadow:none}
.d .s.act{color:var(--ml-accent-ink)}
.d .s.act .sd{box-shadow:inset 0 0 0 5px var(--ml-accent-soft),inset 0 0 0 10px var(--ml-accent)}
.d .col{display:flex;flex-direction:column;gap:16px;min-height:0}
.d .aff,.d .upd{padding:18px 20px}
.d .aff ul{display:flex;flex-direction:column;margin-top:6px;list-style:none}
.d .aff li{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--ml-line);font-size:14px;font-weight:500}
.d .aff li:last-child{border-bottom:0}
.d .aff li svg{flex:none;color:var(--ml-muted)}
.d .aff li > span:first-of-type{flex:1}
.d .upd{display:flex;flex:1;flex-direction:column;min-height:0;overflow:hidden}
.d .uh{display:flex;align-items:center;justify-content:space-between}
.d .nt.on{color:#12893C;background:rgba(29,185,84,.08)}
.d .ul{display:flex;flex-direction:column;margin-top:10px;min-height:0;overflow:hidden;list-style:none}
.d .ui{display:grid;grid-template-rows:1fr;transition:grid-template-rows .5s var(--ml-ease),opacity .4s ease}
.d .ui.gone{grid-template-rows:0fr;opacity:0}
.d .ur{display:flex;gap:12px;min-height:0;padding:11px 0;overflow:hidden;border-top:1px solid var(--ml-line)}
.d .ur time{flex:none;width:44px;padding-top:2px;font:600 12px/1.3 var(--ml-mono);color:var(--ml-muted)}
.d .ur p{display:flex;flex-direction:column;gap:2px;min-width:0}
.d .ur b{font-size:13.5px;font-weight:600}
.d .ur small{font-size:12.5px;color:var(--ml-muted)}
@keyframes mt-rock{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .hd{display:none}
  .d .brand{margin-right:auto}
  .d .page{padding:16px}
  .d .wrap{grid-template-columns:minmax(0,1fr);min-height:auto;flex:none}
  .d .mb{padding:18px}
  .d .mb h2{font-size:20px}
  .d .steps{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .facts{grid-template-columns:minmax(0,1fr)}
  .d .mn{overflow:visible;min-height:auto}
  .d .band{flex:none;height:120px;border-radius:16px 16px 0 0}
  .d .col{min-height:auto}
  .d .upd{flex:none}
}
@media (prefers-reduced-motion: reduce){.d .wr{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const BASEU = [['01:44', 'Migration started', 'Moving order history to the new database'], ['01:20', 'Backup complete', '2.4 TB verified'], ['01:00', 'Maintenance started', 'Orders and invoices paused']];
      const NEXT = [[50, '01:58', 'Migration at 50%', 'Orders from 2024 and 2025 moved'], [65, '02:14', 'Migration at 65%', 'Invoices moved, checking totals'], [80, '02:29', 'Migration at 80%', 'Catalogue and prices moved']];
      const ul = $('.ul');
      const nt = $('.nt');
      const steps = [...root.querySelectorAll('.s')];
      const CK = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      let p = 38;
      let sent = 0;
      let subscribed = false;
      const row = (u, instant) => {
        const li = document.createElement('li');
        li.className = instant ? 'ui' : 'ui gone';
        li.innerHTML = `<div class="ur"><time>${u[0]}</time><p><b>${u[1]}</b><small>${u[2]}</small></p></div>`;
        ul.prepend(li);
        if (!instant) {
          void li.offsetWidth;
          li.classList.remove('gone');
        }
        while (ul.children.length > 5) ul.lastElementChild.remove();
      };
      const paint = () => {
        $('.fill').style.transform = `scaleX(${p / 100})`;
        $('.pv').textContent = `${Math.round(p)}%`;
        const left = Math.round((100 - p) * 1.15);
        $('.eta').textContent = `About ${left} minutes left`;
        steps.forEach((s, i) => {
          const done = i === 0 || (i === 1 && p >= 85);
          const act = (i === 1 && p < 85) || (i === 2 && p >= 85);
          s.className = `s${done ? ' dn' : act ? ' act' : ''}`;
          s.querySelector('.sd').innerHTML = done ? CK : '';
        });
      };
      const resetAll = () => {
        p = 38;
        sent = 0;
        ul.innerHTML = '';
        BASEU.slice().reverse().forEach((u) => row(u, true));
        subscribed = false;
        nt.classList.remove('on');
        nt.querySelector('span').textContent = 'Notify me';
        paint();
      };
      nt.addEventListener('click', () => {
        subscribed = !subscribed;
        nt.classList.toggle('on', subscribed);
        nt.querySelector('span').textContent = subscribed ? 'We will email you' : 'Notify me';
      });
      root.querySelectorAll('.lk').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
      resetAll();

      // Progress ticks on its own clock; a second loop drives the cursor to Notify me.
      (async () => {
        await wait(1200);
        while (root.isConnected) {
          await wait(70);
          p += 0.34;
          if (sent < NEXT.length && p >= NEXT[sent][0]) {
            row(NEXT[sent].slice(1));
            sent += 1;
          }
          paint();
          if (p >= 86) {
            await wait(2400);
            resetAll();
            await wait(1200);
          }
        }
      })();
      cur.style.transform = 'translate(720px,560px)';
      (async () => {
        await wait(3000);
        while (root.isConnected) {
          if (!idle() || subscribed || p < 52) {
            await wait(400);
            continue;
          }
          await tap(nt, 0.5, 0.55);
          await wait(2500);
        }
      })();
    },
    prompt: `Build a scheduled-maintenance screen for a customer portal, shown instead of the app while work is in progress. Layout: 62px header (logo, "Order portal" label, Help centre link, avatar) and a centered two-column body (max 1100px, columns 1.25fr / 1fr, 16px gap) that fills the height.

Left card: a 130px illustration band (soft accent-soft to white gradient with line-drawn gear and wrench between two columns of rounded storage bars; the wrench rocks +-12deg over 3.6s - keep it a rocking tool, never a spinning wheel), a "Scheduled maintenance" amber pill, an h2 "We are upgrading Meridian ordering", one honest paragraph with the exact window in UTC and what is paused, then a progress panel (label, big tabular percentage, a 10px bar that grows with transform: scaleX, "About 71 minutes left") and a four-step row (Backup, Migrate data, Verify, Reopen) with done / active / todo dots.

Right column: "What is affected" (icon, service, status pill: Paused, Paused, Delayed, Operational) and "Status updates", a timeline of time-stamped entries with a "Notify me" button; new updates open at the top (grid-template-rows 0fr to 1fr) when progress crosses 50%, 65% and 80%, and the list keeps the latest five.

Behavior: progress advances continuously (about 5% per second in the demo; poll a status endpoint every 15s in production) and updates the percentage, ETA and steps. Notify me toggles to "We will email you". Accessibility: progress uses role="progressbar" with aria-valuenow, updates list is aria-live="polite", real buttons with focus-visible rings, prefers-reduced-motion stops the wrench. Phone layout below 760px: one column, steps 2 per row.${ENDP} Components: Header, MaintenanceCard, ProgressPanel, AffectedList, UpdatesTimeline.`,
  });

  // ---------------------------------------------------------------- 7. Permission denied -> request access -> sent
  ML.add({
    id: 'app-states-no-access',
    cat: 'app-states',
    title: 'Access denied, request sent',
    sub: 'Pick a level, ask the owner, sent',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.folder, 16)}</span>Kestrel Drive</div>
    <nav class="nav" aria-label="Main">
      <button class="it" type="button">${I(P.folder)}<span>My files</span></button>
      <button class="it on" type="button" aria-current="page">${I(P.users)}<span>Shared with me</span><em>6</em></button>
      <button class="it" type="button">${I(P.clock)}<span>Recent</span></button>
      <button class="it" type="button">${I(P.star)}<span>Starred</span></button>
      <button class="it" type="button">${I(P.archive)}<span>Trash</span></button>
    </nav>
    <div class="foot"><span class="av">SW</span><p><b>Sam Whitfield</b><small>sam@kestrel.co</small></p></div>
  </aside>
  <div class="main">
    <header class="top">
      <p class="crumb">Shared with me<span>/</span>Finance<span>/</span><b>Q4 pricing model</b></p>
      <label class="search" style="width:260px">${I(P.search, 16)}<input type="search" placeholder="Search files" aria-label="Search files"></label>
      <span class="av">SW</span>
    </header>
    <main class="page">
      <div class="decoy" aria-hidden="true">
        <div class="dh"><i style="width:34%"></i><i style="width:12%"></i><i style="width:12%"></i><i style="width:12%"></i></div>
        <div class="dr"><i style="width:30%"></i><i style="width:10%"></i><i style="width:14%"></i><i style="width:9%"></i></div>
        <div class="dr"><i style="width:26%"></i><i style="width:12%"></i><i style="width:10%"></i><i style="width:13%"></i></div>
        <div class="dr"><i style="width:34%"></i><i style="width:9%"></i><i style="width:12%"></i><i style="width:10%"></i></div>
        <div class="dr"><i style="width:22%"></i><i style="width:14%"></i><i style="width:9%"></i><i style="width:12%"></i></div>
        <div class="dr"><i style="width:30%"></i><i style="width:10%"></i><i style="width:13%"></i><i style="width:11%"></i></div>
        <div class="dr"><i style="width:28%"></i><i style="width:12%"></i><i style="width:10%"></i><i style="width:9%"></i></div>
        <div class="dr"><i style="width:32%"></i><i style="width:9%"></i><i style="width:14%"></i><i style="width:12%"></i></div>
      </div>
      <section class="card gate" data-s="ask" aria-label="Request access">
        <div class="pnl ask">
          <span class="lk-t">${I(P.lock, 26)}</span>
          <h2>You need access</h2>
          <p class="txt">This file is private. Ask the owner to share it with you.</p>
          <div class="file">${I(P.file, 20)}<p><b>Q4 pricing model.xlsx</b><small>Spreadsheet - Finance</small></p></div>
          <div class="own"><span class="av t2">PN</span><p><b>Priya Nair</b><small>Owner - priya@kestrel.co</small></p></div>
          <div class="seg" role="radiogroup" aria-label="Access level"><span class="sl"></span><button class="sb on" type="button" role="radio" aria-checked="true">Can view</button><button class="sb" type="button" role="radio" aria-checked="false">Can edit</button></div>
          <label class="note"><textarea rows="2" placeholder="Add a note (optional)" aria-label="Note to the owner"></textarea></label>
          <button class="cta ra" type="button"><span>Request access</span></button>
        </div>
        <div class="pnl sent">
          <span class="stack"><span class="av l t2">PN</span><span class="bd">${CHK(14, 3)}</span></span>
          <h2>Request sent</h2>
          <p class="txt"><b class="on">Priya Nair</b> will get an email. We will let you know as soon as she responds.</p>
          <div class="sum"><span class="pill lvl">Can view</span><span class="pill mut">${I(P.clock, 13)}Sent just now</span></div>
          <p class="fine">Priya usually replies in under 4 hours.</p>
          <button class="ghost back" type="button">Back to Shared with me</button>
        </div>
      </section>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}${SIDE}${TOP}
.d .app{display:grid;grid-template-columns:220px minmax(0,1fr)}
.d .page{position:relative;align-items:center;justify-content:center;padding:24px;overflow:hidden}
.d .decoy{position:absolute;inset:0;display:flex;flex-direction:column;gap:0;padding:28px;background:var(--ml-bg);filter:blur(5px);opacity:.75}
.d .decoy::after{content:"";position:absolute;inset:0;background:rgba(244,247,252,.55)}
.d .dh,.d .dr{display:flex;align-items:center;gap:4%;flex:1;padding:0 8px;border-bottom:1px solid var(--ml-line)}
.d .dh i,.d .dr i{display:block;height:11px;border-radius:6px;background:var(--ml-bar)}
.d .dh i{background:var(--ml-accent-line)}
.d .gate{position:relative;z-index:2;width:min(440px,100%);max-height:100%;padding:28px;overflow-y:auto;scrollbar-width:none;box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg)}
.d .pnl{display:none;flex-direction:column;align-items:center;text-align:center}
.d .gate[data-s="ask"] .ask,.d .gate[data-s="sent"] .sent{display:flex;animation:st-in 520ms var(--ml-spring) both}
.d .lk-t{display:grid;place-items:center;width:56px;height:56px;margin-bottom:14px;border-radius:16px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent)}
.d .gate .txt{max-width:320px;margin-top:6px}
.d .gate b.on{color:var(--ml-ink);font-weight:650}
.d .file,.d .own{display:flex;align-items:center;gap:12px;width:100%;padding:12px 14px;border-radius:12px;text-align:left}
.d .file{margin-top:18px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-accent)}
.d .own{margin-top:8px;padding:8px 14px}
.d .file p,.d .own p{display:flex;flex-direction:column;gap:1px;min-width:0}
.d .file b,.d .own b{font-size:13.5px;font-weight:600;color:var(--ml-ink)}
.d .file small,.d .own small{font-size:12.5px;color:var(--ml-muted)}
.d .seg{position:relative;display:grid;grid-template-columns:1fr 1fr;width:100%;margin-top:14px;padding:4px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .sl{position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:9px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px var(--ml-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .gate[data-lv="1"] .sl{transform:translateX(100%)}
.d .sb{position:relative;height:34px;border:0;background:none;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .sb.on{color:var(--ml-ink)}
.d .sb:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px;border-radius:9px}
.d .note{display:block;width:100%;margin-top:12px}
.d .note textarea{display:block;width:100%;padding:11px 13px;border:0;border-radius:12px;outline:0;resize:none;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13.5px;line-height:1.45;color:var(--ml-ink);transition:box-shadow .25s ease,background-color .25s ease}
.d .note textarea::placeholder{color:#A1A1A6}
.d .note textarea:focus,.d .note.is-auto textarea{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .ra{width:100%;height:46px;margin-top:14px;border-radius:12px;font-size:14.5px}
.d .stack{position:relative;margin-bottom:16px}
.d .stack .av.l{width:64px;height:64px;font-size:20px}
.d .bd{position:absolute;right:-4px;bottom:-4px;display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#1DB954;color:#fff;box-shadow:0 0 0 3px var(--ml-bg)}
.d .gate[data-s="sent"] .bd{animation:st-pop 520ms var(--ml-bounce) 240ms both}
.d .gate[data-s="sent"] .bd path{stroke-dasharray:1;stroke-dashoffset:1;animation:st-draw 500ms var(--ml-ease) 520ms forwards}
.d .sum{display:flex;gap:8px;margin-top:18px}
.d .fine{margin-top:14px;font-size:12.5px;color:var(--ml-muted)}
.d .back{margin-top:18px;width:100%}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .top .search{display:none}
  .d .top{padding:0 16px}
  .d .page{padding:16px}
  .d .gate{padding:22px 18px}
  .d .decoy{padding:12px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const gate = $('.gate');
      const ta = $('textarea');
      const ra = $('.ra');
      const sbs = [...root.querySelectorAll('.sb')];
      let busy = false;
      const level = (i) => {
        gate.dataset.lv = i;
        sbs.forEach((b, k) => {
          b.classList.toggle('on', k === i);
          b.setAttribute('aria-checked', String(k === i));
        });
        $('.lvl').textContent = i ? 'Can edit' : 'Can view';
      };
      sbs.forEach((b, i) => b.addEventListener('click', () => level(i)));
      ra.addEventListener('click', async () => {
        if (busy) return;
        busy = true;
        ra.classList.add('busy');
        ra.querySelector('span').textContent = 'Sending request';
        await wait(1200);
        gate.dataset.s = 'sent';
        ra.classList.remove('busy');
        ra.querySelector('span').textContent = 'Request access';
        busy = false;
      });
      $('.back').addEventListener('click', () => {
        gate.dataset.s = 'ask';
        ta.value = '';
        level(0);
      });
      const type = async (text) => {
        ta.closest('.note').classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          ta.value += ch;
          await wait(40 + Math.random() * 40);
        }
        ta.closest('.note').classList.remove('is-auto');
        return true;
      };
      level(0);

      // Autoplay: write a note, choose Can edit, request access; the sent state holds, then the form returns.
      cur.style.transform = 'translate(720px,540px)';
      (async () => {
        await wait(2400);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (gate.dataset.s !== 'ask') {
            gate.dataset.s = 'ask';
            await wait(600);
          }
          ta.value = '';
          level(0);
          cur.classList.toggle('off', !moveTo(ta, 0.4, 0.5));
          await wait(800);
          if (!(await type('Need the Q4 numbers for the board deck.'))) continue;
          if (!(await tap(sbs[1], 0.5, 0.55))) continue;
          await wait(500);
          if (!(await tap(ra, 0.5, 0.55))) continue;
          await wait(4800);
          if (!idle()) continue;
          if (!(await tap($('.back'), 0.5, 0.55))) continue;
          await wait(900);
        }
      })();
    },
    prompt: `Build a permission-denied (403) state for a file app, rendered inside the app shell so people keep context: 220px white sidebar (logo, My files, Shared with me active, Recent, Starred, Trash, user), a 62px top bar with the breadcrumb "Shared with me / Finance / Q4 pricing model", search and avatar. Behind the state, render a blurred and washed-out table silhouette (CSS blur 5px, a 55% surface-colored overlay) so the missing content is implied but unreadable.

Center card (440px max, 20px radius, large soft shadow): a 56px accent-soft tile with a lock icon, h2 "You need access", one line of help, a file row (icon, "Q4 pricing model.xlsx", "Spreadsheet - Finance"), an owner row with avatar initials, name and email, a two-option segmented control ("Can view" / "Can edit") whose white highlight slides with transform: translateX using a critically damped spring, a note textarea and a full-width primary "Request access" button.

Behavior: pressing Request access runs a sheen across the button (no spinner) for about 1.2s, then the card content swaps (opacity and translateY 8px, 520ms) to the confirmation: a large owner avatar with a green check badge that pops in (scale .6 to 1 with a small overshoot) and whose check draws itself (stroke-dashoffset), "Request sent", a line naming who was emailed, level and time pills, a "usually replies in under 4 hours" note and a "Back to Shared with me" button. Send the note and level to your API and disable the button while the request is in flight.

Accessibility: segmented control is role="radiogroup" with role="radio" buttons and aria-checked, the textarea has an aria-label, focus-visible rings everywhere. Phone layout below 760px: sidebar and search hide, the card keeps 16px margins.${ENDP} Components: Sidebar, TopBar, BlurredBackdrop, AccessCard, SegmentedControl, RequestSent.`,
  });

  // ---------------------------------------------------------------- 8. Upgrade paywall
  ML.add({
    id: 'app-states-paywall',
    cat: 'app-states',
    title: 'Upgrade paywall',
    sub: 'Plan card over a blurred preview, unlock',
    html: `
<div class="app" data-s="free" data-b="0">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.home, 16)}</span>Tidewater</div>
    <nav class="nav" aria-label="Main">
      <button class="it" type="button">${I(P.home)}<span>Listings</span><em>24</em></button>
      <button class="it" type="button">${I(P.users)}<span>Leads</span><em>9</em></button>
      <button class="it" type="button">${I(P.cal)}<span>Showings</span></button>
      <button class="it on" type="button" aria-current="page">${I(P.chart)}<span>Insights</span><span class="lk-i">${I(P.lock, 14)}</span></button>
      <button class="it" type="button">${I(P.gear)}<span>Settings</span></button>
    </nav>
    <div class="foot"><span class="av">LO</span><p><b>Luis Ortega</b><small>Free plan</small></p></div>
  </aside>
  <div class="main">
    <header class="top">
      <p class="crumb">Tidewater Realty<span>/</span><b>Insights</b></p>
      <span class="pill plan">Free plan</span>
      <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
      <span class="av">LO</span>
    </header>
    <main class="page">
      <div class="stage">
        <div class="prev" aria-hidden="true">
          <div class="head"><div><h1>Market insights</h1><p class="sub">Harbour district, last 90 days</p></div><span class="pill">Updated daily</span></div>
          <div class="kp">
            <div class="card k"><p class="lbl">Median price</p><p class="v">$612,000</p><span class="pill ok">+3.2%</span></div>
            <div class="card k"><p class="lbl">Days on market</p><p class="v">21</p><span class="pill ok">-4 days</span></div>
            <div class="card k"><p class="lbl">New leads</p><p class="v">148</p><span class="pill ok">+18%</span></div>
          </div>
          <div class="rw">
            <div class="card ch"><p class="lbl">Price trend</p>
              <svg viewBox="0 0 600 220" preserveAspectRatio="none"><defs><linearGradient id="st-pw-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF4433" stop-opacity=".22"/><stop offset="1" stop-color="#FF4433" stop-opacity="0"/></linearGradient></defs>
                <path d="M0 170C60 160 90 130 150 138S240 90 300 100S400 60 450 70S540 36 600 30L600 220L0 220Z" fill="url(#st-pw-fill)"/>
                <path class="ln" pathLength="1" d="M0 170C60 160 90 130 150 138S240 90 300 100S400 60 450 70S540 36 600 30" fill="none" stroke="#FF4433" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="card nb"><p class="lbl">Top neighborhoods</p>
              <ul><li><span>Harbour View</span><b>$714,000</b></li><li><span>Marina Row</span><b>$833,000</b></li><li><span>Old Mill</span><b>$562,000</b></li><li><span>Cedar Point</span><b>$489,000</b></li><li><span>Pier Lane</span><b>$655,000</b></li></ul>
            </div>
          </div>
        </div>
        <div class="gate">
          <section class="card plan-card" aria-label="Upgrade to Pro">
            <span class="pill">${I(P.star, 13)}Pro</span>
            <h2>Unlock market insights</h2>
            <p class="txt">Price trends, lead sources and neighborhood demand for every listing.</p>
            <div class="seg" role="radiogroup" aria-label="Billing"><span class="sl"></span><button class="sb on" type="button" role="radio" aria-checked="true">Monthly</button><button class="sb" type="button" role="radio" aria-checked="false">Yearly <em>-20%</em></button></div>
            <p class="price"><b class="pn">$29</b><span>per agent / month</span></p>
            <p class="bill">Billed monthly</p>
            <ul class="feat">
              <li>${I(P.check, 16, 2.6)}Neighborhood price trends</li>
              <li>${I(P.check, 16, 2.6)}Lead source reports</li>
              <li>${I(P.check, 16, 2.6)}Export to CSV and PDF</li>
            </ul>
            <button class="cta up" type="button"><span>Upgrade to Pro</span></button>
            <p class="fine">Cancel anytime. 14-day money-back guarantee.</p>
          </section>
        </div>
      </div>
    </main>
  </div>
  <div class="toast" role="status">${I(P.check, 16, 2.6)}<span>Pro unlocked</span></div>
  ${CURSOR}
</div>`,
    css: `${BASE}${SIDE}${TOP}
.d .app{display:grid;grid-template-columns:220px minmax(0,1fr)}
.d .lk-i{display:grid;margin-left:auto;color:var(--ml-muted)}
.d .page{padding:0;overflow:hidden}
.d .stage{position:relative;flex:1;min-height:0}
.d .prev{display:flex;flex-direction:column;gap:18px;height:100%;padding:24px 28px 28px;filter:blur(7px);transition:filter .9s var(--ml-ease)}
.d .kp{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d .k{display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:16px}
.d .k .v{font-size:28px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .rw{display:grid;flex:1;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:14px;min-height:0}
.d .ch,.d .nb{display:flex;flex-direction:column;padding:18px;min-height:0}
.d .ch svg{flex:1;min-height:0;width:100%;margin-top:12px}
.d .ln{stroke-dasharray:1}
.d .nb ul{display:flex;flex:1;flex-direction:column;margin-top:8px;list-style:none}
.d .nb li{display:flex;flex:1;align-items:center;justify-content:space-between;border-bottom:1px solid var(--ml-line);font-size:14px}
.d .nb li:last-child{border-bottom:0}
.d .nb b{font-weight:650;font-variant-numeric:tabular-nums}
.d .gate{position:absolute;inset:0;z-index:3;display:grid;place-items:center;padding:20px;background:linear-gradient(180deg,rgba(244,247,252,.35),rgba(244,247,252,.78));transition:opacity .5s ease,visibility 0s linear 0s}
.d .plan-card{display:flex;flex-direction:column;align-items:flex-start;width:min(400px,100%);max-height:100%;padding:26px;overflow-y:auto;scrollbar-width:none;box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg);transition:transform .6s var(--ml-ease)}
.d .plan-card h2{margin-top:12px}
.d .plan-card .txt{margin-top:6px}
.d .seg{position:relative;display:grid;grid-template-columns:1fr 1fr;width:100%;margin-top:18px;padding:4px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .sl{position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:9px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px var(--ml-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .app[data-b="1"] .sl{transform:translateX(100%)}
.d .sb{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:6px;height:34px;border:0;background:none;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .sb.on{color:var(--ml-ink)}
.d .sb em{padding:2px 6px;border-radius:999px;background:rgba(29,185,84,.12);font-size:11px;font-style:normal;font-weight:650;color:#12893C}
.d .sb:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px;border-radius:9px}
.d .price{display:flex;align-items:baseline;gap:8px;margin-top:18px;font-size:13.5px;color:var(--ml-muted)}
.d .pn{font-size:44px;line-height:1;font-weight:650;letter-spacing:-.04em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .pn.pop{animation:st-pop 420ms var(--ml-bounce)}
.d .bill{margin-top:4px;font-size:12.5px;color:var(--ml-muted)}
.d .feat{display:flex;flex-direction:column;gap:10px;width:100%;margin:18px 0 20px;padding-top:16px;border-top:1px solid var(--ml-line);list-style:none}
.d .feat li{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--ml-ink-2)}
.d .feat svg{flex:none;padding:3px;box-sizing:content-box;width:16px;height:16px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .up{width:100%;height:46px;border-radius:12px;font-size:14.5px}
.d .fine{width:100%;margin-top:12px;font-size:12.5px;text-align:center;color:var(--ml-muted)}
.d .app[data-s="pro"] .prev{filter:blur(0)}
.d .app[data-s="pro"] .gate{opacity:0;visibility:hidden;pointer-events:none;transition:opacity .5s ease,visibility 0s linear .5s}
.d .app[data-s="pro"] .plan-card{transform:translateY(-10px) scale(.98)}
.d .app[data-s="pro"] .ln{animation:st-draw 1.2s var(--ml-ease) .3s both;stroke-dashoffset:1}
.d .app[data-s="pro"] .plan{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .top{padding:0 16px}
  .d .prev{padding:16px}
  .d .kp{grid-template-columns:minmax(0,1fr)}
  .d .kp .k:nth-child(n+2){display:none}
  .d .rw{grid-template-columns:minmax(0,1fr)}
  .d .nb{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const app = $('.app');
      const sbs = [...root.querySelectorAll('.sb')];
      const up = $('.up');
      const toast = $('.toast');
      let busy = false;
      const bill = (i) => {
        app.dataset.b = i;
        sbs.forEach((b, k) => {
          b.classList.toggle('on', k === i);
          b.setAttribute('aria-checked', String(k === i));
        });
        const pn = $('.pn');
        pn.textContent = i ? '$23' : '$29';
        pn.classList.remove('pop');
        void pn.offsetWidth;
        pn.classList.add('pop');
        $('.bill').textContent = i ? 'Billed $276 per year' : 'Billed monthly';
      };
      sbs.forEach((b, i) => b.addEventListener('click', () => bill(i)));
      up.addEventListener('click', async () => {
        if (busy || app.dataset.s === 'pro') return;
        busy = true;
        up.classList.add('busy');
        up.querySelector('span').textContent = 'Upgrading';
        await wait(1200);
        app.dataset.s = 'pro';
        up.classList.remove('busy');
        up.querySelector('span').textContent = 'Upgrade to Pro';
        $('.plan').textContent = 'Pro plan';
        $('.foot small').textContent = 'Pro plan';
        busy = false;
        toast.classList.add('on');
        await wait(2100);
        toast.classList.remove('on');
      });
      const lock = () => {
        app.dataset.s = 'free';
        $('.plan').textContent = 'Free plan';
        $('.foot small').textContent = 'Free plan';
        bill(0);
      };

      // Autoplay: switch to Yearly, upgrade, the blur lifts and the chart draws; then the paywall returns.
      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(2600);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (app.dataset.s !== 'free') {
            lock();
            await wait(1200);
          }
          if (!(await tap(sbs[1], 0.5, 0.55))) continue;
          await wait(1100);
          if (!(await tap(up, 0.5, 0.55))) continue;
          await wait(5200);
          if (!idle()) continue;
          lock();
          await wait(1400);
        }
      })();
    },
    prompt: `Build an upgrade paywall for a locked feature inside a normal app shell (220px sidebar with an Insights item that carries a small lock icon, 62px top bar with a "Free plan" pill). The page region is the real Insights page rendered behind the gate: a title row, three KPI cards, a price-trend area chart and a neighborhoods list, all CSS-blurred (filter: blur(7px)) and covered by a vertical scrim (surface color at 35% to 78% opacity), so the value is visible but unreadable.

Plan card (400px, 20px radius, large soft shadow) centered on the scrim: an accent "Pro" pill, h2 "Unlock market insights", one sentence of benefit, a Monthly / Yearly segmented control (the white highlight slides with transform: translateX on a critically damped spring, the yearly option carries a green "-20%" chip), a 44px tabular price that pops (scale .6 to 1, small overshoot) when the billing period changes ($29 monthly, $23 yearly with "Billed $276 per year"), three check-list benefits, a full-width primary "Upgrade to Pro" and a "Cancel anytime" line.

Behavior: Upgrade shows a sheen across the button (no spinner) for about 1.2s, then the gate fades out (opacity .5s, card moves up 10px and scales to .98) while the blur transitions to 0 over .9s; the chart line draws itself (pathLength=1, stroke-dashoffset 1 to 0, 1.2s), the top pill and sidebar plan label switch to "Pro plan" and a toast "Pro unlocked" slides up. Call your billing API before unlocking and show failures inline.

Accessibility: the preview is aria-hidden and inert while locked, the plan card is a labelled section, the toggle is role="radiogroup", focus-visible rings, toast role="status". Phone layout below 760px: sidebar hides, preview shows one KPI and the chart.${ENDP} Components: Sidebar, TopBar, InsightsPreview, PaywallGate, BillingToggle, PlanCard.`,
  });

  // ---------------------------------------------------------------- 9. Success confirmation
  const SUMR = `<dl class="sumr">
    <div><dt>Class</dt><dd class="v-cls">Reformer Pilates</dd></div>
    <div><dt>Coach</dt><dd class="v-coach">Noor Haddad</dd></div>
    <div><dt>When</dt><dd class="v-when">Thu 15 Oct, 07:30 - 08:20</dd></div>
    <div><dt>Where</dt><dd class="v-where">Studio 2, Harbour Street</dd></div>
    <div><dt>Credits</dt><dd class="v-cred">1 used, 4 left</dd></div>
    <div><dt>Reference</dt><dd class="v-ref mono">BF-20418</dd></div>
  </dl>`;
  ML.add({
    id: 'app-states-success',
    cat: 'app-states',
    title: 'Success confirmation',
    sub: 'The check draws, summary, next actions',
    html: `
<div class="app">
  <header class="top">
    <div class="brand"><span class="mark">${I(P.heart, 16)}</span>Bayside Fitness</div>
    <nav class="tabs" aria-label="Main"><button class="tab" type="button">Schedule</button><button class="tab on" type="button" aria-current="page">Bookings</button><button class="tab" type="button">Membership</button></nav>
    <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
    <span class="av">IC</span>
  </header>
  <main class="page">
    <section class="card box still" data-s="done" aria-live="polite">
      <div class="pnl done">
        <span class="ring"></span>
        <span class="okc big">${CHK(38, 2.8)}</span>
        <h1>You are booked in</h1>
        <p class="txt">A confirmation is on its way to isabel@fernway.co.</p>
        ${SUMR}
        <div class="acts"><button class="cta cal" type="button">${I(P.cal, 16)}<span>Add to calendar</span></button><button class="ghost" type="button">${I(P.userPlus, 16)}Invite a friend</button></div>
        <button class="lk again" type="button">Book another class</button>
      </div>
      <div class="pnl rev">
        <span class="okc big q">${I(P.cal, 30)}</span>
        <h1>Confirm your booking</h1>
        <p class="txt">One credit will be used. You can cancel free up to 12 hours before.</p>
        ${SUMR}
        <div class="acts"><button class="cta cf" type="button"><span>Confirm booking</span></button><button class="ghost cn" type="button">Cancel</button></div>
      </div>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:flex;flex-direction:column}
.d .top{display:flex;flex:none;align-items:center;gap:16px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tabs{display:flex;gap:4px;margin:0 auto 0 18px;height:100%}
.d .tab{position:relative;height:100%;padding:0 14px;border:0;background:none;font-size:14px;font-weight:500;color:var(--ml-muted);cursor:pointer}
.d .tab.on{color:var(--ml-ink);font-weight:600}
.d .tab.on::after{content:"";position:absolute;left:12px;right:12px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .page{display:flex;flex:1;align-items:center;justify-content:center;min-height:0;padding:24px;overflow-y:auto;scrollbar-width:thin}
.d .box{width:min(560px,100%);margin:auto;padding:36px 36px 30px}
.d .pnl{display:none;flex-direction:column;align-items:center;text-align:center}
.d .box[data-s="done"] .done,.d .box[data-s="rev"] .rev{display:flex;animation:st-in 520ms var(--ml-spring) both}
.d .okc.big{position:relative;width:76px;height:76px;margin-bottom:18px}
.d .okc.q{background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ring{position:absolute;top:36px;width:76px;height:76px;border-radius:50%;box-shadow:0 0 0 2px rgba(29,185,84,.35);opacity:0}
.d .box[data-s="done"] .ring{animation:sc-ring 900ms var(--ml-ease) 200ms both}
.d .box[data-s="done"] .done .okc path{stroke-dasharray:1;stroke-dashoffset:1;animation:st-draw 650ms var(--ml-ease) 240ms forwards}
.d .box.still *{animation:none!important}
.d .box.still[data-s="done"] .done .okc path{stroke-dasharray:1;stroke-dashoffset:0}
.d .txt{max-width:360px;margin-top:6px}
.d .sumr{display:flex;flex-direction:column;width:100%;margin-top:22px;padding:4px 18px;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:left}
.d .sumr div{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:11px 0;border-bottom:1px solid var(--ml-line)}
.d .sumr div:last-child{border-bottom:0}
.d .sumr dt{font-size:13px;color:var(--ml-muted)}
.d .sumr dd{font-size:13.5px;font-weight:600;text-align:right}
.d .sumr .mono{font-family:var(--ml-mono);font-size:12.5px}
.d .box[data-s="done"] .done .sumr div{animation:st-in 520ms var(--ml-spring) both}
.d .box[data-s="done"] .done .sumr div:nth-child(1){animation-delay:420ms}
.d .box[data-s="done"] .done .sumr div:nth-child(2){animation-delay:470ms}
.d .box[data-s="done"] .done .sumr div:nth-child(3){animation-delay:520ms}
.d .box[data-s="done"] .done .sumr div:nth-child(4){animation-delay:570ms}
.d .box[data-s="done"] .done .sumr div:nth-child(5){animation-delay:620ms}
.d .box[data-s="done"] .done .sumr div:nth-child(6){animation-delay:670ms}
.d .acts{display:flex;gap:10px;width:100%;margin-top:20px}
.d .acts .cta,.d .acts .ghost{flex:1;height:44px}
.d .cal.ok{background:#1DB954;box-shadow:0 1px 2px rgba(29,185,84,.3),0 8px 18px rgba(29,185,84,.22)}
.d .again{margin-top:16px;font-size:13.5px}
@keyframes sc-ring{0%{transform:scale(1);opacity:.9}100%{transform:scale(1.7);opacity:0}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .tabs{display:none}
  .d .top{padding:0 16px}
  .d .brand{margin-right:auto}
  .d .page{padding:16px;align-items:flex-start}
  .d .box{padding:26px 20px 22px}
  .d .acts{flex-direction:column}
  .d .acts .cta,.d .acts .ghost{flex:none}
}
@media (prefers-reduced-motion: reduce){.d .ring{animation:none!important}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const box = $('.box');
      const cal = $('.cal');
      const cf = $('.cf');
      const B = [
        { cls: 'Reformer Pilates', coach: 'Noor Haddad', when: 'Thu 15 Oct, 07:30 - 08:20', where: 'Studio 2, Harbour Street', cred: '1 used, 4 left', ref: 'BF-20418' },
        { cls: 'Yin Yoga', coach: 'Ana Lim', when: 'Fri 16 Oct, 18:00 - 19:00', where: 'Studio 1, Harbour Street', cred: '1 used, 3 left', ref: 'BF-20431' },
      ];
      let now = 0;
      let busy = false;
      const fill = (b) => {
        [['cls', 'cls'], ['coach', 'coach'], ['when', 'when'], ['where', 'where'], ['cred', 'cred'], ['ref', 'ref']].forEach(([k, f]) =>
          root.querySelectorAll(`.v-${k}`).forEach((el) => (el.textContent = b[f])),
        );
      };
      const show = (s) => {
        box.classList.remove('still');
        box.dataset.s = s;
      };
      $('.again').addEventListener('click', () => {
        fill(B[1 - now]);
        show('rev');
      });
      cf.addEventListener('click', async () => {
        if (busy) return;
        busy = true;
        cf.classList.add('busy');
        cf.querySelector('span').textContent = 'Booking';
        await wait(1000);
        now = 1 - now;
        cal.classList.remove('ok');
        cal.querySelector('span').textContent = 'Add to calendar';
        show('done');
        cf.classList.remove('busy');
        cf.querySelector('span').textContent = 'Confirm booking';
        busy = false;
      });
      $('.cn').addEventListener('click', () => {
        fill(B[now]);
        show('done');
      });
      cal.addEventListener('click', () => {
        cal.classList.add('ok');
        cal.querySelector('span').textContent = 'Added to calendar';
      });
      fill(B[0]);

      // Autoplay: success shown first; add to calendar, book another class, confirm, a new success draws.
      cur.style.transform = 'translate(760px,560px)';
      (async () => {
        await wait(3000);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (box.dataset.s !== 'done') {
            fill(B[now]);
            show('done');
            await wait(1200);
          }
          if (!(await tap(cal, 0.5, 0.55))) continue;
          await wait(1400);
          if (!(await tap($('.again'), 0.5, 0.55))) continue;
          await wait(2200);
          if (!(await tap(cf, 0.5, 0.55))) continue;
          await wait(5200);
        }
      })();
    },
    prompt: `Build a success confirmation screen for a booking flow inside a top-nav app (64px header with logo, tabs with a 2px underline on the active one, bell, avatar). One centered card (560px max, 36px padding) holds the whole moment.

Composition: on first paint the finished success state is already drawn: a 76px soft-green disc with a green check, an h1 "You are booked in", one line naming where the confirmation was sent, a summary panel (surface background, hairline rows: Class, Coach, When, Where, Credits, Reference in mono) and two equal actions: a primary "Add to calendar" and a secondary "Invite a friend", with a quiet "Book another class" link under them. No confetti: one restrained moment.

Motion when the state is entered again: the check draws itself (pathLength=1, stroke-dasharray 1, stroke-dashoffset 1 to 0 over 650ms after 240ms), a single thin green ring expands from the disc (scale 1 to 1.7, fades out over 900ms), the summary rows rise in with opacity and translateY(8px), staggered 50ms. "Add to calendar" turns green and reads "Added to calendar". "Book another class" swaps the card to a review state (calendar icon tile, "Confirm your booking", the same summary rows with the new class, Confirm booking and Cancel); Confirm shows a sheen across the button (no spinner) for 1s and returns to success with the new booking.

Accessibility: the card is aria-live="polite", real buttons with focus-visible rings, prefers-reduced-motion removes the ring and keeps the check static. Phone layout below 760px: tabs hide, actions stack, padding 20px.${ENDP} Components: TopNav, SuccessCard, BookingSummary, ReviewCard.`,
  });

  // ---------------------------------------------------------------- 10. Rate limited
  ML.add({
    id: 'app-states-rate-limited',
    cat: 'app-states',
    title: 'Rate limited',
    sub: 'Cooldown counts down, then it works',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.truck, 16)}</span>Atlas Freight</div>
    <nav class="nav" aria-label="Main">
      <button class="it on" type="button" aria-current="page">${I(P.box)}<span>Shipments</span><em>128</em></button>
      <button class="it" type="button">${I(P.truck)}<span>Fleet</span></button>
      <button class="it" type="button">${I(P.pin)}<span>Routes</span></button>
      <button class="it" type="button">${I(P.receipt)}<span>Invoices</span></button>
      <button class="it" type="button">${I(P.chart)}<span>Reports</span></button>
    </nav>
    <div class="foot"><span class="av">RS</span><p><b>Rafael Santos</b><small>Operations</small></p></div>
  </aside>
  <div class="main">
    <header class="top">
      <p class="crumb">Atlas Freight<span>/</span><b>Shipments</b></p>
      <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
      <span class="av">RS</span>
    </header>
    <main class="page">
      <div class="head">
        <div><h1>Shipments</h1><p class="sub">128 shipments in October 2026</p></div>
        <button class="cta ex" type="button" disabled>${I(P.download, 16)}<span>Export CSV</span></button>
      </div>
      <section class="card alert" data-s="cool" aria-live="polite">
        <div class="aw cool">
          <div class="gz"><svg class="il" viewBox="0 0 120 80" aria-hidden="true">
            <path class="k1" d="M14 72A46 46 0 0 1 106 72" style="stroke-width:11"/>
            <path class="k2" d="M14 72A46 46 0 0 1 106 72" style="stroke-width:11;stroke:#FF9F0A" pathLength="1"/>
            <g class="ndl"><path class="k4" d="M60 72L88 44" style="stroke-width:4"/><circle class="f8" cx="60" cy="72" r="6"/></g>
          </svg></div>
          <div class="at">
            <span class="pill warn">Error 429</span>
            <h2>Slow down a moment</h2>
            <p class="txt">You sent 60 export requests in the last minute, which is the limit. Exports unlock again in a few seconds.</p>
            <p class="use"><span>Requests this minute</span><b>60 / 60</b></p>
          </div>
          <div class="cd">
            <p class="lbl">Try again in</p>
            <p class="tm">00:07</p>
            <i class="tk"><s></s></i>
            <button class="cta rt" type="button" disabled><span>Try again</span></button>
          </div>
        </div>
        <div class="aw fin">
          <span class="okc">${CHK(30, 2.8)}</span>
          <div class="at">
            <span class="pill ok">Done</span>
            <h2>Export ready</h2>
            <p class="txt">Your file is ready. It stays available for 24 hours.</p>
            <div class="fl">${I(P.file, 20)}<p><b>shipments-oct-2026.csv</b><small>128 rows - 2.4 MB</small></p></div>
          </div>
          <div class="cd"><button class="cta dl" type="button">${I(P.download, 16)}<span>Download</span></button></div>
        </div>
      </section>
      <section class="card tbl">
        <div class="tr th"><span>Shipment</span><span>Route</span><span>Status</span><span class="eta">ETA</span></div>
        <div class="rows">
          <div class="tr"><b>AF-10482</b><span>Rotterdam to Hamburg</span><span><i class="pill">In transit</i></span><span class="eta">Fri 16 Oct</span></div>
          <div class="tr"><b>AF-10483</b><span>Antwerp to Lyon</span><span><i class="pill ok">Delivered</i></span><span class="eta">Wed 14 Oct</span></div>
          <div class="tr"><b>AF-10484</b><span>Gdansk to Prague</span><span><i class="pill warn">Delayed</i></span><span class="eta">Thu 15 Oct</span></div>
          <div class="tr"><b>AF-10485</b><span>Madrid to Porto</span><span><i class="pill">In transit</i></span><span class="eta">Sat 17 Oct</span></div>
          <div class="tr"><b>AF-10486</b><span>Milan to Zurich</span><span><i class="pill mut">Loading</i></span><span class="eta">Mon 19 Oct</span></div>
          <div class="tr"><b>AF-10487</b><span>Vienna to Munich</span><span><i class="pill">In transit</i></span><span class="eta">Fri 16 Oct</span></div>
        </div>
      </section>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}${SIDE}${TOP}
.d .app{display:grid;grid-template-columns:220px minmax(0,1fr)}
.d .alert{flex:none;display:grid;padding:20px 22px}
.d .aw{grid-area:1/1;display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:22px;transition:opacity .4s ease,transform .6s var(--ml-spring)}
.d .alert[data-s="done"] .cool,.d .alert:not([data-s="done"]) .fin{opacity:0;visibility:hidden;pointer-events:none}
.d .alert[data-s="done"] .cool{transform:translateY(-8px)}
.d .alert:not([data-s="done"]) .fin{transform:translateY(8px)}
.d .gz{width:128px}
.d .ndl{transform-origin:60px 72px;animation:rl-jit 1.6s ease-in-out infinite}
.d .at{display:flex;flex-direction:column;align-items:flex-start;gap:6px;min-width:0}
.d .at h2{margin-top:2px;font-size:20px}
.d .at .txt{max-width:460px;font-size:13.5px}
.d .use{display:flex;gap:10px;margin-top:4px;font-size:12.5px;color:var(--ml-muted)}
.d .use b{font-family:var(--ml-mono);font-weight:600;color:#B25E00}
.d .cd{display:flex;flex-direction:column;align-items:stretch;gap:8px;width:190px}
.d .tm{font-size:38px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .tk{display:block;height:6px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .tk s{display:block;height:100%;border-radius:inherit;background:#FF9F0A;transform:scaleX(1);transform-origin:0 50%;transition:transform 1s linear}
.d .cd .cta{height:42px;margin-top:4px}
.d .alert[data-s="ready"] .tm{color:#12893C}
.d .alert[data-s="ready"] .tk s{background:#1DB954}
.d .fl{display:flex;align-items:center;gap:12px;margin-top:6px;padding:10px 14px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-accent)}
.d .fl p{display:flex;flex-direction:column;gap:1px}
.d .fl b{font-size:13.5px;font-weight:600;color:var(--ml-ink)}
.d .fl small{font-size:12px;color:var(--ml-muted)}
.d .alert[data-s="done"] .fin .okc path{stroke-dasharray:1;stroke-dashoffset:1;animation:st-draw 650ms var(--ml-ease) 200ms forwards}
.d .tbl{display:flex;flex:1;flex-direction:column;min-height:0;overflow:hidden}
.d .rows{display:grid;flex:1;grid-auto-rows:minmax(44px,1fr);min-height:0}
.d .tr{display:grid;grid-template-columns:130px minmax(0,1.4fr) 140px 120px;align-items:center;gap:12px;padding:0 22px;border-bottom:1px solid var(--ml-line);font-size:13.5px;color:var(--ml-ink-2)}
.d .tr:last-child{border-bottom:0}
.d .tr b{font:600 12.5px/1 var(--ml-mono);color:var(--ml-ink)}
.d .tr i{font-style:normal}
.d .th{height:44px;background:var(--ml-surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .eta{text-align:right;font-variant-numeric:tabular-nums}
@keyframes rl-jit{0%,100%{transform:rotate(4deg)}25%{transform:rotate(-3deg)}50%{transform:rotate(5deg)}75%{transform:rotate(-2deg)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .top{padding:0 16px}
  .d .page{padding:18px 16px}
  .d .head{align-items:flex-start}
  .d .aw{grid-template-columns:minmax(0,1fr);gap:14px}
  .d .gz{display:none}
  .d .cd{width:100%}
  .d .tr{grid-template-columns:90px minmax(0,1fr) 100px;padding:0 14px}
  .d .tr .eta,.d .th .eta{display:none}
}
@media (prefers-reduced-motion: reduce){.d .ndl{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const alert = $('.alert');
      const ex = $('.ex');
      const rt = $('.rt');
      const LIMIT = 7;
      let busy = false;
      const paint = (n) => {
        $('.tm').textContent = `00:0${n}`;
        $('.tk s').style.transform = `scaleX(${n / LIMIT})`;
        const label = n ? `Try again in ${n}s` : 'Try again';
        rt.querySelector('span').textContent = label;
        ex.querySelector('span').textContent = n ? `Export CSV (${n}s)` : 'Export CSV';
      };
      const run = async () => {
        if (busy || alert.dataset.s !== 'ready') return;
        busy = true;
        const b = rt;
        b.classList.add('busy');
        b.querySelector('span').textContent = 'Exporting';
        await wait(1100);
        b.classList.remove('busy');
        alert.dataset.s = 'done';
        ex.querySelector('span').textContent = 'Export CSV';
        busy = false;
      };
      rt.addEventListener('click', run);
      ex.addEventListener('click', run);
      $('.dl').addEventListener('click', () => ($('.dl span').textContent = 'Downloaded'));
      const cool = async () => {
        alert.dataset.s = 'cool';
        $('.dl span').textContent = 'Download';
        ex.disabled = true;
        rt.disabled = true;
        for (let n = LIMIT; n > 0; n--) {
          paint(n);
          await wait(1000);
        }
        paint(0);
        alert.dataset.s = 'ready';
        ex.disabled = false;
        rt.disabled = false;
      };

      // Cooldown runs on its own clock; the cursor presses Try again the moment it unlocks.
      cur.style.transform = 'translate(760px,430px)';
      (async () => {
        await wait(800);
        while (root.isConnected) {
          await cool();
          await wait(900);
          if (alert.dataset.s === 'ready' && idle()) await tap(rt, 0.5, 0.55);
          await wait(1600);
          if (alert.dataset.s === 'done' && idle()) await tap($('.dl'), 0.5, 0.55);
          await wait(3200);
        }
      })();
    },
    prompt: `Build a rate-limited (429) state for an action inside an app shell (220px sidebar, 62px top bar, page with a title row, an alert card and the data table that stays visible below). The product is a freight dashboard; the blocked action is "Export CSV".

Page: title "Shipments", a primary "Export CSV" button on the right that is disabled while the limit is active and shows the remaining time in its label ("Export CSV (7s)"). Directly under the title one full-width alert card: left a drawn half-circle gauge with a pegged amber arc and a needle that jitters +-4deg, in the middle an amber "Error 429" pill, h2 "Slow down a moment", one honest sentence with the actual limit (60 requests per minute) and a small "Requests this minute 60 / 60" row in mono; on the right a countdown block: micro-label "Try again in", a 38px tabular "00:07", a 6px bar that drains with transform: scaleX over each second (transition 1s linear) and a "Try again" button that is disabled and shows the seconds. Below the alert, the shipments table fills the remaining height (rows grid-auto-rows: minmax(44px, 1fr)).

Behavior: a self-scheduling 1s timer counts down and updates the label, number and bar; at zero the number and bar turn green, the buttons enable. Try again (or Export CSV) shows a sheen across the button (no spinner) for about 1.1s, then crossfades the alert (opacity, 8px translate) into a success version: a green disc whose check draws itself (pathLength=1), "Export ready", a file row (name, rows, size) and a Download button. In production read Retry-After from the 429 response to set the cooldown and never let the user spam the button.

Accessibility: the alert card is aria-live="polite", disabled buttons keep their label, focus-visible rings, prefers-reduced-motion stops the needle. Phone layout below 760px: sidebar and gauge hide, the countdown block goes full width, the table drops the ETA column.${ENDP} Components: Sidebar, TopBar, RateLimitAlert, Countdown, ExportReady, ShipmentTable.`,
  });

  // ---------------------------------------------------------------- 11. Coming soon
  ML.add({
    id: 'app-states-coming-soon',
    cat: 'app-states',
    title: 'Coming soon',
    sub: 'Feature preview, notify me, on the list',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span>Halden</div>
    <nav class="nav" aria-label="Main">
      <button class="it" type="button">${I(P.dash)}<span>Overview</span></button>
      <button class="it" type="button">${I(P.folder)}<span>Projects</span><em>12</em></button>
      <button class="it" type="button">${I(P.receipt)}<span>Invoices</span></button>
      <button class="it on" type="button" aria-current="page">${I(P.bolt)}<span>Automations</span><em>Soon</em></button>
      <button class="it" type="button">${I(P.chart)}<span>Reports</span></button>
    </nav>
    <div class="foot"><span class="av">MR</span><p><b>Maya Reyes</b><small>maya@halden.co</small></p></div>
  </aside>
  <div class="main">
    <header class="top">
      <p class="crumb">Halden<span>/</span><b>Automations</b></p>
      <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
      <span class="av">MR</span>
    </header>
    <main class="page">
      <div class="cs">
        <section class="lft">
          <span class="pill">${I(P.clock, 13)}Planned for November 2026</span>
          <h1>Automations are coming to Halden</h1>
          <p class="txt">Build rules that remind clients, assign tasks and chase overdue invoices while you work on something else.</p>
          <ul class="ft">
            <li><span class="ti">${I(P.bolt, 18)}</span><p><b>Triggers</b><small>Overdue invoice, new project, status change</small></p></li>
            <li><span class="ti">${I(P.mail, 18)}</span><p><b>Actions</b><small>Send email, assign owner, create task</small></p></li>
            <li><span class="ti">${I(P.clock, 18)}</span><p><b>Run history</b><small>See every run and fix what failed</small></p></li>
          </ul>
          <div class="nf" data-s="ask">
            <form class="frm" novalidate>
              <label class="field"><span class="vh">Email</span>${I(P.mail, 17)}<input type="email" value="maya@halden.co" autocomplete="email" aria-label="Email"></label>
              <button class="cta go" type="submit"><span>Notify me</span></button>
            </form>
            <p class="fine ask">1,284 people are waiting. One email on launch day, nothing else.</p>
            <div class="done">
              <span class="okc">${CHK(22, 2.8)}</span>
              <p><b>You are on the list</b><small class="pos">You are number 1,285. We will email maya@halden.co the day it ships.</small></p>
              <button class="lk undo" type="button">Remove me</button>
            </div>
          </div>
        </section>
        <section class="card pv" aria-label="Preview of Automations">
          <span class="pill bt">Preview</span>
          <div class="nd n1"><span class="ni">${I(P.bolt, 18)}</span><p><small>When</small><b>Invoice is overdue</b></p></div>
          <span class="wr"><i></i></span>
          <div class="nd n2"><span class="ni">${I(P.clock, 18)}</span><p><small>Wait</small><b>3 days</b></p></div>
          <span class="wr w2"><i></i></span>
          <div class="nd n3"><span class="ni">${I(P.mail, 18)}</span><p><small>Then</small><b>Send reminder email</b></p></div>
          <span class="wr w3"><i></i></span>
          <div class="nd n4"><span class="ni">${I(P.bell, 18)}</span><p><small>And</small><b>Notify the account owner</b></p></div>
        </section>
      </div>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}${SIDE}${TOP}
.d .app{display:grid;grid-template-columns:220px minmax(0,1fr)}
.d .page{justify-content:center}
.d .cs{display:grid;flex:1;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:28px;min-height:0;width:100%;max-width:1080px;margin:0 auto}
.d .lft{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;gap:16px;min-width:0}
.d .lft h1{font-size:36px;line-height:1.1;letter-spacing:-.035em}
.d .lft .txt{max-width:440px;font-size:14.5px}
.d .ft{display:flex;flex-direction:column;gap:12px;width:100%;max-width:440px;margin-top:4px;list-style:none}
.d .ft li{display:flex;align-items:center;gap:13px}
.d .ti{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ft p{display:flex;flex-direction:column;gap:1px}
.d .ft b{font-size:14px;font-weight:600}
.d .ft small{font-size:12.5px;color:var(--ml-muted)}
.d .nf{width:100%;max-width:460px;margin-top:6px}
.d .frm{display:flex;gap:10px}
.d .field{position:relative;display:flex;flex:1;align-items:center;gap:10px;min-width:0;height:46px;padding:0 13px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .25s ease,color .25s ease}
.d .field:focus-within{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .field.bad{box-shadow:inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1);color:#FF3B30}
.d .field input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:14.5px;color:var(--ml-ink)}
.d .vh{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%)}
.d .go{flex:none;height:46px;padding:0 20px;border-radius:12px;font-size:14px}
.d .fine{margin-top:10px;font-size:12.5px;color:var(--ml-muted)}
.d .done{display:none;align-items:center;gap:14px;padding:14px 16px;border-radius:14px;background:rgba(29,185,84,.08);box-shadow:inset 0 0 0 1px rgba(29,185,84,.2)}
.d .done .okc{flex:none;width:42px;height:42px;background:rgba(29,185,84,.16)}
.d .done p{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0}
.d .done b{font-size:14.5px;font-weight:650}
.d .done small{font-size:12.5px;line-height:1.4;color:var(--ml-ink-2)}
.d .undo{flex:none;font-size:12.5px}
.d .nf[data-s="sent"] .frm,.d .nf[data-s="sent"] .fine{display:none}
.d .nf[data-s="sent"] .done{display:flex;animation:st-in 520ms var(--ml-spring) both}
.d .nf[data-s="sent"] .done .okc path{stroke-dasharray:1;stroke-dashoffset:1;animation:st-draw 600ms var(--ml-ease) 200ms forwards}
.d .pv{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:0;padding:28px 24px;overflow:hidden;background:radial-gradient(90% 60% at 50% 0%,var(--ml-accent-soft),var(--ml-bg) 70%)}
.d .pv::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,68,51,.12) 1px,transparent 1.2px);background-size:20px 20px;-webkit-mask-image:linear-gradient(180deg,#000,transparent 80%);mask-image:linear-gradient(180deg,#000,transparent 80%)}
.d .bt{position:absolute;top:16px;right:16px;z-index:2}
.d .nd{position:relative;z-index:1;display:flex;align-items:center;gap:12px;width:min(300px,86%);padding:12px 14px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow);animation:cs-float 6s ease-in-out infinite}
.d .n2{animation-delay:-1.5s}.d .n3{animation-delay:-3s}.d .n4{animation-delay:-4.5s}
.d .ni{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:10px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .n1 .ni{background:var(--ml-grad);color:#fff}
.d .nd p{display:flex;flex-direction:column;gap:1px}
.d .nd small{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .nd b{font-size:14px;font-weight:600}
.d .wr{position:relative;z-index:1;display:block;width:2px;height:30px;background:repeating-linear-gradient(180deg,var(--ml-accent-line) 0 4px,transparent 4px 8px)}
.d .wr i{position:absolute;left:-3px;top:0;width:8px;height:8px;border-radius:50%;background:var(--ml-accent);animation:cs-run 2.4s var(--ml-ease) infinite}
.d .w2 i{animation-delay:.8s}.d .w3 i{animation-delay:1.6s}
@keyframes cs-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}
@keyframes cs-run{0%{transform:translateY(0);opacity:0}15%{opacity:1}70%{transform:translateY(24px);opacity:1}100%{transform:translateY(24px);opacity:0}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .top{padding:0 16px}
  .d .page{padding:18px 16px;justify-content:flex-start}
  .d .cs{grid-template-columns:minmax(0,1fr);flex:none;gap:22px}
  .d .lft h1{font-size:28px}
  .d .frm{flex-direction:column}
  .d .field{flex:none}
  .d .go{width:100%}
  .d .pv{min-height:420px}
}
@media (prefers-reduced-motion: reduce){.d .nd,.d .wr i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const nf = $('.nf');
      const frm = $('.frm');
      const input = $('input');
      const go = $('.go');
      let busy = false;
      let n = 1284;
      const fmt = (v) => v.toLocaleString('en-US');
      frm.addEventListener('submit', async (e) => {
        e.preventDefault();
        if (busy) return;
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
        input.closest('.field').classList.toggle('bad', !ok);
        input.setAttribute('aria-invalid', String(!ok));
        if (!ok) return;
        busy = true;
        go.classList.add('busy');
        go.querySelector('span').textContent = 'Adding you';
        await wait(900);
        n += 1;
        $('.pos').textContent = `You are number ${fmt(n)}. We will email ${input.value.trim()} the day it ships.`;
        nf.dataset.s = 'sent';
        go.classList.remove('busy');
        go.querySelector('span').textContent = 'Notify me';
        busy = false;
      });
      input.addEventListener('input', () => input.closest('.field').classList.remove('bad'));
      $('.undo').addEventListener('click', () => {
        n -= 1;
        nf.dataset.s = 'ask';
      });

      // Autoplay: press Notify me, hold on "You are on the list", then Remove me puts the form back.
      cur.style.transform = 'translate(560px,640px)';
      (async () => {
        await wait(2800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (nf.dataset.s !== 'ask') nf.dataset.s = 'ask';
          if (!(await tap(go, 0.5, 0.55))) continue;
          await wait(4600);
          if (!idle()) continue;
          if (!(await tap($('.undo'), 0.5, 0.55))) continue;
          await wait(2200);
        }
      })();
    },
    prompt: `Build a "coming soon" page for a feature that is not released yet, inside the normal app shell (220px sidebar where the nav item shows a small "Soon" chip, 62px top bar). The page is a two-column composition: copy and signup on the left, a live preview on the right.

Left: an accent "Planned for November 2026" pill, an h1 "Automations are coming to Halden" (36px, tight tracking), one sentence of benefit, three feature rows (38px accent-soft icon tile, bold title, muted caption: Triggers, Actions, Run history) and a notify form: an email field (46px, leading icon) with a primary "Notify me" button, and a muted line "1,284 people are waiting. One email on launch day, nothing else."

Right: a card with a soft radial accent wash and a faint dot grid, a small "Preview" pill and a vertical node flow that shows what the feature will look like: four node cards (icon tile, micro-label When/Wait/Then/And, a title) connected by dashed 2px wires; each node floats 5px on a staggered 6s loop and a small accent dot travels down each wire in turn (transform translateY, 2.4s).

Behavior: submitting validates the email (inline red ring on failure), shows a sheen across the button (no spinner) for about 0.9s, then swaps the form for a green confirmation row: a check that draws itself (pathLength=1), "You are on the list", the position (number 1,285) and the address, with a quiet "Remove me" link that restores the form. Store the signup server-side and make it idempotent.

Accessibility: the email input has an aria-label, errors set aria-invalid, focus-visible rings, prefers-reduced-motion stops the float and the travelling dots. Phone layout below 760px: sidebar hides, columns stack, the form stacks.${ENDP} Components: Sidebar, TopBar, FeatureCopy, NotifyForm, WaitlistConfirmation, FlowPreview.`,
  });

  // ---------------------------------------------------------------- 12. Skeleton resolving into content
  ML.add({
    id: 'app-states-skeleton',
    cat: 'app-states',
    title: 'Skeleton into content',
    sub: 'Shimmer resolves block by block',
    html: `
<div class="app" data-s="load">
  <header class="top">
    <div class="brand"><span class="mark">${I(P.shield, 16)}</span>Brightline Dental</div>
    <nav class="tabs" aria-label="Main"><button class="tab on" type="button" aria-current="page">Today</button><button class="tab" type="button">Patients</button><button class="tab" type="button">Billing</button></nav>
    <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
    <span class="av">HK</span>
  </header>
  <main class="page">
    <div class="head">
      <div><h1>Today</h1><p class="sub">Wednesday, 14 October - Brightline Dental</p></div>
      <div class="hr"><span class="upd">Loading...</span><button class="ghost rf" type="button">${I(P.refresh, 16)}<span>Refresh</span></button></div>
    </div>
    <div class="kp"></div>
    <section class="card tbl">
      <div class="th"><span>Patient</span><span class="c2">Treatment</span><span>Time</span><span class="c4">Dentist</span><span>Status</span></div>
      <div class="rows"></div>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:flex;flex-direction:column}
.d .top{display:flex;flex:none;align-items:center;gap:16px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tabs{display:flex;gap:4px;margin:0 auto 0 18px;height:100%}
.d .tab{position:relative;height:100%;padding:0 14px;border:0;background:none;font-size:14px;font-weight:500;color:var(--ml-muted);cursor:pointer}
.d .tab.on{color:var(--ml-ink);font-weight:600}
.d .tab.on::after{content:"";position:absolute;left:12px;right:12px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .page{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:24px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .head{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}
.d .hr{display:flex;align-items:center;gap:12px}
.d .upd{font-size:12.5px;color:var(--ml-muted)}
.d .kp{display:grid;flex:none;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d .blk{display:grid}
.d .blk > *{grid-area:1/1}
.d .real,.d .sk{transition:opacity .35s ease,transform .6s var(--ml-spring)}
.d .app[data-s="load"] .real{opacity:0;transform:translateY(6px)}
.d .app[data-s="load"] .sk{opacity:1}
.d .app[data-s="ready"] .real{opacity:1;transform:none;transition-delay:calc(var(--i) * 65ms + 80ms)}
.d .app[data-s="ready"] .sk{opacity:0;pointer-events:none;transition-delay:calc(var(--i) * 65ms)}
.d .k .real{display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:16px}
.d .k .v{font-size:28px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .k .sk{display:flex;flex-direction:column;gap:12px;padding:18px 16px}
.d .bar{display:block;height:11px;border-radius:6px}
.d .tbl{display:flex;flex:1;flex-direction:column;min-height:0;overflow:hidden}
.d .th{display:grid;flex:none;grid-template-columns:minmax(0,1.5fr) minmax(0,1.4fr) 80px minmax(0,1fr) 110px;gap:14px;align-items:center;height:44px;padding:0 22px;background:var(--ml-surface);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .rows{display:grid;flex:1;grid-auto-rows:minmax(52px,1fr);min-height:0}
.d .row{border-bottom:1px solid var(--ml-line)}
.d .row:last-child{border-bottom:0}
.d .real,.d .sk{align-items:center}
.d .row .real,.d .row .sk{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1.4fr) 80px minmax(0,1fr) 110px;gap:14px;padding:0 22px}
.d .pt{display:flex;align-items:center;gap:12px;min-width:0}
.d .pt b{overflow:hidden;font-size:14px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .row .real > span{overflow:hidden;font-size:13.5px;color:var(--ml-ink-2);white-space:nowrap;text-overflow:ellipsis}
.d .tmv{font:600 12.5px/1 var(--ml-mono);font-variant-numeric:tabular-nums}
.d .circ{display:block;flex:none;width:34px;height:34px;border-radius:50%}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .tabs{display:none}
  .d .brand{margin-right:auto}
  .d .page{padding:18px 16px}
  .d .head{align-items:flex-start}
  .d .upd{display:none}
  .d .kp{grid-template-columns:minmax(0,1fr)}
  .d .kp .blk:nth-child(n+3){display:none}
  .d .th,.d .row .real,.d .row .sk{grid-template-columns:minmax(0,1fr) 70px 100px;padding:0 14px}
  .d .c2,.d .c4,.d .row .real > span:nth-child(2),.d .row .real > span:nth-child(4),.d .row .sk > .b2,.d .row .sk > .b4{display:none}
}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .shim{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx, fy) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx = 0.5, fy = 0.6) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(900);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };

      const K =[['Appointments today', '28', '+4 vs last Wednesday', 'ok'], ['Checked in', '17', 'of 28 booked', ''], ['Outstanding balance', '$3,420', '9 invoices open', 'warn']];
      const R = [
        ['AT', 'Aiko Tan', 'Cleaning and check-up', '08:30', 'Dr. Okafor', 'Checked in', 'ok'],
        ['LO', 'Luis Ortega', 'Filling, lower left', '09:15', 'Dr. Nair', 'In chair', ''],
        ['HK', 'Hana Kim', 'Whitening session', '10:00', 'Dr. Okafor', 'Waiting', 'warn'],
        ['TL', 'Tomas Lindqvist', 'Root canal, stage 2', '10:45', 'Dr. Nair', 'Confirmed', 'mut'],
        ['EP', 'Elena Petrova', 'Crown fitting', '11:30', 'Dr. Okafor', 'Confirmed', 'mut'],
        ['KM', 'Kwame Mensah', 'Check-up', '13:00', 'Dr. Nair', 'Confirmed', 'mut'],
        ['IC', 'Isabel Cruz', 'Braces adjustment', '13:45', 'Dr. Okafor', 'Unconfirmed', 'warn'],
      ];
      const w = [62, 78, 54, 70, 66, 82, 58];
      $('.kp').innerHTML = K.map(
        (k, i) =>
          `<div class="blk card k" style="--i:${i}"><div class="real"><p class="lbl">${k[0]}</p><p class="v">${k[1]}</p><span class="pill ${k[3]}">${k[2]}</span></div><div class="sk" aria-hidden="true"><i class="bar shim" style="width:${50 + i * 8}%"></i><i class="bar shim" style="width:44%;height:24px"></i><i class="bar shim" style="width:64%"></i></div></div>`,
      ).join('');
      $('.rows').innerHTML = R.map(
        (r, i) =>
          `<div class="blk row" style="--i:${i + 3}"><div class="real"><span class="pt"><span class="av s">${r[0]}</span><b>${r[1]}</b></span><span>${r[2]}</span><span class="tmv">${r[3]}</span><span>${r[4]}</span><span><i class="pill ${r[6]}" style="font-style:normal">${r[5]}</i></span></div><div class="sk" aria-hidden="true"><span class="pt"><i class="circ shim"></i><i class="bar shim" style="width:${w[i]}%"></i></span><i class="bar shim b2" style="width:${w[(i + 3) % 7]}%"></i><i class="bar shim" style="width:70%"></i><i class="bar shim b4" style="width:${w[(i + 5) % 7] - 12}%"></i><i class="bar shim" style="width:80%;height:22px;border-radius:999px"></i></div></div>`,
      ).join('');

      const app = $('.app');
      const rf = $('.rf');
      const upd = $('.upd');
      let busy = false;
      const resolve = () => {
        app.dataset.s = 'ready';
        upd.textContent = 'Updated just now';
        rf.querySelector('span').textContent = 'Refresh';
      };
      const refresh = async () => {
        if (busy) return;
        busy = true;
        app.dataset.s = 'load';
        upd.textContent = 'Loading...';
        rf.querySelector('span').textContent = 'Refreshing';
        await wait(2400);
        resolve();
        busy = false;
      };
      rf.addEventListener('click', refresh);

      // Autoplay: the page opens on the shimmering skeleton and resolves; Refresh brings the skeleton back.
      cur.style.transform = 'translate(1200px,120px)';
      (async () => {
        await wait(2800);
        resolve();
        while (root.isConnected) {
          await wait(4800);
          if (!idle() || busy) continue;
          if (!(await tap(rf, 0.5, 0.55))) continue;
          await wait(3200);
        }
      })();
    },
    prompt: `Build a skeleton loading screen that resolves into real content, for a clinic dashboard with a top-nav layout (64px header with logo, tabs with a 2px underline, bell, avatar). The skeleton must mirror the final layout exactly so nothing jumps: page title and date line (real text, always visible), a row of three KPI cards and a table card that fills the remaining height (header row plus seven rows, grid-auto-rows: minmax(52px, 1fr)).

Each KPI card and each table row is a two-layer block (a grid with both layers in grid-area 1/1): the real content and a skeleton layer. The skeleton layer uses rounded bars sized like the text they replace (a 34px circle for the avatar, bars of varied widths, a pill-shaped bar for the status) filled with a moving highlight: linear-gradient(100deg, bar-2 30%, near-white 50%, bar-2 70%) at 220% size, animating background-position from 120% to -120% over 1.3s, linear and infinite (no spinners anywhere).

Resolve: set a data attribute from "load" to "ready". The real layer fades in (opacity 0 to 1, translateY 6px to 0, 600ms spring) and the skeleton layer fades out, both staggered 65ms per block in reading order (KPIs first, then rows), so content lands one block at a time. A "Refresh" button flips back to "load", changes the label to "Refreshing" and the status text to "Loading...", then resolves again after the data returns. Never show the skeleton for less than about 400ms to avoid flashing.

Accessibility: the skeleton layer is aria-hidden, the region sets aria-busy="true" while loading, focus-visible rings, prefers-reduced-motion keeps the fade but stops the shimmer. Phone layout below 760px: tabs hide, KPIs show two cards in one column, the table keeps patient, time and status only.${ENDP} Components: TopNav, KpiCard, PatientRow, SkeletonLayer, RefreshButton.`,
  });

})();
