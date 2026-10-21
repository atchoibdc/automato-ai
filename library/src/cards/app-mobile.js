(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    chevL: '<path d="m15 18-6-6 6-6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
    compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    minus: '<path d="M5 12h14"/>',
    bookmark: '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    msg: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    arrowUp: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    arrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    upRight: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
    downLeft: '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>',
    call: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    nav: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    skipB: '<polygon points="19 20 9 12 19 4 19 20"/><line x1="5" x2="5" y1="19" y2="5"/>',
    skipF: '<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/>',
    shuffle: '<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    queue: '<path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/>',
    flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
    activity: '<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>',
    bar: '<path d="M6.5 6.5v11"/><path d="M17.5 6.5v11"/><path d="M3.5 9v6"/><path d="M20.5 9v6"/><path d="M6.5 12h11"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    face: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/>',
    finger: '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
    wifi: '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    disk: '<line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.55-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    back: '<path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><line x1="18" x2="12" y1="9" y2="15"/><line x1="12" x2="18" y1="9" y2="15"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    at: '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>',
    utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    vol: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    mount: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    car: '<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>',
    pulse: '<path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    clip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5"/>',
    bagCheck: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="m9 14 2 2 4-4"/>',
  };
  const I = (d, s = 20, w = 2) =>
    `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  // a check that can draw itself (pathLength 1)
  const CK = (s = 30, w = 2.6) =>
    `<svg class="ckv" viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg>`;
  // The demo cursor every screen card uses for its autoplay (Lucide mouse-pointer-2, filled).
  const CURSOR = `<div class="cur off" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4.04 4.6a.5.5 0 0 1 .56-.56l15.5 6.1a.5.5 0 0 1-.05.94l-6.3 1.9a1 1 0 0 0-.66.66l-1.9 6.3a.5.5 0 0 1-.94.05Z"/></svg></div>`;
  const CURSOR_CSS = `
.d .cur{position:absolute;left:0;top:0;z-index:50;pointer-events:none;transition:transform 780ms var(--ml-ease),opacity .25s ease}
.d .cur svg{display:block;filter:drop-shadow(0 2px 3px rgba(35,15,10,.28));transition:transform 90ms ease-out}
.d .cur path{fill:var(--ml-ink);stroke:#fff;stroke-width:1.6;stroke-linejoin:round}
.d .cur.press svg{transform:scale(.8)}
.d .cur.off{opacity:0}`;

  // Phone chrome shared by every card: status bar, dynamic island, home indicator, callout chips.
  const SB = `<i class="isl"></i><div class="sb"><b>9:41</b><span class="sbi"><svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg>${I(P.wifi, 17, 2.4)}<svg width="27" height="13" viewBox="0 0 27 13" aria-hidden="true"><rect x=".5" y=".5" width="22" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".4"/><rect x="2" y="2" width="19" height="9" rx="2.2" fill="currentColor"/><path d="M24 4.5v4c.8-.3 1.5-1.1 1.5-2s-.7-1.7-1.5-2z" fill="currentColor" opacity=".4"/></svg></span></div>`;
  const call = ([icon, t, s, top], side) =>
    `<div class="call ${side}" style="top:${top}%"><span class="ci">${I(icon, 17)}</span><p><b>${t}</b><small>${s}</small></p></div>`;
  const frame = (inner, l, r) =>
    `<div class="wrap">${call(l, 'cl')}<div class="phone">${SB}${inner}<i class="hi"></i></div>${call(r, 'cr')}${CURSOR}</div>`;
  const tabs = (items, on) =>
    `<nav class="tb" aria-label="Tabs">${items.map(([ic, t], k) => `<button type="button" class="${k === on ? 'on' : ''}"${k === on ? ' aria-current="page"' : ''}>${I(ic, 24, 2)}<span>${t}</span></button>`).join('')}</nav>`;

  const BASE = `
.d .wrap{position:relative;display:grid;place-items:center;height:100%;overflow:hidden;background:radial-gradient(60% 50% at 16% 10%,#E1EDFF 0%,rgba(225,237,255,0) 70%),radial-gradient(55% 55% at 90% 94%,#E6EFFF 0%,rgba(230,239,255,0) 70%),var(--ml-surface)}
.d .phone{--hb:28px;position:relative;display:flex;flex-direction:column;width:360px;height:min(720px,calc(100% - 28px));border-radius:44px;background:var(--ml-bg);overflow:hidden;isolation:isolate;font:500 17px/1.3 var(--ml-font);letter-spacing:-.011em;box-shadow:0 0 0 1px rgba(35,15,10,.16),0 0 0 7px #fff,0 0 0 8px rgba(35,15,10,.12),0 34px 70px rgba(35,15,10,.18),0 8px 20px rgba(35,15,10,.08)}
.d .sb{position:relative;z-index:30;display:flex;flex:none;align-items:center;justify-content:space-between;height:50px;padding:8px 30px 0 36px;font-size:16px;font-weight:650;pointer-events:none}
.d .sbi{display:flex;align-items:center;gap:6px}
.d .isl{position:absolute;z-index:40;top:11px;left:50%;width:98px;height:29px;margin-left:-49px;border-radius:99px;background:#0B0C10}
.d .hi{position:absolute;z-index:40;bottom:8px;left:50%;width:130px;height:5px;margin-left:-65px;border-radius:99px;background:var(--ml-ink);opacity:.9;pointer-events:none}
.d .body{position:relative;display:flex;flex:1;flex-direction:column;min-height:0}
.d .call{position:absolute;z-index:2;display:flex;align-items:center;gap:10px;max-width:200px;padding:10px 16px 10px 10px;border-radius:16px;background:rgba(255,255,255,.88);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow);animation:mb-float 7s ease-in-out infinite}
.d .call.cr{left:calc(50% + 226px)}
.d .call.cl{right:calc(50% + 226px);animation-delay:-3.5s}
.d .ci{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .call p{display:flex;flex-direction:column;gap:1px}
.d .call b{font-size:13px;font-weight:650;letter-spacing:-.01em}
.d .call small{font-size:11.5px;color:var(--ml-muted)}
.d .eyebrow{font-size:13px;font-weight:600;letter-spacing:.02em;color:var(--ml-muted)}
.d .ttl{font-size:32px;line-height:1.08;font-weight:700;letter-spacing:-.038em}
.d .sub{font-size:16px;line-height:1.4;font-weight:500;color:var(--ml-muted)}
.d .ibtn{position:relative;display:grid;flex:none;place-items:center;width:44px;height:44px;border:0;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.05);color:var(--ml-ink);cursor:pointer;transition:transform 90ms ease-out}
.d .ibtn:active,.d .ibtn.press{transform:scale(.94)}
.d .ibtn i{position:absolute;top:10px;right:11px;width:8px;height:8px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px #fff}
.d .av{display:grid;flex:none;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .lk{display:inline-flex;align-items:center;justify-content:center;gap:6px;min-height:44px;padding:0 14px;border:0;background:none;font-size:16px;font-weight:600;color:var(--ml-accent-ink);cursor:pointer;transition:transform 90ms ease-out,opacity .2s}
.d .lk:active,.d .lk.press{transform:scale(.96)}
.d .btn{position:relative;display:grid;place-items:center;width:100%;height:54px;border:0;border-radius:16px;overflow:hidden;color:#fff;background:var(--ml-grad);font-size:17px;font-weight:650;letter-spacing:-.01em;box-shadow:0 1px 2px rgba(255,68,51,.3),0 10px 22px rgba(255,68,51,.24);cursor:pointer;transition:transform 90ms ease-out,background-color .3s ease,opacity .25s ease}
.d .btn:active,.d .btn.press{transform:scale(.97)}
.d .btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .btn:disabled{opacity:.4;cursor:default;box-shadow:none}
.d .btn > span{grid-area:1/1;display:inline-flex;align-items:center;gap:9px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .btn .done,.d .btn .busy{opacity:0;transform:translateY(12px)}
.d .btn.loading .lbl,.d .btn.ok .lbl,.d .btn.ok .busy{opacity:0;transform:translateY(-12px)}
.d .btn.loading .busy,.d .btn.ok .done{opacity:1;transform:none}
.d .btn.loading::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.38) 50%,transparent 70%);background-size:220% 100%;animation:mb-sheen 1.1s linear infinite}
.d .btn.ok{background:#1DB954;box-shadow:0 1px 2px rgba(29,185,84,.3),0 10px 22px rgba(29,185,84,.22)}
.d .tb{position:relative;z-index:5;display:flex;flex:none;padding:6px 10px var(--hb);background:rgba(255,255,255,.94);border-top:1px solid var(--ml-line)}
.d .tb button{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;gap:3px;height:50px;border:0;border-radius:12px;background:none;color:var(--ml-muted);font-size:10.5px;font-weight:600;letter-spacing:0;cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .tb button.on{color:var(--ml-accent)}
.d .tb button:active,.d .tb button.press{transform:scale(.93)}
.d .scrim{position:absolute;inset:0;z-index:20;background:rgba(35,15,10,.34);opacity:0;pointer-events:none;transition:opacity .35s ease}
.d .scrim.open{opacity:1;pointer-events:auto}
.d .sheet{position:absolute;left:0;right:0;bottom:0;z-index:21;padding:10px 20px var(--hb);border-radius:30px 30px 0 0;background:var(--ml-bg);box-shadow:0 -12px 40px rgba(35,15,10,.16);transform:translateY(112%);visibility:hidden;transition:transform var(--ml-spring-dur) var(--ml-spring),visibility 0s linear var(--ml-spring-dur)}
.d .sheet.open{transform:none;visibility:visible;transition:transform var(--ml-spring-dur) var(--ml-spring),visibility 0s}
.d .grab{width:38px;height:5px;margin:0 auto 14px;border-radius:99px;background:var(--ml-bar)}
.d .ckv path{stroke-dasharray:1;stroke-dashoffset:1}
.d .draw .ckv path{animation:mb-draw 520ms var(--ml-ease) 120ms forwards}
.d .no-scroll{scrollbar-width:none}
.d .no-scroll::-webkit-scrollbar{display:none}
@keyframes mb-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes mb-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes mb-draw{to{stroke-dashoffset:0}}
@keyframes mb-in{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes mb-pop{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.08);opacity:1}100%{transform:none}}
@container scr (max-width: 760px){.d .call{display:none}}
@container scr (max-width: 500px){
  .d .wrap{display:block}
  .d .phone{--hb:12px;width:100%;height:100%;border-radius:0;box-shadow:none}
  .d .sb{height:12px;padding:0}
  .d .sb > *,.d .isl,.d .hi,.d .cur{display:none}
}
@media (prefers-reduced-motion: reduce){.d .call{animation:none}}`;

  // ---------------------------------------------------------------- 1. phone login
  ML.add({
    id: 'app-mobile-login',
    cat: 'app-mobile',
    title: 'Phone login with Face ID',
    sub: 'Biometric sheet slides up, then unlocks',
    html: frame(
      `
<div class="body lg">
  <div class="lg-top"><span class="lg-mark">${I(P.pulse, 22)}</span>Juniper Health</div>
  <div class="lg-mid">
    <span class="lg-av">MR<span class="bd">${I(P.check, 16, 3)}</span></span>
    <h1 class="ttl">Welcome back, Maya</h1>
    <p class="sub">Your appointments, results and care team in one place.</p>
  </div>
  <div class="lg-bot">
    <button type="button" class="btn go"><span class="lbl">${I(P.face, 22)}Unlock with Face ID</span><span class="done">${I(P.check, 20, 2.8)}Signed in</span></button>
    <button type="button" class="lk">Use password instead</button>
    <p class="fine">${I(P.lock, 13)}Encrypted on this device</p>
  </div>
</div>
<div class="scrim"></div>
<div class="sheet fid" role="dialog" aria-label="Face ID">
  <div class="grab"></div>
  <div class="fid-ic"><span class="f">${I(P.face, 48, 1.7)}</span><i class="scan"></i><span class="ck">${CK(40, 2.8)}</span></div>
  <h2>Face ID</h2>
  <p class="sub">Look at your phone to unlock Juniper Health.</p>
  <button type="button" class="lk cancel">Cancel</button>
</div>`,
      [P.shield, 'Private by default', 'Health data stays on device', 66],
      [P.face, 'Face ID prompt', 'Unlocks in one look', 24],
    ),
    css: `${BASE}
.d .lg{justify-content:space-between;padding:8px 24px var(--hb);background:radial-gradient(90% 36% at 50% 0%,#FFEBE8 0%,rgba(220,234,255,0) 100%)}
.d .lg-top{display:flex;align-items:center;gap:10px;font-size:19px;font-weight:700;letter-spacing:-.025em}
.d .lg-mark{display:grid;place-items:center;width:38px;height:38px;border-radius:12px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .lg-mid{display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center}
.d .lg-av{position:relative;display:grid;place-items:center;width:100px;height:100px;margin-bottom:12px;border-radius:50%;background:#fff;box-shadow:inset 0 0 0 1px var(--ml-accent-line),0 0 0 8px rgba(231,240,255,.7),var(--ml-shadow);color:var(--ml-accent-ink);font-size:34px;font-weight:700;letter-spacing:-.03em}
.d .lg-av .bd{position:absolute;right:-2px;bottom:-2px;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:#1DB954;color:#fff;box-shadow:0 0 0 3px #fff;transform:scale(0);transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .lg.in .bd{transform:none}
.d .lg .ttl{max-width:260px}
.d .lg .sub{max-width:270px}
.d .lg-bot{display:flex;flex-direction:column;align-items:center;gap:4px}
.d .fine{display:flex;align-items:center;gap:6px;padding-top:6px;font-size:12.5px;color:var(--ml-muted)}
.d .fid{text-align:center;padding-bottom:calc(var(--hb) + 8px)}
.d .fid h2{font-size:22px;font-weight:700;letter-spacing:-.03em}
.d .fid .sub{margin:4px auto 8px;max-width:250px;font-size:15px}
.d .fid-ic{position:relative;display:grid;place-items:center;width:88px;height:88px;margin:8px auto 16px;border-radius:26px;background:var(--ml-accent-soft);color:var(--ml-accent);overflow:hidden}
.d .fid-ic .f{display:grid;transition:opacity .25s ease,transform .4s var(--ml-spring)}
.d .fid-ic .ck{position:absolute;inset:0;display:grid;place-items:center;color:#12893C;background:#E3F6EA;opacity:0;transform:scale(.7);transition:opacity .25s ease,transform .45s var(--ml-bounce)}
.d .fid.okf .f{opacity:0;transform:scale(.8)}
.d .fid.okf .ck{opacity:1;transform:none}
.d .scan{position:absolute;left:14px;right:14px;top:6px;height:3px;border-radius:2px;background:var(--ml-accent);opacity:0}
.d .fid.scanning .scan{opacity:.85;animation:mb-scan 1.1s ease-in-out infinite alternate}
@keyframes mb-scan{from{transform:translateY(0)}to{transform:translateY(72px)}}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .fid.scanning .scan{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      const btn = $('.go');
      const scrim = $('.scrim');
      const sheet = $('.sheet');
      const page = $('.lg');
      let busy = false;
      let id = 0;
      const close = () => {
        scrim.classList.remove('open');
        sheet.classList.remove('open', 'scanning');
      };
      const unlock = async () => {
        if (busy) return;
        busy = true;
        const me = ++id;
        sheet.classList.remove('okf', 'draw');
        scrim.classList.add('open');
        sheet.classList.add('open');
        await wait(500);
        if (me !== id) return;
        sheet.classList.add('scanning');
        await wait(1600);
        if (me !== id) return;
        sheet.classList.remove('scanning');
        sheet.classList.add('okf', 'draw');
        await wait(850);
        if (me !== id) return;
        close();
        await wait(500);
        if (me !== id) return;
        btn.classList.add('ok');
        page.classList.add('in');
        await wait(2400);
        if (me !== id) return;
        btn.classList.remove('ok');
        page.classList.remove('in');
        busy = false;
      };
      btn.addEventListener('click', unlock);
      $('.cancel').addEventListener('click', () => {
        id++;
        close();
        sheet.classList.remove('okf', 'draw');
        btn.classList.remove('ok');
        page.classList.remove('in');
        busy = false;
      });

      // Autoplay: tap Unlock, the Face ID sheet scans and succeeds; any real input hands over for 4s.
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (await tap(btn, 0.5, 0.5)) {
            cur.classList.add('off');
            await wait(6000);
          }
        }
      })();
    },
    prompt: `Build a phone sign-in screen that unlocks with Face ID or Touch ID, as a mobile web or app screen (100dvh, safe-area aware, max-width 430px centered on larger screens).

Layout: a faint blue radial wash at the top. Brand row at the top (38px logo tile and app name). In the middle, a centered returning-user block: a 100px initials avatar with a soft 8px ring, the heading "Welcome back, Maya" at 32px/700 with -0.038em tracking, and one line of muted 16px text. At the bottom: a 54px full-width primary button with a Face ID icon and "Unlock with Face ID", a 44px text button "Use password instead", and a small lock line "Encrypted on this device".

Motion: tapping the primary button opens a bottom sheet (30px top radius, grab handle, scrim fading to 34% ink) that slides in with transform: translateY(112%) to 0 using a critically damped spring, linear() curve, about 590ms. The sheet shows an 88px rounded icon tile with a face icon and a 3px accent scan line moving up and down (translateY, alternate, 1.1s). After about 1.6s the face fades and scales out while a green check tile scales in with an overshoot and the check stroke draws (pathLength 1, stroke-dashoffset 1 to 0, 520ms). The sheet then drops away, the avatar gets a green check badge that pops in with a bounce, and the button label slides up and swaps to "Signed in" with a green fill. Press feedback is scale(.97) in 90ms.

Behavior: wire the real WebAuthn call (navigator.credentials.get with a platform authenticator) to the button and drive the same sheet states from its promise; Cancel closes the sheet and resets. Accessibility: the sheet is role="dialog" with a label, focus moves into it and returns to the button, buttons are 44px minimum, prefers-reduced-motion removes the scan loop and springs. Plain HTML, CSS and JS, no libraries; React-friendly structure (LoginScreen, BiometricSheet, PrimaryButton). On a real phone the frame, status bar and home indicator are the device, so render only the screen.`,
  });

  // ---------------------------------------------------------------- 2. home feed (pull to refresh)
  ML.add({
    id: 'app-mobile-feed',
    cat: 'app-mobile',
    title: 'Home feed with pull to refresh',
    sub: 'Real drag pulls, a new post drops in',
    html: frame(
      `
<div class="body fd">
  <header class="fd-h"><div><p class="eyebrow">Wednesday, 14 October</p><h1 class="ttl">Trails</h1></div><button type="button" class="ibtn" aria-label="Notifications">${I(P.bell, 22)}<i></i></button></header>
  <div class="chips"><button type="button" class="chip on">For you</button><button type="button" class="chip">Nearby</button><button type="button" class="chip">Saved</button><button type="button" class="chip">Groups</button></div>
  <div class="fd-sc no-scroll" role="feed" aria-label="Trail posts">
    <div class="ptr" aria-live="polite"><span class="pi-ic">${I(P.arrowDown, 18, 2.4)}</span><span class="pi-t">Pull to refresh</span><span class="pi-d"><i></i><i></i><i></i></span></div>
    <div class="fd-in"></div>
  </div>
</div>
${tabs([[P.home, 'Home'], [P.compass, 'Explore'], [P.plus, 'Post'], [P.bookmark, 'Saved'], [P.user, 'Profile']], 0)}`,
      [P.arrowDown, 'Pull to refresh', 'Drag the feed down and release', 22],
      [P.mount, '4 new trails', 'Fresh posts drop in on top', 70],
    ),
    css: `${BASE}
.d .fd-h{display:flex;align-items:flex-end;justify-content:space-between;padding:6px 20px 8px}
.d .fd-h .ttl{margin-top:2px}
.d .chips{display:flex;gap:8px;padding:6px 20px 12px;overflow:hidden}
.d .chip{display:inline-flex;flex:none;align-items:center;height:38px;padding:0 16px;border:0;border-radius:99px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:15px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s,color .2s,transform 90ms ease-out}
.d .chip:active{transform:scale(.96)}
.d .chip.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .fd-sc{position:relative;flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;touch-action:pan-y;user-select:none;-webkit-user-select:none}
.d .ptr{position:absolute;top:0;left:0;right:0;display:flex;align-items:center;justify-content:center;gap:10px;height:60px;opacity:0;font-size:14px;font-weight:600;color:var(--ml-muted)}
.d .pi-ic{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent);transition:transform .35s var(--ml-ease)}
.d .ptr.rel .pi-ic{transform:rotate(180deg)}
.d .pi-d{display:none;gap:4px}
.d .pi-d i{width:6px;height:6px;border-radius:50%;background:var(--ml-accent);animation:mb-bounce 1s ease-in-out infinite}
.d .pi-d i:nth-child(2){animation-delay:.15s}.d .pi-d i:nth-child(3){animation-delay:.3s}
.d .ptr.busy .pi-ic{display:none}
.d .ptr.busy .pi-d{display:flex}
@keyframes mb-bounce{0%,80%,100%{transform:translateY(0);opacity:.4}40%{transform:translateY(-5px);opacity:1}}
.d .fd-in{position:relative;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .fd-in.drag{transition:none}
.d .pw{display:grid;grid-template-rows:1fr;transition:grid-template-rows .65s var(--ml-ease)}
.d .pw.n{grid-template-rows:0fr}
.d .pw > .pi{min-height:0;overflow:hidden}
.d .pp{padding:0 20px 14px}
.d .post{border-radius:24px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .pw.n .post{opacity:0}
.d .post{transition:opacity .5s ease .1s}
.d .ph{position:relative;height:158px;margin:6px 6px 0;border-radius:19px;overflow:hidden}
.d .ph svg{display:block;width:100%;height:100%}
.d .dist{position:absolute;left:10px;top:10px;padding:5px 10px;border-radius:99px;background:rgba(255,255,255,.88);font-size:12.5px;font-weight:650}
.d .pm{display:flex;align-items:center;gap:11px;padding:11px 12px 12px 14px}
.d .pm div{flex:1;min-width:0}
.d .pm b{display:block;overflow:hidden;font-size:16px;font-weight:650;letter-spacing:-.02em;white-space:nowrap;text-overflow:ellipsis}
.d .pm small{display:block;overflow:hidden;margin-top:1px;font-size:13px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .lik{display:inline-flex;align-items:center;gap:5px;min-width:44px;height:44px;padding:0 8px;border:0;border-radius:14px;background:none;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer}
.d .lik svg{transition:transform .35s var(--ml-bounce),color .2s}
.d .lik.on{color:var(--ml-accent)}
.d .lik.on svg{fill:currentColor;transform:scale(1.15)}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .pi-d i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const scale = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tween = (ms, fn) =>
        new Promise((res) => {
          let last = performance.now();
          let acc = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = t;
              return requestAnimationFrame(f);
            }
            acc += t - last;
            last = t;
            const k = Math.min(1, acc / ms);
            fn(k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';

      const sc = $('.fd-sc');
      const list = $('.fd-in');
      const ptr = $('.ptr');
      const label = $('.pi-t');
      const posts = [
        ['Ridge Loop at dusk', 'Daniel Okafor', 'DO', 'Cedar Ridge', '6.4 km', 248],
        ['Cedar Hollow in fog', 'Priya Nair', 'PN', 'Cedar Hollow', '3.1 km', 131],
        ['Lakeshore sunrise run', 'Elena Petrova', 'EP', 'Fernway Lake', '8.0 km', 312],
        ['Low tide boardwalk', 'Kwame Mensah', 'KM', 'Tidewater Bay', '2.4 km', 96],
        ['Basin switchbacks', 'Isabel Cruz', 'IC', 'North Basin', '9.7 km', 187],
        ['Dog loop, Juniper', 'Sam Whitfield', 'SW', 'Juniper Park', '1.8 km', 64],
      ];
      const fresh = [
        ['Sunrise, Kestrel Point', 'Tomas Lindqvist', 'TL', 'Kestrel Point', '5.2 km', 12],
        ['Fernway Falls at 7', 'Noor Haddad', 'NH', 'Fernway Falls', '4.6 km', 8],
        ['First frost, Cairn Pass', 'Luis Ortega', 'LO', 'Cairn Pass', '7.3 km', 5],
        ['Old Harbor steps', 'Hana Kim', 'HK', 'Old Harbor', '2.9 km', 3],
      ];
      let uid = 0;
      const scene = (k) => {
        const c = [['#FFF0ED', '#7FB4FF'], ['#FFF0EE', '#FF7A3D'], ['#BFD8FF', '#FF5745'], ['#DDEBFF', '#9CC7FF']][k % 4];
        const g = `ml-mbf-${uid++}`;
        return `<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs><rect width="320" height="200" fill="url(#${g})"/><circle cx="${110 + ((k * 57) % 180)}" cy="${52 + (k % 3) * 8}" r="${20 + (k % 2) * 5}" fill="#fff" opacity=".85"/><path d="M0 200V${120 + (k % 3) * 8}l62-52 58 46 52-38 70 62 78-50v100z" fill="#fff" opacity=".55"/><path d="M0 200v-48l70-34 66 38 60-28 124 40v32z" fill="#FF4433" opacity=".33"/></svg>`;
      };
      let seq = 0;
      const post = (p, isNew) =>
        `<div class="pw${isNew ? ' n' : ''}"><div class="pi"><div class="pp"><article class="post"><div class="ph">${scene(seq++)}<span class="dist">${p[4]}</span></div><div class="pm"><span class="av">${p[2]}</span><div><b>${p[0]}</b><small>${p[3]} by ${p[1].split(' ')[0]}</small></div><button type="button" class="lik" aria-label="Like" aria-pressed="false"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg><span>${p[5]}</span></button></div></article></div></div></div>`;
      list.innerHTML = posts.map((p) => post(p, false)).join('');
      list.addEventListener('click', (e) => {
        const b = e.target.closest('.lik');
        if (!b) return;
        const on = b.classList.toggle('on');
        b.setAttribute('aria-pressed', String(on));
        const n = b.querySelector('span');
        n.textContent = String(+n.textContent + (on ? 1 : -1));
      });
      root.querySelectorAll('.chip').forEach((c) =>
        c.addEventListener('click', () => {
          root.querySelectorAll('.chip').forEach((x) => x.classList.toggle('on', x === c));
        }),
      );

      // pull to refresh: one set of handlers for mouse, pen and touch
      const TH = 62;
      const HOLD = 56;
      let y0 = 0;
      let off = 0;
      let pulling = false;
      let busy = false;
      let n = 0;
      const set = (v) => {
        off = v;
        list.style.transform = `translateY(${v}px)`;
        ptr.style.opacity = String(Math.min(1, v / 36));
        ptr.classList.toggle('rel', v >= TH && !busy);
        if (!busy) label.textContent = v >= TH ? 'Release to refresh' : 'Pull to refresh';
      };
      const refresh = async () => {
        busy = true;
        ptr.classList.add('busy');
        label.textContent = 'Updating';
        set(HOLD);
        await wait(1300);
        list.insertAdjacentHTML('afterbegin', post(fresh[n++ % fresh.length], true));
        const w = list.firstElementChild;
        void w.offsetWidth;
        w.classList.remove('n');
        while (list.children.length > 8) list.lastElementChild.remove();
        ptr.classList.remove('busy');
        busy = false;
        set(0);
        await wait(700);
      };
      const down = (y) => {
        if (busy || sc.scrollTop > 0) return false;
        pulling = true;
        y0 = y;
        list.classList.add('drag');
        return true;
      };
      const move = (y) => {
        if (!pulling) return false;
        const d = (y - y0) / scale();
        if (d <= 0) {
          set(0);
          return false;
        }
        set(Math.min(130, d * 0.55));
        return true;
      };
      const up = () => {
        if (!pulling) return;
        pulling = false;
        list.classList.remove('drag');
        if (off >= TH) refresh();
        else set(0);
      };
      sc.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'touch' || !down(e.clientY)) return;
        sc.setPointerCapture(e.pointerId);
      });
      sc.addEventListener('pointermove', (e) => e.pointerType !== 'touch' && move(e.clientY));
      sc.addEventListener('pointerup', (e) => e.pointerType !== 'touch' && up());
      sc.addEventListener('pointercancel', (e) => e.pointerType !== 'touch' && up());
      sc.addEventListener('touchstart', (e) => down(e.touches[0].clientY), { passive: true });
      sc.addEventListener(
        'touchmove',
        (e) => {
          if (move(e.touches[0].clientY) && e.cancelable) e.preventDefault();
        },
        { passive: false },
      );
      sc.addEventListener('touchend', up);
      sc.addEventListener('touchcancel', up);
      set(0);

      // Autoplay: a real drag on the scroller (the same handlers), then a scroll down and back; any real input hands over for 4s.
      const demo = async () => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const a = pt(sc, 0.5, 0.14);
        if (!a) return refresh();
        put(a);
        await wait(900);
        if (!idle()) return;
        cur.classList.add('press');
        cur.style.transition = 'none';
        down(o.top + a[1] * s);
        await tween(800, (k) => {
          const yc = a[1] + 175 * (1 - Math.pow(1 - k, 2.2));
          cur.style.transform = `translate(${a[0]}px,${yc}px)`;
          move(o.top + yc * s);
        });
        await wait(160);
        cur.classList.remove('press');
        cur.style.transition = '';
        up();
        cur.classList.add('off');
      };
      (async () => {
        await wait(1400);
        while (root.isConnected) {
          if (!idle() || busy || pulling) {
            await wait(400);
            continue;
          }
          await demo();
          await wait(3800);
          if (!idle()) continue;
          sc.scrollTo({ top: 330, behavior: 'smooth' });
          await wait(1700);
          if (!idle()) continue;
          sc.scrollTo({ top: 0, behavior: 'smooth' });
          await wait(1500);
        }
      })();
    },
    prompt: `Build a mobile home feed screen with a custom pull-to-refresh, as a 100dvh column (max-width 430px centered on larger screens): large title header with a date eyebrow and a bell button (44px, unread dot), a row of filter chips (38px pills, the active one in a soft accent tint), a scrolling feed, and a bottom tab bar with 5 tabs.

Feed cards: 24px radius, 1px hairline, a 158px image area with 19px radius (draw it with an inline SVG: gradient sky, a sun circle, two soft mountain layers), a distance pill over the image, then a row with an initials avatar, a 16px/650 title, a 13px muted byline and a 44px like button (heart fills with an overshoot scale and the count updates).

Pull to refresh: the scroller has overscroll-behavior: contain and the indicator sits behind the content. When scrollTop is 0, pointerdown (mouse and pen) or touchstart starts a pull; translate the inner content with transform: translateY(min(130px, drag * 0.55)) with no transition while dragging (touchmove must be passive: false and call preventDefault while pulling). The indicator fades in with the pull; its arrow rotates 180 degrees at the 62px threshold and the label changes from "Pull to refresh" to "Release to refresh". On release past the threshold hold at 56px, show three bouncing dots and "Updating", then insert the new post at the top inside a grid wrapper that animates grid-template-rows from 0fr to 1fr (650ms, cubic-bezier(.32,.72,0,1)) while the content springs back to 0 (spring linear() curve, about 590ms). Below the threshold it springs back and nothing loads.

Accessibility: the list is role="feed", the indicator is aria-live="polite", provide a visible Refresh button for keyboard and screen reader users, and prefers-reduced-motion drops the bounce. Plain HTML, CSS and JS, no libraries; React-friendly structure (FeedScreen, PullToRefresh, PostCard, TabBar).`,
  });

  // ---------------------------------------------------------------- 3. wallet and cards
  ML.add({
    id: 'app-mobile-wallet',
    cat: 'app-mobile',
    title: 'Wallet, cards and send money',
    sub: 'Cards fan out, keypad sends money',
    html: frame(
      `
<div class="body wl">
  <header class="wl-h"><div><p class="eyebrow">Total balance</p><h1 class="ttl bal">$12,480.50</h1></div><button type="button" class="ibtn" aria-label="Scan to pay">${I(P.grid, 22)}</button></header>
  <button type="button" class="stack" aria-label="Cards" aria-expanded="false">
    <span class="cd c2"><span class="cr1"><b>Halden Pay</b><em>Savings</em></span><span class="cn">&bull;&bull;&bull;&bull; 7730</span><span class="cr2"><span>Maya Reyes</span><span>04/30</span></span></span>
    <span class="cd c1"><span class="cr1"><b>Halden Pay</b><em>Travel</em></span><span class="cn">&bull;&bull;&bull;&bull; 1096</span><span class="cr2"><span>Maya Reyes</span><span>09/28</span></span></span>
    <span class="cd c0"><span class="cr1"><b>Halden Pay</b><em>Debit</em></span><span class="cn">&bull;&bull;&bull;&bull; 4821</span><span class="cr2"><span>Maya Reyes</span><span>12/29</span></span></span>
  </button>
  <div class="qas">
    <button type="button" class="qa snd"><span>${I(P.upRight, 20)}</span>Send</button>
    <button type="button" class="qa"><span>${I(P.downLeft, 20)}</span>Request</button>
    <button type="button" class="qa"><span>${I(P.plus, 20)}</span>Top up</button>
  </div>
  <div class="sec"><h2>Recent</h2><button type="button" class="lk">See all</button></div>
  <ul class="tx"></ul>
</div>
${tabs([[P.wallet, 'Wallet'], [P.card, 'Cards'], [P.activity, 'Activity'], [P.user, 'Profile']], 0)}
<div class="scrim"></div>
<div class="sheet sn" role="dialog" aria-label="Send money">
  <div class="grab"></div>
  <div class="to"><span class="av">AT</span><div><b>Aiko Tan</b><small>@aikotan - Halden Pay</small></div><button type="button" class="lk chg">Change</button></div>
  <p class="amt" aria-live="polite">$0</p>
  <p class="avail">Available $12,480.50</p>
  <div class="keys"></div>
  <button type="button" class="btn sendb" disabled><span class="lbl">Send money</span><span class="busy">Sending</span><span class="done">${I(P.check, 20, 2.8)}Sent</span></button>
</div>`,
      [P.card, 'Tap to fan out', 'Debit, travel and savings', 20],
      [P.send, 'Send in seconds', 'Real keypad, instant receipt', 68],
    ),
    css: `${BASE}
.d .wl-h{display:flex;align-items:flex-end;justify-content:space-between;padding:6px 20px 14px}
.d .bal{margin-top:3px;font-size:36px;font-variant-numeric:tabular-nums}
.d .stack{position:relative;display:block;flex:none;height:206px;margin:0 20px;border:0;background:none;text-align:left;cursor:pointer}
.d .cd{position:absolute;left:10px;right:10px;bottom:0;display:flex;flex-direction:column;justify-content:space-between;height:164px;padding:16px 18px 15px;border-radius:22px;color:#fff;transform-origin:50% 100%;transition:transform var(--ml-spring-dur) var(--ml-spring);box-shadow:0 14px 26px rgba(10,60,160,.2),inset 0 0 0 1px rgba(255,255,255,.18)}
.d .cr1,.d .cr2{display:flex;align-items:center;justify-content:space-between}
.d .cr1 b{font-size:16px;font-weight:700;letter-spacing:-.02em}
.d .cr1 em{padding:4px 10px;border-radius:99px;background:rgba(255,255,255,.2);font-size:12px;font-style:normal;font-weight:650}
.d .cn{font-size:22px;font-weight:600;letter-spacing:.08em;font-variant-numeric:tabular-nums}
.d .cr2{font-size:13.5px;font-weight:600;opacity:.9}
.d .c0{z-index:3;background:linear-gradient(135deg,#FF4433 0%,#FF7A3D 100%)}
.d .c1{z-index:2;background:linear-gradient(135deg,#B3150F 0%,#FF4433 100%);transform:translateY(-26px) scale(.94)}
.d .c2{z-index:1;background:#E4EEFF;color:var(--ml-accent-ink);box-shadow:0 10px 20px rgba(10,60,160,.1),inset 0 0 0 1px var(--ml-accent-line);transform:translateY(-48px) scale(.88)}
.d .c2 .cr1 em{background:rgba(255,68,51,.12)}
.d .stack.fan .c0{transform:translateY(8px)}
.d .stack.fan .c1{transform:translate(0,-6px) rotate(-10deg)}
.d .stack.fan .c2{transform:translate(0,-6px) rotate(10deg)}
.d .qas{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;padding:14px 20px 0}
.d .qa{display:flex;flex-direction:column;align-items:center;gap:6px;height:78px;padding-top:11px;border:0;border-radius:20px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13.5px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:transform 90ms ease-out}
.d .qa:active,.d .qa.press{transform:scale(.95)}
.d .qa span{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.1);color:var(--ml-accent)}
.d .sec{display:flex;align-items:center;justify-content:space-between;padding:12px 8px 0 20px}
.d .sec h2{font-size:20px;font-weight:700;letter-spacing:-.03em}
.d .tx{flex:1;min-height:0;padding:0 20px;overflow:hidden;list-style:none}
.d .tx li{display:grid;grid-template-rows:1fr;transition:grid-template-rows .55s var(--ml-ease)}
.d .tx li.n{grid-template-rows:0fr}
.d .tx .rw{min-height:0;overflow:hidden}
.d .tx .ri{display:flex;align-items:center;gap:12px;padding:9px 0}
.d .tx li.n .ri{opacity:0}
.d .tx .ri{transition:opacity .4s ease .1s}
.d .ti{display:grid;flex:none;place-items:center;width:44px;height:44px;border-radius:14px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .tm{flex:1;min-width:0}
.d .tm b{display:block;font-size:16px;font-weight:650;letter-spacing:-.015em}
.d .tm small{display:block;font-size:13px;color:var(--ml-muted)}
.d .tx em{font-size:16px;font-style:normal;font-weight:650;font-variant-numeric:tabular-nums}
.d .tx em.pos{color:#12893C}
.d .sn{padding-top:10px}
.d .to{display:flex;align-items:center;gap:12px;padding:2px 0 4px}
.d .to div{flex:1}
.d .to b{display:block;font-size:17px;font-weight:650}
.d .to small{font-size:13px;color:var(--ml-muted)}
.d .amt{margin-top:8px;font-size:56px;line-height:1.1;font-weight:700;letter-spacing:-.045em;text-align:center;font-variant-numeric:tabular-nums}
.d .avail{margin-bottom:8px;font-size:13.5px;text-align:center;color:var(--ml-muted)}
.d .keys{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-bottom:10px}
.d .key{display:grid;place-items:center;height:54px;border:0;border-radius:14px;background:none;font-size:26px;font-weight:600;letter-spacing:-.02em;cursor:pointer;transition:background-color .15s,transform 90ms ease-out}
.d .key:active,.d .key.press{background:var(--ml-surface);transform:scale(.94)}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .cd{transition-duration:.01ms}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      const money = (n) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      const base = 12480.5;
      let bal = base;
      const stack = $('.stack');
      const balEl = $('.bal');
      const list = $('.tx');
      const scrim = $('.scrim');
      const sheet = $('.sheet');
      const amtEl = $('.amt');
      const send = $('.sendb');
      const keysEl = $('.keys');
      const ic = {
        in: '<path d="M17 7 7 17"/><path d="M17 17H7V7"/>',
        out: '<path d="M7 7h10v10"/><path d="M7 17 17 7"/>',
        cup: '<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/>',
        bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
      };
      const row = (t, isNew) =>
        `<li${isNew ? ' class="n"' : ''}><div class="rw"><div class="ri"><span class="ti"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ic[t[0]]}</svg></span><div class="tm"><b>${t[1]}</b><small>${t[2]}</small></div><em class="${t[3] > 0 ? 'pos' : ''}">${t[3] > 0 ? '+' : '-'}${money(Math.abs(t[3]))}</em></div></div></li>`;
      const seed = [['cup', 'Corvid Coffee', 'Today, 8:12 AM', -6.4], ['in', 'Lumen Labs payroll', 'Today, 6:00 AM', 3420], ['bag', 'Meridian Foods', 'Yesterday, 7:48 PM', -27.4], ['out', 'Rafael Santos', 'Mon, 12 Oct', -60]];
      const reset = () => {
        bal = base;
        balEl.textContent = money(bal);
        list.innerHTML = seed.map((t) => row(t, false)).join('');
      };
      reset();
      const roll = (el, from, to) => {
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 800);
          el.textContent = money(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };

      stack.addEventListener('click', () => {
        const on = stack.classList.toggle('fan');
        stack.setAttribute('aria-expanded', String(on));
      });
      // keypad
      keysEl.innerHTML = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'del']
        .map((k) => `<button type="button" class="key" data-k="${k}" aria-label="${k === 'del' ? 'Delete' : k === '.' ? 'Decimal point' : k}">${k === 'del' ? '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><line x1="18" x2="12" y1="9" y2="15"/><line x1="12" x2="18" y1="9" y2="15"/></svg>' : k}</button>`)
        .join('');
      let amt = '0';
      const show = () => {
        const [i, d] = amt.split('.');
        amtEl.textContent = `$${Number(i).toLocaleString('en-US')}${d !== undefined ? `.${d}` : ''}`;
        const v = parseFloat(amt) || 0;
        send.disabled = !(v > 0) || v > bal;
      };
      keysEl.addEventListener('click', (e) => {
        const b = e.target.closest('.key');
        if (!b || send.classList.contains('loading') || send.classList.contains('ok')) return;
        const k = b.dataset.k;
        if (k === 'del') amt = amt.length > 1 ? amt.slice(0, -1) : '0';
        else if (k === '.') {
          if (!amt.includes('.')) amt += '.';
        } else if (amt === '0') amt = k;
        else if (amt.includes('.') ? amt.split('.')[1].length < 2 : amt.length < 5) amt += k;
        show();
      });
      const open = () => {
        scrim.classList.add('open');
        sheet.classList.add('open');
      };
      const close = () => {
        scrim.classList.remove('open');
        sheet.classList.remove('open');
      };
      $('.snd').addEventListener('click', () => {
        amt = '0';
        send.classList.remove('loading', 'ok');
        show();
        open();
      });
      scrim.addEventListener('click', close);
      const names = ['Aiko Tan', 'Luis Ortega', 'Hana Kim'];
      let who = 0;
      let sending = false;
      send.addEventListener('click', async () => {
        if (send.disabled || sending) return;
        sending = true;
        const v = parseFloat(amt);
        send.classList.add('loading');
        await wait(1000);
        send.classList.replace('loading', 'ok');
        await wait(900);
        close();
        await wait(450);
        const from = bal;
        bal = Math.round((bal - v) * 100) / 100;
        roll(balEl, from, bal);
        list.insertAdjacentHTML('afterbegin', row(['out', names[who++ % 3], 'Just now', -v], true));
        const w = list.firstElementChild;
        void w.offsetWidth;
        w.classList.remove('n');
        while (list.children.length > 5) list.lastElementChild.remove();
        await wait(400);
        amt = '0';
        send.classList.remove('ok');
        show();
        sending = false;
      });
      show();

      // Autoplay: fan the cards, open Send, key in an amount, send; any real input hands over for 4s.
      const amounts = ['120', '45', '18.5'];
      let loop = 0;
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || sending) {
            await wait(400);
            continue;
          }
          if (sheet.classList.contains('open')) {
            close();
            await wait(700);
          }
          if (stack.classList.contains('fan')) stack.click();
          if (!(await tap(stack, 0.5, 0.45))) continue;
          await wait(1800);
          if (!(await tap(stack, 0.5, 0.45))) continue;
          await wait(500);
          if (!(await tap($('.snd'), 0.5, 0.5))) continue;
          await wait(800);
          let ok = true;
          for (const ch of amounts[loop % 3]) {
            const k = keysEl.querySelector(`[data-k="${ch}"]`);
            if (!(await tap(k, 0.5, 0.5, 520))) {
              ok = false;
              break;
            }
          }
          if (!ok) continue;
          await wait(300);
          if (!(await tap(send, 0.5, 0.5, 700))) continue;
          cur.classList.add('off');
          loop++;
          await wait(4200);
          if (loop % 3 === 0) reset();
          await wait(1200);
        }
      })();
    },
    prompt: `Build a mobile wallet home screen with a card stack and a send-money flow (100dvh, max-width 430px centered on larger screens, bottom tab bar with Wallet, Cards, Activity, Profile).

Header: "Total balance" eyebrow, the balance at 36px/700 with tabular-nums, and a 44px scan button. Card stack: a button (aria-expanded) 188px tall holding three 164px cards with 22px radius stacked from the bottom: a blue gradient debit card in front, a deeper blue travel card and a pale blue savings card behind, each peeking 14px with scale(.94) and scale(.88). Each card shows the product name and a type pill, a masked number (letter-spacing .08em) and a holder and expiry row. Tapping fans them out: transform-origin 50% 100%, the back cards rotate -10deg and +10deg, the front drops 8px, on a spring (linear() curve, 590ms); tapping again stacks them.

Below: three 78px quick actions (Send, Request, Top up) with a 34px icon disc, then a "Recent" list of transaction rows (44px icon tile, merchant, time, amount in tabular-nums, incoming amounts in green). New rows insert at the top using a wrapper that animates grid-template-rows 0fr to 1fr.

Send flow: "Send" opens a bottom sheet (scrim, spring slide) with the recipient row, a 56px amount that updates as you press a real 3x4 keypad (digits, one decimal point, two decimals, five integer digits, backspace; Send is disabled for zero or more than the balance), and a primary Send button. On press the label slides up to "Sending" with a sheen across the button (no spinner), then turns green "Sent", the sheet closes, the new row slides in and the balance counts down over 800ms with an ease-out cubic.

Accessibility: the sheet is role="dialog", keys are real buttons with labels, 44px minimum targets, prefers-reduced-motion shortens the transitions. Plain HTML, CSS and JS, no libraries; React-friendly structure (WalletScreen, CardStack, QuickActions, TransactionList, SendSheet, Keypad).`,
  });

  // ---------------------------------------------------------------- 4. fitness rings
  ML.add({
    id: 'app-mobile-fitness',
    cat: 'app-mobile',
    title: 'Fitness activity rings',
    sub: 'Rings refill as the day changes',
    html: frame(
      `
<div class="body ft">
  <header class="ft-h"><div><p class="eyebrow">Bayside Fitness</p><h1 class="ttl">Activity</h1></div><span class="av">MR</span></header>
  <div class="wk" role="group" aria-label="Last seven days"><span class="wk-pill" aria-hidden="true"></span></div>
  <section class="rc">
    <svg class="rg" viewBox="0 0 168 168" aria-hidden="true">
      <g fill="none" stroke-width="15" stroke-linecap="round" transform="rotate(-90 84 84)">
        <circle cx="84" cy="84" r="72" stroke="#FF4433" opacity=".14"/><circle class="r1" cx="84" cy="84" r="72" stroke="#FF4433" pathLength="1"/>
        <circle cx="84" cy="84" r="53" stroke="#FF7A3D" opacity=".18"/><circle class="r2" cx="84" cy="84" r="53" stroke="#FF7A3D" pathLength="1"/>
        <circle cx="84" cy="84" r="34" stroke="#9CC7FF" opacity=".28"/><circle class="r3" cx="84" cy="84" r="34" stroke="#9CC7FF" pathLength="1"/>
      </g>
    </svg>
    <ul class="lgd">
      <li><span class="k k1">Move</span><p><b class="v1">540</b><small>/600 kcal</small></p></li>
      <li><span class="k k2">Exercise</span><p><b class="v2">28</b><small>/30 min</small></p></li>
      <li><span class="k k3">Stand</span><p><b class="v3">9</b><small>/12 hrs</small></p></li>
    </ul>
  </section>
  <div class="sec"><h2>Workouts</h2><button type="button" class="lk">See all</button></div>
  <ul class="wo"></ul>
</div>
${tabs([[P.activity, 'Today'], [P.flame, 'Workouts'], [P.cal, 'Plans'], [P.user, 'Profile']], 0)}`,
      [P.flame, 'Move ring', 'Calories burned vs goal', 20],
      [P.cal, 'Pick any day', 'Rings and workouts follow', 70],
    ),
    css: `${BASE}
.d .ft-h{display:flex;align-items:flex-end;justify-content:space-between;padding:6px 20px 12px}
.d .wk{position:relative;display:grid;grid-template-columns:repeat(7,minmax(0,1fr));margin:0 14px;padding:4px;border-radius:20px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .wk-pill{position:absolute;top:4px;bottom:4px;left:4px;width:calc((100% - 8px) / 7);border-radius:16px;background:var(--ml-grad);box-shadow:0 6px 14px rgba(255,68,51,.28);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .dy{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;height:62px;border:0;background:none;color:var(--ml-muted);cursor:pointer;transition:color .25s ease,transform 90ms ease-out}
.d .dy small{font-size:12px;font-weight:600}
.d .dy b{font-size:18px;font-weight:700;letter-spacing:-.02em;color:var(--ml-ink);transition:color .25s ease}
.d .dy i{width:5px;height:5px;margin-top:2px;border-radius:50%;background:var(--ml-accent);opacity:0;transition:background-color .25s}
.d .dy.cl i{opacity:1}
.d .dy.on small,.d .dy.on b{color:#fff}
.d .dy.on i{background:#fff}
.d .dy.press{transform:scale(.92)}
.d .rc{display:flex;align-items:center;gap:14px;margin:14px 20px 0;padding:14px 16px;border-radius:24px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow)}
.d .rg{flex:none;width:160px;height:160px}
.d .rg circle[pathLength]{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset 1.1s var(--ml-ease)}
.d .lgd{display:flex;flex:1;flex-direction:column;gap:11px;list-style:none}
.d .lgd .k{display:block;font-size:12.5px;font-weight:650;letter-spacing:.01em}
.d .k1{color:var(--ml-accent)}.d .k2{color:#FF5745}.d .k3{color:#5B9CF0}
.d .lgd p{display:flex;align-items:baseline;gap:3px}
.d .lgd b{font-size:26px;line-height:1.05;font-weight:700;letter-spacing:-.035em;font-variant-numeric:tabular-nums}
.d .lgd small{font-size:13px;color:var(--ml-muted)}
.d .sec{display:flex;align-items:center;justify-content:space-between;padding:10px 8px 0 20px}
.d .sec h2{font-size:20px;font-weight:700;letter-spacing:-.03em}
.d .wo{flex:1;min-height:0;padding:2px 20px 0;overflow:hidden;list-style:none}
.d .wo li{display:flex;align-items:center;gap:12px;padding:8px 0;animation:mb-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 60ms)}
.d .wi{display:grid;flex:none;place-items:center;width:46px;height:46px;border-radius:15px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .wo div{flex:1;min-width:0}
.d .wo b{display:block;font-size:16px;font-weight:650;letter-spacing:-.015em}
.d .wo small{display:block;font-size:13px;color:var(--ml-muted)}
.d .wo em{font-size:14px;font-style:normal;font-weight:600;color:var(--ml-ink-2);font-variant-numeric:tabular-nums}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .wo li{animation:none}.d .rg circle[pathLength]{transition-duration:.01ms}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      // 8 to 14 October 2026: Thu Fri Sat Sun Mon Tue Wed (14 October is a Wednesday)
      const days = [
        ['T', 8, 480, 22, 10, [['bar', 'Yoga flow', '40 min - 210 kcal', '7:30 AM'], ['flame', 'Evening walk', '3.1 km - 35:00', '6:10 PM'], ['bar', 'Core circuit', '15 min - 90 kcal', '7:20 PM']]],
        ['F', 9, 610, 34, 12, [['bar', 'Strength', '50 min - 320 kcal', '7:00 AM'], ['flame', 'Bike commute', '12 km - 41:20', '5:45 PM'], ['bar', 'Stretch', '10 min - 30 kcal', '9:10 PM']]],
        ['S', 10, 720, 45, 11, [['flame', 'Long run', '8.4 km - 52:30', '8:15 AM'], ['bar', 'Stretch', '15 min - 40 kcal', '9:30 AM'], ['flame', 'Recovery walk', '2.0 km - 24:00', '5:30 PM']]],
        ['S', 11, 260, 12, 8, [['flame', 'Easy walk', '2.2 km - 28:40', '10:20 AM'], ['bar', 'Mobility', '12 min - 36 kcal', '7:50 PM'], ['bar', 'Core circuit', '10 min - 60 kcal', '8:30 PM']]],
        ['M', 12, 590, 31, 12, [['bar', 'HIIT class', '30 min - 340 kcal', '6:30 AM'], ['flame', 'Lunch walk', '1.9 km - 22:10', '12:40 PM'], ['bar', 'Stretch', '10 min - 28 kcal', '8:40 PM']]],
        ['T', 13, 430, 25, 9, [['flame', 'Swim', '1.2 km - 38:00', '6:45 AM'], ['bar', 'Mobility', '15 min - 45 kcal', '8:00 PM'], ['flame', 'Park walk', '1.4 km - 17:00', '8:40 PM']]],
        ['W', 14, 540, 28, 9, [['flame', 'Morning run', '5.2 km - 32:10', '6:40 AM'], ['bar', 'Upper body', '45 min - 260 kcal', '12:15 PM'], ['flame', 'Evening walk', '2.6 km - 31:00', '6:30 PM']]],
      ];
      const ic = {
        bar: '<path d="M6.5 6.5v11"/><path d="M17.5 6.5v11"/><path d="M3.5 9v6"/><path d="M20.5 9v6"/><path d="M6.5 12h11"/>',
        flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
      };
      const wk = $('.wk');
      const pill = $('.wk-pill');
      wk.insertAdjacentHTML(
        'beforeend',
        days.map((d, i) => `<button type="button" class="dy${d[2] >= 600 ? ' cl' : ''}" aria-label="${['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'][i]} ${d[1]} October"><small>${d[0]}</small><b>${d[1]}</b><i></i></button>`).join(''),
      );
      const btns = [...root.querySelectorAll('.dy')];
      const rings = [$('.r1'), $('.r2'), $('.r3')];
      const vals = [$('.v1'), $('.v2'), $('.v3')];
      const list = $('.wo');
      const shown = [0, 0, 0];
      const roll = (k, to) => {
        const from = shown[k];
        shown[k] = to;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const p = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 900);
          vals[k].textContent = String(Math.round(from + (to - from) * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      let now = -1;
      const show = (i, animate) => {
        const d = days[i];
        now = i;
        btns.forEach((b, k) => {
          b.classList.toggle('on', k === i);
          b.setAttribute('aria-pressed', String(k === i));
        });
        pill.style.transform = `translateX(${i * 100}%)`;
        [d[2] / 600, d[3] / 30, d[4] / 12].forEach((v, k) => {
          rings[k].style.strokeDashoffset = String(1 - Math.min(1, v));
          if (animate) roll(k, [d[2], d[3], d[4]][k]);
          else {
            shown[k] = [d[2], d[3], d[4]][k];
            vals[k].textContent = String(shown[k]);
          }
        });
        list.innerHTML = d[5]
          .map((w, k) => `<li style="--i:${animate ? k : 0}"><span class="wi"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ic[w[0]]}</svg></span><div><b>${w[1]}</b><small>${w[2]}</small></div><em>${w[3]}</em></li>`)
          .join('');
        if (!animate) list.querySelectorAll('li').forEach((li) => (li.style.animation = 'none'));
      };
      btns.forEach((b, k) => b.addEventListener('click', () => k !== now && show(k, true)));
      show(6, false);

      // Autoplay: tap through the days; any real input hands over for 4s.
      const order = [4, 2, 5, 0, 6];
      let step = 0;
      (async () => {
        await wait(2200);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const next = btns[order[step % order.length]];
          if (await tap(next, 0.5, 0.5)) step++;
          await wait(3400);
        }
      })();
    },
    prompt: `Build a fitness "Today" screen with three concentric activity rings, a week strip and a workouts list, as a 100dvh mobile column (max-width 430px centered on larger screens) with a bottom tab bar.

Header: eyebrow with the gym name, large title "Activity" (32px/700) and an initials avatar. Week strip: a 7-column grid on a soft pill track, each day a 62px button with a weekday letter, the date number and a small dot when the move goal was met. ONE shared highlight (an absolutely positioned accent gradient pill, width calc((100% - 8px) / 7)) slides between days with transform: translateX(index * 100%) on a spring (linear() curve, 590ms); the selected day's text turns white.

Rings card: a 160px SVG with three circles per ring (a faint track and a progress circle) at radii 72, 53 and 34, stroke-width 15, round caps, rotated -90deg, in three steps of the accent blue. Each progress circle uses pathLength="1", stroke-dasharray: 1 and stroke-dashoffset = 1 - min(1, value / goal), with transition: stroke-dashoffset 1.1s cubic-bezier(.32,.72,0,1). Beside it a legend with Move (kcal), Exercise (min) and Stand (hours): label, 26px tabular number that counts to the new value over 900ms and the goal in muted text.

Below, a "Workouts" list: 46px icon tile, name, "distance or duration - calories" and the start time; rows re-render with a 60ms stagger (opacity 0 and translateY(10px) to rest) when the day changes. Each day button is a real button with aria-pressed; arrow keys move between days. prefers-reduced-motion removes the stagger and shortens the ring fill. Plain HTML, CSS and JS, no libraries; React-friendly structure (ActivityScreen, WeekStrip, ActivityRings, WorkoutList).`,
  });

  // ---------------------------------------------------------------- 5. booking flow
  ML.add({
    id: 'app-mobile-booking',
    cat: 'app-mobile',
    title: 'Booking flow with confirm sheet',
    sub: 'Pick a day and slot, confirm in a sheet',
    html: frame(
      `
<div class="body bk">
  <header class="bk-h"><button type="button" class="ibtn" aria-label="Back">${I(P.chevL, 22)}</button><h2>Book a visit</h2><span class="ibtn ph0" aria-hidden="true"></span></header>
  <section class="doc"><span class="av dv">HK</span><div><b>Dr. Hana Kim</b><small>Dental check-up - 45 min</small><span class="rate">${I(P.star, 13)}4.9 <em>(212 reviews)</em></span></div></section>
  <p class="mo"><b>October 2026</b><span>Brightline Dental</span></p>
  <div class="dates" role="radiogroup" aria-label="Date"><span class="dp" aria-hidden="true"></span></div>
  <h3 class="lab">Available times</h3>
  <div class="slots" role="radiogroup" aria-label="Time"></div>
  <p class="note">${I(P.shield, 16)}Free cancellation up to 24 hours before</p>
</div>
<div class="bk-cta"><button type="button" class="btn cont" disabled><span class="lbl">Select a time</span><span class="done">${I(P.check, 20, 2.8)}Booked</span></button></div>
<div class="scrim"></div>
<div class="sheet cf" role="dialog" aria-label="Confirm booking">
  <div class="grab"></div>
  <h2>Confirm your visit</h2>
  <ul class="sum">
    <li>${I(P.user, 19)}<div><small>Dentist</small><b>Dr. Hana Kim</b></div></li>
    <li>${I(P.cal, 19)}<div><small>Date</small><b class="sd">Thu 15 Oct</b></div></li>
    <li>${I(P.clock, 19)}<div><small>Time</small><b class="st">10:30 AM</b></div></li>
    <li>${I(P.pin, 19)}<div><small>Clinic</small><b>12 Harbor St, Suite 4</b></div></li>
  </ul>
  <button type="button" class="btn cfb"><span class="lbl">Confirm booking</span><span class="busy">Booking</span><span class="done">${I(P.check, 20, 2.8)}Booked</span></button>
  <button type="button" class="lk cl">Cancel</button>
</div>`,
      [P.cal, 'Real dates', 'Thu 15 Oct to Tue 20 Oct', 22],
      [P.check, 'Confirm sheet', 'Review, then book', 68],
    ),
    css: `${BASE}
.d .bk-h{display:flex;align-items:center;justify-content:space-between;padding:4px 16px 6px}
.d .bk-h h2{font-size:18px;font-weight:700;letter-spacing:-.025em}
.d .ph0{visibility:hidden}
.d .doc{display:flex;align-items:center;gap:14px;margin:8px 20px 0;padding:14px;border-radius:22px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .dv{width:58px;height:58px;font-size:19px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .doc b{display:block;font-size:18px;font-weight:700;letter-spacing:-.025em}
.d .doc small{display:block;font-size:14px;color:var(--ml-muted)}
.d .rate{display:inline-flex;align-items:center;gap:4px;margin-top:4px;font-size:13.5px;font-weight:650;color:var(--ml-accent-ink)}
.d .rate svg{fill:currentColor}
.d .rate em{font-style:normal;font-weight:500;color:var(--ml-muted)}
.d .mo{display:flex;align-items:baseline;justify-content:space-between;padding:20px 22px 10px}
.d .mo b{font-size:20px;font-weight:700;letter-spacing:-.03em}
.d .mo span{font-size:13.5px;color:var(--ml-muted)}
.d .dates{position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px;margin:0 20px}
.d .dp{position:absolute;top:0;left:0;width:calc((100% - 32px) / 5);height:76px;border-radius:18px;background:var(--ml-grad);box-shadow:0 8px 18px rgba(255,68,51,.28);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .dt{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;height:76px;border:0;border-radius:18px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);font-size:13px;font-weight:600;cursor:pointer;transition:background-color .25s ease,color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .dt b{font-size:22px;font-weight:700;letter-spacing:-.03em;color:var(--ml-ink);transition:color .25s ease}
.d .dt.on{background:transparent;box-shadow:none;color:rgba(255,255,255,.85)}
.d .dt.on b{color:#fff}
.d .dt.press{transform:scale(.94)}
.d .lab{padding:20px 22px 10px;font-size:20px;font-weight:700;letter-spacing:-.03em}
.d .slots{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;padding:0 20px}
.d .sl{height:48px;border:0;border-radius:15px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:15px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--ml-ink);cursor:pointer;animation:mb-in 480ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 35ms);transition:background-color .25s ease,color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .sl.press{transform:scale(.94)}
.d .sl.on{background:var(--ml-accent);box-shadow:0 6px 14px rgba(255,68,51,.28);color:#fff}
.d .sl:disabled{background:var(--ml-surface);box-shadow:none;color:#B4BAC6;text-decoration:line-through;cursor:default}
.d .note{display:flex;align-items:center;gap:8px;margin:16px 22px 0;font-size:13.5px;color:var(--ml-muted)}
.d .note svg{color:var(--ml-accent)}
.d .bk-cta{position:absolute;left:0;right:0;bottom:0;z-index:6;padding:12px 20px var(--hb);background:rgba(255,255,255,.94);border-top:1px solid var(--ml-line)}
.d .bk{padding-bottom:96px}
.d .cf h2{padding:2px 0 8px;font-size:24px;font-weight:700;letter-spacing:-.035em}
.d .sum{margin-bottom:16px;list-style:none}
.d .sum li{display:flex;align-items:center;gap:14px;padding:11px 0;border-bottom:1px solid var(--ml-line);color:var(--ml-accent)}
.d .sum li:last-child{border-bottom:0}
.d .sum li svg{flex:none}
.d .sum small{display:block;font-size:12.5px;color:var(--ml-muted)}
.d .sum b{display:block;font-size:17px;font-weight:650;letter-spacing:-.015em;color:var(--ml-ink)}
.d .cf .lk{width:100%}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .sl{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      // Thu 15, Fri 16, Sat 17, Mon 19, Tue 20 October 2026 (14 October is a Wednesday)
      const dates = [['Thu', 15], ['Fri', 16], ['Sat', 17], ['Mon', 19], ['Tue', 20]];
      const times = ['9:00 AM', '9:45 AM', '10:30 AM', '11:15 AM', '1:00 PM', '1:45 PM', '2:30 PM', '3:15 PM', '4:00 PM'];
      const taken = [[1, 4, 7], [0, 5], [2, 3, 6, 8], [1, 6], [4, 7]];
      const dEl = $('.dates');
      const dp = $('.dp');
      const slots = $('.slots');
      const cont = $('.cont');
      const lbl = cont.querySelector('.lbl');
      const scrim = $('.scrim');
      const sheet = $('.sheet');
      const cfb = $('.cfb');
      dEl.insertAdjacentHTML('beforeend', dates.map((d, i) => `<button type="button" class="dt" role="radio" aria-checked="false" aria-label="${d[0]} ${d[1]} October">${d[0]}<b>${d[1]}</b></button>`).join(''));
      const dts = [...root.querySelectorAll('.dt')];
      let di = 0;
      let ti = -1;
      let booking = false;
      const renderSlots = (animate) => {
        slots.innerHTML = times.map((t, i) => `<button type="button" class="sl${i === ti ? ' on' : ''}" role="radio" aria-checked="${i === ti}" data-i="${i}" style="--i:${animate ? i : 0}"${taken[di].includes(i) ? ' disabled' : ''}>${t}</button>`).join('');
        if (!animate) slots.querySelectorAll('.sl').forEach((s) => (s.style.animation = 'none'));
      };
      const sync = () => {
        dp.style.transform = `translateX(calc(${di} * (100% + 8px)))`;
        dts.forEach((b, i) => {
          b.classList.toggle('on', i === di);
          b.setAttribute('aria-checked', String(i === di));
        });
        cont.disabled = ti < 0;
        lbl.textContent = ti < 0 ? 'Select a time' : `Continue - ${dates[di][0]} ${dates[di][1]} Oct, ${times[ti]}`;
        $('.sd').textContent = `${dates[di][0]} ${dates[di][1]} Oct`;
        $('.st').textContent = ti < 0 ? '' : times[ti];
      };
      dts.forEach((b, i) =>
        b.addEventListener('click', () => {
          if (i === di || booking) return;
          di = i;
          ti = -1;
          sync();
          renderSlots(true);
        }),
      );
      slots.addEventListener('click', (e) => {
        const b = e.target.closest('.sl');
        if (!b || b.disabled || booking) return;
        ti = +b.dataset.i;
        slots.querySelectorAll('.sl').forEach((s) => {
          s.classList.toggle('on', s === b);
          s.setAttribute('aria-checked', String(s === b));
        });
        sync();
      });
      const open = () => {
        scrim.classList.add('open');
        sheet.classList.add('open');
      };
      const close = () => {
        scrim.classList.remove('open');
        sheet.classList.remove('open');
      };
      cont.addEventListener('click', () => !cont.disabled && !booking && open());
      $('.cl').addEventListener('click', close);
      scrim.addEventListener('click', close);
      cfb.addEventListener('click', async () => {
        if (booking) return;
        booking = true;
        cfb.classList.add('loading');
        await wait(1000);
        cfb.classList.replace('loading', 'ok');
        await wait(800);
        close();
        await wait(450);
        cont.classList.add('ok');
        await wait(2000);
        cont.classList.remove('ok');
        cfb.classList.remove('ok');
        di = 0;
        ti = -1;
        sync();
        renderSlots(true);
        booking = false;
      });
      sync();
      renderSlots(false);

      // Autoplay: another day, a free slot, Continue, Confirm; any real input hands over for 4s.
      const picks = [[1, 3], [3, 0], [4, 2]];
      let loop = 0;
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || booking) {
            await wait(400);
            continue;
          }
          if (sheet.classList.contains('open')) {
            close();
            await wait(700);
          }
          const [d, t] = picks[loop % picks.length];
          if (!(await tap(dts[d], 0.5, 0.5))) continue;
          await wait(900);
          const s = slots.querySelector(`[data-i="${t}"]`);
          if (!s || s.disabled) {
            loop++;
            continue;
          }
          if (!(await tap(s, 0.5, 0.5))) continue;
          await wait(700);
          if (!(await tap(cont, 0.5, 0.5))) continue;
          await wait(1500);
          if (!(await tap(cfb, 0.5, 0.5, 900))) continue;
          cur.classList.add('off');
          loop++;
          await wait(5200);
        }
      })();
    },
    prompt: `Build a mobile appointment booking screen: provider card, date chips, time slots, a sticky continue bar and a confirm bottom sheet (100dvh column, max-width 430px centered on larger screens).

Layout: a back button header ("Book a visit"), a provider card (58px initials avatar, name, service and duration, rating with a filled star), the month label with the clinic name, five date chips in a 5-column grid (76px tall, weekday and 22px day number), an "Available times" heading and a 3-column grid of 48px slot buttons. Taken slots are disabled with a muted strikethrough. A sticky bottom bar (blurred white, top hairline, safe-area padding) holds a full-width primary button that reads "Select a time" and is disabled until a slot is chosen, then reads "Continue - Thu 15 Oct, 10:30 AM".

Motion: ONE shared accent pill sits behind the date chips and moves with transform: translateX(calc(index * (100% + 8px))) on a spring (linear() curve, 590ms); the selected chip's text turns white. Changing the day clears the slot and re-renders the slots with a 35ms stagger (opacity 0 and translateY(10px) to rest). The chosen slot fills with the accent and the label updates.

Confirm sheet: Continue opens a bottom sheet (30px top radius, grab handle, 34% ink scrim, translateY(112%) to 0 on a spring) listing dentist, date, time and address with icons, a "Confirm booking" button and a text Cancel. Confirm slides the label to "Booking" with a sheen across the button (no spinner), turns green "Booked", closes the sheet and marks the bar as booked, then resets.

Accessibility: date and time groups are role="radiogroup" with role="radio" and aria-checked, the sheet is role="dialog" with focus moved inside and restored, all targets are 44px or taller, prefers-reduced-motion removes the stagger. Plain HTML, CSS and JS, no libraries; React-friendly structure (BookingScreen, ProviderCard, DateChips, SlotGrid, ContinueBar, ConfirmSheet).`,
  });

  // ---------------------------------------------------------------- 6. chat app
  ML.add({
    id: 'app-mobile-chat',
    cat: 'app-mobile',
    title: 'Chat app conversation',
    sub: 'Types, sends, typing dots, a reply lands',
    html: frame(
      `
<div class="body ch">
  <header class="ch-h"><button type="button" class="ibtn flat" aria-label="Back">${I(P.chevL, 24)}</button><span class="av">PN<i></i></span><div class="who"><b>Priya Nair</b><small>Kestrel &amp; Co - online</small></div><button type="button" class="ibtn flat" aria-label="Call">${I(P.call, 21)}</button></header>
  <div class="msgs no-scroll" role="log" aria-live="polite"><div class="mi"></div></div>
  <form class="comp" autocomplete="off"><button type="button" class="att" aria-label="Attach">${I(P.plus, 22)}</button><input type="text" placeholder="Message" aria-label="Message"><button type="submit" class="snb" aria-label="Send" disabled>${I(P.arrowUp, 20, 2.6)}</button></form>
</div>`,
      [P.msg, 'Live conversation', 'Bubbles spring in, list follows', 24],
      [P.clock, 'Typing indicator', 'Three dots before a reply', 66],
    ),
    css: `${BASE}
.d .ch-h{display:flex;align-items:center;gap:10px;padding:2px 12px 10px 6px;border-bottom:1px solid var(--ml-line)}
.d .flat{border-radius:50%;box-shadow:none;background:none}
.d .ch-h .av{position:relative}
.d .ch-h .av i{position:absolute;right:0;bottom:1px;width:11px;height:11px;border-radius:50%;background:#1DB954;box-shadow:0 0 0 2px #fff}
.d .who{flex:1;min-width:0}
.d .who b{display:block;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .who small{display:block;font-size:13px;color:var(--ml-muted)}
.d .msgs{flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain;background:linear-gradient(180deg,#FBFCFF,#F4F8FF)}
.d .mi{display:flex;flex-direction:column;justify-content:flex-end;gap:6px;min-height:100%;padding:12px 14px 10px}
.d .dv2{align-self:center;margin:6px 0;font-size:12px;font-weight:600;color:var(--ml-muted)}
.d .bb{max-width:78%;padding:9px 14px;border-radius:21px;font-size:16.5px;line-height:1.3;letter-spacing:-.01em;animation:mb-pop 480ms var(--ml-bounce) both}
.d .bb.in{align-self:flex-start;border-bottom-left-radius:7px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);transform-origin:0 100%}
.d .bb.out{align-self:flex-end;border-bottom-right-radius:7px;background:var(--ml-accent);color:#fff;transform-origin:100% 100%}
.d .bb.old{animation:none}
.d .rcp{align-self:flex-end;margin:-2px 4px 2px;font-size:12px;font-weight:600;color:var(--ml-muted)}
.d .ty{display:flex;gap:5px;align-self:flex-start;padding:15px 16px;border-radius:21px;border-bottom-left-radius:7px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);animation:mb-pop 400ms var(--ml-bounce) both;transform-origin:0 100%}
.d .ty i{width:8px;height:8px;border-radius:50%;background:#A9B6CC;animation:mb-ty 1s ease-in-out infinite}
.d .ty i:nth-child(2){animation-delay:.16s}.d .ty i:nth-child(3){animation-delay:.32s}
@keyframes mb-ty{0%,70%,100%{transform:translateY(0);opacity:.5}35%{transform:translateY(-5px);opacity:1}}
.d .comp{display:flex;flex:none;align-items:center;gap:8px;padding:8px 12px var(--hb);background:rgba(255,255,255,.95);border-top:1px solid var(--ml-line)}
.d .att{display:grid;flex:none;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--ml-surface);color:var(--ml-muted);cursor:pointer}
.d .comp input{flex:1;min-width:0;height:44px;padding:0 16px;border:0;border-radius:99px;outline:0;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:16.5px;transition:box-shadow .2s ease,background-color .2s ease}
.d .comp input:focus,.d .comp input.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .comp input::placeholder{color:#A1A1A6}
.d .snb{display:grid;flex:none;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--ml-accent);color:#fff;cursor:pointer;transition:opacity .2s ease,transform 90ms ease-out}
.d .snb:disabled{opacity:.3;cursor:default}
.d .snb.press,.d .snb:active:not(:disabled){transform:scale(.9)}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .bb,.d .ty,.d .ty i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
        input.classList.remove('is-auto');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      const msgs = $('.msgs');
      const list = $('.mi');
      const form = $('.comp');
      const input = $('input');
      const sendBtn = $('.snb');
      const esc = (t) => t.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
      const seed = [
        ['d', 'Yesterday'],
        ['in', 'Hi Maya, quick one about the Brightline site.'],
        ['out', 'Sure, what do you need?'],
        ['in', 'Did the homepage mockups come through?'],
        ['out', 'Yes, sent last night. Two options for the hero.'],
        ['d', 'Today 9:12 AM'],
        ['in', 'Option B is closer to what the team wants.'],
        ['out', 'Great, I will refine B and add mobile views.'],
        ['in', 'Thanks! Any chance of a revised quote by noon?'],
      ];
      list.innerHTML = seed.map(([k, t]) => (k === 'd' ? `<span class="dv2">${t}</span>` : `<div class="bb ${k} old">${t}</div>`)).join('');
      msgs.scrollTop = msgs.scrollHeight;
      const toEnd = () => msgs.scrollTo({ top: msgs.scrollHeight, behavior: 'smooth' });
      const trim = () => {
        while (list.children.length > 18) list.firstElementChild.remove();
      };
      const rcp = (t) => {
        list.querySelector('.rcp')?.remove();
        list.insertAdjacentHTML('beforeend', `<span class="rcp">${t}</span>`);
      };
      const add = (k, t) => {
        list.querySelector('.ty')?.remove();
        list.insertAdjacentHTML('beforeend', `<div class="bb ${k}">${esc(t)}</div>`);
        trim();
        toEnd();
      };
      const replies = ['Perfect, I will pass it to Daniel.', 'Got it. Looks good to me.', 'Yes please, Thursday works.', 'Thanks Maya, that helps.'];
      let r = 0;
      let waiting = false;
      const reply = async () => {
        if (waiting) return;
        waiting = true;
        await wait(900);
        list.insertAdjacentHTML('beforeend', '<div class="ty" aria-label="Priya is typing"><i></i><i></i><i></i></div>');
        toEnd();
        await wait(1500);
        add('in', replies[r++ % replies.length]);
        rcp('Read 9:42 AM');
        toEnd();
        waiting = false;
      };
      input.addEventListener('input', () => (sendBtn.disabled = !input.value.trim()));
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const t = input.value.trim();
        if (!t) return;
        input.value = '';
        sendBtn.disabled = true;
        add('out', t);
        rcp('Delivered');
        toEnd();
        reply();
      });

      // Autoplay: type a message, send it, watch the typing dots and the reply; any real input hands over for 4s.
      const lines = ['Sending it over in ten minutes.', 'Quote v2 is in your inbox.', 'Want me to book the kickoff call?'];
      let loop = 0;
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle() || waiting || input.value) {
            await wait(400);
            continue;
          }
          if (!(await tap(input, 0.4, 0.5))) continue;
          input.focus({ preventScroll: true });
          input.classList.add('is-auto');
          let ok = true;
          for (const ch of lines[loop % lines.length]) {
            if (!idle()) {
              ok = false;
              break;
            }
            input.value += ch;
            sendBtn.disabled = false;
            await wait(48 + Math.random() * 50);
          }
          input.classList.remove('is-auto');
          if (!ok) continue;
          await wait(350);
          if (!(await tap(sendBtn, 0.5, 0.5, 700))) continue;
          input.blur();
          cur.classList.add('off');
          loop++;
          await wait(4800);
        }
      })();
    },
    prompt: `Build a mobile one-to-one chat screen (100dvh column, max-width 430px centered on larger screens) with a header, a scrolling message log and a composer.

Header: back button, a 44px initials avatar with a green presence dot, name and "Company - online", and a call button, with a 1px bottom hairline. Messages: a bottom-anchored list (min-height: 100% with justify-content: flex-end inside a scroller) on a very light blue wash. Incoming bubbles are white with a hairline, outgoing bubbles use your accent with white text; 21px radius with a 7px corner on the tail side, max-width 78%, 16.5px text. Small centered day dividers ("Yesterday", "Today 9:12 AM") and a right-aligned receipt line under the last sent message ("Delivered", then "Read 9:42 AM").

Composer: a 44px attach button, a 44px pill input and a 44px round send button that is disabled until there is text; focus gives a 1.5px accent ring with a 4px soft ring. Enter or the button submits.

Motion: new bubbles spring in with a scale-and-fade (scale .7 to 1.08 to 1, 480ms, transform-origin on the tail corner) and the log scrolls to the end with scrollTo({ top: scrollHeight, behavior: 'smooth' }). After a send, wait about 900ms, show a typing bubble with three 8px dots bouncing (translateY -5px, staggered .16s, 1s loop), then replace it with the reply and update the receipt. Never use a spinner.

Accessibility: the log is role="log" with aria-live="polite", the typing bubble has an aria-label, inputs and buttons are labelled, targets are 44px, prefers-reduced-motion removes the bounce. Plain HTML, CSS and JS, no libraries; React-friendly structure (ChatScreen, MessageList, Bubble, TypingIndicator, Composer).`,
  });

  // ---------------------------------------------------------------- 7. profile
  ML.add({
    id: 'app-mobile-profile',
    cat: 'app-mobile',
    title: 'Profile with stats and tabs',
    sub: 'Follow counts up, tab bar glides, grid swaps',
    html: frame(
      `
<div class="body pf">
  <div class="cover" aria-hidden="true"><svg viewBox="0 0 360 110" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="ml-mbp-cv" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFF0ED"/><stop offset="1" stop-color="#7FB4FF"/></linearGradient></defs><rect width="360" height="110" fill="url(#ml-mbp-cv)"/><circle cx="290" cy="38" r="20" fill="#fff" opacity=".8"/><path d="M0 110V76l60-34 52 28 60-40 70 48 118-30v62z" fill="#fff" opacity=".5"/><path d="M0 110V92l80-24 90 22 90-26 100 30v16z" fill="#FF4433" opacity=".28"/></svg></div>
  <header class="pf-h"><span class="av xl">AT</span><div class="pf-act"><button type="button" class="fbt"><span class="lbl">Follow</span><span class="done">${I(P.check, 17, 2.8)}Following</span></button><button type="button" class="ibtn" aria-label="Message">${I(P.msg, 21)}</button></div></header>
  <div class="pf-id"><h1>Aiko Tan</h1><p class="hd">@aikotan - Product designer at Solace Studio</p><p class="bio">Calm interfaces, loud coffee. Shaping the Fernway trails app this fall.</p></div>
  <div class="stats"><p><b>128</b><small>Posts</small></p><p><b class="fol">12,400</b><small>Followers</small></p><p><b>342</b><small>Following</small></p></div>
  <div class="tb2" role="tablist" aria-label="Profile content"><span class="ind" aria-hidden="true"></span><button type="button" role="tab" aria-selected="true" aria-label="Posts" class="on">${I(P.grid, 22)}</button><button type="button" role="tab" aria-selected="false" aria-label="Saved">${I(P.bookmark, 22)}</button><button type="button" role="tab" aria-selected="false" aria-label="Tagged">${I(P.at, 22)}</button></div>
  <div class="gr no-scroll" role="tabpanel"></div>
</div>
${tabs([[P.home, 'Home'], [P.search, 'Search'], [P.plus, 'New'], [P.bell, 'Alerts'], [P.user, 'Profile']], 4)}`,
      [P.user, 'Live stats', 'Followers tick up on follow', 24],
      [P.grid, 'Sliding tab bar', 'One indicator, three grids', 66],
    ),
    css: `${BASE}
.d .cover{flex:none;height:130px;margin-top:-50px}
.d .cover svg{display:block;width:100%;height:100%}
.d .pf-h{display:flex;flex:none;align-items:flex-end;justify-content:space-between;margin:-44px 20px 0}
.d .xl{width:92px;height:92px;font-size:30px;letter-spacing:-.03em;background:#fff;box-shadow:0 0 0 5px #fff,inset 0 0 0 1px var(--ml-accent-line),0 0 0 6px var(--ml-line)}
.d .pf-act{display:flex;align-items:center;gap:8px;padding-bottom:2px}
.d .fbt{position:relative;display:grid;place-items:center;min-width:120px;height:44px;padding:0 20px;border:0;border-radius:14px;overflow:hidden;background:var(--ml-grad);color:#fff;font-size:16px;font-weight:650;box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22);cursor:pointer;transition:transform 90ms ease-out,background-color .3s ease,color .3s ease,box-shadow .3s ease}
.d .fbt > span{grid-area:1/1;display:inline-flex;align-items:center;gap:6px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .fbt .done{opacity:0;transform:translateY(12px)}
.d .fbt.on{background:var(--ml-bg);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .fbt.on .lbl{opacity:0;transform:translateY(-12px)}
.d .fbt.on .done{opacity:1;transform:none}
.d .fbt.press{transform:scale(.96)}
.d .pf-id{flex:none;padding:12px 22px 0}
.d .pf-id h1{font-size:28px;line-height:1.1;font-weight:700;letter-spacing:-.035em}
.d .hd{margin-top:2px;font-size:14.5px;color:var(--ml-muted)}
.d .bio{margin-top:8px;font-size:15.5px;line-height:1.35;color:var(--ml-ink-2)}
.d .stats{display:grid;flex:none;grid-template-columns:repeat(3,1fr);margin:14px 20px 4px;padding:12px 0;border-radius:20px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:center}
.d .stats b{display:block;font-size:22px;line-height:1.1;font-weight:700;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .stats small{font-size:13px;color:var(--ml-muted)}
.d .tb2{position:relative;display:grid;flex:none;grid-template-columns:repeat(3,1fr);margin-top:6px;border-bottom:1px solid var(--ml-line)}
.d .tb2 button{display:grid;place-items:center;height:46px;border:0;background:none;color:var(--ml-muted);cursor:pointer;transition:color .25s ease,transform 90ms ease-out}
.d .tb2 button.on{color:var(--ml-accent)}
.d .tb2 button.press{transform:scale(.92)}
.d .ind{position:absolute;bottom:-1px;left:0;width:33.3333%;height:3px;border-radius:3px 3px 0 0;background:var(--ml-accent);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .gr{display:grid;flex:1;min-height:0;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:min-content;gap:4px;padding:4px;overflow-y:auto}
.d .t{aspect-ratio:1;border-radius:6px;overflow:hidden;animation:mb-in 480ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 40ms)}
.d .t svg{display:block;width:100%;height:100%}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .t{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      const pal = [['#FFEBE8', '#8FBEFF'], ['#EEF4FF', '#5FA8FF'], ['#C8DEFF', '#FF5745'], ['#E4EEFF', '#A8CCFF'], ['#D3E5FF', '#FF7A3D'], ['#F0F6FF', '#7DB3FF']];
      let uid = 0;
      const tile = (k) => {
        const c = pal[k % 6];
        const g = `ml-mbp-${uid++}`;
        const shape = [
          '<circle cx="70" cy="30" r="14" fill="#fff" opacity=".85"/><path d="M0 100V70l30-24 24 18 20-14 26 22v28z" fill="#fff" opacity=".55"/>',
          `<circle cx="35" cy="40" r="26" fill="#fff" opacity=".6"/><circle cx="64" cy="62" r="30" fill="${c[1]}" opacity=".8"/><circle cx="72" cy="26" r="10" fill="#fff"/>`,
          '<path d="M-10 70 70-10h30L0 100h-10z" fill="#fff" opacity=".45"/><path d="M30 110 110 30v30L60 110z" fill="#fff" opacity=".35"/>',
          `<path d="M22 100V56a28 28 0 0 1 56 0v44z" fill="#fff" opacity=".6"/><circle cx="50" cy="56" r="10" fill="${c[1]}" opacity=".6"/>`,
        ][k % 4];
        return `<div class="t" style="--i:ANIM"><svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c[0]}"/><stop offset="1" stop-color="${c[1]}"/></linearGradient></defs><rect width="100" height="100" fill="url(#${g})"/>${shape}</svg></div>`;
      };
      const sets = [[0, 1, 2, 3, 4, 5, 6, 7, 8], [5, 2, 7, 0, 3, 6], [4, 1, 8, 5]];
      const gr = $('.gr');
      const tabs = [...root.querySelectorAll('.tb2 button')];
      const ind = $('.ind');
      let tab = 0;
      const render = (i, animate) => {
        tab = i;
        tabs.forEach((b, k) => {
          b.classList.toggle('on', k === i);
          b.setAttribute('aria-selected', String(k === i));
        });
        ind.style.transform = `translateX(${i * 100}%)`;
        gr.innerHTML = sets[i].map((k, n) => tile(k + i * 2).replace('ANIM', String(animate ? n : 0))).join('');
        if (!animate) gr.querySelectorAll('.t').forEach((t) => (t.style.animation = 'none'));
        gr.scrollTop = 0;
      };
      tabs.forEach((b, k) => b.addEventListener('click', () => k !== tab && render(k, true)));
      render(0, false);

      const fbt = $('.fbt');
      const fol = $('.fol');
      let shown = 12400;
      const roll = (to) => {
        const from = shown;
        shown = to;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 700);
          fol.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US');
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      fbt.addEventListener('click', () => {
        const on = fbt.classList.toggle('on');
        fbt.setAttribute('aria-pressed', String(on));
        roll(on ? 12401 : 12400);
      });

      // Autoplay: switch tabs, follow, unfollow; any real input hands over for 4s.
      (async () => {
        await wait(2000);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await tap(tabs[1], 0.5, 0.5))) continue;
          await wait(2200);
          if (!(await tap(tabs[2], 0.5, 0.5))) continue;
          await wait(2200);
          if (!(await tap(tabs[0], 0.5, 0.5))) continue;
          await wait(1800);
          if (!(await tap(fbt, 0.5, 0.5))) continue;
          await wait(3000);
          if (!(await tap(fbt, 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(2400);
        }
      })();
    },
    prompt: `Build a mobile profile screen (100dvh column, max-width 430px centered on larger screens) with a cover, identity block, stats, a tab bar with a sliding indicator and a photo grid, plus a bottom navigation bar.

Layout: a 104px cover drawn as inline SVG (blue gradient sky, a sun, two soft mountain layers) that extends under the status bar; a 92px initials avatar overlapping the cover by 44px with a 5px white ring; a Follow button and a message icon button (both 44px tall) aligned right of the avatar; name at 28px/700, handle and role in 14.5px muted, a two-line bio; a stats panel (3 equal columns: Posts, Followers, Following) with 22px tabular-nums numbers on a soft rounded surface; a 3-tab bar of icon buttons (grid, bookmark, mention) with a hairline; and a 3-column photo grid with 4px gaps and 6px tile radius where every tile is a drawn gradient with simple shapes (sun and hills, overlapping circles, diagonal bands, an arch).

Motion: ONE accent indicator (3px tall, width 33.333%) slides under the active tab with transform: translateX(index * 100%) on a spring (linear() curve, 590ms). Switching tabs replaces the grid and staggers the tiles in (opacity 0 and translateY(10px) to rest, 40ms apart). Tapping Follow slides the label up to a check and "Following" (outlined state) while the follower count tweens to the new value over 700ms with an ease-out cubic; tapping again reverses it. Press feedback is scale(.96) in 90ms.

Accessibility: tabs use role="tablist", role="tab" and aria-selected with a role="tabpanel" grid, the Follow button toggles aria-pressed, icon buttons carry aria-labels, targets are 44px, prefers-reduced-motion removes the stagger. Plain HTML, CSS and JS, no libraries; React-friendly structure (ProfileScreen, ProfileHeader, StatsRow, ProfileTabs, PhotoGrid).`,
  });

  // ---------------------------------------------------------------- 8. settings list (grouped rows, pushed detail)
  ML.add({
    id: 'app-mobile-settings',
    cat: 'app-mobile',
    title: 'Settings list with pushed detail',
    sub: 'Toggles spring, a detail view slides in',
    html: frame(
      `
<div class="body stg">
  <div class="stw">
    <section class="v vm" aria-label="Settings">
      <div class="vs no-scroll"></div>
      <div class="dim" aria-hidden="true"></div>
    </section>
    <section class="v vd" aria-label="Notifications"></section>
  </div>
</div>`,
      [P.gear, 'Grouped rows', 'Toggles, values, chevrons', 24],
      [P.chevR, 'Push navigation', 'Detail slides over the list', 66],
    ),
    css: `${BASE}
.d .stg{background:var(--ml-surface)}
.d .stw{position:relative;flex:1;min-height:0;overflow:hidden}
.d .v{position:absolute;inset:0;display:flex;flex-direction:column;background:var(--ml-surface);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .vd{transform:translateX(100%);box-shadow:-14px 0 30px rgba(35,15,10,.1);visibility:hidden;transition:transform var(--ml-spring-dur) var(--ml-spring),visibility 0s linear var(--ml-spring-dur)}
.d .stw.push .vd{transform:none;visibility:visible;transition:transform var(--ml-spring-dur) var(--ml-spring),visibility 0s}
.d .stw.push .vm{transform:translateX(-26%)}
.d .dim{position:absolute;inset:0;background:rgba(35,15,10,.12);opacity:0;pointer-events:none;transition:opacity .4s ease}
.d .stw.push .dim{opacity:1}
.d .vs{flex:1;min-height:0;overflow-y:auto;padding-bottom:var(--hb)}
.d .stg .ttl{padding:6px 22px 10px}
.d .srch{display:flex;align-items:center;gap:8px;height:42px;margin:0 16px 14px;padding:0 12px;border-radius:13px;background:#E8EEF8;color:var(--ml-muted);font-size:16.5px}
.d .me{display:flex;align-items:center;gap:14px;width:calc(100% - 32px);margin:0 16px 22px;padding:12px 14px;border:0;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:left;cursor:pointer}
.d .me .av{width:56px;height:56px;font-size:19px}
.d .me div{flex:1}
.d .me b{display:block;font-size:19px;font-weight:700;letter-spacing:-.025em}
.d .me small{display:block;font-size:13.5px;color:var(--ml-muted)}
.d .me > svg,.d .rw > svg{flex:none;color:#B4BAC6}
.d .lbl2{padding:0 24px 8px;font-size:12.5px;font-weight:650;letter-spacing:.05em;text-transform:uppercase;color:var(--ml-muted)}
.d .grp{margin:0 16px 22px;border-radius:18px;overflow:hidden;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .rw{position:relative;display:flex;align-items:center;gap:13px;width:100%;min-height:52px;padding:0 14px;border:0;background:none;text-align:left;font-size:17px;font-weight:500;cursor:pointer;transition:background-color .15s ease}
.d .rw + .rw::before{content:"";position:absolute;top:0;left:57px;right:0;height:1px;background:var(--ml-line)}
.d .grp.plain .rw + .rw::before{left:14px}
.d .rw:active,.d .rw.press{background:var(--ml-surface)}
.d .rw b{flex:1;font-weight:500}
.d .rw em{font-size:16.5px;font-style:normal;color:var(--ml-muted)}
.d .ri{display:grid;flex:none;place-items:center;width:31px;height:31px;border-radius:9px;color:#fff}
.d .c1{background:#FF4433}.d .c2{background:#FF7A3D}.d .c3{background:#FF5745}.d .c4{background:#B3150F}
.d .tg input{position:absolute;inset:0;opacity:0;cursor:pointer}
.d .sw{position:relative;flex:none;width:51px;height:31px;border-radius:99px;background:var(--ml-bar);transition:background-color .3s ease}
.d .sw::after{content:"";position:absolute;top:2px;left:2px;width:27px;height:27px;border-radius:50%;background:#fff;box-shadow:0 2px 5px rgba(35,15,10,.22);transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .tg input:checked + .sw{background:var(--ml-accent)}
.d .tg input:checked + .sw::after{transform:translateX(20px)}
.d.kb .tg input:focus-visible + .sw{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .nvb{position:relative;display:flex;flex:none;align-items:center;justify-content:center;height:48px;padding:0 8px}
.d .nvb h2{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .bk2{position:absolute;left:4px;top:2px;display:inline-flex;align-items:center;gap:0;height:44px;padding:0 10px 0 4px;border:0;background:none;font-size:17px;color:var(--ml-accent);cursor:pointer;transition:transform 90ms ease-out}
.d .bk2.press{transform:scale(.95)}
.d .vd .vs{padding-top:8px}
.d .note2{padding:0 24px 22px;font-size:13.5px;line-height:1.4;color:var(--ml-muted)}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      const svg = (d) => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const chev = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
      const ic = {
        bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
        face: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/>',
        hand: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
        wifi: '<path d="M12 20h.01"/><path d="M2 8.82a15 15 0 0 1 20 0"/><path d="M5 12.859a10 10 0 0 1 14 0"/><path d="M8.5 16.429a5 5 0 0 1 7 0"/>',
        phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
        zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
        lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
        globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
        disk: '<line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.55-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/>',
        info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
        moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
        vol: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>',
        tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5"/>',
        eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
      };
      let n = 0;
      const link = (icon, c, label, val, go) => `<button type="button" class="rw"${go ? ` data-go="${go}"` : ''}><span class="ri ${c}">${svg(ic[icon])}</span><b>${label}</b>${val ? `<em>${val}</em>` : ''}${chev}</button>`;
      const tog = (icon, c, label, on, id) => `<label class="rw tg"><span class="ri ${c}">${svg(ic[icon])}</span><b>${label}</b><input type="checkbox" role="switch" id="ml-mbs-${id || n++}"${on ? ' checked' : ''} aria-label="${label}"><i class="sw"></i></label>`;
      $('.vs').innerHTML = `
        <h1 class="ttl">Settings</h1>
        <div class="srch">${svg('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>')}Search</div>
        <button type="button" class="me"><span class="av">MR</span><div><b>Maya Reyes</b><small>Lumen Labs ID, Pro plan</small></div>${chev}</button>
        <div class="grp">${link('bell', 'c1', 'Notifications', 'On', 'notif')}${link('face', 'c3', 'Face ID and passcode', '')}${link('hand', 'c4', 'Privacy', '')}</div>
        <p class="lbl2">Preferences</p>
        <div class="grp">${tog('zap', 'c2', 'Push alerts', true)}${tog('wifi', 'c1', 'Sync over Wi-Fi only', false, 'wifi')}${tog('phone', 'c3', 'Haptic feedback', true, 'hap')}${link('lock', 'c4', 'Auto-lock', '30 sec')}</div>
        <div class="grp">${link('globe', 'c1', 'Language', 'English')}${link('disk', 'c2', 'Storage', '1.2 GB')}${link('info', 'c3', 'About', '')}</div>`;
      $('.vd').innerHTML = `
        <div class="nvb"><button type="button" class="bk2" aria-label="Back to Settings">${chev.replace('m9 18 6-6-6-6', 'm15 18-6-6 6-6')}Settings</button><h2>Notifications</h2></div>
        <div class="vs no-scroll">
          <div class="grp plain" style="margin-top:8px">${tog('bell', 'c1', 'Allow notifications', true)}</div>
          <p class="lbl2">Alerts</p>
          <div class="grp">${tog('tag', 'c3', 'Banners', true)}${tog('vol', 'c2', 'Sounds', true)}${tog('zap', 'c4', 'Badges', false, 'badge')}${link('eye', 'c1', 'Show previews', 'When unlocked')}</div>
          <p class="lbl2">Schedule</p>
          <div class="grp">${tog('moon', 'c4', 'Quiet hours', false, 'quiet')}${link('moon', 'c2', 'From 10:00 PM to 7:00 AM', '')}</div>
          <p class="note2">Quiet hours silence alerts overnight. Critical alerts still come through.</p>
        </div>`;
      root.addEventListener('keydown', () => root.classList.add('kb'));
      const stw = $('.stw');
      const push = () => stw.classList.add('push');
      const pop = () => stw.classList.remove('push');
      root.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', push));
      $('.bk2').addEventListener('click', pop);

      // Autoplay: flip a few toggles, push Notifications, flip two more, go back; any real input hands over for 4s.
      const sw = (id) => $(`#ml-mbs-${id}`).closest('label');
      (async () => {
        await wait(2000);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (stw.classList.contains('push')) {
            pop();
            await wait(900);
          }
          if (!(await tap(sw('wifi'), 0.9, 0.5))) continue;
          await wait(900);
          if (!(await tap(sw('hap'), 0.9, 0.5))) continue;
          await wait(1000);
          if (!(await tap($('[data-go="notif"]'), 0.5, 0.5))) continue;
          await wait(1300);
          if (!(await tap(sw('badge'), 0.9, 0.5))) continue;
          await wait(900);
          if (!(await tap(sw('quiet'), 0.9, 0.5))) continue;
          await wait(1100);
          if (!(await tap($('.bk2'), 0.45, 0.5))) continue;
          cur.classList.add('off');
          await wait(2200);
        }
      })();
    },
    prompt: `Build a mobile settings screen in the iOS grouped-list style, with a pushed detail view (100dvh, max-width 430px centered on larger screens, page background a soft blue-grey surface).

Main view: a 32px large title "Settings", a 42px search field, a profile row card (56px initials avatar, name, plan line, chevron), then grouped rows. Each group is a white card with an 18px radius and a 1px hairline; rows are at least 52px tall with a 31px rounded icon tile (white icon on one of four blue steps), a 17px label, an optional muted value and a disclosure chevron, separated by hairlines inset 57px from the left. Include navigation rows (Notifications, Face ID and passcode, Privacy, Auto-lock, Language, Storage, About) and switch rows (Push alerts, Sync over Wi-Fi only, Haptic feedback).

Switches: a real checkbox with role="switch" hidden over the row, a 51x31px track and a 27px knob. Checking changes the track to your accent and moves the knob with transform: translateX(20px) on a slightly overshooting spring (linear() curve, about 590ms). Tapping anywhere on the row toggles it.

Push navigation: Notifications slides its detail view in from the right (transform: translateX(100%) to 0 on a spring) while the list underneath moves to translateX(-26%) and a 12% ink dim fades in; the detail has a back button ("< Settings") and a centered title, and groups for Allow notifications, Banners, Sounds, Badges, Show previews and Quiet hours. Back reverses it. Keep the hidden view visibility: hidden until it is on screen.

Accessibility: rows are buttons or labels, focus-visible rings on the switches, back button has an aria-label, prefers-reduced-motion shortens the springs. Plain HTML, CSS and JS, no libraries; React-friendly structure (SettingsScreen, SettingsGroup, SettingsRow, Switch, NotificationsDetail).`,
  });

  // ---------------------------------------------------------------- 9. onboarding swipe
  ML.add({
    id: 'app-mobile-onboarding',
    cat: 'app-mobile',
    title: 'Onboarding swipe pages',
    sub: 'Drag between pages, dots stretch along',
    html: frame(
      `
<div class="body ob">
  <div class="ob-top"><span class="lgo"><i>${I(P.bag, 16)}</i>Corvid Coffee</span><button type="button" class="lk skip">Skip</button></div>
  <div class="vp" aria-roledescription="carousel" aria-label="Welcome">
    <div class="track">
      <section class="pg act" aria-label="1 of 3">
        <svg class="art" viewBox="0 0 300 250" aria-hidden="true">
          <circle cx="150" cy="128" r="112" fill="#FFF0EE"/>
          <circle cx="62" cy="62" r="7" fill="#FFD0CA"/><circle cx="246" cy="84" r="10" fill="#FFD0CA"/><circle cx="236" cy="206" r="6" fill="#FFF0ED"/>
          <ellipse cx="150" cy="206" rx="92" ry="15" fill="#fff" stroke="#FFD0CA" stroke-width="2"/>
          <ellipse cx="150" cy="203" rx="68" ry="9" fill="#EAF2FF"/>
          <path d="M214 140h12a22 22 0 0 1 0 44h-18" fill="none" stroke="#FF4433" stroke-width="9" stroke-linecap="round"/>
          <path d="M84 120h132v44a66 50 0 0 1-132 0z" fill="url(#ml-mbo-cup)"/>
          <path d="M84 120h132v10a66 12 0 0 1-132 0z" fill="#fff" opacity=".22"/>
          <path d="M104 150c0 24 12 40 28 46" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".45"/>
          <g class="steam" fill="none" stroke="#FF7A3D" stroke-width="6" stroke-linecap="round"><path d="M122 98c-10-10 10-18 0-30"/><path d="M150 100c-10-12 10-22 0-38"/><path d="M178 98c-10-10 10-18 0-30"/></g>
          <defs><linearGradient id="ml-mbo-cup" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF4433"/><stop offset="1" stop-color="#FF7A3D"/></linearGradient></defs>
        </svg>
        <h2>Fresh roasts, picked for you</h2><p>Tell us how you take your coffee and we line up a roast you will actually finish.</p>
      </section>
      <section class="pg" aria-label="2 of 3">
        <svg class="art" viewBox="0 0 300 250" aria-hidden="true">
          <rect x="28" y="30" width="244" height="190" rx="28" fill="#FFF0EE"/>
          <g stroke="#fff" stroke-width="12" stroke-linecap="round" fill="none"><path d="M28 120h244"/><path d="M110 30v190"/><path d="M200 30v100l72 40"/></g>
          <g stroke="#FFF0ED" stroke-width="3" fill="none" stroke-linecap="round"><path d="M28 170h120M200 80h72M50 70h40"/></g>
          <rect x="128" y="140" width="56" height="34" rx="10" fill="#fff" opacity=".9"/><rect x="40" y="132" width="40" height="22" rx="8" fill="#FFF0ED"/><rect x="212" y="52" width="44" height="28" rx="8" fill="#FFF0ED"/>
          <circle class="ring" cx="154" cy="104" r="26" fill="#FF4433" opacity=".16"/><circle class="ring r2" cx="154" cy="104" r="26" fill="#FF4433" opacity=".16"/>
          <path d="M154 148c-20-22-30-36-30-50a30 30 0 0 1 60 0c0 14-10 28-30 50Z" fill="url(#ml-mbo-pin)"/><circle cx="154" cy="98" r="11" fill="#fff"/>
          <rect x="188" y="170" width="76" height="32" rx="16" fill="#fff" stroke="#FFD0CA" stroke-width="2"/><circle cx="206" cy="186" r="7" fill="#FF7A3D"/><rect x="220" y="181" width="32" height="10" rx="5" fill="#FFD0CA"/>
          <defs><linearGradient id="ml-mbo-pin" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF4433"/><stop offset="1" stop-color="#FF7A3D"/></linearGradient></defs>
        </svg>
        <h2>Order ahead, skip the line</h2><p>Choose your Corvid, pay in the app and walk past the queue when it is ready.</p>
      </section>
      <section class="pg" aria-label="3 of 3">
        <svg class="art" viewBox="0 0 300 250" aria-hidden="true">
          <circle cx="150" cy="128" r="112" fill="#FFF0EE"/>
          <g transform="rotate(-6 150 125)"><rect x="42" y="58" width="216" height="134" rx="26" fill="url(#ml-mbo-card)"/>
          <rect x="42" y="58" width="216" height="134" rx="26" fill="none" stroke="#fff" stroke-opacity=".3" stroke-width="2"/>
          <rect x="62" y="76" width="64" height="9" rx="4.5" fill="#fff" opacity=".85"/>
          <g class="stamps" fill="#fff"><circle cx="82" cy="124" r="15" opacity=".95"/><circle cx="130" cy="124" r="15" opacity=".95"/><circle cx="178" cy="124" r="15" opacity=".95"/><circle cx="226" cy="124" r="15" opacity=".95"/>
          <circle cx="82" cy="166" r="15" opacity=".95"/><circle cx="130" cy="166" r="15" opacity=".95"/><circle cx="178" cy="166" r="15" opacity=".3"/><circle cx="226" cy="166" r="15" opacity=".3"/></g>
          <g fill="none" stroke="#FF4433" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><path d="m75 124 5 5 9-10"/><path d="m123 124 5 5 9-10"/><path d="m171 124 5 5 9-10"/><path d="m219 124 5 5 9-10"/><path d="m75 166 5 5 9-10"/><path d="m123 166 5 5 9-10"/></g></g>
          <circle cx="238" cy="52" r="26" fill="#fff" stroke="#FFD0CA" stroke-width="2"/><path d="M228 48h20v16h-20z M226 48h24 M238 48v16 M238 48c-5-9-12-6-9 0 M238 48c5-9 12-6 9 0" fill="none" stroke="#FF4433" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <defs><linearGradient id="ml-mbo-card" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF4433"/><stop offset="1" stop-color="#FF7A3D"/></linearGradient></defs>
        </svg>
        <h2>Every eighth cup is on us</h2><p>Stamps collect themselves. Reach eight and your next drink is free.</p>
      </section>
    </div>
  </div>
  <div class="ob-bot">
    <div class="pips" aria-hidden="true"><i></i><i></i><i></i><b class="pip"></b></div>
    <button type="button" class="btn nx"><span class="lbl">Next</span><span class="l2">Get started</span><span class="done">${I(P.check, 20, 2.8)}You are in</span></button>
  </div>
</div>`,
      [P.compass, 'Swipe or tap', 'Real drag with a bouncy settle', 22],
      [P.star, 'Three pages', 'Drawn art, no images', 70],
    ),
    css: `${BASE}
.d .ob-top{display:flex;align-items:center;justify-content:space-between;padding:2px 12px 0 22px}
.d .lgo{display:flex;align-items:center;gap:9px;font-size:17px;font-weight:700;letter-spacing:-.025em}
.d .lgo i{display:grid;place-items:center;width:30px;height:30px;border-radius:10px;background:var(--ml-grad);color:#fff}
.d .vp{position:relative;flex:1;min-height:0;overflow:hidden;touch-action:pan-y;user-select:none;-webkit-user-select:none;cursor:grab}
.d .track{display:flex;width:300%;height:100%;will-change:transform}
.d .pg{display:flex;flex:1;flex-direction:column;align-items:center;min-width:0;padding:10px 28px 0;text-align:center}
.d .art{display:block;width:100%;max-width:300px;height:auto;max-height:262px;flex:none}
.d .pg h2{margin-top:14px;font-size:30px;line-height:1.08;font-weight:700;letter-spacing:-.04em;max-width:290px}
.d .pg p{margin-top:12px;max-width:290px;font-size:16.5px;line-height:1.4;color:var(--ml-muted)}
.d .steam path{stroke-dasharray:60;animation:mb-steam 3.2s ease-in-out infinite}
.d .steam path:nth-child(2){animation-delay:.5s}.d .steam path:nth-child(3){animation-delay:1s}
@keyframes mb-steam{0%{stroke-dashoffset:60;opacity:0}25%{opacity:1}70%{stroke-dashoffset:0;opacity:.9}100%{stroke-dashoffset:-30;opacity:0}}
.d .ring{transform-origin:154px 104px;animation:mb-ring 2.6s ease-out infinite}
.d .ring.r2{animation-delay:1.3s}
@keyframes mb-ring{0%{transform:scale(.7);opacity:.5}100%{transform:scale(2.1);opacity:0}}
.d .stamps circle{transition:opacity .4s ease}
.d .ob-bot{display:flex;flex:none;flex-direction:column;align-items:center;gap:20px;padding:6px 24px calc(var(--hb) + 4px)}
.d .pips{position:relative;display:flex;gap:16px;height:8px}
.d .pips i{width:8px;height:8px;border-radius:50%;background:var(--ml-bar)}
.d .pip{position:absolute;left:0;top:0;width:8px;height:8px;border-radius:50%;background:var(--ml-accent);transform-origin:0 50%;transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .nx .l2{opacity:0;transform:translateY(12px)}
.d .nx.last .lbl{opacity:0;transform:translateY(-12px)}
.d .nx.last .l2{opacity:1;transform:none}
.d .nx.ok .l2{opacity:0;transform:translateY(-12px)}
.d .skip{transition:opacity .25s ease}
.d .skip.hide{opacity:0;pointer-events:none}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .steam path,.d .ring{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const scale = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      const tween = (ms, fn) =>
        new Promise((res) => {
          let last = performance.now();
          let acc = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = t;
              return requestAnimationFrame(f);
            }
            acc += t - last;
            last = t;
            const k = Math.min(1, acc / ms);
            fn(k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';

      const vp = $('.vp');
      const track = $('.track');
      const pages = [...root.querySelectorAll('.pg')];
      const pip = $('.pip');
      const nx = $('.nx');
      const skip = $('.skip');
      let i = 0;
      let x0 = 0;
      let dx = 0;
      let drag = false;
      let done = false;
      const W = () => vp.offsetWidth;
      const place = (extra, anim) => {
        track.style.transition = anim ? 'transform var(--ml-bounce-dur) var(--ml-bounce)' : 'none';
        track.style.transform = `translateX(${-i * W() + extra}px)`;
      };
      const go = (n) => {
        i = Math.max(0, Math.min(2, n));
        pip.style.transform = `translateX(${i * 24}px) scaleX(2.4)`;
        nx.classList.toggle('last', i === 2);
        skip.classList.toggle('hide', i === 2);
        pages.forEach((p, k) => {
          p.classList.toggle('act', k === i);
          p.setAttribute('aria-hidden', String(k !== i));
        });
        place(0, true);
      };
      const down = (x) => {
        drag = true;
        x0 = x;
        dx = 0;
        vp.style.cursor = 'grabbing';
      };
      const move = (x) => {
        if (!drag) return;
        dx = (x - x0) / scale();
        if ((i === 0 && dx > 0) || (i === 2 && dx < 0)) dx *= 0.35;
        place(dx, false);
      };
      const up = () => {
        if (!drag) return;
        drag = false;
        vp.style.cursor = '';
        go(Math.abs(dx) > W() * 0.2 ? i + (dx < 0 ? 1 : -1) : i);
      };
      vp.addEventListener('pointerdown', (e) => {
        down(e.clientX);
        vp.setPointerCapture(e.pointerId);
      });
      vp.addEventListener('pointermove', (e) => move(e.clientX));
      vp.addEventListener('pointerup', up);
      vp.addEventListener('pointercancel', up);
      skip.addEventListener('click', () => go(2));
      nx.addEventListener('click', async () => {
        if (done) return;
        if (i < 2) return go(i + 1);
        done = true;
        nx.classList.add('ok');
        await wait(1500);
        nx.classList.remove('ok');
        go(0);
        done = false;
      });
      new ResizeObserver(() => !drag && place(0, false)).observe(vp);
      go(0);
      track.style.transition = 'none';

      // Autoplay: a real drag, a tap on Next, a tap on Get started; any real input hands over for 4s.
      const swipe = async () => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const a = pt(vp, 0.72, 0.42);
        if (!a) return go(i + 1);
        put(a);
        await wait(900);
        if (!idle()) return;
        cur.classList.add('press');
        cur.style.transition = 'none';
        down(o.left + a[0] * s);
        await tween(650, (k) => {
          const xc = a[0] - 190 * (1 - Math.pow(1 - k, 2));
          cur.style.transform = `translate(${xc}px,${a[1]}px)`;
          move(o.left + xc * s);
        });
        await wait(120);
        cur.classList.remove('press');
        cur.style.transition = '';
        up();
        cur.classList.add('off');
      };
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || done) {
            await wait(400);
            continue;
          }
          if (i !== 0) {
            go(0);
            await wait(900);
          }
          await swipe();
          await wait(2200);
          if (!(await tap(nx, 0.5, 0.5))) continue;
          await wait(2200);
          if (!(await tap(nx, 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(3400);
        }
      })();
    },
    prompt: `Build a mobile onboarding carousel with three pages, real pointer swiping, a stretching page indicator and a primary button that changes label on the last page (100dvh column, max-width 430px centered on larger screens).

Layout: a top row with the app logo and a "Skip" text button; a viewport (overflow hidden, touch-action: pan-y) holding a flex track 300% wide with three pages, each with a drawn illustration (inline SVG, about 300x250: a coffee cup with steam, a map with a pin and a pulsing ring, a stamp loyalty card), a 30px/700 headline with -0.04em tracking and a 16.5px muted paragraph; at the bottom three 8px dots and a 54px primary button ("Next", then "Get started" on page 3).

Swipe: use pointer events on the viewport with setPointerCapture. While dragging set track.style.transform = translateX(-index * width + dx) with transition: none; add resistance (dx * 0.35) past the first and last page. On release go to the next or previous page when |dx| exceeds 20% of the width, otherwise snap back, using transition: transform 594ms with a slightly overshooting spring (linear() curve). Tapping Next advances the same way; Skip jumps to the last page.

Indicator: one accent pip (8px) sits over the dots and moves with transform: translateX(index * 24px) scaleX(3) (transform-origin left, bounce spring), so it stretches over the slot of the active page. The button label slides up and swaps with a vertical translate (12px) and opacity; the last tap turns it green with a check.

Decorative loops (steam dash offset, pulse ring) run only while their page is active and stop for prefers-reduced-motion. Accessibility: the viewport is role="group" aria-roledescription="carousel", inactive pages get aria-hidden, arrow keys change the page, all targets are 44px or larger. Plain HTML, CSS and JS, no libraries; React-friendly structure (OnboardingScreen, Pager, Page, PageDots, PrimaryButton).`,
  });

  // ---------------------------------------------------------------- 10. ride tracking
  // Abstract city map: roads are the background, blocks sit in the gaps. Road centres: x 88/170/262, y 74/160/236/330/420.
  const MAP = (() => {
    const xs = [0, 88, 170, 262, 360];
    const ys = [0, 74, 160, 236, 330, 420, 500, 590, 680, 770, 860, 920];
    let s = '';
    for (let j = 0; j < ys.length - 1; j++) {
      for (let i = 0; i < xs.length - 1; i++) {
        const x = xs[i] + 8;
        const y = ys[j] + 8;
        const w = xs[i + 1] - xs[i] - 16;
        const h = ys[j + 1] - ys[j] - 16;
        if (i === 2 && j === 2) {
          s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#D3E5FB"/><circle cx="${x + 18}" cy="${y + 20}" r="9" fill="#FFD0CA"/><circle cx="${x + 46}" cy="${y + 40}" r="12" fill="#FFD0CA"/><circle cx="${x + 70}" cy="${y + 18}" r="8" fill="#C6DDFB"/>`;
        } else s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${(i + j) % 2 ? '#F8FAFF' : '#F0F5FD'}"/>`;
      }
    }
    return s;
  })();
  ML.add({
    id: 'app-mobile-ride',
    cat: 'app-mobile',
    title: 'Ride tracking with driver card',
    sub: 'Route draws, car moves, ETA counts down',
    html: frame(
      `
<div class="body rd">
  <div class="map" aria-hidden="true">
    <svg viewBox="0 0 360 920" preserveAspectRatio="xMidYMin slice">
      <rect width="360" height="920" fill="#E1EBF8"/>
      ${MAP}
      <path d="M-10 118C90 132 200 56 380 98" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity=".9"/>
      <path class="rt-all" fill="none" stroke="#FF4433" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" d="M88 396V236H170V160H262"/>
      <path class="rt-done" fill="none" stroke="#FFD0CA" stroke-width="7" stroke-linecap="round" stroke-linejoin="round" d="M88 396V236H170V160H262"/>
      <circle class="pulse" cx="262" cy="160" r="15" fill="#FF4433" opacity=".2"/>
      <path d="M262 160c-10-13-16-21-16-29a16 16 0 0 1 32 0c0 8-6 16-16 29z" fill="#FF4433" stroke="#fff" stroke-width="2.5"/><circle cx="262" cy="131" r="6" fill="#fff"/>
      <g class="car"><rect x="-9" y="-14" width="18" height="28" rx="7" fill="#FF4433" stroke="#fff" stroke-width="3"/><rect x="-5.5" y="-8" width="11" height="8" rx="2.5" fill="#fff" opacity=".9"/></g>
    </svg>
  </div>
  <button type="button" class="ibtn bkb" aria-label="Back">${I(P.chevL, 22)}</button>
  <button type="button" class="shr">${I(P.share, 16)}Share trip</button>
  <div class="toast" role="status"></div>
  <section class="drv" aria-label="Your driver">
    <div class="grab"></div>
    <div class="eta"><div><p class="el">Arriving in</p><p class="min"><b>4</b><span> min</span></p></div><span class="plate">KJT 482</span></div>
    <div class="pbar"><i></i></div>
    <div class="who"><span class="av">KM</span><div><b>Kwame Mensah</b><small>${I(P.star, 12)}4.9 - Toyota Prius, blue</small></div><button type="button" class="ibtn call" aria-label="Call Kwame">${I(P.call, 20)}</button><button type="button" class="ibtn msgb" aria-label="Message Kwame">${I(P.msg, 20)}</button></div>
    <ul class="trip"><li><i class="d1"></i><div><small>Pickup</small><b>410 Harbor St</b></div></li><li><i class="d2"></i><div><small>Drop-off</small><b>Fernway Airport, Terminal 2</b></div></li></ul>
  </section>
</div>`,
      [P.car, 'Live car position', 'Follows the route, turns at corners', 18],
      [P.clock, 'ETA countdown', 'Updates as the car closes in', 62],
    ),
    css: `${BASE}
.d .map{position:absolute;top:-50px;left:0;right:0;height:920px}
.d .map svg{display:block;width:100%;height:100%}
.d .rt-all{stroke-dasharray:1000;transition:stroke-dashoffset 1.1s var(--ml-ease)}
.d .pulse{transform-box:fill-box;transform-origin:50% 50%;animation:mb-pulse 2.4s ease-out infinite}
@keyframes mb-pulse{0%{transform:scale(.6);opacity:.35}100%{transform:scale(2.6);opacity:0}}
.d .car{transition:opacity .4s ease}
.d .bkb{position:absolute;top:8px;left:14px;z-index:4;box-shadow:var(--ml-shadow)}
.d .shr{position:absolute;top:8px;right:14px;z-index:4;display:inline-flex;align-items:center;gap:6px;height:44px;padding:0 16px;border:0;border-radius:99px;background:var(--ml-bg);box-shadow:var(--ml-shadow);font-size:15px;font-weight:650;color:var(--ml-accent-ink);cursor:pointer;transition:transform 90ms ease-out}
.d .shr:active{transform:scale(.95)}
.d .toast{position:absolute;top:62px;left:50%;z-index:6;max-width:300px;padding:11px 18px;border-radius:99px;background:var(--ml-ink);color:#fff;font-size:14.5px;font-weight:600;white-space:nowrap;opacity:0;transform:translate(-50%,-14px) scale(.96);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .25s ease;pointer-events:none}
.d .toast.on{opacity:1;transform:translate(-50%,0)}
.d .drv{position:absolute;left:0;right:0;bottom:0;z-index:5;padding:10px 20px calc(var(--hb) + 2px);border-radius:30px 30px 0 0;background:var(--ml-bg);box-shadow:0 -12px 36px rgba(35,15,10,.14)}
.d .eta{display:flex;align-items:flex-end;justify-content:space-between}
.d .el{font-size:14px;font-weight:600;color:var(--ml-muted)}
.d .min b{font-size:40px;line-height:1;font-weight:700;letter-spacing:-.045em;font-variant-numeric:tabular-nums}
.d .min span{font-size:20px;font-weight:650;letter-spacing:-.02em}
.d .min.here b{font-size:32px;color:#12893C}
.d .plate{padding:7px 12px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:650 14px/1 var(--ml-mono);letter-spacing:.06em}
.d .pbar{height:6px;margin:12px 0 14px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .pbar i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.2);transform-origin:0 50%}
.d .who{display:flex;align-items:center;gap:10px}
.d .who .av{width:48px;height:48px;font-size:16px}
.d .who div{flex:1;min-width:0}
.d .who b{display:block;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .who small{display:flex;align-items:center;gap:4px;font-size:13px;color:var(--ml-muted)}
.d .who small svg{fill:var(--ml-accent);stroke:var(--ml-accent)}
.d .trip{position:relative;margin-top:12px;padding-top:12px;border-top:1px solid var(--ml-line);list-style:none}
.d .trip::before{content:"";position:absolute;left:5px;top:34px;height:30px;width:2px;background:var(--ml-bar)}
.d .trip li{display:flex;align-items:center;gap:14px;padding:5px 0}
.d .trip li i{flex:none;width:12px;height:12px}
.d .d1{border-radius:50%;background:var(--ml-accent)}
.d .d2{border-radius:3px;background:var(--ml-ink)}
.d .trip small{display:block;font-size:12.5px;color:var(--ml-muted)}
.d .trip b{display:block;font-size:16px;font-weight:600;letter-spacing:-.01em}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .pulse{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      const route = $('.rt-done');
      const all = $('.rt-all');
      const car = $('.car');
      const L = route.getTotalLength();
      all.style.strokeDasharray = String(L);
      all.style.strokeDashoffset = '0';
      const bar = $('.pbar i');
      const minEl = $('.min');
      const num = $('.min b');
      const unit = $('.min span');
      const lab = $('.el');
      const toast = $('.toast');
      let p = 0.2;
      let ang = 0;
      let state = 'go';
      let holdUntil = 0;
      let shownMin = -1;
      const draw = () => {
        const q = route.getPointAtLength(p * L);
        const q2 = route.getPointAtLength(Math.min(L, p * L + 3));
        const q1 = route.getPointAtLength(Math.max(0, p * L - 3));
        const target = (Math.atan2(q2.y - q1.y, q2.x - q1.x) * 180) / Math.PI + 90;
        let d = ((target - ang + 540) % 360) - 180;
        if (state !== 'go') d = 0;
        ang += d * 0.2;
        car.setAttribute('transform', `translate(${q.x.toFixed(1)} ${q.y.toFixed(1)}) rotate(${ang.toFixed(1)})`);
        route.style.strokeDasharray = `${(p * L).toFixed(1)} ${L}`;
        bar.style.transform = `scaleX(${p.toFixed(3)})`;
        const m = Math.ceil((1 - p) * 5 - 0.001);
        if (m !== shownMin) {
          shownMin = m;
          if (m > 0) {
            num.textContent = String(m);
            unit.textContent = m === 1 ? ' min' : ' min';
            minEl.classList.remove('here');
            lab.textContent = 'Arriving in';
          } else {
            num.textContent = 'Here';
            unit.textContent = '';
            minEl.classList.add('here');
            lab.textContent = 'Your driver has arrived';
          }
        }
      };
      let last = performance.now();
      const tick = (t) => {
        if (!root.isConnected) return;
        const dt = Math.min(0.1, (t - last) / 1000);
        last = t;
        if (!root.dataset.paused) {
          if (state === 'go') {
            p = Math.min(1, p + dt * 0.056);
            if (p >= 1) {
              state = 'hold';
              holdUntil = t + 2600;
            }
          } else if (state === 'hold' && t > holdUntil) {
            state = 'reset';
            holdUntil = t + 1300;
            car.style.opacity = '0';
            all.style.transition = 'none';
            all.style.strokeDashoffset = String(L);
            void all.getBoundingClientRect();
            all.style.transition = '';
            all.style.strokeDashoffset = '0';
            p = 0.2;
            ang = 0;
            shownMin = -1;
          } else if (state === 'reset' && t > holdUntil) {
            car.style.opacity = '1';
            state = 'go';
          }
          draw();
        }
        requestAnimationFrame(tick);
      };
      draw();
      requestAnimationFrame(tick);

      let tt = 0;
      const say = async (msg) => {
        const me = ++tt;
        toast.textContent = msg;
        toast.classList.add('on');
        await wait(2200);
        if (me === tt) toast.classList.remove('on');
      };
      $('.msgb').addEventListener('click', () => say("Sent: I'm at the main entrance"));
      $('.call').addEventListener('click', () => say('Calling Kwame'));
      $('.shr').addEventListener('click', () => say('Trip link copied'));

      // Autoplay: tap Message mid-trip; any real input hands over for 4s.
      (async () => {
        await wait(3000);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (state === 'go' && p > 0.3 && p < 0.7) {
            if (await tap($('.msgb'), 0.5, 0.5)) {
              cur.classList.add('off');
              await wait(6000);
              continue;
            }
          }
          await wait(500);
        }
      })();
    },
    prompt: `Build a ride-tracking screen for a mobile app: a full-bleed abstract map with a route, a moving car and a bottom driver card (100dvh, max-width 430px centered on larger screens).

Map: draw it as inline SVG, no tiles. Roads are the background (a pale blue), city blocks are rounded rectangles in two near-white tints placed in the gaps (about 16px roads), one block is a park with a few pale blue tree circles, and one diagonal white avenue crosses it. The route is an SVG path along the road centers with round joins: draw it in your accent at 7px, then draw the already-driven part on top in a pale tint using stroke-dasharray: "<driven> <total>" updated each frame. The pickup is a teardrop pin with a soft pulsing ring (scale .6 to 2.6, opacity .35 to 0, 2.4s loop). Floating controls over the map: a 44px back button and a "Share trip" pill.

Car: a small rounded rectangle with a windshield, positioned each frame from path.getPointAtLength(progress * length) and rotated to the path tangent (angle from two nearby points, smoothed so it turns at corners). Progress advances with requestAnimationFrame at about 0.056 per second and stops work when the page is hidden.

Driver card: a bottom sheet look (30px top radius, grab handle) with "Arriving in" and a 40px tabular-nums minute count computed as ceil(remaining * 5), the plate in a mono pill, a thin progress bar (transform: scaleX), the driver row (initials avatar, name, rating star, vehicle) with 44px Call and Message buttons, and a two-stop trip list with a connector line. On arrival show "Here" in green and "Your driver has arrived", hold for 2.6s, then redraw the route (stroke-dashoffset from length to 0 over 1.1s) and restart. Message and Call show a toast (dark pill sliding down with a spring).

Accessibility: the map is aria-hidden with the key facts repeated as text in the card, the ETA is aria-live="polite" (announce only minute changes), buttons are labelled, prefers-reduced-motion stops the pulse. Plain HTML, CSS and JS, no libraries; React-friendly structure (RideScreen, RouteMap, DriverCard, EtaCounter, TripStops).`,
  });

  // ---------------------------------------------------------------- 11. music player
  ML.add({
    id: 'app-mobile-music',
    cat: 'app-mobile',
    title: 'Music player with queue sheet',
    sub: 'Scrubber runs, play morphs, queue slides up',
    html: frame(
      `
<div class="body mu">
  <header class="mu-h"><button type="button" class="ibtn flat" aria-label="Close player">${I(P.chevD, 26)}</button><div><small>Playing from</small><b class="alb">Low Light EP</b></div><button type="button" class="ibtn flat" aria-label="More">${I(P.more, 22)}</button></header>
  <div class="aw"><div class="art"></div></div>
  <div class="mt"><div><h1 class="tn">Slow Tide</h1><p class="ar">Hana Kim</p></div><button type="button" class="ibtn flat hrt" aria-label="Like" aria-pressed="false">${I(P.heart, 24)}</button></div>
  <div class="scrub"><div class="trk" role="slider" aria-label="Seek" aria-valuemin="0" aria-valuemax="228" aria-valuenow="72" tabindex="0"><i class="fl"></i><b class="kn"></b></div><div class="tms"><span class="cu">1:12</span><span class="du">3:48</span></div></div>
  <div class="ctl"><button type="button" aria-label="Shuffle">${I(P.shuffle, 22)}</button><button type="button" class="pv" aria-label="Previous">${I(P.skipB, 28)}</button><button type="button" class="pp" aria-label="Pause" aria-pressed="true"><span class="pa"></span><span class="pb"></span></button><button type="button" class="nx" aria-label="Next">${I(P.skipF, 28)}</button><button type="button" class="qb" aria-label="Open queue">${I(P.queue, 23)}</button></div>
  <div class="vol" aria-hidden="true">${I(P.vol, 18)}<i></i>${I(P.vol, 22)}</div>
</div>
<div class="scrim"></div>
<div class="sheet qs" role="dialog" aria-label="Up next"><div class="grab"></div><div class="qh"><h2>Up next</h2><button type="button" class="lk qc">Done</button></div><ul class="ql"></ul></div>`,
      [P.music, 'Now playing', 'Artwork breathes with play', 20],
      [P.queue, 'Queue sheet', 'Pick any track to jump', 66],
    ),
    css: `${BASE}
.d .mu{justify-content:space-between;padding-bottom:calc(var(--hb) + 6px);background:radial-gradient(90% 40% at 50% 0%,#E1EDFF 0%,rgba(225,237,255,0) 100%)}
.d .mu-h{display:flex;align-items:center;justify-content:space-between;padding:0 10px}
.d .mu-h div{text-align:center}
.d .mu-h small{display:block;font-size:12.5px;color:var(--ml-muted)}
.d .mu-h b{font-size:15.5px;font-weight:650;letter-spacing:-.015em}
.d .flat{box-shadow:none;background:none;border-radius:50%}
.d .aw{display:grid;flex:none;place-items:center;padding:12px 0 20px}
.d .art{width:290px;height:290px;border-radius:26px;overflow:hidden;box-shadow:0 26px 44px rgba(10,60,160,.22),0 6px 14px rgba(10,60,160,.12);transition:transform var(--ml-bounce-dur) var(--ml-bounce),box-shadow .5s ease}
.d .art svg{display:block;width:100%;height:100%}
.d .mu.paused .art{transform:scale(.84);box-shadow:0 10px 20px rgba(10,60,160,.14),0 3px 6px rgba(10,60,160,.08)}
.d .mt{display:flex;flex:none;align-items:center;justify-content:space-between;padding:0 14px 0 26px}
.d .tn{font-size:26px;line-height:1.1;font-weight:700;letter-spacing:-.035em;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .ar{margin-top:2px;font-size:17px;color:var(--ml-muted);transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .sw1{opacity:0;transform:translateY(8px)}
.d .hrt.on{color:var(--ml-accent)}
.d .hrt svg{transition:transform .4s var(--ml-bounce)}
.d .hrt.on svg{fill:currentColor;transform:scale(1.15)}
.d .scrub{flex:none;padding:20px 26px 0}
.d .trk{position:relative;height:22px;cursor:pointer;touch-action:none}
.d .trk::before{content:"";position:absolute;left:0;right:0;top:8px;height:6px;border-radius:99px;background:var(--ml-bar)}
.d .fl{position:absolute;left:0;top:8px;width:100%;height:6px;border-radius:99px;background:var(--ml-accent);transform:scaleX(.3);transform-origin:0 50%}
.d .kn{position:absolute;left:-8px;top:3px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 0 0 1px var(--ml-accent-line),0 2px 6px rgba(255,68,51,.35);transition:scale .25s var(--ml-bounce)}
.d .trk.drag .kn{scale:1.35}
.d .trk:focus-visible{outline:2px solid var(--ml-accent);outline-offset:4px;border-radius:8px}
.d .tms{display:flex;justify-content:space-between;margin-top:4px;font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--ml-muted)}
.d .ctl{display:flex;flex:none;align-items:center;justify-content:space-between;padding:16px 20px 0}
.d .vol{display:flex;flex:none;align-items:center;gap:12px;padding:22px 28px 0;color:var(--ml-muted)}
.d .vol i{position:relative;flex:1;height:6px;border-radius:99px;background:var(--ml-bar)}
.d .vol i::after{content:"";position:absolute;left:0;top:0;bottom:0;width:62%;border-radius:inherit;background:var(--ml-ink-2);opacity:.75}
.d .ctl button{display:grid;place-items:center;width:52px;height:52px;border:0;border-radius:50%;background:none;color:var(--ml-ink);cursor:pointer;transition:transform 90ms ease-out}
.d .ctl button:active,.d .ctl button.press{transform:scale(.9)}
.d .ctl .pp{position:relative;width:76px;height:76px;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 12px 24px rgba(255,68,51,.28)}
.d .pa,.d .pb{position:absolute;left:50%;top:50%;width:28px;height:28px;margin:-14px 0 0 -14px;background:#fff;transition:clip-path .5s var(--ml-bounce)}
.d .pa{clip-path:polygon(15% 0,40% 0,40% 100%,15% 100%)}
.d .pb{clip-path:polygon(60% 0,85% 0,85% 100%,60% 100%)}
.d .mu.paused .pa{clip-path:polygon(24% 0,92% 50%,92% 50%,24% 50%)}
.d .mu.paused .pb{clip-path:polygon(24% 50%,92% 50%,92% 50%,24% 100%)}
.d .qs{padding-bottom:calc(var(--hb) + 4px)}
.d .qh{display:flex;align-items:center;justify-content:space-between;padding-bottom:6px}
.d .qh h2{font-size:22px;font-weight:700;letter-spacing:-.035em}
.d .ql{list-style:none}
.d .qr{display:flex;align-items:center;gap:13px;width:100%;min-height:62px;padding:7px 8px;border:0;border-radius:16px;background:none;text-align:left;cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .qr:active,.d .qr.press{transform:scale(.98)}
.d .qr.now{background:var(--ml-accent-soft)}
.d .qr .th{flex:none;width:46px;height:46px;border-radius:12px;overflow:hidden}
.d .qr .th svg{display:block;width:100%;height:100%}
.d .qr div{flex:1;min-width:0}
.d .qr b{display:block;font-size:16px;font-weight:650;letter-spacing:-.015em}
.d .qr small{display:block;font-size:13.5px;color:var(--ml-muted)}
.d .qr em{font-size:14px;font-style:normal;font-weight:600;font-variant-numeric:tabular-nums;color:var(--ml-muted)}
.d .eq{display:none;align-items:flex-end;gap:2px;height:16px}
.d .qr.now .eq{display:flex}
.d .eq i{width:3px;height:100%;border-radius:2px;background:var(--ml-accent);transform-origin:50% 100%;animation:mb-eq .9s ease-in-out infinite}
.d .eq i:nth-child(2){animation-delay:.2s}.d .eq i:nth-child(3){animation-delay:.4s}
.d .mu.paused ~ .qs .eq i{animation-play-state:paused}
@keyframes mb-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .eq i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      const tracks = [
        ['Slow Tide', 'Hana Kim', 'Low Light EP', 228],
        ['Paper Lanterns', 'Noor Haddad', 'Low Light EP', 192],
        ['Harbor Static', 'Kwame Mensah', 'Night Shift', 245],
        ['Glasshouse', 'Elena Petrova', 'Fernway Sessions', 174],
      ];
      let uid = 0;
      const art = (k) => {
        const g = `ml-mbm-${uid++}`;
        const bg = [['#D7E8FF', '#FF7A3D'], ['#EAF2FF', '#FF4433'], ['#C4DCFF', '#FF5745'], ['#E1EDFF', '#7DB3FF']][k % 4];
        const shape = [
          '<circle cx="150" cy="116" r="62" fill="#fff" opacity=".92"/><path d="M0 190c40-22 80-22 120 0s80 22 120 0 40-12 60-6v116H0z" fill="#FF4433" opacity=".4"/><path d="M0 226c40-18 80-18 120 0s80 18 120 0 40-10 60-4v78H0z" fill="#fff" opacity=".5"/>',
          '<g fill="none" stroke="#fff" stroke-width="10" opacity=".7"><circle cx="150" cy="150" r="116"/><circle cx="150" cy="150" r="82"/><circle cx="150" cy="150" r="48"/></g><circle cx="150" cy="150" r="18" fill="#fff"/>',
          '<circle cx="112" cy="150" r="90" fill="#fff" opacity=".55"/><circle cx="190" cy="150" r="90" fill="#B3150F" opacity=".35"/><circle cx="150" cy="70" r="26" fill="#fff"/>',
          '<g fill="#fff"><path d="M-20 300 140-20h46L26 300z" opacity=".5"/><path d="M80 320 240-20h46L126 320z" opacity=".35"/><path d="M180 330 340 10h40L220 330z" opacity=".6"/></g>',
        ][k % 4];
        return `<svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient></defs><rect width="300" height="300" fill="url(#${g})"/>${shape}</svg>`;
      };
      const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
      const mu = $('.mu');
      const pp = $('.pp');
      const trk = $('.trk');
      const fl = $('.fl');
      const kn = $('.kn');
      const cu = $('.cu');
      const du = $('.du');
      const tn = $('.tn');
      const ar = $('.ar');
      const alb = $('.alb');
      const artEl = $('.art');
      const scrim = $('.scrim');
      const sheet = $('.sheet');
      const ql = $('.ql');
      let idx = 0;
      let t = 72;
      let playing = true;
      let dragging = false;
      const paint = () => {
        const dur = tracks[idx][3];
        const k = Math.max(0, Math.min(1, t / dur));
        fl.style.transform = `scaleX(${k})`;
        kn.style.transform = `translateX(${k * trk.offsetWidth}px)`;
        cu.textContent = mmss(t);
        du.textContent = mmss(dur);
        trk.setAttribute('aria-valuemax', String(dur));
        trk.setAttribute('aria-valuenow', String(Math.floor(t)));
      };
      const setTrack = (n, startAt) => {
        idx = ((n % tracks.length) + tracks.length) % tracks.length;
        t = startAt;
        tn.classList.add('sw1');
        ar.classList.add('sw1');
        setTimeout(() => {
          if (!root.isConnected) return;
          tn.textContent = tracks[idx][0];
          ar.textContent = tracks[idx][1];
          alb.textContent = tracks[idx][2];
          tn.classList.remove('sw1');
          ar.classList.remove('sw1');
        }, 200);
        artEl.innerHTML = art(idx);
        ql.querySelectorAll('.qr').forEach((r, k) => r.classList.toggle('now', k === idx));
        paint();
      };
      ql.innerHTML = tracks
        .map((tr, k) => `<li><button type="button" class="qr${k === 0 ? ' now' : ''}" data-i="${k}"><span class="th">${art(k)}</span><div><b>${tr[0]}</b><small>${tr[1]}</small></div><span class="eq" aria-hidden="true"><i></i><i></i><i></i></span><em>${mmss(tr[3])}</em></button></li>`)
        .join('');
      artEl.innerHTML = art(0);
      paint();
      const setPlaying = (on) => {
        playing = on;
        mu.classList.toggle('paused', !on);
        pp.setAttribute('aria-pressed', String(on));
        pp.setAttribute('aria-label', on ? 'Pause' : 'Play');
      };
      pp.addEventListener('click', () => setPlaying(!playing));
      $('.nx').addEventListener('click', () => setTrack(idx + 1, 0));
      $('.pv').addEventListener('click', () => (t > 3 ? setTrack(idx, 0) : setTrack(idx - 1, 0)));
      $('.hrt').addEventListener('click', (e) => {
        const b = e.currentTarget;
        b.setAttribute('aria-pressed', String(b.classList.toggle('on')));
      });
      // scrubber: real pointer drag
      const seek = (cx) => {
        const r = trk.getBoundingClientRect();
        const k = Math.max(0, Math.min(1, (cx - r.left) / r.width));
        t = k * tracks[idx][3];
        paint();
      };
      trk.addEventListener('pointerdown', (e) => {
        dragging = true;
        trk.classList.add('drag');
        trk.setPointerCapture(e.pointerId);
        seek(e.clientX);
      });
      trk.addEventListener('pointermove', (e) => dragging && seek(e.clientX));
      const end = () => {
        dragging = false;
        trk.classList.remove('drag');
      };
      trk.addEventListener('pointerup', end);
      trk.addEventListener('pointercancel', end);
      trk.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') t = Math.min(tracks[idx][3], t + 5);
        else if (e.key === 'ArrowLeft') t = Math.max(0, t - 5);
        else return;
        paint();
      });
      const open = () => {
        scrim.classList.add('open');
        sheet.classList.add('open');
      };
      const close = () => {
        scrim.classList.remove('open');
        sheet.classList.remove('open');
      };
      $('.qb').addEventListener('click', open);
      $('.qc').addEventListener('click', close);
      scrim.addEventListener('click', close);
      ql.addEventListener('click', (e) => {
        const b = e.target.closest('.qr');
        if (!b) return;
        setTrack(+b.dataset.i, 0);
        setPlaying(true);
        setTimeout(close, 250);
      });
      // clock
      (async () => {
        let last = performance.now();
        while (root.isConnected) {
          await sleep(250);
          const now = performance.now();
          if (root.dataset.paused) {
            last = now;
            continue;
          }
          const dt = (now - last) / 1000;
          last = now;
          if (playing && !dragging) {
            t += dt;
            if (t >= tracks[idx][3]) setTrack(idx + 1, 0);
            else paint();
          }
        }
      })();

      // Autoplay: pause, play, open the queue, pick a track; any real input hands over for 4s.
      let loop = 0;
      (async () => {
        await wait(2400);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (sheet.classList.contains('open')) {
            close();
            await wait(700);
          }
          if (!playing) setPlaying(true);
          if (!(await tap(pp, 0.5, 0.5))) continue;
          await wait(2000);
          if (!(await tap(pp, 0.5, 0.5))) continue;
          await wait(2200);
          if (!(await tap($('.qb'), 0.5, 0.5))) continue;
          await wait(1500);
          const rows = ql.querySelectorAll('.qr');
          const next = rows[(idx + 1 + (loop++ % 2)) % rows.length];
          if (!(await tap(next, 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(4800);
        }
      })();
    },
    prompt: `Build a full-screen mobile music player with a scrubber, a play and pause morph and a queue bottom sheet (100dvh column, max-width 430px centered on larger screens, a faint blue wash at the top).

Layout: a header with a chevron-down close button, "Playing from" plus the album, and a more button; a 290px square artwork with 26px radius and a soft blue shadow, drawn as inline SVG (gradient plus simple shapes: a sun over waves, concentric rings, overlapping circles, or diagonal bars); the track title at 26px/700 and the artist at 17px muted with a like button; a scrubber; and a control row (shuffle, previous, a 76px play and pause button in an accent gradient, next, queue).

Motion: the artwork scales to 0.84 with a softer shadow when paused and back to 1 when playing (spring with slight overshoot, linear() curve, about 594ms). The play and pause icon is two elements with clip-path polygons that interpolate with the same point counts: pause is two bars polygon(15% 0, 40% 0, 40% 100%, 15% 100%) and polygon(60% 0, 85% 0, 85% 100%, 60% 100%); play splits a triangle into polygon(24% 0, 92% 50%, 92% 50%, 24% 50%) and polygon(24% 50%, 92% 50%, 92% 50%, 24% 100%); transition clip-path .5s with an overshoot curve. Changing track slides the title and artist 8px and fades them.

Scrubber: a 6px track with a fill using transform: scaleX(progress) and a 16px knob using translateX(progress * width), updated by a 250ms clock while playing; pointer events with setPointerCapture seek on press and drag (the knob grows to 1.35); role="slider" with aria-valuenow and arrow keys seeking 5 seconds. Times use tabular-nums.

Queue: the queue button opens a bottom sheet (30px top radius, grab handle, scrim, spring slide) listing tracks with a 46px artwork thumb, title, artist, an animated 3-bar equalizer on the current one and the duration; choosing a row switches the track, resumes play and closes the sheet. Accessibility: labelled controls, aria-pressed on play and like, role="dialog" for the sheet, 44px targets, prefers-reduced-motion stops the equalizer. Plain HTML, CSS and JS, no libraries; React-friendly structure (PlayerScreen, Artwork, Scrubber, Controls, PlayPauseIcon, QueueSheet).`,
  });

  // ---------------------------------------------------------------- 12. food delivery
  ML.add({
    id: 'app-mobile-food',
    cat: 'app-mobile',
    title: 'Food delivery cart and status',
    sub: 'Cart bar springs up, order steps tick',
    html: frame(
      `
<div class="body fo">
  <header class="fo-h"><div><small>Deliver to</small><b>410 Harbor St ${I(P.chevD, 16, 2.6)}</b></div><button type="button" class="ibtn" aria-label="Search">${I(P.search, 21)}</button></header>
  <div class="cats" role="group" aria-label="Categories"><button type="button" class="chip on">All</button><button type="button" class="chip">Bowls</button><button type="button" class="chip">Noodles</button><button type="button" class="chip">Flatbreads</button><button type="button" class="chip">Sweet</button></div>
  <p class="rst"><b>Meridian Foods</b><span>${I(P.star, 12)}4.8 - 20 min - Free delivery</span></p>
  <ul class="menu no-scroll"></ul>
</div>
<button type="button" class="cbar" aria-live="polite" tabindex="-1"><span class="cn"><b>0</b></span><span class="cl">Place order</span><em>$0.00</em></button>
<div class="scrim"></div>
<div class="sheet os" role="dialog" aria-label="Order status">
  <div class="grab"></div>
  <div class="oh"><div><h2>Order placed</h2><p class="oe">Estimated arrival <b>10:02 AM</b></p></div><span class="ob2">${I(P.bagCheck, 24)}</span></div>
  <ol class="steps"></ol>
  <button type="button" class="lk oc">Close</button>
</div>`,
      [P.bag, 'Cart bar springs up', 'Count pops on every add', 22],
      [P.clock, 'Live order steps', 'Confirmed, cooking, on the way', 68],
    ),
    css: `${BASE}
.d .fo-h{display:flex;align-items:center;justify-content:space-between;padding:0 16px 4px 22px}
.d .fo-h small{display:block;font-size:13px;color:var(--ml-muted)}
.d .fo-h b{display:inline-flex;align-items:center;gap:4px;font-size:20px;font-weight:700;letter-spacing:-.03em}
.d .cats{display:flex;gap:8px;padding:8px 20px 6px;overflow:hidden}
.d .chip{display:inline-flex;flex:none;align-items:center;height:38px;padding:0 16px;border:0;border-radius:99px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:15px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s,color .2s,transform 90ms ease-out}
.d .chip:active{transform:scale(.96)}
.d .chip.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .rst{display:flex;align-items:baseline;justify-content:space-between;padding:10px 22px 4px}
.d .rst b{font-size:17px;font-weight:700;letter-spacing:-.025em}
.d .rst span{display:inline-flex;align-items:center;gap:4px;font-size:13px;color:var(--ml-muted)}
.d .rst svg{fill:var(--ml-accent);stroke:var(--ml-accent)}
.d .menu{flex:1;min-height:0;padding:0 20px 90px;overflow-y:auto;list-style:none}
.d .mi{display:flex;align-items:center;gap:14px;padding:12px 0;border-bottom:1px solid var(--ml-line)}
.d .mi:last-child{border-bottom:0}
.d .mp{position:relative;flex:none;width:92px;height:92px;border-radius:22px;overflow:hidden}
.d .mp svg{display:block;width:100%;height:100%}
.d .mx{flex:1;min-width:0}
.d .mx b{display:block;font-size:17px;line-height:1.2;font-weight:650;letter-spacing:-.02em}
.d .mx small{display:block;margin-top:2px;font-size:13.5px;line-height:1.3;color:var(--ml-muted)}
.d .mx em{display:block;margin-top:6px;font-size:16px;font-style:normal;font-weight:700;font-variant-numeric:tabular-nums}
.d .add{position:relative;display:grid;flex:none;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent);cursor:pointer;transition:transform 90ms ease-out,background-color .25s ease,color .25s ease}
.d .add:active,.d .add.press{transform:scale(.9)}
.d .add b{position:absolute;inset:0;display:grid;place-items:center;font-size:17px;font-weight:700;font-variant-numeric:tabular-nums;opacity:0;transform:scale(.6)}
.d .add.has{background:var(--ml-accent);color:#fff;box-shadow:0 6px 14px rgba(255,68,51,.3)}
.d .add.has svg{opacity:0}
.d .add.has b{opacity:1;transform:none}
.d .add.bump b{animation:mb-pop 420ms var(--ml-bounce)}
.d .cbar{position:absolute;left:14px;right:14px;bottom:calc(var(--hb) - 2px);z-index:8;display:flex;align-items:center;gap:12px;height:62px;padding:0 20px 0 10px;border:0;border-radius:22px;background:var(--ml-ink);color:#fff;text-align:left;font-size:17px;font-weight:650;letter-spacing:-.015em;box-shadow:0 14px 30px rgba(35,15,10,.28);cursor:pointer;transform:translateY(160%);transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .cbar.show{transform:none}
.d .cbar.press{transform:scale(.97)}
.d .cn{display:grid;flex:none;place-items:center;width:42px;height:42px;border-radius:15px;background:var(--ml-accent);font-size:18px}
.d .cn.bump{animation:mb-pop 420ms var(--ml-bounce)}
.d .cn b{font-weight:700;font-variant-numeric:tabular-nums}
.d .cl{flex:1}
.d .cbar em{font-style:normal;font-variant-numeric:tabular-nums}
.d .os{padding-bottom:calc(var(--hb) + 4px)}
.d .oh{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding-bottom:10px}
.d .oh h2{font-size:26px;font-weight:700;letter-spacing:-.035em}
.d .oe{margin-top:2px;font-size:15px;color:var(--ml-muted)}
.d .oe b{color:var(--ml-ink)}
.d .ob2{display:grid;flex:none;place-items:center;width:52px;height:52px;border-radius:18px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .steps{position:relative;list-style:none}
.d .st{position:relative;display:flex;align-items:flex-start;gap:14px;padding:0 0 22px}
.d .st:last-child{padding-bottom:6px}
.d .st .dt{position:relative;z-index:1;display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2px var(--ml-bar);color:#fff;transition:background-color .35s ease,box-shadow .35s ease}
.d .st .dt svg{opacity:0;transform:scale(.5);transition:opacity .25s ease,transform .45s var(--ml-bounce)}
.d .st::before{content:"";position:absolute;left:14px;top:30px;bottom:0;width:2px;background:var(--ml-bar)}
.d .st::after{content:"";position:absolute;left:14px;top:30px;bottom:0;width:2px;background:var(--ml-accent);transform:scaleY(0);transform-origin:0 0;transition:transform .6s var(--ml-ease)}
.d .st:last-child::before,.d .st:last-child::after{display:none}
.d .st.done .dt{background:var(--ml-accent);box-shadow:none}
.d .st.done .dt svg{opacity:1;transform:none}
.d .st.done::after{transform:scaleY(1)}
.d .st.act .dt{box-shadow:inset 0 0 0 2px var(--ml-accent),0 0 0 5px var(--ml-accent-soft)}
.d .st div{flex:1;padding-top:3px}
.d .st b{display:block;font-size:17px;font-weight:650;letter-spacing:-.015em;color:var(--ml-muted);transition:color .3s ease}
.d .st small{display:block;font-size:13.5px;color:var(--ml-muted)}
.d .st.done b,.d .st.act b{color:var(--ml-ink)}
.d .st.act small{color:var(--ml-accent-ink);font-weight:600}
.d .os .lk{width:100%;margin-top:6px}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';

      const items = [
        ['Harvest grain bowl', 'Roasted squash, farro, tahini', 13.5],
        ['Spicy miso ramen', 'Soft egg, scallion, chili oil', 14.9],
        ['Margherita flatbread', 'Basil, mozzarella, tomato', 12],
        ['Salted caramel tart', 'Sea salt, vanilla cream', 7.5],
        ['Matcha cold brew', 'Oat milk, lightly sweet', 5.4],
        ['Roasted tomato soup', 'Basil oil, sourdough crouton', 8.9],
        ['Berry yogurt cup', 'Granola, honey, mint', 6.2],
      ];
      let uid = 0;
      const food = (k) => {
        const g = `ml-mbd-${uid++}`;
        const bg = [['#FFEBE8', '#8FBEFF'], ['#E6F0FF', '#5FA8FF'], ['#D2E4FF', '#FF5745'], ['#EAF2FF', '#A8CCFF'], ['#DDEBFF', '#FF7A3D']][k % 5];
        const dish = [
          '<circle cx="50" cy="52" r="34" fill="#fff"/><circle cx="50" cy="52" r="27" fill="#FF4433" opacity=".25"/><circle cx="40" cy="46" r="9" fill="#fff"/><circle cx="58" cy="44" r="8" fill="#FF7A3D"/><circle cx="52" cy="62" r="10" fill="#fff" opacity=".9"/><circle cx="36" cy="62" r="6" fill="#FF4433" opacity=".5"/>',
          '<circle cx="50" cy="52" r="34" fill="#fff"/><path d="M26 52c6-8 12-8 18 0s12 8 18 0 8-6 12-2" fill="none" stroke="#FF4433" stroke-width="5" stroke-linecap="round" opacity=".55"/><path d="M28 64c6-8 12-8 18 0s12 8 18 0 8-6 10-2" fill="none" stroke="#FF7A3D" stroke-width="5" stroke-linecap="round"/><circle cx="62" cy="40" r="8" fill="#fff" stroke="#FFD0CA" stroke-width="2"/><circle cx="62" cy="40" r="3.5" fill="#FF7A3D"/>',
          '<circle cx="50" cy="52" r="36" fill="#fff"/><circle cx="50" cy="52" r="29" fill="#FF4433" opacity=".2"/><path d="M50 52 50 23M50 52l25 14M50 52 25 66" stroke="#fff" stroke-width="3"/><circle cx="42" cy="40" r="5" fill="#fff"/><circle cx="62" cy="50" r="5" fill="#fff"/><circle cx="46" cy="64" r="5" fill="#fff"/>',
          '<path d="M18 70 50 28l32 42z" fill="#fff"/><path d="M26 70 50 38l24 32z" fill="#FF4433" opacity=".3"/><circle cx="50" cy="34" r="6" fill="#FF7A3D"/><rect x="16" y="70" width="68" height="8" rx="4" fill="#fff" opacity=".9"/>',
          '<rect x="34" y="30" width="32" height="46" rx="10" fill="#fff"/><rect x="34" y="46" width="32" height="30" rx="10" fill="#FF4433" opacity=".35"/><rect x="48" y="16" width="5" height="30" rx="2.5" fill="#FF7A3D" transform="rotate(14 50 31)"/>',
        ][k % 5];
        return `<svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient></defs><rect width="100" height="100" fill="url(#${g})"/>${dish}</svg>`;
      };
      const plus = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5v14"/></svg>';
      const menu = $('.menu');
      menu.innerHTML = items
        .map((it, k) => `<li class="mi"><span class="mp">${food(k)}</span><div class="mx"><b>${it[0]}</b><small>${it[1]}</small><em>$${it[2].toFixed(2)}</em></div><button type="button" class="add" data-i="${k}" aria-label="Add ${it[0]}">${plus}<b>0</b></button></li>`)
        .join('');
      const qty = items.map(() => 0);
      const bar = $('.cbar');
      const cn = $('.cn');
      const cnb = $('.cn b');
      const total = $('.cbar em');
      const scrim = $('.scrim');
      const sheet = $('.sheet');
      const stepsEl = $('.steps');
      const steps = [
        ['Order confirmed', 'Meridian Foods accepted at 9:41 AM'],
        ['Preparing your food', 'The kitchen is on it'],
        ['On the way', 'Kwame is 12 minutes away'],
        ['Delivered', 'Enjoy your meal'],
      ];
      const check = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      stepsEl.innerHTML = steps.map((s) => `<li class="st"><span class="dt">${check}</span><div><b>${s[0]}</b><small>${s[1]}</small></div></li>`).join('');
      const stEls = [...stepsEl.children];
      const bump = (el) => {
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
      };
      const sync = () => {
        const n = qty.reduce((a, b) => a + b, 0);
        const sum = qty.reduce((a, q, k) => a + q * items[k][2], 0);
        cnb.textContent = String(n);
        total.textContent = `$${sum.toFixed(2)}`;
        bar.classList.toggle('show', n > 0);
        bar.tabIndex = n > 0 ? 0 : -1;
      };
      menu.addEventListener('click', (e) => {
        const b = e.target.closest('.add');
        if (!b || placing) return;
        const k = +b.dataset.i;
        qty[k]++;
        b.classList.add('has');
        b.querySelector('b').textContent = String(qty[k]);
        bump(b);
        bump(cn);
        sync();
      });
      root.querySelectorAll('.chip').forEach((c) => c.addEventListener('click', () => root.querySelectorAll('.chip').forEach((x) => x.classList.toggle('on', x === c))));
      let placing = false;
      const close = () => {
        scrim.classList.remove('open');
        sheet.classList.remove('open');
      };
      const clear = () => {
        qty.fill(0);
        menu.querySelectorAll('.add').forEach((b) => b.classList.remove('has'));
        sync();
      };
      let id = 0;
      const place = async () => {
        if (placing || !qty.some(Boolean)) return;
        placing = true;
        const me = ++id;
        stEls.forEach((s) => s.classList.remove('done', 'act'));
        scrim.classList.add('open');
        sheet.classList.add('open');
        await wait(700);
        stEls[0].classList.add('done');
        stEls[1].classList.add('act');
        await wait(1500);
        if (me !== id) return;
        stEls[1].classList.replace('act', 'done');
        stEls[2].classList.add('act');
        await wait(1500);
        if (me !== id) return;
        stEls[2].classList.replace('act', 'done');
        stEls[3].classList.add('act');
        await wait(1700);
        if (me !== id) return;
        close();
        await wait(600);
        clear();
        placing = false;
      };
      bar.addEventListener('click', place);
      $('.oc').addEventListener('click', () => {
        id++;
        close();
        clear();
        placing = false;
      });
      scrim.addEventListener('click', () => $('.oc').click());
      sync();

      // Autoplay: add two dishes, tap the cart bar, watch the order steps; any real input hands over for 4s.
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle() || placing) {
            await wait(400);
            continue;
          }
          const adds = [...menu.querySelectorAll('.add')];
          if (!(await tap(adds[0], 0.5, 0.5))) continue;
          await wait(1100);
          if (!(await tap(adds[1], 0.5, 0.5))) continue;
          await wait(900);
          if (!(await tap(adds[1], 0.5, 0.5, 700))) continue;
          await wait(1200);
          if (!(await tap(bar, 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(9500);
        }
      })();
    },
    prompt: `Build a mobile food-delivery menu screen with an add-to-cart bar that springs up and an order-status bottom sheet (100dvh column, max-width 430px centered on larger screens).

Layout: a header with "Deliver to" and the address (20px/700) plus a 44px search button; category chips (38px pills, the active one tinted with your accent); a restaurant line with name, rating, time and delivery fee; and a scrolling menu list (padded at the bottom so the bar never covers the last row). Each menu row has a 92px dish image with 22px radius (draw it as an inline SVG: gradient tile, a plate circle and simple toppings in blue steps), a 17px/650 name, a 13.5px muted description, a tabular-nums price, and a 44px round add button.

Add button: a "+" on a soft accent circle; the first tap fills it with the accent and shows the quantity number with a pop (scale .7 to 1.08 to 1, 420ms); each further tap increments it. A dark cart bar (62px, 22px radius, absolutely positioned above the home indicator) holds a count badge, "Place order" and the running total. It is hidden at transform: translateY(160%) and enters with a slightly overshooting spring (linear() curve, about 594ms) when the first item is added; the badge pops on every add.

Order status: tapping the bar opens a bottom sheet (30px top radius, grab handle, scrim, spring slide) titled "Order placed" with the estimated arrival and a vertical stepper: Order confirmed, Preparing your food, On the way, Delivered. Each step has a 30px node (grey ring, then an accent ring with a soft 5px halo while active, then a filled accent node with a check that scales in) and the connector line fills with transform: scaleY(0 to 1) over 600ms as steps complete, one every 1.5s. When done the sheet closes and the cart empties.

Accessibility: add buttons have aria-labels including the dish, the bar announces count and total with aria-live="polite", the sheet is role="dialog", targets are 44px or larger, prefers-reduced-motion shortens the springs. Plain HTML, CSS and JS, no libraries; React-friendly structure (MenuScreen, MenuItem, AddButton, CartBar, OrderStatusSheet, Stepper).`,
  });

  // ================================================================ chunk 2: screens 13-24 (maps ... tasks)
  // New icons only (the 12 screens above keep using P untouched).
  Object.assign(P, {
    droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    book: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    sunrise: '<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>',
    leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>',
    pen: '<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    tv: '<rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>',
    wind: '<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>',
    plane: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
    qr: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3"/><path d="M21 21v.01"/><path d="M12 7v3a2 2 0 0 1-2 2H7"/><path d="M3 12h.01"/><path d="M12 3h.01"/><path d="M12 16v.01"/><path d="M16 12h1"/><path d="M21 12v.01"/><path d="M12 21v-1"/>',
    fileText: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    rain: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    flash: '<path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"/><line x1="6" x2="18" y1="6" y2="6"/><line x1="12" x2="12" y1="12" y2="12"/>',
    list: '<path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/>',
    coffee: '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
    power: '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    circleCheck: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    chevU: '<path d="m18 15-6-6-6 6"/>',
    scan: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/>',
    thermo: '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>',
  });

  // ---------------------------------------------------------------- 13. maps
  ML.add({
    id: 'app-mobile-maps',
    cat: 'app-mobile',
    title: 'Map search with draggable sheet',
    sub: 'Pins drop in, sheet snaps between detents',
    html: frame(
      `
<div class="body mp">
  <div class="mp-map">
    <svg viewBox="0 0 360 920" preserveAspectRatio="xMidYMin slice" aria-hidden="true">
      <rect width="360" height="920" fill="#E1EBF8"/>
      ${MAP}
      <path d="M-10 396C80 330 190 410 380 286" fill="none" stroke="#fff" stroke-width="12" stroke-linecap="round" opacity=".9"/>
      <g class="mp-pins"></g>
      <g transform="translate(146 306)"><circle class="mp-ring" r="16"/><circle r="8" fill="#FF4433" stroke="#fff" stroke-width="3"/></g>
    </svg>
  </div>
  <div class="mp-top">
    <div class="mp-search">${I(P.search, 20)}<span>Coffee near Harbor St</span><i>${I(P.x, 15, 2.4)}</i></div>
    <div class="mp-chips" role="group" aria-label="Filter places"><button type="button" class="mp-chip on" data-c="all">All</button><button type="button" class="mp-chip" data-c="coffee">Coffee</button><button type="button" class="mp-chip" data-c="bakery">Bakery</button><button type="button" class="mp-chip" data-c="tea">Tea</button></div>
  </div>
  <section class="mp-sheet" aria-label="Nearby places">
    <div class="mp-gr" tabindex="0" role="slider" aria-label="Resize place list" aria-valuemin="0" aria-valuemax="2" aria-valuenow="1"><div class="grab"></div><div class="mp-hd"><h2>Nearby</h2><span class="mp-n">6 places</span></div></div>
    <ul class="mp-list no-scroll"></ul>
  </section>
</div>`,
      [P.pin, 'Pins drop in', 'Each filter re-drops the set', 20],
      [P.chevU, 'Three detents', 'Drag the sheet, it snaps', 66],
    ),
    css: `${BASE}
.d .mp{background:#E1EBF8}
.d .mp-map{position:absolute;top:-50px;left:0;right:0;height:920px;transform:translate(var(--tx,0px),var(--ty,0px)) scale(1.25);transition:transform 760ms var(--ml-ease)}
.d .mp-map svg{display:block;width:100%;height:100%}
.d .mp-ring{fill:#FF4433;opacity:.2;transform-box:fill-box;transform-origin:50% 50%;animation:mp-pulse 2.4s ease-out infinite}
@keyframes mp-pulse{0%{transform:scale(.6);opacity:.35}100%{transform:scale(2.6);opacity:0}}
.d .pn{cursor:pointer;transform-origin:0 0;transition:transform .45s var(--ml-bounce);outline:none}
.d .pn.on{transform:scale(1.3)}
.d .pb{fill:#fff;stroke:#FF4433;stroke-width:2.5;transition:fill .3s}
.d .pc{fill:#FF4433;transition:fill .3s}
.d .pn.on .pb{fill:#FF4433}
.d .pn.on .pc{fill:#fff}
.d .pl{opacity:0;transition:opacity .3s ease}
.d .pn.on .pl{opacity:1}
.d .pl{font:650 10.5px var(--ml-font);fill:var(--ml-ink);text-anchor:middle;paint-order:stroke;stroke:#fff;stroke-width:3.5px;stroke-linejoin:round}
.d .pn.drop{animation:mp-drop 640ms var(--ml-bounce) var(--dl,0ms) backwards}
@keyframes mp-drop{0%{opacity:0;transform:translateY(-52px)}35%{opacity:1}100%{opacity:1;transform:none}}
.d .mp-top{position:absolute;top:2px;left:12px;right:12px;z-index:4}
.d .mp-search{display:flex;align-items:center;gap:10px;height:50px;padding:0 16px;border-radius:17px;background:var(--ml-bg);box-shadow:var(--ml-shadow);color:var(--ml-muted)}
.d .mp-search span{flex:1;font-size:16px;font-weight:600;color:var(--ml-ink)}
.d .mp-search i{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--ml-surface)}
.d .mp-chips{display:flex;gap:8px;margin-top:10px}
.d .mp-chip{flex:none;height:38px;padding:0 16px;border:0;border-radius:99px;background:var(--ml-bg);box-shadow:var(--ml-shadow);font-size:15px;font-weight:650;color:var(--ml-ink-2);cursor:pointer;transition:background-color .25s,color .25s,transform 90ms ease-out}
.d .mp-chip:active,.d .mp-chip.press{transform:scale(.95)}
.d .mp-chip.on{background:var(--ml-accent);color:#fff}
.d .mp-sheet{position:absolute;left:0;right:0;top:124px;bottom:0;z-index:6;display:flex;flex-direction:column;border-radius:30px 30px 0 0;background:var(--ml-bg);box-shadow:0 -10px 36px rgba(35,15,10,.16);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .mp-sheet.drag{transition:none}
.d .mp-gr{flex:none;padding:10px 22px 6px;cursor:grab;touch-action:none;user-select:none;-webkit-user-select:none;outline:none}
.d .mp-gr:focus-visible{box-shadow:inset 0 0 0 2px var(--ml-accent);border-radius:24px 24px 0 0}
.d .mp-gr .grab{margin-bottom:10px}
.d .mp-hd{display:flex;align-items:baseline;justify-content:space-between}
.d .mp-hd h2{font-size:23px;font-weight:700;letter-spacing:-.035em}
.d .mp-n{font-size:14px;font-weight:600;color:var(--ml-muted)}
.d .mp-list{flex:1;min-height:0;padding:2px 12px calc(var(--hb) + 10px);overflow:hidden;list-style:none}
.d .mp-sheet.full .mp-list{overflow-y:auto}
.d .pr{display:flex;align-items:center;gap:13px;width:100%;min-height:70px;padding:8px;border:0;border-radius:18px;background:none;text-align:left;cursor:pointer;transition:background-color .25s,transform 90ms ease-out}
.d .pr:active,.d .pr.press{transform:scale(.98)}
.d .pr.sel{background:var(--ml-accent-soft)}
.d .pr .ic{display:grid;flex:none;place-items:center;width:48px;height:48px;border-radius:15px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-accent);transition:background-color .25s}
.d .pr.sel .ic{background:var(--ml-bg)}
.d .pr div{flex:1;min-width:0}
.d .pr b{display:block;overflow:hidden;font-size:16.5px;font-weight:650;letter-spacing:-.015em;white-space:nowrap;text-overflow:ellipsis}
.d .pr small{display:flex;align-items:center;gap:4px;margin-top:1px;font-size:13.5px;color:var(--ml-muted)}
.d .pr small svg{fill:var(--ml-accent);stroke:var(--ml-accent)}
.d .pr em{font-size:14px;font-style:normal;font-weight:650;font-variant-numeric:tabular-nums;color:var(--ml-ink-2)}
.d .pr.pop{animation:mb-in 420ms var(--ml-ease) var(--dl,0ms) backwards}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .mp-ring{animation:none}.d .pn.drop{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const places = [
        ['Corvid Coffee', 'coffee', '0.2 km', '4.8', 'Open until 9 PM', 96, 364],
        ['Marlow Bakehouse', 'bakery', '0.3 km', '4.7', 'Open until 6 PM', 182, 316],
        ['Kestrel Cafe', 'coffee', '0.5 km', '4.6', 'Open 24 hours', 268, 362],
        ['Tidewater Tea Room', 'tea', '0.6 km', '4.9', 'Open until 8 PM', 112, 280],
        ["Pia's Espresso Bar", 'coffee', '0.7 km', '4.5', 'Closes at 7 PM', 182, 368],
        ['Fernway Grind', 'coffee', '0.9 km', '4.7', 'Open until 10 PM', 256, 274],
      ];
      const sv = (d) => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const icons = {
        coffee: sv('<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>'),
        bakery: sv('<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>'),
        tea: sv('<path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2"/><path d="M10 2v2"/><path d="M14 2v2"/>'),
      };
      const star = '<svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
      const body = $('.mp');
      const map = $('.mp-map');
      const pins = $('.mp-pins');
      const sheet = $('.mp-sheet');
      const gr = $('.mp-gr');
      const list = $('.mp-list');
      const nEl = $('.mp-n');
      const chips = [...root.querySelectorAll('.mp-chip')];
      let cat = 'all';
      let sel = -1;
      let det = 1;
      let Y = 0;
      let dragging = null;
      const H = () => sheet.offsetHeight;
      const Ys = () => [H() - 128, H() - 330, 0];
      const setY = (y, smooth) => {
        Y = y;
        sheet.classList.toggle('drag', !smooth);
        sheet.style.transform = `translateY(${y}px)`;
      };
      const snap = (i) => {
        det = i;
        setY(Ys()[i], true);
        sheet.classList.toggle('full', i === 2);
        gr.setAttribute('aria-valuenow', String(i));
      };
      const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
      const pan = () => {
        const g = pins.querySelector('.pn.on');
        let tx = 0;
        let ty = 0;
        if (g) {
          const p = places[+g.dataset.i];
          const bw = body.offsetWidth;
          const bh = body.offsetHeight;
          const k = Math.max(bw / 360, 1);
          const gx = bw / 2;
          const gy = (104 + bh - 330) / 2;
          tx = clamp(gx - bw / 2 - 1.25 * (p[5] * k - bw / 2), -0.08 * bw, 0.08 * bw);
          ty = clamp(gy + 50 - 460 - 1.25 * ((p[6] - 18) * k - 460), -22, 46);
        }
        map.style.setProperty('--tx', `${tx.toFixed(1)}px`);
        map.style.setProperty('--ty', `${ty.toFixed(1)}px`);
      };
      const select = (i) => {
        sel = sel === i ? -1 : i;
        pins.querySelectorAll('.pn').forEach((g) => g.classList.toggle('on', +g.dataset.i === sel));
        list.querySelectorAll('.pr').forEach((b) => b.classList.toggle('sel', +b.dataset.i === sel));
        pins.classList.toggle('hs', sel >= 0);
        pan();
        if (sel >= 0 && det !== 1) snap(1);
      };
      const show = (drop) => {
        const vis = places.map((p, i) => [p, i]).filter(([p]) => cat === 'all' || p[1] === cat);
        sel = -1;
        pins.classList.remove('hs');
        pins.innerHTML = vis
          .map(([p, i], k) => `<g transform="translate(${p[5]} ${p[6]})"><g class="pn${drop ? ' drop' : ''}" data-i="${i}" role="button" tabindex="0" aria-label="${p[0]}" style="--dl:${k * 90}ms"><path class="pb" d="M0 0c-10-13-15-20-15-28a15 15 0 0 1 30 0c0 8-5 15-15 28z"/><circle class="pc" cy="-28" r="5.5"/><text class="pl" y="17">${p[0]}</text></g></g>`)
          .join('');
        list.innerHTML = vis
          .map(([p, i], k) => `<li><button type="button" class="pr${drop ? ' pop' : ''}" data-i="${i}" style="--dl:${k * 60}ms"><span class="ic">${icons[p[1]]}</span><div><b>${p[0]}</b><small>${star}${p[3]} - ${p[4]}</small></div><em>${p[2]}</em></button></li>`)
          .join('');
        nEl.textContent = `${vis.length} places`;
        pan();
      };
      pins.addEventListener('click', (e) => {
        const g = e.target.closest('.pn');
        if (g) select(+g.dataset.i);
      });
      pins.addEventListener('keydown', (e) => {
        const g = e.target.closest('.pn');
        if (g && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          select(+g.dataset.i);
        }
      });
      list.addEventListener('click', (e) => {
        const b = e.target.closest('.pr');
        if (b) select(+b.dataset.i);
      });
      chips.forEach((c) =>
        c.addEventListener('click', () => {
          cat = c.dataset.c;
          chips.forEach((x) => x.classList.toggle('on', x === c));
          show(true);
        }),
      );
      // real pointer drag on the sheet header
      gr.addEventListener('pointerdown', (e) => {
        dragging = { y: e.clientY, Y0: Y, v: 0, ly: e.clientY, lt: performance.now() };
        gr.setPointerCapture(e.pointerId);
        sheet.classList.add('drag');
      });
      gr.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const now = performance.now();
        dragging.v = (e.clientY - dragging.ly) / sc() / Math.max(1, now - dragging.lt);
        dragging.ly = e.clientY;
        dragging.lt = now;
        setY(clamp(dragging.Y0 + (e.clientY - dragging.y) / sc(), 0, Ys()[0]), false);
      });
      const endDrag = () => {
        if (!dragging) return;
        const target = Y + dragging.v * 180;
        const ys = Ys();
        let b = 0;
        ys.forEach((v, i) => {
          if (Math.abs(v - target) < Math.abs(ys[b] - target)) b = i;
        });
        dragging = null;
        snap(b);
      };
      gr.addEventListener('pointerup', endDrag);
      gr.addEventListener('pointercancel', endDrag);
      gr.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') snap(Math.min(2, det + 1));
        else if (e.key === 'ArrowDown') snap(Math.max(0, det - 1));
      });
      show(false);
      new ResizeObserver(() => {
        if (!dragging) {
          snap(det);
          pan();
        }
      }).observe(body);
      snap(1);

      // the cursor grabs the handle and the sheet follows it
      const dragTo = async (i) => {
        if (!idle()) return false;
        put(pt(gr, 0.5, 0.35));
        await wait(850);
        if (!idle()) return false;
        cur.classList.add('press');
        const y0 = Y;
        const y1 = Ys()[i];
        cur.style.transition = 'none';
        await anim(950, (e) => {
          setY(y0 + (y1 - y0) * e, false);
          put(pt(gr, 0.5, 0.35));
        });
        cur.style.transition = '';
        cur.classList.remove('press');
        snap(i);
        return true;
      };

      // Autoplay: filter to Coffee (pins drop), drag the sheet up, pick a place (map recentres), drag down, reset; real input hands over for 4s.
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await tap(chips[1], 0.5, 0.5))) continue;
          await wait(1700);
          if (!(await dragTo(2))) continue;
          await wait(900);
          if (!(await tap(list.querySelectorAll('.pr')[1], 0.5, 0.5))) continue;
          await wait(2600);
          if (!(await dragTo(0))) continue;
          await wait(1500);
          if (!(await tap(chips[0], 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(2400);
        }
      })();
    },
    prompt: `Build a map search screen for a mobile app: a full-bleed abstract map, a floating search bar with filter chips, place pins that drop in, and a bottom sheet of results that drags between three detents (100dvh, max-width 430px centered on larger screens).

Map: draw it as inline SVG, no tiles. Roads are the background (pale blue), city blocks are rounded rectangles in two near-white tints, one diagonal white avenue, a pulsing "you are here" dot. Wrap the SVG in a div scaled to 1.25 so there is room to pan. Pins are teardrop paths whose tip sits on the coordinate, each with a bold 10.5px label (paint-order: stroke, white halo). The selected pin scales to 1.3 from its tip and fills with your accent.

Search: a 50px white pill with a search icon, query text and a clear button, then 38px filter chips (All, Coffee, Bakery, Tea); the active chip is filled with the accent. Changing the filter rebuilds the pins and rows and plays a drop animation: translateY(-52px) to 0 with opacity, 640ms overshoot spring (linear() curve), 90ms stagger per pin.

Sheet: absolutely positioned, 30px top radius, grab handle, title "Nearby" and a count. It moves only with transform: translateY(). Detents are peek (128px visible), mid (330px) and full; pointer events on the header with setPointerCapture drag it live (no transition while dragging, clamp to the range), and on release snap to the nearest detent using position plus velocity * 180ms, with a critically damped spring of about 590ms. The list scrolls only at the full detent. Rows have a 48px icon tile, name, rating and hours, and distance with tabular-nums. Tapping a row or a pin selects it, snaps the sheet to mid and recentres the map: compute the translate that puts the pin in the middle of the visible band above the sheet, clamp it, and transition transform 760ms.

Accessibility: pins are role="button" with aria-labels, the handle is role="slider" with arrow keys, targets 44px or larger, prefers-reduced-motion removes the pulse and the drop. Plain HTML, CSS and JS, no libraries; React-friendly structure (MapScreen, MapCanvas, Pin, SearchBar, FilterChips, PlacesSheet, PlaceRow).`,
  });

  // ---------------------------------------------------------------- 14. calendar agenda
  ML.add({
    id: 'app-mobile-calendar',
    cat: 'app-mobile',
    title: 'Agenda with add-event sheet',
    sub: 'Week strip glides, new event drops in',
    html: frame(
      `
<div class="body cl">
  <header class="cl-h"><div><p class="eyebrow">Good morning, Maya</p><h1 class="ttl">Agenda</h1></div><button type="button" class="ibtn cl-add" aria-label="Add event">${I(P.plus, 22)}</button></header>
  <div class="cl-mo"><b>October 2026</b><span>Week 42</span></div>
  <div class="cl-wk" role="tablist" aria-label="Days of the week"></div>
  <div class="cl-day"><h2 class="cl-dt">Wednesday, 14 October</h2><p class="cl-ds">4 events</p></div>
  <ul class="cl-list no-scroll"></ul>
</div>
${tabs([[P.list, 'Agenda'], [P.cal, 'Month'], [P.check, 'Tasks'], [P.user, 'You']], 0)}
<div class="scrim"></div>
<div class="sheet cl-sh" role="dialog" aria-label="New event">
  <div class="grab"></div>
  <h2>New event</h2>
  <label class="cl-f"><span>Title</span><input class="cl-in" type="text" placeholder="Event title" maxlength="32" autocomplete="off"></label>
  <p class="cl-wh">${I(P.cal, 17)}<span>Wednesday, 14 October</span></p>
  <div class="cl-tc" role="radiogroup" aria-label="Start time"><button type="button" role="radio" aria-checked="true" class="on">2:00 PM</button><button type="button" role="radio" aria-checked="false">2:30 PM</button><button type="button" role="radio" aria-checked="false">3:00 PM</button></div>
  <button type="button" class="btn cl-go"><span class="lbl">Add event</span></button>
</div>`,
      [P.cal, 'Shared day pill', 'One highlight glides across', 18],
      [P.plus, 'New event drops in', 'Rows part and make room', 66],
    ),
    css: `${BASE}
.d .cl-h{display:flex;align-items:flex-end;justify-content:space-between;padding:6px 20px 4px}
.d .cl-h .ttl{margin-top:2px}
.d .cl-mo{display:flex;align-items:baseline;justify-content:space-between;padding:10px 22px 6px}
.d .cl-mo b{font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .cl-mo span{font-size:13px;font-weight:600;color:var(--ml-muted)}
.d .cl-wk{position:relative;display:grid;flex:none;grid-template-columns:repeat(7,1fr);margin:0 12px;padding:4px 0}
.d .cl-pw{position:absolute;left:0;top:4px;bottom:4px;width:calc(100% / 7);padding:0 3px;transform:translateX(calc(var(--i,2) * 100%));transition:transform 560ms var(--ml-bounce);pointer-events:none}
.d .cl-pw i{display:block;height:100%;border-radius:20px;background:var(--ml-grad);box-shadow:0 6px 14px rgba(255,68,51,.28)}
.d .cl-d{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;height:76px;border:0;border-radius:20px;background:none;color:var(--ml-ink);cursor:pointer;transition:color .25s,transform 90ms ease-out}
.d .cl-d:active,.d .cl-d.press{transform:scale(.94)}
.d .cl-d small{font-size:12.5px;font-weight:600;color:var(--ml-muted);transition:color .25s}
.d .cl-d b{font-size:21px;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .cl-d .dots{display:flex;gap:3px;height:5px}
.d .cl-d .dots i{width:5px;height:5px;border-radius:50%;background:var(--ml-accent);transition:background-color .25s}
.d .cl-d.td b{color:var(--ml-accent)}
.d .cl-d.on{color:#fff}
.d .cl-d.on small,.d .cl-d.on b{color:#fff}
.d .cl-d.on .dots i{background:#fff}
.d .cl-day{display:flex;align-items:baseline;justify-content:space-between;padding:12px 22px 6px}
.d .cl-day h2{font-size:18px;font-weight:700;letter-spacing:-.03em}
.d .cl-day p{font-size:13.5px;font-weight:600;color:var(--ml-muted)}
.d .cl-list{flex:1;min-height:0;padding:4px 16px 16px;overflow-y:auto;list-style:none}
.d .evw{display:grid;grid-template-rows:1fr;transition:grid-template-rows 620ms var(--ml-ease)}
.d .evw.ins{grid-template-rows:0fr}
.d .evw > .in{min-height:0;overflow:hidden}
.d .evw.pop{animation:mb-in 440ms var(--ml-ease) calc(var(--k,0) * 55ms) backwards}
.d .ev{display:flex;gap:12px;padding:0 0 10px}
.d .tm{flex:none;width:72px;padding-top:12px;text-align:right;white-space:nowrap}
.d .tm b{display:block;font-size:14px;font-weight:650;font-variant-numeric:tabular-nums;letter-spacing:-.01em}
.d .tm small{display:block;font-size:12px;color:var(--ml-muted)}
.d .ec{position:relative;flex:1;min-width:0;padding:12px 14px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);transition:opacity .4s ease,transform .6s var(--ml-bounce),box-shadow 1.6s ease}
.d .evw.ins .ec{opacity:0;transform:translateY(-14px) scale(.96)}
.d .ec.fresh{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .ec b{display:block;padding-right:56px;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .ec small{display:flex;align-items:center;gap:5px;margin-top:2px;font-size:13.5px;color:var(--ml-muted)}
.d .ec .who{position:absolute;right:12px;top:12px;display:flex;gap:4px}
.d .ec .who i{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--ml-accent-soft);box-shadow:0 0 0 2px #fff;color:var(--ml-accent-ink);font-size:10px;font-style:normal;font-weight:700}
.d .now{display:flex;align-items:center;gap:10px;height:22px;margin:0 0 6px;list-style:none}
.d .now span{flex:none;width:72px;text-align:right;font-size:12px;font-weight:700;font-variant-numeric:tabular-nums;color:var(--ml-accent)}
.d .now i{position:relative;flex:1;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .now i::before{content:"";position:absolute;left:-4px;top:-3px;width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .empty{padding:36px 0;text-align:center;font-size:15px;color:var(--ml-muted)}
.d .cl-sh{padding-bottom:calc(var(--hb) + 6px)}
.d .cl-sh h2{margin-bottom:12px;font-size:23px;font-weight:700;letter-spacing:-.035em}
.d .cl-f{display:block}
.d .cl-f span{display:block;margin-bottom:6px;font-size:12.5px;font-weight:600;letter-spacing:.02em;color:var(--ml-muted)}
.d .cl-in{width:100%;height:52px;padding:0 16px;border:0;border-radius:16px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 17px var(--ml-font);color:var(--ml-ink);outline:none;transition:box-shadow .2s}
.d .cl-in:focus{box-shadow:inset 0 0 0 2px var(--ml-accent)}
.d .cl-wh{display:flex;align-items:center;gap:8px;margin:14px 0 10px;font-size:15px;font-weight:600;color:var(--ml-ink-2)}
.d .cl-wh svg{color:var(--ml-accent)}
.d .cl-tc{display:flex;gap:8px;margin-bottom:16px}
.d .cl-tc button{flex:1;height:44px;border:0;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:650 15px var(--ml-font);color:var(--ml-ink-2);cursor:pointer;transition:background-color .25s,color .25s,box-shadow .25s,transform 90ms ease-out}
.d .cl-tc button:active,.d .cl-tc button.press{transform:scale(.96)}
.d .cl-tc button.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent);color:var(--ml-accent-ink)}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const days = [['Mon', 12], ['Tue', 13], ['Wed', 14], ['Thu', 15], ['Fri', 16], ['Sat', 17], ['Sun', 18]];
      const full = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const data = {
        12: [[600, 'Invoice review', 'Kestrel & Co', 45, ['KM']], [840, 'Dentist check-up', 'Brightline Dental', 60, []]],
        13: [[540, 'Standup', 'Lumen Labs', 15, ['AT']], [690, 'Client call', 'Meridian Foods, video', 45, ['CM', 'IC']], [1020, 'Gym session', 'Bayside Fitness', 60, []]],
        14: [[540, 'Team standup', 'Lumen Labs, video', 15, ['AT', 'PN']], [630, 'Design review', 'Room 4B', 60, ['HK']], [780, 'Lunch with Rafael', 'Corvid Coffee', 60, ['RS']], [930, 'School pickup', 'Fernway Primary', 30, []]],
        15: [[480, 'Pack and prep', 'Home', 30, []], [600, 'Sprint planning', 'Room 2A', 90, ['AT', 'DO']], [1140, 'Dinner with Ana', 'Fernway Bistro', 120, ['AL']]],
        16: [[665, 'Flight to Singapore', 'Terminal 3, Gate B22', 215, []]],
        17: [[600, 'Farmers market', 'Harbor St', 90, ['JW']], [1080, "Noor's birthday", 'Roof deck', 180, ['NH', 'EP']]],
        18: [[660, 'Family brunch', 'Corvid Coffee', 90, []]],
      };
      const NOW = 581;
      const fmt = (m) => `${Math.floor(m / 60) % 12 || 12}:${String(m % 60).padStart(2, '0')} ${m < 720 ? 'AM' : 'PM'}`;
      const dur = (m) => (m < 60 ? `${m} min` : m % 60 ? `${Math.floor(m / 60)} h ${m % 60} min` : `${m / 60} h`);
      const pin = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
      const wk = $('.cl-wk');
      const list = $('.cl-list');
      const dt = $('.cl-dt');
      const ds = $('.cl-ds');
      const scrim = $('.scrim');
      const sheet = $('.sheet');
      const input = $('.cl-in');
      const tcs = [...root.querySelectorAll('.cl-tc button')];
      let sel = 2;
      let uid = 0;
      wk.innerHTML =
        '<div class="cl-pw"><i></i></div>' +
        days
          .map(([n, d], k) => `<button type="button" class="cl-d${k === 2 ? ' td' : ''}" role="tab" data-k="${k}" aria-label="${full[k]} ${d} October"><small>${n}</small><b>${d}</b><span class="dots"></span></button>`)
          .join('');
      const dayBtns = [...wk.querySelectorAll('.cl-d')];
      const dots = () =>
        dayBtns.forEach((b, k) => {
          b.querySelector('.dots').innerHTML = '<i></i>'.repeat(Math.min(3, data[days[k][1]].length));
        });
      const evHtml = (e, extra = '', cls = '') =>
        `<li class="evw ${cls}" ${extra}><div class="in"><div class="ev"><div class="tm"><b>${fmt(e[0])}</b><small>${dur(e[3])}</small></div><div class="ec"><b>${e[1]}</b><small>${pin}${e[2]}</small><span class="who">${e[4].map((w) => `<i>${w}</i>`).join('')}</span></div></div></div></li>`;
      const render = (k) => {
        sel = k;
        wk.style.setProperty('--i', k);
        dayBtns.forEach((b, i) => {
          b.classList.toggle('on', i === k);
          b.setAttribute('aria-selected', String(i === k));
        });
        const d = days[k][1];
        const evs = data[d].slice().sort((a, b) => a[0] - b[0]);
        dt.textContent = `${full[k]}, ${d} October`;
        ds.textContent = evs.length ? `${evs.length} event${evs.length > 1 ? 's' : ''}` : 'Nothing planned';
        let rows = '';
        let nowDone = k !== 2;
        evs.forEach((e, i) => {
          if (!nowDone && e[0] > NOW) {
            rows += '<li class="now"><span>9:41</span><i></i></li>';
            nowDone = true;
          }
          rows += evHtml(e, `style="--k:${i}"`, 'pop');
        });
        if (!nowDone) rows += '<li class="now"><span>9:41</span><i></i></li>';
        list.innerHTML = rows || '<li class="empty">Nothing planned. Enjoy the day.</li>';
        list.scrollTop = 0;
        dots();
        sheet.querySelector('.cl-wh span').textContent = `${full[k]}, ${d} October`;
      };
      wk.addEventListener('click', (e) => {
        const b = e.target.closest('.cl-d');
        if (b) render(+b.dataset.k);
      });
      const open = () => {
        scrim.classList.add('open');
        sheet.classList.add('open');
      };
      const close = () => {
        scrim.classList.remove('open');
        sheet.classList.remove('open');
      };
      $('.cl-add').addEventListener('click', () => {
        open();
        if (idle()) return;
        setTimeout(() => input.focus({ preventScroll: true }), 300);
      });
      scrim.addEventListener('click', close);
      tcs.forEach((b) =>
        b.addEventListener('click', () => {
          tcs.forEach((x) => {
            x.classList.toggle('on', x === b);
            x.setAttribute('aria-checked', String(x === b));
          });
        }),
      );
      const times = [840, 870, 900];
      let added = null;
      $('.cl-go').addEventListener('click', () => {
        const start = times[tcs.findIndex((b) => b.classList.contains('on'))] || 840;
        const ev = [start, input.value.trim() || 'New event', 'Added just now', 30, ['AT']];
        const d = days[sel][1];
        data[d].push(ev);
        added = [d, ev];
        const evs = data[d].slice().sort((a, b) => a[0] - b[0]);
        const idx = evs.indexOf(ev);
        const rows = [...list.children];
        const li = document.createElement('li');
        li.className = 'evw ins';
        li.innerHTML = evHtml(ev, '', '').replace(/^<li[^>]*>/, '').replace(/<\/li>$/, '');
        // place it before the first event that starts later (now-line rows are skipped)
        let before = null;
        let seen = 0;
        for (const r of rows) {
          if (!r.classList.contains('evw')) continue;
          if (seen === idx) {
            before = r;
            break;
          }
          seen++;
        }
        list.insertBefore(li, before);
        dots();
        ds.textContent = `${evs.length} events`;
        close();
        setTimeout(() => {
          li.classList.remove('ins');
          const ec = li.querySelector('.ec');
          ec.classList.add('fresh');
          li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
          setTimeout(() => ec.classList.remove('fresh'), 2200);
        }, 480);
        input.value = '';
      });
      render(2);

      // Autoplay: hop to Thursday and back, open the sheet, type a title, pick 2:30, add; real input hands over for 4s.
      (async () => {
        await wait(1700);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (added) {
            data[added[0]].splice(data[added[0]].indexOf(added[1]), 1);
            added = null;
            render(2);
            await wait(900);
          }
          if (!(await tap(dayBtns[3], 0.5, 0.5))) continue;
          await wait(1900);
          if (!(await tap(dayBtns[2], 0.5, 0.5))) continue;
          await wait(1300);
          if (!(await tap($('.cl-add'), 0.5, 0.5))) continue;
          await wait(900);
          const title = 'Sprint demo';
          cur.classList.add('off');
          for (let i = 1; i <= title.length && idle(); i++) {
            input.value = title.slice(0, i);
            await wait(75);
          }
          if (!idle()) continue;
          if (!(await tap(tcs[1], 0.5, 0.5, 750))) continue;
          await wait(500);
          if (!(await tap($('.cl-go'), 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(4200);
        }
      })();
    },
    prompt: `Build a mobile agenda screen: a week strip with a gliding selected-day pill, the day's events as a timeline list, and an add-event bottom sheet (100dvh, max-width 430px centered on larger screens, tab bar at the bottom).

Layout: header with the date eyebrow, the title "Agenda" (32px/700) and a 44px add button; a "October 2026" row; a 7-column week strip (Mon to Sun, 76px tall buttons with a weekday label, a 21px date and up to three 5px event dots; today's date is accent colored); a day heading ("Wednesday, 14 October", "4 events"); a scrolling list. Each event is a row: a 62px right-aligned time column (start time bold, duration muted), then a white card (18px radius, hairline) with title, place with a pin icon, and overlapping 26px initials avatars on the right. For today, draw a "now" line (accent dot and 2px rule with the time) between past and upcoming events.

Motion: one accent pill (20px radius, accent gradient) sits behind the strip and moves with transform: translateX(calc(var(--i) * 100%)), 560ms overshoot spring (linear() curve); the selected button's text turns white. Changing the day rebuilds the list with a 440ms rise-and-fade, 55ms stagger. The add sheet slides up with a critically damped spring over a scrim; it holds a title field (52px, accent focus ring), the chosen day, a radiogroup of three time chips and a primary button. On Add, close the sheet and insert the new event at its sorted position inside an li whose grid-template-rows animates 0fr to 1fr over 620ms, with the card fading and rising from translateY(-14px), then a soft accent highlight that fades after 2s; neighbours shift smoothly because of the grid-rows animation, no height tweening.

Accessibility: the strip is role="tablist" with aria-selected, the sheet is role="dialog" with focus moved to the title field, chips are role="radio", targets 44px or larger, prefers-reduced-motion shortens the springs. Plain HTML, CSS and JS, no libraries; React-friendly structure (AgendaScreen, WeekStrip, DayPill, EventList, EventCard, NowLine, AddEventSheet).`,
  });

  // ---------------------------------------------------------------- 15. product detail
  const PK = (k) =>
    [
      `<svg viewBox="0 0 300 300" aria-hidden="true"><ellipse cx="150" cy="270" rx="86" ry="9" fill="rgba(35,15,10,.12)"/><path d="M128 66V50a22 22 0 0 1 44 0v16" fill="none" class="pk2s" stroke-width="10" stroke-linecap="round"/><rect class="pk" x="68" y="58" width="164" height="204" rx="52"/><rect class="pk2" x="54" y="116" width="18" height="96" rx="9"/><rect class="pk2" x="228" y="116" width="18" height="96" rx="9"/><path class="pk2" d="M68 124c0-40 36-62 82-62s82 22 82 62z"/><rect x="136" y="110" width="28" height="20" rx="7" fill="#fff" opacity=".85"/><rect class="pk2" x="90" y="168" width="120" height="76" rx="28"/><path d="M104 190h92" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 8" opacity=".75"/></svg>`,
      `<svg viewBox="0 0 300 300" aria-hidden="true"><ellipse cx="150" cy="270" rx="70" ry="9" fill="rgba(35,15,10,.12)"/><path d="M150 62V48a20 20 0 0 1 40 0v14" fill="none" class="pk2s" stroke-width="10" stroke-linecap="round"/><rect class="pk" x="96" y="58" width="118" height="204" rx="50"/><path class="pk2" d="M96 118c0-34 26-56 59-56s59 22 59 56z"/><rect class="pk2" x="116" y="160" width="78" height="62" rx="24"/><path d="M96 130c-34 24-40 60-30 96" fill="none" class="pk2s" stroke-width="14" stroke-linecap="round"/><path d="M214 130c34 24 40 60 30 96" fill="none" class="pk2s" stroke-width="14" stroke-linecap="round"/><circle cx="155" cy="190" r="6" fill="#fff" opacity=".85"/></svg>`,
      `<svg viewBox="0 0 300 300" aria-hidden="true"><rect class="pk" x="26" y="60" width="248" height="190" rx="70"/><path class="pk2" d="M26 130c0-42 50-70 124-70s124 28 124 70z"/><path d="M52 176h196" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-dasharray="3 12" opacity=".8"/><rect x="134" y="162" width="32" height="28" rx="10" fill="#fff" opacity=".9"/><rect class="pk2" x="68" y="198" width="164" height="38" rx="19"/><circle cx="232" cy="176" r="9" fill="#fff" opacity=".9"/></svg>`,
    ][k];
  ML.add({
    id: 'app-mobile-product',
    cat: 'app-mobile',
    title: 'Product detail with variants',
    sub: 'Swatch recolours it, Add flies into the bag',
    html: frame(
      `
<div class="body pd">
  <div class="pd-sc no-scroll">
    <div class="pd-ph">
      <div class="pd-pg no-scroll" role="group" aria-roledescription="carousel" aria-label="Product photos">
        <div class="pd-sl s0" role="group" aria-label="Photo 1 of 3">${PK(0)}</div>
        <div class="pd-sl s1" role="group" aria-label="Photo 2 of 3">${PK(1)}</div>
        <div class="pd-sl s2" role="group" aria-label="Photo 3 of 3">${PK(2)}</div>
      </div>
      <div class="pd-dots" aria-hidden="true"><i class="on"></i><i></i><i></i></div>
    </div>
    <div class="pd-info">
      <div class="pd-t"><div><p class="eyebrow">Fernway Outdoor</p><h1 class="ttl">Day Pack 22</h1><p class="pd-rt">${I(P.star, 13)}4.8 <span>(312 reviews)</span></p></div><b class="pd-p">$89</b></div>
      <p class="pd-l">Colour <b class="pd-cn">Cobalt</b></p>
      <div class="pd-sw" role="radiogroup" aria-label="Colour"></div>
      <p class="pd-l">Size</p>
      <div class="pd-sz" role="radiogroup" aria-label="Size"><button type="button" role="radio" aria-checked="false" data-s="18">18 L</button><button type="button" role="radio" aria-checked="true" class="on" data-s="22">22 L</button><button type="button" role="radio" aria-checked="false" data-s="28">28 L</button></div>
      <p class="pd-d">Recycled water-resistant shell, a padded sleeve for laptops up to 15 inches and a hidden pocket for your passport. Free shipping over $75.</p>
    </div>
  </div>
  <button type="button" class="ibtn pd-back" aria-label="Back">${I(P.chevL, 22)}</button>
  <button type="button" class="ibtn pd-bag" aria-label="Bag, 2 items">${I(P.bag, 22)}<b class="pd-ct">2</b></button>
  <i class="pd-fly"></i>
  <div class="pd-cta"><div class="pd-pp"><small>Total</small><b>$89.00</b></div><button type="button" class="btn pd-add"><span class="lbl">Add to bag</span><span class="done">${I(P.check, 20, 2.8)}Added</span></button></div>
</div>`,
      [P.bag, 'Add flies to the bag', 'Count pops on arrival', 26],
      [P.tag, 'Swatches recolour it', 'Image and label swap together', 64],
    ),
    css: `${BASE}
.d .pd{--pc:#FF4433;--pc2:#B3150F}
.d .pd-sc{flex:1;min-height:0;margin-top:-50px;overflow-y:auto;padding-bottom:104px}
.d .pd-ph{position:relative}
.d .pd-pg{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;overscroll-behavior-x:contain}
.d .pd-sl{flex:none;display:grid;place-items:center;width:100%;height:372px;padding:84px 0 30px;scroll-snap-align:center}
.d .pd-sl svg{display:block;width:80%;max-width:290px;height:auto}
.d .s0{background:linear-gradient(170deg,#EEF4FF,#D3E4FC)}
.d .s1{background:linear-gradient(170deg,#FFF0EE,#C6DCFA)}
.d .s2{background:linear-gradient(170deg,#F1F6FF,#D8E8FD)}
.d .pk{fill:var(--pc);transition:fill .5s ease}
.d .pk2{fill:var(--pc2);transition:fill .5s ease}
.d .pk2s{stroke:var(--pc2);transition:stroke .5s ease}
.d .pd-dots{position:absolute;left:0;right:0;bottom:14px;display:flex;justify-content:center;gap:6px}
.d .pd-dots i{width:7px;height:7px;border-radius:50%;background:rgba(35,15,10,.2);transition:background-color .3s,transform .4s var(--ml-bounce)}
.d .pd-dots i.on{background:var(--ml-ink);transform:scale(1.2)}
.d .pd-back,.d .pd-bag{position:absolute;top:6px;z-index:6;box-shadow:var(--ml-shadow)}
.d .pd-back{left:14px}
.d .pd-bag{right:14px}
.d .pd-ct{position:absolute;top:-5px;right:-5px;display:grid;place-items:center;min-width:22px;height:22px;padding:0 5px;border-radius:99px;background:var(--ml-accent);box-shadow:0 0 0 2.5px #fff;color:#fff;font-size:12.5px;font-weight:700;font-variant-numeric:tabular-nums}
.d .pd-ct.bump{animation:mb-pop 460ms var(--ml-bounce)}
.d .pd-fly{position:absolute;left:0;top:0;z-index:30;width:20px;height:20px;margin:-10px 0 0 -10px;border-radius:50%;background:var(--pc);box-shadow:0 0 0 3px #fff,0 6px 14px rgba(35,15,10,.25);opacity:0;pointer-events:none}
.d .pd-info{padding:18px 22px 0}
.d .pd-t{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .pd-t .ttl{margin-top:2px;font-size:30px}
.d .pd-p{font-size:26px;font-weight:700;letter-spacing:-.035em;font-variant-numeric:tabular-nums}
.d .pd-rt{display:flex;align-items:center;gap:5px;margin-top:6px;font-size:14px;font-weight:650}
.d .pd-rt svg{fill:var(--ml-accent);stroke:var(--ml-accent)}
.d .pd-rt span{font-weight:500;color:var(--ml-muted)}
.d .pd-l{margin:18px 0 10px;font-size:13px;font-weight:600;letter-spacing:.02em;color:var(--ml-muted)}
.d .pd-l b{margin-left:6px;font-size:15px;color:var(--ml-ink);letter-spacing:-.01em}
.d .pd-sw{display:flex;gap:12px}
.d .sw{position:relative;width:44px;height:44px;border:0;border-radius:50%;background:var(--c);box-shadow:inset 0 0 0 1px rgba(35,15,10,.12);cursor:pointer;transition:transform 90ms ease-out}
.d .sw:active,.d .sw.press{transform:scale(.92)}
.d .sw::after{content:"";position:absolute;inset:-5px;border-radius:50%;box-shadow:0 0 0 2px var(--ml-accent);opacity:0;transform:scale(.86);transition:opacity .25s,transform .45s var(--ml-bounce)}
.d .sw.on::after{opacity:1;transform:none}
.d .pd-sz{display:flex;gap:10px}
.d .pd-sz button{flex:1;height:46px;border:0;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:650 16px var(--ml-font);color:var(--ml-ink-2);cursor:pointer;transition:background-color .25s,color .25s,box-shadow .25s,transform 90ms ease-out}
.d .pd-sz button:active,.d .pd-sz button.press{transform:scale(.96)}
.d .pd-sz button.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent);color:var(--ml-accent-ink)}
.d .pd-d{margin-top:18px;font-size:15px;line-height:1.45;color:var(--ml-muted)}
.d .pd-cta{position:absolute;left:0;right:0;bottom:0;z-index:7;display:flex;align-items:center;gap:16px;padding:12px 20px calc(var(--hb) + 4px);background:#fff;border-top:1px solid var(--ml-line)}
.d .pd-pp small{display:block;font-size:12.5px;color:var(--ml-muted)}
.d .pd-pp b{font-size:21px;font-weight:700;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .pd-add{flex:1;width:auto}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const cols = [
        ['Fog', '#E2D6CC', '#B3C2D8'],
        ['Sky', '#8FBEFF', '#5C9FF2'],
        ['Cobalt', '#FF4433', '#B3150F'],
        ['Graphite', '#3A3F4A', '#1D1D1F'],
      ];
      const pd = $('.pd');
      const pg = $('.pd-pg');
      const dots = [...root.querySelectorAll('.pd-dots i')];
      const sw = $('.pd-sw');
      const cn = $('.pd-cn');
      const ct = $('.pd-ct');
      const bag = $('.pd-bag');
      const fly = $('.pd-fly');
      const add = $('.pd-add');
      const price = $('.pd-pp b');
      const sizes = [...root.querySelectorAll('.pd-sz button')];
      const prices = { 18: 79, 22: 89, 28: 99 };
      let ci = 2;
      let count = 2;
      let size = '22';
      sw.innerHTML = cols.map((c, k) => `<button type="button" class="sw${k === ci ? ' on' : ''}" role="radio" aria-checked="${k === ci}" aria-label="${c[0]}" style="--c:${c[1]}" data-k="${k}"></button>`).join('');
      const swBtns = [...sw.children];
      const setCol = (k) => {
        ci = k;
        pd.style.setProperty('--pc', cols[k][1]);
        pd.style.setProperty('--pc2', cols[k][2]);
        cn.textContent = cols[k][0];
        swBtns.forEach((b, i) => {
          b.classList.toggle('on', i === k);
          b.setAttribute('aria-checked', String(i === k));
        });
      };
      const setSize = (s) => {
        size = s;
        sizes.forEach((b) => {
          b.classList.toggle('on', b.dataset.s === s);
          b.setAttribute('aria-checked', String(b.dataset.s === s));
        });
        price.textContent = `$${prices[s]}.00`;
      };
      sw.addEventListener('click', (e) => {
        const b = e.target.closest('.sw');
        if (b) setCol(+b.dataset.k);
      });
      sizes.forEach((b) => b.addEventListener('click', () => setSize(b.dataset.s)));
      pg.addEventListener('scroll', () => {
        const i = Math.round(pg.scrollLeft / pg.clientWidth);
        dots.forEach((d, k) => d.classList.toggle('on', k === i));
      });
      let busy = false;
      add.addEventListener('click', async () => {
        if (busy) return;
        busy = true;
        const s = sc();
        const o = $('.pd').getBoundingClientRect();
        const a = add.getBoundingClientRect();
        const b = bag.getBoundingClientRect();
        const x0 = (a.left - o.left + a.width * 0.5) / s;
        const y0 = (a.top - o.top + a.height * 0.5) / s;
        const x1 = (b.left - o.left + b.width * 0.5) / s;
        const y1 = (b.top - o.top + b.height * 0.5) / s;
        add.classList.add('ok');
        fly.style.opacity = '1';
        await anim(720, (e, k) => {
          const x = x0 + (x1 - x0) * e;
          const y = y0 + (y1 - y0) * e - Math.sin(Math.PI * k) * 120;
          fly.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) scale(${(1 - 0.55 * e).toFixed(2)})`;
        });
        fly.style.opacity = '0';
        count++;
        ct.textContent = String(count);
        bag.setAttribute('aria-label', `Bag, ${count} items`);
        ct.classList.remove('bump');
        void ct.offsetWidth;
        ct.classList.add('bump');
        await wait(1300);
        add.classList.remove('ok');
        busy = false;
      });
      setSize('22');

      // Autoplay: swipe the pager, recolour, change size, add to bag; real input hands over for 4s.
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (count > 4) {
            count = 2;
            ct.textContent = '2';
          }
          setCol(2);
          setSize('22');
          // swipe to the side view
          const p0 = pt(pg, 0.8, 0.5);
          if (p0) {
            put(p0);
            await wait(800);
            if (!idle()) continue;
            cur.classList.add('press');
            cur.style.transition = 'none';
            pg.scrollTo({ left: pg.clientWidth, behavior: 'smooth' });
            await anim(620, (e) => put([p0[0] - 170 * e, p0[1]]));
            cur.style.transition = '';
            cur.classList.remove('press');
          } else pg.scrollTo({ left: pg.clientWidth, behavior: 'smooth' });
          await wait(1400);
          if (!(await tap(swBtns[1], 0.5, 0.5))) continue;
          await wait(1100);
          if (!(await tap(sizes[2], 0.5, 0.5))) continue;
          await wait(700);
          pg.scrollTo({ left: 0, behavior: 'smooth' });
          if (!(await tap(add, 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(4200);
        }
      })();
    },
    prompt: `Build a product detail screen for a mobile shop: a swipeable image pager, colour swatches that recolour the product, size chips, and an Add to bag button that flies a dot into the bag icon (100dvh, max-width 430px centered on larger screens).

Layout: a scrolling column with a 322px image pager at the top (it also sits under the status bar), floating 44px back and bag buttons over it, then the product block: brand eyebrow, name at 30px/700, rating line, a tabular-nums price, a "Colour" label with the chosen colour name, four 44px round swatches, a "Size" label with three 46px chips, and a short description. A fixed bottom bar holds the total and a 54px gradient button.

Pager: a flex row with overflow-x: auto, scroll-snap-type: x mandatory and scroll-snap-align: center on each 100% wide slide; dots follow Math.round(scrollLeft / clientWidth) and the active dot scales to 1.2. Each slide is an inline SVG product drawn from simple rounded shapes using two CSS variables, --pc and --pc2, as fills with transition: fill .5s. Choosing a swatch sets the two variables on the screen root, so every slide recolours together, and the swatch gets a 2px accent ring that scales in with an overshoot spring; the colour name label updates.

Add to bag: measure the button and the bag icon, then animate a 20px dot with requestAnimationFrame over 720ms: x and y interpolate with an ease-out curve, y also gets minus sin(pi * t) * 120px for the arc, scale goes 1 to 0.45, opacity to 0 at the end. On arrival increment the count badge and play a pop (scale .7, 1.08, 1 over 460ms). The button turns green and swaps its label for an "Added" check for about 1.3s. Prices follow the size.

Accessibility: pager is role="group" aria-roledescription="carousel", swatches and sizes are role="radiogroup" with aria-checked, the bag has an aria-label with the count, targets 44px or larger, prefers-reduced-motion removes the arc. Plain HTML, CSS and JS, no libraries; React-friendly structure (ProductScreen, ImagePager, Swatches, SizeChips, AddToBagButton, BagBadge, FlyingDot).`,
  });

  // ---------------------------------------------------------------- 16. lock-screen notifications
  ML.add({
    id: 'app-mobile-notifications',
    cat: 'app-mobile',
    title: 'Lock screen notification stacks',
    sub: 'Stacks fan out on tap, swipe clears one',
    html: frame(
      `
<div class="body nt">
  <div class="nt-wall" aria-hidden="true"><svg viewBox="0 0 360 780" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="ml-nt-bg" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="#FFDCD6"/><stop offset=".55" stop-color="#FFEBE8"/><stop offset="1" stop-color="#F1F6FF"/></linearGradient></defs><rect width="360" height="780" fill="url(#ml-nt-bg)"/><circle cx="300" cy="120" r="150" fill="#fff" opacity=".35"/><circle cx="40" cy="560" r="190" fill="#8FBEFF" opacity=".25"/><path d="M0 640C90 590 200 690 360 620V780H0z" fill="#fff" opacity=".4"/></svg></div>
  <div class="nt-top"><span class="nt-lk">${I(P.lock, 18, 2.4)}</span><p class="nt-date">Wednesday, 14 October</p><b class="nt-time">9:41</b></div>
  <div class="nt-sc no-scroll" role="region" aria-label="Notifications"><div class="nt-in"></div></div>
  <div class="nt-bot"><button type="button" aria-label="Flashlight">${I(P.flash, 22)}</button><button type="button" aria-label="Camera">${I(P.camera, 22)}</button></div>
</div>`,
      [P.bell, 'Stacks fan out', 'Tap to expand, tap to fold', 20],
      [P.x, 'Swipe to clear', 'The rest close the gap', 66],
    ),
    css: `${BASE}
.d .nt-wall{position:absolute;top:-50px;left:0;right:0;bottom:0}
.d .nt-wall svg{display:block;width:100%;height:100%}
.d .nt-top{position:relative;z-index:2;display:flex;flex:none;flex-direction:column;align-items:center;padding-top:2px}
.d .nt-lk{display:grid;place-items:center;width:30px;height:30px;color:var(--ml-ink-2)}
.d .nt-date{font-size:18px;font-weight:650;letter-spacing:-.02em;color:var(--ml-ink-2)}
.d .nt-time{margin-top:-4px;font-size:86px;line-height:1.06;font-weight:700;letter-spacing:-.05em;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .nt-sc{position:relative;z-index:3;flex:1;min-height:0;margin-top:14px;overflow-y:auto;overscroll-behavior:contain;-webkit-mask-image:linear-gradient(#000 calc(100% - 26px),transparent);mask-image:linear-gradient(#000 calc(100% - 26px),transparent)}
.d .nt-in{position:relative}
.d .nt-bot{position:relative;z-index:3;display:flex;flex:none;justify-content:space-between;padding:12px 38px calc(var(--hb) + 18px)}
.d .nt-bot button{display:grid;place-items:center;width:52px;height:52px;border:0;border-radius:50%;background:rgba(255,255,255,.72);color:var(--ml-ink);cursor:pointer}
.d .ng{position:absolute;left:0;right:0;top:0;display:flex;align-items:center;justify-content:space-between;height:30px;padding:0 24px 0 22px;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .3s ease}
.d .ng b{font-size:13px;font-weight:650;letter-spacing:.01em;color:var(--ml-ink-2)}
.d .ng button{min-height:30px;padding:0 4px;border:0;background:none;font:650 13px var(--ml-font);color:var(--ml-accent-ink);cursor:pointer}
.d .nc{position:absolute;left:12px;right:12px;top:0;display:flex;gap:12px;height:76px;padding:12px 14px;border-radius:22px;background:#fff;box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),0 6px 18px rgba(35,15,10,.1);transform-origin:50% 0;touch-action:pan-y;cursor:pointer;user-select:none;-webkit-user-select:none;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .35s ease}
.d .nc.drag{transition:none}
.d .nc.out{transition:transform .38s var(--ml-ease),opacity .3s ease}
.d .nc .ap{display:grid;flex:none;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .nc .ap.g{background:var(--ml-grad);color:#fff}
.d .nc div{flex:1;min-width:0}
.d .nc .r1{display:flex;align-items:baseline;justify-content:space-between;gap:8px}
.d .nc .r1 b{overflow:hidden;font-size:15.5px;font-weight:650;letter-spacing:-.015em;white-space:nowrap;text-overflow:ellipsis}
.d .nc .r1 small{flex:none;font-size:12.5px;color:var(--ml-muted)}
.d .nc p{display:-webkit-box;overflow:hidden;margin-top:1px;font-size:14px;line-height:1.3;color:var(--ml-ink-2);-webkit-line-clamp:2;-webkit-box-orient:vertical}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const sv = (d) => `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const ic = {
        msg: sv('<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>'),
        pulse: sv('<path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7"/>'),
        cal: sv('<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>'),
      };
      const H = 76;
      const stacks = [
        { name: 'Messages', icon: 'msg', g: true, items: [['Maya Reyes', 'Are we still on for Friday? I booked the 7:30 table.', 'now'], ['Tomas Lindqvist', 'Sent you the updated deck. Slide 6 has the new numbers.', '3m'], ['Aiko Tan', 'Sent a photo from the roof deck', '12m']] },
        { name: 'Juniper Health', icon: 'pulse', items: [['Lab results ready', 'Your October panel is available to view.', '8m'], ['Refill reminder', 'Vitamin D 2000 IU runs out in 3 days.', '1h']] },
        { name: 'Calendar', icon: 'cal', items: [['Design review', 'Room 4B starts in 15 minutes', 'now']] },
      ];
      const inner = $('.nt-in');
      const scr = $('.nt-sc');
      stacks.forEach((st) => {
        st.open = false;
        st.head = document.createElement('div');
        st.head.className = 'ng';
        st.head.innerHTML = `<b>${st.name}</b><button type="button"></button>`;
        st.btn = st.head.querySelector('button');
        inner.appendChild(st.head);
        st.items.forEach((n, k) => {
          const el = document.createElement('div');
          el.className = 'nc';
          el.setAttribute('role', 'button');
          el.setAttribute('tabindex', '0');
          el.innerHTML = `<span class="ap${st.g ? ' g' : ''}">${ic[st.icon]}</span><div><div class="r1"><b>${n[0]}</b><small>${n[2]}</small></div><p>${n[1]}</p></div>`;
          inner.appendChild(el);
          n.el = el;
          n.gone = false;
          n.st = st;
        });
      });
      const layout = () => {
        let y = 0;
        stacks.forEach((st) => {
          const vis = st.items.filter((n) => !n.gone);
          st.vis = vis;
          if (!vis.length) {
            st.head.style.opacity = '0';
            st.head.style.pointerEvents = 'none';
            st.head.style.transform = `translateY(${y}px)`;
            return;
          }
          const open = st.open || vis.length === 1;
          st.head.style.opacity = '1';
          st.head.style.pointerEvents = '';
          st.head.style.transform = `translateY(${y}px)`;
          st.btn.textContent = vis.length === 1 ? '' : st.open ? 'Show less' : `${vis.length} notifications`;
          y += 32;
          vis.forEach((n, k) => {
            const py = open ? y + k * (H + 8) : y + Math.min(k, 2) * 10;
            const s = open ? 1 : 1 - Math.min(k, 2) * 0.05;
            n.base = `translateY(${py}px) scale(${s})`;
            n.el.style.transform = n.base;
            n.el.style.opacity = open || k < 3 ? '1' : '0';
            n.el.style.zIndex = String(60 - k);
            n.el.style.pointerEvents = open || k === 0 ? '' : 'none';
            n.el.classList.remove('out');
          });
          y += open ? vis.length * (H + 8) : H + Math.min(vis.length - 1, 2) * 10 + 8;
          y += 8;
        });
        inner.style.height = `${y + 6}px`;
      };
      const toggle = (st) => {
        if (st.vis.length < 2) return;
        st.open = !st.open;
        layout();
      };
      const clear = (n) => {
        n.gone = true;
        n.el.classList.remove('drag');
        n.el.classList.add('out');
        n.el.style.transform = `${n.base} translateX(-120%)`;
        n.el.style.opacity = '0';
        n.el.style.pointerEvents = 'none';
        setTimeout(() => {
          if (!root.isConnected) return;
          if (n.st.items.filter((x) => !x.gone).length < 2) n.st.open = false;
          layout();
        }, 220);
      };
      const dragBy = (n, dx) => {
        n.el.classList.add('drag');
        n.el.style.transform = `${n.base} translateX(${dx}px)`;
        n.el.style.opacity = String(Math.max(0.25, 1 + dx / 320));
      };
      const release = (n, dx) => {
        n.el.classList.remove('drag');
        if (dx < -90) clear(n);
        else {
          n.el.style.transform = n.base;
          n.el.style.opacity = '1';
        }
      };
      stacks.forEach((st) => {
        st.head.addEventListener('click', () => toggle(st));
        st.items.forEach((n) => {
          let d = null;
          let wasDrag = false;
          n.el.addEventListener('pointerdown', (e) => {
            d = { x: e.clientX, dx: 0, moved: false };
            wasDrag = false;
            n.el.setPointerCapture(e.pointerId);
          });
          n.el.addEventListener('pointermove', (e) => {
            if (!d) return;
            d.dx = (e.clientX - d.x) / sc();
            if (Math.abs(d.dx) > 6) d.moved = true;
            if (d.moved) {
              wasDrag = true;
              dragBy(n, Math.min(0, d.dx));
            }
          });
          const up = () => {
            if (!d) return;
            const x = d;
            d = null;
            if (x.moved) release(n, x.dx);
          };
          n.el.addEventListener('click', () => {
            if (wasDrag) wasDrag = false;
            else toggle(st);
          });
          n.el.addEventListener('pointerup', up);
          n.el.addEventListener('pointercancel', up);
          n.el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggle(st);
            } else if (e.key === 'Delete' || e.key === 'Backspace') clear(n);
          });
        });
      });
      layout();

      // Autoplay: open Messages, swipe one away, fold, open Health, restore for the next loop; real input hands over for 4s.
      (async () => {
        await wait(1900);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          stacks.forEach((st) => st.items.forEach((n) => (n.gone = false)));
          stacks.forEach((st) => (st.open = false));
          layout();
          await wait(500);
          const m = stacks[0];
          if (!(await tap(m.vis[0].el, 0.5, 0.5))) continue;
          await wait(1500);
          const n = m.vis[1];
          const p0 = pt(n.el, 0.7, 0.5);
          if (!p0 || !idle()) continue;
          put(p0);
          await wait(800);
          if (!idle()) continue;
          cur.classList.add('press');
          cur.style.transition = 'none';
          await anim(620, (e) => {
            dragBy(n, -170 * e);
            put([p0[0] - 170 * e, p0[1]]);
          });
          cur.style.transition = '';
          cur.classList.remove('press');
          release(n, -170);
          await wait(1500);
          if (!(await tap(m.btn, 0.5, 0.5))) continue;
          await wait(1300);
          if (!(await tap(stacks[1].vis[0].el, 0.5, 0.5))) continue;
          await wait(2300);
          if (!(await tap(stacks[1].btn, 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(2200);
        }
      })();
    },
    prompt: `Build a lock screen notification center for a mobile app: a clock header and notification stacks that fan out on tap, with swipe-to-clear (100dvh, max-width 430px centered on larger screens, soft blue wallpaper drawn as inline SVG).

Layout: a small lock icon, the date at 18px/650 and the time at 86px/700 with tabular-nums and -0.05em tracking, then a scrolling region of grouped notifications, then flashlight and camera buttons (52px round) at the bottom corners. Each notification card is 76px tall with a 22px radius, a 42px app tile (accent gradient for messages, soft tint for others), a bold title with a muted time on the right, and a 2-line clamped body. Each group has a 30px header with the app name and a "3 notifications" or "Show less" text button.

Technique: position every card absolutely and compute its transform in one layout() function, never animate height. Collapsed: the top card at its slot, the next two peek below with translateY(k * 10px) scale(1 - k * .05) and transform-origin 50% 0, the rest at opacity 0. Expanded: card k at translateY(y + k * 84px) scale(1). The function also returns the next group's y so groups below shift with the same transform transition, and sets a spacer height on the scroller. Use a critically damped spring (linear() curve, about 590ms) for transform. Tapping the top card or the group header toggles the stack.

Swipe: pointer events with setPointerCapture on each card; after 6px of horizontal movement the card follows the finger with translateX and fades; on release past -90px it flies out with transform 380ms and opacity, then layout() runs again so the stack closes the gap; otherwise it springs back. Keyboard: Enter toggles, Delete clears.

Accessibility: cards are role="button" with tabindex, the list is a labelled region, targets are 44px or larger, prefers-reduced-motion shortens the springs. Plain HTML, CSS and JS, no libraries; React-friendly structure (LockScreen, ClockHeader, NotificationGroup, NotificationCard, QuickButtons).`,
  });

  // ---------------------------------------------------------------- 17. scanner
  ML.add({
    id: 'app-mobile-scanner',
    cat: 'app-mobile',
    title: 'QR and document scanner',
    sub: 'Brackets lock on, a result sheet rises',
    html: frame(
      `
<div class="body sn">
  <div class="sn-view" aria-hidden="true">
    <i class="sn-bk b1"></i><i class="sn-bk b2"></i><i class="sn-bk b3"></i>
    <div class="sn-scene sn-qrs on"><div class="sn-paper qr"><div class="sn-qv"></div><b>Join Halden</b><small>Scan to open the invite</small></div></div>
    <div class="sn-scene sn-docs"><div class="sn-paper doc"><b>INVOICE 2041</b><small>Kestrel &amp; Co</small><i class="l w90"></i><i class="l w70"></i><i class="l w80"></i><div class="tb"><i></i><i></i><i></i><i></i></div><i class="l w50"></i><strong>$1,240.00</strong></div></div>
    <div class="sn-ln"><i></i></div>
    <b class="sn-c c0"><i></i></b><b class="sn-c c1"><i></i></b><b class="sn-c c2"><i></i></b><b class="sn-c c3"><i></i></b>
  </div>
  <header class="sn-h"><button type="button" class="ibtn" aria-label="Close scanner">${I(P.x, 22)}</button><button type="button" class="ibtn" aria-label="Flashlight">${I(P.flash, 21)}</button></header>
  <p class="sn-hint" aria-live="polite">Point at a QR code</p>
  <div class="sn-bot"><div class="sn-seg" role="tablist" aria-label="Scan mode"><i class="sn-th"></i><button type="button" role="tab" aria-selected="true" class="on" data-m="qr">${I(P.qr, 19)}QR code</button><button type="button" role="tab" aria-selected="false" data-m="doc">${I(P.fileText, 19)}Document</button></div></div>
</div>
<div class="scrim"></div>
<div class="sheet sn-sh" role="dialog" aria-label="Scan result">
  <div class="grab"></div>
  <div class="sn-r"><span class="sn-ri"></span><div><small class="sn-rk"></small><b class="sn-rt"></b><p class="sn-ru"></p></div></div>
  <button type="button" class="btn sn-go"><span class="lbl">Open link</span></button>
  <button type="button" class="lk sn-no">Scan again</button>
</div>`,
      [P.scan, 'Brackets lock on', 'Corners snap to the code', 20],
      [P.fileText, 'QR or document', 'Mode switch re-scans', 66],
    ),
    css: `${BASE}
.d .sn-view{position:absolute;top:-50px;left:0;right:0;bottom:0;overflow:hidden;background:linear-gradient(180deg,#D3E2F6 0%,#B4C9E6 52%,#8FA9CF 100%)}
.d .sn-bk{position:absolute;border-radius:50%;background:#fff;opacity:.28}
.d .b1{left:-60px;top:80px;width:220px;height:220px}
.d .b2{right:-70px;top:360px;width:260px;height:260px;opacity:.16}
.d .b3{left:40px;bottom:-90px;width:200px;height:200px;opacity:.14}
.d .sn-scene{position:absolute;inset:0;display:grid;place-items:center;padding-top:30px;opacity:0;transform:scale(.92);transition:opacity .45s ease,transform .6s var(--ml-spring)}
.d .sn-scene.on{opacity:1;transform:none}
.d .sn-paper{display:flex;flex-direction:column;align-items:center;border-radius:18px;background:#fff;box-shadow:0 22px 40px rgba(16,40,90,.22),0 4px 10px rgba(16,40,90,.12)}
.d .sn-paper.qr{width:206px;padding:16px 16px 14px;transform:rotate(-3deg)}
.d .sn-qv{width:172px;height:172px}
.d .sn-qv svg{display:block;width:100%;height:100%}
.d .sn-paper b{margin-top:10px;font-size:16px;font-weight:700;letter-spacing:-.02em}
.d .sn-paper small{font-size:12px;color:var(--ml-muted)}
.d .sn-paper.doc{align-items:stretch;width:226px;height:300px;padding:20px 18px;transform:rotate(2.5deg)}
.d .sn-paper.doc b{margin:0;font-size:15px;letter-spacing:.02em}
.d .sn-paper.doc small{margin-bottom:12px}
.d .sn-paper .l{display:block;height:7px;margin-bottom:9px;border-radius:4px;background:var(--ml-bar)}
.d .w90{width:90%}.d .w80{width:80%}.d .w70{width:70%}.d .w50{width:50%}
.d .sn-paper .tb{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:8px 0 16px}
.d .sn-paper .tb i{height:26px;border-radius:7px;background:var(--ml-bar-2);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .sn-paper strong{margin-top:auto;align-self:flex-end;font-size:20px;font-weight:700;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .sn-c{position:absolute;left:0;top:0;z-index:5;width:36px;height:36px;pointer-events:none;transition:transform 150ms linear}
.d .sn-c i{position:absolute;inset:0;border:0 solid #fff;filter:drop-shadow(0 1px 3px rgba(16,40,90,.45));transition:border-color .3s ease}
.d .c0{transform-origin:0 0}.d .c1{transform-origin:100% 0}.d .c2{transform-origin:100% 100%}.d .c3{transform-origin:0 100%}
.d .c0 i{border-width:4px 0 0 4px;border-top-left-radius:14px}
.d .c1 i{border-width:4px 4px 0 0;border-top-right-radius:14px}
.d .c2 i{border-width:0 4px 4px 0;border-bottom-right-radius:14px}
.d .c3 i{border-width:0 0 4px 4px;border-bottom-left-radius:14px}
.d .sn.ok .sn-c i{border-color:#1DB954;animation:sn-pop 520ms var(--ml-bounce)}
@keyframes sn-pop{0%{transform:scale(.86)}60%{transform:scale(1.1)}100%{transform:none}}
.d .sn-ln{position:absolute;left:0;top:0;z-index:4;height:2px;transition:opacity .25s ease}
.d .sn-ln i{display:block;height:3px;border-radius:2px;background:var(--ml-accent);box-shadow:0 0 0 1px rgba(255,255,255,.5);animation:sn-sweep 1.5s ease-in-out infinite alternate}
@keyframes sn-sweep{from{transform:translateY(8px)}to{transform:translateY(calc(var(--bh,200px) - 12px))}}
.d .sn.ok .sn-ln{opacity:0}
.d .sn-h{position:absolute;top:4px;left:14px;right:14px;z-index:6;display:flex;justify-content:space-between}
.d .sn-hint{position:absolute;top:70px;left:50%;z-index:6;padding:9px 16px;border-radius:99px;background:rgba(35,15,10,.72);color:#fff;font-size:14.5px;font-weight:600;white-space:nowrap;transform:translateX(-50%)}
.d .sn-bot{position:absolute;left:0;right:0;bottom:calc(var(--hb) + 26px);z-index:6;display:flex;justify-content:center}
.d .sn-seg{position:relative;display:flex;padding:4px;border-radius:99px;background:rgba(255,255,255,.92);box-shadow:var(--ml-shadow-lg)}
.d .sn-th{position:absolute;left:4px;top:4px;bottom:4px;width:calc(50% - 4px);border-radius:99px;background:var(--ml-accent);transform:translateX(var(--sx,0%));transition:transform 520ms var(--ml-bounce)}
.d .sn-seg button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:7px;min-width:132px;height:46px;padding:0 16px;border:0;border-radius:99px;background:none;font:650 15px var(--ml-font);color:var(--ml-ink-2);cursor:pointer;transition:color .3s ease,transform 90ms ease-out}
.d .sn-seg button:active,.d .sn-seg button.press{transform:scale(.95)}
.d .sn-seg button.on{color:#fff}
.d .sn-sh{padding-bottom:calc(var(--hb) + 6px)}
.d .sn-r{display:flex;align-items:center;gap:14px;padding:6px 0 18px}
.d .sn-ri{display:grid;flex:none;place-items:center;width:56px;height:56px;border-radius:18px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .sn-rk{display:block;font-size:12.5px;font-weight:600;letter-spacing:.02em;color:var(--ml-muted)}
.d .sn-rt{display:block;margin-top:1px;font-size:21px;font-weight:700;letter-spacing:-.03em}
.d .sn-ru{margin-top:1px;font-size:14.5px;color:var(--ml-accent-ink);font-weight:600}
.d .sn-sh .lk{width:100%;margin-top:4px}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .sn-ln i{animation:none}.d .sn.ok .sn-c i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const view = $('.sn-view');
      const body = $('.sn');
      const cs = [...root.querySelectorAll('.sn-c')];
      const ln = $('.sn-ln');
      const hint = $('.sn-hint');
      const segs = [...root.querySelectorAll('.sn-seg button')];
      const scenes = { qr: $('.sn-qrs'), doc: $('.sn-docs') };
      const scrim = $('.scrim');
      const sheet = $('.sheet');
      const qv = $('.sn-qv');
      // a deterministic QR-looking matrix
      const n = 25;
      let seed = 4821;
      const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
      const fin = (x, y) => {
        for (const [fx, fy] of [[0, 0], [n - 7, 0], [0, n - 7]]) {
          const i = x - fx;
          const j = y - fy;
          if (i >= -1 && i <= 7 && j >= -1 && j <= 7) return i >= 0 && j >= 0 && i <= 6 && j <= 6 && (i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4)) ? 1 : 0;
        }
        return null;
      };
      let d = '';
      for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++) {
          const f = fin(x, y);
          if (f === 1 || (f === null && rnd() < 0.5)) d += `M${x} ${y}h1v1h-1z`;
        }
      qv.innerHTML = `<svg viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" aria-hidden="true"><path d="${d}" fill="#1D1D1F"/></svg>`;
      const sv = (p) => `<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
      const res = {
        qr: { ic: sv('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'), k: 'QR code found', t: 'Join Halden workspace', u: 'halden.app/join/TR-4821', b: 'Open link', hint: 'Point at a QR code' },
        doc: { ic: sv('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'), k: 'Document detected', t: 'Invoice 2041', u: 'Kestrel & Co - 1 page - enhanced', b: 'Save as PDF', hint: 'Fit the page inside the corners' },
      };
      let mode = 'qr';
      let state = 'search';
      let id = 0;
      let VW = 0;
      let VH = 0;
      const setQuad = (q, ang, smooth) => {
        q.forEach((p, i) => {
          const c = cs[i];
          const ox = i === 1 || i === 2 ? 36 : 0;
          const oy = i >= 2 ? 36 : 0;
          c.style.transition = smooth ? 'transform 640ms var(--ml-bounce)' : '';
          c.style.transform = `translate(${(p[0] - ox).toFixed(1)}px,${(p[1] - oy).toFixed(1)}px) rotate(${ang}deg)`;
        });
        const xs = q.map((p) => p[0]);
        const ys = q.map((p) => p[1]);
        const w = Math.max(...xs) - Math.min(...xs);
        const h = Math.max(...ys) - Math.min(...ys);
        ln.style.width = `${w}px`;
        ln.style.transform = `translate(${Math.min(...xs)}px,${Math.min(...ys)}px)`;
        ln.style.setProperty('--bh', `${h}px`);
      };
      const target = () => {
        const el = mode === 'qr' ? qv : $('.sn-paper.doc');
        const v = view.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const s = sc();
        const cx = (r.left - v.left + r.width / 2) / s;
        const cy = (r.top - v.top + r.height / 2) / s;
        const ang = mode === 'qr' ? -3 : 2.5;
        const pad = mode === 'qr' ? 14 : 8;
        const hw = el.offsetWidth / 2 + pad;
        const hh = el.offsetHeight / 2 + pad;
        const a = (ang * Math.PI) / 180;
        const rot = (x, y) => [cx + x * Math.cos(a) - y * Math.sin(a), cy + x * Math.sin(a) + y * Math.cos(a)];
        return [rot(-hw, -hh), rot(hw, -hh), rot(hw, hh), rot(-hw, hh)].concat(ang);
      };
      const showScene = () => {
        Object.entries(scenes).forEach(([k, el]) => el.classList.toggle('on', k === mode));
        segs.forEach((b) => {
          b.classList.toggle('on', b.dataset.m === mode);
          b.setAttribute('aria-selected', String(b.dataset.m === mode));
        });
        root.querySelector('.sn-seg').style.setProperty('--sx', mode === 'qr' ? '0%' : '100%');
      };
      const closeSheet = () => {
        scrim.classList.remove('open');
        sheet.classList.remove('open');
      };
      const scan = async (m) => {
        const me = ++id;
        mode = m;
        state = 'search';
        body.classList.remove('ok');
        closeSheet();
        showScene();
        hint.textContent = res[m].hint;
        VW = view.offsetWidth;
        VH = view.offsetHeight;
        await wait(2100);
        if (me !== id) return;
        const t = target();
        state = 'lock';
        setQuad(t.slice(0, 4), t[4], true);
        body.classList.add('ok');
        hint.textContent = m === 'qr' ? 'Code locked' : 'Page captured';
        await wait(900);
        if (me !== id) return;
        const r = res[m];
        sheet.querySelector('.sn-ri').innerHTML = r.ic;
        sheet.querySelector('.sn-rk').textContent = r.k;
        sheet.querySelector('.sn-rt').textContent = r.t;
        sheet.querySelector('.sn-ru').textContent = r.u;
        sheet.querySelector('.sn-go .lbl').textContent = r.b;
        scrim.classList.add('open');
        sheet.classList.add('open');
        state = 'result';
      };
      segs.forEach((b) => b.addEventListener('click', () => scan(b.dataset.m)));
      $('.sn-no').addEventListener('click', () => scan(mode));
      $('.sn-go').addEventListener('click', () => scan(mode === 'qr' ? 'doc' : 'qr'));
      scrim.addEventListener('click', () => scan(mode));
      // roaming brackets while searching
      const frame = (t) => {
        if (!root.isConnected) return;
        if (!root.dataset.paused && state === 'search') {
          const k = t / 1000;
          VW = view.offsetWidth;
          VH = view.offsetHeight;
          const w = 250;
          const h = mode === 'qr' ? 250 : 316;
          const cx = VW / 2 + Math.sin(k * 1.1) * 14;
          const cy = VH * 0.46 + Math.cos(k * 0.9) * 10;
          setQuad([[cx - w / 2, cy - h / 2], [cx + w / 2, cy - h / 2], [cx + w / 2, cy + h / 2], [cx - w / 2, cy + h / 2]], 0, false);
        }
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);
      showScene();
      scan('qr');

      // Autoplay: a QR locks and its sheet rises, tap Scan again, switch to Document, lock, then back; real input hands over for 4s.
      (async () => {
        await wait(800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          while (root.isConnected && state !== 'result') await wait(200);
          await wait(1900);
          if (!(await tap($('.sn-no'), 0.5, 0.5))) continue;
          await wait(600);
          if (!(await tap(segs[1], 0.5, 0.5))) continue;
          cur.classList.add('off');
          while (root.isConnected && state !== 'result') await wait(200);
          await wait(1900);
          if (!(await tap($('.sn-no'), 0.5, 0.5))) continue;
          await wait(600);
          if (!(await tap(segs[0], 0.5, 0.5))) continue;
          cur.classList.add('off');
        }
      })();
    },
    prompt: `Build a camera scanner screen for a mobile app with a QR mode and a Document mode, a roaming viewfinder that locks onto the target, and a result bottom sheet (100dvh, max-width 430px centered on larger screens).

Layout: a full-bleed viewfinder (draw the scene yourself: a soft blue gradient desk with a few pale circles, then a white paper card with a QR code, or a document with a title, bars and a total). Over it: a close button and a flashlight button (44px), a dark pill hint ("Point at a QR code", aria-live), and at the bottom a segmented control (QR code, Document) with an accent thumb that slides with transform: translateX(100%) and a 520ms overshoot spring.

Brackets: four 36px corner elements, each a div with two 4px borders and a 14px radius on one corner, positioned with transform: translate() from a quad of four points; this lets the box be any quadrilateral and rotated a few degrees (transform-origin on the touching corner). While searching, a requestAnimationFrame loop moves the quad in a gentle Lissajous drift (sin and cos, about 14px) and a 3px accent scan line sweeps up and down inside it (keyframes translateY, alternate, 1.5s). After about 2.1s the quad locks: compute the target element's centre and half-size, rotate its four corners by the element's angle, apply with a 640ms overshoot spring, turn the borders green (#1DB954) with a quick scale pop (.86, 1.1, 1), hide the scan line and change the hint to "Code locked". 0.9s later the result sheet rises (30px top radius, grab handle, scrim) with an icon tile, "QR code found", the title, the decoded URL and a primary action; "Scan again" resets to searching. Switching mode crossfades the two scenes (opacity and scale .92 to 1) and restarts the search.

Accessibility: segmented control is role="tablist", the sheet is role="dialog", targets 44px or larger, prefers-reduced-motion removes the sweep and pop. Plain HTML, CSS and JS, no libraries; React-friendly structure (ScannerScreen, Viewfinder, CornerBrackets, ScanLine, ModeSwitch, ResultSheet). Wire the real camera with getUserMedia and a BarcodeDetector where available.`,
  });

  // ---------------------------------------------------------------- 18. habit tracker
  ML.add({
    id: 'app-mobile-habits',
    cat: 'app-mobile',
    title: 'Habit tracker with streaks',
    sub: 'Rings fill, streaks roll, heatmap updates',
    html: frame(
      `
<div class="body hb">
  <header class="hb-h"><div><p class="eyebrow">Wednesday, 14 October</p><h1 class="ttl">Today</h1></div><div class="hb-pill" aria-live="polite"><span class="rl hb-n"></span><span>of 5 done</span></div></header>
  <section class="hb-card" aria-label="Streak and last five weeks">
    <div class="hb-l"><small>Perfect-day streak</small><p class="hb-st"><span class="rl hb-ps"></span><span>days</span></p><em class="hb-msg">Keep going, 3 left</em></div>
    <div class="hb-map" role="img" aria-label="Habit completion for the last five weeks"></div>
  </section>
  <div class="hb-list no-scroll"></div>
</div>
${tabs([[P.check, 'Today'], [P.activity, 'Stats'], [P.cal, 'Plan'], [P.user, 'You']], 0)}`,
      [P.flame, 'Streaks roll', 'The digit scrolls up on a check', 22],
      [P.grid, 'Heatmap updates', 'Today fills as habits close', 68],
    ),
    css: `${BASE}
.d .hb-h{display:flex;align-items:flex-end;justify-content:space-between;padding:6px 20px 8px}
.d .hb-h .ttl{margin-top:2px}
.d .hb-pill{display:flex;align-items:center;gap:5px;height:36px;padding:0 14px;border-radius:99px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:14px;font-weight:650;color:var(--ml-accent-ink)}
.d .rl{display:inline-block;height:1.25em;overflow:hidden;vertical-align:bottom;font-variant-numeric:tabular-nums}
.d .rl i{display:block;font-style:normal;transition:transform 560ms var(--ml-bounce)}
.d .rl b{display:block;height:1.25em;line-height:1.25em;font-weight:inherit}
.d .hb-card{display:flex;align-items:center;justify-content:space-between;gap:14px;margin:4px 16px 8px;padding:16px 18px;border-radius:24px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04)}
.d .hb-l small{display:block;font-size:12.5px;font-weight:600;letter-spacing:.02em;color:var(--ml-muted)}
.d .hb-st{display:flex;align-items:baseline;gap:6px;margin-top:2px;font-size:20px;font-weight:650;letter-spacing:-.02em}
.d .hb-ps{font-size:46px;font-weight:700;letter-spacing:-.05em}
.d .hb-msg{display:block;margin-top:6px;font-size:13.5px;font-style:normal;font-weight:600;color:var(--ml-muted);transition:color .3s}
.d .hb-msg.all{color:#12893C}
.d .hb-map{display:grid;flex:none;grid-template-columns:repeat(7,17px);gap:4px}
.d .hb-map small{display:block;text-align:center;font-size:10.5px;font-weight:600;color:var(--ml-muted)}
.d .hc{width:17px;height:17px;border-radius:6px;background:var(--ml-bar-2);transition:background-color .4s ease}
.d .hc.l1{background:#FFF0ED}.d .hc.l2{background:#8FBEFF}.d .hc.l3{background:#FF7A3D}.d .hc.l4{background:#FF4433}
.d .hc.fu{background:none;box-shadow:inset 0 0 0 1.5px var(--ml-line)}
.d .hc.tdy{box-shadow:0 0 0 2px #fff,0 0 0 3.5px var(--ml-accent-line)}
.d .hc.pop{animation:mb-pop 460ms var(--ml-bounce)}
.d .hb-list{flex:1;min-height:0;padding:2px 16px 12px;overflow-y:auto}
.d .hbr{display:flex;align-items:center;gap:14px;width:100%;min-height:68px;padding:8px 10px 8px 8px;border:0;border-radius:20px;background:none;text-align:left;cursor:pointer;transition:background-color .3s,transform 90ms ease-out}
.d .hbr:active,.d .hbr.press{transform:scale(.98)}
.d .hbr.done{background:var(--ml-surface)}
.d .rg{position:relative;display:grid;flex:none;place-items:center;width:52px;height:52px;color:var(--ml-accent)}
.d .rg svg.ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.d .rg .tk{stroke:var(--ml-bar-2)}
.d .rg .pg{stroke:var(--ml-accent);transition:stroke-dashoffset 760ms var(--ml-ease)}
.d .rg .ico,.d .rg .ckv{grid-area:1/1;transition:opacity .25s ease,transform .45s var(--ml-bounce)}
.d .rg .ckv{opacity:0;transform:scale(.6);color:var(--ml-accent)}
.d .hbr.done .ico{opacity:0;transform:scale(.6)}
.d .hbr.done .ckv{opacity:1;transform:none}
.d .hbx{flex:1;min-width:0}
.d .hbx b{display:block;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .hbx small{display:block;font-size:13.5px;color:var(--ml-muted)}
.d .fl{display:inline-flex;align-items:center;gap:3px;font-size:15px;font-weight:650;color:var(--ml-accent-ink)}
.d .fl svg{fill:var(--ml-accent);stroke:var(--ml-accent)}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const sv = (p, s = 24) => `<svg class="ico" viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
      const ckv = '<svg class="ckv" viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg>';
      const flame = '<svg viewBox="0 0 24 24" width="15" height="15" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>';
      const habits = [
        { n: 'Drink 2 L of water', s: '1.5 of 2 L', p: 0.75, st: 21, done: false, ic: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>' },
        { n: 'Read 20 pages', s: '8 of 20 pages', p: 0.4, st: 9, done: false, ic: '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>' },
        { n: 'Morning run', s: '5.2 km at 6:40 AM', p: 1, st: 14, done: true, ic: '<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 6 4-4 4 4"/><path d="M16 18a4 4 0 0 0-8 0"/>' },
        { n: 'Meditate 10 min', s: 'Not started', p: 0, st: 5, done: false, ic: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>' },
        { n: 'Stretch before bed', s: '12 min last night', p: 1, st: 32, done: true, ic: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>' },
      ];
      const weeks = [[3, 4, 2, 4, 3, 1, 2], [4, 4, 3, 2, 4, 4, 3], [2, 3, 4, 4, 1, 0, 2], [4, 3, 4, 4, 3, 2, 4]];
      const list = $('.hb-list');
      const map = $('.hb-map');
      const msg = $('.hb-msg');
      const nEl = $('.hb-n');
      const psEl = $('.hb-ps');
      const C = 2 * Math.PI * 22;
      list.innerHTML = habits
        .map(
          (h, k) =>
            `<button type="button" class="hbr${h.done ? ' done draw' : ''}" data-k="${k}" aria-pressed="${h.done}"><span class="rg"><svg class="ring" viewBox="0 0 52 52" aria-hidden="true"><circle class="tk" cx="26" cy="26" r="22" fill="none" stroke-width="5"/><circle class="pg" cx="26" cy="26" r="22" fill="none" stroke-width="5" stroke-linecap="round" stroke-dasharray="${C.toFixed(2)}" stroke-dashoffset="${(C * (1 - h.p)).toFixed(2)}"/></svg>${sv(h.ic)}${ckv}</span><span class="hbx"><b>${h.n}</b><small>${h.s}</small></span><span class="fl">${flame}<span class="rl" data-v="${h.st}"><i><b>${h.st}</b></i></span></span></button>`,
        )
        .join('');
      const rows = [...list.children];
      map.innerHTML = ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((c) => `<small>${c}</small>`).join('') + weeks.flat().map((l) => `<i class="hc l${l}"></i>`).join('') + [4, 3, 0, -1, -1, -1, -1].map((l, i) => `<i class="hc${l < 0 ? ' fu' : ' l' + l}${i === 2 ? ' tdy' : ''}"></i>`).join('');
      const cells = [...map.querySelectorAll('.hc')];
      const today = cells[28 + 2];
      const roll = (el, v) => {
        const old = el.dataset.v;
        el.dataset.v = String(v);
        if (old === String(v)) return;
        const up = +v > +old;
        el.innerHTML = up ? `<i style="transform:none"><b>${old}</b><b>${v}</b></i>` : `<i style="transform:translateY(-50%)"><b>${v}</b><b>${old}</b></i>`;
        const i = el.firstChild;
        void i.offsetWidth;
        i.style.transform = up ? 'translateY(-50%)' : 'none';
      };
      const total = habits.length;
      let perfect = 6;
      nEl.dataset.v = '2';
      nEl.innerHTML = '<i><b>2</b></i>';
      psEl.dataset.v = '6';
      psEl.innerHTML = '<i><b>6</b></i>';
      const sync = () => {
        const dn = habits.filter((h) => h.done).length;
        roll(nEl, dn);
        const lvl = Math.round((dn / total) * 4);
        today.className = `hc l${lvl} tdy`;
        void today.offsetWidth;
        today.classList.add('pop');
        const all = dn === total;
        roll(psEl, all ? 7 : 6);
        msg.textContent = all ? 'Perfect day' : `Keep going, ${total - dn} left`;
        msg.classList.toggle('all', all);
      };
      const set = (k, on, quiet) => {
        const h = habits[k];
        if (h.done === on) return;
        h.done = on;
        const r = rows[k];
        r.classList.toggle('done', on);
        r.classList.toggle('draw', on);
        r.setAttribute('aria-pressed', String(on));
        r.querySelector('.pg').style.strokeDashoffset = (C * (1 - (on ? 1 : h.p0))).toFixed(2);
        r.querySelector('small').textContent = on ? 'Done today' : h.s;
        roll(r.querySelector('.rl'), h.base + (on ? 1 : 0));
        sync();
      };
      habits.forEach((h) => {
        h.p0 = h.done ? 0.7 : h.p;
        h.base = h.done ? h.st - 1 : h.st;
      });
      sync();
      list.addEventListener('click', (e) => {
        const b = e.target.closest('.hbr');
        if (b) set(+b.dataset.k, !habits[+b.dataset.k].done);
      });

      // Autoplay: check off three habits one by one, the day turns perfect, then reset; real input hands over for 4s.
      (async () => {
        await wait(1900);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          for (const k of [3, 1, 0]) {
            if (habits[k].done) continue;
            if (!(await tap(rows[k], 0.12, 0.5, 750))) break;
            await wait(1250);
          }
          if (!idle()) continue;
          cur.classList.add('off');
          await wait(2600);
          [0, 1, 3].forEach((k) => set(k, false));
          await wait(2200);
        }
      })();
    },
    prompt: `Build a habit tracker home screen for a mobile app: a summary card with a streak and a five-week heatmap, and a list of habits with progress rings that fill when checked (100dvh, max-width 430px centered on larger screens, tab bar at the bottom).

Layout: header with the date eyebrow, the title "Today" and a pill "2 of 5 done" in your accent tint. A summary card (24px radius, hairline) with "Perfect-day streak" and a 46px/700 day count on the left and a heatmap on the right: 7 columns of 17px rounded cells with a 4px gap, weekday initials above, five rows (the last is this week; future days are dashed outlines, today has a ring). Cell levels 0-4 step from the pale surface tint to your full accent. Below, a list of 68px habit rows: a 52px progress ring (SVG circle with pathLength-based dasharray, rotated -90deg) around an icon, the habit name at 17px/650, a muted progress line, and a flame with the habit's streak count.

Behavior: tapping a row toggles done. The ring's stroke-dashoffset transitions to full over 760ms (cubic-bezier(.32,.72,0,1)), the icon scales out while a check scales in and its stroke draws (stroke-dasharray 1, dashoffset 1 to 0, 520ms), the row gets a surface tint. The streak number and the "x of 5" count are odometer rolls: a clipped 1.25em-high box holding two stacked digits, the inner element translating from 0 to -50% over 560ms with an overshoot spring (reverse the order when counting down). Today's heatmap cell recolours to round(done / total * 4) and pops (scale .7, 1.08, 1). When all five are done the streak rolls to the next day and the caption turns green: "Perfect day".

Accessibility: rows are buttons with aria-pressed, the count pill is aria-live="polite", the heatmap has an aria-label summary, targets 44px or larger, prefers-reduced-motion removes the pop. Plain HTML, CSS and JS, no libraries; React-friendly structure (HabitsScreen, SummaryCard, Heatmap, HabitRow, ProgressRing, OdometerNumber).`,
  });

  // ---------------------------------------------------------------- 19. boarding pass
  ML.add({
    id: 'app-mobile-boarding',
    cat: 'app-mobile',
    title: 'Boarding pass with flight status',
    sub: 'Pass flips to a QR, gate change banner',
    html: frame(
      `
<div class="body bp">
  <header class="bp-h"><button type="button" class="ibtn" aria-label="Back">${I(P.chevL, 22)}</button><b>Boarding pass</b><button type="button" class="ibtn" aria-label="Add to wallet">${I(P.wallet, 21)}</button></header>
  <div class="bp-bw"><div class="bp-bi"><div class="bp-ban" role="status"><span class="bi">${I(P.alert, 22)}</span><div><b>Gate changed to B22</b><small>Was B14. About a 6 min walk from security.</small></div><button type="button" aria-label="Dismiss">${I(P.x, 17, 2.6)}</button></div></div></div>
  <div class="bp-sc no-scroll">
    <div class="bp-stage"><button type="button" class="bp-fl" aria-pressed="false" aria-label="Flip the pass to show the QR code">
      <span class="fc f">
        <span class="pt"><span class="al">${I(P.plane, 18)}Fernway Air</span><em>FA 218</em></span>
        <span class="rt"><span class="ap"><b>MNL</b><small>Manila</small></span><span class="pl"><i></i>${I(P.plane, 20)}<i></i></span><span class="ap r"><b>SIN</b><small>Singapore</small></span></span>
        <span class="tm"><span><small>Departs</small><b>11:05</b></span><span class="c"><small>Fri 16 Oct</small><b>3h 35m</b></span><span class="r"><small>Arrives</small><b>14:40</b></span></span>
        <span class="tear"><i></i></span>
        <span class="gr"><span><small>Passenger</small><b>Maya Reyes</b></span><span><small>Gate</small><b class="gt">B14</b></span><span><small>Seat</small><b>14A</b></span><span><small>Boards</small><b>10:25</b></span></span>
        <span class="gr g2"><span><small>Group</small><b>2</b></span><span><small>Class</small><b>Economy</b></span><span><small>Baggage</small><b>1 x 23 kg</b></span></span>
        <span class="hint">${I(P.refresh, 14, 2.4)}Tap to show your QR code</span>
      </span>
      <span class="fc b"><span class="qrw"></span><b>MR8K2L</b><small>FA 218 - Seat 14A - Group 2</small><span class="hint">${I(P.refresh, 14, 2.4)}Tap to flip back</span></span>
    </button></div>
    <section class="bp-tl"><h2>Flight status</h2><ol class="bp-steps"></ol></section>
  </div>
</div>`,
      [P.plane, 'Flip the pass', 'Tap to show a big QR code', 24],
      [P.alert, 'Gate change banner', 'Slides in, gate updates live', 66],
    ),
    css: `${BASE}
.d .bp{background:var(--ml-surface)}
.d .bp-h{display:flex;flex:none;align-items:center;justify-content:space-between;padding:0 14px 6px}
.d .bp-h b{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .bp-bw{display:grid;flex:none;grid-template-rows:0fr;padding:0 14px;transition:grid-template-rows 560ms var(--ml-ease)}
.d .bp-bw.on{grid-template-rows:1fr}
.d .bp-bi{min-height:0;overflow:hidden}
.d .bp-ban{display:flex;align-items:center;gap:12px;margin:2px 0 8px;padding:12px 8px 12px 12px;border-radius:20px;background:#FFF3DC;box-shadow:inset 0 0 0 1px #FFD99A,0 6px 16px rgba(35,15,10,.08);transform:translateY(-18px);opacity:0;transition:transform var(--ml-bounce-dur) var(--ml-bounce) 120ms,opacity .3s ease 120ms}
.d .bp-bw.on .bp-ban{transform:none;opacity:1}
.d .bp-ban .bi{display:grid;flex:none;place-items:center;width:40px;height:40px;border-radius:13px;background:#FFE3B3;color:#B25E00}
.d .bp-ban div{flex:1;min-width:0}
.d .bp-ban b{display:block;font-size:16px;font-weight:700;letter-spacing:-.02em;color:#7A4300}
.d .bp-ban small{display:block;font-size:13px;line-height:1.3;color:#9A5A0A}
.d .bp-ban button{display:grid;flex:none;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:none;color:#9A5A0A;cursor:pointer}
.d .bp-sc{flex:1;min-height:0;padding:6px 16px 20px;overflow-y:auto}
.d .bp-stage{perspective:1400px}
.d .bp-fl{position:relative;display:block;width:100%;height:340px;padding:0;border:0;background:none;text-align:left;color:inherit;font:inherit;cursor:pointer;transform-style:preserve-3d;transition:transform 820ms var(--ml-ease)}
.d .bp-fl.flip{transform:rotateY(180deg)}
.d .fc{position:absolute;inset:0;display:flex;flex-direction:column;border-radius:26px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 18px 36px rgba(35,15,10,.12),0 3px 8px rgba(35,15,10,.06);-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}
.d .fc.b{align-items:center;justify-content:center;gap:2px;transform:rotateY(180deg)}
.d .fc small{display:block;font-size:12px;color:var(--ml-muted)}
.d .pt{display:flex;align-items:center;justify-content:space-between;padding:14px 20px;background:var(--ml-grad);color:#fff}
.d .pt .al{display:inline-flex;align-items:center;gap:8px;font-size:16px;font-weight:700;letter-spacing:-.02em}
.d .pt em{font-size:14px;font-style:normal;font-weight:650;letter-spacing:.04em;opacity:.9}
.d .rt{display:flex;align-items:center;gap:8px;padding:16px 20px 4px}
.d .ap b{display:block;font-size:34px;line-height:1;font-weight:700;letter-spacing:-.04em}
.d .ap.r{text-align:right}
.d .pl{display:flex;flex:1;align-items:center;gap:6px;color:var(--ml-accent)}
.d .pl i{flex:1;height:0;border-top:2px dashed var(--ml-accent-line)}
.d .pl svg{transform:rotate(45deg)}
.d .tm{display:flex;justify-content:space-between;padding:6px 20px 14px}
.d .tm .c{text-align:center}
.d .tm .r{text-align:right}
.d .tm b{display:block;font-size:19px;font-weight:700;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .tear{position:relative;display:block;height:20px;margin:0 -1px}
.d .tear::before,.d .tear::after{content:"";position:absolute;top:0;width:20px;height:20px;border-radius:50%;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .tear::before{left:-10px}.d .tear::after{right:-10px}
.d .tear i{position:absolute;left:18px;right:18px;top:9px;border-top:2px dashed var(--ml-bar)}
.d .gr{display:flex;justify-content:space-between;gap:8px;padding:8px 20px 0}
.d .gr.g2{padding-top:12px}
.d .gr b{display:block;white-space:nowrap;font-size:17px;font-weight:700;letter-spacing:-.02em}
.d .gr .gt{display:inline-block;padding:0 7px;margin-left:-7px;border-radius:8px;transition:background-color .4s,color .4s}
.d .gt.chg{background:#FFE3B3;color:#9A5A0A;animation:mb-pop 520ms var(--ml-bounce)}
.d .hint{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:auto;padding:0 0 12px;font-size:12.5px;font-weight:600;color:var(--ml-muted)}
.d .fc.b .hint{margin-top:10px;padding-bottom:0}
.d .qrw{display:block;width:176px;height:176px;margin-bottom:10px}
.d .qrw svg{display:block;width:100%;height:100%}
.d .fc.b b{font:700 20px var(--ml-mono);letter-spacing:.14em}
.d .bp-tl{margin-top:16px;padding:16px 18px 6px;border-radius:24px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .bp-tl h2{margin-bottom:12px;font-size:18px;font-weight:700;letter-spacing:-.03em}
.d .bp-steps{list-style:none}
.d .bs{position:relative;display:flex;align-items:flex-start;gap:14px;padding:0 0 18px}
.d .bs:last-child{padding-bottom:10px}
.d .bs .dt{position:relative;z-index:1;display:grid;flex:none;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2px var(--ml-bar);color:#fff}
.d .bs .dt svg{opacity:0}
.d .bs::before{content:"";position:absolute;left:12px;top:26px;bottom:0;width:2px;background:var(--ml-bar)}
.d .bs:last-child::before{display:none}
.d .bs.done .dt{background:var(--ml-accent);box-shadow:none}
.d .bs.done .dt svg{opacity:1}
.d .bs.done::before{background:var(--ml-accent)}
.d .bs.act .dt{box-shadow:inset 0 0 0 2px var(--ml-accent),0 0 0 5px var(--ml-accent-soft)}
.d .bs.act .dt::after{content:"";width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .bs div{flex:1;padding-top:1px}
.d .bs b{display:block;font-size:16px;font-weight:650;letter-spacing:-.015em;color:var(--ml-muted)}
.d .bs small{display:block;font-size:13.5px;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .bs.done b,.d .bs.act b{color:var(--ml-ink)}
.d .bs.act small{color:var(--ml-accent-ink);font-weight:600}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .bp-fl{transition-duration:1ms}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const fl = $('.bp-fl');
      const ban = $('.bp-bw');
      const gt = $('.gt');
      const sc1 = $('.bp-sc');
      const qrw = $('.qrw');
      const n = 25;
      let seed = 7731;
      const rnd = () => (seed = (seed * 1664525 + 1013904223) >>> 0) / 4294967296;
      const fin = (x, y) => {
        for (const [fx, fy] of [[0, 0], [n - 7, 0], [0, n - 7]]) {
          const i = x - fx;
          const j = y - fy;
          if (i >= -1 && i <= 7 && j >= -1 && j <= 7) return i >= 0 && j >= 0 && i <= 6 && j <= 6 && (i === 0 || i === 6 || j === 0 || j === 6 || (i >= 2 && i <= 4 && j >= 2 && j <= 4)) ? 1 : 0;
        }
        return null;
      };
      let d = '';
      for (let y = 0; y < n; y++)
        for (let x = 0; x < n; x++) {
          const f = fin(x, y);
          if (f === 1 || (f === null && rnd() < 0.5)) d += `M${x} ${y}h1v1h-1z`;
        }
      qrw.innerHTML = `<svg viewBox="0 0 ${n} ${n}" shape-rendering="crispEdges" aria-hidden="true"><path d="${d}" fill="#1D1D1F"/></svg>`;
      const check = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      let gate = 'B14';
      let secs = 44 * 60 + 12;
      const steps = [
        ['Checked in', '08:12 - online', 'done'],
        ['Bag dropped', '08:40 - Counter 31', 'done'],
        ['Security cleared', '09:20 - Terminal 3', 'done'],
        ['Boarding', '', 'act'],
        ['Departs', '11:05 - on time', ''],
        ['Arrives', '14:40 - Singapore Changi', ''],
      ];
      const ol = $('.bp-steps');
      ol.innerHTML = steps.map((s) => `<li class="bs ${s[2]}"><span class="dt">${check}</span><div><b>${s[0]}</b><small>${s[1]}</small></div></li>`).join('');
      const boardSub = ol.children[3].querySelector('small');
      const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
      const paint = () => {
        boardSub.textContent = `Gate ${gate} - boards in ${mmss(secs)}`;
      };
      paint();
      const flip = (on) => {
        const v = on === undefined ? !fl.classList.contains('flip') : on;
        fl.classList.toggle('flip', v);
        fl.setAttribute('aria-pressed', String(v));
      };
      fl.addEventListener('click', () => flip());
      const showBan = (on) => ban.classList.toggle('on', on);
      ban.querySelector('button').addEventListener('click', () => showBan(false));
      const gateTo = (g) => {
        gate = g;
        gt.textContent = g;
        gt.classList.remove('chg');
        void gt.offsetWidth;
        if (g !== 'B14') gt.classList.add('chg');
        paint();
      };
      (async () => {
        while (root.isConnected) {
          await sleep(1000);
          if (root.dataset.paused) continue;
          secs = secs > 60 ? secs - 1 : 44 * 60 + 12;
          paint();
        }
      })();

      // Autoplay: the gate changes (banner drops in), flip the pass to the QR and back; real input hands over for 4s.
      (async () => {
        await wait(2300);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          flip(false);
          showBan(false);
          gateTo('B14');
          sc1.scrollTop = 0;
          await wait(500);
          gateTo('B22');
          showBan(true);
          await wait(2800);
          if (!idle()) continue;
          if (!(await tap(ban.querySelector('button'), 0.5, 0.5, 900))) continue;
          await wait(900);
          if (!(await tap(fl, 0.5, 0.45))) continue;
          await wait(2600);
          if (!(await tap(fl, 0.5, 0.45))) continue;
          cur.classList.add('off');
          await wait(2400);
        }
      })();
    },
    prompt: `Build a boarding pass screen for a mobile app: a pass card that flips in 3D to show a large QR code, a flight status timeline, and a gate-change banner (100dvh, max-width 430px centered on larger screens, soft blue page background).

Layout: header with a back button, "Boarding pass" and an add-to-wallet button. The pass is a 340px card (26px radius, hairline, soft shadow) with a gradient airline band ("Fernway Air", flight number), the route as big 34px/700 airport codes with city names and a dashed line with a plane between them, departure, date and duration, arrival in tabular-nums, a dashed tear line with two circular notches at the edges (circles in the page background colour), and a grid for passenger, gate, seat and boarding time. Below it a card "Flight status" with a vertical stepper: Checked in, Bag dropped, Security cleared (done, accent nodes with a check), Boarding (active: accent ring with a soft 5px halo and a live "boards in 44:12" countdown ticking every second), Departs, Arrives.

Flip: wrap the pass in perspective: 1400px; the inner button uses transform-style: preserve-3d and transitions transform to rotateY(180deg) over 820ms with cubic-bezier(.32,.72,0,1); front and back are absolutely positioned with backface-visibility: hidden and the back pre-rotated 180deg. The back shows a 176px QR code (draw it as an SVG path of squares with three finder patterns), the booking code in mono and "Tap to flip back". Toggle aria-pressed.

Gate change: an amber banner (warning tint, alert icon, "Gate changed to B22", the old gate and walking time, a 44px dismiss button) sits at the top and enters with translateY(-140%) to 0 using an overshoot spring (linear() curve, about 594ms). At the same moment the gate value in the pass swaps and gets an amber pill with a pop (scale .7, 1.08, 1) and the timeline line updates.

Accessibility: the banner is role="status", the flip control is a button with a descriptive label, targets 44px or larger, prefers-reduced-motion makes the flip instant. Plain HTML, CSS and JS, no libraries; React-friendly structure (BoardingScreen, FlipPass, PassFront, PassBack, GateChangeBanner, StatusTimeline, Countdown).`,
  });

  // ---------------------------------------------------------------- 20. smart home
  ML.add({
    id: 'app-mobile-smarthome',
    cat: 'app-mobile',
    title: 'Smart home controls',
    sub: 'Dial and slider drag, tiles toggle',
    html: frame(
      `
<div class="body sh">
  <header class="sh-h"><div><p class="eyebrow">Good morning, Priya</p><h1 class="ttl">Home</h1></div><span class="sh-w">${I(P.wifi, 16, 2.4)}Hub online</span></header>
  <div class="sh-rooms" role="tablist" aria-label="Rooms"></div>
  <div class="sh-sc no-scroll">
    <section class="sh-th" aria-label="Thermostat">
      <svg class="dial" viewBox="0 0 160 160" role="slider" tabindex="0" aria-label="Target temperature" aria-valuemin="16" aria-valuemax="30" aria-valuenow="22.5">
        <circle class="dtk" cx="80" cy="80" r="62" fill="none" stroke-width="14" stroke-linecap="round"/>
        <circle class="dpg" cx="80" cy="80" r="62" fill="none" stroke-width="14" stroke-linecap="round"/>
        <g class="dkn"><circle cx="142" cy="80" r="13" fill="#fff" stroke="#FFD0CA" stroke-width="1.5"/><circle cx="142" cy="80" r="5" fill="#FF4433"/></g>
        <text class="dnum" x="80" y="88" text-anchor="middle">22.5</text>
        <text class="dsub" x="80" y="108" text-anchor="middle">Heating</text>
      </svg>
      <div class="sh-tx"><small>Thermostat</small><b class="sh-nw">Now 21.0 C</b><div class="sh-st"><button type="button" class="ibtn dn" aria-label="Lower temperature">${I(P.minus, 20, 2.6)}</button><button type="button" class="ibtn up" aria-label="Raise temperature">${I(P.plus, 20, 2.6)}</button></div></div>
    </section>
    <section class="sh-lt" aria-label="Light">
      <div class="lt-t"><span class="lt-i">${I(P.bulb, 22)}</span><div><b class="lt-n">Ceiling light</b><small class="lt-s">On, 70%</small></div><button type="button" class="sw" role="switch" aria-checked="true" aria-label="Light"><i></i></button></div>
      <div class="sl" role="slider" tabindex="0" aria-label="Brightness" aria-valuemin="0" aria-valuemax="100" aria-valuenow="70"><i class="sl-f"></i><b class="sl-k"></b>${I(P.sun, 18, 2.2)}</div>
    </section>
    <div class="sh-g"></div>
  </div>
</div>
${tabs([[P.home, 'Home'], [P.bolt, 'Energy'], [P.cal, 'Scenes'], [P.user, 'You']], 0)}`,
      [P.thermo, 'Drag the dial', 'Temperature follows your finger', 18],
      [P.bulb, 'Brightness slider', 'Fill and handle move together', 68],
    ),
    css: `${BASE}
.d .sh-h{display:flex;align-items:flex-end;justify-content:space-between;padding:6px 20px 4px}
.d .sh-h .ttl{margin-top:2px}
.d .sh-w{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 12px;border-radius:99px;background:#E3F6EA;font-size:12.5px;font-weight:650;color:#12893C}
.d .sh-rooms{display:flex;gap:8px;padding:10px 20px 10px;overflow:hidden}
.d .rm{flex:none;height:38px;padding:0 16px;border:0;border-radius:99px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 15px var(--ml-font);color:var(--ml-ink-2);cursor:pointer;transition:background-color .25s,color .25s,transform 90ms ease-out}
.d .rm:active,.d .rm.press{transform:scale(.95)}
.d .rm.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .sh-sc{flex:1;min-height:0;display:flex;flex-direction:column;gap:12px;padding:4px 16px 12px;overflow-y:auto}
.d .sh-sc > *{flex:none}
.d .sh-sc.in > *{animation:mb-in 440ms var(--ml-ease) backwards}
.d .sh-sc.in > *:nth-child(2){animation-delay:60ms}.d .sh-sc.in > *:nth-child(3){animation-delay:120ms}
.d .sh-th{display:flex;align-items:center;gap:6px;padding:14px 16px 14px 10px;border-radius:26px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04)}
.d .dial{flex:none;width:150px;height:150px;touch-action:none;cursor:pointer;outline:none}
.d .dial:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px;border-radius:50%}
.d .dtk{stroke:var(--ml-bar-2);stroke-dasharray:292.2 390;transform:rotate(135deg);transform-origin:80px 80px}
.d .dpg{stroke:var(--ml-accent);stroke-dasharray:0 390;transform:rotate(135deg);transform-origin:80px 80px}
.d .dkn{cursor:grab}
.d .dnum{font:700 38px var(--ml-font);letter-spacing:-.04em;fill:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .dsub{font:600 12.5px var(--ml-font);fill:var(--ml-muted)}
.d .sh-tx{flex:1;min-width:0;padding-left:4px}
.d .sh-tx small{display:block;font-size:12.5px;font-weight:600;letter-spacing:.02em;color:var(--ml-muted)}
.d .sh-tx > b{display:block;margin:2px 0 14px;font-size:17px;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.d .sh-st{display:flex;gap:10px}
.d .sh-lt{padding:14px 16px 16px;border-radius:26px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04)}
.d .lt-t{display:flex;align-items:center;gap:12px;margin-bottom:14px}
.d .lt-i{display:grid;flex:none;place-items:center;width:44px;height:44px;border-radius:14px;background:var(--ml-accent-soft);color:var(--ml-accent);transition:background-color .3s,color .3s}
.d .lt-t div{flex:1;min-width:0}
.d .lt-t b{display:block;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .lt-t small{display:block;font-size:13.5px;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .sw{position:relative;flex:none;width:52px;height:32px;padding:0;border:0;border-radius:99px;background:var(--ml-bar);cursor:pointer;transition:background-color .3s ease}
.d .sw i{position:absolute;left:3px;top:3px;width:26px;height:26px;border-radius:50%;background:#fff;box-shadow:0 2px 5px rgba(35,15,10,.25);transition:transform 420ms var(--ml-bounce)}
.d .sw[aria-checked="true"]{background:var(--ml-accent)}
.d .sw[aria-checked="true"] i{transform:translateX(20px)}
.d .sw.press i{transform:translateX(var(--px,0)) scaleX(1.12)}
.d .sl{position:relative;display:flex;align-items:center;height:52px;padding-left:16px;border-radius:18px;background:var(--ml-bar-2);overflow:hidden;color:var(--ml-muted);touch-action:none;cursor:pointer;outline:none}
.d .sl:focus-visible{box-shadow:0 0 0 2px var(--ml-accent)}
.d .sl-f{position:absolute;inset:0;border-radius:inherit;background:#FFF0ED;transform:translateX(-30%);transition:transform 380ms var(--ml-ease)}
.d .sl.drag .sl-f{transition:none}
.d .sl-k{position:absolute;top:12px;left:0;width:5px;height:28px;margin-left:-11px;border-radius:3px;background:var(--ml-accent);transform:translateX(70px);transition:transform 380ms var(--ml-ease)}
.d .sl.drag .sl-k{transition:none}
.d .sl svg{position:relative;z-index:1;color:var(--ml-accent)}
.d .sh-g{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.d .tl{display:flex;flex-direction:column;align-items:flex-start;gap:12px;min-height:112px;padding:14px;border:0;border-radius:24px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);text-align:left;cursor:pointer;transition:background-color .3s,box-shadow .3s,transform 90ms ease-out}
.d .tl:active,.d .tl.press{transform:scale(.97)}
.d .tl .tr{display:flex;align-items:center;justify-content:space-between;width:100%}
.d .tl .ti{display:grid;place-items:center;width:42px;height:42px;border-radius:14px;background:var(--ml-surface);color:var(--ml-muted);transition:background-color .3s,color .3s}
.d .tl .sw{width:44px;height:28px;pointer-events:none}
.d .tl .sw i{width:22px;height:22px}
.d .tl .sw[aria-checked="true"] i{transform:translateX(16px)}
.d .tl b{display:block;font-size:16px;font-weight:650;letter-spacing:-.015em}
.d .tl small{display:block;font-size:13px;color:var(--ml-muted)}
.d .tl.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .tl.on .ti{background:#fff;color:var(--ml-accent)}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const sv = (p, s = 22) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
      const I2 = {
        tv: sv('<rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>'),
        vol: sv('<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>'),
        coffee: sv('<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>'),
        wind: sv('<path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"/><path d="M9.6 4.6A2 2 0 1 1 11 8H2"/><path d="M12.6 19.4A2 2 0 1 0 14 16H2"/>'),
        sun: sv('<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>'),
        bolt: sv('<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>'),
      };
      const rooms = [
        { n: 'Living room', t: 22.5, now: 21.0, light: ['Ceiling light', 70, true], tiles: [['TV', 'tv', 'Streaming', 'Off', false], ['Speaker', 'vol', 'Playing, 32%', 'Off', true]] },
        { n: 'Kitchen', t: 21.0, now: 20.5, light: ['Pendant lights', 100, true], tiles: [['Coffee maker', 'coffee', 'Brewing, 4 min', 'Off', false], ['Extractor fan', 'wind', 'Low speed', 'Off', true]] },
        { n: 'Bedroom', t: 19.5, now: 19.0, light: ['Bedside lamp', 35, true], tiles: [['Blinds', 'sun', 'Open 60%', 'Closed', true], ['Air purifier', 'wind', 'Auto, air good', 'Off', true]] },
        { n: 'Study', t: 21.5, now: 20.0, light: ['Desk lamp', 80, false], tiles: [['Monitor', 'tv', 'On', 'Off', true], ['Space heater', 'bolt', 'Eco mode', 'Off', false]] },
      ];
      const roomsEl = $('.sh-rooms');
      const scr = $('.sh-sc');
      const dial = $('.dial');
      const dpg = $('.dpg');
      const dkn = $('.dkn');
      const dnum = $('.dnum');
      const dsub = $('.dsub');
      const nw = $('.sh-nw');
      const sl = $('.sl');
      const slf = $('.sl-f');
      const slk = $('.sl-k');
      const lsw = $('.sh-lt .sw');
      const lts = $('.lt-s');
      const lti = $('.lt-i');
      const grid = $('.sh-g');
      roomsEl.innerHTML = rooms.map((r, k) => `<button type="button" class="rm${k === 0 ? ' on' : ''}" role="tab" aria-selected="${k === 0}" data-k="${k}">${r.n}</button>`).join('');
      const chips = [...roomsEl.children];
      let ri = 0;
      let temp = 22.5;
      let p = 0.7;
      let lightOn = true;
      const ARC = 2 * Math.PI * 62 * 0.75;
      const setTemp = (v) => {
        temp = Math.max(16, Math.min(30, Math.round(v * 2) / 2));
        const f = (temp - 16) / 14;
        dpg.style.strokeDasharray = `${(f * ARC).toFixed(1)} 390`;
        dkn.setAttribute('transform', `rotate(${(135 + 270 * f).toFixed(1)} 80 80)`);
        dnum.textContent = temp.toFixed(1);
        const nowT = rooms[ri].now;
        dsub.textContent = temp > nowT + 0.2 ? 'Heating' : temp < nowT - 0.2 ? 'Cooling' : 'Holding';
        dial.setAttribute('aria-valuenow', String(temp));
        rooms[ri].t = temp;
      };
      const setP = (v, quiet) => {
        p = Math.max(0, Math.min(1, v));
        const w = sl.offsetWidth;
        slf.style.transform = `translateX(${(-(1 - p) * 100).toFixed(1)}%)`;
        slk.style.transform = `translateX(${(p * w).toFixed(1)}px)`;
        const pc = Math.round(p * 100);
        sl.setAttribute('aria-valuenow', String(pc));
        if (lightOn) lts.textContent = `On, ${pc}%`;
        rooms[ri].light[1] = pc;
      };
      const setLight = (on) => {
        lightOn = on;
        lsw.setAttribute('aria-checked', String(on));
        lts.textContent = on ? `On, ${Math.round(p * 100)}%` : 'Off';
        lti.style.background = on ? '' : 'var(--ml-surface)';
        lti.style.color = on ? '' : 'var(--ml-muted)';
        slf.style.opacity = on ? '1' : '0.4';
        rooms[ri].light[2] = on;
      };
      const tiles = () =>
        grid.innerHTML = rooms[ri].tiles
          .map((t, k) => `<button type="button" class="tl${t[4] ? ' on' : ''}" data-k="${k}" aria-pressed="${t[4]}"><span class="tr"><span class="ti">${I2[t[1]]}</span><span class="sw" role="presentation" aria-checked="${t[4]}"><i></i></span></span><span><b>${t[0]}</b><small>${t[4] ? t[2] : t[3]}</small></span></button>`)
          .join('');
      const room = (k, anim) => {
        ri = k;
        const r = rooms[k];
        chips.forEach((c, i) => {
          c.classList.toggle('on', i === k);
          c.setAttribute('aria-selected', String(i === k));
        });
        $('.lt-n').textContent = r.light[0];
        nw.textContent = `Now ${r.now.toFixed(1)} C`;
        p = r.light[1] / 100;
        setTemp(r.t);
        lightOn = r.light[2];
        setLight(lightOn);
        setP(p);
        tiles();
        if (anim) {
          scr.classList.remove('in');
          void scr.offsetWidth;
          scr.classList.add('in');
        }
      };
      chips.forEach((c) => c.addEventListener('click', () => room(+c.dataset.k, true)));
      // dial: real pointer drag, angle from the centre (works at any canvas scale)
      let dd = false;
      const fromPt = (e) => {
        const r = dial.getBoundingClientRect();
        let a = (Math.atan2(e.clientY - (r.top + r.height / 2), e.clientX - (r.left + r.width / 2)) * 180) / Math.PI;
        let rel = (((a - 135) % 360) + 360) % 360;
        if (rel > 270) rel = rel > 315 ? 0 : 270;
        setTemp(16 + (14 * rel) / 270);
      };
      dial.addEventListener('pointerdown', (e) => {
        dd = true;
        dial.setPointerCapture(e.pointerId);
        fromPt(e);
      });
      dial.addEventListener('pointermove', (e) => dd && fromPt(e));
      dial.addEventListener('pointerup', () => (dd = false));
      dial.addEventListener('pointercancel', () => (dd = false));
      dial.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowRight') setTemp(temp + 0.5);
        else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') setTemp(temp - 0.5);
      });
      $('.up').addEventListener('click', () => setTemp(temp + 0.5));
      $('.dn').addEventListener('click', () => setTemp(temp - 0.5));
      // slider
      let sd = false;
      const sFrom = (e) => {
        const r = sl.getBoundingClientRect();
        setP((e.clientX - r.left) / r.width);
        if (!lightOn && p > 0.02) setLight(true);
      };
      sl.addEventListener('pointerdown', (e) => {
        sd = true;
        sl.classList.add('drag');
        sl.setPointerCapture(e.pointerId);
        sFrom(e);
      });
      sl.addEventListener('pointermove', (e) => sd && sFrom(e));
      const sEnd = () => {
        sd = false;
        sl.classList.remove('drag');
      };
      sl.addEventListener('pointerup', sEnd);
      sl.addEventListener('pointercancel', sEnd);
      sl.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp') setP(p + 0.05);
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') setP(p - 0.05);
      });
      lsw.addEventListener('click', () => setLight(!lightOn));
      grid.addEventListener('click', (e) => {
        const b = e.target.closest('.tl');
        if (!b) return;
        const t = rooms[ri].tiles[+b.dataset.k];
        t[4] = !t[4];
        b.classList.toggle('on', t[4]);
        b.setAttribute('aria-pressed', String(t[4]));
        b.querySelector('.sw').setAttribute('aria-checked', String(t[4]));
        b.querySelector('small').textContent = t[4] ? t[2] : t[3];
      });
      room(0, false);
      new ResizeObserver(() => setP(p)).observe(sl);

      // Autoplay: swap rooms, drag the dial, drag the slider, toggle a tile; real input hands over for 4s.
      const dragKnob = async (to) => {
        const k = dkn.querySelector('circle');
        if (!idle()) return false;
        put(pt(k, 0.5, 0.5));
        await wait(850);
        if (!idle()) return false;
        cur.classList.add('press');
        cur.style.transition = 'none';
        const t0 = temp;
        await anim(1200, (e) => {
          setTemp(t0 + (to - t0) * e);
          put(pt(k, 0.5, 0.5));
        });
        cur.style.transition = '';
        cur.classList.remove('press');
        return true;
      };
      const dragSlider = async (to) => {
        if (!idle()) return false;
        put(pt(slk, 0.5, 0.5));
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        cur.style.transition = 'none';
        sl.classList.add('drag');
        const p0 = p;
        await anim(1000, (e) => {
          setP(p0 + (to - p0) * e);
          put(pt(slk, 0.5, 0.5));
        });
        sl.classList.remove('drag');
        cur.style.transition = '';
        cur.classList.remove('press');
        return true;
      };
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await tap(chips[1], 0.5, 0.5))) continue;
          await wait(1500);
          if (!(await tap(chips[0], 0.5, 0.5))) continue;
          await wait(1100);
          if (!(await dragKnob(temp > 23 ? 21.5 : 24.5))) continue;
          await wait(800);
          if (!(await dragSlider(p > 0.5 ? 0.3 : 0.85))) continue;
          await wait(700);
          if (!(await tap(grid.children[1], 0.5, 0.5))) continue;
          await wait(1300);
          if (!(await tap(grid.children[0], 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(2600);
        }
      })();
    },
    prompt: `Build a smart home control screen for a mobile app: room chips, a draggable thermostat dial, a brightness slider and device tiles that toggle (100dvh, max-width 430px centered on larger screens, tab bar at the bottom).

Layout: header with a greeting eyebrow, the title "Home" and a green "Hub online" pill; 38px room chips (the active one tinted with your accent); a scrolling column of three blocks. Thermostat card (26px radius): a 150px SVG dial on the left, on the right the label, "Now 21.0 C" and two 44px round minus and plus buttons. Light card: a 44px icon tile, the light name with "On, 70%", a 52x32 switch, and a 52px tall brightness slider. Below, a 2-column grid of device tiles (112px tall, 24px radius): icon tile, a small switch, name and status; an on tile gets an accent tint and a white icon tile.

Dial: two circles of radius 62 with stroke-width 14 and round caps, rotated 135deg around the centre, with stroke-dasharray "<arc> 390" where the full track is 0.75 * 2 * pi * 62 (a 270 degree sweep); the value arc length is fraction * track. The knob is a group rotated by 135 + 270 * fraction degrees about the centre. Pointer events with setPointerCapture compute the angle with atan2 from the dial centre, subtract 135, wrap to 0-360, clamp the dead zone to the nearest end and map 16 to 30 in 0.5 steps (this works at any scale). Centre text shows the target and "Heating", "Cooling" or "Holding" against the current temperature. role="slider" with arrow keys.

Slider: a rounded track with a tinted fill (translateX from -100% to 0) and a 5px accent handle (translateX(progress * width)); pointer drag disables the transitions, otherwise 380ms ease-out. Dragging while the light is off turns it on. Switches use a 26px thumb with an overshoot spring (linear() curve, about 594ms). Changing room swaps the data and replays a 440ms rise-and-fade with a 60ms stagger.

Accessibility: tabs for rooms, role="switch" and aria-pressed on controls, targets 44px or larger, prefers-reduced-motion shortens the springs. Plain HTML, CSS and JS, no libraries; React-friendly structure (HomeScreen, RoomChips, ThermostatDial, LightCard, BrightnessSlider, DeviceTile, Switch).`,
  });

  // ---------------------------------------------------------------- 21. language lesson
  ML.add({
    id: 'app-mobile-lesson',
    cat: 'app-mobile',
    title: 'Language lesson quiz',
    sub: 'Answer, check, feedback sheet, next card',
    html: frame(
      `
<div class="body ls">
  <header class="ls-h"><button type="button" class="ibtn flat" aria-label="Quit lesson">${I(P.x, 24, 2.4)}</button><div class="ls-pg" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="8" aria-valuenow="2"><i></i></div><span class="ls-hr">${I(P.heart, 22, 2)}<b>5</b></span></header>
  <div class="ls-st"></div>
  <div class="ls-ft"><button type="button" class="btn ls-ck" disabled><span class="lbl">Check</span></button></div>
</div>
<div class="sheet ls-sh" role="alert" aria-live="assertive">
  <div class="ls-fb"><span class="ls-fi"></span><div><b class="ls-ft1"></b><p class="ls-ft2"></p></div></div>
  <button type="button" class="btn ls-go"><span class="lbl">Continue</span></button>
</div>`,
      [P.check, 'Feedback sheet', 'Green or red, then the next card', 22],
      [P.flame, 'Progress bar', 'Fills on every correct answer', 68],
    ),
    css: `${BASE}
.d .ls{background:var(--ml-bg)}
.d .ls-h{display:flex;flex:none;align-items:center;gap:6px;padding:0 16px 0 6px}
.d .flat{box-shadow:none;background:none;border-radius:50%;color:var(--ml-muted)}
.d .ls-pg{position:relative;flex:1;height:14px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .ls-pg i{position:absolute;inset:0;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.25);transform-origin:0 50%;transition:transform 700ms var(--ml-ease)}
.d .ls-pg i::after{content:"";position:absolute;left:8px;right:8px;top:3px;height:4px;border-radius:2px;background:rgba(255,255,255,.35)}
.d .ls-hr{display:inline-flex;align-items:center;gap:5px;margin-left:8px;font-size:17px;font-weight:700;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .ls-hr svg{fill:var(--ml-accent);stroke:var(--ml-accent)}
.d .ls-hr.bump{animation:mb-pop 460ms var(--ml-bounce)}
.d .ls-st{position:relative;flex:1;min-height:0;overflow:hidden}
.d .ls-q{position:absolute;inset:0;display:flex;flex-direction:column;padding:20px 20px 0;transition:transform 560ms var(--ml-ease),opacity .4s ease}
.d .ls-q.r{transform:translateX(105%);opacity:0}
.d .ls-q.l{transform:translateX(-105%);opacity:0}
.d .ls-q h1{font-size:25px;line-height:1.15;font-weight:700;letter-spacing:-.035em}
.d .ls-bub{position:relative;display:flex;align-items:center;gap:12px;margin:16px 0 20px;padding:14px 16px;border-radius:20px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .ls-bub .sp{display:grid;flex:none;place-items:center;width:44px;height:44px;border:0;border-radius:14px;background:var(--ml-accent-soft);color:var(--ml-accent);cursor:pointer;transition:transform 90ms ease-out}
.d .ls-bub .sp:active,.d .ls-bub .sp.press{transform:scale(.92)}
.d .ls-bub p{font-size:22px;line-height:1.25;font-weight:650;letter-spacing:-.025em}
.d .ls-ch{display:flex;flex-direction:column;gap:10px}
.d .cc{display:flex;align-items:center;gap:12px;width:100%;min-height:58px;padding:0 16px;border:0;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-line),0 2px 0 var(--ml-line);font:600 17px var(--ml-font);letter-spacing:-.015em;text-align:left;color:var(--ml-ink);cursor:pointer;transition:background-color .25s,box-shadow .25s,transform 90ms ease-out}
.d .cc:active,.d .cc.press{transform:translateY(1px)}
.d .cc .k{display:grid;flex:none;place-items:center;width:26px;height:26px;border-radius:8px;box-shadow:inset 0 0 0 1.5px var(--ml-line);font-size:13px;font-weight:700;color:var(--ml-muted);transition:background-color .25s,color .25s,box-shadow .25s}
.d .cc.sel{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 2px var(--ml-accent),0 2px 0 var(--ml-accent-line)}
.d .cc.sel .k{background:var(--ml-accent);color:#fff;box-shadow:none}
.d .cc.ok{background:#E3F6EA;box-shadow:inset 0 0 0 2px #1DB954,0 2px 0 #9ADBB1;color:#0E6B30}
.d .cc.ok .k{background:#1DB954;color:#fff;box-shadow:none}
.d .cc.bad{background:#FFE9E7;box-shadow:inset 0 0 0 2px #FF3B30,0 2px 0 #FFB4AE;color:#A8160B;animation:ls-shake 420ms ease}
.d .cc.bad .k{background:#FF3B30;color:#fff;box-shadow:none}
@keyframes ls-shake{0%,100%{transform:none}25%{transform:translateX(-6px)}60%{transform:translateX(5px)}}
.d .ls-ft{flex:none;padding:12px 20px calc(var(--hb) + 6px);border-top:1px solid var(--ml-line)}
.d .ls-sh{padding:18px 20px calc(var(--hb) + 6px);border-radius:28px 28px 0 0;background:#E3F6EA;box-shadow:0 -10px 30px rgba(35,15,10,.12)}
.d .ls-sh.bad{background:#FFE9E7}
.d .ls-fb{display:flex;align-items:center;gap:14px;margin-bottom:16px}
.d .ls-fi{display:grid;flex:none;place-items:center;width:52px;height:52px;border-radius:50%;background:#1DB954;color:#fff}
.d .ls-sh.bad .ls-fi{background:#FF3B30}
.d .ls-ft1{display:block;font-size:22px;font-weight:700;letter-spacing:-.03em;color:#0E6B30}
.d .ls-sh.bad .ls-ft1{color:#A8160B}
.d .ls-ft2{margin-top:2px;font-size:15px;line-height:1.3;font-weight:600;color:#12893C}
.d .ls-sh.bad .ls-ft2{color:#C0291D}
.d .ls-go{background:#1DB954;box-shadow:0 2px 0 #12893C}
.d .ls-sh.bad .ls-go{background:#FF3B30;box-shadow:0 2px 0 #C0291D}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const qs = [
        { t: 'Translate this sentence', p: 'Quiero un café, por favor.', c: ['I want a coffee, please', 'I want a table, please', 'I already have coffee', 'Where is the coffee?'], a: 0 },
        { t: 'Translate this sentence', p: '¿Dónde está la estación?', c: ['What time is it?', 'Where is the station?', 'How much is the ticket?', 'Is the train late?'], a: 1 },
        { t: 'Translate this sentence', p: 'Mañana viajo a Madrid.', c: ['Yesterday I traveled to Madrid', 'I live in Madrid now', 'Tomorrow I travel to Madrid', 'Madrid is far from here'], a: 2 },
      ];
      const spk = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>';
      const okI = '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const xI = '<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
      const stage = $('.ls-st');
      const bar = $('.ls-pg i');
      const pgEl = $('.ls-pg');
      const chk = $('.ls-ck');
      const sheet = $('.sheet');
      const go = $('.ls-go');
      const hr = $('.ls-hr');
      const hrB = $('.ls-hr b');
      let qi = 0;
      let step = 2;
      let hearts = 5;
      let pick = -1;
      let state = 'ask';
      let pane = null;
      const prog = () => {
        bar.style.transform = `scaleX(${(step / 8).toFixed(3)})`;
        pgEl.setAttribute('aria-valuenow', String(step));
      };
      const build = (i, from) => {
        const q = qs[i];
        const el = document.createElement('div');
        el.className = `ls-q${from ? ' ' + from : ''}`;
        el.innerHTML = `<h1>${q.t}</h1><div class="ls-bub"><button type="button" class="sp" aria-label="Play audio">${spk}</button><p lang="es">${q.p}</p></div><div class="ls-ch" role="radiogroup" aria-label="Answers">${q.c.map((c, k) => `<button type="button" class="cc" role="radio" aria-checked="false" data-k="${k}"><span class="k">${k + 1}</span>${c}</button>`).join('')}</div>`;
        stage.appendChild(el);
        return el;
      };
      const choose = (k) => {
        if (state !== 'ask') return;
        pick = k;
        [...pane.querySelectorAll('.cc')].forEach((b, i) => {
          b.classList.toggle('sel', i === k);
          b.setAttribute('aria-checked', String(i === k));
        });
        chk.disabled = false;
      };
      const wire = (el) => {
        el.querySelector('.ls-ch').addEventListener('click', (e) => {
          const b = e.target.closest('.cc');
          if (b) choose(+b.dataset.k);
        });
      };
      const next = (jump) => {
        const old = pane;
        qi = (qi + 1) % qs.length;
        if (qi === 0) {
          step = 2;
          hearts = 5;
          hrB.textContent = '5';
          prog();
        }
        pane = build(qi, 'r');
        wire(pane);
        void pane.offsetWidth;
        pane.classList.remove('r');
        old.classList.add('l');
        setTimeout(() => old.remove(), 620);
        sheet.classList.remove('open');
        pick = -1;
        state = 'ask';
        chk.disabled = true;
      };
      const check = () => {
        if (state !== 'ask' || pick < 0) return;
        state = 'fb';
        const q = qs[qi];
        const right = pick === q.a;
        const btns = [...pane.querySelectorAll('.cc')];
        btns[pick].classList.remove('sel');
        btns[pick].classList.add(right ? 'ok' : 'bad');
        if (!right) btns[q.a].classList.add('ok');
        sheet.classList.toggle('bad', !right);
        sheet.querySelector('.ls-fi').innerHTML = right ? okI : xI;
        sheet.querySelector('.ls-ft1').textContent = right ? 'Great job!' : 'Not quite';
        sheet.querySelector('.ls-ft2').textContent = right ? '+10 XP, 3 in a row' : `Correct answer: ${q.c[q.a]}`;
        go.querySelector('.lbl').textContent = right ? 'Continue' : 'Got it';
        if (right) {
          step = Math.min(8, step + 1);
          prog();
        } else {
          hearts = Math.max(0, hearts - 1);
          hrB.textContent = String(hearts);
          hr.classList.remove('bump');
          void hr.offsetWidth;
          hr.classList.add('bump');
        }
        sheet.classList.add('open');
      };
      chk.addEventListener('click', check);
      go.addEventListener('click', () => next());
      $('.flat').addEventListener('click', () => {
        qi = qs.length - 1;
        next();
      });
      pane = build(0, '');
      wire(pane);
      prog();

      // Autoplay: right answer, wrong answer, right answer; real input hands over for 4s.
      (async () => {
        await wait(1700);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (state !== 'ask') {
            await wait(500);
            continue;
          }
          const pickIdx = qi === 1 ? 0 : qs[qi].a;
          if (!(await tap(pane.querySelectorAll('.cc')[pickIdx], 0.5, 0.5))) continue;
          await wait(600);
          if (!(await tap(chk, 0.5, 0.5))) continue;
          await wait(2100);
          if (!(await tap(go, 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(1500);
        }
      })();
    },
    prompt: `Build a language-lesson quiz screen for a mobile app: a progress bar header, a multiple-choice question, a Check button, and a bottom feedback sheet that turns green for correct and red for incorrect (100dvh, max-width 430px centered on larger screens).

Layout: header with a 44px quit button, a 14px progress bar (pill track, accent gradient fill with a faint highlight stripe) and a heart counter. The stage holds one question: a 25px/700 instruction, a speech-bubble card with a 44px audio button and the foreign phrase at 22px/650, then four 58px answer buttons (18px radius, a 1.5px hairline ring and a 2px bottom edge, a small numbered key on the left). Footer: a 54px primary Check button, disabled until an answer is selected.

States: selected = accent ring and tint with the key filled; correct = green tint (#E3F6EA) with a #1DB954 ring; incorrect = red tint (#FFE9E7) with a #FF3B30 ring and a 420ms shake (translateX -6px, 5px, 0); the right answer is also revealed in green. Pressing Check reveals a bottom sheet (28px top radius, green or red background) with a 52px round icon, "Great job!" or "Not quite", a one-line explanation (the correct answer when wrong) and a full-width Continue or Got it button in the matching colour. The sheet slides up with transform: translateY(112%) to 0 and a critically damped spring, linear() curve, about 590ms. A correct answer advances the progress bar with transform: scaleX(step / total) over 700ms, a wrong answer lowers the heart count with a pop.

Next question: build the new card off-screen at translateX(105%), then remove that class so it slides in over 560ms while the old card moves to translateX(-105%) and fades; remove the old node afterwards.

Accessibility: answers are role="radiogroup" with aria-checked, the progress bar has role="progressbar" and aria-valuenow, the sheet is role="alert", targets 44px or larger, prefers-reduced-motion removes the shake. Plain HTML, CSS and JS, no libraries; React-friendly structure (LessonScreen, ProgressHeader, QuestionCard, AnswerChoice, CheckButton, FeedbackSheet).`,
  });

  // ---------------------------------------------------------------- 22. photo gallery
  ML.add({
    id: 'app-mobile-gallery',
    cat: 'app-mobile',
    title: 'Photo grid with shared zoom',
    sub: 'Photo grows from its cell, swipe, close',
    html: frame(
      `
<div class="body gl">
  <header class="gl-h"><div><p class="eyebrow">1,284 photos</p><h1 class="ttl">Library</h1></div><button type="button" class="ibtn" aria-label="Select photos">${I(P.circleCheck, 22)}</button></header>
  <div class="gl-seg" role="tablist" aria-label="Group by"><button type="button" role="tab" aria-selected="false">Years</button><button type="button" role="tab" aria-selected="false">Months</button><button type="button" role="tab" aria-selected="true" class="on">Days</button><button type="button" role="tab" aria-selected="false">All</button></div>
  <div class="gl-sc no-scroll"><p class="gl-d">Today</p><div class="gl-g g1"></div><p class="gl-d">Yesterday</p><div class="gl-g g2"></div></div>
</div>
${tabs([[P.image, 'Library'], [P.heart, 'For you'], [P.grid, 'Albums'], [P.search, 'Search']], 0)}
<div class="gv" aria-hidden="true">
  <div class="gv-bg"></div>
  <header class="gv-h"><button type="button" class="ibtn gv-x" aria-label="Close photo">${I(P.chevL, 22)}</button><div><b class="gv-t"></b><small class="gv-s"></small></div></header>
  <div class="gv-box" role="group" aria-roledescription="carousel" aria-label="Photo viewer"><div class="gv-strip"></div></div>
  <div class="gv-ft"><button type="button" aria-label="Share">${I(P.share, 24)}</button><button type="button" class="gv-lk" aria-label="Favorite" aria-pressed="false">${I(P.heart, 24)}</button><button type="button" aria-label="Delete">${I(P.trash, 24)}</button></div>
</div>`,
      [P.image, 'Shared-element zoom', 'The photo grows out of its cell', 20],
      [P.arrowUp, 'Swipe, then close', 'It shrinks into its new cell', 66],
    ),
    css: `${BASE}
.d .gl-h{display:flex;align-items:flex-end;justify-content:space-between;padding:6px 20px 6px}
.d .gl-h .ttl{margin-top:2px}
.d .gl-seg{display:flex;flex:none;gap:2px;margin:6px 20px 10px;padding:3px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .gl-seg button{flex:1;height:34px;border:0;border-radius:9px;background:none;font:600 14px var(--ml-font);color:var(--ml-muted);cursor:pointer;transition:background-color .25s,color .25s,box-shadow .25s}
.d .gl-seg button.on{background:var(--ml-bg);color:var(--ml-ink);box-shadow:0 1px 3px rgba(35,15,10,.12)}
.d .gl-sc{flex:1;min-height:0;padding:0 3px 16px;overflow-y:auto}
.d .gl-d{padding:10px 17px 8px;font-size:16px;font-weight:700;letter-spacing:-.02em}
.d .gl-g{display:grid;grid-template-columns:repeat(3,1fr);gap:3px}
.d .gc{position:relative;display:block;aspect-ratio:1;padding:0;border:0;border-radius:6px;overflow:hidden;background:var(--ml-bar-2);cursor:pointer;transition:transform 90ms ease-out}
.d .gc:active,.d .gc.press{transform:scale(.96)}
.d .gc svg{display:block;width:100%;height:100%}
.d .gc.hid{opacity:0}
.d .gv{--sbh:50px;position:absolute;inset:0;z-index:25;visibility:hidden;pointer-events:none}
.d .gv.on{visibility:visible;pointer-events:auto}
.d .gv-bg{position:absolute;inset:0;background:var(--ml-bg);opacity:0;transition:opacity 420ms ease}
.d .gv.go .gv-bg{opacity:1}
.d .gv-h{position:absolute;left:10px;right:10px;top:var(--sbh);display:flex;align-items:center;gap:6px;opacity:0;transition:opacity .35s ease}
.d .gv-h div{flex:1;text-align:center;padding-right:44px}
.d .gv-t{display:block;font-size:16px;font-weight:650;letter-spacing:-.015em}
.d .gv-s{display:block;font-size:12.5px;color:var(--ml-muted)}
.d .gv.go .gv-h,.d .gv.go .gv-ft{opacity:1}
.d .gv-box{position:absolute;left:14px;right:14px;top:calc(var(--sbh) + 84px);aspect-ratio:1;border-radius:26px;overflow:hidden;transform-origin:0 0;touch-action:none;cursor:grab;box-shadow:0 20px 44px rgba(16,40,90,.22)}
.d .gv-box.fly{transition:transform 640ms var(--ml-spring),border-radius 640ms var(--ml-spring)}
.d .gv-strip{display:flex;width:100%;height:100%;transition:transform 520ms var(--ml-spring)}
.d .gv-strip.drag{transition:none}
.d .gv-strip svg{flex:none;display:block;width:100%;height:100%}
.d .gv-ft{position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:space-around;padding:14px 30px calc(var(--hb) + 12px);opacity:0;transition:opacity .35s ease}
.d .gv-ft button{display:grid;place-items:center;width:52px;height:52px;border:0;border-radius:50%;background:var(--ml-surface);color:var(--ml-ink);cursor:pointer;transition:transform 90ms ease-out}
.d .gv-ft button:active{transform:scale(.92)}
.d .gv-lk svg{transition:transform .4s var(--ml-bounce)}
.d .gv-lk[aria-pressed="true"]{color:var(--ml-accent)}
.d .gv-lk[aria-pressed="true"] svg{fill:currentColor;transform:scale(1.15)}
@container scr (max-width: 500px){.d .gv{--sbh:12px}}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const names = [
        ['Harbor walk', '14 Oct, 8:12 AM'], ['Corvid Coffee', '14 Oct, 7:48 AM'], ['Roof deck', '14 Oct, 7:30 AM'], ['Fernway Bridge', '14 Oct, 7:05 AM'], ['Morning light', '14 Oct, 6:52 AM'], ['Market stalls', '14 Oct, 6:40 AM'], ['Bayside pier', '14 Oct, 6:31 AM'], ['Studio shelf', '14 Oct, 6:12 AM'], ['Night tram', '14 Oct, 5:58 AM'],
        ['Tide pools', '13 Oct, 6:20 PM'], ['City blocks', '13 Oct, 5:41 PM'], ['Bakery window', '13 Oct, 4:15 PM'], ['Park bench', '13 Oct, 2:08 PM'], ['Lantern row', '13 Oct, 12:30 PM'], ['Dune walk', '13 Oct, 9:02 AM'],
      ];
      let uid = 0;
      const scene = (k) => {
        const g = `ml-gl-${uid++}`;
        const bg = [['#FFEBE8', '#8FBEFF'], ['#E6F0FF', '#5FA8FF'], ['#D2E4FF', '#FF5745'], ['#EAF2FF', '#A8CCFF'], ['#DDEBFF', '#FF7A3D']][k % 5];
        const o = (k * 7) % 22;
        const sh = [
          `<circle cx="${58 + o}" cy="${30 + (k % 3) * 5}" r="${12 + (k % 3) * 2}" fill="#fff" opacity=".95"/><path d="M0 74 28 46 46 62 66 38 100 74V100H0z" fill="#FF4433" opacity=".35"/><path d="M0 86 30 64 58 82 80 66 100 80V100H0z" fill="#fff" opacity=".55"/>`,
          `<circle cx="${22 + o}" cy="28" r="9" fill="#fff"/><path d="M0 56c12-8 24-8 36 0s24 8 36 0 20-6 28-2V100H0z" fill="#fff" opacity=".6"/><path d="M0 72c12-8 24-8 36 0s24 8 36 0 20-6 28-2V100H0z" fill="#FF4433" opacity=".35"/>`,
          `<circle cx="38" cy="50" r="30" fill="#fff" opacity=".55"/><circle cx="64" cy="54" r="28" fill="#B3150F" opacity=".3"/><circle cx="${50 + o / 2}" cy="26" r="9" fill="#fff"/>`,
          `<g fill="#fff"><rect x="8" y="${50 - o / 2}" width="20" height="60" rx="3" opacity=".8"/><rect x="32" y="34" width="24" height="70" rx="3" opacity=".6"/><rect x="60" y="${58 - o / 3}" width="18" height="50" rx="3" opacity=".85"/><rect x="80" y="44" width="16" height="60" rx="3" opacity=".5"/></g><circle cx="76" cy="20" r="8" fill="#fff"/>`,
          `<path d="M20 100V52a30 30 0 0 1 60 0v48z" fill="#fff" opacity=".7"/><path d="M34 100V56a16 16 0 0 1 32 0v44z" fill="#FF4433" opacity=".35"/><circle cx="${74 - o / 2}" cy="20" r="8" fill="#fff"/>`,
          `<g fill="#fff" opacity=".6"><path d="M-10 100 40 -10h14L4 100z"/><path d="M30 110 80 0h14L44 110z" opacity=".7"/><path d="M70 110 120 0h14L84 110z"/></g><circle cx="${24 + o}" cy="${70 - o}" r="10" fill="#fff"/>`,
          `<circle cx="${30 + o}" cy="30" r="14" fill="#fff" opacity=".9"/><circle cx="${37 + o}" cy="26" r="13" fill="${bg[0]}"/><path d="M0 76h100v24H0z" fill="#FF4433" opacity=".3"/><path d="M0 84h100v16H0z" fill="#fff" opacity=".5"/>`,
          `<g fill="#fff">${Array.from({ length: 12 }, (_, i) => `<circle cx="${18 + (i % 4) * 22}" cy="${24 + Math.floor(i / 4) * 24}" r="${3 + ((i + k) % 3)}" opacity="${0.5 + ((i * 3 + k) % 5) / 10}"/>`).join('')}</g><path d="M0 88c20-8 40-8 60 0s30 4 40-2v14H0z" fill="#FF4433" opacity=".3"/>`,
        ][k % 8];
        return `<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="${g}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient></defs><rect width="100" height="100" fill="url(#${g})"/>${sh}</svg>`;
      };
      const g1 = $('.g1');
      const g2 = $('.g2');
      const strip = $('.gv-strip');
      const box = $('.gv-box');
      const gv = $('.gv');
      const sc1 = $('.gl-sc');
      const mk = (i) => `<button type="button" class="gc" data-i="${i}" aria-label="${names[i][0]}">${scene(i + 3)}</button>`;
      g1.innerHTML = names.slice(0, 9).map((_, i) => mk(i)).join('');
      g2.innerHTML = names.slice(9).map((_, i) => mk(i + 9)).join('');
      strip.innerHTML = names.map((_, i) => scene(i + 3)).join('');
      const cells = [...root.querySelectorAll('.gc')];
      let idx = 0;
      let isOpen = false;
      let busy = false;
      let dx = 0;
      const rel = (el) => {
        const o = gv.getBoundingClientRect();
        const r = el.getBoundingClientRect();
        const s = sc();
        return [(r.left - o.left) / s, (r.top - o.top) / s, r.width / s, r.height / s];
      };
      const label = () => {
        $('.gv-t').textContent = names[idx][0];
        $('.gv-s').textContent = names[idx][1];
      };
      const place = (smooth) => {
        strip.classList.toggle('drag', !smooth);
        strip.style.transform = `translateX(calc(${-idx * 100}% + ${dx}px))`;
      };
      const fromCell = (c) => {
        const bx = box.offsetLeft;
        const by = box.offsetTop;
        const bw = box.offsetWidth;
        const r = rel(c);
        const s = r[2] / bw;
        return { t: `translate(${(r[0] - bx).toFixed(1)}px,${(r[1] - by).toFixed(1)}px) scale(${s.toFixed(4)})`, rad: 6 / s };
      };
      const open = async (i) => {
        if (isOpen || busy) return;
        busy = true;
        idx = i;
        dx = 0;
        label();
        place(false);
        const f = fromCell(cells[i]);
        box.classList.remove('fly');
        box.style.transform = f.t;
        box.style.borderRadius = `${f.rad}px`;
        gv.classList.add('on');
        void box.offsetWidth;
        gv.classList.add('go');
        box.classList.add('fly');
        box.style.transform = 'none';
        box.style.borderRadius = '26px';
        setTimeout(() => cells[i].classList.add('hid'), 40);
        isOpen = true;
        gv.setAttribute('aria-hidden', 'false');
        await wait(700);
        busy = false;
      };
      const close = async () => {
        if (!isOpen || busy) return;
        busy = true;
        const c = cells[idx];
        const f = fromCell(c);
        gv.classList.remove('go');
        box.classList.add('fly');
        box.style.transform = f.t;
        box.style.borderRadius = `${f.rad}px`;
        await wait(560);
        c.classList.remove('hid');
        cells.forEach((x) => x.classList.remove('hid'));
        gv.classList.remove('on');
        gv.setAttribute('aria-hidden', 'true');
        isOpen = false;
        busy = false;
      };
      const go = (to) => {
        const n = Math.max(0, Math.min(names.length - 1, to));
        if (n !== idx) {
          cells[idx].classList.remove('hid');
          cells[n].classList.add('hid');
        }
        idx = n;
        dx = 0;
        label();
        place(true);
      };
      cells.forEach((c) => c.addEventListener('click', () => open(+c.dataset.i)));
      $('.gv-x').addEventListener('click', close);
      $('.gv-lk').addEventListener('click', (e) => {
        const b = e.currentTarget;
        b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'));
      });
      // real swipe on the photo
      let d = null;
      box.addEventListener('pointerdown', (e) => {
        if (!isOpen || busy) return;
        d = { x: e.clientX, lx: e.clientX, lt: performance.now(), v: 0 };
        box.setPointerCapture(e.pointerId);
      });
      box.addEventListener('pointermove', (e) => {
        if (!d) return;
        const now = performance.now();
        d.v = (e.clientX - d.lx) / sc() / Math.max(1, now - d.lt);
        d.lx = e.clientX;
        d.lt = now;
        dx = (e.clientX - d.x) / sc();
        place(false);
      });
      const up = () => {
        if (!d) return;
        const w = box.offsetWidth;
        const v = d.v;
        d = null;
        if (dx < -w * 0.2 || v < -0.5) go(idx + 1);
        else if (dx > w * 0.2 || v > 0.5) go(idx - 1);
        else go(idx);
      };
      box.addEventListener('pointerup', up);
      box.addEventListener('pointercancel', up);
      box.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') go(idx + 1);
        else if (e.key === 'ArrowLeft') go(idx - 1);
        else if (e.key === 'Escape') close();
      });
      box.tabIndex = 0;

      // Autoplay: open a photo, swipe to the next two, close back into the cell; real input hands over for 4s.
      let loop = 0;
      (async () => {
        await wait(1900);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (isOpen) {
            await close();
            await wait(600);
          }
          const first = [4, 1, 7][loop++ % 3];
          if (!(await tap(cells[first], 0.5, 0.5))) continue;
          await wait(1700);
          for (let n = 0; n < 2; n++) {
            if (!idle()) break;
            const p0 = pt(box, 0.75, 0.5);
            put(p0);
            await wait(700);
            if (!idle()) break;
            cur.classList.add('press');
            cur.style.transition = 'none';
            const w = box.offsetWidth;
            await anim(520, (e) => {
              dx = -w * 0.5 * e;
              place(false);
              put([p0[0] - w * 0.5 * e, p0[1]]);
            });
            cur.style.transition = '';
            cur.classList.remove('press');
            go(idx + 1);
            await wait(1300);
          }
          if (!idle()) continue;
          if (!(await tap($('.gv-x'), 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(2400);
        }
      })();
    },
    prompt: `Build a photo library screen for a mobile app: a 3-column grid, and a photo viewer that opens with a shared-element zoom from the tapped cell, supports swiping to the next photo and closes back into the cell (100dvh, max-width 430px centered on larger screens, tab bar at the bottom).

Grid: header with a count eyebrow and the title "Library", a 4-segment control (Years, Months, Days, All), then date headings ("Today", "Yesterday") above grids of square tiles with a 3px gap and 6px radius. Draw the photos as inline SVG (a blue gradient plus a sun, mountains, waves, a skyline or an arch). The viewer is an absolutely positioned overlay with a white backdrop that fades in, a header (back button, title, date), a square photo box with a 26px radius and a bottom toolbar (share, favorite, delete).

Shared-element zoom (FLIP): the photo box lives at its final rect with transform-origin: 0 0. On open, measure the cell and the box, set the box's transform to translate(cellX - boxX, cellY - boxY) scale(cellWidth / boxWidth) and its border-radius to 6px / scale with no transition, force a reflow, then enable transition: transform 640ms and border-radius 640ms with a critically damped spring (linear() curve) and set transform: none and 26px. Hide the original cell (opacity 0) while the viewer is open. Close reverses it into the current cell's rect, then remove the overlay once it lands.

Swipe: the box holds a flex strip of all photos; the strip uses transform: translateX(calc(-index * 100% + dragPx)). Pointer events with setPointerCapture drag it live (no transition), and on release go to the next or previous photo when the drag passes 20% of the width or the velocity passes 0.5 px/ms, otherwise spring back; update the title, hide the new origin cell and show the old one so the close lands in the right cell. Arrow keys and Escape work.

Accessibility: tiles are buttons with labels, the viewer is a labelled carousel group, the favorite is aria-pressed, targets 44px or larger, prefers-reduced-motion skips the zoom. Plain HTML, CSS and JS, no libraries; React-friendly structure (LibraryScreen, PhotoGrid, PhotoCell, PhotoViewer, PhotoStrip, ViewerToolbar).`,
  });

  // ---------------------------------------------------------------- 23. weather
  ML.add({
    id: 'app-mobile-weather',
    cat: 'app-mobile',
    title: 'Weather with drifting sky',
    sub: 'Clouds drift, hourly scroller, range bars',
    html: frame(
      `
<div class="body wx">
  <div class="wx-sky" aria-hidden="true">
    <div class="sun"><i></i><i></i><b></b></div>
    <svg class="cld c1" viewBox="0 0 120 56" width="150"><path d="M20 52a18 18 0 0 1-2-35.9A26 26 0 0 1 68 14a22 22 0 0 1 30 20 14 14 0 0 1 4 18z" fill="#fff"/></svg>
    <svg class="cld c2" viewBox="0 0 120 56" width="110"><path d="M20 52a18 18 0 0 1-2-35.9A26 26 0 0 1 68 14a22 22 0 0 1 30 20 14 14 0 0 1 4 18z" fill="#fff"/></svg>
    <svg class="cld c3" viewBox="0 0 120 56" width="190"><path d="M20 52a18 18 0 0 1-2-35.9A26 26 0 0 1 68 14a22 22 0 0 1 30 20 14 14 0 0 1 4 18z" fill="#fff"/></svg>
  </div>
  <div class="wx-mini" aria-hidden="true"><b>Cebu City</b><span>29&deg; - Partly cloudy</span></div>
  <div class="wx-sc no-scroll">
    <div class="wx-hero"><p class="wx-c">${I(P.pin, 16, 2.4)}Cebu City</p><b class="wx-t">29<sup>&deg;</sup></b><p class="wx-d">Partly cloudy</p><p class="wx-hl">H:32&deg;  L:25&deg;</p></div>
    <section class="wx-card" aria-label="Hourly forecast"><h2>${I(P.clock, 14, 2.4)}Hourly forecast</h2><div class="wx-hr no-scroll"></div></section>
    <section class="wx-card" aria-label="10-day forecast"><h2>${I(P.cal, 14, 2.4)}10-day forecast</h2><ul class="wx-days"></ul></section>
  </div>
</div>`,
      [P.sun, 'A sky that keeps moving', 'Clouds drift, the sun breathes', 20],
      [P.clock, 'Hourly and 10-day', 'Scrollers and range bars', 68],
    ),
    css: `${BASE}
.d .wx{background:#EAF3FF}
.d .wx-sky{position:absolute;top:-50px;left:0;right:0;height:520px;overflow:hidden;background:linear-gradient(180deg,#4F9BFF 0%,#8DBEFF 46%,#D8E9FF 100%)}
.d .sun{position:absolute;right:30px;top:78px;width:58px;height:58px}
.d .sun b{position:absolute;inset:0;border-radius:50%;background:#fff}
.d .sun i{position:absolute;inset:-14px;border-radius:50%;background:rgba(255,255,255,.2);animation:wx-breathe 6s ease-in-out infinite}
.d .sun i + i{inset:-30px;background:rgba(255,255,255,.1);animation-delay:-3s}
@keyframes wx-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
.d .cld{position:absolute;left:0;opacity:.5;animation:wx-drift linear infinite}
.d .c1{top:150px;animation-duration:46s;animation-delay:-12s}
.d .c2{top:230px;animation-duration:34s;animation-delay:-26s;opacity:.4}
.d .c3{top:76px;animation-duration:62s;animation-delay:-40s;opacity:.3}
@keyframes wx-drift{from{transform:translateX(-220px)}to{transform:translateX(560px)}}
.d .wx-mini{position:absolute;top:-50px;left:0;right:0;z-index:5;display:flex;flex-direction:column;align-items:center;padding:52px 0 10px;background:linear-gradient(180deg,#5AA4FF 78%,rgba(90,164,255,0));color:#fff;opacity:0;transform:translateY(-8px);transition:opacity .3s ease,transform .45s var(--ml-spring);pointer-events:none}
.d .wx-mini.on{opacity:1;transform:none}
.d .wx-mini b{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .wx-mini span{font-size:14px;font-weight:600;opacity:.92}
.d .wx-sc{position:relative;z-index:2;flex:1;min-height:0;padding:0 14px 20px;overflow-y:auto}
.d .wx-hero{display:flex;flex-direction:column;align-items:center;padding:8px 0 22px;color:#fff;text-shadow:0 1px 14px rgba(20,80,200,.28);will-change:transform,opacity}
.d .wx-c{display:inline-flex;align-items:center;gap:5px;font-size:21px;font-weight:650;letter-spacing:-.025em}
.d .wx-t{position:relative;margin-top:2px;font-size:104px;line-height:1;font-weight:300;letter-spacing:-.06em;font-variant-numeric:tabular-nums}
.d .wx-t sup{position:absolute;top:8px;font-size:60px;font-weight:300}
.d .wx-d{margin-top:-2px;font-size:21px;font-weight:600;letter-spacing:-.02em}
.d .wx-hl{margin-top:4px;font-size:17px;font-weight:600}
.d .wx-card{margin-bottom:12px;padding:12px 14px 14px;border-radius:24px;background:rgba(255,255,255,.88);box-shadow:inset 0 0 0 1px rgba(255,255,255,.7),0 6px 20px rgba(16,40,90,.1)}
.d .wx-card h2{display:flex;align-items:center;gap:6px;padding:2px 2px 10px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted);border-bottom:1px solid var(--ml-line)}
.d .wx-hr{display:flex;gap:4px;padding-top:10px;overflow-x:auto}
.d .hh{display:flex;flex:none;flex-direction:column;align-items:center;gap:9px;width:58px;font-size:15px;font-weight:600;font-variant-numeric:tabular-nums}
.d .hh span{font-size:13px;color:var(--ml-muted)}
.d .hh.now span{color:var(--ml-ink);font-weight:700}
.d .hh svg{color:var(--ml-accent)}
.d .hh small{margin-top:-6px;font-size:11px;font-weight:700;color:var(--ml-accent-ink)}
.d .wx-days{list-style:none}
.d .dy{display:flex;align-items:center;gap:8px;height:50px;border-bottom:1px solid var(--ml-line);font-size:16px;font-weight:600;font-variant-numeric:tabular-nums}
.d .dy:last-child{border-bottom:0}
.d .dy .dn{width:56px;font-weight:650;letter-spacing:-.01em}
.d .dy .di{display:flex;flex-direction:column;align-items:center;width:34px;color:var(--ml-accent)}
.d .dy .di small{margin-top:-2px;font-size:10.5px;font-weight:700;color:var(--ml-accent-ink)}
.d .dy .lo{width:30px;text-align:right;color:var(--ml-muted)}
.d .dy .rb{position:relative;flex:1;height:6px;border-radius:99px;background:var(--ml-bar-2)}
.d .dy .rb i{position:absolute;top:0;bottom:0;border-radius:inherit;background:var(--ml-grad);transform-origin:0 50%;transform:scaleX(var(--s,1));transition:transform 700ms var(--ml-ease)}
.d .dy .rb u{position:absolute;top:-2px;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--ml-accent)}
.d .dy .hi{width:30px;text-align:right}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .cld,.d .sun i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const sv = (p, s = 26) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
      const ic = {
        sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
        cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
        rain: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>',
        moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
      };
      const hours = [['Now', 'cloud', 29], ['10 AM', 'cloud', 30], ['11 AM', 'sun', 31], ['12 PM', 'sun', 32], ['1 PM', 'sun', 32], ['2 PM', 'cloud', 31], ['3 PM', 'rain', 30, '60%'], ['4 PM', 'rain', 29, '70%'], ['5 PM', 'cloud', 28], ['5:41', 'sun', 'Sunset'], ['7 PM', 'moon', 27], ['9 PM', 'moon', 26]];
      const days = [['Today', 'cloud', 25, 32], ['Thu', 'sun', 25, 32], ['Fri', 'sun', 26, 33], ['Sat', 'rain', 25, 31, '60%'], ['Sun', 'rain', 25, 30, '70%'], ['Mon', 'cloud', 25, 31], ['Tue', 'sun', 26, 32], ['Wed', 'sun', 26, 33], ['Thu', 'cloud', 25, 32], ['Fri', 'rain', 25, 31, '50%']];
      const hr = $('.wx-hr');
      const dl = $('.wx-days');
      const scr = $('.wx-sc');
      const hero = $('.wx-hero');
      const mini = $('.wx-mini');
      hr.innerHTML = hours
        .map((h) => `<div class="hh${h[0] === 'Now' ? ' now' : ''}"><span>${h[0]}</span>${sv(ic[h[1]])}<small>${h[3] || '&nbsp;'}</small><b>${typeof h[2] === 'number' ? h[2] + '&deg;' : h[2]}</b></div>`)
        .join('');
      // the day with the sunset label shows text instead of a temperature
      const min = 24;
      const span = 10;
      dl.innerHTML = days
        .map((d, i) => `<li class="dy"><span class="dn">${d[0]}</span><span class="di">${sv(ic[d[1]], 24)}${d[4] ? `<small>${d[4]}</small>` : ''}</span><span class="lo">${d[2]}&deg;</span><span class="rb"><i style="left:${(((d[2] - min) / span) * 100).toFixed(1)}%;width:${(((d[3] - d[2]) / span) * 100).toFixed(1)}%"></i>${i === 0 ? `<u style="left:${(((29 - min) / span) * 100).toFixed(1)}%"></u>` : ''}</span><span class="hi">${d[3]}&deg;</span></li>`)
        .join('');
      scr.addEventListener('scroll', () => {
        const y = scr.scrollTop;
        const k = Math.min(1, y / 150);
        hero.style.opacity = String(1 - k);
        hero.style.transform = `translateY(${(-y * 0.35).toFixed(1)}px) scale(${(1 - k * 0.08).toFixed(3)})`;
        mini.classList.toggle('on', y > 150);
      });
      const glide = async (el, prop, to, ms, fx, fy) => {
        if (!idle()) return false;
        put(pt(el, fx, fy));
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        cur.style.transition = 'none';
        const from = el[prop];
        const p0 = pt(el, fx, fy);
        const dir = prop === 'scrollLeft' ? [-1, 0] : [0, -1];
        const dist = Math.min(110, Math.abs(to - from) * 0.4);
        await anim(ms, (e) => {
          el[prop] = from + (to - from) * e;
          put([p0[0] + dir[0] * dist * e * Math.sign(to - from), p0[1] + dir[1] * dist * e * Math.sign(to - from)]);
        });
        cur.style.transition = '';
        cur.classList.remove('press');
        return true;
      };

      // Autoplay: drag the hourly strip, then scroll the page up to the 10-day card and back; real input hands over for 4s.
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await glide(hr, 'scrollLeft', 260, 1100, 0.7, 0.5))) continue;
          await wait(1100);
          if (!(await glide(hr, 'scrollLeft', 0, 900, 0.3, 0.5))) continue;
          await wait(900);
          if (!(await glide(scr, 'scrollTop', 330, 1300, 0.5, 0.7))) continue;
          await wait(2200);
          if (!(await glide(scr, 'scrollTop', 0, 1100, 0.5, 0.3))) continue;
          cur.classList.add('off');
          await wait(1800);
        }
      })();
    },
    prompt: `Build a weather screen for a mobile app: an animated sky, the current conditions, an hourly strip and a 10-day forecast with temperature range bars (100dvh, max-width 430px centered on larger screens).

Sky: a full-bleed linear-gradient backdrop (blue at the top fading to pale) that sits under the status bar, with a white sun disc whose two translucent rings scale 1 to 1.08 on a 6s ease-in-out loop (the second ring offset by half a cycle), and three inline-SVG clouds (white, 55-88% opacity, different sizes) that drift left to right with transform: translateX over 34, 46 and 62 seconds, linear and infinite, with negative animation delays so the sky is already populated. Only transform and opacity animate.

Content: a scrolling column. Hero: city with a pin, a 104px/300 temperature with a superscript degree sign, the condition at 21px/600 and High/Low. Two white cards (24px radius, 88% white, soft shadow) with uppercase 12px micro-headings and a hairline: Hourly forecast (a horizontal overflow-x scroller of 58px columns: time, icon, optional rain chance in small accent text, temperature; a sunset entry shows its label instead of a temperature) and 10-day forecast (50px rows: day, icon, low, a 6px range bar, high). Each range bar is a track with a fill positioned by left and width as percentages of the 24 to 34 range, the accent gradient, and for today a white dot with an accent ring at the current temperature.

Scroll-linked header: on scroll, fade the hero (opacity 1 to 0 over 150px), translate it up at 0.35 times the scroll and scale it down to 0.92; once scrollTop passes 150px fade in a compact city, temperature and condition title at the top.

Accessibility: cards are labelled sections, icons are decorative with the condition also written as text, prefers-reduced-motion stops the drift and the sun rings. Plain HTML, CSS and JS, no libraries; React-friendly structure (WeatherScreen, Sky, Hero, HourlyCard, HourItem, TenDayCard, RangeBar, CompactHeader).`,
  });

  // ---------------------------------------------------------------- 24. tasks
  ML.add({
    id: 'app-mobile-tasks',
    cat: 'app-mobile',
    title: 'Tasks with quick add',
    sub: 'Keyboard rises, checks draw, rows glide',
    html: frame(
      `
<div class="body tk">
  <header class="tk-h"><div><p class="eyebrow">Wednesday, 14 October</p><h1 class="ttl">Tasks</h1></div><div class="tk-ring" role="img" aria-label="2 of 7 done"><svg viewBox="0 0 56 56" aria-hidden="true"><circle cx="28" cy="28" r="23" fill="none" stroke="#EFE7E0" stroke-width="6"/><circle class="rg" pathLength="1" cx="28" cy="28" r="23" fill="none" stroke="#FF4433" stroke-width="6" stroke-linecap="round" stroke-dasharray="1" stroke-dashoffset=".71"/></svg><b><span class="rl tk-dn"><i><b>2</b></i></span>/<span class="tk-tt">7</span></b></div></header>
  <div class="tk-sc no-scroll">
    <p class="tk-sec">To do <span class="tk-c1">5</span></p>
    <ul class="tk-todo"></ul>
    <p class="tk-sec">Done <span class="tk-c2">2</span></p>
    <ul class="tk-done"></ul>
  </div>
  <div class="tk-add"><form class="tk-f"><span class="tk-pl">${I(P.plus, 20, 2.4)}</span><input class="tk-in" type="text" placeholder="Add a task" aria-label="New task" maxlength="40" autocomplete="off" enterkeyhint="done"><button type="submit" class="tk-go" aria-label="Add task">${I(P.arrowUp, 20, 2.8)}</button></form></div>
  <div class="tk-kb" aria-hidden="true"></div>
</div>`,
      [P.check, 'Drawn checks', 'Rows glide into Done', 22],
      [P.plus, 'Quick add', 'Keyboard rises, task drops in', 68],
    ),
    css: `${BASE}
.d .tk{background:var(--ml-surface)}
.d .tk-h{display:flex;align-items:center;justify-content:space-between;padding:6px 20px 8px}
.d .tk-h .ttl{margin-top:2px}
.d .tk-ring{position:relative;display:grid;place-items:center;width:58px;height:58px}
.d .tk-ring svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.d .tk-ring .rg{transition:stroke-dashoffset 760ms var(--ml-ease)}
.d .tk-ring > b{position:relative;display:flex;align-items:baseline;font-size:15px;font-weight:700;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .tk-ring > b .tk-tt{color:var(--ml-muted);font-weight:600}
.d .rl{display:inline-block;height:1.25em;overflow:hidden;vertical-align:bottom}
.d .rl i{display:block;font-style:normal;transition:transform 520ms var(--ml-bounce)}
.d .rl b{display:block;height:1.25em;line-height:1.25em;font-weight:inherit}
.d .tk-sc{flex:1;min-height:0;padding:0 16px 96px;overflow-y:auto}
.d .tk-sc.kbo{padding-bottom:360px}
.d .tk-sec{display:flex;align-items:center;gap:8px;padding:14px 6px 8px;font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .tk-sec span{display:grid;place-items:center;min-width:22px;height:20px;padding:0 6px;border-radius:99px;background:var(--ml-bar-2);font-size:11.5px;letter-spacing:0;color:var(--ml-ink-2);font-variant-numeric:tabular-nums}
.d .tk-todo,.d .tk-done{display:flex;flex-direction:column;gap:8px;list-style:none}
.d .ti{display:grid;grid-template-rows:1fr;transition:grid-template-rows 560ms var(--ml-ease)}
.d .ti.ins{grid-template-rows:0fr}
.d .ti > .in{min-height:0;overflow:hidden}
.d .ti.ins .row{opacity:0;transform:translateY(-14px) scale(.97)}
.d .row{display:flex;align-items:center;gap:12px;min-height:60px;padding:8px 14px 8px 8px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);transition:opacity .4s ease,transform .55s var(--ml-bounce),background-color .3s}
.d .row.fresh{background:var(--ml-accent-soft)}
.d .ck{position:relative;display:grid;flex:none;place-items:center;width:44px;height:44px;border:0;border-radius:50%;background:none;cursor:pointer;transition:transform 90ms ease-out}
.d .ck:active,.d .ck.press{transform:scale(.9)}
.d .ck::before{content:"";position:absolute;width:26px;height:26px;border-radius:50%;box-shadow:inset 0 0 0 2px var(--ml-bar);background:var(--ml-bg);transition:background-color .3s,box-shadow .3s,transform .45s var(--ml-bounce)}
.d .ck .ckv{position:relative;color:#fff}
.d .ck .ckv path{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset 380ms var(--ml-ease) 80ms}
.d .done .ck::before{background:var(--ml-accent);box-shadow:none}
.d .done .ck .ckv path{stroke-dashoffset:0}
.d .tx{flex:1;min-width:0}
.d .tx b{display:block;overflow:hidden;font-size:16.5px;font-weight:650;letter-spacing:-.015em;white-space:nowrap;text-overflow:ellipsis;transition:color .3s}
.d .tx small{display:block;font-size:13px;color:var(--ml-muted)}
.d .tx small.due{color:var(--ml-accent-ink);font-weight:600}
.d .done .tx b{color:var(--ml-muted);text-decoration:line-through;text-decoration-color:var(--ml-bar)}
.d .tk-add{position:absolute;left:0;right:0;bottom:0;z-index:6;padding:10px 14px calc(var(--hb) + 6px);background:linear-gradient(180deg,rgba(244,247,252,0),var(--ml-surface) 36%);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tk-add.up{transform:translateY(-238px);background:none}
.d .tk-f{display:flex;align-items:center;gap:8px;height:54px;padding:0 6px 0 14px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);transition:box-shadow .25s}
.d .tk-f:focus-within{box-shadow:inset 0 0 0 2px var(--ml-accent),var(--ml-shadow)}
.d .tk-pl{display:grid;place-items:center;color:var(--ml-accent)}
.d .tk-in{flex:1;min-width:0;height:100%;border:0;background:none;font:600 17px var(--ml-font);color:var(--ml-ink);outline:none}
.d .tk-in::placeholder{color:var(--ml-muted)}
.d .tk-go{display:grid;place-items:center;width:42px;height:42px;border:0;border-radius:14px;background:var(--ml-grad);color:#fff;cursor:pointer;opacity:.35;transition:opacity .25s,transform 90ms ease-out}
.d .tk-go.rdy{opacity:1}
.d .tk-go:active,.d .tk-go.press{transform:scale(.92)}
.d .tk-kb{position:absolute;left:0;right:0;bottom:0;z-index:5;display:flex;flex-direction:column;gap:9px;height:262px;padding:10px 4px calc(var(--hb) + 6px);background:#D5DCE8;transform:translateY(102%);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tk-kb.up{transform:none}
.d .kr{display:flex;justify-content:center;gap:5px}
.d .kk{display:grid;flex:1;max-width:34px;place-items:center;height:42px;padding:0;border:0;border-radius:7px;background:#fff;box-shadow:0 1px 0 rgba(35,15,10,.3);font:500 20px var(--ml-font);color:var(--ml-ink);cursor:pointer;transition:background-color .1s,transform 90ms ease-out}
.d .kk.w{flex:1.4;max-width:46px;background:#B8C2D3;color:var(--ml-ink)}
.d .kk.sp{flex:5;max-width:none;font-size:15px}
.d .kk.rt{flex:2.4;max-width:none;font-size:15px;font-weight:650;background:var(--ml-accent);color:#fff}
.d .kk:active,.d .kk.press{background:#C8D2E2;transform:scale(.96)}
.d .kk.rt:active{background:var(--ml-accent-ink)}
${CURSOR_CSS}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const sc = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pt = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const put = (p) => {
        if (!p) return;
        cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        cur.classList.remove('off');
      };
      const tap = async (el, fx, fy, ms = 850) => {
        if (!idle() || !el) return false;
        put(pt(el, fx, fy));
        await wait(ms);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // frame-driven tween (pauses with the card): fn(eased 0..1, linear 0..1)
      const anim = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = 0;
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) {
              last = 0;
              return requestAnimationFrame(f);
            }
            if (!last) last = t;
            acc += Math.min(60, t - last);
            last = t;
            const k = Math.min(1, acc / ms);
            fn(1 - Math.pow(1 - k, 3), k);
            if (k < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      cur.style.transform = 'translate(760px,430px)';
      const ckv = '<svg class="ckv" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg>';
      const todo = $('.tk-todo');
      const done = $('.tk-done');
      const input = $('.tk-in');
      const form = $('.tk-f');
      const go = $('.tk-go');
      const kb = $('.tk-kb');
      const add = $('.tk-add');
      const scr = $('.tk-sc');
      const rg = $('.rg');
      const dn = $('.tk-dn');
      const tt = $('.tk-tt');
      const items = [
        ['Send invoice to Kestrel & Co', 'Due today', false],
        ['Review Solace Studio mockups', 'Due Fri', false],
        ['Renew passport', 'Due Mon', false],
        ['Pick up groceries', 'Due today', false],
        ['Call Luis about the lease', 'Due Thu', false],
        ['Pay electricity bill', 'Paid Oct 12', true],
        ['Reply to Noor', 'Done yesterday', true],
      ];
      const li = (t, s, d, cls = '') =>
        `<li class="ti ${cls}${d ? ' done' : ''}" data-due="${d ? 'Due today' : s}"><div class="in"><div class="row"><button type="button" class="ck" aria-label="${d ? 'Mark as not done' : 'Mark as done'}: ${t}" aria-pressed="${d}">${ckv}</button><div class="tx"><b>${t}</b><small${d ? '' : ' class="due"'}>${s}</small></div></div></div></li>`;
      todo.innerHTML = items.filter((i) => !i[2]).map((i) => li(i[0], i[1], false)).join('');
      done.innerHTML = items.filter((i) => i[2]).map((i) => li(i[0], i[1], true)).join('');
      const roll = (el, v) => {
        const old = el.dataset.v || el.textContent;
        el.dataset.v = String(v);
        if (String(old) === String(v)) return;
        const up = +v > +old;
        el.innerHTML = up ? `<i style="transform:none"><b>${old}</b><b>${v}</b></i>` : `<i style="transform:translateY(-50%)"><b>${v}</b><b>${old}</b></i>`;
        const i = el.firstChild;
        void i.offsetWidth;
        i.style.transform = up ? 'translateY(-50%)' : 'none';
      };
      dn.dataset.v = '2';
      const sync = () => {
        const d = done.children.length;
        const t = d + todo.children.length;
        roll(dn, d);
        tt.textContent = String(t);
        rg.style.strokeDashoffset = String(1 - d / t);
        $('.tk-c1').textContent = String(todo.children.length);
        $('.tk-c2').textContent = String(d);
        $('.tk-ring').setAttribute('aria-label', `${d} of ${t} done`);
      };
      // FLIP: move a row between lists and let every row glide to its new place
      const flip = (fn) => {
        const all = [...root.querySelectorAll('.ti')];
        const s = sc();
        const first = new Map(all.map((e) => [e, e.getBoundingClientRect().top / s]));
        fn();
        [...root.querySelectorAll('.ti')].forEach((e) => {
          const was = first.get(e);
          if (was === undefined) return;
          const dy = was - e.getBoundingClientRect().top / s;
          if (Math.abs(dy) < 1) return;
          e.animate([{ transform: `translateY(${dy.toFixed(1)}px)` }, { transform: 'none' }], { duration: 560, easing: 'cubic-bezier(.32,.72,0,1)' });
        });
      };
      const toggle = (el, on) => {
        flip(() => {
          el.classList.toggle('done', on);
          const b = el.querySelector('.ck');
          b.setAttribute('aria-pressed', String(on));
          const sm = el.querySelector('small');
          if (on) {
            sm.className = '';
            sm.textContent = 'Done just now';
            el.dataset.due = el.dataset.due || '';
            done.insertBefore(el, done.firstChild);
          } else {
            sm.className = 'due';
            sm.textContent = el.dataset.due || 'Due today';
            todo.appendChild(el);
          }
        });
        sync();
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('.ck');
        if (!b) return;
        const el = b.closest('.ti');
        if (!el.dataset.due) el.dataset.due = el.querySelector('small').textContent;
        toggle(el, !el.classList.contains('done'));
      });
      // quick add with a drawn keyboard
      const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
      const kv = (p) => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
      const shf = kv('<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>');
      const bks = kv('<path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><line x1="18" x2="12" y1="9" y2="15"/><line x1="12" x2="18" y1="9" y2="15"/>');
      kb.innerHTML =
        `<div class="kr">${rows[0].split('').map((c) => `<button type="button" class="kk" data-k="${c}" tabindex="-1">${c}</button>`).join('')}</div>` +
        `<div class="kr">${rows[1].split('').map((c) => `<button type="button" class="kk" data-k="${c}" tabindex="-1">${c}</button>`).join('')}</div>` +
        `<div class="kr"><button type="button" class="kk w" data-k="shift" tabindex="-1" aria-label="Shift">${shf}</button>${rows[2].split('').map((c) => `<button type="button" class="kk" data-k="${c}" tabindex="-1">${c}</button>`).join('')}<button type="button" class="kk w" data-k="del" tabindex="-1" aria-label="Delete">${bks}</button></div>` +
        '<div class="kr"><button type="button" class="kk w" data-k="123" tabindex="-1">123</button><button type="button" class="kk sp" data-k=" " tabindex="-1">space</button><button type="button" class="kk rt" data-k="ret" tabindex="-1">return</button></div>';
      const keys = new Map([...kb.querySelectorAll('.kk')].map((b) => [b.dataset.k, b]));
      const rdy = () => go.classList.toggle('rdy', input.value.trim().length > 0);
      const kbd = (on) => {
        kb.classList.toggle('up', on);
        add.classList.toggle('up', on);
        scr.classList.toggle('kbo', on);
        if (on) setTimeout(() => (scr.scrollTop = 0), 60);
      };
      input.addEventListener('focus', () => kbd(true));
      input.addEventListener('input', rdy);
      kb.addEventListener('mousedown', (e) => e.preventDefault());
      kb.addEventListener('click', (e) => {
        const b = e.target.closest('.kk');
        if (!b) return;
        const k = b.dataset.k;
        if (k === 'del') input.value = input.value.slice(0, -1);
        else if (k === 'ret') form.requestSubmit();
        else if (k === 'shift' || k === '123') return;
        else input.value += k;
        rdy();
      });
      let added = null;
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = input.value.trim();
        if (!v) return;
        const el = document.createElement('div');
        el.innerHTML = li(v.charAt(0).toUpperCase() + v.slice(1), 'Due today', false, 'ins');
        const node = el.firstChild;
        node.dataset.due = 'Due today';
        flip(() => todo.insertBefore(node, todo.firstChild));
        added = node;
        input.value = '';
        rdy();
        sync();
        input.blur();
        kbd(false);
        setTimeout(() => {
          node.classList.remove('ins');
          const r = node.querySelector('.row');
          r.classList.add('fresh');
          setTimeout(() => r.classList.remove('fresh'), 2000);
        }, 380);
      });
      sync();
      let moved = [];
      const press = async (k) => {
        const b = keys.get(k);
        if (!b) return;
        b.classList.add('press');
        await wait(70);
        b.classList.remove('press');
      };

      // Autoplay: open the field (keyboard rises), type, add, then check two rows off; real input hands over for 4s.
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (moved.length) {
            moved.forEach((e) => e.classList.contains("done") && toggle(e, false));
            moved = [];
            await wait(900);
          }
          if (added) {
            added.remove();
            added = null;
            sync();
            await wait(500);
          }
          if (!(await tap(input, 0.3, 0.5))) continue;
          input.focus({ preventScroll: true });
          await wait(1000);
          const word = 'book dentist';
          cur.classList.add('off');
          for (const ch of word) {
            if (!idle()) break;
            input.value += ch;
            rdy();
            await press(ch);
            await wait(60);
          }
          if (!idle()) continue;
          await wait(400);
          if (!(await tap(keys.get('ret'), 0.5, 0.5, 900))) continue;
          await wait(1500);
          const checks = [...todo.querySelectorAll('.ck')];
          moved.push(checks[1].closest('.ti'));
          if (!(await tap(checks[1], 0.5, 0.5))) continue;
          await wait(1400);
          const c2 = todo.querySelectorAll('.ck');
          moved.push(c2[0].closest('.ti'));
          if (!(await tap(c2[0], 0.5, 0.5))) continue;
          cur.classList.add('off');
          await wait(3000);
        }
      })();
    },
    prompt: `Build a to-do list screen for a mobile app: a progress ring in the header, To do and Done sections, drawn check marks, rows that glide between lists, and a quick-add field that raises a keyboard (100dvh, max-width 430px centered on larger screens).

Layout: header with the date eyebrow, the title "Tasks" and a 58px progress ring (SVG circle with pathLength 1, stroke-dasharray 1, stroke-dashoffset 1 - done / total, rotated -90deg, 760ms transition) holding an odometer "2/7". Below, a scrolling area with uppercase 12px section labels and count pills, and rows of 60px (18px radius, white, hairline): a 44px tap target around a 26px circle checkbox, the title at 16.5px/650 and a due line ("Due Fri") in accent text. A quick-add bar is pinned to the bottom: a 54px white field with a plus icon, an input and a 42px gradient send button that fades to full opacity once there is text.

Checking: the circle fills with your accent while the check stroke draws (stroke-dasharray 1, dashoffset 1 to 0, 380ms), the title gets a line-through and mutes, and the row moves to the top of Done. Animate the move with FLIP: record every row's top before the DOM change, move the node, then for each row call element.animate from translateY(oldTop - newTop) to none over 560ms with cubic-bezier(.32,.72,0,1). Done and total counts update, the ring advances and the done number rolls (two stacked digits in a 1.25em clip, translateY 0 to -50%, overshoot spring).

Quick add: focusing the input raises a drawn keyboard (a pale blue-grey panel, white 42px keys with a 1px bottom shadow, 7px radius, QWERTY rows plus space and a return key in your accent) using transform: translateY(102%) to 0 with a critically damped spring (linear() curve, about 587ms), and lifts the add bar by the keyboard height with the same transform. Key clicks write into the input; Return submits. A new task is inserted at the top inside an li whose grid-template-rows animates 0fr to 1fr over 560ms while the card fades and drops in, with an accent tint that fades after 2s.

Accessibility: checkboxes are buttons with aria-pressed and the task name in the label, the ring has role="img" with the count, targets 44px or larger, prefers-reduced-motion shortens the springs. Plain HTML, CSS and JS, no libraries; React-friendly structure (TasksScreen, ProgressRing, TaskSection, TaskRow, CheckButton, QuickAddBar, Keyboard).`,
  });

})();
