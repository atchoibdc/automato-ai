// Pricing cards. Real components: plans, toggles, sliders and calculators on --ml-surface.
(() => {
const C = `.d{display:grid;place-items:center;background:var(--ml-surface)}`;
const CK = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const RANGE = `
.d input[type=range]{-webkit-appearance:none;appearance:none;width:100%;height:18px;background:transparent;cursor:pointer;--p:50%;outline:none}
.d input[type=range]::-webkit-slider-runnable-track{height:6px;border-radius:99px;background:linear-gradient(90deg,var(--ml-accent) var(--p),var(--ml-bar) var(--p))}
.d input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;margin-top:-6px;border-radius:50%;background:#fff;box-shadow:0 0 0 1px var(--ml-line),0 2px 6px rgba(35,15,10,.22);transition:transform 200ms var(--ml-ease)}
.d input[type=range]:active::-webkit-slider-thumb{transform:scale(1.18)}
.d input[type=range]::-moz-range-track{height:6px;border-radius:99px;background:var(--ml-bar)}
.d input[type=range]::-moz-range-progress{height:6px;border-radius:99px;background:var(--ml-accent)}
.d input[type=range]::-moz-range-thumb{width:18px;height:18px;border:0;border-radius:50%;background:#fff;box-shadow:0 0 0 1px var(--ml-line),0 2px 6px rgba(35,15,10,.22)}
.d input[type=range]:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px;border-radius:9px}
`;
const END = ` Keep the real price in the DOM text for screen readers, make every control reachable and operable by keyboard with a visible :focus-visible outline, and under prefers-reduced-motion switch values instantly with no animation. Plain HTML, CSS and JS, no libraries.`;

ML.add({
  id: 'pricing-toggle',
  cat: 'pricing',
  title: 'Billing toggle',
  sub: 'Switch slides, prices roll, badge appears',
  html: `<div class="bar"><span class="m">Monthly</span><button class="sw" type="button" role="switch" aria-checked="false" aria-label="Bill yearly"><i></i></button><span class="y">Yearly</span><em class="sv">Save 20%</em></div>
<div class="row">
<div class="pl"><b>Starter</b><div class="pr"><s>$</s><span class="roll"><span class="st"><i>12</i><i>10</i></span></span><u>/mo</u></div><p>For solo makers</p></div>
<div class="pl"><b>Pro</b><div class="pr"><s>$</s><span class="roll"><span class="st"><i>29</i><i>23</i></span></span><u>/mo</u></div><p>For growing teams</p></div>
</div>`,
  css: C + `
.d{align-content:center;gap:14px}
.d .bar{display:flex;align-items:center;justify-content:center;gap:9px;font:600 12px/1 var(--ml-font)}
.d .m{color:var(--ml-ink);transition:color 300ms var(--ml-ease)}
.d .y{color:var(--ml-muted);transition:color 300ms var(--ml-ease)}
.d.yr .m{color:var(--ml-muted)}
.d.yr .y{color:var(--ml-ink)}
.d .sw{appearance:none;border:0;cursor:pointer;position:relative;width:38px;height:22px;border-radius:99px;background:var(--ml-bar);transition:background 300ms var(--ml-ease)}
.d .sw i{position:absolute;left:3px;top:3px;width:16px;height:16px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.28);transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d.yr .sw{background:var(--ml-accent)}
.d.yr .sw i{transform:translateX(16px)}
.d .sw:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .sv{font:600 10.5px/1 var(--ml-font);font-style:normal;color:var(--ml-accent-ink);background:var(--ml-accent-soft);padding:5px 8px;border-radius:99px;opacity:0;transform:scale(.6) translateX(-8px);transform-origin:left center;transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity 250ms ease}
.d.yr .sv{opacity:1;transform:none}
.d .row{display:grid;grid-template-columns:1fr 1fr;gap:10px;width:84%;margin:0 auto}
.d .pl{display:grid;gap:5px;padding:13px 12px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .pl b{font:600 12px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .pl p{font:500 10.5px/1.2 var(--ml-font);color:var(--ml-muted)}
.d .pr{display:flex;align-items:baseline;gap:1px;color:var(--ml-ink)}
.d .pr s{text-decoration:none;font:600 15px/1 var(--ml-font);align-self:flex-start;margin-top:5px}
.d .roll{display:block;height:34px;overflow:hidden;font:600 30px/34px var(--ml-font);letter-spacing:-.04em;font-variant-numeric:tabular-nums}
.d .st{display:block;transition:transform 640ms var(--ml-bounce)}
.d .st i{display:block;height:34px;font-style:normal}
.d.yr .st{transform:translateY(-50%)}
.d .pr u{text-decoration:none;font:500 11px/1 var(--ml-font);color:var(--ml-muted);margin-left:3px}
`,
  run: (root) => {
    const sw = root.querySelector('.sw');
    let hold = 0;
    let yr = false;
    const set = (v) => {
      yr = v;
      root.classList.toggle('yr', v);
      sw.setAttribute('aria-checked', String(v));
    };
    sw.addEventListener('click', () => {
      hold = Date.now() + 2500;
      set(!yr);
    });
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) set(!yr);
      setTimeout(tick, 2300);
    };
    setTimeout(tick, 1000);
  },
  prompt: `Build a monthly/yearly billing toggle for a pricing section. Use a real button with role="switch" and aria-checked: a 38x22px pill track with a 16px white knob that moves with transform: translateX(16px) using a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%) over 600ms, and the track color crossfading to your accent. Each price lives in a fixed-height mask (overflow: hidden, line-height equal to height) holding a vertical strip of the monthly and yearly values; switch by transform: translateY(-50%) on the strip, so the old number rolls out and the new one rolls in. Next to the toggle put a "Save 20%" pill that fades and scales in only in yearly mode. Dim the inactive label. Animate transform and opacity only.` + END,
});

