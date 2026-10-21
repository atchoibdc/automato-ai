(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
    dl: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
    receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    card: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    clip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    buoy: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    pen: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    img: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    star: '<path d="M11.5 2.3a.6.6 0 0 1 1 0l2.7 5.5 6 .9a.6.6 0 0 1 .3 1l-4.4 4.3 1 6a.6.6 0 0 1-.9.6L12 18.3l-5.4 2.8a.6.6 0 0 1-.9-.6l1-6L2.3 9.7a.6.6 0 0 1 .3-1l6-.9Z"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.8-1.6l9.9-10.2a.5.5 0 0 1 .9.4l-1.9 6a1 1 0 0 0 .9 1.4H20a1 1 0 0 1 .8 1.6l-9.9 10.2a.5.5 0 0 1-.9-.4l1.9-6A1 1 0 0 0 11 14Z"/>',
    ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>',
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
  const TOAST = `<div class="toast" role="status" aria-live="polite"><span class="tk">${I(P.check, 14, 3)}</span><b></b></div>`;
  // Shared portal styles (portals are friendlier and more spacious than an admin: soft cards, big type, clear actions).
  const SH = `
.d .app{position:relative;display:flex;flex-direction:column;height:100%;min-height:0}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .av.b2{background:var(--ml-accent-line)}
.d .av.b3{background:var(--ml-bar);color:var(--ml-ink-2)}
.d .mark{flex:none;display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d h1{font-size:28px;line-height:1.12;font-weight:650;letter-spacing:-.035em}
.d h2{font-size:16px;line-height:1.25;font-weight:650;letter-spacing:-.02em}
.d .lbl{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .lead{margin-top:8px;font-size:14.5px;color:var(--ml-muted)}
.d .muted,.d small{color:var(--ml-muted)}
.d small{font-size:12.5px}
.d .cta,.d .ghost{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:40px;padding:0 16px;border:0;border-radius:11px;font-size:13.5px;font-weight:600;white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease}
.d .cta{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d .ghost{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);color:var(--ml-ink-2)}
.d .ghost:hover{background:var(--ml-surface)}
.d .cta:active,.d .ghost:active,.d .cta.press,.d .ghost.press{transform:scale(.96)}
.d .sm{height:32px;padding:0 12px;border-radius:9px;font-size:12.5px}
.d button{cursor:pointer}
.d button:focus-visible,.d input:focus-visible,.d textarea:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .st{display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:999px;background:var(--ml-accent-soft);font-size:11.5px;font-weight:600;color:var(--ml-accent-ink);white-space:nowrap}
.d .st.ok{background:rgba(29,185,84,.11);color:#12893C}
.d .st.wait{background:rgba(255,159,10,.13);color:#B25E00}
.d .st.late{background:rgba(255,59,48,.09);color:#D70015}
.d .st.mute{background:var(--ml-bar-2);color:var(--ml-muted)}
.d .ins{display:grid;grid-template-rows:1fr}
.d .ins > *{min-height:0;overflow:hidden}
.d .ins.new{animation:po-row 560ms var(--ml-ease) both}
.d .live{position:relative;flex:none;width:8px;height:8px;border-radius:50%;background:#1DB954}
.d .live::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:po-ping 2.2s ease-out infinite}
.d .chk{flex:none;display:grid;place-items:center;width:26px;height:26px;border:0;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .chk svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .chk.on{background:var(--ml-accent);box-shadow:none}
.d .chk.on svg{opacity:1;transform:none}
.d .chk.press{transform:scale(.88)}
.d .toast{position:absolute;left:50%;bottom:24px;z-index:40;display:flex;align-items:center;gap:9px;padding:9px 16px 9px 10px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);font-size:13px;opacity:0;transform:translate(-50%,16px);pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease}
.d .toast.show{opacity:1;transform:translate(-50%,0)}
.d .toast .tk{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#1DB954;color:#fff}
.d .toast b{font-weight:600}
.d .in{animation:po-in 560ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
@keyframes po-row{from{grid-template-rows:0fr;opacity:0}to{grid-template-rows:1fr;opacity:1}}
@keyframes po-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes po-ping{0%{opacity:.5;transform:scale(1)}80%,100%{opacity:0;transform:scale(2.8)}}
@keyframes po-pop{0%{transform:scale(.6)}60%{transform:scale(1.18)}100%{transform:scale(1)}}
@keyframes po-dots{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-3px);opacity:1}}
@keyframes po-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@media (prefers-reduced-motion: reduce){.d .live::after{animation:none}.d .in{animation:none}}
${CURSOR_CSS}`;

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-home',
    cat: 'app-portals',
    title: 'Client portal home',
    sub: 'Tick a next step, progress and inbox move',
    html: `
<div class="app">
  <header class="nav">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Solace Studio</b><em>Client portal</em></div>
    <nav class="tabs" aria-label="Portal"><span class="ind" aria-hidden="true"></span>
      <button class="t on" type="button">Home</button><button class="t" type="button">Projects</button><button class="t" type="button">Files</button><button class="t" type="button">Invoices</button><button class="t" type="button">Messages<i>2</i></button>
    </nav>
    <button class="ic" type="button" aria-label="Notifications">${I(P.bell)}<i></i></button><span class="av">PN</span>
  </header>
  <main class="page">
    <div class="hello in" style="--i:0">
      <div><p class="lbl">Wednesday, 14 October</p><h1>Good morning, Priya</h1><p class="lead">Your brand refresh is on track. Three things need you this week.</p></div>
      <button class="ghost" type="button">${I(P.cal, 16)}Book a check-in</button>
    </div>
    <div class="grid">
      <section class="card stat in" style="--i:1">
        <div class="ringw"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="tr" cx="60" cy="60" r="48" pathLength="100"/><circle class="rv" cx="60" cy="60" r="48" pathLength="100"/></svg><p><b class="pct">68</b><span>%</span></p></div>
        <div class="si">
          <p class="lbl">Current project</p><h2>Brand refresh</h2><p class="muted ph">Phase 2 of 4 - Visual identity</p>
          <div class="seg"><i class="d1"></i><i class="d2"></i><i></i><i></i></div>
          <div class="segl"><span>Discovery</span><span>Identity</span><span>Guidelines</span><span>Launch</span></div>
          <p class="meta"><span class="live"></span>Updated just now by Daniel Okafor</p>
        </div>
      </section>
      <section class="card steps in" style="--i:2">
        <div class="ch"><h2>Next steps for you</h2><span class="st wait cnt">3 to do</span></div>
        <ul class="list"></ul>
      </section>
      <section class="card msgs in" style="--i:3">
        <div class="ch"><h2>Latest messages</h2><button class="lnk" type="button">Open inbox</button></div>
        <ul class="ml"></ul>
        <label class="reply"><input type="text" placeholder="Write a message to Daniel" aria-label="Write a message"><span>${I(P.send, 16)}</span></label>
      </section>
    </div>
  </main>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${SH}
.d .nav{display:flex;flex:none;align-items:center;gap:14px;height:68px;padding:0 32px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;margin-right:auto}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .brand em{padding:3px 9px;border-radius:999px;background:var(--ml-surface);font-size:12px;font-style:normal;font-weight:600;color:var(--ml-muted)}
.d .tabs{position:relative;display:flex;gap:2px;padding:4px;border-radius:12px;background:var(--ml-surface)}
.d .t{position:relative;z-index:1;display:flex;align-items:center;gap:6px;height:34px;padding:0 14px;border:0;border-radius:9px;background:none;font-size:13.5px;font-weight:550;color:var(--ml-ink-2)}
.d .t.on{color:var(--ml-accent-ink);font-weight:600}
.d .t i{padding:2px 6px;border-radius:99px;background:var(--ml-accent);font:600 10.5px/1.2 var(--ml-mono);font-style:normal;color:#fff}
.d .ind{position:absolute;top:4px;left:0;height:34px;border-radius:9px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-accent-line),0 1px 3px rgba(35,15,10,.08);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .ic{position:relative;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2)}
.d .ic:hover{background:var(--ml-surface)}
.d .ic i{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px #fff}
.d .page{display:flex;flex:1;flex-direction:column;gap:24px;min-height:0;padding:30px 32px 32px;overflow-y:auto;scrollbar-width:thin}
.d .hello{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}
.d .hello h1{margin-top:8px}
.d .grid{display:grid;flex:1;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);gap:18px}
.d .stat{display:flex;align-items:center;gap:26px;padding:24px 26px}
.d .ringw{position:relative;flex:none;width:128px;height:128px}
.d .ringw svg{display:block;width:100%;height:100%;transform:rotate(-90deg)}
.d .ringw circle{fill:none;stroke-width:10;stroke-linecap:round}
.d .tr{stroke:var(--ml-bar-2)}
.d .rv{stroke:var(--ml-accent);stroke-dasharray:100 100;stroke-dashoffset:32;transition:stroke-dashoffset 900ms var(--ml-ease)}
.d .ringw p{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:1px;font-size:30px;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .ringw span{margin-top:4px;font-size:15px;color:var(--ml-muted)}
.d .si{flex:1;min-width:0}
.d .si h2{margin-top:6px;font-size:21px;letter-spacing:-.03em}
.d .ph{margin-top:3px;font-size:13.5px}
.d .seg{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:16px}
.d .seg i{height:6px;border-radius:99px;background:var(--ml-bar)}
.d .seg .d1{background:var(--ml-accent)}
.d .seg .d2{background:var(--ml-accent-2)}
.d .segl{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:7px;font-size:11.5px;color:var(--ml-muted)}
.d .meta{display:flex;align-items:center;gap:9px;margin-top:14px;font-size:12.5px;color:var(--ml-muted)}
.d .steps,.d .msgs{display:flex;flex-direction:column;min-width:0;padding:22px 24px}
.d .msgs{grid-row:1 / span 2;grid-column:2}
.d .ch{display:flex;align-items:center;justify-content:space-between;gap:10px}
.d .lnk{border:0;background:none;font-size:13px;font-weight:600;color:var(--ml-accent-ink)}
.d .list,.d .ml{display:flex;flex-direction:column;margin-top:8px;list-style:none}
.d .list li{display:flex;align-items:center;gap:14px;padding:14px 0;border-bottom:1px solid var(--ml-line)}
.d .list li:last-child{border-bottom:0}
.d .list div{flex:1;min-width:0}
.d .list b{display:block;font-size:14.5px;font-weight:600;transition:color .3s ease}
.d .list small{font-size:12.5px}
.d .list li.done b{color:var(--ml-muted);text-decoration:line-through;text-decoration-color:var(--ml-bar)}
.d .ml .rin{display:flex;gap:12px;padding:14px 0;border-bottom:1px solid var(--ml-line)}
.d .ml li:last-child .rin{border-bottom:0}
.d .ml p{font-size:13.5px;line-height:1.4;color:var(--ml-ink-2)}
.d .ml b{display:flex;justify-content:space-between;gap:8px;margin-bottom:2px;font-size:13.5px;font-weight:600;color:var(--ml-ink)}
.d .ml b time{font:500 11.5px/1.6 var(--ml-mono);color:var(--ml-muted)}
.d .reply{display:flex;align-items:center;gap:8px;margin-top:auto;height:44px;padding:0 6px 0 14px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .reply input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:13.5px}
.d .reply span{display:grid;place-items:center;width:32px;height:32px;border-radius:9px;background:var(--ml-accent);color:#fff}
.d .ml .dot{flex:none;align-self:center;width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
@container scr (max-width: 760px){
  .d .nav{padding:0 16px}
  .d .brand em,.d .tabs,.d .hello .ghost{display:none}
  .d .page{padding:20px 16px}
  .d h1{font-size:24px}
  .d .grid{grid-template-columns:minmax(0,1fr);grid-template-rows:none}
  .d .msgs{grid-row:auto;grid-column:auto}
  .d .stat{flex-direction:column;align-items:flex-start;gap:18px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      const CK = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
      const steps = [['Approve the logo direction', 'Due Thu, Oct 15', 'Review'], ['Upload your brand photos', 'Due Fri, Oct 16', 'Upload'], ['Confirm the launch date', 'Due Fri, Oct 23', 'Choose']];
      const msgs = [['DO', 'Daniel Okafor', '9:41 AM', 'Logo options are in your files. Take a look when you can.', 1], ['MR', 'Maya Reyes', 'Mon', 'Thanks for the photos! Sending the palette next.', 1], ['TL', 'Tomas Lindqvist', 'Oct 9', 'Kickoff notes are attached to the project.', 0]];
      const done = [false, false, false];
      const list = $('.list');
      const ml = $('.ml');
      const ring = $('.rv');
      const pct = $('.pct');
      const msgRow = (m, k) => `<li class="ins${k ? ' new' : ''}"><div class="rin"><span class="av b${(m[0].length + m[1].length) % 3 + 1}">${m[0]}</span><div style="flex:1;min-width:0"><b>${m[1]}<time>${m[2]}</time></b><p>${m[3]}</p></div>${m[4] ? '<span class="dot"></span>' : ''}</div></li>`;
      ml.innerHTML = msgs.map((m) => msgRow(m, 0)).join('');
      const drawSteps = () => {
        list.innerHTML = steps.map(([t, d, a], i) => `<li class="${done[i] ? 'done' : ''}"><button class="chk${done[i] ? ' on' : ''}" type="button" aria-label="Mark done">${CK}</button><div><b>${t}</b><small>${d}</small></div><button class="ghost sm" type="button">${a}</button></li>`).join('');
      };
      drawSteps();
      let shown = 68;
      const roll = (to) => {
        const from = shown;
        shown = to;
        ring.style.strokeDashoffset = 100 - to;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 800);
          pct.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
      };
      let tt = 0;
      const toast = (m) => {
        $('.toast b').textContent = m;
        $('.toast').classList.add('show');
        clearTimeout(tt);
        tt = setTimeout(() => $('.toast').classList.remove('show'), 2400);
      };
      const toggle = (i) => {
        done[i] = !done[i];
        const n = done.filter(Boolean).length;
        const li = list.children[i];
        li.classList.toggle('done', done[i]);
        li.querySelector('.chk').classList.toggle('on', done[i]);
        $('.cnt').textContent = n === 3 ? 'All done' : `${3 - n} to do`;
        roll(68 + n * 8);
        if (done[i]) toast(`${steps[i][0]}: done`);
      };
      list.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (li && e.target.closest('button')) toggle([...list.children].indexOf(li));
      });
      // gliding tab highlight
      const tabs = $$('.t');
      const ind = $('.ind');
      const slide = (b) => {
        tabs.forEach((x) => x.classList.toggle('on', x === b));
        ind.style.width = b.offsetWidth + 'px';
        ind.style.transform = `translateX(${b.offsetLeft}px)`;
      };
      tabs.forEach((b) => b.addEventListener('click', () => slide(b)));
      ind.style.transition = 'none';
      slide(tabs[0]);
      requestAnimationFrame(() => (ind.style.transition = ''));
      const reset = () => {
        done.fill(false);
        drawSteps();
        $('.cnt').textContent = '3 to do';
        roll(68);
        if (ml.children.length > 3) ml.firstElementChild.remove();
      };

      // Autoplay: tick the first step, then a new message lands. Real input hands over for 4s.
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(1400);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const b = list.children[0] && list.children[0].querySelector('.chk');
          if (b && !done[0] && (await aim(b))) toggle(0);
          await wait(1900);
          if (idle() && ml.children.length === 3) {
            ml.insertAdjacentHTML('afterbegin', msgRow(['AT', 'Aiko Tan', 'Just now', 'Approved, thank you! The team can start on the guidelines.', 1], 1));
            tabs[4].querySelector('i').textContent = '3';
          }
          await wait(3600);
          if (idle()) {
            reset();
            tabs[4].querySelector('i').textContent = '2';
          }
          await wait(1800);
        }
      })();
    },
    prompt: `Build a client portal home page for an agency's customers, as a full-viewport page (min-height: 100dvh) with a top-nav shell.

Layout: a 68px top bar (white, 1px bottom hairline): logo tile + agency name + a small "Client portal" pill on the left; centered a segmented tab group (Home, Projects, Files, Invoices, Messages with an unread count badge) sitting in a soft grey-blue track; a notifications button with an unread dot and an avatar on the right. Page body padding 30px 32px, scrolls on its own. Top: a micro-label with today's date, a 28px greeting ("Good morning, Priya"), one reassuring line and a ghost "Book a check-in" button on the right. Below, a 2-column grid (1.5fr / 1fr, 18px gap): left top a project status card (128px progress ring with the percentage in the middle, project name, "Phase 2 of 4", a 4-segment phase bar with labels, an "Updated just now" line with a small pinging green dot); left bottom a "Next steps for you" card with 3 rows (round checkbox, bold task, due date, a small action button) and a "3 to do" pill; right full height a "Latest messages" card with avatar initials on blue tints, sender, time, a 2-line preview and an unread dot.

Motion: the tab highlight is one absolutely positioned pill that moves with transform: translateX and a critically damped spring (587ms, linear() spring). Ticking a step draws the checkbox (scale .5 to 1 with a slight overshoot), mutes the task, updates the pill, animates the ring (stroke-dasharray 100 with pathLength="100", stroke-dashoffset eases over 900ms), counts the percentage with ease-out cubic, and shows a toast from the bottom (translateY 16px to 0, opacity). A new message inserts at the top of the list by animating grid-template-rows from 0fr to 1fr plus a fade over 560ms. Entrance: blocks fade up 8px with a 45ms stagger.

Accessibility: tabs and checkboxes are real buttons with aria labels, :focus-visible rings, the toast is role="status", prefers-reduced-motion removes the entrance and ping. Phone (under 760px): hide the tab group, stack the grid to one column, ring above the project details. Use your brand's accent color only; status colors stay small. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopNav, Greeting, ProjectStatus, NextSteps, MessageList).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-timeline',
    cat: 'app-portals',
    title: 'Project timeline and approvals',
    sub: 'Approve a milestone, the line fills on',
    html: `
<div class="app">
  <div class="shell">
    <aside class="side">
      <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Kestrel & Co</b></div>
      <p class="sl">Brightline Dental</p>
      <nav class="nav" aria-label="Portal">
        <button class="it" type="button">${I(P.home)}<span>Overview</span></button>
        <button class="it on" type="button">${I(P.flag)}<span>Timeline</span><em>1</em></button>
        <button class="it" type="button">${I(P.folder)}<span>Files</span></button>
        <button class="it" type="button">${I(P.receipt)}<span>Invoices</span></button>
        <button class="it" type="button">${I(P.msg)}<span>Messages</span></button>
      </nav>
      <div class="lead-card"><span class="av">EP</span><p><b>Elena Petrova</b><small>Project lead</small></p><button class="ic" type="button" aria-label="Message Elena">${I(P.msg, 16)}</button></div>
    </aside>
    <main class="page">
      <div class="head in" style="--i:0"><div><p class="lbl">Website redesign</p><h1>Project timeline</h1></div><span class="st ok">${I(P.check, 12, 3)}On track for Nov 14</span></div>
      <div class="cols">
        <section class="card tl in" style="--i:1"><ol class="steps"></ol></section>
        <aside class="card sum in" style="--i:2">
          <p class="lbl">Progress</p><p class="big"><b class="pc">33</b><span>%</span></p>
          <div class="bar"><i></i></div>
          <ul class="kv"><li><span>Milestones done</span><b class="md">2 of 6</b></li><li><span>Launch in</span><b>31 days</b></li><li><span>Waiting on you</span><b class="wy">1 approval</b></li></ul>
          <div class="act"><p class="lbl">Recent activity</p><ul><li><i></i><p><b>Daniel</b> shared Homepage v3<small>2 hours ago</small></p></li><li><i></i><p><b>Elena</b> replied to your question<small>Yesterday</small></p></li><li><i class="d"></i><p><b>You</b> signed off the sitemap<small>Sep 29</small></p></li></ul></div>
          <div class="team"><span class="av">EP</span><span class="av b2">DO</span><span class="av b3">HK</span><small>3 on your team</small></div>
        </aside>
      </div>
    </main>
  </div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${SH}
.d .shell{display:grid;grid-template-columns:248px minmax(0,1fr);flex:1;min-height:0}
.d .side{display:flex;flex-direction:column;min-height:0;padding:22px 16px 18px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;padding:0 6px 22px}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .sl{padding:0 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .nav{display:flex;flex-direction:column;gap:3px}
.d .it{display:flex;align-items:center;gap:12px;height:42px;padding:0 12px;border:0;border-radius:11px;background:none;font-size:14px;font-weight:500;color:var(--ml-ink-2);text-align:left}
.d .it svg{flex:none;color:var(--ml-muted)}
.d .it:hover{background:var(--ml-surface)}
.d .it.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:600}
.d .it.on svg{color:var(--ml-accent)}
.d .it em{margin-left:auto;padding:3px 7px;border-radius:99px;background:var(--ml-accent);font:600 11px/1.2 var(--ml-mono);font-style:normal;color:#fff;transition:opacity .3s ease}
.d .lead-card{display:flex;align-items:center;gap:11px;margin-top:auto;padding:14px;border-radius:14px;background:var(--ml-surface)}
.d .lead-card p{flex:1;min-width:0;display:flex;flex-direction:column}
.d .lead-card b{font-size:13.5px;font-weight:600}
.d .ic{display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-accent)}
.d .page{display:flex;flex-direction:column;gap:22px;min-width:0;min-height:0;padding:30px 34px;overflow-y:auto;scrollbar-width:thin}
.d .head{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}
.d .head h1{margin-top:6px}
.d .cols{display:grid;flex:1 0 auto;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);gap:18px}
.d .tl{display:flex;flex-direction:column;padding:26px 28px 14px}
.d .steps{display:flex;flex:1;flex-direction:column;list-style:none}
.d .s{position:relative;display:grid;flex:1 0 auto;grid-template-columns:30px minmax(0,1fr);gap:0 18px;padding-bottom:22px}
.d .s:last-child{padding-bottom:12px}
.d .nd{position:relative;z-index:1;display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2px var(--ml-bar);color:#fff;transition:background-color .35s ease,box-shadow .35s ease}
.d .nd svg{position:absolute;opacity:0;transform:scale(.4);transition:opacity .25s ease,transform .5s var(--ml-bounce)}
.d .s.done .nd{background:var(--ml-accent);box-shadow:none}
.d .s.done .nd svg{opacity:1;transform:none}
.d .s.now .nd{box-shadow:inset 0 0 0 2px var(--ml-accent),0 0 0 5px var(--ml-accent-soft)}
.d .s.now .nd::after{content:"";width:10px;height:10px;border-radius:50%;background:var(--ml-accent)}
.d .s:not(:last-child)::before{content:"";position:absolute;left:14px;top:30px;bottom:0;width:2px;background:var(--ml-bar-2)}
.d .s:not(:last-child)::after{content:"";position:absolute;left:14px;top:30px;bottom:0;width:2px;background:var(--ml-accent);transform:scaleY(0);transform-origin:50% 0;transition:transform 700ms var(--ml-ease)}
.d .s.done:not(:last-child)::after{transform:scaleY(1)}
.d .tt{display:flex;align-items:center;gap:10px;min-height:30px}
.d .tt b{font-size:15px;font-weight:600;letter-spacing:-.01em}
.d .s.up .tt b{color:var(--ml-muted);font-weight:550}
.d .tt time{margin-left:auto;font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
.d .bd{display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--ml-spring-dur) var(--ml-spring)}
.d .s.now .bd{grid-template-rows:1fr}
.d .bd > div{min-height:0;overflow:hidden}
.d .bd p{padding-top:6px;font-size:13.5px;color:var(--ml-muted)}
.d .appr{display:grid;grid-template-columns:132px minmax(0,1fr);gap:12px 16px;margin-top:12px;padding:14px;border-radius:14px;background:var(--ml-surface)}
.d .shot{position:relative;width:132px;height:84px;border-radius:10px;overflow:hidden;background:linear-gradient(160deg,var(--ml-accent-soft),var(--ml-bar-2));box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .shot::before{content:"";position:absolute;left:10px;top:10px;right:10px;height:8px;border-radius:4px;background:var(--ml-bar)}
.d .shot::after{content:"";position:absolute;left:14px;bottom:-24px;width:46px;height:46px;border-radius:50%;background:var(--ml-accent-2);opacity:.75}
.d .shot i{position:absolute;left:12px;top:26px;width:70px;height:10px;border-radius:5px;background:var(--ml-accent)}
.d .shot s{position:absolute;right:12px;bottom:12px;width:56px;height:34px;border-radius:7px;background:rgba(255,255,255,.85);box-shadow:0 1px 3px rgba(35,15,10,.12)}
.d .ar{display:flex;flex-direction:column;justify-content:center;min-width:0}
.d .ar b{font-size:13.5px;font-weight:600}
.d .ar small{display:block;margin-top:2px}
.d .btns{display:flex;gap:8px;grid-column:1 / -1}
.d .s.done .tt .st.wait{display:none}
.d .s:not(.done) .tt .st.ok{display:none}
.d .s.now:not(.ap) .st.wait{display:none}
.d .ap.done .appr{display:none}
.d .sum{display:flex;flex-direction:column;padding:24px}
.d .big{margin-top:10px;font-size:44px;line-height:1;font-weight:650;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .big span{font-size:20px;color:var(--ml-muted)}
.d .bar{height:8px;margin-top:16px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .bar i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.5);transform-origin:0 50%;transition:transform 900ms var(--ml-ease)}
.d .kv{display:flex;flex-direction:column;margin-top:18px;list-style:none}
.d .kv li{display:flex;justify-content:space-between;gap:10px;padding:11px 0;border-top:1px solid var(--ml-line);font-size:13.5px;color:var(--ml-muted)}
.d .kv b{font-weight:600;color:var(--ml-ink)}
.d .act{margin-top:18px;padding-top:16px;border-top:1px solid var(--ml-line)}
.d .act ul{display:flex;flex-direction:column;gap:14px;margin-top:12px;list-style:none}
.d .act li{display:flex;align-items:flex-start;gap:12px;font-size:13.5px;color:var(--ml-ink-2)}
.d .act li i{flex:none;width:8px;height:8px;margin-top:6px;border-radius:50%;background:var(--ml-accent)}
.d .act li i.d{background:var(--ml-bar)}
.d .act b{font-weight:600;color:var(--ml-ink)}
.d .act small{display:block;margin-top:2px;font-size:12px;color:var(--ml-muted)}
.d .team{display:flex;align-items:center;margin-top:auto;padding-top:16px;border-top:1px solid var(--ml-line)}
.d .team .av{margin-left:-5px;box-shadow:0 0 0 3px #fff}
.d .team .av:first-child{margin-left:0}
.d .team small{margin-left:12px}
@container scr (max-width: 760px){
  .d .shell{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .page{padding:20px 16px}
  .d h1{font-size:24px}
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .tl{padding:20px 18px 8px}
  .d .appr{flex-direction:column}
  .d .shot{width:100%}
  .d .sum{order:-1}
  .d .act{display:none}
  .d .team{margin-top:8px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const CK = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
      const ms = [
        ['Discovery and kickoff', 'Sep 8', 'Goals, audience and scope agreed with your team.'],
        ['Sitemap and wireframes', 'Sep 29', 'Twelve pages mapped and signed off.'],
        ['Homepage design', 'Oct 14', 'Three concepts narrowed to one. Review the final homepage below.'],
        ['Build and CMS setup', 'Oct 31', 'Development starts once the design is approved.'],
        ['Content review', 'Nov 7', 'You check every page before it goes live.'],
        ['Launch', 'Nov 14', 'Go live, redirects and a handover call.'],
      ];
      const ol = $('.steps');
      ol.innerHTML = ms
        .map(([t, d, p], i) => {
          const ap = i === 2;
          const body = ap
            ? `<div class="appr"><div class="shot" aria-hidden="true"><i></i><s></s></div><div class="ar"><b>Homepage v3 is ready</b><small>Shared by Daniel Okafor, 2 hours ago</small></div><div class="btns"><button class="cta sm ok" type="button">Approve</button><button class="ghost sm" type="button">Request changes</button></div></div>`
            : '';
          return `<li class="s ${i < 2 ? 'done' : i === 2 ? 'now ap' : 'up'}" data-i="${i}"><span class="nd">${CK}</span><div><div class="tt"><b>${t}</b>${ap ? '<span class="st wait">Needs your approval</span><span class="st ok">Approved by you</span>' : ''}<time>${d}</time></div><div class="bd"><div><p>${p}</p>${body}</div></div></div></li>`;
        })
        .join('');
      const items = [...ol.children];
      let stage = 2;
      const setPc = (to) => {
        const el = $('.pc');
        const from = +el.textContent;
        const t0 = performance.now();
        const f = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 800);
          el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(f);
        };
        requestAnimationFrame(f);
        $('.bar i').style.transform = `scaleX(${to / 100})`;
      };
      let tt = 0;
      const toast = (m) => {
        $('.toast b').textContent = m;
        $('.toast').classList.add('show');
        clearTimeout(tt);
        tt = setTimeout(() => $('.toast').classList.remove('show'), 2400);
      };
      const set = (n) => {
        stage = n;
        items.forEach((li, i) => {
          li.classList.toggle('done', i < n);
          li.classList.toggle('up', i > n);
          li.classList.toggle('now', i === n);
        });
        $('.md').textContent = `${n} of 6`;
        $('.wy').textContent = n === 2 ? '1 approval' : 'Nothing';
        $('.it em').style.opacity = n === 2 ? 1 : 0;
        setPc(Math.round((n / 6) * 100));
      };
      const approve = () => {
        if (stage !== 2) return;
        set(3);
        toast('Homepage approved. Build starts today.');
      };
      $('.ok').addEventListener('click', approve);
      $('.btns .ghost').addEventListener('click', () => toast('Elena was notified of your changes'));

      // Autoplay: approve the homepage, the timeline advances; then rewind and repeat. Real input hands over for 4s.
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      set(2);
      $('.pc').textContent = '33';
      $('.bar i').style.transform = 'scaleX(.33)';
      cur.style.transform = 'translate(760px,600px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (stage === 2 && (await aim($('.ok'), 0.5, 0.55))) approve();
          await wait(4800);
          if (idle() && stage === 3) {
            set(2);
            await wait(1600);
          }
        }
      })();
    },
    prompt: `Build a project timeline page with approvals for a client portal, full viewport (min-height: 100dvh), left-sidebar shell.

Layout: grid columns 248px / minmax(0, 1fr). Sidebar (white, 1px right hairline): agency logo tile and name, a micro-label with the client name, nav items 42px tall with line icons (Overview, Timeline active with an unread count, Files, Invoices, Messages), and at the bottom a "Your project lead" card with avatar, name and a message icon button. Main (padding 30px 34px, own scroll): micro-label "Website redesign", a 28px "Project timeline" title and a green "On track for Nov 14" pill. Below, two columns (1.7fr / 1fr): a large timeline card and a summary card (big tabular percentage, 8px gradient progress bar, key-value rows: milestones done, days to launch, waiting on you, and an avatar stack of the team).

Timeline: a vertical ordered list of 6 milestones. Each has a 30px node (done = filled accent circle with a check, current = white circle with an accent ring, soft 5px halo and inner dot, upcoming = hollow grey), a connector line behind (grey track plus an accent layer that fills with transform: scaleY from the top, 700ms) and a title with a date on the right. The current milestone expands (grid-template-rows 0fr to 1fr, spring 587ms) to show a description and, for the approval milestone, an inset card with a drawn design thumbnail, "Homepage v3 is ready", who shared it and when, and two buttons: primary "Approve" and ghost "Request changes".

Behavior: Approve marks that node done (check scales in with a slight overshoot), fills its connector, collapses it and expands the next milestone, swaps the "Needs your approval" pill for a green "Approved by you", counts the percentage up with ease-out cubic while the bar scales (transform: scaleX), clears the sidebar badge and shows a toast. Request changes sends a toast and keeps the milestone open.

Accessibility: nav and buttons are real buttons, ordered list semantics for the timeline, the current step has aria-current="step", :focus-visible rings, prefers-reduced-motion shortens the transitions. Phone (under 760px): hide the sidebar, put the summary card above the timeline and stack the approval card. One accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (Sidebar, Timeline, Milestone, ApprovalCard, Summary).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-files',
    cat: 'app-portals',
    title: 'File and document hub',
    sub: 'A file uploads, then opens in preview',
    html: `
<div class="app">
  <header class="top">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Northgate</b><span class="sep">/</span><span class="muted">Shared with Fernway Design</span></div>
    <label class="search">${I(P.search, 16)}<input type="search" placeholder="Search files" aria-label="Search files"></label>
    <span class="av">AL</span>
  </header>
  <div class="split">
    <main class="pane">
      <div class="head in" style="--i:0"><div><h1>Shared files</h1><p class="lead">24 files from your team and ours. Drop anything we need.</p></div><button class="cta up" type="button">${I(P.upload, 16)}Upload file</button></div>
      <div class="chips in" style="--i:1" role="tablist"><span class="pill" aria-hidden="true"></span><button class="c on" type="button">All<i>24</i></button><button class="c" type="button">Brand<i>9</i></button><button class="c" type="button">Contracts<i>4</i></button><button class="c" type="button">Photos<i>11</i></button></div>
      <div class="card tbl in" style="--i:2"><ul class="files"></ul></div>
    </main>
    <aside class="prev in" style="--i:3" aria-label="Preview">
      <div class="doc"><div class="page-art"></div></div>
      <div class="pm"><div><h2 class="pn"></h2><small class="ps"></small></div><span class="st ok nw">New</span></div>
      <div class="pa"><button class="cta sm" type="button">${I(P.dl, 15)}Download</button><button class="ghost sm" type="button">Share link</button></div>
      <ul class="kv"><li><span>Added by</span><b class="pb"></b></li><li><span>Version</span><b>v3</b></li><li><span>Shared with</span><b>Northgate team</b></li></ul>
    </aside>
  </div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${SH}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;margin-right:auto;font-size:14px}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .sep{color:var(--ml-bar)}
.d .search{display:flex;align-items:center;gap:8px;width:260px;height:38px;padding:0 12px;border-radius:11px;background:var(--ml-surface);color:var(--ml-muted)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px}
.d .split{display:grid;grid-template-columns:minmax(0,1fr) 330px;flex:1;min-height:0}
.d .pane{display:flex;flex-direction:column;gap:18px;min-width:0;min-height:0;padding:28px 28px 24px;overflow-y:auto;scrollbar-width:thin}
.d .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .head h1{font-size:26px}
.d .head .lead{margin-top:6px;font-size:14px}
.d .chips{position:relative;display:flex;gap:4px;align-self:flex-start;padding:4px;border-radius:12px;background:var(--ml-bar-2)}
.d .c{position:relative;z-index:1;display:flex;align-items:center;gap:6px;height:32px;padding:0 13px;border:0;border-radius:9px;background:none;font-size:13px;font-weight:550;color:var(--ml-ink-2)}
.d .c i{font:500 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .c.on{color:var(--ml-accent-ink);font-weight:600}
.d .pill{position:absolute;top:4px;left:0;height:32px;border-radius:9px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.1);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tbl{padding:6px 8px;overflow:hidden}
.d .files{list-style:none}
.d .f{display:grid;grid-template-columns:42px minmax(0,1fr) 78px 74px 30px;align-items:center;gap:14px;padding:11px 12px;border-radius:12px;cursor:pointer;transition:background-color .2s ease}
.d .ins{border-radius:12px}
.d .f:hover{background:var(--ml-surface)}
.d .f.sel{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .ft{display:grid;place-items:center;width:42px;height:42px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ft.img{background:var(--ml-bar-2);color:var(--ml-accent-2)}
.d .fn{min-width:0}
.d .fn b{display:block;overflow:hidden;font-size:14px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .fn small{display:block;font-size:12px}
.d .f time,.d .f .sz{font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
.d .f .sz{text-align:right}
.d .prog{display:none;margin-top:7px;height:5px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .f.upl .prog{display:block}
.d .f.upl small{display:none}
.d .prog i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(0);transform-origin:0 50%}
.d .f.upl .sz,.d .f.upl time{color:var(--ml-accent-ink)}
.d .prev{display:flex;flex-direction:column;gap:18px;min-width:0;min-height:0;padding:28px 26px;background:var(--ml-bg);border-left:1px solid var(--ml-line);overflow-y:auto}
.d .doc{display:grid;place-items:center;height:250px;border-radius:16px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .page-art{position:relative;width:168px;height:212px;padding:18px 16px;border-radius:8px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);overflow:hidden;animation:po-in 520ms var(--ml-spring) both}
.d .pa-t{width:60%;height:10px;border-radius:5px;background:var(--ml-accent)}
.d .pa-b{height:6px;margin-top:9px;border-radius:3px;background:var(--ml-bar)}
.d .pa-sw{display:flex;gap:6px;margin-top:16px}
.d .pa-sw i{flex:1;height:30px;border-radius:7px;background:var(--ml-accent)}
.d .pa-sw i:nth-child(2){background:var(--ml-accent-2)}
.d .pa-sw i:nth-child(3){background:var(--ml-accent-line)}
.d .pa-sw i:nth-child(4){background:var(--ml-bar)}
.d .pa-ph{position:absolute;inset:0;background:linear-gradient(180deg,var(--ml-accent-soft) 0%,#fff 90%)}
.d .pa-ph::before{content:"";position:absolute;right:30px;top:36px;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-2)}
.d .pa-ph::after{content:"";position:absolute;left:-10px;right:-10px;bottom:-30px;height:110px;border-radius:50% 50% 0 0;background:var(--ml-accent-line)}
.d .pm{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .pm h2{font-size:17px;overflow-wrap:anywhere}
.d .pm small{display:block;margin-top:3px}
.d .nw{opacity:0;transform:scale(.8);transition:opacity .25s ease,transform .5s var(--ml-bounce)}
.d .nw.on{opacity:1;transform:none}
.d .pa{display:flex;gap:10px}
.d .prev .kv{display:flex;flex-direction:column;list-style:none}
.d .prev .kv li{display:flex;justify-content:space-between;gap:10px;padding:12px 0;border-top:1px solid var(--ml-line);font-size:13.5px;color:var(--ml-muted)}
.d .prev .kv b{font-weight:600;color:var(--ml-ink)}
@container scr (max-width: 760px){
  .d .split{grid-template-columns:minmax(0,1fr)}
  .d .prev,.d .search,.d .brand .muted,.d .brand .sep{display:none}
  .d .top{padding:0 16px}
  .d .pane{padding:20px 16px}
  .d .head{flex-direction:column;align-items:flex-start}
  .d .f{grid-template-columns:42px minmax(0,1fr) 60px}
  .d .f time,.d .f > span:last-child{display:none}
  .d .chips{max-width:100%;overflow:hidden}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const FILE = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>';
      const IMG = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/></svg>';
      const files = [
        ['Homepage hero.png', 'img', '1.8 MB', 'Ana Lim', 'Oct 13'],
        ['Service agreement.pdf', 'pdf', '312 KB', 'Elena Petrova', 'Oct 9'],
        ['Brand questionnaire.pdf', 'pdf', '640 KB', 'Ana Lim', 'Oct 2'],
        ['Team photos.png', 'img', '4.1 MB', 'Kwame Mensah', 'Sep 29'],
      ];
      const ul = $('.files');
      const row = (f, cls) => `<li class="ins${cls || ''}"><div class="f"><span class="ft ${f[1]}">${f[1] === 'img' ? IMG : FILE}</span><div class="fn"><b>${f[0]}</b><small>Added by ${f[3]}</small><div class="prog"><i></i></div></div><span class="sz">${f[2]}</span><time>${f[4]}</time><span></span></div></li>`;
      ul.innerHTML = files.map((f) => row(f, '')).join('');
      const ART = {
        pdf: '<div class="pa-t"></div><div class="pa-b" style="width:92%"></div><div class="pa-b" style="width:80%"></div><div class="pa-b" style="width:88%"></div><div class="pa-sw"><i></i><i></i><i></i><i></i></div><div class="pa-b" style="width:70%;margin-top:18px"></div><div class="pa-b" style="width:84%"></div><div class="pa-b" style="width:58%"></div>',
        img: '<div class="pa-ph"></div>',
      };
      const showPrev = (f, isNew) => {
        const pg = $('.page-art');
        pg.innerHTML = ART[f[1]];
        pg.style.animation = 'none';
        void pg.offsetWidth;
        pg.style.animation = '';
        $('.pn').textContent = f[0];
        $('.ps').textContent = `${f[2]} - ${f[1] === 'img' ? 'Image' : 'PDF'} - ${f[4]}`;
        $('.nw').classList.toggle('on', !!isNew);
        $('.pb').textContent = f[3];
        [...ul.children].forEach((li) => li.firstElementChild.classList.remove('sel'));
      };
      const select = (li, f) => {
        showPrev(f, false);
        li.firstElementChild.classList.add('sel');
      };
      ul.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;
        const i = [...ul.children].indexOf(li);
        const all = li.dataset.nf ? [li.dataset.nf.split('|')] : null;
        select(li, all ? all[0] : files[i - (ul.children.length - files.length)]);
      });
      select(ul.children[0], files[0]);
      // gliding filter chips (visual filter of the list heading only)
      const cs = [...root.querySelectorAll('.c')];
      const pill = $('.pill');
      const slide = (b) => {
        cs.forEach((x) => x.classList.toggle('on', x === b));
        pill.style.width = b.offsetWidth + 'px';
        pill.style.transform = `translateX(${b.offsetLeft}px)`;
      };
      cs.forEach((b) => b.addEventListener('click', () => slide(b)));
      pill.style.transition = 'none';
      slide(cs[0]);
      requestAnimationFrame(() => (pill.style.transition = ''));
      let tt = 0;
      const toast = (m) => {
        $('.toast b').textContent = m;
        $('.toast').classList.add('show');
        clearTimeout(tt);
        tt = setTimeout(() => $('.toast').classList.remove('show'), 2400);
      };
      let busy = false;
      const nf = ['Brand guidelines v3.pdf', 'pdf', '4.2 MB', 'You', 'Just now'];
      const upload = async () => {
        if (busy) return;
        busy = true;
        ul.insertAdjacentHTML('afterbegin', row(nf, ' new'));
        const li = ul.firstElementChild;
        li.dataset.nf = nf.join('|');
        const f = li.firstElementChild;
        f.classList.add('upl');
        const bar = li.querySelector('.prog i');
        const sz = li.querySelector('.sz');
        const tm = li.querySelector('time');
        [...ul.children].forEach((x) => x.firstElementChild.classList.remove('sel'));
        const t0 = performance.now();
        let k = 0;
        while (k < 1 && root.isConnected) {
          await new Promise((r) => setTimeout(r, 50));
          if (root.dataset.paused) continue;
          k = Math.min(1, (performance.now() - t0) / 2300);
          bar.style.transform = `scaleX(${k})`;
          sz.textContent = `${Math.round(k * 100)}%`;
          tm.textContent = 'Uploading';
        }
        f.classList.remove('upl');
        sz.textContent = nf[2];
        tm.textContent = nf[4];
        li.querySelector('.fn small').textContent = 'Added by You';
        f.classList.add('sel');
        showPrev(nf, true);
        f.classList.add('sel');
        toast('Brand guidelines v3.pdf uploaded');
        busy = false;
      };
      $('.up').addEventListener('click', upload);

      // Autoplay: press Upload, a file uploads with progress, then it opens in the preview. Real input hands over for 4s.
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      cur.style.transform = 'translate(560px,420px)';
      (async () => {
        await wait(1400);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (await aim($('.up'), 0.5, 0.5)) upload();
          await wait(5200);
          if (idle() && ul.children.length > files.length) {
            ul.firstElementChild.remove();
            select(ul.children[0], files[0]);
          }
          await wait(1800);
        }
      })();
    },
    prompt: `Build a shared file and document hub for a client portal, full viewport (min-height: 100dvh), with a top bar and a list-plus-preview split.

Layout: a 64px top bar (logo tile, client name, a muted "Shared with <agency>" crumb, a 260px search field, avatar). Below, a grid of minmax(0, 1fr) and a 330px preview column with a 1px left hairline. The list column (padding 28px) has a 26px title, a one-line subtitle ("24 files from your team and ours"), a primary "Upload file" button with an upload icon on the right, a segmented filter (All, Brand, Contracts, Photos with counts) on a soft grey-blue track with ONE white highlight that glides between options with transform: translateX and a 587ms critically damped spring, and a white card holding the file rows. Each row is a 12px-radius grid: 42px icon tile (blue tint for documents, grey-blue for images), name with "Added by" line, size and date in tabular mono, hover surface, selected state with a soft accent fill and 1px accent-line ring. The preview column shows a 250px frame holding a drawn page (title bar, text bars, 4 colour swatches) or a photo tile (sun and horizon), file name, size, type and date, a green "New" pill and Download / Share link buttons.

Behavior: Upload inserts a row at the top (grid-template-rows 0fr to 1fr, 560ms) with a 5px progress bar driven by transform: scaleX and a live percentage in the size column, then the row settles, is selected, the preview swaps (opacity and translateY 8px spring) with the "New" pill popping in, and a toast confirms. Clicking any row selects it and swaps the preview. Support real drag and drop onto the list for a full build.

Accessibility: rows are focusable with Enter to select, the progress bar has role="progressbar" with aria-valuenow, toast is role="status", prefers-reduced-motion shortens motion. Phone (under 760px): hide the preview column and the search, show 3 columns per row (icon, name, size). One accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, FilterTabs, FileList, FileRow, PreviewPane, Toast).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-invoice',
    cat: 'app-portals',
    title: 'Invoices and pay now',
    sub: 'Card fields fill, pay, invoice flips to paid',
    html: `
<div class="app">
  <header class="top"><div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Solace Studio</b><em>Billing</em></div><span class="who">Northgate</span><span class="av">AL</span></header>
  <main class="page">
    <div class="col">
      <div class="hd in" style="--i:0"><div><p class="lbl">Invoice #1042</p><h1>Amount due <span class="amt">$4,800</span></h1></div><span class="st wait stt">${I(P.clock, 12)}<span>Due Oct 21</span></span></div>
      <section class="card inv in" style="--i:1">
        <ul class="li"><li><span>Brand identity system</span><b>$2,400</b></li><li><span>Homepage design</span><b>$1,600</b></li><li><span>Style guide</span><b>$800</b></li></ul>
        <p class="tot"><span>Total due</span><b>$4,800.00</b></p>
      </section>
      <div class="stack in" style="--i:2">
        <form class="card pay" novalidate>
          <div class="ph"><h2>Pay by card</h2><span class="lk">${I(P.lock, 13)}Secure checkout</span></div>
          <label class="fl" for="po-inv-num">Card number</label>
          <div class="field" data-f="num">${I(P.card, 17)}<input id="po-inv-num" inputmode="numeric" autocomplete="cc-number" maxlength="19" placeholder="1234 1234 1234 1234"></div>
          <div class="two">
            <div><label class="fl" for="po-inv-exp">Expiry</label><div class="field" data-f="exp"><input id="po-inv-exp" inputmode="numeric" autocomplete="cc-exp" maxlength="7" placeholder="MM / YY"></div></div>
            <div><label class="fl" for="po-inv-cvc">CVC</label><div class="field" data-f="cvc"><input id="po-inv-cvc" inputmode="numeric" autocomplete="cc-csc" maxlength="4" placeholder="123"></div></div>
          </div>
          <label class="fl" for="po-inv-name">Name on card</label>
          <div class="field" data-f="name"><input id="po-inv-name" autocomplete="cc-name" value="Ana Lim"></div>
          <button class="cta go" type="submit"><span class="bl">Pay $4,800</span><span class="busy">Processing payment</span></button>
        </form>
        <div class="card ok" aria-live="polite">
          <svg class="big-ck" viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><circle cx="32" cy="32" r="28" pathLength="1"/><path d="m21 33 8 8 15-17" pathLength="1"/></svg>
          <h2>Payment received</h2>
          <p class="muted">$4,800.00 paid with Visa ending 4242. A receipt is on its way to ana@northgate.co.</p>
          <button class="ghost" type="button">${I(P.dl, 16)}Download receipt</button>
        </div>
      </div>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${SH}
.d .top{display:flex;flex:none;align-items:center;gap:12px;height:64px;padding:0 32px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;margin-right:auto}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .brand em{padding:3px 9px;border-radius:999px;background:var(--ml-surface);font-size:12px;font-style:normal;font-weight:600;color:var(--ml-muted)}
.d .who{font-size:13.5px;color:var(--ml-muted)}
.d .page{display:flex;flex:1;min-height:0;padding:22px 24px 24px;overflow-y:auto;scrollbar-width:thin}
.d .col{display:flex;flex-direction:column;gap:16px;width:100%;max-width:600px;margin:auto}
.d .hd{display:flex;align-items:flex-end;justify-content:space-between;gap:14px}
.d .hd h1{margin-top:6px;font-size:28px}
.d .amt{color:var(--ml-accent)}
.d .stt{transition:background-color .4s ease,color .4s ease}
.d .stt svg{display:block}
.d .inv{padding:6px 24px 8px}
.d .li{list-style:none}
.d .li li{display:flex;justify-content:space-between;gap:12px;padding:11px 0;border-bottom:1px solid var(--ml-line);font-size:14px;color:var(--ml-ink-2)}
.d .li b{font-weight:600;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .tot{display:flex;justify-content:space-between;align-items:baseline;padding:14px 0 10px;font-size:14px;color:var(--ml-muted)}
.d .tot b{font-size:22px;font-weight:650;letter-spacing:-.03em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .stack{display:grid;grid-template-columns:minmax(0,1fr)}
.d .stack > *{grid-area:1/1}
.d .pay{padding:18px 24px 22px;transition:opacity .35s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .ph{display:flex;align-items:center;justify-content:space-between}
.d .lk{display:inline-flex;align-items:center;gap:5px;font-size:12px;color:var(--ml-muted)}
.d .fl{display:block;margin-top:12px;font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .two{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px}
.d .field{display:flex;align-items:center;gap:10px;height:44px;margin-top:6px;padding:0 13px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .25s ease,background-color .25s ease}
.d .field input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:14.5px;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .field input::placeholder{color:#A1A1A6}
.d .field:focus-within,.d .field.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .field.bad{box-shadow:inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1);color:#FF3B30;animation:po-shake 380ms var(--ml-ease)}
.d .go{position:relative;display:grid;width:100%;height:48px;margin-top:18px;overflow:hidden;font-size:15px}
.d .go > span{grid-area:1/1;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .go .busy{opacity:0;transform:translateY(10px)}
.d .go.loading .bl{opacity:0;transform:translateY(-10px)}
.d .go.loading .busy{opacity:1;transform:none}
.d .go.loading::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.38) 50%,transparent 70%);background-size:220% 100%;animation:po-sheen 1.1s linear infinite}
.d .ok{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:26px 28px;text-align:center;opacity:0;visibility:hidden;transform:translateY(12px);transition:opacity .4s ease,transform var(--ml-spring-dur) var(--ml-spring),visibility 0s .4s}
.d .ok p{max-width:380px;font-size:14px}
.d .ok .ghost{margin-top:8px}
.d .big-ck{margin-bottom:4px}
.d .big-ck circle{fill:rgba(29,185,84,.1);stroke:#1DB954;stroke-width:3;stroke-dasharray:1;stroke-dashoffset:1}
.d .big-ck path{fill:none;stroke:#1DB954;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1}
.d .paid .pay{opacity:0;pointer-events:none;transform:translateY(-8px)}
.d .paid .ok{opacity:1;visibility:visible;transform:none;transition-delay:.15s,.15s,0s}
.d .paid .big-ck circle{animation:po-draw 600ms var(--ml-ease) .3s forwards}
.d .paid .big-ck path{animation:po-draw 450ms var(--ml-ease) .75s forwards}
.d .stt.is-paid{background:rgba(29,185,84,.11);color:#12893C}
@keyframes po-draw{to{stroke-dashoffset:0}}
@keyframes po-shake{0%,100%{transform:none}25%{transform:translateX(-5px)}55%{transform:translateX(4px)}80%{transform:translateX(-2px)}}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .who,.d .brand em{display:none}
  .d .page{padding:20px 16px}
  .d .hd{flex-direction:column;align-items:flex-start}
  .d .hd h1{font-size:25px}
  .d .pay{padding:20px 18px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const form = $('.pay');
      const num = $('#po-inv-num');
      const exp = $('#po-inv-exp');
      const cvc = $('#po-inv-cvc');
      const name = $('#po-inv-name');
      const go = $('.go');
      const col = $('.stack');
      const stt = $('.stt');
      const mark = (input, ok) => {
        input.closest('.field').classList.toggle('bad', !ok);
        input.setAttribute('aria-invalid', String(!ok));
        return ok;
      };
      num.addEventListener('input', () => {
        num.value = num.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
      });
      exp.addEventListener('input', () => {
        const d = exp.value.replace(/\D/g, '').slice(0, 4);
        exp.value = d.length > 2 ? `${d.slice(0, 2)} / ${d.slice(2)}` : d;
      });
      cvc.addEventListener('input', () => (cvc.value = cvc.value.replace(/\D/g, '').slice(0, 4)));
      [num, exp, cvc, name].forEach((el) => el.addEventListener('input', () => el.closest('.field').classList.remove('bad')));
      let busy = false;
      let timers = [];
      const later = (fn, ms) => timers.push(setTimeout(fn, ms));
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy || col.classList.contains('paid')) return;
        const ok = [
          mark(num, num.value.replace(/\s/g, '').length === 16),
          mark(exp, /^\d\d \/ \d\d$/.test(exp.value)),
          mark(cvc, cvc.value.length >= 3),
          mark(name, name.value.trim().length > 1),
        ].every(Boolean);
        if (!ok) return;
        busy = true;
        go.classList.add('loading');
        later(() => {
          go.classList.remove('loading');
          col.classList.add('paid');
          stt.classList.add('is-paid');
          stt.classList.remove('wait');
          stt.lastElementChild.textContent = 'Paid today';
          $('.amt').textContent = '$0';
          busy = false;
        }, 1400);
      });
      const reset = () => {
        col.classList.remove('paid');
        stt.classList.remove('is-paid');
        stt.classList.add('wait');
        stt.lastElementChild.textContent = 'Due Oct 21';
        $('.amt').textContent = '$4,800';
        [num, exp, cvc].forEach((el) => (el.value = ''));
      };
      $('.ok .ghost').addEventListener('click', reset);

      // Autoplay: fill the card, press Pay, the invoice flips to paid; then rewind. Real input hands over for 4s.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until && !form.contains(root.getRootNode().activeElement);
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const type = async (input, text) => {
        const f = input.closest('.field');
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          input.value += ch;
          input.dispatchEvent(new Event('input'));
          await wait(50 + Math.random() * 50);
        }
        f.classList.remove('is-auto');
        return true;
      };
      cur.style.transform = 'translate(760px,420px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (col.classList.contains('paid')) {
            await wait(3200);
            if (idle()) reset();
            await wait(900);
            continue;
          }
          [num, exp, cvc].forEach((el) => (el.value = ''));
          moveTo(num.closest('.field'), 0.4);
          await wait(750);
          if (!(await type(num, '4242424242424242'))) continue;
          moveTo(exp.closest('.field'), 0.4);
          await wait(600);
          if (!(await type(exp, '1029'))) continue;
          moveTo(cvc.closest('.field'), 0.4);
          await wait(500);
          if (!(await type(cvc, '318'))) continue;
          moveTo(go, 0.5);
          await wait(800);
          if (!idle()) continue;
          cur.classList.add('press');
          go.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          go.classList.remove('press');
          form.requestSubmit();
          await wait(2600);
        }
      })();
    },
    prompt: `Build an invoice payment page for a client portal, full viewport (min-height: 100dvh), centered single-column layout.

