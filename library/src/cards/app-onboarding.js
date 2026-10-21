(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    brief: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
    palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
    drive: '<line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    sheet: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M8 13h2"/><path d="M14 13h2"/><path d="M8 17h2"/><path d="M14 17h2"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    dash: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
    bulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    list: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
    sliders: '<line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
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
  const TICK = (s = 30) =>
    `<span class="okc"><svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg></span>`;
  // A primary button with the label / busy / done slots the flows share.
  const GO = (label, busy, done, cls = '') =>
    `<button type="button" class="go ${cls}"><span class="lbl">${label}</span><span class="busy">${busy}</span><span class="done">${I(P.check, 17, 2.6)}${done}</span></button>`;
  const STEPS = (n, t) =>
    `<div class="steps" role="img" aria-label="Step ${n} of ${t}"><b>Step ${n} of ${t}</b>${Array.from({ length: t }, (_, k) => `<i${k < n ? ' class="on"' : ''}></i>`).join('')}</div>`;
  const BAR = (n, t) =>
    `<header class="bar"><span class="brand"><span class="mark">${I(P.mark, 16)}</span>Halden</span>${STEPS(n, t)}<button type="button" class="lk skip">Skip for now</button></header>`;

  // Shared styling for all ten onboarding screens. Strings only.
  const BASE = `
.d h1{font-size:30px;line-height:1.12;font-weight:650;letter-spacing:-.035em}
.d .lead{margin-top:10px;font-size:15px;line-height:1.5;color:var(--ml-muted)}
.d .eyebrow{display:block;margin-bottom:8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .wrap{position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:radial-gradient(60% 50% at 8% 0%,#FFEBE8 0%,rgba(220,234,255,0) 62%),radial-gradient(50% 50% at 100% 100%,#E3EEFF 0%,rgba(227,238,255,0) 65%),var(--ml-surface)}
.d .bar{position:relative;z-index:2;display:grid;flex:none;grid-template-columns:1fr auto 1fr;align-items:center;gap:16px;padding:20px 32px}
.d .brand{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .mark{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .steps{display:flex;align-items:center;gap:6px;font-size:12.5px;color:var(--ml-muted)}
.d .steps b{margin-right:8px;font-weight:600}
.d .steps i{position:relative;width:30px;height:5px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .steps i::after{content:"";position:absolute;inset:0;background:var(--ml-accent);transform:scaleX(0);transform-origin:0 50%;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .steps i.on::after{transform:none}
.d .skip{justify-self:end}
.d .lk{padding:6px 2px;border:0;background:none;font:inherit;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .2s ease}
.d .lk:hover{color:var(--ml-ink)}
.d .lk:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px;border-radius:6px}
.d .stage{position:relative;z-index:1;display:flex;flex:1;flex-direction:column;min-height:0;padding:6px 28px 36px;overflow-y:auto;scrollbar-width:none}
.d .stage > *{width:100%;margin:auto}
.d .cardx{padding:34px 36px 30px;border-radius:22px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg)}
.d .fl{display:block;margin-top:18px;font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .field{position:relative;display:flex;align-items:center;gap:10px;height:46px;margin-top:8px;padding:0 8px 0 14px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .25s ease,background-color .25s ease,color .25s ease}
.d .field input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font:inherit;font-size:15px;color:var(--ml-ink)}
.d .field input::placeholder{color:#A1A1A6}
.d .field:focus-within,.d .field.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .go{position:relative;display:inline-grid;place-items:center;height:46px;padding:0 24px;border:0;border-radius:12px;overflow:hidden;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 10px 22px rgba(255,68,51,.24);font:inherit;font-size:14.5px;font-weight:600;white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out,background-color .3s ease,opacity .25s ease,box-shadow .25s ease}
.d .go:active,.d .go.press{transform:scale(.97)}
.d .go:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .go:disabled{opacity:.4;cursor:default;box-shadow:none}
.d .go > span{grid-area:1/1;display:inline-flex;align-items:center;gap:8px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .go .busy,.d .go .done{opacity:0;transform:translateY(10px)}
.d .go.loading .lbl,.d .go.ok .lbl,.d .go.ok .busy{opacity:0;transform:translateY(-10px)}
.d .go.loading .busy,.d .go.ok .done{opacity:1;transform:none}
.d .go.loading::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);background-size:220% 100%;animation:ob-sheen 1.1s linear infinite}
.d .go.ok{background:#1DB954;box-shadow:0 1px 2px rgba(29,185,84,.3),0 10px 22px rgba(29,185,84,.22)}
.d .ghost{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 18px;border:0;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);font:inherit;font-size:14px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease,opacity .2s ease}
.d .ghost:hover{background:var(--ml-surface)}
.d .ghost:active,.d .ghost.press{transform:scale(.97)}
.d .ghost:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .ghost:disabled{opacity:.4;cursor:default}
.d .acts{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:28px}
.d .okc{display:grid;place-items:center;width:64px;height:64px;border-radius:50%;background:rgba(29,185,84,.12);color:#12893C}
.d .on .okc path{stroke-dasharray:1;stroke-dashoffset:1;animation:ob-draw 650ms var(--ml-ease) 220ms forwards}
.d svg text{font-family:var(--ml-font)}
@keyframes ob-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes ob-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes ob-draw{to{stroke-dashoffset:0}}
@keyframes ob-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes ob-pop{0%{transform:scale(.7);opacity:0}60%{transform:scale(1.08);opacity:1}100%{transform:none}}
@keyframes ob-ping{0%{opacity:.5;transform:scale(1)}80%,100%{opacity:0;transform:scale(2.6)}}`;

  // Shared autoplay helpers are repeated inside every run() on purpose: run is serialized into the export on its own.

  ML.add({
    id: 'app-onboarding-welcome',
    cat: 'app-onboarding',
    title: 'Welcome carousel',
    sub: 'Illustrated slides, dots slide with you',
    html: `
<div class="wrap">
  <div class="split">
    <section class="show" tabindex="0" role="group" aria-roledescription="carousel" aria-label="Welcome to Halden">
      <div class="sl" data-i="0" role="group" aria-label="1 of 3">
        <svg viewBox="0 0 420 320" aria-hidden="true">
          <g class="sh fa"><rect x="50" y="46" width="320" height="208" rx="20" fill="#fff"/>
            <path d="M70 46H126V254H70A20 20 0 0 1 50 234V66A20 20 0 0 1 70 46Z" fill="#FAF6F2"/>
            <rect x="64" y="70" width="48" height="10" rx="5" fill="#FF4433"/><rect x="64" y="94" width="40" height="8" rx="4" fill="#E2D6CC"/><rect x="64" y="116" width="44" height="8" rx="4" fill="#E2D6CC"/><rect x="64" y="138" width="36" height="8" rx="4" fill="#E2D6CC"/>
            <rect x="146" y="70" width="104" height="12" rx="6" fill="#E2D6CC"/><rect x="292" y="66" width="58" height="20" rx="10" fill="#FF4433"/>
            <rect x="146" y="104" width="63" height="64" rx="12" fill="#FFF0EE"/><rect x="217" y="104" width="63" height="64" rx="12" fill="#EFE7E0"/><rect x="288" y="104" width="63" height="64" rx="12" fill="#EFE7E0"/>
            <rect x="156" y="118" width="26" height="8" rx="4" fill="#FF4433"/><rect x="156" y="136" width="42" height="14" rx="5" fill="#FFD0CA"/><rect x="227" y="118" width="24" height="8" rx="4" fill="#E2D6CC"/><rect x="227" y="136" width="38" height="14" rx="5" fill="#E2D6CC"/><rect x="298" y="118" width="24" height="8" rx="4" fill="#E2D6CC"/><rect x="298" y="136" width="30" height="14" rx="5" fill="#E2D6CC"/>
            <circle cx="156" cy="196" r="9" fill="#FFD0CA"/><rect x="174" y="188" width="120" height="8" rx="4" fill="#E2D6CC"/><rect x="174" y="202" width="70" height="6" rx="3" fill="#EFE7E0"/>
            <circle cx="156" cy="228" r="9" fill="#E2D6CC"/><rect x="174" y="220" width="100" height="8" rx="4" fill="#E2D6CC"/><rect x="174" y="234" width="60" height="6" rx="3" fill="#EFE7E0"/>
          </g>
          <g class="sh fb"><rect x="262" y="20" width="118" height="38" rx="19" fill="#fff"/><circle cx="283" cy="39" r="10" fill="#FFF0EE"/><path d="M279 39l3 3 6-6" fill="none" stroke="#FF4433" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="300" y="43.5" font-size="12.5" font-weight="650" fill="#1D1D1F">12 projects</text></g>
          <g class="sh fc"><rect x="22" y="212" width="112" height="54" rx="16" fill="#fff"/><circle cx="46" cy="239" r="12" fill="rgba(29,185,84,.14)"/><path d="M41 239l3.5 3.5 6.5-6.5" fill="none" stroke="#12893C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><text x="65" y="236" font-size="12.5" font-weight="650" fill="#1D1D1F">On track</text><text x="65" y="251" font-size="11" fill="#86868B">3 due this week</text></g>
        </svg>
      </div>
      <div class="sl" data-i="1" role="group" aria-label="2 of 3">
        <svg viewBox="0 0 420 320" aria-hidden="true">
          <g class="sh fa"><g transform="rotate(-4 210 165)"><rect x="112" y="34" width="204" height="256" rx="20" fill="#fff"/>
            <text x="134" y="68" font-size="10.5" font-weight="650" fill="#86868B" letter-spacing="1.2">INVOICE 1042</text>
            <text x="134" y="94" font-size="17" font-weight="650" fill="#1D1D1F">Northgate</text>
            <rect x="134" y="108" width="96" height="8" rx="4" fill="#EFE7E0"/>
            <rect x="134" y="140" width="110" height="9" rx="4.5" fill="#E2D6CC"/><rect x="268" y="140" width="30" height="9" rx="4.5" fill="#E2D6CC"/>
            <rect x="134" y="162" width="82" height="9" rx="4.5" fill="#E2D6CC"/><rect x="268" y="162" width="30" height="9" rx="4.5" fill="#E2D6CC"/>
            <rect x="134" y="192" width="164" height="1.5" fill="#E3EEFF"/>
            <text x="134" y="226" font-size="11" fill="#86868B">Total due</text>
            <text x="134" y="256" font-size="30" font-weight="650" fill="#1D1D1F" letter-spacing="-.8">$4,800</text>
            <rect x="238" y="238" width="60" height="22" rx="11" fill="rgba(29,185,84,.14)"/><text x="268" y="253" font-size="11.5" font-weight="650" fill="#12893C" text-anchor="middle">Paid</text></g></g>
          <g class="sh fb"><circle cx="324" cy="76" r="26" fill="#1DB954"/><path d="M313 76l8 8 14-15" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>
          <g class="sh fc"><circle cx="92" cy="232" r="24" fill="#FF4433"/><path d="M84 240l24-16-8 26-6-10Z" fill="#fff"/></g>
        </svg>
      </div>
      <div class="sl" data-i="2" role="group" aria-label="3 of 3">
        <svg viewBox="0 0 420 320" aria-hidden="true">
          <g fill="none" stroke="#FFD0CA" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="3 9" class="flow"><path d="M210 160L96 90"/><path d="M210 160L330 96"/><path d="M210 160L100 238"/><path d="M210 160L326 236"/></g>
          <circle class="ring" cx="210" cy="160" r="40" fill="#FF4433"/>
          <g class="sh fa"><circle cx="210" cy="160" r="42" fill="#FF4433"/><text x="210" y="167" font-size="20" font-weight="700" fill="#fff" text-anchor="middle">MR</text></g>
          <g class="sh fb"><circle cx="96" cy="90" r="30" fill="#fff"/><text x="96" y="95" font-size="14" font-weight="700" fill="#B3150F" text-anchor="middle">TL</text><circle cx="116" cy="70" r="6" fill="#1DB954" stroke="#fff" stroke-width="2.5"/></g>
          <g class="sh fc"><circle cx="330" cy="96" r="30" fill="#fff"/><text x="330" y="101" font-size="14" font-weight="700" fill="#B3150F" text-anchor="middle">AT</text><circle cx="350" cy="76" r="6" fill="#1DB954" stroke="#fff" stroke-width="2.5"/></g>
          <g class="sh fc"><circle cx="100" cy="238" r="30" fill="#fff"/><text x="100" y="243" font-size="14" font-weight="700" fill="#B3150F" text-anchor="middle">DO</text></g>
          <g class="sh fb"><circle cx="326" cy="236" r="30" fill="#fff"/><text x="326" y="241" font-size="14" font-weight="700" fill="#B3150F" text-anchor="middle">PN</text><circle cx="346" cy="216" r="6" fill="#1DB954" stroke="#fff" stroke-width="2.5"/></g>
        </svg>
      </div>
    </section>
    <main class="copy">
      <span class="brand"><span class="mark">${I(P.mark, 16)}</span>Halden</span>
      <div class="txs" aria-live="polite">
        <div class="tx" data-i="0"><p class="eyebrow">Welcome</p><h1>Every client, in one calm place</h1><p class="lead">Projects, invoices and conversations live together, so nothing slips between tools.</p></div>
        <div class="tx" data-i="1"><p class="eyebrow">Get paid</p><h1>Invoices that chase themselves</h1><p class="lead">Send one in two clicks. Halden reminds clients on its own and tells you the moment it lands.</p></div>
        <div class="tx" data-i="2"><p class="eyebrow">Together</p><h1>Bring the whole team along</h1><p class="lead">Invite teammates, share work and see who is on what, from your very first day.</p></div>
      </div>
      <div class="ctl">
        <div class="dots" role="group" aria-label="Choose a slide"><span class="dp" aria-hidden="true"></span><button type="button" class="dt" aria-label="Go to slide 1"></button><button type="button" class="dt" aria-label="Go to slide 2"></button><button type="button" class="dt" aria-label="Go to slide 3"></button></div>
        <div class="acts"><button type="button" class="ghost back">${I(P.back, 16)}Back</button>${GO('Next', 'Opening', 'Welcome in', 'next')}</div>
        <button type="button" class="lk skip">Skip intro</button>
      </div>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .split{display:grid;flex:1;grid-template-columns:minmax(0,54fr) minmax(0,46fr);min-height:0}
.d .show{position:relative;margin:14px 0 14px 14px;border-radius:22px;overflow:hidden;background:radial-gradient(90% 70% at 18% 0%,#fff 0%,rgba(255,255,255,0) 60%),linear-gradient(160deg,#FFEBE8 0%,#EEF4FF 55%,#E3EEFF 100%);box-shadow:inset 0 0 0 1px rgba(185,212,255,.6);touch-action:pan-y;cursor:grab;user-select:none;outline:0}
.d .show:focus-visible{box-shadow:inset 0 0 0 2px var(--ml-accent)}
.d .show.drag{cursor:grabbing}
.d .sl{position:absolute;inset:0;display:grid;place-items:center;padding:7%;transform:translateX(calc(var(--o,0) * 100% + var(--dx,0px)));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .show.drag .sl{transition:none}
.d .sl svg{width:100%;max-width:620px;height:auto;overflow:visible}
.d .sh{filter:drop-shadow(0 12px 22px rgba(10,70,170,.16))}
.d .fa{animation:ob-float 7s ease-in-out infinite}
.d .fb{animation:ob-float 6s ease-in-out -2s infinite}
.d .fc{animation:ob-float 8s ease-in-out -4s infinite}
.d .flow{animation:ob-flow 2.4s linear infinite}
.d .ring{transform-box:fill-box;transform-origin:center;animation:ob-ping 2.8s ease-out infinite}
.d .copy{position:relative;display:flex;flex-direction:column;justify-content:center;gap:40px;min-width:0;padding:84px 48px 40px 44px}
.d .copy > .brand{position:absolute;top:30px;left:44px}
.d .copy h1{font-size:36px}
.d .copy .lead{max-width:360px}
.d .txs{display:grid}
.d .tx{grid-area:1/1;opacity:0;transform:translateY(10px);pointer-events:none;transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .tx.on{opacity:1;transform:none;pointer-events:auto}
.d .dots{position:relative;display:flex;gap:10px;width:max-content;padding:6px 0}
.d .dt{position:relative;width:8px;height:8px;padding:0;border:0;border-radius:50%;background:var(--ml-bar);cursor:pointer}
.d .dt::before{content:"";position:absolute;inset:-8px}
.d .dp{position:absolute;left:0;top:6px;z-index:1;width:8px;height:8px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft);transform:translateX(calc(var(--n,0) * 18px));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .dt:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .copy .acts{width:100%;max-width:330px;margin-top:20px}
.d .copy .go{min-width:150px}
.d .back.off{opacity:0;pointer-events:none}
.d .copy .skip{margin-top:14px;justify-self:start;padding-left:0}
@keyframes ob-flow{to{stroke-dashoffset:-24}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .split{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,42%) minmax(0,1fr)}
  .d .show{margin:12px 12px 0}
  .d .copy{gap:22px;padding:22px 24px 24px}
  .d .copy > .brand{display:none}
  .d .copy h1{font-size:26px}
  .d .copy .lead{font-size:14px}
}
@media (prefers-reduced-motion: reduce){.d .fa,.d .fb,.d .fc,.d .flow,.d .ring{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      const slides = $$('.sl');
      const texts = $$('.tx');
      const dots = $$('.dt');
      const show = $('.show');
      const back = $('.back');
      const next = $('.next');
      let idx = 0;
      let leaving = false;
      const render = () => {
        slides.forEach((s, i) => {
          s.style.setProperty('--o', String(i - idx));
          s.toggleAttribute('inert', i !== idx);
        });
        texts.forEach((t, i) => t.classList.toggle('on', i === idx));
        dots.forEach((d, i) => d.setAttribute('aria-current', String(i === idx)));
        $('.dots').style.setProperty('--n', String(idx));
        back.classList.toggle('off', idx === 0);
        back.tabIndex = idx === 0 ? -1 : 0;
        next.querySelector('.lbl').textContent = idx === 2 ? 'Get started' : 'Next';
      };
      const go = (i) => {
        idx = Math.max(0, Math.min(2, i));
        render();
      };
      next.addEventListener('click', () => {
        if (leaving) return;
        if (idx < 2) return go(idx + 1);
        leaving = true;
        next.classList.add('loading');
        setTimeout(() => {
          next.classList.replace('loading', 'ok');
          setTimeout(() => {
            next.classList.remove('ok');
            leaving = false;
            go(0);
          }, 1500);
        }, 700);
      });
      back.addEventListener('click', () => go(idx - 1));
      dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
      show.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') go(idx + 1);
        if (e.key === 'ArrowLeft') go(idx - 1);
      });
      // swipe / drag the illustration
      let x0 = null;
      show.addEventListener('pointerdown', (e) => {
        x0 = e.clientX;
        show.setPointerCapture(e.pointerId);
      });
      show.addEventListener('pointermove', (e) => {
        if (x0 === null) return;
        const s = root.getBoundingClientRect().width / root.offsetWidth || 1;
        const dx = (e.clientX - x0) / s;
        if (Math.abs(dx) > 4) show.classList.add('drag');
        const lim = (idx === 0 && dx > 0) || (idx === 2 && dx < 0) ? 0.25 : 1;
        slides.forEach((sl) => sl.style.setProperty('--dx', dx * lim + 'px'));
      });
      const end = (e) => {
        if (x0 === null) return;
        const s = root.getBoundingClientRect().width / root.offsetWidth || 1;
        const dx = (e.clientX - x0) / s;
        x0 = null;
        show.classList.remove('drag');
        slides.forEach((sl) => sl.style.removeProperty('--dx'));
        if (dx < -50) go(idx + 1);
        else if (dx > 50) go(idx - 1);
      };
      show.addEventListener('pointerup', end);
      show.addEventListener('pointercancel', end);
      root.querySelectorAll('.skip').forEach((b) => b.addEventListener('click', () => go(2)));
      render();

      // Autoplay: a demo cursor taps Next, Back and Get started; any real input hands over for 4s.
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
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(cur.classList.contains('off') ? 120 : 760);
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
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || leaving) {
            await wait(400);
            continue;
          }
          const steps = [next, next, back, next, next];
          for (const el of steps) {
            if (!(await tap(el))) break;
            await wait(el === next && idx === 2 ? 3200 : 2100);
          }
          if (idx !== 0 && idle() && !leaving) go(0);
          await wait(1200);
        }
      })();
    },
    prompt: `Build a first-run welcome carousel for a SaaS app as a full-viewport split screen (min-height: 100dvh). Three slides, each with an illustration, a short eyebrow, a headline (5-7 words) and one supporting sentence.

Layout: CSS grid, columns 54% and 46%. Left is an illustration stage inset 14px with a 22px radius, a soft blue gradient and a faint inner hairline. Each slide is an inline SVG drawn from simple shapes in white, light blue and your accent color: (1) a mini app window with a sidebar, three tiles and a floating "12 projects" pill, (2) a tilted invoice sheet with a total and a green "Paid" pill plus a check badge, (3) a hub of team avatars joined by dashed lines to one central avatar with green online dots. Right column: logo top left, the active slide text vertically centered, then the controls: a dot indicator, a Back ghost button and a primary Next button (the last slide turns it into "Get started"), and a quiet "Skip intro" link.

Motion: slides sit in a track; each slide has transform: translateX(calc(var(--o) * 100% + var(--dx))) where --o is its offset from the current slide, with a critically damped spring (587ms linear() curve). The text blocks cross-fade with opacity and translateY(10px). One accent dot slides along the grey dots with transform: translateX(n * 18px) on the same spring. Illustration parts float on slow 6-8s loops, dashed connector lines flow with stroke-dashoffset.

Interaction: real swipe and mouse drag on the stage with pointer events (set --dx while dragging with transitions off, commit past 50px, resist at the ends), ArrowLeft and ArrowRight on the focused stage, clickable dots, Back hidden on slide one. Get started shows a sheen then a green "Welcome in" state.

Accessibility: role="group" with aria-roledescription="carousel", each slide labelled "1 of 3", inactive slides inert, aria-live on the text, aria-current on the dot, visible focus rings, prefers-reduced-motion stops the floating. Phone: stack the illustration (about 42% height) above the text. Plain HTML, CSS and JS, no libraries; React-friendly structure (Carousel, Slide, Dots, Controls).`,
  });

  ML.add({
    id: 'app-onboarding-workspace',
    cat: 'app-onboarding',
    title: 'Workspace setup',
    sub: 'Name types, slug and logo follow live',
    html: `
<div class="wrap">
  ${BAR(1, 5)}
  <div class="stage"><main class="main2">
    <section class="form" aria-labelledby="ml-ob-ws-h">
      <p class="eyebrow">Create your workspace</p>
      <h1 id="ml-ob-ws-h">What should we call it?</h1>
      <p class="lead">Use your company or team name. You can change it later in Settings.</p>
      <label class="fl" for="ml-ob-ws-name">Workspace name</label>
      <div class="field nf">${I(P.brief, 17)}<input id="ml-ob-ws-name" autocomplete="off" maxlength="32" value="Northgate Studio" placeholder="Your company"></div>
      <label class="fl" for="ml-ob-ws-url">Workspace URL</label>
      <div class="field uf"><span class="pre">halden.app/</span><input id="ml-ob-ws-url" readonly tabindex="-1" aria-live="polite"><span class="av2" aria-live="polite"><span class="avl"></span></span></div>
      <p class="fl">Logo color</p>
      <div class="sws" role="radiogroup" aria-label="Logo color">
        <button type="button" class="sw on" role="radio" aria-checked="true" aria-label="Blue" data-c="0" style="--a:#FF4433;--b:#FF7A3D"></button>
        <button type="button" class="sw" role="radio" aria-checked="false" aria-label="Sky" data-c="1" style="--a:#FF7A3D;--b:#8EC3FF"></button>
        <button type="button" class="sw" role="radio" aria-checked="false" aria-label="Deep blue" data-c="2" style="--a:#B3150F;--b:#2F7BFF"></button>
        <button type="button" class="sw" role="radio" aria-checked="false" aria-label="Slate blue" data-c="3" style="--a:#3D5A80;--b:#6F8DB5"></button>
      </div>
      <div class="acts"><button type="button" class="ghost">${I(P.back, 16)}Back</button>${GO('Create workspace', 'Creating', 'Workspace ready', 'cont')}</div>
    </section>
    <aside class="prev" aria-label="Preview">
      <p class="pk">Live preview</p>
      <div class="mini">
        <div class="msb">
          <div class="mw"><span class="logo"><b class="ini">ND</b></span><p><b class="wn">Northgate Studio</b><small class="wu">halden.app/northgate-studio</small></p></div>
          <i class="mi a"></i><i class="mi"></i><i class="mi"></i><i class="mi s"></i>
        </div>
        <div class="mpg"><i class="t"></i><div class="mt"><i></i><i></i><i></i></div><i class="r"></i><i class="r s"></i></div>
      </div>
      <p class="pn">This is how your team will see the sidebar.</p>
    </aside>
  </main></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .main2{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,.82fr);align-items:center;gap:40px;max-width:900px}
.d .pre{flex:none;font-size:14.5px;color:var(--ml-muted)}
.d .uf input{color:var(--ml-ink-2)}
.d .uf{padding-right:12px}
.d .av2{display:inline-flex;flex:none;align-items:center;gap:6px;font-size:12.5px;font-weight:600;white-space:nowrap}
.d .avl::before{content:"";display:inline-block;width:7px;height:7px;margin-right:6px;border-radius:50%;background:var(--ml-bar);vertical-align:1px}
.d .avl{display:inline-block;color:var(--ml-muted)}
.d .av2.ok .avl{color:#12893C;animation:ob-pop 420ms var(--ml-ease)}
.d .av2.ok .avl::before{background:#1DB954}
.d .av2.bad .avl{color:#D70015}
.d .av2.bad .avl::before{background:#FF3B30}
.d .av2.chk .avl::before{background:var(--ml-accent-2);animation:ob-blink .8s ease-in-out infinite}
.d .sws{display:flex;gap:12px;margin-top:10px}
.d .sw{position:relative;width:34px;height:34px;padding:0;border:0;border-radius:50%;background:linear-gradient(135deg,var(--a),var(--b));cursor:pointer;transition:transform .25s var(--ml-ease),box-shadow .25s ease}
.d .sw:hover{transform:scale(1.08)}
.d .sw.press{transform:scale(.92)}
.d .sw.on{box-shadow:0 0 0 3px #fff,0 0 0 5px var(--a)}
.d .sw:focus-visible{outline:2px solid var(--ml-accent);outline-offset:4px}
.d .form .acts{margin-top:32px}
.d .prev{position:relative;padding:22px;border-radius:22px;background:linear-gradient(180deg,rgba(255,255,255,.7),rgba(255,255,255,.35));box-shadow:inset 0 0 0 1px rgba(185,212,255,.55)}
.d .pk{margin-bottom:14px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .mini{display:grid;grid-template-columns:minmax(0,56%) minmax(0,1fr);height:250px;border-radius:16px;overflow:hidden;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow-lg)}
.d .msb{display:flex;flex-direction:column;gap:9px;padding:14px 12px;background:var(--ml-surface);border-right:1px solid var(--ml-line)}
.d .mw{display:flex;align-items:center;gap:9px;min-width:0;margin-bottom:8px}
.d .mw p{display:flex;flex-direction:column;min-width:0}
.d .wn{overflow:hidden;font-size:12.5px;font-weight:650;letter-spacing:-.01em;white-space:nowrap;text-overflow:ellipsis}
.d .wu{overflow:hidden;font-size:10.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .logo{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:11px;color:#fff;background:linear-gradient(135deg,var(--lg-a,#FF4433),var(--lg-b,#FF7A3D));box-shadow:0 1px 2px rgba(255,68,51,.25),0 8px 16px rgba(255,68,51,.18)}
.d .logo.pop{animation:ob-pop 380ms var(--ml-ease)}
.d .ini{font-size:13.5px;font-weight:700;letter-spacing:-.02em}
.d .mi{display:block;height:20px;border-radius:7px;background:var(--ml-bar-2)}
.d .mi.a{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .mi.s{width:60%}
.d .mpg{display:flex;flex-direction:column;gap:10px;padding:16px 14px}
.d .mpg .t{display:block;width:55%;height:12px;border-radius:6px;background:var(--ml-bar)}
.d .mt{display:grid;grid-template-columns:repeat(3,1fr);gap:7px}
.d .mt i{display:block;height:46px;border-radius:9px;background:var(--ml-bar-2)}
.d .mt i:first-child{background:var(--ml-accent-soft)}
.d .mpg .r{display:block;height:14px;border-radius:7px;background:var(--ml-bar-2)}
.d .mpg .r.s{width:70%}
.d .pn{margin-top:14px;font-size:12.5px;color:var(--ml-muted)}
@keyframes ob-blink{50%{opacity:.3}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{grid-template-columns:1fr auto;padding:16px 20px}
  .d .steps b{display:none}
  .d .steps{grid-column:2;grid-row:1}
  .d .skip{display:none}
  .d .stage{padding:0 18px 28px}
  .d .main2{grid-template-columns:minmax(0,1fr);gap:22px}
  .d h1{font-size:26px}
  .d .prev{display:none}
  .d .acts .go{padding:0 16px}
}
@media (prefers-reduced-motion: reduce){.d .av2.chk .avl::before{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      const name = $('#ml-ob-ws-name');
      const url = $('#ml-ob-ws-url');
      const av = $('.av2');
      const avl = $('.avl');
      const logo = $('.logo');
      const cont = $('.cont');
      const sws = $$('.sw');
      let timer = 0;
      let busy = false;
      const taken = ['halden', 'admin', 'app'];
      const slug = (v) => v.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 24).replace(/-+$/, '');
      const initials = (v) => {
        const w = v.replace(/[^A-Za-z0-9 ]/g, ' ').split(' ').filter(Boolean);
        if (!w.length) return '?';
        return (w.length > 1 ? w[0][0] + w[1][0] : w[0].slice(0, 2)).toUpperCase();
      };
      const state = (cls, txt) => {
        av.className = 'av2 ' + cls;
        avl.textContent = txt;
      };
      let lastIni = '';
      const update = () => {
        const v = name.value.trim();
        const s = slug(v);
        url.value = s || 'your-workspace';
        $('.wn').textContent = v || 'Your workspace';
        $('.wu').textContent = 'halden.app/' + (s || 'your-workspace');
        const ini = initials(v);
        $('.ini').textContent = ini;
        if (ini !== lastIni) {
          logo.classList.remove('pop');
          void logo.offsetWidth;
          logo.classList.add('pop');
          lastIni = ini;
        }
        clearTimeout(timer);
        if (!s) {
          state('', '');
          cont.disabled = true;
          return;
        }
        state('chk', 'Checking');
        cont.disabled = true;
        timer = setTimeout(() => {
          const free = !taken.includes(s);
          state(free ? 'ok' : 'bad', free ? 'Available' : 'Taken');
          cont.disabled = !free;
        }, 500);
      };
      name.addEventListener('input', update);
      sws.forEach((b) =>
        b.addEventListener('click', () => {
          sws.forEach((o) => {
            o.classList.toggle('on', o === b);
            o.setAttribute('aria-checked', String(o === b));
          });
          logo.style.setProperty('--lg-a', b.style.getPropertyValue('--a'));
          logo.style.setProperty('--lg-b', b.style.getPropertyValue('--b'));
          logo.classList.remove('pop');
          void logo.offsetWidth;
          logo.classList.add('pop');
        }),
      );
      cont.addEventListener('click', () => {
        if (busy || cont.disabled) return;
        busy = true;
        cont.classList.add('loading');
        setTimeout(() => {
          cont.classList.replace('loading', 'ok');
          setTimeout(() => {
            cont.classList.remove('ok');
            busy = false;
          }, 1700);
        }, 1000);
      });
      update();
      clearTimeout(timer);
      state('ok', 'Available');
      cont.disabled = false;

      // Autoplay: type a workspace name, pick a logo color, create it; any real input hands over for 4s.
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
        $$('.is-auto').forEach((n) => n.classList.remove('is-auto'));
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
        await wait(cur.classList.contains('off') ? 120 : 760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      const type = async (input, text) => {
        input.closest('.field').classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          input.value += ch;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(60 + Math.random() * 60);
        }
        input.closest('.field').classList.remove('is-auto');
        return true;
      };
      const names = ['Kestrel & Co', 'Corvid Coffee', 'Fernway Health'];
      let round = 0;
      cur.style.transform = 'translate(300px,300px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          cur.classList.toggle('off', !moveTo($('.nf'), 0.7));
          await wait(800);
          name.value = '';
          update();
          if (!(await type(name, names[round % names.length]))) continue;
          await wait(900);
          if (!(await tap(sws[1 + (round % 3)]))) continue;
          await wait(600);
          if (!(await tap(cont, 0.55))) continue;
          round++;
          await wait(4200);
        }
      })();
    },
    prompt: `Build the "name your workspace" step of a SaaS onboarding flow, full viewport (min-height: 100dvh), calm and spacious.

Layout: a top bar with the logo on the left, a step indicator in the middle ("Step 1 of 5" plus five 30px by 5px segments where finished ones fill with your accent color via transform: scaleX on a pseudo-element) and a quiet "Skip for now" link on the right. Below it a vertically centered two-column area (max-width 900px, gap 40px): a form column and a live preview card.

Form column: eyebrow, a big heading ("What should we call it?"), one muted sentence, then a "Workspace name" input (46px, leading icon, soft grey fill, accent ring on focus), a read-only "Workspace URL" field showing the fixed prefix "halden.app/" and the generated slug with an availability status on the right, and a row of four logo color swatches (radio buttons, selected one gets a white gap ring). Footer: ghost Back button and a primary "Create workspace" button.

Behavior: on every input event derive the slug (lowercase, non-alphanumerics to single hyphens, trim hyphens, max 24 chars) and the initials (first letters of the first two words, or the first two letters of one word, uppercase; "?" when empty). After a 500ms debounce show "Checking" (blinking dot), then green "Available" with a pop, or red "Taken" for reserved slugs like halden or admin; Create workspace is disabled until the slug is available or while empty. Submit shows a sheen and the label slides to a green "Workspace ready".

Preview: a mini app window with a sidebar header holding a 36px gradient logo tile with the initials, the workspace name and its URL, a few skeleton nav bars and page tiles. The logo tile pops (scale .7 to 1.08 to 1, 380ms) when initials or color change. Accessibility: labels for every field, aria-live on the slug and status, radiogroup for swatches. Phone: hide the preview and stack. Plain HTML, CSS and JS, no libraries; React-friendly structure (OnboardingShell, WorkspaceForm, SlugField, WorkspacePreview).`,
  });

  ML.add({
    id: 'app-onboarding-role',
    cat: 'app-onboarding',
    title: 'Role and goals picker',
    sub: 'Cards select, Continue wakes up',
    html: `
<div class="wrap">
  ${BAR(2, 5)}
  <div class="stage"><main class="cardx wide" aria-labelledby="ml-ob-role-h">
    <p class="eyebrow">Tell us about you</p>
    <h1 id="ml-ob-role-h">What describes you best?</h1>
    <p class="lead">We will set up your first projects and templates around it.</p>
    <div class="roles" role="radiogroup" aria-label="Your role"></div>
    <div class="gh"><p class="gt">What do you want to get done first?</p><span class="cnt" aria-live="polite"></span></div>
    <div class="goals"></div>
    <div class="acts"><button type="button" class="ghost">${I(P.back, 16)}Back</button>${GO('Continue', 'Saving', 'Saved', 'cont')}</div>
  </main></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wide{max-width:800px}
.d .roles{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px;margin-top:22px}
.d .role{display:flex;flex-direction:column;align-items:center;gap:9px;padding:15px 6px 13px;border:0;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:inherit;font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .25s ease,box-shadow .25s ease,color .25s ease,transform 90ms ease-out}
.d .role svg{color:var(--ml-muted);transition:color .25s ease}
.d .role:hover{background:var(--ml-bar-2)}
.d .role.press{transform:scale(.96)}
.d .role[aria-checked=true]{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent);color:var(--ml-accent-ink)}
.d .role[aria-checked=true] svg{color:var(--ml-accent)}
.d .role:focus-visible,.d .goal:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .gh{display:flex;align-items:baseline;justify-content:space-between;margin-top:26px}
.d .gt{font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .cnt{font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
.d .goals{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px;margin-top:12px}
.d .goal{position:relative;display:flex;align-items:flex-start;gap:12px;padding:15px 40px 15px 14px;border:0;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);text-align:left;font:inherit;color:var(--ml-ink);cursor:pointer;transition:background-color .25s ease,box-shadow .25s ease,opacity .25s ease,transform 90ms ease-out}
.d .goal:hover{box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow)}
.d .goal.press{transform:scale(.97)}
.d .goal[aria-pressed=true]{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .goal.dim{opacity:.45}
.d .gi{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent);transition:background-color .25s ease,color .25s ease}
.d .goal[aria-pressed=true] .gi{background:var(--ml-accent);color:#fff}
.d .goal b{display:block;font-size:14px;font-weight:600;letter-spacing:-.01em}
.d .goal small{display:block;margin-top:3px;font-size:12px;line-height:1.35;color:var(--ml-muted)}
.d .tk{position:absolute;top:12px;right:12px;display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .2s ease,box-shadow .2s ease}
.d .tk svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .goal[aria-pressed=true] .tk{background:var(--ml-accent);box-shadow:none}
.d .goal[aria-pressed=true] .tk svg{opacity:1;transform:none}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{grid-template-columns:1fr auto;padding:16px 20px}
  .d .steps b,.d .skip{display:none}
  .d .stage{padding:0 14px 24px}
  .d .cardx{padding:24px 18px 20px}
  .d h1{font-size:25px}
  .d .roles{grid-template-columns:repeat(3,minmax(0,1fr))}
  .d .goals{grid-template-columns:minmax(0,1fr)}
}`,
    run: (root) => {
      const roles = [['Founder', 'flag'], ['Designer', 'palette'], ['Project lead', 'brief'], ['Finance', 'coins'], ['Developer', 'code']];
      const goals = [
        ['Track client projects', 'Status, tasks and deadlines in one view', 'folder'],
        ['Send and collect invoices', 'Get paid faster with reminders', 'receipt'],
        ['Manage my team', 'Workloads, roles and time off', 'users'],
        ['Share files with clients', 'One tidy portal per client', 'upload'],
        ['Report on results', 'Weekly numbers without a spreadsheet', 'chart'],
        ['Automate reminders', 'Let routine nudges send themselves', 'bolt'],
      ];
      const ICONS = {
        flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" x2="4" y1="22" y2="15"/>',
        palette: '<circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
        brief: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
        coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/>',
        code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
        folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
        receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>',
        chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
        bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
        check: '<path d="M20 6 9 17l-5-5"/>',
      };
      const ic = (k, s, w = 2) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>`;
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      $('.roles').innerHTML = roles.map(([n, k]) => `<button type="button" class="role" role="radio" aria-checked="false">${ic(k, 22)}<span>${n}</span></button>`).join('');
      $('.goals').innerHTML = goals
        .map(([t, s, k]) => `<button type="button" class="goal" aria-pressed="false"><span class="gi">${ic(k, 19)}</span><span><b>${t}</b><small>${s}</small></span><span class="tk">${ic('check', 12, 3)}</span></button>`)
        .join('');
      const roleEls = $$('.role');
      const goalEls = $$('.goal');
      const cont = $('.cont');
      let busy = false;
      let role = 2;
      const picked = new Set([0]);
      const render = () => {
        roleEls.forEach((b, i) => {
          b.setAttribute('aria-checked', String(i === role));
          b.tabIndex = i === role ? 0 : -1;
        });
        goalEls.forEach((b, i) => {
          const on = picked.has(i);
          b.setAttribute('aria-pressed', String(on));
          b.classList.toggle('dim', !on && picked.size >= 3);
        });
        $('.cnt').textContent = picked.size + ' of 3 picked';
        cont.disabled = picked.size === 0 || busy;
      };
      roleEls.forEach((b, i) => b.addEventListener('click', () => ((role = i), render())));
      goalEls.forEach((b, i) =>
        b.addEventListener('click', () => {
          if (picked.has(i)) picked.delete(i);
          else if (picked.size < 3) picked.add(i);
          render();
        }),
      );
      cont.addEventListener('click', () => {
        if (busy || cont.disabled) return;
        busy = true;
        cont.classList.add('loading');
        setTimeout(() => {
          cont.classList.replace('loading', 'ok');
          setTimeout(() => {
            cont.classList.remove('ok');
            busy = false;
            render();
          }, 1600);
        }, 900);
      });
      render();

      // Autoplay: change role, deselect and pick goals, press Continue; any real input hands over for 4s.
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
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(cur.classList.contains('off') ? 120 : 760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(820px,560px)';
      const plan = [
        [goalEls, 0],
        [roleEls, 1],
        [goalEls, 1],
        [goalEls, 3],
        [goalEls, 4],
        [[cont], 0],
      ];
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          role = 2;
          picked.clear();
          picked.add(0);
          render();
          for (const [list, i] of plan) {
            if (!(await tap(list[i], 0.5, 0.5))) break;
            await wait(list === goalEls || list === roleEls ? 650 : 3600);
          }
          await wait(800);
        }
      })();
    },
    prompt: `Build a "tell us about you" onboarding step, full viewport (min-height: 100dvh), page background a soft blue-white gradient. Keep the one-step-per-screen feel: a top bar with the logo, a step indicator ("Step 2 of 5" and five 30px by 5px segments, finished ones filled with your accent) and a quiet "Skip for now" link, then one vertically centered white card (max-width 800px, 22px radius, layered soft shadow).

Card content: eyebrow, a 30px heading "What describes you best?", one muted sentence. A role row of five equal selectable tiles (icon over label: Founder, Designer, Project lead, Finance, Developer) that works as a radiogroup (role="radio", aria-checked, arrow-key roving tabindex); the selected tile gets a light accent fill and a 1.5px accent ring. Then "What do you want to get done first?" with a live count ("1 of 3 picked") and a 3-column grid of six goal cards (38px icon tile, title, one-line description, a 20px check circle at the top right). Goal cards are toggle buttons (aria-pressed); allow at most 3, and once 3 are picked dim the others to 45% opacity. Footer: ghost Back and primary Continue.

Behavior: Continue is disabled until at least one goal is picked and its opacity eases to 1 when it unlocks. Pressing it shows a light sheen with "Saving", then a green "Saved". Selected goals turn their icon tile solid accent; the check circle fills and its tick scales in with a slight overshoot (400ms bounce curve). Press feedback is transform: scale(.97) at 90ms; everything else eases color and box-shadow over 250ms; never animate layout.

Accessibility: visible focus rings, readable counts via aria-live. Phone: roles become 3 columns, goals one column, the step label and Skip hide. Plain HTML, CSS and JS, no libraries; React-friendly structure (OnboardingShell, RoleTiles, GoalCard, StepFooter).`,
  });

  ML.add({
    id: 'app-onboarding-plan',
    cat: 'app-onboarding',
    title: 'Choose a plan',
    sub: 'Toggle flips prices, the trial note follows',
    html: `
<div class="wrap">
  ${BAR(3, 5)}
  <div class="stage"><main class="col" aria-labelledby="ml-ob-plan-h">
    <div class="hd">
      <h1 id="ml-ob-plan-h">Choose your plan</h1>
      <p class="lead">Try everything free for 14 days. No card needed to start.</p>
      <div class="seg" role="radiogroup" aria-label="Billing period"><span class="thumb" aria-hidden="true"></span><button type="button" role="radio" aria-checked="true" data-b="m">Monthly</button><button type="button" role="radio" aria-checked="false" data-b="y">Yearly<em>Save 17%</em></button></div>
    </div>
    <div class="plans" role="radiogroup" aria-label="Plan"></div>
    <div class="foot">
      <p class="trial">${I(P.cal, 18)}<span>Free until <b>Wed, 28 Oct 2026</b>, then <b class="tp"></b>. Cancel anytime.</span></p>
      ${GO('Start free trial', 'Starting', 'Trial started', 'cont')}
    </div>
  </main></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .col{display:flex;flex-direction:column;align-items:center;max-width:900px}
.d .hd{display:flex;flex-direction:column;align-items:center;text-align:center}
.d .hd .lead{margin-top:8px}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));width:280px;margin-top:20px;padding:4px;border-radius:13px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04)}
.d .seg button{position:relative;z-index:1;display:inline-flex;align-items:center;justify-content:center;gap:7px;height:38px;border:0;background:none;font:inherit;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .25s ease,transform 90ms ease-out}
.d .seg button[aria-checked=true]{color:var(--ml-ink)}
.d .seg button.press{transform:scale(.96)}
.d .seg em{padding:3px 6px;border-radius:99px;background:rgba(29,185,84,.12);font-size:11px;font-style:normal;font-weight:650;color:#12893C}
.d .seg button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:9px}
.d .thumb{position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:10px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .seg.yr .thumb{transform:translateX(100%)}
.d .plans{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px;width:100%;margin-top:28px}
.d .plan{position:relative;display:flex;flex-direction:column;padding:22px 22px 20px;border:0;border-radius:20px;background:var(--ml-bg);text-align:left;font:inherit;color:var(--ml-ink);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow);cursor:pointer;transition:box-shadow .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .plan:hover{transform:translateY(-3px)}
.d .plan.press{transform:scale(.98)}
.d .plan[aria-checked=true]{box-shadow:inset 0 0 0 2px var(--ml-accent),0 2px 4px rgba(255,68,51,.08),0 18px 38px rgba(255,68,51,.14)}
.d .plan:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .pop{position:absolute;top:-11px;left:22px;padding:4px 10px;border-radius:99px;background:var(--ml-grad);font-size:11px;font-weight:650;color:#fff;box-shadow:0 4px 10px rgba(255,68,51,.28)}
.d .pn{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .pd{margin-top:3px;font-size:12.5px;color:var(--ml-muted)}
.d .pr{display:flex;align-items:baseline;gap:2px;margin-top:18px;font-variant-numeric:tabular-nums}
.d .pr .c{font-size:20px;font-weight:650;color:var(--ml-ink-2)}
.d .pr .a{font-size:40px;line-height:1;font-weight:650;letter-spacing:-.04em}
.d .pr .p{margin-left:3px;font-size:13px;color:var(--ml-muted)}
.d .bn{display:block;margin-top:6px;font-size:12px;color:var(--ml-muted)}
.d .ft{display:flex;flex-direction:column;gap:9px;margin:18px 0 0;padding:16px 0 0;border-top:1px solid var(--ml-line);list-style:none}
.d .ft li{display:flex;align-items:center;gap:9px;font-size:13px;color:var(--ml-ink-2)}
.d .ft svg{flex:none;color:var(--ml-accent)}
.d .rad{position:absolute;top:22px;right:20px;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .2s ease,box-shadow .2s ease}
.d .rad svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .plan[aria-checked=true] .rad{background:var(--ml-accent);box-shadow:none}
.d .plan[aria-checked=true] .rad svg{opacity:1;transform:none}
.d .foot{display:flex;align-items:center;justify-content:space-between;gap:20px;width:100%;margin-top:26px;padding:14px 14px 14px 20px;border-radius:18px;background:rgba(255,255,255,.72);box-shadow:inset 0 0 0 1px rgba(185,212,255,.55)}
.d .trial{display:flex;align-items:center;gap:12px;font-size:13.5px;color:var(--ml-ink-2)}
.d .trial svg{flex:none;color:var(--ml-accent)}
.d .trial b{font-weight:650;color:var(--ml-ink)}
.d .amt.flip{animation:ob-in 380ms var(--ml-spring) both}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{grid-template-columns:1fr auto;padding:16px 20px}
  .d .steps b,.d .skip{display:none}
  .d .stage{padding:0 16px 24px}
  .d h1{font-size:26px}
  .d .plans{grid-template-columns:minmax(0,1fr);gap:14px}
  .d .ft{display:none}
  .d .foot{flex-direction:column;align-items:stretch;gap:12px;padding:16px}
  .d .foot .go{width:100%}
}`,
    run: (root) => {
      const plans = [
        { n: 'Starter', d: 'For freelancers and small crews', m: 12, y: 10, f: ['Up to 3 teammates', '10 active projects', 'Invoices and payments', 'Email support'] },
        { n: 'Team', d: 'For growing studios and agencies', m: 29, y: 24, pop: 1, f: ['Up to 15 teammates', 'Unlimited projects', 'Automations', 'Client portal'] },
        { n: 'Business', d: 'For larger teams with control needs', m: 59, y: 49, f: ['Unlimited teammates', 'Roles and permissions', 'Audit log', 'Priority support'] },
      ];
      const CK = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const CK2 = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      $('.plans').innerHTML = plans
        .map(
          (p) =>
            `<button type="button" class="plan" role="radio" aria-checked="false">${p.pop ? '<span class="pop">Most popular</span>' : ''}<span class="rad">${CK}</span><span class="pn">${p.n}</span><span class="pd">${p.d}</span><span class="pr"><span class="c">$</span><span class="a amt">${p.m}</span><span class="p">/mo</span></span><small class="bn"></small><ul class="ft">${p.f.map((t) => `<li>${CK2}${t}</li>`).join('')}</ul></button>`,
        )
        .join('');
      const els = $$('.plan');
      const seg = $('.seg');
      const bills = $$('.seg button');
      const cont = $('.cont');
      let sel = 1;
      let yearly = false;
      let busy = false;
      const roll = (el, to) => {
        const from = parseFloat(el.textContent) || 0;
        const t0 = performance.now();
        el.classList.remove('flip');
        void el.offsetWidth;
        el.classList.add('flip');
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 450);
          el.textContent = String(Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))));
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const render = (animate) => {
        seg.classList.toggle('yr', yearly);
        bills.forEach((b) => b.setAttribute('aria-checked', String((b.dataset.b === 'y') === yearly)));
        els.forEach((b, i) => {
          const p = plans[i];
          b.setAttribute('aria-checked', String(i === sel));
          b.tabIndex = i === sel ? 0 : -1;
          const a = b.querySelector('.amt');
          const v = yearly ? p.y : p.m;
          if (animate) roll(a, v);
          else a.textContent = String(v);
          b.querySelector('.bn').textContent = yearly ? 'Billed $' + p.y * 12 + ' yearly' : 'Billed monthly';
        });
        const p = plans[sel];
        $('.tp').textContent = '$' + (yearly ? p.y : p.m) + '/mo' + (yearly ? ', billed yearly' : '');
      };
      bills.forEach((b) =>
        b.addEventListener('click', () => {
          const y = b.dataset.b === 'y';
          if (y === yearly) return;
          yearly = y;
          render(true);
        }),
      );
      els.forEach((b, i) =>
        b.addEventListener('click', () => {
          sel = i;
          render(false);
        }),
      );
      cont.addEventListener('click', () => {
        if (busy) return;
        busy = true;
        cont.classList.add('loading');
        setTimeout(() => {
          cont.classList.replace('loading', 'ok');
          setTimeout(() => {
            cont.classList.remove('ok');
            busy = false;
          }, 1700);
        }, 1000);
      });
      render(false);

      // Autoplay: flip billing, switch plans, start the trial; any real input hands over for 4s.
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
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(cur.classList.contains('off') ? 120 : 760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,330px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          const seq = [[bills[1], 0.5, 0.5, 1300], [els[2], 0.5, 0.3, 1300], [els[1], 0.5, 0.3, 1100], [cont, 0.55, 0.5, 3800], [bills[0], 0.5, 0.5, 1300]];
          for (const [el, fx, fy, rest] of seq) {
            if (!(await tap(el, fx, fy))) break;
            await wait(rest);
          }
          await wait(600);
        }
      })();
    },
    prompt: `Build a "choose your plan" onboarding step inside a first-run flow, full viewport (min-height: 100dvh). Top bar: logo, step indicator ("Step 3 of 5" with five 30px by 5px segments, finished ones filled with your accent) and a quiet Skip link. Page background is a soft blue-white gradient; content is a centered column, max-width 900px.

Header: a 30px heading "Choose your plan", one muted line ("Try everything free for 14 days. No card needed to start."), then a 280px segmented control Monthly / Yearly with a small green "Save 17%" pill; a single highlight thumb slides between the options with transform: translateX(100%) on the critically damped spring (587ms linear() curve).

Plans: a 3-column grid of radio cards (role="radio", aria-checked, roving tabindex): name, one-line audience, a 40px tabular price with a "$" and "/mo", a muted billing line ("Billed monthly" or "Billed $288 yearly"), a hairline, then four feature rows with a small check icon. The middle plan carries a gradient "Most popular" tag overlapping its top edge. The selected card gets a 2px accent ring and a soft blue shadow plus a filled check circle that pops with a slight overshoot; hover lifts 3px with transform. Prices: 12/29/59 monthly, 10/24/49 per month yearly.

Behavior: switching billing counts every price to its new value over 450ms (ease-out cubic) with a small rise-in; the billing line and the trial note update. A footer bar holds the trial note with a calendar icon ("Free until Wed, 28 Oct 2026, then $24/mo, billed yearly. Cancel anytime.") computed from today plus 14 days, and a primary "Start free trial" button that shows a sheen with "Starting", then a green "Trial started".

Accessibility: radiogroups with arrow keys, focus-visible rings, prefers-reduced-motion removes the lift and count animation. Phone: stack the plans and hide feature lists. Plain HTML, CSS and JS, no libraries; React-friendly structure (OnboardingShell, BillingToggle, PlanCard, TrialBar).`,
  });

  ML.add({
    id: 'app-onboarding-invite',
    cat: 'app-onboarding',
    title: 'Invite your team',
    sub: 'Emails become chips, invites send',
    html: `
<div class="wrap">
  ${BAR(4, 5)}
  <div class="stage"><section class="cardx nar" aria-label="Invite your team">
    <div class="pnl on" data-p="form">
      <p class="eyebrow">Invite your team</p>
      <h1>Who are you working with?</h1>
      <p class="lead">Add their emails and press Enter. Each person gets a link to join Northgate.</p>
      <label class="fl" for="ml-ob-inv">Email addresses</label>
      <div class="chipbox"><span class="chips"></span><input id="ml-ob-inv" type="text" autocomplete="off" inputmode="email" placeholder="name@company.com" aria-describedby="ml-ob-inv-h"></div>
      <p class="hint" id="ml-ob-inv-h" aria-live="polite"></p>
      <p class="fl">Invite as</p>
      <div class="seg3" role="radiogroup" aria-label="Role"><span class="thumb" aria-hidden="true"></span><button type="button" role="radio" aria-checked="false" data-r="0">Admin</button><button type="button" role="radio" aria-checked="true" data-r="1">Member</button><button type="button" role="radio" aria-checked="false" data-r="2">Viewer</button></div>
      <p class="rd" aria-live="polite"></p>
      <div class="acts"><button type="button" class="ghost cp">${I(P.link, 16)}<span>Copy invite link</span></button>${GO('Send invites', 'Sending', 'Sent', 'send')}</div>
    </div>
    <div class="pnl" data-p="sent" aria-live="polite">
      ${TICK(30)}
      <h1>Invites are on their way</h1>
      <p class="lead sl2"></p>
      <ul class="sent"></ul>
      <div class="acts"><button type="button" class="ghost more">${I(P.plus, 16)}Invite more</button><button type="button" class="go fin"><span class="lbl">Continue</span></button></div>
    </div>
  </section></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .nar{max-width:580px}
.d .pnl{display:none}
.d .pnl.on{display:block;animation:ob-in 520ms var(--ml-spring) both}
.d .chipbox{display:flex;flex-wrap:wrap;align-items:center;gap:8px;min-height:62px;margin-top:8px;padding:9px 10px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);cursor:text;transition:box-shadow .25s ease,background-color .25s ease}
.d .chipbox:focus-within,.d .chipbox.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .chips{display:contents}
.d .chip{display:inline-flex;align-items:center;gap:4px;height:30px;padding:0 4px 0 12px;border-radius:99px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:13px;font-weight:550;color:var(--ml-accent-ink);animation:ob-pop 380ms var(--ml-ease)}
.d .chip.bad{background:rgba(255,59,48,.08);box-shadow:inset 0 0 0 1px rgba(255,59,48,.35);color:#D70015}
.d .chip button{display:grid;place-items:center;width:22px;height:22px;padding:0;border:0;border-radius:50%;background:none;color:inherit;cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .chip button:hover{background:rgba(255,68,51,.12)}
.d .chip.bad button:hover{background:rgba(255,59,48,.14)}
.d .chip button.press{transform:scale(.8)}
.d .chipbox input{flex:1;min-width:110px;height:30px;border:0;outline:0;background:none;font:inherit;font-size:14.5px;color:var(--ml-ink)}
.d .chipbox input::placeholder{color:#A1A1A6}
.d .hint{min-height:20px;margin-top:8px;font-size:12.5px;color:var(--ml-muted)}
.d .hint.err{color:#D70015}
.d .seg3{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:8px;padding:4px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg3 button{position:relative;z-index:1;height:38px;border:0;background:none;font:inherit;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .25s ease,transform 90ms ease-out}
.d .seg3 button[aria-checked=true]{color:var(--ml-ink)}
.d .seg3 button.press{transform:scale(.96)}
.d .seg3 button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:9px}
.d .seg3 .thumb{position:absolute;top:4px;bottom:4px;left:4px;width:calc((100% - 8px) / 3);border-radius:9px;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px rgba(227,233,242,.8);transform:translateX(calc(var(--r,1) * 100%));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .rd{margin-top:10px;font-size:13px;color:var(--ml-muted)}
.d .pnl[data-p=sent]{text-align:center}
.d .pnl[data-p=sent] .okc{margin:0 auto 18px}
.d .sent{display:flex;flex-direction:column;gap:2px;margin:22px 0 0;padding:6px;border-radius:16px;background:var(--ml-surface);list-style:none;text-align:left}
.d .sent li{display:flex;align-items:center;gap:12px;padding:10px 10px;border-radius:12px;font-size:13.5px;animation:ob-in 460ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 70ms + 300ms)}
.d .sent .av{display:grid;flex:none;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--ml-accent-soft);font-size:11.5px;font-weight:650;color:var(--ml-accent-ink)}
.d .sent .em{flex:1;min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-weight:550}
.d .sent .st{display:inline-flex;align-items:center;gap:5px;padding:4px 9px;border-radius:99px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:650;color:#12893C}
.d .pnl[data-p=sent] .acts{margin-top:24px}
.d .fin{height:46px}
.d .tstate{color:#12893C}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{grid-template-columns:1fr auto;padding:16px 20px}
  .d .steps b,.d .skip{display:none}
  .d .stage{padding:0 14px 24px}
  .d .cardx{padding:24px 18px 20px}
  .d h1{font-size:25px}
  .d .acts{flex-direction:column-reverse;align-items:stretch}
  .d .acts .go{width:100%}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      const input = $('#ml-ob-inv');
      const box = $('.chipbox');
      const chipsEl = $('.chips');
      const send = $('.send');
      const seg = $('.seg3');
      const segBtns = $$('.seg3 button');
      const hint = $('.hint');
      const roles = [['Admin', 'Can manage billing, people and every project.'], ['Member', 'Can create and edit projects and invoices.'], ['Viewer', 'Can view projects and comment, nothing else.']];
      const X = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
      const CK = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const okMail = (v) => /^[^\s@]+@[^\s@]+[.][^\s@]{2,}$/.test(v);
      let list = [];
      let role = 1;
      let busy = false;
      const initial = () => {
        list = ['aiko@northgate.co', 'daniel@northgate.co'];
        role = 1;
      };
      const showPanel = (p) => {
        $$('.pnl').forEach((n) => n.classList.toggle('on', n.dataset.p === p));
      };
      const render = () => {
        chipsEl.innerHTML = list.map((e, i) => `<span class="chip${okMail(e) ? '' : ' bad'}" data-i="${i}">${e}<button type="button" aria-label="Remove ${e}">${X}</button></span>`).join('');
        const good = list.filter(okMail).length;
        const bad = list.length - good;
        hint.classList.toggle('err', bad > 0);
        hint.textContent = bad ? 'Fix or remove the red address.' : good ? good + (good > 1 ? ' people' : ' person') + ' will get an email.' : 'Paste several at once, separated by commas.';
        send.querySelector('.lbl').textContent = good ? 'Send ' + good + (good > 1 ? ' invites' : ' invite') : 'Add an email';
        send.disabled = !good || bad > 0 || busy;
        seg.style.setProperty('--r', String(role));
        segBtns.forEach((b, i) => b.setAttribute('aria-checked', String(i === role)));
        $('.rd').textContent = roles[role][1];
      };
      const commit = (txt) => {
        const parts = txt.split(/[\s,;]+/).filter(Boolean);
        parts.forEach((p) => {
          const v = p.toLowerCase();
          if (!list.includes(v)) list.push(v);
        });
        input.value = '';
        render();
      };
      input.addEventListener('keydown', (e) => {
        if (['Enter', ',', ' ', ';'].includes(e.key) && input.value.trim()) {
          e.preventDefault();
          commit(input.value);
        } else if (e.key === 'Backspace' && !input.value && list.length) {
          list.pop();
          render();
        }
      });
      input.addEventListener('blur', () => input.value.trim() && commit(input.value));
      input.addEventListener('paste', (e) => {
        const t = (e.clipboardData || window.clipboardData).getData('text');
        if (/[\s,;]/.test(t.trim())) {
          e.preventDefault();
          commit(t);
        }
      });
      box.addEventListener('click', (e) => {
        if (!e.target.closest('button')) input.focus();
      });
      chipsEl.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        list.splice(+b.parentNode.dataset.i, 1);
        render();
      });
      segBtns.forEach((b, i) => b.addEventListener('click', () => ((role = i), render())));
      const cp = $('.cp');
      cp.addEventListener('click', () => {
        cp.classList.add('tstate');
        cp.querySelector('span').textContent = 'Link copied';
        setTimeout(() => {
          cp.classList.remove('tstate');
          cp.querySelector('span').textContent = 'Copy invite link';
        }, 1600);
      });
      let tok = 0;
      send.addEventListener('click', () => {
        if (busy || send.disabled) return;
        busy = true;
        const mine = ++tok;
        send.classList.add('loading');
        setTimeout(() => {
          send.classList.replace('loading', 'ok');
          setTimeout(() => {
            const good = list.filter(okMail);
            $('.sl2').textContent = good.length + (good.length > 1 ? ' people were' : ' person was') + ' invited to Northgate as ' + roles[role][0] + (good.length > 1 ? 's.' : '.');
            $('.sent').innerHTML = good.map((e, i) => `<li style="--i:${i}"><span class="av">${e.slice(0, 2).toUpperCase()}</span><span class="em">${e}</span><span class="st">${CK}Invited</span></li>`).join('');
            send.classList.remove('ok');
            showPanel('sent');
            setTimeout(() => {
              if (mine !== tok || !root.isConnected) return;
              busy = false;
              initial();
              showPanel('form');
              render();
            }, 3400);
          }, 700);
        }, 900);
      });
      $('.more').addEventListener('click', () => {
        tok++;
        busy = false;
        initial();
        list = [];
        showPanel('form');
        render();
      });
      initial();
      render();

      // Autoplay: type two emails (one invalid, then removed), pick a role, send; any real input hands over for 4s.
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
        $$('.is-auto').forEach((n) => n.classList.remove('is-auto'));
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
        if (!el) return false;
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(cur.classList.contains('off') ? 120 : 760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      const type = async (text) => {
        box.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          input.value += ch;
          await wait(50 + Math.random() * 55);
        }
        await wait(350);
        box.classList.remove('is-auto');
        if (!idle()) return false;
        commit(input.value);
        return true;
      };
      cur.style.transform = 'translate(700px,600px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          initial();
          showPanel('form');
          render();
          cur.classList.toggle('off', !moveTo(box, 0.8, 0.7));
          await wait(800);
          if (!(await type('priya@northgate.co'))) continue;
          await wait(500);
          if (!(await type('noor@northgate'))) continue;
          await wait(1100);
          const bad = $('.chip.bad button');
          if (bad && !(await tap(bad))) continue;
          await wait(500);
          if (!(await tap(segBtns[0]))) continue;
          await wait(600);
          if (!(await tap(send, 0.6))) continue;
          await wait(6200);
        }
      })();
    },
    prompt: `Build an "invite your team" step for a SaaS onboarding flow, full viewport (min-height: 100dvh), page background a soft blue-white gradient. Top bar: logo, step indicator ("Step 4 of 5", five 30px by 5px segments, finished ones filled with your accent) and a quiet Skip link. One vertically centered white card, max-width 580px, 22px radius.

Form state: eyebrow, 30px heading "Who are you working with?", one muted sentence. A tag input field: a min-height 62px soft grey box that wraps chips and ends with a text input; focus puts a 1.5px accent ring and a 4px soft ring on the box. Pressing Enter, comma, space or semicolon, or blurring or pasting a list, turns the text into a chip (pill, accent-soft fill, accent line, a 22px round remove button); duplicates are ignored, Backspace on an empty input removes the last chip, and an invalid address becomes a red chip. New chips pop in (scale .7 to 1.08 to 1, 380ms). Under it a live hint ("2 people will get an email" or "Fix or remove the red address", in red). Then "Invite as" with a 3-option segmented control (Admin, Member, Viewer) whose white thumb slides with transform: translateX(n * 100%) on a critically damped spring (587ms linear() curve), and a one-line description of the chosen role. Footer: ghost "Copy invite link" (label flips to "Link copied" for 1.6s) and a primary button that reads "Send 3 invites", disabled when there is no valid address or any invalid chip.

Sent state: swap the card content (fade and rise 8px): a green circle with a check that draws itself (stroke-dashoffset), "Invites are on their way", one summary sentence, and a rounded list of invited addresses with initials avatars and a green "Invited" pill, rows entering with a 70ms stagger; buttons "Invite more" and "Continue".

Accessibility: labelled input with aria-describedby on the hint (aria-live), remove buttons labelled with the address, role radiogroup for roles, focus-visible rings. Phone: stack the footer buttons full width. Plain HTML, CSS and JS, no libraries; React-friendly structure (OnboardingShell, EmailChipInput, RoleSegmented, SentSummary).`,
  });

  ML.add({
    id: 'app-onboarding-integrations',
    cat: 'app-onboarding',
    title: 'Connect integrations',
    sub: 'Tiles connect one by one',
    html: `
<div class="wrap">
  ${BAR(5, 5)}
  <div class="stage"><main class="two" aria-labelledby="ml-ob-int-h">
    <section class="aside">
      <p class="eyebrow">Last step</p>
      <h1 id="ml-ob-int-h">Connect your tools</h1>
      <p class="lead">Halden works best next to the tools you already use. Connect a few now, add more any time.</p>
      <div class="meter" aria-live="polite"><p><b class="n">1</b> of 6 connected</p><i><s></s></i></div>
      <div class="acts"><button type="button" class="ghost">${I(P.back, 16)}Back</button>${GO('Finish setup', 'Finishing', 'All set', 'fin')}</div>
    </section>
    <div class="tiles"></div>
  </main></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .two{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.5fr);align-items:center;gap:44px;max-width:960px}
.d .meter{margin-top:26px;padding:16px 18px;border-radius:16px;background:rgba(255,255,255,.75);box-shadow:inset 0 0 0 1px rgba(185,212,255,.55)}
.d .meter p{font-size:13.5px;color:var(--ml-muted)}
.d .meter b{font-size:20px;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .meter i{display:block;height:7px;margin-top:12px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .meter s{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(var(--p,0));transform-origin:0 50%;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .aside .acts{justify-content:flex-start;gap:10px}
.d .tiles{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
.d .tile{display:flex;flex-direction:column;gap:18px;padding:18px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow);transition:box-shadow .3s ease}
.d .tile.on{box-shadow:inset 0 0 0 1.5px var(--ml-accent-line),var(--ml-shadow)}
.d .tt{display:flex;align-items:center;justify-content:space-between;gap:10px}
.d .ti{display:grid;place-items:center;width:44px;height:44px;border-radius:13px;background:var(--ml-accent-soft);color:var(--ml-accent);transition:background-color .3s ease,color .3s ease}
.d .tile.on .ti{background:var(--ml-accent);color:#fff}
.d .tile b{display:block;font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .tile small{display:block;margin-top:3px;font-size:12.5px;line-height:1.4;color:var(--ml-muted)}
.d .cn{position:relative;display:inline-grid;place-items:center;min-width:104px;height:34px;padding:0 14px;border:0;border-radius:99px;overflow:hidden;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:inherit;font-size:13px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:transform 90ms ease-out,background-color .3s ease,color .3s ease,box-shadow .3s ease}
.d .cn:hover{background:var(--ml-surface)}
.d .cn:active,.d .cn.press{transform:scale(.95)}
.d .cn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .cn > span{grid-area:1/1;display:inline-flex;align-items:center;gap:6px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .cn .l2,.d .cn .l3{opacity:0;transform:translateY(8px)}
.d .cn.loading{color:var(--ml-accent-ink);background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .cn.loading .l1,.d .cn.on .l1,.d .cn.on .l2{opacity:0;transform:translateY(-8px)}
.d .cn.loading .l2,.d .cn.on .l3{opacity:1;transform:none}
.d .cn.loading::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,68,51,.14) 50%,transparent 70%);background-size:220% 100%;animation:ob-sheen 1.1s linear infinite}
.d .cn.on{background:rgba(29,185,84,.1);box-shadow:inset 0 0 0 1px rgba(29,185,84,.3);color:#12893C}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{grid-template-columns:1fr auto;padding:16px 20px}
  .d .steps b,.d .skip{display:none}
  .d .stage{padding:0 16px 24px}
  .d .two{grid-template-columns:minmax(0,1fr);gap:24px}
  .d h1{font-size:26px}
  .d .tiles{grid-template-columns:minmax(0,1fr);gap:12px}
  .d .tile{display:grid;grid-template-columns:auto minmax(0,1fr) auto;align-items:center;gap:14px;padding:14px}
  .d .tile .tt{display:contents}
  .d .tile .ti{grid-column:1;grid-row:1}
  .d .tile > div:last-child{grid-column:2;grid-row:1}
  .d .tile .cn{grid-column:3;grid-row:1;min-width:92px}
}`,
    run: (root) => {
      const apps = [
        ['Calendar', 'Sync meetings and due dates', '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>'],
        ['Mail', 'Send from your own address', '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'],
        ['Payments', 'Accept cards and bank transfers', '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>'],
        ['Storage', 'Attach files from your drive', '<line x1="22" x2="2" y1="12" y2="12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" x2="6.01" y1="16" y2="16"/><line x1="10" x2="10.01" y1="16" y2="16"/>'],
        ['Chat', 'Post updates to team channels', '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'],
        ['Docs', 'Link proposals and notes', '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>'],
      ];
      const ic = (d, s, w = 2) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const CK = '<path d="M20 6 9 17l-5-5"/>';
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      $('.tiles').innerHTML = apps
        .map(([n, d, p]) => `<article class="tile"><div class="tt"><span class="ti">${ic(p, 22)}</span><button type="button" class="cn" aria-label="Connect ${n}"><span class="l1">Connect</span><span class="l2">Connecting</span><span class="l3">${ic(CK, 14, 2.8)}Connected</span></button></div><div><b>${n}</b><small>${d}</small></div></article>`)
        .join('');
      const tiles = $$('.tile');
      const btns = $$('.cn');
      const on = new Set([0]);
      const fin = $('.fin');
      let finBusy = false;
      const render = () => {
        tiles.forEach((t, i) => {
          t.classList.toggle('on', on.has(i));
          btns[i].classList.toggle('on', on.has(i));
          btns[i].setAttribute('aria-label', (on.has(i) ? 'Disconnect ' : 'Connect ') + apps[i][0]);
        });
        $('.n').textContent = String(on.size);
        $('.meter').style.setProperty('--p', String(on.size / apps.length));
        if (!finBusy) fin.querySelector('.lbl').textContent = on.size > 1 ? 'Finish setup' : 'Skip and finish';
      };
      btns.forEach((b, i) =>
        b.addEventListener('click', () => {
          if (b.classList.contains('loading')) return;
          if (on.has(i)) {
            on.delete(i);
            render();
            return;
          }
          b.classList.add('loading');
          setTimeout(() => {
            b.classList.remove('loading');
            on.add(i);
            render();
          }, 1000);
        }),
      );
      fin.addEventListener('click', () => {
        if (finBusy) return;
        finBusy = true;
        fin.classList.add('loading');
        setTimeout(() => {
          fin.classList.replace('loading', 'ok');
          setTimeout(() => {
            fin.classList.remove('ok');
            finBusy = false;
            render();
          }, 1700);
        }, 900);
      });
      render();

      // Autoplay: connect three tiles, finish setup; any real input hands over for 4s.
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
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(cur.classList.contains('off') ? 120 : 760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(800px,300px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || finBusy) {
            await wait(400);
            continue;
          }
          on.clear();
          on.add(0);
          render();
          for (const el of [btns[1], btns[2], btns[4], fin]) {
            if (!(await tap(el, 0.5, 0.5))) break;
            await wait(el === fin ? 3600 : 1700);
          }
          await wait(900);
        }
      })();
    },
    prompt: `Build the final "connect your tools" step of a SaaS onboarding flow, full viewport (min-height: 100dvh), soft blue-white gradient background. Top bar: logo, step indicator ("Step 5 of 5", five segments all filled with your accent) and a quiet Skip link.

Layout: a vertically centered two-pane area, max-width 960px, columns 0.8fr and 1.5fr with a 44px gap. Left pane: eyebrow "Last step", a 30px heading "Connect your tools", one muted paragraph, a progress card ("1 of 6 connected" with a 7px track whose fill uses transform: scaleX(connected / 6) and the spring) and the footer buttons (ghost Back, primary "Finish setup", which reads "Skip and finish" while nothing beyond the default is connected). Right pane: a 2-column grid of six integration tiles in generic categories: Calendar, Mail, Payments, Storage, Chat, Docs. Each tile is an 18px-radius white card with a 44px soft-blue icon tile, a name, a one-line description and a pill button at the top right. Do not use real company logos; draw simple line icons.

Behavior: the button cycles Connect, Connecting and Connected. On click it shows a soft blue sheen with the label sliding up to "Connecting" for about a second, then turns into a green "Connected" pill with a check; the tile gets an accent hairline ring and its icon tile fills solid accent. Clicking Connected disconnects (aria-label switches to "Disconnect Mail"). Label swaps are vertical slides (opacity plus translateY(8px), 450ms spring); never animate layout. Finish setup shows a sheen and then a green "All set".

Accessibility: each button has a specific aria-label, the counter is aria-live, visible focus rings, prefers-reduced-motion removes the sheen. Phone: one column with row-style tiles (icon, text, button). Plain HTML, CSS and JS, no libraries; React-friendly structure (OnboardingShell, IntegrationTile, ConnectButton, ProgressMeter).`,
  });

  ML.add({
    id: 'app-onboarding-import',
    cat: 'app-onboarding',
    title: 'Import data',
    sub: 'CSV drops, columns match, rows import',
    html: `
<div class="wrap">
  <header class="bar"><span class="brand"><span class="mark">${I(P.mark, 16)}</span>Halden</span><span></span><button type="button" class="lk skip">Cancel</button></header>
  <div class="stage"><main class="cardx imp" aria-labelledby="ml-ob-imp-h">
    <ol class="rail" aria-label="Import steps">
      <li class="on"><span class="n"><b>1</b>${I(P.check, 13, 3)}</span>Upload</li>
      <li><span class="n"><b>2</b>${I(P.check, 13, 3)}</span>Match columns</li>
      <li><span class="n"><b>3</b>${I(P.check, 13, 3)}</span>Import</li>
    </ol>
    <div class="body">
      <div class="pnl on" data-p="0">
        <h1 id="ml-ob-imp-h">Import your clients</h1>
        <p class="lead">Bring your contacts over from a CSV file. We will match the columns for you.</p>
        <div class="zone" tabindex="-1">
          <span class="zi">${I(P.upload, 26)}</span>
          <p class="zt">Drag and drop your CSV here</p>
          <p class="zs">or pick a file from your computer, up to 10 MB</p>
          <div class="zb"><button type="button" class="ghost browse">Browse files</button><button type="button" class="go sample"><span class="lbl">Use sample file</span><span class="busy">Reading file</span><span class="done">${I(P.check, 17, 2.6)}Read</span></button></div>
          <input type="file" accept=".csv,text/csv" hidden>
          <i class="rd" aria-hidden="true"></i>
        </div>
      </div>
      <div class="pnl" data-p="1">
        <h1>Match your columns</h1>
        <p class="lead"><span class="fn">clients-october.csv</span> has <b>248 rows</b>. Check where each column goes.</p>
        <div class="maps"></div>
        <div class="acts"><button type="button" class="ghost back">${I(P.back, 16)}Back</button><button type="button" class="go run"><span class="lbl">Import 248 contacts</span></button></div>
      </div>
      <div class="pnl" data-p="2" aria-live="polite">
        <h1>Importing your clients</h1>
        <p class="lead st1">Reading rows</p>
        <div class="fchip"><span class="fi">${I(P.sheet, 20)}</span><p><b class="fn">clients-october.csv</b><small>248 rows</small></p><span class="cn2"><b class="cnt">0</b> / 248</span></div>
        <div class="prog" role="progressbar" aria-valuemin="0" aria-valuemax="248" aria-valuenow="0"><i></i></div>
        <ul class="stg"><li>Reading rows</li><li>Matching duplicates</li><li>Creating contacts</li><li>Finishing up</li></ul>
      </div>
      <div class="pnl fin" data-p="3" aria-live="polite">
        ${TICK(30)}
        <h1>248 contacts imported</h1>
        <p class="lead">3 duplicates were skipped and nothing failed. Your clients are ready to use.</p>
        <div class="sum"><p><b>245</b><span>Created</span></p><p><b>3</b><span>Skipped</span></p><p><b>0</b><span>Errors</span></p></div>
        <div class="acts"><button type="button" class="ghost again">${I(P.upload, 16)}Import another</button><button type="button" class="go"><span class="lbl">View clients</span></button></div>
      </div>
    </div>
  </main></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .imp{max-width:720px}
.d .rail{display:flex;align-items:center;margin:0 0 28px;padding:0;list-style:none}
.d .rail li{position:relative;display:flex;flex:1;align-items:center;gap:10px;font-size:13px;font-weight:600;color:var(--ml-muted);transition:color .3s ease}
.d .rail li:last-child{flex:none}
.d .rail li::after{content:"";flex:1;height:2px;margin:0 14px;border-radius:2px;background:var(--ml-bar);transition:background-color .4s ease}
.d .rail li:last-child::after{display:none}
.d .rail .n{position:relative;display:grid;flex:none;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);font-size:12px;font-weight:650;color:var(--ml-muted);transition:background-color .3s ease,box-shadow .3s ease,color .3s ease}
.d .rail .n svg{display:none}
.d .rail li.on{color:var(--ml-ink)}
.d .rail li.on .n{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent);color:var(--ml-accent-ink)}
.d .rail li.done{color:var(--ml-ink-2)}
.d .rail li.done .n{background:var(--ml-accent);box-shadow:none;color:#fff}
.d .rail li.done .n b{display:none}
.d .rail li.done .n svg{display:block}
.d .rail li.done::after{background:var(--ml-accent)}
.d .body{position:relative;min-height:430px}
.d .pnl{display:none}
.d .pnl.on{display:block;animation:ob-in 520ms var(--ml-spring) both}
.d .zone{position:relative;display:flex;flex-direction:column;align-items:center;margin-top:24px;padding:32px 20px 28px;border-radius:18px;overflow:hidden;background:var(--ml-surface);text-align:center;transition:background-color .3s ease,box-shadow .3s ease}
.d .zone::before{content:"";position:absolute;inset:0;border-radius:inherit;border:2px dashed var(--ml-accent-line);pointer-events:none;transition:border-color .3s ease}
.d .zone.over,.d .zone.is-auto{background:var(--ml-accent-soft)}
.d .zone.over::before,.d .zone.is-auto::before{border-color:var(--ml-accent)}
.d .zi{display:grid;place-items:center;width:56px;height:56px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);color:var(--ml-accent);animation:ob-float 5s ease-in-out infinite}
.d .zt{margin-top:16px;font-size:16px;font-weight:650;letter-spacing:-.01em}
.d .zs{margin-top:4px;font-size:13px;color:var(--ml-muted)}
.d .zb{display:flex;gap:10px;margin-top:20px}
.d .zb .ghost,.d .zb .go{height:42px;font-size:13.5px}
.d .rd{position:absolute;left:0;right:0;bottom:0;height:3px;background:var(--ml-grad);transform:scaleX(0);transform-origin:0 50%;transition:transform 900ms var(--ml-ease)}
.d .zone.reading .rd{transform:none}
.d .maps{display:flex;flex-direction:column;gap:10px;margin-top:20px}
.d .mrow{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr) 24px;align-items:center;gap:12px;padding:10px 12px 10px 14px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);transition:background-color .4s ease,box-shadow .4s ease}
.d .mrow.flash{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .src{min-width:0}
.d .src b{display:block;font-size:13.5px;font-weight:600}
.d .src small{display:block;overflow:hidden;font-size:12px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .mrow > svg{color:var(--ml-bar)}
.d .sel{position:relative}
.d .sel select{appearance:none;width:100%;height:40px;padding:0 32px 0 12px;border:0;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:inherit;font-size:13.5px;font-weight:550;color:var(--ml-ink);cursor:pointer;outline:0}
.d .sel select:focus-visible{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .sel svg{position:absolute;right:10px;top:12px;pointer-events:none;color:var(--ml-muted)}
.d .sel.is-auto select{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .mrow.skipd .sel select{color:var(--ml-muted)}
.d .mk{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:rgba(29,185,84,.12);color:#12893C;transition:opacity .3s ease,transform .4s var(--ml-bounce)}
.d .mrow.skipd .mk{opacity:0;transform:scale(.5)}
.d .maps + .acts{margin-top:22px}
.d .fchip{display:flex;align-items:center;gap:14px;margin-top:26px;padding:14px 16px;border-radius:16px;background:var(--ml-surface)}
.d .fi{display:grid;flex:none;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-accent)}
.d .fchip p{flex:1;min-width:0}
.d .fchip b{display:block;font-size:14px;font-weight:600}
.d .fchip small{font-size:12.5px;color:var(--ml-muted)}
.d .cn2{font:500 13px/1 var(--ml-mono);color:var(--ml-muted)}
.d .cn2 b{font-size:20px;font-weight:650;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .prog{position:relative;height:10px;margin-top:22px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .prog i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(var(--p,0));transform-origin:0 50%}
.d .prog::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.55) 50%,transparent 70%);background-size:220% 100%;animation:ob-sheen 1.3s linear infinite}
.d .stg{display:flex;flex-direction:column;gap:12px;margin:26px 0 0;padding:0;list-style:none}
.d .stg li{position:relative;display:flex;align-items:center;gap:12px;font-size:14px;color:var(--ml-muted);transition:color .3s ease}
.d .stg li::before{content:"";flex:none;width:18px;height:18px;border-radius:50%;box-shadow:inset 0 0 0 1.75px var(--ml-bar);transition:background-color .3s ease,box-shadow .3s ease}
.d .stg li.on{color:var(--ml-ink);font-weight:600}
.d .stg li.on::before{box-shadow:inset 0 0 0 5px var(--ml-accent)}
.d .stg li.dn{color:var(--ml-ink-2)}
.d .stg li.dn::before{background:var(--ml-accent);box-shadow:none}
.d .stg li.dn::after{content:"";position:absolute;left:6px;top:calc(50% - 6.5px);width:4px;height:8px;border:solid #fff;border-width:0 2px 2px 0;transform:rotate(45deg)}
.d .fin{text-align:center}
.d .fin .okc{margin:0 auto 18px}
.d .fin .lead{max-width:420px;margin-right:auto;margin-left:auto}
.d .sum{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:24px}
.d .sum p{padding:14px 10px;border-radius:14px;background:var(--ml-surface)}
.d .sum b{display:block;font-size:26px;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .sum span{font-size:12.5px;color:var(--ml-muted)}
.d .fin .acts{margin-top:24px}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{grid-template-columns:1fr auto;padding:16px 20px}
  .d .bar > span:nth-child(2){display:none}
  .d .stage{padding:0 14px 24px}
  .d .cardx{padding:22px 16px 20px}
  .d h1{font-size:25px}
  .d .rail li{font-size:0;gap:0}
  .d .rail li.on{font-size:13px;gap:8px}
  .d .rail li::after{margin:0 8px}
  .d .mrow{grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px}
  .d .mrow > svg,.d .mrow .mk{display:none}
  .d .zb{flex-direction:column;width:100%}
  .d .acts{flex-direction:column-reverse;align-items:stretch}
  .d .fin .acts .go{width:100%}
}
@media (prefers-reduced-motion: reduce){.d .zi,.d .prog::after{animation:none}}`,
    run: (root) => {
      const fields = ['Name', 'Email', 'Company', 'Created date', "Don't import"];
      const cols = [
        ['Full name', 'Maya Reyes', 0],
        ['Email address', 'maya@northgate.co', 1],
        ['Organisation', 'Northgate', 4],
        ['Signup date', '12 Oct 2026', 3],
      ];
      const ARR = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>';
      const CH = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
      const CK = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      $('.maps').innerHTML = cols
        .map(([c, v, f], i) => `<div class="mrow${f === 4 ? ' skipd' : ''}"><div class="src"><b>${c}</b><small>${v}</small></div>${ARR}<div class="sel"><select aria-label="Map ${c} to">${fields.map((o, k) => `<option${k === f ? ' selected' : ''}>${o}</option>`).join('')}</select>${CH}</div><span class="mk">${CK}</span></div>`)
        .join('');
      const panels = $$('.pnl');
      const steps = $$('.rail li');
      const zone = $('.zone');
      const sample = $('.sample');
      const file = $('input[type=file]');
      const run = $('.run');
      let phase = 0;
      let busy = false;
      let tok = 0;
      const show = (p) => {
        phase = p;
        panels.forEach((n) => n.classList.toggle('on', +n.dataset.p === p));
        steps.forEach((li, i) => {
          li.classList.toggle('done', i < p || p === 3);
          li.classList.toggle('on', i === p && p < 3);
        });
      };
      const names = () => root.querySelectorAll('.fn').forEach((n) => (n.textContent = fname));
      let fname = 'clients-october.csv';
      const read = (name) => {
        if (busy) return;
        busy = true;
        fname = name;
        names();
        const mine = ++tok;
        zone.classList.add('reading');
        sample.classList.add('loading');
        setTimeout(() => {
          if (mine !== tok) return;
          sample.classList.replace('loading', 'ok');
          setTimeout(() => {
            if (mine !== tok) return;
            sample.classList.remove('ok');
            zone.classList.remove('reading');
            busy = false;
            show(1);
          }, 500);
        }, 1000);
      };
      sample.addEventListener('click', () => read('clients-october.csv'));
      $('.browse').addEventListener('click', () => file.click());
      file.addEventListener('change', () => file.files[0] && read(file.files[0].name));
      ['dragenter', 'dragover'].forEach((e) =>
        zone.addEventListener(e, (ev) => {
          ev.preventDefault();
          zone.classList.add('over');
        }),
      );
      zone.addEventListener('dragleave', () => zone.classList.remove('over'));
      zone.addEventListener('drop', (ev) => {
        ev.preventDefault();
        zone.classList.remove('over');
        const f = ev.dataTransfer && ev.dataTransfer.files[0];
        read(f ? f.name : 'clients-october.csv');
      });
      $$('.mrow select').forEach((s) =>
        s.addEventListener('change', () => {
          const row = s.closest('.mrow');
          row.classList.toggle('skipd', s.value === "Don't import");
          row.classList.add('flash');
          setTimeout(() => row.classList.remove('flash'), 700);
        }),
      );
      const bar = $('.prog');
      const setP = (n) => {
        bar.style.setProperty('--p', String(n / 248));
        bar.setAttribute('aria-valuenow', String(n));
        $('.cnt').textContent = String(n);
        const th = [0, 80, 190, 248, 249];
        $$('.stg li').forEach((li, k) => {
          li.classList.toggle('dn', n >= th[k + 1]);
          li.classList.toggle('on', n >= th[k] && n < th[k + 1]);
        });
        $('.st1').textContent = ['Reading rows', 'Matching duplicates', 'Creating contacts', 'Finishing up'][n < 80 ? 0 : n < 190 ? 1 : n < 248 ? 2 : 3];
      };
      const start = () => {
        if (busy) return;
        busy = true;
        const mine = ++tok;
        setP(0);
        show(2);
        const t0 = performance.now();
        let last = t0;
        let el = 0;
        const step = (t) => {
          if (mine !== tok || !root.isConnected) return;
          if (!root.dataset.paused) el += t - last;
          last = t;
          const k = Math.min(1, el / 3200);
          setP(Math.round(248 * (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2)));
          if (k < 1) requestAnimationFrame(step);
          else
            setTimeout(() => {
              if (mine !== tok) return;
              busy = false;
              show(3);
            }, 500);
        };
        requestAnimationFrame(step);
      };
      run.addEventListener('click', start);
      $('.back').addEventListener('click', () => show(0));
      $('.again').addEventListener('click', () => {
        tok++;
        busy = false;
        show(0);
      });
      show(0);

      // Autoplay: use the sample file, remap one column, import, done; any real input hands over for 4s.
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
        $$('.is-auto').forEach((n) => n.classList.remove('is-auto'));
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
        await wait(cur.classList.contains('off') ? 120 : 760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(760px,520px)';
      const reset = () => {
        tok++;
        busy = false;
        zone.classList.remove('reading');
        sample.classList.remove('loading', 'ok');
        const row = $$('.mrow')[2];
        const sel = row.querySelector('select');
        sel.value = "Don't import";
        row.classList.add('skipd');
        show(0);
      };
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          zone.classList.add('is-auto');
          if (!(await tap(sample, 0.5, 0.5))) continue;
          zone.classList.remove('is-auto');
          await wait(2400);
          const sel = $$('.mrow select')[2];
          const box = sel.parentNode;
          cur.classList.toggle('off', !moveTo(box, 0.5, 0.5));
          await wait(800);
          if (!idle()) continue;
          box.classList.add('is-auto');
          await wait(500);
          sel.value = 'Company';
          sel.dispatchEvent(new Event('change', { bubbles: true }));
          await wait(700);
          box.classList.remove('is-auto');
          if (!idle()) continue;
          if (!(await tap(run, 0.5, 0.5))) continue;
          await wait(7600);
        }
      })();
    },
    prompt: `Build a CSV import flow for a SaaS app inside one centered card (max-width 720px, 22px radius) on a soft blue-white page with a minimal top bar (logo left, Cancel right). Everything happens in the same card with a fixed 360px minimum body height so nothing jumps; panels swap with a fade and 8px rise.

Top of the card: a 3-step rail (Upload, Match columns, Import). Each step is a 26px circle plus label with a hairline connector; the current step has an accent ring on soft blue, finished steps are solid accent with a check, the rest grey.

Step 1, Upload: heading "Import your clients", one muted sentence, then a drop zone: a soft grey-blue panel with a 2px dashed accent-line border drawn on a pseudo-element, a 56px white icon tile (upload icon) that floats gently, "Drag and drop your CSV here", a hint line, a ghost "Browse files" button (opens a hidden file input accepting .csv) and a primary "Use sample file" button. Real dragenter/dragover/drop handling turns the zone accent-soft with a solid accent border; reading the file shows a sheen on the button and a 3px gradient line growing along the bottom (transform: scaleX) before moving on.

Step 2, Match columns: "248 rows found" line, then four mapping rows: source column name with a sample value, an arrow, a select (native select, custom chevron) to choose the destination (Name, Email, Company, Created date, Don't import) and a green check that appears when mapped (scale with overshoot). Changing a select flashes the row accent-soft for 700ms. Footer: ghost Back, primary "Import 248 contacts".

Step 3, Import: a file chip (icon, name, "248 rows", a tabular live count "132 / 248"), a 10px progress track whose fill uses transform: scaleX with a light sheen across it, and a status line that changes (Reading rows, Matching duplicates, Creating contacts). Then a done state: green check circle that draws itself, "248 contacts imported", a 3-up summary (Created 245, Skipped 3, Errors 0) and buttons "Import another" and "View clients".

Accessibility: progressbar role with aria-valuenow, aria-live on step 3 and done, labelled selects, focus rings, prefers-reduced-motion stops floating and sheens. Phone: stack buttons, hide arrows. Plain HTML, CSS and JS, no libraries; React-friendly structure (ImportWizard, StepRail, DropZone, ColumnMapper, ProgressPanel, DoneSummary).`,
  });

  ML.add({
    id: 'app-onboarding-checklist',
    cat: 'app-onboarding',
    title: 'Setup checklist home',
    sub: 'Ticks fill the progress ring',
    html: `
<div class="app">
  <aside class="side">
    <div class="brandrow"><span class="mark">${I(P.mark, 16)}</span><b>Halden</b></div>
    <p class="lbl">Workspace</p>
    <nav class="nav" aria-label="Main">
      <span class="pill" aria-hidden="true"></span>
      <button class="it on" type="button" aria-current="page">${I(P.dash)}<span>Home</span></button>
      <button class="it" type="button">${I(P.folder)}<span>Projects</span></button>
      <button class="it" type="button">${I(P.users)}<span>Clients</span></button>
      <button class="it" type="button">${I(P.receipt)}<span>Invoices</span></button>
      <button class="it" type="button">${I(P.chart)}<span>Reports</span></button>
    </nav>
    <div class="foot"><div class="me"><span class="av">MR</span><p><b>Maya Reyes</b><small>Northgate Studio</small></p></div></div>
  </aside>
  <div class="main">
    <header class="top">
      <p class="crumb">Northgate<span>/</span><b>Home</b></p>
      <button class="ic" type="button" aria-label="Search">${I(P.search, 18)}</button>
      <button class="ic" type="button" aria-label="Notifications">${I(P.bell, 18)}<i></i></button>
      <span class="av">MR</span>
    </header>
    <main class="page">
      <div class="head"><h1>Welcome to Halden, Maya</h1><p class="date">Wednesday, 14 October. Your workspace is ready.</p></div>
      <div class="cols">
        <section class="card gs" aria-labelledby="ml-ob-cl-h">
          <div class="gh">
            <div class="ringw"><svg viewBox="0 0 100 100" aria-hidden="true"><circle class="trk" cx="50" cy="50" r="42"/><circle class="prg" cx="50" cy="50" r="42" pathLength="1"/></svg><div class="rc"><b class="pc">33</b></div></div>
            <div class="gx"><h2 id="ml-ob-cl-h" class="gt">Get started with Halden</h2><p class="gs2" aria-live="polite"></p></div>
          </div>
          <ul class="items"></ul>
        </section>
        <aside class="rail2">
          <section class="card today"><p class="k">Today, Wed 14 Oct</p><ul><li><time>10:30</time><p><b>Kickoff with Northgate</b><small>Video call, 45 min</small></p></li><li><time>14:00</time><p><b>Review Solace brand</b><small>Studio, 1 h</small></p></li></ul></section>
          <section class="card trialc"><p class="k">Your plan</p><p class="tn"><b>Team trial</b><span>14 days left</span></p><i><s></s></i><small>Ends Wed, 28 Oct. No card on file yet.</small></section>
          <section class="card tip"><span class="tipi">${I(P.bulb, 18)}</span><p><b>Jump anywhere fast</b><small>Press Ctrl K to open the command bar from any screen.</small></p></section>
        </aside>
      </div>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:grid;grid-template-columns:232px minmax(0,1fr);height:100%}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brandrow{display:flex;align-items:center;gap:10px;padding:2px 6px 20px;font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .lbl{padding:0 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .nav{position:relative;display:flex;flex-direction:column;gap:2px}
.d .it{position:relative;z-index:1;display:flex;align-items:center;gap:11px;width:100%;height:38px;padding:0 10px;border:0;border-radius:10px;background:none;font:inherit;font-size:14px;font-weight:500;color:var(--ml-ink-2);text-align:left;cursor:pointer}
.d .it svg{flex:none;color:var(--ml-muted)}
.d .it.on{color:var(--ml-accent-ink);font-weight:600}
.d .it.on svg{color:var(--ml-accent)}
.d .it:hover{color:var(--ml-ink)}
.d .pill{position:absolute;top:0;left:0;right:0;height:38px;border-radius:10px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .foot{margin-top:auto}
.d .me{display:flex;align-items:center;gap:10px;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .me p{display:flex;flex-direction:column;min-width:0}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .top{display:flex;flex:none;align-items:center;gap:12px;height:62px;padding:0 28px;background:rgba(255,255,255,.72);border-bottom:1px solid var(--ml-line)}
.d .crumb{margin-right:auto;font-size:13.5px;color:var(--ml-muted)}
.d .crumb span{margin:0 7px;color:var(--ml-bar)}
.d .crumb b{font-weight:600;color:var(--ml-ink)}
.d .ic{position:relative;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer}
.d .ic:hover{background:var(--ml-bg)}
.d .ic i{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px var(--ml-surface)}
.d .page{display:flex;flex:1;flex-direction:column;gap:20px;min-height:0;padding:26px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .head h1{font-size:28px}
.d .date{margin-top:4px;font-size:14px;color:var(--ml-muted)}
.d .cols{display:grid;flex:1;grid-template-columns:minmax(0,1.7fr) minmax(0,1fr);gap:16px;min-height:0}
.d .card{border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .gs{display:flex;flex-direction:column;padding:22px}
.d .gh{display:flex;align-items:center;gap:20px}
.d .ringw{position:relative;flex:none;width:104px;height:104px}
.d .ringw svg{display:block;width:100%;height:100%;transform:rotate(-90deg)}
.d .ringw circle{fill:none;stroke-width:8;stroke-linecap:round}
.d .trk{stroke:var(--ml-bar-2)}
.d .prg{stroke:var(--ml-accent);stroke-dasharray:1;stroke-dashoffset:calc(1 - var(--p,0));transition:stroke-dashoffset 800ms var(--ml-ease),stroke .4s ease}
.d .gs.full .prg{stroke:#1DB954}
.d .rc{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.d .rc b{font-size:28px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .rc b::after{content:"%";font-size:15px;color:var(--ml-muted);margin-left:1px}
.d .rc small{margin-top:3px;font-size:11px;color:var(--ml-muted)}
.d .gt{font-size:20px;font-weight:650;letter-spacing:-.025em}
.d .gs2{margin-top:5px;font-size:13.5px;color:var(--ml-muted)}
.d .gs2 b{font-weight:650;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .items{display:flex;flex:1;flex-direction:column;gap:6px;margin:20px 0 0;padding:0;list-style:none}
.d .itm{display:flex;flex:1;align-items:center;gap:14px;max-height:84px;min-height:58px;padding:11px 12px;border-radius:14px;transition:background-color .35s ease,box-shadow .35s ease}
.d .itm.nxt{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .cb{display:grid;flex:none;place-items:center;width:26px;height:26px;padding:0;border:0;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1.75px var(--ml-bar);color:#fff;cursor:pointer;transition:background-color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .cb:hover{box-shadow:inset 0 0 0 1.75px var(--ml-accent-2)}
.d .cb.press{transform:scale(.9)}
.d .cb:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .cb svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .45s var(--ml-bounce)}
.d .itm.dn .cb{background:var(--ml-accent);box-shadow:none}
.d .itm.dn .cb svg{opacity:1;transform:none}
.d .itm .tx{flex:1;min-width:0}
.d .itm b{display:block;font-size:14px;font-weight:600;letter-spacing:-.01em;transition:color .3s ease}
.d .itm small{display:block;margin-top:1px;font-size:12.5px;color:var(--ml-muted)}
.d .itm.dn b{color:var(--ml-muted)}
.d .est{font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted);white-space:nowrap}
.d .itm.dn .est{visibility:hidden}
.d .act{height:32px;padding:0 13px;border:0;border-radius:99px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:inherit;font-size:12.5px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:opacity .3s ease,background-color .2s ease}
.d .act:hover{background:var(--ml-surface)}
.d .itm.dn .act{opacity:0;pointer-events:none}
.d .rail2{display:flex;flex-direction:column;gap:16px;min-width:0}
.d .today{padding:18px}
.d .k{font-size:12.5px;font-weight:600;color:var(--ml-muted)}
.d .today ul{display:flex;flex-direction:column;margin:10px 0 0;padding:0;list-style:none}
.d .today li{display:flex;gap:14px;padding:12px 0;border-bottom:1px solid var(--ml-line)}
.d .today li:last-child{border-bottom:0;padding-bottom:0}
.d .today time{flex:none;width:44px;font:500 12.5px/1.4 var(--ml-mono);color:var(--ml-accent-ink)}
.d .today p b{display:block;font-size:13.5px;font-weight:600}
.d .today small{font-size:12.5px;color:var(--ml-muted)}
.d .trialc{padding:18px}
.d .tn{display:flex;align-items:baseline;justify-content:space-between;margin-top:8px}
.d .tn b{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .tn span{font-size:13px;font-weight:600;color:var(--ml-accent-ink)}
.d .trialc i{display:block;height:7px;margin-top:12px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .trialc s{display:block;height:100%;border-radius:inherit;background:var(--ml-grad)}
.d .trialc small{display:block;margin-top:10px;font-size:12.5px;color:var(--ml-muted)}
.d .tip{display:flex;align-items:flex-start;gap:12px;padding:16px 18px}
.d .tipi{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .tip b{display:block;font-size:13.5px;font-weight:600}
.d .tip small{display:block;margin-top:2px;font-size:12.5px;line-height:1.4;color:var(--ml-muted)}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .top{padding:0 16px}
  .d .page{padding:18px 16px}
  .d .head h1{font-size:23px}
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .gs{padding:16px}
  .d .ringw{width:84px;height:84px}
  .d .rc b{font-size:22px}
  .d .gt{font-size:17px}
  .d .est,.d .act{display:none}
  .d .today,.d .tip,.d .trialc{display:none}
}`,
    run: (root) => {
      const list = [
        ['Create your workspace', 'Northgate Studio is ready', 0, '', 1],
        ['Choose your role', 'We tuned your first projects', 0, '', 1],
        ['Invite a teammate', 'Bring in your first collaborator', 2, 'Invite', 0],
        ['Connect your calendar', 'Sync meetings and due dates', 1, 'Connect', 0],
        ['Import your clients', 'Upload a CSV or add one by hand', 3, 'Import', 0],
        ['Send your first invoice', 'Takes about two minutes', 2, 'Create', 0],
      ];
      const CK = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      const done = new Set([0, 1]);
      $('.items').innerHTML = list
        .map(([t, d, m, a], i) => `<li class="itm" data-i="${i}"><button type="button" class="cb" role="checkbox" aria-checked="false" aria-label="Mark ${t} as done">${CK}</button><div class="tx"><b>${t}</b><small>${d}</small></div><span class="est">${m ? m + ' min' : ''}</span>${a ? `<button type="button" class="act">${a}</button>` : ''}</li>`)
        .join('');
      const rows = $$('.itm');
      const cbs = $$('.cb');
      const gs = $('.gs');
      const pc = $('.pc');
      let shown = 33;
      let raf = 0;
      const roll = (to) => {
        const from = shown;
        const t0 = performance.now();
        cancelAnimationFrame(raf);
        const step = (t) => {
          if (!root.isConnected) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 800);
          shown = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
          pc.textContent = String(shown);
          if (k < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      };
      const render = () => {
        const n = done.size;
        const total = list.length;
        let next = -1;
        rows.forEach((r, i) => {
          const d = done.has(i);
          r.classList.toggle('dn', d);
          cbs[i].setAttribute('aria-checked', String(d));
          if (!d && next < 0) next = i;
          r.classList.toggle('nxt', i === next);
        });
        const mins = list.reduce((s, x, i) => s + (done.has(i) ? 0 : x[2]), 0);
        gs.style.setProperty('--p', String(n / total));
        gs.classList.toggle('full', n === total);
        $('.gt').textContent = n === total ? 'You are all set' : 'Get started with Halden';
        $('.gs2').innerHTML = n === total ? 'Every step is done. Welcome aboard.' : `<b>${n} of ${total}</b> steps done, about <b>${mins} min</b> left`;
        roll(Math.round((n / total) * 100));
      };
      cbs.forEach((b, i) =>
        b.addEventListener('click', () => {
          if (done.has(i)) done.delete(i);
          else done.add(i);
          render();
        }),
      );
      $$('.act').forEach((b) => b.addEventListener('click', () => b.closest('.itm').querySelector('.cb').click()));
      render();
      shown = 33;
      pc.textContent = '33';

      // Autoplay: tick the remaining steps one by one; any real input hands over for 4s.
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
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(cur.classList.contains('off') ? 120 : 760);
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
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          done.clear();
          done.add(0);
          done.add(1);
          render();
          for (let i = 2; i < list.length; i++) {
            if (!(await tap(cbs[i], 0.5, 0.5))) break;
            await wait(1500);
          }
          await wait(2800);
        }
      })();
    },
    prompt: `Build a SaaS app home screen for a brand-new account with a "get started" checklist, as a full-viewport layout (height: 100dvh; content scrolls, shell does not).

Layout: CSS grid, columns 232px and minmax(0, 1fr). White sidebar with a 1px right hairline: logo row, a small uppercase "Workspace" label, nav items 38px tall with line icons (Home active on a soft accent pill, Projects, Clients, Invoices, Reports), and the signed-in user at the bottom. Main column: a 62px top bar (breadcrumb, search and bell icon buttons, avatar), then the page with a 28px heading ("Welcome to Halden, Maya"), a muted date line, and a two-column grid (1.7fr / 1fr). The wide card is the checklist; the narrow column holds a "Today" agenda card (two timed events) and a tip card.

Checklist card: a 104px progress ring on the left (an SVG circle with pathLength="1", stroke-dasharray: 1, stroke-dashoffset: 1 - progress, rotated -90 degrees, 8px round caps on a pale track) with the percentage in the middle in tabular numbers, next to a 20px heading "Get started with Halden" and a status line ("2 of 6 steps done, about 8 min left"). Below, six rows: a 26px circular checkbox button (role="checkbox", aria-checked, label "Mark X as done"), a title, a one-line description, an estimate in a mono face ("2 min") and a small pill action button (Invite, Connect, Import, Create). The first unfinished row sits on an accent-soft highlight so the next step is obvious. Completed rows mute their title and hide the estimate and action.

Motion: ticking a row fills the checkbox accent and its tick scales in with a slight overshoot (450ms bounce curve); the ring animates stroke-dashoffset over 800ms with a critically damped curve while the percentage counts up (ease-out cubic, rAF). When all six are done the ring turns green, the heading becomes "You are all set" and the status line says so. Unticking works too and reverses everything.

Accessibility: real buttons, focus-visible rings, aria-live on the status line, prefers-reduced-motion removes the counting. Phone: hide the sidebar, stack the columns, shrink the ring to 84px and hide the estimates, actions, agenda and tip. Plain HTML, CSS and JS, no libraries; React-friendly structure (Sidebar, TopBar, ChecklistCard, ProgressRing, ChecklistItem, AgendaCard).`,
  });

  ML.add({
    id: 'app-onboarding-tour',
    cat: 'app-onboarding',
    title: 'Product tour spotlight',
    sub: 'A spotlight glides between features',
    html: `
<div class="app">
  <aside class="side">
    <div class="brandrow"><span class="mark">${I(P.mark, 16)}</span><b>Halden</b></div>
    <p class="wsl">Workspace</p>
    <nav class="nav" aria-label="Main">
      <button class="it" type="button">${I(P.dash)}<span>Home</span></button>
      <button class="it on t0" type="button" aria-current="page">${I(P.folder)}<span>Projects</span><em>12</em></button>
      <button class="it" type="button">${I(P.users)}<span>Clients</span></button>
      <button class="it" type="button">${I(P.receipt)}<span>Invoices</span></button>
      <button class="it" type="button">${I(P.chart)}<span>Reports</span></button>
    </nav>
    <div class="foot"><div class="me"><span class="av">MR</span><p><b>Maya Reyes</b><small>Northgate Studio</small></p></div></div>
  </aside>
  <div class="main">
    <header class="top">
      <p class="crumb">Northgate<span>/</span><b>Projects</b></p>
      <label class="search t3">${I(P.search, 16)}<span>Search or jump to</span><kbd>Ctrl K</kbd></label>
      <button class="ic bellb" type="button" aria-label="Notifications">${I(P.bell, 18)}<i></i></button>
      <span class="av">MR</span>
    </header>
    <main class="page">
      <div class="head"><div><h1>Projects</h1><p class="date">23 active, 4 due this week</p></div><button class="cta t1" type="button">${I(P.plus, 16)}New project</button></div>
      <div class="kpis t2">
        <div class="card kpi"><p class="k">Active</p><p class="v">23</p><span class="dl">+3 this month</span></div>
        <div class="card kpi"><p class="k">Due this week</p><p class="v">4</p><span class="dl w">Next: Thu</span></div>
        <div class="card kpi"><p class="k">On track</p><p class="v">87%</p><span class="dl">+4%</span></div>
      </div>
      <section class="card plist">
        <div class="pr"><span class="pn"><b>Brand refresh</b><small>Solace Studio</small></span><i class="pbar"><s style="--w:.72"></s></i><em>Due Fri</em></div>
        <div class="pr"><span class="pn"><b>Mobile app v2</b><small>Meridian Foods</small></span><i class="pbar"><s style="--w:.48"></s></i><em>Due 21 Oct</em></div>
        <div class="pr"><span class="pn"><b>Site migration</b><small>Kestrel &amp; Co</small></span><i class="pbar"><s style="--w:.9"></s></i><em>Due Thu</em></div>
        <div class="pr"><span class="pn"><b>Quarterly report</b><small>Northgate</small></span><i class="pbar"><s style="--w:.35"></s></i><em>Due 28 Oct</em></div>
        <div class="pr"><span class="pn"><b>Onboarding kit</b><small>Brightline Dental</small></span><i class="pbar"><s style="--w:.15"></s></i><em>Due 4 Nov</em></div>
      </section>
    </main>
  </div>
  <div class="dim" aria-hidden="true"></div>
  <div class="edge" aria-hidden="true"></div>
  <section class="tip" role="dialog" aria-label="Product tour" aria-live="polite">
    <span class="ar" aria-hidden="true"></span>
    <p class="stp"></p><h2 class="tt"></h2><p class="td"></p>
    <div class="tf"><div class="d4" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="tb"><button type="button" class="lk skp">Skip tour</button><button type="button" class="ghost bk">Back</button><button type="button" class="go nx"><span class="lbl">Next</span></button></div></div>
  </section>
  <button type="button" class="replay">${I(P.flag, 15)}Replay tour</button>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{position:relative;display:grid;grid-template-columns:232px minmax(0,1fr);height:100%;overflow:hidden}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brandrow{display:flex;align-items:center;gap:10px;padding:2px 6px 20px;font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .wsl{padding:0 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .nav{display:flex;flex-direction:column;gap:2px}
.d .it{display:flex;align-items:center;gap:11px;width:100%;height:38px;padding:0 10px;border:0;border-radius:10px;background:none;font:inherit;font-size:14px;font-weight:500;color:var(--ml-ink-2);text-align:left;cursor:pointer}
.d .it svg{flex:none;color:var(--ml-muted)}
.d .it em{margin-left:auto;padding:4px 7px;border-radius:999px;background:var(--ml-bg);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-accent-ink)}
.d .it.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink);font-weight:600}
.d .it.on svg{color:var(--ml-accent)}
.d .foot{margin-top:auto}
.d .me{display:flex;align-items:center;gap:10px;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .me p{display:flex;flex-direction:column;min-width:0}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .av{flex:none;display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .top{display:flex;flex:none;align-items:center;gap:12px;height:62px;padding:0 28px;background:rgba(255,255,255,.72);border-bottom:1px solid var(--ml-line)}
.d .crumb{font-size:13.5px;color:var(--ml-muted)}
.d .crumb span{margin:0 7px;color:var(--ml-bar)}
.d .crumb b{font-weight:600;color:var(--ml-ink)}
.d .search{display:flex;align-items:center;gap:8px;width:300px;height:38px;margin-left:auto;padding:0 8px 0 12px;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13.5px;color:var(--ml-muted)}
.d .search span{flex:1}
.d kbd{padding:5px 6px;border-radius:6px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .ic{position:relative;display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2)}
.d .ic i{position:absolute;top:9px;right:10px;width:7px;height:7px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 2px var(--ml-surface)}
.d .page{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:24px 28px 28px;overflow:hidden}
.d .head{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.d .head h1{font-size:26px}
.d .date{margin-top:4px;font-size:13.5px;color:var(--ml-muted)}
.d .cta{display:inline-flex;align-items:center;gap:7px;height:40px;padding:0 16px;border:0;border-radius:10px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22);font:inherit;font-size:13.5px;font-weight:600;white-space:nowrap}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .kpis{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;border-radius:18px}
.d .kpi{padding:16px 18px}
.d .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .v{margin-top:8px;font-size:28px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .dl{display:inline-flex;margin-top:10px;padding:3px 8px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:600;color:#12893C}
.d .dl.w{background:rgba(255,159,10,.12);color:#B25E00}
.d .plist{display:flex;flex:1;flex-direction:column;padding:6px 18px;min-height:0;overflow:hidden}
.d .pr{display:grid;flex:1;max-height:96px;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr) 90px;align-items:center;gap:18px;padding:13px 0;border-bottom:1px solid var(--ml-line)}
.d .pr:last-child{border-bottom:0}
.d .pn b{display:block;font-size:14px;font-weight:600}
.d .pn small{font-size:12.5px;color:var(--ml-muted)}
.d .pbar{display:block;height:7px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .pbar s{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(var(--w));transform-origin:0 50%}
.d .pr em{font-size:12.5px;font-style:normal;font-weight:600;text-align:right;color:var(--ml-ink-2)}
.d .dim{position:absolute;inset:0;z-index:20;background:rgba(35,15,10,.56);transition:clip-path 650ms var(--ml-ease),opacity .4s ease}
.d .edge{position:absolute;inset:0;z-index:21;pointer-events:none;background:var(--ml-accent-2);transition:clip-path 650ms var(--ml-ease),opacity .4s ease}
.d .nt .dim,.d .nt .edge{transition:none}
.d .tip{position:absolute;left:0;top:0;z-index:30;width:330px;padding:18px 18px 16px;border-radius:18px;background:var(--ml-bg);box-shadow:0 2px 4px rgba(35,15,10,.08),0 24px 50px rgba(35,15,10,.28);transform:translate(var(--tx,20px),var(--ty,20px));transition:transform 650ms var(--ml-spring),opacity .35s ease}
.d .nt .tip{transition:none}
.d .ar{position:absolute;width:14px;height:14px;border-radius:3px;background:var(--ml-bg);transform:rotate(45deg)}
.d .tip.sl .ar{left:-6px;top:calc(var(--ay,30px) - 7px)}
.d .tip.sT .ar{top:-6px;left:calc(var(--ax,30px) - 7px)}
.d .tip.sB .ar{bottom:-6px;left:calc(var(--ax,30px) - 7px)}
.d .stp{font:600 11px/1 var(--ml-mono);letter-spacing:.04em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .tt{margin-top:10px;font-size:17px;line-height:1.25;font-weight:650;letter-spacing:-.02em}
.d .td{margin-top:6px;font-size:13.5px;line-height:1.5;color:var(--ml-muted)}
.d .swap{animation:ob-in 420ms var(--ml-spring) both}
.d .tf{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:18px}
.d .d4{display:flex;gap:6px}
.d .d4 i{width:7px;height:7px;border-radius:50%;background:var(--ml-bar);transition:background-color .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .d4 i.on{background:var(--ml-accent);transform:scale(1.35)}
.d .tb{display:flex;align-items:center;gap:8px}
.d .tb .lk{padding:6px 4px;font-size:13px;white-space:nowrap}
.d .tb .ghost,.d .tb .go{height:36px;padding:0 14px;border-radius:10px;font-size:13px}
.d .tb .go{min-width:72px;box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.22)}
.d .tb .ghost:disabled{display:none}
.d .replay{position:absolute;right:28px;bottom:26px;z-index:40;display:none;align-items:center;gap:8px;height:40px;padding:0 16px;border:0;border-radius:99px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);font:inherit;font-size:13.5px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;animation:ob-pop 420ms var(--ml-ease)}
.d .replay.press{transform:scale(.95)}
.d .fin .dim,.d .fin .edge,.d .fin .tip{opacity:0;pointer-events:none}
.d .fin .replay{display:inline-flex}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .search{display:none}
  .d .top{padding:0 16px}
  .d .crumb{margin-right:auto}
  .d .page{padding:18px 16px}
  .d .head h1{font-size:23px}
  .d .kpis{grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
  .d .kpi{padding:12px}
  .d .v{font-size:22px}
  .d .dl{display:none}
  .d .pr{grid-template-columns:minmax(0,1fr) 80px;gap:12px}
  .d .pr .pbar{display:none}
  .d .tip{width:min(330px,calc(100% - 24px))}
}
@media (prefers-reduced-motion: reduce){.d .dim,.d .edge,.d .tip{transition-duration:1ms}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const app = $('.app');
      const dim = $('.dim');
      const edge = $('.edge');
      const tip = $('.tip');
      const cur = $('.cur');
      const nx = $('.nx');
      const bk = $('.bk');
      const steps = [
        { sel: '.t0', fb: '.head', pref: 'r', pad: 6, t: 'Everything lives in Projects', d: 'Open a project to see its tasks, files and invoices side by side.' },
        { sel: '.t1', fb: '.t1', pref: 'b', pad: 6, t: 'Start with a new project', d: 'Create one from a template in about a minute.' },
        { sel: '.t2', fb: '.t2', pref: 'b', pad: 8, t: 'Know where you stand', d: 'Active, due and on-track counts update as your team works.' },
        { sel: '.t3', fb: '.bellb', pref: 'b', pad: 6, t: 'Jump anywhere with Ctrl K', d: 'Search clients, projects and invoices, or run a command.' },
      ];
      let idx = 0;
      let finished = false;
      const rr = (x, y, w, h, r) => `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
      const hole = (el, pad) => {
        const o = app.getBoundingClientRect();
        const s = o.width / app.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return { x: (r.left - o.left) / s - pad, y: (r.top - o.top) / s - pad, w: r.width / s + pad * 2, h: r.height / s + pad * 2 };
      };
      const layout = () => {
        const st = steps[idx];
        let el = $(st.sel);
        if (!el || el.offsetParent === null) el = $(st.fb);
        const W = app.offsetWidth;
        const H = app.offsetHeight;
        const h = hole(el, st.pad);
        const R = 12;
        dim.style.clipPath = `path(evenodd,"M0 0H${W}V${H}H0Z ${rr(h.x, h.y, h.w, h.h, R)}")`;
        edge.style.clipPath = `path(evenodd,"${rr(h.x - 2.5, h.y - 2.5, h.w + 5, h.h + 5, R + 2.5)} ${rr(h.x, h.y, h.w, h.h, R)}")`;
        const tw = tip.offsetWidth;
        const th = tip.offsetHeight;
        let x;
        let y;
        let side;
        if (st.pref === 'r' && h.x + h.w + 18 + tw <= W - 12) {
          x = h.x + h.w + 18;
          y = Math.min(Math.max(h.y + h.h / 2 - 44, 12), H - th - 12);
          side = 'sl';
          tip.style.setProperty('--ay', Math.min(Math.max(h.y + h.h / 2 - y, 22), th - 22) + 'px');
        } else {
          x = Math.min(Math.max(h.x + h.w / 2 - tw / 2, 12), W - tw - 12);
          if (h.y + h.h + 18 + th <= H - 12) {
            y = h.y + h.h + 18;
            side = 'sT';
          } else {
            y = Math.max(h.y - 18 - th, 12);
            side = 'sB';
          }
          tip.style.setProperty('--ax', Math.min(Math.max(h.x + h.w / 2 - x, 24), tw - 24) + 'px');
        }
        tip.className = 'tip ' + side;
        tip.style.setProperty('--tx', x + 'px');
        tip.style.setProperty('--ty', y + 'px');
      };
      const content = () => {
        const st = steps[idx];
        $('.stp').textContent = 'Step ' + (idx + 1) + ' of ' + steps.length;
        $('.tt').textContent = st.t;
        $('.td').textContent = st.d;
        $$('.d4 i').forEach((n, i) => n.classList.toggle('on', i === idx));
        bk.disabled = idx === 0;
        nx.querySelector('.lbl').textContent = idx === steps.length - 1 ? 'Done' : 'Next';
        ['.stp', '.tt', '.td'].forEach((q) => {
          const n = $(q);
          n.classList.remove('swap');
          void n.offsetWidth;
          n.classList.add('swap');
        });
      };
      const go = (i) => {
        idx = Math.max(0, Math.min(steps.length - 1, i));
        content();
        layout();
      };
      const finish = () => {
        finished = true;
        app.classList.add('fin');
      };
      const restart = () => {
        finished = false;
        app.classList.remove('fin');
        go(0);
      };
      nx.addEventListener('click', () => (idx === steps.length - 1 ? finish() : go(idx + 1)));
      bk.addEventListener('click', () => go(idx - 1));
      $('.skp').addEventListener('click', finish);
      $('.replay').addEventListener('click', restart);
      root.addEventListener('keydown', (e) => {
        if (finished) return;
        if (e.key === 'ArrowRight') nx.click();
        if (e.key === 'ArrowLeft') bk.click();
        if (e.key === 'Escape') finish();
      });
      // first paint without transition, then animate; re-fit on resize without animating
      app.classList.add('nt');
      content();
      layout();
      requestAnimationFrame(() => requestAnimationFrame(() => app.classList.remove('nt')));
      if (window.ResizeObserver) {
        let t = 0;
        new ResizeObserver(() => {
          app.classList.add('nt');
          layout();
          clearTimeout(t);
          t = setTimeout(() => app.classList.remove('nt'), 80);
        }).observe(app);
      }

      // Autoplay: a demo cursor presses Next through the tour, then Done, then Replay; any real input hands over for 4s.
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
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(cur.classList.contains('off') ? 120 : 760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(700px,500px)';
      (async () => {
        await wait(2200);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (finished) {
            if (!(await tap($('.replay'), 0.5, 0.5))) continue;
            await wait(2200);
            continue;
          }
          if (!(await tap(nx, 0.5, 0.5))) continue;
          await wait(finished ? 2600 : 1900);
        }
      })();
    },
    prompt: `Build a product tour (feature spotlight) that runs on top of a real app screen. The app underneath is a sidebar layout (232px sidebar, 62px top bar, a Projects page with a heading, a "New project" button, three KPI cards and a list of projects with progress bars and due pills) so the tour has real targets: the Projects nav item, the New project button, the KPI row and the search field.

Overlay: a dim layer over the whole app (rgba dark at about 56%) with a rounded-rectangle hole around the current target (target rect plus 6 to 8px padding, 12px radius). Do it with clip-path: path(evenodd, "M0 0H W V H H0Z <rounded rect path>") on the dim layer so the target stays fully interactive-looking and bright. A second layer with the same technique draws a 2.5px accent ring around the hole. Both paths have identical commands, so changing steps animates the hole between targets with transition: clip-path 650ms cubic-bezier(.32,.72,0,1). Recompute the paths from getBoundingClientRect on resize (disable the transition while resizing).

Tooltip: a 300px white card (18px radius, large soft shadow) positioned with transform: translate(x, y) on a critically damped spring (650ms linear() curve), placed to the right of the target when there is room, otherwise below it, otherwise above, clamped inside the viewport, with a rotated 14px square arrow pointing at the target. Content: a mono "Step 2 of 4" label, a 17px title, a muted 13.5px sentence, four progress dots (active dot scales 1.35 and fills your accent), then "Skip tour", a ghost Back (hidden on step one) and a primary Next that becomes Done on the last step. Text blocks re-enter with opacity and translateY(8px) on every step.

Behavior: Next, Back, ArrowRight, ArrowLeft and Escape (skip) all work; the tooltip is role="dialog" with aria-live. Finishing fades the overlay and tooltip out and shows a "Replay tour" pill. Falls back to a visible element when a target is hidden (phone). Phone: hide the sidebar and search, keep the tooltip within 24px of the edges. prefers-reduced-motion shortens the transitions. Plain HTML, CSS and JS, no libraries; React-friendly structure (TourProvider, Spotlight, TourTooltip, useTargetRect).`,
  });

  ML.add({
    id: 'app-onboarding-personalize',
    cat: 'app-onboarding',
    title: 'Personalize preferences',
    sub: 'Controls change a live preview pane',
    html: `
<div class="wrap">
  ${BAR(3, 4)}
  <div class="stage"><main class="pp" aria-labelledby="ml-ob-pp-h">
    <section class="cardx ctl">
      <p class="eyebrow">Make it yours</p>
      <h1 id="ml-ob-pp-h">Set up Halden your way</h1>
      <p class="lead">Everything here can be changed later in Settings.</p>
      <p class="fl">Density</p>
      <div class="seg2" role="radiogroup" aria-label="Density"><span class="thumb" aria-hidden="true"></span><button type="button" role="radio" aria-checked="true" data-d="0">Comfortable</button><button type="button" role="radio" aria-checked="false" data-d="1">Compact</button></div>
      <p class="fl">Theme</p>
      <div class="thms" role="radiogroup" aria-label="Theme">
        <button type="button" class="thm" role="radio" aria-checked="true" data-t="0"><span class="th" style="--b:#FFFFFF;--s:#FAF6F2;--l:#EAE1D9"></span>Clean</button>
        <button type="button" class="thm" role="radio" aria-checked="false" data-t="1"><span class="th" style="--b:#EEF4FF;--s:#DFEBFF;--l:#C9DCFA"></span>Mist</button>
        <button type="button" class="thm" role="radio" aria-checked="false" data-t="2"><span class="th" style="--b:#FFFFFF;--s:#FFFFFF;--l:#6B7789"></span>Contrast</button>
      </div>
      <p class="fl">Accent</p>
      <div class="sws" role="radiogroup" aria-label="Accent color">
        <button type="button" class="sw on" role="radio" aria-checked="true" aria-label="Blue" data-a="0" style="--a:#FF4433;--b:#FF7A3D"></button>
        <button type="button" class="sw" role="radio" aria-checked="false" aria-label="Sky" data-a="1" style="--a:#FF7A3D;--b:#8EC3FF"></button>
        <button type="button" class="sw" role="radio" aria-checked="false" aria-label="Deep blue" data-a="2" style="--a:#B3150F;--b:#2F7BFF"></button>
        <button type="button" class="sw" role="radio" aria-checked="false" aria-label="Slate blue" data-a="3" style="--a:#3D5A80;--b:#6F8DB5"></button>
      </div>
      <p class="fl">Notify me about</p>
      <div class="srs">
        <button type="button" class="sr" role="switch" aria-checked="true" data-n="men"><span class="tx"><b>Mentions</b><small>When someone tags you</small></span><span class="swt"><i></i></span></button>
        <button type="button" class="sr" role="switch" aria-checked="true" data-n="rem"><span class="tx"><b>Due reminders</b><small>The day before a deadline</small></span><span class="swt"><i></i></span></button>
        <button type="button" class="sr" role="switch" aria-checked="false" data-n="dg"><span class="tx"><b>Daily digest</b><small>One summary at 8:00 AM</small></span><span class="swt"><i></i></span></button>
      </div>
      <div class="acts"><button type="button" class="ghost">${I(P.back, 16)}Back</button>${GO('Save preferences', 'Saving', 'Saved', 'sv')}</div>
    </section>
    <aside class="pvw" aria-label="Live preview">
      <p class="pk">Live preview</p>
      <div class="pv" style="--pa:#FF4433">
        <div class="psb"><div class="pl"><i></i><b>Halden</b></div><span class="pni on"><i></i>Tasks</span><span class="pni"><i></i>Projects</span><span class="pni"><i></i>Clients</span><span class="pni"><i></i>Reports</span></div>
        <div class="pmn">
          <div class="pth"><b>Today</b><span class="bell">${I(P.bell, 16)}<i class="bdot"></i></span></div>
          <div class="dg">${I(P.mail, 15)}<span>Daily digest <b>on</b>. Next one tomorrow at 8:00 AM.</span></div>
          <div class="rows"></div>
        </div>
        <div class="toast"><span class="tav">TL</span><p><b>Tomas mentioned you</b><small>in Solace brand, just now</small></p></div>
      </div>
      <p class="pn">Changes show here as you make them.</p>
    </aside>
  </main></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pp{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.05fr);align-items:center;gap:32px;max-width:1000px}
.d .ctl{padding:28px 30px 26px}
.d .ctl h1{font-size:26px}
.d .ctl .lead{margin-top:6px;font-size:14px}
.d .ctl .fl{margin-top:16px;font-size:12.5px}
.d .seg2{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));margin-top:8px;padding:4px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg2 button{position:relative;z-index:1;height:34px;border:0;background:none;font:inherit;font-size:13px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .25s ease,transform 90ms ease-out}
.d .seg2 button[aria-checked=true]{color:var(--ml-ink)}
.d .seg2 button.press{transform:scale(.96)}
.d .seg2 button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:9px}
.d .seg2 .thumb{position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:9px;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px rgba(227,233,242,.8);transform:translateX(calc(var(--d,0) * 100%));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .thms{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:8px}
.d .thm{display:flex;flex-direction:column;gap:7px;padding:7px 7px 9px;border:0;border-radius:13px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:inherit;font-size:12.5px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:box-shadow .25s ease,color .25s ease,transform 90ms ease-out}
.d .thm.press{transform:scale(.96)}
.d .thm[aria-checked=true]{box-shadow:inset 0 0 0 2px var(--ml-accent);color:var(--ml-accent-ink)}
.d .thm:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .th{position:relative;display:block;height:40px;border-radius:8px;overflow:hidden;background:var(--b);box-shadow:inset 0 0 0 1.5px var(--l)}
.d .th::before{content:"";position:absolute;left:0;top:0;bottom:0;width:32%;background:var(--s);border-right:1.5px solid var(--l)}
.d .th::after{content:"";position:absolute;left:42%;right:10%;top:9px;height:5px;border-radius:3px;background:var(--l);box-shadow:0 10px 0 var(--l),0 20px 0 var(--l)}
.d .sws{display:flex;gap:12px;margin-top:8px}
.d .sw{width:30px;height:30px;padding:0;border:0;border-radius:50%;background:linear-gradient(135deg,var(--a),var(--b));cursor:pointer;transition:transform .25s var(--ml-ease),box-shadow .25s ease}
.d .sw:hover{transform:scale(1.08)}
.d .sw.press{transform:scale(.92)}
.d .sw.on{box-shadow:0 0 0 3px #fff,0 0 0 5px var(--a)}
.d .sw:focus-visible{outline:2px solid var(--ml-accent);outline-offset:4px}
.d .srs{display:flex;flex-direction:column;margin-top:4px}
.d .sr{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:9px 0;border:0;border-bottom:1px solid var(--ml-line);background:none;font:inherit;text-align:left;color:var(--ml-ink);cursor:pointer}
.d .sr:last-child{border-bottom:0}
.d .sr:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px;border-radius:8px}
.d .sr b{display:block;font-size:13.5px;font-weight:600}
.d .sr small{display:block;font-size:12px;color:var(--ml-muted)}
.d .swt{position:relative;flex:none;width:44px;height:26px;border-radius:99px;background:var(--ml-bar);transition:background-color .25s ease}
.d .swt i{position:absolute;left:3px;top:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .sr[aria-checked=true] .swt{background:var(--ml-accent)}
.d .sr[aria-checked=true] .swt i{transform:translateX(18px)}
.d .sr.press .swt i{transform:translateX(9px)}
.d .ctl .acts{margin-top:20px}
.d .ctl .acts .go,.d .ctl .acts .ghost{height:42px}
.d .pvw{display:flex;flex-direction:column;min-width:0}
.d .pk{margin-bottom:12px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .pn{margin-top:12px;font-size:12.5px;color:var(--ml-muted)}
.d .pv{--pbg:#fff;--pside:#FAF6F2;--pline:#EAE1D9;--pink:#1D1D1F;--pmute:#86868B;--prow:#fff;--pw:550;position:relative;display:grid;grid-template-columns:minmax(0,28%) minmax(0,1fr);min-height:440px;border-radius:18px;overflow:hidden;background:var(--pbg);color:var(--pink);box-shadow:inset 0 0 0 1px var(--pline),var(--ml-shadow-lg);transition:background-color .35s ease,color .35s ease,box-shadow .35s ease}
.d .pv.t1{--pbg:#EEF4FF;--pside:#DFEBFF;--pline:#C3D8FA;--pink:#10243F;--pmute:#56709A}
.d .pv.t2{--pbg:#fff;--pside:#fff;--pline:#6B7789;--pink:#000;--pmute:#333B49;--pw:700}
.d .psb{display:flex;flex-direction:column;gap:6px;padding:16px 12px;background:var(--pside);border-right:1px solid var(--pline);transition:background-color .35s ease}
.d .pl{display:flex;align-items:center;gap:8px;margin-bottom:10px;font-size:13px;font-weight:650}
.d .pl i{width:20px;height:20px;border-radius:6px;background:var(--pa);transition:background-color .35s ease}
.d .pni{display:flex;align-items:center;gap:8px;padding:7px 8px;border-radius:8px;font-size:12.5px;font-weight:var(--pw);color:var(--pmute)}
.d .pni i{width:12px;height:12px;border-radius:4px;background:var(--pline)}
.d .pni.on{background:var(--prow);color:var(--pink);box-shadow:inset 0 0 0 1px var(--pline)}
.d .pni.on i{background:var(--pa);transition:background-color .35s ease}
.d .pmn{display:flex;flex-direction:column;gap:10px;min-width:0;padding:16px 16px 18px}
.d .pth{display:flex;align-items:center;justify-content:space-between}
.d .pth b{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .bell{position:relative;display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:var(--pmute);box-shadow:inset 0 0 0 1px var(--pline)}
.d .bdot{position:absolute;top:6px;right:7px;width:7px;height:7px;border-radius:50%;background:var(--pa);box-shadow:0 0 0 2px var(--pbg);transition:background-color .35s ease}
.d .pv:not(.nmen) .bdot{display:none}
.d .dg{display:none;align-items:center;gap:8px;padding:8px 10px;border-radius:10px;background:color-mix(in srgb,var(--pa) 12%,var(--pbg));font-size:12px;color:var(--pink);animation:ob-in 420ms var(--ml-spring) both}
.d .dg svg{flex:none;color:var(--pa)}
.d .pv.ndg .dg{display:flex}
.d .rows{display:flex;flex-direction:column;gap:6px}
.d .trow{display:grid;grid-template-columns:18px minmax(0,1fr) auto 24px;align-items:center;gap:10px;padding:12px 10px;border-radius:11px;background:var(--prow);box-shadow:inset 0 0 0 1px var(--pline);font-size:13px}
.d .pv.cmp .trow{padding:6px 10px;font-size:12.5px}
.d .pv.cmp .rows{gap:4px}
.d .pv.flsh .trow{animation:ob-flash 420ms ease}
.d .tck{width:16px;height:16px;border-radius:50%;box-shadow:inset 0 0 0 1.75px var(--pline)}
.d .trow.dn .tck{background:var(--pa);box-shadow:none}
.d .tx2{min-width:0}
.d .tx2 b{display:block;overflow:hidden;font-weight:var(--pw);white-space:nowrap;text-overflow:ellipsis}
.d .tx2 small{display:block;overflow:hidden;font-size:11px;color:var(--pmute);white-space:nowrap;text-overflow:ellipsis}
.d .pv.cmp .tx2 small{display:none}
.d .due{padding:3px 8px;border-radius:99px;background:rgba(255,159,10,.14);font-size:11px;font-weight:650;color:#B25E00;white-space:nowrap}
.d .pv:not(.nrem) .due{visibility:hidden}
.d .tav2{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:color-mix(in srgb,var(--pa) 14%,var(--pbg));font-size:9.5px;font-weight:700;color:var(--pa)}
.d .toast{position:absolute;right:14px;bottom:14px;display:flex;align-items:center;gap:10px;padding:10px 14px 10px 10px;border-radius:14px;background:var(--prow);box-shadow:inset 0 0 0 1px var(--pline),0 12px 28px rgba(35,15,10,.16);opacity:0;transform:translateY(12px);transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .pv.nmen .toast{opacity:1;transform:none}
.d .toast p b{display:block;font-size:12.5px;font-weight:650}
.d .toast small{font-size:11.5px;color:var(--pmute)}
.d .tav{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--pa);font-size:10.5px;font-weight:700;color:#fff;transition:background-color .35s ease}
@keyframes ob-flash{from{opacity:.55}to{opacity:1}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{grid-template-columns:1fr auto;padding:16px 20px}
  .d .steps b,.d .skip{display:none}
  .d .stage{padding:0 14px 24px}
  .d .pp{grid-template-columns:minmax(0,1fr);gap:24px}
  .d .ctl{padding:22px 18px 20px}
  .d .pv{min-height:380px;grid-template-columns:minmax(0,1fr)}
  .d .psb{display:none}
}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      const pv = $('.pv');
      const tasks = [
        ['Review Solace brand', 'Solace Studio', 'Due Fri', 'MR', 1],
        ['Send invoice 1043', 'Northgate', 'Due Thu', 'AT', 0],
        ['Plan Q4 roadmap', 'Halden', 'Due 21 Oct', 'TL', 0],
        ['Reply to Brightline', 'Brightline Dental', 'Today', 'HK', 0],
        ['Update client portal', 'Fernway', 'Due 23 Oct', 'DO', 0],
      ];
      $('.rows').innerHTML = tasks.map(([t, p, d, a, n]) => `<div class="trow${n ? ' dn' : ''}"><span class="tck"></span><span class="tx2"><b>${t}</b><small>${p}</small></span><span class="due">${d}</span><span class="tav2">${a}</span></div>`).join('');
      const accents = [['#FF4433'], ['#FF7A3D'], ['#B3150F'], ['#3D5A80']];
      const st = { d: 0, t: 0, a: 0, men: 1, rem: 1, dg: 0 };
      const seg = $('.seg2');
      const dBtns = $$('.seg2 button');
      const tBtns = $$('.thm');
      const aBtns = $$('.sw');
      const sBtns = $$('.sr');
      let flashT = 0;
      const render = (flash) => {
        seg.style.setProperty('--d', String(st.d));
        dBtns.forEach((b, i) => b.setAttribute('aria-checked', String(i === st.d)));
        tBtns.forEach((b, i) => b.setAttribute('aria-checked', String(i === st.t)));
        aBtns.forEach((b, i) => {
          b.classList.toggle('on', i === st.a);
          b.setAttribute('aria-checked', String(i === st.a));
        });
        sBtns.forEach((b) => b.setAttribute('aria-checked', String(!!st[b.dataset.n])));
        pv.classList.toggle('cmp', st.d === 1);
        pv.classList.remove('t1', 't2');
        if (st.t) pv.classList.add('t' + st.t);
        pv.style.setProperty('--pa', accents[st.a][0]);
        pv.classList.toggle('nmen', !!st.men);
        pv.classList.toggle('nrem', !!st.rem);
        pv.classList.toggle('ndg', !!st.dg);
        if (flash) {
          pv.classList.remove('flsh');
          void pv.offsetWidth;
          pv.classList.add('flsh');
          clearTimeout(flashT);
          flashT = setTimeout(() => pv.classList.remove('flsh'), 500);
        }
      };
      dBtns.forEach((b, i) => b.addEventListener('click', () => ((st.d = i), render(true))));
      tBtns.forEach((b, i) => b.addEventListener('click', () => ((st.t = i), render(true))));
      aBtns.forEach((b, i) => b.addEventListener('click', () => ((st.a = i), render(false))));
      sBtns.forEach((b) => b.addEventListener('click', () => ((st[b.dataset.n] = st[b.dataset.n] ? 0 : 1), render(false))));
      const sv = $('.sv');
      let busy = false;
      sv.addEventListener('click', () => {
        if (busy) return;
        busy = true;
        sv.classList.add('loading');
        setTimeout(() => {
          sv.classList.replace('loading', 'ok');
          setTimeout(() => {
            sv.classList.remove('ok');
            busy = false;
          }, 1500);
        }, 800);
      });
      render(false);

      // Autoplay: change density, theme, accent and notifications, watch the preview follow; any real input hands over for 4s.
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
        if (!el || el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const tap = async (el, fx, fy) => {
        cur.classList.toggle('off', !moveTo(el, fx, fy));
        await wait(cur.classList.contains('off') ? 120 : 760);
        if (!idle()) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        el.click();
        return true;
      };
      cur.style.transform = 'translate(560px,420px)';
      const cycles = [
        [dBtns[1], tBtns[1], aBtns[2], sBtns[2], sBtns[0]],
        [dBtns[0], tBtns[2], aBtns[1], sBtns[2], sBtns[0], tBtns[0], aBtns[0]],
      ];
      let round = 0;
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          for (const el of cycles[round % 2]) {
            if (!(await tap(el, 0.5, 0.5))) break;
            await wait(650);
          }
          if (round % 2 === 0) await tap(sv, 0.5, 0.5);
          round++;
          await wait(1800);
        }
      })();
    },
    prompt: `Build a "personalize" onboarding step with a live preview, full viewport (min-height: 100dvh), soft blue-white gradient background. Top bar: logo, step indicator ("Step 3 of 4" with filled accent segments) and a quiet Skip link. Below, a vertically centered two-pane area (max-width 1000px, gap 32px): a white controls card on the left and a preview pane on the right.

Controls card: eyebrow, 26px heading "Set up Halden your way", a muted line, then groups, each with a 12.5px label. Density: a 2-option segmented control (Comfortable, Compact) with a white thumb that slides via transform: translateX(n * 100%) on a critically damped spring (587ms linear() curve). Theme: three radio cards with a drawn thumbnail (Clean, Mist, Contrast), the selected one gets a 2px accent ring. Accent: four round swatches in blue steps (a white gap ring marks the selected one). Notifications: three switch rows (Mentions, Due reminders, Daily digest), each a button with role="switch" and aria-checked, a 44px by 26px track and a knob moving with translateX(18px) on the spring. Footer: ghost Back and a primary "Save preferences" button (sheen, then a green "Saved").

Preview pane: a mini app window driven by CSS variables set on its root: --pa accent, --pbg, --pside, --pline, --pink, --pmute for the theme (Clean white; Mist tinted blue-white with stronger lines; Contrast pure black text, heavier weight and darker hairlines). It shows a sidebar with a logo and four nav items, a "Today" header with a bell, and five task rows (round checkbox, title, project, due pill, avatar initials). Density toggles a "compact" class that cuts row padding from 12px to 6px and hides the project line, with a brief opacity flash on the rows (420ms). Mentions on: the bell shows an accent dot and a toast slides in at the bottom right (opacity plus translateY(12px) to 0). Due reminders off: the due pills disappear (visibility). Daily digest on: a tinted banner appears above the list. Everything color-related eases over 350ms.

Accessibility: radiogroups, switches with aria-checked, focus-visible rings, labels on swatches. Phone: stack the preview under the controls and hide its sidebar. Plain HTML, CSS and JS, no libraries; React-friendly structure (PreferencesForm, Segmented, ThemeCard, SwitchRow, PreviewApp).`,
  });
})();
