// Testimonials. "Real component" demos: quote cards, avatars and rating blocks drawn with inline SVG.
(() => {
const TN = [['#FFF0ED', '#FFA185'], ['#E1EEFF', '#FF7043'], ['#FFD8D0', '#FF5442'], ['#FFEBE8', '#FF8A6B'], ['#FFE8E2', '#FF6347']];
const av = (i) => '<svg viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" fill="' + TN[i % 5][0] + '"/><circle cx="20" cy="16" r="7" fill="' + TN[i % 5][1] + '"/><path d="M6 40c0-8 6-13 14-13s14 5 14 13z" fill="' + TN[i % 5][1] + '"/></svg>';
const por = (i) => '<svg viewBox="0 0 60 80" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="pt' + (i % 5) + '" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="' + TN[i % 5][0] + '"/><stop offset="1" stop-color="#FAF6F2"/></linearGradient></defs><rect width="60" height="80" fill="url(#pt' + (i % 5) + ')"/><circle cx="30" cy="34" r="12" fill="' + TN[i % 5][1] + '"/><path d="M6 80c0-18 11-28 24-28s24 10 24 28z" fill="' + TN[i % 5][1] + '"/></svg>';
const STAR = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
const stars = (n = 5) => '<span class="sr" role="img" aria-label="' + n + ' out of 5">' + STAR.repeat(n) + '</span>';
const QI = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/></svg>';
const PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12.5-7.5a1 1 0 0 0 0-1.72L8.5 3.64A1 1 0 0 0 7 4.5z"/></svg>';
const P = [
  ['Maya R.', 'Head of Ops', 'We cut onboarding from two weeks to three days.'],
  ['Tomas K.', 'Founder', 'Setup took an afternoon, and support answered in minutes.'],
  ['Priya N.', 'Analytics lead', 'Our team stopped asking where the numbers were.'],
  ['Leo B.', 'Design director', 'The cleanest tool we have rolled out this year.'],
  ['Ines C.', 'Product manager', 'It just works, which is rare in this space.'],
  ['Daniel O.', 'COO', 'Churn dropped within the first quarter.'],
  ['Hana S.', 'Agency owner', 'I recommend it to every founder I mentor.'],
  ['Marcus T.', 'Engineer', 'It paid for itself in the first week.'],
];
const S = `.d{background:var(--ml-surface)}`;
const AVC = `.d .av{position:relative;flex:none;width:26px;height:26px;border-radius:50%;overflow:hidden}
.d .av svg{width:100%;height:100%;display:block}
.d .sr{display:inline-flex;gap:1px;color:var(--ml-accent)}
.d .sr svg{width:11px;height:11px}`;
const END = ` Mark it up with a figure, blockquote and figcaption so the quote and its author are one unit for assistive tech. Plain HTML, CSS and JS, no libraries.`;
const by = (i, sz) => `<div class="by"><div class="av">${av(i)}</div><div class="nm"><b>${P[i][0]}</b><span>${P[i][1]}</span></div></div>`;
const BY = `.d .by{display:flex;align-items:center;gap:8px}
.d .nm{display:grid;gap:3px}
.d .nm b{font:600 11px/1 var(--ml-font);color:var(--ml-ink)}
.d .nm span{font:500 10px/1 var(--ml-font);color:var(--ml-muted)}`;

ML.add({
  id: 'testimonials-fade-carousel',
  cat: 'testimonials',
  title: 'Fading quotes',
  sub: 'One big quote at a time, crossfading',
  html: `<div class="qs">${[0, 1, 2].map((i) => `<figure class="q" style="--i:${i}"><span class="qi">${QI}</span><blockquote>${P[i][2]}</blockquote><figcaption>${by(i)}</figcaption></figure>`).join('')}</div><div class="dt">${[0, 1, 2].map((i) => `<i style="--i:${i}"></i>`).join('')}</div>`,
  css: S + AVC + BY + `
.d .qs{position:absolute;inset:0}
.d .q{position:absolute;inset:0;display:grid;align-content:center;justify-items:center;gap:14px;padding:0 13%;text-align:center;opacity:0;animation:qf 12s infinite both;animation-delay:calc(var(--i) * 4s)}
.d .qi{width:24px;height:24px;color:var(--ml-accent-line)}
.d .qi svg{width:100%;height:100%;display:block}
.d blockquote{font:600 19px/1.28 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .dt{position:absolute;left:0;right:0;bottom:14px;display:flex;justify-content:center;gap:5px}
.d .dt i{width:6px;height:6px;border-radius:999px;background:var(--ml-bar);animation:dt 12s infinite both;animation-delay:calc(var(--i) * 4s)}
@keyframes qf{0%{opacity:0;transform:translateY(12px)}7%,30%{opacity:1;transform:none}38%,100%{opacity:0;transform:translateY(-10px)}}
@keyframes dt{0%{width:6px;background:var(--ml-bar)}4%,33%{width:20px;background:var(--ml-accent)}38%,100%{width:6px;background:var(--ml-bar)}}
`,
  prompt: `Build a testimonial block that shows one large quote at a time with a crossfade. Stack the slides in the same grid cell or absolutely, each a figure with a decorative quote mark, a blockquote set large (24-36px on a real page, semibold, tight tracking, 1.25 line height, centered, max 22 characters per line feel) and a figcaption with a small avatar, the name and the role. Outgoing slide: opacity 1 to 0 and translateY(0) to translateY(-10px); incoming slide: opacity 0 to 1 and translateY(12px) to 0, over about 600ms with cubic-bezier(.32,.72,0,1), with the two overlapping slightly so there is never an empty frame. Rotate every 4-5 seconds on a timer, pause on hover and focus, and let visitors jump with pagination dots where the active dot stretches into a pill. Keep the tallest quote's height reserved so the layout does not jump. Use aria-live="off" for the autoplay, expose previous and next buttons and the dots as real buttons, and under prefers-reduced-motion stop rotating and show the first quote.` + END,
});

const WQ = ['Support answered in minutes.', 'We shipped a month early.', 'Finally, one source of truth.', 'Onboarding took an afternoon.', 'Our team stopped asking for reports.', 'Clean, fast and reliable.', 'It paid for itself in week one.', 'I recommend it to every founder.', 'The best rollout we have had.', 'Simple enough for the whole team.'];
const WN = ['Tomas K.', 'Priya N.', 'Leo B.', 'Ines C.', 'Daniel O.', 'Hana S.', 'Marcus T.', 'Sofia L.', 'Ravi P.', 'Maya R.'];
const wcard = (k) => `<div class="c"><div class="by"><div class="av">${av(k)}</div><b>${WN[k % 10]}</b></div><p>${WQ[k % 10]}</p></div>`;
ML.add({
  id: 'testimonials-wall',
  cat: 'testimonials',
  title: 'Marquee wall',
  sub: 'Three columns scroll up and down',
  html: `<div class="wl">${[0, 1, 2].map((c) => `<div class="col"><div class="tr ${c === 1 ? 'dn' : ''}" style="--d:${30 + c * 6}s">${[0, 1].map(() => [0, 1, 2, 3, 4].map((k) => wcard(c * 3 + k)).join('')).join('')}</div></div>`).join('')}</div>`,
  css: S + AVC + `
.d .wl{position:absolute;inset:0 8px;display:grid;grid-template-columns:repeat(3,1fr);gap:7px;-webkit-mask-image:linear-gradient(transparent,#000 14%,#000 86%,transparent);mask-image:linear-gradient(transparent,#000 14%,#000 86%,transparent)}
.d .col{overflow:hidden}
.d .tr{display:grid;gap:7px;animation:up var(--d) linear infinite}
.d .tr.dn{animation-direction:reverse}
.d .c{display:grid;gap:7px;padding:9px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .by{display:flex;align-items:center;gap:6px}
.d .by b{font:600 9.5px/1 var(--ml-font);color:var(--ml-ink)}
.d .av{width:18px;height:18px}
.d .c p{font:500 10.5px/1.3 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink-2)}
@keyframes up{to{transform:translateY(calc(-50% - 3.5px))}}
`,
  prompt: `Build a testimonial wall of three columns of quote cards that scroll continuously, the middle one in the opposite direction. Each column is an overflow: hidden wrapper holding a vertical track (display: grid; gap: 12px) with the same set of cards twice back to back; animate the track with transform: translateY(0) to translateY(calc(-50% - 6px)) (half the track plus half a gap) linear infinite so the loop never jumps, about 30, 36 and 42 seconds for the three columns, and animation-direction: reverse on the middle column. Each card is a white surface with a 12-16px radius, a soft shadow, an avatar plus name row and a short quote; vary quote lengths so card heights differ. Fade the top and bottom edges with mask-image: linear-gradient(transparent, #000 14%, #000 86%, transparent). Pause every column on hover or focus-within with animation-play-state: paused. Mark the duplicated set aria-hidden="true", hide the second and third columns on narrow screens, and under prefers-reduced-motion stop the animation and show a static grid. Animate transform only.` + END,
});

ML.add({
  id: 'testimonials-swipe',
  cat: 'testimonials',
  title: 'Swipe card stack',
  sub: 'The top card swipes off, the next rises',
  html: `<div class="sk">${[0, 1, 2, 3].map((i) => `<figure class="cd" tabindex="0">${stars()}<blockquote>${P[i + 1][2]}</blockquote><figcaption>${by(i + 1)}</figcaption></figure>`).join('')}</div>`,
  css: S + AVC + BY + `
.d .sk{position:absolute;left:12%;right:12%;top:13%;bottom:22%}
.d .cd{position:absolute;inset:0;display:grid;align-content:space-between;gap:8px;padding:14px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);cursor:pointer;transition:transform .7s var(--ml-spring),opacity .5s ease;transform-origin:50% 100%}
.d blockquote{font:600 14px/1.3 var(--ml-font);letter-spacing:-.02em;color:var(--ml-ink)}
`,
  run: (root) => {
    const cd = [...root.querySelectorAll('.cd')];
    const order = [0, 1, 2, 3];
    const pos = [[0, 1, 1], [15, 0.94, 1], [29, 0.88, 0.85], [40, 0.82, 0]];
    let user = 0;
    let busy = false;
    const place = () => {
      order.forEach((idx, p) => {
        const el = cd[idx];
        el.style.zIndex = 10 - p;
        el.style.opacity = pos[p][2];
        el.style.transform = 'translateY(' + pos[p][0] + 'px) scale(' + pos[p][1] + ')';
      });
    };
    const fly = () => {
      if (busy) return;
      busy = true;
      const el = cd[order[0]];
      el.style.transform = 'translateY(-125%) rotate(-5deg)';
      el.style.opacity = '0';
      setTimeout(() => {
        order.push(order.shift());
        el.style.transition = 'none';
        place();
        void el.offsetWidth;
        el.style.transition = '';
        busy = false;
      }, 520);
    };
    root.addEventListener('click', () => { user = performance.now() + 2500; fly(); });
    place();
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > user) fly();
      setTimeout(tick, 2100);
    };
    setTimeout(tick, 1200);
  },
  prompt: `Build a testimonial card stack where the top card swipes away and the stack advances. Absolutely stack four quote cards (white, 16px radius, layered shadow, with a rating row, the quote and an author row). Give each depth a transform: top translateY(0) scale(1); second translateY(15px) scale(.94); third translateY(29px) scale(.88) at 85 percent opacity; fourth translateY(40px) scale(.82) at 0 opacity, with z-index descending. To advance, send the top card up with transform: translateY(-125%) rotate(-5deg) and opacity 0 over about 500ms, then move it to the back of the order array, apply its back position with transitions disabled for one frame (force a reflow), re-enable transitions and rewrite every card's transform so each moves up one layer with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%). Advance on tap, swipe (pointer drag with a distance or velocity threshold), arrow keys and a slow timer when idle. Provide next and previous buttons, a live region announcing "Review 2 of 4", and under prefers-reduced-motion replace the fly-out with a crossfade. Animate transform and opacity only.` + END,
});

