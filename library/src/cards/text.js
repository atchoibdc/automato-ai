// Text and typography. "Real component" demos: real type, set large, centered on --ml-surface.
(() => {
const C = `.d{display:grid;place-items:center;background:var(--ml-surface)}`;
const T = `.d .t{font:600 40px/1.04 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink);text-align:center}`;
const END = ` Keep the real text in the DOM (aria-label on the wrapper, aria-hidden on decorative pieces) and, under prefers-reduced-motion, show the final state with no animation. Plain HTML, CSS and JS, no libraries.`;

ML.add({
  id: 'text-split-chars',
  cat: 'text',
  title: 'Split chars rise',
  sub: 'Letters rise from a mask, staggered',
  html: `<h2 class="t" data-t="Build|faster."></h2>`,
  css: C + T + `
.d .t{font-size:58px;letter-spacing:-.045em}
.d .w{display:block;overflow:hidden;padding:.04em .05em .16em}
.d .w + .w{margin-top:-.12em;color:var(--ml-accent)}
.d .c{display:inline-block;animation:rise 4.2s var(--ml-ease) infinite both;animation-delay:calc(var(--i) * 55ms)}
@keyframes rise{0%{transform:translateY(118%)}24%,72%{transform:translateY(0)}90%,100%{transform:translateY(-118%)}}
`,
  run: (root) => {
    const el = root.querySelector('.t');
    el.setAttribute('aria-label', el.dataset.t.replace('|', ' '));
    let n = 0;
    el.dataset.t.split('|').forEach((line) => {
      const w = document.createElement('span');
      w.className = 'w';
      w.setAttribute('aria-hidden', 'true');
      for (const ch of line) {
        const c = document.createElement('span');
        c.className = 'c';
        c.textContent = ch;
        c.style.setProperty('--i', n++);
        w.appendChild(c);
      }
      el.appendChild(w);
    });
  },
  prompt: `Build a headline entrance where every letter rises out of an invisible mask. Split the heading into one span per character (keep a wrapper per line with overflow: hidden and a little bottom padding so descenders are not clipped). Each character is display: inline-block and starts at transform: translateY(118%); animate it to translateY(0) with a 700ms cubic-bezier(.32,.72,0,1) curve, staggering the start by 40-60ms per character through a CSS variable (animation-delay: calc(var(--i) * 55ms)). Trigger it when the heading scrolls into view with an IntersectionObserver (threshold 0.4), adding a class once. Only animate transform. Use a large semibold face with tight tracking (-0.04em) and let the last line use your accent color.` + END,
});

ML.add({
  id: 'text-blur-in',
  cat: 'text',
  title: 'Blur in',
  sub: 'Words resolve from blur, one by one',
  html: `<h2 class="t"><span class="wd" style="--i:0">Design</span><span class="wd" style="--i:1">that</span><span class="wd a" style="--i:2">moves</span></h2>`,
  css: C + T + `
.d .t{font-size:54px}
.d .wd{display:block;animation:bl 4.6s var(--ml-ease) infinite both;animation-delay:calc(var(--i) * 190ms)}
.d .a{color:var(--ml-accent)}
@keyframes bl{0%{opacity:0;filter:blur(14px);transform:translateY(12px) scale(.97)}22%,74%{opacity:1;filter:blur(0);transform:none}92%,100%{opacity:0;filter:blur(8px);transform:translateY(-6px)}}
`,
  prompt: `Add a blur-to-sharp word reveal for a hero headline. Wrap each word in an inline-block span. Start every word at opacity: 0; filter: blur(14px); transform: translateY(12px) scale(.97) and animate to opacity: 1; filter: blur(0); transform: none over 800ms with cubic-bezier(.32,.72,0,1). Stagger words by 120-190ms using animation-delay: calc(var(--i) * 160ms). Fire it once when the heading enters the viewport (IntersectionObserver, threshold 0.5). Blur is the expensive part, so only blur short headlines, add will-change: filter, opacity, transform while animating and remove it after, and never blur more than a dozen words at once. Use a large semibold type with tight tracking and tint the key word with your accent color.` + END,
});

ML.add({
  id: 'text-scramble',
  cat: 'text',
  title: 'Scramble decode',
  sub: 'Random glyphs settle into the word',
  html: `<div class="box"><span class="lb">DECODING</span><div class="t" aria-live="polite"></div></div>`,
  css: C + `
.d .box{display:grid;gap:14px;justify-items:center}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.16em;color:var(--ml-muted);padding:5px 9px;border-radius:999px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .t{font:500 29px/1 var(--ml-mono);letter-spacing:-.03em;color:var(--ml-ink);white-space:pre;min-height:1em}
.d .t i{font-style:normal;color:var(--ml-accent-2)}
`,
  run: (root) => {
    const el = root.querySelector('.t');
    const words = ['Ship it today', 'Build faster', 'Make it clear', 'Ready to go'];
    const glyphs = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&*+<>/';
    let wi = 0;
    const start = () => {
      if (!root.isConnected) return;
      const target = words[wi];
      wi = (wi + 1) % words.length;
      let frame = 0;
      const step = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused) return void setTimeout(step, 250);
        frame++;
        let out = '';
        let done = true;
        for (let i = 0; i < target.length; i++) {
          const ch = target[i];
          if (ch === ' ' || frame >= 6 + i * 3) out += ch;
          else {
            done = false;
            out += '<i>' + glyphs[(Math.random() * glyphs.length) | 0] + '</i>';
          }
        }
        el.innerHTML = out;
        setTimeout(done ? start : step, done ? 1700 : 38);
      };
      step();
    };
    start();
  },
  prompt: `Build a text-scramble decode effect for a headline or a status word. Keep the final string in a data attribute. On trigger, run a timer every 35-45ms: for each character index i, if the frame count has passed a per-character settle frame (for example 6 + i * 3) print the real character, otherwise print a random glyph from a pool like "ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#%&*+<>/". Render unsettled glyphs in a lighter accent color and settled ones in your text color so the decode reads left to right. Use a monospace face so the width never jitters, keep spaces untouched, and set aria-label to the final text so screen readers never hear the noise. Stop the timer when every character has settled. Cycle phrases with a 1.5 second hold.` + END,
});

