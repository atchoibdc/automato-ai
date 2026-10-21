// FAQ and accordion cards. Real components: every row is a working button, and an autoplay opens them in turn.
(() => {
const C = `.d{display:grid;place-items:center;background:var(--ml-surface)}`;
const CHEV = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`;
const ACC = `
.d .a{display:grid;grid-template-rows:0fr;transition:grid-template-rows 520ms var(--ml-ease)}
.d .it.open .a{grid-template-rows:1fr}
.d .in{overflow:hidden;min-height:0}
.d .q{appearance:none;border:0;background:none;cursor:pointer;width:100%;text-align:left}
.d .q:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px;border-radius:8px}
`;
const mk = (items, icon, lead) => items.map((it, i) => `<div class="it" style="--i:${i}"><button class="q" type="button" aria-expanded="false">${lead ? lead(i) : ''}<span class="t">${it[0]}</span>${icon}</button><div class="a"><div class="in"><p>${it[1]}</p></div></div></div>`).join('');
const END = ` Make each question a real <button> with aria-expanded and aria-controls pointing at its answer region (role="region" with aria-labelledby), support Enter and Space natively, keep a visible :focus-visible outline, and under prefers-reduced-motion drop the transitions so panels switch instantly. Plain HTML, CSS and JS, no libraries.`;
const GRID = ` Animate the panel with the grid trick instead of height: put the answer in a wrapper with display: grid; grid-template-rows: 0fr, give its only child overflow: hidden and min-height: 0, and on open switch the wrapper to grid-template-rows: 1fr with transition: grid-template-rows 520ms cubic-bezier(.32,.72,0,1).`;

const SET_A = [
  ['Can I cancel anytime?', 'Yes. Cancel from Billing in two clicks, no fees and no questions.'],
  ['Is there a free trial?', 'Every plan starts with 14 free days. No card needed to begin.'],
  ['Do you offer refunds?', 'Full refund within 30 days of purchase, paid back to your card.'],
  ['Can I switch plans?', 'Upgrade or downgrade whenever you like. We prorate the difference.'],
];
const SET_B = [
  ['How do I reset my password?', 'Use Forgot password on the sign in page. We email a secure link.'],
  ['Can I invite my team?', 'Add teammates from Settings. Pro includes up to five seats.'],
  ['Do you have an API?', 'Yes. REST endpoints and webhooks are included on Pro and Team.'],
  ['Where is my data stored?', 'In encrypted EU and US regions. You choose the region at sign up.'],
];
const SET_C = [
  ['What payment methods work?', 'Visa, Mastercard, Amex and bank transfer on yearly plans.'],
  ['Do you offer discounts?', 'Nonprofits and students get 40 percent off. Just ask support.'],
  ['How fast is support?', 'Most replies land within two hours, every day of the week.'],
  ['Can I export my work?', 'Export everything as CSV or JSON at any time from Settings.'],
];
const SET_D = [
  ['Is there a free plan?', 'Yes. Starter is free forever for one project.'],
  ['Does it work offline?', 'Edits are saved locally and sync once you reconnect.'],
  ['Can I use my own domain?', 'Connect a custom domain on any paid plan in a minute.'],
  ['How do I delete my account?', 'Settings, then Account, then Delete. It is permanent.'],
];

ML.add({
  id: 'faq-smooth',
  cat: 'faq',
  title: 'Smooth accordion',
  sub: 'Answers grow open, the others close',
  html: `<div class="list">${mk(SET_A, '', (i) => `<span class="n">0${i + 1}</span>`)}</div>`,
  css: C + ACC + `
.d .list{width:84%;background:var(--ml-bg);border-radius:16px;box-shadow:var(--ml-shadow);padding:4px 16px}
.d .it{border-top:1px solid var(--ml-line)}
.d .it:first-child{border-top:0}
.d .q{display:flex;align-items:center;gap:12px;padding:9px 0}
.d .n{font:500 10px/1 var(--ml-mono);color:var(--ml-muted);transition:color 300ms ease}
.d .t{font:600 13px/1.2 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink)}
.d .it.open .n{color:var(--ml-accent)}
.d .in p{padding:0 0 10px 28px;font:500 11px/1.4 var(--ml-font);color:var(--ml-muted);opacity:0;transform:translateY(-4px);transition:opacity 350ms ease,transform 520ms var(--ml-ease)}
.d .it.open .in p{opacity:1;transform:none;transition-delay:90ms}
`,
  run: (root) => {
    const its = [...root.querySelectorAll('.it')];
    let hold = 0;
    let cur = 0;
    const open = (i) => {
      cur = i;
      its.forEach((el, j) => {
        el.classList.toggle('open', j === i);
        el.querySelector('.q').setAttribute('aria-expanded', String(j === i));
      });
    };
    its.forEach((el, i) => el.querySelector('.q').addEventListener('click', () => {
      hold = Date.now() + 2500;
      open(el.classList.contains('open') ? -1 : i);
    }));
    open(0);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) open((cur + 1) % its.length);
      setTimeout(tick, 2200);
    };
    setTimeout(tick, 1200);
  },
  prompt: `Build a smooth FAQ accordion where opening one answer closes the others. Style it as a flat list inside one rounded white card: each row has a mono index number ("01"), the question in semibold 13px and a 1px hairline between rows; the number turns your accent color when its row is open.` + GRID + ` Fade and lift the answer text at the same time (opacity 0 to 1, translateY(-4px) to 0, delayed 90ms) so it feels like it settles into place. Opening a row removes .open from its siblings so exactly one is open, and clicking the open row closes it. Animate only grid-template-rows, opacity and transform.` + END,
});

ML.add({
  id: 'faq-plus-minus',
  cat: 'faq',
  title: 'Plus to minus',
  sub: 'The vertical bar rotates away',
  html: `<div class="list">${mk(SET_B.slice(0, 3),'<span class="pm"><i></i><b></b></span>')}</div>`,
  css: C + ACC + `