Layout: a 64px top bar (logo tile, agency name, a "Billing" pill, the client company name, avatar). Below, one 600px column centered with 16px gaps and 26px page padding: (1) a header with a micro-label "Invoice #1042", a 28px heading "Amount due $4,800" with the amount in your accent color, and a "Due Oct 21" status pill with a clock icon; (2) a white card (16px radius, hairline plus soft shadow) listing line items (label left, tabular amount right, 1px dividers) and a total row with a 22px bold total; (3) a "Pay by card" card: heading, a "Secure checkout" lock caption, Card number (leading card icon), Expiry and CVC side by side, Name on card, and a full-width 48px gradient primary button "Pay $4,800". Fields are 44px, 12px radius, tinted fill, 1.5px accent ring plus 4px soft ring on focus.

Behavior: format as the user types (card number in groups of 4, expiry as "MM / YY", digits only), novalidate with your own validation on submit (16 digits, valid expiry shape, CVC 3 to 4 digits, name present); an invalid field gets a red ring, a 380ms horizontal shake and aria-invalid. On submit the button label slides up out and "Processing payment" slides in with a light sheen across the button (no spinner). On success the form fades and lifts away while a success card takes its place: a circle and check drawn with stroke-dashoffset (pathLength="1", 600ms then 450ms), "Payment received", a receipt line and a "Download receipt" ghost button; the status pill turns green and reads "Paid today" and the amount drops to $0.