ML.add({
  id: 'text-typewriter',
  cat: 'text',
  title: 'Typewriter',
  sub: 'Types, holds, deletes, with a caret',
  html: `<div class="ed"><span class="lb">Headline</span><div class="t"><span class="txt"></span><i class="caret"></i></div></div>`,
  css: C + `
.d .ed{width:82%;padding:16px 18px 24px;background:var(--ml-bg);border-radius:14px;box-shadow:var(--ml-shadow);display:grid;gap:18px}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ml-muted)}
.d .t{font:600 31px/1.1 var(--ml-font);letter-spacing:-.035em;color:var(--ml-ink);white-space:nowrap;min-height:1.1em;display:flex;align-items:center}
.d .caret{display:inline-block;width:3px;height:.95em;margin-left:3px;border-radius:2px;background:var(--ml-accent);animation:blink 1s steps(1) infinite}
@keyframes blink{0%,49%{opacity:1}50%,100%{opacity:0}}
`,
  run: (root) => {
    const el = root.querySelector('.txt');
    const phrases = ['Build faster.', 'Design that moves', 'Ship it today'];
    let p = 0;
    let n = 0;
    let del = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (root.dataset.paused) return void setTimeout(tick, 250);
      const w = phrases[p];
      if (!del) {
        n++;
        el.textContent = w.slice(0, n);
        if (n === w.length) {
          del = true;
          return void setTimeout(tick, 1500);
        }
        setTimeout(tick, 70 + Math.random() * 70);
      } else {
        n--;
        el.textContent = w.slice(0, n);
        if (n === 0) {
          del = false;
          p = (p + 1) % phrases.length;
          return void setTimeout(tick, 420);
        }
        setTimeout(tick, 30);
      }
    };
    tick();
  },
  prompt: `Add a typewriter headline that cycles through three phrases. In JavaScript keep an index and a character count; every tick set textContent to phrase.slice(0, n). Type forward at a human, slightly irregular pace (70-140ms per character, add random jitter), hold the finished phrase for 1.5 seconds, then delete at about 30ms per character, pause 400ms and move to the next phrase. Draw the caret as a 3px wide rounded bar in your accent color, animated with a steps(1) opacity blink every 1s, and keep it solid while typing. Give the container a min-height so the layout never jumps, keep it on one line with white-space: nowrap, and expose the full phrase list to assistive tech through an aria-label while the animated span is aria-hidden. Stop the timer when the element is offscreen.` + END,
});

ML.add({
  id: 'text-shine',
  cat: 'text',
  title: 'Shine sweep',
  sub: 'A light band sweeps across the text',
  html: `<h2 class="t">Design<br>that moves</h2>`,
  css: C + T + `
.d .t{font-size:46px;background:linear-gradient(105deg,var(--ml-ink) 30%,var(--ml-accent-2) 42%,var(--ml-accent) 50%,var(--ml-accent-2) 58%,var(--ml-ink) 70%);background-size:260% 100%;background-position:130% 0;-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;animation:sh 3.8s linear infinite}
@keyframes sh{0%{background-position:130% 0}70%,100%{background-position:-30% 0}}
`,
  prompt: `Create a shine sweep across large gradient text. Set the heading to color: transparent with -webkit-background-clip: text; background-clip: text, and give it a background of linear-gradient(105deg, text-color 38%, a lighter accent 47%, white 50%, the lighter accent 53%, text-color 62%) with background-size: 260% 100%. Animate background-position from 130% 0 to -30% 0 over about 3.8 seconds with linear timing and add a rest at the end of the keyframes (reach -30% at 70% of the timeline) so the sweep repeats with a pause. Only background-position animates, which keeps it cheap. Add a solid color fallback for browsers without background-clip: text, and a prefers-reduced-motion rule that freezes the background-position at 50%.` + END,
});

const sep = `<svg class="sep" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c.8 6.2 3.8 9.2 10 10-6.2.8-9.2 3.8-10 10-.8-6.2-3.8-9.2-10-10 6.2-.8 9.2-3.8 10-10z" fill="currentColor"/></svg>`;
const grp = (a, b, c) => `<div class="g"><span>${a}</span>${sep}<span>${b}</span>${sep}<span>${c}</span>${sep}</div>`;
ML.add({
  id: 'text-marquee',
  cat: 'text',
  title: 'Marquee ticker',
  sub: 'Seamless ticker with star separators',
  html: `<div class="rows"><div class="row"><div class="tr">${grp('Design', 'Develop', 'Deploy').repeat(4)}</div></div><div class="row o"><div class="tr rev">${grp('Motion', 'Type', 'Color').repeat(4)}</div></div></div>`,
  css: C + `
.d .rows{width:100%;display:grid;gap:10px;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
.d .row{overflow:hidden;white-space:nowrap}
.d .tr{display:flex;width:max-content;animation:mq 14s linear infinite}
.d .tr.rev{animation-direction:reverse;animation-duration:18s}
.d .g{display:flex;align-items:center;flex:none}
.d .g span{font:700 50px/1.1 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .o .g span{color:transparent;-webkit-text-stroke:1.4px var(--ml-ink)}
.d .sep{width:22px;height:22px;margin:0 20px;color:var(--ml-accent);flex:none}
@keyframes mq{to{transform:translateX(-50%)}}
`,
  prompt: `Build a seamless horizontal text ticker (marquee) with two rows moving in opposite directions. Make one track per row containing the same group of items repeated four times, each item followed by a small star or dot separator in your accent color. Animate the track with transform: translateX(0) to translateX(-50%), linear, infinite, 14-18 seconds, so the second half lines up exactly with the first (the repeated groups must together be wider than the viewport). Row two uses animation-direction: reverse and outlined text (-webkit-text-stroke with transparent fill). Fade the edges with mask-image: linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent). Pause on hover with animation-play-state: paused, set aria-hidden on the duplicated groups, and replace the motion with a static wrapped list under prefers-reduced-motion.`,
});

ML.add({
  id: 'text-word-flip',
  cat: 'text',
  title: 'Word rotate',
  sub: 'A word flips on X to the next one',
  html: `<div class="t"><span>Make it</span><span class="f"><b style="--i:0">faster</b><b style="--i:1">cleaner</b><b style="--i:2">smarter</b></span></div>`,
  css: C + T + `
.d .t{display:grid;font-size:52px;justify-items:center}
.d .f{display:grid;perspective:520px;color:var(--ml-accent)}
.d .f b{grid-area:1/1;font-weight:600;backface-visibility:hidden;animation:fl 6s var(--ml-ease) infinite both;animation-delay:calc(var(--i) * 2s)}
@keyframes fl{0%{opacity:0;transform:rotateX(-90deg) translateY(.2em)}6%{opacity:1;transform:none}28%{opacity:1;transform:none}34%,100%{opacity:0;transform:rotateX(90deg) translateY(-.2em)}}
`,
  prompt: `Build a rotating-word headline ("Make it faster / cleaner / smarter"). Put the changing words in a grid container where every word sits in the same cell (grid-area: 1 / 1) so the box is always as wide as the longest word. Give the container perspective: 520px. Animate each word with a shared 6 second keyframe set: it enters from transform: rotateX(-90deg) translateY(.2em) with opacity 0, settles to none, holds for roughly two seconds, then leaves to rotateX(90deg) translateY(-.2em); offset each word's animation-delay by one third of the cycle (0s, 2s, 4s) and use animation-fill-mode: both. Use backface-visibility: hidden and the curve cubic-bezier(.32,.72,0,1). Color the rotating word with your accent. For accessibility render the first word statically in the DOM and hide the others with aria-hidden, and under prefers-reduced-motion show only the first word.` + ``,
});

