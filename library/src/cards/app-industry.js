(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    bed: '<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>',
    bath: '<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/>',
    area: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    dash: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    key: '<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    box: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
    bank: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    upR: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    dnL: '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>',
    trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    dumb: '<path d="M6.5 6.5v11"/><path d="M17.5 6.5v11"/><path d="M3 9v6"/><path d="M21 9v6"/><path d="M6.5 12h11"/>',
    steth: '<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
    grad: '<path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
    brief: '<rect width="20" height="14" x="2" y="7" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
    bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    thermo: '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    speaker: '<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="14" r="4"/><line x1="12" x2="12.01" y1="6" y2="6"/>',
    blinds: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 8h18"/><path d="M3 13h18"/><path d="M3 18h18"/>',
    power: '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    coffee: '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    dollar: '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    door: '<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/>',
    pulse: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    list: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  };
  const I = (d, s = 18) =>
    `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  // The demo cursor every screen card uses for its autoplay (Lucide mouse-pointer-2, filled).
  const CURSOR = `<div class="cur off" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4.04 4.6a.5.5 0 0 1 .56-.56l15.5 6.1a.5.5 0 0 1-.05.94l-6.3 1.9a1 1 0 0 0-.66.66l-1.9 6.3a.5.5 0 0 1-.94.05Z"/></svg></div>`;
  const CURSOR_CSS = `
.d .cur{position:absolute;left:0;top:0;z-index:50;pointer-events:none;transition:transform 780ms var(--ml-ease),opacity .25s ease}
.d .cur svg{display:block;filter:drop-shadow(0 2px 3px rgba(35,15,10,.28));transition:transform 90ms ease-out}
.d .cur path{fill:var(--ml-ink);stroke:#fff;stroke-width:1.6;stroke-linejoin:round}
.d .cur.press svg{transform:scale(.8)}
.d .cur.off{opacity:0}`;
  // Shared styling used by every card below (strings only; each card still ships its own copy in the export).
  const K = `
.d button{font:inherit;color:inherit;border:0;background:none;padding:0;cursor:pointer}
.d .app{position:relative;height:100%;overflow:hidden}
.d h1{font-size:26px;line-height:1.1;font-weight:650;letter-spacing:-.03em}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .k{font-size:12px;font-weight:500;color:var(--ml-muted)}
.d .lbl{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .n{font-variant-numeric:tabular-nums}
.d .big{font-size:28px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .sc{overflow-y:auto;scrollbar-width:none;min-height:0}
.d .av{flex:none;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:650}
.d .av.b{background:var(--ml-accent-line)}
.d .av.c{background:var(--ml-bar);color:var(--ml-ink-2)}
.d .st{display:inline-flex;align-items:center;gap:5px;height:22px;padding:0 9px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:600;white-space:nowrap}
.d .st.g{background:rgba(29,185,84,.12);color:#12893C}
.d .st.o{background:rgba(255,159,10,.14);color:#B25E00}
.d .st.r{background:rgba(255,59,48,.1);color:#D70015}
.d .st.m{background:var(--ml-surface);color:var(--ml-muted)}
.d .dl{display:inline-flex;padding:3px 7px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:600;color:#12893C}
.d .dl.dn{background:rgba(255,59,48,.09);color:#D70015}
.d .cta,.d .ghost,.d .btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;white-space:nowrap;font-weight:600;transition:transform 90ms ease-out,background-color .25s ease,color .25s ease,box-shadow .25s ease}
.d .cta{height:38px;padding:0 15px;border-radius:11px;font-size:13.5px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d .ghost{height:38px;padding:0 14px;border-radius:11px;font-size:13.5px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2)}
.d .btn{height:30px;padding:0 12px;border-radius:9px;font-size:12.5px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .btn.done{background:rgba(29,185,84,.12);color:#12893C;box-shadow:inset 0 0 0 1px rgba(29,185,84,.3)}
.d .cta:active,.d .ghost:active,.d .btn:active,.d .press{transform:scale(.95)}
.d .cta:focus-visible,.d .ghost:focus-visible,.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .grow{display:grid;grid-template-rows:0fr;opacity:0;animation:ind-open 560ms var(--ml-ease) forwards}
.d .grow > *{min-height:0;overflow:hidden}
.d .shrink{display:grid;grid-template-rows:1fr;animation:ind-close 420ms var(--ml-ease) forwards}
.d .shrink > *{min-height:0;overflow:hidden}
.d .fresh{animation:ind-in 520ms var(--ml-spring) both}
.d .toast{position:absolute;right:24px;bottom:22px;z-index:40;display:flex;align-items:center;gap:10px;padding:11px 15px;border-radius:14px;background:var(--ml-ink);color:#fff;font-size:13px;font-weight:550;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translateY(12px);pointer-events:none;transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .toast.on{opacity:1;transform:none}
.d .toast i{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#1DB954}
.d .ping{position:relative;width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .ping::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:ind-ping 2.2s ease-out infinite}
.d .shim{background:linear-gradient(100deg,var(--ml-bar-2) 30%,#F7F9FD 50%,var(--ml-bar-2) 70%);background-size:220% 100%;animation:ind-sheen 1.3s linear infinite}
@keyframes ind-close{to{grid-template-rows:0fr;opacity:0}}
@keyframes ind-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes ind-open{to{grid-template-rows:1fr;opacity:1}}
@keyframes ind-ping{0%{opacity:.45;transform:scale(1)}80%,100%{opacity:0;transform:scale(3)}}
@keyframes ind-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes ind-pop{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.06);opacity:1}100%{transform:none}}
@keyframes ind-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .ping::after{animation:none}}`;


  ML.add({
    id: 'app-industry-realestate',
    cat: 'app-industry',
    title: 'Real estate listings',
    sub: 'A new lead books a showing',
    html: `
<div class="app">
  <header class="nav">
    <div class="brand"><span class="mark">${I(P.building, 17)}</span><b>Tidewater Realty</b></div>
    <nav class="tabs" aria-label="Main">
      <button class="tab on" type="button">Listings</button><button class="tab" type="button">Leads<em>18</em></button><button class="tab" type="button">Showings</button><button class="tab" type="button">Reports</button>
    </nav>
    <label class="search">${I(P.search, 16)}<input type="search" placeholder="Search address or client" aria-label="Search"></label>
    <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}</button>
    <span class="av">MR</span>
  </header>
  <main class="page sc">
    <div class="head">
      <div><h1>Listings</h1><p class="sub">Harbor District - 6 agents - updated 4 minutes ago</p></div>
      <div class="stats">
        <p><span class="k">Active</span><b class="n">42</b></p>
        <p><span class="k">New leads</span><b class="n" data-s="leads">18</b></p>
        <p><span class="k">Showings</span><b class="n" data-s="shows">6</b></p>
      </div>
      <button class="cta" type="button">${I(P.plus, 16)}Add listing</button>
    </div>
    <div class="body">
      <section class="tiles" aria-label="Listings"></section>
      <aside class="side">
        <section class="card pan">
          <div class="ph2"><p class="t">Leads</p><span class="st">${I(P.users, 13)}18 this week</span></div>
          <div class="list" data-l="leads"></div>
        </section>
        <section class="card pan">
          <div class="ph2"><p class="t">Showings</p><span class="st m">Today and weekend</span></div>
          <div class="list" data-l="shows"></div>
        </section>
      </aside>
    </div>
  </main>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:flex;flex-direction:column}
.d .nav{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;font-size:15px;letter-spacing:-.02em}
.d .brand b{font-weight:650}
.d .mark{display:grid;place-items:center;width:32px;height:32px;border-radius:10px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .tabs{display:flex;align-self:stretch;gap:4px;margin-left:22px}
.d .tab{position:relative;display:flex;align-items:center;gap:7px;padding:0 12px;font-size:14px;font-weight:550;color:var(--ml-muted);transition:color .2s ease}
.d .tab:hover{color:var(--ml-ink)}
.d .tab.on{color:var(--ml-ink)}
.d .tab.on::after{content:"";position:absolute;left:10px;right:10px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .tab em{padding:3px 6px;border-radius:999px;background:var(--ml-accent-soft);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-accent-ink)}
.d .search{display:flex;align-items:center;gap:8px;width:250px;height:38px;margin-left:auto;padding:0 12px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .search:focus-within{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font:inherit;font-size:13.5px;color:var(--ml-ink)}
.d .ic{display:grid;place-items:center;width:38px;height:38px;border-radius:11px;color:var(--ml-ink-2)}
.d .ic:hover{background:var(--ml-surface)}
.d .page{display:flex;flex:1;flex-direction:column;padding:24px 28px 28px}
.d .head{display:flex;flex:none;align-items:center;gap:22px}
.d .head > div:first-child{flex:1;min-width:0}
.d .sub{margin-top:5px;font-size:13.5px;color:var(--ml-muted)}
.d .stats{display:flex;gap:10px}
.d .stats p{display:flex;flex-direction:column;gap:4px;min-width:92px;padding:10px 14px;border-radius:13px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8)}
.d .stats b{font-size:20px;line-height:1;font-weight:650;letter-spacing:-.02em}
.d .body{display:grid;flex:1 0 auto;grid-template-columns:minmax(0,1.75fr) minmax(0,1fr);gap:18px;margin-top:20px}
.d .tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(190px,1fr));grid-auto-rows:minmax(max-content,1fr);gap:14px}
.d .tile{display:flex;flex-direction:column;overflow:hidden;transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow .3s ease}
.d .tile:hover{transform:translateY(-3px);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg)}
.d .ph{position:relative;flex:1;min-height:132px;background:linear-gradient(180deg,var(--sa),#F4F9FF)}
.d .ph > svg{position:absolute;inset:0;width:100%;height:100%}
.d .ph .st{position:absolute;left:10px;top:10px;background:rgba(255,255,255,.94);box-shadow:0 1px 3px rgba(35,15,10,.1)}
.d .ph .st.m{color:var(--ml-ink-2)}
.d .hrt{position:absolute;right:10px;top:10px;display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.94);color:var(--ml-muted);box-shadow:0 1px 3px rgba(35,15,10,.1)}
.d .ti{flex:none;padding:12px 14px 14px}
.d .pr{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .ad{margin-top:2px;font-size:13px;color:var(--ml-ink-2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .sp{display:flex;gap:11px;margin-top:9px;font-size:12px;color:var(--ml-muted)}
.d .sp span{display:inline-flex;align-items:center;gap:4px;white-space:nowrap}
.d .side{display:flex;flex-direction:column;gap:14px}
.d .pan{display:flex;flex:1 0 auto;flex-direction:column;padding:16px 16px 6px}
.d .pan .list{display:flex;flex:1;flex-direction:column;justify-content:flex-start}
.d .ph2{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .row{display:flex;align-items:center;gap:11px;padding:11px 0;border-bottom:1px solid var(--ml-line)}
.d .list > :last-child .row{border-bottom:0}
.d .row > div{flex:1;min-width:0}
.d .row b{display:block;font-size:13.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .row small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .tm{flex:none;width:62px;font:600 11.5px/1.3 var(--ml-mono);color:var(--ml-accent-ink)}
.d .tm small{font:500 11px/1.3 var(--ml-mono);color:var(--ml-muted)}
@container scr (max-width: 760px){
  .d .tabs,.d .search,.d .stats,.d .sub{display:none}
  .d .nav{padding:0 16px}
  .d .brand{margin-right:auto}
  .d .page{padding:18px 16px}
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .head{gap:12px}
  .d .cta{padding:0 12px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const L = { leads: $('[data-l=leads]'), shows: $('[data-l=shows]') };
      const ic = {
        bed: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
        bath: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="2" x2="22" y1="12" y2="12"/></svg>',
        area: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
        heart: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
      };
      const homes = [
        ['14 Harbor Lane', '$1,285,000', 4, 3, '2,640', 'Active', 'g', '#FFF0ED'],
        ['88 Pelican Court', '$749,000', 3, 2, '1,820', 'Active', 'g', '#FFEFEA'],
        ['Unit 5B, Dockside Lofts', '$3,200/mo', 2, 2, '1,150', 'For rent', 'm', '#BBD7FF'],
        ['27 Marlin Way', '$968,000', 4, 3, '2,210', 'Open house Sun', '', '#E3EFFF'],
        ['9 Saltmarsh Road', '$615,000', 3, 2, '1,540', 'Pending', 'o', '#D2E4FF'],
        ['52 Lighthouse Ave', '$1,740,000', 5, 4, '3,480', 'Active', 'g', '#C6DDFF'],
        ['31 Driftwood Lane', '$1,095,000', 4, 3, '2,780', 'New', '', '#FFF0ED'],
        ['Unit 12A, Marina View', '$2,850/mo', 2, 2, '1,090', 'For rent', 'm', '#C9DEFF'],
      ];
      const house = (v) => {
        const w = [64, 52, 70, 58, 48, 76, 60, 68][v], h = [34, 30, 40, 32, 28, 44, 36, 38][v], x = 80 - w / 2, y = 84 - h;
        const roof = v % 2
          ? `<polygon points="${x - 7},${y} 80,${y - 24} ${x + w + 7},${y}" fill="#FF4433"/>`
          : `<polygon points="${x - 7},${y} ${x + 12},${y - 19} ${x + w - 12},${y - 19} ${x + w + 7},${y}" fill="#B3150F"/>`;
        return `<svg viewBox="0 0 160 100" preserveAspectRatio="xMidYMax slice" aria-hidden="true"><circle cx="${26 + (v % 6) * 22}" cy="26" r="9" fill="#fff" opacity=".85"/><path d="M0 84 Q40 68 80 80 T160 74 V100 H0Z" fill="#DCE8F7"/><rect y="84" width="160" height="16" fill="#CBDDF4"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="#fff"/><rect x="${x + w * 0.62}" y="${y}" width="${w * 0.38}" height="${h}" fill="#E6EEF9"/>${roof}<rect x="${x + 8}" y="${y + 8}" width="11" height="10" rx="1.5" fill="#FFD0CA"/><rect x="${x + w - 20}" y="${y + 8}" width="11" height="10" rx="1.5" fill="#FFD0CA"/><rect x="${80 - 5}" y="${y + h - 17}" width="10" height="17" rx="1.5" fill="#B3150F"/><circle cx="${x - 12}" cy="${80}" r="8" fill="#9EC2F2"/><rect x="${x - 13}" y="80" width="2.5" height="6" fill="#7FA9DE"/></svg>`;
      };
      $('.tiles').innerHTML = homes
        .map(
          (h, i) =>
            `<article class="card tile"><div class="ph" style="--sa:${h[7]}">${house(i)}<span class="st ${h[6]}" data-b="${i}">${h[5]}</span><span class="hrt">${ic.heart}</span></div><div class="ti"><p class="pr n">${h[1]}</p><p class="ad">${h[0]}</p><p class="sp"><span>${ic.bed}${h[2]}</span><span>${ic.bath}${h[3]}</span><span>${ic.area}${h[4]} sqft</span></p></div></article>`,
        )
        .join('');
      const leadRow = (ini, name, what, pill, cls, extra = '') =>
        `<div><div class="row"><span class="av ${cls}">${ini}</span><div><b>${name}</b><small>${what}</small></div>${extra}<span class="st ${pill[1]}">${pill[0]}</span></div></div>`;
      const showRow = (t, d, home, who, pill) =>
        `<div><div class="row"><p class="tm">${t}<br><small>${d}</small></p><div><b>${home}</b><small>${who}</small></div><span class="st ${pill[1]}">${pill[0]}</span></div></div>`;
      L.leads.innerHTML =
        leadRow('TL', 'Tomas Lindqvist', 'Pre-approved - 88 Pelican Court', ['Touring', 'g'], '') +
        leadRow('AT', 'Aiko Tan', 'Asking about 27 Marlin Way', ['Contacted', ''], 'b') +
        leadRow('LO', 'Luis Ortega', 'Browsing waterfront homes', ['Nurture', 'm'], 'c');
      L.shows.innerHTML =
        showRow('2:30 PM', 'Today', '27 Marlin Way', 'Aiko Tan - Agent Maya', ['Confirmed', 'g']) +
        showRow('4:00 PM', 'Today', '88 Pelican Court', 'Daniel Okafor - Agent Sam', ['Confirmed', 'g']) +
        showRow('11:00 AM', 'Fri', '52 Lighthouse Ave', 'Elena Petrova - Agent Maya', ['Pending', 'o']);

      const roll = (el, to) => {
        const from = parseFloat(el.textContent) || 0;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 600);
          el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2600);
      };
      const drop = (el) => {
        el.classList.remove('grow');
        el.classList.add('shrink');
        setTimeout(() => el.remove(), 450);
      };
      const bd = (i) => $(`[data-b="${i}"]`);
      let lead = null, booked = false;
      const addLead = () => {
        if (lead) return;
        lead = document.createElement('div');
        lead.className = 'grow';
        lead.innerHTML = `<div><div class="row"><span class="av b">PN</span><div><b>Priya Nair</b><small>Wants 14 Harbor Lane - just now</small></div><button class="btn" type="button" data-book>${'Book showing'}</button><span class="st"><i class="ping"></i>New</span></div></div>`;
        L.leads.prepend(lead);
        roll($('[data-s=leads]'), 19);
      };
      const book = () => {
        if (!lead || booked) return;
        booked = true;
        const b = lead.querySelector('[data-book]');
        b.classList.add('done');
        b.textContent = 'Booked';
        const p = lead.querySelector('.st');
        p.className = 'st g';
        p.textContent = 'Touring';
        const s = document.createElement('div');
        s.className = 'grow';
        s.innerHTML = showRow('10:30 AM', 'Sat', '14 Harbor Lane', 'Priya Nair - Agent Sam', ['New', '']);
        L.shows.prepend(s);
        const t = bd(0);
        t.className = 'st';
        t.textContent = 'Showing Sat';
        roll($('[data-s=shows]'), 7);
        say('Showing booked - Sat 10:30 AM');
      };
      const reset = () => {
        if (!lead) return;
        const s = L.shows.firstElementChild;
        drop(lead);
        if (booked) drop(s);
        lead = null;
        booked = false;
        const t = bd(0);
        t.className = 'st g';
        t.textContent = 'Active';
        roll($('[data-s=leads]'), 18);
        roll($('[data-s=shows]'), 6);
      };
      root.addEventListener('click', (e) => e.target.closest('[data-book]') && book());
      root.querySelectorAll('.tab').forEach((t) =>
        t.addEventListener('click', () => {
          root.querySelectorAll('.tab').forEach((o) => o.classList.toggle('on', o === t));
        }),
      );

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(700px,420px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(600);
          addLead();
          await wait(1400);
          if (idle() && lead) await tap(lead.querySelector('[data-book]'));
          await wait(4200);
          cur.classList.add('off');
          if (idle()) reset();
          await wait(2200);
        }
      })();
    },
    prompt: `Build a real estate agency dashboard (Tidewater Realty) as one full-viewport screen with top navigation, no sidebar.

Layout: a 64px top bar (logo tile + agency name, tabs Listings / Leads (count pill) / Showings / Reports with a 2px accent underline on the active one, a search field, bell, avatar). Page below: title "Listings" with a one-line subtitle, three small stat blocks (Active, New leads, Showings) and a primary "Add listing" button. Body is a two-column grid, minmax(0,1.75fr) and minmax(0,1fr). Left: a responsive grid (repeat(auto-fill, minmax(190px, 1fr)), 14px gap) of listing cards, each with a 112px property image drawn with CSS gradients and inline SVG (sky gradient, sun, soft hills, a simple house shape with a roof in your accent color), a status pill over the image (Active, Pending, For rent, Open house Sun), a heart button, then price (17px, 650), address and a row of bed / bath / sqft icons. Right: two stacked cards, Leads (avatar, name, interest line, stage pill) and Showings (mono time + day, address, client and agent, status pill).

Motion: a living screen. A new lead slides in at the top of Leads (grid-template-rows 0fr to 1fr plus opacity, 560ms, the rest shifts with it) with a pinging dot and the New leads number counting up. Its "Book showing" button then becomes a green "Booked" state, the lead pill turns Touring, a showing row grows in at the top of Showings, the matching listing badge changes to "Showing Sat" and a toast confirms. Cards lift 3px on hover with a critically damped spring (587ms). Press feedback is scale(.95) at 90ms.

Accessibility: tabs and buttons are real buttons with visible focus rings, status never relies on color alone (always a text label), prefers-reduced-motion removes the ping and slide. Phone layout under 760px: hide tabs, search and stat blocks, listings two per row, side cards stack below.

Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, ListingGrid, ListingCard, LeadsPanel, ShowingsPanel, Toast). Use your brand's accent color.`,
  });

  ML.add({
    id: 'app-industry-restaurant',
    cat: 'app-industry',
    title: 'Restaurant POS overview',
    sub: 'An order moves to Ready, the table lights',
    html: `
<div class="app">
  <aside class="rail" aria-label="Main">
    <span class="mark">${I(P.coffee, 18)}</span>
    <button class="ri on" type="button" aria-label="Floor">${I(P.dash, 20)}</button>
    <button class="ri" type="button" aria-label="Orders">${I(P.list, 20)}</button>
    <button class="ri" type="button" aria-label="Menu">${I(P.utensils, 20)}</button>
    <button class="ri" type="button" aria-label="Staff">${I(P.users, 20)}</button>
    <button class="ri" type="button" aria-label="Reports">${I(P.chart, 20)}</button>
    <button class="ri bot" type="button" aria-label="Settings">${I(P.gear, 20)}</button>
    <span class="av">SW</span>
  </aside>
  <div class="main">
    <header class="head">
      <div><h1>Corvid Coffee</h1><p class="sub"><span class="live"><i class="ping"></i>Live</span>Harbor Street - Service until 9 PM - Shift lead Sam</p></div>
      <div class="stats">
        <p><span class="k">Open orders</span><b class="n" data-s="open">5</b></p>
        <p><span class="k">Revenue today</span><b class="n" data-s="rev">$2,184</b></p>
        <p><span class="k">Avg ticket</span><b class="n">$17.60</b></p>
      </div>
    </header>
    <div class="body">
      <section class="board" aria-label="Orders"></section>
      <section class="card floor">
        <div class="fh"><p class="t">Floor</p><p class="lg"><i class="a"></i>Busy<i class="b"></i>Ready<i class="c"></i>Free</p></div>
        <div class="map" aria-label="Table map"></div>
      </section>
    </div>
  </div>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:grid;grid-template-columns:72px minmax(0,1fr)}
.d .rail{display:flex;flex-direction:column;align-items:center;gap:6px;min-height:0;padding:16px 0;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .mark{display:grid;place-items:center;width:38px;height:38px;margin-bottom:14px;border-radius:12px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .ri{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease}
.d .ri:hover{background:var(--ml-surface);color:var(--ml-ink)}
.d .ri.on{background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ri.bot{margin-top:auto}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0;padding:22px 26px 24px}
.d .head{display:flex;align-items:center;gap:20px}
.d .head > div:first-child{flex:1;min-width:0}
.d .sub{display:flex;align-items:center;gap:10px;margin-top:6px;font-size:13.5px;color:var(--ml-muted)}
.d .live{display:inline-flex;align-items:center;gap:7px;padding:3px 9px 3px 8px;border-radius:999px;background:var(--ml-accent-soft);font-size:12px;font-weight:600;color:var(--ml-accent-ink)}
.d .stats{display:flex;gap:10px}
.d .stats p{display:flex;flex-direction:column;gap:4px;min-width:104px;padding:10px 14px;border-radius:13px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8)}
.d .stats b{font-size:20px;line-height:1;font-weight:650;letter-spacing:-.02em}
.d .body{display:grid;flex:1;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);gap:16px;min-height:0;margin-top:18px}
.d .board{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;min-height:0}
.d .col{display:flex;flex-direction:column;min-height:0;padding:12px 10px 0;border-radius:16px;background:rgba(227,233,242,.45)}
.d .ch{display:flex;align-items:center;justify-content:space-between;padding:0 4px 10px}
.d .ch b{font-size:13px;font-weight:650}
.d .ch em{display:grid;place-items:center;min-width:22px;height:22px;padding:0 6px;border-radius:999px;background:var(--ml-bg);font:600 11.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-ink-2)}
.d .col.ready .ch em{background:rgba(29,185,84,.14);color:#12893C}
.d .cl{flex:1;min-height:0}
.d .gw{padding-bottom:10px}
.d .oc{padding:12px;border-radius:13px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 2px rgba(35,15,10,.05)}
.d .oh{display:flex;align-items:center;gap:6px}
.d .oh b{font-size:14px;font-weight:650;letter-spacing:-.01em}
.d .oh .st{height:20px;padding:0 7px;font-size:11px}
.d .oh time{margin-left:auto;font:600 11.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .oc ul{margin:8px 0 10px;padding:0;list-style:none;font-size:12.5px;line-height:1.5;color:var(--ml-ink-2)}
.d .oc .btn{width:100%;height:30px}
.d .col.ready .oc .btn{background:rgba(29,185,84,.12);color:#12893C;box-shadow:inset 0 0 0 1px rgba(29,185,84,.3)}
.d .floor{display:flex;flex-direction:column;min-width:0;min-height:0;padding:16px}
.d .fh{display:flex;align-items:center;justify-content:space-between}
.d .lg{display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--ml-muted)}
.d .lg i{width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .lg i.b{margin-left:6px;background:#1DB954}
.d .lg i.c{margin-left:6px;background:var(--ml-bar)}
.d .map{position:relative;flex:1;min-height:200px;margin-top:12px;border-radius:13px;background:linear-gradient(var(--ml-surface),var(--ml-surface)),repeating-linear-gradient(0deg,transparent 0 23px,var(--ml-line) 23px 24px);background-blend-mode:normal;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .tb{position:absolute;display:grid;place-content:center;gap:1px;text-align:center;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar),0 1px 2px rgba(35,15,10,.06);color:var(--ml-muted);transition:background-color .35s ease,box-shadow .35s ease,color .35s ease}
.d .tb b{font-size:14px;font-weight:650;color:var(--ml-ink)}
.d .tb small{font-size:10.5px;font-weight:600}
.d .tb::before,.d .tb::after{content:"";position:absolute;left:22%;right:22%;height:5px;border-radius:3px;background:var(--ml-bar)}
.d .tb::before{top:-9px}
.d .tb::after{bottom:-9px}
.d .tb.busy{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent);color:var(--ml-accent-ink)}
.d .tb.busy::before,.d .tb.busy::after{background:var(--ml-accent-line)}
.d .tb.ready{background:#1DB954;box-shadow:0 0 0 4px rgba(29,185,84,.18);color:#fff;animation:rs-beat 1.8s ease-in-out infinite}
.d .tb.ready b{color:#fff}
.d .tb.ready::before,.d .tb.ready::after{background:rgba(29,185,84,.45)}
.d .tb.rsv{box-shadow:inset 0 0 0 1.5px var(--ml-accent-line);background:repeating-linear-gradient(135deg,var(--ml-bg) 0 6px,var(--ml-surface) 6px 12px)}
.d .ctr{position:absolute;left:6%;right:6%;bottom:8px;display:flex;align-items:center;justify-content:center;height:26px;border-radius:9px;background:var(--ml-bar);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-ink-2)}
@keyframes rs-beat{50%{box-shadow:0 0 0 8px rgba(29,185,84,.08)}}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .rail,.d .stats,.d .sub .t2{display:none}
  .d .main{padding:18px 16px;overflow-y:auto}
  .d .body{grid-template-columns:minmax(0,1fr);flex:none}
  .d .board{grid-template-columns:minmax(0,1fr)}
  .d .map{min-height:340px}
}
@media (prefers-reduced-motion: reduce){.d .tb.ready{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const base = [
        { id: '2041', t: 'T4', it: ['2 Flat white', 'Almond croissant'], m: 6, s: 'new', tot: 14 },
        { id: '2042', t: 'Takeaway', it: ['Cold brew', 'Banana bread'], m: 4, s: 'new', tot: 11 },
        { id: '2039', t: 'T2', it: ['Pour over', 'Avocado toast'], m: 9, s: 'prep', tot: 19 },
        { id: '2040', t: 'T7', it: ['3 Cortado', 'Granola bowl'], m: 7, s: 'prep', tot: 22 },
        { id: '2038', t: 'T5', it: ['Oat latte', 'Ham croissant'], m: 12, s: 'ready', tot: 13 },
      ];
      let orders = base.map((o) => ({ ...o }));
      let rev = 2184;
      const cols = [['new', 'New', 'Start'], ['prep', 'Preparing', 'Mark ready'], ['ready', 'Ready', 'Served']];
      const tables = [
        ['T1', 8, 9, 64, 64, '50%'], ['T2', 40, 8, 70, 70, '14px'], ['T3', 72, 9, 64, 64, '50%'],
        ['T4', 8, 38, 112, 62, '14px'], ['T5', 62, 37, 64, 64, '50%'],
        ['T6', 8, 64, 70, 62, '14px'], ['T7', 42, 64, 70, 62, '14px'], ['T8', 74, 63, 64, 64, '50%'],
      ];
      $('.map').innerHTML =
        tables.map(([id, l, t, w, h, r]) => `<div class="tb" data-t="${id}" style="left:${l}%;top:${t}%;width:${w}px;height:${h}px;border-radius:${r}"><b>${id}</b><small></small></div>`).join('') +
        '<div class="ctr">Counter</div>';
      const board = $('.board');
      const render = (fresh) => {
        board.innerHTML = cols
          .map(([s, name, act]) => {
            const list = orders.filter((o) => o.s === s);
            const cards = list
              .map((o) => {
                const inner = `<div class="gw"><div class="oc"><div class="oh"><b>#${o.id}</b><span class="st ${o.t === 'Takeaway' ? 'm' : ''}">${o.t}</span><time>${o.m}m</time></div><ul>${o.it.map((x) => `<li>${x}</li>`).join('')}</ul><button class="btn" type="button" data-adv="${o.id}">${act}</button></div></div>`;
                return o.id === fresh ? `<div class="grow">${inner}</div>` : inner;
              })
              .join('');
            return `<div class="col ${s}"><div class="ch"><b>${name}</b><em>${list.length}</em></div><div class="cl sc">${cards}</div></div>`;
          })
          .join('');
        root.querySelectorAll('.tb').forEach((el) => {
          const o = orders.find((x) => x.t === el.dataset.t);
          const st = o ? (o.s === 'ready' ? 'ready' : 'busy') : el.dataset.t === 'T6' ? 'rsv' : 'free';
          el.className = `tb ${st}`;
          el.querySelector('small').textContent = { ready: 'Ready', busy: 'Busy', rsv: '7 PM', free: 'Free' }[st];
        });
      };
      const roll = (el, to, fmt) => {
        const from = parseFloat(el.dataset.v || '0');
        el.dataset.v = to;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 650);
          el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const money = (v) => '$' + Math.round(v).toLocaleString('en-US');
      const stats = () => {
        roll($('[data-s=open]'), orders.length, (v) => String(Math.round(v)));
        roll($('[data-s=rev]'), rev, money);
      };
      $('[data-s=open]').dataset.v = 5;
      $('[data-s=rev]').dataset.v = rev;
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      const adv = (id) => {
        const o = orders.find((x) => x.id === id);
        if (!o) return;
        if (o.s === 'new') o.s = 'prep';
        else if (o.s === 'prep') {
          o.s = 'ready';
          say(`${o.t} - order #${o.id} is ready to serve`);
        } else {
          orders = orders.filter((x) => x !== o);
          rev += o.tot;
        }
        render(o.s === 'prep' || o.s === 'ready' ? id : '');
        stats();
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-adv]');
        if (b) adv(b.dataset.adv);
      });
      const arrive = () => {
        orders.unshift({ id: '2043', t: 'T3', it: ['2 Matcha latte', 'Lemon loaf'], m: 0, s: 'new', tot: 26 });
        render('2043');
        stats();
        say('New order #2043 - Table 3');
      };
      const reset = () => {
        orders = base.map((o) => ({ ...o }));
        rev = 2184;
        render();
        stats();
      };
      render();

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      const btn = () => $('[data-adv="2043"]');
      cur.style.transform = 'translate(700px,440px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1400);
          arrive();
          await wait(1500);
          if (idle()) await tap(btn());
          await wait(1900);
          if (idle()) await tap(btn());
          await wait(2300);
          if (idle()) await tap(btn());
          cur.classList.add('off');
          await wait(3000);
        }
      })();
    },
    prompt: `Build a restaurant or cafe point-of-sale overview (Corvid Coffee) as one full-viewport screen with a slim icon rail on the left.

Layout: grid columns 72px and minmax(0,1fr). Rail (white, 1px hairline): logo tile, five 44px icon buttons (Floor, Orders, Menu, Staff, Reports) with the active one on an accent-soft tile, Settings and the staff avatar pinned to the bottom. Main: title with a pulsing "Live" pill and a shift line, three stat blocks (Open orders, Revenue today, Avg ticket), then a two-column body, minmax(0,1.7fr) and minmax(0,1fr). Left: a three-column order board (New, Preparing, Ready), each column a tinted rounded lane with a count pill; an order card shows the order number, a table or Takeaway pill, elapsed minutes in mono, the item list and one full-width action button (Start, Mark ready, Served). Right: a floor map card, a soft grid-paper plane with round, square and long tables (each with two small chair bars), a Counter strip at the bottom and a legend. Table state: free = white with a grey outline, busy = accent-soft with an accent outline, ready = solid green with a slow pulse, reserved = hatched.

Behavior and motion: a new order grows into the New lane (grid-template-rows 0fr to 1fr, 560ms) with a toast and its table turns busy. Pressing the action button moves the card to the next lane (it re-enters with opacity and translateY(8px)), counts update, Mark ready turns the table green and fires a toast, Served removes the card and counts revenue up (ease-out cubic, 650ms). Buttons scale to .95 on press at 90ms.

Accessibility: action buttons are real buttons with focus rings, table status is also written as text, prefers-reduced-motion removes the pulse. Phone layout under 760px: hide the rail and stat blocks, stack the lanes, then the map.

Plain HTML, CSS and JS, no libraries; React-friendly structure (Rail, OrderBoard, OrderLane, OrderCard, FloorMap, Table). Use your brand's accent color; green appears only for the ready state.`,
  });

  ML.add({
    id: 'app-industry-retail',
    cat: 'app-industry',
    title: 'Retail store dashboard',
    sub: 'A sale rings in, the hour bar grows',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.bag, 17)}</span><b>Fernway</b></div>
    <p class="lbl">Store</p>
    <nav class="nav" aria-label="Main">
      <button class="it on" type="button">${I(P.dash)}<span>Overview</span></button>
      <button class="it" type="button">${I(P.tag)}<span>Sales</span></button>
      <button class="it" type="button">${I(P.box)}<span>Inventory</span><em>5</em></button>
      <button class="it" type="button">${I(P.users)}<span>Customers</span></button>
      <button class="it" type="button">${I(P.chart)}<span>Reports</span></button>
    </nav>
    <div class="reg card"><p class="k">Main Street</p><b>2 registers open</b><p class="rg"><span class="ping"></span>Mia and Tomas on shift</p></div>
  </aside>
  <main class="page sc">
    <div class="head">
      <div><h1>Today at Fernway</h1><p class="sub">Thursday, 15 October - 3:20 PM - Main Street store</p></div>
      <button class="ghost" type="button">${I(P.cal, 16)}Today</button>
      <button class="cta" type="button">${I(P.plus, 16)}New sale</button>
    </div>
    <div class="kpis">
      <div class="card kpi"><p class="k">Sales today</p><p class="big" data-v="4812">$4,812</p><span class="dl">+9.4% vs last Thu</span></div>
      <div class="card kpi"><p class="k">Transactions</p><p class="big" data-v="186">186</p><span class="dl">+14</span></div>
      <div class="card kpi"><p class="k">Avg basket</p><p class="big">$25.87</p><span class="dl dn">-1.2%</span></div>
      <div class="card kpi"><p class="k">Items sold</p><p class="big">642</p><span class="dl">+6.8%</span></div>
    </div>
    <div class="row">
      <section class="card chart">
        <div class="ch"><div><p class="t">Sales by hour</p><p class="k">Today so far, dashed bars are the forecast</p></div><span class="st"><i class="ping"></i>Live</span></div>
        <div class="plot"><div class="bars"></div></div>
        <div class="xs"></div>
      </section>
      <section class="card stock">
        <div class="ch"><div><p class="t">Low stock</p><p class="k">Below reorder point</p></div><span class="st o">5 items</span></div>
        <div class="list"></div>
      </section>
    </div>
  </main>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:grid;grid-template-columns:220px minmax(0,1fr)}