ML.add({
  id: 'pricing-featured',
  cat: 'pricing',
  title: 'Featured plan',
  sub: 'Middle plan lifts, badge pops in',
  html: `<div class="grid">
<div class="pl"><b>Starter</b><div class="pr">$12<u>/mo</u></div><ul><li>3 projects</li><li>Email support</li></ul></div>
<div class="pl pro"><em class="bd">Most popular</em><b>Pro</b><div class="pr">$29<u>/mo</u></div><ul><li>20 projects</li><li>Analytics</li><li>Custom domain</li></ul></div>
<div class="pl"><b>Team</b><div class="pr">$59<u>/mo</u></div><ul><li>Unlimited</li><li>SSO and roles</li></ul></div>
</div>`,
  css: C + `
.d .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;width:92%;align-items:center}
.d .pl{position:relative;display:grid;gap:7px;padding:13px 10px 14px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow);border:1.5px solid transparent}
.d .pl b{font:600 11.5px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .pr{font:600 21px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .pr u{text-decoration:none;font:500 10px/1 var(--ml-font);letter-spacing:0;color:var(--ml-muted);margin-left:1px}
.d ul{list-style:none;display:grid;gap:5px}
.d li{font:500 10px/1.15 var(--ml-font);color:var(--ml-muted);padding-left:12px;position:relative}
.d li::before{content:"";position:absolute;left:0;top:3px;width:6px;height:4px;border-left:1.6px solid var(--ml-accent);border-bottom:1.6px solid var(--ml-accent);transform:rotate(-45deg)}
.d .pro{background:linear-gradient(var(--ml-bg),var(--ml-bg)) padding-box,var(--ml-grad) border-box;padding-top:16px;padding-bottom:18px;animation:lift 4.8s infinite both}
.d .pro .pr{color:var(--ml-accent-ink)}
.d .bd{position:absolute;left:50%;top:-9px;margin-left:-36px;width:72px;text-align:center;font:600 9px/1 var(--ml-font);font-style:normal;color:#fff;background:var(--ml-grad);padding:5px 0;border-radius:99px;animation:bd 4.8s infinite both}
@keyframes lift{0%,6%{transform:translateY(0) scale(1);box-shadow:var(--ml-shadow);animation-timing-function:var(--ml-bounce)}26%,82%{transform:translateY(-7px) scale(1.06);box-shadow:var(--ml-shadow-lg);animation-timing-function:var(--ml-ease)}96%,100%{transform:translateY(0) scale(1);box-shadow:var(--ml-shadow)}}
@keyframes bd{0%,14%{transform:scale(.3);opacity:0;animation-timing-function:var(--ml-bounce)}32%,82%{transform:scale(1);opacity:1;animation-timing-function:ease-in}92%,100%{transform:scale(.3);opacity:0}}
`,
  prompt: `Build a three-column pricing grid where the middle plan is the featured one. Style the featured card with a gradient border using two backgrounds on a card with a transparent 1.5px border: background: linear-gradient(white, white) padding-box, linear-gradient(135deg, your accent, a lighter tint) border-box. Lift it with transform: translateY(-7px) scale(1.06) plus a deeper layered shadow, using a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%) over 600ms. Add a "Most popular" pill centered on the top edge (position: absolute; top: -9px) that pops from scale(.3) to 1 a beat after the lift. On scroll-in run the lift once via IntersectionObserver. Give the featured card an extra 3-4px of vertical padding so it reads taller. Each card lists 2-3 features with check marks. Animate transform, opacity and box-shadow only.` + END,
});

