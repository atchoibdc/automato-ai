(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    down: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    key: '<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
    phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    sliders: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
    palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    list: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    mapPin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
    pay: '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    form: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    log: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
  };
  const I = (d, s = 18, w = 2) =>
    `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const CURSOR = `<div class="cur off" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4.04 4.6a.5.5 0 0 1 .56-.56l15.5 6.1a.5.5 0 0 1-.05.94l-6.3 1.9a1 1 0 0 0-.66.66l-1.9 6.3a.5.5 0 0 1-.94.05Z"/></svg></div>`;
  const CURSOR_CSS = `
.d .cur{position:absolute;left:0;top:0;z-index:60;pointer-events:none;transition:transform 780ms var(--ml-ease),opacity .25s ease}
.d .cur svg{display:block;filter:drop-shadow(0 2px 3px rgba(35,15,10,.28));transition:transform 90ms ease-out}
.d .cur path{fill:var(--ml-ink);stroke:#fff;stroke-width:1.6;stroke-linejoin:round}
.d .cur.press svg{transform:scale(.8)}
.d .cur.off{opacity:0}`;
  const TOP = (page) =>
    `<header class="top"><span class="mark">${I(P.mark, 15)}</span><b>Halden</b><p class="crumb"><i>/</i>Settings<i>/</i><em>${page}</em></p><span class="sp"></span><button class="ib" type="button" aria-label="Notifications">${I(P.bell, 18)}<i></i></button><span class="av">MR</span></header>`;
  const TOAST = `<div class="toast" role="status"><s>${I(P.check, 13, 3)}</s><span></span></div>`;
  // Shared styling for every settings screen. Strings only.
  const BASE = `
.d button,.d input,.d select,.d textarea{font:inherit;color:inherit}
.d button{cursor:pointer}
.d h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d h2{font-size:16px;line-height:1.25;font-weight:650;letter-spacing:-.015em}
.d .lead{margin-top:6px;font-size:14px;color:var(--ml-muted)}
.d .app{position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden}
.d .top{flex:none;display:flex;align-items:center;gap:10px;height:56px;padding:0 24px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .mark{display:grid;flex:none;place-items:center;width:28px;height:28px;border-radius:8px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .top b{font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .crumb{display:flex;align-items:center;gap:7px;margin-left:6px;font-size:13.5px;color:var(--ml-muted);white-space:nowrap}
.d .crumb i{font-style:normal;color:var(--ml-bar)}
.d .crumb em{font-style:normal;font-weight:600;color:var(--ml-ink)}
.d .sp{flex:1}
.d .ib{position:relative;display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2)}
.d .ib:hover{background:var(--ml-surface)}
.d .ib i{position:absolute;top:8px;right:9px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px #fff}
.d .av{flex:none;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:650}
.d .av.t2{background:#D6E7FF}.d .av.t3{background:var(--ml-bar-2);color:var(--ml-ink-2)}.d .av.t4{background:var(--ml-accent-line)}
.d .body{display:flex;flex:1;flex-direction:column;min-height:0}
.d .pg{display:flex;flex:1;flex-direction:column;min-height:0;padding:26px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .pg > *{flex-shrink:0}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .btn,.d .cta{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:7px;flex:none;height:38px;padding:0 15px;border:0;border-radius:10px;font-size:13.5px;font-weight:600;white-space:nowrap;transition:transform 90ms ease-out,background-color .2s ease,opacity .2s ease}
.d .btn{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);color:var(--ml-ink-2)}
.d .btn:hover{background:var(--ml-surface)}
.d .btn.sm{height:32px;padding:0 11px;border-radius:9px;font-size:12.5px}
.d .cta{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d .btn:active,.d .cta:active,.d .press:not(.cur){transform:scale(.96)}
.d .btn:focus-visible,.d .cta:focus-visible,.d .tg:focus-visible,.d .seg button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .cta:disabled{opacity:.4;box-shadow:none;cursor:default}
.d .btn.red{color:#D70015;box-shadow:inset 0 0 0 1px rgba(255,59,48,.28)}
.d .btn.red:hover{background:rgba(255,59,48,.06)}
.d .cta.red{background:#FF3B30;box-shadow:0 1px 2px rgba(255,59,48,.3),0 8px 18px rgba(255,59,48,.2)}
.d .go{display:inline-grid;place-items:center;overflow:hidden}
.d .go > span{grid-area:1/1;display:inline-flex;align-items:center;gap:7px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .go .busy,.d .go .done{opacity:0;transform:translateY(10px)}
.d .go.loading .lbl,.d .go.ok .lbl,.d .go.ok .busy{opacity:0;transform:translateY(-10px)}
.d .go.loading .busy,.d .go.ok .done{opacity:1;transform:none}
.d .go.loading::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);background-size:220% 100%;animation:set-sheen 1.1s linear infinite}
.d .go.ok{background:#1DB954;box-shadow:0 1px 2px rgba(29,185,84,.3),0 8px 18px rgba(29,185,84,.22)}
.d .pill{display:inline-flex;align-items:center;gap:5px;padding:3px 9px;border-radius:999px;background:var(--ml-accent-soft);font-size:11.5px;font-weight:600;color:var(--ml-accent-ink);white-space:nowrap}
.d .pill.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .pill.warn{background:rgba(255,159,10,.12);color:#B25E00}
.d .pill.bad{background:rgba(255,59,48,.09);color:#D70015}
.d .pill.mute{background:var(--ml-bar-2);color:var(--ml-muted)}
.d .tg{position:relative;flex:none;width:40px;height:24px;padding:0;border:0;border-radius:999px;background:var(--ml-bar);transition:background-color .25s ease,transform 90ms ease-out}
.d .tg i{position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tg[aria-checked=true]{background:var(--ml-accent)}
.d .tg[aria-checked=true] i{transform:translateX(16px)}
.d .tg.mixed{background:var(--ml-accent-line)}
.d .tg.mixed i{transform:translateX(8px)}
.d .fld{display:flex;flex-direction:column;gap:7px;min-width:0}
.d .fld > span{font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .inp{position:relative;display:flex;align-items:center;gap:9px;height:42px;padding:0 12px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .25s ease,background-color .25s ease,color .25s ease}
.d .inp input,.d .inp select,.d .inp textarea{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:14px;color:var(--ml-ink);appearance:none;-webkit-appearance:none}
.d .inp input::placeholder{color:#A1A1A6}
.d .inp select{padding-right:22px;cursor:pointer}
.d .inp .cv{position:absolute;right:12px;pointer-events:none}
.d .inp:focus-within,.d .inp.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .seg{position:relative;display:inline-grid;grid-auto-flow:column;grid-auto-columns:1fr;padding:3px;border-radius:11px;background:var(--ml-bar-2)}
.d .seg .hl{position:absolute;top:3px;bottom:3px;left:3px;width:calc((100% - 6px) / var(--n,2));border-radius:8px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12);transform:translateX(calc(var(--i,0) * 100%));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .seg button{position:relative;z-index:1;height:32px;padding:0 14px;border:0;border-radius:8px;background:none;font-size:13px;font-weight:600;color:var(--ml-muted);transition:color .2s ease,transform 90ms ease-out;white-space:nowrap}
.d .seg button.on{color:var(--ml-ink)}
.d .ov{position:absolute;inset:0;z-index:30;display:grid;place-items:center;padding:20px;background:rgba(35,15,10,.34);opacity:0;visibility:hidden;pointer-events:none;transition:opacity .25s ease,visibility 0s .25s}
.d .ov.on{opacity:1;visibility:visible;pointer-events:auto;transition-delay:0s}
.d .md{width:100%;max-width:440px;padding:24px;border-radius:20px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);transform:translateY(14px) scale(.97);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .ov.on .md{transform:none}
.d .md h2{font-size:18px}
.d .md .acts{display:flex;justify-content:flex-end;gap:10px;margin-top:20px}
.d .toast{position:absolute;left:50%;bottom:22px;z-index:45;display:flex;align-items:center;gap:9px;max-width:calc(100% - 32px);padding:10px 16px 10px 10px;border-radius:999px;background:var(--ml-ink);color:#fff;font-size:13px;font-weight:600;white-space:nowrap;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translate(-50%,16px);pointer-events:none;transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .toast.on{opacity:1;transform:translate(-50%,0)}
.d .toast s{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#1DB954;text-decoration:none}
.d .rr{display:grid;grid-template-rows:1fr;transition:grid-template-rows .45s var(--ml-ease),opacity .3s ease}
.d .rr.gone{grid-template-rows:0fr;opacity:0}
.d .rr > .rw{min-height:0;overflow:hidden}
.d .mt{height:8px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .mt i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(var(--p,0));transform-origin:0 50%;transition:transform .9s var(--ml-ease),background-color .4s ease}
.d .mt i.hot{background:#FF9F0A}
@keyframes set-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes set-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes set-ping{0%{opacity:.5;transform:scale(1)}80%,100%{opacity:0;transform:scale(2.6)}}
${CURSOR_CSS}`;

  // ---------- 1. Profile: left section nav, save bar slides up when dirty ----------
  ML.add({
    id: 'app-settings-profile',
    cat: 'app-settings',
    title: 'Profile with save bar',
    sub: 'Edit a field, the save bar slides up',
    html: `
<div class="app">
  ${TOP('Profile')}
  <div class="body">
    <aside class="nv" aria-label="Settings sections">
      <p class="nl">Account</p>
      <button class="ni on" type="button">${I(P.user, 17)}Profile</button>
      <button class="ni" type="button">${I(P.bell, 17)}Notifications</button>
      <button class="ni" type="button">${I(P.shield, 17)}Security</button>
      <button class="ni" type="button">${I(P.palette, 17)}Appearance</button>
      <p class="nl">Workspace</p>
      <button class="ni" type="button">${I(P.building, 17)}General</button>
      <button class="ni" type="button">${I(P.users, 17)}Members</button>
      <button class="ni" type="button">${I(P.card, 17)}Billing</button>
    </aside>
    <main class="pg">
      <div class="hd"><h1>Profile</h1><p class="lead">How you appear to your team across Halden.</p></div>
      <form class="card main" novalidate>
        <div class="who">
          <span class="bigav">MR<i></i></span>
          <div class="wt"><b>Maya Reyes</b><small>Finance lead at Northgate</small></div>
          <button class="btn sm" type="button">Upload photo</button><button class="btn sm" type="button">Remove</button>
        </div>
        <div class="g2">
          <label class="fld"><span>First name</span><span class="inp"><input data-k="fn" value="Maya" autocomplete="given-name"></span></label>
          <label class="fld"><span>Last name</span><span class="inp"><input data-k="ln" value="Reyes" autocomplete="family-name"></span></label>
          <label class="fld"><span>Email</span><span class="inp">${I(P.mail, 16)}<input data-k="em" value="maya@northgate.co" type="email" autocomplete="email"></span></label>
          <label class="fld"><span>Job title</span><span class="inp"><input data-k="role" value="Finance lead"></span></label>
          <label class="fld"><span>Timezone</span><span class="inp"><select data-k="tz"><option>Manila (UTC+8)</option><option>London (UTC+1)</option><option>New York (UTC-4)</option><option>Singapore (UTC+8)</option></select><span class="cv">${I(P.chev, 16)}</span></span></label>
          <label class="fld"><span>Language</span><span class="inp"><select data-k="lang"><option>English (US)</option><option>English (UK)</option><option>Filipino</option></select><span class="cv">${I(P.chev, 16)}</span></span></label>
        </div>
        <label class="fld bio"><span>Short bio <em class="cnt">0 / 160</em></span><span class="inp ta"><textarea data-k="bio" maxlength="160" placeholder="A line about what you work on">Runs billing and month-end close for Northgate.</textarea></span></label>
      </form>
      <section class="card prefs">
        <div class="pr"><div><b>Show my local time to teammates</b><small>Appears on your profile card</small></div><button class="tg" type="button" role="switch" aria-checked="true" aria-label="Show my local time"><i></i></button></div>
        <div class="pr"><div><b>Weekly summary email</b><small>Mondays at 8:00, your timezone</small></div><button class="tg" type="button" role="switch" aria-checked="false" aria-label="Weekly summary email"><i></i></button></div>
      </section>
    </main>
  </div>
  <div class="sv" role="region" aria-label="Unsaved changes">
    <span class="dot"></span><p><b>You have unsaved changes</b><small>Changes apply to your profile only</small></p>
    <button class="btn sm dis" type="button">Discard</button>
    <button class="cta go sv-go" type="button"><span class="lbl">Save changes</span><span class="busy">Saving</span><span class="done">${I(P.check, 15, 2.8)}Saved</span></button>
  </div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .body{display:grid;grid-template-columns:224px minmax(0,1fr)}
.d .nv{display:flex;flex-direction:column;gap:2px;min-height:0;padding:20px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .nl{padding:12px 10px 6px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .nl:first-child{padding-top:0}
.d .ni{display:flex;align-items:center;gap:11px;height:38px;padding:0 10px;border:0;border-radius:10px;background:none;font-size:14px;font-weight:500;color:var(--ml-ink-2);text-align:left}
.d .ni svg{color:var(--ml-muted)}
.d .ni:hover{background:var(--ml-surface)}
.d .ni.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:600}
.d .ni.on svg{color:var(--ml-accent)}
.d .pg{display:flex;flex-direction:column;gap:16px;padding-bottom:28px}
.d .main{display:flex;flex:1 0 auto;flex-direction:column;gap:20px;padding:22px}
.d .hd,.d .prefs{flex:none}
.d .who{display:flex;align-items:center;gap:14px;padding-bottom:20px;border-bottom:1px solid var(--ml-line)}
.d .bigav{position:relative;display:grid;flex:none;place-items:center;width:64px;height:64px;border-radius:50%;background:linear-gradient(145deg,var(--ml-accent-line),var(--ml-accent-soft));box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:20px;font-weight:650;color:var(--ml-accent-ink)}
.d .bigav i{position:absolute;right:2px;bottom:2px;width:14px;height:14px;border-radius:50%;background:#1DB954;box-shadow:0 0 0 3px #fff}
.d .wt{display:flex;flex:1;flex-direction:column;min-width:0}
.d .wt b{font-size:16px;font-weight:650}
.d .wt small{font-size:13px;color:var(--ml-muted)}
.d .g2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px 18px}
.d .bio{flex:1}
.d .bio .ta{flex:1;align-items:flex-start;height:auto;min-height:88px;padding:10px 12px}
.d .bio textarea{height:100%;min-height:64px;resize:none;line-height:1.5}
.d .cnt{float:right;font:500 12px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .prefs{display:flex;flex-direction:column;padding:6px 22px}
.d .pr{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0;border-bottom:1px solid var(--ml-line)}
.d .pr:last-child{border-bottom:0}
.d .pr div{display:flex;flex-direction:column}
.d .pr b{font-size:14px;font-weight:600}
.d .pr small{font-size:13px;color:var(--ml-muted)}
.d .sv{position:absolute;left:calc(50% + 112px);bottom:20px;z-index:20;display:flex;align-items:center;gap:12px;width:min(560px,calc(100% - 288px));padding:12px 12px 12px 18px;border-radius:16px;background:var(--ml-ink);color:#fff;box-shadow:var(--ml-shadow-lg);transform:translate(-50%,170%);transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .app.dirty .sv{transform:translate(-50%,0)}
.d .sv .dot{flex:none;width:8px;height:8px;border-radius:50%;background:var(--ml-accent-2)}
.d .sv p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .sv b{font-size:13.5px;font-weight:600}
.d .sv small{font-size:12px;color:rgba(255,255,255,.62);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .sv .dis{background:rgba(255,255,255,.12);box-shadow:none;color:#fff}
.d .sv .dis:hover{background:rgba(255,255,255,.2)}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .nv{display:none}
  .d .top{padding:0 16px}.d .crumb i:first-child,.d .crumb{font-size:13px}
  .d .pg{padding:20px 16px 110px}
  .d .who{flex-wrap:wrap}.d .wt{flex-basis:calc(100% - 80px)}
  .d .g2{grid-template-columns:minmax(0,1fr)}
  .d .sv{left:50%;width:calc(100% - 24px);bottom:14px}
  .d .sv small{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const app = $('.app');
      const cur = $('.cur');
      const fields = [...root.querySelectorAll('[data-k]')];
      const go = $('.sv-go');
      const snap = () => fields.map((f) => f.value).join('|');
      let saved = snap();
      let busy = false;
      const toast = (m) => {
        const t = $('.toast');
        t.querySelector('span').textContent = m;
        t.classList.add('on');
        clearTimeout(t._h);
        t._h = setTimeout(() => t.classList.remove('on'), 2200);
      };
      const upd = () => {
        app.classList.toggle('dirty', snap() !== saved || busy);
        $('.cnt').textContent = `${$('[data-k=bio]').value.length} / 160`;
      };
      fields.forEach((f) => {
        f.addEventListener('input', upd);
        f.addEventListener('change', upd);
      });
      root.querySelectorAll('.tg').forEach((t) =>
        t.addEventListener('click', () => t.setAttribute('aria-checked', String(t.getAttribute('aria-checked') !== 'true'))),
      );
      $('.dis').addEventListener('click', () => {
        if (busy) return;
        const v = saved.split('|');
        fields.forEach((f, i) => (f.value = v[i]));
        upd();
      });
      go.addEventListener('click', () => {
        if (busy) return;
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          setTimeout(() => {
            saved = snap();
            busy = false;
            upd();
            toast('Profile saved');
            setTimeout(() => go.classList.remove('ok'), 500);
          }, 900);
        }, 900);
      });
      upd();

      // Autoplay: retitle the job, switch timezone, press Save; any real input hands over for 4s.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !root.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(780);
        return idle();
      };
      const press = async (el) => {
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
      };
      const retype = async (inp, text) => {
        const box = inp.closest('.inp');
        box.classList.add('is-auto');
        while (inp.value && idle()) {
          inp.value = inp.value.slice(0, -1);
          inp.dispatchEvent(new Event('input'));
          await wait(24);
        }
        for (const ch of text) {
          if (!idle()) return false;
          inp.value += ch;
          inp.dispatchEvent(new Event('input'));
          await wait(46 + Math.random() * 50);
        }
        box.classList.remove('is-auto');
        return true;
      };
      const roles = ['Head of finance', 'Finance lead'];
      const zones = ['London (UTC+1)', 'Manila (UTC+8)'];
      cur.style.transform = 'translate(760px,560px)';
      (async () => {
        let n = 0;
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          const role = $('[data-k=role]');
          const tz = $('[data-k=tz]');
          if (!(await aim(role.closest('.inp'), 0.4))) continue;
          if (!(await retype(role, roles[n % 2]))) continue;
          await wait(300);
          if (!(await aim(tz.closest('.inp'), 0.45))) continue;
          tz.closest('.inp').classList.add('is-auto');
          await wait(450);
          tz.value = zones[n % 2];
          tz.dispatchEvent(new Event('change'));
          await wait(500);
          tz.closest('.inp').classList.remove('is-auto');
          if (!(await aim(go, 0.5))) continue;
          await press(go);
          n++;
          await wait(4800);
        }
      })();
    },
    prompt: `Build a Profile settings page for a SaaS app with a left section nav, a form card and a save bar that appears only when the form is dirty. Full viewport, the page region scrolls, the shell does not.

Layout: a 56px top bar (logo tile, product name, breadcrumb "Settings / Profile", notifications button with an unread dot, avatar). Below it a CSS grid with columns 224px and minmax(0, 1fr). Left: white section nav with a hairline right border, uppercase micro-labels (Account, Workspace) and 38px items with a 17px line icon; the active item has a soft accent tint with an accent-line ring. Right: page title, one line of supporting text, then a card: a header row with a 64px initials avatar (online dot), name, role line and two small buttons (Upload photo, Remove); a two-column field grid (First name, Last name, Email with icon, Job title, Timezone select, Language select) with 42px inputs on a tinted surface; a bio textarea with a live "n / 160" counter that stretches to fill the card. Under it a second card with two toggle rows (show local time, weekly summary email).

Behavior: keep a snapshot of the saved values and compare on every input and change event. When they differ, add a dirty class that slides a dark floating save bar up from below the screen (transform: translateY, 594ms bounce curve, never top or bottom animation) with "You have unsaved changes", a Discard button (restores the snapshot) and a primary Save changes button. Save swaps the label with a vertical slide to "Saving" with a light sheen across the button (no circular spinner), then to a green "Saved" with a check, updates the snapshot, slides the bar away and shows a toast. Toggles are real buttons with role="switch" and aria-checked, thumb moved by transform with a 587ms critically damped spring.

Accessibility: every input has a visible label, focus shows a 1.5px accent ring plus a 4px soft ring, the save bar is a labelled region. Phone layout below 760px: hide the section nav, single column fields, save bar full width at the bottom. Respect prefers-reduced-motion. Plain HTML, CSS and JS, no libraries; React-friendly structure (SettingsNav, ProfileForm, PreferenceRow, SaveBar, Toast). Use your brand's accent color.`,
  });

  // ---------- 2. Billing and usage: one page, plan + meters + invoices ----------
  ML.add({
    id: 'app-settings-billing',
    cat: 'app-settings',
    title: 'Billing and usage',
    sub: 'Upgrade the plan, meters and invoices follow',
    html: `
<div class="app">
  ${TOP('Billing')}
  <div class="body"><main class="pg"><div class="col">
    <div class="hd">
      <div><h1>Billing and usage</h1><p class="lead">Northgate is on the <b class="pnm">Growth</b> plan. Next invoice on 1 November 2026.</p></div>
      <div class="seg" style="--n:2;--i:0" role="group" aria-label="Billing period"><span class="hl"></span><button class="on" type="button" data-per="m">Monthly</button><button type="button" data-per="y">Yearly <small class="sv2">-18%</small></button></div>
    </div>
    <div class="two">
      <section class="card plan" aria-label="Current plan">
        <div class="ph"><span class="lb">Current plan</span><span class="pill">Active</span></div>
        <p class="price"><b class="pv">$79</b><span class="pu">per month</span></p>
        <h2 class="ptitle">Growth</h2>
        <ul class="feat"></ul>
        <div class="pa"><button class="cta go up" type="button"><span class="lbl">Upgrade to Scale</span><span class="busy">Upgrading</span><span class="done">${I(P.check, 15, 2.8)}Upgraded</span></button><button class="btn" type="button">Change card</button></div>
      </section>
      <section class="card use" aria-label="Usage">
        <div class="ph"><h2>Usage this cycle</h2><span class="lb">Resets in 18 days</span></div>
        <div class="mts"></div>
      </section>
    </div>
    <section class="card inv" aria-label="Invoices">
      <div class="ph"><h2>Invoices</h2><button class="btn sm" type="button">${I(P.download, 15)}Download all</button></div>
      <div class="th"><span>Invoice</span><span>Date</span><span>Amount</span><span>Status</span><span></span></div>
      <div class="rows"></div>
    </section>
  </div></main></div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pg{padding:26px 28px 28px}
.d .col{display:flex;flex-direction:column;gap:16px;flex:1 0 auto;max-width:1000px;margin:0 auto}
.d .hd{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .hd b{font-weight:650;color:var(--ml-ink)}
.d .sv2{margin-left:4px;font-size:11px;font-weight:650;color:#12893C}
.d .two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:16px}
.d .plan,.d .use,.d .inv{padding:20px 22px}
.d .plan{display:flex;flex-direction:column}
.d .ph{display:flex;align-items:center;justify-content:space-between;gap:10px}
.d .lb{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .price{display:flex;align-items:baseline;gap:8px;margin-top:14px}
.d .pv{font-size:38px;line-height:1;font-weight:650;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .pu{font-size:13.5px;color:var(--ml-muted)}
.d .ptitle{margin-top:6px}
.d .feat{display:flex;flex-direction:column;gap:8px;margin:14px 0 18px;list-style:none;font-size:13.5px;color:var(--ml-ink-2)}
.d .feat li{display:flex;align-items:center;gap:9px}
.d .feat svg{flex:none;color:var(--ml-accent)}
.d .pa{display:flex;gap:10px;margin-top:auto}
.d .plan.swap .pv,.d .plan.swap .ptitle,.d .plan.swap .feat{animation:set-in 520ms var(--ml-spring) both}
.d .mts{display:flex;flex-direction:column;justify-content:space-between;gap:14px;margin-top:16px}
.d .m{display:flex;flex-direction:column;gap:8px}
.d .m p{display:flex;align-items:baseline;justify-content:space-between;font-size:13.5px;font-weight:600}
.d .m p span{font-weight:500;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .m p span b{font-weight:650;color:var(--ml-ink)}
.d .inv{display:flex;flex:1 0 auto;flex-direction:column}
.d .th,.d .rw{display:grid;grid-template-columns:1.3fr 1.2fr 1fr 1fr 40px;align-items:center;gap:12px}
.d .th{margin-top:12px;padding:10px 0;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .rows{display:flex;flex-direction:column}
.d .rw{padding:11px 0;border-bottom:1px solid var(--ml-line);font-size:13.5px;font-variant-numeric:tabular-nums}
.d .rw b{font-weight:600;font-family:var(--ml-mono);font-size:12.5px}
.d .rw span{color:var(--ml-ink-2)}
.d .rw .ib{width:32px;height:32px;color:var(--ml-muted)}
.d .rr.fresh .rw{background:var(--ml-accent-soft);box-shadow:-12px 0 0 var(--ml-accent-soft),12px 0 0 var(--ml-accent-soft);animation:bl-fade 2.4s ease .6s both}
@keyframes bl-fade{to{background-color:transparent;box-shadow:0 0 0 transparent}}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .pg{padding:20px 16px 24px}
  .d .hd{flex-direction:column;align-items:flex-start}
  .d .two{grid-template-columns:minmax(0,1fr)}
  .d .th,.d .rw{grid-template-columns:1.3fr 1fr 1fr}
  .d .th span:nth-child(2),.d .rw > span:nth-child(2),.d .th span:nth-child(5),.d .rw .ib{display:none}
}
@media (prefers-reduced-motion: reduce){.d .plan.swap .pv,.d .plan.swap .ptitle,.d .plan.swap .feat{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const PLANS = {
        Growth: { m: 79, y: 65, feat: ['8 of 10 seats included', '500k API calls a month', '100 GB storage, 2,000 runs'], cta: 'Upgrade to Scale', lim: [10, 500000, 100, 2000] },
        Scale: { m: 199, y: 165, feat: ['25 seats, unlimited guests', '2M API calls a month', '500 GB storage, 10,000 runs'], cta: 'Switch back to Growth', lim: [25, 2000000, 500, 10000] },
      };
      const use = [8, 412380, 38, 1240];
      const names = ['Seats', 'API calls', 'Storage (GB)', 'Workflow runs'];
      let plan = 'Growth';
      let per = 'm';
      const fmt = (n) => n.toLocaleString('en-US');
      const meters = () => {
        const lim = PLANS[plan].lim;
        $('.mts').innerHTML = use
          .map((u, i) => `<div class="m"><p>${names[i]}<span><b>${fmt(u)}</b> of ${fmt(lim[i])}</span></p><div class="mt"><i style="--p:0"></i></div></div>`)
          .join('');
        requestAnimationFrame(() => requestAnimationFrame(paint));
      };
      const paint = () => {
        const lim = PLANS[plan].lim;
        root.querySelectorAll('.mt i').forEach((b, i) => {
          const p = Math.min(1, use[i] / lim[i]);
          b.style.setProperty('--p', p.toFixed(3));
          b.classList.toggle('hot', p > 0.8);
        });
        root.querySelectorAll('.m p span').forEach((s, i) => (s.innerHTML = `<b>${fmt(use[i])}</b> of ${fmt(lim[i])}`));
      };
      const showPlan = (animate) => {
        const p = PLANS[plan];
        $('.pv').textContent = `$${p[per]}`;
        $('.pu').textContent = per === 'y' ? 'per month, billed yearly' : 'per month';
        $('.ptitle').textContent = plan;
        $('.pnm').textContent = plan;
        $('.feat').innerHTML = p.feat.map((f) => `<li><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>${f}</li>`).join('');
        $('.up .lbl').textContent = p.cta;
        if (animate) {
          const c = $('.plan');
          c.classList.remove('swap');
          void c.offsetWidth;
          c.classList.add('swap');
        }
      };
      const DL = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>';
      const row = (id, d, a, s, fresh) =>
        `<div class="rr${fresh ? ' gone fresh' : ''}" data-id="${id}"><div class="rw"><b>${id}</b><span>${d}</span><span>${a}</span><span><i class="pill ok" style="font-style:normal">${s}</i></span><button class="ib" type="button" aria-label="Download ${id}">${DL}</button></div></div>`;
      const inv = [
        ['INV-1010', '1 Oct 2026', '$79.00', 'Paid'],
        ['INV-1009', '1 Sep 2026', '$79.00', 'Paid'],
        ['INV-1008', '1 Aug 2026', '$79.00', 'Paid'],
        ['INV-1007', '1 Jul 2026', '$79.00', 'Paid'],
        ['INV-1006', '1 Jun 2026', '$79.00', 'Paid'],
      ];
      $('.rows').innerHTML = inv.map((r) => row(...r)).join('');
      const toast = (m) => {
        const t = $('.toast');
        t.querySelector('span').textContent = m;
        t.classList.add('on');
        clearTimeout(t._h);
        t._h = setTimeout(() => t.classList.remove('on'), 2200);
      };
      const seg = $('.seg');
      root.querySelectorAll('[data-per]').forEach((b, i) =>
        b.addEventListener('click', () => {
          per = b.dataset.per;
          seg.style.setProperty('--i', i);
          root.querySelectorAll('[data-per]').forEach((x) => x.classList.toggle('on', x === b));
          showPlan(true);
        }),
      );
      const up = $('.up');
      let busy = false;
      up.addEventListener('click', () => {
        if (busy) return;
        busy = true;
        up.classList.add('loading');
        setTimeout(() => {
          up.classList.replace('loading', 'ok');
          const rows = [...root.querySelectorAll('.rows .rr')];
          const going = plan === 'Growth';
          plan = going ? 'Scale' : 'Growth';
          showPlan(true);
          meters();
          if (going) {
            $('.rows').insertAdjacentHTML('afterbegin', row('INV-1011', '14 Oct 2026', '$69.68', 'Paid', true));
            const fresh = $('.rr.fresh');
            void fresh.offsetWidth;
            fresh.classList.remove('gone');
            rows[rows.length - 1].classList.add('gone');
            toast('Upgraded to Scale, prorated $69.68');
          } else {
            const f = $('.rr.fresh');
            if (f) f.classList.add('gone');
            const last = rows.filter((r) => r.classList.contains('gone'))[0];
            if (last) last.classList.remove('gone');
            setTimeout(() => f && f.remove(), 600);
            toast('Back on Growth from 1 Nov');
          }
          setTimeout(() => {
            up.classList.remove('ok');
            busy = false;
          }, 1100);
        }, 1000);
      });
      showPlan(false);
      meters();
      // a live number: API calls tick up while the screen is on
      (async () => {
        const sl = (ms) => new Promise((r) => setTimeout(r, ms));
        while (root.isConnected) {
          await sl(1500);
          if (root.dataset.paused) continue;
          use[1] += 3 + Math.floor(Math.random() * 11);
          paint();
        }
      })();

      // Autoplay: toggle yearly, upgrade, then switch back; any real input hands over for 4s.
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(700px,640px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (!(await tap(root.querySelector('[data-per=y]'), 0.5))) continue;
          await wait(1500);
          if (!(await tap(root.querySelector('[data-per=m]'), 0.5))) continue;
          await wait(900);
          if (!(await tap(up, 0.5))) continue;
          await wait(4200);
          if (!idle()) continue;
          if (plan === 'Scale' && !(await tap(up, 0.5))) continue;
          await wait(3200);
        }
      })();
    },
    prompt: `Build a Billing and usage settings page for a SaaS app: current plan, usage meters and an invoice list on one centered page (max-width 1000px), under a 56px top bar with breadcrumb "Settings / Billing".

Layout: a header row with the title, a supporting line naming the plan and the next invoice date, and a Monthly / Yearly segmented control on the right (one white highlight that slides between the two options with transform: translateX and a critically damped spring, never by width). Then a two-column row (1fr / 1.3fr): a Plan card (label, Active pill, a 38px tabular price with "per month", plan name, three check-marked feature lines, a primary Upgrade button and a secondary Change card button) and a Usage card with four meters (Seats, API calls, Storage, Workflow runs), each with a label, "412,380 of 500,000" and an 8px rounded track whose fill is scaleX(used / limit) from the left. A meter above 80% turns amber. Below, a full-width Invoices card with a header, a micro-label column row and rows (invoice id in mono, date, amount, a green Paid pill, a download icon button) that stretches to fill the remaining height.

Behavior: Upgrade runs a sheen across the button (no circular spinner), swaps the plan name, price and features with a short opacity + translateY(8px) entrance, rescales every meter to the new limits, inserts a prorated invoice at the top (grid-template-rows 0fr to 1fr so the rest shift smoothly, highlight that fades) and shows a toast; the button then offers to switch back. Yearly shows the lower per-month price with "billed yearly". The API call count ticks up every ~1.5s.

Accessibility: segmented control is a button group with aria-pressed or role="radiogroup", meters get role="meter" with aria-valuenow/max, download buttons have labels. Phone below 760px: stack cards, hide the date column and the download buttons. Respect prefers-reduced-motion. Plain HTML, CSS and JS, no libraries; React-friendly structure (PlanCard, UsageMeters, InvoiceTable, PeriodSwitch). Use your brand's accent color.`,
  });

  // ---------- 3. Team and roles: member list with a real role dropdown + invite modal ----------
  ML.add({
    id: 'app-settings-team',
    cat: 'app-settings',
    title: 'Team and roles',
    sub: 'Role menu changes for real, invite modal',
    html: `
<div class="app">
  ${TOP('Members')}
  <div class="body"><main class="pg"><div class="col">
    <nav class="tabs" aria-label="Workspace settings"><button type="button">General</button><button class="on" type="button">Members</button><button type="button">Roles</button><button type="button">Billing</button></nav>
    <div class="hd"><div><h1>Members</h1><p class="lead cnt-l"></p></div><button class="cta inv-btn" type="button">${I(P.plus, 16)}Invite member</button></div>
    <div class="grid">
      <section class="card list" aria-label="Members">
        <div class="lh"><div class="seg" style="--n:3;--i:0" role="group" aria-label="Filter members"><span class="hl"></span><button class="on" type="button" data-f="all">All</button><button type="button" data-f="admin">Admins</button><button type="button" data-f="pending">Pending</button></div><label class="sr inp">${I(P.search, 16)}<input placeholder="Search members" aria-label="Search members"></label></div>
        <div class="th"><span>Member</span><span>Role</span><span class="la">Last active</span></div>
        <div class="rows"></div>
      </section>
      <aside class="side">
        <section class="card seats"><p class="lb">Seats used</p><p class="big"><b class="sn">8</b> of 10</p><div class="mt"><i class="mi" style="--p:.8"></i></div><small>2 seats left on Growth</small></section>
        <section class="card legend"><p class="lb">What roles can do</p>
          <ul><li><b>Owner</b><span>Billing, delete workspace</span></li><li><b>Admin</b><span>Members, integrations, keys</span></li><li><b>Editor</b><span>Create and edit everything</span></li><li><b>Viewer</b><span>Read only, comment</span></li></ul>
        </section>
      </aside>
    </div>
  </div></main></div>
  <div class="ov" data-ov="invite"><div class="md" role="dialog" aria-modal="true" aria-label="Invite a member">
    <h2>Invite a member</h2><p class="lead">They get an email with a link to join Northgate.</p>
    <label class="fld" style="margin-top:16px"><span>Work email</span><span class="inp">${I(P.mail, 16)}<input class="iem" type="email" placeholder="name@company.com" autocomplete="off"></span></label>
    <div class="fld" style="margin-top:14px"><span>Role</span><div class="seg rseg" style="--n:3;--i:1" role="group" aria-label="Role"><span class="hl"></span><button type="button" data-r="Admin">Admin</button><button class="on" type="button" data-r="Editor">Editor</button><button type="button" data-r="Viewer">Viewer</button></div></div>
    <div class="acts"><button class="btn cancel" type="button">Cancel</button><button class="cta go send" type="button"><span class="lbl">Send invite</span><span class="busy">Sending</span><span class="done">${I(P.check, 15, 2.8)}Sent</span></button></div>
  </div></div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .col{display:flex;flex-direction:column;gap:16px;flex:1 0 auto}
.d .tabs{display:flex;gap:4px;border-bottom:1px solid var(--ml-line);margin:-6px 0 2px}
.d .tabs button{position:relative;height:40px;padding:0 14px;border:0;background:none;font-size:14px;font-weight:600;color:var(--ml-muted)}
.d .tabs button.on{color:var(--ml-ink)}
.d .tabs button.on::after{content:"";position:absolute;left:10px;right:10px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .hd{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .grid{display:grid;flex:1 0 auto;grid-template-columns:minmax(0,1fr) 270px;gap:16px;min-height:0}
.d .list{display:flex;flex-direction:column;min-width:0;padding:16px 18px}
.d .lh{display:flex;align-items:center;justify-content:space-between;gap:12px}
.d .sr{width:210px;height:38px;margin:0}
.d .th,.d .rw{display:grid;grid-template-columns:minmax(0,1.5fr) 150px 96px;align-items:center;gap:12px}
.d .th{margin-top:12px;padding:10px 0;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .rows{display:flex;flex:1;flex-direction:column}
.d .rw{padding:9px 0;border-bottom:1px solid var(--ml-line);animation:set-in 420ms var(--ml-spring) both}
.d .rw.hid{display:none}
.d .nm{display:flex;align-items:center;gap:11px;min-width:0}
.d .nm p{display:flex;flex-direction:column;min-width:0}
.d .nm b{font-size:13.5px;font-weight:600}
.d .nm small{overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .rc{position:relative}
.d .rb{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 10px 0 12px;border:0;border-radius:9px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;transition:background-color .2s ease,transform 90ms ease-out}
.d .rb svg{color:var(--ml-muted);transition:transform .3s var(--ml-ease)}
.d .rb[aria-expanded=true]{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .rb[aria-expanded=true] svg{transform:rotate(180deg)}
.d .rb:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .rb.flash{animation:tm-flash 1.1s ease}
.d .menu{position:absolute;left:0;top:calc(100% + 6px);z-index:15;width:210px;padding:6px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);opacity:0;visibility:hidden;transform:translateY(-6px) scale(.97);transform-origin:0 0;transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring),visibility 0s .2s}
.d .menu.up{top:auto;bottom:calc(100% + 6px);transform-origin:0 100%}
.d .menu.on{opacity:1;visibility:visible;transform:none;transition-delay:0s}
.d .menu button{display:flex;align-items:center;justify-content:space-between;gap:8px;width:100%;padding:8px 10px;border:0;border-radius:9px;background:none;text-align:left}
.d .menu button:hover{background:var(--ml-surface)}
.d .menu button p{display:flex;flex-direction:column}
.d .menu button b{font-size:13px;font-weight:600}
.d .menu button small{font-size:12px;color:var(--ml-muted)}
.d .menu button svg{color:var(--ml-accent);opacity:0}
.d .menu button.cur-r svg{opacity:1}
.d .la{font-size:13px;color:var(--ml-muted)}
.d .side{display:flex;flex-direction:column;gap:16px;min-width:0}
.d .seats{padding:18px}
.d .big{margin:8px 0 12px;font-size:15px;color:var(--ml-muted)}
.d .big b{font-size:30px;font-weight:650;letter-spacing:-.03em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .seats small{display:block;margin-top:10px;font-size:12.5px;color:var(--ml-muted)}
.d .legend{flex:1;padding:18px}
.d .legend ul{display:flex;flex-direction:column;gap:14px;margin-top:14px;list-style:none}
.d .legend li{display:flex;flex-direction:column;gap:2px}
.d .legend b{font-size:13.5px;font-weight:600}
.d .legend span{font-size:12.5px;color:var(--ml-muted)}
.d .rseg{width:100%}
@keyframes tm-flash{0%{box-shadow:inset 0 0 0 1.5px #1DB954,0 0 0 5px rgba(29,185,84,.14)}100%{box-shadow:inset 0 0 0 1px var(--ml-line)}}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .pg{padding:18px 16px 24px}
  .d .tabs{overflow-x:auto;scrollbar-width:none}
  .d .hd{align-items:center}.d .hd .lead{display:none}
  .d .grid{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .sr{display:none}
  .d .th{display:none}
  .d .rw{grid-template-columns:minmax(0,1fr) 124px}
  .d .la{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const ROLES = [['Owner', 'Billing and workspace'], ['Admin', 'Manage members and keys'], ['Editor', 'Create and edit'], ['Viewer', 'Read only']];
      const members = [
        ['MR', 'Maya Reyes', 'maya@northgate.co', 'Owner', 'Active now', ''],
        ['TL', 'Tomas Lindqvist', 'tomas@northgate.co', 'Editor', '12 min ago', 't2'],
        ['AT', 'Aiko Tan', 'aiko@northgate.co', 'Admin', '1 hour ago', 't3'],
        ['DO', 'Daniel Okafor', 'daniel@northgate.co', 'Editor', 'Yesterday', 't4'],
        ['PN', 'Priya Nair', 'priya@northgate.co', 'Viewer', 'Mon, 12 Oct', 't2'],
        ['HK', 'Hana Kim', 'hana@northgate.co', 'Editor', '9 Oct', ''],
        ['LO', 'Luis Ortega', 'luis@northgate.co', 'Viewer', '2 Oct', 't3'],
        ['SW', 'Sam Whitfield', 'sam@northgate.co', 'Admin', '30 Sep', 't4'],
      ];
      const pending = [['KM', 'Kwame Mensah', 'kwame@northgate.co', 'Viewer', 'Invite sent', 't3'], ['IC', 'Isabel Cruz', 'isabel@northgate.co', 'Editor', 'Invite sent', 't2']];
      const all = members.map((m) => ({ ini: m[0], name: m[1], mail: m[2], role: m[3], act: m[4], t: m[5], pend: false }))
        .concat(pending.map((m) => ({ ini: m[0], name: m[1], mail: m[2], role: m[3], act: m[4], t: m[5], pend: true })));
      // the list holds 8 accepted + 2 pending = 10 rows; the header says how many seats are used
      const rows = $('.rows');
      let filter = 'all';
      let q = '';
      const CHK = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const CV = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
      const roleBtn = (m) =>
        m.role === 'Owner'
          ? `<span class="pill mute">Owner</span>`
          : `<button class="rb" type="button" aria-haspopup="menu" aria-expanded="false"><span>${m.role}</span>${CV}</button><div class="menu" role="menu">${ROLES.slice(1).map((r) => `<button type="button" role="menuitem" data-role="${r[0]}" class="${r[0] === m.role ? 'cur-r' : ''}"><p><b>${r[0]}</b><small>${r[1]}</small></p>${CHK}</button>`).join('')}</div>`;
      const rowHtml = (m, i) =>
        `<div class="rw" data-i="${i}" data-pend="${m.pend ? 1 : 0}" style="animation-delay:${i * 30}ms"><div class="nm"><span class="av ${m.t}">${m.ini}</span><p><b>${m.name}</b><small>${m.mail}</small></p></div><div class="rc">${roleBtn(m)}</div><span class="la">${m.pend ? '<i class="pill warn" style="font-style:normal">Pending</i>' : m.act}</span></div>`;
      const toast = (msg) => {
        const t = $('.toast');
        t.querySelector('span').textContent = msg;
        t.classList.add('on');
        clearTimeout(t._h);
        t._h = setTimeout(() => t.classList.remove('on'), 2200);
      };
      const count = () => {
        const seats = all.filter((m) => !m.pend).length;
        const pend = all.filter((m) => m.pend).length;
        $('.cnt-l').textContent = `${seats} members and ${pend} pending invites in Northgate.`;
        $('.sn').textContent = seats;
        $('.mi').style.setProperty('--p', (seats / 10).toFixed(2));
        $('.seats small').textContent = `${10 - seats} seats left, ${pend} invites pending`;
      };
      const render = () => {
        rows.innerHTML = all.map(rowHtml).join('');
        applyFilter();
        count();
        // open the menu of the last rows upwards so it stays inside the list
        const rs = [...rows.children];
        rs.forEach((r, i) => i > rs.length - 4 && r.querySelector('.menu') && r.querySelector('.menu').classList.add('up'));
      };
      const applyFilter = () => {
        [...rows.children].forEach((r) => {
          const m = all[+r.dataset.i];
          const ok = (filter === 'all' || (filter === 'admin' && (m.role === 'Admin' || m.role === 'Owner')) || (filter === 'pending' && m.pend)) && (!q || (m.name + m.mail).toLowerCase().includes(q));
          r.classList.toggle('hid', !ok);
        });
      };
      const closeMenus = () => root.querySelectorAll('.menu.on').forEach((m) => {
        m.classList.remove('on');
        m.parentElement.querySelector('.rb').setAttribute('aria-expanded', 'false');
      });
      rows.addEventListener('click', (e) => {
        const rb = e.target.closest('.rb');
        const opt = e.target.closest('[data-role]');
        if (opt) {
          const m = all[+opt.closest('.rw').dataset.i];
          const was = m.role;
          m.role = opt.dataset.role;
          const rc = opt.closest('.rc');
          rc.querySelector('.rb span').textContent = m.role;
          rc.querySelectorAll('[data-role]').forEach((b) => b.classList.toggle('cur-r', b === opt));
          closeMenus();
          if (was !== m.role) {
            rc.querySelector('.rb').classList.remove('flash');
            void rc.offsetWidth;
            rc.querySelector('.rb').classList.add('flash');
            toast(`${m.name.split(' ')[0]} is now ${/^[AEIOU]/.test(m.role) ? 'an' : 'a'} ${m.role}`);
            applyFilter();
          }
        } else if (rb) {
          const open = rb.getAttribute('aria-expanded') === 'true';
          closeMenus();
          if (!open) {
            rb.setAttribute('aria-expanded', 'true');
            rb.parentElement.querySelector('.menu').classList.add('on');
          }
        }
      });
      root.addEventListener('click', (e) => !e.target.closest('.rc') && closeMenus());
      root.addEventListener('keydown', (e) => e.key === 'Escape' && (closeMenus(), closeInvite()));
      const seg = $('.list .seg');
      root.querySelectorAll('[data-f]').forEach((b, i) =>
        b.addEventListener('click', () => {
          filter = b.dataset.f;
          seg.style.setProperty('--i', i);
          root.querySelectorAll('[data-f]').forEach((x) => x.classList.toggle('on', x === b));
          applyFilter();
        }),
      );
      $('.sr input').addEventListener('input', (e) => {
        q = e.target.value.trim().toLowerCase();
        applyFilter();
      });
      // invite modal
      const ov = $('.ov');
      const iem = $('.iem');
      const send = $('.send');
      const rseg = $('.rseg');
      let role = 'Editor';
      const openInvite = () => {
        ov.classList.add('on');
        iem.value = '';
      };
      const closeInvite = () => ov.classList.remove('on');
      $('.inv-btn').addEventListener('click', openInvite);
      $('.cancel').addEventListener('click', closeInvite);
      ov.addEventListener('click', (e) => e.target === ov && closeInvite());
      root.querySelectorAll('[data-r]').forEach((b, i) =>
        b.addEventListener('click', () => {
          role = b.dataset.r;
          rseg.style.setProperty('--i', i);
          root.querySelectorAll('[data-r]').forEach((x) => x.classList.toggle('on', x === b));
        }),
      );
      let busy = false;
      send.addEventListener('click', () => {
        const v = iem.value.trim();
        if (busy) return;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
          iem.closest('.inp').style.boxShadow = 'inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1)';
          setTimeout(() => (iem.closest('.inp').style.boxShadow = ''), 1200);
          return;
        }
        busy = true;
        send.classList.add('loading');
        setTimeout(() => {
          send.classList.replace('loading', 'ok');
          setTimeout(() => {
            closeInvite();
            all.splice(8, 0, { ini: v.slice(0, 2).toUpperCase(), name: v.split('@')[0].replace(/^./, (c) => c.toUpperCase()), mail: v, role, act: '', t: 't4', pend: true });
            render();
            toast(`Invite sent to ${v}`);
            setTimeout(() => {
              send.classList.remove('ok');
              busy = false;
            }, 400);
          }, 700);
        }, 800);
      });
      render();

      // Autoplay: change a role from the menu, then invite someone; any real input hands over for 4s.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !root.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,600px)';
      (async () => {
        let n = 0;
        await wait(1600);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          const row = rows.children[1];
          if (!(await tap(row.querySelector('.rb'), 0.5))) continue;
          await wait(500);
          const target = row.querySelector(`[data-role=${n % 2 ? 'Editor' : 'Admin'}]`);
          if (!(await tap(target, 0.4))) continue;
          await wait(1800);
          if (!(await tap($('.inv-btn'), 0.5))) continue;
          await wait(700);
          iem.closest('.inp').classList.add('is-auto');
          cur.classList.toggle('off', !moveTo(iem, 0.4));
          await wait(600);
          const mail = n % 2 ? 'noor@northgate.co' : 'rafael@northgate.co';
          iem.value = '';
          for (const ch of mail) {
            if (!idle()) break;
            iem.value += ch;
            await wait(48 + Math.random() * 40);
          }
          iem.closest('.inp').classList.remove('is-auto');
          if (!idle()) continue;
          await wait(300);
          if (!(await tap(root.querySelector('[data-r=Admin]'), 0.5))) continue;
          await wait(400);
          if (!(await tap(send, 0.5))) continue;
          await wait(4200);
          // reset for the next loop: drop the invited row
          const k = all.findIndex((m) => m.mail === mail);
          if (k > -1 && idle()) {
            all.splice(k, 1);
            render();
          }
          n++;
          await wait(1200);
        }
      })();
    },
    prompt: `Build a Members page for workspace settings: a tabbed settings header, a member list with a real role dropdown, a seats summary and an invite modal. Full viewport under a 56px top bar; the page region scrolls.

Layout: horizontal sub-tabs (General, Members, Roles, Billing) with a 2px accent underline on the active tab; then a header with the title, "8 members and 2 pending invites", and a primary Invite member button. Below, a grid of minmax(0, 1fr) and 270px. Left: a card with a toolbar (a segmented All / Admins / Pending filter whose white highlight slides with transform, and a search field), a micro-label header (Member, Role, Last active) and rows: initials avatar on a blue tint, name, email, a role button (34px, chevron that rotates when open) and the last-active text, or a Pending pill. The Owner shows a static pill instead of a menu. Right: a Seats card (big tabular number, "of 10", 8px meter, "2 seats left") and a role legend card that stretches to the bottom.

Behavior: the role button opens a popover menu (aria-haspopup="menu", aria-expanded, role="menu" items with a title, one-line description and a check on the current role); it scales in from its corner (opacity + scale .97 to 1, 587ms spring), opens upward for the last rows, closes on outside click or Escape, and choosing a role really updates the row, flashes a green ring and shows a toast "Tomas is now an Admin". The Invite button opens a modal over a 34% dim scrim (dialog, aria-modal, focus moves to the email field): email input, a three-option Role segmented control, Cancel and a Send invite button that shows a sheen while sending (no circular spinner), then closes, inserts a Pending row with an entrance (opacity + translateY 8px) and updates the seat meter and counts. Filters and search really filter the rows.

Accessibility: visible focus rings, labels on every control. Phone below 760px: hide the side column, search and column header; rows become name + role button. Respect prefers-reduced-motion. Plain HTML, CSS and JS, no libraries; React-friendly structure (MemberTable, RoleMenu, InviteModal, SeatsCard, Toast). Use your brand's accent color.`,
  });

  // ---------- 4. API keys: masked list, create reveals the secret once, revoke collapses the row ----------
  ML.add({
    id: 'app-settings-api-keys',
    cat: 'app-settings',
    title: 'API keys',
    sub: 'Create reveals the secret once, revoke',
    html: `
<div class="app">
  ${TOP('API keys')}
  <div class="body"><main class="pg"><div class="grid">
    <div class="lc">
      <div class="hd"><div><h1>API keys</h1><p class="lead">Keys let your servers talk to Halden.</p></div><button class="cta mk" type="button">${I(P.plus, 16)}Create key</button></div>
      <p class="note">${I(P.lock, 16)}Secret keys carry your full access. Keep them out of client-side code.</p>
      <section class="card keys" aria-label="Keys">
        <div class="th"><span>Name</span><span>Key</span><span>Access</span><span>Last used</span><span></span></div>
        <div class="rows"></div>
      </section>
    </div>
    <aside class="rc">
      <section class="code" aria-label="Quick start"><p class="lb">Quick start</p><pre><code><span class="c1">curl</span> api.halden.co/v1/invoices <span class="c2">\\</span>
  -H <span class="c3">"Authorization: Bearer $HALDEN_KEY"</span></code></pre><p class="cm">Send the key in the Authorization header. Rotate it any time.</p></section>
      <section class="card req"><p class="lb">Requests, last 24 hours</p><p class="rn">18,402</p><span class="pill ok">${I(P.chart, 13)}0.02% errors</span><div class="bars"></div>
        <ul class="eps"><li><code>/v1/invoices</code><b>9,120</b></li><li><code>/v1/clients</code><b>5,814</b></li><li><code>/v1/projects</code><b>3,468</b></li></ul></section>
    </aside>
  </div></main></div>
  <div class="ov"><div class="md" role="dialog" aria-modal="true" aria-label="Create API key">
    <div class="st on" data-st="1">
      <h2>Create a key</h2><p class="lead">Name it after the system that will use it.</p>
      <label class="fld" style="margin-top:16px"><span>Key name</span><span class="inp">${I(P.key, 16)}<input class="kn" placeholder="e.g. Billing sync" autocomplete="off"></span></label>
      <div class="fld" style="margin-top:14px"><span>Access</span><div class="seg" style="--n:2;--i:0" role="group" aria-label="Access"><span class="hl"></span><button class="on" type="button" data-a="Read only">Read only</button><button type="button" data-a="Read and write">Read and write</button></div></div>
      <div class="acts"><button class="btn cancel" type="button">Cancel</button><button class="cta mk2" type="button">Create key</button></div>
    </div>
    <div class="st" data-st="2">
      <h2>Key created</h2><p class="lead">This is the only time the full key is shown.</p>
      <p class="wn">${I(P.alert, 16)}Copy it now and store it in your secrets manager.</p>
      <div class="sec"><code class="sv3"></code><button class="btn sm cp" type="button"><span class="c-a">${I(P.copy, 15)}Copy</span><span class="c-b">${I(P.check, 15, 2.8)}Copied</span></button></div>
      <div class="acts"><button class="cta done" type="button">I have saved it</button></div>
    </div>
  </div></div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .grid{display:grid;grid-template-columns:minmax(0,1fr) 320px;gap:20px;flex:1 0 auto}
.d .lc{display:flex;flex-direction:column;gap:16px;min-width:0}
.d .hd{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .note{display:flex;align-items:center;gap:10px;padding:11px 14px;border-radius:12px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:13px;color:var(--ml-accent-ink)}
.d .note svg{flex:none}
.d .keys{display:flex;flex:1;flex-direction:column;padding:6px 18px 10px}
.d .th,.d .rw{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1.5fr) 118px 92px 66px;align-items:center;gap:12px}
.d .th{padding:14px 0 10px;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .rows{display:flex;flex-direction:column}
.d .rw{padding:14px 0;border-bottom:1px solid var(--ml-line)}
.d .rw b{display:block;font-size:13.5px;font-weight:600}
.d .rw small{font-size:12.5px;color:var(--ml-muted)}
.d .kv{overflow:hidden;font:500 12.5px/1 var(--ml-mono);color:var(--ml-ink-2);white-space:nowrap;text-overflow:ellipsis}
.d .lu{font-size:13px;color:var(--ml-muted)}
.d .rr.fresh .rw{background:var(--ml-accent-soft);box-shadow:-18px 0 0 var(--ml-accent-soft),18px 0 0 var(--ml-accent-soft);animation:ak-fade 2.2s ease .5s both}
.d .rr.rev .rw{opacity:.45}
.d .rr.rev .kv{text-decoration:line-through}
@keyframes ak-fade{to{background-color:transparent;box-shadow:0 0 0 transparent}}
.d .rc{display:flex;flex-direction:column;gap:16px;min-width:0}
.d .code{padding:18px;border-radius:16px;background:#0E1730;color:#DCE8FF;box-shadow:var(--ml-shadow-lg)}
.d .code .lb{color:rgba(220,232,255,.6)}
.d .code pre{margin:12px 0 10px;overflow:hidden;font:500 12px/1.7 var(--ml-mono);white-space:pre-wrap;word-break:break-word}
.d .c1{color:#7FB6FF}.d .c2{color:rgba(220,232,255,.5)}.d .c3{color:#FFD0CA}
.d .cm{font-size:12.5px;color:rgba(220,232,255,.62)}
.d .req{display:flex;flex:1;flex-direction:column;align-items:flex-start;padding:18px}
.d .lb{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .rn{margin:8px 0 10px;font-size:34px;line-height:1;font-weight:650;letter-spacing:-.035em;font-variant-numeric:tabular-nums}
.d .bars{display:flex;flex:none;align-items:flex-end;gap:6px;width:100%;height:84px;margin-top:16px}
.d .eps{display:flex;flex:1;flex-direction:column;justify-content:flex-end;width:100%;margin-top:14px;list-style:none}
.d .eps li{display:flex;align-items:center;justify-content:space-between;padding:11px 0;border-top:1px solid var(--ml-line);font-size:13px}
.d .eps code{font:500 12.5px/1 var(--ml-mono);color:var(--ml-ink-2)}
.d .eps b{font-weight:650;font-variant-numeric:tabular-nums}
.d .bars i{flex:1;height:100%;border-radius:5px 5px 2px 2px;background:var(--ml-bar);transform:scaleY(var(--h));transform-origin:50% 100%;transition:transform .8s var(--ml-ease)}
.d .bars i:last-child{background:var(--ml-accent)}
.d .st{display:none}
.d .st.on{display:block;animation:set-in 480ms var(--ml-spring) both}
.d .wn{display:flex;align-items:center;gap:9px;margin-top:14px;padding:10px 12px;border-radius:11px;background:rgba(255,159,10,.1);font-size:13px;font-weight:500;color:#B25E00}
.d .wn svg{flex:none}
.d .sec{display:flex;align-items:center;gap:10px;margin-top:14px;padding:6px 6px 6px 14px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .sv3{flex:1;min-width:0;overflow:hidden;font:500 13px/1 var(--ml-mono);color:var(--ml-ink);white-space:nowrap;text-overflow:ellipsis}
.d .st.on .sv3{animation:ak-rev 900ms var(--ml-ease) 200ms both}
.d .cp{position:relative;overflow:hidden;display:inline-grid;min-width:92px}
.d .cp span{grid-area:1/1;display:inline-flex;align-items:center;justify-content:center;gap:6px;transition:opacity .2s ease,transform .4s var(--ml-spring)}
.d .cp .c-b{opacity:0;transform:translateY(10px);color:#12893C}
.d .cp.ok .c-a{opacity:0;transform:translateY(-10px)}
.d .cp.ok .c-b{opacity:1;transform:none}
@keyframes ak-rev{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0)}}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .pg{padding:20px 16px 24px}
  .d .grid{grid-template-columns:minmax(0,1fr)}
  .d .rc{display:none}
  .d .hd .lead{display:none}.d .hd{align-items:center}
  .d .th{display:none}
  .d .rw{grid-template-columns:minmax(0,1fr) 62px}
  .d .rw .kv{grid-column:1;grid-row:2}
  .d .rw > :nth-child(3),.d .rw > :nth-child(4){display:none}
  .d .rw > :last-child{grid-column:2;grid-row:1/3}
}
@media (prefers-reduced-motion: reduce){.d .st.on .sv3{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const keys = [
        ['Production server', '3f9a', 'Read and write', 'Just now', 'Created 2 Sep 2026'],
        ['Reporting job', 'c71e', 'Read only', '2 hours ago', 'Created 18 Sep 2026'],
        ['Staging', '08bd', 'Read and write', 'Yesterday', 'Created 30 Jun 2026'],
        ['Nightly export', 'e2a4', 'Read only', 'Mon, 12 Oct', 'Created 11 May 2026'],
        ['Mobile backend', '5d10', 'Read and write', '9 Oct', 'Created 4 Apr 2026'],
        ['Support tooling', 'b936', 'Read only', '2 Oct', 'Created 19 Feb 2026'],
      ];
      const rows = $('.rows');
      const rowHtml = (k, cls) =>
        `<div class="rr${cls ? ' ' + cls : ''}"><div class="rw"><div><b>${k[0]}</b><small>${k[4]}</small></div><span class="kv">hal_live_••••••••••••${k[1]}</span><span><i class="pill ${k[2] === 'Read only' ? '' : 'warn'}" style="font-style:normal">${k[2]}</i></span><span class="lu">${k[3]}</span><button class="btn sm red rv" type="button" aria-label="Revoke ${k[0]}">Revoke</button></div></div>`;
      rows.innerHTML = keys.map((k) => rowHtml(k)).join('');
      const toast = (m) => {
        const t = $('.toast');
        t.querySelector('span').textContent = m;
        t.classList.add('on');
        clearTimeout(t._h);
        t._h = setTimeout(() => t.classList.remove('on'), 2200);
      };
      rows.addEventListener('click', (e) => {
        const b = e.target.closest('.rv');
        if (!b) return;
        const r = b.closest('.rr');
        if (r.classList.contains('rev')) return;
        r.classList.add('rev');
        b.textContent = 'Revoked';
        toast(`${r.querySelector('b').textContent} revoked`);
        setTimeout(() => r.classList.add('gone'), 800);
        setTimeout(() => r.remove(), 1400);
      });
      // requests card: live number + bars
      const rn = $('.rn');
      let req = 18402;
      const hs = [0.38, 0.52, 0.44, 0.6, 0.48, 0.66, 0.58, 0.72, 0.64, 0.8, 0.7, 0.9];
      $('.bars').innerHTML = hs.map((h) => `<i style="--h:${h}"></i>`).join('');
      (async () => {
        const sl = (ms) => new Promise((r) => setTimeout(r, ms));
        while (root.isConnected) {
          await sl(1400);
          if (root.dataset.paused) continue;
          req += 4 + Math.floor(Math.random() * 14);
          rn.textContent = req.toLocaleString('en-US');
          const last = $('.bars i:last-child');
          last.style.setProperty('--h', (0.82 + Math.random() * 0.18).toFixed(2));
        }
      })();
      // modal
      const ov = $('.ov');
      const kn = $('.kn');
      let access = 'Read only';
      const step = (n) => root.querySelectorAll('.st').forEach((s) => s.classList.toggle('on', s.dataset.st === String(n)));
      const open = () => {
        kn.value = '';
        step(1);
        ov.classList.add('on');
      };
      const close = () => ov.classList.remove('on');
      $('.mk').addEventListener('click', open);
      $('.cancel').addEventListener('click', close);
      ov.addEventListener('click', (e) => e.target === ov && close());
      root.addEventListener('keydown', (e) => e.key === 'Escape' && close());
      const seg = $('.st .seg');
      root.querySelectorAll('[data-a]').forEach((b, i) =>
        b.addEventListener('click', () => {
          access = b.dataset.a;
          seg.style.setProperty('--i', i);
          root.querySelectorAll('[data-a]').forEach((x) => x.classList.toggle('on', x === b));
        }),
      );
      let secret = '';
      let made = '';
      $('.mk2').addEventListener('click', () => {
        const name = kn.value.trim();
        if (!name) {
          kn.closest('.inp').style.boxShadow = 'inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1)';
          setTimeout(() => (kn.closest('.inp').style.boxShadow = ''), 1200);
          return;
        }
        made = name;
        const abc = 'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        secret = 'hal_live_' + Array.from({ length: 24 }, () => abc[Math.floor(Math.random() * abc.length)]).join('');
        $('.sv3').textContent = secret;
        $('.cp').classList.remove('ok');
        step(2);
      });
      $('.cp').addEventListener('click', () => {
        try {
          navigator.clipboard && navigator.clipboard.writeText(secret).catch(() => {});
        } catch (e) {}
        $('.cp').classList.add('ok');
      });
      $('.done').addEventListener('click', () => {
        close();
        rows.insertAdjacentHTML('afterbegin', rowHtml([made, secret.slice(-4), access, 'Never used', 'Created 14 Oct 2026'], 'gone fresh'));
        const f = rows.firstElementChild;
        void f.offsetWidth;
        f.classList.remove('gone');
        toast(`${made} created`);
      });

      // Autoplay: create a key, copy the secret, then revoke it; any real input hands over for 4s.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !root.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,620px)';
      (async () => {
        let n = 0;
        const names = ['Billing sync', 'Data warehouse'];
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await tap($('.mk'), 0.5))) continue;
          await wait(800);
          kn.closest('.inp').classList.add('is-auto');
          cur.classList.toggle('off', !moveTo(kn, 0.4));
          await wait(600);
          kn.value = '';
          for (const ch of names[n % 2]) {
            if (!idle()) break;
            kn.value += ch;
            await wait(50 + Math.random() * 40);
          }
          kn.closest('.inp').classList.remove('is-auto');
          if (!idle()) continue;
          await wait(300);
          if (!(await tap($('.mk2'), 0.5))) continue;
          await wait(1600);
          if (!(await tap($('.cp'), 0.5))) continue;
          await wait(1100);
          if (!(await tap($('.done'), 0.5))) continue;
          await wait(2200);
          const fresh = rows.firstElementChild;
          if (!(await tap(fresh.querySelector('.rv'), 0.5))) continue;
          n++;
          await wait(3200);
        }
      })();
    },
    prompt: `Build an API keys settings page for a developer-facing SaaS: a masked key list, a create flow that reveals the secret exactly once with a copy button, and revoke. Full viewport under a 56px top bar; the page region scrolls.

Layout: a grid of minmax(0, 1fr) and 320px. Left: header (title, one-line description, primary Create key button), a soft accent info banner with a lock icon ("Secret keys carry your full access"), and a card with a micro-label header (Name, Key, Access, Last used) and rows: name with created date, the key masked in mono (hal_live_ then dots then the last four characters), an Access pill (Read only in accent tint, Read and write in amber), last used, and a small red-text Revoke button. The list card stretches to the bottom. Right: a dark code card (the one dark element) with a curl example and the Authorization header, and a Requests card with a big tabular number that ticks up, an error-rate pill and 12 bars whose last bar breathes.

Behavior: Create key opens a modal over a 34% dim scrim: step 1 has a name field and a two-option Access segmented control (sliding highlight with transform); Create key goes to step 2, which shows a warning ("Copy it now, you will not see it again"), the generated secret in a mono box that reveals left to right with clip-path: inset(0 100% 0 0) to inset(0), and a Copy button (navigator.clipboard.writeText, with a try/catch fallback) that swaps its label to a green "Copied" with a vertical slide. "I have saved it" closes the modal and inserts the new masked key at the top with a highlight that fades, then a toast. Revoke dims the row, strikes the key through, shows a toast and collapses it with grid-template-rows 1fr to 0fr. Never keep the full secret anywhere after the modal.

Accessibility: dialog with aria-modal, focus moves to the name field, Escape closes, every control has a visible focus ring and revoke buttons carry the key name in aria-label. Phone below 760px: hide the right column and the column header, rows keep name, masked key and Revoke. Respect prefers-reduced-motion. Plain HTML, CSS and JS, no libraries; React-friendly structure (KeyTable, CreateKeyDialog, SecretReveal, CodeCard, Toast). Use your brand's accent color.`,
  });

  // ---------- 5. Notification matrix: sticky in-page nav + channels x events grid ----------
  ML.add({
    id: 'app-settings-notifications',
    cat: 'app-settings',
    title: 'Notification matrix',
    sub: 'Column toggles flip a whole channel',
    html: `
<div class="app">
  ${TOP('Notifications')}
  <div class="body"><main class="pg">
    <div class="hd"><div><h1>Notifications</h1><p class="lead">Choose where each kind of update reaches you. <b class="tot"></b></p></div></div>
    <div class="lay">
      <nav class="sn" aria-label="Sections"><p class="nl">On this page</p><button class="si on" type="button" data-s="0">Activity</button><button class="si" type="button" data-s="1">Billing</button><button class="si" type="button" data-s="2">Security</button><button class="si" type="button" data-s="3">Product</button></nav>
      <div class="mx card">
        <div class="mh"><span>Event</span><div class="chs"></div></div>
        <div class="gr"></div>
      </div>
    </div>
  </main></div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pg{padding-top:24px}
.d .hd b{font-weight:650;color:var(--ml-accent-ink)}
.d .lay{display:grid;grid-template-columns:168px minmax(0,1fr);gap:22px;align-items:start;margin-top:18px}
.d .sn{position:sticky;top:0;display:flex;flex-direction:column;gap:2px}
.d .nl{padding:0 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .si{position:relative;height:36px;padding:0 12px;border:0;border-radius:10px;background:none;font-size:14px;font-weight:500;color:var(--ml-ink-2);text-align:left;transition:background-color .25s ease,color .25s ease}
.d .si:hover{background:var(--ml-bar-2)}
.d .si.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-weight:600}
.d .mx{min-width:0;padding:0 0 6px}
.d .mh,.d .er{display:grid;grid-template-columns:minmax(0,1fr) 336px;align-items:center;gap:12px}
.d .mh{position:sticky;top:0;z-index:5;padding:14px 20px 12px;border-radius:16px 16px 0 0;background:rgba(255,255,255,.96);border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .chs,.d .cs{display:grid;grid-template-columns:repeat(4,1fr);justify-items:center}
.d .ch{display:flex;flex-direction:column;align-items:center;gap:6px;font-size:12px;letter-spacing:0;text-transform:none;color:var(--ml-ink-2);font-weight:600}
.d .ch .tg{width:34px;height:20px}
.d .ch .tg i{width:16px;height:16px}
.d .ch .tg[aria-checked=true] i{transform:translateX(14px)}
.d .ch .tg.mixed i{transform:translateX(7px)}
.d .gt{padding:18px 20px 8px;font-size:12px;font-weight:650;letter-spacing:.04em;color:var(--ml-accent-ink)}
.d .er{padding:11px 20px;border-bottom:1px solid var(--ml-line)}
.d .er:last-child{border-bottom:0}
.d .en{display:flex;flex-direction:column;min-width:0}
.d .en b{font-size:13.5px;font-weight:600}
.d .en small{font-size:12.5px;color:var(--ml-muted)}
.d .cs .tg{width:36px;height:22px}
.d .cs .tg i{width:18px;height:18px}
.d .cs .tg[aria-checked=true] i{transform:translateX(14px)}
.d .tg.pop{animation:nt-pop 420ms var(--ml-bounce)}
@keyframes nt-pop{0%{transform:scale(.88)}100%{transform:none}}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .pg{padding:20px 16px 24px}
  .d .lay{grid-template-columns:minmax(0,1fr)}
  .d .sn{display:none}
  .d .mh,.d .er{grid-template-columns:minmax(0,1fr) 196px;padding-left:14px;padding-right:14px}
  .d .en small{display:none}
  .d .cs .tg{width:34px}
  .d .ch .tg{width:32px}
  .d .ch{font-size:10.5px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const pg = $('.pg');
      const CH = ['Email', 'Push', 'Slack', 'In-app'];
      const G = [
        ['Activity', [['Mentions', 'Someone @mentions you', [1, 1, 1, 1]], ['Comments', 'Replies on your work', [1, 0, 1, 1]], ['Assignments', 'A task lands on you', [1, 1, 0, 1]], ['Status changes', 'Projects you follow', [0, 0, 0, 1]]]],
        ['Billing', [['Invoice paid', 'A client pays you', [1, 0, 1, 1]], ['Payment failed', 'A charge is declined', [1, 1, 1, 1]], ['Usage at 80%', 'Plan limits close in', [1, 0, 0, 1]]]],
        ['Security', [['New sign-in', 'A device you have not used', [1, 1, 0, 1]], ['Password changed', 'Any change to access', [1, 0, 0, 1]], ['New API key', 'A key is created or revoked', [1, 0, 1, 0]]]],
        ['Product', [['Product updates', 'New features and fixes', [1, 0, 0, 0]], ['Weekly digest', 'Mondays at 8:00', [1, 0, 0, 0]], ['Tips and guides', 'Short how-tos', [0, 0, 0, 0]]]],
      ];
      const state = G.map((g) => g[1].map((e) => e[2].slice()));
      const gr = $('.gr');
      const tgl = (v, label, cls) => `<button class="tg${cls || ''}" type="button" role="switch" aria-checked="${v ? 'true' : 'false'}" aria-label="${label}"><i></i></button>`;
      gr.innerHTML = G.map(
        (g, gi) =>
          `<div class="gs" data-g="${gi}"><p class="gt">${g[0]}</p>${g[1]
            .map((e, ei) => `<div class="er"><div class="en"><b>${e[0]}</b><small>${e[1]}</small></div><div class="cs">${CH.map((c, ci) => tgl(state[gi][ei][ci], `${e[0]} by ${c}`).replace('<button', `<button data-g="${gi}" data-e="${ei}" data-c="${ci}"`)).join('')}</div></div>`)
            .join('')}</div>`,
      ).join('');
      $('.chs').innerHTML = CH.map((c, ci) => `<div class="ch"><span>${c}</span>${tgl(0, `All ${c} notifications`).replace('<button', `<button data-all="${ci}"`)}</div>`).join('');
      const cell = (g, e, c) => $(`[data-g="${g}"][data-e="${e}"][data-c="${c}"]`);
      const sync = () => {
        let on = 0;
        state.forEach((g) => g.forEach((e) => e.forEach((v) => (on += v))));
        $('.tot').textContent = `${on} of 52 on`;
        CH.forEach((c, ci) => {
          const vals = state.flatMap((g) => g.map((e) => e[ci]));
          const s = vals.reduce((a, b) => a + b, 0);
          const h = $(`[data-all="${ci}"]`);
          h.setAttribute('aria-checked', String(s === vals.length));
          h.classList.toggle('mixed', s > 0 && s < vals.length);
          if (s > 0 && s < vals.length) h.setAttribute('aria-checked', 'false');
        });
      };
      const flip = (gi, ei, ci, v) => {
        state[gi][ei][ci] = v;
        const b = cell(gi, ei, ci);
        b.setAttribute('aria-checked', String(!!v));
        b.classList.remove('pop');
        void b.offsetWidth;
        b.classList.add('pop');
      };
      const toast = (m) => {
        const t = $('.toast');
        t.querySelector('span').textContent = m;
        t.classList.add('on');
        clearTimeout(t._h);
        t._h = setTimeout(() => t.classList.remove('on'), 2000);
      };
      root.addEventListener('click', (e) => {
        const b = e.target.closest('.tg');
        if (!b) return;
        if (b.dataset.all !== undefined) {
          const ci = +b.dataset.all;
          const vals = state.flatMap((g) => g.map((x) => x[ci]));
          const next = vals.every(Boolean) ? 0 : 1;
          let k = 0;
          state.forEach((g, gi) => g.forEach((x, ei) => setTimeout(() => (flip(gi, ei, ci, next), sync()), k++ * 28)));
          toast(`${next ? 'Turned on' : 'Turned off'} all ${CH[ci]} notifications`);
        } else {
          flip(+b.dataset.g, +b.dataset.e, +b.dataset.c, state[+b.dataset.g][+b.dataset.e][+b.dataset.c] ? 0 : 1);
          sync();
        }
      });
      // in-page nav: smooth scroll + scroll spy
      const sis = [...root.querySelectorAll('.si')];
      const secs = [...root.querySelectorAll('.gs')];
      const spy = () => {
        let k = 0;
        secs.forEach((s, i) => s.getBoundingClientRect().top - pg.getBoundingClientRect().top < 150 * (pg.getBoundingClientRect().height / pg.offsetHeight) && (k = i));
        if (pg.scrollTop + pg.clientHeight >= pg.scrollHeight - 4) k = secs.length - 1;
        sis.forEach((b, i) => b.classList.toggle('on', i === k));
      };
      pg.addEventListener('scroll', spy, { passive: true });
      sis.forEach((b, i) =>
        b.addEventListener('click', () => {
          const sc = pg.getBoundingClientRect().height / pg.offsetHeight || 1;
          const top = (secs[i].getBoundingClientRect().top - pg.getBoundingClientRect().top) / sc + pg.scrollTop - 62;
          pg.scrollTo({ top: i === 0 ? 0 : top, behavior: 'smooth' });
        }),
      );
      sync();

      // Autoplay: flip a whole channel from its header, hop between sections, flip single cells.
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,420px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await tap($('[data-all="1"]'), 0.5))) continue;
          await wait(1900);
          if (!(await tap(sis[1], 0.5))) continue;
          await wait(1100);
          if (!(await tap(cell(1, 1, 2), 0.5))) continue;
          await wait(900);
          if (!(await tap(sis[2], 0.5))) continue;
          await wait(1100);
          if (!(await tap(cell(2, 2, 3), 0.5))) continue;
          await wait(900);
          if (!(await tap(sis[0], 0.5))) continue;
          await wait(1100);
          if (!(await tap($('[data-all="1"]'), 0.5))) continue;
          await wait(2200);
          if (!idle()) continue;
          flip(1, 1, 2, 1);
          flip(2, 2, 3, 0);
          sync();
        }
      })();
    },
    prompt: `Build a Notification preferences page as a channels-by-events matrix with a sticky in-page nav. Full viewport under a 56px top bar; the page region is the scroller.

Layout: page title, one supporting line and a live count ("27 of 52 on"). Below, a grid of 168px and minmax(0, 1fr). Left: a sticky nav (position: sticky; top: 0) titled "On this page" with Activity, Billing, Security, Product; the item for the section in view has an accent tint. Right: one card. Its header row is sticky inside the scroller (position: sticky; top: 0, near-opaque white, hairline below) and holds the micro-label "Event" and four channel columns (Email, Push, Slack, In-app); under each channel name sits a small "all" switch for the whole column. Then four groups, each with an accent group label and rows: event name, a one-line description, and four 36x22 toggle switches aligned under the channel columns.

Behavior: switches are buttons with role="switch" and aria-checked; the thumb moves with transform and a 587ms critically damped spring and a short scale pop on change. A column "all" switch turns every cell in that column on (or off when all are already on) with a 28ms stagger between rows, shows a "mixed" state with the thumb halfway when only some cells are on, and updates the count and a toast. Nav clicks call scrollTo({ top, behavior: "smooth" }) to the group (minus the sticky header height) and a scroll listener on the scroller marks the active nav item (also the last one when scrolled to the bottom).

Accessibility: each switch has an aria-label like "Payment failed by Slack", visible focus ring, prefers-reduced-motion removes the pop and uses instant scrolling. Phone below 760px: hide the nav and descriptions, narrower 196px channel area with tiny channel labels. Plain HTML, CSS and JS, no libraries; React-friendly structure (SectionNav, MatrixHeader, EventRow, Switch). Use your brand's accent color.`,
  });

  // ---------- 6. Security and sessions: 2FA status, device list, sign out collapses the row ----------
  ML.add({
    id: 'app-settings-security',
    cat: 'app-settings',
    title: 'Security and sessions',
    sub: 'Sign out a device, the row collapses',
    html: `
<div class="app">
  ${TOP('Security')}
  <div class="body"><main class="pg"><div class="col">
    <div class="hd"><div><h1>Security</h1><p class="lead">Protect Maya's account and see where it is signed in.</p></div></div>
    <div class="chips">
      <div class="card chip"><span class="ct ok">${I(P.shield, 18)}</span><p><small>Two-step verification</small><b>On</b></p></div>
      <div class="card chip"><span class="ct">${I(P.laptop, 18)}</span><p><small>Signed-in devices</small><b class="dn">6</b></p></div>
      <div class="card chip"><span class="ct">${I(P.lock, 18)}</span><p><small>Password changed</small><b>13 Aug 2026</b></p></div>
    </div>
    <div class="cols">
      <div class="lcol">
        <section class="card meth" aria-label="Sign-in methods">
          <h2>Sign-in methods</h2>
          <div class="mr"><span class="ct">${I(P.phone, 18)}</span><p><b>Authenticator app</b><small>Added 3 Mar 2026</small></p><span class="pill ok">On</span></div>
          <div class="mr"><span class="ct">${I(P.key, 18)}</span><p><b>Passkeys</b><small>1 passkey, MacBook Touch ID</small></p><button class="btn sm" type="button">Add</button></div>
          <div class="mr"><span class="ct">${I(P.refresh, 18)}</span><p><b>Backup codes</b><small>8 of 10 left</small></p><button class="btn sm" type="button">New codes</button></div>
          <div class="mr"><span class="ct">${I(P.lock, 18)}</span><p><b>Password</b><small>Last changed 62 days ago</small></p><button class="btn sm" type="button">Change</button></div>
        </section>
        <section class="card chk" aria-label="Security checkup">
          <h2>Security checkup</h2>
          <p class="score"><b>86</b><span>out of 100, strong</span></p>
          <div class="mt"><i style="--p:.86"></i></div>
          <div class="sug">
            <div class="sg"><p>Add a passkey to your phone<small>Sign in with a fingerprint or face</small></p><button class="btn sm" type="button">Set up</button></div>
            <div class="sg"><p>Review a new location<small>iPad in Madrid, 5 days ago</small></p><button class="btn sm" type="button">Review</button></div>
          </div>
        </section>
      </div>
      <section class="card ses" aria-label="Active sessions">
        <div class="sh"><h2>Active sessions</h2><button class="btn sm red out-all" type="button">Sign out other devices</button></div>
        <div class="rows"></div>
      </section>
    </div>
  </div></main></div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .col{display:flex;flex-direction:column;gap:16px;flex:1 0 auto}
.d .chips{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d .chip{display:flex;align-items:center;gap:13px;padding:14px 16px}
.d .chip p{display:flex;flex-direction:column;min-width:0}
.d .chip small{font-size:12.5px;color:var(--ml-muted)}
.d .chip b{font-size:17px;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.d .ct{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ct.ok{background:rgba(29,185,84,.12);color:#12893C}
.d .cols{display:grid;flex:1 0 auto;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);gap:16px;min-height:0}
.d .lcol{display:flex;flex-direction:column;min-width:0}
.d .meth{display:flex;flex:none;flex-direction:column;padding:20px 22px 8px}
.d .lcol{gap:16px}
.d .chk{display:flex;flex:1;flex-direction:column;padding:20px 22px}
.d .score{display:flex;align-items:baseline;gap:8px;margin:14px 0 10px}
.d .score b{font-size:34px;line-height:1;font-weight:650;letter-spacing:-.035em;font-variant-numeric:tabular-nums}
.d .score span{font-size:13.5px;color:var(--ml-muted)}
.d .sug{display:flex;flex:1;flex-direction:column;justify-content:flex-end;gap:10px;margin-top:16px}
.d .sg{display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;background:var(--ml-surface)}
.d .sg p{display:flex;flex:1;flex-direction:column;min-width:0;font-size:13.5px;font-weight:600}
.d .sg small{font-size:12.5px;font-weight:400;color:var(--ml-muted)}
.d .mr{display:flex;align-items:center;gap:13px;flex:none;padding:14px 0;border-bottom:1px solid var(--ml-line)}
.d .mr:last-child{border-bottom:0}
.d .meth h2{margin-bottom:6px}
.d .mr p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .mr b{font-size:13.5px;font-weight:600}
.d .mr small{font-size:12.5px;color:var(--ml-muted)}
.d .ses{display:flex;flex-direction:column;min-width:0;padding:20px 22px}
.d .sh{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:6px}
.d .rows{display:flex;flex:1;flex-direction:column}
.d .rw{display:flex;align-items:center;gap:13px;padding:15px 0;border-bottom:1px solid var(--ml-line)}
.d .rw p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .rw b{font-size:13.5px;font-weight:600}
.d .rw small{overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .live{display:inline-flex;align-items:center;gap:7px}
.d .live i{position:relative;width:8px;height:8px;border-radius:50%;background:#1DB954}
.d .live i::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:set-ping 2.2s ease-out infinite}
.d .rr.fresh .rw{background:var(--ml-accent-soft);box-shadow:-12px 0 0 var(--ml-accent-soft),12px 0 0 var(--ml-accent-soft);animation:sc-fade 2s ease .5s both}
@keyframes sc-fade{to{background-color:transparent;box-shadow:0 0 0 transparent}}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .pg{padding:20px 16px 24px}
  .d .hd .lead{display:none}
  .d .chips{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .chips .chip:last-child{display:none}
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .ses{order:-1}
  .d .out-all,.d .rw > small{display:none}
  .d .meth .mr{min-height:62px}
}
@media (prefers-reduced-motion: reduce){.d .live i::after{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const IC = {
        laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
        phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
        tablet: '<rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="12" x2="12.01" y1="18" y2="18"/>',
        monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
      };
      const sess = [
        { id: 'a', ic: 'laptop', n: 'MacBook Pro', m: 'Chrome, Manila, PH', cur: true },
        { id: 'b', ic: 'phone', n: 'iPhone 16', m: 'Halden app, Cebu, PH', when: 'Active 12 min ago' },
        { id: 'c', ic: 'monitor', n: 'Office desktop', m: 'Edge, Singapore, SG', when: 'Active 2 days ago' },
        { id: 'd', ic: 'tablet', n: 'iPad', m: 'Safari, Madrid, ES', when: 'Active 5 days ago', odd: true },
        { id: 'e', ic: 'laptop', n: 'Work laptop', m: 'Firefox, Manila, PH', when: 'Active 6 days ago' },
        { id: 'f', ic: 'phone', n: 'Pixel 9', m: 'Halden app, Davao, PH', when: 'Active 9 days ago' },
      ];
      const svg = (d) => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const rowHtml = (s, cls) =>
        `<div class="rr${cls ? ' ' + cls : ''}" data-id="${s.id}"><div class="rw"><span class="ct">${svg(IC[s.ic])}</span><p><b>${s.n}</b><small>${s.m}</small></p>${
          s.cur ? '<span class="pill ok live"><i></i>This device</span>' : `${s.odd ? '<span class="pill warn">New location</span>' : `<small style="white-space:nowrap">${s.when}</small>`}<button class="btn sm so" type="button" aria-label="Sign out ${s.n}">Sign out</button>`
        }</div></div>`;
      const rows = $('.rows');
      rows.innerHTML = sess.map((s) => rowHtml(s)).join('');
      const dn = $('.dn');
      const toast = (m) => {
        const t = $('.toast');
        t.querySelector('span').textContent = m;
        t.classList.add('on');
        clearTimeout(t._h);
        t._h = setTimeout(() => t.classList.remove('on'), 2200);
      };
      const bump = () => {
        dn.textContent = rows.querySelectorAll('.rr:not(.gone)').length;
        dn.animate([{ transform: 'translateY(6px)', opacity: 0 }, { transform: 'none', opacity: 1 }], { duration: 420, easing: 'cubic-bezier(.32,.72,0,1)' });
      };
      const out = (r) => {
        if (!r || r.classList.contains('gone')) return;
        r.classList.add('gone');
        toast(`Signed out ${r.querySelector('b').textContent}`);
        bump();
      };
      rows.addEventListener('click', (e) => {
        const b = e.target.closest('.so');
        if (b) out(b.closest('.rr'));
      });
      $('.out-all').addEventListener('click', () => [...rows.querySelectorAll('.rr')].slice(1).forEach(out));
      const restore = (id) => {
        const r = rows.querySelector(`[data-id="${id}"]`);
        if (r) {
          r.classList.remove('gone');
          bump();
        }
      };

      // Autoplay: sign out the unfamiliar iPad, then bring it back; any real input hands over for 4s.
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      cur.style.transform = 'translate(740px,560px)';
      (async () => {
        let n = 0;
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const id = n % 2 ? 'c' : 'd';
          const r = rows.querySelector(`[data-id="${id}"]`);
          const b = r.querySelector('.so');
          cur.classList.toggle('off', !moveTo(b, 0.5));
          await wait(850);
          if (!idle()) continue;
          cur.classList.add('press');
          b.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          b.classList.remove('press');
          b.click();
          await wait(3800);
          if (idle()) restore(id);
          n++;
          await wait(2600);
        }
      })();
    },
    prompt: `Build a Security settings page: a status strip, sign-in methods and an active sessions list where signing out a device collapses its row. Full viewport under a 56px top bar; the page region scrolls.

Layout: title and one supporting line, then a row of three small status cards (Two-step verification: On with a green shield tile, Signed-in devices: a tabular count, Password changed: a date), each with a 38px rounded icon tile. Below, a two-column grid (1fr / 1.25fr) that fills the remaining height. Left card "Sign-in methods": four evenly spread rows (authenticator app with an On pill, passkeys with an Add button, backup codes "8 of 10 left" with a New codes button, password with last-changed text and a Change button), each with an icon tile, title and muted detail. Right card "Active sessions": a header with a red-text "Sign out other devices" button and rows with a device icon tile, device name, "Browser, City, Country", and either a green "This device" pill with a pinging dot or an "Active 2 days ago" label plus a small Sign out button. An unfamiliar location shows an amber "New location" pill instead of the time.

Behavior: Sign out collapses the row with grid-template-rows 1fr to 0fr plus a fade (450ms, ease-out), the device count in the status card updates with a small rise-in, and a toast confirms "Signed out iPad". "Sign out other devices" collapses every row except the current device. The current device row can never be signed out.

Accessibility: sign out buttons carry the device name in aria-label, the toast is role="status", focus rings on every button. Phone below 760px: sessions first, status cards two per row, methods list below, the bulk button hidden. Respect prefers-reduced-motion (no pinging). Plain HTML, CSS and JS, no libraries; React-friendly structure (StatusCard, MethodRow, SessionList, SessionRow, Toast). Use your brand's accent color; amber and green only as tiny status accents.`,
  });

  // ---------- 7. Connected apps: settings as a modal panel over the app, manage drawer, confirm disconnect ----------
  ML.add({
    id: 'app-settings-connected-apps',
    cat: 'app-settings',
    title: 'Connected apps panel',
    sub: 'Manage drawer, confirm to disconnect',
    html: `
<div class="app">
  <div class="bg" aria-hidden="true">
    <div class="bs"><span class="mark">${I(P.mark, 15)}</span><i></i><i></i><i></i><i></i><i></i></div>
    <div class="bm"><div class="bt"><i></i><i></i></div><div class="bk"><i></i><i></i><i></i></div><div class="bw"><i></i><i></i></div></div>
  </div>
  <div class="ov on">
    <section class="pn" role="dialog" aria-modal="true" aria-label="Integrations">
      <header class="ph"><div><h2>Integrations</h2><p class="lead">Connect Halden to the tools your team already uses.</p></div><button class="ib xx" type="button" aria-label="Close">${I(P.x, 18)}</button></header>
      <div class="tb">
        <div class="seg" style="--n:3;--i:0" role="group" aria-label="Filter apps"><span class="hl"></span><button class="on" type="button" data-f="all">All 9</button><button type="button" data-f="on">Connected</button><button type="button" data-f="off">Available</button></div>
        <label class="inp sr">${I(P.search, 16)}<input placeholder="Search apps" aria-label="Search apps"></label>
      </div>
      <div class="tiles"></div>
      <aside class="drw" aria-label="Manage app">
        <div class="dh"><span class="ti dic"></span><p><b class="dnm"></b><small class="dsub"></small></p><button class="ib dx" type="button" aria-label="Close">${I(P.x, 18)}</button></div>
        <p class="dl">Permissions</p>
        <div class="pm"><div><b>Read data</b><small>See records from Halden</small></div><button class="tg" type="button" role="switch" aria-checked="true" aria-label="Read data"><i></i></button></div>
        <div class="pm"><div><b>Create and edit</b><small>Write back to Halden</small></div><button class="tg" type="button" role="switch" aria-checked="true" aria-label="Create and edit"><i></i></button></div>
        <div class="pm"><div><b>Send notifications</b><small>Post updates to your team</small></div><button class="tg" type="button" role="switch" aria-checked="false" aria-label="Send notifications"><i></i></button></div>
        <div class="dfoot">
          <div class="cf"><div><p class="cq"><b>Disconnect <span class="cn"></span>?</b> Halden stops syncing and the app loses access to your workspace.</p><div class="ca"><button class="btn sm keep" type="button">Keep it</button><button class="cta red sm sure" type="button">Disconnect</button></div></div></div>
          <button class="btn red dis" type="button">Disconnect</button>
        </div>
      </aside>
    </section>
  </div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .bg{position:absolute;inset:0;display:grid;grid-template-columns:200px minmax(0,1fr);background:var(--ml-surface)}
.d .bs{display:flex;flex-direction:column;gap:14px;padding:16px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .bs .mark{margin-bottom:10px}
.d .bs i{display:block;height:12px;border-radius:6px;background:var(--ml-bar)}
.d .bs i:nth-child(3){width:70%}.d .bs i:nth-child(5){width:55%}
.d .bm{display:flex;flex-direction:column;gap:18px;padding:24px}
.d .bt{display:flex;gap:14px}.d .bt i{display:block;height:22px;width:180px;border-radius:7px;background:var(--ml-bar)}.d .bt i+i{width:90px;background:var(--ml-accent-line)}
.d .bk{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.d .bk i{display:block;height:110px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .bw{display:grid;flex:1;grid-template-rows:1fr 1fr;gap:16px}.d .bw i{display:block;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .ov{background:rgba(35,15,10,.38);padding:28px}
.d .pn{position:relative;display:flex;flex-direction:column;width:min(900px,100%);height:min(660px,100%);padding:24px 26px;border-radius:22px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);overflow:hidden}
.d .ph{display:flex;align-items:flex-start;justify-content:space-between;gap:12px}
.d .ph h2{font-size:20px;letter-spacing:-.02em}
.d .tb{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:18px 0 16px}
.d .sr{width:230px;height:38px}
.d .tiles{display:grid;flex:1;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:minmax(0,1fr);gap:14px;min-height:0;overflow-y:auto;scrollbar-width:thin;padding:2px}
.d .tl{display:flex;flex-direction:column;gap:12px;padding:16px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow .25s ease}
.d .tl:hover{transform:translateY(-2px);box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow)}
.d .tl.hid{display:none}
.d .tl .th{display:flex;align-items:center;gap:12px}
.d .ti{display:grid;flex:none;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--ml-accent-soft);color:var(--ml-accent);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .tl p{display:flex;flex-direction:column;min-width:0}
.d .tl b{font-size:14px;font-weight:650}
.d .tl small{font-size:12.5px;color:var(--ml-muted)}
.d .tl .ds{flex:1;font-size:13px;color:var(--ml-ink-2);line-height:1.4}
.d .tl .tf{display:flex;align-items:center;justify-content:space-between;gap:8px}
.d .st2{display:inline-flex;align-items:center;gap:6px;font-size:12.5px;font-weight:600;color:#12893C}
.d .st2 i{width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .tl.off .st2{color:var(--ml-muted)}
.d .tl.off .st2 i{background:var(--ml-bar)}
.d .tl.flip{animation:ca-flip 600ms var(--ml-spring)}
@keyframes ca-flip{0%{transform:scale(.97)}100%{transform:none}}
.d .drw{position:absolute;top:0;right:0;bottom:0;z-index:5;display:flex;flex-direction:column;width:min(360px,100%);padding:22px;background:var(--ml-bg);box-shadow:-1px 0 0 var(--ml-line),-24px 0 48px rgba(35,15,10,.12);transform:translateX(104%);visibility:hidden;transition:transform var(--ml-spring-dur) var(--ml-spring),visibility 0s .6s}
.d .drw.on{transform:none;visibility:visible;transition-delay:0s}
.d .dh{display:flex;align-items:center;gap:12px;padding-bottom:16px;border-bottom:1px solid var(--ml-line)}
.d .dh p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .dh b{font-size:16px;font-weight:650}
.d .dh small{font-size:12.5px;color:var(--ml-muted)}
.d .dl{margin:18px 0 4px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .pm{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:13px 0;border-bottom:1px solid var(--ml-line)}
.d .pm div{display:flex;flex-direction:column}
.d .pm b{font-size:13.5px;font-weight:600}
.d .pm small{font-size:12.5px;color:var(--ml-muted)}
.d .dfoot{display:flex;flex:1;flex-direction:column;justify-content:flex-end;gap:12px}
.d .cf{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .4s var(--ml-ease),opacity .25s ease}
.d .cf.on{grid-template-rows:1fr;opacity:1}
.d .cf > div{min-height:0;overflow:hidden}
.d .cq{padding:14px;border-radius:12px;background:rgba(255,59,48,.06);box-shadow:inset 0 0 0 1px rgba(255,59,48,.2);font-size:13px;line-height:1.45;color:var(--ml-ink-2)}
.d .cq b{color:#D70015}
.d .ca{display:flex;justify-content:flex-end;gap:8px;margin-top:10px}
.d .dis{width:100%}
@container scr (max-width: 760px){
  .d .bg{display:none}
  .d .ov{padding:0}
  .d .pn{width:100%;height:100%;border-radius:0;padding:20px 16px}
  .d .ph .lead{display:none}
  .d .tb{flex-direction:column;align-items:stretch}
  .d .sr{display:none}
  .d .seg{display:grid}
  .d .tiles{grid-template-columns:minmax(0,1fr);grid-auto-rows:auto}
  .d .drw{width:100%}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const svg = (d) => `<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = {
        cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
        pay: '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
        cloud: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>',
        mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
        chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
        chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
        map: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
        form: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
        doc: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/>',
      };
      const apps = [
        { n: 'Calendar', d: 'Sync due dates and meetings both ways.', ic: 'cal', on: true, s: 'Synced 3 min ago' },
        { n: 'Payments', d: 'Collect invoice payments by card or bank.', ic: 'pay', on: true, s: 'Synced 1 min ago' },
        { n: 'Storage', d: 'Attach files from your shared drive.', ic: 'cloud', on: true, s: 'Synced 12 min ago' },
        { n: 'Mail', d: 'Send invoices and replies from your domain.', ic: 'mail', on: true, s: 'Synced 5 min ago' },
        { n: 'Team chat', d: 'Post project updates to a channel.', ic: 'chat', on: true, s: 'Synced 2 min ago' },
        { n: 'Analytics', d: 'Send usage events to your dashboards.', ic: 'chart', on: true, s: 'Synced 9 min ago' },
        { n: 'Maps', d: 'Turn client addresses into route links.', ic: 'map', on: false },
        { n: 'Forms', d: 'Create leads from website form entries.', ic: 'form', on: false },
        { n: 'Docs', d: 'Draft proposals from live project data.', ic: 'doc', on: false },
      ];
      const tiles = $('.tiles');
      const drw = $('.drw');
      let filter = 'all';
      let q = '';
      let open = -1;
      const toast = (m) => {
        const t = $('.toast');
        t.querySelector('span').textContent = m;
        t.classList.add('on');
        clearTimeout(t._h);
        t._h = setTimeout(() => t.classList.remove('on'), 2200);
      };
      const tile = (a, i) =>
        `<div class="tl${a.on ? '' : ' off'}" data-i="${i}"><div class="th"><span class="ti">${svg(IC[a.ic])}</span><p><b>${a.n}</b><small>${a.on ? a.s : 'Not connected'}</small></p></div><p class="ds">${a.d}</p><div class="tf"><span class="st2"><i></i>${a.on ? 'Connected' : 'Off'}</span>${a.on ? '<button class="btn sm mg" type="button" aria-label="Manage ' + a.n + '">Manage</button>' : '<button class="btn sm go cn" type="button" aria-label="Connect ' + a.n + '"><span class="lbl">Connect</span><span class="busy">Linking</span><span class="done">Linked</span></button>'}</div></div>`;
      const render = () => {
        tiles.innerHTML = apps.map(tile).join('');
        const seg = $('[data-f=all]');
        seg.textContent = `All ${apps.length}`;
        filt();
      };
      const filt = () =>
        [...tiles.children].forEach((t) => {
          const a = apps[+t.dataset.i];
          t.classList.toggle('hid', !((filter === 'all' || (filter === 'on' && a.on) || (filter === 'off' && !a.on)) && (!q || a.n.toLowerCase().includes(q))));
        });
      const showDrawer = (i) => {
        const a = apps[i];
        open = i;
        $('.dic').innerHTML = svg(IC[a.ic]);
        $('.dnm').textContent = a.n;
        $('.dsub').textContent = `Connected as maya@northgate.co`;
        $('.cn').textContent = a.n;
        $('.cf').classList.remove('on');
        $('.dis').style.display = '';
        drw.classList.add('on');
      };
      const hideDrawer = () => {
        drw.classList.remove('on');
        open = -1;
      };
      tiles.addEventListener('click', (e) => {
        const m = e.target.closest('.mg');
        const c = e.target.closest('.cn');
        if (m) showDrawer(+m.closest('.tl').dataset.i);
        if (c && !c.classList.contains('loading')) {
          const i = +c.closest('.tl').dataset.i;
          c.classList.add('loading');
          setTimeout(() => {
            c.classList.replace('loading', 'ok');
            setTimeout(() => {
              apps[i].on = true;
              apps[i].s = 'Synced just now';
              render();
              const t = tiles.querySelector(`[data-i="${i}"]`);
              t.classList.add('flip');
              toast(`${apps[i].n} connected`);
            }, 600);
          }, 900);
        }
      });
      $('.dx').addEventListener('click', hideDrawer);
      root.querySelectorAll('.tg').forEach((t) => t.addEventListener('click', () => t.setAttribute('aria-checked', String(t.getAttribute('aria-checked') !== 'true'))));
      $('.dis').addEventListener('click', () => {
        $('.cf').classList.add('on');
        $('.dis').style.display = 'none';
      });
      $('.keep').addEventListener('click', () => {
        $('.cf').classList.remove('on');
        $('.dis').style.display = '';
      });
      $('.sure').addEventListener('click', () => {
        const i = open;
        if (i < 0) return;
        hideDrawer();
        apps[i].on = false;
        render();
        tiles.querySelector(`[data-i="${i}"]`).classList.add('flip');
        toast(`${apps[i].n} disconnected`);
      });
      root.addEventListener('keydown', (e) => e.key === 'Escape' && hideDrawer());
      const seg = $('.seg');
      root.querySelectorAll('[data-f]').forEach((b, i) =>
        b.addEventListener('click', () => {
          filter = b.dataset.f;
          seg.style.setProperty('--i', i);
          root.querySelectorAll('[data-f]').forEach((x) => x.classList.toggle('on', x === b));
          filt();
        }),
      );
      $('.sr input').addEventListener('input', (e) => {
        q = e.target.value.trim().toLowerCase();
        filt();
      });
      render();

      // Autoplay: open Payments, disconnect it with the confirm step, then connect it again.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !root.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const idx = apps.findIndex((a) => a.n === 'Payments');
          if (apps[idx].on) {
            if (!(await tap(tiles.querySelector(`[data-i="${idx}"] .mg`), 0.5))) continue;
            await wait(1300);
            if (!(await tap($('.dis'), 0.5))) continue;
            await wait(900);
            if (!(await tap($('.sure'), 0.5))) continue;
            await wait(2200);
          } else {
            if (!(await tap(tiles.querySelector(`[data-i="${idx}"] .cn`), 0.5))) continue;
            await wait(3600);
          }
        }
      })();
    },
    prompt: `Build an Integrations settings screen presented as a modal panel over the app (a settings panel, not a page). Full viewport: the app behind it is visible and dimmed.

Layout: behind, a faux app skeleton (sidebar bars, top bar, card blocks) under a 38% dark scrim. Centered panel, width min(900px, 100%), height min(660px, 100%), 22px radius, large soft shadow. Header: title "Integrations", one line of text, a close icon button. Toolbar: a three-option segmented filter (All 9, Connected, Available; one white highlight that slides with transform) and a search field. Body: a 3-column grid of app tiles that fills the remaining height (grid-auto-rows: minmax(0, 1fr), scrolls if it must). Each tile: a 42px rounded tint icon tile (generic Lucide-style icons, never real brand logos), name, a one-line description, a footer with a status (green dot Connected, grey Off) and a Manage button or a Connect button.

Behavior: Manage slides a 360px drawer in from the panel's right edge (transform: translateX(104%) to 0, 587ms spring, visibility toggled after the transition) with the app icon and name, "Connected as ...", three permission switches (role="switch") and a red Disconnect button at the bottom. Disconnect does not act at once: a confirm block expands above it (grid-template-rows 0fr to 1fr) that says what will happen with Keep it and a red Disconnect button. Confirming closes the drawer, flips the tile to Off with a small scale settle and shows a toast. A Connect button runs a sheen (no circular spinner) and turns the tile to Connected. Filters and search really filter tiles.

Accessibility: role="dialog" aria-modal, Escape closes the drawer, buttons carry the app name in aria-label, focus rings. Phone below 760px: the panel becomes full screen, tiles one per row, search hidden, drawer full width. Respect prefers-reduced-motion. Plain HTML, CSS and JS, no libraries; React-friendly structure (IntegrationsPanel, AppTile, ManageDrawer, ConfirmBlock, Toast). Use your brand's accent color.`,
  });

  // ---------- 8. Appearance: theme cards, blue accent steps, density, live preview ----------
  ML.add({
    id: 'app-settings-appearance',
    cat: 'app-settings',
    title: 'Appearance and theme',
    sub: 'Theme, accent and density, live preview',
    html: `
<div class="app">
  ${TOP('Appearance')}
  <div class="body"><main class="pg"><div class="col">
    <div class="hd"><h1>Appearance</h1><p class="lead">Make Halden look the way you like to work. Changes show on the right.</p></div>
    <div class="cols">
      <section class="card opts" aria-label="Appearance options">
        <p class="ol">Theme</p>
        <div class="themes" role="radiogroup" aria-label="Theme">
          <button class="th on" type="button" role="radio" aria-checked="true" data-t="light"><span class="sw lt"><i></i><i></i><i></i></span><span class="tn">${I(P.sun, 15)}Light<s>${I(P.check, 12, 3)}</s></span></button>
          <button class="th" type="button" role="radio" aria-checked="false" data-t="dark"><span class="sw dk"><i></i><i></i><i></i></span><span class="tn">${I(P.moon, 15)}Dark<s>${I(P.check, 12, 3)}</s></span></button>
          <button class="th" type="button" role="radio" aria-checked="false" data-t="system"><span class="sw sy"><i></i><i></i><i></i></span><span class="tn">${I(P.monitor, 15)}System<s>${I(P.check, 12, 3)}</s></span></button>
        </div>
        <p class="ol">Accent <b class="an">Blue</b></p>
        <div class="accs" role="radiogroup" aria-label="Accent color"></div>
        <p class="ol">Density</p>
        <div class="seg dseg" style="--n:2;--i:0" role="group" aria-label="Density"><span class="hl"></span><button class="on" type="button" data-d="comfy">Comfortable</button><button type="button" data-d="compact">Compact</button></div>
        <p class="ol">Text size</p>
        <div class="seg zseg" style="--n:3;--i:1" role="group" aria-label="Text size"><span class="hl"></span><button type="button" data-z=".92">Small</button><button class="on" type="button" data-z="1">Default</button><button type="button" data-z="1.1">Large</button></div>
        <div class="pr"><div><b>Show avatars in lists</b><small>Turn off for a quieter view</small></div><button class="tg avt" type="button" role="switch" aria-checked="true" aria-label="Show avatars"><i></i></button></div>
      </section>
      <section class="card prev" aria-label="Preview">
        <div class="ph2"><span class="ol">Live preview</span><span class="pill live2">Light, Blue, Comfortable</span></div>
        <div class="pv" style="--pb:#FFFFFF;--ps:#FAF6F2;--pi:#1D1D1F;--pm:#86868B;--pl:#EAE1D9;--pa:#FF4433;--ph:48px">
          <div class="pb1"><span class="pmk"></span><i class="pn1 on"></i><i class="pn1"></i><i class="pn1"></i><i class="pn1"></i></div>
          <div class="pb2">
            <div class="pt"><b>Projects</b><span class="pbtn">New project</span></div>
            <div class="pls"></div>
          </div>
        </div>
      </section>
    </div>
  </div></main></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .col{display:flex;flex:1 0 auto;flex-direction:column;gap:18px}
.d .cols{display:grid;flex:1 0 auto;grid-template-columns:minmax(0,400px) minmax(0,1fr);gap:18px}
.d .opts{display:flex;flex-direction:column;padding:22px}
.d .ol{display:flex;align-items:baseline;justify-content:space-between;margin:20px 0 10px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .ol:first-child{margin-top:0}
.d .ol b{font-weight:650;letter-spacing:0;text-transform:none;font-size:12.5px;color:var(--ml-ink-2)}
.d .themes{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
.d .th{display:flex;flex-direction:column;gap:9px;padding:7px 7px 10px;border:0;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:left;transition:box-shadow .25s ease,transform 90ms ease-out}
.d .th:hover{box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .th.on{box-shadow:inset 0 0 0 2px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .th:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .sw{position:relative;display:block;height:62px;border-radius:9px;overflow:hidden;box-shadow:inset 0 0 0 1px rgba(35,15,10,.08)}
.d .sw i{position:absolute;left:8px;height:7px;border-radius:4px}
.d .sw i:nth-child(1){top:10px;width:38%}.d .sw i:nth-child(2){top:24px;width:62%}.d .sw i:nth-child(3){top:38px;width:48%}
.d .sw.lt{background:#FAF6F2}.d .sw.lt i{background:#E2D6CC}.d .sw.lt i:nth-child(1){background:#FF4433}
.d .sw.dk{background:#10141F}.d .sw.dk i{background:#2A3246}.d .sw.dk i:nth-child(1){background:#FF7A3D}
.d .sw.sy{background:linear-gradient(105deg,#FAF6F2 0 50%,#10141F 50% 100%)}.d .sw.sy i{background:#9AA6BD}.d .sw.sy i:nth-child(1){background:#FF4433}
.d .tn{display:flex;align-items:center;gap:7px;padding:0 3px;font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .tn s{display:grid;place-items:center;width:18px;height:18px;margin-left:auto;border-radius:50%;background:var(--ml-accent);color:#fff;text-decoration:none;opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .th.on .tn s{opacity:1;transform:none}
.d .accs{display:flex;gap:12px}
.d .ac{position:relative;display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:50%;background:var(--c);color:#fff;box-shadow:inset 0 0 0 1px rgba(35,15,10,.1);transition:transform 90ms ease-out}
.d .ac::before{content:"";position:absolute;inset:-5px;border-radius:50%;box-shadow:0 0 0 2px var(--c);opacity:0;transform:scale(.85);transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .ac.on::before{opacity:1;transform:none}
.d .ac svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .ac.on svg{opacity:1;transform:none}
.d .ac:focus-visible{outline:2px solid var(--ml-ink);outline-offset:5px}
.d .dseg,.d .zseg{align-self:flex-start}
.d .pls{zoom:var(--z,1)}
.d .pr{display:flex;align-items:center;justify-content:space-between;gap:14px;margin-top:auto;padding-top:18px;border-top:1px solid var(--ml-line)}
.d .pr div{display:flex;flex-direction:column}
.d .pr b{font-size:14px;font-weight:600}
.d .pr small{font-size:13px;color:var(--ml-muted)}
.d .prev{display:flex;flex-direction:column;min-width:0;padding:18px}
.d .ph2{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.d .ph2 .ol{margin:0}
.d .pv{display:grid;flex:1;grid-template-columns:76px minmax(0,1fr);min-height:300px;border-radius:14px;background:var(--pb);box-shadow:inset 0 0 0 1px var(--pl),0 14px 30px rgba(35,15,10,.1);overflow:hidden;color:var(--pi);transition:background-color .4s ease,color .4s ease,box-shadow .4s ease}
.d .pb1{display:flex;flex-direction:column;gap:10px;padding:14px 12px;background:var(--ps);border-right:1px solid var(--pl);transition:background-color .4s ease,border-color .4s ease}
.d .pmk{width:26px;height:26px;margin-bottom:6px;border-radius:8px;background:var(--pa);transition:background-color .4s ease}
.d .pn1{display:block;height:9px;border-radius:5px;background:var(--pl);transition:background-color .4s ease}
.d .pn1.on{background:var(--pa)}
.d .pb2{display:flex;flex-direction:column;min-width:0;padding:16px 18px}
.d .pt{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:6px}
.d .pt b{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .pbtn{padding:7px 12px;border-radius:9px;background:var(--pa);font-size:12px;font-weight:600;color:#fff;transition:background-color .4s ease}
.d .pls{display:flex;flex:1;flex-direction:column}
.d .pi{display:flex;flex:1;align-items:center;gap:11px;min-height:var(--ph);max-height:calc(var(--ph) + 56px);border-bottom:1px solid var(--pl);transition:min-height var(--ml-spring-dur) var(--ml-spring),border-color .4s ease}
.d .pv.compact .pi{min-height:34px;max-height:34px}
.d .pi:last-child{border-bottom:0}
.d .pa{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--ps);color:var(--pa);font-size:10.5px;font-weight:650;transition:background-color .4s ease,color .4s ease,opacity .3s ease}
.d .pv.noav .pa{display:none}
.d .pi p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .pi b{font-size:13px;font-weight:600}
.d .pi small{font-size:12px;color:var(--pm)}
.d .pv.compact .pi small{display:none}
.d .pg2{padding:3px 9px;border-radius:999px;background:var(--ps);font-size:11px;font-weight:600;color:var(--pa);transition:background-color .4s ease,color .4s ease}
.d .pm2{font:500 11.5px/1 var(--ml-mono);color:var(--pm)}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .pg{padding:20px 16px 24px}
  .d .hd .lead{display:none}
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .accs{flex-wrap:wrap}
  .d .pv{min-height:260px;grid-template-columns:52px minmax(0,1fr)}
  .d .pm2{display:none}
}
@media (prefers-reduced-motion: reduce){.d .pv,.d .pb1,.d .pi{transition:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const pv = $('.pv');
      const THEMES = {
        light: { '--pb': '#FFFFFF', '--ps': '#FAF6F2', '--pi': '#1D1D1F', '--pm': '#86868B', '--pl': '#EAE1D9' },
        dark: { '--pb': '#10141F', '--ps': '#1A2030', '--pi': '#F2F5FA', '--pm': '#8A93A6', '--pl': '#262E42' },
      };
      THEMES.system = THEMES.light;
      const ACC = [['Sky', '#6FB3FF'], ['Azure', '#FF7A3D'], ['Blue', '#FF4433'], ['Cobalt', '#B3150F'], ['Navy', '#003A94']];
      const items = [
        ['MR', 'Solace rebrand', 'Brand identity, due Fri 16 Oct', 'In review', '12 tasks'],
        ['TL', 'Northgate portal', 'Client dashboard, due Tue 20 Oct', 'On track', '8 tasks'],
        ['AT', 'Meridian app', 'Mobile build, due Fri 23 Oct', 'On track', '21 tasks'],
        ['DO', 'Kestrel onboarding', 'Setup and training, due Thu 29 Oct', 'Planning', '5 tasks'],
        ['PN', 'Brightline site', 'Website refresh, due Mon 2 Nov', 'On track', '9 tasks'],
      ];
      $('.pls').innerHTML = items.map((r) => `<div class="pi"><span class="pa">${r[0]}</span><p><b>${r[1]}</b><small>${r[2]}</small></p><span class="pg2">${r[3]}</span><span class="pm2">${r[4]}</span></div>`).join('');
      $('.accs').innerHTML = ACC.map((a, i) => `<button class="ac${i === 2 ? ' on' : ''}" type="button" role="radio" aria-checked="${i === 2}" aria-label="${a[0]}" data-a="${i}" style="--c:${a[1]}"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></button>`).join('');
      const st = { t: 'light', a: 2, d: 'comfy' };
      const apply = () => {
        const th = THEMES[st.t];
        Object.keys(th).forEach((k) => pv.style.setProperty(k, th[k]));
        pv.style.setProperty('--pa', ACC[st.a][1]);
        pv.classList.toggle('compact', st.d === 'compact');
        root.querySelectorAll('.th').forEach((b) => {
          b.classList.toggle('on', b.dataset.t === st.t);
          b.setAttribute('aria-checked', String(b.dataset.t === st.t));
        });
        root.querySelectorAll('.ac').forEach((b, i) => {
          b.classList.toggle('on', i === st.a);
          b.setAttribute('aria-checked', String(i === st.a));
        });
        $('.an').textContent = ACC[st.a][0];
        $('.live2').textContent = `${st.t[0].toUpperCase() + st.t.slice(1)}, ${ACC[st.a][0]}, ${st.d === 'compact' ? 'Compact' : 'Comfortable'}`;
      };
      root.querySelectorAll('.th').forEach((b) => b.addEventListener('click', () => ((st.t = b.dataset.t), apply())));
      root.querySelectorAll('.ac').forEach((b) => b.addEventListener('click', () => ((st.a = +b.dataset.a), apply())));
      const seg = $('.dseg');
      root.querySelectorAll('[data-d]').forEach((b, i) =>
        b.addEventListener('click', () => {
          st.d = b.dataset.d;
          seg.style.setProperty('--i', i);
          root.querySelectorAll('[data-d]').forEach((x) => x.classList.toggle('on', x === b));
          apply();
        }),
      );
      const zseg = $('.zseg');
      root.querySelectorAll('[data-z]').forEach((b, i) =>
        b.addEventListener('click', () => {
          pv.style.setProperty('--z', b.dataset.z);
          zseg.style.setProperty('--i', i);
          root.querySelectorAll('[data-z]').forEach((x) => x.classList.toggle('on', x === b));
        }),
      );
      $('.avt').addEventListener('click', (e) => {
        const on = e.currentTarget.getAttribute('aria-checked') !== 'true';
        e.currentTarget.setAttribute('aria-checked', String(on));
        pv.classList.toggle('noav', !on);
      });
      apply();

      // Autoplay: go dark, pick a lighter blue, compact, then put everything back.
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(120);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(700px,600px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const steps = [
            ['.th[data-t=dark]', 1500],
            ['.ac[data-a="1"]', 1300],
            ['[data-d=compact]', 2000],
            ['.th[data-t=light]', 1300],
            ['.ac[data-a="2"]', 1100],
            ['[data-d=comfy]', 2600],
          ];
          let ok = true;
          for (const [sel, pause] of steps) {
            if (!(await tap($(sel), 0.5))) {
              ok = false;
              break;
            }
            await wait(pause);
          }
          if (!ok) await wait(600);
        }
      })();
    },
    prompt: `Build an Appearance settings page: theme cards, accent steps, a density control and a live preview that updates as you choose. Full viewport under a 56px top bar; the page region scrolls.

Layout: title and one supporting line, then a two-column grid (minmax(0, 400px) and minmax(0, 1fr)) that fills the page height. Left card: a Theme radiogroup of three cards (Light, Dark, System), each with a small drawn mini-UI swatch (three bars on a light, dark or half-and-half field), an icon, a label and a check dot that pops in with a bounce curve; the selected card gets a 2px accent ring plus a 4px soft ring. Accent: five round 40px swatches in blue steps only (sky, azure, blue, cobalt, navy) in a radiogroup; the selected one shows a ring that scales in and a check. Density: a two-option segmented control (Comfortable, Compact). A last row has a "Show avatars in lists" switch. Right card: a live preview of a miniature app (sidebar of bars with one active bar, a header with a title and an accent button, five project rows with initials avatar, name, due line, status pill, task count) plus a caption pill naming the current choice.

Behavior: store the choice in an object and apply it by setting CSS custom properties on the preview root (--bg, --surface, --ink, --muted, --line, --accent); every color in the preview reads those variables and transitions background-color and color over 400ms, so a theme switch cross-fades. Compact reduces row min-height from 48px to 34px (spring transition) and hides the due line; the avatar switch hides avatars. System mirrors the device by reading matchMedia("(prefers-color-scheme: dark)"). In a real app also persist the choice to localStorage and set data-theme on the document root.

Accessibility: radiogroups with role="radio" and aria-checked, arrow-key support, visible focus rings, accent swatches labelled by name. Phone below 760px: one column, the preview below the options. Respect prefers-reduced-motion. Plain HTML, CSS and JS, no libraries; React-friendly structure (ThemePicker, AccentPicker, DensityControl, PreviewPane). Use your brand's accent steps.`,
  });

  // ---------- 9. Danger zone: type-to-confirm delete ----------
  ML.add({
    id: 'app-settings-danger-zone',
    cat: 'app-settings',
    title: 'Danger zone delete',
    sub: 'Delete unlocks only on an exact match',
    html: `
<div class="app">
  ${TOP('Danger zone')}
  <div class="body"><main class="pg"><div class="col">
    <div class="hd"><h1>Danger zone</h1><p class="lead">Irreversible actions for the Halden workspace. Only owners can see this page.</p></div>
    <div class="cols">
      <aside class="card ws" aria-label="Workspace summary">
        <div class="wh"><span class="mark big">${I(P.mark, 22)}</span><p><b>Halden</b><small>Northgate workspace</small></p></div>
        <dl class="ds"><div><dt>Plan</dt><dd>Growth</dd></div><div><dt>Members</dt><dd>8</dd></div><div><dt>Projects</dt><dd>23</dd></div><div><dt>Clients</dt><dd>58</dd></div><div><dt>Files</dt><dd>4,120</dd></div><div><dt>Created</dt><dd>12 Jan 2025</dd></div></dl>
      </aside>
      <div class="rcol">
        <section class="card acts2" aria-label="Other actions">
          <div class="ar"><span class="ct">${I(P.users, 18)}</span><p><b>Transfer ownership</b><small>Hand the workspace to another admin</small></p><button class="btn sm" type="button">Transfer</button></div>
          <div class="ar"><span class="ct">${I(P.download, 18)}</span><p><b>Export all data</b><small>A zip of projects, clients and invoices</small></p><button class="btn sm" type="button">Export</button></div>
          <div class="ar"><span class="ct">${I(P.cloud, 18)}</span><p><b>Archive workspace</b><small>Read only for everyone, restore any time</small></p><button class="btn sm" type="button">Archive</button></div>
        </section>
        <section class="card del" aria-label="Delete workspace">
          <div class="d1">
            <div class="dh"><span class="ct bad">${I(P.trash, 18)}</span><p><b>Delete this workspace</b><small>This removes everything for all members and cannot be undone.</small></p></div>
            <ul class="cons"><li><b>23</b> projects and <b>58</b> clients</li><li><b>4,120</b> files and every invoice</li><li>Access for <b>8</b> members and 6 API keys</li></ul>
            <label class="fld"><span>Type <code>halden</code> to confirm</span><span class="inp"><input class="cfm" autocomplete="off" spellcheck="false" placeholder="halden" aria-describedby="dz-hint"><i class="mt2">${I(P.check, 16, 2.8)}</i></span></label>
            <p class="hint" id="dz-hint" aria-live="polite">Case sensitive. The button unlocks on an exact match.</p>
            <div class="dact"><button class="cta red go delb" type="button" disabled><span class="lbl">Delete workspace</span><span class="busy">Deleting</span><span class="done">${I(P.check, 15, 2.8)}Scheduled</span></button></div>
          </div>
          <div class="d2">
            <span class="ct ok2">${I(P.check, 20, 2.6)}</span>
            <p><b>Halden is scheduled for deletion</b><small>Everything is removed on Friday 13 November 2026. Restore it any time before then.</small></p>
            <button class="btn undo" type="button">Restore workspace</button>
          </div>
        </section>
      </div>
    </div>
  </div></main></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .col{display:flex;flex:1 0 auto;flex-direction:column;gap:18px;max-width:1040px;width:100%;margin:0 auto}
.d .cols{display:grid;flex:1 0 auto;grid-template-columns:260px minmax(0,1fr);gap:16px}
.d .ws{padding:20px;align-self:start}
.d .wh{display:flex;align-items:center;gap:12px;padding-bottom:16px;border-bottom:1px solid var(--ml-line)}
.d .mark.big{width:44px;height:44px;border-radius:13px}
.d .wh p{display:flex;flex-direction:column}
.d .wh b{font-size:16px;font-weight:650}
.d .wh small{font-size:12.5px;color:var(--ml-muted)}
.d .ds{display:flex;flex-direction:column}
.d .ds div{display:flex;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--ml-line);font-size:13.5px}
.d .ds div:last-child{border-bottom:0;padding-bottom:0}
.d .ds dt{color:var(--ml-muted)}
.d .ds dd{font-weight:600;font-variant-numeric:tabular-nums}
.d .rcol{display:flex;flex-direction:column;gap:16px;min-width:0}
.d .acts2{padding:6px 20px}
.d .ar{display:flex;align-items:center;gap:13px;padding:14px 0;border-bottom:1px solid var(--ml-line)}
.d .ar:last-child{border-bottom:0}
.d .ar p,.d .dh p,.d .d2 p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .ar b,.d .dh b,.d .d2 b{font-size:14px;font-weight:650}
.d .ar small,.d .dh small,.d .d2 small{font-size:13px;color:var(--ml-muted)}
.d .ct{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ct.bad{background:rgba(255,59,48,.1);color:#D70015}
.d .ct.ok2{width:44px;height:44px;border-radius:50%;background:rgba(29,185,84,.12);color:#12893C}
.d .del{display:grid;flex:1 0 auto;padding:22px;box-shadow:inset 0 0 0 1px rgba(255,59,48,.28),var(--ml-shadow)}
.d .d1,.d .d2{grid-area:1/1;transition:opacity .35s ease,transform .5s var(--ml-spring)}
.d .d1{display:flex;flex-direction:column;gap:16px;height:100%}
.d .d2{display:flex;align-items:center;gap:14px;align-self:center;opacity:0;visibility:hidden;transform:translateY(10px)}
.d .del.gone2 .d1{opacity:0;visibility:hidden;transform:translateY(-10px)}
.d .del.gone2 .d2{opacity:1;visibility:visible;transform:none}
.d .dh{display:flex;align-items:center;gap:13px}
.d .cons{display:flex;flex-direction:column;gap:7px;padding:14px 16px;border-radius:12px;background:var(--ml-surface);list-style:none;font-size:13.5px;color:var(--ml-ink-2)}
.d .cons li{display:flex;align-items:center;gap:9px}
.d .cons li::before{content:"";flex:none;width:5px;height:5px;border-radius:50%;background:#FF3B30}
.d .cons b{font-variant-numeric:tabular-nums}
.d .fld code{padding:2px 6px;border-radius:6px;background:var(--ml-bar-2);font:600 12.5px/1 var(--ml-mono);color:var(--ml-ink)}
.d .mt2{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#1DB954;color:#fff;font-style:normal;opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .inp.okm{box-shadow:inset 0 0 0 1.5px #1DB954,0 0 0 4px rgba(29,185,84,.12);color:#12893C}
.d .inp.okm .mt2{opacity:1;transform:none}
.d .hint{margin-top:-6px;font-size:12.5px;color:var(--ml-muted)}
.d .hint.ok{color:#12893C}
.d .dact{display:flex;justify-content:flex-end;margin-top:auto}
.d .delb{min-width:176px}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .pg{padding:20px 16px 24px}
  .d .hd .lead{display:none}
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .ws{display:none}
  .d .d2{flex-wrap:wrap}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const cfm = $('.cfm');
      const del = $('.delb');
      const hint = $('.hint');
      const box = cfm.closest('.inp');
      const card = $('.del');
      const WORD = 'halden';
      let busy = false;
      const check = () => {
        const v = cfm.value;
        const ok = v === WORD;
        del.disabled = !ok || busy;
        box.classList.toggle('okm', ok);
        hint.classList.toggle('ok', ok);
        hint.textContent = ok ? 'Matches. You can delete the workspace now.' : v && v.toLowerCase() === WORD ? 'Case sensitive: use lowercase.' : v ? `Keep typing: ${WORD}` : 'Case sensitive. The button unlocks on an exact match.';
        cfm.setAttribute('aria-invalid', String(!!v && !ok && v.length >= WORD.length));
      };
      cfm.addEventListener('input', check);
      del.addEventListener('click', () => {
        if (del.disabled || busy) return;
        busy = true;
        del.classList.add('loading');
        setTimeout(() => {
          del.classList.replace('loading', 'ok');
          setTimeout(() => {
            card.classList.add('gone2');
            busy = false;
          }, 700);
        }, 1100);
      });
      $('.undo').addEventListener('click', () => {
        card.classList.remove('gone2');
        del.classList.remove('ok');
        cfm.value = '';
        check();
      });
      check();

      // Autoplay: type a near miss, then the exact word, delete, then restore; any real input hands over for 4s.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !root.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        box.classList.remove('is-auto');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      const typeIn = async (text, gap) => {
        for (const ch of text) {
          if (!idle()) return false;
          cfm.value += ch;
          cfm.dispatchEvent(new Event('input'));
          await wait(gap + Math.random() * 40);
        }
        return true;
      };
      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy || card.classList.contains('gone2')) {
            if (card.classList.contains('gone2') && idle() && !busy) {
              await wait(2600);
              if (!idle()) continue;
              await tap($('.undo'), 0.5);
              await wait(1600);
              continue;
            }
            await wait(400);
            continue;
          }
          cfm.value = '';
          check();
          cur.classList.toggle('off', !moveTo(box, 0.4));
          await wait(800);
          if (!idle()) continue;
          box.classList.add('is-auto');
          if (!(await typeIn('halde', 130))) continue;
          await wait(1300);
          if (!(await typeIn('n', 130))) continue;
          box.classList.remove('is-auto');
          await wait(900);
          if (!(await tap(del, 0.5))) continue;
          await wait(3000);
        }
      })();
    },
    prompt: `Build a Danger zone settings page where deleting the workspace needs a typed confirmation. Full viewport under a 56px top bar; the page region scrolls.

Layout: title and a line saying only owners see this page, then a two-column grid (260px and minmax(0, 1fr), page max-width ~1040px). Left: a workspace summary card (44px logo tile, name, a definition list of plan, members, projects, clients, files, created date with hairlines between). Right, stacked: a card of three calm actions (Transfer ownership, Export all data, Archive workspace), each with a 38px icon tile, title, one line of explanation and a small secondary button; then the Delete card, which stretches to fill the rest and carries a thin red ring (a full 1px ring, never a colored left border): a red-tint icon tile, "Delete this workspace" and what it does, a tinted list of what will be removed with real counts, a labelled input "Type halden to confirm" with a hint line, and a red Delete workspace button aligned right.

Behavior: the button is disabled until input.value === "halden" (strict equality, case sensitive); the hint line reflects the state ("Keep typing: halden", "Case sensitive: use lowercase", "Matches") and an exact match turns the input ring green and pops a check in with a bounce curve. Clicking Delete runs a sheen across the button (no circular spinner), then crossfades (opacity + translateY 10px) the card body into a success state: "Halden is scheduled for deletion" with the removal date 30 days out and a Restore workspace button that returns the form with an emptied input. Never delete on a single click.

Accessibility: the input has a visible label and aria-describedby pointing at the hint (aria-live="polite"), aria-invalid when the text is the right length but wrong, the disabled button keeps visible contrast, focus rings everywhere. Phone below 760px: hide the summary card, single column. Respect prefers-reduced-motion. Plain HTML, CSS and JS, no libraries; React-friendly structure (WorkspaceSummary, ActionRow, DeleteWorkspaceCard, ConfirmInput). Use your brand's accent color; red only for the destructive parts.`,
  });

  // ---------- 10. Audit log: filters, live row arrives, expandable details ----------
  ML.add({
    id: 'app-settings-audit-log',
    cat: 'app-settings',
    title: 'Audit log with filters',
    sub: 'Filter, new events arrive, rows expand',
    html: `
<div class="app">
  ${TOP('Audit log')}
  <div class="body"><main class="pg"><div class="col">
    <div class="hd"><div><h1>Audit log</h1><p class="lead">Every change in Halden, kept for 90 days.</p></div><button class="btn" type="button">${I(P.download, 16)}Export CSV</button></div>
    <div class="fb">
      <div class="seg" style="--n:4;--i:0" role="group" aria-label="Event type"><span class="hl"></span><button class="on" type="button" data-f="all">All events</button><button type="button" data-f="signin">Sign-ins</button><button type="button" data-f="change">Changes</button><button type="button" data-f="security">Security</button></div>
      <label class="inp sr">${I(P.search, 16)}<input placeholder="Search actor or target" aria-label="Search the log"></label>
      <button class="btn dr" type="button">${I(P.cal, 16)}Last 7 days${I(P.chev, 15)}</button>
    </div>
    <section class="card lg" aria-label="Events">
      <div class="th"><span>When</span><span>Actor</span><span>Event</span><span>Target</span><span></span></div>
      <div class="rows"></div>
    </section>
  </div></main></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .col{display:flex;flex:1 0 auto;flex-direction:column;gap:16px}
.d .hd{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .fb{display:flex;align-items:center;gap:12px}
.d .sr{flex:1;max-width:300px;height:40px;margin-left:auto}
.d .dr{gap:8px}
.d .lg{display:flex;flex:1 0 auto;flex-direction:column;padding:4px 18px 10px}
.d .th,.d .hr{display:grid;grid-template-columns:96px minmax(0,1.1fr) minmax(0,1.5fr) minmax(0,1.1fr) 34px;align-items:center;gap:14px}
.d .th{padding:14px 0 10px;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .rows{display:flex;flex-direction:column}
.d .rr{border-bottom:1px solid var(--ml-line)}
.d .hr{padding:11px 0;cursor:pointer;background:none;border:0;width:100%;text-align:left}
.d .tm{display:flex;flex-direction:column;font-variant-numeric:tabular-nums}
.d .tm b{font:600 13px/1.2 var(--ml-mono)}
.d .tm small{font-size:12px;color:var(--ml-muted)}
.d .ac2{display:flex;align-items:center;gap:10px;min-width:0;font-size:13.5px;font-weight:600}
.d .ac2 span:last-child{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.d .ac2 .av{width:28px;height:28px;font-size:10.5px}
.d .ev{display:flex;align-items:center;gap:8px;min-width:0;font-size:13.5px;color:var(--ml-ink-2)}
.d .tg2{overflow:hidden;font:500 12.5px/1 var(--ml-mono);color:var(--ml-ink-2);white-space:nowrap;text-overflow:ellipsis}
.d .cvr{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:var(--ml-muted);transition:transform .35s var(--ml-ease),background-color .2s ease}
.d .hr:hover .cvr{background:var(--ml-surface)}
.d .rr.open .cvr{transform:rotate(180deg)}
.d .hr:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:8px}
.d .dt{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s var(--ml-ease)}
.d .rr.open .dt{grid-template-rows:1fr}
.d .dt > div{min-height:0;overflow:hidden}
.d .dg{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:14px;margin:2px 0 14px;padding:14px;border-radius:12px;background:var(--ml-surface)}
.d .kv2{display:grid;grid-template-columns:76px minmax(0,1fr);gap:7px 10px;font-size:12.5px}
.d .kv2 dt{color:var(--ml-muted)}
.d .kv2 dd{overflow:hidden;font-family:var(--ml-mono);font-size:12px;color:var(--ml-ink-2);text-overflow:ellipsis;white-space:nowrap}
.d .df{padding:10px 12px;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 12px/1.7 var(--ml-mono)}
.d .df p{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.d .df .m{color:#D70015}.d .df .p{color:#12893C}
.d .rr.fresh .hr{background:var(--ml-accent-soft);box-shadow:-18px 0 0 var(--ml-accent-soft),18px 0 0 var(--ml-accent-soft);animation:al-fade 2.4s ease .6s both}
@keyframes al-fade{to{background-color:transparent;box-shadow:0 0 0 transparent}}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .pg{padding:20px 16px 24px}
  .d .hd .lead{display:none}
  .d .hd .btn{display:none}
  .d .fb{flex-wrap:wrap}.d .sr,.d .dr{display:none}
  .d .seg{width:100%}.d .seg button{padding:0 4px;font-size:12px}
  .d .th{display:none}
  .d .hr{grid-template-columns:minmax(0,1fr) 34px;gap:4px 10px}
  .d .hr .tm{display:none}
  .d .hr .tg2{grid-column:1;font-size:12px}
  .d .hr .cvr{grid-column:2;grid-row:1/3}
  .d .dg{grid-template-columns:minmax(0,1fr)}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const ev = [
        ['09:42', 'Wed 14 Oct', 'MR', 'Maya Reyes', 'signed in', 'Chrome on macOS', 'signin', '', ['IP', '203.0.113.42'], ['City', 'Manila, PH'], ['Request', 'req_8f2a91'], ['+ session', 'created, expires in 30 days']],
        ['09:18', 'Wed 14 Oct', 'TL', 'Tomas Lindqvist', 'changed a role', 'Aiko Tan', 'security', 't2', ['IP', '198.51.100.17'], ['City', 'Stockholm, SE'], ['Request', 'req_71c0de'], ['- role', 'Editor'], ['+ role', 'Admin']],
        ['08:55', 'Wed 14 Oct', 'AT', 'Aiko Tan', 'created an API key', 'Reporting job', 'security', 't3', ['IP', '203.0.113.9'], ['City', 'Singapore, SG'], ['Request', 'req_3b17aa'], ['+ key', 'hal_live_...c71e'], ['+ access', 'Read only']],
        ['08:31', 'Wed 14 Oct', 'DO', 'Daniel Okafor', 'edited an invoice', 'INV-1042', 'change', 't4', ['IP', '192.0.2.88'], ['City', 'Lagos, NG'], ['Request', 'req_c40b52'], ['- due', '28 Oct 2026'], ['+ due', '4 Nov 2026']],
        ['17:20', 'Tue 13 Oct', 'PN', 'Priya Nair', 'exported clients', '58 records, CSV', 'change', 't2', ['IP', '198.51.100.64'], ['City', 'Bengaluru, IN'], ['Request', 'req_a9e316'], ['+ file', 'clients-13-oct.csv']],
        ['11:47', 'Tue 13 Oct', 'MR', 'Maya Reyes', 'updated payment method', 'Card ending 4242', 'change', '', ['IP', '203.0.113.42'], ['City', 'Manila, PH'], ['Request', 'req_5d08f4'], ['- card', 'ending 1881'], ['+ card', 'ending 4242']],
        ['16:12', 'Mon 12 Oct', 'HK', 'Hana Kim', 'deleted a project', 'Meridian app v1', 'change', 't3', ['IP', '192.0.2.31'], ['City', 'Seoul, KR'], ['Request', 'req_e61a07'], ['- project', 'Meridian app v1'], ['- tasks', '14 archived']],
        ['10:03', 'Mon 12 Oct', 'LO', 'Luis Ortega', 'failed to sign in', 'Wrong password, 3rd try', 'signin', 't4', ['IP', '198.51.100.201'], ['City', 'Madrid, ES'], ['Request', 'req_0f93bc'], ['+ lock', 'account locked 15 min']],
        ['14:26', 'Sun 11 Oct', 'AT', 'Aiko Tan', 'invited a member', 'kwame@northgate.co', 'change', 't3', ['IP', '203.0.113.9'], ['City', 'Singapore, SG'], ['Request', 'req_96b4c2'], ['+ invite', 'kwame@northgate.co'], ['+ role', 'Viewer']],
        ['09:50', 'Fri 9 Oct', 'SW', 'Sam Whitfield', 'turned on two-step', 'Authenticator app', 'security', 't4', ['IP', '192.0.2.150'], ['City', 'London, GB'], ['Request', 'req_2e7d19'], ['- two-step', 'off'], ['+ two-step', 'on']],
        ['09:12', 'Fri 9 Oct', 'TL', 'Tomas Lindqvist', 'signed in', 'Firefox on Windows', 'signin', 't2', ['IP', '198.51.100.17'], ['City', 'Stockholm, SE'], ['Request', 'req_8a05f3'], ['+ session', 'created, expires in 30 days']],
      ];
      const rows = $('.rows');
      const CV = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
      const TY = { signin: ['mute', 'Sign-in'], change: ['', 'Change'], security: ['warn', 'Security'] };
      const rowHtml = (e, i, cls) => {
        const meta = e.slice(8, 11);
        const changes = e.slice(11);
        return `<div class="rr${cls ? ' ' + cls : ''}" data-t="${e[6]}" data-s="${(e[3] + ' ' + e[5]).toLowerCase()}"><div class="rw"><button class="hr" type="button" aria-expanded="false" aria-label="${e[3]} ${e[4]}, ${e[0]}"><span class="tm"><b>${e[0]}</b><small>${e[1]}</small></span><span class="ac2"><span class="av ${e[7]}">${e[2]}</span><span>${e[3]}</span></span><span class="ev"><i class="pill ${TY[e[6]][0]}" style="font-style:normal">${TY[e[6]][1]}</i>${e[4]}</span><span class="tg2">${e[5]}</span><span class="cvr">${CV}</span></button><div class="dt"><div><div class="dg"><dl class="kv2">${meta.map((m) => `<dt>${m[0]}</dt><dd>${m[1]}</dd>`).join('')}</dl><div class="df">${changes.map((d) => `<p class="${d[0][0] === '-' ? 'm' : d[0][0] === '+' ? 'p' : ''}">${d[0]}  ${d[1]}</p>`).join('')}</div></div></div></div></div></div>`;
      };
      let filter = 'all';
      let q = '';
      rows.innerHTML = ev.map((e, i) => rowHtml(e, i)).join('');
      const filt = () =>
        [...rows.children].forEach((r) => r.classList.toggle('gone', !((filter === 'all' || r.dataset.t === filter) && (!q || r.dataset.s.includes(q)))));
      rows.addEventListener('click', (e) => {
        const b = e.target.closest('.hr');
        if (!b) return;
        const r = b.closest('.rr');
        const open = !r.classList.contains('open');
        r.classList.toggle('open', open);
        b.setAttribute('aria-expanded', String(open));
      });
      const seg = $('.seg');
      root.querySelectorAll('[data-f]').forEach((b, i) =>
        b.addEventListener('click', () => {
          filter = b.dataset.f;
          seg.style.setProperty('--i', i);
          root.querySelectorAll('[data-f]').forEach((x) => x.classList.toggle('on', x === b));
          filt();
        }),
      );
      $('.sr input').addEventListener('input', (e) => {
        q = e.target.value.trim().toLowerCase();
        filt();
      });
      // a live event arrives at the top; the oldest one drops off
      const live = [
        ['10:06', 'Wed 14 Oct', 'SW', 'Sam Whitfield', 'signed in', 'Safari on iPhone', 'signin', 't4', ['IP', '203.0.113.120'], ['City', 'Cebu, PH'], ['Request', 'req_b2290e'], ['+ session', 'created, expires in 30 days']],
        ['10:14', 'Wed 14 Oct', 'HK', 'Hana Kim', 'updated a client', 'Brightline Dental', 'change', '', ['IP', '192.0.2.31'], ['City', 'Seoul, KR'], ['Request', 'req_d41c85'], ['- stage', 'Proposal'], ['+ stage', 'Signed']],
      ];
      let li = 0;
      const arrive = () => {
        const e = live[li++ % live.length];
        const old = rows.querySelector('.rr.fresh');
        if (old) old.classList.remove('fresh');
        rows.insertAdjacentHTML('afterbegin', rowHtml(e, 0, 'gone fresh'));
        const f = rows.firstElementChild;
        f.classList.toggle('gone', !(filter === 'all' || f.dataset.t === filter));
        void f.offsetWidth;
        if (filter === 'all') f.classList.remove('gone');
        const last = rows.lastElementChild;
        last.classList.add('gone');
        setTimeout(() => last.remove(), 600);
      };
      const setFilter = (f) => $(`[data-f=${f}]`).click();

      // Autoplay: filter to Security, back to All, a new event lands, a row expands.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !root.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(700px,420px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await tap($('[data-f=security]'), 0.5))) continue;
          await wait(2200);
          if (!(await tap($('[data-f=all]'), 0.5))) continue;
          await wait(1300);
          if (idle()) arrive();
          await wait(1800);
          const target = rows.children[1];
          if (!(await tap(target.querySelector('.hr'), 0.5, 0.5))) continue;
          await wait(2800);
          if (!idle()) continue;
          if (target.classList.contains('open')) target.querySelector('.hr').click();
          await wait(1800);
        }
      })();
    },
    prompt: `Build an Audit log settings page: a filterable event table with expandable detail rows and live arrivals. Full viewport under a 56px top bar; the page region scrolls.

Layout: header with title, "Every change in Halden, kept for 90 days." and an Export CSV button; a filter bar with a four-option segmented control (All events, Sign-ins, Changes, Security; one white highlight sliding with transform), a search field and a "Last 7 days" button with a chevron; then one card holding a micro-label header (When, Actor, Event, Target) and rows on a grid of 96px, 1.1fr, 1.5fr, 1.1fr, 34px. Each row is a full-width button: time in mono with the weekday and date under it (compute weekdays from the real date, never guess), actor initials avatar and name, a type pill (Sign-in grey, Change blue, Security amber) with the event text, the target in mono, and a chevron. The card grows to fill the page.

Behavior: clicking a row toggles it open (aria-expanded) with grid-template-rows 0fr to 1fr over 450ms; the detail panel is a tinted block with a key-value list (IP, city, request id) and a mono diff box with "-" lines in red and "+" lines in green (tiny doses). Filtering collapses non-matching rows with the same grid-rows technique plus a fade, and search narrows by actor and target text. A new event can arrive at the top (inserted collapsed, expanded to 1fr, highlight that fades over 2.4s) while the oldest row drops off.

Accessibility: each row button has an aria-label with actor, event and time, focus-visible ring, the chevron is decorative, the segmented control is a button group. Phone below 760px: hide the column header, the time and the search; rows show actor and event with the target below. Respect prefers-reduced-motion. Plain HTML, CSS and JS, no libraries; React-friendly structure (FilterBar, LogTable, LogRow, DetailPanel). Use your brand's accent color; amber, red and green only for tiny status and diff accents.`,
  });

  // end
})();
