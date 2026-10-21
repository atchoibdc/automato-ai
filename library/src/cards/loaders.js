(() => {
// Loaders and skeletons. Real components on --ml-surface. No circular spinners anywhere: shimmer,
// bars, dots, steps and shape morphs only.

const C = `.d{display:grid;place-items:center;background:var(--ml-surface)}`;
const CARD = `.d .card{width:78%;display:grid;gap:12px;padding:16px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .lb{font:500 10.5px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}`;
const END = ` Mark the loading region with aria-busy="true" and add a visually hidden role="status" message such as "Loading". Under prefers-reduced-motion replace the movement with a static state or a slow opacity fade. Plain HTML, CSS and JS, no libraries.`;

// A tiny landscape drawn with CSS only (sky, sun, two hills); used by the blur-up card.
const SCENE = (cls) => `<div class="${cls}"><i class="sky"></i><i class="sun"></i><i class="m1"></i><i class="m2"></i><i class="gr"></i></div>`;

// ---- 1 skeleton ---------------------------------------------------------------------------
ML.add({
  id: 'loaders-skeleton',
  cat: 'loaders',
  title: 'Skeleton shimmer',
  sub: 'Placeholder shimmers, then content fades in',
  html: `<div class="card"><div class="sk"><div class="bk img"></div><div class="rw"><i class="bk av"></i><div class="ln"><i class="bk l1"></i><i class="bk l2"></i></div></div><i class="bk l3"></i><i class="sw"></i></div>
<div class="ct"><div class="img"><b class="sn"></b><b class="mt"></b></div><div class="rw"><i class="av">M</i><div class="ln"><b>Maya R.</b><span>Posted 2 min ago</span></div></div><p>Shipped the new onboarding flow today.</p></div></div>`,
  css: C + CARD + `
.d .card{position:relative;overflow:hidden;gap:0}
.d .sk,.d .ct{grid-area:1/1;display:grid;gap:11px;align-content:start;transition:opacity .45s ease}
.d .sk{position:relative;overflow:hidden;border-radius:10px}
.d .ct{opacity:0}
.d .card.ready .ct{opacity:1}
.d .card.ready .sk{opacity:0}
.d .img{height:84px;border-radius:10px}
.d .rw{display:flex;gap:10px;align-items:center}
.d .ln{display:grid;gap:7px;flex:1}
.d .bk{display:block;background:var(--ml-bar-2);border-radius:6px}
.d .sk .img{border-radius:10px}
.d .av{width:32px;height:32px;border-radius:10px;flex:none}
.d .l1{height:8px;width:60%}
.d .l2{height:7px;width:38%}
.d .l3{height:8px;width:86%}
.d .sw{position:absolute;top:0;bottom:0;left:0;width:55%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.85),transparent);transform:translateX(-120%);animation:sh 1.4s ease-in-out infinite;will-change:transform}
@keyframes sh{to{transform:translateX(260%)}}
.d .ct .img{position:relative;overflow:hidden;background:linear-gradient(180deg,#CFE4FF,#EAF3FF 75%)}
.d .ct .sn{position:absolute;right:18%;top:16%;width:20px;height:20px;border-radius:50%;background:#fff}
.d .ct .mt{position:absolute;left:-6%;bottom:-2%;width:70%;height:52%;background:#FF997A;clip-path:polygon(0 100%,46% 0,100% 100%)}
.d .ct .av{display:grid;place-items:center;background:var(--ml-grad);color:#fff;font:600 13px/1 var(--ml-font)}
.d .ct b{font:600 12.5px/1.1 var(--ml-font);color:var(--ml-ink)}
.d .ct span{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
.d .ct p{font:500 12.5px/1.35 var(--ml-font);color:var(--ml-ink-2)}
`,
  run: (root) => {
    const card = root.querySelector('.card');
    let on = false;
    const step = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        on = !on;
        card.classList.toggle('ready', on);
      }
      setTimeout(step, on ? 2300 : 2600);
    };
    setTimeout(step, 2200);
  },
  prompt: `Build a skeleton loading state for a content card. Reproduce the real card's layout with placeholder blocks: an image block, an avatar square next to two short text lines, and one longer line, all filled with a pale grey-blue (#EFE7E0 style). Put one shimmer element over the whole skeleton: a 55% wide strip with linear-gradient(100deg, transparent, rgba(255,255,255,.85), transparent), animated with transform: translateX(-120%) to translateX(260%), 1.4s ease-in-out, infinite, inside a parent with overflow: hidden. Animating transform keeps it on the compositor, unlike animating background-position. When the data arrives, render the real content in the same grid cell as the skeleton and cross-fade (opacity .45s) so nothing shifts. Match placeholder sizes to the final content to avoid layout shift.` + END,
});

