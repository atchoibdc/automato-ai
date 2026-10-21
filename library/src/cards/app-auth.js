(() => {
  const P = {
    mark: '<path d="M4 20V4"/><path d="M20 20V4"/><path d="M4 12h16"/>',
    mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
    lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    eye: '<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    eyeOff: '<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.53 13.53 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><path d="M2 2l20 20"/>',
    key: '<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"/><circle cx="16.5" cy="7.5" r=".5"/>',
    link: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    trend: '<path d="M22 7 13.5 15.5 8.5 10.5 2 17"/><path d="M16 7h6v6"/>',
    user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    phone: '<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>',
    copy: '<rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    plus: '<path d="M5 12h14"/><path d="M12 5v14"/>',
    laptop: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
    finger: '<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"/><path d="M14 13.12c0 2.38 0 6.38-1 8.88"/><path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"/><path d="M2 12a10 10 0 0 1 18-6"/><path d="M2 16h.01"/><path d="M21.8 16c.2-2 .131-5.354 0-6"/><path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"/><path d="M8.65 22c.21-.66.45-1.32.57-2"/><path d="M9 6.8a6 6 0 0 1 9 5.2v2"/>',
    face: '<path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/>',
    down: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
    chevR: '<path d="m9 18 6-6-6-6"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
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
  // Shared styling for the 13 cards that follow (the reference card keeps its own CSS). Strings only.
  const BASE = `
.d h1{font-size:28px;line-height:1.1;font-weight:650;letter-spacing:-.035em}
.d .lead{margin-top:8px;font-size:14px;color:var(--ml-muted)}
.d .fl{display:block;margin-top:14px;font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .fl.row{display:flex;align-items:baseline;justify-content:space-between}
.d .lk{padding:0;border:0;background:none;font:inherit;font-weight:600;color:var(--ml-accent-ink);text-decoration:none;cursor:pointer}
.d .lk:hover{text-decoration:underline}
.d .brand{display:flex;align-items:center;gap:10px;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .mark{display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad);font-size:14px;font-weight:700;box-shadow:0 1px 2px rgba(255,68,51,.3),0 6px 14px rgba(255,68,51,.2)}
.d .field{position:relative;display:flex;align-items:center;gap:10px;height:46px;margin-top:7px;padding:0 6px 0 13px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .25s ease,background-color .25s ease,color .25s ease}
.d .field input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:14.5px;color:var(--ml-ink)}
.d .field input::placeholder{color:#A1A1A6}
.d .field:focus-within,.d .field.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .field.bad{box-shadow:inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1);color:#FF3B30;animation:au-shake 380ms var(--ml-ease)}
.d .err{display:grid;grid-template-rows:0fr;font-size:12.5px;color:#D70015;opacity:0;transition:grid-template-rows .3s var(--ml-ease),opacity .2s ease}
.d .err > span{min-height:0;overflow:hidden;padding-top:6px}
.d .field.bad + .err{grid-template-rows:1fr;opacity:1}
.d .eye{position:relative;display:grid;flex:none;place-items:center;width:34px;height:34px;border:0;border-radius:9px;background:none;color:var(--ml-muted);cursor:pointer}
.d .eye:hover{background:var(--ml-bar-2)}
.d .eye svg{position:absolute;transition:opacity .2s ease,transform .3s var(--ml-ease)}
.d .eye svg + svg,.d .eye.on svg:first-child{opacity:0;transform:scale(.7)}
.d .eye.on svg + svg{opacity:1;transform:none}
.d .go{position:relative;display:grid;place-items:center;width:100%;height:46px;margin-top:20px;border:0;border-radius:12px;overflow:hidden;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 10px 22px rgba(255,68,51,.24);font-size:14.5px;font-weight:600;cursor:pointer;transition:transform 90ms ease-out,background-color .3s ease,opacity .2s ease}
.d .go:active,.d .go.press{transform:scale(.97)}
.d .go:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .go:disabled{opacity:.45;cursor:default;box-shadow:none}
.d .go > span{grid-area:1/1;display:inline-flex;align-items:center;gap:8px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .go .busy,.d .go .done{opacity:0;transform:translateY(10px)}
.d .go.loading .lbl,.d .go.ok .lbl,.d .go.ok .busy{opacity:0;transform:translateY(-10px)}
.d .go.loading .busy,.d .go.ok .done{opacity:1;transform:none}
.d .go.loading::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);background-size:220% 100%;animation:au-sheen 1.1s linear infinite}
.d .go.ok{background:#1DB954;box-shadow:0 1px 2px rgba(29,185,84,.3),0 10px 22px rgba(29,185,84,.22)}
.d .ghost{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:42px;padding:0 14px;border:0;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);font-size:13.5px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease}
.d .ghost:hover{background:var(--ml-surface)}
.d .ghost:active,.d .ghost.press{transform:scale(.97)}
.d .pnl{display:none}
.d .pnl.on{display:block;animation:au-in 520ms var(--ml-spring) both}
.d .okc{display:grid;place-items:center;width:64px;height:64px;border-radius:50%;background:rgba(29,185,84,.12);color:#12893C}
.d .pnl.on .okc path{stroke-dasharray:1;stroke-dashoffset:1;animation:au-draw 650ms var(--ml-ease) 220ms forwards}
.d .shim{background:linear-gradient(100deg,var(--ml-bar-2) 30%,#F7F9FD 50%,var(--ml-bar-2) 70%);background-size:220% 100%;animation:au-sheen 1.3s linear infinite}
@keyframes au-shake{0%,100%{transform:none}25%{transform:translateX(-5px)}55%{transform:translateX(4px)}80%{transform:translateX(-2px)}}
@keyframes au-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes au-in{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
@keyframes au-draw{to{stroke-dashoffset:0}}
@keyframes au-pop{0%{transform:scale(.6);opacity:0}60%{transform:scale(1.06);opacity:1}100%{transform:none}}`;

  ML.add({
    id: 'app-auth-split',
    cat: 'app-auth',
    title: 'Split screen login',
    sub: 'Types, signs in, lands on success',
    html: `
<div class="wrap">
  <aside class="art" aria-hidden="true">
    <div class="logo"><span class="mark">${I(P.mark, 16)}</span>Halden</div>
    <div class="stack">
      <div class="glass g1"><span class="gi ok">${I(P.check, 14, 2.6)}</span><p><b>Invoice #1042 paid</b><small>Northgate, just now</small></p><em>$4,800</em></div>
      <div class="glass g2"><p class="gk">Collected this month</p><p class="gv">$31,780 <span>${I(P.trend, 14)}9.8%</span></p><div class="bars"><i style="--h:.42"></i><i style="--h:.58"></i><i style="--h:.5"></i><i style="--h:.71"></i><i style="--h:.64"></i><i style="--h:.86"></i><i style="--h:1"></i></div></div>
      <div class="glass g3"><span class="avs"><i>AL</i><i>TK</i><i>RS</i></span><p><b>3 teammates online</b><small>Reviewing the Q4 plan</small></p></div>
    </div>
    <figure class="quote"><blockquote>"We closed the month two days faster in our first quarter on Halden."</blockquote><figcaption><b>Ana Lim</b> Finance lead, Northgate</figcaption></figure>
  </aside>
  <main class="side">
    <form class="form" novalidate>
      <div class="mlogo"><span class="mark">${I(P.mark, 16)}</span>Halden</div>
      <h1>Welcome back</h1>
      <p class="lead">Sign in to your Halden workspace.</p>
      <div class="alt"><button type="button" class="ghost">${I(P.key, 17)}Continue with SSO</button><button type="button" class="ghost">${I(P.link, 17)}Email me a link</button></div>
      <p class="or"><span>or</span></p>
      <label class="fl" for="ml-email">Email</label>
      <div class="field" data-f="email">${I(P.mail, 17)}<input id="ml-email" type="email" autocomplete="email" placeholder="you@company.com" aria-describedby="ml-email-err"></div>
      <p class="err" id="ml-email-err" role="alert"><span>Enter a valid work email.</span></p>
      <div class="fl row"><label for="ml-pass">Password</label><a href="#" class="forgot">Forgot password?</a></div>
      <div class="field" data-f="pass">${I(P.lock, 17)}<input id="ml-pass" type="password" autocomplete="current-password" placeholder="Your password" aria-describedby="ml-pass-err"><button type="button" class="eye" aria-label="Show password" aria-pressed="false">${I(P.eye, 17)}${I(P.eyeOff, 17)}</button></div>
      <p class="err" id="ml-pass-err" role="alert"><span>Enter your password.</span></p>
      <label class="keep"><input type="checkbox" checked><span class="box">${I(P.check, 12, 3)}</span>Keep me signed in</label>
      <button type="submit" class="go"><span class="lbl">Sign in</span><span class="busy">Signing in</span><span class="done">${I(P.check, 17, 2.6)}Signed in</span></button>
      <p class="new">New to Halden? <a href="#">Create an account</a></p>
    </form>
  </main>
  ${CURSOR}
</div>`,
    css: `
.d .wrap{display:grid;grid-template-columns:minmax(0,46fr) minmax(0,54fr);height:100%;background:var(--ml-bg)}
.d .art{position:relative;display:flex;flex-direction:column;justify-content:space-between;margin:14px 0 14px 14px;padding:30px 32px;border-radius:22px;overflow:hidden;color:#fff;background:radial-gradient(120% 80% at 85% 0%,rgba(79,163,255,.55) 0%,rgba(79,163,255,0) 60%),linear-gradient(160deg,var(--ml-accent) 0%,var(--ml-accent-ink) 100%)}
.d .art::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.16) 1px,transparent 1.2px);background-size:22px 22px;-webkit-mask-image:linear-gradient(180deg,#000 0%,transparent 75%);mask-image:linear-gradient(180deg,#000 0%,transparent 75%)}
.d .logo,.d .mlogo{position:relative;display:flex;align-items:center;gap:10px;font-size:16px;font-weight:650;letter-spacing:-.02em}
.d .logo .mark{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:rgba(255,255,255,.18);box-shadow:inset 0 0 0 1px rgba(255,255,255,.3)}
.d .stack{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:14px;padding:8px 0}
.d .glass{display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.14);box-shadow:inset 0 0 0 1px rgba(255,255,255,.24),0 18px 40px rgba(0,30,90,.25);animation:auth-float 7s ease-in-out infinite}
.d .glass p{display:flex;flex-direction:column}
.d .glass b{font-size:13.5px;font-weight:600}
.d .glass small{font-size:12px;color:rgba(255,255,255,.72)}
.d .glass em{margin-left:18px;font-size:15px;font-weight:650;font-style:normal;font-variant-numeric:tabular-nums}
.d .g1{margin-left:22px}
.d .g2{flex-direction:column;align-items:stretch;gap:6px;width:250px;margin-left:72px;animation-delay:-2.4s}
.d .g3{margin-left:8px;animation-delay:-4.6s}
.d .gi{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:#fff;color:var(--ml-accent)}
.d .gk{font-size:12px;color:rgba(255,255,255,.75)}
.d .glass .gv{display:flex;flex-direction:row;align-items:center;gap:8px;font-size:22px;font-weight:650;letter-spacing:-.02em}
.d .glass .gv span{display:inline-flex;align-items:center;gap:3px;padding:3px 7px;border-radius:999px;background:rgba(255,255,255,.18);font-size:11.5px;font-weight:600}
.d .bars{display:flex;align-items:flex-end;gap:6px;height:46px;margin-top:4px}
.d .bars i{flex:1;height:100%;border-radius:5px 5px 2px 2px;background:rgba(255,255,255,.85);transform:scaleY(var(--h));transform-origin:50% 100%;animation:auth-bar 3.6s var(--ml-ease) infinite}
.d .bars i:nth-child(odd){background:rgba(255,255,255,.45)}
.d .bars i:nth-child(2){animation-delay:.12s}.d .bars i:nth-child(3){animation-delay:.24s}.d .bars i:nth-child(4){animation-delay:.36s}.d .bars i:nth-child(5){animation-delay:.48s}.d .bars i:nth-child(6){animation-delay:.6s}.d .bars i:nth-child(7){animation-delay:.72s}
.d .avs{display:flex}
.d .avs i{display:grid;place-items:center;width:30px;height:30px;margin-left:-6px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px var(--ml-accent);font-size:10px;font-weight:700;font-style:normal;letter-spacing:-.02em;color:var(--ml-accent-ink)}
.d .avs i:first-child{margin-left:0}
.d .quote{position:relative;max-width:360px}
.d blockquote{font-size:17px;line-height:1.45;font-weight:500;letter-spacing:-.01em}
.d figcaption{display:flex;flex-direction:column;margin-top:12px;font-size:12.5px;color:rgba(255,255,255,.75)}
.d figcaption b{font-size:13.5px;font-weight:600;color:#fff}
.d .side{display:grid;place-items:center;min-width:0;padding:32px;overflow-y:auto}
.d .form{display:flex;flex-direction:column;width:100%;max-width:360px}
.d .mlogo{display:none;margin-bottom:22px;color:var(--ml-ink)}
.d .mlogo .mark{display:grid;place-items:center;width:30px;height:30px;border-radius:9px;color:#fff;background:var(--ml-grad)}
.d h1{font-size:28px;line-height:1.1;font-weight:650;letter-spacing:-.035em}
.d .lead{margin-top:8px;font-size:14px;color:var(--ml-muted)}
.d .alt{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:24px}
.d .ghost{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:42px;border:0;border-radius:11px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),0 1px 2px rgba(35,15,10,.04);font-size:13.5px;font-weight:600;color:var(--ml-ink-2);cursor:pointer;transition:transform 90ms ease-out,background-color .2s ease}
.d .ghost:hover{background:var(--ml-surface)}
.d .ghost:active{transform:scale(.97)}
.d .or{display:flex;align-items:center;gap:12px;margin:20px 0 6px;font-size:12px;color:var(--ml-muted)}
.d .or::before,.d .or::after{content:"";flex:1;height:1px;background:var(--ml-line)}
.d .fl{margin-top:14px;font-size:13px;font-weight:600;color:var(--ml-ink-2)}
.d .fl.row{display:flex;justify-content:space-between}
.d .forgot,.d .new a{font-weight:600;color:var(--ml-accent-ink);text-decoration:none}
.d .forgot:hover,.d .new a:hover{text-decoration:underline}
.d .field{position:relative;display:flex;align-items:center;gap:10px;height:46px;margin-top:7px;padding:0 6px 0 13px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted);transition:box-shadow .25s ease,background-color .25s ease}
.d .field input{flex:1;min-width:0;height:100%;border:0;outline:0;background:none;font-size:14.5px;color:var(--ml-ink)}
.d .field input::placeholder{color:#A1A1A6}
.d .field:focus-within,.d .field.is-auto{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent)}
.d .field.bad{box-shadow:inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1);color:#FF3B30;animation:auth-shake 380ms var(--ml-ease)}
.d .err{display:grid;grid-template-rows:0fr;font-size:12.5px;color:#D70015;opacity:0;transition:grid-template-rows .3s var(--ml-ease),opacity .2s ease}
.d .err > span{min-height:0;overflow:hidden;padding-top:6px}
.d .field.bad + .err{grid-template-rows:1fr;opacity:1}
.d .eye{position:relative;display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:9px;background:none;color:var(--ml-muted);cursor:pointer}
.d .eye:hover{background:var(--ml-bar-2)}
.d .eye svg{position:absolute;transition:opacity .2s ease,transform .3s var(--ml-ease)}
.d .eye svg + svg,.d .eye.on svg:first-child{opacity:0;transform:scale(.7)}
.d .eye.on svg + svg{opacity:1;transform:none}
.d .keep{display:flex;align-items:center;gap:9px;margin-top:16px;font-size:13.5px;color:var(--ml-ink-2);cursor:pointer}
.d .keep input{position:absolute;opacity:0;pointer-events:none}
.d .box{display:grid;place-items:center;width:18px;height:18px;border-radius:5px;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:#fff;transition:background-color .2s ease,box-shadow .2s ease}
.d .box svg{opacity:0;transform:scale(.6);transition:opacity .2s ease,transform .35s var(--ml-bounce)}
.d .keep input:checked + .box{background:var(--ml-accent);box-shadow:none}
.d .keep input:checked + .box svg{opacity:1;transform:none}
.d .keep input:focus-visible + .box{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .go{position:relative;display:grid;place-items:center;height:46px;margin-top:20px;border:0;border-radius:12px;overflow:hidden;color:#fff;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.3),0 10px 22px rgba(255,68,51,.24);font-size:14.5px;font-weight:600;cursor:pointer;transition:transform 90ms ease-out,background-color .3s ease}
.d .go:active,.d .go.press{transform:scale(.97)}
.d .go:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .go > span{grid-area:1/1;display:inline-flex;align-items:center;gap:8px;transition:opacity .25s ease,transform .45s var(--ml-spring)}
.d .go .busy,.d .go .done{opacity:0;transform:translateY(10px)}
.d .go.loading .lbl,.d .go.ok .lbl,.d .go.ok .busy{opacity:0;transform:translateY(-10px)}
.d .go.loading .busy,.d .go.ok .done{opacity:1;transform:none}
.d .go.loading::after{content:"";position:absolute;inset:0;background:linear-gradient(100deg,transparent 30%,rgba(255,255,255,.35) 50%,transparent 70%);background-size:220% 100%;animation:auth-sheen 1.1s linear infinite}
.d .go.ok{background:#1DB954;box-shadow:0 1px 2px rgba(29,185,84,.3),0 10px 22px rgba(29,185,84,.22)}
.d .new{margin-top:22px;font-size:13.5px;text-align:center;color:var(--ml-muted)}
@keyframes auth-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes auth-bar{0%,100%{transform:scaleY(var(--h))}50%{transform:scaleY(calc(var(--h) * .7))}}
@keyframes auth-sheen{from{background-position:120% 0}to{background-position:-120% 0}}
@keyframes auth-shake{0%,100%{transform:none}25%{transform:translateX(-5px)}55%{transform:translateX(4px)}80%{transform:translateX(-2px)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .wrap{grid-template-columns:minmax(0,1fr)}
  .d .art{display:none}
  .d .mlogo{display:flex}
  .d .side{place-items:start center;padding:48px 22px 28px}
}
@media (prefers-reduced-motion: reduce){.d .glass,.d .bars i{animation:none}}`,
    run: (root) => {
      const $ = (s) => root.querySelector(s);
      const form = $('.form');
      const email = $('#ml-email');
      const pass = $('#ml-pass');
      const fE = email.closest('.field');
      const fP = pass.closest('.field');
      const eye = $('.eye');
      const go = $('.go');
      const cur = $('.cur');
      const mark = (input, ok) => {
        input.closest('.field').classList.toggle('bad', !ok);
        input.setAttribute('aria-invalid', String(!ok));
        return ok;
      };
      const okEmail = () => mark(email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()));
      const valid = () => [okEmail(), mark(pass, pass.value.length > 0)].every(Boolean);
      email.addEventListener('blur', () => email.value && okEmail());
      [email, pass].forEach((el) => el.addEventListener('input', () => el.closest('.field').classList.remove('bad')));
      eye.addEventListener('click', () => {
        const on = pass.type === 'password';
        pass.type = on ? 'text' : 'password';
        eye.classList.toggle('on', on);
        eye.setAttribute('aria-pressed', String(on));
        eye.setAttribute('aria-label', on ? 'Hide password' : 'Show password');
      });
      root.querySelectorAll('a[href="#"]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
      let busy = false;
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy || !valid()) return;
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          setTimeout(() => {
            go.classList.remove('ok');
            busy = false;
          }, 1800);
        }, 1200);
      });

      // Autoplay: type the email and password, press Sign in; any real input hands over for 4s.
      const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
      const wait = async (ms) => {
        for (let t = 0; t < ms && root.isConnected; ) {
          await sleep(80);
          if (!root.dataset.paused) t += 80;
        }
      };
      let userUntil = 0;
      const idle = () => !root.dataset.paused && performance.now() > userUntil && !form.contains(root.getRootNode().activeElement);
      const touch = () => {
        userUntil = performance.now() + 4000;
        cur.classList.add('off');
        root.querySelectorAll('.is-auto').forEach((n) => n.classList.remove('is-auto'));
      };
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach((e) => root.addEventListener(e, touch, { passive: true }));
      const moveTo = (el, fx = 0.5, fy = 0.6) => {
        if (el.offsetParent === null) return false;
        const o = root.getBoundingClientRect();
        const s = o.width / root.offsetWidth || 1;
        const r = el.getBoundingClientRect();
        cur.style.transform = `translate(${(r.left - o.left + r.width * fx) / s}px,${(r.top - o.top + r.height * fy) / s}px)`;
        return true;
      };
      const type = async (input, text) => {
        input.closest('.field').classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          input.value += ch;
          await wait(55 + Math.random() * 60);
        }
        input.closest('.field').classList.remove('is-auto');
        return true;
      };
      cur.style.transform = 'translate(760px,600px)';
      (async () => {
        await wait(900);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          email.value = '';
          pass.value = '';
          cur.classList.toggle('off', !moveTo(fE, 0.62));
          await wait(800);
          if (!(await type(email, 'maya@halden.co'))) continue;
          moveTo(fP, 0.62);
          await wait(700);
          if (!(await type(pass, 'pinecone-42'))) continue;
          await wait(300);
          moveTo(go, 0.56);
          await wait(800);
          if (!idle()) continue;
          cur.classList.add('press');
          go.classList.add('press');
          await wait(130);
          cur.classList.remove('press');
          go.classList.remove('press');
          form.requestSubmit();
          await wait(4200);
        }
      })();
    },
    prompt: `Build a split-screen sign-in page for a SaaS app, full viewport (min-height: 100dvh).

Layout: two columns, 46% / 54%. The left column is a brand panel inset 14px from the edges with a 22px radius: a deep accent gradient (your accent to a darker shade at 160deg) with a soft lighter radial glow in the top right and a faint dot grid (radial-gradient dots, 22px apart) faded out toward the bottom with a mask. It holds the logo at the top, three small frosted product cards in the middle (an "Invoice paid" toast with an amount, a "Collected this month" number with a 7-bar chart, a "3 teammates online" avatar stack) and a customer quote with name and role at the bottom. The right column centers a 360px form: heading "Welcome back", one line of supporting text, two secondary buttons side by side (Continue with SSO, Email me a link), an "or" divider, Email and Password fields with leading icons, a "Forgot password?" link on the password label row, a show/hide password toggle, a "Keep me signed in" checkbox and a full-width primary "Sign in" button, then "New to us? Create an account".

Motion: the frosted cards float on a slow 7s ease-in-out loop (translateY 0 to -8px) with staggered negative delays, and the bars breathe (scaleY from the bottom). Focused fields get a 1.5px accent ring plus a 4px soft ring. Submitting swaps the button label with a vertical slide (Sign in out, "Signing in" in) and runs a light sheen across the button instead of a spinner; success turns the button green with a check and "Signed in". Invalid fields get a red ring, a short horizontal shake (380ms) and an inline message under the field that is announced (role="alert"), and aria-invalid is set.

Behavior: novalidate on the form and your own validation (email pattern, password not empty) on submit and on email blur; the eye toggle switches input type and its aria-label/aria-pressed; autocomplete="email" and "current-password". Below 760px hide the brand panel and show a small logo above the form. Respect prefers-reduced-motion (no floating or breathing). Plain HTML, CSS and JS, no libraries; use your brand color for the panel and the button.`,
  });

  const TICK = (s = 30) =>
    `<span class="okc"><svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path pathLength="1" d="M20 6 9 17l-5-5"/></svg></span>`;

  ML.add({
    id: 'app-auth-centered',
    cat: 'app-auth',
    title: 'Centered card login',
    sub: 'Tabs glide, sign up unfolds, card confirms',
    html: `
<div class="wrap">
  <div class="bg" aria-hidden="true"><i class="t1">${I(P.users, 30)}</i><i class="t2">${I(P.bell, 24)}</i><i class="t3">${I(P.clock, 26)}</i><i class="t4">${I(P.shield, 40)}</i><i class="t5">${I(P.globe, 22)}</i></div>
  <header class="bar"><span class="brand"><span class="mark">C</span>Corvid Orders</span><span class="hint">${I(P.globe, 15)}English (US)</span></header>
  <main class="stage">
    <section class="card" aria-label="Account access">
      <div class="pnl on" data-p="form">
        <div class="seg" role="group" aria-label="Sign in or create account"><span class="thumb" aria-hidden="true"></span><button type="button" class="on" data-m="in" aria-pressed="true">Sign in</button><button type="button" data-m="up" aria-pressed="false">Create account</button></div>
        <form class="form" novalidate>
          <h1 class="t">Welcome back</h1>
          <p class="lead s">Sign in to manage orders, menus and staff.</p>
          <div class="quick"><button type="button" class="ghost">${I(P.key, 16)}SSO</button><button type="button" class="ghost">${I(P.finger, 16)}Passkey</button><button type="button" class="ghost">${I(P.link, 16)}Email link</button></div>
          <div class="nm"><div>
            <label class="fl" for="ml-cen-name">Full name</label>
            <div class="field">${I(P.user, 17)}<input id="ml-cen-name" autocomplete="name" placeholder="Your name" aria-describedby="ml-cen-name-err"></div>
            <p class="err" id="ml-cen-name-err" role="alert"><span>Enter your name.</span></p>
          </div></div>
          <label class="fl" for="ml-cen-email">Work email</label>
          <div class="field">${I(P.mail, 17)}<input id="ml-cen-email" type="email" autocomplete="email" placeholder="you@company.com" aria-describedby="ml-cen-email-err"></div>
          <p class="err" id="ml-cen-email-err" role="alert"><span>Enter a valid work email.</span></p>
          <div class="fl row"><label for="ml-cen-pass">Password</label><button type="button" class="lk fp">Forgot?</button></div>
          <div class="field">${I(P.lock, 17)}<input id="ml-cen-pass" type="password" autocomplete="current-password" placeholder="Your password" aria-describedby="ml-cen-pass-err"><button type="button" class="eye" aria-label="Show password" aria-pressed="false">${I(P.eye, 17)}${I(P.eyeOff, 17)}</button></div>
          <p class="err" id="ml-cen-pass-err" role="alert"><span class="pm">Enter your password.</span></p>
          <button type="submit" class="go"><span class="lbl">Sign in</span><span class="busy">Signing in</span><span class="done">${I(P.check, 17, 2.6)}Signed in</span></button>
          <p class="fine"><span class="fi">Protected by 2-step verification.</span><span class="fu">By continuing you agree to the Terms and Privacy Policy.</span></p>
        </form>
      </div>
      <div class="pnl okv" data-p="ok" aria-live="polite">
        ${TICK(30)}
        <h1 class="okt">Welcome back</h1>
        <p class="lead">Opening your Corvid workspace.</p>
        <div class="load"><i></i></div>
      </div>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:radial-gradient(70% 60% at 12% 0%,#FFF0ED 0%,rgba(216,232,255,0) 62%),radial-gradient(60% 60% at 100% 100%,#DDEAFF 0%,rgba(221,234,255,0) 65%),var(--ml-surface)}
.d .bg i{position:absolute;display:grid;place-items:center;border-radius:24px;color:var(--ml-accent);background:linear-gradient(160deg,#fff,var(--ml-accent-soft));box-shadow:inset 0 0 0 1px rgba(185,212,255,.7),0 14px 30px rgba(255,68,51,.08);animation:cen-drift 9s ease-in-out infinite}
.d .t1{left:7%;top:15%;width:120px;height:120px;--r:-8deg}
.d .t2{left:17%;top:64%;width:84px;height:84px;--r:7deg;animation-delay:-3s!important}
.d .t3{right:9%;top:13%;width:96px;height:96px;--r:9deg;animation-delay:-5s!important}
.d .t4{right:7%;top:56%;width:140px;height:140px;--r:-6deg;animation-delay:-1.5s!important}
.d .t5{left:4%;top:86%;width:64px;height:64px;--r:5deg;animation-delay:-6s!important}
.d .bar{position:relative;z-index:1;display:flex;align-items:center;justify-content:space-between;padding:22px 30px}
.d .hint{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--ml-muted)}
.d .stage{position:relative;z-index:1;display:grid;flex:1;min-height:0;place-items:center;padding:0 24px 36px;overflow-y:auto}
.d .card{width:100%;max-width:420px;padding:26px 28px 24px;border-radius:22px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg)}
.d .seg{position:relative;display:grid;grid-template-columns:1fr 1fr;padding:4px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg button{position:relative;z-index:1;height:36px;border:0;background:none;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .25s ease,transform 90ms ease-out}
.d .seg button.on{color:var(--ml-ink)}
.d .seg button.press{transform:scale(.97)}
.d .thumb{position:absolute;top:4px;bottom:4px;left:4px;width:calc(50% - 4px);border-radius:9px;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px rgba(227,233,242,.8);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .seg.up .thumb{transform:translateX(100%)}
.d .form{display:flex;flex-direction:column;margin-top:22px}
.d .quick{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:20px}
.d .quick .ghost{padding:0 6px;height:40px}
.d .nm{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s var(--ml-ease)}
.d .nm > div{min-height:0;overflow:hidden;visibility:hidden;padding:0 5px;margin:0 -5px;transition:visibility 0s .45s}
.d .form.up .nm{grid-template-rows:1fr}
.d .form.up .nm > div{visibility:visible;transition-delay:0s}
.d .form.up .fp{visibility:hidden}
.d .fine{margin-top:16px;font-size:12.5px;text-align:center;color:var(--ml-muted)}
.d .fu{display:none}
.d .form.up .fu{display:inline}
.d .form.up .fi{display:none}
.d .okv{padding:34px 0 20px;text-align:center}
.d .okv .okc{margin:0 auto 18px}
.d .load{height:6px;margin:24px auto 0;max-width:240px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .load i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform-origin:0 50%;animation:cen-fill 2.6s var(--ml-ease) both}
@keyframes cen-drift{0%,100%{transform:translateY(0) rotate(var(--r,0deg))}50%{transform:translateY(-12px) rotate(var(--r,0deg))}}
@keyframes cen-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{padding:18px 20px}
  .d .hint,.d .t1,.d .t3,.d .t5{display:none}
  .d .stage{place-items:start center;padding:0 16px 24px}
  .d .card{padding:22px 20px}
  .d .t4{right:-30px;top:auto;bottom:-20px}
}
@media (prefers-reduced-motion: reduce){.d .bg i{animation:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const form = $('.form');
      const seg = $('.seg');
      const go = $('.go');
      const name = $('#ml-cen-name');
      const email = $('#ml-cen-email');
      const pass = $('#ml-cen-pass');
      const eye = $('.eye');
      const pForm = $('[data-p="form"]');
      const pOk = $('[data-p="ok"]');
      const mark = (input, ok) => {
        input.closest('.field').classList.toggle('bad', !ok);
        input.setAttribute('aria-invalid', String(!ok));
        return ok;
      };
      const swap = (to) => {
        pForm.classList.toggle('on', to === pForm);
        pOk.classList.toggle('on', to === pOk);
      };
      const setMode = (up) => {
        form.classList.toggle('up', up);
        seg.classList.toggle('up', up);
        seg.querySelectorAll('button').forEach((b) => {
          const on = (b.dataset.m === 'up') === up;
          b.classList.toggle('on', on);
          b.setAttribute('aria-pressed', String(on));
        });
        $('.t').textContent = up ? 'Create your account' : 'Welcome back';
        $('.s').textContent = up ? 'Start taking orders in about two minutes.' : 'Sign in to manage orders, menus and staff.';
        go.querySelector('.lbl').textContent = up ? 'Create account' : 'Sign in';
        go.querySelector('.busy').textContent = up ? 'Creating account' : 'Signing in';
        go.querySelector('.done').lastChild.textContent = up ? 'Account created' : 'Signed in';
        pass.autocomplete = up ? 'new-password' : 'current-password';
      };
      seg.querySelectorAll('button').forEach((b) => b.addEventListener('click', () => setMode(b.dataset.m === 'up')));
      [name, email, pass].forEach((el) => el.addEventListener('input', () => el.closest('.field').classList.remove('bad')));
      eye.addEventListener('click', () => {
        const on = pass.type === 'password';
        pass.type = on ? 'text' : 'password';
        eye.classList.toggle('on', on);
        eye.setAttribute('aria-pressed', String(on));
        eye.setAttribute('aria-label', on ? 'Hide password' : 'Show password');
      });
      let busy = false;
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        [name, email, pass].forEach((i) => {
          i.value = '';
          i.closest('.field').classList.remove('bad', 'is-auto');
        });
        go.classList.remove('loading', 'ok');
        setMode(false);
        swap(pForm);
        busy = false;
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        const up = form.classList.contains('up');
        $('.pm').textContent = up ? 'Use at least 8 characters.' : 'Enter your password.';
        const ok = [
          up ? mark(name, name.value.trim().length > 1) : true,
          mark(email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())),
          mark(pass, up ? pass.value.length >= 8 : pass.value.length > 0),
        ].every(Boolean);
        if (!ok) return;
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          setTimeout(() => {
            const raw = up ? name.value.trim().split(' ')[0] : email.value.split('@')[0];
            $('.okt').textContent = (up ? 'Welcome, ' : 'Welcome back, ') + raw.charAt(0).toUpperCase() + raw.slice(1);
            swap(pOk);
            setTimeout(reset, 2800);
          }, 600);
        }, 1100);
      });

      cur.style.transform = 'translate(700px,600px)';
      (async () => {
        await wait(1200);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => press($('[data-m="up"]'), 0.5),
            rest(700),
            () => aim(name, 0.6),
            () => typeInto(name, 'Rafael Santos'),
            () => aim(email, 0.6),
            () => typeInto(email, 'rafael@corvidcoffee.com'),
            () => aim(pass, 0.6),
            () => typeInto(pass, 'roast-dark-26'),
            rest(300),
            () => press(go, 0.55),
            rest(5000),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a centered sign-in and sign-up card on a soft full-viewport background (min-height: 100dvh).

Background: your surface color with two large soft radial gradients of a pale accent tint (top left and bottom right), plus five rounded "app tile" squares (64 to 140px, 24px radius, white to pale-accent gradient, hairline ring, soft shadow, one line icon each) scattered near the edges that drift up and down 12px on a 9s ease-in-out loop with a slight rotation and staggered negative delays. A slim top bar holds the logo on the left and a language label on the right.

Card: 420px max width, 22px radius, white, hairline ring plus a large soft shadow, 28px padding. At the top a segmented control (Sign in / Create account): a surface-tinted track with ONE white thumb that glides between the two options with transform: translateX and a critically damped spring (587ms linear() curve). Below it: heading and one line of copy that change with the mode, three equal secondary buttons (SSO, Passkey, Email link), then the fields. Switching to Create account unfolds a Full name field with grid-template-rows 0fr to 1fr (450ms), changes the button label and swaps the Forgot link for a terms line. Email and password fields are 46px tall with leading icons; the password has a show/hide toggle.

Behavior: novalidate form with your own validation (name 2+ characters when signing up, email pattern, password 8+ characters when signing up or not empty when signing in). Invalid fields get a red ring, a 380ms shake and an inline role="alert" message with aria-invalid. Submit shows a sheen across the primary button instead of a spinner, turns it green with a check, then replaces the card content with a success view: a green circle with a check that draws itself (pathLength 1, stroke-dashoffset 1 to 0), "Welcome, <first name>" and a thin progress bar filling while the app opens.

Accessibility: labels tied to inputs, visible focus rings (1.5px accent plus 4px soft ring), aria-pressed on the segmented options, autocomplete values (email, current-password or new-password), prefers-reduced-motion removes the drifting tiles. Below 760px drop most tiles and the top bar label and let the card fill the width. Plain HTML, CSS and JS, no libraries; React-friendly structure (AuthShell, ModeTabs, AuthForm, SuccessView). Use your accent color for the primary button and focus ring.`,
  });

  ML.add({
    id: 'app-auth-magic',
    cat: 'app-auth',
    title: 'Magic link sent',
    sub: 'Letter rises, resend timer counts down',
    html: `
<div class="wrap">
  <header class="bar"><span class="brand"><span class="mark">F</span>Fernway</span><button type="button" class="lk">Need help?</button></header>
  <main class="stage">
    <div class="col">
      <div class="art" aria-hidden="true">
        <span class="rg"><i></i><i></i><i></i></span>
        <svg viewBox="0 0 220 160" width="232" height="169">
          <defs>
            <linearGradient id="ml-mag-front" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF7A3D"/><stop offset="1" stop-color="#FF4433"/></linearGradient>
            <linearGradient id="ml-mag-flap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFF0EE"/><stop offset="1" stop-color="#FFF0ED"/></linearGradient>
          </defs>
          <ellipse cx="110" cy="152" rx="82" ry="6" fill="#FF4433" opacity=".1"/>
          <path d="M20 56 L110 6 L200 56 Z" fill="url(#ml-mag-flap)" stroke="#FFD0CA" stroke-linejoin="round"/>
          <rect x="20" y="44" width="180" height="104" rx="16" fill="#FFF0EE" stroke="#FFD0CA"/>
          <g class="ltr"><rect x="42" y="30" width="136" height="96" rx="10" fill="#fff" stroke="#E2D6CC"/><rect x="58" y="46" width="64" height="9" rx="4.5" fill="#FF4433"/><rect x="58" y="65" width="104" height="6" rx="3" fill="#E2D6CC"/><rect x="58" y="79" width="86" height="6" rx="3" fill="#E2D6CC"/><rect x="58" y="97" width="46" height="14" rx="7" fill="#FFF0EE" stroke="#FFD0CA"/></g>
          <path d="M20 62 L110 112 L200 62 V132 a16 16 0 0 1 -16 16 H36 a16 16 0 0 1 -16 -16 Z" fill="url(#ml-mag-front)"/>
          <path d="M20 62 L110 112 L200 62" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="2" stroke-linejoin="round"/>
        </svg>
      </div>
      <div class="pnl on" data-p="sent" aria-live="polite">
        <h1>Check your inbox</h1>
        <p class="lead">We sent a sign-in link to <b class="to">maya@fernway.co</b>. It expires in 10 minutes.</p>
        <div class="acts"><button type="button" class="go open"><span class="lbl">${I(P.mail, 17)}Open mail app</span></button><button type="button" class="ghost rs" disabled>${I(P.refresh, 15)}<span class="rl">Resend in 0:07</span></button></div>
        <p class="fine">Can't find it? Check spam or promotions.</p>
        <button type="button" class="lk diff">Use a different email</button>
      </div>
      <div class="pnl" data-p="email">
        <h1>Sign in with email</h1>
        <p class="lead">We will email you a link that signs you in. No password needed.</p>
        <form class="form" novalidate>
          <label class="fl" for="ml-mag-email">Email</label>
          <div class="field">${I(P.mail, 17)}<input id="ml-mag-email" type="email" autocomplete="email" placeholder="you@company.com" aria-describedby="ml-mag-err"></div>
          <p class="err" id="ml-mag-err" role="alert"><span>Enter a valid email address.</span></p>
          <button type="submit" class="go"><span class="lbl">Send magic link</span><span class="busy">Sending link</span><span class="done">${I(P.check, 17, 2.6)}Link sent</span></button>
        </form>
        <button type="button" class="lk back">Back</button>
      </div>
    </div>
    <div class="toast" role="status">${I(P.check, 15, 2.6)}<span>Link sent again</span></div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{display:flex;flex-direction:column;height:100%;background:var(--ml-bg)}
.d .bar{display:flex;align-items:center;justify-content:space-between;padding:22px 32px}
.d .stage{position:relative;display:grid;flex:1;min-height:0;place-items:center;padding:0 24px 36px;overflow:hidden auto}
.d .stage::before{content:"";position:absolute;inset:0;background-image:radial-gradient(var(--ml-bar) 1px,transparent 1.3px);background-size:24px 24px;-webkit-mask-image:radial-gradient(55% 60% at 50% 38%,#000 0%,transparent 100%);mask-image:radial-gradient(55% 60% at 50% 38%,#000 0%,transparent 100%)}
.d .col{position:relative;width:100%;max-width:440px;text-align:center}
.d .art{position:relative;display:grid;place-items:center;height:190px;margin-bottom:14px}
.d .art svg{position:relative;overflow:visible}
.d .rg i{position:absolute;left:50%;top:50%;width:250px;height:250px;margin:-125px 0 0 -125px;border-radius:50%;border:1px solid var(--ml-accent-line);animation:mg-ring 4.2s ease-out infinite}
.d .rg i:nth-child(2){animation-delay:-1.4s}.d .rg i:nth-child(3){animation-delay:-2.8s}
.d .ltr{animation:mg-letter 4.4s var(--ml-ease) infinite}
.d .col .lead{max-width:360px;margin-left:auto;margin-right:auto;line-height:1.55}
.d .col .lead b{font-weight:600;color:var(--ml-ink)}
.d .acts{display:grid;grid-template-columns:minmax(0,1.15fr) minmax(0,1fr);gap:10px;margin-top:24px}
.d .acts .go{margin:0}
.d .acts .ghost{height:46px;border-radius:12px;font-variant-numeric:tabular-nums}
.d .acts .ghost:disabled{color:var(--ml-muted);cursor:default;background:var(--ml-surface)}
.d .fine{margin:18px 0 10px;font-size:13px;color:var(--ml-muted)}
.d .pnl .form{text-align:left}
.d .pnl .lk.back{margin-top:16px}
.d .toast{position:absolute;left:50%;top:6px;z-index:3;display:flex;align-items:center;gap:8px;padding:10px 16px 10px 12px;border-radius:999px;background:var(--ml-ink);color:#fff;font-size:13px;font-weight:600;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translate(-50%,-14px);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .25s ease}
.d .toast.on{opacity:1;transform:translate(-50%,0)}
.d .toast svg{padding:2px;border-radius:50%;background:#1DB954}
@keyframes mg-ring{0%{opacity:.7;transform:scale(.55)}100%{opacity:0;transform:scale(1.5)}}
@keyframes mg-letter{0%,100%{transform:translateY(0)}38%,62%{transform:translateY(-30px)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{padding:18px 20px}
  .d .stage{place-items:start center;padding:0 20px 24px}
  .d .acts{grid-template-columns:minmax(0,1fr)}
}
@media (prefers-reduced-motion: reduce){.d .rg i,.d .ltr{animation:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const pSent = $('[data-p="sent"]');
      const pMail = $('[data-p="email"]');
      const rs = $('.rs');
      const rl = $('.rl');
      const to = $('.to');
      const toast = $('.toast');
      const email = $('#ml-mag-email');
      const form = $('.form');
      const go = $('.form .go');
      let left = 7;
      let toastT = 0;
      let busy = false;
      const paint = () => {
        rs.disabled = left > 0;
        rl.textContent = left > 0 ? `Resend in 0:${String(left).padStart(2, '0')}` : 'Resend email';
      };
      const view = (p) => {
        pSent.classList.toggle('on', p === pSent);
        pMail.classList.toggle('on', p === pMail);
      };
      const say = (msg) => {
        toast.lastChild.textContent = msg;
        toast.classList.add('on');
        clearTimeout(toastT);
        toastT = setTimeout(() => toast.classList.remove('on'), 2300);
      };
      rs.addEventListener('click', () => {
        if (rs.disabled) return;
        left = 30;
        paint();
        say(`Link sent again to ${to.textContent}`);
      });
      $('.diff').addEventListener('click', () => {
        view(pMail);
        email.value = '';
        email.focus({ preventScroll: true });
      });
      $('.back').addEventListener('click', () => view(pSent));
      email.addEventListener('input', () => email.closest('.field').classList.remove('bad'));
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
        email.closest('.field').classList.toggle('bad', !ok);
        email.setAttribute('aria-invalid', String(!ok));
        if (!ok) return;
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          setTimeout(() => {
            to.textContent = email.value.trim();
            left = 30;
            paint();
            view(pSent);
            go.classList.remove('ok');
            busy = false;
          }, 700);
        }, 1000);
      });
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        view(pSent);
        to.textContent = 'maya@fernway.co';
        email.value = '';
        email.closest('.field').classList.remove('bad', 'is-auto');
        go.classList.remove('loading', 'ok');
        toast.classList.remove('on');
        busy = false;
        left = 7;
        paint();
      };
      (async () => {
        while (root.isConnected) {
          await wait(1000);
          if (left > 0) {
            left--;
            paint();
          }
        }
      })();
      cur.style.transform = 'translate(700px,560px)';
      (async () => {
        await wait(1200);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            async () => {
              while (left > 0 && idle()) await wait(200);
              return idle();
            },
            () => press(rs, 0.5),
            rest(2000),
            () => press($('.diff'), 0.5),
            rest(500),
            () => aim(email, 0.6),
            () => typeInto(email, 'tomas@fernway.co'),
            () => press(go, 0.55),
            rest(3600),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a "check your email" screen for a passwordless magic-link sign-in, full viewport (min-height: 100dvh).

Layout: white page, slim top bar (logo left, "Need help?" link right), and one centered column (max 440px, text centered) with a faint dot grid behind it (radial-gradient dots every 24px, faded out with a radial mask). At the top of the column sits a drawn envelope in inline SVG: a pale-accent body with an open flap, a white letter inside (accent title bar, two grey text bars, a small pill) and a front pocket in your accent gradient. Behind it, three thin accent-tinted rings expand and fade (transform: scale .55 to 1.5, opacity .7 to 0, 4.2s ease-out, staggered -1.4s), and the letter slides up out of the envelope and back on a 4.4s loop (translateY 0 to -30px, the pocket stays in front).

Content: heading "Check your inbox", one paragraph naming the address in bold plus "It expires in 10 minutes", then two buttons side by side: a primary "Open mail app" and a secondary "Resend in 0:07" that is disabled while a real countdown ticks (tabular numbers, one tick per second). At zero it becomes "Resend email"; pressing it restarts the countdown, and a dark pill toast ("Link sent again to <address>") slides down from the top with a critically damped spring and leaves after 2.3s. Below: a spam hint and a "Use a different email" link that switches to a second panel (heading, email field with validation, "Send magic link" button with a sheen busy state, then back to the sent panel with the new address).

Accessibility: the status area is aria-live, the toast has role="status", the disabled button really is disabled, the email field has a label, aria-invalid and a role="alert" error, focus rings are visible, prefers-reduced-motion stops the rings and the letter. Below 760px stack the two buttons. Plain HTML, CSS and JS, no libraries; React-friendly structure (EnvelopeArt, ResendButton, SentPanel, EmailPanel). Use your accent color for the pocket, the rings and the primary button.`,
  });

  ML.add({
    id: 'app-auth-code',
    cat: 'app-auth',
    title: 'Six-digit code screen',
    sub: 'Paste spreads the digits, timer ticks',
    html: `
<div class="wrap">
  <section class="panel">
    <div class="left">
      <div class="top"><span class="brand"><span class="mark">J</span>Juniper Health</span></div>
      <form class="form" novalidate>
        <h1>Enter your code</h1>
        <p class="lead">We texted a 6-digit code to <b>+1 (415) &bull;&bull;&bull; 2204</b>.</p>
        <div class="boxes" role="group" aria-label="Verification code">
          <input class="bx" id="ml-cod-1" inputmode="numeric" maxlength="1" autocomplete="one-time-code" aria-label="Digit 1">
          <input class="bx" id="ml-cod-2" inputmode="numeric" maxlength="1" aria-label="Digit 2">
          <input class="bx" id="ml-cod-3" inputmode="numeric" maxlength="1" aria-label="Digit 3">
          <input class="bx" id="ml-cod-4" inputmode="numeric" maxlength="1" aria-label="Digit 4">
          <input class="bx" id="ml-cod-5" inputmode="numeric" maxlength="1" aria-label="Digit 5">
          <input class="bx" id="ml-cod-6" inputmode="numeric" maxlength="1" aria-label="Digit 6">
          <button type="button" class="pc">Paste 482915</button>
        </div>
        <p class="err" id="ml-cod-err" role="alert"><span class="em">That code did not match.</span></p>
        <div class="dev">${I(P.laptop, 20)}<p><b>Chrome on Windows</b><small>Manila, Philippines &middot; just now</small></p><span class="tag">This device</span></div>
        <button type="submit" class="go"><span class="lbl">Verify and sign in</span><span class="busy">Verifying</span><span class="done">${I(P.check, 17, 2.6)}Verified</span></button>
        <p class="rsd"><span class="rt">Resend code in 0:24</span><button type="button" class="lk rsb" hidden>Resend code</button></p>
      </form>
    </div>
    <aside class="right" aria-hidden="true">
      <div class="phone"><div class="screen">
        <p class="sb"><span>9:41</span><span class="sig"><i></i><i></i><i></i></span></p>
        <p class="clk">9:41</p><p class="dt">Wednesday, October 14</p>
        <div class="sms"><span class="si">${I(P.mail, 15)}</span><div><p class="sh"><b>Juniper Health</b><small>now</small></p><p class="sm">Your verification code is <strong>482 915</strong>. It expires in 10 minutes.</p></div></div>
        <div class="sms s2"><span class="si">${I(P.clock, 15)}</span><div><p class="sh"><b>Reminder</b><small>2h ago</small></p><p class="sm">Visit with Dr. Okafor tomorrow, 9:30 AM.</p></div></div>
      </div></div>
    </aside>
  </section>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{display:grid;height:100%;place-items:center;padding:28px;background:linear-gradient(180deg,var(--ml-surface),#EAF1FB)}
.d .panel{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);width:100%;max-width:960px;height:min(100%,580px);border-radius:28px;overflow:hidden;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg)}
.d .left{display:flex;flex-direction:column;min-width:0;padding:30px 42px 30px;overflow-y:auto}
.d .form{display:flex;flex-direction:column;margin:auto 0;padding:18px 0}
.d .boxes{position:relative;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;margin-top:26px}
.d .bx{width:100%;height:62px;min-width:0;border:0;border-radius:14px;outline:0;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:center;font-size:26px;font-weight:650;font-variant-numeric:tabular-nums;color:var(--ml-ink);caret-color:var(--ml-accent);transition:box-shadow .25s ease,background-color .25s ease,transform 90ms ease-out}
.d .bx:focus{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .bx.fill{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-accent-line)}
.d .bx.press{transform:scale(.95)}
.d .bx.pop{animation:cod-pop 420ms var(--ml-bounce) both;animation-delay:calc(var(--i) * 55ms)}
.d .bx.bad{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1);animation:au-shake 380ms var(--ml-ease)}
.d .bx.okb{background:rgba(29,185,84,.08);box-shadow:inset 0 0 0 1.5px #1DB954;color:#12893C}
.d .pc{position:absolute;left:0;top:-44px;padding:8px 14px;border:0;border-radius:10px;background:var(--ml-ink);color:#fff;font-size:13px;font-weight:600;box-shadow:var(--ml-shadow);opacity:0;pointer-events:none;transform:translateY(6px) scale(.96);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .2s ease}
.d .boxes.menu .pc{opacity:1;pointer-events:auto;transform:none}
.d .pc.press{transform:scale(.96)}
.d .err.on{grid-template-rows:1fr;opacity:1}
.d .dev{display:flex;align-items:center;gap:12px;margin-top:20px;padding:12px 14px;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .dev p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .dev b{font-size:13.5px;font-weight:600;color:var(--ml-ink)}
.d .dev small{font-size:12.5px;color:var(--ml-muted)}
.d .tag{padding:4px 9px;border-radius:999px;background:var(--ml-accent-soft);font-size:11.5px;font-weight:600;color:var(--ml-accent-ink);white-space:nowrap}
.d .rsd{display:flex;align-items:center;justify-content:center;min-height:20px;margin-top:16px;font-size:13.5px;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .right{position:relative;display:grid;place-items:end center;overflow:hidden;background:radial-gradient(90% 60% at 50% 0%,rgba(79,163,255,.28),rgba(79,163,255,0) 70%),linear-gradient(165deg,#FFEBE8 0%,#EEF4FF 100%)}
.d .right::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,68,51,.16) 1px,transparent 1.3px);background-size:22px 22px;-webkit-mask-image:linear-gradient(180deg,#000,transparent 70%);mask-image:linear-gradient(180deg,#000,transparent 70%)}
.d .phone{position:relative;width:min(72%,256px);height:470px;margin-bottom:-90px;border-radius:40px;background:#fff;box-shadow:0 0 0 7px #fff,0 0 0 8px var(--ml-accent-line),var(--ml-shadow-lg);animation:cod-float 6s ease-in-out infinite}
.d .screen{position:absolute;inset:0;padding:16px 14px;border-radius:40px;overflow:hidden;background:linear-gradient(180deg,#7DB6FF 0%,#C9E0FF 55%,#EAF2FF 100%);color:#fff}
.d .sb{display:flex;align-items:center;justify-content:space-between;padding:0 12px;font-size:12px;font-weight:650}
.d .sig{display:flex;align-items:flex-end;gap:2px}
.d .sig i{display:block;width:3px;border-radius:1px;background:#fff}
.d .sig i:nth-child(1){height:4px}.d .sig i:nth-child(2){height:7px}.d .sig i:nth-child(3){height:10px}
.d .clk{margin-top:34px;text-align:center;font-size:58px;line-height:1;font-weight:650;letter-spacing:-.04em}
.d .dt{margin:6px 0 24px;text-align:center;font-size:13px;font-weight:600;color:rgba(255,255,255,.9)}
.d .sms{display:flex;gap:10px;margin-top:10px;padding:11px 12px;border-radius:18px;background:rgba(255,255,255,.88);box-shadow:0 8px 20px rgba(10,60,140,.14);color:var(--ml-ink)}
.d .sms:first-of-type{animation:cod-buzz 6s ease-in-out infinite}
.d .si{display:grid;flex:none;place-items:center;width:28px;height:28px;border-radius:8px;background:var(--ml-grad);color:#fff}
.d .sh{display:flex;justify-content:space-between;gap:8px;font-size:12px}
.d .sh small{font-size:11px;color:var(--ml-muted)}
.d .sm{margin-top:2px;font-size:12px;line-height:1.35;color:var(--ml-ink-2)}
.d .sm strong{white-space:nowrap;font-weight:700;color:var(--ml-ink);letter-spacing:.02em}
.d .s2{opacity:.78;transform:scale(.96)}
@keyframes cod-pop{0%{transform:scale(.7);opacity:.3}60%{transform:scale(1.07);opacity:1}100%{transform:none}}
@keyframes cod-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
@keyframes cod-buzz{0%,86%,100%{transform:none}89%{transform:translateX(-3px)}92%{transform:translateX(3px)}95%{transform:translateX(-2px)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .wrap{padding:0}
  .d .panel{grid-template-columns:minmax(0,1fr);height:100%;border-radius:0;box-shadow:none}
  .d .right{display:none}
  .d .left{padding:22px 20px}
  .d .form{margin:0;padding:34px 0 0}
  .d .boxes{gap:7px}
  .d .bx{height:54px;font-size:22px}
}
@media (prefers-reduced-motion: reduce){.d .phone,.d .sms:first-of-type{animation:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const form = $('.form');
      const boxes = [...root.querySelectorAll('.bx')];
      const row = $('.boxes');
      const go = $('.go');
      const err = $('.err');
      const rt = $('.rt');
      const rsb = $('.rsb');
      const CODE = '482915';
      let left = 24;
      let busy = false;
      const code = () => boxes.map((b) => b.value).join('');
      const paint = () => {
        rt.textContent = left > 0 ? `Resend code in 0:${String(left).padStart(2, '0')}` : 'Did not get it?';
        rsb.hidden = left > 0;
        rt.style.marginRight = left > 0 ? '0' : '6px';
      };
      const fill = (text, start = 0) => {
        const d = String(text).replace(/\D/g, '').slice(0, 6 - start);
        d.split('').forEach((ch, k) => {
          const b = boxes[start + k];
          b.value = ch;
          b.classList.remove('bad');
          b.classList.add('fill', 'pop');
          b.style.setProperty('--i', k);
        });
        err.classList.remove('on');
        setTimeout(() => boxes.forEach((b) => b.classList.remove('pop')), 900);
        const next = boxes[Math.min(start + d.length, 5)];
        if (d.length && root.getRootNode().activeElement && root.contains(root.getRootNode().activeElement)) next.focus();
        if (code().length === 6) setTimeout(() => form.requestSubmit(), 500);
      };
      boxes.forEach((b, i) => {
        b.addEventListener('input', () => {
          const d = b.value.replace(/\D/g, '');
          if (d.length > 1) {
            b.value = '';
            fill(d, i);
            return;
          }
          b.value = d;
          b.classList.toggle('fill', !!d);
          b.classList.remove('bad');
          err.classList.remove('on');
          if (d && i < 5) boxes[i + 1].focus();
          if (code().length === 6) form.requestSubmit();
        });
        b.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && !b.value && i > 0) {
            e.preventDefault();
            boxes[i - 1].value = '';
            boxes[i - 1].classList.remove('fill');
            boxes[i - 1].focus();
          } else if (e.key === 'ArrowLeft' && i > 0) boxes[i - 1].focus();
          else if (e.key === 'ArrowRight' && i < 5) boxes[i + 1].focus();
        });
        b.addEventListener('paste', (e) => {
          e.preventDefault();
          fill((e.clipboardData || window.clipboardData).getData('text'), 0);
        });
        b.addEventListener('focus', () => b.select());
      });
      $('.pc').addEventListener('click', () => {
        row.classList.remove('menu');
        fill(CODE, 0);
      });
      rsb.addEventListener('click', () => {
        left = 30;
        paint();
      });
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        boxes.forEach((b) => {
          b.value = '';
          b.classList.remove('fill', 'pop', 'bad', 'okb');
        });
        row.classList.remove('menu');
        err.classList.remove('on');
        go.classList.remove('loading', 'ok');
        busy = false;
        left = 24;
        paint();
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        const c = code();
        if (c.length < 6) {
          $('.em').textContent = 'Enter all 6 digits.';
          err.classList.add('on');
          return;
        }
        if (c !== CODE) {
          $('.em').textContent = 'That code did not match. 2 attempts left.';
          err.classList.add('on');
          boxes.forEach((b) => b.classList.add('bad'));
          setTimeout(() => {
            boxes.forEach((b) => {
              b.value = '';
              b.classList.remove('bad', 'fill');
            });
            boxes[0].focus();
          }, 800);
          return;
        }
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          boxes.forEach((b) => b.classList.add('okb'));
          setTimeout(reset, 2200);
        }, 800);
      });
      (async () => {
        while (root.isConnected) {
          await wait(1000);
          if (left > 0) {
            left--;
            paint();
          }
        }
      })();
      cur.style.transform = 'translate(560px,560px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => press(boxes[0], 0.5, () => row.classList.add('menu')),
            rest(500),
            () => press($('.pc'), 0.5, () => {
              row.classList.remove('menu');
              fill(CODE, 0);
            }),
            rest(5600),
          ]);
          await wait(600);
        }
      })();
    },
    prompt: `Build a two-factor "enter your code" screen for sign-in, full viewport (min-height: 100dvh), on a soft surface background.

Layout: one centered white panel (max 960px wide, 580px tall, 28px radius, hairline ring, large soft shadow) split into two columns (1.05fr / .95fr). Left: logo, heading "Enter your code", one line saying a 6-digit code was texted to a masked number, then six code boxes in a row (grid of 6, 10px gap, each 62px tall, 14px radius, 26px semibold tabular digits), an inline error line, a "device line" card (laptop icon, "Chrome on Windows", "Manila, Philippines, just now", a small "This device" pill), a full-width primary "Verify and sign in" button and a resend line ("Resend code in 0:24" that counts down once per second, then becomes a "Resend code" link). Right: a pale-accent panel with a faint dot grid and a phone lock screen cropped by the bottom edge (sky gradient, big clock, a frosted "Juniper Health" SMS notification showing the code and an older reminder behind it). The phone floats 8px up and down on a 6s loop and the SMS card gives a short horizontal buzz every 6s.

Behavior: one input per digit (inputmode="numeric", maxlength 1, the first has autocomplete="one-time-code"). Typing moves focus forward, Backspace on an empty box moves back, arrows move between boxes, and PASTING a code in any box spreads all digits across the boxes with a staggered pop (scale .7 to 1.07 to 1, 55ms apart, 420ms each). When the sixth digit lands, verify automatically. A wrong code gives red rings, a 380ms shake, the message "That code did not match. 2 attempts left." (role="alert") and clears the boxes; the right code turns the boxes green, shows a sheen across the button and then "Verified" with a check.

Accessibility: group label plus "Digit n" labels, visible focus rings, prefers-reduced-motion stops the float and buzz. Below 760px drop the phone panel and make the panel full-bleed with 54px boxes. Plain HTML, CSS and JS, no libraries; React-friendly structure (CodeInput, DeviceLine, ResendTimer, PhonePreview). Use your accent color for focus, the pill and the button.`,
  });

  ML.add({
    id: 'app-auth-steps',
    cat: 'app-auth',
    title: 'Signup in steps',
    sub: 'Rail fills as panels slide step to step',
    html: `
<div class="wrap">
  <aside class="rail">
    <div class="brand"><span class="mark">A</span>Atlas Freight</div>
    <p class="rl">Set up your workspace</p>
    <ol class="steps" aria-label="Progress">
      <li class="st on" data-s="0"><span class="num"><b>1</b>${I(P.check, 15, 3)}</span><div><b>Your account</b><small>Name, email and password</small></div></li>
      <li class="st" data-s="1"><span class="num"><b>2</b>${I(P.check, 15, 3)}</span><div><b>Your workspace</b><small>Company, size and web address</small></div></li>
      <li class="st" data-s="2"><span class="num"><b>3</b>${I(P.check, 15, 3)}</span><div><b>Invite your team</b><small>Optional, add them any time</small></div></li>
    </ol>
    <div class="note">${I(P.shield, 19)}<p><b>14-day free trial</b><small>No credit card required</small></p></div>
  </aside>
  <main class="main">
    <div class="mbar" aria-hidden="true"><span class="brand"><span class="mark">A</span>Atlas Freight</span><span class="sg3"><i class="on"></i><i></i><i></i></span></div>
    <form class="form" data-step="0" novalidate>
      <div class="view"><div class="track">
        <section class="stp" data-s="0" aria-label="Step 1 of 3">
          <p class="eyebrow">Step 1 of 3</p>
          <h1>Create your account</h1>
          <p class="lead">Start your 14-day trial of Atlas Freight.</p>
          <label class="fl" for="ml-stp-name">Full name</label>
          <div class="field">${I(P.user, 17)}<input id="ml-stp-name" autocomplete="name" placeholder="Your name" aria-describedby="ml-stp-name-err"></div>
          <p class="err" id="ml-stp-name-err" role="alert"><span>Enter your full name.</span></p>
          <label class="fl" for="ml-stp-email">Work email</label>
          <div class="field">${I(P.mail, 17)}<input id="ml-stp-email" type="email" autocomplete="email" placeholder="you@company.com" aria-describedby="ml-stp-email-err"></div>
          <p class="err" id="ml-stp-email-err" role="alert"><span>Enter a valid work email.</span></p>
          <label class="fl" for="ml-stp-pass">Password</label>
          <div class="field">${I(P.lock, 17)}<input id="ml-stp-pass" type="password" autocomplete="new-password" placeholder="At least 8 characters" aria-describedby="ml-stp-pass-err"><button type="button" class="eye" aria-label="Show password" aria-pressed="false">${I(P.eye, 17)}${I(P.eyeOff, 17)}</button></div>
          <p class="err" id="ml-stp-pass-err" role="alert"><span>Use at least 8 characters.</span></p>
        </section>
        <section class="stp" data-s="1" aria-label="Step 2 of 3">
          <p class="eyebrow">Step 2 of 3</p>
          <h1>Set up your workspace</h1>
          <p class="lead">This is where your dispatchers and drivers will meet.</p>
          <label class="fl" for="ml-stp-co">Company name</label>
          <div class="field">${I(P.building, 17)}<input id="ml-stp-co" autocomplete="organization" placeholder="Your company" aria-describedby="ml-stp-co-err"></div>
          <p class="err" id="ml-stp-co-err" role="alert"><span>Enter your company name.</span></p>
          <p class="fl">Team size</p>
          <div class="seg4" style="--i:1" role="group" aria-label="Team size"><span class="thumb" aria-hidden="true"></span><button type="button" class="sz" data-i="0" aria-pressed="false">1-10</button><button type="button" class="sz on" data-i="1" aria-pressed="true">11-50</button><button type="button" class="sz" data-i="2" aria-pressed="false">51-200</button><button type="button" class="sz" data-i="3" aria-pressed="false">200+</button></div>
          <p class="fl">Workspace address</p>
          <div class="slug"><b class="sl">your-company</b><span>.atlasfreight.app</span></div>
        </section>
        <section class="stp" data-s="2" aria-label="Step 3 of 3">
          <p class="eyebrow">Step 3 of 3</p>
          <h1>Invite your team</h1>
          <p class="lead">Dispatch runs better with everyone in the room.</p>
          <label class="fl" for="ml-stp-inv">Teammate email</label>
          <div class="field">${I(P.users, 17)}<input id="ml-stp-inv" type="email" autocomplete="off" placeholder="name@company.com" aria-describedby="ml-stp-inv-err"><button type="button" class="ghost addb">${I(P.plus, 15)}Add</button></div>
          <p class="err" id="ml-stp-inv-err" role="alert"><span>Enter a valid email to invite.</span></p>
          <div class="chips" aria-live="polite"></div>
          <p class="hint2">They get an email invite. You can skip this and add people later.</p>
        </section>
        <section class="stp fin" data-s="3" aria-label="Done">
          ${TICK(30)}
          <h1 class="dt">Your workspace is ready</h1>
          <p class="lead dl2">Invitations are on their way.</p>
          <button type="button" class="go opn"><span class="lbl">Open workspace</span></button>
        </section>
      </div></div>
      <div class="foot"><button type="button" class="ghost back">Back</button><button type="submit" class="go fgo"><span class="lbl">Continue</span><span class="busy">Creating workspace</span><span class="done">${I(P.check, 17, 2.6)}Workspace created</span></button></div>
    </form>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{display:grid;grid-template-columns:300px minmax(0,1fr);height:100%;background:var(--ml-bg)}
.d .rail{display:flex;flex-direction:column;min-height:0;padding:28px 26px;background:var(--ml-surface);border-right:1px solid var(--ml-line)}
.d .rl{margin:38px 0 18px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .steps{display:flex;flex-direction:column;list-style:none}
.d .st{position:relative;display:flex;gap:14px;padding-bottom:30px;color:var(--ml-muted);transition:color .3s ease}
.d .st:last-child{padding-bottom:0}
.d .st::before,.d .st::after{content:"";position:absolute;left:14px;top:38px;bottom:8px;width:2px;border-radius:2px;background:var(--ml-bar)}
.d .st::after{background:var(--ml-accent);transform:scaleY(0);transform-origin:50% 0;transition:transform .7s var(--ml-ease)}
.d .st:last-child::before,.d .st:last-child::after{display:none}
.d .st.dn::after{transform:scaleY(1)}
.d .num{position:relative;display:grid;flex:none;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);font-size:13px;font-weight:650;color:var(--ml-muted);transition:background-color .3s ease,box-shadow .3s ease,color .3s ease}
.d .num svg{display:none}
.d .st div{display:flex;flex-direction:column;padding-top:2px}
.d .st b{font-size:14px;font-weight:600}
.d .st small{margin-top:2px;font-size:12.5px;color:var(--ml-muted)}
.d .st.on{color:var(--ml-ink)}
.d .st.on .num{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .st.dn{color:var(--ml-ink)}
.d .st.dn .num{background:var(--ml-accent);box-shadow:none;color:#fff}
.d .st.dn .num b{display:none}
.d .st.dn .num svg{display:block;animation:au-pop 420ms var(--ml-bounce) both}
.d .note{display:flex;align-items:center;gap:12px;margin-top:auto;padding:14px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);color:var(--ml-accent)}
.d .note p{display:flex;flex-direction:column;color:var(--ml-ink)}
.d .note b{font-size:13.5px;font-weight:600}
.d .note small{font-size:12.5px;color:var(--ml-muted)}
.d .main{display:flex;flex-direction:column;min-width:0;min-height:0;padding:30px 48px;overflow-y:auto}
.d .mbar{display:none}
.d .form{width:100%;max-width:440px;margin:auto}
.d .view{margin:-6px;padding:6px;overflow:hidden}
.d .track{display:flex;width:400%;transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .stp{flex:none;width:25%;min-width:0}
.d .stp{transition:opacity .45s ease .1s}
.d .stp[inert]{opacity:0;transition:opacity .25s ease}
.d .eyebrow{margin-bottom:10px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .seg4{position:relative;display:grid;grid-template-columns:repeat(4,1fr);margin-top:7px;padding:4px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .seg4 .thumb{position:absolute;top:4px;bottom:4px;left:4px;width:calc(25% - 2px);border-radius:9px;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.12),inset 0 0 0 1px rgba(227,233,242,.8);transform:translateX(calc(var(--i) * 100%));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .sz{position:relative;z-index:1;height:36px;border:0;background:none;font-size:13.5px;font-weight:600;color:var(--ml-muted);cursor:pointer;transition:color .25s ease,transform 90ms ease-out}
.d .sz.on{color:var(--ml-ink)}
.d .sz.press{transform:scale(.96)}
.d .slug{display:flex;align-items:center;height:46px;margin-top:7px;padding:0 14px;border-radius:12px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 13.5px var(--ml-mono);color:var(--ml-muted);white-space:nowrap;overflow:hidden}
.d .slug b{min-width:0;overflow:hidden;font-weight:600;color:var(--ml-accent-ink);text-overflow:ellipsis}
.d .addb{height:34px;padding:0 11px;margin-right:2px;font-size:13px;color:var(--ml-accent-ink)}
.d .chips{display:flex;flex-wrap:wrap;gap:8px;min-height:36px;margin-top:14px}
.d .chip{display:inline-flex;align-items:center;gap:8px;height:34px;padding:0 6px 0 5px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:13px;font-weight:500;color:var(--ml-ink-2);animation:au-pop 420ms var(--ml-bounce) both}
.d .chip i{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:var(--ml-accent-soft);font-size:10px;font-weight:700;font-style:normal;color:var(--ml-accent-ink)}
.d .chip button{display:grid;place-items:center;width:22px;height:22px;border:0;border-radius:50%;background:none;color:var(--ml-muted);cursor:pointer}
.d .chip button:hover{background:var(--ml-bar-2)}
.d .hint2{margin-top:6px;font-size:13px;color:var(--ml-muted)}
.d .fin{text-align:center;padding-top:26px}
.d .fin .okc{margin:0 auto 18px}
.d .fin .go{width:auto;min-width:190px;padding:0 24px;margin:22px auto 0}
.d .foot{display:flex;gap:10px;margin-top:26px}
.d .foot .go{flex:1;margin:0}
.d .foot .back{height:46px;border-radius:12px}
.d .form[data-step="0"] .back{display:none}
.d .form[data-step="3"] .foot{display:none}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .wrap{grid-template-columns:minmax(0,1fr)}
  .d .rail{display:none}
  .d .main{padding:22px 20px}
  .d .mbar{display:flex;align-items:center;justify-content:space-between;margin-bottom:26px}
  .d .sg3{display:flex;gap:5px}
  .d .sg3 i{width:30px;height:5px;border-radius:99px;background:var(--ml-bar);transition:background-color .3s ease}
  .d .sg3 i.on{background:var(--ml-accent)}
  .d .form{margin:0}
}
@media (prefers-reduced-motion: reduce){.d .track{transition:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const form = $('.form');
      const track = $('.track');
      const panels = [...root.querySelectorAll('.stp')];
      const rail = [...root.querySelectorAll('.st')];
      const segs = [...root.querySelectorAll('.sg3 i')];
      const go = $('.fgo');
      const name = $('#ml-stp-name');
      const email = $('#ml-stp-email');
      const pass = $('#ml-stp-pass');
      const co = $('#ml-stp-co');
      const inv = $('#ml-stp-inv');
      const chips = $('.chips');
      const seg4 = $('.seg4');
      const sizes = [...root.querySelectorAll('.sz')];
      const labels = ['Continue', 'Continue', 'Create workspace'];
      let step = 0;
      let busy = false;
      let invited = [];
      const mark = (input, ok) => {
        input.closest('.field').classList.toggle('bad', !ok);
        input.setAttribute('aria-invalid', String(!ok));
        return ok;
      };
      const mailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
      const setStep = (n) => {
        step = n;
        form.dataset.step = String(n);
        track.style.transform = `translateX(${-25 * n}%)`;
        panels.forEach((p, k) => {
          p.inert = k !== n;
        });
        rail.forEach((li, k) => {
          li.classList.toggle('dn', k < n);
          li.classList.toggle('on', k === n);
          if (k === n) li.setAttribute('aria-current', 'step');
          else li.removeAttribute('aria-current');
        });
        segs.forEach((s, k) => s.classList.toggle('on', k <= Math.min(n, 2)));
        go.querySelector('.lbl').textContent = labels[Math.min(n, 2)];
      };
      const slugOf = (v) => v.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      co.addEventListener('input', () => {
        $('.sl').textContent = slugOf(co.value) || 'your-company';
      });
      [name, email, pass, co, inv].forEach((el) => el.addEventListener('input', () => el.closest('.field').classList.remove('bad')));
      $('.eye').addEventListener('click', () => {
        const eye = $('.eye');
        const on = pass.type === 'password';
        pass.type = on ? 'text' : 'password';
        eye.classList.toggle('on', on);
        eye.setAttribute('aria-pressed', String(on));
        eye.setAttribute('aria-label', on ? 'Hide password' : 'Show password');
      });
      const setSize = (i) => {
        seg4.style.setProperty('--i', i);
        sizes.forEach((b, k) => {
          b.classList.toggle('on', k === i);
          b.setAttribute('aria-pressed', String(k === i));
        });
      };
      sizes.forEach((b) => b.addEventListener('click', () => setSize(Number(b.dataset.i))));
      const drawChips = () => {
        chips.innerHTML = invited
          .map((m, k) => `<span class="chip"><i>${m.slice(0, 2).toUpperCase()}</i>${m}<button type="button" data-k="${k}" aria-label="Remove ${m}">&times;</button></span>`)
          .join('');
      };
      chips.addEventListener('click', (e) => {
        const b = e.target.closest('button');
        if (!b) return;
        invited.splice(Number(b.dataset.k), 1);
        drawChips();
      });
      const addInvite = () => {
        const v = inv.value.trim();
        if (!v) return true;
        if (!mark(inv, mailOk(v))) return false;
        if (!invited.includes(v)) invited.push(v);
        inv.value = '';
        drawChips();
        return true;
      };
      $('.addb').addEventListener('click', addInvite);
      inv.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          e.stopPropagation();
          addInvite();
        }
      });
      $('.back').addEventListener('click', () => setStep(Math.max(0, step - 1)));
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        [name, email, pass, co, inv].forEach((i) => {
          i.value = '';
          i.closest('.field').classList.remove('bad', 'is-auto');
        });
        invited = [];
        drawChips();
        setSize(1);
        $('.sl').textContent = 'your-company';
        go.classList.remove('loading', 'ok');
        busy = false;
        setStep(0);
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy || step > 2) return;
        if (step === 0) {
          if ([mark(name, name.value.trim().length > 1), mark(email, mailOk(email.value)), mark(pass, pass.value.length >= 8)].every(Boolean)) setStep(1);
        } else if (step === 1) {
          if (mark(co, co.value.trim().length > 1)) setStep(2);
        } else {
          if (!addInvite()) return;
          busy = true;
          go.classList.add('loading');
          setTimeout(() => {
            go.classList.replace('loading', 'ok');
            setTimeout(() => {
              $('.dt').textContent = `${co.value.trim()} is ready`;
              $('.dl2').textContent = invited.length ? `Invitations are on their way to ${invited.length} teammate${invited.length > 1 ? 's' : ''}.` : 'You can invite teammates any time from Settings.';
              go.classList.remove('ok');
              busy = false;
              setStep(3);
              setTimeout(reset, 3200);
            }, 600);
          }, 1100);
        }
      });
      setStep(0);
      cur.style.transform = 'translate(760px,600px)';
      (async () => {
        await wait(1400);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => aim(name, 0.6),
            () => typeInto(name, 'Elena Petrova'),
            () => aim(email, 0.6),
            () => typeInto(email, 'elena@kestrel.co'),
            () => aim(pass, 0.6),
            () => typeInto(pass, 'tundra-lake-47'),
            () => press(go, 0.55),
            rest(900),
            () => aim(co, 0.6),
            () => typeInto(co, 'Kestrel & Co'),
            () => press(sizes[2], 0.5),
            rest(500),
            () => press(go, 0.55),
            rest(900),
            () => aim(inv, 0.6),
            () => typeInto(inv, 'luis@kestrel.co'),
            () => press($('.addb'), 0.5),
            rest(400),
            () => aim(inv, 0.6),
            () => typeInto(inv, 'priya@kestrel.co'),
            () => press($('.addb'), 0.5),
            rest(600),
            () => press(go, 0.55),
            rest(5600),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a three-step signup wizard with a progress rail, full viewport (height: 100dvh).

Layout: CSS grid with columns 300px and minmax(0, 1fr). Left rail on your surface tint with a right hairline: logo, a small uppercase label "Set up your workspace", a vertical step list (numbered 30px circles, a title and a one-line description each: Your account, Your workspace, Invite your team), and a trial note card pinned to the bottom. Between circles runs a 2px line; a second accent line on top of it fills with transform: scaleY(0 to 1), origin top, 700ms, when the step before it is done. The current step circle gets a 1.5px accent ring plus a 4px soft ring; done steps turn solid accent and swap the number for a check that pops in (scale .6 to 1.06 to 1).

Main column (white, content max 440px, vertically centered): one form containing a horizontally sliding track of four panels, each 25% of a track that is 400% wide, moved with transform: translateX(-25% * step) and a critically damped spring (587ms linear() curve); inactive panels are inert. Panel 1: full name, work email, password with show/hide. Panel 2: company name, a segmented control for team size (1-10, 11-50, 51-200, 200+) with ONE glider thumb moved by translateX(var(--i) * 100%), and a live workspace address preview that slugifies the company name as you type. Panel 3: teammate email with an inline Add button (Enter also adds); added emails appear as removable chips with initials that pop in. Panel 4: a drawn check, "<Company> is ready", the number of invitations sent and an Open workspace button. Below the track: Back (hidden on step 1) and a primary button that reads Continue, Continue, then Create workspace (sheen busy state, green check).

Validation per step (name 2+ characters, email pattern, password 8+, company 2+, invite email pattern) with red ring, 380ms shake and role="alert" messages. Accessibility: labels, aria-current="step" on the active rail item, aria-pressed on the size options, visible focus rings, prefers-reduced-motion removes the slide. Below 760px replace the rail with a top bar: logo plus three small progress segments. Plain HTML, CSS and JS, no libraries; React-friendly structure (StepRail, WizardTrack, AccountStep, WorkspaceStep, InviteStep, DoneStep). Use your accent color for the rail fill and the primary button.`,
  });

  ML.add({
    id: 'app-auth-2fa',
    cat: 'app-auth',
    title: 'Authenticator 2FA setup',
    sub: 'QR scan sweeps, codes reveal one by one',
    html: `
<div class="wrap">
  <header class="bar"><span class="brand"><span class="mark">L</span>Lumen Labs</span><p class="crumb">Account<span>/</span>Security<span>/</span><b>Two-step verification</b></p></header>
  <main class="page">
    <div class="lf">
      <section class="pnl on" data-ph="0">
        <p class="eyebrow">Two-step verification</p>
        <h1>Scan with your authenticator app</h1>
        <ol class="how">
          <li><span>1</span>Open any authenticator app on your phone.</li>
          <li><span>2</span>Scan the code, or type the setup key by hand.</li>
          <li><span>3</span>Enter the 6-digit code it shows to finish.</li>
        </ol>
        <div class="key"><p><small>Setup key</small><code>JBSW Y3DP EHPK 3PXP</code></p><button type="button" class="ghost cpk">${I(P.copy, 15)}<span>Copy</span></button></div>
      </section>
      <section class="pnl" data-ph="1">
        <p class="eyebrow">Step 2 of 2</p>
        <h1>Save your backup codes</h1>
        <p class="lead">If you lose your phone, each of these codes signs you in once. Keep them somewhere safe.</p>
        <ul class="tips"><li>${I(P.check, 15, 2.6)}Store them in a password manager</li><li>${I(P.check, 15, 2.6)}Each code works one time only</li><li>${I(P.check, 15, 2.6)}You can generate new ones any time</li></ul>
      </section>
      <section class="pnl" data-ph="2">
        <p class="eyebrow">All set</p>
        <h1>Your account is protected</h1>
        <p class="lead">From now on, signing in to Lumen Labs asks for a code from your authenticator app.</p>
      </section>
    </div>
    <div class="rt">
      <section class="pnl card on" data-ph="0">
        <div class="qr" aria-hidden="true"><svg viewBox="0 0 29 29" shape-rendering="crispEdges"><path class="qm" d=""/></svg><span class="qlogo">${I(P.mark, 18, 2.4)}</span><i class="scan"></i></div>
        <p class="qcap">Scan to add <b>maya@lumenlabs.io</b></p>
        <form class="vf" novalidate>
          <label class="fl" for="ml-2fa-code">6-digit code</label>
          <div class="field">${I(P.shield, 17)}<input id="ml-2fa-code" inputmode="numeric" maxlength="6" autocomplete="one-time-code" placeholder="000000" aria-describedby="ml-2fa-err"></div>
          <p class="err" id="ml-2fa-err" role="alert"><span>That code is not valid. Check your app and try again.</span></p>
          <button type="submit" class="go"><span class="lbl">Verify and continue</span><span class="busy">Verifying</span><span class="done">${I(P.check, 17, 2.6)}Verified</span></button>
          <p class="demo">This demo accepts 731094.</p>
        </form>
      </section>
      <section class="pnl card" data-ph="1">
        <div class="bh"><p><b>Backup codes</b><small>8 one-time codes</small></p><span class="tag">Lumen Labs</span></div>
        <div class="cw"><div class="codes"></div><button type="button" class="ghost rev">${I(P.eye, 16)}Reveal codes</button></div>
        <div class="ba"><button type="button" class="ghost cpa">${I(P.copy, 15)}<span>Copy all</span></button><button type="button" class="ghost">${I(P.down, 15)}Download</button></div>
        <button type="button" class="go sv" disabled><span class="lbl">I saved my codes</span><span class="busy">Turning on</span><span class="done">${I(P.check, 17, 2.6)}Turned on</span></button>
      </section>
      <section class="pnl card dn2" data-ph="2">
        ${TICK(30)}
        <h2>Two-step verification is on</h2>
        <div class="dv"><span class="ic">${I(P.phone, 18)}</span><p><b>Authenticator app</b><small>Added just now</small></p><span class="live"></span></div>
      </section>
    </div>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{display:flex;flex-direction:column;height:100%;background:var(--ml-surface)}
.d .bar{display:flex;flex:none;align-items:center;justify-content:space-between;height:64px;padding:0 32px;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .crumb{font-size:13.5px;color:var(--ml-muted)}
.d .crumb span{margin:0 7px;color:var(--ml-bar)}
.d .crumb b{font-weight:600;color:var(--ml-ink)}
.d .page{display:grid;flex:1;grid-template-columns:minmax(0,5fr) minmax(0,6fr);gap:56px;align-items:center;width:100%;max-width:1040px;min-height:0;margin:0 auto;padding:28px 40px;overflow-y:auto}
.d .eyebrow{margin-bottom:12px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .lf h1{font-size:32px}
.d .lf .lead{line-height:1.55}
.d .how{display:flex;flex-direction:column;gap:14px;margin-top:24px;list-style:none}
.d .how li{display:flex;align-items:center;gap:12px;font-size:14px;color:var(--ml-ink-2)}
.d .how span{display:grid;flex:none;place-items:center;width:26px;height:26px;border-radius:50%;background:var(--ml-accent-soft);font-size:12px;font-weight:700;color:var(--ml-accent-ink)}
.d .key{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:26px;padding:12px 12px 12px 16px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .key p{display:flex;flex-direction:column;min-width:0}
.d .key small{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .key code{margin-top:3px;font:600 15px var(--ml-mono);letter-spacing:.04em;color:var(--ml-ink);white-space:nowrap}
.d .cpk{height:36px;padding:0 12px}
.d .cpk.cp,.d .cpa.cp{color:#12893C}
.d .tips{display:flex;flex-direction:column;gap:12px;margin-top:22px;list-style:none}
.d .tips li{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--ml-ink-2)}
.d .tips svg{padding:3px;border-radius:50%;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .card{padding:24px;border-radius:22px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg)}
.d .qr{position:relative;width:min(100%,232px);aspect-ratio:1;margin:0 auto;padding:14px;border-radius:18px;overflow:hidden;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .qr svg{display:block;width:100%;height:100%;padding:8px;border-radius:10px;background:#fff}
.d .qm{fill:var(--ml-ink)}
.d .qlogo{position:absolute;left:50%;top:50%;display:grid;place-items:center;width:44px;height:44px;margin:-22px;border-radius:12px;background:#fff;box-shadow:0 0 0 4px #fff,0 2px 8px rgba(35,15,10,.16);color:var(--ml-accent)}
.d .scan{position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,68,51,0) 60%,rgba(255,68,51,.2));border-bottom:2px solid var(--ml-accent);animation:tfa-scan 3.2s var(--ml-ease) infinite}
.d .qcap{margin-top:14px;font-size:13px;text-align:center;color:var(--ml-muted)}
.d .qcap b{font-weight:600;color:var(--ml-ink-2)}
.d .vf .fl{margin-top:8px}
.d .field input{font-family:var(--ml-mono);font-size:17px;font-weight:600;letter-spacing:.32em}
.d .field input::placeholder{letter-spacing:.32em}
.d .demo{margin-top:12px;font-size:12.5px;text-align:center;color:var(--ml-muted)}
.d .bh{display:flex;align-items:center;justify-content:space-between}
.d .bh p{display:flex;flex-direction:column}
.d .bh b{font-size:16px;font-weight:650}
.d .bh small{font-size:12.5px;color:var(--ml-muted)}
.d .tag{padding:4px 9px;border-radius:999px;background:var(--ml-accent-soft);font-size:11.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .cw{position:relative;margin-top:16px}
.d .codes{display:grid;grid-template-columns:1fr 1fr;gap:10px 18px;padding:20px 22px;border-radius:16px;background:#14161D;color:#EAF1FF}
.d .codes span{display:flex;gap:10px;font:600 14.5px var(--ml-mono);letter-spacing:.04em;filter:blur(7px);opacity:.55;transition:filter .5s var(--ml-ease),opacity .5s ease;transition-delay:calc(var(--i) * 70ms)}
.d .codes span i{font-style:normal;color:#6B7A99}
.d .codes.show span{filter:none;opacity:1}
.d .rev{position:absolute;left:50%;top:50%;margin:-21px 0 0 -62px;transition:opacity .25s ease,transform 90ms ease-out}
.d .codes.show + .rev{opacity:0;pointer-events:none}
.d .ba{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:12px}
.d .sv{margin-top:14px}
.d .dn2{text-align:center;padding:34px 24px}
.d .dn2 .okc{margin:0 auto 16px}
.d .dn2 h2{font-size:20px;font-weight:650;letter-spacing:-.02em}
.d .dv{display:flex;align-items:center;gap:12px;margin-top:20px;padding:12px 14px;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:left}
.d .dv .ic{display:grid;flex:none;place-items:center;width:38px;height:38px;border-radius:11px;background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .dv p{display:flex;flex:1;flex-direction:column}
.d .dv b{font-size:14px;font-weight:600}
.d .dv small{font-size:12.5px;color:var(--ml-muted)}
.d .live{width:9px;height:9px;border-radius:50%;background:#1DB954;box-shadow:0 0 0 4px rgba(29,185,84,.16)}
@keyframes tfa-scan{0%{transform:translateY(-100%)}70%,100%{transform:translateY(0)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{padding:0 18px}
  .d .crumb{display:none}
  .d .page{grid-template-columns:minmax(0,1fr);gap:24px;align-items:start;padding:24px 18px}
  .d .lf h1{font-size:26px}
  .d .key code{font-size:13.5px}
  .d .card{padding:18px}
}
@media (prefers-reduced-motion: reduce){.d .scan{animation:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      // drawn QR: three finder squares, timing lines, an alignment square and seeded noise
      const N = 29;
      const m = Array.from({ length: N }, () => Array(N).fill(0));
      let seed = 20261014;
      const rnd = () => {
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) m[y][x] = rnd() < 0.48 ? 1 : 0;
      const box = (x0, y0, w, h, v) => {
        for (let y = y0; y < y0 + h; y++) for (let x = x0; x < x0 + w; x++) if (m[y] && m[y][x] !== undefined) m[y][x] = v;
      };
      const finder = (x0, y0) => {
        box(Math.max(0, x0 - 1), Math.max(0, y0 - 1), 9, 9, 0);
        box(x0, y0, 7, 7, 1);
        box(x0 + 1, y0 + 1, 5, 5, 0);
        box(x0 + 2, y0 + 2, 3, 3, 1);
      };
      for (let i = 8; i < N - 8; i++) {
        m[6][i] = i % 2 === 0 ? 1 : 0;
        m[i][6] = i % 2 === 0 ? 1 : 0;
      }
      box(10, 10, 9, 9, 0);
      box(20, 20, 5, 5, 1);
      box(21, 21, 3, 3, 0);
      m[22][22] = 1;
      finder(0, 0);
      finder(N - 7, 0);
      finder(0, N - 7);
      let d = '';
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (m[y][x]) d += `M${x} ${y}h1v1h-1z`;
      $('.qm').setAttribute('d', d);
      // backup codes
      const alpha = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
      const pick = () => alpha[Math.floor(rnd() * alpha.length)];
      const codes = $('.codes');
      codes.innerHTML = Array.from({ length: 8 }, (_, k) => `<span style="--i:${k}"><i>${k + 1}</i>${pick()}${pick()}${pick()}${pick()}-${pick()}${pick()}${pick()}${pick()}</span>`).join('');

      const phases = [...root.querySelectorAll('[data-ph]')];
      const setPhase = (n) => phases.forEach((p) => p.classList.toggle('on', Number(p.dataset.ph) === n));
      const vf = $('.vf');
      const code = $('#ml-2fa-code');
      const go = $('.vf .go');
      const sv = $('.sv');
      const rev = $('.rev');
      const copyFlash = (btn) => {
        const s = btn.querySelector('span');
        const was = s.textContent;
        btn.classList.add('cp');
        s.textContent = 'Copied';
        setTimeout(() => {
          btn.classList.remove('cp');
          s.textContent = was;
        }, 1600);
      };
      const copyText = (t) => {
        try {
          if (navigator.clipboard) navigator.clipboard.writeText(t).catch(() => {});
        } catch (e) {}
      };
      $('.cpk').addEventListener('click', () => {
        copyText('JBSWY3DPEHPK3PXP');
        copyFlash($('.cpk'));
      });
      $('.cpa').addEventListener('click', () => {
        copyText(codes.innerText);
        copyFlash($('.cpa'));
      });
      rev.addEventListener('click', () => {
        codes.classList.add('show');
        sv.disabled = false;
      });
      code.addEventListener('input', () => {
        code.value = code.value.replace(/\D/g, '');
        code.closest('.field').classList.remove('bad');
      });
      let busy = false;
      vf.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        const ok = code.value === '731094';
        code.closest('.field').classList.toggle('bad', !ok);
        code.setAttribute('aria-invalid', String(!ok));
        if (!ok) return;
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          setTimeout(() => {
            setPhase(1);
            busy = false;
          }, 600);
        }, 1000);
      });
      sv.addEventListener('click', () => {
        if (busy || sv.disabled) return;
        busy = true;
        sv.classList.add('loading');
        setTimeout(() => {
          sv.classList.replace('loading', 'ok');
          setTimeout(() => {
            setPhase(2);
            busy = false;
            setTimeout(reset, 3200);
          }, 500);
        }, 1000);
      });
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        code.value = '';
        code.closest('.field').classList.remove('bad', 'is-auto');
        go.classList.remove('loading', 'ok');
        sv.classList.remove('loading', 'ok');
        sv.disabled = true;
        codes.classList.remove('show');
        busy = false;
        setPhase(0);
      };
      cur.style.transform = 'translate(780px,600px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => aim(code, 0.6),
            () => typeInto(code, '731094'),
            () => press(go, 0.55),
            rest(2300),
            () => press(rev, 0.5),
            rest(1500),
            () => press(sv, 0.55),
            rest(5200),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a two-step verification (authenticator app) setup screen for an account security area, full viewport (height: 100dvh).

Layout: top bar (logo, breadcrumb Account / Security / Two-step verification). Below, a centered two-column page (max 1040px; columns 5fr / 6fr, 56px gap, vertically centered). Left, on the page surface: an uppercase eyebrow, a 32px heading "Scan with your authenticator app", three numbered instructions (26px accent-tinted number circles), and a "Setup key" card with the key in a monospace font and a Copy button that flips to a green "Copied" for 1.6s. Right, a white card (22px radius, hairline ring, large soft shadow, 24px padding) in three phases that swap with a short fade-up (opacity + translateY 8px, spring).

Phase 1: a drawn QR code (inline SVG, 29x29 modules as one path with crispEdges: three finder squares, timing lines, an alignment square, seeded pseudo-random noise, a white rounded logo tile in the middle) inside a tinted frame, with a soft accent scan band that sweeps top to bottom on a 3.2s loop (translateY(-100%) to 0, clipped by overflow hidden); a caption naming the account; a label "6-digit code", a monospace field with wide letter spacing (digits only, inputmode numeric, autocomplete one-time-code), and a primary Verify button with a sheen busy state. Wrong code: red ring, 380ms shake, role="alert" message.
Phase 2: "Backup codes" with an 8-code block in a dark panel (the one dark element), two columns, each code blurred (filter blur 7px, opacity .55) until a Reveal button is pressed, then each code sharpens with a 70ms stagger (500ms ease). Copy all and Download secondary buttons; the primary "I saved my codes" stays disabled until the codes are revealed.
Phase 3: a green circle with a check that draws itself, "Two-step verification is on" and a row with a phone icon, "Authenticator app, added just now" and a green status dot.

Accessibility: labels, aria-invalid, visible focus rings, buttons really disabled, prefers-reduced-motion stops the scan band. Below 760px stack the columns and hide the breadcrumb. Plain HTML, CSS and JS, no libraries; React-friendly structure (SetupInstructions, QrCode, VerifyForm, BackupCodes, SuccessCard). Use your accent color for the scan band, pills and primary button.`,
  });

  ML.add({
    id: 'app-auth-passkey',
    cat: 'app-auth',
    title: 'Passkey sign in',
    sub: 'Ring fills as the device confirms it is you',
    html: `
<div class="wrap">
  <header class="bar"><span class="brand"><span class="mark">S</span>Solace Studio</span><span class="sec">${I(P.shield, 15)}Protected by passkeys</span></header>
  <main class="stage">
    <form class="form" novalidate>
      <div class="rb">
        <span class="chip c1">${I(P.face, 16)}Face unlock</span><span class="chip c2">${I(P.finger, 16)}Fingerprint</span><span class="chip c3">${I(P.key, 16)}Security key</span>
        <svg class="ring" viewBox="0 0 220 220" aria-hidden="true"><circle class="trk" cx="110" cy="110" r="102"/><circle class="prg" cx="110" cy="110" r="102" pathLength="1"/></svg>
        <span class="disc" aria-hidden="true"><span class="ic i1">${I(P.finger, 74, 1.5)}</span><span class="ic i2">${I(P.check, 70, 2.2)}</span><i class="beam"></i></span>
      </div>
      <h1 class="t">Sign in with your passkey</h1>
      <p class="lead s">Use your fingerprint, face or device PIN.</p>
      <div class="acct"><span class="av">MR</span><p><b>Maya Reyes</b><small>maya@solace.studio</small></p><button type="button" class="lk">Not you?</button></div>
      <div class="pwrow"><div>
        <label class="fl" for="ml-pas-pass">Password</label>
        <div class="field">${I(P.lock, 17)}<input id="ml-pas-pass" type="password" autocomplete="current-password" placeholder="Your password" aria-describedby="ml-pas-err"></div>
        <p class="err" id="ml-pas-err" role="alert"><span>Enter your password.</span></p>
      </div></div>
      <button type="submit" class="go"><span class="lbl">${I(P.finger, 17)}<em>Continue with passkey</em></span><span class="busy">Waiting for your device</span><span class="done">${I(P.check, 17, 2.6)}Signed in</span></button>
      <button type="button" class="lk alt">Use password instead</button>
    </form>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{display:flex;flex-direction:column;height:100%;background:radial-gradient(60% 50% at 50% 30%,#E3EEFF 0%,rgba(227,238,255,0) 100%),var(--ml-surface)}
.d .bar{display:flex;flex:none;align-items:center;justify-content:space-between;padding:22px 32px}
.d .sec{display:inline-flex;align-items:center;gap:7px;font-size:13px;color:var(--ml-muted)}
.d .stage{display:grid;flex:1;min-height:0;place-items:center;padding:0 24px 28px;overflow-y:auto}
.d .form{display:flex;flex-direction:column;align-items:center;width:100%;max-width:380px;text-align:center}
.d .form h1{font-size:26px}
.d .rb{position:relative;flex:none;width:232px;height:232px;margin:6px 0 24px}
.d .ring{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.d .ring circle{fill:none;stroke-width:5}
.d .trk{stroke:var(--ml-bar)}
.d .prg{stroke:var(--ml-accent);stroke-linecap:round;stroke-dasharray:1;stroke-dashoffset:1;opacity:0;transition:stroke-dashoffset 1.9s var(--ml-ease),stroke .4s ease,opacity .2s ease}
.d .form.scan .prg{stroke-dashoffset:0;opacity:1}
.d .form.okk .prg{stroke:#1DB954}
.d .disc{position:absolute;inset:26px;display:grid;place-items:center;border-radius:50%;overflow:hidden;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow-lg);color:var(--ml-accent);animation:pk-breathe 4.4s ease-in-out infinite}
.d .ic{grid-area:1/1;display:grid;place-items:center;transition:opacity .3s ease,transform .5s var(--ml-bounce)}
.d .i2{opacity:0;transform:scale(.5);color:#12893C}
.d .form.okk .i1{opacity:0;transform:scale(.5)}
.d .form.okk .i2{opacity:1;transform:none}
.d .beam{position:absolute;left:16%;right:16%;top:0;height:3px;border-radius:3px;background:var(--ml-accent);opacity:0}
.d .form.scan:not(.okk) .beam{animation:pk-beam 1s var(--ml-ease) infinite}
.d .chip{position:absolute;z-index:1;display:inline-flex;align-items:center;gap:7px;padding:8px 13px 8px 11px;border-radius:999px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);font-size:12.5px;font-weight:600;color:var(--ml-ink-2);white-space:nowrap;animation:pk-float 6s ease-in-out infinite}
.d .chip svg{color:var(--ml-accent)}
.d .c1{left:-124px;top:36px}
.d .c2{right:-132px;top:74px;animation-delay:-2s}
.d .c3{left:-100px;bottom:22px;animation-delay:-4s}
.d .acct{display:flex;align-items:center;gap:12px;width:100%;margin-top:22px;padding:10px 14px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);text-align:left}
.d .av{display:grid;flex:none;place-items:center;width:36px;height:36px;border-radius:50%;background:var(--ml-accent-soft);font-size:12.5px;font-weight:650;color:var(--ml-accent-ink)}
.d .acct p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .acct b{font-size:14px;font-weight:600}
.d .acct small{font-size:12.5px;color:var(--ml-muted)}
.d .pwrow{display:grid;grid-template-rows:0fr;width:100%;text-align:left;transition:grid-template-rows .45s var(--ml-ease)}
.d .pwrow > div{min-height:0;overflow:hidden;visibility:hidden;padding:0 5px;margin:0 -5px;transition:visibility 0s .45s}
.d .form.pw .pwrow{grid-template-rows:1fr}
.d .form.pw .pwrow > div{visibility:visible;transition-delay:0s}
.d .go .lbl em{font-style:normal}
.d .alt{margin-top:16px;font-size:13.5px}
@keyframes pk-breathe{0%,100%{transform:scale(1)}50%{transform:scale(1.03)}}
@keyframes pk-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-7px)}}
@keyframes pk-beam{0%{transform:translateY(34px);opacity:0}18%,82%{opacity:1}100%{transform:translateY(142px);opacity:0}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{padding:18px 20px}
  .d .sec,.d .chip{display:none}
  .d .stage{place-items:start center;padding-top:8px}
}
@media (prefers-reduced-motion: reduce){.d .chip,.d .disc,.d .form.scan:not(.okk) .beam{animation:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const form = $('.form');
      const go = $('.go');
      const alt = $('.alt');
      const pass = $('#ml-pas-pass');
      const prg = $('.prg');
      const t = $('.t');
      const s = $('.s');
      let pw = false;
      let busy = false;
      const setPw = (on) => {
        pw = on;
        form.classList.toggle('pw', on);
        go.querySelector('.lbl em').textContent = on ? 'Sign in' : 'Continue with passkey';
        go.querySelector('.busy').textContent = on ? 'Signing in' : 'Waiting for your device';
        alt.textContent = on ? 'Use passkey instead' : 'Use password instead';
        s.textContent = on ? 'Enter your password to continue.' : 'Use your fingerprint, face or device PIN.';
      };
      alt.addEventListener('click', () => setPw(!pw));
      pass.addEventListener('input', () => pass.closest('.field').classList.remove('bad'));
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        prg.style.transition = 'none';
        form.classList.remove('scan', 'okk');
        void prg.getBoundingClientRect();
        prg.style.transition = '';
        go.classList.remove('loading', 'ok');
        pass.value = '';
        pass.closest('.field').classList.remove('bad', 'is-auto');
        t.textContent = 'Sign in with your passkey';
        setPw(false);
        busy = false;
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        if (pw) {
          const ok = pass.value.length > 0;
          pass.closest('.field').classList.toggle('bad', !ok);
          pass.setAttribute('aria-invalid', String(!ok));
          if (!ok) return;
        }
        busy = true;
        go.classList.add('loading');
        form.classList.add('scan');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          form.classList.add('okk');
          t.textContent = 'Welcome back, Maya';
          setTimeout(reset, 2600);
        }, 2000);
      });
      cur.style.transform = 'translate(700px,600px)';
      let n = 0;
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          n++;
          await seq(
            n % 2
              ? [() => press(go, 0.55), rest(5400)]
              : [() => press(alt, 0.5), rest(700), () => aim(pass, 0.6), () => typeInto(pass, 'solace-2026'), () => press(go, 0.55), rest(5400)]
          );
          await wait(400);
        }
      })();
    },
    prompt: `Build a passkey sign-in screen, full viewport (height: 100dvh), on a soft surface with a pale accent radial glow behind the center.

Layout: slim top bar (logo left, "Protected by passkeys" with a shield icon right) and one centered column (max 380px). The hero is a 232px progress ring: an SVG circle track (5px stroke, light grey-blue) with a second circle on top (accent stroke, round cap, pathLength="1", stroke-dasharray 1, stroke-dashoffset 1) rotated -90deg so it starts at 12 o'clock. Inside it a 180px white disc with a hairline ring and large soft shadow that breathes (scale 1 to 1.03, 4.4s) and holds a 74px fingerprint line icon. Three frosted pill chips (Face unlock, Fingerprint, Security key, each with a line icon) float around the ring (translateY 0 to -7px, 6s, staggered). Under the ring: heading "Sign in with your passkey", one line of copy, an account row (initials avatar, name, email, "Not you?" link), a full-width primary button "Continue with passkey" and a text link "Use password instead".

Motion: pressing the button starts the scan. The ring fills with stroke-dashoffset 1 to 0 over 1.9s (cubic-bezier(.32,.72,0,1)) while a thin accent beam sweeps down across the disc (translateY, 1s loop) and the button label slides to "Waiting for your device" with a sheen across it (no spinner). On completion the ring turns green, the fingerprint swaps for a check (scale .5 to 1 with a slight overshoot), the heading reads "Welcome back, <name>" and the button turns green with "Signed in". The password link unfolds a password field (grid-template-rows 0fr to 1fr) and changes the button to Sign in.

Accessibility: the button is a real submit button, the status text changes are announced, the password field has a label, role="alert" error and aria-invalid, focus rings are visible, prefers-reduced-motion stops floating and breathing. In a real build call navigator.credentials.get() for the passkey step. Below 760px hide the chips and the top-bar label. Plain HTML, CSS and JS, no libraries; React-friendly structure (PasskeyRing, AccountRow, PasswordFallback). Use your accent color for the ring and the primary button.`,
  });

  ML.add({
    id: 'app-auth-password',
    cat: 'app-auth',
    title: 'Signup with password rules',
    sub: 'Rules tick and the strength bar fills live',
    html: `
<div class="wrap">
  <header class="bar"><span class="brand"><span class="mark">K</span>Kestrel &amp; Co</span><p class="hs">Already have an account? <button type="button" class="lk">Sign in</button></p></header>
  <main class="page">
    <form class="form" novalidate>
      <h1>Create your account</h1>
      <p class="lead">Free for teams under 5. Upgrade when you grow.</p>
      <label class="fl" for="ml-pwd-name">Full name</label>
      <div class="field">${I(P.user, 17)}<input id="ml-pwd-name" autocomplete="name" placeholder="Your name" aria-describedby="ml-pwd-name-err"></div>
      <p class="err" id="ml-pwd-name-err" role="alert"><span>Enter your full name.</span></p>
      <label class="fl" for="ml-pwd-email">Work email</label>
      <div class="field">${I(P.mail, 17)}<input id="ml-pwd-email" type="email" autocomplete="email" placeholder="you@company.com" aria-describedby="ml-pwd-email-err"></div>
      <p class="err" id="ml-pwd-email-err" role="alert"><span>Enter a valid work email.</span></p>
      <label class="fl" for="ml-pwd-pass">Password</label>
      <div class="field">${I(P.lock, 17)}<input id="ml-pwd-pass" type="password" autocomplete="new-password" placeholder="Create a password" aria-describedby="ml-pwd-pass-err ml-pwd-rules"><button type="button" class="eye" aria-label="Show password" aria-pressed="false">${I(P.eye, 17)}${I(P.eyeOff, 17)}</button></div>
      <p class="err" id="ml-pwd-pass-err" role="alert"><span>Meet every password rule to continue.</span></p>
      <button type="submit" class="go"><span class="lbl">Create account</span><span class="busy">Creating account</span><span class="done">${I(P.check, 17, 2.6)}Account created</span></button>
      <p class="fine">By creating an account you agree to the Terms and Privacy Policy.</p>
    </form>
    <aside class="meter" data-l="0" id="ml-pwd-rules" aria-live="polite">
      <div class="mh"><p class="mk">Password strength</p><p class="mw">Not set</p></div>
      <div class="bars"><i></i><i></i><i></i><i></i></div>
      <ul class="rules">
        <li data-r="len"><span class="tk">${I(P.check, 13, 3)}</span>At least 8 characters</li>
        <li data-r="case"><span class="tk">${I(P.check, 13, 3)}</span>Upper and lower case letters</li>
        <li data-r="num"><span class="tk">${I(P.check, 13, 3)}</span>At least one number</li>
        <li data-r="sym"><span class="tk">${I(P.check, 13, 3)}</span>At least one symbol</li>
        <li data-r="common"><span class="tk">${I(P.check, 13, 3)}</span>Not common, and not your name or email</li>
      </ul>
      <p class="tip">${I(P.info, 16)}A passphrase of four random words is hard to guess and easy to remember.</p>
    </aside>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{display:flex;flex-direction:column;height:100%;background:var(--ml-bg)}
.d .bar{display:flex;flex:none;align-items:center;justify-content:space-between;padding:22px 32px}
.d .hs{font-size:13.5px;color:var(--ml-muted)}
.d .page{display:grid;flex:1;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:56px;align-items:center;width:100%;max-width:1000px;min-height:0;margin:0 auto;padding:12px 40px 36px;overflow-y:auto}
.d .form{display:flex;flex-direction:column;justify-self:end;width:100%;max-width:400px}
.d .fine{margin-top:16px;font-size:12.5px;color:var(--ml-muted)}
.d .meter{--c:var(--ml-muted);--t:var(--ml-muted);justify-self:start;width:100%;max-width:400px;padding:28px;border-radius:24px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .meter[data-l="1"]{--c:#FF3B30;--t:#D70015}
.d .meter[data-l="2"]{--c:#FF9F0A;--t:#B25E00}
.d .meter[data-l="3"]{--c:var(--ml-accent);--t:var(--ml-accent-ink)}
.d .meter[data-l="4"]{--c:#1DB954;--t:#12893C}
.d .mh{display:flex;align-items:flex-end;justify-content:space-between}
.d .mk{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .mw{font-size:30px;line-height:1;font-weight:650;letter-spacing:-.03em;color:var(--t);transition:color .3s ease}
.d .bars{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:16px}
.d .bars i{position:relative;height:8px;border-radius:99px;overflow:hidden;background:var(--ml-bar)}
.d .bars i::after{content:"";position:absolute;inset:0;border-radius:inherit;background:var(--c);transform:scaleX(0);transform-origin:0 50%;transition:transform .5s var(--ml-ease),background-color .3s ease}
.d .bars i.on::after{transform:none}
.d .rules{display:flex;flex-direction:column;margin-top:14px;list-style:none}
.d .rules li{display:flex;align-items:center;gap:12px;padding:12px 0;border-bottom:1px solid var(--ml-line);font-size:14px;color:var(--ml-muted);transition:color .3s ease}
.d .rules li:last-child{border-bottom:0}
.d .tk{display:grid;flex:none;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:transparent;transition:background-color .25s ease,box-shadow .25s ease,color .25s ease,transform .45s var(--ml-bounce)}
.d .rules li.ok{color:var(--ml-ink)}
.d .rules li.ok .tk{background:#1DB954;box-shadow:none;color:#fff;transform:scale(1.08)}
.d .tip{display:flex;align-items:flex-start;gap:10px;margin-top:10px;padding:12px 14px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:13px;line-height:1.45;color:var(--ml-ink-2)}
.d .tip svg{flex:none;margin-top:1px;color:var(--ml-accent)}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{padding:18px 20px}
  .d .hs{display:none}
  .d .page{grid-template-columns:minmax(0,1fr);gap:28px;align-items:start;padding:8px 20px 28px}
  .d .form,.d .meter{justify-self:stretch;max-width:none}
  .d .meter{padding:22px}
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text, speed = 1) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait((50 + Math.random() * 55) * speed);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const form = $('.form');
      const name = $('#ml-pwd-name');
      const email = $('#ml-pwd-email');
      const pass = $('#ml-pwd-pass');
      const go = $('.go');
      const meter = $('.meter');
      const eye = $('.eye');
      const words = ['Not set', 'Weak', 'Fair', 'Good', 'Strong'];
      const common = ['password', '12345678', '123456789', 'qwerty123', 'letmein1', 'iloveyou', 'welcome1', 'admin123'];
      const check = () => {
        const v = pass.value;
        const local = (email.value.split('@')[0] || '').toLowerCase();
        const first = (name.value.trim().split(' ')[0] || '').toLowerCase();
        const lv = v.toLowerCase();
        const r = {
          len: v.length >= 8,
          case: /[a-z]/.test(v) && /[A-Z]/.test(v),
          num: /\d/.test(v),
          sym: /[^A-Za-z0-9]/.test(v),
          common: v.length > 0 && !common.includes(lv) && !(local.length >= 3 && lv.includes(local)) && !(first.length >= 3 && lv.includes(first)),
        };
        const score = Object.values(r).filter(Boolean).length;
        const level = !v ? 0 : score <= 2 ? 1 : score === 3 ? 2 : score === 4 ? 3 : 4;
        root.querySelectorAll('.rules li').forEach((li) => li.classList.toggle('ok', r[li.dataset.r]));
        root.querySelectorAll('.bars i').forEach((b, k) => b.classList.toggle('on', k < level));
        meter.dataset.l = String(level);
        $('.mw').textContent = words[level];
        return score === 5;
      };
      const mark = (input, ok) => {
        input.closest('.field').classList.toggle('bad', !ok);
        input.setAttribute('aria-invalid', String(!ok));
        return ok;
      };
      [name, email, pass].forEach((el) =>
        el.addEventListener('input', () => {
          el.closest('.field').classList.remove('bad');
          check();
        })
      );
      eye.addEventListener('click', () => {
        const on = pass.type === 'password';
        pass.type = on ? 'text' : 'password';
        eye.classList.toggle('on', on);
        eye.setAttribute('aria-pressed', String(on));
        eye.setAttribute('aria-label', on ? 'Hide password' : 'Show password');
      });
      let busy = false;
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        [name, email, pass].forEach((i) => {
          i.value = '';
          i.closest('.field').classList.remove('bad', 'is-auto');
        });
        go.classList.remove('loading', 'ok');
        busy = false;
        check();
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        const ok = [mark(name, name.value.trim().length > 1), mark(email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim())), mark(pass, check())].every(Boolean);
        if (!ok) return;
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          setTimeout(reset, 2200);
        }, 1100);
      });
      check();
      cur.style.transform = 'translate(500px,640px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => aim(name, 0.6),
            () => typeInto(name, 'Isabel Cruz'),
            () => aim(email, 0.6),
            () => typeInto(email, 'isabel@kestrel.co'),
            () => aim(pass, 0.6),
            () => typeInto(pass, 'kestrel', 1.5),
            rest(700),
            () => typeInto(pass, 'Co', 1.8),
            rest(700),
            () => typeInto(pass, '-', 1.8),
            rest(700),
            () => typeInto(pass, '26', 1.8),
            rest(600),
            () => press(go, 0.55),
            rest(4400),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a signup screen with live password rules and a strength meter, full viewport (min-height: 100dvh), white page.

Layout: top bar (logo left, "Already have an account? Sign in" right). Below, a two-column page (max 1000px, 56px gap, vertically centered). Left column (max 400px, right-aligned toward the center): heading "Create your account", one line of copy, Full name, Work email and Password fields (46px tall, leading icons, show/hide toggle on the password), a full-width primary "Create account" button and a terms line. Right column: a rules panel on your surface tint (24px radius, 28px padding, hairline ring): a micro-label "Password strength" with a 30px status word (Not set, Weak, Fair, Good, Strong) colored by level, a four-segment meter, a checklist of five rules (at least 8 characters, upper and lower case, a number, a symbol, not common and not containing the name or email) and a small tip card about passphrases.

Behavior: re-evaluate on every input event of the password, name and email fields. Each rule row shows a 22px circle that turns solid green with a white check and a slight overshoot (scale 1.08, bounce curve) when met, and its text darkens. Score = rules met; level 0 when empty, 1 for 0-2 rules, 2 for 3, 3 for 4, 4 for 5. Each meter segment is a track with a colored layer that grows with transform: scaleX(0 to 1) from the left (500ms, cubic-bezier(.32,.72,0,1)); the level color is a CSS variable: red (weak), amber (fair), your accent (good), green (strong), and the status word uses a darker text shade of the same hue. Submitting requires a name, a valid email and all five rules; otherwise show the red ring, 380ms shake and a role="alert" message; success shows the button sheen then a green "Account created".

Accessibility: the rules panel is aria-live="polite" and referenced by the password input with aria-describedby, labels on every field, visible focus rings, show/hide toggle with aria-pressed and aria-label. Below 760px stack the panel under the form. Plain HTML, CSS and JS, no libraries; React-friendly structure (SignupForm, PasswordField, StrengthMeter, RuleList). Use your accent color for focus rings, the "good" level and the primary button.`,
  });

  ML.add({
    id: 'app-auth-sso',
    cat: 'app-auth',
    title: 'SSO workspace finder',
    sub: 'Domain lookup resolves to your workspace',
    html: `
<div class="wrap">
  <div class="arcs" aria-hidden="true"><i></i><i></i><i></i></div>
  <header class="bar"><span class="brand"><span class="mark">N</span>Northgate</span><button type="button" class="lk">Contact support</button></header>
  <main class="stage">
    <form class="sf" novalidate>
      <h1>Find your workspace</h1>
      <p class="lead">Enter your work email or company domain and we will take you to your team's sign-in.</p>
      <div class="spot" data-s="idle">
        <div class="field big">${I(P.search, 20)}<input id="ml-sso-q" type="text" autocomplete="email" spellcheck="false" placeholder="name@company.com or domain" aria-describedby="ml-sso-err"><kbd>Enter</kbd></div>
        <p class="err" id="ml-sso-err" role="alert"><span>Enter a work email or a domain like company.com.</span></p>
        <div class="res" aria-live="polite">
          <div class="rw recent"><p class="rl">Recent on this device</p>
            <button type="button" class="rc" data-d="halden.co"><span class="tl">H</span><p><b>Halden</b><small>halden.co</small></p>${I(P.chevR, 16)}</button>
            <button type="button" class="rc" data-d="kestrel.co"><span class="tl">K</span><p><b>Kestrel &amp; Co</b><small>kestrel.co</small></p>${I(P.chevR, 16)}</button>
          </div>
          <div class="rw sk"><span class="tl shim"></span><p><i class="shim"></i><i class="shim s2"></i></p></div>
          <div class="rw fd"><span class="tl fi">N</span><p><b class="fn">Northgate Freight</b><small class="fs">northgate.com</small></p><span class="tag">${I(P.key, 13)}SSO enabled</span><button type="button" class="go fgo"><span class="lbl">Continue with SSO</span><span class="busy">Redirecting</span><span class="done">${I(P.check, 16, 2.6)}Redirecting</span></button></div>
          <div class="rw nf"><span class="tl nfi">${I(P.search, 18)}</span><p><b>No workspace found for <span class="nd">domain</span></b><small>Check the spelling, or ask your admin for an invite.</small></p><button type="button" class="ghost">Create one</button></div>
        </div>
      </div>
      <p class="alt">Not part of a team yet? <button type="button" class="lk">Create a workspace</button></p>
    </form>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{position:relative;display:flex;flex-direction:column;height:100%;overflow:hidden;background:linear-gradient(180deg,#F6F9FF 0%,#E9F1FF 100%)}
.d .arcs i{position:absolute;left:-14%;bottom:-38%;display:block;border-radius:50%;border:1px solid var(--ml-accent-line);opacity:.7}
.d .arcs i:nth-child(1){width:560px;height:560px;margin:0}
.d .arcs i:nth-child(2){width:860px;height:860px;left:-26%;bottom:-70%}
.d .arcs i:nth-child(3){width:1160px;height:1160px;left:-38%;bottom:-100%}
.d .bar{position:relative;display:flex;flex:none;align-items:center;justify-content:space-between;padding:22px 32px}
.d .stage{position:relative;display:flex;flex:1;justify-content:center;min-height:0;padding:104px 24px 28px;overflow-y:auto}
.d .sf{width:100%;max-width:600px}
.d .sf h1{font-size:34px}
.d .sf .lead{max-width:480px;line-height:1.55}
.d .spot{margin-top:26px;padding:10px;border-radius:24px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg)}
.d .field.big{height:62px;margin-top:0;padding:0 12px 0 18px;border-radius:16px}
.d .field.big input{font-size:17px}
.d kbd{padding:6px 9px;border-radius:7px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);font:500 11.5px/1 var(--ml-mono);color:var(--ml-muted)}
.d .spot .err{padding:0 10px}
.d .res{padding:6px 0 2px}
.d .rw{display:none;animation:au-in 480ms var(--ml-spring) both}
.d .spot[data-s="idle"] .recent,.d .spot[data-s="look"] .sk{display:block}
.d .spot[data-s="found"] .fd,.d .spot[data-s="none"] .nf,.d .spot[data-s="look"] .sk{display:flex}
.d .rl{padding:10px 12px 6px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-muted)}
.d .rc{display:flex;align-items:center;gap:14px;width:100%;padding:10px 12px;border:0;border-radius:14px;background:none;text-align:left;color:var(--ml-muted);cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .rc:hover{background:var(--ml-surface)}
.d .rc:active{transform:scale(.99)}
.d .tl{display:grid;flex:none;place-items:center;width:42px;height:42px;border-radius:12px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:16px;font-weight:700;color:var(--ml-accent-ink)}
.d .rw p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .rw b{font-size:14.5px;font-weight:600;color:var(--ml-ink)}
.d .rw small{font-size:12.5px;color:var(--ml-muted)}
.d .rc p{flex:1}
.d .sk,.d .fd,.d .nf{align-items:center;gap:14px;margin:4px 0 2px;padding:14px;border-radius:16px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .sk p{gap:8px}
.d .sk i{display:block;height:11px;border-radius:99px}
.d .sk .s2{width:55%}
.d .fd .fi{background:var(--ml-grad);color:#fff;box-shadow:none}
.d .fd .tag{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.d .fgo{width:auto;height:40px;margin:0;padding:0 16px;font-size:13.5px;white-space:nowrap}
.d .nfi{background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:var(--ml-muted)}
.d .nf .ghost{height:38px;white-space:nowrap}
.d .alt{margin-top:22px;font-size:13.5px;text-align:center;color:var(--ml-muted)}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .bar{padding:18px 20px}
  .d .stage{padding:36px 16px 24px}
  .d .sf h1{font-size:28px}
  .d .fd,.d .nf{flex-wrap:wrap}
  .d .fd p,.d .nf p{flex:1 1 60%}
  .d .fd .tag{order:3}
  .d .fgo{order:4;width:100%}
  .d kbd{display:none}
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const form = $('.sf');
      const spot = $('.spot');
      const q = $('#ml-sso-q');
      const fq = q.closest('.field');
      const fgo = $('.fgo');
      const dir = {
        'northgate.com': { n: 'Northgate Freight', m: '148 members', i: 'N' },
        'halden.co': { n: 'Halden', m: '62 members', i: 'H' },
        'kestrel.co': { n: 'Kestrel & Co', m: '34 members', i: 'K' },
      };
      const domainOf = (v) => {
        const s = v.trim().toLowerCase();
        return s.includes('@') ? s.split('@')[1] : s;
      };
      const okDom = (d) => /^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(d);
      let deb = 0;
      let tok = 0;
      let busy = false;
      const lookup = (d) => {
        const my = ++tok;
        spot.dataset.s = 'look';
        setTimeout(() => {
          if (my !== tok) return;
          const w = dir[d];
          if (w) {
            $('.fn').textContent = w.n;
            $('.fs').textContent = `${d} - ${w.m}`;
            $('.fi').textContent = w.i;
            spot.dataset.s = 'found';
          } else {
            $('.nd').textContent = d;
            spot.dataset.s = 'none';
          }
        }, 850);
      };
      q.addEventListener('input', () => {
        clearTimeout(deb);
        fq.classList.remove('bad');
        const d = domainOf(q.value);
        if (okDom(d)) deb = setTimeout(() => lookup(d), 450);
        else {
          tok++;
          spot.dataset.s = 'idle';
        }
      });
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const d = domainOf(q.value);
        const ok = okDom(d);
        fq.classList.toggle('bad', !ok);
        q.setAttribute('aria-invalid', String(!ok));
        if (!ok) return;
        clearTimeout(deb);
        lookup(d);
      });
      root.querySelectorAll('.rc').forEach((b) =>
        b.addEventListener('click', () => {
          q.value = b.dataset.d;
          lookup(b.dataset.d);
        })
      );
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        clearTimeout(deb);
        tok++;
        q.value = '';
        fq.classList.remove('bad', 'is-auto');
        fgo.classList.remove('loading', 'ok');
        spot.dataset.s = 'idle';
        busy = false;
      };
      fgo.addEventListener('click', () => {
        if (busy) return;
        busy = true;
        fgo.classList.add('loading');
        setTimeout(() => {
          fgo.classList.replace('loading', 'ok');
          setTimeout(reset, 2000);
        }, 1300);
      });
      cur.style.transform = 'translate(700px,520px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => aim(q, 0.5),
            () => typeInto(q, 'maya@northgate.com'),
            rest(2000),
            () => press(fgo, 0.5),
            rest(4800),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a single sign-on "find your workspace" screen, full viewport (min-height: 100dvh).

Layout: a pale accent gradient page with three large thin concentric rings (1px accent-tinted border) emerging from the bottom left corner, a top bar (logo left, "Contact support" link right) and one column (max 600px) starting about 70px below the bar: a 34px heading "Find your workspace", one line of copy, then a white "spotlight" card (24px radius, hairline ring, large soft shadow, 10px padding) holding a 62px search field (leading search icon, 17px text, an "Enter" key hint on the right) and a results area under it. Below the card: "Not part of a team yet? Create a workspace".

States (the card grows downward; the content swaps with a fade-up, opacity + translateY 8px, spring 480ms): idle shows "Recent on this device" with two clickable workspace rows (letter tile, name, domain, chevron). While you type, take the domain (the text after @, or the whole value), and once it looks like a domain (letters, digits, hyphens and at least one dot) wait 450ms, then show a skeleton row with shimmer for about 850ms (bars with a moving gradient, never a spinner). Known domain: a result row with an accent-gradient tile, workspace name, "domain - 148 members", an "SSO enabled" pill with a key icon and a primary "Continue with SSO" button (sheen busy state, then "Redirecting"). Unknown domain: "No workspace found for <domain>" with help text and a "Create one" button. Pressing Enter looks up immediately; an invalid value gets the red ring, a 380ms shake and a role="alert" message.

Accessibility: the results area is aria-live="polite", the field has a label (visually hidden or the heading), aria-invalid, visible focus ring (1.5px accent plus 4px soft ring), keyboard-operable rows. In a real build the SSO button redirects to the identity provider's authorize URL for that workspace. Below 760px stack the result row (pill and button wrap, button full width) and hide the key hint. Plain HTML, CSS and JS, no libraries; React-friendly structure (WorkspaceFinder, RecentList, ResultRow, SkeletonRow). Use your accent color for the tile, ring and primary button.`,
  });

  ML.add({
    id: 'app-auth-forgot',
    cat: 'app-auth',
    title: 'Forgot password flow',
    sub: 'Request, check email, set a new password',
    html: `
<div class="wrap">
  <div class="left">
    <div class="top"><span class="brand"><span class="mark">B</span>Bayside Fitness</span></div>
    <ol class="prog" aria-label="Progress"><li class="on"><i></i><span>Request</span></li><li><i></i><span>Check email</span></li><li><i></i><span>New password</span></li></ol>
    <div class="body">
      <section class="pnl on" data-p="0">
        <h1>Forgot your password?</h1>
        <p class="lead">Enter the email you use for Bayside and we will send you a reset link.</p>
        <form class="f0" novalidate>
          <label class="fl" for="ml-fgt-email">Email</label>
          <div class="field">${I(P.mail, 17)}<input id="ml-fgt-email" type="email" autocomplete="email" placeholder="you@email.com" aria-describedby="ml-fgt-email-err"></div>
          <p class="err" id="ml-fgt-email-err" role="alert"><span>Enter a valid email address.</span></p>
          <button type="submit" class="go"><span class="lbl">Send reset link</span><span class="busy">Sending link</span><span class="done">${I(P.check, 17, 2.6)}Link sent</span></button>
        </form>
        <p class="back">Remembered it? <button type="button" class="lk">Back to sign in</button></p>
      </section>
      <section class="pnl" data-p="1" aria-live="polite">
        <h1>Check your email</h1>
        <p class="lead">We sent a reset link to <b class="to">noor@baysidefitness.com</b>. It is valid for 30 minutes.</p>
        <button type="button" class="go open"><span class="lbl">${I(P.mail, 17)}Open the reset link</span></button>
        <p class="back">Nothing arrived? <button type="button" class="lk again">Send it again</button> or <button type="button" class="lk other">use another email</button></p>
      </section>
      <section class="pnl" data-p="2">
        <h1>Set a new password</h1>
        <p class="lead">Choose something you have not used here before.</p>
        <form class="f2" novalidate>
          <label class="fl" for="ml-fgt-new">New password</label>
          <div class="field">${I(P.lock, 17)}<input id="ml-fgt-new" type="password" autocomplete="new-password" placeholder="At least 8 characters" aria-describedby="ml-fgt-new-err"><button type="button" class="eye" aria-label="Show password" aria-pressed="false">${I(P.eye, 17)}${I(P.eyeOff, 17)}</button></div>
          <p class="err" id="ml-fgt-new-err" role="alert"><span>Use at least 8 characters.</span></p>
          <label class="fl" for="ml-fgt-conf">Confirm password</label>
          <div class="field">${I(P.lock, 17)}<input id="ml-fgt-conf" type="password" autocomplete="new-password" placeholder="Type it again" aria-describedby="ml-fgt-conf-err"><span class="mt">${I(P.check, 16, 2.6)}</span></div>
          <p class="err" id="ml-fgt-conf-err" role="alert"><span>Passwords do not match.</span></p>
          <button type="submit" class="go"><span class="lbl">Reset password</span><span class="busy">Updating</span><span class="done">${I(P.check, 17, 2.6)}Password updated</span></button>
        </form>
      </section>
      <section class="pnl fin" data-p="3">
        ${TICK(30)}
        <h1>Password updated</h1>
        <p class="lead">You can now sign in to Bayside Fitness with your new password.</p>
        <button type="button" class="go"><span class="lbl">Back to sign in</span></button>
      </section>
    </div>
  </div>
  <aside class="art" aria-hidden="true">
    <i class="ring r1"></i><i class="ring r2"></i>
    <span class="orb o1">${I(P.shield, 22)}</span><span class="orb o2">${I(P.clock, 20)}</span>
    <div class="gt" data-i="0"><span class="gi g0">${I(P.lock, 70, 1.6)}</span><span class="gi g1">${I(P.mail, 70, 1.6)}</span><span class="gi g2">${I(P.key, 70, 1.6)}</span><span class="gi g3">${I(P.check, 70, 2)}</span></div>
    <p class="cap"><b class="cs">Step 1 of 3</b><span class="ct">Request a reset link</span></p>
  </aside>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,.9fr);height:100%;background:var(--ml-bg)}
.d .left{display:flex;flex-direction:column;min-width:0;min-height:0;padding:28px 48px;overflow-y:auto}
.d .prog{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:34px;list-style:none}
.d .prog li{display:flex;flex-direction:column;gap:8px;font-size:12.5px;font-weight:600;color:var(--ml-muted);transition:color .3s ease}
.d .prog i{position:relative;display:block;height:4px;border-radius:99px;overflow:hidden;background:var(--ml-bar)}
.d .prog i::after{content:"";position:absolute;inset:0;background:var(--ml-accent);transform:scaleX(0);transform-origin:0 50%;transition:transform .6s var(--ml-ease)}
.d .prog li.on{color:var(--ml-ink)}
.d .prog li.on i::after{transform:none}
.d .body{width:100%;max-width:380px;margin:auto 0;padding:24px 0}
.d .body .go{margin-top:22px}
.d .back{margin-top:20px;font-size:13.5px;color:var(--ml-muted)}
.d .lead b{font-weight:600;color:var(--ml-ink)}
.d .fin{padding-top:6px}
.d .fin .okc{margin-bottom:18px}
.d .mt{display:grid;flex:none;place-items:center;width:28px;height:28px;margin-right:4px;border-radius:50%;background:#1DB954;color:#fff;opacity:0;transform:scale(.5);transition:opacity .2s ease,transform .45s var(--ml-bounce)}
.d .mt.on{opacity:1;transform:none}
.d .art{position:relative;margin:14px 14px 14px 0;border-radius:22px;overflow:hidden;background:radial-gradient(80% 60% at 70% 8%,rgba(79,163,255,.24),rgba(79,163,255,0) 62%),linear-gradient(170deg,#E3EEFF,#F4F8FF);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .ring{position:absolute;left:50%;top:44%;display:block;border-radius:50%;border:1px solid var(--ml-accent-line)}
.d .r1{width:300px;height:300px;margin:-150px 0 0 -150px}
.d .r2{width:460px;height:460px;margin:-230px 0 0 -230px;opacity:.6}
.d .gt{position:absolute;left:50%;top:44%;display:grid;place-items:center;width:176px;height:176px;margin:-88px 0 0 -88px;border-radius:46px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg);color:var(--ml-accent);animation:fgt-float 6s ease-in-out infinite}
.d .gi{grid-area:1/1;display:grid;opacity:0;transform:scale(.5) rotate(-14deg);transition:opacity .3s ease,transform .6s var(--ml-bounce)}
.d .gt[data-i="0"] .g0,.d .gt[data-i="1"] .g1,.d .gt[data-i="2"] .g2{opacity:1;transform:none}
.d .gt[data-i="3"] .g3{opacity:1;transform:none;color:#12893C}
.d .orb{position:absolute;display:grid;place-items:center;width:54px;height:54px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);color:var(--ml-accent);animation:fgt-float 6s ease-in-out infinite}
.d .o1{left:14%;top:22%;animation-delay:-2s}
.d .o2{right:13%;top:58%;animation-delay:-4s}
.d .cap{position:absolute;left:50%;bottom:26px;display:flex;flex-direction:column;align-items:center;gap:2px;transform:translateX(-50%);padding:10px 18px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);text-align:center;white-space:nowrap}
.d .cs{font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .ct{font-size:13.5px;font-weight:600;color:var(--ml-ink)}
@keyframes fgt-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .wrap{grid-template-columns:minmax(0,1fr)}
  .d .art{display:none}
  .d .left{padding:22px 20px}
  .d .body{margin:0;padding-top:28px}
}
@media (prefers-reduced-motion: reduce){.d .gt,.d .orb{animation:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const panels = [...root.querySelectorAll('.pnl')];
      const prog = [...root.querySelectorAll('.prog li')];
      const gt = $('.gt');
      const f0 = $('.f0');
      const f2 = $('.f2');
      const email = $('#ml-fgt-email');
      const np = $('#ml-fgt-new');
      const cp = $('#ml-fgt-conf');
      const mt = $('.mt');
      const g0 = f0.querySelector('.go');
      const g2 = f2.querySelector('.go');
      const caps = ['Request a reset link', 'Open the link we sent', 'Choose a new password', 'You are all set'];
      let busy = false;
      const setStep = (n) => {
        panels.forEach((p, k) => p.classList.toggle('on', k === n));
        prog.forEach((li, k) => li.classList.toggle('on', k <= Math.min(n, 2)));
        gt.dataset.i = String(n);
        $('.cs').textContent = n < 3 ? `Step ${n + 1} of 3` : 'Done';
        $('.ct').textContent = caps[n];
      };
      const mark = (input, ok) => {
        input.closest('.field').classList.toggle('bad', !ok);
        input.setAttribute('aria-invalid', String(!ok));
        return ok;
      };
      [email, np, cp].forEach((el) =>
        el.addEventListener('input', () => {
          el.closest('.field').classList.remove('bad');
          mt.classList.toggle('on', cp.value.length > 0 && cp.value === np.value);
        })
      );
      $('.eye').addEventListener('click', () => {
        const eye = $('.eye');
        const on = np.type === 'password';
        np.type = on ? 'text' : 'password';
        eye.classList.toggle('on', on);
        eye.setAttribute('aria-pressed', String(on));
        eye.setAttribute('aria-label', on ? 'Hide password' : 'Show password');
      });
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        [email, np, cp].forEach((i) => {
          i.value = '';
          i.closest('.field').classList.remove('bad', 'is-auto');
        });
        mt.classList.remove('on');
        [g0, g2].forEach((g) => g.classList.remove('loading', 'ok'));
        $('.to').textContent = 'noor@baysidefitness.com';
        busy = false;
        setStep(0);
      };
      f0.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        if (!mark(email, /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim()))) return;
        busy = true;
        g0.classList.add('loading');
        setTimeout(() => {
          g0.classList.replace('loading', 'ok');
          setTimeout(() => {
            $('.to').textContent = email.value.trim();
            g0.classList.remove('ok');
            busy = false;
            setStep(1);
          }, 600);
        }, 1000);
      });
      $('.open').addEventListener('click', () => setStep(2));
      $('.other').addEventListener('click', () => setStep(0));
      $('.again').addEventListener('click', () => {
        $('.again').textContent = 'Sent again';
        setTimeout(() => ($('.again').textContent = 'Send it again'), 1800);
      });
      f2.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        const ok = [mark(np, np.value.length >= 8), mark(cp, cp.value === np.value && cp.value.length > 0)].every(Boolean);
        if (!ok) return;
        busy = true;
        g2.classList.add('loading');
        setTimeout(() => {
          g2.classList.replace('loading', 'ok');
          setTimeout(() => {
            busy = false;
            setStep(3);
            setTimeout(reset, 3000);
          }, 600);
        }, 1000);
      });
      root.querySelectorAll('.lk').forEach((b) => b.type !== 'submit' && b.addEventListener('click', (e) => e.preventDefault()));
      setStep(0);
      cur.style.transform = 'translate(600px,620px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => aim(email, 0.6),
            () => typeInto(email, 'noor@baysidefitness.com'),
            () => press(g0, 0.55),
            rest(2300),
            () => press($('.open'), 0.5),
            rest(1000),
            () => aim(np, 0.6),
            () => typeInto(np, 'lap-swim-2026'),
            () => aim(cp, 0.6),
            () => typeInto(cp, 'lap-swim-2026'),
            () => press(g2, 0.55),
            rest(5000),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a three-step "forgot password" flow as one screen, full viewport (height: 100dvh).

Layout: grid with columns 1.1fr and .9fr. Left column (white, 48px padding): logo, a three-segment progress bar with labels (Request, Check email, New password) where each segment's accent layer grows with transform: scaleX(0 to 1) from the left over 600ms as the flow advances, and a form area (max 380px) vertically centered. Right column: a pale-accent art panel inset 14px with a 22px radius, a soft radial glow and two thin concentric rings, holding a 176px white rounded tile (46px radius, soft shadow, floating 8px up and down on 6s) whose icon morphs per step (lock, mail, key, check): the four icons are stacked in the same grid cell and the active one animates to opacity 1 and scale .5 to 1 with rotate -14deg to 0 using a slight-overshoot spring (594ms), while the others fade out. Two small floating icon tiles sit beside it and a caption card at the bottom names the step ("Step 1 of 3" and "Request a reset link").

Panels: 1) heading "Forgot your password?", email field with validation, "Send reset link" (sheen busy state) and a back-to-sign-in link. 2) "Check your email" naming the address in bold, a primary "Open the reset link" button (in production this is the emailed link, here it advances), and "Send it again" / "use another email" links. 3) "Set a new password": new password with show/hide, confirm password with a green check badge that pops in the moment both match, validation (8+ characters, passwords match) with red ring, 380ms shake and role="alert" messages, a "Reset password" button. 4) A green circle with a check that draws itself, "Password updated" and a "Back to sign in" button. Panels swap with a fade-up (opacity + translateY 8px, spring).

Accessibility: labels, aria-invalid, aria-live on the status panel, visible focus rings, prefers-reduced-motion stops the floating. Below 760px hide the art panel and keep the progress bar. Plain HTML, CSS and JS, no libraries; React-friendly structure (ResetProgress, RequestStep, SentStep, NewPasswordStep, DoneStep, StepArt). Use your accent color for the progress fill, the tile icons and the primary button.`,
  });

  ML.add({
    id: 'app-auth-waitlist',
    cat: 'app-auth',
    title: 'Waitlist join',
    sub: 'Position counts up, referral moves you ahead',
    html: `
<div class="wrap">
  <div class="left">
    <div class="top"><span class="brand"><span class="mark">H</span>Halden</span></div>
    <div class="body">
      <section class="pnl on" data-p="join">
        <p class="eyebrow"><i></i>Early access</p>
        <h1>Get paid in days, not weeks.</h1>
        <p class="lead">Halden Pay turns every invoice into a payment link your clients can settle in two taps. Join the list and we will invite you in order.</p>
        <form class="join" novalidate>
          <div class="jf"><div class="field">${I(P.mail, 17)}<input id="ml-wl-email" type="email" autocomplete="email" placeholder="you@company.com" aria-label="Email" aria-describedby="ml-wl-err"></div></div>
          <button type="submit" class="go"><span class="lbl">Join the waitlist</span><span class="busy">Joining</span><span class="done">${I(P.check, 17, 2.6)}You are in</span></button>
        </form>
        <p class="err" id="ml-wl-err" role="alert"><span>Enter a valid email so we can reach you.</span></p>
        <div class="proof"><span class="avs"><i>AL</i><i>TK</i><i>RS</i><i>HK</i></span><p><span><b class="cnt">4,812</b> people are waiting</span><small>Invites go out every Monday</small></p></div>
      </section>
      <section class="pnl" data-p="in" aria-live="polite">
        <p class="eyebrow ok"><i></i>You are on the list</p>
        <h1 class="big">#<span class="pos">4,813</span></h1>
        <p class="lead"><span class="ahead">4,812</span> people ahead of you. Each friend who joins moves you up 500 spots.</p>
        <div class="ref">
          <p class="rh"><b>Your referral link</b><span class="rn"><span class="fr">0</span> of 3 friends joined</span></p>
          <div class="rb"><code>halden.co/pay?ref=maya4k</code><button type="button" class="ghost cpy">${I(P.copy, 15)}<span>Copy</span></button></div>
          <div class="pg"><i></i></div>
        </div>
      </section>
    </div>
  </div>
  <aside class="vis" aria-hidden="true">
    <div class="pcard b"><p class="k">Collected this month</p><p class="v">$31,780</p><div class="bars"><i style="--h:.4"></i><i style="--h:.55"></i><i style="--h:.48"></i><i style="--h:.7"></i><i style="--h:.62"></i><i style="--h:.85"></i><i style="--h:1"></i></div></div>
    <div class="pcard a"><div class="ph"><span class="lg">H</span><span class="pn">Halden Pay</span></div><div class="chip"></div><p class="num">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4821</p><p class="nm">Maya Reyes<span>10/29</span></p></div>
    <div class="toast"><span class="gi">${I(P.check, 14, 2.6)}</span><p><b>Invoice #1042 paid</b><small>Northgate, just now</small></p><em>$4,800</em></div>
    <div class="you"><span>You</span><b class="yp">#4,813</b></div>
  </aside>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(0,.98fr);height:100%;background:var(--ml-bg)}
.d .left{display:flex;flex-direction:column;min-width:0;min-height:0;padding:28px 52px;overflow-y:auto}
.d .body{width:100%;max-width:470px;margin:auto 0;padding:24px 0}
.d .eyebrow{display:inline-flex;align-items:center;gap:8px;margin-bottom:16px;font-size:12px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .eyebrow i{width:8px;height:8px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft);animation:wl-ping 2.4s ease-out infinite}
.d .eyebrow.ok{color:#12893C}
.d .eyebrow.ok i{background:#1DB954;box-shadow:0 0 0 4px rgba(29,185,84,.16)}
.d .left h1{font-size:46px;line-height:1.04;letter-spacing:-.04em}
.d .left h1.big{font-size:84px;line-height:1;font-variant-numeric:tabular-nums;color:var(--ml-accent-ink)}
.d .left .lead{margin-top:16px;font-size:15.5px;line-height:1.55}
.d .join{display:flex;align-items:center;gap:8px;margin-top:26px;padding:6px;border-radius:18px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line),var(--ml-shadow)}
.d .jf{flex:1;min-width:0}
.d .jf .field{margin:0;background:var(--ml-bg);box-shadow:none}
.d .jf .field:focus-within,.d .jf .field.is-auto{box-shadow:none}
.d .join:focus-within,.d .join:has(.field.is-auto){box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft)}
.d .join .go{width:auto;flex:none;min-width:168px;height:46px;margin:0;padding:0 18px;white-space:nowrap}
.d .jf .field.bad{box-shadow:none;animation:none}
.d .join.bad{box-shadow:inset 0 0 0 1.5px #FF3B30,0 0 0 4px rgba(255,59,48,.1);animation:au-shake 380ms var(--ml-ease)}
.d .proof{display:flex;align-items:center;gap:14px;margin-top:26px}
.d .avs{display:flex}
.d .avs i{display:grid;place-items:center;width:34px;height:34px;margin-left:-8px;border-radius:50%;background:var(--ml-accent-soft);box-shadow:0 0 0 2px #fff;font-size:11px;font-weight:700;font-style:normal;color:var(--ml-accent-ink)}
.d .avs i:first-child{margin-left:0}
.d .avs i:nth-child(2){background:#D5E6FF}.d .avs i:nth-child(3){background:#C4DCFF}.d .avs i:nth-child(4){background:#FFD0CA}
.d .proof p{display:flex;flex-direction:column;font-size:14px;color:var(--ml-ink-2)}
.d .proof b{font-weight:650;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .proof small{font-size:12.5px;color:var(--ml-muted)}
.d .ref{margin-top:24px;padding:18px;border-radius:18px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .rh{display:flex;align-items:center;justify-content:space-between;font-size:14px}
.d .rn{font-size:12.5px;color:var(--ml-muted)}
.d .rb{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px;padding:6px 6px 6px 14px;border-radius:12px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .rb code{min-width:0;overflow:hidden;font:600 13.5px var(--ml-mono);color:var(--ml-ink-2);text-overflow:ellipsis;white-space:nowrap}
.d .cpy{height:36px;padding:0 12px}
.d .cpy.cp{color:#12893C}
.d .pg{height:6px;margin-top:14px;border-radius:99px;overflow:hidden;background:var(--ml-bar)}
.d .pg i{display:block;height:100%;border-radius:inherit;background:var(--ml-grad);transform:scaleX(0);transform-origin:0 50%;transition:transform .8s var(--ml-ease)}
.d .vis{position:relative;overflow:hidden;background:radial-gradient(90% 70% at 60% 20%,rgba(79,163,255,.3),rgba(79,163,255,0) 70%),linear-gradient(160deg,#FFEBE8 0%,#F2F7FF 100%)}
.d .vis::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,68,51,.16) 1px,transparent 1.3px);background-size:24px 24px;-webkit-mask-image:linear-gradient(200deg,#000,transparent 65%);mask-image:linear-gradient(200deg,#000,transparent 65%)}
.d .pcard{position:absolute;border-radius:24px;box-shadow:var(--ml-shadow-lg)}
.d .pcard.a{left:12%;top:25%;width:min(76%,370px);aspect-ratio:1.6;padding:22px 24px;display:flex;flex-direction:column;color:#fff;background:radial-gradient(120% 90% at 90% 0%,rgba(255,255,255,.28),rgba(255,255,255,0) 60%),linear-gradient(150deg,#FF7A3D 0%,#FF4433 55%,#B3150F 100%);transform:rotate(-5deg);animation:wl-float 7s ease-in-out infinite}
.d .ph{display:flex;align-items:center;gap:10px}
.d .lg{display:grid;place-items:center;width:28px;height:28px;border-radius:9px;background:rgba(255,255,255,.2);box-shadow:inset 0 0 0 1px rgba(255,255,255,.35);font-size:13px;font-weight:700}
.d .pn{font-size:15px;font-weight:650;letter-spacing:-.02em}
.d .chip{width:40px;height:30px;margin-top:auto;border-radius:7px;background:linear-gradient(135deg,rgba(255,255,255,.75),rgba(255,255,255,.35))}
.d .num{margin-top:14px;font:600 17px var(--ml-mono);letter-spacing:.06em}
.d .nm{display:flex;justify-content:space-between;margin-top:10px;font-size:13px;font-weight:600;color:rgba(255,255,255,.85)}
.d .pcard.b{left:30%;top:58%;width:min(62%,300px);padding:16px 18px;background:var(--ml-bg);transform:rotate(3deg);animation:wl-float 7s ease-in-out -3s infinite}
.d .pcard .k{font-size:12px;color:var(--ml-muted)}
.d .pcard .v{margin-top:3px;font-size:24px;font-weight:650;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
.d .bars{display:flex;align-items:flex-end;gap:6px;height:44px;margin-top:10px}
.d .bars i{flex:1;height:100%;border-radius:5px 5px 2px 2px;background:var(--ml-accent-line);transform:scaleY(var(--h));transform-origin:50% 100%}
.d .bars i:nth-child(7){background:var(--ml-accent)}
.d .toast{position:absolute;right:8%;top:11%;display:flex;align-items:center;gap:11px;padding:12px 14px;border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg);animation:wl-float 7s ease-in-out -1.5s infinite}
.d .toast p{display:flex;flex-direction:column}
.d .toast b{font-size:13px;font-weight:600}
.d .toast small{font-size:11.5px;color:var(--ml-muted)}
.d .toast em{margin-left:10px;font-size:14px;font-weight:650;font-style:normal;font-variant-numeric:tabular-nums}
.d .toast .gi{display:grid;place-items:center;width:28px;height:28px;border-radius:50%;background:rgba(29,185,84,.12);color:#12893C}
.d .you{position:absolute;left:10%;bottom:10%;display:none;align-items:center;gap:10px;padding:10px 16px;border-radius:999px;background:var(--ml-ink);color:#fff;font-size:13px;box-shadow:var(--ml-shadow-lg)}
.d .you b{font-size:15px;font-variant-numeric:tabular-nums}
.d .wrap.joined .you{display:flex;animation:au-pop 520ms var(--ml-bounce) both}
@keyframes wl-ping{0%{box-shadow:0 0 0 0 rgba(255,68,51,.35)}80%,100%{box-shadow:0 0 0 9px rgba(255,68,51,0)}}
@keyframes wl-float{0%,100%{translate:0 0}50%{translate:0 -9px}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .wrap{grid-template-columns:minmax(0,1fr)}
  .d .vis{display:none}
  .d .left{padding:22px 20px}
  .d .left h1{font-size:34px}
  .d .left h1.big{font-size:64px}
  .d .join{flex-direction:column;align-items:stretch}
  .d .join .go{width:100%}
  .d .body{margin:0;padding-top:28px}
}
@media (prefers-reduced-motion: reduce){.d .pcard,.d .toast,.d .eyebrow i{animation:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const wrap = $('.wrap');
      const form = $('.join');
      const email = $('#ml-wl-email');
      const go = $('.join .go');
      const cnt = $('.cnt');
      const pJoin = $('[data-p="join"]');
      const pIn = $('[data-p="in"]');
      const fmt = (n) => n.toLocaleString('en-US');
      let total = 4812;
      let busy = false;
      let friends = 0;
      let rolling = 0;
      const roll = (el, from, to, ms) => {
        const id = ++rolling;
        const t0 = performance.now();
        const step = (t) => {
          if (!root.isConnected || id !== rolling) return;
          const k = root.dataset.paused ? 1 : Math.min(1, (t - t0) / ms);
          el.textContent = fmt(Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))));
          if (k < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };
      const setPos = (n, animate) => {
        const cur0 = Number($('.pos').textContent.replace(/,/g, '')) || n;
        if (animate) roll($('.pos'), cur0, n, 900);
        else $('.pos').textContent = fmt(n);
        $('.ahead').textContent = fmt(n - 1);
        $('.yp').textContent = `#${fmt(n)}`;
      };
      const view = (v) => {
        pJoin.classList.toggle('on', v === pJoin);
        pIn.classList.toggle('on', v === pIn);
        wrap.classList.toggle('joined', v === pIn);
      };
      email.addEventListener('input', () => form.classList.remove('bad'));
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.value.trim());
        form.classList.toggle('bad', !ok);
        email.setAttribute('aria-invalid', String(!ok));
        if (!ok) return;
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          setTimeout(() => {
            total += 1;
            $('.pos').textContent = '0';
            view(pIn);
            setPos(total, true);
            go.classList.remove('ok');
            busy = false;
          }, 600);
        }, 1000);
      });
      let joined = false;
      $('.cpy').addEventListener('click', () => {
        const b = $('.cpy');
        const s = b.querySelector('span');
        try {
          if (navigator.clipboard) navigator.clipboard.writeText('halden.co/pay?ref=maya4k').catch(() => {});
        } catch (e) {}
        b.classList.add('cp');
        s.textContent = 'Copied';
        setTimeout(() => {
          b.classList.remove('cp');
          s.textContent = 'Copy';
        }, 1600);
        if (!joined) {
          joined = true;
          setTimeout(() => {
            friends = 1;
            $('.fr').textContent = '1';
            $('.pg i').style.transform = 'scaleX(.34)';
            setPos(Math.max(2, total - 500), true);
          }, 1500);
        }
      });
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        email.value = '';
        form.classList.remove('bad', 'is-auto');
        email.closest('.field').classList.remove('is-auto');
        go.classList.remove('loading', 'ok');
        $('.fr').textContent = '0';
        $('.pg i').style.transform = '';
        joined = false;
        friends = 0;
        busy = false;
        rolling++;
        view(pJoin);
      };
      (async () => {
        while (root.isConnected) {
          await wait(2200);
          total += 1 + Math.floor(Math.random() * 3);
          cnt.textContent = fmt(total);
        }
      })();
      cur.style.transform = 'translate(500px,640px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => aim(email, 0.5),
            () => typeInto(email, 'maya@halden.co'),
            () => press(go, 0.5),
            rest(3400),
            () => press($('.cpy'), 0.5),
            rest(4600),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a product waitlist page with a position counter and referral loop, full viewport (height: 100dvh).

