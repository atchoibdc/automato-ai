(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    dash: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    chev: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    tasks: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    panel: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',
    hash: '<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    type: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>',
    square: '<rect width="18" height="18" x="3" y="3" rx="2"/>',
    command: '<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    box: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
    key: '<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    clip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    archive: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    pie: '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>',
    back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    enter: '<polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>',
    smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    bank: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
    pointer: '<path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    list: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
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

  ML.add({
    id: 'app-shells-sidebar',
    cat: 'app-shells',
    title: 'Sidebar app shell',
    sub: 'Nav pill slides, the page settles in',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Halden</b><span class="ws">${I(P.chev, 15)}</span></div>
    <p class="lbl">Workspace</p>
    <nav class="nav" aria-label="Main">
      <span class="pill" aria-hidden="true"></span>
      <button class="it" type="button">${I(P.dash)}<span>Overview</span></button>
      <button class="it" type="button">${I(P.folder)}<span>Projects</span><em>12</em></button>
      <button class="it" type="button">${I(P.users)}<span>Clients</span></button>
      <button class="it" type="button">${I(P.receipt)}<span>Invoices</span><em>3</em></button>
      <button class="it" type="button">${I(P.chart)}<span>Reports</span></button>
    </nav>
    <div class="foot">
      <div class="store"><p><span>Storage</span><b>68%</b></p><i><s></s></i></div>
      <button class="it set" type="button">${I(P.gear)}<span>Settings</span></button>
      <div class="me"><span class="av">MR</span><p><b>Maya Reyes</b><small>maya@halden.co</small></p></div>
    </div>
  </aside>
  <div class="main">
    <header class="top">
      <p class="crumb">Halden<span>/</span><b class="now"></b></p>
      <label class="search">${I(P.search, 16)}<input type="search" placeholder="Search or jump to" aria-label="Search"><kbd>Ctrl K</kbd></label>
      <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}<i></i></button>
      <span class="av">MR</span>
    </header>
    <main class="page">
      <div class="head in" style="--i:0">
        <div><h1></h1><p class="date"></p></div>
        <div class="acts"><button class="ghost" type="button">${I(P.cal, 16)}Last 30 days</button><button class="cta" type="button">${I(P.plus, 16)}New project</button></div>
      </div>
      <div class="kpis"></div>
      <div class="row">
        <section class="card chart in" style="--i:5">
          <div class="ch"><div><p class="k ck"></p><p class="big"></p></div><p class="leg"><i></i>This period<i class="b"></i>Last period</p></div>
          <div class="plot">
            <svg viewBox="0 0 600 210" preserveAspectRatio="none" aria-hidden="true">
              <defs><linearGradient id="shell-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF4433" stop-opacity=".22"/><stop offset="1" stop-color="#FF4433" stop-opacity="0"/></linearGradient></defs>
              <g class="grid"><line x1="0" x2="600" y1="30" y2="30"/><line x1="0" x2="600" y1="90" y2="90"/><line x1="0" x2="600" y1="150" y2="150"/><line x1="0" x2="600" y1="209" y2="209"/></g>
              <path class="prev"/><path class="area"/><path class="line" pathLength="1"/>
            </svg>
            <span class="dot" aria-hidden="true"><i></i></span>
          </div>
          <div class="xs"><span>Sep 15</span><span>Sep 22</span><span>Sep 29</span><span>Oct 6</span><span>Oct 13</span></div>
        </section>
        <section class="card feed in" style="--i:6">
          <div class="ch"><p class="k">Recent activity</p><button class="link" type="button">View all</button></div>
          <ul class="list"></ul>
        </section>
      </div>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `
.d .app{display:grid;grid-template-columns:232px minmax(0,1fr);height:100%}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;padding:2px 6px 20px}
.d .mark{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .brand b{font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .ws{display:grid;margin-left:auto;color:var(--ml-muted)}
.d .lbl{padding:0 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .nav{position:relative;display:flex;flex-direction:column;gap:2px}
.d .it{position:relative;z-index:1;display:flex;align-items:center;gap:11px;width:100%;height:38px;padding:0 10px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .it svg{flex:none;color:var(--ml-muted);transition:color .2s ease}
.d .it:hover{color:var(--ml-ink)}
.d .it.press{transform:scale(.97)}
.d .it.on{color:var(--ml-accent-ink);font-weight:600}
.d .it.on svg{color:var(--ml-accent)}
.d .it:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .it em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .it.on em{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .pill{position:absolute;top:0;left:0;right:0;height:38px;border-radius:10px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .foot{display:flex;flex-direction:column;gap:8px;margin-top:auto}
.d .store{padding:12px;border-radius:12px;background:var(--ml-surface)}
.d .store p{display:flex;justify-content:space-between;font-size:12px;color:var(--ml-muted)}
.d .store b{font-weight:600;color:var(--ml-ink)}
.d .store i{display:block;height:6px;margin-top:8px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .store s{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.68);transform-origin:0 50%}
.d .me{display:flex;align-items:center;gap:10px;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .me p{display:flex;flex-direction:column;min-width:0}
.d .me b{font-size:13px;font-weight:600}
.d .me small{overflow:hidden;font-size:12px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .top{display:flex;flex:none;align-items:center;gap:12px;height:62px;padding:0 28px;background:rgba(255,255,255,.72);border-bottom:1px solid var(--ml-line)}
.d .crumb{font-size:13.5px;color:var(--ml-muted)}
.d .crumb span{margin:0 7px;color:var(--ml-bar)}
.d .crumb b{font-weight:600;color:var(--ml-ink)}
.d .search{display:flex;align-items:center;gap:8px;width:300px;height:38px;margin-left:auto;padding:0 8px 0 12px;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .2s ease}
.d .search:focus-within{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px}
.d .search input::placeholder{color:var(--ml-muted)}
.d kbd{padding:5px 6px;border-radius:6px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .ic{position:relative;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer}
.d .ic:hover{background:var(--ml-bg)}
.d .ic i{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px var(--ml-surface)}
.d .page{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:24px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d .date{margin-top:4px;font-size:13.5px;color:var(--ml-muted)}
.d .acts{display:flex;gap:10px}
.d .ghost,.d .cta{display:inline-flex;align-items:center;gap:7px;height:38px;padding:0 14px;border:0;border-radius:10px;font-size:13.5px;font-weight:600;white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out}
.d .ghost{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2)}
.d .cta{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d .ghost:active,.d .cta:active{transform:scale(.96)}
.d .card{border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.d .kpi{position:relative;padding:16px 16px 14px;overflow:hidden}
.d .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .v{margin-top:8px;font-size:26px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .dl{display:inline-flex;margin-top:10px;padding:3px 7px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:600;color:#12893C}
.d .dl.dn{background:rgba(255,59,48,.09);color:#D70015}
.d .spark{position:absolute;right:14px;bottom:14px;width:76px;height:30px;overflow:visible}
.d .spark path{fill:none;stroke:var(--ml-accent);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.d .row{display:grid;flex:1;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:14px;min-height:300px}
.d .chart,.d .feed{display:flex;flex-direction:column;min-width:0;padding:18px}
.d .ch{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .big{margin-top:6px;font-size:22px;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.d .leg{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--ml-muted)}
.d .leg i{width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .leg i.b{margin-left:8px;background:var(--ml-bar)}
.d .plot{position:relative;flex:1;min-height:150px;margin-top:14px}
.d .plot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.d .grid line{stroke:var(--ml-line);stroke-width:1}
.d .area{fill:url(#shell-fill)}
.d .line{fill:none;stroke:var(--ml-accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1}
.d .prev{fill:none;stroke:var(--ml-bar);stroke-width:2;stroke-dasharray:5 6}
.d .dot{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px #fff,0 2px 6px rgba(255,68,51,.4)}
.d .dot i{position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:shell-ping 2.4s ease-out infinite}
.d .xs{display:flex;justify-content:space-between;margin-top:10px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .link{border:0;background:none;font-size:12.5px;font-weight:600;color:var(--ml-accent-ink);cursor:pointer}
.d .list{display:flex;flex-direction:column;margin-top:8px;list-style:none}
.d .list li{display:flex;align-items:center;gap:11px;padding:10px 0;border-bottom:1px solid var(--ml-line)}
.d .list li:last-child{border-bottom:0}
.d .list p{flex:1;min-width:0;font-size:13px;line-height:1.35;color:var(--ml-ink-2)}
.d .list b{font-weight:600;color:var(--ml-ink)}
.d .list time{font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted);white-space:nowrap}
.d .page.swap .in{animation:shell-in 560ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
.d .page.swap .line{animation:shell-draw 1100ms var(--ml-ease) 150ms both}
.d .page.swap .area,.d .page.swap .dot{animation:shell-fade 600ms ease 700ms both}
@keyframes shell-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes shell-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes shell-fade{from{opacity:0}to{opacity:1}}
@keyframes shell-ping{0%{opacity:.45;transform:scale(1)}80%,100%{opacity:0;transform:scale(3)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .search,.d .leg{display:none}
  .d .top{padding:0 16px}
  .d .crumb{margin-right:auto}
  .d .page{padding:18px 16px}
  .d .head{flex-direction:column;align-items:flex-start}
  .d .kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .row{grid-template-columns:minmax(0,1fr)}
  .d .chart{min-height:280px}
}
@media (prefers-reduced-motion: reduce){.d .page.swap .in,.d .page.swap .line,.d .page.swap .area,.d .page.swap .dot{animation:none}}`,
    run: (root) => {
      const pages = [
        { t: 'Overview', d: 'Wednesday, 14 October', ck: 'Revenue', big: '$48,210',
          k: [['Revenue', '$48,210', '+12.4%', 1], ['Active projects', '23', '+3', 1], ['Hours logged', '1,284', '+8.1%', 1], ['Outstanding', '$6,930', '-4.2%', 1]],
          a: [32, 38, 35, 44, 41, 52, 49, 58, 55, 63, 61, 72], b: [28, 30, 33, 31, 36, 38, 37, 41, 43, 42, 46, 48],
          f: [['MR', 'Maya Reyes', 'approved the Northgate proposal', '2m'], ['TL', 'Tomas Lindqvist', 'logged 6.5 h on Brightline', '18m'], ['AT', 'Aiko Tan', 'sent invoice #1042', '1h'], ['DO', 'Daniel Okafor', 'moved Solace rebrand to Review', '3h'], ['PN', 'Priya Nair', 'added 4 files to Meridian', '5h']] },
        { t: 'Projects', d: '23 active, 4 due this week', ck: 'Tasks completed', big: '412',
          k: [['Active', '23', '+3', 1], ['On track', '87%', '+4%', 1], ['Due this week', '4', '+1', 0], ['Overdue', '2', '-1', 1]],
          a: [20, 26, 31, 29, 38, 44, 42, 51, 57, 55, 64, 69], b: [22, 24, 27, 30, 29, 33, 36, 38, 37, 41, 44, 45],
          f: [['DO', 'Daniel Okafor', 'closed 8 tasks in Solace rebrand', '6m'], ['HK', 'Hana Kim', 'set a deadline on Meridian app', '40m'], ['LO', 'Luis Ortega', 'started Kestrel onboarding', '2h'], ['PN', 'Priya Nair', 'shared the Q4 roadmap', '4h'], ['SW', 'Sam Whitfield', 'archived Halden site v1', '1d']] },
        { t: 'Clients', d: '58 clients across 6 industries', ck: 'Client revenue', big: '$212,400',
          k: [['Clients', '58', '+5', 1], ['Retention', '94%', '+2%', 1], ['Avg. value', '$3,660', '+6.3%', 1], ['At risk', '3', '+1', 0]],
          a: [40, 42, 47, 45, 50, 54, 53, 58, 62, 60, 66, 70], b: [36, 38, 39, 42, 41, 45, 47, 46, 50, 52, 51, 55],
          f: [['AT', 'Aiko Tan', 'signed Brightline Dental', '12m'], ['MR', 'Maya Reyes', 'booked a call with Northgate', '1h'], ['TL', 'Tomas Lindqvist', 'renewed Meridian Foods', '3h'], ['HK', 'Hana Kim', 'flagged Kestrel as at risk', '6h'], ['LO', 'Luis Ortega', 'added 2 contacts to Solace', '1d']] },
        { t: 'Invoices', d: '3 awaiting payment', ck: 'Collected', big: '$31,780',
          k: [['Collected', '$31,780', '+9.8%', 1], ['Outstanding', '$6,930', '-4.2%', 1], ['Overdue', '$1,240', '+$310', 0], ['Days to pay', '11', '-2 days', 1]],
          a: [18, 30, 26, 39, 35, 47, 44, 52, 48, 60, 57, 66], b: [20, 24, 28, 27, 31, 34, 33, 38, 40, 39, 43, 46],
          f: [['AT', 'Aiko Tan', 'sent invoice #1042 to Kestrel', '1h'], ['SW', 'Sam Whitfield', 'recorded $4,800 from Northgate', '2h'], ['MR', 'Maya Reyes', 'sent a reminder to Solace', '5h'], ['PN', 'Priya Nair', 'refunded $120 to Meridian', '1d'], ['DO', 'Daniel Okafor', 'created invoice #1043', '2d']] },
        { t: 'Reports', d: 'Updated 6 minutes ago', ck: 'Utilization', big: '78%',
          k: [['Utilization', '78%', '+3%', 1], ['Billable hours', '1,046', '+7.5%', 1], ['Margin', '41%', '+1.8%', 1], ['Forecast', '$52,900', '+9.7%', 1]],
          a: [55, 58, 54, 61, 63, 60, 66, 64, 70, 72, 69, 76], b: [50, 52, 51, 55, 54, 57, 58, 57, 60, 61, 60, 63],
          f: [['HK', 'Hana Kim', 'exported the October report', '6m'], ['TL', 'Tomas Lindqvist', 'shared utilization with leads', '2h'], ['MR', 'Maya Reyes', 'scheduled a weekly digest', '1d'], ['SW', 'Sam Whitfield', 'added a margin goal', '2d'], ['LO', 'Luis Ortega', 'compared Q3 and Q4', '3d']] },
      ];
      const $ = (s) => root.querySelector(s);
      const page = $('.page');
      const pill = $('.pill');
      const items = [...root.querySelectorAll('.nav .it')];
      const cur = $('.cur');
      // smooth line through the points (Catmull-Rom to cubic Bezier) in the 600x210 chart box
      const pts = (vals, w, h, top) => vals.map((v, i) => [(i * w) / (vals.length - 1), h - ((v - 0) / 100) * (h - top)]);
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)},${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)},${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
        }
        return d;
      };
      // count a value like "$48,210", "87%" or "1,046" up from zero
      const roll = (el, to) => {
        const m = to.match(/^([^\d]*)([\d,.]+)(.*)$/);
        if (!m) return void (el.textContent = to);
        const end = parseFloat(m[2].replace(/,/g, ''));
        const dec = (m[2].split('.')[1] || '').length;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 750);
          const v = end * (1 - Math.pow(1 - k, 3));
          el.textContent = m[1] + v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      let now = -1;
      const render = (i, animate) => {
        const p = pages[i];
        now = i;
        items.forEach((b, k) => {
          b.classList.toggle('on', k === i);
          if (k === i) b.setAttribute('aria-current', 'page');
          else b.removeAttribute('aria-current');
        });
        pill.style.transform = `translateY(${items[i].offsetTop}px)`;
        $('h1').textContent = p.t;
        $('.now').textContent = p.t;
        $('.date').textContent = p.d;
        $('.ck').textContent = p.ck;
        $('.kpis').innerHTML = p.k
          .map(([label, v, dl, good], k) => {
            const sp = p.a.map((n, j) => n + Math.sin(j * 1.3 + k * 2) * 9);
            const sd = curve(pts(sp, 76, 30, 0).map(([x, y]) => [x, y * 0.9]));
            return `<div class="card kpi in" style="--i:${k + 1}"><p class="k">${label}</p><p class="v">${v}</p><span class="dl${good ? '' : ' dn'}">${dl}</span><svg class="spark" viewBox="0 0 76 30" aria-hidden="true"><path d="${sd}"/></svg></div>`;
          })
          .join('');
        const line = pts(p.a, 600, 200, 20);
        const d = curve(line);
        $('.line').setAttribute('d', d);
        $('.area').setAttribute('d', `${d} L600,210 L0,210 Z`);
        $('.prev').setAttribute('d', curve(pts(p.b, 600, 200, 20)));
        const last = line[line.length - 1];
        const dot = $('.dot');
        dot.style.left = '100%';
        dot.style.top = `${(last[1] / 210) * 100}%`;
        $('.list').innerHTML = p.f
          .map(([ini, name, what, t]) => `<li><span class="av">${ini}</span><p><b>${name}</b> ${what}</p><time>${t}</time></li>`)
          .join('');
        if (animate) {
          page.classList.remove('swap');
          void page.offsetWidth;
          page.classList.add('swap');
          root.querySelectorAll('.kpi .v').forEach((el, k) => roll(el, p.k[k][1]));
          roll($('.big'), p.big);
        } else $('.big').textContent = p.big;
      };
      items.forEach((b, k) => b.addEventListener('click', () => k !== now && render(k, true)));
      render(0, false);

      // Autoplay: a demo cursor walks the nav; any real input hands control to the visitor for 4s.
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
      const moveTo = (el, fx = 0.3, fy = 0.55) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
      };
      cur.style.transform = 'translate(620px,520px)';
      (async () => {
        await wait(1200);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const next = items[(now + 1) % items.length];
          const shown = next.offsetParent !== null; // the sidebar is hidden at phone width: switch without the cursor
          cur.classList.toggle('off', !shown);
          if (shown) moveTo(next);
          await wait(850);
          if (idle()) {
            cur.classList.add('press');
            next.classList.add('press');
            await wait(140);
            cur.classList.remove('press');
            next.classList.remove('press');
            next.click();
          }
          await wait(3000);
        }
      })();
    },
    prompt: `Build the main app shell for a SaaS product: a fixed left sidebar and a content area, as one full-viewport layout (height: 100dvh; the content column scrolls on its own, the sidebar never scrolls away).

Layout: CSS grid with columns 232px and minmax(0, 1fr). Sidebar (white, 1px right hairline): brand row with a 30px rounded logo tile and a workspace switcher chevron; a small uppercase "Workspace" label; nav items 38px tall with an 18px line icon, label and an optional count pill (Projects 12, Invoices 3); at the bottom a storage meter, a Settings item and the signed-in user (avatar initials, name, email). Content column: a 62px top bar (breadcrumb, a 300px search field with a Ctrl K hint, notifications button with an unread dot, avatar), then the page: title and date on the left, a date-range button and a primary "New project" button on the right, a row of 4 KPI cards (label, big tabular number, a green or red delta pill, a tiny sparkline), then a revenue area chart card next to a recent activity list.

Motion: the active nav item sits on ONE shared highlight pill (absolutely positioned behind the items) that moves with transform: translateY(<item offsetTop>) and a critically damped spring (587ms, linear() spring curve), never by toggling a background on each item. On navigation, re-trigger an entrance on the page blocks: opacity 0 to 1 and translateY(8px) to 0, staggered 45ms, the chart line drawing itself (pathLength="1", stroke-dasharray: 1, stroke-dashoffset 1 to 0 over 1.1s) and the KPI numbers counting up over 750ms with an ease-out cubic. The last chart point carries a soft pinging ring.

Accessibility: nav items are buttons (or links) with aria-current="page" on the active one, visible :focus-visible rings, the search has an aria-label, and prefers-reduced-motion removes the entrance and draw animations (content still updates). Responsive: below 760px hide the sidebar (move nav into a menu button), stack the chart and the list, and show KPIs two per row. Use your brand's accent color for the pill, the chart and the primary button. Plain HTML, CSS and JS, no libraries; React-friendly structure (Sidebar, TopBar, Page).`,
  });

  ML.add({
    id: 'app-shells-rail',
    cat: 'app-shells',
    title: 'Collapsible icon rail',
    sub: 'Labels fold into a 68px rail',
    html: `
<div class="app">
  <div class="main">
    <header class="top">
      <button class="tog" type="button" aria-label="Expand sidebar" aria-expanded="false">${I(P.panel, 19)}</button>
      <p class="crumb">Fernway<span>/</span><b class="now"></b></p>
      <button class="ic" type="button" aria-label="Search">${I(P.search, 18)}</button>
      <button class="ic" type="button" aria-label="Notifications">${I(P.bell, 18)}<i></i></button>
      <span class="av">TL</span>
    </header>
    <main class="page">
      <div class="head in" style="--i:0">
        <div><h1></h1><p class="date"></p></div>
        <button class="cta" type="button">${I(P.plus, 16)}New task</button>
      </div>
      <div class="cols">
        <section class="card list in" style="--i:1"><ul class="rows"></ul></section>
        <aside class="side">
          <section class="card week in" style="--i:2">
            <p class="k">This week</p>
            <p class="wk"><b class="dn">18</b><span>of 24 tasks done</span></p>
            <div class="bars" aria-hidden="true"></div>
            <div class="days" aria-hidden="true"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div>
          </section>
          <section class="card next in" style="--i:3">
            <div class="pic" aria-hidden="true"><svg viewBox="0 0 200 110" preserveAspectRatio="none"><circle cx="152" cy="36" r="12" fill="#fff"/><path d="M0 110V80l50-32 40 30 40-22 70 44v10Z" fill="#9CC4FF"/><path d="M0 110V96l60-24 60 28 80-16v26Z" fill="#FF7A3D"/></svg></div>
            <div class="nb"><p class="k">Up next</p><p class="nt">Venue walkthrough</p><p class="ns">Wed, 10:30 - Northgate HQ</p></div>
          </section>
        </aside>
      </div>
    </main>
  </div>
  <div class="scrim" aria-hidden="true"></div>
  <div class="base" aria-hidden="true"></div>
  <nav class="rail" aria-label="Main">
    <span class="hair" aria-hidden="true"></span>
    <div class="rh"><span class="mark">${I(P.mark, 16)}</span><b class="fade">Fernway</b></div>
    <div class="items">
      <span class="pill" aria-hidden="true"></span>
      <button class="it" type="button" data-t="My tasks">${I(P.tasks, 20)}<span class="fade">My tasks</span><em class="fade">8</em></button>
      <button class="it" type="button" data-t="Inbox">${I(P.inbox, 20)}<span class="fade">Inbox</span><em class="fade">5</em></button>
      <button class="it" type="button" data-t="Calendar">${I(P.cal, 20)}<span class="fade">Calendar</span></button>
      <button class="it" type="button" data-t="Projects">${I(P.folder, 20)}<span class="fade">Projects</span><em class="fade">12</em></button>
    </div>
    <div class="rfoot">
      <button class="it set" type="button" data-t="Settings">${I(P.gear, 20)}<span class="fade">Settings</span></button>
      <div class="me"><span class="av">TL</span><p class="fade"><b>Tomas Lindqvist</b><small>Product lead</small></p></div>
    </div>
  </nav>
  <div class="tip" role="tooltip"></div>
  ${CURSOR}
</div>`,
    css: `
.d .app{position:relative;height:100%;overflow:hidden}
.d .main{display:flex;flex-direction:column;height:100%;margin-left:68px;min-width:0}
.d .base{position:absolute;left:0;top:0;bottom:0;width:68px;background:var(--ml-bg)}
.d .scrim{position:absolute;inset:0;background:rgba(35,15,10,.16);opacity:0;pointer-events:none;transition:opacity .35s ease}
.d .app.open .scrim{opacity:1}
.d .rail{position:absolute;left:0;top:0;bottom:0;z-index:5;display:flex;flex-direction:column;width:232px;padding:14px 12px;background:var(--ml-bg);clip-path:inset(0 164px 0 0);transition:clip-path var(--ml-spring-dur) var(--ml-spring),box-shadow .4s ease}
.d .app.open .rail{clip-path:inset(0 -48px 0 0);box-shadow:var(--ml-shadow-lg)}
.d .hair{position:absolute;left:67px;top:0;bottom:0;width:1px;background:var(--ml-line);transition:opacity .3s ease}
.d .app.open .hair{opacity:0}
.d .fade{opacity:0;transform:translateX(-6px);transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .app.open .fade{opacity:1;transform:none;transition-delay:.06s}
.d .rh{display:flex;align-items:center;gap:12px;height:44px;margin-bottom:14px;padding-left:7px}
.d .mark{display:grid;place-items:center;flex:none;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .rh b{font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .items{position:relative;display:flex;flex-direction:column;gap:4px}
.d .pill{position:absolute;top:0;left:0;width:208px;height:42px;border-radius:10px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);clip-path:inset(0 164px 0 0 round 10px);transition:transform var(--ml-spring-dur) var(--ml-spring),clip-path var(--ml-spring-dur) var(--ml-spring)}
.d .app.open .pill{clip-path:inset(0 0 0 0 round 10px)}
.d .it{position:relative;z-index:1;display:flex;align-items:center;gap:14px;width:100%;height:42px;padding:0 12px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;white-space:nowrap;cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .it svg{flex:none;color:var(--ml-muted);transition:color .2s ease}
.d .it:hover{color:var(--ml-ink)}
.d .it.on{color:var(--ml-accent-ink);font-weight:600}
.d .it.on svg{color:var(--ml-accent)}
.d .it:focus-visible,.d .tog:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d button.press{transform:scale(.96)}
.d .it em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .it.on em{background:var(--ml-bg);color:var(--ml-accent-ink)}
.d .rfoot{display:flex;flex-direction:column;gap:6px;margin-top:auto}
.d .me{display:flex;align-items:center;gap:12px;padding:12px 0 0 5px;border-top:1px solid var(--ml-line)}
.d .me p{display:flex;flex-direction:column;min-width:0;white-space:nowrap}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .tip{position:absolute;left:78px;top:0;z-index:20;padding:7px 11px;border-radius:9px;background:var(--ml-ink);color:#fff;font-size:12.5px;font-weight:600;white-space:nowrap;box-shadow:var(--ml-shadow);opacity:0;transform:translate(-8px,var(--y,0));transition:opacity .18s ease,transform .32s var(--ml-ease);pointer-events:none}
.d .tip.on{opacity:1;transform:translate(0,var(--y,0))}
.d .top{display:flex;flex:none;align-items:center;gap:8px;height:60px;padding:0 24px 0 14px;background:rgba(255,255,255,.72);border-bottom:1px solid var(--ml-line)}
.d .tog,.d .ic{position:relative;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .tog:hover,.d .ic:hover{background:var(--ml-bg)}
.d .app.open .tog{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .ic i{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px var(--ml-surface)}
.d .crumb{margin:0 auto 0 6px;font-size:13.5px;color:var(--ml-muted)}
.d .crumb span{margin:0 7px;color:var(--ml-bar)}
.d .crumb b{font-weight:600;color:var(--ml-ink)}
.d .page{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:24px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d .date{margin-top:4px;font-size:13.5px;color:var(--ml-muted)}
.d .cta{display:inline-flex;align-items:center;gap:7px;height:38px;padding:0 15px;border:0;border-radius:10px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22);font-size:13.5px;font-weight:600;white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out}
.d .cta:active{transform:scale(.96)}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .cols{display:grid;flex:1;grid-template-columns:minmax(0,1fr) 288px;gap:16px;min-height:0}
.d .list{padding:6px 0;align-self:start}
.d .rows{list-style:none}
.d .row{display:flex;align-items:center;gap:14px;padding:13px 20px;border-bottom:1px solid var(--ml-line)}
.d .row:last-child{border-bottom:0}
.d .row p{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0}
.d .row b{overflow:hidden;font-size:14px;font-weight:600;white-space:nowrap;text-overflow:ellipsis;transition:color .2s ease}
.d .row small{font-size:12.5px;color:var(--ml-muted)}
.d .row.done b{color:var(--ml-muted);text-decoration:line-through}
.d .tag{padding:4px 9px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:600;white-space:nowrap}
.d .row time{width:52px;text-align:right;font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
.d .ck{display:grid;place-items:center;flex:none;width:22px;height:22px;border:0;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;cursor:pointer;transition:background-color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .ck svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .ck.on{background:var(--ml-accent);box-shadow:none}
.d .ck.on svg{opacity:1;transform:none}
.d .tm{display:grid;place-items:center;flex:none;width:52px;height:34px;border-radius:9px;background:var(--ml-surface);font:600 12px/1 var(--ml-mono);color:var(--ml-ink-2)}
.d .pc{display:grid;place-items:center;flex:none;width:44px;height:34px;border-radius:9px;background:var(--ml-accent-soft);font:650 12px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d .side{display:flex;flex-direction:column;gap:16px;min-width:0}
.d .week{padding:18px}
.d .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .wk{display:flex;align-items:baseline;gap:8px;margin-top:8px;font-size:13px;color:var(--ml-muted)}
.d .wk b{font-size:30px;line-height:1;font-weight:650;letter-spacing:-.03em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .bars{display:flex;align-items:flex-end;gap:8px;height:96px;margin-top:16px}
.d .bars i{flex:1;height:100%;border-radius:6px 6px 3px 3px;background:var(--ml-bar);transform:scaleY(var(--h));transform-origin:50% 100%}
.d .bars i.t{background:var(--ml-grad)}
.d .days{display:flex;gap:8px;margin-top:8px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .days span{flex:1;text-align:center}
.d .next{overflow:hidden}
.d .pic{height:104px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-accent-line))}
.d .pic svg{display:block;width:100%;height:100%}
.d .nb{padding:14px 18px 16px}
.d .nt{margin-top:6px;font-size:15px;font-weight:600;letter-spacing:-.01em}
.d .ns{margin-top:2px;font-size:12.5px;color:var(--ml-muted)}
.d .page.swap .in{animation:rail-in 560ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
.d .page.swap .bars i{animation:rail-bar 700ms var(--ml-ease) both;animation-delay:calc(var(--n,0) * 45ms + 200ms)}
@keyframes rail-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes rail-bar{from{transform:scaleY(0)}to{transform:scaleY(var(--h))}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .main{margin-left:0}
  .d .base,.d .rail,.d .scrim,.d .tip,.d .tog,.d .side,.d .tag{display:none}
  .d .top{padding:0 16px}
  .d .crumb{margin-left:0}
  .d .page{padding:18px 16px}
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .row{padding:12px 14px}
}
@media (prefers-reduced-motion: reduce){.d .page.swap .in,.d .page.swap .bars i{animation:none}}`,
    run: (root) => {
      const CHECK = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const pages = [
        { t: 'My tasks', d: 'Wednesday, 14 October - 3 due today', lead: 'ck', bars: [0.5, 0.78, 0.6, 0.92, 0.38, 0.16, 0.1], rows: [
          ['Approve menu photography brief', 'Meridian Foods', 'Design', 'Today', 0],
          ['Send revised quote to Kestrel', 'Kestrel & Co', 'Sales', 'Today', 0],
          ['Review onboarding emails', 'Brightline Dental', 'Content', 'Today', 0],
          ['Book venue walkthrough', 'Northgate', 'Ops', 'Wed', 0],
          ['Update Q4 roadmap deck', 'Internal', 'Planning', 'Wed', 0],
          ['Reconcile October expenses', 'Finance', 'Finance', 'Fri', 1],
          ['Publish Solace case study', 'Solace Studio', 'Content', 'Fri', 1]] },
        { t: 'Inbox', d: '5 unread mentions', lead: 'av', bars: [0.4, 0.55, 0.9, 0.5, 0.7, 0.2, 0.12], rows: [
          ['Priya Nair', 'commented on "Q4 roadmap"', 'Mention', '2m'],
          ['Daniel Okafor', 'assigned you "Review pricing page"', 'Assigned', '14m'],
          ['Aiko Tan', 'replied in Kestrel onboarding', 'Reply', '1h'],
          ['Hana Kim', 'shared "October report" with you', 'Shared', '3h'],
          ['Luis Ortega', 'moved Solace rebrand to Review', 'Update', '5h'],
          ['Sam Whitfield', 'completed "Archive Halden site v1"', 'Done', '1d']] },
        { t: 'Calendar', d: 'Today and tomorrow', lead: 'tm', bars: [0.3, 0.9, 0.62, 0.45, 0.8, 0.1, 0.1], rows: [
          ['Design critique', 'Studio room - 45 min', 'Team', '30m', '09:30'],
          ['Meridian check-in', 'Video call - Priya Nair', 'Client', '30m', '11:00'],
          ['Roadmap review', 'Product - Maya Reyes', 'Planning', '1h', '13:30'],
          ['Venue walkthrough', 'Northgate HQ', 'On site', '1h', '10:30'],
          ['Weekly planning', 'Whole team', 'Team', '45m', '15:00']] },
        { t: 'Projects', d: '12 active, 2 due this week', lead: 'pr', bars: [0.45, 0.5, 0.58, 0.66, 0.74, 0.3, 0.2], rows: [
          ['Solace rebrand', 'Daniel Okafor - 14 tasks left', 'Design', 'Oct 28', 72],
          ['Meridian menu app', 'Hana Kim - 22 tasks left', 'Build', 'Nov 12', 48],
          ['Kestrel onboarding', 'Luis Ortega - 6 tasks left', 'Ops', 'Oct 21', 86],
          ['Northgate event site', 'Aiko Tan - 18 tasks left', 'Web', 'Nov 3', 35],
          ['Brightline reporting', 'Sam Whitfield - 3 tasks left', 'Data', 'Oct 17', 93]] },
      ];
      const $ = (s) => root.querySelector(s);
      const app = $('.app');
      const page = $('.page');
      const pill = $('.pill');
      const tip = $('.tip');
      const tog = $('.tog');
      const rows = $('.rows');
      const cur = $('.cur');
      const items = [...root.querySelectorAll('.rail .items .it')];
      let now = -1;
      let done = 18;
      const lead = (p, r) =>
        p.lead === 'ck' ? `<button class="ck${r[4] ? ' on' : ''}" type="button" aria-label="Mark done">${CHECK}</button>`
        : p.lead === 'av' ? `<span class="av">${r[0].split(' ').map((w) => w[0]).join('')}</span>`
        : p.lead === 'tm' ? `<span class="tm">${r[4]}</span>`
        : `<span class="pc">${r[4]}%</span>`;
      const setOpen = (on) => {
        app.classList.toggle('open', on);
        tog.setAttribute('aria-expanded', String(on));
        tog.setAttribute('aria-label', on ? 'Collapse sidebar' : 'Expand sidebar');
        if (on) tip.classList.remove('on');
      };
      const showTip = (it) => {
        if (!it || app.classList.contains('open') || it.offsetParent === null) return void tip.classList.remove('on');
        tip.textContent = it.dataset.t;
        tip.style.setProperty('--y', `${$('.items').offsetTop + it.offsetTop + 5}px`);
        tip.classList.add('on');
      };
      const render = (i, animate) => {
        const p = pages[i];
        now = i;
        items.forEach((b, k) => {
          b.classList.toggle('on', k === i);
          if (k === i) b.setAttribute('aria-current', 'page');
          else b.removeAttribute('aria-current');
        });
        pill.style.transform = `translateY(${items[i].offsetTop}px)`;
        $('h1').textContent = p.t;
        $('.now').textContent = p.t;
        $('.date').textContent = p.d;
        rows.innerHTML = p.rows
          .map((r, k) => `<li class="row in${p.lead === 'ck' && r[4] ? ' done' : ''}" style="--i:${k + 2}">${lead(p, r)}<p><b>${r[0]}</b><small>${r[1]}</small></p><span class="tag">${r[2]}</span><time>${r[3]}</time></li>`)
          .join('');
        $('.bars').innerHTML = p.bars.map((h, k) => `<i class="${k === 1 ? 't' : ''}" style="--h:${h};--n:${k}"></i>`).join('');
        if (animate) {
          page.classList.remove('swap');
          void page.offsetWidth;
          page.classList.add('swap');
        }
      };
      items.forEach((b, k) => {
        b.addEventListener('click', () => k < pages.length && k !== now && render(k, true));
        b.addEventListener('mouseenter', () => showTip(b));
        b.addEventListener('focus', () => showTip(b));
        b.addEventListener('mouseleave', () => tip.classList.remove('on'));
        b.addEventListener('blur', () => tip.classList.remove('on'));
      });
      tog.addEventListener('click', () => setOpen(!app.classList.contains('open')));
      rows.addEventListener('click', (e) => {
        const b = e.target.closest('.ck');
        if (!b) return;
        const on = b.classList.toggle('on');
        b.closest('.row').classList.toggle('done', on);
        done += on ? 1 : -1;
        $('.dn').textContent = done;
      });
      render(0, false);

      // Autoplay: the cursor hovers a rail icon (tooltip), expands the rail, switches page, collapses, ticks a task.
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
        tip.classList.remove('on');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        cur.classList.remove('off');
        return true;
      };
      const go = async (el, fx, fy) => {
        if (!moveTo(el, fx, fy)) cur.classList.add('off');
        await wait(820);
      };
      const tap = async (el) => {
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(560px,420px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const nxt = items[(now + 1) % pages.length];
          await go(nxt, 0.3, 0.5);
          if (!idle()) continue;
          showTip(nxt);
          await wait(1300);
          tip.classList.remove('on');
          await go(tog);
          if (!(await tap(tog))) continue;
          await wait(1000);
          await go(nxt, 0.5, 0.5);
          if (!(await tap(nxt))) continue;
          await wait(1800);
          await go(tog);
          if (!(await tap(tog))) continue;
          await wait(900);
          const ck = root.querySelector('.ck:not(.on)');
          if (ck && idle()) {
            await go(ck);
            await tap(ck);
          }
          await wait(2400);
        }
      })();
    },
    prompt: `Build a collapsible icon-rail navigation for a project-management web app, full viewport (height: 100dvh). Collapsed it is a 68px rail of icons; expanded it is a 232px sidebar with labels.

Structure: the page content has a fixed margin-left of 68px and never reflows. The sidebar is one absolutely positioned 232px panel on top of it. Collapsed state is clip-path: inset(0 164px 0 0) (only the first 68px is visible); expanded is clip-path: inset(0 -48px 0 0) plus a soft large shadow. Animate clip-path over 587ms with a critically damped spring linear() curve. Never animate width. A hamburger/panel button in the top bar toggles it (aria-expanded, aria-label switching between Expand sidebar and Collapse sidebar); while expanded, dim the content with a rgba scrim that fades in (pointer-events: none) and persist the choice in localStorage.

Items: 42px tall buttons with a 20px line icon at x=24 so the icons never move. Labels and count badges are separate spans that fade (opacity 0 to 1, translateX(-6px) to 0) with a 60ms delay on expand and no delay on collapse. The active item sits on ONE shared highlight pill (accent-soft fill, 1px accent-line ring) positioned absolutely behind the items, moved with transform: translateY(item.offsetTop); give the pill the same clip-path so it is a 44px rounded square when collapsed and a full-width pill when expanded.

Tooltips: a single tooltip element (dark ink pill, 12.5px semibold) outside the clipped panel. On hover or keyboard focus of a rail item while collapsed, set its translateY to the item's top and fade it in (180ms, 8px slide); it glides between items and is hidden while expanded.

Page: top bar with the toggle, breadcrumb, search and avatar; title row with a primary button; a task list card (circular checkboxes that fill with a bouncing check, struck-through done rows, a project tag, due date) next to a weekly summary card (bars growing with scaleY from the bottom, today highlighted) and an Up next card with a drawn sun-and-mountain image.

Accessibility: nav landmark, aria-current="page", visible focus rings, prefers-reduced-motion removes the entrance animations. Phone (under 760px): hide the rail and switch to a bottom tab bar, stack the cards. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (Rail, RailItem, Tooltip, TopBar, TaskList, WeekCard).`,
  });

  ML.add({
    id: 'app-shells-topnav',
    cat: 'app-shells',
    title: 'Top-nav app shell',
    sub: 'Tab underline glides, sub-tabs filter',
    html: `
<div class="app">
  <header class="bar">
    <div class="logo"><span class="mark">${I(P.bank, 16)}</span><b>Tally</b></div>
    <nav class="tabs" aria-label="Main">
      <span class="ul" aria-hidden="true"></span>
      <button class="tab" type="button">Overview</button>
      <button class="tab" type="button">Customers</button>
      <button class="tab" type="button">Invoices</button>
      <button class="tab" type="button">Expenses</button>
      <button class="tab" type="button">Reports</button>
    </nav>
    <span class="sync"><i></i>Synced</span>
    <button class="ic" type="button" aria-label="Search">${I(P.search, 18)}</button>
    <button class="ic" type="button" aria-label="Notifications">${I(P.bell, 18)}<u></u></button>
    <span class="av">AL</span>
  </header>
  <main class="page">
    <div class="wrap">
      <div class="head in" style="--i:0">
        <div><p class="eyebrow">Brightline Dental</p><h1></h1></div>
        <div class="acts"><button class="ghost" type="button">Export</button><button class="cta" type="button">${I(P.plus, 16)}<span></span></button></div>
      </div>
      <div class="subs in" style="--i:1" role="tablist"></div>
      <section class="card sum in" style="--i:2">
        <div class="stats"></div>
        <div class="mix" aria-hidden="true"></div>
        <p class="lg"></p>
      </section>
      <section class="card tbl in" style="--i:3">
        <div class="th"></div>
        <ul class="rows"></ul>
      </section>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `
.d .app{display:flex;flex-direction:column;height:100%}
.d .bar{display:flex;flex:none;align-items:center;gap:10px;height:62px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .logo{display:flex;align-items:center;gap:10px;margin-right:22px;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .mark{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .tabs{position:relative;display:flex;align-self:stretch;min-width:0;margin-right:auto;scrollbar-width:none}
.d .tabs::-webkit-scrollbar{display:none}
.d .tab{height:100%;padding:0 16px;border:0;background:none;color:var(--ml-muted);font-size:14px;font-weight:550;white-space:nowrap;cursor:pointer;transition:color .2s ease}
.d .tab:hover{color:var(--ml-ink)}
.d .tab.on{color:var(--ml-ink);font-weight:650}
.d .tab:focus-visible,.d .sub:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-4px;border-radius:8px}
.d .ul{position:absolute;left:0;bottom:0;width:100px;height:3px;border-radius:3px 3px 0 0;background:var(--ml-accent);transform-origin:0 50%;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .sync{display:inline-flex;align-items:center;gap:7px;padding:6px 11px 6px 10px;border-radius:999px;background:rgba(29,185,84,.1);font-size:12px;font-weight:600;color:#12893C}
.d .sync i{position:relative;width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .sync i::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:topnav-ping 2.2s ease-out infinite}
.d .ic{position:relative;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer}
.d .ic:hover{background:var(--ml-surface)}
.d .ic u{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px var(--ml-bg)}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .page{flex:1;min-height:0;padding:28px;overflow-y:auto;scrollbar-width:thin}
.d .wrap{display:flex;flex-direction:column;gap:18px;max-width:1040px;margin:0 auto}
.d .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .eyebrow{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d h1{margin-top:6px;font-size:28px;line-height:1.1;font-weight:650;letter-spacing:-.03em}
.d .acts{display:flex;gap:10px}
.d .ghost,.d .cta{display:inline-flex;align-items:center;gap:7px;height:38px;padding:0 15px;border:0;border-radius:10px;font-size:13.5px;font-weight:600;white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out}
.d .ghost{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2)}
.d .cta{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d button.press{transform:scale(.96)}
.d .subs{display:flex;gap:8px;overflow-x:auto;scrollbar-width:none}
.d .sub{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 13px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2);font-size:13px;font-weight:550;white-space:nowrap;cursor:pointer;transition:background-color .25s ease,color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .sub em{font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .sub.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .sub.on em{color:var(--ml-accent-ink)}
.d .card{border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .sum{padding:20px 22px 18px}
.d .stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr))}
.d .st{padding:0 22px;border-left:1px solid var(--ml-line)}
.d .st:first-child{padding-left:0;border-left:0}
.d .st p{font-size:12.5px;color:var(--ml-muted)}
.d .st b{display:block;margin-top:8px;font-size:28px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .dl{display:inline-flex;margin-top:10px;padding:3px 7px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:600;color:#12893C}
.d .dl.dn{background:rgba(255,59,48,.09);color:#D70015}
.d .mix{display:flex;gap:4px;height:8px;margin-top:20px}
.d .mix i{flex:var(--w) 1 0;border-radius:99px;background:var(--ml-accent);transform-origin:0 50%}
.d .mix i:nth-child(2){background:var(--ml-accent-2)}
.d .mix i:nth-child(3){background:var(--ml-bar)}
.d .lg{display:flex;gap:18px;margin-top:10px;font-size:12px;color:var(--ml-muted)}
.d .lg span{display:inline-flex;align-items:center;gap:6px}
.d .lg i{width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .lg span:nth-child(2) i{background:var(--ml-accent-2)}
.d .lg span:nth-child(3) i{background:var(--ml-bar)}
.d .tbl{padding:6px 0}
.d .th,.d .tr{display:grid;grid-template-columns:minmax(0,2.2fr) 110px 120px 80px;align-items:center;gap:14px;padding:0 22px}
.d .th{height:40px;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .th span:nth-child(3),.d .tr .am{text-align:right}
.d .rows{list-style:none}
.d .tr{min-height:62px;border-bottom:1px solid var(--ml-line);transition:background-color .2s ease}
.d .tr:last-child{border-bottom:0}
.d .tr:hover{background:var(--ml-surface)}
.d .c1{display:flex;align-items:center;gap:12px;min-width:0}
.d .ico{flex:none;display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:700}
.d .c1 p{display:flex;flex-direction:column;gap:2px;min-width:0}
.d .c1 b{overflow:hidden;font-size:14px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .c1 small{overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .pl{justify-self:start;padding:4px 10px;border-radius:999px;background:var(--ml-surface);font-size:11.5px;font-weight:600;color:var(--ml-ink-2)}
.d .pl.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .pl.bl{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .pl.bad{background:rgba(255,59,48,.09);color:#D70015}
.d .pl.warn{background:rgba(255,159,10,.12);color:#B25E00}
.d .am{font-size:14px;font-weight:600;font-variant-numeric:tabular-nums}
.d .dt{font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
.d .page.swap .in{animation:topnav-in 540ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
.d .rows.rs .tr{animation:topnav-in 540ms var(--ml-spring) both;animation-delay:calc((var(--i,0) - 3) * 45ms)}
.d .page.swap .mix i{animation:topnav-grow 800ms var(--ml-ease) 220ms both}
@keyframes topnav-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes topnav-grow{from{transform:scaleX(0)}to{transform:none}}
@keyframes topnav-ping{0%{opacity:.5;transform:scale(1)}80%,100%{opacity:0;transform:scale(3)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{gap:6px;padding:0 14px}
  .d .logo{margin-right:6px}
  .d .logo b,.d .sync,.d .ic{display:none}
  .d .tabs{overflow-x:auto}
  .d .tab{padding:0 12px}
  .d .page{padding:18px 16px}
  .d .head{flex-direction:column;align-items:flex-start}
  .d .ghost{display:none}
  .d .stats{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}
  .d .st:nth-child(3){display:none}
  .d .th,.d .tr{grid-template-columns:minmax(0,1fr) auto;padding:0 16px}
  .d .th span:nth-child(2),.d .th span:nth-child(4),.d .tr .pl,.d .tr .dt{display:none}
}
@media (prefers-reduced-motion: reduce){.d .page.swap .in,.d .page.swap .mix i,.d .rows.rs .tr,.d .sync i::after{animation:none}}`,
    run: (root) => {
      const tabs = [
        { t: 'Good morning, Ana', ini: 1, cta: 'New invoice', th: ['Activity', 'Type', 'Amount', 'Date'], subs: ['All activity', 'Money in', 'Money out'],
          st: [['Money in', '$38,420', '+11.2%', 1], ['Money out', '$21,160', '+4.1%', 0], ['Net cash', '$17,260', '+22.0%', 1]], mix: [['Collected', 62], ['Pending', 25], ['Overdue', 13]], rows: [
            ['Invoice #1042', 'Northgate Dental Supply', 'Paid', '$4,800', 'Oct 13', 1],
            ['Rent - Maple Street', 'Tidewater Realty', 'Paid', '-$3,200', 'Oct 12', 2],
            ['Invoice #1041', 'Solace Studio', 'Sent', '$2,150', 'Oct 11', 1],
            ['Dental lab batch', 'Fernway Labs', 'Paid', '-$1,460', 'Oct 10', 2],
            ['Invoice #1039', 'Kestrel & Co', 'Overdue', '$1,240', 'Oct 8', 1],
            ['Payroll run', 'Brightline Dental', 'Paid', '-$11,800', 'Oct 7', 2]] },
        { t: 'Customers', cta: 'New customer', th: ['Customer', 'Status', 'Lifetime value', 'Last seen'], subs: ['All', 'Active', 'At risk'],
          st: [['Customers', '58', '+5', 1], ['Avg. value', '$3,660', '+6.3%', 1], ['Retention', '94%', '+2%', 1]], mix: [['Active', 78], ['New', 14], ['At risk', 8]], rows: [
            ['Northgate Supply', 'Priya Nair - 14 invoices', 'Active', '$21,400', 'Oct 13', 1],
            ['Solace Studio', 'Maya Reyes - 9 invoices', 'Active', '$12,850', 'Oct 11', 1],
            ['Kestrel & Co', 'Tomas Lindqvist - 6 invoices', 'At risk', '$8,120', 'Sep 29', 2],
            ['Meridian Foods', 'Daniel Okafor - 11 invoices', 'Active', '$16,300', 'Oct 12', 1],
            ['Tidewater Realty', 'Hana Kim - 4 invoices', 'At risk', '$3,940', 'Sep 21', 2]] },
        { t: 'Invoices', ini: 2, cta: 'New invoice', th: ['Invoice', 'Status', 'Amount', 'Due'], subs: ['All', 'Sent', 'Paid', 'Overdue'],
          st: [['Outstanding', '$6,930', '-4.2%', 1], ['Paid this month', '$31,780', '+9.8%', 1], ['Avg. days to pay', '11', '-2 days', 1]], mix: [['Paid', 68], ['Sent', 24], ['Overdue', 8]], rows: [
            ['#1042 - Northgate', 'Dental supplies, October', 'Paid', '$4,800', 'Oct 13', 2],
            ['#1041 - Solace Studio', 'Studio retainer', 'Sent', '$2,150', 'Oct 24', 1],
            ['#1040 - Meridian Foods', 'Menu photography', 'Paid', '$3,600', 'Oct 18', 2],
            ['#1039 - Kestrel & Co', 'Quarterly audit', 'Overdue', '$1,240', 'Oct 8', 3],
            ['#1038 - Tidewater', 'Listing shoot', 'Sent', '$1,890', 'Oct 28', 1],
            ['#1037 - Northgate', 'Equipment lease', 'Paid', '$5,320', 'Oct 6', 2]] },
        { t: 'Expenses', cta: 'Add expense', th: ['Expense', 'Category', 'Amount', 'Date'], subs: ['All', 'Recurring', 'One-off'],
          st: [['This month', '$21,160', '+4.1%', 0], ['Largest category', 'Payroll', '56%', 1], ['Receipts missing', '3', '-2', 1]], mix: [['Payroll', 56], ['Rent', 15], ['Other', 29]], rows: [
            ['Payroll run', 'Brightline Dental', 'Payroll', '$11,800', 'Oct 7', 1],
            ['Rent - Maple Street', 'Tidewater Realty', 'Rent', '$3,200', 'Oct 12', 1],
            ['Dental lab batch', 'Fernway Labs', 'Supplies', '$1,460', 'Oct 10', 2],
            ['Software seats', 'Halden', 'Software', '$480', 'Oct 3', 1],
            ['Chair replacement', 'Office', 'Equipment', '$920', 'Oct 2', 2]] },
        { t: 'Reports', cta: 'New report', th: ['Report', 'Status', 'Period', 'Updated'], subs: ['Saved', 'Scheduled', 'Shared'],
          st: [['Saved reports', '14', '+2', 1], ['Scheduled', '5', '+1', 1], ['Shared with', '9 people', '+3', 1]], mix: [['Saved', 50], ['Scheduled', 30], ['Shared', 20]], rows: [
            ['Profit and loss', 'Monthly - Ana Lim', 'Ready', 'Oct 2026', '6m', 1],
            ['Cash flow forecast', 'Quarterly - Ana Lim', 'Scheduled', 'Q4 2026', '1d', 2],
            ['Aged receivables', 'Weekly - Rafael Santos', 'Scheduled', 'Oct 2026', '2d', 2],
            ['Expense by category', 'Monthly - Ana Lim', 'Ready', 'Oct 2026', '3d', 1],
            ['Tax summary', 'Annual - Noor Haddad', 'Ready', '2025', '3w', 3]] },
      ];
      const $ = (s) => root.querySelector(s);
      const page = $('.page');
      const ul = $('.ul');
      const subsEl = $('.subs');
      const cur = $('.cur');
      const tabEls = [...root.querySelectorAll('.tab')];
      const cls = { Paid: 'ok', Active: 'ok', Ready: 'ok', Sent: 'bl', Scheduled: 'bl', Overdue: 'bad', 'At risk': 'bad', Pending: 'warn' };
      let now = -1;
      let sub = 0;
      const roll = (el, to) => {
        const m = to.match(/^([^\d]*)([\d,.]+)(.*)$/);
        if (!m) return void (el.textContent = to);
        const end = parseFloat(m[2].replace(/,/g, ''));
        const dec = (m[2].split('.')[1] || '').length;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 750);
          el.textContent = m[1] + (end * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const ini = (t, r) => {
        const base = t.ini === 1 ? r[1] : t.ini === 2 ? r[0].split(' - ')[1] : r[0];
        const w = base.replace(/[^A-Za-z0-9 ]/g, '').split(' ').filter(Boolean);
        return (w.length > 1 ? w[0][0] + w[1][0] : w[0].slice(0, 2)).toUpperCase();
      };
      const shown = () => tabs[now].rows.filter((r) => sub === 0 || r[5] === sub);
      const list = (animate) => {
        const t = tabs[now];
        const rs = shown();
        $('.rows').innerHTML = rs
          .map((r, k) => `<li class="tr in" style="--i:${k + 3}"><div class="c1"><span class="ico">${ini(t, r)}</span><p><b>${r[0]}</b><small>${r[1]}</small></p></div><span class="pl ${cls[r[2]] || ''}">${r[2]}</span><span class="am">${r[3]}</span><span class="dt">${r[4]}</span></li>`)
          .join('');
        subsEl.querySelectorAll('.sub').forEach((b, k) => b.classList.toggle('on', k === sub));
        const rw = $('.rows');
        rw.classList.remove('rs');
        if (animate) {
          void rw.offsetWidth;
          rw.classList.add('rs');
        }
      };
      const render = (i, animate) => {
        const t = tabs[i];
        now = i;
        sub = 0;
        tabEls.forEach((b, k) => {
          b.classList.toggle('on', k === i);
          if (k === i) b.setAttribute('aria-current', 'page');
          else b.removeAttribute('aria-current');
        });
        ul.style.transform = `translateX(${tabEls[i].offsetLeft}px) scaleX(${tabEls[i].offsetWidth / 100})`;
        $('h1').textContent = t.t;
        $('.cta span').textContent = t.cta;
        $('.th').innerHTML = t.th.map((s) => `<span>${s}</span>`).join('');
        subsEl.innerHTML = t.subs.map((s, k) => `<button class="sub${k === 0 ? ' on' : ''}" type="button" role="tab"><span>${s}</span><em>${k === 0 ? t.rows.length : t.rows.filter((r) => r[5] === k).length}</em></button>`).join('');
        $('.stats').innerHTML = t.st.map(([l, v, d, good]) => `<div class="st"><p>${l}</p><b>${v}</b><span class="dl${good ? '' : ' dn'}">${d}</span></div>`).join('');
        $('.mix').innerHTML = t.mix.map(([, w]) => `<i style="--w:${w}"></i>`).join('');
        $('.lg').innerHTML = t.mix.map(([l, w]) => `<span><i></i>${l} ${w}%</span>`).join('');
        list(false);
        if (animate) {
          page.classList.remove('swap');
          void page.offsetWidth;
          page.classList.add('swap');
          root.querySelectorAll('.st b').forEach((el, k) => roll(el, t.st[k][1]));
        }
      };
      tabEls.forEach((b, k) => b.addEventListener('click', () => k !== now && render(k, true)));
      subsEl.addEventListener('click', (e) => {
        const b = e.target.closest('.sub');
        if (!b) return;
        const k = [...subsEl.children].indexOf(b);
        if (k === sub) return;
        sub = k;
        list(true);
      });
      render(0, false);

      // Autoplay: the cursor switches the main tab (underline glides), then picks a sub-tab filter.
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
        cur.classList.remove('off');
        return true;
      };
      const go = async (el, fx, fy) => {
        if (!moveTo(el, fx, fy)) cur.classList.add('off');
        await wait(820);
      };
      const tap = async (el) => {
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(700px,430px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const nt = tabEls[(now + 1) % tabEls.length];
          await go(nt, 0.5, 0.55);
          if (!(await tap(nt))) continue;
          await wait(2300);
          const sb = subsEl.children[1 + (now % (tabs[now].subs.length - 1))];
          if (!idle() || !sb) continue;
          await go(sb, 0.5, 0.5);
          if (!(await tap(sb))) continue;
          await wait(2600);
        }
      })();
    },
    prompt: `Build a top-navigation app shell for an accounting web app: no sidebar, a full-width header with horizontal tabs, and a centered content column. Full viewport (height: 100dvh); the page region scrolls, the header does not.

Header (62px, white, 1px bottom hairline): logo tile and name, then a nav with five tab buttons (Overview, Customers, Invoices, Expenses, Reports) stretched to the full header height, then a small green "Synced" pill with a pinging dot, a search button, a notifications button with an unread dot, and the avatar. The active tab has aria-current="page" and heavier text. Under the tabs sits ONE underline element (3px, accent, rounded top corners) absolutely positioned inside the nav at width 100px with transform-origin: 0 50%; move it with transform: translateX(tab.offsetLeft) scaleX(tab.offsetWidth / 100) over 587ms with a critically damped spring linear() curve, so it glides and stretches between tabs of different widths. Recompute on resize.

Content (max-width 1040px, centered, 28px padding): eyebrow with the company, page title and a primary action whose label changes per tab; a row of sub-tab pills (each with a count) that filter the list; a summary card with three stats separated by hairlines (label, big tabular number, green or red delta pill) above a thin stacked bar and its legend; then a list card with a header row (uppercase 11px labels) and rows in a grid (initials tile with name and subtitle, status pill, right-aligned amount, date).

Motion: on a tab change, blocks re-enter with opacity 0 to 1 and translateY(8px) to 0, staggered 45ms, the stat numbers count up over 750ms, and the stacked bar segments grow with scaleX from the left. Changing a sub-tab re-staggers only the list. Status pills use semantic tints (green paid, blue sent, red overdue, amber pending).

Accessibility: nav landmark, aria-current, role="tablist" on sub-tabs with aria-selected, visible focus rings, prefers-reduced-motion removes the entrance and pulse. Phone (under 760px): the tab bar scrolls horizontally inside the header, hide the status and date columns, stats two per row. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, Tabs, SubTabs, SummaryCard, DataList).`,
  });

  ML.add({
    id: 'app-shells-threepane',
    cat: 'app-shells',
    title: 'Three-pane split',
    sub: 'Pick a note, detail slides in',
    html: `
<div class="app">
  <aside class="fold">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Lumen Notes</b></div>
    <button class="cta" type="button">${I(P.plus, 16)}New note</button>
    <nav class="fl" aria-label="Folders">
      <button class="fo" type="button">${I(P.file, 18)}<span>All notes</span><em></em></button>
      <button class="fo" type="button">${I(P.star, 18)}<span>Favorites</span><em></em></button>
      <button class="fo" type="button">${I(P.users, 18)}<span>Meetings</span><em></em></button>
      <button class="fo" type="button">${I(P.bolt, 18)}<span>Ideas</span><em></em></button>
      <button class="fo" type="button">${I(P.archive, 18)}<span>Archive</span><em></em></button>
    </nav>
    <p class="lbl">Tags</p>
    <ul class="tags"><li><i></i>roadmap</li><li><i></i>client</li><li><i></i>research</li><li><i></i>hiring</li></ul>
    <div class="me"><span class="av">MR</span><p><b>Maya Reyes</b><small>Lumen Labs</small></p></div>
  </aside>
  <section class="lst">
    <div class="lh">
      <label class="search">${I(P.search, 16)}<input type="search" placeholder="Search notes" aria-label="Search notes"></label>
      <div class="lt"><h2 class="ft"></h2><p class="fc"></p></div>
    </div>
    <div class="ls"><div class="nw"><span class="sel" aria-hidden="true"></span><ul class="notes"></ul></div></div>
  </section>
  <article class="det">
    <div class="dh">
      <button class="back" type="button" aria-label="Back to notes">${I(P.back, 18)}</button>
      <span class="grow"></span>
      <button class="ic" type="button" aria-label="Favorite">${I(P.star, 18)}</button>
      <button class="ic" type="button" aria-label="Share">${I(P.send, 18)}</button>
      <button class="ic" type="button" aria-label="More">${I(P.more, 18)}</button>
    </div>
    <div class="pane"></div>
    <div class="cm"><span class="av">MR</span><label class="cmi"><input type="text" placeholder="Add a comment" aria-label="Add a comment"><button class="cmb" type="button" aria-label="Send comment">${I(P.send, 16)}</button></label></div>
  </article>
  ${CURSOR}
</div>`,
    css: `
.d .app{position:relative;display:grid;grid-template-columns:224px 330px minmax(0,1fr);height:100%;overflow:hidden;background:var(--ml-bg)}
.d .fold{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;background:var(--ml-surface);border-right:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;padding:2px 6px 18px}
.d .mark{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .brand b{font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .cta{display:flex;align-items:center;justify-content:center;gap:7px;height:40px;margin-bottom:16px;border:0;border-radius:11px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22);font-size:13.5px;font-weight:600;cursor:pointer;transition:transform 90ms ease-out}
.d button.press{transform:scale(.96)}
.d .fl{display:flex;flex-direction:column;gap:2px}
.d .fo{display:flex;align-items:center;gap:11px;height:38px;padding:0 10px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;cursor:pointer;transition:background-color .25s ease,color .25s ease,transform 90ms ease-out}
.d .fo svg{flex:none;color:var(--ml-muted);transition:color .25s ease}
.d .fo:hover{background:rgba(255,255,255,.7)}
.d .fo.on{background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 2px rgba(35,15,10,.05);color:var(--ml-accent-ink);font-weight:600}
.d .fo.on svg{color:var(--ml-accent)}
.d .fo em{margin-left:auto;font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .fo:focus-visible,.d .nt:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
.d .lbl{margin:20px 0 8px;padding:0 10px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .tags{list-style:none}
.d .tags li{display:flex;align-items:center;gap:10px;height:32px;padding:0 10px;font-size:13.5px;color:var(--ml-ink-2)}
.d .tags i{width:8px;height:8px;border-radius:3px;background:var(--ml-accent)}
.d .tags li:nth-child(2) i{background:var(--ml-accent-2)}
.d .tags li:nth-child(3) i{background:var(--ml-accent-line)}
.d .tags li:nth-child(4) i{background:var(--ml-bar)}
.d .me{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .me p{display:flex;flex-direction:column}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .lst{display:flex;flex-direction:column;min-width:0;min-height:0;border-right:1px solid var(--ml-line)}
.d .lh{padding:18px 16px 12px}
.d .search{display:flex;align-items:center;gap:8px;height:38px;padding:0 12px;border-radius:10px;background:var(--ml-surface);color:var(--ml-muted);transition:box-shadow .2s ease,background-color .2s ease}
.d .search:focus-within{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px;color:var(--ml-ink)}
.d .search input::placeholder{color:var(--ml-muted)}
.d .lt{display:flex;align-items:baseline;gap:8px;margin-top:16px;padding:0 4px}
.d .ft{font-size:20px;font-weight:650;letter-spacing:-.025em}
.d .fc{font-size:12.5px;color:var(--ml-muted)}
.d .ls{flex:1;min-height:0;padding:0 10px 12px;overflow-y:auto;scrollbar-width:thin}
.d .nw{position:relative}
.d .notes{list-style:none;display:flex;flex-direction:column;gap:4px}
.d .sel{position:absolute;top:0;left:0;right:0;height:88px;border-radius:13px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease}
.d .nt{position:relative;display:flex;flex-direction:column;justify-content:center;gap:3px;width:100%;height:88px;padding:0 14px;border:0;border-radius:13px;background:none;text-align:left;cursor:pointer;transition:transform 90ms ease-out}
.d .nt:hover{background:rgba(244,247,252,.8)}
.d .nt.on:hover{background:none}
.d .nt b{overflow:hidden;font-size:14.5px;font-weight:600;letter-spacing:-.01em;white-space:nowrap;text-overflow:ellipsis}
.d .sn{overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;font-size:12.5px;line-height:1.4;color:var(--ml-muted)}
.d .mt{display:flex;align-items:center;gap:8px;margin-top:2px;font-size:11.5px;color:var(--ml-muted)}
.d .mt time{font-family:var(--ml-mono);font-weight:500}
.d .tg{padding:2px 7px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-style:normal;font-weight:600;color:var(--ml-accent-ink)}
.d .det{position:relative;display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--ml-bg)}
.d .dh{display:flex;align-items:center;gap:4px;flex:none;height:60px;padding:0 20px;border-bottom:1px solid var(--ml-line)}
.d .grow{flex:1}
.d .ic,.d .back{display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer}
.d .ic:hover,.d .back:hover{background:var(--ml-surface)}
.d .ic.on{color:var(--ml-accent)}
.d .ic.on svg{fill:var(--ml-accent)}
.d .back{display:none}
.d .pane{flex:1;min-height:0;padding:28px 36px;overflow-y:auto;scrollbar-width:thin}
.d .cm{display:flex;flex:none;align-items:center;gap:12px;padding:14px 36px 16px;border-top:1px solid var(--ml-line)}
.d .cmi{display:flex;flex:1;align-items:center;gap:8px;height:44px;padding:0 6px 0 14px;border-radius:12px;background:var(--ml-surface);transition:box-shadow .2s ease,background-color .2s ease}
.d .cmi:focus-within{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .cmi input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:14px;color:var(--ml-ink)}
.d .cmi input::placeholder{color:var(--ml-muted)}
.d .cmb{display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:9px;background:none;color:var(--ml-accent);cursor:pointer}
.d .cmb:hover{background:var(--ml-accent-soft)}
.d .pane.go{animation:tri-slide 560ms var(--ml-spring) both}
.d .doc{max-width:560px}
.d .chips{display:flex;gap:8px}
.d .chip{padding:4px 10px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:600}
.d .doc h2{margin-top:14px;font-size:30px;line-height:1.12;font-weight:650;letter-spacing:-.035em}
.d .meta{margin-top:8px;font-size:13px;color:var(--ml-muted)}
.d .doc p.tx{margin-top:16px;font-size:15px;line-height:1.65;color:var(--ml-ink-2)}
.d .todo{display:flex;flex-direction:column;gap:2px;margin-top:20px;padding:8px;border-radius:14px;background:var(--ml-surface)}
.d .td{display:flex;align-items:center;gap:12px;height:40px;padding:0 10px;border:0;border-radius:10px;background:none;font-size:14px;color:var(--ml-ink);text-align:left;cursor:pointer}
.d .td:hover{background:rgba(255,255,255,.7)}
.d .bx{display:grid;place-items:center;flex:none;width:20px;height:20px;border-radius:6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .2s ease,box-shadow .2s ease}
.d .bx svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .35s var(--ml-bounce)}
.d .td.on .bx{background:var(--ml-accent);box-shadow:none}
.d .td.on .bx svg{opacity:1;transform:none}
.d .td.on span{color:var(--ml-muted);text-decoration:line-through}
.d .shot{height:130px;margin-top:20px;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-accent-line))}
.d .shot svg{display:block;width:100%;height:100%}
.d .notes .li{animation:tri-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 40ms)}
@keyframes tri-slide{from{opacity:0;transform:translateX(34px)}to{opacity:1;transform:none}}
@keyframes tri-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .fold{display:none}
  .d .det{position:absolute;inset:0;z-index:5;transform:translateX(100%);transition:transform var(--ml-spring-dur) var(--ml-spring)}
  .d .app.open .det{transform:none}
  .d .back{display:grid}
  .d .dh{padding:0 12px}
  .d .pane{padding:22px 20px}
  .d .cm{padding:12px 16px 14px}
  .d .doc h2{font-size:26px}
}
@media (prefers-reduced-motion: reduce){.d .pane.go,.d .notes .li{animation:none}}`,
    run: (root) => {
      const CHECK = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const SHOT = '<svg viewBox="0 0 400 130" preserveAspectRatio="none" aria-hidden="true"><circle cx="300" cy="38" r="15" fill="#fff"/><path d="M0 130V88l90-48 70 44 80-40 160 70v16Z" fill="#9CC4FF"/><path d="M0 130v-16l110-36 100 40 190-30v42Z" fill="#FF7A3D"/></svg>';
      const folders = ['All notes', 'Favorites', 'Meetings', 'Ideas', 'Archive'];
      // [title, snippet, stamp, folder, tag, favorite, paragraphs, todo, picture, edited]
      const notes = [
        ['Q4 roadmap kickoff', 'Three bets for the quarter: faster onboarding, usage-based billing, a rebuilt reports page.', 'Today, 9:40', 2, 'roadmap', 1, ['Kickoff with product and design. We agreed on three bets for Q4: a faster onboarding flow, usage-based billing and a rebuilt reports page.', 'Open question: do we ship billing before the holiday freeze? Aiko will price the engineering risk by Friday.'], [['Draft the onboarding brief', 1], ['Price the billing risk (Aiko)', 0], ['Book the design review', 0]], 0, 'Edited 12 minutes ago by Maya Reyes'],
        ['Northgate call notes', 'They want weekly reporting and one point of contact. Renewal in January.', 'Today, 8:15', 2, 'client', 0, ['Priya confirmed the team is happy with onboarding. Two asks: a weekly summary email and a single point of contact on our side.', 'Renewal conversation is set for the first week of January. Budget looks flat.'], [['Send the weekly report sample', 1], ['Name an account owner', 0]], 0, 'Edited 2 hours ago by Tomas Lindqvist'],
        ['Empty-state ideas', 'Sketches for the first-run screen: one primary action, three templates, a short video.', 'Yesterday', 3, 'research', 1, ['The first-run screen should do one thing: get a project started. One primary action, three starter templates and a 40-second video, nothing else.', 'Test with five new accounts before committing to the illustration style.'], [['Sketch three template cards', 1], ['Recruit five testers', 0]], 1, 'Edited yesterday by Hana Kim'],
        ['Hiring plan 2027', 'Two designers, one data engineer and a support lead by the end of Q2.', 'Oct 12', 3, 'hiring', 0, ['Headcount ask for next year: two product designers, one data engineer and a support lead, all landed by the end of Q2.', 'Support lead goes first since ticket volume is up 30% since September.'], [['Write the support lead brief', 0], ['Share budget with finance', 0], ['Open designer roles', 0]], 0, 'Edited Oct 12 by Daniel Okafor'],
        ['Brand voice guide', 'Plain words, short sentences, no hype. Examples for emails, UI and release notes.', 'Oct 10', 3, 'research', 1, ['Our voice is plain, specific and calm. Short sentences, real numbers, no hype words. Every line should sound like a person who knows the product.', 'Next step is a one-page cheat sheet with before and after examples.'], [['Collect ten before and after lines', 1], ['Review with Solace Studio', 0]], 1, 'Edited Oct 10 by Isabel Cruz'],
        ['Weekly standup', 'Blockers: invoice export timeout, one flaky test. Wins: onboarding v2 shipped.', 'Oct 9', 2, 'roadmap', 0, ['Wins: onboarding v2 shipped to 20% of accounts with no support spikes. Blockers: the invoice export times out above 5,000 rows and one test is flaky.'], [['Raise export timeout ticket', 1], ['Quarantine the flaky test', 1]], 0, 'Edited Oct 9 by Luis Ortega'],
        ['Old pricing page copy', 'Archived draft from the spring pricing test. Kept for reference only.', 'Jun 2', 4, 'client', 0, ['Archived draft from the spring pricing experiment. The annual toggle test lifted upgrades by 4%, which is why we kept it.'], [['Move learnings to the wiki', 1]], 0, 'Archived Jun 2 by Sam Whitfield'],
      ];
      const $ = (s) => root.querySelector(s);
      const app = $('.app');
      const pane = $('.pane');
      const cur = $('.cur');
      const sel = $('.sel');
      const foEls = [...root.querySelectorAll('.fo')];
      const inF = (n, f) => f === 0 || (f === 1 ? n[5] === 1 : n[3] === f);
      let folder = 0;
      let cursel = 0;
      let shown = [];
      const detail = (n, animate) => {
        $('.dh .ic').classList.toggle('on', !!n[5]);
        pane.innerHTML = `<div class="doc"><div class="chips"><span class="chip">${n[4]}</span><span class="chip">${folders[n[3]]}</span></div><h2>${n[0]}</h2><p class="meta">${n[9]}</p>${n[6].map((t) => `<p class="tx">${t}</p>`).join('')}<div class="todo">${n[7].map((t) => `<button class="td${t[1] ? ' on' : ''}" type="button"><span class="bx">${CHECK}</span><span>${t[0]}</span></button>`).join('')}</div>${n[8] ? `<div class="shot">${SHOT}</div>` : ''}</div>`;
        pane.scrollTop = 0;
        if (animate) {
          pane.classList.remove('go');
          void pane.offsetWidth;
          pane.classList.add('go');
        }
      };
      const select = (k, animate) => {
        cursel = k;
        const els = [...root.querySelectorAll('.nt')];
        els.forEach((b, j) => b.classList.toggle('on', j === k));
        if (els[k]) {
          sel.style.opacity = 1;
          sel.style.transform = `translateY(${els[k].parentElement.offsetTop}px)`;
        }
        detail(shown[k], animate);
      };
      const list = (animate) => {
        shown = notes.filter((n) => inF(n, folder));
        $('.notes').innerHTML = shown
          .map((n, k) => `<li class="${animate ? 'li' : ''}" style="--i:${k}"><button class="nt" type="button" data-k="${k}"><b>${n[0]}</b><span class="sn">${n[1]}</span><span class="mt"><time>${n[2]}</time><i class="tg">${n[4]}</i></span></button></li>`)
          .join('');
        $('.ft').textContent = folders[folder];
        $('.fc').textContent = `${shown.length} notes`;
        foEls.forEach((b, k) => {
          b.classList.toggle('on', k === folder);
          b.querySelector('em').textContent = notes.filter((n) => inF(n, k)).length;
        });
        sel.style.transition = 'none';
        select(0, animate);
        void sel.offsetWidth;
        sel.style.transition = '';
      };
      foEls.forEach((b, k) => b.addEventListener('click', () => {
        if (k === folder) return;
        folder = k;
        list(true);
      }));
      $('.notes').addEventListener('click', (e) => {
        const b = e.target.closest('.nt');
        if (!b) return;
        const k = +b.dataset.k;
        app.classList.add('open');
        if (k !== cursel) select(k, true);
      });
      $('.back').addEventListener('click', () => app.classList.remove('open'));
      pane.addEventListener('click', (e) => {
        const t = e.target.closest('.td');
        if (t) t.classList.toggle('on');
      });
      $('.dh .ic').addEventListener('click', (e) => {
        const n = shown[cursel];
        n[5] = n[5] ? 0 : 1;
        e.currentTarget.classList.toggle('on', !!n[5]);
        foEls[1].querySelector('em').textContent = notes.filter((m) => inF(m, 1)).length;
      });
      list(false);

      // Autoplay: pick a note (detail slides in), then switch folder (list restaggers, first note opens).
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
        cur.classList.remove('off');
        return true;
      };
      const go = async (el, fx, fy) => {
        if (!moveTo(el, fx, fy)) cur.classList.add('off');
        await wait(820);
      };
      const tap = async (el) => {
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,430px)';
      (async () => {
        await wait(1500);
        let round = 0;
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const nts = [...root.querySelectorAll('.nt')];
          const target = nts[(cursel + 1 + (round % 2)) % nts.length];
          await go(target, 0.5, 0.5);
          if (!(await tap(target))) continue;
          await wait(2500);
          if ($('.back').offsetParent !== null) {
            $('.back').click();
            await wait(900);
          }
          if (!idle()) continue;
          const fo = foEls[[2, 3, 0][round % 3]];
          await go(fo, 0.45, 0.5);
          if (!(await tap(fo))) continue;
          await wait(2800);
          round++;
        }
      })();
    },
    prompt: `Build a three-pane notes app screen (folders, note list, note detail) at full viewport size (height: 100dvh), where selecting a note slides the detail pane in.

Layout: CSS grid, columns 224px 330px minmax(0, 1fr), each pane scrolls on its own (min-height: 0, overflow-y: auto). Pane 1 (folders, soft grey-blue surface, 1px right hairline): logo and name, a full-width primary "New note" button, a folder nav (All notes, Favorites, Meetings, Ideas, Archive, each with an 18px icon and a tabular count), a small "Tags" list with colored squares in steps of your accent, and the signed-in user at the bottom. The active folder is a white pill with a hairline ring. Pane 2 (white): a search field, the folder title with a note count, then note rows 88px tall: title, a two-line clamped snippet, a timestamp and a tag chip. Pane 3: a 60px toolbar (back button on phones, favorite, share, more), then the document: tag chips, a 30px title, meta line, paragraphs with a 560px max width, a checklist card where each row is a real toggle with a bouncing check, and an optional drawn image.

Motion: the selected note sits on ONE highlight element (accent-soft fill, accent-line ring) behind the rows, moved with transform: translateY(row.offsetTop) using a critically damped spring (587ms, linear() curve). On select, the detail content animates in from translateX(34px) and opacity 0 to rest (560ms, spring). Changing folder re-staggers the rows (opacity, translateY(8px), 40ms apart) and opens the first note.

Behavior: arrow keys move the selection in the list, Enter focuses the detail, the favorite star toggles and updates the Favorites count. Phone (under 760px): hide the folders pane, show only the list, and make the detail an absolutely positioned full-screen sheet that slides in with transform: translateX(100%) to 0 when a note is tapped, with the back button returning to the list. Accessibility: aria-current on the active folder and note, visible focus rings, prefers-reduced-motion removes the slide and stagger. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (FolderPane, NoteList, NoteRow, NoteDetail, Checklist).`,
  });

  ML.add({
    id: 'app-shells-command',
    cat: 'app-shells',
    title: 'Command-bar shell',
    sub: 'Ctrl K filters and runs an action',
    html: `
<div class="app">
  <header class="top">
    <div class="logo"><span class="mark">${I(P.truck, 16)}</span><b>Atlas Freight</b></div>
    <button class="trig" type="button" aria-label="Open command bar">${I(P.search, 17)}<span>Search or run a command</span><kbd>Ctrl K</kbd></button>
    <span class="av">RS</span>
  </header>
  <main class="page">
    <div class="wrap">
      <div class="head"><div><h1>Shipments</h1><p class="date">128 active - 6 delayed - updated just now</p></div></div>
      <div class="recent">
        <div class="rc card">${I(P.truck, 18)}<p><b>AF-20418</b><small>Rotterdam to Chicago</small></p></div>
        <div class="rc card">${I(P.box, 18)}<p><b>Manifest Oct 14</b><small>128 lines, ready</small></p></div>
        <div class="rc card">${I(P.clock, 18)}<p><b>Delay report</b><small>6 need a carrier reply</small></p></div>
      </div>
      <div class="chips" role="tablist"></div>
      <section class="card tbl"><ul class="rows"></ul></section>
    </div>
  </main>
  <div class="scrim" aria-hidden="true"></div>
  <div class="pal" role="dialog" aria-label="Command bar" aria-hidden="true">
    <label class="pin">${I(P.search, 18)}<input type="text" placeholder="Type a command or search" aria-label="Command" autocomplete="off"><kbd>Esc</kbd></label>
    <div class="plist"><span class="hi" aria-hidden="true"></span><div class="pitems"></div></div>
    <div class="pf"><span>${I(P.enter, 13)}Run</span><span><kbd>Up</kbd><kbd>Down</kbd>Move</span><span><kbd>Esc</kbd>Close</span></div>
  </div>
  <div class="toast" role="status"><span class="tk">${I(P.check, 14)}</span><b></b></div>
  ${CURSOR}
</div>`,
    css: `
.d .app{position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden}
.d .top{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,460px) minmax(0,1fr);align-items:center;gap:16px;flex:none;height:66px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .logo{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .mark{display:grid;place-items:center;flex:none;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .trig{display:flex;align-items:center;gap:10px;height:42px;padding:0 9px 0 14px;border:0;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);font-size:14px;text-align:left;cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .trig span{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.d .trig:hover{background:var(--ml-bg)}
.d .trig:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d button.press{transform:scale(.97)}
.d kbd{padding:5px 6px;border-radius:6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .av{justify-self:end;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .page{flex:1;min-height:0;padding:28px;overflow-y:auto;scrollbar-width:thin}
.d .wrap{display:flex;flex-direction:column;gap:18px;max-width:1040px;margin:0 auto}
.d h1{font-size:28px;line-height:1.1;font-weight:650;letter-spacing:-.03em}
.d .date{margin-top:6px;font-size:13.5px;color:var(--ml-muted)}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .recent{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d .rc{display:flex;align-items:center;gap:12px;padding:14px 16px}
.d .rc>svg{flex:none;box-sizing:content-box;padding:9px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .rc p{display:flex;flex-direction:column;min-width:0}
.d .rc b{overflow:hidden;font-size:14px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .rc small{font-size:12.5px;color:var(--ml-muted)}
.d .chips{display:flex;gap:8px}
.d .chip{display:inline-flex;align-items:center;height:34px;padding:0 14px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2);font-size:13px;font-weight:550;cursor:pointer;transition:background-color .25s ease,color .25s ease,box-shadow .25s ease}
.d .chip.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .tbl{padding:4px 0}
.d .rows{list-style:none}
.d .rw{display:grid;grid-template-rows:1fr;opacity:1;transition:grid-template-rows var(--ml-spring-dur) var(--ml-spring),opacity .4s ease}
.d .rw.ent{grid-template-rows:0fr;opacity:0}
.d .cl{min-height:0;overflow:hidden}
.d .tr{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1.4fr) 104px 120px 56px;align-items:center;gap:16px;padding:14px 22px;border-bottom:1px solid var(--ml-line)}
.d .rw:last-child .tr{border-bottom:0}
.d .c1{display:flex;align-items:center;gap:12px;min-width:0}
.d .ico{flex:none;display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .c1 p{display:flex;flex-direction:column;gap:2px;min-width:0}
.d .c1 b{font-size:14px;font-weight:600;font-variant-numeric:tabular-nums}
.d .c1 small{font-size:12.5px;color:var(--ml-muted)}
.d .rt{overflow:hidden;font-size:13.5px;color:var(--ml-ink-2);white-space:nowrap;text-overflow:ellipsis}
.d .pl{justify-self:start;padding:4px 10px;border-radius:999px;font-size:11.5px;font-weight:600;white-space:nowrap}
.d .pl.bl{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .pl.warn{background:rgba(255,159,10,.12);color:#B25E00}
.d .pl.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .fl{display:block;height:6px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .fl i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform-origin:0 50%;transform:scaleX(var(--p));transition:transform 1s var(--ml-ease)}
.d .dt{font:500 12px/1 var(--ml-mono);color:var(--ml-muted);text-align:right}
.d .rows.rs .rw{animation:cmd-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 40ms)}
.d .scrim{position:absolute;inset:0;z-index:20;background:rgba(35,15,10,.24);opacity:0;pointer-events:none;transition:opacity .3s ease}
.d .app.on .scrim{opacity:1;pointer-events:auto}
.d .pal{position:absolute;z-index:30;left:0;right:0;top:92px;width:min(580px,92%);margin:0 auto;border-radius:20px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow-lg),0 30px 80px rgba(35,15,10,.18);opacity:0;transform:translateY(-12px) scale(.97);pointer-events:none;transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .app.on .pal{opacity:1;transform:none;pointer-events:auto}
.d .pin{display:flex;align-items:center;gap:12px;height:60px;padding:0 18px;border-bottom:1px solid var(--ml-line);color:var(--ml-muted)}
.d .pin input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:16px;color:var(--ml-ink)}
.d .pin input::placeholder{color:var(--ml-muted)}
.d .plist{position:relative;max-height:340px;padding:8px;overflow-y:auto;scrollbar-width:thin}
.d .hi{position:absolute;left:8px;right:8px;top:0;height:52px;border-radius:12px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform .32s var(--ml-ease),opacity .2s ease}
.d .pg{position:relative;padding:10px 12px 6px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .pi{position:relative;display:flex;align-items:center;gap:12px;width:100%;height:52px;padding:0 12px;border:0;border-radius:12px;background:none;text-align:left;cursor:pointer}
.d .pi:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
.d .pic{display:grid;place-items:center;flex:none;width:34px;height:34px;border-radius:10px;background:var(--ml-surface);color:var(--ml-ink-2);transition:background-color .2s ease,color .2s ease}
.d .pi.act .pic{background:var(--ml-bg);color:var(--ml-accent)}
.d .pi p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .pi b{font-size:14px;font-weight:600}
.d .pi small{font-size:12.5px;color:var(--ml-muted)}
.d .rn{display:grid;color:var(--ml-accent);opacity:0;transform:translateX(-4px);transition:opacity .2s ease,transform .3s var(--ml-ease)}
.d .pi.act .rn{opacity:1;transform:none}
.d .none{padding:28px 12px;text-align:center;font-size:13.5px;color:var(--ml-muted)}
.d .pf{display:flex;gap:18px;padding:0 18px;height:44px;align-items:center;border-top:1px solid var(--ml-line);font-size:12px;color:var(--ml-muted)}
.d .pf span{display:inline-flex;align-items:center;gap:6px}
.d .pf kbd{padding:4px 5px;background:var(--ml-surface)}
.d .toast{position:absolute;z-index:40;left:0;right:0;bottom:26px;width:max-content;max-width:90%;margin:0 auto;display:flex;align-items:center;gap:10px;padding:10px 16px 10px 10px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow-lg);opacity:0;transform:translateY(16px);pointer-events:none;transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .toast.show{opacity:1;transform:none}
.d .toast b{font-size:13.5px;font-weight:600}
.d .tk{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#1DB954;color:#fff}
@keyframes cmd-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{grid-template-columns:auto minmax(0,1fr) auto;gap:10px;padding:0 14px}
  .d .logo b,.d .trig kbd{display:none}
  .d .page{padding:18px 16px}
  .d .recent{grid-template-columns:minmax(0,1fr)}
  .d .rc:nth-child(n+2){display:none}
  .d .chips{overflow-x:auto;scrollbar-width:none}
  .d .chip{white-space:nowrap}
  .d .tr{grid-template-columns:minmax(0,1fr) auto;padding:12px 16px}
  .d .rt,.d .fl,.d .dt{display:none}
  .d .pal{top:78px}
}
@media (prefers-reduced-motion: reduce){.d .rows.rs .rw{animation:none}}`,
    run: (root) => {
      const svg = (d, s = 18) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = {
        plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
        file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
        send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
        clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
        truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
        check: '<path d="M20 6 9 17l-5-5"/>',
      };
      const data = [
        ['AF-20418', 'Rotterdam to Chicago', 'Transit', 'Oct 18', 72, 'Seabound Lines'],
        ['AF-20417', 'Shenzhen to Los Angeles', 'Delayed', 'Oct 22', 38, 'Pacific Run'],
        ['AF-20415', 'Hamburg to Atlanta', 'Transit', 'Oct 19', 64, 'Seabound Lines'],
        ['AF-20412', 'Chicago to Denver', 'Delivered', 'Oct 13', 100, 'Redwood Rail'],
        ['AF-20409', 'Mumbai to Rotterdam', 'Delayed', 'Oct 25', 21, 'Meridian Air'],
        ['AF-20406', 'Antwerp to Toronto', 'Transit', 'Oct 20', 55, 'Seabound Lines'],
        ['AF-20403', 'Dallas to Seattle', 'Delivered', 'Oct 11', 100, 'Redwood Rail'],
      ];
      const routes = ['Lisbon to Boston', 'Busan to Houston', 'Genoa to Newark'];
      const cmds = [
        { k: 'new', g: 'Actions', t: 'New shipment', s: 'Create a booking draft', ic: 'plus', kw: 'create add book' },
        { k: 'export', g: 'Actions', t: 'Export manifest', s: 'Download as CSV', ic: 'file', kw: 'csv download' },
        { k: 'notify', g: 'Actions', t: 'Notify carriers', s: 'Send delay updates', ic: 'send', kw: 'email message' },
        { k: 'Delayed', g: 'Views', t: 'Delayed shipments', s: '6 need attention', ic: 'clock', kw: 'late' },
        { k: 'Transit', g: 'Views', t: 'In transit', s: '94 on the move', ic: 'truck', kw: 'moving' },
        { k: 'Delivered', g: 'Views', t: 'Delivered this week', s: '28 completed', ic: 'check', kw: 'done' },
      ];
      const label = { Transit: 'In transit', Delayed: 'Delayed', Delivered: 'Delivered' };
      const cls = { Transit: 'bl', Delayed: 'warn', Delivered: 'ok' };
      const $ = (s) => root.querySelector(s);
      const app = $('.app');
      const rows = $('.rows');
      const chipsEl = $('.chips');
      const inp = $('.pin input');
      const pitems = $('.pitems');
      const hi = $('.hi');
      const toast = $('.toast');
      const cur = $('.cur');
      const trig = $('.trig');
      let filter = 'All';
      let made = 0;
      let items = [];
      let active = 0;
      let tt = 0;
      const rowHtml = (r, k) => `<li class="rw" style="--i:${k}" data-id="${r[0]}"><div class="cl"><div class="tr"><div class="c1"><span class="ico">${svg(IC.truck, 18)}</span><p><b>${r[0]}</b><small>${r[5]}</small></p></div><span class="rt">${r[1]}</span><span class="pl ${cls[r[2]]}">${label[r[2]]}</span><span class="fl"><i style="--p:${r[4] / 100}"></i></span><span class="dt">${r[3]}</span></div></div></li>`;
      const list = (animate) => {
        rows.innerHTML = data.filter((r) => filter === 'All' || r[2] === filter).map(rowHtml).join('');
        chipsEl.innerHTML = ['All', 'Transit', 'Delayed', 'Delivered'].map((f) => `<button class="chip${f === filter ? ' on' : ''}" type="button" data-f="${f}">${f === 'All' ? 'All shipments' : label[f]}</button>`).join('');
        rows.classList.remove('rs');
        if (animate) {
          void rows.offsetWidth;
          rows.classList.add('rs');
        }
      };
      chipsEl.addEventListener('click', (e) => {
        const b = e.target.closest('.chip');
        if (!b || b.dataset.f === filter) return;
        filter = b.dataset.f;
        list(true);
      });
      const say = (msg) => {
        toast.querySelector('b').textContent = msg;
        toast.classList.add('show');
        clearTimeout(tt);
        tt = setTimeout(() => toast.classList.remove('show'), 2600);
      };
      const setActive = (i) => {
        const els = [...pitems.querySelectorAll('.pi')];
        active = i;
        els.forEach((b, k) => b.classList.toggle('act', k === i));
        hi.style.opacity = els.length ? 1 : 0;
        if (els[i]) hi.style.transform = `translateY(${els[i].offsetTop}px)`;
      };
      const render = () => {
        const q = inp.value.trim().toLowerCase();
        items = cmds.filter((c) => !q || `${c.t} ${c.kw} ${c.s}`.toLowerCase().includes(q));
        let html = '';
        let g = '';
        items.forEach((c, i) => {
          if (c.g !== g) {
            g = c.g;
            html += `<p class="pg">${g}</p>`;
          }
          html += `<button class="pi" type="button" data-i="${i}"><span class="pic">${svg(IC[c.ic], 18)}</span><p><b>${c.t}</b><small>${c.s}</small></p><span class="rn">${svg('<polyline points="9 10 4 15 9 20"/><path d="M20 4v7a4 4 0 0 1-4 4H4"/>', 15)}</span></button>`;
        });
        pitems.innerHTML = items.length ? html : '<p class="none"></p>';
        if (!items.length) pitems.firstChild.textContent = `No results for "${inp.value.trim()}"`;
        hi.style.transition = 'none';
        setActive(0);
        void hi.offsetWidth;
        hi.style.transition = '';
      };
      const open = (focus) => {
        app.classList.add('on');
        $('.pal').setAttribute('aria-hidden', 'false');
        inp.value = '';
        render();
        if (focus) inp.focus({ preventScroll: true });
      };
      const close = () => {
        app.classList.remove('on');
        $('.pal').setAttribute('aria-hidden', 'true');
        inp.blur();
      };
      const exec = (c) => {
        close();
        if (c.k === 'new') {
          made++;
          data.unshift([`AF-${20418 + made}`, routes[made % routes.length], 'Transit', `Oct ${20 + made}`, 4, 'Seabound Lines']);
          if (filter !== 'All' && filter !== 'Transit') filter = 'All';
          list(false);
          const first = rows.firstElementChild;
          first.classList.add('ent');
          void first.offsetWidth;
          first.classList.remove('ent');
          say(`Shipment AF-${20418 + made} drafted`);
        } else if (c.k === 'export') say('Manifest exported - 128 rows');
        else if (c.k === 'notify') say('6 carriers notified');
        else {
          filter = c.k;
          list(true);
          say(`Showing ${label[c.k].toLowerCase()} shipments`);
        }
      };
      trig.addEventListener('click', (e) => open(e.isTrusted));
      inp.addEventListener('input', render);
      pitems.addEventListener('mousemove', (e) => {
        const b = e.target.closest('.pi');
        if (b && +b.dataset.i !== active) setActive(+b.dataset.i);
      });
      pitems.addEventListener('click', (e) => {
        const b = e.target.closest('.pi');
        if (b) exec(items[+b.dataset.i]);
      });
      $('.scrim').addEventListener('click', close);
      root.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
          e.preventDefault();
          if (app.classList.contains('on')) close();
          else open(true);
        } else if (app.classList.contains('on')) {
          if (e.key === 'Escape') close();
          else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (items.length) setActive((active + (e.key === 'ArrowDown' ? 1 : items.length - 1)) % items.length);
          } else if (e.key === 'Enter' && items[active]) exec(items[active]);
        }
      });
      list(false);

      // Autoplay: open the bar, type a few letters, run the top result. Rotates delayed view, new shipment, export.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && root.getRootNode().activeElement !== inp;
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
        cur.classList.remove('off');
        return true;
      };
      const go = async (el, fx, fy) => {
        if (!moveTo(el, fx, fy)) cur.classList.add('off');
        await wait(820);
      };
      const tap = async (el) => {
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      // live ambient: in-transit shipments creep along their route
      (async () => {
        while (root.isConnected) {
          await wait(2200);
          const tr = data.filter((r) => r[2] === 'Transit' && r[4] < 96);
          if (!tr.length) continue;
          const r = tr[Math.floor(Math.random() * tr.length)];
          r[4] += 3;
          const bar = rows.querySelector(`[data-id="${r[0]}"] .fl i`);
          if (bar) bar.style.setProperty('--p', r[4] / 100);
        }
      })();
      const scripts = [['del', 'Delayed'], ['new', 'New shipment'], ['exp', 'Export manifest']];
      cur.style.transform = 'translate(620px,520px)';
      (async () => {
        await wait(1600);
        let round = 0;
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (app.classList.contains('on')) close();
          const [typed] = scripts[round % scripts.length];
          await go(trig, 0.5, 0.5);
          if (!(await tap(trig))) continue;
          await wait(700);
          for (const ch of typed) {
            if (!idle()) break;
            inp.value += ch;
            inp.dispatchEvent(new Event('input'));
            await wait(150);
          }
          await wait(500);
          const first = pitems.querySelector('.pi');
          if (first && idle()) {
            await go(first, 0.4, 0.5);
            await tap(first);
          }
          round++;
          await wait(3200);
        }
      })();
    },
    prompt: `Build a command-bar-first app shell for a logistics web app: almost no navigation chrome, the command palette is the primary way to move and act. Full viewport (height: 100dvh).

Shell: a 66px header with a three-column grid (1fr, minmax(0, 460px), 1fr): logo on the left, a wide search-style trigger button in the middle ("Search or run a command" with a Ctrl K keycap), avatar on the right. Below it a centered content column (max-width 1040px): page title with a status line, three small "jump back in" cards, status filter chips, and a shipments list card (id and carrier, route, status pill, a 6px route-progress bar, ETA).

Palette: a 580px dialog (role="dialog", aria-label) positioned absolutely near the top, over a rgba dark scrim. It has a 60px input row (search icon, 16px input, Esc keycap), a scrollable result list with small uppercase group labels (Actions, Views), 52px result rows (34px icon tile, bold title, muted subtitle, an enter icon on the active row), and a footer with key hints. Filter as you type: match title, subtitle and a hidden keywords string, case-insensitive; show a "No results for ..." line when empty. ONE highlight element behind the results follows the active row with transform: translateY(row.offsetTop) over about 320ms; arrow keys and mouse hover move it, Enter or click runs the command.

Behavior: Ctrl K or Cmd K toggles it, Escape and a scrim click close it, focus moves into the input and back to the trigger on close. Commands: New shipment inserts a row at the top (the row wrapper animates grid-template-rows 0fr to 1fr plus opacity, spring 587ms, so the rest slide down) and shows a toast; view commands set the filter chip and re-stagger the list (opacity and translateY(8px), 40ms apart); other actions show a toast that slides up with a green check. The palette opens with opacity 0 to 1 and translateY(-12px) scale(.97) to rest on a spring.

Accessibility: aria-hidden toggled on the dialog, aria-label on the trigger, visible focus rings, prefers-reduced-motion removes stagger. Phone (under 760px): the trigger becomes the full-width search field, keycap hidden, list rows collapse to id and status. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (Header, CommandTrigger, CommandPalette, ResultRow, ShipmentList, Toast).`,
  });

  ML.add({
    id: 'app-shells-workspaces',
    cat: 'app-shells',
    title: 'Workspace switcher',
    sub: 'Rail swaps the whole channel list',
    html: `
<div class="app">
  <nav class="wr" aria-label="Workspaces">
    <span class="ind" aria-hidden="true"></span>
    <button class="ws" type="button" aria-label="Northgate" data-i="0">NG</button>
    <button class="ws" type="button" aria-label="Solace Studio" data-i="1">SS<u class="bd">2</u></button>
    <button class="ws" type="button" aria-label="Bayside Fitness" data-i="2">BF<u class="bd">5</u></button>
    <button class="ws add" type="button" aria-label="Add workspace">${I(P.plus, 18)}</button>
    <span class="grow"></span>
    <span class="av">MR</span>
  </nav>
  <aside class="cs">
    <div class="ch"><p><b class="wn"></b><small class="wm"></small></p>${I(P.chev, 16)}</div>
    <div class="cbody">
      <p class="lbl sw">Channels</p>
      <div class="chl"><span class="hi" aria-hidden="true"></span><ul class="chs"></ul></div>
      <p class="lbl sw" style="--i:6">Direct messages</p>
      <ul class="dms"></ul>
    </div>
  </aside>
  <section class="msgs">
    <header class="mh">
      <h2><span class="hs">${I(P.hash, 18)}</span><b class="cn"></b></h2>
      <p class="topic"></p>
      <div class="avs"></div>
      <button class="ic" type="button" aria-label="Search messages">${I(P.search, 18)}</button>
    </header>
    <div class="feed"></div>
    <form class="comp">
      <input type="text" aria-label="Message" autocomplete="off">
      <button class="ic" type="button" aria-label="Attach a file">${I(P.clip, 18)}</button>
      <button class="send" type="submit" aria-label="Send">${I(P.send, 17)}</button>
    </form>
  </section>
  ${CURSOR}
</div>`,
    css: `
.d .app{display:grid;grid-template-columns:76px 262px minmax(0,1fr);height:100%;background:var(--ml-bg)}
.d .wr{position:relative;display:flex;flex-direction:column;align-items:center;gap:14px;padding:18px 0;background:var(--ml-bar-2);border-right:1px solid var(--ml-line)}
.d .ind{position:absolute;left:0;top:0;width:4px;height:28px;border-radius:0 4px 4px 0;background:var(--ml-accent);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .ws{position:relative;display:grid;place-items:center;width:46px;height:46px;border:0;border-radius:15px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-accent-ink);font-size:14px;font-weight:700;letter-spacing:-.02em;cursor:pointer;transform:scale(.9);transition:transform var(--ml-spring-dur) var(--ml-spring),background-color .3s ease,color .3s ease,box-shadow .3s ease}
.d .ws:hover{transform:scale(1)}
.d .ws.on{transform:scale(1);background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22);color:#fff}
.d .ws.press{transform:scale(.86)}
.d .ws.add{background:none;box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:var(--ml-muted)}
.d .ws:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .bd{position:absolute;top:-5px;right:-5px;min-width:18px;height:18px;padding:0 5px;border-radius:99px;background:var(--ml-accent);box-shadow:0 0 0 2px var(--ml-bar-2);font:700 10.5px/18px var(--ml-mono);color:#fff;text-align:center;text-decoration:none;transition:transform .3s var(--ml-bounce),opacity .2s ease}
.d .ws.on .bd{transform:scale(0);opacity:0}
.d .grow{flex:1}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .cs{display:flex;flex-direction:column;min-width:0;min-height:0;border-right:1px solid var(--ml-line)}
.d .ch{display:flex;align-items:center;justify-content:space-between;flex:none;height:64px;padding:0 18px;border-bottom:1px solid var(--ml-line);color:var(--ml-muted)}
.d .ch p{display:flex;flex-direction:column}
.d .wn{font-size:16px;font-weight:650;letter-spacing:-.02em;color:var(--ml-ink)}
.d .wm{font-size:12px;color:var(--ml-muted)}
.d .cbody{flex:1;min-height:0;padding:14px 12px;overflow-y:auto;scrollbar-width:thin}
.d .lbl{padding:6px 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .lbl:not(:first-child){margin-top:12px}
.d .chl{position:relative}
.d .hi{position:absolute;left:0;right:0;top:0;height:36px;border-radius:10px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .chs,.d .dms{position:relative;list-style:none;display:flex;flex-direction:column;gap:2px}
.d .cb{display:flex;align-items:center;gap:9px;width:100%;height:36px;padding:0 10px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .cb svg{flex:none;color:var(--ml-muted)}
.d .cb:hover{color:var(--ml-ink)}
.d .cb.on{color:var(--ml-accent-ink);font-weight:650}
.d .cb.on svg{color:var(--ml-accent)}
.d .cb.un{color:var(--ml-ink);font-weight:650}
.d .cb em{margin-left:auto;min-width:20px;padding:3px 6px;border-radius:99px;background:var(--ml-accent);font:700 10.5px/1.1 var(--ml-mono);font-style:normal;color:#fff;text-align:center}
.d .cb.on em{display:none}
.d .cb:focus-visible,.d .ic:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
.d .dm .pa{position:relative;display:grid;place-items:center;flex:none;width:24px;height:24px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:9.5px;font-weight:700}
.d .dm .pa::after{content:"";position:absolute;right:-1px;bottom:-1px;width:8px;height:8px;border-radius:50%;background:#1DB954;box-shadow:0 0 0 2px var(--ml-bg)}
.d .dm.off .pa::after{background:var(--ml-bar)}
.d .msgs{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .mh{display:flex;align-items:center;gap:14px;flex:none;height:64px;padding:0 24px;border-bottom:1px solid var(--ml-line)}
.d .mh h2{display:flex;align-items:center;gap:6px;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .hs{display:grid;color:var(--ml-muted)}
.d .topic{flex:1;min-width:0;overflow:hidden;font-size:13px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .avs{display:flex}
.d .avs i{display:grid;place-items:center;width:28px;height:28px;margin-left:-7px;border-radius:50%;background:var(--ml-accent-soft);box-shadow:0 0 0 2px var(--ml-bg);font-size:9.5px;font-style:normal;font-weight:700;color:var(--ml-accent-ink)}
.d .avs i:first-child{margin-left:0}
.d .ic{display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer}
.d .ic:hover{background:var(--ml-surface)}
.d .feed{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:22px 28px;overflow-y:auto;scrollbar-width:thin}
.d .day{display:flex;align-items:center;gap:12px;font-size:12px;font-weight:600;color:var(--ml-muted)}
.d .day::before,.d .day::after{content:"";flex:1;height:1px;background:var(--ml-line)}
.d .msg{display:flex;gap:12px}
.d .msg .pa{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:12px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:700}
.d .mb{display:flex;flex-direction:column;gap:5px;min-width:0}
.d .nm{display:flex;align-items:baseline;gap:8px}
.d .nm b{font-size:14px;font-weight:650}
.d .nm time{font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .tx{max-width:560px;font-size:14.5px;line-height:1.5;color:var(--ml-ink-2)}
.d .rx{display:flex;gap:6px;margin-top:2px}
.d .rx span{display:inline-flex;align-items:center;gap:5px;height:26px;padding:0 9px;border-radius:99px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 11.5px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d .fi{display:inline-flex;align-items:center;gap:10px;align-self:flex-start;margin-top:4px;padding:8px 14px 8px 8px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600}
.d .fi i{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .typing{display:flex;align-items:center;gap:10px;font-size:12.5px;color:var(--ml-muted)}
.d .typing span{display:inline-flex;gap:4px;padding:8px 11px;border-radius:99px;background:var(--ml-surface)}
.d .typing i{width:5px;height:5px;border-radius:50%;background:var(--ml-muted);animation:wsw-dot 1.2s ease-in-out infinite}
.d .typing i:nth-child(2){animation-delay:.15s}
.d .typing i:nth-child(3){animation-delay:.3s}
.d .comp{display:flex;align-items:center;gap:6px;flex:none;margin:0 28px 24px;padding:8px 8px 8px 16px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);transition:box-shadow .2s ease}
.d .comp:focus-within{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .comp input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:14.5px;color:var(--ml-ink)}
.d .comp input::placeholder{color:var(--ml-muted)}
.d .send{display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;color:#fff;background:var(--ml-grad);cursor:pointer;transition:transform 90ms ease-out}
.d .send:active{transform:scale(.94)}
.d .swap .sw{animation:wsw-in 480ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 35ms)}
.d .swap2 .mi{animation:wsw-up 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 60ms)}
@keyframes wsw-in{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:none}}
@keyframes wsw-up{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes wsw-dot{0%,60%,100%{transform:translateY(0);opacity:.5}30%{transform:translateY(-3px);opacity:1}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:64px minmax(0,1fr)}
  .d .cs,.d .avs,.d .topic{display:none}
  .d .mh{padding:0 14px}
  .d .feed{padding:18px 16px}
  .d .comp{margin:0 14px 16px}
}
@media (prefers-reduced-motion: reduce){.d .swap .sw,.d .swap2 .mi,.d .typing i{animation:none}}`,
    run: (root) => {
      const RI = {
        check: '<path d="M20 6 9 17l-5-5"/>',
        smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
      };
      const svg = (d, s = 14) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const HASH = '<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>';
      const FILE = '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>';
      const wss = [
        { n: 'Northgate', m: '42 members', who: ['PN', 'TL', 'AT', 'DO'], typer: 'Aiko',
          chans: [['general', 0, 'Company news and announcements'], ['ops', 3, 'Deliveries, vendors and venue logistics'], ['launch-q4', 0, 'Everything for the October launch'], ['design-review', 1, 'Share work early, get notes fast'], ['random', 0, 'Non-work chatter']],
          dms: [['Priya Nair', 'PN', 1, 1], ['Tomas Lindqvist', 'TL', 0, 1], ['Aiko Tan', 'AT', 0, 0]],
          sets: [[
            ['PN', 'Priya Nair', '9:12 AM', 'Morning all. The launch checklist is pinned in the channel. Please add your owner names by noon.', [['check', 6], ['smile', 2]], null],
            ['TL', 'Tomas Lindqvist', '9:26 AM', 'Venue confirmed for the 28th. Floor plan attached, comments welcome.', [['star', 3]], 'Floorplan-v3.pdf'],
            ['AT', 'Aiko Tan', '9:41 AM', 'Pricing page copy is in review. I will ship it right after standup.', [], null]], [
            ['DO', 'Daniel Okafor', '8:40 AM', 'Pallet delivery slipped to Thursday. I moved the setup crew to the afternoon.', [['check', 4]], null],
            ['PN', 'Priya Nair', '8:52 AM', 'Thanks Daniel. Can we get a revised timeline in the ops sheet?', [], null],
            ['DO', 'Daniel Okafor', '9:05 AM', 'Updated. Row 14 has the new window and the driver contact.', [['smile', 1]], 'Ops-sheet.xlsx']]] },
        { n: 'Solace Studio', m: '12 members', who: ['IC', 'KM', 'EP'], typer: 'Kwame',
          chans: [['studio', 0, 'Daily design chatter and work in progress'], ['brand-refresh', 2, 'Corvid Coffee identity project'], ['client-feedback', 0, 'Notes from clients, triaged weekly'], ['moodboards', 0, 'References, palettes and textures']],
          dms: [['Isabel Cruz', 'IC', 2, 1], ['Kwame Mensah', 'KM', 0, 1], ['Elena Petrova', 'EP', 0, 0]],
          sets: [[
            ['IC', 'Isabel Cruz', '10:02 AM', 'New logo exploration is up. Three directions, all on the same grid.', [['star', 5], ['smile', 3]], 'Logo-directions.fig'],
            ['KM', 'Kwame Mensah', '10:15 AM', 'Direction two feels right for the packaging. Warm without being loud.', [['check', 2]], null],
            ['EP', 'Elena Petrova', '10:31 AM', 'I will mock it on the tin and the tote tonight.', [], null]], [
            ['EP', 'Elena Petrova', '1:20 PM', 'Corvid sent notes on the menu board. Mostly spacing and one color swap.', [], 'Corvid-notes.pdf'],
            ['KM', 'Kwame Mensah', '1:34 PM', 'Got it. I will push a revised board before the 4 pm call.', [['check', 3]], null],
            ['IC', 'Isabel Cruz', '1:48 PM', 'Great. Share the link in the thread when it is ready.', [['smile', 1]], null]]] },
        { n: 'Bayside Fitness', m: '27 members', who: ['RS', 'NH', 'JW', 'CM'], typer: 'Jia',
          chans: [['front-desk', 0, 'Check-ins, questions and lost property'], ['classes', 4, 'Schedule changes and waitlists'], ['trainers', 0, 'Coach swaps and cover'], ['member-care', 1, 'Feedback and follow-ups'], ['announcements', 0, 'Studio-wide updates']],
          dms: [['Rafael Santos', 'RS', 0, 1], ['Noor Haddad', 'NH', 4, 1], ['Jia Wen', 'JW', 0, 0]],
          sets: [[
            ['NH', 'Noor Haddad', '6:05 AM', 'Seven am spin is full with a waitlist of nine. Should we open a second room?', [['star', 2]], null],
            ['RS', 'Rafael Santos', '6:12 AM', 'Yes, open the studio room. I will cover the extra coach slot.', [['check', 5]], null],
            ['JW', 'Jia Wen', '6:20 AM', 'Posted the updated schedule on the front desk board and in the app.', [['smile', 2]], 'Schedule-oct.pdf']], [
            ['CM', 'Carlos Mendoza', '4:30 PM', 'Trial members this week: 14. Eight booked a second class already.', [['check', 6]], null],
            ['NH', 'Noor Haddad', '4:44 PM', 'That is our best week since June. Sending them the welcome offer now.', [['smile', 3]], null],
            ['RS', 'Rafael Santos', '4:51 PM', 'Nice work everyone. Log their feedback in member care.', [], null]]] },
      ];
      const $ = (s) => root.querySelector(s);
      const app = $('.app');
      const ind = $('.ind');
      const hi = $('.hi');
      const feed = $('.feed');
      const cur = $('.cur');
      const input = $('.comp input');
      const tiles = [...root.querySelectorAll('.ws:not(.add)')];
      let w = -1;
      let c = 0;
      const chanEls = () => [...root.querySelectorAll('.chs .cb')];
      const msgs = (animate) => {
        const ws = wss[w];
        $('.cn').textContent = ws.chans[c][0];
        $('.topic').textContent = ws.chans[c][2];
        input.placeholder = `Message #${ws.chans[c][0]}`;
        feed.innerHTML = `<p class="day mi" style="--i:0">Wednesday, October 14</p>${ws.sets[c % 2]
          .map((m, k) => `<div class="msg mi" style="--i:${k + 1}"><span class="pa">${m[0]}</span><div class="mb"><p class="nm"><b>${m[1]}</b><time>${m[2]}</time></p><p class="tx">${m[3]}</p>${m[4].length ? `<div class="rx">${m[4].map((r) => `<span>${svg(RI[r[0]], 13)}${r[1]}</span>`).join('')}</div>` : ''}${m[5] ? `<span class="fi"><i>${svg(FILE, 16)}</i>${m[5]}</span>` : ''}</div></div>`)
          .join('')}<div class="typing mi" style="--i:5"><span><i></i><i></i><i></i></span>${ws.typer} is typing</div>`;
        feed.scrollTop = feed.scrollHeight;
        if (animate) {
          feed.classList.remove('swap2');
          void feed.offsetWidth;
          feed.classList.add('swap2');
        }
      };
      const selChan = (k, animate) => {
        c = k;
        chanEls().forEach((b, j) => {
          b.classList.toggle('on', j === k);
          if (j === k) b.classList.remove('un');
        });
        const el = chanEls()[k];
        if (el) hi.style.transform = `translateY(${el.parentElement.offsetTop}px)`;
        msgs(animate);
      };
      const side = (animate) => {
        const ws = wss[w];
        $('.wn').textContent = ws.n;
        $('.wm').textContent = ws.m;
        $('.chs').innerHTML = ws.chans.map((ch, k) => `<li class="sw" style="--i:${k + 1}"><button class="cb${ch[1] ? ' un' : ''}" type="button" data-k="${k}"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${HASH}</svg><span>${ch[0]}</span>${ch[1] ? `<em>${ch[1]}</em>` : ''}</button></li>`).join('');
        $('.dms').innerHTML = ws.dms.map((d, k) => `<li class="sw" style="--i:${k + 7}"><button class="cb dm${d[3] ? '' : ' off'}${d[2] ? ' un' : ''}" type="button"><span class="pa">${d[1]}</span><span>${d[0]}</span>${d[2] ? `<em>${d[2]}</em>` : ''}</button></li>`).join('');
        $('.avs').innerHTML = ws.who.map((x) => `<i>${x}</i>`).join('');
        hi.style.transition = 'none';
        selChan(0, animate);
        void hi.offsetWidth;
        hi.style.transition = '';
        if (animate) {
          app.classList.remove('swap');
          void app.offsetWidth;
          app.classList.add('swap');
        }
      };
      const pick = (i, animate) => {
        w = i;
        tiles.forEach((t, k) => {
          t.classList.toggle('on', k === i);
          if (k === i) t.setAttribute('aria-current', 'true');
          else t.removeAttribute('aria-current');
        });
        ind.style.transform = `translateY(${tiles[i].offsetTop + 9}px)`;
        side(animate);
      };
      tiles.forEach((t, k) => t.addEventListener('click', () => k !== w && pick(k, true)));
      $('.chs').addEventListener('click', (e) => {
        const b = e.target.closest('.cb');
        if (b && +b.dataset.k !== c) selChan(+b.dataset.k, true);
      });
      $('.comp').addEventListener('submit', (e) => {
        e.preventDefault();
        const v = input.value.trim();
        if (!v) return;
        input.value = '';
        const row = document.createElement('div');
        row.className = 'msg mi';
        row.style.setProperty('--i', 0);
        const av = document.createElement('span');
        av.className = 'pa';
        av.textContent = 'MR';
        const body = document.createElement('div');
        body.className = 'mb';
        const nm = document.createElement('p');
        nm.className = 'nm';
        nm.innerHTML = '<b>Maya Reyes</b><time>Just now</time>';
        const tx = document.createElement('p');
        tx.className = 'tx';
        tx.textContent = v;
        body.append(nm, tx);
        row.append(av, body);
        feed.insertBefore(row, feed.querySelector('.typing'));
        feed.classList.add('swap2');
        feed.scrollTop = feed.scrollHeight;
      });
      pick(0, false);

      // Autoplay: click the next workspace tile (the whole sidebar swaps), then open another channel.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && root.getRootNode().activeElement !== input;
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
        cur.classList.remove('off');
        return true;
      };
      const go = async (el, fx, fy) => {
        if (!moveTo(el, fx, fy)) cur.classList.add('off');
        await wait(820);
      };
      const tap = async (el) => {
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(640px,600px)';
      (async () => {
        await wait(1600);
        let round = 0;
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const t = tiles[(w + 1) % tiles.length];
          await go(t, 0.5, 0.5);
          if (!(await tap(t))) continue;
          await wait(2500);
          const ch = chanEls()[1 + (round % 2) * 2] || chanEls()[1];
          if (!idle()) continue;
          await go(ch, 0.4, 0.5);
          if (!(await tap(ch))) continue;
          round++;
          await wait(2600);
        }
      })();
    },
    prompt: `Build a team-chat shell with a workspace switcher: a far-left rail of workspaces that swaps the entire channel sidebar and message pane. Full viewport (height: 100dvh).

Layout: CSS grid, columns 76px, 262px and minmax(0, 1fr). Column 1 (soft blue-grey, hairline right): 46px rounded workspace tiles (initials, 15px radius), an add-workspace tile with a dashed-feeling ring, and your avatar pinned to the bottom. The active tile has the accent gradient and full scale; inactive tiles are white at scale .9 and spring to 1 on hover; unread workspaces carry a small count badge that pops away when you open them. ONE indicator element (4px wide, 28px tall, accent, rounded on its right edge) sits on the rail's left edge and moves with transform: translateY(tile.offsetTop + 9) on a 587ms critically damped spring (linear() curve). Column 2: workspace name and member count, then a Channels list (# icon, name, bold with an unread count badge when unread) and a Direct messages list (24px avatar with a green or grey presence dot). The active channel sits on a second shared highlight pill that glides with translateY. Column 3: channel header (name, topic, member avatar stack, search), the message feed (day divider, 38px rounded-square avatars, name and time, 14.5px text, reaction chips with an icon and a count, a file attachment chip, a typing indicator with three bouncing dots) and a composer card with attach and send buttons.

Motion: switching workspace re-renders the channel list and DMs with a stagger (opacity 0 to 1, translateX(-10px) to 0, 35ms apart) and the messages rise in (translateY(10px), 60ms apart). Sending a message appends it with the same entrance. The typing dots loop on a 1.2s ease-in-out.

Accessibility: nav landmark for workspaces with aria-label per tile and aria-current on the active one, focus rings, the composer is a real form, prefers-reduced-motion removes the stagger and dots. Phone (under 760px): keep a 64px workspace rail and the message pane, hide the channel sidebar behind a header button. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (WorkspaceRail, ChannelSidebar, MessageFeed, Message, Composer).`,
  });

  ML.add({
    id: 'app-shells-settings-nav',
    cat: 'app-shells',
    title: 'Nested settings nav',
    sub: 'Groups unfold, breadcrumb follows',
    html: `
<div class="app">
  <header class="top">
    <div class="logo"><span class="mark">${I(P.mark, 16)}</span><b>Halden</b><span class="sep">/</span><span class="org">Juniper Health</span></div>
    <label class="search">${I(P.search, 16)}<input type="search" placeholder="Search" aria-label="Search"></label>
    <span class="av">MR</span>
  </header>
  <div class="body">
    <aside class="nav card">
      <p class="nh">Settings</p>
      <nav class="groups" aria-label="Settings"></nav>
    </aside>
    <main class="pane card">
      <div class="pin">
        <p class="crumb in" style="--i:0"></p>
        <h1 class="in" style="--i:1"></h1>
        <p class="lead in" style="--i:2"></p>
        <div class="secs"></div>
      </div>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `
.d .app{display:flex;flex-direction:column;height:100%}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:62px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .logo{display:flex;align-items:center;gap:10px;margin-right:auto;font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .mark{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .sep{color:var(--ml-bar);font-weight:400}
.d .org{font-weight:550;color:var(--ml-muted)}
.d .search{display:flex;align-items:center;gap:8px;width:260px;height:38px;padding:0 12px;border-radius:10px;background:var(--ml-surface);color:var(--ml-muted);transition:box-shadow .2s ease,background-color .2s ease}
.d .search:focus-within{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px;color:var(--ml-ink)}
.d .search input::placeholder{color:var(--ml-muted)}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .body{display:grid;grid-template-columns:292px minmax(0,1fr);gap:20px;flex:1;min-height:0;padding:22px 28px 28px}
.d .card{border-radius:20px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .nav{display:flex;flex-direction:column;min-height:0;padding:16px 12px 12px}
.d .nh{padding:2px 10px 12px;font-size:20px;font-weight:650;letter-spacing:-.03em}
.d .groups{display:flex;flex-direction:column;gap:2px;min-height:0;overflow-y:auto;scrollbar-width:thin}
.d .gh{display:flex;align-items:center;gap:11px;width:100%;height:42px;padding:0 10px;border:0;border-radius:11px;background:none;color:var(--ml-ink);font-size:14px;font-weight:600;text-align:left;cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .gh:hover{background:var(--ml-surface)}
.d .gh>svg:first-child{flex:none;color:var(--ml-muted)}
.d .gh em{margin-left:auto;font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .gh .cv{flex:none;color:var(--ml-muted);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .grp.open .gh .cv{transform:rotate(180deg)}
.d .grp.open .gh>svg:first-child{color:var(--ml-accent)}
.d .gb{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s var(--ml-ease)}
.d .grp.open .gb{grid-template-rows:1fr}
.d .gi{position:relative;min-height:0;margin-left:20px;padding-left:12px;overflow:hidden}
.d .gi::before{content:"";position:absolute;left:0;top:4px;bottom:4px;width:1px;background:var(--ml-line)}
.d .lf{display:block;width:100%;height:36px;margin-top:2px;padding:0 12px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:13.5px;font-weight:500;text-align:left;cursor:pointer;transition:background-color .25s ease,color .25s ease,transform 90ms ease-out}
.d .lf:hover{background:var(--ml-surface)}
.d .lf.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:650}
.d .gi .lf:last-child{margin-bottom:4px}
.d .gh:focus-visible,.d .lf:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
.d button.press{transform:scale(.97)}
.d .pane{min-height:0;padding:30px 36px;overflow-y:auto;scrollbar-width:thin}
.d .pin{max-width:740px}
.d .crumb{display:flex;align-items:center;gap:7px;font-size:13px;color:var(--ml-muted)}
.d .crumb span{color:var(--ml-bar)}
.d .crumb b{font-weight:600;color:var(--ml-ink)}
.d h1{margin-top:12px;font-size:28px;line-height:1.1;font-weight:650;letter-spacing:-.035em}
.d .lead{margin-top:8px;font-size:14.5px;color:var(--ml-muted)}
.d .sec{margin-top:26px}
.d .sec h3{padding:0 2px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .box{margin-top:10px;border-radius:16px;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .st{display:grid;grid-template-columns:minmax(0,1fr) auto;align-items:center;gap:20px;padding:16px 20px;border-bottom:1px solid var(--ml-line)}
.d .st:last-child{border-bottom:0}
.d .sl{display:flex;align-items:center;gap:12px;min-width:0}
.d .sl p{display:flex;flex-direction:column;gap:2px;min-width:0}
.d .sl b{font-size:14px;font-weight:600}
.d .sl small{overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .sl .mono{font-family:var(--ml-mono);font-size:12px}
.d .pa{display:grid;place-items:center;flex:none;width:36px;height:36px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:700}
.d .val{display:inline-flex;align-items:center;justify-content:space-between;gap:10px;min-width:210px;height:38px;padding:0 12px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13.5px;color:var(--ml-ink)}
.d .val svg{color:var(--ml-muted)}
.d .val.sm{min-width:130px}
.d .gbtn{height:36px;padding:0 14px;border:0;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:transform 90ms ease-out}
.d .bgd{padding:5px 11px;border-radius:999px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:600}
.d .sw{position:relative;flex:none;width:44px;height:26px;border:0;border-radius:99px;background:var(--ml-bar);cursor:pointer;transition:background-color .25s ease}
.d .sw::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .sw.on{background:var(--ml-accent)}
.d .sw.on::after{transform:translateX(18px)}
.d .sw:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .pane.swap .in{animation:nset-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
@keyframes nset-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .org,.d .sep,.d .search{display:none}
  .d .body{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,230px) minmax(0,1fr);gap:14px;padding:14px 14px 16px}
  .d .pane{padding:22px 20px}
  .d .st{grid-template-columns:minmax(0,1fr);gap:12px;padding:14px 16px}
  .d .val{min-width:0;width:100%}
}
@media (prefers-reduced-motion: reduce){.d .pane.swap .in{animation:none}}`,
    run: (root) => {
      const svg = (d, s = 18) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = {
        user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
        building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>',
        key: '<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/>',
        down: '<path d="m6 9 6 6 6-6"/>',
        chev: '<path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/>',
      };
      const groups = [
        { n: 'Account', ic: 'user', leaves: [['profile', 'Profile'], ['security', 'Security']] },
        { n: 'Workspace', ic: 'building', leaves: [['general', 'General'], ['members', 'Members'], ['billing', 'Billing']] },
        { n: 'Developers', ic: 'key', leaves: [['keys', 'API keys'], ['hooks', 'Webhooks']] },
      ];
      // row: [label, description, control, value]  control: t text, s select, sw switch, b button, g badge, m member
      const pages = {
        profile: ['Profile', 'How you appear to the rest of your workspace.', [['Personal info', [['Full name', 'Shown on comments and invoices', 't', 'Maya Reyes'], ['Work email', 'Used for sign-in and receipts', 't', 'maya@juniper.health'], ['Time zone', 'Schedules and digests follow this', 's', 'Eastern (UTC-05:00)']]], ['Preferences', [['Weekly digest', 'A Monday summary of your projects', 'sw', 1], ['Product tips', 'Occasional ideas for getting more out of Halden', 'sw', 0]]]]],
        security: ['Security', 'Keep your account and sign-ins protected.', [['Sign-in', [['Password', 'Last changed 3 months ago', 'b', 'Change'], ['Two-factor authentication', 'Authenticator app is on', 'sw', 1], ['Active sessions', '3 devices signed in right now', 'b', 'Review']]]]],
        general: ['General', 'Name, address and defaults for Juniper Health.', [['Workspace', [['Workspace name', 'Visible to every member', 't', 'Juniper Health'], ['Workspace URL', 'Where your team signs in', 't', 'juniper.halden.app'], ['Default language', 'New members start with this', 's', 'English']]], ['Access', [['Public sign-ups', 'Let anyone with your domain join', 'sw', 0]]]]],
        members: ['Members', '12 people in this workspace.', [['Team', [['Maya Reyes', 'maya@juniper.health', 'm', 'Owner'], ['Daniel Okafor', 'daniel@juniper.health', 'm', 'Admin'], ['Hana Kim', 'hana@juniper.health', 'm', 'Editor'], ['Luis Ortega', 'luis@juniper.health', 'm', 'Viewer']]], ['Invites', [['Invite link', 'Anyone with the link can request access', 'b', 'Copy link']]]]],
        billing: ['Billing', 'Plan, invoices and payment details.', [['Plan', [['Current plan', 'Team, billed monthly', 'g', 'Team - $240/mo'], ['Next invoice', 'Charged to the card on file', 'g', 'Nov 1 - $240.00'], ['Payment method', 'Visa ending 4242', 's', 'Visa 4242']]], ['Receipts', [['Billing email', 'Invoices are sent here', 't', 'finance@juniper.health']]]]],
        keys: ['API keys', 'Create and roll the keys your apps use to reach Halden.', [['Keys', [['Production key', 'hk_live_********8f2a', 'b', 'Roll key'], ['Test key', 'hk_test_********41c9', 'b', 'Reveal'], ['Rate limit', '1,000 requests per minute', 'g', 'Standard']]]]],
        hooks: ['Webhooks', 'Send events to your own endpoints as they happen.', [['Endpoints', [['Invoice paid', 'api.juniper.health/hooks/paid', 'sw', 1], ['Member invited', 'api.juniper.health/hooks/invite', 'sw', 1], ['Plan changed', 'api.juniper.health/hooks/plan', 'sw', 0]]]]],
      };
      const $ = (s) => root.querySelector(s);
      const pane = $('.pane');
      const cur = $('.cur');
      const nav = $('.groups');
      let leaf = '';
      let gopen = -1;
      nav.innerHTML = groups
        .map((g, i) => `<div class="grp" data-g="${i}"><button class="gh" type="button" aria-expanded="false">${svg(IC[g.ic], 18)}<span>${g.n}</span><em>${g.leaves.length}</em>${svg(IC.down, 16).replace('<svg ', '<svg class="cv" ')}</button><div class="gb"><div class="gi">${g.leaves.map(([id, t]) => `<button class="lf" type="button" data-l="${id}">${t}</button>`).join('')}</div></div></div>`)
        .join('');
      const grpEls = [...nav.querySelectorAll('.grp')];
      const openGroup = (i) => {
        gopen = i;
        grpEls.forEach((g, k) => {
          g.classList.toggle('open', k === i);
          g.querySelector('.gh').setAttribute('aria-expanded', String(k === i));
        });
      };
      const ctl = (r) => {
        const [, , t, v] = r;
        if (t === 't') return `<span class="val">${v}</span>`;
        if (t === 's') return `<span class="val">${v}${svg(IC.chev, 15)}</span>`;
        if (t === 'sw') return `<button class="sw${v ? ' on' : ''}" type="button" role="switch" aria-checked="${!!v}" aria-label="${r[0]}"></button>`;
        if (t === 'b') return `<button class="gbtn" type="button">${v}</button>`;
        if (t === 'g') return `<span class="bgd">${v}</span>`;
        return `<span class="val sm">${v}${svg(IC.chev, 15)}</span>`;
      };
      const pick = (id, animate) => {
        leaf = id;
        const [title, lead, secs] = pages[id];
        const gi = groups.findIndex((g) => g.leaves.some((l) => l[0] === id));
        const name = groups[gi].leaves.find((l) => l[0] === id)[1];
        nav.querySelectorAll('.lf').forEach((b) => {
          b.classList.toggle('on', b.dataset.l === id);
          if (b.dataset.l === id) b.setAttribute('aria-current', 'page');
          else b.removeAttribute('aria-current');
        });
        $('.crumb').innerHTML = `Settings<span>/</span>${groups[gi].n}<span>/</span><b>${name}</b>`;
        $('h1').textContent = title;
        $('.lead').textContent = lead;
        let n = 3;
        $('.secs').innerHTML = secs
          .map(([h, rows]) => `<section class="sec in" style="--i:${n++}"><h3>${h}</h3><div class="box">${rows.map((r) => `<div class="st"><div class="sl">${r[2] === 'm' ? `<span class="pa">${r[0].split(' ').map((w) => w[0]).join('')}</span>` : ''}<p><b>${r[0]}</b><small${r[3] && r[1].startsWith('hk_') ? ' class="mono"' : ''}>${r[1]}</small></p></div>${ctl(r)}</div>`).join('')}</div></section>`)
          .join('');
        $('.secs').querySelectorAll('.sec').forEach((s, k) => s.style.setProperty('--i', k + 3));
        pane.scrollTop = 0;
        if (animate) {
          pane.classList.remove('swap');
          void pane.offsetWidth;
          pane.classList.add('swap');
        }
      };
      nav.addEventListener('click', (e) => {
        const h = e.target.closest('.gh');
        if (h) {
          const i = +h.parentElement.dataset.g;
          openGroup(gopen === i ? -1 : i);
          return;
        }
        const l = e.target.closest('.lf');
        if (l && l.dataset.l !== leaf) {
          openGroup(+l.closest('.grp').dataset.g);
          pick(l.dataset.l, true);
        }
      });
      pane.addEventListener('click', (e) => {
        const s = e.target.closest('.sw');
        if (!s) return;
        const on = s.classList.toggle('on');
        s.setAttribute('aria-checked', String(on));
      });
      openGroup(1);
      pick('members', false);

      // Autoplay: open the next group (the others fold), pick a page, the breadcrumb and content follow.
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
        cur.classList.remove('off');
        return true;
      };
      const go = async (el, fx, fy) => {
        if (!moveTo(el, fx, fy)) cur.classList.add('off');
        await wait(820);
      };
      const tap = async (el) => {
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(1600);
        let round = 0;
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const gi = [2, 0, 1][round % 3];
          const g = grpEls[gi];
          await go(g.querySelector('.gh'), 0.4, 0.5);
          if (!(await tap(g.querySelector('.gh')))) continue;
          await wait(1100);
          const lf = g.querySelectorAll('.lf')[gi === 1 ? 2 : round % 2];
          await go(lf, 0.4, 0.5);
          if (!(await tap(lf))) continue;
          round++;
          await wait(2800);
        }
      })();
    },
    prompt: `Build a settings screen with a nested, expandable navigation and a breadcrumb that follows it. Full viewport (height: 100dvh); only the nav list and the content pane scroll.

Layout: a 62px top bar (logo, workspace name, search field, avatar), then a two-column grid (292px and minmax(0, 1fr), 20px gap, 22px page padding) of two white cards with 20px radius and a soft shadow. Left card: a "Settings" title and the navigation. It has three groups (Account, Workspace, Developers); each group header is a 42px button with a leading 18px icon, label, a tabular count and a chevron that rotates 180deg. Under it sit the pages (Profile, Security, General, Members, Billing, API keys, Webhooks) as 36px buttons indented 20px with a 1px vertical hairline guide to the left; the active page has an accent-soft fill and a ring plus aria-current="page". Right card: breadcrumb (Settings / Group / Page, last item bold), a 28px title, one line of description, then sections with an uppercase 11px label above a rounded hairline box of rows. Each row is label plus muted description on the left and a control on the right: text value box, select-looking pill, 44x26 toggle switch (role="switch", aria-checked, the knob moves with transform: translateX(18px) on a spring), a secondary button, a badge or, for members, an initials avatar with a role pill.

Motion: groups open and close with grid-template-rows 0fr to 1fr (450ms, cubic-bezier(.32,.72,0,1)) around an inner element with min-height: 0 and overflow: hidden, never animating height; opening one group folds the others (accordion). Picking a page re-triggers an entrance on the content: breadcrumb, title, description and each section fade and rise (opacity, translateY(8px)), 45ms apart, and the breadcrumb is rebuilt from the selected group and page.

Accessibility: nav landmark with aria-label, buttons for headers with aria-expanded, focus rings, switches reachable by keyboard, prefers-reduced-motion removes the entrance. Phone (under 760px): the nav card stacks above the content with a 230px max height and its own scroll, rows become a single column. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, SettingsNav, NavGroup, Breadcrumb, SettingRow, Switch).`,
  });

  ML.add({
    id: 'app-shells-split',
    cat: 'app-shells',
    title: 'Resizable split view',
    sub: 'Drag the divider, canvas reflows',
    html: `
<div class="app">
  <header class="top">
    <div class="logo"><span class="mark">${I(P.mark, 16)}</span><b>Solace</b><span class="sep">/</span><span class="file">Corvid Coffee - Hero v3</span></div>
    <div class="tools" role="toolbar" aria-label="Tools">
      <button class="tl on" type="button" aria-label="Move">${I(P.pointer, 17)}</button>
      <button class="tl" type="button" aria-label="Frame">${I(P.square, 17)}</button>
      <button class="tl" type="button" aria-label="Text">${I(P.type, 17)}</button>
      <button class="tl" type="button" aria-label="Image">${I(P.image, 17)}</button>
    </div>
    <span class="zoom">86%</span>
    <span class="avs"><i>IC</i><i>KM</i></span>
    <button class="cta" type="button">Share</button>
  </header>
  <div class="body">
    <aside class="lay">
      <div class="lh"><b>Layers</b><span>8</span></div>
      <ul class="tree"></ul>
    </aside>
    <div class="gut" role="separator" aria-orientation="vertical" aria-label="Resize layers panel" tabindex="0" aria-valuemin="200" aria-valuenow="300">
      <i class="grip"></i><span class="chip">300 px</span>
    </div>
    <section class="cv">
      <div class="art" data-l="frame" data-n="Hero frame">
        <div class="nv" data-l="nav" data-n="Navigation"><b>Corvid</b><span class="nl"><i></i><i></i><i></i></span></div>
        <div class="hd">
          <p class="hl" data-l="head" data-n="Headline">Coffee, roasted slow.</p>
          <p class="sb" data-l="sub" data-n="Subhead">Small-batch beans, shipped within 48 hours of roasting.</p>
          <span class="bt" data-l="btn" data-n="Button">Shop beans</span>
        </div>
        <div class="im" data-l="img" data-n="Hero image"><svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><circle cx="292" cy="62" r="24" fill="#fff"/><path d="M0 200V130l100-70 90 62 80-48 130 96v30Z" fill="#9CC4FF"/><path d="M0 200v-30l120-52 110 60 170-40v62Z" fill="#FF7A3D"/></svg></div>
      </div>
    </section>
  </div>
  ${CURSOR}
</div>`,
    css: `
.d .app{display:flex;flex-direction:column;height:100%}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:60px;padding:0 20px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .logo{display:flex;align-items:center;gap:10px;margin-right:auto;font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .mark{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .sep{color:var(--ml-bar);font-weight:400}
.d .file{font-weight:550;color:var(--ml-muted)}
.d .tools{display:flex;gap:2px;padding:3px;border-radius:12px;background:var(--ml-surface)}
.d .tl{display:grid;place-items:center;width:36px;height:34px;border:0;border-radius:9px;background:none;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .tl.on{background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.1);color:var(--ml-accent)}
.d .zoom{padding:6px 10px;border-radius:8px;background:var(--ml-surface);font:600 12px/1 var(--ml-mono);color:var(--ml-ink-2)}
.d .avs{display:flex}
.d .avs i{display:grid;place-items:center;width:30px;height:30px;margin-left:-7px;border-radius:50%;background:var(--ml-accent-soft);box-shadow:0 0 0 2px var(--ml-bg);font-size:10px;font-style:normal;font-weight:700;color:var(--ml-accent-ink)}
.d .avs i:first-child{margin-left:0}
.d .cta{height:36px;padding:0 16px;border:0;border-radius:10px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22);font-size:13.5px;font-weight:600;cursor:pointer;transition:transform 90ms ease-out}
.d button.press{transform:scale(.96)}
.d .body{display:grid;grid-template-columns:var(--w,300px) 12px minmax(0,1fr);flex:1;min-height:0}
.d .lay{container-type:inline-size;display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--ml-bg)}
.d .lh{display:flex;align-items:center;justify-content:space-between;flex:none;height:50px;padding:0 18px;border-bottom:1px solid var(--ml-line);font-size:14px}
.d .lh b{font-weight:650;letter-spacing:-.01em}
.d .lh span{font:600 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .tree{flex:1;min-height:0;padding:10px;list-style:none;overflow-y:auto;scrollbar-width:thin}
.d .ly{display:flex;align-items:center;gap:10px;width:100%;height:38px;padding:0 10px 0 calc(10px + var(--d,0) * 18px);border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:13.5px;font-weight:500;text-align:left;cursor:pointer;transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .ly svg{flex:none;color:var(--ml-muted)}
.d .ly span{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.d .ly em{font:500 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .ly:hover{background:var(--ml-surface)}
.d .ly.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:650}
.d .ly.on svg,.d .ly.on em{color:var(--ml-accent)}
.d .ly:focus-visible,.d .gut:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px}
@container (max-width: 250px){.d .ly em{display:none}}
.d .gut{position:relative;z-index:3;display:grid;place-items:center;background:var(--ml-surface);cursor:col-resize;touch-action:none;box-shadow:inset 1px 0 0 var(--ml-line),inset -1px 0 0 var(--ml-line)}
.d .gut::after{content:"";position:absolute;inset:0 -6px}
.d .grip{width:4px;height:40px;border-radius:99px;background:var(--ml-bar);transition:background-color .2s ease,transform .25s var(--ml-ease)}
.d .gut:hover .grip,.d .gut.drag .grip,.d .gut.auto .grip{background:var(--ml-accent);transform:scaleY(1.3)}
.d .chip{position:absolute;left:22px;top:18px;padding:6px 10px;border-radius:8px;background:var(--ml-ink);color:#fff;font:600 12px/1 var(--ml-mono);white-space:nowrap;opacity:0;transform:translateX(-6px);transition:opacity .2s ease,transform .3s var(--ml-ease);pointer-events:none}
.d .gut.drag .chip,.d .gut.auto .chip{opacity:1;transform:none}
.d .cv{position:relative;display:grid;place-items:center;min-width:0;min-height:0;overflow:hidden;background:radial-gradient(rgba(255,68,51,.14) 1px,transparent 1.3px) 0 0/22px 22px,var(--ml-surface)}
.d .art{position:relative;container-type:inline-size;display:flex;flex-direction:column;width:min(80%,470px);height:86%;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d [data-l]{position:relative;transition:box-shadow .25s ease}
.d [data-l].sel{z-index:3;box-shadow:0 0 0 2px var(--ml-accent)}
.d [data-l].sel::after{content:attr(data-n);position:absolute;left:-2px;top:-26px;z-index:4;padding:4px 8px;border-radius:6px;background:var(--ml-accent);color:#fff;font:600 11px/1 var(--ml-font);letter-spacing:0;text-transform:none;white-space:nowrap}
.d .nv{display:flex;flex:none;align-items:center;justify-content:space-between;height:11cqw;padding:0 5cqw}
.d .nv b{font-size:4.2cqw;font-weight:650;letter-spacing:-.02em}
.d .nl{display:flex;gap:3cqw}
.d .nl i{width:6cqw;height:1.2cqw;border-radius:99px;background:var(--ml-bar)}
.d .hd{flex:none;padding:5cqw 5cqw 3cqw}
.d .hl{max-width:80%;font-size:10.5cqw;line-height:1.02;font-weight:650;letter-spacing:-.04em}
.d .sb{max-width:84%;margin-top:3cqw;font-size:3.6cqw;line-height:1.45;color:var(--ml-muted)}
.d .bt{display:inline-block;margin-top:4cqw;padding:2.6cqw 5cqw;border-radius:99px;background:var(--ml-grad);color:#fff;font-size:3.6cqw;font-weight:600}
.d .im{flex:1;min-height:0;margin:0 4cqw 4cqw;border-radius:3.5cqw;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-accent-line))}
.d .im svg{display:block;width:100%;height:100%;border-radius:inherit}
.d .hl.sel,.d .sb.sel,.d .bt.sel{border-radius:4px}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{padding:0 14px}
  .d .tools,.d .avs,.d .file,.d .sep,.d .zoom{display:none}
  .d .body{grid-template-columns:minmax(0,1fr);grid-template-rows:200px minmax(0,1fr)}
  .d .gut{display:none}
  .d .lay{border-bottom:1px solid var(--ml-line)}
  .d .art{width:84%;height:90%}
}`,
    run: (root) => {
      const svg = (d) => `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = {
        square: '<rect width="18" height="18" x="3" y="3" rx="2"/>',
        layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
        type: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>',
        image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
      };
      const layers = [
        ['frame', 'Hero frame', 'square', 0, '1280'], ['nav', 'Navigation', 'layers', 1, '72'], ['head', 'Headline', 'type', 1, '64'], ['sub', 'Subhead', 'type', 1, '40'],
        ['btn', 'Button', 'square', 1, '48'], ['img', 'Hero image', 'image', 1, '320'], ['menu', 'Menu section', 'layers', 0, '540'], ['foot', 'Footer', 'layers', 0, '220'],
      ];
      const $ = (s) => root.querySelector(s);
      const body = $('.body');
      const gut = $('.gut');
      const chip = $('.chip');
      const cur = $('.cur');
      const tree = $('.tree');
      let W = 300;
      let dragging = false;
      tree.innerHTML = layers.map(([k, n, ic, d, h]) => `<li><button class="ly" type="button" data-k="${k}" style="--d:${d}">${svg(IC[ic])}<span>${n}</span><em>${h}</em></button></li>`).join('');
      const lyEls = [...tree.querySelectorAll('.ly')];
      const setW = (w) => {
        const max = Math.max(260, body.offsetWidth - 300);
        W = Math.max(200, Math.min(max, Math.round(w)));
        body.style.setProperty('--w', `${W}px`);
        gut.setAttribute('aria-valuenow', W);
        chip.textContent = `${W} px`;
      };
      const select = (k) => {
        lyEls.forEach((b) => b.classList.toggle('on', b.dataset.k === k));
        root.querySelectorAll('.art [data-l]').forEach((el) => el.classList.toggle('sel', el.dataset.l === k));
      };
      tree.addEventListener('click', (e) => {
        const b = e.target.closest('.ly');
        if (b) select(b.dataset.k);
      });
      root.querySelector('.cv').addEventListener('click', (e) => {
        const el = e.target.closest('[data-l]');
        if (el) select(el.dataset.l);
      });
      gut.addEventListener('pointerdown', (e) => {
        dragging = true;
        gut.classList.add('drag');
        gut.setPointerCapture(e.pointerId);
      });
      gut.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        const o = body.getBoundingClientRect();
        const s = o.width / body.offsetWidth || 1;
        setW((e.clientX - o.left) / s - 6);
      });
      const end = () => {
        dragging = false;
        gut.classList.remove('drag');
      };
      ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((n) => gut.addEventListener(n, end));
      gut.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          e.preventDefault();
          setW(W + (e.key === 'ArrowRight' ? 24 : -24));
        }
      });
      setW(300);
      select('head');

      // Autoplay: the cursor grabs the divider and drags it right then left (the artboard scales with its pane),
      // picking a layer between drags. Any real input hands over for 4s.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !dragging;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        gut.classList.remove('auto');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        cur.classList.remove('off');
        return true;
      };
      const go = async (el, fx, fy) => {
        if (!moveTo(el, fx, fy)) cur.classList.add('off');
        await wait(820);
      };
      const tap = async (el) => {
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(140);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      const drag = (to, dur) =>
        new Promise((res) => {
          const from = W;
          let t0 = performance.now();
          let last = t0;
          cur.style.transition = 'none';
          cur.classList.add('press');
          gut.classList.add('auto');
          const fin = () => {
            cur.style.transition = '';
            cur.classList.remove('press');
            gut.classList.remove('auto');
            res();
          };
          const step = (t) => {
            if (!root.isConnected || performance.now() < userUntil) return fin();
            if (root.dataset.paused) {
              t0 += t - last;
              last = t;
              return requestAnimationFrame(step);
            }
            last = t;
            const k = Math.min(1, (t - t0) / dur);
            setW(from + (to - from) * (1 - Math.pow(1 - k, 3)));
            moveTo(gut, 0.5, 0.5);
            if (k < 1) requestAnimationFrame(step);
            else fin();
          };
          requestAnimationFrame(step);
        });
      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(1500);
        let round = 0;
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          await go(gut, 0.5, 0.5);
          if (!idle()) continue;
          await drag(round % 2 ? 330 : 470, 1300);
          await wait(1100);
          const ly = lyEls[[4, 5, 2, 3][round % 4]];
          await go(ly, 0.4, 0.5);
          if (!(await tap(ly))) continue;
          await wait(1300);
          await go(gut, 0.5, 0.5);
          if (!idle()) continue;
          await drag(round % 2 ? 470 : 230, 1300);
          await wait(1200);
          round++;
          await wait(900);
        }
      })();
    },
    prompt: `Build a design-tool screen with a resizable split view: a layers panel on the left, a canvas on the right, and a real drag handle between them. Full viewport (height: 100dvh).

Layout: a 60px top bar (logo, file name, a segmented tool group with four 36px icon buttons and an active white pill, a zoom readout, collaborator avatars, a primary Share button), then CSS grid columns var(--w, 300px) 12px minmax(0, 1fr). Left: layers panel (white) with a 50px header (title, count) and a list of 38px rows indented 18px per depth, each with a 16px icon, an ellipsized name and a muted size; the selected row is accent-soft with a ring. Middle: a 12px divider (role="separator", aria-orientation="vertical", tabindex="0", aria-valuenow and aria-valuemin) with a 4x40px grip pill that turns accent and stretches on hover or drag, plus a dark pill readout ("340 px") that fades in beside it while dragging. Right: a dotted-grid canvas with a centered artboard (container-type: inline-size, width min(80%, 470px), height 86%) whose contents are sized in cqw units so the whole design scales as the pane resizes: nav, 10.5cqw headline, subhead, a pill button and a drawn sun-and-mountain image that fills the remaining height. The selected layer outlines on the artboard (2px accent ring) with a small name label above it.

Interaction: pointerdown on the divider calls setPointerCapture, pointermove sets --w from clientX minus the container's left (clamped between 200px and container width minus 300px), pointerup/cancel/lostpointercapture release. ArrowLeft and ArrowRight resize by 24px; keep touch-action: none and a hit area wider than the visible line. Clicking a layer row or an artboard element selects both. Resizing changes the grid column on each pointer event (that is the one place a layout property is the interaction); everything else uses transform and opacity.

Accessibility: separator semantics, keyboard resize, focus rings, aria-current on the selected layer. Phone (under 760px): stack the panels (layers above, 200px, canvas below), hide the divider and the tool group. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, LayersPanel, LayerRow, Divider, Canvas, Artboard).`,
  });
})();