.d .list{width:86%;display:grid;gap:7px}
.d .it{background:var(--ml-bg);border-radius:13px;box-shadow:var(--ml-shadow);padding:0 14px}
.d .q{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 0}
.d .t{font:600 12.5px/1.2 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink)}
.d .pm{position:relative;flex:none;width:22px;height:22px;border-radius:50%;background:var(--ml-surface);transition:background 300ms ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .pm i,.d .pm b{position:absolute;left:50%;top:50%;width:10px;height:2px;margin:-1px 0 0 -5px;border-radius:2px;background:var(--ml-ink-2);transition:transform var(--ml-bounce-dur) var(--ml-bounce),opacity 220ms ease,background 300ms ease}
.d .pm b{transform:rotate(90deg)}
.d .it.open .pm{background:var(--ml-accent)}
.d .it.open .pm i,.d .it.open .pm b{background:#fff}
.d .it.open .pm b{transform:rotate(0deg) scaleX(.2);opacity:0}
.d .it:not(.open) .q:hover .pm{transform:scale(1.1)}
.d .in p{padding:0 0 13px;font:500 11.5px/1.45 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const its = [...root.querySelectorAll('.it')];
    let hold = 0;
    let cur = 0;
    const open = (i) => {
      cur = i;
      its.forEach((el, j) => {
        el.classList.toggle('open', j === i);
        el.querySelector('.q').setAttribute('aria-expanded', String(j === i));
      });
    };
    its.forEach((el, i) => el.querySelector('.q').addEventListener('click', () => {
      hold = Date.now() + 2500;
      open(el.classList.contains('open') ? -1 : i);
    }));
    open(1);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) open((cur + 1) % its.length);
      setTimeout(tick, 2100);
    };
    setTimeout(tick, 1100);
  },
  prompt: `Build an FAQ where the plus icon morphs into a minus. Each question sits on its own white rounded card with the icon at the right: a 22px circle holding two 10px x 2px bars, one horizontal and one rotated 90deg. When the item opens, rotate the vertical bar back to 0deg while scaling it to scaleX(.2) and fading it to opacity 0, so it rotates away and only the horizontal bar remains, and flip the circle to your accent with white bars. Use a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%) over 600ms for the bar.` + GRID + ` Hover scales the idle icon to 1.1. Mark the icon aria-hidden; the button's aria-expanded carries the state.` + END,
});