ML.add({
  id: 'text-highlighter',
  cat: 'text',
  title: 'Marker highlight',
  sub: 'A soft blue marker sweeps behind text',
  html: `<h2 class="t">A headline people<br><span class="hl">actually read</span></h2>`,
  css: C + T + `
.d .t{font-size:31px;line-height:1.2}
.d .hl{position:relative;display:inline-block;isolation:isolate;padding:0 .1em}
.d .hl::before{content:"";position:absolute;z-index:-1;left:0;right:0;top:.34em;bottom:-.02em;border-radius:.12em;background:color-mix(in srgb,var(--ml-accent-2) 42%,transparent);transform-origin:left center;transform:scaleX(0) rotate(-1.2deg);animation:hl 4.4s var(--ml-ease) infinite}
@keyframes hl{0%,10%{transform:scaleX(0) rotate(-1.2deg);opacity:1}34%,80%{transform:scaleX(1) rotate(-1.2deg);opacity:1}94%,100%{transform:scaleX(1) rotate(-1.2deg);opacity:0}}
`,
  prompt: `Add a hand-marker highlight that sweeps behind a key phrase in a headline. Wrap the phrase in an inline-block span with position: relative and isolation: isolate. Draw the marker as a ::before pseudo-element with z-index: -1, positioned to cover the lower 60% of the text (top: .34em; bottom: -.02em; left and right 0), border-radius .12em, and a translucent accent color (color-mix(in srgb, your-accent 40%, transparent)) so the letters stay crisp. Start it at transform: scaleX(0) rotate(-1.2deg) with transform-origin: left center and animate to scaleX(1) over 700ms with cubic-bezier(.32,.72,0,1) when the heading scrolls into view. For a looping demo hold for two seconds then fade it out. Use inline-block (not a wrapping inline) so the marker is one clean bar. The highlight is decorative, so keep it out of the accessibility tree and keep text contrast at AA against the tint.`,
});

ML.add({
  id: 'text-squiggle',
  cat: 'text',
  title: 'Underline draw',
  sub: 'A hand-drawn squiggle draws itself',
  html: `<h2 class="t">Feels <span class="u">alive<svg viewBox="0 0 120 14" preserveAspectRatio="none" aria-hidden="true"><path pathLength="1" d="M3 8 C 12 2 18 2 26 7 S 42 12 50 7 S 66 2 74 7 S 90 12 98 7 S 112 3 117 6"/></svg></span></h2>`,
  css: C + T + `
.d .t{font-size:56px}
.d .u{position:relative;display:inline-block}
.d .u svg{position:absolute;left:-2%;bottom:-.2em;width:104%;height:.26em;overflow:visible}
.d .u path{fill:none;stroke:var(--ml-accent);stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1;stroke-dashoffset:1;animation:sq 4.2s var(--ml-ease) infinite}
@keyframes sq{0%,8%{stroke-dashoffset:1}38%,78%{stroke-dashoffset:0}94%,100%{stroke-dashoffset:-1}}
`,
  prompt: `Draw a hand-made squiggle underline under one word of a heading. Place an inline SVG (viewBox 0 0 120 14, preserveAspectRatio none, width a little over 100% of the word) absolutely under the word, containing one wavy path built from smooth cubic curves. Give the path pathLength="1", fill none, stroke your accent color, stroke-width 3-4, stroke-linecap round, stroke-dasharray: 1 and stroke-dashoffset: 1, then animate stroke-dashoffset to 0 over about 900ms with cubic-bezier(.32,.72,0,1) when the heading enters the viewport. To loop, hold the finished line for two seconds and animate dashoffset on to -1 so it wipes out the same way it drew. The SVG is decorative: aria-hidden. Under prefers-reduced-motion render it fully drawn.`,
});

ML.add({
  id: 'text-wave',
  cat: 'text',
  title: 'Letter wave',
  sub: 'Letters bob in a rolling wave',
  html: `<h2 class="t" data-t="Make waves"></h2>`,
  css: C + T + `
.d .t{font-size:43px;white-space:nowrap}
.d .c{display:inline-block;animation:wv 1.9s ease-in-out infinite;animation-delay:calc(var(--i) * 95ms)}
@keyframes wv{0%,100%{transform:translateY(0);color:var(--ml-ink)}50%{transform:translateY(-.2em);color:var(--ml-accent)}}
`,
  run: (root) => {
    const el = root.querySelector('.t');
    el.setAttribute('aria-label', el.dataset.t);
    [...el.dataset.t].forEach((ch, i) => {
      const c = document.createElement('span');
      c.className = 'c';
      c.setAttribute('aria-hidden', 'true');
      c.innerHTML = ch === ' ' ? '&nbsp;' : ch;
      c.style.setProperty('--i', i);
      el.appendChild(c);
    });
  },
  prompt: `Build a continuous letter-wave headline. Split the text into one inline-block span per character (turn spaces into &nbsp;) and give each an index in a CSS variable. Apply one shared keyframe animation: 0% and 100% at translateY(0) in the base text color, 50% at translateY(-0.2em) with the accent color, duration 1.9s, ease-in-out, infinite, with animation-delay: calc(var(--i) * 95ms) so the peak travels left to right like a wave. Animate only transform and color. Because the wave never rests, use it sparingly: as a playful hover state or a short greeting, and pause it with animation-play-state when offscreen or on prefers-reduced-motion. Keep the original string in an aria-label on the heading and mark the character spans aria-hidden.`,
});

