(() => {
// Scroll patterns. Reference card for the contract: a REAL technique (position: sticky) inside a
// mini browser window, driven by an autoplay scroll that yields to the user's own scrolling.

ML.add({
  id: 'scroll-sticky',
  cat: 'scroll',
  title: 'Sticky positioning',
  sub: 'Headers pin, then hand off',
  html: `
<div class="win">
  <div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <section><h4>01</h4><p class="r"></p><p class="r s"></p><p class="r"></p><p class="r m"></p></section>
    <section><h4>02</h4><p class="r"></p><p class="r m"></p><p class="r"></p><p class="r s"></p></section>
    <section><h4>03</h4><p class="r s"></p><p class="r"></p><p class="r m"></p><p class="r"></p></section>
    <section><h4>04</h4><p class="r"></p><p class="r"></p><p class="r s"></p><p class="r m"></p></section>
    <section><h4>05</h4><p class="r m"></p><p class="r"></p><p class="r"></p><p class="r s"></p></section>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;overflow-y:auto;scrollbar-width:none}
.d .sc::-webkit-scrollbar{display:none}
.d h4{position:sticky;top:0;z-index:1;padding:6px 12px;font:600 10px/1.2 var(--ml-mono);color:var(--ml-muted);background:rgba(244,247,252,.94);border-bottom:1px solid var(--ml-line);transition:color .2s ease,background-color .2s ease}
.d h4.on{color:var(--ml-accent-ink);background:rgba(231,240,255,.96)}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const heads = [...root.querySelectorAll('h4')];
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const period = 7000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
      } else {
        const p = ((t - start) % period) / period;
        const max = sc.scrollHeight - sc.clientHeight;
        // hold at top, glide down, hold, glide back
        const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
        sc.scrollTop = k * max;
      }
      const y = sc.scrollTop;
      let current = heads[0];
      for (const h of heads) if (h.parentElement.offsetTop <= y + 1) current = h;
      for (const h of heads) h.classList.toggle('on', h === current);
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a sticky section-header pattern for a long, grouped list (a changelog, a docs page, or a timeline grouped by month). Wrap each group in its own <section> and give its header position: sticky; top: 0 (add your fixed nav height to top if you have one). Each header pins while its own group scrolls underneath, then the next group's header pushes it away, because a sticky element can only travel inside its parent. No JavaScript is needed for the pinning. Style the headers as a light translucent bar: background rgba(255,255,255,.85), backdrop-filter: blur(12px), a 1px hairline bottom border, small semibold monospace label. Optional: highlight the header that is currently pinned in your accent color by checking which section's offsetTop is at or above the scroll position on scroll (passive listener). Plain HTML and CSS, no libraries.`,
});

ML.add({
  id: 'scroll-snap',
  cat: 'scroll',
  title: 'Scroll snap',
  sub: 'Numbered panels lock into place',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <section class="p1"><b>1</b><p class="r m"></p><p class="r s"></p></section>
    <section class="p2"><b>2</b><p class="r m"></p><p class="r s"></p></section>
    <section class="p3"><b>3</b><p class="r m"></p><p class="r s"></p></section>
  </div>
  <div class="dots"><i class="on"></i><i></i><i></i></div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .sc{scroll-snap-type:y mandatory}
.d section{height:100cqh;scroll-snap-align:start;display:flex;flex-direction:column;justify-content:center;padding:0 22px 0 14px}
.d .p1{background:var(--ml-bg)}
.d .p2{background:var(--ml-accent-soft)}
.d .p3{background:var(--ml-surface)}
.d section b{display:grid;place-items:center;width:38px;height:38px;margin-left:12px;border-radius:12px;font:600 17px/1 var(--ml-mono);color:var(--ml-accent-ink);background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d section .r{margin:9px 12px 0}
.d section b + .r{margin-top:14px}
.d .dots{position:absolute;right:8px;top:50%;margin-top:-20px;display:flex;flex-direction:column;gap:6px}
.d .dots i{width:5px;height:5px;border-radius:50%;background:var(--ml-bar);transition:transform var(--ml-spring-dur) var(--ml-spring),background-color .2s ease}
.d .dots i.on{background:var(--ml-accent);transform:scaleY(2.6)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const dots = [...root.querySelectorAll('.dots i')];
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const mark = () => {
      const i = Math.round(sc.scrollTop / Math.max(1, sc.clientHeight));
      dots.forEach((d, n) => d.classList.toggle('on', n === i));
    };
    sc.addEventListener('scroll', mark, { passive: true });
    const seq = [0, 1, 2, 1];
    let step = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && performance.now() > userUntil) {
        step = (step + 1) % seq.length;
        sc.scrollTo({ top: seq[step] * sc.clientHeight, behavior: 'smooth' });
      }
      setTimeout(tick, 1700);
    };
    setTimeout(tick, 1200);
    mark();
  },
  prompt: `Build a full-height section scroller with native scroll snapping. Wrap the page in a container with height: 100dvh; overflow-y: auto; scroll-snap-type: y mandatory, and give every panel height: 100dvh; scroll-snap-align: start. Use scroll-snap-stop: always on panels if fast flicks should not skip one. Each panel is one idea: a big numeral or heading plus a short line of copy. Add a vertical dot indicator on the right edge: read the current index with an IntersectionObserver (threshold 0.6, root = the scroller) and highlight the active dot in your accent color, stretching it into a short pill with transform: scaleY. Make the dots buttons that call scrollTo({ top: index * innerHeight, behavior: 'smooth' }) and support ArrowUp, ArrowDown and PageUp/PageDown. Respect prefers-reduced-motion by switching to behavior: 'auto'. Use scroll-padding-top if you have a fixed header. Plain HTML, CSS and a few lines of JS, no libraries.`,
});

ML.add({
  id: 'scroll-triggered',
  cat: 'scroll',
  title: 'Scroll triggered reveal',
  sub: 'Blocks rise in as they enter',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="blk"><i class="ic"></i><p class="r m"></p><p class="r s"></p></div>
    <div class="blk"><i class="ic"></i><p class="r"></p><p class="r m"></p></div>
    <div class="blk"><i class="ic"></i><p class="r s"></p><p class="r m"></p></div>
    <div class="blk"><i class="ic"></i><p class="r m"></p><p class="r"></p></div>
    <div class="blk"><i class="ic"></i><p class="r"></p><p class="r s"></p></div>
    <div class="blk"><i class="ic"></i><p class="r m"></p><p class="r s"></p></div>
    <div class="blk"><i class="ic"></i><p class="r s"></p><p class="r m"></p></div>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .blk{margin:8px 12px;min-height:36cqh;padding:12px;display:flex;flex-direction:column;justify-content:center;border-radius:12px;background:var(--ml-surface);border:1px solid var(--ml-line);opacity:0;transform:translateY(22px) scale(.97)}
.d .blk.in{opacity:1;transform:none;transition:opacity .45s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .blk .r{margin:7px 0 0}
.d .ic{width:14px;height:14px;border-radius:5px;background:var(--ml-accent-line);transition:background-color .4s ease .15s}
.d .blk.in .ic{background:var(--ml-accent)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.target.classList.toggle('in', e.isIntersecting)),
      { root: sc, threshold: 0.35 }
    );
    root.querySelectorAll('.blk').forEach((b) => io.observe(b));
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Add scroll-triggered reveals to the content blocks on my page. Start each block at opacity: 0; transform: translateY(24px) scale(0.97). Watch them with one IntersectionObserver (threshold 0.3, rootMargin: '0px 0px -10% 0px') and add an is-in class when a block enters; the class sets opacity: 1 and transform: none with transition: opacity 450ms ease, transform 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.964 55.6%, 0.985 66.7%, 1 100%). Decide whether it replays: for one-shot reveals call observer.unobserve(entry.target) after the first hit; for scrubbing-back sections toggle the class both ways. Animate only opacity and transform. Wrap the starting styles in a no-JS-safe selector (html.js .reveal) so content is visible without JavaScript, and under prefers-reduced-motion: reduce show everything immediately. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-infinite',
  cat: 'scroll',
  title: 'Infinite scroll',
  sub: 'Skeleton rows load near the end',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc"><div class="list"></div></div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .row{display:flex;align-items:center;gap:9px;height:15cqh;min-height:26px;margin:8px 12px 0;padding:0 10px;border-radius:10px;background:var(--ml-surface)}
.d .av{flex:none;width:16px;height:16px;border-radius:50%;background:var(--ml-bar)}
.d .col{flex:1}
.d .col .r{margin:0 0 5px}
.d .col .r:last-child{margin:0}
.d .row.sk .av,.d .row.sk .r{background:linear-gradient(90deg,var(--ml-bar-2) 20%,#fff 50%,var(--ml-bar-2) 80%);background-size:220% 100%;animation:sh 1.1s linear infinite}
.d .row.nw{animation:nw 1.4s var(--ml-ease) both}
.d .list{padding-bottom:10px}
@keyframes sh{to{background-position:-220% 0}}
@keyframes nw{0%{background:var(--ml-accent-soft);transform:translateY(10px);opacity:0}30%{opacity:1;transform:none}100%{background:var(--ml-surface)}}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const list = root.querySelector('.list');
    const row = (sk, nw) =>
      '<div class="row' + (sk ? ' sk' : '') + (nw ? ' nw' : '') + '"><i class="av"></i><div class="col"><p class="r m"></p><p class="r s"></p></div></div>';
    list.innerHTML = row().repeat(8);
    let loading = false;
    let resetting = false;
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const load = () => {
      if (loading) return;
      loading = true;
      list.insertAdjacentHTML('beforeend', row(true).repeat(3));
      setTimeout(() => {
        if (!root.isConnected) return;
        list.querySelectorAll('.sk').forEach((n) => n.remove());
        list.insertAdjacentHTML('beforeend', row(false, true).repeat(3));
        loading = false;
      }, 1000);
    };
    sc.addEventListener(
      'scroll',
      () => {
        const near = sc.scrollTop + sc.clientHeight > sc.scrollHeight - 36;
        if (near && list.children.length < 17 && !resetting) load();
      },
      { passive: true }
    );
    let last = performance.now();
    let wait = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = Math.min(t - last, 50);
      last = t;
      if (root.dataset.paused || t < userUntil || loading || resetting) return;
      const atEnd = sc.scrollTop + sc.clientHeight >= sc.scrollHeight - 2;
      if (atEnd && list.children.length >= 17) {
        wait += dt;
        if (wait > 1200) {
          wait = 0;
          resetting = true;
          sc.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => {
            while (list.children.length > 8) list.lastChild.remove();
            resetting = false;
          }, 1300);
        }
        return;
      }
      sc.scrollTop += dt * 0.06;
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build an infinite-scroll feed that loads more rows before the reader hits the bottom. Place a 1px sentinel element after the last row and watch it with an IntersectionObserver whose rootMargin is '0px 0px 240px 0px', so the next page is requested about 240px early. When it fires, append three skeleton rows immediately (same height as real rows, a shimmer made from background-position on a 220%-wide linear-gradient animating over 1.1s linear infinite, no spinner), fetch the next page, then swap the skeletons for real rows with a short rise-and-fade (opacity and translateY 10px, 400ms). Guard with a loading flag so only one request runs at once, stop observing when the API says there is no more data, and show a quiet 'You are all caught up' line. Keep rows a fixed height to avoid layout shift, set aria-busy on the list while loading, and add a visible 'Load more' button as a keyboard and no-JS fallback. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-progress',
  cat: 'scroll',
  title: 'Scroll progress bar',
  sub: 'A top bar fills with position',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="trk"><i></i></div>
  <div class="sc">
    <p class="r t"></p><p class="r s"></p>
    <div class="im"></div>
    <p class="r"></p><p class="r m"></p><p class="r"></p><p class="r s"></p>
    <p class="r"></p><p class="r m"></p><p class="r"></p><p class="r"></p>
    <div class="im"></div>
    <p class="r m"></p><p class="r"></p><p class="r s"></p><p class="r"></p>
    <p class="r"></p><p class="r m"></p><p class="r"></p><p class="r s"></p>
  </div>
  <b class="pc">0%</b>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .trk{flex:none;height:3px;background:var(--ml-bar-2)}
.d .trk i{display:block;height:100%;background:var(--ml-accent);transform-origin:0 50%;transform:scaleX(0)}
.d .r.t{height:10px;width:62%;margin-top:12px;background:var(--ml-bar)}
.d .pc{position:absolute;right:8px;bottom:8px;padding:3px 7px;border-radius:999px;font:600 9px/1 var(--ml-mono);color:var(--ml-accent-ink);background:var(--ml-accent-soft);box-shadow:var(--ml-shadow)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const fill = root.querySelector('.trk i');
    const pc = root.querySelector('.pc');
    update = () => {
      const m = sc.scrollHeight - sc.clientHeight;
      const p = m > 0 ? sc.scrollTop / m : 0;
      fill.style.transform = 'scaleX(' + p.toFixed(3) + ')';
      pc.textContent = Math.round(p * 100) + '%';
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 7000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Add a reading-progress bar to the top of long articles. Put a fixed 3px bar at the top of the viewport, full width, with a track in a very light grey-blue and a fill in your accent color. The fill is a child with transform-origin: 0 50% and transform: scaleX(progress), never width, so it stays on the compositor. Compute progress = scrollTop / (scrollHeight - clientHeight) inside a passive scroll listener, batched with requestAnimationFrame. For an article, measure only the article element: progress = clamp((scrollY - article.offsetTop) / (article.offsetHeight - innerHeight), 0, 1). Where the browser supports it, the CSS-only version is better: animation: grow linear both; animation-timeline: scroll(root block) on the fill with a keyframe from scaleX(0) to scaleX(1). Mark the bar role='progressbar' with aria-valuenow updated sparingly, and keep it decorative if it only duplicates the scrollbar. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-zoom',
  cat: 'scroll',
  title: 'Zoom on scroll',
  sub: 'An image grows through the viewport',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <p class="r t"></p><p class="r m"></p><p class="r s"></p>
    <div class="zi"></div>
    <p class="r"></p><p class="r m"></p><p class="r s"></p><p class="r"></p>
    <p class="r m"></p><p class="r"></p>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .r.t{height:10px;width:60%;margin-top:12px;background:var(--ml-bar)}
.d .zi{position:relative;overflow:hidden;height:72cqh;margin:30cqh 12px;border-radius:18px;background:linear-gradient(180deg,var(--ml-accent-soft),#fff);box-shadow:var(--ml-shadow);transform:scale(.5);will-change:transform}
.d .zi::before{content:"";position:absolute;right:22%;top:20%;width:22px;height:22px;border-radius:50%;background:var(--ml-grad)}
.d .zi::after{content:"";position:absolute;left:0;right:0;bottom:0;height:50%;background:var(--ml-accent-line);clip-path:polygon(0 100%,0 66%,22% 26%,44% 70%,62% 38%,82% 62%,100% 46%,100% 100%)}
@media (prefers-reduced-motion: reduce){.d .zi{transform:none!important}}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const zi = root.querySelector('.zi');
    update = () => {
      const vh = sc.clientHeight;
      const c = zi.offsetTop + zi.offsetHeight / 2 - sc.scrollTop;
      const f = Math.max(0, 1 - Math.abs(c - vh / 2) / (vh * 0.8));
      zi.style.transform = 'scale(' + (0.5 + 0.5 * f).toFixed(3) + ')';
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 7000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a scroll-zoom image section. Put a large image (or video poster) in a wrapper that is taller than the viewport, with overflow: hidden and a generous border-radius. As the wrapper passes through the viewport, scale it from about 0.55 to 1 and back: compute how far the element's center is from the viewport center, f = clamp(1 - abs(center - innerHeight / 2) / (innerHeight * 0.8), 0, 1), then set transform: scale(0.55 + 0.45 * f) inside a requestAnimationFrame-batched passive scroll listener. Reduce the corner radius toward 0 as it reaches full width. Use transform-origin: center and will-change: transform only while the section is near the viewport. The modern CSS-only route is animation-timeline: view() with animation-range: entry 0% cover 50% on a keyframe from scale(0.55) to scale(1). Never animate width or height. Under prefers-reduced-motion: reduce, render the image at scale(1) with no scroll linking. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-parallax',
  cat: 'scroll',
  title: 'Parallax layers',
  sub: 'Background moves slower than content',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="hero"><i class="ly sun"></i><i class="ly m1"></i><i class="ly m2"></i><div class="fg"><p class="r m"></p><p class="r s"></p></div></div>
    <p class="r m"></p><p class="r"></p><p class="r s"></p>
    <div class="hero"><i class="ly sun"></i><i class="ly m1"></i><i class="ly m2"></i><div class="fg"><p class="r m"></p><p class="r s"></p></div></div>
    <p class="r"></p><p class="r m"></p>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .hero{position:relative;height:84cqh;margin:10px 12px;border-radius:14px;overflow:hidden;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bg))}
.d .ly{position:absolute;left:0;right:0;top:-50%;height:200%;will-change:transform}
.d .ly.sun{left:62%;right:auto;width:22px;height:22px;top:36%;border-radius:50%;background:var(--ml-grad)}
.d .ly.m1{background:var(--ml-bar);clip-path:polygon(0 100%,0 52%,20% 44%,40% 54%,62% 42%,82% 52%,100% 46%,100% 100%)}
.d .ly.m2{background:var(--ml-accent-line);clip-path:polygon(0 100%,0 62%,28% 70%,50% 60%,76% 70%,100% 64%,100% 100%)}
.d .fg{position:absolute;left:10px;bottom:10px;width:56%;padding:5px 0;border-radius:10px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .fg .r{margin:7px 10px}
@media (prefers-reduced-motion: reduce){.d .ly{transform:none!important}}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const items = [...root.querySelectorAll('.hero')].map((h) => ({
      h,
      l: [
        [h.querySelector('.sun'), 0.55],
        [h.querySelector('.m1'), 0.3],
        [h.querySelector('.m2'), 0.14],
      ],
    }));
    update = () => {
      const mid = sc.scrollTop + sc.clientHeight / 2;
      items.forEach((it) => {
        const rel = mid - (it.h.offsetTop + it.h.offsetHeight / 2);
        it.l.forEach(([el, s]) => (el.style.transform = 'translateY(' + (rel * s).toFixed(1) + 'px)'));
      });
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 7000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a layered parallax hero. Stack three or four absolutely positioned layers inside a hero with overflow: hidden (sky or sun, far hills, near hills), each taller than the hero so it never exposes an edge, plus the headline and CTA in normal flow on top. On scroll, translate each layer vertically by a different fraction of how far the hero center is from the viewport center: rel = scrollY + innerHeight / 2 - (hero.offsetTop + hero.offsetHeight / 2), layer.style.transform = translate3d(0, rel * speed, 0) with speeds like 0.5 for the sun, 0.3 for far hills and 0.15 for near hills. Slower layers read as farther away. Run it from a passive scroll listener batched in requestAnimationFrame, only while the hero is near the viewport (IntersectionObserver), and use will-change: transform on the layers. Never animate top or background-position. Keep the total travel under about 80px on mobile, and under prefers-reduced-motion: reduce set every layer to transform: none. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-horizontal',
  cat: 'scroll',
  title: 'Horizontal scroll section',
  sub: 'Vertical scroll drives a sideways track',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="tall"><div class="pin"><div class="track">
      <div class="hc"><b>01</b><div class="im"></div><p class="r m"></p></div>
      <div class="hc"><b>02</b><div class="im"></div><p class="r s"></p></div>
      <div class="hc"><b>03</b><div class="im"></div><p class="r m"></p></div>
      <div class="hc"><b>04</b><div class="im"></div><p class="r s"></p></div>
      <div class="hc"><b>05</b><div class="im"></div><p class="r m"></p></div>
    </div><div class="pr"><i></i></div></div></div>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .tall{height:480cqh}
.d .pin{position:sticky;top:0;height:100cqh;overflow:hidden;display:flex;align-items:center}
.d .track{flex:none;display:flex;gap:10px;padding:0 12px;will-change:transform}
.d .hc{flex:none;width:62cqw;height:64cqh;padding:10px;display:flex;flex-direction:column;gap:6px;border-radius:14px;background:var(--ml-surface);border:1px solid var(--ml-line);transition:background-color .3s ease,border-color .3s ease}
.d .hc b{font:600 10px/1 var(--ml-mono);color:var(--ml-muted);transition:color .3s ease}
.d .hc .im{flex:1;margin:0;height:auto}
.d .hc .r{flex:none;margin:0}
.d .hc.on{background:var(--ml-accent-soft);border-color:var(--ml-accent-line)}
.d .hc.on b{color:var(--ml-accent-ink)}
.d .pr{position:absolute;left:12px;right:12px;bottom:9px;height:3px;border-radius:2px;background:var(--ml-bar-2)}
.d .pr i{display:block;height:100%;border-radius:2px;background:var(--ml-accent);transform-origin:0 50%;transform:scaleX(0)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const tall = root.querySelector('.tall');
    const track = root.querySelector('.track');
    const bar = root.querySelector('.pr i');
    const cards = [...root.querySelectorAll('.hc')];
    update = () => {
      const max = tall.offsetHeight - sc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, sc.scrollTop / max)) : 0;
      const travel = track.scrollWidth - sc.clientWidth;
      track.style.transform = 'translate3d(' + (-p * travel).toFixed(1) + 'px,0,0)';
      bar.style.transform = 'scaleX(' + p.toFixed(3) + ')';
      const on = Math.round(p * (cards.length - 1));
      cards.forEach((c, i) => c.classList.toggle('on', i === on));
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a horizontal-scroll section driven by vertical scrolling. Make an outer section whose height is roughly (track width - viewport width + viewport height), so there is enough vertical distance to travel. Inside it put a child with position: sticky; top: 0; height: 100vh; overflow: hidden that holds a flex track of cards (flex: none; gap 24px). On scroll, compute progress = clamp(scrollY - section.offsetTop, 0, section.offsetHeight - innerHeight) / (section.offsetHeight - innerHeight) and set the track to transform: translate3d(-progress * (track.scrollWidth - innerWidth), 0, 0) inside requestAnimationFrame. Highlight the card nearest the center in your accent color and add a thin progress line along the bottom with scaleX. Keep it vertical-only on small screens (let the track wrap into a normal column) and under prefers-reduced-motion: reduce. Make sure the sticky parent has no overflow set on its ancestors, or sticky breaks. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-story',
  cat: 'scroll',
  title: 'Scrollytelling scene',
  sub: 'A pinned scene reacts to each step',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc" data-s="0">
    <div class="stick"><i class="orb"></i></div>
    <div class="steps">
      <div class="st"><div class="cd"><b>1</b><p class="r m"></p><p class="r s"></p></div></div>
      <div class="st"><div class="cd"><b>2</b><p class="r m"></p><p class="r s"></p></div></div>
      <div class="st"><div class="cd"><b>3</b><p class="r m"></p><p class="r s"></p></div></div>
    </div>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .stick{position:sticky;top:0;height:100cqh;background:linear-gradient(180deg,var(--ml-surface),var(--ml-bg))}
.d .orb{position:absolute;left:50%;top:50%;width:42cqh;height:42cqh;margin:-21cqh 0 0 -21cqh;border-radius:50%;background:var(--ml-grad);box-shadow:0 12px 30px rgba(255,68,51,.22);transition:transform 900ms var(--ml-spring),border-radius 900ms var(--ml-spring),opacity .5s ease}
.d .sc[data-s="0"] .orb{transform:translate(-18cqw,-4cqh)}
.d .sc[data-s="1"] .orb{transform:translate(20cqw,2cqh) scale(.78) rotate(45deg);border-radius:28%}
.d .sc[data-s="2"] .orb{transform:translate(0,30cqh) scale(1.7);opacity:.45}
.d .steps{position:relative;margin-top:-100cqh}
.d .st{height:100cqh;display:flex;align-items:center;padding:0 12px}
.d .st:nth-child(1){justify-content:flex-end}
.d .st:nth-child(3){align-items:flex-start;padding-top:14px}
.d .cd{width:56%;padding:10px 0 4px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .cd b{display:block;margin-left:12px;font:600 10px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d .cd .r{margin:8px 12px}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    update = () => {
      const i = Math.max(0, Math.min(2, Math.round(sc.scrollTop / Math.max(1, sc.clientHeight))));
      if (sc.dataset.s !== String(i)) sc.dataset.s = String(i);
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a scrollytelling section. Make a tall wrapper containing a pinned scene (position: sticky; top: 0; height: 100vh) with one large graphic, and a column of text steps layered over it (give the steps container margin-top: -100vh and each step min-height: 100vh with the copy in a white card). Detect the active step with an IntersectionObserver (rootMargin: '-45% 0px -45% 0px', so a step counts when it crosses the middle of the screen) and write its index to data-step on the wrapper. Drive the scene purely from CSS: .wrap[data-step='1'] .shape { transform: translate(20vw, 2vh) scale(0.78) rotate(45deg); border-radius: 28% } and so on, with transition: transform 900ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.985 66.7%, 1 100%). Animate only transform and opacity. Make each step a real heading plus paragraph so the story reads without the visual, and under prefers-reduced-motion: reduce swap states instantly. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-text-ink',
  cat: 'scroll',
  title: 'Text highlight on scroll',
  sub: 'Words ink in from grey to dark',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="tall"><div class="pin"><p class="ink" data-t="Great motion is felt before it is noticed. It guides the eye, softens change and makes every screen feel alive."></p></div></div>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .tall{height:260cqh}
.d .pin{position:sticky;top:0;height:100cqh;display:grid;place-items:center;padding:0 16px}
.d .ink{font:600 clamp(13px,5.4cqw,26px)/1.36 var(--ml-font);letter-spacing:-.015em}
.d .ink span{color:var(--ml-bar);transition:color .3s ease}
.d .ink span.on{color:var(--ml-ink)}
.d .ink span.cur{color:var(--ml-accent)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const tall = root.querySelector('.tall');
    const ink = root.querySelector('.ink');
    ink.innerHTML = ink.dataset.t.split(' ').map((w) => '<span>' + w + '</span>').join(' ');
    const words = [...ink.children];
    update = () => {
      const max = tall.offsetHeight - sc.clientHeight;
      const p = max > 0 ? Math.min(1, sc.scrollTop / max) : 0;
      const k = Math.round(Math.min(1, p / 0.85) * words.length);
      words.forEach((w, i) => {
        w.classList.toggle('on', i < k - 1);
        w.classList.toggle('cur', i === k - 1);
      });
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 7000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a scroll-linked text highlight for a manifesto paragraph. Split the paragraph into one span per word (keep the original text in an aria-label on the paragraph and set the spans aria-hidden, or keep real text and style it, so screen readers read it normally). Pin the paragraph with a sticky wrapper (position: sticky; top: 0; height: 100vh; display: grid; place-items: center) inside a tall section of about 250vh. On scroll compute progress across the section and ink the first round(progress * wordCount) words: the default color is a light grey-blue, inked words switch to your near-black text color with transition: color 300ms ease, and the newest word uses your accent color. Alternatively use animation-timeline: view() per word with staggered animation-range. Large headline size (clamp(28px, 4vw, 56px)), tight tracking, 1.3 line height. Under prefers-reduced-motion: reduce show the whole paragraph inked. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-card-stack',
  cat: 'scroll',
  title: 'Sticky card stack',
  sub: 'Cards pile up and shrink behind',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="stack">
      <div class="k k1" style="--i:0"><b>01</b><p class="r m"></p><p class="r s"></p></div>
      <div class="k k2" style="--i:1"><b>02</b><p class="r m"></p><p class="r s"></p></div>
      <div class="k k3" style="--i:2"><b>03</b><p class="r m"></p><p class="r s"></p></div>
      <div class="k k4" style="--i:3"><b>04</b><p class="r m"></p><p class="r s"></p></div>
      <div class="tail"></div>
    </div>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .stack{padding:8px 12px 0}
.d .k{position:sticky;top:calc(8px + var(--i) * 11px);height:58cqh;margin-bottom:12cqh;padding:12px 0;border-radius:14px;border:1px solid var(--ml-line);box-shadow:var(--ml-shadow);transform-origin:50% 0;will-change:transform}
.d .k b{display:block;margin:0 12px 6px;font:600 10px/1 var(--ml-mono);color:var(--ml-muted)}
.d .k .r{margin:9px 12px;background:var(--ml-bar)}
.d .k1{background:var(--ml-bg)}
.d .k2{background:var(--ml-accent-soft)}
.d .k3{background:var(--ml-surface)}
.d .k4{background:var(--ml-grad);border-color:transparent}
.d .k4 b{color:rgba(255,255,255,.8)}
.d .k4 .r{background:rgba(255,255,255,.55)}
.d .tail{height:30cqh}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const cards = [...root.querySelectorAll('.k')];
    update = () => {
      const top = sc.getBoundingClientRect().top;
      const cov = cards.map((c, i) => {
        const nx = cards[i + 1];
        if (!nx) return 0;
        const ti = 8 + i * 11;
        const gap = nx.getBoundingClientRect().top - top - ti - 11;
        return Math.max(0, Math.min(1, 1 - gap / (c.offsetHeight * 0.9)));
      });
      let acc = 0;
      for (let i = cards.length - 1; i >= 0; i--) {
        acc += cov[i];
        cards[i].style.transform = 'scale(' + (1 - 0.045 * acc).toFixed(3) + ')';
      }
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a sticky card stack. Put the cards as siblings inside one container and give each position: sticky with an increasing top offset (top: calc(80px + var(--i) * 16px)) so every card pins slightly lower than the previous one, with opaque backgrounds, a hairline border and a soft shadow. Add margin-bottom between cards so each one scrolls up into place. Important: a sticky element can only travel inside its parent, so add a real tail element (an empty div of about 40vh) as the last child of the container, otherwise the stack unpins as soon as the last card does. As each next card approaches, scale the covered card down: coverage = clamp(1 - gapToNext / cardHeight, 0, 1), transform: scale(1 - 0.05 * coverageSum) with transform-origin: 50% 0, computed in a requestAnimationFrame-batched scroll listener (or animation-timeline: view() where supported). Animate only transform. Under prefers-reduced-motion: reduce keep the sticky stacking but skip the scaling. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-curtain',
  cat: 'scroll',
  title: 'Curtain reveal',
  sub: 'Next section slides over a pinned one',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <section class="s1"><div class="in"><h5>Design</h5><p class="r m"></p><p class="r s"></p><div class="im"></div></div><i class="dim"></i></section>
    <section class="s2"><div class="in"><h5>Build</h5><p class="r m"></p><p class="r s"></p><div class="bars"><i></i><i></i><i></i><i></i></div></div><i class="dim"></i></section>
    <section class="s3"><div class="in"><h5>Ship</h5><p class="r m"></p><p class="r s"></p></div></section>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d section{position:relative;height:100cqh;overflow:hidden}
.d .s1,.d .s2{position:sticky;top:0}
.d .s1{z-index:1;background:var(--ml-bg)}
.d .s2{z-index:2;background:var(--ml-accent-soft);border-radius:16px 16px 0 0;box-shadow:0 -12px 28px rgba(35,15,10,.12)}
.d .s3{z-index:3;background:var(--ml-grad);border-radius:16px 16px 0 0;box-shadow:0 -12px 28px rgba(35,15,10,.16)}
.d .in{padding:14px 0;transform-origin:50% 0}
.d h5{margin:0 12px;font:700 clamp(17px,7cqw,30px)/1.1 var(--ml-font);letter-spacing:-.03em}
.d .s3 h5{color:#fff}
.d .s3 .r{background:rgba(255,255,255,.55)}
.d .s2 .r{background:var(--ml-accent-line)}
.d .bars{display:flex;align-items:flex-end;gap:6px;height:30cqh;margin:12px}
.d .bars i{flex:1;border-radius:6px;background:var(--ml-bg)}
.d .bars i:nth-child(1){height:40%}
.d .bars i:nth-child(2){height:62%}
.d .bars i:nth-child(3){height:48%}
.d .bars i:nth-child(4){height:88%;background:var(--ml-accent)}
.d .dim{position:absolute;inset:0;background:rgba(35,15,10,.22);opacity:0;pointer-events:none}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const parts = [...root.querySelectorAll('.s1, .s2')].map((s) => [s.querySelector('.in'), s.querySelector('.dim')]);
    update = () => {
      const vh = Math.max(1, sc.clientHeight);
      parts.forEach(([inn, dim], i) => {
        const k = Math.max(0, Math.min(1, (sc.scrollTop - i * vh) / vh));
        inn.style.transform = 'scale(' + (1 - 0.06 * k).toFixed(3) + ')';
        dim.style.opacity = k.toFixed(3);
      });
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a curtain-reveal stack of full-screen sections. Give every section height: 100vh and a rising z-index. Make all sections except the last position: sticky; top: 0, so each one stays pinned while the next scrolls up and covers it like a curtain. Round the top corners of each covering section (16px) and give it an upward soft shadow (0 -12px 28px rgba(35,15,10, 0.14)) so the edge reads as a lifted sheet. As the next section covers the pinned one, dim it with an overlay whose opacity goes from 0 to 0.25 and scale its content to 0.94, both from scroll progress = clamp((scrollY - sectionIndex * innerHeight) / innerHeight, 0, 1) in a requestAnimationFrame-batched passive listener. Only transform and opacity animate. Make sure no ancestor sets overflow other than visible, which would break sticky. Under prefers-reduced-motion: reduce drop the dim and scale and keep the stacking. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-image-sequence',
  cat: 'scroll',
  title: 'Pinned image sequence',
  sub: 'A pinned frame flips as you scroll',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="tall"><div class="pin"><div class="fr"></div><div class="ft"></div><b class="cnt">01 / 08</b></div></div>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .tall{height:340cqh}
.d .pin{position:sticky;top:0;height:100cqh;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px}
.d .fr{position:relative;width:80%;height:52cqh;border-radius:12px;background:var(--ml-surface);border:1px solid var(--ml-line);overflow:hidden}
.d .fr::after{content:"";position:absolute;left:6%;right:6%;bottom:15%;height:1px;background:var(--ml-bar)}
.d .f{position:absolute;inset:0;display:none}
.d .f.on{display:block}
.d .f i{position:absolute;width:16px;height:16px;margin-left:-8px;border-radius:50%}
.d .f .g{background:var(--ml-accent-line)}
.d .f .g1{opacity:.5}
.d .f .g2{opacity:.25}
.d .f .bl{background:var(--ml-grad);box-shadow:0 4px 10px rgba(255,68,51,.25)}
.d .ft{display:flex;gap:5px}
.d .ft i{width:14px;height:3px;border-radius:2px;background:var(--ml-bar)}
.d .ft i.on{background:var(--ml-accent)}
.d .cnt{font:600 9px/1 var(--ml-mono);color:var(--ml-muted);letter-spacing:.06em}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const tall = root.querySelector('.tall');
    const fr = root.querySelector('.fr');
    const ft = root.querySelector('.ft');
    const cnt = root.querySelector('.cnt');
    const N = 8;
    const at = (i) => {
      const t = i / (N - 1);
      return 'left:' + (10 + t * 80).toFixed(1) + '%;bottom:calc(15% + ' + (4 * t * (1 - t) * 58).toFixed(1) + '%)';
    };
    let html = '';
    for (let i = 0; i < N; i++) {
      html += '<div class="f">';
      if (i > 1) html += '<i class="g g2" style="' + at(i - 2) + '"></i>';
      if (i > 0) html += '<i class="g g1" style="' + at(i - 1) + '"></i>';
      html += '<i class="bl" style="' + at(i) + '"></i></div>';
    }
    fr.innerHTML = html;
    ft.innerHTML = '<i></i>'.repeat(N);
    const frames = [...fr.children];
    const ticks = [...ft.children];
    let cur = -1;
    update = () => {
      const max = tall.offsetHeight - sc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, sc.scrollTop / max)) : 0;
      const i = Math.min(N - 1, Math.floor(p * N));
      if (i === cur) return;
      cur = i;
      frames.forEach((f, n) => f.classList.toggle('on', n === i));
      ticks.forEach((t, n) => t.classList.toggle('on', n === i));
      cnt.textContent = '0' + (i + 1) + ' / 0' + N;
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a pinned image-sequence section (the product-page technique where scrolling plays a flipbook). Create a tall wrapper (about 300vh) with a sticky child (position: sticky; top: 0; height: 100vh) holding a single frame area. Pre-render every frame, either as a stack of absolutely positioned layers where only one has display: block, or as a sprite sheet advanced with background-position. On scroll compute progress = scrollTop / (wrapper.offsetHeight - innerHeight) and show frame index = min(frameCount - 1, floor(progress * frameCount)); only touch the DOM when the index changes. For photographic sequences preload the images with decode() before pinning and draw them to a canvas with requestAnimationFrame. Add a small frame counter and a row of tick marks beneath the frame, with the active tick in your accent color, and let the keyboard (arrow keys) move through the wrapper so it stays accessible. Under prefers-reduced-motion: reduce show a single representative frame. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-mask',
  cat: 'scroll',
  title: 'Reveal mask',
  sub: 'A circle and an inset open on entry',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <p class="r t"></p><p class="r m"></p>
    <div class="rv"><div class="mk c"><i></i></div></div>
    <p class="r"></p><p class="r s"></p>
    <div class="rv"><div class="mk n"><i></i></div></div>
    <p class="r m"></p><p class="r"></p>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .r.t{height:10px;width:56%;margin-top:12px;background:var(--ml-bar)}
.d .rv{position:relative;height:74cqh;margin:12px;border-radius:14px;background:var(--ml-bar-2)}
.d .mk{position:absolute;inset:0;overflow:hidden;border-radius:14px;background:var(--ml-grad);clip-path:circle(0% at 50% 50%)}
.d .mk i{position:absolute;inset:0}
.d .mk i::before{content:"";position:absolute;right:22%;top:20%;width:20px;height:20px;border-radius:50%;background:rgba(255,255,255,.88)}
.d .mk i::after{content:"";position:absolute;left:0;right:0;bottom:0;height:48%;background:rgba(255,255,255,.3);clip-path:polygon(0 100%,0 62%,22% 24%,44% 66%,64% 34%,84% 60%,100% 44%,100% 100%)}
.d .mk.n{background:linear-gradient(135deg,var(--ml-accent-2),var(--ml-accent))}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const rvs = [...root.querySelectorAll('.rv')].map((r) => [r, r.querySelector('.mk')]);
    update = () => {
      const vh = sc.clientHeight;
      rvs.forEach(([r, m], i) => {
        const p = Math.max(0, Math.min(1, (vh - (r.offsetTop - sc.scrollTop)) / (vh * 0.85)));
        m.style.clipPath =
          i === 0
            ? 'circle(' + (p * 72).toFixed(1) + '% at 50% 50%)'
            : 'inset(' + ((1 - p) * 34).toFixed(1) + '% ' + ((1 - p) * 34).toFixed(1) + '% round ' + (14 + (1 - p) * 30).toFixed(1) + 'px)';
      });
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 7000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build scroll-driven reveal masks for image sections. Put the image in a wrapper and clip it with clip-path, driven by how far the wrapper has entered the viewport: p = clamp((innerHeight - rect.top) / (innerHeight * 0.85), 0, 1). For a circle reveal use clip-path: circle(calc(p * 72%) at 50% 50%) (72% of the reference radius reaches the corners of a wide box); for an inset reveal use clip-path: inset(calc((1 - p) * 34%) round calc(14px + (1 - p) * 30px)) so the rectangle grows and its corners tighten. Show a flat grey-blue placeholder in the same footprint behind the mask so layout never jumps. Set the values from a requestAnimationFrame-batched passive scroll listener, or use animation-timeline: view() with animation-range: entry 0% cover 40% and a keyframe between the two clip-path values. Animate clip-path only. Under prefers-reduced-motion: reduce show the images fully revealed. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-count',
  cat: 'scroll',
  title: 'Counter on enter',
  sub: 'Numbers count up as rows appear',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="stat"><p class="r m"></p><b class="num" data-to="12480" data-f="0.82">0</b><div class="bf"><i></i></div></div>
    <div class="stat"><p class="r s"></p><b class="num" data-to="98" data-s="%" data-f="0.98">0</b><div class="bf"><i></i></div></div>
    <div class="stat"><p class="r m"></p><b class="num" data-to="4.9" data-d="1" data-s="/5" data-f="0.9">0</b><div class="bf"><i></i></div></div>
    <div class="stat"><p class="r s"></p><b class="num" data-to="326" data-s="k" data-f="0.64">0</b><div class="bf"><i></i></div></div>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .stat{margin:10px 12px;height:60cqh;display:flex;flex-direction:column;justify-content:center;gap:10px;padding:0 14px;border-radius:14px;background:var(--ml-surface)}
.d .stat .r{margin:0}
.d .num{font:700 clamp(24px,10cqw,44px)/1 var(--ml-font);letter-spacing:-.04em;font-variant-numeric:tabular-nums;color:var(--ml-accent-ink)}
.d .bf{height:5px;border-radius:3px;background:var(--ml-bar)}
.d .bf i{display:block;height:100%;border-radius:3px;background:var(--ml-accent);transform-origin:0 50%;transform:scaleX(0)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const tw = new Map();
    const fmt = (el, v) => {
      const d = +el.dataset.d || 0;
      el.textContent = (d ? v.toFixed(d) : Math.round(v).toLocaleString('en-US')) + (el.dataset.s || '');
    };
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          const el = e.target.querySelector('.num');
          const fill = e.target.querySelector('.bf i');
          cancelAnimationFrame(tw.get(el));
          if (!e.isIntersecting) {
            fmt(el, 0);
            fill.style.transform = 'scaleX(0)';
            return;
          }
          const to = +el.dataset.to;
          let t0 = performance.now();
          const step = (t) => {
            if (!root.isConnected) return;
            if (root.dataset.paused) {
              t0 += 16;
              tw.set(el, requestAnimationFrame(step));
              return;
            }
            const k = Math.min(1, (t - t0) / 1100);
            const v = 1 - Math.pow(1 - k, 3);
            fmt(el, to * v);
            fill.style.transform = 'scaleX(' + (v * +el.dataset.f).toFixed(3) + ')';
            if (k < 1) tw.set(el, requestAnimationFrame(step));
          };
          tw.set(el, requestAnimationFrame(step));
        }),
      { root: sc, threshold: 0.6 }
    );
    root.querySelectorAll('.stat').forEach((s) => io.observe(s));
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Add count-up numbers to a stats section that run when each stat enters the viewport. Put the final value in data-to (plus data-decimals and data-suffix for things like 4.9/5 or 98%), and start with the formatted zero. Watch each stat with an IntersectionObserver (threshold 0.6) and on entry run a requestAnimationFrame tween of about 1100ms with an ease-out cubic, v = 1 - Math.pow(1 - k, 3), writing textContent = (v * target) formatted through toLocaleString. Use font-variant-numeric: tabular-nums so digits do not jitter and the layout width stays stable, and fill a thin progress bar beside it with transform: scaleX. Run once per stat (unobserve after the first hit) for a landing page, or reset on exit if you want it to replay. Keep the real final number in an aria-label on the element so assistive tech and no-JS users read the true value, and under prefers-reduced-motion: reduce print the final number immediately. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-stagger-list',
  cat: 'scroll',
  title: 'Staggered list entrance',
  sub: 'Rows cascade in one after another',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="im big"></div>
    <p class="r m"></p>
    <div class="lst">
      <div class="li" style="--i:0"><b>01</b><p class="r m"></p><u></u></div>
      <div class="li" style="--i:1"><b>02</b><p class="r"></p><u></u></div>
      <div class="li" style="--i:2"><b>03</b><p class="r s"></p><u></u></div>
      <div class="li" style="--i:3"><b>04</b><p class="r m"></p><u></u></div>
      <div class="li" style="--i:4"><b>05</b><p class="r"></p><u></u></div>
      <div class="li" style="--i:5"><b>06</b><p class="r s"></p><u></u></div>
      <div class="li" style="--i:6"><b>07</b><p class="r m"></p><u></u></div>
    </div>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .im.big{height:70cqh}
.d .lst{padding:4px 0 10px}
.d .li{display:flex;align-items:center;gap:9px;margin:6px 12px;padding:9px 10px;border-radius:10px;background:var(--ml-surface);opacity:0;transform:translateX(30px) scale(.97)}
.d .li b{font:600 9px/1 var(--ml-mono);color:var(--ml-muted)}
.d .li .r{flex:1;margin:0}
.d .li .r.m{flex:none;width:60%}
.d .li u{margin-left:auto;width:20px;height:10px;border-radius:5px;background:var(--ml-bar)}
.d .lst.in .li{opacity:1;transform:none;transition:opacity .4s ease calc(var(--i) * 75ms),transform var(--ml-spring-dur) var(--ml-spring) calc(var(--i) * 75ms)}
.d .lst.in .li:first-child u{background:var(--ml-accent)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const lst = root.querySelector('.lst');
    const io = new IntersectionObserver((es) => es.forEach((e) => lst.classList.toggle('in', e.isIntersecting)), {
      root: sc,
      threshold: 0.4,
    });
    io.observe(lst);
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a staggered list entrance. Start every list item at opacity: 0; transform: translateX(30px) scale(0.97). Watch the list container (not each item) with an IntersectionObserver (threshold 0.3) and add an is-in class to it when it enters. The class turns every item to opacity: 1; transform: none, and each item gets its own delay through a CSS variable: style='--i: 3' per item and transition-delay: calc(var(--i) * 75ms) on both opacity and transform, with a 587ms critically damped linear() spring for transform and 400ms ease for opacity. Put the transition only on the is-in state so removing the class resets the list instantly if you want it to replay. For lists longer than about 10 items cap the delay at 600ms total so the last row is not left waiting. Use animation-timeline: view() as the pure CSS alternative. Under prefers-reduced-motion: reduce show all rows at once. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-sticky-media',
  cat: 'scroll',
  title: 'Sticky media beside text',
  sub: 'Media stays put, copy swaps it',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="cols">
      <div class="md">
        <div class="mf m1 on"><div class="im"></div></div>
        <div class="mf m2"><div class="chart"><i></i><i></i><i></i><i></i></div></div>
        <div class="mf m3"><div class="gr"><i></i><i></i><i></i><i></i></div></div>
      </div>
      <div class="txs">
        <div class="tx on"><b>01</b><p class="r m"></p><p class="r"></p><p class="r s"></p></div>
        <div class="tx"><b>02</b><p class="r m"></p><p class="r"></p><p class="r s"></p></div>
        <div class="tx"><b>03</b><p class="r m"></p><p class="r"></p><p class="r s"></p></div>
      </div>
    </div>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .cols{display:grid;grid-template-columns:48% 1fr;align-items:start}
.d .md{position:sticky;top:0;height:100cqh;padding:12px 6px 12px 12px}
.d .mf{position:absolute;inset:12px 6px 12px 12px;display:grid;place-items:center;border-radius:12px;background:var(--ml-surface);border:1px solid var(--ml-line);opacity:0;transform:scale(.92);transition:opacity .35s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .mf.on{opacity:1;transform:none}
.d .mf .im{width:78%;margin:0;height:56%}
.d .chart{display:flex;align-items:flex-end;gap:5px;width:70%;height:50%}
.d .chart i{flex:1;border-radius:4px;background:var(--ml-bar)}
.d .chart i:nth-child(1){height:38%}
.d .chart i:nth-child(2){height:60%}
.d .chart i:nth-child(3){height:46%}
.d .chart i:nth-child(4){height:92%;background:var(--ml-accent)}
.d .gr{display:grid;grid-template-columns:1fr 1fr;gap:6px;width:62%;aspect-ratio:1}
.d .gr i{border-radius:8px;background:var(--ml-bar)}
.d .gr i:nth-child(2){background:var(--ml-accent)}
.d .tx{height:100cqh;display:flex;flex-direction:column;justify-content:center;padding-right:8px;opacity:.35;transition:opacity .3s ease}
.d .tx.on{opacity:1}
.d .tx b{margin:0 0 6px 12px;font:600 10px/1 var(--ml-mono);color:var(--ml-accent-ink)}
.d .tx .r{margin:7px 0 0 12px}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const mfs = [...root.querySelectorAll('.mf')];
    const txs = [...root.querySelectorAll('.tx')];
    update = () => {
      const i = Math.max(0, Math.min(2, Math.round(sc.scrollTop / Math.max(1, sc.clientHeight))));
      mfs.forEach((m, n) => m.classList.toggle('on', n === i));
      txs.forEach((t, n) => t.classList.toggle('on', n === i));
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a sticky side-by-side feature section. Use a two-column grid with align-items: start. The left column holds the media in a wrapper with position: sticky; top: 0 (add your header height) and height: 100vh, stacking three visuals on top of each other with opacity: 0 and transform: scale(0.92). The right column holds the text blocks, each min-height: 100vh with the copy vertically centered, so the page scrolls past one idea at a time. Detect the active block with an IntersectionObserver (rootMargin: '-45% 0px -45% 0px') and toggle an is-on class on the matching visual and text block; is-on sets opacity: 1; transform: none with transition: opacity 350ms ease, transform 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.985 66.7%, 1 100%). Dim inactive text blocks to 35% opacity. On mobile stack the columns and make the media sticky at the top at 40vh. Keep real headings in each block for screen readers. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-back-top',
  cat: 'scroll',
  title: 'Back to top button',
  sub: 'Appears after scrolling, glides up',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc"><div class="feed"></div></div>
  <button class="up" type="button" aria-label="Back to top"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg></button>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .feed{padding-bottom:10px}
.d .fi{display:flex;align-items:center;gap:9px;height:15cqh;min-height:26px;margin:8px 12px 0;padding:0 10px;border-radius:10px;background:var(--ml-surface)}
.d .fi i{flex:none;width:16px;height:16px;border-radius:50%;background:var(--ml-bar)}
.d .fi div{flex:1}
.d .fi .r{margin:0 0 5px}
.d .fi .r:last-child{margin:0}
.d .up{appearance:none;border:0;cursor:pointer;position:absolute;right:10px;bottom:10px;width:30px;height:30px;display:grid;place-items:center;border-radius:50%;background:var(--ml-grad);box-shadow:0 1px 2px rgba(255,68,51,.25),0 8px 18px rgba(255,68,51,.28);opacity:0;transform:translateY(12px) scale(.8);pointer-events:none;transition:opacity .25s ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .up.show{opacity:1;transform:none;pointer-events:auto}
.d .up.show.press,.d .up.show:active{transform:scale(.88);transition-duration:90ms}
.d .up:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const up = root.querySelector('.up');
    root.querySelector('.feed').innerHTML =
      '<div class="fi"><i></i><div><p class="r m"></p><p class="r s"></p></div></div>'.repeat(14);
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const sync = () => up.classList.toggle('show', sc.scrollTop > sc.clientHeight * 0.45);
    sc.addEventListener('scroll', sync, { passive: true });
    up.addEventListener('click', () => {
      yieldToUser();
      sc.scrollTo({ top: 0, behavior: 'smooth' });
    });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    const period = 7200;
    let start = performance.now();
    let from = 0;
    let fired = false;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t;
        fired = false;
        up.classList.remove('press');
        return;
      }
      const e = (t - start) % period;
      if (e < 500) {
        from = sc.scrollTop;
        fired = false;
      } else if (e < 2800) {
        const target = (sc.scrollHeight - sc.clientHeight) * 0.78;
        sc.scrollTop = from + (target - from) * ease((e - 500) / 2300);
      } else if (e >= 3500 && e < 3700) {
        up.classList.add('press');
      } else if (e >= 3700) {
        up.classList.remove('press');
        if (!fired) {
          fired = true;
          sc.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
    sync();
    requestAnimationFrame(loop);
  },
  prompt: `Add a back-to-top button that only appears once the reader has scrolled. Place a 44px round button (fixed to the bottom-right corner on a real site, 16px from the edges) containing an up-arrow icon, hidden with opacity: 0; transform: translateY(12px) scale(0.8); pointer-events: none. Show it when scrollY passes about one viewport height, using a passive scroll listener (or an IntersectionObserver on a sentinel element near the top, which is cheaper) that toggles an is-visible class; is-visible sets opacity: 1; transform: none with transition: opacity 250ms ease, transform 587ms linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.944 50%, 0.985 66.7%, 1 100%). On click call window.scrollTo({ top: 0, behavior: 'smooth' }), then move focus to the page's first heading or skip link. Press feedback: transform: scale(0.88) with a 90ms transition on :active. Use a real <button> with aria-label='Back to top' and a visible :focus-visible ring, and under prefers-reduced-motion: reduce use behavior: 'auto'. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-velocity-skew',
  cat: 'scroll',
  title: 'Velocity skew',
  sub: 'Tiles lean with scroll speed',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="tl"><div class="im"></div><p class="r m"></p></div>
    <div class="tl"><div class="im"></div><p class="r s"></p></div>
    <div class="tl"><div class="im"></div><p class="r m"></p></div>
    <div class="tl"><div class="im"></div><p class="r s"></p></div>
    <div class="tl"><div class="im"></div><p class="r m"></p></div>
    <div class="tl"><div class="im"></div><p class="r s"></p></div>
  </div>
  <b class="chip">0.0 deg</b>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .tl{margin:8px 12px;padding:6px 0 2px;border-radius:12px;background:var(--ml-surface);transform:skewY(var(--sk,0deg));will-change:transform}
.d .tl .im{height:62cqh;margin:6px}
.d .tl .r{margin:8px 12px}
.d .chip{position:absolute;right:8px;top:30px;padding:3px 7px;border-radius:999px;font:600 9px/1 var(--ml-mono);color:var(--ml-accent-ink);background:var(--ml-accent-soft);box-shadow:var(--ml-shadow)}
@media (prefers-reduced-motion: reduce){.d .tl{transform:none!important}}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    const chip = root.querySelector('.chip');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    // [start, end, from, to] as fractions of the period / of the scroll range
    const legs = [
      [0.1, 0.3, 0, 0.5],
      [0.42, 0.62, 0.5, 1],
      [0.74, 0.96, 1, 0],
    ];
    const period = 6400;
    let start = performance.now();
    let lastY = sc.scrollTop;
    let last = start;
    let sk = 0;
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      const dt = Math.max(1, Math.min(t - last, 50));
      last = t;
      if (root.dataset.paused) return;
      if (t < userUntil) {
        start = t;
      } else {
        const p = ((t - start) % period) / period;
        const max = sc.scrollHeight - sc.clientHeight;
        for (const [a, b, f, to] of legs) {
          if (p >= a && p <= b) sc.scrollTop = (f + (to - f) * ease((p - a) / (b - a))) * max;
        }
      }
      const v = ((sc.scrollTop - lastY) / dt) * 1000;
      lastY = sc.scrollTop;
      const target = Math.max(-8, Math.min(8, v * 0.016));
      sk += (target - sk) * 0.16;
      sc.style.setProperty('--sk', sk.toFixed(2) + 'deg');
      chip.textContent = Math.abs(sk).toFixed(1) + ' deg';
    };
    requestAnimationFrame(loop);
  },
  prompt: `Build a scroll-velocity skew effect for a vertical list or gallery of cards. Track scroll velocity in a requestAnimationFrame loop: v = (scrollY - lastScrollY) / dtSeconds. Convert it to a target angle, target = clamp(v * 0.016, -8, 8) degrees, and ease toward it every frame with a spring-style lerp: skew += (target - skew) * 0.16, so the cards lean while scrolling and settle back to 0 when you stop. Write it to one CSS variable on the scroller (style.setProperty('--skew', skew + 'deg')) and have each card use transform: skewY(var(--skew)); no layout properties. Keep the max angle small (6 to 8 degrees) so text stays readable, and apply it to image tiles and cards rather than body copy. Run the loop only while the section is near the viewport (IntersectionObserver), stop it when |skew| and |v| are both near zero, and under prefers-reduced-motion: reduce disable the effect entirely. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-rotate',
  cat: 'scroll',
  title: 'Rotate on scroll',
  sub: 'A dial turns in step with scroll',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <div class="pin">
      <div class="ring"><svg viewBox="0 0 100 100"><circle class="o" cx="50" cy="50" r="46"/><circle class="tk" cx="50" cy="50" r="37"/><circle class="arc" cx="50" cy="50" r="46"/><path class="pt" d="M50 4 54 15 46 15Z"/></svg></div>
      <div class="ck"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg></div>
      <i class="mini"></i>
    </div>
    <p class="r m"></p><p class="r"></p><p class="r s"></p>
    <div class="im"></div>
    <p class="r"></p><p class="r m"></p><p class="r s"></p><p class="r"></p>
    <p class="r m"></p><p class="r"></p><p class="r s"></p><p class="r"></p>
    <div class="im"></div>
    <p class="r m"></p><p class="r"></p>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .pin{position:sticky;top:0;z-index:2;height:50cqh;display:grid;place-items:center;background:var(--ml-bg);border-bottom:1px solid var(--ml-line)}
.d .pin > *{grid-area:1/1}
.d .ring{width:40cqh;height:40cqh;will-change:transform}
.d .ring svg{display:block;width:100%;height:100%}
.d .ring .o{fill:none;stroke:var(--ml-bar);stroke-width:1.4}
.d .ring .tk{fill:none;stroke:var(--ml-bar);stroke-width:5;stroke-dasharray:1.1 3.87}
.d .ring .arc{fill:none;stroke:var(--ml-accent);stroke-width:3;stroke-linecap:round;stroke-dasharray:70 220;transform:rotate(-90deg);transform-origin:50% 50%}
.d .ring .pt{fill:var(--ml-accent)}
.d .ck{width:15cqh;height:15cqh;display:grid;place-items:center;border-radius:50%;background:var(--ml-grad);box-shadow:0 8px 20px rgba(255,68,51,.28)}
.d .mini{justify-self:end;align-self:start;margin:10px 14px 0 0;width:14px;height:14px;border-radius:4px;background:var(--ml-accent-line);will-change:transform}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const ring = root.querySelector('.ring');
    const mini = root.querySelector('.mini');
    update = () => {
      const m = sc.scrollHeight - sc.clientHeight;
      const p = m > 0 ? sc.scrollTop / m : 0;
      ring.style.transform = 'rotate(' + (p * 540).toFixed(1) + 'deg)';
      mini.style.transform = 'rotate(' + (-p * 720).toFixed(1) + 'deg)';
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 7500;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a badge or dial that rotates in step with scroll. Make the badge an inline SVG (an outer ring, a ring of tick marks drawn with stroke-dasharray on a circle, one accent arc and a small pointer) so the rotation is easy to read, with a static check or logo in the center that does not rotate. Pin it in a sticky header area (position: sticky; top: 0; background: your page color) so the content scrolls under it. In a requestAnimationFrame-batched passive scroll listener set transform: rotate(progress * 540deg) on the dial, where progress = scrollY / (scrollHeight - innerHeight), and rotate a small secondary shape the opposite way at a different speed for depth. Only transform animates. Alternatively use animation-timeline: scroll() with a keyframe from rotate(0) to rotate(540deg) and linear timing. Under prefers-reduced-motion: reduce leave the badge still. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-line-draw',
  cat: 'scroll',
  title: 'SVG line draw',
  sub: 'A path draws itself as you scroll',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc">
    <p class="r t"></p><p class="r s"></p>
    <div class="ld"><svg viewBox="0 0 200 600" preserveAspectRatio="xMidYMin meet"><path class="bgp" d="M100 10C20 70 20 150 100 200S180 330 100 390S20 510 100 590"/><path class="ln" d="M100 10C20 70 20 150 100 200S180 330 100 390S20 510 100 590"/><circle class="tip" cx="100" cy="10" r="7"/></svg></div>
    <p class="r m"></p><p class="r"></p>
  </div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .r.t{height:10px;width:56%;margin-top:12px;background:var(--ml-bar)}
.d .ld{margin:6px 12px}
.d .ld svg{display:block;width:100%;height:auto;overflow:visible}
.d .bgp,.d .ln{fill:none;stroke-width:6;stroke-linecap:round}
.d .bgp{stroke:var(--ml-bar-2)}
.d .ln{stroke:var(--ml-accent)}
.d .tip{fill:#fff;stroke:var(--ml-accent);stroke-width:3.5}
.d .nd circle{fill:#fff;stroke:var(--ml-bar);stroke-width:3;transition:fill .3s ease,stroke .3s ease}
.d .nd.on circle{fill:var(--ml-accent);stroke:var(--ml-accent)}
.d .nd rect{fill:var(--ml-bar-2)}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const NS = 'http://www.w3.org/2000/svg';
    const svg = root.querySelector('.ld svg');
    const ld = root.querySelector('.ld');
    const path = root.querySelector('.ln');
    const tip = root.querySelector('.tip');
    const len = path.getTotalLength();
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
    const stops = [0.17, 0.43, 0.69, 0.95];
    const nodes = stops.map((f) => {
      const pt = path.getPointAtLength(f * len);
      const g = document.createElementNS(NS, 'g');
      g.setAttribute('class', 'nd');
      const c = document.createElementNS(NS, 'circle');
      c.setAttribute('cx', pt.x);
      c.setAttribute('cy', pt.y);
      c.setAttribute('r', 9);
      g.appendChild(c);
      [[46, 7], [28, 7]].forEach(([w, dy], n) => {
        const r = document.createElementNS(NS, 'rect');
        r.setAttribute('x', pt.x < 100 ? pt.x + 18 : pt.x - 18 - w);
        r.setAttribute('y', pt.y - 12 + n * 12);
        r.setAttribute('width', w);
        r.setAttribute('height', dy);
        r.setAttribute('rx', 3.5);
        g.appendChild(r);
      });
      svg.insertBefore(g, tip);
      return g;
    });
    update = () => {
      if (!(ld.offsetHeight > 0)) return; // hidden section: 0 height would make p NaN and getPointAtLength throw
      const p = Math.max(0, Math.min(1, (sc.scrollTop + sc.clientHeight * 0.55 - ld.offsetTop) / ld.offsetHeight));
      path.style.strokeDashoffset = len * (1 - p);
      const pt = path.getPointAtLength(p * len);
      tip.setAttribute('cx', pt.x);
      tip.setAttribute('cy', pt.y);
      nodes.forEach((n, i) => n.classList.toggle('on', p >= stops[i]));
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 8000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build an SVG line that draws itself as the reader scrolls. Use an inline SVG path (a long winding S-curve with a faint full-length track path underneath). On the accent path read its length once with path.getTotalLength(), set stroke-dasharray to that length and stroke-dashoffset to the same value, then on scroll compute progress = clamp((scrollY + innerHeight * 0.55 - svg.offsetTop) / svg.offsetHeight, 0, 1) and set stroke-dashoffset = length * (1 - progress) inside a requestAnimationFrame-batched passive listener. Move a small round tip along the line with path.getPointAtLength(progress * length), and light up node circles placed at fixed fractions of the path when the drawn length passes them, with a labelled bar beside each. Use stroke-linecap: round, a 6px stroke, and no fill. In supporting browsers the CSS-only version is animation-timeline: view() on the path with a keyframe from the full dashoffset to 0. Under prefers-reduced-motion: reduce show the whole line drawn. Plain HTML, CSS and JS, no libraries.`,
});

ML.add({
  id: 'scroll-color-shift',
  cat: 'scroll',
  title: 'Section color shift',
  sub: 'Background tint changes per section',
  html: `
<div class="win"><div class="bar"><i></i><i></i><i></i><span class="url"></span></div>
  <div class="sc" data-t="0">
    <section><h5>Design</h5><p class="r m"></p><p class="r s"></p></section>
    <section><h5>Build</h5><p class="r m"></p><p class="r s"></p></section>
    <section><h5>Ship</h5><p class="r m"></p><p class="r s"></p></section>
    <section><h5>Grow</h5><p class="r m"></p><p class="r s"></p></section>
  </div>
  <div class="dots"><i class="on"></i><i></i><i></i><i></i></div>
</div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .win{position:relative;width:84%;height:84%;display:flex;flex-direction:column;background:var(--ml-bg);border-radius:12px;box-shadow:var(--ml-shadow);overflow:hidden}
.d .bar{display:flex;align-items:center;gap:4px;padding:8px 10px;border-bottom:1px solid var(--ml-line)}
.d .bar i{width:6px;height:6px;border-radius:50%;background:var(--ml-bar)}
.d .bar .url{margin-left:8px;width:42%;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .sc{position:relative;flex:1;min-height:0;overflow-y:auto;scrollbar-width:none;container-type:size}
.d .sc::-webkit-scrollbar{display:none}
.d .r{height:6px;margin:9px 12px;border-radius:3px;background:var(--ml-bar-2)}
.d .r.s{width:52%}
.d .r.m{width:74%}
.d .im{position:relative;overflow:hidden;margin:10px 12px;height:60px;border-radius:10px;background:linear-gradient(180deg,var(--ml-accent-soft),var(--ml-bar-2))}
.d .im::before{content:"";position:absolute;right:20%;top:18%;width:14px;height:14px;border-radius:50%;background:var(--ml-accent-line)}
.d .im::after{content:"";position:absolute;left:0;right:0;bottom:0;height:46%;background:var(--ml-bar);clip-path:polygon(0 100%,0 62%,24% 20%,46% 64%,64% 36%,100% 70%,100% 100%)}

.d .sc{--bgc:var(--ml-bg);--fg:var(--ml-ink);--br:var(--ml-bar-2);background-color:var(--bgc);transition:background-color .7s ease}
.d .sc[data-t="1"]{--bgc:var(--ml-accent-soft);--br:var(--ml-accent-line)}
.d .sc[data-t="2"]{--bgc:var(--ml-accent-line);--br:var(--ml-accent-soft)}
.d .sc[data-t="3"]{--bgc:var(--ml-accent);--fg:#fff;--br:rgba(255,255,255,.5)}
.d section{height:100cqh;display:flex;flex-direction:column;justify-content:center;padding-left:6px}
.d h5{margin:0 12px 8px;font:700 clamp(20px,9cqw,40px)/1.05 var(--ml-font);letter-spacing:-.035em;color:var(--fg);transition:color .7s ease}
.d section .r{background-color:var(--br);transition:background-color .7s ease}
.d .dots{position:absolute;right:8px;top:50%;margin-top:-22px;display:flex;flex-direction:column;gap:6px}
.d .dots i{width:5px;height:5px;border-radius:50%;background:var(--ml-bar);transition:transform var(--ml-spring-dur) var(--ml-spring),background-color .3s ease}
.d .dots i.on{background:var(--ml-accent);transform:scaleY(2.6)}
.d .sc[data-t="3"] ~ .dots i{background:rgba(255,255,255,.45)}
.d .sc[data-t="3"] ~ .dots i.on{background:#fff}
`,
  run: (root) => {
    const sc = root.querySelector('.sc');
    let userUntil = 0;
    const yieldToUser = () => (userUntil = performance.now() + 2500);
    sc.addEventListener('wheel', yieldToUser, { passive: true });
    sc.addEventListener('pointerdown', yieldToUser);
    sc.addEventListener('touchstart', yieldToUser, { passive: true });
    const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
    let update = () => {};
    const dots = [...root.querySelectorAll('.dots i')];
    update = () => {
      const i = Math.max(0, Math.min(3, Math.floor((sc.scrollTop + sc.clientHeight * 0.5) / Math.max(1, sc.clientHeight))));
      if (sc.dataset.t === String(i)) return;
      sc.dataset.t = String(i);
      dots.forEach((d, n) => d.classList.toggle('on', n === i));
    };
    sc.addEventListener('scroll', () => update(), { passive: true });
    const period = 9000;
    let start = performance.now();
    const loop = (t) => {
      if (!root.isConnected) return;
      requestAnimationFrame(loop);
      if (root.dataset.paused || t < userUntil) {
        start = t - ((t - start) % period);
        return;
      }
      const p = ((t - start) % period) / period;
      const max = sc.scrollHeight - sc.clientHeight;
      // hold at top, glide down, hold, glide back
      const k = p < 0.08 ? 0 : p < 0.5 ? ease((p - 0.08) / 0.42) : p < 0.58 ? 1 : 1 - ease((p - 0.58) / 0.42);
      sc.scrollTop = k * max;
    };
    update();
    requestAnimationFrame(loop);
  },
  prompt: `Build a page where the background color shifts as each section takes over the screen. Give every section a data-tone attribute and observe them with an IntersectionObserver (rootMargin: '-50% 0px -50% 0px', so a section is active when it crosses the middle of the viewport). On activation write the tone to data-tone on the page wrapper, and let CSS do the work: .page[data-tone='2'] { --bg: #FFF0ED; --fg: #1d1d1f } and so on, with background-color: var(--bg); color: var(--fg); transition: background-color 700ms ease, color 700ms ease on the wrapper. Keep the tones in one hue family (white, pale tint, soft tint, then your full accent) so it feels designed rather than random, flip the text to white once the background passes the accent, and re-check contrast at every stop (4.5:1 for body copy). Add a small dot indicator on the edge for orientation. Transitioning background-color repaints, so apply it to one full-viewport layer, not to many elements. Under prefers-reduced-motion: reduce switch tones without a transition. Plain HTML, CSS and JS, no libraries.`,
});
})();