Accessibility: labels tied to inputs, autocomplete tokens (cc-number, cc-exp, cc-csc, cc-name), the success card is aria-live="polite", :focus-visible rings, prefers-reduced-motion removes the sheen and shake. Phone (under 760px): hide the top-bar extras, stack the heading and pill, tighten card padding. One accent color; green only for paid. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, InvoiceSummary, CardForm, PaymentSuccess).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-booking',
    cat: 'app-portals',
    title: 'Book a session',
    sub: 'Pick a date and slot, confirm the booking',
    html: `
<div class="app">
  <header class="top"><span class="mark">${I(P.mark, 16)}</span><div><b>Bayside Fitness members</b><small>Book your next session</small></div></header>
  <main class="page">
    <section class="card wiz in" style="--i:0">
      <aside class="info">
        <span class="av big">HK</span>
        <h2>Strength session</h2>
        <p class="muted">with Hana Kim</p>
        <ul class="facts"><li>${I(P.clock, 16)}45 minutes</li><li>${I(P.home, 16)}Studio B, Harbour Street</li><li>${I(P.users, 16)}Small group, 6 spots</li></ul>
        <p class="plan"><b>6 sessions left</b>on your Monthly plan</p>
      </aside>
      <div class="cal">
        <div class="mh"><h2>October 2026</h2><span class="arrows"><button type="button" class="ar" aria-label="Previous month">${I(P.chevR, 16)}</button><button type="button" class="ar r" aria-label="Next month">${I(P.chevR, 16)}</button></span></div>
        <div class="dow"><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span></div>
        <div class="days"></div>
      </div>
      <div class="slots">
        <p class="lbl sd"></p>
        <div class="sl"></div>
        <button class="cta conf" type="button" disabled><span>Choose a time</span></button>
      </div>
      <div class="done" aria-live="polite">
        <svg class="big-ck" viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><circle cx="32" cy="32" r="28" pathLength="1"/><path d="m21 33 8 8 15-17" pathLength="1"/></svg>
        <h2>You are booked</h2>
        <p class="when"></p>
        <p class="muted">Strength session with Hana Kim, Studio B. We sent a reminder to your email.</p>
        <div class="dbtn"><button class="cta" type="button">${I(P.cal, 16)}Add to calendar</button><button class="ghost again" type="button">Book another</button></div>
      </div>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${SH}
.d .top{display:flex;flex:none;align-items:center;justify-content:center;gap:12px;padding:22px 24px 4px}
.d .top div{display:flex;flex-direction:column}
.d .top b{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .app{justify-content:center}
.d .page{flex:0 1 auto;min-height:0;padding:14px 28px 32px;overflow-y:auto;scrollbar-width:thin}
.d .wiz{position:relative;display:grid;grid-template-columns:230px minmax(0,1.25fr) minmax(0,1fr);width:100%;max-width:900px;margin:0 auto;overflow:hidden}
.d .info{display:flex;flex-direction:column;padding:28px 24px;background:var(--ml-surface);border-right:1px solid var(--ml-line)}
.d .av.big{width:56px;height:56px;margin-bottom:16px;font-size:17px}
.d .info h2{font-size:19px;letter-spacing:-.03em}
.d .info .muted{margin-top:2px;font-size:13.5px}
.d .facts{display:flex;flex-direction:column;gap:12px;margin-top:22px;list-style:none;font-size:13.5px;color:var(--ml-ink-2)}
.d .facts li{display:flex;align-items:center;gap:10px}
.d .facts svg{flex:none;color:var(--ml-accent)}
.d .plan{margin-top:auto;padding:12px 14px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;color:var(--ml-muted)}
.d .plan b{display:block;font-size:14px;font-weight:650;color:var(--ml-ink)}
.d .cal{padding:26px 24px}
.d .mh{display:flex;align-items:center;justify-content:space-between}
.d .mh h2{font-size:17px}
.d .arrows{display:flex;gap:6px}
.d .ar{display:grid;place-items:center;width:32px;height:32px;border:0;border-radius:9px;background:var(--ml-surface);color:var(--ml-ink-2);transform:scaleX(-1)}
.d .ar.r{transform:none}
.d .dow,.d .days{display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:4px}
.d .dow{margin-top:18px;font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;text-align:center;color:var(--ml-muted)}
.d .days{margin-top:8px}
.d .dy{position:relative;aspect-ratio:1;border:0;border-radius:50%;background:none;font-size:14px;font-weight:550;font-variant-numeric:tabular-nums;color:var(--ml-ink);transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .dy:disabled{color:#B4BAC5;cursor:default}
.d .dy.av2:hover{background:var(--ml-accent-soft)}
.d .dy.has::after{content:"";position:absolute;left:50%;bottom:7px;width:4px;height:4px;margin-left:-2px;border-radius:50%;background:var(--ml-accent-2)}
.d .dy.today{box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .dy.on{background:var(--ml-accent);color:#fff;box-shadow:0 4px 12px rgba(255,68,51,.32)}
.d .dy.on::after{background:#fff}
.d .dy.press{transform:scale(.9)}
.d .slots{display:flex;flex-direction:column;padding:26px 24px;border-left:1px solid var(--ml-line)}
.d .sd{padding-top:3px}
.d .sl{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0 18px}
.d .sp{height:40px;border:0;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;font-variant-numeric:tabular-nums;color:var(--ml-ink-2);animation:po-in 420ms var(--ml-spring) both;animation-delay:calc(var(--k,0) * 35ms);transition:background-color .2s ease,box-shadow .2s ease,color .2s ease,transform 90ms ease-out}
.d .sp:hover{box-shadow:inset 0 0 0 1.5px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .sp:disabled{background:var(--ml-surface);box-shadow:none;color:#B4BAC5;text-decoration:line-through;cursor:default}
.d .sp.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent);color:var(--ml-accent-ink)}
.d .sp.press{transform:scale(.94)}
.d .conf{width:100%;margin-top:auto;height:46px;transition:opacity .25s ease,transform 90ms ease-out}
.d .conf:disabled{background:var(--ml-bar);box-shadow:none;color:var(--ml-muted);cursor:default}
.d .done{position:absolute;inset:0;z-index:5;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:24px;background:var(--ml-bg);text-align:center;opacity:0;visibility:hidden;transform:scale(.98);transition:opacity .35s ease,transform var(--ml-spring-dur) var(--ml-spring),visibility 0s .35s}
.d .done h2{font-size:24px;letter-spacing:-.03em}
.d .done .when{font-size:16px;font-weight:650;color:var(--ml-accent-ink)}
.d .done .muted{max-width:340px;font-size:14px}
.d .dbtn{display:flex;gap:10px;margin-top:10px}
.d .big-ck circle{fill:rgba(29,185,84,.1);stroke:#1DB954;stroke-width:3;stroke-dasharray:1;stroke-dashoffset:1}
.d .big-ck path{fill:none;stroke:#1DB954;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1}
.d .wiz.booked .done{opacity:1;visibility:visible;transform:none;transition-delay:0s}
.d .wiz.booked .big-ck circle{animation:po-draw 600ms var(--ml-ease) .25s forwards}
.d .wiz.booked .big-ck path{animation:po-draw 450ms var(--ml-ease) .7s forwards}
@keyframes po-draw{to{stroke-dashoffset:0}}
@container scr (max-width: 760px){
  .d .app{justify-content:flex-start}
  .d .page{flex:1;padding:12px 16px 24px}
  .d .wiz{grid-template-columns:minmax(0,1fr)}
  .d .info{display:none}
  .d .slots{border-left:0;border-top:1px solid var(--ml-line)}
  .d .cal,.d .slots{padding:20px 18px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const wiz = $('.wiz');
      const days = $('.days');
      const sl = $('.sl');
      const conf = $('.conf');
      const times = ['8:00 AM', '9:15 AM', '10:30 AM', '11:45 AM', '1:00 PM', '2:15 PM', '3:30 PM', '4:45 PM'];
      const dn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      const today = 14;
      let day = 16;
      let slot = null;
      const dow = (d) => (d + 2) % 7; // Oct 1, 2026 is a Thursday: index 3 with Monday first
      const cells = [];
      for (let i = 0; i < 3; i++) cells.push('<span></span>');
      for (let d = 1; d <= 31; d++) {
        const ok = d > today && dow(d) < 5 && d !== 20;
        cells.push(`<button class="dy${ok ? ' av2' : ''}${ok && d % 3 !== 0 ? ' has' : ''}${d === today ? ' today' : ''}" type="button" data-d="${d}"${ok ? '' : ' disabled'} aria-label="October ${d}">${d}</button>`);
      }
      days.innerHTML = cells.join('');
      const taken = (d, i) => (d * 3 + i * 5) % 7 === 0 || (d === 22 && i === 0);
      const label = (d) => `${dn[dow(d)]}, October ${d}`;
      const drawSlots = () => {
        $('.sd').textContent = label(day);
        sl.innerHTML = times.map((t, i) => `<button class="sp" style="--k:${i}" type="button" data-i="${i}"${taken(day, i) ? ' disabled' : ''}>${t}</button>`).join('');
        slot = null;
        conf.disabled = true;
        conf.firstElementChild.textContent = 'Choose a time';
      };
      const pickDay = (d) => {
        day = d;
        days.querySelectorAll('.dy').forEach((b) => b.classList.toggle('on', +b.dataset.d === d));
        drawSlots();
      };
      const pickSlot = (i) => {
        slot = i;
        sl.querySelectorAll('.sp').forEach((b) => b.classList.toggle('on', +b.dataset.i === i));
        conf.disabled = false;
        conf.firstElementChild.textContent = `Confirm ${times[i]}`;
      };
      days.addEventListener('click', (e) => {
        const b = e.target.closest('.dy');
        if (b && !b.disabled) pickDay(+b.dataset.d);
      });
      sl.addEventListener('click', (e) => {
        const b = e.target.closest('.sp');
        if (b && !b.disabled) pickSlot(+b.dataset.i);
      });
      const confirm = () => {
        if (slot === null) return;
        $('.when').textContent = `${label(day)} at ${times[slot]}`;
        wiz.classList.add('booked');
      };
      const unbook = () => {
        wiz.classList.remove('booked');
        pickDay(16);
      };
      conf.addEventListener('click', confirm);
      $('.again').addEventListener('click', unbook);
      pickDay(16);

      // Autoplay: pick a date, pick a slot, confirm; then rewind. Real input hands over for 4s.
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
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      cur.style.transform = 'translate(700px,640px)';
      (async () => {
        await wait(1400);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (wiz.classList.contains('booked')) {
            await wait(3600);
            if (idle()) unbook();
            await wait(900);
            continue;
          }
          if (day !== 22) {
            const b = days.querySelector('[data-d="22"]');
            if (!(await aim(b))) continue;
            pickDay(22);
            await wait(900);
          }
          const sp = sl.querySelector('[data-i="2"]');
          if (!(await aim(sp))) continue;
          pickSlot(2);
          await wait(700);
          if (!(await aim(conf, 0.5, 0.5))) continue;
          confirm();
          await wait(1200);
        }
      })();
    },
    prompt: `Build a "book a session" scheduling page for a members portal, full viewport (min-height: 100dvh), centered single-card layout.