ML.add({
  id: 'text-image-fill',
  cat: 'text',
  title: 'Text mask fill',
  sub: 'A landscape drifts inside the letters',
  html: `<h2 class="t">Horizon</h2>`,
  css: C + T + `
.d .t{font-size:70px;font-weight:700;letter-spacing:-.05em;padding:0 .04em .06em;color:transparent;-webkit-text-fill-color:transparent;-webkit-background-clip:text;background-clip:text;background-image:radial-gradient(circle at 74% 30%,#fff 0 7%,rgba(255,255,255,0) 8.5%),radial-gradient(120% 62% at 14% 124%,var(--ml-accent-ink) 0 56%,transparent 57%),radial-gradient(110% 56% at 58% 126%,var(--ml-accent) 0 56%,transparent 57%),radial-gradient(100% 50% at 92% 120%,var(--ml-accent-2) 0 56%,transparent 57%),linear-gradient(180deg,var(--ml-accent-line) 0%,var(--ml-accent-2) 52%,var(--ml-accent) 100%);background-size:260% 100%;background-repeat:no-repeat;animation:pan 7s ease-in-out infinite alternate}
@keyframes pan{from{background-position:0% 0}to{background-position:100% 0}}
`,
  prompt: `Make a large headline whose letters act as a window onto a moving landscape. Set the heading to color: transparent with -webkit-text-fill-color: transparent, -webkit-background-clip: text and background-clip: text, and give it a stack of CSS backgrounds: a small white radial sun, two or three large offset radial-gradient ellipses as hills in different blues, and a vertical sky gradient underneath. Make the background wider than the text (background-size: 260% 100%, no-repeat) and animate background-position from 0% 0 to 100% 0 over 7 seconds, ease-in-out, alternate, infinite, so the scene slides through the glyphs. Use a heavy weight (700+) and tight tracking so there is enough letter area to show the image. Swap the gradients for a real photo (background-image: url(...)) in production. Provide a solid color fallback and a static background-position under prefers-reduced-motion.`,
});

ML.add({
  id: 'text-stroke-fill',
  cat: 'text',
  title: 'Stroke to fill',
  sub: 'Outlined text fills in left to right',
  html: `<div class="st" aria-label="Crafted"><span class="o" aria-hidden="true">Crafted</span><span class="f" aria-hidden="true">Crafted</span></div>`,
  css: C + T + `
.d .st{display:grid;font:700 64px/1.05 var(--ml-font);letter-spacing:-.05em}
.d .st span{grid-area:1/1}
.d .o{color:transparent;-webkit-text-stroke:1.6px var(--ml-ink)}
.d .f{color:var(--ml-accent);clip-path:inset(0 100% 0 0);animation:sf 4.4s var(--ml-ease) infinite}
@keyframes sf{0%,8%{clip-path:inset(0 100% 0 0)}48%,76%{clip-path:inset(0 0 0 0)}94%,100%{clip-path:inset(0 0 0 100%)}}
`,
  prompt: `Build an outline-to-fill text effect. Stack two copies of the same word in one grid cell (grid-area: 1 / 1). The bottom copy is outlined: color: transparent; -webkit-text-stroke: 1.5px your-text-color. The top copy is solid, filled with your accent color, and clipped away with clip-path: inset(0 100% 0 0). Animate the top copy's clip-path to inset(0 0 0 0) over 900ms with cubic-bezier(.32,.72,0,1) on scroll-in or hover so the fill wipes in from the left. For a loop, hold the filled state and then wipe it out to inset(0 0 0 100%). Use a heavy weight at display size (60px+) with tight tracking so the stroke is legible. Hide the duplicated copies from screen readers (aria-hidden) and put the word in an aria-label on the wrapper. Only clip-path animates, so it stays cheap.`,
});

ML.add({
  id: 'text-odometer',
  cat: 'text',
  title: 'Odometer roll',
  sub: 'Digits roll to the next number',
  html: `<div class="od" aria-label="Number"></div>`,
  css: C + `
.d .od{display:flex;font:600 72px/1.1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .col{width:.6em;height:1.1em;overflow:hidden;-webkit-mask-image:linear-gradient(transparent,#000 14%,#000 86%,transparent);mask-image:linear-gradient(transparent,#000 14%,#000 86%,transparent)}
.d .strip{display:block;transition:transform 1.1s var(--ml-spring)}
.d .strip span{display:block;height:1.1em;text-align:center}
.d .cm{width:.3em;text-align:center;height:1.1em}
`,
  run: (root) => {
    const od = root.querySelector('.od');
    const vals = [2048, 2471, 3896, 1127];
    const tpl = '0,000';
    const strips = [];
    for (const ch of tpl) {
      if (ch === ',') {
        const s = document.createElement('span');
        s.className = 'cm';
        s.textContent = ',';
        od.appendChild(s);
      } else {
        const col = document.createElement('div');
        col.className = 'col';
        const strip = document.createElement('div');
        strip.className = 'strip';
        strip.innerHTML = '0123456789'.split('').map((d) => '<span>' + d + '</span>').join('');
        col.appendChild(strip);
        od.appendChild(col);
        strips.push(strip);
      }
    }
    const show = (v, delayed) => {
      const digits = String(v).padStart(strips.length, '0').split('');
      digits.forEach((d, i) => {
        strips[i].style.transitionDelay = delayed ? (strips.length - 1 - i) * 90 + 'ms' : '0ms';
        strips[i].style.transform = 'translateY(' + -d * 10 + '%)';
      });
      od.setAttribute('aria-label', v.toLocaleString('en-US'));
    };
    let k = 0;
    show(vals[0], false);
    const next = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused) {
        k = (k + 1) % vals.length;
        show(vals[k], true);
      }
      setTimeout(next, 2500);
    };
    setTimeout(next, 1400);
  },
  prompt: `Build an odometer-style number that rolls to a new value. For each digit render a column: a fixed-height box (height: 1.1em, overflow: hidden) containing a vertical strip with the digits 0 to 9 stacked, each 1.1em tall. To show a digit d, set the strip to transform: translateY(calc(d * -10%)) and let a transition do the roll: transition: transform 1.1s cubic-bezier(.32,.72,0,1). Stagger the columns from right to left with transition-delay (about 90ms apart) so the ones place settles first. Use font-variant-numeric: tabular-nums, fixed-width columns (0.6em) so nothing shifts, static commas, and a soft top and bottom mask-image fade on each column. Update the aria-label on the container with the real number (or an aria-live polite region) and hide the strips from screen readers. Drive it from real data changes, and under prefers-reduced-motion drop the transition.`,
});