ML.add({
  id: 'testimonials-avatar-switch',
  cat: 'testimonials',
  title: 'Avatar switcher',
  sub: 'Pick an avatar, the quote swaps',
  html: `<div class="fq">${[0, 1, 2, 3, 4].map((i) => `<figure class="q ${i ? '' : 'on'}"><blockquote>${P[i][2]}</blockquote><figcaption><b>${P[i][0]}</b><span>${P[i][1]}</span></figcaption></figure>`).join('')}</div><div class="avs"><i class="rg"></i>${[0, 1, 2, 3, 4].map((i) => `<button class="a ${i ? '' : 'on'}" type="button" aria-label="${P[i][0]}"><span class="av">${av(i)}</span></button>`).join('')}</div>`,
  css: S + `
.d .fq{position:absolute;left:0;right:0;top:0;bottom:30%;display:grid;padding:0 12%}
.d .q{grid-area:1/1;display:grid;align-content:end;justify-items:center;gap:12px;padding-bottom:14px;text-align:center;opacity:0;transform:translateY(8px);transition:opacity .35s ease,transform .6s var(--ml-spring)}
.d .q.on{opacity:1;transform:none;transition-delay:.12s}
.d blockquote{font:600 17px/1.28 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d figcaption{display:grid;gap:4px}
.d figcaption b{font:600 12px/1 var(--ml-font)}
.d figcaption span{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
.d .avs{position:absolute;left:50%;bottom:9%;display:flex;gap:10px;transform:translateX(-50%)}
.d .a{appearance:none;border:0;background:none;cursor:pointer;position:relative;width:38px;height:38px;border-radius:50%;opacity:.55;transform:scale(.88);transition:opacity .3s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .a.on{opacity:1;transform:none}
.d .av{display:block;width:100%;height:100%;border-radius:50%;overflow:hidden}
.d .av svg{width:100%;height:100%;display:block}
.d .rg{position:absolute;left:-4px;top:-4px;width:46px;height:46px;border-radius:50%;border:2px solid var(--ml-accent);pointer-events:none;transform:translateX(calc(var(--n,0) * 48px));transition:transform .6s var(--ml-spring)}
.d .a:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const q = [...root.querySelectorAll('.q')];
    const a = [...root.querySelectorAll('.a')];
    const rg = root.querySelector('.rg');
    let n = 0;
    let user = 0;
    const go = (i) => {
      n = (i + q.length) % q.length;
      rg.style.setProperty('--n', n);
      q.forEach((x, j) => x.classList.toggle('on', j === n));
      a.forEach((x, j) => x.classList.toggle('on', j === n));
    };
    a.forEach((x, j) => x.addEventListener('click', () => { user = performance.now() + 2500; go(j); }));
    go(0);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > user) go(n + 1);
      setTimeout(tick, 2000);
    };
    setTimeout(tick, 1400);
  },
  prompt: `Build a testimonial switcher driven by a row of avatars. Show one featured quote (about 24-32px on a real page, semibold, tight tracking, centered) above a row of five round avatar buttons. Stack the quotes in one grid cell; the active one is opacity 1 and translateY(0), inactive ones opacity 0 and translateY(8px), transitioning about 350ms for opacity and 600ms for transform with cubic-bezier(.32,.72,0,1), the incoming one delayed by 120ms so the swap reads as out then in. Inactive avatars sit at opacity .55 and scale(.88); the active one is full size. Add one single ring element (2px accent border, 4px larger than an avatar) and move it with transform: translateX(calc(var(--n) * (avatarSize + gap))) so the ring glides between avatars on a spring instead of each avatar toggling its own border. Wire the avatars as role="tablist" tabs with role="tabpanel" quotes, arrow-key navigation and aria-selected, auto-advance every 4 seconds until the visitor interacts, and under prefers-reduced-motion switch instantly. Animate transform and opacity only.` + END,
});

ML.add({
  id: 'testimonials-masonry',
  cat: 'testimonials',
  title: 'Masonry wall',
  sub: 'Quote cards pop in a staggered grid',
  html: `<div class="mz">${[[0, 3], [1, 5]].map((c, ci) => `<div class="col ${ci ? 'b' : ''}">${c.map((k, n) => `<figure class="c ${k === 5 ? 'hi' : ''}" style="--i:${ci + n * 2}"><blockquote>${P[k][2]}</blockquote><figcaption>${by(k)}</figcaption></figure>`).join('')}</div>`).join('')}</div>`,
  css: S + AVC + BY + `
.d .mz{position:absolute;inset:10px 12px;display:grid;grid-template-columns:1fr 1fr;gap:7px;align-content:start}
.d .col{display:grid;gap:7px;align-content:start}
.d .col.b{padding-top:14px}
.d .c{display:grid;gap:6px;padding:9px 10px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow);opacity:0;animation:pop 6s infinite both;animation-delay:calc(var(--i) * 140ms)}
.d .c blockquote{font:500 11px/1.32 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink-2)}
.d .c.hi{background:var(--ml-accent);box-shadow:0 8px 24px rgba(255,68,51,.25)}
.d .c.hi blockquote{font-weight:600;font-size:12px;color:#fff}
.d .c.hi .nm b{color:#fff}
.d .c.hi .av{display:none}
.d .c.hi .nm span{color:rgba(255,255,255,.75)}
.d .av{width:22px;height:22px}
@keyframes pop{0%,4%{opacity:0;transform:scale(.82) translateY(10px);animation-timing-function:var(--ml-bounce)}20%,82%{opacity:1;transform:none;animation-timing-function:ease-in}94%,100%{opacity:0;transform:scale(.97)}}
`,
  prompt: `Build a masonry wall of testimonial cards that pop in one after another. Use two or three CSS grid columns (or CSS multi-column with break-inside: avoid) so cards of different heights pack tightly, offset one column by 20px for an organic stagger. Each card is a white surface with a 14px radius, soft shadow, rating stars, the quote and a small avatar plus name; make one card an accent-filled highlight with white text for rhythm. Animate each card from opacity 0, transform: scale(.82) translateY(10px) to scale(1) translateY(0) using a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1.0 100%) over about 700ms, staggering the delay 140ms in reading order and triggering once with an IntersectionObserver (threshold 0.2). Animate transform and opacity only. Keep text at least 11-12px on a real page, ensure the white-on-accent card meets 4.5:1 contrast, and under prefers-reduced-motion render everything immediately.` + END,
});

const HEART = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>';
const RPT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>';
const MSG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
ML.add({
  id: 'testimonials-social',
  cat: 'testimonials',
  title: 'Post-style cards',
  sub: 'Posts pop in, like counts tick up',
  html: `<div class="fd">${[[0, 'mayar', 'Cut our onboarding from two weeks to three days. Wild.', 128, 31], [2, 'priyan', 'Our team stopped asking where the numbers were.', 86, 19]].map(([i, h, t, l, r], n) => `<article class="po" data-l="${l}"><div class="hd"><div class="av">${av(i)}</div><div class="nm"><b>${P[i][0]}</b><span>@${h}</span></div></div><p>${t}</p><div class="ac"><span class="lk">${HEART}<em>0</em></span><span>${RPT}${r}</span><span>${MSG}${6 + n * 3}</span></div></article>`).join('')}</div>`,
  css: S + `
.d .fd{position:absolute;left:10%;right:10%;top:0;bottom:0;display:grid;align-content:center;gap:8px}
.d .po{display:grid;gap:7px;padding:10px 12px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow);opacity:0;transform:scale(.88) translateY(10px);transition:opacity .25s ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .po.in{opacity:1;transform:none}
.d .hd{display:flex;align-items:center;gap:8px}
.d .av{width:26px;height:26px;border-radius:50%;overflow:hidden}
.d .av svg{width:100%;height:100%;display:block}
.d .nm{display:grid;gap:3px}
.d .nm b{font:600 11px/1 var(--ml-font)}
.d .nm span{font:500 10px/1 var(--ml-font);color:var(--ml-muted)}
.d .po p{font:500 12px/1.3 var(--ml-font);color:var(--ml-ink);letter-spacing:-.01em}
.d .ac{display:flex;gap:16px;font:500 10.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .ac span{display:inline-flex;align-items:center;gap:4px}
.d .ac svg{width:13px;height:13px}
.d .ac em{font-style:normal;font-variant-numeric:tabular-nums}
.d .lk.on{color:var(--ml-accent)}
.d .lk.on svg{fill:var(--ml-accent);animation:hp .5s var(--ml-ease)}
@keyframes hp{0%{transform:scale(.6)}60%{transform:scale(1.35)}100%{transform:scale(1)}}
`,
  run: (root) => {
    const po = [...root.querySelectorAll('.po')];
    const lk = po.map((p) => p.querySelector('.lk'));
    const em = po.map((p) => p.querySelector('em'));
    const tg = po.map((p) => +p.dataset.l);
    const cycle = 6600;
    let e = 0;
    let last = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = t - last;
      last = t;
      if (root.dataset.paused || dt > 200) return;
      e = (e + dt) % cycle;
      po.forEach((p, i) => {
        const st = 300 + i * 650;
        p.classList.toggle('in', e > st && e < 5900);
        const k = Math.min(Math.max((e - st - 350) / 1500, 0), 1);
        const v = Math.round(tg[i] * (1 - Math.pow(1 - k, 3)));
        em[i].textContent = String(v);
        lk[i].classList.toggle('on', k >= 1 && e < 5900);
      });
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build social-post-style testimonial cards (generic, with no real network branding) that pop in with live-feeling engagement counts. Each card is a white surface with a 14px radius and soft shadow: avatar, display name, handle, the post text, and an action row with a heart, repost and reply icon (Lucide style, 13px, stroke 2) plus counts in tabular-nums. When the stack scrolls into view, pop each card in from opacity 0 and transform: scale(.88) translateY(10px) with a slight-overshoot spring (linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1.0 100%) over about 600ms), staggered 650ms apart. After each lands, count its likes from 0 to the final value in a requestAnimationFrame loop with an ease-out-cubic curve over 1.5 seconds, then switch the heart to your accent color, fill it, and give it a quick pop keyframe (scale .6 to 1.35 to 1). Expose the final count in an aria-label and keep the ticking number aria-hidden. Under prefers-reduced-motion show final counts immediately with no pop.` + END,
});