Layout: a centered header (logo tile, "Bayside Fitness members", a one-line subtitle), then one 900px-max card (16px radius, hairline plus soft shadow, overflow hidden) with three columns: 230px / 1.25fr / 1fr. Left (soft grey-blue fill, right hairline): 56px coach avatar with initials, "Strength session" title, "with Hana Kim", a short facts list with line icons (45 minutes, studio, group size) and a plan note pinned to the bottom ("6 sessions left"). Middle: month title with prev/next icon buttons, a 7-column weekday header, and a 7-column grid of round day buttons (aspect-ratio: 1): past or unavailable days disabled and greyed, available days with a small dot, today with a 1.5px accent-line ring, the selected day a filled accent circle with a soft shadow. Right (left hairline): a micro-label with the selected full date, a 2-column grid of 40px time pills (booked ones disabled and struck through, selected one soft accent fill with a 1.5px accent ring) and a full-width primary button pinned to the bottom, disabled and reading "Choose a time" until a slot is picked, then "Confirm 10:30 AM".

Behavior: picking a day re-renders the slots with a staggered rise (opacity, translateY 8px, 35ms stagger, spring) and clears the choice; picking a slot enables the button. Confirm covers the card with a success layer (opacity and scale .98 to 1, spring 587ms): a circle and check drawn with stroke-dashoffset (pathLength="1"), "You are booked", the full date and time in your accent color, a short note and "Add to calendar" / "Book another" buttons. Support arrow-key navigation across the day grid and aria-pressed on day and slot buttons.

Accessibility: day buttons carry full aria-labels, disabled states use the disabled attribute, success layer is aria-live="polite", :focus-visible rings, prefers-reduced-motion removes the stagger. Phone (under 760px): hide the left info column and stack calendar above the slots. One accent color; green only on the success check. Plain HTML, CSS and JS, no libraries; React-friendly structure (SessionInfo, MonthGrid, SlotList, BookingSuccess).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-messages',
    cat: 'app-portals',
    title: 'Client messages',
    sub: 'Reply sends, typing dots, file arrives',
    html: `
<div class="app">
  <div class="shell">
    <aside class="side">
      <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Solace Studio</b></div>
      <div class="sh"><h2>Messages</h2><button class="ic" type="button" aria-label="New message">${I(P.plus, 16)}</button></div>
      <ul class="th"></ul>
    </aside>
    <section class="chat">
      <header class="ch"><span class="av">DO</span><div><b>Daniel Okafor</b><small class="ps"><span class="live"></span>Designer, online now</small></div><button class="ghost sm" type="button">${I(P.cal, 15)}Book a call</button></header>
      <div class="log" role="log" aria-live="polite"></div>
      <form class="comp"><button class="clip" type="button" aria-label="Attach a file">${I(P.clip, 18)}</button><input class="inp" type="text" placeholder="Write a message" aria-label="Write a message" autocomplete="off"><button class="send" type="submit" aria-label="Send">${I(P.send, 17)}</button></form>
    </section>
  </div>
  ${CURSOR}
</div>`,
    css: `${SH}
.d .shell{display:grid;grid-template-columns:300px minmax(0,1fr);flex:1;min-height:0}
.d .side{display:flex;flex-direction:column;min-height:0;padding:22px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;padding:0 8px 20px}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .sh{display:flex;align-items:center;justify-content:space-between;padding:0 8px 10px}
.d .sh h2{font-size:20px;letter-spacing:-.03em}
.d .ic{display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:10px;background:var(--ml-surface);color:var(--ml-ink-2)}
.d .th{display:flex;flex-direction:column;gap:2px;overflow-y:auto;list-style:none;scrollbar-width:none}
.d .tr{display:flex;align-items:center;gap:12px;width:100%;padding:12px 10px;border:0;border-radius:12px;background:none;text-align:left}
.d .tr:hover{background:var(--ml-surface)}
.d .tr.on{background:var(--ml-accent-soft)}
.d .tr div{flex:1;min-width:0}
.d .tr b{display:flex;justify-content:space-between;gap:6px;font-size:14px;font-weight:600}
.d .tr b time{font:500 11.5px/1.5 var(--ml-mono);color:var(--ml-muted)}
.d .tr p{overflow:hidden;margin-top:1px;font-size:13px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .tr .un{flex:none;width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .chat{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .ch{display:flex;flex:none;align-items:center;gap:12px;height:72px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .ch div{flex:1;display:flex;flex-direction:column;min-width:0}
.d .ch b{font-size:15px;font-weight:650}
.d .ps{display:flex;align-items:center;gap:7px}
.d .log{display:flex;flex:1;flex-direction:column;gap:10px;min-height:0;padding:22px 28px;overflow-y:auto;scrollbar-width:none}
.d .day{align-self:center;padding:4px 12px;border-radius:99px;background:var(--ml-bar-2);font-size:11.5px;font-weight:600;color:var(--ml-muted)}
.d .m{display:flex;flex-direction:column;align-items:flex-start;gap:6px;max-width:72%;animation:po-in 420ms var(--ml-spring) both}
.d .m.me{align-self:flex-end;align-items:flex-end}
.d .bub{padding:11px 15px;border-radius:18px 18px 18px 6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 2px rgba(35,15,10,.04);font-size:14px;line-height:1.45;color:var(--ml-ink)}
.d .me .bub{border-radius:18px 18px 6px 18px;background:var(--ml-accent);box-shadow:0 4px 12px rgba(255,68,51,.22);color:#fff}
.d .m time{padding:0 6px;font-size:11px;color:var(--ml-muted)}
.d .att{display:flex;align-items:center;gap:12px;width:250px;padding:11px 12px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow)}
.d .att .ft{display:grid;place-items:center;flex:none;width:40px;height:40px;border-radius:10px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .att p{flex:1;min-width:0;display:flex;flex-direction:column}
.d .att b{overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .att small{font-size:12px}
.d .att .dl{display:grid;place-items:center;width:32px;height:32px;border:0;border-radius:9px;background:var(--ml-surface);color:var(--ml-ink-2)}
.d .typing{display:inline-flex;gap:5px;padding:14px 16px;border-radius:18px 18px 18px 6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9)}
.d .typing i{width:7px;height:7px;border-radius:50%;background:var(--ml-muted);animation:po-dots 1.2s ease-in-out infinite}
.d .typing i:nth-child(2){animation-delay:.15s}.d .typing i:nth-child(3){animation-delay:.3s}
.d .comp{display:flex;flex:none;align-items:center;gap:10px;margin:0 28px 24px;padding:7px 7px 7px 10px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);transition:box-shadow .25s ease}
.d .comp:focus-within,.d .comp.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .clip{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:none;color:var(--ml-muted)}
.d .inp{flex:1;min-width:0;height:38px;border:0;outline:0;background:none;font-size:14.5px}
.d .inp::placeholder{color:#A1A1A6}
.d .send{display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:12px;background:var(--ml-grad);color:#fff;box-shadow:0 6px 14px rgba(255,68,51,.24);transition:transform 90ms ease-out}
.d .send.press,.d .send:active{transform:scale(.92)}
@container scr (max-width: 760px){
  .d .shell{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .ch{padding:0 16px}
  .d .ch .ghost{display:none}
  .d .log{padding:16px}
  .d .m{max-width:88%}
  .d .comp{margin:0 14px 16px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const log = $('.log');
      const th = $('.th');
      const inp = $('.inp');
      const comp = $('.comp');
      const FILE = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>';
      const DL = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg>';
      const threads = [
        ['DO', 'Daniel Okafor', 'Designer', '9:41', 'Great choice. I will refine B and send the final set.', 0, 0],
        ['EP', 'Elena Petrova', 'Project lead', 'Mon', 'Kickoff notes are in your files.', 0, 1],
        ['SW', 'Billing team', 'Solace Studio', 'Oct 9', 'Invoice #1042 is ready to pay.', 1, 2],
        ['HK', 'Hana Kim', 'Strategist', 'Oct 2', 'Thanks for the brand questionnaire!', 0, 0],
      ];
      const drawThreads = (preview, t) => {
        th.innerHTML = threads
          .map((x, i) => `<li><button class="tr${i === 0 ? ' on' : ''}" type="button"><span class="av b${x[6] + 1}">${x[0]}</span><div><b>${x[1]}<time>${i === 0 && t ? t : x[3]}</time></b><p>${i === 0 && preview ? preview : x[4]}</p></div>${x[5] || (i === 0 && preview && preview.startsWith('Sent') ? 1 : 0) ? '<span class="un"></span>' : ''}</button></li>`)
          .join('');
      };
      drawThreads();
      const msg = (who, text, time, extra) => `<div class="m ${who}">${text ? `<div class="bub">${text}</div>` : ''}${extra || ''}<time>${time}</time></div>`;
      const att = (n, s) => `<div class="att"><span class="ft">${FILE}</span><p><b>${n}</b><small>${s}</small></p><button class="dl" type="button" aria-label="Download">${DL}</button></div>`;
      const base = [
        '<span class="day">Today</span>',
        msg('', 'Morning Ana! The logo options are ready. All three directions are in the PDF.', '9:38 AM', att('Logo directions.pdf', '2.4 MB - PDF')),
        msg('me', 'Thanks Daniel, option B is our favourite.', '9:40 AM'),
        msg('', 'Great choice. I will refine B and send the final set.', '9:41 AM'),
      ];
      log.innerHTML = base.join('');
      log.scrollTop = log.scrollHeight;
      const down = () => log.scrollTo({ top: log.scrollHeight, behavior: 'smooth' });
      let busy = false;
      let timers = [];
      const later = (fn, ms) => timers.push(setTimeout(fn, ms));
      const send = (text) => {
        log.insertAdjacentHTML('beforeend', msg('me', text, 'Just now'));
        drawThreads('Sent: ' + text, 'Now');
        down();
      };
      const reply = () => {
        log.insertAdjacentHTML('beforeend', '<div class="m tp"><div class="typing" aria-label="Daniel is typing"><i></i><i></i><i></i></div></div>');
        down();
        later(() => {
          const t = log.querySelector('.tp');
          if (t) t.remove();
          log.insertAdjacentHTML('beforeend', msg('', 'On it! Here is the full logo pack, ready for use.', 'Just now', att('Final logos.zip', '12.4 MB - ZIP')));
          drawThreads('Sent you Final logos.zip', 'Now');
          down();
          busy = false;
        }, 1900);
      };
      comp.addEventListener('submit', (e) => {
        e.preventDefault();
        const v = inp.value.trim();
        if (!v || busy) return;
        busy = true;
        inp.value = '';
        send(v);
        later(reply, 700);
      });
      const reset = () => {
        timers.forEach(clearTimeout);
        timers = [];
        busy = false;
        log.innerHTML = base.join('');
        log.scrollTop = log.scrollHeight;
        drawThreads();
      };

      // Autoplay: type a reply, send, typing dots, a file arrives; then rewind. Real input hands over for 4s.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until && !comp.contains(root.getRootNode().activeElement);
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
        comp.classList.remove('is-auto');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      cur.style.transform = 'translate(780px,360px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (log.querySelector('.att + time') && log.querySelectorAll('.att').length > 1) {
            await wait(3200);
            if (idle()) reset();
            await wait(900);
            continue;
          }
          inp.value = '';
          moveTo(comp, 0.4);
          await wait(800);
          comp.classList.add('is-auto');
          let ok = true;
          for (const ch of 'Perfect, please send the final files.') {
            if (!idle()) {
              ok = false;
              break;
            }
            inp.value += ch;
            await wait(38 + Math.random() * 40);
          }
          comp.classList.remove('is-auto');
          if (!ok) continue;
          const sb = $('.send');
          moveTo(sb);
          await wait(700);
          if (!idle()) continue;
          cur.classList.add('press');
          sb.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          sb.classList.remove('press');
          comp.requestSubmit();
          await wait(4200);
        }
      })();
    },
    prompt: `Build a client messaging screen for a portal, full viewport (min-height: 100dvh), with a conversation list on the left and the open thread on the right.

Layout: grid columns 300px / minmax(0, 1fr). Left (white, 1px right hairline): logo tile and agency name, a "Messages" title with a new-message icon button, then conversation rows (avatar initials on blue tints, name, time in tabular mono, one-line truncated preview, an accent unread dot, the open one on a soft accent fill). Right: a 72px header (avatar, name, "Designer, online now" with a small pinging green dot, a ghost "Book a call" button), a scrolling message log (padding 22px 28px, 10px gaps), and a floating composer card (16px radius, hairline plus soft shadow, 1.5px accent ring and 4px soft ring on focus-within) with a paperclip button, the text input and a 40px gradient send button.

Messages: a centered "Today" chip; received bubbles are white with a hairline (radius 18px 18px 18px 6px), sent bubbles use your accent color with white text (18px 18px 6px 18px) and a soft colored shadow; max-width 72%; small time under each. Attachment cards (250px, file icon tile, truncated name, size and type, a download icon button) sit under the bubble.

Behavior: sending appends the bubble (opacity and translateY 8px spring, 420ms), updates the conversation preview and time, and smooth-scrolls the log to the bottom. After ~700ms a typing bubble (3 dots, 1.2s ease-in-out stagger .15s, translateY -3px) appears, then is replaced by the reply with an attachment card. Empty messages are ignored; Enter sends.