ML.add({
  id: 'text-weight-morph',
  cat: 'text',
  title: 'Weight morph',
  sub: 'A word breathes between thin and bold',
  html: `<h2 class="t">Weight</h2>`,
  css: C + T + `
.d .t{font-size:72px;animation:wm 3.6s ease-in-out infinite alternate}
@keyframes wm{from{font-weight:300;letter-spacing:-.02em}to{font-weight:800;letter-spacing:-.05em}}
`,
  prompt: `Animate a headline's weight so it breathes between thin and heavy, using a variable font (Geist or Inter variable, loaded with the full weight axis, for example wght@100..900). Animate font-weight (or font-variation-settings: "wght" N) from 300 to 800 and back with animation: 3.6s ease-in-out infinite alternate, and animate letter-spacing from -0.02em to -0.05em in the same keyframes so the word keeps a consistent optical width as it gets heavier. Center the text so the reflow is symmetric. Because weight changes affect layout, use it on a single short word in its own fixed-width container (or give the container a min-width of the bold width) so the surrounding content does not shift. Respect prefers-reduced-motion by freezing at weight 600. Plain CSS, no libraries.`,
});

ML.add({
  id: 'text-fade-lines',
  cat: 'text',
  title: 'Fade-up lines',
  sub: 'A paragraph enters line by line',
  html: `<div class="p"><span class="lb">About</span><p><span class="l" style="--i:0">We design and build</span><span class="l" style="--i:1">products people love,</span><span class="l m" style="--i:2">from the first sketch</span><span class="l m" style="--i:3">to the final pixel.</span></p></div>`,
  css: C + `
.d .p{display:grid;gap:14px;justify-items:start}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--ml-accent-ink);padding:5px 9px;border-radius:999px;background:var(--ml-accent-soft)}
.d p{font:600 22px/1.22 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .l{display:block;white-space:nowrap;animation:fu 6s var(--ml-ease) infinite both;animation-delay:calc(var(--i) * 170ms)}
.d .m{color:var(--ml-muted)}
@keyframes fu{0%{opacity:0;transform:translateY(16px)}16%,76%{opacity:1;transform:none}92%,100%{opacity:0;transform:translateY(-6px)}}
`,
  prompt: `Reveal a paragraph line by line. Break the paragraph into line-level spans (display: block). For a responsive paragraph, split by measuring: wrap each word, then group words by offsetTop into lines on load and on resize. Start every line at opacity: 0; transform: translateY(16px) and animate to opacity: 1; transform: none over 700ms with cubic-bezier(.32,.72,0,1), staggering lines by 150-180ms via animation-delay: calc(var(--i) * 170ms). Trigger once when the paragraph is 40% visible using an IntersectionObserver. Use a medium-large semibold size with tight tracking and a muted second half for hierarchy. Only opacity and transform animate. Keep the paragraph as normal text in the DOM and under prefers-reduced-motion show all lines at once.`,
});

ML.add({
  id: 'text-circle',
  cat: 'text',
  title: 'Text on a circle',
  sub: 'A text badge spins around an icon',
  html: `<div class="bd"><svg class="ring" viewBox="0 0 160 160" aria-hidden="true"><defs><path id="tc-p" d="M80 80 m-58 0 a58 58 0 1 1 116 0 a58 58 0 1 1 -116 0"/></defs><text><textPath href="#tc-p" textLength="358" lengthAdjust="spacing">DESIGN · BUILD · SHIP · REPEAT · </textPath></text></svg><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg></span></div>`,
  css: C + `
.d .bd{position:relative;width:168px;height:168px;border-radius:50%;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);display:grid;place-items:center}
.d .ring{position:absolute;inset:4px;width:160px;height:160px;animation:spin 12s linear infinite}
.d .ring text{font:600 12.5px var(--ml-font);letter-spacing:.08em;fill:var(--ml-ink)}
.d .ic{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;color:#fff;background:var(--ml-grad);box-shadow:0 8px 20px rgba(255,68,51,.28)}
.d .ic svg{width:24px;height:24px}
@keyframes spin{to{transform:rotate(360deg)}}
`,
  prompt: `Build a rotating circular text badge. Draw an inline SVG (viewBox 0 0 160 160) with a <defs> circle path (M80 80 m-58 0 a58 58 0 1 1 116 0 a58 58 0 1 1 -116 0) and a <text> that uses <textPath href="#id"> with a short repeating phrase separated by middle dots (for example "DESIGN · BUILD · SHIP · REPEAT · "). Set textLength on the textPath to the circumference (2 * pi * 58, about 364) with lengthAdjust="spacing" so the phrase closes the loop exactly with no gap. Rotate the whole SVG with transform: rotate(360deg), 12 seconds, linear, infinite. Center a round accent button with an arrow icon on top (it can be the real link). Give the SVG aria-hidden and put a proper aria-label on the link. Speed up the rotation on hover or pause it, and stop it under prefers-reduced-motion.`,
});

ML.add({
  id: 'text-shimmer-label',
  cat: 'text',
  title: 'Shimmering label',
  sub: 'An "AI is thinking" label with a shimmer',
  html: `<div class="pill"><svg class="sp" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 17l.7 1.8 1.8.7-1.8.7L19 22l-.7-1.8-1.8-.7 1.8-.7z"/></svg><span class="sh" role="status">AI is thinking...</span></div>`,
  css: C + `
.d .pill{display:flex;align-items:center;gap:10px;padding:13px 20px 13px 16px;border-radius:999px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .sp{width:20px;height:20px;color:var(--ml-accent);animation:tw 2.4s ease-in-out infinite}
.d .sh{font:600 20px/1 var(--ml-font);letter-spacing:-.02em;color:transparent;-webkit-text-fill-color:transparent;background:linear-gradient(100deg,var(--ml-muted) 35%,var(--ml-ink) 50%,var(--ml-muted) 65%);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;animation:sm 1.8s linear infinite}
@keyframes sm{from{background-position:130% 0}to{background-position:-30% 0}}
@keyframes tw{0%,100%{transform:scale(1) rotate(0)}50%{transform:scale(1.18) rotate(14deg)}}
`,
  prompt: `Create the shimmering "thinking" label used by AI chat interfaces while a reply loads. Render a pill (999px radius, white, soft shadow) with a small sparkle icon in your accent color and a text label. Make the label a muted grey and give it a moving highlight: color: transparent; background: linear-gradient(100deg, muted 35%, strong-ink 50%, muted 65%); background-size: 250% 100%; -webkit-background-clip: text; background-clip: text; then animate background-position from 130% 0 to -30% 0 over 1.8 seconds, linear, infinite. Let the sparkle icon pulse gently (scale 1 to 1.18 with a slight rotation, 2.4s). Mark the label role="status" (or aria-live="polite") so assistive tech announces it once, and remove the animation under prefers-reduced-motion, leaving plain muted text. Stop it as soon as the real response arrives.`,
});