// ---- 2 indeterminate bar -----------------------------------------------------------------------
ML.add({
  id: 'loaders-indeterminate',
  cat: 'loaders',
  title: 'Indeterminate bar',
  sub: 'A segment slides along a thin bar',
  html: `<div class="card"><div class="hd"><span class="tt">Syncing workspace</span><span class="sm">Please wait</span></div><div class="bar"><i class="seg"></i></div><div class="bd"><i class="r"></i><i class="r s"></i><i class="r m"></i></div></div>`,
  css: C + `
.d .card{width:84%;overflow:hidden;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .hd{display:flex;justify-content:space-between;align-items:baseline;padding:14px 16px 12px}
.d .tt{font:600 13px/1 var(--ml-font);color:var(--ml-ink)}
.d .sm{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
.d .bar{position:relative;height:3px;background:var(--ml-bar-2);overflow:hidden}
.d .seg{position:absolute;left:0;top:0;bottom:0;width:36%;border-radius:2px;background:var(--ml-grad);animation:ind 1.6s cubic-bezier(.45,0,.25,1) infinite;will-change:transform}
@keyframes ind{0%{transform:translateX(-100%) scaleX(.5)}50%{transform:translateX(130%) scaleX(1.3)}100%{transform:translateX(310%) scaleX(.5)}}
.d .bd{display:grid;gap:11px;padding:16px}
.d .r{display:block;height:7px;border-radius:4px;background:var(--ml-bar-2)}
.d .r.s{width:54%}
.d .r.m{width:76%}
`,
  prompt: `Build an indeterminate progress bar for a panel or page header. Make a 3px tall track (pale grey-blue, overflow: hidden, position: relative) that sits flush under the header. Inside it, a segment about 36% of the track width, filled with your accent gradient and rounded ends. Animate it with transform only: 0% translateX(-100%) scaleX(0.5), 50% translateX(130%) scaleX(1.3), 100% translateX(310%) scaleX(0.5), 1.6s, cubic-bezier(0.45, 0, 0.25, 1), infinite, so the segment stretches as it speeds up and compresses at the ends like a material progress bar. Do not animate width or left. Use it for work with unknown duration; switch to a determinate bar (scaleX with transform-origin: left) as soon as you know the percentage. Dim and disable the content below while it runs.` + END,
});

// ---- 3 dots -----------------------------------------------------------------------------------
ML.add({
  id: 'loaders-dots',
  cat: 'loaders',
  title: 'Dot bounce',
  sub: 'Three dots bounce in sequence',
  html: `<div class="g"><div class="dw"><i class="dt"></i><i class="sd"></i></div><div class="dw" style="--dl:.15s"><i class="dt"></i><i class="sd"></i></div><div class="dw" style="--dl:.3s"><i class="dt"></i><i class="sd"></i></div></div><span class="cp">Fetching results</span>`,
  css: C + `
.d{display:flex;flex-direction:column;gap:22px;align-items:center;justify-content:center}
.d .g{display:flex;gap:16px;align-items:flex-end;height:46px}
.d .dw{position:relative;width:16px;height:46px}
.d .dt{position:absolute;left:0;bottom:8px;width:16px;height:16px;border-radius:50%;background:var(--ml-grad);animation:db 1.1s cubic-bezier(.3,0,.3,1) var(--dl,0s) infinite;will-change:transform}
.d .sd{position:absolute;left:2px;bottom:0;width:12px;height:4px;border-radius:50%;background:rgba(35,15,10,.12);animation:ds 1.1s cubic-bezier(.3,0,.3,1) var(--dl,0s) infinite}
@keyframes db{0%,60%,100%{transform:translateY(0)}30%{transform:translateY(-26px)}}
@keyframes ds{0%,60%,100%{transform:scale(1);opacity:1}30%{transform:scale(.55);opacity:.5}}
.d .cp{font:500 12px/1 var(--ml-font);color:var(--ml-muted)}
`,
  prompt: `Build a three-dot bounce loader. Three 16px circles filled with your accent gradient, 16px apart, each inside a 46px tall wrapper. Animate each dot with keyframes 0%, 60%, 100% translateY(0) and 30% translateY(-26px), 1.1s, cubic-bezier(0.3, 0, 0.3, 1), infinite, and delay the second and third dots by 0.15s and 0.3s so the bounce travels left to right. Add a small flat ellipse shadow under each dot that scales to 0.55 and fades to 0.5 opacity at the top of the bounce, in sync with the dot; this makes the motion read as a real bounce. Animate transform and opacity only. Add a short caption below ("Fetching results") in a muted color. Use it for short waits of unknown length, for example inside a button or an empty list state.` + END,
});