ML.add({
  id: 'faq-single-open',
  cat: 'faq',
  title: 'Single open',
  sub: 'One item at a time, soft blue fill',
  html: `<div class="list">${mk(SET_C, '', () => '<span class="rd"></span>')}</div>`,
  css: C + ACC + `
.d .list{width:86%;display:grid;gap:6px}
.d .it{border-radius:13px;background:var(--ml-bg);box-shadow:inset 0 0 0 1px var(--ml-line);padding:0 13px;transition:background 380ms var(--ml-ease),box-shadow 380ms var(--ml-ease)}
.d .it.open{background:var(--ml-accent-soft);box-shadow:inset 0 0 0 1px var(--ml-accent-line)}
.d .q{display:flex;align-items:center;gap:10px;padding:11px 0}
.d .rd{flex:none;width:14px;height:14px;border-radius:50%;box-shadow:inset 0 0 0 2px var(--ml-bar);transition:box-shadow 300ms ease,background 300ms ease}
.d .it.open .rd{box-shadow:inset 0 0 0 4.5px var(--ml-accent);background:#fff}
.d .t{font:600 12.5px/1.2 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink)}
.d .it.open .t{color:var(--ml-accent-ink)}
.d .in p{padding:0 0 12px 24px;font:500 11.5px/1.45 var(--ml-font);color:var(--ml-ink-2)}
`,
  run: (root) => {
    const its = [...root.querySelectorAll('.it')];
    let hold = 0;
    let cur = 0;
    const open = (i) => {
      cur = i;
      its.forEach((el, j) => {
        el.classList.toggle('open', j === i);
        el.querySelector('.q').setAttribute('aria-expanded', String(j === i));
      });
    };
    its.forEach((el, i) => el.querySelector('.q').addEventListener('click', () => {
      hold = Date.now() + 2500;
      open(i);
    }));
    open(2);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) open((cur + 1) % its.length);
      setTimeout(tick, 2000);
    };
    setTimeout(tick, 1000);
  },
  prompt: `Build a single-open FAQ: exactly one answer is visible at any time and opening another closes the current one. Give each row a leading radio-style dot (14px ring that fills with a 4.5px accent border when selected) so the single-select behavior reads at a glance. The open row gets a soft fill from your accent tint, a 1px accent-line inset ring (box-shadow: inset 0 0 0 1px, not a left border) and an accent-ink question color, all crossfading over 380ms with cubic-bezier(.32,.72,0,1). Idle rows are white with a 1px hairline.` + GRID + ` Clicking the open row keeps it open, which is the single-open convention; keep a data-open attribute on the list so the open index is easy to restore after navigation. Animate grid-template-rows, background and box-shadow only.` + END,
});

