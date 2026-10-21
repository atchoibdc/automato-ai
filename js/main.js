(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  $('#year').textContent = new Date().getFullYear();

  /* ---- Nav ---- */
  const nav = $('#nav');
  const burger = $('#burger');
  const navLinks = $('#navLinks');
  burger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', open);
  });
  $$('a', navLinks).forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }));

  /* ---- Scroll: nav state + ripeness bar (green -> red as you scroll) ---- */
  const fill = $('#ripenessFill');
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 30);
    const max = document.documentElement.scrollHeight - innerHeight;
    const p = max > 0 ? Math.min(y / max, 1) : 0;
    fill.style.width = (p * 100) + '%';
    fill.style.background = `hsl(${120 - p * 115} 80% 55%)`;
    fill.style.color = fill.style.background;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Reveal on scroll (with stagger for siblings) ---- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  $$('.reveal').forEach((el, i) => {
    const siblings = $$('.reveal', el.parentElement);
    el.style.setProperty('--d', (siblings.indexOf(el) * 0.1) + 's');
    io.observe(el);
  });

  /* ---- Counters ---- */
  const counters = $$('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count, dur = 1600, t0 = performance.now();
      const tick = (t) => {
        const k = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.6 });
  counters.forEach(c => cio.observe(c));

  /* ---- Cursor glow ---- */
  const glow = $('.cursor-glow');
  if (!reduceMotion && matchMedia('(pointer: fine)').matches) {
    addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  /* ---- Tomato parallax tilt ---- */
  const wrap = $('#tomatoWrap');
  if (wrap && !reduceMotion && matchMedia('(pointer: fine)').matches) {
    const hero = $('.hero');
    hero.addEventListener('mousemove', e => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      wrap.style.setProperty('--tx', (x * 40).toFixed(1));
      wrap.style.setProperty('--ty', (y * 30).toFixed(1));
    });
    hero.addEventListener('mouseleave', () => { wrap.style.setProperty('--tx', 0); wrap.style.setProperty('--ty', 0); });
  }

  /* ---- Card spotlight ---- */
  $$('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---- Workflow demo ---- */
  const runBtn = $('#runFlow');
  const term = $('#terminal');
  const nodes = $$('.node');
  const wires = $$('.wire');
  let running = false;

  const log = (txt, cls = '') => {
    const d = document.createElement('div');
    d.className = 'line ' + cls;
    d.textContent = txt;
    term.appendChild(d);
  };
  const wait = ms => new Promise(r => setTimeout(r, reduceMotion ? 0 : ms));
  const setRunBtn = (icon, label, spin = false) => {
    runBtn.innerHTML = `<svg class="icon${spin ? ' spin' : ''}" aria-hidden="true"><use href="#i-${icon}"/></svg> <span>${label}</span>`;
  };

  const script = [
    [['$ trigger: form_submission received', ''], ['  name: "Maya Santos" · budget: "$8–12k" · need: "site + support bot"', 'dim']],
    [['> ai.qualify(lead)…', ''], ['  intent: HIGH · fit score: 92/100', 'ok'], ['  drafted personalised reply (142 words)', 'dim']],
    [['> route(lead.score >= 80)', ''], ['  [HOT] lead → fast lane', 'hot']],
    [['> crm.create_contact [ok]', 'ok'], ['> slack.notify(#sales) [ok]', 'ok'], ['> email.send(reply) [ok]', 'ok'], ['[DONE] pipeline finished in 0.8s — zero manual work.', 'ok']]
  ];

  async function runFlow() {
    if (running) return;
    running = true;
    runBtn.disabled = true;
    setRunBtn('loader', 'Running…', true);
    nodes.forEach(n => n.classList.remove('active', 'done'));
    wires.forEach(w => w.classList.remove('on'));
    term.innerHTML = '';

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.add('active');
      for (const [t, c] of script[i]) { log(t, c); await wait(450); }
      await wait(250);
      nodes[i].classList.remove('active');
      nodes[i].classList.add('done');
      if (wires[i]) { wires[i].classList.add('on'); await wait(400); }
    }
    running = false;
    runBtn.disabled = false;
    setRunBtn('refresh', 'Run again');
  }
  runBtn.addEventListener('click', runFlow);

  /* auto-play once when it scrolls into view */
  const demoIO = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { setTimeout(runFlow, 700); demoIO.disconnect(); }
  }, { threshold: 0.55 });
  demoIO.observe($('.workflow'));

  /* ---- Contact form (opens email draft; swap for your backend/automation webhook) ---- */
  const form = $('#contactForm');
  const note = $('#formNote');
  const EMAIL = 'hello@automato.dev'; // <- replace with your real email
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#fName'), email = $('#fEmail');
    let ok = true;
    [name, email].forEach(f => f.classList.remove('invalid'));
    if (!name.value.trim()) { name.classList.add('invalid'); ok = false; }
    if (!/^\S+@\S+\.\S+$/.test(email.value)) { email.classList.add('invalid'); ok = false; }
    if (!ok) { note.style.color = '#ff7d7d'; note.textContent = 'Please add your name and a valid email.'; return; }

    const subject = encodeURIComponent(`AUTOMATO inquiry: ${$('#fType').value}`);
    const body = encodeURIComponent(`Hi AUTOMATO,\n\n${$('#fMsg').value}\n\n— ${name.value} (${email.value})`);
    note.style.color = '';
    note.textContent = 'Seed planted! Opening your email app…';
    location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    form.reset();
  });
})();