// ---- 4 equalizer ------------------------------------------------------------------------------
ML.add({
  id: 'loaders-equalizer',
  cat: 'loaders',
  title: 'Equalizer bars',
  sub: 'Bars rise and fall at their own rates',
  html: `<div class="card"><div class="top"><span class="lb">Now playing</span><span class="tm">2:41</span></div><div class="eq"><i style="--t:.9s;--dl:-.1s"></i><i style="--t:1.3s;--dl:-.6s"></i><i style="--t:.7s;--dl:-.3s"></i><i style="--t:1.1s;--dl:-.8s"></i><i style="--t:.8s;--dl:-.2s"></i><i style="--t:1.4s;--dl:-.5s"></i><i style="--t:1s;--dl:-.9s"></i><i style="--t:.75s;--dl:-.4s"></i><i style="--t:1.2s;--dl:-.7s"></i></div><div class="tr"><b>Morning Light</b><span>Elena Voss</span></div></div>`,
  css: C + CARD + `
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .tm{font:500 11px/1 var(--ml-mono);color:var(--ml-muted)}
.d .eq{display:flex;gap:6px;align-items:flex-end;justify-content:center;height:62px}
.d .eq i{display:block;width:7px;height:100%;border-radius:4px;background:linear-gradient(180deg,#FF7A3D,#FF4433);transform-origin:50% 100%;transform:scaleY(.2);animation:eqb var(--t) ease-in-out var(--dl) infinite alternate;will-change:transform}
@keyframes eqb{0%{transform:scaleY(.18)}100%{transform:scaleY(1)}}
.d .tr{display:grid;gap:4px}
.d .tr b{font:600 13px/1 var(--ml-font);color:var(--ml-ink)}
.d .tr span{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
`,
  prompt: `Build an equalizer loader for audio, uploads in progress or "now playing" states. Use 7-9 vertical bars, each 7px wide and a fixed height (about 62px) with rounded ends and a vertical blue gradient, aligned to the bottom in a flex row with 6px gaps. Set transform-origin: 50% 100% and animate transform: scaleY(0.18) to scaleY(1) with ease-in-out, infinite, alternate. Give every bar its own duration (0.7s to 1.4s) and a negative animation-delay so the bars are out of phase from the first frame and the pattern never visibly repeats. Animate transform only; never animate height. Put it inside a card with a small "Now playing" label and track title. For a stopped state set animation-play-state: paused and rest the bars at scaleY(0.2).` + END,
});

// ---- 5 typing ---------------------------------------------------------------------------------
ML.add({
  id: 'loaders-typing',
  cat: 'loaders',
  title: 'Typing indicator',
  sub: 'Pulsing dots, then the message arrives',
  html: `<div class="chat" data-s="0"><div class="me">Can we move our call to 3 PM?</div><span class="nm">Maya</span><div class="ra"><div class="tp"><i></i><i></i><i></i></div><div class="msg">Sure, 3 PM works. Sending a new invite now.</div></div></div>`,
  css: C + `
.d .chat{width:80%;display:grid;gap:7px}
.d .me{justify-self:end;max-width:92%;padding:9px 13px;border-radius:16px 16px 4px 16px;background:var(--ml-grad);color:#fff;font:500 12.5px/1.35 var(--ml-font)}
.d .nm{font:500 10.5px/1 var(--ml-font);color:var(--ml-muted);margin:4px 0 0 4px}
.d .ra{display:grid}
.d .tp,.d .msg{grid-area:1/1;justify-self:start;align-self:start;border-radius:16px 16px 16px 4px;background:var(--ml-bg);box-shadow:var(--ml-shadow);opacity:0;transform:translateY(8px) scale(.94);transform-origin:0 100%;transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .tp{display:flex;gap:5px;align-items:center;padding:13px 14px}
.d .tp i{width:7px;height:7px;border-radius:50%;background:var(--ml-accent-2);animation:tpd 1.2s ease-in-out infinite}
.d .tp i:nth-child(2){animation-delay:.16s}
.d .tp i:nth-child(3){animation-delay:.32s}
@keyframes tpd{0%,70%,100%{opacity:.3;transform:scale(.8)}35%{opacity:1;transform:scale(1.15)}}
.d .msg{max-width:88%;padding:9px 13px;font:500 12.5px/1.35 var(--ml-font);color:var(--ml-ink)}
.d .chat[data-s="1"] .tp{opacity:1;transform:none}
.d .chat[data-s="2"] .msg{opacity:1;transform:none}
`,
  run: (root) => {
    const chat = root.querySelector('.chat');
    const seq = [[0, 700], [1, 2100], [2, 3400]];
    let i = 0;
    const next = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        chat.dataset.s = String(seq[i][0]);
        const wait = seq[i][1];
        i = (i + 1) % seq.length;
        setTimeout(next, wait);
      } else setTimeout(next, 400);
    };
    next();
  },
  prompt: `Build a chat typing indicator that hands over to the real message. In a conversation, render the sender's bubble with three 7px dots in a light blue, 5px apart, inside a bubble with a smaller bottom-left radius (16px 16px 16px 4px), a white background and a soft shadow. Pulse each dot with keyframes 0%, 70%, 100% opacity 0.3 scale(0.8) and 35% opacity 1 scale(1.15), 1.2s ease-in-out infinite, delaying dots by 0.16s and 0.32s. The typing bubble and the message bubble share one grid cell (grid-area: 1/1) so nothing jumps. Switch by toggling a data attribute: the typing bubble fades and scales out while the message springs in (transform from translateY(8px) scale(0.94), transform-origin at the bubble's tail, 590ms critically damped spring curve). Show the indicator only while a reply is genuinely pending, for at least about 600ms to avoid flicker.` + END,
});