ML.add({
  id: 'text-flip-3d',
  cat: 'text',
  title: '3D cube words',
  sub: 'Words on the faces of a turning cube',
  html: `<div class="wrap"><span class="lb">OUR PROCESS</span><div class="stage3"><div class="cube"><div class="fc" style="--k:0">Design</div><div class="fc" style="--k:1">Build</div><div class="fc a" style="--k:2">Ship</div><div class="fc" style="--k:3">Repeat</div></div></div></div>`,
  css: C + `
.d .wrap{display:grid;gap:18px;justify-items:center}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.16em;color:var(--ml-muted)}
.d .stage3{perspective:760px}
.d .cube{position:relative;width:210px;height:78px;transform-style:preserve-3d;animation:cb 8s var(--ml-ease) infinite}
.d .fc{position:absolute;inset:0;display:grid;place-items:center;font:600 36px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink);background:var(--ml-bg);border:1px solid var(--ml-line);border-radius:16px;box-shadow:var(--ml-shadow);backface-visibility:hidden;transform:rotateX(calc(var(--k) * 90deg)) translateZ(39px)}
.d .fc.a{background:var(--ml-grad);color:#fff;border-color:transparent}
@keyframes cb{0%,20%{transform:rotateX(0)}25%,45%{transform:rotateX(-90deg)}50%,70%{transform:rotateX(-180deg)}75%,95%{transform:rotateX(-270deg)}100%{transform:rotateX(-360deg)}}
`,
  prompt: `Build a rotating 3D cube of words. Create a perspective wrapper (perspective: 760px) and inside it a cube element with transform-style: preserve-3d, a fixed width and height (for example 210px by 78px). Add four faces positioned absolutely with inset: 0, each transformed by transform: rotateX(calc(var(--k) * 90deg)) translateZ(half-of-height) so they form a four-sided drum, and set backface-visibility: hidden. Style the faces as white cards with a hairline border, 16px radius and a soft shadow, and give one face the accent gradient. Animate the cube with keyframes that rotate the X axis in 90 degree steps (0, -90, -180, -270, -360), holding each word for about 1.6 seconds and turning in 400ms with cubic-bezier(.32,.72,0,1). For accessibility keep one visible text label and expose the full list of words to screen readers once; under prefers-reduced-motion show a single face.`,
});