Layout: two columns (1.02fr / .98fr). Left (white, 52px padding, content max 470px, vertically centered): logo, a small uppercase eyebrow with a pinging accent dot ("Early access"), a 46px heading "Get paid in days, not weeks.", a 15.5px paragraph, an inline join form (one rounded 18px container with a hairline ring and soft shadow holding an email input and a primary "Join the waitlist" button; the container shows the focus ring and the error ring, not the input), and social proof: four overlapping initials avatars, "4,812 people are waiting" with a tabular-number count that increases by 1 to 3 every 2.2s, and "Invites go out every Monday". Right (full-bleed pale-accent gradient with a dot grid faded out diagonally): a tilted (-5deg) accent-gradient payment card (logo, chip, masked number, name and expiry), a smaller white "Collected this month" card with a 7-bar chart behind it (+3deg), and a floating "Invoice #1042 paid" toast. All three float 9px up and down on a 7s loop with staggered negative delays (use the translate property so rotations stay).

Joined state: submitting (valid email) shows a sheen on the button, then swaps the left panel (fade-up) to a huge 84px "#4,813" that counts up from 0 over 900ms with an ease-out cubic, "4,812 people ahead of you. Each friend who joins moves you up 500 spots", and a referral card: link in monospace, a Copy button that flips to a green "Copied" for 1.6s, "0 of 3 friends joined" and a progress bar that fills with transform: scaleX. Copying simulates a friend joining 1.5s later: the bar goes to 34% and the position counts down by 500. A dark pill "You #4,813" pops in on the right visual. Invalid email: red ring, 380ms shake, role="alert" message.

