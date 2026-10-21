(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    minus: '<path d="M5 12h14"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    chevU: '<path d="m18 15-6-6-6 6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    chevL: '<path d="m15 18-6-6 6-6"/>',
    arrowDown: '<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    list: '<path d="M3 5h18"/><path d="M3 12h18"/><path d="M3 19h18"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    undo: '<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    sheet: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    coffee: '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v4"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    dollar: '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    pencil: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/>',
    sigma: '<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>',
    table: '<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    home: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
    kanban: '<path d="M6 5v11"/><path d="M12 5v6"/><path d="M18 5v14"/>',
  };
  const I = (d, s = 18, w = 2) =>
    `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  // The demo cursor every screen card uses for its autoplay (Lucide mouse-pointer-2, filled).
  const CURSOR = `<div class="cur off" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4.04 4.6a.5.5 0 0 1 .56-.56l15.5 6.1a.5.5 0 0 1-.05.94l-6.3 1.9a1 1 0 0 0-.66.66l-1.9 6.3a.5.5 0 0 1-.94.05Z"/></svg></div>`;
  const CURSOR_CSS = `
.d .cur{position:absolute;left:0;top:0;z-index:50;pointer-events:none;transition:transform 780ms var(--ml-ease),opacity .25s ease}
.d .cur svg{display:block;filter:drop-shadow(0 2px 3px rgba(35,15,10,.28));transition:transform 90ms ease-out}
.d .cur path{fill:var(--ml-ink);stroke:#fff;stroke-width:1.6;stroke-linejoin:round}
.d .cur.press svg{transform:scale(.8)}
.d .cur.off{opacity:0}`;
  // Shared look for the working-data screens (strings only).
  const COMMON = `
.d .app{display:flex;flex-direction:column;height:100%;min-height:0}
.d .brand{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:650;letter-spacing:-.02em;white-space:nowrap}
.d .mark{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d .sub{margin-top:4px;font-size:13.5px;color:var(--ml-muted)}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .btn,.d .cta{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:36px;padding:0 13px;border:0;border-radius:10px;font-size:13.5px;font-weight:600;white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease}
.d .btn{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);color:var(--ml-ink-2)}
.d .btn:hover{background:var(--ml-surface)}
.d .cta{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d button:active,.d button.press{transform:scale(.96)}
.d button:focus-visible,.d input:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .av{flex:none;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11px;font-weight:650}
.d .av.t1{background:var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .av.t2{background:var(--ml-bar-2);color:var(--ml-ink-2)}
.d .st{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:999px;font-size:12px;font-weight:600;white-space:nowrap;transition:background-color .3s ease,color .3s ease}
.d .st::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor}
.d .st.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .st.wa{background:rgba(255,159,10,.12);color:#B25E00}
.d .st.er{background:rgba(255,59,48,.09);color:#D70015}
.d .st.nu{background:var(--ml-surface);color:var(--ml-ink-2)}
.d .tn{font-variant-numeric:tabular-nums}
.d .search{display:flex;align-items:center;gap:8px;width:260px;height:36px;padding:0 12px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .2s ease,background-color .2s ease}
.d .search:focus-within{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px}
.d .search input::placeholder{color:var(--ml-muted)}
.d .ckb{position:relative;display:grid;place-items:center;flex:none;width:18px;height:18px;border:0;border-radius:5px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;cursor:pointer;transition:background-color .2s ease,box-shadow .2s ease}
.d .ckb svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .ckb[aria-checked="true"],.d .ckb[aria-checked="mixed"]{background:var(--ml-accent);box-shadow:none}
.d .ckb[aria-checked="true"] svg.c,.d .ckb[aria-checked="mixed"] svg.m{opacity:1;transform:none}
.d .ckb svg{position:absolute}`;

  // ---------------------------------------------------------------------------------------------
  // 1. Sortable data table
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-table',
    cat: 'app-data',
    title: 'Sortable data table',
    sub: 'Headers sort, rows glide into place',
    html: `
<div class="app">
  <header class="top">
    <span class="brand"><span class="mark">${I(P.mark, 16)}</span>Meridian Foods</span>
    <nav class="tabs" aria-label="Sections"><button class="tab on" type="button">Orders</button><button class="tab" type="button">Customers</button><button class="tab" type="button">Products</button><button class="tab" type="button">Reports</button></nav>
    <label class="search">${I(P.search, 16)}<input class="q" type="search" placeholder="Search orders" aria-label="Search orders"></label>
    <span class="av">KM</span>
  </header>
  <main class="page">
    <div class="head">
      <div><h1>Orders</h1><p class="sub"></p></div>
      <div class="acts"><button class="btn" type="button">${I(P.download, 16)}Export</button><button class="cta" type="button">${I(P.plus, 16)}New order</button></div>
    </div>
    <section class="card tbl">
      <div class="bar">
        <div class="chips" role="group" aria-label="Filter by status"></div>
        <p class="note"></p>
      </div>
      <div class="scroller">
        <div class="row hd" role="row"></div>
        <div class="body" role="rowgroup"></div>
      </div>
      <div class="foot"><p class="range tn"></p><div class="pager" role="group" aria-label="Pagination"></div></div>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .top{display:flex;flex:none;align-items:center;gap:22px;height:60px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tabs{display:flex;gap:4px;height:100%;margin-right:auto}
.d .tab{position:relative;height:100%;padding:0 12px;border:0;background:none;font-size:14px;font-weight:550;color:var(--ml-muted);cursor:pointer;transition:color .2s ease}
.d .tab:hover{color:var(--ml-ink)}
.d .tab.on{color:var(--ml-ink)}
.d .tab.on::after{content:"";position:absolute;left:12px;right:12px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .page{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:24px 28px 26px}
.d .head{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}
.d .acts{display:flex;gap:10px}
.d .tbl{display:flex;flex:1 1 auto;flex-direction:column;min-height:0;overflow:hidden}
.d .bar{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--ml-line)}
.d .chips{display:flex;gap:8px}
.d .chip{display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 12px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .chip:hover{background:var(--ml-surface)}
.d .chip i{font:600 11.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .chip.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .chip.on i{color:var(--ml-accent-ink)}
.d .note{font-size:12.5px;color:var(--ml-muted);white-space:nowrap}
.d .note b{font-weight:600;color:var(--ml-ink-2)}
.d .scroller{display:flex;flex:1 1 auto;flex-direction:column;min-height:0;overflow-y:auto;scrollbar-width:thin}
.d .row{display:grid;grid-template-columns:minmax(80px,.7fr) minmax(0,2fr) 86px 64px 118px 104px;align-items:center;column-gap:14px;padding:0 18px}
.d .hd{position:sticky;top:0;z-index:2;flex:none;height:40px;background:rgba(244,247,252,.94);border-bottom:1px solid var(--ml-line)}
.d .h{display:inline-flex;align-items:center;gap:5px;height:100%;padding:0;border:0;background:none;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted);text-align:left;cursor:pointer;transition:color .2s ease}
.d .h:hover{color:var(--ml-ink-2)}
.d .h.r{justify-content:flex-end}
.d .h svg{opacity:0;transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .h.on{color:var(--ml-accent-ink)}
.d .h.on svg{opacity:1}
.d .h.on.asc svg{transform:rotate(180deg)}
.d .body{position:relative;display:grid;flex:1 0 auto;grid-auto-rows:minmax(50px,1fr)}
.d .tr{border-bottom:1px solid var(--ml-line);font-size:13.5px;transition:transform var(--ml-spring-dur) var(--ml-spring),background-color .2s ease}
.d .tr:last-child{border-bottom:0}
.d .tr:hover{background:var(--ml-surface)}
.d .tr.enter{animation:dt-in 480ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 30ms)}
.d .id{font:500 12.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .cu{display:flex;align-items:center;gap:10px;min-width:0}
.d .cu b{overflow:hidden;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .dt{color:var(--ml-ink-2)}
.d .r{text-align:right}
.d .tot{font-weight:600}
.d .foot{display:flex;flex:none;align-items:center;justify-content:space-between;padding:12px 18px;border-top:1px solid var(--ml-line);font-size:13px;color:var(--ml-muted)}
.d .pager{display:flex;gap:4px}
.d .pg{display:grid;place-items:center;min-width:32px;height:32px;padding:0 6px;border:0;border-radius:9px;background:none;font:600 13px/1 var(--ml-font);color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .pg:hover{background:var(--ml-surface)}
.d .pg.on{background:var(--ml-accent);color:#fff}
.d .pg:disabled{opacity:.35;cursor:default}
@keyframes dt-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{gap:12px;padding:0 16px}
  .d .tabs,.d .search,.d .note,.d .acts .btn{display:none}
  .d .top .av{margin-left:auto}
  .d .page{padding:18px 16px}
  .d .head{align-items:center}
  .d .bar{padding:12px 14px;overflow-x:auto}
  .d .row{grid-template-columns:minmax(0,1fr) 96px 78px;padding:0 14px}
  .d .row .id,.d .row .dt,.d .row .it,.d .row .h[data-k="id"],.d .row .h[data-k="day"],.d .row .h[data-k="items"]{display:none}
  .d .foot{padding:12px 14px}
  .d .pg:not(.on):not(.nv){display:none}
}
@media (prefers-reduced-motion: reduce){.d .tr.enter{animation:none}}`,
    run: (root) => {
      const D = [
        ['MF-2042', 'Fernway Cafe', 14, 5, 'pending', 365], ['MF-2041', 'Corvid Coffee', 14, 12, 'pending', 1240],
        ['MF-2040', 'Bayside Fitness', 14, 6, 'paid', 860], ['MF-2039', 'Juniper Health', 13, 18, 'paid', 2310],
        ['MF-2038', 'Northgate Hotel', 13, 24, 'pending', 3480], ['MF-2037', 'Fernway Cafe', 12, 9, 'paid', 715],
        ['MF-2036', 'Kestrel & Co', 12, 4, 'overdue', 420], ['MF-2035', 'Tidewater Realty', 11, 7, 'paid', 590],
        ['MF-2034', 'Solace Studio', 10, 5, 'paid', 380], ['MF-2033', 'Brightline Dental', 9, 11, 'pending', 970],
        ['MF-2032', 'Lumen Labs', 9, 15, 'paid', 1620], ['MF-2031', 'Atlas Freight', 8, 20, 'overdue', 2150],
        ['MF-2030', 'Corvid Coffee', 7, 10, 'paid', 1085], ['MF-2029', 'Fernway Cafe', 7, 8, 'paid', 640],
        ['MF-2028', 'Juniper Health', 6, 14, 'pending', 1760], ['MF-2027', 'Bayside Fitness', 5, 6, 'paid', 845],
        ['MF-2026', 'Northgate Hotel', 5, 22, 'paid', 3120], ['MF-2025', 'Kestrel & Co', 4, 3, 'overdue', 260],
        ['MF-2024', 'Tidewater Realty', 3, 9, 'paid', 735], ['MF-2023', 'Solace Studio', 2, 6, 'pending', 455],
        ['MF-2022', 'Brightline Dental', 2, 12, 'paid', 1040], ['MF-2021', 'Lumen Labs', 1, 7, 'paid', 690],
        ['MF-2020', 'Atlas Freight', 1, 16, 'pending', 1890], ['MF-2019', 'Tidewater Realty', 1, 8, 'paid', 540],
      ].map(([id, cust, day, items, st, total]) => ({ id, cust, day, items, st, total }));
      const $ = (s) => root.querySelector(s);
      const body = $('.body');
      const cur = $('.cur');
      let PER = 8;
      const S = { k: 'day', dir: -1, f: 'all', q: '', page: 1 };
      const LBL = { paid: 'Paid', pending: 'Pending', overdue: 'Overdue' };
      const CLS = { paid: 'ok', pending: 'wa', overdue: 'er' };
      const COLS = [['id', 'Order', 0], ['cust', 'Customer', 0], ['day', 'Date', 0], ['items', 'Items', 1], ['st', 'Status', 0], ['total', 'Total', 1]];
      const money = (n) => '$' + n.toLocaleString('en-US');
      const ini = (n) => n.replace(/&/g, '').split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('');
      const ARROW = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>';
      const CHEV = (d) => `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
      const inQ = () => D.filter((o) => !S.q || (o.cust + o.id).toLowerCase().includes(S.q));
      const list = () => {
        const a = inQ().filter((o) => S.f === 'all' || o.st === S.f);
        return a.sort((x, y) => {
          const A = x[S.k], B = y[S.k];
          const c = typeof A === 'string' ? A.localeCompare(B) : A - B;
          return (c || x.day - y.day || x.id.localeCompare(y.id)) * S.dir;
        });
      };
      // header + chips
      $('.hd').innerHTML = COLS.map(([k, t, r], i) => `<button class="h${r ? ' r' : ''}" type="button" data-k="${k}">${r ? ARROW : ''}${t}${r ? '' : ARROW}</button>`).join('');
      const paintHead = () => {
        root.querySelectorAll('.h').forEach((h) => {
          const on = h.dataset.k === S.k;
          h.classList.toggle('on', on);
          h.classList.toggle('asc', on && S.dir === 1);
          h.setAttribute('aria-sort', on ? (S.dir === 1 ? 'ascending' : 'descending') : 'none');
        });
        const c = COLS.find((x) => x[0] === S.k);
        const num = S.k === 'items' || S.k === 'total';
        const words = S.k === 'day' ? (S.dir === 1 ? 'oldest first' : 'newest first') : num ? (S.dir === 1 ? 'lowest first' : 'highest first') : S.dir === 1 ? 'A to Z' : 'Z to A';
        $('.note').innerHTML = `Sorted by <b>${c[1]}</b>, ${words}`;
      };
      const paintChips = () => {
        const q = inQ();
        const n = (f) => (f === 'all' ? q.length : q.filter((o) => o.st === f).length);
        $('.chips').innerHTML = ['all', 'paid', 'pending', 'overdue'].map((f) => `<button class="chip${S.f === f ? ' on' : ''}" type="button" data-f="${f}" aria-pressed="${S.f === f}">${f === 'all' ? 'All' : LBL[f]}<i>${n(f)}</i></button>`).join('');
      };
      const mk = (o) => {
        const r = document.createElement('div');
        r.className = 'row tr';
        r.setAttribute('role', 'row');
        r.innerHTML = `<span class="id">${o.id}</span><span class="cu"><span class="av t${o.cust.length % 3}">${ini(o.cust)}</span><b>${o.cust}</b></span><span class="dt tn">Oct ${o.day}</span><span class="it r tn">${o.items}</span><span><span class="st ${CLS[o.st]}">${LBL[o.st]}</span></span><span class="tot r tn">${money(o.total)}</span>`;
        return r;
      };
      const els = new Map();
      const update = (animate) => {
        PER = Math.max(5, Math.min(12, Math.floor(($('.scroller').clientHeight - 40) / 50) || 8));
        const all = list();
        const pages = Math.max(1, Math.ceil(all.length / PER));
        S.page = Math.min(S.page, pages);
        const view = all.slice((S.page - 1) * PER, S.page * PER);
        const first = new Map();
        els.forEach((el, id) => first.set(id, el.offsetTop));
        const keep = new Set(view.map((o) => o.id));
        els.forEach((el, id) => {
          if (!keep.has(id)) {
            el.remove();
            els.delete(id);
          }
        });
        const fresh = [];
        view.forEach((o) => {
          let el = els.get(o.id);
          if (!el) {
            el = mk(o);
            els.set(o.id, el);
            fresh.push(el);
          }
          body.appendChild(el);
        });
        view.forEach((o, i) => {
          const el = els.get(o.id);
          if (fresh.includes(el)) {
            el.style.setProperty('--i', i);
            el.classList.remove('enter');
            void el.offsetWidth;
            if (animate) el.classList.add('enter');
          } else if (animate) {
            const dy = first.get(o.id) - el.offsetTop;
            if (dy) {
              el.style.transition = 'none';
              el.style.transform = `translateY(${dy}px)`;
              void el.offsetWidth;
              el.style.transition = '';
              el.style.transform = '';
            }
          }
        });
        const sum = inQ().reduce((a, o) => a + o.total, 0);
        $('.sub').textContent = `${inQ().length} orders this month - ${money(sum)} total`;
        $('.range').textContent = all.length ? `Showing ${(S.page - 1) * PER + 1}-${Math.min(all.length, S.page * PER)} of ${all.length}` : 'No orders match';
        $('.pager').innerHTML = `<button class="pg nv" type="button" data-p="${S.page - 1}" aria-label="Previous page"${S.page === 1 ? ' disabled' : ''}>${CHEV('m15 18-6-6 6-6')}</button>` +
          Array.from({ length: pages }, (_, i) => `<button class="pg${S.page === i + 1 ? ' on' : ''}" type="button" data-p="${i + 1}" aria-label="Page ${i + 1}">${i + 1}</button>`).join('') +
          `<button class="pg nv" type="button" data-p="${S.page + 1}" aria-label="Next page"${S.page === pages ? ' disabled' : ''}>${CHEV('m9 18 6-6-6-6')}</button>`;
        paintHead();
        paintChips();
      };
      root.addEventListener('click', (e) => {
        const h = e.target.closest('.h');
        const c = e.target.closest('.chip');
        const p = e.target.closest('.pg');
        if (h) {
          const k = h.dataset.k;
          if (S.k === k) S.dir = -S.dir;
          else {
            S.k = k;
            S.dir = ['cust', 'id', 'st'].includes(k) ? 1 : -1;
          }
          S.page = 1;
          update(true);
        } else if (c) {
          S.f = c.dataset.f;
          S.page = 1;
          update(true);
        } else if (p && !p.disabled) {
          S.page = +p.dataset.p;
          update(true);
          $('.scroller').scrollTop = 0;
        }
      });
      $('.q').addEventListener('input', (e) => {
        S.q = e.target.value.trim().toLowerCase();
        S.page = 1;
        update(true);
      });
      update(false);
      if (window.ResizeObserver) {
        let lastPer = PER;
        new ResizeObserver(() => {
          const n = Math.max(5, Math.min(12, Math.floor(($('.scroller').clientHeight - 40) / 50) || 8));
          if (n !== lastPer) {
            lastPer = n;
            update(false);
          }
        }).observe($('.scroller'));
      }

      // Autoplay: the cursor sorts a column, filters, pages, then resets; any real input hands over for 4s.
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
      const tap = async (el, fx) => {
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(820);
        if (!idle() || !el) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(700px,480px)';
      const steps = [
        () => $('.h[data-k="total"]'),
        () => $('.chip[data-f="pending"]'),
        () => $('.chip[data-f="all"]'),
        () => $('.pg[data-p="2"]'),
        () => $('.h[data-k="day"]'),
      ];
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          for (const get of steps) {
            if (!(await tap(get(), 0.4))) break;
            await wait(1250);
          }
          await wait(1200);
        }
      })();
    },
    prompt: `Build an orders data table screen for a wholesale back office, full viewport (height: 100dvh). The page region scrolls; the shell does not.

Layout: a 60px top bar (logo tile + company name, section tabs Orders / Customers / Products / Reports with a 2px accent underline on the active one, a 260px search field, avatar), then a page with the title "Orders", a one-line summary ("24 orders this month - $18,940 total"), an Export button and a primary New order button. Below sits ONE white card (16px radius, hairline + soft shadow) with: a toolbar row of filter chips (All, Paid, Pending, Overdue, each with a live count; the active chip gets the accent-soft fill) and a small "Sorted by Total, highest first" note; a scroll region with a sticky header row (11px uppercase labels on a translucent surface, backdrop kept simple) and 50px rows built as CSS grid (Order id in mono, Customer with an initials avatar, Date, Items right-aligned, a status pill with a dot, Total right-aligned with font-variant-numeric: tabular-nums); and a footer with "Showing 1-8 of 24" and a pager (previous, numbered, next; active page filled with the accent).

Behavior: every header is a button with aria-sort; clicking sorts (numbers start descending, text ascending, a second click flips) and a small arrow under the label rotates 180deg. Sorting, filtering (chips) and searching must reorder rows with a FLIP animation: measure each row's offsetTop before, reorder the DOM, measure after, apply translateY(delta) with transition none, then clear it so a critically damped spring (587ms, linear() easing) glides it home; rows that are new fade and rise 8px with a 30ms stagger. Page changes reset to the top of the scroll region.

Accessibility: role=table/row/columnheader semantics (or a real table), aria-pressed on chips, aria-label on pager buttons, visible focus rings, prefers-reduced-motion removes the entrance animation. Phone (below 760px): hide tabs, search, Order, Date and Items columns, keep Customer, Status and Total, let the chip row scroll horizontally. Use your accent color for the active states. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, OrdersHeader, StatusChips, DataTable, TableRow, Pager).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 2. Bulk select with a floating action bar
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-bulk',
    cat: 'app-data',
    title: 'Bulk select and action bar',
    sub: 'Tick rows, a bar slides up to act',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span>Kestrel &amp; Co</div>
    <p class="lbl">Expenses</p>
    <nav class="nav" aria-label="Views"></nav>
    <div class="me"><span class="av">TL</span><p><b>Tomas Lindqvist</b><small>Finance approver</small></p></div>
  </aside>
  <main class="main">
    <div class="head">
      <div><h1>Expense reports</h1><p class="sub">Review and approve this week's claims</p></div>
      <div class="acts"><button class="btn" type="button">${I(P.filter, 16)}Filters</button><button class="btn" type="button">${I(P.download, 16)}Export all</button></div>
    </div>
    <section class="card tbl">
      <div class="scroller">
        <div class="row hd" role="row"><button class="ckb all" type="button" role="checkbox" aria-checked="false" aria-label="Select all">${I(P.check, 12, 3.2).replace('<svg ', '<svg class="c" ')}${I(P.minus, 12, 3.2).replace('<svg ', '<svg class="m" ')}</button><span>Employee</span><span class="c-what">Description</span><span class="c-cat">Category</span><span class="c-date">Submitted</span><span class="r">Amount</span><span>Status</span></div>
        <div class="list" role="rowgroup"></div>
      </div>
    </section>
    <div class="bulk" role="toolbar" aria-label="Bulk actions">
      <span class="cnt"><span><b class="n tn">0</b> selected</span><small class="sum tn"></small></span>
      <span class="vr"></span>
      <button class="ba go" type="button" data-a="approve">${I(P.check, 16, 2.6)}Approve</button>
      <button class="ba" type="button" data-a="flag">${I(P.flag, 16)}Flag</button>
      <button class="ba" type="button" data-a="export">${I(P.download, 16)}Export</button>
      <button class="ba cl" type="button" data-a="clear" aria-label="Clear selection">${I(P.x, 16)}</button>
    </div>
    <div class="toast" role="status"><span class="tk">${I(P.check, 14, 3)}</span><span class="tt"></span><button class="undo" type="button">${I(P.undo, 14)}Undo</button></div>
  </main>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .app{display:grid;grid-template-columns:216px minmax(0,1fr)}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .side .brand{padding:2px 6px 22px}