ML.add({
  id: 'faq-search',
  cat: 'faq',
  title: 'Search the FAQ',
  sub: 'Typing filters rows, matches highlight',
  html: `<div class="box"><div class="sr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg><input type="text" placeholder="Search questions" aria-label="Search questions"><em class="ct">5 results</em></div>
<ul class="ls"><li>Can I cancel anytime?</li><li>How do refunds work?</li><li>Is there a free plan?</li><li>Can I change my plan?</li><li>Is my data private?</li></ul></div>`,
  css: C + `
.d .box{width:86%;display:grid;grid-template-columns:minmax(0,1fr);gap:8px}
.d .sr{display:flex;align-items:center;gap:8px;padding:0 12px;height:36px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow),inset 0 0 0 1px var(--ml-line);transition:box-shadow 300ms ease}
.d .sr:focus-within{box-shadow:var(--ml-shadow),inset 0 0 0 1.5px var(--ml-accent)}
.d .sr svg{flex:none;width:15px;height:15px;color:var(--ml-muted)}
.d .sr input{flex:1;min-width:0;border:0;outline:0;background:none;font:500 12.5px/1 var(--ml-font);color:var(--ml-ink)}
.d .sr input::placeholder{color:var(--ml-muted)}
.d .ct{font:500 10px/1 var(--ml-mono);font-style:normal;color:var(--ml-muted);white-space:nowrap}
.d .ls{list-style:none;display:grid;border-radius:14px;background:var(--ml-bg);box-shadow:var(--ml-shadow);padding:0 14px}
.d .row{display:grid;grid-template-rows:1fr;transition:grid-template-rows 420ms var(--ml-ease),opacity 300ms ease}
.d .row.hide{grid-template-rows:0fr;opacity:0}
.d .row>div{overflow:hidden;min-height:0}
.d .row span{display:block;padding:10px 0;font:500 12.5px/1.2 var(--ml-font);color:var(--ml-ink-2);border-top:1px solid var(--ml-bar-2)}
.d .row:first-child span{border-top:0}
.d mark{background:var(--ml-accent-soft);color:var(--ml-accent-ink);border-radius:3px;box-shadow:0 0 0 2px var(--ml-accent-soft);font-weight:600}
`,
  run: (root) => {
    const inp = root.querySelector('input');
    const ul = root.querySelector('.ls');
    const ct = root.querySelector('.ct');
    const items = [...ul.children].map((li) => {
      const text = li.textContent;
      const row = document.createElement('li');
      row.className = 'row';
      row.innerHTML = '<div><span></span></div>';
      ul.replaceChild(row, li);
      return { row, span: row.querySelector('span'), text };
    });
    const filter = () => {
      const q = inp.value.trim().toLowerCase();
      let n = 0;
      items.forEach((it) => {
        const i = q ? it.text.toLowerCase().indexOf(q) : -1;
        const hit = !q || i > -1;
        if (hit) n++;
        it.row.classList.toggle('hide', !hit);
        it.span.innerHTML = i > -1
          ? it.text.slice(0, i) + '<mark>' + it.text.slice(i, i + q.length) + '</mark>' + it.text.slice(i + q.length)
          : it.text;
      });
      ct.textContent = n + (n === 1 ? ' result' : ' results');
    };
    filter();
    let hold = 0;
    inp.addEventListener('input', () => {
      hold = Date.now() + 3000;
      filter();
    });
    const words = ['plan', 'cancel', 'data', ''];
    let w = 0;
    const typeTo = (target, done) => {
      if (!root.isConnected) return;
      if (root.dataset.paused || Date.now() < hold) return setTimeout(() => typeTo(target, done), 300);
      const cur = inp.value;
      if (cur === target) return done();
      inp.value = target.startsWith(cur) || cur === '' ? target.slice(0, cur.length + 1) : cur.slice(0, -1);
      filter();
      setTimeout(() => typeTo(target, done), target === '' ? 40 : 140);
    };
    const next = () => {
      if (!root.isConnected) return;
      const target = words[w++ % words.length];
      typeTo(target, () => setTimeout(next, 1700));
    };
    setTimeout(next, 700);
  },
  prompt: `Build a live-filter FAQ search. A 36px rounded search field (search icon, text input, small mono result count at the right) sits above a list of questions in one white card. On every input event, lowercase the query, test each question with indexOf, and for matches wrap the matched slice in a <mark> with an accent-soft background, accent-ink text and a 2px soft box-shadow halo; non-matches collapse out. Collapse rows without animating height: each row is display: grid with grid-template-rows: 1fr that transitions to 0fr (with opacity 0) over 420ms cubic-bezier(.32,.72,0,1), and its child has overflow: hidden and min-height: 0. Update the count ("2 results"), put it in an aria-live="polite" region, and show a friendly empty state when nothing matches. Escape user input before inserting it into innerHTML (or build the mark with DOM nodes), and let Escape clear the field. The field gets a 1.5px accent ring on :focus-within.` + END,
});