Accessibility: the log is role="log" with aria-live="polite", buttons have aria-labels, :focus-visible rings, prefers-reduced-motion stops the typing dots. Phone (under 760px): hide the list column, show the thread full width with a 14px composer margin. One accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (ThreadList, ChatHeader, MessageLog, Bubble, AttachmentCard, Composer).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-course',
    cat: 'app-portals',
    title: 'Course member area',
    sub: 'Finish a lesson, the queue moves on',
    html: `
<div class="app">
  <div class="mbar"><span class="mark">${I(P.mark, 16)}</span><b>Fernway Academy</b><span class="st"><span class="mp">50%</span>&nbsp;complete</span></div>
  <div class="shell">
    <aside class="side">
      <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Fernway Academy</b></div>
      <div class="course"><p class="lbl">Your course</p><h2>Brand Strategy Foundations</h2><div class="pbar"><i></i></div><p class="pl"><b class="cp">50%</b> complete<span class="cn">5 of 10 lessons</span></p></div>
      <nav class="mods" aria-label="Lessons"><span class="hl" aria-hidden="true"></span></nav>
    </aside>
    <main class="main">
      <div class="inner">
        <div class="vid" aria-label="Lesson video">
          <i class="sun"></i><i class="mt"></i><i class="mt2"></i>
          <span class="playb">${I(P.play, 26, 2.2)}</span>
          <div class="ctl"><span class="ptog">${I(P.play, 14, 2.4)}</span><div class="scr"><i></i></div><time class="tm">04:12 / 12:00</time></div>
        </div>
        <div class="lh in" style="--i:0">
          <div><p class="lbl em">Module 2 - Positioning</p><h1 class="lt1">Positioning statement</h1><p class="lead mt3">Lesson 6 of 10 - 12 min</p></div>
          <div class="acts"><button class="ghost" type="button">${I(P.dl, 16)}Worksheet</button><button class="cta done" type="button">${I(P.check, 16, 2.6)}Mark complete</button></div>
        </div>
        <div class="card nx in" style="--i:1"><span class="nxi">${I(P.play, 16)}</span><div><p class="lbl">Up next</p><b class="nxt">Workshop recap</b></div><span class="st mute nxd">6 min</span></div>
      </div>
    </main>
  </div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${SH}
.d .mbar{display:none}
.d .shell{display:grid;grid-template-columns:316px minmax(0,1fr);flex:1;min-height:0}
.d .side{display:flex;flex-direction:column;min-height:0;padding:22px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;padding:0 8px 18px}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .course{margin:0 4px 16px;padding:16px;border-radius:14px;background:var(--ml-surface)}
.d .course h2{margin-top:6px;font-size:16px}
.d .pbar{height:7px;margin-top:14px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .pbar i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.5);transform-origin:0 50%;transition:transform 900ms var(--ml-ease)}
.d .pl{display:flex;align-items:baseline;gap:4px;margin-top:9px;font-size:12.5px;color:var(--ml-muted)}
.d .pl b{font-size:15px;font-weight:650;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .cn{margin-left:auto}
.d .mods{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none}
.d .mh{display:flex;justify-content:space-between;height:30px;padding:10px 12px 0;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .mh span{font-family:var(--ml-mono);letter-spacing:0}
.d .ls{position:relative;z-index:1;display:flex;align-items:center;gap:12px;width:100%;height:44px;padding:0 12px;border:0;border-radius:11px;background:none;text-align:left;font-size:13.5px;font-weight:550;color:var(--ml-ink-2);transition:color .2s ease}
.d .ls.now{color:var(--ml-accent-ink);font-weight:600}
.d .ls .dt{position:relative;flex:none;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .3s ease,box-shadow .3s ease}
.d .ls .dt svg{position:absolute;opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .45s var(--ml-bounce)}
.d .ls.done .dt{background:var(--ml-accent);box-shadow:none}
.d .ls.done .dt svg{opacity:1;transform:none}
.d .ls.now .dt{box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .ls.now .dt::after{content:"";width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .ls .nm{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.d .ls time{font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .hl{position:absolute;top:0;left:0;right:0;height:44px;border-radius:11px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .main{min-width:0;min-height:0;overflow-y:auto;scrollbar-width:thin}
.d .inner{display:flex;flex-direction:column;min-height:100%;max-width:1000px;margin:0 auto;padding:28px 32px 32px}
.d .vid{position:relative;flex:1 0 auto;margin-bottom:20px;aspect-ratio:16/8.6;border-radius:18px;overflow:hidden;background:linear-gradient(170deg,#FFF0ED 0%,#EAF2FF 70%);box-shadow:var(--ml-shadow-lg)}
.d .vid i{position:absolute}
.d .sun{right:16%;top:16%;width:64px;height:64px;border-radius:50%;background:var(--ml-accent-2)}
.d .mt{left:-8%;right:-8%;bottom:-38%;height:78%;border-radius:50% 50% 0 0;background:var(--ml-accent-line)}
.d .mt2{left:30%;right:-20%;bottom:-48%;height:80%;border-radius:50% 50% 0 0;background:#8FBDFF;opacity:.7}
.d .playb{position:absolute;left:50%;top:46%;display:grid;place-items:center;width:68px;height:68px;margin:-34px 0 0 -34px;border-radius:50%;background:rgba(255,255,255,.9);color:var(--ml-accent);box-shadow:0 8px 28px rgba(255,68,51,.28)}
.d .playb svg{margin-left:3px}
.d .ctl{position:absolute;left:14px;right:14px;bottom:14px;display:flex;align-items:center;gap:12px;height:40px;padding:0 14px;border-radius:12px;background:rgba(255,255,255,.88);font-size:12px}
.d .ptog{display:grid;color:var(--ml-ink)}
.d .scr{flex:1;height:5px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .scr i{position:static;display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(.35);transform-origin:0 50%}
.d .tm{font:500 11.5px/1 var(--ml-mono);color:var(--ml-ink-2)}
.d .lh{display:flex;align-items:flex-end;justify-content:space-between;gap:18px;padding-bottom:20px}
.d .lh h1{margin-top:6px;font-size:26px}
.d .lh .lead{margin-top:5px;font-size:13.5px}
.d .acts{display:flex;gap:10px}
.d .nx{display:flex;align-items:center;gap:14px;padding:22px 20px}
.d .nx div{flex:1;min-width:0}
.d .nx b{display:block;margin-top:2px;font-size:14.5px;font-weight:600}
.d .nxi{display:grid;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .sw .em,.d .sw h1,.d .sw .lead{animation:po-in 520ms var(--ml-spring) both}
.d .sw h1{animation-delay:50ms}.d .sw .lead{animation-delay:100ms}
@container scr (max-width: 760px){
  .d .shell{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .mbar{display:flex;align-items:center;gap:10px;flex:none;height:60px;padding:0 16px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
  .d .mbar b{margin-right:auto;font-size:15px;font-weight:650;letter-spacing:-.02em}
  .d .inner{padding:16px}
  .d .vid{flex:none}
  .d .lh{flex-direction:column;align-items:stretch}
  .d .lh h1{font-size:22px}
  .d .acts .ghost{display:none}
  .d .acts .cta{flex:1}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const CK = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
      const mods = [
        ['Start here', [['Welcome to the course', 3], ['What a brand really is', 8], ['Know your audience', 11]]],
        ['Positioning', [['Map your competitors', 9], ['Find your edge', 10], ['Positioning statement', 12], ['Workshop recap', 6]]],
        ['Messaging', [['Voice and tone', 9], ['Taglines that stick', 7], ['Your launch plan', 10]]],
      ];
      const flat = [];
      mods.forEach((m, mi) => m[1].forEach((l) => flat.push({ m: mi, t: l[0], d: l[1] })));
      const nav = $('.mods');
      const hl = $('.hl');
      nav.insertAdjacentHTML(
        'beforeend',
        mods
          .map((m, mi) => `<p class="mh" data-m="${mi}">${m[0]}<span></span></p>` + flat.map((l, i) => (l.m === mi ? `<button class="ls" type="button" data-i="${i}"><span class="dt">${CK}</span><span class="nm">${l.t}</span><time>${l.d} min</time></button>` : '')).join(''))
          .join(''),
      );
      const items = [...nav.querySelectorAll('.ls')];
      let at = 5;
      let sc = 0.35;
      let tt = 0;
      const toast = (m) => {
        $('.toast b').textContent = m;
        $('.toast').classList.add('show');
        clearTimeout(tt);
        tt = setTimeout(() => $('.toast').classList.remove('show'), 2400);
      };
      const update = (i, animate) => {
        at = i;
        items.forEach((b, k) => {
          b.classList.toggle('done', k < i);
          b.classList.toggle('now', k === i);
          if (k === i) b.setAttribute('aria-current', 'true');
          else b.removeAttribute('aria-current');
        });
        mods.forEach((m, mi) => {
          const d = flat.filter((l, k) => l.m === mi && k < i).length;
          nav.querySelector(`.mh[data-m="${mi}"] span`).textContent = `${d}/${m[1].length}`;
        });
        hl.style.transform = `translateY(${items[i].offsetTop}px)`;
        const l = flat[i];
        $('.em').textContent = `Module ${l.m + 1} - ${mods[l.m][0]}`;
        $('.lt1').textContent = l.t;
        $('.mt3').textContent = `Lesson ${i + 1} of ${flat.length} - ${l.d} min`;
        const nx = flat[i + 1];
        $('.nxt').textContent = nx ? nx.t : 'You are all done';
        $('.nxd').textContent = nx ? `${nx.d} min` : 'Finished';
        $('.cp').textContent = `${Math.round((i / flat.length) * 100)}%`;
        $('.mp').textContent = $('.cp').textContent;
        $('.cn').textContent = `${i} of ${flat.length} lessons`;
        $('.pbar i').style.transform = `scaleX(${i / flat.length})`;
        sc = 0.05;
        if (animate) {
          const lh = $('.lh');
          lh.classList.remove('sw');
          void lh.offsetWidth;
          lh.classList.add('sw');
        }
      };
      hl.style.transition = 'none';
      update(5, false);
      requestAnimationFrame(() => (hl.style.transition = ''));
      items.forEach((b) => b.addEventListener('click', () => update(+b.dataset.i, true)));
      const complete = () => {
        if (at >= flat.length - 1) return;
        const t = flat[at].t;
        update(at + 1, true);
        toast(`Lesson complete: ${t}`);
      };
      $('.done').addEventListener('click', complete);

      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      // video scrubber ticks along (ambient)
      (async () => {
        while (root.isConnected) {
          await wait(160);
          sc = sc > 0.97 ? 0.05 : sc + 0.0028;
          const tot = flat[at].d * 60;
          const s = Math.floor(sc * tot);
          $('.scr i').style.transform = `scaleX(${sc})`;
          $('.tm').textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')} / ${String(flat[at].d).padStart(2, '0')}:00`;
        }
      })();

      // Autoplay: press Mark complete, the next lesson takes over; then rewind. Real input hands over for 4s.
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      cur.style.transform = 'translate(760px,300px)';
      (async () => {
        await wait(1700);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (at === 5 && (await aim($('.done')))) complete();
          await wait(4800);
          if (idle() && at !== 5) {
            update(5, true);
            await wait(1800);
          }
        }
      })();
    },
    prompt: `Build a course member area (lesson page) for a client or student portal, full viewport (min-height: 100dvh), left-outline shell.

Layout: grid columns 316px / minmax(0, 1fr). Sidebar (white, 1px right hairline): logo tile and academy name; a soft grey-blue course card (micro-label, 16px course title, 7px progress bar, "50% complete" and "5 of 10 lessons"); then the lesson outline grouped under small uppercase module headings with a done/total counter in mono. Each lesson is a 44px row: 22px status circle (done = filled accent with a check, current = accent ring with a dot, upcoming = hollow grey), truncated title and duration. Main (max-width 780px centered, padding 28px 32px): a 16:8.6 video frame with a drawn scene (sun, two soft hills), a centered 68px white play button and a frosted control bar (play icon, scrubber, time), then a lesson header: micro-label "Module 2 - Positioning", 26px lesson title, "Lesson 6 of 10 - 12 min", and on the right a ghost "Worksheet" and a primary "Mark complete" button; below, an "Up next" card with the next lesson and its length.

Motion: ONE highlight pill sits behind the lesson rows and slides to the current lesson with transform: translateY(row offsetTop) and a critically damped spring (587ms, linear() curve). Completing a lesson draws the status check (scale .5 to 1, slight overshoot), moves the pill, updates counters, scales the progress bar (transform: scaleX, 900ms ease), and re-runs a short entrance on the title block (opacity, translateY 8px, 50ms stagger). A toast confirms. The scrubber advances continuously (transform: scaleX) with a ticking time label.

Accessibility: lesson rows are buttons, the current one has aria-current="true", :focus-visible rings, toast is role="status", prefers-reduced-motion shortens motion. Phone (under 760px): hide the sidebar (move the outline into a collapsible sheet), full-width video, stack the lesson header with a full-width primary button. One accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (CourseSidebar, LessonRow, VideoPlayer, LessonHeader, UpNextCard).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-approvals',
    cat: 'app-portals',
    title: 'Approval queue',
    sub: 'Approve one, request changes on the next',
    html: `
<div class="app">
  <header class="nav">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Kestrel & Co</b></div>
    <nav class="tabs" role="tablist" aria-label="Approvals"><span class="ul" aria-hidden="true"></span>
      <button class="t on" type="button" role="tab">Pending<i class="cp">3</i></button><button class="t" type="button" role="tab">Approved<i class="ca">12</i></button><button class="t" type="button" role="tab"><span>Changes<span class="x"> requested</span></span><i class="cc">2</i></button>
    </nav>
    <span class="av">TL</span>
  </header>
  <main class="page">
    <div class="head in" style="--i:0"><div><p class="lbl">Brightline Dental</p><h1>Needs your approval</h1><p class="lead sub">3 deliverables are waiting for your review.</p></div></div>
    <ul class="q"></ul>
    <div class="card empty"><span class="eic">${I(P.check, 22, 2.6)}</span><h2>All caught up</h2><p class="muted">Nothing is waiting on you. We will tell you when the next deliverable is ready.</p></div>
    <section class="card hist"><div class="hh"><p class="lbl">Recently decided</p><span class="muted">Last 30 days</span></div><ul><li><div><b>Sitemap, 12 pages</b><small>Elena Petrova, Oct 8</small></div><span class="st ok">Approved</span></li><li><div><b>Brand colour palette</b><small>Daniel Okafor, Oct 2</small></div><span class="st ok">Approved</span></li><li><div><b>Invoice template</b><small>Hana Kim, Sep 30</small></div><span class="st late">Changes requested</span></li></ul></section>
  </main>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${SH}
.d .nav{display:flex;flex:none;align-items:center;gap:16px;height:68px;padding:0 32px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;margin-right:auto}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .tabs{position:relative;display:flex;gap:6px;align-self:stretch}
.d .t{position:relative;display:flex;align-items:center;gap:8px;padding:0 12px;border:0;background:none;font-size:14px;font-weight:550;color:var(--ml-muted);transition:color .2s ease}
.d .t.on{color:var(--ml-ink);font-weight:600}
.d .t i{padding:2px 7px;border-radius:99px;background:var(--ml-bar-2);font:600 11px/1.3 var(--ml-mono);font-style:normal;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease}
.d .t.on i{background:var(--ml-accent);color:#fff}
.d .ul{position:absolute;left:0;bottom:-1px;height:2px;border-radius:2px 2px 0 0;background:var(--ml-accent);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .page{display:flex;flex:1;flex-direction:column;gap:20px;max-width:860px;width:100%;margin:0 auto;min-height:0;padding:30px 32px 32px;overflow-y:auto;scrollbar-width:thin}
.d .head h1{margin-top:8px}
.d .q{display:flex;flex-direction:column;list-style:none}
.d .qr{display:grid;grid-template-rows:1fr;transition:grid-template-rows .55s var(--ml-ease),opacity .35s ease}
.d .qr.gone{grid-template-rows:0fr;opacity:0}
.d .qin{min-height:0;overflow:hidden;padding-bottom:14px}
.d .qc{padding:18px 20px;box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 3px rgba(35,15,10,.07)}
.d .qr.new{animation:po-in 520ms var(--ml-spring) backwards;animation-delay:calc(var(--i,0) * 60ms)}
.d .qrow{display:flex;align-items:center;gap:18px}
.d .th{position:relative;flex:none;width:112px;height:76px;border-radius:12px;overflow:hidden;background:linear-gradient(160deg,var(--ml-accent-soft),var(--ml-bar-2));box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .th i{position:absolute}
.d .th.logo i:nth-child(1){left:36px;top:18px;width:40px;height:40px;border-radius:12px;background:var(--ml-accent)}
.d .th.logo i:nth-child(2){left:46px;top:28px;width:20px;height:20px;border-radius:50%;background:#fff}
.d .th.web i:nth-child(1){left:10px;top:10px;right:10px;height:7px;border-radius:4px;background:var(--ml-bar)}
.d .th.web i:nth-child(2){left:14px;top:26px;width:56px;height:10px;border-radius:5px;background:var(--ml-accent)}
.d .th.web i:nth-child(3){left:14px;bottom:-14px;width:44px;height:44px;border-radius:50%;background:var(--ml-accent-2);opacity:.7}
.d .th.bro i:nth-child(1){left:18px;top:12px;width:34px;height:52px;border-radius:5px;background:#fff;box-shadow:0 2px 8px rgba(35,15,10,.14)}
.d .th.bro i:nth-child(2){left:54px;top:12px;width:34px;height:52px;border-radius:5px;background:var(--ml-accent-line);box-shadow:0 2px 8px rgba(35,15,10,.14)}
.d .th.bro i:nth-child(3){left:24px;top:20px;width:22px;height:6px;border-radius:3px;background:var(--ml-accent)}
.d .qm{flex:1;min-width:0}
.d .qm h2{font-size:16px}
.d .qm small{display:block;margin-top:3px}
.d .qm .st{margin-top:8px}
.d .qb{display:flex;gap:8px}
.d .note{display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--ml-spring-dur) var(--ml-spring)}
.d .qc.open .note{grid-template-rows:1fr}
.d .note > div{min-height:0;overflow:hidden}
.d .nb{display:flex;gap:10px;padding-top:16px}
.d .nb .field{flex:1;display:flex;align-items:center;height:42px;padding:0 13px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,background-color .25s ease}
.d .nb .field:focus-within,.d .nb .field.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .nb input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:14px}
.d .nb input::placeholder{color:#A1A1A6}
.d .nb .cta{height:42px}
.d .qc.ok-s,.d .qc.ch-s{background:var(--ml-bg)}
.d .qc .rs{display:none}
.d .qc.ok-s .rs.a,.d .qc.ch-s .rs.c{display:inline-flex}
.d .qc.ok-s .qb,.d .qc.ch-s .qb,.d .qc.ok-s .qm .st.wait,.d .qc.ch-s .qm .st.wait{display:none}
.d .hist{margin-top:auto;padding:16px 20px 6px}
.d .hh{display:flex;align-items:center;justify-content:space-between}
.d .hist ul{list-style:none}
.d .hist li{display:flex;align-items:center;gap:14px;padding:12px 0;border-bottom:1px solid var(--ml-line)}
.d .hist li:last-child{border-bottom:0}
.d .hist li div{flex:1;min-width:0}
.d .hist li b{display:block;font-size:14px;font-weight:600}
.d .hist li small{display:block;margin-top:2px;font-size:12.5px}
.d .empty{display:none;flex-direction:column;align-items:center;gap:8px;padding:40px 24px;text-align:center}
.d .empty p{max-width:320px;font-size:14px}
.d .empty.show{display:flex;animation:po-in 520ms var(--ml-spring) both}
.d .eic{display:grid;place-items:center;width:48px;height:48px;border-radius:50%;background:rgba(29,185,84,.12);color:#12893C}
@container scr (max-width: 760px){
  .d .nav{padding:0 16px;gap:8px}
  .d .brand b{display:none}
  .d .tabs{overflow:hidden}
  .d .t{padding:0 8px;font-size:13px}
  .d .t i,.d .x{display:none}
  .d .page{padding:20px 16px}
  .d .qrow{flex-wrap:wrap}
  .d .qb{width:100%}
  .d .qb button{flex:1}
  .d .nb{flex-direction:column}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const items = [
        ['logo', 'Logo pack, version 2', 'Daniel Okafor, 2 hours ago', 'Due Fri'],
        ['web', 'Homepage design, desktop', 'Hana Kim, yesterday', 'Due Mon'],
        ['bro', 'Patient brochure, print layout', 'Elena Petrova, Oct 12', 'Due Oct 21'],
      ];
      const q = $('.q');
      let nA = 12;
      let nC = 2;
      const build = () => {
        q.innerHTML = items
          .map(
            (it, i) =>
              `<li class="qr new" style="--i:${i}"><div class="qin"><div class="card qc"><div class="qrow"><div class="th ${it[0]}"><i></i><i></i><i></i></div><div class="qm"><h2>${it[1]}</h2><small>${it[2]}</small><span class="st wait">${it[3]}</span><span class="st ok rs a">Approved</span><span class="st late rs c">Changes requested</span></div><div class="qb"><button class="cta sm ap" type="button">Approve</button><button class="ghost sm rq" type="button">Request changes</button></div></div><div class="note"><div><div class="nb"><label class="field"><input type="text" aria-label="What should change?" placeholder="What should we change?"></label><button class="cta sm sn" type="button">Send</button></div></div></div></div></div></li>`,
          )
          .join('');
        count();
      };
      const left = () => q.querySelectorAll('.qr:not(.gone)').length;
      const count = () => {
        const n = left();
        $('.cp').textContent = n;
        $('.ca').textContent = nA;
        $('.cc').textContent = nC;
        $('.sub').textContent = n ? `${n} deliverable${n > 1 ? 's are' : ' is'} waiting for your review.` : 'You are all caught up.';
        $('.empty').classList.toggle('show', n === 0);
      };
      let tt = 0;
      const toast = (m) => {
        $('.toast b').textContent = m;
        $('.toast').classList.add('show');
        clearTimeout(tt);
        tt = setTimeout(() => $('.toast').classList.remove('show'), 2400);
      };
      const finish = (li, kind) => {
        const c = li.querySelector('.qc');
        c.classList.remove('open');
        c.classList.add(kind === 'a' ? 'ok-s' : 'ch-s');
        if (kind === 'a') nA++;
        else nC++;
        setTimeout(() => {
          li.classList.add('gone');
          count();
        }, 900);
        toast(kind === 'a' ? `${li.querySelector('h2').textContent} approved` : 'Feedback sent to the team');
      };
      q.addEventListener('click', (e) => {
        const li = e.target.closest('.qr');
        if (!li || li.classList.contains('gone')) return;
        const c = li.querySelector('.qc');
        if (e.target.closest('.ap')) finish(li, 'a');
        else if (e.target.closest('.rq')) c.classList.toggle('open');
        else if (e.target.closest('.sn')) finish(li, 'c');
      });
      q.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.closest('.nb input')) finish(e.target.closest('.qr'), 'c');
      });
      // sliding tab underline
      const tabs = [...root.querySelectorAll('.t')];
      const ul = $('.ul');
      const slide = (b) => {
        tabs.forEach((x) => x.classList.toggle('on', x === b));
        ul.style.width = b.offsetWidth + 'px';
        ul.style.transform = `translateX(${b.offsetLeft}px)`;
      };
      tabs.forEach((b) => b.addEventListener('click', () => slide(b)));
      ul.style.transition = 'none';
      slide(tabs[0]);
      requestAnimationFrame(() => (ul.style.transition = ''));
      build();

      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until && !q.contains(root.getRootNode().activeElement);
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      cur.style.transform = 'translate(800px,420px)';
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const rows = [...q.querySelectorAll('.qr:not(.gone)')];
          if (rows.length === 3) {
            const b = rows[0].querySelector('.ap');
            if (await aim(b)) b.click();
            await wait(1900);
            continue;
          }
          if (rows.length === 2) {
            const r = rows[0];
            const b = r.querySelector('.rq');
            if (!(await aim(b))) continue;
            b.click();
            await wait(800);
            const inp = r.querySelector('.nb input');
            const f = inp.closest('.field');
            moveTo(f, 0.4);
            await wait(700);
            f.classList.add('is-auto');
            let ok = true;
            for (const ch of 'Could the blue be a little warmer?') {
              if (!idle()) {
                ok = false;
                break;
              }
              inp.value += ch;
              await wait(40 + Math.random() * 35);
            }
            f.classList.remove('is-auto');
            if (!ok) continue;
            const sn = r.querySelector('.sn');
            if (await aim(sn)) sn.click();
            await wait(2600);
            continue;
          }
          await wait(2600);
          if (idle()) {
            nA = 12;
            nC = 2;
            build();
          }
          await wait(1200);
        }
      })();
    },
    prompt: `Build an approval queue page for a client portal, full viewport (min-height: 100dvh), top-nav shell with a reading column.

Layout: a 68px top bar (logo tile and agency name left, avatar right) with tabs between them: Pending, Approved, Changes requested, each with a small count badge (the active badge uses your accent color, the others a grey-blue fill) and ONE 2px accent underline that glides between tabs with transform: translateX and width set per tab, spring 587ms. Page: max-width 860px, padding 30px 32px: a micro-label with the client name, a 28px "Needs your approval" title and a dynamic subtitle ("3 deliverables are waiting for your review."). Then a stack of review cards (16px radius, hairline plus a light shadow, 18px 20px padding, 14px gap). Each card: a 112x76 drawn thumbnail (logo tile, homepage wireframe, brochure spreads, in blue tints), title, who shared it and when, an amber due pill, and two buttons on the right: primary "Approve" and ghost "Request changes".

Behavior: Approve swaps the due pill for a green "Approved" pill, hides the buttons, then after ~900ms collapses the row (grid-template-rows 1fr to 0fr over 550ms with a fade) and updates every count, the subtitle and a toast. Request changes expands a note panel inside the card (grid-template-rows 0fr to 1fr, spring) with a text field and a "Send" button; sending marks the card "Changes requested" (red pill), collapses it and notifies the team. Enter also sends. When nothing is pending, show an "All caught up" empty state with a green check badge. Cards enter with opacity and translateY 8px, 60ms stagger.

Accessibility: tabs use role="tablist" and role="tab", buttons are real buttons, the note field has an aria-label, :focus-visible rings, toast is role="status", prefers-reduced-motion shortens motion. Phone (under 760px): hide the agency name and badges, wrap buttons to a full-width row, stack the note field above its Send button. One accent color; amber, green and red only as small pills. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopTabs, ReviewList, ReviewCard, NoteField, EmptyState).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-tickets',
    cat: 'app-portals',
    title: 'Support tickets',
    sub: 'Fill the form, a new ticket drops in',
    html: `