.d .lbl{padding:0 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .nav{display:flex;flex-direction:column;gap:2px}
.d .vw{display:flex;align-items:center;gap:10px;width:100%;height:38px;padding:0 10px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .vw:hover{background:var(--ml-surface)}
.d .vw svg{flex:none;color:var(--ml-muted)}
.d .vw em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .vw.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:600}
.d .vw.on svg{color:var(--ml-accent)}
.d .vw.on em{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .me{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .me p{display:flex;flex-direction:column;min-width:0}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .main{position:relative;display:flex;flex-direction:column;gap:18px;min-width:0;min-height:0;padding:24px 28px 26px}
.d .head{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}
.d .acts{display:flex;gap:10px}
.d .tbl{display:flex;flex:1 1 auto;flex-direction:column;min-height:0;overflow:hidden}
.d .scroller{display:flex;flex:1 1 auto;flex-direction:column;min-height:0;overflow-y:auto;scrollbar-width:thin}
.d .list{display:grid;flex:1 0 auto;grid-auto-rows:minmax(54px,1fr)}
.d .row{display:grid;grid-template-columns:18px minmax(0,1.25fr) minmax(0,1.6fr) 96px 92px 84px 104px;align-items:center;column-gap:16px;padding:0 20px}
@container scr (max-width: 1100px){.d .row{grid-template-columns:18px minmax(0,1.2fr) minmax(0,1fr) 88px 76px 100px;column-gap:14px}.d .c-date,.d .dtc{display:none}}
.d .hd{position:sticky;top:0;z-index:2;flex:none;height:40px;background:rgba(244,247,252,.94);border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .r{text-align:right}
.d .it{border-bottom:1px solid var(--ml-line);font-size:13.5px;cursor:pointer;transition:background-color .2s ease}
.d .it:last-child{border-bottom:0}
.d .it:hover{background:var(--ml-surface)}
.d .it.on{background:var(--ml-accent-soft)}
.d .who{display:flex;align-items:center;gap:10px;min-width:0}
.d .who b{overflow:hidden;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .what{overflow:hidden;color:var(--ml-ink-2);white-space:nowrap;text-overflow:ellipsis}
.d .cat{display:inline-flex;align-items:center;justify-self:start;height:24px;padding:0 9px;border-radius:7px;background:var(--ml-surface);font-size:12px;font-weight:600;color:var(--ml-ink-2)}
.d .it.on .cat{background:var(--ml-bg)}
.d .dtc{color:var(--ml-muted)}
.d .amt{font-weight:600}
.d .st.pop{animation:bk-pop 520ms var(--ml-bounce)}
.d .bulk{position:absolute;left:50%;bottom:26px;z-index:8;display:flex;align-items:center;gap:6px;padding:8px 8px 8px 18px;border-radius:18px;background:var(--ml-ink);color:#fff;box-shadow:0 2px 4px rgba(35,15,10,.12),0 22px 44px rgba(35,15,10,.28);opacity:0;pointer-events:none;transform:translate(-50%,36px) scale(.96);transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity .22s ease}
.d .bulk.on{opacity:1;pointer-events:auto;transform:translate(-50%,0)}
.d .cnt{display:flex;flex-direction:column;min-width:104px;white-space:nowrap;font-size:13.5px;font-weight:600;line-height:1.2}
.d .cnt b{font-weight:650}
.d .cnt small{font-size:11.5px;font-weight:500;color:rgba(255,255,255,.6)}
.d .vr{width:1px;height:28px;margin:0 8px;background:rgba(255,255,255,.18)}
.d .ba{display:inline-flex;align-items:center;gap:7px;height:38px;padding:0 13px;border:0;border-radius:11px;background:rgba(255,255,255,.1);color:#fff;font-size:13.5px;font-weight:600;cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .ba:hover{background:rgba(255,255,255,.18)}
.d .ba.go{background:var(--ml-accent)}
.d .ba.go:hover{background:#2B80FF}
.d .ba.cl{width:38px;padding:0;justify-content:center;background:none;color:rgba(255,255,255,.7)}
.d .toast{position:absolute;left:28px;bottom:26px;z-index:7;display:flex;align-items:center;gap:10px;height:46px;padding:0 8px 0 12px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);font-size:13.5px;font-weight:600;opacity:0;pointer-events:none;transform:translateY(16px);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .22s ease}
.d .toast.on{opacity:1;pointer-events:auto;transform:none}
.d .tk{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#1DB954;color:#fff}
.d .undo{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 10px;border:0;border-radius:9px;background:var(--ml-surface);font-size:13px;font-weight:600;color:var(--ml-accent-ink);cursor:pointer;transition:transform 90ms ease-out}
@keyframes bk-pop{0%{transform:scale(.8)}100%{transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .acts .btn:first-child,.d .toast .undo svg{display:none}
  .d .main{padding:18px 16px 22px}
  .d .row{grid-template-columns:18px minmax(0,1fr) 72px 100px;padding:0 14px;column-gap:12px}
  .d .c-what,.d .c-cat,.d .c-date,.d .what,.d .cat,.d .dtc{display:none}
  .d .bulk{left:16px;right:16px;bottom:18px;transform:translateY(36px);padding-left:14px;overflow:hidden}
  .d .bulk.on{transform:none}
  .d .ba:not(.go):not(.cl){display:none}
  .d .vr{margin:0 auto 0 4px;opacity:0}
  .d .toast{left:16px;right:16px;bottom:18px}
}
@media (prefers-reduced-motion: reduce){.d .st.pop{animation:none}}`,
    run: (root) => {
      const R = [
        ['Tomas Lindqvist', 'Client dinner, Northgate', 'Meals', 'Oct 13', 186, 'pending'],
        ['Aiko Tan', 'Design and notes seats', 'Software', 'Oct 13', 240, 'pending'],
        ['Daniel Okafor', 'Flights to Singapore', 'Travel', 'Oct 12', 1284, 'pending'],
        ['Priya Nair', 'Standing desk', 'Office', 'Oct 12', 489, 'pending'],
        ['Luis Ortega', 'Taxi and parking', 'Travel', 'Oct 11', 64, 'approved'],
        ['Hana Kim', 'Team lunch, Q4 kickoff', 'Meals', 'Oct 10', 212, 'pending'],
        ['Sam Whitfield', 'Domain renewals', 'Software', 'Oct 9', 158, 'approved'],
        ['Ana Lim', 'Hotel, 2 nights Manila', 'Travel', 'Oct 9', 372, 'flagged'],
        ['Rafael Santos', 'Printer cartridges', 'Office', 'Oct 8', 96, 'pending'],
        ['Noor Haddad', 'Conference ticket', 'Training', 'Oct 7', 650, 'pending'],
      ].map(([who, what, cat, date, amt, st], i) => ({ i, who, what, cat, date, amt, st, st0: st }));
      const LBL = { pending: 'Pending', approved: 'Approved', flagged: 'Flagged' };
      const CLS = { pending: 'wa', approved: 'ok', flagged: 'er' };
      const VIEWS = [['all', 'All reports', '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/>'], ['pending', 'To approve', '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'], ['approved', 'Approved', '<path d="M20 6 9 17l-5-5"/>'], ['flagged', 'Flagged', '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>']];
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const CK = '<svg class="c" viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const money = (n) => '$' + n.toLocaleString('en-US');
      const ini = (n) => n.split(' ').map((w) => w[0]).join('');
      $('.list').innerHTML = R.map((r) => `<div class="row it" role="row" data-i="${r.i}"><button class="ckb" type="button" role="checkbox" aria-checked="false" aria-label="Select ${r.who}">${CK}</button><span class="who"><span class="av t${r.i % 3}">${ini(r.who)}</span><b>${r.who}</b></span><span class="what c-what">${r.what}</span><span class="c-cat"><span class="cat">${r.cat}</span></span><span class="dtc c-date">${r.date}</span><span class="amt r tn">${money(r.amt)}</span><span><span class="st"></span></span></div>`).join('');
      const rows = [...root.querySelectorAll('.it')];
      const sel = new Set();
      let view = 'all';
      const bulk = $('.bulk');
      const toast = $('.toast');
      const all = $('.all');
      let undo = null;
      let tt = 0;
      const paint = () => {
        rows.forEach((el, i) => {
          const r = R[i];
          const on = sel.has(i);
          el.classList.toggle('on', on);
          el.querySelector('.ckb').setAttribute('aria-checked', String(on));
          const p = el.querySelector('.st');
          p.className = 'st ' + CLS[r.st];
          p.textContent = LBL[r.st];
          el.hidden = !(view === 'all' || r.st === view);
          el.style.display = el.hidden ? 'none' : '';
        });
        root.querySelectorAll('.vw').forEach((b) => {
          const k = b.dataset.v;
          b.classList.toggle('on', k === view);
          b.querySelector('em').textContent = k === 'all' ? R.length : R.filter((r) => r.st === k).length;
        });
        const vis = R.filter((r) => view === 'all' || r.st === view);
        const n = [...sel].length;
        all.setAttribute('aria-checked', n === 0 ? 'false' : vis.every((r) => sel.has(r.i)) ? 'true' : 'mixed');
        if (n) {
          $('.n').textContent = n;
          $('.sum').textContent = money([...sel].reduce((a, i) => a + R[i].amt, 0)) + ' total';
        }
        bulk.classList.toggle('on', n > 0);
      };
      $('.nav').innerHTML = VIEWS.map(([k, t, ic]) => `<button class="vw" type="button" data-v="${k}"><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ic}</svg>${t}<em></em></button>`).join('');
      const say = (text, fn) => {
        $('.tt').textContent = text;
        undo = fn || null;
        toast.querySelector('.undo').style.display = fn ? '' : 'none';
        toast.classList.add('on');
        clearTimeout(tt);
        tt = setTimeout(() => {
          if (root.dataset.paused) return;
          toast.classList.remove('on');
        }, 4200);
      };
      const act = (a) => {
        const ids = [...sel];
        if (a === 'clear') {
          sel.clear();
        } else if (a === 'export') {
          say(`Exported ${ids.length} reports to CSV`);
          sel.clear();
        } else {
          const prev = ids.map((i) => [i, R[i].st]);
          ids.forEach((i) => {
            R[i].st = a === 'approve' ? 'approved' : 'flagged';
          });
          sel.clear();
          paint();
          ids.forEach((i) => {
            const p = rows[i].querySelector('.st');
            p.classList.remove('pop');
            void p.offsetWidth;
            p.classList.add('pop');
          });
          say(`${ids.length} reports ${a === 'approve' ? 'approved' : 'flagged'}`, () => {
            prev.forEach(([i, s]) => {
              R[i].st = s;
            });
            paint();
          });
        }
        paint();
      };
      root.addEventListener('click', (e) => {
        const ba = e.target.closest('.ba');
        const vw = e.target.closest('.vw');
        const ck = e.target.closest('.ckb');
        const it = e.target.closest('.it');
        if (ba) return act(ba.dataset.a);
        if (e.target.closest('.undo')) {
          if (undo) undo();
          toast.classList.remove('on');
          return;
        }
        if (vw) {
          view = vw.dataset.v;
          sel.clear();
          return paint();
        }
        if (ck && ck.classList.contains('all')) {
          const vis = R.filter((r) => view === 'all' || r.st === view);
          if (vis.every((r) => sel.has(r.i))) sel.clear();
          else vis.forEach((r) => sel.add(r.i));
          return paint();
        }
        if (it) {
          const i = +it.dataset.i;
          if (sel.has(i)) sel.delete(i);
          else sel.add(i);
          paint();
        }
      });
      paint();

      // Autoplay: tick three pending rows, Approve from the bar, then Undo; any real input hands over for 4s.
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
      const tap = async (el, fx, pre = 780) => {
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(pre);
        if (!idle() || !el) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,560px)';
      (async () => {
        await wait(1400);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (sel.size) {
            sel.clear();
            paint();
            await wait(700);
          }
          if (view !== 'all') {
            view = 'all';
            paint();
          }
          let ok = true;
          for (const i of [0, 1, 2]) {
            ok = await tap(rows[i].querySelector('.ckb'), 0.5, i ? 520 : 780);
            if (!ok) break;
            await wait(260);
          }
          if (!ok) continue;
          await wait(500);
          if (!(await tap($('.ba.go'), 0.5, 800))) continue;
          await wait(1500);
          if (!(await tap($('.undo'), 0.5, 800))) continue;
          await wait(2400);
        }
      })();
    },
    prompt: `Build an expense approvals list with bulk selection and a floating action bar, full viewport (height: 100dvh).

Layout: a two-column grid, 216px sidebar and a fluid main column. The sidebar is white with a hairline: logo tile and company name, a small uppercase "Expenses" label, saved views as 38px buttons with an icon and a count pill (All reports, Awaiting approval, Approved, Flagged; the active view gets an accent-soft fill), and the signed-in approver at the bottom. The main column has the title "Expense reports", a line of supporting text, Filters and Export buttons, then one white card holding a scroll region with a sticky header row and 54px rows in a CSS grid: checkbox, employee (initials avatar + name), description, a neutral category tag, submitted date, amount right-aligned with font-variant-numeric: tabular-nums, and a status pill (Pending amber, Approved green, Flagged red, each with a dot).

Behavior: clicking a row or its checkbox toggles it (role=checkbox, aria-checked); the header checkbox selects all visible rows and shows a mixed state when only some are selected. The moment one row is selected a floating bar slides up from below the card: position absolute, centered at the bottom of the main column, ink-dark with 18px radius and a large soft shadow, containing "3 selected" with the running total ("$1,910 total"), a divider, Approve (accent), Flag, Export and a clear button. Entrance is transform translateY(36px) scale(.96) to none with a slight overshoot spring (594ms) plus opacity; it leaves the same way when the selection empties. Approve changes the selected rows' status pills (colors cross-fade, the pill pops from scale .8), clears the selection and shows a toast at bottom left ("3 reports approved") with an Undo button that restores the previous statuses. Counts in the sidebar update live.

Accessibility: role=toolbar with aria-label on the bar, role=status on the toast, visible focus rings, prefers-reduced-motion removes the pop. Phone (below 760px): hide the sidebar and the description, category and date columns, let the bar span the width with only Approve and clear. Use your accent color for selection. Plain HTML, CSS and JS, no libraries; React-friendly structure (Sidebar, ExpenseTable, ExpenseRow, BulkBar, Toast).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 3. Inline-edit spreadsheet grid
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-grid',
    cat: 'app-data',
    title: 'Editable spreadsheet grid',
    sub: 'Edit a cell, formulas and totals follow',
    html: `
<div class="app">
  <header class="top">
    <span class="mark">${I(P.table, 17)}</span>
    <div class="ttl"><b>Q4 campaign budget</b><small class="sv"><i></i>Saved to Solace Studio</small></div>
    <span class="gap"></span>
    <span class="mn"><span>File</span><span>Edit</span><span>View</span><span>Insert</span><span>Format</span></span>
    <button class="btn" type="button">${I(P.share, 16)}Share</button>
    <span class="av">MR</span>
  </header>
  <div class="fx">
    <span class="ref tn">A1</span>
    <span class="fxi">${I(P.sigma, 15)}</span>
    <span class="fxv tn"></span>
  </div>
  <div class="sheet" tabindex="0" aria-label="Budget spreadsheet"><div class="g"></div></div>
  <footer class="tabs">
    <button class="stab on" type="button">Budget</button><button class="stab" type="button">Vendors</button><button class="stab" type="button">Timeline</button>
    <span class="plus">${I(P.plus, 15)}</span>
    <span class="sumbar tn">Sum <b class="sa"></b></span>
  </footer>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .top{display:flex;flex:none;align-items:center;gap:12px;height:58px;padding:0 20px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .top .mark{width:32px;height:32px;border-radius:10px}
.d .ttl{display:flex;flex-direction:column;line-height:1.25}
.d .ttl b{font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .ttl small{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--ml-muted)}
.d .sv i{width:6px;height:6px;border-radius:50%;background:#1DB954;transition:background-color .2s ease}
.d .sv.busy i{background:#FF9F0A}
.d .gap{flex:1}
.d .mn{display:flex;gap:4px;margin-right:8px}
.d .mn span{padding:6px 9px;border-radius:8px;font-size:13px;font-weight:500;color:var(--ml-ink-2)}
.d .fx{display:flex;flex:none;align-items:center;gap:10px;height:40px;padding:0 20px 0 20px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .ref{display:grid;place-items:center;width:62px;height:26px;border-radius:8px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 12.5px/1 var(--ml-mono);color:var(--ml-ink-2)}
.d .fxi{display:grid;place-items:center;color:var(--ml-muted)}
.d .fxv{flex:1;min-width:0;overflow:hidden;font:500 13px/1 var(--ml-mono);color:var(--ml-ink);white-space:nowrap;text-overflow:ellipsis}
.d .sheet{position:relative;flex:1;min-height:0;overflow:auto;background:var(--ml-bg);outline:0;scrollbar-width:thin}
.d .g{display:grid;grid-template-columns:48px minmax(190px,2.2fr) repeat(5,minmax(104px,1fr));min-width:max-content;width:100%}
.d .c{position:relative;display:flex;align-items:center;height:38px;padding:0 12px;border-right:1px solid var(--ml-bar-2);border-bottom:1px solid var(--ml-bar-2);font-size:13.5px;font-variant-numeric:tabular-nums;white-space:nowrap;cursor:cell;user-select:none;transition:background-color .6s ease}
.d .c.n{justify-content:flex-end}
.d .c.ch{position:sticky;top:0;z-index:3;justify-content:center;height:30px;padding:0;background:var(--ml-surface);border-color:var(--ml-line);font-size:12px;font-weight:600;color:var(--ml-muted);cursor:default;transition:color .2s ease,background-color .2s ease}
.d .c.rh{position:sticky;left:0;z-index:2;justify-content:center;padding:0;background:var(--ml-surface);border-color:var(--ml-line);font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted);cursor:default;transition:color .2s ease,background-color .2s ease}
.d .c.corner{z-index:4;left:0}
.d .c.hl{color:var(--ml-accent-ink);background:var(--ml-accent-soft)}
.d .c.th{font-weight:650;background:var(--ml-surface);color:var(--ml-ink-2);border-bottom-color:var(--ml-line)}
.d .c.th.n{font-weight:650}
.d .c.tot{font-weight:650;background:var(--ml-surface);border-top:1px solid var(--ml-line)}
.d .c.fm{background:rgba(244,247,252,.55)}
.d .c.neg .v{color:#D70015}
.d .c.pos .v{color:#12893C}
.d .c.flash{background:var(--ml-accent-soft);transition:none}
.d .c.sel{z-index:1;background:var(--ml-bg);box-shadow:inset 0 0 0 2px var(--ml-accent);transition:none}
.d .c.sel::after{content:"";position:absolute;right:-4px;bottom:-4px;width:7px;height:7px;border-radius:2px;background:var(--ml-accent);box-shadow:0 0 0 1.5px #fff}
.d .c input{width:100%;height:100%;border:0;outline:0;background:none;font:inherit;text-align:inherit;color:var(--ml-ink)}
.d .c.n input{text-align:right}
.d .tabs{display:flex;flex:none;align-items:center;gap:6px;height:44px;padding:0 16px;background:var(--ml-surface);border-top:1px solid var(--ml-line)}
.d .stab{height:30px;padding:0 14px;border:0;border-radius:9px;background:none;font-size:13px;font-weight:600;color:var(--ml-muted);cursor:pointer}
.d .stab.on{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.05);color:var(--ml-ink)}
.d .plus{display:grid;place-items:center;width:28px;height:28px;color:var(--ml-muted)}
.d .sumbar{margin-left:auto;font-size:12.5px;color:var(--ml-muted)}
.d .sumbar b{margin-left:4px;font-weight:650;color:var(--ml-ink)}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .mn,.d .top .btn,.d .sumbar{display:none}
  .d .top{padding:0 14px}
  .d .top .av{margin-left:auto}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const sheet = $('.sheet');
      const grid = $('.g');
      const COLS = ['A', 'B', 'C', 'D', 'E', 'F'];
      const HEAD = ['Line item', 'Qty', 'Rate', 'Amount', 'Budget', 'Variance'];
      // rows 2-9: [label, qty, rate, budget]
      const T = [
        ['Paid social (weeks)', 6, 850, 5500], ['Creative production', 3, 1800, 5200], ['Photography days', 2, 1250, 2500],
        ['Email platform (months)', 3, 340, 1200], ['Influencer fees', 5, 600, 2800], ['Print and signage', 1, 1450, 1500],
        ['Events and venue', 2, 2100, 4000], ['Contingency', 1, 900, 1000],
      ].map(([a, b, c, e]) => ({ a, b, c, e }));
      const money = (n) => (n < 0 ? '-' : '') + '$' + Math.abs(n).toLocaleString('en-US');
      const amt = (r) => r.b * r.c;
      const FIRST = 2;
      const LAST = FIRST + T.length - 1;
      const TOT = LAST + 1;
      const ROWS = 40;
      const nums = [1, 2, 3, 4, 5]; // column indexes (0-based) that are numeric
      let sel = { r: 3, c: 1 };
      let editing = null;
      const cell = {};
      const frag = document.createDocumentFragment();
      const add = (cls, r, c, html) => {
        const el = document.createElement('div');
        el.className = 'c ' + cls;
        el.dataset.r = r;
        el.dataset.c = c;
        el.innerHTML = html;
        frag.appendChild(el);
        cell[r + ',' + c] = el;
        return el;
      };
      add('ch rh corner', 0, -1, '');
      COLS.forEach((l, c) => add('ch', 0, c, l));
      for (let r = 1; r <= ROWS; r++) {
        add('rh', r, -1, r);
        COLS.forEach((_, c) => {
          const n = nums.includes(c);
          if (r === 1) add('th' + (n ? ' n' : ''), r, c, HEAD[c]);
          else if (r === TOT) add('tot' + (n ? ' n' : ''), r, c, '<span class="v"></span>');
          else if (r <= LAST) add((n ? 'n' : '') + (c === 3 || c === 5 ? ' fm' : ''), r, c, '<span class="v"></span>');
          else add('', r, c, '');
        });
      }
      grid.appendChild(frag);
      const rawOf = (r, c) => {
        const o = T[r - FIRST];
        if (!o) return '';
        return c === 0 ? o.a : c === 1 ? String(o.b) : c === 2 ? String(o.c) : c === 4 ? String(o.e) : c === 3 ? `=B${r}*C${r}` : `=E${r}-D${r}`;
      };
      const show = (r, c) => {
        const el = cell[r + ',' + c];
        const v = el.querySelector('.v');
        if (!v) return;
        const o = T[r - FIRST];
        if (r === TOT) {
          const sA = T.reduce((a, x) => a + amt(x), 0);
          const sE = T.reduce((a, x) => a + x.e, 0);
          v.textContent = c === 0 ? 'Totals' : c === 3 ? money(sA) : c === 4 ? money(sE) : c === 5 ? money(sE - sA) : c === 1 ? T.reduce((a, x) => a + x.b, 0) : '';
          if (c === 5) {
            el.classList.toggle('neg', sE - sA < 0);
            el.classList.toggle('pos', sE - sA > 0);
          }
          return;
        }
        if (c === 0) v.textContent = o.a;
        else if (c === 1) v.textContent = o.b;
        else if (c === 2) v.textContent = money(o.c);
        else if (c === 3) v.textContent = money(amt(o));
        else if (c === 4) v.textContent = money(o.e);
        else {
          const d = o.e - amt(o);
          v.textContent = (d > 0 ? '+' : '') + money(d);
          el.classList.toggle('neg', d < 0);
          el.classList.toggle('pos', d > 0);
        }
      };
      const paintAll = () => {
        for (let r = FIRST; r <= TOT; r++) for (let c = 0; c < 6; c++) show(r, c);
        $('.sa').textContent = money(T.reduce((a, x) => a + amt(x), 0));
      };
      const flash = (list) =>
        list.forEach(([r, c]) => {
          const el = cell[r + ',' + c];
          el.classList.add('flash');
          void el.offsetWidth;
          el.classList.remove('flash');
        });
      const select = (r, c) => {
        if (editing) commit();
        const old = cell[sel.r + ',' + sel.c];
        old && old.classList.remove('sel');
        root.querySelectorAll('.hl').forEach((n) => n.classList.remove('hl'));
        sel = { r: Math.max(1, Math.min(ROWS, r)), c: Math.max(0, Math.min(5, c)) };
        const el = cell[sel.r + ',' + sel.c];
        el.classList.add('sel');
        cell[`0,${sel.c}`].classList.add('hl');
        cell[`${sel.r},-1`].classList.add('hl');
        $('.ref').textContent = COLS[sel.c] + sel.r;
        $('.fxv').textContent = sel.r === 1 ? HEAD[sel.c] : sel.r === TOT ? (sel.c === 0 ? 'Totals' : sel.c >= 3 ? `=SUM(${COLS[sel.c]}${FIRST}:${COLS[sel.c]}${LAST})` : '') : rawOf(sel.r, sel.c);
      };
      const canEdit = (r, c) => r >= FIRST && r <= LAST && (c === 1 || c === 2 || c === 4);
      const tick = (el) => {
        const s = $('.sv');
        s.classList.add('busy');
        clearTimeout(tick.t);
        tick.t = setTimeout(() => {
          if (!root.dataset.paused) s.classList.remove('busy');
          else tick.t = setTimeout(() => s.classList.remove('busy'), 600);
        }, 700);
      };
      const edit = (r, c, seed) => {
        if (!canEdit(r, c)) return false;
        const el = cell[r + ',' + c];
        const inp = document.createElement('input');
        inp.value = seed !== undefined ? seed : rawOf(r, c);
        inp.setAttribute('aria-label', 'Edit cell ' + COLS[c] + r);
        el.innerHTML = '';
        el.appendChild(inp);
        editing = { r, c, inp };
        inp.focus();
        if (seed === undefined) inp.select();
        inp.addEventListener('input', () => ($('.fxv').textContent = inp.value));
        inp.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            commit();
            select(r + 1, c);
            sheet.focus();
          } else if (e.key === 'Tab') {
            e.preventDefault();
            commit();
            select(r, c + 1);
            sheet.focus();
          } else if (e.key === 'Escape') {
            cancel();
            sheet.focus();
          }
        });
        return true;
      };
      const restore = (r, c) => {
        const el = cell[r + ',' + c];
        el.innerHTML = '<span class="v"></span>';
        show(r, c);
      };
      const cancel = () => {
        if (!editing) return;
        const { r, c } = editing;
        editing = null;
        restore(r, c);
        select(r, c);
      };
      const commit = () => {
        if (!editing) return;
        const { r, c, inp } = editing;
        editing = null;
        const v = parseFloat(inp.value.replace(/[$,]/g, ''));
        const o = T[r - FIRST];
        if (!isNaN(v) && v >= 0) {
          if (c === 1) o.b = v;
          else if (c === 2) o.c = v;
          else o.e = v;
          tick();
        }
        restore(r, c);
        paintAll();
        flash([[r, 3], [r, 5], [TOT, 1], [TOT, 3], [TOT, 4], [TOT, 5]]);
        if (cell[r + ',' + c].classList.contains('sel')) $('.fxv').textContent = rawOf(r, c);
      };
      grid.addEventListener('mousedown', (e) => {
        const el = e.target.closest('.c');
        if (!el || el.contains(editing && editing.inp) || el.classList.contains('ch') || el.classList.contains('rh')) return;
        select(+el.dataset.r, +el.dataset.c);
        sheet.focus();
      });
      grid.addEventListener('dblclick', (e) => {
        const el = e.target.closest('.c');
        if (el && el.dataset.r) edit(+el.dataset.r, +el.dataset.c);
      });
      sheet.addEventListener('keydown', (e) => {
        if (editing) return;
        const k = e.key;
        const mv = { ArrowUp: [-1, 0], ArrowDown: [1, 0], ArrowLeft: [0, -1], ArrowRight: [0, 1], Tab: [0, 1] }[k];
        if (mv) {
          e.preventDefault();
          select(sel.r + mv[0], sel.c + mv[1]);
        } else if (k === 'Enter' || k === 'F2') {
          e.preventDefault();
          edit(sel.r, sel.c);
        } else if (k.length === 1 && !e.ctrlKey && !e.metaKey && canEdit(sel.r, sel.c)) {
          e.preventDefault();
          edit(sel.r, sel.c, k);
        }
      });
      paintAll();
      select(4, 1);

      // Autoplay: pick a cell, type a value, Enter; the formulas and totals update. Alternates edit and undo.
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
      const typeInto = async (r, c, text) => {
        cur.classList.toggle('off', !moveTo(cell[r + ',' + c], 0.6));
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        await wait(110);
        cur.classList.remove('press');
        select(r, c);
        await wait(380);
        if (!idle() || !edit(r, c, '')) return false;
        const inp = editing.inp;
        for (const ch of text) {
          if (!idle()) return false;
          inp.value += ch;
          $('.fxv').textContent = inp.value;
          await wait(110);
        }
        await wait(260);
        if (!idle()) return false;
        commit();
        select(r, c);
        return true;
      };
      cur.style.transform = 'translate(700px,520px)';
      let flip = 0;
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || editing) {
            if (editing && idle() && performance.now() > userUntil + 1500) {
              commit();
              select(sel.r, sel.c);
            }
            await wait(400);
            continue;
          }
          const up = flip % 2 === 0;
          if (!(await typeInto(4, 1, up ? '3' : '2'))) continue;
          await wait(1500);
          if (!(await typeInto(4, 4, up ? '3800' : '2500'))) continue;
          flip++;
          await wait(2600);
        }
      })();
    },
    prompt: `Build an editable spreadsheet grid for a budget document, full viewport (height: 100dvh).

Layout: a 58px title bar (small logo tile, document title "Q4 campaign budget", a "Saved" status with a green dot, menu words File Edit View Insert Format, a Share button, avatar), a 40px formula bar (a 62px cell-reference box showing "C3", a sigma icon, the raw content of the selected cell in a mono font), the sheet, and a 44px footer with sheet tabs and a "Sum" readout. The sheet is one CSS grid inside an overflow:auto region: a sticky column-letter row (A-F) and a sticky row-number column on a soft surface, 38px cells with hairline borders, numeric columns right-aligned with font-variant-numeric: tabular-nums. Columns: Line item, Qty, Rate, Amount (formula Qty x Rate), Budget, Variance (formula Budget - Amount, green when positive and red when negative), then a Totals row with sums, then a few empty rows.

Behavior: click selects a cell (2px accent outline, a small square fill handle on its bottom-right corner, its column letter and row number highlighted, the formula bar shows its formula such as =B3*C3). Arrow keys move the selection, Enter or F2 or double-click edits in place with an input that inherits the cell font, typing a character starts editing with that character, Enter commits and moves down, Tab commits and moves right, Escape cancels. Only input cells are editable; formula cells recalculate on commit. Cells that changed (the row's Amount and Variance and the Totals row) flash accent-soft and fade out over 600ms, and the status line briefly shows an unsaved dot. Money is formatted like $5,100 with a minus sign for negatives.

Accessibility: the grid container is focusable with an aria-label, the editing input has an aria-label naming the cell, prefers-reduced-motion removes the flash fade. Phone (below 760px): hide the menu words, Share and the Sum readout and let the grid scroll in both directions. Use your accent color for the selection. Plain HTML, CSS and JS, no libraries; React-friendly structure (TitleBar, FormulaBar, Grid, Cell, SheetTabs).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 4. Kanban board with WIP limits
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-kanban',
    cat: 'app-data',
    title: 'Kanban board with limits',
    sub: 'Drag cards, full columns push back',
    html: `
<div class="app">
  <nav class="rail" aria-label="Main">
    <span class="mark">${I(P.mark, 16)}</span>
    <button class="rb" type="button" aria-label="Home">${I(P.home, 20)}</button>
    <button class="rb on" type="button" aria-label="Board">${I(P.kanban, 20)}</button>
    <button class="rb" type="button" aria-label="People">${I(P.users, 20)}</button>
    <button class="rb" type="button" aria-label="Settings">${I(P.gear, 20)}</button>
  </nav>
  <main class="main">
    <div class="head">
      <div><h1>Mobile app, sprint 14</h1><p class="sub">Fernway - Oct 12 to Oct 23 - 9 days left</p></div>
      <div class="hr"><span class="avs"><span class="av">AT</span><span class="av t1">DO</span><span class="av t2">HK</span><span class="av">LO</span></span><button class="cta" type="button">${I(P.plus, 16)}Add task</button></div>
    </div>
    <div class="tools">
      <span class="seg" role="tablist"><button class="on" type="button">Board</button><button type="button">List</button><button type="button">Timeline</button></span>
      <span class="hint">${I(P.zap, 14)}Work in progress is capped per column</span>
    </div>
    <div class="board" role="list"></div>
  </main>
  <div class="toast" role="status"><span class="tw">${I(P.flag, 14, 2.4)}</span><span class="tt"></span></div>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .app{display:grid;grid-template-columns:64px minmax(0,1fr);position:relative}
.d .rail{display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px 0;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .rail .mark{margin-bottom:16px}
.d .rb{display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:11px;background:none;color:var(--ml-muted);cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .rb:hover{background:var(--ml-surface)}
.d .rb.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0;padding:22px 26px 0}
.d .head{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}
.d .hr{display:flex;align-items:center;gap:16px}
.d .avs{display:flex}
.d .avs .av{width:32px;height:32px;margin-left:-8px;box-shadow:0 0 0 2px var(--ml-surface)}
.d .avs .av:first-child{margin-left:0}
.d .tools{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;margin-top:18px}
.d .seg{display:inline-flex;padding:3px;border-radius:11px;background:rgba(227,233,242,.6)}
.d .seg button{height:30px;padding:0 14px;border:0;border-radius:8px;background:none;font-size:13px;font-weight:600;color:var(--ml-muted);cursor:pointer}
.d .seg button.on{background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.08);color:var(--ml-ink)}
.d .hint{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;color:var(--ml-muted)}
.d .board{display:grid;flex:1;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;min-height:0;padding:14px 0 26px}
.d .col{display:flex;flex-direction:column;min-height:0;padding:10px;border-radius:16px;background:rgba(227,233,242,.5);transition:background-color .2s ease,box-shadow .2s ease}
.d .col.hot{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .col.deny{background:rgba(255,59,48,.07);box-shadow:inset 0 0 0 1.5px rgba(255,59,48,.35)}
.d .col.shake{animation:kb-shake 420ms var(--ml-ease)}
.d .ch{display:flex;flex:none;align-items:center;gap:8px;height:34px;padding:0 4px 0 6px}
.d .ch b{font-size:13.5px;font-weight:650}
.d .cn{display:inline-flex;align-items:center;height:22px;padding:0 8px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 11.5px/1 var(--ml-mono);color:var(--ml-muted);transition:background-color .25s ease,color .25s ease,box-shadow .25s ease}
.d .cn.lim{background:rgba(255,159,10,.14);box-shadow:none;color:#B25E00}
.d .cn.full::after{content:"limit";margin-left:5px;font:600 10.5px/1 var(--ml-font);letter-spacing:.04em;text-transform:uppercase}
.d .lst{display:flex;flex:1;flex-direction:column;gap:10px;min-height:70px;padding:2px 1px 6px;overflow-y:auto;scrollbar-width:none}
.d .kc,.d .gh{display:block;padding:12px 12px 11px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 2px rgba(35,15,10,.05);cursor:grab;user-select:none;touch-action:pan-y}
.d .kc{transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease,background-color .2s ease}
.d .kc:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .kc.ph{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .kc.ph > *{opacity:.35}
.d .kc.landed{animation:kb-land 480ms var(--ml-bounce)}
.d .gh{position:absolute;left:0;top:0;z-index:40;pointer-events:none;cursor:grabbing;box-shadow:inset 0 0 0 1px var(--ml-accent-line),0 2px 4px rgba(35,15,10,.08),0 18px 36px rgba(35,15,10,.2)}
.d .kt{font-size:13.5px;line-height:1.35;font-weight:600;letter-spacing:-.005em}
.d .km{display:flex;align-items:center;gap:8px;margin-top:10px}
.d .tag{display:inline-flex;align-items:center;height:22px;padding:0 8px;border-radius:7px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:600}
.d .tag.t1{background:var(--ml-accent-line)}
.d .tag.t2{background:var(--ml-surface);color:var(--ml-ink-2)}
.d .due{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--ml-muted)}
.d .km .av{width:24px;height:24px;margin-left:auto;font-size:10px}
.d .toast{position:absolute;left:50%;bottom:24px;z-index:45;display:flex;align-items:center;gap:10px;height:44px;padding:0 16px 0 10px;border-radius:14px;background:var(--ml-ink);color:#fff;font-size:13.5px;font-weight:600;box-shadow:var(--ml-shadow-lg);opacity:0;pointer-events:none;transform:translate(-50%,14px);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease}
.d .toast.on{opacity:1;transform:translate(-50%,0)}
.d .tw{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:rgba(255,159,10,.22);color:#FFB547}
@keyframes kb-shake{0%,100%{transform:none}25%{transform:translateX(-6px)}55%{transform:translateX(5px)}80%{transform:translateX(-2px)}}
@keyframes kb-land{0%{transform:scale(.95)}100%{transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .rail,.d .hint,.d .avs{display:none}
  .d .main{padding:18px 0 0 16px}
  .d .head{padding-right:16px}
  .d .tools{padding-right:16px}
  .d .board{display:flex;overflow-x:auto;padding-right:16px;scroll-snap-type:x mandatory;scrollbar-width:none}
  .d .col{flex:0 0 80%;scroll-snap-align:start}
}
@media (prefers-reduced-motion: reduce){.d .kc.landed,.d .col.shake{animation:none}}`,
    run: (root) => {
      const COLS = [['Backlog', 0], ['In progress', 3], ['In review', 2], ['Done', 0]];
      const T = [
        ['a1', 'Audit onboarding emails', 'Content', 'HK', 'Oct 19', 0], ['a2', 'Offline mode for saved lists', 'Build', 'DO', 'Oct 23', 0],
        ['a3', 'Update icon set to 24px grid', 'Design', 'AT', 'Oct 21', 0], ['a4', 'Write release notes for 3.2', 'Content', 'PN', 'Oct 22', 0],
        ['b1', 'Checkout redesign', 'Design', 'AT', 'Oct 16', 1], ['b2', 'Push notification copy', 'Content', 'HK', 'Oct 15', 1],
        ['c1', 'Search filters', 'Build', 'DO', 'Oct 15', 2],
        ['d1', 'Passkey sign in', 'Build', 'LO', 'Oct 9', 3], ['d2', 'Crash report triage', 'QA', 'SW', 'Oct 12', 3], ['d3', 'Settings cleanup', 'Design', 'AT', 'Oct 13', 3],
      ];
      const TAG = { Design: 't0', Build: 't1', Content: 't2', QA: 't2' };
      const CAL = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></svg>';
      const $ = (s) => root.querySelector(s);
      const app = $('.app');
      const board = $('.board');
      const cur = $('.cur');
      const toast = $('.toast');
      board.innerHTML = COLS.map(([n], i) => `<section class="col" data-c="${i}" role="listitem" aria-label="${n}"><header class="ch"><b>${n}</b><span class="cn tn"></span></header><div class="lst"></div></section>`).join('');
      const cols = [...root.querySelectorAll('.col')];
      T.forEach(([id, t, tag, who, due, c]) => {
        const el = document.createElement('div');
        el.className = 'kc';
        el.dataset.id = id;
        el.tabIndex = 0;
        el.setAttribute('aria-label', `${t}. Use arrow keys to move between columns.`);
        el.innerHTML = `<p class="kt">${t}</p><div class="km"><span class="tag ${TAG[tag]}">${tag}</span><span class="due">${CAL}${due}</span><span class="av t${who.charCodeAt(0) % 3}">${who}</span></div>`;
        cols[c].querySelector('.lst').appendChild(el);
      });
      const s = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const rr = (el) => {
        const o = root.getBoundingClientRect();
        const k = s();
        const r = el.getBoundingClientRect();
        return { x: (r.left - o.left) / k, y: (r.top - o.top) / k, w: r.width / k, h: r.height / k };
      };
      const counts = () =>
        cols.forEach((c, i) => {
          const n = c.querySelectorAll('.kc:not(.ph)').length + (c.querySelector('.kc.ph') ? 1 : 0);
          const lim = COLS[i][1];
          const b = c.querySelector('.cn');
          b.textContent = lim ? `${n} / ${lim}` : n;
          b.classList.toggle('lim', !!lim && n >= lim);
          b.classList.toggle('full', !!lim && n >= lim);
        });
      const flip = (fn) => {
        const cards = [...root.querySelectorAll('.kc')];
        const first = new Map(cards.map((c) => [c, rr(c)]));
        fn();
        cards.forEach((c) => {
          const a = first.get(c);
          const b = rr(c);
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          if (dx || dy) {
            c.style.transition = 'none';
            c.style.transform = `translate(${dx}px,${dy}px)`;
            void c.offsetWidth;
            c.style.transition = '';
            c.style.transform = '';
          }
        });
        counts();
      };
      let tt = 0;
      const say = (text) => {
        $('.tt').textContent = text;
        toast.classList.add('on');
        clearTimeout(tt);
        tt = setTimeout(() => toast.classList.remove('on'), 2200);
      };
      const refuse = (ci) => {
        const c = cols[ci];
        c.classList.remove('shake');
        void c.offsetWidth;
        c.classList.add('shake');
        say(`${COLS[ci][0]} is at its limit of ${COLS[ci][1]}`);
      };
      const colOf = (card) => cols.indexOf(card.closest('.col'));
      const cnt = (ci, but) => [...cols[ci].querySelectorAll('.kc')].filter((c) => c !== but).length;
      counts();

      // ---- drag (real pointer events; autoplay drives the same functions) ----
      let D = null;
      const nearest = (px) => {
        let best = 0;
        let bd = 1e9;
        cols.forEach((c, i) => {
          const r = rr(c);
          const d = Math.abs(px - (r.x + r.w / 2));
          if (d < bd) {
            bd = d;
            best = i;
          }
        });
        return best;
      };
      const moveDrag = (px, py) => {
        if (!D) return;
        D.g.style.transform = `translate(${px - D.ox}px,${py - D.oy}px) rotate(1.6deg) scale(1.02)`;
        const ci = nearest(px);
        const full = !!COLS[ci][1] && ci !== D.ci && cnt(ci, D.card) >= COLS[ci][1];
        cols.forEach((c, i) => {
          c.classList.toggle('deny', full && i === ci);
          c.classList.toggle('hot', !full && i === ci);
        });
        D.full = full ? ci : -1;
        let target = cols[ci].querySelector('.lst');
        let before = null;
        if (full) {
          target = D.list;
          before = D.next;
        } else {
          const kids = [...target.children].filter((k) => k !== D.card);
          before = kids.find((k) => {
            const r = rr(k);
            return py < r.y + r.h / 2;
          }) || null;
        }
        if (D.card.parentNode !== target || D.card.nextElementSibling !== before) flip(() => target.insertBefore(D.card, before));
      };
      const startDrag = (card, px, py) => {
        if (D) return;
        const r = rr(card);
        const g = document.createElement('div');
        g.className = 'gh';
        g.innerHTML = card.innerHTML;
        g.style.width = r.w + 'px';
        app.appendChild(g);
        D = { card, g, ox: px - r.x, oy: py - r.y, ci: colOf(card), list: card.parentNode, next: card.nextElementSibling, full: -1 };
        card.classList.add('ph');
        moveDrag(px, py);
      };
      const endDrag = () => {
        if (!D) return;
        const { card, g, full } = D;
        D = null;
        cols.forEach((c) => c.classList.remove('hot', 'deny'));
        if (full >= 0) refuse(full);
        counts();
        const r = rr(card);
        g.style.transition = 'transform 320ms var(--ml-ease)';
        g.style.transform = `translate(${r.x}px,${r.y}px)`;
        setTimeout(() => {
          g.remove();
          card.classList.remove('ph');
          card.classList.remove('landed');
          void card.offsetWidth;
          card.classList.add('landed');
          counts();
        }, 330);
      };
      const pos = (e) => {
        const o = root.getBoundingClientRect();
        const k = s();
        return [(e.clientX - o.left) / k, (e.clientY - o.top) / k];
      };
      let pend = null;
      root.addEventListener('pointerdown', (e) => {
        const card = e.target.closest && e.target.closest('.kc');
        if (!card || e.button) return;
        pend = { card, sx: e.clientX, sy: e.clientY, id: e.pointerId };
        try { card.setPointerCapture(e.pointerId); } catch (x) {}
      });
      root.addEventListener('pointermove', (e) => {
        if (!pend) return;
        if (!D && Math.hypot(e.clientX - pend.sx, e.clientY - pend.sy) > 5) {
          const [px, py] = pos({ clientX: pend.sx, clientY: pend.sy });
          startDrag(pend.card, px, py);
        }
        if (D) moveDrag(...pos(e));
      });
      const up = () => {
        pend = null;
        if (D) endDrag();
      };
      root.addEventListener('pointerup', up);
      root.addEventListener('pointercancel', up);
      root.addEventListener('keydown', (e) => {
        const card = e.target.closest && e.target.closest('.kc');
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!card || !d) return;
        e.preventDefault();
        const ci = colOf(card) + d;
        if (ci < 0 || ci >= cols.length) return;
        if (COLS[ci][1] && cnt(ci, card) >= COLS[ci][1]) return refuse(ci);
        flip(() => cols[ci].querySelector('.lst').insertBefore(card, cols[ci].querySelector('.lst').firstChild));
        card.focus();
      });

      // ---- autoplay: drag three cards (the second one is refused), then put everything back ----
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !D;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx, fy) => {
        const r = rr(el);
        return [r.x + r.w * fx, r.y + r.h * fy];
      };
      const glide = (x0, y0, x1, y1, ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = performance.now();
          const step = () => {
            if (!root.isConnected) return res();
            const t = performance.now();
            if (root.dataset.paused) {
              last = t;
              return void setTimeout(step, 120);
            }
            acc += t - last;
            last = t;
            const k = Math.min(1, acc / ms);
            const e = 1 - Math.pow(1 - k, 3);
            fn(x0 + (x1 - x0) * e, y0 + (y1 - y0) * e);
            if (k < 1 && performance.now() > userUntil) requestAnimationFrame(step);
            else res();
          };
          requestAnimationFrame(step);
        });
      const autoDrag = async (id, ci) => {
        const card = $(`.kc[data-id="${id}"]`);
        if (!card) return false;
        const [x0, y0] = pt(card, 0.4, 0.4);
        cur.classList.remove('off');
        cur.style.transform = `translate(${x0}px,${y0}px)`;
        await wait(780);
        if (performance.now() < userUntil || root.dataset.paused) return false;
        cur.classList.add('press');
        await wait(130);
        startDrag(card, x0, y0);
        cur.style.transition = 'opacity .25s ease';
        const lr = rr(cols[ci].querySelector('.lst'));
        await glide(x0, y0, lr.x + lr.w * 0.5, lr.y + 36, 950, (x, y) => {
          moveDrag(x, y);
          cur.style.transform = `translate(${x}px,${y}px)`;
        });
        const live = performance.now() >= userUntil;
        if (live) await wait(520);
        endDrag();
        cur.classList.remove('press');
        cur.style.transition = '';
        await wait(650);
        return live;
      };
      const reset = () =>
        flip(() => {
          T.forEach(([id, , , , , c]) => cols[c].querySelector('.lst').appendChild($(`.kc[data-id="${id}"]`)));
        });
      cur.style.transform = 'translate(620px,560px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          let ok = true;
          for (const [id, ci] of [['a1', 1], ['a3', 1], ['c1', 3]]) {
            ok = await autoDrag(id, ci);
            if (!ok) break;
          }
          if (!ok) {
            cur.classList.add('off');
            await wait(600);
            continue;
          }
          await wait(1600);
          reset();
          await wait(1800);
        }
      })();
    },
    prompt: `Build a kanban board screen with work-in-progress limits and real drag and drop, full viewport (height: 100dvh).

Layout: a 64px icon rail on the left (logo tile, four 40px icon buttons, the active one on an accent-soft fill), then the main column: title "Mobile app, sprint 14", one line of supporting text, an avatar stack and a primary Add task button; a toolbar row with a Board / List / Timeline segmented control and a muted hint; and the board: four equal columns (Backlog, In progress, In review, Done) on a 14px grid gap. Each column is a 16px-radius tinted container with a header (name plus a count pill; columns with a limit show "2 / 3") and a vertical stack of cards. A card is white, 12px radius, hairline plus a soft shadow: a 13.5px semibold title, then a row with a small tag (Design, Build, Content, QA in blue steps), a due date with a calendar icon and an initials avatar pushed right. Limits: In progress 3, In review 2. When a column reaches its limit the count pill turns amber and says LIMIT.

Drag: use Pointer Events. After a 5px threshold, create a ghost copy (position absolute inside the app, translate to the pointer, rotate(1.6deg) scale(1.02), large soft shadow, pointer-events none) and turn the original into a placeholder (accent-soft fill, content at 35% opacity). The column nearest the pointer highlights; the placeholder moves live to the insertion index and the other cards glide with a FLIP (measure, move, apply the inverse translate with transition none, clear it so a 587ms critically damped spring plays). If the target column is full, tint it red, keep the placeholder at its origin, and on release shake the column (420ms, 6px) and show a dark toast "In progress is at its limit of 3". On drop the ghost flies to the placeholder with a 320ms ease-out and the card settles with a tiny scale pop.

Accessibility: cards are focusable with an aria-label; ArrowLeft and ArrowRight move the focused card to the neighbouring column and respect the limits; the toast is role=status; prefers-reduced-motion removes the shake and pop. Phone (below 760px): hide the rail, make the board a horizontal scroll-snap row with 80%-wide columns. Use your accent color for highlights. Plain HTML, CSS and JS, no libraries; React-friendly structure (Rail, BoardHeader, Column, Card, DragLayer, Toast).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 5. Calendar month with drag to reschedule
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-month',
    cat: 'app-data',
    title: 'Month calendar, drag to move',
    sub: 'Drag an event onto another day',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.cal, 16)}</span>Northgate</div>
    <button class="cta wide" type="button">${I(P.plus, 16)}New event</button>
    <p class="lbl">Today, Wed 14 Oct</p>
    <ul class="up"></ul>
    <p class="lbl">Calendars</p>
    <div class="cals"></div>
  </aside>
  <main class="main">
    <header class="top">
      <h1 class="mt"></h1>
      <div class="nv"><button class="ib" type="button" data-n="-1" aria-label="Previous month">${I(P.chevL, 18)}</button><button class="ib" type="button" data-n="1" aria-label="Next month">${I(P.chevR, 18)}</button></div>
      <button class="btn today" type="button">Today</button>
      <span class="grow"></span>
      <span class="seg"><button type="button">Week</button><button class="on" type="button">Month</button><button type="button">Year</button></span>
    </header>
    <div class="dow" aria-hidden="true"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
    <div class="mg" role="grid" aria-label="Month"></div>
  </main>
  <div class="toast" role="status"><span class="tk">${I(P.check, 14, 3)}</span><span class="tt"></span><button class="undo" type="button">${I(P.undo, 14)}Undo</button></div>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .app{display:grid;grid-template-columns:232px minmax(0,1fr);position:relative}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 16px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .side .brand{padding:2px 4px 20px}
.d .wide{width:100%;margin-bottom:22px}
.d .lbl{padding:0 4px 10px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .up{display:flex;flex-direction:column;gap:8px;margin-bottom:22px;list-style:none}
.d .up li{display:flex;gap:10px;padding:9px 10px;border-radius:11px;background:var(--ml-surface);font-size:13px;line-height:1.3}
.d .up i{flex:none;width:3px;border-radius:3px;background:var(--ml-accent)}
.d .up li.k1 i{background:var(--ml-accent-2)}
.d .up li.k2 i{background:var(--ml-muted)}
.d .up b{display:block;font-weight:600}
.d .up small{font-size:12px;color:var(--ml-muted)}
.d .cal{display:flex;align-items:center;gap:10px;width:100%;height:34px;padding:0 4px;border:0;border-radius:9px;background:none;font-size:13.5px;font-weight:500;color:var(--ml-ink-2);text-align:left;cursor:pointer}
.d .cal:hover{background:var(--ml-surface)}
.d .sw{display:grid;place-items:center;width:16px;height:16px;border-radius:5px;background:var(--ml-accent);color:#fff;transition:opacity .2s ease,background-color .2s ease}
.d .sw svg{transition:opacity .15s ease}
.d .cal.k1 .sw{background:var(--ml-accent-2)}
.d .cal.k2 .sw{background:var(--ml-muted)}
.d .cal.off .sw{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar)}
.d .cal.off .sw svg{opacity:0}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0;padding:20px 26px 24px}
.d .top{display:flex;flex:none;align-items:center;gap:12px;margin-bottom:16px}
.d .top h1{min-width:210px}
.d .nv{display:flex;gap:2px}
.d .ib{display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer}
.d .ib:hover{background:var(--ml-bg)}
.d .grow{flex:1}
.d .seg{display:inline-flex;padding:3px;border-radius:11px;background:rgba(227,233,242,.6)}
.d .seg button{height:30px;padding:0 14px;border:0;border-radius:8px;background:none;font-size:13px;font-weight:600;color:var(--ml-muted);cursor:pointer}
.d .seg button.on{background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.08);color:var(--ml-ink)}
.d .dow{display:grid;flex:none;grid-template-columns:repeat(7,minmax(0,1fr));padding:0 0 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .dow span{padding-left:10px}
.d .mg{display:grid;flex:1;grid-template-columns:repeat(7,minmax(0,1fr));grid-template-rows:repeat(var(--rows,5),minmax(0,1fr));min-height:0;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow);overflow:hidden}
.d .dc{position:relative;display:flex;flex-direction:column;gap:4px;min-width:0;min-height:0;padding:7px 6px 4px;border-right:1px solid var(--ml-line);border-bottom:1px solid var(--ml-line);overflow:hidden;transition:background-color .15s ease}
.d .dc:nth-child(7n){border-right:0}
.d .dc.out .dn{color:#B4B9C2}
.d .dc.out{background:rgba(244,247,252,.6)}
.d .dc.over{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .dn{display:grid;place-items:center;flex:none;align-self:flex-start;min-width:26px;height:26px;padding:0 5px;border-radius:999px;font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--ml-ink-2)}
.d .today .dn{background:var(--ml-accent);color:#fff}
.d .evs{display:flex;flex-direction:column;gap:3px;min-height:0}
.d .ev{display:block;flex:none;height:22px;padding:0 7px;border-radius:7px;background:var(--ml-accent);color:#fff;font-size:12px;font-weight:600;line-height:22px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;cursor:grab;user-select:none;touch-action:pan-y;transition:opacity .2s ease,transform 90ms ease-out}
.d .ev.k1{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .ev.k2{background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2)}
.d .ev:focus-visible{outline:2px solid var(--ml-accent);outline-offset:1px}
.d .ev.ph{opacity:.28}
.d .ev.pop{animation:cm-pop 520ms var(--ml-bounce)}
.d .more{padding-left:7px;font-size:11.5px;font-weight:600;color:var(--ml-muted)}
.d .gh{position:absolute;left:0;top:0;z-index:40;height:26px;padding:0 10px;border-radius:8px;background:var(--ml-accent);color:#fff;font-size:12.5px;font-weight:600;line-height:26px;white-space:nowrap;pointer-events:none;box-shadow:0 2px 4px rgba(35,15,10,.12),0 14px 28px rgba(255,68,51,.3)}
.d .gh.k1{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line),0 14px 28px rgba(35,15,10,.18);color:var(--ml-accent-ink)}
.d .gh.k2{background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line),0 14px 28px rgba(35,15,10,.18);color:var(--ml-ink-2)}
.d .toast{position:absolute;left:50%;bottom:26px;z-index:45;display:flex;align-items:center;gap:10px;height:46px;padding:0 8px 0 12px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);font-size:13.5px;font-weight:600;opacity:0;pointer-events:none;transform:translate(-50%,16px);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .22s ease}
.d .toast.on{opacity:1;pointer-events:auto;transform:translate(-50%,0)}
.d .tk{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#1DB954;color:#fff}
.d .undo{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 10px;border:0;border-radius:9px;background:var(--ml-surface);font-size:13px;font-weight:600;color:var(--ml-accent-ink);cursor:pointer;transition:transform 90ms ease-out}
@keyframes cm-pop{0%{transform:scale(.7);opacity:0}100%{transform:none;opacity:1}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .seg,.d .more{display:none}
  .d .main{padding:16px 12px 18px}
  .d .top{gap:6px}
  .d .top h1{min-width:0;font-size:22px}
  .d .dow span{padding-left:0;text-align:center}
  .d .dc{align-items:center;padding:5px 2px 3px}
  .d .dn{align-self:center}
  .d .ev{width:100%;height:5px;padding:0;font-size:0;border-radius:3px}
  .d .evs{width:100%}
  .d .toast{left:12px;right:12px;transform:translateY(16px)}
  .d .toast.on{transform:none}
}
@media (prefers-reduced-motion: reduce){.d .ev.pop{animation:none}}`,
    run: (root) => {
      const E = [
        ['2026-10-01', 'Sprint kickoff', 0, '09:30'], ['2026-10-02', 'Northgate sync', 1, '11:00'], ['2026-10-05', 'Payroll run', 0, '10:00'],
        ['2026-10-06', 'Roadmap review', 0, '14:00'], ['2026-10-06', 'Dentist', 2, '16:30'], ['2026-10-07', 'Kestrel onboarding', 1, '10:00'],
        ['2026-10-08', 'Design critique', 0, '13:00'], ['2026-10-09', 'Q4 planning', 0, '09:00'], ['2026-10-09', 'Client lunch', 1, '12:30'],
        ['2026-10-12', 'Weekly planning', 0, '09:00'], ['2026-10-13', 'Meridian check-in', 1, '11:00'],
        ['2026-10-14', 'Design critique', 0, '09:30'], ['2026-10-14', 'Venue walkthrough', 1, '10:30'], ['2026-10-14', 'Invoice review', 0, '14:00'], ['2026-10-14', 'Gym', 2, '18:00'],
        ['2026-10-15', 'Hiring panel', 0, '09:30'], ['2026-10-16', 'Solace review', 1, '13:00'], ['2026-10-19', 'Board prep', 0, '10:00'],
        ['2026-10-20', 'Brightline demo', 1, '15:00'], ['2026-10-21', 'Team offsite', 0, '09:00'], ['2026-10-22', 'Team offsite', 0, '09:00'],
        ['2026-10-23', 'Release freeze', 0, '17:00'], ['2026-10-26', 'Quarter close', 0, '10:00'], ['2026-10-27', 'Fernway workshop', 1, '13:30'],
        ['2026-10-29', 'Flight to Cebu', 2, '07:15'], ['2026-10-31', 'Halloween', 2, '19:00'],
      ].map(([d, t, k, tm], id) => ({ id, d, t, k, tm }));
      const CAL = [['Northgate team', 0], ['Clients', 1], ['Personal', 2]];
      const MON = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const DAYN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const TODAY = new Date(2026, 9, 14);
      const CK = '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const $ = (s) => root.querySelector(s);
      const app = $('.app');
      const grid = $('.mg');
      const cur = $('.cur');
      const toast = $('.toast');
      const show = [true, true, true];
      let view = new Date(2026, 9, 1);
      const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const nice = (k) => {
        const [y, m, d] = k.split('-').map(Number);
        const dt = new Date(y, m - 1, d);
        return `${DAYN[dt.getDay()]}, ${MON[m - 1].slice(0, 3)} ${d}`;
      };
      let pop = -1;
      const render = () => {
        const y = view.getFullYear();
        const m = view.getMonth();
        const off = (new Date(y, m, 1).getDay() + 6) % 7;
        const dim = new Date(y, m + 1, 0).getDate();
        const rows = Math.ceil((off + dim) / 7);
        grid.style.setProperty('--rows', rows);
        let h = '';
        for (let i = 0; i < rows * 7; i++) {
          const d = new Date(y, m, 1 - off + i);
          const k = iso(d);
          const ev = E.filter((e) => e.d === k && show[e.k]);
          const label = d.getDate() === 1 ? `${MON[d.getMonth()].slice(0, 3)} 1` : d.getDate();
          h += `<div class="dc${d.getMonth() !== m ? ' out' : ''}${iso(TODAY) === k ? ' today' : ''}" data-d="${k}" role="gridcell" aria-label="${nice(k)}"><span class="dn">${label}</span><div class="evs">${ev.slice(0, 3).map((e) => `<div class="ev k${e.k}${e.id === pop ? ' pop' : ''}" data-id="${e.id}" tabindex="0" title="${e.t}">${e.t}</div>`).join('')}${ev.length > 3 ? `<span class="more">+${ev.length - 3} more</span>` : ''}</div></div>`;
        }
        grid.innerHTML = h;
        pop = -1;
        $('.mt').textContent = `${MON[m]} ${y}`;
        $('.up').innerHTML = E.filter((e) => e.d === iso(TODAY) && show[e.k]).sort((a, b) => a.tm.localeCompare(b.tm)).map((e) => `<li class="k${e.k}"><i></i><span><b>${e.t}</b><small>${e.tm}</small></span></li>`).join('');
      };
      $('.cals').innerHTML = CAL.map(([n, k]) => `<button class="cal k${k}" type="button" data-k="${k}" aria-pressed="true"><span class="sw">${CK}</span>${n}</button>`).join('');
      render();
      let tt = 0;
      let undo = null;
      const toastOn = (text, fn) => {
        $('.tt').textContent = text;
        undo = fn;
        toast.classList.add('on');
        clearTimeout(tt);
        tt = setTimeout(() => toast.classList.remove('on'), 4200);
      };
      const move = (id, to) => {
        const e = E.find((x) => x.id === id);
        if (!e || e.d === to) return;
        const from = e.d;
        e.d = to;
        pop = id;
        render();
        toastOn(`Moved to ${nice(to)}`, () => {
          e.d = from;
          pop = id;
          render();
        });
      };
      // ---- drag with pointer events ----
      const s = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const rr = (el) => {
        const o = root.getBoundingClientRect();
        const k = s();
        const r = el.getBoundingClientRect();
        return { x: (r.left - o.left) / k, y: (r.top - o.top) / k, w: r.width / k, h: r.height / k };
      };
      let D = null;
      const cellAt = (px, py) => [...grid.children].find((c) => {
        const r = rr(c);
        return px >= r.x && px < r.x + r.w && py >= r.y && py < r.y + r.h;
      });
      const moveDrag = (px, py) => {
        if (!D) return;
        D.g.style.transform = `translate(${px - D.ox}px,${py - D.oy}px) rotate(-1.5deg)`;
        const c = cellAt(px, py);
        if (c !== D.over) {
          D.over && D.over.classList.remove('over');
          D.over = c;
          c && c.classList.add('over');
        }
      };
      const startDrag = (chip, px, py) => {
        if (D) return;
        const r = rr(chip);
        const g = document.createElement('div');
        g.className = 'gh ' + [...chip.classList].find((c) => /^k\d$/.test(c));
        g.textContent = chip.textContent;
        g.style.width = Math.max(r.w, 120) + 'px';
        app.appendChild(g);
        D = { id: +chip.dataset.id, chip, g, ox: Math.min(px - r.x, 40), oy: py - r.y + 2, over: null };
        chip.classList.add('ph');
        moveDrag(px, py);
      };
      const endDrag = () => {
        if (!D) return;
        const { g, id, over } = D;
        D = null;
        g.remove();
        grid.querySelectorAll('.over').forEach((n) => n.classList.remove('over'));
        if (over) move(id, over.dataset.d);
        else render();
      };
      const pos = (e) => {
        const o = root.getBoundingClientRect();
        const k = s();
        return [(e.clientX - o.left) / k, (e.clientY - o.top) / k];
      };
      let pend = null;
      root.addEventListener('pointerdown', (e) => {
        const chip = e.target.closest && e.target.closest('.ev');
        if (!chip || e.button) return;
        pend = { chip, sx: e.clientX, sy: e.clientY };
        try { chip.setPointerCapture(e.pointerId); } catch (x) {}
      });
      root.addEventListener('pointermove', (e) => {
        if (!pend) return;
        if (!D && Math.hypot(e.clientX - pend.sx, e.clientY - pend.sy) > 5) startDrag(pend.chip, ...pos({ clientX: pend.sx, clientY: pend.sy }));
        if (D) moveDrag(...pos(e));
      });
      const up = () => {
        pend = null;
        endDrag();
      };
      root.addEventListener('pointerup', up);
      root.addEventListener('pointercancel', up);
      root.addEventListener('click', (e) => {
        const n = e.target.closest('.ib');
        const c = e.target.closest('.cal');
        if (n) {
          view = new Date(view.getFullYear(), view.getMonth() + +n.dataset.n, 1);
          render();
        } else if (e.target.closest('.today')) {
          view = new Date(2026, 9, 1);
          render();
        } else if (c) {
          const k = +c.dataset.k;
          show[k] = !show[k];
          c.classList.toggle('off', !show[k]);
          c.setAttribute('aria-pressed', String(show[k]));
          render();
        } else if (e.target.closest('.undo')) {
          if (undo) undo();
          undo = null;
          toast.classList.remove('on');
        }
      });
      root.addEventListener('keydown', (e) => {
        const chip = e.target.closest && e.target.closest('.ev');
        const d = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 7, ArrowUp: -7 }[e.key];
        if (!chip || !d) return;
        e.preventDefault();
        const id = +chip.dataset.id;
        const ev = E.find((x) => x.id === id);
        const [y, m, dd] = ev.d.split('-').map(Number);
        move(id, iso(new Date(y, m - 1, dd + d)));
        const again = grid.querySelector(`.ev[data-id="${id}"]`);
        again && again.focus();
      });

      // ---- autoplay: drag Venue walkthrough from Wed 14 to Fri 16, then press Undo ----
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !D;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pt = (el, fx, fy) => {
        const r = rr(el);
        return [r.x + r.w * fx, r.y + r.h * fy];
      };
      const glide = (x0, y0, x1, y1, ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let last = performance.now();
          const step = () => {
            if (!root.isConnected) return res();
            const t = performance.now();
            if (root.dataset.paused) {
              last = t;
              return void setTimeout(step, 120);
            }
            acc += t - last;
            last = t;
            const k = Math.min(1, acc / ms);
            const e = 1 - Math.pow(1 - k, 3);
            fn(x0 + (x1 - x0) * e, y0 + (y1 - y0) * e);
            if (k < 1 && performance.now() > userUntil) requestAnimationFrame(step);
            else res();
          };
          requestAnimationFrame(step);
        });
      const autoDrag = async (id, to) => {
        const chip = grid.querySelector(`.ev[data-id="${id}"]`);
        const cell = grid.querySelector(`.dc[data-d="${to}"]`);
        if (!chip || !cell) return false;
        const [x0, y0] = pt(chip, 0.3, 0.5);
        cur.classList.remove('off');
        cur.style.transform = `translate(${x0}px,${y0}px)`;
        await wait(800);
        if (performance.now() < userUntil || root.dataset.paused) return false;
        cur.classList.add('press');
        await wait(130);
        startDrag(chip, x0, y0);
        cur.style.transition = 'opacity .25s ease';
        const [x1, y1] = pt(cell, 0.4, 0.45);
        await glide(x0, y0, x1, y1, 1000, (x, y) => {
          moveDrag(x, y);
          cur.style.transform = `translate(${x}px,${y}px)`;
        });
        const live = performance.now() >= userUntil;
        if (live) await wait(350);
        endDrag();
        cur.classList.remove('press');
        cur.style.transition = '';
        return live;
      };
      cur.style.transform = 'translate(760px,560px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (view.getMonth() !== 9) {
            view = new Date(2026, 9, 1);
            render();
          }
          const id = E.find((e) => e.t === 'Venue walkthrough').id;
          if (E[id].d !== '2026-10-14') {
            E[id].d = '2026-10-14';
            render();
          }
          if (!(await autoDrag(id, '2026-10-16'))) continue;
          await wait(1700);
          const u = $('.undo');
          const [ux, uy] = pt(u, 0.5, 0.5);
          cur.classList.remove('off');
          cur.style.transform = `translate(${ux}px,${uy}px)`;
          await wait(850);
          if (!idle()) continue;
          cur.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          u.click();
          await wait(3200);
        }
      })();
    },
    prompt: `Build a month calendar screen where events can be dragged to another day, full viewport (height: 100dvh).

Layout: a two-column grid, 232px sidebar and a fluid main column. Sidebar (white, hairline): logo tile and workspace name, a full-width primary New event button, an "Up next" list for today (each item a soft surface pill with a short accent bar, the title and the time), and a Calendars list with colored checkbox swatches (Team, Clients, Personal) that show or hide that calendar's events. Main: a header with the month title (26px, weight 650), previous / next icon buttons, a Today button and a Week / Month / Year segmented control; a row of weekday labels (11px uppercase); then one rounded white card containing a 7-column CSS grid with equal rows (5 or 6, from the month length). Each day cell has hairline borders, a date number (today is a filled accent circle; days from the neighbouring months are muted and show the month on the 1st) and up to three 22px event chips with "+N more" under them. Chips come in three tones: solid accent with white text, accent-soft with accent text and a hairline, and neutral surface with a hairline.

Drag: Pointer Events with a 5px threshold. Dragging creates a ghost chip (position absolute, follows the pointer, slight rotation, soft shadow) and fades the source chip to 28%. The day cell under the pointer gets an accent-soft fill and a 1.5px accent ring. On release the event moves to that date (the chip pops in: scale .7 to 1 with a slight overshoot, 520ms), a toast "Moved to Fri, Oct 16" with an Undo button slides up from the bottom, and Undo restores the old date. Keyboard: with a chip focused, arrow keys move it by a day or a week.

Accessibility: grid with role=grid and cells with aria-label dates, chips focusable, toast role=status, calendar toggles with aria-pressed, prefers-reduced-motion removes the pop. Phone (below 760px): hide the sidebar and the segmented control, shrink chips into 5px color bars under each date. Use your accent color for today and the solid tone. Plain HTML, CSS and JS, no libraries; React-friendly structure (Sidebar, MonthHeader, MonthGrid, DayCell, EventChip, DragGhost, Toast).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 6. Calendar week with a moving now line
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-week',
    cat: 'app-data',
    title: 'Week calendar time grid',
    sub: 'Live now line, click a slot to add',
    html: `