.d .side{display:flex;flex-direction:column;min-height:0;padding:20px 14px 16px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;padding:0 6px 22px;font-size:16px;letter-spacing:-.02em}
.d .brand b{font-weight:650}
.d .mark{display:grid;place-items:center;width:32px;height:32px;border-radius:10px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .side .lbl{padding:0 10px 8px}
.d .nav{display:flex;flex-direction:column;gap:2px}
.d .it{display:flex;align-items:center;gap:11px;width:100%;height:40px;padding:0 10px;border-radius:11px;font-size:14px;font-weight:550;text-align:left;color:var(--ml-ink-2);transition:background-color .2s ease,color .2s ease}
.d .it svg{flex:none;color:var(--ml-muted)}
.d .it:hover{background:var(--ml-surface)}
.d .it.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-weight:600;box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .it.on svg{color:var(--ml-accent)}
.d .it em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .reg{margin-top:auto;padding:14px;box-shadow:none;background:var(--ml-surface)}
.d .reg b{display:block;margin-top:3px;font-size:14.5px;font-weight:650}
.d .rg{display:flex;align-items:center;gap:8px;margin-top:8px;font-size:12px;color:var(--ml-muted)}
.d .page{display:flex;flex-direction:column;padding:24px 28px 26px}
.d .head{display:flex;flex:none;align-items:center;gap:10px}
.d .head > div{flex:1;min-width:0}
.d .sub{margin-top:5px;font-size:13.5px;color:var(--ml-muted)}
.d .kpis{display:grid;flex:none;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:20px}
.d .kpi{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:16px}
.d .row{display:grid;flex:1 0 auto;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:14px;margin-top:14px}
.d .chart,.d .stock{display:flex;flex-direction:column;padding:18px;min-width:0}
.d .ch{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .ch .k{margin-top:3px}
.d .plot{position:relative;flex:1;min-height:276px;margin-top:16px;border-bottom:1px solid var(--ml-line);background:repeating-linear-gradient(0deg,var(--ml-line) 0 1px,transparent 1px 52px)}
.d .bars{position:absolute;inset:0;display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:8px;padding:0 4px}
.d .bc{position:relative;display:flex;align-items:flex-end}
.d .fill{width:100%;height:100%;border-radius:7px 7px 0 0;background:var(--ml-accent-line);transform:scaleY(var(--h));transform-origin:50% 100%;transition:transform 700ms var(--ml-spring)}
.d .bc.now .fill{background:var(--ml-grad)}
.d .bc.fc .fill{background:transparent;box-shadow:inset 0 0 0 1.5px var(--ml-accent-line);background-image:repeating-linear-gradient(135deg,transparent 0 5px,rgba(185,212,255,.35) 5px 10px)}
.d .tip{position:absolute;left:50%;bottom:0;padding:4px 7px;border-radius:8px;background:var(--ml-ink);color:#fff;font:600 11px/1 var(--ml-mono);transform:translate(-50%,var(--ty,0px));transition:transform 700ms var(--ml-spring);white-space:nowrap;margin-bottom:6px}
.d .xs{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:8px;padding:8px 4px 0;font:500 11px/1 var(--ml-mono);color:var(--ml-muted);text-align:center}
.d .list{display:flex;flex:1;flex-direction:column;justify-content:flex-start;margin-top:6px}
.d .sr{display:flex;align-items:center;gap:11px;padding:11px 0;border-bottom:1px solid var(--ml-line)}
.d .list > :last-child .sr{border-bottom:0}
.d .pt{flex:none;display:grid;place-items:center;width:40px;height:40px;border-radius:11px;background:var(--ml-accent-soft)}
.d .sr > div{flex:1;min-width:0}
.d .sr b{display:block;font-size:13.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .sr small{display:block;margin-top:1px;font:500 11px/1.3 var(--ml-mono);color:var(--ml-muted)}
.d .sb{display:block;height:5px;margin-top:7px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .sb i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--w));transform-origin:0 50%}
.d .sr .btn{width:76px}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .sub,.d .ghost{display:none}
  .d .page{padding:18px 16px}
  .d .kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .row{grid-template-columns:minmax(0,1fr)}
  .d .xs span:nth-child(even){visibility:hidden}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const hours = ['9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8'];
      const base = [180, 260, 340, 420, 560, 610, 498, 520, 560, 610, 440, 300];
      const NOW = 6, MAX = 720;
      let vals = base.slice();
      $('.xs').innerHTML = hours.map((h, i) => `<span>${h}${i === 0 || i === 3 ? (i ? 'p' : 'a') : ''}</span>`).join('');
      $('.bars').innerHTML = vals
        .map((v, i) => `<div class="bc ${i === NOW ? 'now' : i > NOW ? 'fc' : ''}"><span class="fill" style="--h:${v / MAX}"></span>${i === NOW ? '<span class="tip"></span>' : ''}</div>`)
        .join('');
      const tip = $('.tip');
      const paint = () => {
        const bc = root.querySelectorAll('.bc');
        bc.forEach((el, i) => el.firstElementChild.style.setProperty('--h', vals[i] / MAX));
        tip.textContent = '$' + Math.round(vals[NOW]);
        tip.style.setProperty('--ty', `-${($('.plot').clientHeight * vals[NOW]) / MAX}px`);
      };
      paint();
      const plot = $('.plot');
      new ResizeObserver(() => paint()).observe(plot);
      const pic = [
        '<path d="M7 9h10l-1.5 11h-7z" fill="#FFD0CA" stroke="#FF4433"/><path d="M12 9V4M12 6c-3-2-5 0-5 2M12 6c3-2 5 0 5 2" stroke="#FF4433"/>',
        '<rect x="7" y="9" width="10" height="11" rx="2" fill="#FFD0CA" stroke="#FF4433"/><path d="M12 3c-1.5 2 1.5 2.5 0 5" stroke="#FF4433"/>',
        '<path d="M6 8h12l1 12H5z" fill="#FFD0CA" stroke="#FF4433"/><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="#FF4433"/>',
        '<path d="M6 8h9v8a4 4 0 0 1-4 4h-1a4 4 0 0 1-4-4z" fill="#FFD0CA" stroke="#FF4433"/><path d="M15 10h2a2 2 0 0 1 0 5h-2" stroke="#FF4433"/>',
        '<path d="M5 19 13 7M19 19 11 7" stroke="#FF4433"/><circle cx="12" cy="6" r="2.5" fill="#FFD0CA" stroke="#FF4433"/>',
      ];
      const items = [
        ['Terracotta planter, 8 in', 'FM-2041', 3, 24], ['Soy candle, cedar', 'FM-1187', 5, 36],
        ['Linen tote bag', 'FM-3320', 6, 30], ['Ceramic mug, sand', 'FM-0918', 7, 40], ['Pruning shears', 'FM-5560', 2, 12],
      ];
      const rows = items
        .map(([n, sku, left, par], i) => `<div><div class="sr" data-i="${i}"><span class="pt"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${pic[i]}</svg></span><div><b>${n}</b><small>${sku} - ${left} left</small><span class="sb"><i style="--w:${left / par * 2}"></i></span></div><button class="btn" type="button" data-re="${i}">Reorder</button></div></div>`)
        .join('');
      $('.list').innerHTML = rows;
      const roll = (el, to, fmt) => {
        const from = parseFloat(el.dataset.v || '0');
        el.dataset.v = to;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 700);
          el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const sales = $('[data-v="4812"]'), tx = $('[data-v="186"]');
      const money = (v) => '$' + Math.round(v).toLocaleString('en-US');
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      let sold = false;
      const sale = () => {
        if (sold) return;
        sold = true;
        vals[NOW] += 64;
        paint();
        roll(sales, 4876, money);
        roll(tx, 187, (v) => String(Math.round(v)));
        say('Sale #2841 - $64.20 - Mia, Register 1');
      };
      const reorder = (i) => {
        const b = $(`[data-re="${i}"]`);
        if (!b || b.classList.contains('done')) return;
        b.classList.add('done');
        b.textContent = 'Ordered';
        say(`Reorder sent - ${items[i][0]}, 24 units`);
      };
      const reset = () => {
        sold = false;
        vals = base.slice();
        paint();
        roll(sales, 4812, money);
        roll(tx, 186, (v) => String(Math.round(v)));
        root.querySelectorAll('[data-re]').forEach((b) => {
          b.classList.remove('done');
          b.textContent = 'Reorder';
        });
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-re]');
        if (b) reorder(b.dataset.re);
        if (e.target.closest('.cta')) sale();
      });

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(760px,330px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1200);
          if (idle()) await tap($('.cta'));
          await wait(2600);
          if (idle()) await tap($('[data-re="0"]'));
          await wait(3200);
          cur.classList.add('off');
          await wait(800);
        }
      })();
    },
    prompt: `Build a retail store overview dashboard (Fernway Market) as one full-viewport screen with a left sidebar.

Layout: grid columns 220px and minmax(0,1fr). Sidebar (white, 1px hairline): logo tile and store name, a small uppercase "Store" label, nav items 40px tall (Overview active on an accent-soft pill with a 1px accent-line ring, Sales, Inventory with a count pill, Customers, Reports) and at the bottom a tinted register card ("2 registers open", a live dot, who is on shift). Content (scrolls on its own, padding 24px 28px): title "Today at Fernway" with a date line, a Today ghost button and a primary "New sale" button; a row of 4 KPI cards (Sales today with a green delta pill, Transactions, Avg basket with a red delta, Items sold); then a two-column row minmax(0,1.5fr) and minmax(0,1fr). Left: a "Sales by hour" bar chart card for 9 AM to 8 PM, 12 columns, past hours in a soft blue, the current hour in your accent gradient with a dark value tooltip, future hours as dashed forecast bars, faint gridlines, mono hour labels. Right: a "Low stock" list, each row a product tile (drawn silhouette: planter, candle, tote, mug, shears), name, SKU and "3 of 24" in mono, a thin stock bar and a Reorder button.

Motion: a sale rings in: the current bar grows (scaleY from the bottom, transform-origin 50% 100%, critically damped spring 587ms, never animate height), the tooltip rides up with it, Sales today and Transactions count up (ease-out cubic, 700ms) and a toast slides in. Reorder flips to a green Ordered state and a toast confirms. Buttons scale to .95 on press at 90ms.

Accessibility: real buttons with focus rings, the chart has a text value tooltip for the current hour, prefers-reduced-motion drops the live ping. Phone layout under 760px: hide the sidebar, KPIs two per row, chart and stock list stack, hide every second hour label.

Plain HTML, CSS and JS, no libraries; React-friendly structure (Sidebar, KpiCard, HourlyChart, LowStockList, Toast). Use your brand's accent color.`,
  });

  ML.add({
    id: 'app-industry-clinic',
    cat: 'app-industry',
    title: 'Clinic appointments',
    sub: 'A patient checks in, the queue updates',
    html: `
<div class="app">
  <div class="page sc">
    <header class="bar">
      <div class="brand"><span class="mark">${I(P.steth, 18)}</span><b>Juniper Health</b></div>
      <nav class="seg" aria-label="Sections"><span class="pill" aria-hidden="true"></span>
        <button class="sg on" type="button">Today</button><button class="sg" type="button">Patients</button><button class="sg" type="button">Messages</button><button class="sg" type="button">Billing</button>
      </nav>
      <span class="me"><span class="av">MR</span><p><b>Dr. Maya Reyes</b><small>Family medicine</small></p></span>
    </header>
    <div class="head">
      <div><h1>Today's schedule</h1><p class="sub">Thursday, 15 October - Clinic room A and B</p></div>
      <div class="stats">
        <p><span class="k">Appointments</span><b class="n">18</b></p>
        <p><span class="k">Checked in</span><b class="n" data-s="in">7</b></p>
        <p><span class="k">Avg wait</span><b class="n">9 min</b></p>
        <p><span class="k">No-shows</span><b class="n">1</b></p>
      </div>
    </div>
    <div class="body">
      <section class="card tl">
        <div class="docs"><span></span><p><i class="a"></i>Dr. Maya Reyes</p><p><i class="b"></i>Dr. Daniel Okafor</p></div>
        <div class="grid"></div>
      </section>
      <aside class="side">
        <section class="card pan"><div class="ph2"><p class="t">Waiting room</p><span class="st" data-s="wc">2 waiting</span></div><div class="list" data-l="wait"></div></section>
        <section class="card pan"><div class="ph2"><p class="t">Arriving soon</p><span class="st m">Next 60 min</span></div><div class="list" data-l="soon"></div></section>
      </aside>
    </div>
  </div>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .page{display:flex;flex-direction:column;height:100%;padding:18px 28px 24px}
.d .bar{display:flex;flex:none;align-items:center;gap:16px}
.d .brand{display:flex;align-items:center;gap:10px;font-size:16px;letter-spacing:-.02em}
.d .brand b{font-weight:650}
.d .mark{display:grid;place-items:center;width:34px;height:34px;border-radius:11px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .seg{position:relative;display:flex;margin:0 auto;padding:4px;border-radius:13px;background:rgba(227,233,242,.7)}
.d .pill{position:absolute;top:4px;bottom:4px;left:0;width:0;border-radius:10px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12);transition:transform var(--ml-spring-dur) var(--ml-spring),width var(--ml-spring-dur) var(--ml-spring)}
.d .sg{position:relative;z-index:1;height:34px;padding:0 16px;border-radius:10px;font-size:13.5px;font-weight:600;color:var(--ml-muted);transition:color .2s ease}
.d .sg.on{color:var(--ml-ink)}
.d .me{display:flex;align-items:center;gap:10px}
.d .me p{display:flex;flex-direction:column}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .head{display:flex;flex:none;align-items:flex-end;gap:20px;margin-top:22px}
.d .head > div:first-child{flex:1;min-width:0}
.d .sub{margin-top:5px;font-size:13.5px;color:var(--ml-muted)}
.d .stats{display:flex;gap:10px}
.d .stats p{display:flex;flex-direction:column;gap:4px;min-width:96px;padding:10px 14px;border-radius:13px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8)}
.d .stats b{font-size:20px;line-height:1;font-weight:650;letter-spacing:-.02em}
.d .body{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);flex:1 0 auto;gap:16px;margin-top:18px}
.d .tl{display:flex;flex-direction:column;padding:14px 16px 16px}
.d .docs{display:grid;grid-template-columns:54px minmax(0,1fr) minmax(0,1fr);gap:10px;padding-bottom:10px;font-size:12.5px;font-weight:600}
.d .docs p{display:flex;align-items:center;gap:7px}
.d .docs i{width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .docs i.b{background:var(--ml-accent-2)}
.d .grid{--hh:64px;position:relative;flex:1;min-height:448px;background:linear-gradient(0deg,var(--ml-line) 1px,transparent 1px) 0 100%/100% var(--hh)}
.d .hr{position:absolute;left:0;width:48px;margin-top:-6px;background:var(--ml-bg);font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .ap{position:absolute;display:flex;flex-direction:column;justify-content:center;gap:1px;padding:0 10px;border-radius:10px;overflow:hidden;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.05);transition:background-color .4s ease,box-shadow .4s ease,color .4s ease}
.d .ap.sm small{display:none}
.d .ap b{font-size:12.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .ap small{font-size:11.5px;color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .ap.done{background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .ap.live{background:var(--ml-grad);box-shadow:0 6px 14px rgba(255,68,51,.25);color:#fff}
.d .ap.live small{color:rgba(255,255,255,.85)}
.d .ap.in{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent);color:var(--ml-accent-ink)}
.d .ap.in small{color:var(--ml-accent-ink)}
.d .nowl{position:absolute;left:54px;right:0;height:2px;background:var(--ml-accent);border-radius:2px}
.d .nowl::before{content:"10:20";position:absolute;left:-54px;top:-8px;padding:3px 6px;border-radius:7px;background:var(--ml-accent);font:600 10.5px/1 var(--ml-mono);color:#fff}
.d .side{display:flex;flex-direction:column;gap:14px}
.d .pan{display:flex;flex:1 0 auto;flex-direction:column;padding:16px 16px 6px}
.d .pan .list{display:flex;flex:1;flex-direction:column;justify-content:flex-start}
.d .ph2{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .row{display:flex;align-items:center;gap:11px;padding:11px 0;border-bottom:1px solid var(--ml-line)}
.d .list > :last-child .row{border-bottom:0}
.d .row > div{flex:1;min-width:0}
.d .row b{display:block;font-size:13.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .row small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .empty{padding:14px 0;font-size:12.5px;color:var(--ml-muted)}
@container scr (max-width: 760px){
  .d .page{padding:16px}
  .d .seg,.d .me p,.d .stats,.d .sub{display:none}
  .d .brand{margin-right:auto}
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .side{order:-1}
  .d .docs{grid-template-columns:40px minmax(0,1fr) minmax(0,1fr)}
  .d .hr{width:40px}
  .d .nowl{left:40px}
  .d .ap small{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      // time grid: 8:00 to 15:00, hour height fills the card, columns A and B
      const Y = (h, m) => `calc(var(--hh) * ${h - 8 + m / 60})`;
      const appts = [
        ['A', 8, 0, 45, 'Isabel Cruz', 'Annual check-up', 'done'], ['A', 9, 0, 30, 'Kwame Mensah', 'Follow-up', 'done'],
        ['A', 9, 45, 45, 'Hana Kim', 'Consult - in room', 'live'], ['A', 10, 30, 30, 'Tomas Lindqvist', 'Flu shot', 'in'],
        ['A', 11, 0, 45, 'Elena Petrova', 'Blood work review', 'sched', 'ep'], ['A', 13, 0, 45, 'Jia Wen', 'New patient', 'sched'],
        ['B', 8, 30, 45, 'Noor Haddad', 'Physical', 'done'], ['B', 9, 30, 30, 'Carlos Mendoza', 'Follow-up', 'done'],
        ['B', 10, 30, 45, 'Priya Nair', 'Skin check', 'in'], ['B', 11, 30, 30, 'Sam Whitfield', 'Prescription', 'sched', 'sw'],
        ['B', 13, 30, 45, 'Ana Lim', 'Consult', 'sched'],
      ];
      const g = $('.grid');
      let html = '';
      for (let h = 8; h <= 14; h++) html += `<span class="hr" style="top:${Y(h, 0)}">${h > 12 ? h - 12 : h} ${h >= 12 ? 'PM' : 'AM'}</span>`;
      html += appts
        .map(([c, h, m, d, who, what, s, id]) => {
          const left = c === 'A' ? 'calc(54px + 4px)' : 'calc(54px + (100% - 54px) / 2 + 4px)';
          return `<div class="ap ${s === 'sched' ? '' : s}${d <= 30 ? ' sm' : ''}" ${id ? `data-ap="${id}"` : ''} style="top:calc(${Y(h, m)} + 2px);height:calc(var(--hh) * ${d / 60} - 4px);left:${left};width:calc((100% - 54px) / 2 - 8px)"><b>${who}</b><small>${what}</small></div>`;
        })
        .join('');
      html += `<div class="nowl" style="top:${Y(10, 20)}"></div>`;
      g.innerHTML = html;
      new ResizeObserver(() => g.style.setProperty('--hh', g.clientHeight / 7 + 'px')).observe(g);
      const pillEl = $('.pill');
      const segs = [...root.querySelectorAll('.sg')];
      const movePill = (el) => {
        pillEl.style.width = el.offsetWidth + 'px';
        pillEl.style.transform = `translateX(${el.offsetLeft}px)`;
      };
      segs.forEach((b) => b.addEventListener('click', () => { segs.forEach((o) => o.classList.toggle('on', o === b)); movePill(b); }));
      requestAnimationFrame(() => movePill(segs[0]));
      new ResizeObserver(() => movePill(root.querySelector('.sg.on'))).observe($('.seg'));

      const waiting = [['TL', 'Tomas Lindqvist', 'Flu shot - Dr. Reyes 10:30', '4 min', ''], ['PN', 'Priya Nair', 'Skin check - Dr. Okafor 10:30', '11 min', 'b']];
      const soon = [['EP', 'Elena Petrova', 'Blood work - Dr. Reyes 11:00', 'ep', ''], ['SW', 'Sam Whitfield', 'Prescription - Dr. Okafor 11:30', 'sw', 'c']];
      let checked = false;
      const wRow = ([ini, n, what, wt, cls], fresh) => {
        const r = `<div class="row"><span class="av ${cls}">${ini}</span><div><b>${n}</b><small>${what}</small></div><span class="st ${parseInt(wt) > 8 ? 'o' : 'g'}">${wt}</span></div>`;
        return fresh ? `<div class="grow"><div>${r}</div></div>` : `<div>${r}</div>`;
      };
      const sRow = ([ini, n, what, id, cls]) =>
        `<div data-row="${id}"><div class="row"><span class="av ${cls}">${ini}</span><div><b>${n}</b><small>${what}</small></div><button class="btn" type="button" data-ci="${id}">Check in</button></div></div>`;
      const stat = (el, to) => {
        const from = parseFloat(el.textContent) || 0;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 500);
          el.textContent = Math.round(from + (to - from) * k);
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const render = () => {
        const w = checked ? [...waiting, ['EP', 'Elena Petrova', 'Blood work - Dr. Reyes 11:00', 'Just now', '']] : waiting;
        $('[data-l=wait]').innerHTML = w.map((x, i) => wRow(x, checked && i === w.length - 1)).join('');
        $('[data-l=soon]').innerHTML = (checked ? soon.slice(1) : soon).map(sRow).join('');
        $('[data-s=wc]').textContent = `${w.length} waiting`;
      };
      render();
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      const checkIn = (id) => {
        if (checked || id !== 'ep') return;
        checked = true;
        render();
        $('[data-ap=ep]').classList.add('in');
        stat($('[data-s=in]'), 8);
        say('Elena Petrova checked in - Dr. Reyes 11:00');
      };
      const reset = () => {
        if (!checked) return;
        checked = false;
        render();
        $('[data-ap=ep]').classList.remove('in');
        stat($('[data-s=in]'), 7);
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-ci]');
        if (b) checkIn(b.dataset.ci);
      });

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(700px,200px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1200);
          if (idle()) await tap($('[data-ci=ep]'));
          await wait(4200);
          cur.classList.add('off');
          if (idle()) reset();
          await wait(2400);
        }
      })();
    },
    prompt: `Build a clinic front-desk dashboard (Juniper Health) as one full-viewport screen with no sidebar.

Layout: a top bar with the logo tile and clinic name on the left, a centered segmented control (Today, Patients, Messages, Billing) whose white selection pill slides between options on a spring (transform + width, 587ms), and the signed-in clinician (avatar, name, specialty) on the right. Below it the title "Today's schedule" with a date line and four stat blocks (Appointments, Checked in, Avg wait, No-shows). Body is two columns, minmax(0,1.7fr) and minmax(0,1fr). Left: a day timeline card, hours 8 AM to 3 PM with the hour height computed from the card height (so the day always fills the card, minimum 48px per hour) and hairline gridlines and mono hour labels, two doctor columns with a colored dot each header, appointments as absolutely positioned blocks (top and height computed from start time and duration): done = grey, in room = solid accent gradient, checked in = accent-soft with a 1.5px accent ring, scheduled = white with a hairline. A 2px accent "now" line with a time chip crosses both columns. Right: two cards, Waiting room (avatar, patient, appointment line, wait-time pill that turns amber past 8 minutes) and Arriving soon (patient, time, Check in button).

Behavior and motion: pressing Check in moves the patient out of Arriving soon into Waiting room (the new row grows in with grid-template-rows 0fr to 1fr and opacity, 560ms), the matching timeline block switches to checked in with a 400ms color transition, the Checked in stat counts up and a toast confirms. Buttons scale to .95 on press at 90ms.

Accessibility: segmented options are buttons, status is written in text as well as color, focus rings everywhere, prefers-reduced-motion removes the transitions. Phone layout under 760px: hide the segmented control, stats and subtitle, show the queue before the timeline, drop the secondary line inside timeline blocks.

Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, SegmentedNav, StatBlock, DayTimeline, AppointmentBlock, WaitingRoom, ArrivingList, Toast). Use your brand's accent color.`,
  });

  ML.add({
    id: 'app-industry-fitness',
    cat: 'app-industry',
    title: 'Fitness studio schedule',
    sub: 'A class books, the spot grid fills',
    html: `
<div class="app">
  <div class="page sc">
    <header class="top">
      <div><p class="eyebrow"><span class="mark">${I(P.dumb, 15)}</span>Bayside Fitness</p><h1>Thursday classes</h1><p class="sub">6 classes today - 84 spots booked - Pier Street studio</p></div>
      <div class="days" role="tablist" aria-label="Day"></div>
    </header>
    <div class="body">
      <section class="classes" aria-label="Classes"></section>
      <aside class="side">
        <section class="card next">
          <p class="lbl">Next up - starts in 18 min</p>
          <h2>Spin 45</h2><p class="who">Coach Noor Haddad - Studio B - 5:30 PM</p>
          <div class="spots"></div>
          <p class="cnt"><b class="n" data-s="b">16</b><span>of 24 booked</span><em class="st g" data-s="left">8 spots left</em></p>
        </section>
        <section class="card att">
          <div class="ph2"><p class="t">Check-ins this week</p><span class="dl">+8.2%</span></div>
          <div class="bars"></div>
          <div class="xs"></div>
        </section>
      </aside>
    </div>
  </div>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .page{display:flex;flex-direction:column;height:100%;padding:28px 32px 28px}
.d .top{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:24px}
.d .eyebrow{display:flex;align-items:center;gap:9px;margin-bottom:10px;font-size:13px;font-weight:650;letter-spacing:-.01em;color:var(--ml-accent-ink)}
.d .mark{display:grid;place-items:center;width:26px;height:26px;border-radius:8px;color:#fff;background:var(--ml-grad)}
.d h1{font-size:34px;letter-spacing:-.04em}
.d .sub{margin-top:7px;font-size:14px;color:var(--ml-muted)}
.d .days{display:flex;gap:6px}
.d .dy{display:flex;flex-direction:column;align-items:center;gap:3px;width:50px;padding:9px 0;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8);font-size:11px;font-weight:600;color:var(--ml-muted);transition:transform 90ms ease-out,background-color .25s ease,color .25s ease}
.d .dy b{font-size:17px;font-weight:650;color:var(--ml-ink)}
.d .dy.on{background:var(--ml-accent);box-shadow:0 8px 18px rgba(255,68,51,.25);color:rgba(255,255,255,.8)}
.d .dy.on b{color:#fff}
.d .body{display:grid;grid-template-columns:minmax(0,1.6fr) minmax(0,1fr);flex:1 0 auto;gap:18px;margin-top:26px}
.d .classes{display:flex;flex-direction:column;gap:10px}
.d .cl{display:grid;flex:1 0 auto;grid-template-columns:70px minmax(0,1fr) auto;align-items:center;gap:14px;padding:14px 16px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .cl.nx{box-shadow:inset 0 0 0 1.5px var(--ml-accent-line),var(--ml-shadow);background:linear-gradient(var(--ml-bg),#FAFCFF)}
.d .tm{font:650 14px/1.2 var(--ml-mono);color:var(--ml-ink);white-space:nowrap}
.d .tm small{display:block;margin-top:3px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .nm b{display:block;font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .nm small{display:block;margin-top:2px;font-size:12.5px;color:var(--ml-muted)}
.d .cap{display:flex;align-items:center;gap:8px;margin-top:9px}
.d .cb{flex:1;max-width:150px;height:5px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .cb i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--w));transform-origin:0 50%;transition:transform 700ms var(--ml-spring)}
.d .cb.full i{background:var(--ml-ink-2)}
.d .cap span{font:600 11.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .stk{display:flex}
.d .stk .av{width:26px;height:26px;margin-left:-5px;font-size:9.5px;box-shadow:0 0 0 2px var(--ml-bg)}
.d .stk .av:first-child{margin-left:0}
.d .act{display:flex;align-items:center;gap:14px}
.d .act .btn{width:84px;height:34px}
.d .cl .st.m{width:84px;justify-content:center;height:34px;border-radius:9px}
.d .side{display:flex;flex-direction:column;gap:16px}
.d .next{padding:18px}
.d .next h2{margin-top:8px;font-size:24px;font-weight:650;letter-spacing:-.03em}
.d .who{margin-top:3px;font-size:13px;color:var(--ml-muted)}
.d .spots{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:6px;margin-top:16px}
.d .dt{aspect-ratio:1;border-radius:7px;background:var(--ml-bar-2);transition:background-color .3s ease}
.d .dt.f{background:var(--ml-accent-line)}
.d .dt.me{background:var(--ml-accent);animation:ind-pop 520ms var(--ml-bounce) both}
.d .cnt{display:flex;align-items:baseline;gap:7px;margin-top:16px;font-size:13px;color:var(--ml-muted)}
.d .cnt b{font-size:30px;line-height:1;font-weight:650;letter-spacing:-.03em;color:var(--ml-ink)}
.d .cnt em{margin-left:auto;align-self:center;font-style:normal}
.d .att{display:flex;flex:1 0 auto;flex-direction:column;padding:16px 18px 14px}
.d .ph2{display:flex;align-items:center;justify-content:space-between}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .bars{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:9px;flex:1;min-height:110px;margin-top:14px;border-bottom:1px solid var(--ml-line)}
.d .bc{display:flex;align-items:flex-end}
.d .fill{width:100%;height:100%;border-radius:7px 7px 0 0;background:var(--ml-accent-line);transform:scaleY(var(--h));transform-origin:50% 100%;transition:transform 700ms var(--ml-spring)}
.d .bc.now .fill{background:var(--ml-grad)}
.d .bc.fc .fill{background:transparent;box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .xs{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:9px;padding-top:8px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted);text-align:center}
@container scr (max-width: 760px){
  .d .page{padding:20px 16px}
  .d h1{font-size:28px}
  .d .days,.d .sub{display:none}
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .side{order:-1}
  .d .cl{grid-template-columns:66px minmax(0,1fr) auto;gap:10px;padding:12px}
  .d .stk{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      $('.days').innerHTML = dayNames.map((d, i) => `<button class="dy ${i === 3 ? 'on' : ''}" type="button" role="tab">${d}<b>${12 + i}</b></button>`).join('');
      root.querySelectorAll('.dy').forEach((b) => b.addEventListener('click', () => root.querySelectorAll('.dy').forEach((o) => o.classList.toggle('on', o === b))));
      const classes = [
        ['6:30 AM', '45 min', 'HIIT Burn', 'Coach Rafael Santos - Studio A', 18, 20, ['RS', 'AT', 'LO']],
        ['8:00 AM', '60 min', 'Vinyasa Flow', 'Coach Hana Kim - Studio B', 14, 16, ['HK', 'PN', 'IC']],
        ['12:15 PM', '30 min', 'Express Strength', 'Coach Rafael Santos - Studio A', 20, 20, ['KM', 'JW', 'CM']],
        ['5:30 PM', '45 min', 'Spin 45', 'Coach Noor Haddad - Studio B', 16, 24, ['NH', 'EP', 'DO']],
        ['6:45 PM', '60 min', 'Boxing Basics', 'Coach Luis Ortega - Studio A', 9, 14, ['LO', 'SW', 'AL']],
        ['7:30 PM', '50 min', 'Yoga Nidra', 'Coach Hana Kim - Studio B', 7, 12, ['HK', 'TL']],
      ];
      const tone = ['', 'b', 'c'];
      const row = (c, i, booked) => {
        const full = c[4] >= c[5];
        const n = booked ? c[4] + 1 : c[4];
        const act = full ? '<span class="st m">Waitlist</span>' : booked ? '<button class="btn done" type="button" data-bk="3">Booked</button>' : `<button class="btn" type="button" data-bk="${i}">Book</button>`;
        const av = c[6].map((x, k) => `<span class="av ${tone[k % 3]}">${x}</span>`).join('') + (booked ? '<span class="av" style="background:var(--ml-accent);color:#fff">MR</span>' : '');
        return `<div class="cl ${i === 3 ? 'nx' : ''}" data-i="${i}"><div class="tm">${c[0]}<small>${c[1]}</small></div><div class="nm"><b>${c[2]}</b><small>${c[3]}</small><div class="cap"><span class="cb ${full ? 'full' : ''}"><i style="--w:${c[4] / c[5]}"></i></span><span class="n">${n}/${c[5]}</span></div></div><div class="act"><span class="stk">${av}</span>${act}</div></div>`;
      };
      const rowsEl = $('.classes');
      const drawRows = (booked) => (rowsEl.innerHTML = classes.map((c, i) => row(c, i, booked && i === 3)).join(''));
      drawRows(false);
      const spots = $('.spots');
      spots.innerHTML = Array.from({ length: 24 }, (_, i) => `<span class="dt ${i < 16 ? 'f' : ''}"></span>`).join('');
      const bars = [142, 156, 131, 98, 120, 148, 90];
      $('.bars').innerHTML = bars.map((v, i) => `<div class="bc ${i === 3 ? 'now' : i > 3 ? 'fc' : ''}"><span class="fill" style="--h:${v / 170}"></span></div>`).join('');
      $('.xs').innerHTML = dayNames.map((d) => `<span>${d}</span>`).join('');
      const roll = (el, to) => {
        const from = parseFloat(el.textContent) || 0;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 500);
          el.textContent = Math.round(from + (to - from) * k);
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      let booked = false;
      const apply = (b) => {
        booked = b;
        drawRows(b);
        const bi = $('[data-i="3"] .cb i');
        bi.style.setProperty('--w', b ? 16 / 24 : 16 / 24);
        if (b) requestAnimationFrame(() => requestAnimationFrame(() => bi.style.setProperty('--w', 17 / 24)));
        const dts = spots.children;
        dts[16].className = b ? 'dt me' : 'dt';
        roll($('[data-s=b]'), b ? 17 : 16);
        $('[data-s=left]').textContent = b ? '7 spots left' : '8 spots left';
        bars[3] = b ? 99 : 98;
        root.querySelectorAll('.bc')[3].firstElementChild.style.setProperty('--h', (b ? 112 : 98) / 170);
      };
      const book = () => {
        if (booked) return;
        apply(true);
        say('Booked Spin 45 - 5:30 PM - 17 of 24');
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-bk]');
        if (b && b.dataset.bk === '3') book();
        else if (b && !booked && classes[b.dataset.bk][4] < classes[b.dataset.bk][5]) {
          b.className = 'btn done';
          b.textContent = 'Booked';
        }
      });

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(600px,200px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          if (booked) apply(false);
          await wait(1400);
          if (idle()) await tap($('[data-bk="3"]'));
          await wait(4600);
          cur.classList.add('off');
          if (idle() && booked) apply(false);
          await wait(2400);
        }
      })();
    },
    prompt: `Build a fitness studio class schedule screen (Bayside Fitness) as one full-viewport page with no sidebar and no top bar chrome, just a confident page header.

Layout: padding 28px 32px. Header: a small brand eyebrow (icon tile + studio name in your accent ink), a 34px title "Thursday classes" (weight 650, letter-spacing -.04em), a subtitle with class and spot counts, and on the right a row of seven day chips (weekday label over a 17px date, 50px wide, 14px radius; the selected one is a solid accent fill with a soft colored shadow). Body is two columns, minmax(0,1.6fr) and minmax(0,1fr). Left: a stack of class rows (grid 70px / 1fr / auto): mono start time with the duration beneath, class name, coach and studio, a thin capacity bar with a mono "16/24" count, an overlapping avatar stack, and a Book button (84px). A full class shows a Waitlist chip instead, and its bar is dark. The next class gets a 1.5px accent-line ring. Right: a "Next up" card with the class name at 24px, a 24-cell spot grid (12 columns, rounded squares, booked cells in a soft blue), a big booked count with a spots-left pill; below it a "Check-ins this week" card with seven bars (today in the accent gradient, future days dashed outlines).

Motion: pressing Book turns the button into a green "Booked", the capacity bar scales from the left (scaleX, spring 587ms), the count ticks up, an accent avatar joins the stack, the next free spot-grid cell pops in (scale .6 to 1.06 to 1 with a slight overshoot), today's attendance bar rises (scaleY from the bottom) and a toast confirms. Buttons scale to .95 on press at 90ms.

Accessibility: day chips are a tablist of buttons, availability is written as text, focus rings everywhere, prefers-reduced-motion removes the pop. Phone layout under 760px: hide day chips and subtitle, show the Next up card first, hide avatar stacks.

Plain HTML, CSS and JS, no libraries; React-friendly structure (PageHeader, DayChips, ClassRow, NextUpCard, SpotGrid, AttendanceChart, Toast). Use your brand's accent color.`,
  });

  ML.add({
    id: 'app-industry-banking',
    cat: 'app-industry',
    title: 'Banking overview',
    sub: 'A payment lands, the card gets frozen',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.bank, 17)}</span><b>Northgate</b></div>
    <p class="lbl">Accounts</p>
    <nav class="accts" aria-label="Accounts">
      <button class="ac on" type="button"><span><b>Checking</b><small>**** 4821</small></span><em class="n" data-v="12480.2" data-s="chk">$12,480.20</em></button>
      <button class="ac" type="button"><span><b>Savings</b><small>**** 9034</small></span><em class="n">$34,900.00</em></button>
      <button class="ac" type="button"><span><b>Credit card</b><small>**** 7710</small></span><em class="n">-$1,284.10</em></button>
    </nav>
    <p class="lbl l2">Manage</p>
    <button class="it" type="button">${I(P.upR, 17)}<span>Payments</span></button>
    <button class="it" type="button">${I(P.chart, 17)}<span>Insights</span></button>
    <button class="it" type="button">${I(P.shield, 17)}<span>Security</span></button>
    <div class="me"><span class="av">PN</span><p><b>Priya Nair</b><small>Personal</small></p></div>
  </aside>
  <main class="page sc">
    <div class="head">
      <div><p class="k">Good afternoon, Priya</p><p class="big" data-v="46096.1" data-s="tot">$46,096.10</p><p class="sub"><span class="dl">+$1,208.40</span> this month across 3 accounts</p></div>
      <div class="qa">
        <button class="qb" type="button"><span>${I(P.upR, 18)}</span>Send</button>
        <button class="qb" type="button"><span>${I(P.dnL, 18)}</span>Request</button>
        <button class="qb" type="button"><span>${I(P.refresh, 18)}</span>Transfer</button>
      </div>
    </div>
    <section class="card chart">
      <div class="ch"><p class="t">Balance</p><p class="leg"><span class="on">30 days</span><span>90 days</span><span>1 year</span></p></div>
      <div class="plot"><svg viewBox="0 0 600 150" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="ml-bk-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF4433" stop-opacity=".2"/><stop offset="1" stop-color="#FF4433" stop-opacity="0"/></linearGradient></defs><path class="area"/><path class="line"/></svg><span class="dot"><i></i></span></div>
    </section>
    <section class="card txs">
      <div class="ch"><p class="t">Recent transactions</p><button class="link" type="button">See all</button></div>
      <div class="list"></div>
    </section>
  </main>
  <aside class="panel">
    <div class="cardwrap">
      <div class="cg" data-card>
        <div class="cgt"><b>Northgate</b>${I(P.bolt, 18)}</div>
        <div class="chip"></div>
        <p class="num n">**** **** **** 4821</p>
        <div class="cgb"><span><small>Cardholder</small>Priya Nair</span><span><small>Expires</small>09/29</span></div>
        <span class="frz">${I(P.lock, 14)}Frozen</span>
      </div>
    </div>
    <div class="fr card">
      <div><b>Freeze card</b><small>Pause all payments instantly</small></div>
      <button class="sw" type="button" role="switch" aria-checked="false" aria-label="Freeze card"><i></i></button>
    </div>
    <div class="lim card">
      <div class="ph2"><p class="t">Daily limit</p><p class="n"><b data-v="412" data-s="spent">$412</b> / $1,000</p></div>
      <span class="lb"><i style="--w:.412"></i></span>
      <p class="k">Resets at midnight - 3 payments today</p>
    </div>
    <div class="card sch">
      <div class="ph2"><p class="t">Scheduled</p><button class="link" type="button">Manage</button></div>
      <p class="sr"><span>Atlas Fiber<small>Oct 20</small></span><b class="n">$64.00</b></p>
      <p class="sr"><span>Tidewater rent<small>Nov 1</small></span><b class="n">$1,850.00</b></p>
    </div>
  </aside>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:grid;grid-template-columns:236px minmax(0,1fr) 300px}