<div class="app">
  <header class="top"><div class="brand"><span class="mark">${I(P.buoy, 17)}</span><b>Juniper Health</b><span class="sep">/</span><span class="muted">Support</span></div><button class="ghost sm" type="button">${I(P.book, 15)}Help articles</button><span class="av">PN</span></header>
  <div class="split">
    <main class="pane">
      <div class="head in" style="--i:0"><div><h1>Your tickets</h1><p class="lead">Average reply time is under 2 hours.</p></div></div>
      <div class="seg in" style="--i:1" role="tablist"><span class="pill" aria-hidden="true"></span><button class="sg on" type="button">Open<i class="no">3</i></button><button class="sg" type="button">Resolved<i>8</i></button></div>
      <ul class="tk"></ul>
    </main>
    <aside class="newt in" style="--i:2">
      <form class="card nf" novalidate>
        <h2>New ticket</h2><p class="muted">Tell us what is going on and we will jump in.</p>
        <label class="fl" for="po-tk-sub">Subject</label>
        <div class="field" data-f="s"><input id="po-tk-sub" type="text" placeholder="What do you need help with?"></div>
        <p class="fl">Category</p>
        <div class="chips"><button class="ch on" type="button">Billing</button><button class="ch" type="button">Technical</button><button class="ch" type="button">Account</button></div>
        <p class="fl">Priority</p>
        <div class="prio"><button class="pr" type="button">Low</button><button class="pr on" type="button">Normal</button><button class="pr" type="button">Urgent</button></div>
        <label class="fl" for="po-tk-det">Details</label>
        <div class="field tall" data-f="d"><textarea id="po-tk-det" rows="3" placeholder="Share any steps, links or screenshots"></textarea></div>
        <button class="cta go" type="submit">${I(P.send, 16)}Send ticket</button>
      </form>
    </aside>
  </div>
  ${TOAST}
  ${CURSOR}
</div>`,
    css: `${SH}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;margin-right:auto}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .sep{color:var(--ml-bar)}
.d .split{display:grid;grid-template-columns:minmax(0,1fr) 380px;flex:1;min-height:0}
.d .pane{display:flex;flex-direction:column;gap:18px;min-width:0;min-height:0;padding:28px 28px 24px;overflow-y:auto;scrollbar-width:thin}
.d .head h1{font-size:26px}
.d .head .lead{margin-top:5px;font-size:14px}
.d .seg{position:relative;display:flex;gap:4px;align-self:flex-start;padding:4px;border-radius:12px;background:var(--ml-bar-2)}
.d .sg{position:relative;z-index:1;display:flex;align-items:center;gap:7px;height:32px;padding:0 15px;border:0;border-radius:9px;background:none;font-size:13px;font-weight:550;color:var(--ml-ink-2)}
.d .sg i{font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .sg.on{color:var(--ml-accent-ink);font-weight:600}
.d .pill{position:absolute;top:4px;left:0;height:32px;border-radius:9px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.1);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tk{display:flex;flex-direction:column;list-style:none}
.d .tk .ins{padding-bottom:10px}
.d .tr{display:flex;align-items:center;gap:16px;padding:16px 18px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 3px rgba(35,15,10,.06)}
.d .tn{flex:1;min-width:0}
.d .tn b{display:block;overflow:hidden;font-size:14.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .tn small{display:block;margin-top:3px;font-size:12.5px}
.d .tn small span{font-family:var(--ml-mono);font-size:11.5px}
.d .rc{display:flex;align-items:center;gap:5px;font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
.d .newt{min-width:0;min-height:0;padding:22px 24px 24px 0;overflow-y:auto;scrollbar-width:thin}
.d .nf{padding:22px 22px 24px}
.d .nf h2{font-size:19px;letter-spacing:-.03em}
.d .nf .muted{margin-top:4px;font-size:13.5px}
.d .fl{display:block;margin-top:14px;font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .field{display:flex;align-items:center;height:44px;margin-top:6px;padding:0 13px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,background-color .25s ease}
.d .field.tall{height:auto;padding:10px 13px}
.d .field input,.d .field textarea{flex:1;min-width:0;border:0;outline:0;background:none;resize:none;font-size:14.5px;line-height:1.45}
.d .field input::placeholder,.d .field textarea::placeholder{color:#A1A1A6}
.d .field:focus-within,.d .field.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .field.bad{box-shadow:inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1);animation:po-shake 380ms var(--ml-ease)}
.d .chips,.d .prio{display:flex;gap:8px;margin-top:8px}
.d .ch,.d .pr{height:36px;padding:0 14px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);transition:background-color .2s ease,box-shadow .2s ease,color .2s ease,transform 90ms ease-out}
.d .pr{flex:1;border-radius:11px}
.d .ch:hover,.d .pr:hover{box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .ch.on,.d .pr.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent);color:var(--ml-accent-ink)}
.d .ch.press,.d .pr.press{transform:scale(.94)}
.d .go{width:100%;height:46px;margin-top:20px}
@keyframes po-shake{0%,100%{transform:none}25%{transform:translateX(-5px)}55%{transform:translateX(4px)}80%{transform:translateX(-2px)}}
@container scr (max-width: 760px){
  .d .split{display:block;overflow-y:auto}
  .d .pane{overflow:visible;padding:20px 16px 8px}
  .d .newt{overflow:visible;padding:8px 16px 24px}
  .d .top{padding:0 16px}
  .d .top .ghost,.d .brand .sep,.d .brand .muted{display:none}
  .d .rc{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const MSG = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
      const open = [
        ['#2084', 'Invoice shows the wrong PO number', 'Billing', 'wait', 'Waiting on you', '2h ago', 3],
        ['#2079', 'Cannot upload files over 20 MB', 'Technical', '', 'In progress', 'Yesterday', 5],
        ['#2071', 'Add a teammate to our portal', 'Account', '', 'Open', 'Oct 12', 1],
      ];
      const done = [
        ['#2066', 'Reset my portal password', 'Account', 'ok', 'Resolved', 'Oct 8', 4],
        ['#2058', 'Update the billing contact', 'Billing', 'ok', 'Resolved', 'Oct 3', 2],
        ['#2049', 'Download all invoices as PDF', 'Billing', 'ok', 'Resolved', 'Sep 28', 3],
      ];
      const tk = $('.tk');
      let showing = 0;
      const row = (t, cls) => `<li class="ins${cls || ''}"><div class="tr"><div class="tn"><b>${t[1]}</b><small><span>${t[0]}</span> - ${t[2]} - ${t[5]}</small></div><span class="st ${t[3]}">${t[4]}</span><span class="rc">${MSG}${t[6]}</span></div></li>`;
      const draw = (n) => {
        showing = n;
        tk.innerHTML = (n ? done : open).map((t) => row(t, '')).join('');
      };
      draw(0);
      // gliding segmented control
      const sg = [...root.querySelectorAll('.sg')];
      const pill = $('.pill');
      const slide = (b) => {
        sg.forEach((x) => x.classList.toggle('on', x === b));
        pill.style.width = b.offsetWidth + 'px';
        pill.style.transform = `translateX(${b.offsetLeft}px)`;
      };
      sg.forEach((b, i) => b.addEventListener('click', () => (slide(b), draw(i))));
      pill.style.transition = 'none';
      slide(sg[0]);
      requestAnimationFrame(() => (pill.style.transition = ''));
      const groups = (sel) => {
        const els = [...root.querySelectorAll(sel)];
        els.forEach((b) => b.addEventListener('click', () => els.forEach((x) => x.classList.toggle('on', x === b))));
        return els;
      };
      const cats = groups('.ch');
      const pr = groups('.pr');
      const form = $('.nf');
      const sub = $('#po-tk-sub');
      const det = $('#po-tk-det');
      let nextId = 2087;
      let tt = 0;
      const toast = (m) => {
        $('.toast b').textContent = m;
        $('.toast').classList.add('show');
        clearTimeout(tt);
        tt = setTimeout(() => $('.toast').classList.remove('show'), 2600);
      };
      [sub, det].forEach((el) => el.addEventListener('input', () => el.closest('.field').classList.remove('bad')));
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!sub.value.trim()) {
          const f = sub.closest('.field');
          f.classList.remove('bad');
          void f.offsetWidth;
          f.classList.add('bad');
          return;
        }
        if (showing) {
          slide(sg[0]);
          draw(0);
        }
        const c = cats.find((x) => x.classList.contains('on')).textContent;
        const t = [`#${nextId++}`, sub.value.trim(), c, '', 'Open', 'Just now', 0];
        tk.insertAdjacentHTML('afterbegin', row(t, ' new'));
        $('.no').textContent = tk.children.length;
        sub.value = '';
        det.value = '';
        toast(`Ticket ${t[0]} created. We will reply soon.`);
      });
      const reset = () => {
        if (tk.children.length > 3) tk.firstElementChild.remove();
        $('.no').textContent = tk.children.length;
        nextId = 2087;
      };

      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until && !form.contains(root.getRootNode().activeElement);
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(750);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      const type = async (el, text) => {
        const f = el.closest('.field');
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          await wait(32 + Math.random() * 36);
        }
        f.classList.remove('is-auto');
        return true;
      };
      cur.style.transform = 'translate(640px,560px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          sub.value = '';
          det.value = '';
          moveTo(sub.closest('.field'), 0.5);
          await wait(750);
          if (!(await type(sub, 'Cannot find my March invoice'))) continue;
          if (!(await aim(cats[0]))) continue;
          cats[0].click();
          if (!(await aim(pr[2]))) continue;
          pr[2].click();
          moveTo(det.closest('.field'), 0.5);
          await wait(700);
          if (!(await type(det, 'It is missing from the list.'))) continue;
          const go = $('.go');
          if (!(await aim(go, 0.5, 0.5))) continue;
          form.requestSubmit();
          await wait(4200);
          if (idle()) {
            reset();
            pr[1].click();
            pr[2].classList.remove('on');
            pr[1].classList.add('on');
          }
          await wait(1200);
        }
      })();
    },
    prompt: `Build a support tickets page for a client portal, full viewport (min-height: 100dvh), with a ticket list and a new-ticket form side by side.

Layout: a 64px top bar (logo tile, company name, "/ Support" crumb, a small ghost "Help articles" button, avatar). Below, a grid of minmax(0, 1fr) and a 380px form column. Left (padding 28px): a 26px "Your tickets" title, a one-line reply-time promise, a segmented control (Open 3 / Resolved 8) on a grey-blue track with ONE white highlight that glides with transform: translateX and width set per option (spring 587ms), then a stack of ticket rows (14px radius, hairline plus a light shadow, 16px 18px padding, 10px gaps): bold truncated subject, a muted line with the mono ticket id, category and time, a status pill (amber "Waiting on you", blue "In progress", blue "Open", green "Resolved") and a reply count with a message icon. Right: a white form card (16px radius) "New ticket" with a short intro, a Subject field, Category chips (pills, selected = soft accent fill with a 1.5px accent ring), a 3-way Priority control, a Details textarea and a full-width primary "Send ticket" button with a send icon. Fields are 44px with tinted fill and a 1.5px accent ring plus 4px soft ring on focus.

Behavior: submitting an empty subject shakes the field (380ms) and shows a red ring; otherwise a new row inserts at the top of the Open list (grid-template-rows 0fr to 1fr with a fade, 560ms), the Open count updates, the form clears and a toast confirms the new ticket id. Switching segments swaps the list. Chips and priority buttons are single-select with aria-pressed.

Accessibility: labels tied to inputs, real buttons, toast is role="status", :focus-visible rings, prefers-reduced-motion shortens motion. Phone (under 760px): stack the form under the list, hide reply counts and the header extras. One accent color; amber and green only as small status pills. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, TicketTabs, TicketRow, NewTicketForm, Toast).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-kb',
    cat: 'app-portals',
    title: 'Knowledge base',
    sub: 'Search narrows, an article opens',
    html: `
<div class="app">
  <header class="top"><div class="brand"><span class="mark">${I(P.book, 16)}</span><b>Tidewater Realty</b><span class="sep">/</span><span class="muted">Help center</span></div><button class="ghost sm" type="button">${I(P.msg, 15)}Contact us</button><span class="av">IC</span></header>
  <main class="page">
    <div class="col">
      <section class="vh">
        <div class="hd in" style="--i:0"><h1>How can we help?</h1><p class="lead">Search 47 guides, or browse a topic below.</p></div>
        <div class="sbox in" style="--i:1">
          <label class="search">${I(P.search, 19)}<input id="po-kb-q" type="search" placeholder="Search guides, for example invoice" aria-label="Search guides" autocomplete="off"></label>
          <div class="res" role="listbox" aria-label="Results"></div>
        </div>
        <div class="cats in" style="--i:2"></div>
        <div class="card pop in" style="--i:3"><div class="ph"><h2>Popular articles</h2><span class="muted">Updated this week</span></div><ul class="pl"></ul></div>
      </section>
      <article class="va">
        <nav class="crumb" aria-label="Breadcrumb"><button class="back" type="button">${I(P.chevR, 15)}Help center</button><span>/</span><span class="ac"></span></nav>
        <h1 class="at"></h1>
        <p class="am"></p>
        <div class="body"></div>
        <div class="card fb"><p class="fq">Was this article helpful?</p><div class="fbb"><button class="ghost sm yes" type="button">Yes</button><button class="ghost sm no" type="button">Not really</button></div><p class="fth">${I(P.check, 15, 2.8)}Thanks, that helps us improve.</p></div>
      </article>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${SH}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 32px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;margin-right:auto}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .sep{color:var(--ml-bar)}
