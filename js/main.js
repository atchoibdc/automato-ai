(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Set current year
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ==========================================================================
     Theme Management (Day / Night Mode)
     ========================================================================== */
  const themeBtn = $('#themeToggle');
  const initTheme = () => {
    const saved = localStorage.getItem('numberjuan-theme') || 'light';
    document.documentElement.dataset.theme = saved;
    updateThemeIcon(saved);
  };
  const updateThemeIcon = (t) => {
    if (!themeBtn) return;
    themeBtn.innerHTML = t === 'dark' 
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    themeBtn.setAttribute('aria-label', t === 'dark' ? 'Switch to Vintage Day Mode' : 'Switch to Retro Night Mode');
  };
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const cur = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = cur;
      localStorage.setItem('numberjuan-theme', cur);
      updateThemeIcon(cur);
    });
  }
  initTheme();

  /* ==========================================================================
     Navigation & Mobile Menu
     ========================================================================== */
  const nav = $('#nav');
  const burger = $('#burger');
  const navLinks = $('#navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', open);
    });
    $$('a', navLinks).forEach(a => a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }));
  }

  /* ==========================================================================
     Power Gauge (Scroll Progress Bar)
     ========================================================================== */
  const gaugeFill = $('#powerGaugeFill');
  const onScroll = () => {
    const y = window.scrollY;
    if (nav) nav.classList.toggle('scrolled', y > 24);
    if (gaugeFill) {
      const max = document.documentElement.scrollHeight - innerHeight;
      const p = max > 0 ? Math.min(y / max, 1) : 0;
      gaugeFill.style.width = (p * 100) + '%';
    }
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ==========================================================================
     Cursor Glow
     ========================================================================== */
  const glow = $('.cursor-glow');
  if (glow && !reduceMotion && matchMedia('(pointer: fine)').matches) {
    addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    }, { passive: true });
  }

  /* ==========================================================================
     Hero Polaroid Parallax Tilt
     ========================================================================== */
  const heroCard = $('#heroPolaroid');
  const heroSec = $('.hero');
  if (heroCard && heroSec && !reduceMotion && matchMedia('(pointer: fine)').matches) {
    heroSec.addEventListener('mousemove', e => {
      const r = heroSec.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      heroCard.style.transform = `rotate(${x * 8}deg) translateY(${y * 12}px)`;
    });
    heroSec.addEventListener('mouseleave', () => {
      heroCard.style.transform = 'rotate(2deg) translateY(0px)';
    });
  }

  /* ==========================================================================
     Animated Number Counters
     ========================================================================== */
  const counters = $$('[data-count]');
  const cio = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, target = +el.dataset.count, dur = 1500, t0 = performance.now();
      const tick = (t) => {
        const k = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
        if (k < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => cio.observe(c));

  /* ==========================================================================
     Mainframe Pipeline Automation Demo
     ========================================================================== */
  const runBtn = $('#runFlow');
  const term = $('#terminal');
  const nodes = $$('.node-card');
  let running = false;

  const log = (txt, cls = '') => {
    if (!term) return;
    const d = document.createElement('div');
    d.className = 'line ' + cls;
    d.textContent = txt;
    term.appendChild(d);
    term.scrollTop = term.scrollHeight;
  };
  const wait = ms => new Promise(r => setTimeout(r, reduceMotion ? 0 : ms));

  const script = [
    [['[INPUT DISPATCH] New Project Request: "Retro SaaS Landing + AI Flow"', 'dim'], ['  Origin: California, USA · Priority: VIP · Budget: Grade-A', '']],
    [['> juan.analyze(lead)', ''], ['  Match: 99.4% · Tech Specs: Next.js + Cloud Automation', 'ok'], ['  Assembled 12-page blueprint in 0.3s', 'dim']],
    [['> route.fast_lane()', ''], ['  [HOT PRIORITY] Routed directly to Number Juan console', 'hot']],
    [['> webhook.notify(slack) [OK]', 'ok'], ['> calendar.reserve_slot(zoom) [OK]', 'ok'], ['[SUCCESS] Pipeline executed in 0.6s. Zero manual delay.', 'ok']]
  ];

  async function runFlow() {
    if (running || !term || !runBtn) return;
    running = true;
    runBtn.disabled = true;
    runBtn.textContent = 'Crunching…';
    nodes.forEach(n => n.classList.remove('active', 'done'));
    term.innerHTML = '';

    for (let i = 0; i < nodes.length; i++) {
      nodes[i].classList.add('active');
      for (const [t, c] of script[i]) { log(t, c); await wait(400); }
      await wait(200);
      nodes[i].classList.remove('active');
      nodes[i].classList.add('done');
    }
    running = false;
    runBtn.disabled = false;
    runBtn.textContent = 'Re-Run Mainframe';
  }

  if (runBtn) runBtn.addEventListener('click', runFlow);

  const demoIO = new IntersectionObserver(([e]) => {
    if (e && e.isIntersecting) { setTimeout(runFlow, 600); demoIO.disconnect(); }
  }, { threshold: 0.45 });
  const flowSec = $('.workflow-section');
  if (flowSec) demoIO.observe(flowSec);

  /* ==========================================================================
     Telegraph / Contact Dispatch Form
     ========================================================================== */
  const form = $('#contactForm');
  const note = $('#formNote');
  const EMAIL = 'hello@numberjuan.io';

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const name = $('#fName'), email = $('#fEmail'), msg = $('#fMsg');
      let ok = true;
      [name, email].forEach(f => f.classList.remove('invalid'));
      if (!name.value.trim()) { name.classList.add('invalid'); ok = false; }
      if (!email.value.trim() || !/\S+@\S+\.\S+/.test(email.value)) { email.classList.add('invalid'); ok = false; }
      
      if (!ok) {
        if (note) {
          note.style.color = '#EF4444';
          note.textContent = 'Hold on, partner! Please provide your name and a valid email address.';
        }
        return;
      }

      if (note) {
        note.style.color = '#15803D';
        note.textContent = 'Dispatch sent! Launching your email client to complete transmission…';
      }
      const type = $('#fType') ? $('#fType').value : 'General Inquiry';
      const subject = encodeURIComponent(`numberJuan.io Project Inquiry: ${type}`);
      const body = encodeURIComponent(`Hi Number Juan Team,\n\n${msg.value}\n\n— ${name.value} (${email.value})`);
      location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
      form.reset();
    });
  }
})();