// ---- 6 logo draw -----------------------------------------------------------------------------
ML.add({
  id: 'loaders-logo-draw',
  cat: 'loaders',
  title: 'Logo draw',
  sub: 'A mark traces its stroke, then fills',
  html: `<div class="lg"><svg viewBox="0 0 64 64" width="92" height="92" aria-hidden="true"><defs><linearGradient id="mllg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FF7A3D"/><stop offset="1" stop-color="#FF4433"/></linearGradient></defs><path class="fl" d="M32 6L54 19V45L32 58L10 45V19Z"/><path class="st" pathLength="1" d="M32 6L54 19V45L32 58L10 45V19Z"/><path class="ch" pathLength="1" d="M21 37L32 21L43 37M26 45H38"/></svg><span class="wm">Halo</span></div>`,
  css: C + `
.d .lg{display:grid;gap:12px;justify-items:center;animation:lgo 5s ease-in-out infinite}
.d svg{overflow:visible}
.d .st,.d .ch{fill:none;stroke:var(--ml-accent);stroke-width:2.4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1}
.d .st{animation:lgs 5s ease-in-out infinite}
.d .ch{animation:lgc 5s ease-in-out infinite}
.d .fl{fill:url(#mllg);opacity:0;animation:lgf 5s ease-in-out infinite}
.d .wm{font:600 20px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink);opacity:0;animation:lgw 5s ease-in-out infinite}
@keyframes lgs{0%{stroke-dashoffset:1}38%,100%{stroke-dashoffset:0}}
@keyframes lgc{0%,22%{stroke-dashoffset:1;stroke:var(--ml-accent)}50%{stroke-dashoffset:0;stroke:var(--ml-accent)}62%,100%{stroke-dashoffset:0;stroke:#fff}}
@keyframes lgf{0%,48%{opacity:0}64%,100%{opacity:1}}
@keyframes lgw{0%,60%{opacity:0;transform:translateY(6px)}74%,100%{opacity:1;transform:none}}
@keyframes lgo{0%,90%{opacity:1}100%{opacity:0}}
`,
  prompt: `Build a logo draw preloader with inline SVG. Add pathLength="1" to every path of the mark (an outline and an inner symbol), set stroke-dasharray: 1 and stroke-dashoffset: 1 so each path is invisible, then animate stroke-dashoffset from 1 to 0 so the line traces itself; stagger the inner symbol about 20% later than the outline. When the outline is complete, fade in a filled copy of the shape (opacity 0 to 1) and switch the inner symbol stroke to white so it reads on the fill, then fade in the wordmark with a small translateY(6px) rise. Total loop about 5s, ease-in-out, with the whole group fading out in the last 10% before it restarts. Use round caps and joins. For a real preloader, run the draw once, then remove the overlay when the page is ready; do not loop it forever.` + END,
});