<div class="app">
  <header class="top">
    <span class="brand"><span class="mark">${I(P.cal, 16)}</span>Solace Studio</span>
    <h1 class="wt">Oct 12 - 18, 2026</h1>
    <div class="nv"><button class="ib" type="button" aria-label="Previous week">${I(P.chevL, 18)}</button><button class="ib" type="button" aria-label="Next week">${I(P.chevR, 18)}</button></div>
    <button class="btn" type="button">Today</button>
    <span class="grow"></span>
    <span class="seg"><button type="button">Day</button><button class="on" type="button">Week</button><button type="button">Month</button></span>
    <span class="avs"><span class="av">MR</span><span class="av t1">TL</span><span class="av t2">AT</span></span>
  </header>
  <div class="cal">
    <div class="dh"><span class="gut"></span></div>
    <div class="sc" tabindex="0" aria-label="Week schedule">
      <div class="body"><div class="hrs" aria-hidden="true"></div><div class="days"></div><div class="nl" aria-hidden="true"><span class="nt tn"></span><i></i></div></div>
    </div>
  </div>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .app{--hh:56px;position:relative}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 24px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .top h1{margin-left:18px;font-size:22px;white-space:nowrap}
.d .nv{display:flex;gap:2px}
.d .ib{display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer}
.d .ib:hover{background:var(--ml-surface)}
.d .grow{flex:1}
.d .seg{display:inline-flex;padding:3px;border-radius:11px;background:rgba(227,233,242,.6)}
.d .seg button{height:30px;padding:0 14px;border:0;border-radius:8px;background:none;font-size:13px;font-weight:600;color:var(--ml-muted);cursor:pointer}
.d .seg button.on{background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.08);color:var(--ml-ink)}
.d .avs{display:flex}
.d .avs .av{width:30px;height:30px;margin-left:-8px;box-shadow:0 0 0 2px var(--ml-bg)}
.d .avs .av:first-child{margin-left:0}
.d .cal{display:flex;flex:1;flex-direction:column;min-height:0;background:var(--ml-bg)}
.d .dh{display:grid;flex:none;grid-template-columns:58px repeat(7,minmax(0,1fr));border-bottom:1px solid var(--ml-line)}
.d .dhc{display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 0 9px;border-left:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .dhc b{display:grid;place-items:center;width:32px;height:32px;border-radius:50%;font-size:17px;font-weight:600;letter-spacing:-.01em;text-transform:none;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .dhc.today{color:var(--ml-accent-ink)}
.d .dhc.today b{background:var(--ml-accent);color:#fff}
.d .sc{flex:1;min-height:0;overflow-y:auto;outline:0;scrollbar-width:thin}
.d .body{position:relative;display:grid;grid-template-columns:58px minmax(0,1fr);grid-template-rows:minmax(0,1fr);height:100%;min-height:calc(var(--hh) * 10 + 28px);padding:12px 0 16px}
.d .hrs{position:relative}
.d .hrs span{position:absolute;right:10px;transform:translateY(-50%);font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr))}
.d .col{position:relative;border-left:1px solid var(--ml-line);background-image:linear-gradient(to bottom,transparent calc(100% - 1px),var(--ml-line) calc(100% - 1px));background-size:100% 10%;background-position:0 0;cursor:cell}
.d .col.we{background-color:rgba(244,247,252,.55)}
.d .ev{position:absolute;overflow:hidden;padding:5px 8px;border-radius:9px;background:var(--ml-accent);color:#fff;font-size:12px;line-height:1.3;cursor:default;transform-origin:50% 0;transition:opacity .25s ease,transform .25s ease}
.d .ev.new{animation:wk-in 480ms var(--ml-spring) both}
.d .ev.s{display:flex;align-items:baseline;gap:8px;padding-top:4px;padding-bottom:0;white-space:nowrap}
.d .ev.s b{display:inline;flex:0 1 auto}
.d .ev.s small{display:inline;flex:0 10 auto;min-width:0;overflow:hidden}
.d .ev b{display:block;overflow:hidden;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .ev small{display:block;font:500 11px/1.3 var(--ml-mono);opacity:.8}
.d .ev.k1{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .ev.k2{background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2)}
.d .ev.bye{opacity:0;transform:scale(.92)}
.d .ev input{width:100%;border:0;outline:0;background:none;font:600 12px/1.3 var(--ml-font);color:inherit}
.d .ev input::placeholder{color:rgba(255,255,255,.7)}
.d .ev .x{position:absolute;top:4px;right:4px;display:grid;place-items:center;width:20px;height:20px;border:0;border-radius:6px;background:rgba(255,255,255,.2);color:inherit;opacity:0;cursor:pointer;transition:opacity .15s ease}
.d .ev:hover .x,.d .ev.hot .x{opacity:1}
.d .nl{position:absolute;left:0;right:0;top:12px;z-index:5;height:0;pointer-events:none;will-change:transform}
.d .nl i{position:absolute;left:58px;right:0;top:-1px;height:2px;background:var(--ml-accent)}
.d .nl i::before{content:"";position:absolute;left:calc(var(--tx,0) * 1px);top:-4px;width:10px;height:10px;margin-left:-5px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px #fff}
.d .nt{position:absolute;left:6px;top:-10px;display:grid;place-items:center;width:46px;height:20px;border-radius:7px;background:var(--ml-accent);color:#fff;font:600 11px/1 var(--ml-mono)}
@keyframes wk-in{from{opacity:0;transform:scaleY(.4)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .brand,.d .seg,.d .avs,.d .top .btn,.d .nv{display:none}
  .d .top{padding:0 16px}
  .d .top h1{margin-left:0;font-size:20px}
  .d .dh{grid-template-columns:44px repeat(3,minmax(0,1fr))}
  .d .body{grid-template-columns:44px minmax(0,1fr)}
  .d .days{grid-template-columns:repeat(3,minmax(0,1fr))}
  .d .hs{display:none}
  .d .nl i{left:44px}
  .d .nt{width:38px}
}
@media (prefers-reduced-motion: reduce){.d .ev.new{animation:none}}`,
    run: (root) => {
      const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const DATE0 = 12;
      const TODAY_I = 2;
      const H0 = 8;
      const H1 = 18;
      const hh = () => cols[0].offsetHeight / (H1 - H0) || 56;
      // [day, start "h:mm", minutes, title, tone]
      const hm = (t) => {
        const [h, m] = t.split(':').map(Number);
        return h * 60 + m;
      };
      const E = [
        [0, '9:00', 45, 'Weekly planning', 0], [0, '11:00', 60, 'Solace review', 1], [0, '14:00', 120, 'Focus time', 2],
        [1, '10:00', 60, 'Design critique', 0], [1, '12:30', 60, 'Client lunch', 1], [1, '15:00', 30, '1:1 with Priya', 0],
        [2, '9:00', 30, 'Standup', 0], [2, '10:30', 90, 'Venue walkthrough', 1], [2, '11:00', 30, 'Meridian check-in', 0], [2, '13:30', 60, 'Roadmap review', 0],
        [3, '9:30', 90, 'Hiring panel', 0], [3, '14:00', 60, 'Kestrel onboarding', 1],
        [4, '10:00', 60, 'Team demo', 0], [4, '13:00', 60, 'Solace review', 1], [4, '16:30', 30, 'Weekly wrap', 0],
        [5, '8:00', 120, 'Trail run', 2],
      ].map(([d, s, m, t, k]) => ({ d, s: hm(s), m, t, k }));
      const $ = (s) => root.querySelector(s);
      const sc = $('.sc');
      const body = $('.body');
      const cur = $('.cur');
      const fmt = (min) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, '0')}`;
      $('.hrs').innerHTML = Array.from({ length: H1 - H0 + 1 }, (_, i) => `<span style="top:${(i * 100) / (H1 - H0)}%">${(H0 + i) % 12 || 12} ${H0 + i < 12 ? 'AM' : 'PM'}</span>`).join('');
      const hidden = (i) => (i === 1 || i === 2 || i === 3 ? '' : ' hs');
      $('.dh').insertAdjacentHTML('beforeend', DAYS.map((n, i) => `<div class="dhc${i === TODAY_I ? ' today' : ''}${hidden(i)}"><span>${n}</span><b>${DATE0 + i}</b></div>`).join(''));
      $('.days').innerHTML = DAYS.map((n, i) => `<div class="col${i > 4 ? ' we' : ''}${hidden(i)}" data-d="${i}" role="group" aria-label="${n} ${DATE0 + i} October"></div>`).join('');
      const cols = [...root.querySelectorAll('.col')];
      let uid = 0;
      const place = (e, fresh) => {
        const el = document.createElement('div');
        el.className = `ev k${e.k}${fresh ? ' new' : ''}${e.m <= 30 ? ' s' : ''}`;
        el.dataset.id = e.id = ++uid;
        el.style.top = `calc(${((e.s - H0 * 60) / ((H1 - H0) * 60)) * 100}% + 1px)`;
        el.style.height = `calc(${(e.m / ((H1 - H0) * 60)) * 100}% - 2px)`;
        el.style.left = `calc(${(e.l / e.n) * 100}% + 3px)`;
        el.style.width = `calc(${100 / e.n}% - 6px)`;
        el.innerHTML = `<b>${e.t}</b><small>${fmt(e.s)} - ${fmt(e.s + e.m)}</small><button class="x" type="button" aria-label="Delete ${e.t}"><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg></button>`;
        cols[e.d].appendChild(el);
        return el;
      };
      // lanes so overlapping events sit side by side
      const lanes = (list) => {
        const arr = list.slice().sort((a, b) => a.s - b.s || b.m - a.m);
        let cl = [];
        let end = 0;
        const flush = () => {
          const n = Math.max(0, ...cl.map((x) => x.l)) + 1;
          cl.forEach((x) => (x.n = n));
          cl = [];
        };
        arr.forEach((e) => {
          if (cl.length && e.s >= end) {
            flush();
            end = 0;
          }
          const used = cl.filter((c) => c.s + c.m > e.s).map((c) => c.l);
          let l = 0;
          while (used.includes(l)) l++;
          e.l = l;
          cl.push(e);
          end = Math.max(end, e.s + e.m);
        });
        flush();
      };
      DAYS.forEach((_, d) => lanes(E.filter((e) => e.d === d)));
      E.forEach((e) => {
        place(e);
      });
      // now line
      let M = hm('10:42');
      const nl = $('.nl');
      const nt = $('.nt');
      const paintNow = () => {
        nl.style.transform = `translateY(${((M - H0 * 60) / 60) * hh()}px)`;
        nt.textContent = fmt(M);
        const c = cols[TODAY_I];
        nl.style.setProperty('--tx', c.offsetLeft + c.offsetWidth / 2 - $('.days').offsetLeft + 'px');
      };
      paintNow();
      if (window.ResizeObserver) new ResizeObserver(paintNow).observe(body);
      (function loop() {
        setTimeout(() => {
          if (!root.isConnected) return;
          if (!root.dataset.paused) {
            M += 2;
            if (M > hm('17:40')) M = hm('10:42');
            paintNow();
          }
          loop();
        }, 1000);
      })();
      // create / edit / delete
      const s = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const slot = (d, min, title) => {
        const col = cols[d];
        const e = { d, s: Math.max(H0 * 60, Math.min(H1 * 60 - 60, min)), m: 60, t: title || '', k: 0, l: 0, n: 1 };
        const el = place(e, true);
        el.classList.add('hot');
        const b = el.querySelector('b');
        const inp = document.createElement('input');
        inp.placeholder = 'New event';
        inp.value = '';
        inp.setAttribute('aria-label', 'Event title');
        b.replaceChildren(inp);
        inp.focus();
        const done = (keep) => {
          el.classList.remove('hot');
          const v = inp.value.trim();
          if (!keep || !v) return kill(el);
          e.t = v;
          b.textContent = v;
        };
        inp.addEventListener('keydown', (ev) => {
          if (ev.key === 'Enter') done(true);
          else if (ev.key === 'Escape') done(false);
        });
        inp.addEventListener('blur', () => el.isConnected && el.classList.contains('hot') && done(true));
        return { el, inp, done };
      };
      const kill = (el) => {
        el.classList.add('bye');
        setTimeout(() => el.remove(), 260);
      };
      root.addEventListener('click', (ev) => {
        const x = ev.target.closest && ev.target.closest('.x');
        if (x) return kill(x.closest('.ev'));
        const col = ev.target.closest && ev.target.closest('.col');
        if (!col || ev.target.closest('.ev')) return;
        const o = body.getBoundingClientRect();
        const y = (ev.clientY - o.top) / s() - 12;
        const min = H0 * 60 + Math.floor((y / hh()) * 2) * 30;
        slot(+col.dataset.d, min);
      });
      // Autoplay: click an empty Thursday slot, type a title, Enter, then delete it with the x.
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
      const rr = (el) => {
        const o = root.getBoundingClientRect();
        const k = s();
        const r = el.getBoundingClientRect();
        return { x: (r.left - o.left) / k, y: (r.top - o.top) / k, w: r.width / k, h: r.height / k };
      };
      const goto = (x, y) => {
        cur.style.transform = `translate(${x}px,${y}px)`;
      };
      cur.style.transform = 'translate(760px,600px)';
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const d = 3;
          const col = cols[d];
          const min = hm('12:00');
          const r = rr(col);
          const colY = rr(body).y + 12 + ((min - H0 * 60) / 60) * hh();
          const vis = col.offsetParent !== null;
          cur.classList.toggle('off', !vis);
          goto(r.x + r.w * 0.45, colY + 10);
          await wait(1000);
          if (!idle()) continue;
          cur.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          const { el, inp, done } = slot(d, min);
          let ok = true;
          for (const ch of 'Design review') {
            if (!idle()) {
              ok = false;
              break;
            }
            inp.value += ch;
            await wait(85);
          }
          if (!ok) {
            done(true);
            continue;
          }
          await wait(250);
          done(true);
          await wait(2200);
          if (!idle() || !el.isConnected) continue;
          const x = el.querySelector('.x');
          el.classList.add('hot');
          const xr = rr(x);
          goto(xr.x + xr.w * 0.5, xr.y + xr.h * 0.5);
          await wait(900);
          if (idle()) {
            cur.classList.add('press');
            await wait(130);
            cur.classList.remove('press');
            x.click();
          }
          el.classList.remove('hot');
          await wait(3500);
        }
      })();
    },
    prompt: `Build a week calendar with a time grid, a live "now" line and click-to-create, full viewport (height: 100dvh).

Layout: a 64px header (logo tile and workspace name, the range title "Oct 12 - 18, 2026", previous / next icon buttons, a Today button, a Day / Week / Month segmented control, a small avatar stack). Under it a day-header row on a grid of a 58px time gutter plus seven equal columns: a small uppercase weekday and a 32px date circle (today is a filled accent circle). Below that a scroll region holding the time grid: hours 8 AM to 6 PM at 56px per hour, hour labels in a mono font in the gutter, hairline hour lines drawn with a repeating-linear-gradient on each day column, weekend columns tinted. Events are absolutely positioned: top = (start minutes - 480) / 60 * 56px, height = duration / 60 * 56px minus 2px, 9px radius, title plus a mono time range. Three tones: solid accent with white text, accent-soft with a hairline, neutral surface. Overlapping events share the column side by side (assign lanes by sorting on start time and splitting the width).

Now line: a 2px accent line across the grid at today's current time with a dot on today's column and a small time pill in the gutter. Move it with transform: translateY(...) only, recomputed every minute (the demo ticks faster). Click-to-create: clicking an empty spot in a column creates a one-hour event snapped to 30 minutes with an inline title input focused (Enter saves, Escape or empty removes it); it enters with scaleY .4 to 1 from its top edge on the critically damped spring (587ms). Hovering an event shows a small delete button; deleting fades and shrinks it out.

Accessibility: each day column has role=group and an aria-label with the date, the schedule region is focusable, the title input has an aria-label, prefers-reduced-motion removes the entrance. Phone (below 760px): show three day columns, hide the segmented control, avatars and navigation. Use your accent color for today and the solid tone. Plain HTML, CSS and JS, no libraries; React-friendly structure (CalendarHeader, DayHeader, TimeGrid, DayColumn, EventBlock, NowLine).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 7. Gantt timeline with dependencies
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-gantt',
    cat: 'app-data',
    title: 'Gantt timeline',
    sub: 'Move a bar, its dependents follow',
    html: `
<div class="app">
  <header class="top">
    <div class="tt"><span class="mark">${I(P.layers, 16)}</span><div><h1>Menu app launch</h1><p class="sub">Lumen Labs - Oct 5 to Nov 16 - 9 tasks</p></div></div>
    <div class="tr">
      <button class="swt on" type="button" role="switch" aria-checked="true"><span class="knob"></span>Dependencies</button>
      <span class="seg"><button type="button">Day</button><button class="on" type="button">Week</button><button type="button">Month</button></span>
      <button class="cta" type="button">${I(P.plus, 16)}Add task</button>
    </div>
  </header>
  <section class="card gt">
    <div class="gl">
      <div class="gh2"><span>Task</span></div>
      <div class="gr"></div>
    </div>
    <div class="tl">
      <div class="cv">
        <div class="gh3"><div class="wk"></div><div class="dy"></div></div>
        <div class="gb">
          <div class="bg"></div>
          <svg class="dep" aria-hidden="true"></svg>
          <div class="bars"></div>
        </div>
      </div>
    </div>
  </section>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .top{display:flex;flex:none;align-items:center;justify-content:space-between;gap:16px;padding:22px 28px 18px}
.d .tt{display:flex;align-items:center;gap:14px;min-width:0}
.d .tt .mark{width:38px;height:38px;border-radius:12px}
.d .tt h1{font-size:24px}
.d .tr{display:flex;align-items:center;gap:12px}
.d .swt{display:inline-flex;align-items:center;gap:9px;height:36px;padding:0 12px 0 8px;border:0;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;white-space:nowrap}
.d .knob{position:relative;width:30px;height:18px;border-radius:99px;background:var(--ml-bar);transition:background-color .25s ease}
.d .knob::after{content:"";position:absolute;left:2px;top:2px;width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .swt.on .knob{background:var(--ml-accent)}
.d .swt.on .knob::after{transform:translateX(12px)}
.d .seg{display:inline-flex;padding:3px;border-radius:11px;background:rgba(227,233,242,.6)}
.d .seg button{height:30px;padding:0 13px;border:0;border-radius:8px;background:none;font-size:13px;font-weight:600;color:var(--ml-muted);cursor:pointer}
.d .seg button.on{background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.08);color:var(--ml-ink)}
.d .gt{display:grid;flex:1 1 auto;grid-template-columns:262px minmax(0,1fr);min-height:0;margin:0 28px 26px;overflow-x:hidden;overflow-y:auto;scrollbar-width:thin;align-items:start}
.d .gl{position:relative;z-index:3;border-right:1px solid var(--ml-line);background:var(--ml-bg)}
.d .gh2{position:sticky;top:0;z-index:4;display:flex;align-items:flex-end;height:58px;padding:0 18px 10px;background:rgba(244,247,252,.96);border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .lr{display:flex;align-items:center;gap:10px;height:var(--rh,54px);padding:0 16px 0 18px;border-bottom:1px solid var(--ml-line);transition:background-color .2s ease}
.d .lr:last-child{border-bottom:0}
.d .lr.hot{background:var(--ml-accent-soft)}
.d .lr p{display:flex;flex:1;flex-direction:column;min-width:0;line-height:1.25}
.d .lr b{overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .lr small{font:500 11.5px/1.2 var(--ml-mono);color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .lr .av{width:24px;height:24px;font-size:10px}
.d .tl{position:relative;min-width:0}
.d .cv{position:relative}
.d .gh3{position:sticky;top:0;z-index:4;height:58px;background:rgba(244,247,252,.96);border-bottom:1px solid var(--ml-line)}
.d .wk{display:flex;height:28px}
.d .wk span{flex:none;overflow:hidden;padding:7px 0 0 8px;border-left:1px solid var(--ml-line);font-size:12px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap}
.d .dy{display:flex;height:30px}
.d .dy span{flex:none;display:grid;place-items:center;font:500 10px/1 var(--ml-mono);color:var(--ml-muted)}
.d .dy span.td{color:var(--ml-accent-ink);font-weight:700}
.d .gb{position:relative}
.d .bg{position:absolute;inset:0}
.d .we{position:absolute;top:0;bottom:0;background:rgba(244,247,252,.8)}
.d .tdc{position:absolute;top:0;bottom:0;background:var(--ml-accent-soft);opacity:.6}
.d .tdl{position:absolute;top:0;bottom:0;z-index:2;width:2px;margin-left:-1px;background:var(--ml-accent)}
.d .tdl span{position:absolute;left:50%;top:6px;transform:translateX(-50%);padding:4px 8px;border-radius:7px;background:var(--ml-accent);color:#fff;font-size:11px;font-weight:650;white-space:nowrap}
.d .hl{position:absolute;left:0;right:0;height:1px;background:var(--ml-line)}
.d .dep{position:absolute;left:0;top:0;width:100%;height:100%;overflow:visible;pointer-events:none;transition:opacity .3s ease}
.d .app.nodep .dep{opacity:0}
.d .dep path{fill:none;stroke:var(--ml-accent-2);stroke-width:1.6;stroke-linejoin:round;stroke-linecap:round;opacity:.85}
.d .dep .ar{fill:var(--ml-accent-2);stroke:none}
.d .bars{position:absolute;inset:0}
.d .bar{position:absolute;left:0;top:0;height:28px;border-radius:9px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);cursor:grab;touch-action:pan-y;user-select:none;will-change:transform}
.d .bar:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .bar.drag{cursor:grabbing;box-shadow:inset 0 0 0 1px var(--ml-accent),0 8px 18px rgba(255,68,51,.28)}
.d .fill{position:absolute;inset:0;border-radius:9px;background:var(--ml-grad);transform-origin:0 50%;pointer-events:none}
.d .pc{position:absolute;left:9px;top:0;font:600 11px/28px var(--ml-mono);color:#fff;pointer-events:none}
.d .bar.lo .pc{color:var(--ml-accent-ink)}
.d .bar .av{position:absolute;left:100%;top:2px;width:24px;height:24px;margin-left:7px;font-size:10px;box-shadow:0 0 0 2px var(--ml-bg)}
.d .bar.ms{background:none;box-shadow:none;width:22px}
.d .dm{position:absolute;left:2px;top:3px;width:18px;height:18px;border-radius:5px;background:var(--ml-accent);transform:rotate(45deg) scale(.85);box-shadow:0 4px 10px rgba(255,68,51,.35)}
.d .bar.ms .av{margin-left:10px}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{padding:18px 16px 14px}
  .d .tt .mark,.d .seg,.d .cta,.d .tt .sub{display:none}
  .d .tt h1{font-size:20px}
  .d .gt{grid-template-columns:118px minmax(0,1fr);margin:0 16px 20px}
  .d .gh2{padding:0 12px 10px}
  .d .lr{padding:0 8px 0 12px}
  .d .lr small,.d .lr .av{display:none}
  .d .lr b{font-size:12.5px}
  .d .tl{overflow-x:auto;scrollbar-width:thin}
}`,
    run: (root) => {
      const N = 46;
      let RH = 54;
      const D0 = 5; // day 0 = Mon 5 Oct 2026
      const TODAY = 9; // Wed 14 Oct
      const T = [
        ['Research and scope', 'MR', 0, 5, 1, []], ['UX flows', 'AT', 7, 5, 0.7, [0]], ['Visual design', 'AT', 14, 5, 0.1, [1]],
        ['API and data model', 'DO', 7, 7, 0.5, [0]], ['Integrations', 'LO', 14, 7, 0, [3]], ['Build core screens', 'HK', 21, 8, 0, [2, 4]],
        ['QA and bug bash', 'SW', 29, 5, 0, [5]], ['Beta with 12 stores', 'PN', 35, 5, 0, [6]], ['Launch', 'MR', 42, 1, 0, [7], true],
      ].map(([n, o, s, d, p, dep, ms], i) => ({ i, n, o, base: s, d, p, dep, ms: !!ms, ts: s, x: s }));
      const $ = (q) => root.querySelector(q);
      const app = $('.app');
      const tl = $('.tl');
      const cur = $('.cur');
      const bars = $('.bars');
      const svg = $('.dep');
      let W = 20;
      const date = (i) => {
        const d = new Date(2026, 9, D0 + i);
        return `${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][d.getMonth()]} ${d.getDate()}`;
      };
      const range = (t) => (t.ms ? date(t.ts) : `${date(t.ts)} - ${date(t.ts + t.d - 1)}`);
      $('.gr').innerHTML = T.map((t) => `<div class="lr" data-i="${t.i}"><p><b>${t.n}</b><small></small></p><span class="av t${t.i % 3}">${t.o}</span></div>`).join('');
      bars.innerHTML = T.map((t) => `<div class="bar${t.ms ? ' ms' : ''}${t.p < 0.5 ? ' lo' : ''}" data-i="${t.i}" tabindex="0" role="slider" aria-label="${t.n}, starts ${date(t.base)}. Arrow keys shift it by a day." aria-valuemin="0" aria-valuemax="${N}" aria-valuenow="${t.base}">${t.ms ? '<i class="dm"></i>' : `<span class="fill" style="transform:scaleX(${t.p})"></span><span class="pc">${t.p ? Math.round(t.p * 100) + '%' : ''}</span>`}<span class="av t${t.i % 3}">${t.o}</span></div>`).join('');
      T.forEach((t) => {
        t.el = bars.children[t.i];
        t.sm = root.querySelectorAll('.lr small')[t.i];
        t.row = root.querySelectorAll('.lr')[t.i];
      });
      const layout = () => {
        RH = Math.max(54, Math.floor(($('.gt').clientHeight - 58) / T.length));
        $('.gt').style.setProperty('--rh', RH + 'px');
        W = Math.max(root.offsetWidth < 761 ? 18 : 12, Math.floor(tl.clientWidth / N));
        $('.cv').style.width = N * W + 'px';
        $('.gb').style.height = T.length * RH + 'px';
        let wk = '';
        for (let w = 0; w * 7 < N; w++) wk += `<span style="width:${Math.min(7, N - w * 7) * W}px">${date(w * 7)}</span>`;
        $('.wk').innerHTML = wk;
        $('.dy').innerHTML = Array.from({ length: N }, (_, i) => `<span class="${i === TODAY ? 'td' : ''}" style="width:${W}px">${'MTWTFSS'[i % 7]}</span>`).join('');
        let bg = '';
        for (let i = 0; i < N; i++) if (i % 7 > 4) bg += `<div class="we" style="left:${i * W}px;width:${W}px"></div>`;
        bg += `<div class="tdc" style="left:${TODAY * W}px;width:${W}px"></div><div class="tdl" style="left:${(TODAY + 0.5) * W}px"><span>Today</span></div>`;
        for (let r = 1; r < T.length; r++) bg += `<div class="hl" style="top:${r * RH - 1}px"></div>`;
        $('.bg').innerHTML = bg;
        T.forEach((t) => {
          t.el.style.width = (t.ms ? 22 : t.d * W - 4) + 'px';
        });
        draw();
      };
      const px = (t) => t.x * W + (t.ms ? W / 2 - 11 : 2);
      const draw = () => {
        let p = '';
        T.forEach((t) => {
          t.el.style.transform = `translate(${px(t)}px,${t.i * RH + (RH - 28) / 2}px)`;
          t.dep.forEach((a) => {
            const A = T[a];
            const x1 = (A.x + A.d) * W - 2;
            const y1 = A.i * RH + RH / 2;
            const x2 = px(t) - 2;
            const y2 = t.i * RH + RH / 2;
            const ym = y1 + (y2 > y1 ? 1 : -1) * (RH / 2);
            p += x2 - x1 >= 20
              ? `<path d="M${x1},${y1} H${x1 + 9} V${y2} H${x2 - 5}"/>`
              : `<path d="M${x1},${y1} H${x1 + 9} V${ym} H${x2 - 10} V${y2} H${x2 - 5}"/>`;
            p += `<path class="ar" d="M${x2 - 6},${y2 - 4} L${x2},${y2} L${x2 - 6},${y2 + 4} Z"/>`;
          });
        });
        svg.innerHTML = p;
      };
      let running = false;
      let last = 0;
      const tick = () => {
        if (!root.isConnected) return void (running = false);
        if (root.dataset.paused) return void setTimeout(tick, 200);
        const now = performance.now();
        const dt = Math.min(64, last ? now - last : 16);
        last = now;
        const k = 1 - Math.exp(-dt / 85);
        let moving = false;
        T.forEach((t) => {
          const dx = t.ts - t.x;
          if (Math.abs(dx) > 0.004) {
            t.x += dx * k;
            moving = true;
          } else t.x = t.ts;
        });
        draw();
        if (moving) requestAnimationFrame(tick);
        else {
          running = false;
          last = 0;
        }
      };
      const kick = () => {
        if (running) return;
        running = true;
        last = 0;
        requestAnimationFrame(tick);
      };
      const recompute = () => {
        T.forEach((t) => {
          const need = Math.max(0, ...t.dep.map((a) => T[a].ts + T[a].d));
          t.ts = Math.max(t.base, need);
          t.sm.textContent = range(t);
          t.el.setAttribute('aria-valuenow', t.ts);
          t.row.classList.toggle('hot', t.ts !== t.base || t.el.classList.contains('drag'));
        });
        kick();
      };
      const setBase = (i, v) => {
        const t = T[i];
        t.base = Math.max(0, Math.min(N - t.d, v));
        recompute();
      };
      layout();
      T.forEach((t) => (t.x = t.ts));
      recompute();
      draw();
      if (window.ResizeObserver) {
        const ro = new ResizeObserver(() => layout());
        ro.observe(tl);
        ro.observe($('.gt'));
      }
      $('.swt').addEventListener('click', (e) => {
        const on = !app.classList.toggle('nodep');
        e.currentTarget.classList.toggle('on', on);
        e.currentTarget.setAttribute('aria-checked', String(on));
      });
      const s = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      let pend = null;
      root.addEventListener('pointerdown', (e) => {
        const b = e.target.closest && e.target.closest('.bar');
        if (!b || e.button) return;
        const t = T[+b.dataset.i];
        pend = { t, sx: e.clientX, b0: t.base };
        b.classList.add('drag');
        try { b.setPointerCapture(e.pointerId); } catch (x) {}
      });
      root.addEventListener('pointermove', (e) => {
        if (pend) setBase(pend.t.i, pend.b0 + Math.round((e.clientX - pend.sx) / s() / W));
      });
      const up = () => {
        if (pend) pend.t.el.classList.remove('drag');
        pend = null;
        recompute();
      };
      root.addEventListener('pointerup', up);
      root.addEventListener('pointercancel', up);
      root.addEventListener('keydown', (e) => {
        const b = e.target.closest && e.target.closest('.bar');
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!b || !d) return;
        e.preventDefault();
        const t = T[+b.dataset.i];
        setBase(t.i, t.base + d);
      });

      // Autoplay: drag "API and data model" 3 days later (its dependents follow), then drag it back.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !pend;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const rr = (el) => {
        const o = root.getBoundingClientRect();
        const k = s();
        const r = el.getBoundingClientRect();
        return { x: (r.left - o.left) / k, y: (r.top - o.top) / k, w: r.width / k, h: r.height / k };
      };
      const glide = (x0, x1, ms, fn) =>
        new Promise((res) => {
          let acc = 0;
          let l = performance.now();
          const step = () => {
            if (!root.isConnected) return res();
            const t = performance.now();
            if (root.dataset.paused) {
              l = t;
              return void setTimeout(step, 120);
            }
            acc += t - l;
            l = t;
            const k = Math.min(1, acc / ms);
            fn(x0 + (x1 - x0) * (1 - Math.pow(1 - k, 3)));
            if (k < 1 && performance.now() > userUntil) requestAnimationFrame(step);
            else res();
          };
          requestAnimationFrame(step);
        });
      const dragBy = async (i, days) => {
        const t = T[i];
        const r = rr(t.el);
        const x0 = r.x + r.w * 0.5;
        const y0 = r.y + r.h * 0.5;
        const vis = t.el.offsetParent !== null && r.x > 0 && r.x + r.w < root.offsetWidth;
        cur.classList.toggle('off', !vis);
        cur.style.transform = `translate(${x0}px,${y0}px)`;
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        t.el.classList.add('drag');
        const b0 = t.base;
        await wait(130);
        cur.style.transition = 'opacity .25s ease';
        await glide(x0, x0 + days * W, 1000, (x) => {
          setBase(i, b0 + Math.round((x - x0) / W));
          cur.style.transform = `translate(${x}px,${y0}px)`;
        });
        t.el.classList.remove('drag');
        cur.classList.remove('press');
        cur.style.transition = '';
        recompute();
        return performance.now() >= userUntil;
      };
      cur.style.transform = 'translate(760px,640px)';
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await dragBy(3, 3))) continue;
          await wait(2000);
          if (!(await dragBy(3, -3))) continue;
          await wait(2600);
        }
      })();
    },
    prompt: `Build a Gantt timeline screen with dependency lines, drag-to-reschedule and automatic cascading, full viewport (height: 100dvh).

Layout: a header with a small logo tile, the project title ("Menu app launch"), one line of dates and task count, a "Dependencies" switch, a Day / Week / Month segmented control and a primary Add task button. Below, one white card containing a 2-column grid: a 262px task list (sticky 58px header "Task", then 46px rows with the task name, its date range in a mono tabular font and an owner avatar) and the timeline. The timeline is one wide canvas sized to days x dayWidth (dayWidth = floor(width / days), never below 18px; below that the area scrolls horizontally): a sticky two-tier header (week labels with a left hairline, then a row of weekday initials), weekend columns tinted, today's column washed in accent-soft with a 2px accent line and a "Today" pill, and hairlines between rows. Each task is an absolutely positioned 26px bar: accent-soft track with a hairline, an accent fill scaled to the progress with the percentage in mono, and the owner avatar after its right end. A milestone is a rotated rounded square. Dependencies are SVG elbow paths from a predecessor's right end to the successor's left edge (horizontal 9px, vertical, horizontal) with a small triangular arrowhead; if the successor starts too early route the line down and around.

Behavior: each task keeps a planned start; its rendered start is max(planned start, end of every predecessor), so moving a bar later pushes dependents and moving it back lets them return. Drag with Pointer Events (snap to whole days, the dragged bar gets a stronger ring and shadow); bars follow with a critically damped smoothing (time constant about 85ms) and the dependency paths and date ranges update on every frame. Arrow keys on a focused bar shift it by a day. The Dependencies switch fades the lines out.

Accessibility: bars are focusable role=slider with an aria-label that includes the start date, the switch has role=switch and aria-checked. Phone (below 760px): shrink the list to 118px with names only and let the timeline scroll horizontally. Use your accent color for bars and today. Plain HTML, CSS and JS, no libraries; React-friendly structure (TaskList, TimelineHeader, TimelineGrid, TaskBar, DependencyLayer).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 8. File manager with grid / list FLIP and a preview pane
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-files',
    cat: 'app-data',
    title: 'File manager with preview',
    sub: 'Grid and list glide, preview follows',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.folder, 16)}</span>Solace Studio</div>
    <button class="cta wide" type="button">${I(P.upload, 16)}Upload</button>
    <nav class="nav" aria-label="Locations">
      <button class="vw on" type="button">${I(P.folder, 18)}All files<em>12</em></button>
      <button class="vw" type="button">${I(P.clock, 18)}Recent</button>
      <button class="vw" type="button">${I(P.users, 18)}Shared</button>
      <button class="vw" type="button">${I(P.star, 18)}Starred</button>
    </nav>
    <div class="store"><p><span>Storage</span><b>74.6 GB of 100</b></p><i><s></s></i></div>
  </aside>
  <main class="main">
    <div class="bar">
      <p class="crumb"><span>All files</span>${I(P.chevR, 14)}<span>Brand</span>${I(P.chevR, 14)}<b>Q4 campaign</b></p>
      <label class="search">${I(P.search, 16)}<input class="q" type="search" placeholder="Search files" aria-label="Search files"></label>
      <span class="tgl" role="group" aria-label="View"><button class="on" type="button" data-v="grid" aria-label="Grid view" aria-pressed="true">${I(P.grid, 17)}</button><button type="button" data-v="list" aria-label="List view" aria-pressed="false">${I(P.list, 17)}</button></span>
    </div>
    <div class="fm" role="listbox" aria-label="Files" aria-multiselectable="true"></div>
  </main>
  <aside class="pv" aria-label="Preview"><div class="pvc"></div></aside>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .app{display:grid;grid-template-columns:216px minmax(0,1fr) 304px}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .side .brand{padding:2px 6px 20px}
.d .wide{width:100%;margin-bottom:18px}
.d .nav{display:flex;flex-direction:column;gap:2px}
.d .vw{display:flex;align-items:center;gap:10px;width:100%;height:38px;padding:0 10px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;cursor:pointer;transition:background-color .2s ease}
.d .vw:hover{background:var(--ml-surface)}
.d .vw svg{flex:none;color:var(--ml-muted)}
.d .vw em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .vw.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:600}
.d .vw.on svg{color:var(--ml-accent)}
.d .vw.on em{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .store{margin-top:auto;padding:12px;border-radius:12px;background:var(--ml-surface)}
.d .store p{display:flex;justify-content:space-between;font-size:12px;color:var(--ml-muted)}
.d .store b{font-weight:600;color:var(--ml-ink)}
.d .store i{display:block;height:6px;margin-top:8px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .store s{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.746);transform-origin:0 50%}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .bar{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 22px;border-bottom:1px solid var(--ml-line);background:var(--ml-bg)}
.d .crumb{display:flex;align-items:center;gap:6px;margin-right:auto;font-size:14px;color:var(--ml-muted);white-space:nowrap}
.d .crumb svg{color:var(--ml-bar)}
.d .crumb b{font-weight:650;color:var(--ml-ink)}
.d .bar .search{width:200px}
.d .tgl{display:inline-flex;padding:3px;border-radius:11px;background:rgba(227,233,242,.6)}
.d .tgl button{display:grid;place-items:center;width:34px;height:30px;border:0;border-radius:8px;background:none;color:var(--ml-muted);cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .tgl button.on{background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.08);color:var(--ml-accent-ink)}
.d .fm{display:grid;flex:1;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:14px;align-content:start;min-height:0;padding:20px 22px;overflow-y:auto;scrollbar-width:thin}
.d .fm.list{grid-template-columns:minmax(0,1fr);gap:0;padding:0 22px 18px}
.d .lh{display:none}
.d .fm.list .lh{position:sticky;top:0;z-index:2;display:grid;grid-template-columns:40px minmax(0,1fr) 64px 84px 70px;align-items:end;column-gap:14px;height:42px;padding:0 12px 8px;background:rgba(244,247,252,.96);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .lh span:nth-child(n+3){text-align:right}
.d .fi{position:relative;display:flex;flex-direction:column;gap:9px;min-width:0;padding:10px;border:0;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9);text-align:left;cursor:pointer;transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow .2s ease,background-color .2s ease}
.d .fi:hover{box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow)}
.d .fi:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .fi.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 2px var(--ml-accent)}
.d .th{display:block;height:98px;border-radius:9px;overflow:hidden;background:var(--ml-surface)}
.d .th svg{display:block;width:100%;height:100%}
.d .tx{display:flex;flex-direction:column;gap:2px;min-width:0}
.d .nm{overflow:hidden;font-size:13px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .mt{font-size:12px;color:var(--ml-muted)}
.d .kd,.d .sz,.d .md{display:none}
.d .ck{position:absolute;right:16px;top:16px;display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--ml-accent);color:#fff;opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .fi.on .ck{opacity:1;transform:none}
.d .fm.list .fi{display:grid;grid-template-columns:40px minmax(0,1fr) 64px 84px 70px;align-items:center;column-gap:14px;height:54px;padding:0 12px;border-radius:12px;background:none;box-shadow:none}
.d .fm.list .fi:hover{background:var(--ml-surface)}
.d .fm.list .fi.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .fm.list .th{width:40px;height:40px;border-radius:9px}
.d .fm.list .mt,.d .fm.list .ck{display:none}
.d .fm.list .kd,.d .fm.list .sz,.d .fm.list .md{display:block;font-size:13px;color:var(--ml-muted);text-align:right;font-variant-numeric:tabular-nums}
.d .fm.list .nm{font-size:13.5px}
.d .fm.swap .th,.d .fm.swap .tx{animation:fm-in 420ms var(--ml-spring) both}
.d .pv{display:flex;flex-direction:column;min-height:0;padding:20px 20px 22px;background:var(--ml-bg);border-left:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:none}
.d .pvc.in{animation:fm-in 480ms var(--ml-spring) both}
.d .pva{height:176px;border-radius:14px;overflow:hidden;background:var(--ml-surface);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8)}
.d .pva svg{display:block;width:100%;height:100%}
.d .pvn{margin-top:16px;font-size:17px;line-height:1.25;font-weight:650;letter-spacing:-.02em;word-break:break-word}
.d .pvk{margin-top:4px;font-size:13px;color:var(--ml-muted)}
.d .pvb{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:16px}
.d .pvb .btn,.d .pvb .cta{width:100%}
.d dl{margin-top:18px}
.d dl div{display:flex;justify-content:space-between;gap:12px;padding:10px 0;border-top:1px solid var(--ml-line);font-size:13px}
.d dt{color:var(--ml-muted)}
.d dd{font-weight:600;text-align:right}
.d .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}
.d .tgc{display:inline-flex;align-items:center;height:24px;padding:0 9px;border-radius:7px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:600}
@keyframes fm-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 1100px){
  .d .app{grid-template-columns:200px minmax(0,1fr) 264px}
  .d .bar .search{display:none}
}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .pv,.d .crumb span,.d .crumb svg{display:none}
  .d .crumb{margin-right:auto}
  .d .bar{padding:0 16px}
  .d .fm{grid-template-columns:repeat(2,minmax(0,1fr));padding:16px}
  .d .fm.list{padding:0 12px 16px;grid-template-columns:minmax(0,1fr)}
  .d .fm.list .fi,.d .fm.list .lh{grid-template-columns:40px minmax(0,1fr) 70px}
  .d .fm.list .kd,.d .fm.list .md,.d .lh span:nth-child(3),.d .lh span:nth-child(5){display:none}
}
@media (prefers-reduced-motion: reduce){.d .fm.swap .th,.d .fm.swap .tx,.d .pvc.in{animation:none}}`,
    run: (root) => {
      const F = [
        ['Campaign photos', 'folder', '24 items', '', 'Oct 13', 'Maya Reyes', 'Folder'],
        ['Brand guidelines', 'folder', '8 items', '', 'Oct 9', 'Aiko Tan', 'Folder'],
        ['Invoices', 'folder', '31 items', '', 'Oct 14', 'Sam Whitfield', 'Folder'],
        ['hero-sunrise.jpg', 'image', 'JPG', '2.4 MB', 'Oct 14', 'Maya Reyes', '3840 x 2160'],
        ['moodboard-q4.png', 'image', 'PNG', '1.8 MB', 'Oct 12', 'Aiko Tan', '2400 x 1600'],
        ['packaging-front.png', 'image', 'PNG', '3.1 MB', 'Oct 11', 'Luis Ortega', '3000 x 2000'],
        ['Brand-guide-v3.pdf', 'pdf', 'PDF', '6.7 MB', 'Oct 9', 'Aiko Tan', '42 pages'],
        ['Q4-budget.xlsx', 'sheet', 'XLSX', '184 KB', 'Oct 13', 'Tomas Lindqvist', '3 sheets'],
        ['Creative-brief.docx', 'doc', 'DOCX', '92 KB', 'Oct 8', 'Hana Kim', '6 pages'],
        ['launch-teaser.mp4', 'video', 'MP4', '48.2 MB', 'Oct 10', 'Daniel Okafor', '00:42, 1080p'],
        ['Contract-Northgate.pdf', 'pdf', 'PDF', '1.1 MB', 'Oct 6', 'Ana Lim', '9 pages'],
        ['Shot-list.docx', 'doc', 'DOCX', '64 KB', 'Oct 5', 'Hana Kim', '3 pages'],
      ].map(([n, k, kd, sz, md, who, info], i) => ({ i, n, k, kd, sz, md, who, info }));
      const $ = (q) => root.querySelector(q);
      const fm = $('.fm');
      const cur = $('.cur');
      const CK = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      // drawn thumbnails (no remote images): soft gradients, a sun and a horizon, document pages, a play badge
      const art = (f) => {
        const a = '#FF4433';
        const b = '#FF7A3D';
        const c = '#FFD0CA';
        const d = '#FFF0EE';
        const v = f.i % 3;
        const open = (inner, bg) => `<svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="120" height="90" fill="${bg || '#FAF6F2'}"/>${inner}</svg>`;
        if (f.k === 'folder') return open(`<path d="M22 28a6 6 0 0 1 6-6h20l8 9h36a6 6 0 0 1 6 6v33a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6Z" fill="${b}"/><path d="M22 40a6 6 0 0 1 6-6h64a6 6 0 0 1 6 6v29a6 6 0 0 1-6 6H28a6 6 0 0 1-6-6Z" fill="${a}"/>`, d);
        if (f.k === 'image') {
          if (f.n.startsWith('mood')) return open(`<rect x="10" y="10" width="44" height="40" rx="6" fill="${c}"/><rect x="60" y="10" width="50" height="24" rx="6" fill="${b}"/><rect x="60" y="40" width="22" height="40" rx="6" fill="${d}"/><rect x="88" y="40" width="22" height="40" rx="6" fill="${a}"/><rect x="10" y="56" width="44" height="24" rx="6" fill="${d}"/><circle cx="32" cy="30" r="8" fill="#fff"/>`);
          if (f.n.startsWith('pack')) return open(`<rect x="0" y="62" width="120" height="28" fill="${d}"/><path d="M34 30 60 20l26 10v34L60 74 34 64Z" fill="${c}"/><path d="M60 20v54l26-10V30Z" fill="${b}"/><rect x="42" y="38" width="12" height="14" rx="3" fill="#fff" opacity=".9"/>`, '#EFE7E0');
          return open(`<rect width="120" height="90" fill="${d}"/><rect width="120" height="48" fill="${c}" opacity=".55"/><circle cx="84" cy="30" r="12" fill="#fff"/><path d="M0 90V60l28-22 24 18 20-14 48 30v18Z" fill="${b}"/><path d="M0 90V74l36-16 36 20 48-12v24Z" fill="${a}"/>`);
        }
        if (f.k === 'video') return open(`<rect width="120" height="90" fill="${b}"/><path d="M0 90V62l32-18 28 16 24-12 36 20v22Z" fill="${a}" opacity=".8"/><circle cx="60" cy="45" r="17" fill="#fff"/><path d="M55 37 69 45 55 53Z" fill="${a}"/>`, b);
        const page = (body, tag) => open(`<rect x="30" y="10" width="60" height="72" rx="6" fill="#fff"/><rect x="30" y="10" width="60" height="72" rx="6" fill="none" stroke="#E2D6CC"/>${body}<rect x="38" y="16" width="22" height="9" rx="3" fill="${tag}"/>`, d);
        if (f.k === 'sheet') return page(`<g stroke="#E2D6CC" stroke-width="1.2"><path d="M38 38h44M38 49h44M38 60h44M38 71h44M54 32v44M70 32v44"/></g><rect x="55" y="39" width="14" height="10" fill="${c}"/>`, a);
        if (f.k === 'pdf') return page(`<rect x="38" y="32" width="44" height="5" rx="2.5" fill="${c}"/><rect x="38" y="42" width="34" height="5" rx="2.5" fill="${d}"/><rect x="38" y="52" width="44" height="14" rx="3" fill="${b}"/><rect x="38" y="71" width="26" height="4" rx="2" fill="${d}"/>`, a);
        return page(`<rect x="38" y="32" width="44" height="5" rx="2.5" fill="${c}"/><rect x="38" y="42" width="44" height="5" rx="2.5" fill="${d}"/><rect x="38" y="52" width="36" height="5" rx="2.5" fill="${d}"/><rect x="38" y="62" width="40" height="5" rx="2.5" fill="${d}"/>`, b);
      };
      const ICON = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">';
      fm.innerHTML = `<div class="lh" aria-hidden="true"><span></span><span>Name</span><span>Kind</span><span>Size</span><span>Modified</span></div>` + F.map((f) => `<button class="fi" type="button" role="option" aria-selected="false" data-i="${f.i}"><span class="th">${art(f)}</span><span class="tx"><span class="nm">${f.n}</span><span class="mt">${f.sz ? f.kd + ' - ' + f.sz : f.kd}</span></span><span class="kd">${f.k === 'folder' ? 'Folder' : f.kd}</span><span class="sz">${f.sz || f.kd}</span><span class="md">${f.md}</span><span class="ck">${CK}</span></button>`).join('');
      const items = [...root.querySelectorAll('.fi')];
      const sel = new Set();
      let last = 3;
      const pv = $('.pvc');
      const paint = (animate) => {
        items.forEach((el, i) => {
          el.classList.toggle('on', sel.has(i));
          el.setAttribute('aria-selected', String(sel.has(i)));
        });
        const ids = [...sel];
        let h;
        if (ids.length === 0) h = `<div class="pva">${art({ k: 'folder', i: 0, n: '' })}</div><p class="pvn">Nothing selected</p><p class="pvk">Select a file to preview it</p>`;
        else if (ids.length > 1) h = `<div class="pva">${art({ k: 'folder', i: 1, n: '' })}</div><p class="pvn">${ids.length} items selected</p><p class="pvk">${ids.map((i) => F[i].n).slice(0, 2).join(', ')}${ids.length > 2 ? ' and more' : ''}</p><div class="pvb"><button class="btn" type="button">${ICON}<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>Download</button><button class="cta" type="button">Move to</button></div>`;
        else {
          const f = F[ids[0]];
          h = `<div class="pva">${art(f)}</div><p class="pvn">${f.n}</p><p class="pvk">${f.k === 'folder' ? 'Folder' : f.kd + ' file'}${f.sz ? ' - ' + f.sz : ''}</p><div class="pvb"><button class="btn" type="button">${ICON}<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>Share</button><button class="cta" type="button">${ICON}<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>Download</button></div><dl><div><dt>${f.k === 'folder' ? 'Contents' : 'Details'}</dt><dd>${f.k === 'folder' ? f.kd : f.info}</dd></div><div><dt>Modified</dt><dd>${f.md}, 2026</dd></div><div><dt>Owner</dt><dd>${f.who}</dd></div></dl><div class="tags"><span class="tgc">Q4 campaign</span><span class="tgc">${f.k === 'folder' ? 'Folder' : f.kd}</span></div>`;
        }
        pv.innerHTML = h;
        if (animate) {
          pv.classList.remove('in');
          void pv.offsetWidth;
          pv.classList.add('in');
        }
      };
      const s = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const flip = (mutate) => {
        const first = new Map(items.map((el) => [el, el.getBoundingClientRect()]));
        mutate();
        const k = s();
        items.forEach((el) => {
          const a = first.get(el);
          const b = el.getBoundingClientRect();
          const dx = (a.left - b.left) / k;
          const dy = (a.top - b.top) / k;
          if (dx || dy) {
            el.style.transition = 'none';
            el.style.transform = `translate(${dx}px,${dy}px)`;
            void el.offsetWidth;
            el.style.transition = '';
            el.style.transform = '';
          }
        });
        fm.classList.remove('swap');
        void fm.offsetWidth;
        fm.classList.add('swap');
      };
      const setView = (v) => {
        if (fm.classList.contains('list') === (v === 'list')) return;
        flip(() => fm.classList.toggle('list', v === 'list'));
        root.querySelectorAll('.tgl button').forEach((b) => {
          b.classList.toggle('on', b.dataset.v === v);
          b.setAttribute('aria-pressed', String(b.dataset.v === v));
        });
      };
      root.addEventListener('click', (e) => {
        const t = e.target.closest('.tgl button');
        const it = e.target.closest('.fi');
        if (t) return setView(t.dataset.v);
        if (!it) return;
        const i = +it.dataset.i;
        if (e.shiftKey || e.ctrlKey || e.metaKey) {
          if (e.shiftKey) for (let j = Math.min(last, i); j <= Math.max(last, i); j++) sel.add(j);
          else if (sel.has(i)) sel.delete(i);
          else sel.add(i);
        } else {
          sel.clear();
          sel.add(i);
        }
        last = i;
        paint(true);
      });
      $('.q').addEventListener('input', (e) => {
        const q = e.target.value.trim().toLowerCase();
        flip(() => items.forEach((el, i) => (el.style.display = !q || F[i].n.toLowerCase().includes(q) ? '' : 'none')));
      });
      sel.add(3);
      paint(false);

      // Autoplay: pick a file, flip to list, pick another, flip back, pick a third.
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
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const k = s();
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / k}px,${(r.top - o.top + r.height * fy) / k}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(850);
        if (!idle() || !el) return false;
        cur.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(560px,560px)';
      const steps = [
        () => items[6],
        () => $('.tgl [data-v="list"]'),
        () => items[7],
        () => $('.tgl [data-v="grid"]'),
        () => items[9],
        () => items[3],
      ];
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          for (const get of steps) {
            if (!(await tap(get(), 0.5, 0.35))) break;
            await wait(1300);
          }
          await wait(800);
        }
      })();
    },
    prompt: `Build a file manager screen with a grid / list toggle, selection and a live preview pane, full viewport (height: 100dvh).

