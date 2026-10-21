(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    dash: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    up: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    down: '<path d="M22 17 13.5 8.5 8.5 13.5 2 7"/><path d="M16 17h6v-6"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    dl: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    msg: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-8.82 3.98"/>',
    ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/>',
    wallet: '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    brief: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    server: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    dollar: '<line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    spark: '<path d="M9.94 14.06 2 12l7.94-2.06L12 2l2.06 7.94L22 12l-7.94 2.06L12 22Z"/>',
  };
  const I = (d, s = 18, w = 2) =>
    `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
  const CURSOR = `<div class="cur off" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M4.04 4.6a.5.5 0 0 1 .56-.56l15.5 6.1a.5.5 0 0 1-.05.94l-6.3 1.9a1 1 0 0 0-.66.66l-1.9 6.3a.5.5 0 0 1-.94.05Z"/></svg></div>`;
  const CURSOR_CSS = `
.d .cur{position:absolute;left:0;top:0;z-index:50;pointer-events:none;transition:transform 780ms var(--ml-ease),opacity .25s ease}
.d .cur svg{display:block;filter:drop-shadow(0 2px 3px rgba(35,15,10,.28));transition:transform 90ms ease-out}
.d .cur path{fill:var(--ml-ink);stroke:#fff;stroke-width:1.6;stroke-linejoin:round}
.d .cur.press svg{transform:scale(.8)}
.d .cur.off{opacity:0}`;
  // Shared building blocks for every dashboard (strings only). Keyframes carry the dsh- prefix.
  const BASE = `
.d .app{position:relative;display:flex;flex-direction:column;height:100%;min-height:0}
.d button{font:inherit;color:inherit}
.d h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d h2{font-size:15px;line-height:1.2;font-weight:650;letter-spacing:-.01em}
.d .card{min-width:0;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .cap{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .v{font-size:26px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .num{font-variant-numeric:tabular-nums}
.d .mono{font-family:var(--ml-mono)}
.d .pg > *{flex-shrink:0 !important}
.d .pg{display:flex;flex:1;flex-direction:column;gap:16px;min-height:0;padding:24px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .brand{display:flex;align-items:center;gap:10px}
.d .brand b{font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .mark{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .ic{position:relative;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer}
.d .ic:hover{background:var(--ml-surface)}
.d .ic i{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px var(--ml-bg)}
.d .av{flex:none;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:650}
.d .dl{display:inline-flex;align-items:center;gap:3px;padding:3px 7px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:600;color:#12893C;font-variant-numeric:tabular-nums;white-space:nowrap}
.d .dl.dn{background:rgba(255,59,48,.09);color:#D70015}
.d .dl.wn{background:rgba(255,159,10,.12);color:#B25E00}
.d .seg{position:relative;display:grid;grid-auto-flow:column;grid-auto-columns:1fr;padding:3px;border-radius:11px;background:var(--ml-bar-2)}
.d .seg .hl{position:absolute;top:3px;bottom:3px;left:3px;width:calc((100% - 6px) / var(--n,3));border-radius:8px;background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.12),0 0 0 .5px rgba(35,15,10,.06);transform:translateX(calc(var(--on,0) * 100%));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .seg button{position:relative;z-index:1;height:30px;padding:0 14px;border:0;border-radius:8px;background:none;font-size:12.5px;font-weight:600;color:var(--ml-muted);white-space:nowrap;cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .seg button.on{color:var(--ml-ink)}
.d .seg button.press,.d .chip.press,.d .btn.press{transform:scale(.95)}
.d .chip{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 13px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;cursor:pointer;transition:background-color .2s ease,color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .chip.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:34px;padding:0 14px;border:0;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease}
.d .btn.pri{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d .btn.sm{height:28px;padding:0 11px;font-size:12px}
.d .btn:active{transform:scale(.96)}
.d .btn:focus-visible,.d .chip:focus-visible,.d .seg button:focus-visible,.d .ic:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .tip{position:absolute;left:0;bottom:0;z-index:5;width:max-content;padding:9px 11px;border-radius:11px;background:var(--ml-ink);color:#fff;font-size:12px;line-height:1.5;pointer-events:none;opacity:0;box-shadow:var(--ml-shadow-lg);transition:transform .35s var(--ml-ease),opacity .2s ease}
.d .tip.on{opacity:1}
.d .tip b{display:block;font-size:12px;font-weight:600;color:rgba(255,255,255,.7)}
.d .tip span{display:flex;justify-content:space-between;gap:18px;font-variant-numeric:tabular-nums}
.d .tip em{font-style:normal;font-weight:650}
.d .lg{display:flex;align-items:center;gap:14px;font-size:12px;color:var(--ml-muted)}
.d .lg span{display:inline-flex;align-items:center;gap:6px}
.d .lg i{width:9px;height:9px;border-radius:3px;background:var(--ml-accent)}
.d .gx{transform:scaleX(var(--s,1));transform-origin:0 50%;transition:transform .7s var(--ml-ease)}
.d .gy{transform:scaleY(var(--s,1));transform-origin:50% 100%;transition:transform .7s var(--ml-ease)}
.d .swap .in{animation:dsh-in 560ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
.d .swap .gb{animation:dsh-growy 800ms var(--ml-ease) both;animation-delay:calc(var(--i,0) * 35ms);transform-origin:50% 100%}
.d .swap .gx{animation:dsh-growx 800ms var(--ml-ease) both;animation-delay:calc(var(--i,0) * 55ms)}
.d .swap .gy{animation:dsh-growy 800ms var(--ml-ease) both;animation-delay:calc(var(--i,0) * 35ms)}
.d .swap .wipe{animation:dsh-wipe 1100ms var(--ml-ease) both}
.d .swap .fade{animation:dsh-fade 600ms ease 500ms both}
@keyframes dsh-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes dsh-growy{from{transform:scaleY(0)}}
@keyframes dsh-growx{from{transform:scaleX(0)}}
@keyframes dsh-wipe{from{clip-path:inset(-4px 100% -4px -4px)}to{clip-path:inset(-4px -4px -4px -4px)}}
@keyframes dsh-fade{from{opacity:0}to{opacity:1}}
@keyframes dsh-ping{0%{opacity:.45;transform:scale(1)}80%,100%{opacity:0;transform:scale(3)}}
${CURSOR_CSS}
@media (prefers-reduced-motion: reduce){.d .swap .in,.d .swap .gb,.d .swap .gx,.d .swap .gy,.d .swap .wipe,.d .swap .fade{animation:none}}`;


  // 1. SaaS revenue / MRR - top-nav shell, stacked bars, range segment
  ML.add({
    id: 'app-dashboards-mrr',
    cat: 'app-dashboards',
    title: 'SaaS revenue MRR',
    sub: 'Range tabs regrow the stacked bars',
    html: `
<div class="app">
  <header class="tn">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Halden</b></div>
    <nav class="tabs" aria-label="Sections"><button type="button" class="on">Revenue</button><button type="button">Customers</button><button type="button">Plans</button><button type="button">Churn</button></nav>
    <div class="tr"><button class="ic" type="button" aria-label="Notifications">${I(P.bell)}<i></i></button><span class="av">MR</span></div>
  </header>
  <main class="pg">
    <div class="head in" style="--i:0">
      <div class="hero">
        <div><p class="cap">Monthly recurring revenue</p><p class="big num">$182,400</p></div>
        <div class="hs"><p class="k">Net new MRR</p><p class="nn num">+$68,500</p></div>
        <span class="dl rg" style="margin-bottom:4px">+60.1% in 12 months</span>
      </div>
      <div class="seg" style="--n:3;--on:2" role="group" aria-label="Range"><span class="hl"></span><button type="button">3M</button><button type="button">6M</button><button type="button" class="on">12M</button></div>
    </div>
    <div class="row">
      <section class="card chart in" style="--i:1">
        <div class="ch"><h2>MRR movement</h2><p class="lg"><span><i style="background:var(--ml-accent-line)"></i>Existing</span><span><i style="background:var(--ml-accent-2)"></i>Expansion</span><span><i></i>New</span></p></div>
        <div class="plot">
          <div class="gl" style="bottom:0"><s>$0</s></div><div class="gl" style="bottom:25%"><s>$60k</s></div><div class="gl" style="bottom:50%"><s>$120k</s></div><div class="gl" style="bottom:75%"><s>$180k</s></div><div class="gl" style="bottom:100%"><s>$240k</s></div>
          <div class="cols"></div>
          <div class="tip" role="status"></div>
        </div>
        <div class="xs"></div>
      </section>
      <section class="card plans in" style="--i:2">
        <div class="ch"><h2>MRR by plan</h2><span class="k">Oct 2026</span></div>
        <ul class="pl"></ul>
        <div class="mv"><p class="cap">Oct movement</p><div><span>New</span><b>+$8,200</b></div><div><span>Expansion</span><b>+$4,400</b></div><div><span>Churned</span><b class="ng">-$5,900</b></div><div class="nt"><span>Net new MRR</span><b>+$6,700</b></div></div>
      </section>
    </div>
    <div class="kp">
      <div class="card kc in" style="--i:3"><p class="k">ARR</p><p class="v">$2.19M</p><span class="dl">+3.8%</span></div>
      <div class="card kc in" style="--i:4"><p class="k">Net revenue retention</p><p class="v">108%</p><span class="dl">+2 pts</span></div>
      <div class="card kc in" style="--i:5"><p class="k">Logo churn</p><p class="v">1.4%</p><span class="dl">-0.3 pts</span></div>
      <div class="card kc in" style="--i:6"><p class="k">Avg. revenue per account</p><p class="v">$214</p><span class="dl">+$9</span></div>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .tn{display:flex;flex:none;align-items:center;gap:28px;height:60px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tabs{display:flex;gap:4px;height:100%}
.d .tabs button{position:relative;padding:0 14px;border:0;background:none;font-size:14px;font-weight:500;color:var(--ml-muted);cursor:pointer}
.d .tabs button.on{font-weight:600;color:var(--ml-ink)}
.d .tabs button.on::after{content:"";position:absolute;left:14px;right:14px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .tr{display:flex;align-items:center;gap:10px;margin-left:auto}
.d .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .hero{display:flex;align-items:flex-end;gap:36px}
.d .big{margin-top:8px;font-size:46px;line-height:1;font-weight:650;letter-spacing:-.04em}
.d .nn{margin-top:6px;font-size:22px;font-weight:650;letter-spacing:-.02em;color:#12893C}
.d .row{display:grid;flex:1;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);gap:16px;min-height:280px}
.d .chart,.d .plans{display:flex;flex-direction:column;padding:18px 20px}
.d .ch{display:flex;align-items:center;justify-content:space-between;gap:10px}
.d .plot{position:relative;flex:1;min-height:160px;margin:16px 0 0 46px}
.d .gl{position:absolute;left:0;right:0;border-top:1px solid var(--ml-line)}
.d .gl s{position:absolute;left:-46px;top:0;width:38px;transform:translateY(-50%);text-align:right;text-decoration:none;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .cols{position:absolute;inset:0;z-index:1;display:flex;transition:opacity .2s ease}
.d .cw{display:flex;flex:1;align-items:flex-end;justify-content:center;height:100%;outline:0}
.d .col{display:flex;flex-direction:column;width:min(80%,52px);border-radius:7px 7px 3px 3px;overflow:hidden;transition:opacity .25s ease}
.d .col b{display:block;background:var(--ml-accent)}
.d .col b + b{box-shadow:0 -2px 0 #fff}
.d .col b.e{background:var(--ml-accent-2)}
.d .col b.b{background:var(--ml-accent-line)}
.d .cols.dim .col:not(.hot){opacity:.45}
.d .xs{display:flex;margin:8px 0 0 46px}
.d .xs span{flex:1;text-align:center;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .pl{display:flex;flex-direction:column;gap:16px;margin-top:18px;list-style:none}
.d .pl li{display:grid;grid-template-columns:1fr auto;gap:2px 10px}
.d .pl li > div:nth-child(2){display:flex;align-items:baseline;gap:8px}
.d .mv{display:grid;gap:8px;margin-top:auto;padding-top:14px;border-top:1px solid var(--ml-line)}
.d .mv div{display:flex;justify-content:space-between;font-size:13px;color:var(--ml-ink-2)}
.d .mv b{font-weight:650;font-variant-numeric:tabular-nums;color:#12893C}
.d .mv b.ng{color:#D70015}
.d .mv .nt{padding-top:8px;border-top:1px solid var(--ml-bar-2);font-weight:600;color:var(--ml-ink)}
.d .pl strong{font-size:14px;font-weight:600}
.d .pl small{display:block;font-size:12px;color:var(--ml-muted)}
.d .pl b{font-size:15px;font-weight:650;font-variant-numeric:tabular-nums;text-align:right}
.d .pl em{align-self:end;font-size:12px;font-style:normal;font-variant-numeric:tabular-nums;text-align:right;color:var(--ml-muted)}
.d .pt{grid-column:1/-1;height:7px;margin-top:6px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .pt i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent)}
.d .kp{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
.d .kc{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:16px 18px}
@container scr (max-width: 760px){
  .d .tabs,.d .hs{display:none}
  .d .tn{padding:0 16px}
  .d .pg{padding:18px 16px}
  .d .head{flex-direction:column;align-items:stretch}
  .d .big{font-size:38px}
  .d .row{flex:none;grid-template-columns:minmax(0,1fr)}
  .d .chart{min-height:300px}
  .d .kp{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .lg{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 700) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const setSeg = (seg, i) => { seg.style.setProperty('--on', i); [...seg.querySelectorAll('button')].forEach((b, k) => b.classList.toggle('on', k === i)); };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };

      const M = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      const tot = [118.2, 123.5, 128.9, 133.4, 139.8, 144.6, 151.2, 158.7, 164.9, 171.3, 175.7, 182.4];
      const nw = [6.1, 5.8, 6.4, 5.2, 7.1, 6.0, 7.4, 8.1, 6.9, 7.6, 5.9, 8.2];
      const ex = [2.2, 2.9, 2.4, 3.1, 2.8, 3.3, 3.0, 3.9, 3.4, 4.1, 3.6, 4.4];
      const prior = 113.9;
      const plans = [['Team', 412, 71940], ['Business', 168, 58200], ['Enterprise', 34, 27950], ['Starter', 238, 24310]];
      const fmt = (k) => '$' + Math.round(k * 1000).toLocaleString('en-US');
      const cols = $('.cols'), tip = $('.tip'), plot = $('.plot'), seg = $('.seg');
      const ranges = [3, 6, 12];
      let n = 12;

      $('.pl').innerHTML = plans
        .map(([name, c, v], k) => `<li class="in" style="--i:${k + 3}"><div><strong>${name}</strong><small>${c} accounts</small></div><div><b>${fmt(v / 1000)}</b><em>${((v / 182400) * 100).toFixed(1)}%</em></div><div class="pt"><i class="gx" style="--s:${v / 71940};--i:${k}"></i></div></li>`)
        .join('');

      const hide = () => { cols.classList.remove('dim'); $$('.col').forEach((x) => x.classList.remove('hot')); tip.classList.remove('on'); };
      const show = (i) => {
        const w = cols.querySelector(`[data-i="${i}"]`);
        if (!w) return;
        const c = w.firstElementChild;
        cols.classList.add('dim');
        $$('.col').forEach((x) => x.classList.toggle('hot', x === c));
        tip.innerHTML = `<b>${M[i]} ${i < 2 ? 2025 : 2026}</b><span>MRR<em>${fmt(tot[i])}</em></span><span>Existing<em>${fmt(tot[i] - nw[i] - ex[i])}</em></span><span>Expansion<em>${fmt(ex[i])}</em></span><span>New<em>${fmt(nw[i])}</em></span>`;
        const x = Math.min(Math.max(w.offsetLeft + w.offsetWidth / 2 - 82, 0), plot.offsetWidth - 170);
        const y = Math.min(c.offsetHeight + 12, plot.offsetHeight + 24 - tip.offsetHeight);
        tip.style.transform = `translate(${x}px,${-y}px)`;
        tip.classList.add('on');
      };
      const render = (animate) => {
        const from = tot.length - n;
        const idx = [...Array(n)].map((_, k) => from + k);
        cols.innerHTML = idx
          .map((i, k) => `<div class="cw" data-i="${i}" tabindex="0" aria-label="${M[i]} MRR ${fmt(tot[i])}"><div class="col gb" style="--i:${k};height:${tot[i] / 2.4}%"><b style="flex:${nw[i]} 1 0"></b><b class="e" style="flex:${ex[i]} 1 0"></b><b class="b" style="flex:${tot[i] - nw[i] - ex[i]} 1 0"></b></div></div>`)
          .join('');
        $('.xs').innerHTML = idx.map((i) => `<span>${M[i]}</span>`).join('');
        const base = from === 0 ? prior : tot[from - 1];
        $('.rg').textContent = `+${(((tot[11] - base) / base) * 100).toFixed(1)}% in ${n} months`;
        roll($('.nn'), '+$' + Math.round((tot[11] - base) * 1000).toLocaleString('en-US'));
        if (animate) replay(app);
        hide();
      };
      cols.addEventListener('pointerover', (e) => { const w = e.target.closest('.cw'); if (w) show(+w.dataset.i); });
      cols.addEventListener('focusin', (e) => { const w = e.target.closest('.cw'); if (w) show(+w.dataset.i); });
      plot.addEventListener('pointerleave', hide);
      $$('.seg button').forEach((b, k) => b.addEventListener('click', () => { n = ranges[k]; setSeg(seg, k); render(true); }));
      render(false);
      show(11);

      (async () => {
        await wait(1800);
        let q = 0;
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const k = [1, 0, 2][q % 3];
          await act($$('.seg button')[k], () => $$('.seg button')[k].click());
          await wait(1700);
          const ws = $$('.cw');
          const w = ws[Math.max(0, ws.length - 2 - (q % 2))];
          await act(w, () => show(+w.dataset.i), 0.5, 0.2);
          await wait(2400);
          q++;
        }
      })();
    },
    prompt: `Build a SaaS revenue dashboard with a top navigation bar and no sidebar. Page: top bar (60px, white, 1px bottom hairline) with the logo tile, underlined section tabs (Revenue active, Customers, Plans, Churn) and a notifications button plus avatar on the right. Below, on a light surface background: a header row with a small uppercase label "Monthly recurring revenue", a 46px tabular-nums hero number, a green "Net new MRR" figure and a delta pill, and on the right a 3-option segmented control (3M, 6M, 12M).

Main row (CSS grid, 1.7fr / 1fr): a card with a stacked column chart of MRR movement per month (existing base in a light blue, expansion in a mid blue, new in your accent color), y-axis labels ($0 to $200k) with hairline gridlines, month labels under the columns and a legend; next to it a card "MRR by plan" listing 4 plans with account counts, amount, share of total and a thin proportional bar. Under it, 4 KPI cards (ARR, net revenue retention, logo churn, revenue per account) each with a small delta pill. Make the numbers add up (plan amounts sum to the hero MRR, bar heights proportional to the monthly total).

Interaction: the segmented control has ONE shared highlight that slides between options with transform: translateX and a critically damped spring (587ms). Changing the range re-renders the chart: columns grow from the baseline with scaleY (800ms, cubic-bezier(.32,.72,0,1), 35ms stagger), the net new figure counts to its new value over 700ms. Hovering or focusing a column dims the others to 45% and moves a tooltip (month, MRR, existing, expansion, new) with a transform transition.

Accessibility: columns are focusable with aria-labels, segmented buttons are real buttons, visible focus rings, prefers-reduced-motion removes the grow animation. Phone layout under 760px: hide the tabs, stack the chart and the plan card, KPIs two per row. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopNav, RevenueHeader, RangeSwitch, MovementChart, PlanBreakdown, KpiCard).`,
  });

  // 2. Product analytics - slim icon rail, funnel + retention cohort heatmap, segment switch
  ML.add({
    id: 'app-dashboards-analytics',
    cat: 'app-dashboards',
    title: 'Product analytics',
    sub: 'Funnel and cohort heatmap re-colour',
    html: `
<div class="app">
  <div class="shell">
    <nav class="rail" aria-label="Main">
      <span class="mark">${I(P.mark, 16)}</span>
      <button class="ri" type="button" aria-label="Overview">${I(P.dash, 19)}</button>
      <button class="ri on" type="button" aria-label="Analytics" aria-current="page">${I(P.chart, 19)}</button>
      <button class="ri" type="button" aria-label="Users">${I(P.users, 19)}</button>
      <button class="ri" type="button" aria-label="Goals">${I(P.target, 19)}</button>
      <span class="rs"></span>
      <button class="ri" type="button" aria-label="Settings">${I(P.gear, 19)}</button>
      <span class="av">MR</span>
    </nav>
    <div class="main">
      <header class="hd">
        <div><p class="cap">Product analytics</p><h1>Activation funnel</h1></div>
        <div class="hr"><span class="range">${I(P.cal, 15)}Oct 1 - Oct 14</span><div class="seg" style="--n:3;--on:0" role="group" aria-label="Segment"><span class="hl"></span><button type="button" class="on">All users</button><button type="button">Web</button><button type="button">Mobile</button></div></div>
      </header>
      <main class="pg">
        <div class="stats">
          <div class="card st"><p class="k">Visit to upgrade</p><p class="v ov">2.7%</p><span class="dl">+0.4 pts</span></div>
          <div class="card st"><p class="k">Median time to activate</p><p class="v tt">1.8 days</p><span class="dl">-0.3 days</span></div>
          <div class="card st"><p class="k">Week 4 retention</p><p class="v w4">34%</p><span class="dl dn">-1 pt</span></div>
        </div>
        <div class="two">
          <section class="card fun"><div class="ch"><h2>Signup funnel</h2><span class="cap">Step conversion</span></div><div class="fl-list"></div></section>
          <section class="card ret"><div class="ch"><h2>Weekly retention</h2><span class="cap">Share of cohort active</span></div><div class="heat" role="grid" aria-label="Retention cohorts"></div><p class="rd"></p></section>
        </div>
      </main>
    </div>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .shell{display:grid;grid-template-columns:68px minmax(0,1fr);height:100%}
.d .rail{display:flex;flex-direction:column;align-items:center;gap:6px;padding:16px 0;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .rail .mark{margin-bottom:14px}
.d .ri{display:grid;place-items:center;width:42px;height:42px;border:0;border-radius:12px;background:none;color:var(--ml-muted);cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .ri:hover{background:var(--ml-surface);color:var(--ml-ink)}
.d .ri.on{background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .rs{flex:1}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .hd{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px;padding:24px 28px 0}
.d .hd h1{margin-top:6px}
.d .hr{display:flex;align-items:center;gap:12px}
.d .range{display:inline-flex;align-items:center;gap:7px;height:36px;padding:0 13px;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap}
.d .stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.d .st{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:16px 18px}
.d .two{display:grid;flex:1;grid-template-columns:minmax(0,1.12fr) minmax(0,1fr);gap:16px;min-height:300px}
.d .fun,.d .ret{display:flex;flex-direction:column;padding:18px 20px}
.d .ch{display:flex;align-items:center;justify-content:space-between;gap:10px}
.d .fl-list{display:flex;flex:1;flex-direction:column;justify-content:space-around;margin-top:8px}
.d .fr{display:grid;grid-template-columns:132px minmax(0,1fr) 54px;align-items:center;gap:14px}
.d .fl b{display:block;font-size:13px;font-weight:600}
.d .fl small{font-size:12px;color:var(--ml-muted)}
.d .ft{height:40px;border-radius:10px;background:var(--ml-bar-2);overflow:hidden}
.d .ft i{display:block;height:100%;border-radius:10px;background:var(--ml-accent);opacity:var(--o,1)}
.d .fc{font-size:13px;font-weight:650;text-align:right}
.d .heat{display:grid;grid-template-columns:62px repeat(6,minmax(0,1fr));flex:1;gap:5px;align-content:space-around;margin-top:14px}
.d .hh{font:600 11px/1 var(--ml-mono);text-align:center;color:var(--ml-muted)}
.d .hl2{display:flex;flex-direction:column;justify-content:center;font-size:12px;font-weight:600}
.d .hl2 small{font-size:11px;font-weight:500;color:var(--ml-muted)}
.d .hc{display:grid;place-items:center;height:34px;border:0;border-radius:8px;font:600 12.5px var(--ml-font);font-variant-numeric:tabular-nums;color:var(--ml-ink);cursor:default;transition:outline-color .2s ease}
.d .hc.nul{background:none;box-shadow:inset 0 0 0 1px var(--ml-line);opacity:.6}
.d .hc.w{color:#fff}
.d .hc.hot{outline:2px solid var(--ml-ink);outline-offset:1px;position:relative;z-index:2}
.d .hc:focus-visible{outline:2px solid var(--ml-accent);outline-offset:1px}
.d .rd{min-height:20px;margin-top:12px;font-size:12.5px;color:var(--ml-muted)}
.d .rd b{font-weight:650;color:var(--ml-ink)}
@container scr (max-width: 760px){
  .d .shell{grid-template-columns:minmax(0,1fr)}
  .d .rail{display:none}
  .d .hd{flex-direction:column;align-items:stretch;padding:18px 16px 0}
  .d .range{display:none}
  .d .pg{padding:16px}
  .d .stats{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .stats .st:last-child{display:none}
  .d .two{flex:none;grid-template-columns:minmax(0,1fr)}
  .d .fr{grid-template-columns:96px minmax(0,1fr) 46px;gap:10px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 700) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const setSeg = (seg, i) => { seg.style.setProperty('--on', i); [...seg.querySelectorAll('button')].forEach((b, k) => b.classList.toggle('on', k === i)); };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };

      const segs = [
        { steps: [48210, 12480, 7320, 3150, 1284], ttf: [1.8, ' days'], mult: 1, share: 1 },
        { steps: [31450, 9120, 5630, 2540, 1090], ttf: [1.4, ' days'], mult: 1.07, share: 0.65 },
        { steps: [16760, 3360, 1690, 610, 194], ttf: [2.9, ' days'], mult: 0.82, share: 0.35 },
      ];
      const labels = ['Visited site', 'Signed up', 'Activated', 'Invited a teammate', 'Upgraded'];
      const base = [100, 57, 44, 38, 34, 31];
      const cohorts = [['Sep 8', 1210], ['Sep 15', 1342], ['Sep 22', 1288], ['Sep 29', 1405], ['Oct 6', 1377], ['Oct 13', 612]];
      const val = (c, w, s) => (w === 0 ? 100 : Math.max(8, Math.min(99, Math.round(base[w] * s.mult + ((c * 7 + w * 3) % 5) - 2))));
      let cur_i = 0;
      const readout = (c, w) => {
        const s = segs[cur_i];
        $$('.hc').forEach((x) => x.classList.toggle('hot', +x.dataset.c === c && +x.dataset.w === w));
        const size = Math.round(cohorts[c][1] * s.share);
        $('.rd').innerHTML = `<b>${cohorts[c][0]} cohort, week ${w}:</b> ${val(c, w, s)}% of ${size.toLocaleString('en-US')} users still active`;
      };
      const render = (i, animate) => {
        cur_i = i;
        const s = segs[i];
        const st = s.steps;
        $('.fl-list').innerHTML = st
          .map((n, k) => `<div class="fr in" style="--i:${k + 1}"><div class="fl"><b>${labels[k]}</b><small class="num">${n.toLocaleString('en-US')}</small></div><div class="ft"><i class="gx" style="--s:${n / st[0]};--o:${(1 - k * 0.14).toFixed(2)};--i:${k}"></i></div><span class="fc num">${k ? ((n / st[k - 1]) * 100).toFixed(1) + '%' : 'Entry'}</span></div>`)
          .join('');
        let h = '<span></span>' + [0, 1, 2, 3, 4, 5].map((w) => `<span class="hh">W${w}</span>`).join('');
        cohorts.forEach(([name, size], c) => {
          h += `<div class="hl2">${name}<small class="num">${Math.round(size * s.share).toLocaleString('en-US')}</small></div>`;
          for (let w = 0; w <= 5; w++) {
            if (w > 5 - c) { h += '<span class="hc nul"></span>'; continue; }
            const v = val(c, w, s);
            h += `<button type="button" class="hc in${v > 52 ? ' w' : ''}" data-c="${c}" data-w="${w}" style="--i:${c + w};background:rgba(255,68,51,${(0.07 + (v / 100) * 0.9).toFixed(2)})">${v}%</button>`;
          }
        });
        $('.heat').innerHTML = h;
        const w4 = [0, 1].reduce((a, c) => a + val(c, 4, s), 0) / 2;
        roll($('.ov'), ((st[4] / st[0]) * 100).toFixed(1) + '%');
        roll($('.w4'), Math.round(w4) + '%');
        $('.tt').textContent = s.ttf[0] + s.ttf[1];
        if (animate) replay(app);
        readout(0, 4);
      };
      const seg = $('.seg');
      $$('.seg button').forEach((b, k) => b.addEventListener('click', () => { setSeg(seg, k); render(k, true); }));
      $('.heat').addEventListener('pointerover', (e) => { const c = e.target.closest('.hc[data-c]'); if (c) readout(+c.dataset.c, +c.dataset.w); });
      render(0, false);

      (async () => {
        await wait(1800);
        let q = 0;
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const k = [1, 2, 0][q % 3];
          await act($$('.seg button')[k], () => $$('.seg button')[k].click());
          await wait(1500);
          const cells = $$('.hc[data-c]');
          const cell = cells[[8, 4, 13][q % 3] % cells.length];
          await act(cell, () => readout(+cell.dataset.c, +cell.dataset.w));
          await wait(2400);
          q++;
        }
      })();
    },
    prompt: `Build a product analytics screen with a slim icon rail on the left (68px, white, 1px hairline) instead of a labelled sidebar: logo tile, 4 icon buttons (the active one on a soft accent tile), settings and the user avatar pinned at the bottom.

Main column: header row with a small uppercase label, a 26px title ("Activation funnel"), a static date-range pill and a 3-option segmented control (All users, Web, Mobile). Under it 3 stat cards (visit to upgrade rate, median time to activate, week 4 retention) with delta pills. Then a two-column grid (1.12fr / 1fr): a funnel card with 5 steps (Visited site, Signed up, Activated, Invited a teammate, Upgraded), each row = label + user count, a rounded track with a bar whose width is the count relative to the first step, and the step-to-step conversion percent on the right; and a retention heatmap card, a grid of 6 weekly cohorts by weeks 0 to 5 (a triangle: later cohorts have fewer weeks), each cell a rounded tile whose background is your accent color with alpha proportional to the percentage, white text above 52%, empty cells as dashed hairlines. A readout line under the grid describes the hovered cell (cohort, week, percent, cohort size).

Numbers must be coherent: conversion = last step / first step, week 4 retention = average of the cohorts that reached week 4.

Motion: the segmented control has one shared highlight sliding with a critically damped spring (587ms, transform only). Switching segment re-renders: funnel bars scaleX from 0 (800ms, cubic-bezier(.32,.72,0,1), 55ms stagger), heat cells fade and rise on a diagonal stagger (45ms per step), the stat numbers count to the new value. Hovering a cell outlines it and updates the readout.

Accessibility: cells are focusable buttons inside a grid role, rings on focus, prefers-reduced-motion disables the entrance animations. Phone layout under 760px: hide the rail and date pill, stack funnel and heatmap, two stats per row. Plain HTML, CSS and JS, no libraries; React-friendly structure (IconRail, SegmentSwitch, StatCard, Funnel, CohortHeatmap).`,
  });

  // 3. Web traffic - big header, no sidebar, live visitors hero, source filter
  ML.add({
    id: 'app-dashboards-traffic',
    cat: 'app-dashboards',
    title: 'Live web traffic',
    sub: 'Visitors tick in, sources filter pages',
    html: `
<div class="app">
  <header class="bh">
    <div><p class="cap">brightline-dental.com</p><h1>Web traffic</h1></div>
    <div class="bhr"><span class="live"><i></i>Live</span><button class="btn" type="button">${I(P.cal, 15)}Last 24 hours</button><button class="btn pri" type="button">${I(P.dl, 15)}Export</button></div>
  </header>
  <main class="pg">
    <div class="cols2">
      <div class="lc">
        <section class="card hero">
          <p class="cap">Visitors online now</p>
          <div class="hn"><p class="big num">312</p><span class="dl">${I(P.up, 12)}+14 in 10 min</span></div>
          <div class="mins" role="img" aria-label="New visitors per minute, last 30 minutes"></div>
          <p class="mx"><span>30 min ago</span><span>New visitors per minute</span><span>Now</span></p>
        </section>
        <section class="card srcs">
          <div class="ch"><h2>Sources</h2><span class="k">Click to filter pages</span></div>
          <div class="sl"></div>
        </section>
      </div>
      <section class="card pages">
        <div class="ch"><h2>Top pages</h2><span class="chip on flt">All sources</span></div>
        <div class="th"><span>Page</span><span>Avg. time</span><span>Active now</span><span></span></div>
        <ul class="pl"></ul>
      </section>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .bh{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px;padding:26px 28px 0}
.d .bh h1{margin-top:6px;font-size:32px}
.d .bhr{display:flex;align-items:center;gap:10px}
.d .live{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 13px;border-radius:999px;background:rgba(29,185,84,.1);font-size:12.5px;font-weight:600;color:#12893C}
.d .live i{position:relative;width:8px;height:8px;border-radius:50%;background:#1DB954}
.d .live i::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:dsh-ping 2s ease-out infinite}
.d .cols2{display:grid;flex:1;grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:16px;min-height:0}
.d .lc{display:flex;flex-direction:column;gap:16px;min-height:0}
.d .hero{padding:18px 20px}
.d .hn{display:flex;align-items:flex-end;gap:12px;margin-top:10px}
.d .big{font-size:68px;line-height:.9;font-weight:650;letter-spacing:-.05em}
.d .hn .dl{margin-bottom:8px}
.d .mins{display:flex;align-items:flex-end;gap:4px;height:84px;margin-top:18px}
.d .mins i{flex:1;height:100%;border-radius:4px 4px 2px 2px;background:var(--ml-accent-line);transform:scaleY(var(--s,.5));transform-origin:50% 100%;transition:transform .6s var(--ml-ease)}
.d .mins i:last-child{background:var(--ml-accent)}
.d .mx{display:flex;justify-content:space-between;margin-top:8px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .srcs{display:flex;flex:1;flex-direction:column;padding:18px 14px 12px;min-height:0}
.d .srcs .ch{padding:0 6px}
.d .ch{display:flex;align-items:center;justify-content:space-between;gap:10px}
.d .sl{display:flex;flex:1;flex-direction:column;justify-content:space-around;margin-top:8px}
.d .src{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:2px 12px;width:100%;padding:9px 10px 10px;border:0;border-radius:12px;background:none;text-align:left;cursor:pointer;transition:background-color .25s ease,transform 90ms ease-out}
.d .src:hover{background:var(--ml-surface)}
.d .src.on{background:var(--ml-accent-soft)}
.d .src.press{transform:scale(.98)}
.d .src b{font-size:13px;font-weight:600}
.d .src .num{font-size:13px;font-weight:650}
.d .src small{min-width:34px;font-size:12px;text-align:right;color:var(--ml-muted)}
.d .src .pt{grid-column:1/-1}
.d .pt{height:6px;margin-top:5px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .pt i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent)}
.d .pages{display:flex;flex-direction:column;padding:18px 20px;min-height:0}
.d .th,.d .pl li{display:grid;grid-template-columns:minmax(0,1.6fr) 70px 80px minmax(0,1fr);align-items:center;gap:14px}
.d .th span:nth-child(3){text-align:right}
.d .th{margin-top:14px;padding:0 0 9px;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .pl{display:flex;flex:1;flex-direction:column;justify-content:space-around;list-style:none}
.d .pl li{padding:7px 0;border-bottom:1px solid var(--ml-bar-2)}
.d .pl li:last-child{border-bottom:0}
.d .pl b{display:block;font-size:13.5px;font-weight:600}
.d .pl small{display:block;font-size:11.5px;color:var(--ml-muted)}
.d .pl .tm{font:500 12.5px var(--ml-mono);color:var(--ml-muted)}
.d .pl .an{font-size:15px;font-weight:650;text-align:right}
@container scr (max-width: 760px){
  .d .bh{padding:20px 16px 0}
  .d .bh h1{font-size:26px}
  .d .bhr .btn:not(.pri){display:none}
  .d .pg{padding:16px}
  .d .cols2{flex:none;grid-template-columns:minmax(0,1fr)}
  .d .big{font-size:56px}
  .d .th,.d .pl li{grid-template-columns:minmax(0,1.6fr) 60px minmax(0,1fr)}
  .d .th span:nth-child(2),.d .pl .tm{display:none}
  .d .pages{min-height:360px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 700) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };

      const srcs = ['Organic search', 'Direct', 'Referral', 'Social', 'Email'];
      const pages = [
        ['Pricing', '/pricing', '2:14', [22, 18, 9, 3, 4]],
        ['Home', '/', '0:48', [31, 40, 6, 5, 3]],
        ['Dental SEO checklist', '/blog/dental-seo', '3:36', [41, 2, 12, 9, 0]],
        ['Book a visit', '/book', '1:52', [14, 16, 8, 4, 6]],
        ['Implants', '/services/implants', '2:41', [12, 4, 8, 2, 0]],
        ['About the clinic', '/about', '1:05', [5, 3, 3, 6, 2]],
        ['Whitening guide', '/blog/whitening-guide', '3:02', [3, 1, 4, 5, 1]],
      ];
      const mins = [11, 13, 9, 12, 15, 14, 10, 12, 16, 13, 11, 14, 17, 15, 12, 10, 13, 15, 18, 16, 14, 12, 15, 17, 13, 14, 16, 19, 15, 17];
      let sel = -1;
      const sums = () => srcs.map((_, s) => pages.reduce((a, p) => a + p[3][s], 0));
      const pv = (p) => (sel < 0 ? pages[p][3].reduce((a, b) => a + b, 0) : pages[p][3][sel]);

      $('.mins').innerHTML = mins.map(() => '<i></i>').join('');
      const paintMins = () => { const mx = Math.max(...mins) * 1.1; $$('.mins i').forEach((b, k) => b.style.setProperty('--s', (mins[k] / mx).toFixed(3))); };
      $('.sl').innerHTML = srcs.map((n, s) => `<button type="button" class="src" data-s="${s}"><b>${n}</b><span class="num">0</span><small class="num">0%</small><div class="pt"><i class="gx"></i></div></button>`).join('');
      const paintSrc = () => {
        const sm = sums(), tot = sm.reduce((a, b) => a + b, 0), mx = Math.max(...sm);
        $$('.src').forEach((el, s) => {
          el.classList.toggle('on', s === sel); el.setAttribute('aria-pressed', s === sel);
          el.querySelector('.num').textContent = sm[s];
          el.querySelector('small').textContent = Math.round((sm[s] / tot) * 100) + '%';
          el.querySelector('i').style.setProperty('--s', (sm[s] / mx).toFixed(3));
        });
        roll($('.big'), String(tot));
      };
      const paintPages = (animate) => {
        const order = pages.map((_, p) => p).sort((a, b) => pv(b) - pv(a));
        const mx = Math.max(...order.map(pv), 1);
        $('.pl').innerHTML = order
          .map((p, k) => `<li class="in" data-p="${p}" style="--i:${k}"><div><b>${pages[p][0]}</b><small class="mono">${pages[p][1]}</small></div><span class="tm">${pages[p][2]}</span><span class="an num">${pv(p)}</span><div class="pt"><i class="gx" style="--s:${(pv(p) / mx).toFixed(3)};--i:${k}"></i></div></li>`)
          .join('');
        $('.flt').textContent = sel < 0 ? 'All sources' : srcs[sel];
        if (animate) replay(app);
      };
      const refreshPages = () => {
        const mx = Math.max(...pages.map((_, p) => pv(p)), 1);
        $$('.pl li').forEach((li) => {
          const p = +li.dataset.p;
          li.querySelector('.an').textContent = pv(p);
          li.querySelector('i').style.setProperty('--s', (pv(p) / mx).toFixed(3));
        });
      };
      paintMins(); paintSrc(); paintPages(false);
      $('.big').textContent = sums().reduce((a, b) => a + b, 0);
      $$('.src').forEach((el) => el.addEventListener('click', () => { const s = +el.dataset.s; sel = sel === s ? -1 : s; paintSrc(); paintPages(true); }));

      // live: a visitor lands every ~2.2s (a random page + source gains or loses a few people)
      (async () => {
        while (root.isConnected) {
          await wait(2200);
          const p = Math.floor(Math.random() * pages.length), s = Math.floor(Math.random() * srcs.length);
          const d = Math.random() < 0.7 ? 1 + Math.floor(Math.random() * 3) : -1;
          pages[p][3][s] = Math.max(0, pages[p][3][s] + d);
          mins.shift(); mins.push(11 + Math.floor(Math.random() * 9));
          paintMins(); paintSrc(); refreshPages();
        }
      })();
      (async () => {
        await wait(2000);
        let q = 0;
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const s = [0, 3, 4, 4][q % 4];
          const el = $$('.src')[s];
          await act(el, () => el.click());
          await wait(3000);
          q++;
        }
      })();
    },
    prompt: `Build a live web traffic page with no sidebar: a large page header and a split layout. Header: a small uppercase site name, a 32px "Web traffic" title, and on the right a green "Live" pill with a pinging dot, a date-range button and a primary Export button.

Body: a 5fr / 7fr grid. Left column: (1) a hero card "Visitors online now" with a 68px tabular-nums number, a green delta pill and a strip of 30 thin columns (new visitors per minute for the last 30 minutes, the newest column in your accent color, older ones in a light blue), labelled "30 min ago" and "Now"; (2) a "Sources" card with 5 clickable rows (Organic search, Direct, Referral, Social, Email) each showing count, share of total and a proportional bar. Right: a "Top pages" card, a table with page title plus mono path, average time, active-now count and a proportional bar, sorted by active visitors, with a filter chip that names the selected source.

Data must be coherent: the source counts add up to the online number and each page's active count is the sum across sources.

Behavior: clicking a source row highlights it (soft accent background) and filters the pages table to that source, clicking it again clears the filter; the table re-sorts and replays the entrance (opacity and translateY 8px, 45ms stagger, bars scaleX from 0). Live: every ~2s a visitor arrives or leaves, so the big number counts to the new total, the per-minute strip shifts one slot to the left (columns change scaleY with a 600ms ease-out transition, never height) and the counts update in place without re-sorting.

Accessibility: source rows are buttons with aria-pressed, the strip has role=img and an aria-label, focus rings, prefers-reduced-motion removes the ping and entrance animations. Phone layout under 760px: single column, hide the average-time column. Plain HTML, CSS and JS, no libraries; React-friendly structure (PageHeader, LiveVisitors, SourceList, TopPagesTable).`,
  });

  // 4. Marketing campaigns - left filter panel, spend bars + conversions line combo chart
  ML.add({
    id: 'app-dashboards-campaigns',
    cat: 'app-dashboards',
    title: 'Campaign performance',
    sub: 'Channel filter redraws the combo chart',
    html: `
<div class="app">
  <div class="split">
    <aside class="fp">
      <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Halden</b></div>
      <p class="cap fh">Channels</p>
      <nav class="cn" aria-label="Channels">
        <span class="pill" aria-hidden="true"></span>
        <button type="button" class="cl on" data-s="-1">${I(P.layers, 17)}<span><b>All channels</b><small class="num">$58,980</small></span></button>
        <button type="button" class="cl" data-s="0">${I(P.search, 17)}<span><b>Search</b><small class="num">$29,800</small></span></button>
        <button type="button" class="cl" data-s="1">${I(P.users, 17)}<span><b>Social</b><small class="num">$23,600</small></span></button>
        <button type="button" class="cl" data-s="2">${I(P.msg, 17)}<span><b>Email</b><small class="num">$5,580</small></span></button>
      </nav>
      <div class="bud"><p><span>Q4 budget used</span><b>72%</b></p><i><s></s></i><small>$58,980 of $82,000</small></div>
    </aside>
    <div class="main">
      <header class="hd"><div><p class="cap">Marketing</p><h1>Campaign performance</h1></div><div class="hr"><span class="range">${I(P.cal, 15)}Aug 24 - Oct 18</span><button class="btn pri" type="button">${I(P.dl, 15)}Export</button></div></header>
      <main class="pg">
        <div class="card kstrip">
          <div><p class="k">Spend</p><p class="v ks">$58,980</p></div>
          <div><p class="k">Conversions</p><p class="v kc2">2,396</p></div>
          <div><p class="k">Cost per conversion</p><p class="v kp2">$24.62</p></div>
          <div><p class="k">Return on ad spend</p><p class="v kr">3.3x</p></div>
        </div>
        <section class="card chart">
          <div class="ch"><h2>Spend vs conversions</h2><p class="lg"><span><i style="background:var(--ml-accent-line)"></i>Spend (left)</span><span><i style="background:var(--ml-accent);border-radius:50%"></i>Conversions (right)</span></p></div>
          <div class="plot">
            <div class="grid"></div>
            <div class="cols"></div>
            <svg class="ln" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path class="lp wipe"/></svg>
            <div class="dots"></div>
            <div class="tip" role="status"></div>
          </div>
          <div class="xs"></div>
        </section>
        <section class="card tbl">
          <div class="th"><span>Campaign</span><span>Spend</span><span>Conv.</span><span>Cost / conv.</span><span>ROAS</span></div>
          <ul class="tr"></ul>
          <p class="tf"></p>
        </section>
      </main>
    </div>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .split{display:grid;grid-template-columns:224px minmax(0,1fr);height:100%}
.d .fp{display:flex;flex-direction:column;min-height:0;padding:20px 14px 16px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .fp .brand{padding:0 6px 22px}
.d .fh{padding:0 8px 8px}
.d .cn{position:relative;display:flex;flex-direction:column;gap:4px}
.d .pill{position:absolute;top:0;left:0;right:0;height:52px;border-radius:12px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .cl{position:relative;z-index:1;display:flex;align-items:center;gap:11px;height:52px;padding:0 12px;border:0;border-radius:12px;background:none;text-align:left;color:var(--ml-muted);cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .cl span{display:flex;flex-direction:column;min-width:0}
.d .cl b{font-size:13.5px;font-weight:600;color:var(--ml-ink-2)}
.d .cl small{font-size:12px;color:var(--ml-muted)}
.d .cl.on{color:var(--ml-accent)}
.d .cl.on b{color:var(--ml-accent-ink)}
.d .cl.press{transform:scale(.97)}
.d .cl:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .bud{margin-top:auto;padding:13px;border-radius:12px;background:var(--ml-surface)}
.d .bud p{display:flex;justify-content:space-between;font-size:12px;color:var(--ml-muted)}
.d .bud b{font-weight:600;color:var(--ml-ink)}
.d .bud i{display:block;height:6px;margin-top:9px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .bud s{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.72);transform-origin:0 50%}
.d .bud small{display:block;margin-top:7px;font-size:11.5px;color:var(--ml-muted)}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .hd{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px;padding:24px 28px 0}
.d .hd h1{margin-top:6px}
.d .hr{display:flex;align-items:center;gap:10px}
.d .range{display:inline-flex;align-items:center;gap:7px;height:34px;padding:0 13px;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap}
.d .kstrip{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));padding:16px 0}
.d .kstrip > div{display:flex;flex-direction:column;gap:9px;padding:0 20px;border-left:1px solid var(--ml-line)}
.d .kstrip > div:first-child{border-left:0}
.d .chart{display:flex;flex:1;flex-direction:column;min-height:270px;padding:16px 20px 14px}
.d .ch{display:flex;align-items:center;justify-content:flex-start;gap:28px}
.d .plot{position:relative;flex:1;min-height:150px;margin:14px 40px 0 46px}
.d .grid{position:absolute;inset:0}
.d .gl{position:absolute;left:0;right:0;border-top:1px solid var(--ml-line)}
.d .gl s,.d .gl u{position:absolute;top:0;transform:translateY(-50%);text-decoration:none;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .gl s{left:-46px;width:38px;text-align:right}
.d .gl u{right:-40px;width:34px;color:var(--ml-accent-ink)}
.d .cols{position:absolute;inset:0;display:flex}
.d .cw{display:flex;flex:1;align-items:flex-end;justify-content:center;height:100%;outline:0}
.d .col{width:min(62%,46px);border-radius:7px 7px 3px 3px;background:var(--ml-accent-line);transition:opacity .25s ease,background-color .25s ease}
.d .cols.dim .col:not(.hot){opacity:.5}
.d .cols .col.hot{background:var(--ml-accent-2)}
.d .ln{position:absolute;inset:0;width:100%;height:100%;overflow:visible;pointer-events:none}
.d .lp{fill:none;stroke:var(--ml-accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.d .dots{position:absolute;inset:0;pointer-events:none}
.d .dots i{position:absolute;width:9px;height:9px;margin:0 0 -4.5px -4.5px;border-radius:50%;background:var(--ml-bg);box-shadow:0 0 0 2.5px var(--ml-accent)}
.d .xs{display:flex;margin:8px 40px 0 46px}
.d .xs span{flex:1;text-align:center;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .tbl{padding:6px 20px 12px}
.d .th,.d .tr li{display:grid;grid-template-columns:minmax(0,1.8fr) minmax(0,.8fr) minmax(0,.6fr) minmax(0,.8fr) minmax(0,1.1fr);align-items:center;gap:12px}
.d .th{padding:10px 0;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .tr{list-style:none}
.d .tr li{height:40px;border-bottom:1px solid var(--ml-bar-2);font-size:13px;font-variant-numeric:tabular-nums}
.d .tr li:last-child{border-bottom:0}
.d .tr b{font-weight:600}
.d .tr small{margin-left:8px;padding:2px 7px;border-radius:999px;background:var(--ml-surface);font-size:11px;font-weight:600;color:var(--ml-muted)}
.d .ro{display:flex;align-items:center;gap:9px;font-weight:650}
.d .ro i{flex:1;height:6px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .ro s{display:block;height:100%;border-radius:inherit;background:var(--ml-accent)}
.d .tf{padding-top:8px;font-size:12px;color:var(--ml-muted)}
@container scr (max-width: 760px){
  .d .split{grid-template-columns:minmax(0,1fr)}
  .d .fp,.d .range,.d .lg{display:none}
  .d .hd{padding:18px 16px 0}
  .d .pg{padding:16px}
  .d .kstrip{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:16px}
  .d .kstrip > div:nth-child(3){border-left:0}
  .d .plot{margin-right:36px;margin-left:40px}
  .d .chart{flex:none}
  .d .th,.d .tr li{grid-template-columns:minmax(0,1.6fr) minmax(0,.8fr) minmax(0,.8fr)}
  .d .th span:nth-child(3),.d .th span:nth-child(5),.d .tr li > :nth-child(3),.d .tr li > :nth-child(5){display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 700) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(2)},${p[0][1].toFixed(2)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(2)},${(b[1] + (c[1] - a[1]) / 6).toFixed(2)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(2)},${(c[1] - (e[1] - b[1]) / 6).toFixed(2)} ${c[0].toFixed(2)},${c[1].toFixed(2)}`;
        }
        return d;
      };

      const W = ['Aug 24', 'Aug 31', 'Sep 7', 'Sep 14', 'Sep 21', 'Sep 28', 'Oct 5', 'Oct 12'];
      const CH = [
        { n: 'Search', sp: [3200, 3400, 3300, 3600, 3900, 4100, 4000, 4300], cv: [118, 126, 121, 139, 152, 160, 158, 171], rev: 92 },
        { n: 'Social', sp: [2400, 2600, 2900, 2800, 3100, 3000, 3300, 3500], cv: [64, 71, 83, 79, 92, 88, 101, 108], rev: 78 },
        { n: 'Email', sp: [600, 640, 620, 700, 720, 760, 740, 800], cv: [58, 63, 60, 69, 74, 79, 77, 85], rev: 64 },
      ];
      const sum = (a) => a.reduce((x, y) => x + y, 0);
      const camps = [['Brand terms', 0, 0.38], ['Implants - local', 0, 0.34], ['Whitening offer', 0, 0.28], ['Smile makeover reel', 1, 0.45], ['Retargeting - visitors', 1, 0.33], ['New patient lookalike', 1, 0.22], ['Recall reminders', 2, 0.6], ['Q4 checkup push', 2, 0.4]];
      // campaign figures add up to their channel totals (the last campaign of a channel takes the remainder)
      const left = CH.map((c) => [sum(c.sp), sum(c.cv)]);
      const rows = camps.map(([name, ch, sh], k) => {
        const last = camps.findIndex((c, j) => j > k && c[1] === ch) < 0;
        const sp = last ? left[ch][0] : Math.round(sum(CH[ch].sp) * sh);
        const cv = last ? left[ch][1] : Math.round(sum(CH[ch].cv) * sh);
        left[ch][0] -= sp; left[ch][1] -= cv;
        return { name, ch, sp, cv };
      });
      const nice = (v, list) => list.find((x) => x >= v * 1.05) || list[list.length - 1];
      const fk = (v) => (v >= 1000 ? '$' + v / 1000 + 'k' : '$' + v);
      const money = (v, d = 0) => '$' + v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
      const cols = $('.cols'), tip = $('.tip'), plot = $('.plot'), pill = $('.pill');
      const btns = $$('.cl');
      let sel = -1, sp = [], cv = [], sMax = 1, cMax = 1;

      const hide = () => { cols.classList.remove('dim'); $$('.col').forEach((x) => x.classList.remove('hot')); tip.classList.remove('on'); };
      const show = (i) => {
        const w = cols.children[i];
        if (!w) return;
        const c = w.firstElementChild;
        cols.classList.add('dim');
        $$('.col').forEach((x) => x.classList.toggle('hot', x === c));
        tip.innerHTML = `<b>Week of ${W[i]}</b><span>Spend<em>${money(sp[i])}</em></span><span>Conversions<em>${cv[i]}</em></span><span>Cost / conv.<em>${money(sp[i] / cv[i], 2)}</em></span>`;
        const x = Math.min(Math.max(w.offsetLeft + w.offsetWidth / 2 - 80, 0), plot.offsetWidth - 160);
        const y = Math.min(Math.max(c.offsetHeight, (cv[i] / cMax) * plot.offsetHeight) + 16, plot.offsetHeight + 24 - tip.offsetHeight);
        tip.style.transform = `translate(${x}px,${-y}px)`;
        tip.classList.add('on');
      };
      const render = (animate) => {
        sp = sel < 0 ? W.map((_, i) => sum(CH.map((c) => c.sp[i]))) : CH[sel].sp;
        cv = sel < 0 ? W.map((_, i) => sum(CH.map((c) => c.cv[i]))) : CH[sel].cv;
        sMax = nice(Math.max(...sp), [1000, 2000, 4000, 6000, 8000, 10000, 12000]);
        cMax = nice(Math.max(...cv), [40, 80, 120, 160, 200, 240, 320, 400]);
        $('.grid').innerHTML = [0, 1, 2, 3, 4].map((t) => `<div class="gl" style="bottom:${t * 25}%"><s>${fk((sMax / 4) * t)}</s><u>${(cMax / 4) * t}</u></div>`).join('');
        cols.innerHTML = sp.map((v, i) => `<div class="cw" tabindex="0" data-i="${i}" aria-label="Week of ${W[i]}: spend ${money(v)}, ${cv[i]} conversions"><div class="col gb" style="--i:${i};height:${(v / sMax) * 100}%"></div></div>`).join('');
        const pts = cv.map((v, i) => [((i + 0.5) / 8) * 100, 100 - (v / cMax) * 100]);
        $('.lp').setAttribute('d', curve(pts));
        $('.dots').innerHTML = pts.map(([x, y], i) => `<i class="fade" style="left:${x}%;bottom:${100 - y}%;animation-delay:${600 + i * 60}ms"></i>`).join('');
        $('.xs').innerHTML = W.map((w) => `<span>${w.replace(' ', ' ')}</span>`).join('');
        const tsp = sum(sp), tcv = sum(cv);
        const rev = sel < 0 ? sum(CH.map((c) => sum(c.cv) * c.rev)) : sum(CH[sel].cv) * CH[sel].rev;
        roll($('.ks'), money(tsp)); roll($('.kc2'), tcv.toLocaleString('en-US'));
        roll($('.kp2'), money(tsp / tcv, 2)); roll($('.kr'), (rev / tsp).toFixed(1) + 'x');
        const list = rows.filter((r) => sel < 0 || r.ch === sel).sort((a, b) => b.sp - a.sp);
        $('.tr').innerHTML = list.slice(0, 5)
          .map((r, k) => { const roas = (r.cv * CH[r.ch].rev) / r.sp; return `<li class="in" style="--i:${k + 2}"><span><b>${r.name}</b><small>${CH[r.ch].n}</small></span><span>${money(r.sp)}</span><span>${r.cv.toLocaleString('en-US')}</span><span>${money(r.sp / r.cv, 2)}</span><span class="ro">${roas.toFixed(1)}x<i><s class="gx" style="--s:${Math.min(1, roas / 6).toFixed(2)};--i:${k}"></s></i></span></li>`; })
          .join('');
        $('.tf').textContent = `Showing ${Math.min(5, list.length)} of ${list.length} campaigns, sorted by spend`;
        if (animate) replay(app);
        hide();
      };
      const pick = (s) => {
        sel = s;
        btns.forEach((b) => { const on = +b.dataset.s === s; b.classList.toggle('on', on); if (on) pill.style.transform = `translateY(${b.offsetTop}px)`; });
        render(true);
      };
      btns.forEach((b) => b.addEventListener('click', () => pick(+b.dataset.s)));
      cols.addEventListener('pointerover', (e) => { const w = e.target.closest('.cw'); if (w) show(+w.dataset.i); });
      cols.addEventListener('focusin', (e) => { const w = e.target.closest('.cw'); if (w) show(+w.dataset.i); });
      plot.addEventListener('pointerleave', hide);
      render(false);
      pill.style.transform = `translateY(${btns[0].offsetTop}px)`;
      show(7);

      (async () => {
        await wait(1800);
        let q = 0;
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const b = btns[[2, 3, 1, 0][q % 4]];
          await act(b, () => b.click());
          await wait(1700);
          const w = cols.children[[5, 7, 3, 6][q % 4]];
          await act(w, () => show(+w.dataset.i), 0.5, 0.2);
          await wait(2300);
          q++;
        }
      })();
    },
    prompt: `Build a marketing campaign performance screen with a left filter panel instead of a main navigation: a 224px white panel (1px right hairline) holding the logo, an uppercase "Channels" label, four channel rows (All channels, Search, Social, Email; each with a line icon, name and total spend) and a budget meter at the bottom ("Q4 budget used 72%"). The active channel sits on ONE shared highlight pill that moves with transform: translateY and a critically damped spring (587ms).

Main area: header (uppercase "Marketing", 26px title, a date-range pill, a primary Export button), then a single card with 4 metrics separated by hairlines (Spend, Conversions, Cost per conversion, Return on ad spend), then a combo chart card: spend as light-blue columns on a left axis ($ with k suffix), conversions as a smooth line with ringed dots on a right axis, 8 weekly buckets with date labels, axes rounded to nice values and a legend that names which axis is which. Below it a table card of the top 5 campaigns for the selected channel: name with a channel tag, spend, conversions, cost per conversion and a ROAS value with a tiny proportional bar. Campaign rows must add up to their channel totals and the metrics must be derived from the data (cost per conversion = spend / conversions).

Interaction: selecting a channel recomputes everything: columns grow with scaleY from the baseline (800ms, cubic-bezier(.32,.72,0,1), 35ms stagger), the line is revealed left to right with a clip-path inset animation (1.1s), dots fade in, metric numbers count to their new values and table rows enter with opacity and translateY(8px). Hovering or focusing a week dims other columns and shows a tooltip (week, spend, conversions, cost per conversion).

Accessibility: channel rows are buttons, weeks are focusable with aria-labels, focus rings, prefers-reduced-motion disables the animations. Phone layout under 760px: hide the filter panel, metrics two per row, table drops to 3 columns. Plain HTML, CSS and JS, no libraries; React-friendly structure (ChannelFilter, MetricStrip, ComboChart, CampaignTable).`,
  });

  // 5. Sales performance - hero gauge panel + leaderboard that re-ranks when a deal lands
  ML.add({
    id: 'app-dashboards-sales',
    cat: 'app-dashboards',
    title: 'Sales performance',
    sub: 'A closed deal re-ranks the leaderboard',
    html: `
<div class="app">
  <div class="two">
    <aside class="card lp">
      <div class="lh"><div><p class="cap">Sales performance</p><h1 class="per">October</h1></div><div class="seg" style="--n:2;--on:0" role="group" aria-label="Period"><span class="hl"></span><button type="button" class="on">Month</button><button type="button">Quarter</button></div></div>
      <div class="gw">
        <svg viewBox="0 0 220 124" aria-hidden="true"><path class="gt" d="M20 112 A90 90 0 0 1 200 112" pathLength="100"/><path class="ga" d="M20 112 A90 90 0 0 1 200 112" pathLength="100"/></svg>
        <div class="gc"><p class="gp num">90%</p><p class="k gk">of $600,000 team quota</p></div>
      </div>
      <dl class="st">
        <div><dt>Closed won</dt><dd class="s1 num">$540,700</dd></div>
        <div><dt>Gap to quota</dt><dd class="s2 num">$59,300</dd></div>
        <div><dt>Open pipeline</dt><dd class="s3 num">$1.28M</dd></div>
        <div><dt>Days left</dt><dd class="s4 num">17</dd></div>
      </dl>
    </aside>
    <section class="card rp">
      <div class="rh"><h2>Leaderboard</h2><p class="lg"><span><i></i>Closed won</span><span><i class="q"></i>Quota</span></p></div>
      <ul class="lb"></ul>
      <div class="rd"><p class="cap">Recent deals</p><ul class="rl"></ul></div>
      <div class="toast" role="status"><span class="ti">${I(P.check, 15, 2.6)}</span><p><b></b><small></small></p></div>
    </section>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .two{display:grid;grid-template-columns:minmax(0,5fr) minmax(0,8fr);gap:16px;height:100%;min-height:0;padding:24px 28px}
.d .lp{display:flex;flex-direction:column;min-height:0;padding:22px 22px 18px;border-radius:22px}
.d .lh{display:flex;flex-direction:column;align-items:flex-start;gap:14px}
.d .lh h1{margin-top:6px;font-size:30px}
.d .lh .seg{width:100%}
.d .gw{position:relative;width:100%;max-width:400px;aspect-ratio:220 / 124;margin:auto}
.d .gw svg{position:absolute;inset:0;display:block;width:100%;height:100%;overflow:visible}
.d .gt,.d .ga{fill:none;stroke-width:16;stroke-linecap:round}
.d .gt{stroke:var(--ml-bar-2)}
.d .ga{stroke:var(--ml-accent);stroke-dasharray:100;stroke-dashoffset:var(--o,10);transition:stroke-dashoffset 1s var(--ml-ease)}
.d .gc{position:absolute;left:0;right:0;bottom:0;text-align:center}
.d .gp{font-size:46px;line-height:1;font-weight:650;letter-spacing:-.04em}
.d .gk{margin-top:6px}
.d .st{display:grid;grid-template-columns:1fr 1fr;gap:0;margin:0}
.d .st div{padding:12px 0;border-top:1px solid var(--ml-line)}
.d .st div:nth-child(even){padding-left:16px;border-left:1px solid var(--ml-line)}
.d .st dt{font-size:12px;color:var(--ml-muted)}
.d .st dd{margin:4px 0 0;font-size:19px;font-weight:650;letter-spacing:-.02em}
.d .rp{position:relative;display:flex;flex-direction:column;min-height:0;padding:20px 22px;overflow:hidden}
.d .rh{display:flex;align-items:center;justify-content:space-between}
.d .lg i.q{width:2px;height:12px;border-radius:2px;background:var(--ml-ink)}
.d .lb{position:relative;flex:none;height:calc(7 * 62px);margin-top:12px;list-style:none}
.d .lb li{position:absolute;top:0;left:0;right:0;height:62px;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .rw{display:grid;grid-template-columns:26px 36px minmax(0,1.05fr) minmax(0,2fr) 128px;grid-template-areas:"rk av nm tk am";align-items:center;gap:0 14px;height:100%;border-bottom:1px solid var(--ml-bar-2)}
.d .rk{grid-area:rk;font:600 13px var(--ml-mono);color:var(--ml-muted)}
.d .rw .av{grid-area:av;width:36px;height:36px}
.d .nm{grid-area:nm;display:flex;flex-direction:column;min-width:0}
.d .nm b{font-size:13.5px;font-weight:600}
.d .nm small{font-size:12px;color:var(--ml-muted)}
.d .tk{grid-area:tk;position:relative;height:10px;border-radius:99px;background:var(--ml-bar-2)}
.d .tk i{position:absolute;inset:0;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--s,0));transform-origin:0 50%;transition:transform 1s var(--ml-ease)}
.d .tk i.ok{background:var(--ml-accent-ink)}
.d .tk::after{content:"";position:absolute;left:80%;top:-5px;bottom:-5px;width:2px;border-radius:2px;background:var(--ml-ink)}
.d .am{grid-area:am;display:flex;flex-direction:column;align-items:flex-end}
.d .am b{font-size:14px;font-weight:650}
.d .am small{font-size:12px;color:var(--ml-muted)}
.d .am small.ok{font-weight:600;color:#12893C}
.d .rd{margin-top:auto;padding-top:14px}
.d .rl{margin-top:6px;list-style:none}
.d .rl li{display:grid;grid-template-columns:minmax(0,1fr) auto 88px;align-items:center;gap:12px;padding:9px 0;border-bottom:1px solid var(--ml-bar-2);font-size:13px;color:var(--ml-ink-2)}
.d .rl li:last-child{border-bottom:0}
.d .rl li.fresh{animation:dsh-in 560ms var(--ml-spring) both}
.d .rl i{font-style:normal;font-weight:600;color:var(--ml-ink)}
.d .rl time{text-align:right;font:500 11.5px var(--ml-mono);color:var(--ml-muted)}
.d .toast{position:absolute;top:14px;right:18px;z-index:6;display:flex;align-items:center;gap:11px;padding:10px 16px 10px 11px;border-radius:14px;background:var(--ml-ink);color:#fff;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translateY(-14px);pointer-events:none;transition:transform .5s var(--ml-spring),opacity .25s ease}
.d .toast.on{opacity:1;transform:none}
.d .toast .ti{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#1DB954}
.d .toast p{display:flex;flex-direction:column}
.d .toast b{font-size:13px;font-weight:600}
.d .toast small{font-size:12px;color:rgba(255,255,255,.7)}
@container scr (max-width: 760px){
  .d .two{display:block;height:100%;padding:16px;overflow-y:auto}
  .d .lp{margin-bottom:16px}
  .d .rp{overflow:visible}
  .d .lp{display:block}
  .d .gw{margin:22px auto}
  .d .st{margin-top:6px}
  .d .rw{grid-template-columns:28px minmax(0,1fr) 96px;grid-template-areas:"rk nm am" "rk tk am";gap:2px 12px}
  .d .rw .av,.d .nm small,.d .lg{display:none}
  .d .toast{right:12px;left:12px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 800) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const setSeg = (seg, i) => { seg.style.setProperty('--on', i); [...seg.querySelectorAll('button')].forEach((b, k) => b.classList.toggle('on', k === i)); };

      // [name, team, [month quota, month closed], [quarter quota, quarter closed]]
      const reps = [
        ['Aiko Tan', 'Enterprise', [100000, 118400], [300000, 322600]],
        ['Daniel Okafor', 'Mid-market', [90000, 96200], [270000, 261400]],
        ['Maya Reyes', 'Enterprise', [100000, 91000], [300000, 283000]],
        ['Hana Kim', 'SMB', [70000, 58100], [210000, 182200]],
        ['Rafael Santos', 'Mid-market', [80000, 66000], [240000, 199500]],
        ['Priya Nair', 'SMB', [90000, 70000], [270000, 232000]],
        ['Luis Ortega', 'SMB', [70000, 41000], [210000, 171300]],
      ];
      const deals = [['Priya Nair', 'Fernway', 18400], ['Luis Ortega', 'Corvid Coffee', 22000], ['Hana Kim', 'Tidewater Realty', 9600]];
      const info = [['October', 'of $600,000 team quota', '17', 1280000], ['Q4 to date', 'of $1.8M team quota', '78', 3640000]];
      const $m = (v) => '$' + Math.round(v).toLocaleString('en-US');
      let view = 0, bonus = {};
      const base = [['Aiko Tan', 'Northgate', 24000, 'Today, 9:12'], ['Daniel Okafor', 'Meridian Foods', 12800, 'Yesterday'], ['Maya Reyes', 'Solace Studio', 9400, 'Oct 13']];
      let recent = base.slice();
      const paintRecent = (fresh) => { $('.rl').innerHTML = recent.map((r, k) => `<li class="${fresh && k === 0 ? 'fresh' : ''}"><span><b>${r[0]}</b> closed <i>${r[1]}</i></span><b class="num">${$m(r[2])}</b><time>${r[3]}</time></li>`).join(''); };
      const lb = $('.lb'), seg = $('.seg');
      const initials = (n) => n.split(' ').map((w) => w[0]).join('');
      lb.innerHTML = reps
        .map((r) => `<li data-n="${r[0]}"><div class="rw in"><span class="rk"></span><span class="av">${initials(r[0])}</span><div class="nm"><b>${r[0]}</b><small>${r[1]}</small></div><div class="tk"><i></i></div><div class="am"><b></b><small></small></div></div></li>`)
        .join('');
      const lis = $$('.lb li');
      const upd = () => {
        const d = reps.map((r) => ({ q: r[2 + view][0], c: r[2 + view][1] + (bonus[r[0]] || 0) }));
        const ord = d.map((_, i) => i).sort((a, b) => d[b].c / d[b].q - d[a].c / d[a].q);
        ord.forEach((i, rank) => {
          const li = lis[i], x = d[i], pct = (x.c / x.q) * 100;
          li.style.transform = `translateY(${rank * 62}px)`;
          li.querySelector('.rk').textContent = rank + 1;
          const bar = li.querySelector('.tk i');
          bar.style.setProperty('--s', Math.min(1, x.c / (x.q * 1.25)).toFixed(3));
          bar.classList.toggle('ok', pct >= 100);
          roll(li.querySelector('.am b'), $m(x.c));
          const sm = li.querySelector('.am small');
          sm.textContent = `${Math.round(pct)}% of $${Math.round(x.q / 1000)}k`;
          sm.classList.toggle('ok', pct >= 100);
        });
        const tq = d.reduce((a, x) => a + x.q, 0), tc = d.reduce((a, x) => a + x.c, 0), p = (tc / tq) * 100;
        $('.ga').style.setProperty('--o', (100 - Math.min(100, p)).toFixed(1));
        roll($('.gp'), Math.round(p) + '%');
        roll($('.s1'), $m(tc));
        roll($('.s2'), $m(Math.max(0, tq - tc)));
      };
      const setView = (v) => {
        view = v; bonus = {}; recent = base.slice(); paintRecent(false);
        setSeg(seg, v);
        $('.per').textContent = info[v][0];
        $('.gk').textContent = info[v][1];
        $('.s3').textContent = info[v][3] >= 1e6 ? '$' + (info[v][3] / 1e6).toFixed(2).replace(/0$/, '') + 'M' : $m(info[v][3]);
        $('.s4').textContent = info[v][2];
        upd();
      };
      const toast = $('.toast');
      let dn = 0;
      const land = () => {
        const [who, co, amt] = deals[dn++ % deals.length];
        bonus[who] = (bonus[who] || 0) + amt;
        recent.unshift([who, co, amt, 'Just now']); recent.length = 3; paintRecent(true);
        toast.querySelector('b').textContent = `${who} closed a deal`;
        toast.querySelector('small').textContent = `${co} - ${$m(amt)}`;
        toast.classList.add('on');
        upd();
        setTimeout(() => toast.classList.remove('on'), 2800);
      };
      $$('.seg button').forEach((b, k) => b.addEventListener('click', () => setView(k)));
      setView(0);

      (async () => {
        await wait(2200);
        while (root.isConnected) {
          if (root.dataset.paused) { await wait(400); continue; }
          land();
          await wait(3800);
          if (idle()) await act($$('.seg button')[1], () => setView(1));
          await wait(2400);
          land();
          await wait(3200);
          if (idle()) await act($$('.seg button')[0], () => setView(0));
          await wait(2600);
        }
      })();
    },
    prompt: `Build a sales performance dashboard as a two-panel split (5fr / 8fr, 16px gap, 28px page padding), no top bar and no sidebar.

Left panel (a large rounded card, radius 22px): an uppercase label, a 30px period title ("October") and a full-width 2-option segmented control (Month, Quarter). Under it a half-circle gauge made from two SVG arcs with pathLength="100" (a light track and an accent arc with stroke-dasharray 100 and stroke-dashoffset = 100 - attainment), round caps, with the attainment percent (46px, tabular-nums) and "of $600,000 team quota" centred at its base. Below, a 2x2 grid of facts separated by hairlines: closed won, gap to quota, open pipeline, days left.

Right panel (card): "Leaderboard" with a small legend, then 7 rows of 62px, each = rank number, avatar initials, name and team, a track with a bar showing closed won as a share of 125% of the rep's quota and a thin dark marker at the 100% position (the bar turns a darker blue once quota is passed), and on the right the closed amount with "118% of $100k". Rows are sorted by attainment. Totals in the gauge panel are derived from the rows.

Behavior: rows are absolutely positioned and re-ranked with transform: translateY(rank * 62px) and a critically damped spring (587ms), so a deal landing moves a row up past the others smoothly. A toast slides in from the top of the card ("Priya Nair closed a deal - Fernway, $18,400") for ~3s while the rep's bar grows (transform scaleX, 1s ease-out), amounts count up, the gauge arc animates its dashoffset and the team percent counts up. Switching Month/Quarter swaps all data; the segmented highlight slides with transform.

Accessibility: segmented buttons are real buttons, toast has role=status, rank is also stated in text, prefers-reduced-motion removes transitions. Phone layout under 760px: stack the panels, each row becomes two lines (name above the bar), hide avatars. Plain HTML, CSS and JS, no libraries; React-friendly structure (QuotaGauge, PeriodSwitch, Leaderboard, RepRow, DealToast).`,
  });

  // 6. Finance overview - no sidebar, balance hero + cash flow bars, expenses donut, bills strip
  ML.add({
    id: 'app-dashboards-finance',
    cat: 'app-dashboards',
    title: 'Finance overview',
    sub: 'Donut focus, then a bill gets paid',
    html: `
<div class="app">
  <main class="pg">
    <header class="fh">
      <div><p class="cap">Kestrel &amp; Co</p><h1>Finance overview</h1></div>
      <div class="fr"><span class="chip on">${I(P.wallet, 15)}All accounts</span><button class="btn pri" type="button">${I(P.plus, 15)}Add transaction</button></div>
    </header>
    <div class="top">
      <section class="card cash in" style="--i:0">
        <div class="ch"><div><p class="cap">Total balance</p><p class="bal num">$284,930</p></div><div class="cr"><span class="dl">${I(P.up, 12)}+6.9% this month</span><p class="lg"><span><i></i>Money in</span><span><i style="background:var(--ml-accent-line)"></i>Money out</span></p></div></div>
        <div class="plot">
          <div class="gl" style="bottom:0"><s>$0</s></div><div class="gl" style="bottom:25%"><s>$20k</s></div><div class="gl" style="bottom:50%"><s>$40k</s></div><div class="gl" style="bottom:75%"><s>$60k</s></div><div class="gl" style="bottom:100%"><s>$80k</s></div>
          <div class="cols"></div>
        </div>
        <div class="xs"></div>
      </section>
      <section class="card exp in" style="--i:1">
        <div class="ch"><h2>Expenses by category</h2><span class="k">October</span></div>
        <div class="eb">
          <div class="dn">
            <svg viewBox="0 0 120 120" aria-hidden="true"></svg>
            <div class="dc"><p class="dk">Total spent</p><p class="dv num">$56,100</p><p class="dp"></p></div>
          </div>
          <ul class="ey"></ul>
        </div>
        <div class="ef"><div><p class="k">vs September</p><b class="num">+$3,300</b><span class="dl wn">+6.3%</span></div><div><p class="k">Largest category</p><b>Payroll</b><span class="dl wn">50.6% of spend</span></div></div>
      </section>
    </div>
    <section class="card bills in" style="--i:2">
      <div class="ch"><h2>Upcoming bills</h2><span class="k bt"></span></div>
      <div class="bl"></div>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pg{padding:26px 28px 28px}
.d .fh{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .fh h1{margin-top:6px}
.d .fr{display:flex;align-items:center;gap:10px}
.d .top{display:grid;flex:1;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:16px;min-height:290px}
.d .cash,.d .exp{display:flex;flex-direction:column;padding:18px 20px}
.d .ch{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .bal{margin-top:8px;font-size:40px;line-height:1;font-weight:650;letter-spacing:-.04em}
.d .cr{display:flex;flex-direction:column;align-items:flex-end;gap:10px}
.d .plot{position:relative;flex:1;min-height:120px;margin:14px 0 0 44px}
.d .gl{position:absolute;left:0;right:0;border-top:1px solid var(--ml-line)}
.d .gl s{position:absolute;left:-44px;top:0;width:36px;transform:translateY(-50%);text-align:right;text-decoration:none;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .cols{position:absolute;inset:0;display:flex}
.d .cw{display:flex;flex:1;align-items:flex-end;justify-content:center;gap:5px;height:100%}
.d .cw i{display:block;width:min(34%,22px);border-radius:6px 6px 2px 2px;background:var(--ml-accent)}
.d .cw i + i{background:var(--ml-accent-line)}
.d .xs{display:flex;margin:8px 0 0 44px}
.d .xs span{flex:1;text-align:center;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .eb{display:flex;flex:1;align-items:center;gap:22px;margin-top:8px}
.d .dn{position:relative;flex:none;width:min(50%,236px);aspect-ratio:1}
.d .dn svg{display:block;width:100%;height:100%;transform:rotate(-90deg)}
.d .sg{fill:none;stroke-width:15;stroke-dasharray:var(--l) 100;stroke-dashoffset:var(--o);transition:opacity .25s ease,stroke-width .25s ease}
.d .dn.f .sg{opacity:.28}
.d .dn.f .sg.on{opacity:1;stroke-width:17}
.d .swap .sg{animation:fin-dn 900ms var(--ml-ease) both;animation-delay:calc(var(--i,0) * 70ms)}
@keyframes fin-dn{from{stroke-dasharray:0 100}}
.d .dc{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
.d .dk{max-width:62%;font-size:11.5px;color:var(--ml-muted)}
.d .dv{margin-top:3px;font-size:21px;font-weight:650;letter-spacing:-.03em}
.d .dp{margin-top:2px;font-size:11.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .ey{display:flex;flex:1;flex-direction:column;gap:2px;min-width:0;list-style:none}
.d .eg{display:grid;grid-template-columns:10px minmax(0,1fr) auto;align-items:center;gap:10px;width:100%;padding:7px 9px;border:0;border-radius:10px;background:none;font-size:13px;text-align:left;cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .eg:hover,.d .eg.on{background:var(--ml-surface)}
.d .eg.press{transform:scale(.97)}
.d .eg i{width:10px;height:10px;border-radius:3px}
.d .eg b{font-weight:650;font-variant-numeric:tabular-nums}
.d .eg:focus-visible{outline:2px solid var(--ml-accent);outline-offset:1px}
.d .ef{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:auto;padding-top:14px;border-top:1px solid var(--ml-line)}
.d .ef > div{display:flex;flex-direction:column;align-items:flex-start;gap:6px}
.d .ef b{font-size:18px;font-weight:650;letter-spacing:-.02em}
.d .bills{padding:16px 20px 18px}
.d .bl{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px;margin-top:12px}
.d .bill{display:flex;flex-direction:column;gap:10px;padding:13px 14px;border-radius:14px;background:var(--ml-surface);transition:background-color .3s ease}
.d .bill .bh{display:flex;align-items:center;gap:10px}
.d .bill .ti{display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-accent)}
.d .bill b{display:block;font-size:13px;font-weight:600}
.d .bill small{font-size:12px;color:var(--ml-muted)}
.d .bill .bm{display:flex;align-items:center;justify-content:space-between}
.d .bill .am{font-size:17px;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums;transition:color .3s ease}
.d .pay{display:inline-flex;align-items:center;gap:5px;height:28px;padding:0 12px;border:0;border-radius:9px;background:var(--ml-accent);color:#fff;font-size:12px;font-weight:600;cursor:pointer;transition:background-color .3s ease,color .3s ease,transform 90ms ease-out}
.d .pay.press{transform:scale(.94)}
.d .bill.paid{background:rgba(29,185,84,.07)}
.d .bill.paid .pay{background:rgba(29,185,84,.14);color:#12893C;cursor:default}
.d .bill.paid .am{color:var(--ml-muted)}
.d .pay:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
@container scr (max-width: 760px){
  .d .pg{padding:18px 16px}
  .d .fh{flex-direction:column;align-items:flex-start}
  .d .chip{display:none}
  .d .top{flex:none;grid-template-columns:minmax(0,1fr)}
  .d .cash{min-height:300px}
  .d .cr .lg{display:none}
  .d .eb{flex-direction:column;align-items:stretch}
  .d .dn{align-self:center;width:170px}
  .d .bl{grid-template-columns:repeat(2,minmax(0,1fr))}
}
@media (prefers-reduced-motion: reduce){.d .swap .sg{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 800) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };

      const M = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
      const inn = [62.4, 58.9, 66.1, 71.5, 69.8, 74.6];
      const out = [48.2, 51.7, 49.9, 55.3, 52.8, 56.1];
      const cats = [['Payroll', 28400], ['Software', 7950], ['Marketing', 6200], ['Rent', 5400], ['Travel', 3150], ['Other', 5000]];
      const colors = ['var(--ml-accent-ink)', 'var(--ml-accent)', 'var(--ml-accent-2)', 'color-mix(in srgb, var(--ml-accent) 45%, #fff)', 'var(--ml-accent-line)', 'var(--ml-bar)'];
      const bills = [['Northgate Insurance', 'Due Oct 20', 1240, '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 12l2 2 4-4"/>'], ['Cloud hosting', 'Due Oct 22', 860, '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>'], ['Payroll run', 'Due Oct 31', 28400, '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'], ['Office rent', 'Due Nov 1', 5400, '<path d="M3 21h18"/><path d="M5 21V7l8-4v18"/><path d="M19 21V11l-6-4"/>']];
      const total = cats.reduce((a, c) => a + c[1], 0);
      const money = (v) => '$' + Math.round(v).toLocaleString('en-US');
      const dn = $('.dn');
      let paid = new Set();

      $('.cols').innerHTML = M.map((m, i) => `<div class="cw"><i class="gb" style="--i:${i};height:${inn[i] / 0.8}%"></i><i class="gb" style="--i:${i};height:${out[i] / 0.8}%"></i></div>`).join('');
      $('.xs').innerHTML = M.map((m) => `<span>${m}</span>`).join('');
      let acc = 0;
      $('.dn svg').innerHTML = '<circle cx="60" cy="60" r="48" fill="none" stroke="var(--ml-bar-2)" stroke-width="15"/>' + cats
        .map(([n, v], i) => { const l = (v / total) * 100, o = -acc; acc += l; return `<circle class="sg" data-i="${i}" cx="60" cy="60" r="48" pathLength="100" style="--l:${(l - 0.8).toFixed(2)};--o:${o.toFixed(2)};--i:${i};stroke:${colors[i]}"></circle>`; })
        .join('');
      $('.ey').innerHTML = cats.map(([n, v], i) => `<li><button type="button" class="eg" data-i="${i}"><i style="background:${colors[i]}"></i><span>${n}</span><b>${money(v)}</b></button></li>`).join('');
      const focus = (i) => {
        $$('.sg').forEach((s) => s.classList.toggle('on', +s.dataset.i === i));
        $$('.eg').forEach((s) => s.classList.toggle('on', +s.dataset.i === i));
        dn.classList.toggle('f', i >= 0);
        $('.dk').textContent = i >= 0 ? cats[i][0] : 'Total spent';
        roll($('.dv'), money(i >= 0 ? cats[i][1] : total), 450);
        $('.dp').textContent = i >= 0 ? `${((cats[i][1] / total) * 100).toFixed(1)}% of spend` : '';
      };
      $('.ey').addEventListener('pointerover', (e) => { const b = e.target.closest('.eg'); if (b) focus(+b.dataset.i); });
      $('.ey').addEventListener('pointerleave', () => focus(-1));
      $('.ey').addEventListener('click', (e) => { const b = e.target.closest('.eg'); if (b) focus(+b.dataset.i); });
      $$('.sg').forEach((s) => { s.addEventListener('pointerover', () => focus(+s.dataset.i)); s.addEventListener('pointerleave', () => focus(-1)); });

      $('.bl').innerHTML = bills
        .map((b, i) => `<div class="bill in" style="--i:${i + 3}" data-i="${i}"><div class="bh"><span class="ti"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${b[3]}</svg></span><div><b>${b[0]}</b><small>${b[1]}</small></div></div><div class="bm"><span class="am">${money(b[2])}</span><button type="button" class="pay">Pay now</button></div></div>`)
        .join('');
      const check = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const paint = () => {
        let due = 0;
        $$('.bill').forEach((el, i) => {
          const p = paid.has(i);
          el.classList.toggle('paid', p);
          const bt = el.querySelector('.pay');
          bt.innerHTML = p ? check + 'Paid' : 'Pay now';
          bt.disabled = p;
          if (!p) due += bills[i][2];
        });
        $('.bt').textContent = `${money(due)} due across ${bills.length - paid.size} bills`;
        roll($('.bal'), money(284930 - [...paid].reduce((a, i) => a + bills[i][2], 0)), 900);
      };
      $$('.pay').forEach((b, i) => b.addEventListener('click', () => { if (!paid.has(i)) { paid.add(i); paint(); } }));
      paint();
      focus(-1);

      (async () => {
        await wait(1800);
        let q = 0;
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          for (const i of [0, 3]) {
            const b = $$('.eg')[i];
            await act(b, () => focus(i), 0.4, 0.5);
            await wait(1500);
          }
          focus(-1);
          const k = [0, 1][q % 2];
          const pb = $$('.pay')[k];
          await act(pb, () => pb.click());
          await wait(3200);
          if (q % 2 === 1 && idle()) { paid = new Set(); paint(); replay(app); await wait(1200); }
          q++;
        }
      })();
    },
    prompt: `Build a finance overview screen with no sidebar: a page header ("Kestrel & Co" uppercase label, 26px title, an "All accounts" chip and a primary Add transaction button), then a top row (1.5fr / 1fr) and a bills strip.

Cash flow card: an uppercase "Total balance" label, a 40px tabular-nums balance, a green delta pill and a legend; below a paired column chart for the last 6 months (money in in your accent color, money out in a light blue), y axis $0 to $80k with hairline gridlines, month labels. Expenses card: a donut chart built from SVG circles with pathLength="100" (stroke-dasharray "<share - 0.8> 100", stroke-dashoffset = -(sum of previous shares), rotated -90deg) in 6 blue steps, with the total in the centre; beside it a legend list (colour chip, category, amount). Category amounts must sum to the centre total and match the out column of the current month. Bills strip: 4 equal bill cards (icon tile, name, due date, amount, a small primary "Pay now" button).

Interaction: hovering (or focusing/clicking) a legend row or a donut segment dims the others to 28%, thickens that segment from 15 to 17 and swaps the centre label to the category, its amount (counting up) and its share. Paying a bill turns the button into a green "Paid" state with a check, tints the card, subtracts the amount from the balance (count-up over 900ms) and updates the "due across N bills" total. On load the donut segments draw in with an animated stroke-dasharray (900ms, 70ms stagger) and the columns grow with scaleY.

Accessibility: legend rows and pay buttons are real buttons, paid buttons are disabled, focus rings, prefers-reduced-motion disables the draw-in. Phone layout under 760px: stack cards, donut above legend, bills two per row. Plain HTML, CSS and JS, no libraries; React-friendly structure (BalanceCard, CashFlowChart, ExpenseDonut, CategoryLegend, BillCard).`,
  });

  // 7. Support desk metrics - status stack, response time vs SLA, CSAT, live incoming queue
  ML.add({
    id: 'app-dashboards-support',
    cat: 'app-dashboards',
    title: 'Support desk metrics',
    sub: 'Tickets arrive while the range changes',
    html: `
<div class="app">
  <main class="pg">
    <header class="sh">
      <div><p class="cap">Halden Support</p><h1>Support desk</h1></div>
      <div class="sr"><span class="avs"><i>AT</i><i>DO</i><i>PN</i><i>LO</i><em>+3</em></span><div class="seg" style="--n:3;--on:1" role="group" aria-label="Range"><span class="hl"></span><button type="button">7D</button><button type="button" class="on">14D</button><button type="button">30D</button></div></div>
    </header>
    <div class="g">
      <section class="card stat in" style="--i:0">
        <div class="ch"><h2>Tickets by status</h2><span class="k">Right now</span></div>
        <div class="hn"><p class="big num tot">172</p><span class="k">open tickets</span></div>
        <div class="stk" role="img" aria-label="Open tickets by status"></div>
        <ul class="sl"></ul>
      </section>
      <section class="card resp in" style="--i:1">
        <div class="ch"><div><h2>First response time</h2><p class="k">Median, minutes</p></div><div class="rv"><p class="v avg num">21m</p><span class="dl">-4m vs prior</span></div></div>
        <div class="plot">
          <div class="gl" style="bottom:0"><s>0</s></div><div class="gl" style="bottom:25%"><s>10</s></div><div class="gl" style="bottom:50%"><s>20</s></div><div class="gl" style="bottom:75%"><s>30</s></div><div class="gl" style="bottom:100%"><s>40</s></div>
          <svg viewBox="0 0 600 150" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="ml-sup-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF4433" stop-opacity=".2"/><stop offset="1" stop-color="#FF4433" stop-opacity="0"/></linearGradient></defs><path class="ar fade" fill="url(#ml-sup-fill)"/><path class="sla" d="M0,37.5 L600,37.5"/><path class="lp wipe"/></svg>
          <span class="dot" aria-hidden="true"><i></i></span>
          <span class="slat">SLA 30m</span>
        </div>
        <div class="xs"></div>
      </section>
      <section class="card q in" style="--i:2">
        <div class="ch"><h2>Incoming queue</h2><span class="live"><i></i>Live</span></div>
        <ul class="qu"></ul>
      </section>
      <section class="card cs in" style="--i:3">
        <div class="ch"><h2>Customer satisfaction</h2><span class="k">1,284 responses</span></div>
        <div class="hn"><p class="big num">90%</p><span class="dl">+2 pts</span></div>
        <ul class="cb"></ul>
      </section>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pg{padding:26px 28px 28px}
.d .sh{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .sh h1{margin-top:6px}
.d .sr{display:flex;align-items:center;gap:16px}
.d .avs{display:flex;align-items:center}
.d .avs i,.d .avs em{display:grid;place-items:center;width:32px;height:32px;margin-left:-7px;border-radius:50%;background:var(--ml-accent-soft);box-shadow:0 0 0 2px var(--ml-surface);font-size:10.5px;font-weight:650;font-style:normal;color:var(--ml-accent-ink)}
.d .avs i:first-child{margin-left:0}
.d .avs em{background:var(--ml-bg);color:var(--ml-muted)}
.d .g{display:grid;flex:1;grid-template-columns:minmax(0,1fr) minmax(0,1.15fr);grid-template-rows:minmax(250px,1fr) minmax(250px,1fr);gap:16px}
.d .g .card{display:flex;flex-direction:column;padding:18px 20px;min-height:0}
.d .ch{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .hn{display:flex;align-items:baseline;gap:10px;margin-top:12px}
.d .big{font-size:44px;line-height:1;font-weight:650;letter-spacing:-.04em}
.d .stk{display:flex;gap:3px;height:16px;margin-top:16px}
.d .stk i{display:block;height:100%;border-radius:5px;min-width:6px}
.d .sl{display:flex;flex:1;flex-direction:column;justify-content:space-around;margin-top:14px;list-style:none}
.d .sl li{display:grid;grid-template-columns:9px 64px minmax(0,1fr) 34px;align-items:center;gap:10px;font-size:13px;color:var(--ml-ink-2)}
.d .sl .tk{height:8px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .sl .tk s{display:block;height:100%;border-radius:inherit}
.d .sl i{width:9px;height:9px;border-radius:3px}
.d .sl b{text-align:right;font-weight:650;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .rv{display:flex;flex-direction:column;align-items:flex-end;gap:7px}
.d .plot{position:relative;flex:1;min-height:100px;margin:14px 0 0 30px}
.d .gl{position:absolute;left:0;right:0;border-top:1px solid var(--ml-line)}
.d .gl s{position:absolute;left:-30px;top:0;width:22px;transform:translateY(-50%);text-align:right;text-decoration:none;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .plot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.d .lp{fill:none;stroke:var(--ml-accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.d .sla{stroke:var(--ml-muted);stroke-width:1.5;stroke-dasharray:5 6;opacity:.7}
.d .slat{position:absolute;left:8px;top:25%;transform:translateY(-125%);padding:2px 7px;border-radius:999px;background:var(--ml-surface);font:600 10.5px/1.4 var(--ml-mono);color:var(--ml-muted)}
.d .dot{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px #fff,0 2px 6px rgba(255,68,51,.4)}
.d .dot i{position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:dsh-ping 2.4s ease-out infinite}
.d .xs{display:flex;justify-content:space-between;margin:10px 0 0 30px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .live{display:inline-flex;align-items:center;gap:7px;height:24px;padding:0 10px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:600;color:#12893C}
.d .live i{position:relative;width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .live i::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:dsh-ping 2s ease-out infinite}
.d .qu{position:relative;flex:1;min-height:200px;margin-top:10px;list-style:none;overflow:hidden}
.d .qu li{position:absolute;left:0;right:0;top:0;display:grid;grid-template-columns:54px minmax(0,1fr) auto 38px;align-items:center;gap:12px;height:48px;border-bottom:1px solid var(--ml-bar-2);opacity:1;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .3s ease}
.d .qu li.nw{opacity:0}
.d .qu .id{font:600 12px var(--ml-mono);color:var(--ml-muted)}
.d .qu b{display:block;overflow:hidden;font-size:13px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .qu small{font-size:11.5px;color:var(--ml-muted)}
.d .pr{padding:3px 9px;border-radius:999px;background:var(--ml-surface);font-size:11px;font-weight:600;color:var(--ml-muted)}
.d .pr.hi{background:rgba(255,159,10,.12);color:#B25E00}
.d .pr.ur{background:rgba(255,59,48,.09);color:#D70015}
.d .qu time{font:500 11.5px var(--ml-mono);text-align:right;color:var(--ml-muted)}
.d .cb{display:flex;flex:1;flex-direction:column;justify-content:space-around;margin-top:12px;list-style:none}
.d .cb li{display:grid;grid-template-columns:34px minmax(0,1fr) 38px;align-items:center;gap:12px;font-size:13px;font-variant-numeric:tabular-nums}
.d .cb .st{display:flex;align-items:center;gap:4px;font-weight:600}
.d .cb .st svg{color:var(--ml-accent)}
.d .cb .tk{height:8px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .cb .tk i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent)}
.d .cb b{text-align:right;font-weight:650}
@container scr (max-width: 760px){
  .d .pg{padding:18px 16px}
  .d .sh{flex-direction:column;align-items:stretch}
  .d .avs{display:none}
  .d .g{flex:none;grid-template-columns:minmax(0,1fr);grid-template-rows:none}
  .d .resp{min-height:280px}
  .d .qu li{grid-template-columns:50px minmax(0,1fr) 36px}
  .d .qu .pr{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 700) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const setSeg = (seg, i) => { seg.style.setProperty('--on', i); [...seg.querySelectorAll('button')].forEach((b, k) => b.classList.toggle('on', k === i)); };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)},${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)},${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
        }
        return d;
      };

      const status = [['New', 38, 'var(--ml-accent-ink)'], ['Open', 71, 'var(--ml-accent)'], ['Pending', 46, 'var(--ml-accent-2)'], ['On hold', 17, 'var(--ml-accent-line)']];
      const rt = [31, 29, 33, 28, 30, 27, 26, 29, 25, 27, 24, 26, 28, 23, 25, 22, 24, 26, 21, 23, 22, 25, 20, 22, 21, 19, 23, 20, 18, 19];
      const csat = [[5, 68], [4, 22], [3, 6], [2, 2], [1, 2]];
      const feed = [
        ['#4821', 'Cannot reconnect calendar after update', 'Brightline Dental', 'High', '2m'],
        ['#4820', 'Invoice PDF shows the wrong tax line', 'Meridian Foods', 'Normal', '9m'],
        ['#4819', 'Export to CSV stuck at 80 percent', 'Kestrel & Co', 'Urgent', '14m'],
        ['#4818', 'How do I add a teammate to two workspaces?', 'Fernway', 'Normal', '21m'],
        ['#4817', 'Webhook retries failing with a 502', 'Atlas Freight', 'High', '33m'],
        ['#4816', 'Need a receipt for the September invoice', 'Tidewater Realty', 'Normal', '41m'],
      ];
      const incoming = [
        ['Login loop on the mobile app', 'Solace Studio', 'High'],
        ['Refund request for duplicate charge', 'Juniper Health', 'Normal'],
        ['Dashboard widgets show yesterday data', 'Lumen Labs', 'Urgent'],
        ['Change billing email for the account', 'Corvid Coffee', 'Normal'],
      ];
      const st = $('.seg');
      const ranges = [7, 14, 30];
      let n = 14, nid = 4821, ai = 0;
      const total = () => status.reduce((a, s) => a + s[1], 0);
      const paintStatus = () => {
        const t = total();
        $('.stk').innerHTML = status.map((s) => `<i style="flex:${s[1]} 1 0;background:${s[2]}"></i>`).join('');
        $('.sl').innerHTML = status.map((s) => `<li><i style="background:${s[2]}"></i>${s[0]}<div class="tk"><s style="width:${((s[1] / 80) * 100).toFixed(1)}%;background:${s[2]}"></s></div><b>${s[1]}</b></li>`).join('');
        roll($('.tot'), String(t), 500);
      };
      const render = (animate) => {
        const v = rt.slice(-n), W = 600, H = 150;
        const pts = v.map((x, i) => [(i / (v.length - 1)) * W, H - (x / 40) * H]);
        const d = curve(pts);
        $('.lp').setAttribute('d', d);
        $('.ar').setAttribute('d', `${d} L${W},${H} L0,${H} Z`);
        const last = pts[pts.length - 1];
        const dot = $('.dot');
        dot.style.left = '100%';
        dot.style.top = `${(last[1] / H) * 100}%`;
        const date = (k) => new Date(2026, 9, 14 - k).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
        $('.xs').innerHTML = [n - 1, Math.round((n - 1) / 2), 0].map((k) => `<span>${date(k)}</span>`).join('');
        const avg = Math.round(v.reduce((a, b) => a + b, 0) / v.length);
        roll($('.avg'), avg + 'm');
        if (animate) replay(app);
      };
      $('.cb').innerHTML = csat.map(([s, p], k) => `<li class="in" style="--i:${k + 4}"><span class="st">${s}<svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span><div class="tk"><i class="gx" style="--s:${p / 68};--i:${k}"></i></div><b>${p}%</b></li>`).join('');

      const qu = $('.qu');
      const rowH = 48;
      const mk = (t) => { const li = document.createElement('li'); li.innerHTML = `<span class="id">${t[0]}</span><div style="min-width:0"><b>${t[1]}</b><small>${t[2]}</small></div><span class="pr ${t[3] === 'High' ? 'hi' : t[3] === 'Urgent' ? 'ur' : ''}">${t[3]}</span><time>${t[4]}</time>`; return li; };
      const place = () => [...qu.children].forEach((li, i) => { li.style.transform = `translateY(${i * rowH}px)`; });
      feed.forEach((t) => qu.appendChild(mk(t)));
      place();
      const arrive = () => {
        const [sub, co, pr] = incoming[ai++ % incoming.length];
        const li = mk([`#${++nid}`, sub, co, pr, 'now']);
        li.classList.add('nw');
        li.style.transform = `translateY(${-rowH}px)`;
        qu.prepend(li);
        void li.offsetWidth;
        li.classList.remove('nw');
        place();
        [...qu.children].slice(6).forEach((x) => { x.style.opacity = 0; setTimeout(() => x.remove(), 400); });
        status[0][1] += 1;
        paintStatus();
      };
      $$('.seg button').forEach((b, k) => b.addEventListener('click', () => { n = ranges[k]; setSeg(st, k); render(true); }));
      paintStatus(); render(false);

      (async () => {
        while (root.isConnected) {
          await wait(3400);
          if (status[0][1] > 60) { status[0][1] = 38; paintStatus(); }
          arrive();
        }
      })();
      (async () => {
        await wait(1500);
        let q = 0;
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const k = [0, 2, 1][q++ % 3];
          await act($$('.seg button')[k], () => $$('.seg button')[k].click());
          await wait(5200);
        }
      })();
    },
    prompt: `Build a support desk metrics dashboard with no sidebar. Header: an uppercase team label, a 26px title, a small stack of agent avatars with a "+3" overflow and a 3-option segmented control (7D, 14D, 30D).

Body is a 2x2 grid (1fr / 1.15fr) of cards. (1) Tickets by status: a 44px open-ticket total, a stacked horizontal bar (rounded segments, 3px gaps, flex proportional to counts, blue steps) and a 2-column legend with counts (New, Open, Pending, On hold). (2) First response time: a smooth area/line chart of the median minutes per day with a y axis 0 to 40, a dashed horizontal SLA line at 30 minutes with a small "SLA 30m" tag, an end dot with a pinging ring, an average figure with a delta pill and 3 date labels. (3) Incoming queue: a live list (ticket id in mono, subject, customer company, priority pill: Normal grey, High amber, Urgent red, age). (4) Customer satisfaction: a big percent (share of 4-5 star ratings), a delta and a five-row star distribution with proportional bars. Numbers must be coherent (satisfaction = 5 star + 4 star share; the total equals the sum of the statuses).

Behavior: a new ticket arrives every ~3s: the row is created above the list at translateY(-48px) with opacity 0, then every row is moved to translateY(index * 48px) with a critically damped spring (587ms), the oldest row (6th) fades out and is removed, the New count and the total increase with a count-up. Changing the range re-slices the chart: the line is revealed with a left-to-right clip-path (1.1s), the area fades in and the average counts to its new value; the segmented highlight slides with transform.

Accessibility: the stacked bar has role=img with an aria-label, the queue is a list with live updates announced politely, focus rings, prefers-reduced-motion disables the ping and draw animations. Phone layout under 760px: single column, hide avatars and priority pills. Plain HTML, CSS and JS, no libraries; React-friendly structure (StatusStack, ResponseChart, IncomingQueue, SatisfactionCard).`,
  });

  // 8. Project portfolio - health summary, mini gantt with today line, budget burn, expandable rows
  ML.add({
    id: 'app-dashboards-portfolio',
    cat: 'app-dashboards',
    title: 'Project portfolio',
    sub: 'Health filter, gantt bars and row details',
    html: `
<div class="app">
  <header class="tn">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Halden</b></div>
    <nav class="tabs" aria-label="Sections"><button type="button" class="on">Portfolio</button><button type="button">Roadmap</button><button type="button">Budgets</button><button type="button">Resources</button></nav>
    <div class="tr"><button class="btn pri" type="button">${I(P.plus, 15)}New project</button><span class="av">MR</span></div>
  </header>
  <main class="pg">
    <div class="sum">
      <div class="card hs in" style="--i:0"><p class="k">Portfolio health</p><p class="v"><span class="n8">8</span> <small>projects</small></p><div class="stk" role="img" aria-label="Health split"></div><p class="lg"></p></div>
      <div class="card bs in" style="--i:1"><p class="k">Budget burn</p><p class="v bp">44%</p><div class="bar"><i class="gx" style="--s:.44"></i></div><p class="k bm">$247,400 of $560,000 spent</p></div>
      <div class="card es in" style="--i:2"><p class="k">Ending this month</p><p class="v">2</p><p class="k">Solace rebrand, Brightline site refresh</p></div>
    </div>
    <div class="fl"><div class="chips" role="group" aria-label="Health filter"></div><span class="k">Today: Oct 14</span></div>
    <section class="card tbl in" style="--i:3">
      <div class="th"><span>Project</span><span>Health</span><span class="tax"><b>Sep</b><b>Oct</b><b>Nov</b><b>Dec</b><em>Today</em></span><span>Budget burn</span></div>
      <ul class="pl"></ul>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .tn{display:flex;flex:none;align-items:center;gap:28px;height:60px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tabs{display:flex;gap:4px;height:100%}
.d .tabs button{position:relative;padding:0 14px;border:0;background:none;font-size:14px;font-weight:500;color:var(--ml-muted);cursor:pointer}
.d .tabs button.on{font-weight:600;color:var(--ml-ink)}
.d .tabs button.on::after{content:"";position:absolute;left:14px;right:14px;bottom:-1px;height:2px;border-radius:2px;background:var(--ml-accent)}
.d .tr{display:flex;align-items:center;gap:12px;margin-left:auto}
.d .sum{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:16px}
.d .sum .card{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:16px 18px}
.d .v small{font-size:13px;font-weight:500;letter-spacing:0;color:var(--ml-muted)}
.d .stk{display:flex;gap:3px;width:100%;height:10px}
.d .stk i{display:block;height:100%;border-radius:4px}
.d .lg{gap:12px;font-size:12px}
.d .lg b{font-weight:650;color:var(--ml-ink)}
.d .bar{width:100%;height:10px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .bar i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent)}
.d .fl{display:flex;align-items:center;justify-content:space-between;gap:12px}
.d .chips{display:flex;gap:8px}
.d .chip b{font-weight:650;font-variant-numeric:tabular-nums;color:var(--ml-muted)}
.d .chip.on b{color:var(--ml-accent-ink)}
.d .tbl{display:flex;flex:1;flex-direction:column;min-height:0;padding:4px 20px 8px}
.d .th,.d .pr{display:grid;grid-template-columns:minmax(0,1.5fr) 92px minmax(0,2.1fr) minmax(0,1.15fr);align-items:center;gap:18px}
.d .th{padding:12px 0 10px;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .tax{position:relative;display:flex;height:14px}
.d .tax b{position:absolute;top:0;font-weight:600;transform:translateX(0)}
.d .tax b:nth-child(1){left:0}.d .tax b:nth-child(2){left:24.6%}.d .tax b:nth-child(3){left:50%}.d .tax b:nth-child(4){left:74.6%}
.d .tax em{position:absolute;top:-3px;left:35.2%;padding:2px 7px;border-radius:999px;transform:translateX(-50%);background:var(--ml-ink);font-size:10px;font-style:normal;font-weight:600;letter-spacing:.02em;text-transform:none;color:#fff}
.d .pl{flex:1;list-style:none;overflow-y:auto;scrollbar-width:none}
.d .pl li{display:grid;grid-template-rows:auto 0fr;border-bottom:1px solid var(--ml-bar-2);transition:grid-template-rows .45s var(--ml-ease)}
.d .pl li.open{grid-template-rows:auto 1fr}
.d .pl li:last-child{border-bottom:0}
.d .pr{min-height:56px;cursor:pointer;outline:0;transition:background-color .2s ease}
.d .pr:hover{background:var(--ml-surface)}
.d .pr:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:8px}
.d .pn{display:flex;align-items:center;gap:11px;min-width:0}
.d .pn .av{width:30px;height:30px;font-size:10.5px}
.d .pn b{display:block;overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .pn small{font-size:12px;color:var(--ml-muted)}
.d .hp{display:inline-flex;align-items:center;justify-self:start;gap:6px;padding:4px 10px;border-radius:999px;font-size:11.5px;font-weight:600;white-space:nowrap}
.d .hp::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor}
.d .hp.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .hp.wn{background:rgba(255,159,10,.12);color:#B25E00}
.d .hp.bd{background:rgba(255,59,48,.09);color:#D70015}
.d .tl{position:relative;height:22px}
.d .tl::before{content:"";position:absolute;inset:50% 0 auto;height:1px;background:var(--ml-bar-2)}
.d .tl::after{content:"";position:absolute;left:35.2%;top:-17px;bottom:-17px;width:1px;background:var(--ml-ink);opacity:.45}
.d .gb2{position:absolute;top:3px;height:16px;border-radius:6px;background:var(--ml-accent-line);overflow:hidden;transform-origin:0 50%}
.d .gb2 i{display:block;height:100%;background:var(--ml-accent)}
.d .bn{display:flex;flex-direction:column;gap:6px}
.d .bn p{display:flex;justify-content:space-between;gap:8px;font-size:12px;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .bn p b{font-weight:650;color:var(--ml-ink)}
.d .bn .bar{height:6px}
.d .bn .bar i.wn{background:#FF9F0A}
.d .bn .bar i.bd{background:#FF3B30}
.d .dt{min-height:0;overflow:hidden}
.d .dt > div{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;margin:0 0 12px;padding:12px 14px;border-radius:12px;background:var(--ml-surface);font-size:12.5px;color:var(--ml-ink-2)}
.d .dt small{display:block;margin-bottom:3px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .dt b{font-weight:600;color:var(--ml-ink)}
@container scr (max-width: 760px){
  .d .tn{padding:0 16px;gap:12px}
  .d .tabs,.d .tr .btn,.d .pn .av{display:none}
  .d .pg{padding:16px}
  .d .sum{grid-template-columns:minmax(0,1fr)}
  .d .sum .es,.d .fl .k{display:none}
  .d .chips{overflow-x:auto;scrollbar-width:none}
  .d .th,.d .pr{grid-template-columns:minmax(0,1.4fr) 88px minmax(0,1fr)}
  .d .th span:nth-child(3),.d .pr > .tl{display:none}
  .d .tbl{flex:none}
  .d .dt > div{grid-template-columns:minmax(0,1fr)}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };

      // [name, client, owner, health(0 on track, 1 at risk, 2 off track), start day, end day, progress %, budget k, spent k, next milestone, due label]; days counted from Sep 1
      const PR = [
        ['Meridian app rebuild', 'Meridian Foods', 'Daniel Okafor', 0, 7, 102, 46, 120, 51, 'Checkout flow review, Oct 21', 'Dec 12'],
        ['Northgate client portal', 'Northgate', 'Aiko Tan', 0, 0, 74, 71, 80, 54, 'Security review, Oct 17', 'Nov 14'],
        ['Brightline site refresh', 'Brightline Dental', 'Priya Nair', 1, 14, 60, 82, 36, 33.9, 'Content freeze, Oct 22', 'Oct 31'],
        ['Kestrel reporting suite', 'Kestrel & Co', 'Hana Kim', 0, 30, 109, 28, 64, 17, 'Data model sign-off, Oct 24', 'Dec 19'],
        ['Solace rebrand', 'Solace Studio', 'Maya Reyes', 2, 0, 53, 64, 52, 55, 'Brand book handoff, Oct 20', 'Oct 24'],
        ['Fernway onboarding', 'Fernway', 'Luis Ortega', 0, 35, 88, 22, 40, 9, 'Kickoff workshop, Oct 16', 'Nov 28'],
        ['Atlas dispatch tool', 'Atlas Freight', 'Rafael Santos', 1, 21, 95, 21, 96, 24.5, 'Route engine demo, Oct 28', 'Dec 5'],
        ['Lumen analytics', 'Lumen Labs', 'Sam Whitfield', 0, 42, 120, 4, 72, 3, 'Discovery readout, Oct 23', 'Dec 30'],
      ];
      const H = [['On track', 'ok', '#1DB954'], ['At risk', 'wn', '#FF9F0A'], ['Off track', 'bd', '#FF3B30']];
      const tag = ['All', 'On track', 'At risk', 'Off track'];
      const SPAN = 122;
      const ini = (n) => n.split(' ').map((w) => w[0]).join('');
      const k = (v) => '$' + (v >= 100 ? Math.round(v) : v.toFixed(1).replace(/\.0$/, '')) + 'k';
      let f = 0;
      const cnt = [PR.length, 0, 0, 0];
      PR.forEach((p) => { cnt[p[3] + 1]++; });
      const spent = PR.reduce((a, p) => a + p[8], 0), bud = PR.reduce((a, p) => a + p[7], 0);
      $('.stk').innerHTML = [0, 1, 2].map((h) => `<i style="flex:${cnt[h + 1]} 1 0;background:${H[h][2]}"></i>`).join('');
      $('.hs .lg').innerHTML = [0, 1, 2].map((h) => `<span><b>${cnt[h + 1]}</b> ${H[h][0].toLowerCase()}</span>`).join('');
      $('.n8').textContent = PR.length;
      $('.bp').textContent = Math.round((spent / bud) * 100) + '%';
      $('.bm').textContent = `$${Math.round(spent * 1000).toLocaleString('en-US')} of $${Math.round(bud * 1000).toLocaleString('en-US')} spent`;
      $('.bs .bar i').style.setProperty('--s', (spent / bud).toFixed(3));
      $('.chips').innerHTML = tag.map((t, i) => `<button type="button" class="chip${i === 0 ? ' on' : ''}" data-f="${i}">${t} <b>${cnt[i]}</b></button>`).join('');

      const paint = (animate) => {
        const list = PR.filter((p) => f === 0 || p[3] + 1 === f);
        $('.pl').innerHTML = list
          .map((p, i) => {
            const pct = (p[8] / p[7]) * 100, cls = pct >= 100 ? 'bd' : pct >= 90 ? 'wn' : '';
            const left = (p[4] / SPAN) * 100, w = ((p[5] - p[4]) / SPAN) * 100;
            return `<li style="--i:${i}"><div class="pr in" role="button" tabindex="0" aria-expanded="false" style="--i:${i + 4}"><div class="pn"><span class="av">${ini(p[2])}</span><div style="min-width:0"><b>${p[0]}</b><small>${p[1]}</small></div></div><span class="hp ${H[p[3]][1]}">${H[p[3]][0]}</span><div class="tl"><div class="gb2 gx" style="left:${left.toFixed(1)}%;width:${w.toFixed(1)}%;--i:${i}"><i style="width:${p[6]}%"></i></div></div><div class="bn"><p><b>${Math.round(pct)}%</b><span>${k(p[8])} of ${k(p[7])}</span></p><div class="bar"><i class="gx ${cls}" style="--s:${Math.min(1, pct / 100).toFixed(3)};--i:${i}"></i></div></div></div><div class="dt"><div><span><small>Next milestone</small><b>${p[9]}</b></span><span><small>Owner</small><b>${p[2]}</b></span><span><small>Progress, due ${p[10]}</small><b>${p[6]}% complete</b></span></div></div></li>`;
          })
          .join('');
        if (animate) replay(app);
      };
      const toggle = (li) => {
        const open = !li.classList.contains('open');
        $$('.pl li.open').forEach((x) => { x.classList.remove('open'); x.firstElementChild.setAttribute('aria-expanded', 'false'); });
        if (open) { li.classList.add('open'); li.firstElementChild.setAttribute('aria-expanded', 'true'); }
      };
      $('.pl').addEventListener('click', (e) => { const r = e.target.closest('.pr'); if (r) toggle(r.parentElement); });
      $('.pl').addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { const r = e.target.closest('.pr'); if (r) { e.preventDefault(); toggle(r.parentElement); } } });
      const setF = (i) => { f = i; $$('.chip').forEach((c, j) => c.classList.toggle('on', j === i)); paint(true); };
      $$('.chip').forEach((c, i) => c.addEventListener('click', () => setF(i)));
      paint(false);

      (async () => {
        await wait(1800);
        let q = 0;
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const fi = [2, 3, 0][q % 3];
          await act($$('.chip')[fi], () => setF(fi));
          await wait(1600);
          const row = $$('.pl .pr')[0];
          await act(row, () => row && row.click(), 0.3, 0.5);
          await wait(2800);
          if (idle() && row && row.parentElement.classList.contains('open')) row.click();
          await wait(900);
          q++;
        }
      })();
    },
    prompt: `Build a project portfolio screen with a top navigation bar (logo, underlined tabs Portfolio / Roadmap / Budgets / Resources, a primary New project button and an avatar) and a scrolling page.

Top: three summary cards (1.3fr / 1fr / 1fr): portfolio health (the project count, a stacked bar split into on track, at risk and off track with small green, amber and red segments, and a legend of counts), budget burn (percent, a thin bar, "$247,400 of $560,000 spent") and a count of projects ending this month. Below them a row of filter chips (All, On track, At risk, Off track, each with a count) and a "Today" date label.

Main card, a table with a hairline header: Project (owner avatar initials, name, client), Health pill (dot plus label, colour only in the pill), Timeline and Budget burn. The timeline column is a mini gantt over Sep to Dec: month labels in the header, a black "Today" pill over a thin vertical today line that runs through every row at the same x, and per project a rounded bar placed with left and width percentages of the date range, light blue with an accent fill showing progress. The budget column shows the percent, "spent of budget" and a 6px bar that turns amber at 90% and red above 100%. Totals in the summary must be derived from the rows.

Interaction: chips filter the rows (rows replay an entrance: opacity and translateY(8px), 45ms stagger, gantt bars and burn bars scaleX from 0 over 800ms). Clicking or pressing Enter on a row expands a detail panel using grid-template-rows 0fr to 1fr (450ms, cubic-bezier(.32,.72,0,1)) with the next milestone, owner and progress; only one row is open at a time; rows are buttons with aria-expanded.

Accessibility: chips are buttons in a group, health is also stated as text, visible focus rings, prefers-reduced-motion removes the entrance animations. Phone layout under 760px: hide the tabs and the timeline column, stack the summary cards, make the chips scroll horizontally and the detail panel one column. Plain HTML, CSS and JS, no libraries; React-friendly structure (TopNav, HealthSummary, FilterChips, PortfolioTable, ProjectRow, GanttBar).`,
  });

  // 9. Team workload - capacity bars + heat calendar per person, right drawer with a rebalance action
  ML.add({
    id: 'app-dashboards-workload',
    cat: 'app-dashboards',
    title: 'Team workload',
    sub: 'Rebalance an overbooked teammate',
    html: `
<div class="app">
  <div class="split">
    <div class="main">
      <header class="hd">
        <div><p class="cap">Resourcing</p><h1>Team workload</h1></div>
        <div class="wk"><button class="ic bd" type="button" aria-label="Previous week" data-d="-1">${I(P.left, 18)}</button><span class="wl"></span><button class="ic bd" type="button" aria-label="Next week" data-d="1">${I(P.right, 18)}</button></div>
      </header>
      <main class="pg">
        <div class="sm">
          <div class="card in" style="--i:0"><p class="k">Team capacity</p><p class="v s1 num">640h</p></div>
          <div class="card in" style="--i:1"><p class="k">Booked</p><p class="v s2 num">0h</p></div>
          <div class="card in" style="--i:2"><p class="k">Utilization</p><p class="v s3 num">0%</p></div>
        </div>
        <section class="card tb in" style="--i:3">
          <div class="th"><span></span><span>Person</span><span>Booked vs capacity</span><span class="dh"></span></div>
          <ul class="rows"></ul>
        </section>
      </main>
    </div>
    <aside class="dr">
      <p class="cap">Needs attention</p>
      <div class="al"></div>
      <p class="cap" style="margin-top:22px">Most available</p>
      <ul class="av2"></ul>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .split{display:grid;grid-template-columns:minmax(0,1fr) 288px;height:100%}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .hd{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px;padding:24px 28px 0}
.d .hd h1{margin-top:6px}
.d .wk{display:flex;align-items:center;gap:4px;padding:3px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .wk .ic{width:32px;height:32px;border-radius:9px}
.d .wk .ic.press{transform:scale(.9)}
.d .wl{min-width:132px;font-size:13px;font-weight:600;text-align:center;font-variant-numeric:tabular-nums}
.d .sm{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.d .sm .card{display:flex;flex-direction:column;gap:9px;padding:14px 18px}
.d .tb{display:flex;flex:1;flex-direction:column;min-height:0;padding:6px 20px 10px}
.d .th,.d .rw{display:grid;grid-template-columns:32px minmax(0,1fr) minmax(0,1.25fr) minmax(0,1.5fr);align-items:center;gap:14px}
.d .th{padding:12px 0 10px;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .dh,.d .cells{display:flex;gap:3px}
.d .dh span{flex:1;text-align:center;font:600 10px/1 var(--ml-mono);letter-spacing:0;text-transform:none}
.d .dh span:nth-child(5),.d .cells span:nth-child(5){margin-right:7px}
.d .rows{display:flex;flex:1;flex-direction:column;justify-content:space-around;list-style:none}
.d .rw{min-height:46px;border-bottom:1px solid var(--ml-bar-2)}
.d .rows li:last-child .rw{border-bottom:0}
.d .rw .av{width:32px;height:32px;font-size:10.5px}
.d .nm b{display:block;font-size:13px;font-weight:600}
.d .nm small{font-size:11.5px;color:var(--ml-muted)}
.d .cb{display:flex;flex-direction:column;gap:6px}
.d .tk{position:relative;height:9px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .tk i{position:absolute;top:0;bottom:0;border-radius:inherit;transform-origin:0 50%;transition:transform .8s var(--ml-ease)}
.d .tk .b1{left:0;right:0;background:var(--ml-accent);transform:scaleX(var(--s,0))}
.d .tk .b2{left:80%;right:0;border-radius:0 99px 99px 0;background:#FF9F0A;transform:scaleX(var(--s,0))}
.d .tk::after{content:"";position:absolute;left:80%;top:0;bottom:0;width:2px;background:var(--ml-ink);opacity:.5}
.d .hr{font-size:11.5px;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .hr b{font-weight:650;color:var(--ml-ink)}
.d .hr.ov b{color:#B25E00}
.d .cells span{flex:1;display:grid;place-items:center;height:28px;border-radius:7px;font:600 10.5px var(--ml-mono);color:var(--ml-ink);transition:background-color .6s ease,color .3s ease}
.d .cells span.w{color:#fff}
.d .cells span.o{color:#7A4300}
.d .dr{display:flex;flex-direction:column;min-height:0;padding:24px 20px;overflow-y:auto;background:var(--ml-bg);border-left:1px solid var(--ml-line)}
.d .al{display:flex;flex-direction:column;gap:12px;margin-top:12px}
.d .sg{display:flex;flex-direction:column;gap:12px;padding:15px;border-radius:16px;background:var(--ml-surface)}
.d .sg .top{display:flex;align-items:center;gap:11px}
.d .sg .ti{display:grid;place-items:center;flex:none;width:32px;height:32px;border-radius:10px;background:rgba(255,159,10,.14);color:#B25E00}
.d .sg.okc .ti{background:rgba(29,185,84,.12);color:#12893C}
.d .sg .top b{display:block;font-size:13.5px;font-weight:650}
.d .sg p b{font-weight:650;color:var(--ml-ink)}
.d .sg small{font-size:12px;color:var(--ml-muted)}
.d .sg p{font-size:12.5px;line-height:1.5;color:var(--ml-ink-2)}
.d .sg .btn{width:100%}
.d .sg .btn.done{background:rgba(29,185,84,.12);box-shadow:none;color:#12893C;cursor:default}
.d .av2{display:flex;flex-direction:column;gap:12px;margin-top:12px;list-style:none}
.d .av2 li{display:flex;align-items:center;gap:11px}
.d .av2 .av{width:30px;height:30px;font-size:10.5px}
.d .av2 div{flex:1;min-width:0}
.d .av2 b{display:block;font-size:13px;font-weight:600}
.d .av2 small{font-size:12px;color:var(--ml-muted)}
.d .av2 em{font-size:12px;font-style:normal;font-weight:650;font-variant-numeric:tabular-nums;color:#12893C}
@container scr (max-width: 760px){
  .d .split{grid-template-columns:minmax(0,1fr);overflow-y:auto;align-content:start}
  .d .main{overflow:visible;min-height:auto}
  .d .hd{flex-direction:column;align-items:stretch;padding:18px 16px 0}
  .d .wk{align-self:flex-start}
  .d .pg{flex:none;overflow:visible;padding:16px}
  .d .sm{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .sm .card:last-child{display:none}
  .d .th,.d .rw{grid-template-columns:32px minmax(0,1fr) minmax(0,1.2fr)}
  .d .th span:nth-child(4),.d .rw .cells{display:none}
  .d .tb{flex:none}
  .d .dr{border-left:0;border-top:1px solid var(--ml-line);overflow:visible}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 700) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };

      const people = [['Maya Reyes', 'Design lead', 7.2], ['Daniel Okafor', 'Engineer', 7.8], ['Aiko Tan', 'Account manager', 8.4], ['Hana Kim', 'Analyst', 6.6], ['Rafael Santos', 'Engineer', 7.0], ['Priya Nair', 'Designer', 5.8], ['Luis Ortega', 'Engineer', 9.1], ['Isabel Cruz', 'Producer', 7.5]];
      const days = ['Oct 6', 'Oct 7', 'Oct 8', 'Oct 9', 'Oct 10', 'Oct 13', 'Oct 14', 'Oct 15', 'Oct 16', 'Oct 17', 'Oct 20', 'Oct 21', 'Oct 22', 'Oct 23', 'Oct 24', 'Oct 27', 'Oct 28', 'Oct 29', 'Oct 30', 'Oct 31'];
      const gen = () => people.map((p, i) => days.map((_, d) => Math.max(0, Math.min(11, Math.round((p[2] + (((i * 7 + d * 3) % 5) - 2) * 0.8) * 2) / 2))));
      let H = gen(), start = 5;
      const CAP = 80;
      const lab = $('.wl'), rows = $('.rows');
      const ini = (n) => n.split(' ').map((w) => w[0]).join('');
      rows.innerHTML = people.map((p, i) => `<li><div class="rw in" style="--i:${i + 4}"><span class="av">${ini(p[0])}</span><div class="nm"><b>${p[0]}</b><small>${p[1]}</small></div><div class="cb"><div class="tk"><i class="b1"></i><i class="b2"></i></div><span class="hr"></span></div><div class="cells">${'<span></span>'.repeat(10)}</div></div></li>`).join('');
      const rw = $$('.rw');
      const book = (i) => H[i].slice(start, start + 10).reduce((a, b) => a + b, 0);
      const cellStyle = (el, h) => {
        el.textContent = h % 1 ? h.toFixed(1) : h;
        el.className = h > 8 ? 'o' : h >= 5.5 ? 'w' : '';
        el.style.background = h > 8 ? `rgba(255,159,10,${(0.34 + (h - 8) * 0.18).toFixed(2)})` : `rgba(255,68,51,${(0.05 + (h / 8) * 0.8).toFixed(2)})`;
      };
      const paint = (animate) => {
        const wd = days.slice(start, start + 10);
        lab.textContent = `${wd[0]} - ${wd[9]}`;
        $('.dh').innerHTML = ['M', 'T', 'W', 'T', 'F', 'M', 'T', 'W', 'T', 'F'].map((d) => `<span>${d}</span>`).join('');
        let tot = 0;
        people.forEach((p, i) => {
          const b = book(i), r = rw[i];
          tot += b;
          const bar = r.querySelector('.tk');
          const over = Math.max(0, b - CAP);
          bar.querySelector('.b1').style.setProperty('--s', (Math.min(b, CAP) / (CAP * 1.25)).toFixed(3));
          bar.querySelector('.b2').style.setProperty('--s', Math.min(1, over / (CAP * 0.25)).toFixed(3));
          const hr = r.querySelector('.hr');
          hr.innerHTML = `<b>${b % 1 ? b.toFixed(1) : b}h</b> of ${CAP}h` + (over ? ` (+${over % 1 ? over.toFixed(1) : over}h)` : '');
          hr.classList.toggle('ov', over > 0);
          [...r.querySelectorAll('.cells span')].forEach((c, d) => cellStyle(c, H[i][start + d]));
        });
        roll($('.s2'), Math.round(tot) + 'h');
        roll($('.s3'), Math.round((tot / (CAP * people.length)) * 100) + '%');
        // drawer: most overbooked and most available
        const ord = people.map((_, i) => i).sort((a, b) => book(b) - book(a));
        const top = ord[0], low = ord[ord.length - 1];
        const over = book(top) - CAP, spare = CAP - book(low);
        const move = Math.floor(Math.min(over, spare) * 2) / 2;
        const al = $('.al');
        if (over > 0 && move > 0) {
          al.innerHTML = `<div class="sg"><div class="top"><span class="ti">${'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>'}</span><div><b>${people[top][0]} is overbooked</b><small>${book(top)}h booked, ${over % 1 ? over.toFixed(1) : over}h over capacity</small></div></div><p>Move ${move}h of scheduled work to <b>${people[low][0]}</b>, who has ${spare % 1 ? spare.toFixed(1) : spare}h free.</p><button type="button" class="btn pri rb" data-a="${top}" data-b="${low}" data-m="${move}">Rebalance ${move}h</button></div>`;
        } else {
          al.innerHTML = `<div class="sg okc"><div class="top"><span class="ti">${'<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>'}</span><div><b>Everyone is within capacity</b><small>No one is over ${CAP}h in this window</small></div></div><button type="button" class="btn done" disabled>Nothing to rebalance</button></div>`;
        }
        $('.av2').innerHTML = ord.slice(-3).reverse().map((i) => `<li><span class="av">${ini(people[i][0])}</span><div><b>${people[i][0]}</b><small>${people[i][1]}</small></div><em>${CAP - book(i) > 0 ? (CAP - book(i)) + 'h free' : 'full'}</em></li>`).join('');
        if (animate) replay(app);
      };
      const rebalance = () => {
        const b = $('.rb');
        if (!b) return;
        const a = +b.dataset.a, c = +b.dataset.b;
        let left = +b.dataset.m;
        for (let d = start; d < start + 10 && left > 0; d++) {
          const take = Math.min(Math.max(0, H[a][d] - 8), left, Math.max(0, 8 - H[c][d]));
          H[a][d] -= take; H[c][d] += take; left -= take;
        }
        // any remainder spreads over the least-loaded days of the receiver, taken from the busiest days of the sender
        for (let d = start; d < start + 10 && left > 0; d++) {
          const take = Math.min(left, Math.max(0, H[a][d] - 6), Math.max(0, 10 - H[c][d]));
          H[a][d] -= take; H[c][d] += take; left -= take;
        }
        paint(false);
        const nb = $('.rb');
        if (nb) { nb.classList.add('done'); nb.textContent = 'Rebalanced'; }
      };
      const shift = (dir) => { const n = Math.max(0, Math.min(10, start + dir * 5)); if (n !== start) { start = n; paint(true); } };
      $$('.bd').forEach((b) => b.addEventListener('click', () => shift(+b.dataset.d)));
      $('.al').addEventListener('click', (e) => { if (e.target.closest('.rb')) rebalance(); });
      paint(false);

      (async () => {
        await wait(2000);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const rb = $('.rb');
          if (rb) await act(rb, () => rb.click());
          await wait(3000);
          await act($$('.bd')[1], () => shift(1));
          await wait(2800);
          await act($$('.bd')[0], () => shift(-1));
          await wait(1800);
          H = gen(); paint(true);
          await wait(1800);
        }
      })();
    },
    prompt: `Build a team workload screen: a main column plus a 288px right drawer (white, 1px left hairline), no sidebar. Header: an uppercase "Resourcing" label, a 26px title and a week stepper (previous icon button, a "Oct 13 - Oct 24" label, next icon button) in a hairline pill.

Main: 3 summary cards (team capacity, booked hours, utilization) and one table card. Each row is a person: avatar initials, name and role, a capacity bar and a 10-cell heat calendar (two working weeks, a small gap between weeks, weekday initials in the header). The bar is a track representing 125% of capacity with a thin dark marker at the 100% position; booked hours fill it in your accent color and anything above capacity continues past the marker in amber; the text shows "92h of 80h (+12h)" with the overage in amber. Each heat cell shows that day's hours and its background is your accent color with alpha proportional to hours/8; cells above 8h switch to an amber tint. Totals derive from the rows.

Drawer: "Needs attention" with a suggestion card (warning icon tile, "Luis Ortega is overbooked", hours over capacity, a sentence naming who has free hours and a primary "Rebalance 8h" button) and a "Most available" list (avatar, name, role, free hours in green).

Interaction: pressing Rebalance moves hours day by day from the overbooked person's days above 8h to the free person's days, bars animate with transform scaleX (800ms, cubic-bezier(.32,.72,0,1)), cells fade between colours (600ms background-color), the button turns into a green disabled "Rebalanced" state and the card switches to an all-clear state when nobody is over capacity. The week stepper shifts the window one week, re-rendering rows with an entrance (opacity and translateY(8px), 45ms stagger) and counting the totals.

Accessibility: stepper and rebalance are real buttons with labels, hours are always printed in text, focus rings, prefers-reduced-motion removes the entrance animation. Phone layout under 760px: drawer drops below the table, the heat cells are hidden, two summary cards. Plain HTML, CSS and JS, no libraries; React-friendly structure (WeekStepper, SummaryCards, WorkloadRow, HeatCells, AttentionDrawer).`,
  });

  // 10. Real-time ops monitor - status banner, live latency chart, uptime bars, event stream with an errors-only switch
  ML.add({
    id: 'app-dashboards-ops',
    cat: 'app-dashboards',
    title: 'Real-time ops monitor',
    sub: 'Live events, latency and an incident',
    html: `
<div class="app">
  <header class="bn">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Halden status</b></div>
    <span class="ban ok" role="status"><i></i><b>All systems operational</b></span>
    <span class="k clk mono">14:32:08 UTC</span>
    <label class="sw"><span>Errors only</span><input type="checkbox" class="eo" aria-label="Errors only"><i aria-hidden="true"></i></label>
  </header>
  <main class="pg">
    <div class="mg">
      <div class="lc">
        <section class="card lat in" style="--i:0">
          <div class="ch"><div><h2>API latency</h2><p class="k">Last 48 samples, milliseconds</p></div>
            <div class="nums"><div><p class="k"><i></i>p50</p><p class="v n50 num">112 ms</p></div><div><p class="k"><i class="b"></i>p95</p><p class="v n95 num">286 ms</p></div><div><p class="k">Requests</p><p class="v rq num">4,812/min</p></div></div></div>
          <div class="plot">
            <div class="gl" style="bottom:0"><s>0</s></div><div class="gl" style="bottom:25%"><s>150</s></div><div class="gl" style="bottom:50%"><s>300</s></div><div class="gl" style="bottom:75%"><s>450</s></div><div class="gl" style="bottom:100%"><s>600</s></div>
            <svg viewBox="0 0 600 180" preserveAspectRatio="none" aria-hidden="true"><path class="a50"/><path class="l95"/><path class="l50"/></svg>
            <span class="dot d95" aria-hidden="true"></span><span class="dot d50" aria-hidden="true"></span>
          </div>
        </section>
        <section class="card up in" style="--i:1">
          <div class="ch"><h2>Uptime, last 60 days</h2><span class="k">Each bar is one day</span></div>
          <ul class="sv"></ul>
        </section>
      </div>
      <section class="card ev in" style="--i:2">
        <div class="ch"><h2>Event stream</h2><span class="live"><i></i>Live</span></div>
        <ul class="es" aria-live="polite"></ul>
      </section>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .bn{display:flex;flex:none;align-items:center;gap:18px;height:62px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .ban{display:inline-flex;align-items:center;gap:9px;height:34px;padding:0 14px;border-radius:999px;font-size:13px;transition:background-color .4s ease,color .4s ease}
.d .ban b{font-weight:600}
.d .ban i{position:relative;width:8px;height:8px;border-radius:50%;background:currentColor}
.d .ban i::after{content:"";position:absolute;inset:0;border-radius:50%;background:currentColor;animation:dsh-ping 2s ease-out infinite}
.d .ban.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .ban.wn{background:rgba(255,159,10,.14);color:#B25E00}
.d .clk{margin-left:auto}
.d .sw{display:flex;align-items:center;gap:10px;font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer}
.d .sw input{position:absolute;opacity:0;pointer-events:none}
.d .sw i{position:relative;width:40px;height:24px;border-radius:99px;background:var(--ml-bar);transition:background-color .3s ease}
.d .sw i::after{content:"";position:absolute;top:2px;left:2px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform .45s var(--ml-spring)}
.d .sw input:checked + i{background:var(--ml-accent)}
.d .sw input:checked + i::after{transform:translateX(16px)}
.d .sw input:focus-visible + i{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .sw.press i{transform:scale(.94)}
.d .pg{padding:20px 28px 24px}
.d .mg{display:grid;flex:1;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:16px;min-height:0}
.d .lc{display:flex;flex-direction:column;gap:16px;min-height:0}
.d .lat,.d .up,.d .ev{display:flex;flex-direction:column;padding:18px 20px;min-height:0}
.d .lat{flex:1.15}.d .up{flex:1}
.d .ch{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .nums{display:flex;gap:22px}
.d .nums .k{display:flex;align-items:center;gap:6px;font-size:12px}
.d .nums .k i{width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .nums .k i.b{background:var(--ml-accent-2)}
.d .nums .v{margin-top:6px;font-size:19px;white-space:nowrap}
.d .plot{position:relative;flex:1;min-height:120px;margin:14px 0 0 34px}
.d .gl{position:absolute;left:0;right:0;border-top:1px solid var(--ml-line)}
.d .gl s{position:absolute;left:-34px;top:0;width:26px;transform:translateY(-50%);text-align:right;text-decoration:none;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .plot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.d .l95,.d .l50{fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.d .l95{stroke:var(--ml-accent-2)}
.d .l50{stroke:var(--ml-accent)}
.d .a50{fill:rgba(255,68,51,.07)}
.d .dot{position:absolute;right:0;width:10px;height:10px;margin:0 -5px -5px 0;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px #fff;transition:bottom .6s var(--ml-ease)}
.d .dot.d95{background:var(--ml-accent-2)}
.d .sv{display:flex;flex:1;flex-direction:column;justify-content:space-around;margin-top:10px;list-style:none}
.d .sv li{display:grid;grid-template-columns:132px minmax(0,1fr) 62px;align-items:center;gap:14px}
.d .sv .nm{display:flex;align-items:center;gap:9px;font-size:13px;font-weight:600}
.d .sv .nm i{width:8px;height:8px;border-radius:50%;background:#1DB954;transition:background-color .4s ease}
.d .sv .nm i.wn{background:#FF9F0A}
.d .tks{display:flex;gap:2px;height:26px}
.d .tks s{flex:1;border-radius:2px;background:var(--ml-accent-line);text-decoration:none;transition:background-color .4s ease}
.d .tks s.g{background:#FF9F0A}
.d .tks s.r{background:#FF3B30}
.d .sv b{font-size:12.5px;font-weight:650;text-align:right;font-variant-numeric:tabular-nums}
.d .live{display:inline-flex;align-items:center;gap:7px;height:24px;padding:0 10px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:600;color:#12893C}
.d .live i{position:relative;width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .live i::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:dsh-ping 2s ease-out infinite}
.d .es{position:relative;flex:1;min-height:200px;margin-top:10px;list-style:none;overflow:hidden}
.d .es li{position:absolute;left:0;right:0;top:0;display:grid;grid-template-columns:62px 50px minmax(0,1fr);align-items:center;gap:10px;height:40px;border-bottom:1px solid var(--ml-bar-2);font-size:12.5px;opacity:1;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .3s ease}
.d .es li.nw{opacity:0}
.d .es time{font:500 11.5px var(--ml-mono);color:var(--ml-muted)}
.d .es em{font-size:10.5px;font-style:normal;font-weight:700;letter-spacing:.04em;color:var(--ml-muted)}
.d .es em.w{color:#B25E00}
.d .es em.e{color:#D70015}
.d .es p{overflow:hidden;font-family:var(--ml-mono);font-size:12px;white-space:nowrap;text-overflow:ellipsis;color:var(--ml-ink-2)}
@container scr (max-width: 760px){
  .d .bn{gap:10px;padding:0 16px}
  .d .bn .brand b,.d .clk{display:none}
  .d .sw{margin-left:auto}
  .d .pg{padding:16px}
  .d .mg{flex:none;grid-template-columns:minmax(0,1fr)}
  .d .lat{min-height:300px}
  .d .nums{gap:14px}
  .d .nums > div:last-child{display:none}
  .d .sv li{grid-template-columns:118px minmax(0,1fr) 54px;gap:8px}
  .d .ev{min-height:640px}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 600) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)},${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)},${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
        }
        return d;
      };

      // services: 60 daily ticks (0 up, 1 degraded = 22 min, 2 down = 70 min)
      const svc = [['API gateway', [[41, 1]]], ['Web app', [[17, 1], [52, 1]]], ['Authentication', []], ['Payments', [[8, 1], [29, 1], [46, 1], [57, 1]]], ['Webhooks', [[12, 1], [33, 2], [49, 1]]]]
        .map(([n, ev]) => { const t = Array(60).fill(0); ev.forEach(([i, v]) => { t[i] = v; }); return { n, t, deg: false }; });
      const pct = (s) => (100 - (s.t.reduce((a, v) => a + (v === 1 ? 22 : v === 2 ? 70 : 0), 0) / 86400) * 100).toFixed(2) + '%';
      $('.sv').innerHTML = svc.map((s, i) => `<li><span class="nm"><i></i>${s.n}</span><div class="tks" role="img" aria-label="${s.n} uptime last 60 days">${s.t.map((v) => `<s class="${v === 1 ? 'g' : v === 2 ? 'r' : ''}"></s>`).join('')}</div><b></b></li>`).join('');
      const paintSvc = () => {
        $$('.sv li').forEach((li, i) => {
          li.querySelector('b').textContent = pct(svc[i]);
          li.querySelector('.nm i').classList.toggle('wn', svc[i].deg);
          const ticks = li.querySelectorAll('.tks s');
          const last = ticks[ticks.length - 1];
          last.className = svc[i].deg ? 'g' : svc[i].t[59] === 1 ? 'g' : svc[i].t[59] === 2 ? 'r' : '';
        });
        const bad = svc.filter((s) => s.deg).length;
        const ban = $('.ban');
        ban.classList.toggle('ok', !bad); ban.classList.toggle('wn', !!bad);
        ban.querySelector('b').textContent = bad ? `${bad} service degraded` : 'All systems operational';
      };

      const NP = 48;
      let p50 = [], p95 = [], spike = false;
      for (let i = 0; i < NP; i++) { p50.push(104 + Math.sin(i * 0.7) * 12 + ((i * 37) % 11)); p95.push(262 + Math.sin(i * 0.5) * 30 + ((i * 53) % 17)); }
      const draw = () => {
        const pts = (a) => a.map((v, i) => [(i / (NP - 1)) * 600, 180 - (Math.min(v, 600) / 600) * 180]);
        const a = pts(p50), b = pts(p95), d50 = curve(a);
        $('.l50').setAttribute('d', d50);
        $('.a50').setAttribute('d', `${d50} L600,180 L0,180 Z`);
        $('.l95').setAttribute('d', curve(b));
        $('.d95').style.bottom = `${(Math.min(p95[NP - 1], 600) / 600) * 100}%`;
        $('.d50').style.bottom = `${(Math.min(p50[NP - 1], 600) / 600) * 100}%`;
        roll($('.n50'), Math.round(p50[NP - 1]) + ' ms');
        roll($('.n95'), Math.round(p95[NP - 1]) + ' ms');
      };

      const es = $('.es'), rowH = 40, MAXR = 15;
      let clock = 14 * 3600 + 32 * 60 + 8, only = false;
      const hms = (s) => [Math.floor(s / 3600), Math.floor(s / 60) % 60, s % 60].map((n) => String(n).padStart(2, '0')).join(':');
      const tpl = [['INFO', 'POST /v1/invoices 201 in 84 ms'], ['INFO', 'GET /v1/clients 200 in 41 ms'], ['INFO', 'Deploy 4f2a91c rolled out to eu-west'], ['INFO', 'Job export-csv finished in 1.2 s'], ['WARN', 'Webhook retry 2 of 5 for fernway.io'], ['INFO', 'Cache warmed: 12,480 keys'], ['ERROR', 'Card processor timeout after 8 s'], ['INFO', 'POST /v1/payments 201 in 212 ms'], ['WARN', 'Slow query on invoices_by_client 640 ms'], ['INFO', 'Session refreshed for maya@halden.co']];
      let all = [['INFO', 'GET /v1/projects 200 in 38 ms'], ['WARN', 'Webhook retry 1 of 5 for northgate.co'], ['INFO', 'POST /v1/invoices 201 in 91 ms'], ['INFO', 'Job nightly-backup finished in 4.8 s'], ['ERROR', 'Card processor timeout after 8 s'], ['INFO', 'GET /v1/clients 200 in 44 ms'], ['INFO', 'Deploy 7c10be2 rolled out to us-east'], ['WARN', 'Slow query on invoices_by_client 720 ms'], ['INFO', 'POST /v1/payments 201 in 198 ms'], ['INFO', 'Session refreshed for tomas@brightline.co'], ['INFO', 'GET /v1/invoices 200 in 52 ms'], ['INFO', 'Cache warmed: 9,204 keys'], ['WARN', 'Webhook retry 3 of 5 for atlasfreight.com'], ['INFO', 'POST /v1/clients 201 in 77 ms'], ['INFO', 'Job digest-email finished in 2.1 s']]
        .map((e, i) => [hms(clock - 31 + i * 2), ...e]);
      const mk = (e) => { const li = document.createElement('li'); li.innerHTML = `<time>${e[0]}</time><em class="${e[1] === 'ERROR' ? 'e' : e[1] === 'WARN' ? 'w' : ''}">${e[1]}</em><p>${e[2]}</p>`; return li; };
      const place = () => [...es.children].forEach((li, i) => { li.style.transform = `translateY(${i * rowH}px)`; });
      const visible = () => all.slice().reverse().filter((e) => !only || e[1] !== 'INFO').slice(0, MAXR);
      const rebuild = () => { es.innerHTML = ''; visible().forEach((e) => es.appendChild(mk(e))); place(); };
      const push = (lv, msg) => {
        clock += 2;
        const e = [hms(clock), lv, msg];
        all.push(e);
        if (all.length > 60) all.shift();
        $('.clk').textContent = hms(clock) + ' UTC';
        if (only && lv === 'INFO') return;
        const li = mk(e);
        li.classList.add('nw');
        li.style.transform = `translateY(${-rowH}px)`;
        es.prepend(li);
        void li.offsetWidth;
        li.classList.remove('nw');
        place();
        [...es.children].slice(MAXR).forEach((x) => { x.style.opacity = 0; setTimeout(() => x.remove(), 400); });
      };

      const eo = $('.eo');
      eo.addEventListener('change', () => { only = eo.checked; rebuild(); });
      rebuild(); paintSvc(); draw();

      const bump = () => {
        const n50 = 100 + Math.random() * 28 + (spike ? 40 : 0), n95 = 248 + Math.random() * 72 + (spike ? 260 : 0);
        p50.shift(); p50.push(n50); p95.shift(); p95.push(n95);
        draw();
        roll($('.rq'), Math.round(4700 + Math.random() * 220).toLocaleString('en-US') + '/min');
      };
      (async () => {
        while (root.isConnected) {
          await wait(1500);
          bump();
          if (Math.random() < 0.75) { const t = tpl[Math.floor(Math.random() * tpl.length)]; push(t[0], t[1]); }
        }
      })();
      // an incident every ~13s: webhooks degrade, latency spikes, then it recovers
      (async () => {
        await wait(6500);
        while (root.isConnected) {
          svc[4].deg = true; spike = true; paintSvc();
          push('WARN', 'Webhooks delivery latency above 500 ms');
          await wait(5200);
          svc[4].deg = false; spike = false; paintSvc();
          push('INFO', 'Webhooks recovered, queue drained');
          await wait(9000);
        }
      })();
      (async () => {
        await wait(2400);
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const sw = $('.sw');
          await act(sw, () => { eo.checked = true; eo.dispatchEvent(new Event('change')); }, 0.5, 0.5);
          await wait(3800);
          await act(sw, () => { eo.checked = false; eo.dispatchEvent(new Event('change')); }, 0.5, 0.5);
          await wait(4200);
        }
      })();
    },
    prompt: `Build a real-time operations monitor with a slim top status bar and no sidebar. Status bar (62px, white, hairline): logo and "Halden status", a pill that reads "All systems operational" in green with a pinging dot (it turns amber and reads "1 service degraded" during an incident), a mono UTC clock and an "Errors only" switch (40x24 track, 20px knob that moves with transform and a spring).

Body grid (1.55fr / 1fr). Left column: (1) a latency card with p50, p95 and requests per minute figures (19px, tabular-nums), and a smooth two-line chart of the last 48 samples with a 0 to 600 ms axis, a soft fill under p50 and end dots; (2) an uptime card with 5 services (API gateway, Web app, Authentication, Payments, Webhooks), each row = status dot, name, a strip of 60 thin daily bars (blue = up, amber = degraded, red = outage) and the uptime percentage computed from the bars (degraded day = 22 minutes, outage day = 70 minutes of 1,440). Right column: an event stream card with a green Live pill and rows of mono time, a level tag (INFO grey, WARN amber, ERROR red) and a one-line message that truncates.

Behavior: every ~1.5s the chart takes a new sample (the lines are redrawn, the end dots move with a 600ms transition on bottom, figures count to the new value) and a new event row arrives: it is created above the list at translateY(-40px) with opacity 0, then all rows are moved to translateY(index * 40px) with a critically damped spring (587ms), the oldest row fades out. Every ~13s an incident hits one service: its dot and today's bar turn amber, the banner switches, the p95 line spikes, a WARN event is added; ~5s later it recovers. The Errors only switch rebuilds the stream with WARN and ERROR rows only.

Accessibility: the switch is a real checkbox with a label, uptime strips have role=img and aria-labels, the stream is a list with aria-live=polite, focus rings, prefers-reduced-motion disables the pinging dots. Phone layout under 760px: stack the cards, hide the clock and the requests figure. Plain HTML, CSS and JS, no libraries; React-friendly structure (StatusBar, LatencyChart, UptimeList, EventStream, ErrorsOnlySwitch).`,
  });

  // 11. Executive summary - big greeting header, goal rings, insight cards
  ML.add({
    id: 'app-dashboards-executive',
    cat: 'app-dashboards',
    title: 'Executive summary',
    sub: 'Goal rings refill, insights lift',
    html: `
<div class="app">
  <main class="pg">
    <header class="gh">
      <div><p class="cap">Wednesday, 14 October</p><h1 class="gt">Good morning, Maya.</h1><p class="gs">Halden is <b>3 points ahead</b> of plan for the year. Hiring is the one goal that needs you.</p></div>
      <div class="gr"><div class="seg" style="--n:3;--on:2" role="group" aria-label="Period"><span class="hl"></span><button type="button">Q4 to date</button><button type="button">Q3</button><button type="button" class="on">Year to date</button></div><button class="btn" type="button">${I(P.share, 15)}Share</button></div>
    </header>
    <section class="card rings nt in" style="--i:0"></section>
    <div class="ins">
      <article class="card ia big in" style="--i:5" tabindex="0">
        <div class="ih"><span class="ti">${I(P.up, 18)}</span><span class="dl">Pacing +3 pts</span></div>
        <h2>Revenue is ahead of plan</h2>
        <p>$5.46M booked through September, 78% of the $7.0M goal with 75% of the year gone.</p>
        <div class="mb"></div>
        <div class="ml"><span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span></div>
      </article>
      <article class="card ia in" style="--i:6" tabindex="0">
        <div class="ih"><span class="ti">${I(P.heart, 18)}</span><span class="dl">+4 pts</span></div>
        <h2>NPS hit a 12-month high</h2>
        <p>Score of 61 after the onboarding rework. Detractors dropped to 9%.</p>
        <div class="nb" role="img" aria-label="Promoters 70%, passives 21%, detractors 9%"><i style="flex:70 1 0"></i><i class="p" style="flex:21 1 0"></i><i class="de" style="flex:9 1 0"></i></div>
        <p class="nl"><span>70% promoters</span><span>21% passives</span><span>9% detractors</span></p>
        <svg class="sp" viewBox="0 0 200 44" preserveAspectRatio="none" aria-hidden="true"><path class="sl"/></svg>
      </article>
      <article class="card ia in" style="--i:7" tabindex="0">
        <div class="ih"><span class="ti wn">${I(P.alert, 18)}</span><span class="dl wn">Needs attention</span></div>
        <h2>Hiring is the main risk</h2>
        <p>4 of 18 roles are still open, 2 of them engineering. Average time to fill is 38 days.</p>
        <ul class="or"><li><b>Senior engineer</b><span>41 days open</span></li><li><b>Support lead</b><span>33 days open</span></li><li><b>Product designer</b><span>12 days open</span></li><li><b>Engineer</b><span>9 days open</span></li></ul>
        <div class="dots" aria-label="14 of 18 hired"></div>
      </article>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pg{padding:30px 32px 30px}
.d .gh{display:flex;align-items:flex-end;justify-content:space-between;gap:24px}
.d .gt{margin-top:8px;font-size:38px;line-height:1.05;letter-spacing:-.04em}
.d .gs{max-width:520px;margin-top:10px;font-size:14.5px;line-height:1.5;color:var(--ml-muted)}
.d .gs b{font-weight:600;color:var(--ml-ink)}
.d .gr{display:flex;align-items:center;gap:10px;flex:none}
.d .rings{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));padding:22px 8px}
.d .rings.nt .rp{transition:none}
.d .rg{display:flex;flex-direction:column;align-items:center;gap:14px;padding:0 12px;border-left:1px solid var(--ml-line);text-align:center}
.d .rg:first-child{border-left:0}
.d .rw{position:relative;width:min(100%,132px);aspect-ratio:1}
.d .rw svg{display:block;width:100%;height:100%;transform:rotate(-90deg)}
.d .rt,.d .rp{fill:none;stroke-width:10;stroke-linecap:round}
.d .rt{stroke:var(--ml-bar-2)}
.d .rp{stroke:var(--ml-accent);stroke-dasharray:100;stroke-dashoffset:var(--o,100);transition:stroke-dashoffset 1.1s var(--ml-ease)}
.d .rp.full{stroke:var(--ml-accent-ink)}
.d .rc{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:28px;font-weight:650;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .rg b{display:block;font-size:14px;font-weight:650}
.d .rg small{display:block;margin-top:3px;font-size:12.5px;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .ins{display:grid;flex:1;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr) minmax(0,1fr);gap:16px;min-height:230px}
.d .ia{position:relative;display:flex;flex-direction:column;gap:10px;padding:18px 20px;outline:0;transition:transform .5s var(--ml-spring),box-shadow .3s ease}
.d .ia:hover,.d .ia.hot{transform:translateY(-4px);box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow-lg)}
.d .ia:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .ih{display:flex;align-items:center;justify-content:space-between}
.d .ti{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ti.wn{background:rgba(255,159,10,.14);color:#B25E00}
.d .ia p{font-size:13px;line-height:1.5;color:var(--ml-muted)}
.d .mb{display:flex;flex:1;align-items:flex-end;gap:7px;min-height:60px;margin-top:4px}
.d .mb i{flex:1;border-radius:5px 5px 2px 2px;background:var(--ml-accent-line)}
.d .mb i:last-child{background:var(--ml-accent)}
.d .ml{display:flex;justify-content:space-between;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .nb{display:flex;gap:3px;height:10px;margin-top:6px}
.d .nb i{display:block;border-radius:4px;background:var(--ml-accent)}
.d .nb i.p{background:var(--ml-accent-line)}
.d .nb i.de{background:#FF9F0A}
.d .ia .nl{display:flex;justify-content:space-between;gap:6px;font-size:11px;color:var(--ml-muted)}
.d .or{margin-top:4px;list-style:none}
.d .or li{display:flex;justify-content:space-between;gap:8px;padding:8px 0;border-bottom:1px solid var(--ml-bar-2);font-size:12.5px}
.d .or b{font-weight:600}
.d .or span{color:var(--ml-muted)}
.d .sp{flex:1;width:100%;min-height:70px;margin-top:6px;overflow:visible}
.d .sl{fill:none;stroke:var(--ml-accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round;vector-effect:non-scaling-stroke}
.d .dots{display:flex;flex-wrap:wrap;gap:6px;margin-top:auto}
.d .dots i{width:16px;height:16px;border-radius:50%;background:var(--ml-accent)}
.d .dots i.o{background:none;box-shadow:inset 0 0 0 2px #FF9F0A}
@container scr (max-width: 760px){
  .d .pg{padding:20px 16px}
  .d .gh{flex-direction:column;align-items:stretch}
  .d .gt{font-size:30px}
  .d .gr .btn{display:none}
  .d .rings{grid-template-columns:repeat(2,minmax(0,1fr));row-gap:22px}
  .d .rg:nth-child(3){border-left:0}
  .d .ins{flex:none;grid-template-columns:minmax(0,1fr)}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 900) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const setSeg = (seg, i) => { seg.style.setProperty('--on', i); [...seg.querySelectorAll('button')].forEach((b, k) => b.classList.toggle('on', k === i)); };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)},${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)},${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
        }
        return d;
      };

      // [goal, [value, target, value label, target label]] per period: Q4 to date, Q3, year to date
      const goals = ['Revenue', 'Net promoter score', 'Hires', 'Product launches'];
      const periods = [
        [[0.41, 2.1, '$0.41M', '$2.1M'], [62, 65, '62', '65'], [2, 5, '2', '5'], [1, 2, '1', '2']],
        [[1.74, 1.8, '$1.74M', '$1.8M'], [58, 60, '58', '60'], [4, 4, '4', '4'], [2, 2, '2', '2']],
        [[5.46, 7.0, '$5.46M', '$7.0M'], [61, 70, '61', '70'], [14, 18, '14', '18'], [5, 6, '5', '6']],
      ];
      const sub = ['to date', 'last quarter', 'full-year goal'];
      const box = $('.rings'), seg = $('.seg');
      box.innerHTML = goals.map((g, i) => `<div class="rg in" style="--i:${i + 1}"><div class="rw"><svg viewBox="0 0 120 120" aria-hidden="true"><circle class="rt" cx="60" cy="60" r="50" pathLength="100"/><circle class="rp" cx="60" cy="60" r="50" pathLength="100"/></svg><span class="rc num">0%</span></div><div><b>${g}</b><small></small></div></div>`).join('');
      const paint = (p, animate) => {
        $$('.rg').forEach((el, i) => {
          const [v, t, vl, tl] = periods[p][i], pct = Math.min(100, Math.round((v / t) * 100));
          const ring = el.querySelector('.rp');
          ring.style.setProperty('--o', 100 - pct);
          ring.classList.toggle('full', pct >= 100);
          if (animate) roll(el.querySelector('.rc'), pct + '%');
          else el.querySelector('.rc').textContent = pct + '%';
          el.querySelector('small').textContent = `${vl} of ${tl}`;
        });
        $('.gs').innerHTML = p === 2 ? 'Halden is <b>3 points ahead</b> of plan for the year. Hiring is the one goal that needs you.' : p === 1 ? 'Q3 closed <b>on plan</b>. Revenue landed at 97% of target, everything else hit.' : 'Q4 is <b>two weeks in</b>. Revenue is ahead of pace, hiring is behind.';
        if (animate) replay(app);
      };
      // insight visuals (static data)
      const rev = [540, 562, 581, 598, 611, 624, 640, 652, 652];
      $('.mb').innerHTML = rev.map((v, i) => `<i class="gb" style="--i:${i};height:${(v / 700) * 100}%"></i>`).join('');
      const nps = [52, 54, 53, 55, 57, 56, 58, 59, 61];
      $('.sl').setAttribute('d', curve(nps.map((v, i) => [(i / 8) * 200, 44 - ((v - 48) / 16) * 40])));
      $('.dots').innerHTML = Array.from({ length: 18 }, (_, i) => `<i class="${i < 14 ? '' : 'o'}"></i>`).join('');
      $$('.seg button').forEach((b, k) => b.addEventListener('click', () => { setSeg(seg, k); paint(k, true); }));
      paint(2, false);
      void box.offsetWidth;
      box.classList.remove('nt');

      (async () => {
        await wait(1800);
        let q = 0;
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const k = [0, 1, 2][q % 3];
          await act($$('.seg button')[k], () => $$('.seg button')[k].click());
          await wait(2400);
          const card = $$('.ia')[[0, 2, 1][q % 3]];
          if (idle()) {
            await act(card, () => card.classList.add('hot'), 0.5, 0.45);
            await wait(1800);
            card.classList.remove('hot');
          }
          await wait(800);
          q++;
        }
      })();
    },
    prompt: `Build an executive summary page with no sidebar and a large friendly header. Header: a small uppercase date, a 38px greeting ("Good morning, Maya."), a one-line summary with the key fact in bold, and on the right a 3-option segmented control (Q4 to date, Q3, Year to date) plus a Share button.

Then one wide card with 4 goal rings in equal columns separated by hairlines (Revenue, Net promoter score, Hires, Product launches). Each ring is a 132px SVG: a track circle and a progress circle (r=50, pathLength="100", stroke-dasharray 100, stroke-dashoffset = 100 - percent, stroke-width 10, round caps, rotated -90deg) with the percent in the centre (28px, tabular-nums), and under it the goal name and "$5.46M of $7.0M". A ring that reaches 100% switches to a darker blue. Percentages derive from value / target.

Below, 3 insight cards of different weight (1.5fr / 1fr / 1fr): (1) a revenue insight with an icon tile, a green "Pacing +3 pts" pill, a headline, one sentence of context and a 9-month column chart (the monthly values must sum to the year-to-date figure); (2) an NPS insight with a smooth sparkline; (3) a hiring risk card with an amber "Needs attention" pill and 18 dots (14 filled, 4 amber outlines). Cards lift on hover or focus: translateY(-4px) with a spring (587ms) and a stronger shadow plus an accent hairline.

Interaction: switching the period animates every ring from its old offset to the new one (stroke-dashoffset transition 1.1s, cubic-bezier(.32,.72,0,1)), counts the percentages, rewrites the summary sentence and replays the entrance (opacity, translateY(8px), 45ms stagger). The segmented highlight slides with transform.

Accessibility: segmented buttons are real buttons, insight cards are focusable, rings print their numbers as text, focus rings, prefers-reduced-motion disables the entrance animations. Phone layout under 760px: rings two per row, insights stacked, Share hidden. Plain HTML, CSS and JS, no libraries; React-friendly structure (GreetingHeader, PeriodSwitch, GoalRing, InsightCard, MiniColumns, Sparkline).`,
  });

  // 12. Social media analytics - channel switcher sidebar, live followers, growth line, best-time heatmap, top posts
  ML.add({
    id: 'app-dashboards-social',
    cat: 'app-dashboards',
    title: 'Social media analytics',
    sub: 'Channel switch swaps every chart',
    html: `
<div class="app">
  <div class="split">
    <aside class="side">
      <div class="brand"><span class="mark">${I(P.mark, 16)}</span><b>Halden</b></div>
      <p class="cap sh">Channels</p>
      <nav class="cn" aria-label="Channels"><span class="pill" aria-hidden="true"></span></nav>
      <div class="sc"><p class="k">Total audience</p><p class="v ta num">95,640</p><span class="dl">+2,370 this month</span></div>
    </aside>
    <div class="main">
      <main class="pg">
        <header class="hd in" style="--i:0">
          <div><p class="cap">Corvid Coffee, social analytics</p><h1 class="ch1">Short video</h1></div>
          <span class="range">${I(P.cal, 15)}Sep 15 - Oct 14</span>
        </header>
        <div class="kp">
          <div class="card kc in" style="--i:1"><p class="k"><span class="lv"></span>Followers</p><p class="v fo num">48,210</p><span class="dl fd">+1,240</span></div>
          <div class="card kc in" style="--i:2"><p class="k">Reach</p><p class="v re num">312k</p><span class="dl rd">+9.4%</span></div>
          <div class="card kc in" style="--i:3"><p class="k">Engagement rate</p><p class="v en num">6.8%</p><span class="dl ed">+0.6 pts</span></div>
        </div>
        <div class="row">
          <section class="card gr in" style="--i:4">
            <div class="ch"><h2>Follower growth</h2><span class="k gt">Last 30 days</span></div>
            <div class="plot"><svg viewBox="0 0 600 150" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="ml-soc-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF4433" stop-opacity=".2"/><stop offset="1" stop-color="#FF4433" stop-opacity="0"/></linearGradient></defs><path class="ar fade" fill="url(#ml-soc-fill)"/><path class="lp wipe"/></svg><span class="dot" aria-hidden="true"><i></i></span><span class="mx"></span><span class="mn"></span></div>
            <div class="xs"><span>Sep 15</span><span>Sep 29</span><span>Oct 14</span></div>
          </section>
          <section class="card bt in" style="--i:5">
            <div class="ch"><h2>Best time to post</h2><span class="k bb"></span></div>
            <div class="hm"></div>
          </section>
        </div>
        <div class="tp">
          <p class="cap in" style="--i:6">Top posts this period</p>
          <div class="posts"></div>
        </div>
      </main>
    </div>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .split{display:grid;grid-template-columns:232px minmax(0,1fr);height:100%}
.d .side{display:flex;flex-direction:column;min-height:0;padding:20px 14px 16px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .side .brand{padding:0 6px 22px}
.d .sh{padding:0 8px 8px}
.d .cn{position:relative;display:flex;flex-direction:column;gap:4px}
.d .pill{position:absolute;top:0;left:0;right:0;height:60px;border-radius:12px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .cl{position:relative;z-index:1;display:flex;align-items:center;gap:11px;height:60px;padding:0 10px;border:0;border-radius:12px;background:none;text-align:left;cursor:pointer;transition:transform 90ms ease-out}
.d .cl.press{transform:scale(.97)}
.d .cl:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .cl .tt{display:grid;place-items:center;flex:none;width:36px;height:36px;border-radius:11px;background:var(--ml-surface);color:var(--ml-muted);transition:background-color .25s ease,color .25s ease}
.d .cl.on .tt{background:var(--ml-bg);color:var(--ml-accent)}
.d .cl span.tx{display:flex;flex-direction:column;min-width:0}
.d .cl b{font-size:13.5px;font-weight:600;color:var(--ml-ink-2)}
.d .cl.on b{color:var(--ml-accent-ink)}
.d .cl small{font-size:12px;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .sc{display:flex;flex-direction:column;align-items:flex-start;gap:9px;margin-top:auto;padding:14px;border-radius:14px;background:var(--ml-surface)}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .pg{padding:24px 28px 26px}
.d .hd{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .hd h1{margin-top:6px}
.d .range{display:inline-flex;align-items:center;gap:7px;height:34px;padding:0 13px;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap}
.d .kp{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.d .kc{display:flex;flex-direction:column;align-items:flex-start;gap:9px;padding:15px 18px}
.d .kc .k{display:flex;align-items:center;gap:7px}
.d .lv{position:relative;width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .lv::after{content:"";position:absolute;inset:0;border-radius:50%;background:#1DB954;animation:dsh-ping 2s ease-out infinite}
.d .row{display:grid;flex:1;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:16px;min-height:200px}
.d .gr,.d .bt{display:flex;flex-direction:column;padding:16px 20px;min-height:0}
.d .ch{display:flex;align-items:center;justify-content:space-between;gap:10px}
.d .plot{position:relative;flex:1;min-height:90px;margin:12px 0 0}
.d .plot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.d .lp{fill:none;stroke:var(--ml-accent);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}
.d .dot{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px #fff,0 2px 6px rgba(255,68,51,.4)}
.d .dot i{position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:dsh-ping 2.4s ease-out infinite}
.d .mx,.d .mn{position:absolute;left:0;padding:2px 7px;border-radius:999px;background:var(--ml-surface);font:600 10.5px/1.4 var(--ml-mono);color:var(--ml-muted)}
.d .mx{top:0}.d .mn{bottom:0}
.d .xs{display:flex;justify-content:space-between;margin-top:8px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .hm{display:grid;grid-template-columns:34px repeat(7,minmax(0,1fr));flex:1;gap:4px;margin-top:12px;align-content:space-between}
.d .hm .hh{display:flex;align-items:center;justify-content:center;font:600 10px var(--ml-mono);color:var(--ml-muted)}
.d .hm .hr{display:flex;align-items:center;font:600 10px var(--ml-mono);color:var(--ml-muted)}
.d .hm .c{min-height:18px;border-radius:5px}
.d .hm .c.top{box-shadow:0 0 0 2px var(--ml-ink)}
.d .tp{display:flex;flex-direction:column;gap:10px}
.d .posts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
.d .post{display:flex;align-items:stretch;gap:14px;padding:12px}
.d .pt{position:relative;flex:none;width:84px;height:84px;border-radius:12px;overflow:hidden}
.d .pt::before{content:"";position:absolute;right:16px;top:14px;width:15px;height:15px;border-radius:50%;background:#fff;opacity:.9}
.d .pt::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:rgba(255,255,255,.35);clip-path:polygon(0 70%,22% 30%,42% 62%,64% 16%,100% 66%,100% 100%,0 100%)}
.d .pi{display:flex;flex-direction:column;justify-content:space-between;min-width:0}
.d .pi b{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;font-size:13px;line-height:1.35;font-weight:600}
.d .pm{display:flex;gap:12px;font-size:12px;font-weight:600;color:var(--ml-ink-2);font-variant-numeric:tabular-nums}
.d .pm span{display:inline-flex;align-items:center;gap:4px}
.d .pm svg{color:var(--ml-accent)}
@container scr (max-width: 760px){
  .d .split{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .pg{padding:18px 16px}
  .d .range{display:none}
  .d .kp{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .kp .kc:last-child{display:none}
  .d .row{flex:none;grid-template-columns:minmax(0,1fr)}
  .d .gr{min-height:230px}
  .d .bt{min-height:250px}
  .d .posts{grid-template-columns:minmax(0,1fr)}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s), $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur'), app = $('.app');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => { for (let t = 0; t < ms && root.isConnected; ) { await sleep(80); if (!root.dataset.paused) t += 80; } };
      let until = 0;
      const idle = () => !root.dataset.paused && performance.now() > until;
      const touch = () => { until = performance.now() + 4000; cur.classList.add('off'); };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (!el || el.offsetParent === null) { cur.classList.add('off'); return false; }
        const o = root.getBoundingClientRect(), s = o.width / root.offsetWidth || 1, r = el.getBoundingClientRect();
        cur.classList.remove('off');
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        moveTo(el, fx, fy);
        await wait(780);
        if (!idle()) return false;
        cur.classList.add('press'); if (el) el.classList.add('press');
        await wait(140);
        cur.classList.remove('press'); if (el) el.classList.remove('press');
        fn();
        return true;
      };
      const roll = (el, to, ms = 700) => {
        const m = String(to).match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);
        if (!m) { el.textContent = to; return; }
        const end = parseFloat(m[2].replace(/,/g, '')), dec = (m[2].split('.')[1] || '').length;
        const from = parseFloat(el.textContent.replace(/[^\d.-]/g, '')) || 0, t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = m[1] + (from + (end - from) * (1 - Math.pow(1 - k, 3))).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const replay = (el) => { el.classList.remove('swap'); void el.offsetWidth; el.classList.add('swap'); };
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)},${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)},${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
        }
        return d;
      };
      const ic = (d) => `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const icons = {
        play: '<polygon points="6 3 20 12 6 21 6 3"/>',
        image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
        brief: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
        msg: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>',
        share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.59 13.51 6.83 3.98"/><path d="m15.41 6.51-8.82 3.98"/>',
      };
      const CH = [
        { n: 'Short video', ic: 'play', f: 48210, d: 1240, re: '312k', rd: '+9.4%', en: '6.8%', ed: '+0.6 pts', ps: 3, dw: [0.7, 0.75, 0.8, 0.95, 1, 0.9, 0.8],
          posts: [['Behind the counter at Corvid Coffee', 12400, 418, 960], ['Three latte art mistakes', 9800, 302, 771], ['Opening day recap', 7100, 190, 402]] },
        { n: 'Photo feed', ic: 'image', f: 31860, d: 640, re: '188k', rd: '+5.1%', en: '4.2%', ed: '+0.2 pts', ps: 1, dw: [0.8, 0.85, 0.9, 0.8, 0.75, 1, 0.95],
          posts: [['Fresh batch, 7 a.m.', 5200, 140, 88], ['Menu refresh for autumn', 4400, 121, 64], ['Team picks of the month', 3600, 97, 52]] },
        { n: 'Professional', ic: 'brief', f: 9450, d: 310, re: '64k', rd: '+3.8%', en: '3.1%', ed: '-0.1 pts', ps: 2, dw: [1, 0.95, 1, 0.9, 0.7, 0.3, 0.25],
          posts: [['Why we roast in small batches', 1800, 96, 210], ['Hiring: shift lead, Fernway Rd', 1200, 58, 175], ['Q3 sourcing report', 960, 41, 133]] },
        { n: 'Community', ic: 'users', f: 6120, d: 180, re: '22k', rd: '+12.0%', en: '9.4%', ed: '+1.3 pts', ps: 4, dw: [0.6, 0.65, 0.8, 0.85, 0.9, 1, 0.95],
          posts: [['Vote the next seasonal blend', 2100, 460, 120], ['Cupping night photos', 1600, 210, 64], ['Ask us anything, Friday', 1300, 380, 42]] },
      ];
      const tint = [['var(--ml-accent-soft)', 'var(--ml-accent-line)'], ['var(--ml-accent-line)', 'var(--ml-accent-2)'], ['var(--ml-accent-2)', 'var(--ml-accent)'], ['var(--ml-accent-soft)', 'var(--ml-accent-2)']];
      const slots = ['6 AM', '10 AM', '2 PM', '6 PM', '10 PM'], dn = ['M', 'T', 'W', 'T', 'F', 'S', 'S'], dnFull = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const n = (v) => v.toLocaleString('en-US');
      const cn = $('.cn'), pill = $('.pill');
      cn.insertAdjacentHTML('beforeend', CH.map((c, i) => `<button type="button" class="cl${i === 0 ? ' on' : ''}" data-i="${i}"><span class="tt">${ic(icons[c.ic]).replace('width="14" height="14"', 'width="18" height="18"')}</span><span class="tx"><b>${c.n}</b><small class="cf"></small></span></button>`).join(''));
      const btns = $$('.cl');
      let sel = 0, live = CH.map(() => 0);
      const fol = (i) => CH[i].f + live[i];
      const series = (i) => Array.from({ length: 12 }, (_, k) => CH[i].f - CH[i].d + (CH[i].d * k) / 11 + Math.sin(k * 1.7 + i) * CH[i].d * 0.06);
      const paintSide = () => {
        btns.forEach((b, i) => { b.querySelector('.cf').textContent = n(fol(i)) + ' followers'; });
        roll($('.ta'), n(CH.reduce((a, c, i) => a + fol(i), 0)), 500);
      };
      const paint = (animate) => {
        const c = CH[sel];
        $('.ch1').textContent = c.n;
        roll($('.fo'), n(fol(sel))); $('.fd').textContent = '+' + n(c.d + live[sel]);
        $('.re').textContent = c.re; $('.rd').textContent = c.rd; $('.en').textContent = c.en; $('.ed').textContent = c.ed;
        $('.ed').classList.toggle('dn', c.ed.startsWith('-'));
        const s = series(sel), lo = Math.min(...s), hi = Math.max(...s), pad = (hi - lo) * 0.18;
        const pts = s.map((v, k) => [(k / 11) * 600, 150 - ((v - (lo - pad)) / (hi - lo + pad * 2)) * 150]);
        const d = curve(pts);
        $('.lp').setAttribute('d', d);
        $('.ar').setAttribute('d', `${d} L600,150 L0,150 Z`);
        const last = pts[11];
        $('.dot').style.left = '100%'; $('.dot').style.top = `${(last[1] / 150) * 100}%`;
        $('.mx').textContent = n(Math.round(hi)); $('.mn').textContent = n(Math.round(lo));
        // best time heatmap
        let best = [0, 0, 0];
        let h = '<span></span>' + dn.map((d2) => `<span class="hh">${d2}</span>`).join('');
        slots.forEach((sl, r) => {
          h += `<span class="hr">${sl.replace(' ', '')}</span>`;
          dn.forEach((_, dd) => {
            const v = Math.exp(-Math.pow(r - c.ps + 0.6, 2) / 1.5) * c.dw[dd] * (0.9 + 0.1 * Math.cos(dd * 2.1 + sel));
            if (v > best[0]) best = [v, r, dd];
            h += `<span class="c in" data-v="${v}" style="--i:${r + dd};background:rgba(255,68,51,${(0.07 + v * 0.88).toFixed(2)})"></span>`;
          });
        });
        $('.hm').innerHTML = h;
        const cells = $$('.hm .c');
        cells[best[1] * 7 + best[2]].classList.add('top');
        $('.bb').textContent = `Best: ${dnFull[best[2]]} ${slots[best[1]]}`;
        $('.posts').innerHTML = c.posts.map((p, k) => `<article class="card post in" style="--i:${k + 6}"><span class="pt" style="background:linear-gradient(${150 + k * 25}deg,${tint[(sel + k) % 4][0]},${tint[(sel + k) % 4][1]})"></span><div class="pi"><b>${p[0]}</b><div class="pm"><span>${ic(icons.heart)}${p[1] >= 1000 ? (p[1] / 1000).toFixed(1) + 'k' : p[1]}</span><span>${ic(icons.msg)}${p[2]}</span><span>${ic(icons.share)}${p[3]}</span></div></div></article>`).join('');
        if (animate) replay(app);
      };
      const pick = (i) => {
        sel = i;
        btns.forEach((b, j) => b.classList.toggle('on', j === i));
        pill.style.transform = `translateY(${btns[i].offsetTop}px)`;
        paint(true);
      };
      btns.forEach((b, i) => b.addEventListener('click', () => pick(i)));
      paintSide(); paint(false);
      pill.style.transform = `translateY(${btns[0].offsetTop}px)`;

      // live: followers trickle in on every channel
      (async () => {
        while (root.isConnected) {
          await wait(2400);
          const i = Math.floor(Math.random() * CH.length);
          live[i] += 1 + Math.floor(Math.random() * 3);
          paintSide();
          if (i === sel) { roll($('.fo'), n(fol(sel)), 400); $('.fd').textContent = '+' + n(CH[sel].d + live[sel]); }
        }
      })();
      (async () => {
        await wait(1900);
        let q = 0;
        while (root.isConnected) {
          if (!idle()) { await wait(400); continue; }
          const i = [1, 2, 3, 0][q++ % 4];
          await act(btns[i], () => pick(i));
          await wait(4200);
        }
      })();
    },
    prompt: `Build a social media analytics dashboard with a channel-switcher sidebar. Left column (232px, white, hairline): logo, an uppercase "Channels" label, four channel rows (generic icon tile, channel name such as Short video, Photo feed, Professional, Community, and the live follower count) on ONE shared highlight pill that moves with transform: translateY(row offsetTop) and a critically damped spring (587ms), and a "Total audience" card at the bottom (the sum of all channels plus a delta pill).

Main: header (uppercase brand and "social analytics" label, 26px channel name, a date-range pill), 3 KPI cards (followers with a small pinging live dot, reach, engagement rate, each with a delta pill; red when negative), then a row (1.5fr / 1fr): a follower growth card (smooth area line over 12 weekly points, min and max tags, 3 date labels, an end dot with a pinging ring) and a "Best time to post" card, a heatmap of 5 time slots by 7 weekdays whose cell background is your accent color with alpha proportional to expected engagement, the best cell outlined in dark and named in the card header. Under it, a "Top posts" row of 3 compact cards: a drawn thumbnail (gradient, a sun circle, a soft mountain clip-path), a two-line title and likes, comments and shares with line icons. Do not use brand logos or brand names for the channels.

Behavior: picking a channel swaps all data: the line is revealed with a left-to-right clip-path (1.1s, cubic-bezier(.32,.72,0,1)), the area fades in, heat cells and post cards rise in with opacity and translateY(8px) at 45ms stagger, the follower count counts to the new value. In the background new followers arrive every ~2.4s on a random channel, bumping its count in the sidebar, the total and (if selected) the KPI.

Accessibility: channel rows are real buttons, numbers are always text, focus rings, prefers-reduced-motion disables the entrance and ping animations. Phone layout under 760px: hide the sidebar, KPIs two per row, stack the chart, heatmap and posts. Plain HTML, CSS and JS, no libraries; React-friendly structure (ChannelSwitcher, KpiCard, GrowthChart, PostingHeatmap, TopPostCard).`,
  });
})();
