(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    coffee: '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
    mountain: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
    drop: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    minus: '<path d="M5 12h14"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    truck: '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    box: '<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    back: '<path d="m12 19-7-7 7-7"/><path d="M19 12H5"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    card: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
    skip: '<polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    swap: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    undo: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/>',
    printer: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
    pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    edit: '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/>',
    del: '<path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"/><path d="m12 9 6 6"/><path d="m18 9-6 6"/>',
    cash: '<rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    dash: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    nav: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>',
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

  // Drawn products (clean flat SVG objects). Tint with --c1 / --c2 on any ancestor. Use: <use href="#<prefix>-bag"/>
  const SYMS = (p) => `<svg class="defs" width="0" height="0" aria-hidden="true" focusable="false"><defs>
<symbol id="${p}-bag" viewBox="0 0 120 120"><ellipse cx="60" cy="112" rx="34" ry="4" fill="#2E140C" opacity=".13"/><path d="M32 26h56l7 82a5 5 0 0 1-5 5H30a5 5 0 0 1-5-5z" style="fill:var(--c1,#1F1410)"/><rect x="33" y="15" width="54" height="14" rx="3" style="fill:var(--c2,#3D2016)"/><path d="M36 34h48" stroke="#fff" stroke-opacity=".2" stroke-width="1.5" stroke-dasharray="3 3"/><rect x="40" y="50" width="40" height="44" rx="7" fill="#fff" fill-opacity=".96"/><ellipse cx="60" cy="65" rx="5.5" ry="8" transform="rotate(35 60 65)" fill="#1F1410"/><path d="M57.5 59c3 4 3 9 5.5 12" stroke="#fff" stroke-width="1.6" fill="none" stroke-linecap="round"/><rect x="47" y="80" width="26" height="3.5" rx="1.75" fill="#1F1410" opacity=".75"/><rect x="51" y="86.5" width="18" height="2.5" rx="1.25" fill="#1F1410" opacity=".3"/><path d="M30 42l2 62" stroke="#fff" stroke-opacity=".14" stroke-width="5" stroke-linecap="round"/></symbol>
<symbol id="${p}-mug" viewBox="0 0 120 120"><ellipse cx="58" cy="111" rx="34" ry="4" fill="#2E140C" opacity=".13"/><path d="M86 52h5a13 13 0 0 1 0 26h-7" fill="none" stroke="#CBD6E8" stroke-width="7" stroke-linecap="round"/><path d="M30 42h56v40a24 24 0 0 1-24 24h-8a24 24 0 0 1-24-24z" style="fill:var(--c1,#fff)" stroke="#CBD6E8" stroke-width="1.5"/><path d="M30 64h56v8H30z" style="fill:var(--c2,#FF4433)" opacity=".9"/><ellipse cx="58" cy="42" rx="28" ry="6" fill="#3D2016"/><ellipse cx="58" cy="42" rx="28" ry="6" fill="none" stroke="#CBD6E8" stroke-width="1.5"/><path d="M38 76l1 8" stroke="#fff" stroke-opacity=".7" stroke-width="3" stroke-linecap="round"/></symbol>
<symbol id="${p}-bottle" viewBox="0 0 120 120"><ellipse cx="60" cy="112" rx="26" ry="3.6" fill="#2E140C" opacity=".13"/><rect x="40" y="46" width="40" height="64" rx="12" style="fill:var(--c1,#DCE9FF)"/><rect x="51" y="34" width="18" height="14" rx="3" style="fill:var(--c2,#1F1410)"/><rect x="47" y="18" width="26" height="20" rx="6" style="fill:var(--c2,#1F1410)"/><rect x="53" y="6" width="14" height="14" rx="7" style="fill:var(--c2,#1F1410)"/><rect x="47" y="66" width="26" height="28" rx="5" fill="#fff" fill-opacity=".95"/><rect x="51" y="73" width="18" height="3" rx="1.5" fill="#1F1410" opacity=".8"/><rect x="51" y="80" width="12" height="2.5" rx="1.25" fill="#1F1410" opacity=".3"/><path d="M44 56v44" stroke="#fff" stroke-opacity=".55" stroke-width="3" stroke-linecap="round"/></symbol>
<symbol id="${p}-pack" viewBox="0 0 120 120"><ellipse cx="60" cy="113" rx="36" ry="4" fill="#2E140C" opacity=".13"/><path d="M48 28v-6a12 12 0 0 1 24 0v6" fill="none" style="stroke:var(--c2,#D92F1E)" stroke-width="5" stroke-linecap="round"/><path d="M30 60h-5a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h5z" style="fill:var(--c2,#D92F1E)"/><path d="M90 60h5a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4h-5z" style="fill:var(--c2,#D92F1E)"/><path d="M30 52a30 30 0 0 1 60 0v52a8 8 0 0 1-8 8H38a8 8 0 0 1-8-8z" style="fill:var(--c1,#FF4433)"/><rect x="38" y="40" width="44" height="20" rx="8" style="fill:var(--c2,#D92F1E)" opacity=".5"/><rect x="38" y="70" width="44" height="32" rx="9" style="fill:var(--c2,#D92F1E)"/><path d="M45 82h30" stroke="#fff" stroke-opacity=".55" stroke-width="2.5" stroke-linecap="round"/><rect x="55" y="45" width="10" height="9" rx="2.5" fill="#fff" fill-opacity=".9"/></symbol>
<symbol id="${p}-jar" viewBox="0 0 120 120"><ellipse cx="60" cy="108" rx="34" ry="4" fill="#2E140C" opacity=".13"/><rect x="30" y="54" width="60" height="52" rx="16" style="fill:var(--c1,#fff)" stroke="#CBD6E8" stroke-width="1.5"/><rect x="34" y="34" width="52" height="24" rx="7" style="fill:var(--c2,#1F1410)"/><path d="M39 43h42" stroke="#fff" stroke-opacity=".2" stroke-width="3" stroke-linecap="round"/><rect x="44" y="72" width="32" height="20" rx="4" fill="#FF4433" fill-opacity=".1"/><rect x="49" y="77" width="22" height="3" rx="1.5" fill="#1F1410" opacity=".8"/><rect x="53" y="83.5" width="14" height="2.5" rx="1.25" fill="#1F1410" opacity=".3"/></symbol>
<symbol id="${p}-dripper" viewBox="0 0 120 120"><ellipse cx="60" cy="113" rx="30" ry="3.6" fill="#2E140C" opacity=".13"/><rect x="46" y="86" width="28" height="26" rx="7" fill="#FF4433" fill-opacity=".14" stroke="#CBD6E8" stroke-width="1.5"/><rect x="42" y="77" width="36" height="10" rx="3" style="fill:var(--c2,#1F1410)"/><path d="M96 46h6a6 6 0 0 1 0 12H90" fill="none" stroke="#CBD6E8" stroke-width="4" stroke-linecap="round"/><path d="M24 40h72L76 78H44z" style="fill:var(--c1,#fff)" stroke="#CBD6E8" stroke-width="1.5" stroke-linejoin="round"/><ellipse cx="60" cy="40" rx="36" ry="5" fill="#3D2016"/><path d="M36 52l15 20" stroke="#fff" stroke-opacity=".65" stroke-width="3" stroke-linecap="round"/></symbol>
<symbol id="${p}-flask" viewBox="0 0 120 120"><ellipse cx="60" cy="112" rx="28" ry="3.6" fill="#2E140C" opacity=".13"/><rect x="40" y="26" width="40" height="84" rx="14" style="fill:var(--c1,#FF4433)"/><rect x="46" y="8" width="28" height="22" rx="6" style="fill:var(--c2,#1F1410)"/><rect x="40" y="56" width="40" height="22" fill="#fff" fill-opacity=".14"/><path d="M47 38v64" stroke="#fff" stroke-opacity=".3" stroke-width="4" stroke-linecap="round"/><rect x="52" y="64" width="16" height="3" rx="1.5" fill="#fff" fill-opacity=".9"/></symbol>
</defs></svg>`;
  const ART = (p, k, cls = 'pi') => `<svg class="${cls}" viewBox="0 0 120 120" aria-hidden="true"><use href="#${p}-${k}"/></svg>`;
  const HDR = (icon, name, links, active, count) =>
    `<header class="hdr"><b class="logo"><span class="mk">${I(icon, 16)}</span>${name}</b><nav class="hn" aria-label="Store">${links.map((l) => `<button type="button" class="nl${l === active ? ' on' : ''}">${l}</button>`).join('')}</nav><label class="hs">${I(P.search, 16)}<input type="search" placeholder="Search" aria-label="Search"></label><button class="ib" type="button" aria-label="Wishlist">${I(P.heart, 19)}</button><button class="ib cartb" type="button" aria-label="Cart">${I(P.bag, 19)}<i class="badge">${count}</i></button></header>`;

  // Shared styling for every card in this file. Strings only.
  const BASE = `
.d button{font:inherit;color:inherit}
.d .app{position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:var(--ml-bg);font-variant-numeric:tabular-nums}
.d .defs{position:absolute;width:0;height:0;overflow:hidden}
.d .hdr{display:flex;flex:none;align-items:center;gap:14px;height:64px;padding:0 28px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .logo{display:flex;align-items:center;gap:9px;font-size:16px;font-weight:650;letter-spacing:-.02em;white-space:nowrap}
.d .mk{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-ink)}
.d .hn{display:flex;gap:2px;margin-left:14px}
.d .nl{padding:8px 11px;border:0;border-radius:9px;background:none;font-size:13.5px;font-weight:500;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease}
.d .nl:hover{background:var(--ml-surface)}
.d .nl.on{background:var(--ml-surface);color:var(--ml-ink);font-weight:600}
.d .hs{display:flex;align-items:center;gap:8px;width:220px;height:38px;margin-left:auto;padding:0 13px;border-radius:999px;background:var(--ml-surface);color:var(--ml-muted)}
.d .hs input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px;color:var(--ml-ink)}
.d .hs input::placeholder{color:var(--ml-muted)}
.d .ib{position:relative;display:grid;flex:none;place-items:center;width:38px;height:38px;border:0;border-radius:50%;background:none;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .ib:hover{background:var(--ml-surface)}
.d .badge{position:absolute;top:1px;right:-1px;display:grid;place-items:center;min-width:17px;height:17px;padding:0 4px;border-radius:99px;background:var(--ml-accent);color:#fff;font:650 10.5px/1 var(--ml-font);font-style:normal;box-shadow:0 0 0 2px var(--ml-bg)}
.d .badge.pop{animation:cm-pop 460ms var(--ml-bounce)}
.d .card{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .cta{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;height:46px;padding:0 20px;border:0;border-radius:12px;overflow:hidden;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 10px 22px rgba(255,68,51,.22);font-size:14.5px;font-weight:600;white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out,background-color .3s ease,opacity .2s ease}
.d .cta:focus-visible,.d .ghost:focus-visible,.d .ib:focus-visible,.d .nl:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .cta:disabled{opacity:.45;cursor:default;box-shadow:none}
.d .cta.stk{display:grid;place-items:center}
.d .cta.stk > span{grid-area:1/1;display:inline-flex;align-items:center;gap:8px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .cta.stk .busy,.d .cta.stk .done{opacity:0;transform:translateY(10px)}
.d .cta.stk.loading .lbl,.d .cta.stk.ok .lbl,.d .cta.stk.ok .busy{opacity:0;transform:translateY(-10px)}
.d .cta.stk.loading .busy,.d .cta.stk.ok .done{opacity:1;transform:none}
.d .cta.loading::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.38) 50%,transparent 70%);background-size:220% 100%;animation:cm-sheen 1.1s linear infinite}
.d .cta.ok{background:#1DB954;box-shadow:0 1px 2px rgba(29,185,84,.3),0 10px 22px rgba(29,185,84,.2)}
.d .ghost{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:42px;padding:0 15px;border:0;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);font-size:13.5px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease}
.d .ghost:hover{background:var(--ml-surface)}
.d .cta:active,.d .ghost:active,.d .ib:active,.d .press:not(.cur){transform:scale(.96)}
.d .tile{position:relative;display:grid;place-items:center;border-radius:16px;overflow:hidden;background:linear-gradient(160deg,#F3F7FF,#DCE8FB)}
.d .tile::before{content:"";position:absolute;left:50%;top:-34%;width:92%;aspect-ratio:1;border-radius:50%;transform:translateX(-50%);background:radial-gradient(closest-side,rgba(255,255,255,.95),rgba(255,255,255,0))}
.d .tile .pi{position:relative;width:78%;height:78%}
.d .t2{background:linear-gradient(160deg,#F6F7FA,#E1E6EE)}
.d .t3{background:linear-gradient(160deg,#EAF2FF,#C9DDFB)}
.d .t4{background:linear-gradient(160deg,#F1F5FB,#D5DFEE)}
.d .v1{--c1:#1F1410;--c2:#3D2016}
.d .v2{--c1:#EEF2F8;--c2:#CBD6E8}
.d .v3{--c1:#FF8054;--c2:#FF5D47}
.d .v4{--c1:#8C97A8;--c2:#6F7B8F}
.d .v5{--c1:#FF4433;--c2:#D92F1E}
.d .stars{display:inline-flex;gap:1px;color:var(--ml-accent)}
.d .pill{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:99px;background:var(--ml-surface);font-size:12px;font-weight:600;white-space:nowrap;color:var(--ml-ink-2);transition:background-color .3s ease,color .3s ease}
.d .pill i{width:6px;height:6px;border-radius:50%;background:currentColor}
.d .pill.ok{background:rgba(29,185,84,.1);color:#12893C}
.d .pill.warn{background:rgba(255,159,10,.14);color:#B25E00}
.d .pill.bad{background:rgba(255,59,48,.09);color:#D70015}
.d .pill.blue{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .qty{display:inline-flex;flex:none;align-items:center;height:34px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .qty button{display:grid;place-items:center;width:32px;height:100%;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .qty button:hover{background:var(--ml-bar-2)}
.d .qty output{min-width:24px;text-align:center;font-size:13.5px;font-weight:600}
.d .toast{position:absolute;left:50%;bottom:22px;z-index:45;display:flex;align-items:center;gap:9px;padding:11px 16px;border-radius:12px;background:var(--ml-ink);color:#fff;font-size:13px;font-weight:550;white-space:nowrap;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translate(-50%,14px);pointer-events:none;transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .toast.on{opacity:1;transform:translate(-50%,0)}
.d .toast svg{color:#5BE08A}
.d .shim{background:linear-gradient(100deg,var(--ml-bar-2) 30%,#F7F9FD 50%,var(--ml-bar-2) 70%);background-size:220% 100%;animation:cm-sheen 1.3s linear infinite}
.d .fld{display:block;margin-top:14px;font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .field{position:relative;display:flex;align-items:center;gap:10px;height:44px;margin-top:6px;padding:0 13px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .25s ease,background-color .25s ease,color .25s ease}
.d .field input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font:inherit;font-size:14.5px;color:var(--ml-ink)}
.d .field input::placeholder{color:#A1A1A6}
.d .field:focus-within,.d .field.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .field.bad{box-shadow:inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1);color:#FF3B30;animation:cm-shake 380ms var(--ml-ease)}
.d .okc{display:grid;flex:none;place-items:center;width:64px;height:64px;border-radius:50%;background:rgba(29,185,84,.12);color:#12893C}
@keyframes cm-pop{0%{transform:scale(.6)}60%{transform:scale(1.18)}100%{transform:none}}
@keyframes cm-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes cm-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes cm-draw{to{stroke-dashoffset:0}}
@keyframes cm-shake{0%,100%{transform:none}25%{transform:translateX(-5px)}55%{transform:translateX(4px)}80%{transform:translateX(-2px)}}
@keyframes cm-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes cm-ping{0%{opacity:.5;transform:scale(1)}80%,100%{opacity:0;transform:scale(2.6)}}
@container scr (max-width: 760px){
  .d .hn,.d .hs{display:none}
  .d .hdr{gap:6px;padding:0 14px}
  .d .logo{margin-right:auto}
}
@media (prefers-reduced-motion: reduce){.d .shim,.d .float{animation:none}}`;

  // ---------------------------------------------------------------- 1. product page
  const pdSlides = [ART('pd', 'bag'), `<span class="duo">${ART('pd', 'bag')}${ART('pd', 'mug')}</span>`, ART('pd', 'dripper'), ART('pd', 'mug')];
  const pdTints = ['t1', 't2', 't3', 't4'];
  ML.add({
    id: 'app-commerce-product',
    cat: 'app-commerce',
    title: 'Product page',
    sub: 'Variants swap, add to cart flies to the bag',
    html: `
<div class="app">
  ${SYMS('pd')}
  ${HDR(P.coffee, 'Corvid Coffee', ['Beans', 'Gear', 'Subscriptions', 'Gifts'], 'Beans', 2)}
  <main class="pg">
    <p class="crumb">Beans<span>/</span>Single origin<span>/</span><b>Ethiopia Guji Natural</b></p>
    <div class="pgrid">
      <section class="gal v1" aria-label="Product gallery">
        <div class="thumbs">
          ${pdSlides.map((s, i) => `<button type="button" class="th tile ${pdTints[i]}${i === 0 ? ' on' : ''}" aria-label="Photo ${i + 1}">${s}</button>`).join('')}
        </div>
        <div class="hero tile t1">
          ${pdSlides.map((s, i) => `<div class="slide${i === 0 ? ' on' : ''}">${s}</div>`).join('')}
          <span class="hb pill">${I(P.coffee, 13)}Roasted 12 Oct</span>
        </div>
      </section>
      <section class="info">
        <p class="tag">Single origin - Guji, Ethiopia</p>
        <h1>Ethiopia Guji Natural</h1>
        <p class="rate"><span class="stars" aria-label="4.8 out of 5">${I(P.star, 14, 1)}${I(P.star, 14, 1)}${I(P.star, 14, 1)}${I(P.star, 14, 1)}${I(P.star, 14, 1)}</span><b>4.8</b> 212 reviews</p>
        <p class="price"><b class="pv">$19.00</b><span class="per">250 g bag, whole bean</span></p>
        <p class="desc">Blueberry jam, jasmine and a long cocoa finish. Roasted to order and shipped within two days.</p>
        <div class="opt"><p class="ol">Bag <b class="oc">Slate</b></p>
          <div class="sw" role="group" aria-label="Bag colour">
            <button type="button" class="swa on" data-n="Slate" data-c1="#1F1410" data-c2="#3D2016" style="--sw:#1F1410" aria-label="Slate" aria-pressed="true"></button>
            <button type="button" class="swa" data-n="Cloud" data-c1="#EEF2F8" data-c2="#CBD6E8" style="--sw:#E4EAF3" aria-label="Cloud" aria-pressed="false"></button>
            <button type="button" class="swa" data-n="Sky" data-c1="#FF8054" data-c2="#FF5D47" style="--sw:#FF8054" aria-label="Sky" aria-pressed="false"></button>
            <button type="button" class="swa" data-n="Stone" data-c1="#8C97A8" data-c2="#6F7B8F" style="--sw:#8C97A8" aria-label="Stone" aria-pressed="false"></button>
          </div>
        </div>
        <div class="opt"><p class="ol">Size</p>
          <div class="sz" role="group" aria-label="Size">
            <button type="button" class="sbtn on" data-p="19" data-n="250 g" aria-pressed="true"><b>250 g</b><small>$19.00</small></button>
            <button type="button" class="sbtn" data-p="34" data-n="500 g" aria-pressed="false"><b>500 g</b><small>$34.00</small></button>
            <button type="button" class="sbtn" data-p="62" data-n="1 kg" aria-pressed="false"><b>1 kg</b><small>$62.00</small></button>
          </div>
        </div>
        <div class="buy">
          <div class="qty" role="group" aria-label="Quantity"><button type="button" class="qm" aria-label="Decrease">${I(P.minus, 15)}</button><output class="qv">1</output><button type="button" class="qp" aria-label="Increase">${I(P.plus, 15)}</button></div>
          <button type="button" class="cta stk add"><span class="lbl">${I(P.bag, 17)}Add to cart</span><span class="done">${I(P.check, 17, 2.6)}Added</span></button>
          <button type="button" class="ib wish" aria-label="Save to wishlist" aria-pressed="false">${I(P.heart, 19)}</button>
        </div>
        <ul class="perks"><li>${I(P.truck, 17)}Free shipping over $35, arrives in 2 to 4 days</li><li>${I(P.repeat, 17)}Subscribe and save 10%, skip or pause anytime</li></ul>
      </section>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pg{display:flex;flex:1;flex-direction:column;min-height:0;padding:16px 28px 24px;overflow-y:auto;scrollbar-width:thin}
.d .crumb{flex:none;font-size:12.5px;color:var(--ml-muted)}
.d .crumb span{margin:0 7px;color:var(--ml-bar)}
.d .crumb b{font-weight:600;color:var(--ml-ink)}
.d .pgrid{display:grid;flex:1;grid-template-columns:minmax(0,1.08fr) minmax(0,1fr);gap:44px;min-height:540px;margin-top:14px}
.d .gal{display:grid;grid-template-columns:72px minmax(0,1fr);gap:12px;min-height:0}
.d .thumbs{display:flex;flex-direction:column;gap:10px}
.d .th{flex:none;width:72px;height:72px;padding:0;border:0;border-radius:14px;cursor:pointer;box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,transform 90ms ease-out}
.d .th .pi{width:84%;height:84%}
.d .th.on{box-shadow:inset 0 0 0 2px var(--ml-accent),0 0 0 3px var(--ml-accent-soft)}
.d .hero{min-height:0;border-radius:22px}
.d .slide{position:absolute;inset:0;display:grid;place-items:center;opacity:0;transform:scale(.95);transition:opacity .4s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .slide.on{opacity:1;transform:none}
.d .tile .slide .pi{width:64%;height:64%}
.d .slide.on .pi,.d .slide.on .duo{animation:cm-float 6s ease-in-out infinite}
.d .duo{position:relative;width:68%;height:68%}
.d .tile .duo .pi{position:absolute;left:0;bottom:0;width:68%;height:68%;animation:none}
.d .tile .duo .pi:last-child{left:auto;right:0;width:52%;height:52%}
.d .th .duo{width:84%;height:84%}
.d .hb{position:absolute;left:16px;top:16px;z-index:2;background:rgba(255,255,255,.85)}
.d .info{display:flex;flex-direction:column;justify-content:center;min-width:0;padding:6px 0}
.d .tag{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .info h1{margin-top:8px;font-size:32px;line-height:1.08;font-weight:650;letter-spacing:-.035em}
.d .rate{display:flex;align-items:center;gap:8px;margin-top:10px;font-size:13px;color:var(--ml-muted)}
.d .rate b{color:var(--ml-ink);font-weight:600}
.d .price{display:flex;align-items:baseline;gap:10px;margin-top:18px}
.d .pv{display:inline-block;font-size:30px;font-weight:650;letter-spacing:-.03em}
.d .pv.bump{animation:cm-pop 420ms var(--ml-bounce)}
.d .per{font-size:13px;color:var(--ml-muted)}
.d .desc{max-width:440px;margin-top:12px;font-size:14px;line-height:1.55;color:var(--ml-ink-2)}
.d .opt{margin-top:20px}
.d .ol{display:flex;gap:6px;font-size:12.5px;color:var(--ml-muted)}
.d .ol b{font-weight:600;color:var(--ml-ink)}
.d .sw{display:flex;gap:12px;margin-top:10px}
.d .swa{position:relative;width:32px;height:32px;padding:0;border:0;border-radius:50%;background:var(--sw);box-shadow:inset 0 0 0 1px rgba(35,15,10,.14);cursor:pointer;transition:transform 90ms ease-out}
.d .swa::after{content:"";position:absolute;inset:-5px;border-radius:50%;box-shadow:0 0 0 2px var(--ml-accent);opacity:0;transform:scale(.85);transition:opacity .2s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .swa.on::after{opacity:1;transform:none}
.d .swa:focus-visible{outline:2px solid var(--ml-accent);outline-offset:6px}
.d .sz{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:10px}
.d .sbtn{display:flex;flex-direction:column;justify-content:center;gap:2px;height:56px;padding:0 14px;border:0;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:left;cursor:pointer;transition:background-color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .sbtn b{font-size:13.5px;font-weight:600}
.d .sbtn small{font-size:12.5px;color:var(--ml-muted)}
.d .sbtn.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .sbtn:focus-visible,.d .swa:focus-visible,.d .th:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .buy{display:flex;gap:10px;margin-top:22px}
.d .buy .qty{height:46px}
.d .buy .qty button{width:36px}
.d .buy .cta{flex:1}
.d .wish{width:46px;height:46px;border-radius:12px;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .wish.on{color:var(--ml-accent)}
.d .wish.on svg{fill:currentColor}
.d .perks{display:flex;flex-direction:column;gap:10px;margin-top:20px;padding-top:18px;border-top:1px solid var(--ml-line);list-style:none;font-size:13px;color:var(--ml-ink-2)}
.d .perks li{display:flex;align-items:center;gap:10px}
.d .perks svg{color:var(--ml-accent)}
.d .fly{position:absolute;left:0;top:0;z-index:40;width:64px;height:64px;border-radius:16px;pointer-events:none;box-shadow:var(--ml-shadow-lg)}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .pg{padding:12px 16px 22px}
  .d .crumb{display:none}
  .d .pgrid{flex:none;grid-template-columns:minmax(0,1fr);gap:22px;min-height:0;margin-top:0}
  .d .gal{grid-template-columns:minmax(0,1fr);grid-template-rows:auto auto}
  .d .hero{order:1;aspect-ratio:1}
  .d .thumbs{order:2;flex-direction:row}
  .d .info h1{font-size:26px}
}
@media (prefers-reduced-motion: reduce){.d .slide.on .pi,.d .slide.on .duo{animation:none}}`,
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
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      // the grid scales this canvas down: convert screen pixels back to canvas pixels
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.5, 0.55);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };

      const gal = $('.gal');
      const thumbs = $$('.th');
      const slides = $$('.slide');
      const swa = $$('.swa');
      const sbtn = $$('.sbtn');
      const pv = $('.pv');
      const qv = $('.qv');
      const badge = $('.badge');
      const add = $('.add');
      let qty = 1;
      let count = 2;
      let busy = false;
      let cc = ['#1F1410', '#3D2016'];
      const setSlide = (i) => {
        thumbs.forEach((b, k) => b.classList.toggle('on', k === i));
        slides.forEach((s, k) => s.classList.toggle('on', k === i));
      };
      const setColor = (i) => {
        const b = swa[i];
        cc = [b.dataset.c1, b.dataset.c2];
        gal.style.setProperty('--c1', cc[0]);
        gal.style.setProperty('--c2', cc[1]);
        $('.oc').textContent = b.dataset.n;
        swa.forEach((s, k) => {
          s.classList.toggle('on', k === i);
          s.setAttribute('aria-pressed', String(k === i));
        });
      };
      const setSize = (i) => {
        const b = sbtn[i];
        pv.textContent = '$' + Number(b.dataset.p).toFixed(2);
        $('.per').textContent = b.dataset.n + ' bag, whole bean';
        pv.classList.remove('bump');
        void pv.offsetWidth;
        pv.classList.add('bump');
        sbtn.forEach((s, k) => {
          s.classList.toggle('on', k === i);
          s.setAttribute('aria-pressed', String(k === i));
        });
      };
      const setBadge = (n) => {
        count = n;
        badge.textContent = n;
        badge.classList.remove('pop');
        void badge.offsetWidth;
        badge.classList.add('pop');
      };
      thumbs.forEach((b, i) => b.addEventListener('click', () => setSlide(i)));
      swa.forEach((b, i) => b.addEventListener('click', () => setColor(i)));
      sbtn.forEach((b, i) => b.addEventListener('click', () => setSize(i)));
      $('.qm').addEventListener('click', () => {
        qty = Math.max(1, qty - 1);
        qv.textContent = qty;
      });
      $('.qp').addEventListener('click', () => {
        qty = Math.min(9, qty + 1);
        qv.textContent = qty;
      });
      const wish = $('.wish');
      wish.addEventListener('click', () => {
        const on = wish.classList.toggle('on');
        wish.setAttribute('aria-pressed', String(on));
      });
      add.addEventListener('click', () => {
        if (busy) return;
        busy = true;
        const app = $('.app');
        const fly = document.createElement('div');
        fly.className = 'fly tile t3';
        fly.innerHTML = '<svg class="pi" viewBox="0 0 120 120" aria-hidden="true"><use href="#pd-bag"/></svg>';
        fly.style.setProperty('--c1', cc[0]);
        fly.style.setProperty('--c2', cc[1]);
        app.appendChild(fly);
        const [bx, by] = pos(add, 0.5, 0.5);
        const [tx, ty] = pos(badge, 0.5, 0.5);
        const a = fly.animate(
          [
            { transform: `translate(${bx - 32}px,${by - 32}px) scale(1)`, opacity: 1 },
            { transform: `translate(${(bx + tx) / 2 - 32}px,${Math.min(by, ty) - 70}px) scale(.7)`, opacity: 1, offset: 0.5 },
            { transform: `translate(${tx - 32}px,${ty - 32}px) scale(.18)`, opacity: 0.6 },
          ],
          { duration: 820, easing: 'cubic-bezier(.55,0,.25,1)' }
        );
        a.onfinish = () => {
          fly.remove();
          setBadge(count + qty);
        };
        add.classList.add('ok');
        setTimeout(() => {
          add.classList.remove('ok');
          busy = false;
        }, 1800);
      });

      // Autoplay: pick a photo, a colour and a size, add to cart; any real input hands over for 4s.
      const run = async () => {
        if (!(await tap(thumbs[1]))) return;
        await wait(500);
        if (!(await tap(swa[2]))) return;
        await wait(300);
        if (!(await tap(sbtn[1]))) return;
        await wait(400);
        if (!(await tap(add))) return;
        await wait(3400);
        if (!idle()) return;
        setSlide(0);
        setColor(0);
        setSize(0);
        setBadge(2);
        qty = 1;
        qv.textContent = '1';
      };
      cur.style.transform = 'translate(760px,560px)';
      (async () => {
        await wait(1100);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          await run();
          await wait(1800);
        }
      })();
    },
    prompt: `Build a premium product detail page for an online coffee shop (swap in your own store and product). Full viewport storefront: a 64px header (logo mark and name, 4 nav buttons, a pill search field, a wishlist button and a cart button with a small accent count badge), then a breadcrumb and a two column product area (grid, columns 1.08fr / 1fr, 44px gap) that fills the height of the window.

Left: a gallery, a 72px column of square thumbnails next to one large rounded (22px) hero tile. Each image is a soft gradient tile (light blue to pale grey-blue with a faint white radial glow at the top) holding a drawn product (an inline SVG bag, mug, dripper; no photos needed). Selecting a thumbnail cross-fades the hero (opacity plus scale .95 to 1, spring 587ms) and gives the thumbnail a 2px accent ring. The active product drifts up and down 6px on a slow 6s loop.

Right: small uppercase origin label, a 32px title (weight 650, letter-spacing -0.035em), a star rating row, the price (30px) and a one line description, then two option groups: round colour swatches (the product recolours live through CSS custom properties --c1 and --c2 on the gallery; the chosen swatch gets an accent ring that scales in) and a size picker of three buttons (name and price; choosing one updates the price with a short pop). Under that a quantity stepper, a full width primary Add to cart button and a wishlist toggle, then two perk rows with icons.

Motion: Add to cart makes a 64px product thumbnail fly from the button to the cart badge along an arc (Web Animations API, transform only: translate plus scale 1, .7, .18 over 820ms, cubic-bezier(.55,0,.25,1)), then the badge count pops (scale .6, 1.18, 1 with a bounce curve). The button label slides up and turns into a green "Added" with a check for 1.8 seconds. Press states scale to .96 in 90ms.

Accessibility: swatches and sizes are buttons with aria-pressed, the thumbnails have aria-labels, visible focus-visible rings, prefers-reduced-motion removes the float and the fly (the badge still updates). Phone layout below 760px: single column, the hero goes square on top with the thumbnails in a row beneath it, the nav and search hide. Plain HTML, CSS and JS, no libraries; React-friendly structure (StoreHeader, Gallery, ProductInfo, OptionGroup, AddToCart).`,
  });

  // ---------------------------------------------------------------- 2. cart drawer
  const ctGrid = [
    ['Ridge Daypack 24L', '$84.00', 'pack', 'v1', 't1'],
    ['Trail Flask 750 ml', '$28.00', 'flask', 'v3', 't3'],
    ['Camp Mug 12 oz', '$18.00', 'mug', '', 't2'],
    ['Summit Pack 40L', '$146.00', 'pack', 'v5', 't4'],
    ['Ember Flask 1 L', '$36.00', 'flask', 'v4', 't1'],
    ['Basecamp Dripper', '$34.00', 'dripper', 'v1', 't3'],
  ];
  ML.add({
    id: 'app-commerce-cart',
    cat: 'app-commerce',
    title: 'Cart drawer',
    sub: 'Steppers update totals, shipping bar fills',
    html: `
<div class="app">
  ${SYMS('ct')}
  ${HDR(P.mountain, 'Fernway', ['Packs', 'Bottles', 'Camp', 'Apparel', 'Sale'], 'Camp', 3)}
  <main class="pg">
    <div class="ban"><div><p class="tag">Autumn trail edit</p><h1>Gear for the long weekend</h1><p class="lead">Free shipping on orders over $150.</p></div><span class="tile t3 bt">${ART('ct', 'pack')}</span></div>
    <div class="pgr">
      ${ctGrid.map((g) => `<article class="pc"><span class="tile ${g[4]} ${g[3]}">${ART('ct', g[2])}</span><p class="pn">${g[0]}</p><p class="pp">${g[1]}</p></article>`).join('')}
    </div>
  </main>
  <div class="scrim"></div>
  <aside class="dr" aria-label="Cart" role="dialog">
    <header class="dh"><h2>Your cart</h2><span class="pill blue cn">3 items</span><button type="button" class="ib dx" aria-label="Close cart">${I(P.x, 18)}</button></header>
    <div class="fs"><p class="fst"></p><div class="bar"><i></i></div></div>
    <ul class="lns"></ul>
    <footer class="df">
      <p class="rw"><span>Subtotal</span><b class="sub">$0.00</b></p>
      <p class="rw"><span>Shipping</span><b class="shp">$8.00</b></p>
      <p class="rw tot"><span>Estimated total</span><b class="tt">$0.00</b></p>
      <button type="button" class="cta co">${I(P.lock, 16)}Checkout</button>
      <p class="note">Taxes are calculated at checkout.</p>
    </footer>
  </aside>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pg{flex:1;min-height:0;padding:22px 28px 28px;overflow:hidden;display:flex;flex-direction:column;gap:20px}
.d .ban{display:flex;flex:none;align-items:center;justify-content:space-between;gap:20px;padding:22px 26px;border-radius:20px;background:var(--ml-surface)}
.d .tag{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .ban h1{margin-top:6px;font-size:28px;line-height:1.1;font-weight:650;letter-spacing:-.035em}
.d .lead{margin-top:6px;font-size:14px;color:var(--ml-muted)}
.d .bt{width:96px;height:96px;flex:none}
.d .pgr{display:grid;flex:1;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:minmax(0,1fr);gap:16px;min-height:0}
.d .pc{display:flex;flex-direction:column;gap:6px;min-height:0}
.d .pc .tile{flex:1;min-height:0}
.d .pn{font-size:13.5px;font-weight:600}
.d .pp{font-size:13px;color:var(--ml-muted)}
.d .scrim{position:absolute;inset:0;z-index:20;background:rgba(35,15,10,.3);transition:opacity .45s ease}
.d .app.closed .scrim{opacity:0;pointer-events:none}
.d .dr{position:absolute;top:0;right:0;bottom:0;z-index:30;display:flex;flex-direction:column;width:min(420px,100%);background:var(--ml-bg);box-shadow:-24px 0 60px rgba(35,15,10,.18);transition:transform .6s var(--ml-spring)}
.d .app.closed .dr{transform:translateX(104%)}
.d .dh{display:flex;flex:none;align-items:center;gap:10px;height:64px;padding:0 14px 0 22px;border-bottom:1px solid var(--ml-line)}
.d .dh h2{font-size:18px;font-weight:650;letter-spacing:-.02em}
.d .dh .dx{margin-left:auto}
.d .fs{flex:none;padding:16px 22px 14px;background:var(--ml-surface)}
.d .fst{display:flex;align-items:center;gap:7px;font-size:13px;color:var(--ml-ink-2)}
.d .fst b{font-weight:650;color:var(--ml-ink)}
.d .fst svg{color:#12893C}
.d .bar{height:8px;margin-top:10px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .bar i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(.87);transform-origin:0 50%;transition:transform .8s var(--ml-spring),background-color .4s ease}
.d .bar.full i{background:#1DB954}
.d .lns{flex:1;min-height:0;padding:6px 22px;overflow-y:auto;list-style:none;scrollbar-width:thin}
.d .ln{display:grid;grid-template-columns:76px minmax(0,1fr) auto;gap:14px;align-items:center;padding:14px 0;border-bottom:1px solid var(--ml-line)}
.d .ln:last-child{border-bottom:0}
.d .ln .tile{width:76px;height:76px;border-radius:14px}
.d .li{display:flex;flex-direction:column;gap:2px;min-width:0}
.d .li b{font-size:14px;font-weight:600}
.d .li small{font-size:12.5px;color:var(--ml-muted)}
.d .li .qty{margin-top:8px;align-self:flex-start}
.d .lr{display:flex;flex-direction:column;align-items:flex-end;gap:10px;align-self:stretch;justify-content:space-between;padding:2px 0}
.d .lt{font-size:15px;font-weight:650}
.d .rm{display:grid;place-items:center;width:28px;height:28px;border:0;border-radius:8px;background:none;color:var(--ml-muted);cursor:pointer}
.d .rm:hover{background:var(--ml-surface);color:#D70015}
.d .df{flex:none;padding:16px 22px 20px;border-top:1px solid var(--ml-line);background:var(--ml-bg)}
.d .rw{display:flex;justify-content:space-between;padding:4px 0;font-size:13.5px;color:var(--ml-ink-2)}
.d .rw b{font-weight:600;color:var(--ml-ink)}
.d .rw .shp.free{color:#12893C}
.d .tot{margin-top:6px;padding-top:12px;border-top:1px solid var(--ml-line);font-size:15px;font-weight:600;color:var(--ml-ink)}
.d .tot b{font-size:20px;font-weight:650;letter-spacing:-.02em}
.d .co{width:100%;margin-top:14px}
.d .note{margin-top:10px;font-size:12px;text-align:center;color:var(--ml-muted)}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .pg{padding:16px}
  .d .pgr{grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:minmax(150px,1fr)}
  .d .ban h1{font-size:22px}
  .d .bt{display:none}
  .d .dr{width:100%}
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
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.5, 0.55);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };
      const money = (el, to, ms = 420) => {
        const from = parseFloat(el.dataset.v || '0');
        el.dataset.v = to;
        const id = (el._id = (el._id || 0) + 1);
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected || el._id !== id) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          const e = 1 - Math.pow(1 - k, 3);
          el.textContent = '$' + (from + (to - from) * e).toFixed(2);
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };

      const items = [
        { n: 'Ridge Daypack 24L', v: 'Slate', p: 84, q: 1, a: 'pack', c: 'v1', t: 't1' },
        { n: 'Trail Flask 750 ml', v: 'Sky', p: 28, q: 1, a: 'flask', c: 'v3', t: 't3' },
        { n: 'Camp Mug 12 oz', v: 'Cloud', p: 18, q: 1, a: 'mug', c: '', t: 't2' },
      ];
      const LIMIT = 150;
      const FLAT = 8;
      const list = $('.lns');
      const app = $('.app');
      const badge = $('.badge');
      list.innerHTML = items
        .map(
          (it, i) =>
            `<li class="ln"><span class="tile ${it.t} ${it.c}"><svg class="pi" viewBox="0 0 120 120" aria-hidden="true"><use href="#ct-${it.a}"/></svg></span><div class="li"><b>${it.n}</b><small>${it.v} - $${it.p.toFixed(2)}</small><div class="qty" role="group" aria-label="Quantity"><button type="button" data-i="${i}" data-d="-1" aria-label="Decrease">&#8722;</button><output>${it.q}</output><button type="button" data-i="${i}" data-d="1" aria-label="Increase">+</button></div></div><div class="lr"><b class="lt" data-v="${it.p * it.q}">$${(it.p * it.q).toFixed(2)}</b><button type="button" class="rm" data-i="${i}" aria-label="Remove">&#215;</button></div></li>`
        )
        .join('');
      const rows = $$('.ln');
      // minus / plus / x drawn as inline svg so no text glyphs are needed
      const svg = (d, s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      $$('.qty button').forEach((b) => (b.innerHTML = svg(b.dataset.d === '1' ? '<path d="M5 12h14"/><path d="M12 5v14"/>' : '<path d="M5 12h14"/>', 15)));
      $$('.rm').forEach((b) => (b.innerHTML = svg('<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>', 16)));
      const check = svg('<path d="M20 6 9 17l-5-5"/>', 15);
      const render = (first) => {
        const sub = items.reduce((s, it) => s + it.p * it.q, 0);
        const n = items.reduce((s, it) => s + it.q, 0);
        const free = sub >= LIMIT;
        const ship = free || sub === 0 ? 0 : FLAT;
        items.forEach((it, i) => {
          rows[i].querySelector('output').textContent = it.q;
          const lt = rows[i].querySelector('.lt');
          if (first) {
            lt.textContent = '$' + (it.p * it.q).toFixed(2);
            lt.dataset.v = it.p * it.q;
          } else money(lt, it.p * it.q, 360);
        });
        const set = (sel, v) => (first ? ((root.querySelector(sel).textContent = '$' + v.toFixed(2)), (root.querySelector(sel).dataset.v = v)) : money($(sel), v));
        set('.sub', sub);
        set('.tt', sub + ship);
        const shp = $('.shp');
        shp.textContent = free ? 'Free' : '$' + FLAT.toFixed(2);
        shp.classList.toggle('free', free);
        $('.fst').innerHTML = free ? `${check}<span><b>Free shipping unlocked.</b> Nice, you saved $${FLAT.toFixed(2)}.</span>` : `<span>You are <b>$${(LIMIT - sub).toFixed(2)}</b> away from free shipping</span>`;
        $('.bar').classList.toggle('full', free);
        $('.bar i').style.transform = `scaleX(${Math.min(1, sub / LIMIT)})`;
        $('.cn').textContent = n + (n === 1 ? ' item' : ' items');
        if (badge.textContent !== String(n)) {
          badge.textContent = n;
          badge.classList.remove('pop');
          void badge.offsetWidth;
          badge.classList.add('pop');
        }
      };
      list.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        const it = items[+b.dataset.i];
        if (b.classList.contains('rm')) it.q = 0;
        else it.q = Math.max(1, Math.min(9, it.q + +b.dataset.d));
        if (it.q === 0) {
          rows[+b.dataset.i].style.display = 'none';
        }
        render(false);
      });
      $('.dx').addEventListener('click', () => app.classList.add('closed'));
      $('.cartb').addEventListener('click', () => app.classList.remove('closed'));
      $('.scrim').addEventListener('click', () => app.classList.add('closed'));
      render(true);

      // Autoplay: bump quantities until free shipping unlocks, then close and reopen the drawer.
      const plus = (i) => rows[i].querySelector('[data-d="1"]');
      const minus = (i) => rows[i].querySelector('[data-d="-1"]');
      const seq = async () => {
        if (!(await tap(plus(2)))) return;
        await wait(900);
        if (!(await tap(plus(1)))) return;
        await wait(2200);
        if (!(await tap(minus(1)))) return;
        await wait(700);
        if (!(await tap(minus(2)))) return;
        await wait(1200);
        if (!(await tap($('.dx')))) return;
        await wait(1500);
        if (!(await tap($('.cartb')))) return;
        await wait(900);
      };
      cur.style.transform = 'translate(640px,560px)';
      (async () => {
        await wait(1200);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          await seq();
          await wait(1400);
        }
      })();
    },
    prompt: `Build a slide-in cart drawer over a store page. The page behind is a storefront (header with logo, nav, search, wishlist and a cart button with a count badge; a soft promo banner; a 3 column product grid of soft gradient tiles holding drawn product art, name and price). The drawer is a 420px panel pinned to the right edge (position: absolute or fixed to the viewport, full height, white, big soft shadow to the left) over a scrim (rgba ink at .3 opacity), so the store stays visible behind it.

Drawer layout, top to bottom: a 64px header (title, an item count pill, a close button); a free-shipping meter on a pale surface strip (one line "You are $20.00 away from free shipping" with the amount in bold, and an 8px rounded track); the line items list that scrolls on its own; and a footer with Subtotal, Shipping ("$8.00" flat, "Free" in green once the threshold is met), Estimated total (20px, weight 650), a full width primary Checkout button with a lock icon and a muted line "Taxes are calculated at checkout".

Each line item: a 76px product tile, name, variant and unit price, a quantity stepper (minus, number, plus; 34px high, 10px radius, min 1, max 9), a right aligned line total and a small remove button.

Motion: the drawer opens and closes with transform: translateX(104%) to 0 on a critically damped spring (linear() curve, ~600ms) while the scrim fades (opacity .45s). The shipping meter fill is a full-width bar scaled with transform: scaleX(subtotal / threshold) from the left on the same spring; when the threshold is reached the bar turns success green, the text swaps to a check and "Free shipping unlocked", and the shipping row changes to Free. Line totals, the subtotal and the estimated total tween their numbers over ~400ms (ease-out cubic). The cart badge in the header pops (scale .6, 1.18, 1) when the item count changes.

Behavior: steppers and remove update state and totals immediately; the scrim, the close button and Escape close the drawer, the cart button opens it, and focus moves into the drawer and returns on close. Accessibility: role="dialog" with an accessible name, aria-labels on icon buttons, focus-visible rings, prefers-reduced-motion swaps the slide for a fade. Phone: the drawer is full width. Plain HTML, CSS and JS, no libraries; React-friendly structure (StorePage, CartDrawer, ShippingMeter, LineItem, QuantityStepper).`,
  });

  // ---------------------------------------------------------------- 3. checkout
  const coItems = [
    ['Barrier Serum 30 ml', '$38.00', 'bottle', 't3', '', 1],
    ['Cloud Cream 50 ml', '$34.00', 'jar', 't2', '', 1],
    ['Daily Mineral SPF 50 ml', '$26.00', 'bottle', 't4', '--c1:#EEF2F8;--c2:#FF8054', 1],
  ];
  ML.add({
    id: 'app-commerce-checkout',
    cat: 'app-commerce',
    title: 'One-page checkout',
    sub: 'Three steps, express pay, order confirms',
    html: `
<div class="app">
  ${SYMS('co')}
  <header class="hdr"><b class="logo"><span class="mk">${I(P.drop, 16)}</span>Juniper</b><span class="sec">${I(P.lock, 15)}Secure checkout</span></header>
  <div class="wrap">
    <main class="left">
      <div class="inner">
        <h1 class="ct">Checkout</h1>
        <div class="express">
          <p class="eh">Express checkout</p>
          <div class="eb"><button type="button" class="xp">${I(P.card, 18)}Pay</button><button type="button" class="xp">${I(P.bolt, 18)}Pay</button><button type="button" class="xp">${I(P.phone, 18)}Pay</button></div>
          <p class="or"><span>or continue below</span></p>
        </div>
        <ol class="steps" style="--k:0">
          <li><button type="button" class="st on"><i><b>1</b>${I(P.check, 13, 3)}</i>Contact</button></li>
          <li><button type="button" class="st"><i><b>2</b>${I(P.check, 13, 3)}</i>Shipping</button></li>
          <li><button type="button" class="st"><i><b>3</b>${I(P.check, 13, 3)}</i>Payment</button></li>
          <span class="rail" aria-hidden="true"></span>
        </ol>
        <div class="panels">
          <section class="pn on" aria-label="Contact">
            <label class="fld" for="co-email">Email</label>
            <div class="field">${I(P.mail, 17)}<input id="co-email" type="email" value="maya.reyes@mail.com" autocomplete="email"></div>
            <label class="fld" for="co-name">Full name</label>
            <div class="field">${I(P.user, 17)}<input id="co-name" type="text" value="Maya Reyes" autocomplete="name"></div>
            <div class="nav"><button type="button" class="cta nx">Continue to shipping${I(P.arrow, 16)}</button></div>
          </section>
          <section class="pn" aria-label="Shipping">
            <label class="fld" for="co-addr">Address</label>
            <div class="field">${I(P.pin, 17)}<input id="co-addr" type="text" value="212 Alder Street" autocomplete="street-address"></div>
            <div class="two"><div><label class="fld" for="co-city">City</label><div class="field"><input id="co-city" type="text" value="Portland"></div></div><div><label class="fld" for="co-zip">Postal code</label><div class="field"><input id="co-zip" type="text" value="97205"></div></div></div>
            <p class="fld">Delivery</p>
            <div class="dvs">
              <label class="dv on"><input type="radio" name="co-dv" value="0" checked><span class="rd"></span><span class="dt"><b>Standard</b><small>Mon 19 - Wed 21 Oct</small></span><em>Free</em></label>
              <label class="dv"><input type="radio" name="co-dv" value="9"><span class="rd"></span><span class="dt"><b>Express</b><small>Thu 15 - Fri 16 Oct</small></span><em>$9.00</em></label>
            </div>
            <div class="nav"><button type="button" class="ghost bk">${I(P.back, 16)}Back</button><button type="button" class="cta nx">Continue to payment${I(P.arrow, 16)}</button></div>
          </section>
          <section class="pn" aria-label="Payment">
            <label class="fld" for="co-card">Card number</label>
            <div class="field">${I(P.card, 17)}<input id="co-card" type="text" inputmode="numeric" placeholder="1234 1234 1234 1234" autocomplete="cc-number"></div>
            <div class="two"><div><label class="fld" for="co-exp">Expiry</label><div class="field"><input id="co-exp" type="text" inputmode="numeric" placeholder="MM / YY" autocomplete="cc-exp"></div></div><div><label class="fld" for="co-cvc">CVC</label><div class="field"><input id="co-cvc" type="text" inputmode="numeric" placeholder="123" autocomplete="cc-csc"></div></div></div>
            <p class="safe">${I(P.shield, 16)}Payments are encrypted. We never see your full card number.</p>
            <div class="nav"><button type="button" class="ghost bk">${I(P.back, 16)}Back</button><button type="button" class="cta stk place"><span class="lbl">${I(P.lock, 16)}Place order<em class="pt"></em></span><span class="busy">Processing</span><span class="done">${I(P.check, 17, 2.6)}Order placed</span></button></div>
          </section>
        </div>
      </div>
      <div class="fin" aria-live="polite">
        <div class="finc">
          <span class="okc"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg></span>
          <h2>Order confirmed</h2>
          <p>Order JN-20418 is on its way to prep. A receipt is heading to <b>maya.reyes@mail.com</b>.</p>
          <p class="fint"></p>
        </div>
      </div>
    </main>
    <aside class="sum" aria-label="Order summary">
      <div class="sin">
        <h2>Order summary</h2>
        <ul class="its">
          ${coItems.map((c) => `<li><span class="tile ${c[3]}" style="${c[4]}">${ART('co', c[2])}<i class="qb">${c[5]}</i></span><p><b>${c[0]}</b><small>${c[1]}</small></p><em>${c[1]}</em></li>`).join('')}
        </ul>
        <div class="gc"><div class="field">${I(P.gift, 16)}<input type="text" placeholder="Gift card or discount code" aria-label="Discount code"></div><button type="button" class="ghost">Apply</button></div>
        <p class="rw"><span>Subtotal</span><b>$98.00</b></p>
        <p class="rw"><span>Shipping</span><b class="shp">Free</b></p>
        <p class="rw"><span>Estimated tax (8%)</span><b>$7.84</b></p>
        <p class="rw tot"><span>Total</span><b class="tt">$105.84</b></p>
      </div>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .sec{display:flex;align-items:center;gap:7px;margin-left:auto;font-size:13px;color:var(--ml-muted)}
.d .wrap{display:grid;flex:1;grid-template-columns:minmax(0,1.15fr) minmax(0,.85fr);min-height:0}
.d .left{position:relative;display:flex;flex-direction:column;min-width:0;min-height:0;overflow-y:auto;scrollbar-width:thin}
.d .inner{width:100%;max-width:540px;margin:auto;padding:28px}
.d .ct{margin-bottom:22px;font-size:28px;line-height:1.1;font-weight:650;letter-spacing:-.035em}
.d .eh{font-size:12.5px;font-weight:600;color:var(--ml-muted);text-align:center}
.d .eb{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:10px}
.d .xp{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;border:0;border-radius:11px;background:var(--ml-ink);color:#fff;font-size:14.5px;font-weight:600;cursor:pointer;transition:transform 90ms ease-out,opacity .2s ease}
.d .xp:hover{opacity:.88}
.d .xp:active{transform:scale(.97)}
.d .or{display:flex;align-items:center;gap:12px;margin:18px 0 4px;font-size:12px;color:var(--ml-muted)}
.d .or::before,.d .or::after{content:"";flex:1;height:1px;background:var(--ml-line)}
.d .steps{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));margin-top:10px;list-style:none;border-bottom:1px solid var(--ml-line)}
.d .st{display:flex;align-items:center;justify-content:center;gap:9px;width:100%;padding:13px 0;border:0;background:none;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .25s ease}
.d .st i{position:relative;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-style:normal;font-size:11.5px;transition:background-color .3s ease,color .3s ease}
.d .st i svg{display:none}
.d .st.on{color:var(--ml-ink)}
.d .st.on i{background:var(--ml-accent);color:#fff;box-shadow:none}
.d .st.done{color:var(--ml-ink-2)}
.d .st.done i{background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:none}
.d .st.done i b{display:none}
.d .st.done i svg{display:block}
.d .st:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:10px}
.d .rail{position:absolute;left:0;bottom:-1px;width:33.3333%;height:2px;border-radius:2px;background:var(--ml-accent);transform:translateX(calc(var(--k) * 100%));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .pn{display:none}
.d .pn.on{display:block;animation:cm-in 520ms var(--ml-spring) both}
.d .two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.d .dvs{display:flex;flex-direction:column;gap:10px;margin-top:8px}
.d .dv{position:relative;display:flex;align-items:center;gap:12px;padding:13px 16px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);cursor:pointer;transition:background-color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .dv input{position:absolute;opacity:0;pointer-events:none}
.d .rd{display:grid;place-items:center;flex:none;width:18px;height:18px;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--ml-bar)}
.d .rd::after{content:"";width:8px;height:8px;border-radius:50%;background:#fff;transform:scale(0);transition:transform .3s var(--ml-bounce)}
.d .dv.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .dv.on .rd{background:var(--ml-accent);box-shadow:none}
.d .dv.on .rd::after{transform:none}
.d .dv input:focus-visible ~ .rd{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .dt{display:flex;flex-direction:column;flex:1}
.d .dt b{font-size:14px;font-weight:600}
.d .dt small{font-size:12.5px;color:var(--ml-muted)}
.d .dv em{font-style:normal;font-size:14px;font-weight:650}
.d .safe{display:flex;align-items:center;gap:8px;margin-top:14px;font-size:12.5px;color:var(--ml-muted)}
.d .safe svg{flex:none;color:var(--ml-accent)}
.d .nav{display:flex;gap:10px;margin-top:22px}
.d .nav .cta{flex:1}
.d .pt{margin-left:6px;padding:3px 9px;border-radius:99px;background:rgba(255,255,255,.22);font-style:normal;font-size:13px}
.d .fin{position:absolute;inset:0;z-index:10;display:grid;place-items:center;padding:28px;background:rgba(255,255,255,.97);opacity:0;pointer-events:none;transition:opacity .45s ease}
.d .app.paid .fin{opacity:1;pointer-events:auto}
.d .finc{display:flex;flex-direction:column;align-items:center;max-width:380px;text-align:center}
.d .finc h2{margin-top:18px;font-size:26px;font-weight:650;letter-spacing:-.03em}
.d .finc p{margin-top:8px;font-size:14px;line-height:1.5;color:var(--ml-muted)}
.d .finc p b{font-weight:600;color:var(--ml-ink)}
.d .finc .fint{font-weight:600;color:var(--ml-ink)}
.d .fin .okc path{stroke-dasharray:1;stroke-dashoffset:1}
.d .app.paid .fin .okc path{animation:cm-draw 650ms var(--ml-ease) 250ms forwards}
.d .app.paid .fin .okc{animation:cm-pop 520ms var(--ml-bounce)}
.d .sum{display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--ml-surface);border-left:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:thin}
.d .sin{width:100%;max-width:420px;margin:auto;padding:28px}
.d .sin h2{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .its{display:flex;flex-direction:column;gap:14px;margin:18px 0;list-style:none}
.d .its li{display:flex;align-items:center;gap:14px}
.d .its .tile{flex:none;width:62px;height:62px;border-radius:14px;overflow:visible}
.d .its .tile .pi{width:84%;height:84%}
.d .qb{position:absolute;top:-7px;right:-7px;display:grid;place-items:center;min-width:20px;height:20px;border-radius:99px;background:var(--ml-ink-2);color:#fff;font:650 11px/1 var(--ml-font);font-style:normal;z-index:2}
.d .its p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .its b{font-size:13.5px;font-weight:600}
.d .its small{font-size:12.5px;color:var(--ml-muted)}
.d .its em{font-style:normal;font-size:14px;font-weight:600}
.d .gc{display:flex;gap:10px;padding:16px 0;border-top:1px solid var(--ml-line);border-bottom:1px solid var(--ml-line)}
.d .gc .field{flex:1;margin-top:0;background:var(--ml-bg)}
.d .gc .field input{font-size:13.5px}
.d .gc .ghost{height:44px}
.d .rw{display:flex;justify-content:space-between;padding:6px 0;font-size:13.5px;color:var(--ml-ink-2)}
.d .rw b{font-weight:600;color:var(--ml-ink)}
.d .rw b.free{color:#12893C}
.d .rw:first-of-type{margin-top:10px}
.d .tot{margin-top:8px;padding-top:14px;border-top:1px solid var(--ml-line);font-size:15px;font-weight:600;color:var(--ml-ink)}
.d .tot b{font-size:22px;font-weight:650;letter-spacing:-.02em}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .wrap{display:block;overflow-y:auto}
  .d .left,.d .sum{overflow:visible}
  .d .inner{padding:18px 16px}
  .d .sin{padding:20px 16px 28px}
  .d .sum{border-left:0;border-top:1px solid var(--ml-line)}
  .d .sec{display:none}
  .d .hdr{padding:0 16px}
  .d .logo{margin-right:auto}
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
        $$('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.5, 0.55);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };
      const type = async (input, text, delay = 42) => {
        const f = input.closest('.field');
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) {
            f.classList.remove('is-auto');
            return false;
          }
          input.value += ch;
          input.dispatchEvent(new Event('input'));
          await wait(delay + Math.random() * 30);
        }
        f.classList.remove('is-auto');
        return true;
      };

      const app = $('.app');
      const steps = $('.steps');
      const sts = $$('.st');
      const pns = $$('.pn');
      const place = $('.place');
      const radios = $$('input[name="co-dv"]');
      const card = $('#co-card');
      const exp = $('#co-exp');
      const cvc = $('#co-cvc');
      const email = $('#co-email');
      let step = 0;
      let max = 0;
      let busy = false;
      let ship = 0;
      const SUB = 98;
      const TAX = 7.84;
      const totals = () => {
        const shp = $('.shp');
        shp.textContent = ship ? '$' + ship.toFixed(2) : 'Free';
        shp.classList.toggle('free', !ship);
        const t = '$' + (SUB + ship + TAX).toFixed(2);
        $('.tt').textContent = t;
        $('.pt').textContent = t;
      };
      const go = (n) => {
        step = n;
        max = Math.max(max, n);
        steps.style.setProperty('--k', n);
        sts.forEach((b, k) => {
          b.classList.toggle('on', k === n);
          b.classList.toggle('done', k < n);
        });
        pns.forEach((p, k) => p.classList.toggle('on', k === n));
      };
      sts.forEach((b, k) => b.addEventListener('click', () => k <= max && !busy && go(k)));
      $$('.nx').forEach((b) =>
        b.addEventListener('click', () => {
          if (step === 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())) {
            email.closest('.field').classList.remove('bad');
            void email.offsetWidth;
            email.closest('.field').classList.add('bad');
            return;
          }
          go(step + 1);
        })
      );
      $$('.bk').forEach((b) => b.addEventListener('click', () => !busy && go(step - 1)));
      email.addEventListener('input', () => email.closest('.field').classList.remove('bad'));
      radios.forEach((r) =>
        r.addEventListener('change', () => {
          ship = +r.value;
          $$('.dv').forEach((d) => d.classList.toggle('on', d.contains(r) && r.checked));
          totals();
        })
      );
      card.addEventListener('input', () => {
        const d = card.value.replace(/\D/g, '').slice(0, 16);
        card.value = d.replace(/(.{4})/g, '$1 ').trim();
      });
      exp.addEventListener('input', () => {
        const d = exp.value.replace(/\D/g, '').slice(0, 4);
        exp.value = d.length > 2 ? d.slice(0, 2) + ' / ' + d.slice(2) : d;
      });
      cvc.addEventListener('input', () => (cvc.value = cvc.value.replace(/\D/g, '').slice(0, 4)));
      const reset = () => {
        app.classList.remove('paid');
        place.classList.remove('loading', 'ok');
        busy = false;
        max = 0;
        go(0);
        card.value = exp.value = cvc.value = '';
        email.value = 'maya.reyes@mail.com';
        radios[0].checked = true;
        radios[0].dispatchEvent(new Event('change'));
      };
      const finish = () => {
        if (busy) return;
        const digits = card.value.replace(/\D/g, '');
        if (digits.length < 12) {
          const f = card.closest('.field');
          f.classList.remove('bad');
          void f.offsetWidth;
          f.classList.add('bad');
          return;
        }
        busy = true;
        place.classList.add('loading');
        setTimeout(() => {
          place.classList.replace('loading', 'ok');
          $('.fint').textContent = 'Total charged: $' + (SUB + ship + TAX).toFixed(2) + ' - arrives ' + (ship ? 'Thu 15 - Fri 16 Oct' : 'Mon 19 - Wed 21 Oct');
          setTimeout(() => {
            app.classList.add('paid');
            setTimeout(reset, 3600);
          }, 600);
        }, 1500);
      };
      card.addEventListener('input', () => card.closest('.field').classList.remove('bad'));
      place.addEventListener('click', finish);
      totals();

      // Autoplay: continue through the steps, pick express, type a card, place the order.
      const seq = async () => {
        if (!(await tap($$('.nx')[0]))) return;
        await wait(700);
        if (!(await tap($$('.dv')[1]))) return;
        await wait(500);
        if (!(await tap($$('.nx')[1]))) return;
        await wait(700);
        if (!(await type(card, '4242424242424242'))) return;
        if (!(await type(exp, '0929'))) return;
        if (!(await type(cvc, '318'))) return;
        await wait(400);
        if (!(await tap(place))) return;
        await wait(7000);
        if (idle() && !busy) reset();
      };
      cur.style.transform = 'translate(700px,600px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (step !== 0 || card.value) reset();
          await seq();
          await wait(1200);
        }
      })();
    },
    prompt: `Build a one-page checkout for an online store, full viewport (two columns, 1.15fr / .85fr, the right column on a pale surface with a 1px left hairline). Phone: one column, the summary moves below the form.

Left column (a centred 540px form, scrolls on its own): a "Express checkout" row of three equal dark buttons labelled "Pay" with a generic wallet icon each (use your payment provider's real buttons in production), an "or continue below" divider, then a three step header (Contact, Shipping, Payment) where each step is a button with a numbered 22px dot; the active dot is accent filled, finished ones turn soft blue with a check, and ONE 2px accent underline slides under the active step (transform: translateX(calc(var(--k) * 100%)) on a spring, ~590ms). Only reached steps are clickable. Panels swap with display none/block and an entrance of opacity 0 to 1 plus translateY(8px) to 0.
Panel 1: email and full name. Panel 2: address, city and postal code, and two delivery radio cards (Standard free, Express $9.00, each with an arrival date range); the chosen card gets a soft blue fill, a 1.5px accent ring and a filled radio dot that pops in. Panel 3: card number (auto-grouped in fours), expiry formatted as "MM / YY", CVC, a reassurance line and a full width primary Place order button showing the total.
Fields are 44px high, 12px radius on a surface fill with a 1.5px accent ring plus a 4px soft ring on focus; invalid fields get a red ring and a 380ms shake.

Right column: Order summary with line items (62px tile, a small count badge on the tile corner, name, price), a discount code field with an Apply button, then Subtotal, Shipping (Free or $9.00), Estimated tax at a fixed rate and a bold Total. Picking Express updates shipping, the total and the button label. Totals must add up.

Place order: the label slides up out and "Processing" slides in with a light sheen sweeping across the button (a moving gradient, no circular spinner) for about 1.5s, the button turns success green, and a confirmation panel fades over the form with a check that draws itself (stroke-dasharray/dashoffset on a pathLength="1" path, 650ms) and the order number, email and total.

Accessibility: real labels and autocomplete tokens (email, name, street-address, cc-number, cc-exp, cc-csc), aria-live on the confirmation, focus-visible rings, prefers-reduced-motion removes the sheen and shake. Plain HTML, CSS and JS, no libraries; React-friendly structure (CheckoutPage, ExpressPay, StepHeader, ContactForm, ShippingForm, PaymentForm, OrderSummary).`,
  });

  // ---------------------------------------------------------------- 4. order confirmation
  ML.add({
    id: 'app-commerce-confirmed',
    cat: 'app-commerce',
    title: 'Order confirmation',
    sub: 'Check draws, receipt builds, track steps on',
    html: `
<div class="app play">
  ${SYMS('oc')}
  ${HDR(P.coffee, 'Corvid Coffee', ['Beans', 'Gear', 'Subscriptions', 'Gifts'], '', '')}
  <main class="cm">
    <section class="card lc">
      <div class="okw in" style="--i:0"><span class="okc"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg></span></div>
      <p class="tag in" style="--i:1">Order CC-48210</p>
      <h1 class="in" style="--i:2">Thank you, Maya</h1>
      <p class="lead in" style="--i:3">Your order is confirmed. A receipt is on its way to <b>maya.reyes@mail.com</b>.</p>
      <div class="est in" style="--i:4">
        <div class="eh"><span class="ei">${I(P.truck, 20)}</span><div><p class="k">Estimated delivery</p><p class="ed">Mon 19 - Wed 21 October</p></div></div>
        <div class="prog" style="--f:0">
          <span class="pl"><i></i></span>
          <p class="ps on"><b></b>Ordered</p><p class="ps"><b></b>Packed</p><p class="ps"><b></b>Shipped</p><p class="ps"><b></b>Delivered</p>
        </div>
      </div>
      <div class="acts in" style="--i:5"><button type="button" class="cta trk">${I(P.nav, 16)}Track order</button><button type="button" class="ghost">Continue shopping</button></div>
      <p class="cdl in" style="--i:6"><span class="pd"></span>Packing starts in <b class="cd">1:59</b></p>
    </section>
    <section class="card rc in" style="--i:2">
      <header class="rh"><h2>Order summary</h2><span class="pill ok"><i></i>Paid</span></header>
      <p class="dte">Placed Wed 14 October 2026, 10:42 AM</p>
      <ul class="rl">
        <li class="in" style="--i:3"><span class="tile t1 v1">${ART('oc', 'bag')}<i class="qb">1</i></span><p><b>Ethiopia Guji Natural</b><small>500 g, whole bean</small></p><em>$34.00</em></li>
        <li class="in" style="--i:4"><span class="tile t3">${ART('oc', 'dripper')}<i class="qb">1</i></span><p><b>Ceramic Pour-over Dripper</b><small>Size 02, white</small></p><em>$38.00</em></li>
        <li class="in" style="--i:5"><span class="tile t2">${ART('oc', 'mug')}<i class="qb">1</i></span><p><b>Corvid Mug 12 oz</b><small>Cloud</small></p><em>$18.00</em></li>
      </ul>
      <div class="tots in" style="--i:6">
        <p class="rw"><span>Subtotal</span><b>$90.00</b></p>
        <p class="rw"><span>Shipping</span><b class="free">Free</b></p>
        <p class="rw"><span>Tax (8%)</span><b>$7.20</b></p>
        <p class="rw tot"><span>Total</span><b>$97.20</b></p>
      </div>
      <div class="help in" style="--i:7">${I(P.mail, 18)}<p><b>Questions about your order?</b>Reply to the receipt email and we answer within a few hours.</p></div>
      <div class="info in" style="--i:8">
        <div><p class="k">Ship to</p><p>Maya Reyes<br>212 Alder Street<br>Portland, OR 97205</p></div>
        <div><p class="k">Payment</p><p>Card ending 4242<br>Charged $97.20<br>Standard shipping</p></div>
      </div>
    </section>
  </main>
  <div class="toast" role="status">${I(P.check, 16, 2.6)}We email you at every step</div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .badge:empty{display:none}
.d .cm{display:grid;flex:1;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);grid-template-rows:minmax(min-content,1fr);gap:20px;min-height:0;padding:24px 28px 28px;overflow-y:auto;background:var(--ml-surface)}
.d .lc{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:0;padding:28px 36px;text-align:center}
.d .okw{position:relative;display:grid;place-items:center;width:84px;height:84px}
.d .okw::before,.d .okw::after{content:"";position:absolute;inset:0;border-radius:50%;background:rgba(29,185,84,.16);animation:oc-ring 3.2s ease-out infinite}
.d .okw::after{animation-delay:1.6s}
.d .okw .okc{position:relative;width:72px;height:72px}
.d .okc path{stroke-dasharray:1;stroke-dashoffset:1}
.d .play .okc path{animation:cm-draw 700ms var(--ml-ease) 300ms forwards}
.d .play .okc{animation:cm-pop 560ms var(--ml-bounce) 120ms both}
.d .lc .tag{margin-top:20px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .lc h1{margin-top:8px;font-size:34px;line-height:1.08;font-weight:650;letter-spacing:-.035em}
.d .lead{max-width:380px;margin-top:10px;font-size:14.5px;line-height:1.5;color:var(--ml-muted)}
.d .lead b{font-weight:600;color:var(--ml-ink)}
.d .est{width:100%;max-width:420px;margin-top:26px;padding:18px 20px 16px;border-radius:16px;background:var(--ml-surface);text-align:left}
.d .eh{display:flex;align-items:center;gap:14px}
.d .ei{display:grid;flex:none;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--ml-bg);color:var(--ml-accent);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .k{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .ed{margin-top:3px;font-size:18px;font-weight:650;letter-spacing:-.02em}
.d .prog{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));margin-top:20px}
.d .pl{position:absolute;left:12.5%;right:12.5%;top:5px;height:3px;border-radius:3px;background:var(--ml-bar)}
.d .pl i{display:block;height:100%;border-radius:inherit;background:var(--ml-accent);transform:scaleX(var(--f));transform-origin:0 50%;transition:transform .9s var(--ml-spring)}
.d .ps{position:relative;display:flex;flex-direction:column;align-items:center;gap:8px;font-size:12px;color:var(--ml-muted);transition:color .3s ease}
.d .ps b{display:block;width:13px;height:13px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2.5px var(--ml-bar);transition:box-shadow .3s ease,background-color .3s ease}
.d .ps.done b{background:var(--ml-accent);box-shadow:none}
.d .ps.on{color:var(--ml-ink);font-weight:600}
.d .ps.on b{background:var(--ml-bg);box-shadow:inset 0 0 0 4px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .acts{display:flex;gap:10px;margin-top:24px}
.d .cdl{display:flex;align-items:center;gap:9px;margin-top:20px;font-size:13px;color:var(--ml-muted)}
.d .cdl b{font-weight:600;color:var(--ml-ink)}
.d .pd{position:relative;width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .pd::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:cm-ping 2.2s ease-out infinite}
.d .rc{display:flex;flex-direction:column;min-width:0;padding:26px 28px}
.d .rh{display:flex;align-items:center;justify-content:space-between}
.d .rh h2{font-size:18px;font-weight:650;letter-spacing:-.02em}
.d .dte{margin-top:4px;font-size:13px;color:var(--ml-muted)}
.d .rl{display:flex;flex-direction:column;gap:16px;margin:22px 0 18px;padding:18px 0;border-top:1px dashed var(--ml-bar);border-bottom:1px dashed var(--ml-bar);list-style:none}
.d .rl li{display:flex;align-items:center;gap:14px}
.d .rl .tile{flex:none;width:64px;height:64px;border-radius:14px;overflow:visible}
.d .rl .tile .pi{width:84%;height:84%}
.d .qb{position:absolute;top:-7px;right:-7px;z-index:2;display:grid;place-items:center;min-width:20px;height:20px;border-radius:99px;background:var(--ml-ink-2);color:#fff;font:650 11px/1 var(--ml-font);font-style:normal}
.d .rl p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .rl b{font-size:14px;font-weight:600}
.d .rl small{font-size:12.5px;color:var(--ml-muted)}
.d .rl em{font-style:normal;font-size:14px;font-weight:600}
.d .rw{display:flex;justify-content:space-between;padding:5px 0;font-size:13.5px;color:var(--ml-ink-2)}
.d .rw b{font-weight:600;color:var(--ml-ink)}
.d .rw b.free{color:#12893C}
.d .tot{margin-top:6px;padding-top:12px;border-top:1px solid var(--ml-line);font-size:15px;font-weight:600;color:var(--ml-ink)}
.d .tot b{font-size:22px;font-weight:650;letter-spacing:-.02em}
.d .help{display:flex;align-items:center;gap:14px;margin-top:auto;padding:14px 16px;border-radius:14px;background:var(--ml-surface);color:var(--ml-accent)}
.d .help p{font-size:13px;line-height:1.45;color:var(--ml-muted)}
.d .help b{display:block;font-weight:600;color:var(--ml-ink)}
.d .info{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin-top:20px;padding-top:20px;border-top:1px dashed var(--ml-bar)}
.d .info p:not(.k){margin-top:6px;font-size:13.5px;line-height:1.55;color:var(--ml-ink-2)}
.d .play .in{animation:cm-in 560ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 60ms)}
@keyframes oc-ring{0%{opacity:.9;transform:scale(.86)}100%{opacity:0;transform:scale(1.7)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .cm{display:flex;flex-direction:column;padding:16px}
  .d .lc{flex:none;padding:24px 18px}
  .d .rc{flex:none;padding:20px 18px}
  .d .lc h1{font-size:28px}
  .d .acts{flex-direction:column;width:100%}
  .d .acts .cta,.d .acts .ghost{width:100%}
}
@media (prefers-reduced-motion: reduce){.d .okw::before,.d .okw::after,.d .pd::after{animation:none}}`,
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
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.5, 0.55);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };

      const app = $('.app');
      const prog = $('.prog');
      const steps = $$('.ps');
      const toast = $('.toast');
      const setStep = (k) => {
        prog.style.setProperty('--f', k / 3);
        steps.forEach((s, i) => {
          s.classList.toggle('done', i < k);
          s.classList.toggle('on', i === k);
        });
      };
      $('.trk').addEventListener('click', () => {
        setStep(1);
        toast.classList.add('on');
        setTimeout(() => toast.classList.remove('on'), 2600);
      });
      // a live countdown to the start of packing
      let left = 119;
      const cd = $('.cd');
      const fmt = () => (cd.textContent = Math.floor(left / 60) + ':' + String(left % 60).padStart(2, '0'));
      (async () => {
        while (root.isConnected) {
          await wait(1000);
          left = left > 0 ? left - 1 : 119;
          fmt();
        }
      })();
      const replay = () => {
        app.classList.remove('play');
        void app.offsetWidth;
        app.classList.add('play');
        setStep(0);
      };

      // Autoplay: press Track order, the progress moves to Packed; then the whole confirmation replays.
      cur.style.transform = 'translate(560px,640px)';
      (async () => {
        await wait(2600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (await tap($('.trk'))) {
            await wait(4200);
            if (idle()) {
              replay();
              await wait(2600);
            }
          }
        }
      })();
    },
    prompt: `Build an order confirmation page for an online store, full viewport on a pale surface, under the normal store header (cart badge hidden because the cart is now empty). Two cards side by side (1.05fr / .95fr, 20px gap); they stack on phones.

Left card, centred content: an 84px success mark (a soft green disc with a check; two rings expand and fade behind it every 3.2s, staggered 1.6s) and, above the headline, a small uppercase order number. Headline "Thank you, <first name>" (34px, weight 650, letter-spacing -0.035em), one line confirming the receipt email, then a delivery estimate panel on a pale surface: truck icon tile, a micro label "Estimated delivery" and the date range in 18px bold, and a four step progress (Ordered, Packed, Shipped, Delivered): 13px dots on a 3px track, the current dot has an accent ring plus a soft halo, passed dots are filled, and the accent fill of the track is a scaleX transform (transform-origin left) that moves on a spring when the step changes. Below: a primary "Track order" button, a secondary "Continue shopping" button and a quiet live line with a pinging dot, "Packing starts in 1:59", counting down every second.

Right card: "Order summary" with a green Paid pill, the placed date and time, three line items (64px product tile with a small quantity badge, name, variant, price), a dashed divider, Subtotal, Shipping (Free in green), Tax and a bold Total that add up exactly, then two columns: Ship to and Payment (card ending digits, amount, shipping method).

Motion: on load the check draws (stroke-dasharray 1, dashoffset 1 to 0, 700ms, ease-out) while the success mark pops (scale .6 to 1 with a slight overshoot) and every block enters with opacity 0 to 1 and translateY(8px) to 0, staggered 60ms. Pressing Track order moves the progress to Packed and shows a toast "We email you at every step" for 2.6s.

Accessibility: the toast is role="status", the headline is the page h1, focus-visible rings, prefers-reduced-motion removes the rings and pings. Plain HTML, CSS and JS, no libraries; React-friendly structure (ConfirmationHero, DeliveryEstimate, ProgressSteps, OrderReceipt, LineItem).`,
  });

  // ---------------------------------------------------------------- 5. order tracking
  const trRoads = (() => {
    let s = '';
    [-32, 58, 138, 226, 318, 404, 490].forEach((y) => (s += `<path d="M-300 ${y}H900"/>`));
    [-124, -14, 86, 196, 306, 418, 534, 644, 754].forEach((x) => (s += `<path d="M${x} -100V600"/>`));
    s += '<path d="M-200 420C0 360 230 330 340 270S560 120 760 60"/>';
    return s;
  })();
  const trBlocks = (() => {
    let s = '';
    const xs = [-114, -4, 96, 206, 316, 428, 544, 654];
    const ys = [-22, 68, 148, 236, 328, 414];
    ys.forEach((y, j) =>
      xs.forEach((x, i) => {
        if ((i * 3 + j * 5) % 4 === 0) return;
        s += `<rect x="${x}" y="${y}" width="${i % 2 ? 84 : 74}" height="${j % 2 ? 62 : 56}" rx="8"/>`;
      })
    );
    return s;
  })();
  ML.add({
    id: 'app-commerce-tracking',
    cat: 'app-commerce',
    title: 'Order tracking',
    sub: 'Live van on the route, steps expand',
    html: `
<div class="app">
  <header class="tb">
    <button type="button" class="ib" aria-label="Back to orders">${I(P.back, 19)}</button>
    <div class="tt"><h1>Order FW-5821</h1><p>Fernway - 3 items - placed Mon 12 Oct</p></div>
    <span class="pill blue"><i></i>In transit</span>
    <button type="button" class="ghost cp">${I(P.share, 16)}Share tracking</button>
  </header>
  <div class="body">
    <section class="card side">
      <div class="eta">
        <p class="k">Arrives</p>
        <p class="ed">Fri 16 October</p>
        <p class="es"><span class="pill ok">By 6:00 PM</span><span class="stops"><b class="sn">4</b> stops away</span></p>
      </div>
      <ol class="tl">
        <li class="done"><button type="button" class="sh" aria-expanded="false"><i class="dt"></i><span><b>Order placed</b><small>Mon 12 Oct, 9:41 AM</small></span><em>${I(P.chevD, 16)}</em></button><div class="dd"><div><p>Payment confirmed</p><p>Order sent to the Reno warehouse</p></div></div></li>
        <li class="done"><button type="button" class="sh" aria-expanded="false"><i class="dt"></i><span><b>Packed</b><small>Tue 13 Oct, 11:05 AM</small></span><em>${I(P.chevD, 16)}</em></button><div class="dd"><div><p>Packed at Reno warehouse</p><p>Box 2 of 2 labelled and sealed</p></div></div></li>
        <li class="done"><button type="button" class="sh" aria-expanded="false"><i class="dt"></i><span><b>Shipped</b><small>Tue 13 Oct, 6:20 PM</small></span><em>${I(P.chevD, 16)}</em></button><div class="dd"><div><p>Picked up by Ridgeline Freight</p><p>Left Reno on truck 214</p></div></div></li>
        <li class="now on"><button type="button" class="sh" aria-expanded="true"><i class="dt"></i><span><b>In transit</b><small>Wed 14 Oct, 8:12 AM</small></span><em>${I(P.chevD, 16)}</em></button><div class="dd"><div><p>Arrived at Denver sort hub</p><p>Departed Salt Lake hub, Wed 14 Oct, 2:48 AM</p></div></div></li>
        <li><button type="button" class="sh" aria-expanded="false"><i class="dt"></i><span><b>Out for delivery</b><small>Fri 16 Oct, estimated</small></span><em>${I(P.chevD, 16)}</em></button><div class="dd"><div><p>Your driver is assigned the morning of delivery</p></div></div></li>
        <li><button type="button" class="sh" aria-expanded="false"><i class="dt"></i><span><b>Delivered</b><small>Fri 16 Oct, by 6:00 PM</small></span><em>${I(P.chevD, 16)}</em></button><div class="dd"><div><p>Left at your front door unless you choose otherwise</p></div></div></li>
      </ol>
    </section>
    <section class="card mapc">
      <svg class="map" viewBox="100 40 440 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect x="-400" y="-200" width="1400" height="900" fill="#EDF2F9"/>
        <path d="M-200 140C0 190 110 170 210 120S470 200 560 150S760 80 860 120" fill="none" stroke="#D3E4FF" stroke-width="30" stroke-linecap="round"/>
        <g fill="#E3EAF5">${trBlocks}</g>
        <ellipse cx="250" cy="372" rx="46" ry="24" fill="#DEEAFB"/><ellipse cx="500" cy="300" rx="50" ry="26" fill="#DEEAFB"/>
        <g fill="none" stroke-linecap="round"><g stroke="#E2D6CC" stroke-width="12">${trRoads}</g><g stroke="#fff" stroke-width="8">${trRoads}</g></g>
        <path id="tr-route" d="M185 330C230 328 235 280 285 262S375 278 405 212S440 135 455 100" fill="none" stroke="#B9C9E2" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 10"/>
        <path class="rdone" d="M185 330C230 328 235 280 285 262S375 278 405 212S440 135 455 100" fill="none" stroke="#FF4433" stroke-width="6" stroke-linecap="round"/>
        <g class="po"><circle cx="185" cy="330" r="9" fill="#fff" stroke="#1D1D1F" stroke-width="3"/></g>
        <g class="pd" transform="translate(455 100)"><circle r="24" fill="#FF4433" opacity=".14"/><circle r="12" fill="#FF4433"/><circle r="4.5" fill="#fff"/></g>
        <g class="van"><circle r="26" fill="#FF4433" opacity=".16" class="vr"/><g transform="translate(-17 -10)"><rect width="34" height="20" rx="5" fill="#FF4433" stroke="#fff" stroke-width="2.5"/><rect x="22" y="3.5" width="8" height="8" rx="2" fill="#fff" opacity=".9"/><rect x="5" y="5" width="12" height="3" rx="1.5" fill="#fff" opacity=".6"/><circle cx="9" cy="21" r="3.6" fill="#1D1D1F" stroke="#fff" stroke-width="1.5"/><circle cx="26" cy="21" r="3.6" fill="#1D1D1F" stroke="#fff" stroke-width="1.5"/></g></g>
      </svg>
      <span class="live pill"><i></i>Live</span>
      <div class="mc"><span class="mi">${I(P.truck, 20)}</span><div><b>Truck 214, Ridgeline Freight</b><small>Next stop: Depot 7 - last scan <em class="ago">0:12</em> ago</small></div><button type="button" class="ghost rf" aria-label="Refresh">${I(P.swap, 16)}</button></div>
    </section>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .tb{display:flex;flex:none;align-items:center;gap:12px;height:68px;padding:0 24px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tt h1{font-size:19px;font-weight:650;letter-spacing:-.02em}
.d .tt p{font-size:12.5px;color:var(--ml-muted)}
.d .tb .pill{margin-left:6px}
.d .tb .cp{margin-left:auto}
.d .body{display:grid;flex:1;grid-template-columns:minmax(300px,390px) minmax(0,1fr);grid-template-rows:minmax(0,1fr);gap:16px;min-height:0;padding:16px 24px 24px;background:var(--ml-surface)}
.d .side{display:flex;flex-direction:column;min-width:0;min-height:0;padding:20px 20px 12px}
.d .k{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .ed{margin-top:4px;font-size:26px;line-height:1.1;font-weight:650;letter-spacing:-.03em}
.d .es{display:flex;align-items:center;gap:10px;margin-top:10px;font-size:13px;color:var(--ml-muted)}
.d .stops b{display:inline-block;font-weight:650;color:var(--ml-ink)}
.d .stops b.bump{animation:cm-pop 420ms var(--ml-bounce)}
.d .tl{display:flex;flex:1;flex-direction:column;min-height:0;margin-top:16px;padding-top:12px;border-top:1px solid var(--ml-line);overflow-y:auto;list-style:none;scrollbar-width:thin}
.d .tl li{position:relative;flex:1 0 auto}
.d .tl li::before{content:"";position:absolute;left:11px;top:32px;bottom:-4px;width:2px;background:var(--ml-bar)}
.d .tl li.done::before{background:var(--ml-accent)}
.d .tl li:last-child::before{display:none}
.d .sh{display:flex;align-items:flex-start;gap:14px;width:100%;padding:4px 4px 10px 0;border:0;background:none;text-align:left;cursor:pointer;border-radius:10px}
.d .sh:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .sh span{display:flex;flex:1;flex-direction:column;gap:1px;padding-top:2px}
.d .sh b{font-size:14px;font-weight:600}
.d .sh small{font-size:12.5px;color:var(--ml-muted)}
.d .sh em{display:grid;margin-top:3px;color:var(--ml-muted);transition:transform .35s var(--ml-ease)}
.d .sh[aria-expanded="true"] em{transform:rotate(180deg)}
.d .dt{position:relative;flex:none;width:24px;height:24px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2.5px var(--ml-bar)}
.d .done .dt{background:var(--ml-accent);box-shadow:none}
.d .done .dt::after{content:"";position:absolute;left:8px;top:5px;width:5px;height:10px;border:solid #fff;border-width:0 2.5px 2.5px 0;transform:rotate(45deg)}
.d .now .dt{box-shadow:inset 0 0 0 6px var(--ml-accent)}
.d .now .dt::before{content:"";position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:cm-ping 2s ease-out infinite}
.d .now b{color:var(--ml-accent-ink)}
.d .dd{display:grid;grid-template-rows:0fr;margin-left:38px;transition:grid-template-rows .4s var(--ml-ease)}
.d .dd > div{min-height:0;overflow:hidden}
.d .tl li.on .dd{grid-template-rows:1fr}
.d .dd p{position:relative;padding:5px 0 5px 14px;font-size:12.5px;color:var(--ml-ink-2)}
.d .dd p::before{content:"";position:absolute;left:0;top:11px;width:5px;height:5px;border-radius:50%;background:var(--ml-bar)}
.d .mapc{position:relative;min-width:0;min-height:0;overflow:hidden}
.d .map{position:absolute;inset:0;width:100%;height:100%}
.d .van{transition:opacity .35s ease}
.d .vr{animation:tr-vr 2s ease-out infinite;transform-box:fill-box;transform-origin:center}
.d .live{position:absolute;left:16px;top:16px;background:rgba(255,255,255,.9);box-shadow:var(--ml-shadow);color:var(--ml-ink)}
.d .live i{background:#1DB954;animation:tr-blink 1.6s ease-in-out infinite}
.d .mc{position:absolute;left:16px;right:16px;bottom:16px;display:flex;align-items:center;gap:14px;padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.94);box-shadow:var(--ml-shadow-lg)}
.d .mi{display:grid;flex:none;place-items:center;width:44px;height:44px;border-radius:12px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .mc div{display:flex;flex:1;flex-direction:column;min-width:0}
.d .mc b{font-size:14px;font-weight:600}
.d .mc small{font-size:12.5px;color:var(--ml-muted)}
.d .mc small em{font-style:normal;font-weight:600;color:var(--ml-ink)}
.d .mc .ghost{width:42px;padding:0}
@keyframes tr-vr{0%{opacity:.5;transform:scale(.7)}100%{opacity:0;transform:scale(1.6)}}
@keyframes tr-blink{0%,100%{opacity:1}50%{opacity:.35}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .tb{padding:0 14px;gap:8px}
  .d .tb .cp,.d .tb .pill{display:none}
  .d .body{display:flex;flex-direction:column;overflow-y:auto;padding:12px 14px 20px}
  .d .side{flex:none;overflow:visible}
  .d .tl{overflow:visible}
  .d .mapc{flex:none;height:340px}
}
@media (prefers-reduced-motion: reduce){.d .vr,.d .now .dt::before,.d .live i{animation:none}}`,
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
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.4, 0.5);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };

      // timeline: one open step at a time
      const lis = $$('.tl li');
      lis.forEach((li) =>
        li.querySelector('.sh').addEventListener('click', () => {
          const open = !li.classList.contains('on');
          lis.forEach((l) => {
            l.classList.remove('on');
            l.querySelector('.sh').setAttribute('aria-expanded', 'false');
          });
          if (open) {
            li.classList.add('on');
            li.querySelector('.sh').setAttribute('aria-expanded', 'true');
          }
        })
      );

      // the van drives along the route; the solid line grows behind it
      const path = $('#tr-route');
      const done = $('.rdone');
      const van = $('.van');
      const L = path.getTotalLength();
      const T0 = 0.54;
      const T1 = 0.76;
      let t = T0;
      let last = performance.now();
      let hold = 0;
      let stops = 4;
      const sn = $('.sn');
      const place = (k) => {
        const p = path.getPointAtLength(L * k);
        const q = path.getPointAtLength(Math.min(L, L * k + 2));
        van.setAttribute('transform', `translate(${p.x.toFixed(1)} ${p.y.toFixed(1)}) rotate(${((Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI).toFixed(1)})`);
        done.style.strokeDasharray = `${(L * k).toFixed(1)} ${L.toFixed(1)}`;
      };
      const setStops = (n) => {
        if (n === stops) return;
        stops = n;
        sn.textContent = n;
        sn.classList.remove('bump');
        void sn.offsetWidth;
        sn.classList.add('bump');
      };
      place(T0);
      const frame = (now) => {
        if (!root.isConnected) return;
        const dt = Math.min(64, now - last);
        last = now;
        if (!root.dataset.paused) {
          if (hold > 0) {
            hold -= dt;
            if (hold <= 0) {
              t = T0;
              place(t);
              setStops(4);
              van.style.opacity = 1;
            }
          } else {
            t += (dt / 9000) * (T1 - T0);
            if (t >= T1) {
              t = T1;
              hold = 1400;
              van.style.opacity = 0;
            }
            place(t);
            setStops(t > 0.7 ? 2 : t > 0.62 ? 3 : 4);
          }
        }
        requestAnimationFrame(frame);
      };
      requestAnimationFrame(frame);

      // "last scan" ticks up; refresh resets it
      let ago = 12;
      const agoEl = $('.ago');
      const fmt = () => (agoEl.textContent = Math.floor(ago / 60) + ':' + String(ago % 60).padStart(2, '0'));
      $('.rf').addEventListener('click', () => {
        ago = 0;
        fmt();
      });
      (async () => {
        while (root.isConnected) {
          await wait(1000);
          ago = ago >= 599 ? 0 : ago + 1;
          fmt();
        }
      })();

      // Autoplay: open Shipped, then go back to the live step.
      cur.style.transform = 'translate(700px,500px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!(await tap(lis[2].querySelector('.sh')))) continue;
          await wait(2600);
          if (!(await tap(lis[3].querySelector('.sh')))) continue;
          await wait(3400);
          if (!(await tap($('.rf')))) continue;
          await wait(2400);
        }
      })();
    },
    prompt: `Build a shipment tracking page for an online order, full viewport. A 68px top bar (back button, order number as the h1 with a one line subtitle, an "In transit" status pill, a Share tracking button), then two cards on a pale surface: a 390px side card and a map card that fills the rest. Phone: stacked, the map a fixed 340px tall block below the timeline.

Side card: the ETA first (micro label "Arrives", the date at 26px weight 650, a green "By 6:00 PM" pill and "4 stops away" with the number in bold), then a vertical timeline that takes the remaining height and spreads its steps over it (flex: 1 0 auto per step). Six steps: Order placed, Packed, Shipped, In transit (current), Out for delivery, Delivered, each a button with a 24px dot, title and timestamp. Finished steps are accent dots with a check and an accent connector line; the current step has a filled ring with a pinging halo (scale 1 to 2.6 and fade, 2s, transform and opacity only); future steps are hollow. Clicking a step opens its scan events in an accordion (grid-template-rows: 0fr to 1fr, 400ms) and rotates the chevron; one open at a time, aria-expanded on the buttons.

Map card: an abstract SVG map (soft background, a pale river stroke, rounded block shapes, white roads with a grey outline, a diagonal avenue; no real map tiles). The route is one path: a dashed grey base, a solid accent line for the part already driven (stroke-dasharray = length times progress), an origin dot and a destination pin with a soft halo. A small van icon drives along it: each frame read path.getPointAtLength(progress) and a point two units ahead, set transform translate plus rotate(atan2) on the van group, and grow the solid line; progress goes from 54 percent to 76 percent over 9 seconds, then the van fades out, holds 1.4s and restarts. The stops-away number changes as the van passes thresholds and pops. A "Live" pill with a blinking green dot sits top left; a floating glass card at the bottom shows the truck, the next stop and "last scan 0:12 ago" ticking up each second, with a refresh button that resets it.

Accessibility: the map is aria-hidden with the same information repeated in the card text, buttons have visible focus rings, prefers-reduced-motion stops the pings and the blink. Plain HTML, CSS and JS, no libraries; React-friendly structure (TrackingHeader, EtaBlock, Timeline, TimelineStep, RouteMap, TruckCard).`,
  });

  // ---------------------------------------------------------------- 6. subscription management
  const sbNav = [
    ['Overview', P.user],
    ['Orders', P.box],
    ['Subscription', P.repeat],
    ['Addresses', P.pin],
    ['Payment', P.card],
  ];
  ML.add({
    id: 'app-commerce-subscription',
    cat: 'app-commerce',
    title: 'Subscription manager',
    sub: 'Skip, pause and swap with confirmations',
    html: `
<div class="app">
  ${SYMS('sb')}
  ${HDR(P.coffee, 'Corvid Coffee', ['Beans', 'Gear', 'Subscriptions', 'Gifts'], 'Subscriptions', '')}
  <div class="shell">
    <nav class="acc" aria-label="Account">
      <p class="k">Account</p>
      ${sbNav.map((n) => `<button type="button" class="ai${n[0] === 'Subscription' ? ' on' : ''}">${I(n[1], 18)}${n[0]}</button>`).join('')}
    </nav>
    <main class="mn">
      <div class="top"><div><h1>Your subscription</h1><p class="sub2">Subscriber since March 2026</p></div><span class="pill ok stp"><i></i>Active</span></div>
      <div class="pb"><div><div class="pbi">${I(P.pause, 18)}<p><b class="pbt">Paused until Wed 18 Nov</b>No bags will ship or be charged until then.</p><button type="button" class="ghost rs">${I(P.play, 14)}Resume now</button></div></div></div>
      <div class="cols">
        <div class="lcol">
          <section class="card hero">
            <span class="tile t3 v1 ht"></span>
            <div class="hi">
              <p class="k">Next delivery</p>
              <p class="hd"><b class="dtv"></b></p>
              <p class="hs2"><span class="pill blue hp"></span></p>
              <p class="hn2"></p>
              <p class="hpr"><b>$17.10</b><s>$19.00</s><span>per bag, free shipping</span></p>
            </div>
            <div class="ha">
              <button type="button" class="ghost b-skip">${I(P.skip, 16)}Skip next</button>
              <button type="button" class="ghost b-pause">${I(P.pause, 16)}<span>Pause</span></button>
              <button type="button" class="ghost b-swap">${I(P.swap, 16)}Swap coffee</button>
            </div>
          </section>
          <section class="card upc">
            <header><h2>Upcoming deliveries</h2><span class="k">Every 2 weeks</span></header>
            <ul class="up"></ul>
          </section>
        </div>
        <aside class="card plan">
          <h2>Plan details</h2>
          <dl>
            <div><dt>Frequency</dt><dd>Every 2 weeks</dd></div>
            <div><dt>Grind</dt><dd>Whole bean</dd></div>
            <div><dt>Ship to</dt><dd>212 Alder Street, Portland</dd></div>
            <div><dt>Payment</dt><dd>Card ending 4242</dd></div>
            <div><dt>Billed</dt><dd>2 days before shipping</dd></div>
          </dl>
          <div class="hist"><p class="k">Recent deliveries</p><ul><li><span>Wed 7 Oct</span><b>Delivered</b></li><li><span>Wed 23 Sep</span><b>Delivered</b></li><li><span>Wed 9 Sep</span><b>Delivered</b></li></ul></div>
          <div class="sm">
            <p class="rw"><span>Subtotal</span><b>$19.00</b></p>
            <p class="rw"><span>Subscriber discount (10%)</span><b class="gr">-$1.90</b></p>
            <p class="rw"><span>Shipping</span><b class="gr">Free</b></p>
            <p class="rw tot"><span>Per delivery</span><b>$17.10</b></p>
          </div>
        </aside>
      </div>
    </main>
  </div>
  <div class="mod" role="presentation"><div class="dlg" role="dialog" aria-modal="true"></div></div>
  <div class="toast" role="status">${I(P.check, 16, 2.6)}<span class="tm"></span></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .badge:empty{display:none}
.d .shell{display:grid;flex:1;grid-template-columns:216px minmax(0,1fr);min-height:0;background:var(--ml-surface)}
.d .acc{display:flex;flex-direction:column;gap:2px;padding:24px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .k{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .acc .k{padding:0 10px 10px}
.d .ai{display:flex;align-items:center;gap:11px;height:40px;padding:0 10px;border:0;border-radius:10px;background:none;font-size:14px;font-weight:500;color:var(--ml-ink-2);text-align:left;cursor:pointer;transition:background-color .2s ease}
.d .ai svg{color:var(--ml-muted)}
.d .ai:hover{background:var(--ml-surface)}
.d .ai.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-weight:600}
.d .ai.on svg{color:var(--ml-accent)}
.d .mn{display:flex;flex-direction:column;gap:16px;min-width:0;min-height:0;padding:24px 28px 28px;overflow-y:auto;scrollbar-width:thin}
.d .top{display:flex;flex:none;align-items:center;justify-content:space-between;gap:14px}
.d .top h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d .sub2{margin-top:3px;font-size:13.5px;color:var(--ml-muted)}
.d .pb{display:grid;flex:none;grid-template-rows:0fr;margin:-16px 0 0;transition:grid-template-rows .5s var(--ml-ease),margin .5s var(--ml-ease)}
.d .pb > div{min-height:0;overflow:hidden}
.d .app.paused .pb{grid-template-rows:1fr;margin:0}
.d .pbi{display:flex;align-items:center;gap:14px;padding:14px 18px;border-radius:14px;background:rgba(255,159,10,.1);color:#B25E00}
.d .pbi p{flex:1;font-size:13.5px;color:#8A5A12}
.d .pbi b{display:block;font-weight:650;color:#B25E00}
.d .cols{display:grid;flex:1;grid-template-columns:minmax(0,1.55fr) minmax(0,1fr);gap:16px;min-height:0}
.d .lcol{display:flex;flex-direction:column;gap:16px;min-width:0}
.d .hero{display:grid;grid-template-columns:200px minmax(0,1fr);gap:8px 26px;padding:22px}
.d .ht{grid-row:1/3;width:200px;height:200px;border-radius:18px}
.d .ht .pi{width:80%;height:80%;animation:cm-float 6s ease-in-out infinite}
.d .ht.swp .pi{animation:sb-swap 560ms var(--ml-bounce)}
.d .hi{min-width:0}
.d .hd{margin-top:6px}
.d .dtv{display:inline-block;font-size:32px;line-height:1.1;font-weight:650;letter-spacing:-.035em}
.d .dtv.bump{animation:cm-pop 460ms var(--ml-bounce)}
.d .hs2{margin-top:10px}
.d .hn2{margin-top:14px;font-size:15px;font-weight:600}
.d .hpr{display:flex;align-items:baseline;gap:8px;margin-top:6px;font-size:13px;color:var(--ml-muted)}
.d .hpr b{font-size:16px;font-weight:650;color:var(--ml-ink)}
.d .hpr s{color:var(--ml-muted)}
.d .ha{grid-column:2;display:flex;flex-wrap:wrap;align-items:flex-end;gap:10px}
.d .ha .ghost:disabled{opacity:.4;cursor:default}
.d .hero{transition:opacity .4s ease}
.d .app.paused .ht,.d .app.paused .hi{opacity:.5}
.d .upc{display:flex;flex:1;flex-direction:column;padding:20px 22px;min-height:0}
.d .upc header{display:flex;align-items:center;justify-content:space-between}
.d h2{font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .up{display:flex;flex:1;flex-direction:column;margin-top:8px;list-style:none}
.d .urw{display:grid;grid-template-rows:1fr;flex:1 0 auto;transition:grid-template-rows .45s var(--ml-ease),opacity .35s ease}
.d .urw.gone{grid-template-rows:0fr;flex:0 0 auto;opacity:0}
.d .urw > div{display:flex;align-items:center;gap:14px;min-height:0;overflow:hidden;border-bottom:1px solid var(--ml-line)}
.d .urw:last-child > div{border-bottom:0}
.d .urw.fresh{animation:cm-in 560ms var(--ml-spring) both}
.d .dc{display:flex;flex:none;flex-direction:column;align-items:center;justify-content:center;width:52px;height:52px;margin:10px 0;border-radius:12px;background:var(--ml-surface);font-size:11px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ml-muted)}
.d .dc b{font-size:19px;line-height:1.05;font-weight:650;letter-spacing:-.02em;color:var(--ml-ink)}
.d .urw.nx .dc{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .urw.nx .dc b{color:var(--ml-accent-ink)}
.d .ut{display:flex;flex:1;flex-direction:column;min-width:0}
.d .ut b{font-size:14px;font-weight:600}
.d .ut small{font-size:12.5px;color:var(--ml-muted)}
.d .upr{font-size:14px;font-weight:600}
.d .plan{display:flex;flex-direction:column;padding:22px;min-width:0}
.d .plan dl{display:flex;flex-direction:column;margin-top:12px}
.d .plan dl div{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid var(--ml-line);font-size:13.5px}
.d .plan dt{color:var(--ml-muted)}
.d .plan dd{font-weight:600;text-align:right}
.d .hist{margin-top:20px}
.d .hist ul{margin-top:6px;list-style:none}
.d .hist li{display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--ml-line);font-size:13.5px;color:var(--ml-ink-2)}
.d .hist li:last-child{border-bottom:0}
.d .hist b{font-size:12px;font-weight:600;color:#12893C}
.d .sm{margin-top:auto;padding-top:18px}
.d .rw{display:flex;justify-content:space-between;padding:5px 0;font-size:13.5px;color:var(--ml-ink-2)}
.d .rw b{font-weight:600;color:var(--ml-ink)}
.d .rw b.gr{color:#12893C}
.d .tot{margin-top:6px;padding-top:12px;border-top:1px solid var(--ml-line);font-size:15px;font-weight:600;color:var(--ml-ink)}
.d .tot b{font-size:22px;font-weight:650;letter-spacing:-.02em}
.d .mod{position:absolute;inset:0;z-index:30;display:grid;place-items:center;padding:20px;background:rgba(35,15,10,.34);opacity:0;pointer-events:none;transition:opacity .3s ease}
.d .mod.open{opacity:1;pointer-events:auto}
.d .dlg{width:100%;max-width:420px;padding:24px;border-radius:20px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);opacity:0;transform:translateY(14px) scale(.97);transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .mod.open .dlg{opacity:1;transform:none}
.d .dg{display:grid;place-items:center;width:44px;height:44px;border-radius:12px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .dlg h3{margin-top:14px;font-size:19px;font-weight:650;letter-spacing:-.02em}
.d .dlg p.dp{margin-top:6px;font-size:14px;line-height:1.5;color:var(--ml-muted)}
.d .dlg p.dp b{font-weight:600;color:var(--ml-ink)}
.d .opts{display:flex;flex-direction:column;gap:8px;margin-top:16px}
.d .op{display:flex;align-items:center;gap:12px;padding:10px 12px;border:0;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:left;cursor:pointer;transition:background-color .25s ease,box-shadow .25s ease}
.d .op .tile{flex:none;width:44px;height:44px;border-radius:10px}
.d .op span.ot{display:flex;flex:1;flex-direction:column}
.d .op b{font-size:14px;font-weight:600}
.d .op small{font-size:12.5px;color:var(--ml-muted)}
.d .op.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .op .rd{display:grid;place-items:center;flex:none;width:18px;height:18px;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--ml-bar)}
.d .op .rd::after{content:"";width:8px;height:8px;border-radius:50%;background:#fff;transform:scale(0);transition:transform .3s var(--ml-bounce)}
.d .op.on .rd{background:var(--ml-accent);box-shadow:none}
.d .op.on .rd::after{transform:none}
.d .dba{display:flex;gap:10px;margin-top:20px}
.d .dba .ghost,.d .dba .cta{flex:1;height:44px}
@container scr (max-width: 1100px){
  .d .cols{grid-template-columns:minmax(0,1fr) 262px}
  .d .hero{grid-template-columns:140px minmax(0,1fr);gap:8px 20px}
  .d .ht{grid-row:1;width:140px;height:140px;border-radius:16px}
  .d .ha{grid-column:1/-1;margin-top:6px}
  .d .dtv{font-size:27px}
  .d .hpr{flex-wrap:wrap;gap:4px 8px}
}
@keyframes sb-swap{0%{opacity:0;transform:translateY(14px) scale(.9)}100%{opacity:1;transform:none}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .shell{grid-template-columns:minmax(0,1fr)}
  .d .acc{display:none}
  .d .mn{padding:18px 16px 24px}
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .hero{grid-template-columns:minmax(0,1fr)}
  .d .ht{grid-row:auto;width:100%;height:170px}
  .d .ha{grid-column:1}
  .d .dtv{font-size:28px}
  .d .pbi{flex-wrap:wrap}
}
@media (prefers-reduced-motion: reduce){.d .ht .pi{animation:none}}`,
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
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.5, 0.55);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };

      const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const MS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const ML_ = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const today = new Date(2026, 9, 14);
      const coffees = [
        { n: 'Ethiopia Guji Natural', c: 'v1', note: 'Blueberry, jasmine, cocoa' },
        { n: 'Colombia Huila Washed', c: 'v3', note: 'Red apple, caramel' },
        { n: 'Kenya Kirinyaga AA', c: 'v4', note: 'Blackcurrant, citrus' },
      ];
      const mk = (k) => new Date(2026, 9, 21 + 14 * k);
      let dates, coffee, paused, nextK;
      const app = $('.app');
      const list = $('.up');
      const art = (k) => `<svg class="pi" viewBox="0 0 120 120" aria-hidden="true"><use href="#sb-bag"/></svg>`;
      const days = (d) => Math.round((d - today) / 864e5);
      const long = (d) => `${WD[d.getDay()]} ${d.getDate()} ${ML_[d.getMonth()]}`;
      const short = (d) => `${WD[d.getDay()]} ${d.getDate()} ${MS[d.getMonth()]}`;
      const toast = (msg) => {
        $('.tm').textContent = msg;
        const t = $('.toast');
        t.classList.add('on');
        clearTimeout(t._t);
        t._t = setTimeout(() => t.classList.remove('on'), 2600);
      };
      const bump = (el) => {
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
      };
      const renderList = (fresh) => {
        list.innerHTML = dates
          .map(
            (d, i) =>
              `<li class="urw${i === 0 ? ' nx' : ''}${fresh && i === dates.length - 1 ? ' fresh' : ''}"><div><span class="dc">${WD[d.getDay()]}<b>${d.getDate()}</b></span><span class="ut"><b>${coffees[coffee].n}</b><small>250 g, whole bean - ${MS[d.getMonth()]} ${d.getFullYear()}</small></span><span class="upr">$17.10</span><span class="pill ${paused ? 'warn' : i === 0 ? 'blue' : ''}">${paused ? 'On hold' : i === 0 ? 'Next' : 'Scheduled'}</span></div></li>`
          )
          .join('');
      };
      const render = (animate) => {
        const d = dates[0];
        const ht = $('.ht');
        ht.className = `tile t3 ${coffees[coffee].c} ht`;
        ht.innerHTML = art();
        $('.hn2').textContent = `${coffees[coffee].n}, 250 g`;
        const n = days(d);
        $('.dtv').textContent = paused ? 'Paused' : long(d);
        const hp = $('.hp');
        hp.textContent = paused ? `Resumes ${long(d)}` : `Ships in ${n} days`;
        hp.className = `pill ${paused ? 'warn' : 'blue'} hp`;
        const sp = $('.stp');
        sp.className = `pill ${paused ? 'warn' : 'ok'} stp`;
        sp.innerHTML = `<i></i>${paused ? 'Paused' : 'Active'}`;
        $('.pbt').textContent = `Paused until ${long(d)}`;
        app.classList.toggle('paused', paused);
        $('.b-skip').disabled = paused;
        $('.b-swap').disabled = paused;
        $('.b-pause span').textContent = paused ? 'Resume' : 'Pause';
        renderList(false);
        if (animate) {
          bump($('.dtv'));
          ht.classList.add('swp');
          setTimeout(() => ht.classList.remove('swp'), 700);
        }
      };
      const reset = (animate) => {
        dates = [0, 1, 2, 3].map(mk);
        nextK = 4;
        coffee = 0;
        paused = false;
        render(animate);
      };
      const mod = $('.mod');
      const dlg = $('.dlg');
      let pick = 0;
      const close = () => mod.classList.remove('open');
      const open = (kind) => {
        const d = dates[0];
        if (kind === 'skip') {
          const nx = dates[1];
          dlg.innerHTML = `<span class="dg">${$('.b-skip svg').outerHTML}</span><h3>Skip ${short(d)}?</h3><p class="dp">Your next bag ships <b>${long(nx)}</b> instead. You are not charged for the skipped delivery.</p><div class="dba"><button type="button" class="ghost dno">Keep it</button><button type="button" class="cta dyes">Skip delivery</button></div>`;
        } else if (kind === 'pause') {
          const r = new Date(d.getFullYear(), d.getMonth(), d.getDate() + 28);
          dlg.innerHTML = `<span class="dg">${$('.b-pause svg').outerHTML}</span><h3>Pause for 4 weeks?</h3><p class="dp">No bags ship or are billed. Deliveries resume <b>${long(r)}</b>, and you can resume sooner anytime.</p><div class="dba"><button type="button" class="ghost dno">Cancel</button><button type="button" class="cta dyes">Pause deliveries</button></div>`;
        } else {
          pick = coffee;
          dlg.innerHTML = `<span class="dg">${$('.b-swap svg').outerHTML}</span><h3>Swap your next coffee</h3><p class="dp">Applies to the <b>${short(d)}</b> delivery. Later bags stay the same.</p><div class="opts">${coffees
            .map(
              (c, i) =>
                `<button type="button" class="op${i === pick ? ' on' : ''}" data-i="${i}"><span class="tile t3 ${c.c}">${art()}</span><span class="ot"><b>${c.n}</b><small>${c.note}</small></span><span class="rd"></span></button>`
            )
            .join('')}</div><div class="dba"><button type="button" class="ghost dno">Cancel</button><button type="button" class="cta dyes">Swap coffee</button></div>`;
          $$('.op').forEach((b) =>
            b.addEventListener('click', () => {
              pick = +b.dataset.i;
              $$('.op').forEach((o) => o.classList.toggle('on', o === b));
            })
          );
        }
        dlg.dataset.kind = kind;
        mod.classList.add('open');
        $('.dno').addEventListener('click', close);
        $('.dyes').addEventListener('click', () => {
          close();
          if (kind === 'skip') {
            const first = list.firstElementChild;
            first.classList.add('gone');
            setTimeout(() => {
              dates.shift();
              dates.push(mk(nextK++));
              render(true);
              renderList(true);
              toast(`Skipped. Next bag ships ${short(dates[0])}`);
            }, 480);
          } else if (kind === 'pause') {
            paused = true;
            dates = dates.map((x) => new Date(x.getFullYear(), x.getMonth(), x.getDate() + 28));
            render(true);
            toast('Deliveries paused for 4 weeks');
          } else {
            coffee = pick;
            render(true);
            toast(`Next bag swapped to ${coffees[coffee].n}`);
          }
        });
      };
      mod.addEventListener('click', (e) => e.target === mod && close());
      $('.b-skip').addEventListener('click', () => open('skip'));
      $('.b-swap').addEventListener('click', () => open('swap'));
      const resume = () => {
        paused = false;
        render(true);
        toast('Welcome back. Deliveries have resumed');
      };
      $('.b-pause').addEventListener('click', () => (paused ? resume() : open('pause')));
      $('.rs').addEventListener('click', resume);
      reset(false);

      // Autoplay: alternates skip + swap with pause + resume, each through its confirmation.
      let round = 0;
      const seq = async () => {
        if (round % 2 === 0) {
          if (!(await tap($('.b-skip')))) return;
          await wait(800);
          if (!(await tap($('.dyes')))) return;
          await wait(2200);
          if (!(await tap($('.b-swap')))) return;
          await wait(800);
          if (!(await tap($$('.op')[1]))) return;
          await wait(500);
          if (!(await tap($('.dyes')))) return;
          await wait(2600);
        } else {
          if (!(await tap($('.b-pause')))) return;
          await wait(800);
          if (!(await tap($('.dyes')))) return;
          await wait(2600);
          if (!(await tap($('.rs')))) return;
          await wait(2400);
        }
        round++;
        if (idle()) reset(true);
      };
      cur.style.transform = 'translate(760px,560px)';
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle() || mod.classList.contains('open')) {
            await wait(400);
            continue;
          }
          await seq();
          await wait(1200);
        }
      })();
    },
    prompt: `Build a subscription management page inside a store account area, full viewport. Store header on top; below it a 216px account nav on the left (Overview, Orders, Subscription active with a soft blue fill, Addresses, Payment) and a scrolling main area on a pale surface. Phone: the nav hides and everything stacks.

Main area: title "Your subscription" with a status pill (Active in green, Paused in amber). A two column grid (1.55fr / 1fr). Left: a "Next delivery" hero card (200px rounded product tile with a drawn bag floating 6px on a slow 6s loop, micro label, the date at 32px weight 650, a blue "Ships in 7 days" pill, product name, the subscriber price with the list price struck through, and three secondary buttons: Skip next, Pause, Swap coffee) and an "Upcoming deliveries" card whose rows (date chip, product, price, Next or Scheduled pill) spread over the remaining height. Right: a plan card (frequency, grind, address, payment, billing timing) and a price summary that adds up (subtotal, subscriber discount, shipping, per delivery total).

Every change goes through a confirmation dialog (absolute over a dim scrim, 420px card, opacity and translateY(14px) scale(.97) to rest on the spring curve, ~590ms): Skip shows the date being skipped and the date the next bag will ship instead; Pause explains the resume date four weeks later; Swap lists three coffees as radio cards (tile, name, tasting note, radio dot). Compute every date from real Date objects (weekdays and day counts must be right).

After Skip the first upcoming row collapses (grid-template-rows 1fr to 0fr plus fade, 450ms), a new row slides in at the end, the hero date pops (scale .6, 1.18, 1) and a toast confirms. After Pause an amber banner expands (0fr to 1fr), the hero dims, Skip and Swap disable, upcoming pills become "On hold" and the Pause button turns into Resume. After Swap the bag art re-enters from below with a small overshoot.

Accessibility: dialogs are role="dialog" aria-modal with focus moved in and restored, Escape and scrim click cancel, buttons have focus-visible rings, prefers-reduced-motion stops the floating bag. Plain HTML, CSS and JS, no libraries; React-friendly structure (AccountNav, NextDeliveryCard, UpcomingList, PlanCard, ConfirmDialog, SwapPicker).`,
  });

  // ---------------------------------------------------------------- 7. store admin products
  const adNav = [
    ['Home', P.dash],
    ['Orders', P.box, '12'],
    ['Products', P.tag],
    ['Customers', P.users],
    ['Analytics', P.chart],
    ['Settings', P.gear],
  ];
  ML.add({
    id: 'app-commerce-admin',
    cat: 'app-commerce',
    title: 'Store admin products',
    sub: 'Low-stock filter and inline quick edit',
    html: `
<div class="app">
  ${SYMS('ad')}
  <div class="adm">
    <aside class="side">
      <div class="brand"><span class="mk">${I(P.coffee, 16)}</span><b>Corvid</b><span class="pill blue">Admin</span></div>
      <nav class="sn" aria-label="Admin">
        ${adNav.map((n) => `<button type="button" class="sni${n[0] === 'Products' ? ' on' : ''}">${I(n[1], 18)}<span>${n[0]}</span>${n[2] ? `<em>${n[2]}</em>` : ''}</button>`).join('')}
      </nav>
      <div class="me"><span class="av">IC</span><p><b>Isabel Cruz</b><small>Store owner</small></p></div>
    </aside>
    <main class="pgm">
      <div class="hd"><div><h1>Products</h1><p class="sub2">Corvid Coffee - updated 3 minutes ago</p></div><div class="hb"><button type="button" class="ghost">Export</button><button type="button" class="cta sm">${I(P.plus, 16)}Add product</button></div></div>
      <div class="kp">
        <div class="card kk"><p class="k">Inventory value</p><p class="v kv">$0</p></div>
        <div class="card kk"><p class="k">Units in stock</p><p class="v ku">0</p></div>
        <div class="card kk"><p class="k">Needs restocking</p><p class="v kl">0</p></div>
      </div>
      <section class="card tp">
        <div class="fb">
          <div class="chips" role="tablist" aria-label="Filter products"></div>
          <label class="sr">${I(P.search, 16)}<input type="search" placeholder="Search products" aria-label="Search products"></label>
        </div>
        <div class="hrow"><span></span><span>Product</span><span>SKU</span><span>Inventory</span><span class="r">Price</span><span>Status</span><span></span></div>
        <div class="body"></div>
        <div class="ft"><span class="ftc"></span><span class="hint">${I(P.edit, 14)}Click inventory or price to edit</span></div>
      </section>
    </main>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .adm{display:grid;flex:1;grid-template-columns:224px minmax(0,1fr);min-height:0;background:var(--ml-surface)}
.d .side{display:flex;flex-direction:column;min-height:0;padding:20px 14px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .brand{display:flex;align-items:center;gap:10px;padding:2px 6px 22px;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .brand .pill{margin-left:auto;height:22px;font-size:11px}
.d .sn{display:flex;flex-direction:column;gap:2px}
.d .sni{display:flex;align-items:center;gap:11px;height:40px;padding:0 10px;border:0;border-radius:10px;background:none;font-size:14px;font-weight:500;color:var(--ml-ink-2);text-align:left;cursor:pointer;transition:background-color .2s ease}
.d .sni svg{color:var(--ml-muted)}
.d .sni:hover{background:var(--ml-surface)}
.d .sni.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-weight:600}
.d .sni.on svg{color:var(--ml-accent)}
.d .sni em{margin-left:auto;padding:4px 7px;border-radius:99px;background:var(--ml-surface);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .me{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .me p{display:flex;flex-direction:column}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .av{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650}
.d .pgm{display:flex;flex-direction:column;gap:16px;min-width:0;min-height:0;padding:24px 28px 24px}
.d .hd{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}
.d .hd h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d .sub2{margin-top:3px;font-size:13.5px;color:var(--ml-muted)}
.d .hb{display:flex;gap:10px}
.d .cta.sm{height:42px;padding:0 16px;font-size:13.5px}
.d .kp{display:grid;flex:none;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
.d .kk{padding:16px 18px}
.d .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .v{display:inline-block;margin-top:6px;font-size:26px;line-height:1;font-weight:650;letter-spacing:-.03em}
.d .v.bump{animation:cm-pop 460ms var(--ml-bounce)}
.d .tp{display:flex;flex:1;flex-direction:column;min-height:0;overflow:hidden}
.d .fb{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;padding:14px 18px;border-bottom:1px solid var(--ml-line)}
.d .chips{display:flex;gap:6px}
.d .chip{display:inline-flex;align-items:center;gap:7px;height:34px;padding:0 13px;border:0;border-radius:99px;background:var(--ml-surface);font-size:13px;font-weight:550;color:var(--ml-ink-2);white-space:nowrap;cursor:pointer;transition:background-color .25s ease,color .25s ease,transform 90ms ease-out}
.d .chip b{font:600 11.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .chip:hover{background:var(--ml-bar-2)}
.d .chip.on{background:var(--ml-ink);color:#fff}
.d .chip.on b{color:rgba(255,255,255,.7)}
.d .chip:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .sr{display:flex;align-items:center;gap:8px;width:220px;height:36px;padding:0 12px;border-radius:10px;background:var(--ml-surface);color:var(--ml-muted)}
.d .sr input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px;color:var(--ml-ink)}
.d .hrow,.d .tr{display:grid;grid-template-columns:30px minmax(0,1.7fr) minmax(0,.9fr) minmax(0,1.05fr) 86px minmax(0,.7fr) 40px;align-items:center;gap:12px;padding:0 18px}
.d .hrow{flex:none;height:40px;border-bottom:1px solid var(--ml-line);font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .hrow .r,.d .tr .pc{text-align:right}
.d .body{flex:1;min-height:0;overflow-y:auto;scrollbar-width:thin}
.d .rwp{display:grid;grid-template-rows:1fr;transition:grid-template-rows .42s var(--ml-ease),opacity .3s ease}
.d .rwp.gone{grid-template-rows:0fr;opacity:0}
.d .rwi{min-height:0;overflow:hidden}
.d .tr{height:58px;border-bottom:1px solid var(--ml-line);transition:background-color .9s ease}
.d .rwp.gone .tr{border-bottom-color:transparent}
.d .tr.flash{background:var(--ml-accent-soft);transition:none}
.d .cb{width:18px;height:18px;border-radius:5px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar)}
.d .pn{display:flex;align-items:center;gap:12px;min-width:0}
.d .pn .tile{flex:none;width:40px;height:40px;border-radius:10px}
.d .pn b{overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .sku{font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
.d .iv,.d .pc{display:inline-flex;align-items:center;height:32px;padding:0 6px;border:0;border-radius:9px;background:none;font:inherit;cursor:text;transition:background-color .2s ease}
.d .iv{justify-self:start}
.d .pc{justify-self:end;font-size:13.5px;font-weight:600}
.d .iv:hover,.d .pc:hover{background:var(--ml-surface)}
.d .iv:focus-visible,.d .pc:focus-visible,.d .ed:focus-visible,.d .ebtn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:1px}
.d .ed{width:82px;height:32px;padding:0 10px;border:0;border-radius:9px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);font:600 13.5px var(--ml-font);color:var(--ml-ink);outline:0}
.d .ed.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .ebtn{display:grid;place-items:center;width:32px;height:32px;border:0;border-radius:9px;background:none;color:var(--ml-muted);cursor:pointer}
.d .ebtn:hover{background:var(--ml-surface);color:var(--ml-ink)}
.d .ft{display:flex;flex:none;align-items:center;justify-content:space-between;padding:12px 18px;border-top:1px solid var(--ml-line);font-size:12.5px;color:var(--ml-muted)}
.d .hint{display:flex;align-items:center;gap:7px}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .adm{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .pgm{padding:16px;overflow-y:auto}
  .d .tp{flex:none;min-height:420px}
  .d .kp{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .kk:last-child{grid-column:1/-1}
  .d .hb .ghost{display:none}
  .d .sr,.d .hint{display:none}
  .d .fb{overflow-x:auto}
  .d .hrow,.d .tr{grid-template-columns:minmax(0,1fr) auto 28px;gap:8px}
  .d .hrow span:nth-child(1),.d .hrow span:nth-child(3),.d .hrow span:nth-child(5),.d .hrow span:nth-child(6),.d .tr > :nth-child(1),.d .tr > :nth-child(3),.d .tr > :nth-child(5),.d .tr > :nth-child(6){display:none}
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
        $$('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.5, 0.55);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };

      const seed = [
        ['Ethiopia Guji Natural 250 g', 'CC-ETH-250', 124, 19, 'bag', 'v1', 't3', 1],
        ['Colombia Huila Washed 250 g', 'CC-COL-250', 8, 18, 'bag', 'v3', 't3', 1],
        ['Kenya Kirinyaga AA 250 g', 'CC-KEN-250', 62, 21, 'bag', 'v4', 't4', 1],
        ['Ceramic Pour-over Dripper', 'CC-DRP-01', 5, 38, 'dripper', 'v1', 't2', 1],
        ['Corvid Mug 12 oz', 'CC-MUG-12', 41, 18, 'mug', '', 't2', 1],
        ['Gooseneck Kettle', 'CC-KTL-02', 0, 64, 'flask', 'v1', 't4', 1],
        ['Hand Grinder', 'CC-GRD-01', 17, 79, 'flask', 'v4', 't3', 1],
        ['Paper Filters 100 pack', 'CC-FLT-100', 6, 9, 'jar', '', 't2', 1],
        ['Sumatra Mandheling 500 g', 'CC-SUM-500', 88, 32, 'bag', 'v2', 't3', 1],
        ['Cold Brew Bottle', 'CC-CBB-01', 30, 28, 'flask', 'v3', 't4', 0],
        ['Decaf Swiss Water 250 g', 'CC-DEC-250', 3, 19, 'bag', 'v5', 't3', 1],
      ];
      let data = seed.map((r) => ({ n: r[0], sku: r[1], q: r[2], p: r[3], a: r[4], c: r[5], t: r[6], act: !!r[7] }));
      let filter = 'all';
      const body = $('.body');
      const chipsEl = $('.chips');
      const LOW = 10;
      const match = (r) => (filter === 'all' ? true : filter === 'active' ? r.act : filter === 'draft' ? !r.act : filter === 'low' ? r.q > 0 && r.q < LOW : r.q === 0);
      const pill = (q) => (q === 0 ? '<span class="pill bad"><i></i>Out of stock</span>' : q < LOW ? `<span class="pill warn"><i></i>${q} left</span>` : `<span class="pill ok"><i></i>${q} in stock</span>`);
      const pen = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>';
      body.innerHTML = data
        .map(
          (r, i) =>
            `<div class="rwp" data-i="${i}"><div class="rwi"><div class="tr"><span class="cb"></span><span class="pn"><span class="tile ${r.t} ${r.c}"><svg class="pi" viewBox="0 0 120 120" aria-hidden="true"><use href="#ad-${r.a}"/></svg></span><b>${r.n}</b></span><span class="sku">${r.sku}</span><button type="button" class="iv" aria-label="Edit inventory"></button><button type="button" class="pc" aria-label="Edit price"></button><span class="stc"></span><button type="button" class="ebtn" aria-label="Quick edit">${pen}</button></div></div></div>`
        )
        .join('');
      const rows = $$('.rwp');
      const counts = () => {
        const keep = filter;
        const c = { all: data.length, active: data.filter((r) => r.act).length, draft: data.filter((r) => !r.act).length, low: data.filter((r) => r.q > 0 && r.q < LOW).length, out: data.filter((r) => r.q === 0).length };
        filter = keep;
        return c;
      };
      const fixed = [['all', 'All'], ['active', 'Active'], ['draft', 'Draft'], ['low', 'Low stock'], ['out', 'Out of stock']];
      chipsEl.innerHTML = fixed.map(([k, l]) => `<button type="button" class="chip" role="tab" data-f="${k}">${l}<b></b></button>`).join('');
      const chips = $$('.chip');
      const bump = (el) => {
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
      };
      const fill = (i) => {
        const r = data[i];
        const el = rows[i];
        el.querySelector('.iv').innerHTML = pill(r.q);
        el.querySelector('.pc').textContent = '$' + r.p.toFixed(2);
        el.querySelector('.stc').innerHTML = r.act ? '<span class="pill ok"><i></i>Active</span>' : '<span class="pill"><i></i>Draft</span>';
      };
      const stats = (anim) => {
        const c = counts();
        chips.forEach((b) => (b.querySelector('b').textContent = c[b.dataset.f]));
        const val = data.reduce((s, r) => s + r.p * r.q, 0);
        const units = data.reduce((s, r) => s + r.q, 0);
        const set = (sel, t) => {
          const el = $(sel);
          if (el.textContent !== t) {
            el.textContent = t;
            if (anim) bump(el);
          }
        };
        set('.kv', '$' + val.toLocaleString('en-US'));
        set('.ku', units.toLocaleString('en-US'));
        set('.kl', String(c.low + c.out));
        $('.ftc').textContent = `Showing ${data.filter(match).length} of ${data.length} products`;
      };
      const apply = () => {
        chips.forEach((b) => {
          b.classList.toggle('on', b.dataset.f === filter);
          b.setAttribute('aria-selected', String(b.dataset.f === filter));
        });
        rows.forEach((el, i) => el.classList.toggle('gone', !match(data[i])));
        stats(false);
      };
      data.forEach((_, i) => fill(i));
      chips.forEach((b) =>
        b.addEventListener('click', () => {
          filter = b.dataset.f;
          apply();
        })
      );
      // inline quick edit: the cell becomes a number input; Enter or blur saves, Escape cancels
      const edit = (i, field) => {
        const row = rows[i];
        const cell = row.querySelector(field === 'q' ? '.iv' : '.pc');
        if (cell.tagName === 'INPUT') return cell;
        const input = document.createElement('input');
        input.className = 'ed';
        input.type = 'number';
        input.min = '0';
        input.value = data[i][field];
        input.setAttribute('aria-label', field === 'q' ? 'Inventory' : 'Price');
        cell.replaceWith(input);
        input.focus();
        input.select();
        let done = false;
        const commit = (save) => {
          if (done) return;
          done = true;
          if (save && input.value !== '') data[i][field] = Math.max(0, field === 'q' ? Math.round(+input.value) : Math.round(+input.value * 100) / 100);
          const btn = document.createElement('button');
          btn.type = 'button';
          btn.className = field === 'q' ? 'iv' : 'pc';
          btn.setAttribute('aria-label', field === 'q' ? 'Edit inventory' : 'Edit price');
          btn.addEventListener('click', () => edit(i, field));
          input.replaceWith(btn);
          fill(i);
          if (save) {
            const tr = row.querySelector('.tr');
            tr.classList.add('flash');
            void tr.offsetWidth;
            tr.classList.remove('flash');
            stats(true);
            setTimeout(() => {
              if (!match(data[i])) apply();
            }, 1100);
          }
        };
        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') commit(true);
          if (e.key === 'Escape') commit(false);
        });
        input.addEventListener('blur', () => commit(true));
        return input;
      };
      rows.forEach((el, i) => {
        el.querySelector('.iv').onclick = () => edit(i, 'q');
        el.querySelector('.pc').onclick = () => edit(i, 'p');
        el.querySelector('.ebtn').onclick = () => edit(i, 'q');
      });
      apply();

      // Autoplay: filter to low stock, restock one product inline, go back to all.
      const type = async (input, text) => {
        input.classList.add('is-auto');
        input.value = '';
        for (const ch of text) {
          if (!idle()) return false;
          input.value += ch;
          await wait(110);
        }
        return true;
      };
      const seq = async () => {
        if (!(await tap(chips[3]))) return;
        await wait(900);
        const cell = rows[1].querySelector('.iv');
        if (!(await tap(cell, () => edit(1, 'q')))) return;
        const inp = rows[1].querySelector('.ed');
        await wait(300);
        if (!inp || !(await type(inp, '60'))) return;
        await wait(500);
        if (!idle()) return;
        inp.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
        await wait(2400);
        if (!(await tap(chips[0]))) return;
        await wait(2400);
        data[1].q = 8;
        fill(1);
        stats(true);
      };
      cur.style.transform = 'translate(800px,300px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || root.querySelector('.ed')) {
            await wait(400);
            continue;
          }
          if (filter !== 'all') {
            filter = 'all';
            apply();
          }
          await seq();
          await wait(1200);
        }
      })();
    },
    prompt: `Build a store admin Products screen, full viewport: a 224px white sidebar (brand with an Admin pill, nav items 40px tall with icons and a count pill on Orders, the active Products item on a soft blue fill, the signed in owner at the bottom) and a main column on a pale surface. Phone: sidebar hides, the table keeps only product, inventory and the edit button.

Main column, top to bottom: page title "Products" with a muted "updated 3 minutes ago" line and Export and Add product buttons; three KPI cards (Inventory value, Units in stock, Needs restocking, all computed from the rows); then one card that fills the remaining height and holds a filter bar, the table header, a scrolling table body and a footer. Filter bar: pill chips with live counts (All, Active, Draft, Low stock, Out of stock; the active chip is solid ink) and a search field. Table columns: checkbox, product (40px drawn product tile and name), SKU in a monospace, inventory, price, status, a quick edit button. Inventory is a status pill: green "124 in stock", amber "8 left" under a threshold of 10, red "Out of stock". Rows are 58px with 1px hairlines, no heavy borders.

Behavior: choosing a filter collapses non matching rows (wrap each row in a grid and animate grid-template-rows 1fr to 0fr plus opacity, 420ms) and updates the footer "Showing N of M". Clicking the inventory pill or the price (or the pencil) turns that cell into an inline number input with an accent ring; Enter or blur saves, Escape cancels. On save the pill recolours, the row flashes soft blue and fades, the KPI numbers and chip counts update with a small pop, and when the row no longer matches the active filter it collapses after about a second.

Accessibility: chips are a tablist with aria-selected, cells are real buttons, inputs have aria-labels, focus-visible rings, prefers-reduced-motion removes the flash and pops. Plain HTML, CSS and JS, no libraries; React-friendly structure (AdminSidebar, ProductsPage, KpiRow, FilterChips, ProductTable, ProductRow, InlineNumberCell).`,
  });

  // ---------------------------------------------------------------- 8. POS register
  const psKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '00', '0', 'del'];
  ML.add({
    id: 'app-commerce-pos',
    cat: 'app-commerce',
    title: 'POS register',
    sub: 'Ticket builds, cash keypad, change due',
    html: `
<div class="app">
  ${SYMS('ps')}
  <header class="pt">
    <span class="mk">${I(P.store, 16)}</span>
    <div class="pn"><b>Corvid Coffee Downtown</b><small>Register 2</small></div>
    <span class="pill ok"><i></i>Open</span>
    <span class="ck">Wed 14 Oct, 10:42 AM</span>
    <span class="cs"><span class="av">IC</span>Isabel Cruz</span>
  </header>
  <div class="pm">
    <section class="items">
      <div class="cats" role="tablist" aria-label="Categories">
        <button type="button" class="cat on" data-c="all">All</button><button type="button" class="cat" data-c="beans">Beans</button><button type="button" class="cat" data-c="gear">Gear</button><button type="button" class="cat" data-c="drinks">Drinks</button>
      </div>
      <div class="ig"></div>
    </section>
    <aside class="tk" aria-label="Ticket">
      <header class="th"><div><h2>Ticket <span class="tn">#1042</span></h2><small>Walk-in customer</small></div><button type="button" class="ghost clr">Clear</button></header>
      <div class="qa"><button type="button" class="ghost">${I(P.user, 15)}Customer</button><button type="button" class="ghost">${I(P.tag, 15)}Discount</button><button type="button" class="ghost">${I(P.edit, 15)}Note</button></div>
      <ul class="tl"></ul>
      <div class="ttl">
        <p class="rw"><span>Subtotal</span><b class="st">$0.00</b></p>
        <p class="rw"><span>Tax (8%)</span><b class="tx">$0.00</b></p>
        <p class="rw tot"><span>Total</span><b class="tt">$0.00</b></p>
      </div>
      <button type="button" class="cta chg">${I(P.card, 17)}<span class="cl">Charge $0.00</span></button>
      <div class="sheet" aria-label="Tender">
        <header class="sh1"><button type="button" class="ib sx" aria-label="Back to ticket">${I(P.back, 19)}</button><h2>Tender</h2></header>
        <div class="due"><p class="k">Total due</p><p class="dv">$0.00</p></div>
        <div class="seg" role="tablist"><span class="sgi"></span><button type="button" class="sg on" data-m="cash">${I(P.cash, 16)}Cash</button><button type="button" class="sg" data-m="card">${I(P.card, 16)}Card</button></div>
        <div class="vw on" data-v="cash">
          <div class="tend"><span class="k">Tendered</span><b class="tv">$0.00</b></div>
          <div class="qk"><button type="button" data-q="exact">Exact</button><button type="button" data-q="5000">$50</button><button type="button" data-q="10000">$100</button></div>
          <div class="kpd">${psKeys.map((k) => `<button type="button" data-k="${k}"${k === 'del' ? ' aria-label="Delete"' : ''}>${k === 'del' ? I(P.del, 20) : k}</button>`).join('')}</div>
          <p class="chd"><span>Change due</span><b class="cv">$0.00</b></p>
        </div>
        <div class="vw" data-v="card">
          <div class="rdr"><span class="rdi">${I(P.card, 34)}</span><b>Tap, insert or swipe</b><small>Waiting for the card reader</small><i class="rb shim"></i></div>
        </div>
        <button type="button" class="cta stk fin" disabled><span class="lbl">Complete sale</span><span class="busy">Processing</span><span class="done">${I(P.check, 17, 2.6)}Paid</span></button>
        <div class="paid">
          <span class="okc"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg></span>
          <h3>Payment received</h3><p class="pcl"></p><p class="pcs">Receipt sent to the customer display</p>
        </div>
      </div>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pt{display:flex;flex:none;align-items:center;gap:12px;height:60px;padding:0 20px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .pn{display:flex;flex-direction:column;line-height:1.2}
.d .pn b{font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .pn small{font-size:12px;color:var(--ml-muted)}
.d .ck{margin-left:auto;font-size:13px;color:var(--ml-muted)}
.d .cs{display:flex;align-items:center;gap:9px;font-size:13.5px;font-weight:600}
.d .av{display:grid;flex:none;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:650}
.d .pm{display:grid;flex:1;grid-template-columns:minmax(0,1fr) 372px;min-height:0;background:var(--ml-surface)}
.d .items{display:flex;flex-direction:column;gap:14px;min-width:0;min-height:0;padding:18px 20px 20px}
.d .cats{display:flex;flex:none;gap:8px}
.d .cat{height:40px;padding:0 20px;border:0;border-radius:99px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:14px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .25s ease,color .25s ease,transform 90ms ease-out}
.d .cat.on{background:var(--ml-ink);color:#fff;box-shadow:none}
.d .cat:focus-visible,.d .it:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .ig{display:grid;flex:1;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(3,minmax(0,1fr));gap:12px;min-height:0}
.d .it{display:flex;flex-direction:column;gap:8px;min-width:0;min-height:0;padding:8px 8px 12px;border:0;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);text-align:left;cursor:pointer;transition:transform 90ms ease-out,box-shadow .2s ease}
.d .it:hover{box-shadow:inset 0 0 0 1.5px var(--ml-accent-line),var(--ml-shadow)}
.d .it:active,.d .it.press{transform:scale(.96)}
.d .it .tile{flex:1;min-height:0;border-radius:11px}
.d .it b{padding:0 4px;overflow:hidden;font-size:13px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .it em{padding:0 4px;font-style:normal;font-size:13px;color:var(--ml-muted)}
.d .it.in{animation:cm-in 460ms var(--ml-spring) both;animation-delay:calc(var(--n,0) * 35ms)}
.d .tk{position:relative;display:flex;flex-direction:column;min-width:0;min-height:0;padding:18px 20px 20px;overflow:hidden;background:var(--ml-bg);border-left:1px solid var(--ml-line)}
.d .th{display:flex;flex:none;align-items:center;justify-content:space-between}
.d .th h2{font-size:18px;font-weight:650;letter-spacing:-.02em}
.d .th small{font-size:12.5px;color:var(--ml-muted)}
.d .th .ghost{height:36px;font-size:13px}
.d .qa{display:grid;flex:none;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:12px}
.d .qa .ghost{height:36px;padding:0 8px;font-size:12.5px}
.d .tl{flex:1;min-height:0;margin:10px 0;overflow-y:auto;list-style:none;scrollbar-width:thin}
.d .ln{display:grid;grid-template-rows:1fr;transition:grid-template-rows .4s var(--ml-ease),opacity .3s ease}
.d .ln.gone{grid-template-rows:0fr;opacity:0}
.d .ln > div{display:flex;align-items:center;gap:12px;min-height:0;overflow:hidden;border-bottom:1px solid var(--ml-line)}
.d .ln.new{animation:cm-in 420ms var(--ml-spring) both}
.d .lq{display:grid;flex:none;place-items:center;min-width:28px;height:28px;margin:11px 0;border-radius:8px;background:var(--ml-surface);font-size:12.5px;font-weight:650}
.d .lq.bump{animation:cm-pop 420ms var(--ml-bounce)}
.d .lt{display:flex;flex:1;flex-direction:column;min-width:0}
.d .lt b{overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .lt small{font-size:12px;color:var(--ml-muted)}
.d .lp{font-size:14px;font-weight:600}
.d .lx{display:grid;place-items:center;width:26px;height:26px;border:0;border-radius:8px;background:none;color:var(--ml-muted);cursor:pointer}
.d .lx:hover{background:var(--ml-surface);color:#D70015}
.d .ttl{flex:none;padding-top:8px;border-top:1px solid var(--ml-line)}
.d .rw{display:flex;justify-content:space-between;padding:4px 0;font-size:13.5px;color:var(--ml-ink-2)}
.d .rw b{font-weight:600;color:var(--ml-ink)}
.d .tot{margin-top:4px;padding-top:10px;border-top:1px solid var(--ml-line);font-size:15px;font-weight:600;color:var(--ml-ink)}
.d .tot b{font-size:26px;font-weight:650;letter-spacing:-.03em}
.d .chg{flex:none;width:100%;height:54px;margin-top:12px;font-size:16px}
.d .sheet{position:absolute;inset:0;z-index:5;display:flex;flex-direction:column;gap:10px;padding:14px 20px 18px;background:var(--ml-bg);transform:translateY(102%);transition:transform .6s var(--ml-spring)}
.d .sheet.open{transform:none}
.d .sh1{display:flex;flex:none;align-items:center;gap:8px;height:40px}
.d .sh1 h2{font-size:18px;font-weight:650;letter-spacing:-.02em}
.d .due{flex:none;text-align:center}
.d .k{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .dv{font-size:38px;line-height:1.1;font-weight:650;letter-spacing:-.04em}
.d .seg{position:relative;display:grid;flex:none;grid-template-columns:1fr 1fr;padding:4px;border-radius:12px;background:var(--ml-surface)}
.d .sgi{position:absolute;left:4px;top:4px;bottom:4px;width:calc(50% - 4px);border-radius:9px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .seg.card .sgi{transform:translateX(100%)}
.d .sg{position:relative;display:flex;align-items:center;justify-content:center;gap:8px;height:36px;border:0;background:none;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .25s ease}
.d .sg.on{color:var(--ml-ink)}
.d .vw{display:none;flex:1;flex-direction:column;gap:10px;min-height:0}
.d .vw.on{display:flex;animation:cm-in 420ms var(--ml-spring) both}
.d .tend{display:flex;flex:none;align-items:baseline;justify-content:space-between;padding:10px 14px;border-radius:12px;background:var(--ml-surface)}
.d .tv{font-size:24px;font-weight:650;letter-spacing:-.03em}
.d .qk{display:grid;flex:none;grid-template-columns:repeat(3,1fr);gap:8px}
.d .qk button{height:38px;border:0;border-radius:10px;background:var(--ml-accent-soft);font-size:13.5px;font-weight:600;color:var(--ml-accent-ink);cursor:pointer;transition:transform 90ms ease-out}
.d .kpd{display:grid;flex:1;grid-template-columns:repeat(3,1fr);grid-auto-rows:minmax(0,1fr);gap:8px;min-height:0}
.d .kpd button{display:grid;place-items:center;min-height:38px;border:0;border-radius:12px;background:var(--ml-surface);font-size:19px;font-weight:600;cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease}
.d .kpd button:hover,.d .qk button:hover{background:var(--ml-bar-2)}
.d .kpd button:active,.d .qk button:active,.d .kpd button.press,.d .qk button.press{transform:scale(.94)}
.d .chd{display:flex;flex:none;align-items:baseline;justify-content:space-between;padding:2px 4px;font-size:14px;color:var(--ml-ink-2)}
.d .chd b{font-size:22px;font-weight:650;letter-spacing:-.02em;color:var(--ml-muted);transition:color .3s ease}
.d .chd b.ok{color:#12893C}
.d .chd b.bump{animation:cm-pop 420ms var(--ml-bounce)}
.d .rdr{display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;gap:8px;border-radius:16px;background:var(--ml-surface);text-align:center}
.d .rdi{display:grid;place-items:center;width:72px;height:72px;margin-bottom:6px;border-radius:20px;background:var(--ml-bg);color:var(--ml-accent);box-shadow:var(--ml-shadow)}
.d .rdr b{font-size:16px;font-weight:650}
.d .rdr small{font-size:13px;color:var(--ml-muted)}
.d .rb{display:block;width:140px;height:6px;margin-top:10px;border-radius:99px}
.d .fin{flex:none;width:100%}
.d .paid{position:absolute;inset:0;z-index:2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:24px;background:var(--ml-bg);text-align:center;opacity:0;pointer-events:none;transition:opacity .4s ease}
.d .sheet.paidon .paid{opacity:1;pointer-events:auto}
.d .paid h3{margin-top:12px;font-size:22px;font-weight:650;letter-spacing:-.03em}
.d .pcl{font-size:30px;font-weight:650;letter-spacing:-.03em}
.d .pcs{font-size:13px;color:var(--ml-muted)}
.d .paid .okc path{stroke-dasharray:1;stroke-dashoffset:1}
.d .sheet.paidon .okc path{animation:cm-draw 650ms var(--ml-ease) 250ms forwards}
.d .sheet.paidon .okc{animation:cm-pop 520ms var(--ml-bounce)}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .pt .ck,.d .pt .cs{display:none}
  .d .pm{display:flex;flex-direction:column;overflow-y:auto}
  .d .items{flex:none;padding:14px}
  .d .ig{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:none;grid-auto-rows:150px}
  .d .tk{flex:none;min-height:700px;border-left:0;border-top:1px solid var(--ml-line)}
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
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn, ms = 850) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.5, 0.55);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? ms : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };

      // [name, cents, art, colour class, tile class, category]
      const menu = [
        ['Ethiopia Guji 250 g', 1900, 'bag', 'v1', 't3', 'beans'],
        ['Colombia Huila 250 g', 1800, 'bag', 'v3', 't3', 'beans'],
        ['Kenya Kirinyaga 250 g', 2100, 'bag', 'v4', 't4', 'beans'],
        ['Sumatra 500 g', 3200, 'bag', 'v2', 't3', 'beans'],
        ['Corvid Mug 12 oz', 1800, 'mug', '', 't2', 'gear'],
        ['Pour-over Dripper', 3800, 'dripper', 'v1', 't3', 'gear'],
        ['Gooseneck Kettle', 6400, 'flask', 'v1', 't4', 'gear'],
        ['Hand Grinder', 7900, 'flask', 'v4', 't2', 'gear'],
        ['Paper Filters 100 pk', 900, 'jar', '', 't2', 'gear'],
        ['Flat White', 450, 'mug', 'v3', 't3', 'drinks'],
        ['Cold Brew', 500, 'flask', 'v3', 't4', 'drinks'],
        ['Oat Latte', 525, 'mug', 'v4', 't2', 'drinks'],
      ];
      const money = (c) => '$' + (c / 100).toFixed(2);
      const grid = $('.ig');
      const list = $('.tl');
      const sheet = $('.sheet');
      let cat = 'all';
      let lines = [];
      let ticketNo = 1042;
      let tend = 0;
      let mode = 'cash';
      let busy = false;
      const showItems = (animate) => {
        grid.innerHTML = menu
          .map((m, i) => ({ m, i }))
          .filter((x) => cat === 'all' || x.m[5] === cat)
          .map(
            (x, n) =>
              `<button type="button" class="it${animate ? ' in' : ''}" style="--n:${n}" data-i="${x.i}"><span class="tile ${x.m[4]} ${x.m[3]}"><svg class="pi" viewBox="0 0 120 120" aria-hidden="true"><use href="#ps-${x.m[2]}"/></svg></span><b>${x.m[0]}</b><em>${money(x.m[1])}</em></button>`
          )
          .join('');
        $$('.cat').forEach((b) => {
          b.classList.toggle('on', b.dataset.c === cat);
          b.setAttribute('aria-selected', String(b.dataset.c === cat));
        });
      };
      const sums = () => {
        const sub = lines.reduce((s, l) => s + menu[l.i][1] * l.q, 0);
        const tax = Math.round(sub * 0.08);
        return [sub, tax, sub + tax];
      };
      const bump = (el) => {
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
      };
      const totals = () => {
        const [sub, tax, total] = sums();
        $('.st').textContent = money(sub);
        $('.tx').textContent = money(tax);
        $('.tt').textContent = money(total);
        $('.cl').textContent = 'Charge ' + money(total);
        $('.chg').disabled = total === 0;
        $('.dv').textContent = money(total);
        tenderUpdate();
      };
      const x = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';
      const addItem = (i, animate) => {
        const found = lines.find((l) => l.i === i);
        if (found) {
          found.q++;
          const li = list.querySelector(`[data-i="${i}"]`);
          li.querySelector('.lq').textContent = found.q;
          li.querySelector('.lp').textContent = money(menu[i][1] * found.q);
          bump(li.querySelector('.lq'));
        } else {
          lines.push({ i, q: 1 });
          const li = document.createElement('li');
          li.className = 'ln' + (animate ? ' new' : '');
          li.dataset.i = i;
          li.innerHTML = `<div><span class="lq">1</span><span class="lt"><b>${menu[i][0]}</b><small>${money(menu[i][1])} each</small></span><span class="lp">${money(menu[i][1])}</span><button type="button" class="lx" aria-label="Remove">${x}</button></div>`;
          li.querySelector('.lx').addEventListener('click', () => {
            li.classList.add('gone');
            lines = lines.filter((l) => l.i !== i);
            totals();
            setTimeout(() => li.remove(), 450);
          });
          list.appendChild(li);
          list.scrollTop = list.scrollHeight;
        }
        totals();
      };
      const defaults = () => {
        lines = [];
        list.innerHTML = '';
        addItem(9, false);
        addItem(11, false);
        addItem(10, false);
      };
      grid.addEventListener('click', (e) => {
        const b = e.target.closest('.it');
        if (b) addItem(+b.dataset.i, true);
      });
      $$('.cat').forEach((b) =>
        b.addEventListener('click', () => {
          cat = b.dataset.c;
          showItems(true);
        })
      );
      $('.clr').addEventListener('click', () => {
        lines = [];
        list.innerHTML = '';
        totals();
      });

      // tender sheet
      const fin = $('.fin');
      function tenderUpdate() {
        const total = sums()[2];
        $('.tv').textContent = money(tend);
        const ch = Math.max(0, tend - total);
        const cv = $('.cv');
        const next = money(ch);
        if (cv.textContent !== next) {
          cv.textContent = next;
          bump(cv);
        }
        cv.classList.toggle('ok', tend >= total && tend > 0);
        fin.disabled = mode === 'cash' && tend < total;
        fin.querySelector('.lbl').textContent = mode === 'cash' ? 'Complete sale' : 'Charge card ' + money(total);
      }
      const setMode = (m) => {
        mode = m;
        $('.seg').classList.toggle('card', m === 'card');
        $$('.sg').forEach((b) => b.classList.toggle('on', b.dataset.m === m));
        $$('.vw').forEach((v) => v.classList.toggle('on', v.dataset.v === m));
        tenderUpdate();
      };
      $$('.sg').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.m)));
      $('.chg').addEventListener('click', () => {
        if (sums()[2] === 0) return;
        tend = 0;
        setMode('cash');
        sheet.classList.remove('paidon');
        fin.classList.remove('loading', 'ok');
        sheet.classList.add('open');
        tenderUpdate();
      });
      $('.sx').addEventListener('click', () => !busy && sheet.classList.remove('open'));
      $$('[data-k]').forEach((b) =>
        b.addEventListener('click', () => {
          const k = b.dataset.k;
          if (k === 'del') tend = Math.floor(tend / 10);
          else if (k === '00') tend = Math.min(999999, tend * 100);
          else tend = Math.min(999999, tend * 10 + +k);
          tenderUpdate();
        })
      );
      $$('[data-q]').forEach((b) =>
        b.addEventListener('click', () => {
          tend = b.dataset.q === 'exact' ? sums()[2] : +b.dataset.q;
          tenderUpdate();
        })
      );
      fin.addEventListener('click', () => {
        if (busy || fin.disabled) return;
        busy = true;
        const total = sums()[2];
        fin.classList.add('loading');
        setTimeout(() => {
          fin.classList.replace('loading', 'ok');
          $('.pcl').textContent = mode === 'cash' ? 'Change due ' + money(tend - total) : 'Card approved ' + money(total);
          setTimeout(() => {
            sheet.classList.add('paidon');
            setTimeout(() => {
              sheet.classList.remove('open');
              ticketNo++;
              $('.tn').textContent = '#' + ticketNo;
              defaults();
              busy = false;
              setTimeout(() => sheet.classList.remove('paidon'), 700);
            }, 2600);
          }, 500);
        }, mode === 'cash' ? 800 : 1400);
      });
      showItems(false);
      defaults();

      // Autoplay: browse two tabs, add items, charge, key in $100 cash, complete the sale.
      const item = (i) => grid.querySelector(`[data-i="${i}"]`);
      const key = (k) => root.querySelector(`[data-k="${k}"]`);
      const seq = async () => {
        if (!(await tap($('[data-c="beans"]')))) return;
        await wait(700);
        if (!(await tap(item(0), null, 700))) return;
        await wait(500);
        if (!(await tap($('[data-c="gear"]'), null, 700))) return;
        await wait(700);
        if (!(await tap(item(5), null, 700))) return;
        await wait(800);
        if (!(await tap($('.chg')))) return;
        await wait(1000);
        if (!(await tap(key('1'), null, 700))) return;
        if (!(await tap(key('00'), null, 450))) return;
        if (!(await tap(key('00'), null, 450))) return;
        await wait(500);
        if (!(await tap(fin))) return;
        await wait(5200);
        cat = 'all';
        showItems(true);
      };
      cur.style.transform = 'translate(500px,640px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy || sheet.classList.contains('open')) {
            await wait(400);
            continue;
          }
          if (cat !== 'all') {
            cat = 'all';
            showItems(false);
          }
          if (lines.length !== 3) defaults();
          await seq();
          await wait(1000);
        }
      })();
    },
    prompt: `Build a point of sale register screen for a coffee shop, full viewport, designed for touch (44px+ targets). A 60px top bar (store icon, store name and register number, an Open status pill, date and time, the signed in cashier), then two regions on a pale surface: the item area on the left and a 372px ticket column on the right. Phone: the ticket sits under the items.

Item area: pill category buttons (All, Beans, Gear, Drinks; the active one is solid ink) and a grid of item buttons (4 columns by 3 rows that fill the height). Each item is a white 16px radius card with a drawn product on a soft gradient tile, a name and a price. Tapping an item adds it to the ticket; changing category re-renders the grid with a staggered entrance (opacity 0 to 1, translateY(8px) to 0, 35ms apart).

Ticket column: header (Ticket number, customer, a Clear button), a scrolling list of lines (quantity chip, name with unit price, line total, remove button), then Subtotal, Tax at a fixed rate (round to cents), a large Total (26px, weight 650) and a full width Charge button showing the amount. A new line slides in (opacity and translateY 8px); tapping the same item again increments the quantity chip with a small pop; removing a line collapses it (grid-template-rows 1fr to 0fr, 400ms). Work in integer cents so totals always add up.

Charge slides a tender sheet up over the ticket column (transform: translateY(102%) to 0, spring ~600ms). Inside: Total due in 38px, a Cash / Card segmented control with ONE highlight that slides between the options, and for cash a Tendered display, quick amount buttons (Exact, $50, $100), a 3 by 4 keypad (1-9, 00, 0, backspace; cents entry, so 1, 00, 00 gives $100.00) and a live Change due that turns green and pops when the tender covers the total. Complete sale is disabled until it does. The Card tab shows a reader prompt with a shimmering bar. Completing runs a light sheen across the button (no circular spinner), then a success panel with a drawn check (stroke-dasharray, 650ms) and the change due, then the sheet closes and a fresh ticket starts.

Accessibility: buttons have aria-labels where they only hold an icon, the segmented control is a tablist, focus-visible rings, prefers-reduced-motion removes the entrance staggers. Plain HTML, CSS and JS, no libraries; React-friendly structure (RegisterTopBar, CategoryTabs, ItemGrid, Ticket, TicketLine, TenderSheet, Keypad).`,
  });

  // ---------------------------------------------------------------- 9. wishlist
    ML.add({
    id: 'app-commerce-wishlist',
    cat: 'app-commerce',
    title: 'Wishlist',
    sub: 'Remove collapses the grid, move to cart',
    html: `
<div class="app">
  ${SYMS('wl')}
  ${HDR(P.drop, 'Juniper', ['Skincare', 'Body', 'Sets', 'Gifts'], 'Skincare', 2)}
  <main class="pg">
    <div class="hd">
      <div><h1>Your wishlist</h1><p class="sub2"><b class="cnt">8</b> saved items - updated today</p></div>
      <div class="hb"><button type="button" class="ghost">${I(P.share, 16)}Share list</button><button type="button" class="cta sm addall">${I(P.bag, 16)}Add all to cart</button></div>
    </div>
    <div class="gw" aria-live="polite"></div>
  </main>
  <div class="toast" role="status">${I(P.check, 16, 2.6)}<span class="tm"></span></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .pg{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:24px 28px 28px;overflow-y:auto;scrollbar-width:thin;background:var(--ml-surface)}
.d .hd{display:flex;flex:none;align-items:flex-end;justify-content:space-between;gap:16px}
.d .hd h1{font-size:28px;line-height:1.1;font-weight:650;letter-spacing:-.035em}
.d .sub2{margin-top:5px;font-size:13.5px;color:var(--ml-muted)}
.d .sub2 b{display:inline-block;font-weight:650;color:var(--ml-ink)}
.d .sub2 b.bump{animation:cm-pop 420ms var(--ml-bounce)}
.d .hb{display:flex;gap:10px}
.d .cta.sm{height:42px;padding:0 16px;font-size:13.5px}
.d .gw{position:relative;display:grid;flex:1;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:repeat(2,minmax(250px,1fr));gap:16px;min-height:0}
.d .wc{display:flex;flex-direction:column;gap:6px;min-width:0;min-height:0;padding:10px 10px 14px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);transition:opacity .35s ease,transform .45s var(--ml-ease)}
.d .wc.out{opacity:0;transform:scale(.94)}
.d .wc.in{animation:cm-in 380ms var(--ml-spring) both;animation-delay:calc(var(--n,0) * 25ms)}
.d .wt{position:relative;flex:1;min-height:0;border-radius:12px}
.d .wt .pi{width:70%;height:70%}
.d .wh{position:absolute;right:8px;top:8px;z-index:2;display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:50%;background:rgba(255,255,255,.9);color:var(--ml-accent);box-shadow:var(--ml-shadow);cursor:pointer;transition:transform 90ms ease-out}
.d .wh svg{fill:currentColor}
.d .wh:hover{background:#fff}
.d .wg{position:absolute;left:8px;top:8px;z-index:2;height:22px;padding:0 8px;font-size:11.5px;background:rgba(255,255,255,.9)}
.d .wn{padding:4px 4px 0;overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .wp{display:flex;align-items:baseline;gap:8px;padding:0 4px;font-size:14px;font-weight:650}
.d .wp s{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .ws{padding:0 4px;font-size:12px;color:var(--ml-muted)}
.d .ws.lo{color:#B25E00}
.d .mv{height:38px;margin-top:6px;font-size:13px}
.d .mv.ok{background:rgba(29,185,84,.1);color:#12893C;box-shadow:none}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .pg{padding:16px}
  .d .hd{flex-direction:column;align-items:flex-start}
  .d .hb .ghost{display:none}
  .d .gw{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:none;grid-auto-rows:290px;gap:12px}
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
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.5, 0.55);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };

      // [name, cents, was cents, art, tile, tint style, tag, stock note]
      const items = [
        ['Barrier Serum 30 ml', 3800, 4200, 'bottle', 't3', '', 'Price drop', 'In stock'],
        ['Cloud Cream 50 ml', 3400, 0, 'jar', 't2', '', 'Low stock', 'Only 3 left'],
        ['Daily Mineral SPF 50 ml', 2600, 0, 'bottle', 't4', '--c1:#EEF2F8;--c2:#FF8054', '', 'In stock'],
        ['Gentle Gel Cleanser 150 ml', 2200, 0, 'flask', 't3', '--c1:#EEF2F8;--c2:#FF5D47', '', 'In stock'],
        ['Night Repair Oil 15 ml', 4400, 0, 'bottle', 't2', '--c1:#1F1410;--c2:#3D2016', 'Back in stock', 'In stock'],
        ['Rose Clay Mask 75 ml', 2900, 0, 'jar', 't4', '--c1:#E4EAF3;--c2:#FF8054', '', 'In stock'],
        ['Overnight Lip Balm', 1800, 0, 'jar', 't3', '--c1:#DCE9FF;--c2:#1F1410', '', 'In stock'],
        ['Travel Trio', 3600, 4000, 'bottle', 't2', '--c1:#8C97A8;--c2:#6F7B8F', 'Price drop', 'In stock'],
      ];
      const money = (c) => '$' + (c / 100).toFixed(2);
      const gw = $('.gw');
      const badge = $('.badge');
      const wc = $('.cnt');
      const heart = '<svg viewBox="0 0 24 24" width="17" height="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>';
      const bag = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';
      const bump = (el) => {
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
      };
      let cart = 2;
      const toast = (msg) => {
        $('.tm').textContent = msg;
        const t = $('.toast');
        t.classList.add('on');
        clearTimeout(t._t);
        t._t = setTimeout(() => t.classList.remove('on'), 2200);
      };
      const setCart = (n) => {
        cart = n;
        badge.textContent = n;
        badge.classList.remove('pop');
        void badge.offsetWidth;
        badge.classList.add('pop');
      };
      const count = () => {
        const n = gw.children.length;
        wc.textContent = n;
        bump(wc);
      };
      const build = (animate) => {
        gw.innerHTML = items
          .map(
            (m, i) =>
              `<article class="wc${animate ? ' in' : ''}" style="--n:${i}" data-i="${i}"><div class="wt tile ${m[4]}" style="${m[5]}"><svg class="pi" viewBox="0 0 120 120" aria-hidden="true"><use href="#wl-${m[3]}"/></svg>${m[6] ? `<span class="wg pill blue">${m[6]}</span>` : ''}<button type="button" class="wh" aria-label="Remove from wishlist">${heart}</button></div><p class="wn">${m[0]}</p><p class="wp">${money(m[1])}${m[2] ? `<s>${money(m[2])}</s>` : ''}</p><p class="ws${m[7] !== 'In stock' ? ' lo' : ''}">${m[7]}</p><button type="button" class="ghost mv">${bag}Move to cart</button></article>`
          )
          .join('');
        wc.textContent = items.length;
      };
      // FLIP: remaining cards glide to their new cell after one leaves the grid
      const drop = (card, msg, move) => {
        if (card.classList.contains('out')) return;
        card.classList.add('out');
        toast(msg);
        if (move) setCart(cart + 1);
        setTimeout(() => {
          const rest = [...gw.children].filter((c) => c !== card);
          const before = rest.map((c) => [c.offsetLeft, c.offsetTop]);
          card.remove();
          rest.forEach((c, k) => {
            const dx = before[k][0] - c.offsetLeft;
            const dy = before[k][1] - c.offsetTop;
            if (dx || dy) c.animate([{ transform: `translate(${dx}px,${dy}px)` }, { transform: 'none' }], { duration: 560, easing: 'cubic-bezier(.32,.72,0,1)' });
          });
          count();
        }, 360);
      };
      gw.addEventListener('click', (e) => {
        const card = e.target.closest('.wc');
        if (!card) return;
        if (e.target.closest('.wh')) drop(card, 'Removed from your wishlist', false);
        else if (e.target.closest('.mv')) {
          const b = card.querySelector('.mv');
          b.classList.add('ok');
          b.textContent = 'Moved to cart';
          setTimeout(() => drop(card, 'Moved to your cart', true), 380);
        }
      });
      $('.addall').addEventListener('click', () => {
        const n = gw.children.length;
        if (!n) return;
        [...gw.children].forEach((c, k) => setTimeout(() => c.classList.add('out'), k * 60));
        setTimeout(() => {
          gw.innerHTML = '';
          wc.textContent = '0';
          bump(wc);
          setCart(cart + n);
          toast(`${n} items added to your cart`);
        }, n * 60 + 380);
      });
      build(false);

      // Autoplay: remove one, move one to the cart, then the list is restored.
      const card = (i) => gw.querySelector(`[data-i="${i}"]`);
      const seq = async () => {
        const c1 = card(1);
        if (!c1 || !(await tap(c1.querySelector('.wh')))) return;
        await wait(1500);
        const c0 = card(0);
        if (!c0 || !(await tap(c0.querySelector('.mv')))) return;
        await wait(3000);
        if (!idle()) return;
        build(true);
        setCart(2);
      };
      cur.style.transform = 'translate(760px,520px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (gw.children.length !== items.length) {
            build(true);
            setCart(2);
          }
          await seq();
          await wait(1400);
        }
      })();
    },
    prompt: `Build a store wishlist page, full viewport, under the normal store header (logo, nav, search, wishlist, cart with a count badge). The page is on a pale surface: a heading row (title at 28px weight 650, a line "8 saved items - updated today" whose number is bold, a Share list button and a primary "Add all to cart" button) and a product grid of 4 columns by 2 rows that fills the remaining height (minmax(250px, 1fr) rows). Phone: 2 columns with fixed card heights.

Each card: white, 18px radius, soft shadow; a rounded tile that takes all spare height with a drawn product (inline SVG bottle, jar or flask on a soft gradient, no photos), a filled accent heart button top right (remove), an optional pill top left ("Price drop", "Low stock", "Back in stock"), then the name (one line, ellipsis), the price with a struck through old price when reduced, a stock note (amber when low) and a secondary "Move to cart" button.

Motion: removing a card fades and scales it out (opacity 0, scale .94, ~350ms), removes it from the DOM and then FLIPS the remaining cards into their new cells: record each sibling's offsetLeft and offsetTop before, remove, read after, and animate transform from translate(deltaX, deltaY) to none with element.animate over 560ms and cubic-bezier(.32,.72,0,1) (transform only, the grid itself reflows). The item count pops. "Move to cart" turns green with "Moved to cart", then the card leaves the same way, a toast confirms and the header cart badge pops (scale .6, 1.18, 1). Add all to cart staggers every card out 60ms apart. On load, cards enter with opacity 0 to 1 and translateY(8px) to 0, staggered 45ms.

Accessibility: heart and icon buttons have aria-labels, the grid is an aria-live polite region so removals are announced, the toast is role="status", visible focus rings, prefers-reduced-motion skips the FLIP and the stagger. Plain HTML, CSS and JS, no libraries; React-friendly structure (StoreHeader, WishlistHeader, WishlistGrid, WishlistCard); with React use a keyed list and the FLIP in a layout effect.`,
  });

  // ---------------------------------------------------------------- 10. returns and refunds
  const rtItems = [
    ['Ridge Daypack 24L', 'Slate - qty 1', 8400, 'pack', 't1', 'v1'],
    ['Trail Flask 750 ml', 'Sky - qty 1', 2800, 'flask', 't3', 'v3'],
    ['Camp Mug 12 oz', 'Cloud - qty 1', 1800, 'mug', 't2', ''],
  ];
  const rtReasons = ['Does not fit well', 'Changed my mind', 'Arrived damaged', 'Not as described'];
  const rtBars = (() => {
    let s = '';
    let x = 0;
    [3, 1, 2, 1, 4, 1, 1, 3, 2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 1, 1, 2, 3, 1, 4, 2, 1, 2, 1, 3, 2].forEach((w, i) => {
      if (i % 2 === 0) s += `<rect x="${x}" y="0" width="${w}" height="56"/>`;
      x += w + 1;
    });
    return `<svg class="bc" viewBox="0 0 ${x} 56" preserveAspectRatio="none" aria-hidden="true" fill="#1D1D1F">${s}</svg>`;
  })();
  ML.add({
    id: 'app-commerce-returns',
    cat: 'app-commerce',
    title: 'Returns and refunds',
    sub: 'Pick items, reason, refund, label prints',
    html: `
<div class="app">
  ${SYMS('rt')}
  <header class="tb">
    <button type="button" class="ib" aria-label="Back to orders">${I(P.back, 19)}</button>
    <div class="tt"><h1>Start a return</h1><p>Order FW-5821 - delivered Mon 5 Oct</p></div>
    <span class="pill ok"><i></i>Return window open until Wed 4 Nov</span>
  </header>
  <div class="body">
    <section class="card wz">
      <ol class="rail" style="--k:0">
        <li class="rs on"><i><b>1</b>${I(P.check, 13, 3)}</i>Items</li>
        <li class="rs"><i><b>2</b>${I(P.check, 13, 3)}</i>Reason</li>
        <li class="rs"><i><b>3</b>${I(P.check, 13, 3)}</i>Refund</li>
        <li class="rs"><i><b>4</b>${I(P.check, 13, 3)}</i>Label</li>
        <span class="rbar" aria-hidden="true"></span>
      </ol>
      <div class="pans">
        <section class="pn on" aria-label="Select items">
          <h2>What are you sending back?</h2><p class="pd">Select every item in this return.</p>
          <div class="ris">
            ${rtItems.map((r, i) => `<label class="ri${i === 0 ? ' on' : ''}"><input type="checkbox" data-i="${i}"${i === 0 ? ' checked' : ''}><span class="cb">${I(P.check, 13, 3)}</span><span class="tile ${r[4]} ${r[5]}">${ART('rt', r[3])}</span><span class="rt"><b>${r[0]}</b><small>${r[1]}</small></span><em>$${(r[2] / 100).toFixed(2)}</em></label>`).join('')}
          </div>
          <div class="how"><div>${I(P.truck, 20)}<b>Free return shipping</b><small>Prepaid label by email</small></div><div>${I(P.card, 20)}<b>Refund in 3 to 5 days</b><small>After we scan it in</small></div><div>${I(P.shield, 20)}<b>30 day window</b><small>Open until Wed 4 Nov</small></div></div>
        </section>
        <section class="pn" aria-label="Reason">
          <h2>Why is it coming back?</h2><p class="pd">This helps us improve sizing and quality.</p>
          <div class="rss">
            ${rtReasons.map((r) => `<label class="ro"><input type="radio" name="rt-r"><span class="rd"></span><b>${r}</b></label>`).join('')}
          </div>
          <label class="fld" for="rt-note">Add a note (optional)</label>
          <div class="field nt"><textarea id="rt-note" rows="2" placeholder="Tell us a little more"></textarea></div>
        </section>
        <section class="pn" aria-label="Refund method">
          <h2>How would you like your refund?</h2><p class="pd">You can change this until the label is created.</p>
          <div class="rss">
            <label class="ro on"><input type="radio" name="rt-m" value="card" checked><span class="rd"></span><span class="rt"><b>Original card</b><small>Visa ending 4242 - 3 to 5 business days</small></span><em class="ma">$0.00</em></label>
            <label class="ro"><input type="radio" name="rt-m" value="credit"><span class="rd"></span><span class="rt"><b>Store credit</b><small>Instant, includes a $5.00 bonus</small></span><em class="mb">$0.00</em></label>
          </div>
        </section>
        <section class="pn" aria-label="Return label">
          <div class="gen"><div class="shim g1"></div><div class="shim g2"></div><div class="shim g3"></div><p>Creating your return label</p></div>
          <div class="lab">
            <div class="lh"><span class="okc"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg></span><div><h2>Your label is ready</h2><p class="pd">Drop off by Wed 4 Nov at any Ridgeline location.</p></div></div>
            <div class="lc2"><div class="lt2"><p class="k">Return label</p><b>RTN-30417</b><small>Fernway returns, Reno warehouse</small></div>${rtBars}<p class="lb">RTN 30417 0044</p></div>
            <div class="la"><button type="button" class="cta pr">${I(P.printer, 16)}Print label</button><button type="button" class="ghost">${I(P.mail, 16)}Email it to me</button></div>
          </div>
        </section>
      </div>
      <div class="wnav"><button type="button" class="ghost bk" disabled>${I(P.back, 16)}Back</button><button type="button" class="cta nx"><span class="nl2">Continue</span>${I(P.arrow, 16)}</button></div>
    </section>
    <aside class="card sm">
      <h2>Refund summary</h2>
      <ul class="sl">
        ${rtItems.map((r, i) => `<li class="sli${i === 0 ? '' : ' off'}" data-i="${i}"><div><div class="sx"><span class="tile ${r[4]} ${r[5]}">${ART('rt', r[3])}</span><p><b>${r[0]}</b><small>${r[1]}</small></p><em>$${(r[2] / 100).toFixed(2)}</em></div></div></li>`).join('')}
      </ul>
      <p class="pol">${I(P.shield, 18)}<span>Free returns within 30 days. Items must be unused with tags attached.</span></p>
      <ol class="nxt"><li><i>1</i><span>Print your label</span></li><li><i>2</i><span>Drop it off by Wed 4 Nov</span></li><li><i>3</i><span>Refund issued 3 to 5 days after the scan</span></li></ol>
      <div class="tots">
        <p class="rw"><span>Items</span><b class="ri2">$0.00</b></p>
        <p class="rw"><span>Tax refunded (8%)</span><b class="rtx">$0.00</b></p>
        <p class="rw"><span>Restocking fee</span><b class="gr">Free</b></p>
        <div class="bnw"><div><p class="rw"><span>Store credit bonus</span><b class="gr">+$5.00</b></p></div></div>
        <p class="rw tot"><span>Refund total</span><b class="rtt">$0.00</b></p>
      </div>
      <p class="to"><span class="tdot"></span><span class="tos"></span></p>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .tb{display:flex;flex:none;align-items:center;gap:12px;height:68px;padding:0 24px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tt h1{font-size:19px;font-weight:650;letter-spacing:-.02em}
.d .tt p{font-size:12.5px;color:var(--ml-muted)}
.d .tb .pill{margin-left:auto}
.d .body{display:grid;flex:1;grid-template-columns:minmax(0,1.5fr) minmax(300px,1fr);grid-template-rows:minmax(0,1fr);gap:16px;min-height:0;padding:16px 24px 24px;background:var(--ml-surface)}
.d .wz{display:flex;flex-direction:column;min-width:0;min-height:0;padding:0}
.d .rail{position:relative;display:grid;flex:none;grid-template-columns:repeat(4,minmax(0,1fr));list-style:none;border-bottom:1px solid var(--ml-line)}
.d .rs{display:flex;align-items:center;justify-content:center;gap:9px;padding:17px 0;font-size:13.5px;font-weight:600;color:var(--ml-muted);transition:color .25s ease}
.d .rs i{display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-style:normal;font-size:11.5px;transition:background-color .3s ease,color .3s ease}
.d .rs i svg{display:none}
.d .rs.on{color:var(--ml-ink)}
.d .rs.on i{background:var(--ml-accent);color:#fff;box-shadow:none}
.d .rs.done{color:var(--ml-ink-2)}
.d .rs.done i{background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:none}
.d .rs.done i b{display:none}
.d .rs.done i svg{display:block}
.d .rbar{position:absolute;left:0;bottom:-1px;width:25%;height:2px;border-radius:2px;background:var(--ml-accent);transform:translateX(calc(var(--k) * 100%));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .pans{display:flex;flex:1;flex-direction:column;min-height:0;padding:24px 28px 8px;overflow-y:auto;scrollbar-width:thin}
.d .pn{display:none;flex:1;flex-direction:column}
.d .pn.on{display:flex;animation:cm-in 520ms var(--ml-spring) both}
.d .pn h2{font-size:22px;font-weight:650;letter-spacing:-.03em}
.d .pd{margin-top:5px;font-size:14px;color:var(--ml-muted)}
.d .how{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:auto;padding-top:20px}
.d .how div{display:flex;flex-direction:column;gap:3px;padding:14px;border-radius:14px;background:var(--ml-surface)}
.d .how svg{margin-bottom:6px;color:var(--ml-accent)}
.d .how b{font-size:13.5px;font-weight:600}
.d .how small{font-size:12.5px;color:var(--ml-muted)}
.d .pol{display:flex;gap:12px;padding:14px;border-radius:14px;background:var(--ml-surface);font-size:13px;line-height:1.45;color:var(--ml-ink-2)}
.d .pol svg{flex:none;color:var(--ml-accent)}
.d .nxt{display:flex;flex-direction:column;gap:12px;margin:20px 0 0;padding:0 4px;list-style:none}
.d .nxt li{display:flex;align-items:center;gap:12px;font-size:13px;color:var(--ml-ink-2)}
.d .nxt i{display:grid;flex:none;place-items:center;width:24px;height:24px;border-radius:50%;background:var(--ml-accent-soft);font-style:normal;font-size:11.5px;font-weight:650;color:var(--ml-accent-ink)}
.d .ris,.d .rss{display:flex;flex-direction:column;gap:10px;margin-top:20px}
.d .ri{position:relative;display:flex;align-items:center;gap:14px;padding:12px 16px 12px 14px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);cursor:pointer;transition:background-color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .ri input,.d .ro input{position:absolute;opacity:0;pointer-events:none}
.d .cb{display:grid;flex:none;place-items:center;width:20px;height:20px;border-radius:6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .2s ease,box-shadow .2s ease}
.d .cb svg{opacity:0;transform:scale(.6);transition:opacity .2s ease,transform .35s var(--ml-bounce)}
.d .ri.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .ri.on .cb{background:var(--ml-accent);box-shadow:none}
.d .ri.on .cb svg{opacity:1;transform:none}
.d .ri .tile{flex:none;width:58px;height:58px;border-radius:12px}
.d .rt{display:flex;flex:1;flex-direction:column;min-width:0}
.d .rt b{font-size:14.5px;font-weight:600}
.d .rt small{font-size:12.5px;color:var(--ml-muted)}
.d .ri em,.d .ro em{font-style:normal;font-size:15px;font-weight:650}
.d .ro{position:relative;display:flex;align-items:center;gap:14px;padding:16px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);cursor:pointer;transition:background-color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .ro > b{font-size:14.5px;font-weight:600}
.d .rd{display:grid;place-items:center;flex:none;width:20px;height:20px;border-radius:50%;box-shadow:inset 0 0 0 1.5px var(--ml-bar);transition:background-color .2s ease}
.d .rd::after{content:"";width:8px;height:8px;border-radius:50%;background:#fff;transform:scale(0);transition:transform .3s var(--ml-bounce)}
.d .ro.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .ro.on .rd{background:var(--ml-accent)}
.d .ro.on .rd::after{transform:none}
.d .ro input:focus-visible ~ .rd,.d .ri input:focus-visible ~ .cb{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .nt{height:auto;align-items:stretch;padding:8px 13px}
.d .nt textarea{flex:1;min-width:0;border:0;outline:0;resize:none;background:none;font:inherit;font-size:14px;color:var(--ml-ink)}
.d .gen{display:none;flex-direction:column;gap:12px;margin-top:6px}
.d .gen .g1{height:28px;width:60%;border-radius:8px}
.d .gen .g2{height:150px;border-radius:16px}
.d .gen .g3{height:44px;border-radius:12px}
.d .gen p{font-size:13.5px;color:var(--ml-muted)}
.d .lab{display:none;flex-direction:column;gap:18px}
.d .app.making .gen{display:flex}
.d .app.ready .lab{display:flex;animation:cm-in 560ms var(--ml-spring) both}
.d .lh{display:flex;align-items:center;gap:16px}
.d .lh .okc{width:52px;height:52px}
.d .lh .okc path{stroke-dasharray:1;stroke-dashoffset:1}
.d .app.ready .lh .okc path{animation:cm-draw 650ms var(--ml-ease) 250ms forwards}
.d .lc2{display:flex;flex-direction:column;gap:14px;padding:20px 22px;border-radius:16px;background:var(--ml-surface);box-shadow:inset 0 0 0 1.5px var(--ml-line)}
.d .lt2{display:flex;flex-direction:column}
.d .lt2 b{margin-top:3px;font-size:20px;font-weight:650;letter-spacing:-.02em}
.d .lt2 small{font-size:12.5px;color:var(--ml-muted)}
.d .k{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .bc{display:block;width:100%;height:64px;padding:8px 0;border-radius:10px;background:#fff}
.d .lb{font:500 12px/1 var(--ml-mono);letter-spacing:.14em;text-align:center;color:var(--ml-muted)}
.d .la{display:flex;gap:10px}
.d .la .cta,.d .la .ghost{flex:1;height:44px}
.d .wnav{display:flex;flex:none;gap:10px;padding:16px 28px 22px}
.d .wnav .cta{flex:1}
.d .wnav .ghost:disabled{opacity:.4;cursor:default}
.d .sm{display:flex;flex-direction:column;min-width:0;padding:22px 24px}
.d .sm h2{font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .sl{margin:14px 0;list-style:none}
.d .sli{display:grid;grid-template-rows:1fr;transition:grid-template-rows .45s var(--ml-ease),opacity .3s ease}
.d .sli.off{grid-template-rows:0fr;opacity:0}
.d .sli > div{min-height:0;overflow:hidden}
.d .sx{display:flex;align-items:center;gap:14px;padding:8px 0}
.d .sli .tile{flex:none;width:52px;height:52px;border-radius:12px}
.d .sli p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .sli b{font-size:13.5px;font-weight:600}
.d .sli small{font-size:12.5px;color:var(--ml-muted)}
.d .sli em{font-style:normal;font-size:14px;font-weight:600}
.d .tots{margin-top:auto;padding-top:12px;border-top:1px solid var(--ml-line)}
.d .rw{display:flex;justify-content:space-between;padding:5px 0;font-size:13.5px;color:var(--ml-ink-2)}
.d .rw b{font-weight:600;color:var(--ml-ink)}
.d .rw b.gr{color:#12893C}
.d .bnw{display:grid;grid-template-rows:0fr;transition:grid-template-rows .4s var(--ml-ease)}
.d .bnw > div{min-height:0;overflow:hidden}
.d .tot{margin-top:6px;padding-top:12px;border-top:1px solid var(--ml-line);font-size:15px;font-weight:600;color:var(--ml-ink)}
.d .tot b{display:inline-block;font-size:26px;font-weight:650;letter-spacing:-.03em}
.d .tot b.bump{animation:cm-pop 420ms var(--ml-bounce)}
.d .to{display:flex;align-items:center;gap:9px;margin-top:12px;padding:12px 14px;border-radius:12px;background:var(--ml-surface);font-size:13px;color:var(--ml-ink-2)}
.d .tdot{width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .tb{padding:0 14px;gap:8px}
  .d .tb .pill{display:none}
  .d .body{display:flex;flex-direction:column;overflow-y:auto;padding:12px 14px 20px}
  .d .wz,.d .sm{flex:none}
  .d .pans{padding:18px 16px 8px;overflow:visible}
  .d .wnav{padding:12px 16px 18px}
  .d .rs{flex-direction:column;gap:4px;padding:12px 0;font-size:11.5px}
  .d .la{flex-direction:column}
  .d .how{grid-template-columns:minmax(0,1fr)}
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
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const pos = (el, fx = 0.5, fy = 0.5) => {
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        return [(r.left - o.left + r.width * fx) / s, (r.top - o.top + r.height * fy) / s];
      };
      const tap = async (el, fn) => {
        if (!el || !idle()) return false;
        const shown = el.offsetParent !== null;
        cur.classList.toggle('off', !shown);
        if (shown) {
          const [x, y] = pos(el, 0.5, 0.55);
          cur.style.transform = `translate(${x}px,${y}px)`;
        }
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(140);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn ? fn() : el.click();
        return true;
      };
      const money = (el, to, ms = 420) => {
        const from = parseFloat(el.dataset.v || '0');
        el.dataset.v = to;
        const id = (el._id = (el._id || 0) + 1);
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected || el._id !== id) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          const e = 1 - Math.pow(1 - k, 3);
          el.textContent = '$' + (from + (to - from) * e).toFixed(2);
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };

      const prices = [8400, 2800, 1800];
      const app = $('.app');
      const rail = $('.rail');
      const rs = $$('.rs');
      const pns = $$('.pn');
      const sli = $$('.sli');
      const checks = $$('.ri input');
      const nx = $('.nx');
      const bk = $('.bk');
      let step = 0;
      let busy = false;
      let method = 'card';
      const bump = (el) => {
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
      };
      const calc = (first) => {
        const items = checks.reduce((s, c, i) => s + (c.checked ? prices[i] : 0), 0);
        const tax = Math.round(items * 0.08);
        const bonus = method === 'credit' && items ? 500 : 0;
        const total = items + tax + bonus;
        const set = (sel, v) => {
          const el = $(sel);
          if (first) {
            el.textContent = '$' + (v / 100).toFixed(2);
            el.dataset.v = v / 100;
          } else money(el, v / 100);
        };
        set('.ri2', items);
        set('.rtx', tax);
        set('.rtt', total);
        set('.ma', items + tax);
        set('.mb', items + tax + (items ? 500 : 0));
        bump($('.rtt'));
        const bn = $('.bnw');
        bn.style.gridTemplateRows = method === 'credit' ? '1fr' : '0fr';
        $('.tos').textContent = !items ? 'Select an item to see your refund' : method === 'credit' ? 'Store credit, available instantly' : 'To Visa ending 4242 in 3 to 5 business days';
        checks.forEach((c, i) => {
          c.closest('.ri').classList.toggle('on', c.checked);
          sli[i].classList.toggle('off', !c.checked);
        });
        nx.disabled = step === 0 && !items;
      };
      const go = (n) => {
        step = n;
        rail.style.setProperty('--k', n);
        rs.forEach((r, k) => {
          r.classList.toggle('on', k === n);
          r.classList.toggle('done', k < n);
        });
        pns.forEach((p, k) => p.classList.toggle('on', k === n));
        bk.disabled = n === 0 || n === 3;
        $('.nl2').textContent = n === 2 ? 'Create return label' : n === 3 ? 'Done' : 'Continue';
        nx.disabled = n === 0 && !checks.some((c) => c.checked);
        if (n === 3) {
          busy = true;
          app.classList.remove('ready');
          app.classList.add('making');
          nx.disabled = true;
          setTimeout(() => {
            app.classList.remove('making');
            app.classList.add('ready');
            nx.disabled = false;
            busy = false;
          }, 1500);
        } else {
          app.classList.remove('making', 'ready');
        }
      };
      checks.forEach((c) => c.addEventListener('change', () => calc(false)));
      $$('input[name="rt-r"]').forEach((r) =>
        r.addEventListener('change', () => $$('.pn[aria-label="Reason"] .ro').forEach((l) => l.classList.toggle('on', l.contains(r) && r.checked)))
      );
      $$('input[name="rt-m"]').forEach((r) =>
        r.addEventListener('change', () => {
          method = r.value;
          $$('.pn[aria-label="Refund method"] .ro').forEach((l) => l.classList.toggle('on', l.contains(r) && r.checked));
          calc(false);
        })
      );
      nx.addEventListener('click', () => {
        if (busy || nx.disabled) return;
        if (step === 3) return resetAll(true);
        go(step + 1);
      });
      bk.addEventListener('click', () => !busy && step > 0 && go(step - 1));
      function resetAll(animate) {
        checks.forEach((c, i) => (c.checked = i === 0));
        $$('input[name="rt-r"]').forEach((r) => (r.checked = false));
        $$('.pn[aria-label="Reason"] .ro').forEach((l) => l.classList.remove('on'));
        const m = $('input[name="rt-m"][value="card"]');
        m.checked = true;
        method = 'card';
        $$('.pn[aria-label="Refund method"] .ro').forEach((l) => l.classList.toggle('on', l.contains(m)));
        busy = false;
        go(0);
        calc(!animate);
      }
      resetAll(false);

      // Autoplay: add the mug, give a reason, pick store credit, create the label.
      const seq = async () => {
        if (!(await tap($$('.ri')[2]))) return;
        await wait(900);
        if (!(await tap(nx))) return;
        await wait(800);
        if (!(await tap($$('.pn[aria-label="Reason"] .ro')[0]))) return;
        await wait(600);
        if (!(await tap(nx))) return;
        await wait(800);
        if (!(await tap($$('.pn[aria-label="Refund method"] .ro')[1]))) return;
        await wait(1100);
        if (!(await tap(nx))) return;
        await wait(5200);
        if (idle()) resetAll(true);
      };
      cur.style.transform = 'translate(560px,420px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          if (step !== 0) resetAll(true);
          await seq();
          await wait(1200);
        }
      })();
    },
    prompt: `Build a returns and refunds wizard for an order, full viewport on a pale surface. A 68px top bar (back button, "Start a return" with the order number and delivery date, a green pill "Return window open until <date>"), then two cards: the wizard (1.5fr) and a Refund summary (1fr, min 300px). Phone: stacked.

Wizard card: a four step rail (Items, Reason, Refund, Label); the active step has an accent numbered dot, finished steps show a check on a soft blue dot, and ONE 2px accent underline moves between steps with transform: translateX(calc(var(--k) * 100%)) on a spring (~590ms). Panels swap with display none/block and an entrance of opacity 0 to 1 and translateY(8px) to 0. 1) Select items: a checkbox card per order line (checkbox, 58px drawn product tile, name, variant, price); selected cards get a soft blue fill, a 1.5px accent ring and a check that pops in. 2) Reason: radio cards ("Does not fit well", "Changed my mind", "Arrived damaged", "Not as described") and an optional note textarea. 3) Refund method: two radio cards, original card (with timing) and store credit (instant, with a small bonus), each showing its amount. 4) Label: skeleton shimmer blocks for about 1.5s ("Creating your return label"), then a success check that draws itself, a drop-off deadline, a label card with a monospace code and a barcode drawn from SVG rects, and Print / Email buttons. Footer buttons Back and Continue (Continue is disabled until at least one item is selected, and reads "Create return label" on the last form step).

Summary card: the selected items (unselected ones collapse with grid-template-rows 1fr to 0fr and a fade, 450ms), then Items, Tax refunded at a fixed rate, Restocking fee (Free), a Store credit bonus row that expands only when store credit is chosen, and a bold Refund total (26px) that tweens its numbers over ~420ms and pops; a footer line says where the money goes and how fast. Work in integer cents so the numbers always add up.

Accessibility: real checkboxes and radios (visually hidden inputs with visible focus rings on their custom controls), the rail is an ordered list with aria-current on the active step, prefers-reduced-motion removes the shimmer and pops. Plain HTML, CSS and JS, no libraries; React-friendly structure (ReturnHeader, StepRail, ItemPicker, ReasonPicker, RefundMethod, LabelPanel, RefundSummary).`,
  });
})();