ML.add({
  id: 'faq-tabs',
  cat: 'faq',
  title: 'Topic tabs',
  sub: 'Tabs swap the question list with a slide',
  html: `<div class="box"><div class="tabs" role="tablist"><i class="ind"></i><button type="button" class="on">Billing</button><button type="button">Account</button><button type="button">Privacy</button></div>
<div class="stack">
<ul class="pn"><li><b>Can I cancel anytime?</b><span>Yes, from Billing in two clicks.</span></li><li><b>Where are my invoices?</b><span>Billing, then Invoices. PDF on demand.</span></li><li><b>Do you prorate upgrades?</b><span>We charge only the difference.</span></li></ul>
<ul class="pn"><li><b>How do I reset my password?</b><span>Use the link on the sign in page.</span></li><li><b>Can I change my email?</b><span>Settings, Profile, then Email.</span></li><li><b>How do I add teammates?</b><span>Invite them from the Team tab.</span></li></ul>
<ul class="pn"><li><b>Is my data encrypted?</b><span>At rest and in transit, always.</span></li><li><b>Can I export my data?</b><span>CSV or JSON, any time you like.</span></li><li><b>Do you sell my data?</b><span>Never. Not now, not later.</span></li></ul>
</div></div>`,
  css: C + `
.d .box{width:88%;display:grid;grid-template-columns:minmax(0,1fr);gap:10px}
.d .tabs{position:relative;display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--ml-line)}
.d .tabs button{appearance:none;border:0;background:none;cursor:pointer;padding:9px 0 11px;font:600 12px/1 var(--ml-font);color:var(--ml-muted);transition:color 250ms ease}
.d .tabs button.on{color:var(--ml-accent-ink)}
.d .tabs button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:-2px;border-radius:8px}
.d .ind{position:absolute;left:14%;bottom:-1px;width:calc(100% / 3 * .72);height:2.5px;border-radius:3px;background:var(--ml-accent);transform:translateX(calc(var(--t,0) * 100% / .72));transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .stack{position:relative;height:150px}
.d .pn{position:absolute;inset:0;list-style:none;display:grid;align-content:start;gap:7px;opacity:0;pointer-events:none;transform:translateX(calc(var(--o,0) * 34px));transition:transform 560ms var(--ml-ease),opacity 340ms ease}
.d .pn.on{opacity:1;pointer-events:auto}
.d .pn li{display:grid;gap:4px;padding:9px 13px;border-radius:12px;background:var(--ml-bg);box-shadow:var(--ml-shadow)}
.d .pn b{font:600 12px/1.2 var(--ml-font);color:var(--ml-ink)}
.d .pn span{font:500 11px/1.2 var(--ml-font);color:var(--ml-muted)}
`,
  run: (root) => {
    const btns = [...root.querySelectorAll('.tabs button')];
    const ind = root.querySelector('.ind');
    const pns = [...root.querySelectorAll('.pn')];
    let hold = 0;
    let cur = 0;
    const pick = (i) => {
      cur = i;
      ind.style.setProperty('--t', i);
      btns.forEach((b, j) => b.classList.toggle('on', j === i));
      pns.forEach((p, j) => {
        p.style.setProperty('--o', j - i);
        p.classList.toggle('on', j === i);
      });
    };
    btns.forEach((b, i) => b.addEventListener('click', () => {
      hold = Date.now() + 2500;
      pick(i);
    }));
    pick(0);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) pick((cur + 1) % 3);
      setTimeout(tick, 2300);
    };
    setTimeout(tick, 1300);
  },
  prompt: `Build topic tabs for an FAQ (Billing / Account / Privacy). Use role="tablist" with three buttons and a 2.5px accent indicator under them that moves with transform: translateX() using a critically damped spring such as linear(0, 0.094 5.6%, 0.274 11.1%, 0.455 16.7%, 0.608 22.2%, 0.726 27.8%, 0.812 33.3%, 0.873 38.9%, 0.916 44.4%, 0.944 50%, 0.976 61.1%, 1 100%) over 590ms. Render the three question lists stacked in one relatively positioned box, each absolutely positioned; give each panel an offset custom property --o equal to its index minus the active index, and set transform: translateX(calc(var(--o) * 34px)) with opacity 0 on inactive panels and opacity 1 on the active one, so the old list slides and fades out one way while the new one slides in from the other, over 560ms cubic-bezier(.32,.72,0,1). Panels are role="tabpanel" with aria-labelledby, inactive ones get hidden or inert after the transition, and the arrow keys move between tabs.` + END,
});

