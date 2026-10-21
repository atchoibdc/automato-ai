(() => {
  // Fernway CRM: ten sales screens that share one fictional product. File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    kanban: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M8 7v7"/><path d="M12 7v4"/><path d="M16 7v9"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    userPlus: '<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    chart: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    tasks: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5"/>',
    dollar: '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    note: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    chevL: '<path d="m15 18-6-6 6-6"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    reply: '<polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
    pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
    video: '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    dial: '<circle cx="5" cy="5" r="1.4"/><circle cx="12" cy="5" r="1.4"/><circle cx="19" cy="5" r="1.4"/><circle cx="5" cy="12" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="19" cy="12" r="1.4"/><circle cx="5" cy="19" r="1.4"/><circle cx="12" cy="19" r="1.4"/><circle cx="19" cy="19" r="1.4"/>',
    backsp: '<path d="M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z"/><line x1="18" x2="12" y1="9" y2="15"/><line x1="12" x2="18" y1="9" y2="15"/>',
    callOut: '<polyline points="22 8 22 2 16 2"/><line x1="16" x2="22" y1="8" y2="2"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3"/>',
    callIn: '<polyline points="16 2 16 8 22 8"/><line x1="22" x2="16" y1="2" y2="8"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3"/>',
    callMiss: '<line x1="22" x2="16" y1="2" y2="8"/><line x1="16" x2="22" y1="2" y2="8"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3"/>',
    sliders: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    timer: '<line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="15" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    sms: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    box: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
  };
  const I = (d, s = 18, w = 2) =>
    `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const CHK = (s = 13) =>
    `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg>`;
  const CURSOR = `<div class="cur off" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4.04 4.6a.5.5 0 0 1 .56-.56l15.5 6.1a.5.5 0 0 1-.05.94l-6.3 1.9a1 1 0 0 0-.66.66l-1.9 6.3a.5.5 0 0 1-.94.05Z"/></svg></div>`;
  const CURSOR_CSS = `
.d .cur{position:absolute;left:0;top:0;z-index:50;pointer-events:none;transition:transform 780ms var(--ml-ease),opacity .25s ease}
.d .cur svg{display:block;filter:drop-shadow(0 2px 3px rgba(35,15,10,.28));transition:transform 90ms ease-out}
.d .cur path{fill:var(--ml-ink);stroke:#fff;stroke-width:1.6;stroke-linejoin:round}
.d .cur.press svg{transform:scale(.8)}
.d .cur.off{opacity:0}`;

  // Shared navigation: the same nine areas appear as a sidebar, an icon rail or a top bar.
  const NAV = [['pipe', 'Pipeline', 'kanban'], ['contacts', 'Contacts', 'users'], ['leads', 'Leads', 'userPlus'], ['inbox', 'Inbox', 'msg'], ['seq', 'Sequences', 'mail'], ['cal', 'Calendar', 'cal'], ['fc', 'Forecast', 'chart'], ['calls', 'Calls', 'phone'], ['tasks', 'Tasks', 'tasks']];
  const TOPTABS = ['pipe', 'contacts', 'inbox', 'cal', 'fc', 'tasks'];
  const SIDE = (a, badge = {}) => `
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Fernway</b><em>CRM</em></div>
    <nav class="nav" aria-label="Main">${NAV.map(([k, l, ic]) => `<button class="it${k === a ? ' on' : ''}" type="button"${k === a ? ' aria-current="page"' : ''}>${I(P[ic], 18)}<span>${l}</span>${badge[k] ? `<em>${badge[k]}</em>` : ''}</button>`).join('')}</nav>
    <div class="me"><span class="av">MR</span><p><b>Maya Reyes</b><small>Sales lead</small></p></div>
  </aside>`;
  const RAIL = (a, dot = '') => `
  <nav class="rail" aria-label="Main">
    <span class="mark">${I(P.mark, 16)}</span>
    ${NAV.map(([k, l, ic]) => `<button class="it${k === a ? ' on' : ''}" type="button" aria-label="${l}"${k === a ? ' aria-current="page"' : ''}>${I(P[ic], 20)}${k === dot ? '<i></i>' : ''}</button>`).join('')}
    <span class="av">MR</span>
  </nav>`;
  const TOPNAV = (a) => `
  <header class="tn">
    <span class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Fernway</b><em>CRM</em></span>
    <nav class="tabs" aria-label="Main">${NAV.filter(([k]) => TOPTABS.includes(k)).map(([k, l]) => `<button class="tab${k === a ? ' on' : ''}" type="button"${k === a ? ' aria-current="page"' : ''}>${l}</button>`).join('')}</nav>
    <label class="search sp">${I(P.search, 16)}<input type="search" placeholder="Search contacts and deals" aria-label="Search"></label>
    <button class="ic" type="button" aria-label="Notifications">${I(P.bell, 18)}<i></i></button>
    <span class="av">MR</span>
  </header>`;

  const BASE = `
.d ul{list-style:none}
.d button{cursor:pointer;border:0;background:none}
.d .app{position:relative;height:100%;min-width:0;overflow:hidden}
.d .sc{overflow-y:auto;scrollbar-width:thin;scrollbar-color:var(--ml-bar) transparent}
.d .num{font-variant-numeric:tabular-nums}
.d .brand{display:flex;align-items:center;gap:10px;min-width:0}
.d .brand b{font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .brand em{padding:4px 7px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font:650 10.5px/1 var(--ml-mono);font-style:normal;letter-spacing:.05em}
.d .mark{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .side .brand{padding:2px 6px 20px}
.d .side .nav{display:flex;flex-direction:column;gap:2px}
.d .side .it{display:flex;align-items:center;gap:11px;width:100%;height:38px;padding:0 10px;border-radius:10px;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left}
.d .side .it svg{flex:none;color:var(--ml-muted)}
.d .side .it:hover{background:var(--ml-surface)}
.d .side .it.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:600}
.d .side .it.on svg{color:var(--ml-accent)}
.d .side .it em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .side .it.on em{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .side .me{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .side .me p{display:flex;flex-direction:column;min-width:0}
.d .side .me b{font-size:13px;font-weight:600}
.d .side .me small{font-size:12px;color:var(--ml-muted)}
.d .rail{display:flex;flex-direction:column;align-items:center;gap:6px;min-height:0;padding:16px 0 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .rail .mark{margin-bottom:14px}
.d .rail .it{position:relative;display:grid;place-items:center;width:44px;height:44px;border-radius:12px;color:var(--ml-muted)}
.d .rail .it:hover{background:var(--ml-surface);color:var(--ml-ink)}
.d .rail .it.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent)}
.d .rail .it i{position:absolute;top:9px;right:10px;width:8px;height:8px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px #fff}
.d .rail .av{margin-top:auto}
.d .tn{display:flex;flex:none;align-items:center;gap:14px;height:62px;padding:0 28px;background:rgba(255,255,255,.85);border-bottom:1px solid var(--ml-line)}
.d .tn .tabs{display:flex;align-items:stretch;align-self:stretch;gap:2px;margin-left:10px;min-width:0;overflow-x:auto;scrollbar-width:none}
.d .tn .tab{position:relative;padding:0 12px;font-size:13.5px;font-weight:500;color:var(--ml-muted);white-space:nowrap;transition:color .2s ease}
.d .tn .tab:hover{color:var(--ml-ink)}
.d .tn .tab.on{color:var(--ml-ink);font-weight:600}
.d .tn .tab.on::after{content:"";position:absolute;left:12px;right:12px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .tn .sp{margin-left:auto;width:230px}
.d .search{display:flex;align-items:center;gap:8px;height:38px;padding:0 12px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .2s ease,background-color .2s ease}
.d .search:focus-within{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .search input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:13.5px}
.d .search input::placeholder{color:var(--ml-muted)}
.d .ic{position:relative;display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:10px;color:var(--ml-ink-2)}
.d .ic:hover{background:var(--ml-surface)}
.d .ic i{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px #fff}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650;letter-spacing:-.01em}
.d .av.s{width:26px;height:26px;font-size:10px}
.d .av.l{width:64px;height:64px;font-size:21px}
.d .av.t2{background:#FFF2ED}
.d .av.t3{background:#C4DBFF}
.d .av.t4{background:var(--ml-bar-2);color:var(--ml-ink-2)}
.d .cta,.d .ghost{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:38px;padding:0 14px;border-radius:10px;font-size:13.5px;font-weight:600;white-space:nowrap;transition:transform 90ms ease-out,background-color .2s ease}
.d .cta{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d .ghost{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);color:var(--ml-ink-2)}
.d .ghost:hover{background:var(--ml-surface)}
.d button.press,.d .cta:active,.d .ghost:active{transform:scale(.96)}
.d button:focus-visible,.d [tabindex]:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d .sub{margin-top:4px;font-size:13.5px;color:var(--ml-muted)}
.d .k{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .pill{display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:600;white-space:nowrap}
.d .pill.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .pill.warn{background:rgba(255,159,10,.12);color:#B25E00}
.d .pill.bad{background:rgba(255,59,48,.09);color:#D70015}
.d .pill.mute{background:var(--ml-bar-2);color:var(--ml-ink-2)}
.d .ck{display:grid;flex:none;place-items:center;width:20px;height:20px;border-radius:6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .ck.round{border-radius:50%}
.d .ck path{stroke-dasharray:1;stroke-dashoffset:1;transition:stroke-dashoffset .4s var(--ml-ease)}
.d .ck.on{background:var(--ml-accent);box-shadow:none}
.d .ck.on path{stroke-dashoffset:0}
.d .toast{position:absolute;left:50%;bottom:22px;z-index:40;display:flex;align-items:center;gap:9px;max-width:92%;padding:10px 16px 10px 12px;border-radius:999px;background:var(--ml-ink);color:#fff;font-size:13px;font-weight:600;white-space:nowrap;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translate(-50%,16px);pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .25s ease}
.d .toast.on{opacity:1;transform:translate(-50%,0)}
.d .toast svg{flex:none;padding:2px;border-radius:50%;background:#1DB954}
@keyframes crm-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes crm-pop{0%{transform:scale(1)}40%{transform:scale(1.12)}100%{transform:scale(1)}}
@keyframes crm-ping{0%{opacity:.5;transform:scale(1)}80%,100%{opacity:0;transform:scale(3)}}
@keyframes crm-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
${CURSOR_CSS}`;

  // ---------------------------------------------------------------- 1. Deal pipeline board (sidebar shell)
  ML.add({
    id: 'app-crm-pipeline',
    cat: 'app-crm',
    title: 'Deal pipeline board',
    sub: 'Deals drag between stages, totals update',
    html: `
<div class="app g">
  ${SIDE('pipe', { inbox: 4, tasks: 6 })}
  <div class="main">
    <header class="top">
      <span class="mbrand"><span class="mark">${I(P.mark, 16)}</span></span>
      <div class="ttl"><h1>Pipeline</h1><p class="sub"><b class="open num">$122,100</b> open in <span class="num opn">8</span> deals<span class="dotsep"></span><b class="wonv num">$30,500</b> won this month</p></div>
      <div class="acts">
        <span class="team" aria-hidden="true"><span class="av s">MR</span><span class="av s t2">AT</span><span class="av s t3">DO</span><span class="av s t4">+2</span></span>
        <button class="ghost fl" type="button">${I(P.filter, 16)}Filter</button>
        <button class="cta nw" type="button">${I(P.plus, 16)}New deal</button>
      </div>
    </header>
    <div class="board sc" role="list" aria-label="Pipeline stages"></div>
  </div>
  <div class="toast" role="status">${I(P.check, 15, 2.8)}<span></span></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .g{display:grid;grid-template-columns:216px minmax(0,1fr)}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .top{display:flex;flex:none;align-items:center;gap:16px;padding:22px 28px 18px}
.d .mbrand{display:none}
.d .ttl{min-width:0}
.d .sub b{font-weight:650;color:var(--ml-ink)}
.d .dotsep{display:inline-block;width:3px;height:3px;margin:0 9px 3px;border-radius:50%;background:var(--ml-bar)}
.d .acts{display:flex;align-items:center;gap:10px;margin-left:auto}
.d .team{display:flex;margin-right:6px}
.d .team .av{margin-left:-5px;box-shadow:0 0 0 2px var(--ml-surface)}
.d .team .av:first-child{margin-left:0}
.d .board{display:grid;flex:1;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;min-height:0;padding:0 28px 26px}
.d .col{display:flex;flex-direction:column;min-width:0;padding:10px;border-radius:18px;background:rgba(235,240,247,.6);box-shadow:inset 0 0 0 1.5px transparent;transition:background-color .2s ease,box-shadow .25s ease}
.d .col.over{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .ch{display:flex;align-items:center;gap:8px;padding:4px 4px 0}
.d .ch i{width:8px;height:8px;border-radius:50%;background:var(--ml-accent-2)}
.d .ch b{font-size:13.5px;font-weight:650}
.d .ch .cn{margin-left:auto;padding:3px 8px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 11px/1.2 var(--ml-mono);color:var(--ml-muted)}
.d .ct{display:inline-block;align-self:flex-start;margin:2px 4px 12px;font-size:21px;line-height:1.2;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.d .ct.bump{animation:crm-pop 460ms var(--ml-ease)}
.d .col.w .ct{color:#12893C}
.d .col.w .ch i{background:#1DB954}
.d .cb{display:flex;flex-direction:column;flex:1;gap:10px;min-height:90px}
.d .cb:empty::after{content:"Drop a deal here";display:grid;place-items:center;height:84px;border-radius:14px;box-shadow:inset 0 0 0 1.5px var(--ml-accent-line);font-size:12.5px;color:var(--ml-accent-ink)}
.d .deal{position:relative;padding:12px 12px 11px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 2px rgba(35,15,10,.05),0 4px 12px rgba(35,15,10,.05);cursor:grab;touch-action:none;user-select:none;transition:transform var(--ml-bounce-dur) var(--ml-bounce),box-shadow .2s ease}
.d .deal.lift{z-index:30;cursor:grabbing;transition:box-shadow .2s ease;box-shadow:inset 0 0 0 1.5px var(--ml-accent-line),0 18px 36px rgba(35,15,10,.2)}
.d .deal b{display:block;overflow:hidden;font-size:13.5px;font-weight:650;white-space:nowrap;text-overflow:ellipsis}
.d .deal .nm{overflow:hidden;margin-top:1px;font-size:12px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .deal .v{margin-top:10px;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .col.w .deal .v{color:#12893C}
.d .deal .ft{display:flex;align-items:center;gap:8px;margin-top:10px;font-size:11.5px;color:var(--ml-muted)}
.d .deal .ft span:last-child{margin-left:auto;font-family:var(--ml-mono);font-size:11px}
@container scr (max-width: 760px){
  .d .g{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .team,.d .fl{display:none}
  .d .mbrand{display:block}
  .d .top{flex-wrap:wrap;gap:12px;padding:18px 16px 14px}
  .d .ttl{flex:1 1 60%}
  .d .acts{margin-left:0;width:100%}
  .d .acts .cta{width:100%}
  .d .board{grid-template-columns:none;grid-auto-flow:column;grid-auto-columns:minmax(236px,78%);overflow-x:auto;padding:0 16px 20px}
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const stages = ['Qualified', 'Proposal', 'Negotiation', 'Won'];
      const deals = [
        [0, 'Northgate', 'Expansion, 3 sites', 18400, 'MR', 1, 'Oct 29'],
        [0, 'Brightline Dental', 'Retainer renewal', 6200, 'TL', 2, 'Oct 24'],
        [0, 'Tidewater Realty', 'Lead routing setup', 9800, 'AT', 3, 'Nov 4'],
        [1, 'Kestrel & Co', 'Brand and site refresh', 24000, 'DO', 1, 'Oct 21'],
        [1, 'Juniper Health', 'Patient portal', 14500, 'MR', 2, 'Oct 30'],
        [1, 'Corvid Coffee', 'Loyalty program', 5400, 'HK', 3, 'Nov 6'],
        [2, 'Atlas Freight', 'Ops dashboard', 31000, 'AT', 1, 'Oct 18'],
        [2, 'Solace Studio', 'Portfolio site', 12800, 'TL', 2, 'Oct 20'],
        [3, 'Meridian Foods', 'Ordering app', 22600, 'DO', 1, 'Oct 12'],
        [3, 'Bayside Fitness', 'Class booking', 7900, 'HK', 2, 'Oct 9'],
      ];
      const extra = [['Lumen Labs', 'Pilot rollout', 8800, 'PN', 3, 'Nov 12'], ['Fernway Partners', 'Referral program', 4200, 'MR', 1, 'Nov 9']];
      const fmt = (n) => '$' + n.toLocaleString('en-US');
      const card = (c, nm, v, o, t, due) =>
        `<article class="deal" role="listitem" tabindex="0" data-n="${c}" data-v="${v}" aria-label="${c}, ${nm}, ${fmt(v)}"><b>${c}</b><p class="nm">${nm}</p><p class="v num">${fmt(v)}</p><div class="ft"><span class="av s${t > 1 ? ' t' + t : ''}">${o}</span><span>Due ${due}</span></div></article>`;
      const board = $('.board');
      board.innerHTML = stages
        .map((n, i) => `<section class="col${i === 3 ? ' w' : ''}" aria-label="${n}"><div class="ch"><i></i><b>${n}</b><span class="cn num">0</span></div><p class="ct num">$0</p><div class="cb">${deals.filter((d) => d[0] === i).map((d) => card(d[1], d[2], d[3], d[4], d[5], d[6])).join('')}</div></section>`)
        .join('');
      const cols = [...root.querySelectorAll('.col')].map((el) => ({ el, body: el.querySelector('.cb'), tot: el.querySelector('.ct'), cnt: el.querySelector('.cn') }));
      const k = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const rel = (el) => {
        const o = root.getBoundingClientRect();
        const s = k();
        const r = el.getBoundingClientRect();
        return { l: (r.left - o.left) / s, t: (r.top - o.top) / s, w: r.width / s, h: r.height / s };
      };
      const roll = (el, to) => {
        const from = +el.dataset.n || 0;
        el.dataset.n = to;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const u = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 600);
          el.textContent = fmt(Math.round(from + (to - from) * (1 - Math.pow(1 - u, 3))));
          if (u < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const totals = (animate) => {
        let open = 0;
        let n = 0;
        let won = 0;
        cols.forEach((c, i) => {
          const list = [...c.body.children];
          const sum = list.reduce((a, d) => a + +d.dataset.v, 0);
          const changed = c.tot.dataset.n !== undefined && +c.tot.dataset.n !== sum;
          c.cnt.textContent = list.length;
          if (animate) roll(c.tot, sum);
          else {
            c.tot.textContent = fmt(sum);
            c.tot.dataset.n = sum;
          }
          if (animate && changed) {
            c.tot.classList.remove('bump');
            void c.tot.offsetWidth;
            c.tot.classList.add('bump');
          }
          if (i < 3) {
            open += sum;
            n += list.length;
          } else won = sum;
        });
        const set = (sel, v) => {
          const el = $(sel);
          if (animate) roll(el, v);
          else {
            el.textContent = fmt(v);
            el.dataset.n = v;
          }
        };
        set('.open', open);
        set('.wonv', won);
        $('.opn').textContent = n;
      };
      totals(false);

      const toast = $('.toast');
      let toastT = 0;
      const say = (msg) => {
        toast.lastChild.textContent = msg;
        toast.classList.add('on');
        clearTimeout(toastT);
        toastT = setTimeout(() => toast.classList.remove('on'), 2200);
      };
      const colAt = (px, py) => cols.findIndex((c) => {
        const r = rel(c.el);
        return px >= r.l && px <= r.l + r.w && py >= r.t && py <= r.t + r.h;
      });
      const beforeFor = (ci, py, skip) => [...cols[ci].body.children].filter((x) => x !== skip).find((x) => {
        const r = rel(x);
        return py < r.t + r.h / 2;
      });
      // FLIP: re-parent the card, then glide it and every neighbour from where they were
      const place = (d, ci, before, dx, dy) => {
        const s = k();
        const others = [...root.querySelectorAll('.deal')].filter((x) => x !== d);
        d.style.transform = 'none';
        d.classList.remove('lift');
        const a = d.getBoundingClientRect();
        const first = others.map((x) => x.getBoundingClientRect());
        cols[ci].body.insertBefore(d, before || null);
        const b = d.getBoundingClientRect();
        const mv = [[d, (a.left - b.left) / s + dx, (a.top - b.top) / s + dy]].concat(
          others.map((x, i) => {
            const r = x.getBoundingClientRect();
            return [x, (first[i].left - r.left) / s, (first[i].top - r.top) / s];
          })
        );
        mv.forEach(([x, mx, my]) => {
          if (Math.abs(mx) + Math.abs(my) < 1) return;
          x.style.transition = 'none';
          x.style.transform = `translate(${mx}px,${my}px)`;
        });
        void root.offsetWidth;
        mv.forEach(([x]) => {
          x.style.transition = '';
          x.style.transform = '';
        });
        cols.forEach((c) => c.el.classList.remove('over'));
        totals(true);
        say(`${d.dataset.n} moved to ${stages[ci]}`);
      };
      let drag = null;
      const lift = (d, px, py) => {
        drag = { d, x0: px, y0: py, px, py, from: cols.findIndex((c) => c.body === d.parentNode) };
        d.classList.add('lift');
      };
      const dragTo = (px, py) => {
        if (!drag) return;
        drag.px = px;
        drag.py = py;
        drag.d.style.transform = `translate(${px - drag.x0}px,${py - drag.y0}px) scale(1.03) rotate(1.6deg)`;
        const ci = colAt(px, py);
        cols.forEach((c, i) => c.el.classList.toggle('over', i === ci));
      };
      const drop = () => {
        if (!drag) return;
        const { d, px, py, x0, y0 } = drag;
        let ci = colAt(px, py);
        if (ci < 0) ci = drag.from;
        drag = null;
        place(d, ci, beforeFor(ci, py, d), px - x0, py - y0);
      };
      let pend = null;
      const toCanvas = (e) => {
        const o = root.getBoundingClientRect();
        return [(e.clientX - o.left) / k(), (e.clientY - o.top) / k()];
      };
      board.addEventListener('pointerdown', (e) => {
        const d = e.target.closest('.deal');
        if (!d || (e.pointerType === 'mouse' && e.button !== 0)) return;
        pend = { d, id: e.pointerId, x: e.clientX, y: e.clientY, on: false, at: toCanvas(e) };
        d.setPointerCapture(e.pointerId);
      });
      board.addEventListener('pointermove', (e) => {
        if (!pend || e.pointerId !== pend.id) return;
        if (!pend.on) {
          if (Math.hypot(e.clientX - pend.x, e.clientY - pend.y) < 5) return;
          pend.on = true;
          lift(pend.d, pend.at[0], pend.at[1]);
        }
        dragTo(...toCanvas(e));
      });
      const end = (e) => {
        if (!pend || e.pointerId !== pend.id) return;
        const was = pend.on;
        pend = null;
        if (was) drop();
      };
      board.addEventListener('pointerup', end);
      board.addEventListener('pointercancel', end);
      board.addEventListener('keydown', (e) => {
        const d = e.target.closest && e.target.closest('.deal');
        if (!d || (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft')) return;
        const from = cols.findIndex((c) => c.body === d.parentNode);
        const to = from + (e.key === 'ArrowRight' ? 1 : -1);
        if (to < 0 || to > 3) return;
        e.preventDefault();
        place(d, to, null, 0, 0);
        d.focus({ preventScroll: true });
      });
      let ex = 0;
      $('.nw').addEventListener('click', () => {
        const [c, nm, v, o, t, due] = extra[ex++ % extra.length];
        if ([...root.querySelectorAll('.deal')].some((x) => x.dataset.n === c)) return;
        const tmp = document.createElement('div');
        tmp.innerHTML = card(c, nm, v, o, t, due);
        const d = tmp.firstChild;
        d.style.opacity = '0';
        d.style.transform = 'translateY(-10px)';
        cols[0].body.insertBefore(d, cols[0].body.firstChild);
        void d.offsetWidth;
        d.style.opacity = '';
        d.style.transform = '';
        d.style.transition = 'transform var(--ml-spring-dur) var(--ml-spring),opacity .3s ease';
        setTimeout(() => (d.style.transition = ''), 700);
        totals(true);
        say(`${c} added to Qualified`);
      });

      // Autoplay: the cursor grabs a deal, carries it across, lets go; any real input hands over for 4s.
      const tween = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = performance.now();
          const step = (t) => {
            if (!root.isConnected) return res(false);
            const dt = t - last;
            last = t;
            if (performance.now() < userUntil) return res(false);
            if (!root.dataset.paused) {
              acc += dt;
              const u = Math.min(1, acc / ms);
              fn(1 - Math.pow(1 - u, 3));
              if (u >= 1) return res(true);
            }
            requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      const carry = async (name, to) => {
        const d = [...root.querySelectorAll('.deal')].find((x) => x.dataset.n === name);
        if (!d || !(await aim(d, 0.5, 0.35))) return false;
        const r0 = rel(d);
        const sx = r0.l + r0.w * 0.5;
        const sy = r0.t + r0.h * 0.35;
        const tc = rel(cols[to].el);
        const last = [...cols[to].body.children].pop();
        const tx = tc.l + tc.w * 0.5;
        const ty = last ? rel(last).t + rel(last).h + 24 : tc.t + 100;
        cur.classList.add('press');
        await wait(140);
        lift(d, sx, sy);
        cur.style.transition = 'none';
        const ok = await tween(1100, (e) => {
          const px = sx + (tx - sx) * e;
          const py = sy + (ty - sy) * e - Math.sin(e * Math.PI) * 26;
          cur.style.transform = `translate(${px}px,${py}px)`;
          dragTo(px, py);
        });
        cur.style.transition = '';
        cur.classList.remove('press');
        drop();
        return ok;
      };
      cur.style.transform = 'translate(560px,560px)';
      const moves = [['Kestrel & Co', 2], ['Atlas Freight', 3], ['Kestrel & Co', 1], ['Atlas Freight', 2]];
      let mi = 0;
      (async () => {
        await wait(1400);
        while (root.isConnected) {
          if (!idle() || drag || pend) {
            await wait(400);
            continue;
          }
          const [n, to] = moves[mi++ % moves.length];
          await carry(n, to);
          await wait(3200);
        }
      })();
    },
    prompt: `Build a sales pipeline board screen for a CRM, full viewport (height: 100dvh, the shell never scrolls, the board does).

Layout: CSS grid with a 216px white sidebar (brand tile, nine nav items with icons and small count pills, the active item on a soft accent tint with a hairline ring, signed-in user at the bottom) and a main column. Main: a page header (26px title "Pipeline", one line beneath it with the open pipeline value, the open deal count and the value won this month, then a stack of teammate avatars, a Filter button and a primary "New deal" button) and a board of four equal columns on a surface tint: Qualified, Proposal, Negotiation, Won. Each column has a stage dot, name, a count pill, a 21px tabular total and a stack of deal cards (company in semibold, deal name muted, the value at 17px, a tiny owner avatar and a due date). The Won column uses a green dot and green totals; everything else is one accent.

Behavior: real drag and drop with pointer events (pointerdown, pointermove, pointerup, setPointerCapture, touch-action: none on the card). The card lifts (scale 1.03, 1.6deg tilt, a deeper shadow and an accent hairline), the column under the pointer gets an accent tint and ring, and on release the card is inserted at the position under the pointer. Animate the drop with FLIP: measure, re-parent, apply the inverse translate and release with a slightly overshooting spring (594ms linear() curve) so the card and every neighbour glide to their new slots. Column totals count up with an ease-out cubic over 600ms and pop once (scale 1.12); the header open and won totals update too, and a dark toast slides up reading "<Deal> moved to <Stage>". Empty columns show a dashed drop hint. Keyboard: a focused card moves one stage with ArrowLeft and ArrowRight. A demo cursor can play the drag on a loop and hands over to the visitor on any real input.

Phone layout (under 760px): hide the sidebar, show the logo tile in the header, make the board a horizontal scroll-snap row of columns about 78% wide. Respect prefers-reduced-motion by swapping the spring for a short fade. Plain HTML, CSS and JS, no libraries; React-friendly structure (Sidebar, PageHeader, Board, Column, DealCard) with the stage list and deals as data.`,
  });

  // Icons the run() functions need at runtime are parked in a hidden block and read back by key.
  const ICONS = (keys) => `<div class="icons" hidden>${keys.map((k) => `<i data-ic="${k}">${k === 'chk' ? CHK(13) : I(P[k], 16)}</i>`).join('')}</div>`;

  // ---------------------------------------------------------------- 2. Contact profile (top nav shell)
  ML.add({
    id: 'app-crm-contact',
    cat: 'app-crm',
    title: 'Contact profile',
    sub: 'Timeline grows, tasks tick off',
    html: `
<div class="app v">
  ${TOPNAV('contacts')}
  <main class="page sc">
    <aside class="prof card">
      <div class="ph">
        <span class="avw"><span class="av l">PN</span><i class="live" aria-hidden="true"></i></span>
        <h2>Priya Nair</h2>
        <p class="role">Head of Operations</p>
        <p class="co">${I(P.building, 14)}Northgate<span class="pill">Qualified lead</span></p>
      </div>
      <div class="qa"><button class="ghost" type="button">${I(P.mail, 16)}Email</button><button class="ghost" type="button">${I(P.phone, 16)}Call</button><button class="ghost" type="button">${I(P.note, 16)}Note</button></div>
      <dl class="dls">
        <div><dt>Email</dt><dd>priya@northgate.co</dd></div>
        <div><dt>Phone</dt><dd class="num">+1 (415) 555-0142</dd></div>
        <div><dt>Location</dt><dd>Austin, Texas</dd></div>
        <div><dt>Owner</dt><dd><span class="av s">MR</span>Maya Reyes</dd></div>
        <div><dt>Source</dt><dd>Website quote form</dd></div>
      </dl>
      <div class="tg"><span class="pill mute">Decision maker</span><span class="pill mute">3 sites</span><span class="pill mute">Q4 budget</span></div>
    </aside>
    <section class="mid">
      <div class="card cmp">
        <span class="av s">MR</span>
        <label class="cmpf"><input id="ml-crm-note" type="text" placeholder="Add a note about Priya" aria-label="Add a note" autocomplete="off"></label>
        <button class="cta sv" type="button" disabled>Save</button>
      </div>
      <div class="card tlc">
        <div class="tlh">
          <div class="seg" role="tablist" aria-label="Contact history"><span class="thumb" aria-hidden="true"></span><button type="button" role="tab" class="on" aria-selected="true">Activity</button><button type="button" role="tab" aria-selected="false">Notes</button><button type="button" role="tab" aria-selected="false">Emails</button></div>
          <span class="k cnt">Last 30 days</span>
        </div>
        <ul class="tl"></ul>
      </div>
    </section>
    <aside class="rt">
      <section class="card box">
        <div class="bh"><b>Deals</b><span class="pill mute num">2</span></div>
        <div class="dl2"><div class="dr"><p><b>Northgate expansion</b><small>3 sites, Q4 launch</small></p><p class="amt num">$18,400</p></div><div class="stg"><i class="f" style="--a:1"></i><i class="f" style="--a:1"></i><i></i><i></i></div><p class="sn">Qualified, closes Oct 29</p></div>
        <div class="dl2"><div class="dr"><p><b>Annual support plan</b><small>Renewal</small></p><p class="amt num ok">$6,000</p></div><div class="stg"><i class="f"></i><i class="f"></i><i class="f"></i><i class="f"></i></div><p class="sn">Won Oct 2</p></div>
      </section>
      <section class="card box">
        <div class="bh"><b>Tasks</b><span class="pill num tc">1 of 3 done</span></div>
        <ul class="tks">
          <li class="task"><button class="ck round" type="button" aria-label="Mark done">${CHK(12)}</button><p><b>Send revised scope</b><small>Today</small></p></li>
          <li class="task"><button class="ck round" type="button" aria-label="Mark done">${CHK(12)}</button><p><b>Book site visit</b><small>Thu 15 Oct</small></p></li>
          <li class="task done"><button class="ck round on" type="button" aria-label="Mark done">${CHK(12)}</button><p><b>Share Meridian case study</b><small>Mon 12 Oct</small></p></li>
        </ul>
      </section>
    </aside>
  </main>
  ${ICONS(['mail', 'phone', 'note', 'eye', 'kanban', 'cal', 'globe'])}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d [hidden]{display:none!important}
.d .v{display:flex;flex-direction:column}
.d .page{display:grid;flex:1;grid-template-columns:258px minmax(0,1fr) 258px;align-items:stretch;grid-auto-rows:minmax(min-content,1fr);gap:16px;min-height:0;padding:22px 28px 26px}
.d .prof{display:flex;flex-direction:column;padding:22px 18px 18px}
.d .ph{display:flex;flex-direction:column;align-items:center;text-align:center}
.d .avw{position:relative}
.d .live{position:absolute;right:2px;bottom:3px;width:14px;height:14px;border-radius:50%;background:#1DB954;box-shadow:0 0 0 3px #fff}
.d .live::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:crm-ping 2.2s ease-out infinite}
.d h2{margin-top:12px;font-size:20px;font-weight:650;letter-spacing:-.025em}
.d .role{margin-top:2px;font-size:13.5px;color:var(--ml-muted)}
.d .co{display:flex;align-items:center;gap:7px;margin-top:10px;font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .co svg{color:var(--ml-muted)}
.d .qa{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:18px}
.d .qa .ghost{flex-direction:column;gap:5px;height:56px;padding:0;font-size:12px}
.d .qa .ghost svg{color:var(--ml-accent)}
.d .dls{display:flex;flex:1;flex-direction:column;margin-top:16px;border-top:1px solid var(--ml-line)}
.d .dls div{display:flex;flex:1;align-items:center;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid var(--ml-line);font-size:13px}
.d .dls dt{flex:none;color:var(--ml-muted)}
.d .dls dd{display:flex;align-items:center;gap:7px;min-width:0;overflow:hidden;font-weight:550;white-space:nowrap;text-overflow:ellipsis}
.d .tg{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.d .mid{display:flex;flex-direction:column;gap:14px;min-width:0}
.d .cmp{display:flex;align-items:center;gap:10px;padding:10px 10px 10px 12px}
.d .cmpf{flex:1;display:flex;align-items:center;min-width:0;height:38px;padding:0 12px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,background-color .25s ease}
.d .cmpf:focus-within,.d .cmpf.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .cmpf input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:13.5px}
.d .cmpf input::placeholder{color:var(--ml-muted)}
.d .cmp .cta{height:38px}
.d .cmp .cta:disabled{opacity:.45;box-shadow:none;cursor:default}
.d .tlc{display:flex;flex:1;flex-direction:column;padding:16px 6px 4px}
.d .tlh{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:0 14px 14px}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(3,84px);padding:3px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg button{position:relative;z-index:1;height:30px;font-size:13px;font-weight:600;color:var(--ml-muted);transition:color .25s ease,transform 90ms ease-out}
.d .seg button.on{color:var(--ml-ink)}
.d .thumb{position:absolute;top:3px;bottom:3px;left:3px;width:84px;border-radius:8px;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px rgba(227,233,242,.8);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tl{display:flex;flex:1;flex-direction:column;justify-content:space-between;padding:6px 14px 0}
.d .ev{display:grid;grid-template-rows:1fr;transition:grid-template-rows .55s var(--ml-ease),opacity .4s ease}
.d .ev.enter{grid-template-rows:0fr;opacity:0}
.d .evi{position:relative;display:flex;gap:13px;min-height:0;overflow:hidden;padding-bottom:16px}
.d .evi::before{content:"";position:absolute;left:15px;top:34px;bottom:2px;width:1px;background:var(--ml-line)}
.d .ev:last-child .evi::before{display:none}
.d .eic{display:grid;flex:none;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .eic svg{width:15px;height:15px}
.d .etx{flex:1;min-width:0;padding-top:2px}
.d .etx > p:first-child{display:flex;align-items:center;gap:8px}
.d .etx b{font-size:13.5px;font-weight:600}
.d .etx time{display:block;margin-top:1px;font-size:12px;color:var(--ml-muted)}
.d .snip{margin-top:7px;padding:9px 12px;border-radius:10px;background:var(--ml-surface);font-size:13px;line-height:1.45;color:var(--ml-ink-2)}
.d .nw{padding:2px 7px;font-size:10.5px;animation:crm-new 5s ease forwards}
.d .tl.swap .ev{animation:crm-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
.d .rt{display:flex;flex-direction:column;gap:14px;min-width:0}
.d .box{display:flex;flex:1;flex-direction:column;padding:16px}
.d .tks{display:flex;flex:1;flex-direction:column}
.d .tks .task{flex:1}
.d .bh{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
.d .bh b{font-size:14.5px;font-weight:650}
.d .dl2{flex:1;padding:12px 0;border-top:1px solid var(--ml-line)}
.d .dr{display:flex;justify-content:space-between;gap:10px}
.d .dr p:first-child{display:flex;flex-direction:column;min-width:0}
.d .dr b{overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .dr small{font-size:12px;color:var(--ml-muted)}
.d .amt{font-size:14px;font-weight:650}
.d .amt.ok{color:#12893C}
.d .stg{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:10px}
.d .stg i{height:5px;border-radius:3px;background:var(--ml-bar-2)}
.d .stg i.f{background:var(--ml-accent)}
.d .sn{margin-top:7px;font-size:12px;color:var(--ml-muted)}
.d .task{display:flex;align-items:center;gap:11px;padding:11px 0;border-top:1px solid var(--ml-line)}
.d .task p{display:flex;flex-direction:column;min-width:0}
.d .task b{overflow:hidden;font-size:13px;font-weight:600;white-space:nowrap;text-overflow:ellipsis;transition:color .25s ease}
.d .task small{font-size:12px;color:var(--ml-muted)}
.d .task.done b{color:var(--ml-muted);text-decoration:line-through}
@keyframes crm-new{0%,70%{opacity:1}100%{opacity:0}}
@container scr (max-width: 760px){
  .d .tn{padding:0 16px;gap:10px}
  .d .tn .sp,.d .tn .ic,.d .tn .av{display:none}
  .d .tn .tabs{margin-left:0;flex:1}
  .d .tn .brand b,.d .tn .brand em{display:none}
  .d .page{grid-template-columns:minmax(0,1fr);padding:16px 16px 22px}
  .d .rt{order:3}
  .d .seg{grid-template-columns:repeat(3,76px)}
  .d .thumb{width:76px}
  .d .cnt{display:none}
}
@media (prefers-reduced-motion: reduce){.d .live::after{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const ic = (k) => $(`.icons [data-ic="${k}"]`).innerHTML;
      const feed = [
        [
          { i: 'eye', t: 'Opened "Q4 proposal v2"', w: 'Today, 9:41 AM' },
          { i: 'kanban', t: 'Northgate expansion moved to Qualified', w: 'Today, 9:12 AM' },
          { i: 'phone', t: 'Call with Maya Reyes, 14 min', w: 'Mon 12 Oct, 3:40 PM', s: 'Wants all three sites live before Dec 1. Budget is approved.' },
          { i: 'mail', t: 'Sent "Three-site rollout plan"', w: 'Mon 12 Oct, 10:15 AM' },
          { i: 'cal', t: 'Discovery call booked', w: 'Fri 9 Oct, 11:00 AM' },
          { i: 'eye', t: 'Viewed the pricing page twice', w: 'Thu 8 Oct, 4:02 PM' },
          { i: 'globe', t: 'Submitted the "Get a quote" form', w: 'Tue 6 Oct, 8:26 PM' },
        ],
        [
          { i: 'note', t: 'Maya Reyes added a note', w: 'Mon 12 Oct', s: 'Wants all three sites live before Dec 1. Budget is approved.' },
          { i: 'note', t: 'Maya Reyes added a note', w: 'Fri 9 Oct', s: 'Prefers email before 10 AM. Daniel Okafor handles legal review.' },
          { i: 'note', t: 'Tomas Lindqvist added a note', w: 'Tue 6 Oct', s: 'Found us through the Meridian Foods case study.' },
        ],
        [
          { i: 'mail', t: 'Q4 proposal v2', w: 'Today, 9:40 AM - Opened 3 times' },
          { i: 'mail', t: 'Re: Three-site rollout plan', w: 'Mon 12 Oct - Replied' },
          { i: 'mail', t: 'Intro and next steps', w: 'Fri 9 Oct - Opened' },
          { i: 'mail', t: 'Thanks for your enquiry', w: 'Tue 6 Oct - Opened' },
        ],
      ];
      const list = $('.tl');
      const tabs = $$('.seg button');
      const thumb = $('.thumb');
      let now = 0;
      const row = (e, i, fresh) =>
        `<li class="ev${fresh ? ' enter' : ''}" style="--i:${i}"><div class="evi"><span class="eic">${ic(e.i)}</span><div class="etx"><p><b>${e.t}</b>${fresh ? '<span class="pill ok nw">New</span>' : ''}</p><time>${e.w}</time>${e.s ? `<p class="snip">${e.s}</p>` : ''}</div></div></li>`;
      const render = (k, swap) => {
        now = k;
        tabs.forEach((b, i) => {
          b.classList.toggle('on', i === k);
          b.setAttribute('aria-selected', String(i === k));
        });
        thumb.style.transform = `translateX(${k * 100}%)`;
        list.innerHTML = feed[k].map((e, i) => row(e, i, false)).join('');
        list.classList.remove('swap');
        if (swap) {
          void list.offsetWidth;
          list.classList.add('swap');
        }
      };
      tabs.forEach((b, i) => b.addEventListener('click', () => i !== now && render(i, true)));
      render(0, false);
      const addEv = (e) => {
        if (now !== 0) render(0, false);
        const tmp = document.createElement('ul');
        tmp.innerHTML = row(e, 0, true);
        const li = tmp.firstChild;
        list.insertBefore(li, list.firstChild);
        void li.offsetWidth;
        li.classList.remove('enter');
        const live = [...list.children].filter((x) => !x.classList.contains('enter'));
        if (live.length > 8) {
          const old = live[live.length - 1];
          old.classList.add('enter');
          setTimeout(() => old.remove(), 600);
        }
      };
      const input = $('#ml-crm-note');
      const save = $('.sv');
      const field = $('.cmpf');
      input.addEventListener('input', () => (save.disabled = !input.value.trim()));
      const post = () => {
        const v = input.value.trim();
        if (!v) return;
        addEv({ i: 'note', t: 'Maya Reyes added a note', w: 'Just now', s: v });
        input.value = '';
        save.disabled = true;
      };
      save.addEventListener('click', post);
      input.addEventListener('keydown', (e) => e.key === 'Enter' && post());
      const tcount = $('.tc');
      const sync = () => {
        const n = $$('.task').length;
        const d = $$('.task.done').length;
        tcount.textContent = `${d} of ${n} done`;
      };
      $('.tks').addEventListener('click', (e) => {
        const b = e.target.closest('.ck');
        if (!b) return;
        const on = b.classList.toggle('on');
        b.closest('.task').classList.toggle('done', on);
        sync();
      });

      // Autoplay: tick a task, flip tabs, write a note, watch the timeline pick up a new event.
      const texts = ['Sent revised scope. Call booked for Fri 10 AM.', 'Shared the Meridian case study with the team.', 'Confirmed the Q4 budget with finance.'];
      let ti = 0;
      const nextTask = () => {
        let b = $$('.task .ck').find((x) => !x.classList.contains('on'));
        if (!b) {
          $$('.task .ck.on').forEach((x) => {
            x.classList.remove('on');
            x.closest('.task').classList.remove('done');
          });
          sync();
          b = $$('.task .ck')[0];
        }
        return b;
      };
      cur.style.transform = 'translate(700px,520px)';
      (async () => {
        await wait(1300);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          await seq([
            () => press(nextTask(), 0.5, 0.5),
            rest(900),
            () => press(tabs[1], 0.5, 0.5),
            rest(1700),
            () => press(tabs[0], 0.5, 0.5),
            rest(500),
            () => aim(field, 0.3, 0.5),
            () => typeInto(input, texts[ti++ % texts.length], field),
            rest(300),
            () => press(save, 0.5, 0.5),
            rest(2400),
            async () => {
              addEv({ i: 'eye', t: 'Opened "Revised scope"', w: 'Just now' });
              return true;
            },
            rest(2600),
          ]);
          await wait(800);
        }
      })();
    },
    prompt: `Build a contact profile screen for a CRM, full viewport with a top navigation layout (no sidebar).

Layout: a 62px top bar (logo tile + product name, six text tabs with the active one marked by a 2px accent underline, a 230px search field, notifications button, avatar). Below it a page with three columns: 258px, minmax(0, 1fr), 258px, 16px gaps, aligned to the top and scrolling inside the page region.

Left card: a 64px initials avatar with a green presence dot that pings, name (20px, weight 650), job title, a company line with a building icon and a lifecycle pill ("Qualified lead"), three equal quick actions (Email, Call, Note: icon above a 12px label), a definition list (email, phone, location, owner with a mini avatar, source) with hairline separators, then tag pills. Center: a composer card (avatar, input, Save button that stays disabled until there is text) above a card holding a segmented control (Activity, Notes, Emails) and a vertical timeline: a 32px round icon on a hairline spine, a bold event title, a muted timestamp and an optional snippet in a surface-tinted box. Right: a Deals card (name, amount, four-segment stage bar that fills with the accent, close date) and a Tasks card with round checkboxes.

Motion: the segmented control uses one white thumb that glides with transform: translateX and a critically damped spring (587ms). Switching tabs re-enters the timeline rows with opacity and translateY(8px), staggered 45ms. A new event inserts at the top by animating grid-template-rows from 0fr to 1fr (550ms) with a fading "New" pill, and the oldest row collapses away. Checking a task draws the check (pathLength 1, stroke-dashoffset 1 to 0), strikes the title and updates the "x of y done" pill. Enter or Save posts a note into the timeline.

Accessibility: tabs use role="tablist" and aria-selected, checkboxes are buttons with labels, visible focus rings, prefers-reduced-motion stops the presence ping. Phone layout under 760px: single column, tabs scroll horizontally, search and bell hidden, deals and tasks drop below the timeline. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopNav, ProfileCard, Composer, Timeline, DealsCard, TasksCard).`,
  });

  // ---------------------------------------------------------------- 3. Lead list with filters and bulk actions (icon rail shell)
  ML.add({
    id: 'app-crm-leads',
    cat: 'app-crm',
    title: 'Lead list and bulk actions',
    sub: 'Filter chips, rows select, a bar slides up',
    html: `
<div class="app g">
  ${RAIL('leads', 'inbox')}
  <div class="main">
    <main class="page sc">
      <header class="head">
        <div><h1>Leads</h1><p class="sub"><span class="num shown">12</span> of 248 leads, newest first</p></div>
        <label class="search">${I(P.search, 16)}<input class="q" type="search" placeholder="Search leads" aria-label="Search leads"></label>
        <button class="cta" type="button">${I(P.plus, 16)}Add lead</button>
      </header>
      <div class="chips" role="group" aria-label="Filters">
        <div class="st"></div>
        <span class="vr" aria-hidden="true"></span>
        <button class="chip hot" type="button" aria-pressed="false">${I(P.bolt, 14)}Score 70+</button>
        <button class="chip" type="button">Source: Any${I(P.chevD, 14)}</button>
        <button class="chip" type="button">Owner: Anyone${I(P.chevD, 14)}</button>
      </div>
      <section class="card tbl">
        <div class="lr th"><button class="ck all" type="button" aria-label="Select all leads">${CHK(12)}</button><span>Lead</span><span>Status</span><span class="c-src">Source</span><span class="c-sc">Score</span><span>Owner</span><span class="c-lt">Last touch</span></div>
        <div class="rows"></div>
        <p class="none">No leads match these filters.</p>
      </section>
    </main>
  </div>
  <div class="bulk" role="toolbar" aria-label="Bulk actions">
    <span class="bc"><b class="num bn">3</b> selected</span>
    <button class="cta as" type="button">${I(P.user, 15)}Assign to Maya</button>
    <button class="ghost tg" type="button">${I(P.tag, 15)}Add tag</button>
    <button class="ghost em" type="button">${I(P.mail, 15)}Email</button>
    <button class="ic cl" type="button" aria-label="Clear selection">${I(P.x, 16)}</button>
  </div>
  <div class="toast" role="status">${I(P.check, 15, 2.8)}<span></span></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .g{display:grid;grid-template-columns:68px minmax(0,1fr)}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .page{display:flex;flex:1;flex-direction:column;gap:16px;min-height:0;padding:24px 28px 28px}
.d .head{display:flex;align-items:center;gap:12px}
.d .head > div{margin-right:auto;min-width:0}
.d .head .search{width:250px;background:var(--ml-bg)}
.d .chips{display:flex;align-items:center;gap:8px;overflow-x:auto;scrollbar-width:none}
.d .st{display:flex;gap:6px}
.d .chip{display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 13px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .chip:hover{background:var(--ml-surface)}
.d .chip em{padding:2px 6px;border-radius:999px;background:var(--ml-surface);font:600 11px/1.2 var(--ml-mono);font-style:normal;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease}
.d .chip.on,.d .chip[aria-pressed="true"]{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .chip.on em{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .chip svg{color:var(--ml-muted)}
.d .chip[aria-pressed="true"] svg{color:var(--ml-accent)}
.d .vr{flex:none;width:1px;height:20px;margin:0 4px;background:var(--ml-line)}
.d .tbl{display:flex;flex:1 0 auto;flex-direction:column;overflow:hidden}
.d .rows{display:grid;flex:1 0 auto;grid-auto-rows:minmax(56px,64px);align-content:start}
.d .lr{display:grid;grid-template-columns:44px minmax(0,2.3fr) 112px minmax(0,1.2fr) 112px 56px 84px;align-items:center;gap:10px;padding:0 20px 0 18px}
.d .th{height:42px;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .row{position:relative;min-height:56px;border-bottom:1px solid var(--ml-line);font-size:13.5px;transition:background-color .2s ease}
.d .row:last-child{border-bottom:0}
.d .row:hover{background:rgba(244,247,252,.7)}
.d .row.sel{background:var(--ml-accent-soft)}
.d .rows.swap .row{animation:crm-in 460ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 35ms)}
.d .who{display:flex;align-items:center;gap:11px;min-width:0}
.d .who p{display:flex;flex-direction:column;min-width:0}
.d .who b{overflow:hidden;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .who small{overflow:hidden;font-size:12px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .src{overflow:hidden;color:var(--ml-ink-2);white-space:nowrap;text-overflow:ellipsis}
.d .scr{display:flex;align-items:center;gap:9px;font-weight:650}
.d .scr i{flex:1;max-width:46px;height:5px;border-radius:3px;background:var(--ml-bar-2);overflow:hidden}
.d .scr s{display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--s));transform-origin:0 50%}
.d .lt{font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
.d .av.pop{animation:crm-pop 460ms var(--ml-ease)}
.d .none{display:none;padding:36px 0;text-align:center;font-size:13.5px;color:var(--ml-muted)}
.d .tbl.empty .none{display:block}
.d .bulk{position:absolute;left:50%;bottom:24px;z-index:30;display:flex;align-items:center;gap:8px;padding:8px 8px 8px 16px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow-lg);opacity:0;visibility:hidden;transform:translate(-50%,28px);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .25s ease,visibility 0s .6s}
.d .bulk.on{opacity:1;visibility:visible;transform:translate(-50%,0);transition-delay:0s}
.d .bc{margin-right:6px;font-size:13.5px;color:var(--ml-ink-2);white-space:nowrap}
.d .bc b{display:inline-block;min-width:24px;padding:3px 7px;border-radius:999px;background:var(--ml-accent-soft);text-align:center;color:var(--ml-accent-ink)}
.d .bulk .cta,.d .bulk .ghost{height:36px;padding:0 13px}
@container scr (max-width: 760px){
  .d .g{grid-template-columns:minmax(0,1fr)}
  .d .rail{display:none}
  .d .page{padding:18px 16px 110px}
  .d .head{flex-wrap:wrap}
  .d .head .search{order:3;width:100%}
  .d .lr{grid-template-columns:36px minmax(0,1fr) 96px 34px;padding:0 14px 0 12px}
  .d .c-src,.d .c-sc,.d .c-lt,.d .row .src,.d .row .scr,.d .row .lt{display:none}
  .d .bulk{width:calc(100% - 24px);flex-wrap:wrap;justify-content:center;bottom:12px}
  .d .bulk .em,.d .bulk .tg{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const leads = [
        ['Elena Petrova', 'Tidewater Realty', 'New', 'Website form', 82, 'AT', '2h ago'],
        ['Kwame Mensah', 'Atlas Freight', 'Qualified', 'Referral', 91, 'MR', '5h ago'],
        ['Isabel Cruz', 'Corvid Coffee', 'Contacted', 'Instagram ad', 64, 'TL', '1d ago'],
        ['Jia Wen', 'Lumen Labs', 'New', 'Webinar', 58, 'HK', '1d ago'],
        ['Carlos Mendoza', 'Bayside Fitness', 'Contacted', 'Website form', 71, 'MR', '2d ago'],
        ['Noor Haddad', 'Juniper Health', 'Qualified', 'Referral', 88, 'DO', '2d ago'],
        ['Sam Whitfield', 'Solace Studio', 'New', 'LinkedIn', 49, 'AT', '3d ago'],
        ['Ana Lim', 'Northgate', 'Qualified', 'Event booth', 94, 'MR', '3d ago'],
        ['Rafael Santos', 'Meridian Foods', 'Contacted', 'Website form', 67, 'TL', '4d ago'],
        ['Hana Kim', 'Kestrel & Co', 'New', 'Instagram ad', 55, 'HK', '4d ago'],
        ['Luis Ortega', 'Brightline Dental', 'Contacted', 'Referral', 73, 'DO', '5d ago'],
        ['Aiko Tan', 'Fernway Partners', 'New', 'Webinar', 61, 'AT', '6d ago'],
      ].map((l) => ({ n: l[0], c: l[1], s: l[2], src: l[3], sc: l[4], o: l[5], t: l[6], o0: l[5] }));
      const tint = { MR: '', AT: ' t2', TL: ' t3', HK: ' t4', DO: ' t2' };
      const tone = { New: '', Contacted: ' warn', Qualified: ' ok' };
      const rowsEl = $('.rows');
      const tbl = $('.tbl');
      const all = $('.all');
      const bulk = $('.bulk');
      const toast = $('.toast');
      const sel = new Set();
      let status = 'All';
      let hot = false;
      let q = '';
      let toastT = 0;
      const say = (m) => {
        toast.lastChild.textContent = m;
        toast.classList.add('on');
        clearTimeout(toastT);
        toastT = setTimeout(() => toast.classList.remove('on'), 2200);
      };
      const names = ['All', 'New', 'Contacted', 'Qualified'];
      $('.st').innerHTML = names
        .map((n) => `<button class="chip${n === status ? ' on' : ''}" type="button" data-s="${n}">${n}<em class="num">${n === 'All' ? leads.length : leads.filter((l) => l.s === n).length}</em></button>`)
        .join('');
      const vis = () => leads.filter((l) => (status === 'All' || l.s === status) && (!hot || l.sc >= 70) && (!q || (l.n + ' ' + l.c).toLowerCase().includes(q)));
      const paintSel = () => {
        const v = vis();
        $$('.row').forEach((r) => {
          const on = sel.has(r.dataset.n);
          r.classList.toggle('sel', on);
          r.querySelector('.ck').classList.toggle('on', on);
        });
        all.classList.toggle('on', v.length > 0 && v.every((l) => sel.has(l.n)));
        $('.bn').textContent = sel.size;
        bulk.classList.toggle('on', sel.size > 0);
      };
      const render = (swap) => {
        const v = vis();
        [...sel].forEach((n) => v.some((l) => l.n === n) || sel.delete(n));
        rowsEl.innerHTML = v
          .map(
            (l, i) =>
              `<div class="lr row" data-n="${l.n}" style="--i:${i}"><button class="ck" type="button" aria-label="Select ${l.n}">${$('.all').innerHTML}</button><div class="who"><span class="av s">${l.n.split(' ').map((w) => w[0]).join('')}</span><p><b>${l.n}</b><small>${l.c}</small></p></div><span><span class="pill${tone[l.s]}">${l.s}</span></span><span class="src">${l.src}</span><span class="scr num">${l.sc}<i><s style="--s:${l.sc / 100}"></s></i></span><span><span class="av s${tint[l.o]}">${l.o}</span></span><span class="lt">${l.t}</span></div>`
          )
          .join('');
        tbl.classList.toggle('empty', v.length === 0);
        $('.shown').textContent = v.length;
        rowsEl.classList.remove('swap');
        if (swap) {
          void rowsEl.offsetWidth;
          rowsEl.classList.add('swap');
        }
        paintSel();
      };
      const setStatus = (s) => {
        status = s;
        $$('.st .chip').forEach((b) => b.classList.toggle('on', b.dataset.s === s));
        render(true);
      };
      $('.st').addEventListener('click', (e) => {
        const b = e.target.closest('.chip');
        if (b && b.dataset.s !== status) setStatus(b.dataset.s);
      });
      const hotBtn = $('.hot');
      hotBtn.addEventListener('click', () => {
        hot = !hot;
        hotBtn.setAttribute('aria-pressed', String(hot));
        render(true);
      });
      $('.q').addEventListener('input', (e) => {
        q = e.target.value.trim().toLowerCase();
        render(true);
      });
      rowsEl.addEventListener('click', (e) => {
        const r = e.target.closest('.row');
        if (!r || !e.target.closest('.ck')) return;
        sel.has(r.dataset.n) ? sel.delete(r.dataset.n) : sel.add(r.dataset.n);
        paintSel();
      });
      all.addEventListener('click', () => {
        const v = vis();
        const every = v.length > 0 && v.every((l) => sel.has(l.n));
        v.forEach((l) => (every ? sel.delete(l.n) : sel.add(l.n)));
        paintSel();
      });
      const clear = () => {
        sel.clear();
        paintSel();
      };
      $('.cl').addEventListener('click', clear);
      $('.as').addEventListener('click', () => {
        const n = sel.size;
        if (!n) return;
        leads.forEach((l) => sel.has(l.n) && (l.o = 'MR'));
        const picked = [...sel];
        render(false);
        picked.forEach((nm) => {
          const r = $$('.row').find((x) => x.dataset.n === nm);
          if (r) r.querySelector('.lr > span:nth-child(6) .av').classList.add('pop');
        });
        say(`${n} lead${n > 1 ? 's' : ''} assigned to Maya Reyes`);
        sel.clear();
        setTimeout(paintSel, 900);
      });
      $('.tg').addEventListener('click', () => sel.size && say(`Tag added to ${sel.size} leads`));
      $('.em').addEventListener('click', () => sel.size && say(`Email drafted for ${sel.size} leads`));
      render(false);

      // Autoplay: filter to Qualified and back, tick three rows, assign them to Maya.
      const restore = () => leads.forEach((l) => (l.o = l.o0));
      const chip = (n) => $$('.st .chip').find((b) => b.dataset.s === n);
      const rowCk = (i) => () => press($$('.row .ck')[i], 0.5, 0.5);
      cur.style.transform = 'translate(640px,420px)';
      (async () => {
        await wait(1300);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          await seq([
            () => press(chip('Qualified'), 0.5, 0.5),
            rest(1700),
            () => press(chip('All'), 0.5, 0.5, () => {
              restore();
              chip('All').click();
            }),
            rest(900),
            rowCk(0),
            rest(250),
            rowCk(1),
            rest(250),
            rowCk(3),
            rest(900),
            () => press($('.as'), 0.5, 0.5),
            rest(3400),
          ]);
          await wait(600);
        }
      })();
    },
    prompt: `Build a lead list screen for a CRM with an icon-rail shell, full viewport.

Layout: a 68px white rail on the left (logo tile, nine 44px icon buttons, the active one on a soft accent tint with a hairline ring, an unread dot on Inbox, avatar at the bottom) and a scrolling page. Header row: 26px "Leads" title with a muted line ("12 of 248 leads, newest first"), a 250px search field and a primary "Add lead" button. Filter row of 34px pill chips: a status group with counts (All 12, New 5, Contacted 4, Qualified 3, the active chip on accent soft with a ring), a divider, a toggle chip "Score 70+" with aria-pressed, and two dropdown-style chips (Source, Owner). Below, a white card table on a CSS grid (44px checkbox, name+company with initials avatar, status pill, source, score number with a 5px bar, owner avatar, last touch) with a sticky 42px uppercase header and 56px rows separated by hairlines. Status pills: New = accent soft, Contacted = amber tint, Qualified = green tint.

Behavior: status and score chips filter the rows for real (and the search box filters by name or company); the shown count updates, selected rows that disappear are dropped from the selection, an empty state line appears when nothing matches. Each filter change re-enters the rows with opacity and translateY(8px), staggered 35ms. Checkboxes draw their check (pathLength 1, stroke-dashoffset 1 to 0); the header checkbox selects all visible rows. With one or more rows selected a floating white action bar slides up from the bottom centre (translateY 28px to 0, 587ms spring): "3 selected" pill, a primary "Assign to Maya" button, Add tag, Email and a clear button. Assigning swaps the owner avatars with a small pop and shows a dark toast ("3 leads assigned to Maya Reyes"), then the bar slides away.

Accessibility: the action bar is role="toolbar", chips are buttons, rows have labelled checkboxes, focus rings are visible. Phone layout under 760px: hide the rail, keep checkbox, name, status and owner columns, make the search full width and let the action bar span the screen width. Plain HTML, CSS and JS, no libraries; React-friendly structure (IconRail, PageHeader, FilterChips, LeadTable, LeadRow, BulkBar).`,
  });

  // ---------------------------------------------------------------- 4. Deal detail (split panes)
  ML.add({
    id: 'app-crm-deal',
    cat: 'app-crm',
    title: 'Deal detail',
    sub: 'Stage track fills, products re-total',
    html: `
<div class="app g">
  <aside class="lp">
    <div class="lh"><span class="mark">${I(P.mark, 16)}</span><div><b>Deals</b><small class="num">5 open, $98,400</small></div></div>
    <label class="search">${I(P.search, 16)}<input type="search" placeholder="Search deals" aria-label="Search deals"></label>
    <ul class="dlist sc" aria-label="Deals"></ul>
    <div class="card wm"><p class="k">Won this month</p><p class="wv2 num">$30,500</p><p class="wn2">2 deals closed, 1 more likely this week</p></div>
  </aside>
  <main class="dp sc">
    <header class="dh">
      <div class="ti"><p class="bc">Deals<span>/</span><b class="bco"></b></p><h1 class="dn"></h1><p class="sub dsub"></p></div>
      <div class="dv"><p class="k">Deal value</p><p class="big num">$31,000</p></div>
    </header>
    <section class="card stc">
      <div class="sth"><p class="k">Stage</p><span class="pill pr num"></span><span class="pill mute dis num"></span><button class="cta adv" type="button"></button></div>
      <div class="trk">
        <span class="line" aria-hidden="true"><i class="fill"></i></span>
        <div class="nodes" role="group" aria-label="Deal stage"></div>
      </div>
    </section>
    <div class="cols">
      <section class="card prods">
        <div class="bh"><b>Products</b><span class="pill mute num pc"></span></div>
        <div class="pr0 phd"><span>Item</span><span>Qty</span><span>Total</span></div>
        <ul class="plist"></ul>
        <div class="tot"><span>Deal total</span><b class="num ttl">$31,000</b></div>
      </section>
      <div class="side2">
        <section class="card meta">
          <div class="mr"><span>Close date</span><b class="cd"></b></div>
          <div class="mr"><span>Weighted value</span><b class="num wv"></b></div>
          <div class="mr"><span>Owner</span><b class="ow"></b></div>
        </section>
        <section class="card notes">
          <div class="bh"><b>Notes</b></div>
          <ul class="nl"></ul>
          <label class="nf"><input class="ni" type="text" placeholder="Add a note" aria-label="Add a note" autocomplete="off"><button class="sd" type="button" aria-label="Save note">${I(P.send, 15)}</button></label>
        </section>
      </div>
    </div>
    <section class="card act2"><div class="bh"><b>Recent activity</b></div><ul class="al"></ul></section>
  </main>
  ${ICONS(['check'])}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d [hidden]{display:none!important}
.d .g{display:grid;grid-template-columns:292px minmax(0,1fr)}
.d .lp{display:flex;flex-direction:column;gap:14px;min-height:0;padding:20px 16px 16px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .lh{display:flex;align-items:center;gap:11px;padding:0 4px}
.d .lh b{display:block;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .lh small{font-size:12px;color:var(--ml-muted)}
.d .dlist{display:flex;flex:1;flex-direction:column;gap:4px;min-height:0;margin:0 -6px;padding:0 6px 16px}
.d .di{display:flex;align-items:center;gap:11px;width:100%;padding:11px 10px;border-radius:12px;text-align:left;transition:background-color .2s ease,box-shadow .2s ease}
.d .di:hover{background:var(--ml-surface)}
.d .di.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .di .tile{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-bar-2);color:var(--ml-ink-2);font-size:13px;font-weight:650}
.d .di.on .tile{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .di p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .di b{overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .di small{font-size:12px;color:var(--ml-muted)}
.d .di .am{font-size:13px;font-weight:650;text-align:right}
.d .di .am small{display:block;font-weight:500}
.d .wm{padding:14px 16px}
.d .wv2{margin-top:6px;font-size:24px;line-height:1;font-weight:650;letter-spacing:-.03em;color:#12893C}
.d .wn2{margin-top:7px;font-size:12px;color:var(--ml-muted)}
.d .dp{display:flex;flex-direction:column;gap:16px;min-width:0;min-height:0;padding:24px 28px 28px}
.d .dh{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .bc{margin-bottom:6px;font-size:12.5px;color:var(--ml-muted)}
.d .bc span{margin:0 7px;color:var(--ml-bar)}
.d .bc b{font-weight:600;color:var(--ml-ink-2)}
.d .dv{text-align:right}
.d .big{margin-top:2px;font-size:28px;line-height:1.1;font-weight:650;letter-spacing:-.03em}
.d .big.bump{animation:crm-pop 460ms var(--ml-ease)}
.d .stc{padding:16px 18px 14px}
.d .sth{display:flex;align-items:center;gap:8px;margin-bottom:16px}
.d .sth .k{margin-right:4px}
.d .adv{margin-left:auto;height:34px;padding:0 14px}
.d .trk{position:relative}
.d .line{position:absolute;left:10%;right:10%;top:10px;height:3px;border-radius:2px;background:var(--ml-bar-2)}
.d .fill{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(var(--p,0));transform-origin:0 50%;transition:transform 780ms var(--ml-ease)}
.d .nodes{position:relative;display:grid;grid-template-columns:repeat(5,minmax(0,1fr))}
.d .nd{display:flex;flex-direction:column;align-items:center;gap:8px;padding:0 0 2px;font-size:12.5px;font-weight:600;color:var(--ml-muted);transition:color .3s ease,transform 90ms ease-out}
.d .nd i{display:grid;place-items:center;width:23px;height:23px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2px var(--ml-bar);color:#fff;transition:background-color .35s ease,box-shadow .35s ease}
.d .nd i svg{width:12px;height:12px;opacity:0;transform:scale(.5);transition:opacity .25s ease,transform .45s var(--ml-bounce)}
.d .nd.done i{background:var(--ml-accent);box-shadow:none}
.d .nd.done i svg{opacity:1;transform:none}
.d .nd.now i{background:var(--ml-bg);box-shadow:inset 0 0 0 6px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .nd.done,.d .nd.now{color:var(--ml-ink)}
.d .nd:hover{color:var(--ml-ink)}
.d .cols{display:grid;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:16px;align-items:stretch;flex:none}
.d .act2{display:flex;flex:1 0 auto;flex-direction:column;padding:16px 18px 8px}
.d .al{display:flex;flex:1;flex-direction:column}
.d .al li{display:flex;flex:1;align-items:center;gap:12px;min-height:44px;border-top:1px solid var(--ml-line);font-size:13.5px}
.d .al li i{display:grid;flex:none;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .al li i svg{width:12px;height:12px}
.d .who3{margin-left:8px;font-size:12px;color:var(--ml-muted)}
.d .al li span{margin-left:auto;font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .prods{display:flex;flex-direction:column;padding:16px 18px 14px}
.d .plist{flex:1}
.d .bh{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.d .bh b{font-size:14.5px;font-weight:650}
.d .pr0{display:grid;grid-template-columns:minmax(0,1fr) 96px 78px;align-items:center;gap:8px}
.d .phd{padding:0 0 8px;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .phd span:last-child,.d .pr0 .lt{text-align:right}
.d .prow{padding:11px 0;border-bottom:1px solid var(--ml-line);font-size:13.5px}
.d .prow p{display:flex;flex-direction:column;min-width:0}
.d .prow b{overflow:hidden;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .prow small{font-size:12px;color:var(--ml-muted)}
.d .qty{display:flex;align-items:center;justify-content:space-between;height:30px;padding:0 3px;border-radius:9px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .qty button{display:grid;place-items:center;width:24px;height:24px;border-radius:7px;color:var(--ml-ink-2);transition:background-color .2s ease,transform 90ms ease-out}
.d .qty button:hover{background:var(--ml-bg)}
.d .qty span{min-width:20px;text-align:center;font-weight:650}
.d .prow .lt{font-weight:650}
.d .tot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;padding:14px 0 12px;font-size:13.5px;color:var(--ml-muted)}
.d .tot b{font-size:18px;font-weight:650;letter-spacing:-.02em;color:var(--ml-ink)}
.d .side2{display:flex;flex-direction:column;gap:16px;min-width:0}
.d .meta{padding:6px 18px}
.d .mr{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 0;border-bottom:1px solid var(--ml-line);font-size:13px;color:var(--ml-muted)}
.d .mr:last-child{border-bottom:0}
.d .mr b{display:flex;align-items:center;gap:7px;font-weight:600;color:var(--ml-ink)}
.d .notes{display:flex;flex:1;flex-direction:column;padding:16px 18px 14px}
.d .nl{display:flex;flex:1;flex-direction:column}
.d .nt{display:grid;grid-template-rows:1fr;transition:grid-template-rows .5s var(--ml-ease),opacity .35s ease}
.d .nt.enter{grid-template-rows:0fr;opacity:0}
.d .nt > div{display:flex;gap:10px;min-height:0;overflow:hidden;padding-bottom:12px}
.d .nt p{font-size:13px;line-height:1.45;color:var(--ml-ink-2)}
.d .nt small{display:block;margin-top:2px;font-size:11.5px;color:var(--ml-muted)}
.d .nf{display:flex;align-items:center;gap:6px;height:38px;padding:0 5px 0 12px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,background-color .25s ease}
.d .nf:focus-within,.d .nf.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .nf input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:13px}
.d .nf input::placeholder{color:var(--ml-muted)}
.d .sd{display:grid;place-items:center;width:28px;height:28px;border-radius:8px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .dp.swap .sw{animation:crm-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
@container scr (max-width: 760px){
  .d .g{grid-template-columns:minmax(0,1fr)}
  .d .lp{display:none}
  .d .dp{padding:18px 16px 24px}
  .d .dh{align-items:flex-start;flex-direction:column}
  .d .dv{text-align:left}
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .nd{font-size:11px}
  .d .sth{flex-wrap:wrap}
  .d .adv{margin-left:0;width:100%}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const stageNames = ['Qualified', 'Proposal', 'Negotiation', 'Contract', 'Won'];
      const prob = [20, 40, 70, 90, 100];
      const deals = [
        { n: 'Atlas Freight dashboard', co: 'Atlas Freight', ini: 'AF', o: 'Aiko Tan', oi: 'AT', st: 2, close: 'Fri 30 Oct', p: [['Ops dashboard build', 'Fixed scope', 1, 18000], ['Live tracking module', 'Per site', 1, 9500], ['Training workshop', 'Half day', 2, 1750]],
          notes: [['Legal review finished, contract goes out Thursday.', 'Aiko Tan, yesterday'], ['They want live tracking on all depots.', 'Maya Reyes, Mon 12 Oct']] },
        { n: 'Kestrel & Co refresh', co: 'Kestrel & Co', ini: 'KC', o: 'Daniel Okafor', oi: 'DO', st: 1, close: 'Wed 21 Oct', p: [['Brand refresh', 'Identity and guidelines', 1, 12000], ['Website build', 'Eight pages', 1, 10000], ['Copywriting pack', 'Per page', 4, 500]],
          notes: [['Proposal v2 sent with the three-phase plan.', 'Daniel Okafor, Tue 13 Oct'], ['Budget owner is Hana Kim.', 'Maya Reyes, Fri 9 Oct']] },
        { n: 'Juniper Health portal', co: 'Juniper Health', ini: 'JH', o: 'Maya Reyes', oi: 'MR', st: 1, close: 'Fri 30 Oct', p: [['Patient portal', 'Booking and records', 1, 11500], ['Integrations', 'Per system', 2, 1000], ['Support retainer', 'Monthly', 1, 1000]],
          notes: [['Security questionnaire is due next week.', 'Maya Reyes, Mon 12 Oct']] },
        { n: 'Corvid Coffee loyalty', co: 'Corvid Coffee', ini: 'CC', o: 'Hana Kim', oi: 'HK', st: 0, close: 'Fri 6 Nov', p: [['Loyalty app', 'iOS and Android', 1, 4000], ['Launch kit', 'Posters and cards', 2, 700]],
          notes: [['Intro call went well, wants a demo.', 'Hana Kim, Tue 13 Oct']] },
        { n: 'Northgate expansion', co: 'Northgate', ini: 'NG', o: 'Maya Reyes', oi: 'MR', st: 1, close: 'Thu 29 Oct', p: [['Three-site rollout', 'Fixed scope', 1, 15400], ['Staff training', 'Per site', 3, 1000]],
          notes: [['Priya wants all three sites live before Dec 1.', 'Maya Reyes, Mon 12 Oct']] },
        { n: 'Tidewater lead routing', co: 'Tidewater Realty', ini: 'TR', o: 'Aiko Tan', oi: 'AT', st: 1, close: 'Wed 4 Nov', p: [['Lead routing setup', 'Fixed scope', 1, 8000], ['CRM migration', 'Per source', 2, 900]],
          notes: [['Needs round-robin by neighbourhood.', 'Aiko Tan, Tue 13 Oct']] },
        { n: 'Lumen Labs pilot', co: 'Lumen Labs', ini: 'LL', o: 'Priya Nair', oi: 'PN', st: 0, close: 'Thu 12 Nov', p: [['Pilot rollout', 'Eight weeks', 1, 6800], ['Onboarding', 'Per team', 2, 1000]],
          notes: [['Waiting on a security review.', 'Priya Nair, Tue 13 Oct']] },
        { n: 'Solace Studio site', co: 'Solace Studio', ini: 'SS', o: 'Tomas Lindqvist', oi: 'TL', st: 2, close: 'Tue 20 Oct', p: [['Portfolio site', 'Twelve pages', 1, 9800], ['CMS setup', 'Handover included', 1, 1500], ['Care plan', 'Per month', 6, 250]],
          notes: [['Waiting on final copy before signing.', 'Tomas Lindqvist, Mon 12 Oct']] },
      ];
      const fmt = (n) => '$' + n.toLocaleString('en-US');
      const total = (d) => d.p.reduce((a, r) => a + r[2] * r[3], 0);
      const ic = (k) => $(`.icons [data-ic="${k}"]`).innerHTML;
      let sel = 0;
      const dlist = $('.dlist');
      const dp = $('.dp');
      const paintList = () => {
        dlist.innerHTML = deals
          .map((d, i) => `<li><button class="di${i === sel ? ' on' : ''}" type="button" data-i="${i}"><span class="tile">${d.ini}</span><p><b>${d.n}</b><small>${d.co}</small></p><span class="am num">${fmt(total(d))}<small>${stageNames[d.st]}</small></span></button></li>`)
          .join('');
        const sum = deals.reduce((a, d) => a + total(d), 0);
        $('.lh small').textContent = `${deals.length} open, ${fmt(sum)}`;
      };
      const roll = (el, to) => {
        const from = +el.dataset.n || 0;
        el.dataset.n = to;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const u = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 600);
          el.textContent = fmt(Math.round(from + (to - from) * (1 - Math.pow(1 - u, 3))));
          if (u < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const money = () => {
        const d = deals[sel];
        const t = total(d);
        roll($('.big'), t);
        roll($('.ttl'), t);
        $('.big').classList.remove('bump');
        void $('.big').offsetWidth;
        $('.big').classList.add('bump');
        $('.wv').textContent = fmt(Math.round((t * prob[d.st]) / 100));
        const li = $$('.di')[sel];
        if (li) li.querySelector('.am').firstChild.textContent = fmt(t);
        const sum = deals.reduce((a, x) => a + total(x), 0);
        $('.lh small').textContent = `${deals.length} open, ${fmt(sum)}`;
      };
      const paintStage = () => {
        const d = deals[sel];
        $$('.nd').forEach((b, i) => {
          b.classList.toggle('done', i < d.st);
          b.classList.toggle('now', i === d.st);
          if (i === d.st) b.setAttribute('aria-current', 'step');
          else b.removeAttribute('aria-current');
        });
        $('.fill').style.setProperty('--p', d.st / 4);
        $('.pr').textContent = `${prob[d.st]}% likely`;
        $('.dis').textContent = `${[3, 9, 6, 2, 0][d.st]} days in stage`;
        const adv = $('.adv');
        adv.hidden = d.st === 4;
        adv.textContent = d.st < 4 ? `Move to ${stageNames[d.st + 1]}` : '';
        $('.wv').textContent = fmt(Math.round((total(d) * prob[d.st]) / 100));
        const li = $$('.di')[sel];
        if (li) li.querySelector('.am small').textContent = stageNames[d.st];
      };
      const paintProducts = () => {
        const d = deals[sel];
        $('.plist').innerHTML = d.p
          .map((r, i) => `<li class="pr0 prow sw" style="--i:${i + 3}"><p><b>${r[0]}</b><small>${r[1]} - ${fmt(r[3])}</small></p><span class="qty"><button type="button" data-r="${i}" data-d="-1" aria-label="Decrease ${r[0]}">&minus;</button><span class="num">${r[2]}</span><button type="button" data-r="${i}" data-d="1" aria-label="Increase ${r[0]}">+</button></span><span class="lt num">${fmt(r[2] * r[3])}</span></li>`)
          .join('');
        $('.pc').textContent = `${d.p.length} items`;
      };
      const noteHtml = (n, enter) => `<li class="nt${enter ? ' enter' : ''}"><div><span class="av s t2">${n[1].split(' ').map((w) => w[0]).join('').slice(0, 2)}</span><p>${n[0]}<small>${n[1]}</small></p></div></li>`;
      const paintNotes = () => {
        $('.nl').innerHTML = deals[sel].notes.slice(0, 2).map((n) => noteHtml(n, false)).join('');
        const d = deals[sel];
        $('.al').innerHTML = [['Stage is ' + stageNames[d.st], d.o, '2 days ago'], ['Quote v3 sent to ' + d.co, d.o, 'Mon 12 Oct'], ['Call logged, 22 min', 'Maya Reyes', 'Fri 9 Oct'], ['Deal created from a referral', d.o, 'Tue 29 Sep']].map((r) => `<li><i>${ic('check')}</i>${r[0]}<small class="who3">${r[1]}</small><span>${r[2]}</span></li>`).join('');
      };
      const render = (swap) => {
        const d = deals[sel];
        $('.bco').textContent = d.n;
        $('.dn').textContent = d.n;
        $('.dsub').textContent = `${d.co} - owned by ${d.o}`;
        $('.cd').textContent = d.close;
        $('.ow').innerHTML = `<span class="av s t2">${d.oi}</span>${d.o}`;
        $('.nodes').innerHTML = stageNames.map((n, i) => `<button class="nd" type="button" data-s="${i}"><i>${ic('check')}</i>${n}</button>`).join('');
        paintList();
        paintStage();
        paintProducts();
        paintNotes();
        $('.big').dataset.n = total(d);
        $('.ttl').dataset.n = total(d);
        $('.big').textContent = fmt(total(d));
        $('.ttl').textContent = fmt(total(d));
        $$('.dh,.stc,.prods,.meta,.notes').forEach((el, i) => {
          el.classList.add('sw');
          el.style.setProperty('--i', i);
        });
        dp.classList.remove('swap');
        if (swap) {
          void dp.offsetWidth;
          dp.classList.add('swap');
        }
      };
      dlist.addEventListener('click', (e) => {
        const b = e.target.closest('.di');
        if (!b || +b.dataset.i === sel) return;
        sel = +b.dataset.i;
        render(true);
      });
      $('.nodes').addEventListener('click', (e) => {
        const b = e.target.closest('.nd');
        if (!b) return;
        deals[sel].st = +b.dataset.s;
        paintStage();
      });
      $('.adv').addEventListener('click', () => {
        const d = deals[sel];
        if (d.st < 4) {
          d.st++;
          paintStage();
        }
      });
      $('.plist').addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        const r = deals[sel].p[+b.dataset.r];
        r[2] = Math.max(0, Math.min(99, r[2] + +b.dataset.d));
        b.parentNode.querySelector('.num').textContent = r[2];
        b.closest('.prow').querySelector('.lt').textContent = fmt(r[2] * r[3]);
        money();
      });
      const ni = $('.ni');
      const nf = $('.nf');
      const post = () => {
        const v = ni.value.trim();
        if (!v) return;
        const d = deals[sel];
        d.notes.unshift([v, 'Maya Reyes, just now']);
        const tmp = document.createElement('ul');
        tmp.innerHTML = noteHtml(d.notes[0], true);
        const li = tmp.firstChild;
        const nl = $('.nl');
        nl.insertBefore(li, nl.firstChild);
        void li.offsetWidth;
        li.classList.remove('enter');
        const live = [...nl.children].filter((x) => !x.classList.contains('enter'));
        if (live.length > 2) {
          const old = live[live.length - 1];
          old.classList.add('enter');
          setTimeout(() => old.remove(), 560);
        }
        ni.value = '';
      };
      $('.sd').addEventListener('click', post);
      ni.addEventListener('keydown', (e) => e.key === 'Enter' && post());
      render(false);

      // Autoplay: open another deal, move its stage, change a quantity; then back to write a note.
      const pickDeal = (i) => () => press($$('.di')[i], 0.5, 0.5);
      let lap = 0;
      const notesText = ['Contract signed off by finance.', 'Kick-off booked for the 3rd.', 'Sent the final quote to legal.'];
      cur.style.transform = 'translate(180px,520px)';
      (async () => {
        await wait(1300);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const a = lap++ % 2 === 0;
          if (a) {
            await seq([
              pickDeal(1),
              rest(1500),
              () => press($$('.nd')[deals[sel].st === 1 ? 2 : 1], 0.5, 0.4),
              rest(1500),
              () => press($$('.qty button')[3], 0.5, 0.5),
              rest(1200),
              () => press($$('.qty button')[2], 0.5, 0.5),
              rest(1600),
            ]);
          } else {
            await seq([
              pickDeal(0),
              rest(1500),
              () => aim(nf, 0.35, 0.5),
              () => typeInto(ni, notesText[Math.floor(lap / 2) % notesText.length], nf),
              rest(250),
              () => press($('.sd'), 0.5, 0.5),
              rest(2400),
            ]);
          }
          await wait(600);
        }
      })();
    },
    prompt: `Build a deal detail screen for a CRM as a split-pane layout, full viewport, with no global sidebar.

Layout: CSS grid, columns 292px and minmax(0, 1fr). Left pane (white, hairline right border): a logo tile with the "Deals" title and a summary line (open deal count and total value), a search field, and a scrolling list of deal buttons (38px initials tile, deal name, company, amount, stage label); the selected row sits on accent soft with a hairline ring. Right pane (scrolls): header with a breadcrumb, a 26px deal title, a muted line (company, owner) and the deal value at 28px on the right; a Stage card with a five-step track (Qualified, Proposal, Negotiation, Contract, Won): a 3px line behind the nodes, done nodes are filled accent with a check, the current node has a thick accent ring and a soft halo, plus a probability pill, a "days in stage" pill and a "Move to <next stage>" button; below, two columns: a Products card (item and unit price, a quantity stepper with minus and plus, line total, and a bold deal total) and a stack of a details card (close date, weighted value, owner) and a Notes card with a send field.

Motion and behavior: the track fill is a single element with transform: scaleX(stage / 4), origin left, and a 780ms ease-out curve; nodes swap their fill with a check that pops in (slight overshoot spring). Clicking a node or the Move button changes the stage for real and updates probability, days in stage and the weighted value. Quantity steppers update the line total, the deal total and the header value, which count up over 600ms and pop once (scale 1.12), and the left list amount follows. Selecting another deal re-enters the right pane blocks with opacity and translateY(8px), staggered 45ms. Adding a note inserts it at the top using grid-template-rows 0fr to 1fr and collapses the oldest.

Accessibility: nodes are buttons in a labelled group with aria-current="step", steppers have aria-labels, focus rings are visible, prefers-reduced-motion drops the pop and stagger. Phone layout under 760px: hide the left pane, stack the header, products and notes in one column, make the Move button full width. Plain HTML, CSS and JS, no libraries; React-friendly structure (DealList, DealHeader, StageTrack, ProductsTable, QuantityStepper, DetailsCard, NotesCard).`,
  });

  // ---------------------------------------------------------------- 5. Unified conversations inbox (rail + three panes)
  ML.add({
    id: 'app-crm-inbox',
    cat: 'app-crm',
    title: 'Unified inbox',
    sub: 'SMS, email and chat land in one list',
    html: `
<div class="app g">
  ${RAIL('inbox')}
  <section class="lp">
    <div class="lh"><div><h1>Inbox</h1><p class="sub unr"></p></div><button class="ic cmpb" type="button" aria-label="New message">${I(P.pencil, 17)}</button></div>
    <div class="tabw"><div class="tabs2" role="tablist" aria-label="Channel"></div><i class="ind" aria-hidden="true"></i></div>
    <div class="cvl sc"></div>
  </section>
  <section class="tp">
    <header class="th2"><span class="av thn"></span><div class="thm"><b class="thname"></b><small class="thco"></small></div><span class="pill thch"></span></header>
    <div class="subj"></div>
    <div class="msgs sc"></div>
    <div class="rpl"><span class="via"></span><label class="rf"><input class="ri" type="text" placeholder="Write a reply" aria-label="Write a reply" autocomplete="off"></label><button class="sn2" type="button" aria-label="Send reply">${I(P.send, 17)}</button></div>
  </section>
  <aside class="rp">
    <div class="rh"><span class="av l rav"></span><b class="rn"></b><small class="rc"></small><p class="rt2"></p></div>
    <dl class="rd"><div><dt>Email</dt><dd class="re"></dd></div><div><dt>Phone</dt><dd class="rph num"></dd></div><div><dt>Local time</dt><dd class="rtz num"></dd></div></dl>
    <label class="pn"><span class="k">Private note</span><textarea class="pnt" placeholder="Add a private note" aria-label="Private note"></textarea></label>
    <div class="rdeal"><p class="k">Open deal</p><b class="dn2"></b><p class="dm"><span class="num da"></span><span class="pill ds"></span></p></div>
  </aside>
  ${ICONS(['sms', 'mail', 'msg'])}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d [hidden]{display:none!important}
.d .g{display:grid;grid-template-columns:68px 300px minmax(0,1fr) 248px}
.d .lp{display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .lh{display:flex;align-items:flex-start;justify-content:space-between;padding:22px 18px 14px}
.d .lh h1{font-size:22px}
.d .tabw{position:relative;margin:0 18px;border-bottom:1px solid var(--ml-line)}
.d .tabs2{display:grid;grid-template-columns:repeat(4,minmax(0,1fr))}
.d .tabs2 button{display:flex;align-items:center;justify-content:center;gap:5px;height:38px;font-size:13px;font-weight:600;color:var(--ml-muted);transition:color .25s ease}
.d .tabs2 button.on{color:var(--ml-ink)}
.d .tabs2 em{font:600 10.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .ind{position:absolute;left:0;bottom:-1px;width:25%;height:2px;border-radius:2px;background:var(--ml-accent);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .cvl{flex:1;min-height:0;padding:8px 8px 14px}
.d .cvl.swap .cv{animation:crm-in 460ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 40ms)}
.d .cv{position:relative;display:flex;align-items:center;gap:12px;width:100%;padding:11px 12px;border-radius:14px;text-align:left;transition:transform var(--ml-spring-dur) var(--ml-spring),background-color .2s ease}
.d .cv:hover{background:var(--ml-surface)}
.d .cv.on{background:var(--ml-accent-soft)}
.d .cv.fresh{animation:crm-fresh 2.6s ease}
.d .avw{position:relative;flex:none}
.d .avw .av{width:40px;height:40px;font-size:13px}
.d .chb{position:absolute;right:-3px;bottom:-3px;display:grid;place-items:center;width:18px;height:18px;border-radius:50%;background:var(--ml-bg);box-shadow:0 0 0 1.5px var(--ml-line);color:var(--ml-accent)}
.d .chb svg{width:10px;height:10px}
.d .cm{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0}
.d .r1{display:flex;align-items:baseline;justify-content:space-between;gap:8px}
.d .r1 b{overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .r1 time{flex:none;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .r2{overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .cv.un .r1 b,.d .cv.un .r2{color:var(--ml-ink)}
.d .cv.un .r1 b{font-weight:700}
.d .cv.un .r2{padding-right:18px}
.d .ud{position:absolute;right:12px;bottom:15px;width:8px;height:8px;border-radius:50%;background:var(--ml-accent);transform:scale(0);transition:transform .4s var(--ml-bounce)}
.d .cv.un .ud{transform:scale(1)}
.d .tp{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .th2{display:flex;align-items:center;gap:12px;height:68px;padding:0 22px;background:rgba(255,255,255,.7);border-bottom:1px solid var(--ml-line)}
.d .thm{display:flex;flex:1;flex-direction:column;min-width:0}
.d .thm b{font-size:15px;font-weight:650}
.d .thm small{font-size:12.5px;color:var(--ml-muted)}
.d .thch{gap:6px}
.d .thch svg{width:12px;height:12px}
.d .subj{display:flex;align-items:center;gap:8px;margin:14px 22px 0;padding:9px 12px;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600}
.d .subj svg{width:15px;height:15px;color:var(--ml-accent)}
.d .msgs{display:flex;flex:1;flex-direction:column;gap:10px;min-height:0;padding:16px 22px 12px}
.d .dv2{align-self:center;padding:3px 10px;border-radius:999px;background:var(--ml-bar-2);font-size:11px;font-weight:600;color:var(--ml-muted)}
.d .b{max-width:78%;padding:10px 13px;border-radius:16px;font-size:13.5px;line-height:1.45}
.d .b.in{align-self:flex-start;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 2px rgba(35,15,10,.04);border-bottom-left-radius:5px}
.d .b.out{align-self:flex-end;color:#fff;background:var(--ml-grad);border-bottom-right-radius:5px;box-shadow:0 6px 14px rgba(255,68,51,.2)}
.d .b time{display:block;margin-top:4px;font:500 10.5px/1 var(--ml-mono);opacity:.6}
.d .b.new{animation:crm-in 460ms var(--ml-spring) both}
.d .b.typing{display:flex;gap:4px;padding:14px 14px}
.d .b.typing i{width:7px;height:7px;border-radius:50%;background:var(--ml-bar);animation:crm-dot 1.1s ease-in-out infinite}
.d .b.typing i:nth-child(2){animation-delay:.15s}.d .b.typing i:nth-child(3){animation-delay:.3s}
.d .msgs.swap > *{animation:crm-in 460ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
.d .rpl{display:flex;align-items:center;gap:10px;padding:12px 18px 18px;border-top:1px solid var(--ml-line);background:var(--ml-bg)}
.d .via{flex:none;display:inline-flex;align-items:center;gap:6px;height:34px;padding:0 11px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:600;white-space:nowrap}
.d .via svg{width:13px;height:13px}
.d .rf{flex:1;display:flex;align-items:center;min-width:0;height:42px;padding:0 14px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,background-color .25s ease}
.d .rf:focus-within,.d .rf.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .rf input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:13.5px}
.d .rf input::placeholder{color:var(--ml-muted)}
.d .sn2{display:grid;flex:none;place-items:center;width:42px;height:42px;border-radius:12px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22);transition:transform 90ms ease-out}
.d .rp{display:flex;flex-direction:column;gap:16px;min-height:0;padding:22px 18px;overflow-y:auto;background:var(--ml-bg);border-left:1px solid var(--ml-line);scrollbar-width:thin}
.d .rh{display:flex;flex-direction:column;align-items:center;text-align:center}
.d .rn{margin-top:12px;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .rc{font-size:12.5px;color:var(--ml-muted)}
.d .rt2{display:flex;flex-wrap:wrap;justify-content:center;gap:6px;margin-top:12px}
.d .rd div{display:flex;flex-direction:column;gap:2px;padding:10px 0;border-top:1px solid var(--ml-line);font-size:13px}
.d .rd dt{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .rd dd{overflow:hidden;font-weight:550;white-space:nowrap;text-overflow:ellipsis}
.d .pn{display:flex;flex:1;flex-direction:column;gap:8px;min-height:84px}
.d .pnt{flex:1;padding:11px 12px;border:0;outline:0;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);resize:none;font-size:13px;line-height:1.5}
.d .pnt:focus{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .rdeal{padding:14px;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .rdeal b{display:block;margin-top:8px;font-size:13.5px;font-weight:650}
.d .dm{display:flex;align-items:center;justify-content:space-between;margin-top:8px}
.d .da{font-size:16px;font-weight:650}
@keyframes crm-fresh{0%,35%{background:var(--ml-accent-soft)}100%{background:transparent}}
@keyframes crm-dot{0%,100%{transform:translateY(0);opacity:.5}50%{transform:translateY(-4px);opacity:1}}
@container scr (max-width: 760px){
  .d .g{grid-template-columns:minmax(0,1fr)}
  .d .rail,.d .tp,.d .rp{display:none}
  .d .lp{border-right:0}
}
@media (prefers-reduced-motion: reduce){.d .b.typing i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const ic = (k) => $(`.icons [data-ic="${k}"]`).innerHTML;
      const chn = { sms: ['SMS', 'sms'], mail: ['Email', 'mail'], chat: ['Chat', 'msg'] };
      const tints = ['', ' t2', ' t3', ' t4'];
      const convs = [
        { id: 'noor', n: 'Noor Haddad', co: 'Juniper Health', ch: 'chat', t: '9:52 AM', un: true, tags: ['Hot lead', 'Healthcare'], em: 'noor@juniperhealth.co', ph: '+1 (312) 555-0187', tz: '9:52 AM', deal: ['Patient portal', '$14,500', 'Proposal'],
          m: [['in', 'Hi! Do you support HIPAA-compliant forms?', '9:50 AM'], ['in', 'We would need a signed BAA before we start.', '9:52 AM']] },
        { id: 'aiko', n: 'Aiko Tan', co: 'Fernway Partners', ch: 'mail', subj: 'Re: Q4 proposal', t: '9:41 AM', un: false, tags: ['Partner'], em: 'aiko@fernway.co', ph: '+1 (206) 555-0123', tz: '9:52 AM', deal: ['Referral program', '$4,200', 'Qualified'],
          m: [['out', 'Hi Aiko, attaching the Q4 proposal with the three-phase plan.', 'Tue 4:10 PM'], ['in', 'Thanks Maya. Can we move our call to Thursday at 10?', '9:41 AM']] },
        { id: 'carlos', n: 'Carlos Mendoza', co: 'Bayside Fitness', ch: 'sms', t: '9:15 AM', un: false, tags: ['Gym', 'Walkthrough'], em: 'carlos@baysidefit.co', ph: '+1 (415) 555-0166', tz: '9:52 AM', deal: ['Class booking', '$7,900', 'Won'],
          m: [['out', 'Morning Carlos, we are on for the studio walkthrough at 10.', '8:30 AM'], ['in', 'Running 10 min late, see you at the gym', '9:15 AM']] },
        { id: 'priya', n: 'Priya Nair', co: 'Northgate', ch: 'mail', subj: 'Revised scope', t: 'Yesterday', un: false, tags: ['Decision maker'], em: 'priya@northgate.co', ph: '+1 (415) 555-0142', tz: '11:52 AM', deal: ['Northgate expansion', '$18,400', 'Qualified'],
          m: [['out', 'Sending the revised scope with all three sites.', 'Tue 2:05 PM'], ['in', 'Thanks, the revised scope looks right.', 'Tue 5:30 PM']] },
        { id: 'luis', n: 'Luis Ortega', co: 'Brightline Dental', ch: 'sms', t: 'Yesterday', un: false, tags: ['Renewal'], em: 'luis@brightline.co', ph: '+1 (628) 555-0109', tz: '9:52 AM', deal: ['Retainer renewal', '$6,200', 'Qualified'],
          m: [['out', 'Renewal paperwork is in your inbox.', 'Tue 1:12 PM'], ['in', 'Got it, sending the signed copy tonight.', 'Tue 6:48 PM']] },
        { id: 'elena', n: 'Elena Petrova', co: 'Tidewater Realty', ch: 'chat', t: 'Mon', un: false, tags: ['New lead'], em: 'elena@tidewater.co', ph: '+1 (305) 555-0150', tz: '12:52 PM', deal: ['Lead routing setup', '$9,800', 'Qualified'],
          m: [['in', 'Is there a free trial?', 'Mon 3:20 PM'], ['out', 'Yes, 14 days with no card needed.', 'Mon 3:24 PM']] },
        { id: 'kwame', n: 'Kwame Mensah', co: 'Atlas Freight', ch: 'mail', subj: 'Invoice question', t: 'Mon', un: true, tags: ['Customer'], em: 'kwame@atlasfreight.co', ph: '+1 (713) 555-0132', tz: '11:52 AM', deal: ['Ops dashboard', '$31,000', 'Negotiation'],
          m: [['in', 'Quick question about the October invoice.', 'Mon 10:02 AM']] },
        { id: 'jia', n: 'Jia Wen', co: 'Lumen Labs', ch: 'sms', t: 'Mon', un: false, tags: ['Pilot'], em: 'jia@lumenlabs.co', ph: '+1 (510) 555-0174', tz: '9:52 AM', deal: ['Pilot rollout', '$8,800', 'Qualified'],
          m: [['out', 'Pilot plan is attached, any questions?', 'Mon 9:30 AM'], ['in', 'Looks good, checking with my team.', 'Mon 11:48 AM']] },
        { id: 'hana', n: 'Hana Kim', co: 'Kestrel & Co', ch: 'mail', subj: 'Proposal v2', t: 'Sun', un: false, tags: ['Budget owner'], em: 'hana@kestrel.co', ph: '+1 (917) 555-0128', tz: '12:52 PM', deal: ['Brand and site refresh', '$24,000', 'Proposal'],
          m: [['out', 'Proposal v2 is in your inbox.', 'Sun 6:14 PM'], ['in', 'Thanks, reading it tonight.', 'Sun 8:02 PM']] },
        { id: 'sam', n: 'Sam Whitfield', co: 'Solace Studio', ch: 'chat', t: 'Sun', un: false, tags: ['Design'], em: 'sam@solacestudio.co', ph: '+1 (503) 555-0191', tz: '9:52 AM', deal: ['Portfolio site', '$12,800', 'Negotiation'],
          m: [['in', 'Can you hold the launch to November?', 'Sun 3:10 PM'], ['out', 'Yes, November works for us.', 'Sun 3:18 PM']] },
        { id: 'isabel', n: 'Isabel Cruz', co: 'Corvid Coffee', ch: 'sms', t: 'Fri', un: false, tags: ['Retail'], em: 'isabel@corvidcoffee.co', ph: '+1 (206) 555-0166', tz: '9:52 AM', deal: ['Loyalty program', '$5,400', 'Qualified'],
          m: [['out', 'Demo is booked for Thursday at 2.', 'Fri 4:40 PM'], ['in', 'See you then!', 'Fri 4:52 PM']] },
      ];
      const byId = (id) => convs.find((c) => c.id === id);
      const ini = (n) => n.split(' ').map((w) => w[0]).join('');
      const pv = (c) => {
        const l = c.m[c.m.length - 1];
        return (l[0] === 'out' ? 'You: ' : '') + l[1];
      };
      const k = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      let tab = 'all';
      let selId = 'aiko';
      const tabDefs = [['all', 'All'], ['sms', 'SMS'], ['mail', 'Email'], ['chat', 'Chat']];
      const listEl = $('.cvl');
      const msgs = $('.msgs');
      const paintTabs = () => {
        $('.tabs2').innerHTML = tabDefs
          .map(([k2, l], i) => `<button type="button" role="tab" class="${k2 === tab ? 'on' : ''}" aria-selected="${k2 === tab}" data-t="${k2}">${l}<em class="num">${k2 === 'all' ? convs.length : convs.filter((c) => c.ch === k2).length}</em></button>`)
          .join('');
        $('.ind').style.transform = `translateX(${tabDefs.findIndex((x) => x[0] === tab) * 100}%)`;
        $('.unr').textContent = `${convs.filter((c) => c.un).length} unread`;
      };
      const renderList = (mode, freshId) => {
        const first = new Map();
        if (mode === 'flip') $$('.cv').forEach((r) => first.set(r.dataset.id, r.getBoundingClientRect().top));
        const arr = convs.filter((c) => tab === 'all' || c.ch === tab);
        listEl.innerHTML = arr
          .map((c, i) => `<button class="cv${c.id === selId ? ' on' : ''}${c.un ? ' un' : ''}" type="button" data-id="${c.id}" style="--i:${i}"><span class="avw"><span class="av${tints[convs.indexOf(c) % 4]}">${ini(c.n)}</span><span class="chb">${ic(chn[c.ch][1])}</span></span><span class="cm"><span class="r1"><b>${c.n}</b><time>${c.t}</time></span><span class="r2">${pv(c)}</span></span><i class="ud"></i></button>`)
          .join('');
        listEl.classList.remove('swap');
        if (mode === 'swap') {
          void listEl.offsetWidth;
          listEl.classList.add('swap');
        }
        if (mode === 'flip') {
          const s = k();
          $$('.cv').forEach((r) => {
            const f = first.get(r.dataset.id);
            if (f == null) return;
            const dy = (f - r.getBoundingClientRect().top) / s;
            if (Math.abs(dy) < 1) return;
            r.style.transition = 'none';
            r.style.transform = `translateY(${dy}px)`;
          });
          void root.offsetWidth;
          $$('.cv').forEach((r) => {
            r.style.transition = '';
            r.style.transform = '';
          });
        }
        if (freshId) {
          const r = $$('.cv').find((x) => x.dataset.id === freshId);
          if (r) r.classList.add('fresh');
        }
        paintTabs();
      };
      const bubble = (m, fresh) => `<div class="b ${m[0]}${fresh ? ' new' : ''}">${m[1]}<time>${m[2]}</time></div>`;
      const toEnd = () => msgs.scrollTo({ top: msgs.scrollHeight, behavior: 'smooth' });
      const renderThread = (swap) => {
        const c = byId(selId);
        $('.thn').textContent = ini(c.n);
        $('.thn').className = 'av thn' + tints[convs.indexOf(c) % 4];
        $('.thname').textContent = c.n;
        $('.thco').textContent = c.co;
        $('.thch').innerHTML = ic(chn[c.ch][1]) + chn[c.ch][0];
        const sj = $('.subj');
        sj.hidden = !c.subj;
        sj.innerHTML = c.subj ? ic('mail') + c.subj : '';
        $('.via').innerHTML = ic(chn[c.ch][1]) + 'Reply by ' + chn[c.ch][0];
        msgs.innerHTML = '<span class="dv2">Today</span>' + c.m.slice(-6).map((m) => bubble(m, false)).join('');
        [...msgs.children].forEach((el, i) => el.style.setProperty('--i', i));
        msgs.classList.remove('swap');
        if (swap) {
          void msgs.offsetWidth;
          msgs.classList.add('swap');
        }
        msgs.scrollTop = msgs.scrollHeight;
        $('.rav').textContent = ini(c.n);
        $('.rav').className = 'av l rav' + tints[convs.indexOf(c) % 4];
        $('.rn').textContent = c.n;
        $('.rc').textContent = c.co;
        $('.rt2').innerHTML = c.tags.map((t) => `<span class="pill mute">${t}</span>`).join('');
        $('.re').textContent = c.em;
        $('.rph').textContent = c.ph;
        $('.rtz').textContent = c.tz;
        $('.dn2').textContent = c.deal[0];
        $('.da').textContent = c.deal[1];
        $('.ds').textContent = c.deal[2];
      };
      const open = (id) => {
        selId = id;
        const c = byId(id);
        c.un = false;
        $$('.cv').forEach((r) => {
          r.classList.toggle('on', r.dataset.id === id);
          if (r.dataset.id === id) r.classList.remove('un');
        });
        paintTabs();
        renderThread(true);
      };
      const setTab = (t) => {
        if (t === tab) return;
        tab = t;
        renderList('swap');
      };
      $('.tabs2').addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (b) setTab(b.dataset.t);
      });
      listEl.addEventListener('click', (e) => {
        const b = e.target.closest('.cv');
        if (b && b.dataset.id !== selId) open(b.dataset.id);
      });
      const ri = $('.ri');
      const rf = $('.rf');
      const send = () => {
        const v = ri.value.trim();
        if (!v) return;
        const c = byId(selId);
        const m = ['out', v, 'Now'];
        c.m.push(m);
        c.t = 'Now';
        msgs.insertAdjacentHTML('beforeend', bubble(m, true));
        const row = $$('.cv').find((x) => x.dataset.id === selId);
        if (row) {
          row.querySelector('.r2').textContent = pv(c);
          row.querySelector('time').textContent = 'Now';
        }
        ri.value = '';
        toEnd();
      };
      $('.sn2').addEventListener('click', send);
      ri.addEventListener('keydown', (e) => e.key === 'Enter' && send());
      paintTabs();
      renderList('plain');
      renderThread(false);

      // an incoming message: a typing indicator first when the thread is open, then the bubble; the row jumps to the top
      const incoming = async (id, text) => {
        const c = byId(id);
        if (id === selId) {
          msgs.insertAdjacentHTML('beforeend', '<div class="b in typing new" aria-label="Typing"><i></i><i></i><i></i></div>');
          toEnd();
          await wait(1400);
          const t = $('.typing');
          if (t) t.remove();
          const m = ['in', text, 'Now'];
          c.m.push(m);
          msgs.insertAdjacentHTML('beforeend', bubble(m, true));
          toEnd();
        } else c.m.push(['in', text, 'Now']);
        c.t = 'Now';
        c.un = id !== selId;
        convs.splice(convs.indexOf(c), 1);
        convs.unshift(c);
        renderList('flip', id);
      };

      // Autoplay: filter by SMS, open a thread, reply, get an answer, and a new message arrives elsewhere.
      const laps = [
        { open: 'noor', reply: 'Yes, every form is HIPAA-ready. Sending the BAA today.', back: 'Perfect, please do.', arrive: ['kwame', 'Can you resend invoice 1042 as a PDF?'] },
        { open: 'carlos', reply: 'No rush, I will keep the room open.', back: 'On my way now, thanks!', arrive: ['luis', 'Signed copy is on its way'] },
        { open: 'aiko', reply: 'Thursday at 10 works. Invite is on its way.', back: 'Great, talk then.', arrive: ['noor', 'Could we add a staff directory too?'] },
      ];
      let lap = 0;
      const tabBtn = (t) => () => press($$('.tabs2 button').find((b) => b.dataset.t === t), 0.5, 0.5);
      cur.style.transform = 'translate(380px,300px)';
      (async () => {
        await wait(1300);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const L = laps[lap++ % laps.length];
          await seq([
            tabBtn('sms'),
            rest(1500),
            tabBtn('all'),
            rest(500),
            () => press($$('.cv').find((b) => b.dataset.id === L.open), 0.5, 0.5),
            rest(1100),
            () => aim(rf, 0.3, 0.5),
            () => typeInto(ri, L.reply, rf),
            rest(250),
            () => press($('.sn2'), 0.5, 0.5),
            rest(900),
            async () => {
              await incoming(L.open, L.back);
              return true;
            },
            rest(1600),
            async () => {
              await incoming(L.arrive[0], L.arrive[1]);
              return true;
            },
            rest(2600),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a unified conversations inbox for a CRM (SMS, email and chat in one list), full viewport, three panes next to an icon rail.

Layout: CSS grid, columns 68px (icon rail), 300px (conversation list), minmax(0, 1fr) (thread), 248px (contact panel). List pane (white): a 22px "Inbox" title with a muted unread count and a compose button, four channel tabs (All, SMS, Email, Chat, each with a tiny mono count) over ONE 2px accent indicator that glides with transform: translateX(index * 100%) on the 587ms spring, then conversation rows: 40px initials avatar with a small channel badge (message, mail or chat icon) in the corner, name, mono timestamp, a one-line preview, an unread accent dot that pops in with a slight overshoot, the open row on accent soft. Thread pane: a 68px header (avatar, name, company, channel pill), an optional subject chip for email threads, a scrolling message area (incoming bubbles white with a hairline ring, outgoing bubbles in the accent gradient, tiny mono times, a centered "Today" chip) and a composer row (a "Reply by <channel>" pill, a 42px field, a gradient send button). Contact panel: big avatar, name, company, tag pills, email, phone, local time and an Open deal box.

Behavior: tabs filter the list for real and re-enter the rows with opacity and translateY(8px), staggered 40ms. Selecting a row opens its thread, clears its unread state and fills the contact panel. Enter or the send button appends an outgoing bubble (entrance: opacity, translateY(8px), 460ms spring) and updates the row preview. A new incoming message shows a three-dot typing bubble (dots bob 4px, 1.1s, staggered 150ms) for about 1.4s when its thread is open, then the bubble; the conversation row moves to the top of the list with a FLIP animation, shows the unread dot and flashes accent soft for 2.6s.

Accessibility: tabs use role="tablist" with aria-selected, rows are buttons, the field and send button have labels, focus rings are visible, prefers-reduced-motion stops the typing dots. Phone layout under 760px: hide the rail, thread and contact panel and let the list fill the screen. Plain HTML, CSS and JS, no libraries; React-friendly structure (IconRail, ConversationList, ChannelTabs, ConversationRow, Thread, Composer, ContactPanel).`,
  });

  // ---------------------------------------------------------------- 6. Email sequence builder (top bar + canvas + inspector)
  ML.add({
    id: 'app-crm-sequence',
    cat: 'app-crm',
    title: 'Email sequence builder',
    sub: 'Steps, delays and live reply stats',
    html: `
<div class="app v">
  <header class="bar">
    <button class="ic bk" type="button" aria-label="Back to sequences">${I(P.back, 18)}</button>
    <span class="mark">${I(P.mark, 16)}</span>
    <div class="nm"><p class="bc2">Sequences</p><h1>Q4 re-engagement <span>${I(P.pencil, 14)}</span></h1></div>
    <span class="pill ok stp"><i class="dot"></i><span class="stt">Active</span></span>
    <div class="acts"><button class="ghost pz" type="button">${I(P.pause, 15)}<span>Pause</span></button><button class="cta" type="button">Save changes</button></div>
  </header>
  <div class="body">
    <section class="canvas sc" aria-label="Sequence steps">
      <div class="tb"><button class="ghost add" type="button">${I(P.plus, 15)}Add step</button><span class="hint">Steps run in order, top to bottom</span></div>
      <div class="flow"></div>
    </section>
    <aside class="insp sc" aria-label="Sequence details">
      <div class="ph2"><p class="k">Performance</p><span class="livep"><i></i>Live</span></div>
      <div class="kp">
        <div><small>Enrolled</small><b class="num s-en">412</b></div>
        <div><small>Active</small><b class="num s-ac">268</b></div>
        <div><small>Replied</small><b class="num s-re">58</b></div>
        <div><small>Booked</small><b class="num s-bk">21</b></div>
      </div>
      <div class="fn">
        <div><span>Sent</span><i><s class="f1"></s></i><em class="num">412</em></div>
        <div><span>Opened</span><i><s class="f2"></s></i><em class="num f2n">255</em></div>
        <div><span>Replied</span><i><s class="f3"></s></i><em class="num f3n">58</em></div>
        <div><span>Booked</span><i><s class="f4"></s></i><em class="num f4n">21</em></div>
      </div>
      <div class="ed"></div>
      <p class="tip">${I(P.bolt, 15)}<span>A reply stops the sequence for that contact, so nobody is chased after they answer.</span></p>
    </aside>
  </div>
  ${ICONS(['mail', 'clock', 'bolt', 'flag', 'trash', 'plus'])}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d [hidden]{display:none!important}
.d .v{display:flex;flex-direction:column}
.d .bar{display:flex;flex:none;align-items:center;gap:12px;height:68px;padding:0 24px 0 14px;background:rgba(255,255,255,.85);border-bottom:1px solid var(--ml-line)}
.d .nm{min-width:0}
.d .bc2{font-size:12px;color:var(--ml-muted)}
.d .bar h1{display:flex;align-items:center;gap:8px;font-size:18px;letter-spacing:-.025em}
.d .bar h1 span{display:grid;color:var(--ml-muted)}
.d .stp{gap:7px;margin-left:6px}
.d .dot{position:relative;width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .dot::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:crm-ping 2s ease-out infinite}
.d .stp.off{background:var(--ml-bar-2);color:var(--ml-ink-2)}
.d .stp.off .dot{background:var(--ml-muted)}
.d .stp.off .dot::after{animation:none}
.d .acts{display:flex;gap:10px;margin-left:auto}
.d .body{display:grid;flex:1;grid-template-columns:minmax(0,1fr) 330px;min-height:0}
.d .canvas{position:relative;min-height:0;background-image:radial-gradient(var(--ml-bar) 1px,transparent 1.3px);background-size:22px 22px;background-color:var(--ml-surface)}
.d .tb{position:sticky;top:0;z-index:5;display:flex;align-items:center;gap:14px;padding:14px 22px;background:linear-gradient(180deg,var(--ml-surface) 60%,rgba(244,247,252,0))}
.d .tb .ghost{height:34px}
.d .hint{font-size:12.5px;color:var(--ml-muted)}
.d .flow{display:flex;flex-direction:column;align-items:center;padding:4px 22px 40px}
.d .nw{display:grid;grid-template-rows:1fr;width:100%;transition:grid-template-rows .55s var(--ml-ease),opacity .4s ease}
.d .nw.enter{grid-template-rows:0fr;opacity:0}
.d .nwi{display:flex;flex-direction:column;align-items:center;min-height:0;overflow:hidden;padding:0 12px 8px}
.d .conn{flex:none;width:2px;height:20px;margin-top:-1px;border-radius:2px;background:var(--ml-accent-line)}
.d .node{position:relative;display:flex;align-items:center;gap:12px;width:min(100%,384px);padding:12px 14px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 2px rgba(35,15,10,.05),0 6px 16px rgba(35,15,10,.06);text-align:left;overflow:hidden;transition:box-shadow .3s ease,transform 90ms ease-out}
.d .node:hover{box-shadow:inset 0 0 0 1px var(--ml-accent-line),0 6px 16px rgba(35,15,10,.08)}
.d .node.on{box-shadow:inset 0 0 0 2px var(--ml-accent),0 0 0 5px var(--ml-accent-soft),0 8px 20px rgba(255,68,51,.12)}
.d .node .ti{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .node .tx{display:flex;flex:1;flex-direction:column;min-width:0}
.d .node .tx b{overflow:hidden;font-size:13.5px;font-weight:650;white-space:nowrap;text-overflow:ellipsis}
.d .node .tx small{font-size:12px;color:var(--ml-muted)}
.d .node .stt2{display:flex;flex:none;gap:12px}
.d .sg{display:flex;flex-direction:column;align-items:flex-end}
.d .sg em{font-size:14px;font-weight:650;font-style:normal}
.d .sg small{font-size:10.5px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ml-muted)}
.d .mb{position:absolute;left:0;right:0;bottom:0;height:3px;background:var(--ml-bar-2)}
.d .mb s{display:block;height:100%;background:var(--ml-grad);transform:scaleX(var(--s));transform-origin:0 50%;transition:transform .7s var(--ml-ease)}
.d .node.wt{width:auto;gap:8px;padding:8px 14px;border-radius:999px;font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .node.wt svg{color:var(--ml-accent)}
.d .node.wt b{font-weight:700;color:var(--ml-ink)}
.d .node.tr .ti{background:var(--ml-grad);color:#fff}
.d .node.ed2 .ti{background:var(--ml-bar-2);color:var(--ml-ink-2)}
.d .insp{display:flex;flex-direction:column;min-height:0;padding:20px 18px 24px;background:var(--ml-bg);border-left:1px solid var(--ml-line)}
.d .ph2{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.d .livep{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:#12893C}
.d .livep i{width:7px;height:7px;border-radius:50%;background:#1DB954;animation:crm-blink 1.8s ease-in-out infinite}
.d .kp{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.d .kp div{padding:12px 13px;border-radius:13px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .kp small{display:block;font-size:11.5px;color:var(--ml-muted)}
.d .kp b{display:inline-block;margin-top:3px;font-size:22px;line-height:1.1;font-weight:650;letter-spacing:-.025em}
.d .kp b.bump{animation:crm-pop 460ms var(--ml-ease)}
.d .fn{display:flex;flex-direction:column;gap:9px;margin-top:16px;padding-bottom:18px;border-bottom:1px solid var(--ml-line)}
.d .fn div{display:grid;grid-template-columns:54px minmax(0,1fr) 34px;align-items:center;gap:10px;font-size:12.5px;color:var(--ml-muted)}
.d .fn i{height:7px;border-radius:4px;background:var(--ml-bar-2);overflow:hidden}
.d .fn s{display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--s,1));transform-origin:0 50%;transition:transform .7s var(--ml-ease)}
.d .fn div:nth-child(2) s{background:var(--ml-accent-2)}
.d .fn em{font-style:normal;font-weight:650;text-align:right;color:var(--ml-ink)}
.d .ed{flex:1;padding-top:16px}
.d .tip{display:flex;align-items:flex-start;gap:10px;margin-top:18px;padding:12px 14px;border-radius:12px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:12.5px;line-height:1.45;color:var(--ml-ink-2)}
.d .tip svg{flex:none;margin-top:1px;color:var(--ml-accent)}
.d .ed.swap > *{animation:crm-in 460ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
.d .ed h3{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .ed .lbl{display:block;margin:14px 0 6px;font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .fld{display:flex;align-items:center;height:40px;padding:0 12px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13.5px;transition:box-shadow .25s ease,background-color .25s ease}
.d .fld:focus-within{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .fld input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none}
.d .sk{display:flex;flex-direction:column;gap:7px;margin-top:6px;padding:12px;border-radius:12px;background:var(--ml-surface)}
.d .sk i{height:7px;border-radius:4px;background:var(--ml-bar)}
.d .stp2{display:flex;align-items:center;justify-content:space-between;height:46px;padding:0 6px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .stp2 button{display:grid;place-items:center;width:34px;height:34px;border-radius:9px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2);font-size:17px;transition:transform 90ms ease-out}
.d .stp2 span{font-size:15px;font-weight:650}
.d .desc{margin-top:6px;font-size:13px;line-height:1.5;color:var(--ml-muted)}
.d .rm{display:inline-flex;align-items:center;gap:7px;margin-top:18px;height:36px;padding:0 12px;border-radius:10px;font-size:13px;font-weight:600;color:#D70015;transition:background-color .2s ease,transform 90ms ease-out}
.d .rm:hover{background:rgba(255,59,48,.08)}
@keyframes crm-blink{0%,100%{opacity:1}50%{opacity:.35}}
@container scr (max-width: 760px){
  .d .bar{gap:8px;padding:0 14px 0 8px}
  .d .bar .mark,.d .hint,.d .pz span,.d .stp,.d .bc2{display:none}
  .d .nm{flex:1}
  .d .bar h1{overflow:hidden;font-size:17px;white-space:nowrap;text-overflow:ellipsis}
  .d .bar h1 span{display:none}
  .d .acts .cta{padding:0 12px}
  .d .body{display:block;overflow-y:auto}
  .d .canvas{overflow:visible}
  .d .insp{border-left:0;border-top:1px solid var(--ml-line);overflow:visible}
}
@media (prefers-reduced-motion: reduce){.d .dot::after,.d .livep i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const ic = (k) => $(`.icons [data-ic="${k}"]`).innerHTML;
      const steps = [
        { k: 't', type: 'tr', title: 'Contact tagged "Warm lead"', sub: 'Trigger' },
        { k: 'e1', type: 'em', title: 'Quick intro from Maya', open: 62, reply: 14 },
        { k: 'w1', type: 'wt', days: 2 },
        { k: 'e2', type: 'em', title: 'Case study: Meridian Foods', open: 54, reply: 9 },
        { k: 'w2', type: 'wt', days: 3 },
        { k: 'e3', type: 'em', title: 'Should I close your file?', open: 41, reply: 6 },
        { k: 'x', type: 'ed2', title: 'Exit when a meeting is booked', sub: 'Goal' },
      ];
      let selK = 'e2';
      let seed = 4;
      const flow = $('.flow');
      const ed = $('.ed');
      const node = (s) => {
        const on = s.k === selK ? ' on' : '';
        if (s.type === 'wt') return `<button class="node wt${on}" type="button" data-k="${s.k}" aria-label="Wait ${s.days} days">${ic('clock')}Wait <b class="num">${s.days}</b> ${s.days === 1 ? 'day' : 'days'}</button>`;
        if (s.type === 'em') return `<button class="node em${on}" type="button" data-k="${s.k}"><span class="ti">${ic('mail')}</span><span class="tx"><b>${s.title}</b><small>Email, 9:00 AM</small></span><span class="stt2"><span class="sg"><em class="num">${s.open}%</em><small>Open</small></span><span class="sg"><em class="num">${s.reply}%</em><small>Reply</small></span></span><i class="mb"><s style="--s:${s.open / 100}"></s></i></button>`;
        return `<button class="node ${s.type}${on}" type="button" data-k="${s.k}"><span class="ti">${ic(s.type === 'tr' ? 'bolt' : 'flag')}</span><span class="tx"><b>${s.title}</b><small>${s.sub}</small></span></button>`;
      };
      const wrap = (s, i, enter) => `<div class="nw${enter ? ' enter' : ''}" data-k="${s.k}"><div class="nwi">${i ? '<i class="conn"></i>' : ''}${node(s)}</div></div>`;
      const paintFlow = (enterKeys) => {
        flow.innerHTML = steps.map((s, i) => wrap(s, i, enterKeys && enterKeys.includes(s.k))).join('');
        if (enterKeys) {
          void flow.offsetWidth;
          $$('.nw.enter').forEach((el) => el.classList.remove('enter'));
        }
      };
      const nodeEl = (k) => $$('.node').find((n) => n.dataset.k === k);
      const paintEd = (swap) => {
        const s = steps.find((x) => x.k === selK);
        if (!s) return;
        let h = '';
        if (s.type === 'em') {
          h = `<h3>Email step</h3><label class="lbl" for="ml-crm-subj">Subject line</label><div class="fld"><input id="ml-crm-subj" type="text" value="${s.title}" autocomplete="off"></div><span class="lbl">Preview</span><div class="sk"><i style="width:86%"></i><i style="width:100%"></i><i style="width:72%"></i><i style="width:44%"></i></div><button class="rm" type="button">${ic('trash')}Remove step</button>`;
        } else if (s.type === 'wt') {
          h = `<h3>Wait before next step</h3><span class="lbl">Delay</span><div class="stp2"><button type="button" data-d="-1" aria-label="One day less">&minus;</button><span class="num dv3">${s.days} ${s.days === 1 ? 'day' : 'days'}</span><button type="button" data-d="1" aria-label="One day more">+</button></div><p class="desc">The next email goes out after this delay, at 9:00 AM in the contact's timezone.</p><button class="rm" type="button">${ic('trash')}Remove step</button>`;
        } else {
          h = `<h3>${s.type === 'tr' ? 'Trigger' : 'Goal'}</h3><p class="desc">${s.type === 'tr' ? 'Contacts enter this sequence the moment the tag is added. 412 contacts have entered so far.' : 'Contacts leave the sequence as soon as a meeting is booked, so nobody gets an email after they said yes.'}</p>`;
        }
        ed.innerHTML = h;
        [...ed.children].forEach((el, i) => el.style.setProperty('--i', i));
        ed.classList.remove('swap');
        if (swap) {
          void ed.offsetWidth;
          ed.classList.add('swap');
        }
      };
      const select = (k, swap) => {
        selK = k;
        $$('.node').forEach((n) => n.classList.toggle('on', n.dataset.k === k));
        paintEd(swap);
      };
      flow.addEventListener('click', (e) => {
        const n = e.target.closest('.node');
        if (n && n.dataset.k !== selK) select(n.dataset.k, true);
      });
      ed.addEventListener('input', (e) => {
        if (e.target.id !== 'ml-crm-subj') return;
        const s = steps.find((x) => x.k === selK);
        s.title = e.target.value;
        const n = nodeEl(selK);
        if (n) n.querySelector('.tx b').textContent = e.target.value || 'Untitled email';
      });
      const removeStep = (k) => {
        const i = steps.findIndex((x) => x.k === k);
        const s = steps[i];
        if (!s || (s.type !== 'em' && s.type !== 'wt')) return;
        const gone = [k];
        if (s.type === 'em' && steps[i - 1] && steps[i - 1].type === 'wt') gone.push(steps[i - 1].k);
        gone.forEach((g) => {
          const w = $$('.nw').find((x) => x.dataset.k === g);
          if (w) w.classList.add('enter');
        });
        const next = steps[i - 2] || steps[0];
        setTimeout(() => {
          gone.forEach((g) => steps.splice(steps.findIndex((x) => x.k === g), 1));
          paintFlow();
        }, 600);
        select(next.k, true);
      };
      ed.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        const s = steps.find((x) => x.k === selK);
        if (b.classList.contains('rm')) removeStep(selK);
        else if (b.dataset.d && s.type === 'wt') {
          s.days = Math.max(1, Math.min(14, s.days + +b.dataset.d));
          const n = nodeEl(selK);
          n.innerHTML = `${ic('clock')}Wait <b class="num">${s.days}</b> ${s.days === 1 ? 'day' : 'days'}`;
          n.setAttribute('aria-label', `Wait ${s.days} days`);
          $('.dv3').textContent = `${s.days} ${s.days === 1 ? 'day' : 'days'}`;
        }
      });
      const addBtn = $('.add');
      const addStep = () => {
        const id = seed++;
        const w = { k: 'w' + id, type: 'wt', days: 2 };
        const e = { k: 'e' + id, type: 'em', title: 'Follow-up number ' + (steps.filter((x) => x.type === 'em').length + 1), open: 0, reply: 0 };
        const at = steps.findIndex((x) => x.type === 'ed2');
        steps.splice(at, 0, w, e);
        selK = e.k;
        paintFlow([w.k, e.k]);
        select(e.k, true);
        const cv = $('.canvas');
        setTimeout(() => cv.scrollTo({ top: cv.scrollHeight, behavior: 'smooth' }), 120);
      };
      addBtn.addEventListener('click', addStep);
      paintFlow();
      paintEd(false);
      const pz = $('.pz');
      let live = true;
      pz.addEventListener('click', () => {
        live = !live;
        $('.stp').classList.toggle('off', !live);
        $('.stp').classList.toggle('ok', live);
        $('.stt').textContent = live ? 'Active' : 'Paused';
        pz.lastChild.textContent = live ? 'Pause' : 'Resume';
      });

      // live numbers: a reply lands every few seconds, now and then a meeting gets booked
      const nums = { en: 412, ac: 268, re: 58, bk: 21, op: 255 };
      const show = () => {
        $('.s-en').textContent = nums.en;
        $('.s-ac').textContent = nums.ac;
        $('.s-re').textContent = nums.re;
        $('.s-bk').textContent = nums.bk;
        $('.f2n').textContent = nums.op;
        $('.f3n').textContent = nums.re;
        $('.f4n').textContent = nums.bk;
        $('.f1').style.setProperty('--s', 1);
        $('.f2').style.setProperty('--s', nums.op / nums.en);
        $('.f3').style.setProperty('--s', nums.re / nums.en);
        $('.f4').style.setProperty('--s', nums.bk / nums.en);
      };
      const bump = (sel) => {
        const el = $(sel);
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
      };
      show();
      let tickN = 0;
      (async () => {
        await wait(2200);
        while (root.isConnected) {
          if (live) {
            tickN++;
            nums.re++;
            nums.op += 2;
            nums.ac = Math.max(0, nums.ac - 1);
            bump('.s-re');
            bump('.s-ac');
            if (tickN % 3 === 0) {
              nums.bk++;
              bump('.s-bk');
            }
            show();
          }
          await wait(2800);
        }
      })();

      // Autoplay: open steps, nudge a delay, add a step, then remove it again.
      cur.style.transform = 'translate(300px,260px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          await seq([
            () => press(nodeEl('e1'), 0.5, 0.5),
            rest(1200),
            () => press(nodeEl('w1'), 0.5, 0.5),
            rest(900),
            () => press($$('.stp2 button')[1], 0.5, 0.5),
            rest(600),
            () => press($$('.stp2 button')[0], 0.5, 0.5),
            rest(800),
            () => press(addBtn, 0.5, 0.5),
            rest(2200),
            () => press($('.rm'), 0.5, 0.5),
            rest(2200),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build an email sequence builder screen for a CRM: a top bar, a step canvas and an inspector, full viewport.

Layout: a 68px top bar (back button, logo tile, breadcrumb "Sequences" over an 18px editable-looking title, a green "Active" status pill with a pinging dot, a Pause ghost button and a primary "Save changes"). Below, a grid of minmax(0, 1fr) and 330px. The canvas is a surface tint with a faint dot grid (radial-gradient, 22px) and scrolls; a sticky toolbar holds "Add step". Steps stack in a centered column joined by 2px accent-line connectors: a trigger node (gradient icon tile), email nodes 384px wide (38px mail tile, subject, "Email, 9:00 AM", Open and Reply percentages on the right, and a 3px open-rate bar along the bottom edge), small pill-shaped wait nodes ("Wait 2 days" with a clock) and a goal node at the end. The selected node gets a 2px accent ring plus a 5px soft halo. The inspector (white, hairline left border) shows live performance: four tiles (Enrolled, Active, Replied, Booked), a four-row funnel with bars (Sent, Opened, Replied, Booked), and below it the settings of the selected step: for an email a subject field that edits the node title live, a skeleton preview and a Remove step button; for a wait a minus/plus stepper (1 to 14 days).

Motion: selecting a node swaps the inspector content with a staggered rise (opacity, translateY 8px, 45ms steps). Adding a step inserts a wait and an email by animating grid-template-rows from 0fr to 1fr (550ms) and scrolls them into view; removing one collapses it the same way in reverse. Funnel bars use transform: scaleX with a 700ms ease-out. Every few seconds a reply lands: the Replied and Active tiles pop (scale 1.12) and the funnel grows, a "Live" label blinks softly. Pause stops the live updates and greys the status pill.

Accessibility: nodes are buttons, steppers have aria-labels, the subject field has a label, focus rings are visible, prefers-reduced-motion stops pings and blinking. Phone layout under 760px: single column, canvas first, inspector below, toolbar hint and button labels hidden. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, StepCanvas, StepNode, WaitNode, Inspector, FunnelBars, StepSettings).`,
  });

  // ---------------------------------------------------------------- 7. Booking calendar (booking panel + week grid)
  ML.add({
    id: 'app-crm-booking',
    cat: 'app-crm',
    title: 'Booking calendar',
    sub: 'A booking lands on the week grid',
    html: `
<div class="app g">
  <aside class="lp sc">
    <div class="lh"><span class="mark">${I(P.mark, 16)}</span><div><b>Calendar</b><small>Maya Reyes</small></div></div>
    <section class="card bk">
      <p class="k">Your booking page</p>
      <div class="lk"><span class="url">${I(P.link, 14)}<i>fernway.co/book/maya</i></span><button class="cp" type="button" aria-label="Copy booking link"><span class="c1">${I(P.copy, 14)}Copy</span><span class="c2">${I(P.check, 14, 2.8)}Copied</span></button></div>
      <p class="av2">${I(P.clock, 14)}Mon to Fri, 9:00 AM to 5:00 PM</p>
    </section>
    <section class="types">
      <p class="k">Meeting types</p>
      <ul class="tl2"></ul>
    </section>
    <section class="nx">
      <p class="k">Up next today</p>
      <div class="nr"><span class="av s">RS</span><p><b>Rafael Santos</b><small>Intro call, 1:30 PM</small></p><em>in 2 h</em></div>
      <div class="nr"><span class="av s t3">AF</span><p><b>Atlas Freight</b><small>Strategy session, 3:00 PM</small></p><em>in 4 h</em></div>
    </section>
    <section class="card wk">
      <div><p class="k">Booked via link</p><p class="big num cnt">6</p></div>
      <div><p class="k">This week</p><p class="big num tot2">14</p></div>
    </section>
  </aside>
  <main class="mn">
    <header class="ch2">
      <div><h1>Oct 12 - 16, 2026</h1><p class="sub">Pacific time, Wednesday is today</p></div>
      <div class="nav2"><button class="ic" type="button" aria-label="Previous week">${I(P.chevL, 18)}</button><button class="ghost" type="button">Today</button><button class="ic" type="button" aria-label="Next week">${I(P.chevR, 18)}</button></div>
    </header>
    <div class="cw sc">
      <div class="cal">
        <div class="dhd"><span></span></div>
        <div class="gr"><div class="gut"></div><div class="cols"></div></div>
      </div>
    </div>
  </main>
  <div class="toast" role="status">${I(P.check, 15, 2.8)}<span></span></div>
  ${ICONS(['link'])}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d [hidden]{display:none!important}
.d .g{display:grid;grid-template-columns:292px minmax(0,1fr)}
.d .lp{display:flex;flex-direction:column;gap:18px;min-height:0;padding:20px 16px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .lh{display:flex;align-items:center;gap:11px;padding:0 4px}
.d .lh b{display:block;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .lh small{font-size:12px;color:var(--ml-muted)}
.d .bk{padding:14px}
.d .lk{display:flex;align-items:center;gap:6px;margin-top:10px;padding:4px 4px 4px 11px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .url{display:flex;flex:1;align-items:center;gap:7px;min-width:0;color:var(--ml-muted)}
.d .url i{overflow:hidden;font:500 12px/1 var(--ml-mono);font-style:normal;color:var(--ml-ink-2);white-space:nowrap;text-overflow:ellipsis}
.d .cp{position:relative;display:grid;flex:none;height:32px;min-width:78px;border-radius:8px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);overflow:hidden;transition:background-color .25s ease,color .25s ease,transform 90ms ease-out}
.d .cp span{grid-area:1/1;display:inline-flex;align-items:center;justify-content:center;gap:6px;transition:opacity .2s ease,transform .45s var(--ml-spring)}
.d .cp .c2{opacity:0;transform:translateY(10px)}
.d .cp.ok{background:rgba(29,185,84,.12);color:#12893C}
.d .cp.ok .c1{opacity:0;transform:translateY(-10px)}
.d .cp.ok .c2{opacity:1;transform:none}
.d .av2{display:flex;align-items:center;gap:7px;margin-top:11px;font-size:12.5px;color:var(--ml-muted)}
.d .types .k{padding:0 4px 8px}
.d .tl2{display:flex;flex-direction:column;gap:4px}
.d .ty{display:flex;align-items:center;gap:11px;width:100%;padding:9px 10px;border-radius:12px;text-align:left;transition:background-color .2s ease,opacity .25s ease}
.d .ty:hover{background:var(--ml-surface)}
.d .ty.off{opacity:.45}
.d .ty.pick{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .sw2{flex:none;width:26px;height:26px;border-radius:8px}
.d .s-intro{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .s-strategy{background:var(--ml-accent)}
.d .s-demo{background:var(--ml-bar-2);box-shadow:inset 0 0 0 1px var(--ml-bar)}
.d .ty p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .ty b{font-size:13.5px;font-weight:600}
.d .ty small{font-size:12px;color:var(--ml-muted)}
.d .ty em{font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .nx .k{display:block;padding:0 4px 6px}
.d .nr{display:flex;align-items:center;gap:10px;padding:8px 4px;font-size:13px}
.d .nr p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .nr b{font-weight:600}
.d .nr small{font-size:12px;color:var(--ml-muted)}
.d .nr em{font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-accent-ink)}
.d .wk{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:auto;padding:14px 16px}
.d .wk .big{margin-top:6px;font-size:26px;line-height:1;font-weight:650;letter-spacing:-.03em}
.d .wk .big.bump{animation:crm-pop 460ms var(--ml-ease)}
.d .mn{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .ch2{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:12px;padding:22px 28px 14px}
.d .nav2{display:flex;align-items:center;gap:6px}
.d .nav2 .ghost{height:36px}
.d .cw{display:flex;flex:1;flex-direction:column;min-height:0;padding:0 28px 24px}
.d .cal{display:flex;flex:1 0 auto;flex-direction:column;min-width:520px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .dhd{display:grid;grid-template-columns:56px repeat(5,minmax(0,1fr));height:58px;border-bottom:1px solid var(--ml-line)}
.d .dd{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border-left:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .dd b{display:grid;place-items:center;min-width:28px;height:28px;border-radius:50%;font-size:15px;font-weight:650;letter-spacing:0;color:var(--ml-ink)}
.d .dd.today{color:var(--ml-accent-ink)}
.d .dd.today b{background:var(--ml-grad);color:#fff}
.d .gr{display:grid;grid-template-columns:56px minmax(0,1fr);flex:1;min-height:504px}
.d .gut{position:relative}
.d .gut span{position:absolute;top:calc(var(--i) / 9 * 100%);right:10px;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted);transform:translateY(-50%)}
.d .cols{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));background-image:linear-gradient(to bottom,var(--ml-line) 1px,transparent 1px);background-size:100% calc(100% / 9)}
.d .dc{position:relative;border-left:1px solid var(--ml-line);cursor:cell}
.d .ev{position:absolute;left:4px;right:4px;top:calc(var(--t) * 100% + 1px);height:calc(var(--h) * 100% - 3px);display:flex;flex-direction:column;gap:1px;padding:6px 8px;border-radius:10px;overflow:hidden;text-align:left;font-size:12px;cursor:pointer;transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring),box-shadow .25s ease}
.d .ev b{overflow:hidden;font-weight:650;white-space:nowrap;text-overflow:ellipsis}
.d .ev small{overflow:hidden;font:500 10px/1.2 var(--ml-mono);letter-spacing:-.02em;white-space:nowrap;text-overflow:ellipsis;opacity:.75}
.d .ev.hl b{padding-right:15px}
.d .ev svg{position:absolute;right:6px;top:6px;width:11px;height:11px;opacity:.7}
.d .ev.sm{flex-direction:row;align-items:center;padding:0 9px}
.d .ev.sm small{display:none}
.d .ev.sm svg{top:50%;margin-top:-5.5px}
.d .ev.intro{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .ev.strategy{background:var(--ml-accent);color:#fff;box-shadow:0 4px 12px rgba(255,68,51,.25)}
.d .ev.demo{background:var(--ml-bar-2);box-shadow:inset 0 0 0 1px var(--ml-bar);color:var(--ml-ink-2)}
.d .ev.dim{opacity:.22}
.d .ev.block{background:repeating-linear-gradient(135deg,var(--ml-surface) 0,var(--ml-surface) 6px,var(--ml-bg) 6px,var(--ml-bg) 12px);box-shadow:inset 0 0 0 1px var(--ml-bar);color:var(--ml-muted);cursor:pointer}
.d .ev.pend{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line);color:var(--ml-accent-ink);animation:crm-pend 1s ease-in-out infinite}
.d .ev.land{animation:crm-land 640ms var(--ml-bounce) both,crm-halo 2.4s ease-out}
.d .ev.gone{opacity:0;transform:scale(.94)}
.d .nowl{position:absolute;left:0;right:0;top:29.63%;z-index:3;height:2px;background:var(--ml-accent);pointer-events:none}
.d .nowl::before{content:"";position:absolute;left:-5px;top:-4px;width:10px;height:10px;border-radius:50%;background:var(--ml-accent)}
.d .nowl::after{content:"";position:absolute;left:-5px;top:-4px;width:10px;height:10px;border-radius:50%;background:var(--ml-accent);animation:crm-ping 2.4s ease-out infinite}
@keyframes crm-pend{0%,100%{opacity:.55}50%{opacity:1}}
@keyframes crm-land{0%{opacity:0;transform:scale(.88)}100%{opacity:1;transform:none}}
@keyframes crm-halo{0%{box-shadow:0 0 0 0 rgba(255,68,51,.45)}60%,100%{box-shadow:0 0 0 12px rgba(255,68,51,0)}}
@container scr (max-width: 760px){
  .d .g{display:block;overflow-y:auto}
  .d .lp{border-right:0;border-bottom:1px solid var(--ml-line);overflow:visible;padding:16px}
  .d .wk{margin-top:0}
  .d .mn{display:block}
  .d .ch2{padding:18px 16px 12px}
  .d .cw{padding:0 16px 24px;overflow-x:auto}
}
@media (prefers-reduced-motion: reduce){.d .nowl::after,.d .ev.pend{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const ic = (k) => $(`.icons [data-ic="${k}"]`).innerHTML;
      const days = [['Mon', 12], ['Tue', 13], ['Wed', 14], ['Thu', 15], ['Fri', 16]];
      const types = { intro: ['Intro call', '30 min'], strategy: ['Strategy session', '60 min'], demo: ['Product demo', '45 min'] };
      const H = 56;
      const evs = [
        [0, 9, 0.5, 'intro', 'Aiko Tan', 1], [0, 11, 1, 'strategy', 'Northgate team', 0], [0, 14.5, 0.75, 'demo', 'Juniper Health', 1],
        [1, 10, 0.5, 'intro', 'Carlos Mendoza', 1], [1, 13, 1, 'strategy', 'Kestrel & Co', 0], [1, 15.5, 0.5, 'intro', 'Hana Kim', 0],
        [2, 9.5, 0.75, 'demo', 'Brightline Dental', 0], [2, 13.5, 0.5, 'intro', 'Rafael Santos', 1], [2, 15, 1, 'strategy', 'Atlas Freight', 0],
        [3, 9, 1, 'strategy', 'Solace Studio', 0], [3, 14, 0.5, 'intro', 'Luis Ortega', 1],
        [4, 10.5, 0.5, 'intro', 'Jia Wen', 0], [4, 13, 0.75, 'demo', 'Tidewater Realty', 1], [4, 16, 0.5, 'intro', 'Sam Whitfield', 0],
      ];
      const t12 = (h) => {
        const m = Math.round((h % 1) * 60);
        const hh = Math.floor(h);
        return `${((hh + 11) % 12) + 1}:${String(m).padStart(2, '0')} ${hh >= 12 ? 'PM' : 'AM'}`;
      };
      const hm = (h) => `${((Math.floor(h) + 11) % 12) + 1}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`;
      const span = (s, d) => `${hm(s)} - ${hm(s + d)} ${s + d >= 12 ? 'PM' : 'AM'}`;
      const evHtml = (e, cls) => `<button class="ev ${e[3]}${e[2] <= 0.5 ? ' sm' : ''}${e[5] ? ' hl' : ''}${cls ? ' ' + cls : ''}" type="button" style="--t:${(e[1] - 8) / 9};--h:${e[2] / 9}" data-ty="${e[3]}" data-n="${e[4]}"><b>${e[4]}</b><small>${span(e[1], e[2])}</small>${e[5] ? ic('link') : ''}</button>`;
      $('.dhd').innerHTML = '<span></span>' + days.map(([d, n], i) => `<div class="dd${i === 2 ? ' today' : ''}">${d}<b class="num">${n}</b></div>`).join('');
      $('.gut').innerHTML = Array.from({ length: 9 }, (_, i) => `<span style="--i:${i}">${t12(8 + i).replace(':00', '')}</span>`).join('');
      const colsEl = $('.cols');
      colsEl.innerHTML = days.map((_, d) => `<div class="dc" data-d="${d}">${evs.filter((e) => e[0] === d).map((e) => evHtml(e)).join('')}${d === 2 ? '<i class="nowl"></i>' : ''}</div>`).join('');
      const colAt = (d) => $$('.dc')[d];
      const counts = () => {
        const all = $$('.ev:not(.block):not(.pend):not(.gone)');
        $('.tot2').textContent = all.length;
        $('.cnt').textContent = all.filter((x) => x.querySelector('svg')).length;
        Object.keys(types).forEach((k2) => {
          const el = $(`.ty[data-ty="${k2}"] em`);
          if (el) el.textContent = all.filter((x) => x.dataset.ty === k2).length;
        });
      };
      const hidden = new Set();
      $('.tl2').innerHTML = Object.keys(types)
        .map((k2) => `<li><button class="ty" type="button" data-ty="${k2}" aria-pressed="false"><span class="sw2 s-${k2}"></span><p><b>${types[k2][0]}</b><small>${types[k2][1]}</small></p><em class="num">0</em></button></li>`)
        .join('');
      const applyFilter = () => {
        $$('.ev[data-ty]').forEach((x) => x.classList.toggle('dim', hidden.size > 0 && !hidden.has(x.dataset.ty)));
        $$('.ty').forEach((b) => {
          b.classList.toggle('pick', hidden.has(b.dataset.ty));
          b.setAttribute('aria-pressed', String(hidden.has(b.dataset.ty)));
        });
      };
      $('.tl2').addEventListener('click', (e) => {
        const b = e.target.closest('.ty');
        if (!b) return;
        hidden.has(b.dataset.ty) ? hidden.delete(b.dataset.ty) : hidden.add(b.dataset.ty);
        applyFilter();
      });
      counts();
      const cp = $('.cp');
      let cpT = 0;
      cp.addEventListener('click', () => {
        try {
          navigator.clipboard.writeText('fernway.co/book/maya').catch(() => {});
        } catch (err) {
          /* clipboard can be blocked in a preview frame */
        }
        cp.classList.add('ok');
        clearTimeout(cpT);
        cpT = setTimeout(() => cp.classList.remove('ok'), 2000);
      });
      const toast = $('.toast');
      let toastT = 0;
      const say = (m) => {
        toast.lastChild.textContent = m;
        toast.classList.add('on');
        clearTimeout(toastT);
        toastT = setTimeout(() => toast.classList.remove('on'), 2800);
      };
      const bump = (sel) => {
        const el = $(sel);
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
      };
      // click an empty spot to put a hold on that half hour; click the hold to remove it
      const hold = (d, y) => {
        const h = 8 + Math.floor(y * 18) / 2;
        if (h < 8 || h > 16.5) return;
        const col = colAt(d);
        const ex = [...col.querySelectorAll('.ev.block')].find((x) => x.dataset.h === String(h));
        if (ex) return void ex.remove();
        const tmp = document.createElement('div');
        tmp.innerHTML = evHtml([d, h, 0.5, 'block', 'Blocked', 0], 'block land');
        const el = tmp.firstChild;
        el.dataset.h = h;
        el.removeAttribute('data-ty');
        col.appendChild(el);
      };
      colsEl.addEventListener('click', (e) => {
        const ev = e.target.closest('.ev');
        const col = e.target.closest('.dc');
        if (ev && ev.classList.contains('block')) return void ev.remove();
        if (ev || !col) return;
        const s = root.getBoundingClientRect().width / root.offsetWidth || 1;
        hold(+col.dataset.d, (e.clientY - col.getBoundingClientRect().top) / col.getBoundingClientRect().height);
      });

      // a booking lands: a pending slot pulses, then turns into a meeting with a halo and a toast
      const landings = [[3, 11, 0.5, 'intro', 'Elena Petrova'], [4, 14, 1, 'strategy', 'Kwame Mensah'], [1, 11.5, 0.75, 'demo', 'Isabel Cruz']];
      let li = 0;
      const land = async () => {
        $$('.ev.landed').forEach((x) => {
          x.classList.add('gone');
          setTimeout(() => x.remove(), 400);
        });
        await wait(300);
        const [d, s, du, ty, nm] = landings[li++ % landings.length];
        const col = colAt(d);
        const tmp = document.createElement('div');
        tmp.innerHTML = evHtml([d, s, du, ty, nm, 0], 'pend');
        const el = tmp.firstChild;
        el.innerHTML = '<b>New booking</b><small>Someone is picking a time</small>';
        col.appendChild(el);
        await wait(1500);
        tmp.innerHTML = evHtml([d, s, du, ty, nm, 1], 'land landed');
        const fin = tmp.firstChild;
        el.replaceWith(fin);
        counts();
        bump('.cnt');
        bump('.tot2');
        say(`New booking: ${nm}, ${types[ty][0]}, ${days[d][0]} ${t12(s)}`);
        return true;
      };

      // Autoplay: copy the link, filter a meeting type, drop a hold, and watch a booking land.
      cur.style.transform = 'translate(120px,560px)';
      let lap = 0;
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          lap++;
          await seq([
            () => press(cp, 0.5, 0.5),
            rest(1000),
            () => press($('.ty[data-ty="strategy"]'), 0.5, 0.5),
            rest(1500),
            () => press($('.ty[data-ty="strategy"]'), 0.5, 0.5),
            rest(600),
            () => {
              const col = colAt(0);
              const y = 7.5 / 9 + 0.004;
              const r = col.getBoundingClientRect();
              return press(col, 0.5, y, () => hold(0, y));
            },
            rest(1400),
            land,
            rest(3200),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a booking calendar screen for a CRM: a booking-page panel on the left and a week time grid on the right, full viewport.

Layout: grid columns 292px and minmax(0, 1fr). Left panel (white, hairline right border): a logo tile with "Calendar" and the owner's name; a card "Your booking page" with a mono URL pill and a Copy button, plus an availability line (Mon to Fri, 9:00 AM to 5:00 PM); a "Meeting types" list (Intro call 30 min, Strategy session 60 min, Product demo 45 min) where each row has a 26px swatch matching its block style and a live count; a stat card pinned to the bottom (Booked via link, This week). Right: a header with "Oct 12 - 16, 2026", a muted timezone line and previous / Today / next controls, then a white rounded calendar card: a 58px day header (the current day's date in an accent circle), a 56px time gutter (8 AM to 4 PM labels in mono) and five day columns on a 52px-per-hour grid drawn with repeating-linear-gradient hairlines. Meetings are absolutely positioned (top = (start - 8) * 52px, height = duration * 52px) in three styles using ONE accent: soft tint with a ring (intro), solid accent (strategy), neutral grey-blue (demo), each with a name, a mono time range and a small link icon when booked through the page. A thin accent now-line with a pinging dot crosses the current day.

Behavior and motion: Copy switches its label to "Copied" with a vertical slide and a green tint for two seconds. Clicking a meeting type dims every other type to 22% opacity (click again to clear). Clicking an empty spot adds a diagonal-striped "Blocked" hold for that half hour; clicking the hold removes it. A new booking appears as a pulsing dashed pending slot for about 1.5s, then becomes the meeting with a springy scale-in (640ms, slight overshoot), a 12px fading halo, the counters popping (scale 1.12) and a dark toast ("New booking: Elena Petrova, Intro call, Thu 11:00 AM").

Accessibility: meetings are buttons, the copy and navigation buttons have aria-labels, filter rows use aria-pressed, focus rings are visible, prefers-reduced-motion stops the now-line ping and the pending pulse. Phone layout under 760px: stack the panel above the calendar and let the calendar scroll horizontally with a 520px minimum width. Plain HTML, CSS and JS, no libraries; React-friendly structure (BookingPanel, MeetingTypes, WeekHeader, TimeGrid, DayColumn, MeetingBlock, Toast).`,
  });

  // ---------------------------------------------------------------- 8. Sales forecast (top nav shell)
  ML.add({
    id: 'app-crm-forecast',
    cat: 'app-crm',
    title: 'Sales forecast',
    sub: 'A slider re-weights the pipeline live',
    html: `
<div class="app v">
  ${TOPNAV('fc')}
  <main class="page sc">
    <header class="head">
      <div><h1>Sales forecast</h1><p class="sub">Q4 2026, updated 6 minutes ago</p></div>
      <div class="seg" role="group" aria-label="Scenario"><span class="thumb" aria-hidden="true"></span><button type="button" data-v="-10">Conservative</button><button type="button" data-v="0" class="on">Expected</button><button type="button" data-v="10">Best case</button></div>
    </header>
    <div class="kpis">
      <section class="card kp"><p class="k">Weighted pipeline</p><p class="v num wp">$143,250</p><p class="n">31 open deals across 4 stages</p></section>
      <section class="card kp"><p class="k">Closed won</p><p class="v num">$96,300</p><p class="n">30% of the $320,000 quota</p></section>
      <section class="card kp"><p class="k">Forecast total</p><div class="vr"><p class="v num ft">$239,550</p><span class="pill warn st2">Needs push</span></div><div class="qb" aria-hidden="true"><i class="qf"></i></div><p class="n"><b class="num pc">75%</b> of quota</p></section>
    </div>
    <div class="row">
      <section class="card chart">
        <div class="ch"><div><p class="k">Forecast by month</p><p class="sub2">Weighted by win probability</p></div><p class="leg"><i class="l1"></i>Closed<i class="l2"></i>Commit<i class="l3"></i>Pipeline</p></div>
        <div class="plot">
          <div class="gl" aria-hidden="true"><span style="--y:0"><em>$0</em></span><span style="--y:.3333"><em>$60k</em></span><span style="--y:.6667"><em>$120k</em></span><span style="--y:1"><em>$180k</em></span></div>
          <div class="tgt" aria-hidden="true"><em>Target $106.7k</em></div>
          <div class="bars"></div>
        </div>
        <div class="xl"><span></span><span>Oct</span><span>Nov</span><span>Dec</span></div>
      </section>
      <section class="card sc2">
        <p class="k">What if</p>
        <div class="adj"><b class="num av3">+0 pts</b><span>on every stage's win rate</span></div>
        <input class="rng" type="range" min="-20" max="20" step="1" value="0" aria-label="Win rate adjustment in points">
        <div class="rl" aria-hidden="true"><span>-20</span><span>0</span><span>+20</span></div>
        <div class="tb2" role="table" aria-label="Stages">
          <div class="tr0 th" role="row"><span>Stage</span><span>Value</span><span>Win</span><span>Weighted</span></div>
          <div class="trs"></div>
        </div>
        <p class="ins">${I(P.bolt, 16)}<span>Every +5 pts on win rate adds about <b class="num i5">$15k</b> to the forecast.</span></p>
      </section>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .v{display:flex;flex-direction:column}
.d .page{display:flex;flex:1;flex-direction:column;gap:16px;min-height:0;padding:22px 28px 26px}
.d .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(3,106px);padding:3px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg button{position:relative;z-index:1;height:34px;font-size:13px;font-weight:600;color:var(--ml-muted);transition:color .25s ease,transform 90ms ease-out}
.d .seg button.on{color:var(--ml-accent-ink)}
.d .thumb{position:absolute;top:3px;bottom:3px;left:3px;width:106px;border-radius:9px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring);transform:translateX(var(--x,100%))}
.d .kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d .kp{padding:16px 18px}
.d .kp .v{margin-top:8px;font-size:28px;line-height:1;font-weight:650;letter-spacing:-.03em}
.d .kp .v.bump{animation:crm-pop 460ms var(--ml-ease)}
.d .kp .n{margin-top:9px;font-size:12.5px;color:var(--ml-muted)}
.d .kp .n b{font-weight:650;color:var(--ml-ink)}
.d .vr{display:flex;align-items:center;gap:10px;margin-top:8px}
.d .vr .v{margin-top:0}
.d .qb{height:6px;margin-top:11px;border-radius:4px;background:var(--ml-bar-2);overflow:hidden}
.d .qf{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(var(--q,.75));transform-origin:0 50%;transition:transform .7s var(--ml-ease)}
.d .kp .qb + .n{margin-top:8px}
.d .row{display:grid;flex:1;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:14px;min-height:0}
.d .chart{display:flex;flex-direction:column;min-width:0;padding:18px 20px 14px}
.d .ch{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .sub2{margin-top:3px;font-size:12.5px;color:var(--ml-muted)}
.d .leg{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--ml-muted)}
.d .leg i{width:9px;height:9px;border-radius:3px;margin-left:8px}
.d .leg i:first-child{margin-left:0}
.d .l1{background:var(--ml-accent)}
.d .l2{background:var(--ml-accent-2)}
.d .l3{background:var(--ml-accent-line)}
.d .plot{position:relative;flex:1;min-height:150px;margin-top:22px}
.d .gl span{position:absolute;left:0;right:0;bottom:calc(var(--y) * 100%);height:0;border-top:1px solid var(--ml-line)}
.d .gl em{position:absolute;left:0;top:-7px;padding-right:6px;background:var(--ml-bg);font:500 10.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .tgt{position:absolute;left:46px;right:0;bottom:59.26%;height:0;border-top:1.5px dashed var(--ml-accent-2);z-index:2}
.d .tgt em{position:absolute;right:0;top:-18px;padding:2px 7px;border-radius:999px;background:var(--ml-bg);font:600 10.5px/1.2 var(--ml-mono);font-style:normal;color:var(--ml-accent-ink)}
.d .bars{position:absolute;inset:0 0 0 46px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
.d .bc{position:relative}
.d .bar{position:absolute;top:0;bottom:0;left:50%;width:min(64%,118px);transform:translateX(-50%)}
.d .sg{position:absolute;inset:0;transform:translateY(calc(var(--o,0) * -100%)) scaleY(var(--h,0));transform-origin:50% 100%;transition:transform 700ms var(--ml-ease)}
.d .sg.a{background:var(--ml-accent);box-shadow:0 -2px 0 #fff}
.d .sg.b{background:var(--ml-accent-2);box-shadow:0 -2px 0 #fff}
.d .sg.c{background:var(--ml-accent-line);box-shadow:0 -2px 0 #fff}
.d .lw{position:absolute;inset:0;transform:translateY(calc(var(--t,0) * -100%));transition:transform 700ms var(--ml-ease)}
.d .lw b{position:absolute;left:-10px;right:-10px;bottom:8px;text-align:center;font-size:13px;font-weight:650;font-variant-numeric:tabular-nums}
.d .xl{display:grid;grid-template-columns:46px repeat(3,minmax(0,1fr));margin-top:10px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted);text-align:center}
.d .sc2{display:flex;flex-direction:column;min-width:0;padding:18px 20px}
.d .adj{display:flex;align-items:baseline;gap:9px;margin-top:8px;font-size:12.5px;color:var(--ml-muted)}
.d .adj b{font-size:26px;line-height:1;font-weight:650;letter-spacing:-.03em;color:var(--ml-ink)}
.d .rng{-webkit-appearance:none;appearance:none;width:100%;height:24px;margin-top:14px;background:none;cursor:pointer}
.d .rng::-webkit-slider-runnable-track{height:6px;border-radius:4px;background:linear-gradient(90deg,var(--ml-accent) var(--f,50%),var(--ml-bar-2) var(--f,50%))}
.d .rng::-moz-range-track{height:6px;border-radius:4px;background:linear-gradient(90deg,var(--ml-accent) var(--f,50%),var(--ml-bar-2) var(--f,50%))}
.d .rng::-webkit-slider-thumb{-webkit-appearance:none;width:24px;height:24px;margin-top:-9px;border-radius:50%;background:#fff;border:0;box-shadow:0 0 0 1.5px var(--ml-accent),0 3px 8px rgba(255,68,51,.3)}
.d .rng::-moz-range-thumb{width:24px;height:24px;border-radius:50%;background:#fff;border:0;box-shadow:0 0 0 1.5px var(--ml-accent),0 3px 8px rgba(255,68,51,.3)}
.d .rng:focus-visible{outline:2px solid var(--ml-accent);outline-offset:4px;border-radius:6px}
.d .rl{display:flex;justify-content:space-between;margin-top:2px;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .tb2{margin-top:16px}
.d .ins{display:flex;align-items:flex-start;gap:10px;margin-top:auto;padding:12px 14px;border-radius:12px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:12.5px;line-height:1.45;color:var(--ml-ink-2)}
.d .ins svg{flex:none;margin-top:1px;color:var(--ml-accent)}
.d .ins b{font-weight:650;color:var(--ml-accent-ink)}
.d .tr0{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.9fr) minmax(0,.7fr) minmax(0,.9fr);align-items:center;gap:8px;padding:11px 0;border-top:1px solid var(--ml-line);font-size:13px}
.d .tr0.th{padding:0 0 8px;border-top:0;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .tr0 span:nth-child(n+2){text-align:right}
.d .tr0 .sn{display:flex;align-items:center;gap:8px;font-weight:600}
.d .tr0 .sn i{width:8px;height:8px;border-radius:50%;background:var(--ml-accent-2)}
.d .tr0 .pw{font-weight:650}
.d .tr0 .up{color:#12893C}
.d .tr0 .dn3{color:#D70015}
@container scr (max-width: 760px){
  .d .tn{padding:0 16px;gap:10px}
  .d .tn .sp,.d .tn .ic,.d .tn .av{display:none}
  .d .tn .tabs{margin-left:0;flex:1}
  .d .tn .brand b,.d .tn .brand em{display:none}
  .d .page{padding:18px 16px 24px}
  .d .head{flex-direction:column;align-items:flex-start}
  .d .seg{grid-template-columns:repeat(3,minmax(0,1fr));width:100%}
  .d .thumb{width:calc((100% - 6px) / 3)}
  .d .kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .kpis .kp:last-child{grid-column:1/-1}
  .d .row{grid-template-columns:minmax(0,1fr)}
  .d .chart{min-height:300px}
  .d .leg{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const stages = [
        ['Qualified', 84200, 0.2, [0, 0.25, 0.75]],
        ['Proposal', 112400, 0.4, [0.1, 0.4, 0.5]],
        ['Negotiation', 63000, 0.7, [0.3, 0.5, 0.2]],
        ['Commit', 41500, 0.9, [0.6, 0.4, 0]],
      ];
      const won = [96300, 0, 0];
      const QUOTA = 320000;
      const MAX = 180000;
      const fmt = (n) => '$' + Math.round(n).toLocaleString('en-US');
      const fk = (n) => (n >= 1000 ? '$' + (n / 1000).toFixed(1) + 'k' : '$' + Math.round(n));
      const f0 = (n) => '$' + Math.round(n / 1000) + 'k';
      const bars = $('.bars');
      bars.innerHTML = ['Oct', 'Nov', 'Dec']
        .map((m) => `<div class="bc" role="img" aria-label="${m} forecast"><div class="bar"><i class="sg c"></i><i class="sg b"></i><i class="sg a"></i><div class="lw"><b class="num"></b></div></div></div>`)
        .join('');
      const trs = $('.trs');
      trs.innerHTML = stages.map((s) => `<div class="tr0" role="row"><span class="sn"><i></i>${s[0]}</span><span class="num">${fk(s[1])}</span><span class="num wn"></span><span class="num pw"></span></div>`).join('');
      const roll = (el, to) => {
        const from = +el.dataset.n || 0;
        el.dataset.n = to;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const u = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 500);
          el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - u, 3)));
          if (u < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      $('.i5').textContent = '$' + Math.round(stages.reduce((a, s) => a + s[1], 0) * 0.05 / 1000) + 'k';
      const rng = $('.rng');
      const seg = $('.seg');
      const sb = $$('.seg button');
      let first = true;
      const update = () => {
        const init = first;
        const adj = +rng.value;
        const p = stages.map((s) => Math.min(0.98, Math.max(0.05, s[2] + adj / 100)));
        const w = stages.map((s, i) => s[1] * p[i]);
        const wTot = w.reduce((a, b) => a + b, 0);
        const m = [0, 1, 2].map((mi) => {
          const commit = w[2] * stages[2][3][mi] + w[3] * stages[3][3][mi];
          const pipe = w[0] * stages[0][3][mi] + w[1] * stages[1][3][mi];
          return [won[mi], commit, pipe];
        });
        $$('.bar').forEach((b, mi) => {
          const [a, c, d] = m[mi];
          const sg = b.querySelectorAll('.sg');
          const set = (el, o, h) => {
            el.style.setProperty('--o', o / MAX);
            el.style.setProperty('--h', h / MAX);
          };
          set(sg[2], 0, a);
          set(sg[1], a, c);
          set(sg[0], a + c, d);
          const tot = a + c + d;
          b.querySelector('.lw').style.setProperty('--t', tot / MAX);
          b.querySelector('b').textContent = f0(tot);
          b.parentNode.setAttribute('aria-label', `${['Oct', 'Nov', 'Dec'][mi]} forecast ${f0(tot)}`);
        });
        const total = won[0] + wTot;
        const pc = Math.round((total / QUOTA) * 100);
        const bump = (el) => {
          el.classList.remove('bump');
          void el.offsetWidth;
          el.classList.add('bump');
        };
        if (first) {
          $('.wp').textContent = fmt(wTot);
          $('.wp').dataset.n = Math.round(wTot);
          $('.ft').textContent = fmt(total);
          $('.ft').dataset.n = Math.round(total);
          first = false;
        } else {
          roll($('.wp'), wTot);
          roll($('.ft'), total);
        }
        $('.pc').textContent = pc + '%';
        $('.qf').style.setProperty('--q', Math.min(1, total / QUOTA));
        const st = $('.st2');
        st.className = 'pill st2 ' + (pc >= 85 ? 'ok' : pc >= 65 ? 'warn' : 'bad');
        st.textContent = pc >= 85 ? 'On track' : pc >= 65 ? 'Needs push' : 'At risk';
        $$('.tr0:not(.th)').forEach((r, i) => {
          const wn = r.querySelector('.wn');
          wn.textContent = Math.round(p[i] * 100) + '%';
          wn.className = 'num wn' + (adj > 0 ? ' up' : adj < 0 ? ' dn3' : '');
          r.querySelector('.pw').textContent = fk(w[i]);
        });
        $('.av3').textContent = (adj > 0 ? '+' : adj < 0 ? '-' : '+') + Math.abs(adj) + ' pts';
        rng.style.setProperty('--f', ((adj + 20) / 40) * 100 + '%');
        const idx = sb.findIndex((b) => +b.dataset.v === adj);
        sb.forEach((b, i) => {
          b.classList.toggle('on', i === idx);
          b.setAttribute('aria-pressed', String(i === idx));
        });
        seg.style.setProperty('--x', idx < 0 ? '0%' : idx * 100 + '%');
        $('.thumb').style.opacity = idx < 0 ? 0 : 1;
        if (!init) {
          bump($('.ft'));
          bump($('.wp'));
        }
      };
      let anim = 0;
      const slideTo = (to) => {
        cancelAnimationFrame(anim);
        const from = +rng.value;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const u = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 600);
          rng.value = Math.round(from + (to - from) * (1 - Math.pow(1 - u, 3)));
          update();
          if (u < 1) anim = requestAnimationFrame(step);
        };
        anim = requestAnimationFrame(step);
      };
      rng.addEventListener('input', () => {
        cancelAnimationFrame(anim);
        update();
      });
      seg.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (b) slideTo(+b.dataset.v);
      });
      update();

      // Autoplay: grab the slider thumb and drag it up and down, then use the scenario buttons.
      const tween = (ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = performance.now();
          const step = (t) => {
            if (!root.isConnected) return res(false);
            const dt = t - last;
            last = t;
            if (performance.now() < userUntil) return res(false);
            if (!root.dataset.paused) {
              acc += dt;
              const u = Math.min(1, acc / ms);
              fn(u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2);
              if (u >= 1) return res(true);
            }
            requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      const thumbPt = (v) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = rng.getBoundingClientRect();
        return [(r.left - o.left + 12 + ((v + 20) / 40) * (r.width - 24)) / s, (r.top - o.top + r.height / 2) / s];
      };
      const drag = async () => {
        if (!(await aim(rng, 0.5, 0.5))) return false;
        const [x0, y0] = thumbPt(+rng.value);
        cur.classList.toggle('off', rng.offsetParent === null);
        cur.style.transition = 'none';
        cur.style.transform = `translate(${x0}px,${y0}px)`;
        cur.classList.add('press');
        let ok = true;
        for (const to of [14, -12, 0]) {
          const from = +rng.value;
          ok = await tween(1500, (e) => {
            const v = Math.round(from + (to - from) * e);
            rng.value = v;
            update();
            const [x, y] = thumbPt(from + (to - from) * e);
            cur.style.transform = `translate(${x}px,${y}px)`;
          });
          if (!ok) break;
          await wait(500);
        }
        cur.style.transition = '';
        cur.classList.remove('press');
        return ok;
      };
      cur.style.transform = 'translate(700px,480px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          await seq([
            drag,
            rest(1200),
            () => press(sb[2], 0.5, 0.5),
            rest(2400),
            () => press(sb[0], 0.5, 0.5),
            rest(2400),
            () => press(sb[1], 0.5, 0.5),
            rest(1800),
          ]);
          await wait(400);
        }
      })();
    },
    prompt: `Build a sales forecast screen for a CRM with a top navigation layout, full viewport.

Layout: a 62px top bar (logo tile, six text tabs with a 2px accent underline on the active one, search, bell, avatar), then a page: a header (26px "Sales forecast", a muted "Q4 2026, updated 6 minutes ago" line) with a segmented scenario control (Conservative, Expected, Best case) on the right; a row of three KPI cards (Weighted pipeline, Closed won, Forecast total with a status pill, a 6px quota progress bar and "75% of quota"); then two cards: a stacked bar chart (left, about 60% wide) and a "What if" card (right) with a big "+0 pts" readout, a styled range input (-20 to +20 points) and a four-row stage table (stage, value, adjusted win rate, weighted value).

Maths: each stage has a value, a base win probability (Qualified 20%, Proposal 40%, Negotiation 70%, Commit 90%) and a split across the three months of the quarter. Adjusted probability = base + slider points, clamped between 5% and 98%. Weighted = value * adjusted probability; each month bar stacks Closed won, Commit (Negotiation + Commit) and Pipeline (Qualified + Proposal) weighted values; forecast total = closed won + weighted pipeline; the pill reads On track at 85% of quota or more, Needs push from 65%, At risk below.

Motion: bars are stacked absolutely positioned segments that fill the plot height and move with transform: translateY(offset * -100%) scaleY(fraction) from a bottom origin (never animate height), 700ms ease-out, with a value label riding on top of each bar the same way. Dragging the slider updates everything on every input event; the KPI numbers count up over 500ms and pop once (scale 1.12); the quota bar uses scaleX. The segmented control has ONE accent-soft thumb that glides on the 587ms spring and fades out when the slider sits on a value that matches none of the presets; clicking a preset animates the slider to its value (-10, 0, +10). A dashed monthly-target line crosses the chart.

Accessibility: the range input has an aria-label and a visible focus ring, bars have aria-labels with their totals, preset buttons expose aria-pressed. Phone layout under 760px: tabs scroll, KPIs two per row with the last one full width, chart and What-if card stack. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopNav, ScenarioControl, KpiCard, StackedBarChart, WhatIfCard, StageTable).`,
  });

  // ---------------------------------------------------------------- 9. Call log and dialer (split panes)
  const KEYS = [['1', ''], ['2', 'ABC'], ['3', 'DEF'], ['4', 'GHI'], ['5', 'JKL'], ['6', 'MNO'], ['7', 'PQRS'], ['8', 'TUV'], ['9', 'WXYZ'], ['*', ''], ['0', '+'], ['#', '']];
  ML.add({
    id: 'app-crm-calls',
    cat: 'app-crm',
    title: 'Call log and dialer',
    sub: 'Live timer, keypad and call notes',
    html: `
<div class="app g">
  <aside class="lp">
    <div class="lh"><span class="mark">${I(P.mark, 16)}</span><div><b>Calls</b><small class="num lc"></small></div><button class="ic" type="button" aria-label="Call settings">${I(P.sliders, 17)}</button></div>
    <div class="seg" role="group" aria-label="Filter calls"><span class="thumb" aria-hidden="true"></span><button type="button" class="on" data-f="all">All</button><button type="button" data-f="missed">Missed</button><button type="button" data-f="out">Outgoing</button></div>
    <ul class="log sc" aria-label="Call log"></ul>
  </aside>
  <main class="rt3 sc">
    <section class="card dial">
      <div class="dsp"><p class="dn num" aria-live="polite"></p><button class="bs" type="button" aria-label="Delete last digit">${I(P.backsp, 19)}</button></div>
      <p class="mt"></p>
      <div class="pad">${KEYS.map(([n, l]) => `<button class="key" type="button" data-k="${n}"><b>${n}</b><small>${l}</small></button>`).join('')}</div>
      <button class="cta callb" type="button">${I(P.phone, 17)}<span>Call</span></button>
    </section>
    <div class="stack">
      <section class="card call" data-st="live">
        <div class="chd"><span class="pill ok cs"><i class="dot"></i><span class="cst">On call</span></span><span class="cd2">Outgoing, ${I(P.clock, 12)} <span class="num">9:52 AM</span></span></div>
        <div class="who2"><span class="av l cav t2">TL</span><div><b class="cn2"></b><small class="cc"></small></div></div>
        <p class="timer num">02:14</p>
        <div class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
        <div class="ctl">
          <button class="rb" type="button" data-t="mute" aria-pressed="false">${I(P.mic, 19)}<small>Mute</small></button>
          <button class="rb" type="button" data-t="hold" aria-pressed="false">${I(P.pause, 19)}<small>Hold</small></button>
          <button class="end" type="button">${I(P.phone, 18)}End call</button>
        </div>
        <p class="saved">${I(P.check, 15, 2.8)}Saved to the contact timeline</p>
      </section>
      <section class="card nts">
        <div class="nh"><b>Call notes</b><div class="oc" role="group" aria-label="Outcome"><button type="button" class="chip" aria-pressed="false">Interested</button><button type="button" class="chip" aria-pressed="false">Follow up</button><button type="button" class="chip" aria-pressed="false">No answer</button></div></div>
        <label class="ta"><textarea class="tx" rows="4" placeholder="Add call notes" aria-label="Call notes"></textarea></label>
      </section>
    </div>
    <section class="card sts"><div><p class="k">Calls this week</p><p class="sv2 num s-c">24</p></div><div><p class="k">Talk time</p><p class="sv2 num s-t">3h 12m</p></div><div><p class="k">Answer rate</p><p class="sv2 num">71%</p></div></section>
  </main>
  <div class="toast" role="status">${I(P.check, 15, 2.8)}<span></span></div>
  ${ICONS(['callOut', 'callIn', 'callMiss'])}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d [hidden]{display:none!important}
.d .g{display:grid;grid-template-columns:330px minmax(0,1fr)}
.d .lp{display:flex;flex-direction:column;gap:14px;min-height:0;padding:20px 16px 0;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .lh{display:flex;align-items:center;gap:11px;padding:0 4px}
.d .lh > div{flex:1;min-width:0}
.d .lh b{display:block;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .lh small{font-size:12px;color:var(--ml-muted)}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(3,1fr);padding:3px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg button{position:relative;z-index:1;height:30px;font-size:13px;font-weight:600;color:var(--ml-muted);transition:color .25s ease,transform 90ms ease-out}
.d .seg button.on{color:var(--ml-ink)}
.d .thumb{position:absolute;top:3px;bottom:3px;left:3px;width:calc((100% - 6px) / 3);border-radius:8px;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px rgba(227,233,242,.8);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .log{display:flex;flex:1;flex-direction:column;min-height:0;margin:0 -6px;padding:0 6px 14px}
.d .lg{display:grid;grid-template-rows:1fr;transition:grid-template-rows .55s var(--ml-ease),opacity .4s ease}
.d .lg.enter{grid-template-rows:0fr;opacity:0}
.d .lgi{display:flex;align-items:center;gap:12px;min-height:0;overflow:hidden;padding:0 8px;border-radius:12px}
.d .lg .row0{display:flex;align-items:center;gap:12px;width:100%;padding:10px 0}
.d .lg.fresh .lgi{animation:crm-fresh2 2.6s ease}
.d .lg.sw .lgi{animation:crm-in 460ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 40ms)}
.d .dirt{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .dirt.in{background:var(--ml-bar-2);color:var(--ml-ink-2)}
.d .dirt.miss{background:rgba(255,59,48,.09);color:#D70015}
.d .dirt svg{width:17px;height:17px}
.d .lg p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .lg b{overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .lg small{overflow:hidden;font-size:12px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .lg .r{display:flex;flex-direction:column;align-items:flex-end;gap:2px;font:500 11px/1.2 var(--ml-mono);color:var(--ml-muted)}
.d .lg .r b{font:650 12.5px/1.2 var(--ml-mono);color:var(--ml-ink)}
.d .lg .r b.m{color:#D70015}
.d .rt3{display:grid;grid-template-columns:272px minmax(0,1fr);align-items:stretch;grid-template-rows:minmax(min-content,1fr) auto;gap:16px;min-height:0;padding:22px 24px 14px}
.d .dial{display:flex;flex-direction:column;padding:16px 16px 16px}
.d .dsp{display:flex;align-items:center;gap:6px;height:44px}
.d .dn{flex:1;min-width:0;overflow:hidden;font:600 21px/1 var(--ml-mono);letter-spacing:-.02em;white-space:nowrap;text-overflow:ellipsis}
.d .dn.ph{font:500 15px/1 var(--ml-font);letter-spacing:0;color:var(--ml-muted)}
.d .bs{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:10px;color:var(--ml-muted)}
.d .bs:hover{background:var(--ml-surface)}
.d .mt{height:20px;margin-top:2px;font-size:12.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .pad{display:grid;flex:1;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(54px,1fr);gap:8px;margin-top:8px}
.d .key{display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:54px;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:transform 90ms ease-out,background-color .2s ease}
.d .key b{font-size:19px;font-weight:600;line-height:1.1}
.d .key small{height:10px;font:600 9px/10px var(--ml-mono);letter-spacing:.1em;color:var(--ml-muted)}
.d .key:hover{background:var(--ml-accent-soft)}
.d .key.press,.d .key:active{transform:scale(.93);background:var(--ml-accent-soft)}
.d .callb{width:100%;height:46px;margin-top:12px;border-radius:13px;font-size:14.5px}
.d .callb:disabled{opacity:.45;box-shadow:none;cursor:default}
.d .stack{display:flex;flex-direction:column;gap:16px;min-width:0}
.d .call{padding:16px 18px 18px}
.d .chd{display:flex;align-items:center;justify-content:space-between}
.d .cs{gap:7px}
.d .dot{position:relative;width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .dot::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:crm-ping 1.8s ease-out infinite}
.d .call[data-st="dialing"] .cs{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .call[data-st="dialing"] .dot,.d .call[data-st="dialing"] .dot::after{background:var(--ml-accent)}
.d .call[data-st="ended"] .cs,.d .call[data-st="idle"] .cs{background:var(--ml-bar-2);color:var(--ml-ink-2)}
.d .call[data-st="ended"] .dot,.d .call[data-st="idle"] .dot{background:var(--ml-muted)}
.d .call[data-st="ended"] .dot::after,.d .call[data-st="idle"] .dot::after{animation:none}
.d .cd2{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--ml-muted)}
.d .who2{display:flex;align-items:center;gap:14px;margin-top:14px}
.d .who2 > div{display:flex;flex-direction:column;min-width:0}
.d .who2 b{font-size:18px;font-weight:650;letter-spacing:-.02em}
.d .who2 small{font-size:13px;color:var(--ml-muted)}
.d .timer{margin-top:14px;font:600 44px/1 var(--ml-mono);letter-spacing:-.04em;text-align:center}
.d .call[data-st="idle"] .timer{color:var(--ml-bar)}
.d .wave{display:flex;align-items:center;justify-content:center;gap:5px;height:44px;margin-top:8px}
.d .wave i{width:4px;height:100%;border-radius:2px;background:var(--ml-accent);transform:scaleY(.16);animation:crm-wave 1.1s ease-in-out infinite}
.d .wave i:nth-child(3n){animation-duration:.8s}
.d .wave i:nth-child(3n+1){animation-duration:1.3s}
.d .wave i:nth-child(2n){background:var(--ml-accent-2)}
${[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((n) => `.d .wave i:nth-child(${n}){animation-delay:${-((n * 137) % 900)}ms}`).join('\n')}
.d .call:not([data-st="live"]) .wave i{animation:none;transform:scaleY(.12);background:var(--ml-bar)}
.d .call[data-st="dialing"] .wave i{animation:crm-dial 1.2s ease-in-out infinite;background:var(--ml-accent-line)}
.d .ctl{display:flex;align-items:center;gap:10px;margin-top:8px}
.d .rb{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;width:62px;height:56px;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2);transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .rb small{font-size:10.5px;font-weight:600}
.d .rb[aria-pressed="true"]{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .end{display:inline-flex;flex:1;align-items:center;justify-content:center;gap:8px;height:56px;border-radius:14px;background:#FF3B30;color:#fff;font-size:14.5px;font-weight:650;box-shadow:0 1px 2px rgba(255,59,48,.3),0 8px 18px rgba(255,59,48,.22);transition:transform 90ms ease-out}
.d .end svg{transform:rotate(135deg)}
.d .call:not([data-st="live"]):not([data-st="dialing"]) .ctl{display:none}
.d .saved{display:none;align-items:center;justify-content:center;gap:8px;height:56px;margin-top:8px;border-radius:14px;background:rgba(29,185,84,.1);font-size:13.5px;font-weight:600;color:#12893C}
.d .call[data-st="ended"] .saved{display:flex;animation:crm-in 460ms var(--ml-spring) both}
.d .sts{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));padding:14px 18px}
.d .sts > div + div{padding-left:18px;border-left:1px solid var(--ml-line)}
.d .sv2{display:inline-block;margin-top:6px;font-size:24px;line-height:1;font-weight:650;letter-spacing:-.03em}
.d .sv2.bump{animation:crm-pop 460ms var(--ml-ease)}
.d .nts{display:flex;flex:1;flex-direction:column;padding:14px 16px 16px}
.d .nh{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}
.d .nh b{font-size:14.5px;font-weight:650;white-space:nowrap}
.d .oc{display:flex;gap:6px}
.d .chip{height:28px;padding:0 9px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:11.5px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .chip:hover{background:var(--ml-surface)}
.d .chip[aria-pressed="true"]{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .ta{display:flex;flex:1;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,background-color .25s ease}
.d .ta:focus-within,.d .ta.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .tx{display:block;flex:1;width:100%;min-height:96px;padding:11px 13px;border:0;outline:0;background:none;resize:none;font-size:13.5px;line-height:1.5}
.d .tx::placeholder{color:var(--ml-muted)}
@keyframes crm-wave{0%,100%{transform:scaleY(.16)}50%{transform:scaleY(1)}}
@keyframes crm-dial{0%,100%{transform:scaleY(.12);opacity:.5}50%{transform:scaleY(.4);opacity:1}}
@keyframes crm-fresh2{0%,35%{background:var(--ml-accent-soft)}100%{background:transparent}}
@container scr (max-width: 760px){
  .d .g{display:flex;flex-direction:column;overflow-y:auto}
  .d .rt3{order:1;flex:none;display:flex;flex-direction:column;padding:16px;overflow:visible}
  .d .lp{order:2;flex:none;border-right:0;border-top:1px solid var(--ml-line);overflow:visible;padding-bottom:12px}
  .d .log{overflow:visible}
  .d .stack{order:-1;width:100%}
  .d .dial{width:100%}
  .d .oc .chip:nth-child(3){display:none}
}
@media (prefers-reduced-motion: reduce){.d .wave i,.d .dot::after{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const ic = (k) => $(`.icons [data-ic="${k}"]`).innerHTML;
      const people = {
        '6285550117': ['Tomas Lindqvist', 'Kestrel & Co', 'TL', ' t2'],
        '4155550142': ['Priya Nair', 'Northgate', 'PN', ''],
        '3125550187': ['Noor Haddad', 'Juniper Health', 'NH', ' t3'],
        '7135550132': ['Kwame Mensah', 'Atlas Freight', 'KM', ' t4'],
      };
      const calls = [
        { n: 'Aiko Tan', co: 'Fernway Partners', d: 'in', du: '6:21', t: '9:05 AM' },
        { n: 'Carlos Mendoza', co: 'Bayside Fitness', d: 'miss', du: '', t: '8:48 AM' },
        { n: 'Priya Nair', co: 'Northgate', d: 'out', du: '14:08', t: 'Yesterday' },
        { n: 'Noor Haddad', co: 'Juniper Health', d: 'out', du: '3:42', t: 'Yesterday' },
        { n: 'Luis Ortega', co: 'Brightline Dental', d: 'in', du: '9:17', t: 'Yesterday' },
        { n: 'Elena Petrova', co: 'Tidewater Realty', d: 'miss', du: '', t: 'Mon' },
        { n: 'Kwame Mensah', co: 'Atlas Freight', d: 'out', du: '22:30', t: 'Mon' },
        { n: 'Hana Kim', co: 'Kestrel & Co', d: 'in', du: '4:05', t: 'Mon' },
        { n: 'Jia Wen', co: 'Lumen Labs', d: 'out', du: '8:40', t: 'Tue 6 Oct' },
        { n: 'Sam Whitfield', co: 'Solace Studio', d: 'miss', du: '', t: 'Tue 6 Oct' },
        { n: 'Isabel Cruz', co: 'Corvid Coffee', d: 'out', du: '12:15', t: 'Mon 5 Oct' },
      ];
      const dirLabel = { in: 'Incoming', out: 'Outgoing', miss: 'Missed' };
      let filter = 'all';
      let st = 'live';
      let secs = 134;
      let who = people['6285550117'];
      let digits = '';
      let week = 24;
      let mins = 192;
      const logEl = $('.log');
      const callEl = $('.call');
      const toast = $('.toast');
      let toastT = 0;
      const say = (m) => {
        toast.lastChild.textContent = m;
        toast.classList.add('on');
        clearTimeout(toastT);
        toastT = setTimeout(() => toast.classList.remove('on'), 2400);
      };
      const mmss = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
      const rowHtml = (c, i, cls) =>
        `<li class="lg${cls ? ' ' + cls : ''}" style="--i:${i}"><div class="lgi"><div class="row0"><span class="dirt ${c.d}">${ic(c.d === 'in' ? 'callIn' : c.d === 'miss' ? 'callMiss' : 'callOut')}</span><p><b>${c.n}</b><small>${dirLabel[c.d]}, ${c.co}</small></p><span class="r"><b class="num${c.d === 'miss' ? ' m' : ''}">${c.d === 'miss' ? 'Missed' : c.du}</b>${c.t}</span></div></div></li>`;
      const paintCount = () => {
        $('.lc').textContent = `${calls.length} calls, ${calls.filter((c) => c.d === 'miss').length} missed`;
      };
      const renderLog = (swap) => {
        const v = calls.filter((c) => filter === 'all' || (filter === 'missed' ? c.d === 'miss' : c.d === 'out'));
        logEl.innerHTML = v.map((c, i) => rowHtml(c, i, swap ? 'sw' : '')).join('');
        paintCount();
      };
      const seg = $('.seg');
      const fb = $$('.seg button');
      fb.forEach((b, i) =>
        b.addEventListener('click', () => {
          if (b.dataset.f === filter) return;
          filter = b.dataset.f;
          fb.forEach((x) => x.classList.toggle('on', x === b));
          $('.thumb').style.transform = `translateX(${i * 100}%)`;
          renderLog(true);
        })
      );
      renderLog(false);

      const setState = (s) => {
        st = s;
        callEl.dataset.st = s;
        const cst = $('.cst');
        const timer = $('.timer');
        if (s === 'live') {
          cst.textContent = 'On call';
          timer.textContent = mmss(secs);
        } else if (s === 'dialing') {
          cst.textContent = 'Calling';
          timer.textContent = 'Dialing';
          timer.style.fontSize = '30px';
        } else if (s === 'ended') {
          cst.textContent = 'Call ended';
        } else {
          cst.textContent = 'Ready';
          timer.textContent = '--:--';
        }
        if (s !== 'dialing') timer.style.fontSize = '';
        paintWho();
        $('.callb').disabled = s === 'live' || s === 'dialing';
        $('.callb span').textContent = s === 'live' ? 'On a call' : 'Call';
      };
      const paintWho = () => {
        const idle = st === 'idle';
        $('.cav').textContent = idle ? '-' : who[2];
        $('.cav').className = 'av l cav' + (idle ? ' t4' : who[3]);
        $('.cn2').textContent = idle ? 'No active call' : who[0];
        $('.cc').textContent = idle ? 'Dial a number or pick someone from the log' : who[1];
      };
      const fmtNum = (d) => {
        if (!d) return '';
        const a = d.slice(0, 3);
        const b = d.slice(3, 6);
        const c = d.slice(6, 10);
        return d.length <= 3 ? a : d.length <= 6 ? `(${a}) ${b}` : `(${a}) ${b}-${c}`;
      };
      const dn = $('.dn');
      const paintDial = () => {
        dn.textContent = digits ? fmtNum(digits) : 'Enter a number';
        dn.classList.toggle('ph', !digits);
        const p = people[digits];
        $('.mt').textContent = p ? `${p[0]}, ${p[1]}` : '';
      };
      const tap = (k2) => {
        if (/[0-9]/.test(k2) && digits.length < 10) digits += k2;
        paintDial();
      };
      $('.pad').addEventListener('click', (e) => {
        const b = e.target.closest('.key');
        if (b) tap(b.dataset.k);
      });
      $('.bs').addEventListener('click', () => {
        digits = digits.slice(0, -1);
        paintDial();
      });
      $$('.rb').forEach((b) => b.addEventListener('click', () => b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true'))));
      const chips = $$('.chip');
      chips.forEach((b) => b.addEventListener('click', () => {
        const on = b.getAttribute('aria-pressed') !== 'true';
        chips.forEach((x) => x.setAttribute('aria-pressed', 'false'));
        b.setAttribute('aria-pressed', String(on));
      }));
      const tx = $('.tx');
      const ta = $('.ta');
      tx.value = 'Wants the revised quote before Friday. Two sites first, third in Q1.';
      paintDial();
      setState('live');

      const endCall = () => {
        if (st !== 'live' && st !== 'dialing') return;
        const was = st;
        const dur = mmss(secs);
        setState('ended');
        $('.timer').textContent = was === 'live' ? dur : '--:--';
        if (was === 'live') {
          calls.unshift({ n: who[0], co: who[1], d: 'out', du: dur.replace(/^0/, ''), t: 'Just now' });
          renderLog(false);
          const first = logEl.firstChild;
          if (first) {
            first.classList.add('enter', 'fresh');
            void first.offsetWidth;
            first.classList.remove('enter');
          }
          if (calls.length > 12) {
            const gone = calls.pop();
            const last = logEl.lastElementChild;
            if (last && filter === 'all') {
              last.classList.add('enter');
              setTimeout(() => last.remove(), 600);
            }
            void gone;
          }
          paintCount();
          week++;
          mins += Math.max(1, Math.round(secs / 60));
          $('.s-c').textContent = week;
          $('.s-t').textContent = `${Math.floor(mins / 60)}h ${String(mins % 60).padStart(2, '0')}m`;
          ['.s-c', '.s-t'].forEach((q) => {
            const el = $(q);
            el.classList.remove('bump');
            void el.offsetWidth;
            el.classList.add('bump');
          });
          say(`Call with ${who[0]} saved`);
        }
        setTimeout(() => st === 'ended' && setState('idle'), 3200);
      };
      $('.end').addEventListener('click', endCall);
      const dialNow = async () => {
        if (st === 'live' || st === 'dialing' || digits.length < 10) return;
        who = people[digits] || ['Unknown caller', fmtNum(digits), '?', ' t4'];
        setState('dialing');
        await wait(1700);
        if (st !== 'dialing') return;
        secs = 0;
        tx.value = '';
        chips.forEach((x) => x.setAttribute('aria-pressed', 'false'));
        digits = '';
        paintDial();
        setState('live');
      };
      $('.callb').addEventListener('click', dialNow);

      // the live timer ticks once a second (it waits while the card is paused offscreen)
      (async () => {
        while (root.isConnected) {
          await wait(1000);
          if (st === 'live') {
            secs++;
            $('.timer').textContent = mmss(secs);
          }
        }
      })();

      // Autoplay: tag the call, add a note, end it (it lands in the log), then dial the next contact on the keypad.
      const laps = [
        { out: ' Quote goes out Thursday.', chip: 0, num: '4155550142' },
        { out: ' Send the BAA before Monday.', chip: 1, num: '3125550187' },
        { out: ' Invoice resent as PDF.', chip: 0, num: '7135550132' },
        { out: ' Demo booked for Friday at 2.', chip: 1, num: '6285550117' },
      ];
      let lap = 0;
      const key = (k2) => async () => {
        const el = $$('.key').find((b) => b.dataset.k === k2);
        if (!(await aimQuick(el))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(90);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      const aimQuick = async (el) => {
        if (!idle()) return false;
        cur.style.transition = 'transform 230ms var(--ml-ease),opacity .25s ease';
        cur.classList.toggle('off', !moveTo(el, 0.5, 0.5));
        await wait(300);
        return idle();
      };
      cur.style.transform = 'translate(700px,520px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || (st !== 'live' && st !== 'idle')) {
            await wait(400);
            continue;
          }
          const L = laps[lap++ % laps.length];
          if (st === 'live') {
            await seq([
              () => press(chips[L.chip], 0.5, 0.5),
              rest(600),
              () => aim(ta, 0.5, 0.6),
              async () => {
                tx.focus({ preventScroll: true });
                tx.blur();
                return typeInto(tx, L.out, ta);
              },
              rest(900),
              () => press($('.end'), 0.5, 0.5),
              rest(2200),
            ]);
          }
          if (st !== 'idle' && st !== 'ended') continue;
          await wait(900);
          digits = '';
          paintDial();
          const steps = [...L.num].map((d) => key(d));
          steps.push(rest(400));
          steps.push(async () => {
            cur.style.transition = '';
            return true;
          });
          steps.push(() => press($('.callb'), 0.5, 0.5));
          await seq(steps);
          cur.style.transition = '';
          await wait(4200);
        }
      })();
    },
    prompt: `Build a call log and dialer screen for a CRM, split into a call-log pane and a working area, full viewport.

Layout: grid columns 330px and minmax(0, 1fr). Left pane (white, hairline right border): a logo tile with "Calls" and a count line ("7 calls, 2 missed"), a segmented filter (All, Missed, Outgoing) with ONE white thumb that glides via transform: translateX(index * 100%) on the 587ms spring, and a scrolling log: 36px direction tile (outgoing = accent tint, incoming = neutral, missed = red tint, each with a call-direction icon), name, "Outgoing, Company" caption, bold mono duration (or red "Missed") and a mono time. Right area: a dialer card (272px: number readout in 21px mono with a backspace button, a matched contact name line, a 3x4 keypad of 54px keys with letters under the digits, a full-width primary Call button that is disabled mid-call) next to a stack of two cards: the active-call card (status pill with a pinging dot, direction and start time, 64px avatar with name and company, a 44px mono timer that counts every second, a 14-bar waveform, Mute and Hold toggle buttons with aria-pressed and a red "End call" button) and a notes card (outcome chips Interested, Follow up, No answer as a single-select group, and a textarea).

Behavior: keys append digits (formatted as (415) 555-0142) and a known number shows the contact match under the readout. Call enters a "Calling" state (timer reads Dialing, waveform dims to a slow pulse) for about 1.7s, then goes live with the timer from 00:00 and empty notes. End call switches the card to a green "Saved to the contact timeline" confirmation, inserts the call at the top of the log (animate grid-template-rows from 0fr to 1fr over 550ms with a 2.6s accent-soft flash), trims the log to twelve rows, shows a dark toast and returns the card to a "Ready" state after about 3s. Waveform bars scaleY between .16 and 1 on staggered 0.8 to 1.3s loops (transform only).

Accessibility: keys, toggles and chips are real buttons with labels and pressed states, the number readout is aria-live, focus rings are visible, prefers-reduced-motion stops the waveform and pings. Phone layout under 760px: stack the call card, dialer and then the log in one scrolling column. Plain HTML, CSS and JS, no libraries; React-friendly structure (CallLog, FilterTabs, Dialer, Keypad, ActiveCall, Waveform, NotesCard).`,
  });

  // ---------------------------------------------------------------- 10. Tasks and follow-ups (smart-list pane + task list)
  ML.add({
    id: 'app-crm-tasks',
    cat: 'app-crm',
    title: 'Tasks and follow-ups',
    sub: 'Overdue and today, checks draw as you go',
    html: `
<div class="app g">
  <aside class="lp">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Fernway</b><em>CRM</em></div>
    <p class="k">Views</p>
    <nav class="vw" aria-label="Task views">
      <button class="vi on" type="button" data-v="all">${I(P.tasks, 17)}<span>Focus</span><em class="num c-all"></em></button>
      <button class="vi" type="button" data-v="over">${I(P.flag, 17)}<span>Overdue</span><em class="num c-over"></em></button>
      <button class="vi" type="button" data-v="today">${I(P.cal, 17)}<span>Today</span><em class="num c-today"></em></button>
      <button class="vi" type="button" data-v="tom">${I(P.clock, 17)}<span>Tomorrow</span><em class="num c-tom"></em></button>
    </nav>
    <p class="k">Task types</p>
    <ul class="tt"><li>${I(P.phone, 16)}Calls<em>5</em></li><li>${I(P.mail, 16)}Emails<em>4</em></li><li>${I(P.cal, 16)}Meetings<em>3</em></li><li>${I(P.note, 16)}Admin<em>2</em></li></ul>
    <div class="me"><span class="av">MR</span><p><b>Maya Reyes</b><small>Sales lead</small></p></div>
  </aside>
  <main class="mn sc">
    <header class="head">
      <div><h1>Tasks</h1><p class="sub">Wednesday, 14 October</p></div>
      <div class="card prg"><div class="pt"><p class="k">Done today</p><p class="pn"><b class="num pdn">3</b><span> of <span class="num ptt">11</span></span></p></div><div class="bar"><i class="pf"></i></div></div>
    </header>
    <form class="add" novalidate>
      <label class="field">${I(P.plus, 18)}<input class="ai" type="text" placeholder="Add a task and press Enter" aria-label="Add a task" autocomplete="off"></label>
      <button class="cta ab" type="submit">Add task</button>
    </form>
    <div class="secs"></div>
  </main>
  ${ICONS(['phone', 'mail', 'cal', 'note', 'clock', 'chk'])}
  ${CURSOR}
</div>`,
    css: `${BASE}
.d [hidden]{display:none!important}
.d .g{display:grid;grid-template-columns:236px minmax(0,1fr)}
.d .lp{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .lp .brand{padding:2px 6px 22px}
.d .lp .k{padding:0 10px 8px}
.d .vw{display:flex;flex-direction:column;gap:2px;margin-bottom:22px}
.d .vi{display:flex;align-items:center;gap:11px;width:100%;height:38px;padding:0 10px;border-radius:10px;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .vi svg{flex:none;color:var(--ml-muted)}
.d .vi:hover{background:var(--ml-surface)}
.d .vi.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:600}
.d .vi.on svg{color:var(--ml-accent)}
.d .vi em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .vi.on em{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .tt li{display:flex;align-items:center;gap:11px;height:34px;padding:0 10px;font-size:13.5px;color:var(--ml-ink-2)}
.d .tt svg{color:var(--ml-muted)}
.d .tt em{margin-left:auto;font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .lp .me{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .lp .me p{display:flex;flex-direction:column;min-width:0}
.d .lp .me b{font-size:13px;font-weight:600}
.d .lp .me small{font-size:12px;color:var(--ml-muted)}
.d .mn{min-width:0;min-height:0;padding:24px 28px 30px}
.d .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .prg{width:244px;padding:13px 16px 14px}
.d .pt{display:flex;align-items:baseline;justify-content:space-between}
.d .pn{font-size:13px;color:var(--ml-muted)}
.d .pn b{font-size:20px;font-weight:650;letter-spacing:-.02em;color:var(--ml-ink)}
.d .pn b.bump{display:inline-block;animation:crm-pop 460ms var(--ml-ease)}
.d .bar{height:6px;margin-top:9px;border-radius:4px;background:var(--ml-bar-2);overflow:hidden}
.d .pf{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(var(--p,.27));transform-origin:0 50%;transition:transform .7s var(--ml-ease)}
.d .add{display:flex;gap:10px;margin-top:20px}
.d .field{display:flex;flex:1;align-items:center;gap:10px;height:46px;padding:0 14px;border-radius:13px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);color:var(--ml-muted);transition:box-shadow .25s ease,color .25s ease}
.d .field:focus-within,.d .field.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .field input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:14px;color:var(--ml-ink)}
.d .field input::placeholder{color:var(--ml-muted)}
.d .ab{height:46px;padding:0 20px;border-radius:13px}
.d .secs{display:flex;flex-direction:column;margin-top:8px}
.d .sec{display:grid;grid-template-rows:1fr;transition:grid-template-rows .55s var(--ml-ease),opacity .4s ease}
.d .sec.none{grid-template-rows:0fr;opacity:0}
.d .seci{min-height:0;overflow:hidden;padding:0 8px 18px;margin:0 -8px -8px}
.d .sh{display:flex;align-items:center;gap:9px;padding:20px 0 10px}
.d .sh b{font-size:14.5px;font-weight:650}
.d .sec[data-s="over"] .sh b{color:#D70015}
.d .tl3{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .tk{display:grid;grid-template-rows:1fr;border-bottom:1px solid var(--ml-line);transition:grid-template-rows .5s var(--ml-ease),opacity .35s ease}
.d .tk:last-child{border-bottom:0}
.d .tk.enter{grid-template-rows:0fr;opacity:0;border-bottom-color:transparent}
.d .tki{min-height:0;overflow:hidden}
.d .row3{display:flex;align-items:center;gap:13px;min-height:64px;padding:0 14px 0 16px}
.d .tk.fresh .row3{animation:crm-fresh3 2.6s ease}
.d .secs.swap .tk{animation:crm-in 460ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 35ms)}
.d .tty{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .tty svg{width:16px;height:16px}
.d .row3 p{display:flex;flex:1;flex-direction:column;gap:3px;min-width:0}
.d .ttl{overflow:hidden;font-size:14px;font-weight:600;white-space:nowrap;text-overflow:ellipsis;transition:color .3s ease}
.d .row3 small{display:flex;align-items:center;gap:7px;overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap}
.d .tk.done .ttl{color:var(--ml-muted);text-decoration:line-through}
.d .tk.done .tty{background:var(--ml-bar-2);color:var(--ml-muted)}
.d .sz{display:grid;flex:none;place-items:center;width:32px;height:32px;border-radius:9px;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .sz:hover{background:var(--ml-surface);color:var(--ml-ink)}
.d .sz.gap{visibility:hidden}
@keyframes crm-fresh3{0%,35%{background:var(--ml-accent-soft)}100%{background:transparent}}
@container scr (max-width: 760px){
  .d .g{grid-template-columns:minmax(0,1fr)}
  .d .lp{display:none}
  .d .mn{padding:18px 16px 24px}
  .d .head{flex-direction:column;align-items:stretch}
  .d .prg{width:100%}
  .d .ab{display:none}
  .d .row3{gap:10px;padding:0 10px 0 12px}
  .d .tty{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(700);
        return idle();
      };
      const press = async (el, fx, fy, fn) => {
        if (!(await aim(el, fx, fy))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };
      const seq = async (steps) => {
        for (const st of steps) if (!(await st())) return false;
        return true;
      };
      const typeInto = async (el, text, host) => {
        const f = host || el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(45 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const ic = (k) => $(`.icons [data-ic="${k}"]`).innerHTML;
      let uid = 20;
      const tasks = [
        { id: 1, t: 'Call Kwame about invoice 1042', ty: 'phone', who: 'Kwame Mensah', co: 'Atlas Freight', due: '2 days overdue', sec: 'over' },
        { id: 2, t: 'Send revised contract to Solace Studio', ty: 'mail', who: 'Sam Whitfield', co: 'Solace Studio', due: '1 day overdue', sec: 'over' },
        { id: 3, t: 'Follow up on proposal v2', ty: 'mail', who: 'Hana Kim', co: 'Kestrel & Co', due: '1 day overdue', sec: 'over' },
        { id: 4, t: 'Call Priya Nair about the revised scope', ty: 'phone', who: 'Priya Nair', co: 'Northgate', due: '10:30 AM', sec: 'today' },
        { id: 5, t: 'Prepare the Atlas Freight demo deck', ty: 'note', who: 'Aiko Tan', co: 'Atlas Freight', due: '12:00 PM', sec: 'today' },
        { id: 6, t: 'Send onboarding checklist to Juniper Health', ty: 'mail', who: 'Noor Haddad', co: 'Juniper Health', due: '1:30 PM', sec: 'today' },
        { id: 7, t: 'Book the site visit for Northgate', ty: 'cal', who: 'Priya Nair', co: 'Northgate', due: '3:00 PM', sec: 'today' },
        { id: 8, t: 'Log notes from the Carlos Mendoza call', ty: 'note', who: 'Carlos Mendoza', co: 'Bayside Fitness', due: '4:30 PM', sec: 'today' },
        { id: 9, t: 'Share the case study with Elena Petrova', ty: 'mail', who: 'Elena Petrova', co: 'Tidewater Realty', due: '9:00 AM', sec: 'tom' },
        { id: 10, t: 'Quarterly check-in with Luis Ortega', ty: 'phone', who: 'Luis Ortega', co: 'Brightline Dental', due: '11:00 AM', sec: 'tom' },
      ];
      const pool = [
        { t: 'Call back Carlos Mendoza', ty: 'phone', who: 'Carlos Mendoza', co: 'Bayside Fitness', due: 'Missed call, 8:48 AM', sec: 'over' },
        { t: 'Reply to Jia Wen about pricing', ty: 'mail', who: 'Jia Wen', co: 'Lumen Labs', due: '1 day overdue', sec: 'over' },
        { t: 'Confirm demo time with Rafael Santos', ty: 'cal', who: 'Rafael Santos', co: 'Meridian Foods', due: '2 days overdue', sec: 'over' },
      ];
      const tints = ['', ' t2', ' t3', ' t4'];
      const secs = [['over', 'Overdue'], ['today', 'Today'], ['tom', 'Tomorrow']];
      let view = 'all';
      let completed = 3;
      let pi = 0;
      let lap = 0;
      const wrap = $('.secs');
      const ini = (n) => n.split(' ').map((w) => w[0]).join('');
      const open = (k) => tasks.filter((t) => t.sec === k && !t.done);
      const rowHtml = (t, i, enter) =>
        `<li class="tk${enter ? ' enter fresh' : ''}" data-id="${t.id}" style="--i:${i}"><div class="tki"><div class="row3"><button class="ck round" type="button" aria-label="Complete: ${t.t}">${ic('chk')}</button><span class="tty">${ic(t.ty)}</span><p><b class="ttl">${t.t}</b><small><span class="av s${tints[t.id % 4]}">${ini(t.who)}</span>${t.who}, ${t.co}</small></p><span class="pill ${t.sec === 'over' ? 'bad' : 'mute'}">${t.due}</span>${t.sec === 'tom' ? '<span class="sz gap"></span>' : `<button class="sz" type="button" aria-label="Snooze until tomorrow">${ic('clock')}</button>`}</div></div></li>`;
      const paintCounts = () => {
        const n = (k) => open(k).length;
        $('.c-all').textContent = n('over') + n('today') + n('tom');
        $('.c-over').textContent = n('over');
        $('.c-today').textContent = n('today');
        $('.c-tom').textContent = n('tom');
        $$('.sec').forEach((s) => {
          const c = s.querySelector('.sh .pill');
          if (c) c.textContent = n(s.dataset.s);
        });
      };
      const paintProg = (pop) => {
        const left = open('over').length + open('today').length;
        $('.pdn').textContent = completed;
        $('.ptt').textContent = completed + left;
        $('.pf').style.setProperty('--p', completed / (completed + left || 1));
        if (pop) {
          const b = $('.pdn');
          b.classList.remove('bump');
          void b.offsetWidth;
          b.classList.add('bump');
        }
      };
      const render = (enterId, swap) => {
        let n = 0;
        wrap.innerHTML = secs
          .map(([k, name]) => {
            const items = open(k);
            const show = (view === 'all' || view === k) && items.length > 0;
            return `<section class="sec${show ? '' : ' none'}" data-s="${k}"><div class="seci"><div class="sh"><b>${name}</b><span class="pill ${k === 'over' ? 'bad' : 'mute'} num">${items.length}</span></div><ul class="tl3">${items.map((t) => rowHtml(t, n++, t.id === enterId)).join('')}</ul></div></section>`;
          })
          .join('');
        wrap.classList.remove('swap');
        if (swap) {
          void wrap.offsetWidth;
          wrap.classList.add('swap');
        }
        if (enterId) {
          void wrap.offsetWidth;
          $$('.tk.enter').forEach((r) => r.classList.remove('enter'));
        }
        paintCounts();
        paintProg(false);
      };
      const rowOf = (id) => $$('.tk').find((r) => +r.dataset.id === id);
      const complete = (id) => {
        const t = tasks.find((x) => x.id === id);
        const r = rowOf(id);
        if (!t || t.done || !r) return;
        t.done = true;
        completed++;
        r.classList.add('done');
        r.querySelector('.ck').classList.add('on');
        paintCounts();
        paintProg(true);
        setTimeout(() => r.classList.add('enter'), 750);
        setTimeout(() => render(0, false), 1400);
      };
      const snooze = (id) => {
        const t = tasks.find((x) => x.id === id);
        const r = rowOf(id);
        if (!t || t.sec === 'tom' || !r) return;
        r.classList.add('enter');
        t.sec = 'tom';
        t.due = 'Tomorrow, 9:00 AM';
        paintCounts();
        paintProg(false);
        setTimeout(() => render(id, false), 560);
      };
      const addTask = (t) => {
        const task = Object.assign({ id: uid++ }, t);
        const at = tasks.findIndex((x) => x.sec === task.sec);
        tasks.splice(at < 0 ? tasks.length : at, 0, task);
        render(task.id, false);
        return task;
      };
      wrap.addEventListener('click', (e) => {
        const r = e.target.closest('.tk');
        if (!r) return;
        const id = +r.dataset.id;
        if (e.target.closest('.ck')) complete(id);
        else if (e.target.closest('.sz')) snooze(id);
      });
      const vb = $$('.vi');
      vb.forEach((b) =>
        b.addEventListener('click', () => {
          if (view === b.dataset.v) return;
          view = b.dataset.v;
          vb.forEach((x) => x.classList.toggle('on', x === b));
          render(0, true);
        })
      );
      const form = $('.add');
      const ai = $('.ai');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = ai.value.trim();
        if (!v) return;
        const ty = /call/i.test(v) ? 'phone' : /send|email|reply|share/i.test(v) ? 'mail' : /book|meet|visit|demo/i.test(v) ? 'cal' : 'note';
        addTask({ t: v.charAt(0).toUpperCase() + v.slice(1), ty, who: 'Maya Reyes', co: 'Added just now', due: 'No time set', sec: 'today' });
        ai.value = '';
      });
      render(0, false);

      // Autoplay: tick and snooze overdue work, add a task by typing, tick one from today; a new follow-up lands each lap.
      const firstOf = (k) => () => {
        const t = open(k)[0];
        return t && rowOf(t.id);
      };
      const step = (find, sel) => async () => {
        const row = find();
        if (!row) return true;
        const el = row.querySelector(sel);
        return el ? press(el, 0.5, 0.5) : true;
      };
      const texts = ['Send the contract to Atlas Freight', 'Book a demo with Isabel Cruz', 'Call Tomas Lindqvist about the quote'];
      cur.style.transform = 'translate(640px,330px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const odd = lap % 2 === 1;
          await seq([
            step(firstOf('over'), '.ck'),
            rest(2000),
            step(firstOf('over'), odd ? '.ck' : '.sz'),
            rest(1800),
            () => aim($('.field'), 0.3, 0.5),
            () => typeInto(ai, texts[lap % texts.length], $('.field')),
            rest(300),
            () => press($('.ab'), 0.5, 0.5, () => form.requestSubmit()),
            rest(1600),
            step(() => {
              const t = open('today').slice(-1)[0];
              return t && rowOf(t.id);
            }, '.ck'),
            rest(2200),
            async () => {
              const p = pool[pi++ % pool.length];
              addTask(Object.assign({}, p));
              return true;
            },
            rest(2600),
          ]);
          lap++;
          await wait(500);
        }
      })();
    },
    prompt: `Build a tasks and follow-ups screen for a CRM, with a smart-list pane on the left and the task list on the right, full viewport.

Layout: grid columns 236px and minmax(0, 1fr). Left pane (white, hairline right border): logo and product name, a small uppercase "Views" label and four 38px view buttons with live counts (Focus, Overdue, Today, Tomorrow; the active one on accent soft with a hairline ring), a "Task types" list with counts, and the signed-in user at the bottom. Right: a page with a 26px "Tasks" title and a dated subtitle on the left and a 244px progress card on the right ("Done today", "3 of 11", a 6px bar), a 46px quick-add form (plus icon, field, primary "Add task" button), then grouped sections: Overdue (red title and a red count pill), Today, Tomorrow. Each section is a white 16px-radius card of 64px rows: a 22px round checkbox, a 34px type tile (call, email, meeting or note icon), a semibold title over a muted line with a mini avatar and "Name, Company", a due pill (red tint when overdue, neutral otherwise) and a snooze button (clock icon) that disappears on Tomorrow rows.

Behavior and motion: checking a task draws the check (SVG path with pathLength 1, stroke-dashoffset 1 to 0 over 400ms), strikes the title, pops the "done" number and moves the progress bar with transform: scaleX; about 750ms later the row collapses by animating grid-template-rows from 1fr to 0fr (500ms) and the section count drops, and a section with no rows collapses itself. Snooze collapses the row and re-inserts it in Tomorrow with a 2.6s accent-soft flash. Adding a task (Enter or button) inserts it at the top of Today by animating grid-template-rows from 0fr to 1fr and picks the type icon from keywords (call, send, book). Switching a view re-enters the rows with opacity and translateY(8px), staggered 35ms.

Accessibility: checkboxes are buttons with "Complete: <task>" labels, snooze buttons have labels, the form is a real form, focus rings are visible. Phone layout under 760px: hide the left pane, stack the progress card above the quick-add field, hide the type tiles and the Add button (Enter still submits). Plain HTML, CSS and JS, no libraries; React-friendly structure (ViewsPane, ProgressCard, QuickAdd, TaskSection, TaskRow).`,
  });
})();