Accessibility: aria-label on the input, aria-live on the joined panel, visible focus rings, prefers-reduced-motion stops floating and pinging. Below 760px hide the right visual and stack the form. Plain HTML, CSS and JS, no libraries; React-friendly structure (WaitlistForm, SocialProof, PositionCard, ReferralCard, ProductVisual). Use your accent color for the card, the dot and the buttons.`,
  });

  ML.add({
    id: 'app-auth-invite',
    cat: 'app-auth',
    title: 'Invite accept',
    sub: 'Accept the invite and your avatar joins in',
    html: `
<div class="wrap">
  <div class="ban" aria-hidden="true">
    <span class="a" style="--x:4%;--y:38px;--s:54px;--d:0">PN</span><span class="a t2" style="--x:13%;--y:132px;--s:40px;--d:2">TL</span><span class="a" style="--x:21%;--y:56px;--s:64px;--d:4">AT</span><span class="a t2" style="--x:31%;--y:154px;--s:36px;--d:1">DO</span><span class="a" style="--x:38%;--y:22px;--s:44px;--d:3">HK</span><span class="a t3" style="--x:57%;--y:20px;--s:42px;--d:5">LO</span><span class="a" style="--x:66%;--y:132px;--s:58px;--d:2">SW</span><span class="a t2" style="--x:74%;--y:36px;--s:50px;--d:6">JW</span><span class="a" style="--x:84%;--y:120px;--s:40px;--d:1">NH</span><span class="a t3" style="--x:90%;--y:32px;--s:58px;--d:4">IC</span>
    <span class="a you" style="--x:47.5%;--y:14px;--s:50px;--d:0">KM</span>
  </div>
  <main class="card" aria-label="Workspace invitation">
    <div class="pair" aria-hidden="true"><span class="pa">PN</span><span class="ar">${I(P.arrow, 18)}</span><span class="ws">M</span></div>
    <section class="pnl on" data-p="inv">
      <h1><b>Priya Nair</b> invited you to join <b>Meridian Foods</b></h1>
      <p class="lead dl">Collaborate on menus, suppliers and orders with your team.</p>
      <div class="meta"><span>${I(P.users, 15)}<em class="mc">27</em> members</span><span>${I(P.shield, 15)}Editor role</span><span>${I(P.clock, 15)}Expires in 5 days</span></div>
      <form class="form" novalidate>
        <div class="who">${I(P.mail, 16)}<span>kwame@meridianfoods.com</span><i>Invited email</i></div>
        <label class="fl" for="ml-inv-name">Full name</label>
        <div class="field">${I(P.user, 17)}<input id="ml-inv-name" autocomplete="name" placeholder="Your name" aria-describedby="ml-inv-name-err"></div>
        <p class="err" id="ml-inv-name-err" role="alert"><span>Enter your full name.</span></p>
        <label class="fl" for="ml-inv-pass">Create a password</label>
        <div class="field">${I(P.lock, 17)}<input id="ml-inv-pass" type="password" autocomplete="new-password" placeholder="At least 8 characters" aria-describedby="ml-inv-pass-err"><button type="button" class="eye" aria-label="Show password" aria-pressed="false">${I(P.eye, 17)}${I(P.eyeOff, 17)}</button></div>
        <p class="err" id="ml-inv-pass-err" role="alert"><span>Use at least 8 characters.</span></p>
        <button type="submit" class="go"><span class="lbl">Accept invite</span><span class="busy">Joining</span><span class="done">${I(P.check, 17, 2.6)}Joined</span></button>
        <button type="button" class="lk dec">Decline invitation</button>
      </form>
    </section>
    <section class="pnl fin" data-p="ok" aria-live="polite">
      ${TICK(30)}
      <h1>You joined Meridian Foods</h1>
      <p class="lead">Priya and 26 others are online. Your seat is ready.</p>
      <div class="row"><span class="avs"><i>PN</i><i>TL</i><i>AT</i><i>DO</i><i class="me">KM</i></span><span class="tag">You are member 28</span></div>
      <button type="button" class="go"><span class="lbl">Open workspace</span></button>
    </section>
  </main>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{position:relative;display:flex;flex-direction:column;height:100%;overflow-y:auto;background:var(--ml-surface)}