ML.add({
  id: 'pricing-table',
  cat: 'pricing',
  title: 'Comparison table',
  sub: 'A highlight glides across plan columns',
  html: `<div class="tb"><div class="hl"></div>
<div class="r h"><span></span><b>Starter</b><b>Pro</b><b>Team</b></div>
<div class="r" style="--r:0"><span>Seats</span><em>1</em><em>5</em><em>25</em></div>
<div class="r" style="--r:1"><span>Analytics</span><i class="no"></i><i>${CK}</i><i>${CK}</i></div>
<div class="r" style="--r:2"><span>Domain</span><i class="no"></i><i>${CK}</i><i>${CK}</i></div>
<div class="r" style="--r:3"><span>API access</span><i class="no"></i><i class="no"></i><i>${CK}</i></div>
<div class="r" style="--r:4"><span>SSO</span><i class="no"></i><i class="no"></i><i>${CK}</i></div>
</div>`,
  css: C + `
.d .tb{position:relative;width:92%;padding:6px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .r{position:relative;z-index:1;display:grid;grid-template-columns:1.25fr 1fr 1fr 1fr;align-items:center;height:27px;text-align:center;border-top:1px solid var(--ml-bar-2)}
.d .r.h{border-top:0;height:30px}
.d .r span{text-align:left;padding-left:6px;font:500 11px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .r b{font:600 11px/1 var(--ml-font);color:var(--ml-ink)}
.d .r em{font:600 11px/1 var(--ml-font);font-style:normal;color:var(--ml-ink-2)}
.d .r i{display:grid;place-items:center;font-style:normal;color:var(--ml-accent)}
.d .r i svg{width:13px;height:13px;transform-origin:center;animation:ck 6.4s infinite both;animation-delay:calc(var(--r) * 110ms)}
.d .r i.no::after{content:"";width:8px;height:1.5px;border-radius:2px;background:var(--ml-bar)}
.d .hl{position:absolute;z-index:0;top:4px;bottom:4px;left:calc(6px + (100% - 12px) * 1.25 / 4.25);width:calc((100% - 12px) / 4.25);border-radius:10px;background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line);animation:gl 6.4s infinite both}
@keyframes gl{0%,26%{transform:translateX(0);animation-timing-function:var(--ml-ease)}34%,60%{transform:translateX(100%);animation-timing-function:var(--ml-ease)}68%,94%{transform:translateX(200%);animation-timing-function:var(--ml-ease)}100%{transform:translateX(0)}}
@keyframes ck{0%,3%{transform:scale(0);opacity:0;animation-timing-function:var(--ml-bounce)}14%,90%{transform:scale(1);opacity:1;animation-timing-function:ease-in}98%,100%{transform:scale(0);opacity:0}}
`,
  prompt: `Build a plan comparison table as a CSS grid: a feature column (1.25fr) and three plan columns (1fr each), one row per feature, 1px hairlines between rows. Behind the rows place one absolutely positioned highlight element whose width equals exactly one plan column (calc((100% - padding) / 4.25)), with a soft accent-tinted fill, a 1px accent-line inset ring and 10px radius. Move it between columns with transform: translateX(0 / 100% / 200%) and a critically damped ease such as cubic-bezier(.32,.72,0,1) over 600ms, pausing on each plan; on desktop also move it to the column under the pointer on hover. Rows check in: each check icon animates from scale(0) to scale(1) with a short bounce, staggered 110ms per row. Use real table semantics (table, th scope, td) or role attributes, and give included/excluded cells visually hidden text "Included" and "Not included". Animate transform and opacity only.` + END,
});

ML.add({
  id: 'pricing-seats',
  cat: 'pricing',
  title: 'Seat slider',
  sub: 'Drag seats, the total rolls to match',
  html: `<div class="card"><div class="top"><span class="lb">Team seats</span><b class="n">12</b></div><input type="range" min="1" max="30" value="12" aria-label="Seats"><div class="tot"><div class="k"><span>Total</span><small>$8 per seat</small></div><div class="p"><s>$</s><b class="amt">96</b><u>/mo</u></div></div></div>`,
  css: C + RANGE + `
.d .card{width:86%;display:grid;gap:12px;padding:16px 16px 14px;background:var(--ml-bg);border-radius:16px;box-shadow:var(--ml-shadow)}
.d .top{display:flex;justify-content:space-between;align-items:baseline}
.d .lb{font:500 10.5px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}
.d .n{font:600 20px/1 var(--ml-font);letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.d .tot{display:flex;justify-content:space-between;align-items:flex-end;padding-top:12px;border-top:1px solid var(--ml-line)}
.d .k{display:grid;gap:5px}
.d .k span{font:600 12px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .k small{font:500 10.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .p{display:flex;align-items:baseline;gap:1px;color:var(--ml-ink)}
.d .p s{text-decoration:none;font:600 18px/1 var(--ml-font);align-self:flex-start;margin-top:5px}
.d .amt{display:inline-block;font:600 42px/1 var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums;color:var(--ml-accent-ink)}
.d .p u{text-decoration:none;font:500 11px/1 var(--ml-font);color:var(--ml-muted);margin-left:3px}
`,
  run: (root) => {
    const inp = root.querySelector('input');
    const n = root.querySelector('.n');
    const amt = root.querySelector('.amt');
    let cur = 12;
    let tgt = 12;
    let shown = 96;
    let hold = 0;
    const paint = () => {
      inp.style.setProperty('--p', ((cur - 1) / 29) * 100 + '%');
      n.textContent = Math.round(cur);
    };
    inp.addEventListener('input', () => {
      hold = Date.now() + 2500;
      cur = tgt = Number(inp.value);
      paint();
    });
    const seq = [4, 22, 9, 28, 15];
    let k = 0;
    const next = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) {
        tgt = seq[k++ % seq.length];
      }
      setTimeout(next, 1900);
    };
    setTimeout(next, 700);
    const frame = () => {
      if (!root.isConnected) return;
      requestAnimationFrame(frame);
      if (root.dataset.paused) return;
      if (Date.now() > hold) {
        cur += (tgt - cur) * 0.09;
        if (Math.abs(tgt - cur) < 0.02) cur = tgt;
        inp.value = String(Math.round(cur));
        paint();
      }
      const goal = Math.round(cur) * 8;
      shown += (goal - shown) * 0.16;
      if (Math.abs(goal - shown) < 0.5) shown = goal;
      amt.textContent = Math.round(shown);
    };
    requestAnimationFrame(frame);
  },
  prompt: `Build a seat-count pricing slider. Use a real <input type="range" min="1" max="30"> styled with a 6px pill track whose filled part is a linear-gradient driven by a --p custom property (set to the slider percentage on every input event) and an 18px white thumb with a layered shadow that scales to 1.18 while pressed. Above it show the seat count; below it show the total: seats x unit price, set in a large semibold tabular-nums figure so the width does not jitter. Make the total roll to its new value instead of jumping: keep a displayed value and ease it toward the target in requestAnimationFrame (displayed += (target - displayed) * 0.16) and write Math.round(displayed) each frame, stopping when within 0.5. Show the per-seat price in small muted text. Add an aria-live="polite" region that announces only the final total, debounced, not every frame. Keyboard arrows must work natively.` + END,
});