// ---- 7 percent ----------------------------------------------------------------------------------
ML.add({
  id: 'loaders-percent',
  cat: 'loaders',
  title: 'Percent preloader',
  sub: 'Count to 100, then the page slides in',
  html: `<div class="pg"><div class="nv"><i></i><span><i></i><i></i><i></i></span></div><div class="hr"><b class="h1"></b><b class="h2"></b><span class="bt"></span></div><div class="im"></div></div><div class="pre"><div class="num"><b class="n">0</b><small>%</small></div><div class="bar"><i class="fl"></i></div></div>`,
  css: `
.d{background:var(--ml-surface)}
.d .pg{position:absolute;inset:0;display:grid;grid-template-rows:auto auto 1fr;gap:14px;padding:16px 18px;background:var(--ml-bg)}
.d .nv{display:flex;justify-content:space-between;align-items:center}
.d .nv>i{width:22px;height:8px;border-radius:4px;background:var(--ml-accent)}
.d .nv span{display:flex;gap:7px}
.d .nv span i{width:24px;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .hr{display:grid;gap:8px;justify-items:start}
.d .hr b{display:block;height:13px;border-radius:6px;background:var(--ml-bar)}
.d .h1{width:72%}
.d .h2{width:48%}
.d .bt{width:70px;height:22px;border-radius:999px;background:var(--ml-grad)}
.d .im{border-radius:12px;background:linear-gradient(180deg,#CFE4FF,#EAF3FF)}
.d .pg>*{transition:transform .9s var(--ml-ease) .1s,opacity .9s ease .1s}
.d .pg.pre-on>*{transform:translateY(22px);opacity:0}
.d .pre{position:absolute;inset:0;z-index:2;display:grid;align-content:center;justify-items:center;gap:14px;background:var(--ml-bg);transition:transform .85s var(--ml-ease);will-change:transform}
.d .pre.done{transform:translateY(-100%)}
.d .num{display:flex;align-items:baseline;gap:2px;color:var(--ml-ink)}
.d .n{font:600 64px/1 var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums}
.d .num small{font:500 18px/1 var(--ml-font);color:var(--ml-muted)}
.d .bar{width:46%;height:3px;border-radius:2px;background:var(--ml-bar-2);overflow:hidden}
.d .fl{display:block;height:100%;background:var(--ml-grad);transform-origin:0 50%;transform:scaleX(0)}
`,
  run: (root) => {
    const pg = root.querySelector('.pg');
    const pre = root.querySelector('.pre');
    const n = root.querySelector('.n');
    const fl = root.querySelector('.fl');
    const COUNT = 2600;
    const HOLD = 2600;
    let phase = 0;
    let e = 0;
    let last = 0;
    pg.classList.add('pre-on');
    const loop = (now) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = now - last;
      last = now;
      if (root.dataset.paused || dt > 200) return;
      e += dt;
      if (phase === 0) {
        const x = Math.min(e / COUNT, 1);
        const p = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
        n.textContent = String(Math.round(p * 100));
        fl.style.transform = 'scaleX(' + p.toFixed(3) + ')';
        if (x >= 1) {
          phase = 1;
          e = 0;
          setTimeout(() => {
            pre.classList.add('done');
            pg.classList.remove('pre-on');
          }, 250);
        }
      } else if (e > HOLD) {
        pre.style.transition = 'none';
        pre.classList.remove('done');
        pg.style.transition = 'none';
        pg.classList.add('pre-on');
        void pre.offsetWidth;
        pre.style.transition = '';
        pg.style.transition = '';
        n.textContent = '0';
        fl.style.transform = 'scaleX(0)';
        phase = 0;
        e = -300;
      }
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a percentage preloader that reveals the page. Cover the viewport with a white overlay (position: fixed in production, absolute here) holding a big semibold percentage (60-80px, tabular-nums, tight tracking) with a small "%" and a 3px progress bar under it whose fill is a scaleX transform with transform-origin: left. Drive both from one requestAnimationFrame loop using an eased progress value so the count accelerates and settles; tie the value to real asset loading when you can, and clamp it so it never goes backwards. At 100, wait about 250ms, then slide the overlay up with transform: translateY(-100%) over 850ms using cubic-bezier(0.32, 0.72, 0, 1), while the page content beneath rises from translateY(22px) and opacity 0 to its resting state. Remove the overlay from the DOM after the transition ends and restore scrolling. Show it only on first visit.` + END,
});

// ---- 8 pulse -----------------------------------------------------------------------------------
ML.add({
  id: 'loaders-pulse',
  cat: 'loaders',
  title: 'Content pulse',
  sub: 'Placeholder rows breathe in opacity',
  html: `<div class="card"><span class="lb">Recent activity</span><div class="rw" style="--dl:0s"><i class="th"></i><div class="ln"><i></i><i class="s"></i></div><i class="tg"></i></div><div class="rw" style="--dl:.25s"><i class="th"></i><div class="ln"><i></i><i class="s"></i></div><i class="tg"></i></div><div class="rw" style="--dl:.5s"><i class="th"></i><div class="ln"><i></i><i class="s"></i></div><i class="tg"></i></div></div>`,
  css: C + CARD + `
.d .card{gap:11px}
.d .rw{display:flex;align-items:center;gap:11px;animation:cp 1.7s ease-in-out var(--dl) infinite}
.d .th{display:block;width:34px;height:34px;border-radius:11px;background:var(--ml-bar);flex:none}
.d .ln{display:grid;gap:7px;flex:1}
.d .ln i{display:block;height:8px;width:82%;border-radius:4px;background:var(--ml-bar)}
.d .ln i.s{height:6px;width:50%;background:var(--ml-bar-2)}
.d .tg{display:block;width:30px;height:16px;border-radius:999px;background:var(--ml-accent-soft)}
@keyframes cp{0%,100%{opacity:.4}50%{opacity:1}}
`,
  prompt: `Build a content pulse loading state, the calmer alternative to a shimmer. Render the real layout (for example a list of rows with a rounded thumbnail, two text lines and a small pill) using flat placeholder blocks in pale grey-blue. Animate each row's opacity from 0.4 to 1 and back with keyframes, 1.7s ease-in-out infinite, and stagger the rows with animation-delay of 0.25s each so the pulse travels down the list instead of the whole card blinking. Animate opacity only. Use the pulse when the list is short or the surface is small; use a shimmer for large image-heavy cards. Keep the placeholder geometry identical to the loaded rows to prevent layout shift, and swap in real content with a short opacity cross-fade.` + END,
});

// ---- 9 blur-up ---------------------------------------------------------------------------------
ML.add({
  id: 'loaders-blur-up',
  cat: 'loaders',
  title: 'Blur-up image',
  sub: 'A blurry preview sharpens into the photo',
  html: `<div class="card"><div class="ph">` + SCENE('lo') + SCENE('hi') + `</div><div class="cap"><b>Lake Placid</b><span class="c1">Preview</span><span class="c2">Full quality</span></div></div>`,
  css: C + CARD + `
.d .card{gap:11px;padding:12px}
.d .ph{position:relative;height:118px;border-radius:11px;overflow:hidden;background:#CFE4FF}
.d .lo,.d .hi{position:absolute;inset:0}
.d .lo{filter:blur(9px);transform:scale(1.15)}
.d .hi{opacity:0;animation:bu 5.4s ease-in-out infinite}
.d .hi .sky,.d .lo .sky{position:absolute;inset:0;background:linear-gradient(180deg,#FFB8A3,#E8F2FF 70%)}
.d .sun{position:absolute;right:16%;top:14%;width:24px;height:24px;border-radius:50%;background:#fff}
.d .m1{position:absolute;left:-8%;bottom:16%;width:62%;height:56%;background:#FF997A;clip-path:polygon(0 100%,48% 0,100% 100%)}
.d .m2{position:absolute;right:-10%;bottom:16%;width:66%;height:42%;background:#FF7A3D;clip-path:polygon(0 100%,52% 0,100% 100%)}
.d .gr{position:absolute;left:0;right:0;bottom:0;height:20%;background:linear-gradient(180deg,#2E86FF,#FF4433)}
.d .hi .m1::after{content:"";position:absolute;left:36%;top:0;width:16%;height:36%;background:#fff;clip-path:polygon(50% 0,100% 100%,0 100%)}
@keyframes bu{0%,8%{opacity:0;filter:blur(12px)}42%,86%{opacity:1;filter:blur(0)}98%,100%{opacity:0;filter:blur(12px)}}
.d .cap{position:relative;display:flex;justify-content:space-between;align-items:center;min-height:20px}
.d .cap b{font:600 12.5px/1 var(--ml-font);color:var(--ml-ink)}
.d .cap span{position:absolute;right:0;font:500 10.5px/1 var(--ml-mono);padding:5px 8px;border-radius:999px}
.d .c1{background:var(--ml-bar-2);color:var(--ml-muted);animation:c1 5.4s ease-in-out infinite}
.d .c2{background:var(--ml-accent-soft);color:var(--ml-accent-ink);opacity:0;animation:c2 5.4s ease-in-out infinite}
@keyframes c1{0%,30%{opacity:1}44%,86%{opacity:0}98%,100%{opacity:1}}
@keyframes c2{0%,36%{opacity:0}48%,86%{opacity:1}98%,100%{opacity:0}}
`,
  prompt: `Build a blur-up image loader. Render a tiny placeholder first (a 20-32px wide version of the photo, inlined as a data URI or a dominant-color gradient) scaled to fill the frame with filter: blur(9px) and transform: scale(1.15) so the blur edge is cropped by the container's overflow: hidden and border-radius. Stack the real image above it in the same container with opacity: 0 and filter: blur(12px), load it with the normal img element and decode() it, then when it is ready transition both to opacity: 1 and filter: blur(0) over about 600ms ease-out and remove the placeholder. Give the container a fixed aspect-ratio (or width and height attributes) so the page never shifts. Optionally show a small "Preview" chip that swaps to "Full quality". Do not animate the blur on large hero images, which is expensive; fade there instead.` + END,
});

// ---- 10 steps ---------------------------------------------------------------------------------
ML.add({
  id: 'loaders-steps',
  cat: 'loaders',
  title: 'Step checklist',
  sub: 'Steps tick in order along a line',
  html: `<div class="card"><span class="lb">report-q3.pdf</span><div class="ls"><i class="tk"><b class="pf"></b></i>
<div class="it"><span class="ic"><i class="dot"></i><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><div class="tx"><b>Uploading</b><span>2.4 MB of 2.4 MB</span></div></div>
<div class="it"><span class="ic"><i class="dot"></i><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><div class="tx"><b>Processing</b><span>Reading 18 pages</span></div></div>
<div class="it"><span class="ic"><i class="dot"></i><svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span><div class="tx"><b>Done</b><span>Ready to share</span></div></div></div></div>`,
  css: C + CARD + `
.d .ls{position:relative;display:grid;gap:15px;padding:2px 0}
.d .tk{position:absolute;left:10px;top:12px;bottom:12px;width:2px;margin-left:-1px;border-radius:1px;background:var(--ml-bar-2);overflow:hidden}
.d .pf{position:absolute;inset:0;background:var(--ml-accent);transform-origin:50% 0;transform:scaleY(0);transition:transform .7s var(--ml-ease)}
.d .it{position:relative;display:flex;align-items:center;gap:12px}
.d .ic{position:relative;flex:none;width:20px;height:20px;border-radius:50%;background:var(--ml-bg);box-shadow:inset 0 0 0 2px var(--ml-bar);display:grid;place-items:center;transition:box-shadow .3s ease,background-color .3s ease}
.d .ic .dot{position:absolute;width:8px;height:8px;border-radius:50%;background:var(--ml-accent);opacity:0;transform:scale(.4);transition:opacity .25s ease,transform .25s ease}
.d .ic svg{position:absolute;opacity:0;transform:scale(.4);transition:opacity .2s ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .it.act .ic{box-shadow:inset 0 0 0 2px var(--ml-accent)}
.d .it.act .dot{opacity:1;transform:scale(1);animation:sd 1.1s ease-in-out infinite}
@keyframes sd{0%,100%{transform:scale(.7)}50%{transform:scale(1.05)}}
.d .it.dn .ic{background:var(--ml-accent);box-shadow:inset 0 0 0 2px var(--ml-accent)}
.d .it.dn svg{opacity:1;transform:scale(1)}
.d .tx{display:grid;gap:3px}
.d .tx b{font:600 12.5px/1 var(--ml-font);color:var(--ml-muted);transition:color .3s ease}
.d .tx span{font:500 11px/1 var(--ml-font);color:var(--ml-muted);opacity:.8}
.d .it.act b,.d .it.dn b{color:var(--ml-ink)}
`,
  run: (root) => {
    const its = [...root.querySelectorAll('.it')];
    const pf = root.querySelector('.pf');
    const stages = [[-1, 700], [0, 1500], [1, 1500], [2, 2600]];
    let i = 0;
    const apply = (s) => {
      its.forEach((it, k) => {
        const done = k < s || s === 2;
        it.classList.toggle('dn', done);
        it.classList.toggle('act', !done && k === s);
      });
      pf.style.transform = 'scaleY(' + (s < 0 ? 0 : s === 2 ? 1 : s * 0.5) + ')';
    };
    const next = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        apply(stages[i][0]);
        const wait = stages[i][1];
        i = (i + 1) % stages.length;
        setTimeout(next, wait);
      } else setTimeout(next, 400);
    };
    next();
  },
  prompt: `Build a step checklist loader for a multi-stage task such as uploading, processing and finishing a file. Render the steps as a vertical list. Each step has a 20px circular marker, a bold label and a muted sub-line. States: pending (an empty ring in pale blue-grey), active (an accent ring with a small accent dot that pulses with scale 0.7 to 1.05, 1.1s ease-in-out infinite; not a rotating spinner) and done (a filled accent circle with a white check that pops in using a slight-overshoot spring). Draw a 2px vertical track behind the markers with an accent fill layer that grows with transform: scaleY(), transform-origin at the top, 700ms cubic-bezier(0.32, 0.72, 0, 1). Drive the states from your real progress events, only ever moving forward, and put the current step in an aria-live="polite" region. Announce completion and errors in text, not just color.` + END,
});

