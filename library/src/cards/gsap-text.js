// GSAP text cards (GSAP 3.15.0: SplitText, ScrambleText, TextPlugin, quickTo, stagger, attr).
// Shape of every card: a gsap.context scoped to root, one looping timeline that HOLDS the finished
// state first (so frame zero is already readable), the data-paused sync, ctx.revert() on cleanup.
(() => {
  const C = `.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .wrap{width:100%;padding:0 9%}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ml-accent)}
.d .sub{font:500 12px/1.4 var(--ml-font);color:var(--ml-muted)}`;

  // Sine-like path built from cubic segments with horizontal tangents at the extrema.
  const wave = (c, A, x0, periods, half) => {
    let d = `M${x0} ${c - A}`;
    for (let k = 0; k < periods * 2; k++) {
      const xa = x0 + k * half;
      const ya = c + (k % 2 ? A : -A);
      const yb = c + (k % 2 ? -A : A);
      d += ` C${xa + half * 0.4} ${ya} ${xa + half * 0.6} ${yb} ${xa + half} ${yb}`;
    }
    return d;
  };
  const W1 = wave(104, 18, -480, 6, 120);
  const W2 = wave(150, 12, -480, 6, 120);

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-mask-lines',
    cat: 'gsap-text',
    title: 'Masked line reveal',
    sub: 'Lines rise out of their own mask',
    libs: ['gsap'],
    html: `<div class="wrap"><p class="k">Studio notes</p><h3 class="sp hd">Calm software for busy teams.</h3><p class="sp sb">Interfaces that explain themselves and never make you wait.</p></div>`,
    css: C + `
.d .hd{margin-top:10px;font:650 31px/1.04 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .sb{margin-top:14px;max-width:92%;font:500 13px/1.38 var(--ml-font);color:var(--ml-ink-2)}
.d .ln{display:block}
.d .ln-mask{padding-bottom:.14em;margin-bottom:-.14em}
`,
    run: (root, lib) => {
      const { gsap, SplitText } = lib;
      gsap.registerPlugin(SplitText);
      const k = root.querySelector('.k');
      const ctx = gsap.context(() => {}, root);

      // autoSplit re-splits when the width or the font changes; onSplit hands back a fresh timeline and
      // SplitText reverts the old one and keeps its playhead, so a resize never restarts the loop.
      document.fonts.ready.then(() => {
        if (!root.isConnected) return;
        ctx.add(() => {
          SplitText.create(root.querySelectorAll('.sp'), {
            type: 'lines', mask: 'lines', linesClass: 'ln', autoSplit: true,
            onSplit: (self) => ctx.add(() => {
              const tl = gsap.timeline({ repeat: -1 });
              tl.to({}, { duration: 2.2 });
              tl.to(self.lines, { yPercent: -115, duration: 0.7, stagger: 0.07, ease: 'power3.in' });
              tl.to(k, { opacity: 0, y: -6, duration: 0.4, ease: 'power2.in' }, '<');
              tl.fromTo(self.lines, { yPercent: 115 }, { yPercent: 0, duration: 1.15, stagger: 0.11, ease: 'expo.out', immediateRender: false }, '+=0.1');
              tl.fromTo(k, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', immediateRender: false }, '<');
              return tl;
            }),
          });
        });
      });

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a masked line reveal for a section headline and its intro paragraph with GSAP 3.13+ and SplitText. Register SplitText, then call SplitText.create(elements, { type: 'lines', mask: 'lines', linesClass: 'line', autoSplit: true, onSplit }). The mask option wraps every line in its own overflow: clip element (class 'line-mask'), so a line can slide up out of nothing. Give .line-mask padding-bottom: .14em and margin-bottom: -.14em so descenders (g, y, p) are never cut. Inside onSplit return a timeline built from the fresh lines: gsap.fromTo(lines, { yPercent: 115 }, { yPercent: 0, duration: 1.15, stagger: 0.11, ease: 'expo.out' }). Returning the animation lets SplitText revert and rebuild it on resize or when the web font loads while keeping the playhead. Run the heading and the paragraph through the same call so the stagger runs across both. Exit upward with yPercent -115, power3.in, stagger 0.07. Fade a small eyebrow in beside the lines. Wrap in gsap.matchMedia: under prefers-reduced-motion render the lines in place with no tween. Keep the original text in the DOM (SplitText adds aria-label for you). Revert the split when the component unmounts.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-char-rise',
    cat: 'gsap-text',
    title: 'Character rise in 3D',
    sub: 'Letters tip up from the floor',
    libs: ['gsap'],
    html: `<div class="wrap"><h3 class="hd">Make every word land.</h3><p class="sub">Staggered 3D type, timed to the frame.</p></div>`,
    css: C + `
.d .wrap{text-align:center}
.d .hd{font:650 34px/1.06 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink)}
.d .sub{margin-top:14px}
.d .wd{display:inline-block;white-space:nowrap}
.d .ch{display:inline-block}
`,
    run: (root, lib) => {
      const { gsap, SplitText } = lib;
      gsap.registerPlugin(SplitText);
      const sub = root.querySelector('.sub');
      const ctx = gsap.context(() => {}, root);

      document.fonts.ready.then(() => {
        if (!root.isConnected) return;
        ctx.add(() => {
          const split = SplitText.create(root.querySelector('.hd'), { type: 'chars,words', charsClass: 'ch', wordsClass: 'wd' });
          const chars = split.chars;
          const tl = gsap.timeline({ repeat: -1 });
          tl.to({}, { duration: 3.2 });
          tl.to(chars, { opacity: 0, y: -26, rotationX: 70, transformPerspective: 600, duration: 0.3, stagger: { each: 0.008, from: 'start' }, ease: 'power2.in' });
          tl.to(sub, { opacity: 0, duration: 0.25 }, '<');
          tl.fromTo(chars,
            { opacity: 0, y: 46, rotationX: -95, transformPerspective: 600, transformOrigin: '50% 100%' },
            { opacity: 1, y: 0, rotationX: 0, duration: 1.1, stagger: { each: 0.025, from: 'start' }, ease: 'expo.out', immediateRender: false }, '-=0.25');
          tl.fromTo(sub, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', immediateRender: false }, '-=0.8');
        });
      });

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a 3D character-rise headline with GSAP 3.13+ and SplitText. Split the headline with SplitText.create(h1, { type: 'chars,words', charsClass: 'char', wordsClass: 'word' }) and style .word as inline-block with white-space: nowrap so words never break mid-word, and .char as inline-block. Animate the chars with gsap.fromTo(split.chars, { opacity: 0, y: 46, rotationX: -95, transformPerspective: 600, transformOrigin: '50% 100%' }, { opacity: 1, y: 0, rotationX: 0, duration: 1.3, stagger: { each: 0.035, from: 'start' }, ease: 'expo.out' }). The tip-up from the baseline needs transformPerspective on each char (perspective on the parent does not reach inline-block grandchildren). Fade the supporting line in about 0.7s before the letters finish. For an exit, reverse it with rotationX 70, y -26, power2.in and a short 0.012 stagger. Trigger it from a ScrollTrigger or on mount. Under prefers-reduced-motion skip the tween and show the text. SplitText keeps an aria-label on the heading so screen readers read it whole. Call split.revert() on unmount.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-scramble-decode',
    cat: 'gsap-text',
    title: 'Scramble decode',
    sub: 'A message resolves out of noise',
    libs: ['gsap'],
    html: `<div class="card"><div class="top"><span class="chip"><i></i>Secure message</span><span class="no">No. 0417</span></div><h3 class="t">Ship the clean version.</h3><div class="bar"><i></i></div></div>`,
    css: C + `
.d .card{width:86%;padding:16px 18px 18px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .top{display:flex;justify-content:space-between;align-items:center}
.d .chip{display:inline-flex;align-items:center;gap:6px;padding:5px 9px;border-radius:999px;background:var(--ml-accent-soft);font:600 9px/1 var(--ml-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ml-accent-ink)}
.d .chip i{width:6px;height:6px;border-radius:50%;background:var(--ml-accent)}
.d .no{font:500 9px/1 var(--ml-mono);letter-spacing:.08em;color:var(--ml-muted)}
.d .t{margin-top:18px;min-height:2.12em;font:650 27px/1.06 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .live .nz{color:var(--ml-accent-2);font-weight:500}
.d .bar{margin-top:16px;height:3px;border-radius:3px;background:var(--ml-bar-2);overflow:hidden}
.d .bar i{display:block;height:100%;border-radius:3px;background:var(--ml-accent);transform-origin:0 50%}
`,
    run: (root, lib) => {
      const { gsap, ScrambleTextPlugin } = lib;
      gsap.registerPlugin(ScrambleTextPlugin);
      const t = root.querySelector('.t');
      const bar = root.querySelector('.bar i');
      const phrases = ['Decode the signal.', 'Nothing left to guess.', 'Ship the clean version.'];
      const ctx = gsap.context(() => {
        // The first phrase is already in the markup, so the loop opens on a held, readable headline.
        // Restarting renders the first scramble back at ratio 0, which wraps the whole line in oldClass: the tint only applies while a 'live' class is on, and that is put back with the held state.
        const tl = gsap.timeline({ repeat: -1, onRepeat() { t.classList.remove('live'); t.textContent = phrases[phrases.length - 1]; gsap.set(bar, { scaleX: 1 }); } });
        tl.to({}, { duration: 2 });
        phrases.forEach((text, i) => {
          if (i) tl.to({}, { duration: 1.8 });
          tl.call(() => t.classList.add('live'), null, '>');
          tl.fromTo(bar, { scaleX: 0 }, { scaleX: 1, duration: 1.7, ease: 'power1.inOut', immediateRender: false }, '>');
          tl.to(t, {
            duration: 1.7, ease: 'none',
            scrambleText: { text, chars: '01<>/|=+*#', revealDelay: 0.3, speed: 0.7, oldClass: 'nz' },
          }, '<');
          tl.call(() => t.classList.remove('live'), null, '>');
        });
      }, root);

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a scramble-decode headline with GSAP and the ScrambleTextPlugin (free in the public gsap package since 3.13). Register ScrambleTextPlugin, keep the real headline in the markup, and animate it with gsap.to(el, { duration: 1.7, ease: 'none', scrambleText: { text: 'Next headline', chars: '01<>/|=+*#', revealDelay: 0.3, speed: 0.7, oldClass: 'noise' } }). The chars option is the glyph pool the noise draws from (a custom set reads more designed than the default upper case), revealDelay holds the noise before characters start to resolve, speed sets how fast the glyphs reshuffle, and oldClass wraps the still-unresolved glyphs in a span so you can tint them with your accent colour at a lighter weight while resolved text stays in your ink colour. Put several phrases in one timeline with a 1.8s hold between them and restore the held headline and the full progress bar in the timeline's onRepeat (the backwards render at the loop point leaves the ratio-0 markup behind). Drive a thin progress bar from the same timeline. Give the headline a reserved min-height so the layout does not jump while the length tweens. Set aria-live off and an aria-label with the final text, and under prefers-reduced-motion swap the text without the scramble.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-typewriter-caret',
    cat: 'gsap-text',
    title: 'Typewriter with caret',
    sub: 'Types and deletes, caret blinks at rest',
    libs: ['gsap'],
    html: `<div class="wrap"><p class="k">Hero headline</p><h3 class="hd">Made for<br><span class="typ"><span class="txt">designers.</span><i class="caret"></i></span></h3><p class="sub">Free to start. No card needed.</p></div>`,
    css: C + `
.d .hd{margin-top:12px;font:650 38px/1.08 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink)}
.d .typ{display:inline-flex;align-items:center;color:var(--ml-accent);white-space:nowrap}
.d .txt{display:inline-block;min-height:1.08em}
.d .caret{display:inline-block;width:3px;height:.86em;margin-left:3px;border-radius:2px;background:var(--ml-accent)}
.d .sub{margin-top:16px}
`,
    run: (root, lib) => {
      const { gsap, TextPlugin } = lib;
      gsap.registerPlugin(TextPlugin);
      const txt = root.querySelector('.txt');
      const caret = root.querySelector('.caret');
      const phrases = ['founders.', 'support teams.', 'night owls.', 'designers.'];
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ repeat: -1 });
        let cur = 'designers.';
        // caret blinks only in the idle gaps: 4 legs of 0.5s with a hard step, ending visible
        const blink = (n) => tl.to(caret, { opacity: 0, duration: 0.5, repeat: n, yoyo: true, ease: 'steps(1)' });
        blink(1);
        phrases.forEach((next) => {
          tl.set(caret, { opacity: 1 });
          tl.to(txt, { text: { value: '' }, duration: cur.length * 0.04, ease: 'none' }, '+=0.15');
          tl.to(txt, { text: { value: next }, duration: next.length * 0.08, ease: 'none' }, '+=0.3');
          blink(3);
          cur = next;
        });
      }, root);

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a hero headline with a typewriter word and a live caret using GSAP and TextPlugin. Static prefix "Made for" in ink, the typed phrase in your accent colour, a 3px rounded caret bar after it. Register TextPlugin and build one timeline per cycle: gsap.to(span, { text: { value: '' }, duration: phrase.length * 0.04, ease: 'none' }) deletes (faster than typing), then gsap.to(span, { text: { value: nextPhrase }, duration: nextPhrase.length * 0.08, ease: 'none' }) types, with ease none so characters land at an even rhythm. Put the caret blink inside the same timeline as its own tween that only exists during the idle gap after typing: gsap.to(caret, { opacity: 0, duration: 0.5, repeat: 3, yoyo: true, ease: 'steps(1)' }), with a gsap.set(caret, { opacity: 1 }) before typing starts so the caret is solid while characters move. Four legs end on visible, so the caret never rests hidden. Reserve the line height with min-height so the empty phase does not collapse the layout. Mark the span aria-live off and put the full phrase list in a visually hidden element for screen readers. Under prefers-reduced-motion show the first phrase and stop.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-word-roll',
    cat: 'gsap-text',
    title: 'Rolling word rotator',
    sub: 'One word rolls over, the slot resizes',
    libs: ['gsap'],
    html: `<div class="wrap"><p class="k">Product team</p><h3 class="hd">Build things<br>that feel <span class="slot"><b class="w">fast</b><b class="w">calm</b><b class="w">alive</b><b class="w">yours</b></span>.</h3></div>`,
    css: C + `
.d .hd{margin-top:12px;font:650 34px/1.2 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink);white-space:nowrap}
.d .slot{position:relative;display:inline-block;vertical-align:top;width:2.6em;height:1.2em;overflow:clip;border-radius:.26em;background:var(--ml-accent-soft)}
.d .w{position:absolute;left:0;top:0;display:block;padding:0 .2em;white-space:nowrap;color:var(--ml-accent-ink);font-weight:650}
`,
    run: (root, lib) => {
      const { gsap } = lib;
      const slot = root.querySelector('.slot');
      const words = Array.from(root.querySelectorAll('.w'));
      const ctx = gsap.context(() => {
        const n = words.length;
        gsap.set(words.slice(1), { yPercent: 115 });
        const fit = () => gsap.set(slot, { width: words[0].offsetWidth });
        fit();
        const tl = gsap.timeline({ repeat: -1 });
        let t = 1.5;
        words.forEach((cur, i) => {
          const nxt = words[(i + 1) % n];
          tl.to(cur, { yPercent: -115, duration: 0.8, ease: 'power3.inOut' }, t);
          tl.fromTo(nxt, { yPercent: 115 }, { yPercent: 0, duration: 0.8, ease: 'power3.inOut', immediateRender: false }, t);
          tl.to(slot, { width: () => nxt.offsetWidth, duration: 0.8, ease: 'expo.inOut' }, t);
          t += 0.8 + 1.4;
        });
        tl.to({}, { duration: 1.4 }, t - 1.4);
        document.fonts.ready.then(() => { if (root.isConnected && tl.time() < 1.5) { tl.invalidate(); fit(); } });
      }, root);

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a rolling word rotator inside a headline with GSAP 3. Markup: a headline with a fixed phrase and an inline-block slot (position: relative, overflow: clip, height 1.2em, tinted accent background, rounded) that holds 3 to 5 absolutely positioned words, each with horizontal padding so the slot keeps a pill look. Set every word except the first to yPercent 115. For each change, in one timeline at the same position: tween the current word to yPercent -115, fromTo the next word from yPercent 115 to 0 (duration 0.8, ease power3.inOut), and tween the slot width to the next word's measured width with a function value width: () => next.offsetWidth and ease expo.inOut, so the sentence after the slot slides over smoothly instead of jumping. Hold about 1.4s between rolls and wrap from the last word back to the first so the timeline repeats forever. Measure after document.fonts.ready and call timeline.invalidate() so the width functions read the final font metrics. Keep the full word list in a visually hidden span for screen readers and set aria-hidden on the animated slot. Under prefers-reduced-motion show the first word only.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-center-burst',
    cat: 'gsap-text',
    title: 'Burst from the center',
    sub: 'Letters fan out from the middle',
    libs: ['gsap'],
    html: `<div class="wrap"><h3 class="hd">Launch week</h3><p class="sub">Ten days. Twelve drops. One stage.</p></div>`,
    css: C + `
.d .wrap{text-align:center}
.d .hd{font:700 38px/1.04 var(--ml-font);letter-spacing:-.03em;color:var(--ml-ink);white-space:nowrap}
.d .sub{margin-top:14px}
.d .wd{display:inline-block;white-space:nowrap}
.d .ch{display:inline-block}
`,
    run: (root, lib) => {
      const { gsap, SplitText } = lib;
      gsap.registerPlugin(SplitText);
      const hd = root.querySelector('.hd');
      const sub = root.querySelector('.sub');
      const ctx = gsap.context(() => {}, root);

      document.fonts.ready.then(() => {
        if (!root.isConnected) return;
        ctx.add(() => {
          const split = SplitText.create(hd, { type: 'chars,words', charsClass: 'ch', wordsClass: 'wd' });
          const chars = split.chars;
          // Offsets from each letter to the middle of the line, measured at rest before any transform.
          const box = hd.getBoundingClientRect();
          const mid = box.left + box.width / 2;
          const dx = chars.map((c) => { const r = c.getBoundingClientRect(); return mid - (r.left + r.width / 2); });
          const tl = gsap.timeline({ repeat: -1 });
          tl.to({}, { duration: 3.2 });
          tl.to(chars, { x: (i) => dx[i], scale: 0.2, opacity: 0, duration: 0.35, stagger: { each: 0.015, from: 'edges' }, ease: 'power3.in' });
          tl.to(sub, { opacity: 0, duration: 0.25 }, '<');
          tl.fromTo(chars, { x: (i) => dx[i] }, { x: 0, duration: 1.0, stagger: { each: 0.03, from: 'center' }, ease: 'expo.out', immediateRender: false }, '-=0.2');
          tl.fromTo(chars, { scale: 0.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.7, stagger: { each: 0.03, from: 'center' }, ease: 'back.out(2)', immediateRender: false }, '<');
          tl.fromTo(sub, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', immediateRender: false }, '-=0.5');
        });
      });

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a headline whose letters burst outward from the middle and settle, using GSAP and SplitText. Split with SplitText.create(h1, { type: 'chars,words' }) (words as inline-block, nowrap). Before animating, while the letters sit at rest, measure each char's centre against the centre of the headline and store the horizontal offset: dx[i] = lineCenterX - charCenterX. Then gsap.fromTo(chars, { x: (i) => dx[i] }, { x: 0, duration: 1.3, ease: 'expo.out', stagger: { each: 0.045, from: 'center' } }) so every letter starts stacked at the middle and travels exactly to its own slot, with the centre letters leading and the outer letters following. Run a second tween at the same position for scale 0.2 to 1 and opacity 0 to 1 with ease 'back.out(2)' so each letter overshoots slightly as it lands. Exit by tweening back to dx with stagger from: 'edges' and power3.in. Measure after document.fonts.ready, never inside the tween, because function values run once the tween starts and the letters would already carry a transform. Honour prefers-reduced-motion by skipping the tweens.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-pointer-wave',
    cat: 'gsap-text',
    title: 'Pointer character wave',
    sub: 'Letters lift where the pointer passes',
    libs: ['gsap'],
    html: `<div class="wrap"><h3 class="hd">Type that<br>reacts to you.</h3><p class="sub">Move across the line.</p></div><svg class="ghost" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 3l14 7-6 2-2 6z" fill="var(--ml-ink)" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`,
    css: C + `
.d .wrap{text-align:center}
.d .hd{font:650 33px/1.3 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .sub{margin-top:14px}
.d .wd{display:inline-block;white-space:nowrap}
.d .ch{display:inline-block}
.d .ghost{position:absolute;left:0;top:0;opacity:0;pointer-events:none}
`,
    run: (root, lib) => {
      const { gsap, SplitText } = lib;
      gsap.registerPlugin(SplitText);
      const hd = root.querySelector('.hd');
      const ghost = root.querySelector('.ghost');
      const ctx = gsap.context(() => {}, root);
      let sweep, resume, hide, apply, measure, ro;
      const real = { on: false };

      const onMove = (e) => {
        if (!apply) return;
        real.on = true;
        sweep.pause();
        hide.restart();
        resume.restart(true);
        const b = root.getBoundingClientRect();
        apply(e.clientX - b.left, e.clientY - b.top);
      };
      const onLeave = () => { if (apply) apply(-999, -999); };

      document.fonts.ready.then(() => {
        if (!root.isConnected) return;
        ctx.add(() => {
          const split = SplitText.create(hd, { type: 'chars,words', charsClass: 'ch', wordsClass: 'wd' });
          const chars = split.chars;
          const qy = chars.map((c) => gsap.quickTo(c, 'y', { duration: 0.6, ease: 'power3.out' }));
          // quickTo cannot drive the 'scale' shorthand (3.15 warns "not eligible for reset"), so use scaleX and scaleY
          const qx = chars.map((c) => gsap.quickTo(c, 'scaleX', { duration: 0.6, ease: 'power3.out' }));
          const qs = chars.map((c) => gsap.quickTo(c, 'scaleY', { duration: 0.6, ease: 'power3.out' }));
          let pts = [];
          let hbox = { l: 0, t: 0, w: 1, h: 1 };
          const live = new Float32Array(chars.length);
          measure = () => {
            const b = root.getBoundingClientRect();
            const h = hd.getBoundingClientRect();
            hbox = { l: h.left - b.left, t: h.top - b.top, w: h.width, h: h.height };
            pts = chars.map((c) => {
              const r = c.getBoundingClientRect();
              return { x: r.left - b.left + r.width / 2, y: r.top - b.top + r.height / 2 - gsap.getProperty(c, 'y') };
            });
          };
          measure();
          apply = (px, py) => {
            const w = root.clientWidth;
            const sig = w * 0.065;
            const lift = w * 0.05;
            for (let i = 0; i < chars.length; i++) {
              const dx = pts[i].x - px;
              const dy = (pts[i].y - py) * 0.8;
              const k = Math.exp(-(dx * dx + dy * dy) / (2 * sig * sig));
              if (k < 0.004 && live[i] < 0.004) continue;
              live[i] = k;
              qy[i](-k * lift);
              qx[i](1 + k * 0.08);
              qs[i](1 + k * 0.08);
            }
          };
          // Ghost pointer: a proxy value sweeps across the headline and back, then rests off to the side.
          const p = { v: 0 };
          const place = () => {
            const x = hbox.l - 14 + p.v * (hbox.w + 28);
            const y = hbox.t + hbox.h * 0.55 + Math.sin(p.v * 6.28) * 5;
            gsap.set(ghost, { x: x - 4, y: y - 3 });
            apply(x, y);
          };
          sweep = gsap.timeline({ repeat: -1, delay: 0.4 });
          sweep.to(ghost, { opacity: 1, duration: 0.3 });
          sweep.fromTo(p, { v: 0 }, { v: 1, duration: 2.8, ease: 'power1.inOut', onUpdate: place });
          sweep.to(ghost, { opacity: 0, duration: 0.3 }, '+=0');
          sweep.call(() => apply(-999, -999));
          sweep.to(p, { v: 1, duration: 1.1 });
          sweep.to(ghost, { opacity: 1, duration: 0.3 });
          sweep.fromTo(p, { v: 1 }, { v: 0, duration: 2.8, ease: 'power1.inOut', onUpdate: place });
          sweep.to(ghost, { opacity: 0, duration: 0.3 });
          sweep.call(() => apply(-999, -999));
          sweep.to(p, { v: 0, duration: 1.1 });
          hide = gsap.to(ghost, { opacity: 0, duration: 0.2, paused: true });
          resume = gsap.delayedCall(2.5, () => { real.on = false; apply(-999, -999); sweep.play(); }).pause();
          ro = new ResizeObserver(() => measure());
          ro.observe(root);
        });
      });

      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerleave', onLeave);

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => {
        mo.disconnect();
        if (ro) ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerleave', onLeave);
        ctx.revert();
      };
    },
    prompt: `Build a headline whose letters lift near the pointer, using GSAP quickTo and SplitText. Split with SplitText.create(h1, { type: 'chars,words' }) and give every char three quickTo setters: gsap.quickTo(char, 'y', { duration: 0.6, ease: 'power3.out' }), plus the same for 'scaleX' and 'scaleY' (quickTo refuses the 'scale' shorthand, so drive the two axes separately). quickTo reuses one tween per property, so calling it on every pointermove is cheap and never stacks tweens. Cache each char's centre (rect minus the current y so lifted letters do not skew it) after document.fonts.ready and again from a ResizeObserver. On pointermove compute a Gaussian falloff per char, k = exp(-(dx*dx + dy*dy) / (2 * sigma * sigma)) with sigma about 6.5% of the section width and the vertical distance weighted at 0.8, then set y to -k * 0.05 * width and scale to 1 + k * 0.08, with generous line-height (1.3) so lifted letters never touch the line above. On pointerleave send every char home. Add an idle autoplay: a ghost cursor on a timeline sweeps left to right and back across the line while calling the same apply function, pauses the moment a real pointer moves, and resumes after 2.5s without input. Use pointer events so touch works. Under prefers-reduced-motion skip the ghost and cap the lift at a few pixels.`,
  });

  // ---------------------------------------------------------------------------------------------
  const cellHtml = (ch) => `<div class="cell"><div class="h top"><b>${ch}</b></div><div class="h bot"><b>${ch}</b></div><div class="f ft"><b>${ch}</b></div><div class="f fb"><b>${ch}</b></div></div>`;
  ML.add({
    id: 'gsap-text-flip-board',
    cat: 'gsap-text',
    title: 'Split-flap board',
    sub: 'Tiles flip through letters to a new word',
    libs: ['gsap'],
    html: `<div class="wrap"><p class="k">Next stop</p><div class="board" role="img" aria-label="Departure board">${'LISBON'.split('').map(cellHtml).join('')}</div><p class="sub"><i></i>Now boarding - gate 14</p></div>`,
    css: C + `
.d .wrap{display:flex;flex-direction:column;align-items:center}
.d .board{display:flex;gap:4px;margin-top:14px}
.d .cell{position:relative;width:38px;height:58px;border-radius:7px}
.d .cell::after{content:"";position:absolute;left:0;right:0;top:calc(50% - .5px);height:1px;background:rgba(0,0,0,.55);z-index:5}
.d .h,.d .f{position:absolute;left:0;right:0;height:50%;overflow:hidden;background:var(--ml-ink);backface-visibility:hidden}
.d .top,.d .ft{top:0;border-radius:7px 7px 0 0}
.d .bot,.d .fb{bottom:0;border-radius:0 0 7px 7px}
.d .f{z-index:3}
.d .h b,.d .f b{position:absolute;left:0;right:0;height:200%;text-align:center;font:600 31px/58px var(--ml-font);color:#fff}
.d .top b,.d .ft b{top:0}
.d .bot b,.d .fb b{bottom:0}
.d .sub{display:flex;align-items:center;gap:7px;margin-top:16px}
.d .sub i{width:6px;height:6px;border-radius:50%;background:var(--ml-accent)}
`,
    run: (root, lib) => {
      const { gsap } = lib;
      const cells = Array.from(root.querySelectorAll('.cell')).map((el) => ({
        top: el.querySelector('.top b'), bot: el.querySelector('.bot b'), ft: el.querySelector('.ft'), fb: el.querySelector('.fb'),
        ftb: el.querySelector('.ft b'), fbb: el.querySelector('.fb b'),
      }));
      const words = ['LISBON', 'TOKYO ', 'MANILA', 'LISBON'];
      const abc = 'ABCDEFGHIJKLMNOPRSTUVWY';
      const put = (c, from, to) => {
        c.top.textContent = to; c.ftb.textContent = from; c.bot.textContent = from; c.fbb.textContent = to;
      };
      const ctx = gsap.context(() => {
        cells.forEach((c) => {
          gsap.set(c.ft, { transformPerspective: 420, transformOrigin: '50% 100%', rotationX: -90 });
          gsap.set(c.fb, { transformPerspective: 420, transformOrigin: '50% 0%', rotationX: 0 });
        });
        // The backwards render at the loop point leaves the last flip's flaps behind: put every tile back at rest.
        const rest = () => cells.forEach((c, i) => {
          const ch = words[0][i].trim();
          put(c, ch, ch);
          gsap.set(c.ft, { rotationX: -90 });
          gsap.set(c.fb, { rotationX: 0 });
        });
        const tl = gsap.timeline({ repeat: -1, onRepeat: rest });
        let base = 2;
        for (let w = 0; w < words.length - 1; w++) {
          const a = words[w];
          const b = words[w + 1];
          let end = base;
          cells.forEach((c, i) => {
            const seq = [a[i]];
            const n = 2 + (i % 3);
            for (let j = 0; j < n; j++) seq.push(abc[(abc.indexOf(b[i]) + 3 + j * 5 + i * 2) % abc.length]);
            seq.push(b[i]);
            for (let j = 0; j < seq.length - 1; j++) {
              const t = base + i * 0.09 + j * 0.2;
              const from = seq[j].trim();
              const to = seq[j + 1].trim();
              tl.call(put, [c, from, to], t);
              tl.set(c.fb, { rotationX: 90 }, t);
              tl.fromTo(c.ft, { rotationX: 0 }, { rotationX: -90, duration: 0.1, ease: 'power1.in', immediateRender: false }, t);
              tl.fromTo(c.fb, { rotationX: 90 }, { rotationX: 0, duration: 0.1, ease: 'power1.out', immediateRender: false }, t + 0.1);
              tl.call(() => { c.bot.textContent = to; }, null, t + 0.2);
              end = Math.max(end, t + 0.2);
            }
          });
          base = end + 1.9;
        }
        tl.to({}, { duration: 1.9 }, base - 1.9);
      }, root);

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a split-flap departure board with GSAP 3. Each letter cell is a fixed-size dark tile made of four layers: a static top half and a static bottom half (overflow hidden, each showing half of the same big letter by anchoring a double-height letter box to the top or bottom), plus two flaps stacked on top, a top flap with transform-origin '50% 100%' and a bottom flap with transform-origin '50% 0%', both with backface-visibility hidden and a transformPerspective around 420. One flip: set the static top to the new letter, the top flap and static bottom to the old letter and the bottom flap to the new letter; tween the top flap rotationX from 0 to -90 (0.1s, power1.in), then the bottom flap from 90 to 0 (0.1s, power1.out), then write the new letter to the static bottom. To change a word, give every cell a short random run of intermediate letters (2 to 4 flips, 0.2s each) before it lands on the target, and offset each cell by 0.09s so the change ripples across the row. Build it all on one timeline with tl.call for the content swaps, hold each word for about 2s, and loop. Add a thin seam line across each tile. Provide an aria-label with the current word and a polite live region, and under prefers-reduced-motion swap letters with no flip.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-highlighter',
    cat: 'gsap-text',
    title: 'Highlighter sweep',
    sub: 'A marker inks the key words in turn',
    libs: ['gsap'],
    html: `<div class="wrap"><div class="ln"><span class="x">Good copy is</span></div><div class="ln"><mark><i class="hl"></i>clear</mark><span class="x">, </span><mark><i class="hl"></i>short</mark><span class="x">,</span></div><div class="ln"><span class="x">and </span><mark><i class="hl"></i>kind</mark><span class="x"> to read.</span></div></div>`,
    css: C + `
.d .wrap{padding:0 11%}
.d .ln{font:650 31px/1.2 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink);white-space:nowrap}
.d mark{position:relative;isolation:isolate;background:none;color:var(--ml-ink)}
.d .hl{position:absolute;left:-.1em;right:-.1em;bottom:.17em;height:.5em;border-radius:.14em;background:var(--ml-accent-line);z-index:-1;transform-origin:0 50%;transform:rotate(-.8deg)}
`,
    run: (root, lib) => {
      const { gsap } = lib;
      const hls = Array.from(root.querySelectorAll('.hl'));
      const xs = Array.from(root.querySelectorAll('.x'));
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to({}, { duration: 2.4 });
        // reset: markers wipe off to the right, plain text dims
        tl.to(hls, { scaleX: 0, transformOrigin: '100% 50%', duration: 0.45, stagger: 0.06, ease: 'power3.in' });
        tl.to(xs, { opacity: 0.22, duration: 0.5, ease: 'power2.out' }, '<');
        // sweep: markers ink in one after another, then the surrounding lines resolve
        tl.fromTo(hls, { scaleX: 0 }, { scaleX: 1, transformOrigin: '0% 50%', duration: 0.6, stagger: 0.5, ease: 'power3.inOut', immediateRender: false }, '+=0.35');
        tl.fromTo(xs, { opacity: 0.22 }, { opacity: 1, duration: 0.8, stagger: 0.14, ease: 'power2.out', immediateRender: false }, '+=0.15');
      }, root);

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a highlighter-marker text reveal with GSAP 3. Write the statement as separate lines, wrap each key word in a <mark> (position: relative, isolation: isolate, no background) and put an empty <i class="hl"> inside it: absolutely positioned behind the word (z-index -1), left and right -.1em, bottom .06em, height .56em, rounded .14em, filled with a soft tint of your accent colour and rotated -0.8deg so it feels hand-drawn. Wrap the plain text pieces in spans. Build one timeline: dim the plain text to opacity 0.22, then gsap.fromTo(highlights, { scaleX: 0 }, { scaleX: 1, transformOrigin: '0% 50%', duration: 0.6, stagger: 0.5, ease: 'power3.inOut' }) so the markers ink in one after another, then gsap.fromTo(plainSpans, { opacity: 0.22 }, { opacity: 1, duration: 0.8, stagger: 0.14 }) so the rest resolves. Hold about 2.4s, then wipe the markers out to the right with transformOrigin '100% 50%' and loop. Keep each highlighted word on one line so the marker never breaks across a wrap. Use opacity on the plain text, not colour, so the marked words stay crisp. Under prefers-reduced-motion render the final state with highlights drawn.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-count-headline',
    cat: 'gsap-text',
    title: 'Headline with a counter',
    sub: 'The number counts up, the line settles',
    libs: ['gsap'],
    html: `<div class="wrap"><span class="chip"><i></i>Live count</span><h3 class="hd"><span class="w">Trusted by</span><br><b class="num">12,480</b><br><span class="w">teams worldwide.</span></h3><span class="pill">+38 this week</span></div>`,
    css: C + `
.d .chip{display:inline-flex;align-items:center;gap:6px;padding:5px 9px;border-radius:999px;background:var(--ml-bg);box-shadow:var(--ml-shadow);font:600 9px/1 var(--ml-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ml-ink-2)}
.d .chip i{width:6px;height:6px;border-radius:50%;background:var(--ml-accent)}
.d .hd{margin-top:14px;font:650 26px/1.1 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .w{display:inline-block}
.d .num{display:inline-block;font:700 58px/1.02 var(--ml-font);letter-spacing:-.03em;font-variant-numeric:tabular-nums;color:var(--ml-accent);transform-origin:0 60%}
.d .pill{display:inline-block;margin-top:14px;padding:6px 11px;border-radius:999px;background:var(--ml-accent-soft);font:600 11px/1 var(--ml-font);color:var(--ml-accent-ink);transform-origin:0 50%}
`,
    run: (root, lib) => {
      const { gsap } = lib;
      const num = root.querySelector('.num');
      const words = Array.from(root.querySelectorAll('.w'));
      const pill = root.querySelector('.pill');
      const TOTAL = 12480;
      const o = { n: TOTAL };
      const show = () => { num.textContent = Math.round(o.n).toLocaleString('en-US'); };
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ repeat: -1, onRepeat() { o.n = TOTAL; show(); } });
        tl.to({}, { duration: 2.4 });
        tl.to([words, num, pill], { opacity: 0, y: -12, duration: 0.45, stagger: 0.05, ease: 'power2.in' });
        tl.fromTo(words, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.4, ease: 'power3.out', immediateRender: false }, '+=0.15');
        tl.fromTo(num, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', immediateRender: false }, '<0.12');
        tl.fromTo(o, { n: 0 }, { n: TOTAL, duration: 2.4, ease: 'power3.out', snap: { n: 1 }, onUpdate: show, immediateRender: false }, '<');
        tl.fromTo(num, { scale: 1.07 }, { scale: 1, duration: 0.8, ease: 'back.out(2.4)', immediateRender: false }, '>-0.05');
        tl.fromTo(pill, { opacity: 0, scale: 0.6, y: 6 }, { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'back.out(2.2)', immediateRender: false }, '<0.1');
      }, root);

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a headline with a live counting number using GSAP: "Trusted by 12,480 teams worldwide." Keep the number in its own element with font-variant-numeric: tabular-nums so digits do not shuffle, set large in your accent colour, with the surrounding words smaller in ink. Drive it from a plain object: const o = { n: 0 }; gsap.to(o, { n: 12480, duration: 2.4, ease: 'power3.out', snap: { n: 1 }, onUpdate: () => { el.textContent = Math.round(o.n).toLocaleString('en-US'); } }). The snap option rounds every frame to a whole number so you never see decimals, and power3.out makes the count rush then ease into the final value. Put it on one timeline: words rise in first (y 18, opacity 0, stagger 0.9), the number fades in 0.12s after the first word and counts, then when it lands play a small settle with scale 1.07 to 1 and ease 'back.out(2.4)', then pop a "+38 this week" pill with back.out(2.2). Start the count when the section scrolls into view with a ScrollTrigger, once. Put the final figure in an aria-label or visually hidden text so assistive tech never reads intermediate values, and under prefers-reduced-motion render the final number immediately.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-weight-wave',
    cat: 'gsap-text',
    title: 'Variable weight wave',
    sub: 'Weight and colour ripple letter by letter',
    libs: ['gsap'],
    html: `<div class="wrap"><h3 class="hd">Weight in<br>motion</h3><p class="sub">One variable font, 100 to 900.</p></div>`,
    css: C + `
.d .wrap{text-align:center}
.d .hd{font:300 44px/1.06 var(--ml-font);letter-spacing:-.045em;color:var(--ml-ink)}
.d .sub{margin-top:16px}
.d .wd{display:inline-block;white-space:nowrap}
.d .ch{display:inline-block}
`,
    run: (root, lib) => {
      const { gsap, SplitText } = lib;
      gsap.registerPlugin(SplitText);
      const hd = root.querySelector('.hd');
      const cs = getComputedStyle(root);
      const ink = cs.getPropertyValue('--ml-ink').trim();
      const accent = cs.getPropertyValue('--ml-accent').trim();
      const ctx = gsap.context(() => {}, root);

      document.fonts.ready.then(() => {
        if (!root.isConnected) return;
        ctx.add(() => {
          const split = SplitText.create(hd, { type: 'chars,words', charsClass: 'ch', wordsClass: 'wd' });
          // One yoyo tween with a stagger is a travelling wave: each letter runs the same sine, a beat later.
          gsap.fromTo(split.chars, { fontWeight: 200, color: ink }, {
            fontWeight: 850, color: accent, duration: 0.95, ease: 'sine.inOut', yoyo: true, repeat: -1,
            stagger: { each: 0.09, from: 'start' },
          });
        });
      });

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a variable-font weight wave headline with GSAP and SplitText. Use a variable font that exposes the wght axis (for example Geist, loaded with the range wght@100..900 from Google Fonts) so intermediate weights are real, not snapped to 400 and 700. Split with SplitText.create(h1, { type: 'chars,words' }) and make words inline-block with white-space: nowrap. Then one tween makes the wave: gsap.fromTo(split.chars, { fontWeight: 200, color: ink }, { fontWeight: 850, color: accent, duration: 0.95, ease: 'sine.inOut', yoyo: true, repeat: -1, stagger: { each: 0.09, from: 'start' } }). Because every letter repeats the same yoyo with a delay of 0.09s times its index, the heavy weight travels along the line like a wave. Read the colours from CSS variables with getComputedStyle so the tween never hard-codes hex. Centre the text and keep it on short lines, since heavier letters are wider and the line will breathe; nowrap words keep it from rewrapping. Wait for document.fonts.ready before splitting. Under prefers-reduced-motion set a single static weight.`,
  });

  // ---------------------------------------------------------------------------------------------
  ML.add({
    id: 'gsap-text-text-curve',
    cat: 'gsap-text',
    title: 'Text along a curve',
    sub: 'Headlines drift along two waves',
    libs: ['gsap'],
    html: `<svg class="sv" viewBox="0 0 320 240" preserveAspectRatio="xMidYMid meet" aria-label="Words can follow any curve">
<path class="g1" d="${W1}" fill="none" stroke="var(--ml-line)" stroke-width="1"/>
<path class="g2" d="${W2}" fill="none" stroke="var(--ml-line)" stroke-width="1"/>
<text class="t1"><textPath class="p1" href="#" startOffset="0">.</textPath></text>
<text class="t2"><textPath class="p2" href="#" startOffset="0">.</textPath></text>
</svg><p class="k">Type on a path</p><p class="cap">Any curve can be a baseline.</p>`,
    css: `.d{background:var(--ml-bg)}
.d .k{position:absolute;left:9%;top:9%;font:600 9px/1 var(--ml-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ml-accent)}
.d .cap{position:absolute;left:9%;right:9%;bottom:9%;font:500 12px/1.3 var(--ml-font);color:var(--ml-muted)}
.d .sv{position:absolute;inset:0;width:100%;height:100%;overflow:visible;-webkit-mask-image:linear-gradient(90deg,transparent 6%,#000 20%,#000 80%,transparent 94%);mask-image:linear-gradient(90deg,transparent 6%,#000 20%,#000 80%,transparent 94%)}
.d .t1{font:650 22px var(--ml-font);fill:var(--ml-ink)}
.d .t2{font:600 15px var(--ml-font);fill:var(--ml-accent)}
`,
    run: (root, lib) => {
      const { gsap } = lib;
      const NS = 'http://www.w3.org/1999/xlink';
      const sv = root.querySelector('.sv');
      const periods = 6;
      const lines = [
        { path: root.querySelector('.g1'), text: root.querySelector('.t1'), tp: root.querySelector('.p1'), unit: 'Words can follow any curve. ', dir: -1, dur: 16 },
        { path: root.querySelector('.g2'), text: root.querySelector('.t2'), tp: root.querySelector('.p2'), unit: 'Orbit, drift, wave, repeat. ', dir: 1, dur: 20 },
      ];
      const ctx = gsap.context(() => {
        const uid = 'c' + Math.random().toString(36).slice(2, 7);
        lines.forEach((l, i) => {
          l.path.id = uid + i;
          l.tp.setAttributeNS(NS, 'href', '#' + uid + i);
          l.tp.setAttribute('href', '#' + uid + i);
        });
        const fit = () => {
          lines.forEach((l) => {
            const unitL = l.path.getTotalLength() / periods;
            l.tp.textContent = l.unit;
            l.text.style.letterSpacing = '0px';
            const natural = l.text.getComputedTextLength();
            // Grow or shrink the type so one unit fills 94% of one period, then spread the rest as tracking:
            // the wave repeats every unitL, so shifting by exactly unitL loops with no visible seam.
            const size = parseFloat(getComputedStyle(l.text).fontSize) * (unitL * 0.94) / natural;
            l.text.style.fontSize = size + 'px';
            const n2 = l.text.getComputedTextLength();
            l.text.style.letterSpacing = (unitL - n2) / l.unit.length + 'px';
            l.tp.textContent = l.unit.repeat(periods + 2);
            l.unitL = unitL;
            if (l.tween) l.tween.kill();
            const a = l.dir < 0 ? 0 : -unitL;
            const b = l.dir < 0 ? -unitL : 0;
            l.tween = gsap.fromTo(l.tp, { attr: { startOffset: a } }, { attr: { startOffset: b }, duration: l.dur, ease: 'none', repeat: -1 });
          });
        };
        fit();
        document.fonts.ready.then(() => { if (root.isConnected) ctx.add(fit); });
      }, root);

      const held = new Set();
      const sync = () => {
        if (root.dataset.paused) {
          for (const a of ctx.data) if (a.parent && !a.parent.parent && typeof a.paused === 'function' && !a.paused()) { a.paused(true); held.add(a); }
        } else {
          held.forEach((a) => a.paused(false));
          held.clear();
        }
      };
      const mo = new MutationObserver(sync);
      mo.observe(root, { attributes: true, attributeFilter: ['data-paused'] });
      sync();

      return () => { mo.disconnect(); ctx.revert(); };
    },
    prompt: `Build a headline that travels along a curve using SVG textPath and GSAP. Draw a long sine-like path in an SVG (cubic segments with horizontal tangents at each extreme, extending well past the viewBox on both sides, an exact whole number of periods), give it an id, and reference it from <text><textPath href="#wave" startOffset="0">. Repeat the phrase enough times to cover the whole path plus one extra period. To make a seamless loop, shift startOffset by exactly one period of the curve: unitLength = path.getTotalLength() / periods. Size the type so one repeat of the phrase is about 94% of unitLength and spread the remainder as letter-spacing, so one phrase fits one period exactly and the shifted text lands on top of itself. Then gsap.fromTo(textPath, { attr: { startOffset: 0 } }, { attr: { startOffset: -unitLength }, duration: 16, ease: 'none', repeat: -1 }). Add a second, smaller line on a different wave travelling the other way, in your accent colour, for depth, and draw each path as a faint 1px guide. Fade both ends of the svg with a CSS mask. Measure after document.fonts.ready and re-measure on resize. Set an aria-label with the phrase on the svg and aria-hidden on the repeated text. Under prefers-reduced-motion leave the offset still.`,
  });
})();