ML.add({
  id: 'pricing-hover-focus',
  cat: 'pricing',
  title: 'Hover focus',
  sub: 'Hovered plan lifts, the rest soften',
  html: `<div class="rows">
<div class="rw"><div class="nm"><b>Starter</b><span>3 projects</span></div><div class="pr">$12<u>/mo</u></div></div>
<div class="rw"><div class="nm"><b>Pro</b><span>20 projects, analytics</span></div><div class="pr">$29<u>/mo</u></div></div>
<div class="rw"><div class="nm"><b>Team</b><span>Unlimited, SSO</span></div><div class="pr">$59<u>/mo</u></div></div>
</div>`,
  css: C + `
.d .rows{display:grid;gap:8px;width:84%}
.d .rw{display:flex;justify-content:space-between;align-items:center;padding:10px 15px;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow);cursor:pointer;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity var(--ml-spring-dur) var(--ml-spring),box-shadow var(--ml-spring-dur) var(--ml-spring)}
.d .nm{display:grid;gap:5px}
.d .nm b{font:600 13px/1 var(--ml-font);color:var(--ml-ink)}
.d .nm span{font:500 10.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .pr{font:600 22px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .pr u{text-decoration:none;font:500 10.5px/1 var(--ml-font);letter-spacing:0;color:var(--ml-muted);margin-left:2px}
.d .rw:hover,.d .rw.on{transform:translateY(-3px) scale(1.04);box-shadow:var(--ml-shadow-lg),0 0 0 1.5px var(--ml-accent-line)}
.d .rw:hover .pr,.d .rw.on .pr{color:var(--ml-accent-ink)}
.d .rows:has(.rw:hover) .rw:not(:hover),.d .rows.is-auto .rw:not(.on){opacity:.5;transform:scale(.96)}
`,
  run: (root) => {
    const rows = root.querySelector('.rows');
    const items = [...root.querySelectorAll('.rw')];
    let hover = false;
    root.addEventListener('pointerenter', () => {
      hover = true;
      rows.classList.remove('is-auto');
      items.forEach((i) => i.classList.remove('on'));
    });
    root.addEventListener('pointerleave', () => (hover = false));
    let k = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && !hover) {
        rows.classList.add('is-auto');
        items.forEach((el, i) => el.classList.toggle('on', i === k % 3));
        k++;
      }
      setTimeout(tick, 1500);
    };
    setTimeout(tick, 600);
  },
  prompt: `Build a pricing list where hovering one plan focuses it. Render plans as full-width rows (name and short feature line on the left, price on the right) inside one container. On :hover or :focus-within of a row, lift it with transform: translateY(-3px) scale(1.04), a deeper layered shadow plus a 1.5px accent-line ring, and tint its price with your accent. At the same time soften every other row using the container: .rows:has(.rw:hover) .rw:not(:hover) { opacity: .5; transform: scale(.96) }. Transition transform, opacity and box-shadow with a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.976 61.1%, 1 100%) over 590ms so moving between rows feels continuous. Make each row focusable (tabindex or a real link) so keyboard focus triggers the same state. Restrict the effect to @media (hover: hover) so touch devices keep every plan at full strength.` + END,
});