Layout: three columns, 216px / fluid / 304px. Left sidebar (white, hairline): logo tile and workspace name, a full-width primary Upload button, location buttons (All files with a count, Recent, Shared, Starred; the active one on an accent-soft fill) and a storage meter at the bottom. Center: a 64px toolbar (breadcrumb "All files / Brand / Q4 campaign" with the current folder in semibold, a 200px search field, and a two-button segmented control with grid and list icons), then the file region. Right: a preview pane (white, hairline on its left) with a 176px art area, the file name (17px, weight 650), its kind and size, Share and Download buttons, a small definition list (Details, Modified, Owner) and tag chips.

File items are ONE set of buttons that restyle between two layouts using a class on the container. Grid: auto-fill columns minmax(148px, 1fr), cards with a 98px drawn thumbnail (gradient sky, sun and mountains for images, a page with lines for documents, a play badge for video, a folder shape for folders), name and "PDF - 6.7 MB". List: 54px rows with a 40px thumbnail, name, kind, size and modified columns right-aligned with tabular numbers, plus a sticky header row. Toggle with a FLIP: measure every item rect, switch the class, measure again, apply translate(dx, dy) with transition none, then clear it so a 587ms critically damped spring moves each item home; thumbnails and names fade up 6px.

Selection: click selects one item (accent-soft fill, 2px accent ring, a small check badge in grid mode); Ctrl or Cmd toggles; Shift selects a range. The preview pane swaps with a short fade and rise; with several items it shows a count and bulk actions. Items are role=option in a role=listbox with aria-selected; the toggle buttons carry aria-pressed. Phone (below 760px): hide the sidebar and preview, two grid columns, list rows with name and size only. Use your accent color for selection. Plain HTML, CSS and JS, no libraries; React-friendly structure (Sidebar, Toolbar, FileGrid, FileItem, PreviewPane).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 9. Tree explorer with breadcrumb
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-tree',
    cat: 'app-data',
    title: 'Tree explorer, breadcrumb',
    sub: 'Folders unfold, the path follows',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.home, 16)}</span>Tidewater Realty</div>
    <p class="lbl">Documents</p>
    <div class="tree" role="tree" aria-label="Folders"></div>
  </aside>
  <main class="main">
    <div class="top">
      <nav class="crumbs" aria-label="Path"></nav>
      <label class="search">${I(P.search, 16)}<input type="search" placeholder="Search in folder" aria-label="Search in folder"></label>
    </div>
    <div class="body">
      <div class="head"><div><h1 class="ft"></h1><p class="sub fs"></p></div><button class="cta" type="button">${I(P.upload, 16)}Upload</button></div>
      <div class="stats"><div class="card sc2"><p>Files</p><b class="s1 tn"></b></div><div class="card sc2"><p>Total size</p><b class="s2 tn"></b></div><div class="card sc2"><p>Last change</p><b class="s3 tn"></b></div></div>
      <section class="card tbl">
        <div class="row hd"><span>Name</span><span class="c-m">Modified</span><span class="r">Size</span></div>
        <div class="list" role="list"></div>
        <div class="drop">${I(P.upload, 18)}<span>Drop files here to add them to <b class="dn"></b></span></div>
      </section>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .app{display:grid;grid-template-columns:292px minmax(0,1fr)}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 12px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .side .brand{padding:2px 8px 20px}
