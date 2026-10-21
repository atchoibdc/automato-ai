(() => {
  // Lucide icons (24 viewBox, stroke 2, round caps). File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    send: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    clip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    thumb: '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    wand: '<path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"/><path d="m14 7 3 3"/><path d="M5 6v4"/><path d="M19 14v4"/><path d="M10 2v2"/><path d="M7 8H3"/><path d="M21 16h-4"/><path d="M11 3H9"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>',
    terminal: '<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>',
    db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    cpu: '<rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>',
    code: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    table: '<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/>',
    chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
    bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    folder: '<path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>',
    gear: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
    list: '<line x1="8" x2="21" y1="6" y2="6"/><line x1="8" x2="21" y1="12" y2="12"/><line x1="8" x2="21" y1="18" y2="18"/><line x1="3" x2="3.01" y1="6" y2="6"/><line x1="3" x2="3.01" y1="12" y2="12"/><line x1="3" x2="3.01" y1="18" y2="18"/>',
    pen: '<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
    branch: '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>',
    volume: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>',
    video: '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    dl: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    hist: '<path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>',
    dots: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    layers: '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/>',
    stop: '<rect width="14" height="14" x="5" y="5" rx="2"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    pause: '<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
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
  // Shared styling for the AI screens (strings only). Keyframes carry the ai- prefix.
  const BASE = `
.d button,.d input,.d textarea{font:inherit;color:inherit}
.d button{cursor:pointer}
.d h1{font-size:18px;line-height:1.2;font-weight:650;letter-spacing:-.02em}
.d .brand{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .mark{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .mark.sm{width:26px;height:26px;border-radius:8px;box-shadow:0 1px 2px rgba(255,68,51,.3)}
.d .lbl{padding:0 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .av{flex:none;display:grid;place-items:center;width:32px;height:32px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:11.5px;font-weight:650}
.d .card{border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .cr{display:inline-block;width:2px;height:1.05em;margin-left:2px;vertical-align:-.18em;border-radius:2px;background:var(--ml-accent);animation:ai-caret 1.1s ease-in-out infinite}
.d .shim{background:linear-gradient(100deg,var(--ml-bar-2) 30%,#F7F9FD 50%,var(--ml-bar-2) 70%);background-size:220% 100%;animation:ai-sheen 1.3s linear infinite}
.d .w{animation:ai-word 280ms var(--ml-ease) both}
.d .in{animation:ai-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 55ms)}
.d .pill{display:inline-flex;align-items:center;gap:6px;height:32px;padding:0 11px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .btn{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:36px;padding:0 14px;border:0;border-radius:10px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);font-size:13px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;transition:transform 90ms ease-out,background-color .2s ease}
.d .btn:hover{background:var(--ml-surface)}
.d .btn:active,.d .btn.press{transform:scale(.96)}
.d .btn.pri{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d .btn:focus-visible,.d .pill:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
@keyframes ai-caret{0%,100%{opacity:.25}50%{opacity:1}}
@keyframes ai-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes ai-word{from{opacity:0;transform:translateY(3px)}to{opacity:1;transform:none}}
@keyframes ai-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes ai-draw{from{stroke-dashoffset:1}to{stroke-dashoffset:0}}
@keyframes ai-ping{0%{opacity:.45;transform:scale(1)}80%,100%{opacity:0;transform:scale(2.6)}}`;

  ML.add({
    id: 'app-ai-chat-sources',
    cat: 'app-ai',
    title: 'Chat with sources',
    sub: 'Answer streams in, citations light up',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span>Lumen</div>
    <button class="btn newc" type="button">${I(P.plus, 16)}New chat</button>
    <p class="lbl">Today</p>
    <nav class="hist" aria-label="Chats">
      <button class="hi on" type="button">${I(P.chat, 16)}<span>AI feature pricing</span></button>
      <button class="hi" type="button">${I(P.chat, 16)}<span>Churn by cohort</span></button>
      <button class="hi" type="button">${I(P.chat, 16)}<span>Onboarding emails</span></button>
    </nav>
    <p class="lbl">Earlier</p>
    <nav class="hist" aria-label="Earlier chats">
      <button class="hi" type="button">${I(P.chat, 16)}<span>Support macros draft</span></button>
      <button class="hi" type="button">${I(P.chat, 16)}<span>Q3 board summary</span></button>
    </nav>
    <div class="me"><span class="av">MR</span><p><b>Maya Reyes</b><small>Northgate</small></p></div>
  </aside>
  <main class="chat">
    <header class="hd">
      <div><h1>AI feature pricing</h1><p class="sub">Searching web and 3 connected folders</p></div>
      <span class="model">${I(P.cpu, 15)}Lumen 2${I(P.down, 14)}</span>
    </header>
    <div class="thread" aria-live="polite"></div>
    <form class="comp" novalidate>
      <button type="button" class="ib" aria-label="Attach a file">${I(P.clip, 18)}</button>
      <input type="text" placeholder="Ask anything about your sources" aria-label="Message">
      <span class="scope">${I(P.globe, 14)}Web</span>
      <button type="submit" class="send" aria-label="Send">${I(P.send, 18, 2.4)}</button>
    </form>
  </main>
  <aside class="srcs">
    <div class="sh"><p>Sources</p><em class="cnt">4</em></div>
    <div class="sl"></div>
  </aside>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:grid;grid-template-columns:216px minmax(0,1fr) 296px;height:100%;background:var(--ml-bg)}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 12px 14px;background:var(--ml-surface);border-right:1px solid var(--ml-line)}
.d .side .brand{padding:0 6px 16px}
.d .newc{width:100%;height:40px;margin-bottom:18px;justify-content:flex-start;padding:0 12px;color:var(--ml-accent-ink)}
.d .hist{display:flex;flex-direction:column;gap:2px;margin-bottom:14px}
.d .hi{display:flex;align-items:center;gap:10px;height:36px;padding:0 10px;border:0;border-radius:10px;background:none;font-size:13.5px;font-weight:500;color:var(--ml-ink-2);text-align:left;transition:background-color .2s ease}
.d .hi svg{flex:none;color:var(--ml-muted)}
.d .hi span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.d .hi:hover{background:var(--ml-bar-2)}
.d .hi.on{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink);font-weight:600}
.d .hi.on svg{color:var(--ml-accent)}
.d .me{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 0;border-top:1px solid var(--ml-line)}
.d .me p{display:flex;flex-direction:column;min-width:0}
.d .me b{font-size:13px;font-weight:600}
.d .me small{font-size:12px;color:var(--ml-muted)}
.d .chat{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .hd{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;height:66px;padding:0 24px;border-bottom:1px solid var(--ml-line)}
.d .sub{margin-top:2px;font-size:12.5px;color:var(--ml-muted)}
.d .model{flex:none;white-space:nowrap;display:inline-flex;align-items:center;gap:7px;height:34px;padding:0 11px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .model svg:first-child{color:var(--ml-accent)}
.d .thread{display:flex;flex:1;flex-direction:column;gap:22px;min-height:0;padding:22px 24px 8px;overflow-y:auto;scrollbar-width:none}
.d .thread::-webkit-scrollbar{display:none}
.d .ex{display:flex;flex-direction:column;gap:16px}
.d .u{align-self:flex-end;max-width:84%;padding:11px 15px;border-radius:16px 16px 4px 16px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:14px;line-height:1.5;color:var(--ml-ink)}
.d .a{display:flex;gap:12px}
.d .ab{flex:1;min-width:0}
.d .ans{font-size:14.5px;line-height:1.65;color:var(--ml-ink)}
.d .think{display:flex;flex-direction:column;gap:9px;padding-top:6px}
.d .think p{display:flex;align-items:center;gap:8px;font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .think i{display:block;height:11px;border-radius:6px}
.d .cite{display:inline-grid;place-items:center;min-width:19px;height:19px;margin:0 1px 0 4px;padding:0 4px;border:0;border-radius:6px;background:var(--ml-accent-soft);font-size:11px;font-weight:650;color:var(--ml-accent-ink);vertical-align:1px;transition:background-color .25s ease,color .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .cite.on{background:var(--ml-accent);color:#fff;transform:translateY(-1px) scale(1.12)}
.d .used{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}
.d .used .pill{height:30px;font-size:12px;transition:box-shadow .25s ease,background-color .25s ease}
.d .used .pill b{display:grid;place-items:center;width:18px;height:18px;border-radius:6px;background:var(--ml-accent-soft);font-size:11px;color:var(--ml-accent-ink)}
.d .used .pill.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .acts{display:flex;gap:4px;margin-top:10px;color:var(--ml-muted)}
.d .acts span{display:grid;place-items:center;width:30px;height:30px;border-radius:8px}
.d .acts span:hover{background:var(--ml-surface);color:var(--ml-ink)}
.d .comp{display:flex;flex:none;align-items:center;gap:8px;margin:10px 24px 20px;padding:8px 8px 8px 10px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);transition:box-shadow .25s ease}
.d .comp:focus-within,.d .comp.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .comp input{flex:1;min-width:0;height:40px;border:0;outline:0;background:none;font-size:14.5px}
.d .comp input::placeholder{color:#A1A1A6}
.d .ib{display:grid;place-items:center;width:36px;height:36px;border:0;border-radius:10px;background:none;color:var(--ml-muted)}
.d .ib:hover{background:var(--ml-surface)}
.d .scope{display:inline-flex;align-items:center;gap:6px;height:30px;padding:0 10px;border-radius:999px;background:var(--ml-accent-soft);font-size:12.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .send{display:grid;place-items:center;width:40px;height:40px;border:0;border-radius:12px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.22);transition:transform 90ms ease-out,opacity .2s ease}
.d .send:active,.d .send.press{transform:scale(.92)}
.d .send:disabled{opacity:.4;box-shadow:none;cursor:default}
.d .srcs{display:flex;flex-direction:column;min-height:0;padding:18px 16px 16px;background:var(--ml-surface);border-left:1px solid var(--ml-line)}
.d .sh{display:flex;align-items:center;justify-content:space-between;padding:2px 4px 14px}
.d .sh p{font-size:14px;font-weight:650;letter-spacing:-.01em}
.d .cnt{padding:4px 8px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .sl{position:relative;display:flex;flex:1;flex-direction:column;gap:10px;min-height:0;overflow-y:auto;scrollbar-width:none}
.d .sl::-webkit-scrollbar{display:none}
.d .src{flex:1 0 auto;max-height:200px;padding:13px 14px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),0 1px 2px rgba(35,15,10,.04);transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow .3s ease}
.d .src.on{transform:translateX(-5px);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 10px 24px rgba(255,68,51,.14)}
.d .sr{display:flex;align-items:center;gap:9px}
.d .fav{flex:none;display:grid;place-items:center;width:22px;height:22px;border-radius:7px;background:var(--ml-accent-soft);font-size:11px;font-weight:700;color:var(--ml-accent-ink)}
.d .sr small{flex:1;min-width:0;overflow:hidden;font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .sr b{display:grid;place-items:center;width:20px;height:20px;border-radius:6px;background:var(--ml-surface);font-size:11px;font-weight:650;color:var(--ml-muted);transition:background-color .25s ease,color .25s ease}
.d .src.on .sr b{background:var(--ml-accent);color:#fff}
.d .st{margin-top:9px;font-size:13.5px;line-height:1.3;font-weight:600;letter-spacing:-.005em}
.d .sn{display:-webkit-box;margin-top:6px;overflow:hidden;font-size:12.5px;line-height:1.5;color:var(--ml-ink-2);-webkit-line-clamp:3;-webkit-box-orient:vertical}
.d .src.ph{height:104px}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .srcs,.d .scope{display:none}
  .d .hd{padding:0 16px}
  .d .thread{padding:18px 16px 6px}
  .d .comp{margin:8px 14px 16px}
}
@media (prefers-reduced-motion: reduce){.d .cr{animation:none}}`,
    run: (root) => {
      const POOL = [
        { t: 'AI pricing benchmarks 2026', s: 'kestrel.co/research' },
        { t: 'State of SaaS packaging', s: 'northgate.io/insights' },
        { t: 'Usage billing playbook', s: 'halden.co/docs/billing' },
        { t: 'Seats, credits and add-ons', s: 'lumenlabs.dev/blog' },
        { t: 'Free tier design guide', s: 'solace.studio/guides' },
        { t: 'Trial the top model once', s: 'lumenlabs.dev/trials' },
        { t: 'Retention after pricing changes', s: 'meridian.co/reports' },
        { t: 'Annual plans and credits', s: 'fernway.app/notes' },
      ];
      const QA = [
        { q: 'How are mid-size SaaS teams pricing AI features?', k: /pric|cost|bill|credit/i,
          s: [[0, 'Median plan bundles a monthly credit allowance and bills overage per request.'], [1, '61% of surveyed teams added a usage meter to a seat plan within twelve months.'], [2, 'Show a live balance in the header. Customers who see it open 38% fewer billing tickets.'], [3, 'Credits sold as an add-on kept seat revenue intact while usage revenue grew.']],
          t: 'Most mid-size teams now bundle a monthly credit allowance into each plan and bill overage per request{1}. Seat pricing still anchors the base tier, but 61% of surveyed teams added a usage meter within a year{2}. The clearest win was a live credit balance in the product header, which cut billing tickets by about a third{3}. Selling credits as an add-on kept seat revenue intact{4}.' },
        { q: 'Which model tiers belong on the free plan?', k: /free|tier|model/i,
          s: [[4, 'Cap free plans by request count, not tokens. People can predict a request.'], [0, 'Larger models carry a 20-30% premium over the base credit rate on paid plans.'], [5, 'A one-time trial of the top tier raised upgrades without adding free-tier cost.']],
          t: 'Keep the free plan on the smallest tier and cap it by requests, not tokens, because people can predict a request count{1}. Reserve the larger models for paid plans, where a 20 to 30 percent premium over base is the usual range{2}. A one-time trial of the top tier raised upgrades without adding free-tier cost{3}.' },
        { q: 'How did churn change after credits launched?', k: /churn|retain|retention/i,
          s: [[6, 'Starter plan churn fell from 4.1% to 3.2% over the two quarters after launch.'], [7, 'Annual customers were largely unaffected by the change.'], [2, 'The live balance indicator was the change teams credited most.']],
          t: 'Starter plan churn fell from 4.1% to 3.2% in the two quarters after credits launched{1}. Annual plans barely moved{2}, so the effect sits mostly with monthly customers. Teams point to the live balance indicator as the change that mattered most{3}.' },
      ];
      const $ = (s) => root.querySelector(s);
      const thread = $('.thread');
      const sl = $('.sl');
      const form = $('.comp');
      const input = $('.comp input');
      const send = $('.send');
      const cur = $('.cur');
      const markSvg = $('.side .mark').innerHTML;
      const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let userUntil = 0;
      let busy = false;
      let qi = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !form.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        form.classList.remove('is-auto');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const toEnd = () => thread.scrollTo({ top: thread.scrollHeight, behavior: 'smooth' });
      let cards = [];
      const hi = (n) => {
        cards.forEach((c, k) => c.classList.toggle('on', k === n - 1));
        root.querySelectorAll('.cite,.used .pill').forEach((c) => c.classList.toggle('on', Number(c.dataset.n) === n));
        if (cards[n - 1]) sl.scrollTo({ top: cards[n - 1].offsetTop - 10, behavior: 'smooth' });
      };
      const showSources = (qa, skeleton) => {
        $('.cnt').textContent = qa.s.length;
        if (skeleton) {
          sl.innerHTML = qa.s.map((_, k) => `<div class="src ph shim in" style="--i:${k}"></div>`).join('');
          cards = [];
          return;
        }
        sl.innerHTML = qa.s
          .map(([p, sn], k) => `<div class="src in" style="--i:${k}" data-n="${k + 1}"><div class="sr"><span class="fav">${POOL[p].s[0].toUpperCase()}</span><small>${POOL[p].s}</small><b>${k + 1}</b></div><p class="st">${POOL[p].t}</p><p class="sn">${sn}</p></div>`)
          .join('');
        cards = [...sl.children];
        cards.forEach((c, k) => c.addEventListener('click', () => hi(k + 1)));
        sl.scrollTop = 0;
      };
      const ask = async (q, qa) => {
        busy = true;
        send.disabled = true;
        const ex = document.createElement('div');
        ex.className = 'ex';
        ex.innerHTML = `<div class="u in"><p>${esc(q)}</p></div><div class="a"><span class="mark sm"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${markSvg}</svg></span><div class="ab"><div class="think in"><p>Reading ${qa.s.length} sources</p><i class="shim" style="width:92%"></i><i class="shim" style="width:74%"></i></div><p class="ans"></p><div class="used"></div><div class="acts"></div></div></div>`;
        thread.append(ex);
        while (thread.children.length > 3) thread.firstElementChild.remove();
        toEnd();
        showSources(qa, true);
        await wait(1000);
        if (!root.isConnected) return;
        ex.querySelector('.think').remove();
        showSources(qa, false);
        const ans = ex.querySelector('.ans');
        const caret = document.createElement('i');
        caret.className = 'cr';
        ans.append(caret);
        let n = 0;
        for (const part of qa.t.split(/(\{\d\})/)) {
          const m = part.match(/^\{(\d)\}$/);
          if (m) {
            const b = document.createElement('button');
            b.type = 'button';
            b.className = 'cite w';
            b.dataset.n = m[1];
            b.textContent = m[1];
            b.addEventListener('click', () => hi(Number(m[1])));
            b.addEventListener('mouseenter', () => hi(Number(m[1])));
            ans.insertBefore(b, caret);
            hi(Number(m[1]));
            await wait(700);
          } else {
            for (const w of part.split(/(\s+)/).filter(Boolean)) {
              const sp = document.createElement('span');
              sp.className = 'w';
              sp.textContent = w;
              ans.insertBefore(sp, caret);
              if (/\S/.test(w)) {
                await wait(48);
                if (++n % 9 === 0) toEnd();
              }
            }
          }
        }
        caret.remove();
        ex.querySelector('.used').innerHTML = qa.s
          .map(([p], k) => `<button type="button" class="pill in" style="--i:${k}" data-n="${k + 1}"><b>${k + 1}</b>${POOL[p].s.split('/')[0]}</button>`)
          .join('');
        ex.querySelectorAll('.used .pill').forEach((p) => p.addEventListener('click', () => hi(Number(p.dataset.n))));
        ex.querySelector('.acts').innerHTML = ['<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>', '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>', '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/>']
          .map((d) => `<span class="in"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg></span>`)
          .join('');
        toEnd();
        busy = false;
        send.disabled = false;
      };
      const pick = (q) => {
        const hit = QA.findIndex((x) => x.k.test(q));
        qi = hit >= 0 ? hit : (qi + 1) % QA.length;
        return QA[qi];
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = input.value.trim();
        if (busy || !q) return;
        input.value = '';
        ask(q, pick(q));
      });
      root.querySelectorAll('.hi').forEach((h) =>
        h.addEventListener('click', () => {
          root.querySelectorAll('.hi').forEach((x) => x.classList.toggle('on', x === h));
          $('h1').textContent = h.textContent;
        })
      );
      // first frame: one finished exchange with its sources
      (() => {
        const qa = QA[0];
        showSources(qa, false);
        sl.querySelectorAll('.in').forEach((n) => n.classList.remove('in'));
        const html = qa.t.replace(/\{(\d)\}/g, '<button type="button" class="cite" data-n="$1">$1</button>');
        const ex = document.createElement('div');
        ex.className = 'ex';
        ex.innerHTML = `<div class="u"><p>${qa.q}</p></div><div class="a"><span class="mark sm"><svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${markSvg}</svg></span><div class="ab"><p class="ans">${html}</p><div class="used">${qa.s.map(([p], k) => `<button type="button" class="pill" data-n="${k + 1}"><b>${k + 1}</b>${POOL[p].s.split('/')[0]}</button>`).join('')}</div></div></div>`;
        thread.append(ex);
        ex.querySelectorAll('.cite,.used .pill').forEach((c) => c.addEventListener('click', () => hi(Number(c.dataset.n))));
        input.value = '';
      })();

      // Autoplay: the cursor types a question and sends it; any real input hands over for 4s.
      cur.style.transform = 'translate(600px,520px)';
      (async () => {
        await wait(1400);
        qi = 0;
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          const qa = QA[(qi + 1) % QA.length];
          qi = (qi + 1) % QA.length;
          cur.classList.toggle('off', !moveTo(input, 0.4));
          await wait(850);
          form.classList.add('is-auto');
          let ok = true;
          for (const ch of qa.q) {
            if (!idle()) {
              ok = false;
              break;
            }
            input.value += ch;
            await wait(32);
          }
          form.classList.remove('is-auto');
          if (!ok) {
            input.value = '';
            continue;
          }
          await wait(300);
          moveTo(send, 0.5, 0.5);
          await wait(800);
          if (!idle()) {
            input.value = '';
            continue;
          }
          cur.classList.add('press');
          send.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          send.classList.remove('press');
          cur.classList.add('off');
          form.requestSubmit();
          await wait(1500);
          while (busy && root.isConnected) await wait(300);
          await wait(3500);
        }
      })();
    },
    prompt: `Build an AI chat screen with a sources panel, full viewport (height: 100dvh, the thread scrolls, the shell does not).

Layout: CSS grid, three columns 216px / minmax(0, 1fr) / 296px. Left: chat history (brand row, "New chat" button, grouped Today / Earlier list with the active chat on a white chip, the signed-in user at the bottom) on a light surface with a 1px hairline. Center: a 66px header (chat title, a one-line status like "Searching web and 3 connected folders", a model picker pill), the message thread, and a composer pinned at the bottom (attach button, text input, a "Web" scope chip, a round-cornered gradient send button). Right: a Sources panel, a count badge, and a vertical list of source cards (favicon tile, domain in mono, number badge, title, a 3-line snippet).

Messages: user messages right-aligned in a soft accent tint (radius 16 16 4 16). Assistant messages have a small gradient avatar and plain text at 14.5px / 1.65 with numbered citation chips (19px rounded squares) inline, and a row of numbered source pills plus copy, like and retry actions after the answer.

Motion: on send, show two shimmer bars with "Reading 4 sources" while the source cards appear as shimmer placeholders; then the cards stagger in (opacity + translateY 8px, 55ms apart) and the answer streams in word by word (a span per word fading in over 280ms, about 48ms apart) with a soft blinking caret at the end, never a spinner. Each time a citation chip is inserted, the matching source card lifts (translateX -5px, accent ring, shadow, spring 587ms) and the panel scrolls it into view; the chip turns solid accent. Hovering or clicking a chip or pill does the same.

Behavior: Enter submits, the composer disables while streaming, aria-live="polite" on the thread, chips are buttons with focus rings, prefers-reduced-motion shows the full answer without per-word animation. Below 760px hide both side columns (history moves into a menu, sources stay available as the pills under each answer). Use your accent color; Plain HTML, CSS and JS, no libraries; React-friendly structure (HistoryList, Thread, Message, Composer, SourcesPanel).`,
  });

  ML.add({
    id: 'app-ai-agent-run',
    cat: 'app-ai',
    title: 'Agent run timeline',
    sub: 'Tool steps run with live logs',
    html: `
<div class="app">
  <header class="hd">
    <span class="mark">${I(P.mark, 16)}</span>
    <div class="ti"><h1>Reconcile October invoices</h1><p>Ledger runner <span>/</span> Wed 14 Oct, 09:41 <span>/</span> 7 steps</p></div>
    <span class="stat" data-s="run"><i></i><b>Running</b></span>
    <button class="btn stop" type="button">${I(P.stop, 14)}<span>Stop</span></button>
  </header>
  <div class="body">
    <section class="tl">
      <p class="lbl">Timeline</p>
      <ol class="steps"></ol>
    </section>
    <aside class="side">
      <div class="card sum">
        <p class="k">Run summary</p>
        <p class="big"><span class="tot">8.1</span><small>s elapsed</small></p>
        <dl>
          <div><dt>Model</dt><dd>Lumen 2</dd></div>
          <div><dt>Tokens</dt><dd class="tok">0</dd></div>
          <div><dt>Tool calls</dt><dd class="calls">3 of 7</dd></div>
          <div><dt>Cost</dt><dd class="cost">$0.00</dd></div>
        </dl>
        <i class="bar"><s></s></i>
      </div>
      <div class="card out">
        <p class="k">Output</p>
        <div class="oph"><i class="shim" style="width:94%"></i><i class="shim" style="width:80%"></i><i class="shim" style="width:62%"></i><small>Appears when the run completes</small></div>
        <p class="otx"></p>
        <div class="files"><span>${I(P.file, 15)}reconciliation-oct.pdf</span><span>${I(P.mail, 15)}vendor-notes (2 drafts)</span></div>
      </div>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:flex;flex-direction:column;height:100%;background:var(--ml-bg)}
.d .hd{display:flex;flex:none;align-items:center;gap:14px;height:72px;padding:0 28px;border-bottom:1px solid var(--ml-line)}
.d .ti{flex:1;min-width:0}
.d .ti h1{font-size:19px}
.d .ti p{margin-top:3px;font-size:12.5px;color:var(--ml-muted)}
.d .ti span{margin:0 5px;color:var(--ml-bar)}
.d .stat{display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 13px;border-radius:999px;background:var(--ml-accent-soft);font-size:12.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .stat i{position:relative;width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .stat i::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:ai-ping 1.8s ease-out infinite}
.d .stat[data-s=done]{background:rgba(29,185,84,.12);color:#12893C}
.d .stat[data-s=done] i{background:#1DB954}
.d .stat[data-s=done] i::after,.d .stat[data-s=stop] i::after{animation:none}
.d .stat[data-s=stop]{background:var(--ml-surface);color:var(--ml-muted)}
.d .stat[data-s=stop] i{background:var(--ml-muted)}
.d .body{display:grid;flex:1;grid-template-columns:minmax(0,1fr) 316px;min-height:0;background:var(--ml-surface)}
.d .tl{display:flex;flex-direction:column;min-width:0;min-height:0;padding:22px 20px 18px 28px;overflow-y:auto;scrollbar-width:none}
.d .tl::-webkit-scrollbar{display:none}
.d .tl .lbl{padding:0 0 12px}
.d .steps{display:flex;flex:1;flex-direction:column;list-style:none}
.d .st{position:relative;flex:1 1 auto;max-height:230px;display:grid;grid-template-columns:30px minmax(0,1fr);gap:12px}
.d .rail{position:relative;display:flex;justify-content:center}
.d .rail::after{content:"";position:absolute;top:34px;bottom:-2px;left:50%;width:2px;margin-left:-1px;border-radius:2px;background:var(--ml-bar)}
.d .st:last-child .rail::after{display:none}
.d .st.done .rail::after{background:var(--ml-accent-line)}
.d .ic{position:relative;z-index:1;display:grid;place-items:center;width:28px;height:28px;margin-top:11px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2px var(--ml-bar);color:#fff;transition:background-color .35s ease,box-shadow .35s ease}
.d .ic svg{grid-area:1/1;opacity:0;transform:scale(.5);transition:opacity .25s ease,transform .45s var(--ml-bounce)}
.d .ic .eq{grid-area:1/1;display:none;align-items:flex-end;gap:2px;height:12px}
.d .ic .eq u{display:block;width:3px;height:100%;border-radius:2px;background:var(--ml-accent);transform-origin:50% 100%;animation:ag-eq 900ms ease-in-out infinite}
.d .ic .eq u:nth-child(2){animation-delay:-.3s}.d .ic .eq u:nth-child(3){animation-delay:-.6s}
.d .st.done .ic{background:#1DB954;box-shadow:none}
.d .st.done .ic svg{opacity:1;transform:none}
.d .st.run .ic{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 2px var(--ml-accent)}
.d .st.run .ic .eq{display:flex}
.d .st.stop .ic{box-shadow:inset 0 0 0 2px var(--ml-muted)}
.d .bd{min-width:0;margin-bottom:8px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),0 1px 2px rgba(35,15,10,.04);transition:box-shadow .35s ease,opacity .35s ease}
.d .st.run .bd{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 10px 26px rgba(255,68,51,.12)}
.d .st.wait .bd{opacity:.62}
.d .bd{display:flex;flex-direction:column;justify-content:center}
.d .sh{display:flex;flex:none;align-items:center;gap:10px;width:100%;min-height:50px;padding:0 14px;border:0;border-radius:14px;background:none;text-align:left}
.d .tool{flex:none;padding:5px 8px;border-radius:7px;background:var(--ml-surface);font:500 11.5px/1 var(--ml-mono);color:var(--ml-ink-2);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .st.run .tool{background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .sh b{flex:1;min-width:0;overflow:hidden;font-size:14px;font-weight:600;letter-spacing:-.005em;white-space:nowrap;text-overflow:ellipsis}
.d .el{font:500 12px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .sh > svg{flex:none;color:var(--ml-muted);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .st.open .sh > svg{transform:rotate(180deg)}
.d .lw{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s var(--ml-ease)}
.d .st.open .lw{grid-template-rows:1fr}
.d .lw > div{min-height:0;overflow:hidden}
.d .lg{margin:0 10px 10px;padding:12px 14px;border-radius:10px;background:#0E1626;font:400 12px/1.7 var(--ml-mono);color:#C5D3EA}
.d .lg p{display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;animation:ai-in 360ms var(--ml-ease) both}
.d .lg .c{color:#6F86A8}
.d .lg .g{color:#8FD6A8}
.d .lg .b{color:#7FB6FF}
.d .side{display:flex;flex-direction:column;gap:14px;min-width:0;min-height:0;padding:22px 24px 20px 6px;overflow-y:auto;scrollbar-width:none}
.d .side::-webkit-scrollbar{display:none}
.d .sum,.d .out{padding:18px}
.d .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .big{display:flex;align-items:baseline;gap:6px;margin-top:8px;font-size:34px;line-height:1;font-weight:650;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .big small{font-size:13px;font-weight:500;letter-spacing:0;color:var(--ml-muted)}
.d dl{display:grid;grid-template-columns:1fr 1fr;gap:14px 12px;margin-top:18px}
.d dt{font-size:11.5px;color:var(--ml-muted)}
.d dd{margin-top:3px;font-size:14px;font-weight:600;font-variant-numeric:tabular-nums}
.d .bar{display:block;height:6px;margin-top:18px;border-radius:99px;background:var(--ml-bar);overflow:hidden}
.d .bar s{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform-origin:0 50%;transform:scaleX(.43);transition:transform .8s var(--ml-ease)}
.d .out{flex:1;min-height:150px}
.d .oph{display:flex;flex-direction:column;gap:9px;margin-top:14px}
.d .oph i{display:block;height:11px;border-radius:6px}
.d .oph small{margin-top:4px;font-size:12px;color:var(--ml-muted)}
.d .otx{display:none;margin-top:12px;font-size:13.5px;line-height:1.6;color:var(--ml-ink)}
.d .files{display:none;flex-direction:column;gap:8px;margin-top:14px}
.d .files span{display:flex;align-items:center;gap:8px;height:36px;padding:0 11px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .out.fin .oph{display:none}
.d .out.fin .otx{display:block}
.d .out.fin .files.on{display:flex;animation:ai-in 520ms var(--ml-spring) both}
@keyframes ag-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr);grid-template-rows:max-content max-content;align-content:start;overflow-y:auto}
  .d .tl{min-height:auto;padding:18px 16px 4px;overflow:visible}
  .d .st{flex:none}
  .d .side{min-height:auto;padding:10px 16px 20px;overflow:visible}
  .d .hd{padding:0 16px;height:auto;min-height:68px;flex-wrap:wrap;padding-top:10px;padding-bottom:10px}
  .d .stop span{display:none}
  .d .stop{padding:0 11px}
  .d .tool{display:none}
}
@media (prefers-reduced-motion: reduce){.d .ic .eq u,.d .stat i::after{animation:none}}`,
    run: (root) => {
      const STEPS = [
        { tool: 'search_files', t: 'Find October invoices', lines: ['<span class="b">&gt;</span> search_files path="/billing/2026-10"', '<span class="g">ok</span> found 42 PDF files'], d: 1.2 },
        { tool: 'read_pdf', t: 'Extract line items', lines: ['<span class="b">&gt;</span> read_pdf files=42 mode="tables"', '<span class="g">ok</span> parsed 1,208 line items'], d: 4.8 },
        { tool: 'query_db', t: 'Pull ledger entries', lines: ['<span class="b">&gt;</span> query_db period="2026-10"', '<span class="c">SELECT * FROM ledger WHERE period = 2026-10</span>', '<span class="g">ok</span> 1,196 rows'], d: 2.1 },
        { tool: 'match_records', t: 'Match invoices to payments', lines: ['<span class="b">&gt;</span> match_records left=invoices right=ledger', '<span class="c">exact match on id + amount</span> 1,121', '<span class="c">fuzzy match on vendor + date</span> 67', '<span class="g">ok</span> matched 1,188 of 1,208'], d: 5.4 },
        { tool: 'flag_anomalies', t: 'Flag mismatches', lines: ['<span class="b">&gt;</span> flag_anomalies threshold=$50', '<span class="c">duplicate charge</span> Kestrel &amp; Co  $1,240', '<span class="c">missing payment</span> Meridian Foods  $2,172', '<span class="g">ok</span> 20 items across 6 vendors'], d: 3.2 },
        { tool: 'draft_email', t: 'Draft notes to vendors', lines: ['<span class="b">&gt;</span> draft_email vendors=6 tone="plain"', '<span class="g">ok</span> 2 drafts ready for review'], d: 3.9 },
        { tool: 'write_report', t: 'Write reconciliation report', lines: ['<span class="b">&gt;</span> write_report format="pdf"', '<span class="g">ok</span> saved reconciliation-oct.pdf'], d: 2.6 },
      ];
      const OUT = 'Reconciled 1,188 of 1,208 line items. 20 mismatches turned up across 6 vendors, worth $3,412 in total. Drafts for Kestrel & Co and Meridian Foods are ready for your review.';
      const CHEV = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';
      const CHK = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const $ = (s) => root.querySelector(s);
      const list = $('.steps');
      const cur = $('.cur');
      const stat = $('.stat');
      const stopBtn = $('.stop');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
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
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      list.innerHTML = STEPS.map(
        (s, i) =>
          `<li class="st wait" data-i="${i}"><div class="rail"><span class="ic">${CHK}<span class="eq"><u></u><u></u><u></u></span></span></div><div class="bd"><button type="button" class="sh" aria-expanded="false"><span class="tool">${s.tool}</span><b>${s.t}</b><em class="el">Queued</em>${CHEV}</button><div class="lw"><div><div class="lg"></div></div></div></div></li>`
      ).join('');
      const rows = [...list.children];
      const open = (i, on) => {
        rows[i].classList.toggle('open', on);
        rows[i].querySelector('.sh').setAttribute('aria-expanded', String(on));
      };
      rows.forEach((r, i) => r.querySelector('.sh').addEventListener('click', () => open(i, !r.classList.contains('open'))));
      let base = 0;
      let startedAt = 0;
      let live = -1;
      let tokens = 0;
      let stopped = false;
      let again = false;
      const fmt = (n) => n.toFixed(1) + 's';
      const setSum = () => {
        const doneN = rows.filter((r) => r.classList.contains('done')).length;
        $('.calls').textContent = `${Math.min(doneN + (live >= 0 ? 1 : 0), 7)} of 7`;
        $('.bar s').style.transform = `scaleX(${(doneN + (live >= 0 ? 0.5 : 0)) / 7})`;
        $('.tok').textContent = Math.round(tokens).toLocaleString('en-US');
        $('.cost').textContent = '$' + (tokens * 0.0000118).toFixed(2);
      };
      const setStat = (s, label, btn) => {
        stat.dataset.s = s;
        stat.querySelector('b').textContent = label;
        stopBtn.querySelector('span').textContent = btn;
      };
      const reset = (pre) => {
        stopped = false;
        live = -1;
        base = 0;
        tokens = 0;
        rows.forEach((r, i) => {
          const done = i < 3;
          r.className = 'st ' + (done ? 'done' : 'wait');
          r.querySelector('.lg').innerHTML = done ? STEPS[i].lines.map((l) => `<p>${l}</p>`).join('') : '';
          r.querySelector('.el').textContent = done ? fmt(STEPS[i].d) : 'Queued';
          r.querySelector('.sh').setAttribute('aria-expanded', 'false');
          if (done) {
            base += STEPS[i].d;
            tokens += 1900 + i * 1300;
          }
        });
        if (pre) {
          rows[3].className = 'st run open';
          rows[3].querySelector('.sh').setAttribute('aria-expanded', 'true');
          rows[3].querySelector('.lg').innerHTML = `<p>${STEPS[3].lines[0]}</p>`;
          rows[3].querySelector('.el').textContent = '0.9s';
        }
        $('.tot').textContent = base.toFixed(1);
        setStat('run', 'Running', 'Stop');
        const out = $('.out');
        out.classList.remove('fin');
        out.querySelector('.files').classList.remove('on');
        $('.otx').textContent = '';
        setSum();
      };
      // live clock: the running step, the total and the token meter
      const tick = async () => {
        while (root.isConnected) {
          await wait(100);
          if (live < 0 || stopped) continue;
          const e = (performance.now() - startedAt) / 1000;
          rows[live].querySelector('.el').textContent = fmt(e);
          $('.tot').textContent = (base + e).toFixed(1);
          tokens += 110 + Math.random() * 90;
          setSum();
        }
      };
      const play = async (pre) => {
        for (let i = 3; i < 7 && root.isConnected; i++) {
          live = i;
          rows[i].className = 'st run open';
          rows[i].querySelector('.sh').setAttribute('aria-expanded', 'true');
          const lg = rows[i].querySelector('.lg');
          let from = 0;
          if (i === 3 && pre) {
            from = 1;
            startedAt = performance.now() - 900;
            await wait(760);
          } else startedAt = performance.now();
          for (const l of STEPS[i].lines.slice(from)) {
            const p = document.createElement('p');
            p.innerHTML = l;
            lg.append(p);
            await wait(820);
            while (stopped && root.isConnected) await wait(200);
          }
          const e = (performance.now() - startedAt) / 1000;
          base += e;
          live = -1;
          rows[i].className = 'st done';
          rows[i].querySelector('.sh').setAttribute('aria-expanded', 'false');
          rows[i].querySelector('.el').textContent = fmt(e);
          setSum();
          await wait(380);
        }
        if (!root.isConnected) return;
        setStat('done', 'Completed', 'Run again');
        const out = $('.out');
        out.classList.add('fin');
        const tx = $('.otx');
        const caret = document.createElement('i');
        caret.className = 'cr';
        tx.append(caret);
        for (const w of OUT.split(/(\s+)/).filter(Boolean)) {
          const sp = document.createElement('span');
          sp.className = 'w';
          sp.textContent = w;
          tx.insertBefore(sp, caret);
          if (/\S/.test(w)) await wait(55);
        }
        caret.remove();
        out.querySelector('.files').classList.add('on');
      };
      stopBtn.addEventListener('click', () => {
        const s = stat.dataset.s;
        if (s === 'done') again = true;
        else if (s === 'run') {
          stopped = true;
          setStat('stop', 'Stopped', 'Resume');
          if (live >= 0) rows[live].classList.add('stop');
        } else {
          stopped = false;
          setStat('run', 'Running', 'Stop');
          if (live >= 0) rows[live].classList.remove('stop');
        }
      });
      reset(true);
      tick();
      (async () => {
        let pre = true;
        while (root.isConnected) {
          await play(pre);
          pre = false;
          for (let t = 0; t < 5200 && !again && root.isConnected; t += 100) await wait(100);
          again = false;
          reset(false);
        }
      })();

      // Autoplay: the cursor opens a finished step's log and closes it; the run keeps going by itself.
      cur.style.transform = 'translate(560px,640px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || stat.dataset.s !== 'run') {
            await wait(500);
            continue;
          }
          const head = rows[1].querySelector('.sh');
          cur.classList.toggle('off', !moveTo(head, 0.55));
          await wait(850);
          if (!idle()) continue;
          cur.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          head.click();
          await wait(2300);
          if (idle()) {
            cur.classList.add('press');
            await wait(130);
            cur.classList.remove('press');
          }
          open(1, false);
          cur.classList.add('off');
          await wait(5500);
        }
      })();
    },
    prompt: `Build an AI agent run screen that shows a task executing as a timeline of tool calls, full viewport (height: 100dvh, the timeline and the side column scroll, the shell does not).

Layout: a 72px header (gradient logo tile, run title "Reconcile October invoices", a meta line with the agent name, start time and step count, a status pill, and a Stop button). Below, a grid of minmax(0, 1fr) and 316px on a light surface. Left: a vertical timeline. Each step is a white 14px-radius card (hairline ring) next to a rail with a 28px status node: pending is a hollow ring and the card sits at 62% opacity, running is a soft accent node holding three small equalizer bars with an accent ring on the card, done is a green node with a drawn check, and a 2px connector between nodes turns accent once the step above it is done. Inside the card: a mono tool-name chip (search_files, read_pdf, query_db, match_records, flag_anomalies, draft_email, write_report), a title, a tabular-nums elapsed time and a chevron. The card expands (grid-template-rows 0fr to 1fr, 450ms) to a dark log panel with mono lines: a prompt line, result lines, an "ok" line in soft green. Right column: a Run summary card (big elapsed seconds, model, tokens, tool calls "4 of 7", cost, a progress bar) and an Output card showing shimmer lines until the run completes.

Motion: the running step expands and appends one log line every ~800ms (opacity + translateY 8px), its elapsed time and the total tick every 100ms, tokens and cost count up, the progress bar eases with scaleX. When a step finishes it collapses, turns green with a spring check and the next one starts. On completion the status pill turns green ("Completed"), the output text streams in word by word with a soft caret, and file chips slide in. Stop pauses the run (status "Stopped", button becomes Resume); after completion the button reads Run again.

Accessibility: step headers are buttons with aria-expanded, status changes announced through aria-live="polite" on the status pill, visible focus rings, prefers-reduced-motion stops the equalizer and pulse. Below 760px stack the columns (summary and output under the timeline) and hide the tool chips. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (RunHeader, Timeline, StepCard, LogPanel, RunSummary, OutputCard).`,
  });

  ML.add({
    id: 'app-ai-image-studio',
    cat: 'app-ai',
    title: 'Prompt to image studio',
    sub: 'Tiles shimmer, then images develop',
    html: `
<div class="app">
  <aside class="ctl">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span>Lumen Studio<em class="cr2">482 credits</em></div>
    <label class="fl" for="ml-img-prompt">Prompt</label>
    <div class="ta"><textarea id="ml-img-prompt" rows="4" maxlength="400" aria-label="Prompt"></textarea><small><span class="cc">0</span>/400</small></div>
    <p class="fl">Style</p>
    <div class="chips" role="group" aria-label="Style"></div>
    <p class="fl">Aspect ratio</p>
    <div class="seg" role="group" aria-label="Aspect ratio"><span class="sp" aria-hidden="true"></span></div>
    <button class="gen-btn" type="button"><span class="l1">${I(P.wand, 17)}Generate 4 images</span><span class="l2">Generating</span></button>
    <p class="note">Uses 4 credits. About 6 seconds.</p>
  </aside>
  <main class="out">
    <header class="oh"><div><h1>Results</h1><p class="cap"></p></div><span class="pill">${I(P.layers, 14)}4 variations</span></header>
    <div class="grid"></div>
    <div class="rec"><p class="lbl">Recent</p><div class="rl"></div></div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:grid;grid-template-columns:304px minmax(0,1fr);height:100%;background:var(--ml-bg)}
.d .ctl{display:flex;flex-direction:column;min-height:0;padding:20px 20px 18px;border-right:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:none}
.d .ctl::-webkit-scrollbar{display:none}
.d .cr2{margin-left:auto;padding:5px 9px;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .fl{margin:20px 0 8px;font-size:12.5px;font-weight:600;color:var(--ml-ink-2)}
.d .ta{position:relative;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .25s ease,background-color .25s ease}
.d .ta:focus-within,.d .ta.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .ta textarea{display:block;width:100%;padding:13px 14px 28px;border:0;outline:0;resize:none;background:none;font-size:14px;line-height:1.5}
.d .ta small{position:absolute;right:12px;bottom:9px;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .chips{display:flex;flex-wrap:wrap;gap:8px}
.d .chip{height:32px;padding:0 12px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);transition:background-color .2s ease,box-shadow .2s ease,color .2s ease,transform 90ms ease-out}
.d .chip:hover{background:var(--ml-surface)}
.d .chip.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent);color:var(--ml-accent-ink)}
.d .chip:active{transform:scale(.96)}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(3,1fr);padding:3px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg button{position:relative;z-index:1;height:34px;border:0;border-radius:9px;background:none;font-size:13px;font-weight:600;color:var(--ml-muted);transition:color .2s ease}
.d .seg button.on{color:var(--ml-ink)}
.d .sp{position:absolute;top:3px;bottom:3px;left:3px;width:calc((100% - 6px) / 3);border-radius:9px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px var(--ml-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .gen-btn{position:relative;display:grid;place-items:center;height:48px;margin-top:auto;border:0;border-radius:13px;overflow:hidden;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 10px 22px rgba(255,68,51,.24);font-size:14.5px;font-weight:600;transition:transform 90ms ease-out}
.d .gen-btn:active,.d .gen-btn.press{transform:scale(.97)}
.d .gen-btn:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .gen-btn span{grid-area:1/1;display:inline-flex;align-items:center;gap:8px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .gen-btn .l2{opacity:0;transform:translateY(10px)}
.d .gen-btn.busy .l1{opacity:0;transform:translateY(-10px)}
.d .gen-btn.busy .l2{opacity:1;transform:none}
.d .gen-btn.busy::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);background-size:220% 100%;animation:ai-sheen 1.1s linear infinite}
.d .note{margin-top:10px;font-size:12px;text-align:center;color:var(--ml-muted)}
.d .out{display:flex;flex-direction:column;gap:16px;min-width:0;min-height:0;padding:20px 24px 18px;background:var(--ml-surface)}
.d .oh{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px}
.d .oh > div{flex:1;min-width:0}
.d .oh .pill{flex:none}
.d .cap{margin-top:3px;overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .grid{display:grid;flex:0 1 auto;grid-template-columns:repeat(2,minmax(0,1fr));grid-auto-rows:min-content;align-content:start;gap:14px;min-height:0;overflow-y:auto;scrollbar-width:none}
.d .grid::-webkit-scrollbar{display:none}
.d .tile{position:relative;aspect-ratio:var(--ar,4/3);border-radius:16px;overflow:hidden;background:var(--ml-bar-2);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);transition:box-shadow .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .tile .img{position:absolute;inset:0;opacity:0;filter:blur(18px) saturate(.4);transform:scale(1.06);transition:opacity 1s ease,filter 1.1s ease,transform 1.1s var(--ml-ease)}
.d .tile .img svg{display:block;width:100%;height:100%}
.d .tile.done .img{opacity:1;filter:none;transform:none}
.d .tile.sel{transform:translateY(-3px);box-shadow:0 0 0 2px var(--ml-bg),0 0 0 4px var(--ml-accent),var(--ml-shadow-lg)}
.d .gen{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:8px;transition:opacity .5s ease}
.d .gen::before{content:"";position:absolute;inset:0;background:linear-gradient(100deg,var(--ml-bar-2) 30%,#F7F9FD 50%,var(--ml-bar-2) 70%);background-size:220% 100%;animation:ai-sheen 1.3s linear infinite}
.d .gen b{position:relative;font:600 22px/1 var(--ml-mono);letter-spacing:-.03em;color:var(--ml-accent-ink);font-variant-numeric:tabular-nums}
.d .gen small{position:relative;font-size:12px;font-weight:500;color:var(--ml-muted)}
.d .pg{position:absolute;left:0;right:0;bottom:0;height:4px;background:rgba(255,68,51,.12)}
.d .pg s{display:block;height:100%;background:var(--ml-grad);transform-origin:0 50%;transform:scaleX(0)}
.d .tile.done .gen{opacity:0;pointer-events:none}
.d .tb{position:absolute;left:10px;right:10px;bottom:10px;display:flex;align-items:center;gap:6px;padding:6px 6px 6px 12px;border-radius:12px;background:rgba(255,255,255,.88);box-shadow:0 6px 18px rgba(35,15,10,.14);opacity:0;transform:translateY(8px);transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .tb span{flex:1;font-size:12px;font-weight:600;color:var(--ml-ink-2)}
.d .tb button{display:grid;place-items:center;width:30px;height:30px;border:0;border-radius:8px;background:none;color:var(--ml-ink-2)}
.d .tb button:hover{background:var(--ml-surface)}
.d .tile.done:hover .tb,.d .tile.sel .tb{opacity:1;transform:none}
.d .rec{display:flex;flex:1 0 auto;flex-direction:column}
.d .rec .lbl{padding:0 0 8px}
.d .rl{display:flex;flex:1;gap:10px}
.d .rc{display:flex;align-items:center;gap:12px;flex:1;min-width:0;max-height:132px;min-height:56px;padding:7px 14px 7px 7px;border:0;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),0 1px 2px rgba(35,15,10,.04);text-align:left;transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow .25s ease}
.d .rc:hover{transform:translateY(-2px);box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow)}
.d .rc i{flex:none;width:44px;height:44px;border-radius:9px;overflow:hidden}
.d .rc i svg{display:block;width:100%;height:100%}
.d .rc span{min-width:0;overflow:hidden;font-size:12px;line-height:1.35;color:var(--ml-ink-2);display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}
.d .rc.in{animation:ai-in 520ms var(--ml-spring) both}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{display:flex;flex-direction:column;overflow-y:auto}
  .d .ctl{flex:none;border-right:0;border-bottom:1px solid var(--ml-line);overflow:visible;padding:16px}
  .d .gen-btn{margin-top:20px}
  .d .out{flex:none;padding:16px}
  .d .grid{overflow:visible}
  .d .rl .rc:nth-child(n+3){display:none}
}
@media (prefers-reduced-motion: reduce){.d .tile .img{transition-duration:.01s}}`,
    run: (root) => {
      const THEMES = {
        lake: { p: 'A quiet cabin by a lake at dawn, soft haze over the water', k: /lake|cabin|mountain|dawn|water|river/i },
        city: { p: 'Skyline at blue hour, glass towers, calm and clean', k: /city|skyline|tower|street|night|building/i },
        wave: { p: 'Abstract wave of ice-blue glass, soft studio light', k: /wave|abstract|glass|ice|liquid|silk/i },
      };
      const STYLES = ['Studio', 'Misty', 'Crisp', 'Dusk'];
      const RATIOS = [['1:1', 1], ['4:3', 4 / 3], ['16:9', 16 / 9]];
      const $ = (s) => root.querySelector(s);
      const grid = $('.grid');
      const ta = $('textarea');
      const taBox = $('.ta');
      const btn = $('.gen-btn');
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && root.getRootNode().activeElement !== ta;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        taBox.classList.remove('is-auto');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      // ---- drawn images (400x300 SVG compositions) ----
      const rnd = (s) => {
        const x = Math.sin(s * 127.1 + 311.7) * 43758.5453;
        return x - Math.floor(x);
      };
      let uid = 0;
      const art = (theme, v) => {
        const id = 'ai-img-' + ++uid;
        const r = (k) => rnd(v * 13 + k * 7.3 + theme.length);
        let body = '';
        if (theme === 'lake') {
          const sky = [['#C9DEFB', '#F5F9FF'], ['#8DBBFB', '#E4EFFF'], ['#1C3A72', '#86B4F6'], ['#D8E6FA', '#A9C6F0']][v % 4];
          const sx = 90 + r(1) * 220;
          const sy = v % 4 === 2 ? 118 : 96 + r(2) * 24;
          const dark = v % 4 === 2;
          body = `<defs><linearGradient id="${id}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient><radialGradient id="${id}b"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><linearGradient id="${id}c" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${dark ? '#27508F' : '#7FB0F5'}"/><stop offset="1" stop-color="${dark ? '#1F100B' : '#CFE2FC'}"/></linearGradient></defs><rect width="400" height="300" fill="url(#${id}a)"/><circle cx="${sx}" cy="${sy}" r="70" fill="url(#${id}b)"/><circle cx="${sx}" cy="${sy}" r="${18 + r(3) * 8}" fill="#fff" opacity=".92"/><path d="M0 188 L${60 + r(4) * 40} ${120 + r(5) * 20} L${150 + r(6) * 30} 176 L${230 + r(7) * 30} ${110 + r(8) * 24} L${320 + r(9) * 20} 178 L400 ${132 + r(10) * 20} V204 H0Z" fill="${dark ? '#2E5CA6' : '#A6C7F5'}" opacity=".85"/><path d="M0 204 L${40 + r(11) * 40} 170 L${120 + r(12) * 40} 200 L${210 + r(13) * 50} 164 L${300 + r(14) * 30} 202 L400 180 V212 H0Z" fill="${dark ? '#1A3F7C' : '#6FA3EE'}"/><rect y="204" width="400" height="96" fill="url(#${id}c)"/><ellipse cx="${sx}" cy="226" rx="${14 + r(15) * 8}" ry="${34 + r(3) * 10}" fill="#fff" opacity=".35"/><g fill="${dark ? '#1A0D08' : '#12356F'}"><rect x="${270 + r(16) * 60}" y="188" width="26" height="16" rx="1"/><path d="M${266 + r(16) * 60} 189 L${283 + r(16) * 60} 176 L${300 + r(16) * 60} 189Z"/></g><path d="M0 214 H400" stroke="#fff" stroke-opacity=".5"/>`;
        } else if (theme === 'city') {
          const sky = [['#1F100B', '#7FB0F5'], ['#243F7A', '#B8D3FA'], ['#1A0D08', '#4F86DA'], ['#1D3A72', '#9EC2F6']][v % 4];
          let far = '';
          let near = '';
          for (let i = 0; i < 9; i++) far += `<rect x="${i * 46 - 6}" y="${120 + r(i) * 60}" width="38" height="200" fill="#8FB5F0" opacity=".45"/>`;
          let x = -10;
          let k = 20;
          while (x < 400) {
            const w = 34 + r(k++) * 26;
            const h = 80 + r(k++) * 120;
            near += `<rect x="${x}" y="${300 - h}" width="${w}" height="${h}" fill="#0F2652"/>`;
            for (let wy = 300 - h + 10; wy < 290; wy += 14) for (let wx = x + 6; wx < x + w - 8; wx += 11) if (rnd(wx * 3.1 + wy * 1.7 + v) > 0.55) near += `<rect x="${wx}" y="${wy}" width="5" height="7" rx="1" fill="#BCD8FF" opacity=".85"/>`;
            x += w + 3;
          }
          body = `<defs><linearGradient id="${id}a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${sky[0]}"/><stop offset="1" stop-color="${sky[1]}"/></linearGradient></defs><rect width="400" height="300" fill="url(#${id}a)"/><circle cx="${60 + r(2) * 280}" cy="${50 + r(3) * 30}" r="${14 + r(4) * 6}" fill="#fff" opacity=".9"/>${far}${near}`;
        } else {
          const bg = [['#EAF2FF', '#BBD4FA'], ['#DCE9FE', '#8DB7F4'], ['#0F2A5C', '#3F78D6'], ['#F4F8FF', '#A8C7F4']][v % 4];
          let waves = '';
          for (let i = 0; i < 5; i++) {
            const y = 70 + i * 36 + r(i) * 10;
            const a = 22 + r(i + 5) * 22;
            waves += `<path d="M0 ${y} C 90 ${y - a}, 150 ${y + a}, 220 ${y} S 340 ${y - a}, 400 ${y + 6} V300 H0Z" fill="${i % 2 ? '#fff' : '#7FB0F5'}" opacity="${0.22 + i * 0.1}"/>`;
          }
          body = `<defs><linearGradient id="${id}a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg[0]}"/><stop offset="1" stop-color="${bg[1]}"/></linearGradient><radialGradient id="${id}b" cx=".35" cy=".3"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#4F86DA"/></radialGradient></defs><rect width="400" height="300" fill="url(#${id}a)"/><circle cx="${110 + r(8) * 180}" cy="${96 + r(9) * 40}" r="${46 + r(10) * 20}" fill="url(#${id}b)" opacity=".9"/>${waves}`;
        }
        return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${body}</svg>`;
      };
      const TB = '<div class="tb"><span>Variation</span><button type="button" aria-label="Download"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/></svg></button><button type="button" aria-label="More like this"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg></button></div>';
      let theme = 'lake';
      let style = 0;
      let busy = false;
      const history = [{ t: 'wave', v: 1, p: THEMES.wave.p }, { t: 'city', v: 2, p: THEMES.city.p }];
      const fill = (th, instant) => {
        grid.innerHTML = [0, 1, 2, 3]
          .map((k) => `<figure class="tile${instant ? ' done' : ''}" data-k="${k}"><div class="img">${art(th, k + (th === 'lake' ? 0 : 1))}</div><div class="gen"><b>0%</b><small>Generating variation ${k + 1}</small><i class="pg"><s></s></i></div>${TB.replace('Variation', 'Variation ' + (k + 1))}</figure>`)
          .join('');
        [...grid.children].forEach((t) =>
          t.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            const was = t.classList.contains('sel');
            grid.querySelectorAll('.tile').forEach((x) => x.classList.remove('sel'));
            t.classList.toggle('sel', !was);
          })
        );
        $('.cap').textContent = `"${THEMES[th].p}"`;
      };
      const recent = (animate) => {
        $('.rl').innerHTML = history
          .slice(0, 3)
          .map((h, i) => `<button type="button" class="rc${animate && i === 0 ? ' in' : ''}" data-i="${i}"><i>${art(h.t, h.v)}</i><span>${h.p}</span></button>`)
          .join('');
        $('.rl').querySelectorAll('.rc').forEach((b) =>
          b.addEventListener('click', () => {
            if (busy) return;
            const h = history[Number(b.dataset.i)];
            theme = h.t;
            ta.value = h.p;
            count();
            fill(h.t, true);
          })
        );
      };
      const count = () => ($('.cc').textContent = ta.value.length);
      ta.addEventListener('input', count);
      // style chips + ratio segmented control with a gliding highlight
      const chips = $('.chips');
      chips.innerHTML = STYLES.map((s, i) => `<button type="button" class="chip${i === 0 ? ' on' : ''}">${s}</button>`).join('');
      chips.querySelectorAll('.chip').forEach((c, i) =>
        c.addEventListener('click', () => {
          style = i;
          chips.querySelectorAll('.chip').forEach((x, k) => x.classList.toggle('on', k === i));
          grid.style.filter = ['none', 'brightness(1.06) contrast(.94)', 'contrast(1.12) saturate(1.05)', 'brightness(.94) saturate(.9)'][i];
        })
      );
      const seg = $('.seg');
      const sp = $('.sp');
      RATIOS.forEach(([l], i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = l;
        b.className = i === 1 ? 'on' : '';
        b.addEventListener('click', () => {
          seg.querySelectorAll('button').forEach((x, k) => x.classList.toggle('on', k === i));
          sp.style.transform = `translateX(${i * 100}%)`;
          root.querySelector('.app').style.setProperty('--ar', String(RATIOS[i][1]));
        });
        seg.append(b);
      });
      sp.style.transform = 'translateX(100%)';
      root.querySelector('.app').style.setProperty('--ar', String(4 / 3));
      const generate = async (prompt) => {
        if (busy) return;
        busy = true;
        btn.classList.add('busy');
        const th = Object.keys(THEMES).find((k) => THEMES[k].k.test(prompt)) || 'lake';
        const prev = { t: theme, v: 0, p: ta.dataset.last || THEMES[theme].p };
        theme = th;
        fill(th, false);
        const tiles = [...grid.children];
        const t0 = performance.now();
        const total = [2200, 2900, 3600, 4300];
        let paused = 0;
        let last = performance.now();
        while (root.isConnected) {
          await sleep(70);
          const now = performance.now();
          if (root.dataset.paused) paused += now - last;
          last = now;
          const e = now - t0 - paused;
          tiles.forEach((t, k) => {
            if (t.classList.contains('done')) return;
            const f = Math.min(1, e / total[k]);
            const pct = Math.round(100 * (1 - Math.pow(1 - f, 2)));
            t.querySelector('.gen b').textContent = pct + '%';
            t.querySelector('.pg s').style.transform = `scaleX(${f})`;
            if (f >= 1) t.classList.add('done');
          });
          if (tiles.every((t) => t.classList.contains('done'))) break;
        }
        history.unshift({ t: th, v: 1, p: prompt });
        history.length = Math.min(history.length, 4);
        recent(true);
        btn.classList.remove('busy');
        busy = false;
        return prev;
      };
      btn.addEventListener('click', () => {
        const p = ta.value.trim();
        if (p) generate(p);
      });
      ta.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          btn.click();
        }
      });
      ta.value = THEMES.lake.p;
      count();
      fill('lake', true);
      recent(false);

      // Autoplay: type a prompt, press Generate, watch the tiles develop; any real input hands over for 4s.
      cur.style.transform = 'translate(700px,560px)';
      const order = ['city', 'wave', 'lake'];
      let oi = 0;
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          const th = order[oi++ % 3];
          cur.classList.toggle('off', !moveTo(ta, 0.4, 0.35));
          await wait(850);
          ta.value = '';
          taBox.classList.add('is-auto');
          let ok = true;
          for (const ch of THEMES[th].p) {
            if (!idle()) {
              ok = false;
              break;
            }
            ta.value += ch;
            count();
            await wait(26);
          }
          taBox.classList.remove('is-auto');
          if (!ok) continue;
          await wait(300);
          moveTo(btn, 0.5, 0.5);
          await wait(850);
          if (!idle()) continue;
          cur.classList.add('press');
          btn.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          btn.classList.remove('press');
          cur.classList.add('off');
          btn.click();
          await wait(800);
          while (busy && root.isConnected) await wait(300);
          await wait(4200);
        }
      })();
    },
    prompt: `Build an AI image generation studio screen, full viewport (height: 100dvh, the results grid scrolls, the shell does not).

Layout: grid of 304px and minmax(0, 1fr). Left control panel (white, 1px right hairline): brand row with a credits chip, a Prompt textarea (4 rows, 14px, character counter in mono at the bottom right), a Style group of pill chips (Studio, Misty, Crisp, Dusk; the selected one has a 1.5px accent ring and a soft tint), an Aspect ratio segmented control (1:1, 4:3, 16:9) whose white thumb slides between options with transform and a spring curve, and a pinned primary "Generate 4 images" button (48px, gradient) with "Uses 4 credits" under it. Right (light surface): a Results header with the prompt in quotes, a 2-column grid of tiles (aspect-ratio from the selected ratio, 16px radius, hairline plus soft shadow), and a Recent row of up to 3 history cards (40px thumbnail and a two-line prompt).

Motion: on Generate the button label swaps with a vertical slide and a sheen sweeps across (no spinner); every tile switches to a generating state: a shimmer surface, a large mono percentage counting up and a 4px progress bar growing with scaleX, finishing at staggered times (2.2s to 4.3s). When a tile finishes its image develops in: opacity 0 to 1, filter blur(18px) saturate(.4) to none and scale 1.06 to 1 over about 1.1s while the shimmer fades out. Hover or select a tile to lift it 3px with an accent ring and slide up an action bar (download, more like this). The new result is added to Recent with the standard entrance (opacity + translateY 8px).

Behavior: Enter in the prompt generates (Shift+Enter adds a line), clicking a Recent card restores that result, tiles are selectable. Draw the demo images as SVG or CSS compositions in your own style; real products swap in the API image. Accessibility: textarea has a label, chips and segments are buttons with focus rings and aria-pressed, progress text is aria-live polite, prefers-reduced-motion drops the blur. Below 760px stack the control panel above the grid. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (PromptPanel, StyleChips, RatioSegment, ResultGrid, ImageTile, RecentList).`,
  });

  ML.add({
    id: 'app-ai-document-qa',
    cat: 'app-ai',
    title: 'Document Q&A',
    sub: 'Ask, and the cited clause lights up',
    html: `
<div class="app">
  <section class="doc">
    <header class="tb">
      <span class="fi">${I(P.file, 17)}</span>
      <div class="ti"><b>Master Services Agreement</b><small>Kestrel &amp; Co and Halden, 6 pages</small></div>
      <span class="pg">Page <b class="pn">1</b> of 6</span>
      <span class="zm"><button type="button" aria-label="Zoom out">-</button><i>100%</i><button type="button" aria-label="Zoom in">+</button></span>
    </header>
    <div class="sheets"></div>
  </section>
  <aside class="chat">
    <header class="ch"><span class="mark sm">${I(P.mark, 14)}</span><div><b>Ask this document</b><small>Answers cite the exact clause</small></div></header>
    <div class="thread" aria-live="polite"></div>
    <div class="sug"></div>
    <form class="comp" novalidate>
      <input type="text" placeholder="Ask about this agreement" aria-label="Question">
      <button type="submit" class="send" aria-label="Send">${I(P.send, 17, 2.4)}</button>
    </form>
  </aside>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:grid;grid-template-columns:minmax(0,1fr) 392px;height:100%;background:var(--ml-bg)}
.d .doc{display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--ml-surface)}
.d .tb{display:flex;flex:none;align-items:center;gap:12px;height:62px;padding:0 24px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .fi{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ti{flex:1;min-width:0}
.d .ti b{display:block;font-size:14px;font-weight:650;letter-spacing:-.01em}
.d .ti small{font-size:12px;color:var(--ml-muted)}
.d .pg{font-size:12.5px;color:var(--ml-muted)}
.d .pg b{font-weight:650;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .zm{display:inline-flex;align-items:center;gap:2px;height:32px;padding:0 3px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .zm button{width:26px;height:26px;border:0;border-radius:8px;background:none;font-size:15px;font-weight:600;color:var(--ml-ink-2)}
.d .zm button:hover{background:var(--ml-bg)}
.d .zm i{min-width:40px;font:500 11.5px/1 var(--ml-mono);font-style:normal;text-align:center;color:var(--ml-muted)}
.d .sheets{display:flex;flex:1;flex-direction:column;align-items:center;gap:18px;min-height:0;padding:22px 24px 40px;overflow-y:auto;scrollbar-width:none}
.d .sheets::-webkit-scrollbar{display:none}
.d .sheet{position:relative;flex:none;width:100%;max-width:560px;padding:34px 40px 40px;border-radius:6px;background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.06),0 12px 30px rgba(35,15,10,.08)}
.d .sheet h2{margin-bottom:16px;font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .sheet h2 small{display:block;margin-bottom:5px;font-size:10.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ml-muted)}
.d .sheet footer{position:absolute;left:0;right:0;bottom:14px;font:500 10.5px/1 var(--ml-mono);text-align:center;color:var(--ml-muted)}
.d .cl{position:relative;margin-bottom:14px;font-size:13px;line-height:1.7;color:var(--ml-ink-2)}
.d .cl b{margin-right:8px;font-weight:650;color:var(--ml-ink)}
.d .cl .t{background:linear-gradient(var(--ml-accent-soft),var(--ml-accent-soft)) no-repeat 0 0 / 0% 100%;border-radius:3px;-webkit-box-decoration-break:clone;box-decoration-break:clone;transition:background-size 800ms var(--ml-ease),box-shadow .5s ease}
.d .cl.hl .t{background-size:100% 100%;box-shadow:0 0 0 3px var(--ml-accent-soft)}
.d .cl .tag{position:absolute;right:2px;top:-17px;padding:3px 8px;border-radius:999px;background:var(--ml-accent);font-size:10px;font-weight:650;color:#fff;opacity:0;transform:translateY(4px);transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .cl.hl .tag{opacity:1;transform:none}
.d .chat{display:flex;flex-direction:column;min-height:0;border-left:1px solid var(--ml-line);background:var(--ml-bg)}
.d .ch{display:flex;flex:none;align-items:center;gap:11px;height:62px;padding:0 20px;border-bottom:1px solid var(--ml-line)}
.d .ch b{display:block;font-size:14px;font-weight:650;letter-spacing:-.01em}
.d .ch small{font-size:12px;color:var(--ml-muted)}
.d .thread{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:18px 20px 6px;overflow-y:auto;scrollbar-width:none}
.d .thread::-webkit-scrollbar{display:none}
.d .ex{display:flex;flex-direction:column;gap:12px}
.d .u{align-self:flex-end;max-width:86%;padding:10px 14px;border-radius:16px 16px 4px 16px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:13.5px;line-height:1.5}
.d .ans{font-size:14px;line-height:1.65}
.d .refs{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}
.d .ref{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border:0;border-radius:8px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 11.5px/1 var(--ml-mono);color:var(--ml-accent-ink);transition:background-color .25s ease,box-shadow .25s ease,transform 90ms ease-out}
.d .ref:hover,.d .ref.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .ref:active{transform:scale(.96)}
.d .ref small{font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .think{display:flex;flex-direction:column;gap:8px;padding-top:4px}
.d .think p{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .think i{display:block;height:11px;border-radius:6px}
.d .sug{display:flex;flex:none;flex-wrap:wrap;gap:8px;padding:6px 20px 4px}
.d .sug button{height:30px;padding:0 12px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);transition:background-color .2s ease,transform 90ms ease-out}
.d .sug button:hover{background:var(--ml-surface)}
.d .sug button:active{transform:scale(.96)}
.d .comp{display:flex;flex:none;align-items:center;gap:8px;margin:8px 16px 16px;padding:7px 7px 7px 14px;border-radius:15px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);transition:box-shadow .25s ease}
.d .comp:focus-within,.d .comp.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .comp input{flex:1;min-width:0;height:38px;border:0;outline:0;background:none;font-size:14px}
.d .comp input::placeholder{color:#A1A1A6}
.d .send{display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:11px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.22);transition:transform 90ms ease-out,opacity .2s ease}
.d .send:active,.d .send.press{transform:scale(.92)}
.d .send:disabled{opacity:.4;box-shadow:none;cursor:default}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,38%) minmax(0,1fr)}
  .d .chat{border-left:0;border-top:1px solid var(--ml-line)}
  .d .zm,.d .pg{display:none}
  .d .tb{height:54px;padding:0 16px}
  .d .sheets{padding:14px 12px 24px}
  .d .sheet{padding:22px 22px 36px}
  .d .ch{height:52px}
  .d .sug{display:none}
}
@media (prefers-reduced-motion: reduce){.d .cr{animation:none}}`,
    run: (root) => {
      const DOC = [
        { h: 'Term and renewal', cl: [['1.1', 'This Agreement begins on 1 November 2026 and continues for an initial term of twenty-four (24) months.'], ['1.2', 'It renews automatically for successive twelve-month periods unless either party gives written notice at least sixty (60) days before the end of the current term.']] },
        { h: 'Fees and payment', cl: [['2.1', 'Client pays the monthly fee of $8,400 within thirty (30) days of the date of each invoice.'], ['2.2', 'Late amounts accrue interest at 1.5% per month until paid in full.'], ['2.3', 'Fees may increase by no more than 4% on each renewal.']] },
        { h: 'Confidentiality', cl: [['3.1', "Each party keeps the other's confidential information private for five (5) years after this Agreement ends."], ['3.2', 'This does not apply to information that is public or independently developed.']] },
        { h: 'Termination', cl: [['4.1', 'Either party may terminate for material breach if the breach is not cured within fifteen (15) days of written notice.'], ['4.2', "Client may terminate for convenience with ninety (90) days' notice and pays all fees through the notice period."]] },
        { h: 'Limitation of liability', cl: [["5.1", "Each party's total liability is capped at the fees paid in the twelve (12) months before the claim."], ['5.2', 'Neither party is liable for indirect or consequential loss.']] },
        { h: 'Governing law', cl: [['6.1', 'This Agreement is governed by the laws of the State of Delaware.'], ['6.2', 'Both parties submit to the courts located in Wilmington, Delaware.']] },
      ];
      const QA = [
        { q: 'When does the agreement renew?', k: /renew|term|expire|end date/i, c: ['1.2'], t: 'It renews automatically for twelve-month periods. To stop a renewal, either side must give written notice at least 60 days before the current term ends {1.2}.' },
        { q: 'What is the monthly fee and when is it due?', k: /fee|pay|price|cost|due|invoice/i, c: ['2.1', '2.2'], t: 'The fee is $8,400 a month, due within 30 days of each invoice {2.1}. Late amounts accrue 1.5% interest per month {2.2}.' },
        { q: 'Can we leave early?', k: /leave|terminat|cancel|exit|early/i, c: ['4.2', '4.1'], t: "Yes. You can terminate for convenience with 90 days' notice and pay fees through that period {4.2}. Either side can also exit over a breach that stays uncured for 15 days {4.1}." },
        { q: 'How much is liability capped at?', k: /liab|cap|damage|loss/i, c: ['5.1', '5.2'], t: 'Each party is capped at the fees paid in the 12 months before a claim {5.1}, and indirect or consequential loss is excluded {5.2}.' },
      ];
      const SUG = ['Payment terms', 'Termination rights', 'Liability cap'];
      const $ = (s) => root.querySelector(s);
      const sheets = $('.sheets');
      const thread = $('.thread');
      const form = $('.comp');
      const input = $('.comp input');
      const send = $('.send');
      const cur = $('.cur');
      const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let userUntil = 0;
      let busy = false;
      let qi = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !form.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        form.classList.remove('is-auto');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      sheets.innerHTML = DOC.map(
        (s, i) =>
          `<article class="sheet" data-p="${i + 1}"><h2><small>Section ${i + 1}</small>${s.h}</h2>${s.cl.map(([n, t]) => `<p class="cl" data-c="${n}"><span class="tag">Cited</span><b>${n}</b><span class="t">${t}</span></p>`).join('')}<footer>${i + 1} / 6</footer></article>`
      ).join('');
      const pn = $('.pn');
      const clause = (n) => sheets.querySelector(`[data-c="${n}"]`);
      const goto = (n, only) => {
        const el = clause(n);
        if (!el) return;
        if (only) sheets.querySelectorAll('.cl.hl').forEach((c) => c.classList.remove('hl'));
        el.classList.add('hl');
        sheets.scrollTo({ top: el.closest('.sheet').offsetTop - 14, behavior: 'smooth' });
        root.querySelectorAll('.ref').forEach((r) => r.classList.toggle('on', r.dataset.c === n));
      };
      sheets.addEventListener('scroll', () => {
        let p = 1;
        sheets.querySelectorAll('.sheet').forEach((s) => {
          if (s.offsetTop - sheets.scrollTop < sheets.clientHeight * 0.45) p = Number(s.dataset.p);
        });
        pn.textContent = p;
      });
      const pageOf = (n) => n.split('.')[0];
      const refsHtml = (c) => c.map((n) => `<button type="button" class="ref" data-c="${n}">Clause ${n}<small>p.${pageOf(n)}</small></button>`).join('');
      const wire = (ex) => ex.querySelectorAll('.ref').forEach((r) => r.addEventListener('click', () => goto(r.dataset.c, true)));
      const toEnd = () => thread.scrollTo({ top: thread.scrollHeight, behavior: 'smooth' });
      const mark = $('.ch .mark').innerHTML;
      const avatar = `<span class="mark sm"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${mark}</svg></span>`;
      const ask = async (q, qa) => {
        busy = true;
        send.disabled = true;
        const ex = document.createElement('div');
        ex.className = 'ex';
        ex.innerHTML = `<div class="u in"><p>${esc(q)}</p></div><div class="a" style="display:flex;gap:10px">${avatar}<div class="ab" style="flex:1;min-width:0"><div class="think in"><p>Reading the agreement</p><i class="shim" style="width:90%"></i><i class="shim" style="width:68%"></i></div><p class="ans"></p><div class="refs"></div></div></div>`;
        thread.append(ex);
        while (thread.children.length > 3) thread.firstElementChild.remove();
        toEnd();
        await wait(900);
        if (!root.isConnected) return;
        ex.querySelector('.think').remove();
        const ans = ex.querySelector('.ans');
        const caret = document.createElement('i');
        caret.className = 'cr';
        ans.append(caret);
        let first = true;
        let n = 0;
        for (const part of qa.t.split(/(\{[\d.]+\})/)) {
          const m = part.match(/^\{([\d.]+)\}$/);
          if (m) {
            if (first) sheets.querySelectorAll('.cl.hl').forEach((c) => c.classList.remove('hl'));
            first = false;
            goto(m[1], false);
            await wait(900);
          } else {
            for (const w of part.split(/(\s+)/).filter(Boolean)) {
              const sp = document.createElement('span');
              sp.className = 'w';
              sp.textContent = w;
              ans.insertBefore(sp, caret);
              if (/\S/.test(w)) {
                await wait(46);
                if (++n % 9 === 0) toEnd();
              }
            }
          }
        }
        caret.remove();
        const refs = ex.querySelector('.refs');
        refs.innerHTML = refsHtml(qa.c);
        refs.querySelectorAll('.ref').forEach((r) => r.classList.add('in'));
        wire(ex);
        toEnd();
        busy = false;
        send.disabled = false;
      };
      const pick = (q) => {
        const hit = QA.findIndex((x) => x.k.test(q));
        if (hit < 0) return { q, c: [], t: 'I could not find that in this agreement. Try asking about renewal, fees, termination or liability.' };
        qi = hit;
        return QA[hit];
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = input.value.trim();
        if (busy || !q) return;
        input.value = '';
        ask(q, pick(q));
      });
      $('.sug').innerHTML = SUG.map((s) => `<button type="button">${s}</button>`).join('');
      $('.sug').querySelectorAll('button').forEach((b, i) =>
        b.addEventListener('click', () => {
          if (busy) return;
          const qa = QA[[1, 2, 3][i]];
          ask(qa.q, qa);
        })
      );
      // first frame: one finished exchange with its clause highlighted
      (() => {
        const qa = QA[0];
        const html = qa.t.replace(/\s*\{[\d.]+\}/g, '');
        const ex = document.createElement('div');
        ex.className = 'ex';
        ex.innerHTML = `<div class="u"><p>${qa.q}</p></div><div class="a" style="display:flex;gap:10px">${avatar}<div class="ab" style="flex:1;min-width:0"><p class="ans">${html}</p><div class="refs">${refsHtml(qa.c)}</div></div></div>`;
        thread.append(ex);
        wire(ex);
        clause('1.2').classList.add('hl');
        ex.querySelector('.ref').classList.add('on');
        input.value = '';
      })();

      // Autoplay: type a question, send it, and the document follows the citations; any real input hands over for 4s.
      cur.style.transform = 'translate(780px,690px)';
      (async () => {
        await wait(1500);
        qi = 0;
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          qi = (qi + 1) % QA.length;
          const qa = QA[qi];
          cur.classList.toggle('off', !moveTo(input, 0.35));
          await wait(850);
          form.classList.add('is-auto');
          let ok = true;
          for (const ch of qa.q) {
            if (!idle()) {
              ok = false;
              break;
            }
            input.value += ch;
            await wait(34);
          }
          form.classList.remove('is-auto');
          if (!ok) {
            input.value = '';
            continue;
          }
          await wait(300);
          moveTo(send, 0.5, 0.5);
          await wait(800);
          if (!idle()) {
            input.value = '';
            continue;
          }
          cur.classList.add('press');
          send.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          send.classList.remove('press');
          cur.classList.add('off');
          form.requestSubmit();
          await wait(1500);
          while (busy && root.isConnected) await wait(300);
          await wait(3800);
        }
      })();
    },
    prompt: `Build a "chat with a document" screen, full viewport (height: 100dvh, the document and the thread scroll independently).

Layout: grid of minmax(0, 1fr) and 392px. Left, a light surface: a 62px toolbar (file icon tile, file name "Master Services Agreement" with a subtitle, "Page 1 of 6" that updates from the scroll position, a small zoom control) above a scrolling stack of white paper sheets (max-width 560px, 6px radius, soft layered shadow, centered, 18px gap). Each sheet has a section label, a heading and numbered clauses (13px / 1.7) with the number in bold, plus a page number footer. Right, white with a 1px hairline: a 62px header (gradient tile, "Ask this document", "Answers cite the exact clause"), the message thread, three suggestion pills (Payment terms, Termination rights, Liability cap) and a composer with a send button.

Behavior and motion: asking shows two shimmer bars, then streams the answer word by word (a span per word fading in over 280ms, ~46ms apart) with a soft caret. The answer text contains citation markers; each time one is reached, the matching clause highlights and the document pane scrolls to its sheet (scrollTo with behavior smooth). The highlight is a background-image gradient on an inline span (box-decoration-break: clone) whose background-size animates from 0% to 100% over 800ms with an ease-out curve, plus a soft 3px ring and a small "Cited" tag that pops in. When the answer ends, citation buttons ("Clause 2.1  p.2") appear under it; clicking one re-highlights and scrolls to that clause. Unmatched questions get an honest "I could not find that in this agreement" with suggestions.

Accessibility: aria-live polite thread, buttons with focus rings, input has a label, prefers-reduced-motion removes per-word animation and smooth scrolling. Below 760px the document sits above the chat (about 38% height each) and suggestions hide. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (DocumentViewer, Sheet, Clause, ChatPane, Message, CitationButton, Composer).`,
  });

  ML.add({
    id: 'app-ai-writing-editor',
    cat: 'app-ai',
    title: 'AI writing editor',
    sub: 'Ghost text appears, Tab accepts it',
    html: `
<div class="app">
  <section class="ed">
    <header class="bar">
      <div class="dt"><span class="fi">${I(P.pen, 16)}</span><div><b>October product update</b><small class="sv">Saved just now</small></div></div>
      <div class="fmt" aria-hidden="true"><span><b>B</b></span><span><i>I</i></span><span>${I(P.list, 15)}</span><span>${I(P.link, 15)}</span></div>
      <span class="wc"><b class="wn">0</b> words</span>
      <button class="btn pri sh" type="button">Share</button>
    </header>
    <div class="page">
      <article class="doc">
        <p class="kick">Email draft</p>
        <h2>October at Halden</h2>
        <p class="para">Hi team, October was a big month for Halden. We shipped the new invoicing flow, cut page load time by 31%, and welcomed 212 new workspaces.</p>
        <p class="para">The invoicing redesign was the headline. Finance leads told us the old flow took too many clicks, so we rebuilt it around a single review screen.</p>
        <p class="para live"><span class="typed" contenteditable="plaintext-only" spellcheck="false" role="textbox" aria-label="Draft" aria-multiline="true"></span><span class="ghost" aria-hidden="true"></span></p>
      </article>
      <div class="hint" role="status">${I(P.mark, 15)}<span>Lumen suggests</span><button type="button" class="acc"><kbd>Tab</kbd>Accept</button><button type="button" class="esc"><kbd>Esc</kbd>Dismiss</button></div>
    </div>
  </section>
  <aside class="pan">
    <div class="ph"><span class="mark sm">${I(P.mark, 14)}</span><b>Writing assistant</b></div>
    <p class="lbl">Tone</p>
    <div class="seg" role="group" aria-label="Tone"><span class="sp" aria-hidden="true"></span></div>
    <p class="lbl">This draft</p>
    <div class="stats">
      <div class="card"><small>Words</small><b class="s1">0</b></div>
      <div class="card"><small>Reading time</small><b class="s2">1 min</b></div>
      <div class="card"><small>Accepted</small><b class="s3">0</b></div>
      <div class="card"><small>Grade level</small><b>7</b></div>
    </div>
    <p class="lbl">Recent suggestions</p>
    <ul class="rcl"><li><b>Reliability opener</b><small>Accepted, 2 min ago</small></li><li><b>Team templates beta</b><small>Accepted, 5 min ago</small></li><li><b>Shorter closing line</b><small>Dismissed, 9 min ago</small></li></ul>
    <p class="lbl">Quick actions</p>
    <div class="qa"><button type="button">${I(P.mark, 16)}<span>Shorten the opening</span>${I(P.check, 15, 2.6)}</button><button type="button">${I(P.pen, 16)}<span>Fix grammar</span>${I(P.check, 15, 2.6)}</button><button type="button">${I(P.chat, 16)}<span>Add a closing question</span>${I(P.check, 15, 2.6)}</button></div>
  </aside>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:grid;grid-template-columns:minmax(0,1fr) 288px;height:100%;background:var(--ml-bg)}
.d .ed{display:flex;flex-direction:column;min-width:0;min-height:0;background:var(--ml-surface)}
.d .bar{display:flex;flex:none;align-items:center;gap:14px;height:62px;padding:0 24px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .dt{display:flex;flex:1;align-items:center;gap:11px;min-width:0}
.d .dt b{display:block;font-size:14px;font-weight:650;letter-spacing:-.01em}
.d .dt small{font-size:12px;color:var(--ml-muted)}
.d .fi{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .fmt{display:flex;gap:2px;padding:3px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .fmt span{display:grid;place-items:center;width:30px;height:28px;border-radius:8px;font-size:14px;color:var(--ml-ink-2)}
.d .fmt span:first-child{background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.1)}
.d .wc{font-size:12.5px;color:var(--ml-muted);white-space:nowrap}
.d .wc b{font-weight:650;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .page{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;padding:26px 24px 90px}
.d .page::-webkit-scrollbar{display:none}
.d .doc{max-width:600px;min-height:100%;margin:0 auto;padding:44px 52px 40px;border-radius:12px;background:var(--ml-bg);box-shadow:0 1px 2px rgba(35,15,10,.06),0 14px 34px rgba(35,15,10,.08)}
.d .kick{font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .doc h2{margin:8px 0 18px;font-size:30px;line-height:1.12;font-weight:650;letter-spacing:-.035em}
.d .para{margin-bottom:14px;font-size:15.5px;line-height:1.75;color:var(--ml-ink-2)}
.d .typed{outline:0;white-space:pre-wrap;color:var(--ml-ink-2);caret-color:var(--ml-accent)}
.d .typed:focus{outline:0}
.d .ghost{color:#9AA7BD}
.d .ghost .w{display:inline}
.d .okf{border-radius:4px;animation:ed-flash 1.6s ease-out both}
.d .hint{position:absolute;left:50%;bottom:20px;display:flex;align-items:center;gap:10px;height:44px;padding:0 8px 0 14px;border-radius:999px;background:var(--ml-ink);box-shadow:0 10px 30px rgba(35,15,10,.28);font-size:12.5px;font-weight:600;color:#fff;transform:translate(-50%,10px);opacity:0;pointer-events:none;transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring);white-space:nowrap}
.d .hint.on{opacity:1;transform:translate(-50%,0);pointer-events:auto}
.d .hint > svg{color:var(--ml-accent-2)}
.d .hint > span{color:rgba(255,255,255,.72);font-weight:500}
.d .hint button{display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 11px 0 6px;border:0;border-radius:999px;background:rgba(255,255,255,.12);font-size:12.5px;font-weight:600;color:#fff;transition:transform 90ms ease-out,background-color .2s ease}
.d .hint button:hover{background:rgba(255,255,255,.2)}
.d .hint button:active,.d .hint button.press{transform:scale(.94)}
.d .hint kbd{padding:4px 6px;border-radius:6px;background:rgba(255,255,255,.18);font:600 10.5px/1 var(--ml-mono);transition:transform 90ms ease-out,background-color .15s ease}
.d .hint kbd.dn{transform:translateY(1px) scale(.9);background:var(--ml-accent)}
.d .pan{display:flex;flex-direction:column;min-height:0;padding:18px 18px 16px;border-left:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:none}
.d .pan::-webkit-scrollbar{display:none}
.d .ph{display:flex;align-items:center;gap:10px;padding:0 2px 18px;font-size:14px;font-weight:650;letter-spacing:-.01em}
.d .pan .lbl{padding:14px 2px 8px}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(3,1fr);padding:3px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg button{position:relative;z-index:1;height:34px;border:0;border-radius:9px;background:none;font-size:12.5px;font-weight:600;color:var(--ml-muted);transition:color .2s ease}
.d .seg button.on{color:var(--ml-ink)}
.d .sp{position:absolute;top:3px;bottom:3px;left:3px;width:calc((100% - 6px) / 3);border-radius:9px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px var(--ml-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .stats{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.d .stats .card{padding:12px 13px}
.d .stats small{display:block;font-size:11.5px;color:var(--ml-muted)}
.d .stats b{display:block;margin-top:5px;font-size:20px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .qa{display:flex;flex-direction:column;gap:8px}
.d .rcl{display:flex;flex-direction:column;gap:8px;list-style:none}
.d .rcl li{display:flex;flex-direction:column;gap:3px;padding:10px 12px;border-radius:12px;background:var(--ml-surface);font-size:13px}
.d .rcl b{font-weight:600}
.d .rcl small{font-size:11.5px;color:var(--ml-muted)}
.d .qa button{display:flex;align-items:center;gap:10px;height:42px;padding:0 12px;border:0;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2);text-align:left;transition:box-shadow .25s ease,background-color .25s ease,transform 90ms ease-out}
.d .qa button:hover{background:var(--ml-surface)}
.d .qa button:active{transform:scale(.98)}
.d .qa button > svg:first-child{color:var(--ml-accent)}
.d .qa span{flex:1}
.d .qa button > svg:last-child{color:#fff;opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .qa button.ok{box-shadow:inset 0 0 0 1.5px #1DB954}
.d .qa button.ok > svg:last-child{opacity:1;transform:none;border-radius:50%;background:#1DB954;padding:2px}
@keyframes ed-flash{0%{background:var(--ml-accent-soft);box-shadow:0 0 0 3px var(--ml-accent-soft)}100%{background:transparent;box-shadow:0 0 0 3px transparent}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .pan,.d .fmt,.d .sh{display:none}
  .d .bar{padding:0 16px}
  .d .page{padding:14px 12px 84px}
  .d .doc{padding:26px 22px}
  .d .doc h2{font-size:24px}
  .d .hint .esc{display:none}
}
@media (prefers-reduced-motion: reduce){.d .okf{animation:none}}`,
    run: (root) => {
      const TONES = ['Friendly', 'Concise', 'Formal'];
      const STEPS = [
        { typed: 'Next month we are focused on', g: [' making Halden faster and more reliable: quicker exports, fewer failed syncs, and a calmer status page.', ' reliability: faster exports, fewer failed syncs, a calmer status page.', ' improving platform reliability, including export performance, sync stability and status communication.'] },
        { typed: ' We are also opening the beta for team templates', g: [', so every new project can start from a setup your team already trusts.', ', so new projects start from a proven setup.', ', enabling new projects to begin from a standardized, approved configuration.'] },
        { typed: ' If you want early access, reply to this email', g: [' and Maya will add your workspace by Friday.', ' and we will add you by Friday.', ' and your workspace will be enabled by Friday, 16 October.'] },
      ];
      const $ = (s) => root.querySelector(s);
      const typed = $('.typed');
      const ghost = $('.ghost');
      const hint = $('.hint');
      const cur = $('.cur');
      const page = $('.page');
      const accBtn = $('.acc');
      const kbd = $('.acc kbd');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && root.getRootNode().activeElement !== typed;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      // tone control with a gliding highlight
      const seg = $('.seg');
      const sp = $('.sp');
      let tone = 0;
      let step = 0;
      let accepted = 0;
      let ghostOn = false;
      let gtoken = 0;
      TONES.forEach((t, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = t;
        b.className = i === 0 ? 'on' : '';
        b.addEventListener('click', () => setTone(i));
        seg.append(b);
      });
      const count = () => {
        const n = ([...root.querySelectorAll('.para:not(.live)')].map((p) => p.textContent).join(' ') + ' ' + typed.textContent).split(/\s+/).filter(Boolean).length;
        $('.wn').textContent = n;
        $('.s1').textContent = n;
        $('.s2').textContent = Math.max(1, Math.round(n / 200)) + ' min';
        $('.s3').textContent = accepted;
      };
      const showGhost = async (fast) => {
        const my = ++gtoken;
        ghost.textContent = '';
        ghostOn = true;
        hint.classList.add('on');
        const words = STEPS[step].g[tone].split(/(\s+)/).filter(Boolean);
        for (const w of words) {
          if (my !== gtoken || !root.isConnected) return;
          const sp2 = document.createElement('span');
          sp2.className = 'w';
          sp2.textContent = w;
          ghost.append(sp2);
          if (!fast && /\S/.test(w)) await wait(38);
        }
      };
      const hideGhost = () => {
        gtoken++;
        ghostOn = false;
        ghost.textContent = '';
        hint.classList.remove('on');
      };
      function setTone(i) {
        tone = i;
        seg.querySelectorAll('button').forEach((b, k) => b.classList.toggle('on', k === i));
        sp.style.transform = `translateX(${i * 100}%)`;
        if (ghostOn) showGhost(false);
      }
      const accept = () => {
        if (!ghostOn) return;
        const txt = ghost.textContent;
        hideGhost();
        const s = document.createElement('span');
        s.className = 'okf';
        s.textContent = txt;
        typed.append(s);
        accepted++;
        count();
        step = (step + 1) % STEPS.length;
        page.scrollTo({ top: page.scrollHeight, behavior: 'smooth' });
      };
      accBtn.addEventListener('click', accept);
      $('.esc').addEventListener('click', hideGhost);
      typed.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && ghostOn) {
          e.preventDefault();
          accept();
        } else if (e.key === 'Escape') hideGhost();
      });
      let idleT = 0;
      typed.addEventListener('input', () => {
        hideGhost();
        count();
        clearTimeout(idleT);
        idleT = setTimeout(() => root.isConnected && !root.dataset.paused && showGhost(false), 900);
      });
      root.querySelectorAll('.qa button').forEach((b) => b.addEventListener('click', () => b.classList.toggle('ok')));
      const reset = () => {
        hideGhost();
        typed.textContent = STEPS[0].typed;
        step = 0;
        accepted = 0;
        count();
      };
      reset();
      sp.style.transform = 'translateX(0%)';
      showGhost(true);

      // Autoplay: a suggestion appears, the tone changes once, then Tab (or a click on Accept) takes it.
      cur.style.transform = 'translate(640px,560px)';
      (async () => {
        await wait(2600);
        let cyc = 0;
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (!ghostOn) await showGhost(false);
          await wait(1400);
          if (!idle()) continue;
          if (cyc % 3 === 1) {
            const target = seg.querySelectorAll('button')[1];
            cur.classList.toggle('off', !moveTo(target, 0.5));
            await wait(850);
            if (!idle()) continue;
            cur.classList.add('press');
            await wait(130);
            cur.classList.remove('press');
            setTone(1);
            await wait(1700);
          }
          if (!idle()) continue;
          if (cyc % 2 === 0) {
            kbd.classList.add('dn');
            await wait(200);
            kbd.classList.remove('dn');
            accept();
          } else {
            cur.classList.toggle('off', !moveTo(accBtn, 0.5));
            await wait(850);
            if (!idle()) continue;
            cur.classList.add('press');
            accBtn.classList.add('press');
            await wait(130);
            cur.classList.remove('press');
            accBtn.classList.remove('press');
            cur.classList.add('off');
            accept();
          }
          cyc++;
          await wait(1800);
          if (!idle()) continue;
          if (accepted >= 3) {
            await wait(1800);
            reset();
            if (tone) setTone(0);
            await wait(900);
            await showGhost(false);
            continue;
          }
          // type the next chunk, character by character
          let ok = true;
          for (const ch of STEPS[step].typed) {
            if (!idle()) {
              ok = false;
              break;
            }
            typed.append(document.createTextNode(ch));
            count();
            await wait(42);
          }
          if (ok) await wait(300);
        }
      })();
    },
    prompt: `Build a document editor with an inline AI writing suggestion, full viewport (height: 100dvh).

Layout: grid of minmax(0, 1fr) and 288px. Left, a light surface: a 62px toolbar (doc title with a small icon tile and a "Saved just now" status, a compact formatting group, a live word count, a primary Share button) above a scrolling page area holding a white document sheet (max-width 600px, 12px radius, soft layered shadow, 44px / 52px padding): an uppercase kicker, a 30px / 1.12 heading with -0.035em tracking, then 15.5px / 1.75 paragraphs. The last paragraph is the live one. Right: a Writing assistant panel with a Tone segmented control (Friendly, Concise, Formal) with a sliding thumb, a 2x2 grid of stat cards (words, reading time, accepted suggestions, grade level) and a list of quick actions that show a green check when applied.

Behavior: the live paragraph is a contenteditable="plaintext-only" span followed by a non-editable ghost span in a muted blue-grey (about #9AA7BD). When the writer pauses for 900ms a suggestion streams into the ghost span word by word (a span per word fading in, ~38ms apart) and a dark floating pill rises at the bottom center of the page: "Lumen suggests", an Accept button with a Tab key cap and a Dismiss button with an Esc key cap. Tab (preventDefault) or clicking Accept turns the ghost text into real text and flashes it with an accent-soft background that fades out over 1.6s, increments the accepted counter, counts words, and scrolls the new line into view. Typing anything or pressing Esc clears the ghost. Changing the tone re-streams the suggestion in that voice.

Accessibility: the editable span has role="textbox" and a label, the hint pill is role="status", all buttons have focus rings, prefers-reduced-motion removes the flash. Below 760px hide the assistant panel and formatting group. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (EditorBar, DocumentSheet, GhostText, SuggestionPill, AssistantPanel, ToneSegment).`,
  });

  ML.add({
    id: 'app-ai-voice-assistant',
    cat: 'app-ai',
    title: 'Voice assistant',
    sub: 'Live waveform, transcript, answer card',
    html: `
<div class="app">
  <aside class="hist">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span>Lumen Voice</div>
    <p class="lbl">Today</p>
    <ul class="hl"></ul>
    <div class="vs"><p>Voice</p><span class="pill">${I(P.volume, 14)}Aria${I(P.down, 14)}</span></div>
  </aside>
  <main class="main">
    <header class="top"><h1>Talk to Lumen</h1><span class="live" data-s="idle"><i></i><b>Ready</b></span></header>
    <section class="stage card" data-s="idle">
      <div class="wave" aria-hidden="true"></div>
      <p class="say" aria-live="polite"></p>
    </section>
    <section class="resp card" aria-live="polite"></section>
    <form class="dock" novalidate>
      <label class="in">${I(P.chat, 17)}<input type="text" placeholder="Or type your question" aria-label="Type a question"></label>
      <button type="button" class="mic" aria-label="Start listening"><span class="m1">${I(P.mic, 22)}</span><span class="m2">${I(P.stop, 18)}</span></button>
    </form>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:grid;grid-template-columns:260px minmax(0,1fr);height:100%;background:var(--ml-surface)}
.d .hist{display:flex;flex-direction:column;min-height:0;padding:18px 14px 16px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .hist .brand{padding:0 6px 20px}
.d .hl{display:flex;flex-direction:column;gap:6px;list-style:none;overflow:hidden}
.d .hl li{display:flex;flex-direction:column;gap:3px;padding:10px 12px;border-radius:12px;background:var(--ml-surface);font-size:13px;font-weight:600;line-height:1.35;color:var(--ml-ink)}
.d .hl small{font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .hl li.in{animation:ai-in 520ms var(--ml-spring) both}
.d .vs{display:flex;align-items:center;justify-content:space-between;margin-top:auto;padding:14px 6px 0;border-top:1px solid var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .main{display:flex;flex-direction:column;gap:14px;min-width:0;min-height:0;padding:0 26px 20px}
.d .top{display:flex;flex:none;align-items:center;justify-content:space-between;height:66px}
.d .live{display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 12px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-muted)}
.d .live i{width:8px;height:8px;border-radius:50%;background:var(--ml-bar)}
.d .live[data-s=listen]{color:var(--ml-accent-ink);background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .live[data-s=listen] i{background:var(--ml-accent);animation:ai-caret 1s ease-in-out infinite}
.d .live[data-s=think] i,.d .live[data-s=speak] i{background:var(--ml-accent-2)}
.d .live[data-s=think] i{animation:ai-caret .8s ease-in-out infinite}
.d .stage{display:flex;flex:1 0 224px;flex-direction:column;justify-content:center;gap:18px;padding:22px 28px}
.d .wave{display:flex;align-items:center;justify-content:center;gap:5px;height:84px}
.d .wave i{display:block;width:5px;height:100%;border-radius:4px;background:var(--ml-bar);transform:scaleY(.1);transition:background-color .35s ease}
.d .stage[data-s=listen] .wave i{background:var(--ml-grad)}
.d .stage[data-s=think] .wave i{background:var(--ml-accent-line)}
.d .stage[data-s=speak] .wave i{background:var(--ml-accent-2)}
.d .say{min-height:70px;font-size:25px;line-height:1.3;font-weight:600;letter-spacing:-.025em;text-align:center;color:var(--ml-ink)}
.d .say .w.dim{color:var(--ml-muted)}
.d .say .w{transition:color .4s ease}
.d .resp{position:relative;flex:none;min-height:300px;padding:18px 20px;overflow:hidden}
.d .rh{display:flex;align-items:center;gap:11px}
.d .rh .ic{display:grid;place-items:center;width:34px;height:34px;border-radius:10px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .rh b{display:block;font-size:15px;font-weight:650;letter-spacing:-.015em}
.d .rh small{font-size:12px;color:var(--ml-muted)}
.d .rb{margin-top:14px}
.d .ev{display:flex;align-items:center;gap:14px;padding:8px 0;border-bottom:1px solid var(--ml-line);font-size:13.5px}
.d .ev:last-child{border-bottom:0}
.d .ev time{width:52px;flex:none;font:600 12px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d .ev span{flex:1;min-width:0;overflow:hidden;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .ev em{font-style:normal;font-size:12px;color:var(--ml-muted)}
.d .remind{display:flex;align-items:center;gap:14px;padding:14px;border-radius:14px;background:var(--ml-surface)}
.d .remind .ck{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#1DB954;color:#fff}
.d .remind b{display:block;font-size:14.5px;font-weight:650}
.d .remind small{font-size:12.5px;color:var(--ml-muted)}
.d .remind .btn{margin-left:auto}
.d .inv{display:flex;align-items:flex-end;justify-content:space-between;gap:20px}
.d .inv .n{font-size:40px;line-height:1;font-weight:650;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .inv .d2{display:inline-flex;margin-top:10px;padding:3px 8px;border-radius:999px;background:rgba(29,185,84,.1);font-size:12px;font-weight:600;color:#12893C}
.d .bars{display:flex;align-items:flex-end;gap:12px;height:92px}
.d .bars div{display:flex;flex-direction:column;align-items:center;gap:6px;height:100%;justify-content:flex-end}
.d .bars s{display:block;width:34px;border-radius:7px 7px 3px 3px;background:var(--ml-accent-line);transform-origin:50% 100%;animation:vo-grow 700ms var(--ml-spring) both}
.d .bars div:last-child s{background:var(--ml-grad)}
.d .bars small{font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .sp2{display:flex;align-items:center;gap:10px;margin-top:14px;font-size:13px;line-height:1.5;color:var(--ml-ink-2)}
.d .sp2 .mini{display:flex;align-items:flex-end;gap:2px;flex:none;height:14px;color:var(--ml-accent)}
.d .sp2 .mini u{display:block;width:3px;height:100%;border-radius:2px;background:currentColor;transform-origin:50% 100%;animation:vo-eq 800ms ease-in-out infinite}
.d .sp2 .mini u:nth-child(2){animation-delay:-.25s}.d .sp2 .mini u:nth-child(3){animation-delay:-.5s}
.d .sp2.done .mini u{animation:none;transform:scaleY(.35)}
.d .rsk{display:flex;flex-direction:column;gap:11px}
.d .rsk i{display:block;height:12px;border-radius:6px}
.d .dock{display:flex;flex:none;align-items:center;gap:12px}
.d .dock .in{display:flex;flex:1;align-items:center;gap:10px;height:54px;padding:0 16px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);color:var(--ml-muted);transition:box-shadow .25s ease}
.d .dock .in:focus-within,.d .dock .in.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .dock input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:14.5px;color:var(--ml-ink)}
.d .dock input::placeholder{color:#A1A1A6}
.d .mic{position:relative;display:grid;place-items:center;flex:none;width:58px;height:58px;border:0;border-radius:50%;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 10px 22px rgba(255,68,51,.28);transition:transform 90ms ease-out}
.d .mic:active,.d .mic.press{transform:scale(.92)}
.d .mic:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .mic span{grid-area:1/1;display:grid;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .mic .m2{opacity:0;transform:scale(.5)}
.d .mic.on .m1{opacity:0;transform:scale(.5)}
.d .mic.on .m2{opacity:1;transform:none}
@keyframes vo-grow{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@keyframes vo-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .hist{display:none}
  .d .main{padding:0 16px 16px}
  .d .stage{flex:none;height:200px;padding:18px 16px}
  .d .resp{flex:1;min-height:0}
  .d .say{font-size:20px}
  .d .wave{gap:3px}
  .d .wave i{width:4px}
  .d .inv .bars{display:none}
  .d .resp{padding:16px}
}
@media (prefers-reduced-motion: reduce){.d .sp2 .mini u,.d .live i{animation:none}}`,
    run: (root) => {
      const ICON = {
        cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
        bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
        chart: '<path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/>',
      };
      const svg = (d, s = 18) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const QA = [
        { q: "What's on my calendar tomorrow?", k: /calendar|tomorrow|schedule|meeting/i, ic: 'cal', title: 'Thursday, 15 October', sub: '4 events', time: '8:41 AM',
          body: () => [['9:30', 'Standup with Maya', '15 min'], ['11:00', 'Northgate renewal call', '45 min'], ['2:00', 'Focus block', '2 h'], ['4:30', 'Review Q4 plan with Tomas', '30 min']].map(([t, n, d]) => `<div class="ev"><time>${t}</time><span>${n}</span><em>${d}</em></div>`).join(''),
          say: 'You have four things tomorrow. Standup with Maya is first at 9:30, and the Northgate renewal call is at 11.' },
        { q: 'Remind me to send the Kestrel invoice on Friday morning', k: /remind|reminder|invoice on|send/i, ic: 'bell', title: 'Reminder set', sub: 'Friday, 16 October', time: '8:43 AM',
          body: () => `<div class="remind"><span class="ck">${svg('<path pathLength="1" d="M20 6 9 17l-5-5"/>', 16)}</span><div><b>Send the Kestrel &amp; Co invoice</b><small>Fri 16 Oct, 9:00 AM, notify on phone</small></div><button type="button" class="btn">Undo</button></div>`,
          say: 'Done. I will remind you on Friday at 9 in the morning.' },
        { q: 'How much did we invoice this week?', k: /how much|invoic|week|revenue|total/i, ic: 'chart', title: 'Invoiced this week', sub: 'Mon 12 to Wed 14 October', time: '8:46 AM',
          body: () => `<div class="inv"><div><p class="n">$18,640</p><span class="d2">+12% vs last week</span></div><div class="bars">${[['Mon', 42], ['Tue', 92], ['Wed', 46]].map(([d, h], i) => `<div><s style="height:${h}%;animation-delay:${i * 90}ms"></s><small>${d}</small></div>`).join('')}</div></div>`,
          say: 'You have invoiced eighteen thousand six hundred forty dollars this week, up twelve percent on last week.' },
      ];
      const $ = (s) => root.querySelector(s);
      const stage = $('.stage');
      const waveEl = $('.wave');
      const say = $('.say');
      const resp = $('.resp');
      const live = $('.live');
      const mic = $('.mic');
      const form = $('.dock');
      const input = $('.dock input');
      const box = $('.dock .in');
      const hl = $('.hl');
      const cur = $('.cur');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let userUntil = 0;
      let busy = false;
      let qi = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && root.getRootNode().activeElement !== input;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        box.classList.remove('is-auto');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      // ---- the live waveform: 48 bars driven by a smoothed noise envelope ----
      const N = 48;
      waveEl.innerHTML = '<i></i>'.repeat(N);
      const bars = [...waveEl.children];
      const level = new Array(N).fill(0.1);
      let mode = 'idle';
      let t0 = 0;
      const frame = () => {
        if (!root.isConnected) return;
        if (!root.dataset.paused) {
          t0 += 0.045;
          bars.forEach((b, i) => {
            const env = Math.sin((i / (N - 1)) * Math.PI);
            let target = 0.14 + 0.07 * Math.sin(t0 * 0.8 + i * 0.5);
            if (mode === 'listen') target = 0.12 + env * (0.25 + 0.75 * Math.abs(Math.sin(t0 * 1.7 + i * 0.37) * Math.sin(t0 * 0.9 + i * 1.3) + (Math.random() - 0.5) * 0.45));
            else if (mode === 'think') target = 0.08 + 0.1 * Math.max(0, Math.sin(t0 * 3 - i * 0.35));
            else if (mode === 'speak') target = 0.1 + env * 0.5 * Math.abs(Math.sin(t0 * 2.2 + i * 0.5) * Math.sin(t0 * 0.7 + i * 0.2));
            level[i] += (Math.min(1, target) - level[i]) * 0.3;
            b.style.transform = `scaleY(${level[i].toFixed(3)})`;
          });
        }
        setTimeout(frame, 34);
      };
      frame();
      const setState = (s) => {
        mode = s;
        stage.dataset.s = s;
        live.dataset.s = s;
        live.querySelector('b').textContent = { idle: 'Ready', listen: 'Listening', think: 'Thinking', speak: 'Speaking' }[s];
        mic.classList.toggle('on', s === 'listen');
        mic.setAttribute('aria-label', s === 'listen' ? 'Stop listening' : 'Start listening');
      };
      const words = (el, text, interim, ms) => {
        el.innerHTML = '';
        return (async () => {
          const parts = text.split(/(\s+)/).filter(Boolean);
          const real = parts.filter((p) => /\S/.test(p)).length;
          let n = 0;
          for (const p of parts) {
            const sp = document.createElement('span');
            sp.className = 'w';
            sp.textContent = p;
            if (/\S/.test(p)) n++;
            el.append(sp);
            if (interim) {
              const all = [...el.children].filter((c) => /\S/.test(c.textContent));
              all.forEach((c, k) => c.classList.toggle('dim', k >= all.length - 2 && n < real));
            }
            if (/\S/.test(p)) await wait(ms);
          }
          el.querySelectorAll('.dim').forEach((c) => c.classList.remove('dim'));
        })();
      };
      const render = (qa, instant) => {
        resp.innerHTML = `<div class="rh in"><span class="ic">${svg(ICON[qa.ic], 18)}</span><div><b>${qa.title}</b><small>${qa.sub}</small></div></div><div class="rb in" style="--i:1">${qa.body()}</div><div class="sp2 ${instant ? 'done' : ''} in" style="--i:2"><span class="mini"><u></u><u></u><u></u></span><span class="sayt">${instant ? qa.say : ''}</span></div>`;
        if (instant) resp.querySelectorAll('.in').forEach((n) => n.classList.remove('in'));
        const u = resp.querySelector('.remind .btn');
        if (u) u.addEventListener('click', () => ((u.textContent = 'Undone'), (u.disabled = true)));
      };
      const hist = (qa) => {
        const li = document.createElement('li');
        li.className = 'in';
        li.innerHTML = `<span>${qa.q}</span><small>${qa.time}</small>`;
        hl.prepend(li);
        while (hl.children.length > 5) hl.lastElementChild.remove();
      };
      const turn = async (q, qa) => {
        if (busy) return;
        busy = true;
        setState('listen');
        await words(say, q, true, 210);
        await wait(300);
        if (!root.isConnected) return;
        setState('think');
        resp.innerHTML = '<div class="rsk"><i class="shim" style="width:46%"></i><i class="shim" style="width:92%"></i><i class="shim" style="width:78%"></i><i class="shim" style="width:60%"></i></div>';
        await wait(1000);
        if (!root.isConnected) return;
        setState('speak');
        render(qa, false);
        hist(qa);
        const st = resp.querySelector('.sayt');
        await words(st, qa.say, false, 85);
        resp.querySelector('.sp2').classList.add('done');
        setState('idle');
        busy = false;
      };
      const matchQA = (q) => {
        const hit = QA.findIndex((x) => x.k.test(q));
        qi = hit >= 0 ? hit : (qi + 1) % QA.length;
        return QA[qi];
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = input.value.trim();
        if (busy || !q) return;
        input.value = '';
        turn(q, matchQA(q));
      });
      mic.addEventListener('click', () => {
        if (busy) return;
        qi = (qi + 1) % QA.length;
        turn(QA[qi].q, QA[qi]);
      });
      // first frame: the previous question and its answer, already on screen
      (() => {
        say.textContent = QA[0].q;
        render(QA[0], true);
        hl.innerHTML = [[QA[0].q, QA[0].time], ['Summarize my unread email', '8:12 AM'], ['Start a 25 minute focus timer', '7:58 AM']]
          .map(([q, t]) => `<li><span>${q}</span><small>${t}</small></li>`)
          .join('');
        setState('idle');
      })();

      // Autoplay: the cursor taps the mic, the bars come alive, the question appears and Lumen answers.
      cur.style.transform = 'translate(720px,690px)';
      (async () => {
        await wait(1800);
        qi = 0;
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          qi = (qi + 1) % QA.length;
          cur.classList.toggle('off', !moveTo(mic, 0.5, 0.5));
          await wait(900);
          if (!idle()) continue;
          cur.classList.add('press');
          mic.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          mic.classList.remove('press');
          cur.classList.add('off');
          turn(QA[qi].q, QA[qi]);
          await wait(1200);
          while (busy && root.isConnected) await wait(300);
          await wait(4200);
        }
      })();
    },
    prompt: `Build a voice assistant screen, full viewport (height: 100dvh).

Layout: grid of 260px and minmax(0, 1fr) on a light surface. Left (white, 1px hairline): the brand, a "Today" history list of past questions (each a 12px-radius chip with the question and a mono timestamp) and a voice selector pill at the bottom. Right: a 66px top row with the page title and a status pill (Ready, Listening, Thinking, Speaking), a 224px stage card, an answer card that takes the remaining height, and a dock with a text input ("Or type your question") and a 58px gradient round microphone button.

The stage holds a row of 48 rounded bars (5px wide, 84px tall, centered, 5px gap) and the transcript below it (25px / 1.3, weight 600, centered). Drive the bars in a requestAnimationFrame or 34ms timer loop: each bar's transform: scaleY is eased toward a target (value += (target - value) * 0.3). Idle is a tiny sine breathing, listening uses a sine envelope across the row multiplied by smoothed noise so it reacts like a live voice, thinking is a traveling ripple of small bars, speaking is a calmer envelope. Bar color: grey-blue idle, accent gradient while listening, a lighter accent while speaking.

Flow: tapping the mic (icon morphs to a stop square) starts listening and the transcript streams word by word, the last two words dimmed as interim text; then the answer card shows shimmer lines for about a second, and swaps to a structured card (title and subtitle, a calendar list, a reminder confirmation with a drawn check and Undo, or a big number with three growing bars) followed by a spoken caption that streams in with a three-bar equalizer. The question is added to history with the standard entrance (opacity + translateY 8px). Typing a question and pressing Enter does the same.

Accessibility: transcript and answer are aria-live polite, the mic is a button whose aria-label flips between Start and Stop listening, focus rings, prefers-reduced-motion removes the equalizer and the pulse. Below 760px hide the history column and shrink the transcript to 20px. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (HistoryList, Waveform, Transcript, AnswerCard, Dock, MicButton).`,
  });

  ML.add({
    id: 'app-ai-workflow-builder',
    cat: 'app-ai',
    title: 'Workflow automation builder',
    sub: 'Run lights the path node by node',
    html: `
<div class="app">
  <aside class="pal">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span>Lumen Flow</div>
    <label class="srch">${I(P.search, 16)}<input type="search" placeholder="Search nodes" aria-label="Search nodes"></label>
    <p class="lbl">Triggers</p>
    <div class="pi">${I(P.bolt, 16)}<span>Webhook</span></div>
    <div class="pi">${I(P.clock, 16)}<span>Schedule</span></div>
    <div class="pi">${I(P.mail, 16)}<span>Email received</span></div>
    <p class="lbl">AI</p>
    <div class="pi">${I(P.mark, 16)}<span>Lumen prompt</span></div>
    <div class="pi">${I(P.filter, 16)}<span>Classify text</span></div>
    <p class="lbl">Apps</p>
    <div class="pi">${I(P.users, 16)}<span>CRM contact</span></div>
    <div class="pi">${I(P.table, 16)}<span>Spreadsheet row</span></div>
    <div class="pi">${I(P.chat, 16)}<span>Team message</span></div>
  </aside>
  <main class="main">
    <header class="top">
      <div class="nm"><h1>Lead intake</h1><span class="act"><i></i>Active</span></div>
      <span class="last">Last run 2 min ago</span>
      <button class="btn pri run" type="button"><span class="r1">${I(P.play, 14)}Run workflow</span><span class="r2">Running</span></button>
    </header>
    <div class="cv"><div class="board">
      <svg class="edges" viewBox="0 0 860 520" aria-hidden="true"></svg>
    </div>
    <div class="exe card"><div class="eh"><b>Execution #128</b><span class="es">Success</span></div><ol class="el"></ol></div>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:grid;grid-template-columns:224px minmax(0,1fr);height:100%;background:var(--ml-bg)}
.d .pal{display:flex;flex-direction:column;min-height:0;padding:18px 14px 14px;border-right:1px solid var(--ml-line);overflow-y:auto;scrollbar-width:none}
.d .pal::-webkit-scrollbar{display:none}
.d .pal .brand{padding:0 6px 16px}
.d .srch{display:flex;align-items:center;gap:8px;height:38px;margin-bottom:12px;padding:0 11px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .srch input{flex:1;min-width:0;border:0;outline:0;background:none;font-size:13.5px;color:var(--ml-ink)}
.d .pal .lbl{padding:12px 6px 6px}
.d .pi{display:flex;align-items:center;gap:10px;height:38px;padding:0 10px;border-radius:10px;font-size:13.5px;font-weight:500;color:var(--ml-ink-2);transition:background-color .2s ease}
.d .pi svg{color:var(--ml-accent)}
.d .pi:hover{background:var(--ml-surface)}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:62px;padding:0 22px;border-bottom:1px solid var(--ml-line)}
.d .nm{display:flex;flex:1;align-items:center;gap:12px;min-width:0}
.d .act{display:inline-flex;align-items:center;gap:7px;height:26px;padding:0 10px;border-radius:999px;background:rgba(29,185,84,.1);font-size:12px;font-weight:600;color:#12893C}
.d .act i{width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .last{font:500 12px/1 var(--ml-mono);color:var(--ml-muted);white-space:nowrap}
.d .run{position:relative;display:grid;overflow:hidden;min-width:140px;border:0}
.d .run span{grid-area:1/1;display:inline-flex;align-items:center;justify-content:center;gap:7px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .run .r2{opacity:0;transform:translateY(10px)}
.d .run.busy .r1{opacity:0;transform:translateY(-10px)}
.d .run.busy .r2{opacity:1;transform:none}
.d .run.busy::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);background-size:220% 100%;animation:ai-sheen 1.1s linear infinite}
.d .cv{position:relative;flex:1;min-height:0;overflow:hidden;background:radial-gradient(circle,#CBD6E6 1px,transparent 1.3px) 0 0/22px 22px,var(--ml-surface)}
.d .board{position:absolute;left:0;top:0;width:860px;height:520px;transform-origin:0 0}
.d .edges{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.d .edges path{fill:none;stroke-linecap:round}
.d .edges .e0{stroke:#C3D0E3;stroke-width:2.2}
.d .edges .e1{stroke:var(--ml-accent);stroke-width:2.6;stroke-dasharray:1;stroke-dashoffset:1}
.d .edges .e1.on{animation:wf-draw 650ms var(--ml-ease) forwards}
.d .edges .e1.keep{stroke-dashoffset:0}
.d .edges text{font:600 11px var(--ml-font);fill:var(--ml-muted)}
.d .edges .tag rect{fill:#fff;stroke:var(--ml-line)}
.d .nd{position:absolute;left:0;top:0;display:flex;align-items:center;gap:11px;width:188px;height:68px;padding:0 12px;border-radius:15px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),0 1px 2px rgba(35,15,10,.05),0 8px 20px rgba(35,15,10,.07);cursor:grab;touch-action:none;user-select:none;transition:box-shadow .3s ease}
.d .nd.drag{cursor:grabbing;box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow-lg)}
.d .nd .ic{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .nd.trg .ic{background:var(--ml-grad);color:#fff}
.d .nd .tx{min-width:0}
.d .nd b{display:block;overflow:hidden;font-size:13.5px;font-weight:650;letter-spacing:-.01em;white-space:nowrap;text-overflow:ellipsis}
.d .nd small{display:block;margin-top:2px;overflow:hidden;font-size:11.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .pt{position:absolute;width:11px;height:11px;margin:-5.5px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2px #B3C2D9;transition:box-shadow .3s ease,background-color .3s ease}
.d .pt.i{left:0;top:34px}
.d .pt.o{left:188px;top:var(--ty,34px)}
.d .board.v .pt.i{left:94px;top:0}
.d .board.v .pt.o{left:var(--vx,94px);top:68px}
.d .nd.run{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 5px var(--ml-accent-soft),0 10px 24px rgba(255,68,51,.14)}
.d .nd.run .pt,.d .nd.ok .pt{box-shadow:inset 0 0 0 2px var(--ml-accent)}
.d .nd.run::after{content:"";position:absolute;left:14px;right:14px;bottom:7px;height:3px;border-radius:3px;background:linear-gradient(100deg,var(--ml-accent-soft) 30%,var(--ml-accent) 50%,var(--ml-accent-soft) 70%);background-size:220% 100%;animation:ai-sheen 1s linear infinite}
.d .nd .bd{position:absolute;right:-8px;top:-8px;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#1DB954;box-shadow:0 0 0 3px var(--ml-surface);color:#fff;opacity:0;transform:scale(.4)}
.d .nd.ok .bd{opacity:1;transform:none;transition:opacity .2s ease,transform .45s var(--ml-bounce)}
.d .nd .ms{position:absolute;left:12px;bottom:-22px;font:500 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted);opacity:0;transition:opacity .3s ease}
.d .nd.ok .ms{opacity:1}
.d .nd.off{opacity:.5}
.d .board.v .nd[data-id=A] .ms,.d .board.v .nd[data-id=B] .ms,.d .board.v .nd[data-id=C] .ms{left:198px;bottom:auto;top:26px}
.d .exe{position:absolute;left:0;right:0;bottom:0;display:flex;flex-direction:column;justify-content:center;height:136px;padding:12px 24px;border-radius:0;background:var(--ml-bg);box-shadow:0 -1px 0 var(--ml-line)}
.d .eh{display:flex;align-items:center;gap:10px;font-size:12.5px}
.d .eh b{font-weight:650}
.d .es{padding:3px 8px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11px;font-weight:600;color:#12893C}
.d .es.go{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .el{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;list-style:none}
.d .el li{display:flex;align-items:center;gap:8px;padding:7px 11px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12px;color:var(--ml-ink-2);animation:ai-in 420ms var(--ml-spring) both}
.d .el li svg{flex:none;color:#12893C}
.d .el li span{white-space:nowrap}
.d .el li em{font:500 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
@keyframes wf-draw{to{stroke-dashoffset:0}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .pal,.d .last{display:none}
  .d .top{padding:0 16px}
  .d .exe{display:none}
}
@media (prefers-reduced-motion: reduce){.d .nd.run::after,.d .run.busy::after{animation:none}}`,
    run: (root) => {
      const IC = {
        bolt: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
        mark: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>',
        branch: '<line x1="6" x2="6" y1="3" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
        users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
        mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
      };
      const NODES = [
        { id: 'A', ic: 'bolt', t: 'Form submitted', s: 'Webhook', k: 'trg', ms: 38 },
        { id: 'B', ic: 'mark', t: 'Score the lead', s: 'Lumen 2', ms: 1240 },
        { id: 'C', ic: 'branch', t: 'Hot lead?', s: 'Score above 70', k: 'br', ms: 12 },
        { id: 'D', ic: 'users', t: 'Create contact', s: 'CRM contact', ms: 310 },
        { id: 'E', ic: 'mail', t: 'Add to nurture', s: '5-step email', ms: 184 },
      ];
      // two layouts: wide (left to right) and tall (top to bottom, for phones)
      const LAY = {
        h: { w: 860, h: 520, p: { A: [0, 226], B: [224, 226], C: [448, 226], D: [672, 96], E: [672, 356] } },
        v: { w: 400, h: 480, p: { A: [106, 8], B: [106, 120], C: [106, 232], D: [8, 392], E: [204, 392] } },
      };
      let mode = 'h';
      NODES.forEach((n) => ([n.x, n.y] = LAY.h.p[n.id]));
      const EDGES = [['A', 'B', 0, ''], ['B', 'C', 0, ''], ['C', 'D', 0, 'Yes'], ['C', 'E', 1, 'No']];
      const $ = (s) => root.querySelector(s);
      const cv = $('.cv');
      const board = $('.board');
      const svg = $('.edges');
      const runBtn = $('.run');
      const cur = $('.cur');
      const es = $('.es');
      const list = $('.el');
      const SV = 'http://www.w3.org/2000/svg';
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
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
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const CHK = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const el = {};
      NODES.forEach((n) => {
        const d = document.createElement('div');
        d.className = 'nd ' + (n.k || '');
        d.innerHTML = `<span class="ic"><svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n.ic]}</svg></span><div class="tx"><b>${n.t}</b><small>${n.s}</small></div><i class="pt i"></i>${n.k === 'br' ? '<i class="pt o" style="--ty:22px;--vx:62px"></i><i class="pt o" style="--ty:46px;--vx:126px"></i>' : '<i class="pt o"></i>'}<span class="bd">${CHK}</span><em class="ms">${n.ms >= 1000 ? (n.ms / 1000).toFixed(1) + ' s' : n.ms + ' ms'}</em>`;
        d.dataset.id = n.id;
        board.append(d);
        el[n.id] = d;
        n.el = d;
      });
      const place = (n) => (n.el.style.transform = `translate(${n.x}px,${n.y}px)`);
      const byId = Object.fromEntries(NODES.map((n) => [n.id, n]));
      const pathFor = ([a, b, port]) => {
        const A = byId[a];
        const B = byId[b];
        if (mode === 'v') {
          const vx = A.x + (A.k === 'br' ? (port ? 126 : 62) : 94);
          const vy = A.y + 68;
          const wx = B.x + 94;
          const dy = Math.max(30, Math.abs(B.y - vy) * 0.5);
          return `M${vx},${vy} C${vx},${vy + dy} ${wx},${B.y - dy} ${wx},${B.y}`;
        }
        const x1 = A.x + 188;
        const y1 = A.y + (A.k === 'br' ? (port ? 46 : 22) : 34);
        const x2 = B.x;
        const y2 = B.y + 34;
        const dx = Math.max(50, Math.abs(x2 - x1) * 0.5);
        return `M${x1},${y1} C${x1 + dx},${y1} ${x2 - dx},${y2} ${x2},${y2}`;
      };
      const base = [];
      const glow = [];
      const tags = [];
      EDGES.forEach((e, i) => {
        const p0 = document.createElementNS(SV, 'path');
        p0.setAttribute('class', 'e0');
        const p1 = document.createElementNS(SV, 'path');
        p1.setAttribute('class', 'e1');
        p1.setAttribute('pathLength', '1');
        svg.append(p0, p1);
        base.push(p0);
        glow.push(p1);
        if (e[3]) {
          const g = document.createElementNS(SV, 'g');
          g.setAttribute('class', 'tag');
          g.innerHTML = `<rect width="34" height="20" rx="10"/><text x="17" y="14" text-anchor="middle">${e[3]}</text>`;
          svg.append(g);
          tags[i] = g;
        }
      });
      const draw = () => {
        NODES.forEach(place);
        EDGES.forEach((e, i) => {
          const d = pathFor(e);
          base[i].setAttribute('d', d);
          glow[i].setAttribute('d', d);
          if (tags[i]) {
            const A = byId[e[0]];
            const x = mode === 'v' ? A.x + (e[2] ? 126 : 62) - 17 : A.x + 188 + 14;
            const y = mode === 'v' ? A.y + 68 + 6 : A.y + (e[2] ? 46 : 22) - 10;
            tags[i].setAttribute('transform', `translate(${x},${y})`);
          }
        });
      };
      // fit the board into the canvas at any window size; phones get the tall layout
      let k = 1;
      const fit = () => {
        const w = cv.clientWidth;
        const h = cv.clientHeight - ($('.exe').offsetParent ? 136 : 0);
        if (!w || !h) return;
        const m = w < 600 ? 'v' : 'h';
        if (m !== mode || !board.style.width) {
          mode = m;
          const L = LAY[m];
          board.classList.toggle('v', m === 'v');
          board.style.width = L.w + 'px';
          board.style.height = L.h + 'px';
          svg.setAttribute('viewBox', `0 0 ${L.w} ${L.h}`);
          NODES.forEach((n) => ([n.x, n.y] = L.p[n.id]));
          draw();
        }
        const L = LAY[mode];
        k = Math.min(w / (L.w + 40), h / (L.h + 80), 1.3);
        board.style.transform = `translate(${(w - L.w * k) / 2}px,${(h - L.h * k) / 2 - 10}px) scale(${k})`;
      };
      fit();
      if (window.ResizeObserver) new ResizeObserver(fit).observe(cv);
      // drag a node: edges follow
      NODES.forEach((n) => {
        n.el.addEventListener('pointerdown', (e) => {
          const s = board.getBoundingClientRect().width / LAY[mode].w || 1;
          const sx = e.clientX;
          const sy = e.clientY;
          const ox = n.x;
          const oy = n.y;
          n.el.classList.add('drag');
          n.el.setPointerCapture(e.pointerId);
          const mv = (ev) => {
            n.x = Math.max(0, Math.min(LAY[mode].w - 188, ox + (ev.clientX - sx) / s));
            n.y = Math.max(0, Math.min(LAY[mode].h - 90, oy + (ev.clientY - sy) / s));
            draw();
          };
          const up = () => {
            n.el.classList.remove('drag');
            n.el.removeEventListener('pointermove', mv);
            n.el.removeEventListener('pointerup', up);
          };
          n.el.addEventListener('pointermove', mv);
          n.el.addEventListener('pointerup', up);
        });
      });
      const clear = () => {
        NODES.forEach((n) => n.el.classList.remove('run', 'ok', 'off'));
        glow.forEach((g) => g.classList.remove('on', 'keep'));
        list.innerHTML = '';
      };
      const fmt = (ms) => (ms >= 1000 ? (ms / 1000).toFixed(1) + ' s' : ms + ' ms');
      const addRow = (n) => {
        const li = document.createElement('li');
        li.innerHTML = `${CHK}<span>${n.t}</span><em>${fmt(n.ms)}</em>`;
        list.append(li);
      };
      let busy = false;
      let hot = true;
      const go = async () => {
        if (busy) return;
        busy = true;
        runBtn.classList.add('busy');
        $('.last').textContent = 'Running now';
        es.textContent = 'Running';
        es.classList.add('go');
        clear();
        const path = hot ? ['A', 'B', 'C', 'D'] : ['A', 'B', 'C', 'E'];
        byId[hot ? 'E' : 'D'].el.classList.add('off');
        let total = 0;
        for (let i = 0; i < path.length && root.isConnected; i++) {
          const n = byId[path[i]];
          n.el.classList.add('run');
          await wait(Math.max(520, Math.min(900, n.ms * 0.6)));
          n.el.classList.remove('run');
          n.el.classList.add('ok');
          addRow(n);
          total += n.ms;
          if (i < path.length - 1) {
            const ei = EDGES.findIndex((e) => e[0] === path[i] && e[1] === path[i + 1]);
            glow[ei].classList.add('on');
            await wait(560);
            glow[ei].classList.add('keep');
          }
        }
        es.textContent = 'Success';
        es.classList.remove('go');
        $('.last').textContent = 'Last run just now, ' + fmt(total);
        runBtn.classList.remove('busy');
        hot = !hot;
        busy = false;
      };
      runBtn.addEventListener('click', go);
      // first frame: the last run is already lit
      (() => {
        ['A', 'B', 'C', 'D'].forEach((id) => {
          byId[id].el.classList.add('ok');
          addRow(byId[id]);
        });
        byId.E.el.classList.add('off');
        [0, 1, 2].forEach((i) => glow[i].classList.add('keep'));
        hot = false;
      })();

      // Autoplay: the cursor presses Run and the path lights up; any real input hands over for 4s.
      cur.style.transform = 'translate(760px,690px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          cur.classList.toggle('off', !moveTo(runBtn, 0.5));
          await wait(900);
          if (!idle()) continue;
          cur.classList.add('press');
          runBtn.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          runBtn.classList.remove('press');
          cur.classList.add('off');
          go();
          await wait(1000);
          while (busy && root.isConnected) await wait(300);
          await wait(4200);
        }
      })();
    },
    prompt: `Build a workflow automation builder screen with a node canvas, full viewport (height: 100dvh).

Layout: grid of 224px and minmax(0, 1fr). Left, a node palette (white, 1px hairline): brand, a search field and grouped lists (Triggers, AI, Apps) of 38px rows with a blue line icon. Right: a 62px top bar (workflow name, a green "Active" pill, "Last run 2 min ago" in mono, a primary Run workflow button) above a canvas with a dotted grid background (radial-gradient dots every 22px on a light surface). Inside the canvas a fixed 860 x 520 board is scaled with transform to fit any window (compute scale = min(width / 900, height / 600, 1.3) in a ResizeObserver and center it). A small Execution card floats bottom-left with one row per executed node and its duration.

Nodes: absolutely positioned 188 x 68 cards (15px radius, hairline, layered shadow): a 38px tinted icon tile (the trigger is solid gradient), a 13.5px semibold title and a 11.5px muted subtitle, small round ports on the left and right edges (the branch node has two outputs, labeled Yes and No on pills). Connectors are SVG cubic beziers from the output port to the next input port: M x1,y1 C x1+dx,y1 x2-dx,y2 x2,y2 with dx = max(50, half the horizontal gap), 2.2px, a pale blue-grey stroke. Nodes are draggable with pointer events (setPointerCapture) and the connectors recompute while dragging.

Motion: Run clears the previous state, then walks the path node by node: the active node gets an accent ring with a soft 5px tint halo and a sheen bar along its bottom; when it finishes a green check badge pops in (spring with slight overshoot) and its duration fades in below; then the connector to the next node draws itself (a second accent path with pathLength="1", stroke-dasharray 1, stroke-dashoffset 1 to 0 over 650ms) before the next node starts. The branch alternates between its Yes and No outputs on each run, and the unused branch dims to 50%. The button swaps its label with a vertical slide and a sheen (no spinner); the Execution card gains a row per node and ends on "Success".

Accessibility: the Run button announces progress with aria-live on the status pill, nodes are focusable groups, prefers-reduced-motion drops the sheen. Below 760px hide the palette and the Execution card; the board scales to fit. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (NodePalette, Toolbar, Canvas, WorkflowNode, Connector, ExecutionCard).`,
  });

  ML.add({
    id: 'app-ai-usage-dashboard',
    cat: 'app-ai',
    title: 'Model usage dashboard',
    sub: 'Tokens, cost and latency by model',
    html: `
<div class="app">
  <header class="top">
    <div class="tt"><span class="mark">${I(P.mark, 16)}</span><div><h1>Model usage</h1><p class="sub"></p></div></div>
    <span class="liv"><i></i><b class="rps">42</b> req/s</span>
    <div class="seg" role="group" aria-label="Range"><span class="sp" aria-hidden="true"></span></div>
    <button class="btn exp" type="button">${I(P.dl, 15)}Export</button>
  </header>
  <main class="page">
    <div class="kpis"></div>
    <div class="row">
      <section class="card tk">
        <div class="ch"><div><p class="k">Tokens per day</p><p class="big tot"></p></div><p class="leg"></p></div>
        <div class="plot"><div class="yax"></div><div class="cols"></div><div class="tip" aria-hidden="true"></div></div>
        <div class="xax"></div>
      </section>
      <section class="card lt">
        <div class="ch"><div><p class="k">Latency</p><p class="big lat"></p></div><p class="leg l2"><i></i>p50<i class="b"></i>p95</p></div>
        <div class="lplot">
          <svg viewBox="0 0 400 190" preserveAspectRatio="none" aria-hidden="true">
            <g class="grid"><line x1="0" x2="400" y1="20" y2="20"/><line x1="0" x2="400" y1="80" y2="80"/><line x1="0" x2="400" y1="140" y2="140"/><line x1="0" x2="400" y1="189" y2="189"/></g>
            <path class="p95" pathLength="1"/><path class="p50" pathLength="1"/>
          </svg>
        </div>
      </section>
    </div>
    <section class="card tbl">
      <div class="th"><p class="k">By model</p></div>
      <table><thead><tr><th>Model</th><th data-k="req" class="n">Requests</th><th data-k="tok" class="n tkc">Tokens</th><th data-k="cost" class="n">Cost</th><th data-k="lat" class="n lac">p50</th><th class="sh">Share of cost</th></tr></thead><tbody></tbody></table>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:flex;flex-direction:column;height:100%}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:68px;padding:0 26px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .tt{display:flex;flex:1;align-items:center;gap:12px;min-width:0}
.d .tt h1{font-size:19px}
.d .sub{margin-top:2px;font-size:12.5px;color:var(--ml-muted)}
.d .liv{display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 12px;border-radius:999px;background:var(--ml-accent-soft);font-size:12.5px;font-weight:500;color:var(--ml-accent-ink);white-space:nowrap}
.d .liv b{min-width:20px;font-weight:650;font-variant-numeric:tabular-nums;text-align:right}
.d .liv i{position:relative;width:8px;height:8px;border-radius:50%;background:var(--ml-accent)}
.d .liv i::after{content:"";position:absolute;inset:0;border-radius:50%;background:var(--ml-accent);animation:ai-ping 1.8s ease-out infinite}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(3,64px);padding:3px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg button{position:relative;z-index:1;height:32px;border:0;border-radius:9px;background:none;font-size:12.5px;font-weight:600;color:var(--ml-muted);transition:color .2s ease}
.d .seg button.on{color:var(--ml-ink)}
.d .sp{position:absolute;top:3px;bottom:3px;left:3px;width:64px;border-radius:9px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px var(--ml-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .page{display:flex;flex:1;flex-direction:column;gap:14px;min-height:0;padding:20px 26px 22px;overflow-y:auto;scrollbar-width:thin}
.d .kpis{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.d .kpi{position:relative;padding:15px 16px 13px;overflow:hidden}
.d .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .v{margin-top:8px;font-size:26px;line-height:1;font-weight:650;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .dl{display:inline-flex;margin-top:10px;padding:3px 7px;border-radius:999px;background:rgba(29,185,84,.1);font-size:11.5px;font-weight:600;color:#12893C}
.d .dl.dn{background:rgba(255,59,48,.09);color:#D70015}
.d .spark{position:absolute;right:14px;bottom:14px;width:72px;height:30px;overflow:visible}
.d .spark path{fill:none;stroke:var(--ml-accent);stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.d .row{display:grid;flex:1 0 auto;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr);gap:14px}
.d .tk,.d .lt{display:flex;flex-direction:column;min-width:0;padding:16px 18px 14px}
.d .ch{display:flex;align-items:flex-start;justify-content:space-between;gap:10px}
.d .big{margin-top:6px;font-size:21px;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.d .leg{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--ml-muted);white-space:nowrap}
.d .leg i{width:8px;height:8px;border-radius:3px}
.d .leg i + i,.d .leg i ~ i{margin-left:6px}
.d .plot{position:relative;flex:1;min-height:172px;margin-top:12px}
.d .yax{position:absolute;inset:0 0 0 0;display:flex;flex-direction:column;justify-content:space-between;pointer-events:none}
.d .yax span{display:flex;align-items:center;gap:8px;height:0;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .yax span::after{content:"";flex:1;height:1px;background:var(--ml-line)}
.d .cols{position:absolute;inset:0 0 0 34px;display:flex;align-items:flex-end;gap:5px}
.d .col{position:relative;flex:1;display:flex;flex-direction:column-reverse;height:100%;justify-content:flex-start;border-radius:5px 5px 2px 2px;transform-origin:50% 100%;cursor:default}
.d .col.in{animation:us-grow 650ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 28ms)}
.d .col s{display:block;transition:opacity .2s ease}
.d .cols:hover .col:not(:hover) s,.d .cols.hov .col:not(.hv) s{opacity:.45}
.d .tip{position:absolute;top:-6px;z-index:5;min-width:130px;padding:9px 11px;border-radius:11px;background:var(--ml-ink);box-shadow:var(--ml-shadow-lg);font-size:11.5px;line-height:1.5;color:#fff;opacity:0;transform:translateY(4px);pointer-events:none;transition:opacity .2s ease,transform .3s var(--ml-ease),left .3s var(--ml-ease)}
.d .tip.on{opacity:1;transform:none}
.d .tip b{display:block;margin-bottom:3px;font-weight:600}
.d .tip span{display:flex;justify-content:space-between;gap:14px;color:rgba(255,255,255,.75);font-variant-numeric:tabular-nums}
.d .xax{display:flex;gap:5px;margin:8px 0 0 34px;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .xax span{flex:1;text-align:center;white-space:nowrap;overflow:visible}
.d .lplot{position:relative;flex:1;min-height:150px;margin-top:12px}
.d .lplot svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.d .grid line{stroke:var(--ml-line);stroke-width:1}
.d .lplot path{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1}
.d .p50{stroke:var(--ml-accent);stroke-width:2.6}
.d .p95{stroke:var(--ml-accent-2);stroke-width:2;opacity:.8}
.d .l2 i:first-of-type{background:var(--ml-accent)}
.d .l2 i.b{background:var(--ml-accent-2)}
.d .tbl{padding:16px 18px 8px}
.d .th{padding-bottom:6px}
.d table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.d th{padding:8px 10px;font-size:11px;font-weight:600;letter-spacing:.05em;text-align:left;text-transform:uppercase;color:var(--ml-muted);border-bottom:1px solid var(--ml-line)}
.d th.n,.d td.n{text-align:right}
.d th[data-k]{cursor:pointer}
.d th[data-k]:hover,.d th.on{color:var(--ml-accent-ink)}
.d td{padding:11px 10px;font-size:13.5px;border-bottom:1px solid var(--ml-line)}
.d tr:last-child td{border-bottom:0}
.d td .mm{display:flex;align-items:center;gap:10px;font-weight:600}
.d td .mm i{width:10px;height:10px;border-radius:3px}
.d .sh{width:24%}
.d .shb{display:block;height:8px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .shb s{display:block;height:100%;border-radius:inherit;transform-origin:0 50%;animation:us-bar 700ms var(--ml-ease) both}
.d tbody tr.in{animation:ai-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 50ms)}
@keyframes us-grow{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@keyframes us-bar{from{transform:scaleX(0)}to{transform:scaleX(1)}}
.d .page.swap .kpi,.d .page.swap .card.tk,.d .page.swap .card.lt{animation:ai-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 45ms)}
.d .page.swap .p50,.d .page.swap .p95{animation:ai-draw 1000ms var(--ml-ease) 150ms both}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{padding:0 16px;flex-wrap:wrap;height:auto;padding-top:12px;padding-bottom:12px}
  .d .exp,.d .liv{display:none}
  .d .seg{grid-template-columns:repeat(3,56px)}
  .d .sp{width:56px}
  .d .page{padding:16px}
  .d .kpis{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .row{grid-template-columns:minmax(0,1fr)}
  .d .tkc,.d .lac,.d td.tkc,.d td.lac,.d .sh,.d td.sh{display:none}
  .d .leg{display:none}
}
@media (prefers-reduced-motion: reduce){.d .col.in,.d .shb s,.d .liv i::after{animation:none}}`,
    run: (root) => {
      const MODELS = [
        { n: 'Lumen 2', c: 'var(--ml-accent)', price: 12, tpr: 2400, share: 0.6, lat: 1180 },
        { n: 'Lumen 2 Mini', c: 'var(--ml-accent-2)', price: 1.8, tpr: 900, share: 0.29, lat: 420 },
        { n: 'Lumen Embed', c: 'var(--ml-accent-line)', price: 0.2, tpr: 350, share: 0.11, lat: 96 },
      ];
      const RANGES = [7, 14, 30];
      const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const WD = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const $ = (s) => root.querySelector(s);
      const cols = $('.cols');
      const cur = $('.cur');
      const page = $('.page');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
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
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const rnd = (s) => {
        const x = Math.sin(s * 91.7 + 12.3) * 43758.5453;
        return x - Math.floor(x);
      };
      const gen = (n) => {
        const out = [];
        for (let i = 0; i < n; i++) {
          const date = new Date(Date.UTC(2026, 9, 14 - (n - 1 - i)));
          const wk = date.getUTCDay();
          const weekend = wk === 0 || wk === 6 ? 0.62 : 1;
          const base = (0.95 + 0.2 * Math.sin(i * 0.8 + 1) + (i / n) * 0.35 + rnd(i + n) * 0.12) * weekend;
          const v = MODELS.map((m, k) => base * m.share * (0.94 + rnd(i * 3 + k + n) * 0.12));
          const p50 = 800 - (i / n) * 60 + 60 * Math.sin(i * 0.9) + rnd(i + 5) * 26;
          out.push({ date, v, p50, p95: p50 * 2.7 + 150 * Math.sin(i * 0.6 + 1) + 60 });
        }
        return out;
      };
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)},${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)},${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
        }
        return d;
      };
      const roll = (el, to) => {
        const m = to.match(/^([^\d]*)([\d,.]+)(.*)$/);
        if (!m) return void (el.textContent = to);
        const end = parseFloat(m[2].replace(/,/g, ''));
        const dec = (m[2].split('.')[1] || '').length;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected) return;
          const q = root.dataset.paused ? 1 : Math.min(1, (t - t0) / 750);
          const v = end * (1 - Math.pow(1 - q, 3));
          el.textContent = m[1] + v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + m[3];
          if (q < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const sum = (a) => a.reduce((x, y) => x + y, 0);
      const fmtD = (d) => `${MON[d.getUTCMonth()]} ${d.getUTCDate()}`;
      const tip = $('.tip');
      let data = [];
      let sortK = 'cost';
      let range = 1;
      const showTip = (i) => {
        const col = cols.children[i];
        if (!col) return;
        const d = data[i];
        tip.innerHTML = `<b>${WD[d.date.getUTCDay()]}, ${fmtD(d.date)}</b>${MODELS.map((m, k) => `<span>${m.n}<em style="font-style:normal">${d.v[k].toFixed(2)}M</em></span>`).join('')}`;
        const px = cols.offsetLeft + col.offsetLeft;
        const w = $('.plot').offsetWidth;
        tip.style.left = `${Math.max(0, Math.min(w - 140, px - 60))}px`;
        tip.classList.add('on');
        cols.classList.add('hov');
        [...cols.children].forEach((c, k) => c.classList.toggle('hv', k === i));
      };
      const hideTip = () => {
        tip.classList.remove('on');
        cols.classList.remove('hov');
      };
      const render = (ri, animate) => {
        range = ri;
        const n = RANGES[ri];
        data = gen(n);
        const tok = data.map((d) => sum(d.v));
        const cost = data.map((d) => sum(d.v.map((x, k) => x * MODELS[k].price)));
        const req = data.map((d) => sum(d.v.map((x, k) => (x * 1e6) / MODELS[k].tpr)));
        const half = Math.floor(n / 2);
        const dlt = (a) => (sum(a.slice(half)) / half / (sum(a.slice(0, half)) / half) - 1) * 100;
        const avgLat = sum(data.map((d) => d.p50)) / n;
        const latD = (sum(data.slice(half).map((d) => d.p50)) / (n - half) / (sum(data.slice(0, half).map((d) => d.p50)) / half) - 1) * 100;
        const kp = [
          ['Tokens', sum(tok).toFixed(1) + 'M', dlt(tok), 1, tok],
          ['Cost', '$' + Math.round(sum(cost)).toLocaleString('en-US'), dlt(cost), 1, cost],
          ['Median latency', Math.round(avgLat) + ' ms', latD, -1, data.map((d) => d.p50)],
          ['Requests', Math.round(sum(req) / 1000) + 'k', dlt(req), 1, req],
        ];
        const first = data[0].date;
        $('.sub').textContent = `${fmtD(first)} to ${fmtD(data[n - 1].date)}, 2026 / All projects`;
        $('.kpis').innerHTML = kp
          .map(([l, v, dd, dir, ser], i) => {
            const good = dir > 0 ? dd >= 0 : dd <= 0;
            const mx = Math.max(...ser);
            const mn = Math.min(...ser);
            const pts = ser.map((s, j) => [(j * 72) / (n - 1), 28 - ((s - mn) / (mx - mn || 1)) * 24 - 2]);
            return `<div class="card kpi" style="--i:${i}"><p class="k">${l}</p><p class="v">${v}</p><span class="dl${good ? '' : ' dn'}">${dd >= 0 ? '+' : ''}${dd.toFixed(1)}%</span><svg class="spark" viewBox="0 0 72 30" aria-hidden="true"><path d="${curve(pts)}"/></svg></div>`;
          })
          .join('');
        // tokens chart
        const mx = Math.max(...tok);
        const top = Math.ceil((mx * 1.05) / 0.4) * 0.4;
        $('.yax').innerHTML = [top, (top * 3) / 4, top / 2, top / 4, 0].map((v) => `<span>${v.toFixed(1)}M</span>`).join('');
        cols.innerHTML = data
          .map((d, i) => `<div class="col${animate ? ' in' : ''}" style="--i:${i};height:${((tok[i] / top) * 100).toFixed(1)}%;max-height:100%"><div style="display:flex;flex-direction:column-reverse;height:100%;border-radius:inherit;overflow:hidden">${d.v.map((x, k) => `<s style="height:${((x / tok[i]) * 100).toFixed(2)}%;background:${MODELS[k].c}"></s>`).join('')}</div></div>`)
          .join('');
        [...cols.children].forEach((c, i) => c.addEventListener('mouseenter', () => showTip(i)));
        cols.addEventListener('mouseleave', hideTip);
        $('.xax').innerHTML = data.map((d, i) => `<span>${n <= 14 || i % 3 === 0 ? d.date.getUTCDate() : ''}</span>`).join('');
        $('.tot').textContent = sum(tok).toFixed(1) + 'M tokens';
        $('.leg').innerHTML = MODELS.map((m) => `<i style="background:${m.c}"></i>${m.n}`).join('');
        // latency chart
        const lmax = Math.max(...data.map((d) => d.p95)) * 1.1;
        const lp = (k) => data.map((d, i) => [(i / (n - 1)) * 400, 188 - (d[k] / lmax) * 180]);
        $('.p50').setAttribute('d', curve(lp('p50')));
        $('.p95').setAttribute('d', curve(lp('p95')));
        $('.lat').textContent = Math.round(avgLat) + ' ms median';
        // table
        const rows = MODELS.map((m, k) => {
          const t = sum(data.map((d) => d.v[k]));
          return { m, req: (t * 1e6) / m.tpr, tok: t, cost: t * m.price, lat: m.lat * (0.96 + rnd(k + n) * 0.08) };
        });
        const tc = sum(rows.map((r) => r.cost));
        rows.sort((a, b) => b[sortK] - a[sortK]);
        $('tbody').innerHTML = rows
          .map((r, i) => `<tr class="${animate ? 'in' : ''}" style="--i:${i}"><td><span class="mm"><i style="background:${r.m.c}"></i>${r.m.n}</span></td><td class="n">${Math.round(r.req / 1000).toLocaleString('en-US')}k</td><td class="n tkc">${r.tok.toFixed(1)}M</td><td class="n">$${r.cost < 10 ? r.cost.toFixed(2) : Math.round(r.cost).toLocaleString('en-US')}</td><td class="n lac">${Math.round(r.lat)} ms</td><td class="sh"><span class="shb"><s style="width:${((r.cost / tc) * 100).toFixed(1)}%;background:${r.m.c}"></s></span></td></tr>`)
          .join('');
        root.querySelectorAll('th[data-k]').forEach((h) => h.classList.toggle('on', h.dataset.k === sortK));
        if (animate) {
          page.classList.remove('swap');
          void page.offsetWidth;
          page.classList.add('swap');
          root.querySelectorAll('.kpi .v').forEach((el, i) => roll(el, kp[i][1]));
        }
      };
      // range control with a gliding thumb
      const seg = $('.seg');
      const sp = $('.sp');
      RANGES.forEach((n, i) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.textContent = n + ' days';
        b.className = i === 1 ? 'on' : '';
        b.addEventListener('click', () => setRange(i));
        seg.append(b);
      });
      const setRange = (i) => {
        if (i === range) return;
        seg.querySelectorAll('button').forEach((b, k) => b.classList.toggle('on', k === i));
        sp.style.transform = `translateX(${i * 100}%)`;
        hideTip();
        render(i, true);
      };
      root.querySelectorAll('th[data-k]').forEach((h) =>
        h.addEventListener('click', () => {
          sortK = h.dataset.k;
          render(range, false);
          root.querySelectorAll('tbody tr').forEach((r, i) => {
            r.classList.add('in');
            r.style.setProperty('--i', i);
          });
        })
      );
      $('.exp').addEventListener('click', () => {
        const b = $('.exp');
        b.lastChild.textContent = 'Exported';
        setTimeout(() => (b.lastChild.textContent = 'Export'), 1500);
      });
      sp.style.transform = 'translateX(100%)';
      render(1, false);
      // live request rate
      (async () => {
        let v = 42;
        const el = $('.rps');
        while (root.isConnected) {
          await wait(1100);
          v = Math.max(28, Math.min(61, v + Math.round((Math.random() - 0.5) * 9)));
          el.textContent = v;
        }
      })();

      // Autoplay: hover a bar for its tooltip, then switch the range; any real input hands over for 4s.
      cur.style.transform = 'translate(500px,560px)';
      (async () => {
        await wait(1600);
        let step = 0;
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const bar = cols.children[Math.floor(cols.children.length * 0.7)];
          cur.classList.toggle('off', !moveTo(bar, 0.5, 0.4));
          await wait(850);
          if (!idle()) continue;
          showTip(Math.floor(cols.children.length * 0.7));
          await wait(1700);
          if (!idle()) {
            hideTip();
            continue;
          }
          hideTip();
          const to = [2, 0, 1][step++ % 3];
          const b = seg.querySelectorAll('button')[to];
          cur.classList.toggle('off', !moveTo(b, 0.5));
          await wait(850);
          if (!idle()) continue;
          cur.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          b.click();
          await wait(5200);
        }
      })();
    },
    prompt: `Build an AI model usage dashboard, full viewport (height: 100dvh, the page region scrolls, the header does not).

Layout: a 68px header (gradient logo tile, "Model usage", a range subtitle like "Oct 1 to Oct 14, 2026 / All projects", a live pill with a pinging dot and a "42 req/s" counter, a 3-option segmented range control, an Export button). Page (light surface, 20px / 26px padding): 1) four KPI cards (Tokens 14.2M, Cost, Median latency, Requests) each with label, 26px tabular number, a delta pill (green when good, red when bad; for latency a decrease is good) and a tiny sparkline; 2) a two-column row (1.5fr / 1fr): a stacked bar chart "Tokens per day" (one column per day, segments per model in three blue steps, y-axis labels in mono with hairline gridlines, x labels as day numbers, a legend) and a Latency card with smooth p50 and p95 lines; 3) a "By model" table (model with color chip, requests, tokens, cost, p50, and a share-of-cost bar), sortable by clicking a column header.

Data must be coherent: derive tokens per model from a daily total and a share, cost from price per million tokens, requests from average tokens per request, so every KPI and the table add up for the selected range. Compute weekday and date labels from real Date objects.

Motion: switching the range slides the segmented thumb (transform with a spring), re-staggers the KPI cards and charts (opacity + translateY 8px, 45ms apart), regrows the bars (scaleY from the bottom, 650ms spring, 28ms stagger), redraws both lines (pathLength 1, dashoffset 1 to 0 over 1s) and counts the KPI numbers up over 750ms. Hovering a bar dims the others, and a dark tooltip slides to it with the per-model values. The live counter changes about once a second.

Accessibility: the range control is a button group with aria-pressed, table headers are buttons or have aria-sort, tooltips also appear on focus, prefers-reduced-motion disables the growth and ping. Below 760px KPIs go two per row, the charts stack, and the table drops the tokens, latency and share columns. Use your accent color with two lighter steps for the other models. Plain HTML, CSS and JS, no libraries; React-friendly structure (UsageHeader, RangeSegment, KpiCard, StackedBars, LatencyChart, ModelTable).`,
  });

  ML.add({
    id: 'app-ai-meeting-notes',
    cat: 'app-ai',
    title: 'Meeting transcription',
    sub: 'Live transcript, summary, action items',
    html: `
<div class="app">
  <header class="top">
    <span class="mark">${I(P.mic, 16)}</span>
    <div class="ti"><h1>Northgate renewal call</h1><p>Wed 14 Oct, 11:00 AM <span>/</span> Lumen notes</p></div>
    <span class="rec"><i></i>REC <b class="clk">00:13:05</b></span>
    <button class="btn lv" type="button">${I(P.pause, 14)}<span>Pause notes</span></button>
  </header>
  <div class="body">
    <section class="tr">
      <div class="ppl"></div>
      <div class="lines" aria-live="polite"></div>
      <p class="foot"><span class="eqm"><u></u><u></u><u></u><u></u></span><span class="ft">Transcribing in English</span></p>
    </section>
    <aside class="side">
      <section class="card sum"><div class="ch"><p class="k">Summary</p><span class="auto">${I(P.mark, 12)}Auto</span></div><ul class="sl"></ul></section>
      <section class="card act"><div class="ch"><p class="k">Action items</p><em class="cnt">1</em></div><ul class="al"></ul></section>
    </aside>
  </div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:flex;flex-direction:column;height:100%;background:var(--ml-surface)}
.d .top{display:flex;flex:none;align-items:center;gap:14px;height:68px;padding:0 26px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .ti{flex:1;min-width:0}
.d .ti h1{font-size:19px}
.d .ti p{margin-top:3px;font-size:12.5px;color:var(--ml-muted)}
.d .ti span{margin:0 5px;color:var(--ml-bar)}
.d .rec{display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 13px;border-radius:999px;background:rgba(255,59,48,.08);font-size:12px;font-weight:650;letter-spacing:.04em;color:#D70015;white-space:nowrap}
.d .rec i{width:8px;height:8px;border-radius:50%;background:#FF3B30;animation:ai-caret 1.2s ease-in-out infinite}
.d .rec b{font:600 12.5px/1 var(--ml-mono);letter-spacing:0;font-variant-numeric:tabular-nums}
.d .rec.off{background:var(--ml-surface);color:var(--ml-muted)}
.d .rec.off i{background:var(--ml-muted);animation:none}
.d .body{display:grid;flex:1;grid-template-columns:minmax(0,1fr) 336px;gap:16px;min-height:0;padding:18px 26px 22px}
.d .tr{display:flex;flex-direction:column;min-width:0;min-height:0;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);overflow:hidden}
.d .ppl{display:flex;flex:none;gap:10px;padding:14px 18px;border-bottom:1px solid var(--ml-line)}
.d .pp{display:flex;align-items:center;gap:9px;padding:5px 12px 5px 5px;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:box-shadow .3s ease,background-color .3s ease}
.d .pp .av{width:30px;height:30px}
.d .pp p{display:flex;flex-direction:column;font-size:12.5px;font-weight:600;line-height:1.2}
.d .pp small{font-size:11px;font-weight:500;color:var(--ml-muted)}
.d .pp.sp{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1.5px var(--ml-accent)}
.d .lines{display:flex;flex:1;flex-direction:column;gap:16px;min-height:0;padding:18px 20px 8px;overflow-y:auto;scrollbar-width:none}
.d .lines::-webkit-scrollbar{display:none}
.d .ln{display:flex;gap:12px}
.d .ln .av{margin-top:1px}
.d .who{display:flex;align-items:baseline;gap:8px;font-size:13px}
.d .who b{font-weight:650}
.d .who time{font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .tx{margin-top:3px;font-size:14.5px;line-height:1.6;color:var(--ml-ink-2)}
.d .tx .mk{background:linear-gradient(var(--ml-accent-soft),var(--ml-accent-soft)) no-repeat 0 0 / 0% 100%;border-radius:4px;color:var(--ml-ink);-webkit-box-decoration-break:clone;box-decoration-break:clone;transition:background-size 700ms var(--ml-ease)}
.d .tx .mk.on{background-size:100% 100%;box-shadow:0 0 0 2px var(--ml-accent-soft)}
.d .tag{display:inline-flex;align-items:center;gap:5px;margin-left:8px;padding:2px 8px;border-radius:999px;background:var(--ml-accent);font-size:10.5px;font-weight:650;color:#fff;vertical-align:1px;animation:ai-in 420ms var(--ml-spring) both}
.d .foot{display:flex;flex:none;align-items:center;gap:10px;padding:10px 20px 14px;font-size:12px;color:var(--ml-muted)}
.d .eqm{display:flex;align-items:flex-end;gap:2px;height:12px;color:var(--ml-accent)}
.d .eqm u{display:block;width:3px;height:100%;border-radius:2px;background:currentColor;transform-origin:50% 100%;animation:mt-eq 900ms ease-in-out infinite}
.d .eqm u:nth-child(2){animation-delay:-.2s}.d .eqm u:nth-child(3){animation-delay:-.45s}.d .eqm u:nth-child(4){animation-delay:-.7s}
.d .paused .eqm u{animation:none;transform:scaleY(.25)}
.d .side{display:flex;flex-direction:column;gap:14px;min-width:0;min-height:0}
.d .side .card{display:flex;flex-direction:column;min-height:0;padding:16px 18px}
.d .sum{flex:none}
.d .act{flex:1}
.d .ch{display:flex;align-items:center;justify-content:space-between}
.d .k{font-size:13px;font-weight:650;letter-spacing:-.005em}
.d .auto{display:inline-flex;align-items:center;gap:5px;padding:3px 8px;border-radius:999px;background:var(--ml-accent-soft);font-size:11px;font-weight:600;color:var(--ml-accent-ink)}
.d .cnt{padding:4px 8px;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:600 11px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .sl{display:flex;flex-direction:column;gap:9px;margin-top:12px;list-style:none}
.d .sl li{position:relative;padding-left:16px;font-size:13px;line-height:1.5;color:var(--ml-ink-2)}
.d .sl li::before{content:"";position:absolute;left:2px;top:.62em;width:6px;height:6px;border-radius:50%;background:var(--ml-accent)}
.d .al{display:flex;flex-direction:column;gap:10px;margin-top:12px;min-height:0;overflow-y:auto;list-style:none;scrollbar-width:none}
.d .al::-webkit-scrollbar{display:none}
.d .ai{display:flex;align-items:flex-start;gap:11px;padding:12px;border-radius:13px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);transition:background-color .3s ease}
.d .ai.new{animation:ai-in 520ms var(--ml-spring) both,mt-new 2.2s ease-out both}
.d .cb{position:relative;flex:none;display:grid;place-items:center;width:20px;height:20px;margin-top:1px;border:0;border-radius:6px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .2s ease,box-shadow .2s ease}
.d .cb svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .35s var(--ml-bounce)}
.d .ai.dn .cb{background:var(--ml-accent);box-shadow:none}
.d .ai.dn .cb svg{opacity:1;transform:none}
.d .ai.dn .at{color:var(--ml-muted);text-decoration:line-through}
.d .at{display:block;font-size:13.5px;font-weight:600;line-height:1.35}
.d .am{display:flex;align-items:center;gap:8px;margin-top:7px;font-size:11.5px;color:var(--ml-muted)}
.d .am .av{width:20px;height:20px;font-size:9px}
.d .am em{padding:2px 7px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 11px/1.3 var(--ml-mono);font-style:normal;color:var(--ml-ink-2)}
.d .sl li.in{animation:ai-in 480ms var(--ml-spring) both}
@keyframes mt-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
@keyframes mt-new{0%{background:var(--ml-accent-soft)}100%{background:var(--ml-surface)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .body{grid-template-columns:minmax(0,1fr);grid-template-rows:minmax(0,1fr) minmax(0,auto);padding:12px 14px 16px;overflow-y:auto}
  .d .tr{min-height:340px}
  .d .side{min-height:auto}
  .d .top{padding:0 16px}
  .d .lv span{display:none}
  .d .lv{padding:0 11px}
  .d .pp small,.d .pp:nth-child(n+3){display:none}
  .d .rec{display:none}
}
@media (prefers-reduced-motion: reduce){.d .eqm u,.d .rec i{animation:none}}`,
    run: (root) => {
      const PEOPLE = { MR: ['Maya Reyes', 'Halden'], AL: ['Ana Lim', 'Northgate'], TL: ['Tomas Lindqvist', 'Halden'] };
      const PRE = [
        ['MR', '11:02', "Thanks for joining, Ana. Today we're reviewing the usage numbers and the renewal terms."],
        ['AL', '11:03', 'Sounds good. We grew from 18 to 31 seats this year, so pricing is the main question.'],
        ['TL', '11:05', 'With 31 seats, the annual tier saves you about 14 percent against monthly.'],
        ['AL', '11:07', 'That helps. And does the plan still include the AI assistant?'],
        ['MR', '11:08', 'Yes, Lumen is included on every plan, with a monthly credit allowance.'],
      ];
      const LIVE = [
        { p: 'MR', t: '11:12', x: "Before we wrap, let's agree on the renewal timeline." },
        { p: 'AL', t: '11:13', x: 'We can sign by the end of the month if our legal team sees the draft by Friday.' },
        { p: 'MR', t: '11:13', x: "Perfect. I'll send the draft over tomorrow, and Tomas will update the pricing sheet.", ph: "I'll send the draft over tomorrow", a: ['Send renewal draft to Northgate legal', 'MR', 'Thu 15 Oct'], s: 'Renewal draft goes to Northgate legal by Friday.' },
        { p: 'TL', t: '11:14', x: "Yes, I'll have the new tiers in the sheet by Friday.", ph: "I'll have the new tiers in the sheet by Friday", a: ['Update the pricing sheet with new tiers', 'TL', 'Fri 16 Oct'] },
        { p: 'AL', t: '11:15', x: 'Great. Can we also schedule a check-in for November?' },
        { p: 'MR', t: '11:15', x: "I'll book it for Tuesday, 3 November, so we stay on track.", ph: "I'll book it for Tuesday, 3 November", a: ['Book check-in for Tue 3 Nov', 'MR', 'Fri 16 Oct'], s: 'Next check-in set for Tuesday, 3 November.' },
      ];
      const SUM0 = ['Northgate grew from 18 to 31 seats this year.', 'The annual tier saves about 14% against monthly at 31 seats.', 'The AI assistant stays included on every plan.'];
      const ACT0 = [['Share the usage report with Ana', 'TL', 'Thu 15 Oct']];
      const CHK = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
      const BOLT = '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>';
      const $ = (s) => root.querySelector(s);
      const lines = $('.lines');
      const al = $('.al');
      const sl = $('.sl');
      const cur = $('.cur');
      const lv = $('.lv');
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(60);
          if (!root.dataset.paused) t += 60;
        }
      };
      let userUntil = 0;
      let live = true;
      const idle = () => !root.dataset.paused && performance.now() > userUntil;
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.5) => {
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const ini = (p) => PEOPLE[p][0].split(' ').map((w) => w[0]).join('');
      $('.ppl').innerHTML = Object.entries(PEOPLE)
        .map(([k, [n, o]]) => `<div class="pp" data-p="${k}"><span class="av">${ini(k)}</span><p>${n}<small>${o}</small></p></div>`)
        .join('');
      const speak = (p) => root.querySelectorAll('.pp').forEach((e) => e.classList.toggle('sp', e.dataset.p === p));
      const lineEl = (p, t) => {
        const d = document.createElement('div');
        d.className = 'ln';
        d.innerHTML = `<span class="av">${ini(p)}</span><div><p class="who"><b>${PEOPLE[p][0]}</b><time>${t}</time></p><p class="tx"></p></div>`;
        return d;
      };
      const toEnd = () => lines.scrollTo({ top: lines.scrollHeight, behavior: 'smooth' });
      const actHtml = ([t, p, due], fresh) =>
        `<li class="ai${fresh ? ' new' : ''}"><button type="button" class="cb" aria-label="Mark done">${CHK}</button><div><span class="at">${t}</span><p class="am"><span class="av">${ini(p)}</span>${PEOPLE[p][0].split(' ')[0]}<em>${due}</em></p></div></li>`;
      const wireAct = () => al.querySelectorAll('.cb').forEach((b) => (b.onclick = () => b.closest('.ai').classList.toggle('dn')));
      const count = () => ($('.cnt').textContent = al.children.length);
      const reset = () => {
        lines.innerHTML = '';
        PRE.forEach(([p, t, x]) => {
          const d = lineEl(p, t);
          d.querySelector('.tx').textContent = x;
          lines.append(d);
        });
        sl.innerHTML = SUM0.map((s) => `<li>${s}</li>`).join('');
        al.innerHTML = ACT0.map((a) => actHtml(a, false)).join('');
        wireAct();
        count();
        speak('MR');
        lines.scrollTop = lines.scrollHeight;
      };
      reset();
      // meeting clock
      let secs = 13 * 60 + 5;
      (async () => {
        while (root.isConnected) {
          await wait(1000);
          if (!live) continue;
          secs++;
          const h = Math.floor(secs / 3600);
          const m = Math.floor((secs % 3600) / 60);
          $('.clk').textContent = `0${h}:${String(m).padStart(2, '0')}:${String(secs % 60).padStart(2, '0')}`;
        }
      })();
      const setLive = (on) => {
        live = on;
        lv.querySelector('span').textContent = on ? 'Pause notes' : 'Resume notes';
        $('.rec').classList.toggle('off', !on);
        $('.tr').classList.toggle('paused', !on);
        $('.ft').textContent = on ? 'Transcribing in English' : 'Notes paused';
      };
      lv.addEventListener('click', () => setLive(!live));
      const say = async (L) => {
        speak(L.p);
        const d = lineEl(L.p, L.t);
        lines.append(d);
        toEnd();
        const tx = d.querySelector('.tx');
        const caret = document.createElement('i');
        caret.className = 'cr';
        tx.append(caret);
        for (const w of L.x.split(/(\s+)/).filter(Boolean)) {
          const sp = document.createElement('span');
          sp.className = 'w';
          sp.textContent = w;
          tx.insertBefore(sp, caret);
          if (/\S/.test(w)) await wait(92);
        }
        caret.remove();
        if (L.a) {
          tx.innerHTML = tx.textContent.replace(L.ph, `<mark class="mk">${L.ph}</mark>`);
          await wait(120);
          tx.querySelector('.mk').classList.add('on');
          await wait(500);
          tx.insertAdjacentHTML('beforeend', `<span class="tag">${BOLT}Action item</span>`);
          al.insertAdjacentHTML('beforeend', actHtml(L.a, true));
          wireAct();
          count();
          al.scrollTo({ top: al.scrollHeight, behavior: 'smooth' });
        }
        if (L.s) {
          await wait(500);
          sl.insertAdjacentHTML('beforeend', `<li class="in">${L.s}</li>`);
        }
      };
      // Autoplay: lines arrive, action items get pulled out; the cursor pauses and resumes the notes once.
      cur.style.transform = 'translate(940px,60px)';
      (async () => {
        await wait(1500);
        let i = 0;
        let did = false;
        while (root.isConnected) {
          if (!live || root.dataset.paused) {
            await wait(400);
            continue;
          }
          if (i >= LIVE.length) {
            await wait(3800);
            if (!idle()) continue;
            reset();
            i = 0;
            did = false;
            await wait(1400);
            continue;
          }
          await say(LIVE[i]);
          i++;
          await wait(900);
          if (i === 4 && !did && idle()) {
            did = true;
            cur.classList.toggle('off', !moveTo(lv, 0.5));
            await wait(850);
            if (idle()) {
              cur.classList.add('press');
              lv.classList.add('press');
              await wait(130);
              cur.classList.remove('press');
              lv.classList.remove('press');
              lv.click();
              await wait(1500);
              cur.classList.add('press');
              await wait(130);
              cur.classList.remove('press');
              lv.click();
              cur.classList.add('off');
            }
          }
        }
      })();
    },
    prompt: `Build a live meeting transcription screen, full viewport (height: 100dvh).

Layout: a 68px header (gradient tile, meeting title, date and source line, a red REC pill with a blinking dot and a mono running clock, a Pause notes button), then a grid of minmax(0, 1fr) and 336px with 16px gaps on a light surface. Left card (white, 18px radius): a participants strip (avatar chips with name and company; the active speaker's chip gets a 1.5px accent ring and tint), a scrolling transcript of speaker-labelled lines (initials avatar, bold name, mono timestamp, 14.5px / 1.6 text), and a footer with a small equalizer and "Transcribing in English". Right: a Summary card (an "Auto" badge, bullet points) and an Action items card (count badge, a list of cards each with a checkbox, a title, an owner avatar with first name and a due-date pill).

Motion: new lines arrive one by one; the speaker chip lights up, the line fades in and its words stream in (a span per word fading in over 280ms, ~90ms apart) with a soft caret, and the transcript scrolls to the end smoothly. When a line contains a commitment, the key phrase is highlighted with a background-image sweep (background-size 0% to 100% over 700ms, box-decoration-break: clone), an "Action item" tag pops in, and a matching action card slides into the right list (opacity + translateY 8px) with an accent-soft background that fades out over 2.2s. New facts append to the Summary with the same entrance. Checkboxes toggle with a spring check and strike the title through. Pause notes stops the incoming lines and the clock, turns the REC pill grey, and the button becomes Resume notes.

Use real dates (compute weekdays from the date). Accessibility: transcript is aria-live polite, checkboxes are buttons with labels, focus rings, prefers-reduced-motion stops the equalizer and blink. Below 760px stack the cards (transcript first, summary and actions below), keep two participant chips and hide the clock. Use your accent color; red only for the recording dot. Plain HTML, CSS and JS, no libraries; React-friendly structure (MeetingHeader, Participants, Transcript, TranscriptLine, SummaryCard, ActionItems).`,
  });

  ML.add({
    id: 'app-ai-data-analyst',
    cat: 'app-ai',
    title: 'AI data analyst',
    sub: 'A question becomes SQL and a chart',
    html: `
<div class="app">
  <aside class="chat">
    <header class="ch"><span class="mark">${I(P.mark, 16)}</span><div><b>Lumen Analyst</b><small>Connected to halden_prod</small></div></header>
    <div class="thread" aria-live="polite"></div>
    <div class="sug"></div>
    <form class="comp" novalidate>
      <input type="text" placeholder="Ask a question about your data" aria-label="Question">
      <button type="submit" class="send" aria-label="Send">${I(P.send, 17, 2.4)}</button>
    </form>
  </aside>
  <main class="res">
    <header class="rh"><div><h1 class="rt"></h1><p class="rs"></p></div><span class="chipdb">${I(P.db, 14)}halden_prod</span></header>
    <section class="sqlc">
      <div class="sqh"><span class="lang">SQL</span><span class="meta"></span><button type="button" class="cp">${I(P.copy, 13)}<span>Copy</span></button></div>
      <pre class="code" aria-label="Generated SQL"></pre>
    </section>
    <section class="card out">
      <div class="oh"><p class="k ot"></p><div class="seg" role="group" aria-label="View"><span class="sp" aria-hidden="true"></span><button type="button" class="on">Chart</button><button type="button">Table</button></div></div>
      <div class="vw"><div class="chartv"></div><div class="tablev"></div></div>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .app{display:grid;grid-template-columns:360px minmax(0,1fr);height:100%;background:var(--ml-surface)}
.d .chat{display:flex;flex-direction:column;min-height:0;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .ch{display:flex;flex:none;align-items:center;gap:11px;height:66px;padding:0 20px;border-bottom:1px solid var(--ml-line)}
.d .ch b{display:block;font-size:14px;font-weight:650;letter-spacing:-.01em}
.d .ch small{font-size:12px;color:var(--ml-muted)}
.d .thread{display:flex;flex:1;flex-direction:column;gap:18px;min-height:0;padding:18px 18px 6px;overflow-y:auto;scrollbar-width:none}
.d .thread::-webkit-scrollbar{display:none}
.d .ex{display:flex;flex-direction:column;gap:12px}
.d .u{align-self:flex-end;max-width:88%;padding:10px 14px;border-radius:16px 16px 4px 16px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:13.5px;line-height:1.5}
.d .stp{display:flex;flex-direction:column;gap:9px;list-style:none}
.d .stp li{display:flex;align-items:center;gap:10px;font-size:12.5px;font-weight:500;color:var(--ml-muted);animation:ai-in 420ms var(--ml-spring) both}
.d .stp li b{margin-left:auto;font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .si{position:relative;display:grid;place-items:center;flex:none;width:18px;height:18px;border-radius:50%;box-shadow:inset 0 0 0 2px var(--ml-bar);color:#fff;transition:background-color .3s ease,box-shadow .3s ease}
.d .si svg{opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .4s var(--ml-bounce)}
.d .si u{display:none;align-items:flex-end;gap:1.5px;height:8px}
.d .si u i{display:block;width:2px;height:100%;border-radius:1px;background:var(--ml-accent);transform-origin:50% 100%;animation:da-eq 800ms ease-in-out infinite}
.d .si u i:nth-child(2){animation-delay:-.25s}.d .si u i:nth-child(3){animation-delay:-.5s}
.d .stp li.run{color:var(--ml-ink)}
.d .stp li.run .si{box-shadow:inset 0 0 0 2px var(--ml-accent);background:var(--ml-accent-soft)}
.d .stp li.run .si u{display:flex}
.d .stp li.done{color:var(--ml-ink-2)}
.d .stp li.done .si{background:#1DB954;box-shadow:none}
.d .stp li.done .si svg{opacity:1;transform:none}
.d .ans{font-size:14px;line-height:1.65}
.d .ans b{font-weight:650}
.d .sug{display:flex;flex:none;flex-wrap:wrap;gap:8px;padding:6px 18px 4px}
.d .sug button{height:30px;padding:0 12px;border:0;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);transition:background-color .2s ease,transform 90ms ease-out}
.d .sug button:hover{background:var(--ml-surface)}
.d .sug button:active{transform:scale(.96)}
.d .comp{display:flex;flex:none;align-items:center;gap:8px;margin:8px 16px 16px;padding:7px 7px 7px 14px;border-radius:15px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow);transition:box-shadow .25s ease}
.d .comp:focus-within,.d .comp.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .comp input{flex:1;min-width:0;height:38px;border:0;outline:0;background:none;font-size:14px}
.d .comp input::placeholder{color:#A1A1A6}
.d .send{display:grid;place-items:center;width:38px;height:38px;border:0;border-radius:11px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.22);transition:transform 90ms ease-out,opacity .2s ease}
.d .send:active,.d .send.press{transform:scale(.92)}
.d .send:disabled{opacity:.4;box-shadow:none;cursor:default}
.d .res{display:flex;flex-direction:column;gap:14px;min-width:0;min-height:0;padding:18px 24px 22px}
.d .rh{display:flex;flex:none;align-items:center;justify-content:space-between;gap:12px;min-height:44px}
.d .rh h1{font-size:19px}
.d .rs{margin-top:3px;font-size:12.5px;color:var(--ml-muted)}
.d .chipdb{display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 11px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 12px/1 var(--ml-mono);color:var(--ml-ink-2);white-space:nowrap}
.d .sqlc{flex:none;border-radius:16px;background:#0E1626;box-shadow:0 1px 2px rgba(35,15,10,.12),0 14px 30px rgba(35,15,10,.14);overflow:hidden}
.d .sqh{display:flex;align-items:center;gap:10px;height:40px;padding:0 14px;border-bottom:1px solid rgba(255,255,255,.08)}
.d .lang{padding:3px 8px;border-radius:6px;background:rgba(127,182,255,.16);font:600 10.5px/1.3 var(--ml-mono);letter-spacing:.06em;color:#7FB6FF}
.d .meta{flex:1;font:500 11.5px/1 var(--ml-mono);color:#7C8CA8}
.d .cp{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 9px;border:0;border-radius:7px;background:rgba(255,255,255,.08);font-size:11.5px;font-weight:600;color:#C5D3EA;transition:background-color .2s ease,transform 90ms ease-out}
.d .cp:hover{background:rgba(255,255,255,.14)}
.d .cp:active{transform:scale(.95)}
.d .code{height:154px;margin:0;padding:12px 16px;overflow:hidden;font:400 12.5px/1.65 var(--ml-mono);color:#D5E0F2;white-space:pre}
.d .code .k{color:#7FB6FF}
.d .code .s{color:#9ED8B4}
.d .code .n{color:#F0C27B}
.d .out{display:flex;flex:1;flex-direction:column;min-height:0;padding:16px 18px 14px}
.d .oh{display:flex;flex:none;align-items:center;justify-content:space-between;gap:10px}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(2,64px);padding:3px;border-radius:11px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg button{position:relative;z-index:1;height:28px;border:0;border-radius:8px;background:none;font-size:12.5px;font-weight:600;color:var(--ml-muted);transition:color .2s ease}
.d .seg button.on{color:var(--ml-ink)}
.d .sp{position:absolute;top:3px;bottom:3px;left:3px;width:64px;border-radius:8px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px var(--ml-line);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .seg.t .sp{transform:translateX(100%)}
.d .k{font-size:13px;font-weight:650;letter-spacing:-.005em}
.d .vw{position:relative;flex:1;min-height:0;margin-top:12px}
.d .chartv,.d .tablev{position:absolute;inset:0;transition:opacity .3s ease}
.d .tablev{opacity:0;pointer-events:none;overflow:auto;scrollbar-width:none}
.d .out.tb .chartv{opacity:0;pointer-events:none}
.d .out.tb .tablev{opacity:1;pointer-events:auto}
.d .bars{display:flex;align-items:flex-end;gap:18px;height:100%;padding:22px 6px 0 34px;position:relative}
.d .bars::after{content:"";position:absolute;left:0;right:0;bottom:26px;height:1px;background:var(--ml-line)}
.d .bc{position:relative;z-index:1;display:flex;flex:1;flex-direction:column;align-items:center;justify-content:flex-end;height:calc(100% - 26px);margin-bottom:26px}
.d .bb{width:100%;max-width:92px;border-radius:9px 9px 3px 3px;background:var(--ml-grad);transform-origin:50% 100%;animation:da-grow 750ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 90ms)}
.d .bc:not(:first-child) .bb{background:var(--ml-accent-2);opacity:.85}
.d .bv{margin-bottom:6px;font-size:12.5px;font-weight:650;font-variant-numeric:tabular-nums;animation:ai-in 520ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 90ms + 300ms)}
.d .bl{position:absolute;bottom:-24px;font-size:12px;font-weight:500;color:var(--ml-muted);white-space:nowrap}
.d .lnv{position:absolute;inset:8px 6px 26px 34px}
.d .lnv svg{width:100%;height:100%;overflow:visible}
.d .lnv .grid line{stroke:var(--ml-line)}
.d .lnv .ar{fill:url(#da-fill)}
.d .lnv .ln{fill:none;stroke:var(--ml-accent);stroke-width:2.6;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;animation:ai-draw 1100ms var(--ml-ease) both}
.d .lnv .ar{animation:ai-in 600ms ease 700ms both}
.d .lnv .dt{position:absolute;width:10px;height:10px;margin:-5px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2.5px var(--ml-accent);animation:ai-in 400ms ease both}
.d .lnv .dt.part{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 2px var(--ml-accent-2)}
.d .lx{position:absolute;left:34px;right:6px;bottom:0;display:flex;justify-content:space-between;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .ly{position:absolute;left:0;top:8px;bottom:26px;display:flex;flex-direction:column;justify-content:space-between;font:500 10.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}
.d th{padding:8px 10px;font-size:11px;font-weight:600;letter-spacing:.05em;text-align:left;text-transform:uppercase;color:var(--ml-muted);border-bottom:1px solid var(--ml-line)}
.d td{padding:11px 10px;font-size:13.5px;border-bottom:1px solid var(--ml-line)}
.d th:last-child,.d td:last-child{text-align:right}
.d tr:last-child td{border-bottom:0}
@keyframes da-grow{from{transform:scaleY(0)}to{transform:scaleY(1)}}
@keyframes da-eq{0%,100%{transform:scaleY(.3)}50%{transform:scaleY(1)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr);overflow-y:auto}
  .d .chat{border-right:0;border-bottom:1px solid var(--ml-line);min-height:auto}
  .d .thread{overflow:visible;flex:none}
  .d .ch{padding:0 16px}
  .d .res{min-height:auto;padding:16px}
  .d .out{min-height:300px}
  .d .chipdb{display:none}
  .d .sug{display:none}
  .d .bars{gap:10px;padding-left:30px}
}
@media (prefers-reduced-motion: reduce){.d .bb,.d .si u i{animation:none}}`,
    run: (root) => {
      const QA = [
        { q: 'Which plans drove the most revenue last quarter?', k: /revenue|plan|quarter|sales/i, title: 'Revenue by plan', sub: 'Q3 2026 / paid invoices', type: 'bars', unit: '$', cols: ['Plan', 'Revenue'],
          sql: "SELECT plan, SUM(amount) AS revenue\nFROM invoices\nWHERE paid_at >= '2026-07-01'\n  AND paid_at < '2026-10-01'\nGROUP BY plan\nORDER BY revenue DESC;",
          data: [['Enterprise', 212300], ['Business', 184200], ['Team', 126800], ['Starter', 58400]], ms: 64,
          say: '<b>Enterprise</b> led the quarter with $212,300, about 36% of the $581,700 total. Business followed at $184,200, and Starter was the smallest plan at $58,400.' },
        { q: 'Show weekly signups for the last 8 weeks', k: /signup|week|user|growth/i, title: 'Weekly signups', sub: 'Weeks starting Mon 24 Aug / current week in progress', type: 'line', unit: '', cols: ['Week of', 'Signups'],
          sql: "SELECT date_trunc('week', created_at) AS week,\n       COUNT(*) AS signups\nFROM users\nWHERE created_at >= '2026-08-24'\nGROUP BY 1\nORDER BY 1;",
          data: [['Aug 24', 212], ['Aug 31', 238], ['Sep 7', 226], ['Sep 14', 271], ['Sep 21', 289], ['Sep 28', 302], ['Oct 5', 331], ['Oct 12', 164]], ms: 88,
          say: 'Signups grew <b>56%</b> from the week of Aug 24 (212) to the week of Oct 5 (331). The week of Oct 12 shows 164 so far, with four days still to count.' },
        { q: 'What is average order value by region?', k: /order|region|aov|average|value/i, title: 'Average order value', sub: 'October 2026 / by region', type: 'bars', unit: '$', dec: 2, cols: ['Region', 'Avg. order'],
          sql: "SELECT region, ROUND(AVG(total), 2) AS aov\nFROM orders\nWHERE created_at >= '2026-10-01'\nGROUP BY region\nORDER BY aov DESC;",
          data: [['North America', 142.6], ['Europe', 128.35], ['APAC', 97.8], ['LATAM', 84.1]], ms: 47,
          say: '<b>North America</b> has the highest average order at $142.60, roughly 70% above LATAM at $84.10. Europe sits in between at $128.35.' },
      ];
      const STEPS = ['Understanding the question', 'Writing SQL', 'Running the query', 'Drawing the chart'];
      const $ = (s) => root.querySelector(s);
      const thread = $('.thread');
      const code = $('.code');
      const form = $('.comp');
      const input = $('.comp input');
      const send = $('.send');
      const cur = $('.cur');
      const out = $('.out');
      const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]);
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(50);
          if (!root.dataset.paused) t += 50;
        }
      };
      let userUntil = 0;
      let busy = false;
      let qi = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !form.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        form.classList.remove('is-auto');
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.55) => {
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const hl = (s) =>
        esc(s)
          .replace(/('[^']*'?)/g, '[[S]]$1[[E]]')
          .replace(/\b(SELECT|FROM|WHERE|GROUP BY|ORDER BY|AS|AND|DESC|SUM|COUNT|AVG|ROUND|date_trunc)\b/g, '<span class="k">$1</span>')
          .replace(/\[\[S\]\]/g, '<span class="s">')
          .replace(/\[\[E\]\]/g, '</span>');
      const money = (v, qa) => (qa.unit === '$' ? '$' + (qa.dec ? v.toFixed(qa.dec) : Math.round(v).toLocaleString('en-US')) : Math.round(v).toLocaleString('en-US'));
      const curve = (p) => {
        let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
        for (let i = 0; i < p.length - 1; i++) {
          const [a, b, c, e] = [p[i - 1] || p[i], p[i], p[i + 1], p[i + 2] || p[i + 1]];
          d += ` C${(b[0] + (c[0] - a[0]) / 6).toFixed(1)},${(b[1] + (c[1] - a[1]) / 6).toFixed(1)} ${(c[0] - (e[0] - b[0]) / 6).toFixed(1)},${(c[1] - (e[1] - b[1]) / 6).toFixed(1)} ${c[0].toFixed(1)},${c[1].toFixed(1)}`;
        }
        return d;
      };
      const drawChart = (qa) => {
        const vals = qa.data.map((d) => d[1]);
        const mx = Math.max(...vals);
        const top = qa.type === 'bars' ? mx * 1.12 : Math.ceil(mx / 100) * 100;
        const ticks = [top, (top * 2) / 3, top / 3, 0];
        const tl = (v) => (qa.unit === '$' ? (v >= 1000 ? '$' + Math.round(v / 1000) + 'k' : '$' + Math.round(v)) : String(Math.round(v)));
        if (qa.type === 'bars') {
          $('.chartv').innerHTML = `<div class="bars">${qa.data.map(([l, v], i) => `<div class="bc"><span class="bv" style="--i:${i}">${money(v, qa)}</span><div class="bb" style="--i:${i};height:${((v / top) * 100).toFixed(1)}%"></div><span class="bl">${l}</span></div>`).join('')}</div>`;
        } else {
          const n = qa.data.length;
          const pts = qa.data.map(([, v], i) => [(i / (n - 1)) * 400, 180 - (v / top) * 170]);
          const d = curve(pts);
          $('.chartv').innerHTML = `<div class="ly">${ticks.map((v) => `<span>${tl(v)}</span>`).join('')}</div><div class="lnv"><svg viewBox="0 0 400 180" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="da-fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FF4433" stop-opacity=".2"/><stop offset="1" stop-color="#FF4433" stop-opacity="0"/></linearGradient></defs><g class="grid"><line x1="0" x2="400" y1="10" y2="10"/><line x1="0" x2="400" y1="67" y2="67"/><line x1="0" x2="400" y1="123" y2="123"/><line x1="0" x2="400" y1="179" y2="179"/></g><path class="ar" d="${d} L400,180 L0,180 Z"/><path class="ln" pathLength="1" d="${d}"/></svg>${pts.map(([x, y], i) => `<i class="dt${i === n - 1 ? ' part' : ''}" style="left:${(x / 4).toFixed(2)}%;top:${((y / 180) * 100).toFixed(2)}%;animation-delay:${500 + i * 90}ms"></i>`).join('')}</div><div class="lx">${qa.data.map(([l]) => `<span>${l.split(' ').join(' ')}</span>`).join('')}</div>`;
        }
        $('.tablev').innerHTML = `<table><thead><tr><th>${qa.cols[0]}</th><th>${qa.cols[1]}</th></tr></thead><tbody>${qa.data.map(([l, v]) => `<tr><td>${l}</td><td>${money(v, qa)}</td></tr>`).join('')}</tbody></table>`;
        $('.rt').textContent = qa.title;
        $('.rs').textContent = qa.sub;
        $('.ot').textContent = qa.title;
      };
      const stepsHtml = (state) => STEPS.map((s, i) => `<li class="${state[i] || ''}"><span class="si"><svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg><u><i></i><i></i><i></i></u></span>${s}<b></b></li>`).join('');
      const toEnd = () => thread.scrollTo({ top: thread.scrollHeight, behavior: 'smooth' });
      const showView = (v) => {
        out.classList.toggle('tb', v === 1);
        const seg = $('.seg');
        seg.classList.toggle('t', v === 1);
        seg.querySelectorAll('button').forEach((b, k) => b.classList.toggle('on', k === v));
      };
      root.querySelectorAll('.seg button').forEach((b, k) => b.addEventListener('click', () => showView(k)));
      const setStep = (ex, i, st, meta) => {
        const li = ex.querySelectorAll('.stp li')[i];
        li.className = st;
        if (meta) li.querySelector('b').textContent = meta;
      };
      const ask = async (q, qa) => {
        busy = true;
        send.disabled = true;
        const ex = document.createElement('div');
        ex.className = 'ex';
        ex.innerHTML = `<div class="u in"><p>${esc(q)}</p></div><ul class="stp">${stepsHtml(['run'])}</ul><p class="ans"></p>`;
        thread.append(ex);
        while (thread.children.length > 2) thread.firstElementChild.remove();
        toEnd();
        showView(0);
        await wait(800);
        setStep(ex, 0, 'done');
        setStep(ex, 1, 'run');
        $('.meta').textContent = 'Writing query';
        code.innerHTML = '';
        for (let n = 0; n <= qa.sql.length && root.isConnected; n += 2) {
          code.innerHTML = hl(qa.sql.slice(0, n)) + '<i class="cr"></i>';
          await wait(16);
        }
        code.innerHTML = hl(qa.sql);
        setStep(ex, 1, 'done');
        setStep(ex, 2, 'run');
        $('.meta').textContent = 'Running';
        await wait(900);
        setStep(ex, 2, 'done', qa.data.length + ' rows, ' + qa.ms + ' ms');
        $('.meta').textContent = qa.data.length + ' rows in ' + qa.ms + ' ms';
        setStep(ex, 3, 'run');
        drawChart(qa);
        await wait(1300);
        setStep(ex, 3, 'done');
        const ans = ex.querySelector('.ans');
        ans.innerHTML = '';
        const caret = document.createElement('i');
        caret.className = 'cr';
        ans.append(caret);
        const tmp = document.createElement('div');
        tmp.innerHTML = qa.say;
        let n = 0;
        for (const node of tmp.childNodes) {
          const isB = node.nodeType === 1;
          const wrap = isB ? document.createElement('b') : ans;
          if (isB) ans.insertBefore(wrap, caret);
          for (const w of node.textContent.split(/(\s+)/).filter(Boolean)) {
            const sp = document.createElement('span');
            sp.className = 'w';
            sp.textContent = w;
            if (isB) wrap.append(sp);
            else ans.insertBefore(sp, caret);
            if (/\S/.test(w)) {
              await wait(48);
              if (++n % 9 === 0) toEnd();
            }
          }
        }
        caret.remove();
        toEnd();
        busy = false;
        send.disabled = false;
      };
      const pick = (q) => {
        const hit = QA.findIndex((x) => x.k.test(q));
        if (hit < 0) return null;
        qi = hit;
        return QA[hit];
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = input.value.trim();
        if (busy || !q) return;
        input.value = '';
        const qa = pick(q);
        if (qa) ask(q, qa);
        else {
          const ex = document.createElement('div');
          ex.className = 'ex';
          ex.innerHTML = `<div class="u in"><p>${esc(q)}</p></div><p class="ans">I can answer questions about revenue by plan, weekly signups and average order value by region. Try one of the suggestions.</p>`;
          thread.append(ex);
          while (thread.children.length > 2) thread.firstElementChild.remove();
          toEnd();
        }
      });
      $('.sug').innerHTML = ['Revenue by plan', 'Weekly signups', 'Order value by region'].map((s) => `<button type="button">${s}</button>`).join('');
      $('.sug').querySelectorAll('button').forEach((b, i) =>
        b.addEventListener('click', () => {
          if (busy) return;
          qi = i;
          ask(QA[i].q, QA[i]);
        })
      );
      $('.cp').addEventListener('click', () => {
        const s = $('.cp span');
        s.textContent = 'Copied';
        setTimeout(() => (s.textContent = 'Copy'), 1400);
      });
      // first frame: question one is already answered
      (() => {
        const qa = QA[0];
        const ex = document.createElement('div');
        ex.className = 'ex';
        ex.innerHTML = `<div class="u"><p>${qa.q}</p></div><ul class="stp">${stepsHtml(['done', 'done', 'done', 'done'])}</ul><p class="ans">${qa.say}</p>`;
        ex.querySelectorAll('.stp li b')[2].textContent = qa.data.length + ' rows, ' + qa.ms + ' ms';
        ex.querySelectorAll('.stp li').forEach((l) => (l.style.animation = 'none'));
        thread.append(ex);
        code.innerHTML = hl(qa.sql);
        $('.meta').textContent = qa.data.length + ' rows in ' + qa.ms + ' ms';
        drawChart(qa);
        out.querySelectorAll('.bb,.bv,.ln,.ar,.dt').forEach((n) => (n.style.animation = 'none'));
      })();

      // Autoplay: type a question, send it; the SQL writes itself and the chart draws; any real input hands over for 4s.
      cur.style.transform = 'translate(240px,690px)';
      (async () => {
        await wait(1800);
        qi = 0;
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          qi = (qi + 1) % QA.length;
          const qa = QA[qi];
          cur.classList.toggle('off', !moveTo(input, 0.35));
          await wait(850);
          form.classList.add('is-auto');
          let ok = true;
          for (const ch of qa.q) {
            if (!idle()) {
              ok = false;
              break;
            }
            input.value += ch;
            await wait(30);
          }
          form.classList.remove('is-auto');
          if (!ok) {
            input.value = '';
            continue;
          }
          await wait(300);
          moveTo(send, 0.5, 0.5);
          await wait(800);
          if (!idle()) {
            input.value = '';
            continue;
          }
          cur.classList.add('press');
          send.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          send.classList.remove('press');
          cur.classList.add('off');
          form.requestSubmit();
          await wait(1500);
          while (busy && root.isConnected) await wait(300);
          await wait(3800);
        }
      })();
    },
    prompt: `Build an AI data analyst screen where a plain-language question becomes SQL and a chart, full viewport (height: 100dvh).

Layout: grid of 360px and minmax(0, 1fr). Left, a white chat column (1px right hairline): a 66px header (gradient tile, "Lumen Analyst", "Connected to halden_prod"), the thread, three suggestion pills and a composer. Right, a light surface: a header with the result title, a subtitle and a database chip, then a dark SQL card (a #0E1626 panel, 16px radius: a bar with a SQL badge, "4 rows in 64 ms" in mono and a Copy button; 12.5px mono code with keywords in soft blue and string literals in soft green), then a white result card with a Chart / Table segmented control (a sliding thumb) and the visualization.

Flow per question: the assistant message shows a four-step checklist (Understanding the question, Writing SQL, Running the query, Drawing the chart), each row becoming a green check as it completes (a three-bar equalizer marks the running one, never a circular spinner). The SQL is typed into the card two characters at a time with a soft caret and re-highlighted as it grows; the query step ends with a row count and duration; then the chart draws: bars grow with scaleY from the bottom (750ms spring, 90ms stagger) with value labels fading up, or a line draws with pathLength="1" and stroke-dashoffset 1 to 0 over 1.1s with an area fill fading in. Last, a one-paragraph insight streams word by word with key numbers in bold. Unrecognized questions get an honest message listing what can be asked.

Data must be coherent: the totals, percentages and week dates in the text match the chart and table; compute weekdays from real dates. Accessibility: aria-live polite thread, labeled controls, Copy confirms with "Copied", focus rings, prefers-reduced-motion skips the growth and draw animations. Below 760px stack the chat above the results and hide the suggestions and database chip. Use your accent color. Plain HTML, CSS and JS, no libraries; React-friendly structure (ChatPane, StepList, SqlCard, ResultCard, BarChart, LineChart, ResultTable).`,
  });
})();