ML.add({
  id: 'pricing-badge-pop',
  cat: 'pricing',
  title: 'Savings badge pop',
  sub: 'Picking a plan pops a savings badge',
  html: `<div class="seg" role="tablist"><i class="pill"></i><button type="button" class="on">Starter</button><button type="button">Pro</button><button type="button">Team</button></div>
<div class="card"><em class="bd">Save $29/yr</em><span class="lb">Selected plan</span><b class="nm">Starter</b><div class="pr"><s>$</s><span class="v">12</span><u>/mo</u></div><span class="ft">Billed yearly</span></div>`,
  css: C + `
.d{align-content:center;justify-items:center;gap:16px}
.d .seg{position:relative;display:grid;grid-template-columns:repeat(3,1fr);width:78%;padding:3px;border-radius:99px;background:var(--ml-bar-2);box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .pill{position:absolute;left:3px;top:3px;bottom:3px;width:calc((100% - 6px) / 3);border-radius:99px;background:var(--ml-bg);box-shadow:0 1px 3px rgba(35,15,10,.16);transform:translateX(calc(var(--i,0) * 100%));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .seg button{position:relative;appearance:none;border:0;background:none;cursor:pointer;padding:8px 0;font:600 11.5px/1 var(--ml-font);color:var(--ml-muted);transition:color 250ms ease}
.d .seg button.on{color:var(--ml-ink)}
.d .seg button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:1px;border-radius:99px}
.d .card{position:relative;display:grid;justify-items:center;gap:7px;width:60%;padding:18px 12px 15px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}
.d .nm{font:600 14px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .pr{display:flex;align-items:baseline;gap:1px;color:var(--ml-ink)}
.d .pr s{text-decoration:none;font:600 17px/1 var(--ml-font);align-self:flex-start;margin-top:4px}
.d .v{font:600 42px/1 var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums}
.d .pr u{text-decoration:none;font:500 11px/1 var(--ml-font);color:var(--ml-muted);margin-left:3px}
.d .ft{font:500 10.5px/1 var(--ml-font);color:var(--ml-muted)}
.d .bd{position:absolute;right:-12px;top:-11px;font:600 10.5px/1 var(--ml-font);font-style:normal;color:#fff;background:var(--ml-grad);padding:6px 10px;border-radius:99px;box-shadow:0 4px 12px rgba(255,68,51,.3);transform:rotate(-4deg)}
.d .bd.pop{animation:pop 760ms var(--ml-bounce) both}
@keyframes pop{0%{transform:scale(.1) rotate(-22deg);opacity:0}100%{transform:scale(1) rotate(-4deg);opacity:1}}
`,
  run: (root) => {
    const plans = [
      ['Starter', '12', 'Save $29/yr'],
      ['Pro', '29', 'Save $70/yr'],
      ['Team', '59', 'Save $142/yr'],
    ];
    const btns = [...root.querySelectorAll('.seg button')];
    const pill = root.querySelector('.pill');
    const nm = root.querySelector('.nm');
    const v = root.querySelector('.v');
    const bd = root.querySelector('.bd');
    let hold = 0;
    let idx = 0;
    const pick = (i) => {
      idx = i;
      pill.style.setProperty('--i', i);
      btns.forEach((b, j) => b.classList.toggle('on', j === i));
      nm.textContent = plans[i][0];
      v.textContent = plans[i][1];
      bd.textContent = plans[i][2];
      bd.classList.remove('pop');
      void bd.offsetWidth;
      bd.classList.add('pop');
    };
    btns.forEach((b, i) => b.addEventListener('click', () => {
      hold = Date.now() + 2500;
      pick(i);
    }));
    pick(0);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) pick((idx + 1) % 3);
      setTimeout(tick, 2200);
    };
    setTimeout(tick, 1400);
  },
  prompt: `Build a plan switcher that pops a savings badge. A three-option segmented control (Starter / Pro / Team) has one sliding white pill behind the labels, moved with transform: translateX(calc(var(--i) * 100%)) on a critically damped spring over 590ms. Below it a plan card shows the selected plan's name and price. A gradient "Save $X/yr" pill is pinned to the card's top-right corner, rotated -4deg. Every time the selection changes, restart its animation: remove the class, force a reflow (void el.offsetWidth), add it back. The keyframes run from transform: scale(.1) rotate(-22deg); opacity: 0 to scale(1) rotate(-4deg); opacity: 1 with a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%) over 760ms. Use role="tablist" or radio semantics with arrow-key navigation, and announce the savings through an aria-live="polite" region.` + END,
});