ML.add({
  id: 'testimonials-video',
  cat: 'testimonials',
  title: 'Video testimonials',
  sub: 'A thumbnail expands and plays',
  html: `<div class="vr">${[1, 3, 0].map((i, n) => `<button class="th ${n === 1 ? 'on' : ''}" type="button" aria-label="Play ${P[i][0]} story"><div class="im">${por(i)}</div><span class="ply">${PLAY}</span><div class="ov"><b>${P[i][0]}</b><span>${P[i][1]}</span><div class="pr"><i></i></div></div></button>`).join('')}</div>`,
  css: S + `
.d .vr{position:absolute;inset:0;display:flex;justify-content:center;align-items:center;gap:10px}
.d .th{appearance:none;border:0;background:none;cursor:pointer;position:relative;flex:none;width:26%;aspect-ratio:3/4;height:auto;border-radius:14px;overflow:hidden;box-shadow:var(--ml-shadow);opacity:.7;transform:scale(.92);transition:transform .7s var(--ml-spring),opacity .4s ease,box-shadow .5s ease}
.d .th.on{opacity:1;transform:scale(1.36);z-index:2;box-shadow:var(--ml-shadow-lg)}
.d .im{position:absolute;inset:0}
.d .im svg{width:100%;height:100%;display:block}
.d .ply{position:absolute;left:50%;top:42%;width:26px;height:26px;margin:-13px 0 0 -13px;display:grid;place-items:center;border-radius:50%;background:rgba(255,255,255,.92);color:var(--ml-accent);transition:opacity .3s ease}
.d .ply svg{width:11px;height:11px;margin-left:1px}
.d .th.on .ply{opacity:0}
.d .ov{position:absolute;left:0;right:0;bottom:0;display:grid;gap:2px;padding:14px 7px 7px;background:linear-gradient(to top,rgba(16,40,90,.62),transparent);text-align:left;color:#fff}
.d .ov b{font:600 9px/1.1 var(--ml-font)}
.d .ov span{font:500 7.5px/1.1 var(--ml-font);opacity:.85}
.d .pr{height:2px;margin-top:4px;border-radius:1px;background:rgba(255,255,255,.4);overflow:hidden;opacity:0;transition:opacity .3s ease}
.d .th.on .pr{opacity:1}
.d .pr i{display:block;height:100%;background:#fff;transform-origin:left;transform:scaleX(0)}
.d .th.on .pr i{animation:pg 3.2s linear forwards}
@keyframes pg{to{transform:scaleX(1)}}
`,
  run: (root) => {
    const th = [...root.querySelectorAll('.th')];
    let a = 1;
    let user = 0;
    const set = (i) => {
      a = i;
      th.forEach((t, j) => t.classList.toggle('on', j === i));
    };
    th.forEach((t, j) => t.addEventListener('click', () => { user = performance.now() + 2500; set(j); }));
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > user) {
        const n = (a + 1) % th.length;
        th[n].classList.remove('on');
        void th[n].offsetWidth;
        set(n);
      }
      setTimeout(tick, 3400);
    };
    setTimeout(tick, 2200);
  },
  prompt: `Build a video testimonial row: three portrait thumbnails (3:4, 14px radius, soft shadow) with a round white play button over each and the customer name and role on a gradient scrim at the bottom. The selected thumbnail expands with transform: scale(1.38) (z-index above its neighbours, bigger shadow) over about 700ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%), while the others settle to scale(.92) and opacity .7. Using transform for the expansion keeps it off the layout path. When a thumbnail expands, hide its play button and fill a thin progress bar at the bottom with transform: scaleX from 0 to 1 over the clip length (drive it from the video's timeupdate in production). Clicking a thumbnail selects it and starts playback; opening a full modal player on the second click is a good extension. Use buttons with aria-label "Play Maya R. story", a visible focus-visible ring, captions or transcript for the video, and under prefers-reduced-motion skip the scale and just change opacity and the bar.` + END,
});