ML.add({
  id: 'faq-chevron',
  cat: 'faq',
  title: 'Chevron flip',
  sub: 'Chevron spins 180 degrees, answer fades up',
  html: `<div class="list">${mk(SET_D.slice(0, 3),'<span class="cv">' + CHEV + '</span>')}</div>`,
  css: C + ACC + `
.d .list{width:86%;background:var(--ml-bg);border-radius:16px;box-shadow:var(--ml-shadow);padding:2px 14px}
.d .it{border-top:1px solid var(--ml-bar-2)}
.d .it:first-child{border-top:0}
.d .q{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 0}
.d .t{font:600 12.5px/1.2 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink)}
.d .cv{flex:none;display:grid;place-items:center;width:22px;height:22px;border-radius:50%;background:var(--ml-surface);color:var(--ml-ink-2);transition:transform 700ms var(--ml-bounce),background 300ms ease,color 300ms ease}
.d .cv svg{width:13px;height:13px}
.d .it.open .cv{transform:rotate(180deg);background:var(--ml-accent-soft);color:var(--ml-accent)}
.d .in p{padding:0 30px 13px 0;font:500 11.5px/1.45 var(--ml-font);color:var(--ml-muted);opacity:0;transform:translateY(10px);transition:opacity 300ms ease,transform 460ms var(--ml-ease)}
.d .it.open .in p{opacity:1;transform:none;transition-delay:120ms}
`,
  run: (root) => {
    const its = [...root.querySelectorAll('.it')];
    let hold = 0;
    let cur = 1;
    const open = (i) => {
      cur = i;
      its.forEach((el, j) => {
        el.classList.toggle('open', j === i);
        el.querySelector('.q').setAttribute('aria-expanded', String(j === i));
      });
    };
    its.forEach((el, i) => el.querySelector('.q').addEventListener('click', () => {
      hold = Date.now() + 2500;
      open(el.classList.contains('open') ? -1 : i);
    }));
    open(1);
    const tick = () => {
      if (!root.isConnected) return;
      if (!root.dataset.paused && Date.now() > hold) open((cur + 1) % its.length);
      setTimeout(tick, 2300);
    };
    setTimeout(tick, 1500);
  },
  prompt: `Build an FAQ with a spring chevron. Put the questions in one grouped white card with hairline dividers; each row ends with a 22px circular chip holding a small chevron-down SVG. On open, rotate the chip 180deg with a slight-overshoot spring such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%) over 700ms while the chip tints to your accent. The answer fades up: its paragraph goes from opacity 0 and translateY(10px) to opacity 1 and translateY(0) over 460ms, delayed 120ms so the panel is already opening.` + GRID + ` Rotate with transform only; keep the chevron aria-hidden.` + END,
});