.d .page{display:flex;flex:1;min-height:0;padding:30px 24px 32px;overflow-y:auto;scrollbar-width:thin}
.d .col{width:100%;max-width:720px;margin:auto}
.d .vh{display:flex;flex-direction:column;gap:20px}
.d .va{display:none;flex-direction:column;gap:0}
.d .kbart .vh{display:none}
.d .kbart .va{display:flex;animation:po-in 520ms var(--ml-spring) both}
.d .hd h1{font-size:32px}
.d .sbox{position:relative;z-index:6}
.d .search{display:flex;align-items:center;gap:12px;height:56px;padding:0 18px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);color:var(--ml-muted);transition:box-shadow .25s ease}
.d .search:focus-within,.d .search.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:16px;color:var(--ml-ink)}
.d .search input::placeholder{color:#A1A1A6}
.d .res{position:absolute;left:0;right:0;top:calc(100% + 8px);padding:8px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring),visibility 0s .2s}
.d .res.open{opacity:1;visibility:visible;transform:none;transition-delay:0s}
.d .rs{display:flex;align-items:center;gap:12px;width:100%;padding:11px 12px;border:0;border-radius:11px;background:none;text-align:left;font-size:14.5px;font-weight:550;animation:po-in 380ms var(--ml-spring) backwards;animation-delay:calc(var(--k,0) * 45ms)}
.d .rs:hover,.d .rs.hot{background:var(--ml-accent-soft)}
.d .rs svg{flex:none;color:var(--ml-accent)}
.d .rs span{flex:1;min-width:0}
.d .rs em{font-size:12px;font-style:normal;color:var(--ml-muted)}
.d mark{padding:0 2px;border-radius:4px;background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .rs.hot mark{background:var(--ml-bg)}
.d .none{padding:14px 12px;font-size:14px;color:var(--ml-muted)}
.d .cats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
.d .ct{display:flex;align-items:center;gap:12px;padding:14px;border:0;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 3px rgba(35,15,10,.06);text-align:left;transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow .2s ease}
.d .ct:hover{transform:translateY(-2px);box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow)}
.d .ct i{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ct b{display:block;font-size:14px;font-weight:600}
.d .ct small{font-size:12px}
.d .pop{padding:18px 20px 8px}
.d .ph{display:flex;align-items:baseline;justify-content:space-between}
.d .ph .muted{font-size:12.5px}
.d .pl{margin-top:8px;list-style:none}
.d .pl button{display:flex;align-items:center;gap:12px;width:100%;padding:12px 4px;border:0;border-bottom:1px solid var(--ml-line);background:none;text-align:left;font-size:14.5px;font-weight:550;color:var(--ml-ink-2)}
.d .pl li:last-child button{border-bottom:0}
.d .pl button:hover{color:var(--ml-accent-ink)}
.d .pl svg{flex:none;color:var(--ml-muted)}
.d .pl button span{flex:1}
.d .pl em{font-size:12px;font-style:normal;color:var(--ml-muted)}
.d .crumb{display:flex;align-items:center;gap:8px;font-size:13.5px;color:var(--ml-muted)}
.d .back{display:inline-flex;align-items:center;gap:4px;height:30px;padding:0 10px 0 6px;border:0;border-radius:9px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .back svg{transform:scaleX(-1)}
.d .back.press{transform:scale(.95)}
.d .at{margin-top:20px;font-size:30px}
.d .am{margin-top:8px;font-size:13.5px;color:var(--ml-muted)}
.d .body{display:flex;flex-direction:column;gap:14px;margin-top:20px;font-size:15.5px;line-height:1.6;color:var(--ml-ink-2)}
.d .body ol{display:flex;flex-direction:column;gap:12px;padding:0;list-style:none;counter-reset:s}
.d .body li{position:relative;padding-left:40px;counter-increment:s}
.d .body li::before{content:counter(s);position:absolute;left:0;top:0;display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:var(--ml-accent-soft);font:650 13px/1 var(--ml-font);color:var(--ml-accent-ink)}
.d .tip{display:flex;gap:12px;padding:14px 16px;border-radius:14px;background:var(--ml-accent-soft);font-size:14px;line-height:1.5;color:var(--ml-accent-ink)}
.d .tip svg{flex:none;margin-top:2px}
.d .fb{display:flex;align-items:center;gap:14px;margin-top:22px;padding:14px 18px}
.d .fq{flex:1;font-size:14.5px;font-weight:600}
.d .fbb{display:flex;gap:8px}
.d .fth{display:none;align-items:center;gap:8px;font-size:14px;font-weight:600;color:#12893C}
.d .fb.sent .fq,.d .fb.sent .fbb{display:none}
.d .fb.sent .fth{display:flex;animation:po-in 420ms var(--ml-spring) both}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .top .ghost,.d .brand .sep,.d .brand .muted{display:none}
  .d .page{padding:22px 16px}
  .d .hd h1{font-size:26px}
  .d .cats{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .at{font-size:24px}
  .d .fb{flex-wrap:wrap}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const FILE = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>';
      const BULB = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>';
      const ci = {
        rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>',
        card: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>',
        flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
        folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
        user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
        cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
      };
      const svg = (d) => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
      const cats = [['Getting started', 'rocket', 8], ['Billing', 'card', 12], ['Projects', 'flag', 9], ['Files', 'folder', 6], ['Account', 'user', 7], ['Bookings', 'cal', 5]];
      $('.cats').innerHTML = cats.map(([n, ic, c]) => `<button class="ct" type="button"><i>${svg(ci[ic])}</i><span><b>${n}</b><small>${c} articles</small></span></button>`).join('');
      const arts = [
        { t: 'How to pay an invoice online', c: 'Billing', k: 'invoice pay card payment', m: 'Updated Oct 8 - 3 min read', p: 'You can pay any open invoice from the portal in under a minute. We accept all major credit and debit cards.', s: ['Open <b>Invoices</b> from the top menu.', 'Select the invoice you want to pay.', 'Enter your card details and choose <b>Pay now</b>.', 'Download your receipt from the confirmation screen.'], tip: 'Payments are encrypted, and we never store your full card number.' },
        { t: 'Download past invoices and receipts', c: 'Billing', k: 'invoice download receipt pdf', m: 'Updated Sep 29 - 2 min read', p: 'Every invoice and receipt stays in your portal for seven years, ready to download as a PDF.', s: ['Open <b>Invoices</b> and choose the <b>Paid</b> tab.', 'Pick a date range or search by number.', 'Select <b>Download</b> next to any invoice.'], tip: 'Need all of them? Use Export all to get a single zip.' },
        { t: 'Update your billing contact', c: 'Billing', k: 'billing contact email invoice', m: 'Updated Oct 2 - 2 min read', p: 'Send invoices to the right person by changing the billing contact on your account.', s: ['Open <b>Account settings</b>.', 'Edit the <b>Billing contact</b> name and email.', 'Save. The next invoice goes to the new address.'], tip: 'Past invoices are not re-sent automatically.' },
        { t: 'How approvals work', c: 'Projects', k: 'approval approve milestone changes', m: 'Updated Oct 11 - 4 min read', p: 'Approvals keep every milestone moving. You approve a deliverable or ask for changes in one click.', s: ['Open <b>Approvals</b> to see what needs you.', 'Review the preview and choose <b>Approve</b>.', 'Or choose <b>Request changes</b> and add a note.'], tip: 'We reply to change requests within one business day.' },
        { t: 'Upload files to your project', c: 'Files', k: 'upload files documents share', m: 'Updated Oct 5 - 2 min read', p: 'Share brand assets, photos and documents with your team directly in the portal.', s: ['Open <b>Files</b> and choose <b>Upload file</b>.', 'Drop files or browse your computer.', 'Wait for the progress bar to finish.'], tip: 'Files up to 200 MB are supported.' },
      ];
      const norm = (s) => s.toLowerCase();
      const pl = $('.pl');
      pl.innerHTML = [0, 3, 4, 1, 2].map((i) => `<li><button class="pa" type="button" data-a="${i}">${FILE}<span>${arts[i].t}</span><em>${arts[i].c}</em></button></li>`).join('');
      const res = $('.res');
      const q = $('#po-kb-q');
      const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
      const hit = (t, w) => {
        const i = norm(t).indexOf(w);
        return i < 0 ? esc(t) : `${esc(t.slice(0, i))}<mark>${esc(t.slice(i, i + w.length))}</mark>${esc(t.slice(i + w.length))}`;
      };
      const find = () => {
        const w = norm(q.value.trim());
        if (!w) {
          res.classList.remove('open');
          return;
        }
        const list = arts.map((a, i) => [a, i]).filter(([a]) => norm(a.t + ' ' + a.k).includes(w));
        res.innerHTML = list.length ? list.map(([a, i], k) => `<button class="rs${k === 0 ? ' hot' : ''}" style="--k:${k}" type="button" role="option" data-a="${i}">${FILE}<span>${hit(a.t, w)}</span><em>${a.c}</em></button>`).join('') : '<p class="none">No guides match. Try a shorter word.</p>';
        res.classList.add('open');
      };
      q.addEventListener('input', find);
      const col = $('.col');
      const openArt = (i) => {
        const a = arts[i];
        $('.ac').textContent = a.c;
        $('.at').textContent = a.t;
        $('.am').textContent = a.m;
        $('.body').innerHTML = `<p>${a.p}</p><ol>${a.s.map((x) => `<li>${x}</li>`).join('')}</ol><div class="tip">${BULB}<p>${a.tip}</p></div>`;
        $('.fb').classList.remove('sent');
        res.classList.remove('open');
        col.classList.remove('kbart');
        void col.offsetWidth;
        col.classList.add('kbart');
        $('.page').scrollTop = 0;
      };
      const home = () => {
        col.classList.remove('kbart');
        q.value = '';
        res.classList.remove('open');
      };
      const onPick = (e) => {
        const b = e.target.closest('[data-a]');
        if (b) openArt(+b.dataset.a);
      };
      res.addEventListener('click', onPick);
      pl.addEventListener('click', onPick);
      $('.back').addEventListener('click', home);
      const yes = $('.yes');
      const sent = () => $('.fb').classList.add('sent');
      yes.addEventListener('click', sent);
      $('.no').addEventListener('click', sent);
      col.classList.add('kb');

      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until && !q.matches(':focus');
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      cur.style.transform = 'translate(780px,620px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          home();
          const sb = $('.search');
          moveTo(sb, 0.3);
          await wait(800);
          sb.classList.add('is-auto');
          let ok = true;
          for (const ch of 'invoice') {
            if (!idle()) {
              ok = false;
              break;
            }
            q.value += ch;
            find();
            await wait(120 + Math.random() * 60);
          }
          sb.classList.remove('is-auto');
          if (!ok) continue;
          await wait(900);
          const first = res.querySelector('.rs');
          if (!first || !(await aim(first, 0.4))) continue;
          first.click();
          await wait(3200);
          if (!idle()) continue;
          if (await aim($('.yes'))) $('.yes').click();
          await wait(2200);
          if (await aim($('.back'))) $('.back').click();
          await wait(2400);
        }
      })();
    },
    prompt: `Build a knowledge base (help center) for a client portal, full viewport (min-height: 100dvh), single centered reading column with two views: search/browse and article.

Layout: a 64px top bar (logo tile, company name, "/ Help center", a small ghost "Contact us" button, avatar). A 720px column (padding 30px 24px) holds the home view: a left-aligned 32px "How can we help?" heading and a one-line subtitle (no pill, no hero banner); a 56px search field (16px radius, hairline plus soft shadow, leading search icon, 1.5px accent ring plus 4px soft ring on focus); a 3-column grid of category tiles (38px blue-tint icon tile, name, article count); and a "Popular articles" card with rows (file icon, title, category). The article view has a back button crumb ("< Help center / Billing"), a 30px title, an "Updated Oct 8 - 3 min read" meta line, an intro paragraph, a numbered step list (28px blue-tint number circles generated with a CSS counter), a soft blue tip box with a lightbulb icon (no side border), and a "Was this article helpful?" card with Yes / Not really buttons.

Behavior: typing filters articles live (match title and keywords, case-insensitive) and opens a results popover under the field (opacity and translateY -6px to 0, spring 587ms) with rows staggered 45ms; the matched text is wrapped in a <mark> with a soft accent fill; the first result is highlighted; no match shows a friendly line. Choosing a result swaps to the article view (opacity and translateY 8px spring) and scrolls to top; Yes or Not really swaps the buttons for a green "Thanks, that helps us improve." line; the back crumb returns home and clears the search.

Accessibility: the search input has an aria-label, results use role="listbox" and role="option", arrow keys move the highlight and Enter opens it, :focus-visible rings, prefers-reduced-motion shortens motion. Phone (under 760px): hide top-bar extras, categories two per row, smaller headings. One accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, SearchBox, ResultsPopover, CategoryGrid, ArticleList, ArticleView, FeedbackCard).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-sign',
    cat: 'app-portals',
    title: 'Proposal and e-sign',
    sub: 'Draw a signature, accept the proposal',
    html: `
<div class="app">
  <header class="top"><div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Solace Studio</b><span class="sep">/</span><span class="muted">Proposal for Northgate</span></div><span class="st wait stt">${I(P.clock, 12)}<span>Awaiting signature</span></span></header>
  <div class="split">
    <main class="docp" id="po-sg-doc">
      <article class="sheet">
        <div class="sh"><span class="mark">${I(P.mark, 16)}</span><div><b>Solace Studio</b><small>Brand and web partner</small></div><small class="rf">Proposal 0412</small></div>
        <h1>Brand and website proposal</h1>
        <p class="meta">Prepared for Northgate, October 14, 2026. Valid for 14 days.</p>
        <h3>Scope</h3>
        <ul class="sc"><li>Brand identity: logo suite, palette and type</li><li>Marketing website: 8 pages with a simple CMS</li><li>Launch support and a team handover call</li></ul>
        <h3>Investment</h3>
        <table class="tb"><tr><td>Brand identity</td><td>$4,200</td></tr><tr><td>Website design and build</td><td>$3,800</td></tr><tr><td>Launch support</td><td>$1,600</td></tr><tr class="sum"><td>Total</td><td>$9,600</td></tr></table>
        <h3>Terms</h3>
        <p class="tx">50% is due on acceptance and 50% on launch. Two rounds of revisions are included for each deliverable. Work starts within five business days of signing.</p>
        <div class="sgrow"><div class="sgb"><div class="sgi"><img class="simg" alt="Signature of Ana Lim" hidden></div><p>Accepted by <b class="sn">Ana Lim</b>, Northgate</p><small class="sdt">Date: pending</small></div></div>
      </article>
    </main>
    <aside class="panel">
      <div class="card sp">
        <div class="steps2"><span class="sd on"><i>1</i>Read</span><span class="ln"></span><span class="sd go2"><i>2</i>Sign</span><span class="ln"></span><span class="sd"><i>3</i>Done</span></div>
        <div class="form2">
          <h2>Review and sign</h2><p class="muted">Draw your signature below to accept this proposal.</p>
          <label class="fl" for="po-sg-name">Full name</label>
          <div class="field"><input id="po-sg-name" type="text" value="Ana Lim" autocomplete="name"></div>
          <div class="fl row"><span>Signature</span><button class="clr" type="button">Clear</button></div>
          <div class="pad"><canvas id="po-sg-cv" aria-label="Signature pad, draw with mouse, finger or pen"></canvas><span class="hint">${I(P.pen, 15)}Sign here</span><i class="base" aria-hidden="true"></i></div>
          <label class="agree"><input type="checkbox" id="po-sg-ag"><span class="box">${I(P.check, 12, 3.2)}</span>I agree to the terms and the $9,600 total.</label>
          <button class="cta acc" type="button" disabled>${I(P.pen, 16)}Sign and accept</button>
        </div>
        <div class="fin" aria-live="polite">
          <svg class="big-ck" viewBox="0 0 64 64" width="60" height="60" aria-hidden="true"><circle cx="32" cy="32" r="28" pathLength="1"/><path d="m21 33 8 8 15-17" pathLength="1"/></svg>
          <h2>Proposal accepted</h2><p class="muted">Signed by <b class="sn2">Ana Lim</b>. A copy is on its way to your inbox and the Solace team has been notified.</p>
          <button class="ghost again" type="button">${I(P.dl, 16)}Download signed copy</button>
        </div>
      </div>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${SH}
