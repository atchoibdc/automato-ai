(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    grip: '<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',
    type: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>',
    heading: '<path d="M6 12h12"/><path d="M6 20V4"/><path d="M18 20V4"/>',
    tasks: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
    list: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
    quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    minus: '<path d="M5 12h14"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" x2="12" y1="2" y2="15"/>',
    undo: '<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>',
    redo: '<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"/>',
    monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    tablet: '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="12" x2="12.01" y1="18" y2="18"/>',
    phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    square: '<rect width="18" height="18" x="3" y="3" rx="2"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    up: '<path d="m18 15-6-6-6 6"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    checkSq: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4"/>',
    text: '<path d="M21 6H3"/><path d="M15 12H3"/><path d="M17 18H3"/>',
    textC: '<path d="M21 6H3"/><path d="M17 12H7"/><path d="M19 18H5"/>',
    textR: '<path d="M21 6H3"/><path d="M21 12H9"/><path d="M21 18H7"/>',
    columns: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/>',
    pointer: '<path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>',
    sticky: '<path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9l7-7V5a2 2 0 0 0-2-2z"/><path d="M15 21v-6h6"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    pen: '<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
    circle: '<circle cx="12" cy="12" r="10"/>',
    crop: '<path d="M6 2v14a2 2 0 0 0 2 2h14"/><path d="M18 22V8a2 2 0 0 0-2-2H2"/>',
    sliders: '<line x1="21" x2="14" y1="4" y2="4"/><line x1="10" x2="3" y1="4" y2="4"/><line x1="21" x2="12" y1="12" y2="12"/><line x1="8" x2="3" y1="12" y2="12"/><line x1="21" x2="16" y1="20" y2="20"/><line x1="12" x2="3" y1="20" y2="20"/><line x1="14" x2="14" y1="2" y2="6"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="16" x2="16" y1="18" y2="22"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    rotate: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    sigma: '<path d="M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"/>',
    bold: '<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/>',
    italic: '<line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    present: '<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    split: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/>',
    zoom: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><path d="M8 11h6"/><path d="M11 8v6"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    btn: '<rect width="20" height="10" x="2" y="7" rx="5"/><path d="M8 12h8"/>',
    hash: '<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>',
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
  // Shared editor chrome (top bar, buttons, segmented control, inputs). Strings only.
  const ED = `
.d .app{display:flex;flex-direction:column;height:100%;background:var(--ml-surface)}
.d .bar{display:flex;flex:none;align-items:center;gap:10px;height:54px;padding:0 16px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .logo{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .ttl{font-size:14px;font-weight:600;letter-spacing:-.01em;white-space:nowrap}
.d .crumb{display:flex;align-items:center;gap:7px;min-width:0;font-size:13.5px;color:var(--ml-muted);white-space:nowrap}
.d .crumb b{overflow:hidden;font-weight:600;color:var(--ml-ink);text-overflow:ellipsis}
.d .crumb i{font-style:normal;color:var(--ml-bar)}
.d .chip{padding:3px 9px;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:11.5px;font-weight:600;color:var(--ml-muted);white-space:nowrap}
.d .sp{flex:1}
.d .ib{display:grid;flex:none;place-items:center;width:32px;height:32px;border:0;border-radius:9px;background:none;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .ib:hover{background:var(--ml-surface)}
.d .ib.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .btn{display:inline-flex;flex:none;align-items:center;gap:7px;height:34px;padding:0 13px;border:0;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease}
.d .btn:hover{background:var(--ml-surface)}
.d .btn.pri{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d button.press{transform:scale(.95)}
.d button:focus-visible,.d .inp:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .avs{display:flex}
.d .avs i{display:grid;place-items:center;width:28px;height:28px;margin-left:-7px;border-radius:50%;background:var(--ml-accent-soft);box-shadow:0 0 0 2px var(--ml-bg);font-size:10.5px;font-weight:650;font-style:normal;color:var(--ml-accent-ink)}
.d .avs i:first-child{margin-left:0}
.d .avs i:nth-child(2){background:var(--ml-accent-line)}
.d .mk{padding:4px 8px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .body{display:grid;flex:1;min-height:0}
.d .seg{position:relative;display:inline-grid;grid-auto-flow:column;grid-auto-columns:1fr;flex:none;padding:3px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg button{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;height:28px;padding:0 12px;border:0;background:none;font-size:12.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .seg button.on{color:var(--ml-ink)}
.d .seg .thumb{position:absolute;z-index:0;top:3px;bottom:3px;left:3px;width:calc((100% - 6px) / var(--n,2));border-radius:7px;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px rgba(227,233,242,.8);transform:translateX(calc(var(--i,0) * 100%));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .inp{width:100%;height:36px;padding:0 11px;border:0;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:inherit;font-size:13.5px;color:var(--ml-ink);outline:0;transition:box-shadow .2s ease,background-color .2s ease}
.d .inp:focus,.d .inp.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .tgl{position:relative;flex:none;width:38px;height:22px;padding:0;border:0;border-radius:99px;background:var(--ml-bar);cursor:pointer;transition:background-color .25s ease,transform 90ms ease-out}
.d .tgl::after{content:"";position:absolute;left:2px;top:2px;width:18px;height:18px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tgl.on{background:var(--ml-accent)}
.d .tgl.on::after{transform:translateX(16px)}`;
  // Shared range slider look (cards that have sliders).
  const RANGE = `
.d input[type=range]{-webkit-appearance:none;appearance:none;display:block;width:100%;height:20px;margin:0;background:none;cursor:pointer;--p:0%}
.d input[type=range]:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px;border-radius:6px}
.d input[type=range]::-webkit-slider-runnable-track{height:4px;border-radius:99px;background:linear-gradient(90deg,var(--ml-accent) var(--p),var(--ml-bar) var(--p))}
.d input[type=range]::-moz-range-track{height:4px;border-radius:99px;background:linear-gradient(90deg,var(--ml-accent) var(--p),var(--ml-bar) var(--p))}
.d input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;margin-top:-6px;border:0;border-radius:50%;background:#fff;box-shadow:0 0 0 1px var(--ml-line),0 2px 5px rgba(35,15,10,.28)}
.d input[type=range]::-moz-range-thumb{width:16px;height:16px;border:0;border-radius:50%;background:#fff;box-shadow:0 0 0 1px var(--ml-line),0 2px 5px rgba(35,15,10,.28)}`;

  // ---------------------------------------------------------------- 1. block doc editor
  ML.add({
    id: 'app-editors-doc',
    cat: 'app-editors',
    title: 'Block doc editor',
    sub: 'Type / and a block drops in',
    html: `
<div class="app">
  <header class="bar">
    <span class="logo">${I(P.file, 16)}</span>
    <p class="crumb">Solace Studio<i>/</i>Launch<i>/</i><b>Q4 launch plan</b></p>
    <span class="sp"></span>
    <span class="saved"><u></u>Saved</span>
    <span class="avs" aria-label="Collaborators"><i>PN</i><i>DO</i><i>+2</i></span>
    <button class="btn pri" type="button">${I(P.share, 15)}Share</button>
  </header>
  <div class="body">
    <aside class="tree" aria-label="Pages">
      <label class="find">${I(P.search, 15)}<span>Search pages</span></label>
      <p class="mk">Launch</p>
      <span class="pg on">${I(P.file, 16)}Q4 launch plan</span>
      <span class="pg">${I(P.file, 16)}Brand voice guide</span>
      <span class="pg">${I(P.file, 16)}Content calendar</span>
      <span class="pg">${I(P.file, 16)}Webinar run sheet</span>
      <p class="mk">Team</p>
      <span class="pg">${I(P.file, 16)}Retro notes</span>
      <span class="pg">${I(P.file, 16)}Hiring plan</span>
      <span class="pg add">${I(P.plus, 16)}New page</span>
    </aside>
    <main class="doc">
      <div class="page">
        <h1 class="dt">Q4 launch plan</h1>
        <p class="meta"><span class="av">PN</span>Edited by Priya Nair 4 minutes ago<i></i>3 min read</p>
        <div class="blocks"></div>
        <div class="menu" role="listbox" aria-label="Insert block"></div>
      </div>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `${ED}
.d .body{grid-template-columns:232px minmax(0,1fr)}
.d .saved{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;color:var(--ml-muted)}
.d .saved u{width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .tree{display:flex;flex-direction:column;gap:2px;min-height:0;padding:14px 12px;background:var(--ml-bg);border-right:1px solid var(--ml-line);overflow:hidden}
.d .find{display:flex;align-items:center;gap:8px;height:34px;margin-bottom:10px;padding:0 10px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;color:var(--ml-muted)}
.d .tree .mk{padding-top:12px}
.d .pg{display:flex;align-items:center;gap:9px;height:34px;padding:0 9px;border-radius:9px;font-size:13.5px;color:var(--ml-ink-2);white-space:nowrap}
.d .pg svg{flex:none;color:var(--ml-muted)}
.d .pg.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-weight:600}
.d .pg.on svg{color:var(--ml-accent)}
.d .pg.add{margin-top:6px;color:var(--ml-muted)}
.d .doc{min-width:0;min-height:0;overflow-y:auto;scrollbar-width:thin;background:var(--ml-bg)}
.d .page{position:relative;max-width:800px;min-height:100%;margin:0 auto;padding:44px 36px 96px 84px}
.d .dt{font-size:36px;line-height:1.12;font-weight:650;letter-spacing:-.035em}
.d .meta{display:flex;align-items:center;gap:8px;margin:12px 0 22px;font-size:13px;color:var(--ml-muted)}
.d .meta .av{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--ml-accent-soft);font-size:9.5px;font-weight:650;color:var(--ml-accent-ink)}
.d .meta i{width:3px;height:3px;border-radius:50%;background:var(--ml-bar)}
.d .blocks{display:flex;flex-direction:column}
.d .blk{position:relative;padding:3px 0;border-radius:8px}
.d .blk[data-t=hr]{padding:10px 0}
.d .blk.act{background:rgba(244,247,252,.85)}
.d .blk.new{animation:ed-doc-in 520ms var(--ml-spring) both}
.d .blk.moving{z-index:4;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);cursor:grabbing}
.d .hd{position:absolute;left:-64px;top:5px;display:flex;gap:2px;opacity:0;transition:opacity .2s ease}
.d .blk:hover .hd,.d .blk.act .hd,.d .blk.moving .hd{opacity:1}
.d .hd button{display:grid;place-items:center;width:26px;height:28px;border:0;border-radius:7px;background:none;color:var(--ml-muted);cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .hd button:hover{background:var(--ml-surface);color:var(--ml-ink-2)}
.d .hd .gp{cursor:grab;touch-action:none}
.d .bc{display:flex;align-items:flex-start;gap:12px;font-size:16px;line-height:1.65;color:var(--ml-ink-2)}
.d .bc.h{margin-top:14px;font-size:24px;line-height:1.3;font-weight:650;letter-spacing:-.025em;color:var(--ml-ink)}
.d .tx{display:block;flex:1;min-width:0;outline:0}
.d .tx:empty::before{content:attr(data-ph);color:#A1A1A6}
.d .blk.typing .tx:empty::before{content:""}
.d .blk.typing .tx::after{content:"";display:inline-block;width:2px;height:1.15em;margin-left:1px;vertical-align:-.2em;background:var(--ml-accent);animation:ed-doc-blink 1s steps(1) infinite}
.d .cb{display:grid;flex:none;place-items:center;width:20px;height:20px;margin-top:3px;border:0;border-radius:6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;cursor:pointer;transition:background-color .2s ease,box-shadow .2s ease}
.d .cb svg{opacity:0;transform:scale(.6);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .done .cb{background:var(--ml-accent);box-shadow:none}
.d .done .cb svg{opacity:1;transform:none}
.d .bc.todo.done .tx{color:var(--ml-muted);text-decoration:line-through}
.d .bc .dot{flex:none;width:6px;height:6px;margin:12px 6px 0;border-radius:50%;background:var(--ml-ink-2)}
.d .bc.quote{padding:6px 0;font-size:19px;font-style:italic;color:var(--ml-ink)}
.d .qm{flex:none;margin-top:5px;color:var(--ml-accent-line)}
.d .bc.co{align-items:flex-start;padding:14px 16px;border-radius:14px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .ci{flex:none;margin-top:3px;color:var(--ml-accent)}
.d hr.bc{display:block;height:1px;border:0;background:var(--ml-line)}
.d .menu{position:absolute;z-index:6;left:84px;width:292px;padding:6px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg);opacity:0;transform:translateY(-6px) scale(.98);transform-origin:0 0;pointer-events:none;transition:opacity .18s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .menu.on{opacity:1;transform:none;pointer-events:auto}
.d .mi{display:flex;align-items:center;gap:11px;width:100%;height:44px;padding:0 8px;border:0;border-radius:9px;background:none;text-align:left;cursor:pointer;transition:background-color .15s ease}
.d .mi .ic{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:8px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2)}
.d .mi b{display:block;font-size:13.5px;font-weight:600;color:var(--ml-ink)}
.d .mi small{display:block;font-size:12px;color:var(--ml-muted)}
.d .mi.on{background:var(--ml-accent-soft)}
.d .mi.on .ic{background:var(--ml-bg);color:var(--ml-accent)}
.d .menu .none{padding:12px 10px;font-size:13px;color:var(--ml-muted)}
@keyframes ed-doc-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes ed-doc-blink{50%{opacity:0}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .tree,.d .saved,.d .avs,.d .hd{display:none}
  .d .page{padding:28px 18px 80px}
  .d .dt{font-size:28px}
  .d .menu{left:18px;width:calc(100% - 36px)}
  .d .btn.pri{padding:0 11px}
}
@media (prefers-reduced-motion: reduce){.d .blk.typing .tx::after{animation:none}}`,
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
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const scale = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const to = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = scale();
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !to(el, fx, fy));
        await wait(760);
        return idle();
      };
      const tap = async (el, fn) => {
        cur.classList.add('press');
        el && el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el && el.classList.remove('press');
        if (fn) fn();
      };

      const svg = (d, s = 16, w = 2) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = {
        p: '<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>',
        h: '<path d="M6 12h12"/><path d="M6 20V4"/><path d="M18 20V4"/>',
        todo: '<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/>',
        bul: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
        quote: '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
        co: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
        hr: '<path d="M5 12h14"/>',
        check: '<path d="M20 6 9 17l-5-5"/>',
        plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
        grip: '<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',
      };
      const TYPES = [['p', 'Text', 'Plain paragraph'], ['h', 'Heading', 'Big section title'], ['todo', 'To-do list', 'Track tasks'], ['bul', 'Bulleted list', 'Simple list'], ['quote', 'Quote', 'Pull a line out'], ['co', 'Callout', 'Highlight a note'], ['hr', 'Divider', 'Split sections']];
      const PH = { p: 'Write something', h: 'Heading', todo: 'To-do', bul: 'List item', quote: 'Quote', co: 'Callout', dr: 'Type / for blocks' };
      const doc = $('.doc');
      const page = $('.page');
      const blocks = $('.blocks');
      const menu = $('.menu');
      const mk = (t, txt = '', fresh = false, done = false) => {
        const e = document.createElement('div');
        e.className = `blk${fresh ? ' new' : ''}${t === 'dr' ? ' dr' : ''}`;
        e.dataset.t = t;
        let inner;
        if (t === 'hr') inner = '<hr class="bc">';
        else {
          const k = t === 'dr' ? 'p' : t;
          const lead = k === 'todo' ? `<button class="cb" type="button" aria-label="Toggle done">${svg(IC.check, 12, 3)}</button>` : k === 'bul' ? '<i class="dot"></i>' : k === 'co' ? `<span class="ci">${svg(IC.co, 17)}</span>` : k === 'quote' ? `<span class="qm">${svg(IC.quote, 18)}</span>` : '';
          inner = `<div class="bc ${k}${done ? ' done' : ''}">${lead}<span class="tx" contenteditable="true" spellcheck="false" data-ph="${PH[t]}"></span></div>`;
        }
        e.innerHTML = `<span class="hd"><button type="button" class="pl" aria-label="Add block">${svg(IC.plus, 15)}</button><button type="button" class="gp" aria-label="Drag to reorder">${svg(IC.grip, 15)}</button></span>${inner}`;
        const x = e.querySelector('.tx');
        if (x) x.textContent = txt;
        return e;
      };
      [['h', 'Goals for the quarter'], ['p', 'Ship the new onboarding flow and lift trial-to-paid conversion from 18% to 24% by 18 December.'], ['todo', 'Finalize pricing page copy', 1], ['todo', 'Review onboarding emails with Hana'], ['todo', 'Book the launch webinar for Thu 5 November'], ['dr', ''], ['h', 'Channels'], ['bul', 'Email: a three-part welcome sequence'], ['bul', 'Webinar on Thu 5 November at 11:00'], ['bul', 'Social: Brightline and Kestrel case studies'], ['bul', 'Referral: invite five partner studios'], ['quote', 'Ship the small thing first, then the big one.'], ['p', 'Owner: Priya Nair. We review progress every Friday at 10:00.']].forEach(([t, x, d]) => blocks.append(mk(t, x, false, !!d)));
      const snap = blocks.innerHTML;

      let open = false;
      let idx = 0;
      let list = TYPES;
      const draft = () => blocks.querySelector('.dr');
      const drawMenu = () => {
        menu.innerHTML = list.map(([k, n, h], i) => `<button type="button" class="mi${i === idx ? ' on' : ''}" role="option" data-k="${k}"><span class="ic">${svg(IC[k])}</span><span><b>${n}</b><small>${h}</small></span></button>`).join('') || '<p class="none">No blocks match</p>';
      };
      const close = () => {
        open = false;
        menu.classList.remove('on');
      };
      const onInput = () => {
        const d = draft();
        if (!d) return;
        const t = d.querySelector('.tx').textContent;
        if (!t.startsWith('/')) return close();
        list = TYPES.filter((x) => x[1].toLowerCase().includes(t.slice(1).toLowerCase()));
        idx = 0;
        open = true;
        drawMenu();
        const top = d.offsetTop + d.offsetHeight + 4;
        menu.style.top = `${top}px`;
        menu.classList.add('on');
        const bottom = top + Math.max(list.length, 1) * 44 + 24;
        if (bottom > doc.scrollTop + doc.clientHeight) doc.scrollTo({ top: bottom - doc.clientHeight + 16, behavior: 'smooth' });
      };
      const pick = (k) => {
        const d = draft();
        close();
        const n = mk(k, '', true);
        d.replaceWith(n);
        n.after(mk('dr', '', true));
        return n;
      };
      const realPick = (k) => {
        const n = pick(k);
        (n.querySelector('.tx') || draft().querySelector('.tx')).focus({ preventScroll: true });
      };
      blocks.addEventListener('input', (e) => e.target.closest('.dr') && onInput());
      blocks.addEventListener('keydown', (e) => {
        const dr = e.target.closest('.dr');
        if (open && dr) {
          if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            idx = (idx + (e.key === 'ArrowDown' ? 1 : -1) + list.length) % list.length;
            drawMenu();
          } else if (e.key === 'Enter') {
            e.preventDefault();
            if (list[idx]) realPick(list[idx][0]);
          } else if (e.key === 'Escape') close();
          return;
        }
        if (e.key === 'Enter' && e.target.classList.contains('tx')) {
          e.preventDefault();
          if (dr && e.target.textContent.trim()) {
            const np = mk('p', e.target.textContent.trim(), true);
            dr.replaceWith(np);
            np.after(mk('dr', '', true));
          }
          draft().querySelector('.tx').focus({ preventScroll: true });
        }
      });
      blocks.addEventListener('click', (e) => {
        const cb = e.target.closest('.cb');
        if (cb) cb.closest('.bc').classList.toggle('done');
        const pl = e.target.closest('.pl');
        if (pl) draft().querySelector('.tx').focus({ preventScroll: true });
      });
      menu.addEventListener('pointerdown', (e) => {
        const b = e.target.closest('.mi');
        if (!b) return;
        e.preventDefault();
        realPick(b.dataset.k);
      });
      // drag handle: the block follows the pointer, drops where its centre lands, and settles with a FLIP
      blocks.addEventListener('pointerdown', (e) => {
        const g = e.target.closest('.gp');
        if (!g) return;
        const blk = g.closest('.blk');
        if (blk.classList.contains('dr')) return;
        e.preventDefault();
        g.setPointerCapture(e.pointerId);
        const y0 = e.clientY;
        blk.classList.add('moving');
        const mv = (ev) => (blk.style.transform = `translateY(${(ev.clientY - y0) / scale()}px)`);
        const up = () => {
          g.removeEventListener('pointermove', mv);
          g.removeEventListener('pointerup', up);
          const cy = blk.getBoundingClientRect().top + blk.offsetHeight * scale() / 2;
          const before = blk.getBoundingClientRect().top;
          const others = [...blocks.children].filter((n) => n !== blk && !n.classList.contains('dr'));
          const after = others.find((n) => {
            const r = n.getBoundingClientRect();
            return cy < r.top + r.height / 2;
          });
          blk.style.transform = '';
          blk.classList.remove('moving');
          blocks.insertBefore(blk, after || null);
          const dy = (before - blk.getBoundingClientRect().top) / scale();
          blk.animate([{ transform: `translateY(${dy}px)` }, { transform: 'none' }], { duration: 420, easing: 'cubic-bezier(.32,.72,0,1)' });
        };
        g.addEventListener('pointermove', mv);
        g.addEventListener('pointerup', up);
      });

      const typeIn = async (blk, text) => {
        blk.classList.add('typing');
        const x = blk.querySelector('.tx');
        for (const ch of text) {
          if (!idle()) return false;
          x.textContent += ch;
          if (blk.classList.contains('dr')) onInput();
          await wait(55 + Math.random() * 55);
        }
        return true;
      };
      cur.style.transform = 'translate(720px,520px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          close();
          blocks.innerHTML = snap;
          doc.scrollTo({ top: 0 });
          const flow = async () => {
            let d = draft();
            if (!(await aim(d.querySelector('.tx'), 0.1, 0.5))) return;
            await tap();
            if (!(await typeIn(d, '/'))) return;
            await wait(650);
            if (!(await typeIn(d, 'ca'))) return;
            await wait(750);
            if (!idle()) return;
            const co = pick(list[idx][0]);
            d.classList.remove('typing');
            if (!(await aim(co.querySelector('.tx'), 0.3, 0.5))) return;
            await tap();
            if (!(await typeIn(co, 'Launch moves to Thu 5 Nov after the legal review.'))) return;
            co.classList.remove('typing');
            await wait(700);
            d = draft();
            if (!(await aim(d.querySelector('.tx'), 0.1, 0.5))) return;
            await tap();
            if (!(await typeIn(d, '/'))) return;
            await wait(500);
            const it = menu.querySelector('[data-k="todo"]');
            if (!(await aim(it, 0.4, 0.5))) return;
            await tap(it, () => pick('todo'));
            d.classList.remove('typing');
            const nt = [...blocks.querySelectorAll('.blk[data-t=todo]')].pop();
            await wait(300);
            if (!(await typeIn(nt, 'Send the recap to the team'))) return;
            nt.classList.remove('typing');
            await wait(600);
            co.classList.add('act');
            if (!(await aim(co.querySelector('.gp'), 0.5, 0.5))) return;
            await tap();
            await wait(1600);
            co.classList.remove('act');
          };
          await flow();
          blocks.querySelectorAll('.typing,.act').forEach((n) => n.classList.remove('typing', 'act'));
          await wait(2000);
        }
      })();
    },
    prompt: `Build a block-based document editor screen (Notion style), full viewport (height: 100dvh): a page tree on the left, one centered document column on the right. The shell does not scroll; only the document column scrolls.

Layout: CSS grid, columns 232px and minmax(0, 1fr), under a 54px top bar (small logo tile, breadcrumb "Workspace / Folder / Page title", a green "Saved" dot, a collaborator avatar stack, a primary Share button). The left rail is white with a 1px hairline: a search field, small uppercase section labels and page rows 34px tall with a file icon; the open page sits on a pale accent pill. The document column is white, max-width 800px, centered, with 84px of left padding so the block handles have a gutter. It has a 36px bold title, a meta line (avatar, "Edited by Priya Nair 4 minutes ago", reading time) and a stack of blocks: a 24px heading, a paragraph, three to-dos (one checked and struck through), then an empty trailing block with the placeholder Type "/" for blocks.

Blocks: every block is a contenteditable element inside a wrapper. On hover (or when active) a handle group fades in at the left: a plus button and a six-dot grip. Dragging the grip moves the block with transform: translateY following the pointer, then drops where its centre lands and settles with a FLIP animation (420ms, cubic-bezier(.32,.72,0,1)). To-do checkboxes are 20px with a check that pops in with a slight overshoot.

Slash menu: typing "/" in the empty block opens a 292px popover under it (opacity and translateY(-6px) scale(.98) to none over 587ms with a critically damped spring). It lists Text, Heading, To-do list, Bulleted list, Quote, Callout and Divider, each with a 30px icon tile, a name and a one-line hint. Text after the slash filters the list, ArrowUp and ArrowDown move the highlight, Enter inserts, Escape closes. Inserting replaces the empty block with the chosen type (a callout is a pale accent panel with an info icon, a quote has a large quote glyph, never a coloured left border), the new block animates in (opacity, translateY(8px)), focus moves into it and a fresh empty block is appended.

Accessibility: the menu is role="listbox" with role="option" items, handles have aria-labels, focus-visible rings, prefers-reduced-motion stops the caret blink. Below 760px hide the page tree and the handles, drop the left padding to 18px and make the menu full width. Plain HTML, CSS and JS, no libraries; React-friendly structure (PageTree, TopBar, Document, Block, SlashMenu). Use your accent color for the active page, the checkbox and the callout.`,
  });

  // ---------------------------------------------------------------- 2. form builder
  const FB_TYPES = [
    ['text', 'Short text', P.type],
    ['email', 'Email', P.mail],
    ['select', 'Dropdown', P.chevD],
    ['date', 'Date', P.cal],
    ['rating', 'Rating', P.star],
    ['file', 'File upload', P.upload],
    ['check', 'Checkbox', P.checkSq],
    ['long', 'Long text', P.text],
  ];
  ML.add({
    id: 'app-editors-form',
    cat: 'app-editors',
    title: 'Form builder',
    sub: 'Drag a field in, edit its label live',
    html: `
<div class="app">
  <header class="bar">
    <span class="logo">${I(P.file, 16)}</span>
    <p class="crumb">Forms<i>/</i><b>Consult intake</b></p>
    <span class="chip">Draft</span>
    <span class="sp"></span>
    <div class="seg tabs" style="--n:3;--i:0" role="tablist"><span class="thumb" aria-hidden="true"></span><button type="button" class="on" role="tab">Build</button><button type="button" role="tab">Logic</button><button type="button" role="tab">Share</button></div>
    <span class="sp"></span>
    <button class="btn" type="button">${I(P.eye, 15)}Preview</button>
    <button class="btn pri" type="button">Publish</button>
  </header>
  <div class="body">
    <aside class="pal" aria-label="Field types">
      <p class="mk">Fields</p>
      <div class="chips">${FB_TYPES.map(([k, n, d]) => `<button class="fc" type="button" data-t="${k}"><span class="gi">${I(d, 15)}</span>${n}<span class="gr">${I(P.grip, 15)}</span></button>`).join('')}</div>
      <p class="hint">Drag a field onto the form, or click it to add at the end.</p>
    </aside>
    <main class="cv">
      <div class="sheet">
        <h2>Book a consult</h2>
        <p class="fd">Tell us about your project and we reply within one working day.</p>
        <div class="fw"><div class="fields"></div><span class="dl" aria-hidden="true"></span></div>
        <button class="sub" type="button">Send request</button>
      </div>
    </main>
    <aside class="props" aria-label="Field settings">
      <div class="ph"><span class="ti"></span><div><p class="k">Field settings</p><b class="pt"></b></div></div>
      <label class="fl" for="ml-fb-label">Label</label><input class="inp" id="ml-fb-label" autocomplete="off">
      <label class="fl" for="ml-fb-ph">Placeholder</label><input class="inp" id="ml-fb-ph" autocomplete="off">
      <label class="fl" for="ml-fb-help">Help text</label><input class="inp" id="ml-fb-help" autocomplete="off" placeholder="Optional hint under the field">
      <div class="rw"><div><b>Required</b><small>Respondents must answer</small></div><button class="tgl req" type="button" role="switch" aria-checked="false" aria-label="Required"></button></div>
      <p class="fl">Width</p>
      <div class="seg wd" style="--n:2;--i:0"><span class="thumb" aria-hidden="true"></span><button type="button" class="on" data-w="half">Half</button><button type="button" data-w="full">Full</button></div>
      <button class="btn del" type="button">${I(P.trash, 15)}Delete field</button>
    </aside>
  </div>
  <div class="gh" aria-hidden="true"></div>
  ${CURSOR}
</div>`,
    css: `${ED}
.d .body{grid-template-columns:232px minmax(0,1fr) 296px}
.d .pal{display:flex;flex-direction:column;min-height:0;padding:14px 12px;background:var(--ml-bg);border-right:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:thin}
.d .chips{display:flex;flex-direction:column;gap:6px}
.d .fc{display:flex;align-items:center;gap:10px;height:42px;padding:0 10px;border:0;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);font-size:13.5px;font-weight:550;color:var(--ml-ink);text-align:left;cursor:grab;touch-action:none;transition:box-shadow .2s ease,transform 90ms ease-out}
.d .fc:hover{box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow)}
.d .gi{display:grid;flex:none;place-items:center;width:26px;height:26px;border-radius:8px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .gr{margin-left:auto;color:var(--ml-bar)}
.d .hint{margin-top:auto;padding:12px;border-radius:12px;background:var(--ml-surface);font-size:12.5px;line-height:1.5;color:var(--ml-muted)}
.d .cv{min-width:0;min-height:0;padding:24px 28px;overflow-y:auto;scrollbar-width:thin;background-image:radial-gradient(var(--ml-bar) 1px,transparent 1.2px);background-size:22px 22px}
.d .sheet{display:flex;flex-direction:column;max-width:660px;min-height:100%;margin:0 auto;padding:30px 36px 28px;border-radius:20px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .sheet h2{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d .fd{margin:6px 0 20px;font-size:14px;color:var(--ml-muted)}
.d .fw{position:relative;margin-bottom:26px}
.d .fields{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px 14px}
.d .fld{position:relative;grid-column:span 1;margin:0 -12px;padding:10px 12px 12px;border-radius:13px;cursor:pointer;transition:box-shadow .2s ease,background-color .2s ease}
.d .fld.full{grid-column:1 / -1}
.d .fld:hover{background:var(--ml-surface)}
.d .fld.sel{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .fld.fresh{animation:ed-fb-in 520ms var(--ml-bounce) both}
.d .ftag{position:absolute;left:12px;top:-11px;display:flex;align-items:center;gap:4px;height:20px;padding:0 8px 0 4px;border-radius:7px;background:var(--ml-accent);color:#fff;font-size:11px;font-weight:600;opacity:0;transform:translateY(4px);transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .fld.sel .ftag{opacity:1;transform:none}
.d .lb{display:flex;gap:3px;font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .lb em{font-style:normal;color:#D70015}
.d .ctl{display:flex;align-items:center;justify-content:space-between;gap:8px;height:42px;margin-top:7px;padding:0 13px;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:14px;color:#98989D}
.d .fld.sel .ctl{background:var(--ml-surface)}
.d .ctl.tall{height:92px;align-items:flex-start;padding-top:12px}
.d .ctl.up{justify-content:center;gap:9px;box-shadow:none;border:1.5px dashed var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .ctl.chk{justify-content:flex-start;gap:10px;color:var(--ml-ink-2)}
.d .ctl.chk i{flex:none;width:18px;height:18px;border-radius:5px;box-shadow:inset 0 0 0 1.5px var(--ml-bar)}
.d .stars{display:flex;gap:6px;margin-top:9px;color:var(--ml-accent-line)}
.d .stars .f{fill:var(--ml-accent);color:var(--ml-accent)}
.d .hp{margin-top:6px;font-size:12.5px;color:var(--ml-muted)}
.d .hp:empty{display:none}
.d .dl{position:absolute;left:-12px;right:-12px;top:0;height:3px;border-radius:99px;background:var(--ml-accent);box-shadow:0 0 0 3px var(--ml-accent-soft);opacity:0;pointer-events:none;transition:transform .35s var(--ml-ease),opacity .2s ease}
.d .dl.on{opacity:1}
.d .sub{align-self:flex-start;margin-top:auto;height:44px;padding:0 24px;border:0;border-radius:12px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22);font-size:14.5px;font-weight:600;cursor:default}
.d .props{display:flex;flex-direction:column;min-height:0;padding:16px;background:var(--ml-bg);border-left:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:thin}
.d .ph{display:flex;align-items:center;gap:11px;padding-bottom:6px}
.d .ti{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ph .k{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .ph b{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .fl{display:block;margin:16px 0 7px;font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .rw{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:18px;padding:12px 14px;border-radius:12px;background:var(--ml-surface)}
.d .rw b{display:block;font-size:13.5px;font-weight:600}
.d .rw small{font-size:12px;color:var(--ml-muted)}
.d .seg.wd{width:100%}
.d .del{justify-content:center;margin-top:auto;color:#D70015}
.d .gh{position:absolute;left:0;top:0;z-index:40;display:flex;align-items:center;gap:10px;height:42px;padding:0 14px 0 10px;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),var(--ml-shadow-lg);font-size:13.5px;font-weight:550;white-space:nowrap;opacity:0;pointer-events:none;transition:transform 780ms var(--ml-ease),opacity .2s ease}
.d .gh.on{opacity:1}
.d .gh.live{transition:opacity .2s ease}
@keyframes ed-fb-in{0%{opacity:0;transform:translateY(-10px) scale(.97)}100%{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .pal,.d .props,.d .tabs,.d .chip,.d .bar .btn:not(.pri){display:none}
  .d .cv{padding:16px}
  .d .sheet{padding:22px 20px}
  .d .fields{grid-template-columns:minmax(0,1fr)}
  .d .fld.full,.d .fld{grid-column:1 / -1}
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
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const scale = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const pos = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return null;
        const o = root.getBoundingClientRect();
        const s = scale();
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const to = (el, fx, fy) => {
        const p = pos(el, fx, fy);
        if (p) cur.style.transform = `translate(${p[0]}px,${p[1]}px)`;
        return !!p;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !to(el, fx, fy));
        await wait(760);
        return idle();
      };
      const tap = async (el, fn) => {
        cur.classList.add('press');
        el && el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el && el.classList.remove('press');
        if (fn) fn();
      };
      const typeInto = async (el, text) => {
        el.classList.add('is-auto');
        el.value = '';
        el.dispatchEvent(new Event('input', { bubbles: true }));
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(55 + Math.random() * 50);
        }
        el.classList.remove('is-auto');
        return true;
      };

      const svg = (d, s = 16, w = 2) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = {
        chev: '<path d="m6 9 6 6 6-6"/>',
        cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
        star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
        up: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
        grip: '<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>',
      };
      const FT = {
        text: ['Short text', 'Type your answer', 'half'],
        email: ['Email', 'you@company.com', 'half'],
        select: ['Dropdown', 'Choose an option', 'full'],
        date: ['Date', 'Pick a date', 'half'],
        rating: ['Rating', '', 'full'],
        file: ['File upload', 'Drop a file or browse', 'full'],
        check: ['Checkbox', 'Yes, email me updates', 'full'],
        long: ['Long text', 'Tell us more', 'full'],
      };
      const fields = [
        { id: 1, t: 'text', label: 'Full name', ph: 'Maya Reyes', help: '', req: 1, w: 'half' },
        { id: 2, t: 'email', label: 'Work email', ph: 'maya@northgate.co', help: '', req: 1, w: 'half' },
        { id: 3, t: 'text', label: 'Company', ph: 'Northgate', help: '', req: 0, w: 'half' },
        { id: 4, t: 'date', label: 'Ideal start date', ph: 'Mon 2 November', help: '', req: 0, w: 'half' },
        { id: 5, t: 'long', label: 'What do you need help with?', ph: 'Tell us more', help: 'A few sentences is plenty.', req: 0, w: 'full' },
        { id: 6, t: 'check', label: 'Updates', ph: 'Yes, email me project updates', help: '', req: 0, w: 'full' },
      ];
      let uid = 10;
      let sel = 1;
      const box = $('.fields');
      const dl = $('.dl');
      const gh = $('.gh');
      const lab = $('#ml-fb-label');
      const phi = $('#ml-fb-ph');
      const help = $('#ml-fb-help');
      const req = $('.req');
      const wd = $('.wd');
      const ctl = (f) => {
        if (f.t === 'rating') return `<div class="stars">${[0, 1, 2, 3, 4].map((i) => svg(IC.star, 20).replace('<svg', i < 4 ? '<svg class="f"' : '<svg')).join('')}</div>`;
        if (f.t === 'file') return `<div class="ctl up">${svg(IC.up, 16)}<span class="pv">${f.ph}</span></div>`;
        if (f.t === 'check') return `<div class="ctl chk"><i></i><span class="pv">${f.ph}</span></div>`;
        const ic = f.t === 'select' ? svg(IC.chev, 16) : f.t === 'date' ? svg(IC.cal, 16) : '';
        return `<div class="ctl${f.t === 'long' ? ' tall' : ''}"><span class="pv">${f.ph}</span>${ic}</div>`;
      };
      const draw = () => {
        box.innerHTML = fields
          .map((f) => `<div class="fld ${f.w}${f.id === sel ? ' sel' : ''}${f.fresh ? ' fresh' : ''}" data-id="${f.id}"><span class="ftag">${svg(IC.grip, 13)}${FT[f.t][0]}</span><label class="lb"><span class="lt">${f.label}</span><em>${f.req ? '*' : ''}</em></label>${ctl(f)}<p class="hp">${f.help}</p></div>`)
          .join('');
        fields.forEach((f) => delete f.fresh);
      };
      const flip = (fn) => {
        const before = new Map([...box.children].map((n) => [n.dataset.id, [n.offsetLeft, n.offsetTop]]));
        fn();
        [...box.children].forEach((n) => {
          const b = before.get(n.dataset.id);
          if (!b) return;
          const dx = (b[0] - n.offsetLeft) / 1;
          const dy = b[1] - n.offsetTop;
          if (dx || dy) n.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 480, easing: 'cubic-bezier(.32,.72,0,1)' });
        });
      };
      const cur_f = () => fields.find((f) => f.id === sel) || fields[0];
      const syncProps = () => {
        const f = cur_f();
        const chip = root.querySelector(`.fc[data-t="${f.t}"] .gi`);
        $('.ti').innerHTML = chip ? chip.innerHTML : '';
        $('.pt').textContent = FT[f.t][0];
        lab.value = f.label;
        phi.value = f.ph;
        help.value = f.help;
        phi.disabled = f.t === 'rating';
        req.classList.toggle('on', !!f.req);
        req.setAttribute('aria-checked', String(!!f.req));
        wd.style.setProperty('--i', f.w === 'full' ? 1 : 0);
        wd.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.dataset.w === f.w));
      };
      const select = (id) => {
        sel = id;
        [...box.children].forEach((n) => n.classList.toggle('sel', +n.dataset.id === id));
        syncProps();
      };
      const add = (t, idx) => {
        const f = { id: ++uid, t, label: FT[t][0], ph: FT[t][1], help: '', req: 0, w: FT[t][2], fresh: 1 };
        sel = f.id;
        flip(() => {
          fields.splice(idx, 0, f);
          draw();
        });
        syncProps();
        return f;
      };
      const field = (id) => box.querySelector(`[data-id="${id}"]`);
      box.addEventListener('click', (e) => {
        const n = e.target.closest('.fld');
        if (n) select(+n.dataset.id);
      });
      lab.addEventListener('input', () => {
        const f = cur_f();
        f.label = lab.value;
        const n = field(f.id);
        if (n) n.querySelector('.lt').textContent = f.label;
      });
      phi.addEventListener('input', () => {
        const f = cur_f();
        f.ph = phi.value;
        const n = field(f.id);
        const pv = n && n.querySelector('.pv');
        if (pv) pv.textContent = f.ph;
      });
      help.addEventListener('input', () => {
        const f = cur_f();
        f.help = help.value;
        const n = field(f.id);
        if (n) n.querySelector('.hp').textContent = f.help;
      });
      req.addEventListener('click', () => {
        const f = cur_f();
        f.req = f.req ? 0 : 1;
        req.classList.toggle('on', !!f.req);
        req.setAttribute('aria-checked', String(!!f.req));
        const n = field(f.id);
        if (n) n.querySelector('em').textContent = f.req ? '*' : '';
      });
      wd.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        const f = cur_f();
        flip(() => {
          f.w = b.dataset.w;
          const n = field(f.id);
          if (n) {
            n.classList.remove('half', 'full');
            n.classList.add(f.w);
          }
        });
        syncProps();
      });
      $('.del').addEventListener('click', () => {
        if (fields.length < 2) return;
        const i = fields.findIndex((f) => f.id === sel);
        flip(() => {
          fields.splice(i, 1);
          sel = fields[Math.max(0, i - 1)].id;
          draw();
        });
        syncProps();
      });
      root.querySelectorAll('.tabs button').forEach((b, i) =>
        b.addEventListener('click', () => {
          $('.tabs').style.setProperty('--i', i);
          root.querySelectorAll('.tabs button').forEach((x) => x.classList.toggle('on', x === b));
        }),
      );
      draw();
      syncProps();

      // where would a field dropped at this client Y land, and show the insertion line there
      const dropIndex = (cy) => {
        const kids = [...box.children];
        const i = kids.findIndex((n) => {
          const r = n.getBoundingClientRect();
          return cy < r.top + r.height / 2;
        });
        return i < 0 ? kids.length : i;
      };
      const showLine = (i) => {
        const kids = [...box.children];
        const top = i < kids.length ? kids[i].offsetTop - 5 : kids[kids.length - 1].offsetTop + kids[kids.length - 1].offsetHeight + 1;
        dl.style.transform = `translateY(${top}px)`;
        dl.classList.add('on');
      };
      const ghostFor = (chip) => {
        gh.innerHTML = chip.innerHTML;
        gh.querySelector('.gr').remove();
      };
      // real pointer drag from the palette (a click without movement adds at the end)
      root.querySelectorAll('.fc').forEach((chip) => {
        chip.addEventListener('pointerdown', (e) => {
          chip.setPointerCapture(e.pointerId);
          const x0 = e.clientX;
          const y0 = e.clientY;
          let moved = false;
          const mv = (ev) => {
            if (!moved && Math.hypot(ev.clientX - x0, ev.clientY - y0) < 5) return;
            if (!moved) {
              moved = true;
              ghostFor(chip);
              gh.classList.add('on', 'live');
            }
            const o = root.getBoundingClientRect();
            const s = scale();
            gh.style.transform = `translate(${(ev.clientX - o.left) / s + 8}px,${(ev.clientY - o.top) / s + 8}px)`;
            const c = $('.cv').getBoundingClientRect();
            const over = ev.clientX > c.left && ev.clientX < c.right && ev.clientY > c.top && ev.clientY < c.bottom;
            if (over) showLine(dropIndex(ev.clientY));
            else dl.classList.remove('on');
          };
          const up = (ev) => {
            chip.removeEventListener('pointermove', mv);
            chip.removeEventListener('pointerup', up);
            gh.classList.remove('on', 'live');
            dl.classList.remove('on');
            if (!moved) return void add(chip.dataset.t, fields.length);
            const c = $('.cv').getBoundingClientRect();
            if (ev.clientX > c.left && ev.clientX < c.right && ev.clientY > c.top && ev.clientY < c.bottom) add(chip.dataset.t, dropIndex(ev.clientY));
          };
          chip.addEventListener('pointermove', mv);
          chip.addEventListener('pointerup', up);
        });
      });

      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const flow = async () => {
            const chip = $('.fc[data-t="select"]');
            if (!(await aim(chip, 0.4, 0.5))) return;
            const target = field(5);
            const visible = chip.offsetParent !== null;
            if (visible) {
              ghostFor(chip);
              const p = pos(chip, 0.4, 0.5);
              gh.classList.add('live');
              gh.style.transform = `translate(${p[0] - 14}px,${p[1] - 20}px)`;
              void gh.offsetWidth;
              gh.classList.remove('live');
              gh.classList.add('on');
            }
            await tap(chip);
            const tp = pos(target, 0.5, 0.1);
            if (visible && tp) {
              cur.style.transform = `translate(${tp[0]}px,${tp[1]}px)`;
              gh.style.transform = `translate(${tp[0] - 14}px,${tp[1] - 20}px)`;
              await wait(820);
              showLine(4);
              await wait(520);
            }
            gh.classList.remove('on');
            dl.classList.remove('on');
            if (!idle()) return;
            const f = add('select', 4);
            await wait(800);
            if (!(await aim(lab, 0.5, 0.5))) return;
            await tap();
            if (!(await typeInto(lab, 'Preferred service'))) return;
            await wait(500);
            if (!(await aim(phi, 0.5, 0.5))) return;
            await tap();
            if (!(await typeInto(phi, 'Pick a package'))) return;
            await wait(400);
            if (!(await aim(req, 0.5, 0.5))) return;
            await tap(req, () => req.click());
            await wait(1800);
            if (!(await aim($('.del'), 0.5, 0.5))) return;
            await tap($('.del'), () => $('.del').click());
            sel = fields[0].id;
            select(sel);
            void f;
          };
          await flow();
          gh.classList.remove('on');
          dl.classList.remove('on');
          await wait(1800);
        }
      })();
    },
    prompt: `Build a form builder screen, full viewport (height: 100dvh) with three working columns: a field palette on the left, the live form canvas in the middle, a properties panel on the right. The page shell does not scroll; each column scrolls on its own.

Layout: CSS grid, columns 232px, minmax(0, 1fr) and 296px, under a 54px top bar (logo tile, breadcrumb "Forms / Consult intake", a Draft chip, a Build / Logic / Share segmented control with one white thumb that glides with transform and a critically damped spring, Preview and a primary Publish button). Palette (white, hairline right border): small uppercase "Fields" label then 42px chips for Short text, Email, Dropdown, Date, Rating, File upload, Checkbox and Long text, each with a 26px accent-tinted icon tile and a grip glyph. Canvas: a dotted background and one white sheet (max-width 660px, 20px radius, soft shadow, min-height 100% so it fills tall screens) with a title, a line of copy and a 2-column grid of fields; each field is Half (1 column) or Full (2 columns) and shows a label with a red asterisk when required, a mock control (input, select with chevron, date, five stars, dashed upload zone, checkbox, textarea) and optional help text. The selected field has a 1.5px accent ring plus a 4px soft ring and a small accent type tag on its top edge. Properties: type icon and name, Label, Placeholder and Help text inputs, a Required switch, a Half / Full segmented control and a Delete button pinned to the bottom.

Interactions: dragging a palette chip creates a ghost chip that follows the pointer (pointer events with setPointerCapture; a 5px threshold separates drag from click) and a 3px accent insertion line slides (translateY, 350ms) to the gap under the pointer; dropping inserts the field at that index, selects it and the neighbours slide with a FLIP animation (480ms, cubic-bezier(.32,.72,0,1)); the new field pops in with a slight overshoot. A click on a chip appends the field. Typing in the Label, Placeholder or Help inputs updates the selected field on the canvas on every keystroke without re-rendering the list. The Required switch toggles the asterisk, Width changes the span with a FLIP, Delete removes the field and selects its neighbour.

Accessibility: palette chips are buttons, the Required control is role="switch" with aria-checked, inputs have visible labels, focus-visible rings, prefers-reduced-motion drops the pop-in. Below 760px hide the palette and properties panel and stack the grid to one column. Plain HTML, CSS and JS, no libraries; React-friendly structure (Palette, Canvas, FieldRow, PropertiesPanel). Use your accent color for the selection, tags and primary buttons.`,
  });

  // ---------------------------------------------------------------- 3. page builder canvas
  const PB_SW = ['var(--ml-accent)', 'var(--ml-ink)', 'var(--ml-accent-2)', 'var(--ml-accent-soft)', 'var(--ml-bar)'];
  ML.add({
    id: 'app-editors-page',
    cat: 'app-editors',
    title: 'Page builder canvas',
    sub: 'Select an element, restyle it live',
    html: `
<div class="app">
  <header class="bar">
    <span class="logo">${I(P.layers, 16)}</span>
    <p class="crumb">Corvid Coffee<i>/</i><b>Home</b></p>
    <span class="sp"></span>
    <div class="seg dev" style="--n:3;--i:0" role="group" aria-label="Preview width"><span class="thumb" aria-hidden="true"></span><button type="button" class="on" data-d="d" aria-label="Desktop">${I(P.monitor, 16)}</button><button type="button" data-d="t" aria-label="Tablet">${I(P.tablet, 16)}</button><button type="button" data-d="p" aria-label="Phone">${I(P.phone, 16)}</button></div>
    <span class="sp"></span>
    <span class="zoom">100%</span>
    <button class="ib" type="button" aria-label="Undo">${I(P.undo, 17)}</button>
    <button class="ib" type="button" aria-label="Redo">${I(P.redo, 17)}</button>
    <button class="btn pri" type="button">Publish</button>
  </header>
  <div class="body">
    <aside class="lay" aria-label="Layers">
      <p class="mk">Layers</p>
      <div class="tree">
        <button class="row l0" type="button" data-n="Page">${I(P.layers, 15)}<span>Page</span></button>
        <button class="row l1" type="button" data-n="Nav">${I(P.split, 15)}<span>Nav bar</span></button>
        <button class="row l1" type="button" data-n="Hero">${I(P.square, 15)}<span>Hero</span></button>
        <button class="row l2" type="button" data-n="Heading">${I(P.heading, 15)}<span>Heading</span></button>
        <button class="row l2" type="button" data-n="Text">${I(P.text, 15)}<span>Text</span></button>
        <button class="row l2" type="button" data-n="Button">${I(P.btn, 15)}<span>Button</span></button>
        <button class="row l2" type="button" data-n="Image">${I(P.image, 15)}<span>Image</span></button>
        <button class="row l1" type="button" data-n="Features">${I(P.columns, 15)}<span>Features</span></button>
        <button class="row l1" type="button" data-n="Footer">${I(P.split, 15)}<span>Footer</span></button>
      </div>
    </aside>
    <main class="cv">
      <div class="stage" data-d="d">
        <div class="site">
          <div class="nv" data-n="Nav"><b><u></u>Corvid</b><span>Beans</span><span>Brew gear</span><span>Journal</span><em class="cart">Cart (2)</em></div>
          <div class="hr" data-n="Hero">
            <div class="col">
              <p class="eyebrow">Small-batch roasters</p>
              <h2 class="hd1" data-n="Heading">Roasted this morning, at your door by Friday.</h2>
              <p class="tx2" data-n="Text">Beans from three family farms, roasted to order. Pause or cancel any time.</p>
              <button class="cta" type="button" data-n="Button">Shop beans</button>
            </div>
            <div class="img" data-n="Image">
              <svg viewBox="0 0 400 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="ml-pb-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF0ED"/><stop offset="1" stop-color="#EAF2FF"/></linearGradient></defs><rect width="400" height="360" fill="url(#ml-pb-sky)"/><circle cx="300" cy="86" r="34" fill="#fff"/><path d="M0 250l90-70 80 54 100-84 130 100v110H0Z" fill="#9CC4FF"/><path d="M0 290l110-56 90 40 90-48 110 62v72H0Z" fill="#FF7A3D"/><rect x="128" y="190" width="132" height="104" rx="22" fill="#fff"/><path d="M260 214h18a22 22 0 0 1 0 44h-18" fill="none" stroke="#fff" stroke-width="14" stroke-linecap="round"/><rect x="146" y="206" width="96" height="14" rx="7" fill="#FFF0EE"/><path d="M160 166c-10-14 10-22 0-38M194 166c-10-14 10-22 0-38M228 166c-10-14 10-22 0-38" fill="none" stroke="#fff" stroke-width="7" stroke-linecap="round" opacity=".85"/></svg>
            </div>
          </div>
          <div class="ft" data-n="Features">
            <div class="f3"><span>${I(P.upload, 17)}</span><p><b>Free shipping</b>Over $40</p></div>
            <div class="f3"><span>${I(P.star, 17)}</span><p><b>Roasted to order</b>Ships in 24 h</p></div>
            <div class="f3"><span>${I(P.cal, 17)}</span><p><b>Pause anytime</b>No fees</p></div>
          </div>
          <div class="fo" data-n="Footer"><span>Corvid Coffee, 14 Harbor Street</span><span>Shipping, returns and contact</span></div>
        </div>
        <div class="selb" aria-hidden="true"><span class="tag"></span><i style="left:0;top:0"></i><i style="left:50%;top:0"></i><i style="left:100%;top:0"></i><i style="left:0;top:50%"></i><i style="left:100%;top:50%"></i><i style="left:0;top:100%"></i><i style="left:50%;top:100%"></i><i style="left:100%;top:100%"></i></div>
      </div>
    </main>
    <aside class="sty" aria-label="Style">
      <div class="sh"><span class="ti">${I(P.btn, 17)}</span><div><p class="k">Selected</p><b class="sn">Button</b></div></div>
      <div class="sec"><p class="mk">Size</p><div class="two"><span class="nf"><em>W</em><output class="ow">0</output></span><span class="nf"><em>H</em><output class="oh">0</output></span></div></div>
      <div class="sec c-fill"><p class="mk">Fill</p><div class="sw">${PB_SW.map((c, i) => `<button type="button" class="s${i ? '' : ' on'}" data-i="${i}" style="--c:${c}" aria-label="Fill ${i + 1}"></button>`).join('')}</div></div>
      <div class="sec c-r"><div class="lab"><p class="mk">Radius</p><output class="vr"></output></div><input type="range" class="rg" id="ml-pb-r" min="0" max="28" value="10" aria-label="Corner radius"></div>
      <div class="sec c-fs"><div class="lab"><p class="mk">Font size</p><output class="vf"></output></div><input type="range" class="rg" id="ml-pb-fs" min="13" max="60" value="15" aria-label="Font size"></div>
      <div class="sec c-pad"><div class="lab"><p class="mk">Padding</p><output class="vp"></output></div><input type="range" class="rg" id="ml-pb-pad" min="16" max="72" value="44" aria-label="Padding"></div>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${ED}${RANGE}
.d .body{grid-template-columns:224px minmax(0,1fr) 280px}
.d .zoom{padding:0 6px;font:500 12.5px var(--ml-mono);color:var(--ml-muted)}
.d .lay{min-height:0;padding:14px 10px;background:var(--ml-bg);border-right:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:thin}
.d .tree{display:flex;flex-direction:column;gap:2px}
.d .row{display:flex;align-items:center;gap:9px;height:32px;padding:0 9px;border:0;border-radius:8px;background:none;font-size:13px;color:var(--ml-ink-2);text-align:left;cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .row svg{flex:none;color:var(--ml-muted)}
.d .row.l1{margin-left:12px}
.d .row.l2{margin-left:26px}
.d .row:hover{background:var(--ml-surface)}
.d .row.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-weight:600}
.d .row.on svg{color:var(--ml-accent)}
.d .cv{display:flex;min-width:0;min-height:0;padding:26px;overflow:auto;scrollbar-width:thin;background-color:#EEF2F9;background-image:radial-gradient(#D5DDEB 1px,transparent 1.2px);background-size:20px 20px}
.d .stage{position:relative;flex:1;min-width:0;max-width:880px;margin:0 auto}
.d .stage[data-d=t]{max-width:600px}
.d .stage[data-d=p]{max-width:372px}
.d .site{container:site / inline-size;display:flex;flex-direction:column;min-height:100%;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);overflow:hidden}
.d .site [data-n]:hover:not(:has([data-n]:hover)){outline:1.5px dashed var(--ml-accent-line);outline-offset:2px}
.d .nv{display:flex;align-items:center;gap:22px;flex:none;height:62px;padding:0 26px;border-bottom:1px solid var(--ml-line)}
.d .nv b{display:flex;align-items:center;gap:8px;margin-right:auto;font-size:17px;font-weight:700;letter-spacing:-.03em}
.d .nv u{width:20px;height:20px;border-radius:7px;background:var(--ml-grad)}
.d .nv span{font-size:13.5px;color:var(--ml-ink-2)}
.d .cart{display:grid;place-items:center;height:34px;padding:0 14px;border-radius:999px;background:var(--ml-ink);font-size:12.5px;font-style:normal;font-weight:600;color:#fff}
.d .hr{display:grid;flex:1;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);align-items:center;gap:26px;margin:16px 16px 12px;padding:var(--pad-Hero,44px);border-radius:var(--r-Hero,22px);background:linear-gradient(160deg,var(--ml-accent-soft),#F7FAFF)}
.d .hr .col{display:flex;flex-direction:column;align-items:flex-start;gap:14px;min-width:0}
.d .eyebrow{font-size:11.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .hd1{font-size:var(--fs-Heading,44px);line-height:1.05;font-weight:650;letter-spacing:-.04em}
.d .tx2{max-width:380px;font-size:var(--fs-Text,16px);line-height:1.55;color:var(--ml-ink-2)}
.d .cta{height:46px;margin-top:6px;padding:0 24px;border:0;border-radius:var(--r-Button,10px);background:var(--bg-Button,var(--ml-accent));color:var(--fg-Button,#fff);font-size:var(--fs-Button,15px);font-weight:600;cursor:pointer;box-shadow:0 1px 2px rgba(35,15,10,.12),0 8px 18px rgba(255,68,51,.18);transition:border-radius .35s var(--ml-ease),background-color .3s ease}
.d .img{align-self:stretch;min-height:200px;border-radius:var(--r-Image,18px);overflow:hidden;box-shadow:var(--ml-shadow);transition:border-radius .35s var(--ml-ease)}
.d .img svg{display:block;width:100%;height:100%}
.d .ft{display:grid;flex:none;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;padding:0 16px 14px}
.d .f3{display:flex;align-items:center;gap:12px;padding:14px;border-radius:var(--r-Features,14px);background:var(--ml-surface);font-size:12.5px;color:var(--ml-muted);transition:border-radius .35s var(--ml-ease)}
.d .f3 span{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-accent)}
.d .f3 b{display:block;font-size:13.5px;font-weight:600;color:var(--ml-ink)}
.d .fo{display:flex;flex:none;justify-content:space-between;gap:12px;padding:15px 26px;border-top:1px solid var(--ml-line);font-size:12.5px;color:var(--ml-muted)}
.d .selb{position:absolute;left:0;top:0;z-index:5;pointer-events:none;box-shadow:0 0 0 1.5px var(--ml-accent);opacity:0}
.d .selb.on{opacity:1}
.d .selb.pop{animation:ed-pb-pop 380ms var(--ml-bounce) both}
.d .selb i{position:absolute;width:9px;height:9px;margin:-4.5px 0 0 -4.5px;border-radius:3px;background:#fff;box-shadow:0 0 0 1.5px var(--ml-accent)}
.d .tag{position:absolute;left:-1px;bottom:calc(100% + 7px);padding:4px 8px;border-radius:7px;background:var(--ml-accent);font:600 11px/1.1 var(--ml-mono);color:#fff;white-space:nowrap}
.d .sty{display:flex;flex-direction:column;gap:6px;min-height:0;padding:16px;background:var(--ml-bg);border-left:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:thin}
.d .sh{display:flex;align-items:center;gap:11px;padding-bottom:10px;border-bottom:1px solid var(--ml-line)}
.d .ti{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .sh .k{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .sh b{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .sec{padding:8px 0 6px;transition:opacity .25s ease}
.d .sec.off{opacity:.3;pointer-events:none}
.d .sec .mk{padding:0 0 8px}
.d .lab{display:flex;align-items:baseline;justify-content:space-between}
.d .lab output{font:600 12.5px var(--ml-mono);color:var(--ml-ink-2)}
.d .two{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.d .nf{display:flex;align-items:center;justify-content:space-between;height:36px;padding:0 12px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .nf em{font-size:12px;font-style:normal;font-weight:600;color:var(--ml-muted)}
.d .nf output{font:600 13px var(--ml-mono);color:var(--ml-ink)}
.d .sw{display:flex;gap:9px}
.d .sw .s{width:30px;height:30px;border:0;border-radius:50%;background:var(--c);box-shadow:inset 0 0 0 1px rgba(35,15,10,.12);cursor:pointer;transition:transform 90ms ease-out}
.d .sw .s.on{box-shadow:inset 0 0 0 1px rgba(35,15,10,.12),0 0 0 2px #fff,0 0 0 4px var(--ml-accent)}
@keyframes ed-pb-pop{0%{opacity:0;transform:var(--t) scale(.97)}100%{opacity:1;transform:var(--t)}}
${CURSOR_CSS}
@container site (max-width: 640px){
  .d .hr{grid-template-columns:minmax(0,1fr)}
  .d .ft{grid-template-columns:minmax(0,1fr)}
  .d .nv span{display:none}
  .d .hd1{font-size:min(var(--fs-Heading,44px),34px)}
  .d .fo span + span{display:none}
}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .lay,.d .sty,.d .dev,.d .zoom,.d .bar .ib{display:none}
  .d .cv{padding:14px}
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
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const scale = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const to = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = scale();
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !to(el, fx, fy));
        await wait(760);
        return idle();
      };
      const tap = async (el, fn) => {
        cur.classList.add('press');
        el && el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el && el.classList.remove('press');
        if (fn) fn();
      };

      const stage = $('.stage');
      const selb = $('.selb');
      const site = $('.site');
      const SW = [['var(--ml-accent)', '#fff'], ['var(--ml-ink)', '#fff'], ['var(--ml-accent-2)', '#fff'], ['var(--ml-accent-soft)', 'var(--ml-accent-ink)'], ['var(--ml-bar)', 'var(--ml-ink)']];
      const st = { Button: { r: 10, fs: 15, fill: 0 }, Heading: { fs: 44 }, Text: { fs: 16 }, Hero: { r: 22, pad: 44 }, Image: { r: 18 }, Features: { r: 14 }, Nav: {}, Footer: {}, Page: {} };
      const rg = { r: $('#ml-pb-r'), fs: $('#ml-pb-fs'), pad: $('#ml-pb-pad') };
      const out = { r: $('.vr'), fs: $('.vf'), pad: $('.vp') };
      const fill = (inp) => inp.style.setProperty('--p', `${((inp.value - inp.min) / (inp.max - inp.min)) * 100}%`);
      let now = '';
      const el = (n) => (n === 'Page' ? site : site.querySelector(`[data-n="${n}"]`));
      const place = (n, pop) => {
        const e = el(n);
        const sr = stage.getBoundingClientRect();
        const r = e.getBoundingClientRect();
        const s = scale();
        const x = (r.left - sr.left) / s;
        const y = (r.top - sr.top) / s;
        selb.style.setProperty('--t', `translate(${x}px,${y}px)`);
        selb.style.transform = `translate(${x}px,${y}px)`;
        selb.style.width = `${r.width / s}px`;
        selb.style.height = `${r.height / s}px`;
        $('.tag').textContent = `${n}  ${Math.round(r.width / s)} x ${Math.round(r.height / s)}`;
        $('.ow').textContent = Math.round(r.width / s);
        $('.oh').textContent = Math.round(r.height / s);
        selb.classList.add('on');
        if (pop) {
          selb.classList.remove('pop');
          void selb.offsetWidth;
          selb.classList.add('pop');
        }
      };
      const can = { Button: ['fill', 'r', 'fs'], Heading: ['fs'], Text: ['fs'], Hero: ['r', 'pad'], Image: ['r'], Features: ['r'] };
      const select = (n) => {
        now = n;
        root.querySelectorAll('.row').forEach((b) => b.classList.toggle('on', b.dataset.n === n));
        const ico = $(`.row[data-n="${n}"] svg`);
        if (ico) $('.ti').innerHTML = ico.outerHTML.replace(/width="15" height="15"/, 'width="17" height="17"');
        $('.sn').textContent = n === 'Nav' ? 'Nav bar' : n;
        const ok = can[n] || [];
        ['fill', 'r', 'fs', 'pad'].forEach((k) => $(`.c-${k}`).classList.toggle('off', !ok.includes(k)));
        ['r', 'fs', 'pad'].forEach((k) => {
          if (st[n][k] != null) {
            rg[k].value = st[n][k];
            out[k].textContent = `${st[n][k]} px`;
            fill(rg[k]);
          }
        });
        root.querySelectorAll('.sw .s').forEach((b, i) => b.classList.toggle('on', i === (st[n].fill || 0)));
        place(n, true);
      };
      const apply = (k, v) => {
        const e = el(now);
        const o = st[now];
        if (!e || o[k] == null) return;
        o[k] = v;
        e.style.setProperty(`--${k}-${now}`, `${v}px`);
        out[k].textContent = `${v} px`;
        fill(rg[k]);
        place(now, false);
      };
      Object.keys(rg).forEach((k) => rg[k].addEventListener('input', () => apply(k, +rg[k].value)));
      root.querySelectorAll('.sw .s').forEach((b) =>
        b.addEventListener('click', () => {
          if (now !== 'Button') return;
          const i = +b.dataset.i;
          st.Button.fill = i;
          const e = el('Button');
          e.style.setProperty('--bg-Button', SW[i][0]);
          e.style.setProperty('--fg-Button', SW[i][1]);
          root.querySelectorAll('.sw .s').forEach((x) => x.classList.toggle('on', x === b));
        }),
      );
      root.querySelectorAll('.row').forEach((b) => b.addEventListener('click', () => select(b.dataset.n)));
      site.addEventListener('click', (e) => {
        const n = e.target.closest('[data-n]');
        if (n) select(n.dataset.n);
      });
      root.querySelectorAll('.dev button').forEach((b, i) =>
        b.addEventListener('click', () => {
          $('.dev').style.setProperty('--i', i);
          root.querySelectorAll('.dev button').forEach((x) => x.classList.toggle('on', x === b));
          stage.dataset.d = b.dataset.d;
          $('.zoom').textContent = '100%';
          requestAnimationFrame(() => now && place(now, true));
        }),
      );
      if (typeof ResizeObserver !== 'undefined') new ResizeObserver(() => now && place(now, false)).observe(stage);
      requestAnimationFrame(() => select('Button'));

      const thumb = (inp) => {
        const f = (inp.value - inp.min) / (inp.max - inp.min);
        to(inp, (8 + f * (inp.offsetWidth - 16)) / inp.offsetWidth, 0.5);
      };
      const drag = async (inp, target) => {
        const v0 = +inp.value;
        const t0 = performance.now();
        cur.style.transition = 'opacity .25s ease';
        await new Promise((res) => {
          const step = (t) => {
            if (!root.isConnected || !idle()) return res();
            const k = Math.min(1, (t - t0) / 1100);
            inp.value = Math.round(v0 + (target - v0) * (1 - Math.pow(1 - k, 3)));
            inp.dispatchEvent(new Event('input'));
            thumb(inp);
            if (k < 1) requestAnimationFrame(step);
            else res();
          };
          requestAnimationFrame(step);
        });
        cur.style.transition = '';
      };
      let flip = false;
      cur.style.transform = 'translate(560px,420px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const flow = async () => {
            const btn = el('Button');
            if (!(await aim(btn, 0.5, 0.5))) return;
            await tap(btn, () => select('Button'));
            await wait(500);
            const r = rg.r;
            const f = (r.value - r.min) / (r.max - r.min);
            if (!(await aim(r, (8 + f * (r.offsetWidth - 16)) / r.offsetWidth, 0.5))) return;
            await tap();
            await drag(r, flip ? 10 : 26);
            await wait(500);
            const sw = $(`.sw .s[data-i="${flip ? 0 : 1}"]`);
            if (!(await aim(sw, 0.5, 0.5))) return;
            await tap(sw, () => sw.click());
            await wait(900);
            const h = el('Heading');
            if (!(await aim(h, 0.4, 0.3))) return;
            await tap(h, () => select('Heading'));
            await wait(500);
            const fs = rg.fs;
            const f2 = (fs.value - fs.min) / (fs.max - fs.min);
            if (!(await aim(fs, (8 + f2 * (fs.offsetWidth - 16)) / fs.offsetWidth, 0.5))) return;
            await tap();
            await drag(fs, flip ? 44 : 54);
            await wait(2200);
            flip = !flip;
          };
          await flow();
          cur.style.transition = '';
          await wait(1200);
        }
      })();
    },
    prompt: `Build a visual page builder screen, full viewport (height: 100dvh), with a layers panel, a design canvas holding a real web page, and a style inspector. The shell never scrolls; the canvas and the panels scroll on their own.

Layout: CSS grid, columns 224px, minmax(0, 1fr) and 280px, under a 54px top bar (logo tile, breadcrumb "Corvid Coffee / Home", a three-way Desktop / Tablet / Phone icon segmented control with one gliding white thumb, a zoom readout in mono type, undo and redo icon buttons, a primary Publish button). Layers panel (white, hairline border): a small uppercase label and an indented tree (Page, Nav bar, Hero with Heading, Text, Button and Image inside it, Features, Footer), 32px rows with a 15px icon; the selected row sits on a pale accent pill. Canvas: dotted blue-grey background, 26px padding, and one white site card (max-width 880px, 16px radius) that stretches to the canvas height: nav bar, a hero with a rounded gradient panel (eyebrow, 44px heading, paragraph, button, a drawn illustration), a three-tile feature row and a footer. The tablet and phone modes cap the card width at 600px and 372px and the page reflows with a container query (hero and features stack).

Selection: clicking any element (or its layer row) draws a selection box above it: a 1.5px accent outline, eight 9px white square handles with an accent ring, and a mono size tag ("Button  148 x 46") above the top-left corner. The box is absolutely positioned with transform: translate and explicit width and height measured from getBoundingClientRect relative to the stage, and it pops in (scale .97 to 1 with a slight overshoot, 380ms). Hovering any element shows a dashed accent-line outline.

Inspector: the selected element's icon and name, read-only W and H boxes, a Fill row of five circular swatches, and Radius, Font size and Padding sliders (custom range inputs: 4px track filled to the thumb with the accent via a --p custom property, 16px white thumb). Controls that do not apply to the selected element dim to 30% instead of disappearing so the panel does not jump. Each slider writes a per-element CSS custom property (--r-Button, --fs-Heading, --pad-Hero...) on the element, so the canvas updates on every input event and the selection box re-measures.

Accessibility: layer rows are buttons, sliders have aria-labels, focus-visible rings. Below 760px hide both panels and the device switcher so the page fills the screen. Plain HTML, CSS and JS, no libraries; React-friendly structure (LayersPanel, Canvas, SelectionBox, Inspector). Use your accent color for the selection, the active layer and the sliders.`,
  });

  // ---------------------------------------------------------------- 4. email builder
  const EM_TILES = [
    ['text', 'Text', P.text],
    ['img', 'Image', P.image],
    ['btn', 'Button', P.btn],
    ['cols', 'Columns', P.columns],
    ['hr', 'Divider', P.minus],
    ['soc', 'Social', P.link],
  ];
  ML.add({
    id: 'app-editors-email',
    cat: 'app-editors',
    title: 'Email builder',
    sub: 'Blocks drop in, preview narrows to mobile',
    html: `
<div class="app">
  <header class="bar">
    <span class="logo">${I(P.mail, 16)}</span>
    <p class="crumb">Campaigns<i>/</i><b>October newsletter</b></p>
    <span class="chip">Draft</span>
    <span class="sp"></span>
    <div class="seg view" style="--n:2;--i:0" role="group" aria-label="Preview"><span class="thumb" aria-hidden="true"></span><button type="button" class="on" data-m="d">${I(P.monitor, 15)}Desktop</button><button type="button" data-m="m">${I(P.phone, 15)}Mobile</button></div>
    <span class="px">600 px</span>
    <span class="sp"></span>
    <button class="btn" type="button">Send test</button>
    <button class="btn pri" type="button">${I(P.cal, 15)}Schedule</button>
  </header>
  <div class="body">
    <aside class="lib" aria-label="Blocks">
      <p class="mk">Content</p>
      <div class="tiles">${EM_TILES.map(([k, n, d]) => `<button class="tl" type="button" data-k="${k}">${I(d, 20)}<span>${n}</span></button>`).join('')}</div>
      <p class="mk">Structure</p>
      <div class="outl"></div>
    </aside>
    <main class="cv">
      <div class="subj"><span>Subject</span><b>Autumn menu is here</b><em>Three new drinks and a pastry worth the walk</em></div>
      <div class="stage" data-m="d">
        <div class="shell" aria-hidden="true"></div>
        <div class="lay dk" data-l="d"></div>
        <div class="lay mb off" data-l="m" aria-hidden="true"></div>
      </div>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `${ED}
.d .body{grid-template-columns:252px minmax(0,1fr)}
.d .px{font:500 12.5px var(--ml-mono);color:var(--ml-muted)}
.d .seg.view button{padding:0 14px}
.d .lib{display:flex;flex-direction:column;min-height:0;padding:14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:thin}
.d .tiles{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px}
.d .tl{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;height:76px;border:0;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);font-size:12.5px;font-weight:550;color:var(--ml-ink-2);cursor:pointer;transition:box-shadow .2s ease,color .2s ease,transform 90ms ease-out}
.d .tl svg{color:var(--ml-accent)}
.d .tl:hover{box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow);color:var(--ml-ink)}
.d .outl{display:flex;flex-direction:column;gap:2px}
.d .oi{display:flex;align-items:center;gap:9px;height:32px;padding:0 10px;border:0;border-radius:8px;background:none;font-size:13px;color:var(--ml-ink-2);text-align:left;cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .oi i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar);transition:background-color .2s ease}
.d .oi:hover{background:var(--ml-surface)}
.d .oi.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-weight:600}
.d .oi.on i{background:var(--ml-accent)}
.d .cv{display:flex;flex-direction:column;min-width:0;min-height:0;padding:20px 26px 26px;overflow-y:auto;scrollbar-width:thin;background-color:#EEF2F9;background-image:radial-gradient(#D5DDEB 1px,transparent 1.2px);background-size:20px 20px}
.d .subj{display:flex;align-items:baseline;flex:none;flex-wrap:wrap;gap:4px 12px;max-width:600px;width:100%;margin:0 auto 16px;padding:11px 16px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px}
.d .subj span{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .subj b{font-weight:600}
.d .subj em{font-style:normal;color:var(--ml-muted)}
.d .stage{container:st / inline-size;position:relative;display:grid;flex:1;grid-template-rows:auto;align-content:start;width:100%;max-width:600px;margin:0 auto}
.d .shell{grid-area:1 / 1;min-height:100%;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);transform-origin:50% 0;transform:scaleX(var(--sx,1));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .stage[data-m=m]{--sx:.625}
.d .lay{grid-area:1 / 1;display:flex;flex-direction:column;min-width:0;max-height:4000px;transform-origin:50% 0;transition:opacity .28s ease,transform var(--ml-spring-dur) var(--ml-spring),visibility 0s,max-height 0s}
.d .lay.mb{width:62.5%;margin:0 auto;font-size:13px}
.d .lay.off{max-height:0;overflow:hidden;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .22s ease,transform var(--ml-spring-dur) var(--ml-spring),visibility 0s .3s,max-height 0s .3s}
.d .mb .pc .pi{aspect-ratio:1 / .52}
.d .lay.dk.off{transform:scale(.62)}
.d .lay.mb.off{transform:scale(1.08)}
.d .eb{position:relative;padding:22px 32px;border-radius:6px;transition:box-shadow .2s ease}
.d .eb.sel{box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .eb.new{animation:ed-em-in 520ms var(--ml-spring) both}
.d .mb .eb{padding:18px 16px}
.d .eh{display:flex;align-items:center;justify-content:space-between;padding-top:20px;padding-bottom:14px}
.d .eh b{display:flex;align-items:center;gap:8px;font-size:17px;font-weight:700;letter-spacing:-.03em}
.d .eh u{width:20px;height:20px;border-radius:7px;background:var(--ml-grad)}
.d .eh span,.d .ef p{font-size:12px;color:var(--ml-muted)}
.d .ehr{padding-top:4px}
.d .eimg{overflow:hidden;border-radius:14px}
.d .eimg svg{display:block;width:100%;height:auto}
.d .ehr h3{margin-top:20px;font-size:30px;line-height:1.08;font-weight:650;letter-spacing:-.035em}
.d .mb .ehr h3{font-size:23px}
.d .ehr p,.d .et p{margin-top:10px;font-size:14.5px;line-height:1.6;color:var(--ml-ink-2)}
.d .et p{margin-top:0}
.d .mt{padding:1px 7px;border-radius:6px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font:600 12px var(--ml-mono);color:var(--ml-accent-ink)}
.d .ec{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.d .mb .ec{grid-template-columns:minmax(0,1fr)}
.d .pc{display:flex;flex-direction:column;gap:4px;font-size:13.5px}
.d .pc .pi{display:block;aspect-ratio:1 / .74;margin-bottom:6px;border-radius:12px;background:radial-gradient(circle at 50% 56%,#fff 0 20%,transparent 21%),linear-gradient(160deg,var(--ml-accent-line),var(--ml-accent-soft))}
.d .pc b{font-weight:600}
.d .pc span{color:var(--ml-muted)}
.d .eg{text-align:center}
.d .ebtn{display:inline-block;padding:13px 28px;border-radius:10px;background:var(--ml-grad);font-size:14.5px;font-weight:600;color:#fff}
.d .ed hr{height:1px;border:0;background:var(--ml-line)}
.d .es{display:flex;align-items:center;justify-content:center;gap:10px;font-size:13px;color:var(--ml-muted)}
.d .es i{width:28px;height:28px;border-radius:50%;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .ef{margin-top:auto;padding-top:18px;padding-bottom:22px;text-align:center;border-top:1px solid var(--ml-line)}
.d .ef p + p{margin-top:3px}
.d .eim .eimg{height:150px}
.d .bt{position:absolute;right:10px;top:-17px;z-index:6;display:none;gap:2px;padding:3px;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow)}
.d .dk .eb.sel .bt{display:flex}
.d .bt button{display:grid;place-items:center;width:28px;height:28px;border:0;border-radius:7px;background:none;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .bt button:hover{background:var(--ml-surface)}
.d .bt .del:hover{color:#D70015}
@keyframes ed-em-in{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container st (max-width: 520px){
  .d .dk .ec{grid-template-columns:minmax(0,1fr)}
  .d .dk .eb{padding:18px 16px}
  .d .dk .ehr h3{font-size:24px}
}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .lib,.d .px,.d .view,.d .chip,.d .bar .btn:not(.pri){display:none}
  .d .cv{padding:14px}
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
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const to = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !to(el, fx, fy));
        await wait(760);
        return idle();
      };
      const tap = async (el, fn) => {
        cur.classList.add('press');
        el && el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el && el.classList.remove('press');
        if (fn) fn();
      };

      const svg = (d, s = 16) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = { up: '<path d="m18 15-6-6-6 6"/>', down: '<path d="m6 9 6 6 6-6"/>', copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>', del: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>' };
      const NAMES = { head: 'Header', hero: 'Hero banner', text: 'Text', cols: 'Two columns', btn: 'Button', hr: 'Divider', foot: 'Footer', img: 'Image', soc: 'Social links' };
      const pic = (a, b) => `<div class="eimg"><svg viewBox="0 0 560 220" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="560" height="220" fill="${a}"/><circle cx="430" cy="64" r="34" fill="#fff"/><path d="M0 150l110-70 90 56 120-90 240 112v62H0Z" fill="#9CC4FF"/><path d="M0 188l130-52 110 40 110-52 210 70v26H0Z" fill="${b}"/><rect x="226" y="86" width="84" height="66" rx="16" fill="#fff"/><path d="M310 102h12a14 14 0 0 1 0 28h-12" fill="none" stroke="#fff" stroke-width="9" stroke-linecap="round"/></svg></div>`;
      const HTML = {
        head: () => '<div class="eb eh"><b><u></u>Corvid Coffee</b><span>View online</span></div>',
        hero: () => `<div class="eb ehr">${pic('#FFEBE8', '#FF7A3D')}<h3>Autumn menu is here</h3><p>Three new drinks and one pastry, all roasted and baked this week.</p></div>`,
        text: () => '<div class="eb et"><p>Hi <span class="mt">first_name</span>, the Blue Hour Latte is back from Thursday 15 October. Order ahead and skip the line.</p></div>',
        cols: () => '<div class="eb ec"><div class="pc"><i class="pi"></i><b>Blue Hour Latte</b><span>$5.50</span></div><div class="pc"><i class="pi"></i><b>Cold Brew Tonic</b><span>$6.00</span></div></div>',
        btn: () => '<div class="eb eg"><span class="ebtn">See the full menu</span></div>',
        hr: () => '<div class="eb ed"><hr></div>',
        foot: () => '<div class="eb ef"><p>Corvid Coffee, 14 Harbor Street</p><p>Unsubscribe - Manage preferences</p></div>',
        img: () => `<div class="eb eim">${pic('#FFF0EE', '#FF4433')}</div>`,
        soc: () => '<div class="eb es">Follow us<i></i><i></i><i></i></div>',
      };
      const blocks = [{ u: 1, k: 'head' }, { u: 2, k: 'hero' }, { u: 3, k: 'text' }, { u: 4, k: 'cols' }, { u: 5, k: 'btn' }, { u: 6, k: 'foot' }];
      let uid = 10;
      let sel = 3;
      let fresh = 0;
      const stage = $('.stage');
      const dk = $('.dk');
      const mb = $('.mb');
      const bar = `<span class="bt"><button type="button" data-a="up" aria-label="Move up">${svg(IC.up, 15)}</button><button type="button" data-a="down" aria-label="Move down">${svg(IC.down, 15)}</button><button type="button" data-a="copy" aria-label="Duplicate">${svg(IC.copy, 15)}</button><button type="button" class="del" data-a="del" aria-label="Delete">${svg(IC.del, 15)}</button></span>`;
      const draw = () => {
        const one = (isDesk) =>
          blocks
            .map((b) => HTML[b.k]().replace('class="eb ', `data-u="${b.u}" class="eb${b.u === sel ? ' sel' : ''}${b.u === fresh ? ' new' : ''} `).replace(/<\/div>$/, `${isDesk ? bar : ''}</div>`))
            .join('');
        dk.innerHTML = one(true);
        mb.innerHTML = one(false);
        $('.outl').innerHTML = blocks.map((b) => `<button type="button" class="oi${b.u === sel ? ' on' : ''}" data-u="${b.u}"><i></i>${NAMES[b.k]}</button>`).join('');
        fresh = 0;
      };
      const pick = (u) => {
        sel = u;
        root.querySelectorAll('.eb').forEach((n) => n.classList.toggle('sel', +n.dataset.u === u));
        root.querySelectorAll('.oi').forEach((n) => n.classList.toggle('on', +n.dataset.u === u));
      };
      const idx = () => blocks.findIndex((b) => b.u === sel);
      const add = (k) => {
        const at = idx() >= 0 ? idx() + 1 : blocks.length - 1;
        const b = { u: ++uid, k };
        blocks.splice(Math.min(at, blocks.length - 1), 0, b);
        sel = b.u;
        fresh = b.u;
        draw();
      };
      const act = (a) => {
        const i = idx();
        if (i < 0) return;
        if (a === 'del') {
          const gone = [...root.querySelectorAll(`.eb[data-u="${sel}"]`)];
          gone.forEach((n) => n.animate([{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'scale(.97)' }], { duration: 220, easing: 'ease-out', fill: 'forwards' }));
          setTimeout(() => {
            const j = blocks.findIndex((b) => b.u === sel);
            if (j < 0) return;
            blocks.splice(j, 1);
            sel = (blocks[Math.max(0, j - 1)] || {}).u;
            draw();
          }, 230);
        } else if (a === 'copy') {
          const b = { u: ++uid, k: blocks[i].k };
          blocks.splice(i + 1, 0, b);
          sel = b.u;
          fresh = b.u;
          draw();
        } else {
          const j = a === 'up' ? i - 1 : i + 1;
          if (j < 0 || j >= blocks.length) return;
          [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
          draw();
        }
      };
      stage.addEventListener('click', (e) => {
        const bt = e.target.closest('.bt button');
        if (bt) return void act(bt.dataset.a);
        const n = e.target.closest('.eb');
        if (n) pick(+n.dataset.u);
      });
      $('.outl').addEventListener('click', (e) => {
        const b = e.target.closest('.oi');
        if (b) pick(+b.dataset.u);
      });
      root.querySelectorAll('.tl').forEach((t) => t.addEventListener('click', () => add(t.dataset.k)));
      const setView = (m) => {
        stage.dataset.m = m;
        $('.view').style.setProperty('--i', m === 'm' ? 1 : 0);
        root.querySelectorAll('.view button').forEach((b) => b.classList.toggle('on', b.dataset.m === m));
        $('.px').textContent = m === 'm' ? '375 px' : '600 px';
        dk.classList.toggle('off', m === 'm');
        mb.classList.toggle('off', m !== 'm');
        dk.setAttribute('aria-hidden', String(m === 'm'));
        mb.setAttribute('aria-hidden', String(m !== 'm'));
      };
      root.querySelectorAll('.view button').forEach((b) => b.addEventListener('click', () => setView(b.dataset.m)));
      draw();

      cur.style.transform = 'translate(700px,520px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const flow = async () => {
            setView('d');
            const t = dk.querySelector('.et');
            if (!(await aim(t, 0.5, 0.5))) return;
            await tap(t, () => pick(+t.dataset.u));
            await wait(500);
            const tile = $('.tl[data-k="img"]');
            if (!(await aim(tile, 0.5, 0.5))) return;
            await tap(tile, () => tile.click());
            await wait(1400);
            const m = $('.view button[data-m="m"]');
            if (!(await aim(m, 0.5, 0.5))) return;
            await tap(m, () => m.click());
            await wait(2800);
            const d = $('.view button[data-m="d"]');
            if (!(await aim(d, 0.5, 0.5))) return;
            await tap(d, () => d.click());
            await wait(1100);
            const del = dk.querySelector('.eb.sel .del');
            if (!(await aim(del, 0.5, 0.5))) return;
            await tap(del, () => del.click());
            await wait(1400);
            pick(3);
          };
          await flow();
          await wait(1200);
        }
      })();
    },
    prompt: `Build an email builder screen, full viewport (height: 100dvh): a block library on the left and an email canvas with a desktop and mobile preview.

Layout: CSS grid, columns 252px and minmax(0, 1fr), under a 54px top bar (mail logo tile, breadcrumb "Campaigns / October newsletter", a Draft chip, a Desktop / Mobile segmented control with icons and ONE white thumb that glides with transform and a critically damped spring, a mono width readout "600 px", a Send test button and a primary Schedule button). Library (white, hairline border): small uppercase "Content" label and a 2-column grid of 76px block tiles (Text, Image, Button, Columns, Divider, Social) with an accent icon above the label, then a "Structure" outline listing the email's blocks as 32px rows with a dot; the selected block's row sits on a pale accent pill. Canvas: dotted blue-grey background, a subject-line card (Subject, text, preheader) and one email column (max-width 600px, 14px radius, white, soft shadow) that grows to fill the canvas height with the footer pinned to the bottom. Blocks: header (logo, View online), hero banner (a drawn illustration, 30px headline, copy), a text block with a merge-tag chip (first_name), two product columns, a gradient button, a divider, social dots and a footer with unsubscribe.

Interactions: clicking a block selects it (1.5px accent inset ring, a small floating toolbar at its top right with move up, move down, duplicate and delete icon buttons) and its outline row; clicking a tile inserts that block after the selection with an entrance (opacity and translateY(-10px) to none, 520ms); delete fades the block out in 220ms before removing it.

Preview toggle: render the email twice into stacked grid cells, a 600px desktop layout and a 375px mobile layout (62.5% wide, columns stacked, smaller type). Switching modes never animates width: the white email shell scales on the X axis (transform: scaleX(.625), transform-origin 50% 0, 587ms spring), the desktop layer fades out while scaling to .62 and the mobile layer fades in from scale 1.08; the hidden layer gets height 0 and visibility hidden after the fade so the page height follows the visible layout.

Accessibility: tiles and outline rows are buttons, the toolbar buttons have aria-labels, the hidden preview is aria-hidden, focus-visible rings. Below 760px hide the library and the preview toggle and let the email fill the width (a container query stacks the columns). Plain HTML, CSS and JS, no libraries; React-friendly structure (BlockLibrary, Outline, EmailCanvas, BlockToolbar, PreviewToggle). Use your accent color for selection and the button.`,
  });

  // ---------------------------------------------------------------- 5. whiteboard
  ML.add({
    id: 'app-editors-board',
    cat: 'app-editors',
    title: 'Whiteboard',
    sub: 'Stickies, connectors, two live cursors',
    html: `
<div class="app">
  <header class="bar">
    <span class="logo">${I(P.sticky, 16)}</span>
    <p class="crumb">Atlas Freight<i>/</i><b>Q4 route planning</b></p>
    <span class="sp"></span>
    <span class="live"><u></u>3 here now</span>
    <span class="avs" aria-label="Collaborators"><i>PN</i><i>DO</i><i>You</i></span>
    <button class="btn pri" type="button">${I(P.share, 15)}Share</button>
  </header>
  <div class="body">
    <nav class="rail" aria-label="Tools">
      <button class="ib tool on" type="button" data-t="sel" aria-label="Select" aria-pressed="true">${I(P.pointer, 19)}</button>
      <button class="ib tool" type="button" data-t="sticky" aria-label="Sticky note" aria-pressed="false">${I(P.sticky, 19)}</button>
      <button class="ib tool" type="button" data-t="text" aria-label="Text" aria-pressed="false">${I(P.type, 19)}</button>
      <button class="ib tool" type="button" data-t="shape" aria-label="Shape" aria-pressed="false">${I(P.square, 19)}</button>
      <button class="ib tool" type="button" data-t="link" aria-label="Connector" aria-pressed="false">${I(P.arrow, 19)}</button>
      <button class="ib tool" type="button" data-t="pen" aria-label="Pen" aria-pressed="false">${I(P.pen, 19)}</button>
      <hr>
      <button class="ib" type="button" data-a="undo" aria-label="Undo last sticky">${I(P.undo, 19)}</button>
    </nav>
    <main class="board">
      <div class="plane">
        <svg class="wires" aria-hidden="true"><defs><marker id="ml-wb-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M1 1.5 8.5 5 1 8.5z" fill="#FF7A3D"/></marker></defs></svg>
        <div class="notes"></div>
        <div class="co c1" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M4.04 4.6a.5.5 0 0 1 .56-.56l15.5 6.1a.5.5 0 0 1-.05.94l-6.3 1.9a1 1 0 0 0-.66.66l-1.9 6.3a.5.5 0 0 1-.94.05Z"/></svg><span>Priya N.</span></div>
        <div class="co c2" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M4.04 4.6a.5.5 0 0 1 .56-.56l15.5 6.1a.5.5 0 0 1-.05.94l-6.3 1.9a1 1 0 0 0-.66.66l-1.9 6.3a.5.5 0 0 1-.94.05Z"/></svg><span>Daniel O.</span></div>
      </div>
      <div class="zoomc" aria-hidden="true"><span>${I(P.minus, 14)}</span><b>100%</b><span>${I(P.plus, 14)}</span></div>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `${ED}
.d .body{grid-template-columns:64px minmax(0,1fr)}
.d .live{display:inline-flex;align-items:center;gap:7px;font-size:12.5px;color:var(--ml-muted)}
.d .live u{width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .avs i:nth-child(3){background:var(--ml-ink);color:#fff}
.d .rail{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 0;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .rail .ib{width:42px;height:42px;border-radius:12px}
.d .rail hr{width:26px;height:1px;margin:4px 0;border:0;background:var(--ml-line)}
.d .board{position:relative;min-width:0;min-height:0;overflow:auto;background-color:#F7F9FD;background-image:radial-gradient(#D5DDEB 1.1px,transparent 1.3px);background-size:24px 24px;scrollbar-width:thin}
.d .board.add{cursor:crosshair}
.d .plane{position:relative;min-width:760px;min-height:600px;height:100%}
.d .wires{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}
.d .wires path{fill:none;stroke:var(--ml-accent-2);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.d .wires path.draw{stroke-dasharray:1;animation:ed-wb-draw 800ms var(--ml-ease) both}
.d .notes{position:absolute;inset:0}
.d .nt{position:absolute;left:calc(var(--x) * 100%);top:calc(var(--y) * 100%);display:flex;flex-direction:column;width:176px;min-height:116px;padding:13px 14px 11px;border-radius:12px;background:var(--bg);box-shadow:inset 0 0 0 1px rgba(35,15,10,.05),0 1px 2px rgba(35,15,10,.08),0 10px 22px rgba(35,15,10,.08);cursor:grab;touch-action:none;transition:box-shadow .25s ease}
.d .nt.drag{z-index:6;cursor:grabbing;user-select:none;box-shadow:inset 0 0 0 1px rgba(35,15,10,.05),0 20px 40px rgba(35,15,10,.18)}
.d .nt.pop{animation:ed-wb-pop 600ms var(--ml-bounce) both}
.d .nt.out{animation:ed-wb-out 260ms ease-in both}
.d .nt .tx{flex:1;font-size:15px;line-height:1.35;font-weight:550;letter-spacing:-.01em;color:var(--ml-ink);outline:0}
.d .nt .tx:empty::before{content:attr(data-ph);color:var(--ml-muted)}
.d .nt.typing .tx::after{content:"";display:inline-block;width:2px;height:1.1em;margin-left:1px;vertical-align:-.2em;background:var(--ml-accent);animation:ed-wb-blink 1s steps(1) infinite}
.d .nt .by{align-self:flex-start;margin-top:10px;padding:3px 8px;border-radius:99px;background:rgba(255,255,255,.72);font-size:10.5px;font-weight:650;color:var(--ml-accent-ink)}
.d .co{position:absolute;left:0;top:0;z-index:30;pointer-events:none;transition:transform 1.7s var(--ml-ease)}
.d .co svg{display:block;filter:drop-shadow(0 2px 3px rgba(35,15,10,.25))}
.d .co path{fill:var(--c);stroke:#fff;stroke-width:1.6;stroke-linejoin:round}
.d .co span{position:absolute;left:15px;top:19px;padding:3px 9px;border-radius:99px;background:var(--c);font-size:11px;font-weight:600;color:#fff;white-space:nowrap}
.d .c1{--c:var(--ml-accent)}
.d .c2{--c:var(--ml-ink-2)}
.d .zoomc{position:absolute;left:14px;bottom:14px;display:flex;align-items:center;gap:2px;padding:4px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);font:600 12.5px var(--ml-mono)}
.d .zoomc span{display:grid;place-items:center;width:28px;height:28px;color:var(--ml-ink-2)}
.d .zoomc b{min-width:46px;text-align:center;font-weight:600}
@keyframes ed-wb-pop{0%{opacity:0;transform:scale(.6) rotate(-4deg)}100%{opacity:1;transform:none}}
@keyframes ed-wb-out{to{opacity:0;transform:scale(.85)}}
@keyframes ed-wb-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes ed-wb-blink{50%{opacity:0}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .rail,.d .live,.d .avs{display:none}
}
@media (prefers-reduced-motion: reduce){.d .co{transition:none}.d .nt.typing .tx::after{animation:none}}`,
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
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const scale = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const to = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = scale();
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !to(el, fx, fy));
        await wait(760);
        return idle();
      };
      const tap = async (el, fn) => {
        cur.classList.add('press');
        el && el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el && el.classList.remove('press');
        if (fn) fn();
      };

      const NS = 'http://www.w3.org/2000/svg';
      const board = $('.board');
      const plane = $('.plane');
      const notes = $('.notes');
      const wires = $('.wires');
      const BG = ['var(--ml-accent-soft)', 'var(--ml-bg)', '#FFF0ED', 'var(--ml-bar-2)', 'var(--ml-accent-line)'];
      const data = [
        { id: 1, x: 0.06, y: 0.12, bg: BG[0], t: 'Consolidate Tuesday pickups', by: 'PN' },
        { id: 2, x: 0.38, y: 0.08, bg: BG[1], t: 'Open a Lisbon cross-dock', by: 'DO' },
        { id: 3, x: 0.7, y: 0.14, bg: BG[2], t: 'Split Friday driver shifts', by: 'HK' },
        { id: 4, x: 0.14, y: 0.52, bg: BG[3], t: 'Cut empty miles by 12%', by: 'PN' },
        { id: 5, x: 0.46, y: 0.5, bg: BG[4], t: 'Pilot with Northgate in November', by: 'You' },
        { id: 6, x: 0.2, y: 0.8, bg: BG[0], t: 'Check driver hours rules', by: 'HK' },
        { id: 7, x: 0.62, y: 0.8, bg: BG[1], t: 'Quote two cross-dock partners', by: 'DO' },
      ];
      const links = [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 1, b: 4 }, { a: 4, b: 5 }, { a: 2, b: 5 }, { a: 4, b: 6 }, { a: 5, b: 7 }];
      let uid = 10;
      let tool = 'sel';
      let from = 0;
      const noteEl = (id) => notes.querySelector(`[data-id="${id}"]`);
      const mkNote = (d, pop) => {
        const e = document.createElement('div');
        e.className = `nt${pop ? ' pop' : ''}`;
        e.dataset.id = d.id;
        e.style.cssText = `--x:${d.x};--y:${d.y};--bg:${d.bg}`;
        e.innerHTML = `<span class="tx" contenteditable="true" spellcheck="false" data-ph="New idea"></span><span class="by">${d.by}</span>`;
        e.querySelector('.tx').textContent = d.t;
        notes.append(e);
        return e;
      };
      const route = (A, B) => {
        const [ax, ay, aw, ah] = [A.offsetLeft, A.offsetTop, A.offsetWidth, A.offsetHeight];
        const [bx, by, bw, bh] = [B.offsetLeft, B.offsetTop, B.offsetWidth, B.offsetHeight];
        const dx = bx + bw / 2 - (ax + aw / 2);
        const dy = by + bh / 2 - (ay + ah / 2);
        if (Math.abs(dx) * 0.7 > Math.abs(dy)) {
          const r = dx > 0;
          const p = [r ? ax + aw : ax, ay + ah / 2];
          const q = [r ? bx : bx + bw, by + bh / 2];
          const k = Math.abs(q[0] - p[0]) / 2;
          return `M${p[0]},${p[1]} C${p[0] + (r ? k : -k)},${p[1]} ${q[0] + (r ? -k : k)},${q[1]} ${q[0]},${q[1]}`;
        }
        const d = dy > 0;
        const p = [ax + aw / 2, d ? ay + ah : ay];
        const q = [bx + bw / 2, d ? by : by + bh];
        const k = Math.abs(q[1] - p[1]) / 2;
        return `M${p[0]},${p[1]} C${p[0]},${p[1] + (d ? k : -k)} ${q[0]},${q[1] + (d ? -k : k)} ${q[0]},${q[1]}`;
      };
      const redraw = () =>
        links.forEach((l) => {
          const A = noteEl(l.a);
          const B = noteEl(l.b);
          if (!A || !B) return;
          if (!l.p) {
            l.p = document.createElementNS(NS, 'path');
            l.p.setAttribute('pathLength', '1');
            l.p.setAttribute('marker-end', 'url(#ml-wb-arrow)');
            if (l.fresh) l.p.classList.add('draw');
            wires.append(l.p);
          }
          l.p.setAttribute('d', route(A, B));
        });
      data.forEach((d) => mkNote(d, false));
      requestAnimationFrame(redraw);
      if (typeof ResizeObserver !== 'undefined') new ResizeObserver(redraw).observe(plane);

      const setTool = (t) => {
        tool = t;
        from = 0;
        root.querySelectorAll('.tool').forEach((b) => {
          b.classList.toggle('on', b.dataset.t === t);
          b.setAttribute('aria-pressed', String(b.dataset.t === t));
        });
        board.classList.toggle('add', t === 'sticky');
      };
      root.querySelectorAll('.tool').forEach((b) => b.addEventListener('click', () => setTool(b.dataset.t)));
      const addAt = (x, y) => {
        const d = { id: ++uid, x: Math.max(0.02, Math.min(0.8, x)), y: Math.max(0.03, Math.min(0.8, y)), bg: BG[uid % BG.length], t: '', by: 'You' };
        data.push(d);
        const e = mkNote(d, true);
        return e;
      };
      const undo = () => {
        const d = data.filter((n) => n.id > 10).pop();
        if (!d) return;
        const e = noteEl(d.id);
        data.splice(data.indexOf(d), 1);
        for (let i = links.length - 1; i >= 0; i--)
          if (links[i].a === d.id || links[i].b === d.id) {
            links[i].p && links[i].p.remove();
            links.splice(i, 1);
          }
        if (e) {
          e.classList.remove('pop');
          e.classList.add('out');
          setTimeout(() => e.remove(), 270);
        }
      };
      $('[data-a="undo"]').addEventListener('click', undo);
      // pointer: drag a sticky (4px threshold keeps a click as a text edit), add with the sticky tool, connect with the connector tool
      notes.addEventListener('pointerdown', (e) => {
        const n = e.target.closest('.nt');
        if (!n) return;
        if (tool === 'link') {
          e.preventDefault();
          const id = +n.dataset.id;
          if (!from) from = id;
          else if (from !== id) {
            links.push({ a: from, b: id, fresh: 1 });
            redraw();
            setTool('sel');
          }
          return;
        }
        const x0 = e.clientX;
        const y0 = e.clientY;
        const l0 = n.offsetLeft;
        const t0 = n.offsetTop;
        let moved = false;
        const mv = (ev) => {
          if (!moved && Math.hypot(ev.clientX - x0, ev.clientY - y0) < 5) return;
          if (!moved) {
            moved = true;
            n.classList.add('drag');
            n.setPointerCapture(e.pointerId);
            n.querySelector('.tx').blur();
          }
          const s = scale();
          n.style.setProperty('--x', (l0 + (ev.clientX - x0) / s) / plane.offsetWidth);
          n.style.setProperty('--y', (t0 + (ev.clientY - y0) / s) / plane.offsetHeight);
          redraw();
        };
        const up = () => {
          n.removeEventListener('pointermove', mv);
          n.removeEventListener('pointerup', up);
          n.classList.remove('drag');
        };
        n.addEventListener('pointermove', mv);
        n.addEventListener('pointerup', up);
      });
      plane.addEventListener('pointerdown', (e) => {
        if (tool !== 'sticky' || e.target.closest('.nt')) return;
        const o = plane.getBoundingClientRect();
        const s = scale();
        const nn = addAt((e.clientX - o.left) / s / plane.offsetWidth - 0.05, (e.clientY - o.top) / s / plane.offsetHeight - 0.05);
        setTool('sel');
        setTimeout(() => nn.querySelector('.tx').focus({ preventScroll: true }), 30);
      });

      const park = (c, x, y) => (c.style.transform = `translate(${x}px,${y}px)`);
      const c1 = $('.c1');
      const c2 = $('.c2');
      const at = (fx, fy) => [fx * plane.offsetWidth, fy * plane.offsetHeight];
      park(c1, ...at(0.3, 0.38));
      park(c2, ...at(0.8, 0.3));
      // collaborators: Priya wanders between ideas, Daniel keeps dragging one sticky up and down (wires follow)
      (async () => {
        const pts = [[0.22, 0.3], [0.46, 0.36], [0.62, 0.42], [0.3, 0.74], [0.58, 0.72], [0.5, 0.2], [0.12, 0.42], [0.84, 0.62]];
        let i = 0;
        await wait(900);
        while (root.isConnected) {
          if (!root.dataset.paused) {
            i = (i + 1 + Math.floor(Math.random() * 3)) % pts.length;
            park(c1, ...at(pts[i][0], pts[i][1]));
          }
          await wait(2300 + Math.random() * 1200);
        }
      })();
      const slide = (n, tx, ty, ms) =>
        new Promise((res) => {
          const x0 = +n.style.getPropertyValue('--x');
          const y0 = +n.style.getPropertyValue('--y');
          const t0 = performance.now();
          c2.style.transition = 'none';
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) return void requestAnimationFrame(f);
            const k = Math.min(1, (t - t0) / ms);
            const e = 1 - Math.pow(1 - k, 3);
            n.style.setProperty('--x', x0 + (tx - x0) * e);
            n.style.setProperty('--y', y0 + (ty - y0) * e);
            redraw();
            park(c2, n.offsetLeft + 110, n.offsetTop + 22);
            if (k < 1) requestAnimationFrame(f);
            else {
              c2.style.transition = '';
              res();
            }
          };
          requestAnimationFrame(f);
        });
      (async () => {
        await wait(2600);
        let down = true;
        while (root.isConnected) {
          const n = noteEl(3);
          if (n && !root.dataset.paused) {
            park(c2, n.offsetLeft + 110, n.offsetTop + 22);
            await wait(1900);
            n.classList.add('drag');
            await slide(n, 0.7, down ? 0.34 : 0.14, 1400);
            n.classList.remove('drag');
            down = !down;
            park(c2, ...at(0.84, down ? 0.1 : 0.62));
          }
          await wait(5200);
        }
      })();

      const IDEAS = ['Check fuel costs per lane', 'Ask Hana about depot hours', 'Test night routes in Porto'];
      let ti = 0;
      cur.style.transform = 'translate(700px,500px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const flow = async () => {
            const tb = $('.tool[data-t="sticky"]');
            if (!(await aim(tb, 0.5, 0.5))) return;
            await tap(tb, () => tb.click());
            await wait(200);
            if (!(await aim(plane, 0.72, 0.64))) return;
            await tap();
            const nn = addAt(0.7, 0.58);
            setTool('sel');
            const id = +nn.dataset.id;
            nn.classList.add('typing');
            const tx = nn.querySelector('.tx');
            for (const ch of IDEAS[ti % IDEAS.length]) {
              if (!idle()) {
                nn.classList.remove('typing');
                return;
              }
              tx.textContent += ch;
              await wait(55 + Math.random() * 45);
            }
            nn.classList.remove('typing');
            ti++;
            await wait(350);
            links.push({ a: 5, b: id, fresh: 1 });
            redraw();
            await wait(3000);
            const un = $('[data-a="undo"]');
            if (!(await aim(un, 0.5, 0.5))) return;
            await tap(un, () => un.click());
          };
          await flow();
          await wait(2200);
        }
      })();
    },
    prompt: `Build a collaborative whiteboard screen, full viewport (height: 100dvh): a slim tool rail on the left and an infinite-feeling dotted board filled with sticky notes, connector arrows and live collaborator cursors.

Layout: CSS grid, columns 64px and minmax(0, 1fr), under a 54px top bar (sticky-note logo tile, breadcrumb "Atlas Freight / Q4 route planning", a green "3 here now" dot, an avatar stack, a primary Share button). The rail is white with a hairline border: 42px icon buttons for Select, Sticky note, Text, Shape, Connector and Pen (aria-pressed, the active one on a pale accent tile), a divider and Undo. The board scrolls on its own, has a faint radial-gradient dot grid (24px) on a very light blue-grey, and a floating zoom pill (minus, 100%, plus) at the bottom left. The plane inside is min 760x540 and fills the board.

Stickies: absolutely positioned with left and top set from CSS custom properties --x and --y (fractions of the plane, so the layout scales from 1024 to 1920 wide), 176px wide, min 116px tall, 12px radius, soft layered shadow, a tint from a five-step blue ramp (pale accent, white, a mid blue tint, blue-grey, accent line), 15px semibold editable text (contenteditable) and a small author chip. Dragging uses pointer events with a 5px threshold (so a click edits the text), setPointerCapture, and writes --x and --y back as fractions. Connectors are one SVG layer: every link is a cubic Bezier path from the facing edge of one note to the facing edge of the other (horizontal or vertical depending on the dominant axis), 2px stroke in a lighter accent, with an arrow marker; all paths are recomputed from offsetLeft, offsetTop, offsetWidth and offsetHeight on every drag frame so they follow the notes. A new link draws itself with pathLength="1", stroke-dasharray 1 and a dashoffset from 1 to 0 over 800ms.

Tools: with Sticky selected the board shows a crosshair and a click drops a note there with a pop (scale .6 to 1 with a slight overshoot, 600ms) and focuses it; with Connector selected click one note then another to link them; Undo fades the last note out and removes its links.

Collaborators: two absolutely positioned cursors with a name pill each (use your accent color and a dark neutral). One wanders between ideas by transitioning transform over 1.7s with a long ease-out curve every 2 to 3.5 seconds; the other grabs a sticky and drags it up and down, moving the note with transform-free left and top updates so the wires follow. Pause both when the board is offscreen and drop the transition under prefers-reduced-motion.

Accessibility: rail buttons have aria-labels and aria-pressed, notes are focusable text areas, focus-visible rings. Below 760px hide the rail and let the board pan. Plain HTML, CSS and JS, no libraries; React-friendly structure (ToolRail, Board, StickyNote, ConnectorLayer, CollaboratorCursor).`,
  });

  // ---------------------------------------------------------------- 6. spreadsheet
  ML.add({
    id: 'app-editors-sheet',
    cat: 'app-editors',
    title: 'Spreadsheet with chart',
    sub: 'Edit a number, the SUM and chart follow',
    html: `
<div class="app">
  <header class="bar">
    <span class="logo">${I(P.sigma, 16)}</span>
    <p class="crumb">Meridian Foods<i>/</i><b>Q4 channel budget</b></p>
    <span class="chip">Autosaved</span>
    <span class="sp"></span>
    <span class="avs" aria-label="Collaborators"><i>HK</i><i>LO</i></span>
    <button class="btn pri" type="button">${I(P.share, 15)}Share</button>
  </header>
  <div class="tb" role="toolbar" aria-label="Formatting">
    <button class="ib" type="button" aria-label="Undo">${I(P.undo, 16)}</button>
    <button class="ib" type="button" aria-label="Redo">${I(P.redo, 16)}</button>
    <i class="vr"></i>
    <button class="ib mono on" type="button" aria-label="Currency">$</button>
    <button class="ib mono" type="button" aria-label="Percent">%</button>
    <i class="vr"></i>
    <button class="ib" type="button" aria-label="Bold">${I(P.bold, 16)}</button>
    <button class="ib" type="button" aria-label="Italic">${I(P.italic, 16)}</button>
    <i class="vr"></i>
    <button class="ib" type="button" aria-label="Align left">${I(P.text, 16)}</button>
    <button class="ib" type="button" aria-label="Align center">${I(P.textC, 16)}</button>
    <button class="ib" type="button" aria-label="Align right">${I(P.textR, 16)}</button>
  </div>
  <div class="fx">
    <span class="nb" aria-label="Selected cell">C3</span>
    <span class="fi">${I(P.sigma, 15)}</span>
    <div class="fv" aria-label="Formula bar"></div>
  </div>
  <div class="body">
    <section class="sheet" aria-label="Spreadsheet">
      <div class="gs"><div class="g" role="grid"></div></div>
      <div class="stabs"><span class="on">Q4 budget</span><span>Forecast</span><span>Notes</span><button type="button" aria-label="Add sheet">${I(P.plus, 14)}</button></div>
    </section>
    <aside class="side" aria-label="Chart">
      <p class="k">Q4 spend</p>
      <p class="big">$111,000</p>
      <span class="dl">+4.2% vs Q3</span>
      <div class="plot"><div class="gl"><i></i><i></i><i></i><i></i></div><div class="cls"></div></div>
      <div class="xs"></div>
      <ul class="st"></ul>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${ED}
.d .tb{display:flex;flex:none;align-items:center;gap:2px;height:42px;padding:0 14px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tb .ib{width:30px;height:30px;border-radius:8px}
.d .tb .mono{font:600 13px var(--ml-mono)}
.d .tb .vr{width:1px;height:18px;margin:0 8px;background:var(--ml-line)}
.d .fx{display:flex;flex:none;align-items:center;gap:10px;height:44px;padding:0 14px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .nb{display:grid;place-items:center;width:66px;height:30px;border-radius:8px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 12.5px var(--ml-mono);color:var(--ml-ink)}
.d .fi{color:var(--ml-accent)}
.d .fv{flex:1;min-width:0;overflow:hidden;font:500 13.5px var(--ml-mono);color:var(--ml-ink);white-space:nowrap;text-overflow:ellipsis}
.d .fv.typing::after{content:"";display:inline-block;width:1.5px;height:1.1em;margin-left:1px;vertical-align:-.2em;background:var(--ml-accent);animation:ed-sh-blink 1s steps(1) infinite}
.d .body{grid-template-columns:minmax(0,1fr) 316px}
.d .sheet{display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--ml-bg)}
.d .gs{flex:1;min-height:0;overflow:auto hidden;scrollbar-width:thin}
.d .g{display:grid;grid-template-columns:44px minmax(120px,1.4fr) repeat(4,minmax(86px,1fr));grid-template-rows:28px;grid-auto-rows:40px;min-width:600px}
.d .g > *{border-right:1px solid var(--ml-line);border-bottom:1px solid var(--ml-line)}
.d .hc,.d .rn{display:grid;place-items:center;background:var(--ml-surface);font-size:11.5px;font-weight:600;color:var(--ml-muted);transition:background-color .25s ease,color .25s ease}
.d .hc.on,.d .rn.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .c{position:relative;display:flex;align-items:center;min-width:0;padding:0 12px;font-size:13.5px;color:var(--ml-ink-2)}
.d .c.lbl{font-weight:600;color:var(--ml-ink)}
.d .c.hd{font-size:11.5px;font-weight:600;letter-spacing:.05em;text-transform:uppercase;color:var(--ml-muted);justify-content:flex-end}
.d .c.hd.lbl{justify-content:flex-start}
.d .c input{width:100%;height:100%;padding:0;border:0;background:none;text-align:right;font:inherit;font-variant-numeric:tabular-nums;color:var(--ml-ink);outline:0;cursor:cell}
.d .c.calc input{font-weight:600}
.d .c.tot{background:rgba(244,247,252,.7)}
.d .c.sel{z-index:2;box-shadow:inset 0 0 0 2px var(--ml-accent)}
.d .c.sel::after{content:"";position:absolute;right:-4px;bottom:-4px;width:8px;height:8px;border-radius:2px;background:var(--ml-accent);box-shadow:0 0 0 2px #fff}
.d .c.edit{background:#fff;box-shadow:inset 0 0 0 2px var(--ml-accent),0 6px 18px rgba(255,68,51,.18)}
.d .c.flash{animation:ed-sh-flash 1300ms ease-out}
.d .stabs{display:flex;flex:none;align-items:center;gap:4px;height:40px;padding:0 12px;background:var(--ml-surface);border-top:1px solid var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-muted)}
.d .stabs span{padding:6px 12px;border-radius:8px}
.d .stabs .on{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink)}
.d .stabs button{display:grid;place-items:center;width:28px;height:28px;border:0;border-radius:8px;background:none;color:var(--ml-muted);cursor:pointer}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 18px 16px;background:var(--ml-bg);border-left:1px solid var(--ml-line);overflow:hidden}
.d .side .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .big{margin-top:6px;font-size:30px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .dl{align-self:flex-start;margin-top:10px;padding:3px 8px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:600;color:#12893C}
.d .plot{position:relative;flex:1;min-height:150px;margin-top:20px}
.d .gl{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:space-between}
.d .gl i{display:block;height:1px;background:var(--ml-line)}
.d .cls{position:absolute;inset:0;display:flex;gap:10px}
.d .cl{position:relative;flex:1}
.d .cl .bar2{position:absolute;left:14%;right:14%;bottom:0;height:100%;border-radius:8px 8px 3px 3px;background:var(--ml-accent-line);transform:scaleY(var(--h,0));transform-origin:50% 100%;transition:transform 900ms var(--ml-spring),background-color .3s ease}
.d .cl.hot .bar2{background:var(--ml-grad)}
.d .cl .val{position:absolute;left:0;right:0;bottom:0;text-align:center;font:600 11.5px var(--ml-mono);color:var(--ml-ink-2);transform:translateY(calc(var(--h,0) * var(--ph,200) * -1px - 7px));transition:transform 900ms var(--ml-spring)}
.d .xs{display:flex;gap:10px;margin-top:9px;font-size:11.5px;color:var(--ml-muted)}
.d .xs span{flex:1;text-align:center;transition:color .3s ease,font-weight .3s ease}
.d .xs span.hot{color:var(--ml-accent-ink);font-weight:650}
.d .st{display:flex;flex-direction:column;margin-top:14px;list-style:none;border-top:1px solid var(--ml-line)}
.d .st li{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--ml-line);font-size:13px;color:var(--ml-muted)}
.d .st li:last-child{border-bottom:0}
.d .st b{font-weight:600;color:var(--ml-ink);font-variant-numeric:tabular-nums}
@keyframes ed-sh-flash{0%{background-color:var(--ml-accent-line)}100%{background-color:transparent}}
@keyframes ed-sh-blink{50%{opacity:0}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .tb,.d .avs,.d .chip{display:none}
}
@media (prefers-reduced-motion: reduce){.d .fv.typing::after{animation:none}}`,
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
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const to = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !to(el, fx, fy));
        await wait(760);
        return idle();
      };
      const tap = async (el, fn) => {
        cur.classList.add('press');
        el && el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el && el.classList.remove('press');
        if (fn) fn();
      };

      const ROWS = ['Search', 'Social', 'Email', 'Referral', 'Events'];
      const MONTHS = ['Oct', 'Nov', 'Dec'];
      const v = [[12400, 14100, 15800], [8200, 9100, 9900], [4300, 4700, 5200], [3100, 3600, 3900], [6500, 2400, 7800]];
      const base = v.map((r) => r.slice());
      const money = (n) => `$${Math.round(n).toLocaleString('en-US')}`;
      const k = (n) => `$${(n / 1000).toFixed(1)}k`;
      const grid = $('.g');
      const cells = {};
      const LET = ['A', 'B', 'C', 'D', 'E'];
      const make = (r, c, cls) => {
        const d = document.createElement('div');
        d.className = `c ${cls || ''}`;
        d.dataset.r = r;
        d.dataset.c = c;
        grid.append(d);
        return d;
      };
      const corner = document.createElement('div');
      corner.className = 'hc';
      grid.append(corner);
      LET.forEach((l, i) => {
        const h = document.createElement('div');
        h.className = 'hc';
        h.dataset.c = i;
        h.textContent = l;
        grid.append(h);
      });
      const rn = [];
      const labelRow = (r) => {
        const n = document.createElement('div');
        n.className = 'rn';
        n.textContent = r;
        grid.append(n);
        rn[r] = n;
      };
      labelRow(1);
      ['Channel', 'Oct', 'Nov', 'Dec', 'Q4 total'].forEach((t, i) => {
        const d = make(1, i, `hd${i ? '' : ' lbl'}`);
        d.textContent = t;
      });
      for (let r = 2; r <= 7; r++) {
        labelRow(r);
        const tot = r === 7;
        const a = make(r, 0, 'lbl');
        a.textContent = tot ? 'Total' : ROWS[r - 2];
        for (let c = 1; c <= 4; c++) {
          const calc = tot || c === 4;
          const d = make(r, c, `${calc ? 'calc' : ''}${tot ? ' tot' : ''}`);
          const inp = document.createElement('input');
          inp.setAttribute('aria-label', `${LET[c]}${r}`);
          inp.inputMode = 'numeric';
          inp.autocomplete = 'off';
          if (calc) inp.readOnly = true;
          d.append(inp);
          cells[`${r},${c}`] = d;
        }
      }
      for (let r = 8; r <= 24; r++) {
        labelRow(r);
        for (let c = 0; c < 5; c++) make(r, c, '');
      }
      const inp = (r, c) => cells[`${r},${c}`].querySelector('input');
      const sum = (a) => a.reduce((x, y) => x + y, 0);
      const colsEl = $('.cls');
      const names = $('.xs');
      const plot = $('.plot');
      const setPh = () => plot.style.setProperty('--ph', plot.clientHeight);
      if (typeof ResizeObserver !== 'undefined') new ResizeObserver(setPh).observe(plot);
      setPh();
      ROWS.forEach((n, i) => {
        const c = document.createElement('div');
        c.className = 'cl';
        c.innerHTML = '<i class="bar2"></i><b class="val"></b>';
        colsEl.append(c);
        const s = document.createElement('span');
        s.textContent = n;
        names.append(s);
      });
      let hot = 1;
      let last = 0;
      const calc = (flash) => {
        const out = {};
        ROWS.forEach((_, i) => {
          out[`${i + 2},4`] = sum(v[i]);
        });
        [0, 1, 2].forEach((c) => {
          out[`7,${c + 1}`] = sum(v.map((r) => r[c]));
        });
        const grand = sum(v.map(sum));
        out['7,4'] = grand;
        Object.entries(out).forEach(([key, n]) => {
          const el = inp(...key.split(',').map(Number));
          const was = el.dataset.raw;
          el.dataset.raw = n;
          el.value = money(n);
          if (flash && was != null && +was !== n) {
            const p = el.parentElement;
            p.classList.remove('flash');
            void p.offsetWidth;
            p.classList.add('flash');
          }
        });
        v.forEach((r, i) => {
          const el = colsEl.children[i];
          const t = sum(r);
          el.style.setProperty('--h', Math.min(1, t / 60000));
          el.querySelector('.val').textContent = k(t);
          el.classList.toggle('hot', i === hot);
          names.children[i].classList.toggle('hot', i === hot);
        });
        const tops = v.map(sum);
        const top = tops.indexOf(Math.max(...tops));
        const mo = [0, 1, 2].map((c) => sum(v.map((r) => r[c])));
        $('.st').innerHTML = `<li>Top channel<b>${ROWS[top]} - ${Math.round((tops[top] / grand) * 100)}%</b></li><li>Biggest month<b>${MONTHS[mo.indexOf(Math.max(...mo))]} - ${money(Math.max(...mo))}</b></li><li>Average per month<b>${money(grand / 3)}</b></li>`;
        const big = $('.big');
        const from = last;
        const t0 = performance.now();
        last = grand;
        const step = (t) => {
          if (!root.isConnected) return;
          const kk = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 700);
          big.textContent = money(from + (grand - from) * (1 - Math.pow(1 - kk, 3)));
          if (kk < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      ROWS.forEach((_, i) => [0, 1, 2].forEach((c) => (inp(i + 2, c + 1).value = money(v[i][c]))));
      last = sum(v.map(sum));
      calc(false);
      $('.big').textContent = money(last);

      const nb = $('.nb');
      const fv = $('.fv');
      let selEl = null;
      const FX = (r, c) => (r === 7 ? (c === 4 ? '=SUM(E2:E6)' : `=SUM(${LET[c]}2:${LET[c]}6)`) : c === 4 ? `=SUM(B${r}:D${r})` : String(v[r - 2][c - 1]));
      const select = (r, c) => {
        if (selEl) selEl.classList.remove('sel', 'edit');
        selEl = cells[`${r},${c}`];
        selEl.classList.add('sel');
        nb.textContent = `${LET[c]}${r}`;
        fv.classList.remove('typing');
        fv.textContent = FX(r, c);
        root.querySelectorAll('.hc').forEach((h) => h.classList.toggle('on', +h.dataset.c === c));
        rn.forEach((n, i) => n && n.classList.toggle('on', i === r));
        if (r >= 2 && r <= 6) hot = r - 2;
        colsEl.querySelectorAll('.cl').forEach((e, i) => e.classList.toggle('hot', i === hot));
        [...names.children].forEach((e, i) => e.classList.toggle('hot', i === hot));
      };
      const commit = (r, c, text) => {
        const n = Math.max(0, Math.round(parseFloat(String(text).replace(/[^0-9.]/g, '')) || 0));
        v[r - 2][c - 1] = n;
        inp(r, c).value = money(n);
        calc(true);
      };
      // real editing: click selects, typing replaces, Enter commits and moves down, the totals and the chart recalc live
      Object.entries(cells).forEach(([key, el]) => {
        const [r, c] = key.split(',').map(Number);
        const i = el.querySelector('input');
        i.addEventListener('focus', () => {
          select(r, c);
          if (!i.readOnly) {
            i.value = String(v[r - 2][c - 1]);
            el.classList.add('edit');
            i.select();
          }
        });
        i.addEventListener('input', () => {
          if (i.readOnly) return;
          fv.textContent = i.value;
          const n = Math.max(0, parseFloat(i.value.replace(/[^0-9.]/g, '')) || 0);
          v[r - 2][c - 1] = n;
          calc(false);
        });
        i.addEventListener('blur', () => {
          if (i.readOnly) return;
          el.classList.remove('edit');
          i.value = money(v[r - 2][c - 1]);
        });
        i.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            const nr = r < 6 ? r + 1 : 2;
            (c < 4 ? inp(nr, c) : inp(r, c)).focus({ preventScroll: true });
          }
        });
      });
      select(3, 2);

      const typeCell = async (r, c, text) => {
        const el = cells[`${r},${c}`];
        el.classList.add('edit');
        const i = inp(r, c);
        i.value = '';
        fv.classList.add('typing');
        fv.textContent = '';
        for (const ch of text) {
          if (!idle()) return false;
          i.value += ch;
          fv.textContent += ch;
          await wait(110 + Math.random() * 60);
        }
        return true;
      };
      let flip = false;
      cur.style.transform = 'translate(620px,500px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const flow = async () => {
            const edits = [[3, 2, flip ? 9100 : 14200], [6, 2, flip ? 2400 : 8800]];
            for (const [r, c, val] of edits) {
              const el = cells[`${r},${c}`];
              if (!(await aim(el, 0.6, 0.5))) return;
              await tap(null, () => select(r, c));
              await wait(450);
              if (!(await typeCell(r, c, String(val)))) return;
              await wait(350);
              commit(r, c, val);
              select(Math.min(r + 1, 6), c);
              await wait(1700);
            }
            const tot = cells['7,4'];
            if (!(await aim(tot, 0.7, 0.5))) return;
            await tap(null, () => select(7, 4));
            await wait(2600);
            flip = !flip;
          };
          await flow();
          fv.classList.remove('typing');
          Object.values(cells).forEach((c) => c.classList.remove('edit'));
          await wait(1200);
        }
      })();
    },
    prompt: `Build a spreadsheet screen with a formula bar, a live grid and a chart that follows the numbers, full viewport (height: 100dvh).

Layout (a flex column): a 54px app bar (logo tile, breadcrumb "Meridian Foods / Q4 channel budget", an Autosaved chip, collaborator avatars, a primary Share button), a 42px formatting toolbar (undo, redo, currency, percent, bold, italic, three alignment buttons, with 1px separators), a 44px formula row (a 66px name box in mono type showing the active cell like C3, a sigma fx icon, and the formula text in mono), then a grid with columns minmax(0, 1fr) and 316px: the sheet on the left, a chart panel on the right. The sheet has a 40px tab bar at the bottom (Q4 budget, Forecast, Notes, an add button).

Grid: CSS grid with columns 44px (row numbers), a flexible label column and four numeric columns (Oct, Nov, Dec, Q4 total), a 28px header row of column letters, 40px rows, 1px hairlines. Data is five channels (Search, Social, Email, Referral, Events) with a Total row; keep the totals true: row totals are =SUM(B2:D2) style, column totals =SUM(B2:B6), the grand total =SUM(E2:E6). Continue the grid with empty rows so it fills the screen height. Numeric cells are borderless inputs, right aligned with tabular numerals; computed cells are read-only and semibold; the total row has a faint tint. The active cell has a 2px accent inset ring and a small fill-handle square; its column letter and row number turn accent. Selecting a cell updates the name box and the formula bar (the raw number or the SUM formula).

Editing: focusing a numeric cell shows its raw number selected, typing recalculates the row total, the column total, the grand total and the chart on every input event; blur formats as $12,400; Enter commits and moves down. Every cell whose value changed flashes (background from the accent line colour to transparent over 1.3s).

Chart panel: label, a 30px grand total that counts up over 700ms, a green delta pill, a bar chart of the five channel totals (a fixed 0 to 60k axis with hairline gridlines, bars drawn at full height and scaled with transform: scaleY from the bottom, 900ms critically damped spring, value labels that ride on top via a translateY computed from the bar value, the active row's bar in the accent gradient and the others in a pale accent), channel names underneath and three stat rows (top channel with its share, biggest month, monthly average).

Accessibility: inputs have aria-labels with their cell address, focus-visible rings, prefers-reduced-motion drops the caret blink. Below 760px hide the chart and toolbar and let the grid scroll sideways. Plain HTML, CSS and JS, no libraries; React-friendly structure (Toolbar, FormulaBar, Grid, Cell, ChartPanel).`,
  });

  // ---------------------------------------------------------------- 7. slide editor
  const SL_SW = ['var(--ml-accent)', 'var(--ml-accent-ink)', 'var(--ml-accent-2)', 'var(--ml-ink)', 'var(--ml-muted)'];
  ML.add({
    id: 'app-editors-slides',
    cat: 'app-editors',
    title: 'Slide editor',
    sub: 'Thumbnails reorder, the title edits live',
    html: `
<div class="app">
  <header class="bar">
    <span class="logo">${I(P.present, 16)}</span>
    <p class="crumb">Brightline Dental<i>/</i><b>Q4 review</b></p>
    <span class="chip">5 slides</span>
    <span class="sp"></span>
    <span class="avs" aria-label="Collaborators"><i>AL</i><i>TK</i></span>
    <button class="btn" type="button">${I(P.play, 14)}Present</button>
    <button class="btn pri" type="button">${I(P.share, 15)}Share</button>
  </header>
  <div class="body">
    <aside class="rail" aria-label="Slides">
      <button class="nw" type="button">${I(P.plus, 15)}New slide</button>
      <div class="ths"></div>
    </aside>
    <main class="cv">
      <div class="sl main" aria-label="Slide canvas"></div>
      <section class="nbox"><p class="mk">Speaker notes</p><ul class="snt"></ul></section>
    </main>
    <aside class="insp" aria-label="Inspector">
      <div class="ih"><span class="ti">${I(P.layers, 17)}</span><div><p class="k">Slide <span class="num">2</span></p><b class="it">Stat</b></div></div>
      <p class="mk">Layout</p>
      <div class="lays">${[['cover', 'Cover'], ['stat', 'Stat'], ['list', 'List'], ['chart', 'Chart'], ['next', 'Next steps']].map(([k, n]) => `<button class="ly${k === 'stat' ? ' on' : ''}" type="button" data-k="${k}">${n}</button>`).join('')}</div>
      <p class="mk">Title size</p>
      <div class="seg sz" style="--n:3;--i:1" role="group" aria-label="Title size"><span class="thumb" aria-hidden="true"></span><button type="button" data-v="0.82">S</button><button type="button" class="on" data-v="1">M</button><button type="button" data-v="1.2">L</button></div>
      <p class="mk">Alignment</p>
      <div class="seg al" style="--n:3;--i:0" role="group" aria-label="Alignment"><span class="thumb" aria-hidden="true"></span><button type="button" class="on" data-v="left" aria-label="Left">${I(P.text, 15)}</button><button type="button" data-v="center" aria-label="Center">${I(P.textC, 15)}</button><button type="button" data-v="right" aria-label="Right">${I(P.textR, 15)}</button></div>
      <p class="mk">Accent</p>
      <div class="sw">${SL_SW.map((c, i) => `<button type="button" class="s${i ? '' : ' on'}" data-i="${i}" style="--c:${c}" aria-label="Accent ${i + 1}"></button>`).join('')}</div>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${ED}
.d .body{grid-template-columns:200px minmax(0,1fr) 264px}
.d .rail{display:flex;flex-direction:column;gap:10px;min-height:0;padding:12px;background:var(--ml-bg);border-right:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:none}
.d .nw{display:flex;align-items:center;justify-content:center;gap:7px;flex:none;height:36px;border:0;border-radius:10px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:13px;font-weight:600;color:var(--ml-accent-ink);cursor:pointer;transition:transform 90ms ease-out}
.d .ths{position:relative;display:flex;flex-direction:column;gap:10px}
.d .th{position:relative;display:flex;align-items:flex-start;gap:8px;padding:0;border:0;background:none;text-align:left;cursor:grab;touch-action:none}
.d .th .n{flex:none;width:14px;padding-top:2px;font:600 11.5px var(--ml-mono);color:var(--ml-muted);text-align:right}
.d .th .sl{flex:1;min-width:0;border-radius:7px;outline:1px solid var(--ml-line);outline-offset:-1px;pointer-events:none;transition:box-shadow .25s ease}
.d .th.on .sl{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .th.on .n{color:var(--ml-accent-ink)}
.d .th.lift{z-index:5;cursor:grabbing}
.d .th.lift .sl{box-shadow:var(--ml-shadow-lg)}
.d .cv{display:flex;flex-direction:column;gap:16px;min-width:0;min-height:0;padding:24px 28px;overflow-y:auto;scrollbar-width:thin}
.d .sl{container:sl / inline-size;position:relative;aspect-ratio:16 / 9;overflow:hidden;border-radius:10px;background:#fff;color:var(--ml-ink)}
.d .sl.main{flex:none;width:100%;max-width:900px;margin:0 auto;border-radius:14px;box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg)}
.d .sl.swap .sc{animation:ed-sl-in 480ms var(--ml-spring) both}
.d .sc{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;padding:6cqw 7cqw;text-align:var(--ta,left)}
.d .sc .st{font-size:calc(var(--ts,1) * 6.2cqw);line-height:1.08;font-weight:650;letter-spacing:-.035em;outline:0}
.d .main .st{border-radius:1cqw;cursor:text;transition:background-color .2s ease}
.d .main .st:hover{background:rgba(255,68,51,.07)}
.d .main .st:focus,.d .main .st.typing{background:rgba(255,68,51,.1);box-shadow:0 0 0 .3cqw var(--ml-accent)}
.d .ey{margin-bottom:1.6cqw;font-size:1.7cqw;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--sa,var(--ml-accent))}
.d .sub{margin-top:1.8cqw;font-size:2.3cqw;line-height:1.4;color:var(--ml-muted)}
.d .cover{color:#fff;background:radial-gradient(80% 110% at 95% 0%,rgba(255,255,255,.3),transparent 60%),var(--sa,var(--ml-accent))}
.d .cover .ey,.d .cover .sub{color:rgba(255,255,255,.82)}
.d .orb{position:absolute;right:-6cqw;bottom:-12cqw;width:34cqw;height:34cqw;border-radius:50%;background:rgba(255,255,255,.14);box-shadow:inset 0 0 0 .3cqw rgba(255,255,255,.3)}
.d .stat .val{margin-top:1.4cqw;font-size:calc(var(--ts,1) * 15cqw);line-height:1;font-weight:650;letter-spacing:-.05em;color:var(--sa,var(--ml-accent))}
.d .sbars{position:absolute;right:7cqw;bottom:6cqw;display:flex;align-items:flex-end;gap:1.3cqw;width:22cqw;height:26cqw}
.d .sbars i{flex:1;height:var(--h);border-radius:.8cqw .8cqw .2cqw .2cqw;background:var(--sa,var(--ml-accent));opacity:.85}
.d .list ul,.d .next ol{margin-top:3cqw;list-style:none;display:flex;flex-direction:column;gap:1.8cqw}
.d .list li{display:flex;align-items:center;gap:1.6cqw;font-size:2.9cqw;color:var(--ml-ink-2)}
.d .list li::before{content:"";flex:none;width:1.3cqw;height:1.3cqw;border-radius:50%;background:var(--sa,var(--ml-accent))}
.d .next li{display:flex;align-items:center;gap:2cqw;font-size:2.8cqw;color:var(--ml-ink-2)}
.d .next li b{display:grid;flex:none;place-items:center;width:5cqw;height:5cqw;border-radius:50%;background:var(--sa,var(--ml-accent));font-size:2.4cqw;font-weight:650;color:#fff}
.d .chart .sub{margin-top:1cqw}
.d .cbars{display:flex;align-items:flex-end;gap:1.6cqw;height:22cqw;margin-top:3cqw}
.d .cbars i{flex:1;height:var(--h);border-radius:.9cqw .9cqw .2cqw .2cqw;background:var(--sa,var(--ml-accent));opacity:.28}
.d .cbars i:nth-child(n+5){opacity:.9}
.d .nbox{flex:1;min-height:90px;padding:16px 20px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .nbox .mk{padding:0 0 8px}
.d .snt{display:flex;flex-direction:column;gap:8px;max-width:660px;list-style:none;font-size:14px;line-height:1.55;color:var(--ml-ink-2)}
.d .snt li{display:flex;gap:10px}
.d .snt li::before{content:"";flex:none;width:5px;height:5px;margin-top:9px;border-radius:50%;background:var(--ml-accent-line)}
.d .insp{display:flex;flex-direction:column;min-height:0;padding:16px;background:var(--ml-bg);border-left:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:thin}
.d .ih{display:flex;align-items:center;gap:11px;padding-bottom:12px;border-bottom:1px solid var(--ml-line)}
.d .ti{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ih .k{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .ih b{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .insp .mk{padding:18px 0 8px}
.d .lays{display:flex;flex-wrap:wrap;gap:6px}
.d .ly{height:30px;padding:0 12px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .ly.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .insp .seg{display:grid;width:100%}
.d .sw{display:flex;gap:9px}
.d .sw .s{width:30px;height:30px;border:0;border-radius:50%;background:var(--c);box-shadow:inset 0 0 0 1px rgba(35,15,10,.12);cursor:pointer;transition:transform 90ms ease-out}
.d .sw .s.on{box-shadow:inset 0 0 0 1px rgba(35,15,10,.12),0 0 0 2px #fff,0 0 0 4px var(--ml-accent)}
@keyframes ed-sl-in{from{opacity:0;transform:translateY(8px) scale(.99)}to{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .rail,.d .insp,.d .avs,.d .chip,.d .bar .btn:not(.pri){display:none}
  .d .cv{padding:16px}
}
@media (prefers-reduced-motion: reduce){.d .sl.swap .sc{animation:none}}`,
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
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const scale = () => root.getBoundingClientRect().width / root.offsetWidth || 1;
      const to = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = scale();
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !to(el, fx, fy));
        await wait(760);
        return idle();
      };
      const tap = async (el, fn) => {
        cur.classList.add('press');
        el && el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el && el.classList.remove('press');
        if (fn) fn();
      };

      const esc = (t) => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const SW = ['var(--ml-accent)', 'var(--ml-accent-ink)', 'var(--ml-accent-2)', 'var(--ml-ink)', 'var(--ml-muted)'];
      const mkS = (id, kind, title, sub, note) => ({ id, kind, title, sub, note, val: '+18%', items: ['Online booking link in every email', 'Saturday hygiene slots', 'Reminder texts 48 h before'], next: ['Open a second chair on Thursdays', 'Launch the patient referral reward', 'Review pricing with Elena'], bars: [38, 44, 41, 52, 60, 66, 63, 78], size: 1, align: 'left', hue: 0 });
      let slides = [
        mkS(1, 'cover', 'Q4 review', 'Brightline Dental - Wed 14 October 2026', 'Welcome everyone and thank the front desk team.|Two minutes on results, then the plan for the next quarter.|Questions are welcome at the end.'),
        mkS(2, 'stat', 'Bookings up on Q3', '412 new patients since 1 July', 'Lead with the number, then pause.|Online booking drove most of the lift.|Mention the new Saturday hygiene slots.'),
        mkS(3, 'list', 'What worked', '', 'Three things we will keep doing.|Ask Priya to share the reminder text results.|Keep this slide under one minute.'),
        mkS(4, 'chart', 'Bookings by week', 'Weeks 1 to 8 of Q4, new patients', 'Point at week 5, when the email sequence went live.|The dip in week 3 was the public holiday.|Bookings held above 60 a week since.'),
        mkS(5, 'next', 'Next quarter', '', 'Owners and dates go in the follow-up email.|Elena confirms pricing by Friday 30 October.|End with the referral reward launch.'),
      ];
      const KN = { cover: 'Cover', stat: 'Stat', list: 'List', chart: 'Chart', next: 'Next steps' };
      const rend = (s, edit) => {
        const t = `<h2 class="st"${edit ? ' contenteditable="true" spellcheck="false" aria-label="Slide title"' : ''}>${esc(s.title)}</h2>`;
        const k = s.kind;
        if (k === 'cover') return `<div class="sc cover"><p class="ey">Brightline Dental</p>${t}<p class="sub">${esc(s.sub || 'Quarterly review')}</p><i class="orb"></i></div>`;
        if (k === 'stat') return `<div class="sc stat"><p class="ey">Patients</p>${t}<p class="val">${s.val}</p><p class="sub">${esc(s.sub || '')}</p><div class="sbars">${s.bars.slice(2).map((h) => `<i style="--h:${h}%"></i>`).join('')}</div></div>`;
        if (k === 'list') return `<div class="sc list">${t}<ul>${s.items.map((i) => `<li>${i}</li>`).join('')}</ul></div>`;
        if (k === 'chart') return `<div class="sc chart">${t}<p class="sub">${esc(s.sub || '')}</p><div class="cbars">${s.bars.map((h) => `<i style="--h:${h}%"></i>`).join('')}</div></div>`;
        return `<div class="sc next">${t}<ol>${s.next.map((i, n) => `<li><b>${n + 1}</b>${i}</li>`).join('')}</ol></div>`;
      };
      const vars = (el, s) => {
        el.style.setProperty('--ts', s.size);
        el.style.setProperty('--ta', s.align);
        el.style.setProperty('--sa', SW[s.hue]);
      };
      const ths = $('.ths');
      const main = $('.main');
      let sel = 2;
      const by = (id) => slides.find((s) => s.id === id);
      const drawThumb = (s) => {
        const t = ths.querySelector(`[data-id="${s.id}"] .sl`);
        if (!t) return;
        vars(t, s);
        t.innerHTML = rend(s, false);
      };
      const drawMain = (swap) => {
        const s = by(sel);
        vars(main, s);
        main.innerHTML = rend(s, true);
        $('.snt').innerHTML = s.note.split('|').map((x) => `<li>${esc(x)}</li>`).join('');
        $('.num').textContent = slides.indexOf(s) + 1;
        $('.it').textContent = KN[s.kind];
        root.querySelectorAll('.ly').forEach((b) => b.classList.toggle('on', b.dataset.k === s.kind));
        const sz = $('.sz');
        const szi = ['0.82', '1', '1.2'].indexOf(String(s.size));
        sz.style.setProperty('--i', szi < 0 ? 1 : szi);
        sz.querySelectorAll('button').forEach((b, i) => b.classList.toggle('on', i === (szi < 0 ? 1 : szi)));
        const al = $('.al');
        const ai = ['left', 'center', 'right'].indexOf(s.align);
        al.style.setProperty('--i', ai);
        al.querySelectorAll('button').forEach((b, i) => b.classList.toggle('on', i === ai));
        root.querySelectorAll('.sw .s').forEach((b, i) => b.classList.toggle('on', i === s.hue));
        if (swap) {
          main.classList.remove('swap');
          void main.offsetWidth;
          main.classList.add('swap');
        }
      };
      const numbers = () => [...ths.children].forEach((t, i) => (t.querySelector('.n').textContent = i + 1));
      const build = () => {
        ths.innerHTML = '';
        slides.forEach((s, i) => {
          const b = document.createElement('button');
          b.type = 'button';
          b.className = `th${s.id === sel ? ' on' : ''}`;
          b.dataset.id = s.id;
          b.setAttribute('aria-label', `Slide ${i + 1}: ${s.title}`);
          b.innerHTML = `<span class="n">${i + 1}</span><div class="sl"></div>`;
          ths.append(b);
          drawThumb(s);
        });
      };
      const select = (id, swap) => {
        sel = id;
        ths.querySelectorAll('.th').forEach((t) => t.classList.toggle('on', +t.dataset.id === id));
        drawMain(swap);
      };
      // FLIP the whole rail after moving one thumbnail (dy = how far the dragged one is already displaced)
      const reorder = (id, idx, dy = 0) => {
        const items = [...ths.children];
        const el = items.find((t) => +t.dataset.id === id);
        const before = new Map(items.map((t) => [t, t.offsetTop + (t === el ? dy : 0)]));
        el.style.transition = 'none';
        el.style.transform = '';
        const rest = items.filter((t) => t !== el);
        rest.splice(idx, 0, el);
        rest.forEach((t) => ths.append(t));
        slides = rest.map((t) => by(+t.dataset.id));
        numbers();
        $('.num').textContent = slides.indexOf(by(sel)) + 1;
        rest.forEach((t) => {
          const d = before.get(t) - t.offsetTop;
          if (d) t.animate([{ transform: `translateY(${d}px)` }, { transform: 'none' }], { duration: 520, easing: 'cubic-bezier(.32,.72,0,1)' });
        });
      };
      ths.addEventListener('pointerdown', (e) => {
        const th = e.target.closest('.th');
        if (!th) return;
        const id = +th.dataset.id;
        const y0 = e.clientY;
        const items = () => [...ths.children];
        const i0 = items().indexOf(th);
        const pitch = items().length > 1 ? items()[1].offsetTop - items()[0].offsetTop : 80;
        let moved = false;
        let dy = 0;
        th.setPointerCapture(e.pointerId);
        const mv = (ev) => {
          dy = (ev.clientY - y0) / scale();
          if (!moved && Math.abs(dy) < 5) return;
          if (!moved) {
            moved = true;
            th.classList.add('lift');
            th.style.transition = 'none';
          }
          th.style.transform = `translateY(${dy}px)`;
        };
        const up = () => {
          th.removeEventListener('pointermove', mv);
          th.removeEventListener('pointerup', up);
          th.classList.remove('lift');
          if (!moved) return void select(id, true);
          const idx = Math.max(0, Math.min(slides.length - 1, i0 + Math.round(dy / pitch)));
          reorder(id, idx, dy);
        };
        th.addEventListener('pointermove', mv);
        th.addEventListener('pointerup', up);
      });
      main.addEventListener('input', (e) => {
        if (!e.target.classList.contains('st')) return;
        const s = by(sel);
        s.title = e.target.textContent;
        const t = ths.querySelector(`[data-id="${s.id}"] .st`);
        if (t) t.textContent = s.title;
      });
      main.addEventListener('keydown', (e) => e.key === 'Enter' && e.target.classList.contains('st') && (e.preventDefault(), e.target.blur()));
      $('.lays').addEventListener('click', (e) => {
        const b = e.target.closest('.ly');
        if (!b) return;
        const s = by(sel);
        s.kind = b.dataset.k;
        drawThumb(s);
        drawMain(true);
      });
      $('.sz').addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        const s = by(sel);
        s.size = +b.dataset.v;
        drawThumb(s);
        drawMain(false);
      });
      $('.al').addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        const s = by(sel);
        s.align = b.dataset.v;
        drawThumb(s);
        drawMain(false);
      });
      $('.sw').addEventListener('click', (e) => {
        const b = e.target.closest('.s');
        if (!b) return;
        const s = by(sel);
        s.hue = +b.dataset.i;
        drawThumb(s);
        drawMain(false);
      });
      $('.nw').addEventListener('click', () => {
        const id = Math.max(...slides.map((s) => s.id)) + 1;
        const at = slides.indexOf(by(sel)) + 1;
        slides.splice(at, 0, mkS(id, 'list', 'Untitled slide', '', 'Add your talking points here.'));
        build();
        select(id, true);
      });
      build();
      drawMain(false);

      let flip = false;
      cur.style.transform = 'translate(620px,520px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const flow = async () => {
            const items = () => [...ths.children];
            const th = items().find((t) => t.dataset.id === '4');
            const i0 = items().indexOf(th);
            const i1 = flip ? 3 : 1;
            if (!(await aim(th, 0.6, 0.5))) return;
            cur.classList.add('press');
            th.classList.add('lift');
            await wait(160);
            const target = items()[i1];
            const dy = target.offsetTop - th.offsetTop;
            th.style.transition = 'transform 780ms var(--ml-ease)';
            th.style.transform = `translateY(${dy}px)`;
            to(target, 0.6, 0.5);
            await wait(860);
            cur.classList.remove('press');
            th.classList.remove('lift');
            if (!idle()) {
              th.style.transform = '';
              return;
            }
            reorder(4, i1, dy);
            void i0;
            await wait(900);
            if (!(await aim(th, 0.6, 0.5))) return;
            await tap(null, () => select(4, true));
            await wait(900);
            const st = main.querySelector('.st');
            if (!(await aim(st, 0.3, 0.5))) return;
            await tap();
            st.classList.add('typing');
            const txt = flip ? 'Bookings by week' : 'Weekly bookings, up 18%';
            st.textContent = '';
            st.dispatchEvent(new Event('input', { bubbles: true }));
            for (const ch of txt) {
              if (!idle()) {
                st.classList.remove('typing');
                return;
              }
              st.textContent += ch;
              st.dispatchEvent(new Event('input', { bubbles: true }));
              await wait(60 + Math.random() * 40);
            }
            st.classList.remove('typing');
            await wait(2600);
            flip = !flip;
          };
          await flow();
          ths.querySelectorAll('.th').forEach((t) => {
            t.classList.remove('lift');
            t.style.transform = '';
          });
          await wait(1200);
        }
      })();
    },
    prompt: `Build a slide editor screen (Keynote style), full viewport (height: 100dvh): a thumbnail rail, a slide canvas with speaker notes, and an inspector.

Layout: CSS grid, columns 200px, minmax(0, 1fr) and 264px, under a 54px top bar (logo tile, breadcrumb "Brightline Dental / Q4 review", a "5 slides" chip, collaborator avatars, a Present button and a primary Share button). Rail (white, hairline border): a full-width "New slide" button on a pale accent tile, then the thumbnails stacked with a 10px gap, each a small slide with its number in mono type on the left; the open slide has a 2px accent outline with 2px offset. Canvas column: the slide (aspect-ratio 16 / 9, max-width 900px, 14px radius, large soft shadow) above a speaker-notes card that flexes to fill the remaining height. Inspector: slide number and layout name, a Layout row of pill chips (Cover, Stat, List, Chart, Next steps), a Title size segmented control (S, M, L), an Alignment control (left, center, right icons) and five Accent swatches. The segmented controls use ONE white thumb that glides with transform: translateX(index * 100%) and a critically damped spring.

Slides: build each slide from one render function and size every inner measurement in cqw units on a container (container: sl / inline-size on the slide) so the same markup is the 900px canvas slide and the 140px thumbnail. Cover is a solid accent with a soft white radial highlight and a ring; Stat has a huge number and mini bars; List and Next steps have simple rows; Chart has eight bars. Thumbnails are non-interactive, re-render live, and share the title, size, alignment and accent custom properties (--ts, --ta, --sa) with the main slide.

Interactions: the main slide title is contenteditable, every keystroke updates the model and the matching thumbnail's title. Dragging a thumbnail (pointer events with setPointerCapture, a 5px threshold separating click from drag) lifts it with a large shadow and follows the pointer with transform: translateY; on drop it takes the index nearest its position and every thumbnail settles with a FLIP animation (record offsetTop before, move the nodes, animate from the delta to none, 520ms, cubic-bezier(.32,.72,0,1)); numbers update. Selecting a slide swaps the canvas content with a short entrance (opacity, translateY(8px) and scale .99 to none).

Accessibility: thumbnails are buttons with aria-labels ("Slide 2: ..."), the title has an aria-label, focus-visible rings, prefers-reduced-motion removes the entrance. Below 760px hide the rail and inspector. Plain HTML, CSS and JS, no libraries; React-friendly structure (ThumbnailRail, SlideCanvas, SlideView, SpeakerNotes, Inspector).`,
  });

  // ---------------------------------------------------------------- 8. image editor
  const PH_SCENE = `<svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="ml-ph-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2B4F86"/><stop offset=".45" stop-color="#7FA8DD"/><stop offset=".78" stop-color="#E6DDD3"/><stop offset="1" stop-color="#F3E4CF"/></linearGradient><radialGradient id="ml-ph-sun" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#FFF3DC"/><stop offset=".35" stop-color="#FBE3BC" stop-opacity=".75"/><stop offset="1" stop-color="#FBE3BC" stop-opacity="0"/></radialGradient><linearGradient id="ml-ph-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8FB1D6"/><stop offset="1" stop-color="#2F5A8F"/></linearGradient></defs><rect width="800" height="600" fill="url(#ml-ph-sky)"/><ellipse cx="520" cy="352" rx="260" ry="190" fill="url(#ml-ph-sun)"/><circle cx="520" cy="352" r="34" fill="#FFF6E6"/><g fill="#fff" opacity=".42"><ellipse cx="170" cy="160" rx="96" ry="15"/><ellipse cx="214" cy="146" rx="56" ry="13"/><ellipse cx="124" cy="148" rx="44" ry="11"/><ellipse cx="590" cy="118" rx="84" ry="12"/><ellipse cx="628" cy="106" rx="46" ry="10"/></g><path d="M0 372l90-44 70 28 100-62 90 56 80-34 90 44 120-52 160 62v70H0Z" fill="#5C7FA8"/><path d="M0 392l110-34 90 30 120-46 100 44 110-40 120 40 150-30v98H0Z" fill="#44688F"/><rect y="408" width="800" height="192" fill="url(#ml-ph-sea)"/><g fill="#FFF3DC" opacity=".7"><rect x="470" y="418" width="100" height="5" rx="2.5"/><rect x="488" y="434" width="64" height="5" rx="2.5"/><rect x="498" y="450" width="44" height="4" rx="2"/><rect x="430" y="466" width="140" height="4" rx="2" opacity=".6"/></g><g fill="#fff" opacity=".35"><rect x="120" y="440" width="90" height="3" rx="1.5"/><rect x="620" y="470" width="110" height="3" rx="1.5"/><rect x="60" y="500" width="150" height="3" rx="1.5"/></g><path d="M250 438 330 438 300 392 280 392Z" fill="#fff"/><path d="M296 388V316l54 70Z" fill="#FFF8EC"/><rect x="236" y="436" width="110" height="12" rx="6" fill="#274A78"/><path d="M0 520h800v80H0Z" fill="#1E3A63"/><g fill="#152C4D"><rect x="40" y="478" width="14" height="122" rx="3"/><rect x="190" y="486" width="14" height="114" rx="3"/><rect x="340" y="494" width="14" height="106" rx="3"/><rect x="490" y="500" width="14" height="100" rx="3"/><rect x="640" y="504" width="14" height="96" rx="3"/><rect x="0" y="508" width="800" height="18" rx="4"/></g><g fill="none" stroke="#fff" stroke-opacity=".8" stroke-width="3" stroke-linecap="round"><path d="M610 160q12-14 24 0q12-14 24 0"/><path d="M660 196q9-10 18 0q9-10 18 0"/></g></svg>`;
  ML.add({
    id: 'app-editors-photo',
    cat: 'app-editors',
    title: 'Image editor',
    sub: 'Sliders retune the photo, before and after',
    html: `
<div class="app">
  <header class="bar">
    <span class="logo">${I(P.image, 16)}</span>
    <p class="crumb">Photos<i>/</i><b>harbor-sunrise.jpg</b></p>
    <span class="chip">4032 x 3024</span>
    <span class="sp"></span>
    <div class="seg ba" style="--n:2;--i:1" role="group" aria-label="Compare"><span class="thumb" aria-hidden="true"></span><button type="button" data-p="1">Before</button><button type="button" class="on" data-p="0">After</button></div>
    <span class="sp"></span>
    <button class="ib" type="button" aria-label="Undo">${I(P.undo, 17)}</button>
    <button class="ib" type="button" aria-label="Redo">${I(P.redo, 17)}</button>
    <button class="btn pri exp" type="button">${I(P.download, 15)}Export</button>
  </header>
  <div class="body">
    <nav class="tools" aria-label="Tools">
      <button class="tl on" type="button" aria-label="Adjust">${I(P.sliders, 19)}<span>Adjust</span></button>
      <button class="tl" type="button" aria-label="Crop">${I(P.crop, 19)}<span>Crop</span></button>
      <button class="tl" type="button" aria-label="Rotate">${I(P.rotate, 19)}<span>Rotate</span></button>
      <button class="tl" type="button" aria-label="Light">${I(P.sun, 19)}<span>Light</span></button>
      <button class="tl" type="button" aria-label="Text">${I(P.type, 19)}<span>Text</span></button>
    </nav>
    <main class="cv">
      <div class="pho">
        <div class="lyr aft">${PH_SCENE}</div>
        <div class="lyr bef">${PH_SCENE}</div>
        <span class="wl" aria-hidden="true"></span>
        <span class="tagb">Before</span><span class="taga">After</span>
      </div>
      <div class="toast" role="status">${I(P.check, 15, 2.6)}<span>Saved harbor-sunrise.jpg</span></div>
    </main>
    <aside class="adj" aria-label="Adjustments">
      <div class="hist" aria-hidden="true"><svg viewBox="0 0 240 70" preserveAspectRatio="none"><path class="hp" d="M0 70V58C14 50 24 30 40 34c14 4 18 24 34 14 14-9 20-34 38-34 20 0 24 30 40 30 14 0 20-22 36-20 14 2 20 22 32 22 12 0 16-8 20-8V70Z"/></svg></div>
      <div class="ctl"></div>
      <p class="mk">Presets</p>
      <div class="pre"><button type="button" class="pp" data-k="orig">Original</button><button type="button" class="pp" data-k="vivid">Vivid</button><button type="button" class="pp on" data-k="warm">Warm</button><button type="button" class="pp" data-k="cool">Cool</button></div>
      <button class="btn rs" type="button">${I(P.rotate, 15)}Reset all</button>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${ED}${RANGE}
.d input[type=range]::-webkit-slider-runnable-track{background:linear-gradient(90deg,var(--ml-bar) min(var(--a,50%),var(--p)),var(--ml-accent) min(var(--a,50%),var(--p)) max(var(--a,50%),var(--p)),var(--ml-bar) max(var(--a,50%),var(--p)))}
.d input[type=range]::-moz-range-track{background:linear-gradient(90deg,var(--ml-bar) min(var(--a,50%),var(--p)),var(--ml-accent) min(var(--a,50%),var(--p)) max(var(--a,50%),var(--p)),var(--ml-bar) max(var(--a,50%),var(--p)))}
.d .body{grid-template-columns:76px minmax(0,1fr) 290px}
.d .tools{display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 0;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .tl{display:flex;flex-direction:column;align-items:center;gap:5px;width:60px;padding:9px 0 7px;border:0;border-radius:12px;background:none;font-size:11px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .tl:hover{background:var(--ml-surface)}
.d .tl.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .cv{position:relative;display:flex;min-width:0;min-height:0;padding:22px;background:var(--ml-surface)}
.d .pho{position:relative;flex:1;min-width:0;border-radius:16px;overflow:hidden;box-shadow:var(--ml-shadow-lg);background:var(--ml-bar)}
.d .lyr{position:absolute;inset:0}
.d .lyr svg{display:block;width:100%;height:100%}
.d .aft svg{filter:var(--f,none)}
.d .bef{clip-path:inset(0 100% 0 0);transition:clip-path 760ms var(--ml-ease)}
.d .pho.before .bef{clip-path:inset(0 0 0 0)}
.d .wl{position:absolute;left:0;top:0;bottom:0;width:100%;pointer-events:none;opacity:0;transform:translateX(-100%)}
.d .wl::after{content:"";position:absolute;right:0;top:0;bottom:0;width:3px;margin-right:-1.5px;border-radius:2px;background:#fff;box-shadow:0 0 0 1px rgba(35,15,10,.12),0 2px 10px rgba(35,15,10,.3)}
.d .pho.go .wl{animation:ed-ph-wipe 760ms var(--ml-ease) both}
.d .pho.go.before .wl{--from:-100%;--to:0%}
.d .pho.go:not(.before) .wl{--from:0%;--to:-100%}
.d .tagb,.d .taga{position:absolute;bottom:14px;padding:5px 11px;border-radius:999px;background:rgba(255,255,255,.9);font-size:12px;font-weight:600;color:var(--ml-ink);box-shadow:0 2px 8px rgba(35,15,10,.12);transition:opacity .35s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .tagb{left:14px;opacity:0;transform:translateY(6px)}
.d .taga{right:14px}
.d .pho.before .tagb{opacity:1;transform:none}
.d .pho.before .taga{opacity:0;transform:translateY(6px)}
.d .adj{display:flex;flex-direction:column;min-height:0;padding:16px;background:var(--ml-bg);border-left:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:thin}
.d .hist{height:74px;overflow:hidden;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .hist svg{display:block;width:100%;height:100%;transform:translateX(calc(var(--e,0) * .35px)) scaleX(calc(1 + var(--c,0) / 260))}
.d .hp{fill:var(--ml-accent-line);stroke:var(--ml-accent);stroke-width:1.5;vector-effect:non-scaling-stroke}
.d .ctl{display:flex;flex-direction:column;gap:10px;margin-top:14px}
.d .row{padding:2px 0}
.d .lab{display:flex;align-items:baseline;justify-content:space-between;font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .lab output{min-width:38px;text-align:right;font:600 12.5px var(--ml-mono);color:var(--ml-ink)}
.d .adj .mk{padding:18px 0 8px}
.d .pre{display:grid;grid-template-columns:1fr 1fr;gap:6px}
.d .pp{height:34px;border:0;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .pp.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .rs{justify-content:center;margin-top:auto}
.d .toast{position:absolute;left:50%;top:34px;z-index:4;display:flex;align-items:center;gap:8px;padding:10px 16px 10px 12px;border-radius:999px;background:var(--ml-ink);font-size:13px;font-weight:600;color:#fff;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translate(-50%,-14px);pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .25s ease}
.d .toast.on{opacity:1;transform:translate(-50%,0)}
.d .toast svg{padding:2px;border-radius:50%;background:#1DB954}
@keyframes ed-ph-wipe{0%{opacity:1;transform:translateX(var(--from))}85%{opacity:1}100%{opacity:0;transform:translateX(var(--to))}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(220px,1fr) auto}
  .d .tools,.d .chip,.d .crumb,.d .bar .ib,.d .hist,.d .pre,.d .adj .mk{display:none}
  .d .cv{padding:12px}
  .d .adj{padding:12px 16px 16px;border-left:0;border-top:1px solid var(--ml-line);overflow:visible}
  .d .ctl{margin-top:0}
  .d .bar .seg{margin-left:auto}
  .d .bar .sp{display:none}
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
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const to = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !to(el, fx, fy));
        await wait(760);
        return idle();
      };
      const tap = async (el, fn) => {
        cur.classList.add('press');
        el && el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el && el.classList.remove('press');
        if (fn) fn();
      };

      const S = [['e', 'Exposure'], ['c', 'Contrast'], ['s', 'Saturation'], ['w', 'Warmth']];
      const PRE = { orig: [0, 0, 0, 0], vivid: [8, 24, 46, 6], warm: [14, 12, 22, 30], cool: [6, 16, -10, -34] };
      const ctl = $('.ctl');
      const pho = $('.pho');
      const aft = $('.aft svg');
      const hist = $('.hist svg');
      const inp = {};
      ctl.innerHTML = S.map(([k, n]) => `<div class="row"><div class="lab"><label for="ml-ph-${k}">${n}</label><output id="ml-ph-${k}-o"></output></div><input type="range" id="ml-ph-${k}" min="-100" max="100" value="0"></div>`).join('');
      S.forEach(([k]) => (inp[k] = $(`#ml-ph-${k}`)));
      const val = () => ({ e: +inp.e.value, c: +inp.c.value, s: +inp.s.value, w: +inp.w.value });
      const paint = () => {
        const { e, c, s, w } = val();
        const warm = w > 0 ? `sepia(${(w / 230).toFixed(3)}) hue-rotate(${(-w / 9).toFixed(1)}deg)` : `hue-rotate(${(w / 4.2).toFixed(1)}deg)`;
        aft.style.setProperty('--f', `brightness(${(1 + e / 180).toFixed(3)}) contrast(${(1 + c / 140).toFixed(3)}) saturate(${(1 + s / 90).toFixed(3)}) ${warm}`);
        hist.style.setProperty('--e', e);
        hist.style.setProperty('--c', c);
        S.forEach(([k]) => {
          const i = inp[k];
          i.style.setProperty('--p', `${((+i.value + 100) / 200) * 100}%`);
          $(`#ml-ph-${k}-o`).textContent = i.value > 0 ? `+${i.value}` : i.value;
        });
        const m = Object.entries(PRE).find(([, a]) => a[0] === e && a[1] === c && a[2] === s && a[3] === w);
        root.querySelectorAll('.pp').forEach((b) => b.classList.toggle('on', !!m && b.dataset.k === m[0]));
      };
      S.forEach(([k]) => inp[k].addEventListener('input', paint));
      // slide all four sliders to a preset together
      const tween = (target, ms = 900) =>
        new Promise((res) => {
          const from = S.map(([k]) => +inp[k].value);
          const t0 = performance.now();
          const f = (t) => {
            if (!root.isConnected) return res();
            if (root.dataset.paused) return void requestAnimationFrame(f);
            const kk = Math.min(1, (t - t0) / ms);
            const ee = 1 - Math.pow(1 - kk, 3);
            S.forEach(([k], i) => (inp[k].value = Math.round(from[i] + (target[i] - from[i]) * ee)));
            paint();
            if (kk < 1) requestAnimationFrame(f);
            else res();
          };
          requestAnimationFrame(f);
        });
      root.querySelectorAll('.pp').forEach((b) => b.addEventListener('click', () => tween(PRE[b.dataset.k])));
      $('.rs').addEventListener('click', () => tween([0, 0, 0, 0]));
      const setCompare = (p) => {
        const before = p === 1;
        const ba = $('.ba');
        ba.style.setProperty('--i', before ? 0 : 1);
        ba.querySelectorAll('button').forEach((b) => b.classList.toggle('on', +b.dataset.p === p));
        pho.classList.remove('go');
        void pho.offsetWidth;
        pho.classList.add('go');
        pho.classList.toggle('before', before);
      };
      $('.ba').addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (b) setCompare(+b.dataset.p);
      });
      root.querySelectorAll('.tl').forEach((b) =>
        b.addEventListener('click', () => root.querySelectorAll('.tl').forEach((x) => x.classList.toggle('on', x === b))),
      );
      let toastT = 0;
      $('.exp').addEventListener('click', () => {
        const t = $('.toast');
        t.classList.add('on');
        clearTimeout(toastT);
        toastT = setTimeout(() => t.classList.remove('on'), 2200);
      });
      PRE.warm.forEach((v, i) => (inp[S[i][0]].value = v));
      paint();

      const thumbAt = (i) => {
        const f = (+i.value + 100) / 200;
        to(i, (8 + f * (i.offsetWidth - 16)) / i.offsetWidth, 0.5);
      };
      const drag = async (i, target) => {
        const v0 = +i.value;
        const t0 = performance.now();
        cur.style.transition = 'opacity .25s ease';
        await new Promise((res) => {
          const step = (t) => {
            if (!root.isConnected || !idle()) return res();
            const kk = Math.min(1, (t - t0) / 1000);
            i.value = Math.round(v0 + (target - v0) * (1 - Math.pow(1 - kk, 3)));
            paint();
            thumbAt(i);
            if (kk < 1) requestAnimationFrame(step);
            else res();
          };
          requestAnimationFrame(step);
        });
        cur.style.transition = '';
      };
      let flip = false;
      cur.style.transform = 'translate(620px,420px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const flow = async () => {
            const ex = inp.e;
            if (!(await aim(ex, (8 + ((+ex.value + 100) / 200) * (ex.offsetWidth - 16)) / ex.offsetWidth, 0.5))) return;
            await tap();
            await drag(ex, flip ? 14 : 42);
            await wait(400);
            const sa = inp.s;
            if (!(await aim(sa, (8 + ((+sa.value + 100) / 200) * (sa.offsetWidth - 16)) / sa.offsetWidth, 0.5))) return;
            await tap();
            await drag(sa, flip ? 22 : 52);
            await wait(900);
            const bb = $('.ba button[data-p="1"]');
            if (!(await aim(bb, 0.5, 0.5))) return;
            await tap(bb, () => bb.click());
            await wait(1700);
            const aa = $('.ba button[data-p="0"]');
            if (!(await aim(aa, 0.5, 0.5))) return;
            await tap(aa, () => aa.click());
            await wait(1300);
            const pb = $(`.pp[data-k="${flip ? 'warm' : 'cool'}"]`);
            if (!(await aim(pb, 0.5, 0.5))) return;
            await tap(pb, () => pb.click());
            await wait(2600);
            flip = !flip;
          };
          await flow();
          cur.style.transition = '';
          await wait(1000);
        }
      })();
    },
    prompt: `Build an image editor screen (photo retouching), full viewport (height: 100dvh): a tool rail, a large photo canvas with before and after, and an adjustments panel.

Layout: CSS grid, columns 76px, minmax(0, 1fr) and 290px, under a 54px top bar (logo tile, breadcrumb "Photos / harbor-sunrise.jpg", a dimensions chip, a Before / After segmented control with ONE white thumb that glides with transform and a critically damped spring, undo and redo icon buttons, a primary Export button that shows a toast). The rail has 60px stacked icon-over-label tools (Adjust, Crop, Rotate, Light, Text); the active one sits on a pale accent tile. The canvas is a soft surface with 22px padding holding one photo that fills it (16px radius, large shadow, an SVG scene with preserveAspectRatio="xMidYMid slice" so it covers any aspect ratio). The panel (white, hairline border) has a luminance histogram, four sliders, a Presets grid (Original, Vivid, Warm, Cool) and a Reset all button pinned to the bottom.

Sliders: Exposure, Contrast, Saturation and Warmth, each -100 to 100 with a signed mono value, as custom range inputs (4px track that fills from the centre outward to the thumb using a two-stop linear-gradient on custom properties, 16px white thumb). Every input event rebuilds one CSS filter string on the photo: brightness(1 + e/180) contrast(1 + c/140) saturate(1 + s/90) plus warmth as sepia(w/230) hue-rotate(-w/9 deg) for warm and hue-rotate(w/4.2 deg) for cool. The histogram shifts with transform: translateX(exposure) and scaleX(1 + contrast/260). A preset tweens all four sliders together over 900ms with an ease-out cubic and the matching preset chip lights up when the numbers equal it.

Before and after: render the scene twice, the filtered one underneath and the untouched one on top clipped with clip-path: inset(0 100% 0 0). Choosing Before transitions the clip to inset(0 0 0 0) over 760ms while a 3px white wipe line sweeps across with transform: translateX and fades out; After reverses it. Small Before and After chips on the photo fade and rise with the state.

Accessibility: every slider has a visible label and an output, the segmented buttons and tools are buttons with labels, focus-visible rings, the toast is role="status". Below 760px hide the rail, histogram and presets, put the photo on top and the sliders under it. Plain HTML, CSS and JS, no libraries; React-friendly structure (ToolRail, PhotoCanvas, CompareToggle, AdjustPanel, Histogram).`,
  });

})();