ML.add({
  id: 'faq-two-column',
  cat: 'faq',
  title: 'Two-column FAQ',
  sub: 'Items cascade in across two columns',
  html: `<div class="g">
<div class="c" style="--i:0"><b>Is it free to start?</b><p>Yes, the Starter plan is free forever.</p></div>
<div class="c" style="--i:1"><b>Can I cancel anytime?</b><p>Cancel in two clicks, no fees.</p></div>
<div class="c" style="--i:2"><b>Do you offer refunds?</b><p>Full refund within 30 days.</p></div>
<div class="c" style="--i:3"><b>Can I invite my team?</b><p>Add seats whenever you grow.</p></div></div>`,
  css: C + `
.d .g{display:grid;grid-template-columns:1fr 1fr;gap:9px;width:90%}
.d .c{display:grid;gap:6px;align-content:start;padding:11px 12px 12px;border-radius:13px;background:var(--ml-bg);box-shadow:var(--ml-shadow);animation:rv 6.4s infinite both;animation-delay:calc(var(--i) * 140ms)}
.d .c b{font:600 12.5px/1.2 var(--ml-font);letter-spacing:-.01em;color:var(--ml-ink)}
.d .c p{font:500 11px/1.35 var(--ml-font);color:var(--ml-muted)}
.d .c:nth-child(1) b,.d .c:nth-child(4) b{color:var(--ml-accent-ink)}
@keyframes rv{0%,4%{opacity:0;transform:translateY(16px) scale(.97);animation-timing-function:var(--ml-ease)}16%,86%{opacity:1;transform:none}96%,100%{opacity:0;transform:translateY(-6px) scale(.98)}}
`,
  prompt: `Build a two-column FAQ section where the items reveal in a cascade. Lay out the questions as a 2-column CSS grid of white rounded cards (question in semibold, answer in muted body text, always visible, no accordion). Reveal them with a stagger: each card starts at opacity 0 and transform: translateY(16px) scale(.97) and settles to its natural state over about 600ms with cubic-bezier(.32,.72,0,1), delayed by index x 140ms so the cascade reads left to right, top to bottom. Trigger once with an IntersectionObserver (threshold 0.2) that adds an .in-view class to the grid, with the delay coming from a --i custom property on each card. Collapse to one column below 640px. Animate only opacity and transform, and under prefers-reduced-motion show every card immediately.` + END,
});