.d .top{display:flex;flex:none;align-items:center;gap:12px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;margin-right:auto}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .sep{color:var(--ml-bar)}
.d .stt{transition:background-color .4s ease,color .4s ease}
.d .stt svg{display:block}
.d .stt.is-ok{background:rgba(29,185,84,.11);color:#12893C}
.d .split{display:grid;grid-template-columns:minmax(0,1fr) 380px;flex:1;min-height:0}
.d .docp{min-width:0;min-height:0;padding:26px 28px;overflow-y:auto;scrollbar-width:thin}
.d .sheet{max-width:600px;margin:0 auto;padding:34px 40px 36px;border-radius:6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow-lg)}
.d .sh{display:flex;align-items:center;gap:10px}
.d .sh div{flex:1;display:flex;flex-direction:column}
.d .sh b{font-size:14px;font-weight:650}
.d .sh small{font-size:12px}
.d .rf{font-family:var(--ml-mono);font-size:11.5px}
.d .sheet h1{margin-top:28px;font-size:26px}
.d .meta{margin-top:6px;font-size:13px;color:var(--ml-muted)}
.d .sheet h3{margin-top:24px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .sc{display:flex;flex-direction:column;gap:7px;margin-top:10px;padding-left:18px;font-size:14px;color:var(--ml-ink-2)}
.d .tb{width:100%;margin-top:10px;border-collapse:collapse;font-size:14px}
.d .tb td{padding:9px 0;border-bottom:1px solid var(--ml-line);color:var(--ml-ink-2)}
.d .tb td:last-child{text-align:right;font-variant-numeric:tabular-nums;font-weight:600;color:var(--ml-ink)}
.d .tb .sum td{border-bottom:0;font-size:16px;font-weight:650;color:var(--ml-ink)}
.d .tx{margin-top:10px;font-size:13.5px;line-height:1.6;color:var(--ml-muted)}
.d .sgrow{margin-top:30px}
.d .sgb{max-width:300px}
.d .sgi{position:relative;height:74px;border-bottom:1.5px solid var(--ml-ink);overflow:hidden}
.d .simg{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;clip-path:inset(0 100% 0 0)}
.d .simg.show{clip-path:inset(0 0 0 0);transition:clip-path 900ms var(--ml-ease)}
.d .sgb p{margin-top:8px;font-size:13px;color:var(--ml-muted)}
.d .sgb b{color:var(--ml-ink)}
.d .sgb small{display:block;margin-top:2px;font-size:12px}
.d .panel{min-width:0;min-height:0;padding:26px 28px 26px 0;overflow-y:auto;scrollbar-width:thin}
.d .sp{position:relative;padding:22px 22px 24px}
.d .steps2{display:flex;align-items:center;gap:8px;margin-bottom:18px;font-size:12.5px;font-weight:600;color:var(--ml-muted)}
.d .steps2 .ln{flex:1;height:2px;border-radius:2px;background:var(--ml-bar-2)}
.d .sd{display:inline-flex;align-items:center;gap:7px}
.d .sd i{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--ml-bar-2);font:650 11px/1 var(--ml-font);font-style:normal;transition:background-color .3s ease,color .3s ease}
.d .sd.on{color:var(--ml-ink)}
.d .sd.on i{background:var(--ml-accent);color:#fff}
.d .form2 h2{font-size:19px;letter-spacing:-.03em}
.d .form2 > .muted{margin-top:4px;font-size:13.5px}
.d .fl{display:block;margin-top:14px;font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .fl.row{display:flex;justify-content:space-between}
.d .clr{border:0;background:none;font-size:12.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .field{display:flex;align-items:center;height:44px;margin-top:6px;padding:0 13px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,background-color .25s ease}
.d .field input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:14.5px}
.d .field:focus-within{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .pad{position:relative;height:150px;margin-top:6px;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);overflow:hidden;touch-action:none;transition:box-shadow .25s ease,background-color .25s ease}
.d .pad.ink{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .pad canvas{position:absolute;inset:0;width:100%;height:100%;cursor:crosshair}
.d .pad .base{position:absolute;left:18px;right:18px;bottom:38px;height:0;border-top:1.5px dashed var(--ml-bar);pointer-events:none}
.d .hint{position:absolute;left:0;right:0;bottom:12px;display:flex;align-items:center;justify-content:center;gap:6px;font-size:12.5px;color:var(--ml-muted);pointer-events:none;transition:opacity .25s ease}
.d .pad.has .hint{opacity:0}
.d .agree{display:flex;align-items:center;gap:10px;margin-top:16px;font-size:13.5px;color:var(--ml-ink-2);cursor:pointer}
.d .agree input{position:absolute;opacity:0;pointer-events:none}
.d .box{display:grid;place-items:center;flex:none;width:20px;height:20px;border-radius:6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .box svg{opacity:0;transform:scale(.6);transition:opacity .2s ease,transform .35s var(--ml-bounce)}
.d .agree input:checked + .box{background:var(--ml-accent);box-shadow:none}
.d .agree input:checked + .box svg{opacity:1;transform:none}
.d .agree input:focus-visible + .box{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .agree.press .box{transform:scale(.88)}
.d .acc{width:100%;height:46px;margin-top:18px}
.d .acc:disabled{background:var(--ml-bar);box-shadow:none;color:var(--ml-muted);cursor:default}
.d .form2{transition:opacity .35s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .fin{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:26px;text-align:center;opacity:0;visibility:hidden;transform:translateY(10px);transition:opacity .4s ease,transform var(--ml-spring-dur) var(--ml-spring),visibility 0s .4s}
.d .fin h2{font-size:22px;letter-spacing:-.03em}
.d .fin .muted{font-size:13.5px}
.d .fin .ghost{margin-top:8px}
.d .big-ck circle{fill:rgba(29,185,84,.1);stroke:#1DB954;stroke-width:3;stroke-dasharray:1;stroke-dashoffset:1}
.d .big-ck path{fill:none;stroke:#1DB954;stroke-width:4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1}
.d .signed .form2{opacity:0;pointer-events:none;transform:translateY(-8px)}
.d .signed .fin{opacity:1;visibility:visible;transform:none;transition-delay:.15s,.15s,0s}
.d .signed .big-ck circle{animation:po-draw 600ms var(--ml-ease) .3s forwards}
.d .signed .big-ck path{animation:po-draw 450ms var(--ml-ease) .75s forwards}
.d .signed .sd{color:var(--ml-ink)}
.d .signed .sd i{background:var(--ml-accent);color:#fff}
.d .signed .steps2 .ln{background:var(--ml-accent)}
@keyframes po-draw{to{stroke-dashoffset:0}}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .brand .sep,.d .brand .muted{display:none}
  .d .split{display:block;overflow-y:auto}
  .d .docp{overflow:visible;padding:16px 16px 8px}
  .d .sheet{padding:24px 20px}
  .d .panel{overflow:visible;padding:8px 16px 24px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const cv = $('#po-sg-cv');
      const pad = $('.pad');
      const doc = $('#po-sg-doc');
      const ag = $('#po-sg-ag');
      const acc = $('.acc');
      const name = $('#po-sg-name');
      const ctx = cv.getContext('2d');
      let strokes = [];
      let W = 0;
      let H = 0;
      const size = () => {
        const w = cv.offsetWidth || 340;
        const h = cv.offsetHeight || 150;
        if (w === W && h === H) return;
        W = w;
        H = h;
        cv.width = w * 2;
        cv.height = h * 2;
        paint();
      };
      const paint = () => {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, cv.width, cv.height);
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = '#B3150F';
        strokes.forEach((s) => {
          ctx.beginPath();
          s.forEach(([x, y], i) => (i ? ctx.lineTo(x * cv.width, y * cv.height) : ctx.moveTo(x * cv.width, y * cv.height)));
          if (s.length === 1) ctx.lineTo(s[0][0] * cv.width + 0.1, s[0][1] * cv.height);
          ctx.stroke();
        });
      };
      const seg = (s) => {
        const n = s.length;
        if (n < 2) return;
        ctx.beginPath();
        ctx.moveTo(s[n - 2][0] * cv.width, s[n - 2][1] * cv.height);
        ctx.lineTo(s[n - 1][0] * cv.width, s[n - 1][1] * cv.height);
        ctx.stroke();
      };
      size();
      new ResizeObserver(size).observe(cv);
      const refresh = () => {
        const has = strokes.length > 0;
        pad.classList.toggle('has', has);
        acc.disabled = !(has && ag.checked);
      };
      // real pointer drawing (mouse, touch, pen); the grid scales the canvas, so map through the rect
      let drawing = null;
      const pt = (e) => {
        const r = cv.getBoundingClientRect();
        return [Math.min(1, Math.max(0, (e.clientX - r.left) / r.width)), Math.min(1, Math.max(0, (e.clientY - r.top) / r.height))];
      };
      cv.addEventListener('pointerdown', (e) => {
        cv.setPointerCapture(e.pointerId);
        drawing = [pt(e)];
        strokes.push(drawing);
        pad.classList.add('ink');
        paint();
        refresh();
      });
      cv.addEventListener('pointermove', (e) => {
        if (!drawing) return;
        drawing.push(pt(e));
        seg(drawing);
      });
      const up = () => {
        drawing = null;
        pad.classList.remove('ink');
        refresh();
      };
      cv.addEventListener('pointerup', up);
      cv.addEventListener('pointercancel', up);
      ag.addEventListener('change', refresh);
      $('.clr').addEventListener('click', () => {
        strokes = [];
        paint();
        refresh();
      });
      const simg = $('.simg');
      const sign = () => {
        if (acc.disabled) return;
        const out = document.createElement('canvas');
        out.width = cv.width;
        out.height = cv.height;
        out.getContext('2d').drawImage(cv, 0, 0);
        simg.src = out.toDataURL('image/png');
        simg.hidden = false;
        simg.classList.remove('show');
        void simg.offsetWidth;
        simg.classList.add('show');
        $('.sn').textContent = name.value || 'Ana Lim';
        $('.sn2').textContent = name.value || 'Ana Lim';
        $('.sdt').textContent = 'Signed Oct 14, 2026, 10:42 AM';
        $('.sp').classList.add('signed');
        const t = $('.stt');
        t.classList.add('is-ok');
        t.classList.remove('wait');
        t.lastElementChild.textContent = 'Signed and accepted';
        doc.scrollTo({ top: doc.scrollHeight, behavior: 'smooth' });
      };
      const reset = () => {
        $('.sp').classList.remove('signed');
        const t = $('.stt');
        t.classList.remove('is-ok');
        t.classList.add('wait');
        t.lastElementChild.textContent = 'Awaiting signature';
        strokes = [];
        paint();
        ag.checked = false;
        simg.classList.remove('show');
        simg.hidden = true;
        $('.sdt').textContent = 'Date: pending';
        refresh();
        doc.scrollTo({ top: 0, behavior: 'smooth' });
      };
      acc.addEventListener('click', sign);
      $('.again').addEventListener('click', reset);
      refresh();

      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until && !drawing;
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const place = (x, y) => {
        // x, y are fractions of the pad
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = cv.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * x) / s}px,${(r.top - o.top + r.height * y) / s}px)`;
      };
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      // a hand-made signature: a looping scrawl plus an underline
      const scrawl = () => {
        const a = [];
        for (let i = 0; i <= 46; i++) {
          const t = i / 46;
          a.push([0.14 + 0.5 * t + 0.07 * Math.sin(t * 16), 0.46 - 0.3 * Math.sin(t * 9.5) * (1 - t * 0.45)]);
        }
        const b = [];
        for (let i = 0; i <= 16; i++) {
          const t = i / 16;
          b.push([0.18 + 0.58 * t, 0.7 - 0.08 * t + 0.03 * Math.sin(t * 6)]);
        }
        return [a, b];
      };
      cur.style.transform = 'translate(760px,380px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if ($('.sp').classList.contains('signed')) {
            await wait(3800);
            if (idle()) reset();
            await wait(1400);
            continue;
          }
          strokes = [];
          paint();
          refresh();
          place(0.1, 0.5);
          cur.classList.remove('off');
          await wait(900);
          let ok = true;
          pad.classList.add('ink');
          cur.style.transition = 'opacity .25s ease';
          cur.classList.add('press');
          for (const path of scrawl()) {
            const s = [];
            strokes.push(s);
            for (const p of path) {
              if (!idle() && !root.dataset.paused) {
                ok = false;
                break;
              }
              s.push(p);
              if (s.length === 1) paint();
              seg(s);
              place(p[0], p[1]);
              await wait(24);
            }
            if (!ok) break;
            await wait(260);
          }
          cur.classList.remove('press');
          cur.style.transition = '';
          pad.classList.remove('ink');
          refresh();
          if (!ok) continue;
          const lab = ag.closest('.agree');
          if (!(await aim(lab, 0.1))) continue;
          ag.checked = true;
          refresh();
          await wait(500);
          if (!(await aim(acc, 0.5, 0.5))) continue;
          sign();
          await wait(1500);
        }
      })();
    },
    prompt: `Build a proposal review and e-sign page for a client portal, full viewport (min-height: 100dvh), document on the left and a signing panel on the right.

Layout: a 64px top bar (logo tile, agency name, "/ Proposal for <client>", and an amber "Awaiting signature" pill at the right). Grid: minmax(0, 1fr) and a 380px panel. Left: a scrolling gray-blue pane holding a 600px white document sheet (6px radius, hairline plus a large soft shadow): letterhead row, 26px title, meta line, uppercase accent micro-headings (Scope, Investment, Terms), a short bullet list, a price table with a bold total, a terms paragraph, and a signature block (a 74px area with a 1.5px baseline, "Accepted by <name>", a date line). Right: a white card with a 3-step indicator (Read, Sign, Done), "Review and sign", a Full name field, a "Signature" label with a Clear link, a 150px signature pad (tinted, dashed baseline, a "Sign here" hint that fades once drawn, focus ring while drawing), an "I agree to the terms" checkbox and a full-width "Sign and accept" button that stays disabled until there is a drawn signature AND the box is checked.

Drawing: use a <canvas> with Pointer Events (pointerdown/move/up, setPointerCapture, touch-action: none) so mouse, touch and pen all work. Store strokes as points normalized to the canvas size so a resize can repaint them; render at 2x resolution; stroke with round caps and joins, about 2.5px, in a dark accent blue. Map pointer coordinates through getBoundingClientRect so it still works when an ancestor is scaled.

Behavior: Sign copies the canvas to an image placed on the document's signature line and reveals it with clip-path: inset(0 100% 0 0) to inset(0) over 900ms, fills the date, scrolls the document to the signature, turns the pill green ("Signed and accepted"), fills the step indicator and swaps the form for a success state (circle and check drawn with stroke-dashoffset, pathLength="1"). Provide a download-copy button.

Accessibility: the canvas has an aria-label and a keyboard-accessible alternative (type your name to sign), labels tied to inputs, the success state is aria-live="polite", :focus-visible rings, prefers-reduced-motion removes the reveal animation. Phone (under 760px): stack the signing panel under the document. One accent color; amber and green only on the status pill and success. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopBar, ProposalSheet, SigningPanel, SignaturePad, SuccessState).`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'app-portals-community',
    cat: 'app-portals',
    title: 'Community feed',
    sub: 'Like a post, comment, it lands in the thread',
    html: `
<div class="app">
  <header class="top"><div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Bayside Fitness</b><em>Community</em></div><label class="search">${I(P.search, 16)}<input type="search" placeholder="Search posts" aria-label="Search posts"></label><button class="ic" type="button" aria-label="Notifications">${I(P.bell)}<i></i></button><span class="av">MR</span></header>
  <div class="tri">
    <aside class="rail l">
      <p class="lbl">Spaces</p>
      <nav class="sp" aria-label="Spaces"><span class="hl" aria-hidden="true"></span></nav>
    </aside>
    <main class="feed">
      <div class="card comp in" style="--i:0"><span class="av">MR</span><input class="cin" type="text" placeholder="Share something with the group" aria-label="Share something"><button class="cta sm" type="button">Post</button></div>
      <div class="posts"></div>
    </main>
    <aside class="rail r">
      <section class="card ev in" style="--i:2"><h2>This week</h2><ul></ul></section>
      <section class="card top3 in" style="--i:3"><h2>Top members</h2><ul></ul></section>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${SH}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;margin-right:auto}
.d .brand b{font-size:15.5px;font-weight:650;letter-spacing:-.02em}
.d .brand em{padding:3px 9px;border-radius:999px;background:var(--ml-surface);font-size:12px;font-style:normal;font-weight:600;color:var(--ml-muted)}
.d .search{display:flex;align-items:center;gap:8px;width:250px;height:38px;padding:0 12px;border-radius:11px;background:var(--ml-surface);color:var(--ml-muted)}
.d .search input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px}
.d .ic{position:relative;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2)}
.d .ic i{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px #fff}
.d .tri{display:grid;grid-template-columns:210px minmax(0,1fr) 270px;gap:22px;flex:1;min-height:0;padding:0 24px}
.d .rail{display:flex;flex-direction:column;gap:16px;min-width:0;min-height:0;padding:24px 0;overflow-y:auto;scrollbar-width:none}
.d .rail.l{gap:10px}
.d .sp{position:relative;display:flex;flex-direction:column;gap:2px}
.d .sl{position:relative;z-index:1;display:flex;align-items:center;gap:11px;height:40px;padding:0 12px;border:0;border-radius:11px;background:none;font-size:14px;font-weight:550;color:var(--ml-ink-2);text-align:left}
.d .sl svg{flex:none;color:var(--ml-muted)}
.d .sl em{margin-left:auto;font:500 11.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .sl.on{color:var(--ml-accent-ink);font-weight:600}
.d .sl.on svg{color:var(--ml-accent)}
.d .hl{position:absolute;top:0;left:0;right:0;height:40px;border-radius:11px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .feed{display:flex;flex-direction:column;gap:14px;min-width:0;min-height:0;padding:24px 0;overflow-y:auto;scrollbar-width:none}
.d .comp{display:flex;flex:none;align-items:center;gap:12px;padding:12px 14px}
.d .cin{flex:1;min-width:0;height:40px;padding:0 14px;border:0;border-radius:11px;outline:0;background:var(--ml-surface);font-size:14px}
.d .cin::placeholder{color:var(--ml-muted)}
.d .posts{display:flex;flex-direction:column;gap:14px}
.d .post{padding:18px 20px 12px}
.d .pt{display:flex;align-items:center;gap:12px}
.d .pt div{flex:1;min-width:0;display:flex;flex-direction:column}
.d .pt b{font-size:14.5px;font-weight:650}
.d .pt small{font-size:12px}
.d .role{padding:3px 8px;border-radius:99px;background:var(--ml-accent-soft);font-size:11px;font-weight:600;color:var(--ml-accent-ink)}
.d .ptx{margin-top:12px;font-size:14.5px;line-height:1.55;color:var(--ml-ink-2)}
.d .pimg{position:relative;height:150px;margin-top:12px;border-radius:12px;overflow:hidden;background:linear-gradient(180deg,#FFF0ED,#EAF2FF)}
.d .pimg::before{content:"";position:absolute;right:18%;top:20%;width:36px;height:36px;border-radius:50%;background:var(--ml-accent-2)}
.d .pimg::after{content:"";position:absolute;left:-6%;right:-6%;bottom:-44%;height:80%;border-radius:50% 50% 0 0;background:var(--ml-accent-line)}
.d .pa{display:flex;align-items:center;gap:6px;margin-top:12px;padding-top:8px;border-top:1px solid var(--ml-line)}
.d .ab{display:inline-flex;align-items:center;gap:7px;height:36px;padding:0 12px;border:0;border-radius:10px;background:none;font-size:13px;font-weight:600;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .ab:hover{background:var(--ml-surface)}
.d .ab.press{transform:scale(.93)}
.d .ab svg{transition:transform .2s ease}
.d .ab.lk.on{color:var(--ml-accent-ink)}
.d .ab.lk.on svg{fill:var(--ml-accent);stroke:var(--ml-accent);animation:po-pop 460ms var(--ml-ease)}
.d .ab b{font-weight:600;font-variant-numeric:tabular-nums}
.d .cm{display:grid;grid-template-rows:0fr;transition:grid-template-rows var(--ml-spring-dur) var(--ml-spring)}
.d .post.open .cm{grid-template-rows:1fr}
.d .cm > div{min-height:0;overflow:hidden}
.d .cl{display:flex;flex-direction:column;gap:12px;padding:10px 0 4px}
.d .c1{display:flex;gap:10px;animation:po-in 420ms var(--ml-spring) both}
.d .c1 .av{width:30px;height:30px;font-size:11px}
.d .c1 p{flex:1;min-width:0;padding:9px 13px;border-radius:14px;background:var(--ml-surface);font-size:13.5px;line-height:1.45;color:var(--ml-ink-2)}
.d .c1 b{display:block;font-size:13px;font-weight:650;color:var(--ml-ink)}
.d .cw{display:flex;align-items:center;gap:10px;margin:6px 0 6px}
.d .cw .av{width:30px;height:30px;font-size:11px}
.d .cw .field{flex:1;display:flex;align-items:center;gap:6px;height:38px;padding:0 6px 0 13px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,background-color .25s ease}
.d .cw .field:focus-within,.d .cw .field.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .cw input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px}
.d .cw input::placeholder{color:#A1A1A6}
.d .cw .snd{display:grid;place-items:center;width:28px;height:28px;border:0;border-radius:8px;background:var(--ml-accent);color:#fff}
.d .cw .snd.press{transform:scale(.9)}
.d .ev,.d .top3{padding:18px 18px 10px}
.d .ev h2,.d .top3 h2{font-size:15px}
.d .ev ul,.d .top3 ul{display:flex;flex-direction:column;margin-top:8px;list-style:none}
.d .ev li,.d .top3 li{display:flex;align-items:center;gap:12px;padding:10px 0;border-top:1px solid var(--ml-line)}
.d .ev li:first-child,.d .top3 li:first-child{border-top:0}
.d .dtl{display:flex;flex-direction:column;align-items:center;flex:none;width:42px;padding:5px 0;border-radius:10px;background:var(--ml-accent-soft);font-size:10.5px;font-weight:600;line-height:1.15;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .dtl b{font-size:16px;font-weight:650;color:var(--ml-ink)}
.d .ev p,.d .top3 p{flex:1;min-width:0;font-size:13.5px;font-weight:600}
.d .ev small,.d .top3 small{display:block;font-size:12px;font-weight:500}
.d .top3 .pts{font:600 12px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d .top3 .av{width:32px;height:32px}
@container scr (max-width: 760px){
  .d .top{padding:0 16px}
  .d .search,.d .brand em{display:none}
  .d .tri{grid-template-columns:minmax(0,1fr);gap:0;padding:0 16px}
  .d .rail{display:none}
  .d .feed{padding:16px 0}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const ico = {
        meg: '<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
        trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
        help: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
        book: '<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>',
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
        msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
        share: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m16 6-4-4-4 4"/><path d="M12 2v13"/>',
        send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
      };
      const svg = (d, s = 17) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
      const spaces = [['Announcements', 'meg', 12], ['Wins', 'trophy', 48], ['Questions', 'help', 31], ['Resources', 'book', 9], ['Meetups', 'users', 14]];
      const nav = $('.sp');
      const hl = $('.hl');
      nav.insertAdjacentHTML('beforeend', spaces.map(([n, i, c], k) => `<button class="sl${k === 1 ? ' on' : ''}" type="button">${svg(ico[i])}<span>${n}</span><em>${c}</em></button>`).join(''));
      const sl = [...nav.querySelectorAll('.sl')];
      const slide = (b) => {
        sl.forEach((x) => x.classList.toggle('on', x === b));
        hl.style.transform = `translateY(${b.offsetTop}px)`;
      };
      sl.forEach((b) => b.addEventListener('click', () => slide(b)));
      hl.style.transition = 'none';
      slide(sl[1]);
      requestAnimationFrame(() => (hl.style.transition = ''));
      const tint = (s) => 'b' + (((s.charCodeAt(0) + s.length) % 3) + 1);
      const posts = [
        { n: 'Aiko Tan', i: 'AT', r: 'Coach', t: '25 min ago', x: 'Heads up: Saturday open studio moves to 8:30 AM. Bring a friend, their first class is on us.', img: 0, l: 18, cm: [] },
        { n: 'Tomas Lindqvist', i: 'TL', r: 'Member', t: '2 hours ago', x: 'First unassisted pull-up after 11 weeks. Thank you Hana for the progressions, they actually worked.', img: 1, l: 42, cm: [['Hana Kim', 'HK', 'So proud of you! Next goal: five in a row.'], ['Luis Ortega', 'LO', 'Huge. That grip work paid off.']] },
        { n: 'Priya Nair', i: 'PN', r: 'Member', t: '5 hours ago', x: 'Anyone up for a sunrise run at the pier this Sunday? Easy pace, coffee after.', img: 0, l: 9, cm: [['Sam Whitfield', 'SW', 'I am in. What time?']] },
      ];
      const host = $('.posts');
      const comment = (c) => `<div class="c1"><span class="av ${tint(c[0])}">${c[1]}</span><p><b>${c[0]}</b>${c[2]}</p></div>`;
      host.innerHTML = posts
        .map(
          (p, k) =>
            `<article class="card post in" style="--i:${k + 1}" data-k="${k}"><div class="pt"><span class="av ${tint(p.n)}">${p.i}</span><div><b>${p.n}</b><small>${p.t}</small></div><span class="role">${p.r}</span></div><p class="ptx">${p.x}</p>${p.img ? '<div class="pimg" aria-hidden="true"></div>' : ''}<div class="pa"><button class="ab lk" type="button" aria-pressed="false">${svg(ico.heart)}<b>${p.l}</b></button><button class="ab cb" type="button">${svg(ico.msg)}<b>${p.cm.length + (k === 0 ? 4 : 0)}</b></button><button class="ab" type="button">${svg(ico.share)}Share</button></div><div class="cm"><div><div class="cl">${p.cm.map(comment).join('')}</div><div class="cw"><span class="av">MR</span><label class="field"><input type="text" placeholder="Write a comment" aria-label="Write a comment"><button class="snd" type="button" aria-label="Send comment">${svg(ico.send, 14)}</button></label></div></div></div></article>`,
        )
        .join('');
      const ev = [['Oct', '17', 'Sunrise strength class', 'Fri, 6:30 AM'], ['Oct', '18', 'Open studio', 'Sat, 8:30 AM'], ['Oct', '22', 'Nutrition Q and A', 'Wed, 7:00 PM']];
      $('.ev ul').innerHTML = ev.map((e) => `<li><span class="dtl">${e[0]}<b>${e[1]}</b></span><p>${e[2]}<small class="muted">${e[3]}</small></p></li>`).join('');
      const tp = [['Hana Kim', 'HK', 1280], ['Luis Ortega', 'LO', 1115], ['Isabel Cruz', 'IC', 980]];
      $('.top3 ul').innerHTML = tp.map((m) => `<li><span class="av ${tint(m[0])}">${m[1]}</span><p>${m[0]}</p><span class="pts">${m[2].toLocaleString('en-US')}</span></li>`).join('');

      const like = (post) => {
        const b = post.querySelector('.lk');
        const n = b.querySelector('b');
        const on = !b.classList.contains('on');
        b.classList.toggle('on', on);
        b.setAttribute('aria-pressed', String(on));
        n.textContent = +n.textContent + (on ? 1 : -1);
      };
      const add = (post, c) => {
        post.querySelector('.cl').insertAdjacentHTML('beforeend', comment(c));
        const n = post.querySelector('.cb b');
        n.textContent = +n.textContent + 1;
      };
      host.addEventListener('click', (e) => {
        const post = e.target.closest('.post');
        if (!post) return;
        if (e.target.closest('.lk')) like(post);
        else if (e.target.closest('.cb')) post.classList.toggle('open');
        else if (e.target.closest('.snd')) {
          const inp = post.querySelector('.cw input');
          if (inp.value.trim()) {
            add(post, ['Maya Reyes', 'MR', inp.value.trim()]);
            inp.value = '';
          }
        }
      });
      host.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && e.target.closest('.cw input')) e.target.closest('.post').querySelector('.snd').click();
      });

      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until && !host.contains(root.getRootNode().activeElement);
      const touch = () => {
        until = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        const ok = el && el.offsetParent !== null;
        cur.classList.toggle('off', !ok);
        if (!ok) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const aim = async (el, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(800);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        return true;
      };
      const reset = () => {
        const p = host.children[1];
        const b = p.querySelector('.lk');
        if (b.classList.contains('on')) like(p);
        p.classList.remove('open');
        const cl = p.querySelector('.cl');
        while (cl.children.length > 2) cl.lastElementChild.remove();
        p.querySelector('.cb b').textContent = '2';
        host.parentElement.scrollTop = 0;
      };
      cur.style.transform = 'translate(560px,640px)';
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const post = host.children[1];
          if (!post.classList.contains('open')) {
            const lk = post.querySelector('.lk');
            if (!(await aim(lk, 0.35))) continue;
            like(post);
            await wait(900);
            const cb = post.querySelector('.cb');
            if (!(await aim(cb, 0.35))) continue;
            post.classList.add('open');
            await wait(800);
            if (host.parentElement.scrollHeight > host.parentElement.clientHeight) host.parentElement.scrollTo({ top: post.offsetTop - 70, behavior: 'smooth' });
            await wait(700);
          }
          const inp = post.querySelector('.cw input');
          const f = inp.closest('.field');
          moveTo(f, 0.4);
          await wait(800);
          f.classList.add('is-auto');
          let ok = true;
          for (const ch of 'Congrats Tomas, huge milestone!') {
            if (!idle()) {
              ok = false;
              break;
            }
            inp.value += ch;
            await wait(40 + Math.random() * 35);
          }
          f.classList.remove('is-auto');
          if (!ok) continue;
          const sn = post.querySelector('.snd');
          if (await aim(sn)) sn.click();
          await wait(4200);
          if (idle()) reset();
          await wait(1400);
        }
      })();
    },
    prompt: `Build a community feed page for a members portal, full viewport (min-height: 100dvh), three-column layout.

Layout: a 64px top bar (logo tile, community name with a "Community" pill, a 250px search field, notifications button with an unread dot, avatar). Below, a grid of 210px / minmax(0, 1fr) / 270px with 22px gaps and 24px side padding, each column scrolling on its own. Left rail: a micro-label "Spaces" and 40px nav rows (line icon, name, post count in mono) with ONE soft accent highlight that slides between rows using transform: translateY(row offsetTop) and a 587ms critically damped spring. Center feed: a composer card (avatar, rounded input, small primary "Post") and post cards (16px radius, hairline plus a soft shadow): avatar initials on blue tints, name, time, a role pill (Coach, Member), body text, an optional drawn image tile (sun and hills), and an action row separated by a 1px line with Like (heart and count), Comment (count) and Share buttons. Right rail: a "This week" card of events (blue-tint date tile, title, time) and a "Top members" card (avatar, name, points in mono).

Behavior: Like toggles aria-pressed, fills the heart with the accent color with a pop (scale .6 to 1.18 to 1, 460ms) and bumps the tabular count. Comment expands the thread under the post (grid-template-rows 0fr to 1fr, spring) showing existing comments (soft grey bubbles) and a comment field with a send button; Enter or send appends the comment (opacity and translateY 8px, 420ms) and increments the count. Posts enter with a 45ms stagger.

Accessibility: action buttons are real buttons with counts in their accessible names, the comment field has an aria-label, :focus-visible rings, prefers-reduced-motion removes the pop and stagger. Phone (under 760px): hide both rails and the search, show the feed only. One accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (SpaceNav, Composer, PostCard, CommentThread, EventsCard, LeaderboardCard).`,
  });
})();