.d .lbl{padding:0 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .tree{flex:1;min-height:0;overflow-y:auto;scrollbar-width:thin;outline:0}
.d .tr{position:relative;display:flex;align-items:center;gap:6px;height:36px;padding:0 8px 0 calc(var(--dp,0) * 18px + 6px);border-radius:10px;font-size:14px;font-weight:500;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .tr:hover{background:var(--ml-surface)}
.d .tr.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:600}
.d .tr.press{transform:scale(.98)}
.d .tr:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
.d .chv{display:grid;place-items:center;flex:none;width:22px;height:22px;border:0;border-radius:6px;background:none;color:var(--ml-muted);cursor:pointer;transition:transform var(--ml-spring-dur) var(--ml-spring),background-color .2s ease}
.d .chv:hover{background:var(--ml-bar-2)}
.d .nd.open > .tr > .chv{transform:rotate(90deg)}
.d .chv.none{visibility:hidden}
.d .tr .fi{display:grid;place-items:center;flex:none;color:var(--ml-muted)}
.d .tr.on .fi{color:var(--ml-accent)}
.d .tr b{flex:1;min-width:0;overflow:hidden;font-weight:inherit;white-space:nowrap;text-overflow:ellipsis}
.d .tr em{padding:3px 7px;border-radius:999px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .tr.on em{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .kids{display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--ml-spring-dur) var(--ml-spring)}
.d .nd.open > .kids{grid-template-rows:1fr}
.d .ki{min-height:0;overflow:hidden}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .top{display:flex;flex:none;align-items:center;gap:16px;height:62px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .crumbs{display:flex;flex:1;align-items:center;gap:2px;min-width:0;overflow:hidden}
.d .cb{display:inline-flex;align-items:center;gap:2px;flex:none;height:32px;padding:0 9px;border:0;border-radius:9px;background:none;font-size:14px;font-weight:500;color:var(--ml-muted);cursor:pointer;white-space:nowrap;animation:tr-in 420ms var(--ml-spring) both;transition:background-color .2s ease,color .2s ease}
.d .cb:hover{background:var(--ml-surface);color:var(--ml-ink)}
.d .cb:last-child{color:var(--ml-ink);font-weight:650}
.d .crumbs svg{flex:none;color:var(--ml-bar)}
.d .body{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:24px 28px 26px;overflow-y:auto}
.d .head{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}
.d .stats{display:grid;flex:none;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d .sc2{padding:14px 16px}
.d .sc2 p{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .sc2 b{display:block;margin-top:6px;font-size:22px;line-height:1.1;font-weight:650;letter-spacing:-.02em}
.d .tbl{display:flex;flex:1 0 auto;flex-direction:column;overflow:hidden}
.d .drop{display:flex;flex:1;align-items:center;justify-content:center;gap:10px;min-height:84px;margin:14px 20px 20px;border:1.5px dashed var(--ml-bar);border-radius:14px;font-size:13.5px;color:var(--ml-muted)}
.d .drop b{font-weight:600;color:var(--ml-ink-2)}
.d .row{display:grid;grid-template-columns:minmax(0,1fr) 120px 90px;align-items:center;column-gap:16px;padding:0 20px}
.d .hd{height:40px;background:var(--ml-surface);border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .r{text-align:right}
.d .it{height:52px;border-bottom:1px solid var(--ml-line);font-size:13.5px;cursor:default;transition:background-color .2s ease;animation:tr-in 420ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 35ms)}
.d .it:last-child{border-bottom:0}
.d .it:hover{background:var(--ml-surface)}
.d .nm{display:flex;align-items:center;gap:12px;min-width:0}
.d .nm .ic{display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:9px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .nm .ic.f{background:var(--ml-surface);color:var(--ml-ink-2)}
.d .nm b{overflow:hidden;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .it .c-m,.d .it .r{color:var(--ml-muted)}
.d .it .r{font-variant-numeric:tabular-nums}
@keyframes tr-in{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 1100px){.d .app{grid-template-columns:260px minmax(0,1fr)}.d .top .search{display:none}}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .top{padding:0 14px}
  .d .top .search{display:none}
  .d .body{padding:18px 16px 22px}
  .d .row{grid-template-columns:minmax(0,1fr) 80px;padding:0 14px}
  .d .c-m{display:none}
  .d .head .cta{display:none}
  .d .stats{gap:8px}
  .d .sc2{padding:12px}
  .d .sc2 b{font-size:17px}
}
@media (prefers-reduced-motion: reduce){.d .cb,.d .it{animation:none}}`,
    run: (root) => {
      const FOLDER = '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>';
      const FILE = '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>';
      const IMG = '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>';
      const SVG = (d, s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      // [name, children, files]; a file is [name, modified, size]
      const TREE = [
        ['Listings', [
          ['14 Harbor Lane', [
            ['Photos', [], [['kitchen-wide.jpg', 'Oct 12', '3.2 MB'], ['living-room.jpg', 'Oct 12', '2.8 MB'], ['backyard-dusk.jpg', 'Oct 12', '3.6 MB'], ['floor-plan.png', 'Oct 10', '980 KB'], ['drone-front.jpg', 'Oct 9', '4.1 MB']]],
            ['Contracts', [], [['Listing-agreement.pdf', 'Oct 8', '412 KB'], ['Disclosure-form.pdf', 'Oct 8', '268 KB'], ['Offer-Okafor.pdf', 'Oct 13', '190 KB']]],
            ['Inspection', [], [['Roof-report.pdf', 'Oct 11', '1.4 MB'], ['Termite-check.pdf', 'Oct 11', '520 KB']]],
          ], [['Property-sheet.pdf', 'Oct 7', '240 KB']]],
          ['8 Marlow Court', [], [['Listing-draft.docx', 'Oct 6', '88 KB'], ['Comparable-sales.xlsx', 'Oct 5', '156 KB']]],
          ['220 Bay Street', [], [['Open-house-plan.pdf', 'Oct 14', '312 KB']]],
        ], []],
        ['Clients', [
          ['Buyers', [], [['Nair-preapproval.pdf', 'Oct 13', '204 KB'], ['Santos-wishlist.docx', 'Oct 12', '61 KB'], ['Kim-search-notes.docx', 'Oct 9', '47 KB']]],
          ['Sellers', [], [['Whitfield-valuation.pdf', 'Oct 10', '722 KB'], ['Ortega-commission.pdf', 'Oct 7', '133 KB']]],
        ], []],
        ['Marketing', [
          ['Flyers', [], [['Harbor-Lane-flyer.pdf', 'Oct 13', '2.1 MB'], ['Open-house-flyer.pdf', 'Oct 14', '1.9 MB']]],
          ['Social', [], [['Oct-calendar.xlsx', 'Oct 5', '98 KB'], ['Reel-script.docx', 'Oct 8', '35 KB']]],
        ], []],
        ['Templates', [], [['Offer-template.docx', 'Aug 21', '72 KB'], ['Showing-feedback.pdf', 'Aug 21', '115 KB']]],
      ];
      const $ = (q) => root.querySelector(q);
      const cur = $('.cur');
      const treeEl = $('.tree');
      const nodes = [];
      const mk = (n, depth) => {
        const o = { id: nodes.length, name: n[0], kids: [], files: n[2], depth, parent: null, open: false };
        nodes.push(o);
        o.kids = n[1].map((k) => {
          const c = mk(k, depth + 1);
          c.parent = o;
          return c;
        });
        return o;
      };
      const roots = TREE.map((n) => mk(n, 0));
      const count = (o) => o.kids.length + o.files.length;
      const html = (o) => `<div class="nd" data-id="${o.id}"><div class="tr" role="treeitem" tabindex="-1" aria-level="${o.depth + 1}" aria-selected="false"${o.kids.length ? ' aria-expanded="false"' : ''} data-id="${o.id}" style="--dp:${o.depth}"><button class="chv${o.kids.length ? '' : ' none'}" type="button" tabindex="-1" aria-label="Expand ${o.name}">${SVG('<path d="m9 18 6-6-6-6"/>', 16)}</button><span class="fi">${SVG(FOLDER, 18)}</span><b>${o.name}</b><em>${count(o)}</em></div>${o.kids.length ? `<div class="kids"><div class="ki">${o.kids.map(html).join('')}</div></div>` : ''}</div>`;
      treeEl.innerHTML = roots.map(html).join('');
      nodes.forEach((o) => {
        o.el = treeEl.querySelector(`.nd[data-id="${o.id}"]`);
        o.tr = o.el.querySelector(':scope > .tr');
      });
      let selId = -1;
      const path = (o) => (o ? [...path(o.parent), o] : []);
      const setOpen = (o, v) => {
        if (!o.kids.length) return;
        o.open = v;
        o.el.classList.toggle('open', v);
        o.tr.setAttribute('aria-expanded', String(v));
        o.tr.querySelector('.chv').setAttribute('aria-label', `${v ? 'Collapse' : 'Expand'} ${o.name}`);
      };
      const ext = (n) => n.split('.').pop();
      const select = (o, focus) => {
        if (selId >= 0) {
          nodes[selId].tr.classList.remove('on');
          nodes[selId].tr.setAttribute('aria-selected', 'false');
          nodes[selId].tr.tabIndex = -1;
        }
        selId = o.id;
        o.tr.classList.add('on');
        o.tr.setAttribute('aria-selected', 'true');
        o.tr.tabIndex = 0;
        if (focus) o.tr.focus();
        const p = path(o);
        $('.crumbs').innerHTML = `<button class="cb" type="button" data-id="-1">Documents</button>` + p.map((x, i) => `${SVG('<path d="m9 18 6-6-6-6"/>', 15)}<button class="cb" type="button" data-id="${x.id}" style="animation-delay:${i * 40}ms">${x.name}</button>`).join('');
        $('.crumbs').scrollLeft = 9999;
        $('.ft').textContent = o.name;
        $('.dn').textContent = o.name;
        const all = [];
        const walk = (x) => {
          all.push(...x.files);
          x.kids.forEach(walk);
        };
        walk(o);
        const mb = all.reduce((a, f) => a + parseFloat(f[2]) / (/KB/.test(f[2]) ? 1024 : 1), 0);
        const MI = { Aug: 8, Oct: 10 };
        const key = (f) => MI[f[1].slice(0, 3)] * 100 + parseInt(f[1].slice(4), 10);
        const lastF = all.slice().sort((a, b) => key(b) - key(a))[0];
        $('.s1').textContent = all.length;
        $('.s2').textContent = mb >= 1 ? `${mb.toFixed(1)} MB` : `${Math.round(mb * 1024)} KB`;
        $('.s3').textContent = lastF ? lastF[1] : 'None';
        const files = o.files;
        $('.fs').textContent = `${o.kids.length} folder${o.kids.length === 1 ? '' : 's'}, ${files.length} file${files.length === 1 ? '' : 's'}`;
        const rows = [...o.kids.map((k) => [k.name, 'Oct 14', `${count(k)} items`, true, k.id]), ...files.map((f) => [f[0], f[1], f[2], false, -1])];
        $('.list').innerHTML = rows.length
          ? rows.map(([n, m, sz, folder, id], i) => `<div class="row it" role="listitem" style="--i:${i}"><span class="nm"><span class="ic${folder ? ' f' : ''}">${SVG(folder ? FOLDER : /jpg|png/.test(ext(n)) ? IMG : FILE, 17)}</span><b>${n}</b></span><span class="c-m">${m}</span><span class="r">${sz}</span></div>`).join('')
          : '<div class="row it"><span class="nm"><b>This folder is empty</b></span></div>';
      };
      const vis = () => {
        const out = [];
        const walk = (o) => {
          out.push(o);
          if (o.open) o.kids.forEach(walk);
        };
        roots.forEach(walk);
        return out;
      };
      treeEl.addEventListener('click', (e) => {
        const tr = e.target.closest('.tr');
        if (!tr) return;
        const o = nodes[+tr.dataset.id];
        if (e.target.closest('.chv')) return setOpen(o, !o.open);
        select(o);
        if (o.kids.length && !o.open) setOpen(o, true);
      });
      treeEl.addEventListener('keydown', (e) => {
        const tr = e.target.closest('.tr');
        if (!tr) return;
        const o = nodes[+tr.dataset.id];
        const list = vis();
        const at = list.indexOf(o);
        if (e.key === 'ArrowDown' && list[at + 1]) select(list[at + 1], true);
        else if (e.key === 'ArrowUp' && list[at - 1]) select(list[at - 1], true);
        else if (e.key === 'ArrowRight') o.kids.length && !o.open ? setOpen(o, true) : o.kids[0] && select(o.kids[0], true);
        else if (e.key === 'ArrowLeft') o.open ? setOpen(o, false) : o.parent && select(o.parent, true);
        else if (e.key === 'Enter' || e.key === ' ') select(o, true);
        else return;
        e.preventDefault();
      });
      $('.crumbs').addEventListener('click', (e) => {
        const b = e.target.closest('.cb');
        if (!b) return;
        const id = +b.dataset.id;
        if (id >= 0) select(nodes[id]);
      });
      const byName = (n) => nodes.find((o) => o.name === n);
      setOpen(byName('Listings'), true);
      setOpen(byName('14 Harbor Lane'), true);
      select(byName('Photos'));

      // Autoplay: open Contracts, unfold Clients, open Sellers, fold Clients again, back to Photos.
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
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const k = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / k}px,${(r.top - o.top + r.height * fy) / k}px)`;
        return true;
      };
      const tap = async (el, fx) => {
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(850);
        if (!idle() || !el) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(620px,560px)';
      const steps = [
        () => [byName('Contracts').tr, 0.5],
        () => [byName('Clients').tr.querySelector('.chv'), 0.5],
        () => [byName('Sellers').tr, 0.5],
        () => [byName('Clients').tr.querySelector('.chv'), 0.5],
        () => [byName('Photos').tr, 0.5],
      ];
      (async () => {
        await wait(1700);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          let ok = true;
          for (const get of steps) {
            const [el, fx] = get();
            if (!(await tap(el, fx))) {
              ok = false;
              break;
            }
            await wait(1250);
          }
          if (!ok) {
            await wait(600);
            continue;
          }
          await wait(900);
        }
      })();
    },
    prompt: `Build a folder tree explorer with a breadcrumb and a contents table, full viewport (height: 100dvh).

Layout: a two-column grid, 292px tree panel and a fluid main column. The tree panel is white with a hairline: logo tile and company name, a small uppercase "Documents" label, then the tree in a scroll region. Each node is a 36px row with indentation of depth x 18px, a 22px chevron button, a folder icon, the name and a count pill; the selected row sits on an accent-soft fill with an accent hairline. Children live in a wrapper using display: grid with grid-template-rows 0fr -> 1fr (inner element min-height: 0, overflow: hidden) so folders open and close smoothly on a 587ms critically damped spring while the chevron rotates 90deg. The main column has a 62px top bar holding the breadcrumb (Documents / Listings / 14 Harbor Lane / Photos as ghost buttons separated by chevrons, the last one semibold) and a search field, then a page with the folder name, a summary ("0 folders, 5 files") and an Upload button, then a white card with a header row (Name, Modified, Size) and 52px rows: a 32px icon tile, the name, a muted date and a right-aligned size.

Behavior: clicking a node selects it, opens it if it has children and rebuilds the breadcrumb (crumbs enter with a 40ms stagger, translateY 6px and opacity) and the table (rows stagger 35ms); clicking a crumb selects that ancestor; clicking the chevron only toggles. Follow the WAI-ARIA tree pattern: role=tree on the container, role=treeitem with aria-level, aria-selected and aria-expanded, roving tabindex, ArrowUp/ArrowDown move through visible nodes, ArrowRight expands or enters the first child, ArrowLeft collapses or goes to the parent.

Responsive and motion: below 760px hide the tree and rely on the breadcrumb, drop the Modified column. prefers-reduced-motion removes the stagger. Use your accent color for the selection. Plain HTML, CSS and JS, no libraries; React-friendly structure (TreePanel, TreeNode, Breadcrumb, FolderTable).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 10. Map with a synced list
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-map',
    cat: 'app-data',
    title: 'Map with synced list',
    sub: 'Hover a row, its pin lifts',
    html: `
<div class="app">
  <aside class="lp">
    <div class="lh">
      <div class="brand"><span class="mark">${I(P.coffee, 16)}</span>Corvid Coffee</div>
      <h1>Find a store</h1>
      <p class="sub">8 stores near Harbor District</p>
      <label class="search">${I(P.search, 16)}<input class="q" type="search" placeholder="Street, suburb or zip" aria-label="Search stores"></label>
      <div class="chips" role="group" aria-label="Filters"><button class="chip on" type="button" data-f="all">All</button><button class="chip" type="button" data-f="open">Open now</button><button class="chip" type="button" data-f="drive">Drive-thru</button></div>
    </div>
    <div class="ls" role="list"></div>
  </aside>
  <section class="mp" aria-label="Map">
    <svg class="map" viewBox="0 0 800 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g class="world"></g></svg>
    <div class="zoom"><button type="button" data-z="1" aria-label="Zoom in">${I(P.plus, 18)}</button><button type="button" data-z="-1" aria-label="Zoom out">${I(P.minus, 18)}</button></div>
    <div class="tip" role="status"></div>
  </section>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .app{display:grid;grid-template-columns:380px minmax(0,1fr)}
.d .lp{display:flex;flex-direction:column;min-height:0;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .lh{flex:none;padding:20px 20px 14px;border-bottom:1px solid var(--ml-line)}
.d .lh .brand{margin-bottom:18px}
.d .lh h1{font-size:24px}
.d .lh .search{width:100%;height:40px;margin-top:14px}
.d .chips{display:flex;gap:8px;margin-top:12px}
.d .chip{height:30px;padding:0 12px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .chip:hover{background:var(--ml-surface)}
.d .chip.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .ls{flex:1;min-height:0;padding:8px 10px 12px;overflow-y:auto;scrollbar-width:thin}
.d .sr{position:relative;display:grid;grid-template-columns:34px minmax(0,1fr) auto;align-items:start;gap:0 12px;padding:12px 10px;border-radius:14px;cursor:pointer;transition:background-color .2s ease,box-shadow .2s ease}
.d .sr:hover,.d .sr.hot{background:var(--ml-surface)}
.d .sr.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .sr:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
.d .no{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:650 13px/1 var(--ml-mono);color:var(--ml-ink-2);transition:background-color .25s ease,color .25s ease,box-shadow .25s ease}
.d .sr.hot .no,.d .sr.on .no{background:var(--ml-accent);box-shadow:none;color:#fff}
.d .in{display:flex;flex-direction:column;gap:2px;min-width:0}
.d .in b{overflow:hidden;font-size:14.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .in p{font-size:13px;color:var(--ml-muted)}
.d .in .hrs{display:flex;align-items:center;gap:6px;margin-top:2px;font-size:12.5px;font-weight:600;color:#12893C}
.d .in .hrs i{width:6px;height:6px;border-radius:50%;background:currentColor}
.d .in .hrs.cl{color:#B25E00}
.d .rt{display:flex;flex-direction:column;align-items:flex-end;gap:3px;font-variant-numeric:tabular-nums}
.d .rt b{font-size:13.5px;font-weight:650}
.d .rt span{display:inline-flex;align-items:center;gap:4px;font-size:12.5px;color:var(--ml-muted)}
.d .rt svg{color:var(--ml-accent)}
.d .dt{grid-column:2 / -1;display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--ml-spring-dur) var(--ml-spring)}
.d .sr.on .dt{grid-template-rows:1fr}
.d .dx{min-height:0;overflow:hidden}
.d .dx div{display:flex;gap:8px;padding-top:12px}
.d .dx .btn,.d .dx .cta{height:32px;padding:0 12px;font-size:13px}
.d .mp{position:relative;min-width:0;min-height:0;overflow:hidden;background:#EEF3FA}
.d .map{position:absolute;inset:0;width:100%;height:100%}
.d .world{transform-origin:50% 50%;transform-box:view-box;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .map text{font:600 11px var(--ml-font);letter-spacing:.1em;fill:#9AA9BE;text-transform:uppercase}
.d .pin{cursor:pointer;transition:opacity .3s ease}
.d .pin.gone{opacity:0;pointer-events:none}
.d .lift{transition:transform var(--ml-bounce-dur) var(--ml-bounce);transform-box:fill-box;transform-origin:50% 100%}
.d .pin.hot .lift{transform:translateY(-12px) scale(1.14)}
.d .pin.on .lift{transform:scale(1.14)}
.d .sh{fill:rgba(35,15,10,.28);transform-box:fill-box;transform-origin:50% 50%;transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity .3s ease}
.d .pin.hot .sh{transform:scale(1.5);opacity:.55}
.d .pb{fill:#fff;stroke:var(--ml-accent-line);stroke-width:1.5;transition:fill .25s ease,stroke .25s ease}
.d .pin.hot .pb,.d .pin.on .pb{fill:var(--ml-accent);stroke:var(--ml-accent)}
.d .pi{color:var(--ml-accent);transition:color .25s ease}
.d .pin.hot .pi,.d .pin.on .pi{color:#fff}
.d .zoom{position:absolute;right:16px;top:16px;display:flex;flex-direction:column;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);overflow:hidden}
.d .zoom button{display:grid;place-items:center;width:40px;height:40px;border:0;background:none;color:var(--ml-ink-2);cursor:pointer}
.d .zoom button + button{border-top:1px solid var(--ml-line)}
.d .zoom button:hover{background:var(--ml-surface)}
.d .tip{position:absolute;left:0;top:0;z-index:5;display:flex;flex-direction:column;gap:2px;min-width:170px;padding:10px 12px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);pointer-events:none;opacity:0;transform:translate(-50%,-100%) translate(var(--tx,0px),var(--ty,0px)) scale(.94);transform-origin:50% 100%;transition:opacity .18s ease,transform .3s var(--ml-ease)}
.d .tip.on{opacity:1;transform:translate(-50%,-100%) translate(var(--tx,0px),var(--ty,0px))}
.d .tip b{font-size:13.5px;font-weight:650}
.d .tip span{font-size:12px;color:var(--ml-muted)}
${CURSOR_CSS}
@container scr (max-width: 1100px){.d .app{grid-template-columns:340px minmax(0,1fr)}}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,42%) minmax(0,1fr)}
  .d .mp{order:-1}
  .d .lp{border-right:0;border-top:1px solid var(--ml-line)}
  .d .lh{padding:14px 16px 12px}
  .d .lh .brand,.d .lh .sub{display:none}
  .d .lh h1{font-size:20px}
  .d .lh .search{margin-top:10px}
  .d .zoom{display:none}
}
@media (prefers-reduced-motion: reduce){.d .lift,.d .sh{transition:none}}`,
    run: (root) => {
      const S = [
        ['Harbor Lane Roastery', '14 Harbor Lane', 'Open until 9 PM', 0, '0.3 mi', '4.8', 250, 250, 0],
        ['Old Town Corner', '82 Cooper Street', 'Open until 8 PM', 0, '0.6 mi', '4.7', 420, 190, 1],
        ['Market Street Cafe', '301 Market Street', 'Open until 11 PM', 0, '0.8 mi', '4.6', 530, 300, 0],
        ['Bayside Pier', '5 Pier Road', 'Open until 7 PM', 0, '1.1 mi', '4.9', 330, 385, 0],
        ['Fernway Station', '77 Rail Avenue', 'Open until 10 PM', 0, '1.4 mi', '4.5', 610, 425, 1],
        ['Juniper Commons', '12 Juniper Way', 'Closed, opens 7 AM', 1, '1.7 mi', '4.6', 685, 215, 0],
        ['Tidewater Plaza', '200 Bay Street', 'Open until 9 PM', 0, '2.0 mi', '4.7', 470, 485, 0],
        ['North Gate Drive-thru', '9 Northgate Road', 'Open until midnight', 0, '2.3 mi', '4.4', 330, 115, 1],
      ].map(([n, a, h, closed, d, r, x, y, drive], i) => ({ i, n, a, h, closed, d, r, x, y, drive }));
      const $ = (q) => root.querySelector(q);
      const world = $('.world');
      const cur = $('.cur');
      const ls = $('.ls');
      const tip = $('.tip');
      const mp = $('.mp');
      const STAR = '<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';
      const roadsA = ['M-20 200 C200 190 360 260 560 250 S780 300 830 320', 'M260 -20 C250 140 300 260 280 380 S360 560 400 660', 'M520 -20 C540 120 520 240 580 340 S700 520 720 660', 'M0 520 C150 540 260 470 420 470 S660 430 820 480'];
      const roadsB = ['M0 90 H260', 'M0 285 H250', 'M300 90 H820', 'M340 385 H820', 'M420 -10 V660', 'M650 -10 V660', 'M740 -10 V660', 'M120 -10 V330', 'M190 455 L335 385', 'M330 -10 V120'];
      const pinPath = 'M0 0C-12-13-16-21-16-29a16 16 0 1 1 32 0C16-21 12-13 0 0Z';
      const CUP = '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v4"/>';
      world.innerHTML =
        '<rect x="-60" y="-60" width="920" height="760" fill="#EEF3FA"/>' +
        '<rect x="470" y="60" width="180" height="120" rx="44" fill="#E1ECF8"/><rect x="110" y="110" width="120" height="92" rx="36" fill="#E1ECF8"/><ellipse cx="610" cy="548" rx="86" ry="52" fill="#E1ECF8"/>' +
        '<path d="M-20 350C70 322 132 376 172 430C216 488 298 500 320 560C334 604 312 660 312 660L-20 660Z" fill="#D4E5FB"/><path d="M-20 350C70 322 132 376 172 430C216 488 298 500 320 560C334 604 312 660 312 660" fill="none" stroke="#E8F1FE" stroke-width="7"/>' +
        roadsB.map((d) => `<path d="${d}" fill="none" stroke="#E3E9F3" stroke-width="7" stroke-linecap="round"/>`).join('') +
        roadsB.map((d) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/>`).join('') +
        roadsA.map((d) => `<path d="${d}" fill="none" stroke="#E2D6CC" stroke-width="14" stroke-linecap="round"/>`).join('') +
        roadsA.map((d) => `<path d="${d}" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round"/>`).join('') +
        '<text x="500" y="128">Harbor Park</text><text x="116" y="164">Old Town</text><text x="60" y="560">Harbor Bay</text><text x="560" y="552">Fernway Green</text><text x="425" y="238">Cooper St</text>' +
        S.map((s) => `<g class="pin" data-i="${s.i}" transform="translate(${s.x} ${s.y})" role="button" aria-label="${s.n}"><ellipse class="sh" cx="0" cy="0" rx="10" ry="3.6"/><g class="lift"><path class="pb" d="${pinPath}"/><svg class="pi" x="-9" y="-38" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${CUP}</svg></g></g>`).join('');
      ls.innerHTML = S.map((s) => `<div class="sr" role="listitem" tabindex="0" data-i="${s.i}" aria-label="${s.n}, ${s.d} away"><span class="no">${s.i + 1}</span><div class="in"><b>${s.n}</b><p>${s.a}</p><p class="hrs${s.closed ? ' cl' : ''}"><i></i>${s.h}</p></div><div class="rt"><b>${s.d}</b><span>${STAR}${s.r}</span></div><div class="dt"><div class="dx"><div><button class="cta" type="button">Directions</button><button class="btn" type="button">Order ahead</button></div></div></div></div>`).join('');
      const pins = [...root.querySelectorAll('.pin')];
      const rows = [...root.querySelectorAll('.sr')];
      let hot = -1;
      let sel = -1;
      let f = 'all';
      let q = '';
      let z = 1;
      const s = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const showTip = (i) => {
        if (i < 0) return void tip.classList.remove('on');
        const o = mp.getBoundingClientRect();
        const r = pins[i].querySelector('.pb').getBoundingClientRect();
        const k = s();
        tip.innerHTML = `<b>${S[i].n}</b><span>${S[i].h} - ${S[i].r} rating</span>`;
        tip.style.setProperty('--tx', `${(r.left - o.left + r.width / 2) / k}px`);
        tip.style.setProperty('--ty', `${(r.top - o.top) / k - 34}px`);
        tip.classList.add('on');
      };
      const setHot = (i, fromList) => {
        hot = i;
        pins.forEach((p, k) => p.classList.toggle('hot', k === i));
        rows.forEach((r, k) => r.classList.toggle('hot', k === i));
        if (i >= 0 && !fromList) {
          const r = rows[i];
          const top = r.offsetTop - ls.offsetTop;
          if (top < ls.scrollTop) ls.scrollTo({ top: top - 8, behavior: 'smooth' });
          else if (top + r.offsetHeight > ls.scrollTop + ls.clientHeight) ls.scrollTo({ top: top + r.offsetHeight - ls.clientHeight + 8, behavior: 'smooth' });
        }
        if (i >= 0) {
          // the pin has to be lifted before it is measured for the tooltip
          showTip(i);
        } else tip.classList.remove('on');
      };
      const setSel = (i) => {
        sel = sel === i ? -1 : i;
        pins.forEach((p, k) => p.classList.toggle('on', k === sel));
        rows.forEach((r, k) => {
          r.classList.toggle('on', k === sel);
          r.setAttribute('aria-expanded', String(k === sel));
        });
      };
      const filter = () => {
        const shown = S.map((x) => (f === 'all' || (f === 'open' && !x.closed) || (f === 'drive' && x.drive)) && (!q || (x.n + x.a).toLowerCase().includes(q)));
        rows.forEach((r, k) => (r.style.display = shown[k] ? '' : 'none'));
        pins.forEach((p, k) => p.classList.toggle('gone', !shown[k]));
        $('.sub').textContent = `${shown.filter(Boolean).length} stores near Harbor District`;
        if (hot >= 0 && !shown[hot]) setHot(-1);
        root.querySelectorAll('.chip').forEach((c) => c.classList.toggle('on', c.dataset.f === f));
      };
      rows.forEach((r, k) => {
        r.addEventListener('mouseenter', () => setHot(k, true));
        r.addEventListener('mouseleave', () => setHot(-1));
        r.addEventListener('focus', () => setHot(k, true));
        r.addEventListener('blur', () => setHot(-1));
        r.addEventListener('click', (e) => !e.target.closest('button') && setSel(k));
        r.addEventListener('keydown', (e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setSel(k)));
      });
      pins.forEach((p, k) => {
        p.addEventListener('mouseenter', () => setHot(k, false));
        p.addEventListener('mouseleave', () => setHot(-1));
        p.addEventListener('click', () => setSel(k));
      });
      root.addEventListener('click', (e) => {
        const c = e.target.closest('.chip');
        const zb = e.target.closest('.zoom button');
        if (c) {
          f = c.dataset.f;
          filter();
        } else if (zb) {
          z = Math.max(1, Math.min(1.5, z + +zb.dataset.z * 0.25));
          world.style.transform = `scale(${z})`;
        }
      });
      $('.q').addEventListener('input', (e) => {
        q = e.target.value.trim().toLowerCase();
        filter();
      });
      setSel(1);
      filter();

      // Autoplay: hover rows and a pin (the pin lifts, the row lights), then open a store.
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
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null && !(el instanceof SVGElement)) return false;
        const o = root.getBoundingClientRect();
        const k = s();
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / k}px,${(r.top - o.top + r.height * fy) / k}px)`;
        return true;
      };
      const hover = async (i, viaPin) => {
        const el = viaPin ? pins[i].querySelector('.pb') : rows[i];
        cur.classList.toggle('off', !moveTo(el, viaPin ? 0.5 : 0.35, viaPin ? 0.45 : 0.5));
        await wait(850);
        if (!idle()) return false;
        setHot(i, !viaPin);
        await wait(1300);
        if (!idle()) return false;
        setHot(-1);
        return true;
      };
      cur.style.transform = 'translate(700px,620px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          let ok = true;
          for (const [i, pin] of [[0, 0], [2, 0], [4, 1], [7, 0]]) {
            if (!(ok = await hover(i, pin))) break;
          }
          if (!ok) {
            setHot(-1);
            continue;
          }
          const row = rows[3];
          cur.classList.toggle('off', !moveTo(row, 0.35, 0.3));
          await wait(850);
          if (idle()) {
            cur.classList.add('press');
            await wait(130);
            cur.classList.remove('press');
            row.click();
          }
          await wait(2600);
          if (sel !== 1) setSel(1);
          await wait(600);
        }
      })();
    },
    prompt: `Build a store finder screen where a list and a map stay in sync, full viewport (height: 100dvh).

Layout: a two-column grid, 380px list panel and a fluid map. The panel is white with a hairline: logo tile and company name, the title "Find a store", a count line ("8 stores near Harbor District"), a 40px search field and filter chips (All, Open now, Drive-thru; the active chip on an accent-soft fill), then a scrolling list. Each store row is a 14px-radius row with a 34px numbered circle, the name (14.5px semibold, ellipsis), the street, an open-status line with a green dot (amber when closed), the distance in tabular numbers and a star rating. The map is an inline SVG (viewBox 800x640, preserveAspectRatio xMidYMid slice) drawn abstractly: a pale land fill, a soft blue bay, two or three park blobs, minor streets as thin white lines with a faint underlay, avenues as thick white curves with a darker underlay, tiny uppercase place labels. Pins are teardrop shapes (white with an accent hairline and an accent cup icon) plus a small ground shadow ellipse; zoom buttons sit top right.

Sync: hovering or focusing a row lifts that pin; hovering a pin highlights its row and scrolls it into view. Lifted state: the pin's inner group translateY(-12px) scale(1.14) on a slight-overshoot spring (594ms), fill turns accent with a white icon, the shadow grows and fades to 55%, and an HTML tooltip (name, hours, rating) rises above it. Clicking a row or pin selects it: the row gets the accent-soft fill and expands with display: grid and grid-template-rows 0fr to 1fr to reveal Directions and Order ahead buttons. Filters and search hide non-matching rows and fade their pins out.

Accessibility: rows are focusable listitems with aria-labels and aria-expanded, pins are role=button with labels, the tooltip is role=status, prefers-reduced-motion removes the lift transition. Phone (below 760px): stack the map above the list (42% / rest) and drop the zoom controls. Use your accent color for pins and selection. Plain HTML, CSS and JS, no libraries; React-friendly structure (StoreList, StoreRow, MapCanvas, MapPin, PinTooltip).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 11. Activity timeline grouped by day
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-activity',
    cat: 'app-data',
    title: 'Activity timeline',
    sub: 'Grouped by day, filters, live arrivals',
    html: `
<div class="app">
  <header class="top">
    <span class="brand"><span class="mark">${I(P.zap, 16)}</span>Brightline Dental</span>
    <span class="crumb">Projects<i>/</i><b>New patient portal</b></span>
    <span class="grow"></span>
    <span class="live"><i></i>Live</span>
    <span class="avs"><span class="av">AL</span><span class="av t1">TL</span><span class="av t2">HK</span></span>
  </header>
  <div class="cols">
    <main class="feed">
      <div class="fh"><div><h1>Activity</h1><p class="sub">Everything that changed in this project</p></div></div>
      <div class="chips" role="group" aria-label="Filter activity"></div>
      <div class="scroll"><div class="tl"></div></div>
    </main>
    <aside class="rail">
      <section class="card wk"><p class="k">Last 7 days</p><p class="big tn"><b class="tot">12</b> events</p><div class="bars" aria-hidden="true"></div><div class="days" aria-hidden="true"><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span></div></section>
      <section class="card ppl"><p class="k">Most active</p><ul></ul></section>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:60px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .crumb{display:flex;align-items:center;font-size:13.5px;color:var(--ml-muted);white-space:nowrap}
.d .crumb i{margin:0 8px;font-style:normal;color:var(--ml-bar)}
.d .crumb b{font-weight:600;color:var(--ml-ink)}
.d .top .brand{margin-right:12px;padding-right:14px;border-right:1px solid var(--ml-line)}
.d .grow{flex:1}
.d .live{display:inline-flex;align-items:center;gap:7px;height:28px;padding:0 11px;border-radius:999px;background:rgba(29,185,84,.1);font-size:12.5px;font-weight:600;color:#12893C}
.d .live i{position:relative;width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .live i::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:ac-ping 2.2s ease-out infinite}
.d .avs{display:flex}
.d .avs .av{width:30px;height:30px;margin-left:-8px;box-shadow:0 0 0 2px var(--ml-bg)}
.d .avs .av:first-child{margin-left:0}
.d .cols{display:grid;flex:1;grid-template-columns:minmax(0,1fr) 300px;gap:28px;min-height:0;padding:0 28px}
.d .feed{display:flex;flex-direction:column;min-width:0;min-height:0;padding-top:24px}
.d .fh{flex:none}
.d .chips{display:flex;flex:none;gap:8px;margin:18px 0 6px}
.d .chip{display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 12px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .chip:hover{background:var(--ml-surface)}
.d .chip i{font:600 11.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .chip.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .chip.on i{color:var(--ml-accent-ink)}
.d .scroll{flex:1;min-height:0;padding:6px 6px 24px 0;overflow-y:auto;scrollbar-width:thin}
.d .grp{display:grid;grid-template-rows:1fr;transition:grid-template-rows var(--ml-spring-dur) var(--ml-spring),opacity .3s ease}
.d .grp.hide{grid-template-rows:0fr;opacity:0}
.d .gi{min-height:0;overflow:hidden}
.d .gh{position:sticky;top:-6px;z-index:2;display:flex;align-items:baseline;gap:8px;padding:12px 0 8px;background:var(--ml-surface);font-size:13px;font-weight:650}
.d .gh small{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .gl{position:relative}
.d .gl::before{content:"";position:absolute;left:15px;top:16px;bottom:16px;width:2px;border-radius:2px;background:var(--ml-line)}
.d .ev{display:grid;grid-template-rows:1fr;transition:grid-template-rows var(--ml-spring-dur) var(--ml-spring),opacity .3s ease}
.d .ev.hide{grid-template-rows:0fr;opacity:0}
.d .eh{min-height:0;overflow:hidden}
.d .er{display:flex;gap:14px;padding:6px 0 14px}
.d .nd{position:relative;z-index:1;display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line);color:var(--ml-accent)}
.d .nd.f{background:var(--ml-accent-soft)}
.d .nd.s{background:var(--ml-accent);box-shadow:none;color:#fff}
.d .nd.b{background:rgba(29,185,84,.12);box-shadow:none;color:#12893C}
.d .bd{min-width:0;flex:1}
.d .ln{display:flex;align-items:baseline;justify-content:space-between;gap:12px;padding-top:6px;font-size:13.5px;line-height:1.4;color:var(--ml-ink-2)}
.d .ln span{min-width:0}
.d .ln b{font-weight:600;color:var(--ml-ink)}
.d .ln time{flex:none;font:500 12px/1 var(--ml-mono);color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .qt{margin-top:8px;padding:11px 13px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9);font-size:13.5px;line-height:1.45;color:var(--ml-ink-2)}
.d .fl{display:flex;flex-wrap:wrap;gap:8px;margin-top:8px}
.d .fc{display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 11px 0 9px;border-radius:9px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .fc svg{color:var(--ml-accent)}
.d .mv{display:flex;align-items:center;gap:8px;margin-top:8px}
.d .amt{margin-top:6px;font-size:18px;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.d .rail{display:flex;flex-direction:column;gap:16px;min-width:0;padding-top:24px}
.d .rail .card{padding:18px}
.d .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .big{margin-top:8px;font-size:13px;color:var(--ml-muted)}
.d .big b{font-size:30px;line-height:1;font-weight:650;letter-spacing:-.03em;color:var(--ml-ink)}
.d .bars{display:flex;align-items:flex-end;gap:8px;height:84px;margin-top:16px}
.d .bars i{flex:1;height:100%;border-radius:6px 6px 3px 3px;background:var(--ml-bar);transform:scaleY(var(--h));transform-origin:50% 100%;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .bars i.t{background:var(--ml-grad)}
.d .days{display:flex;gap:8px;margin-top:8px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .days span{flex:1;text-align:center}
.d .ppl ul{display:flex;flex-direction:column;gap:12px;margin-top:14px;list-style:none}
.d .ppl li{display:flex;align-items:center;gap:10px;font-size:13.5px;font-weight:600}
.d .ppl li em{margin-left:auto;font:600 12px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
@keyframes ac-ping{0%{opacity:.5;transform:scale(1)}80%,100%{opacity:0;transform:scale(3)}}
@keyframes ac-new{0%{background:var(--ml-accent-soft)}100%{background:transparent}}
.d .er.fresh{animation:ac-new 2.4s ease .3s both;border-radius:12px}
${CURSOR_CSS}
@container scr (max-width: 1100px){.d .cols{grid-template-columns:minmax(0,1fr) 260px;gap:20px}}
@container scr (max-width: 760px){
  .d .cols{grid-template-columns:minmax(0,1fr);padding:0 16px}
  .d .rail,.d .crumb,.d .avs{display:none}
  .d .top{padding:0 16px}
  .d .top .brand{border:0;margin-right:auto}
  .d .chips{overflow-x:auto;scrollbar-width:none}
}
@media (prefers-reduced-motion: reduce){.d .live i::after,.d .er.fresh{animation:none}}`,
    run: (root) => {
      const IC = {
        comment: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
        file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
        status: '<path d="M20 6 9 17l-5-5"/>',
        billing: '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
        people: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/>',
      };
      const SV = (d, s = 16) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const NODE = { comment: '', file: 'f', status: 's', billing: 'b', people: '' };
      const TYPES = [['all', 'All'], ['comment', 'Comments'], ['file', 'Files'], ['status', 'Status'], ['billing', 'Billing']];
      const DAY = [['Today', 'Wed 14 Oct', 6], ['Yesterday', 'Tue 13 Oct', 5], ['Monday', '12 Oct', 4], ['Friday', '9 Oct', 3]];
      // [day index, type, who, html line, extra, time]
      const E = [
        [0, 'comment', 'Maya Reyes', '<b>Maya Reyes</b> commented on <b>Homepage v3</b>', 'qt:Love the new hero. Can we try the blue gradient on the call to action only?', '2:14 PM'],
        [0, 'status', 'Daniel Okafor', '<b>Daniel Okafor</b> moved <b>Booking flow</b>', 'mv:Review|Approved', '1:40 PM'],
        [0, 'file', 'Aiko Tan', '<b>Aiko Tan</b> uploaded 3 files to <b>Brand assets</b>', 'fl:logo-pack.zip|palette.pdf|icons.svg', '11:05 AM'],
        [0, 'billing', 'Northgate', '<b>Northgate</b> paid invoice <b>#1042</b>', 'amt:$4,800', '9:32 AM'],
        [1, 'people', 'Priya Nair', '<b>Priya Nair</b> joined the project as Designer', '', '4:48 PM'],
        [1, 'comment', 'Tomas Lindqvist', '<b>Tomas Lindqvist</b> commented on <b>Pricing table</b>', 'qt:The annual toggle reads clearer now. Shipping this Friday.', '3:20 PM'],
        [1, 'status', 'Daniel Okafor', '<b>Daniel Okafor</b> moved <b>Mobile nav</b>', 'mv:In progress|Review', '10:15 AM'],
        [2, 'file', 'Aiko Tan', '<b>Aiko Tan</b> uploaded <b>wireframes-v2.pdf</b>', 'fl:wireframes-v2.pdf', '5:02 PM'],
        [2, 'billing', 'Sam Whitfield', '<b>Sam Whitfield</b> sent invoice <b>#1043</b> to Kestrel &amp; Co', 'amt:$2,950', '11:40 AM'],
        [2, 'comment', 'Maya Reyes', '<b>Maya Reyes</b> commented on <b>Kickoff notes</b>', 'qt:Contract is signed, kickoff is Thursday at 10.', '9:05 AM'],
        [3, 'status', 'Daniel Okafor', '<b>Daniel Okafor</b> moved <b>Landing page</b>', 'mv:Backlog|In progress', '4:30 PM'],
        [3, 'people', 'Noor Haddad', '<b>Noor Haddad</b> was added as a reviewer', '', '2:12 PM'],
      ].map(([d, t, who, line, ex, time]) => ({ d, t, who, line, ex, time }));
      const ARR = [
        ['comment', 'Priya Nair', '<b>Priya Nair</b> commented on <b>Homepage v3</b>', 'qt:Added spacing notes for the mobile header.', '2:31 PM'],
        ['file', 'Hana Kim', '<b>Hana Kim</b> uploaded <b>invoice-1044.pdf</b>', 'fl:invoice-1044.pdf', '2:36 PM'],
        ['status', 'Maya Reyes', '<b>Maya Reyes</b> moved <b>Homepage v3</b>', 'mv:Review|Approved', '2:42 PM'],
      ];
      const $ = (q) => root.querySelector(q);
      const tl = $('.tl');
      const cur = $('.cur');
      const BARS = [0, 2, 0, 0, 3, 3, 4];
      const initial = (n) => n.split(' ').map((w) => w[0]).join('').slice(0, 2);
      const extra = (ex) => {
        if (!ex) return '';
        const [k, v] = [ex.slice(0, ex.indexOf(':')), ex.slice(ex.indexOf(':') + 1)];
        if (k === 'qt') return `<p class="qt">${v}</p>`;
        if (k === 'fl') return `<div class="fl">${v.split('|').map((n) => `<span class="fc">${SV(IC.file, 15)}${n}</span>`).join('')}</div>`;
        if (k === 'mv') {
          const [a, b] = v.split('|');
          return `<div class="mv"><span class="st nu">${a}</span>${SV('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>', 15)}<span class="st ${b === 'Approved' ? 'ok' : 'wa'}">${b}</span></div>`;
        }
        return `<p class="amt">${v}</p>`;
      };
      const evHtml = (e, fresh) => `<div class="ev" data-t="${e.t}" data-w="${e.who}"><div class="eh"><div class="er${fresh ? ' fresh' : ''}"><span class="nd ${NODE[e.t]}">${SV(IC[e.t], 16)}</span><div class="bd"><p class="ln"><span>${e.line}</span><time>${e.time}</time></p>${extra(e.ex)}</div></div></div></div>`;
      tl.innerHTML = DAY.map(([a, b], g) => `<section class="grp" data-g="${g}"><div class="gi"><div class="gh">${a}<small>${b}</small></div><div class="gl">${E.filter((e) => e.d === g).map((e) => evHtml(e)).join('')}</div></div></section>`).join('');
      let f = 'all';
      const arrived = [];
      const counts = () => {
        const all = [...root.querySelectorAll('.ev')];
        return TYPES.map(([k]) => (k === 'all' ? all.length : all.filter((x) => x.dataset.t === k).length));
      };
      const paintChips = () => {
        const c = counts();
        $('.chips').innerHTML = TYPES.map(([k, n], i) => `<button class="chip${f === k ? ' on' : ''}" type="button" data-f="${k}" aria-pressed="${f === k}">${n}<i>${c[i]}</i></button>`).join('');
        $('.tot').textContent = c[0];
      };
      const paintBars = () => {
        const wed = BARS[6] + arrived.length;
        const vals = BARS.slice(0, 6).concat(wed);
        $('.bars').innerHTML = vals.map((v, i) => `<i class="${i === 6 ? 't' : ''}" style="--h:${Math.max(0.06, v / 6)}"></i>`).join('');
      };
      const paintPeople = () => {
        const n = {};
        root.querySelectorAll('.ev').forEach((e) => {
          const w = e.dataset.w;
          if (w !== 'Northgate') n[w] = (n[w] || 0) + 1;
        });
        const top = Object.entries(n).sort((a, b) => b[1] - a[1]).slice(0, 4);
        $('.ppl ul').innerHTML = top.map(([w, c], i) => `<li><span class="av t${i % 3}">${initial(w)}</span>${w}<em>${c}</em></li>`).join('');
      };
      const applyFilter = () => {
        root.querySelectorAll('.ev').forEach((e) => e.classList.toggle('hide', f !== 'all' && e.dataset.t !== f));
        root.querySelectorAll('.grp').forEach((g) => g.classList.toggle('hide', f !== 'all' && !g.querySelector(`.ev[data-t="${f}"]`)));
        paintChips();
      };
      $('.chips').addEventListener('click', (e) => {
        const c = e.target.closest('.chip');
        if (!c) return;
        f = c.dataset.f;
        applyFilter();
      });
      const arrive = (k) => {
        const [t, who, line, ex, time] = ARR[k % ARR.length];
        const wrap = document.createElement('div');
        wrap.innerHTML = evHtml({ t, who, line, ex, time }, true);
        const el = wrap.firstChild;
        el.classList.add('hide');
        const list = tl.querySelector('.grp .gl');
        list.insertBefore(el, list.firstChild);
        arrived.push(el);
        void el.offsetWidth;
        if (f === 'all' || f === t) el.classList.remove('hide');
        paintChips();
        paintBars();
        paintPeople();
      };
      const clearArrived = () => {
        arrived.splice(0).forEach((el) => {
          el.classList.add('hide');
          setTimeout(() => el.remove(), 700);
        });
        setTimeout(() => {
          paintChips();
          paintPeople();
        }, 720);
        paintBars();
      };
      paintChips();
      paintBars();
      paintPeople();

      // Autoplay: filter Files, Comments, back to All, then a new event arrives at the top.
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
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const k = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / k}px,${(r.top - o.top + r.height * fy) / k}px)`;
        return true;
      };
      const tap = async (el) => {
        cur.classList.toggle('off', !moveTo(el, 0.45, 0.5));
        await wait(850);
        if (!idle() || !el) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      let n = 0;
      cur.style.transform = 'translate(560px,440px)';
      (async () => {
        await wait(1700);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          clearArrived();
          let ok = true;
          for (const k of ['file', 'comment', 'all']) {
            if (!(ok = await tap($(`.chip[data-f="${k}"]`)))) break;
            await wait(1500);
          }
          if (!ok) {
            await wait(600);
            continue;
          }
          arrive(n++);
          await wait(3200);
        }
      })();
    },
    prompt: `Build an activity feed screen grouped by day, with filters and live arrivals, full viewport (height: 100dvh).

Layout: a 60px top bar (logo tile and company name, a breadcrumb "Projects / New patient portal", a green "Live" pill with a pinging dot, an avatar stack), then a two-column body: a fluid feed column and a 300px right rail, 28px gap and padding. The feed has the title "Activity" with one line of supporting text, a row of filter chips (All, Comments, Files, Status, Billing, each with a live count in mono), and a scroll region. Inside, events are grouped by day (Today, Yesterday, Monday, Friday) with a sticky group label that shows the weekday and date. Each group is a vertical timeline: a 2px hairline runs behind 32px round nodes (an icon per type: comment, file, status check, dollar, person-plus; status nodes are solid accent, billing nodes green-tinted, file nodes accent-soft). Beside each node: a sentence with the person in semibold ("Maya Reyes commented on Homepage v3") and a mono timestamp pushed right, then type-specific content: a quote block for comments, file chips with an icon for uploads, a "Review -> Approved" pair of status pills for moves, a large tabular amount for payments. The rail holds a "Last 7 days" card (total, seven scaled bars with today in the accent gradient, day labels) and a "Most active" list with avatars and counts.

Behavior: chips filter without a jump: each event and each group sits in a wrapper with display: grid and grid-template-rows 1fr that collapses to 0fr (plus opacity to 0) on a 587ms critically damped spring; a group collapses when none of its events match. New events arrive at the top of Today the same way (0fr to 1fr), with a 2.4s accent-soft wash that fades out; counts, the total, today's bar (scaleY from the bottom) and the people list update immediately.

Accessibility: chips use aria-pressed, icons are decorative, timestamps are real time elements, prefers-reduced-motion removes the ping and the wash. Phone (below 760px): hide the rail and breadcrumb, let the chips scroll horizontally. Use your accent color for active states. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, FilterChips, DayGroup, ActivityEvent, WeekSummary, ActivePeople).`,
  });

  // ---------------------------------------------------------------------------------------------
  // 12. Comparison table with highlight differences
  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-data-compare',
    cat: 'app-data',
    title: 'Plan comparison table',
    sub: 'Toggle to highlight what differs',
    html: `
<div class="app">
  <header class="top">
    <div><h1>Compare plans</h1><p class="sub">Halden for teams of every size</p></div>
    <div class="ctl">
      <button class="swt" type="button" role="switch" aria-checked="false"><span class="knob"></span>Highlight differences</button>
      <span class="seg" role="group" aria-label="Billing period"><button class="on" type="button" data-b="m" aria-pressed="true">Monthly</button><button type="button" data-b="y" aria-pressed="false">Yearly<em>-20%</em></button></span>
    </div>
  </header>
  <div class="sc"><div class="g" role="table" aria-label="Plan comparison"></div></div>
  ${CURSOR}
</div>`,
    css: `
${COMMON}
.d .top{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px;padding:24px 28px 18px}
.d .ctl{display:flex;align-items:center;gap:12px}
.d .swt{display:inline-flex;align-items:center;gap:9px;height:38px;padding:0 14px 0 9px;border:0;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13.5px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;white-space:nowrap}
.d .knob{position:relative;width:32px;height:19px;border-radius:99px;background:var(--ml-bar);transition:background-color .25s ease}
.d .knob::after{content:"";position:absolute;left:2px;top:2px;width:15px;height:15px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .swt.on .knob{background:var(--ml-accent)}
.d .swt.on .knob::after{transform:translateX(13px)}
.d .seg{display:inline-flex;padding:3px;border-radius:12px;background:rgba(227,233,242,.6)}
.d .seg button{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 14px;border:0;border-radius:9px;background:none;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .seg button.on{background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.08);color:var(--ml-ink)}
.d .seg em{padding:2px 6px;border-radius:999px;background:rgba(29,185,84,.12);font-size:11px;font-style:normal;color:#12893C}
.d .sc{flex:1;min-height:0;margin:0 28px 26px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow);overflow-y:auto;scrollbar-width:thin}
.d .g{display:grid;grid-template-columns:minmax(0,1.35fr) repeat(3,minmax(0,1fr))}
.d .gr{display:contents}
.d .hd{display:contents}
.d .hd > div{position:sticky;top:0;z-index:3;display:flex;flex-direction:column;justify-content:flex-end;gap:2px;padding:18px 18px 16px;background:rgba(255,255,255,.96);border-bottom:1px solid var(--ml-line)}
.d .hd .lab{justify-content:flex-end;font-size:13px;color:var(--ml-muted)}
.d .hd .lab b{display:block;font-size:22px;font-weight:650;letter-spacing:-.03em;color:var(--ml-ink)}
.d .pl{align-items:flex-start}
.d .hd > .pl.rec{background:linear-gradient(180deg,rgba(231,240,255,.95),rgba(255,255,255,.96))}
.d .pn{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .pn em{padding:3px 8px;border-radius:999px;background:var(--ml-accent);color:#fff;font-size:10.5px;font-weight:650;font-style:normal;letter-spacing:.02em}
.d .pp{display:flex;align-items:baseline;gap:4px;margin-top:6px;font-variant-numeric:tabular-nums}
.d .pp b{font-size:30px;line-height:1;font-weight:650;letter-spacing:-.035em}
.d .pp span{font-size:12.5px;color:var(--ml-muted)}
.d .pp b.swap{animation:cp-in 420ms var(--ml-spring) both}
.d .pd{font-size:12.5px;color:var(--ml-muted)}
.d .pl .btn,.d .pl .cta{width:100%;height:34px;margin-top:10px}
.d .gt{grid-column:1 / -1;padding:20px 18px 8px;font-size:11px;font-weight:650;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .rw{display:contents}
.d .c{position:relative;display:flex;align-items:center;min-height:46px;padding:0 18px;border-bottom:1px solid var(--ml-line);font-size:13.5px;font-variant-numeric:tabular-nums;transition:opacity .4s ease,background-color .4s ease;transition-delay:calc(var(--i,0) * 22ms)}
.d .c.l{gap:10px;color:var(--ml-ink-2);font-weight:500}
.d .c.l i{width:6px;height:6px;border-radius:50%;background:var(--ml-accent);opacity:0;transform:scale(.4);transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring);transition-delay:calc(var(--i,0) * 22ms)}
.d .c.p1{background:rgba(231,240,255,.38)}
.d .c svg{flex:none}
.d .ok{color:var(--ml-accent)}
.d .no{color:#B4BDCB}
.d .txt{font-weight:600}
.d .app.diff .rw.same .c{opacity:.34}
.d .app.diff .rw.dif .c{background:rgba(231,240,255,.7)}
.d .app.diff .rw.dif .c.l i{opacity:1;transform:none}
.d .sumr{display:inline-flex;align-items:center;gap:7px;height:26px;padding:0 10px;border-radius:999px;background:var(--ml-accent-soft);font-size:12.5px;font-weight:600;color:var(--ml-accent-ink);opacity:0;transform:translateY(4px);transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .app.diff .sumr{opacity:1;transform:none}
@keyframes cp-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 1100px){.d .g{grid-template-columns:minmax(0,1.2fr) repeat(3,minmax(0,1fr))}.d .hd > div,.d .c{padding-left:14px;padding-right:12px}}
@container scr (max-width: 760px){
  .d .top{flex-direction:column;align-items:flex-start;padding:18px 16px 14px}
  .d .ctl{flex-wrap:wrap}
  .d .sc{margin:0 12px 18px}
  .d .g{grid-template-columns:minmax(0,1.1fr) repeat(2,minmax(0,1fr))}
  .d .p0,.d .hd > .p0{display:none}
  .d .hd > div,.d .c{padding-left:12px;padding-right:8px}
  .d .pp b{font-size:24px}
  .d .pn em,.d .pd{display:none}
}
@media (prefers-reduced-motion: reduce){.d .pp b.swap{animation:none}}`,
    run: (root) => {
      const PLANS = [['Solo', 19, 15, 'One person, one place for work'], ['Team', 49, 39, 'Small teams that ship together', 1], ['Business', 129, 103, 'Larger teams with controls']];
      const R = [
        ['Usage'], ['Projects', ['3', '25', 'Unlimited']], ['Team members', ['1', '10', '50']], ['Storage', ['5 GB', '100 GB', '1 TB']], ['Client portals', [0, '3', 'Unlimited']],
        ['Core'], ['Board and timeline views', [1, 1, 1]], ['Comments and mentions', [1, 1, 1]], ['Mobile apps', [1, 1, 1]], ['Custom fields', [0, 1, 1]], ['Automations', [0, '100 runs', 'Unlimited']], ['Approvals', [0, 0, 1]],
        ['Security'], ['Two-factor sign in', [1, 1, 1]], ['Audit log', [0, 1, 1]], ['Single sign-on', [0, 0, 1]], ['Uptime guarantee', [0, 0, '99.9%']],
        ['Support'], ['Support channel', ['Email', 'Priority email', 'Dedicated manager']], ['Onboarding call', [0, 1, 1]], ['Data export', [1, 1, 1]],
      ];
      const $ = (q) => root.querySelector(q);
      const g = $('.g');
      const app = $('.app');
      const cur = $('.cur');
      const CHK = '<svg class="ok" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Included"><path d="M20 6 9 17l-5-5"/></svg>';
      const DASH = '<svg class="no" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" role="img" aria-label="Not included"><path d="M6 12h12"/></svg>';
      const cell = (v) => (v === 1 ? CHK : v === 0 ? DASH : `<span class="txt">${v}</span>`);
      let yearly = false;
      const head = () =>
        `<div class="hd" role="row"><div class="lab" role="columnheader"><span class="sumr">${diffCount} of ${rowsN} differ</span><b>Features</b>Compare every plan side by side</div>` +
        PLANS.map(([n, m, y, d, rec], i) => `<div class="pl p${i}${rec ? ' rec' : ''}" role="columnheader"><span class="pn">${n}${rec ? '<em>Most popular</em>' : ''}</span><span class="pp"><b class="price" data-i="${i}">$${yearly ? y : m}</b><span>/ month${yearly ? ', billed yearly' : ''}</span></span><span class="pd">${d}</span><button class="${rec ? 'cta' : 'btn'}" type="button">${i === 2 ? 'Talk to sales' : 'Choose ' + n}</button></div>`).join('') +
        '</div>';
      const rowsN = R.filter((r) => r[1]).length;
      const diffCount = R.filter((r) => r[1] && new Set(r[1]).size > 1).length;
      let k = 0;
      g.innerHTML = head() + R.map((r) => {
        if (!r[1]) return `<div class="gt" role="row">${r[0]}</div>`;
        const dif = new Set(r[1]).size > 1;
        k++;
        return `<div class="rw ${dif ? 'dif' : 'same'}" role="row">` + `<div class="c l" role="rowheader" style="--i:${k}"><i></i>${r[0]}</div>` + r[1].map((v, i) => `<div class="c p${i}" role="cell" style="--i:${k}">${cell(v)}</div>`).join('') + '</div>';
      }).join('');
      const sw = $('.swt');
      const sc = $('.sc');
      const setDiff = (on) => {
        app.classList.toggle('diff', on);
        sw.classList.toggle('on', on);
        sw.setAttribute('aria-checked', String(on));
      };
      const setBill = (y) => {
        yearly = y;
        root.querySelectorAll('.seg button').forEach((b) => {
          b.classList.toggle('on', (b.dataset.b === 'y') === y);
          b.setAttribute('aria-pressed', String((b.dataset.b === 'y') === y));
        });
        root.querySelectorAll('.price').forEach((p, i) => {
          p.textContent = '$' + (y ? PLANS[i][2] : PLANS[i][1]);
          p.classList.remove('swap');
          void p.offsetWidth;
          p.classList.add('swap');
          p.nextElementSibling.textContent = y ? '/ month, billed yearly' : '/ month';
        });
      };
      sw.addEventListener('click', () => setDiff(!app.classList.contains('diff')));
      root.addEventListener('click', (e) => {
        const b = e.target.closest('.seg button');
        if (b) setBill(b.dataset.b === 'y');
      });

      // Autoplay: switch highlighting on, scroll the table, switch billing to yearly, then reset.
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
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx) => {
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(850);
        if (!idle() || !el) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(720px,520px)';
      (async () => {
        await wait(1700);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await tap(sw, 0.5))) continue;
          await wait(1800);
          if (idle()) sc.scrollTo({ top: sc.scrollHeight, behavior: 'smooth' });
          await wait(1900);
          if (idle()) sc.scrollTo({ top: 0, behavior: 'smooth' });
          await wait(800);
          if (!(await tap(root.querySelector('.seg [data-b="y"]'), 0.5))) continue;
          await wait(1600);
          if (!(await tap(sw, 0.5))) continue;
          await wait(900);
          if (!(await tap(root.querySelector('.seg [data-b="m"]'), 0.5))) continue;
          await wait(1800);
        }
      })();
    },
    prompt: `Build a plan comparison table screen with a "highlight differences" switch, full viewport (height: 100dvh).

Layout: a header with the title "Compare plans", one line of supporting text, a switch labelled "Highlight differences" (role=switch, a 32px track and a knob that moves with transform) and a Monthly / Yearly segmented control (Yearly carries a small green "-20%" tag). Below it, one white card (18px radius, hairline plus soft shadow) that is the scroll region. Inside is a single CSS grid with columns minmax(0, 1.35fr) and three equal plan columns, using display: contents row wrappers so cells align on one grid. The header row is position: sticky; top: 0 over a nearly opaque white: a left cell with "Features" and a pill "9 of 17 differ" (only visible while highlighting), and three plan cells with the name, a "Most popular" accent badge on the middle plan, a 30px tabular price with "/ month", one line of copy and a button (accent gradient for the popular plan, outlined for the others). The recommended column has a faint accent-soft tint down every row. Body: group titles (11px uppercase, accent ink: Usage, Core, Security, Support), then 46px rows with a label and a value per plan: an accent check icon for included, a pale dash for not included, semibold text for values like "100 GB" or "Unlimited".

Behavior: compute which rows differ (a row differs when its three values are not all equal). With the switch on, rows that are the same drop to 34% opacity and rows that differ get an accent-soft wash and a small accent dot before the label, staggered by 22ms per row on a 400ms transition. Switching to Yearly swaps the prices (each number re-enters with translateY 8px to 0 and opacity) and the suffix.

Accessibility: role=table / row / columnheader / rowheader / cell, check and dash icons have role=img and aria-labels ("Included", "Not included"), the switch and segmented buttons expose aria-checked / aria-pressed, focus rings visible, prefers-reduced-motion removes the price animation. Phone (below 760px): hide the first plan column, stack the header controls, shrink prices. Use your accent color for checks, the badge and highlights. Plain HTML, CSS and JS, no libraries; React-friendly structure (CompareHeader, PlanHeader, FeatureGroup, FeatureRow, ValueCell, BillingToggle).`,
  });

  // @@NEXT
})();