// ---- 11 morph ---------------------------------------------------------------------------------
ML.add({
  id: 'loaders-morph',
  cat: 'loaders',
  title: 'Morphing shape',
  sub: 'Square, circle and pill in a calm loop',
  html: `<div class="wr"><div class="sh"></div></div><span class="cp">Getting things ready</span>`,
  css: C + `
.d{display:flex;flex-direction:column;gap:24px;align-items:center;justify-content:center}
.d .wr{filter:drop-shadow(0 10px 18px rgba(255,68,51,.22));width:112px;height:112px}
.d .sh{width:112px;height:112px;background:var(--ml-grad);animation:mo 4.8s cubic-bezier(.6,0,.3,1) infinite}
@keyframes mo{0%,10%{clip-path:inset(0 round 24px)}32%,42%{clip-path:inset(0 round 50%)}66%,78%{clip-path:inset(34px 0 round 999px)}100%{clip-path:inset(0 round 24px)}}
.d .cp{font:500 12px/1 var(--ml-font);color:var(--ml-muted)}
`,
  prompt: `Build a morphing shape loader. Use one 112px square element filled with your accent gradient inside a wrapper with filter: drop-shadow(0 10px 18px rgba(accent, .22)) (put the shadow on the wrapper, because box-shadow is clipped by clip-path). Animate its clip-path through three shapes: inset(0 round 24px) for a rounded square, inset(0 round 50%) for a circle, and inset(34px 0 round 999px) for a wide pill, then back to the square. Hold each shape for about 10-12% of the cycle with cubic-bezier(0.6, 0, 0.3, 1), 4.8s, infinite. clip-path animates without touching layout, and because the element never rotates it cannot be mistaken for a spinner. Add a small muted caption below. Keep the loop calm: nothing faster than about 2 seconds per shape change. Use it for splash screens or long background tasks.` + END,
});