ML.add({
  id: 'pricing-tiers',
  cat: 'pricing',
  title: 'Usage tier stepper',
  sub: 'Step between tiers, the bracket updates',
  html: `<div class="card"><span class="lb">Emails per month</span>
<div class="rng"><div class="trk"><i class="fill"></i></div><div class="dots"><button type="button" aria-label="1,000 emails"></button><button type="button" aria-label="5,000 emails"></button><button type="button" aria-label="25,000 emails"></button><button type="button" aria-label="100,000 emails"></button></div><div class="mv"><span class="knob"></span></div></div>
<div class="lbls"><span>1k</span><span>5k</span><span>25k</span><span>100k</span></div>
<div class="out"><div class="mask"><div class="st"><i>$9</i><i>$19</i><i>$49</i><i>$99</i></div></div><div class="br"><div class="st"><i>Up to 1,000 emails</i><i>Up to 5,000 emails</i><i>Up to 25,000 emails</i><i>Up to 100,000 emails</i></div></div></div></div>`,
  css: C + `
.d .card{width:88%;display:grid;gap:11px;padding:16px 18px 16px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .lb{font:500 10.5px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}
.d .rng{position:relative;height:18px;margin:4px 9px 0}
.d .trk{position:absolute;left:0;right:0;top:6px;height:6px;border-radius:99px;background:var(--ml-bar)}
.d .fill{position:absolute;inset:0;border-radius:99px;background:var(--ml-grad);transform-origin:left center;transform:scaleX(calc(var(--s,0) / 3));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .dots{position:absolute;left:0;right:0;top:0;height:18px}
.d .dots button{position:absolute;top:3px;width:12px;height:12px;margin-left:-6px;border-radius:50%;appearance:none;border:2px solid var(--ml-bar);background:var(--ml-bg);cursor:pointer;transition:border-color 250ms ease}
.d .dots button:nth-child(1){left:0}.d .dots button:nth-child(2){left:33.333%}.d .dots button:nth-child(3){left:66.666%}.d .dots button:nth-child(4){left:100%}
.d .dots button.on{border-color:var(--ml-accent)}
.d .dots button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .mv{position:absolute;left:0;top:0;width:100%;height:18px;pointer-events:none;transform:translateX(calc(var(--s,0) * 33.333%));transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .knob{position:absolute;left:-9px;top:0;width:18px;height:18px;border-radius:50%;background:var(--ml-bg);box-shadow:0 0 0 1px var(--ml-line),0 2px 7px rgba(35,15,10,.24)}
.d .lbls{display:flex;justify-content:space-between;margin:-2px 0 0;font:500 10px/1 var(--ml-mono);color:var(--ml-muted)}
.d .out{display:grid;gap:5px;padding-top:11px;border-top:1px solid var(--ml-line)}
.d .mask{height:36px;overflow:hidden}
.d .mask .st i{display:block;height:36px;font:600 34px/36px var(--ml-font);letter-spacing:-.05em;font-style:normal;color:var(--ml-accent-ink)}
.d .br{height:14px;overflow:hidden}
.d .br .st i{display:block;height:14px;font:500 11px/14px var(--ml-font);font-style:normal;color:var(--ml-muted)}
.d .st{display:block;transform:translateY(calc(var(--s,0) * -25%));transition:transform 600ms var(--ml-bounce)}
`,
  run: (root) => {
    const dots = [...root.querySelectorAll('.dots button')];
    let hold = 0;
    let s = 0;
    const set = (i) => {
      s = i;
      root.style.setProperty('--s', i);
      dots.forEach((d, j) => d.classList.toggle('on', j <= i));
    };
    dots.forEach((d, i) => d.addEventListener('click', () => {
      hold = Date.now() + 2500;
      set(i);
    }));
    set(0);
    const order = [1, 2, 3, 1, 0, 2];
    let k = 0;
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) set(order[k++ % order.length]);
      setTimeout(tick, 1700);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a usage-tier stepper for a pricing page (for example emails per month). Draw a 6px pill track with four evenly spaced dot buttons (1k, 5k, 25k, 100k) and one white knob. The track fill is a gradient bar scaled with transform: scaleX(calc(var(--s) / 3)), transform-origin: left, and the knob sits in a wrapper as wide as the travel distance moved with transform: translateX(calc(var(--s) * 33.333%)), so the whole thing animates on the compositor with a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%). Below the track, show the tier price and its bracket text ("Up to 5,000 emails") each inside a fixed-height mask holding a vertical strip of all values, moved with translateY(calc(var(--s) * -25%)). Set --s from a click on a dot or from arrow keys (use role="slider" or radio buttons), and announce the price through aria-live="polite".` + END,
});

ML.add({
  id: 'pricing-checklist',
  cat: 'pricing',
  title: 'Feature checklist',
  sub: 'Plan features check in one by one',
  html: `<div class="card"><div class="hd"><div><span class="lb">Pro plan</span><div class="pr">$29<u>/mo</u></div></div><em class="tag">Popular</em></div>
<ul>
<li style="--i:0"><svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle class="o" cx="12" cy="12" r="11"/><path class="c" pathLength="1" d="M7 12.5l3.6 3.6L17 9"/></svg><span>20 active projects</span></li>
<li style="--i:1"><svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle class="o" cx="12" cy="12" r="11"/><path class="c" pathLength="1" d="M7 12.5l3.6 3.6L17 9"/></svg><span>Advanced analytics</span></li>
<li style="--i:2"><svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle class="o" cx="12" cy="12" r="11"/><path class="c" pathLength="1" d="M7 12.5l3.6 3.6L17 9"/></svg><span>Custom domain</span></li>
<li style="--i:3"><svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle class="o" cx="12" cy="12" r="11"/><path class="c" pathLength="1" d="M7 12.5l3.6 3.6L17 9"/></svg><span>Priority support</span></li>
<li style="--i:4"><svg viewBox="0 0 24 24" fill="none" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle class="o" cx="12" cy="12" r="11"/><path class="c" pathLength="1" d="M7 12.5l3.6 3.6L17 9"/></svg><span>Export to CSV</span></li>
</ul></div>`,
  css: C + `
.d .card{width:78%;display:grid;gap:11px;padding:15px 16px 14px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .hd{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:11px;border-bottom:1px solid var(--ml-line)}
.d .lb{display:block;font:500 10px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted);margin-bottom:7px}
.d .pr{font:600 28px/1 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink)}
.d .pr u{text-decoration:none;font:500 11px/1 var(--ml-font);letter-spacing:0;color:var(--ml-muted);margin-left:2px}
.d .tag{font:600 10px/1 var(--ml-font);font-style:normal;color:var(--ml-accent-ink);background:var(--ml-accent-soft);padding:5px 8px;border-radius:99px}
.d ul{list-style:none;display:grid;gap:8px}
.d li{display:flex;align-items:center;gap:9px;font:500 12px/1 var(--ml-font);color:var(--ml-ink-2);animation:row 6s infinite both;animation-delay:calc(var(--i) * 230ms)}
.d li svg{flex:none;width:16px;height:16px}
.d li .o{stroke:var(--ml-bar);fill:none;stroke-width:2.4}
.d li .c{stroke:var(--ml-accent);stroke-dasharray:1;stroke-dashoffset:1;animation:dr 6s infinite both;animation-delay:calc(var(--i) * 230ms)}
.d li:nth-child(n) svg{animation:fillc 6s infinite both;animation-delay:calc(var(--i) * 230ms);border-radius:50%}
@keyframes row{0%,4%{opacity:.35;transform:translateX(-6px);animation-timing-function:var(--ml-ease)}12%,88%{opacity:1;transform:none}96%,100%{opacity:.35;transform:translateX(-6px)}}
@keyframes dr{0%,6%{stroke-dashoffset:1;animation-timing-function:var(--ml-ease)}16%,88%{stroke-dashoffset:0}96%,100%{stroke-dashoffset:1}}
@keyframes fillc{0%,6%{background:transparent}16%,88%{background:var(--ml-accent-soft)}96%,100%{background:transparent}}
`,
  prompt: `Build a plan card with a feature checklist that checks in one item at a time. Each row is an inline SVG (24 viewBox) with a ring circle and a check path that has pathLength="1", stroke-dasharray: 1 and stroke-dashoffset: 1; reveal it by animating stroke-dashoffset to 0 over about 400ms with a cubic-bezier(.32,.72,0,1) ease, while the ring area gets a soft accent-tinted fill and the row text slides from translateX(-6px) and opacity .35 to full. Stagger rows by 230ms with animation-delay (or a transition-delay set from the item index). Trigger the sequence when the card scrolls into view with an IntersectionObserver, run it once, and leave all rows checked. The card header carries the plan name, price and a small "Popular" pill. Mark the list as a real ul, keep the text readable before the animation, and under prefers-reduced-motion show every row already checked.` + END,
});

ML.add({
  id: 'pricing-currency',
  cat: 'pricing',
  title: 'Currency switch',
  sub: 'Chips swap the price with a vertical roll',
  html: `<div class="chips" role="tablist"><button type="button" class="on">USD</button><button type="button">EUR</button><button type="button">PHP</button></div>