ML.add({
  id: 'faq-chat',
  cat: 'faq',
  title: 'Chat-style FAQ',
  sub: 'Question bubble, then a typed reply',
  html: `<div class="win"><div class="hd"><i class="av"></i><b>Help</b><span>Typically replies instantly</span></div><div class="th"></div><div class="chips"><button type="button">Cancel anytime?</button><button type="button">Refunds?</button></div></div>`,
  css: C + `
.d .win{display:grid;grid-template-rows:auto 1fr auto;width:90%;height:92%;border-radius:16px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);overflow:hidden}
.d .hd{display:flex;align-items:center;gap:8px;padding:10px 13px;border-bottom:1px solid var(--ml-line)}
.d .av{width:20px;height:20px;border-radius:50%;background:var(--ml-grad)}
.d .hd b{font:600 12px/1 var(--ml-font)}
.d .hd span{margin-left:auto;font:500 10px/1 var(--ml-font);color:var(--ml-muted)}
.d .th{display:flex;flex-direction:column;justify-content:flex-end;gap:7px;padding:10px 12px;overflow:hidden;min-height:0}
.d .m{max-width:82%;padding:8px 11px;border-radius:14px;font:500 11.5px/1.35 var(--ml-font);animation:in 460ms var(--ml-bounce) both}
.d .m.u{align-self:flex-end;background:var(--ml-grad);color:#fff;border-bottom-right-radius:5px;transform-origin:right bottom}
.d .m.r{align-self:flex-start;background:var(--ml-surface);color:var(--ml-ink);border-bottom-left-radius:5px;transform-origin:left bottom;box-shadow:inset 0 0 0 1px var(--ml-line)}
.d .dots{display:inline-flex;gap:3px;padding:3px 0}
.d .dots i{width:5px;height:5px;border-radius:50%;background:var(--ml-muted);animation:bn 1s infinite ease-in-out both}
.d .dots i:nth-child(2){animation-delay:.15s}.d .dots i:nth-child(3){animation-delay:.3s}
.d .chips{display:flex;gap:6px;padding:9px 12px 11px;border-top:1px solid var(--ml-line)}
.d .chips button{white-space:nowrap;appearance:none;cursor:pointer;border:0;padding:7px 10px;border-radius:99px;font:600 10.5px/1 var(--ml-font);color:var(--ml-accent-ink);background:var(--ml-accent-soft);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .chips button:active{transform:scale(.95);transition-duration:90ms}
.d .chips button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:2px}
@keyframes in{0%{opacity:0;transform:translateY(10px) scale(.9)}100%{opacity:1;transform:none}}
@keyframes bn{0%,70%,100%{transform:translateY(0);opacity:.45}35%{transform:translateY(-3px);opacity:1}}
`,
  run: (root) => {
    const th = root.querySelector('.th');
    const btns = [...root.querySelectorAll('.chips button')];
    const QA = [
      ['Can I cancel anytime?', 'Yes. Cancel from Billing in two clicks, no fees.'],
      ['Do you offer refunds?', 'Full refund within 30 days of purchase.'],
      ['Is there a free trial?', 'Every plan starts with 14 free days.'],
    ];
    let busy = false;
    let hold = 0;
    let gen = 0;
    const wait = (ms) => new Promise((res) => {
      const t0 = Date.now();
      const step = () => {
        if (!root.isConnected) return;
        if (root.dataset.paused) {
          setTimeout(step, 200);
          return;
        }
        if (Date.now() - t0 >= ms) return res();
        setTimeout(step, Math.min(40, ms));
      };
      step();
    });
    const bubble = (cls, txt) => {
      const m = document.createElement('div');
      m.className = 'm ' + cls;
      m.textContent = txt;
      th.appendChild(m);
      while (th.children.length > 3) th.removeChild(th.firstChild);
      return m;
    };
    const ask = async (i) => {
      busy = true;
      const my = ++gen;
      bubble('u', QA[i][0]);
      await wait(500);
      const r = bubble('r', '');
      r.innerHTML = '<span class="dots"><i></i><i></i><i></i></span>';
      await wait(900);
      r.textContent = '';
      for (let c = 1; c <= QA[i][1].length; c++) {
        if (my !== gen) return;
        r.textContent = QA[i][1].slice(0, c);
        await wait(24);
      }
      busy = false;
    };
    btns.forEach((b, i) => b.addEventListener('click', () => {
      if (busy) return;
      hold = Date.now() + 3500;
      ask(i);
    }));
    let k = 0;
    const loop = async () => {
      while (root.isConnected) {
        if (!busy && Date.now() > hold) {
          if (k % 2 === 0) th.textContent = '';
          await ask(k++ % 2 === 0 ? 0 : 1);
          await wait(2200);
        } else {
          await wait(400);
        }
      }
    };
    setTimeout(loop, 500);
  },
  prompt: `Build a chat-style FAQ widget. A rounded white window has a header (small gradient avatar, "Help", a muted status line), a message thread that is bottom-aligned with overflow hidden, and a row of suggested-question chips at the bottom. Clicking a chip appends the question as a right-aligned user bubble (accent gradient, white text, smaller bottom-right radius) that springs in with opacity 0 and translateY(10px) scale(.9) to its resting state over 460ms using a slight-overshoot curve such as linear(0, 0.083 5.6%, 0.26 11.1%, 0.457 16.7%, 0.633 22.2%, 0.774 27.8%, 0.876 33.3%, 0.944 38.9%, 0.986 44.4%, 1.008 50%, 1.02 61.1%, 1 100%). After 500ms show a left-aligned reply bubble containing three bouncing dots for about 900ms, then replace them with the answer typed in character by character (about 24ms per character). Keep the last three messages and drop older ones. Make the thread role="log" with aria-live="polite", write the full answer into the DOM immediately for assistive tech while typing it visually, and under prefers-reduced-motion skip the typing.` + END,
});
})();