// ---- 12 liquid ---------------------------------------------------------------------------------
ML.add({
  id: 'loaders-liquid',
  cat: 'loaders',
  title: 'Liquid fill',
  sub: 'A rounded cup fills with wavy liquid',
  html: `<div class="cup"><div class="lq"><svg class="wv w2" viewBox="0 0 200 16" preserveAspectRatio="none" aria-hidden="true"><path d="M0 8Q25 0 50 8T100 8T150 8T200 8V16H0Z"/></svg><svg class="wv w1" viewBox="0 0 200 16" preserveAspectRatio="none" aria-hidden="true"><path d="M0 8Q25 16 50 8T100 8T150 8T200 8V16H0Z"/></svg><div class="bd"></div></div></div><div class="pc"><b class="n">0</b>%</div>`,
  css: C + `
.d{display:flex;flex-direction:column;gap:14px;align-items:center;justify-content:center}
.d .cup{position:relative;width:92px;height:128px;border-radius:28px;background:var(--ml-bg);box-shadow:inset 0 0 0 2px var(--ml-accent-line),var(--ml-shadow);overflow:hidden}
.d .lq{position:absolute;left:0;right:0;top:0;height:114%;transform:translateY(100%);will-change:transform}
.d .wv{position:absolute;left:0;top:-15px;width:200%;height:16px;display:block;animation:lw 2.6s linear infinite}
.d .w1{fill:#FF7A3D}
.d .w2{fill:#FFD0CA;top:-18px;animation-duration:3.8s;animation-direction:reverse}
@keyframes lw{to{transform:translateX(-50%)}}
.d .bd{position:absolute;left:0;right:0;top:0;bottom:0;background:linear-gradient(180deg,#FF7A3D,#FF4433)}
.d .pc{font:500 14px/1 var(--ml-font);color:var(--ml-muted);display:flex;align-items:baseline;gap:1px}
.d .pc .n{font:600 24px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
`,
  run: (root) => {
    const cup = root.querySelector('.cup');
    const lq = root.querySelector('.lq');
    const n = root.querySelector('.n');
    const FILL = 4200;
    const HOLD = 1400;
    const DRAIN = 700;
    let e = 0;
    let last = 0;
    const loop = (now) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = now - last;
      last = now;
      if (root.dataset.paused || dt > 200) return;
      e = (e + dt) % (FILL + HOLD + DRAIN);
      let p;
      if (e < FILL) {
        const x = e / FILL;
        p = x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
      } else if (e < FILL + HOLD) p = 1;
      else {
        const x = (e - FILL - HOLD) / DRAIN;
        p = 1 - x * x * (3 - 2 * x);
      }
      const h = cup.clientHeight;
      lq.style.transform = 'translateY(' + ((1 - p) * (h + 18) - p * 6).toFixed(1) + 'px)';
      n.textContent = String(Math.round(p * 100));
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a liquid fill loader. Make a rounded container (92 by 128px, radius 28px, white, a 2px pale blue inset ring, overflow: hidden). Inside it put a liquid layer the full height of the container, positioned from the top, with a solid blue gradient body. Attach two wave strips to the top edge of the liquid: SVG paths 200% wide and 16px tall (a sine made from Q and T commands, one period per 100 units) in two blues, one lighter behind. Animate each strip with transform: translateX(0) to translateX(-50%), linear, infinite, at 2.6s and 3.8s in opposite directions so the waves interfere. Raise the level by setting the liquid layer's transform: translateY() from the full height to about -6px as progress goes 0 to 100, using real progress or an eased timer in requestAnimationFrame. Show the percentage beside the cup in a tabular-nums font. At 100, hold briefly, then drain or fade before resetting.` + END,
});

})();