<div class="card"><span class="lb">Pro plan</span><div class="mask"><div class="st"><i>$29</i><i>&euro;27</i><i>&#8369;1,650</i></div></div><div class="rt"><div class="st"><i>Base currency</i><i>1 USD = 0.93 EUR</i><i>1 USD = 57 PHP</i></div></div></div>`,
  css: C + `
.d{align-content:center;justify-items:center;gap:15px}
.d .chips{display:flex;gap:6px}
.d .chips button{appearance:none;cursor:pointer;border:0;padding:8px 14px;border-radius:99px;font:600 11.5px/1 var(--ml-font);letter-spacing:.02em;color:var(--ml-muted);background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);transition:transform var(--ml-spring-dur) var(--ml-spring),background 250ms ease,color 250ms ease,box-shadow 250ms ease}
.d .chips button.on{color:#fff;background:var(--ml-accent);box-shadow:0 4px 12px rgba(255,68,51,.28)}
.d .chips button:active{transform:scale(.94);transition-duration:90ms}
.d .chips button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
.d .card{display:grid;justify-items:center;gap:8px;width:64%;padding:16px 10px 15px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .lb{font:500 10px/1 var(--ml-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ml-muted)}
.d .mask{height:50px;overflow:hidden;width:100%}
.d .mask i{display:block;height:50px;text-align:center;font:600 42px/50px var(--ml-font);letter-spacing:-.05em;font-style:normal;color:var(--ml-ink);font-variant-numeric:tabular-nums}
.d .rt{height:14px;overflow:hidden;width:100%}
.d .rt i{display:block;height:14px;text-align:center;font:500 11px/14px var(--ml-mono);font-style:normal;color:var(--ml-muted)}
.d .st{display:block;transform:translateY(calc(var(--c,0) * -33.3333%));transition:transform 640ms var(--ml-bounce)}
`,
  run: (root) => {
    const btns = [...root.querySelectorAll('.chips button')];
    let hold = 0;
    let c = 0;
    const set = (i) => {
      c = i;
      root.style.setProperty('--c', i);
      btns.forEach((b, j) => b.classList.toggle('on', j === i));
    };
    btns.forEach((b, i) => b.addEventListener('click', () => {
      hold = Date.now() + 2500;
      set(i);
    }));
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) set((c + 1) % 3);
      setTimeout(tick, 2000);
    };
    setTimeout(tick, 900);
  },
  prompt: `Build a currency switcher for a pricing card. Show three pill chips (USD / EUR / PHP); the active chip is filled with your accent and has a soft colored shadow, the others are white with a 1px inset hairline. The price sits in a fixed-height mask (overflow: hidden, line-height equal to height) that holds a vertical strip of the converted prices ($29, EUR 27, PHP 1,650). Set a --c custom property (0, 1, 2) on the card when a chip is chosen and move the strip with transform: translateY(calc(var(--c) * -33.3333%)) over 640ms with a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%). Roll a second small strip with the exchange rate line the same way. Format values with Intl.NumberFormat per currency, and give chips role="tab" or radio semantics with an aria-live="polite" price.` + END,
});