.d .ban{position:relative;flex:none;height:clamp(236px,36%,360px);overflow:hidden;background:radial-gradient(70% 90% at 80% 0%,rgba(79,163,255,.5),rgba(79,163,255,0) 60%),linear-gradient(160deg,var(--ml-accent) 0%,var(--ml-accent-ink) 100%)}
.d .ban::before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.16) 1px,transparent 1.2px);background-size:22px 22px;-webkit-mask-image:linear-gradient(180deg,#000,transparent 85%);mask-image:linear-gradient(180deg,#000,transparent 85%)}
.d .a{position:absolute;left:var(--x);top:var(--y);display:grid;place-items:center;width:var(--s);height:var(--s);border-radius:50%;background:#fff;box-shadow:0 0 0 3px rgba(255,255,255,.3),0 10px 24px rgba(0,30,90,.25);font-size:calc(var(--s) * .32);font-weight:700;color:var(--ml-accent-ink);animation:inv-float 7s ease-in-out infinite;animation-delay:calc(var(--d) * -1s)}
.d .a.t2{background:#FFF0EE}
.d .a.t3{background:#FFF0ED}
.d .a.you{opacity:0;scale:.4;background:var(--ml-grad);color:#fff;box-shadow:0 0 0 4px #fff,0 12px 28px rgba(0,30,90,.3);transition:opacity .3s ease,scale .6s var(--ml-bounce)}
.d .wrap.joined .a.you{opacity:1;scale:1}
.d .card{position:relative;flex:none;width:calc(100% - 40px);max-width:460px;margin:-66px auto 28px;padding:0 30px 26px;border-radius:24px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg)}
.d .pair{display:flex;align-items:center;justify-content:center;gap:12px;height:68px;margin-top:-34px}
.d .pa,.d .ws{display:grid;place-items:center;width:68px;height:68px;box-shadow:0 0 0 5px #fff,var(--ml-shadow)}
.d .pa{border-radius:50%;background:var(--ml-accent-soft);font-size:20px;font-weight:700;color:var(--ml-accent-ink)}
.d .ws{border-radius:20px;background:var(--ml-grad);font-size:26px;font-weight:700;color:#fff}
.d .ar{display:grid;place-items:center;width:30px;height:30px;border-radius:50%;background:var(--ml-surface);color:var(--ml-muted)}
.d .card h1{margin-top:18px;font-size:24px;line-height:1.2;text-align:center;text-wrap:balance}
.d .card h1 b{font-weight:650}
.d .card .lead{text-align:center}
.d .meta{display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-top:16px}
.d .meta span{display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:999px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);font-size:12.5px;font-weight:500;color:var(--ml-ink-2)}
.d .meta svg{color:var(--ml-accent)}
.d .meta em{font-style:normal;font-variant-numeric:tabular-nums}
.d .who{display:flex;align-items:center;gap:10px;margin-top:20px;padding:10px 14px;border-radius:12px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);font-size:13.5px;font-weight:600;color:var(--ml-accent-ink)}
.d .who i{margin-left:auto;font-size:11.5px;font-style:normal;font-weight:500;color:var(--ml-muted)}
.d .form .fl:first-of-type{margin-top:12px}
.d .form .go{margin-top:18px}
.d .dec{display:block;margin:14px auto 0;font-size:13.5px;color:var(--ml-muted)}
.d .form.no{opacity:.45;pointer-events:none}
.d .fin{padding-top:20px;text-align:center}
.d .fin .okc{margin:0 auto 14px}
.d .fin h1{margin-top:0}
.d .fin .row{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:20px}
.d .avs{display:flex}
.d .avs i{display:grid;place-items:center;width:36px;height:36px;margin-left:-8px;border-radius:50%;background:var(--ml-accent-soft);box-shadow:0 0 0 2px #fff;font-size:11.5px;font-weight:700;font-style:normal;color:var(--ml-accent-ink)}
.d .avs i:first-child{margin-left:0}
.d .avs i.me{background:var(--ml-grad);color:#fff;animation:au-pop 520ms var(--ml-bounce) .5s both}
.d .tag{padding:5px 10px;border-radius:999px;background:rgba(29,185,84,.1);font-size:12px;font-weight:600;color:#12893C}
.d .fin .go{margin-top:22px}
@keyframes inv-float{0%,100%{translate:0 0}50%{translate:0 -9px}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .ban{height:190px}
  .d .a:nth-child(n+7):not(.you){display:none}
  .d .card{width:calc(100% - 28px);padding:0 20px 22px}
  .d .card h1{font-size:21px}
}
@media (prefers-reduced-motion: reduce){.d .a{animation:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const wrap = $('.wrap');
      const form = $('.form');
      const name = $('#ml-inv-name');
      const pass = $('#ml-inv-pass');
      const go = $('.form .go');
      const pInv = $('[data-p="inv"]');
      const pOk = $('[data-p="ok"]');
      const eye = $('.eye');
      let busy = false;
      let declT = 0;
      const mark = (input, ok) => {
        input.closest('.field').classList.toggle('bad', !ok);
        input.setAttribute('aria-invalid', String(!ok));
        return ok;
      };
      const view = (v) => {
        pInv.classList.toggle('on', v === pInv);
        pOk.classList.toggle('on', v === pOk);
        wrap.classList.toggle('joined', v === pOk);
        $('.mc').textContent = v === pOk ? '28' : '27';
      };
      [name, pass].forEach((el) => el.addEventListener('input', () => el.closest('.field').classList.remove('bad')));
      eye.addEventListener('click', () => {
        const on = pass.type === 'password';
        pass.type = on ? 'text' : 'password';
        eye.classList.toggle('on', on);
        eye.setAttribute('aria-pressed', String(on));
        eye.setAttribute('aria-label', on ? 'Hide password' : 'Show password');
      });
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        clearTimeout(declT);
        [name, pass].forEach((i) => {
          i.value = '';
          i.closest('.field').classList.remove('bad', 'is-auto');
        });
        go.classList.remove('loading', 'ok');
        form.classList.remove('no');
        $('.dl').textContent = 'Collaborate on menus, suppliers and orders with your team.';
        busy = false;
        view(pInv);
      };
      $('.dec').addEventListener('click', () => {
        form.classList.add('no');
        $('.dl').textContent = 'You declined this invitation. Priya has been notified.';
        declT = setTimeout(reset, 3200);
      });
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        if (![mark(name, name.value.trim().length > 1), mark(pass, pass.value.length >= 8)].every(Boolean)) return;
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          setTimeout(() => {
            view(pOk);
            setTimeout(reset, 3600);
          }, 600);
        }, 1100);
      });
      cur.style.transform = 'translate(700px,600px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => aim(name, 0.6),
            () => typeInto(name, 'Kwame Mensah'),
            () => aim(pass, 0.6),
            () => typeInto(pass, 'harvest-table-9'),
            rest(300),
            () => press(go, 0.55),
            rest(5600),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a workspace invitation acceptance screen, full viewport (min-height: 100dvh, the page scrolls when short).

Layout: a 236px banner across the top (your accent gradient with a lighter radial glow top right and a faint dot grid faded toward the bottom) holding about ten initials avatars (36 to 64px circles in white, pale-accent and light-accent tints with a soft ring and shadow) scattered in a loose wave, each floating 9px up and down on a 7s loop with staggered negative delays (use the translate property). Below it a white card (max 460px, 24px radius, hairline ring, large soft shadow) overlaps the banner by 66px. At its top edge, centered, sits a pair of 68px items with a white 5px ring: the inviter's initials avatar, a small arrow circle, and the workspace logo tile (20px radius, accent gradient). Then a centered 24px heading with the inviter and the workspace in semibold ("Priya Nair invited you to join Meridian Foods"), one line of copy, a row of three pills (27 members, Editor role, Expires in 5 days), a highlighted line showing the invited email, Full name and "Create a password" fields (with show/hide), a full-width primary "Accept invite" button and a quiet "Decline invitation" link.

Motion and states: accepting shows a sheen across the button (no spinner) and a green "Joined", then the card content swaps (fade-up, spring) to a success view: a green circle with a drawn check, "You joined Meridian Foods", a row of overlapping avatars where YOUR avatar pops in last (scale .6 to 1.06 to 1, 520ms) with a "You are member 28" pill, and an Open workspace button; at the same time a new gradient avatar with your initials scales into the banner (scale .4 to 1 with a slight-overshoot spring) and the member count changes from 27 to 28. Decline dims the form and shows a confirmation line. Validation: name 2+ characters, password 8+, red ring, 380ms shake, role="alert" messages and aria-invalid.

Accessibility: labels on all fields, the invited email shown as read-only text, aria-live on the success view, visible focus rings, prefers-reduced-motion stops the floating avatars. Below 760px shorten the banner to 190px and keep six avatars. Plain HTML, CSS and JS, no libraries; React-friendly structure (InviteBanner, InviteCard, AcceptForm, JoinedView). Use your accent color for the banner, the logo tile and the primary button.`,
  });

  ML.add({
    id: 'app-auth-picker',
    cat: 'app-auth',
    title: 'Account picker',
    sub: 'Saved accounts, password unfolds inline',
    html: `
<div class="wrap">
  <section class="lf">
    <div class="top"><span class="brand"><span class="mark">T</span>Tidewater Realty</span></div>
    <div class="msg"><h1 class="t">Choose an account</h1><p class="lead s">to continue to Tidewater Realty</p></div>
    <svg class="sky" viewBox="0 0 420 200" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <circle cx="318" cy="70" r="30" fill="#FFF0EE"/>
      <g fill="#FFF0ED"><rect x="14" y="96" width="58" height="104" rx="5"/><rect x="150" y="70" width="64" height="130" rx="5"/><rect x="292" y="104" width="54" height="96" rx="5"/></g>
      <g fill="#FFD0CA"><rect x="82" y="120" width="52" height="80" rx="5"/><rect x="224" y="108" width="56" height="92" rx="5"/><rect x="356" y="128" width="52" height="72" rx="5"/></g>
      <g fill="#fff" opacity=".85"><rect x="26" y="112" width="8" height="8" rx="2"/><rect x="42" y="112" width="8" height="8" rx="2"/><rect x="26" y="130" width="8" height="8" rx="2"/><rect x="162" y="88" width="8" height="8" rx="2"/><rect x="178" y="88" width="8" height="8" rx="2"/><rect x="162" y="106" width="8" height="8" rx="2"/><rect x="178" y="124" width="8" height="8" rx="2"/><rect x="304" y="120" width="8" height="8" rx="2"/><rect x="94" y="136" width="8" height="8" rx="2"/><rect x="236" y="124" width="8" height="8" rx="2"/></g>
      <path d="M0 176 C 40 166, 70 186, 110 176 S 180 166, 220 176 S 300 186, 340 176 S 400 168, 420 174 V200 H0Z" fill="#FF4433" opacity=".16"/>
    </svg>
  </section>
  <section class="rt">
    <div class="list">
      <ul class="accs"></ul>
      <p class="foot"><button type="button" class="lk rm">Remove an account</button></p>
    </div>
  </section>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);height:100%;background:var(--ml-bg)}
.d .lf{position:relative;display:flex;flex-direction:column;min-width:0;padding:28px 44px;overflow:hidden}
.d .msg{margin-top:56px}
.d .msg h1{font-size:34px}
.d .msg .lead{font-size:15px}
.d .sky{position:absolute;left:0;bottom:0;width:100%;height:46%}
.d .rt{display:flex;min-width:0;min-height:0;padding:28px;overflow-y:auto;background:var(--ml-surface);border-left:1px solid var(--ml-line)}
.d .list{width:100%;max-width:440px;margin:auto}
.d .accs{display:flex;flex-direction:column;gap:10px;list-style:none}
.d .ac{border-radius:16px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow);transition:box-shadow .3s ease,opacity .35s ease,transform .45s var(--ml-ease)}
.d .ac.open{box-shadow:inset 0 0 0 1.5px var(--ml-accent),0 0 0 4px var(--ml-accent-soft),var(--ml-shadow)}
.d .ac.dim{opacity:.4;pointer-events:none}
.d .ac.gone{opacity:0;transform:translateX(16px)}
.d .rwt{position:relative;display:flex;align-items:center}
.d .hd{display:flex;flex:1;align-items:center;gap:13px;min-width:0;padding:13px 14px;border:0;border-radius:16px;background:none;text-align:left;cursor:pointer;transition:background-color .2s ease,transform 90ms ease-out}
.d .hd:hover{background:var(--ml-surface)}
.d .hd.press{transform:scale(.985)}
.d .av{position:relative;display:grid;flex:none;place-items:center;width:44px;height:44px;border-radius:50%;background:var(--ml-accent-soft);font-size:14px;font-weight:700;color:var(--ml-accent-ink)}
.d .av.v2{background:#D5E6FF}.d .av.v3{background:#C4DCFF}
.d .av.ad{background:var(--ml-bg);box-shadow:inset 0 0 0 1.5px var(--ml-bar);color:var(--ml-muted)}
.d .hd p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .hd b{font-size:14.5px;font-weight:600}
.d .hd small{overflow:hidden;font-size:12.5px;color:var(--ml-muted);text-overflow:ellipsis;white-space:nowrap}
.d .st{display:inline-flex;align-items:center;gap:6px;padding:4px 9px;border-radius:999px;background:var(--ml-surface);font-size:11.5px;font-weight:600;color:var(--ml-muted);white-space:nowrap}
.d .st.on{background:rgba(29,185,84,.1);color:#12893C}
.d .st i{width:6px;height:6px;border-radius:50%;background:currentColor}
.d .chv{color:var(--ml-bar);transition:transform .35s var(--ml-ease),color .2s ease}
.d .ac.open .chv{transform:rotate(90deg);color:var(--ml-accent)}
.d .x{position:absolute;right:12px;display:grid;place-items:center;width:30px;height:30px;border:0;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);color:#D70015;cursor:pointer;opacity:0;pointer-events:none;transform:scale(.7);transition:opacity .2s ease,transform .35s var(--ml-bounce)}
.d .list.edit .x{opacity:1;pointer-events:auto;transform:none}
.d .list.edit .st,.d .list.edit .chv{opacity:0}
.d .ex{display:grid;grid-template-rows:0fr;transition:grid-template-rows .45s var(--ml-ease)}
.d .ac.open .ex{grid-template-rows:1fr}
.d .ex > div{min-height:0;overflow:hidden;visibility:hidden;transition:visibility 0s .45s}
.d .ac.open .ex > div{visibility:visible;transition-delay:0s}
.d .pf{padding:2px 14px 16px}
.d .pf .field{margin-top:0;height:44px}
.d .pf .field + .field{margin-top:8px}
.d .pf .go{height:42px;margin-top:10px;font-size:14px}
.d .pf .err{padding:0}
.d .foot{margin-top:16px;font-size:13.5px;text-align:center}
.d .ac::after{content:"";position:absolute}
.d .bar2{display:block;height:3px;margin:0 14px 12px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .wrap{grid-template-columns:minmax(0,1fr);grid-template-rows:auto minmax(0,1fr);overflow-y:auto}
  .d .lf{padding:22px 20px 26px}
  .d .msg{margin-top:26px}
  .d .msg h1{font-size:28px}
  .d .sky{display:none}
  .d .rt{padding:20px 16px;border-left:0;overflow:visible}
  .d .list{margin:0 auto}
  .d .st{display:none}
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const data = [
        { n: 'Aiko Tan', e: 'aiko@tidewaterrealty.com', i: 'AT', v: '', on: false },
        { n: 'Daniel Okafor', e: 'daniel@okaforhomes.com', i: 'DO', v: 'v2', on: true },
        { n: 'Luis Ortega', e: 'luis@tidewaterrealty.com', i: 'LO', v: 'v3', on: false },
      ];
      const list = $('.list');
      const ul = $('.accs');
      const ico = {
        chev: '<svg class="chv" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
        x: '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
        lock: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
        mail: '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
        plus: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
        check: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>',
      };
      const field = (id, type, ph, icon, auto) => `<div class="field">${icon}<input id="${id}" type="${type}" autocomplete="${auto}" placeholder="${ph}" aria-label="${ph}"></div>`;
      let busy = false;
      const build = () => {
        ul.innerHTML =
          data
            .map(
              (a, k) =>
                `<li class="ac" data-k="${k}"><div class="rwt"><button type="button" class="hd" aria-expanded="false"><span class="av ${a.v}">${a.i}</span><p><b>${a.n}</b><small>${a.e}</small></p><span class="st${a.on ? ' on' : ''}">${a.on ? '<i></i>Signed in' : 'Signed out'}</span>${ico.chev}</button><button type="button" class="x" aria-label="Remove ${a.n}">${ico.x}</button></div><div class="ex"><div><form class="pf" novalidate>${field(`ml-pck-${k}`, 'password', `Password for ${a.n.split(' ')[0]}`, ico.lock, 'current-password')}<p class="err" role="alert"><span>Enter your password.</span></p><button type="submit" class="go"><span class="lbl">Continue</span><span class="busy">Signing in</span><span class="done">${ico.check}Signed in</span></button></form></div></div></li>`
            )
            .join('') +
          `<li class="ac add"><div class="rwt"><button type="button" class="hd" aria-expanded="false"><span class="av ad">${ico.plus}</span><p><b>Use another account</b><small>Sign in with a different email</small></p>${ico.chev}</button></div><div class="ex"><div><form class="pf" novalidate>${field('ml-pck-em', 'email', 'Work email', ico.mail, 'email')}${field('ml-pck-pw', 'password', 'Password', ico.lock, 'current-password')}<p class="err" role="alert"><span>Enter your email and password.</span></p><button type="submit" class="go"><span class="lbl">Continue</span><span class="busy">Signing in</span><span class="done">${ico.check}Signed in</span></button></form></div></div></li>`;
      };
      const openRow = (li, on) => {
        root.querySelectorAll('.ac').forEach((r) => {
          const o = r === li && on;
          r.classList.toggle('open', o);
          r.querySelector('.hd').setAttribute('aria-expanded', String(o));
        });
      };
      const signIn = (li, who) => {
        if (busy) return;
        busy = true;
        const go = li.querySelector('.go');
        const hd = li.querySelector('.hd');
        if (go) go.classList.add('loading');
        li.classList.add('open');
        setTimeout(() => {
          if (go) go.classList.replace('loading', 'ok');
          root.querySelectorAll('.ac').forEach((r) => r !== li && r.classList.add('dim'));
          $('.t').textContent = `Welcome back, ${who}`;
          $('.s').textContent = 'Opening Tidewater Realty';
          setTimeout(reset, 2600);
        }, 1100);
      };
      ul.addEventListener('click', (e) => {
        const x = e.target.closest('.x');
        const hd = e.target.closest('.hd');
        if (x) {
          const li = x.closest('.ac');
          data.splice(Number(li.dataset.k), 1);
          li.classList.add('gone');
          setTimeout(() => {
            const open = [...root.querySelectorAll('.ac.open')].length;
            build();
            if (open) openRow(null, false);
            if (list.classList.contains('edit') && !data.length) list.classList.remove('edit');
          }, 300);
          return;
        }
        if (!hd || list.classList.contains('edit') || busy) return;
        const li = hd.closest('.ac');
        const k = li.dataset.k;
        if (k !== undefined && data[Number(k)].on) return signIn(li, data[Number(k)].n.split(' ')[0]);
        openRow(li, !li.classList.contains('open'));
      });
      ul.addEventListener('submit', (e) => {
        e.preventDefault();
        const li = e.target.closest('.ac');
        const ins = [...li.querySelectorAll('input')];
        const ok = ins.every((i) => i.value.trim().length > 0);
        ins.forEach((i) => {
          i.closest('.field').classList.toggle('bad', !i.value.trim());
          i.setAttribute('aria-invalid', String(!i.value.trim()));
        });
        if (!ok) return;
        const k = li.dataset.k;
        signIn(li, k !== undefined ? data[Number(k)].n.split(' ')[0] : ins[0].value.split('@')[0].replace(/^./, (c) => c.toUpperCase()));
      });
      ul.addEventListener('input', (e) => e.target.closest('.field') && e.target.closest('.field').classList.remove('bad'));
      $('.rm').addEventListener('click', () => {
        list.classList.toggle('edit');
        $('.rm').textContent = list.classList.contains('edit') ? 'Done' : 'Remove an account';
      });
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        data.length = 0;
        data.push(
          { n: 'Aiko Tan', e: 'aiko@tidewaterrealty.com', i: 'AT', v: '', on: false },
          { n: 'Daniel Okafor', e: 'daniel@okaforhomes.com', i: 'DO', v: 'v2', on: true },
          { n: 'Luis Ortega', e: 'luis@tidewaterrealty.com', i: 'LO', v: 'v3', on: false }
        );
        build();
        list.classList.remove('edit');
        $('.rm').textContent = 'Remove an account';
        $('.t').textContent = 'Choose an account';
        $('.s').textContent = 'to continue to Tidewater Realty';
        busy = false;
      };
      build();
      cur.style.transform = 'translate(760px,620px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => aim(root.querySelectorAll('.hd')[1], 0.5),
            rest(400),
            () => press(root.querySelectorAll('.hd')[0], 0.5),
            rest(700),
            () => aim(root.querySelector('#ml-pck-0'), 0.6),
            () => typeInto(root.querySelector('#ml-pck-0'), 'tidewater-24'),
            () => press(root.querySelector('.ac[data-k="0"] .go'), 0.55),
            rest(5000),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build an account picker ("choose an account") screen for returning users, full viewport (height: 100dvh).

Layout: two columns (.9fr / 1.1fr). Left (white, 44px padding): logo, a 34px heading "Choose an account", one line "to continue to <Product>", and at the bottom an inline-SVG city skyline (rounded rectangles in three light accent tints, tiny white window squares, a pale sun circle and a translucent wave line along the bottom) filling the lower 46% of the column. Right (your surface tint with a left hairline): a centered list (max 440px) of account cards on white (16px radius, hairline ring, soft shadow, 10px gap): 44px initials avatar in a blue tint, name, email, a status pill ("Signed in" green with a dot, "Signed out" grey) and a chevron; a final "Use another account" card with a dashed-look plus avatar; and a "Remove an account" text link under the list.

Behavior: clicking a signed-out account opens that card (only one open at a time): a password form unfolds inside it with grid-template-rows 0fr to 1fr (450ms), the card gets a 1.5px accent ring plus a 4px soft ring and the chevron rotates 90deg. "Use another account" unfolds email and password fields. Clicking a signed-in account continues immediately. Submitting shows a sheen on the Continue button (no spinner), turns it green with "Signed in", dims the other cards to 40% and changes the heading to "Welcome back, <first name>". Remove mode swaps the pills and chevrons for round red remove buttons that pop in (scale .7 to 1, slight overshoot); removing slides the card out (opacity and translateX 16px, 300ms) and re-renders the list. Empty password: red ring, 380ms shake, role="alert" message.

Accessibility: each card header is a button with aria-expanded, fields have aria-labels, visible focus rings, prefers-reduced-motion removes the transitions. Below 760px stack the columns (heading above the list), hide the skyline and the status pills. Plain HTML, CSS and JS, no libraries; render the list from data; React-friendly structure (AccountList, AccountCard, PasswordForm, AddAccountCard). Use your accent color for the ring, avatars and primary button.`,
  });

  ML.add({
    id: 'app-auth-expired',
    cat: 'app-auth',
    title: 'Session expired re-auth',
    sub: 'Blurred app clears when you sign back in',
    html: `
<div class="wrap">
  <div class="app" aria-hidden="true">
    <aside class="sd"><div class="brand"><span class="mark">H</span>Halden</div>
      <p class="nv on">Overview</p><p class="nv">Projects</p><p class="nv">Clients</p><p class="nv">Invoices</p><p class="nv">Reports</p>
    </aside>
    <div class="mn">
      <div class="tp"><b>Overview</b><span class="av">MR</span></div>
      <div class="pg">
        <h2>Good afternoon, Maya</h2>
        <div class="kp"><div><small>Revenue</small><b>$48,210</b></div><div><small>Active projects</small><b>23</b></div><div><small>Hours logged</small><b>1,284</b></div><div><small>Outstanding</small><b>$6,930</b></div></div>
        <div class="cc"><small>Revenue, last 12 weeks</small><div class="bars"><i style="--h:.4"></i><i style="--h:.5"></i><i style="--h:.46"></i><i style="--h:.6"></i><i style="--h:.55"></i><i style="--h:.7"></i><i style="--h:.66"></i><i style="--h:.78"></i><i style="--h:.72"></i><i style="--h:.86"></i><i style="--h:.82"></i><i style="--h:1"></i></div></div>
      </div>
    </div>
  </div>
  <div class="veil"></div>
  <section class="modal" role="dialog" aria-modal="true" aria-labelledby="ml-exp-t">
    <span class="lt">${I(P.lock, 24)}</span>
    <h1 id="ml-exp-t">Your session expired</h1>
    <p class="lead">For your security, Halden signs you out after 30 minutes of inactivity. Your work is saved.</p>
    <div class="acct"><span class="av">MR</span><p><b>Maya Reyes</b><small>maya@halden.co</small></p><span class="ago">${I(P.clock, 13)}32 min ago</span></div>
    <form class="form" novalidate>
      <label class="fl" for="ml-exp-pass">Password</label>
      <div class="field">${I(P.lock, 17)}<input id="ml-exp-pass" type="password" autocomplete="current-password" placeholder="Enter your password" aria-describedby="ml-exp-err"><button type="button" class="eye" aria-label="Show password" aria-pressed="false">${I(P.eye, 17)}${I(P.eyeOff, 17)}</button></div>
      <p class="err" id="ml-exp-err" role="alert"><span>Enter your password to continue.</span></p>
      <button type="submit" class="go"><span class="lbl">Sign back in</span><span class="busy">Signing in</span><span class="done">${I(P.check, 17, 2.6)}Signed in</span></button>
    </form>
    <p class="alts"><button type="button" class="lk">Switch account</button><i></i><button type="button" class="lk">Sign out</button></p>
  </section>
  <div class="toast" role="status">${I(P.check, 15, 2.6)}<span>Welcome back, Maya. Picking up where you left off.</span></div>
  ${CURSOR}
</div>`,
    css: `${BASE}
.d .wrap{position:relative;height:100%;overflow:hidden;background:var(--ml-surface)}
.d .app{position:absolute;inset:0;display:grid;grid-template-columns:210px minmax(0,1fr);filter:blur(7px);transform:scale(1.03);transition:filter .9s var(--ml-ease),transform .9s var(--ml-ease)}
.d .wrap.live .app{filter:none;transform:none}
.d .sd{padding:18px 14px;background:var(--ml-bg);border-right:1px solid var(--ml-line)}
.d .sd .brand{padding:2px 6px 22px}
.d .nv{padding:10px 12px;border-radius:10px;font-size:14px;font-weight:500;color:var(--ml-ink-2)}
.d .nv.on{background:var(--ml-accent-soft);font-weight:600;color:var(--ml-accent-ink)}
.d .mn{display:flex;flex-direction:column;min-width:0}
.d .tp{display:flex;align-items:center;justify-content:space-between;height:62px;padding:0 28px;background:rgba(255,255,255,.72);border-bottom:1px solid var(--ml-line)}
.d .tp b{font-size:14px;font-weight:600}
.d .av{display:grid;flex:none;place-items:center;width:34px;height:34px;border-radius:50%;background:var(--ml-accent-soft);font-size:12px;font-weight:650;color:var(--ml-accent-ink)}
.d .pg{display:flex;flex-direction:column;gap:18px;padding:24px 28px}
.d .pg h2{font-size:24px;font-weight:650;letter-spacing:-.03em}
.d .kp{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
.d .kp div,.d .cc{padding:16px;border-radius:14px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow)}
.d .kp small,.d .cc small{display:block;font-size:12.5px;color:var(--ml-muted)}
.d .kp b{display:block;margin-top:8px;font-size:26px;font-weight:650;letter-spacing:-.03em}
.d .cc{height:230px;display:flex;flex-direction:column}
.d .bars{display:flex;flex:1;align-items:flex-end;gap:10px;margin-top:14px}
.d .bars i{flex:1;height:100%;border-radius:6px 6px 3px 3px;background:var(--ml-accent-line);transform:scaleY(var(--h));transform-origin:50% 100%}
.d .bars i:last-child{background:var(--ml-accent)}
.d .veil{position:absolute;inset:0;background:rgba(244,247,252,.5);transition:opacity .7s ease}
.d .wrap.live .veil{opacity:0}
.d .modal{position:absolute;left:50%;top:50%;width:min(92%,430px);max-height:94%;padding:28px 30px 24px;overflow-y:auto;border-radius:24px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px rgba(227,233,242,.8),var(--ml-shadow-lg);text-align:center;transform:translate(-50%,-50%);transition:opacity .4s ease,transform var(--ml-spring-dur) var(--ml-spring),visibility 0s}
.d .wrap.live .modal{visibility:hidden;opacity:0;transform:translate(-50%,-47%) scale(.97);transition:opacity .4s ease,transform var(--ml-spring-dur) var(--ml-spring),visibility 0s .4s}
.d .lt{position:relative;display:grid;place-items:center;width:58px;height:58px;margin:0 auto 16px;border-radius:18px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);color:var(--ml-accent)}
.d .lt::after{content:"";position:absolute;inset:0;border-radius:inherit;border:1.5px solid var(--ml-accent);animation:exp-ping 2.6s ease-out infinite}
.d .modal h1{font-size:24px}
.d .modal .lead{line-height:1.55}
.d .acct{display:flex;align-items:center;gap:12px;margin-top:18px;padding:10px 14px;border-radius:14px;background:var(--ml-surface);box-shadow:inset 0 0 0 1px var(--ml-line);text-align:left}
.d .acct p{display:flex;flex:1;flex-direction:column;min-width:0}
.d .acct b{font-size:14px;font-weight:600}
.d .acct small{font-size:12.5px;color:var(--ml-muted)}
.d .ago{display:inline-flex;align-items:center;gap:5px;font-size:12px;font-weight:500;color:var(--ml-muted);white-space:nowrap}
.d .form{text-align:left}
.d .form .fl{margin-top:16px}
.d .alts{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:16px;font-size:13.5px}
.d .alts i{width:3px;height:3px;border-radius:50%;background:var(--ml-bar)}
.d .toast{position:absolute;left:50%;bottom:30px;z-index:3;display:flex;align-items:center;gap:9px;max-width:92%;padding:12px 18px 12px 14px;border-radius:999px;background:var(--ml-ink);color:#fff;font-size:13.5px;font-weight:600;box-shadow:var(--ml-shadow-lg);opacity:0;transform:translate(-50%,16px);transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .toast svg{flex:none;padding:3px;border-radius:50%;background:#1DB954}
.d .wrap.live .toast{opacity:1;transform:translate(-50%,0);transition-delay:.35s}
@keyframes exp-ping{0%{opacity:.6;transform:scale(1)}80%,100%{opacity:0;transform:scale(1.5)}}
${CURSOR_CSS}
@container scr (max-width: 760px){
  .d .app{grid-template-columns:minmax(0,1fr)}
  .d .sd{display:none}
  .d .pg{padding:18px 16px}
  .d .kp{grid-template-columns:repeat(2,minmax(0,1fr))}
  .d .modal{padding:24px 20px 20px}
  .d .ago{display:none}
}
@media (prefers-reduced-motion: reduce){.d .lt::after{animation:none}}`,
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
      const aim = async (el, fx) => {
        if (!idle()) return false;
        cur.classList.toggle('off', !moveTo(el, fx));
        await wait(650);
        return idle();
      };
      const press = async (el, fx, fn) => {
        if (!(await aim(el, fx))) return false;
        cur.classList.add('press');
        el.classList.add('press');
        await wait(130);
        cur.classList.remove('press');
        el.classList.remove('press');
        if (fn) fn();
        else el.click();
        return true;
      };
      const typeInto = async (el, text) => {
        const f = el.closest('.field') || el;
        f.classList.add('is-auto');
        for (const ch of text) {
          if (!idle()) return false;
          el.value += ch;
          el.dispatchEvent(new Event('input', { bubbles: true }));
          await wait(50 + Math.random() * 55);
        }
        f.classList.remove('is-auto');
        return true;
      };
      const seq = async (steps) => {
        for (const s of steps) if (!(await s())) return false;
        return true;
      };
      const rest = (ms) => async () => {
        await wait(ms);
        return idle();
      };

      const wrap = $('.wrap');
      const form = $('.form');
      const pass = $('#ml-exp-pass');
      const go = $('.go');
      const eye = $('.eye');
      let busy = false;
      pass.addEventListener('input', () => pass.closest('.field').classList.remove('bad'));
      eye.addEventListener('click', () => {
        const on = pass.type === 'password';
        pass.type = on ? 'text' : 'password';
        eye.classList.toggle('on', on);
        eye.setAttribute('aria-pressed', String(on));
        eye.setAttribute('aria-label', on ? 'Hide password' : 'Show password');
      });
      root.querySelectorAll('.lk').forEach((b) => b.addEventListener('click', (e) => e.preventDefault()));
      const reset = () => {
        const a = root.getRootNode().activeElement;
        if (a && a.blur && root.contains(a)) a.blur();
        pass.value = '';
        pass.type = 'password';
        eye.classList.remove('on');
        pass.closest('.field').classList.remove('bad', 'is-auto');
        go.classList.remove('loading', 'ok');
        wrap.classList.remove('live');
        busy = false;
      };
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (busy) return;
        const ok = pass.value.length > 0;
        pass.closest('.field').classList.toggle('bad', !ok);
        pass.setAttribute('aria-invalid', String(!ok));
        if (!ok) return;
        busy = true;
        go.classList.add('loading');
        setTimeout(() => {
          go.classList.replace('loading', 'ok');
          setTimeout(() => {
            wrap.classList.add('live');
            setTimeout(reset, 3200);
          }, 600);
        }, 1100);
      });
      cur.style.transform = 'translate(700px,620px)';
      (async () => {
        await wait(1500);
        while (root.isConnected) {
          if (!idle() || busy) {
            await wait(400);
            continue;
          }
          reset();
          await seq([
            () => aim(pass, 0.6),
            () => typeInto(pass, 'harbor-lights-26'),
            rest(300),
            () => press(go, 0.55),
            rest(5600),
          ]);
          await wait(500);
        }
      })();
    },
    prompt: `Build a "session expired" re-authentication overlay on top of a blurred app screen, full viewport (height: 100dvh).

Layout: render the real app screen as the page background (a 210px white sidebar with brand and five nav items, a 62px top bar, a greeting, four KPI cards and a revenue bar chart) inside an absolutely positioned layer with filter: blur(7px) and transform: scale(1.03). Over it a veil of your surface color at 50% opacity, and a centered dialog (role="dialog", aria-modal, labelled by its heading): max 430px wide, 24px radius, white, hairline ring, large soft shadow, centered text. Inside: a 58px rounded lock tile in pale accent with a ring that pings outward (scale 1 to 1.5, opacity .6 to 0, 2.6s loop), heading "Your session expired", one line explaining the 30-minute inactivity sign-out and that work is saved, an account row (initials avatar, name, email, a clock icon with "32 min ago"), a Password field (label, show/hide toggle, role="alert" error), a full-width primary "Sign back in" button and a quiet row with "Switch account" and "Sign out".

Motion: on success (sheen across the button, then green "Signed in") the app layer un-blurs (filter blur(7px) to none and scale 1.03 to 1 over 900ms, cubic-bezier(.32,.72,0,1)), the veil fades out, the dialog fades and sinks slightly (opacity 0, translateY 3%, scale .97, spring) and a dark pill toast ("Welcome back, Maya. Picking up where you left off.") rises in from the bottom after 350ms. Blur only a static layer, never one with running animations. Empty password: red ring, 380ms shake, aria-invalid.

Accessibility: trap focus inside the dialog while it is open and return focus to the app after, labels on the field, visible focus rings, prefers-reduced-motion stops the ping. In a real build, keep the user's unsaved state and refresh the session token instead of reloading. Below 760px hide the sidebar, show KPIs two per row and let the dialog use 92% width. Plain HTML, CSS and JS, no libraries; React-friendly structure (AppShell, SessionExpiredDialog, ReauthForm, Toast). Use your accent color for the lock tile, ring and primary button.`,
  });
})();