.d .side{display:flex;flex-direction:column;min-height:0;padding:20px 14px 16px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;padding:0 6px 20px;font-size:16px;letter-spacing:-.02em}
.d .brand b{font-weight:650}
.d .mark{display:grid;place-items:center;width:32px;height:32px;border-radius:10px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .side .lbl{padding:0 8px 8px}
.d .side .l2{margin-top:20px}
.d .accts{display:flex;flex-direction:column;gap:6px}
.d .ac{display:flex;align-items:center;gap:10px;width:100%;padding:10px;border-radius:13px;text-align:left;box-shadow:inset 0 0 0 1px var(--ml-line);transition:background-color .25s ease,box-shadow .25s ease}
.d .ac.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .ai{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--ml-surface);color:var(--ml-ink-2)}
.d .ac.on .ai{background:var(--ml-bg);color:var(--ml-accent)}
.d .ac > span:nth-child(2){flex:1;min-width:0}
.d .ac b{display:block;font-size:13.5px;font-weight:600}
.d .ac small{display:block;margin-top:1px;font:500 11px/1.2 var(--ml-mono);color:var(--ml-muted)}
.d .ac em{font-style:normal;font-size:12.5px;font-weight:650;letter-spacing:-.01em}
.d .it{display:flex;align-items:center;gap:11px;width:100%;height:40px;padding:0 10px;border-radius:11px;font-size:14px;font-weight:550;color:var(--ml-ink-2)}
.d .it svg{color:var(--ml-muted)}
.d .it:hover{background:var(--ml-surface)}
.d .me{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .me p{display:flex;flex-direction:column}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .page{display:flex;flex-direction:column;gap:14px;padding:24px 26px}
.d .page > *{flex:none}
.d .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .head .big{margin-top:8px;font-size:38px;letter-spacing:-.04em}
.d .sub{display:flex;align-items:center;gap:8px;margin-top:9px;font-size:13px;color:var(--ml-muted)}
.d .qa{display:flex;gap:8px}
.d .qb{display:flex;flex-direction:column;align-items:center;gap:6px;width:68px;font-size:12px;font-weight:600;color:var(--ml-ink-2);transition:transform 90ms ease-out}
.d .qb span{display:grid;place-items:center;width:46px;height:46px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow);color:var(--ml-accent)}
.d .qb:active{transform:scale(.95)}
.d .chart{padding:16px 18px 14px}
.d .ch{display:flex;align-items:center;justify-content:space-between}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .leg{display:flex;gap:4px;padding:3px;border-radius:10px;background:var(--ml-surface);font-size:12px;font-weight:600;color:var(--ml-muted)}
.d .leg span{padding:5px 10px;border-radius:8px}
.d .leg .on{background:var(--ml-bg);color:var(--ml-ink);box-shadow:0 1px 2px rgba(35,15,10,.1)}
.d .plot{position:relative;height:130px;margin-top:10px}
.d .plot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.d .area{fill:url(#ml-bk-fill)}
.d .line{fill:none;stroke:var(--ml-accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.d .dot{position:absolute;right:0;top:12%;width:12px;height:12px;margin:-6px -6px 0 0;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px #fff,0 2px 6px rgba(255,68,51,.4)}
.d .dot i{position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:ind-ping 2.4s ease-out infinite}
.d .txs{padding:16px 18px 6px}
.d .link{font-size:12.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .tx{display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid var(--ml-line)}
.d .list > :last-child .tx{border-bottom:0}
.d .tx .ti{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .tx > div{flex:1;min-width:0}
.d .tx b{display:block;font-size:13.5px;font-weight:600}
.d .tx small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .tx em{font-style:normal;font-size:13.5px;font-weight:650;font-variant-numeric:tabular-nums}
.d .tx em.in{color:#12893C}
.d .panel{display:flex;flex-direction:column;gap:14px;min-height:0;padding:24px 22px 24px 4px;overflow:hidden}
.d .cg{position:relative;aspect-ratio:1.586;padding:18px 20px;border-radius:20px;color:#fff;background:radial-gradient(120% 90% at 100% 0%,rgba(255,255,255,.28),transparent 55%),linear-gradient(135deg,#FF4433 0%,#B3150F 100%);box-shadow:0 14px 30px rgba(10,80,200,.28),0 2px 4px rgba(10,80,200,.2);overflow:hidden;transition:filter .5s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .cg.off{filter:grayscale(.85) brightness(1.08);transform:scale(.985)}
.d .cgt{display:flex;align-items:center;justify-content:space-between;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .chip{width:36px;height:26px;margin-top:12px;border-radius:7px;background:linear-gradient(135deg,#FAF6F2,#C9D9EE)}
.d .num{margin-top:12px;font:500 14px/1 var(--ml-mono);letter-spacing:.06em}
.d .cgb{position:absolute;left:20px;right:20px;bottom:14px;display:flex;justify-content:space-between;font-size:13px;font-weight:600}
.d .cgb small{display:block;margin-bottom:2px;font-size:9.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;opacity:.7}
.d .frz{position:absolute;right:14px;top:50%;display:flex;align-items:center;gap:6px;padding:6px 11px;border-radius:999px;background:rgba(29,29,31,.78);font-size:12px;font-weight:600;opacity:0;transform:scale(.85);transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .cg.off .frz{opacity:1;transform:none}
.d .fr{display:flex;align-items:center;gap:12px;padding:14px 16px}
.d .fr > div{flex:1}
.d .fr b{display:block;font-size:14px;font-weight:650}
.d .fr small{display:block;margin-top:2px;font-size:12px;color:var(--ml-muted)}
.d .sw{position:relative;flex:none;width:46px;height:28px;border-radius:99px;background:var(--ml-bar);transition:background-color .3s ease,transform 90ms ease-out}
.d .sw i{position:absolute;left:3px;top:3px;width:22px;height:22px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .sw[aria-checked=true]{background:var(--ml-accent)}
.d .sw[aria-checked=true] i{transform:translateX(18px)}
.d .sw:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .lim{padding:14px 16px}
.d .ph2{display:flex;align-items:baseline;justify-content:space-between}
.d .lim .n{font-size:12.5px;color:var(--ml-muted)}
.d .lim .n b{font-size:15px;font-weight:650;color:var(--ml-ink)}
.d .lb{display:block;height:7px;margin:10px 0;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .lb i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(var(--w));transform-origin:0 50%;transition:transform 700ms var(--ml-spring)}
.d .sch{padding:14px 16px 6px}
.d .sr{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-top:1px solid var(--ml-line);font-size:13px;font-weight:600}
.d .sr:first-of-type{margin-top:8px}
.d .sr small{display:block;margin-top:1px;font-size:11.5px;font-weight:500;color:var(--ml-muted)}
@container scr (max-width: 1100px){
  .d .app{grid-template-columns:220px minmax(0,1fr) 270px}
}
@container scr (max-width: 760px){
  .d .app{display:flex;flex-direction:column;overflow-y:auto}
  .d .side{display:none}
  .d .page{flex:none;min-height:auto;overflow:visible;padding:18px 16px 8px}
  .d .head{flex-direction:column;align-items:flex-start}
  .d .head .big{font-size:32px}
  .d .panel{flex:none;padding:8px 16px 20px;overflow:visible}
  .d .cg{max-width:340px}
}
@media (prefers-reduced-motion: reduce){.d .dot i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const money = (v, d = 2) => '$' + Math.abs(v).toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
      const pts = [58, 62, 60, 66, 64, 71, 69, 74, 72, 70, 76, 80, 78, 84, 82, 88, 85, 90, 87, 93];
      const sp = pts.map((v, i) => [(i * 600) / (pts.length - 1), 145 - ((v - 50) / 50) * 125]);
      let d = `M${sp[0][0]},${sp[0][1]}`;
      for (let i = 0; i < sp.length - 1; i++) {
        const [a, b, c, e] = [sp[i - 1] || sp[i], sp[i], sp[i + 1], sp[i + 2] || sp[i + 1]];
        d += ` C${b[0] + (c[0] - a[0]) / 6},${b[1] + (c[1] - a[1]) / 6} ${c[0] - (e[0] - b[0]) / 6},${c[1] - (e[1] - b[1]) / 6} ${c[0]},${c[1]}`;
      }
      $('.line').setAttribute('d', d);
      $('.area').setAttribute('d', `${d} L600,150 L0,150 Z`);
      $('.dot').style.top = `${(sp[sp.length - 1][1] / 150) * 100}%`;
      const ic = {
        bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
        coffee: '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
        dn: '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>',
        home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
        util: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
      };
      const icon = (p) => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
      const txs = [
        ['dn', 'Halden payroll', 'Today - Income', 3240, 'in'], ['bag', 'Fernway Market', 'Yesterday - Shopping', -48.2],
        ['home', 'Tidewater rent', 'Oct 1 - Housing', -1850], ['util', 'Northgate Energy', 'Sep 29 - Utilities', -92.75],
      ];
      const txHtml = ([i, n, s, a, inc]) =>
        `<div class="tx"><span class="ti">${icon(ic[i])}</span><div><b>${n}</b><small>${s}</small></div><em class="${inc ? 'in' : ''}">${a > 0 ? '+' : '-'}${money(a)}</em></div>`;
      const list = $('.list');
      list.innerHTML = txs.map((t) => `<div>${txHtml(t)}</div>`).join('');
      const roll = (el, to, fmt) => {
        const from = parseFloat(el.dataset.v);
        el.dataset.v = to;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 700);
          el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      const drop = (el) => {
        el.classList.remove('grow');
        el.classList.add('shrink');
        setTimeout(() => el.remove(), 450);
      };
      let newTx = null;
      const arrive = () => {
        if (newTx) return;
        newTx = document.createElement('div');
        newTx.className = 'grow';
        newTx.innerHTML = txHtml(['coffee', 'Corvid Coffee', 'Just now - Dining', -6.4]);
        list.prepend(newTx);
        roll($("[data-s=chk]"), 12473.8, (v) => money(v));
        roll($("[data-s=tot]"), 46089.7, (v) => money(v));
        roll($("[data-s=spent]"), 418, (v) => money(v, 0));
        $('.lb i').style.setProperty('--w', 0.418);
        say('Card payment $6.40 - Corvid Coffee');
      };
      const card = $('[data-card]');
      const sw = $('.sw');
      const setFrozen = (on) => {
        sw.setAttribute('aria-checked', String(on));
        card.classList.toggle('off', on);
        if (on) say('Card frozen - payments paused');
      };
      sw.addEventListener('click', () => setFrozen(sw.getAttribute('aria-checked') !== 'true'));
      const reset = () => {
        if (sw.getAttribute('aria-checked') === 'true') setFrozen(false);
        if (!newTx) return;
        drop(newTx);
        newTx = null;
        roll($("[data-s=chk]"), 12480.2, (v) => money(v));
        roll($("[data-s=tot]"), 46096.1, (v) => money(v));
        roll($("[data-s=spent]"), 412, (v) => money(v, 0));
        $('.lb i').style.setProperty('--w', 0.412);
      };
      root.querySelectorAll('.ac').forEach((b) => b.addEventListener('click', () => root.querySelectorAll('.ac').forEach((o) => o.classList.toggle('on', o === b))));

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(560px,620px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1200);
          arrive();
          await wait(1600);
          if (idle()) await tap(sw);
          await wait(2600);
          if (idle()) await tap(sw);
          await wait(2400);
          cur.classList.add('off');
        }
      })();
    },
    prompt: `Build a desktop banking overview (Northgate) as one full-viewport screen with three columns: accounts sidebar, main, and a card panel.

Layout: grid columns 236px, minmax(0,1fr), 300px. Left (white, 1px hairline): logo tile and name, an uppercase "Accounts" label, three account buttons (icon tile, name, masked number in mono, balance; the selected one on accent-soft with a 1.5px accent-line ring: Checking, Savings, Credit card with a negative balance), a "Manage" group (Payments, Insights, Security) and the signed-in user at the bottom. Main (scrolls): greeting line, the total balance at 38px weight 650 with a green delta pill, three quick-action tiles (Send, Request, Transfer: 46px rounded icon tile with a label); a Balance card with a range segmented control and a smooth accent area line chart with a pinging last point; a Recent transactions card (category icon tile, merchant, date and category, amount in tabular numbers, incoming amounts in green). Right: a drawn bank card (aspect-ratio 1.586, 20px radius, blue gradient with a soft highlight, chip, masked number, cardholder and expiry), a Freeze card row with a switch, and a Daily limit card with a meter.

Behavior and motion: a card payment arrives: a new transaction grows in at the top of the list (grid-template-rows 0fr to 1fr plus opacity, 560ms), the Checking balance, total balance and daily-limit amount count to their new values (ease-out cubic, 700ms), the meter scales from the left and a toast appears. Toggling Freeze moves the switch knob with a spring (587ms) and the card desaturates (filter: grayscale) with a "Frozen" pill popping over it. Buttons scale to .95 on press.

Accessibility: the freeze control is a real switch (role="switch", aria-checked), focus rings, amounts carry a sign and not only a color, prefers-reduced-motion removes the ping. Phone layout under 760px: hide the sidebar and stack main above the card panel.

Plain HTML, CSS and JS, no libraries; React-friendly structure (AccountsSidebar, BalanceHeader, BalanceChart, TransactionList, BankCard, FreezeSwitch, LimitMeter, Toast). Use your brand's accent color.`,
  });

  ML.add({
    id: 'app-industry-logistics',
    cat: 'app-industry',
    title: 'Logistics fleet map',
    sub: 'Trucks move along their routes',
    html: `
<div class="app">
  <div class="mapw">
    <svg class="map" viewBox="0 0 1024 768" preserveAspectRatio="xMidYMid slice" aria-label="Fleet route map">
      <defs>
        <pattern id="ml-lg-blk" width="64" height="64" patternUnits="userSpaceOnUse"><rect x="7" y="7" width="50" height="50" rx="9" fill="#E8EEF8"/></pattern>
      </defs>
      <rect width="1024" height="768" fill="#FAF6F2"/>
      <rect width="1024" height="768" fill="url(#ml-lg-blk)"/>
      <path d="M0 640 C90 596 190 690 310 726 L350 768 L0 768 Z" fill="#DCE9FB"/>
      <path d="M0 640 C90 596 190 690 310 726" fill="none" stroke="#C4DAF8" stroke-width="2"/>
      <g fill="none" stroke-linecap="round">
        <g stroke="#fff" stroke-width="15"><path d="M-20 520 C200 500 320 380 520 360 S800 240 1060 200"/><path d="M250 -10 L305 780"/><path d="M-10 250 L760 336"/><path d="M110 780 C180 610 420 520 760 566"/><path d="M590 -10 C600 160 570 260 600 400 S690 640 700 780"/></g>
        <g stroke="#EAE1D9" stroke-width="1.5" stroke-dasharray="2 9"><path d="M-20 520 C200 500 320 380 520 360 S800 240 1060 200"/><path d="M250 -10 L305 780"/><path d="M-10 250 L760 336"/></g>
      </g>
      <g class="routes" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path class="rt" data-r="0" d="M120 560 C200 520 240 470 300 430 S420 400 470 380 S580 300 640 250"/>
        <path class="rt" data-r="1" d="M120 560 C220 600 360 640 460 620 S620 600 660 520"/>
        <path class="rt" data-r="2" d="M300 140 C340 220 400 300 470 380 S540 470 600 480"/>
      </g>
      <g class="stops"></g>
      <g class="depots">
        <g transform="translate(120 560)"><rect x="-19" y="-19" width="38" height="38" rx="11" fill="#fff" stroke="#FF4433" stroke-width="2"/><g transform="translate(-9 -9) scale(.75)" fill="none" stroke="#FF4433" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${P.building}</g><text y="36" text-anchor="middle" class="lab">Harbor DC</text></g>
        <g transform="translate(640 250)"><rect x="-17" y="-17" width="34" height="34" rx="10" fill="#fff" stroke="#FF7A3D" stroke-width="2"/><g transform="translate(-8 -8) scale(.67)" fill="none" stroke="#FF7A3D" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${P.box}</g><text y="34" text-anchor="middle" class="lab">Northgate Yard</text></g>
      </g>
      <g class="trucks"></g>
    </svg>
  </div>
  <div class="hud card">
    <div class="brand"><span class="mark">${I(P.truck, 17)}</span><div><b>Atlas Freight</b><small>Fleet live - Oct 15, 2:24 PM</small></div></div>
    <div class="hs"><p><span class="k">Active</span><b class="n">12</b></p><p><span class="k">Delivered</span><b class="n" data-s="del">38</b></p><p><span class="k">On time</span><b class="n">94%</b></p></div>
  </div>
  <aside class="panel card">
    <div class="ph2"><p class="t">Vehicles</p><span class="st"><i class="ping"></i>Live</span></div>
    <div class="chips"><button class="chip on" type="button">All 4</button><button class="chip" type="button">On route 2</button><button class="chip" type="button">Delayed 1</button></div>
    <div class="vl"></div>
    <div class="al"><span>${I(P.clock, 16)}</span><p><b>AF-117 is 12 min behind</b>Dock 4 is congested. Customer notified.</p></div>
  </aside>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .mapw{position:absolute;inset:0}
.d .map{display:block;width:100%;height:100%}
.d .lab{font:600 12px var(--ml-font);fill:var(--ml-ink-2);paint-order:stroke;stroke:#fff;stroke-width:4px;stroke-linejoin:round}
.d .rt{stroke:var(--ml-accent-line);stroke-width:5;stroke-dasharray:2 11;transition:stroke .35s ease,stroke-width .35s ease,opacity .35s ease}
.d .rt.sel{stroke:var(--ml-accent);stroke-width:5;stroke-dasharray:none;opacity:1}
.d .rt.dim{opacity:.35}
.d .stp{fill:#fff;stroke:var(--ml-accent);stroke-width:2.5;transition:fill .3s ease}
.d .stp.done{fill:var(--ml-accent)}
.d .tkc{fill:var(--ml-accent);stroke:#fff;stroke-width:3;filter:drop-shadow(0 3px 5px rgba(10,80,200,.35))}
.d .tk.late .tkc{fill:#FF9F0A;filter:drop-shadow(0 3px 5px rgba(178,94,0,.35))}
.d .tk{transition:opacity .35s ease}
.d .tk.dim{opacity:.45}
.d .ring{fill:none;stroke:var(--ml-accent);stroke-width:2;opacity:0;transform-box:fill-box;transform-origin:center;transition:opacity .3s ease}
.d .tk.sel .ring{opacity:1;animation:lg-ring 1.8s ease-out infinite}
@keyframes lg-ring{0%{transform:scale(1);opacity:.7}100%{transform:scale(1.9);opacity:0}}
.d .hud{position:absolute;left:20px;top:20px;display:flex;flex-direction:column;gap:14px;padding:14px 16px;width:300px}
.d .brand{display:flex;align-items:center;gap:11px}
.d .brand b{display:block;font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .brand small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .mark{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:11px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .hs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.d .hs p{display:flex;flex-direction:column;gap:4px;padding:9px 10px;border-radius:11px;background:var(--ml-surface)}
.d .hs b{font-size:19px;line-height:1;font-weight:650;letter-spacing:-.02em}
.d .panel{position:absolute;right:20px;top:20px;bottom:20px;display:flex;flex-direction:column;width:300px;padding:16px;min-height:0}
.d .ph2{display:flex;align-items:center;justify-content:space-between}
.d .t{font-size:16px;font-weight:650;letter-spacing:-.01em}
.d .chips{display:flex;gap:6px;margin:12px 0 8px}
.d .chip{height:28px;padding:0 11px;border-radius:999px;background:var(--ml-surface);font-size:12px;font-weight:600;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease}
.d .chip.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .al{display:flex;gap:10px;margin-top:10px;padding:12px;border-radius:13px;background:rgba(255,159,10,.1);font-size:12px;line-height:1.4;color:var(--ml-ink-2)}
.d .al span{flex:none;color:#B25E00}
.d .al b{display:block;font-size:12.5px;font-weight:650;color:#B25E00}
.d .vl{flex:1;min-height:0;overflow-y:auto;scrollbar-width:none}
.d .vh{display:flex;align-items:center;gap:11px;width:100%;padding:11px 10px;border-radius:13px;text-align:left;transition:background-color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .vh:hover{background:var(--ml-surface)}
.d .v.sel .vh{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .vi{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .v.late .vi{background:rgba(255,159,10,.14);color:#B25E00}
.d .vh > span:nth-child(2){flex:1;min-width:0}
.d .vh b{display:block;font-size:13.5px;font-weight:650}
.d .vh small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .vh em{font:600 11.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-ink-2);white-space:nowrap}
.d .dd{display:grid;grid-template-rows:0fr;transition:grid-template-rows .5s var(--ml-ease)}
.d .v.sel .dd{grid-template-rows:1fr}
.d .dd > div{min-height:0;overflow:hidden}
.d .dx{padding:6px 10px 12px}
.d .pb{display:block;height:6px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .pb i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--w,0));transform-origin:0 50%}
.d .dx p{display:flex;justify-content:space-between;margin-top:8px;font-size:12px;color:var(--ml-muted)}
.d .dx p b{font-weight:600;color:var(--ml-ink)}
@container scr (max-width: 760px){
  .d .app{display:flex;flex-direction:column;overflow-y:auto}
  .d .mapw{position:relative;flex:none;height:300px}
  .d .hud{left:12px;top:12px;width:auto;right:12px;padding:10px 12px}
  .d .hs{display:none}
  .d .panel{position:relative;inset:auto;flex:none;width:auto;margin:12px 16px 20px}
}
@media (prefers-reduced-motion: reduce){.d .tk.sel .ring{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const NS = 'http://www.w3.org/2000/svg';
      const routes = [...root.querySelectorAll('.rt')];
      const len = routes.map((p) => p.getTotalLength());
      const veh = [
        { id: 'AF-204', who: 'Rafael Santos', to: 'Northgate Yard', r: 0, p: 0.46, mins: 38, speed: 34, late: false },
        { id: 'AF-117', who: 'Isabel Cruz', to: 'Meridian Foods', r: 1, p: 0.32, mins: 31, speed: 26, late: true },
        { id: 'AF-311', who: 'Kwame Mensah', to: 'Fernway Market', r: 2, p: 0.7, mins: 24, speed: 30, late: false },
        { id: 'AF-093', who: 'Jia Wen', to: 'Loading at Harbor DC', r: -1, p: 0, mins: 0, speed: 0, late: false },
      ];
      const stopsAt = [[0.36, 0.72], [0.4, 0.78], [0.5, 0.88]];
      const icon = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>';
      const stopsG = $('.stops'), trucksG = $('.trucks');
      stopsG.innerHTML = stopsAt
        .map((a, r) => a.map((f, k) => { const pt = routes[r].getPointAtLength(len[r] * f); return `<circle class="stp" data-r="${r}" data-k="${k}" cx="${pt.x}" cy="${pt.y}" r="6.5"/>`; }).join(''))
        .join('');
      trucksG.innerHTML = veh
        .filter((v) => v.r >= 0)
        .map((v) => `<g class="tk ${v.late ? 'late' : ''}" data-id="${v.id}"><circle class="ring" r="17"/><circle class="tkc" r="17"/><g transform="translate(-9 -9) scale(.75)" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></g><text y="34" text-anchor="middle" class="lab">${v.id}</text></g>`)
        .join('');
      const vl = $('.vl');
      vl.innerHTML = veh
        .map((v, i) => `<div class="v ${v.late ? 'late' : ''}" data-i="${i}"><button class="vh" type="button" data-sel="${i}"><span class="vi">${icon}</span><span><b>${v.id}</b><small>${v.who}</small></span><span style="display:flex;flex-direction:column;align-items:flex-end;gap:5px"><span class="st ${v.late ? 'o' : v.r < 0 ? 'm' : 'g'}">${v.late ? 'Delayed' : v.r < 0 ? 'Loading' : 'On route'}</span><em data-eta="${i}"></em></span></button><div class="dd"><div><div class="dx"><span class="pb"><i data-pb="${i}"></i></span><p><span>Route progress <b data-pct="${i}"></b></span><span>Next stop <b data-nx="${i}"></b></span></p></div></div></div></div>`)
        .join('');
      const place = () => {
        veh.forEach((v) => {
          if (v.r < 0) return;
          const pt = routes[v.r].getPointAtLength(len[v.r] * v.p);
          $(`.tk[data-id="${v.id}"]`).setAttribute('transform', `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1)})`);
        });
      };
      const names = [['Stop A', 'Stop B', 'Northgate Yard'], ['Dock 4', 'Dock 9', 'Meridian Foods'], ['Stop C', 'Stop D', 'Fernway Market']];
      let delivered = 38, lastText = 0;
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      const text = () => {
        veh.forEach((v, i) => {
          const eta = $(`[data-eta="${i}"]`);
          if (v.r < 0) { eta.textContent = 'Ready 2:40'; return; }
          eta.textContent = `${Math.max(1, Math.round((1 - v.p) * v.mins))} min`;
          $(`[data-pb="${i}"]`).style.setProperty('--w', v.p.toFixed(3));
          $(`[data-pct="${i}"]`).textContent = Math.round(v.p * 100) + '%';
          const k = stopsAt[v.r].findIndex((f) => f > v.p);
          $(`[data-nx="${i}"]`).textContent = names[v.r][k < 0 ? 2 : k];
          routes[v.r];
          root.querySelectorAll(`.stp[data-r="${v.r}"]`).forEach((c, j) => c.classList.toggle('done', stopsAt[v.r][j] <= v.p));
        });
      };
      place();
      text();
      let selIdx = -1;
      const select = (i) => {
        selIdx = selIdx === i ? -1 : i;
        veh.forEach((v, k) => {
          const on = k === selIdx;
          root.querySelector(`.v[data-i="${k}"]`).classList.toggle('sel', on);
          if (v.r >= 0) {
            routes[v.r].classList.toggle('sel', on);
            routes[v.r].classList.toggle('dim', selIdx >= 0 && !on);
            const g = $(`.tk[data-id="${v.id}"]`);
            g.classList.toggle('sel', on);
            g.classList.toggle('dim', selIdx >= 0 && !on);
          }
        });
        if (selIdx >= 0 && veh[selIdx].r >= 0) routes[veh[selIdx].r].parentNode.appendChild(routes[veh[selIdx].r]);
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-sel]');
        if (b) select(+b.dataset.sel);
      });
      root.querySelectorAll('.chip').forEach((c) => c.addEventListener('click', () => root.querySelectorAll('.chip').forEach((o) => o.classList.toggle('on', o === c))));
      // motion: trucks advance along their routes (transform only); wraps at the destination
      let t0 = performance.now();
      const frame = (t) => {
        if (!root.isConnected) return;
        const dt = Math.min(0.1, (t - t0) / 1000);
        t0 = t;
        if (!root.dataset.paused) {
          veh.forEach((v) => {
            if (v.r < 0) return;
            const before = v.p;
            v.p += (dt * v.speed) / len[v.r];
            stopsAt[v.r].forEach((f, k) => {
              if (before < f && v.p >= f) {
                delivered += 1;
                const el = $('[data-s=del]');
                el.textContent = delivered;
                say(`${v.id} delivered at ${names[v.r][k]}`);
              }
            });
            if (v.p >= 1) {
              v.p = 0;
              delivered = 38;
              $('[data-s=del]').textContent = delivered;
            }
          });
          place();
          if (t - lastText > 700) { lastText = t; text(); }
        }
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(500px,560px)';
      (async () => {
        await wait(2200);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          if (selIdx !== 1 && idle()) await tap($('[data-sel="1"]'));
          await wait(3800);
          if (idle()) await tap($('[data-sel="0"]'));
          await wait(3800);
          if (idle()) await tap($('[data-sel="2"]'));
          await wait(3800);
          if (idle() && selIdx === 2) await tap($('[data-sel="2"]'));
          await wait(2000);
        }
      })();
    },
    prompt: `Build a logistics fleet tracking screen (Atlas Freight) as one full-viewport page: a full-bleed route map with floating panels.

Layout: the map is an inline SVG that fills the screen (preserveAspectRatio="xMidYMid slice", viewBox 1024 by 768): a pale surface, city blocks from a repeating pattern of rounded squares, white road strokes (15px, round caps, with a faint dotted center line) crossing it, a soft blue water shape in a corner, depots as white rounded squares with a building or box icon and a label, three routes as dashed accent-line paths, small stop circles along each route (white with an accent ring, solid accent once passed) and trucks as 34px accent circles with a white truck icon and the vehicle ID underneath (an amber circle for a delayed truck). Floating on top: a 300px glass-free white card top-left (logo tile, name, "Fleet live" time, three mini stats: Active, Delivered, On time) and a 300px full-height panel on the right: "Vehicles" title with a Live pill, filter chips (All, On route, Delayed), then vehicle rows (icon tile, ID, driver and destination, status pill, ETA in mono).

Motion: each truck advances along its route with path.getPointAtLength(length * progress) in a requestAnimationFrame loop, written as a transform on the truck group (never left/top); passing a stop fills that stop, increments Delivered and shows a toast; at the end of its route it wraps to the start. Selecting a vehicle row highlights it on accent-soft, turns its route solid, dims the other routes and trucks to 35-45% opacity, adds a ring pulse around its truck and opens a detail row (grid-template-rows 0fr to 1fr, 500ms) with a progress bar (scaleX), percent and next stop. ETAs update live. Buttons scale to .95 on press.

Accessibility: rows are buttons with focus rings, delay is written as a "Delayed" label as well as the amber color, the map has an aria-label, prefers-reduced-motion removes the ring pulse. Phone layout under 760px: the map becomes a 300px block at the top and the vehicle panel flows below it.

Plain HTML, CSS, SVG and JS, no libraries; React-friendly structure (FleetMap, RouteLayer, TruckMarker, FleetSummary, VehiclePanel, VehicleRow, Toast). Use your brand's accent color; amber only for delays.`,
  });

  ML.add({
    id: 'app-industry-school',
    cat: 'app-industry',
    title: 'School LMS admin',
    sub: 'Submissions tick in, a reminder goes out',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.grad, 18)}</span><div><b>Kestrel Academy</b><small>Fall term 2026</small></div></div>
    <nav class="nav" aria-label="Main">
      <button class="it on" type="button">${I(P.book)}<span>Courses</span></button>
      <button class="it" type="button">${I(P.users)}<span>Students</span><em>1,284</em></button>
      <button class="it" type="button">${I(P.cal)}<span>Calendar</span></button>
      <button class="it" type="button">${I(P.chart)}<span>Grades</span></button>
      <button class="it" type="button">${I(P.mail)}<span>Messages</span><em>6</em></button>
    </nav>
    <div class="me"><span class="av">AL</span><p><b>Ana Lim</b><small>Academic admin</small></p></div>
  </aside>
  <main class="page sc">
    <div class="head">
      <div><h1>Courses</h1><p class="sub">6 active courses - 164 students in Grades 9 to 11</p></div>
      <button class="ghost" type="button">${I(P.cal, 16)}Fall term</button>
      <button class="cta" type="button">${I(P.plus, 16)}New course</button>
    </div>
    <div class="kpis">
      <div class="card kpi"><p class="k">Enrolled</p><p class="big">1,284</p><span class="dl">+42</span></div>
      <div class="card kpi"><p class="k">Avg completion</p><p class="big">72%</p><span class="dl">+3%</span></div>
      <div class="card kpi"><p class="k">Due this week</p><p class="big">14</p><span class="st o">4 today</span></div>
      <div class="card kpi"><p class="k">At risk</p><p class="big">23</p><span class="dl dn">+5</span></div>
    </div>
    <div class="row">
      <section class="card cs"><div class="ph2"><p class="t">Course progress</p><button class="link" type="button">View all</button></div><div class="clist"></div></section>
      <section class="card dueb"><div class="ph2"><p class="t">Due this week</p><span class="st"><i class="ping"></i>Live</span></div><div class="dlist"></div></section>
    </div>
  </main>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:grid;grid-template-columns:232px minmax(0,1fr)}
.d .side{display:flex;flex-direction:column;min-height:0;padding:20px 14px 16px;background:linear-gradient(180deg,#EEF4FF,#F6F9FF);border-right:1px solid var(--ml-accent-line)}
.d .brand{display:flex;align-items:center;gap:11px;padding:0 6px 22px}
.d .brand b{display:block;font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .brand small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .mark{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:11px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .nav{display:flex;flex-direction:column;gap:2px}
.d .it{display:flex;align-items:center;gap:11px;width:100%;height:40px;padding:0 10px;border-radius:11px;font-size:14px;font-weight:550;text-align:left;color:var(--ml-ink-2);transition:background-color .2s ease,color .2s ease}
.d .it svg{flex:none;color:var(--ml-muted)}
.d .it:hover{background:rgba(255,255,255,.7)}
.d .it.on{background:var(--ml-bg);color:var(--ml-accent-ink);font-weight:600;box-shadow:0 1px 3px rgba(35,15,10,.1)}
.d .it.on svg{color:var(--ml-accent)}
.d .it em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-bg);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .me{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 0;border-top:1px solid var(--ml-accent-line)}
.d .me p{display:flex;flex-direction:column}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .page{display:flex;flex-direction:column;padding:24px 28px 26px}
.d .head{display:flex;flex:none;align-items:center;gap:10px}
.d .head > div{flex:1;min-width:0}
.d .sub{margin-top:5px;font-size:13.5px;color:var(--ml-muted)}
.d .kpis{display:grid;flex:none;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:20px}
.d .kpi{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:16px}
.d .row{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);flex:1 0 auto;gap:14px;margin-top:14px}
.d .cs,.d .dueb{display:flex;flex-direction:column;padding:16px 18px 8px;min-width:0}
.d .clist,.d .dlist{display:flex;flex:1;flex-direction:column;justify-content:space-around}
.d .ph2{display:flex;align-items:center;justify-content:space-between;margin-bottom:4px}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .link{font-size:12.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .cr{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--ml-line)}
.d .clist > :last-child .cr,.d .dlist > :last-child .cr{border-bottom:0}
.d .ci{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .cr > div{flex:1;min-width:0}
.d .cr b{display:block;font-size:13.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .cr small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .pr{display:flex;align-items:center;gap:9px;width:150px}
.d .pb{flex:1;height:6px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .pb i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--w));transform-origin:0 50%;transition:transform 700ms var(--ml-spring)}
.d .pr span{width:34px;text-align:right;font:600 12px/1 var(--ml-mono);color:var(--ml-ink-2)}
.d .dd{display:grid;gap:7px;justify-items:end}
.d .dd .btn{width:86px;height:28px}
.d .due{font:600 11px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d .sbm{display:flex;align-items:center;gap:7px;margin-top:7px}
.d .sbm .pb{max-width:110px}
.d .sbm span{font:600 11.5px/1 var(--ml-mono);color:var(--ml-muted)}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .sub,.d .ghost{display:none}
  .d .page{padding:18px 16px}
  .d .kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .row{grid-template-columns:minmax(0,1fr)}
  .d .pr{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const ic = {
        pulse: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
        chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
        bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
        book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      };
      const svg = (p) => `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
      const base = [
        ['Biology 9', 'Ms. Elena Petrova', 64, 'pulse'], ['Algebra II', 'Mr. Daniel Okafor', 71, 'chart'],
        ['Chemistry', 'Ms. Priya Nair', 58, 'bulb'], ['World History', 'Mr. Sam Whitfield', 82, 'book'],
        ['English Literature', 'Ms. Ana Lim', 76, 'book'], ['Art and Design', 'Mr. Luis Ortega', 90, 'star'],
      ];
      const dueBase = [
        ['Essay 2: Cell division', 'Biology 9', 'Fri', 18, 28, 0], ['Problem set 5', 'Algebra II', 'Fri', 21, 28, 1],
        ['Lab report 3', 'Chemistry', 'Mon', 11, 24, 2], ['Reading quiz 4', 'World History', 'Tue', 30, 32, 3],
      ];
      let courses = base.map((c) => c.slice());
      let due = dueBase.map((d) => d.slice());
      let reminded = false;
      const drawC = () => {
        $('.clist').innerHTML = courses
          .map((c) => `<div><div class="cr"><span class="ci">${svg(ic[c[3]])}</span><div><b>${c[0]}</b><small>${c[1]}</small></div><div class="pr"><span class="pb"><i style="--w:${c[2] / 100}"></i></span><span class="n">${c[2]}%</span></div></div></div>`)
          .join('');
      };
      const drawD = () => {
        $('.dlist').innerHTML = due
          .map((d, i) => `<div><div class="cr"><div><b>${d[0]}</b><small>${d[1]} - due <span class="due">${d[2]}</span></small><div class="sbm"><span class="pb"><i style="--w:${d[3] / d[4]}"></i></span><span class="n">${d[3]}/${d[4]}</span></div></div><div class="dd">${i === 0 && reminded ? '<button class="btn done" type="button" data-rm="0">Reminded</button>' : `<button class="btn" type="button" data-rm="${i}">Remind</button>`}</div></div></div>`)
          .join('');
      };
      drawC();
      drawD();
      const bump = (i) => {
        const d = due[i];
        if (d[3] >= d[4]) return;
        d[3] += 1;
        const row = root.querySelectorAll('.dlist .cr')[i];
        row.querySelector('.sbm i').style.setProperty('--w', d[3] / d[4]);
        row.querySelector('.sbm .n').textContent = `${d[3]}/${d[4]}`;
        const c = courses[d[5]];
        if (i % 2 === 0) {
          c[2] += 1;
          const cr = root.querySelectorAll('.clist .cr')[d[5]];
          cr.querySelector('.pb i').style.setProperty('--w', c[2] / 100);
          cr.querySelector('.n').textContent = c[2] + '%';
        }
      };
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-rm]');
        if (!b || b.classList.contains('done')) return;
        b.classList.add('done');
        b.textContent = 'Reminded';
        if (b.dataset.rm === '0') reminded = true;
        say(`Reminder sent to ${due[b.dataset.rm][4] - due[b.dataset.rm][3]} students`);
      });
      const reset = () => {
        courses = base.map((c) => c.slice());
        due = dueBase.map((d) => d.slice());
        reminded = false;
        drawC();
        drawD();
      };

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(760px,560px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1300);
          bump(0);
          await wait(900);
          bump(1);
          await wait(900);
          bump(0);
          await wait(800);
          if (idle()) await tap($('[data-rm="0"]'));
          await wait(1200);
          bump(2);
          await wait(1000);
          bump(3);
          cur.classList.add('off');
          await wait(2600);
        }
      })();
    },
    prompt: `Build a school LMS admin dashboard (Kestrel Academy) as one full-viewport screen with a tinted left sidebar.

Layout: grid columns 232px and minmax(0,1fr). Sidebar: a very light blue vertical gradient with an accent-line right border, brand block (36px logo tile, school name, term), nav items 40px tall (Courses selected as a white pill with a soft shadow, Students with a count pill, Calendar, Grades, Messages with a count) and the signed-in admin at the bottom. Content (scrolls, padding 24px 28px): title "Courses" with a subtitle, a term ghost button and a primary "New course" button; four KPI cards (Enrolled, Avg completion, Due this week with an amber "4 today" pill, At risk with a red delta); then two columns, minmax(0,1.25fr) and minmax(0,1fr). Left card "Course progress": rows with a subject icon tile, course name, teacher and class size, and a 150px progress bar with a mono percent. Right card "Due this week" with a Live pill: rows with the assignment name, course and due day in mono, a submission bar with "18/28", and a Remind button (86px).

Motion: submissions arrive live: the submission bar scales from the left (scaleX, spring 587ms), the count updates and the matching course progress bar nudges forward. Pressing Remind turns the button into a green Reminded state and a toast confirms how many students were notified. Nav items and buttons respond with a color transition, buttons scale to .95 on press at 90ms.

Accessibility: nav items and buttons are real buttons with focus rings, progress is also written as text, prefers-reduced-motion removes the live ping. Phone layout under 760px: hide the sidebar and subtitle, KPIs two per row, stack the two cards, hide the row progress bars.

Plain HTML, CSS and JS, no libraries; React-friendly structure (Sidebar, KpiCard, CourseProgressList, CourseRow, DueList, DueRow, Toast). Use your brand's accent color.`,
  });

  ML.add({
    id: 'app-industry-hr',
    cat: 'app-industry',
    title: 'HR people overview',
    sub: 'A candidate advances, leave gets approved',
    html: `
<div class="app">
  <header class="nav">
    <div class="brand"><span class="mark">${I(P.users, 17)}</span><b>Kestrel &amp; Co</b></div>
    <nav class="tabs" aria-label="Main">
      <button class="tab on" type="button">People</button><button class="tab" type="button">Hiring<em>7</em></button><button class="tab" type="button">Time off<em data-s="pend">2</em></button><button class="tab" type="button">Payroll</button>
    </nav>
    <label class="search">${I(P.search, 16)}<input type="search" placeholder="Search people" aria-label="Search"></label>
    <span class="av">SW</span>
  </header>
  <main class="page sc">
    <div class="head"><div><h1>People</h1><p class="sub">148 employees across 5 teams - 3 offices</p></div><button class="ghost" type="button">${I(P.cal, 16)}Q4 2026</button><button class="cta" type="button">${I(P.plus, 16)}Add role</button></div>
    <div class="top">
      <section class="card hc">
        <div class="ph2"><div><p class="k">Headcount</p><p class="big">148</p></div><span class="dl">+6 this quarter</span></div>
        <div class="seg"></div>
        <div class="lg"></div>
      </section>
      <div class="card kp"><p class="k">Open roles</p><p class="big">7</p><span class="st">3 urgent</span></div>
      <div class="card kp"><p class="k">Time to hire</p><p class="big">26d</p><span class="dl">-3 days</span></div>
    </div>
    <div class="row">
      <section class="card pipe">
        <div class="ph2"><p class="t">Hiring pipeline</p><span class="st m">Support Lead - 72 candidates</span></div>
        <div class="stages"></div>
      </section>
      <section class="card off">
        <div class="ph2"><p class="t">Time off</p><span class="st o" data-s="pc">2 pending</span></div>
        <div class="reqs"></div>
        <p class="lbl">Out this week</p>
        <div class="out"></div>
      </section>
    </div>
  </main>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:flex;flex-direction:column}
.d .nav{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;font-size:15px;letter-spacing:-.02em}
.d .brand b{font-weight:650}
.d .mark{display:grid;place-items:center;width:32px;height:32px;border-radius:10px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .tabs{display:flex;gap:4px;margin-left:20px;padding:4px;border-radius:13px;background:var(--ml-surface)}
.d .tab{display:flex;align-items:center;gap:7px;height:34px;padding:0 13px;border-radius:10px;font-size:13.5px;font-weight:600;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease}
.d .tab.on{background:var(--ml-bg);color:var(--ml-ink);box-shadow:0 1px 3px rgba(35,15,10,.12)}
.d .tab em{padding:3px 6px;border-radius:999px;background:var(--ml-accent-soft);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-accent-ink)}
.d .search{display:flex;align-items:center;gap:8px;width:230px;height:38px;margin-left:auto;padding:0 12px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font:inherit;font-size:13.5px;color:var(--ml-ink)}
.d .page{display:flex;flex:1;flex-direction:column;padding:22px 28px 26px}
.d .head{display:flex;flex:none;align-items:center;gap:10px}
.d .head > div{flex:1;min-width:0}
.d .sub{margin-top:5px;font-size:13.5px;color:var(--ml-muted)}
.d .top{display:grid;flex:none;grid-template-columns:minmax(0,2fr) minmax(0,1fr) minmax(0,1fr);gap:14px;margin-top:18px}
.d .hc{padding:16px 18px}
.d .ph2{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}
.d .hc .big{margin-top:8px;font-size:30px}
.d .seg{display:flex;gap:3px;height:12px;margin-top:14px}
.d .seg i{display:block;border-radius:4px;transform-origin:0 50%}
.d .lg{display:flex;flex-wrap:wrap;gap:6px 14px;margin-top:11px;font-size:12px;color:var(--ml-muted)}
.d .lg span{display:inline-flex;align-items:center;gap:6px}
.d .lg i{width:8px;height:8px;border-radius:50%}
.d .lg b{font-weight:600;color:var(--ml-ink)}
.d .kp{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:16px}
.d .row{display:grid;grid-template-columns:minmax(0,2fr) minmax(0,1fr);flex:1 0 auto;gap:14px;margin-top:14px}
.d .pipe,.d .off{display:flex;flex-direction:column;padding:16px 16px 12px;min-width:0}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .stages{display:grid;flex:1;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px;margin-top:12px}
.d .stg{padding:8px;border-radius:13px;background:rgba(227,233,242,.45);min-height:276px}
.d .sh{display:flex;align-items:center;justify-content:space-between;padding:2px 3px 8px;font-size:12.5px;font-weight:650}
.d .sh em{font:650 12px/1 var(--ml-mono);font-style:normal;color:var(--ml-accent-ink)}
.d .gw{padding-bottom:7px}
.d .cd{display:flex;align-items:center;gap:8px;padding:9px;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 2px rgba(35,15,10,.05)}
.d .cd .av{width:28px;height:28px;font-size:10.5px}
.d .cd div{flex:1;min-width:0}
.d .cd b{display:block;font-size:12.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .cd small{display:block;font-size:11px;color:var(--ml-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .adv{display:grid;flex:none;place-items:center;width:26px;height:26px;border-radius:8px;background:var(--ml-accent-soft);color:var(--ml-accent);transition:transform 90ms ease-out}
.d .more{padding:4px 4px 0;font-size:11.5px;color:var(--ml-muted)}
.d .reqs{display:flex;flex:1;flex-direction:column;justify-content:flex-start}
.d .rq{display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid var(--ml-line)}
.d .rq > div{flex:1;min-width:0}
.d .rq b{display:block;font-size:13.5px;font-weight:600}
.d .rq small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .rq .btn{height:28px}
.d .xb{display:grid;place-items:center;width:28px;height:28px;border-radius:9px;color:var(--ml-muted);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .off .lbl{margin:14px 0 8px}
.d .out{display:flex;gap:8px;padding-bottom:4px}
.d .out > div{display:flex;flex-direction:column;align-items:center;gap:5px;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .out .pop{animation:ind-pop 520ms var(--ml-bounce) both}
@container scr (max-width: 760px){
  .d .tabs,.d .search,.d .sub,.d .ghost{display:none}
  .d .nav{padding:0 16px}
  .d .brand{margin-right:auto}
  .d .page{padding:18px 16px}
  .d .top{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
  .d .hc{grid-column:1/-1}
  .d .row{grid-template-columns:minmax(0,1fr)}
  .d .stages{grid-template-columns:repeat(2,minmax(0,1fr))}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const depts = [['Engineering', 52, '#FF4433'], ['Operations', 31, '#FF7A3D'], ['Sales', 28, '#8CC0FF'], ['Support', 21, '#FFD0CA'], ['People', 16, '#E2D6CC']];
      $('.seg').innerHTML = depts.map(([n, v, c]) => `<i style="flex:${v};background:${c}"></i>`).join('');
      $('.lg').innerHTML = depts.map(([n, v, c]) => `<span><i style="background:${c}"></i>${n} <b class="n">${v}</b></span>`).join('');
      const base = [
        { n: 'Applied', c: 42, l: [['Tomas Lindqvist', 'Support Lead', ''], ['Elena Petrova', 'Support Lead', 'b']] },
        { n: 'Screen', c: 18, l: [['Aiko Tan', 'Support Lead', 'c'], ['Carlos Mendoza', 'Support Lead', '']] },
        { n: 'Interview', c: 9, l: [['Daniel Okafor', 'Support Lead', 'b'], ['Isabel Cruz', 'Support Lead', 'c']] },
        { n: 'Offer', c: 3, l: [['Jia Wen', 'Support Lead', '']] },
      ];
      let st = base.map((s) => ({ ...s, l: s.l.map((x) => x.slice()) }));
      let freshName = '';
      const ini = (n) => n.split(' ').map((x) => x[0]).join('');
      const drawS = () => {
        $('.stages').innerHTML = st
          .map((s, si) => {
            const cards = s.l
              .map((x, i) => {
                const inner = `<div class="gw"><div class="cd"><span class="av ${x[2]}">${ini(x[0])}</span><div><b>${x[0].split(" ")[0]} ${x[0].split(" ")[1][0]}.</b><small>${x[1]}</small></div>${si === 2 && i === 0 && x[0] === 'Daniel Okafor' ? `<button class="adv" type="button" aria-label="Advance ${x[0]} to Offer" data-adv>${'<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>'}</button>` : ''}</div></div>`;
                return x[0] === freshName ? `<div class="grow">${inner}</div>` : inner;
              })
              .join('');
            return `<div class="stg"><div class="sh"><span>${s.n}</span><em class="n">${s.c}</em></div>${cards}<p class="more">+${s.c - s.l.length} more</p></div>`;
          })
          .join('');
      };
      drawS();
      let reqs = [['HK', 'Hana Kim', 'Oct 20-22', 'Annual leave', ''], ['LO', 'Luis Ortega', 'Oct 27-28', 'Personal', 'b']];
      const out = [['AL', 'Mon'], ['PN', 'Tue'], ['KM', 'Wed-Thu'], ['NH', 'Fri']];
      let approved = false;
      const drawR = () => {
        $('.reqs').innerHTML = reqs
          .map((r, i) => `<div><div class="rq"><span class="av ${r[4]}">${r[0]}</span><div><b>${r[1]}</b><small>${r[2]} - ${r[3]}</small></div>${i === 0 && approved ? '<span class="st g">Approved</span>' : `<button class="btn" type="button" data-ap="${i}">Approve</button><button class="xb" type="button" aria-label="Decline ${r[1]}"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>`}</div></div>`)
          .join('');
        $('.out').innerHTML = out.map(([a, d]) => `<div><span class="av c">${a}</span>${d}</div>`).join('') + (approved ? '<div class="pop"><span class="av">HK</span>Oct 20+</div>' : '');
        const n = approved ? 1 : 2;
        $('[data-s=pc]').textContent = `${n} pending`;
        $('[data-s=pend]').textContent = n;
      };
      drawR();
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      let advanced = false;
      const advance = () => {
        if (advanced) return;
        advanced = true;
        const c = st[2].l.shift();
        st[2].c -= 1;
        st[3].l.unshift(c);
        st[3].c += 1;
        freshName = c[0];
        drawS();
        freshName = '';
        say('Daniel Okafor moved to Offer');
      };
      const approve = () => {
        if (approved) return;
        approved = true;
        drawR();
        say('Hana Kim - leave approved');
      };
      root.addEventListener('click', (e) => {
        if (e.target.closest('[data-adv]')) advance();
        const b = e.target.closest('[data-ap]');
        if (b) b.dataset.ap === '0' ? approve() : ((b.className = 'st g'), (b.textContent = 'Approved'));
      });
      const reset = () => {
        advanced = false;
        approved = false;
        st = base.map((s) => ({ ...s, l: s.l.map((x) => x.slice()) }));
        drawS();
        drawR();
      };
      root.querySelectorAll('.tab').forEach((t) => t.addEventListener('click', () => root.querySelectorAll('.tab').forEach((o) => o.classList.toggle('on', o === t))));

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(560px,200px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1300);
          if (idle()) await tap($('[data-adv]'));
          await wait(2200);
          if (idle()) await tap($('[data-ap="0"]'));
          await wait(3600);
          cur.classList.add('off');
        }
      })();
    },
    prompt: `Build an HR people dashboard (Kestrel & Co) as one full-viewport screen with a top navigation bar and no sidebar.

Layout: a 64px top bar: logo tile and company name, a segmented tab control (People selected as a white pill with a soft shadow, Hiring with a count, Time off with a pending count, Payroll), a search field and the avatar. Page: title "People" with a subtitle, a quarter ghost button and a primary "Add role" button. Row 1 (grid 2fr 1fr 1fr): a Headcount card (big 148, a green "+6 this quarter" pill, a 12px stacked segment bar split by team in five steps of your accent color from full to pale, and a legend with each team's count) and two small KPI cards (Open roles with a pill, Time to hire with a green delta). Row 2 (grid minmax(0,1.6fr) minmax(0,1fr)): a "Hiring pipeline" card with four stage lanes (Applied 42, Screen 18, Interview 9, Offer 3), each a tinted rounded lane with a header count and 1-2 candidate cards (initials avatar, name, role) plus "+N more"; and a "Time off" card with pending requests (avatar, name, dates and type, an Approve button and a small decline button) and an "Out this week" strip of avatars with day labels.

Behavior and motion: pressing the arrow on an Interview candidate moves them into Offer (the card grows in with grid-template-rows 0fr to 1fr and opacity, 560ms, counts update). Approving leave swaps the buttons for a green Approved pill, decrements the pending counts in the tab and the card, shows a toast and pops a new avatar into the "Out this week" strip (scale .6 to 1.06 to 1). Buttons scale to .95 on press at 90ms.

Accessibility: tabs and actions are real buttons with focus rings and descriptive aria-labels, status always has text, prefers-reduced-motion removes the pop. Phone layout under 760px: hide tabs, search and subtitle, headcount spans the full row with the two KPIs below it, pipeline lanes two per row, cards stack.

Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, HeadcountCard, KpiCard, PipelineBoard, StageLane, CandidateCard, TimeOffPanel, RequestRow, Toast). Use your brand's accent color.`,
  });

  ML.add({
    id: 'app-industry-property',
    cat: 'app-industry',
    title: 'Property management',
    sub: 'A unit pays rent, the grid updates',
    html: `
<div class="app">
  <aside class="dock" aria-label="Main">
    <span class="mark">${I(P.building, 18)}</span>
    <button class="ri on" type="button" aria-label="Units">${I(P.dash, 20)}</button>
    <button class="ri" type="button" aria-label="Tenants">${I(P.users, 20)}</button>
    <button class="ri" type="button" aria-label="Rent">${I(P.dollar, 20)}</button>
    <button class="ri" type="button" aria-label="Maintenance">${I(P.wrench, 20)}</button>
    <button class="ri" type="button" aria-label="Documents">${I(P.book, 20)}</button>
    <span class="av">RS</span>
  </aside>
  <main class="page sc">
    <div class="head">
      <div><p class="k">Tidewater Property Management</p><h1><button class="bsel" type="button">Marlin Court${I(P.chevD, 20)}</button></h1><p class="sub">40 units - 5 floors - 214 Marlin Way</p></div>
      <button class="ghost" type="button">${I(P.cal, 16)}October</button>
      <button class="cta" type="button">${I(P.plus, 16)}Add tenant</button>
    </div>
    <div class="kpis">
      <div class="card kpi"><p class="k">Occupancy</p><p class="big">92%</p><span class="st">37 of 40 units</span></div>
      <div class="card kpi rent"><div class="ph2"><p class="k">Rent collected</p><span class="n pc" data-s="pc">76%</span></div><p class="big n" data-v="38220">$38,220</p><span class="pb"><i style="--w:.757"></i></span><p class="k">of $50,505 - <b class="n" data-v="12285" data-s="out">$12,285</b> outstanding</p></div>
      <div class="card kpi"><p class="k">Open requests</p><p class="big n" data-s="req">3</p><span class="st o">1 high priority</span></div>
    </div>
    <div class="row">
      <section class="card units">
        <div class="ph2"><p class="t">Unit occupancy</p><p class="lg"><i class="a"></i>Paid<i class="b"></i>Due<i class="c"></i>Vacant<i class="d"></i>Repair</p></div>
        <div class="ugrid"></div>
      </section>
      <section class="card mnt">
        <div class="ph2"><p class="t">Maintenance</p><span class="st o" data-s="mc">3 open</span></div>
        <div class="mlist"></div>
      </section>
    </div>
  </main>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:grid;grid-template-columns:84px minmax(0,1fr)}
.d .dock{align-self:center;justify-self:center;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 8px;border-radius:24px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow-lg)}
.d .mark{display:grid;place-items:center;width:40px;height:40px;margin-bottom:10px;border-radius:13px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .ri{display:grid;place-items:center;width:46px;height:46px;border-radius:15px;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease}
.d .ri:hover{background:var(--ml-surface);color:var(--ml-ink)}
.d .ri.on{background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .dock .av{margin-top:10px}
.d .page{display:flex;flex-direction:column;padding:24px 28px 26px 6px}
.d .head{display:flex;flex:none;align-items:center;gap:10px}
.d .head > div{flex:1;min-width:0}
.d .bsel{display:inline-flex;align-items:center;gap:6px;margin-top:2px;font-size:26px;font-weight:650;letter-spacing:-.03em;line-height:1.1}
.d .bsel svg{margin-top:3px;color:var(--ml-muted)}
.d .sub{margin-top:5px;font-size:13.5px;color:var(--ml-muted)}
.d .kpis{display:grid;flex:none;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr) minmax(0,1fr);gap:14px;margin-top:18px}
.d .kpi{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:16px}
.d .rent{align-items:stretch}
.d .ph2{display:flex;align-items:center;justify-content:space-between;gap:8px}
.d .pc{font-size:13px;font-weight:650;color:var(--ml-accent-ink)}
.d .pb{display:block;height:7px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .pb i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(var(--w));transform-origin:0 50%;transition:transform 800ms var(--ml-spring)}
.d .rent .k b{font-weight:600;color:var(--ml-ink)}
.d .row{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);flex:1 0 auto;gap:14px;margin-top:14px}
.d .units,.d .mnt{display:flex;flex-direction:column;padding:16px 18px 14px;min-width:0}
.d .mlist{display:flex;flex:1;flex-direction:column;justify-content:flex-start}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .lg{display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--ml-muted)}
.d .lg i{width:9px;height:9px;border-radius:3px;margin-left:8px}
.d .lg i.a{margin-left:0;background:var(--ml-accent)}
.d .lg i.b{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .lg i.c{background:var(--ml-surface);box-shadow:inset 0 0 0 1.5px var(--ml-bar)}
.d .lg i.d{background:#FFE9C7;box-shadow:inset 0 0 0 1.5px #FF9F0A}
.d .ugrid{display:grid;grid-template-columns:30px repeat(8,minmax(0,1fr));grid-template-rows:repeat(5,minmax(58px,1fr));flex:1;gap:6px;margin-top:14px;align-items:stretch}
.d .fl{align-self:center}
.d .fl{font:600 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .u{display:grid;place-items:center;min-height:0;border-radius:11px;font:600 12.5px/1 var(--ml-mono);background:var(--ml-accent);color:#fff;transition:background-color .45s ease,box-shadow .45s ease,color .45s ease,transform 90ms ease-out}
.d .u.due{background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .u.vac{background:var(--ml-surface);color:var(--ml-muted);box-shadow:inset 0 0 0 1.5px var(--ml-bar);background-image:repeating-linear-gradient(135deg,transparent 0 5px,rgba(220,228,240,.5) 5px 10px)}
.d .u.fix{background:#FFE9C7;color:#B25E00;box-shadow:inset 0 0 0 1.5px #FF9F0A}
.d .u svg{display:block}
.d .u.flash{animation:pm-flash 900ms ease-out}
.d .u:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
@keyframes pm-flash{0%{transform:scale(1)}30%{transform:scale(1.14)}100%{transform:scale(1)}}
.d .mr{display:flex;align-items:center;gap:11px;padding:12px 0;border-bottom:1px solid var(--ml-line)}
.d .mlist > :last-child .mr{border-bottom:0}
.d .mi{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .mi.hi{background:rgba(255,59,48,.1);color:#D70015}
.d .mr > div{flex:1;min-width:0}
.d .mr b{display:block;font-size:13.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .mr small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .mr .btn{height:28px;padding:0 10px}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .dock,.d .sub,.d .ghost,.d .lg{display:none}
  .d .page{padding:18px 16px}
  .d .kpis{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
  .d .rent{grid-column:1/-1;order:-1}
  .d .row{grid-template-columns:minmax(0,1fr)}
  .d .ugrid{grid-template-rows:repeat(5,38px)}
  .d .u{font-size:11px}
}
@media (prefers-reduced-motion: reduce){.d .u.flash{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const vac = ['105', '302', '408'], fix = ['204', '407'];
      const dueIds = ['102', '107', '203', '206', '301', '305', '404', '502', '506'];
      const wrenchSvg = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/></svg>';
      let html = '';
      for (let f = 5; f >= 1; f--) {
        html += `<span class="fl">F${f}</span>`;
        for (let n = 1; n <= 8; n++) {
          const id = `${f}0${n}`;
          const cls = vac.includes(id) ? 'vac' : fix.includes(id) ? 'fix' : dueIds.includes(id) ? 'due' : '';
          html += `<button class="u ${cls}" type="button" data-u="${id}" aria-label="Unit ${id}">${cls === 'fix' ? wrenchSvg : id}</button>`;
        }
      }
      $('.ugrid').innerHTML = html;
      const money = (v) => '$' + Math.round(v).toLocaleString('en-US');
      const roll = (el, to, fmt) => {
        const from = parseFloat(el.dataset.v);
        el.dataset.v = to;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 750);
          el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const collected = $('[data-v="38220"]');
      const outstanding = $('[data-s=out]');
      const pbar = $('.rent .pb i');
      const pcEl = $('[data-s=pc]');
      let paid = 0;
      const setRent = (n) => {
        roll(collected, 38220 + n * 1365, money);
        roll(outstanding, 12285 - n * 1365, money);
        pbar.style.setProperty('--w', (38220 + n * 1365) / 50505);
        pcEl.textContent = Math.round(((38220 + n * 1365) / 50505) * 100) + '%';
      };
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      const markPaid = (el) => {
        if (!el.classList.contains('due')) return;
        el.classList.remove('due');
        el.classList.add('flash');
        setTimeout(() => el.classList.remove('flash'), 950);
        paid += 1;
        setRent(paid);
        say(`Unit ${el.dataset.u} paid $1,365`);
        return true;
      };
      root.addEventListener('click', (e) => {
        const u = e.target.closest('.u');
        if (u) markPaid(u);
      });
      const reqs = [
        ['204', 'Leaking kitchen faucet', 'High - Rafael S.', 'hi'], ['407', 'Heater not turning on', 'Medium - Isabel C.', ''], ['301', 'Door lock sticks', 'Low - Rafael S.', ''],
      ];
      let open = reqs.slice();
      const drawM = () => {
        $('.mlist').innerHTML = open
          .map((r) => `<div data-m="${r[0]}"><div class="mr"><span class="mi ${r[3]}">${wrenchSvg}</span><div><b>${r[1]}</b><small>Unit ${r[0]} - ${r[2]}</small></div><button class="btn" type="button" data-rs="${r[0]}">Resolve</button></div></div>`)
          .join('');
        $('[data-s=mc]').textContent = `${open.length} open`;
        $('[data-s=req]').textContent = open.length;
      };
      drawM();
      const drop = (el) => {
        el.classList.add('shrink');
        setTimeout(() => el.remove(), 450);
      };
      const resolve = (id) => {
        const r = open.find((x) => x[0] === id);
        if (!r) return;
        open = open.filter((x) => x !== r);
        const row = $(`[data-m="${id}"]`);
        row.querySelector('.btn').className = 'btn done';
        row.querySelector('.btn').textContent = 'Done';
        setTimeout(() => drop(row), 500);
        $('[data-s=mc]').textContent = `${open.length} open`;
        $('[data-s=req]').textContent = open.length;
        const cell = $(`[data-u="${id}"]`);
        if (cell && cell.classList.contains('fix')) {
          cell.classList.remove('fix');
          cell.textContent = id;
          cell.classList.add('flash');
        }
        say(`Request resolved - unit ${id}`);
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-rs]');
        if (b) resolve(b.dataset.rs);
      });
      const reset = () => {
        if (paid) {
          paid = 0;
          setRent(0);
          dueIds.forEach((id) => $(`[data-u="${id}"]`).classList.add('due'));
        }
        if (open.length < 3) {
          open = reqs.slice();
          drawM();
          fix.forEach((id) => {
            const c = $(`[data-u="${id}"]`);
            c.classList.add('fix');
            c.innerHTML = wrenchSvg;
          });
        }
      };

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(520px,700px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1300);
          if (idle()) await tap($('[data-u="206"]'));
          await wait(1500);
          if (idle()) await tap($('[data-u="305"]'));
          await wait(1800);
          if (idle()) await tap($('[data-rs="204"]'));
          await wait(3400);
          cur.classList.add('off');
        }
      })();
    },
    prompt: `Build a property management dashboard (Tidewater Property Management, building "Marlin Court") as one full-viewport screen with a floating icon dock on the left.

Layout: grid columns 84px and minmax(0,1fr). The dock is a detached vertical pill (24px radius, white, hairline ring and a large soft shadow, vertically centered): logo tile, five 46px icon buttons (Units selected on accent-soft, Tenants, Rent, Maintenance, Documents) and the manager avatar. Content (scrolls): a small company line, the building name as a 26px title that is also a building switcher button with a chevron, a subtitle, an October ghost button and a primary "Add tenant" button. KPI row (grid 1fr 1.5fr 1fr): Occupancy 92% with a "37 of 40 units" pill; Rent collected with a percent, the amount in 28px tabular numbers, a 7px progress bar and "of $50,505 - $12,285 outstanding"; Open requests with a high-priority pill. Body (grid minmax(0,1.7fr) minmax(0,1fr)): a "Unit occupancy" card with a legend and a grid of 40 unit buttons (5 floors by 8 units, floor labels in mono; paid = solid accent with white text, due = accent-soft with a 1.5px accent ring, vacant = pale with hatching and a grey ring, repair = amber with a wrench icon), and a Maintenance card with request rows (icon tile, issue, unit, priority and assignee, a Resolve button).

Behavior and motion: pressing a due unit marks it paid (the fill cross-fades in 450ms and the cell pops scale 1 to 1.14 to 1), Rent collected and Outstanding count to their new values (ease-out cubic, 750ms), the progress bar scales from the left (scaleX, spring 587ms), the percent updates and a toast confirms. Resolving a request turns its button green, collapses the row (grid-template-rows 1fr to 0fr), frees the repair unit and decrements the counts. Buttons scale to .95 on press at 90ms.

Accessibility: every unit is a button with an aria-label, status is also communicated by text and icon not only color, focus rings, prefers-reduced-motion removes the pop. Phone layout under 760px: hide the dock, subtitle and legend, put Rent collected first, stack the grid and the maintenance list.

Plain HTML, CSS and JS, no libraries; React-friendly structure (Dock, BuildingHeader, KpiCard, RentCard, UnitGrid, UnitCell, MaintenanceList, Toast). Use your brand's accent color; amber is only for repairs and high priority is the only red.`,
  });

  ML.add({
    id: 'app-industry-agency',
    cat: 'app-industry',
    title: 'Agency client reporting',
    sub: 'Switch client, the report redraws',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.chart, 17)}</span><div><b>Solace Studio</b><small>Client reports</small></div></div>
    <label class="search">${I(P.search, 16)}<input type="search" placeholder="Search 24 clients" aria-label="Search clients"></label>
    <p class="lbl">Clients</p>
    <nav class="clients" aria-label="Clients"></nav>
  </aside>
  <main class="page sc">
    <div class="chipsrow"></div>
    <div class="head in" style="--i:0">
      <span class="ava"></span>
      <div><h1></h1><p class="sub"></p></div>
      <button class="ghost" type="button">${I(P.cal, 16)}Oct 1 - 15</button>
      <button class="cta" type="button">${I(P.upR, 16)}Export PDF</button>
    </div>
    <div class="kpis"></div>
    <div class="row">
      <section class="card ch in" style="--i:5">
        <div class="ph2"><div><p class="t">Leads per day</p><p class="k">October 1 to 15</p></div><span class="st"><i class="ping"></i>Live</span></div>
        <div class="plot"><svg viewBox="0 0 600 170" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="ml-ag-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF4433" stop-opacity=".2"/><stop offset="1" stop-color="#FF4433" stop-opacity="0"/></linearGradient></defs><g class="gl"><line x1="0" x2="600" y1="42" y2="42"/><line x1="0" x2="600" y1="85" y2="85"/><line x1="0" x2="600" y1="128" y2="128"/></g><path class="area"/><path class="line"/></svg><span class="dot"><i></i></span></div>
        <div class="xs"><span>Oct 1</span><span>Oct 4</span><span>Oct 7</span><span>Oct 10</span><span>Oct 13</span><span>Oct 15</span></div>
      </section>
      <section class="card src in" style="--i:6">
        <div class="ph2"><p class="t">Leads by source</p><span class="st m">All channels</span></div>
        <div class="srcs"></div>
      </section>
    </div>
  </main>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:grid;grid-template-columns:268px minmax(0,1fr)}
.d .side{display:flex;flex-direction:column;min-height:0;padding:20px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:11px;padding:0 6px 16px}
.d .brand b{display:block;font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .brand small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .mark{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:11px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .search{display:flex;align-items:center;gap:8px;height:38px;margin:0 2px 16px;padding:0 11px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .search:focus-within{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font:inherit;font-size:13.5px;color:var(--ml-ink)}
.d .side .lbl{padding:0 8px 8px}
.d .clients{display:flex;flex-direction:column;gap:2px;min-height:0;overflow-y:auto;scrollbar-width:none}
.d .cl{display:flex;align-items:center;gap:11px;width:100%;padding:9px 8px;border-radius:12px;text-align:left;transition:background-color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .cl:hover{background:var(--ml-surface)}
.d .cl.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .ava{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:700}
.d .ava.b{background:var(--ml-accent-line)}
.d .ava.c{background:var(--ml-bar);color:var(--ml-ink-2)}
.d .cl > span:nth-child(2){flex:1;min-width:0}
.d .cl b{display:block;font-size:13.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .cl small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .cl svg{flex:none;width:52px;height:20px;overflow:visible}
.d .cl polyline{fill:none;stroke:var(--ml-accent);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.d .page{display:flex;flex-direction:column;padding:24px 28px 26px}
.d .chipsrow{display:none;flex:none;gap:8px;margin-bottom:14px;overflow-x:auto;scrollbar-width:none}
.d .chipsrow button{flex:none;height:32px;padding:0 13px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .chipsrow button.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .head{display:flex;flex:none;align-items:center;gap:14px}
.d .head .ava{width:48px;height:48px;border-radius:14px;font-size:15px}
.d .head > div{flex:1;min-width:0}
.d .sub{margin-top:5px;font-size:13.5px;color:var(--ml-muted)}
.d .kpis{display:grid;flex:none;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;margin-top:20px}
.d .kpi{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:16px}
.d .row{display:grid;flex:1 0 auto;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:14px;margin-top:14px}
.d .ch,.d .src{display:flex;flex-direction:column;padding:16px 18px 14px;min-width:0}
.d .ph2{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .ph2 .k{margin-top:3px}
.d .plot{position:relative;flex:1;min-height:250px;margin-top:14px}
.d .plot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.d .gl line{stroke:var(--ml-line);stroke-width:1;vector-effect:non-scaling-stroke}
.d .area{fill:url(#ml-ag-fill)}
.d .line{fill:none;stroke:var(--ml-accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.d .dot{position:absolute;right:0;width:12px;height:12px;margin:-6px -6px 0 0;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px #fff,0 2px 6px rgba(255,68,51,.4)}
.d .dot i{position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:ind-ping 2.4s ease-out infinite}
.d .xs{display:flex;justify-content:space-between;margin-top:10px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .srcs{display:flex;flex:1;flex-direction:column;justify-content:space-around;gap:24px;margin-top:22px}
.d .sr{display:grid;grid-template-columns:104px minmax(0,1fr) 62px;align-items:center;gap:10px;font-size:13px}
.d .sr span:first-child{font-weight:550;color:var(--ml-ink-2)}
.d .sb{display:block;height:8px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .sb i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--w));transform-origin:0 50%;transition:transform 700ms var(--ml-spring)}
.d .sr b{text-align:right;font-weight:650}
.d .sr em{margin-left:5px;font-style:normal;font-size:11.5px;font-weight:500;color:var(--ml-muted)}
.d .page.swap .in{animation:ind-in 560ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
.d .page.swap .plot svg{animation:ag-reveal 1000ms var(--ml-ease) 150ms both}
.d .page.swap .dot{animation:ind-fade 600ms ease 800ms both}
.d .page.swap .sb i{animation:ag-grow 800ms var(--ml-ease) 200ms both}
@keyframes ind-fade{from{opacity:0}to{opacity:1}}
@keyframes ag-reveal{from{clip-path:inset(-12px 100% -12px 0)}to{clip-path:inset(-12px -12px -12px 0)}}
@keyframes ag-grow{from{transform:scaleX(0)}}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .ghost{display:none}
  .d .chipsrow{display:flex}
  .d .page{padding:16px}
  .d .kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .row{grid-template-columns:minmax(0,1fr)}
  .d .head .ava{width:40px;height:40px}
  .d .sr{grid-template-columns:92px minmax(0,1fr) 58px}
}
@media (prefers-reduced-motion: reduce){.d .page.swap .in,.d .page.swap .plot svg,.d .page.swap .area,.d .page.swap .dot,.d .page.swap .sb i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const srcNames = ['Search ads', 'Social ads', 'Organic search', 'Referrals', 'Direct'];
      const clients = [
        { n: 'Brightline Dental', i: 'BD', ind: 'Dental - Austin', t: '', leads: 148, appts: 41, cpl: 18.4, conv: 27.7, d: [12.4, 9.1, -4.2, 2.8], src: [52, 38, 31, 19, 8] },
        { n: 'Tidewater Realty', i: 'TR', ind: 'Real estate - Harbor District', t: 'b', leads: 96, appts: 22, cpl: 34.1, conv: 22.9, d: [6.2, 3.4, 1.9, -1.1], src: [30, 28, 18, 14, 6] },
        { n: 'Meridian Foods', i: 'MF', ind: 'Food and beverage - Portland', t: 'c', leads: 212, appts: 58, cpl: 9.8, conv: 27.4, d: [18.8, 15.2, -6.3, 4.1], src: [61, 77, 40, 22, 12] },
        { n: 'Juniper Health', i: 'JH', ind: 'Clinic - Denver', t: '', leads: 87, appts: 33, cpl: 21.6, conv: 37.9, d: [8.5, 11.7, -2.4, 5.6], src: [24, 15, 26, 17, 5] },
        { n: 'Bayside Fitness', i: 'BF', ind: 'Fitness - San Diego', t: 'b', leads: 174, appts: 49, cpl: 12.2, conv: 28.2, d: [14.1, 10.3, -3.8, 2.2], src: [44, 71, 32, 19, 8] },
        { n: 'Atlas Freight', i: 'AF', ind: 'Logistics - Dallas', t: 'c', leads: 64, appts: 12, cpl: 41.3, conv: 18.8, d: [-3.1, -5.4, 2.7, -2.0], src: [22, 9, 17, 11, 5] },
        { n: 'Kestrel & Co', i: 'KC', ind: 'Consulting - Chicago', t: '', leads: 53, appts: 17, cpl: 27.5, conv: 32.1, d: [4.9, 7.3, -1.5, 3.3], src: [12, 10, 14, 13, 4] },
      ];
      // 15 daily values that add up to the client's lead count
      const series = (c, k) => {
        const w = Array.from({ length: 15 }, (_, j) => 1 + 0.35 * Math.sin(j * 0.9 + k * 1.7) + j * 0.025);
        const sum = w.reduce((a, b) => a + b, 0);
        const v = w.map((x) => Math.round((x / sum) * c.leads));
        v[14] += c.leads - v.reduce((a, b) => a + b, 0);
        return v;
      };
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)},${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)},${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
        }
        return d;
      };
      const spark = (c, k) => {
        const v = series(c, k).filter((_, j) => j % 2 === 0);
        const mx = Math.max(...v), mn = Math.min(...v);
        return `<svg viewBox="0 0 52 20" aria-hidden="true"><polyline points="${v.map((x, j) => `${(j * 52) / (v.length - 1)},${18 - ((x - mn) / (mx - mn || 1)) * 16}`).join(' ')}"/></svg>`;
      };
      $('.clients').innerHTML = clients
        .map((c, k) => `<button class="cl" type="button" data-c="${k}"><span class="ava ${c.t}">${c.i}</span><span><b>${c.n}</b><small>${c.leads} leads</small></span>${spark(c, k)}</button>`)
        .join('');
      $('.chipsrow').innerHTML = clients.map((c, k) => `<button type="button" data-c="${k}">${c.n}</button>`).join('');
      const page = $('.page');
      let now = -1, extra = 0;
      const roll = (el, to, fmt) => {
        const from = parseFloat(el.dataset.v || '0');
        el.dataset.v = to;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 750);
          el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const render = (k, animate) => {
        const c = clients[k];
        now = k;
        extra = 0;
        root.querySelectorAll('[data-c]').forEach((b) => b.classList.toggle('on', +b.dataset.c === k));
        const ava = $('.head .ava');
        ava.className = `ava ${c.t}`;
        ava.textContent = c.i;
        $('h1').textContent = c.n;
        $('.sub').textContent = `${c.ind} - report updated 4 minutes ago`;
        const kp = [['Leads', c.leads, (v) => Math.round(v).toLocaleString('en-US'), c.d[0]], ['Appointments booked', c.appts, (v) => String(Math.round(v)), c.d[1]], ['Cost per lead', c.cpl, (v) => '$' + v.toFixed(2), c.d[2], 1], ['Conversion', c.conv, (v) => v.toFixed(1) + '%', c.d[3]]];
        $('.kpis').innerHTML = kp
          .map(([l, v, f, dl, inv], j) => {
            const good = inv ? dl < 0 : dl > 0;
            return `<div class="card kpi in" style="--i:${j + 1}"><p class="k">${l}</p><p class="big" data-k="${j}" data-v="0">${f(0)}</p><span class="dl ${good ? '' : 'dn'}">${dl > 0 ? '+' : ''}${dl.toFixed(1)}%</span></div>`;
          })
          .join('');
        const sv = series(c, k);
        const mx = Math.max(...sv) * 1.15;
        const pts = sv.map((v, j) => [(j * 600) / 14, 165 - (v / mx) * 150]);
        const d = curve(pts);
        $('.line').setAttribute('d', d);
        $('.area').setAttribute('d', `${d} L600,170 L0,170 Z`);
        $('.dot').style.top = `${(pts[14][1] / 170) * 100}%`;
        const tot = c.src.reduce((a, b) => a + b, 0);
        $('.srcs').innerHTML = c.src
          .map((v, j) => `<div class="sr" data-s="${j}"><span>${srcNames[j]}</span><span class="sb"><i style="--w:${v / Math.max(...c.src)}"></i></span><b class="n">${v}<em>${Math.round((v / tot) * 100)}%</em></b></div>`)
          .join('');
        if (animate) {
          page.classList.remove('swap');
          void page.offsetWidth;
          page.classList.add('swap');
        }
        kp.forEach(([l, v, f], j) => roll($(`[data-k="${j}"]`), v, f));
      };
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2400);
      };
      const tick = () => {
        const c = clients[now];
        extra += 1;
        const el = $('[data-k="0"]');
        roll(el, c.leads + extra, (v) => Math.round(v).toLocaleString('en-US'));
        const row = $('[data-s="0"]');
        const v = c.src[0] + extra;
        const tot = c.src.reduce((a, b) => a + b, 0) + extra;
        row.querySelector('b').innerHTML = `${v}<em>${Math.round((v / tot) * 100)}%</em>`;
        row.querySelector('i').style.setProperty('--w', Math.min(1, v / Math.max(...c.src, v)));
        say(`New lead for ${c.n} - Search ads`);
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-c]');
        if (b && +b.dataset.c !== now) render(+b.dataset.c, true);
      });
      render(0, false);

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(700px,600px)';
      (async () => {
        await wait(2200);
        let n = 0;
        const order = [2, 3, 4, 0];
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const k = order[n++ % order.length];
          if (idle()) await tap($(`.side [data-c="${k}"]`) || $(`.chipsrow [data-c="${k}"]`));
          await wait(2600);
          if (idle()) tick();
          await wait(3400);
        }
      })();
    },
    prompt: `Build an agency client-reporting dashboard (Solace Studio reporting on its clients' lead generation) as one full-viewport screen with a client list sidebar.

Layout: grid columns 268px and minmax(0,1fr). Sidebar (white, 1px hairline): logo tile, agency name and subtitle, a search field ("Search 24 clients"), an uppercase "Clients" label and a scrolling list of client buttons (34px rounded-square initials tile in blue tints, client name, "148 leads" and a 52 by 20 sparkline; the selected one on accent-soft with an accent-line ring). Main (scrolls): a header with a 48px client tile, the client name as the title, an industry and location line, a date-range ghost button and a primary "Export PDF" button; four KPI cards (Leads, Appointments booked, Cost per lead where a falling number is good, Conversion) each with a green or red delta pill; then a row of two cards, minmax(0,1.4fr) and minmax(0,1fr): "Leads per day" (smooth accent area line for 15 days, a pinging last point, mono date labels, a Live pill) and "Leads by source" (five rows: label, 8px bar, count and percent of total). All numbers are coherent: sources sum to the lead count, and the daily series sums to it too.

Motion: selecting another client replays the page entrance: blocks fade and rise (opacity, translateY(8px), 45ms stagger), the line is revealed left to right (clip-path: inset(0 100% 0 0) to inset(0), 1s), source bars grow from the left (scaleX, 800ms) and KPI numbers count up (ease-out cubic, 750ms). A few seconds later a new lead arrives: Leads ticks up by one, the Search ads count and bar update and a toast appears. Press feedback is scale(.95) at 90ms.

Accessibility: client rows are buttons with focus rings, deltas carry a sign and not only a color, prefers-reduced-motion removes the entrance and draw animations. Phone layout under 760px: hide the sidebar and show the clients as a horizontally scrolling chip row, KPIs two per row, cards stack.

Plain HTML, CSS and JS, no libraries; React-friendly structure (ClientSidebar, ClientRow, ReportHeader, KpiCard, LeadsChart, SourceBars, Toast). Use your brand's accent color.`,
  });

  ML.add({
    id: 'app-industry-hotel',
    cat: 'app-industry',
    title: 'Hotel bookings calendar',
    sub: 'A booking lands on the calendar',
    html: `
<div class="app">
  <header class="nav">
    <div class="brand"><span class="mark">${I(P.key, 17)}</span><b>Harborview Hotel</b></div>
    <div class="step">
      <button class="sb" type="button" aria-label="Previous">${I('<path d="m15 18-6-6 6-6"/>', 16)}</button>
      <b>Oct 12 - 25, 2026</b>
      <button class="sb" type="button" aria-label="Next">${I(P.chevR, 16)}</button>
      <button class="chip" type="button">Today</button>
    </div>
    <button class="cta" type="button">${I(P.plus, 16)}New booking</button>
    <span class="av">MR</span>
  </header>
  <main class="page sc">
    <div class="kpis">
      <div class="card kpi"><p class="k">Occupancy tonight</p><p class="big">75%</p><span class="st">6 of 8 rooms</span></div>
      <div class="card kpi"><p class="k">Next 7 days</p><p class="big n" data-v="62" data-s="occ">62%</p><span class="dl">+4% vs last week</span></div>
      <div class="card kpi"><p class="k">Arrivals today</p><p class="big">3</p><span class="st m">1 departing</span></div>
      <div class="card kpi"><p class="k">Avg daily rate</p><p class="big">$214</p><span class="dl">+$12</span></div>
    </div>
    <div class="body">
      <section class="card cal">
        <div class="cs"><div class="ci">
          <div class="chd"><span></span><div class="dys"></div></div>
          <div class="cbd"><div class="ov"></div><div class="rows"></div></div>
        </div></div>
      </section>
      <aside class="card tdy">
        <div class="ph2"><p class="t">Arrivals today</p><span class="st" data-s="ac">3 expected</span></div>
        <div class="arr"></div>
        <p class="lbl">Rooms tonight</p>
        <div class="dots"></div>
      </aside>
    </div>
  </main>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:flex;flex-direction:column}
.d .nav{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;font-size:15px;letter-spacing:-.02em}
.d .brand b{font-weight:650;white-space:nowrap}
.d .mark{display:grid;place-items:center;width:32px;height:32px;border-radius:10px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .step{display:flex;align-items:center;gap:6px;margin:0 auto}
.d .step b{min-width:150px;text-align:center;font-size:14px;font-weight:650;letter-spacing:-.01em}
.d .sb{display:grid;place-items:center;width:32px;height:32px;border-radius:10px;background:var(--ml-surface);color:var(--ml-ink-2)}
.d .chip{height:32px;margin-left:6px;padding:0 13px;border-radius:999px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:12.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .page{display:flex;flex:1;flex-direction:column;padding:20px 28px 24px}
.d .kpis{display:grid;flex:none;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.d .kpi{display:flex;flex-direction:column;align-items:flex-start;gap:8px;padding:14px 16px}
.d .kpi .big{font-size:26px}
.d .body{display:grid;grid-template-columns:minmax(0,1fr) 288px;flex:1 0 auto;gap:14px;margin-top:14px}
.d .cal{display:flex;flex-direction:column;padding:10px 14px 14px;min-width:0}
.d .cs{display:flex;flex:1;flex-direction:column;overflow-x:auto;scrollbar-width:none}
.d .ci{--lw:84px;display:flex;flex:1;flex-direction:column;min-width:620px}
.d .chd{display:grid;grid-template-columns:var(--lw) minmax(0,1fr);height:44px;align-items:center}
.d .dys{display:grid;grid-template-columns:repeat(14,minmax(0,1fr))}
.d .dys span{display:flex;flex-direction:column;align-items:center;gap:2px;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .dys b{font:650 13px/1 var(--ml-font);color:var(--ml-ink)}
.d .dys .td b{display:grid;place-items:center;width:26px;height:26px;margin-top:-1px;border-radius:50%;background:var(--ml-accent);color:#fff}
.d .cbd{position:relative;display:flex;flex:1;flex-direction:column}
.d .rows{display:grid;flex:1;grid-auto-rows:minmax(52px,1fr)}
.d .ov{position:absolute;left:var(--lw);right:0;top:0;bottom:0;pointer-events:none}
.d .ov i{position:absolute;top:0;bottom:0;background:rgba(235,240,247,.6)}
.d .ov i.td{background:rgba(231,240,255,.8)}
.d .rr{display:grid;grid-template-columns:var(--lw) minmax(0,1fr);min-height:52px;border-top:1px solid var(--ml-line)}
.d .rl{display:flex;flex-direction:column;justify-content:center}
.d .rl b{font-size:13px;font-weight:650}
.d .rl small{margin-top:1px;font-size:11.5px;color:var(--ml-muted)}
.d .rc{position:relative;background-image:linear-gradient(90deg,var(--ml-line) 1px,transparent 1px);background-size:calc(100% / 14) 100%}
.d .bk{position:absolute;top:7px;bottom:7px;display:flex;align-items:center;gap:6px;padding:0 10px;border-radius:10px;overflow:hidden;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line);color:var(--ml-accent-ink);font-size:12px;font-weight:600;white-space:nowrap;transform-origin:0 50%;transition:transform 700ms var(--ml-spring),background-color .45s ease,box-shadow .45s ease,color .45s ease}
.d .bk span{overflow:hidden;text-overflow:ellipsis}
.d .bk small{font-weight:500;opacity:.75}
.d .bk.done{background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .bk.live{background:var(--ml-accent);box-shadow:0 4px 10px rgba(255,68,51,.25);color:#fff}
.d .bk.new{background:var(--ml-grad);box-shadow:0 8px 16px rgba(255,68,51,.3);color:#fff}
.d .tdy{display:flex;flex-direction:column;padding:16px 16px 14px}
.d .ph2{display:flex;align-items:center;justify-content:space-between}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .ar{display:flex;align-items:center;gap:10px;padding:11px 0;border-bottom:1px solid var(--ml-line)}
.d .ar > div{flex:1;min-width:0}
.d .ar b{display:block;font-size:13.5px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .ar small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .ar .btn{width:76px;height:28px;padding:0}
.d .ar .st{width:76px;justify-content:center}
.d .tdy .lbl{margin:auto 0 9px;padding-top:14px}
.d .dots{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:5px}
.d .dots i{aspect-ratio:1;border-radius:7px;background:var(--ml-accent)}
.d .dots i.o{background:var(--ml-bar-2)}
@container scr (max-width: 760px){
  .d .nav{padding:0 16px}
  .d .step b{min-width:0}
  .d .brand b,.d .chip,.d .cta{display:none}
  .d .step{margin:0 0 0 auto}
  .d .page{padding:16px}
  .d .kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .body{grid-template-columns:minmax(0,1fr)}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      $('.dys').innerHTML = Array.from({ length: 14 }, (_, i) => `<span class="${i === 3 ? 'td' : ''}">${days[i % 7]}<b>${12 + i}</b></span>`).join('');
      const pct = (i) => `${(i / 14) * 100}%`;
      $('.ov').innerHTML = [[5, 2], [12, 2]].map(([s, l]) => `<i style="left:${pct(s)};width:${pct(l)}"></i>`).join('') + `<i class="td" style="left:${pct(3)};width:${pct(1)}"></i>`;
      const rooms = [['101', 'Queen'], ['102', 'Queen'], ['201', 'King'], ['202', 'King'], ['203', 'Twin'], ['301', 'Suite'], ['302', 'Suite'], ['305', 'King']];
      const book = [
        [0, 0, 3, 'Isabel Cruz', 'done'], [0, 3, 3, 'Kwame Mensah', ''], [1, 1, 4, 'Hana Kim', 'live'], [1, 8, 3, 'Tomas Lindqvist', ''],
        [2, 2, 2, 'Priya Nair', 'live'], [2, 4, 4, 'Luis Ortega', ''], [3, 3, 2, 'Aiko Tan', '', 'aiko'], [3, 6, 3, 'Rafael Santos', ''],
        [4, 0, 4, 'Elena Petrova', 'live'], [4, 6, 3, 'Daniel Okafor', ''], [5, 3, 4, 'Sam Whitfield', ''], [5, 9, 4, 'Jia Wen', ''],
        [6, 1, 2, 'Carlos Mendoza', 'done'], [6, 5, 4, 'Ana Lim', ''], [7, 0, 2, 'Rafael Santos', 'done'], [7, 10, 2, 'Maya Reyes', ''],
      ];
      const bar = ([r, s, l, who, st, id]) =>
        `<div class="bk ${st}" ${id ? `data-b="${id}"` : ''} style="left:calc(${pct(s)} + 2px);width:calc(${pct(l)} - 4px)"><span>${who}</span><small>${l}n</small></div>`;
      $('.rows').innerHTML = rooms
        .map(([n, t], r) => `<div class="rr"><div class="rl"><b>${n}</b><small>${t}</small></div><div class="rc" data-r="${r}">${book.filter((b) => b[0] === r).map(bar).join('')}</div></div>`)
        .join('');
      const arrivals = [['KM', 'Kwame Mensah', 'Room 101 - Queen - 2:00 PM', 'km', ''], ['AT', 'Aiko Tan', 'Room 202 - King - 3:30 PM', 'aiko', 'b'], ['SW', 'Sam Whitfield', 'Room 301 - Suite - 4:15 PM', 'sw', 'c']];
      let inHouse = false;
      const drawA = () => {
        $('.arr').innerHTML = arrivals
          .map(([i, n, w, id, c]) => `<div class="ar"><span class="av ${c}">${i}</span><div><b>${n}</b><small>${w}</small></div>${id === 'aiko' && inHouse ? '<span class="st g">In house</span>' : `<button class="btn" type="button" data-ci="${id}">Check in</button>`}</div>`)
          .join('');
        $('[data-s=ac]').textContent = `${inHouse ? 2 : 3} expected`;
      };
      drawA();
      $('.dots').innerHTML = Array.from({ length: 8 }, (_, i) => `<i class="${i < 6 ? '' : 'o'}"></i>`).join('');
      const roll = (el, to) => {
        const from = parseFloat(el.dataset.v);
        el.dataset.v = to;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 700);
          el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))) + '%';
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2600);
      };
      let nb = null;
      const land = () => {
        if (nb) return;
        nb = document.createElement('div');
        nb.className = 'bk new';
        nb.style.cssText = `left:calc(${pct(6)} + 2px);width:calc(${pct(3)} - 4px);transform:scaleX(0)`;
        nb.innerHTML = '<span>Noor Haddad</span><small>3n</small>';
        $('[data-r="7"]').appendChild(nb);
        void nb.offsetWidth;
        nb.style.transform = 'scaleX(1)';
        roll($('[data-s=occ]'), 67);
        say('New booking - Noor Haddad, room 305, Oct 18-21 - $642');
      };
      const checkIn = (id) => {
        if (id !== 'aiko' || inHouse) return;
        inHouse = true;
        drawA();
        $('[data-b=aiko]').classList.add('live');
        say('Aiko Tan checked in - room 202');
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('[data-ci]');
        if (b) checkIn(b.dataset.ci);
        if (e.target.closest('.cta')) land();
      });
      const reset = () => {
        if (nb) {
          const old = nb;
          nb = null;
          old.style.transform = 'scaleX(0)';
          setTimeout(() => old.remove(), 750);
          roll($('[data-s=occ]'), 62);
        }
        if (inHouse) {
          inHouse = false;
          drawA();
          $('[data-b=aiko]').classList.remove('live');
        }
      };

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(700px,100px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1500);
          if (idle()) await tap($('.cta'));
          await wait(2400);
          if (idle()) await tap($('[data-ci="aiko"]'));
          await wait(3800);
          cur.classList.add('off');
        }
      })();
    },
    prompt: `Build a hotel bookings screen (Harborview Hotel) as one full-viewport page with a top bar and an occupancy calendar.

Layout: a 64px top bar: logo tile and hotel name, a centered date stepper (previous and next icon buttons around "Oct 12 - 25, 2026" and a Today chip), a primary "New booking" button and the avatar. Page: a row of four KPI cards (Occupancy tonight with a "6 of 8 rooms" pill, Next 7 days occupancy with a green delta, Arrivals today, Avg daily rate). Body is two columns, minmax(0,1fr) and 288px. Left: a calendar card: a header row of 14 day columns (weekday in mono over the date, today as a filled accent circle), then one row per room (52px: room number, room type, a hairline grid with one vertical line per day). Weekend columns get a faint tint, today's column a soft accent tint. Bookings are absolutely positioned bars inside the row (left and width as percentages of 14 days, 2px inset): upcoming = accent-soft with an accent-line ring, in house = solid accent, departed = grey, a just-made booking = accent gradient; each shows the guest name and nights. The calendar scrolls horizontally on narrow screens (min-width 620px). Right: an "Arrivals today" card (avatar, guest, room and ETA, Check in button), then a "Rooms tonight" strip of 8 squares (occupied filled with your accent).

Behavior and motion: pressing New booking drops a new bar into the calendar (scaleX 0 to 1 from its left edge, transform-origin 0 50%, spring 587ms; never animate width), the Next 7 days number counts up and a toast confirms. Pressing Check in swaps the button for a green In house pill, the guest's bar turns solid accent with a 450ms color transition and the expected count drops. Buttons scale to .95 on press at 90ms.

Accessibility: stepper and actions are real buttons with aria-labels and focus rings, state always has text, prefers-reduced-motion removes the transitions. Phone layout under 760px: compact top bar (hide the name, Today chip and New booking), KPIs two per row, the calendar scrolls sideways, the arrivals card stacks below.

Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, DateStepper, KpiCard, OccupancyCalendar, RoomRow, BookingBar, ArrivalsPanel, Toast). Use your brand's accent color.`,
  });

  ML.add({
    id: 'app-industry-smarthome',
    cat: 'app-industry',
    title: 'Smart home control',
    sub: 'A light toggles, energy updates',
    html: `
<div class="app">
  <div class="page sc">
    <header class="top">
      <div><p class="k">Good afternoon, Priya</p><h1>Home</h1><p class="sub"><span class="n" data-s="act">5</span> devices active - all doors locked</p></div>
      <div class="wx"><span>${I(P.sun, 20)}</span><p><b>18°C</b><small>Clear, light wind</small></p></div>
    </header>
    <nav class="tabs" aria-label="Rooms"><span class="pill" aria-hidden="true"></span><button class="tab on" type="button">All rooms</button><button class="tab" type="button">Living room</button><button class="tab" type="button">Kitchen</button><button class="tab" type="button">Bedroom</button><button class="tab" type="button">Office</button></nav>
    <div class="body">
      <section class="tiles" aria-label="Devices">
        <button class="dv light on" type="button" role="switch" aria-checked="true" data-l="living"><span class="di">${I(P.bulb, 22)}</span><span class="tg"><i></i></span><b>Living room lights</b><small>On - 80%</small></button>
        <button class="dv light" type="button" role="switch" aria-checked="false" data-l="bedroom"><span class="di">${I(P.bulb, 22)}</span><span class="tg"><i></i></span><b>Bedroom lamp</b><small>Off</small></button>
        <div class="dv th"><span class="di">${I(P.thermo, 22)}</span><b class="tmp n">21.5</b><small>Heating to 22.0</small><span class="pm"><button type="button" class="rd" data-t="-1" aria-label="Lower temperature">${I('<path d="M5 12h14"/>', 16)}</button><button type="button" class="rd" data-t="1" aria-label="Raise temperature">${I(P.plus, 16)}</button></span></div>
        <div class="dv lk"><span class="di">${I(P.lock, 22)}</span><b>Front door</b><small>Locked 9:12 AM</small></div>
        <div class="dv cm"><div class="cam"><svg viewBox="0 0 160 70" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="160" height="70" fill="#FFEFEA"/><path d="M0 46 L160 40 V70 H0Z" fill="#C4D8F2"/><rect x="92" y="14" width="46" height="30" rx="2" fill="#fff"/><polygon points="88,14 115,2 142,14" fill="#FF4433"/><rect x="108" y="28" width="12" height="16" rx="1.5" fill="#B3150F"/><path d="M30 70 L70 44 H100 L90 70Z" fill="#E8EEF8"/></svg><span class="live"><i class="ping"></i>Live</span></div><b>Driveway camera</b><small>No motion in 2 h</small></div>
        <div class="dv sp"><span class="di">${I(P.speaker, 22)}</span><span class="eq"><i></i><i></i><i></i><i></i></span><b>Kitchen speaker</b><small>Playing Evening Jazz</small></div>
      </section>
      <aside class="side">
        <section class="card en">
          <div class="ph2"><div><p class="k">Energy now</p><p class="big"><span class="n" data-v="1.18" data-s="kw">1.18</span> <small>kW</small></p></div><span class="st"><i class="ping"></i>Live</span></div>
          <div class="bars"></div>
          <div class="xs"><span>12a</span><span>6a</span><span>12p</span><span>6p</span></div>
          <div class="mt"></div>
        </section>
        <section class="card rooms"><div class="ph2"><p class="t">Rooms</p><span class="st m">4 rooms</span></div><div class="rl"></div></section>
      </aside>
    </div>
  </div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .page{height:100%;padding:26px 30px 28px}
.d .top{display:flex;align-items:flex-start;justify-content:space-between;gap:20px}
.d h1{margin-top:4px;font-size:36px;letter-spacing:-.04em}
.d .sub{margin-top:7px;font-size:14px;color:var(--ml-muted)}
.d .wx{display:flex;align-items:center;gap:12px;padding:10px 16px 10px 12px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .wx > span{display:grid;place-items:center;width:38px;height:38px;border-radius:12px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .wx b{display:block;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .wx small{font-size:12px;color:var(--ml-muted)}
.d .tabs{position:relative;display:inline-flex;margin-top:20px;padding:4px;border-radius:14px;background:rgba(227,233,242,.7)}
.d .pill{position:absolute;top:4px;bottom:4px;left:0;width:0;border-radius:11px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12);transition:transform var(--ml-spring-dur) var(--ml-spring),width var(--ml-spring-dur) var(--ml-spring)}
.d .tab{position:relative;z-index:1;height:34px;padding:0 15px;border-radius:11px;font-size:13.5px;font-weight:600;color:var(--ml-muted);transition:color .2s ease}
.d .tab.on{color:var(--ml-ink)}
.d .body{display:grid;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);gap:18px;margin-top:20px;align-items:start}
.d .tiles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d .dv{position:relative;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-end;min-height:188px;padding:16px;border-radius:22px;text-align:left;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);transition:background-color .45s ease,color .45s ease,box-shadow .45s ease,transform 90ms ease-out}
.d .dv b{font-size:14.5px;font-weight:650;letter-spacing:-.01em}
.d .dv small{margin-top:2px;font-size:12.5px;color:var(--ml-muted);transition:color .45s ease}
.d .di{position:absolute;left:16px;top:16px;display:grid;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent);transition:background-color .45s ease,color .45s ease}
.d .light:not(.on) .di{background:var(--ml-bar-2);color:var(--ml-muted)}
.d .light.on{background:var(--ml-grad);color:#fff;box-shadow:0 12px 26px rgba(255,68,51,.28)}
.d .light.on small{color:rgba(255,255,255,.85)}
.d .light.on .di{background:rgba(255,255,255,.22);color:#fff}
.d .light:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .tg{position:absolute;right:16px;top:20px;width:42px;height:26px;border-radius:99px;background:var(--ml-bar);transition:background-color .35s ease}
.d .tg i{position:absolute;left:3px;top:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .light.on .tg{background:rgba(255,255,255,.35)}
.d .light.on .tg i{transform:translateX(16px)}
.d .tmp{margin-bottom:2px;font-size:34px;line-height:1;font-weight:650;letter-spacing:-.04em}
.d .tmp::after{content:"°C";font-size:17px;font-weight:600;color:var(--ml-muted);margin-left:2px}
.d .pm{position:absolute;right:14px;top:18px;display:flex;gap:6px}
.d .rd{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2);transition:transform 90ms ease-out}
.d .rd:active{transform:scale(.9)}
.d .cm{padding:0;overflow:hidden}
.d .cam{position:relative;align-self:stretch;height:84px;margin-bottom:10px}
.d .cam svg{display:block;width:100%;height:100%}
.d .cam .live{position:absolute;left:10px;top:10px;display:flex;align-items:center;gap:6px;padding:3px 8px 3px 7px;border-radius:999px;background:rgba(29,29,31,.72);font-size:11px;font-weight:600;color:#fff}
.d .cam .ping{width:6px;height:6px;background:#FF3B30}
.d .cam .ping::after{background:#FF3B30}
.d .cm b,.d .cm small{margin-left:16px}
.d .cm small{margin-bottom:14px}
.d .eq{position:absolute;right:16px;top:30px;display:flex;align-items:flex-end;gap:3px;height:20px}
.d .eq i{width:4px;height:100%;border-radius:2px;background:var(--ml-accent);transform-origin:50% 100%;animation:sh-eq 1.1s ease-in-out infinite}
.d .eq i:nth-child(2){animation-delay:-.4s}
.d .eq i:nth-child(3){animation-delay:-.8s}
.d .eq i:nth-child(4){animation-delay:-.2s}
@keyframes sh-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
.d .side{display:flex;flex-direction:column;gap:14px}
.d .en{padding:16px 18px 14px}
.d .ph2{display:flex;align-items:flex-start;justify-content:space-between;gap:8px}
.d .en .big{margin-top:7px}
.d .en .big small{font-size:15px;font-weight:600;color:var(--ml-muted);letter-spacing:0}
.d .bars{display:grid;grid-template-columns:repeat(24,minmax(0,1fr));gap:3px;height:70px;margin-top:12px;border-bottom:1px solid var(--ml-line)}
.d .bc{display:flex;align-items:flex-end}
.d .fill{width:100%;height:100%;border-radius:3px 3px 0 0;background:var(--ml-accent-line);transform:scaleY(var(--h));transform-origin:50% 100%;transition:transform 700ms var(--ml-spring)}
.d .bc.now .fill{background:var(--ml-accent)}
.d .bc.fut .fill{background:var(--ml-bar-2)}
.d .xs{display:flex;justify-content:space-between;padding-top:7px;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .mt{display:flex;flex-direction:column;gap:9px;margin-top:12px}
.d .mr{display:grid;grid-template-columns:84px minmax(0,1fr) 54px;align-items:center;gap:10px;font-size:12.5px}
.d .mr span:first-child{color:var(--ml-ink-2);font-weight:550}
.d .mb{display:block;height:6px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .mb i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--w));transform-origin:0 50%;transition:transform 700ms var(--ml-spring)}
.d .mr b{text-align:right;font:600 11.5px/1 var(--ml-mono)}
.d .rooms{padding:14px 18px 6px}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .rm{display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid var(--ml-line)}
.d .rl > :last-child{border-bottom:0}
.d .rm > div{flex:1}
.d .rm b{display:block;font-size:13.5px;font-weight:600}
.d .rm small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .sw{position:relative;flex:none;width:46px;height:28px;border-radius:99px;background:var(--ml-bar);transition:background-color .3s ease,transform 90ms ease-out}
.d .sw i{position:absolute;left:3px;top:3px;width:22px;height:22px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .sw[aria-checked=true]{background:var(--ml-accent)}
.d .sw[aria-checked=true] i{transform:translateX(18px)}
.d .sw:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
@container scr (max-width: 760px){
  .d .page{padding:20px 16px}
  .d h1{font-size:30px}
  .d .wx small,.d .sub{display:none}
  .d .tabs{max-width:100%;overflow-x:auto;scrollbar-width:none}
  .d .tab{flex:none}
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .tiles{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (prefers-reduced-motion: reduce){.d .eq i{animation:none;transform:scaleY(.6)}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const watt = { living: 260, kitchen: 120, bedroom: 130, office: 90 };
      const rooms = [['living', 'Living room', 4], ['kitchen', 'Kitchen', 3], ['bedroom', 'Bedroom', 2], ['office', 'Office', 3]];
      const on = { living: true, kitchen: true, bedroom: false, office: false };
      const hourly = [0.4, 0.35, 0.3, 0.3, 0.32, 0.45, 0.8, 1.1, 0.9, 0.7, 0.65, 0.7, 0.85, 0.95, 1.18];
      $('.bars').innerHTML = Array.from({ length: 24 }, (_, i) => `<div class="bc ${i === 14 ? 'now' : i > 14 ? 'fut' : ''}"><span class="fill" style="--h:${i <= 14 ? hourly[i] / 1.6 : 0.06}"></span></div>`).join('');
      $('.mt').innerHTML = [['Heating', 'h', 520], ['Lighting', 'l', 380], ['Appliances', 'a', 280]]
        .map(([n, k, w]) => `<div class="mr"><span>${n}</span><span class="mb"><i data-m="${k}" style="--w:${w / 600}"></i></span><b data-w="${k}">${w} W</b></div>`)
        .join('');
      $('.rl').innerHTML = rooms
        .map(([k, n, d]) => `<div class="rm"><div><b>${n}</b><small data-rs="${k}"></small></div><button class="sw" type="button" role="switch" aria-label="${n} lights" aria-checked="false" data-r="${k}"><i></i></button></div>`)
        .join('');
      const total = () => 800 + Object.keys(on).reduce((a, k) => a + (on[k] ? watt[k] : 0), 0);
      const roll = (el, to) => {
        const from = parseFloat(el.dataset.v);
        el.dataset.v = to;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 700);
          el.textContent = (from + (to - from) * (1 - Math.pow(1 - k, 3))).toFixed(2);
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      const paint = () => {
        const kw = total() / 1000;
        roll($('[data-s=kw]'), kw);
        const lights = total() - 800;
        $('[data-w=l]').textContent = `${lights} W`;
        $('[data-m=l]').style.setProperty('--w', Math.min(1, lights / 600));
        root.querySelectorAll('.bc .fill')[14].style.setProperty('--h', kw / 1.6);
        $('[data-s=act]').textContent = 3 + Object.keys(on).filter((k) => on[k]).length;
        rooms.forEach(([k, , d]) => {
          const sw = $(`[data-r="${k}"]`);
          sw.setAttribute('aria-checked', String(on[k]));
          $(`[data-rs="${k}"]`).textContent = on[k] ? `${Math.max(1, d - 1)} of ${d} on` : `0 of ${d} on`;
        });
        [['living', 'Living room lights', 'On - 80%'], ['bedroom', 'Bedroom lamp', 'Off']].forEach(([k, , txt]) => {
          const t = $(`[data-l="${k}"]`);
          t.classList.toggle('on', on[k]);
          t.setAttribute('aria-checked', String(on[k]));
          t.querySelector('small').textContent = on[k] ? 'On - 80%' : 'Off';
        });
      };
      paint();
      root.addEventListener('click', (e) => {
        const l = e.target.closest('[data-l]');
        const r = e.target.closest('[data-r]');
        const k = l ? l.dataset.l : r ? r.dataset.r : null;
        if (k) {
          on[k] = !on[k];
          paint();
        }
        const t = e.target.closest('[data-t]');
        if (t) {
          const el = $('.tmp');
          const v = Math.min(26, Math.max(16, parseFloat(el.textContent) + 0.5 * +t.dataset.t));
          el.textContent = v.toFixed(1);
        }
      });
      // sliding room-tab highlight
      const pill = $('.pill');
      const tabs = [...root.querySelectorAll('.tab')];
      const move = (el) => {
        pill.style.width = el.offsetWidth + 'px';
        pill.style.transform = `translateX(${el.offsetLeft}px)`;
      };
      tabs.forEach((t) => t.addEventListener('click', () => { tabs.forEach((o) => o.classList.toggle('on', o === t)); move(t); }));
      requestAnimationFrame(() => move(tabs[0]));
      new ResizeObserver(() => move(root.querySelector('.tab.on'))).observe($('.tabs'));
      const reset = () => {
        on.living = true;
        on.kitchen = true;
        on.bedroom = false;
        on.office = false;
        paint();
      };

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(620px,330px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1200);
          if (idle()) await tap($('[data-l="bedroom"]'));
          await wait(2600);
          if (idle()) await tap($('.rl [data-r="living"]'));
          await wait(2800);
          cur.classList.add('off');
          await wait(600);
        }
      })();
    },
    prompt: `Build a smart home control screen as one full-viewport page with no sidebar and no app bar, just a large page header.

Layout: padding 26px 30px. Header: a small greeting, a 36px title "Home" (weight 650, letter-spacing -.04em), a status line with a live count ("5 devices active - all doors locked") and a weather chip on the right. Under it a room tab control (All rooms, Living room, Kitchen, Bedroom, Office) on a tinted track with ONE white selection pill that slides between tabs (transform translateX plus width, 587ms spring). Body is two columns, minmax(0,1.7fr) and minmax(0,1fr). Left: a 3 by 2 grid of 22px-radius device tiles, min-height 158px, 44px circular icon top-left: two light tiles (an ON light is a solid accent gradient with white text, a soft colored shadow and a pill toggle top-right, an OFF light is a white card with a grey icon), a thermostat tile (34px temperature, a heating target line and round minus and plus buttons), a Front door lock tile, a Driveway camera tile with a drawn preview and a Live tag with a red pinging dot, and a speaker tile with four animated equalizer bars (scaleY loops, transform-origin bottom). Right: an Energy card (big live kW number with a Live pill, a 24-bar hourly chart where the current hour is the accent bar and future hours are faint stubs, then three meters Heating, Lighting, Appliances with watt values) and a Rooms card with a labeled switch per room.

Behavior and motion: tiles and room switches share one state. Toggling the Bedroom lamp fills its tile with the gradient (450ms color transition), flips the toggle knob with a spring, flips the Bedroom room switch, counts the kW value up by the lamp's wattage (ease-out cubic, 700ms), lifts the current-hour bar (scaleY from the bottom) and the Lighting meter (scaleX from the left), and updates the active-device count. Turning off a room does the reverse. The thermostat buttons really change the target in 0.5 degree steps. Press feedback scale(.95) at 90ms.

Accessibility: light tiles and room switches use role="switch" with aria-checked, every control has a name, focus rings, prefers-reduced-motion stops the equalizer. Phone layout under 760px: hide the weather caption and status line, room tabs scroll sideways, tiles two per row, energy and rooms cards stack below.

Plain HTML, CSS and JS, no libraries; React-friendly structure (HomeHeader, RoomTabs, DeviceTile, LightTile, ThermostatTile, CameraTile, EnergyCard, RoomSwitchList). Use your brand's accent color; the only other color is the red live dot.`,
  });

  ML.add({
    id: 'app-industry-crypto',
    cat: 'app-industry',
    title: 'Crypto portfolio',
    sub: 'Prices tick, a buy order fills',
    html: `
<div class="app">
  <header class="nav">
    <div class="brand"><span class="mark">${I(P.wallet, 17)}</span><b>Lumen Wallet</b></div>
    <nav class="tabs" aria-label="Main">
      <button class="tab on" type="button">Portfolio</button><button class="tab" type="button">Markets</button><button class="tab" type="button">Trade</button><button class="tab" type="button">Earn</button>
    </nav>
    <span class="vf">${I(P.shield, 15)}Verified</span>
    <span class="av">PN</span>
  </header>
  <div class="tick" aria-label="Market prices"></div>
  <main class="page sc">
    <div class="grid">
      <div class="col">
        <section class="card pf">
          <div class="ph2">
            <div><p class="k">Portfolio value</p><p class="big n" data-s="tot">$69,366.19</p><p class="dd"><span class="dl" data-s="dl">+$1,284.40 today</span><span class="k" data-s="pc">+1.9%</span></p></div>
            <div class="rng" role="tablist" aria-label="Range"><button class="rb" type="button" role="tab" data-g="0">1D</button><button class="rb" type="button" role="tab" data-g="1">1W</button><button class="rb" type="button" role="tab" data-g="2">1M</button><button class="rb" type="button" role="tab" data-g="3">1Y</button></div>
          </div>
          <div class="plot"><svg viewBox="0 0 600 150" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="ml-cr-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF4433" stop-opacity=".2"/><stop offset="1" stop-color="#FF4433" stop-opacity="0"/></linearGradient></defs><g class="gl"><line x1="0" x2="600" y1="37" y2="37"/><line x1="0" x2="600" y1="75" y2="75"/><line x1="0" x2="600" y1="113" y2="113"/></g><path class="area"/><path class="line"/></svg><span class="dot"><i></i></span></div>
        </section>
        <section class="card hold">
          <div class="ph2"><p class="t">Holdings</p><span class="st m">5 assets</span></div>
          <div class="hl"></div>
        </section>
      </div>
      <aside class="card trade">
        <div class="mode" role="tablist" aria-label="Order side"><span class="mp" aria-hidden="true"></span><button class="md on" type="button" role="tab" data-m="buy">Buy</button><button class="md" type="button" role="tab" data-m="sell">Sell</button></div>
        <div class="asset"><span class="ct">B</span><div><b>Bitcoin</b><small>BTC - <span class="n" data-s="px">$71,420.50</span></small></div><span class="dl" data-s="pch">+2.14%</span></div>
        <label class="fl" for="ml-cr-amt">Amount in USD</label>
        <div class="amt"><span>$</span><input id="ml-cr-amt" class="n" type="text" inputmode="decimal" placeholder="0.00" autocomplete="off"><div class="qk"><button type="button" data-q="100">100</button><button type="button" data-q="500">500</button><button type="button" data-q="1000">1,000</button></div></div>
        <div class="sum"><p><span>You get</span><b class="n" data-s="get">0.00000 BTC</b></p><p><span>Fee (0.25%)</span><b class="n" data-s="fee">$0.00</b></p><p><span>Available</span><b class="n" data-s="cash">$4,200.00</b></p></div>
        <button class="cta go" type="button" data-s="go">Buy BTC</button>
        <p class="note">${I(P.lock, 13)}Orders fill at the live price. Prices move every second.</p>
      </aside>
    </div>
  </main>
  <div class="toast" role="status"><i>${I(P.check, 12)}</i><span></span></div>
  ${CURSOR}
</div>`,
    css: `${K}
.d .app{display:flex;flex-direction:column}
.d .nav{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;font-size:15px;letter-spacing:-.02em}
.d .brand b{font-weight:650;white-space:nowrap}
.d .mark{display:grid;place-items:center;width:32px;height:32px;border-radius:10px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .tabs{display:flex;align-self:stretch;gap:4px;margin-left:22px}
.d .tab{position:relative;padding:0 13px;font-size:14px;font-weight:550;color:var(--ml-muted);transition:color .2s ease}
.d .tab.on{color:var(--ml-ink)}
.d .tab.on::after{content:"";position:absolute;left:11px;right:11px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .vf{display:inline-flex;align-items:center;gap:6px;margin-left:auto;height:28px;padding:0 11px;border-radius:999px;background:rgba(29,185,84,.1);font-size:12px;font-weight:600;color:#12893C}
.d .tick{display:flex;flex:none;gap:10px;padding:10px 28px;border-bottom:1px solid var(--ml-line);background:rgba(255,255,255,.6);overflow:hidden}
.d .ti{display:flex;align-items:center;gap:9px;flex:1;min-width:0;padding:7px 12px;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;white-space:nowrap}
.d .ti b{font-weight:650}
.d .ti span.n{color:var(--ml-ink-2);font-weight:550}
.d .ti em{margin-left:auto;font-style:normal;font-weight:650}
.d .up{color:#12893C}
.d .dn{color:#D70015}
.d .page{flex:1;padding:18px 28px 22px}
.d .grid{display:grid;grid-template-columns:minmax(0,1.75fr) minmax(0,1fr);gap:16px;align-items:start}
.d .col{display:flex;flex-direction:column;gap:14px;min-width:0}
.d .pf{padding:16px 18px 12px}
.d .ph2{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .pf .big{margin-top:8px;font-size:32px}
.d .dd{display:flex;align-items:center;gap:8px;margin-top:9px}
.d .rng{display:flex;gap:3px;padding:3px;border-radius:11px;background:var(--ml-surface)}
.d .rb{height:28px;padding:0 11px;border-radius:8px;font-size:12px;font-weight:650;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .rb.on{background:var(--ml-bg);color:var(--ml-ink);box-shadow:0 1px 3px rgba(35,15,10,.12)}
.d .plot{position:relative;height:150px;margin-top:6px}
.d .plot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.d .gl line{stroke:var(--ml-line);stroke-width:1}
.d .area{fill:url(#ml-cr-fill)}
.d .line{fill:none;stroke:var(--ml-accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.d .dot{position:absolute;right:0;width:12px;height:12px;margin:-6px -6px 0 0;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px #fff,0 2px 6px rgba(255,68,51,.4)}
.d .dot i{position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:ind-ping 2.4s ease-out infinite}
.d .plot.draw svg{animation:cr-reveal 1000ms var(--ml-ease) both}
.d .plot.draw .dot{animation:ind-fade 600ms ease 800ms both}
@keyframes cr-reveal{from{clip-path:inset(-12px 100% -12px 0)}to{clip-path:inset(-12px -12px -12px 0)}}
@keyframes ind-fade{from{opacity:0}to{opacity:1}}
.d .hold{padding:14px 18px 6px}
.d .t{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .hr{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1.1fr) 90px 64px 62px;align-items:center;gap:10px;padding:10px 0;border-top:1px solid var(--ml-line)}
.d .hl{margin-top:6px}
.d .hl > :first-child .hr{border-top:0}
.d .co{display:flex;align-items:center;gap:10px;min-width:0}
.d .ct{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:13px;font-weight:700}
.d .ct.b{background:var(--ml-accent-line)}
.d .ct.c{background:var(--ml-bar);color:var(--ml-ink-2)}
.d .hr b{display:block;font-size:13.5px;font-weight:600}
.d .hr small{display:block;margin-top:1px;font-size:11.5px;color:var(--ml-muted)}
.d .hr .r{text-align:right;font-size:13px;font-weight:600}
.d .hr svg{width:62px;height:24px;overflow:visible}
.d .hr polyline{fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.d .hr.flash{animation:cr-flash 1100ms ease-out}
@keyframes cr-flash{0%,100%{background:transparent}25%{background:var(--ml-accent-soft)}}
.d .trade{display:flex;flex-direction:column;gap:12px;padding:16px}
.d .mode{position:relative;display:flex;padding:4px;border-radius:13px;background:var(--ml-surface)}
.d .mp{position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:10px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .mode.sell .mp{transform:translateX(100%)}
.d .md{position:relative;z-index:1;flex:1;height:36px;border-radius:10px;font-size:13.5px;font-weight:650;color:var(--ml-muted);transition:color .2s ease}
.d .md.on{color:var(--ml-accent-ink)}
.d .mode.sell .md.on{color:#D70015}
.d .asset{display:flex;align-items:center;gap:11px;padding:11px 12px;border-radius:13px;background:var(--ml-surface)}
.d .asset > div{flex:1;min-width:0}
.d .asset b{display:block;font-size:14px;font-weight:650}
.d .asset small{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .fl{margin-top:2px;font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .amt{display:flex;align-items:center;gap:8px;height:52px;margin-top:-4px;padding:0 8px 0 14px;border-radius:13px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-line);transition:box-shadow .25s ease}
.d .amt:focus-within,.d .amt.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .amt > span{font-size:20px;font-weight:600;color:var(--ml-muted)}
.d .amt input{flex:1;min-width:0;border:0;outline:0;background:none;font:650 22px/1 var(--ml-font);letter-spacing:-.02em;color:var(--ml-ink)}
.d .amt input::placeholder{color:#C3CAD6}
.d .qk{display:flex;gap:4px}
.d .qk button{height:28px;padding:0 9px;border-radius:8px;background:var(--ml-surface);font:600 11.5px/1 var(--ml-mono);color:var(--ml-ink-2)}
.d .sum{display:flex;flex-direction:column;gap:9px;margin-top:2px}
.d .sum p{display:flex;justify-content:space-between;font-size:13px;color:var(--ml-muted)}
.d .sum b{font-weight:650;color:var(--ml-ink)}
.d .go{width:100%;height:48px;margin-top:4px;font-size:15px;border-radius:13px}
.d .go.sell{background:linear-gradient(135deg,#FF3B30,#FF6A5F);box-shadow:0 1px 2px rgba(255,59,48,.3),0 8px 18px rgba(255,59,48,.22)}
.d .note{display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--ml-muted)}
@container scr (max-width: 760px){
  .d .nav{padding:0 16px}
  .d .tabs,.d .vf{display:none}
  .d .brand{margin-right:auto}
  .d .tick{padding:8px 16px}
  .d .ti:nth-child(n+3){display:none}
  .d .page{padding:14px 16px}
  .d .grid{grid-template-columns:minmax(0,1fr)}
  .d .hr{grid-template-columns:minmax(0,1.4fr) minmax(0,1fr) 62px}
  .d .hr > :nth-child(4),.d .hr > :nth-child(5){display:none}
  .d .trade{order:-1}
}
@media (prefers-reduced-motion: reduce){.d .dot i{animation:none}.d .plot.draw svg,.d .plot.draw .dot{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const fmt2 = (v) => '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      const A = [
        { t: 'BTC', n: 'Bitcoin', q: 0.42, p: 71420.5, c: 2.14, tone: '', dec: 4 },
        { t: 'ETH', n: 'Ethereum', q: 4.8, p: 3284.1, c: -0.82, tone: 'b', dec: 2 },
        { t: 'SOL', n: 'Solana', q: 62, p: 182.45, c: 4.63, tone: 'c', dec: 1 },
        { t: 'LINK', n: 'Chainlink', q: 380, p: 21.3, c: -1.37, tone: 'b', dec: 0 },
        { t: 'USDC', n: 'USD Coin', q: 4200, p: 1, c: 0, tone: '', dec: 2, cash: true },
      ];
      const base = A.map((a) => ({ ...a }));
      const OPEN = 68081.79;
      let seed = 7;
      const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
      const total = () => A.reduce((s, a) => s + a.q * a.p, 0);
      const spark = (a, k) => {
        seed = 11 + k * 5;
        let v = 50;
        const pts = Array.from({ length: 20 }, (_, i) => (v += (rnd() - 0.5) * 12 + (a.c >= 0 ? 1.4 : -1.4)));
        const mx = Math.max(...pts), mn = Math.min(...pts);
        return `<svg viewBox="0 0 62 24" aria-hidden="true"><polyline stroke="${a.c >= 0 ? '#1DB954' : '#FF3B30'}" points="${pts.map((y, i) => `${(i * 62) / 19},${21 - ((y - mn) / (mx - mn || 1)) * 18}`).join(' ')}"/></svg>`;
      };
      const sgn = (v) => (v >= 0 ? '+' : '') + v.toFixed(2) + '%';
      const tickA = A.slice(0, 4);
      $('.tick').innerHTML = tickA.map((a, i) => `<div class="ti"><b>${a.t}</b><span class="n" data-tp="${i}"></span><em class="n" data-tc="${i}"></em></div>`).join('');
      $('.hl').innerHTML = A.map((a, i) => `<div class="hr" data-h="${i}"><div class="co"><span class="ct ${a.tone}">${a.t[0]}</span><div><b>${a.n}</b><small>${a.t}</small></div></div><div><b class="n" data-hq="${i}"></b><small class="n" data-hv="${i}"></small></div><span class="r n" data-hp="${i}"></span><span class="r n ${''}" data-hc="${i}"></span><span>${a.cash ? '' : spark(a, i)}</span></div>`).join('');
      const paintRows = () => {
        A.forEach((a, i) => {
          const live = a.cash ? 0 : (a.p / base[i].p - 1) * 100;
          const ch = a.c + live;
          $(`[data-hq="${i}"]`).textContent = `${a.q.toLocaleString('en-US', { minimumFractionDigits: a.dec > 2 ? 4 : a.dec ? a.dec : 0, maximumFractionDigits: a.dec > 2 ? 4 : a.dec })} ${a.t}`;
          $(`[data-hv="${i}"]`).textContent = fmt2(a.q * a.p);
          $(`[data-hp="${i}"]`).textContent = fmt2(a.p);
          const hc = $(`[data-hc="${i}"]`);
          hc.textContent = a.cash ? '0.00%' : sgn(ch);
          hc.className = `r n ${a.cash ? '' : ch >= 0 ? 'up' : 'dn'}`;
        });
        tickA.forEach((a, i) => {
          const ch = a.c + (a.p / base[i].p - 1) * 100;
          $(`[data-tp="${i}"]`).textContent = fmt2(a.p);
          const e = $(`[data-tc="${i}"]`);
          e.textContent = sgn(ch);
          e.className = `n ${ch >= 0 ? 'up' : 'dn'}`;
        });
        const t = total();
        $('[data-s=tot]').textContent = fmt2(t);
        const d = t - OPEN;
        const dl = $('[data-s=dl]');
        dl.textContent = `${d >= 0 ? '+' : '-'}${fmt2(Math.abs(d))} today`;
        dl.className = `dl ${d >= 0 ? '' : 'dn'}`;
        $('[data-s=pc]').textContent = sgn((d / OPEN) * 100);
        $('[data-s=px]').textContent = fmt2(A[0].p);
        const pch = $('[data-s=pch]');
        const bc = A[0].c + (A[0].p / base[0].p - 1) * 100;
        pch.textContent = sgn(bc);
        pch.className = `dl ${bc >= 0 ? '' : 'dn'}`;
        $('[data-s=cash]').textContent = fmt2(A[4].q);
      };
      // chart series: seeded bridge from the range start to the live total
      const ranges = [[68100, 48], [64900, 56], [61200, 60], [38400, 52]];
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)},${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)},${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
        }
        return d;
      };
      let rg = 0;
      let walk = [];
      const build = (g) => {
        const [s, n] = ranges[g];
        seed = 3 + g * 17;
        const end = total();
        const noise = Array.from({ length: n }, () => (rnd() - 0.5) * (end - s) * 0.22);
        walk = noise.map((x, i) => s + ((end - s) * i) / (n - 1) + x * Math.sin((Math.PI * i) / (n - 1)));
      };
      const draw = () => {
        const v = walk.slice(0, -1).concat(total());
        const mx = Math.max(...v), mn = Math.min(...v);
        const pts = v.map((y, i) => [(i * 600) / (v.length - 1), 140 - ((y - mn) / (mx - mn || 1)) * 120]);
        const d = curve(pts);
        $('.line').setAttribute('d', d);
        $('.area').setAttribute('d', `${d} L600,150 L0,150 Z`);
        $('.dot').style.top = `${(pts[pts.length - 1][1] / 150) * 100}%`;
      };
      const setRange = (g, animate) => {
        rg = g;
        root.querySelectorAll('.rb').forEach((b) => b.classList.toggle('on', +b.dataset.g === g));
        build(g);
        draw();
        if (animate) {
          const p = $('.plot');
          p.classList.remove('draw');
          void p.offsetWidth;
          p.classList.add('draw');
        }
      };
      paintRows();
      setRange(0, false);
      // live prices
      const tickPrices = () => {
        A.forEach((a, i) => {
          if (a.cash) return;
          a.p = Math.max(1, a.p * (1 + (Math.random() - 0.48) * 0.0014));
        });
        paintRows();
        draw();
        calc();
      };
      let timer = 0;
      const loop = (t) => {
        if (!root.isConnected) return;
        if (!root.dataset.paused && t - timer > 1100) {
          timer = t;
          tickPrices();
        }
        requestAnimationFrame(loop);
      };
      requestAnimationFrame(loop);
      // trade panel
      let side = 'buy';
      const inp = $('#ml-cr-amt');
      const calc = () => {
        const v = parseFloat(inp.value.replace(/,/g, '')) || 0;
        $('[data-s=get]').textContent = side === 'buy' ? `${(v / A[0].p).toFixed(5)} BTC` : fmt2(v * 0.9975);
        $('[data-s=fee]').textContent = fmt2(v * 0.0025);
      };
      inp.addEventListener('input', calc);
      const toast = $('.toast');
      const say = (m) => {
        toast.querySelector('span').textContent = m;
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2600);
      };
      const mode = $('.mode');
      const setSide = (s) => {
        side = s;
        mode.classList.toggle('sell', s === 'sell');
        root.querySelectorAll('.md').forEach((b) => b.classList.toggle('on', b.dataset.m === s));
        const go = $('[data-s=go]');
        go.textContent = s === 'buy' ? 'Buy BTC' : 'Sell BTC';
        go.classList.toggle('sell', s === 'sell');
        $('.fl').textContent = s === 'buy' ? 'Amount in USD' : 'Amount to sell in USD';
        calc();
      };
      let did = 0;
      const place = () => {
        const v = parseFloat(inp.value.replace(/,/g, '')) || 0;
        if (v <= 0) return say('Enter an amount to continue');
        if (side === 'buy' && v > A[4].q) return say('Not enough USDC available');
        if (side === 'sell' && v > A[0].q * A[0].p) return say('You hold less BTC than that');
        const q = v / A[0].p;
        A[0].q += side === 'buy' ? q : -q;
        A[4].q += side === 'buy' ? -v : v * 0.9975;
        did += side === 'buy' ? 1 : -1;
        paintRows();
        calc();
        const row = $('[data-h="0"]');
        row.classList.remove('flash');
        void row.offsetWidth;
        row.classList.add('flash');
        say(`${side === 'buy' ? 'Bought' : 'Sold'} ${q.toFixed(5)} BTC for ${fmt2(v)}`);
        setTimeout(() => { inp.value = ''; calc(); }, 900);
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('.rb');
        if (b) setRange(+b.dataset.g, true);
        const m = e.target.closest('.md');
        if (m) setSide(m.dataset.m);
        const q = e.target.closest('[data-q]');
        if (q) { inp.value = Number(q.dataset.q).toLocaleString('en-US'); calc(); }
        if (e.target.closest('[data-s=go]')) place();
        const tb = e.target.closest('.tab');
        if (tb) root.querySelectorAll('.tab').forEach((o) => o.classList.toggle('on', o === tb));
      });
      const reset = () => {
        A.forEach((a, i) => { a.q = base[i].q; });
        did = 0;
        inp.value = '';
        setSide('buy');
        if (rg !== 0) setRange(0, true);
        paintRows();
      };

      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) =>
        root.addEventListener(e, () => { until = performance.now() + 4000; cur.classList.add('off'); }, { passive: true }),
      );
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      const tap = async (el) => {
        if (!el) return;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) moveTo(el);
        await wait(shown ? 820 : 200);
        if (!idle()) return;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      cur.style.transform = 'translate(640px,200px)';
      (async () => {
        await wait(2000);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          reset();
          await wait(1200);
          if (idle()) await tap($('[data-g="1"]'));
          await wait(2000);
          if (idle()) await tap($('[data-q="500"]'));
          await wait(1300);
          if (idle()) await tap($('[data-s=go]'));
          await wait(3200);
          cur.classList.add('off');
        }
      })();
    },
    prompt: `Build a crypto portfolio screen (Lumen Wallet) as one full-viewport page with top navigation, a live price ticker strip and a trade panel. Use only blue, green and red: blue is the accent, green means up, red means down.

Layout: a 64px top bar (logo tile and name, text tabs with a 2px accent underline on the active one: Portfolio, Markets, Trade, Earn; a green "Verified" pill; avatar). Under it a ticker strip of four equal cells (ticker, live price, signed 24h change in green or red). Page body is a grid of minmax(0,1.75fr) and minmax(0,1fr). Left column: a Portfolio card (label, the total value at 32px weight 650 in tabular numbers, a green or red pill with the day change in dollars plus a percent, a 1D / 1W / 1M / 1Y range control on a tinted track, a smooth accent area line chart 150px tall with a pinging last point) and a Holdings card of rows (round asset tile in blue tints, name and ticker, holding amount over its dollar value, price, signed 24h change in green or red, a 62 by 24 sparkline in green or red). Right: a Trade card with a Buy / Sell segmented control (one white pill that slides, Sell turns the label and the button red), an asset row with the live price, an "Amount in USD" field (22px, with quick-amount chips 100, 500, 1,000), a summary (You get, Fee 0.25%, Available) and a full-width primary Buy button.

Behavior and motion: prices random-walk every second; the ticker, holdings, total, day change and chart tip all update from the same state. Picking a range redraws the line (a clip-path inset reveal from the left over 1s, the dot fades in after 800ms). Typing an amount updates "You get" live. Pressing Buy moves dollars from USDC to BTC, updates both rows, flashes the BTC row with an accent-soft background and shows a toast; invalid amounts show a toast instead. Buttons scale to .95 on press at 90ms.

Accessibility: range and side controls are tablists of buttons, the input has a label, changes are signed text and not only color, focus rings, prefers-reduced-motion removes the draw and ping. Phone layout under 760px: hide the tabs, show two ticker cells, put the Trade card first, drop price and sparkline columns from holdings.

Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, TickerStrip, PortfolioChart, RangeControl, HoldingsList, HoldingRow, TradePanel, Toast).`,
  });
})();
