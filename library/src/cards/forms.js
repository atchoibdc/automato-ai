(() => {
// Forms and inputs. Real components: fields, toggles, validation and submit states.

ML.add({
  id: 'forms-floating-label',
  cat: 'forms',
  title: 'Floating label',
  sub: 'Label lifts and shrinks as you type',
  html: `<div class="fm"><label class="f a"><input type="text" placeholder=" " autocomplete="off" aria-label="Email address"><span>Email address</span></label><label class="f b"><input type="text" placeholder=" " autocomplete="off" aria-label="Company"><span>Company</span></label></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{display:flex;flex-direction:column;gap:12px;width:80%;max-width:360px;padding:18px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .f{position:relative;display:block;height:54px}
.d .f input{width:100%;height:100%;padding:21px 14px 6px;border:1.5px solid var(--ml-line);border-radius:12px;background:var(--ml-bg);font-size:15px;font-weight:500;color:var(--ml-ink);outline:none;transition:border-color 260ms ease,box-shadow 260ms ease}
.d .f span{position:absolute;left:15px;top:16px;font-size:15px;font-weight:500;color:var(--ml-muted);transform-origin:left top;pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring),color 260ms ease}
.d .f input:focus,.d .f.is-focus input{border-color:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft)}
.d .f input:focus + span,.d .f.is-focus input + span,.d .f input:not(:placeholder-shown) + span{transform:translateY(-10px) scale(.74);color:var(--ml-accent-ink)}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const f = root.querySelector('.a');
    const inp = f.querySelector('input');
    (async () => {
      await wait(700);
      while (root.isConnected) {
        if (idle() && !inp.matches(':focus')) {
          inp.value = '';
          f.classList.add('is-focus');
          await wait(700);
          for (const ch of 'maya@studio.co') {
            if (!idle()) break;
            inp.value += ch;
            await wait(95);
          }
          await wait(1500);
          f.classList.remove('is-focus');
          await wait(1700);
          if (idle() && !inp.matches(':focus')) inp.value = '';
        }
        await wait(1200);
      }
    })();
  },
  prompt: `Build floating-label text fields. Wrap an input and a span label in a position: relative container. Give the input a placeholder of a single space so :placeholder-shown tells you whether it is empty, and padding of about 21px top and 6px bottom to leave room for the label. The label sits absolutely at the vertical middle, transform-origin: left top, and acts like a placeholder. When the input is :focus or :not(:placeholder-shown), lift and shrink the label with transform: translateY(-10px) scale(.74) over about 580ms with a critically damped spring such as cubic-bezier(.32,.72,0,1), and shift its color to your accent. On focus also change the border color and add a 4px soft accent ring through box-shadow. Connect the label to the field with for and id (or wrap it) so assistive tech reads it, and keep pointer-events: none on the label. Animate transform and color only. Honor prefers-reduced-motion. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'forms-focus-ring',
  cat: 'forms',
  title: 'Focus ring',
  sub: 'A soft blue ring blooms around a field',
  html: `<div class="fm"><div class="fld a"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input type="text" placeholder="Search projects" aria-label="Search projects"><i class="rg"></i></div><div class="fld b"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5.5" width="17" height="13" rx="2.5"/><path d="M4 7.5l8 6 8-6"/></svg><input type="text" placeholder="Work email" aria-label="Work email"><i class="rg"></i></div></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{display:flex;flex-direction:column;gap:20px;width:78%;max-width:340px}
.d .fld{position:relative;display:flex;align-items:center;gap:9px;height:46px;padding:0 14px;border-radius:14px;border:1.5px solid var(--ml-line);background:var(--ml-bg);color:var(--ml-muted);box-shadow:0 1px 2px rgba(35,15,10,.05);transition:border-color 300ms ease,color 300ms ease}
.d .fld svg{flex:none;width:18px;height:18px}
.d .fld input{flex:1;min-width:0;border:0;outline:none;background:transparent;font-size:14px;font-weight:500;color:var(--ml-ink)}
.d .rg{position:absolute;inset:-4px;border-radius:18px;border:2px solid var(--ml-accent-2);opacity:0;transform:scale(.93);pointer-events:none;transition:opacity 280ms ease,transform var(--ml-spring-dur) var(--ml-spring)}
.d .rg::after{content:"";position:absolute;inset:-6px;border-radius:24px;border:5px solid rgba(255,68,51,.1)}
.d .fld:focus-within,.d .fld.is-auto{border-color:var(--ml-accent);color:var(--ml-accent)}
.d .fld:focus-within .rg,.d .fld.is-auto .rg{opacity:1;transform:none}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const flds = [...root.querySelectorAll('.fld')];
    const inputs = flds.map((f) => f.querySelector('input'));
    (async () => {
      await wait(500);
      let i = 0;
      while (root.isConnected) {
        flds.forEach((f) => f.classList.remove('is-auto'));
        if (idle() && !inputs.some((n) => n.matches(':focus'))) flds[i++ % 2].classList.add('is-auto');
        await wait(1700);
        flds.forEach((f) => f.classList.remove('is-auto'));
        await wait(500);
      }
    })();
  },
  prompt: `Build a soft focus ring for form fields without any neon glow. On the field wrapper (position: relative) add an absolutely positioned ring element at inset: -4px with a 2px light-accent border, a matching border radius, opacity 0 and transform: scale(.93). Add a ::after on it at inset: -6px with a thick 5px border in your accent at about 10 percent alpha, so the ring has a soft outer halo. Use :focus-within on the wrapper to set opacity 1 and transform: none with a critically damped spring (cubic-bezier(.32,.72,0,1), about 580ms), and to switch the field border and icon color to your accent. Animate transform and opacity only so nothing reflows. Use :focus-visible semantics for keyboard users, never remove the outline without replacing it, keep contrast at least 3:1 against the page, and drop the scale under prefers-reduced-motion. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'forms-shake',
  cat: 'forms',
  title: 'Inline validation',
  sub: 'Invalid shakes, then turns into a check',
  html: `<div class="fm"><label class="lb">Email</label><div class="in"><input type="text" placeholder="you@company.com" autocomplete="off" aria-label="Email"><svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></div><p class="msg">Enter a valid email address</p><button class="go" type="button">Continue</button></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{width:80%;max-width:360px;padding:18px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .lb{display:block;margin-bottom:7px;font-size:12px;font-weight:600;color:var(--ml-ink-2)}
.d .in{position:relative;border-radius:12px}
.d .in input{width:100%;height:44px;padding:0 40px 0 14px;border:1.5px solid var(--ml-line);border-radius:12px;background:var(--ml-bg);font-size:15px;font-weight:500;color:var(--ml-ink);outline:none;transition:border-color 240ms ease,box-shadow 240ms ease}
.d .in input:focus{border-color:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft)}
.d .in.bad input{border-color:#FF3B30;box-shadow:0 0 0 4px rgba(255,59,48,.12)}
.d .in.ok input{border-color:#1DB954}
.d .in.shake{animation:ml-shake 420ms cubic-bezier(.36,.07,.19,.97)}
.d .ck{position:absolute;right:12px;top:50%;width:20px;height:20px;margin-top:-10px;padding:3px;border-radius:50%;color:#fff;background:#1DB954;opacity:0;transform:scale(.4);transition:opacity 200ms ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .in.ok .ck{opacity:1;transform:scale(1)}
.d .msg{height:16px;margin:7px 0 6px;font-size:12px;font-weight:500;color:#FF3B30;opacity:0;transform:translateY(-4px);transition:opacity 220ms ease,transform 320ms var(--ml-ease)}
.d .msg.show{opacity:1;transform:none}
.d .go{width:100%;height:40px;appearance:none;border:0;cursor:pointer;border-radius:11px;font-size:14px;font-weight:600;color:#fff;background:var(--ml-grad);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .go:active{transform:scale(.97);transition-duration:90ms}
.d .go:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
@keyframes ml-shake{0%,100%{transform:translateX(0)}18%{transform:translateX(-7px)}36%{transform:translateX(6px)}54%{transform:translateX(-4px)}72%{transform:translateX(3px)}}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const inp = root.querySelector('input');
    const box = root.querySelector('.in');
    const msg = root.querySelector('.msg');
    const go = root.querySelector('.go');
    const valid = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
    const sync = () => {
      const ok = valid(inp.value);
      box.classList.toggle('ok', ok);
      if (ok) {
        box.classList.remove('bad');
        msg.classList.remove('show');
      }
    };
    const submit = () => {
      if (valid(inp.value)) return;
      box.classList.add('bad');
      msg.classList.add('show');
      box.classList.remove('shake');
      void box.offsetWidth;
      box.classList.add('shake');
    };
    inp.addEventListener('input', sync);
    go.addEventListener('click', submit);
    inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
    (async () => {
      await wait(600);
      while (root.isConnected) {
        if (idle() && !inp.matches(':focus')) {
          inp.value = '';
          box.className = 'in';
          msg.classList.remove('show');
          for (const ch of 'maya@studio') {
            if (!idle()) break;
            inp.value += ch;
            sync();
            await wait(80);
          }
          await wait(500);
          if (idle()) submit();
          await wait(1500);
          for (const ch of '.co') {
            if (!idle()) break;
            inp.value += ch;
            sync();
            await wait(140);
          }
          await wait(2200);
        }
        await wait(1000);
      }
    })();
  },
  prompt: `Build inline email validation that shakes on error and confirms on success. Validate on submit and then live on input, so the user is not scolded mid-typing. On a failed submit add an error class to the field: border and 4px soft ring in a clear red, and reveal a short message below (opacity and translateY, reserve its height so the layout never jumps). Also play a shake keyframe on the field wrapper: translateX 0, -7px, 6px, -4px, 3px, 0 over about 420ms with cubic-bezier(.36,.07,.19,.97). Once the value becomes valid, remove the error, turn the border green, and pop in a small green check badge on the right with an overshooting spring (scale .4 to 1). Wire the message with aria-describedby, set aria-invalid, and announce it politely. Never rely on color alone. Honor prefers-reduced-motion by skipping the shake. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'forms-password-meter',
  cat: 'forms',
  title: 'Password strength',
  sub: 'Segments fill as the password grows',
  html: `<div class="fm"><label class="lb">Password</label><input type="password" placeholder="Create a password" autocomplete="off" aria-label="Password"><div class="mt" data-l="0"><i></i><i></i><i></i><i></i></div><div class="st"><span class="w">Enter a password</span><span class="h">10+ characters</span></div></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{width:80%;max-width:360px;padding:18px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .lb{display:block;margin-bottom:7px;font-size:12px;font-weight:600;color:var(--ml-ink-2)}
.d input{width:100%;height:44px;padding:0 14px;border:1.5px solid var(--ml-line);border-radius:12px;background:var(--ml-bg);font-size:15px;font-weight:500;color:var(--ml-ink);outline:none;letter-spacing:.08em;transition:border-color 240ms ease,box-shadow 240ms ease}
.d input:focus{border-color:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft)}
.d .mt{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:14px}
.d .mt i{position:relative;overflow:hidden;height:6px;border-radius:3px;background:var(--ml-bar-2)}
.d .mt i::after{content:"";position:absolute;inset:0;border-radius:3px;background:var(--ml-bar);transform:scaleX(0);transform-origin:left center;transition:transform 420ms var(--ml-ease),background-color 300ms ease}
.d .mt[data-l="1"] i:nth-child(-n+1)::after,.d .mt[data-l="2"] i:nth-child(-n+2)::after,.d .mt[data-l="3"] i:nth-child(-n+3)::after,.d .mt[data-l="4"] i::after{transform:scaleX(1)}
.d .mt[data-l="1"] i::after{background:#FF3B30}
.d .mt[data-l="2"] i::after{background:#FF9F0A}
.d .mt[data-l="3"] i::after{background:var(--ml-accent-2)}
.d .mt[data-l="4"] i::after{background:#1DB954}
.d .st{display:flex;justify-content:space-between;margin-top:9px;font-size:12px;font-weight:600}
.d .st .w{color:var(--ml-muted);transition:color 300ms ease}
.d .st .h{font-weight:500;color:var(--ml-muted)}
.d .mt[data-l="1"] + .st .w{color:#FF3B30}
.d .mt[data-l="2"] + .st .w{color:#C77700}
.d .mt[data-l="3"] + .st .w{color:var(--ml-accent-ink)}
.d .mt[data-l="4"] + .st .w{color:#12893C}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const inp = root.querySelector('input');
    const mt = root.querySelector('.mt');
    const word = root.querySelector('.w');
    const names = ['Enter a password', 'Weak', 'Fair', 'Good', 'Strong'];
    const level = (v) => {
      if (!v) return 0;
      const base = [v.length >= 8, /[a-z]/.test(v) && /[A-Z]/.test(v), /\d/.test(v), /[^a-zA-Z0-9]/.test(v)].filter(Boolean).length;
      let l = Math.max(1, base);
      if (v.length < 6) l = 1;
      else if (v.length < 8) l = Math.min(l, 2);
      if (v.length < 10) l = Math.min(l, 3);
      return l;
    };
    const sync = () => {
      const l = level(inp.value);
      mt.dataset.l = l;
      word.textContent = names[l];
    };
    inp.addEventListener('input', sync);
    (async () => {
      await wait(700);
      while (root.isConnected) {
        if (idle() && !inp.matches(':focus')) {
          inp.value = '';
          sync();
          for (const ch of 'Maya_2024!') {
            if (!idle()) break;
            inp.value += ch;
            sync();
            await wait(260);
          }
          await wait(2200);
          if (idle() && !inp.matches(':focus')) {
            inp.value = '';
            sync();
          }
        }
        await wait(1200);
      }
    })();
  },
  prompt: `Build a password strength meter under a password field. Use four equal segments in a grid with 5px gaps, each a 6px tall rounded track holding a ::after fill that grows with transform: scaleX(0) to scaleX(1) from transform-origin: left center over about 420ms with cubic-bezier(.32,.72,0,1). Score the password on each input event: at least 8 characters, mixed case, a digit, a symbol; cap the score by length (under 6 characters is Weak, under 10 cannot be Strong). Set a data-level attribute on the meter and fill segments up to that level, tinting them red, amber, your accent, then green, and change the text label (Weak, Fair, Good, Strong) and its color in the same beat. Expose it with aria-live polite on the label and aria-describedby on the input so the strength is not conveyed by color alone. Never block the user based on the meter alone. Animate transform and color only. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'forms-otp',
  cat: 'forms',
  title: 'OTP input',
  sub: 'Digits fill boxes, then verify',
  html: `<div class="fm"><p class="ti">Enter your code</p><p class="su">Sent to +1 ••• 4291</p><div class="bx"><input inputmode="numeric" maxlength="1" aria-label="Digit 1"><input inputmode="numeric" maxlength="1" aria-label="Digit 2"><input inputmode="numeric" maxlength="1" aria-label="Digit 3"><input inputmode="numeric" maxlength="1" aria-label="Digit 4"></div><p class="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>Verified</p></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{width:80%;max-width:340px;padding:18px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg);text-align:center}
.d .ti{font-size:15px;font-weight:600;letter-spacing:-.01em}
.d .su{margin-top:3px;font-size:12px;color:var(--ml-muted)}
.d .bx{display:flex;justify-content:center;gap:8px;margin:16px 0 12px}
.d .bx input{width:44px;height:52px;border:1.5px solid var(--ml-line);border-radius:12px;background:var(--ml-surface);text-align:center;font:600 22px/1 var(--ml-font);color:var(--ml-ink);outline:none;caret-color:var(--ml-accent);transition:border-color 240ms ease,background-color 240ms ease,box-shadow 240ms ease}
.d .bx input:focus,.d .bx input.cur{border-color:var(--ml-accent);background:var(--ml-bg);box-shadow:0 0 0 4px var(--ml-accent-soft)}
.d .bx input.pop{animation:ml-popin 380ms var(--ml-bounce)}
.d .bx.done input{border-color:#1DB954;background:rgba(29,185,84,.07);box-shadow:none;color:#12893C}
.d .ok{display:flex;align-items:center;justify-content:center;gap:6px;height:18px;font-size:13px;font-weight:600;color:#12893C;opacity:0;transform:translateY(4px);transition:opacity 260ms ease,transform 400ms var(--ml-ease)}
.d .ok svg{width:16px;height:16px;padding:2px;border-radius:50%;color:#fff;background:#1DB954}
.d .bx.done + .ok{opacity:1;transform:none}
@keyframes ml-popin{0%{transform:scale(.8)}55%{transform:scale(1.1)}100%{transform:scale(1)}}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const bx = root.querySelector('.bx');
    const ins = [...bx.querySelectorAll('input')];
    const mark = (i) => ins.forEach((n, k) => n.classList.toggle('cur', k === i));
    ins.forEach((n, i) => {
      n.addEventListener('input', () => {
        n.value = n.value.replace(/\D/g, '');
        if (n.value && ins[i + 1]) ins[i + 1].focus({ preventScroll: true });
        bx.classList.toggle('done', ins.every((x) => x.value));
      });
      n.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !n.value && ins[i - 1]) ins[i - 1].focus({ preventScroll: true });
      });
    });
    (async () => {
      await wait(700);
      while (root.isConnected) {
        if (idle() && !ins.some((n) => n.matches(':focus'))) {
          ins.forEach((n) => (n.value = ''));
          bx.classList.remove('done');
          for (let i = 0; i < 4; i++) {
            if (!idle()) break;
            mark(i);
            await wait(520);
            ins[i].value = '4817'[i];
            ins[i].classList.remove('pop');
            void ins[i].offsetWidth;
            ins[i].classList.add('pop');
            await wait(320);
          }
          mark(-1);
          if (ins.every((n) => n.value)) bx.classList.add('done');
          await wait(2300);
          if (idle() && !ins.some((n) => n.matches(':focus'))) {
            ins.forEach((n) => (n.value = ''));
            bx.classList.remove('done');
          }
        }
        await wait(1000);
      }
    })();
  },
  prompt: `Build a one-time-code input with four (or six) single-digit boxes. Each box is a real input with inputmode="numeric", maxlength="1" and autocomplete="one-time-code" on the first. On input keep only a digit and move focus to the next box with focus(); on Backspace in an empty box move back; handle paste by spreading the digits across the boxes. Show the active box with an accent border and a 4px soft ring, and when a digit lands play a quick pop keyframe (scale .8, 1.1, 1 over about 380ms with an overshooting spring easing). When all boxes are filled, switch every border and tint to green, reveal a Verified line with a small check badge (opacity and translateY), and submit automatically. Give every box an aria-label like Digit 1 of 4 and announce the result politely. Animate transform, opacity and color only. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'forms-toggle-list',
  cat: 'forms',
  title: 'Settings toggles',
  sub: 'Switches flip one after another',
  html: `<div class="fm"><div class="row"><span>Email alerts</span><button class="sw" type="button" role="switch" aria-checked="false" aria-label="Email alerts"><i></i></button></div><div class="row"><span>Push notifications</span><button class="sw" type="button" role="switch" aria-checked="false" aria-label="Push notifications"><i></i></button></div><div class="row"><span>Weekly digest</span><button class="sw" type="button" role="switch" aria-checked="false" aria-label="Weekly digest"><i></i></button></div><div class="row"><span>Auto-update</span><button class="sw" type="button" role="switch" aria-checked="false" aria-label="Auto-update"><i></i></button></div></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{width:80%;max-width:340px;padding:6px 16px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .row{display:flex;align-items:center;justify-content:space-between;height:44px;font-size:14px;font-weight:500;color:var(--ml-ink)}
.d .row + .row{border-top:1px solid var(--ml-line)}
.d .sw{position:relative;width:42px;height:26px;appearance:none;border:0;cursor:pointer;border-radius:999px;background:#D1D6E0;transition:background-color 320ms var(--ml-ease)}
.d .sw i{position:absolute;left:2px;top:2px;width:22px;height:22px;border-radius:50%;background:#fff;box-shadow:0 1px 3px rgba(35,15,10,.25);transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .sw.on{background:var(--ml-accent)}
.d .sw.on i{transform:translateX(16px)}
.d .sw:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const sws = [...root.querySelectorAll('.sw')];
    const set = (b, on) => {
      b.classList.toggle('on', on);
      b.setAttribute('aria-checked', String(on));
    };
    sws.forEach((b) => b.addEventListener('click', () => set(b, !b.classList.contains('on'))));
    const plan = [[1, 0, 1, 0], [1, 1, 0, 1], [0, 1, 1, 1], [0, 0, 0, 0]];
    (async () => {
      await wait(700);
      let p = 0;
      while (root.isConnected) {
        if (idle()) {
          const target = plan[p++ % plan.length];
          for (let i = 0; i < sws.length; i++) {
            if (!idle()) break;
            if (sws[i].classList.contains('on') !== !!target[i]) {
              set(sws[i], !!target[i]);
              await wait(520);
            }
          }
        }
        await wait(1400);
      }
    })();
  },
  prompt: `Build a settings list of iOS-style toggles. Each row is a label on the left and a real button with role="switch" and aria-checked on the right, separated by 1px hairlines. The track is 42px by 26px, neutral grey when off and your accent when on, with the color transitioning over about 320ms. The white knob is 22px and moves with transform: translateX(16px) using a slightly overshooting spring (linear() easing peaking near 1.02 over about 600ms). Toggle on click and on Space, update aria-checked, keep a visible :focus-visible outline, and make the whole row clickable by using a label or a larger hit area of at least 44px. Persist changes and show a quiet saved state if the setting calls a server. Animate transform and background color only. Honor prefers-reduced-motion by switching instantly. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'forms-checkbox',
  cat: 'forms',
  title: 'Checkbox draw',
  sub: 'The check mark draws itself',
  html: `<div class="fm"><label class="it"><input type="checkbox"><span class="bx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 12.5l4.2 4.2L18.5 7.5"/></svg></span><span class="tx">Design review</span></label><label class="it"><input type="checkbox"><span class="bx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 12.5l4.2 4.2L18.5 7.5"/></svg></span><span class="tx">Ship version 2</span></label><label class="it"><input type="checkbox"><span class="bx"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 12.5l4.2 4.2L18.5 7.5"/></svg></span><span class="tx">Write the docs</span></label></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{display:flex;flex-direction:column;gap:4px;width:78%;max-width:320px;padding:12px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .it{position:relative;display:flex;align-items:center;gap:12px;height:44px;padding:0 8px;border-radius:10px;cursor:pointer;font-size:15px;font-weight:500;color:var(--ml-ink)}
.d .it input{position:absolute;opacity:0;width:1px;height:1px}
.d .bx{position:relative;flex:none;width:24px;height:24px;border-radius:8px;border:2px solid #C3CCDB;background:var(--ml-bg);color:#fff;transition:background-color 220ms ease,border-color 220ms ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .bx svg{position:absolute;inset:0;width:100%;height:100%;padding:2px}
.d .bx path{stroke-dasharray:22;stroke-dashoffset:22;transition:stroke-dashoffset 320ms var(--ml-ease)}
.d .tx{position:relative;transition:color 300ms ease}
.d .tx::after{content:"";position:absolute;left:0;right:0;top:50%;height:1.5px;background:var(--ml-muted);transform:scaleX(0);transform-origin:left center;transition:transform 380ms var(--ml-ease)}
.d .it input:checked + .bx{background:var(--ml-accent);border-color:var(--ml-accent);transform:scale(1.08)}
.d .it input:checked + .bx path{stroke-dashoffset:0;transition-delay:80ms}
.d .it input:checked ~ .tx{color:var(--ml-muted)}
.d .it input:checked ~ .tx::after{transform:scaleX(1)}
.d .it input:focus-visible + .bx{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .it:hover{background:var(--ml-surface)}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const cbs = [...root.querySelectorAll('input')];
    const plan = [[1, 0, 0], [1, 1, 0], [1, 1, 1], [0, 0, 0]];
    (async () => {
      await wait(700);
      let p = 0;
      while (root.isConnected) {
        if (idle()) {
          const t = plan[p++ % plan.length];
          for (let i = 0; i < cbs.length; i++) {
            if (!idle()) break;
            if (cbs[i].checked !== !!t[i]) {
              cbs[i].checked = !!t[i];
              await wait(600);
            }
          }
        }
        await wait(1300);
      }
    })();
  },
  prompt: `Build checkboxes whose check mark draws itself. Use a real input type="checkbox" inside a label, visually hidden but still focusable, followed by a 24px rounded box span that contains an inline SVG check path. Set stroke-dasharray and stroke-dashoffset on the path to its length (about 22) so it starts undrawn. With the sibling selector input:checked + .box, fill the box with your accent, give it a small spring pop to scale(1.08) with an overshooting easing, and animate stroke-dashoffset to 0 over about 320ms with cubic-bezier(.32,.72,0,1), delayed by 80ms. Draw a strike line through the label with a pseudo-element scaleX from the left over 380ms and mute its color. Show :focus-visible on the box, make the whole row a 44px hit target, and support indeterminate by drawing a short dash instead. Animate transform, stroke-dashoffset and color only. Honor prefers-reduced-motion. Plain HTML/CSS, no libraries.`,
});

ML.add({
  id: 'forms-radio-pills',
  cat: 'forms',
  title: 'Radio pills',
  sub: 'A highlight slides between plans',
  html: `<div class="fm" style="--i:0"><i class="sl"></i><label class="op"><input type="radio" name="plan" checked><span class="dot"></span><span class="nm">Starter</span><span class="pr">$9</span></label><label class="op"><input type="radio" name="plan"><span class="dot"></span><span class="nm">Pro</span><span class="pr">$19</span></label><label class="op"><input type="radio" name="plan"><span class="dot"></span><span class="nm">Team</span><span class="pr">$49</span></label></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{position:relative;display:flex;flex-direction:column;gap:6px;width:76%;max-width:320px;padding:8px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .sl{position:absolute;left:8px;right:8px;top:8px;height:46px;border-radius:12px;background:var(--ml-accent-soft);border:1.5px solid var(--ml-accent-line);transform:translateY(calc(var(--i) * 52px));transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .op{position:relative;display:flex;align-items:center;gap:12px;height:46px;padding:0 14px;border-radius:12px;cursor:pointer;font-size:14px;font-weight:600;color:var(--ml-ink)}
.d .op input{position:absolute;opacity:0;width:1px;height:1px}
.d .dot{flex:none;position:relative;width:20px;height:20px;border-radius:50%;border:2px solid #C3CCDB;transition:border-color 240ms ease}
.d .dot::after{content:"";position:absolute;inset:3px;border-radius:50%;background:var(--ml-accent);transform:scale(0);transition:transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .nm{flex:1}
.d .pr{font-weight:500;color:var(--ml-muted)}
.d .op input:checked + .dot{border-color:var(--ml-accent)}
.d .op input:checked + .dot::after{transform:scale(1)}
.d .op input:checked ~ .pr{color:var(--ml-accent-ink)}
.d .op input:focus-visible + .dot{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const fm = root.querySelector('.fm');
    const ops = [...root.querySelectorAll('input')];
    const pick = (i) => {
      ops[i].checked = true;
      fm.style.setProperty('--i', i);
    };
    ops.forEach((n, i) => n.addEventListener('change', () => fm.style.setProperty('--i', i)));
    (async () => {
      await wait(900);
      let i = 0;
      while (root.isConnected) {
        if (idle()) pick(++i % 3);
        await wait(1700);
      }
    })();
  },
  prompt: `Build a radio-group of plan options with a sliding selected background. Use real input type="radio" elements sharing a name, each inside a label row of fixed height (for example 46px with a 6px gap), visually hidden but focusable. Behind the rows put one absolutely positioned highlight (soft accent fill, 1.5px light-accent border, same radius) and move it with transform: translateY(calc(var(--i) * 52px)), where --i is the selected index set from the change event. Use a slightly overshooting spring (linear() easing peaking near 1.02 over about 600ms) so it settles like a flicked pill. Fill the radio dot with a scale(0) to scale(1) pop, and tint the price. Keep arrow-key navigation native, show :focus-visible on the dot, and make each whole row clickable. Animate transform only. Honor prefers-reduced-motion by moving the highlight instantly. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'forms-range',
  cat: 'forms',
  title: 'Range slider',
  sub: 'Thumb glides, tooltip follows the value',
  html: `<div class="fm"><div class="hd">Monthly budget</div><div class="trk"><div class="rail"><i class="fill"></i><span class="th"><b class="tip">$2,500</b></span></div><input type="range" min="0" max="5000" step="50" value="2500" aria-label="Monthly budget"></div><div class="tk"><span>$0</span><span>$5,000</span></div></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{width:80%;max-width:360px;padding:18px 18px 14px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .hd{font-size:13px;font-weight:600;color:var(--ml-ink)}
.d .trk{position:relative;height:30px;margin-top:38px}
.d .rail{position:absolute;left:11px;right:11px;top:50%;height:6px;margin-top:-3px;border-radius:3px;background:var(--ml-bar-2)}
.d .fill{position:absolute;inset:0;border-radius:3px;background:var(--ml-grad);transform-origin:left center;transform:scaleX(.5)}
.d .th{position:absolute;left:-11px;top:50%;width:22px;height:22px;margin-top:-11px;border-radius:50%;background:#fff;border:1px solid var(--ml-line);box-shadow:0 1px 3px rgba(35,15,10,.2),0 6px 12px rgba(35,15,10,.12);transform:translateX(50px);transition:scale 300ms var(--ml-spring)}
.d .tip{position:absolute;left:50%;bottom:32px;transform:translateX(-50%);padding:4px 9px;border-radius:8px;background:var(--ml-ink);color:#fff;font-size:12px;font-weight:600;font-variant-numeric:tabular-nums;white-space:nowrap}
.d .tip::after{content:"";position:absolute;left:50%;top:100%;margin-left:-4px;border:4px solid transparent;border-top-color:var(--ml-ink)}
.d .trk.drag .th{scale:1.15}
.d input[type="range"]{position:absolute;inset:0;width:100%;height:100%;margin:0;opacity:0;cursor:pointer;-webkit-appearance:none;appearance:none;background:transparent}
.d input[type="range"]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:22px;height:22px}
.d input[type="range"]::-moz-range-thumb{width:22px;height:22px;border:0}
.d .trk:focus-within .th{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .tk{display:flex;justify-content:space-between;font-size:11px;color:var(--ml-muted)}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const trk = root.querySelector('.trk');
    const rail = root.querySelector('.rail');
    const inp = root.querySelector('input');
    const th = root.querySelector('.th');
    const fill = root.querySelector('.fill');
    const tip = root.querySelector('.tip');
    let p = 0.5;
    const set = (q) => {
      p = Math.max(0, Math.min(1, q));
      const v = Math.round((p * 5000) / 50) * 50;
      inp.value = v;
      th.style.transform = 'translateX(' + (p * rail.clientWidth).toFixed(1) + 'px)';
      fill.style.transform = 'scaleX(' + p.toFixed(3) + ')';
      tip.textContent = '$' + v.toLocaleString('en-US');
    };
    inp.addEventListener('input', () => set(inp.value / 5000));
    inp.addEventListener('pointerdown', () => trk.classList.add('drag'));
    ['pointerup', 'pointercancel', 'blur'].forEach((e) => inp.addEventListener(e, () => trk.classList.remove('drag')));
    const glide = async (to, ms) => {
      const from = p;
      let t = 0;
      while (t < ms && idle()) {
        await sleep(16);
        if (!root.dataset.paused) t += 16;
        const k = Math.min(1, t / ms);
        set(from + (to - from) * (1 - Math.pow(1 - k, 3)));
      }
    };
    set(0.5);
    (async () => {
      await wait(600);
      const stops = [0.8, 0.22, 0.62, 0.38];
      let i = 0;
      while (root.isConnected) {
        if (idle()) {
          trk.classList.add('drag');
          await glide(stops[i++ % stops.length], 1500);
          trk.classList.remove('drag');
        }
        await wait(900);
      }
    })();
  },
  prompt: `Build a custom range slider with a value tooltip that follows the thumb. Keep a real input type="range" overlaid on the track (opacity 0, full size, appearance none, a 22px transparent thumb) so dragging, touch, keyboard arrows, Home and End and screen readers all work natively. Render the visuals underneath: a 6px rail inset by half the thumb width on both sides, a gradient fill that grows with transform: scaleX(p) from the left, and a 22px white thumb moved with transform: translateX(p * railWidth). Put a dark rounded tooltip with a small arrow above the thumb, showing the value with font-variant-numeric: tabular-nums. On input, update the thumb, fill and tooltip in the same frame. Scale the thumb to 1.15 while dragging. Show a focus ring on the thumb for keyboard focus and set aria-valuetext with the formatted value. Animate transform only. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'forms-multistep',
  cat: 'forms',
  title: 'Multi-step form',
  sub: 'Dots and line advance, steps slide',
  html: `<div class="fm" style="--s:0"><div class="steps"><i class="ln"><b></b></i><span class="st on"><u></u>Profile</span><span class="st"><u></u>Contact</span><span class="st"><u></u>Team</span></div><div class="vp"><div class="tr"><div class="pg"><label>Full name</label><input type="text" value="Maya Rodriguez" aria-label="Full name"></div><div class="pg"><label>Work email</label><input type="text" value="maya@studio.co" aria-label="Work email"></div><div class="pg"><label>Team size</label><input type="text" value="5 to 10 people" aria-label="Team size"></div></div></div><div class="ft"><button class="bk" type="button">Back</button><button class="nx" type="button">Next</button></div></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{width:84%;max-width:380px;padding:16px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .steps{position:relative;display:grid;grid-template-columns:repeat(3,1fr);text-align:center}
.d .ln{position:absolute;left:16.66%;right:16.66%;top:6px;height:3px;border-radius:2px;background:var(--ml-bar-2)}
.d .ln b{position:absolute;inset:0;border-radius:2px;background:var(--ml-accent);transform-origin:left center;transform:scaleX(calc(var(--s) / 2));transition:transform 560ms var(--ml-ease)}
.d .st{position:relative;display:flex;flex-direction:column;align-items:center;gap:6px;font-size:11px;font-weight:600;color:var(--ml-muted);transition:color 300ms ease}
.d .st u{width:15px;height:15px;border-radius:50%;background:var(--ml-bg);border:3px solid var(--ml-bar);transition:border-color 300ms ease,background-color 300ms ease,transform var(--ml-bounce-dur) var(--ml-bounce)}
.d .st.on{color:var(--ml-ink)}
.d .st.on u{border-color:var(--ml-accent);transform:scale(1.15)}
.d .st.done u{border-color:var(--ml-accent);background:var(--ml-accent)}
.d .vp{overflow:hidden;margin-top:14px}
.d .tr{display:flex;width:300%;transform:translateX(calc(var(--s) * -33.3333%));transition:transform 560ms var(--ml-ease)}
.d .pg{width:33.3333%;padding:2px 3px 3px}
.d .pg label{display:block;margin-bottom:6px;font-size:12px;font-weight:600;color:var(--ml-ink-2)}
.d .pg input{width:100%;height:42px;padding:0 14px;border:1.5px solid var(--ml-line);border-radius:12px;background:var(--ml-bg);font-size:14px;font-weight:500;color:var(--ml-ink);outline:none}
.d .pg input:focus{border-color:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft)}
.d .ft{display:flex;justify-content:space-between;margin-top:12px}
.d .ft button{appearance:none;border:0;cursor:pointer;height:38px;padding:0 20px;border-radius:11px;font-size:13px;font-weight:600;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity 260ms ease}
.d .bk{color:var(--ml-ink-2);background:var(--ml-surface)}
.d .nx{color:#fff;background:var(--ml-grad)}
.d .fm[data-first] .bk{opacity:0;pointer-events:none}
.d .ft button:active{transform:scale(.96);transition-duration:90ms}
.d .ft button:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const fm = root.querySelector('.fm');
    const sts = [...root.querySelectorAll('.st')];
    const nx = root.querySelector('.nx');
    let s = 0;
    const go = (n) => {
      s = Math.max(0, Math.min(2, n));
      fm.style.setProperty('--s', s);
      fm.toggleAttribute('data-first', s === 0);
      sts.forEach((el, i) => {
        el.classList.toggle('on', i === s);
        el.classList.toggle('done', i < s);
      });
      nx.textContent = s === 2 ? 'Finish' : 'Next';
    };
    go(0);
    root.querySelector('.bk').addEventListener('click', () => go(s - 1));
    nx.addEventListener('click', () => go(s === 2 ? 0 : s + 1));
    (async () => {
      await wait(1100);
      while (root.isConnected) {
        if (idle()) go(s === 2 ? 0 : s + 1);
        await wait(1800);
      }
    })();
  },
  prompt: `Build a multi-step form with a progress indicator. At the top, a three-column grid of step dots with labels, and a thin line behind the dots running from the first to the last dot center; fill the line with a child using transform: scaleX(step / (steps - 1)) and transform-origin: left center over about 560ms with cubic-bezier(.32,.72,0,1). The current dot gets an accent ring and a small spring scale, completed dots fill solid. Below, a viewport with overflow: hidden containing a track as wide as steps x 100% that moves with transform: translateX(calc(var(--step) * -100% / steps)), so fields slide sideways between steps. Each step is its own labelled fieldset; Back is hidden on the first step and Next becomes Finish on the last. On step change move focus to the first field of the new step and announce Step 2 of 3 in an aria-live region. Validate per step before advancing. Animate transform only. Honor prefers-reduced-motion. Plain HTML/CSS/JS.`,
});

ML.add({
  id: 'forms-tags',
  cat: 'forms',
  title: 'Tag input',
  sub: 'Words pop in as chips, one is removed',
  html: `<div class="fm"><label class="lb">Skills</label><div class="box"><input type="text" placeholder="Add a skill" autocomplete="off" aria-label="Add a skill"></div><p class="hint">Press Enter to add a tag</p></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{width:82%;max-width:360px;padding:18px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d .lb{display:block;margin-bottom:7px;font-size:12px;font-weight:600;color:var(--ml-ink-2)}
.d .box{display:flex;flex-wrap:wrap;align-content:flex-start;gap:6px;min-height:84px;padding:8px;border:1.5px solid var(--ml-line);border-radius:12px;background:var(--ml-bg);transition:border-color 240ms ease,box-shadow 240ms ease}
.d .box:focus-within{border-color:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft)}
.d .box input{flex:1;min-width:70px;height:26px;border:0;outline:none;background:transparent;font-size:13px;font-weight:500;color:var(--ml-ink)}
.d .chip{display:inline-flex;align-items:center;gap:4px;height:26px;padding:0 6px 0 10px;border-radius:999px;background:var(--ml-accent-soft);border:1px solid var(--ml-accent-line);font-size:12px;font-weight:600;color:var(--ml-accent-ink);animation:ml-chip 460ms var(--ml-bounce)}
.d .chip button{display:grid;place-items:center;width:16px;height:16px;appearance:none;border:0;cursor:pointer;border-radius:50%;background:transparent;color:var(--ml-accent-ink)}
.d .chip button:hover{background:var(--ml-accent-line)}
.d .chip button svg{width:10px;height:10px}
.d .chip.out{animation:ml-chipout 260ms var(--ml-ease) forwards}
.d .hint{margin-top:8px;font-size:11px;color:var(--ml-muted)}
@keyframes ml-chip{0%{opacity:0;transform:scale(.5)}100%{opacity:1;transform:scale(1)}}
@keyframes ml-chipout{to{opacity:0;transform:scale(.5)}}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const box = root.querySelector('.box');
    const inp = root.querySelector('input');
    const x = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>';
    const drop = (chip) => {
      chip.classList.add('out');
      setTimeout(() => chip.remove(), 260);
    };
    const add = (txt) => {
      const t = txt.trim();
      if (!t) return;
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.append(t);
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', 'Remove ' + t);
      b.innerHTML = x;
      b.addEventListener('click', () => drop(chip));
      chip.appendChild(b);
      box.insertBefore(chip, inp);
      inp.value = '';
    };
    inp.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        add(inp.value);
      } else if (e.key === 'Backspace' && !inp.value) {
        const c = box.querySelectorAll('.chip:not(.out)');
        if (c.length) drop(c[c.length - 1]);
      }
    });
    (async () => {
      await wait(700);
      while (root.isConnected) {
        if (idle() && !inp.matches(':focus')) {
          for (const w of ['Motion', 'Figma', 'Prototyping']) {
            for (const ch of w) {
              if (!idle()) break;
              inp.value += ch;
              await wait(85);
            }
            await wait(250);
            add(inp.value);
            await wait(350);
          }
          await wait(1100);
          const c = box.querySelectorAll('.chip:not(.out)');
          if (c[1]) drop(c[1]);
          await wait(2000);
          box.querySelectorAll('.chip').forEach(drop);
          inp.value = '';
        }
        await wait(1200);
      }
    })();
  },
  prompt: `Build a tag input where typed words become chips. Wrap a text input and the chips in a flex-wrap container styled like a field (1.5px border, 4px soft accent ring on :focus-within). On Enter or comma, trim the value, ignore empties and duplicates, and insert a chip before the input: a pill with a soft accent fill, a light accent border, the word, and a small remove button with an SVG x. Pop each new chip in with a keyframe from opacity 0, scale(.5) to opacity 1, scale(1) over about 460ms with an overshooting spring easing. On remove (click on the x, or Backspace in an empty input) play a short exit keyframe (scale to .5, opacity 0 over 260ms) and delete the node on animationend. Give each remove button an aria-label like Remove Figma, announce additions and removals in an aria-live region, and keep the input focused after adding. Animate transform and opacity only. Honor prefers-reduced-motion. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'forms-search-suggest',
  cat: 'forms',
  title: 'Search suggestions',
  sub: 'Matches drop down, match in bold',
  html: `<div class="fm"><div class="sr"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/></svg><input type="text" placeholder="Search patterns" autocomplete="off" aria-label="Search patterns"></div><ul class="dd" role="listbox"></ul></div>`,
  css: `
.d{display:flex;justify-content:center;align-items:flex-start;padding-top:15%;background:var(--ml-surface)}
.d .fm{position:relative;width:80%;max-width:360px}
.d .sr{display:flex;align-items:center;gap:9px;height:46px;padding:0 14px;border:1.5px solid var(--ml-line);border-radius:14px;background:var(--ml-bg);color:var(--ml-muted);box-shadow:var(--ml-shadow);transition:border-color 240ms ease,box-shadow 240ms ease}
.d .sr svg{flex:none;width:18px;height:18px}
.d .sr input{flex:1;min-width:0;border:0;outline:none;background:transparent;font-size:15px;font-weight:500;color:var(--ml-ink)}
.d .sr:focus-within,.d .sr.is-auto{border-color:var(--ml-accent);color:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft)}
.d .dd{position:absolute;left:0;right:0;top:calc(100% + 8px);list-style:none;padding:5px;border-radius:14px;background:var(--ml-bg);border:1px solid var(--ml-line);box-shadow:var(--ml-shadow-lg);transform-origin:top center;transform:scale(.96) translateY(-6px);opacity:0;pointer-events:none;transition:transform var(--ml-spring-dur) var(--ml-spring),opacity 180ms ease}
.d .dd.open{transform:none;opacity:1;pointer-events:auto}
.d .dd li{display:flex;align-items:center;height:32px;padding:0 10px;border-radius:9px;cursor:pointer;font-size:13px;font-weight:500;color:var(--ml-muted);transition:background-color 200ms ease}
.d .dd li b{font-weight:700;color:var(--ml-ink)}
.d .dd li:hover,.d .dd li.hot{background:var(--ml-accent-soft);color:var(--ml-accent-ink)}
.d .dd li:hover b,.d .dd li.hot b{color:var(--ml-accent-ink)}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const inp = root.querySelector('input');
    const sr = root.querySelector('.sr');
    const dd = root.querySelector('.dd');
    const data = ['Magnetic buttons', 'Marquee text', 'Mask reveal', 'Modal dialogs', 'Motion tokens', 'Mobile menu', 'Masonry grid', 'Morphing shapes'];
    const render = () => {
      const q = inp.value.trim();
      const hits = q ? data.filter((d) => d.toLowerCase().startsWith(q.toLowerCase())).slice(0, 3) : [];
      dd.textContent = '';
      hits.forEach((h) => {
        const li = document.createElement('li');
        li.setAttribute('role', 'option');
        const b = document.createElement('b');
        b.textContent = h.slice(0, q.length);
        li.append(b, h.slice(q.length));
        li.addEventListener('click', () => { inp.value = h; render(); });
        dd.appendChild(li);
      });
      dd.classList.toggle('open', hits.length > 0 && q !== hits[0] );
    };
    inp.addEventListener('input', render);
    inp.addEventListener('blur', () => setTimeout(() => dd.classList.remove('open'), 150));
    (async () => {
      await wait(700);
      while (root.isConnected) {
        if (idle() && !inp.matches(':focus')) {
          inp.value = '';
          render();
          sr.classList.add('is-auto');
          await wait(500);
          for (const ch of 'mas') {
            if (!idle()) break;
            inp.value += ch;
            render();
            await wait(320);
          }
          await wait(900);
          const li = dd.querySelector('li');
          if (li && idle()) {
            li.classList.add('hot');
            await wait(800);
            inp.value = li.textContent;
            render();
          }
          await wait(1600);
          sr.classList.remove('is-auto');
          if (idle() && !inp.matches(':focus')) {
            inp.value = '';
            render();
          }
        }
        await wait(1100);
      }
    })();
  },
  prompt: `Build a search field with live suggestions where the matched text is bold. On each input event filter your list by prefix (case-insensitive), take the first three or four hits, and render each as an option row in a dropdown card under the field: the matched prefix wrapped in a bold ink-colored element and the remainder in a muted tone. Show the dropdown with a transition from transform: scale(.96) translateY(-6px), opacity 0 to none, opacity 1 over about 580ms using a critically damped spring, transform-origin: top center. Use the combobox pattern: role="combobox" with aria-expanded and aria-controls on the input, role="listbox" and role="option" on the list, aria-activedescendant for the highlighted row, Arrow Up and Down to move, Enter to choose, Escape to close. Highlight rows with a soft accent tint. Animate transform and opacity only. Honor prefers-reduced-motion. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'forms-submit-success',
  cat: 'forms',
  title: 'Submit to success',
  sub: 'The form collapses into a check card',
  html: `<div class="wrap"><div class="card"><div class="form"><label>Name<input type="text" value="Maya R." aria-label="Name"></label><label>Message<input type="text" value="Loved the new release" aria-label="Message"></label><button class="go" type="button">Send message</button></div></div><div class="done"><span class="ck"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 12.5l4.2 4.2L18.5 7.5"/></svg></span><b>Message sent</b></div></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .wrap{position:relative;display:grid;width:78%;max-width:340px;filter:drop-shadow(0 12px 22px rgba(35,15,10,.14)) drop-shadow(0 1px 2px rgba(35,15,10,.08))}
.d .card{grid-area:1/1;border-radius:18px;background:var(--ml-bg);clip-path:inset(0 round 18px);transition:clip-path 620ms var(--ml-ease)}
.d .form{display:flex;flex-direction:column;gap:10px;padding:16px;transition:opacity 260ms ease,transform 520ms var(--ml-ease)}
.d .form label{display:block;font-size:11px;font-weight:600;color:var(--ml-ink-2)}
.d .form input{display:block;width:100%;height:38px;margin-top:5px;padding:0 12px;border:1.5px solid var(--ml-line);border-radius:10px;background:var(--ml-bg);font-size:13px;font-weight:500;color:var(--ml-ink);outline:none}
.d .form input:focus{border-color:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft)}
.d .go{height:40px;margin-top:2px;appearance:none;border:0;cursor:pointer;border-radius:11px;font-size:14px;font-weight:600;color:#fff;background:var(--ml-grad);transition:transform var(--ml-spring-dur) var(--ml-spring)}
.d .go:active,.d .go.is-auto{transform:scale(.96);transition-duration:90ms}
.d .go:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
.d .done{grid-area:1/1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:9px;font-size:15px;font-weight:600;color:var(--ml-ink);opacity:0;pointer-events:none;transform:scale(.8);transition:opacity 200ms ease,transform 300ms var(--ml-ease)}
.d .ck{display:grid;place-items:center;width:34px;height:34px;border-radius:50%;background:#1DB954;color:#fff}
.d .ck svg{width:18px;height:18px}
.d .ck path{stroke-dasharray:24;stroke-dashoffset:24;transition:stroke-dashoffset 380ms var(--ml-ease)}
.d .wrap.sent .card{clip-path:inset(22% 16% round 24px)}
.d .wrap.sent .form{opacity:0;transform:scale(.88);pointer-events:none}
.d .wrap.sent .done{opacity:1;transform:none;pointer-events:auto;transition:opacity 300ms ease 330ms,transform var(--ml-bounce-dur) var(--ml-bounce) 330ms}
.d .wrap.sent .ck path{stroke-dashoffset:0;transition-delay:560ms}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const wrap = root.querySelector('.wrap');
    const go = root.querySelector('.go');
    go.addEventListener('click', () => wrap.classList.add('sent'));
    (async () => {
      await wait(1200);
      while (root.isConnected) {
        if (idle()) {
          go.classList.add('is-auto');
          await wait(220);
          go.classList.remove('is-auto');
          wrap.classList.add('sent');
          await wait(2400);
          if (idle()) wrap.classList.remove('sent');
        } else if (wrap.classList.contains('sent')) {
          await wait(2400);
          wrap.classList.remove('sent');
        }
        await wait(1600);
      }
    })();
  },
  prompt: `Build a form that collapses into a success card on submit. Put the form and a hidden success panel in the same grid cell inside a card. On a valid submit add a sent class: the form fades and scales down to about .88 over 260ms, while the card itself shrinks toward its center with clip-path from inset(0 round 18px) to inset(22% 16% round 24px) over about 620ms using cubic-bezier(.32,.72,0,1). Because clip-path clips shadows, put the shadow on a wrapper using filter: drop-shadow so it follows the shrinking shape. About 330ms in, pop the success panel in (scale .8 to 1 with a slightly overshooting spring) showing a green circle with an SVG check that draws via stroke-dashoffset, plus a short message. Move focus to the message, announce it in an aria-live region, and offer a way to send another. Animate clip-path, transform and opacity only. Honor prefers-reduced-motion with a plain crossfade. Plain HTML/CSS/JS, no libraries.`,
});

ML.add({
  id: 'forms-char-ring',
  cat: 'forms',
  title: 'Character counter',
  sub: 'A ring fills and turns red near limit',
  html: `<div class="fm"><textarea maxlength="60" placeholder="What is on your mind?" aria-label="Post"></textarea><div class="ft"><span class="rw"><svg viewBox="0 0 28 28"><circle class="bg" cx="14" cy="14" r="11"/><circle class="pg" cx="14" cy="14" r="11"/></svg><b class="n">60</b></span><button class="post" type="button">Post</button></div></div>`,
  css: `
.d{display:grid;place-items:center;background:var(--ml-surface)}
.d .fm{width:80%;max-width:360px;padding:14px;border-radius:18px;background:var(--ml-bg);box-shadow:var(--ml-shadow-lg)}
.d textarea{display:block;width:100%;height:78px;padding:11px 12px;resize:none;border:1.5px solid var(--ml-line);border-radius:12px;background:var(--ml-bg);font:500 14px/1.4 var(--ml-font);color:var(--ml-ink);outline:none;transition:border-color 240ms ease,box-shadow 240ms ease}
.d textarea:focus{border-color:var(--ml-accent);box-shadow:0 0 0 4px var(--ml-accent-soft)}
.d .ft{display:flex;align-items:center;justify-content:flex-end;gap:12px;margin-top:12px}
.d .rw{position:relative;width:30px;height:30px;display:grid;place-items:center}
.d .rw svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.d .rw circle{fill:none;stroke-width:3}
.d .rw .bg{stroke:var(--ml-bar-2)}
.d .rw .pg{stroke:var(--ml-accent);stroke-linecap:round;stroke-dasharray:69.115;stroke-dashoffset:69.115;transition:stroke-dashoffset 120ms linear,stroke 250ms ease}
.d .n{position:relative;font-size:10px;font-weight:700;color:var(--ml-muted);font-variant-numeric:tabular-nums;transition:color 250ms ease}
.d .rw.hot .pg{stroke:#FF3B30}
.d .rw.hot .n{color:#FF3B30}
.d .rw.hot{animation:ml-tick 360ms var(--ml-ease)}
.d .post{height:34px;padding:0 18px;appearance:none;border:0;cursor:pointer;border-radius:10px;font-size:13px;font-weight:600;color:#fff;background:var(--ml-grad);opacity:.4;transition:opacity 250ms ease}
.d .post.on{opacity:1}
.d .post:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
@keyframes ml-tick{0%,100%{transform:scale(1)}40%{transform:scale(1.18)}}
`,
  run: (root) => {
    const sleep=(ms)=>new Promise((r)=>setTimeout(r,ms));
    let userUntil=0;
    const touch=()=>(userUntil=performance.now()+2500);
    ['pointerdown','keydown'].forEach((e)=>root.addEventListener(e,touch));
    const wait=async(ms)=>{let t=0;while(t<ms){await sleep(80);if(!root.dataset.paused)t+=80;}};
    const idle=()=>!root.dataset.paused&&performance.now()>userUntil;
    const ta = root.querySelector('textarea');
    const rw = root.querySelector('.rw');
    const pg = root.querySelector('.pg');
    const n = root.querySelector('.n');
    const post = root.querySelector('.post');
    const C = 69.115, LIM = 60;
    const sync = () => {
      const len = ta.value.length;
      const p = Math.min(1, len / LIM);
      pg.style.strokeDashoffset = (C * (1 - p)).toFixed(2);
      n.textContent = LIM - len;
      rw.classList.toggle('near', p >= 0.8);
      rw.classList.toggle('hot', p >= 0.9);
      post.classList.toggle('on', len > 0);
    };
    ta.addEventListener('input', sync);
    sync();
    (async () => {
      await wait(700);
      while (root.isConnected) {
        if (idle() && !ta.matches(':focus')) {
          ta.value = '';
          sync();
          for (const ch of 'Shipped the new onboarding flow today and it finally feels right') {
            if (!idle() || ta.value.length >= LIM) break;
            ta.value += ch;
            sync();
            await wait(62);
          }
          await wait(2200);
          if (idle() && !ta.matches(':focus')) {
            ta.value = '';
            sync();
          }
        }
        await wait(1200);
      }
    })();
  },
  prompt: `Build a character counter as a small progress ring beside a textarea. Draw it as an SVG with two circles of r=11 (a track and a progress arc), rotate the SVG -90 degrees so the arc starts at the top, and set the arc to stroke-dasharray equal to the circumference (69.115) with stroke-dashoffset = circumference * (1 - length / limit), updated on every input event with a short 120ms linear transition and stroke-linecap round. Show the remaining count in the center of the ring at all times, and from 90 percent turn the arc and number red and give the ring a quick scale pulse. Set maxlength on the textarea, expose the count with aria-live polite throttled to the near-limit moments, and never rely on color alone: the number carries the warning. Dim the submit button while the field is empty. Animate stroke-dashoffset, transform and color only. Honor prefers-reduced-motion. Plain HTML/CSS/JS, no libraries.`,
});

})();