ML.add({
  id: 'testimonials-ratings',
  cat: 'testimonials',
  title: 'Rating breakdown',
  sub: 'Star bars fill to the average score',
  html: `<div class="cd"><div class="lf"><b class="av2">0.0</b><div class="stw"><div class="sr bs">${STAR.repeat(5)}</div><div class="sr fl">${STAR.repeat(5)}</div></div><span class="rv">2,184 reviews</span></div><div class="rt">${[[5, 78], [4, 14], [3, 5], [2, 2], [1, 1]].map(([n, p]) => `<div class="rw" data-p="${p}"><span>${n}</span><div class="tk"><i></i></div><em>${p}%</em></div>`).join('')}</div></div>`,
  css: S + `
.d{display:grid;place-items:center}
.d .cd{width:88%;display:flex;align-items:center;gap:16px;padding:18px 16px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .lf{flex:none;display:grid;justify-items:center;gap:7px}
.d .av2{font:600 40px/1 var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums}
.d .stw{position:relative;height:14px;width:76px}
.d .sr{position:absolute;left:0;top:0;display:flex;gap:1px}
.d .sr svg{width:14px;height:14px;flex:none}
.d .bs{color:var(--ml-bar)}
.d .fl{color:var(--ml-accent);clip-path:inset(0 100% 0 0)}
.d .rv{font:500 10.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .rt{flex:1;display:grid;gap:8px}
.d .rw{display:grid;grid-template-columns:8px 1fr 26px;align-items:center;gap:7px;font:500 10.5px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .rw em{font-style:normal;text-align:right;color:var(--ml-muted);font-variant-numeric:tabular-nums}
.d .tk{height:7px;border-radius:999px;background:var(--ml-bar-2);overflow:hidden}
.d .tk i{display:block;height:100%;border-radius:999px;background:var(--ml-grad);transform-origin:left;transform:scaleX(0)}
`,
  run: (root) => {
    const num = root.querySelector('.av2');
    const fl = root.querySelector('.fl');
    const bars = [...root.querySelectorAll('.tk i')];
    const pc = [...root.querySelectorAll('.rw')].map((r) => +r.dataset.p / 100);
    const avg = 4.8;
    const cycle = 6000;
    let e = 0;
    let last = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = t - last;
      last = t;
      if (root.dataset.paused || dt > 200) return;
      e = (e + dt) % cycle;
      const out = e > 5300 ? 1 - (e - 5300) / 600 : 1;
      const k = Math.min(Math.max((e - 300) / 1500, 0), 1);
      const ek = 1 - Math.pow(1 - k, 3);
      num.textContent = (avg * ek).toFixed(1);
      fl.style.clipPath = 'inset(0 ' + (100 - (avg / 5) * 100 * ek).toFixed(1) + '% 0 0)';
      bars.forEach((b, i) => {
        const kb = Math.min(Math.max((e - 300 - i * 110) / 1000, 0), 1);
        b.style.transform = 'scaleX(' + (pc[i] * (1 - Math.pow(1 - kb, 3))).toFixed(3) + ')';
      });
      root.firstElementChild.style.opacity = Math.max(0, Math.min(1, out)).toFixed(2);
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a rating breakdown card: a big average score, a five-star row, the review count, and five horizontal bars for 5 to 1 stars with percentages. For the star row, stack two identical rows of star icons: the grey one underneath and an accent-colored one on top clipped with clip-path: inset(0 calc(100% - (average / 5) * 100%) 0 0), so 4.8 fills four stars and 80 percent of the fifth. Animate that inset, the number and the bars together in one requestAnimationFrame loop with an ease-out-cubic curve over about 1.5 seconds: the number counts from 0.0 to 4.8 with toFixed(1) and tabular-nums, and each bar is a full-width pill scaled with transform: scaleX(percent / 100), transform-origin: left, stagger 110ms from the 5-star bar down. Trigger once on scroll-in. Each bar row is a grid of star number, track and percentage. Expose the data accessibly: role="img" with aria-label="4.8 out of 5 from 2,184 reviews" on the score block, role="progressbar" or a table for the rows, never rely on color alone, and under prefers-reduced-motion show the final values immediately.` + END,
});

ML.add({
  id: 'testimonials-typewriter',
  cat: 'testimonials',
  title: 'Quote typewriter',
  sub: 'A quote types itself, author fades in',
  html: `<figure class="tw"><span class="qi">${QI}</span><blockquote data-q="${P[2][2]}|${P[5][2]}"><span class="tx"></span><i class="cr"></i></blockquote><figcaption>${by(2)}</figcaption></figure>`,
  css: S + AVC + BY + `
.d{display:grid;place-items:center}
.d .tw{width:80%;display:grid;gap:14px;justify-items:start}
.d .qi{width:22px;height:22px;color:var(--ml-accent)}
.d .qi svg{width:100%;height:100%;display:block}
.d blockquote{font:600 19px/1.3 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink);min-height:75px}
.d .cr{display:inline-block;width:2px;height:.95em;margin-left:2px;vertical-align:-.12em;border-radius:1px;background:var(--ml-accent);animation:bk 1s steps(1) infinite}
.d figcaption{opacity:0;transform:translateY(6px);transition:opacity .5s ease,transform .6s var(--ml-spring)}
.d figcaption.on{opacity:1;transform:none}
@keyframes bk{50%{opacity:0}}
`,
  run: (root) => {
    const bq = root.querySelector('blockquote');
    const tx = root.querySelector('.tx');
    const cap = root.querySelector('figcaption');
    const nm = cap.querySelector('b');
    const rl = cap.querySelector('.nm span');
    const av = cap.querySelector('.av');
    const qs = bq.dataset.q.split('|');
    const who = [['Priya N.', 'Analytics lead', 2], ['Daniel O.', 'COO', 5]];
    let qi = 0;
    let c = 0;
    let phase = 0;
    let wait = 0;
    let last = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = Math.min(t - last, 100);
      last = t;
      if (root.dataset.paused) return;
      wait += dt;
      if (phase === 0) {
        if (wait > 400) {
          c += dt / 42;
          tx.textContent = qs[qi].slice(0, Math.floor(c));
          if (c >= qs[qi].length) { phase = 1; wait = 0; }
        }
      } else if (phase === 1) {
        if (wait > 250) cap.classList.add('on');
        if (wait > 2600) { phase = 2; wait = 0; cap.classList.remove('on'); }
      } else if (phase === 2) {
        if (wait > 450) {
          c = 0;
          tx.textContent = '';
          qi = (qi + 1) % qs.length;
          nm.textContent = who[qi][0];
          rl.textContent = who[qi][1];
          av.style.opacity = qi ? '.8' : '1';
          phase = 0;
          wait = 0;
        }
      }
    };
    bq.setAttribute('aria-label', qs[0]);
    requestAnimationFrame(loop);
  },
  prompt: `Build a testimonial whose quote types itself out, then reveals the author. Put the quote in a blockquote with a reserved min-height (so the layout does not jump while it grows) and a thin accent caret element after the text that blinks with animation: blink 1s steps(1) infinite. Drive the typing from a requestAnimationFrame or setTimeout loop that increases a character counter by dt / 42 and sets textContent to quote.slice(0, floor(counter)), starting about 400ms after the block scrolls into view. When the last character lands, wait 250ms and fade the figcaption (avatar, name, role) in with opacity 0 to 1 and translateY(6px) to 0 over about 600ms with cubic-bezier(.32,.72,0,1). Hold for a couple of seconds, fade the author out, clear the text and type the next quote. Never type one character per element, which is heavy; update a single text node. Put the full quote in an aria-label (or a visually hidden copy) and mark the typing text aria-hidden so screen readers do not hear it letter by letter. Under prefers-reduced-motion show the complete quote and author at once and skip the loop. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'testimonials-spotlight',
  cat: 'testimonials',
  title: 'Spotlight on hover',
  sub: 'The hovered quote grows, others dim',
  html: `<div class="sp">${[5, 7, 4].map((k, n) => `<figure class="c" tabindex="0"><div class="av">${av(k)}</div><div class="tt"><blockquote>${P[k][2]}</blockquote><figcaption>${P[k][0]}, ${P[k][1]}</figcaption></div></figure>`).join('')}</div>`,
  css: S + `
.d{display:grid;place-items:center}
.d .sp{width:90%;display:grid;gap:8px}
.d .c{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow);cursor:default;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .35s ease,box-shadow .45s ease}
.d .av{flex:none;width:30px;height:30px;border-radius:50%;overflow:hidden}
.d .av svg{width:100%;height:100%;display:block}
.d .tt{display:grid;gap:5px}
.d blockquote{font:600 12.5px/1.25 var(--ml-font);letter-spacing:-.02em;color:var(--ml-ink)}
.d figcaption{font:500 10px/1 var(--ml-font);color:var(--ml-muted)}
.d .sp.has .c{opacity:.38;transform:scale(.97)}
.d .sp.has .c.on{opacity:1;transform:scale(1.07);box-shadow:var(--ml-shadow-lg)}
.d .c:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const sp = root.querySelector('.sp');
    const c = [...root.querySelectorAll('.c')];
    let user = 0;
    let inside = false;
    let k = -1;
    const set = (i) => {
      sp.classList.toggle('has', i >= 0);
      c.forEach((x, j) => x.classList.toggle('on', j === i));
    };
    c.forEach((x, j) => {
      x.addEventListener('pointerenter', () => { inside = true; user = performance.now() + 2500; set(j); });
      x.addEventListener('focus', () => set(j));
    });
    sp.addEventListener('pointerleave', () => { inside = false; set(-1); });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !inside && performance.now() > user) {
        k = k >= c.length - 1 ? -1 : k + 1;
        set(k);
      }
      setTimeout(tick, k === -1 ? 900 : 1500);
    };
    setTimeout(tick, 800);
  },
  prompt: `Build a testimonial list with a spotlight effect: hovering or focusing one quote enlarges it and dims the others. Stack three or four horizontal quote cards (white, 14px radius, soft shadow, avatar on the left, quote and name on the right) in a grid. Toggle a class on the container when any card is active, so every other card goes to opacity .38 and transform: scale(.97) while the active card goes to opacity 1, transform: scale(1.07) and a deeper shadow, transitioning transform over about 590ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%) and opacity over 350ms. Remove the class when the pointer leaves the whole list so everything returns together, never card by card. Drive it from pointerenter, pointerleave, focus and blur; with CSS only you can use .list:has(.card:hover) .card:not(:hover). Keep the dimmed text legible enough (it is decorative emphasis, not a disabled state), make cards focusable with a focus-visible outline, and under prefers-reduced-motion drop the scale and keep only the opacity change.` + END,
});

ML.add({
  id: 'testimonials-result',
  cat: 'testimonials',
  title: 'Result card',
  sub: 'A metric jumps from before to after',
  html: `<div class="rc"><span class="lb">Conversion rate</span><div class="mt"><span class="bf">2.1%</span><svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg><b class="af">2.1%</b><em class="bd">+224%</em></div><div class="cm"><div class="r"><span>Before</span><div class="tk"><i class="a"></i></div></div><div class="r"><span>After</span><div class="tk"><i class="b"></i></div></div></div><blockquote>The new flow tripled our trial signups in one quarter.</blockquote><div class="by"><div class="av">${av(0)}</div><div class="nm"><b>Maya R.</b><span>Head of Growth</span></div></div></div>`,
  css: S + AVC + BY + `
.d{display:grid;place-items:center}
.d .rc{width:86%;display:grid;gap:10px;padding:15px 16px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}
.d .mt{display:flex;align-items:center;gap:9px}
.d .bf{font:600 17px/1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-muted);text-decoration:line-through;text-decoration-color:var(--ml-bar)}
.d .ar{width:16px;height:16px;color:var(--ml-muted)}
.d .af{font:600 34px/1 var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .bd{margin-left:auto;font:600 11px/1 var(--ml-font);font-style:normal;padding:5px 8px;border-radius:999px;color:var(--ml-accent-ink);background:var(--ml-accent-soft);transform:scale(0);transform-origin:right center;transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .bd.on{transform:scale(1)}
.d .cm{display:grid;gap:5px}
.d .r{display:grid;grid-template-columns:36px 1fr;align-items:center;gap:8px;font:500 10px/1 var(--ml-font);color:var(--ml-muted)}
.d .tk{height:7px;border-radius:999px;background:var(--ml-bar-2);overflow:hidden}
.d .tk i{display:block;height:100%;border-radius:999px;transform-origin:left;transform:scaleX(0)}
.d .tk .a{background:var(--ml-bar)}
.d .tk .b{background:var(--ml-grad)}
.d blockquote{font:600 12px/1.3 var(--ml-font);letter-spacing:-.015em;color:var(--ml-ink)}
`,
  run: (root) => {
    const rc = root.querySelector('.rc');
    const af = root.querySelector('.af');
    const bd = root.querySelector('.bd');
    const ba = root.querySelector('.a');
    const bb = root.querySelector('.b');
    const from = 2.1;
    const to = 6.8;
    const cycle = 6200;
    let e = 0;
    let last = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = t - last;
      last = t;
      if (root.dataset.paused || dt > 200) return;
      e = (e + dt) % cycle;
      const p = Math.min(Math.max((e - 500) / 1700, 0), 1);
      const k = 1 - Math.pow(1 - p, 3);
      af.textContent = (from + (to - from) * k).toFixed(1) + '%';
      ba.style.transform = 'scaleX(' + (from / to * Math.min(1, e / 600)).toFixed(3) + ')';
      bb.style.transform = 'scaleX(' + (from / to + (1 - from / to) * k).toFixed(3) + ')';
      bd.classList.toggle('on', e > 2200 && e < 5600);
      rc.style.opacity = e > 5600 ? String(Math.max(0, 1 - (e - 5600) / 500)) : '1';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a result testimonial card that proves the outcome with a before and after metric next to the quote. Layout: a small uppercase metric label ("Conversion rate"), a row with the old value struck through in muted grey, an arrow icon, and the new value large (32-40px, semibold, tight tracking, tabular-nums), and a delta badge on the right ("+224%", pale accent pill). Under it, two thin comparison bars on a shared scale: "Before" in a neutral color at value / max, "After" in your accent gradient growing from the before length to its final length; both are full-width pills scaled with transform: scaleX and transform-origin: left. When the card scrolls into view, count the new value from the old one to the target in a requestAnimationFrame loop with an ease-out-cubic curve over about 1.7 seconds (value = from + (to - from) * (1 - Math.pow(1 - t, 3)), toFixed(1)), grow the bars in sync, then pop the badge from scale(0) with a slight-overshoot spring. Finish with the customer quote and an author row. Keep the final numbers in the DOM text or an aria-label, state the unit and the time frame next to the claim, and under prefers-reduced-motion show everything final immediately.` + END,
});

