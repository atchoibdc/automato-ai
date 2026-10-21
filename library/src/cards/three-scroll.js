// 3D scroll scenes (Three.js). Each card is a mini landing page: a hidden-scrollbar scroller on top,
// a WebGL canvas behind it, and short section copy that fades in step with what the 3D is doing.
// Three.js r186.
(() => {
  const CHEV =
    '<svg viewBox="0 0 24 24" width="8" height="8" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>';
  const page = (brand, secs, pos, extra) => {
    const n = secs.length;
    return (
      '<div class="bg"></div><div class="gl"></div>' +
      '<div class="copy">' +
      (extra || '') +
      secs
        .map((s) => `<div class="tx ${s.pos || pos}"><p class="k">${s.k}</p><h3>${s.h}</h3><p class="b">${s.p}</p></div>`)
        .join('') +
      '</div>' +
      `<div class="nav"><span class="lg"><i></i>${brand}</span><span class="nv"><b></b><b></b><b></b></span></div>` +
      '<div class="rail">' +
      secs.map((_, i) => `<i style="top:${(i / (n - 1)) * 100}%"></i>`).join('') +
      '<b></b></div>' +
      `<div class="hint">Scroll${CHEV}</div>` +
      '<div class="sc">' +
      secs.map(() => '<section></section>').join('') +
      '</div>'
    );
  };
  const callouts = (names) => names.map((n) => `<div class="cl"><i></i><u></u><span>${n}</span></div>`).join('');
  const BASE = `
.d{container-type:size;--halo:rgba(255,255,255,.9);--tc:var(--ml-ink);--tm:var(--ml-ink-2);--ac:var(--ml-accent);--rl:rgba(10,40,100,.14)}
.d .bg,.d .gl,.d .copy,.d .sc{position:absolute;inset:0}
.d .gl,.d .copy,.d .nav,.d .rail,.d .hint{pointer-events:none}
.d .gl canvas{display:block;width:100%;height:100%}
.d .sc{overflow-y:auto;overflow-x:hidden;scrollbar-width:none;overscroll-behavior:contain}
.d .sc::-webkit-scrollbar{display:none}
.d .sc section{height:100%}
.d .tx{position:absolute;max-width:54%;--o:0;--y:0px;color:var(--tc)}
.d .tx.bl{left:6.5%;bottom:9%}
.d .tx.tl{left:6.5%;top:16%;max-width:40%}
.d .tx.l{left:6.5%;top:0;bottom:0;max-width:38%;display:flex;flex-direction:column;justify-content:center}
.d .tx.r{right:9%;top:0;bottom:0;max-width:38%;display:flex;flex-direction:column;justify-content:center}
.d .tx.c{left:0;right:0;top:0;bottom:0;max-width:none;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}
.d .tx.tc{left:0;right:0;top:15%;max-width:none;text-align:center}
.d .tx .k{opacity:var(--o);transform:translate3d(0,var(--y),0);font:600 clamp(7px,2.5cqw,11px)/1 var(--ml-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--ac)}
.d .tx h3{margin-top:.6em;opacity:clamp(0,calc(var(--o)*1.5 - .25),1);transform:translate3d(0,calc(var(--y)*1.3),0);font:600 clamp(15px,6.2cqw,34px)/1.03 var(--ml-font);letter-spacing:-.045em}
.d .tx .b{margin-top:.7em;opacity:clamp(0,calc(var(--o)*2 - 1),1);transform:translate3d(0,calc(var(--y)*1.6),0);font:500 clamp(8.5px,3.2cqw,14px)/1.4 var(--ml-font);color:var(--tm)}
.d .tx .k,.d .tx h3,.d .tx .b{text-shadow:0 0 10px var(--halo),0 0 2px var(--halo)}
.d .nav{position:absolute;left:5.5%;right:5.5%;top:4.5%;display:flex;justify-content:space-between;align-items:center;color:var(--tc)}
.d .lg{display:flex;align-items:center;gap:5px;font:600 clamp(8px,2.8cqw,12px)/1 var(--ml-font);letter-spacing:-.02em}
.d .lg i{width:.95em;height:.95em;border-radius:32%;background:var(--ml-grad)}
.d .nv b{display:inline-block;width:12px;height:3px;margin-left:6px;border-radius:2px;background:currentColor;opacity:.22}
.d .rail{position:absolute;right:3.4%;top:50%;height:32%;width:2px;margin-top:-16%;border-radius:2px;background:var(--rl)}
.d .rail b{position:absolute;inset:0;border-radius:2px;background:var(--ml-accent);transform-origin:50% 0;transform:scaleY(0)}
.d .rail i{position:absolute;left:50%;width:6px;height:6px;margin:-3px 0 0 -3px;border-radius:50%;background:#fff;box-shadow:0 0 0 1.5px var(--rl);transition:transform .4s var(--ml-ease),background-color .3s}
.d .rail i.on{background:var(--ml-accent);box-shadow:0 0 0 1.5px var(--ml-accent);transform:scale(1.5)}
.d .hint{position:absolute;right:7%;bottom:6.5%;display:flex;align-items:center;gap:3px;font:600 clamp(6px,2cqw,9px)/1 var(--ml-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--tm);animation:mlHint 1.8s ease-in-out infinite}
@keyframes mlHint{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}
.d .cl{position:absolute;left:0;top:0;display:flex;align-items:center;opacity:0;white-space:nowrap;will-change:transform,opacity}
.d .cl.l{flex-direction:row-reverse}
.d .cl i{flex:none;width:5px;height:5px;border-radius:50%;background:var(--ml-accent);box-shadow:0 0 0 3px rgba(255,68,51,.2)}
.d .cl u{flex:none;display:block;width:clamp(10px,4.5cqw,22px);height:1px;background:var(--ml-accent)}
.d .cl span{padding:3px 7px;border-radius:999px;background:#fff;box-shadow:var(--ml-shadow);font:600 clamp(6.5px,2.3cqw,10px)/1 var(--ml-mono);letter-spacing:.02em;color:var(--ml-ink)}
`;
  const add = (o) => ML.add(Object.assign({ cat: 'three-scroll', libs: ['three'] }, o));

  // ---------------------------------------------------------------- 1 tunnel
  add({
    id: 'three-scroll-tunnel',
    title: 'Ring tunnel flythrough',
    sub: 'Scroll flies the camera through rings',
    html: page(
      'Velocity',
      [
        { k: '01 / Enter', h: 'Step into the flow.', p: 'One scroll carries you through.' },
        { k: '02 / Capture', h: 'Every signal, one lane.', p: 'Rings mark each stage you pass.' },
        { k: '03 / Shape', h: 'Structure appears ahead.', p: 'Nothing loads. It is already there.' },
        { k: '04 / Ship', h: 'Straight to launch.', p: 'The path clears as you move.' },
        { k: '05 / Arrive', h: 'You are through.', p: 'Same scroll, whole journey.' },
      ],
      'c',
    ),
    css:
      BASE +
      `
.d{--tc:#fff;--tm:rgba(255,255,255,.84);--ac:#d4e6ff;--rl:rgba(255,255,255,.3);background:#2f7cf5}
.d .bg{background:radial-gradient(58% 58% at 50% 50%,#4a98ff 0%,#2f7cf5 52%,#1357d6 100%)}
.d{--halo:transparent}
.d .tx h3{text-shadow:0 2px 26px rgba(4,40,120,.4)}
.d .tx .b{text-shadow:0 1px 14px rgba(4,40,120,.4)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 64;
      scene.fog = new THREE.Fog(0x2f7cf5, 7, 44);
      scene.environmentIntensity = 1;
      const S = 3;
      const NR = 38;
      const GATE = [2, 9, 16, 23, 30];
      const ringGeo = new THREE.TorusGeometry(2.5, 0.06, 8, 8);
      const ringMat = new THREE.MeshStandardMaterial({ color: 0xf2f7ff, roughness: 0.25, metalness: 0.75 });
      const rings = new THREE.InstancedMesh(ringGeo, ringMat, NR);
      rings.frustumCulled = false;
      scene.add(rings);
      const gateGeo = new THREE.TorusGeometry(2.7, 0.09, 14, 64);
      const gates = GATE.map((k) => {
        const m = new THREE.Mesh(
          gateGeo,
          new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xaed0ff, emissiveIntensity: 0.3, roughness: 0.2, metalness: 0.2 }),
        );
        m.position.z = -k * S;
        scene.add(m);
        return m;
      });
      const NP = 700;
      const pa = new Float32Array(NP * 3);
      for (let i = 0; i < NP; i++) {
        const a = rnd() * Math.PI * 2;
        const r = 0.4 + rnd() * 2.0;
        pa[i * 3] = Math.cos(a) * r;
        pa[i * 3 + 1] = Math.sin(a) * r;
        pa[i * 3 + 2] = 4 - rnd() * 120;
      }
      const dotC = mkCanvas(64, 64);
      {
        const g = dotC.getContext('2d');
        g.fillStyle = '#fff';
        g.beginPath();
        g.arc(32, 32, 28, 0, 6.283);
        g.fill();
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.BufferAttribute(pa, 3));
      const pts = new THREE.Points(
        pg,
        new THREE.PointsMaterial({ color: 0xffffff, size: 0.07, map: tex(dotC), alphaTest: 0.4, transparent: true, opacity: 0.85, depthWrite: false }),
      );
      pts.frustumCulled = false;
      scene.add(pts);
      const d = new THREE.Object3D();
      const update = (p, s, dt, idx) => {
        for (let k = 0; k < NR; k++) {
          const gate = GATE.indexOf(k) >= 0;
          d.position.set(0, 0, -k * S);
          d.rotation.set(0, 0, k * 0.2 + p * 3 + s * 0.04);
          d.scale.setScalar(gate ? 0.0001 : 1 + 0.1 * Math.sin(k * 0.9));
          d.updateMatrix();
          rings.setMatrixAt(k, d.matrix);
        }
        rings.instanceMatrix.needsUpdate = true;
        gates.forEach((g, i) => {
          const near = 1 - sm(0.1, 1.1, Math.abs(idx - i));
          g.material.emissiveIntensity = 0.25 + 1.1 * near;
          g.scale.setScalar(1 + 0.05 * near);
          g.rotation.z = s * 0.25 + i;
        });
        const z = 3 - p * 84;
        camera.position.set(Math.sin(p * 7) * 0.3, Math.cos(p * 5.5) * 0.2, z);
        camera.lookAt(Math.sin(p * 7 + 0.5) * 0.3, Math.cos(p * 5.5 + 0.4) * 0.2, z - 9);
        camera.rotateZ(Math.sin(p * 6.283) * 0.14);
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a scroll-driven camera flythrough with Three.js. Make a section about 500vh tall with a sticky full-viewport canvas behind it and short headline blocks that fade in one per screen. In the scene, place about 35 octagonal rings (TorusGeometry with 8 tubular segments, metallic white MeshStandardMaterial, an InstancedMesh) every 3 units along -z, twist each ring a little more than the last, and add a thicker glowing "gate" ring for each headline. Use scene.fog in your accent blue so far rings melt away, plus a few hundred white Points as speed cues. Light with RoomEnvironment through PMREMGenerator. Read progress = scrollY / (scrollHeight - innerHeight) every frame and lerp a smoothed value toward it (1 - exp(-dt * 5)) so the move glides. Drive camera.position.z from the smoothed progress, add a small sine sway on x and y, lookAt a point 9 units ahead, and add a gentle roll. Raise each gate's emissiveIntensity as the camera nears it and fade its headline in with opacity plus a 24px translate. Keep the camera and copy in sync by deriving both from the same progress. Respect prefers-reduced-motion by jumping between gates instead of flying, and dispose geometries and materials on unmount.`,
  });

  // ---------------------------------------------------------------- 2 exploded view
  add({
    id: 'three-scroll-exploded-view',
    title: 'Exploded product view',
    sub: 'Layers part, labelled, then reassemble',
    html: page(
      'Halo',
      [
        { k: '01 / Assembled', h: 'One slab of glass.', p: 'Five layers that feel like one.' },
        { k: '02 / Glass + display', h: 'Edge to edge.', p: 'A sealed cover over a sharp panel.' },
        { k: '03 / Logic', h: 'All the thinking, flat.', p: 'The board is thinner than a card.' },
        { k: '04 / Power', h: 'A full day, then some.', p: 'The cell sits low for balance.' },
        { k: '05 / Together', h: 'Whole again.', p: 'Everything snaps back in place.' },
      ],
      'tl',
      callouts(['Cover glass', 'Display', 'Logic board', 'Battery']),
    ),
    css:
      BASE +
      `
.d .bg{background:radial-gradient(70% 62% at 66% 52%,#e1edff 0%,#f4f8ff 58%,#fff 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 30;
      camera.position.set(0, 0.2, 11);
      scene.environmentIntensity = 1.1;
      const spin = new THREE.Group();
      const dev = new THREE.Group();
      dev.rotation.x = -1.1;
      spin.add(dev);
      scene.add(spin);
      const DW = 1.7;
      const DH = 3.4;
      const layers = [];
      const addLayer = (z0) => {
        const g = new THREE.Group();
        g.userData.z0 = z0;
        g.position.z = z0;
        dev.add(g);
        layers.push(g);
        return g;
      };
      const put = (parent, geo, mat, x, y, z) => {
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y, z);
        parent.add(m);
        return m;
      };
      // 0 cover glass
      const cover = addLayer(0.17);
      put(
        cover,
        new RoundedBoxGeometry(DW, DH, 0.03, 3, 0.22),
        new THREE.MeshPhysicalMaterial({ color: 0xffffff, transparent: true, opacity: 0.26, roughness: 0.04, metalness: 0, clearcoat: 1, depthWrite: false }),
        0,
        0,
        0,
      ).renderOrder = 5;
      // 1 display
      const disp = addLayer(0.11);
      put(disp, new RoundedBoxGeometry(DW - 0.05, DH - 0.05, 0.05, 3, 0.2), new THREE.MeshStandardMaterial({ color: 0x0b1a3a, roughness: 0.25, metalness: 0.5 }), 0, 0, 0);
      const uiC = mkCanvas(256, 512);
      const uiT = tex(uiC);
      whenFonts(() => {
        const g = uiC.getContext('2d');
        g.clearRect(0, 0, 256, 512);
        rr(g, 0, 0, 256, 512, 34);
        g.save();
        g.clip();
        const gr = g.createLinearGradient(0, 0, 256, 512);
        gr.addColorStop(0, '#FFF0ED');
        gr.addColorStop(1, '#FF4433');
        g.fillStyle = gr;
        g.fillRect(0, 0, 256, 512);
        g.fillStyle = 'rgba(255,255,255,.88)';
        g.beginPath();
        g.arc(190, 170, 34, 0, 6.283);
        g.fill();
        g.fillStyle = 'rgba(255,255,255,.32)';
        g.beginPath();
        g.moveTo(0, 340);
        g.lineTo(90, 240);
        g.lineTo(170, 320);
        g.lineTo(256, 230);
        g.lineTo(256, 512);
        g.lineTo(0, 512);
        g.fill();
        g.font = '600 56px Geist, system-ui, sans-serif';
        g.textAlign = 'center';
        g.fillStyle = '#fff';
        g.fillText('9:41', 128, 96);
        rr(g, 18, 392, 104, 64, 16);
        g.fillStyle = 'rgba(255,255,255,.72)';
        g.fill();
        rr(g, 134, 392, 104, 64, 16);
        g.fill();
        g.restore();
        uiT.needsUpdate = true;
      });
      put(disp, new THREE.PlaneGeometry(DW - 0.14, DH - 0.16), new THREE.MeshBasicMaterial({ map: uiT, transparent: true, toneMapped: false }), 0, 0, 0.0262);
      // 2 logic board
      const board = addLayer(0.05);
      put(board, new RoundedBoxGeometry(DW - 0.2, DH - 0.3, 0.04, 2, 0.1), new THREE.MeshStandardMaterial({ color: 0xf4f7fd, roughness: 0.6 }), 0, 0, 0);
      const bC = mkCanvas(256, 512);
      {
        const g = bC.getContext('2d');
        g.fillStyle = '#f4f7fd';
        g.fillRect(0, 0, 256, 512);
        g.strokeStyle = '#a9c8ff';
        g.lineWidth = 2;
        for (let i = 0; i < 26; i++) {
          let x = 14 + rnd() * 228;
          let y = 14 + rnd() * 480;
          g.beginPath();
          g.moveTo(x, y);
          for (let j = 0; j < 3; j++) {
            if (j % 2) x = 14 + rnd() * 228;
            else y = 14 + rnd() * 480;
            g.lineTo(x, y);
          }
          g.stroke();
          g.fillStyle = '#7fb0ff';
          g.beginPath();
          g.arc(x, y, 4, 0, 6.283);
          g.fill();
        }
      }
      put(board, new THREE.PlaneGeometry(DW - 0.26, DH - 0.36), new THREE.MeshStandardMaterial({ map: tex(bC), roughness: 0.7 }), 0, 0, 0.0205);
      const chipMat = new THREE.MeshStandardMaterial({ color: 0x2a3550, roughness: 0.35, metalness: 0.8 });
      put(board, new THREE.BoxGeometry(0.55, 0.55, 0.06), chipMat, 0, 0.55, 0.05);
      put(board, new THREE.BoxGeometry(0.3, 0.24, 0.05), chipMat, -0.36, -0.45, 0.045);
      put(board, new THREE.BoxGeometry(0.3, 0.3, 0.05), new THREE.MeshStandardMaterial({ color: 0x0a6cff, roughness: 0.3, metalness: 0.4 }), 0.34, -0.72, 0.045);
      put(board, new THREE.BoxGeometry(0.18, 0.18, 0.04), chipMat, 0.4, -0.15, 0.04);
      // 3 battery
      const batt = addLayer(-0.02);
      put(batt, new RoundedBoxGeometry(DW - 0.55, DH - 1.3, 0.07, 2, 0.1), new THREE.MeshStandardMaterial({ color: 0xdde5f2, roughness: 0.3, metalness: 0.85 }), 0, 0, 0);
      const lC = mkCanvas(128, 256);
      {
        const g = lC.getContext('2d');
        rr(g, 0, 0, 128, 256, 22);
        const gr = g.createLinearGradient(0, 0, 128, 256);
        gr.addColorStop(0, '#FF7A3D');
        gr.addColorStop(1, '#FF4433');
        g.fillStyle = gr;
        g.fill();
        g.fillStyle = '#fff';
        g.beginPath();
        g.moveTo(76, 40);
        g.lineTo(34, 142);
        g.lineTo(62, 142);
        g.lineTo(50, 218);
        g.lineTo(96, 108);
        g.lineTo(66, 108);
        g.closePath();
        g.fill();
      }
      put(batt, new THREE.PlaneGeometry(DW - 0.9, DH - 1.75), new THREE.MeshBasicMaterial({ map: tex(lC), transparent: true, toneMapped: false }), 0, 0, 0.0362);
      // 4 chassis
      const chas = addLayer(-0.11);
      put(chas, new RoundedBoxGeometry(DW, DH, 0.1, 4, 0.24), new THREE.MeshPhysicalMaterial({ color: 0x1d63ea, roughness: 0.3, metalness: 0.55, clearcoat: 0.6 }), 0, 0, 0);
      const labels = [...root.querySelectorAll('.cl')];
      const sides = [1, 1, 1, 1];
      const wp = new THREE.Vector3();
      onSize = () => {
        spin.position.x = 0.1 * halfW(11);
        spin.scale.setScalar(0.9);
      };
      const update = (p, s, dt, idx) => {
        const e = kf(p, [0, 1, 1, 1, 0], 0.14);
        const G = 0.68;
        layers.forEach((g, i) => {
          g.position.z = g.userData.z0 + (2 - i) * G * e;
        });
        spin.rotation.y = kf(p, [-0.5, -0.55, -0.1, 0.35, 0.5]);
        dev.rotation.x = kf(p, [-1.1, -1.0, -1.1, -1.2, -1.1]);
        spin.position.y = Math.sin(s * 1.1) * 0.05 + 0.1;
        spin.updateMatrixWorld(true);
        camera.updateMatrixWorld();
        labels.forEach((el, i) => {
          wp.set(DW * 0.5 - 0.1, DH * 0.34, layers[i].position.z);
          dev.localToWorld(wp);
          wp.project(camera);
          const x = (wp.x * 0.5 + 0.5) * W;
          const y = (-wp.y * 0.5 + 0.5) * H;
          const f = i < 2 ? 1 - sm(0.3, 1, Math.abs(idx - 1)) : 1 - sm(0.3, 1, Math.abs(idx - (i === 2 ? 2 : 3)));
          el.style.opacity = (sm(0.55, 0.95, e) * (0.35 + 0.65 * f)).toFixed(3);
          el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)' + (sides[i] < 0 ? ' translateX(-100%)' : '');
        });
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an exploded product view driven by scroll with Three.js. Model a phone-sized device as five stacked layers: a transparent cover glass (MeshPhysicalMaterial, opacity 0.25, clearcoat 1, depthWrite false), a dark display slab with a canvas texture on its face, a pale logic board with a canvas trace pattern and a few metal chip boxes, a silver battery, and a blue metallic chassis, all RoundedBoxGeometry. Group them, tilt the group back about 1.1 radians so the stack reads from above, and light it with RoomEnvironment. Compute progress from the scroll container, smooth it with a lerp, and map it to an explode amount with a held plateau: 0 at the first section, 1 through the middle sections, 0 at the end. Offset each layer on its local z by (2 - index) * 0.68 * explode so the stack fans out, rotate the whole device a little per section, and reassemble at the end. Add HTML callouts: project an anchor on each layer with vector.project(camera), place a dot, a 1px leader line and a pill label at that pixel, and brighten the label that belongs to the current section. Fade section copy in sync. Dispose everything on unmount.`,
  });

  // ---------------------------------------------------------------- 3 morph sections
  add({
    id: 'three-scroll-morph-sections',
    title: 'Shape per section',
    sub: 'One object morphs sphere, torus, cube',
    html: page(
      'Form',
      [
        { k: '01 / Sphere', h: 'Start simple.', p: 'One form. No edges, no noise.' },
        { k: '02 / Torus', h: 'Open it up.', p: 'A hole turns a ball into a ring.' },
        { k: '03 / Cube', h: 'Give it structure.', p: 'Hard corners, same material.' },
      ],
      'l',
    ),
    css:
      BASE +
      `
.d .bg{background:radial-gradient(60% 60% at 68% 48%,#e4efff 0%,#f6f9ff 60%,#fff 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 32;
      camera.position.set(0, 0.3, 6.4);
      camera.lookAt(0, 0.1, 0);
      scene.environmentIntensity = 1.15;
      const rig = new THREE.Group();
      scene.add(rig);
      const geo = new THREE.SphereGeometry(1, 96, 64);
      const posA = geo.attributes.position;
      const norA = geo.attributes.normal;
      const n = posA.count;
      const sp = Float32Array.from(posA.array);
      const sn = Float32Array.from(norA.array);
      const tp = new Float32Array(n * 3);
      const tn = new Float32Array(n * 3);
      const cp = new Float32Array(n * 3);
      const cn = new Float32Array(n * 3);
      const R = 0.82;
      const rt = 0.36;
      const EXP = 6;
      const half = 0.86;
      for (let i = 0; i < n; i++) {
        const x = sp[i * 3];
        const y = sp[i * 3 + 1];
        const z = sp[i * 3 + 2];
        let uu = geo.attributes.uv.getX(i);
        if (Math.abs(y) > 0.9999) uu = Math.round(uu * 96 - 0.5) / 96;
        const lon = Math.PI - 2 * Math.PI * uu;
        const v = -Math.acos(Math.max(-1, Math.min(1, y))) * 2;
        const cu = Math.cos(lon);
        const su = Math.sin(lon);
        const cv = Math.cos(v);
        const sv = Math.sin(v);
        tp[i * 3] = (R + rt * cv) * cu;
        tp[i * 3 + 1] = rt * sv;
        tp[i * 3 + 2] = (R + rt * cv) * su;
        tn[i * 3] = cv * cu;
        tn[i * 3 + 1] = sv;
        tn[i * 3 + 2] = cv * su;
        const k = Math.pow(Math.pow(Math.abs(x), EXP) + Math.pow(Math.abs(y), EXP) + Math.pow(Math.abs(z), EXP), 1 / EXP) || 1;
        const qx = (x / k) * half;
        const qy = (y / k) * half;
        const qz = (z / k) * half;
        cp[i * 3] = qx;
        cp[i * 3 + 1] = qy;
        cp[i * 3 + 2] = qz;
        const nx = Math.sign(qx) * Math.pow(Math.abs(qx / half), EXP - 1);
        const ny = Math.sign(qy) * Math.pow(Math.abs(qy / half), EXP - 1);
        const nz = Math.sign(qz) * Math.pow(Math.abs(qz / half), EXP - 1);
        const nl = Math.hypot(nx, ny, nz) || 1;
        cn[i * 3] = nx / nl;
        cn[i * 3 + 1] = ny / nl;
        cn[i * 3 + 2] = nz / nl;
      }
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0x8fc0ff,
        roughness: 0.16,
        metalness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        iridescence: 0.5,
        iridescenceIOR: 1.35,
        sheen: 0.4,
        sheenColor: 0xdbe9ff,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      rig.add(mesh);
      const ringMat = new THREE.MeshBasicMaterial({ color: 0xb9d4ff, transparent: true, opacity: 0.7, depthWrite: false });
      const ring1 = new THREE.Mesh(new THREE.RingGeometry(1.95, 1.965, 128), ringMat);
      const ring2 = new THREE.Mesh(new THREE.RingGeometry(2.6, 2.612, 128), ringMat);
      ring1.position.z = -1.2;
      ring2.position.z = -1.8;
      rig.add(ring1, ring2);
      const sh = blob(3.4, 1.1, 0.34);
      sh.position.y = -1.55;
      rig.add(sh);
      const c0 = new THREE.Color(0x8fc0ff);
      const c1 = new THREE.Color(0x4f9bff);
      const c2 = new THREE.Color(0x0a6cff);
      let lastS = -1;
      onSize = () => {
        rig.position.x = 0.3 * halfW(6.4);
      };
      const update = (p, s, dt, idx) => {
        const s2 = kf(p, [0, 1, 2], 0.2);
        if (Math.abs(s2 - lastS) > 0.0005) {
          lastS = s2;
          const w0 = 1 - Math.min(s2, 1);
          const w1 = s2 <= 1 ? s2 : 2 - s2;
          const w2 = Math.max(s2 - 1, 0);
          const pa = posA.array;
          const na = norA.array;
          for (let i = 0; i < n * 3; i++) {
            pa[i] = sp[i] * w0 + tp[i] * w1 + cp[i] * w2;
            na[i] = sn[i] * w0 + tn[i] * w1 + cn[i] * w2;
          }
          posA.needsUpdate = true;
          norA.needsUpdate = true;
        }
        if (s2 < 1) mat.color.lerpColors(c0, c1, s2);
        else mat.color.lerpColors(c1, c2, s2 - 1);
        mesh.rotation.y = kf(p, [0.3, 3.1, 6.7]) + s * 0.1;
        mesh.rotation.x = kf(p, [0.2, 1.1, 0.45]);
        mesh.position.y = Math.sin(s * 1.1) * 0.06;
        sh.material.opacity = 0.9 - mesh.position.y;
        ring1.scale.setScalar(1 + 0.1 * idx + Math.sin(s * 0.8) * 0.01);
        ring2.scale.setScalar(1 + 0.06 * idx);
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a scroll-driven shape morph with Three.js: one glossy object that becomes a sphere, then a torus, then a cube as the visitor scrolls through three sections. Start from a high-resolution SphereGeometry (96 by 64) and precompute three position arrays and three normal arrays, one per shape, using the same vertex order: the sphere itself, a torus (longitude becomes the ring angle, latitude times two becomes the tube angle), and a superellipsoid cube (divide each direction by the sixth-power norm, scale by 0.86). Use analytic normals for each shape so shading stays smooth. Each frame compute a section value 0..2 from smoothed scroll progress with a held plateau at each integer, blend the three arrays with weights, write them into the geometry attributes, and set needsUpdate. Lerp the material color through three blues and rotate the mesh with the same progress. Use MeshPhysicalMaterial with clearcoat 1, a little iridescence, and RoomEnvironment lighting. Fade each section headline in and out with the same value, and shift the canvas content to the side so the copy has room. Dispose the geometry and material on unmount.`,
  });

  // ---------------------------------------------------------------- 4 feature callouts
  add({
    id: 'three-scroll-feature-callouts',
    title: 'Turntable with callouts',
    sub: 'Product turns to each feature',
    html: page(
      'Aero',
      [
        { k: '01 / Aero Max', h: 'Sound, shaped.', p: 'Over-ear, built around the listener.' },
        { k: '02 / Quiet', h: 'Hear only the music.', p: 'Adaptive noise cancelling on both cups.' },
        { k: '03 / Build', h: 'Light, never fragile.', p: 'A titanium band that flexes and returns.' },
        { k: '04 / Battery', h: 'A week per charge.', p: 'Eighty hours, topped up by USB-C.' },
      ],
      'bl',
      callouts(['Noise cancelling', 'Titanium band', '80 hour battery']),
    ),
    css:
      BASE +
      `
.d .bg{background:radial-gradient(60% 62% at 50% 40%,#e3eeff 0%,#f5f9ff 58%,#fff 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 32;
      camera.position.set(0, 0.4, 8.6);
      camera.lookAt(0, 0.2, 0);
      scene.environmentIntensity = 1.1;
      const prod = new THREE.Group();
      scene.add(prod);
      const shell = new THREE.MeshPhysicalMaterial({ color: 0x2f6bff, roughness: 0.25, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 });
      const metal = new THREE.MeshStandardMaterial({ color: 0xe9eef8, roughness: 0.26, metalness: 1 });
      const soft = new THREE.MeshStandardMaterial({ color: 0xf4f7ff, roughness: 0.85 });
      const band = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.066, 16, 96, Math.PI), metal);
      prod.add(band);
      const pad = new THREE.Mesh(new THREE.TorusGeometry(1.14, 0.1, 12, 48, 1.1), soft);
      pad.rotation.z = Math.PI / 2 - 0.55;
      pad.position.z = 0;
      prod.add(pad);
      const prof = [
        [0, -0.1],
        [0.5, -0.1],
        [0.53, -0.04],
        [0.52, 0.06],
        [0.46, 0.17],
        [0.34, 0.26],
        [0.18, 0.295],
        [0, 0.3],
      ].map((q) => new THREE.Vector2(q[0], q[1]));
      const cupGeo = new THREE.LatheGeometry(prof, 56);
      const cushGeo = new THREE.TorusGeometry(0.4, 0.14, 16, 44);
      const discGeo = new THREE.CircleGeometry(0.3, 40);
      const softDisc = new THREE.MeshPhysicalMaterial({ color: 0xf4f8ff, roughness: 0.35, metalness: 0.2, clearcoat: 0.5 });
      const rimGeo = new THREE.TorusGeometry(0.3, 0.014, 8, 48);
      const yokeGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.36, 12);
      [1, -1].forEach((sd) => {
        const cup = new THREE.Mesh(cupGeo, shell);
        cup.position.set(sd * 1.28, -0.28, 0);
        cup.rotation.z = -sd * (Math.PI / 2);
        prod.add(cup);
        const cush = new THREE.Mesh(cushGeo, soft);
        cush.rotation.y = Math.PI / 2;
        cush.position.set(sd * 1.1, -0.28, 0);
        prod.add(cush);
        const disc = new THREE.Mesh(discGeo, softDisc);
        disc.rotation.y = sd * (Math.PI / 2);
        disc.position.set(sd * 1.592, -0.28, 0);
        prod.add(disc);
        const rim = new THREE.Mesh(rimGeo, new THREE.MeshBasicMaterial({ color: 0x0a6cff }));
        rim.rotation.y = sd * (Math.PI / 2);
        rim.position.set(sd * 1.594, -0.28, 0);
        prod.add(rim);
        const yoke = new THREE.Mesh(yokeGeo, metal);
        yoke.position.set(sd * 1.22, -0.1, 0);
        yoke.rotation.z = sd * 0.1;
        prod.add(yoke);
      });
      const sh = blob(3.6, 1.2, 0.3);
      sh.position.y = -1.25;
      const labels = [...root.querySelectorAll('.cl')];
      const sides = [1, 1, 1];
      const anchors = [new THREE.Vector3(1.6, -0.28, 0), new THREE.Vector3(0, 1.27, 0), new THREE.Vector3(-1.6, -0.5, 0)];
      const wp = new THREE.Vector3();
      const update = (p, s, dt, idx) => {
        prod.rotation.y = kf(p, [-0.5, -1.4, 0.12, 1.5], 0.14);
        prod.rotation.x = kf(p, [0.1, 0.02, 0.62, -0.05], 0.14);
        prod.position.y = -0.1 + Math.sin(s * 1.1) * 0.05;
        prod.scale.setScalar(kf(p, [0.9, 0.95, 0.95, 0.95]));
        prod.position.x = 0.2 * halfW(8.6);
        sh.material.opacity = 0.9;
        prod.updateMatrixWorld(true);
        camera.updateMatrixWorld();
        labels.forEach((el, i) => {
          wp.copy(anchors[i]);
          prod.localToWorld(wp);
          wp.project(camera);
          const x = (wp.x * 0.5 + 0.5) * W;
          const y = (-wp.y * 0.5 + 0.5) * H;
          const f = 1 - sm(0.15, 0.6, Math.abs(idx - (i + 1)));
          el.style.opacity = f.toFixed(3);
          el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px)' + (sides[i] < 0 ? ' translateX(-100%)' : '');
          el.classList.toggle('l', sides[i] < 0);
        });
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a scroll-driven product turntable with callouts using Three.js. Assemble a pair of over-ear headphones from primitives: a half TorusGeometry headband in brushed metal, two LatheGeometry ear cups in glossy blue (MeshPhysicalMaterial with clearcoat), torus cushions, circular metal face plates, and small cylinder yokes. Light with RoomEnvironment and add a soft radial-gradient contact shadow plane. Make the canvas sticky and the page four sections tall. For each section define keyframes for rotation.y, rotation.x and scale (hero three-quarter view, right cup face-on, top of the band, left cup face-on) and interpolate between them with a smootherstep that holds briefly at each key, using a lerped scroll progress. Add HTML callouts: store a local anchor point per feature, convert it with object.localToWorld, project it with vector.project(camera), and place a dot, a short 1px leader line and a pill label at that screen position, fading it in only while its section is active. Keep the section headline fading in step with the rotation. Respect prefers-reduced-motion and dispose geometries and materials on unmount.`,
  });

  // ---------------------------------------------------------------- 5 depth layers
  add({
    id: 'three-scroll-depth-layers',
    title: 'Depth parallax planes',
    sub: 'Cards at many depths slide past you',
    html: page(
      'Strata',
      [
        { k: '01 / Depth', h: 'Layers with real depth.', p: 'Every card sits at its own distance.' },
        { k: '02 / Near', h: 'Close things move fast.', p: 'Parallax comes free from the camera.' },
        { k: '03 / Far', h: 'Distant things drift.', p: 'Fog fades them into the page.' },
        { k: '04 / Weave', h: 'Fly between them.', p: 'The path bends around each card.' },
        { k: '05 / Land', h: 'Land on the last one.', p: 'The scene settles where you stop.' },
      ],
      'bl',
    ),
    css:
      BASE +
      `
.d .bg{background:linear-gradient(180deg,#f8fbff 0%,#eaf2ff 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      const drawUI = (g, kind, w, h) => {
        const BL = '#FF4433';
        const BG = '#E2D6CC';
        const BG2 = '#EFE7E0';
        const INK = '#1D1D1F';
        const MU = '#86868B';
        const F = 'Geist, system-ui, sans-serif';
        g.setTransform(1, 0, 0, 1, 0, 0);
        g.clearRect(0, 0, w, h);
        g.scale(w / 320, h / 224);
        const bar = (x, y, bw, bh, c) => {
          rr(g, x, y, bw, bh, bh / 2);
          g.fillStyle = c;
          g.fill();
        };
        const txt = (s, x, y, font, c, al) => {
          g.font = font;
          g.fillStyle = c;
          g.textAlign = al || 'left';
          g.textBaseline = 'alphabetic';
          g.fillText(s, x, y);
        };
        rr(g, 4, 4, 312, 216, 22);
        g.fillStyle = '#fff';
        g.fill();
        g.lineWidth = 2;
        g.strokeStyle = '#EAE1D9';
        g.stroke();
        g.save();
        rr(g, 4, 4, 312, 216, 22);
        g.clip();
        const k = kind % 8;
        if (k === 0) {
          rr(g, 22, 24, 44, 44, 13);
          g.fillStyle = BL;
          g.fill();
          g.strokeStyle = '#fff';
          g.lineWidth = 4;
          g.lineCap = 'round';
          g.lineJoin = 'round';
          g.beginPath();
          g.moveTo(35, 46);
          g.lineTo(42, 53);
          g.lineTo(54, 39);
          g.stroke();
          txt('Payment received', 78, 42, '600 19px ' + F, INK);
          txt('Invoice 2048 from Maya R.', 78, 62, '500 13px ' + F, MU);
          bar(22, 96, 276, 1.5, BG);
          txt('Amount', 22, 128, '500 13px ' + F, MU);
          txt('$1,280.00', 22, 172, '600 44px ' + F, INK);
          bar(22, 190, 90, 10, BG2);
          bar(210, 150, 88, 28, '#FFF0EE');
          txt('Paid', 254, 169, '600 13px ' + F, '#B3150F', 'center');
        } else if (k === 1) {
          txt('October', 24, 44, '600 22px ' + F, INK);
          bar(250, 28, 48, 20, '#FFF0EE');
          const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
          for (let c = 0; c < 7; c++) txt(days[c], 36 + c * 41, 72, '600 11px ' + F, MU, 'center');
          for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 7; c++) {
              const n = r * 7 + c + 1;
              const on = n === 17;
              if (on) {
                rr(g, 36 + c * 41 - 17, 84 + r * 32, 34, 28, 10);
                g.fillStyle = BL;
                g.fill();
              } else if (n === 9 || n === 23) {
                rr(g, 36 + c * 41 - 17, 84 + r * 32, 34, 28, 10);
                g.fillStyle = '#FFF0EE';
                g.fill();
              }
              txt(String(n), 36 + c * 41, 103 + r * 32, '600 13px ' + F, on ? '#fff' : INK, 'center');
            }
          }
        } else if (k === 2) {
          rr(g, 22, 24, 170, 40, 16);
          g.fillStyle = BG2;
          g.fill();
          txt('Is the file ready?', 38, 50, '500 14px ' + F, INK);
          rr(g, 120, 78, 178, 40, 16);
          g.fillStyle = BL;
          g.fill();
          txt('Shipping it today', 136, 104, '500 14px ' + F, '#fff');
          rr(g, 22, 132, 130, 40, 16);
          g.fillStyle = BG2;
          g.fill();
          txt('Perfect, thanks', 38, 158, '500 14px ' + F, INK);
          bar(22, 188, 190, 14, '#fff');
          rr(g, 22, 186, 276, 22, 11);
          g.strokeStyle = BG;
          g.lineWidth = 1.5;
          g.stroke();
          bar(34, 195, 70, 5, BG);
        } else if (k === 3) {
          txt('Visitors', 24, 40, '500 14px ' + F, MU);
          txt('48.2k', 24, 84, '600 42px ' + F, INK);
          bar(188, 52, 76, 28, '#FFF0EE');
          txt('+12.4%', 226, 71, '600 13px ' + F, '#B3150F', 'center');
          const pts = [0.7, 0.55, 0.62, 0.4, 0.46, 0.3, 0.34, 0.15];
          g.beginPath();
          pts.forEach((v, i) => {
            const x = 24 + (i / 7) * 272;
            const y = 104 + v * 96;
            if (i) g.lineTo(x, y);
            else g.moveTo(x, y);
          });
          g.lineWidth = 3.5;
          g.lineJoin = 'round';
          g.strokeStyle = BL;
          g.stroke();
          g.lineTo(296, 212);
          g.lineTo(24, 212);
          g.closePath();
          const gr = g.createLinearGradient(0, 110, 0, 212);
          gr.addColorStop(0, 'rgba(255,68,51,.22)');
          gr.addColorStop(1, 'rgba(255,68,51,0)');
          g.fillStyle = gr;
          g.fill();
        } else if (k === 4) {
          const rows = ['Notifications', 'Dark mode', 'Auto-save'];
          rows.forEach((s, i) => {
            const y = 36 + i * 60;
            txt(s, 24, y + 22, '600 16px ' + F, INK);
            bar(24, y + 32, 120, 6, BG2);
            const on = i !== 1;
            rr(g, 238, y + 6, 60, 32, 16);
            g.fillStyle = on ? BL : BG;
            g.fill();
            g.beginPath();
            g.arc(on ? 282 : 254, y + 22, 12, 0, 6.283);
            g.fillStyle = '#fff';
            g.fill();
          });
        } else if (k === 5) {
          const gr = g.createLinearGradient(24, 24, 84, 84);
          gr.addColorStop(0, '#FF7A3D');
          gr.addColorStop(1, BL);
          g.beginPath();
          g.arc(56, 62, 32, 0, 6.283);
          g.fillStyle = gr;
          g.fill();
          txt('M', 56, 74, '600 32px ' + F, '#fff', 'center');
          txt('Maya Reyes', 104, 58, '600 22px ' + F, INK);
          txt('Product designer', 104, 80, '500 14px ' + F, MU);
          bar(22, 118, 276, 1.5, BG);
          ['128', '4.9', '36'].forEach((s, i) => {
            txt(s, 22 + i * 96, 160, '600 28px ' + F, INK);
            bar(22 + i * 96, 176, 54, 7, BG2);
          });
        } else if (k === 6) {
          const rows = ['Review the brief', 'Send the invoice', 'Book Tomas call'];
          rows.forEach((s, i) => {
            const y = 30 + i * 58;
            rr(g, 24, y + 4, 28, 28, 9);
            g.fillStyle = i === 0 ? BL : '#fff';
            g.fill();
            g.lineWidth = 2;
            g.strokeStyle = i === 0 ? BL : BG;
            g.stroke();
            if (i === 0) {
              g.strokeStyle = '#fff';
              g.lineWidth = 3.5;
              g.lineCap = 'round';
              g.beginPath();
              g.moveTo(31, y + 18);
              g.lineTo(36, y + 23);
              g.lineTo(45, y + 12);
              g.stroke();
            }
            txt(s, 66, y + 24, '600 17px ' + F, i === 0 ? MU : INK);
            if (i === 0) bar(66, y + 17, 150, 2, MU);
          });
        } else {
          const gr = g.createLinearGradient(0, 0, 0, 150);
          gr.addColorStop(0, '#FFF0ED');
          gr.addColorStop(1, '#F1F6FF');
          g.fillStyle = gr;
          g.fillRect(4, 4, 312, 150);
          g.beginPath();
          g.arc(232, 66, 22, 0, 6.283);
          g.fillStyle = '#fff';
          g.fill();
          g.fillStyle = '#9FC4FF';
          g.beginPath();
          g.moveTo(4, 154);
          g.lineTo(4, 112);
          g.lineTo(80, 60);
          g.lineTo(140, 108);
          g.lineTo(196, 80);
          g.lineTo(316, 140);
          g.lineTo(316, 154);
          g.fill();
          txt('Golden hour', 22, 188, '600 18px ' + F, INK);
          bar(22, 198, 100, 6, BG2);
        }
        g.restore();
      };
      const uiTex = (kind) => {
        const c = mkCanvas(640, 448);
        const t = tex(c);
        whenFonts(() => {
          drawUI(c.getContext('2d'), kind, 640, 448);
          t.needsUpdate = true;
        });
        return t;
      };
      camera.fov = 38;
      scene.fog = new THREE.Fog(0xeff5ff, 7, 24);
      scene.environmentIntensity = 1;
      const NPL = 10;
      const shadowTex = radial(10, 60, 150, 0.5);
      const planeGeo = new THREE.PlaneGeometry(2.1, 1.47);
      const shGeo = new THREE.PlaneGeometry(2.9, 2.2);
      for (let i = 0; i < NPL; i++) {
        const g = new THREE.Group();
        const side = i % 2 ? 1 : -1;
        const last9 = i === NPL - 1;
        const x = last9 ? 0 : side * (1.65 + ((i * 37) % 5) * 0.12);
        const y = last9 ? 0 : (((i * 53) % 5) - 2) * 0.3;
        g.position.set(x, y, -1.5 - i * 1.7);
        g.rotation.y = -x * 0.14;
        const m = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({ map: uiTex(i), transparent: true, toneMapped: false }));
        const sh = new THREE.Mesh(shGeo, new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0.55 }));
        sh.position.set(0.08, -0.18, -0.04);
        g.add(sh);
        g.add(m);
        scene.add(g);
      }
      const orbGeo = new THREE.SphereGeometry(1, 28, 20);
      const orbMat = new THREE.MeshPhysicalMaterial({ color: 0x4fa3ff, roughness: 0.15, metalness: 0.1, clearcoat: 1 });
      const orbs = [];
      for (let i = 0; i < 7; i++) {
        const o = new THREE.Mesh(orbGeo, orbMat);
        const side = i % 2 ? 1 : -1;
        o.position.set(side * (0.55 + rnd() * 0.5), (rnd() - 0.5) * 1.4, -2 - i * 2.4);
        o.scale.setScalar(0.09 + rnd() * 0.14);
        scene.add(o);
        orbs.push(o);
      }
      const update = (p, s, dt, idx) => {
        const z = 5 - p * 17.4;
        const x = Math.sin(p * 6.2) * 0.25;
        const y = Math.cos(p * 5) * 0.18;
        camera.position.set(x, y, z);
        camera.lookAt(x * 0.4, y * 0.4, z - 5);
        orbs.forEach((o, i) => {
          o.position.y += Math.sin(s * 0.9 + i) * 0.0006;
        });
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a depth-parallax scroll scene with Three.js. Create about ten flat UI cards as PlaneGeometry meshes with MeshBasicMaterial and CanvasTexture images (rounded white cards drawn on a canvas: a payment notice, a calendar, a chart, a photo with a sun and mountains). Place them one after another along -z, 1.7 units apart, alternating left and right of the path with small vertical offsets and a slight yaw toward the center; put the last card on the center line as the destination. Add a soft radial-gradient shadow plane just behind each card and a handful of blue glossy spheres close to the path for foreground parallax. Use scene.fog in your page background color so far cards fade out. Make the section about 500vh tall with a sticky canvas. Smooth scroll progress with a lerp and dolly the camera from z=6 to just short of the last card, adding a small sine sway on x and y and looking five units ahead. Nothing else moves, so all depth cues come from perspective. Fade one short headline per section in sync, dispose textures, geometries and materials on unmount, and offer a reduced-motion fallback that steps between cards.`,
  });

  // ---------------------------------------------------------------- 6 city build
  add({
    id: 'three-scroll-city-build',
    title: 'City builds itself',
    sub: 'Blocks rise in waves as you scroll',
    html: page(
      'Metro',
      [
        { k: '01 / Ground', h: 'An empty plot.', p: 'Nothing here yet but a grid.' },
        { k: '02 / First blocks', h: 'The core goes up.', p: 'Towers rise from the center out.' },
        { k: '03 / Districts', h: 'Neighborhoods follow.', p: 'Each wave lifts the next ring.' },
        { k: '04 / Density', h: 'Fill every block.', p: 'Heights drop off toward the edge.' },
        { k: '05 / Skyline', h: 'A city, built by scroll.', p: 'Scroll back and it comes down.' },
      ],
      'bl',
    ),
    css:
      BASE +
      `
.d .bg{background:linear-gradient(180deg,#f9fbff 0%,#eaf2ff 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 28;
      renderer.toneMapping = THREE.NeutralToneMapping;
      scene.fog = new THREE.Fog(0xedf4ff, 22, 46);
      scene.environmentIntensity = 1;
      const key = new THREE.DirectionalLight(0xffffff, 1.5);
      key.position.set(6, 10, 4);
      scene.add(key);
      const GN = 11;
      const bGeo = new THREE.BoxGeometry(1, 1, 1);
      bGeo.translate(0, 0.5, 0);
      const city = new THREE.InstancedMesh(bGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.42, metalness: 0.05 }), GN * GN);
      city.frustumCulled = false;
      scene.add(city);
      const pal = [0xffffff, 0xf1f6ff, 0xe2ecfb, 0xd3e1f8];
      const col = new THREE.Color();
      const info = [];
      for (let gx = 0; gx < GN; gx++) {
        for (let gz = 0; gz < GN; gz++) {
          const x = gx - 5;
          const z = gz - 5;
          const dd = Math.hypot(x, z);
          let h = 0.5 + rnd() * 1.1 + 3.4 * Math.exp((-dd * dd) / 16) * (0.5 + rnd() * 0.7);
          const acc = (gx * 7 + gz * 3) % 11 === 0 || (gx === 5 && gz === 5);
          if (gx === 5 && gz === 5) h = 5.4;
          info.push({ x, z, d: dd, h, w: 0.62 + rnd() * 0.16 });
          col.set(acc ? 0x0a6cff : pal[Math.floor(rnd() * 4)]);
          city.setColorAt(gx * GN + gz, col);
        }
      }
      city.instanceColor.needsUpdate = true;
      const ground = new THREE.Mesh(new THREE.PlaneGeometry(90, 90), new THREE.MeshStandardMaterial({ color: 0xf4f8ff, roughness: 1 }));
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);
      const grid = new THREE.GridHelper(11, 11, 0xc6d8f5, 0xc6d8f5);
      grid.position.y = 0.01;
      scene.add(grid);
      const wave = new THREE.Mesh(
        new THREE.RingGeometry(0.97, 1, 96),
        new THREE.MeshBasicMaterial({ color: 0x0a6cff, transparent: true, opacity: 0.5, depthWrite: false, side: THREE.DoubleSide }),
      );
      wave.rotation.x = -Math.PI / 2;
      wave.position.y = 0.03;
      scene.add(wave);
      const dm = new THREE.Object3D();
      const update = (p, s, dt, idx) => {
        const front = p * 11.6;
        for (let i = 0; i < info.length; i++) {
          const b = info[i];
          const r = clamp01((front - b.d) / 3.2);
          const k = r >= 1 ? 1 : 1 + 2.70158 * Math.pow(r - 1, 3) + 1.70158 * Math.pow(r - 1, 2);
          dm.position.set(b.x, 0, b.z);
          const ww = Math.max(0.0001, b.w * Math.min(1, k * 10));
          dm.scale.set(ww, Math.max(0.0001, b.h * k), ww);
          dm.updateMatrix();
          city.setMatrixAt(i, dm.matrix);
        }
        city.instanceMatrix.needsUpdate = true;
        wave.scale.setScalar(Math.max(0.001, front));
        wave.material.opacity = 0.5 * (1 - clamp01(front / 11.6)) * (front > 0.05 ? 1 : 0);
        const a = 0.78 + p * 0.8 + Math.sin(s * 0.2) * 0.02;
        const R = 19;
        camera.position.set(Math.sin(a) * R, 13 - p * 1.2, Math.cos(a) * R);
        camera.lookAt(0, 0.9, 0);
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a city that constructs itself as the page scrolls, with Three.js. Make an 11 by 11 grid of block buildings as one InstancedMesh of a BoxGeometry translated so its base sits at y=0, with MeshStandardMaterial and per-instance colors (mostly whites and pale blues, about one in ten in your accent blue, a tall accent tower in the center). Assign each building a footprint of 0.62 to 0.78 and a height that is larger near the center. Add a pale ground plane, a GridHelper for streets, a directional light plus RoomEnvironment, and fog matching the page background. Map smoothed scroll progress to a wave front radius; each building's scale.y grows when the front passes its distance from the center, using an ease-out-back curve so blocks overshoot slightly, then writes setMatrixAt and flags instanceMatrix.needsUpdate. Draw a flat expanding ring on the ground at the front radius that fades out. Orbit the camera slowly with the same progress at a high angle with a narrow field of view. Scrolling back should lower the buildings. Add five short sections that reveal in sync, a reduced-motion fallback that shows the finished skyline, and dispose everything on unmount.`,
  });

  // ---------------------------------------------------------------- 7 dom to 3d
  add({
    id: 'three-scroll-dom-to-3d',
    title: 'Page tilts into 3D',
    sub: 'A flat page breaks into a floor of cards',
    html: page(
      'Plane',
      [
        { k: '01 / Flat', h: 'A page is just cards.', p: 'Twelve tiles, one tidy grid.' },
        { k: '02 / Tilt', h: 'Lay it down.', p: 'The plane tips back into space.' },
        { k: '03 / Lift', h: 'Cards leave the page.', p: 'Each one rises at its own height.' },
        { k: '04 / Floor', h: 'Now it is a space.', p: 'Walk the grid instead of reading it.' },
      ],
      'bl',
    ),
    css:
      BASE +
      `
.d .bg{background:radial-gradient(70% 60% at 50% 55%,#eef4ff 0%,#fafcff 70%,#fff 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      const drawUI = (g, kind, w, h) => {
        const BL = '#FF4433';
        const BG = '#E2D6CC';
        const BG2 = '#EFE7E0';
        const INK = '#1D1D1F';
        const MU = '#86868B';
        const F = 'Geist, system-ui, sans-serif';
        g.setTransform(1, 0, 0, 1, 0, 0);
        g.clearRect(0, 0, w, h);
        g.scale(w / 320, h / 224);
        const bar = (x, y, bw, bh, c) => {
          rr(g, x, y, bw, bh, bh / 2);
          g.fillStyle = c;
          g.fill();
        };
        const txt = (s, x, y, font, c, al) => {
          g.font = font;
          g.fillStyle = c;
          g.textAlign = al || 'left';
          g.textBaseline = 'alphabetic';
          g.fillText(s, x, y);
        };
        rr(g, 4, 4, 312, 216, 22);
        g.fillStyle = '#fff';
        g.fill();
        g.lineWidth = 2;
        g.strokeStyle = '#EAE1D9';
        g.stroke();
        g.save();
        rr(g, 4, 4, 312, 216, 22);
        g.clip();
        const k = kind % 8;
        if (k === 0) {
          rr(g, 22, 24, 44, 44, 13);
          g.fillStyle = BL;
          g.fill();
          g.strokeStyle = '#fff';
          g.lineWidth = 4;
          g.lineCap = 'round';
          g.lineJoin = 'round';
          g.beginPath();
          g.moveTo(35, 46);
          g.lineTo(42, 53);
          g.lineTo(54, 39);
          g.stroke();
          txt('Payment received', 78, 42, '600 19px ' + F, INK);
          txt('Invoice 2048 from Maya R.', 78, 62, '500 13px ' + F, MU);
          bar(22, 96, 276, 1.5, BG);
          txt('Amount', 22, 128, '500 13px ' + F, MU);
          txt('$1,280.00', 22, 172, '600 44px ' + F, INK);
          bar(22, 190, 90, 10, BG2);
          bar(210, 150, 88, 28, '#FFF0EE');
          txt('Paid', 254, 169, '600 13px ' + F, '#B3150F', 'center');
        } else if (k === 1) {
          txt('October', 24, 44, '600 22px ' + F, INK);
          bar(250, 28, 48, 20, '#FFF0EE');
          const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
          for (let c = 0; c < 7; c++) txt(days[c], 36 + c * 41, 72, '600 11px ' + F, MU, 'center');
          for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 7; c++) {
              const n = r * 7 + c + 1;
              const on = n === 17;
              if (on) {
                rr(g, 36 + c * 41 - 17, 84 + r * 32, 34, 28, 10);
                g.fillStyle = BL;
                g.fill();
              } else if (n === 9 || n === 23) {
                rr(g, 36 + c * 41 - 17, 84 + r * 32, 34, 28, 10);
                g.fillStyle = '#FFF0EE';
                g.fill();
              }
              txt(String(n), 36 + c * 41, 103 + r * 32, '600 13px ' + F, on ? '#fff' : INK, 'center');
            }
          }
        } else if (k === 2) {
          rr(g, 22, 24, 170, 40, 16);
          g.fillStyle = BG2;
          g.fill();
          txt('Is the file ready?', 38, 50, '500 14px ' + F, INK);
          rr(g, 120, 78, 178, 40, 16);
          g.fillStyle = BL;
          g.fill();
          txt('Shipping it today', 136, 104, '500 14px ' + F, '#fff');
          rr(g, 22, 132, 130, 40, 16);
          g.fillStyle = BG2;
          g.fill();
          txt('Perfect, thanks', 38, 158, '500 14px ' + F, INK);
          bar(22, 188, 190, 14, '#fff');
          rr(g, 22, 186, 276, 22, 11);
          g.strokeStyle = BG;
          g.lineWidth = 1.5;
          g.stroke();
          bar(34, 195, 70, 5, BG);
        } else if (k === 3) {
          txt('Visitors', 24, 40, '500 14px ' + F, MU);
          txt('48.2k', 24, 84, '600 42px ' + F, INK);
          bar(188, 52, 76, 28, '#FFF0EE');
          txt('+12.4%', 226, 71, '600 13px ' + F, '#B3150F', 'center');
          const pts = [0.7, 0.55, 0.62, 0.4, 0.46, 0.3, 0.34, 0.15];
          g.beginPath();
          pts.forEach((v, i) => {
            const x = 24 + (i / 7) * 272;
            const y = 104 + v * 96;
            if (i) g.lineTo(x, y);
            else g.moveTo(x, y);
          });
          g.lineWidth = 3.5;
          g.lineJoin = 'round';
          g.strokeStyle = BL;
          g.stroke();
          g.lineTo(296, 212);
          g.lineTo(24, 212);
          g.closePath();
          const gr = g.createLinearGradient(0, 110, 0, 212);
          gr.addColorStop(0, 'rgba(255,68,51,.22)');
          gr.addColorStop(1, 'rgba(255,68,51,0)');
          g.fillStyle = gr;
          g.fill();
        } else if (k === 4) {
          const rows = ['Notifications', 'Dark mode', 'Auto-save'];
          rows.forEach((s, i) => {
            const y = 36 + i * 60;
            txt(s, 24, y + 22, '600 16px ' + F, INK);
            bar(24, y + 32, 120, 6, BG2);
            const on = i !== 1;
            rr(g, 238, y + 6, 60, 32, 16);
            g.fillStyle = on ? BL : BG;
            g.fill();
            g.beginPath();
            g.arc(on ? 282 : 254, y + 22, 12, 0, 6.283);
            g.fillStyle = '#fff';
            g.fill();
          });
        } else if (k === 5) {
          const gr = g.createLinearGradient(24, 24, 84, 84);
          gr.addColorStop(0, '#FF7A3D');
          gr.addColorStop(1, BL);
          g.beginPath();
          g.arc(56, 62, 32, 0, 6.283);
          g.fillStyle = gr;
          g.fill();
          txt('M', 56, 74, '600 32px ' + F, '#fff', 'center');
          txt('Maya Reyes', 104, 58, '600 22px ' + F, INK);
          txt('Product designer', 104, 80, '500 14px ' + F, MU);
          bar(22, 118, 276, 1.5, BG);
          ['128', '4.9', '36'].forEach((s, i) => {
            txt(s, 22 + i * 96, 160, '600 28px ' + F, INK);
            bar(22 + i * 96, 176, 54, 7, BG2);
          });
        } else if (k === 6) {
          const rows = ['Review the brief', 'Send the invoice', 'Book Tomas call'];
          rows.forEach((s, i) => {
            const y = 30 + i * 58;
            rr(g, 24, y + 4, 28, 28, 9);
            g.fillStyle = i === 0 ? BL : '#fff';
            g.fill();
            g.lineWidth = 2;
            g.strokeStyle = i === 0 ? BL : BG;
            g.stroke();
            if (i === 0) {
              g.strokeStyle = '#fff';
              g.lineWidth = 3.5;
              g.lineCap = 'round';
              g.beginPath();
              g.moveTo(31, y + 18);
              g.lineTo(36, y + 23);
              g.lineTo(45, y + 12);
              g.stroke();
            }
            txt(s, 66, y + 24, '600 17px ' + F, i === 0 ? MU : INK);
            if (i === 0) bar(66, y + 17, 150, 2, MU);
          });
        } else {
          const gr = g.createLinearGradient(0, 0, 0, 150);
          gr.addColorStop(0, '#FFF0ED');
          gr.addColorStop(1, '#F1F6FF');
          g.fillStyle = gr;
          g.fillRect(4, 4, 312, 150);
          g.beginPath();
          g.arc(232, 66, 22, 0, 6.283);
          g.fillStyle = '#fff';
          g.fill();
          g.fillStyle = '#9FC4FF';
          g.beginPath();
          g.moveTo(4, 154);
          g.lineTo(4, 112);
          g.lineTo(80, 60);
          g.lineTo(140, 108);
          g.lineTo(196, 80);
          g.lineTo(316, 140);
          g.lineTo(316, 154);
          g.fill();
          txt('Golden hour', 22, 188, '600 18px ' + F, INK);
          bar(22, 198, 100, 6, BG2);
        }
        g.restore();
      };
      const uiTex = (kind) => {
        const c = mkCanvas(640, 448);
        const t = tex(c);
        whenFonts(() => {
          drawUI(c.getContext('2d'), kind, 640, 448);
          t.needsUpdate = true;
        });
        return t;
      };
      camera.fov = 32;
      const TW = 0.98;
      const TH = 0.686;
      const COLS = 4;
      const ROWS = 3;
      const grp = new THREE.Group();
      scene.add(grp);
      const backMat = new THREE.MeshBasicMaterial({ color: 0xf0f5fc, transparent: true, toneMapped: false });
      const back = new THREE.Mesh(new THREE.PlaneGeometry(COLS * TW + 0.04, ROWS * TH + 0.04), backMat);
      back.position.z = -0.01;
      grp.add(back);
      const shadowTex = radial(10, 60, 150, 0.55);
      const tGeo = new THREE.PlaneGeometry(TW, TH);
      const sGeo = new THREE.PlaneGeometry(TW * 1.35, TH * 1.5);
      const tiles = [];
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;
          const m = new THREE.Mesh(tGeo, new THREE.MeshBasicMaterial({ map: uiTex(i), transparent: true, toneMapped: false }));
          const sh = new THREE.Mesh(sGeo, new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0 }));
          grp.add(sh);
          grp.add(m);
          tiles.push({ m, sh, c, r, h: 0.3 + rnd() * 0.7, rz: (rnd() - 0.5) * 0.5 });
        }
      }
      const update = (p, s, dt, idx) => {
        const tilt = smr(0.04, 0.72, p) * 1.2;
        const E = smr(0.12, 0.9, p);
        const f = tilt / 1.2;
        grp.rotation.x = -tilt;
        grp.position.y = mix(0.3, 0.45, f);
        backMat.opacity = 1 - sm(0, 0.35, E);
        const spread = 1 + 0.25 * E;
        tiles.forEach((t) => {
          const delay = (ROWS - 1 - t.r) * 0.1 + t.c * 0.03;
          const e = smr(delay, delay + 0.55, E);
          const x = (t.c - 1.5) * TW * spread;
          const y = (1 - t.r) * TH * spread;
          t.m.position.set(x, y, e * (0.12 + 0.5 * t.h));
          t.m.rotation.z = t.rz * e * 0.4;
          t.sh.position.set(x + 0.04 * e, y - 0.05 * e, 0.004);
          t.sh.material.opacity = e * 0.45;
        });
        camera.position.set(0, f * 2.4, 7.2 + f * 1.2);
        camera.lookAt(0, mix(0, -0.1, f), 0);
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a flat page that tilts back and breaks into a 3D floor of cards on scroll, using Three.js. Draw a 4 by 3 grid of UI tiles (a payment notice, a calendar, a chat, a chart, toggles, a profile, a task list, a photo) each onto its own 640 by 448 canvas with rounded corners and use them as CanvasTexture maps on PlaneGeometry meshes with MeshBasicMaterial (transparent, toneMapped false). Put them in a group over a pale backing plane so the group initially reads as one seamless page. Add a radial-gradient shadow plane under every tile with opacity 0. Make a sticky canvas and four sections. Smooth scroll progress. First rotate the group on x from 0 to about 1.2 radians (smootherstep) so the plane lies back like a floor while the camera rises. Then, with a stagger by row so the front row leads, spread the tiles about 40 percent apart, lift each along its local z by a different amount and give it a small rotation, and fade up its shadow while fading the backing plane out. Scrolling back reverses the whole move. Fade headlines in sync, dispose canvases, textures and materials on unmount, and render the finished layout for reduced motion.`,
  });

  // ---------------------------------------------------------------- 8 screen zoom
  add({
    id: 'three-scroll-screen-zoom',
    title: 'Zoom into a screen',
    sub: 'Dolly into a laptop and go inside',
    html: page(
      'Atlas',
      [
        { k: '01 / Meet Atlas', h: 'Your whole workday.', p: 'Orders, people and numbers in one window.' },
        { k: '02 / Open it', h: 'Move in closer.', p: 'The camera dollies toward the display.' },
        { k: '03 / Step in', h: 'The screen is the page.', p: 'Cross the glass and the laptop is gone.' },
        { k: '04 / Inside', h: 'Work in layers.', p: 'Every view floats a little further back.' },
      ],
      'bl',
    ),
    css:
      BASE +
      `
.d .bg{background:radial-gradient(70% 62% at 50% 40%,#e4efff 0%,#f6f9ff 62%,#fff 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      const drawUI = (g, kind, w, h) => {
        const BL = '#FF4433';
        const BG = '#E2D6CC';
        const BG2 = '#EFE7E0';
        const INK = '#1D1D1F';
        const MU = '#86868B';
        const F = 'Geist, system-ui, sans-serif';
        g.setTransform(1, 0, 0, 1, 0, 0);
        g.clearRect(0, 0, w, h);
        g.scale(w / 320, h / 224);
        const bar = (x, y, bw, bh, c) => {
          rr(g, x, y, bw, bh, bh / 2);
          g.fillStyle = c;
          g.fill();
        };
        const txt = (s, x, y, font, c, al) => {
          g.font = font;
          g.fillStyle = c;
          g.textAlign = al || 'left';
          g.textBaseline = 'alphabetic';
          g.fillText(s, x, y);
        };
        rr(g, 4, 4, 312, 216, 22);
        g.fillStyle = '#fff';
        g.fill();
        g.lineWidth = 2;
        g.strokeStyle = '#EAE1D9';
        g.stroke();
        g.save();
        rr(g, 4, 4, 312, 216, 22);
        g.clip();
        const k = kind % 8;
        if (k === 0) {
          rr(g, 22, 24, 44, 44, 13);
          g.fillStyle = BL;
          g.fill();
          g.strokeStyle = '#fff';
          g.lineWidth = 4;
          g.lineCap = 'round';
          g.lineJoin = 'round';
          g.beginPath();
          g.moveTo(35, 46);
          g.lineTo(42, 53);
          g.lineTo(54, 39);
          g.stroke();
          txt('Payment received', 78, 42, '600 19px ' + F, INK);
          txt('Invoice 2048 from Maya R.', 78, 62, '500 13px ' + F, MU);
          bar(22, 96, 276, 1.5, BG);
          txt('Amount', 22, 128, '500 13px ' + F, MU);
          txt('$1,280.00', 22, 172, '600 44px ' + F, INK);
          bar(22, 190, 90, 10, BG2);
          bar(210, 150, 88, 28, '#FFF0EE');
          txt('Paid', 254, 169, '600 13px ' + F, '#B3150F', 'center');
        } else if (k === 1) {
          txt('October', 24, 44, '600 22px ' + F, INK);
          bar(250, 28, 48, 20, '#FFF0EE');
          const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
          for (let c = 0; c < 7; c++) txt(days[c], 36 + c * 41, 72, '600 11px ' + F, MU, 'center');
          for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 7; c++) {
              const n = r * 7 + c + 1;
              const on = n === 17;
              if (on) {
                rr(g, 36 + c * 41 - 17, 84 + r * 32, 34, 28, 10);
                g.fillStyle = BL;
                g.fill();
              } else if (n === 9 || n === 23) {
                rr(g, 36 + c * 41 - 17, 84 + r * 32, 34, 28, 10);
                g.fillStyle = '#FFF0EE';
                g.fill();
              }
              txt(String(n), 36 + c * 41, 103 + r * 32, '600 13px ' + F, on ? '#fff' : INK, 'center');
            }
          }
        } else if (k === 2) {
          rr(g, 22, 24, 170, 40, 16);
          g.fillStyle = BG2;
          g.fill();
          txt('Is the file ready?', 38, 50, '500 14px ' + F, INK);
          rr(g, 120, 78, 178, 40, 16);
          g.fillStyle = BL;
          g.fill();
          txt('Shipping it today', 136, 104, '500 14px ' + F, '#fff');
          rr(g, 22, 132, 130, 40, 16);
          g.fillStyle = BG2;
          g.fill();
          txt('Perfect, thanks', 38, 158, '500 14px ' + F, INK);
          bar(22, 188, 190, 14, '#fff');
          rr(g, 22, 186, 276, 22, 11);
          g.strokeStyle = BG;
          g.lineWidth = 1.5;
          g.stroke();
          bar(34, 195, 70, 5, BG);
        } else if (k === 3) {
          txt('Visitors', 24, 40, '500 14px ' + F, MU);
          txt('48.2k', 24, 84, '600 42px ' + F, INK);
          bar(188, 52, 76, 28, '#FFF0EE');
          txt('+12.4%', 226, 71, '600 13px ' + F, '#B3150F', 'center');
          const pts = [0.7, 0.55, 0.62, 0.4, 0.46, 0.3, 0.34, 0.15];
          g.beginPath();
          pts.forEach((v, i) => {
            const x = 24 + (i / 7) * 272;
            const y = 104 + v * 96;
            if (i) g.lineTo(x, y);
            else g.moveTo(x, y);
          });
          g.lineWidth = 3.5;
          g.lineJoin = 'round';
          g.strokeStyle = BL;
          g.stroke();
          g.lineTo(296, 212);
          g.lineTo(24, 212);
          g.closePath();
          const gr = g.createLinearGradient(0, 110, 0, 212);
          gr.addColorStop(0, 'rgba(255,68,51,.22)');
          gr.addColorStop(1, 'rgba(255,68,51,0)');
          g.fillStyle = gr;
          g.fill();
        } else if (k === 4) {
          const rows = ['Notifications', 'Dark mode', 'Auto-save'];
          rows.forEach((s, i) => {
            const y = 36 + i * 60;
            txt(s, 24, y + 22, '600 16px ' + F, INK);
            bar(24, y + 32, 120, 6, BG2);
            const on = i !== 1;
            rr(g, 238, y + 6, 60, 32, 16);
            g.fillStyle = on ? BL : BG;
            g.fill();
            g.beginPath();
            g.arc(on ? 282 : 254, y + 22, 12, 0, 6.283);
            g.fillStyle = '#fff';
            g.fill();
          });
        } else if (k === 5) {
          const gr = g.createLinearGradient(24, 24, 84, 84);
          gr.addColorStop(0, '#FF7A3D');
          gr.addColorStop(1, BL);
          g.beginPath();
          g.arc(56, 62, 32, 0, 6.283);
          g.fillStyle = gr;
          g.fill();
          txt('M', 56, 74, '600 32px ' + F, '#fff', 'center');
          txt('Maya Reyes', 104, 58, '600 22px ' + F, INK);
          txt('Product designer', 104, 80, '500 14px ' + F, MU);
          bar(22, 118, 276, 1.5, BG);
          ['128', '4.9', '36'].forEach((s, i) => {
            txt(s, 22 + i * 96, 160, '600 28px ' + F, INK);
            bar(22 + i * 96, 176, 54, 7, BG2);
          });
        } else if (k === 6) {
          const rows = ['Review the brief', 'Send the invoice', 'Book Tomas call'];
          rows.forEach((s, i) => {
            const y = 30 + i * 58;
            rr(g, 24, y + 4, 28, 28, 9);
            g.fillStyle = i === 0 ? BL : '#fff';
            g.fill();
            g.lineWidth = 2;
            g.strokeStyle = i === 0 ? BL : BG;
            g.stroke();
            if (i === 0) {
              g.strokeStyle = '#fff';
              g.lineWidth = 3.5;
              g.lineCap = 'round';
              g.beginPath();
              g.moveTo(31, y + 18);
              g.lineTo(36, y + 23);
              g.lineTo(45, y + 12);
              g.stroke();
            }
            txt(s, 66, y + 24, '600 17px ' + F, i === 0 ? MU : INK);
            if (i === 0) bar(66, y + 17, 150, 2, MU);
          });
        } else {
          const gr = g.createLinearGradient(0, 0, 0, 150);
          gr.addColorStop(0, '#FFF0ED');
          gr.addColorStop(1, '#F1F6FF');
          g.fillStyle = gr;
          g.fillRect(4, 4, 312, 150);
          g.beginPath();
          g.arc(232, 66, 22, 0, 6.283);
          g.fillStyle = '#fff';
          g.fill();
          g.fillStyle = '#9FC4FF';
          g.beginPath();
          g.moveTo(4, 154);
          g.lineTo(4, 112);
          g.lineTo(80, 60);
          g.lineTo(140, 108);
          g.lineTo(196, 80);
          g.lineTo(316, 140);
          g.lineTo(316, 154);
          g.fill();
          txt('Golden hour', 22, 188, '600 18px ' + F, INK);
          bar(22, 198, 100, 6, BG2);
        }
        g.restore();
      };
      const uiTex = (kind) => {
        const c = mkCanvas(640, 448);
        const t = tex(c);
        whenFonts(() => {
          drawUI(c.getContext('2d'), kind, 640, 448);
          t.needsUpdate = true;
        });
        return t;
      };
      camera.fov = 32;
      scene.environmentIntensity = 1.1;
      const SW = 2.9;
      const SH = 1.81;
      const TH0 = 0.22;
      const rig = new THREE.Group();
      rig.rotation.x = -TH0;
      scene.add(rig);
      const lap = new THREE.Group();
      rig.add(lap);
      const silver = new THREE.MeshStandardMaterial({ color: 0xdfe6f2, roughness: 0.3, metalness: 0.9 });
      const lid = new THREE.Mesh(new RoundedBoxGeometry(SW + 0.1, SH + 0.1, 0.07, 3, 0.07), silver);
      lid.position.z = -0.04;
      lap.add(lid);
      const bezel = new THREE.Mesh(new THREE.PlaneGeometry(SW + 0.08, SH + 0.08), new THREE.MeshBasicMaterial({ color: 0x0b1220 }));
      lap.add(bezel);
      const scrC = mkCanvas(1280, 800);
      const scrT = tex(scrC);
      whenFonts(() => {
        const g = scrC.getContext('2d');
        const F = 'Geist, system-ui, sans-serif';
        g.setTransform(2, 0, 0, 2, 0, 0);
        g.clearRect(0, 0, 640, 400);
        g.fillStyle = '#FAF6F2';
        g.fillRect(0, 0, 640, 400);
        g.fillStyle = '#fff';
        g.fillRect(0, 0, 128, 400);
        g.fillStyle = '#EAE1D9';
        g.fillRect(127, 0, 1, 400);
        rr(g, 18, 20, 26, 26, 8);
        g.fillStyle = '#FF4433';
        g.fill();
        g.textAlign = 'left';
        g.font = '600 18px ' + F;
        g.fillStyle = '#1D1D1F';
        g.fillText('Atlas', 54, 40);
        ['Overview', 'Orders', 'Customers', 'Reports', 'Settings'].forEach((s, i) => {
          if (i === 0) {
            rr(g, 12, 70, 104, 32, 10);
            g.fillStyle = '#FFF0EE';
            g.fill();
          }
          g.font = '600 14px ' + F;
          g.fillStyle = i === 0 ? '#B3150F' : '#86868B';
          g.fillText(s, 24, 91 + i * 38);
        });
        g.font = '600 30px ' + F;
        g.fillStyle = '#1D1D1F';
        g.fillText('Overview', 152, 60);
        g.font = '500 14px ' + F;
        g.fillStyle = '#86868B';
        g.fillText('This week', 152, 82);
        [
          ['Revenue', '$48.2k'],
          ['Orders', '1,284'],
          ['Visitors', '9.6k'],
        ].forEach((c, i) => {
          const x = 152 + i * 156;
          rr(g, x, 104, 144, 86, 16);
          g.fillStyle = '#fff';
          g.fill();
          g.strokeStyle = '#EAE1D9';
          g.lineWidth = 1.5;
          g.stroke();
          g.font = '500 13px ' + F;
          g.fillStyle = '#86868B';
          g.fillText(c[0], x + 16, 130);
          g.font = '600 28px ' + F;
          g.fillStyle = '#1D1D1F';
          g.fillText(c[1], x + 16, 170);
        });
        rr(g, 152, 206, 456, 170, 16);
        g.fillStyle = '#fff';
        g.fill();
        g.stroke();
        const hs = [0.4, 0.55, 0.45, 0.7, 0.6, 0.5, 0.78, 0.66, 0.85, 0.74, 0.92, 1];
        hs.forEach((v, i) => {
          rr(g, 176 + i * 34, 356 - v * 120, 22, v * 120, 6);
          g.fillStyle = i === 11 ? '#FF4433' : '#E2D6CC';
          g.fill();
        });
        scrT.needsUpdate = true;
      });
      const screenMat = new THREE.MeshBasicMaterial({ map: scrT, transparent: true, toneMapped: false });
      const screen = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), screenMat);
      screen.position.z = 0.004;
      lap.add(screen);
      const baseG = new THREE.Group();
      baseG.position.set(0, -(SH + 0.1) / 2, -0.04);
      baseG.rotation.x = TH0;
      lap.add(baseG);
      const slab = new THREE.Mesh(new RoundedBoxGeometry(SW + 0.1, 0.08, 2.0, 3, 0.04), silver);
      slab.position.set(0, -0.04, 1.0);
      baseG.add(slab);
      const kC = mkCanvas(512, 192);
      {
        const g = kC.getContext('2d');
        g.fillStyle = '#cfd8e8';
        g.fillRect(0, 0, 512, 192);
        for (let r = 0; r < 5; r++) {
          for (let c = 0; c < 14; c++) {
            rr(g, 8 + c * 36, 8 + r * 34, 32, 28, 6);
            g.fillStyle = '#f6f9ff';
            g.fill();
          }
        }
      }
      const kb = new THREE.Mesh(new THREE.PlaneGeometry(SW - 0.3, 1.0), new THREE.MeshStandardMaterial({ map: tex(kC), roughness: 0.6 }));
      kb.rotation.x = -Math.PI / 2;
      kb.position.set(0, 0.001, 0.62);
      baseG.add(kb);
      const tp = new THREE.Mesh(new THREE.PlaneGeometry(0.95, 0.58), new THREE.MeshStandardMaterial({ color: 0xeef3fb, roughness: 0.4, metalness: 0.4 }));
      tp.rotation.x = -Math.PI / 2;
      tp.position.set(0, 0.001, 1.5);
      baseG.add(tp);
      const inner = new THREE.Group();
      rig.add(inner);
      const pl = new THREE.PlaneGeometry(1.7, 1.19);
      const spots = [
        [-2.0, 0.5, -1.6, 0],
        [2.1, -0.35, -2.8, 3],
        [-1.9, -0.6, -4.1, 2],
        [1.9, 0.6, -5.4, 4],
        [-2.1, 0.3, -6.8, 5],
        [1.9, -0.4, -8.2, 6],
        [0, 0.2, -9.8, 7],
      ];
      spots.forEach((q) => {
        const m = new THREE.Mesh(pl, new THREE.MeshBasicMaterial({ map: uiTex(q[3]), transparent: true, toneMapped: false }));
        m.position.set(q[0], q[1], q[2]);
        inner.add(m);
      });
      const vA = new THREE.Vector3();
      const vB = new THREE.Vector3();
      const update = (p, s, dt, idx) => {
        const z = kf(p, [8.4, 3.0, -0.6, -4.2]);
        const cx = kf(p, [2.0, 0, 0, 0]);
        const cy = kf(p, [0.8, 0.02, 0, 0]);
        rig.rotation.y = kf(p, [-0.5, 0, 0, 0]);
        rig.updateMatrixWorld(true);
        const tz = z > 3 ? 0 : z - 3;
        camera.position.copy(rig.localToWorld(vA.set(cx, cy, z)));
        camera.lookAt(rig.localToWorld(vB.set(kf(p, [-0.55, 0, 0, 0]), kf(p, [-0.5, 0, 0, 0]), tz)));
        screenMat.opacity = sm(0.2, 1.7, z);
        lap.visible = z > 1.9;
        inner.visible = z < 4.5;
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a "zoom into the screen" scroll scene with Three.js. Model a laptop from primitives: a silver RoundedBoxGeometry lid, a black bezel plane, a screen plane with a CanvasTexture dashboard (sidebar, three stat cards, a bar chart), and a base slab with a canvas keyboard texture, hinged open at about 100 degrees. Put the lid, screen and base in a rig group whose origin is the screen center so the screen normal is +z. Behind the screen plane, in the same rig, float seven UI cards (canvas textures) at increasing depth, alternating left and right of the center line. Make a sticky canvas and four sections. Interpolate camera position in rig-local space with held smootherstep keyframes: three-quarter view, a closer front view, a dolly that fills the screen, then through the glass and into the card tunnel. Convert with rig.localToWorld and lookAt a point on the screen normal. Fade the screen material opacity to 0 as the camera crosses it, then hide the laptop mesh group once the screen fills the frame so nothing blocks the cards behind. Rotate the rig back to face the camera during the dolly. Smooth progress with a lerp, fade section copy in sync, dispose canvases, geometries and materials on unmount, and jump between keyframes for reduced motion.`,
  });

  // ---------------------------------------------------------------- 9 globe zoom
  add({
    id: 'three-scroll-globe-zoom',
    title: 'Globe zooms to a pin',
    sub: 'A dot-matrix world turns, then lands',
    html: page(
      'Meridian',
      [
        { k: '01 / Planet', h: 'A world of customers.', p: 'Spin the globe to find a region.' },
        { k: '02 / Region', h: 'Southeast Asia, closing in.', p: 'The land mass rolls toward you.' },
        { k: '03 / City', h: 'Down to the city.', p: 'The camera drops below the clouds.' },
        { k: '04 / Pin', h: 'One pin, one city.', p: 'It lands where the work happens.' },
      ],
      'bl',
      '<div class="pin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg><span>Manila, PH</span></div>',
    ),
    css:
      BASE +
      `
.d .bg{background:radial-gradient(60% 60% at 50% 46%,#eaf2ff 0%,#f7faff 62%,#fff 100%)}
.d .pin{position:absolute;left:0;top:0;display:flex;align-items:center;gap:5px;padding:4px 9px 4px 6px;border-radius:999px;background:#fff;box-shadow:var(--ml-shadow-lg);font:600 clamp(7px,2.6cqw,11px)/1 var(--ml-font);color:var(--ml-ink);opacity:0;white-space:nowrap}
.d .pin svg{width:1.5em;height:1.5em;color:var(--ml-accent)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 30;
      renderer.toneMapping = THREE.NeutralToneMapping;
      scene.environmentIntensity = 1.1;
      const LAT = 0.255;
      const LON = 2.111;
      const mv = new THREE.Vector3(Math.cos(LAT) * Math.sin(LON), Math.sin(LAT), Math.cos(LAT) * Math.cos(LON));
      const globe = new THREE.Group();
      scene.add(globe);
      globe.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(1, 72, 48),
          new THREE.MeshPhysicalMaterial({ color: 0xeaf3ff, roughness: 0.32, metalness: 0, clearcoat: 0.6, clearcoatRoughness: 0.2 }),
        ),
      );
      scene.add(
        new THREE.Mesh(
          new THREE.SphereGeometry(1.07, 48, 32),
          new THREE.MeshBasicMaterial({ color: 0x9cc7ff, transparent: true, opacity: 0.2, side: THREE.BackSide, depthWrite: false }),
        ),
      );
      const noise = new SimplexNoise({ random: rnd });
      const NG = 20000;
      const gp = [];
      const gcol = [];
      const cA = new THREE.Color(0x4fa3ff);
      const cB = new THREE.Color(0x0a6cff);
      const tmp = new THREE.Color();
      for (let i = 0; i < NG; i++) {
        const y = 1 - (i / (NG - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const th = i * 2.399963;
        const x = Math.cos(th) * r;
        const z = Math.sin(th) * r;
        const nz = noise.noise3d(x * 1.5, y * 1.5, z * 1.5) * 0.65 + noise.noise3d(x * 3.6 + 7, y * 3.6, z * 3.6) * 0.35;
        const near = Math.acos(Math.min(1, x * mv.x + y * mv.y + z * mv.z));
        if (nz > 0.14 || near < 0.2) {
          gp.push(x * 1.004, y * 1.004, z * 1.004);
          tmp.lerpColors(cA, cB, clamp01(0.5 + nz * 0.8));
          gcol.push(tmp.r, tmp.g, tmp.b);
        }
      }
      const dg = new THREE.BufferGeometry();
      dg.setAttribute('position', new THREE.Float32BufferAttribute(gp, 3));
      dg.setAttribute('color', new THREE.Float32BufferAttribute(gcol, 3));
      const dc = mkCanvas(64, 64);
      {
        const g = dc.getContext('2d');
        g.fillStyle = '#fff';
        g.beginPath();
        g.arc(32, 32, 28, 0, 6.283);
        g.fill();
      }
      const landMat = new THREE.PointsMaterial({ size: 0.022, vertexColors: true, map: tex(dc), alphaTest: 0.4, sizeAttenuation: true });
      globe.add(new THREE.Points(dg, landMat));
      const mk = new THREE.Group();
      mk.position.copy(mv).multiplyScalar(1.006);
      mk.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), mv);
      globe.add(mk);
      const stemGeo = new THREE.CylinderGeometry(0.003, 0.003, 0.05, 8);
      stemGeo.rotateX(Math.PI / 2);
      const stem = new THREE.Mesh(stemGeo, new THREE.MeshBasicMaterial({ color: 0x0a6cff }));
      stem.position.z = 0.025;
      mk.add(stem);
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.017, 20, 14), new THREE.MeshStandardMaterial({ color: 0x0a6cff, roughness: 0.2, metalness: 0.2 }));
      head.position.z = 0.056;
      mk.add(head);
      const pulses = [0, 1].map(() => {
        const m = new THREE.Mesh(
          new THREE.RingGeometry(0.02, 0.026, 48),
          new THREE.MeshBasicMaterial({ color: 0x0a6cff, transparent: true, opacity: 0, depthWrite: false, side: THREE.DoubleSide }),
        );
        m.position.z = 0.002;
        mk.add(m);
        return m;
      });
      const pin = root.querySelector('.pin');
      const wp = new THREE.Vector3();
      const update = (p, s, dt, idx) => {
        const e = kf(p, [0, 0.5, 0.85, 1], 0.1);
        globe.rotation.set(LAT * e + 0.28 * (1 - e), -LON + (1 - e) * 5.2, 0);
        const dist = kf(p, [5.6, 4.2, 3.3, 2.6], 0.1);
        camera.position.set(0, 0.1 * e, dist);
        camera.lookAt(0, -0.02 * e, 0);
        landMat.size = mix(0.017, 0.025, clamp01((dist - 2.6) / 3));
        pulses.forEach((m, i) => {
          const t = (s * 0.55 + i * 0.5) % 1;
          m.scale.setScalar(0.5 + t * 2.6);
          m.material.opacity = (1 - t) * 0.75 * sm(0.3, 0.8, e);
        });
        mk.scale.setScalar(0.7 + 0.5 * e);
        globe.updateMatrixWorld(true);
        camera.updateMatrixWorld();
        mk.getWorldPosition(wp);
        wp.project(camera);
        const x = (wp.x * 0.5 + 0.5) * W;
        const y = (-wp.y * 0.5 + 0.5) * H;
        pin.style.opacity = sm(2.35, 2.9, idx).toFixed(3);
        pin.style.transform = 'translate(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px) translate(-50%,-175%)';
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a scroll-driven globe that turns and zooms to a location marker, with Three.js. Make a pale SphereGeometry ocean (MeshPhysicalMaterial with clearcoat) and a slightly larger BackSide sphere in transparent blue for an atmosphere. For the continents, generate about 20000 Fibonacci-sphere points, keep those where a two-octave 3D simplex noise exceeds a threshold (plus every point within 0.2 radians of your marker so it is always land), and render them as a Points object with vertex colors, a circular alpha-test texture and a size that grows slightly with camera distance. Place the marker as a small sphere on a stem with two expanding ring pulses, oriented along the surface normal with quaternion.setFromUnitVectors. Pick the final globe rotation so the marker faces the camera: rotation.set(latitude, -longitude, 0). Use smoothed scroll progress with held keyframes to interpolate an extra spin angle toward zero, the camera distance from 5.6 to 2.6, and the pulse strength. Project the marker with vector.project(camera) to place an HTML pin label that fades in on the last section. Use four short sections, dispose all geometries, materials and textures on unmount, and jump straight to the final view for reduced motion.`,
  });

  // ---------------------------------------------------------------- 10 day night
  add({
    id: 'three-scroll-day-night',
    title: 'Morning to evening light',
    sub: 'Scroll sets the sun, sky and glow',
    html: page(
      'Hearth',
      [
        { k: '01 / Morning', h: 'Fresh white light.', p: 'Low sun, long soft shadows.' },
        { k: '02 / Midday', h: 'Clear and bright.', p: 'The house sits in even daylight.' },
        { k: '03 / Dusk', h: 'The sky turns blue.', p: 'Windows start to glow.' },
        { k: '04 / Night', h: 'Lights on, doors closed.', p: 'A moon, stars and a warm home.' },
      ],
      'tl',
    ),
    css: BASE + `
.d{--halo:transparent}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 30;
      renderer.toneMapping = THREE.NeutralToneMapping;
      camera.position.set(0, 2.4, 8.8);
      camera.lookAt(0, 0.7, 0);
      const bgEl = root.querySelector('.bg');
      const key = new THREE.DirectionalLight(0xffffff, 2);
      scene.add(key);
      const dio = new THREE.Group();
      dio.position.x = 1.6; // keep the diorama right of the copy column
      dio.scale.setScalar(0.66);
      scene.add(dio);
      const gMat = new THREE.MeshStandardMaterial({ color: 0xf2f7ff, roughness: 0.9 });
      const island = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.4, 0.35, 72), gMat);
      island.position.y = -0.175;
      dio.add(island);
      const wMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
      const bMat = new THREE.MeshStandardMaterial({ color: 0x0a6cff, roughness: 0.35, metalness: 0.2 });
      const put = (geo, mat, x, y, z) => {
        const m = new THREE.Mesh(geo, mat);
        m.position.set(x, y, z);
        dio.add(m);
        return m;
      };
      put(new RoundedBoxGeometry(2.5, 1.1, 1.5, 2, 0.05), wMat, -0.2, 0.55, 0);
      put(new RoundedBoxGeometry(1.5, 0.85, 1.3, 2, 0.05), wMat, 0.35, 1.525, -0.05);
      put(new RoundedBoxGeometry(1.7, 0.08, 1.5, 1, 0.02), bMat, 0.35, 1.99, -0.05);
      const winMat = new THREE.MeshStandardMaterial({ color: 0x9ec5ff, roughness: 0.08, metalness: 0.7, emissive: 0xfff1d0, emissiveIntensity: 0 });
      put(new THREE.PlaneGeometry(1.1, 0.6), winMat, -0.6, 0.58, 0.756);
      put(new THREE.PlaneGeometry(0.95, 0.5), winMat, 0.35, 1.55, 0.606);
      put(new THREE.PlaneGeometry(0.34, 0.74), bMat, 0.62, 0.37, 0.757);
      const treeMat = new THREE.MeshStandardMaterial({ color: 0xb7d0f7, roughness: 0.8 });
      const trunkMat = new THREE.MeshStandardMaterial({ color: 0xdfe8f7, roughness: 0.9 });
      const trunkGeo = new THREE.CylinderGeometry(0.05, 0.07, 0.5, 10);
      const crownGeo = new THREE.SphereGeometry(0.5, 22, 16);
      [
        [2.6, 1.0, 1.0],
        [-2.9, 0.6, 1.25],
        [3.0, -0.9, 0.85],
        [-2.4, -1.2, 0.7],
      ].forEach((q) => {
        const t = put(trunkGeo, trunkMat, q[0], 0.25 * q[2], q[1]);
        t.scale.setScalar(q[2]);
        const c = put(crownGeo, treeMat, q[0], 0.85 * q[2], q[1]);
        c.scale.set(q[2], q[2] * 1.2, q[2]);
      });
      const sun = new THREE.Mesh(new THREE.SphereGeometry(0.42, 28, 18), new THREE.MeshBasicMaterial({ color: 0xffffff, fog: false }));
      const sunHalo = new THREE.Sprite(new THREE.SpriteMaterial({ map: radial(255, 255, 255, 0.95), transparent: true, depthWrite: false }));
      sunHalo.scale.setScalar(3.4);
      const moon = new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 16), new THREE.MeshBasicMaterial({ color: 0xe8f0ff, fog: false }));
      const moonHalo = new THREE.Sprite(new THREE.SpriteMaterial({ map: radial(170, 205, 255, 0.7), transparent: true, depthWrite: false }));
      moonHalo.scale.setScalar(2.6);
      scene.add(sun, sunHalo, moon, moonHalo);
      const NS = 160;
      const sa = new Float32Array(NS * 3);
      for (let i = 0; i < NS; i++) {
        sa[i * 3] = (rnd() - 0.5) * 18;
        sa[i * 3 + 1] = 1.2 + rnd() * 5.5;
        sa[i * 3 + 2] = -8;
      }
      const sg = new THREE.BufferGeometry();
      sg.setAttribute('position', new THREE.BufferAttribute(sa, 3));
      const stars = new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 0.07, transparent: true, opacity: 0, depthWrite: false, fog: false }));
      scene.add(stars);
      const sh = blob(7, 2.2, 0.3);
      sh.position.set(1.6, -0.38, 0);
      sh.scale.setScalar(0.66);
      const topA = new THREE.Color(0xd6e7ff);
      const topB = new THREE.Color(0x3f6fd1);
      const topC = new THREE.Color(0x06173f);
      const botA = new THREE.Color(0xffffff);
      const botB = new THREE.Color(0xcfe0ff);
      const botC = new THREE.Color(0x123a8f);
      const top = new THREE.Color();
      const bot = new THREE.Color();
      const gDay = new THREE.Color(0xf2f7ff);
      const gNight = new THREE.Color(0x24427f);
      const tDay = new THREE.Color(0xb7d0f7);
      const tNight = new THREE.Color(0x2a4f9e);
      const inkA = new THREE.Color(0x1d1d1f);
      const inkB = new THREE.Color(0xffffff);
      const mutA = new THREE.Color(0x424245);
      const mutB = new THREE.Color(0xdbe7ff);
      const acA = new THREE.Color(0x0a6cff);
      const acB = new THREE.Color(0xa9ccff);
      const lw = new THREE.Color(0xffffff);
      const ln = new THREE.Color(0x7fa4ff);
      const tc = new THREE.Color();
      const sunP = new THREE.Vector3();
      const moonP = new THREE.Vector3();
      const hex = (c) => '#' + c.getHexString();
      const update = (p, s, dt, idx) => {
        const n = kf(p, [0, 0, 0.55, 1], 0.12);
        if (n < 0.55) {
          top.lerpColors(topA, topB, n / 0.55);
          bot.lerpColors(botA, botB, n / 0.55);
        } else {
          top.lerpColors(topB, topC, (n - 0.55) / 0.45);
          bot.lerpColors(botB, botC, (n - 0.55) / 0.45);
        }
        bgEl.style.background = 'linear-gradient(180deg,' + hex(top) + ' 0%,' + hex(bot) + ' 100%)';
        const w = sm(0.12, 0.42, n);
        root.style.setProperty('--tc', hex(tc.lerpColors(inkA, inkB, w)));
        root.style.setProperty('--tm', hex(tc.lerpColors(mutA, mutB, w)));
        root.style.setProperty('--ac', hex(tc.lerpColors(acA, acB, w)));
        root.style.setProperty('--rl', w > 0.5 ? 'rgba(255,255,255,.3)' : 'rgba(10,40,100,.14)');
        const su = kf(p, [0, 0.5, 0.95, 1.0]);
        const sa2 = Math.PI * (0.88 - 0.76 * su);
        sunP.set(Math.cos(sa2) * 4.6, Math.sin(sa2) * 4.4 - 0.1, -4.5);
        const mu = kf(p, [0, 0, 0.35, 1]);
        const ma = Math.PI * (0.88 - 0.62 * mu);
        moonP.set(Math.cos(ma) * 4.4, Math.sin(ma) * 4.6 - 0.2, -4.5);
        sun.position.copy(sunP);
        sunHalo.position.copy(sunP);
        moon.position.copy(moonP);
        moonHalo.position.copy(moonP);
        const sunUp = sm(-0.2, 0.7, sunP.y) * (1 - sm(0.6, 0.9, n));
        sun.visible = sunHalo.visible = sunUp > 0.02;
        sunHalo.material.opacity = 0.9 * sunUp;
        const moonUp = sm(0.5, 0.85, n);
        moon.visible = moonHalo.visible = moonUp > 0.02;
        moonHalo.material.opacity = 0.8 * moonUp;
        stars.material.opacity = sm(0.55, 0.95, n) * 0.95;
        key.position.lerpVectors(sunP, moonP, sm(0.4, 0.8, n)).multiplyScalar(1.3);
        key.position.z = 3;
        key.color.lerpColors(lw, ln, n);
        key.intensity = mix(2.3, 0.7, n);
        scene.environmentIntensity = mix(1, 0.22, n);
        gMat.color.lerpColors(gDay, gNight, n);
        treeMat.color.lerpColors(tDay, tNight, n);
        winMat.emissiveIntensity = 1.7 * sm(0.35, 0.7, n);
        sh.material.opacity = 0.9 - 0.5 * n;
        dio.rotation.y = -0.4 + p * 0.55;
        camera.position.x = Math.sin(p * 2.4) * 0.5;
        camera.lookAt(0, 0.7, 0);
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a scroll-driven time-of-day scene with Three.js. Model a small diorama: a round island (CylinderGeometry), a two-volume white house made of RoundedBoxGeometry with a blue roof slab, a front door, two glass window planes, and four low-poly trees (cylinder plus squashed sphere). Add a sun and a moon as MeshBasicMaterial spheres with radial-gradient sprites as halos, 160 Points for stars at the back, one DirectionalLight and RoomEnvironment lighting. Compute a night amount n from smoothed scroll progress with held keyframes (0, 0, 0.55, 1). Use it to lerp the page background gradient from pale white-blue through a dusk blue to a deep navy (write the CSS gradient string each frame), to lerp the directional light color and intensity and scene.environmentIntensity down, to move the sun along an arc until it sets and the moon along a shorter one, to raise the window emissiveIntensity, to fade stars in, and to lerp the ground and tree colors. Flip the copy color from dark to white by setting CSS custom properties as n passes 0.3. Orbit the camera very slightly. Provide four labeled sections, dispose everything on unmount, and show the evening state for reduced motion.`,
  });

  // ---------------------------------------------------------------- 11 particles assemble
  add({
    id: 'three-scroll-particles-assemble',
    title: 'Particles assemble',
    sub: 'Scattered points gather into a knot',
    html: page(
      'Gather',
      [
        { k: '01 / Scatter', h: 'Start as noise.', p: 'Twenty thousand points, no shape yet.' },
        { k: '02 / Gather', h: 'Pull toward a form.', p: 'Each point flies in on its own delay.' },
        { k: '03 / Settle', h: 'Almost there.', p: 'Spin and drift calm down as it locks.' },
        { k: '04 / Whole', h: 'A knot, from nothing.', p: 'Scroll back and it scatters again.' },
      ],
      'bl',
    ),
    css:
      BASE +
      `
.d .bg{background:radial-gradient(62% 62% at 50% 42%,#e9f1ff 0%,#f7faff 60%,#fff 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 36;
      camera.position.set(0, 0.6, 7.4);
      camera.lookAt(0, 0.3, 0);
      const NPt = 20000;
      const baseGeo = new THREE.TorusKnotGeometry(1, 0.32, 240, 40, 2, 3);
      extras.push(baseGeo);
      const sampler = new MeshSurfaceSampler(new THREE.Mesh(baseGeo)).build();
      const target = new Float32Array(NPt * 3);
      const startA = new Float32Array(NPt * 3);
      const rand = new Float32Array(NPt);
      const v = new THREE.Vector3();
      for (let i = 0; i < NPt; i++) {
        sampler.sample(v);
        target[i * 3] = v.x;
        target[i * 3 + 1] = v.y;
        target[i * 3 + 2] = v.z;
        const a = rnd() * Math.PI * 2;
        const b = Math.acos(2 * rnd() - 1);
        const r = 3 + Math.pow(rnd(), 0.6) * 5;
        startA[i * 3] = Math.sin(b) * Math.cos(a) * r;
        startA[i * 3 + 1] = Math.cos(b) * r * 0.6;
        startA[i * 3 + 2] = Math.sin(b) * Math.sin(a) * r;
        rand[i] = rnd();
      }
      const pg = new THREE.BufferGeometry();
      pg.setAttribute('position', new THREE.BufferAttribute(target, 3));
      pg.setAttribute('aStart', new THREE.BufferAttribute(startA, 3));
      pg.setAttribute('aRand', new THREE.BufferAttribute(rand, 1));
      const mat = new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        uniforms: {
          uP: { value: 0 },
          uSize: { value: 0.05 },
          uScale: { value: 300 },
          uC1: { value: new THREE.Color(0xa9c8ff) },
          uC2: { value: new THREE.Color(0x0a6cff) },
        },
        vertexShader: `
attribute vec3 aStart;
attribute float aRand;
uniform float uP;
uniform float uSize;
uniform float uScale;
varying float vT;
varying float vR;
void main() {
  float t = clamp(uP * 1.45 - aRand * 0.45, 0.0, 1.0);
  t = t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
  vec3 p = mix(aStart, position, t);
  float a = (1.0 - t) * (1.5 + aRand * 2.0);
  p.xz = mat2(cos(a), sin(a), -sin(a), cos(a)) * p.xz;
  p.y += (1.0 - t) * sin(uP * 6.0 + aRand * 20.0) * 0.15;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * uScale * (0.85 + 0.5 * t) / -mv.z;
  vT = t;
  vR = aRand;
}`,
        fragmentShader: `
uniform vec3 uC1;
uniform vec3 uC2;
varying float vT;
varying float vR;
void main() {
  float d = length(gl_PointCoord - 0.5);
  if (d > 0.5) discard;
  float a = smoothstep(0.5, 0.12, d) * (0.6 + 0.4 * vT);
  vec3 c = mix(uC1, uC2, vR * 0.5 + vT * 0.5);
  gl_FragColor = vec4(c, a);
  #include <colorspace_fragment>
}`,
      });
      const pts = new THREE.Points(pg, mat);
      pts.frustumCulled = false;
      pts.scale.setScalar(0.8);
      scene.add(pts);
      onSize = () => {
        pts.position.x = 0.22 * halfW(7.4);
        mat.uniforms.uScale.value = (H * lib.pixelRatio * 0.5) / Math.tan((camera.fov * Math.PI) / 360);
      };
      const update = (p, s, dt, idx) => {
        mat.uniforms.uP.value = smr(0.02, 0.92, p);
        pts.rotation.y = s * 0.12 + p * 1.6;
        pts.rotation.x = 0.25 + Math.sin(s * 0.3) * 0.05;
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a particles-assemble scroll scene with Three.js. Sample about 20000 points on the surface of a TorusKnotGeometry with MeshSurfaceSampler and store them as the final positions of a Points object. For each point also store a random start position inside a flattened ball of radius 3 to 8 and a random value in 0..1. Render with a ShaderMaterial: a uniform uP carries scroll progress; in the vertex shader compute t = clamp(uP * 1.45 - rand * 0.45, 0, 1) so every point has its own delay, smootherstep it, mix start to target by t, add a swirl rotation around y that fades out as t reaches 1, and size the point by uSize * uScale / -mvPosition.z. In the fragment shader discard outside a circle, soften the edge with smoothstep, mix a pale blue to your accent by rand and t, set alpha from t, and end with the colorspace_fragment include. Set uScale from the canvas height and field of view on resize. Use a sticky canvas, four sections, smoothed progress, and a slow auto-rotation of the cloud. Scrolling back should scatter the points again. Dispose geometry and material on unmount and show the assembled knot for reduced motion.`,
  });

  // ---------------------------------------------------------------- 12 curved gallery
  add({
    id: 'three-scroll-curved-gallery',
    title: 'Curved gallery slide',
    sub: 'Frames glide around a curved arc',
    html: page(
      'Atelier',
      [
        { k: 'No. 01 / Tidal', h: 'A gallery you scroll sideways.', p: 'Vertical wheel, horizontal motion.' },
        { k: 'No. 03 / Quiet', h: 'The ring keeps turning.', p: 'Each frame eases into the center.' },
        { k: 'No. 05 / Drift', h: 'Focus steps closer.', p: 'The centered frame moves forward.' },
        { k: 'No. 07 / Glass', h: 'Mirrors on the floor.', p: 'A faded reflection under each frame.' },
        { k: 'No. 09 / Bloom', h: 'End of the arc.', p: 'Scroll back to run it in reverse.' },
      ],
      'bl',
    ),
    css:
      BASE +
      `
.d .bg{background:linear-gradient(180deg,#f8fbff 0%,#e8f0fd 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 36;
      camera.position.set(0, 0.25, 0.8);
      camera.lookAt(0, 0.1, -4);
      const NI = 9;
      const IW = 384;
      const IH = 512;
      const R = 4.6;
      const STEP = 0.4;
      const PW = 1.2;
      const PH = 1.6;
      const titles = ['Tidal', 'Northern', 'Quiet', 'Harbor', 'Drift', 'Summit', 'Glass', 'Meridian', 'Bloom'];
      const grads = [
        ['#FFEFEA', '#8fbcff'],
        ['#f3f8ff', '#bcd4fb'],
        ['#9fc7ff', '#FF4433'],
        ['#FFF0EE', '#FF7A3D'],
        ['#ffffff', '#a9c8ff'],
        ['#7fb0ff', '#0646b5'],
        ['#eaf3ff', '#6aa8ff'],
        ['#FFF0ED', '#2f7cf5'],
        ['#f6faff', '#9ec2ff'],
      ];
      const paint = (i) => {
        const c = mkCanvas(IW, IH);
        const t = tex(c);
        const rc = mkCanvas(192, 256);
        const rt = tex(rc);
        whenFonts(() => {
          const g = c.getContext('2d');
          g.clearRect(0, 0, IW, IH);
          rr(g, 0, 0, IW, IH, 28);
          g.save();
          g.clip();
          const gr = g.createLinearGradient(0, 0, 0, IH);
          gr.addColorStop(0, grads[i][0]);
          gr.addColorStop(1, grads[i][1]);
          g.fillStyle = gr;
          g.fillRect(0, 0, IW, IH);
          const dark = i === 2 || i === 5 || i === 7;
          g.fillStyle = 'rgba(255,255,255,.88)';
          g.beginPath();
          g.arc(90 + ((i * 97) % 200), 120 + ((i * 53) % 110), 36 + (i % 3) * 10, 0, 6.283);
          g.fill();
          const sh = (i % 3) * 0.06;
          g.fillStyle = 'rgba(255,255,255,.4)';
          g.beginPath();
          g.moveTo(0, IH);
          g.lineTo(0, IH * (0.62 + sh));
          g.lineTo(IW * 0.26, IH * 0.42);
          g.lineTo(IW * 0.48, IH * (0.6 - sh));
          g.lineTo(IW * 0.7, IH * 0.4);
          g.lineTo(IW, IH * 0.58);
          g.lineTo(IW, IH);
          g.fill();
          g.fillStyle = dark ? 'rgba(4,36,107,.78)' : 'rgba(255,255,255,.82)';
          g.beginPath();
          g.moveTo(0, IH);
          g.lineTo(0, IH * 0.78);
          g.lineTo(IW * 0.3, IH * (0.58 + sh));
          g.lineTo(IW * 0.58, IH * 0.76);
          g.lineTo(IW * 0.82, IH * 0.62);
          g.lineTo(IW, IH * 0.74);
          g.lineTo(IW, IH);
          g.fill();
          g.textAlign = 'left';
          g.fillStyle = dark ? '#FFF0ED' : '#86868B';
          g.font = '500 15px "Geist Mono", ui-monospace, monospace';
          g.fillText('NO. 0' + (i + 1), 28, IH - 62);
          g.fillStyle = dark ? '#fff' : '#1D1D1F';
          g.font = '600 38px Geist, system-ui, sans-serif';
          g.fillText(titles[i], 28, IH - 24);
          g.restore();
          t.needsUpdate = true;
          const r2 = rc.getContext('2d');
          r2.globalCompositeOperation = 'source-over';
          r2.clearRect(0, 0, 192, 256);
          r2.save();
          r2.translate(0, 256);
          r2.scale(1, -1);
          r2.drawImage(c, 0, 0, 192, 256);
          r2.restore();
          r2.globalCompositeOperation = 'destination-in';
          const fg = r2.createLinearGradient(0, 0, 0, 256);
          fg.addColorStop(0, 'rgba(0,0,0,.3)');
          fg.addColorStop(0.45, 'rgba(0,0,0,0)');
          r2.fillStyle = fg;
          r2.fillRect(0, 0, 192, 256);
          rt.needsUpdate = true;
        });
        return [t, rt];
      };
      const ring = new THREE.Group();
      scene.add(ring);
      const pGeo = new THREE.PlaneGeometry(PW, PH);
      const pivots = [];
      for (let i = 0; i < NI; i++) {
        const pv = new THREE.Group();
        const pair = paint(i);
        const img = new THREE.Mesh(pGeo, new THREE.MeshBasicMaterial({ map: pair[0], transparent: true, toneMapped: false }));
        const refl = new THREE.Mesh(pGeo, new THREE.MeshBasicMaterial({ map: pair[1], transparent: true, toneMapped: false, depthWrite: false }));
        refl.position.y = -PH - 0.04;
        pv.add(img, refl);
        ring.add(pv);
        pivots.push(pv);
      }
      const update = (p, s, dt, idx) => {
        const ig = p * (NI - 1);
        ring.rotation.y = ig * STEP;
        pivots.forEach((pv, i) => {
          const a = i * STEP;
          const f = 1 - sm(0, 1, Math.abs(i - ig));
          const Ri = R - 0.4 * f;
          pv.position.set(Ri * Math.sin(a), 0.5 + Math.sin(s * 0.8 + i) * 0.015, -Ri * Math.cos(a));
          pv.rotation.y = -a;
          pv.rotation.z = (i - ig) * -0.015;
          pv.scale.setScalar(1 + 0.14 * f);
        });
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a curved image gallery that slides sideways as the visitor scrolls down, with Three.js. Draw nine portrait images (abstract skies, a sun, two mountain layers, a mono caption and a title) onto 384 by 512 canvases with rounded corners and use them as CanvasTexture maps on PlaneGeometry meshes with MeshBasicMaterial (transparent, toneMapped false). Place the camera at the center of a ring and arrange the planes on a circle of radius 4.6, 0.4 radians apart, each rotated by minus its angle so it faces the camera. Parent them to a group and set group.rotation.y = progress * (count - 1) * 0.4 so vertical scroll turns the ring and the frames slide left. Each frame, give the plane nearest the center a focus value from a smoothstep of its distance and use it to scale the plane up 14 percent and pull it 0.4 units toward the camera. Under each plane add a mirrored reflection plane whose canvas copy is flipped vertically and faded with a destination-in linear gradient. Make a sticky canvas, smooth scroll progress, add short synced captions, dispose canvases, geometries and materials on unmount, and snap between frames for reduced motion.`,
  });

  // ---------------------------------------------------------------- 13 steps sticky
  add({
    id: 'three-scroll-steps-sticky',
    title: 'Numbered 3D steps',
    sub: 'Sticky object changes on every step',
    html: page(
      'Pod',
      [
        { k: 'Step 01 / Start', h: 'A pure form.', p: 'A matte pearl pod. Nothing added yet.' },
        { k: 'Step 02 / Color', h: 'Pick your blue.', p: 'Swap the shell in one tap.' },
        { k: 'Step 03 / Finish', h: 'Gloss and a band.', p: 'Clear coat, plus a metal ring.' },
        { k: 'Step 04 / Light', h: 'Wake it up.', p: 'The ring glows when it is listening.' },
      ],
      'l',
      '<div class="num">01</div>',
    ),
    css:
      BASE +
      `
.d .bg{background:radial-gradient(60% 62% at 70% 48%,#e3eeff 0%,#f6f9ff 60%,#fff 100%)}
.d .num{position:absolute;right:9%;top:13%;font:600 clamp(26px,12cqw,60px)/1 var(--ml-mono);letter-spacing:-.04em;color:transparent;-webkit-text-stroke:1px var(--ml-accent-line);transition:opacity .2s linear}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 30;
      camera.position.set(0, 0.5, 7.4);
      camera.lookAt(0, 0.1, 0);
      scene.environmentIntensity = 1.15;
      const rig = new THREE.Group();
      scene.add(rig);
      const pod = new THREE.Group();
      rig.add(pod);
      const bodyMat = new THREE.MeshPhysicalMaterial({ color: 0xf1f6ff, roughness: 0.75, metalness: 0.1, clearcoat: 0, clearcoatRoughness: 0.1 });
      pod.add(new THREE.Mesh(new THREE.CapsuleGeometry(0.58, 0.95, 20, 48), bodyMat));
      const gC = mkCanvas(256, 64);
      {
        const g = gC.getContext('2d');
        g.fillStyle = 'rgba(8,40,110,.55)';
        for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 32; c++) {
            g.beginPath();
            g.arc(4 + c * 8 + (r % 2) * 4, 8 + r * 16, 2.6, 0, 6.283);
            g.fill();
          }
        }
      }
      const gT = tex(gC);
      gT.wrapS = THREE.RepeatWrapping;
      gT.repeat.set(2, 1);
      const grille = new THREE.Mesh(
        new THREE.CylinderGeometry(0.586, 0.586, 0.55, 64, 1, true),
        new THREE.MeshStandardMaterial({ map: gT, transparent: true, roughness: 0.6 }),
      );
      grille.position.y = -0.1;
      pod.add(grille);
      const ledMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0x7fb8ff, emissiveIntensity: 0, roughness: 0.3 });
      const led = new THREE.Mesh(new THREE.TorusGeometry(0.34, 0.02, 12, 64), ledMat);
      led.rotation.x = Math.PI / 2;
      led.position.y = 0.957;
      pod.add(led);
      const band = new THREE.Mesh(new THREE.TorusGeometry(0.6, 0.045, 16, 64), new THREE.MeshStandardMaterial({ color: 0xe9eef8, roughness: 0.22, metalness: 1 }));
      band.rotation.x = Math.PI / 2;
      pod.add(band);
      const sh = blob(2.6, 1.0, 0.34);
      sh.position.y = -1.35;
      rig.add(sh);
      const cW = new THREE.Color(0xf1f6ff);
      const cBl = new THREE.Color(0x0a6cff);
      const num = root.querySelector('.num');
      let lastN = -1;
      onSize = () => {
        rig.position.x = 0.26 * halfW(7.4);
      };
      const update = (p, s, dt, idx) => {
        bodyMat.color.lerpColors(cW, cBl, kf(p, [0, 1, 1, 1], 0.12));
        const fin = kf(p, [0, 0, 1, 1], 0.12);
        bodyMat.roughness = mix(0.75, 0.12, fin);
        bodyMat.clearcoat = fin;
        band.position.y = kf(p, [2.6, 2.6, 0.38, 0.38], 0.12);
        const lit = kf(p, [0, 0, 0, 1], 0.12);
        ledMat.emissiveIntensity = 2.6 * lit;
        pod.rotation.y = kf(p, [0.3, 1.7, 3.3, 5.0], 0.12) + s * 0.05;
        pod.scale.setScalar(1.25 + 0.06 * lit);
        pod.position.y = Math.sin(s * 1.1) * 0.05;
        const r = Math.round(idx);
        if (r !== lastN) {
          lastN = r;
          num.textContent = '0' + (r + 1);
        }
        num.style.opacity = (1 - sm(0.15, 0.5, Math.abs(idx - r))).toFixed(2);
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a sticky 3D scrollytelling section with numbered steps, using Three.js. Keep one product pinned on the right (position: sticky, or a fixed canvas inside a tall container) and let four steps scroll on the left. Model a speaker pod: a CapsuleGeometry body in MeshPhysicalMaterial, a perforated grille made from a transparent canvas texture of dots wrapped on an open CylinderGeometry with RepeatWrapping, a small TorusGeometry LED ring on top, and a metal TorusGeometry band that starts above the frame. Light it with RoomEnvironment and a soft contact shadow. Compute one smoothed progress value from the scroll container and drive every change from it with held smootherstep keyframes: step 1 matte pearl, step 2 color lerps to your accent blue, step 3 roughness falls from 0.75 to 0.12 while clearcoat rises and the band drops down onto the body, step 4 the LED emissiveIntensity ramps up and the pod scales 6 percent. Rotate the pod to a new angle at each step. Show a large outlined step numeral that updates as the nearest step changes, and fade each step's copy in sync. Dispose textures, geometries and materials on unmount and apply the final state without motion for reduced motion.`,
  });

  // ---------------------------------------------------------------- 14 ribbon text
  add({
    id: 'three-scroll-ribbon-text',
    title: 'Ribbon draws a headline',
    sub: 'A glossy ribbon writes words as it grows',
    html: page(
      'Flow',
      [
        { k: '01 / Draw', h: 'A line that finds its way.', p: 'The ribbon grows as you scroll.' },
        { k: '02 / Twist', h: 'Depth in every turn.', p: 'A slow twist catches the light.' },
        { k: '03 / Write', h: 'Words arrive on cue.', p: 'Each one lands where the ribbon passes.' },
        { k: '04 / Finish', h: 'Ends where you stop.', p: 'Scroll back and it rewinds.' },
      ],
      'bl',
      '<span class="w">Design</span><span class="w">that</span><span class="w">moves</span><span class="w">with</span><span class="w">you</span>',
    ),
    css:
      BASE +
      `
.d .bg{background:radial-gradient(70% 60% at 50% 45%,#eaf2ff 0%,#f7faff 62%,#fff 100%)}
.d .w{position:absolute;left:0;top:0;opacity:0;white-space:nowrap;font:600 clamp(12px,5cqw,26px)/1 var(--ml-font);letter-spacing:-.05em;color:var(--ml-ink);text-shadow:0 0 12px #fff,0 0 4px #fff}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      camera.fov = 32;
      camera.position.set(0, 0.1, 7.0);
      camera.lookAt(0, 0, 0);
      scene.environmentIntensity = 1.2;
      const curve = new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-2.7, -0.7, 0),
          new THREE.Vector3(-1.8, 0.4, 0.6),
          new THREE.Vector3(-0.8, 0.9, 0),
          new THREE.Vector3(-0.1, 0.1, -0.8),
          new THREE.Vector3(0.6, -0.6, -0.2),
          new THREE.Vector3(1.2, 0, 0.8),
          new THREE.Vector3(1.7, 0.8, 0.2),
          new THREE.Vector3(2.3, 0.3, -0.6),
          new THREE.Vector3(2.7, -0.5, 0.2),
        ],
        false,
        'catmullrom',
        0.5,
      );
      const M = 360;
      const WID = 0.44;
      const pos = new Float32Array((M + 1) * 2 * 3);
      const colr = new Float32Array((M + 1) * 2 * 3);
      const ids = [];
      const P = new THREE.Vector3();
      const T = new THREE.Vector3();
      const Bn = new THREE.Vector3();
      const Nn = new THREE.Vector3();
      const up = new THREE.Vector3(0, 1, 0);
      const cA = new THREE.Color(0x4fa3ff);
      const cB = new THREE.Color(0x0a6cff);
      const cc = new THREE.Color();
      for (let k = 0; k <= M; k++) {
        const u = k / M;
        curve.getPointAt(u, P);
        curve.getTangentAt(u, T);
        Bn.crossVectors(T, up).normalize();
        Nn.crossVectors(Bn, T).normalize();
        const tw = u * 13 + 0.5;
        const sx = Bn.x * Math.cos(tw) + Nn.x * Math.sin(tw);
        const sy = Bn.y * Math.cos(tw) + Nn.y * Math.sin(tw);
        const sz = Bn.z * Math.cos(tw) + Nn.z * Math.sin(tw);
        const h = WID / 2;
        pos.set([P.x - sx * h, P.y - sy * h, P.z - sz * h, P.x + sx * h, P.y + sy * h, P.z + sz * h], k * 6);
        cc.lerpColors(cA, cB, u);
        colr.set([cc.r, cc.g, cc.b, cc.r, cc.g, cc.b], k * 6);
        if (k < M) {
          const a = k * 2;
          ids.push(a, a + 1, a + 2, a + 1, a + 3, a + 2);
        }
      }
      const rg = new THREE.BufferGeometry();
      rg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      rg.setAttribute('color', new THREE.BufferAttribute(colr, 3));
      rg.setIndex(ids);
      rg.computeVertexNormals();
      rg.setDrawRange(0, 0);
      const rib = new THREE.Mesh(
        rg,
        new THREE.MeshPhysicalMaterial({ vertexColors: true, side: THREE.DoubleSide, roughness: 0.2, metalness: 0.1, clearcoat: 1, clearcoatRoughness: 0.05, iridescence: 0.5, iridescenceIOR: 1.3 }),
      );
      rib.frustumCulled = false;
      scene.add(rib);
      const tip = new THREE.Mesh(new THREE.SphereGeometry(0.13, 24, 16), new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.1, clearcoat: 1 }));
      scene.add(tip);
      const words = [...root.querySelectorAll('.w')];
      const wu = [0.08, 0.27, 0.5, 0.72, 0.92];
      const wp = new THREE.Vector3();
      const update = (p, s, dt, idx) => {
        const draw = 0.05 + 0.95 * smr(0.02, 0.96, p);
        rg.setDrawRange(0, Math.floor(draw * M) * 6);
        curve.getPointAt(Math.max(0.001, draw), P);
        tip.position.copy(P);
        tip.visible = draw > 0.01 && draw < 0.995;
        camera.position.set(mix(-0.8, 0.8, p), 0.1 + Math.sin(s * 0.4) * 0.03, 7.0 - p * 0.5);
        camera.lookAt(0, 0, 0);
        camera.updateMatrixWorld();
        words.forEach((el, i) => {
          curve.getPointAt(wu[i], wp);
          wp.y += 0.38;
          wp.project(camera);
          const x = Math.max(W * 0.14, Math.min(W * 0.86, (wp.x * 0.5 + 0.5) * W));
          const y = (-wp.y * 0.5 + 0.5) * H;
          const o = sm(wu[i], wu[i] + 0.07, draw);
          el.style.opacity = o.toFixed(3);
          el.style.transform = 'translate(' + x.toFixed(1) + 'px,' + (y + (1 - o) * 10).toFixed(1) + 'px) translate(-50%,-100%)';
        });
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a ribbon that draws itself along a 3D path while headline words appear along it, using Three.js. Create a CatmullRomCurve3 through nine points that make a flowing S with a little depth. Build a flat ribbon as an indexed BufferGeometry: sample 360 points with getPointAt and getTangentAt, compute a side vector from cross(tangent, up) rotated around the tangent by an angle that grows with the curve parameter (a slow twist), push two vertices per sample at plus and minus half the width, write two triangles per segment into the index, add a per-vertex blue gradient, and call computeVertexNormals. Use MeshPhysicalMaterial with vertexColors, DoubleSide, clearcoat 1 and a little iridescence, lit by RoomEnvironment. Reveal it with geometry.setDrawRange(0, floor(progress * segments) * 6) driven by lerp-smoothed scroll progress, and park a small glossy sphere at the growing tip. For the headline, place one HTML word per anchor parameter along the curve: project each anchor with vector.project(camera), translate the span to that pixel and fade it in once the drawn fraction passes its parameter. Drift the camera slightly with progress. Add four short synced captions, dispose the geometry and materials on unmount, and show the full ribbon for reduced motion.`,
  });

  // ---------------------------------------------------------------- 15 card path
  add({
    id: 'three-scroll-card-path',
    title: 'Camera along a path',
    sub: 'Fly a curve past floating UI cards',
    html: page(
      'Drift',
      [
        { k: '01 / Alerts', h: 'Updates that find you.', p: 'A payment lands as you pass.' },
        { k: '02 / Calendar', h: 'Your week, in reach.', p: 'Plans float by at eye level.' },
        { k: '03 / Chat', h: 'Replies without the wait.', p: 'Conversations drift into view.' },
        { k: '04 / Insights', h: 'Numbers at eye level.', p: 'Charts sit right where you look.' },
        { k: '05 / Controls', h: 'Settings you can feel.', p: 'End of the route. Scroll back to repeat.' },
      ],
      'bl',
    ),
    css:
      BASE +
      `
.d .bg{background:linear-gradient(180deg,#f8fbff 0%,#eaf2ff 100%)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry, SimplexNoise, MeshSurfaceSampler } = lib;
      const host = root.querySelector('.gl');
      const sc = root.querySelector('.sc');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 140);
      const extras = [];
      const cleanups = [];
      let alive = true;
      let W = 1;
      let H = 1;
      let onSize = null;
      let seed = 11;
      const rnd = () => {
        seed = (seed * 16807) % 2147483647;
        return (seed - 1) / 2147483646;
      };
      const clamp01 = (x) => (x < 0 ? 0 : x > 1 ? 1 : x);
      const sm = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * (3 - 2 * t);
      };
      const smr = (a, b, x) => {
        const t = clamp01((x - a) / (b - a));
        return t * t * t * (t * (t * 6 - 15) + 10);
      };
      const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
      const mix = (a, b, t) => a + (b - a) * t;
      const kf = (p, a, h = 0.16) => {
        const x = clamp01(p) * (a.length - 1);
        const i = Math.min(a.length - 2, Math.floor(x));
        const t = clamp01((x - i - h) / (1 - 2 * h));
        return a[i] + (a[i + 1] - a[i]) * (t * t * t * (t * (t * 6 - 15) + 10));
      };
      const halfW = (dist) => Math.tan((camera.fov * Math.PI) / 360) * dist * camera.aspect;
      const mkCanvas = (w, h) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        return c;
      };
      const tex = (c) => {
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        extras.push(t);
        return t;
      };
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const whenFonts = (fn) => {
        fn();
        if (document.fonts && document.fonts.load) {
          document.fonts.load('600 40px Geist').then(
            () => {
              if (alive) fn();
            },
            () => {},
          );
        }
      };
      const radial = (r, g, b, a) => {
        const c = mkCanvas(128, 128);
        const x = c.getContext('2d');
        const gr = x.createRadialGradient(64, 64, 0, 64, 64, 64);
        gr.addColorStop(0, `rgba(${r},${g},${b},${a})`);
        gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
        x.fillStyle = gr;
        x.fillRect(0, 0, 128, 128);
        return tex(c);
      };
      const blob = (w, d, a) => {
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: radial(10, 60, 150, a), transparent: true, depthWrite: false }),
        );
        m.rotation.x = -Math.PI / 2;
        scene.add(m);
        return m;
      };
      const drawUI = (g, kind, w, h) => {
        const BL = '#FF4433';
        const BG = '#E2D6CC';
        const BG2 = '#EFE7E0';
        const INK = '#1D1D1F';
        const MU = '#86868B';
        const F = 'Geist, system-ui, sans-serif';
        g.setTransform(1, 0, 0, 1, 0, 0);
        g.clearRect(0, 0, w, h);
        g.scale(w / 320, h / 224);
        const bar = (x, y, bw, bh, c) => {
          rr(g, x, y, bw, bh, bh / 2);
          g.fillStyle = c;
          g.fill();
        };
        const txt = (s, x, y, font, c, al) => {
          g.font = font;
          g.fillStyle = c;
          g.textAlign = al || 'left';
          g.textBaseline = 'alphabetic';
          g.fillText(s, x, y);
        };
        rr(g, 4, 4, 312, 216, 22);
        g.fillStyle = '#fff';
        g.fill();
        g.lineWidth = 2;
        g.strokeStyle = '#EAE1D9';
        g.stroke();
        g.save();
        rr(g, 4, 4, 312, 216, 22);
        g.clip();
        const k = kind % 8;
        if (k === 0) {
          rr(g, 22, 24, 44, 44, 13);
          g.fillStyle = BL;
          g.fill();
          g.strokeStyle = '#fff';
          g.lineWidth = 4;
          g.lineCap = 'round';
          g.lineJoin = 'round';
          g.beginPath();
          g.moveTo(35, 46);
          g.lineTo(42, 53);
          g.lineTo(54, 39);
          g.stroke();
          txt('Payment received', 78, 42, '600 19px ' + F, INK);
          txt('Invoice 2048 from Maya R.', 78, 62, '500 13px ' + F, MU);
          bar(22, 96, 276, 1.5, BG);
          txt('Amount', 22, 128, '500 13px ' + F, MU);
          txt('$1,280.00', 22, 172, '600 44px ' + F, INK);
          bar(22, 190, 90, 10, BG2);
          bar(210, 150, 88, 28, '#FFF0EE');
          txt('Paid', 254, 169, '600 13px ' + F, '#B3150F', 'center');
        } else if (k === 1) {
          txt('October', 24, 44, '600 22px ' + F, INK);
          bar(250, 28, 48, 20, '#FFF0EE');
          const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
          for (let c = 0; c < 7; c++) txt(days[c], 36 + c * 41, 72, '600 11px ' + F, MU, 'center');
          for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 7; c++) {
              const n = r * 7 + c + 1;
              const on = n === 17;
              if (on) {
                rr(g, 36 + c * 41 - 17, 84 + r * 32, 34, 28, 10);
                g.fillStyle = BL;
                g.fill();
              } else if (n === 9 || n === 23) {
                rr(g, 36 + c * 41 - 17, 84 + r * 32, 34, 28, 10);
                g.fillStyle = '#FFF0EE';
                g.fill();
              }
              txt(String(n), 36 + c * 41, 103 + r * 32, '600 13px ' + F, on ? '#fff' : INK, 'center');
            }
          }
        } else if (k === 2) {
          rr(g, 22, 24, 170, 40, 16);
          g.fillStyle = BG2;
          g.fill();
          txt('Is the file ready?', 38, 50, '500 14px ' + F, INK);
          rr(g, 120, 78, 178, 40, 16);
          g.fillStyle = BL;
          g.fill();
          txt('Shipping it today', 136, 104, '500 14px ' + F, '#fff');
          rr(g, 22, 132, 130, 40, 16);
          g.fillStyle = BG2;
          g.fill();
          txt('Perfect, thanks', 38, 158, '500 14px ' + F, INK);
          bar(22, 188, 190, 14, '#fff');
          rr(g, 22, 186, 276, 22, 11);
          g.strokeStyle = BG;
          g.lineWidth = 1.5;
          g.stroke();
          bar(34, 195, 70, 5, BG);
        } else if (k === 3) {
          txt('Visitors', 24, 40, '500 14px ' + F, MU);
          txt('48.2k', 24, 84, '600 42px ' + F, INK);
          bar(188, 52, 76, 28, '#FFF0EE');
          txt('+12.4%', 226, 71, '600 13px ' + F, '#B3150F', 'center');
          const pts = [0.7, 0.55, 0.62, 0.4, 0.46, 0.3, 0.34, 0.15];
          g.beginPath();
          pts.forEach((v, i) => {
            const x = 24 + (i / 7) * 272;
            const y = 104 + v * 96;
            if (i) g.lineTo(x, y);
            else g.moveTo(x, y);
          });
          g.lineWidth = 3.5;
          g.lineJoin = 'round';
          g.strokeStyle = BL;
          g.stroke();
          g.lineTo(296, 212);
          g.lineTo(24, 212);
          g.closePath();
          const gr = g.createLinearGradient(0, 110, 0, 212);
          gr.addColorStop(0, 'rgba(255,68,51,.22)');
          gr.addColorStop(1, 'rgba(255,68,51,0)');
          g.fillStyle = gr;
          g.fill();
        } else if (k === 4) {
          const rows = ['Notifications', 'Dark mode', 'Auto-save'];
          rows.forEach((s, i) => {
            const y = 36 + i * 60;
            txt(s, 24, y + 22, '600 16px ' + F, INK);
            bar(24, y + 32, 120, 6, BG2);
            const on = i !== 1;
            rr(g, 238, y + 6, 60, 32, 16);
            g.fillStyle = on ? BL : BG;
            g.fill();
            g.beginPath();
            g.arc(on ? 282 : 254, y + 22, 12, 0, 6.283);
            g.fillStyle = '#fff';
            g.fill();
          });
        } else if (k === 5) {
          const gr = g.createLinearGradient(24, 24, 84, 84);
          gr.addColorStop(0, '#FF7A3D');
          gr.addColorStop(1, BL);
          g.beginPath();
          g.arc(56, 62, 32, 0, 6.283);
          g.fillStyle = gr;
          g.fill();
          txt('M', 56, 74, '600 32px ' + F, '#fff', 'center');
          txt('Maya Reyes', 104, 58, '600 22px ' + F, INK);
          txt('Product designer', 104, 80, '500 14px ' + F, MU);
          bar(22, 118, 276, 1.5, BG);
          ['128', '4.9', '36'].forEach((s, i) => {
            txt(s, 22 + i * 96, 160, '600 28px ' + F, INK);
            bar(22 + i * 96, 176, 54, 7, BG2);
          });
        } else if (k === 6) {
          const rows = ['Review the brief', 'Send the invoice', 'Book Tomas call'];
          rows.forEach((s, i) => {
            const y = 30 + i * 58;
            rr(g, 24, y + 4, 28, 28, 9);
            g.fillStyle = i === 0 ? BL : '#fff';
            g.fill();
            g.lineWidth = 2;
            g.strokeStyle = i === 0 ? BL : BG;
            g.stroke();
            if (i === 0) {
              g.strokeStyle = '#fff';
              g.lineWidth = 3.5;
              g.lineCap = 'round';
              g.beginPath();
              g.moveTo(31, y + 18);
              g.lineTo(36, y + 23);
              g.lineTo(45, y + 12);
              g.stroke();
            }
            txt(s, 66, y + 24, '600 17px ' + F, i === 0 ? MU : INK);
            if (i === 0) bar(66, y + 17, 150, 2, MU);
          });
        } else {
          const gr = g.createLinearGradient(0, 0, 0, 150);
          gr.addColorStop(0, '#FFF0ED');
          gr.addColorStop(1, '#F1F6FF');
          g.fillStyle = gr;
          g.fillRect(4, 4, 312, 150);
          g.beginPath();
          g.arc(232, 66, 22, 0, 6.283);
          g.fillStyle = '#fff';
          g.fill();
          g.fillStyle = '#9FC4FF';
          g.beginPath();
          g.moveTo(4, 154);
          g.lineTo(4, 112);
          g.lineTo(80, 60);
          g.lineTo(140, 108);
          g.lineTo(196, 80);
          g.lineTo(316, 140);
          g.lineTo(316, 154);
          g.fill();
          txt('Golden hour', 22, 188, '600 18px ' + F, INK);
          bar(22, 198, 100, 6, BG2);
        }
        g.restore();
      };
      const uiTex = (kind) => {
        const c = mkCanvas(640, 448);
        const t = tex(c);
        whenFonts(() => {
          drawUI(c.getContext('2d'), kind, 640, 448);
          t.needsUpdate = true;
        });
        return t;
      };
      camera.fov = 44;
      scene.fog = new THREE.Fog(0xf1f6ff, 5, 20);
      scene.environmentIntensity = 1;
      const curve = new THREE.CatmullRomCurve3(
        [
          new THREE.Vector3(-2.6, 0, 6),
          new THREE.Vector3(-1.2, 0.5, 2),
          new THREE.Vector3(0.8, 0.1, -2),
          new THREE.Vector3(2.2, -0.4, -6),
          new THREE.Vector3(1, -0.1, -10),
          new THREE.Vector3(-1.4, 0.4, -14),
          new THREE.Vector3(-2.2, 0, -18),
          new THREE.Vector3(0, -0.3, -22),
          new THREE.Vector3(2.4, 0.2, -26),
          new THREE.Vector3(2.2, 0, -30),
        ],
        false,
        'centripetal',
      );
      const route = curve.getSpacedPoints(180);
      const ra = new Float32Array(route.length * 3);
      route.forEach((q, i) => {
        ra[i * 3] = q.x;
        ra[i * 3 + 1] = q.y - 0.25;
        ra[i * 3 + 2] = q.z;
      });
      const rg = new THREE.BufferGeometry();
      rg.setAttribute('position', new THREE.BufferAttribute(ra, 3));
      const dotC = mkCanvas(64, 64);
      {
        const g = dotC.getContext('2d');
        g.fillStyle = '#fff';
        g.beginPath();
        g.arc(32, 32, 28, 0, 6.283);
        g.fill();
      }
      scene.add(new THREE.Points(rg, new THREE.PointsMaterial({ color: 0x4fa3ff, size: 0.07, map: tex(dotC), alphaTest: 0.4 })));
      const shadowTex = radial(10, 60, 150, 0.45);
      const cGeo = new THREE.PlaneGeometry(1.5, 1.05);
      const sGeo = new THREE.PlaneGeometry(2.7, 2.1);
      const P = new THREE.Vector3();
      const T = new THREE.Vector3();
      const Nn = new THREE.Vector3();
      const up = new THREE.Vector3(0, 1, 0);
      const defs = [];
      for (let k = 0; k < 5; k++) defs.push({ u: 0.02 + (k / 4) * 0.84 + 0.11, side: k % 2 ? 1 : -1, kind: k, focus: k });
      for (let k = 0; k < 3; k++) defs.push({ u: 0.02 + (k / 4) * 0.84 + 0.175, side: k % 2 ? -1 : 1, kind: 5 + k, focus: -1 });
      const cards = defs.map((d, i) => {
        curve.getPointAt(d.u, P);
        curve.getTangentAt(d.u, T);
        Nn.crossVectors(T, up).normalize();
        const m = new THREE.Mesh(cGeo, new THREE.MeshBasicMaterial({ map: uiTex(d.kind), transparent: true, toneMapped: false }));
        m.position.set(P.x + Nn.x * d.side * 1.15, P.y + 0.1, P.z + Nn.z * d.side * 1.15);
        m.lookAt(P.x - T.x * 2.4, P.y + 0.1, P.z - T.z * 2.4);
        const sh = new THREE.Mesh(sGeo, new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false, opacity: 0.6 }));
        sh.position.set(0.05, -0.12, -0.04);
        m.add(sh);
        scene.add(m);
        return { m, y: m.position.y, f: d.focus, i };
      });
      const L = new THREE.Vector3();
      const update = (p, s, dt, idx) => {
        const uc = 0.02 + p * 0.84;
        curve.getPointAt(uc, P);
        curve.getPointAt(Math.min(1, uc + 0.05), L);
        camera.position.set(P.x, P.y + 0.1, P.z);
        camera.lookAt(L.x, L.y + 0.05, L.z);
        cards.forEach((c) => {
          const f = c.f >= 0 ? 1 - sm(0.1, 0.7, Math.abs(idx - c.f)) : 0;
          c.m.scale.setScalar(1 + 0.2 * f);
          c.m.position.y = c.y + Math.sin(s * 1.2 + c.i) * 0.05;
        });
      };
      const secs = [...root.querySelectorAll('.tx')];
      const N = secs.length;
      const dots = [...root.querySelectorAll('.rail i')];
      const fill = root.querySelector('.rail b');
      const hint = root.querySelector('.hint');
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        if (onSize) onSize();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);
      let userUntil = 0;
      let ab = 1;
      let autoT = 0;
      let prog = 0;
      const yieldToUser = () => {
        userUntil = performance.now() + 2500;
        ab = 0;
      };
      sc.addEventListener('wheel', yieldToUser, { passive: true });
      sc.addEventListener('pointerdown', yieldToUser);
      sc.addEventListener('touchstart', yieldToUser, { passive: true });
      const LMV = 1.9;
      const LDW = 1.1;
      const LTOP = 1.2;
      const LEND = 0.8;
      const LBACK = 3.6;
      const LFWD = (N - 1) * (LMV + LDW);
      const LTOT = LTOP + LFWD + LEND + LBACK;
      let last = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) {
          last = t;
          return;
        }
        const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
        last = t;
        const s = t / 1000;
        const max = sc.scrollHeight - sc.clientHeight;
        if (max > 0 && t >= userUntil) {
          autoT += dt;
          const a = autoT % LTOT;
          let k;
          if (a < LTOP) k = 0;
          else if (a < LTOP + LFWD) {
            const b = a - LTOP;
            const i = Math.floor(b / (LMV + LDW));
            const r = b - i * (LMV + LDW);
            k = (i + (r < LMV ? ease(r / LMV) : 1)) / (N - 1);
          } else if (a < LTOP + LFWD + LEND) k = 1;
          else k = 1 - ease((a - LTOP - LFWD - LEND) / LBACK);
          ab = Math.min(1, ab + dt / 1.5);
          const cur = sc.scrollTop;
          sc.scrollTop = cur + (k * max - cur) * (0.04 + 0.96 * ab * ab);
        }
        const target = max > 0 ? sc.scrollTop / max : 0;
        prog += (target - prog) * (1 - Math.exp(-dt * 5.5));
        const idx = prog * (N - 1);
        for (let i = 0; i < N; i++) {
          const o = 1 - sm(0.1, 0.5, Math.abs(idx - i));
          const e = secs[i];
          e.style.setProperty('--o', o.toFixed(3));
          e.style.setProperty('--y', ((idx < i ? 1 : -1) * 26 * (1 - o)).toFixed(1) + 'px');
          e.style.visibility = o < 0.01 ? 'hidden' : 'visible';
        }
        if (fill) fill.style.transform = 'scaleY(' + prog.toFixed(4) + ')';
        for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('on', Math.round(idx) === i);
        if (hint) hint.style.opacity = (1 - sm(0.01, 0.08, prog)).toFixed(2);
        update(prog, s, dt, idx);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);
      
      return () => {
        alive = false;
        cancelAnimationFrame(raf);
        ro.disconnect();
        sc.removeEventListener('wheel', yieldToUser);
        sc.removeEventListener('pointerdown', yieldToUser);
        sc.removeEventListener('touchstart', yieldToUser);
        cleanups.forEach((f) => f());
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          if (o.isInstancedMesh) o.dispose();
          const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
          for (const m of ms) {
            for (const k in m) {
              const v = m[k];
              if (v && v.isTexture) v.dispose();
            }
            m.dispose();
          }
        });
        extras.forEach((x) => x.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a camera-on-a-rail scroll scene with Three.js: the camera follows a CatmullRomCurve3 past floating UI cards. Define a curve of ten points that snakes about 36 units along -z with gentle x and y changes (use the centripetal type). Draw the route as a Points object from curve.getSpacedPoints(180) in your accent blue, a little below the path. Create eight card meshes: PlaneGeometry with a MeshBasicMaterial CanvasTexture of a rounded UI card (a payment notice, a calendar, a chat, a chart, toggles, a profile, a task list, a photo). For each, pick a parameter u, read the point and tangent with getPointAt and getTangentAt, offset 1.35 units sideways along cross(tangent, up) alternating left and right, and use object.lookAt to turn the card back toward the oncoming camera. Add a radial-gradient shadow plane behind every card and fog in the page color. Smooth scroll progress, then each frame set the camera to curve.getPointAt(0.02 + progress * 0.84) plus a small height offset and lookAt the point 5 percent further along. Scale the card for the current section up 20 percent and bob all cards with a sine. Fade five short captions in sync, dispose textures, geometries and materials on unmount, and offer a reduced-motion fallback that jumps between stops.`,
  });
})();
