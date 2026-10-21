(() => {
  // Halden inbox and chat: eight screens on one fictional product. File-level helpers build strings only; run() is self-contained.
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>',
    archive: '<rect width="20" height="5" x="2" y="3" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/>',
    pen: '<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
    reply: '<polyline points="9 17 4 12 9 7"/><path d="M20 18v-2a4 4 0 0 0-4-4H4"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>',
    more: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
    clip: '<path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    checks: '<path d="M18 6 7 17l-5-5"/><path d="m22 10-7.5 7.5L13 16"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    hash: '<line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    smilePlus: '<path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/><path d="M16 5h6"/><path d="M19 2v6"/>',
    at: '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    video: '<path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/>',
    videoOff: '<path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"/><path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/><path d="m2 2 20 20"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/>',
    micOff: '<line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/>',
    share: '<path d="m9 10 3-3 3 3"/><path d="M12 13V7"/><rect width="20" height="14" x="2" y="3" rx="2"/><path d="M12 17v4"/><path d="M8 21h8"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
    msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
    msgs: '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    down: '<path d="m6 9 6 6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    bold: '<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/>',
    italic: '<line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    tag: '<path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/>',
    pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
    monitor: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/>',
    up: '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>',
    thumb: '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
    heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
    spark: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/>',
    receipt: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 17.5v-11"/>',
    circleCheck: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    gitpr: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" x2="6" y1="9" y2="21"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    arrowR: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
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
  // Shared CSS for every screen in this file. Strings only.
  const BASE = `
.d .av{flex:none;display:grid;place-items:center;width:36px;height:36px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-size:12px;font-weight:650;letter-spacing:-.01em;font-style:normal}
.d .av.t2{background:#FFF2ED}.d .av.t3{background:#C4DBFF}.d .av.t4{background:var(--ml-bar-2);color:var(--ml-ink-2)}
.d .brand{display:flex;align-items:center;gap:10px;font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .mark{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .lbl{padding:0 10px 8px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .btn,.d .cta{display:inline-flex;align-items:center;justify-content:center;gap:7px;height:38px;padding:0 14px;border:0;border-radius:11px;font-size:13.5px;font-weight:600;white-space:nowrap;cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease,opacity .2s ease}
.d .btn{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);color:var(--ml-ink-2)}
.d .btn:hover{background:var(--ml-surface)}
.d .cta{color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 8px 18px rgba(255,68,51,.22)}
.d .btn:active,.d .cta:active,.d .press{transform:scale(.95)}
.d .ib{display:grid;flex:none;place-items:center;width:34px;height:34px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .ib:hover{background:var(--ml-bar-2)}
.d .ib.on{color:var(--ml-accent)}
.d .sc{min-height:0;overflow-y:auto;scrollbar-width:none}
.d .sc::-webkit-scrollbar{display:none}
.d .field{display:flex;align-items:center;gap:8px;min-width:0;height:38px;padding:0 12px;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .25s ease}
.d .field input,.d .field textarea{flex:1;min-width:0;border:0;outline:0;background:none;resize:none;font-size:13.5px;color:var(--ml-ink)}
.d .field input::placeholder,.d .field textarea::placeholder{color:#A1A1A6}
.d .field:focus-within,.d .field.is-auto{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .toast{position:absolute;left:50%;bottom:20px;z-index:40;display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;background:var(--ml-ink);color:#fff;font-size:13px;font-weight:500;white-space:nowrap;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translate(-50%,14px);pointer-events:none;transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .toast.on{opacity:1;transform:translate(-50%,0);pointer-events:auto}
.d .toast button{border:0;background:none;font-weight:650;color:var(--ml-accent-2);cursor:pointer}
.d button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
@keyframes ib-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes ib-pop{0%{transform:scale(1)}40%{transform:scale(1.18)}100%{transform:scale(1)}}`;

  // ---------------------------------------------------------------- 1. three-pane email client
  ML.add({
    id: 'app-inbox-mail',
    cat: 'app-inbox',
    title: 'Three-pane email client',
    sub: 'Pick a message, archive slides it away',
    html: `
<div class="app">
  <aside class="fold">
    <div class="brand"><span class="mark">${I(P.mail, 16)}</span>Halden Mail</div>
    <button class="cta comp" type="button">${I(P.pen, 16)}Compose</button>
    <nav class="fl" aria-label="Folders">
      <button class="f on" type="button" data-f="inbox">${I(P.inbox, 17)}<span>Inbox</span><em class="n-in"></em></button>
      <button class="f" type="button" data-f="starred">${I(P.star, 17)}<span>Starred</span></button>
      <button class="f" type="button" data-f="sent">${I(P.send, 17)}<span>Sent</span></button>
      <button class="f" type="button" data-f="drafts">${I(P.file, 17)}<span>Drafts</span><em>2</em></button>
      <button class="f" type="button" data-f="archive">${I(P.archive, 17)}<span>Archive</span><em class="n-ar"></em></button>
    </nav>
    <p class="lbl">Labels</p>
    <div class="labs"><p><i></i>Clients</p><p><i class="b"></i>Billing</p><p><i class="c"></i>Design</p></div>
    <div class="me"><span class="av">MR</span><p><b>Maya Reyes</b><small>maya@halden.co</small></p></div>
  </aside>
  <section class="lst">
    <header class="lh"><h2>Inbox</h2><span class="cnt"></span></header>
    <label class="field srch">${I(P.search, 16)}<input type="search" placeholder="Search mail" aria-label="Search mail"></label>
    <ul class="rows sc" aria-label="Messages"></ul>
  </section>
  <section class="rd">
    <div class="tb">
      <button class="ib arch" type="button" aria-label="Archive">${I(P.archive, 18)}</button>
      <button class="ib" type="button" aria-label="Delete">${I(P.trash, 18)}</button>
      <button class="ib" type="button" aria-label="Label">${I(P.tag, 18)}</button>
      <span class="sp"></span>
      <button class="ib rep" type="button" aria-label="Reply">${I(P.reply, 18)}</button>
      <button class="ib stb" type="button" aria-label="Star" aria-pressed="false">${I(P.star, 18)}</button>
      <button class="ib" type="button" aria-label="More">${I(P.more, 18)}</button>
    </div>
    <article class="msg sc"></article>
    <div class="qr"><button type="button">Looks good, send it</button><button type="button">Thanks, I will check</button><button type="button">Can we talk at 2?</button></div>
    <form class="rbar"><label class="field">${I(P.reply, 16)}<input class="rin" type="text" placeholder="Write a reply" aria-label="Write a reply"></label><button class="cta" type="submit" aria-label="Send reply">${I(P.send, 16)}</button></form>
  </section>
  <div class="cmp" role="dialog" aria-label="New message">
    <header><b>New message</b><button class="ib cx" type="button" aria-label="Close">${I(P.x, 16)}</button></header>
    <label class="cr"><span>To</span><input class="c-to" type="text" aria-label="To"></label>
    <label class="cr"><span>Subject</span><input class="c-sub" type="text" aria-label="Subject"></label>
    <textarea class="c-body" aria-label="Message"></textarea>
    <footer><button class="cta c-send" type="button">${I(P.send, 15)}Send</button><button class="ib" type="button" aria-label="Attach">${I(P.clip, 17)}</button></footer>
  </div>
  <div class="toast" role="status"><span class="tt"></span><button type="button" class="undo">Undo</button></div>
  ${CURSOR}
</div>`,
    css: BASE + `
.d .app{display:grid;grid-template-columns:216px 336px minmax(0,1fr);gap:12px;padding:12px 12px 12px 0;height:100%}
.d .fold{display:flex;flex-direction:column;min-height:0;padding:18px 12px 6px 18px}
.d .comp{width:100%;height:42px;margin:20px 0 18px}
.d .fl{display:flex;flex-direction:column;gap:2px}
.d .f{display:flex;align-items:center;gap:11px;height:36px;padding:0 10px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .f svg{color:var(--ml-muted);transition:color .2s ease}
.d .f:hover{background:rgba(220,228,240,.45)}
.d .f.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-weight:600}
.d .f.on svg{color:var(--ml-accent)}
.d .f em{margin-left:auto;font:600 11.5px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .f.on em{color:var(--ml-accent-ink)}
.d .fold .lbl{margin-top:22px}
.d .labs{display:flex;flex-direction:column;gap:2px}
.d .labs p{display:flex;align-items:center;gap:11px;height:32px;padding:0 10px;font-size:13.5px;color:var(--ml-ink-2)}
.d .labs i{width:9px;height:9px;border-radius:3px;background:var(--ml-accent);margin:0 4px}
.d .labs i.b{background:var(--ml-accent-2)}.d .labs i.c{background:var(--ml-accent-line)}
.d .me{display:flex;align-items:center;gap:10px;margin-top:auto;padding:12px 6px 8px}
.d .me p{display:flex;flex-direction:column;min-width:0}
.d .me b{font-size:13px;font-weight:600}
.d .me small{overflow:hidden;font-size:12px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .lst,.d .rd{position:relative;display:flex;flex-direction:column;min-width:0;min-height:0;border-radius:20px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);overflow:hidden}
.d .lh{display:flex;align-items:baseline;gap:10px;padding:20px 20px 12px}
.d .lh h2{font-size:22px;font-weight:650;letter-spacing:-.03em}
.d .cnt{font-size:13px;color:var(--ml-muted)}
.d .srch{margin:0 14px 8px;background:var(--ml-surface);box-shadow:none}
.d .rows{position:relative;flex:1;padding:4px 8px 10px;list-style:none}
.d .row{position:relative;display:grid;grid-template-columns:36px minmax(0,1fr);gap:0 12px;padding:12px;border-radius:14px;cursor:pointer;transition:transform var(--ml-spring-dur) var(--ml-spring),background-color .2s ease,opacity .28s ease}
.d .row:hover{background:var(--ml-surface)}
.d .row.on{background:var(--ml-accent-soft)}
.d .row.gone{opacity:0;transform:translateX(56px)!important;transition:transform .3s var(--ml-ease),opacity .28s ease}
.d .row.enter{animation:ib-in 480ms var(--ml-spring) both}
.d .row .av{grid-row:1/3}
.d .rt{display:flex;align-items:baseline;gap:8px}
.d .rt b{flex:1;min-width:0;overflow:hidden;font-size:13.5px;font-weight:600;white-space:nowrap;text-overflow:ellipsis}
.d .rt time{font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted);white-space:nowrap}
.d .rs{overflow:hidden;font-size:13px;font-weight:500;color:var(--ml-ink-2);white-space:nowrap;text-overflow:ellipsis}
.d .rp{grid-column:2;overflow:hidden;margin-top:2px;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .row.un .rt b,.d .row.un .rs{font-weight:650;color:var(--ml-ink)}
.d .row.un .rt::before{content:"";flex:none;align-self:center;width:8px;height:8px;margin-right:-2px;border-radius:50%;background:var(--ml-accent);order:3}
.d .empty{padding:40px 16px;text-align:center;font-size:13.5px;color:var(--ml-muted)}
.d .tb{display:flex;align-items:center;gap:2px;flex:none;height:56px;padding:0 14px;border-bottom:1px solid var(--ml-line)}
.d .tb .sp{flex:1}
.d .stb.on svg{fill:currentColor}
.d .msg{flex:1;padding:24px 30px}
.d .msg.swap{animation:ib-in 460ms var(--ml-spring) both}
.d .msg h1{max-width:560px;font-size:22px;line-height:1.2;font-weight:650;letter-spacing:-.03em}
.d .meta{display:flex;align-items:center;gap:12px;margin:18px 0 20px}
.d .meta .av{width:40px;height:40px}
.d .meta p{display:flex;flex-direction:column;min-width:0}
.d .meta b{font-size:14px;font-weight:600}
.d .meta small{font-size:12.5px;color:var(--ml-muted)}
.d .meta time{margin-left:auto;font-size:12.5px;color:var(--ml-muted);white-space:nowrap}
.d .bd{max-width:560px;font-size:14px;line-height:1.65;color:var(--ml-ink-2)}
.d .bd p+p{margin-top:12px}
.d .att{display:inline-flex;align-items:center;gap:10px;margin-top:20px;padding:10px 14px 10px 10px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .att span{display:grid;place-items:center;width:34px;height:34px;border-radius:9px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .att p{display:flex;flex-direction:column;font-size:13px;font-weight:600}
.d .att small{font-size:12px;font-weight:500;color:var(--ml-muted)}
.d .early{display:flex;align-items:center;gap:8px;max-width:560px;margin-top:26px;padding-top:16px;border-top:1px solid var(--ml-line);font-size:12.5px;color:var(--ml-muted)}
.d .qr{display:flex;flex:none;gap:8px;padding:12px 16px 0;border-top:1px solid var(--ml-line)}
.d .qr button{height:30px;padding:0 12px;border:0;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .qr button:hover{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .rbar{display:flex;flex:none;gap:10px;padding:10px 16px 16px}
.d .rbar .field{flex:1;height:42px;background:var(--ml-surface);box-shadow:none}
.d .rbar .cta{width:42px;height:42px;padding:0}
.d .cmp{position:absolute;right:28px;bottom:24px;z-index:30;display:none;flex-direction:column;width:380px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);overflow:hidden}
.d .cmp.on{display:flex;animation:ib-in 460ms var(--ml-spring) both}
.d .cmp header{display:flex;align-items:center;justify-content:space-between;padding:8px 8px 8px 16px;background:var(--ml-surface);font-size:13.5px}
.d .cr{display:flex;align-items:center;gap:10px;padding:0 16px;height:42px;border-bottom:1px solid var(--ml-line);font-size:13.5px}
.d .cr span{width:48px;color:var(--ml-muted)}
.d .cr input{flex:1;min-width:0;border:0;outline:0;background:none}
.d .c-body{height:132px;padding:12px 16px;border:0;outline:0;resize:none;background:none;font-size:13.5px;line-height:1.55}
.d .cmp footer{display:flex;align-items:center;gap:8px;padding:10px 12px 12px}
.d .cmp .cta{height:36px}
${CURSOR_CSS}
@container scr (max-width: 1100px){
  .d .qr button:nth-child(3){display:none}
}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr);padding:10px}
  .d .fold,.d .rd{display:none}
  .d .cmp{right:16px;left:16px;width:auto;bottom:16px}
}`,
    run: (root) => {
      const mail = [
        { id: 1, n: 'Maya Reyes', i: 'MR', t: 1, s: 'Northgate proposal: final numbers', time: '9:42 AM', u: 1, p: 'I attached the revised scope with the October rates.', to: 'Maya', body: ['I attached the revised scope with the October rates. Can you check the totals on page 3 before I send it over to Ana at Northgate?', 'Two things changed since Monday: the discovery phase is now fixed at two weeks, and hosting moved into the monthly retainer.', 'If the numbers look right to you I will send it at noon.'], att: ['Northgate-proposal-v4.pdf', '1.2 MB'] },
        { id: 2, n: 'Tomas Lindqvist', i: 'TL', t: 2, s: 'Brightline site review on Thursday', time: '8:15 AM', u: 1, p: 'Moving the walkthrough to 2 PM so Priya can join.', to: 'Tomas', body: ['Moving the Brightline walkthrough to 2 PM on Thursday so Priya can join from the clinic.', 'I will share the staging link tonight. The booking form is done, the team page still needs photos.'], att: null },
        { id: 3, n: 'Aiko Tan', i: 'AT', t: 3, s: 'Invoice #1042 was paid', time: 'Tue', u: 1, p: 'Northgate paid in full this morning, $4,800.', to: 'Aiko', body: ['Northgate paid invoice #1042 in full this morning, $4,800 by bank transfer.', 'I marked it as reconciled and sent them the receipt. Nothing else is outstanding for September.'], att: ['Receipt-1042.pdf', '86 KB'] },
        { id: 4, n: 'Priya Nair', i: 'PN', t: 1, s: 'Meridian Foods asset pack', time: 'Tue', u: 1, p: 'Logos, product shots and the nutrition icons are in the folder.', to: 'Priya', body: ['The Meridian Foods asset pack is ready: logos in three colourways, 24 product shots and the nutrition icon set.', 'The shots are cropped square for the shop grid. Tell me if you need the full frames as well.'], att: ['Meridian-assets.zip', '48 MB'] },
        { id: 5, n: 'Daniel Okafor', i: 'DO', t: 2, s: 'Solace rebrand: round 2 files', time: 'Mon', u: 0, p: 'Updated the wordmark spacing and the colour ramp.', to: 'Daniel', body: ['Round two is uploaded. I opened up the wordmark spacing and rebuilt the colour ramp so the dark steps hold on white.', 'Solace asked for one more look at the stationery before Friday, so I will keep that in this thread.'], att: null },
        { id: 6, n: 'Hana Kim', i: 'HK', t: 3, s: 'Q4 roadmap draft for review', time: 'Sun', u: 0, p: 'Three themes, nine bets. Comments welcome until Wednesday.', to: 'Hana', body: ['The Q4 roadmap draft is in the shared doc: three themes, nine bets, one open question about the mobile app.', 'Comments are welcome until Wednesday evening, then I will lock it for planning.'], att: null },
        { id: 7, n: 'Kestrel & Co Billing', i: 'KC', t: 4, s: 'Your October statement is ready', time: 'Fri', u: 0, p: 'Total due $1,240, payable by 25 October.', to: 'Kestrel', body: ['Your October statement is ready. The total due is $1,240, payable by 25 October.', 'You can download the statement or pay by card from the billing page.'], att: ['Statement-Oct.pdf', '212 KB'] },
        { id: 8, n: 'Luis Ortega', i: 'LO', t: 1, s: 'Onboarding call notes', time: 'Thu', u: 0, p: 'Notes and next steps from our Kestrel kickoff.', to: 'Luis', body: ['Notes from the Kestrel kickoff: they want weekly demos, one point of contact and a shared Slack channel.', 'Next steps are on my side: access list, intro email and the first sprint plan.'], att: null },
      ];
      const sv = (d, s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const FILE = sv('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>', 18);
      const CLOCK = sv('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>', 14);
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const rowsEl = $('.rows');
      const msgEl = $('.msg');
      const toastEl = $('.toast');
      const cmp = $('.cmp');
      const cur = $('.cur');
      let folder = 'inbox';
      let sel = 0;
      let q = '';
      let last = null;
      let tt = 0;
      const vis = () =>
        mail.filter((m) => {
          const hit = !q || (m.n + m.s + m.p).toLowerCase().includes(q);
          if (folder === 'archive') return m.a && hit;
          if (folder === 'starred') return m.star && !m.a && hit;
          return folder === 'inbox' && !m.a && hit;
        });
      const toast = (text, undo) => {
        $('.tt').textContent = text;
        $('.undo').style.display = undo ? '' : 'none';
        toastEl.classList.add('on');
        clearTimeout(tt);
        tt = setTimeout(() => toastEl.classList.remove('on'), 2600);
      };
      const counts = () => {
        const un = mail.filter((m) => !m.a && m.u).length;
        $('.n-in').textContent = un || '';
        $('.n-ar').textContent = mail.filter((m) => m.a).length || '';
        const n = vis().length;
        $('.cnt').textContent = n + (n === 1 ? ' message' : ' messages');
      };
      const rowHTML = (m) =>
        `<li class="row${m.u ? ' un' : ''}${m.id === sel ? ' on' : ''}" data-id="${m.id}" tabindex="0"><span class="av t${m.t}">${m.i}</span><div class="rt"><b>${m.n}</b><time>${m.time}</time></div><p class="rs">${m.s}</p><p class="rp">${m.p}</p></li>`;
      const renderList = (flip) => {
        const before = {};
        if (flip) $$('.row').forEach((r) => (before[r.dataset.id] = r.offsetTop));
        const list = vis();
        rowsEl.innerHTML = list.length ? list.map(rowHTML).join('') : `<li class="empty">Nothing in ${folder} right now</li>`;
        if (flip)
          $$('.row').forEach((r) => {
            const b = before[r.dataset.id];
            if (b == null) return void r.classList.add('enter');
            const dy = b - r.offsetTop;
            if (dy) {
              r.style.transition = 'none';
              r.style.transform = `translateY(${dy}px)`;
            }
          });
        void rowsEl.offsetWidth;
        $$('.row').forEach((r) => {
          if (r.style.transform) {
            r.style.transition = '';
            r.style.transform = '';
          }
        });
        counts();
      };
      const renderMsg = (m, animate) => {
        const tb = [$('.arch'), $('.rep'), $('.stb'), $('.rin')];
        tb.forEach((b) => (b.disabled = !m));
        if (!m) {
          msgEl.innerHTML = '<p class="empty">Select a message to read it</p>';
          return;
        }
        $('.stb').classList.toggle('on', !!m.star);
        $('.stb').setAttribute('aria-pressed', String(!!m.star));
        $('.rin').placeholder = 'Reply to ' + m.to;
        msgEl.innerHTML = `<h1>${m.s}</h1><div class="meta"><span class="av t${m.t}">${m.i}</span><p><b>${m.n}</b><small>to me, Halden</small></p><time>${m.time === 'Tue' ? 'Tue, 13 Oct' : m.time.includes('M') ? 'Today, ' + m.time : m.time}</time></div><div class="bd">${m.body.map((t) => `<p>${t}</p>`).join('')}</div>${m.att ? `<div class="att"><span>${FILE}</span><p>${m.att[0]}<small>${m.att[1]}</small></p></div>` : ''}<p class="early">${CLOCK}2 earlier messages in this thread</p>`;
        if (animate) {
          msgEl.classList.remove('swap');
          void msgEl.offsetWidth;
          msgEl.classList.add('swap');
        }
        msgEl.scrollTop = 0;
      };
      const select = (id) => {
        sel = id;
        const m = mail.find((x) => x.id === id);
        if (m) m.u = 0;
        $$('.row').forEach((r) => {
          r.classList.toggle('on', +r.dataset.id === id);
          if (+r.dataset.id === id) r.classList.remove('un');
        });
        counts();
        renderMsg(m, true);
      };
      const archive = () => {
        const m = mail.find((x) => x.id === sel);
        if (!m || m.a) return;
        const row = rowsEl.querySelector(`[data-id="${m.id}"]`);
        if (row) row.classList.add('gone');
        setTimeout(() => {
          if (!root.isConnected) return;
          m.a = 1;
          last = m;
          const list = vis();
          renderList(true);
          const next = list[0];
          if (next) select(next.id);
          else {
            sel = 0;
            renderMsg(null);
          }
          toast('Conversation archived', true);
        }, 300);
      };
      rowsEl.addEventListener('click', (e) => {
        const r = e.target.closest('.row');
        if (r) select(+r.dataset.id);
      });
      rowsEl.addEventListener('keydown', (e) => {
        const r = e.target.closest('.row');
        if (r && e.key === 'Enter') select(+r.dataset.id);
      });
      $('.arch').addEventListener('click', archive);
      $('.undo').addEventListener('click', () => {
        if (!last) return;
        last.a = 0;
        toastEl.classList.remove('on');
        folder = 'inbox';
        $$('.f').forEach((b) => b.classList.toggle('on', b.dataset.f === 'inbox'));
        $('.lh h2').textContent = 'Inbox';
        renderList(true);
        select(last.id);
      });
      $('.stb').addEventListener('click', () => {
        const m = mail.find((x) => x.id === sel);
        if (!m) return;
        m.star = m.star ? 0 : 1;
        $('.stb').classList.toggle('on', !!m.star);
        $('.stb').setAttribute('aria-pressed', String(!!m.star));
      });
      $$('.f').forEach((b) =>
        b.addEventListener('click', () => {
          folder = b.dataset.f;
          $$('.f').forEach((x) => x.classList.toggle('on', x === b));
          $('.lh h2').textContent = b.querySelector('span').textContent;
          renderList(false);
          const f = vis()[0];
          if (f) select(f.id);
          else {
            sel = 0;
            renderMsg(null);
          }
        })
      );
      $('.srch input').addEventListener('input', (e) => {
        q = e.target.value.trim().toLowerCase();
        renderList(false);
      });
      $$('.qr button').forEach((b) =>
        b.addEventListener('click', () => {
          $('.rin').value = b.textContent;
          $('.rin').focus({ preventScroll: true });
        })
      );
      $('.rbar').addEventListener('submit', (e) => {
        e.preventDefault();
        const v = $('.rin');
        if (!v.value.trim()) return;
        v.value = '';
        toast('Reply sent', false);
      });
      const openC = () => {
        cmp.classList.add('on');
        $('.c-to').focus({ preventScroll: true });
      };
      const closeC = () => {
        cmp.classList.remove('on');
        ['.c-to', '.c-sub', '.c-body'].forEach((s) => ($(s).value = ''));
      };
      $('.comp').addEventListener('click', openC);
      $('.cx').addEventListener('click', closeC);
      $('.c-send').addEventListener('click', () => {
        closeC();
        toast('Message sent', false);
      });
      renderList(false);
      select(1);

      // Autoplay: pick a message, archive it, write a new one. Real input hands over for 4s.
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
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        const shown = moveTo(el, fx, fy);
        cur.classList.toggle('off', !shown);
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn();
        return true;
      };
      const type = async (input, text) => {
        const f = input.closest('.field');
        if (f) f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          input.value += ch;
          await wait(34 + Math.random() * 40);
        }
        if (f) f.classList.remove('is-auto');
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
          if (cmp.classList.contains('on')) closeC();
          if (folder !== 'inbox') $('.f[data-f="inbox"]').click();
          if (vis().length < 5) {
            mail.forEach((m) => (m.a = 0));
            renderList(true);
          }
          const list = vis();
          const nx = list[(list.findIndex((m) => m.id === sel) + 1) % list.length];
          if (!(await act(rowsEl.querySelector(`[data-id="${nx.id}"]`), () => select(nx.id), 0.5, 0.5))) continue;
          await wait(1700);
          if (!(await act($('.arch'), archive))) continue;
          await wait(2300);
          if (!(await act($('.comp'), openC))) continue;
          await wait(500);
          if (!(await type($('.c-to'), 'aiko@halden.co'))) continue;
          if (!(await type($('.c-sub'), 'Receipt for October'))) continue;
          if (!(await type($('.c-body'), 'Thanks Aiko, I will forward the receipt to Northgate today.'))) continue;
          await wait(400);
          if (!(await act($('.c-send'), () => $('.c-send').click()))) continue;
          await wait(3000);
        }
      })();
    },
    prompt: `Build a three-pane email client screen for a SaaS product, full viewport (height: 100dvh). The page background is a soft off-white surface; the three panes sit on it as rounded white panels with a 1px hairline and a soft layered shadow.

Layout: CSS grid, columns 216px / 336px / minmax(0, 1fr), 12px gap and padding. Left: a folder sidebar with the brand mark, a primary gradient "Compose" button, folder rows 36px tall with a line icon and a count (Inbox, Starred, Sent, Drafts, Archive), a small Labels group with colour chips and the signed-in user at the bottom. Middle: the message list with a title and message count, a search field, then rows (36px initials avatar on a blue tint, sender, time in mono, bold subject, one-line grey preview, an accent dot for unread). The selected row sits on a soft accent tint. Right: the reading pane with a 56px toolbar (archive, delete, label, then reply, star, more), a scrolling message (22px subject, avatar + sender + "to me" + date, 14px body at a 560px reading width, an attachment chip, an "earlier messages" line) and a reply bar pinned to the bottom. Compose opens a 380px popover anchored bottom right with To, Subject and body fields and a Send button.

Behaviour: selecting a row marks it read (dot and bold drop away), updates the unread count and cross-fades the pane (opacity 0 to 1, translateY 8px to 0). Archive slides the row out (translateX 56px and opacity 0, 300ms), then the remaining rows glide up with a FLIP transform on a critically damped spring (587ms), the next message opens and a toast with Undo appears; Undo restores the row in place. Star toggles a filled star, folders filter the list, search filters live, Enter sends the reply.

Accessibility: rows are focusable and open on Enter, icon buttons have aria-labels, the toast is role="status", the dialog has an aria-label, focus-visible rings everywhere. Phone (under 760px): hide the sidebar and the reading pane, the list fills the screen and compose goes near full width. Use your accent color for the primary button, unread dots and selection. Plain HTML, CSS and JS, no libraries; React-friendly structure (FolderSidebar, MessageList, MessageRow, ReadingPane, ComposePopover, Toast).`,
  });

  // ---------------------------------------------------------------- 2. team chat
  ML.add({
    id: 'app-inbox-team',
    cat: 'app-inbox',
    title: 'Team chat with threads',
    sub: 'Reactions count up, a thread slides in',
    html: `
<div class="app">
  <aside class="side">
    <div class="brand"><span class="mark">${I(P.mark, 16)}</span>Solace Studio<span class="wsd">${I(P.down, 15)}</span></div>
    <p class="lbl">Channels</p>
    <nav class="cl" aria-label="Channels">
      <button class="c on" type="button" data-c="design">${I(P.hash, 16)}<span>design-crit</span><em class="un"></em></button>
      <button class="c" type="button" data-c="launch">${I(P.hash, 16)}<span>launch-q4</span></button>
      <button class="c" type="button" data-c="client">${I(P.hash, 16)}<span>client-notes</span></button>
      <button class="c" type="button" data-c="lead">${I(P.lock, 16)}<span>leadership</span></button>
    </nav>
    <p class="lbl dm">Direct messages</p>
    <nav class="cl">
      <p class="p"><i class="pr on"></i>Tomas Lindqvist</p><p class="p"><i class="pr on"></i>Aiko Tan</p><p class="p"><i class="pr"></i>Priya Nair</p><p class="p"><i class="pr on"></i>Daniel Okafor</p>
    </nav>
  </aside>
  <section class="main">
    <header class="hd">
      <div><h2><span>#</span><b class="cn">design-crit</b></h2><p class="tp">Solace Studio website review</p></div>
      <span class="avs"><i class="av t1">MR</i><i class="av t2">TL</i><i class="av t3">AT</i><i class="av t4">+5</i></span>
      <button class="ib" type="button" aria-label="Search">${I(P.search, 18)}</button>
    </header>
    <div class="msgs sc"><div class="in"></div></div>
    <p class="typing"><span class="dots"><i></i><i></i><i></i></span><b></b></p>
    <form class="comp">
      <div class="box field"><input class="cin" type="text" placeholder="Message #design-crit" aria-label="Message">
        <span class="tl2">${I(P.bold, 16)}${I(P.italic, 16)}${I(P.at, 16)}${I(P.smile, 16)}</span>
        <button class="cta" type="submit" aria-label="Send">${I(P.up, 16, 2.4)}</button></div>
    </form>
    <aside class="thr" aria-label="Thread" aria-hidden="true">
      <header><b>Thread</b><span>in #design-crit</span><button class="ib thx" type="button" aria-label="Close thread">${I(P.x, 17)}</button></header>
      <div class="tbody sc"></div>
      <form class="tform"><div class="field"><input class="tin" type="text" placeholder="Reply in thread" aria-label="Reply in thread"><button class="cta" type="submit" aria-label="Send reply">${I(P.up, 16, 2.4)}</button></div></form>
    </aside>
  </section>
  ${CURSOR}
</div>`,
    css: BASE + `
.d .app{display:grid;grid-template-columns:244px minmax(0,1fr);height:100%;background:var(--ml-bg)}
.d .side{display:flex;flex-direction:column;min-height:0;padding:18px 12px;background:var(--ml-surface);border-right:1px solid var(--ml-line)}
.d .wsd{display:grid;margin-left:auto;color:var(--ml-muted)}
.d .side .brand{padding:2px 6px 18px}
.d .cl{display:flex;flex-direction:column;gap:2px}
.d .c{display:flex;align-items:center;gap:9px;height:34px;padding:0 10px;border:0;border-radius:10px;background:none;color:var(--ml-ink-2);font-size:14px;font-weight:500;text-align:left;cursor:pointer;transition:background-color .2s ease,color .2s ease}
.d .c svg{color:var(--ml-muted)}
.d .c:hover{background:rgba(220,228,240,.5)}
.d .c.on{background:var(--ml-accent-soft);color:var(--ml-accent-ink);font-weight:650}
.d .c.on svg{color:var(--ml-accent)}
.d .c em{margin-left:auto;min-width:20px;padding:3px 6px;border-radius:999px;background:var(--ml-accent);color:#fff;font:650 11px/1 var(--ml-mono);font-style:normal;text-align:center}
.d .c em:empty{display:none}
.d .dm{margin-top:22px}
.d .p{display:flex;align-items:center;gap:10px;height:32px;padding:0 10px;font-size:14px;color:var(--ml-ink-2)}
.d .pr{width:9px;height:9px;border-radius:50%;background:transparent;box-shadow:inset 0 0 0 1.5px var(--ml-bar)}
.d .pr.on{background:#1DB954;box-shadow:none}
.d .main{position:relative;display:flex;flex-direction:column;min-width:0;min-height:0;overflow:hidden}
.d .hd{display:flex;flex:none;align-items:center;gap:14px;height:68px;padding:0 24px;border-bottom:1px solid var(--ml-line)}
.d .hd > div{flex:1;min-width:0}
.d .hd h2{display:flex;align-items:baseline;gap:4px;font-size:17px;font-weight:650;letter-spacing:-.02em}
.d .hd h2 span{color:var(--ml-muted);font-weight:500}
.d .tp{overflow:hidden;margin-top:1px;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .avs{display:flex}
.d .avs .av{position:relative;width:28px;height:28px;margin-left:-6px;font-size:10px;box-shadow:0 0 0 2px var(--ml-bg)}
.d .avs .av:first-child{margin-left:0}
.d .avs .av:nth-child(1){z-index:4}.d .avs .av:nth-child(2){z-index:3}.d .avs .av:nth-child(3){z-index:2}
.d .msgs{flex:1;display:flex;flex-direction:column}
.d .in{display:flex;flex-direction:column;justify-content:flex-end;min-height:100%;padding:12px 12px 8px}
.d .day{display:flex;align-items:center;gap:12px;margin:14px 12px 6px;font-size:12px;font-weight:600;color:var(--ml-muted)}
.d .day::before,.d .day::after{content:"";flex:1;height:1px;background:var(--ml-line)}
.d .m{position:relative;display:grid;grid-template-columns:38px minmax(0,1fr);gap:12px;padding:8px 12px;border-radius:14px;transition:background-color .2s ease}
.d .m:hover{background:var(--ml-surface)}
.d .m.enter{animation:ib-in 480ms var(--ml-spring) both}
.d .mb{min-width:0;max-width:760px}
.d .mh{display:flex;align-items:baseline;gap:8px}
.d .mh b{font-size:14px;font-weight:650}
.d .mh time{font-size:12px;color:var(--ml-muted)}
.d .mt{font-size:14px;line-height:1.5;color:var(--ml-ink-2)}
.d .img{position:relative;width:260px;height:150px;margin-top:8px;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,#FFF0ED 0%,#EEF5FF 70%);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .img i{position:absolute}
.d .img .sun{top:22px;right:54px;width:30px;height:30px;border-radius:50%;background:var(--ml-accent-2)}
.d .img .h1{left:-8%;bottom:0;width:70%;height:62%;background:var(--ml-accent-line);clip-path:polygon(0 100%,45% 8%,100% 100%)}
.d .img .h2{right:-6%;bottom:0;width:66%;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,52% 6%,100% 100%)}
.d .fn{display:inline-flex;align-items:center;gap:6px;margin-top:6px;font-size:12px;color:var(--ml-muted)}
.d .rx{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.d .chip{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 9px;border:0;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-ink-2);font-size:12.5px;font-weight:600;cursor:pointer;transition:background-color .2s ease,box-shadow .2s ease,transform 90ms ease-out}
.d .chip span{font-variant-numeric:tabular-nums}
.d .chip svg{color:var(--ml-muted);transition:color .2s ease}
.d .chip.on{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent-ink)}
.d .chip.on svg{color:var(--ml-accent)}
.d .chip.pop{animation:ib-pop 420ms var(--ml-bounce)}
.d .chip.add{width:30px;padding:0;justify-content:center;opacity:0;transition:opacity .2s ease}
.d .m:hover .chip.add,.d .chip.add.press{opacity:1}
.d .tl{display:inline-flex;align-items:center;gap:8px;margin-top:8px;padding:4px 10px 4px 4px;border:0;border-radius:10px;background:none;font-size:12.5px;font-weight:600;color:var(--ml-accent-ink);cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .tl:hover,.d .tl.press{background:var(--ml-accent-soft)}
.d .tl .av{width:24px;height:24px;margin-left:-5px;font-size:8.5px;box-shadow:0 0 0 2px var(--ml-bg)}
.d .tl .av:first-child{margin-left:0}
.d .tl:hover .av{box-shadow:0 0 0 2px var(--ml-accent-soft)}
.d .tl small{font-size:12px;font-weight:500;color:var(--ml-muted)}
.d .typing{display:flex;align-items:center;gap:8px;height:24px;padding:0 26px;font-size:12.5px;color:var(--ml-muted);opacity:0;transition:opacity .25s ease}
.d .typing.on{opacity:1}
.d .dots{display:inline-flex;gap:3px}
.d .dots i{width:5px;height:5px;border-radius:50%;background:var(--ml-accent-2);animation:ib-dot 1s ease-in-out infinite}
.d .dots i:nth-child(2){animation-delay:.15s}.d .dots i:nth-child(3){animation-delay:.3s}
.d .comp{flex:none;padding:0 20px 18px}
.d .box{height:48px;padding:0 6px 0 16px;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .box input{font-size:14px}
.d .tl2{display:flex;gap:12px;color:var(--ml-muted)}
.d .box .cta{width:36px;height:36px;padding:0;border-radius:10px}
.d .thr{position:absolute;top:0;right:0;bottom:0;z-index:20;display:flex;flex-direction:column;width:368px;max-width:100%;background:var(--ml-bg);box-shadow:inset 1px 0 0 var(--ml-line),-18px 0 40px rgba(35,15,10,.1);transform:translateX(104%);visibility:hidden;transition:transform var(--ml-spring-dur) var(--ml-spring),visibility 0s linear var(--ml-spring-dur)}
.d .thr.on{transform:none;visibility:visible;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .thr header{display:flex;align-items:center;gap:8px;flex:none;height:68px;padding:0 14px 0 20px;border-bottom:1px solid var(--ml-line);font-size:15px}
.d .thr header span{flex:1;font-size:12.5px;color:var(--ml-muted)}
.d .tbody{flex:1;padding:10px 8px}
.d .tbody .m{padding:8px 12px}
.d .tsep{display:flex;align-items:center;gap:10px;margin:8px 12px;font-size:12px;font-weight:600;color:var(--ml-muted)}
.d .tsep::after{content:"";flex:1;height:1px;background:var(--ml-line)}
.d .tform{flex:none;padding:10px 14px 16px}
.d .tform .field{height:44px;padding-right:5px;background:var(--ml-surface);box-shadow:none}
.d .tform .cta{width:34px;height:34px;padding:0;border-radius:10px}
@keyframes ib-dot{0%,100%{transform:translateY(0);opacity:.5}40%{transform:translateY(-3px);opacity:1}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side,.d .tl2{display:none}
  .d .hd{padding:0 14px}
  .d .img{width:100%;max-width:260px}
}
@media (prefers-reduced-motion: reduce){.d .dots i{animation:none}}`,
    run: (root) => {
      const sv = (d) => `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = {
        thumb: sv('<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>'),
        heart: sv('<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>'),
        spark: sv('<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>'),
        check: sv('<path d="M20 6 9 17l-5-5"/>'),
        add: sv('<path d="M22 11v1a10 10 0 1 1-9-10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/><path d="M16 5h6"/><path d="M19 2v6"/>'),
      };
      const who = { Maya: ['MR', 1, 'Maya Reyes'], Tomas: ['TL', 2, 'Tomas Lindqvist'], Aiko: ['AT', 3, 'Aiko Tan'], Priya: ['PN', 1, 'Priya Nair'], Daniel: ['DO', 2, 'Daniel Okafor'], Hana: ['HK', 3, 'Hana Kim'], Luis: ['LO', 1, 'Luis Ortega'] };
      const chans = {
        design: { name: 'design-crit', topic: 'Solace Studio website review', ph: 'Message #design-crit', items: [
          { day: 'Monday, 12 October' },
          { id: 'a1', w: 'Daniel', time: '3:20 PM', text: 'Round two of the type scale is in the review file. Body copy is now 17px on desktop.', rx: [['thumb', 2, 0]] },
          { id: 'a2', w: 'Hana', time: '3:41 PM', text: 'Looks calmer already. I would keep the heading weight at 650.', rx: [] },
          { day: 'Tuesday, 13 October' },
          { id: 'a3', w: 'Priya', time: '4:48 PM', text: 'Client moved the review to tomorrow morning. Please have v3 ready by 9.', rx: [['thumb', 2, 0], ['check', 1, 0]] },
          { id: 'a4', w: 'Tomas', time: '5:02 PM', text: 'On it. I will export the mobile frames tonight.', rx: [] },
          { day: 'Today' },
          { id: 'a5', w: 'Maya', time: '9:12 AM', text: 'Homepage v3 is up in the review file. The biggest change is the hero crop, take a look when you have a minute.', rx: [['thumb', 3, 0], ['spark', 1, 0]] },
          { id: 'a6', w: 'Aiko', time: '9:26 AM', text: 'The crop feels right. Is the headline still holding two lines at 1280?', rx: [['thumb', 2, 0]], th: [['Maya', '9:30 AM', 'Checking now.'], ['Aiko', '9:34 AM', 'It wraps to three below 1180. I can tighten the tracking.'], ['Tomas', '9:41 AM', 'Tighten it a touch, the line breaks are nicer at two lines.']] },
          { id: 'a7', w: 'Daniel', time: '9:48 AM', text: 'Exported the new crop for the client deck.', img: 'hero-crop-v3.png', rx: [['spark', 2, 0]] },
          { id: 'a8', w: 'Priya', time: '10:02 AM', text: 'Client signed off on the footer. Moving to build handoff tomorrow.', rx: [['heart', 4, 0]] },
        ] },
        launch: { name: 'launch-q4', topic: 'Fernway campaign planning', ph: 'Message #launch-q4', items: [
          { day: 'Tuesday, 13 October' },
          { id: 'b1', w: 'Hana', time: '2:10 PM', text: 'Draft of the launch checklist is in the doc. 14 items, 9 already owned.', rx: [['thumb', 4, 0]] },
          { id: 'b2', w: 'Luis', time: '2:32 PM', text: 'I can take the press list and the partner emails.', rx: [['check', 2, 0]] },
          { day: 'Today' },
          { id: 'b3', w: 'Maya', time: '8:55 AM', text: 'Launch moved to Tuesday 3 November. Everything else stays in the same order.', rx: [['spark', 3, 0]] },
          { id: 'b4', w: 'Aiko', time: '9:20 AM', text: 'Pricing page copy is ready for review.', rx: [['thumb', 1, 0]] },
        ] },
      };
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const inEl = $('.in');
      const msgsEl = $('.msgs');
      const thr = $('.thr');
      const cur = $('.cur');
      let ch = 'design';
      let thId = null;
      let seq = 100;
      const av = (k, s) => `<span class="av t${who[k][1]}"${s ? ` style="width:${s}px;height:${s}px"` : ''}>${who[k][0]}</span>`;
      const rxHTML = (m) =>
        `<div class="rx">${(m.rx || []).map((r, k) => `<button class="chip${r[2] ? ' on' : ''}" type="button" data-k="${k}" aria-pressed="${!!r[2]}">${IC[r[0]]}<span>${r[1]}</span></button>`).join('')}<button class="chip add" type="button" aria-label="Add reaction">${IC.add}</button></div>`;
      const tlHTML = (m) =>
        m.th ? `<button class="tl" type="button"><span class="avs">${[...new Set(m.th.map((t) => t[0]))].slice(0, 3).map((k) => av(k, 24)).join('')}</span>${m.th.length} ${m.th.length === 1 ? 'reply' : 'replies'}<small>Last reply ${m.th[m.th.length - 1][1]}</small></button>` : '';
      const msgHTML = (m, enter) =>
        `<div class="m${enter ? ' enter' : ''}" data-id="${m.id}">${av(m.w)}<div class="mb"><p class="mh"><b>${who[m.w][2]}</b><time>${m.time}</time></p><p class="mt">${m.text}</p>${m.img ? `<div class="img"><i class="sun"></i><i class="h1"></i><i class="h2"></i></div><p class="fn">${m.img}</p>` : ''}${rxHTML(m)}${tlHTML(m)}</div></div>`;
      const find = (id) => {
        for (const c of Object.values(chans)) for (const m of c.items) if (m.id === id) return m;
      };
      const toBottom = () => (msgsEl.scrollTop = msgsEl.scrollHeight);
      const render = () => {
        const c = chans[ch];
        inEl.innerHTML = c.items.map((m) => (m.day ? `<p class="day">${m.day}</p>` : msgHTML(m))).join('');
        $('.cn').textContent = c.name;
        $('.tp').textContent = c.topic;
        $('.cin').placeholder = c.ph;
        toBottom();
      };
      const setRx = (m, k, mine, anim) => {
        const r = m.rx[k];
        if (!!r[2] === mine) return;
        r[2] = mine ? 1 : 0;
        r[1] += mine ? 1 : -1;
        const chip = inEl.querySelector(`[data-id="${m.id}"] .chip[data-k="${k}"]`);
        if (!chip) return;
        chip.classList.toggle('on', mine);
        chip.setAttribute('aria-pressed', String(mine));
        chip.querySelector('span').textContent = r[1];
        if (anim) {
          chip.classList.remove('pop');
          void chip.offsetWidth;
          chip.classList.add('pop');
        }
      };
      const append = (w, text) => {
        const m = { id: 'n' + ++seq, w, time: '10:' + (10 + (seq % 40)) + ' AM', text, rx: [] };
        chans[ch].items.push(m);
        inEl.insertAdjacentHTML('beforeend', msgHTML(m, true));
        const ms = inEl.querySelectorAll('.m');
        if (ms.length > 11) ms[0].remove();
        toBottom();
      };
      const openThread = (id) => {
        const m = find(id);
        if (!m || !m.th) return;
        thId = id;
        thr.classList.add('on');
        thr.setAttribute('aria-hidden', 'false');
        renderThread();
      };
      const closeThread = () => {
        thId = null;
        thr.classList.remove('on');
        thr.setAttribute('aria-hidden', 'true');
      };
      const renderThread = () => {
        const m = find(thId);
        if (!m) return;
        const body = $('.tbody');
        body.innerHTML = `${msgHTML({ ...m, rx: [], th: null, img: null })}<p class="tsep">${m.th.length} ${m.th.length === 1 ? 'reply' : 'replies'}</p>${m.th.map((t) => `<div class="m"><span class="av t${who[t[0]][1]}">${who[t[0]][0]}</span><div class="mb"><p class="mh"><b>${who[t[0]][2]}</b><time>${t[1]}</time></p><p class="mt">${t[2]}</p></div></div>`).join('')}`;
        body.scrollTop = body.scrollHeight;
      };
      const refreshTl = (m) => {
        const el = inEl.querySelector(`[data-id="${m.id}"] .tl`);
        if (el) el.outerHTML = tlHTML(m);
      };
      inEl.addEventListener('click', (e) => {
        const row = e.target.closest('.m');
        if (!row) return;
        const m = find(row.dataset.id);
        const chip = e.target.closest('.chip');
        if (chip && chip.classList.contains('add')) {
          const have = m.rx.map((r) => r[0]);
          const next = ['thumb', 'heart', 'spark', 'check'].find((n) => !have.includes(n));
          if (next) {
            m.rx.push([next, 0, 0]);
            row.querySelector('.rx').outerHTML = rxHTML(m);
            setRx(m, m.rx.length - 1, true, true);
          }
        } else if (chip) setRx(m, +chip.dataset.k, !m.rx[+chip.dataset.k][2], true);
        else if (e.target.closest('.tl')) openThread(m.id);
      });
      $('.thx').addEventListener('click', closeThread);
      $('.comp').addEventListener('submit', (e) => {
        e.preventDefault();
        const v = $('.cin');
        if (!v.value.trim()) return;
        append('Maya', v.value.trim());
        v.value = '';
      });
      $('.tform').addEventListener('submit', (e) => {
        e.preventDefault();
        const v = $('.tin');
        const m = find(thId);
        if (!v.value.trim() || !m) return;
        m.th.push(['Maya', '10:12 AM', v.value.trim()]);
        v.value = '';
        renderThread();
        refreshTl(m);
      });
      $$('.c').forEach((b) =>
        b.addEventListener('click', () => {
          if (!chans[b.dataset.c] || b.dataset.c === ch) return;
          ch = b.dataset.c;
          closeThread();
          $$('.c').forEach((x) => x.classList.toggle('on', x === b));
          render();
        })
      );
      $('.un').textContent = '3';
      render();

      // Autoplay: react, open the thread, reply, post a message, a teammate answers.
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
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        const shown = moveTo(el, fx, fy);
        cur.classList.toggle('off', !shown);
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn();
        return true;
      };
      const type = async (input, text) => {
        const f = input.closest('.field');
        if (f) f.classList.add('is-auto');
        for (const ch2 of text) {
          if (!idle()) return false;
          input.value += ch2;
          await wait(34 + Math.random() * 40);
        }
        if (f) f.classList.remove('is-auto');
        return true;
      };
      cur.style.transform = 'translate(640px,520px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (thId) closeThread();
          if (ch !== 'design') $('.c[data-c="design"]').click();
          const m5 = find('a5');
          const m6 = find('a6');
          setRx(m5, 0, false, false);
          if (m6.th.length > 3) {
            m6.th.length = 3;
            refreshTl(m6);
          }
          const chip = inEl.querySelector('[data-id="a5"] .chip[data-k="0"]');
          if (!(await act(chip, () => setRx(m5, 0, true, true), 0.5, 0.5))) continue;
          await wait(1500);
          const tl = inEl.querySelector('[data-id="a6"] .tl');
          if (!(await act(tl, () => openThread('a6'), 0.3, 0.5))) continue;
          await wait(900);
          if (!(await act($('.tin'), () => $('.tin').closest('.field').classList.add('is-auto'), 0.4, 0.5))) continue;
          if (!(await type($('.tin'), 'Tightening the tracking by 0.01em now.'))) continue;
          await wait(300);
          $('.tform').requestSubmit();
          await wait(1800);
          if (!(await act($('.thx'), closeThread))) continue;
          await wait(800);
          if (!(await act($('.cin'), () => {}, 0.3, 0.5))) continue;
          if (!(await type($('.cin'), 'Pushing v3.1 after lunch.'))) continue;
          await wait(300);
          $('.comp').requestSubmit();
          await wait(900);
          const tp = $('.typing');
          tp.querySelector('b').textContent = 'Hana is typing';
          tp.classList.add('on');
          await wait(1800);
          tp.classList.remove('on');
          append('Hana', 'Perfect, I will review it first thing tomorrow.');
          await wait(3200);
        }
      })();
    },
    prompt: `Build a team chat screen for a SaaS product, full viewport (height: 100dvh), clearly a channel-based chat (not an inbox).

Layout: CSS grid, columns 244px / minmax(0, 1fr). Left: a soft off-white channel sidebar with the workspace name and a logo tile, a "Channels" group (hash icon, name, a small accent count pill for unread; the active channel on an accent-soft tint) and a "Direct messages" group with presence dots (green online, hollow offline). Right: a 68px channel header (#name, a one-line topic, a stack of member avatars, a search button), a bottom-anchored scrolling message list, a typing line and a composer. Messages: 38px initials avatar on a blue tint, bold name, small time, 14px body, optional drawn image attachment (CSS gradient sky, sun circle and two mountain clip-paths) with a file name, a row of reaction chips and a "3 replies" link with a tiny avatar stack. Day dividers are a hairline with a centered label (Monday, Tuesday, Today).

Behaviour: reaction chips are toggle buttons (aria-pressed). Clicking one counts the number up or down, tints the chip with your accent color and runs a 420ms scale pop (1 to 1.18 to 1) on an overshoot curve. A hover-only "+" chip adds a new reaction. Clicking "replies" slides a 368px thread panel in from the right (transform: translateX(104%) to 0, 587ms critically damped spring, visibility toggled after the transition) with the parent message, a "N replies" separator, the replies and a reply field; Enter posts into the thread and bumps the reply count in the channel. The composer posts on Enter or the round send button; new messages rise in (opacity and translateY 8px, 480ms) and the list stays pinned to the bottom. A "Name is typing" line fades in with three bouncing dots (translateY, staggered 150ms) before a teammate message arrives.

Accessibility: channels are buttons, the thread is an aside with aria-label and aria-hidden kept in sync, icon buttons have aria-labels, focus-visible rings, reduced motion removes the dot bounce. Phone (under 760px): hide the sidebar and the composer tool icons, the thread panel covers the full width. Plain HTML, CSS and JS, no libraries; React-friendly structure (ChannelSidebar, ChannelHeader, MessageList, Message, ReactionChip, ThreadPanel, Composer).`,
  });

  // ---------------------------------------------------------------- 3. live chat agent console
  ML.add({
    id: 'app-inbox-live',
    cat: 'app-inbox',
    title: 'Live chat agent console',
    sub: 'Waiting timers tick, canned reply drops in',
    html: `
<div class="app">
  <aside class="vl">
    <header><div class="brand"><span class="mark">${I(P.msg, 15)}</span>Live chats</div><span class="onl"><i></i>Online</span></header>
    <p class="sum"><b class="sw"></b><span class="sa"></span></p>
    <ul class="vs sc" aria-label="Visitors"></ul>
  </aside>
  <section class="cv">
    <header class="ch"><span class="av cav"></span><div><h2 class="cn"></h2><p class="cp"></p></div><button class="btn" type="button">${I(P.arrowR, 15)}Transfer</button><button class="btn" type="button">${I(P.check, 15)}Close chat</button></header>
    <div class="ms sc"><div class="in"></div></div>
    <div class="pop" role="listbox" aria-label="Canned replies"></div>
    <form class="cm">
      <div class="box field"><textarea class="ta" rows="2" aria-label="Reply"></textarea>
        <div class="bt"><button class="ib rep" type="button" aria-label="Canned replies" aria-expanded="false">${I(P.zap, 17)}</button><button class="ib" type="button" aria-label="Attach">${I(P.clip, 17)}</button><button class="ib" type="button" aria-label="Emoji">${I(P.smile, 17)}</button><span class="hint">Enter to send</span><button class="cta snd" type="submit">${I(P.send, 15)}Send</button></div>
      </div>
    </form>
  </section>
  <aside class="inf sc" aria-label="Visitor details"></aside>
  ${CURSOR}
</div>`,
    css: BASE + `
.d .app{display:grid;grid-template-columns:256px minmax(0,1fr) 256px;height:100%;background:var(--ml-bg)}
.d .vl{display:flex;flex-direction:column;min-height:0;background:var(--ml-surface);border-right:1px solid var(--ml-line)}
.d .vl > header{display:flex;align-items:center;justify-content:space-between;flex:none;height:64px;padding:0 16px 0 18px}
.d .onl{display:inline-flex;align-items:center;gap:6px;height:26px;padding:0 10px;border-radius:999px;background:rgba(29,185,84,.1);font-size:12px;font-weight:650;color:#12893C}
.d .onl i{width:7px;height:7px;border-radius:50%;background:#1DB954}
.d .sum{flex:none;padding:0 18px 12px;font-size:12.5px;color:var(--ml-muted)}
.d .sum b{font-weight:650;color:#B25E00}
.d .vs{flex:1;display:flex;flex-direction:column;gap:2px;padding:0 8px 12px;list-style:none}
.d .v{position:relative;display:grid;grid-template-columns:36px minmax(0,1fr);gap:2px 12px;padding:12px;border-radius:14px;cursor:pointer;transition:background-color .2s ease,opacity .3s ease}
.d .v:hover{background:rgba(220,228,240,.45)}
.d .v.on{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-accent-line),var(--ml-shadow)}
.d .v .av{grid-row:1/4}
.d .vt{display:flex;align-items:center;gap:8px}
.d .vt b{flex:1;min-width:0;overflow:hidden;font-size:13.5px;font-weight:650;white-space:nowrap;text-overflow:ellipsis}
.d .tm{display:inline-flex;align-items:center;gap:4px;height:22px;padding:0 8px;border-radius:999px;font:650 11px/1 var(--ml-mono);font-variant-numeric:tabular-nums;white-space:nowrap}
.d .tm.w{background:rgba(255,159,10,.14);color:#B25E00}
.d .tm.c{background:rgba(29,185,84,.1);color:#12893C}
.d .tm.i{background:var(--ml-bar-2);color:var(--ml-muted)}
.d .vp{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--ml-muted)}
.d .vm{overflow:hidden;font-size:12.5px;color:var(--ml-ink-2);white-space:nowrap;text-overflow:ellipsis}
.d .cv{position:relative;display:flex;flex-direction:column;min-width:0;min-height:0}
.d .ch{display:flex;align-items:center;gap:12px;flex:none;height:64px;padding:0 20px;border-bottom:1px solid var(--ml-line)}
.d .ch > div{flex:1;min-width:0}
.d .ch h2{font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .cp{overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .ch .btn{height:34px;font-size:13px}
.d .ms{flex:1}
.d .in{display:flex;flex-direction:column;justify-content:flex-end;gap:10px;min-height:100%;padding:20px 24px}
.d .sys{align-self:center;padding:5px 12px;border-radius:999px;background:var(--ml-surface);font-size:12px;color:var(--ml-muted)}
.d .b{display:flex;align-items:flex-end;gap:10px;max-width:78%}
.d .b.me{align-self:flex-end;flex-direction:row-reverse}
.d .b.enter{animation:ib-in 460ms var(--ml-spring) both}
.d .b .av{width:30px;height:30px;font-size:10.5px}
.d .bb{padding:10px 14px;border-radius:16px 16px 16px 6px;background:var(--ml-surface);font-size:14px;line-height:1.5;color:var(--ml-ink)}
.d .b.me .bb{border-radius:16px 16px 6px 16px;background:var(--ml-accent-soft);color:var(--ml-accent-ink);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .bb small{display:block;margin-top:3px;font-size:11px;color:var(--ml-muted)}
.d .b.me .bb small{color:var(--ml-accent)}
.d .nte{display:flex;gap:10px;align-self:stretch;margin:2px 0;padding:12px 14px;border-radius:14px;border:1px dashed var(--ml-accent-line);background:#F6FAFF;font-size:13px;line-height:1.5;color:var(--ml-ink-2)}
.d .nte svg{flex:none;margin-top:2px;color:var(--ml-accent)}
.d .nte b{display:block;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .typ .bb{display:flex;gap:4px;align-items:center;height:38px}
.d .typ i{width:6px;height:6px;border-radius:50%;background:var(--ml-accent-2);animation:ib-dot 1s ease-in-out infinite}
.d .typ i:nth-child(2){animation-delay:.15s}.d .typ i:nth-child(3){animation-delay:.3s}
.d .pop{position:absolute;left:20px;bottom:128px;z-index:20;display:none;flex-direction:column;width:360px;padding:6px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg)}
.d .pop.on{display:flex;animation:ib-in 420ms var(--ml-spring) both}
.d .pop .lbl{padding:8px 10px 6px}
.d .ci{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:2px 10px;padding:9px 10px;border:0;border-radius:11px;background:none;text-align:left;cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .ci:hover,.d .ci.press{background:var(--ml-accent-soft)}
.d .ci b{font-size:13.5px;font-weight:650}
.d .ci kbd{font:600 11px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d .ci span{grid-column:1/3;overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .cm{flex:none;padding:0 20px 18px}
.d .box{flex-direction:column;align-items:stretch;gap:0;height:auto;padding:0;border-radius:16px;background:var(--ml-bg)}
.d .ta{padding:14px 16px 4px;font-size:14px;line-height:1.5}
.d .bt{display:flex;align-items:center;gap:2px;padding:6px 8px 8px 10px;color:var(--ml-ink-2)}
.d .hint{margin-left:auto;margin-right:10px;font-size:12px;color:var(--ml-muted)}
.d .bt .cta{height:34px}
.d .rep.on{background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .inf{display:flex;flex-direction:column;padding:22px 20px;background:var(--ml-bg);border-left:1px solid var(--ml-line)}
.d .ih{display:flex;flex-direction:column;align-items:center;text-align:center}
.d .ih .av{width:60px;height:60px;font-size:19px}
.d .ih b{margin-top:10px;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .ih small{font-size:12.5px;color:var(--ml-muted)}
.d .sec{margin-top:20px;padding-top:16px;border-top:1px solid var(--ml-line)}
.d .sec h3{margin-bottom:10px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .kv{display:flex;align-items:center;gap:10px;margin-top:8px;font-size:13px;color:var(--ml-ink-2)}
.d .kv svg{flex:none;color:var(--ml-muted)}
.d .kv em{margin-left:auto;font-style:normal;font-size:12px;color:var(--ml-muted)}
.d .trail{position:relative;display:flex;flex-direction:column;gap:12px;padding-left:18px}
.d .trail::before{content:"";position:absolute;left:4px;top:6px;bottom:6px;width:1px;background:var(--ml-line)}
.d .trail p{position:relative;font-size:13px;color:var(--ml-ink-2)}
.d .trail p::before{content:"";position:absolute;left:-18px;top:5px;width:9px;height:9px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2px var(--ml-bar)}
.d .trail p:first-child::before{background:var(--ml-accent);box-shadow:0 0 0 3px var(--ml-accent-soft)}
.d .trail small{display:block;font-size:11.5px;color:var(--ml-muted)}
.d .tags{display:flex;flex-wrap:wrap;gap:6px}
.d .tags span{padding:5px 10px;border-radius:999px;background:var(--ml-accent-soft);font-size:12px;font-weight:600;color:var(--ml-accent-ink)}
.d .note{padding:12px;border-radius:12px;background:var(--ml-surface);font-size:12.5px;line-height:1.5;color:var(--ml-ink-2)}
.d .swap{animation:ib-in 440ms var(--ml-spring) both}
@keyframes ib-dot{0%,100%{transform:translateY(0);opacity:.5}40%{transform:translateY(-3px);opacity:1}}
${CURSOR_CSS}
@container scr (max-width: 900px){
  .d .app{grid-template-columns:248px minmax(0,1fr)}
  .d .inf{display:none}
}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .vl{display:none}
  .d .ch{padding:0 14px}
  .d .ch .btn{display:none}
  .d .in{padding:16px 14px}
  .d .pop{left:14px;right:14px;width:auto}
  .d .hint{display:none}
}
@media (prefers-reduced-motion: reduce){.d .typ i{animation:none}}`,
    run: (root) => {
      const sv = (d, s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = {
        pin: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>',
        mon: '<rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/>',
        globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
        mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
        clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
        file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
        lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
      };
      const canned = [
        ['Greeting', '/hello', 'Hi there, thanks for reaching out. I am Maya from Corvid Coffee, happy to help.'],
        ['Discount code help', '/code', 'Newsletter codes work on orders over $40 and cannot be stacked. I have refreshed yours, please try it again.'],
        ['Shipping times', '/ship', 'Orders ship within 24 hours and usually arrive in 2 to 4 working days.'],
        ['Refund policy', '/refund', 'You can return unopened bags within 30 days for a full refund.'],
      ];
      const V0 = () => [
        { id: 1, n: 'Elena Petrova', i: 'EP', t: 1, st: 'w', w: 161, page: '/cart', pt: 'Cart, 3 items', loc: 'Lisbon, Portugal', lt: '1:14 PM', dev: 'Chrome on macOS', em: 'elena.petrova@mail.com', val: 'Cart $86.40', tags: ['Newsletter', 'First order'], note: 'Subscribed on 9 October with code AUTUMN10.', trail: [['Cart', 'now'], ['Ethiopia Guji, 250 g', '2 min ago'], ['Home', '6 min ago']], msgs: [['s', 'Chat started from the cart page at 9:37 AM'], ['b', 'Hi, I am the Corvid Coffee assistant. What can we help with?', '9:37'], ['v', 'I want to order three bags but my discount code is not applying at checkout.', '9:38'], ['b', 'Thanks, I am bringing in a teammate. One moment.', '9:38'], ['v', 'It says the code is invalid but it came from your newsletter.', '9:39'], ['n', 'Checkout log: AUTUMN10 was rejected because the cart is below the $90.00 minimum. Cart total is $86.40.']] },
        { id: 2, n: 'Kwame Mensah', i: 'KM', t: 2, st: 'w', w: 48, page: '/shipping', pt: 'Shipping and returns', loc: 'Accra, Ghana', lt: '9:21 AM', dev: 'Safari on iPhone', em: 'kwame.mensah@mail.com', val: 'No cart', tags: ['International'], note: 'No previous orders.', trail: [['Shipping and returns', 'now'], ['Ethiopia Guji, 250 g', '4 min ago']], msgs: [['s', 'Chat started from Shipping and returns'], ['v', 'Do you ship the Ethiopia beans to Ghana?', '9:40']] },
        { id: 3, n: 'Isabel Cruz', i: 'IC', t: 3, st: 'c', w: 0, page: '/orders/48210', pt: 'Order #48210', loc: 'Manila, Philippines', lt: '4:21 PM', dev: 'Chrome on Windows', em: 'isabel.cruz@mail.com', val: 'Order $54.00', tags: ['Subscriber', 'VIP'], note: 'Monthly subscriber since March.', trail: [['Order #48210', 'now'], ['Account', '3 min ago']], msgs: [['s', 'Chat started from Order #48210'], ['v', 'Hi, where is my order?', '9:30'], ['a', 'It left our roaster yesterday and the tracking link is on its way to you.', '9:32'], ['v', 'Thank you, that helps.', '9:33']] },
        { id: 4, n: 'Sam Whitfield', i: 'SW', t: 4, st: 'i', w: 240, page: '/journal/espresso', pt: 'Journal: espresso guide', loc: 'Leeds, United Kingdom', lt: '8:21 AM', dev: 'Firefox on Linux', em: 'sam.whitfield@mail.com', val: 'No cart', tags: ['Reader'], note: '', trail: [['Journal: espresso guide', '4 min ago']], msgs: [['s', 'Chat started from the journal'], ['v', 'Which grind do you recommend for a moka pot?', '9:28'], ['a', 'Medium-fine, a little coarser than espresso.', '9:29']] },
      ];
      let V = V0();
      let sel = 1;
      const $ = (s) => root.querySelector(s);
      const cur = $('.cur');
      const inEl = $('.in');
      const ta = $('.ta');
      const pop = $('.pop');
      const mmss = (n) => String(Math.floor(n / 60)).padStart(2, '0') + ':' + String(n % 60).padStart(2, '0');
      const tmHTML = (v) => (v.st === 'w' ? `<span class="tm w" data-t="${v.id}">${sv(IC.clock, 11)}${mmss(v.w)}</span>` : v.st === 'c' ? '<span class="tm c">Chatting</span>' : `<span class="tm i">Idle 4m</span>`);
      const lastMsg = (v) => [...v.msgs].reverse().find((m) => m[0] === 'v' || m[0] === 'a');
      const list = () => {
        $('.vs').innerHTML = V.map(
          (v) =>
            `<li class="v${v.id === sel ? ' on' : ''}" data-id="${v.id}" tabindex="0"><span class="av t${v.t}">${v.i}</span><div class="vt"><b>${v.n}</b>${tmHTML(v)}</div><p class="vp">${sv(IC.globe, 12)}${v.page}</p><p class="vm">${lastMsg(v)[0] === 'a' ? 'You: ' : ''}${lastMsg(v)[1]}</p></li>`
        ).join('');
        const w = V.filter((v) => v.st === 'w');
        $('.sw').textContent = w.length + ' waiting';
        $('.sa').textContent = ', longest ' + (w.length ? mmss(Math.max(...w.map((v) => v.w))) : '00:00');
      };
      const bub = (m, v, enter) =>
        m[0] === 's'
          ? `<p class="sys">${m[1]}</p>`
          : m[0] === 'n'
          ? `<div class="nte">${sv(IC.lock, 15)}<p><b>Private to your team</b>${m[1]}</p></div>`
          : `<div class="b${m[0] === 'a' ? ' me' : ''}${enter ? ' enter' : ''}">${m[0] === 'v' ? `<span class="av t${v.t}">${v.i}</span>` : m[0] === 'b' ? '<span class="av t4">CC</span>' : ''}<p class="bb">${m[1]}<small>${m[2]}</small></p></div>`;
      const info = (v) => {
        $('.inf').innerHTML = `<div class="ih swap"><span class="av t${v.t}">${v.i}</span><b>${v.n}</b><small>${v.em}</small></div>
<div class="sec swap"><h3>Visitor</h3><p class="kv">${sv(IC.pin, 15)}${v.loc}<em>${v.lt}</em></p><p class="kv">${sv(IC.mon, 15)}${v.dev}</p><p class="kv">${sv(IC.mail, 15)}${v.val}</p></div>
<div class="sec swap"><h3>Pages viewed</h3><div class="trail">${v.trail.map((t) => `<p>${t[0]}<small>${t[1]}</small></p>`).join('')}</div></div>
<div class="sec swap"><h3>Tags</h3><div class="tags">${v.tags.map((t) => `<span>${t}</span>`).join('')}</div></div>
${v.note ? `<div class="sec swap"><h3>Private note</h3><p class="note">${v.note}</p></div>` : ''}`;
      };
      const show = (id) => {
        sel = id;
        const v = V.find((x) => x.id === id);
        $('.cav').className = 'av cav t' + v.t;
        $('.cav').textContent = v.i;
        $('.cn').textContent = v.n;
        $('.cp').textContent = v.pt + ' - corvidcoffee.com' + v.page;
        ta.placeholder = 'Reply to ' + v.n.split(' ')[0];
        inEl.innerHTML = v.msgs.map((m) => bub(m, v, false)).join('');
        inEl.parentElement.scrollTop = inEl.parentElement.scrollHeight;
        [...root.querySelectorAll('.v')].forEach((r) => r.classList.toggle('on', +r.dataset.id === id));
        info(v);
      };
      const push = (v, m) => {
        v.msgs.push(m);
        if (v.id === sel) {
          const typ = inEl.querySelector('.typ');
          if (typ) typ.remove();
          inEl.insertAdjacentHTML('beforeend', bub(m, v, true));
          inEl.parentElement.scrollTop = inEl.parentElement.scrollHeight;
        }
        list();
      };
      const send = () => {
        const txt = ta.value.trim();
        const v = V.find((x) => x.id === sel);
        if (!txt || !v) return;
        ta.value = '';
        pop.classList.remove('on');
        $('.rep').classList.remove('on');
        v.st = 'c';
        push(v, ['a', txt, '9:42']);
        const rid = v.id;
        const replies = { 1: 'That worked, thank you so much!', 2: 'Great, thanks for checking.', 3: 'Perfect, thank you.', 4: 'Got it, I will try that.' };
        setTimeout(() => {
          if (!root.isConnected || rid !== sel) return;
          inEl.insertAdjacentHTML('beforeend', `<div class="b typ enter"><span class="av t${v.t}">${v.i}</span><p class="bb"><i></i><i></i><i></i></p></div>`);
          inEl.parentElement.scrollTop = inEl.parentElement.scrollHeight;
          setTimeout(() => {
            if (!root.isConnected) return;
            const t = inEl.querySelector('.typ');
            if (t) t.remove();
            if (v.msgs[v.msgs.length - 1][0] === 'a') push(v, ['v', replies[rid], '9:43']);
          }, 1700);
        }, 900);
      };
      pop.innerHTML = '<p class="lbl">Canned replies</p>' + canned.map((c, k) => `<button class="ci" type="button" data-k="${k}" role="option"><b>${c[0]}</b><kbd>${c[1]}</kbd><span>${c[2]}</span></button>`).join('');
      $('.rep').addEventListener('click', () => {
        const on = pop.classList.toggle('on');
        $('.rep').classList.toggle('on', on);
        $('.rep').setAttribute('aria-expanded', String(on));
      });
      pop.addEventListener('click', (e) => {
        const b = e.target.closest('.ci');
        if (!b) return;
        ta.value = canned[+b.dataset.k][2];
        pop.classList.remove('on');
        $('.rep').classList.remove('on');
        $('.rep').setAttribute('aria-expanded', 'false');
        ta.closest('.field').classList.add('is-auto');
        setTimeout(() => ta.closest('.field').classList.remove('is-auto'), 900);
      });
      $('.cm').addEventListener('submit', (e) => {
        e.preventDefault();
        send();
      });
      ta.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          send();
        }
      });
      $('.vs').addEventListener('click', (e) => {
        const r = e.target.closest('.v');
        if (r) show(+r.dataset.id);
      });
      $('.vs').addEventListener('keydown', (e) => {
        const r = e.target.closest('.v');
        if (r && e.key === 'Enter') show(+r.dataset.id);
      });
      list();
      show(1);
      // live waiting timers
      (async () => {
        while (root.isConnected) {
          await new Promise((r) => setTimeout(r, 1000));
          if (root.dataset.paused) continue;
          V.forEach((v) => {
            if (v.st !== 'w') return;
            v.w++;
            const el = root.querySelector(`[data-t="${v.id}"]`);
            if (el) el.lastChild.textContent = mmss(v.w);
          });
          const w = V.filter((v) => v.st === 'w');
          const sa = $('.sa');
          if (w.length && sa) sa.textContent = ', longest ' + mmss(Math.max(...w.map((v) => v.w)));
        }
      })();

      // Autoplay: open the replies menu, insert a canned reply, send it. Real input hands over for 4s.
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
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        const shown = moveTo(el, fx, fy);
        cur.classList.toggle('off', !shown);
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn();
        return true;
      };
      cur.style.transform = 'translate(600px,300px)';
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (V[0].st !== 'w' || V[0].msgs.length > 6) {
            const keep = V.map((v) => v.id === 1 ? V0()[0] : v);
            V = keep;
            list();
          }
          if (sel !== 1) show(1);
          pop.classList.remove('on');
          ta.value = '';
          await wait(600);
          if (!(await act($('.rep'), () => $('.rep').click(), 0.5, 0.5))) continue;
          await wait(900);
          if (!(await act(root.querySelector('.ci[data-k="1"]'), () => root.querySelector('.ci[data-k="1"]').click(), 0.5, 0.5))) continue;
          await wait(1200);
          if (!(await act($('.snd'), send, 0.5, 0.5))) continue;
          await wait(3600);
          if (!(await act(root.querySelector('.v[data-id="2"]'), () => show(2), 0.5, 0.5))) continue;
          await wait(2600);
        }
      })();
    },
    prompt: `Build a live chat agent console for a support tool, full viewport (height: 100dvh), three columns: visitor queue, conversation, visitor details.

Layout: CSS grid, columns 292px / minmax(0, 1fr) / 288px. Left (soft off-white, right hairline): a 64px header with the title and a green "Online" status pill, a one-line summary ("2 waiting, longest 02:41" with the count in amber) and a scrolling list of visitor rows: 36px initials avatar, name, a timer pill, the page they are on with a small globe icon, and a one-line last message. Waiting visitors get an amber pill with a clock and a mono mm:ss timer that ticks every second; chatting is a green "Chatting" pill; idle is grey. The selected row is a white card with an accent hairline and a soft shadow. Centre: a 64px header (avatar, name, "page - url", Transfer and Close chat buttons), a bottom-anchored message list (centered grey system pills, visitor bubbles on a pale surface, agent bubbles in an accent-soft tint with a 1px accent hairline) and a composer card with a textarea and a tool row: a lightning "Canned replies" icon button, attach, emoji, a "Enter to send" hint and a primary Send button. Right: avatar, name and email, then sections separated by hairlines: location with local time, device, cart value, a vertical "pages viewed" trail (current page is an accent dot with a soft ring), tag pills and a private note.

Behaviour: the lightning button opens a 360px popover above the composer listing canned replies (title, /shortcut in mono, one-line preview). Choosing one inserts its text into the textarea and flashes the field's focus ring. Send (button or Enter, Shift+Enter for a newline) appends the agent bubble, flips the visitor from waiting to chatting and removes their timer, shows a three-dot typing bubble (staggered 150ms bounce) and then a visitor reply. Clicking a visitor swaps the conversation and fades the details panel in (opacity and translateY 8px, 440ms spring). Accessibility: rows are focusable and open on Enter, the menu is a listbox, icon buttons have aria-labels, aria-expanded on the replies button. Under 1080px hide the details panel; under 760px show only the conversation. Plain HTML, CSS and JS, no libraries; React-friendly structure (VisitorQueue, VisitorRow, Conversation, CannedReplies, Composer, VisitorPanel).`,
  });

  // ---------------------------------------------------------------- 4. notification center
  ML.add({
    id: 'app-inbox-notify',
    cat: 'app-inbox',
    title: 'Notification center',
    sub: 'A new one slides in, mark all read',
    html: `
<div class="app">
  <header class="top">
    <div class="tt"><h1>Notifications</h1><p>Wednesday, 14 October</p></div>
    <button class="btn mall" type="button">${I(P.checks, 16)}Mark all as read</button>
  </header>
  <div class="tabs" role="tablist" aria-label="Filter notifications">
    <span class="ul" aria-hidden="true"></span>
    <button class="tb on" type="button" role="tab" data-f="all">All<em></em></button>
    <button class="tb" type="button" role="tab" data-f="mention">Mentions<em></em></button>
    <button class="tb" type="button" role="tab" data-f="comment">Comments<em></em></button>
    <button class="tb" type="button" role="tab" data-f="billing">Billing<em></em></button>
    <button class="tb" type="button" role="tab" data-f="activity">Activity<em></em></button>
  </div>
  <div class="body">
    <section class="lst sc" aria-label="Notifications" aria-live="polite"></section>
    <aside class="sd">
      <div class="card sm"><p class="k">Unread</p><p class="big">0</p><p class="sub">Across 5 projects</p>
        <div class="bars"></div></div>
      <div class="card st">
        <p class="k">Delivery</p>
        <div class="sw"><div><b>Quiet hours</b><small>Mute until 8:00 AM</small></div><button class="tg" type="button" role="switch" aria-checked="false" aria-label="Quiet hours"><i></i></button></div>
        <div class="sw"><div><b>Daily digest</b><small>Email at 8:00 AM</small></div><button class="tg on" type="button" role="switch" aria-checked="true" aria-label="Daily digest"><i></i></button></div>
      </div>
    </aside>
  </div>
  <div class="toast" role="status">${I(P.circleCheck, 17)}<span>You are all caught up</span></div>
  ${CURSOR}
</div>`,
    css: BASE + `
.d .app{display:grid;grid-template-rows:auto auto minmax(0,1fr);height:100%;padding:0 28px;background:var(--ml-surface)}
.d .top{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;padding:26px 0 16px}
.d h1{font-size:26px;line-height:1.15;font-weight:650;letter-spacing:-.03em}
.d .tt p{margin-top:4px;font-size:13.5px;color:var(--ml-muted)}
.d .tabs{position:relative;display:flex;gap:6px;border-bottom:1px solid var(--ml-line)}
.d .tb{display:inline-flex;align-items:center;gap:8px;height:42px;padding:0 12px;border:0;background:none;font-size:14px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .2s ease,transform 90ms ease-out}
.d .tb:hover{color:var(--ml-ink)}
.d .tb.on{color:var(--ml-accent-ink)}
.d .tb em{min-width:20px;padding:3px 6px;border-radius:999px;background:var(--ml-bar-2);font:650 11px/1 var(--ml-mono);font-style:normal;text-align:center;color:var(--ml-muted);transition:background-color .2s ease,color .2s ease}
.d .tb.on em{background:var(--ml-accent);color:#fff}
.d .tb em:empty{display:none}
.d .ul{position:absolute;left:0;bottom:-1px;width:100px;height:2px;border-radius:2px;background:var(--ml-accent);transform-origin:0 50%;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .body{display:grid;grid-template-columns:minmax(0,1fr) 296px;gap:20px;min-height:0;padding:20px 0 24px}
.d .lst{position:relative;padding:8px 10px 14px;border-radius:20px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .gh{padding:14px 12px 6px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .nt{position:relative;display:grid;grid-template-columns:40px minmax(0,1fr) auto;gap:14px;padding:13px 12px;border-radius:14px;cursor:pointer;transition:transform var(--ml-spring-dur) var(--ml-spring),background-color .25s ease}
.d .nt:hover{background:var(--ml-surface)}
.d .nt.un{background:rgba(231,240,255,.55)}
.d .nt.un:hover{background:var(--ml-accent-soft)}
.d .nt.enter{animation:ib-in 520ms var(--ml-spring) both}
.d .lst.stag .nt,.d .lst.stag .gh{animation:ib-in 480ms var(--ml-spring) both;animation-delay:calc(var(--i,0) * 40ms)}
.d .ico{display:grid;place-items:center;width:40px;height:40px;border-radius:12px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .ico.ok{background:rgba(29,185,84,.12);color:#12893C}
.d .ico.bad{background:rgba(255,59,48,.1);color:#D70015}
.d .nx{font-size:14px;line-height:1.4;color:var(--ml-ink-2)}
.d .nx b{font-weight:650;color:var(--ml-ink)}
.d .nq{width:fit-content;max-width:100%;margin-top:7px;padding:7px 12px;border-radius:10px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;color:var(--ml-ink-2)}
.d .nc{margin-top:4px;font-size:12.5px;color:var(--ml-muted)}
.d .nr{position:relative;display:flex;flex-direction:column;align-items:flex-end;gap:8px;min-width:64px}
.d .nr time{font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted);white-space:nowrap}
.d .dot{width:9px;height:9px;margin-right:2px;border-radius:50%;background:var(--ml-accent);transition:opacity .25s ease,transform .3s var(--ml-ease)}
.d .nt:not(.un) .dot{opacity:0;transform:scale(.3)}
.d .mk{position:absolute;right:-4px;bottom:-6px;width:30px;height:30px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);opacity:0;pointer-events:none;transition:opacity .2s ease}
.d .nt.un:hover .mk,.d .nt.un:focus-within .mk{opacity:1;pointer-events:auto}
.d .empty{padding:48px 16px;text-align:center;font-size:13.5px;color:var(--ml-muted)}
.d .sd{display:flex;flex-direction:column;gap:16px;min-height:0}
.d .card{padding:18px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .k{font-size:12.5px;font-weight:500;color:var(--ml-muted)}
.d .big{margin-top:6px;font-size:44px;line-height:1;font-weight:650;letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .big.pop{animation:ib-pop 420ms var(--ml-bounce)}
.d .sub{margin-top:6px;font-size:12.5px;color:var(--ml-muted)}
.d .bars{display:flex;flex-direction:column;gap:12px;margin-top:18px}
.d .br p{display:flex;justify-content:space-between;font-size:12.5px;color:var(--ml-ink-2)}
.d .br b{font-weight:650;font-variant-numeric:tabular-nums}
.d .br i{display:block;height:6px;margin-top:6px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .br s{display:block;width:100%;height:100%;border-radius:inherit;background:var(--ml-grad);transform-origin:0 50%;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .st{display:flex;flex-direction:column;gap:14px}
.d .sw{display:flex;align-items:center;justify-content:space-between;gap:12px}
.d .sw div{display:flex;flex-direction:column}
.d .sw b{font-size:13.5px;font-weight:600}
.d .sw small{font-size:12px;color:var(--ml-muted)}
.d .tg{position:relative;flex:none;width:44px;height:26px;border:0;border-radius:99px;background:var(--ml-bar);cursor:pointer;transition:background-color .25s ease}
.d .tg i{position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .tg.on{background:var(--ml-accent)}
.d .tg.on i{transform:translateX(18px)}
.d .toast{display:flex}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{padding:0 14px}
  .d .body{grid-template-columns:minmax(0,1fr)}
  .d .sd{display:none}
  .d .top{padding-top:18px}
  .d .tabs{overflow-x:auto;scrollbar-width:none}
  .d .nq{display:none}
}`,
    run: (root) => {
      const sv = (d) => `<svg viewBox="0 0 24 24" width="19" height="19" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const IC = {
        mention: sv('<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"/>'),
        comment: sv('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
        paid: sv('<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="m9 11 2 2 4-4"/>'),
        bad: sv('<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/>'),
        approve: sv('<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>'),
        assign: sv('<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
        share: sv('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>'),
        join: sv('<path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="M19 16v6"/><path d="M22 19h-6"/>'),
        digest: sv('<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/>'),
        check: sv('<path d="M20 6 9 17l-5-5"/>'),
      };
      const tab = { mention: 'mention', comment: 'comment', paid: 'billing', bad: 'billing' };
      const N0 = () => [
        { id: 1, k: 'mention', g: 'Today', u: 1, t: '9:42 AM', x: '<b>Maya Reyes</b> mentioned you in <b>Northgate proposal</b>', q: 'Can you check the totals on page 3 before I send it?', c: 'Proposals, Northgate' },
        { id: 2, k: 'comment', g: 'Today', u: 1, t: '8:58 AM', x: '<b>Aiko Tan</b> commented on <b>Brightline site, staging</b>', q: 'The booking form now validates phone numbers.', c: 'Brightline Dental' },
        { id: 3, k: 'paid', g: 'Today', u: 1, t: '8:15 AM', x: '<b>Invoice #1042</b> was paid by Northgate', c: '$4,800 by bank transfer' },
        { id: 4, k: 'approve', g: 'Yesterday', u: 0, t: '5:20 PM', x: '<b>Priya Nair</b> approved <b>Meridian asset pack</b>', c: 'Meridian Foods' },
        { id: 5, k: 'assign', g: 'Yesterday', u: 0, t: '3:02 PM', x: '<b>Daniel Okafor</b> assigned you <b>Solace stationery review</b>', c: 'Due Fri 16 Oct' },
        { id: 6, k: 'bad', g: 'Yesterday', u: 0, t: '11:40 AM', x: '<b>Payment failed</b> for Kestrel & Co', c: 'Card ending 4242 was declined' },
        { id: 7, k: 'share', g: 'Earlier this week', u: 0, t: 'Mon', x: '<b>Hana Kim</b> shared <b>Q4 roadmap draft</b> with you', c: 'Planning' },
        { id: 8, k: 'join', g: 'Earlier this week', u: 0, t: 'Mon', x: '<b>Luis Ortega</b> joined the workspace', c: 'Added by Maya Reyes' },
        { id: 9, k: 'digest', g: 'Earlier this week', u: 0, t: 'Sun', x: 'Your weekly digest is ready', c: '12 updates across 5 projects' },
      ];
      let N = N0();
      let filter = 'all';
      let seq = 20;
      let tt = 0;
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const cur = $('.cur');
      const lst = $('.lst');
      const tabOf = (n) => tab[n.k] || 'activity';
      const icoClass = (k) => (k === 'paid' ? 'ok' : k === 'bad' ? 'bad' : '');
      const counts = () => {
        const un = N.filter((n) => n.u);
        $$('.tb').forEach((b) => {
          const c = b.dataset.f === 'all' ? un.length : un.filter((n) => tabOf(n) === b.dataset.f).length;
          b.querySelector('em').textContent = c || '';
        });
        const big = $('.big');
        if (+big.textContent !== un.length) {
          big.textContent = un.length;
          big.classList.remove('pop');
          void big.offsetWidth;
          big.classList.add('pop');
        }
        $('.bars').innerHTML = [['Mentions', 'mention'], ['Comments', 'comment'], ['Billing', 'billing'], ['Activity', 'activity']]
          .map(([l, f]) => {
            const c = un.filter((n) => tabOf(n) === f).length;
            return `<div class="br"><p><span>${l}</span><b>${c}</b></p><i><s style="transform:scaleX(${Math.min(1, c / 3)})"></s></i></div>`;
          })
          .join('');
      };
      const itemHTML = (n, k, enter) =>
        `<div class="nt${n.u ? ' un' : ''}${enter ? ' enter' : ''}" data-id="${n.id}" tabindex="0" style="--i:${k}"><span class="ico ${icoClass(n.k)}">${IC[n.k]}</span><div><p class="nx">${n.x}</p>${n.q ? `<p class="nq">${n.q}</p>` : ''}<p class="nc">${n.c}</p></div><div class="nr"><time>${n.t}</time><i class="dot"></i>${n.u ? `<button class="ib mk" type="button" aria-label="Mark as read">${IC.check}</button>` : ''}</div></div>`;
      const render = (flip, stagger, enterId) => {
        const before = {};
        if (flip) $$('.nt').forEach((r) => (before[r.dataset.id] = r.offsetTop));
        const items = N.filter((n) => filter === 'all' || tabOf(n) === filter);
        let h = '';
        let g = '';
        items.forEach((n, k) => {
          if (n.g !== g) {
            g = n.g;
            h += `<h3 class="gh" style="--i:${k}">${g}</h3>`;
          }
          h += itemHTML(n, k, n.id === enterId);
        });
        lst.classList.toggle('stag', !!stagger);
        lst.innerHTML = h || '<p class="empty">Nothing here yet</p>';
        if (flip)
          $$('.nt').forEach((r) => {
            const b = before[r.dataset.id];
            if (b == null) return;
            const dy = b - r.offsetTop;
            if (dy) {
              r.style.transition = 'none';
              r.style.transform = `translateY(${dy}px)`;
            }
          });
        void lst.offsetWidth;
        $$('.nt').forEach((r) => {
          if (r.style.transform) {
            r.style.transition = '';
            r.style.transform = '';
          }
        });
        counts();
      };
      const mark = (n) => {
        if (!n || !n.u) return;
        n.u = 0;
        const el = lst.querySelector(`[data-id="${n.id}"]`);
        if (el) {
          el.classList.remove('un');
          const b = el.querySelector('.mk');
          if (b) b.remove();
        }
        counts();
      };
      const toast = () => {
        const t = $('.toast');
        t.classList.add('on');
        clearTimeout(tt);
        tt = setTimeout(() => t.classList.remove('on'), 2200);
      };
      const markAll = () => {
        N.filter((n) => n.u).forEach((n, k) => setTimeout(() => root.isConnected && mark(n), k * 110));
        toast();
      };
      const arrive = () => {
        N.unshift({ id: ++seq, k: 'comment', g: 'Today', u: 1, t: 'Just now', x: '<b>Tomas Lindqvist</b> replied to your comment on <b>Brightline team page</b>', q: 'Photos are in, can you take another look?', c: 'Brightline Dental' });
        render(true, false, seq);
        counts();
      };
      const setTab = (b, stagger) => {
        filter = b.dataset.f;
        $$('.tb').forEach((x) => {
          x.classList.toggle('on', x === b);
          x.setAttribute('aria-selected', String(x === b));
        });
        $('.ul').style.transform = `translateX(${b.offsetLeft}px) scaleX(${b.offsetWidth / 100})`;
        render(false, stagger);
      };
      lst.addEventListener('click', (e) => {
        const r = e.target.closest('.nt');
        if (r) mark(N.find((n) => n.id === +r.dataset.id));
      });
      lst.addEventListener('keydown', (e) => {
        const r = e.target.closest('.nt');
        if (r && e.key === 'Enter') mark(N.find((n) => n.id === +r.dataset.id));
      });
      $$('.tb').forEach((b) => b.addEventListener('click', () => setTab(b, true)));
      $('.mall').addEventListener('click', markAll);
      $$('.tg').forEach((t) =>
        t.addEventListener('click', () => {
          const on = t.classList.toggle('on');
          t.setAttribute('aria-checked', String(on));
        })
      );
      render(false, false);
      setTab($('.tb.on'), false);
      setTimeout(() => {
        const b = $('.tb.on');
        if (b) $('.ul').style.transform = `translateX(${b.offsetLeft}px) scaleX(${b.offsetWidth / 100})`;
      }, 400);

      // Autoplay: filter tabs, a notification arrives, read one, mark all read. Real input hands over for 4s.
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
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        const shown = moveTo(el, fx, fy);
        cur.classList.toggle('off', !shown);
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn();
        return true;
      };
      cur.style.transform = 'translate(560px,420px)';
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          N = N0();
          if (filter !== 'all') setTab($('.tb[data-f="all"]'), false);
          else render(false, false);
          await wait(900);
          const tabs = $$('.tb');
          if (!(await act(tabs[1], () => tabs[1].click(), 0.5, 0.5))) continue;
          await wait(1500);
          if (!(await act(tabs[0], () => tabs[0].click(), 0.5, 0.5))) continue;
          await wait(1200);
          arrive();
          await wait(2000);
          const pick = lst.querySelectorAll('.nt.un')[1] || lst.querySelector('.nt.un');
          if (pick && !(await act(pick, () => pick.click(), 0.4, 0.5))) continue;
          await wait(1300);
          if (!(await act($('.mall'), markAll, 0.5, 0.5))) continue;
          await wait(3200);
        }
      })();
    },
    prompt: `Build a notification center page for a SaaS product, full viewport (height: 100dvh) on a soft off-white surface.

Layout: grid rows auto / auto / minmax(0, 1fr), 28px side padding. Header: a 26px title "Notifications", the date line and a secondary "Mark all as read" button with a double-check icon. Below it a tab strip (All, Mentions, Comments, Billing, Activity) where each tab carries a small unread count pill (mono, accent filled on the active tab); ONE shared 2px underline sits under the active tab and moves with transform: translateX(offsetLeft) scaleX(width/100) on a critically damped spring (587ms), never by toggling a border. Content: two columns, a scrolling white list panel (radius 20px, hairline plus soft shadow) and a 296px side column. The list is grouped under uppercase micro-labels (Today, Yesterday, Earlier this week). Each notification is a row: a 40px rounded icon tile (blue tint; green for paid, red for failed), a sentence with bold names, an optional quoted preview chip, a muted context line, a mono time and a 9px accent unread dot; unread rows have a faint accent wash and a check button appears on hover. The side column holds an Unread card (44px tabular number, one thin gradient bar per category scaled to its count) and a Delivery card with two switches (Quiet hours, Daily digest).

Behaviour: clicking a row (or Enter) marks it read: the wash and dot fade, the counts in tabs, number and bars update (number pops 1 to 1.18 to 1 in 420ms). "Mark all as read" clears rows one by one (110ms apart) and shows a toast "You are all caught up". Switching tabs re-renders the list with a 40ms staggered entrance (opacity, translateY 8px). A new notification slides in at the top: insert it, then FLIP the other rows (measure offsetTop before and after, apply translateY(delta) with no transition, then release with the spring) while the new row fades in. Switches are role="switch" with aria-checked and a spring knob. Tabs use role="tablist", the list is aria-live="polite". Phone (under 760px): drop the side column and the quoted previews, let the tab strip scroll horizontally. Plain HTML, CSS and JS, no libraries; React-friendly structure (NotificationHeader, TabStrip, NotificationGroup, NotificationRow, SummaryCard, SwitchRow, Toast).`,
  });

  // ---------------------------------------------------------------- 5. doc comment thread
  ML.add({
    id: 'app-inbox-comments',
    cat: 'app-inbox',
    title: 'Document comment threads',
    sub: 'Reply, resolve and the thread folds away',
    html: `
<div class="app">
  <header class="top">
    <div class="dt"><span class="mark">${I(P.file, 16)}</span><p><b>Q4 launch brief</b><small>Fernway, edited by Hana Kim today</small></p></div>
    <span class="oc"><i></i><b class="open">3</b> open comments</span>
    <span class="avs"><i class="av t1">HK</i><i class="av t2">PN</i><i class="av t3">DO</i></span>
    <button class="cta" type="button">Share</button>
  </header>
  <div class="scr sc">
    <div class="cols">
      <article class="paper">
        <p class="eye">Fernway / Planning</p>
        <h1>Q4 launch brief</h1>
        <p class="meta">Owner Hana Kim. Updated 14 October 2026.</p>
        <h2>Goal</h2>
        <p>Fernway opens its new learning library to every customer in Q4. We plan to <mark data-t="1">launch on 3 November</mark>, one week after the pricing page goes live, so support has time to answer questions before the campaign starts.</p>
        <h2>Targets</h2>
        <p>The campaign should bring <mark data-t="2">a 12% lift in trial starts</mark> compared with September, while keeping the cost per trial under $9.</p>
        <ul><li>Trial starts: 1,840 per week</li><li>Paid conversion after 14 days: 31%</li><li>Support first response under 20 minutes</li></ul>
        <h2>Pricing</h2>
        <p>The library ships with <mark data-t="3">three pricing tiers</mark>: Starter, Team and Studio. Annual billing is the default and saves 20%, shown next to the monthly price on every plan card.</p>
        <h2>Risks</h2>
        <p>Legal review of the new terms is the main dependency. Design is on track, build is two days ahead, and the launch emails are scheduled for the morning of the first day.</p>
        <p>We will review the plan again on Friday 16 October and lock the scope after that meeting.</p>
      </article>
      <aside class="rail" aria-label="Comments"></aside>
    </div>
  </div>
  ${CURSOR}
</div>`,
    css: BASE + `
.d .app{display:grid;grid-template-rows:auto minmax(0,1fr);height:100%;background:var(--ml-surface)}
.d .top{display:flex;align-items:center;gap:16px;height:64px;padding:0 24px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .dt{display:flex;flex:1;align-items:center;gap:12px;min-width:0}
.d .dt p{display:flex;flex-direction:column;min-width:0}
.d .dt b{font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .dt small{overflow:hidden;font-size:12.5px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .oc{display:inline-flex;align-items:center;gap:8px;height:30px;padding:0 12px;border-radius:999px;background:var(--ml-accent-soft);font-size:12.5px;font-weight:600;color:var(--ml-accent-ink);white-space:nowrap}
.d .oc i{width:7px;height:7px;border-radius:50%;background:var(--ml-accent)}
.d .oc b{font-variant-numeric:tabular-nums}
.d .avs{display:flex}
.d .avs .av{position:relative;width:30px;height:30px;margin-left:-6px;font-size:10.5px;box-shadow:0 0 0 2px var(--ml-bg)}
.d .avs .av:first-child{margin-left:0}
.d .scr{padding:0 24px}
.d .cols{display:grid;grid-template-columns:minmax(0,680px) 316px;justify-content:center;gap:28px;align-items:stretch;min-height:100%;padding:24px 0}
.d .paper{position:relative;padding:44px 52px 56px;border-radius:20px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .eye{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .paper h1{margin-top:10px;font-size:34px;line-height:1.1;font-weight:650;letter-spacing:-.035em}
.d .meta{margin-top:10px;font-size:13.5px;color:var(--ml-muted)}
.d .paper h2{margin-top:30px;font-size:19px;font-weight:650;letter-spacing:-.02em}
.d .paper p:not(.eye):not(.meta),.d .paper li{margin-top:10px;font-size:15px;line-height:1.7;color:var(--ml-ink-2)}
.d .paper ul{margin-top:6px;padding-left:20px}
.d .paper li{margin-top:4px}
.d mark{padding:2px 1px;border-radius:4px;background:var(--ml-accent-soft);box-shadow:inset 0 -2px 0 var(--ml-accent-line);color:inherit;cursor:pointer;transition:background-color .3s ease,box-shadow .3s ease}
.d mark.act{background:#FFF0ED;box-shadow:inset 0 -2px 0 var(--ml-accent)}
.d mark.res{background:none;box-shadow:none}
.d .rail{position:relative;margin-top:0}
.d .th{position:absolute;left:0;top:0;width:100%;padding:14px 14px 12px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.9),var(--ml-shadow);cursor:pointer;transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow .3s ease,opacity .3s ease}
.d .th.act{box-shadow:inset 0 0 0 1.5px var(--ml-accent-line),var(--ml-shadow-lg)}
.d .th.res{opacity:.72;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .thh{display:flex;align-items:center;gap:10px}
.d .thh .av{width:30px;height:30px;font-size:10.5px}
.d .thh p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .thh b{font-size:13.5px;font-weight:650}
.d .thh small{font-size:12px;color:var(--ml-muted)}
.d .rsb{display:inline-flex;align-items:center;gap:6px;height:28px;padding:0 10px;border:0;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:background-color .2s ease,color .2s ease,transform 90ms ease-out}
.d .rsb:hover{background:rgba(29,185,84,.1);color:#12893C}
.d .th.res .rsb{background:rgba(29,185,84,.1);color:#12893C}
.d .bd{display:grid;grid-template-rows:1fr;transition:grid-template-rows .45s var(--ml-ease),opacity .3s ease}
.d .th.res .bd{grid-template-rows:0fr;opacity:0}
.d .bd > div{min-height:0;overflow:hidden}
.d .cm{padding-top:10px;font-size:13.5px;line-height:1.5;color:var(--ml-ink)}
.d .rp{display:flex;flex-direction:column;gap:10px;margin-top:12px;padding-top:12px;border-top:1px solid var(--ml-line)}
.d .rp:empty{display:none}
.d .rpi{display:grid;grid-template-columns:24px minmax(0,1fr);gap:10px}
.d .rpi.enter{animation:ib-in 460ms var(--ml-spring) both}
.d .rpi .av{width:24px;height:24px;font-size:9px}
.d .rpi b{font-size:12.5px;font-weight:650}
.d .rpi small{margin-left:6px;font-size:11.5px;color:var(--ml-muted)}
.d .rpi p{font-size:13px;line-height:1.45;color:var(--ml-ink-2)}
.d .rf{margin-top:12px}
.d .rf .field{height:36px;padding:0 4px 0 12px;background:var(--ml-surface);box-shadow:none}
.d .rf input{font-size:13px}
.d .rf button{display:grid;place-items:center;width:28px;height:28px;border:0;border-radius:8px;background:var(--ml-accent);color:#fff;cursor:pointer}
${CURSOR_CSS}
@container scr (max-width: 860px){
  .d .cols{grid-template-columns:minmax(0,1fr)}
  .d .rail{height:auto!important;display:flex;flex-direction:column;gap:12px}
  .d .th{position:relative;transform:none!important}
  .d .paper{padding:30px 22px 36px;min-height:0}
  .d .top .avs,.d .top .cta{display:none}
}
@container scr (max-width: 760px){
  .d .scr{padding:0 14px}
  .d .oc{display:none}
}`,
    run: (root) => {
      const sv = (d, s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const CHK = '<path d="M20 6 9 17l-5-5"/>';
      const UND = '<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>';
      const SND = '<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>';
      const P = { Priya: ['PN', 1, 'Priya Nair'], Daniel: ['DO', 2, 'Daniel Okafor'], Tomas: ['TL', 3, 'Tomas Lindqvist'], Aiko: ['AT', 2, 'Aiko Tan'], Hana: ['HK', 3, 'Hana Kim'], Maya: ['MR', 1, 'Maya Reyes'] };
      const T0 = () => [
        { id: 1, w: 'Priya', time: '9:12 AM', text: 'Is 3 November still safe with the legal review?', res: 0, rp: [['Daniel', '9:30 AM', 'Legal said Friday. I will confirm as soon as they sign off.']] },
        { id: 2, w: 'Tomas', time: '9:41 AM', text: 'Where does the 12% come from? It would help to link the source.', res: 0, rp: [] },
        { id: 3, w: 'Aiko', time: '10:05 AM', text: 'Can we launch with two tiers and add the third one later?', res: 0, rp: [['Hana', '10:11 AM', 'I would keep three. The middle tier anchors the price.'], ['Maya', '10:18 AM', 'Agreed, let us test both on the pricing page.']] },
      ];
      let T = T0();
      let act = 1;
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const rail = $('.rail');
      const cur = $('.cur');
      const av = (k) => `<span class="av t${P[k][1]}">${P[k][0]}</span>`;
      const rpHTML = (r, enter) => `<div class="rpi${enter ? ' enter' : ''}">${av(r[0])}<div><b>${P[r[0]][2]}</b><small>${r[1]}</small><p>${r[2]}</p></div></div>`;
      const card = (t) =>
        `<div class="th${t.res ? ' res' : ''}${t.id === act ? ' act' : ''}" data-t="${t.id}" tabindex="0"><div class="thh">${av(t.w)}<p><b>${P[t.w][2]}</b><small>${t.time}</small></p><button class="rsb" type="button" aria-label="Resolve thread">${sv(t.res ? UND : CHK, 14)}<span>${t.res ? 'Reopen' : 'Resolve'}</span></button></div><div class="bd"><div><p class="cm">${t.text}</p><div class="rp">${t.rp.map((r) => rpHTML(r)).join('')}</div><form class="rf"><label class="field"><input type="text" placeholder="Reply or @mention" aria-label="Reply"><button type="submit" aria-label="Send reply">${sv(SND, 14)}</button></label></form></div></div></div>`;
      const lay = () => {
        const cards = T.map((t) => ({ t, el: rail.querySelector(`[data-t="${t.id}"]`), mk: $(`mark[data-t="${t.id}"]`) })).filter((c) => c.el && c.mk);
        cards.sort((a, b) => a.mk.offsetTop - b.mk.offsetTop);
        let y = 0;
        cards.forEach((c) => {
          y = Math.max(y, c.mk.offsetTop - 16);
          c.el.style.transform = `translateY(${y}px)`;
          y += c.el.offsetHeight + 12;
        });
        rail.style.height = y + 'px';
      };
      const lay2 = () => {
        lay();
        setTimeout(() => root.isConnected && lay(), 480);
      };
      const open = () => {
        const n = T.filter((t) => !t.res).length;
        $('.open').textContent = n;
      };
      const setAct = (id) => {
        act = id;
        $$('.th').forEach((c) => c.classList.toggle('act', +c.dataset.t === id));
        $$('mark').forEach((m) => m.classList.toggle('act', +m.dataset.t === id));
      };
      const toggleRes = (t, to) => {
        t.res = to == null ? (t.res ? 0 : 1) : to;
        const el = rail.querySelector(`[data-t="${t.id}"]`);
        el.classList.toggle('res', !!t.res);
        const b = el.querySelector('.rsb');
        b.innerHTML = sv(t.res ? UND : CHK, 14) + `<span>${t.res ? 'Reopen' : 'Resolve'}</span>`;
        b.setAttribute('aria-label', t.res ? 'Reopen thread' : 'Resolve thread');
        $(`mark[data-t="${t.id}"]`).classList.toggle('res', !!t.res);
        open();
        lay2();
      };
      const reply = (t, text) => {
        const r = ['Maya', '10:24 AM', text];
        t.rp.push(r);
        const el = rail.querySelector(`[data-t="${t.id}"] .rp`);
        el.insertAdjacentHTML('beforeend', rpHTML(r, true));
        lay2();
      };
      rail.innerHTML = T.map(card).join('');
      setAct(1);
      open();
      lay();
      setTimeout(lay, 350);
      rail.addEventListener('click', (e) => {
        const el = e.target.closest('.th');
        if (!el) return;
        const t = T.find((x) => x.id === +el.dataset.t);
        if (e.target.closest('.rsb')) toggleRes(t);
        setAct(t.id);
      });
      rail.addEventListener('submit', (e) => {
        e.preventDefault();
        const el = e.target.closest('.th');
        const inp = e.target.querySelector('input');
        if (inp.value.trim()) reply(T.find((x) => x.id === +el.dataset.t), inp.value.trim());
        inp.value = '';
      });
      $$('mark').forEach((m) =>
        m.addEventListener('click', () => {
          setAct(+m.dataset.t);
          const c = rail.querySelector(`[data-t="${m.dataset.t}"]`);
          if (c) c.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        })
      );

      // Autoplay: reply on a thread, resolve it, jump to the next. Real input hands over for 4s.
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
      const actn = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        const shown = moveTo(el, fx, fy);
        cur.classList.toggle('off', !shown);
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn();
        return true;
      };
      const type = async (input, text) => {
        const f = input.closest('.field');
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          input.value += ch;
          await wait(34 + Math.random() * 40);
        }
        f.classList.remove('is-auto');
        return true;
      };
      cur.style.transform = 'translate(700px,640px)';
      (async () => {
        await wait(1700);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const t1 = T[0];
          if (t1.res) toggleRes(t1, 0);
          if (t1.rp.length > 1) {
            t1.rp.length = 1;
            rail.querySelector('[data-t="1"] .rp').innerHTML = rpHTML(t1.rp[0]);
            lay2();
          }
          setAct(1);
          await wait(1000);
          const inp = rail.querySelector('[data-t="1"] input');
          if (!(await actn(inp, () => {}, 0.3, 0.5))) continue;
          if (!(await type(inp, 'Legal signed off, we are good for 3 Nov.'))) continue;
          await wait(300);
          inp.closest('form').requestSubmit();
          await wait(1700);
          const rb = rail.querySelector('[data-t="1"] .rsb');
          if (!(await actn(rb, () => rb.click(), 0.5, 0.5))) continue;
          await wait(1800);
          const c2 = rail.querySelector('[data-t="2"] .thh');
          if (!(await actn(c2, () => c2.click(), 0.35, 0.5))) continue;
          await wait(3200);
        }
      })();
    },
    prompt: `Build a document page with margin comment threads, full viewport (height: 100dvh) on a soft off-white surface.

Layout: grid rows auto / minmax(0, 1fr). A 64px white top bar holds a doc icon tile, the title and a muted "edited by" line, an accent-soft pill "3 open comments" with a dot, a small avatar stack and a primary Share button. Below, ONE scroll container holds a centered two-column grid: a white paper card (max-width 680px, radius 20px, 52px padding, hairline plus soft shadow, 34px title, 19px section headings, 15px/1.7 body text) and a 316px comment rail. Commented ranges in the text are <mark> elements with an accent-soft background and a 2px accent-line underline; the active one gets a stronger tint.

Comment cards live in the rail, absolutely positioned and aligned to their highlight: measure each mark's offsetTop, sort by it, set y = max(previousBottom + 12, markTop - 16) and apply transform: translateY(y) with a critically damped spring (587ms) so cards glide when anything above changes; set the rail height to the last bottom so the scroller can reach it. Each card has an avatar, name, time, a pill "Resolve" button, the comment, replies separated by a hairline and a "Reply or @mention" field with a send button. The active card has a 1.5px accent hairline and a larger shadow.

Behaviour: clicking a mark or a card activates the pair. Enter in the reply field appends the reply (rise in, opacity and translateY 8px) and re-lays the rail. Resolve folds the card body with grid-template-rows 1fr to 0fr (450ms) and opacity, leaving only the header with a green "Reopen" pill, removes the highlight and decrements the open count; the cards below glide up (re-run the layout now and again after the transition). Accessibility: cards are focusable, buttons have aria-labels that flip between Resolve and Reopen, focus-visible rings. Phone (under 860px): one column, the rail becomes a normal flex column below the paper and cards are position: relative. Plain HTML, CSS and JS, no libraries; React-friendly structure (DocHeader, Paper, CommentRail, ThreadCard, ReplyForm).`,
  });

  // ---------------------------------------------------------------- 6. video call
  ML.add({
    id: 'app-inbox-call',
    cat: 'app-inbox',
    title: 'Video call with side chat',
    sub: 'Speaker ring hops between tiles',
    html: `
<div class="app">
  <section class="stage">
    <header class="top">
      <div><h1>Q4 launch sync</h1><p><span class="rec"><i></i>Recording</span><b class="clk">24:18</b></p></div>
      <span class="cnt">${I(P.users, 15)}6 in call</span>
    </header>
    <div class="grid">
      <span class="ring" aria-hidden="true"></span>
    </div>
    <div class="ctl" role="toolbar" aria-label="Call controls">
      <button class="cb mic" type="button" aria-label="Mute microphone" aria-pressed="false"><span class="i1">${I(P.mic, 22)}</span><span class="i2">${I(P.micOff, 22)}</span></button>
      <button class="cb cam" type="button" aria-label="Turn camera off" aria-pressed="false"><span class="i1">${I(P.video, 22)}</span><span class="i2">${I(P.videoOff, 22)}</span></button>
      <button class="cb shr" type="button" aria-label="Share screen" aria-pressed="false">${I(P.share, 22)}</button>
      <button class="cb cht on" type="button" aria-label="Toggle chat" aria-pressed="true">${I(P.msg, 22)}<em></em></button>
      <button class="cb lv" type="button" aria-label="Leave call"><span class="ph">${I(P.phone, 20)}</span>Leave</button>
    </div>
  </section>
  <aside class="side" aria-label="Meeting chat">
    <header><b>Meeting chat</b><span>Visible to everyone</span></header>
    <div class="cl sc"><div class="in"></div></div>
    <form class="cf"><label class="field"><input class="cin" type="text" placeholder="Message everyone" aria-label="Message everyone"><button class="cta" type="submit" aria-label="Send">${I(P.up, 15, 2.4)}</button></label></form>
  </aside>
  ${CURSOR}
</div>`,
    css: BASE + `
.d .app{display:grid;grid-template-columns:minmax(0,1fr) 312px;height:100%;background:var(--ml-surface)}
.d .app.nochat{grid-template-columns:minmax(0,1fr)}
.d .app.nochat .side{display:none}
.d .stage{position:relative;display:flex;flex-direction:column;min-width:0;min-height:0;padding:0 20px 20px}
.d .top{display:flex;align-items:center;justify-content:space-between;flex:none;height:68px}
.d .top h1{font-size:18px;font-weight:650;letter-spacing:-.025em}
.d .top p{display:flex;align-items:center;gap:12px;margin-top:2px;font-size:12.5px;color:var(--ml-muted)}
.d .rec{display:inline-flex;align-items:center;gap:6px;font-weight:600;color:#D70015}
.d .rec i{position:relative;width:8px;height:8px;border-radius:50%;background:#FF3B30}
.d .rec i::after{content:"";position:absolute;inset:0;border-radius:50%;background:#FF3B30;animation:ib-ping 2s ease-out infinite}
.d .clk{font:600 12.5px/1 var(--ml-mono);font-variant-numeric:tabular-nums;color:var(--ml-ink-2)}
.d .cnt{display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 12px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .grid{position:relative;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-auto-rows:minmax(0,1fr);gap:14px;flex:1;min-height:0;padding-bottom:84px}
.d .tile{position:relative;display:grid;place-items:center;border-radius:22px;overflow:hidden;background:linear-gradient(145deg,var(--a),var(--b));box-shadow:inset 0 0 0 1px rgba(255,255,255,.6);transition:background-color .3s ease}
.d .tile::before{content:"";position:absolute;inset:0;background:radial-gradient(70% 60% at 25% 18%,rgba(255,255,255,.7),rgba(255,255,255,0) 70%);transition:opacity .3s ease}
.d .t1{--a:#EAF2FF;--b:#BCD5FF}.d .t2{--a:#F0F5FF;--b:#CCDFFF}.d .t3{--a:#E1EDFF;--b:#A9C8FF}.d .t4{--a:#EFF3FA;--b:#CFDAEC}.d .t5{--a:#F3F7FD;--b:#D6E2F4}.d .t6{--a:#E6EFFF;--b:#B4CFFF}
.d .ini{position:relative;display:grid;place-items:center;width:84px;height:84px;border-radius:50%;background:rgba(255,255,255,.72);box-shadow:0 8px 24px rgba(10,80,200,.14);font-size:27px;font-weight:650;letter-spacing:-.02em;color:var(--ml-accent-ink);transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .nm{position:absolute;left:12px;bottom:12px;display:inline-flex;align-items:center;gap:7px;height:30px;padding:0 11px;border-radius:999px;background:rgba(255,255,255,.82);box-shadow:0 1px 2px rgba(35,15,10,.08);font-size:12.5px;font-weight:600;color:var(--ml-ink)}
.d .nm svg{color:#D70015}
.d .mi{display:none}
.d .tile.mu .mi{display:inline-block}
.d .eq{display:none;align-items:flex-end;gap:2px;height:12px}
.d .eq i{width:3px;height:100%;border-radius:2px;background:var(--ml-accent);transform-origin:50% 100%;animation:ib-eq .9s ease-in-out infinite}
.d .eq i:nth-child(2){animation-delay:.2s}.d .eq i:nth-child(3){animation-delay:.4s}
.d .tile.sp .eq{display:inline-flex}
.d .tile.sp.mu .eq{display:none}
.d .off-l{position:absolute;right:12px;top:12px;display:none;align-items:center;gap:6px;height:26px;padding:0 10px;border-radius:999px;background:rgba(255,255,255,.82);font-size:11.5px;font-weight:600;color:var(--ml-ink-2)}
.d .tile.co{background:var(--ml-bar-2)}
.d .tile.co::before{opacity:0}
.d .tile.co .off-l{display:inline-flex}
.d .slide{position:absolute;inset:14px 14px 52px;display:none;flex-direction:column;gap:8px;padding:14px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .slide s{display:block;height:8px;border-radius:99px;background:var(--ml-bar)}
.d .slide s.a{width:42%;height:10px;background:var(--ml-accent)}
.d .slide .bs{display:flex;flex:1;align-items:flex-end;gap:8px;min-height:0}
.d .slide .bs i{flex:1;border-radius:5px 5px 2px 2px;background:var(--ml-accent-line)}
.d .slide .bs i:nth-child(3){background:var(--ml-accent)}
.d .tile.pr .slide{display:flex;animation:ib-in 460ms var(--ml-spring) both}
.d .tile.pr .ini{display:none}
.d .ring{position:absolute;left:0;top:0;z-index:5;border-radius:22px;box-shadow:0 0 0 3px var(--ml-accent),0 0 0 8px rgba(255,68,51,.14);pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .ctl{position:absolute;left:50%;bottom:28px;z-index:10;display:flex;align-items:center;gap:10px;padding:10px;border-radius:999px;background:rgba(255,255,255,.88);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);transform:translateX(-50%)}
.d .cb{position:relative;display:grid;place-items:center;width:52px;height:52px;border:0;border-radius:50%;background:var(--ml-surface);color:var(--ml-ink-2);cursor:pointer;transition:background-color .25s ease,color .25s ease,transform 90ms ease-out}
.d .cb:hover{background:var(--ml-bar-2)}
.d .cb.press{transform:scale(.92)}
.d .cb span{grid-area:1/1;display:grid;place-items:center;transition:opacity .2s ease,transform .35s var(--ml-ease)}
.d .cb .i2,.d .cb[aria-pressed="true"] .i1{opacity:0;transform:scale(.6)}
.d .cb[aria-pressed="true"] .i2{opacity:1;transform:none}
.d .mic[aria-pressed="true"],.d .cam[aria-pressed="true"]{background:rgba(255,59,48,.12);color:#D70015}
.d .shr[aria-pressed="true"]{background:var(--ml-accent);color:#fff}
.d .cht.on{background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .cht em{position:absolute;top:2px;right:0;min-width:18px;height:18px;padding:0 5px;border-radius:99px;background:var(--ml-accent);color:#fff;font:650 10.5px/18px var(--ml-mono);font-style:normal;text-align:center}
.d .cht.on em,.d .cht em:empty{display:none}
.d .lv{display:inline-flex;gap:8px;width:auto;padding:0 20px;border-radius:999px;background:#FF3B30;color:#fff;font-size:14px;font-weight:650}
.d .lv:hover{background:#E8342A}
.d .ph{transform:rotate(135deg)}
.d .side{display:flex;flex-direction:column;min-height:0;margin:12px 12px 12px 0;border-radius:20px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);overflow:hidden}
.d .side header{display:flex;flex-direction:column;flex:none;padding:18px 18px 12px;border-bottom:1px solid var(--ml-line)}
.d .side header b{font-size:15px;font-weight:650}
.d .side header span{font-size:12.5px;color:var(--ml-muted)}
.d .cl{flex:1}
.d .in{display:flex;flex-direction:column;justify-content:flex-end;gap:14px;min-height:100%;padding:16px 16px 10px}
.d .cs{align-self:center;font-size:12px;color:var(--ml-muted)}
.d .cmm{display:grid;grid-template-columns:28px minmax(0,1fr);gap:10px}
.d .cmm.enter{animation:ib-in 460ms var(--ml-spring) both}
.d .cmm .av{width:28px;height:28px;font-size:10px}
.d .cmm b{font-size:12.5px;font-weight:650}
.d .cmm small{margin-left:6px;font-size:11.5px;color:var(--ml-muted)}
.d .cmm p{font-size:13.5px;line-height:1.45;color:var(--ml-ink-2)}
.d .cf{flex:none;padding:8px 14px 14px}
.d .cf .field{height:44px;padding:0 5px 0 14px;background:var(--ml-surface);box-shadow:none}
.d .cf .cta{width:34px;height:34px;padding:0;border-radius:10px}
@keyframes ib-ping{0%{opacity:.5;transform:scale(1)}80%,100%{opacity:0;transform:scale(2.6)}}
@keyframes ib-eq{0%,100%{transform:scaleY(.35)}50%{transform:scaleY(1)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .side{display:none}
  .d .stage{padding:0 12px 12px}
  .d .grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding-bottom:84px}
  .d .ini{width:64px;height:64px;font-size:21px}
  .d .ctl{gap:6px;padding:8px}
  .d .cb{width:46px;height:46px}
  .d .lv{width:46px;padding:0;gap:0;font-size:0}
  .d .cnt{display:none}
}
@media (prefers-reduced-motion: reduce){.d .eq i,.d .rec i::after{animation:none}}`,
    run: (root) => {
      const sv = (d, s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const MICOFF = '<line x1="2" x2="22" y1="2" y2="22"/><path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"/><path d="M5 10v2a7 7 0 0 0 12 5"/><path d="M15 9.34V5a3 3 0 0 0-5.68-1.33"/><path d="M9 9v3a3 3 0 0 0 5.12 2.12"/><line x1="12" x2="12" y1="19" y2="22"/>';
      const VOFF = '<path d="M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"/><path d="M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"/><path d="m2 2 20 20"/>';
      const ppl = [
        { n: 'Maya Reyes', i: 'MR', c: 1, you: 1 },
        { n: 'Tomas Lindqvist', i: 'TL', c: 2 },
        { n: 'Aiko Tan', i: 'AT', c: 3 },
        { n: 'Priya Nair', i: 'PN', c: 4, mu: 1 },
        { n: 'Daniel Okafor', i: 'DO', c: 5, co: 1 },
        { n: 'Hana Kim', i: 'HK', c: 6 },
      ];
      const who = { Maya: ['MR', 1, 'Maya Reyes'], Tomas: ['TL', 2, 'Tomas Lindqvist'], Aiko: ['AT', 3, 'Aiko Tan'], Priya: ['PN', 1, 'Priya Nair'] };
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const app = $('.app');
      const grid = $('.grid');
      const ring = $('.ring');
      const cur = $('.cur');
      const inEl = $('.in');
      const clEl = $('.cl');
      grid.insertAdjacentHTML('afterbegin', ppl.map((p, k) => `<div class="tile t${p.c}${p.mu ? ' mu' : ''}${p.co ? ' co' : ''}" data-k="${k}"><span class="ini">${p.i}</span><div class="slide"><s class="a"></s><s style="width:80%"></s><div class="bs"><i style="height:38%"></i><i style="height:56%"></i><i style="height:88%"></i><i style="height:64%"></i></div></div><span class="off-l">${sv(VOFF, 13)}Camera off</span><span class="nm">${sv(MICOFF, 14).replace('<svg ', '<svg class="mi" ')}<span class="eq"><i></i><i></i><i></i></span>${p.n}${p.you ? ' (You)' : ''}</span></div>`).join(''));
      const tiles = $$('.tile');
      let speaker = 2;
      let me = { mu: 0, co: 0, pr: 0 };
      const moveRing = (k) => {
        const t = tiles[k];
        speaker = k;
        ring.style.width = t.offsetWidth + 'px';
        ring.style.height = t.offsetHeight + 'px';
        ring.style.transform = `translate(${t.offsetLeft}px,${t.offsetTop}px)`;
        tiles.forEach((x, j) => x.classList.toggle('sp', j === k));
      };
      const sync = () => {
        tiles[0].classList.toggle('mu', !!me.mu);
        tiles[0].classList.toggle('co', !!me.co);
        tiles[0].classList.toggle('pr', !!me.pr);
        $('.mic').setAttribute('aria-pressed', String(!!me.mu));
        $('.mic').setAttribute('aria-label', me.mu ? 'Unmute microphone' : 'Mute microphone');
        $('.cam').setAttribute('aria-pressed', String(!!me.co));
        $('.cam').setAttribute('aria-label', me.co ? 'Turn camera on' : 'Turn camera off');
        $('.shr').setAttribute('aria-pressed', String(!!me.pr));
        $('.shr').setAttribute('aria-label', me.pr ? 'Stop sharing' : 'Share screen');
        if (me.mu && speaker === 0) moveRing(2);
      };
      $('.mic').addEventListener('click', () => {
        me.mu = me.mu ? 0 : 1;
        sync();
      });
      $('.cam').addEventListener('click', () => {
        me.co = me.co ? 0 : 1;
        sync();
      });
      $('.shr').addEventListener('click', () => {
        me.pr = me.pr ? 0 : 1;
        sync();
      });
      let unread = 0;
      $('.cht').addEventListener('click', () => {
        const on = app.classList.toggle('nochat');
        $('.cht').classList.toggle('on', !on);
        $('.cht').setAttribute('aria-pressed', String(!on));
        if (!on) {
          unread = 0;
          $('.cht em').textContent = '';
        }
        setTimeout(() => moveRing(speaker), 30);
      });
      $('.lv').addEventListener('click', () => {
        $('.lv').classList.add('press');
        setTimeout(() => $('.lv').classList.remove('press'), 150);
      });
      const seed = [['s', 'Daniel Okafor joined at 9:02 AM'], ['Tomas', '9:06 AM', 'Slides are in the shared folder.'], ['Aiko', '9:11 AM', 'Can everyone see the pricing table?'], ['Priya', '9:12 AM', 'Yes, it looks clear from here.']];
      let ct = 0;
      const msgHTML = (m, enter) => (m[0] === 's' ? `<p class="cs">${m[1]}</p>` : `<div class="cmm${enter ? ' enter' : ''}"><span class="av t${who[m[0]][1]}">${who[m[0]][0]}</span><div><b>${who[m[0]][2]}</b><small>${m[1]}</small><p>${m[2]}</p></div></div>`);
      inEl.innerHTML = seed.map((m) => msgHTML(m)).join('');
      const post = (w, text) => {
        inEl.insertAdjacentHTML('beforeend', msgHTML([w, '9:' + (14 + ct++), text], true));
        const ms = inEl.children;
        if (ms.length > 9) ms[0].remove();
        clEl.scrollTop = clEl.scrollHeight;
        if (app.classList.contains('nochat')) {
          unread++;
          $('.cht em').textContent = unread;
        }
      };
      $('.cf').addEventListener('submit', (e) => {
        e.preventDefault();
        const v = $('.cin');
        if (!v.value.trim()) return;
        post('Maya', v.value.trim());
        v.value = '';
      });
      clEl.scrollTop = clEl.scrollHeight;
      moveRing(2);
      setTimeout(() => moveRing(speaker), 400);

      // live clock and speaker changes
      let sec = 24 * 60 + 18;
      const tick = async () => {
        while (root.isConnected) {
          await new Promise((r) => setTimeout(r, 1000));
          if (root.dataset.paused) continue;
          sec++;
          $('.clk').textContent = String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0');
        }
      };
      tick();
      (async () => {
        let n = 0;
        while (root.isConnected) {
          await new Promise((r) => setTimeout(r, 2100));
          if (root.dataset.paused) continue;
          const order = [1, 5, 2, 4, 0, 3];
          let k = order[n++ % order.length];
          if ((k === 0 && me.mu) || tiles[k].classList.contains('mu')) k = 2;
          if (k !== speaker) moveRing(k);
        }
      })();

      // Autoplay: mute, camera, share, then a chat message. Real input hands over for 4s.
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
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        const shown = moveTo(el, fx, fy);
        cur.classList.toggle('off', !shown);
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn();
        return true;
      };
      cur.style.transform = 'translate(500px,300px)';
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          const mic = $('.mic');
          const cam = $('.cam');
          const shr = $('.shr');
          if (!(await act(mic, () => mic.click(), 0.5, 0.5))) continue;
          await wait(1500);
          if (!(await act(mic, () => mic.click(), 0.5, 0.5))) continue;
          await wait(500);
          if (!(await act(cam, () => cam.click(), 0.5, 0.5))) continue;
          await wait(1500);
          if (!(await act(cam, () => cam.click(), 0.5, 0.5))) continue;
          await wait(500);
          if (!(await act(shr, () => shr.click(), 0.5, 0.5))) continue;
          await wait(2400);
          if (!(await act(shr, () => shr.click(), 0.5, 0.5))) continue;
          await wait(600);
          const inp = $('.cin');
          if (!(await act(inp, () => inp.closest('.field').classList.add('is-auto'), 0.4, 0.5))) continue;
          for (const ch of 'Sharing the pricing table next.') {
            if (!idle()) break;
            inp.value += ch;
            await wait(36 + Math.random() * 40);
          }
          inp.closest('.field').classList.remove('is-auto');
          if (!idle()) continue;
          $('.cf').requestSubmit();
          await wait(1800);
          post('Aiko', 'Perfect, we can all see it.');
          await wait(2600);
        }
      })();
    },
    prompt: `Build a video call screen with a side chat, full viewport (height: 100dvh) on a soft off-white surface. No real video: participants are drawn tiles.

Layout: CSS grid, columns minmax(0, 1fr) / 312px. The stage column has a 68px header (meeting title, a red "Recording" label with a pinging dot, a mono tabular call clock that ticks every second, and a "6 in call" pill), a participant grid and a floating control bar. The grid is 3 columns x 2 rows of equal tiles (grid-auto-rows: minmax(0, 1fr), 14px gap, bottom padding so the bar never covers a tile). Each tile is a 22px-radius soft blue gradient (six slightly different blue tints, a white radial highlight in the top left) with a centred 84px frosted circle of initials, and a white pill at the bottom left with the name (a red mic-off icon when muted, three animated equalizer bars when speaking). Camera-off tiles go flat grey-blue with a "Camera off" pill. The control bar is a white pill, absolute at the bottom centre with a soft shadow: round 52px buttons for mic, camera, share screen and chat (with an unread badge when the chat is hidden) and a red "Leave" pill with a rotated phone icon. The side chat is a rounded white panel with a header, a bottom-anchored message list and a message field.

Motion: ONE active-speaker ring (a 3px accent outline plus a soft 8px halo on an absolutely positioned element) moves to the next speaker's tile every ~2s using transform: translate(tile.offsetLeft, tile.offsetTop) on a critically damped spring (587ms), with its width and height set from the tile. Equalizer bars scaleY 0.35 to 1, staggered 200ms. Toggles (mic, camera, share) swap icons with a scale-and-fade (opacity, scale .6 to 1, 350ms) and use aria-pressed; muted and camera-off turn red-tinted, sharing turns accent-filled and shows a mini slide drawn in CSS inside your own tile. Enter posts a chat message (rise in 8px) and the chat toggle hides the panel.

Accessibility: the bar is role="toolbar" with aria-labels that flip with state, focus-visible rings. Phone (under 760px): two columns of tiles, no side panel, smaller buttons. Plain HTML, CSS and JS, no libraries; React-friendly structure (CallHeader, ParticipantGrid, Tile, SpeakerRing, ControlBar, ChatPanel).`,
  });

  // ---------------------------------------------------------------- 7. direct messages
  ML.add({
    id: 'app-inbox-dm',
    cat: 'app-inbox',
    title: 'Direct messages',
    sub: 'Receipts turn blue, typing dots, reply',
    html: `
<div class="app">
  <aside class="cvl">
    <header><h2>Messages</h2><button class="ib" type="button" aria-label="New message">${I(P.pen, 18)}</button></header>
    <label class="field srch">${I(P.search, 16)}<input type="search" placeholder="Search people" aria-label="Search people"></label>
    <ul class="cs sc" aria-label="Conversations"></ul>
  </aside>
  <section class="chat">
    <header class="hd"><span class="av pa"></span><p><b class="pn"></b><small class="ps"></small></p><button class="ib" type="button" aria-label="Voice call">${I(P.phone, 18)}</button><button class="ib" type="button" aria-label="Video call">${I(P.video, 18)}</button><button class="ib" type="button" aria-label="More">${I(P.more, 18)}</button></header>
    <div class="ms sc"><div class="in"></div></div>
    <form class="cf"><label class="field"><button class="ib" type="button" aria-label="Attach">${I(P.clip, 17)}</button><input class="cin" type="text" placeholder="Write a message" aria-label="Write a message"><button class="ib" type="button" aria-label="Photo">${I(P.image, 17)}</button><button class="cta" type="submit" aria-label="Send">${I(P.up, 16, 2.4)}</button></label></form>
  </section>
  ${CURSOR}
</div>`,
    css: BASE + `
.d .app{display:grid;grid-template-columns:304px minmax(0,1fr);height:100%;background:var(--ml-bg)}
.d .cvl{display:flex;flex-direction:column;min-height:0;background:var(--ml-surface);border-right:1px solid var(--ml-line)}
.d .cvl header{display:flex;align-items:center;justify-content:space-between;flex:none;padding:20px 14px 12px 20px}
.d .cvl h2{font-size:22px;font-weight:650;letter-spacing:-.03em}
.d .srch{flex:none;margin:0 14px 10px}
.d .cs{flex:1;display:flex;flex-direction:column;gap:2px;padding:0 8px 12px;list-style:none}
.d .c{position:relative;display:grid;grid-template-columns:44px minmax(0,1fr) auto;gap:2px 12px;align-items:center;padding:10px 12px;border-radius:14px;cursor:pointer;transition:background-color .2s ease}
.d .c:hover{background:rgba(220,228,240,.45)}
.d .c.on{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow)}
.d .c .av{grid-row:1/3;width:44px;height:44px;font-size:14px}
.d .pd{position:absolute;left:44px;top:42px;width:12px;height:12px;border-radius:50%;background:#1DB954;box-shadow:0 0 0 2.5px var(--ml-surface)}
.d .c.on .pd{box-shadow:0 0 0 2.5px var(--ml-bg)}
.d .pd.off{background:var(--ml-bar)}
.d .c b{overflow:hidden;font-size:14px;font-weight:650;white-space:nowrap;text-overflow:ellipsis}
.d .c time{font-size:11.5px;color:var(--ml-muted)}
.d .c .pv{overflow:hidden;font-size:13px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .c.un .pv{font-weight:600;color:var(--ml-ink)}
.d .bg{display:grid;place-items:center;min-width:20px;height:20px;padding:0 6px;border-radius:99px;background:var(--ml-accent);color:#fff;font:650 11px/1 var(--ml-mono)}
.d .chat{display:flex;flex-direction:column;min-width:0;min-height:0}
.d .hd{display:flex;align-items:center;gap:12px;flex:none;height:68px;padding:0 18px 0 24px;border-bottom:1px solid var(--ml-line)}
.d .hd .av{width:40px;height:40px}
.d .hd p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .hd b{font-size:15px;font-weight:650;letter-spacing:-.01em}
.d .hd small{font-size:12.5px;color:#12893C;transition:color .2s ease}
.d .hd small.tyg{color:var(--ml-accent)}
.d .ms{flex:1}
.d .in{display:flex;flex-direction:column;justify-content:flex-end;gap:4px;min-height:100%;padding:18px 28px 12px}
.d .day{align-self:center;margin:12px 0 10px;padding:4px 12px;border-radius:999px;background:var(--ml-surface);font-size:12px;font-weight:600;color:var(--ml-muted)}
.d .r{display:flex;flex-direction:column;max-width:68%}
.d .r.me{align-self:flex-end;align-items:flex-end}
.d .r.enter{animation:ib-in 460ms var(--ml-spring) both}
.d .r + .r.gap{margin-top:8px}
.d .bu{padding:10px 15px;border-radius:20px 20px 20px 6px;background:var(--ml-surface);font-size:14.5px;line-height:1.45;color:var(--ml-ink)}
.d .r.me .bu{border-radius:20px 20px 6px 20px;background:var(--ml-grad);color:#fff;box-shadow:0 6px 16px rgba(255,68,51,.18)}
.d .rc{display:inline-flex;align-items:center;gap:5px;margin:4px 4px 0;font-size:11.5px;color:var(--ml-muted)}
.d .rc svg{overflow:visible;color:var(--ml-muted);transition:color .35s ease}
.d .rc .k2{opacity:0;transform:translateX(-4px);transition:opacity .3s ease,transform .35s var(--ml-ease)}
.d .rc[data-s="del"] .k2,.d .rc[data-s="read"] .k2{opacity:1;transform:none}
.d .rc[data-s="read"] svg{color:var(--ml-accent)}
.d .rc[data-s="read"] span{color:var(--ml-accent-ink)}
.d .photo{position:relative;width:292px;max-width:100%;height:186px;border-radius:20px 20px 20px 6px;overflow:hidden;background:linear-gradient(180deg,#C6DBFF 0%,#EEF5FF 62%);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .photo i{position:absolute;display:block}
.d .photo .sun{top:26px;right:56px;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-2);box-shadow:0 0 0 10px rgba(79,163,255,.18)}
.d .photo .h1{left:-10%;bottom:34px;width:72%;height:92px;background:var(--ml-accent-line);clip-path:polygon(0 100%,46% 6%,100% 100%)}
.d .photo .h2{right:-8%;bottom:34px;width:70%;height:70px;background:var(--ml-bar);clip-path:polygon(0 100%,54% 4%,100% 100%)}
.d .photo .lk{left:0;right:0;bottom:0;height:40px;background:linear-gradient(180deg,#B7D1FB,#FFEFEA)}
.d .photo .st{left:18%;right:26%;bottom:16px;height:3px;border-radius:3px;background:rgba(255,255,255,.7)}
.d .cap{margin:6px 2px 0;font-size:12px;color:var(--ml-muted)}
.d .ty{align-self:flex-start;margin-top:8px}
.d .ty .bu{display:flex;gap:4px;align-items:center;height:38px}
.d .ty i{width:6px;height:6px;border-radius:50%;background:var(--ml-accent-2);animation:ib-dot 1s ease-in-out infinite}
.d .ty i:nth-child(2){animation-delay:.15s}.d .ty i:nth-child(3){animation-delay:.3s}
.d .cf{flex:none;padding:6px 20px 18px}
.d .cf .field{height:50px;padding:0 6px 0 6px;border-radius:999px;background:var(--ml-surface);box-shadow:none}
.d .cf .field input{padding:0 6px;font-size:14.5px}
.d .cf .cta{width:38px;height:38px;padding:0;border-radius:50%}
@keyframes ib-dot{0%,100%{transform:translateY(0);opacity:.5}40%{transform:translateY(-3px);opacity:1}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .cvl{display:none}
  .d .hd{padding:0 10px 0 14px}
  .d .in{padding:14px 14px 10px}
  .d .r{max-width:84%}
  .d .cf{padding:6px 12px 14px}
}
@media (prefers-reduced-motion: reduce){.d .ty i{animation:none}}`,
    run: (root) => {
      const sv = (d, s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const RC = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 6 8 17l-5-5"/><path class="k2" d="m22 10-7.5 7.5L13 16"/></svg>';
      const people = {
        aiko: { n: 'Aiko Tan', i: 'AT', t: 3, on: 1, un: 0, time: '9:08 AM', msgs: [['day', 'Tuesday, 13 October'], ['t', 'Invoice 1042 is out. Northgate has until the 25th.', '4:40 PM'], ['m', 'Perfect, thank you.', '4:42 PM', 'read'], ['day', 'Today'], ['t', 'Morning! Did you see the Brightline staging link?', '9:02 AM'], ['m', 'Just opened it. The booking form looks great.', '9:04 AM', 'read'], ['p', 'New mobile layout for the team page', '9:06 AM'], ['t', 'I kept the photos square so they load faster.', '9:06 AM'], ['m', 'Love it. Can you send it to Tomas too?', '9:08 AM', 'read']] },
        priya: { n: 'Priya Nair', i: 'PN', t: 1, on: 1, un: 2, time: '8:41 AM', msgs: [['day', 'Today'], ['t', 'Can you send the Meridian files when you have a minute?', '8:40 AM'], ['t', 'The client asked again this morning.', '8:41 AM']] },
        daniel: { n: 'Daniel Okafor', i: 'DO', t: 2, on: 0, un: 0, time: 'Tue', msgs: [['day', 'Tuesday, 13 October'], ['m', 'Stationery files are in the Solace folder.', '2:10 PM', 'read'], ['t', 'Got them, thanks. I will review tonight.', '2:26 PM']] },
        hana: { n: 'Hana Kim', i: 'HK', t: 3, on: 1, un: 0, time: 'Mon', msgs: [['day', 'Monday, 12 October'], ['t', 'Roadmap review moved to Friday at 10.', '11:02 AM'], ['m', 'Works for me.', '11:05 AM', 'read']] },
        luis: { n: 'Luis Ortega', i: 'LO', t: 1, on: 0, un: 0, time: 'Thu', msgs: [['day', 'Thursday, 8 October'], ['t', 'Kestrel signed the kickoff form.', '3:15 PM'], ['m', 'Great news, nice work.', '3:20 PM', 'read']] },
      };
      const texts = ['Sending it to Tomas now.', 'I will also share the staging login.', 'Thanks, that photo crop is perfect.'];
      const replies = ['Thanks! Tomas will review it by noon.', 'Perfect, I will keep an eye out for his reply.', 'Glad you like it, I will export the rest tonight.'];
      let cur2 = 'aiko';
      let n = 0;
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const inEl = $('.in');
      const msEl = $('.ms');
      const cur = $('.cur');
      const down = () => (msEl.scrollTop = msEl.scrollHeight);
      const lastText = (p) => {
        const m = [...p.msgs].reverse().find((x) => x[0] !== 'day');
        return m ? (m[0] === 'm' ? 'You: ' : '') + (m[0] === 'p' ? 'Photo' : m[1]) : '';
      };
      const list = () => {
        $('.cs').innerHTML = Object.entries(people)
          .map(([k, p]) => `<li class="c${k === cur2 ? ' on' : ''}${p.un ? ' un' : ''}" data-k="${k}" tabindex="0"><span class="av t${p.t}">${p.i}</span><i class="pd${p.on ? '' : ' off'}"></i><b>${p.n}</b><time>${p.time}</time><span class="pv">${lastText(p)}</span>${p.un ? `<span class="bg">${p.un}</span>` : '<span></span>'}</li>`)
          .join('');
      };
      const bub = (m, prev, enter) => {
        if (m[0] === 'day') return `<p class="day">${m[1]}</p>`;
        const me = m[0] === 'm';
        const gap = prev && prev[0] !== m[0] ? ' gap' : '';
        const body = m[0] === 'p' ? `<div class="photo"><i class="sky"></i><i class="sun"></i><i class="h1"></i><i class="h2"></i><i class="lk"></i><i class="st"></i></div><p class="cap">${m[1]}</p>` : `<p class="bu">${m[1]}</p>`;
        return `<div class="r${me ? ' me' : ''}${gap}${enter ? ' enter' : ''}">${body}${me ? `<span class="rc" data-s="${m[3]}"><span>${m[2]}</span>${RC}</span>` : ''}</div>`;
      };
      const show = (k) => {
        cur2 = k;
        const p = people[k];
        p.un = 0;
        $('.pa').className = 'av pa t' + p.t;
        $('.pa').textContent = p.i;
        $('.pn').textContent = p.n;
        const ps = $('.ps');
        ps.textContent = p.on ? 'Active now' : 'Last seen yesterday';
        ps.style.color = p.on ? '' : 'var(--ml-muted)';
        inEl.innerHTML = p.msgs.map((m, j) => bub(m, p.msgs[j - 1], false)).join('');
        $('.cin').placeholder = 'Message ' + p.n.split(' ')[0];
        list();
        down();
      };
      const setRc = (el, s) => el && el.setAttribute('data-s', s);
      const send = (text) => {
        const p = people[cur2];
        const m = ['m', text, '9:' + (10 + (n % 40)), 'sent'];
        p.msgs.push(m);
        p.time = 'Now';
        const prev = p.msgs[p.msgs.length - 2];
        inEl.insertAdjacentHTML('beforeend', bub(m, prev, true));
        const rows = inEl.querySelectorAll('.r');
        if (rows.length > 11) rows[0].remove();
        const el = inEl.lastElementChild.querySelector('.rc');
        down();
        list();
        const k = cur2;
        setTimeout(() => setRc(el, 'del'), 700);
        setTimeout(() => setRc(el, 'read'), 1500);
        setTimeout(() => {
          if (!root.isConnected || k !== cur2) return;
          $('.ps').textContent = 'typing...';
          $('.ps').classList.add('tyg');
          inEl.insertAdjacentHTML('beforeend', '<div class="r ty enter"><p class="bu"><i></i><i></i><i></i></p></div>');
          down();
          setTimeout(() => {
            if (!root.isConnected) return;
            const t = inEl.querySelector('.ty');
            if (t) t.remove();
            $('.ps').textContent = 'Active now';
            $('.ps').classList.remove('tyg');
            const rm = ['t', replies[n++ % replies.length], '9:' + (11 + (n % 40))];
            p.msgs.push(rm);
            p.time = 'Now';
            inEl.insertAdjacentHTML('beforeend', bub(rm, ['m'], true));
            down();
            list();
          }, 1800);
        }, 2000);
      };
      $('.cf').addEventListener('submit', (e) => {
        e.preventDefault();
        const v = $('.cin');
        if (!v.value.trim()) return;
        send(v.value.trim());
        v.value = '';
      });
      $('.cs').addEventListener('click', (e) => {
        const r = e.target.closest('.c');
        if (r) show(r.dataset.k);
      });
      $('.cs').addEventListener('keydown', (e) => {
        const r = e.target.closest('.c');
        if (r && e.key === 'Enter') show(r.dataset.k);
      });
      show('aiko');

      // Autoplay: type a message, watch the receipts turn blue, the reply arrives. Real input hands over for 4s.
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
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        const shown = moveTo(el, fx, fy);
        cur.classList.toggle('off', !shown);
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn();
        return true;
      };
      cur.style.transform = 'translate(640px,520px)';
      (async () => {
        await wait(1800);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (cur2 !== 'aiko') show('aiko');
          const inp = $('.cin');
          if (!(await act(inp, () => inp.closest('.field').classList.add('is-auto'), 0.4, 0.5))) continue;
          const text = texts[n % texts.length];
          let ok = true;
          for (const ch of text) {
            if (!idle()) {
              ok = false;
              break;
            }
            inp.value += ch;
            await wait(36 + Math.random() * 40);
          }
          inp.closest('.field').classList.remove('is-auto');
          if (!ok) continue;
          await wait(300);
          $('.cf').requestSubmit();
          await wait(6200);
          if (!(await act(root.querySelector('.c[data-k="priya"]'), () => show('priya'), 0.5, 0.5))) continue;
          await wait(2200);
        }
      })();
    },
    prompt: `Build a one-to-one direct messages screen, full viewport (height: 100dvh): a conversation list and a chat. Use bubble styling and read receipts so it feels like a personal messenger, not a channel chat.

Layout: CSS grid, columns 304px / minmax(0, 1fr). Left (off-white surface, right hairline): a "Messages" title with a compose icon button, a search field and conversation rows (44px initials avatar with a presence dot, bold name, time, one-line preview, an accent count badge when unread). The active row is a white card with a hairline and a soft shadow. Right: a 68px header (avatar, name, a status line that reads "Active now" in green or "typing..." in accent, then call, video and more icon buttons), a bottom-anchored message list and a pill-shaped composer (attach, input, photo and a round gradient send button). Received bubbles are pale surface with a small bottom-left radius; sent bubbles use your accent gradient with white text and a small bottom-right radius. Day dividers are small centered pills. One received message is an image attachment drawn with CSS only: a rounded sky gradient, a sun circle with a soft halo, two clip-path hills and a lake band, with a caption under it.

Behaviour: sending adds a bubble (rise in, opacity and translateY 8px, 460ms) with a receipt line under it: a single grey check ("sent"), then 700ms later a second check slides in ("delivered", opacity and translateX), then at 1500ms both checks and the time turn your accent color ("read"). Then the header switches to "typing..." and a bubble with three dots (translateY, staggered 150ms) shows for ~1.8s before the reply arrives. The conversation preview and time update in the list; clicking another conversation swaps the thread and clears its unread badge. Accessibility: rows are focusable and open on Enter, icon buttons have aria-labels, focus-visible rings, reduced motion removes the dot bounce. Phone (under 760px): hide the list so the chat fills the screen, bubbles up to 84% wide. Plain HTML, CSS and JS, no libraries; React-friendly structure (ConversationList, ChatHeader, MessageList, Bubble, ReadReceipt, ImageMessage, TypingBubble, Composer).`,
  });

  // ---------------------------------------------------------------- 8. email compose
  ML.add({
    id: 'app-inbox-compose',
    cat: 'app-inbox',
    title: 'Email compose',
    sub: 'Chips autocomplete, pick a send time',
    html: `
<div class="app">
  <header class="top"><div><h1>New message</h1><p class="sv">Draft saved at 9:47 AM</p></div><button class="btn dsc" type="button">${I(P.trash, 16)}Discard</button></header>
  <main class="wrap">
    <form class="card" novalidate>
      <div class="rw"><span class="lb">From</span><p class="fr"><span class="av">MR</span>Maya Reyes <small>maya@halden.co</small></p></div>
      <div class="rw to"><span class="lb">To</span><div class="chips"><input class="tin" type="text" autocomplete="off" aria-label="Add recipient" aria-autocomplete="list"></div><span class="cc">Cc Bcc</span>
        <ul class="ac" role="listbox" aria-label="Suggestions"></ul></div>
      <div class="rw"><span class="lb">Subject</span><input class="sub" type="text" aria-label="Subject"></div>
      <div class="tbr"><button class="ib" type="button" aria-label="Bold">${I(P.bold, 17)}</button><button class="ib" type="button" aria-label="Italic">${I(P.italic, 17)}</button><button class="ib" type="button" aria-label="Link">${I(P.link, 17)}</button><span class="vs"></span><button class="ib att" type="button" aria-label="Attach a file">${I(P.clip, 17)}</button><button class="ib" type="button" aria-label="Insert image">${I(P.image, 17)}</button></div>
      <textarea class="body" aria-label="Message body"></textarea>
      <div class="files" aria-label="Attachments"></div>
      <footer>
        <div class="sb"><button class="cta send" type="submit"><span class="i-s">${I(P.send, 16)}</span><span class="i-c">${I(P.clock, 16)}</span><b>Send</b></button><button class="cta chev" type="button" aria-label="Schedule send" aria-expanded="false">${I(P.down, 16)}</button></div>
        <p class="when"><span></span><button type="button" aria-label="Clear schedule">${I(P.x, 13)}</button></p>
        <span class="sp"></span>
        <span class="cnt">128 words</span>
      </footer>
      <div class="sch" role="menu" aria-label="Schedule send">
        <p class="lbl">Schedule send</p>
        <button class="so" type="button" role="menuitem" data-v="Thu, 15 Oct, 8:00 AM"><b>Tomorrow morning</b><span>Thu, 15 Oct, 8:00 AM</span></button>
        <button class="so" type="button" role="menuitem" data-v="Thu, 15 Oct, 1:00 PM"><b>Tomorrow afternoon</b><span>Thu, 15 Oct, 1:00 PM</span></button>
        <button class="so" type="button" role="menuitem" data-v="Fri, 16 Oct, 9:00 AM"><b>Friday morning</b><span>Fri, 16 Oct, 9:00 AM</span></button>
        <button class="so" type="button" role="menuitem" data-v="Mon, 19 Oct, 8:00 AM"><b>Monday morning</b><span>Mon, 19 Oct, 8:00 AM</span></button>
        <p class="tz">Times shown in Manila (UTC+8)</p>
      </div>
      <div class="done" role="status"><span class="okc"><svg viewBox="0 0 24 24" width="30" height="30" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg></span><h2 class="dh">Message sent</h2><p class="dp"></p><button class="btn again" type="button">Write another</button></div>
    </form>
  </main>
  ${CURSOR}
</div>`,
    css: BASE + `
.d .app{display:grid;grid-template-rows:auto minmax(0,1fr);height:100%;background:var(--ml-surface)}
.d .top{display:flex;align-items:center;justify-content:space-between;gap:16px;height:72px;padding:0 28px}
.d h1{font-size:22px;font-weight:650;letter-spacing:-.03em}
.d .sv{margin-top:2px;font-size:12.5px;color:var(--ml-muted)}
.d .wrap{display:flex;justify-content:center;min-height:0;padding:0 28px 24px}
.d .card{position:relative;display:flex;flex-direction:column;width:100%;max-width:880px;min-height:0;border-radius:22px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg);overflow:hidden}
.d .rw{position:relative;display:flex;align-items:center;gap:14px;flex:none;min-height:52px;padding:6px 22px;border-bottom:1px solid var(--ml-line)}
.d .lb{width:56px;flex:none;font-size:13px;color:var(--ml-muted)}
.d .fr{display:flex;align-items:center;gap:10px;font-size:14px;font-weight:600}
.d .fr .av{width:26px;height:26px;font-size:10px}
.d .fr small{font-size:13px;font-weight:500;color:var(--ml-muted)}
.d .chips{display:flex;flex:1;flex-wrap:wrap;align-items:center;gap:6px;min-width:0}
.d .chip{display:inline-flex;align-items:center;gap:7px;height:32px;padding:0 6px 0 4px;border-radius:999px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:13px;font-weight:600;color:var(--ml-accent-ink)}
.d .chip.enter{animation:ib-pop 420ms var(--ml-bounce)}
.d .chip .av{width:24px;height:24px;font-size:9px;background:var(--ml-bg)}
.d .chip button{display:grid;place-items:center;width:20px;height:20px;border:0;border-radius:50%;background:none;color:var(--ml-accent-ink);cursor:pointer}
.d .chip button:hover{background:rgba(255,68,51,.14)}
.d .tin{flex:1;min-width:90px;height:32px;border:0;outline:0;background:none;font-size:14px}
.d .cc{flex:none;font-size:13px;font-weight:600;color:var(--ml-muted)}
.d .ac{position:absolute;left:92px;top:calc(100% - 4px);z-index:25;display:none;flex-direction:column;width:340px;padding:6px;list-style:none;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg)}
.d .ac.on{display:flex;animation:ib-in 320ms var(--ml-spring) both}
.d .ai{display:grid;grid-template-columns:34px minmax(0,1fr);gap:0 11px;align-items:center;padding:8px 10px;border-radius:11px;cursor:pointer;transition:background-color .15s ease,transform 90ms ease-out}
.d .ai .av{grid-row:1/3;width:34px;height:34px;font-size:11.5px}
.d .ai.sel,.d .ai:hover{background:var(--ml-accent-soft)}
.d .ai b{overflow:hidden;font-size:13.5px;font-weight:650;white-space:nowrap;text-overflow:ellipsis}
.d .ai b mark{background:none;color:var(--ml-accent)}
.d .ai small{overflow:hidden;font-size:12px;color:var(--ml-muted);white-space:nowrap;text-overflow:ellipsis}
.d .sub{flex:1;min-width:0;height:36px;border:0;outline:0;background:none;font-size:14.5px;font-weight:600}
.d .tbr{display:flex;align-items:center;gap:2px;flex:none;padding:8px 16px;border-bottom:1px solid var(--ml-line);color:var(--ml-ink-2)}
.d .vs{width:1px;height:18px;margin:0 8px;background:var(--ml-line)}
.d .body{flex:1;min-height:90px;padding:18px 22px;border:0;outline:0;resize:none;background:none;font-size:14.5px;line-height:1.65;color:var(--ml-ink-2)}
.d .files{display:flex;flex-wrap:wrap;gap:10px;flex:none;padding:0 22px}
.d .files:empty{display:none}
.d .fi{position:relative;display:flex;align-items:center;gap:10px;min-width:230px;padding:9px 12px 9px 9px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);overflow:hidden}
.d .fi.enter{animation:ib-in 460ms var(--ml-spring) both}
.d .fi > span{display:grid;place-items:center;width:34px;height:34px;border-radius:9px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .fi p{display:flex;flex:1;flex-direction:column;min-width:0;font-size:13px;font-weight:600}
.d .fi small{font-size:12px;font-weight:500;color:var(--ml-muted)}
.d .fi button{display:grid;place-items:center;width:24px;height:24px;border:0;border-radius:50%;background:none;color:var(--ml-muted);cursor:pointer}
.d .fi button:hover{background:var(--ml-bar-2)}
.d .fi i{position:absolute;left:0;right:0;bottom:0;height:3px;background:var(--ml-grad);transform-origin:0 50%;transform:scaleX(0);transition:transform .2s linear,opacity .3s ease .1s}
.d .fi.up i{opacity:1}
.d .fi:not(.up) i{opacity:0}
.d footer{display:flex;align-items:center;gap:14px;flex:none;padding:16px 22px 18px}
.d .sb{display:flex;align-items:stretch;gap:1px}
.d .sb .cta{height:42px;border-radius:12px 0 0 12px;padding:0 18px;font-size:14px}
.d .sb .chev{width:42px;padding:0;border-radius:0 12px 12px 0}
.d .sb .send b{font-weight:650}
.d .i-c{display:none}
.d .card.sch-on .i-s{display:none}
.d .card.sch-on .i-c{display:inline-flex}
.d .when{display:none;align-items:center;gap:8px;height:34px;padding:0 6px 0 12px;border-radius:999px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:12.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .card.sch-on .when{display:inline-flex;animation:ib-pop 420ms var(--ml-bounce)}
.d .when button{display:grid;place-items:center;width:22px;height:22px;border:0;border-radius:50%;background:none;color:var(--ml-accent-ink);cursor:pointer}
.d .sp{flex:1}
.d .cnt{font-size:12.5px;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .sch{position:absolute;left:22px;bottom:70px;z-index:30;display:none;flex-direction:column;width:300px;padding:6px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg)}
.d .sch.on{display:flex;animation:ib-in 380ms var(--ml-spring) both}
.d .sch .lbl{padding:10px 10px 6px}
.d .so{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 10px;border:0;border-radius:11px;background:none;text-align:left;cursor:pointer;transition:background-color .15s ease,transform 90ms ease-out}
.d .so:hover,.d .so.press{background:var(--ml-accent-soft)}
.d .so b{font-size:13.5px;font-weight:600}
.d .so span{font:500 12px/1 var(--ml-mono);color:var(--ml-muted)}
.d .tz{padding:8px 10px 6px;border-top:1px solid var(--ml-line);margin-top:4px;font-size:12px;color:var(--ml-muted)}
.d .done{position:absolute;inset:0;z-index:40;display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:24px;text-align:center;background:rgba(255,255,255,.96)}
.d .card.sent .done{display:flex;animation:ib-in 420ms var(--ml-spring) both}
.d .okc{display:grid;place-items:center;width:68px;height:68px;border-radius:50%;background:rgba(29,185,84,.12);color:#12893C}
.d .card.sent .okc path{stroke-dasharray:1;stroke-dashoffset:1;animation:ib-draw 650ms var(--ml-ease) 220ms forwards}
.d .dh{margin-top:6px;font-size:22px;font-weight:650;letter-spacing:-.03em}
.d .dp{max-width:420px;font-size:14px;line-height:1.5;color:var(--ml-muted)}
.d .again{margin-top:10px}
@keyframes ib-draw{to{stroke-dashoffset:0}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .top{padding:0 16px;height:64px}
  .d .wrap{padding:0 12px 12px}
  .d .rw{padding:6px 14px}
  .d .lb{width:48px}
  .d .cc,.d .fr small,.d .cnt{display:none}
  .d .ac{left:60px;width:calc(100% - 76px)}
  .d .sch{left:12px}
  .d .body{padding:14px}
  .d .files{padding:0 14px}
  .d .fi{min-width:0;flex:1}
  .d footer{padding:12px 14px 14px;flex-wrap:wrap}
}`,
    run: (root) => {
      const sv = (d, s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
      const XI = '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>';
      const FI = '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/>';
      const contacts = [
        { n: 'Ana Lim', e: 'ana.lim@northgate.co', i: 'AL', co: 1 },
        { n: 'Tomas Lindqvist', e: 'tomas@brightline.co', i: 'TL', co: 2 },
        { n: 'Aiko Tan', e: 'aiko.tan@halden.co', i: 'AT', co: 3 },
        { n: 'Priya Nair', e: 'priya@meridianfoods.co', i: 'PN', co: 1 },
        { n: 'Daniel Okafor', e: 'daniel@solace.studio', i: 'DO', co: 2 },
        { n: 'Noor Haddad', e: 'noor@kestrel.co', i: 'NH', co: 3 },
        { n: 'Hana Kim', e: 'hana.kim@halden.co', i: 'HK', co: 1 },
      ];
      const BODY = ['Hi Ana,', '', 'Attached is the revised proposal with the October rates. The discovery phase is now fixed at two weeks and hosting moves into the monthly retainer.', '', 'Let me know if the totals on page 3 look right and I will send the final version at noon.', '', 'Best,', 'Maya'].join('\n');
      let to = [contacts[0]];
      let files = [['Northgate-proposal-v4.pdf', '1.2 MB']];
      let when = '';
      let hi = 0;
      let busy = false;
      const $ = (s) => root.querySelector(s);
      const $$ = (s) => [...root.querySelectorAll(s)];
      const card = $('.card');
      const tin = $('.tin');
      const ac = $('.ac');
      const body = $('.body');
      const cur = $('.cur');
      const initials = (c) => `<span class="av t${c.co}">${c.i}</span>`;
      const chipHTML = (c, enter) => `<span class="chip${enter ? ' enter' : ''}" data-e="${c.e}">${initials(c)}${c.n}<button type="button" aria-label="Remove ${c.n}">${sv(XI, 12)}</button></span>`;
      const drawChips = () => {
        $$('.chip').forEach((c) => c.remove());
        tin.insertAdjacentHTML('beforebegin', to.map((c) => chipHTML(c)).join(''));
      };
      const addChip = (c) => {
        if (to.includes(c)) return;
        to.push(c);
        tin.insertAdjacentHTML('beforebegin', chipHTML(c, true));
        tin.value = '';
        closeAc();
      };
      const matches = () => {
        const q = tin.value.trim().toLowerCase();
        if (!q) return [];
        return contacts.filter((c) => !to.includes(c) && (c.n.toLowerCase().includes(q) || c.e.toLowerCase().startsWith(q))).slice(0, 4);
      };
      const hl = (s, q) => {
        const k = s.toLowerCase().indexOf(q);
        return k < 0 ? s : s.slice(0, k) + '<mark>' + s.slice(k, k + q.length) + '</mark>' + s.slice(k + q.length);
      };
      const closeAc = () => {
        ac.classList.remove('on');
        ac.innerHTML = '';
      };
      const drawAc = () => {
        const m = matches();
        if (!m.length) return closeAc();
        hi = Math.min(hi, m.length - 1);
        const q = tin.value.trim().toLowerCase();
        ac.innerHTML = m.map((c, k) => `<li class="ai${k === hi ? ' sel' : ''}" role="option" data-e="${c.e}">${initials(c)}<b>${hl(c.n, q)}</b><small>${c.e}</small></li>`).join('');
        ac.classList.add('on');
      };
      const drawFiles = () => {
        $('.files').innerHTML = files.map((f, k) => `<div class="fi" data-k="${k}"><span>${sv(FI, 17)}</span><p>${f[0]}<small>${f[1]}</small></p><button type="button" aria-label="Remove ${f[0]}">${sv(XI, 14)}</button><i></i></div>`).join('');
      };
      const words = () => ($('.cnt').textContent = body.value.trim().split(/\s+/).filter(Boolean).length + ' words');
      const attach = () => {
        if (files.length > 2) return;
        const f = ['Rate-card-2026.pdf', '340 KB'];
        files.push(f);
        $('.files').insertAdjacentHTML('beforeend', `<div class="fi enter up" data-k="${files.length - 1}"><span>${sv(FI, 17)}</span><p>${f[0]}<small>Uploading</small></p><button type="button" aria-label="Remove ${f[0]}">${sv(XI, 14)}</button><i></i></div>`);
        const el = $('.files').lastElementChild;
        const bar = el.querySelector('i');
        let p = 0;
        const step = () => {
          if (!root.isConnected || !el.isConnected) return;
          if (!root.dataset.paused) p = Math.min(1, p + 0.12);
          bar.style.transform = `scaleX(${p})`;
          if (p < 1) setTimeout(step, 120);
          else {
            el.classList.remove('up');
            el.querySelector('small').textContent = f[1];
          }
        };
        step();
      };
      const setWhen = (v) => {
        when = v;
        card.classList.toggle('sch-on', !!v);
        $('.when span').textContent = v ? 'Scheduled for ' + v : '';
        $('.send b').textContent = v ? 'Schedule send' : 'Send';
        $('.sch').classList.remove('on');
        $('.chev').setAttribute('aria-expanded', 'false');
      };
      const reset = () => {
        busy = false;
        card.classList.remove('sent');
        to = [contacts[0]];
        files = [['Northgate-proposal-v4.pdf', '1.2 MB']];
        tin.value = '';
        closeAc();
        drawChips();
        drawFiles();
        $('.sub').value = 'Northgate proposal: final numbers';
        body.value = BODY;
        words();
        setWhen('');
      };
      const send = () => {
        if (busy) return;
        busy = true;
        $('.sch').classList.remove('on');
        $('.dh').textContent = when ? 'Message scheduled' : 'Message sent';
        $('.dp').textContent = `To ${to.map((c) => c.n).join(' and ')}${when ? ', ' + when : ', just now'}. ${files.length} ${files.length === 1 ? 'attachment' : 'attachments'} included.`;
        card.classList.remove('sent');
        void card.offsetWidth;
        card.classList.add('sent');
      };
      tin.addEventListener('input', () => {
        hi = 0;
        drawAc();
      });
      tin.addEventListener('keydown', (e) => {
        const m = matches();
        if (e.key === 'ArrowDown' && m.length) {
          e.preventDefault();
          hi = (hi + 1) % m.length;
          drawAc();
        } else if (e.key === 'ArrowUp' && m.length) {
          e.preventDefault();
          hi = (hi + m.length - 1) % m.length;
          drawAc();
        } else if (e.key === 'Enter' || e.key === ',') {
          e.preventDefault();
          if (m.length) addChip(m[hi]);
        } else if (e.key === 'Backspace' && !tin.value && to.length) {
          to.pop();
          drawChips();
        } else if (e.key === 'Escape') closeAc();
      });
      ac.addEventListener('click', (e) => {
        const li = e.target.closest('.ai');
        if (li) addChip(contacts.find((c) => c.e === li.dataset.e));
      });
      $('.chips').addEventListener('click', (e) => {
        const b = e.target.closest('.chip button');
        if (!b) return void tin.focus({ preventScroll: true });
        const c = b.closest('.chip');
        to = to.filter((x) => x.e !== c.dataset.e);
        c.remove();
      });
      $('.files').addEventListener('click', (e) => {
        const b = e.target.closest('.fi button');
        if (!b) return;
        const el = b.closest('.fi');
        files.splice(+el.dataset.k, 1);
        drawFiles();
      });
      body.addEventListener('input', words);
      $('.att').addEventListener('click', attach);
      $('.chev').addEventListener('click', () => {
        const on = $('.sch').classList.toggle('on');
        $('.chev').setAttribute('aria-expanded', String(on));
      });
      $$('.so').forEach((b) => b.addEventListener('click', () => setWhen(b.dataset.v)));
      $('.when button').addEventListener('click', () => setWhen(''));
      $('.dsc').addEventListener('click', reset);
      $('.again').addEventListener('click', reset);
      card.addEventListener('submit', (e) => {
        e.preventDefault();
        send();
      });
      reset();

      // Autoplay: add a recipient from the autocomplete, attach a file, pick a send time, send. Real input hands over for 4s.
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
      const act = async (el, fn, fx, fy) => {
        if (!idle()) return false;
        const shown = moveTo(el, fx, fy);
        cur.classList.toggle('off', !shown);
        await wait(shown ? 850 : 250);
        if (!idle()) return false;
        if (shown) {
          cur.classList.add('press');
          el.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          el.classList.remove('press');
        }
        fn();
        return true;
      };
      cur.style.transform = 'translate(700px,420px)';
      (async () => {
        await wait(1600);
        while (root.isConnected) {
          if (!idle()) {
            await wait(400);
            continue;
          }
          if (busy || card.classList.contains('sent') || to.length > 1) reset();
          await wait(500);
          if (!(await act($('.chips'), () => tin.focus({ preventScroll: true }), 0.8, 0.5))) continue;
          let ok = true;
          for (const ch of 'tom') {
            if (!idle()) {
              ok = false;
              break;
            }
            tin.value += ch;
            hi = 0;
            drawAc();
            await wait(190);
          }
          if (!ok) continue;
          await wait(500);
          const li = ac.querySelector('.ai');
          if (li && !(await act(li, () => li.click(), 0.4, 0.5))) continue;
          await wait(900);
          if (!(await act($('.att'), attach, 0.5, 0.5))) continue;
          await wait(1900);
          if (!(await act($('.chev'), () => $('.chev').click(), 0.5, 0.5))) continue;
          await wait(700);
          const opt = $('.so[data-v="Fri, 16 Oct, 9:00 AM"]');
          if (!(await act(opt, () => opt.click(), 0.4, 0.5))) continue;
          await wait(900);
          if (!(await act($('.send'), () => $('.send').click(), 0.5, 0.5))) continue;
          await wait(3400);
        }
      })();
    },
    prompt: `Build an email compose screen, full viewport (height: 100dvh) on a soft off-white surface.

Layout: grid rows auto / minmax(0, 1fr). A 72px top bar holds the title "New message", a muted "Draft saved at 9:47 AM" line and a secondary Discard button. Below it a centered composer card (max-width 880px, radius 22px, hairline plus a large soft shadow) fills the remaining height as a flex column: a From row (26px avatar, name, muted address), a To row, a Subject row, a formatting toolbar (bold, italic, link, a divider, attach, image), a body textarea that takes all the free height (flex: 1, 14.5px/1.65), an attachment strip and a footer. Rows are separated by 1px hairlines with a 56px muted label column.

The To row is a chip input: each recipient is a 32px pill with an initials avatar, the name and a remove button on an accent-soft fill with an accent-line hairline. Typing filters your contacts (name contains or email starts with the query, 4 results, already-chosen people excluded) into a 340px suggestion popover under the field: avatar, name with the matched text in your accent color, email. ArrowUp and ArrowDown move the highlight, Enter or comma adds the highlighted contact, Backspace on an empty field removes the last chip, Escape closes the list. A new chip pops (scale 1 to 1.18 to 1, 420ms, overshoot curve). Attaching adds a file card whose 3px gradient progress bar fills (scaleX from 0 to 1 with transform-origin left) before the size replaces "Uploading".

The footer has a split button: a primary gradient "Send" and a chevron half. The chevron opens a 300px "Schedule send" menu above it with four options (label plus a mono date, for example Fri, 16 Oct, 9:00 AM) and a time zone note. Choosing one turns the button into "Schedule send" with a clock icon and adds an accent pill "Scheduled for ..." with a clear button. Submitting shows a full-card success layer with a drawing check (stroke-dasharray 1 to 0, 650ms), "Message sent" or "Message scheduled", a summary of recipients and attachments and a "Write another" button. Accessibility: the input has aria-autocomplete, the list is role="listbox", the menu is role="menu", aria-expanded on the chevron, icon buttons have aria-labels, the success layer is role="status". Phone (under 760px): tighter paddings, hide Cc/Bcc, the word count and the From address. Plain HTML, CSS and JS, no libraries; React-friendly structure (ComposeHeader, RecipientInput, Suggestions, Toolbar, AttachmentCard, SendSplitButton, SchedulePopover, SentState).`,
  });
})();