ML.add({
  id: 'pricing-calculator',
  cat: 'pricing',
  title: 'Usage calculator',
  sub: 'Two inputs move, cost bar and total follow',
  html: `<div class="card"><div class="rw"><div class="hd"><span>API calls</span><b class="a">120k</b></div><input class="ia" type="range" min="10" max="400" value="120" aria-label="API calls in thousands"></div>
<div class="rw"><div class="hd"><span>Storage</span><b class="b">60 GB</b></div><input class="ib" type="range" min="10" max="200" value="60" aria-label="Storage in gigabytes"></div>
<div class="est"><div class="bar"><i class="t"></i><i class="u"></i></div><div class="fg"><span>Estimated cost</span><div class="p"><s>$</s><b class="amt">63</b><u>/mo</u></div></div></div></div>`,
  css: C + RANGE + `
.d .card{width:88%;display:grid;gap:10px;padding:14px 16px 14px;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .rw{display:grid;gap:3px}
.d .hd{display:flex;justify-content:space-between;align-items:baseline}
.d .hd span{font:500 11px/1 var(--ml-font);color:var(--ml-ink-2)}
.d .hd b{font:600 12px/1 var(--ml-font);font-variant-numeric:tabular-nums;color:var(--ml-ink)}
.d .est{display:grid;gap:9px;padding-top:11px;border-top:1px solid var(--ml-line)}
.d .bar{position:relative;height:10px;border-radius:99px;background:var(--ml-bar-2);overflow:hidden}
.d .bar i{position:absolute;inset:0;border-radius:99px;transform-origin:left center}
.d .bar .t{background:var(--ml-accent-line)}
.d .bar .u{background:var(--ml-grad)}
.d .fg{display:flex;justify-content:space-between;align-items:flex-end}
.d .fg span{font:500 10.5px/1 var(--ml-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ml-muted);padding-bottom:5px}
.d .p{display:flex;align-items:baseline;gap:1px}
.d .p s{text-decoration:none;font:600 15px/1 var(--ml-font);align-self:flex-start;margin-top:3px}
.d .amt{font:600 32px/1 var(--ml-font);letter-spacing:-.05em;font-variant-numeric:tabular-nums;color:var(--ml-accent-ink)}
.d .p u{text-decoration:none;font:500 11px/1 var(--ml-font);color:var(--ml-muted);margin-left:3px}
`,
  run: (root) => {
    const ia = root.querySelector('.ia');
    const ib = root.querySelector('.ib');
    const a = root.querySelector('.a');
    const b = root.querySelector('.b');
    const t = root.querySelector('.t');
    const u = root.querySelector('.u');
    const amt = root.querySelector('.amt');
    const cur = { x: 120, y: 60 };
    const tgt = { x: 120, y: 60 };
    let hold = 0;
    const paint = () => {
      const ca = cur.x * 0.4;
      const cb = cur.y * 0.25;
      ia.style.setProperty('--p', ((cur.x - 10) / 390) * 100 + '%');
      ib.style.setProperty('--p', ((cur.y - 10) / 190) * 100 + '%');
      a.textContent = Math.round(cur.x) + 'k';
      b.textContent = Math.round(cur.y) + ' GB';
      t.style.transform = 'scaleX(' + (ca + cb) / 210 + ')';
      u.style.transform = 'scaleX(' + ca / 210 + ')';
      amt.textContent = Math.round(ca + cb);
    };
    const onIn = () => {
      hold = Date.now() + 2500;
      cur.x = tgt.x = Number(ia.value);
      cur.y = tgt.y = Number(ib.value);
    };
    ia.addEventListener('input', onIn);
    ib.addEventListener('input', onIn);
    const seq = [[320, 30], [60, 150], [200, 90], [380, 180], [40, 20]];
    let k = 0;
    const next = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) {
        const s = seq[k++ % seq.length];
        tgt.x = s[0];
        tgt.y = s[1];
      }
      setTimeout(next, 2100);
    };
    setTimeout(next, 800);
    const frame = () => {
      if (!root.isConnected) return;
      requestAnimationFrame(frame);
      if (root.dataset.paused) return;
      if (Date.now() > hold) {
        cur.x += (tgt.x - cur.x) * 0.07;
        cur.y += (tgt.y - cur.y) * 0.07;
        ia.value = String(Math.round(cur.x));
        ib.value = String(Math.round(cur.y));
      }
      paint();
    };
    requestAnimationFrame(frame);
  },
  prompt: `Build a usage-based pricing calculator with two inputs (for example API calls and storage). Use two real range inputs styled with a 6px track filled via a --p custom property and 18px white thumbs. Compute the estimate as calls x rate + storage x rate. Below the inputs show a cost bar: a 10px pill track containing two absolutely positioned fills, a light one for the total and an accent gradient one for the calls portion, both transform-origin: left and driven by transform: scaleX(cost / maxCost) so nothing animates width. Show the total as a large tabular-nums figure. Smooth every change: keep displayed values and ease them toward the targets each frame in requestAnimationFrame (value += (target - value) * 0.07), then write them to the bar scales and the number. Use output elements or aria-live="polite" to announce the final estimate, and show the unit rates in small muted text so the math is transparent.` + END,
});
})();