ML.add({
  id: 'text-spotlight',
  cat: 'text',
  title: 'Spotlight reveal',
  sub: 'A soft light uncovers dim text',
  html: `<div class="sl" aria-label="Find what matters."><div class="tx dim" aria-hidden="true">Find what<br>matters.</div><div class="tx lit" aria-hidden="true">Find what<br>matters.</div></div>`,
  css: C + `
.d .sl{position:absolute;inset:0;display:grid;place-items:center;cursor:crosshair}
.d .tx{grid-area:1/1;font:600 50px/1.04 var(--ml-font);letter-spacing:-.045em;text-align:center;pointer-events:none}
.d .sl{grid-template-areas:"a"}
.d .tx{grid-area:a}
.d .dim{color:var(--ml-bar)}
.d .lit{color:var(--ml-ink);--x:50%;--y:50%;-webkit-mask-image:radial-gradient(circle 82px at var(--x) var(--y),#000 25%,transparent 100%);mask-image:radial-gradient(circle 82px at var(--x) var(--y),#000 25%,transparent 100%)}
`,
  run: (root) => {
    const sl = root.querySelector('.sl');
    const lit = root.querySelector('.lit');
    let userUntil = 0;
    sl.addEventListener('pointermove', (e) => {
      const r = sl.getBoundingClientRect();
      userUntil = performance.now() + 2500;
      lit.style.setProperty('--x', e.clientX - r.left + 'px');
      lit.style.setProperty('--y', e.clientY - r.top + 'px');
    });
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) return;
      const r = sl.getBoundingClientRect();
      lit.style.setProperty('--x', r.width * (0.5 + 0.36 * Math.sin(t / 1250)) + 'px');
      lit.style.setProperty('--y', r.height * (0.5 + 0.16 * Math.sin(t / 830 + 1)) + 'px');
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a spotlight text reveal. Render the same text twice in a stack: a dim copy in a very light blue-grey, and a bright copy in your text color on top. Mask the bright copy with mask-image: radial-gradient(circle 82px at var(--x) var(--y), #000 25%, transparent 100%) and update --x and --y from a pointermove listener on the container (clientX/Y minus getBoundingClientRect). Throttle to requestAnimationFrame. When there is no pointer (touch devices, or idle), drive --x and --y along a slow Lissajous path (x = 0.5 + 0.36 sin(t/1250), y = 0.5 + 0.16 sin(t/830 + 1)) and hand control back to the user for about 2.5 seconds after any interaction. Keep the real text once in the DOM for assistive tech and mark both visual copies aria-hidden. The dim copy must still meet a readable contrast on mobile, or skip the effect there.`,
});

ML.add({
  id: 'text-emphasis',
  cat: 'text',
  title: 'Word emphasis',
  sub: 'One word scales up and turns blue',
  html: `<p class="t"><span class="o">Small details</span><br><span class="o">make a</span> <span class="em">big</span> <span class="o">difference</span></p>`,
  css: C + T + `
.d .t{font-size:33px;line-height:1.2;letter-spacing:-.035em}
.d .em{display:inline-block;margin:0 .2em;animation:em 4.4s var(--ml-bounce) infinite}
.d .o{animation:dm 4.4s ease infinite}
@keyframes em{0%,14%{transform:scale(1);color:var(--ml-ink)}32%,72%{transform:scale(1.34);color:var(--ml-accent)}88%,100%{transform:scale(1);color:var(--ml-ink)}}
@keyframes dm{0%,14%{color:var(--ml-ink)}32%,72%{color:var(--ml-muted)}88%,100%{color:var(--ml-ink)}}
`,
  prompt: `Build a sentence where one word steps forward. Wrap the key word in an inline-block span with a small horizontal margin (about .14em, so its scaled box does not collide with neighbors). Animate it from transform: scale(1) in the text color to scale(1.34) in your accent color using a slight overshoot spring, for example linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.018 55.6%, 1.02 61.1%, 1.018 66.7%, 1.0 100%), about 600ms. At the same time dim the surrounding words to a muted grey so the eye lands on the key word. Trigger it on scroll-in with an IntersectionObserver, or on hover for a link-style version. Animate only transform and color, keep the sentence one coherent text node for screen readers, and drop the scale under prefers-reduced-motion.`,
});

ML.add({
  id: 'text-strike-swap',
  cat: 'text',
  title: 'Strike and replace',
  sub: 'A word is crossed out, a better one lands',
  html: `<div class="t"><span>Make it</span><span class="sw"><span class="old">decent<i class="ln"></i></span><span class="nw">remarkable</span></span></div>`,
  css: C + T + `
.d .t{display:grid;justify-items:center;font-size:48px;gap:2px}
.d .sw{display:grid;justify-items:center}
.d .sw > span{grid-area:1/1}
.d .old{position:relative;color:var(--ml-muted);animation:so 5.2s var(--ml-ease) infinite}
.d .ln{position:absolute;left:-3%;right:-3%;top:55%;height:3px;border-radius:2px;background:var(--ml-ink);transform-origin:left center;transform:scaleX(0);animation:sl 5.2s var(--ml-ease) infinite}
.d .nw{color:var(--ml-accent);animation:sn 5.2s var(--ml-ease) infinite}
@keyframes sl{0%,10%{transform:scaleX(0)}26%,46%{transform:scaleX(1)}94%{transform:scaleX(1)}94.1%,100%{transform:scaleX(0)}}
@keyframes so{0%,40%{opacity:1;transform:none}52%,94%{opacity:0;transform:translateY(.3em)}94.1%{opacity:0;transform:none}100%{opacity:1;transform:none}}
@keyframes sn{0%,42%{opacity:0;transform:translateY(-.35em)}58%,88%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(0)}}
`,
  prompt: `Build a "strike and replace" word swap for a headline ("Make it decent" becomes "Make it remarkable"). Put the old and new words in the same grid cell (grid-area: 1 / 1) so the box takes the width of the longer word. Draw the strike as an absolutely positioned 3px bar at about 55% of the old word's height, with transform-origin: left center, animated from scaleX(0) to scaleX(1) over 450ms with cubic-bezier(.32,.72,0,1). After a short beat (about 400ms), fade the old word out while it drops translateY(.3em), and bring the new word in from translateY(-.35em) with opacity 0 to 1, colored with your accent. Sequence it with animation-delay or a single shared keyframe timeline. For accessibility, expose only the final phrase to screen readers (aria-label), mark both animated words aria-hidden, and under prefers-reduced-motion show the new word only.`,
});

ML.add({
  id: 'text-echo',
  cat: 'text',
  title: 'Stacked echo',
  sub: 'Outlined copies cascade behind a word',
  html: `<div class="ec" aria-label="Echo"><span class="e" style="--k:4" aria-hidden="true">Echo</span><span class="e" style="--k:3" aria-hidden="true">Echo</span><span class="e" style="--k:2" aria-hidden="true">Echo</span><span class="e" style="--k:1" aria-hidden="true">Echo</span><span class="fr" aria-hidden="true">Echo</span></div>`,
  css: C + `
.d .ec{display:grid;margin-top:60px;font:700 76px/1 var(--ml-font);letter-spacing:-.06em}
.d .ec span{grid-area:1/1}
.d .e{color:transparent;-webkit-text-stroke:1.4px var(--ml-accent);opacity:calc(1.1 - var(--k) * .2);animation:ec 4s var(--ml-ease) infinite;animation-delay:calc((4 - var(--k)) * 70ms)}
.d .fr{color:var(--ml-ink)}
@keyframes ec{0%,8%{transform:translateY(0)}40%,64%{transform:translateY(calc(var(--k) * -.3em))}92%,100%{transform:translateY(0)}}
`,
  prompt: `Build a stacked echo headline. Render the same big word five times in one grid cell (grid-area: 1 / 1): four outlined copies (color: transparent; -webkit-text-stroke: 1.4px your-accent) behind and one solid copy in your text color on top, with a heavy weight, huge size and tight tracking. Give each copy an index --k (4 at the back down to 1). Animate transform: translateY(calc(var(--k) * -0.3em)) outward from translateY(0) over about 900ms with cubic-bezier(.32,.72,0,1), holding, then settling back; stagger with animation-delay so the copies peel off one after another, and fade the deeper copies with opacity: calc(1.1 - var(--k) * .2). Reserve vertical space for the cascade (top margin) so nothing clips. Mark the copies aria-hidden and keep one aria-label on the wrapper. Trigger on hover or on scroll-in, and disable under prefers-reduced-motion.`,
});

ML.add({
  id: 'text-tracking',
  cat: 'text',
  title: 'Tracking breathe',
  sub: 'Letter-spacing expands and contracts',
  html: `<h2 class="t">Breathe</h2>`,
  css: C + T + `
.d .t{font-size:46px;font-weight:600;animation:tk 3.8s ease-in-out infinite alternate}
@keyframes tk{from{letter-spacing:-.05em;text-indent:-.05em}to{letter-spacing:.2em;text-indent:.2em}}
`,
  prompt: `Animate letter-spacing so a word breathes in and out. Keyframes: from letter-spacing: -0.05em to letter-spacing: 0.2em, 3.8 seconds, ease-in-out, infinite, alternate. Because tracking adds space after the last letter, center the word optically by animating text-indent to the same value in the same keyframes (text-indent: -0.05em to 0.2em) so the visible glyphs stay centered. Use a mid-large semibold size and keep the container wide enough for the widest state, with white-space: nowrap, so the word never wraps mid-animation. Letter-spacing triggers layout, so use it on one short word, not on a paragraph. This also works as a hover effect for nav links or a CTA label. Under prefers-reduced-motion hold the resting spacing.`,
});

ML.add({
  id: 'text-hover-weight',
  cat: 'text',
  title: 'Hover weight',
  sub: 'Letters get bolder near the pointer',
  html: `<div class="hw" aria-label="Typography"></div>`,
  css: C + `
.d .hw{position:absolute;inset:0;display:grid;place-items:center;cursor:default}
.d .row{display:flex;font:300 44px/1.1 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink)}
.d .row span{display:block;transition:color .15s ease}
.d .dot{position:absolute;bottom:26%;left:0;width:6px;height:6px;margin-left:-3px;border-radius:50%;background:var(--ml-accent)}
`,
  run: (root) => {
    const hw = root.querySelector('.hw');
    const row = document.createElement('div');
    row.className = 'row';
    row.setAttribute('aria-hidden', 'true');
    const chars = [...'Typography'].map((ch) => {
      const s = document.createElement('span');
      s.textContent = ch;
      row.appendChild(s);
      return s;
    });
    hw.appendChild(row);
    const dot = document.createElement('i');
    dot.className = 'dot';
    hw.appendChild(dot);
    let px = null;
    let userUntil = 0;
    hw.addEventListener('pointermove', (e) => {
      px = e.clientX - hw.getBoundingClientRect().left;
      userUntil = performance.now() + 2500;
    });
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused) return;
      const r = hw.getBoundingClientRect();
      const rr = row.getBoundingClientRect();
      let x;
      if (t < userUntil && px !== null) x = px;
      else x = rr.left - r.left + (0.5 + 0.55 * Math.sin(t / 900)) * rr.width;
      dot.style.transform = 'translateX(' + x + 'px)';
      for (const s of chars) {
        const cx = s.offsetLeft + s.offsetWidth / 2 + (rr.left - r.left);
        const d = Math.abs(cx - x) / (rr.width * 0.2);
        const w = 300 + 450 * Math.exp(-d * d);
        s.style.fontWeight = String(Math.round(w / 10) * 10);
        s.style.color = d < 0.7 ? 'var(--ml-accent)' : '';
      }
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a proximity-weight text effect. Split a word into one span per character and use a variable font (load the full weight axis, for example Geist wght@100..900). Track the pointer with a pointermove listener on the container. In a requestAnimationFrame loop, for each character compute its center x, take the distance to the pointer, and set font-weight = 300 + 450 * exp(-(distance / falloff)^2) where falloff is about 20% of the word's width, so letters under the pointer go bold and neighbors taper off smoothly. Tint the closest letters with your accent color. When nothing is hovering (idle or touch), sweep a virtual pointer back and forth with a sine and hand control back to the user for 2.5 seconds after any interaction. Keep the word in an aria-label and the spans aria-hidden. Width changes with weight, so center the word and give the container room; on prefers-reduced-motion keep one static weight.`,
});

ML.add({
  id: 'text-quote',
  cat: 'text',
  title: 'Quote reveal',
  sub: 'Quote marks pop, then words fade up',
  html: `<figure class="q"><svg class="qm" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/></svg><blockquote data-t="Good design is mostly knowing what to leave out."></blockquote><figcaption>Maya R., Design Lead</figcaption></figure>`,
  css: C + `
.d .q{width:82%;display:grid;gap:10px}
.d .qm{width:34px;height:34px;fill:var(--ml-accent);transform-origin:0 100%;animation:qm 8s var(--ml-bounce) infinite both}
.d blockquote{font:600 20px/1.22 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink);text-wrap:balance}
.d .w{display:inline-block;margin-right:.26em;animation:qw 8s var(--ml-ease) infinite both;animation-delay:calc(.55s + var(--i) * 85ms)}
.d figcaption{font:500 11px/1 var(--ml-mono);color:var(--ml-muted);animation:qw 8s var(--ml-ease) infinite both;animation-delay:2.2s}
@keyframes qm{0%{transform:scale(0);opacity:0}8%{transform:scale(1);opacity:1}86%{transform:scale(1);opacity:1}96%,100%{transform:scale(.6);opacity:0}}
@keyframes qw{0%{opacity:0;transform:translateY(10px)}9%,80%{opacity:1;transform:none}92%,100%{opacity:0;transform:none}}
`,
  run: (root) => {
    const bq = root.querySelector('blockquote');
    bq.setAttribute('aria-label', bq.dataset.t);
    bq.dataset.t.split(' ').forEach((w, i) => {
      const s = document.createElement('span');
      s.className = 'w';
      s.setAttribute('aria-hidden', 'true');
      s.textContent = w;
      s.style.setProperty('--i', i);
      bq.appendChild(s);
    });
  },
  prompt: `Build a pull-quote reveal in two beats. First, a large quotation-mark icon (inline SVG, filled with your accent color) scales in from scale(0) to scale(1) with transform-origin: 0 100% and a slight overshoot spring (about 600ms). Then the quote itself appears word by word: split the text into inline-block spans, start each at opacity: 0; transform: translateY(10px), and animate to opacity: 1; transform: none over 600ms with cubic-bezier(.32,.72,0,1), staggering by 80-90ms (animation-delay: calc(0.55s + var(--i) * 85ms)). Finally fade in the attribution in a small monospace label. Trigger once on scroll-in with an IntersectionObserver. Use semibold type with tight tracking. Expose the whole quote once through an aria-label on the blockquote with the word spans aria-hidden, and show everything at once under prefers-reduced-motion.`,
});

ML.add({
  id: 'text-split-hover',
  cat: 'text',
  title: 'Split hover',
  sub: 'Halves slide apart to reveal a word',
  html: `<div class="sp" aria-label="Explore"><span class="a" aria-hidden="true">Explore</span><span class="b" aria-hidden="true">Explore</span><span class="r" aria-hidden="true">Get started<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg></span></div>`,
  css: C + `
.d .sp{display:grid;place-items:center;cursor:pointer;padding:10px 14px}
.d .sp > span{grid-area:1/1;white-space:nowrap;font:700 62px/1 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink);transition:transform var(--ml-spring-dur) var(--ml-spring),opacity .3s ease}
.d .a{clip-path:inset(0 0 50% 0)}
.d .b{clip-path:inset(50% 0 0 0)}
.d .sp > .r{display:inline-flex;align-items:center;gap:7px;font:600 20px/1 var(--ml-font);letter-spacing:-.02em;color:var(--ml-accent);opacity:0;transform:scale(.88)}
.d .r svg{width:18px;height:18px}
.d .sp:hover .a,.d .sp.is-auto .a{transform:translateY(-.4em)}
.d .sp:hover .b,.d .sp.is-auto .b{transform:translateY(.4em)}
.d .sp:hover .r,.d .sp.is-auto .r{opacity:1;transform:none}
`,
  run: (root) => {
    const sp = root.querySelector('.sp');
    let hover = false;
    sp.addEventListener('pointerenter', () => (hover = true));
    sp.addEventListener('pointerleave', () => (hover = false));
    let on = false;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        on = !on;
        sp.classList.toggle('is-auto', on);
      }
      setTimeout(tick, on ? 1900 : 1300);
    };
    setTimeout(tick, 700);
  },
  prompt: `Build a split-word hover. Render the same big word twice in one grid cell: the top copy clipped with clip-path: inset(0 0 50% 0) and the bottom copy with clip-path: inset(50% 0 0 0), so together they read as one word cut in half. Place a second element (a short CTA label with an arrow icon, in your accent color) in the same cell behind them. On :hover and :focus-visible of the wrapper, translate the top half up by .3em and the bottom half down by .3em with a critically damped spring (transition: transform 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.976 61.1%, 0.985 66.7%, 0.99 72.2%, 0.994 77.8%, 0.996 83.3%, 0.998 88.9%, 1 100%)) while the label fades and scales in from .88. Make the whole thing a real link or button with an aria-label, hide the copies from assistive tech, and on touch devices toggle the state on tap. Only transform and opacity animate.`,
});
})();