const LG = [
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h11M4 17h16"/></svg>',
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3c5 0 9 4 9 9-5 0-9-4-9-9zM12 21c-5 0-9-4-9-9 5 0 9 4 9 9z"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4 4"/></svg>',
  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 15a9 9 0 0 1 18 0z"/><rect x="3" y="18" width="18" height="2.5" rx="1.2"/></svg>',
];
const LN = ['Brightline', 'Fernhill', 'Quillcraft', 'Lumen Labs'];
ML.add({
  id: 'testimonials-logo-slider',
  cat: 'testimonials',
  title: 'Logo and quote slider',
  sub: 'Company mark and quote slide together',
  html: `<div class="vw"><div class="tk">${[0, 1, 2, 3].map((i) => `<figure class="sl"><div class="lg">${LG[i]}<b>${LN[i]}</b></div><blockquote>${P[[1, 2, 5, 6][i]][2]}</blockquote><figcaption>${P[[1, 2, 5, 6][i]][0]}, ${P[[1, 2, 5, 6][i]][1]}</figcaption></figure>`).join('')}</div></div><div class="dots">${[0, 1, 2, 3].map((i) => `<button type="button" class="${i ? '' : 'on'}" aria-label="Slide ${i + 1}"><i></i></button>`).join('')}</div>`,
  css: S + `
.d .vw{position:absolute;left:0;right:0;top:0;bottom:28px;overflow:hidden}
.d .tk{display:flex;height:100%;transform:translateX(calc(var(--n,0) * -100%));transition:transform .8s var(--ml-spring)}
.d .sl{flex:none;width:100%;display:grid;align-content:center;justify-items:center;gap:13px;padding:0 13%;text-align:center}
.d .lg{display:flex;align-items:center;gap:7px;color:var(--ml-ink-2)}
.d .lg svg{width:20px;height:20px}
.d .lg b{font:600 14px/1 var(--ml-font);letter-spacing:-.03em}
.d blockquote{font:600 16px/1.3 var(--ml-font);letter-spacing:-.025em;color:var(--ml-ink)}
.d figcaption{font:500 11px/1 var(--ml-font);color:var(--ml-muted)}
.d .dots{position:absolute;left:0;right:0;bottom:12px;display:flex;justify-content:center;gap:6px}
.d .dots button{appearance:none;border:0;cursor:pointer;width:7px;height:7px;padding:0;border-radius:999px;background:var(--ml-bar);overflow:hidden;transition:width var(--ml-spring-dur) var(--ml-spring)}
.d .dots button.on{width:26px}
.d .dots i{display:block;height:100%;background:var(--ml-accent);transform-origin:left;transform:scaleX(0)}
.d .dots .on i{animation:fi 2.4s linear forwards}
@keyframes fi{to{transform:scaleX(1)}}
`,
  run: (root) => {
    const tk = root.querySelector('.tk');
    const dots = [...root.querySelectorAll('.dots button')];
    let n = 0;
    let user = 0;
    const go = (i) => {
      n = (i + dots.length) % dots.length;
      tk.style.setProperty('--n', n);
      dots.forEach((d, j) => {
        d.classList.remove('on');
        if (j === n) {
          void d.offsetWidth;
          d.classList.add('on');
        }
      });
    };
    dots.forEach((d, j) => d.addEventListener('click', () => { user = performance.now() + 2500; go(j); }));
    go(0);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > user) go(n + 1);
      setTimeout(tick, 2500);
    };
    setTimeout(tick, 2500);
  },
  prompt: `Build a customer-logo and quote slider where the company mark and its quote move together as one slide. Use a flex track of full-width slides inside an overflow: hidden viewport; each slide centers a monochrome logo (an icon plus wordmark in a muted ink), a large quote and a name and role line. Move the track with transform: translateX(calc(var(--n) * -100%)) transitioning over about 800ms with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.976 61.1%, 1 100%). Below it, show progress dots: the active dot stretches from 7px to 26px and fills with your accent color from left to right over the autoplay interval (a child bar animated with transform: scaleX, linear), so the dot doubles as a countdown to the next slide; restart the fill by removing the class, forcing a reflow and re-adding it. Autoplay every 4-5 seconds, pause on hover and focus, and allow swipe, arrow keys and clicking dots. Use aria-roledescription="carousel", label each slide "n of total" and expose dots as real buttons. Under prefers-reduced-motion stop autoplay and switch slides instantly. Animate transform only.` + END,
});
})();
