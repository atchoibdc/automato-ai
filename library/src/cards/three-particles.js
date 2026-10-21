// 3D particles (Three.js). Points-based cards: round soft sprites, white + blue, pointer response + idle autoplay.
// Three.js r186.
// Each run() is self-contained (it is serialised into the export), so every card carries the same small base.
(() => {
  const GLCSS = '.d .gl{position:absolute;inset:0}.d .gl canvas{display:block;width:100%;height:100%}';
  const LIGHT =
    '.d{background:#fff}.d .bg{position:absolute;inset:0;background:radial-gradient(70% 60% at 62% 38%,#e3efff 0%,#f6f9ff 55%,#fff 100%)}' + GLCSS;
  const DARK =
    '.d{background:#050c1c}.d .bg{position:absolute;inset:0;background:radial-gradient(80% 70% at 62% 42%,#12306b 0%,#091a3d 55%,#050c1c 100%)}' + GLCSS;
  const COPY_L =
    '.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-accent)}.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}';
  const COPY_D =
    '.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:#FF997A}.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em;color:#fff}';
  const HTML = '<div class="bg"></div><div class="gl"></div>';
  const withCopy = (k, h) => HTML + '<div class="copy"><p class="k">' + k + '</p><h3>' + h + '</h3></div>';

  // 1. Galaxy spiral ------------------------------------------------------------------------------
  ML.add({
    id: 'three-particles-galaxy',
    cat: 'three-particles',
    title: 'Spiral galaxy',
    sub: 'Three arms of points turn, pointer tilts',
    libs: ['three'],
    html: withCopy('Particles', 'Wide open space.'),
    css: DARK + COPY_D,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const N = 18000;
      const P = mkPts(N, { size: 0.05, add: true, near: 3, far: 14, fade: 0.55, core: 0.1, gain: 0.85 });
      const stops = [rgb(0xffffff), rgb(0xcfe3ff), rgb(0x6db2ff), rgb(0x1f7bff)];
      const ARMS = 3;
      const R = 3.3;
      for (let i = 0; i < N; i++) {
        const r = Math.pow(rnd(), 1.5) * R + 0.04;
        const spread = (rnd() + rnd() + rnd() - 1.5) * (0.16 + r * 0.14);
        const a = ((i % ARMS) / ARMS) * Math.PI * 2 + r * 1.35 + spread;
        const y = (rnd() - 0.5) * 0.4 * Math.exp(-r * 0.55);
        P.pos.setXYZ(i, Math.cos(a) * r, y, Math.sin(a) * r);
        const f = clamp(r / R, 0, 1) * 3;
        const k = Math.min(2, Math.floor(f));
        const c = mix3(stops[k], stops[k + 1], f - k);
        P.col.setXYZ(i, c[0], c[1], c[2]);
        P.siz.setX(i, (0.5 + rnd() * 1.1) * (r < 0.5 ? 1.5 : 1));
        P.alp.setX(i, 0.3 + rnd() * 0.7);
      }
      const tilt = new THREE.Group();
      tilt.add(P.pts);
      scene.add(tilt);
      tilt.position.set(1.15, 0, 0);
      camera.position.set(0, 0, 8.5);
      size();
      play((s) => {
        P.pts.rotation.y = s * 0.07 + px * 1.3;
        tilt.rotation.x = 0.95 + py * 0.9;
        tilt.rotation.z = -0.22 + px * 0.2;
        P.mat.uniforms.uGain.value = 0.85 + Math.sin(s * 0.8) * 0.06;
      });
      return () => teardown();
    },
    prompt: `Build a spiral galaxy hero with Three.js Points. Generate 18,000 points on a flat disc: for each point pick a radius r = pow(random, 1.5) * 3.3, an arm index i % 3, and an angle = armOffset + r * 1.35 + a small bell-shaped spread (sum of three randoms minus 1.5) that grows with r. Give the disc a thin height that fades with radius. Color by radius from white at the core through pale blue to your accent blue at the rim. Draw the points with a ShaderMaterial that makes round soft sprites from gl_PointCoord (discard past radius 1, smoothstep the edge), AdditiveBlending, depthWrite false, and a per-point size and alpha attribute. Put the points inside a tilted group (rotation.x about 0.95) and spin the points about their own Y axis very slowly (0.07 rad/s). Ease the tilt and spin toward the pointer with a lerp of 0.06; when the pointer is idle for 2.5s fall back to a slow drift. Offset the galaxy to the right so a short headline fits on the left. Use a dark ink-navy background behind a transparent canvas, setPixelRatio(Math.min(devicePixelRatio, 2)), a ResizeObserver, pause offscreen, and dispose geometry, material and renderer on unmount. Freeze the spin under prefers-reduced-motion.`,
  });

  // 2. Sphere to shape morph ----------------------------------------------------------------------
  ML.add({
    id: 'three-particles-morph',
    cat: 'three-particles',
    title: 'Shape morph',
    sub: 'Sphere, cube and ring trade places',
    libs: ['three'],
    html: withCopy('Particles', 'One cloud, many shapes.'),
    css: LIGHT + COPY_L,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const { MeshSurfaceSampler, RoundedBoxGeometry } = lib;
      const N = 9000;
      const P = mkPts(N, { size: 0.052, near: 4, far: 12, fade: 0.35, core: 0.45 });
      const sampleSet = (geo) => {
        const sm = new MeshSurfaceSampler(new THREE.Mesh(geo)).build();
        const v = new THREE.Vector3();
        const a = [];
        let ym = 0;
        for (let i = 0; i < N; i++) {
          sm.sample(v);
          a.push([v.x, v.y, v.z]);
          ym = Math.max(ym, Math.abs(v.y));
        }
        geo.dispose();
        // rows by height, then angle: index i lands in a similar place on every shape, so the morph flows
        const key = (p) => Math.floor((p[1] / ym * 0.5 + 0.5) * 30) * 10 + (Math.atan2(p[2], p[0]) / (Math.PI * 2) + 0.5) * 9.99;
        a.sort((p, q) => key(p) - key(q));
        const out = new Float32Array(N * 3);
        a.forEach((p, i) => out.set(p, i * 3));
        return out;
      };
      const T = [
        sampleSet(new THREE.SphereGeometry(1.3, 48, 32)),
        sampleSet(new RoundedBoxGeometry(2.0, 2.0, 2.0, 5, 0.45)),
        sampleSet(new THREE.TorusGeometry(1.05, 0.4, 28, 72)),
      ];
      const tones = [rgb(0x0a6cff), rgb(0x2f6bff), rgb(0x4fa3ff), rgb(0x0b3a8f)];
      for (let i = 0; i < N; i++) {
        const c = tones[(rnd() * 4) | 0];
        P.col.setXYZ(i, c[0], c[1], c[2]);
        P.siz.setX(i, 0.7 + rnd() * 0.6);
        P.alp.setX(i, 0.55 + rnd() * 0.4);
      }
      P.pts.position.x = 1.0;
      camera.position.set(0, 0, 7);
      size();
      const dur = 1.9;
      const per = dur + 1.5;
      let skip = 0;
      let nowS = 0;
      const onDown = () => {
        const ph = (nowS + skip) % per;
        if (ph > dur) skip += per - ph;
      };
      root.addEventListener('pointerdown', onDown);
      const arr = P.pos.array;
      play((s) => {
        nowS = s;
        const cs = s + skip;
        const k = Math.floor(cs / per);
        const u = clamp((cs - k * per) / dur, 0, 1);
        const A = T[k % 3];
        const B = T[(k + 1) % 3];
        for (let i = 0; i < N; i++) {
          const d = 0.4 * (1 - i / N);
          let e = clamp((u - d) / 0.6, 0, 1);
          e = e * e * (3 - 2 * e);
          const i3 = i * 3;
          let x = A[i3] + (B[i3] - A[i3]) * e;
          const y = A[i3 + 1] + (B[i3 + 1] - A[i3 + 1]) * e;
          let z = A[i3 + 2] + (B[i3 + 2] - A[i3 + 2]) * e;
          const sw = Math.sin(Math.PI * e);
          const th = sw * (0.7 + (i % 5) * 0.12);
          const c = Math.cos(th);
          const sn = Math.sin(th);
          const puff = 1 + sw * 0.22;
          const nx = (x * c + z * sn) * puff;
          z = (-x * sn + z * c) * puff;
          x = nx;
          arr[i3] = x;
          arr[i3 + 1] = y * puff;
          arr[i3 + 2] = z;
        }
        P.pos.needsUpdate = true;
        P.pts.rotation.y = s * 0.22 + px * 1.8;
        P.pts.rotation.x = -0.12 + py * 0.9;
      });
      return () => {
        root.removeEventListener('pointerdown', onDown);
        teardown();
      };
    },
    prompt: `Build a morphing point cloud with Three.js. Create 9,000 points and precompute three target arrays by sampling the surfaces of a SphereGeometry(1.3), a RoundedBoxGeometry(2, 2, 2, 5, 0.45) and a TorusGeometry(1.05, 0.4) with MeshSurfaceSampler from three/addons/math/MeshSurfaceSampler.js (new MeshSurfaceSampler(mesh).build(), then sampler.sample(vec3) per point). Sort each target the same way (rows by height, then angle around Y) so point i sits in a similar spot on every shape and the morph flows instead of tangling. Every frame, lerp each point from the current shape to the next with a smoothstep, staggered by height so the top leaves first (delay 0.4 * (1 - i/N)), and add a swirl by rotating each point about Y by sin(PI * e) and a small outward puff mid-flight. Hold each shape for about 1.5s, morph for 1.9s. A click during a hold skips ahead. Render with a ShaderMaterial of round soft sprites (gl_PointCoord) in normal blending and blue tones on a pale background. Ease the whole cloud's rotation toward the pointer (lerp 0.06) and autoplay a slow spin when idle for 2.5s. ResizeObserver sizing, pause offscreen, dispose geometry, material and renderer on unmount, freeze the morph under prefers-reduced-motion.`,
  });

  // 3. Curl-noise flow field ----------------------------------------------------------------------
  ML.add({
    id: 'three-particles-curl-flow',
    cat: 'three-particles',
    title: 'Curl noise flow',
    sub: 'Points ride a swirling field',
    libs: ['three'],
    html: HTML,
    css: LIGHT,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const { SimplexNoise } = lib;
      const ns = new SimplexNoise();
      const NP = 6000;
      const KT = 3;
      const N = NP * KT;
      const P = mkPts(N, { size: 0.04, near: 5, far: 12, fade: 0.3, core: 0.4 });
      camera.fov = 40;
      camera.position.set(0, 0, 8);
      let hw = 4;
      let hh = 3;
      hooks.push(() => {
        const v = view(0);
        hw = v[0] * 1.08;
        hh = v[1] * 1.08;
      });
      size();
      const X = new Float32Array(NP);
      const Y = new Float32Array(NP);
      const Z = new Float32Array(NP);
      const L = new Float32Array(NP);
      const M = new Float32Array(NP);
      const spawn = (i, age) => {
        X[i] = (rnd() * 2 - 1) * hw;
        Y[i] = (rnd() * 2 - 1) * hh;
        Z[i] = (rnd() - 0.5) * 1.6;
        L[i] = age;
        M[i] = 4 + rnd() * 5;
      };
      for (let i = 0; i < NP; i++) spawn(i, rnd() * 6);
      const pale = rgb(0x9cc4ff);
      const blue = rgb(0x0a6cff);
      const ink = rgb(0x0b2f7a);
      const pa = P.pos.array;
      const ca = P.col.array;
      const sa = P.siz.array;
      const aa = P.alp.array;
      play((s, dt, auto) => {
        const t = s * 0.07;
        let wx;
        let wy;
        if (auto) {
          wx = Math.sin(s * 0.5) * hw * 0.5;
          wy = Math.cos(s * 0.37) * hh * 0.5;
        } else {
          const h = hitPlane(tx, ty, NZ, 0);
          wx = h ? h.x : 0;
          wy = h ? h.y : 0;
        }
        const e = 0.03;
        const f = 0.5;
        for (let i = 0; i < NP; i++) {
          const x = X[i];
          const y = Y[i];
          const z = Z[i];
          const n1 = ns.noise3d(x * f, (y + e) * f, t + z * 0.1);
          const n2 = ns.noise3d(x * f, (y - e) * f, t + z * 0.1);
          const n3 = ns.noise3d((x + e) * f, y * f, t + z * 0.1);
          const n4 = ns.noise3d((x - e) * f, y * f, t + z * 0.1);
          let vx = ((n1 - n2) / (2 * e)) * 0.8;
          let vy = (-(n3 - n4) / (2 * e)) * 0.8;
          const dx = x - wx;
          const dy = y - wy;
          const w = Math.exp(-(dx * dx + dy * dy) / 1.6);
          vx += (-dy * 2 + dx * 0.5) * w;
          vy += (dx * 2 + dy * 0.5) * w;
          X[i] = x + vx * dt;
          Y[i] = y + vy * dt;
          L[i] += dt;
          if (L[i] > M[i] || Math.abs(X[i]) > hw || Math.abs(Y[i]) > hh) spawn(i, 0);
          const sp = clamp(Math.hypot(vx, vy) / 1.7, 0, 1);
          const c = sp < 0.55 ? mix3(pale, blue, sp / 0.55) : mix3(blue, ink, (sp - 0.55) / 0.45);
          const life = Math.pow(Math.sin((Math.PI * L[i]) / M[i]), 0.8) * 0.85;
          for (let j = 0; j < KT; j++) {
            const q = i * KT + j;
            const q3 = q * 3;
            pa[q3] = X[i] - vx * 0.05 * j;
            pa[q3 + 1] = Y[i] - vy * 0.05 * j;
            pa[q3 + 2] = Z[i];
            ca[q3] = c[0];
            ca[q3 + 1] = c[1];
            ca[q3 + 2] = c[2];
            sa[q] = (0.8 + sp * 0.7) * (1 - j * 0.22);
            aa[q] = life * (1 - j * 0.3);
          }
        }
        P.pos.needsUpdate = true;
        P.col.needsUpdate = true;
        P.siz.needsUpdate = true;
        P.alp.needsUpdate = true;
      });
      return () => teardown();
    },
    prompt: `Build a curl-noise flow field with Three.js Points. Keep 6,000 particles in a thin slab facing the camera, each drawn as 3 points in a row along its velocity so the tail shows the direction of flow. Each frame, take a scalar noise potential psi(x, y, t) from SimplexNoise (three/addons/math/SimplexNoise.js, noise3d with x and y scaled by 0.5 and time by 0.07) and compute its curl by finite differences: vx = (psi(x, y+e) - psi(x, y-e)) / 2e and vy = -(psi(x+e, y) - psi(x-e, y)) / 2e with e = 0.03. Curl fields are divergence free, so particles circulate in smooth eddies instead of bunching up. Advect with x += v * dt. Give each particle a life of 4 to 9 seconds, fade it in and out with sin(PI * life / maxLife), and respawn it at a random spot when it ends or leaves the view. Color by speed: pale blue when slow, your accent blue, then deep ink when fast. Add a vortex around the pointer (a Gaussian-weighted tangential velocity, found by raycasting to the z = 0 plane) and drive a ghost pointer along a slow Lissajous path when idle for 2.5s. Draw round soft sprites with a ShaderMaterial, normal blending on a pale background. ResizeObserver, pause offscreen, dispose on unmount, slow the field under prefers-reduced-motion.`,
  });

  // 4. Point-cloud terrain ------------------------------------------------------------------------
  ML.add({
    id: 'three-particles-terrain',
    cat: 'three-particles',
    title: 'Point terrain',
    sub: 'A grid of dots rolls, pointer raises a bump',
    libs: ['three'],
    html: HTML,
    css: LIGHT,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const { SimplexNoise } = lib;
      const ns = new SimplexNoise();
      const GX = 104;
      const GZ = 70;
      const N = GX * GZ;
      const P = mkPts(N, { size: 0.052, near: 5, far: 19, fade: 0.9, core: 0.4 });
      camera.position.set(0, 2.6, 6.4);
      camera.lookAt(0, 0.1, -2.6);
      size();
      const GXs = new Float32Array(N);
      const GZs = new Float32Array(N);
      for (let j = 0; j < GZ; j++) {
        for (let i = 0; i < GX; i++) {
          GXs[j * GX + i] = (i / (GX - 1) - 0.5) * 16;
          GZs[j * GX + i] = (j / (GZ - 1)) * 12.4 - 9.4;
        }
      }
      const pale = rgb(0xa9cdff);
      const blue = rgb(0x0a6cff);
      const ink = rgb(0x0b2f7a);
      let bx = 0;
      let bz = -1.5;
      const pa = P.pos.array;
      const ca = P.col.array;
      const sa = P.siz.array;
      const aa = P.alp.array;
      play((s, dt, auto) => {
        const t = s;
        let gx = bx;
        let gz = bz;
        if (auto) {
          gx = Math.sin(s * 0.6) * 3.4;
          gz = -1.6 + Math.cos(s * 0.45) * 1.7;
        } else {
          const h = hitPlane(tx, ty, NY, 0);
          if (h) {
            gx = h.x;
            gz = h.z;
          }
        }
        bx += (gx - bx) * 0.12;
        bz += (gz - bz) * 0.12;
        for (let i = 0; i < N; i++) {
          const x = GXs[i];
          const z = GZs[i];
          const h =
            0.3 * Math.sin(x * 0.75 + t) * Math.cos(z * 0.62 - t * 0.7) +
            0.2 * ns.noise3d(x * 0.32, z * 0.32, t * 0.22) +
            0.07 * Math.sin((x + z) * 1.5 - t * 1.4);
          const dx = x - bx;
          const dz = z - bz;
          const d2 = dx * dx + dz * dz;
          const bump = Math.exp(-d2 / 0.9) * 0.95 + Math.sin(Math.sqrt(d2) * 5 - t * 4.5) * Math.exp(-d2 / 3) * 0.07;
          const y = h + bump;
          const tt = clamp((y + 0.35) / 1.4, 0, 1);
          const c = tt < 0.5 ? mix3(pale, blue, tt * 2) : mix3(blue, ink, (tt - 0.5) * 2);
          const i3 = i * 3;
          pa[i3] = x;
          pa[i3 + 1] = y;
          pa[i3 + 2] = z;
          ca[i3] = c[0];
          ca[i3 + 1] = c[1];
          ca[i3 + 2] = c[2];
          sa[i] = 0.75 + tt * 1.0;
          aa[i] = 0.5 + tt * 0.45;
        }
        P.pos.needsUpdate = true;
        P.col.needsUpdate = true;
        P.siz.needsUpdate = true;
        P.alp.needsUpdate = true;
      });
      return () => teardown();
    },
    prompt: `Build a point-cloud terrain with Three.js Points. Lay out a 104 by 70 grid of points on the XZ plane (about 16 by 12.4 units) and look across it from a camera at (0, 2.6, 6.4) aimed at (0, 0.1, -2.6). Each frame set every point's height to a sum of a travelling sine product, 0.2 * SimplexNoise.noise3d(x * 0.32, z * 0.32, t * 0.22), and a faint diagonal wave. Raycast the pointer onto the y = 0 plane (THREE.Raycaster.setFromCamera, ray.intersectPlane) and add a Gaussian bump exp(-d2 / 0.9) at that spot plus a faint expanding ring, easing the bump position toward the pointer by 0.12 per frame so it glides. When idle for 2.5s, move the bump along a slow Lissajous path. Color and size points by height: pale blue in the valleys, your accent blue and then deep ink on the crests, with distance fade so the far rows dissolve. Use a ShaderMaterial for round soft sprites (gl_PointCoord) with normal blending on a pale background. Update the position, color and size attributes with DynamicDrawUsage and needsUpdate. ResizeObserver, pause offscreen, dispose on unmount, freeze time under prefers-reduced-motion.`,
  });

  // 5. Text particles -----------------------------------------------------------------------------
  ML.add({
    id: 'three-particles-text',
    cat: 'three-particles',
    title: 'Word from particles',
    sub: 'A word assembles, holds and blows apart',
    libs: ['three'],
    html: HTML,
    css: LIGHT,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const W = 640;
      const H = 220;
      const N = 7600;
      const WORD = 'Motion';
      const P = mkPts(N, { size: 0.03, near: 4, far: 14, fade: 0.3, core: 0.5 });
      camera.fov = 40;
      camera.position.set(0, 0, 8);
      size();
      const cv = document.createElement('canvas');
      cv.width = W;
      cv.height = H;
      const g = cv.getContext('2d');
      const TX = new Float32Array(N);
      const TY = new Float32Array(N);
      const TZ = new Float32Array(N);
      const SX = new Float32Array(N);
      const SY = new Float32Array(N);
      const SZ = new Float32Array(N);
      const D = new Float32Array(N);
      const D2 = new Float32Array(N);
      const PP = new Float32Array(N);
      const OX = new Float32Array(N);
      const OY = new Float32Array(N);
      const VX = new Float32Array(N);
      const VY = new Float32Array(N);
      const K = 0.0095;
      const build = () => {
        g.clearRect(0, 0, W, H);
        g.fillStyle = '#000';
        g.textAlign = 'center';
        g.textBaseline = 'middle';
        g.font = '700 150px Geist, system-ui, sans-serif';
        const m = g.measureText(WORD).width;
        g.font = '700 ' + Math.floor(150 * Math.min(1, 560 / m)) + 'px Geist, system-ui, sans-serif';
        g.fillText(WORD, W / 2, H / 2 + 6);
        const d = g.getImageData(0, 0, W, H).data;
        const c = [];
        for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) if (d[(y * W + x) * 4 + 3] > 110) c.push(x, y);
        const cnt = c.length / 2 || 1;
        for (let i = 0; i < N; i++) {
          const k = ((i * 7919) % cnt) * 2;
          TX[i] = (c[k] + rnd() * 2 - 1 - W / 2) * K;
          TY[i] = -(c[k + 1] + rnd() * 2 - 1 - H / 2) * K;
          TZ[i] = (rnd() - 0.5) * 0.12;
          D[i] = 0.45 * rnd() + (0.3 * (TX[i] + 2.8)) / 5.6;
        }
      };
      build();
      document.fonts
        .load('700 150px Geist')
        .catch(() => 0)
        .then(() => document.fonts.ready)
        .then(() => {
          if (!dead) build();
        });
      const tones = [rgb(0x0a6cff), rgb(0x2f6bff), rgb(0x0b3a8f), rgb(0x4fa3ff)];
      for (let i = 0; i < N; i++) {
        SX[i] = (rnd() * 2 - 1) * 5.6;
        SY[i] = (rnd() * 2 - 1) * 3.4;
        SZ[i] = (rnd() - 0.5) * 5;
        D2[i] = rnd() * 0.35;
        PP[i] = rnd() < 0.5 ? -1 : 1;
        const c = tones[(rnd() * 4) | 0];
        P.col.setXYZ(i, c[0], c[1], c[2]);
        P.siz.setX(i, 0.8 + rnd() * 0.6);
        P.alp.setX(i, 0.6 + rnd() * 0.4);
      }
      const A = 2.6;
      const HOLD = 2.4;
      const DS = 1.7;
      const PER = A + HOLD + DS;
      const ease = (u) => u * u * (3 - 2 * u);
      const pa = P.pos.array;
      play((s, dt, auto) => {
        const ph = s % PER;
        let wx;
        let wy;
        if (auto) {
          wx = Math.sin(s * 0.9) * 2.6;
          wy = Math.sin(s * 0.5) * 0.35;
        } else {
          const h = hitPlane(tx, ty, NZ, 0);
          wx = h ? h.x : 0;
          wy = h ? h.y : 0;
        }
        for (let i = 0; i < N; i++) {
          let x = TX[i];
          let y = TY[i];
          let z = TZ[i];
          if (ph < A) {
            const e = ease(clamp((ph / A - D[i] * 0.6) / 0.4, 0, 1));
            const arc = Math.sin(Math.PI * e) * 0.7 * PP[i];
            x = SX[i] + (x - SX[i]) * e - (y - SY[i]) * arc * 0.35;
            y = SY[i] + (y - SY[i]) * e + (TX[i] - SX[i]) * arc * 0.12;
            z = SZ[i] + (z - SZ[i]) * e;
          } else if (ph > A + HOLD) {
            const e = ease(clamp(((ph - A - HOLD) / DS - D2[i]) / (1 - D2[i]), 0, 1));
            const arc = Math.sin(Math.PI * e) * 0.7 * PP[i];
            const nx = x + (SX[i] - x) * e - (SY[i] - y) * arc * 0.35;
            y = y + (SY[i] - y) * e + (SX[i] - x) * arc * 0.12;
            z = z + (SZ[i] - z) * e;
            x = nx;
          }
          const dx = x - wx;
          const dy = y - wy;
          const r2 = dx * dx + dy * dy;
          let ax = -OX[i] * 16 - VX[i] * 4.5;
          let ay = -OY[i] * 16 - VY[i] * 4.5;
          if (r2 < 1.44) {
            const f = 1 - r2 / 1.44;
            const r = Math.sqrt(r2) + 0.001;
            ax += (dx / r) * f * f * 22;
            ay += (dy / r) * f * f * 22;
          }
          VX[i] += ax * dt;
          VY[i] += ay * dt;
          OX[i] += VX[i] * dt;
          OY[i] += VY[i] * dt;
          const i3 = i * 3;
          pa[i3] = x + OX[i];
          pa[i3 + 1] = y + OY[i];
          pa[i3 + 2] = z;
        }
        P.pos.needsUpdate = true;
        P.pts.rotation.y = px * 0.35;
        P.pts.rotation.x = py * 0.25;
      });
      return () => teardown();
    },
    prompt: `Build a text-to-particles effect with Three.js Points. Draw a short word into an offscreen 2D canvas (640 by 220, bold Geist or your brand font, black on transparent) after await document.fonts.load() and document.fonts.ready, shrinking the font size until the measured width fits. Read it back with getImageData and collect every second pixel whose alpha is above 110. Assign about 7,600 particles to those pixels (reuse pixels with a +/-1px jitter) and convert them to world units (about 0.0095 per pixel, y flipped). Give each particle a random scatter position in a wide volume and a delay that grows with x so letters form left to right. Loop assemble (2.6s, smoothstep with per-point delay and a small curved arc), hold (2.4s) and disperse (1.7s, back to the scatter). On top of that, give each particle a spring offset (stiffness 16, damping 4.5) and push particles away from the pointer inside a 1.2 unit radius (raycast to z = 0); when idle for 2.5s sweep a ghost pointer across the word. Use a ShaderMaterial with round soft sprites in blue tones on a pale background. Rebuild the targets if the font loads late. ResizeObserver, pause offscreen, dispose on unmount, show the assembled word static under prefers-reduced-motion.`,
  });

  // 6. Starfield warp -----------------------------------------------------------------------------
  ML.add({
    id: 'three-particles-warp',
    cat: 'three-particles',
    title: 'Starfield warp',
    sub: 'Stars streak past, pointer steers',
    libs: ['three'],
    html: withCopy('Warp', 'Go further, faster.'),
    css: DARK + COPY_D,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const S = 3600;
      const KP = 7;
      const N = S * KP;
      const P = mkPts(N, { size: 0.09, add: true, near: 2, far: 70, fade: 0.7, core: 0.2, gain: 1 });
      camera.fov = 65;
      camera.position.set(0, 0, 0);
      camera.rotation.order = 'YXZ';
      size();
      const SXs = new Float32Array(S);
      const SYs = new Float32Array(S);
      const SZs = new Float32Array(S);
      const SB = new Float32Array(S);
      const respawn = (i, far) => {
        const a = rnd() * Math.PI * 2;
        const r = Math.sqrt(rnd()) * 32;
        SXs[i] = Math.cos(a) * r;
        SYs[i] = Math.sin(a) * r;
        SZs[i] = far ? -58 - rnd() * 6 : -rnd() * 62;
        SB[i] = 0.4 + rnd() * 0.6;
      };
      const cols = [rgb(0xffffff), rgb(0xcfe3ff), rgb(0x8cc0ff)];
      for (let i = 0; i < S; i++) {
        respawn(i, false);
        const c = cols[(rnd() * 3) | 0];
        for (let j = 0; j < KP; j++) P.col.setXYZ(i * KP + j, c[0], c[1], c[2]);
      }
      let held = false;
      let boost = 0;
      const down = () => {
        held = true;
      };
      const up = () => {
        held = false;
      };
      root.addEventListener('pointerdown', down);
      root.addEventListener('pointerup', up);
      root.addEventListener('pointerleave', up);
      const pa = P.pos.array;
      const sa = P.siz.array;
      const aa = P.alp.array;
      play((s, dt) => {
        const cyc = s % 7;
        boost += ((held ? 1 : 0) - boost) * Math.min(1, dt * 3);
        const w = Math.max(sstep(1.2, 2.6, cyc) * (1 - sstep(3.8, 5.6, cyc)), boost);
        const spd = 5 + w * 46;
        const len = 0.05 + w * 2.2;
        camera.rotation.set(-py * 0.5, -px * 0.7, 0);
        for (let i = 0; i < S; i++) {
          SZs[i] += spd * dt;
          if (SZs[i] > -1.4) respawn(i, true);
          const z = SZs[i];
          for (let j = 0; j < KP; j++) {
            const q = i * KP + j;
            const q3 = q * 3;
            pa[q3] = SXs[i];
            pa[q3 + 1] = SYs[i];
            pa[q3 + 2] = z - (j / (KP - 1)) * len;
            aa[q] = SB[i] * 0.5 * (1 - j / KP);
            sa[q] = (1 - (j / KP) * 0.5) * (1 + w * 1.4);
          }
        }
        P.pos.needsUpdate = true;
        P.alp.needsUpdate = true;
        P.siz.needsUpdate = true;
      });
      return () => {
        root.removeEventListener('pointerdown', down);
        root.removeEventListener('pointerup', up);
        root.removeEventListener('pointerleave', up);
        teardown();
      };
    },
    prompt: `Build a starfield warp with Three.js Points. Keep 3,600 stars in a cylinder in front of a camera at the origin that looks down -z (fov 65): x and y random inside a radius of 32, z random between 0 and -62. Each star is drawn as 7 points in a row along z, so the tail is a trail of dots whose alpha and size fall off from head to tail. Each frame move every star toward the camera with z += speed * dt and respawn it at z about -60 when it passes the camera. Cruise at speed 5 with a trail length of 0.05, and on a 7 second cycle ramp the speed to about 50 with a trail length of about 2.2 (smoothstep up and down) so the stars stretch into streaks, then relax. Holding the pointer down also ramps it up. Steer by easing camera.rotation x and y toward the pointer position (lerp 0.06), so the vanishing point slides across the view; when idle for 2.5s drift on a slow Lissajous path. Draw with a ShaderMaterial of round soft sprites, AdditiveBlending, depthWrite false and distance fade, on a dark ink-navy background with a transparent canvas. ResizeObserver, pause offscreen, dispose on unmount, cap the warp at cruise speed under prefers-reduced-motion.`,
  });

  // 7. Ringed planet -----------------------------------------------------------------------------
  ML.add({
    id: 'three-particles-planet',
    cat: 'three-particles',
    title: 'Ringed planet',
    sub: 'Dots form a planet and a tilted ring',
    libs: ['three'],
    html: withCopy('Particles', 'A world of points.'),
    css: LIGHT + COPY_L,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const { SimplexNoise } = lib;
      const ns = new SimplexNoise();
      const NPL = 7500;
      const NR = 5500;
      const N = NPL + NR;
      const RP = 1.25;
      const RI = 1.75;
      const RO = 2.85;
      const P = mkPts(N, { size: 0.05, near: 5, far: 13, fade: 0.25, core: 0.55 });
      const AX = new Float32Array(N);
      const AY = new Float32Array(N);
      const AZ = new Float32Array(N);
      const TON = new Float32Array(N);
      // planet: an even Fibonacci sphere, banded and mottled with noise so its spin shows
      for (let i = 0; i < NPL; i++) {
        const y = 1 - (2 * (i + 0.5)) / NPL;
        const r = Math.sqrt(1 - y * y);
        const a = i * 2.399963;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        AX[i] = x;
        AY[i] = y;
        AZ[i] = z;
        P.pos.setXYZ(i, x * RP, y * RP, z * RP);
        TON[i] = 0.5 + 0.5 * Math.sin(y * 9 + ns.noise3d(x * 1.6, y * 1.6, z * 1.6) * 2.2);
      }
      // ring: an annulus with a gap, banded by radius
      const rc0 = rgb(0xbcd6ff);
      const rc1 = rgb(0x4fa3ff);
      for (let i = NPL; i < N; i++) {
        let r;
        do {
          r = Math.sqrt(RI * RI + rnd() * (RO * RO - RI * RI));
        } while (r > 2.28 && r < 2.4);
        const a = rnd() * Math.PI * 2;
        const x = Math.cos(a) * r;
        const z = Math.sin(a) * r;
        const y = (rnd() - 0.5) * 0.03;
        AX[i] = x;
        AY[i] = y;
        AZ[i] = z;
        P.pos.setXYZ(i, x, y, z);
        const t = 0.5 + 0.5 * Math.sin(r * 16);
        TON[i] = t;
        const c = mix3(rc0, rc1, t * (0.6 + rnd() * 0.4));
        P.col.setXYZ(i, c[0], c[1], c[2]);
      }
      const ink = rgb(0x0b2f7a);
      const blue = rgb(0x0a6cff);
      const lite = rgb(0x8cc0ff);
      const tilt = new THREE.Group();
      tilt.add(P.pts);
      tilt.position.set(1.1, 0, 0);
      scene.add(tilt);
      camera.position.set(0, 0, 8.5);
      size();
      const ca = P.col.array;
      const sa = P.siz.array;
      const aa = P.alp.array;
      const LX = -0.5;
      const LY = 0.6;
      const LZ = 0.62;
      play((s) => {
        P.pts.rotation.y = s * 0.12;
        tilt.rotation.x = 0.5 + py * 0.9;
        tilt.rotation.z = -0.32 + px * 0.6;
        tilt.updateMatrixWorld(true);
        const m = P.pts.matrixWorld.elements;
        const band = ((s * 0.9) % 6) - 2.2;
        for (let i = 0; i < N; i++) {
          const nx = AX[i];
          const ny = AY[i];
          const nz = AZ[i];
          const rx = m[0] * nx + m[4] * ny + m[8] * nz;
          const ry = m[1] * nx + m[5] * ny + m[9] * nz;
          const rz = m[2] * nx + m[6] * ny + m[10] * nz;
          if (i < NPL) {
            const sh = clamp(rx * LX + ry * LY + rz * LZ, 0, 1);
            const v = clamp(0.12 + sh * (0.75 + 0.5 * (TON[i] - 0.5)), 0, 1);
            const c = v < 0.5 ? mix3(ink, blue, v * 2) : mix3(blue, lite, (v - 0.5) * 2);
            const i3 = i * 3;
            ca[i3] = c[0];
            ca[i3 + 1] = c[1];
            ca[i3 + 2] = c[2];
            const bd = (rx * 0.7 + ry * 0.7) / RP - band * 0.5;
            const sw = Math.exp(-bd * bd * 6);
            aa[i] = sstep(-0.05, 0.3, rz) * (0.88 + sw * 0.12);
            sa[i] = 0.95 + sw * 0.45;
          } else {
            const hide = rz < 0 ? sstep(RP * 1.04, RP * 0.9, Math.hypot(rx, ry)) : 0;
            const tw = 0.75 + 0.25 * Math.sin(s * 2.2 + i * 1.7);
            aa[i] = (0.5 + TON[i] * 0.4) * tw * (1 - hide);
            sa[i] = 0.7 + TON[i] * 0.5;
          }
        }
        P.col.needsUpdate = true;
        P.alp.needsUpdate = true;
        P.siz.needsUpdate = true;
      });
      return () => teardown();
    },
    prompt: `Build a ringed planet from points with Three.js. Planet: 7,500 points on an even Fibonacci sphere (y = 1 - 2(i+0.5)/N, angle = i * 2.39996) at radius 1.25, each with a tone from latitude bands warped by SimplexNoise (sin(y * 9 + noise3d(x, y, z) * 2.2)) so the spin shows. Ring: 5,500 points in an annulus from radius 1.75 to 2.85 (sample radius as sqrt of a uniform between the squares so density is even), a gap near 2.3, almost flat, with a tone that bands by radius. Draw all of it in one Points object with a ShaderMaterial of round soft sprites (gl_PointCoord) and normal blending on a pale background. Each frame take the Points matrixWorld rotation, rotate every normal, shade the planet with a fixed light (lambert, ink to accent to pale blue), fade back-facing points with smoothstep on the rotated z, and hide ring points that sit behind the planet (rotated z below 0 and inside the planet's disc). Sweep a soft diagonal shimmer band across the planet that enlarges points, and twinkle the ring with a sine. Spin the Points about Y at 0.12 rad/s inside a parent group tilted 0.5 about X and -0.32 about Z; ease the tilt toward the pointer (lerp 0.06) and idle-drift after 2.5s. Offset it right so a headline fits. ResizeObserver, pause offscreen, dispose on unmount, stop the spin under prefers-reduced-motion.`,
  });

  // 8. Dust in a light beam -----------------------------------------------------------------------
  ML.add({
    id: 'three-particles-dust-beam',
    cat: 'three-particles',
    title: 'Dust in a light beam',
    sub: 'Motes catch fire inside a sweeping cone',
    libs: ['three'],
    html: withCopy('Atmosphere', 'Light finds everything.'),
    css: DARK + COPY_D,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const N = 3400;
      const P = mkPts(N, { size: 0.05, add: true, near: 4, far: 14, fade: 0.4, core: 0.0, gain: 1 });
      camera.position.set(0, 0, 8);
      // the beam is a screen-space quad; the same function lights the dust in JS
      const BU = {
        uAsp: { value: 1.33 },
        uAng: { value: -2.0 },
        uRes: { value: new THREE.Vector2(300, 225) },
      };
      const bq = new THREE.Mesh(
        keep(new THREE.PlaneGeometry(2, 2)),
        keep(
          new THREE.ShaderMaterial({
            uniforms: BU,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            vertexShader: 'void main(){gl_Position=vec4(position.xy,0.0,1.0);}',
            fragmentShader:
              'uniform float uAsp;uniform float uAng;uniform vec2 uRes;void main(){vec2 p=gl_FragCoord.xy/uRes*2.0-1.0;p.x*=uAsp;vec2 o=vec2(0.6*uAsp,1.35);vec2 d=vec2(cos(uAng),sin(uAng));vec2 v=p-o;float al=dot(v,d);float pe=-v.x*d.y+v.y*d.x;float hw=0.07+max(al,0.0)*0.3;' +
              'float f=(1.0-smoothstep(hw*0.2,hw,abs(pe)))*smoothstep(0.0,0.5,al)*(1.0-smoothstep(1.4,3.4,al)*0.75);float core=(1.0-smoothstep(0.0,hw*0.6,abs(pe)))*smoothstep(0.0,0.6,al)*(1.0-smoothstep(1.0,2.8,al));' +
              'f*=0.88+0.12*sin(pe*34.0+al*2.0);gl_FragColor=vec4(mix(vec3(0.35,0.62,1.0),vec3(0.85,0.93,1.0),core),f*0.3+core*0.14);}',
          })
        )
      );
      bq.frustumCulled = false;
      bq.renderOrder = -1;
      scene.add(bq);
      hooks.push(() => {
        BU.uAsp.value = camera.aspect;
        BU.uRes.value.set(renderer.domElement.width, renderer.domElement.height);
      });
      size();
      const BXs = new Float32Array(N);
      const BYs = new Float32Array(N);
      const BZs = new Float32Array(N);
      const PH = new Float32Array(N);
      const VYs = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        BXs[i] = (rnd() * 2 - 1) * 6.5;
        BYs[i] = (rnd() * 2 - 1) * 3.6;
        BZs[i] = (rnd() - 0.5) * 6;
        PH[i] = rnd() * 6.28;
        VYs[i] = 0.04 + rnd() * 0.1;
        P.siz.setX(i, 0.5 + rnd() * 1.1);
      }
      const v = new THREE.Vector3();
      const pa = P.pos.array;
      const ca = P.col.array;
      const sa = P.siz.array;
      const aa = P.alp.array;
      const out = rgb(0x3f8fff);
      const inn = rgb(0xffffff);
      play((s) => {
        const ang = -2.0 + px * 0.7;
        BU.uAng.value = ang;
        const dx = Math.cos(ang);
        const dy = Math.sin(ang);
        const asp = camera.aspect;
        for (let i = 0; i < N; i++) {
          const ph = PH[i];
          const x = BXs[i] + Math.sin(s * 0.3 + ph) * 0.3;
          const y = ((((BYs[i] + s * VYs[i] + 3.6) % 7.2) + 7.2) % 7.2) - 3.6 + Math.sin(s * 0.4 + ph * 1.3) * 0.2;
          const z = BZs[i] + Math.sin(s * 0.25 + ph * 0.7) * 0.3;
          v.set(x, y, z).project(camera);
          const vx = v.x * asp - 0.6 * asp;
          const vy = v.y - 1.35;
          const al = vx * dx + vy * dy;
          const pe = -vx * dy + vy * dx;
          const hw = 0.07 + Math.max(al, 0) * 0.3;
          const f = (1 - sstep(hw * 0.2, hw, Math.abs(pe))) * sstep(0, 0.5, al) * (1 - sstep(1.4, 3.4, al) * 0.75);
          const tw = 0.65 + 0.35 * Math.sin(s * 2.2 + ph * 3);
          const c = mix3(out, inn, f);
          const i3 = i * 3;
          pa[i3] = x;
          pa[i3 + 1] = y;
          pa[i3 + 2] = z;
          ca[i3] = c[0];
          ca[i3 + 1] = c[1];
          ca[i3 + 2] = c[2];
          aa[i] = 0.07 + f * 0.9 * tw;
          sa[i] = (0.5 + (i % 7) * 0.15) * (0.7 + f * 1.1);
        }
        P.pos.needsUpdate = true;
        P.col.needsUpdate = true;
        P.alp.needsUpdate = true;
        P.siz.needsUpdate = true;
      });
      return () => teardown();
    },
    prompt: `Build floating dust in a beam of light with Three.js. Draw the beam as a full-screen quad (PlaneGeometry(2, 2), ShaderMaterial whose vertex shader writes gl_Position = vec4(position.xy, 0, 1), transparent, depthTest false, renderOrder -1). In the fragment shader work in aspect-corrected screen space, take a light origin above the top-right corner, a direction angle, compute along = dot(p - origin, dir) and perp, widen the half-width with along (0.07 + along * 0.3), and shade with smoothstep falloff across the width, a soft start, and a long fade toward the far end, with a brighter core and a faint ripple. Add 3,400 dust motes as Points with additive round soft sprites in a slab of depth, drifting upward slowly with small sine wobbles. Each frame project each mote with Vector3.project(camera) and evaluate the same beam function in JS: motes outside the beam stay at alpha 0.07 and dim blue, motes inside brighten toward white, grow, and twinkle. Rotate the beam angle with the pointer like a flashlight (angle = base + pointerX * 0.7), and sweep it slowly by itself when idle for 2.5s. Dark ink-navy background, transparent canvas, ResizeObserver, pause offscreen, dispose on unmount, hold the beam still under prefers-reduced-motion.`,
  });

  // 9. Blue fireworks -----------------------------------------------------------------------------
  ML.add({
    id: 'three-particles-fireworks',
    cat: 'three-particles',
    title: 'Blue fireworks',
    sub: 'Rockets climb and burst, click to fire one',
    libs: ['three'],
    html: HTML,
    css: DARK,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const N = 14000;
      const P = mkPts(N, { size: 0.075, add: true, near: 5, far: 16, fade: 0.2, core: 0.15, gain: 1.8 });
      camera.position.set(0, 0, 9);
      size();
      P.alp.array.fill(0);
      const VX = new Float32Array(N);
      const VY = new Float32Array(N);
      const VZ = new Float32Array(N);
      const AG = new Float32Array(N).fill(99);
      const LF = new Float32Array(N).fill(1);
      const KD = new Uint8Array(N);
      const BC = new Float32Array(N * 3);
      const pa = P.pos.array;
      const ca = P.col.array;
      const sa = P.siz.array;
      const aa = P.alp.array;
      let head = 0;
      const slot = () => {
        head = (head + 1) % N;
        return head;
      };
      const palette = [rgb(0x8cc4ff), rgb(0xdcebff), rgb(0x5aa5ff)];
      const white = rgb(0xdcebff);
      const put = (i, x, y, z, vx, vy, vz, life, kind, c) => {
        pa[i * 3] = x;
        pa[i * 3 + 1] = y;
        pa[i * 3 + 2] = z;
        VX[i] = vx;
        VY[i] = vy;
        VZ[i] = vz;
        AG[i] = 0;
        LF[i] = life;
        KD[i] = kind;
        BC[i * 3] = c[0];
        BC[i * 3 + 1] = c[1];
        BC[i * 3 + 2] = c[2];
      };
      const burst = (x, y, z) => {
        const c = palette[(rnd() * 3) | 0];
        put(slot(), x, y, z, 0, 0, 0, 0.6, 2, white);
        for (let k = 0; k < 800; k++) {
          let a;
          let b;
          let d;
          let l;
          do {
            a = rnd() * 2 - 1;
            b = rnd() * 2 - 1;
            d = rnd() * 2 - 1;
            l = Math.hypot(a, b, d);
          } while (l > 1 || l < 0.05);
          const sp = rnd() < 0.7 ? 3.0 + rnd() * 0.45 : 0.5 + rnd() * 2.6;
          put(slot(), x, y, z, (a / l) * sp, (b / l) * sp, (d / l) * sp, 2.2 + rnd() * 0.6, 0, c);
        }
      };
      const rockets = [];
      const launch = (x) => rockets.push({ x0: x, x1: x + (rnd() - 0.5) * 0.8, y1: 0.3 + rnd() * 1.8, t: 0, dur: 0.8 + rnd() * 0.25 });
      const onDown = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
        const h = hitPlane(tx, ty, NZ, 0);
        if (h) burst(h.x, h.y, 0);
      };
      root.addEventListener('pointerdown', onDown);
      // seed the stage so it never opens empty: one burst already aloft, two rockets on their way
      burst(-1.6, 1.1, 0);
      launch(1.8);
      launch(0);
      let nextAt = 0.5;
      let fr = 0;
      const trail = rgb(0xdcebff);
      play((s, dt, auto) => {
        fr++;
        if (auto) {
          nextAt -= dt;
          if (nextAt <= 0) {
            launch((rnd() - 0.5) * 6);
            nextAt = 0.55 + rnd() * 0.4;
          }
        }
        for (let r = rockets.length - 1; r >= 0; r--) {
          const k = rockets[r];
          k.t += dt;
          const u = Math.min(1, k.t / k.dur);
          const e = 1 - (1 - u) * (1 - u);
          const x = k.x0 + (k.x1 - k.x0) * e;
          const y = -3.6 + (k.y1 + 3.6) * e;
          put(slot(), x, y, 0, 0, -0.3, 0, 0.5, 0, trail);
          put(slot(), x, y, 0, 0, 0, 0, 0.07, 1, trail);
          if (u >= 1) {
            burst(x, y, 0);
            rockets.splice(r, 1);
          }
        }
        const drag = Math.exp(-1.0 * dt);
        for (let i = 0; i < N; i++) {
          if (AG[i] >= LF[i]) {
            aa[i] = 0;
            continue;
          }
          const a = AG[i] + dt;
          AG[i] = a;
          const kd = KD[i];
          const i3 = i * 3;
          if (kd === 0 && LF[i] > 1) {
            VX[i] *= drag;
            VY[i] = VY[i] * drag - 1.7 * dt;
            VZ[i] *= drag;
            // every 8th shell spark sheds a short-lived trail dot
            if ((i & 7) === 0 && a < 1.3 && (fr & 1) === 0) {
              put(slot(), pa[i3], pa[i3 + 1], pa[i3 + 2], 0, 0, 0, 0.3, 0, [BC[i3], BC[i3 + 1], BC[i3 + 2]]);
            }
          }
          pa[i3] += VX[i] * dt;
          pa[i3 + 1] += VY[i] * dt;
          pa[i3 + 2] += VZ[i] * dt;
          const k = a / LF[i];
          const fl = Math.max(0, 1 - a * 5);
          ca[i3] = BC[i3] + (1 - BC[i3]) * fl;
          ca[i3 + 1] = BC[i3 + 1] + (1 - BC[i3 + 1]) * fl;
          ca[i3 + 2] = BC[i3 + 2] + (1 - BC[i3 + 2]) * fl;
          if (kd === 2) {
            aa[i] = Math.pow(1 - k, 2) * 0.22;
            sa[i] = 3.5 + 3 * k;
          } else {
            aa[i] = Math.pow(1 - k, 1.1) * (0.75 + 0.25 * Math.sin(a * 38 + i)) * (kd ? 1 : 0.8);
            sa[i] = (0.7 + 0.5 * (1 - k)) * (kd ? 1.2 : 0.35 + 0.65 * Math.min(1, a * 4));
          }
        }
        P.pos.needsUpdate = true;
        P.col.needsUpdate = true;
        P.alp.needsUpdate = true;
        P.siz.needsUpdate = true;
        camera.position.x = px * 1.4;
        camera.lookAt(0, 0.4, 0);
      });
      return () => {
        root.removeEventListener('pointerdown', onDown);
        teardown();
      };
    },
    prompt: `Build blue fireworks with Three.js Points. Keep one ring buffer of 14,000 particles with per-particle velocity, age, life, kind and base color arrays. A burst writes a soft white core flash (one big point that fades in 0.6s) plus 800 particles at one origin: random directions from rejection sampling inside the unit sphere, normalized, speed 3.0 to 3.45 for 70% of them (a clean shell) and 0.5 to 3.1 for the rest, life 2.2 to 2.8s, colors from a small palette of light blues. Each frame integrate with exponential drag (v *= exp(-1.0 * dt)) and gravity (vy -= 1.7 * dt), fade alpha with (1 - age/life) to the power 1.1 times a fast flicker, flash each spark toward white in its first 0.2s, and let every eighth shell spark drop a short-lived trail dot (0.3s) every other frame. Autoplay launches a rocket every 0.55 to 0.95s (a bright head eased up with an ease-out curve, trail sparks, bursting at the top) so two or three bursts are alive at once, and the scene starts with one burst and two rockets already in flight. A click or tap fires a burst at the pointer, found by raycasting to the z = 0 plane, and pauses autoplay for 2.5s. Nudge the camera sideways with the pointer. Round soft sprite ShaderMaterial, AdditiveBlending, dark ink-navy background. ResizeObserver, pause offscreen, dispose on unmount, fewer slower bursts under prefers-reduced-motion.`,
  });

  // 10. DNA helix ---------------------------------------------------------------------------------
  ML.add({
    id: 'three-particles-helix',
    cat: 'three-particles',
    title: 'DNA helix',
    sub: 'Two strands and rungs turn, a pulse climbs',
    libs: ['three'],
    html: withCopy('Particles', 'In motion.'),
    css: LIGHT + COPY_L,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const M = 900;
      const RU = 26;
      const H = 5.4;
      const RAD = 0.85;
      const TURNS = 2.5;
      const N = M * 2 + RU * 14 + RU * 2 * 10;
      const P = mkPts(N, { size: 0.065, near: 5, far: 14, fade: 0.35, core: 0.5 });
      const TT = new Float32Array(M * 2).fill(0);
      const colA = rgb(0x0a6cff);
      const colB = rgb(0x4fa3ff);
      const colR = rgb(0x9cc4ff);
      const colD = rgb(0x0b3a8f);
      const at = (t, off) => {
        const a = t * TURNS * Math.PI * 2 + off;
        return [Math.cos(a) * RAD, (t - 0.5) * H, Math.sin(a) * RAD];
      };
      let n = 0;
      const put = (p, c, sz, al) => {
        P.pos.setXYZ(n, p[0], p[1], p[2]);
        P.col.setXYZ(n, c[0], c[1], c[2]);
        P.siz.setX(n, sz);
        P.alp.setX(n, al);
        n++;
      };
      for (let st = 0; st < 2; st++) {
        for (let i = 0; i < M; i++) {
          const t = i / (M - 1);
          const p = at(t, st * Math.PI);
          p[0] += (rnd() - 0.5) * 0.03;
          p[2] += (rnd() - 0.5) * 0.03;
          TT[st * M + i] = t;
          put(p, st ? colB : colA, 0.9 + rnd() * 0.3, 0.9);
        }
      }
      for (let r = 0; r < RU; r++) {
        const t = (r + 0.5) / RU;
        const a = at(t, 0);
        const b = at(t, Math.PI);
        for (let k = 0; k < 14; k++) {
          const f = (k + 0.5) / 14;
          put([a[0] + (b[0] - a[0]) * f, a[1], a[2] + (b[2] - a[2]) * f], colR, 0.75, 0.75);
        }
        [a, b].forEach((e, si) => {
          for (let k = 0; k < 10; k++) {
            put([e[0] + (rnd() - 0.5) * 0.09, e[1] + (rnd() - 0.5) * 0.09, e[2] + (rnd() - 0.5) * 0.09], si ? colA : colD, 1.9, 0.95);
          }
        });
      }
      const tilt = new THREE.Group();
      tilt.rotation.z = 0.4;
      tilt.position.x = 1.9;
      tilt.add(P.pts);
      scene.add(tilt);
      camera.position.set(0, 0, 9);
      size();
      const sa = P.siz.array;
      play((s) => {
        P.pts.rotation.y = s * 0.45 + px * 1.8;
        tilt.rotation.x = py * 0.5;
        const tp = (s * 0.11) % 1.3 - 0.15;
        for (let i = 0; i < M * 2; i++) {
          const d = TT[i] - tp;
          sa[i] = (0.9 + (i % 5) * 0.06) * (1 + 1.5 * Math.exp(-(d * d) / 0.003));
        }
        P.siz.needsUpdate = true;
      });
      return () => teardown();
    },
    prompt: `Build a rotating DNA helix from points with Three.js. Generate two strands of 900 points each along y = (t - 0.5) * 5.4 with angle = t * 2.5 turns * 2PI (+ PI for the second strand) at radius 0.85, with a tiny random jitter so the line looks beaded, in two blues. Add 26 rungs: for each, 14 pale-blue points interpolated between the two strands at that height, and a small 10-point cluster at each end as a base bead, larger and darker. Put everything in one Points object with round soft sprites (a ShaderMaterial using gl_PointCoord, per-point size and alpha), normal blending on a pale background. Tilt the group about Z by 0.4 and spin the Points about Y at 0.45 rad/s. A bright pulse travels up the strands: each frame multiply the size of strand points by 1 + 1.5 * exp(-(t - pulse)^2 / 0.003) with pulse = (time * 0.11) mod 1.3 - 0.15, and mark the size attribute needsUpdate. The pointer adds to the spin and tilts the whole helix (lerp 0.06); after 2.5s of stillness it falls back to the steady spin. Offset it to the right so a headline fits. ResizeObserver, pause offscreen, dispose on unmount, stop the spin under prefers-reduced-motion.`,
  });

  // 11. Pointer attractor -------------------------------------------------------------------------
  ML.add({
    id: 'three-particles-attractor',
    cat: 'three-particles',
    title: 'Pointer attractor',
    sub: 'Dots swarm the cursor, then spring back',
    libs: ['three'],
    html: HTML,
    css: LIGHT,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const N = 6500;
      const P = mkPts(N + 1, { size: 0.04, near: 5, far: 13, fade: 0.25, core: 0.4 });
      camera.position.set(0, 0, 8);
      camera.fov = 40;
      size();
      const HR = new Float32Array(N);
      const HA = new Float32Array(N);
      const HZ = new Float32Array(N);
      const OM = new Float32Array(N);
      const X = new Float32Array(N);
      const Y = new Float32Array(N);
      const VX = new Float32Array(N);
      const VY = new Float32Array(N);
      for (let i = 0; i < N; i++) {
        HR[i] = 0.4 + Math.sqrt(rnd()) * 3.3;
        HA[i] = rnd() * Math.PI * 2;
        HZ[i] = (rnd() - 0.5) * 0.7;
        OM[i] = 0.5 / (0.6 + HR[i] * 0.5);
        X[i] = Math.cos(HA[i]) * HR[i];
        Y[i] = Math.sin(HA[i]) * HR[i];
      }
      // index N is the attractor marker
      P.col.setXYZ(N, 0.04, 0.42, 1);
      P.siz.setX(N, 9);
      P.alp.setX(N, 0.2);
      const pale = rgb(0x9cc4ff);
      const blue = rgb(0x0a6cff);
      const ink = rgb(0x0b2f7a);
      const pa = P.pos.array;
      const ca = P.col.array;
      const sa = P.siz.array;
      const aa = P.alp.array;
      let ax = 0;
      let ay = 0;
      play((s, dt, auto) => {
        let gx;
        let gy;
        if (auto) {
          gx = Math.sin(s * 0.7) * 1.9;
          gy = Math.cos(s * 0.5) * 1.3;
        } else {
          const h = hitPlane(tx, ty, NZ, 0);
          gx = h ? h.x : 0;
          gy = h ? h.y : 0;
        }
        ax += (gx - ax) * 0.18;
        ay += (gy - ay) * 0.18;
        for (let i = 0; i < N; i++) {
          const a = HA[i] + s * OM[i];
          const hx = Math.cos(a) * HR[i];
          const hy = Math.sin(a) * HR[i];
          const dx = ax - X[i];
          const dy = ay - Y[i];
          const r2 = dx * dx + dy * dy;
          const w = Math.exp(-r2 / 1.8);
          let accx = (hx - X[i]) * 7 - VX[i] * 3.2 + (dx * 14 - dy * 10) * w;
          let accy = (hy - Y[i]) * 7 - VY[i] * 3.2 + (dy * 14 + dx * 10) * w;
          VX[i] += accx * dt;
          VY[i] += accy * dt;
          X[i] += VX[i] * dt;
          Y[i] += VY[i] * dt;
          const sp = clamp(Math.hypot(VX[i], VY[i]) / 3.2, 0, 1);
          const c = sp < 0.5 ? mix3(pale, blue, sp * 2) : mix3(blue, ink, (sp - 0.5) * 2);
          const i3 = i * 3;
          pa[i3] = X[i];
          pa[i3 + 1] = Y[i];
          pa[i3 + 2] = HZ[i];
          ca[i3] = c[0];
          ca[i3 + 1] = c[1];
          ca[i3 + 2] = c[2];
          sa[i] = 0.75 + sp * 0.9;
          aa[i] = 0.5 + sp * 0.45;
        }
        pa[N * 3] = ax;
        pa[N * 3 + 1] = ay;
        pa[N * 3 + 2] = 0;
        P.pos.needsUpdate = true;
        P.col.needsUpdate = true;
        P.siz.needsUpdate = true;
        P.alp.needsUpdate = true;
      });
      return () => teardown();
    },
    prompt: `Build a pointer-attractor particle field with Three.js Points. Make 6,500 particles, each with a home position on a slowly rotating disc (radius 0.4 + sqrt(random) * 3.3, angular speed 0.5 / (0.6 + radius * 0.5) so the inner dots orbit faster) and a position and velocity of its own. Each frame, per particle, apply a spring to its moving home (acceleration 7 * (home - pos)), damping (3.2 * velocity), and an attractor term weighted by a Gaussian of the distance to the pointer, w = exp(-r2 / 1.8): acceleration += (d * 14 + perpendicular(d) * 10) * w, where d points to the pointer. The radial part pulls dots in, the perpendicular part makes them orbit the cursor, and when the pointer leaves the spring brings them home with a small overshoot. Find the pointer in world space by raycasting to the z = 0 plane and low-pass it (0.18 per frame). When idle for 2.5s, drive a ghost attractor along a slow Lissajous path. Color and size by speed: pale blue at rest, accent blue then deep ink when fast. Add one large faint point at the attractor as a marker. Round soft sprite ShaderMaterial, normal blending, pale background. ResizeObserver, pause offscreen, dispose on unmount, keep the field still under prefers-reduced-motion.`,
  });

  // 12. GPU particle field ------------------------------------------------------------------------
  ML.add({
    id: 'three-particles-gpu-field',
    cat: 'three-particles',
    title: 'GPU particle field',
    sub: '16k points simulated on the GPU',
    libs: ['three'],
    html: withCopy('GPGPU', '16,384 points, one pass.'),
    css: LIGHT + COPY_L,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 200);
      camera.position.set(0, 0, 8);
      const junk = [];
      const keep = (o) => {
        junk.push(o);
        return o;
      };
      const mats = [];
      const hooks = [];
      let dead = false;
      const rnd = Math.random;
      const rgb = (h) => [(h >> 16) / 255, ((h >> 8) & 255) / 255, (h & 255) / 255];
      const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
      const sstep = (a, b, x) => {
        const t = clamp((x - a) / (b - a), 0, 1);
        return t * t * (3 - 2 * t);
      };
      const mix3 = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const VS =
        'attribute vec3 aCol;attribute float aSize;attribute float aAlpha;uniform float uSize;uniform float uScale;uniform float uNear;uniform float uFar;uniform float uFade;varying vec3 vC;varying float vA;' +
        'void main(){vec4 mv=modelViewMatrix*vec4(position,1.0);float f=clamp((-mv.z-uNear)/(uFar-uNear),0.0,1.0);vC=aCol;vA=aAlpha*mix(1.0,1.0-uFade,f);' +
        'gl_PointSize=max(uSize*aSize*uScale/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}';
      const FS =
        'uniform float uCore;uniform float uGain;varying vec3 vC;varying float vA;' +
        'void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(uCore,1.0,d);gl_FragColor=vec4(vC,a*vA*uGain);}';
      // round soft points: one attribute set (position, aCol, aSize, aAlpha) and a shared sprite shader
      const mkPts = (n, o = {}) => {
        const geo = keep(new THREE.BufferGeometry());
        const mk = (len, k, fill) => {
          const a = new THREE.BufferAttribute(new Float32Array(len * k).fill(fill), k);
          a.setUsage(THREE.DynamicDrawUsage);
          return a;
        };
        const pos = mk(n, 3, 0);
        const col = mk(n, 3, 1);
        const siz = mk(n, 1, 1);
        const alp = mk(n, 1, 1);
        geo.setAttribute('position', pos);
        geo.setAttribute('aCol', col);
        geo.setAttribute('aSize', siz);
        geo.setAttribute('aAlpha', alp);
        const mat = keep(
          new THREE.ShaderMaterial({
            uniforms: {
              uSize: { value: o.size || 0.05 },
              uScale: { value: 300 },
              uNear: { value: o.near || 4 },
              uFar: { value: o.far || 14 },
              uFade: { value: o.fade || 0 },
              uCore: { value: o.core === undefined ? 0.35 : o.core },
              uGain: { value: o.gain || 1 },
            },
            vertexShader: VS,
            fragmentShader: FS,
            transparent: true,
            depthWrite: false,
            depthTest: false,
            blending: o.add ? THREE.AdditiveBlending : THREE.NormalBlending,
          })
        );
        mats.push(mat);
        const pts = new THREE.Points(geo, mat);
        pts.frustumCulled = false;
        scene.add(pts);
        return { pts, geo, pos, col, siz, alp, mat, n };
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        const sc = renderer.domElement.height / (2 * Math.tan((camera.fov * Math.PI) / 360));
        mats.forEach((m) => {
          m.uniforms.uScale.value = sc;
        });
        hooks.forEach((f) => f());
      };
      const ro = new ResizeObserver(size);
      ro.observe(root);
      // view half-extents on the plane z (camera looks down -z)
      const view = (z) => {
        const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - z);
        return [hh * camera.aspect, hh];
      };
      // pointer ray -> plane hit. nx, ny are -0.5..0.5 stage coordinates
      const rc = new THREE.Raycaster();
      const pl = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const ndc = new THREE.Vector2();
      const hitPlane = (nx, ny, normal, k) => {
        camera.updateMatrixWorld();
        ndc.set(nx * 2, -ny * 2);
        rc.setFromCamera(ndc, camera);
        pl.normal.copy(normal);
        pl.constant = k;
        return rc.ray.intersectPlane(pl, hit);
      };
      const NZ = new THREE.Vector3(0, 0, 1);
      const NY = new THREE.Vector3(0, 1, 0);
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);
      let raf = 0;
      // frame(s, dt, auto): s = seconds since start, auto = true while no visitor input in the last 2.5s
      const play = (frame) => {
        const t0 = performance.now();
        let last = t0;
        const loop = (t) => {
          raf = requestAnimationFrame(loop);
          if (root.dataset.paused) {
            last = t;
            return;
          }
          const dt = clamp((t - last) / 1000, 0, 0.05);
          last = t;
          const auto = t > userUntil;
          if (auto) {
            tx = Math.sin(((t - t0) / 1000) * 0.6) * 0.35;
            ty = Math.cos(((t - t0) / 1000) * 0.45) * 0.2;
          }
          px += (tx - px) * 0.06;
          py += (ty - py) * 0.06;
          frame(Math.max(0, (t - t0) / 1000), dt, auto);
          renderer.render(scene, camera);
        };
        raf = requestAnimationFrame(loop);
      };
      const teardown = () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        junk.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
      const { GPUComputationRenderer } = lib;
      const SZ = 128;
      const gpu = new GPUComputationRenderer(SZ, SZ, renderer);
      if (!renderer.extensions.has('EXT_color_buffer_float')) gpu.setDataType(THREE.HalfFloatType);
      const posTex = gpu.createTexture();
      const velTex = gpu.createTexture();
      const pd = posTex.image.data;
      for (let i = 0; i < SZ * SZ; i++) {
        let x;
        let y;
        let z;
        do {
          x = rnd() * 2 - 1;
          y = rnd() * 2 - 1;
          z = rnd() * 2 - 1;
        } while (x * x + y * y + z * z > 1);
        pd[i * 4] = x * 2.6;
        pd[i * 4 + 1] = y * 2.2;
        pd[i * 4 + 2] = z * 2.2;
        pd[i * 4 + 3] = rnd() * 10;
      }
      const HASH = 'float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}';
      const velVar = gpu.addVariable(
        'textureVelocity',
        'uniform float uDelta;uniform float uTime;uniform vec3 uTarget;uniform float uPull;void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 p=texture2D(texturePosition,uv);vec4 v=texture2D(textureVelocity,uv);' +
          'float t=uTime*0.25;vec3 q=p.xyz*0.7;vec3 f=vec3(sin(q.y*1.7+t)+cos(q.z*1.3-t*1.2),sin(q.z*1.5+t*0.8)+cos(q.x*1.9+t),sin(q.x*1.4-t)+cos(q.y*1.1+t*1.3))*0.5;' +
          'f+=vec3(-p.z,0.0,p.x)*0.18;f-=p.xyz*0.3;vec3 d=uTarget-p.xyz;float w=exp(-dot(d,d)*0.5)*uPull;f+=d*w*1.6+vec3(-d.y,d.x,0.0)*w*1.2;' +
          'v.xyz+=(f-v.xyz)*min(1.0,uDelta*2.5);gl_FragColor=v;}',
        velTex
      );
      const posVar = gpu.addVariable(
        'texturePosition',
        HASH +
          'uniform float uDelta;uniform float uTime;void main(){vec2 uv=gl_FragCoord.xy/resolution.xy;vec4 p=texture2D(texturePosition,uv);vec4 v=texture2D(textureVelocity,uv);p.xyz+=v.xyz*uDelta;p.w+=uDelta;' +
          'if(p.w>10.0||length(p.xyz)>4.6){vec3 r=vec3(hash(uv+uTime),hash(uv*1.7+uTime),hash(uv*2.3+uTime))*2.0-1.0;p.xyz=r*vec3(3.0,2.0,2.0);p.w=0.0;}gl_FragColor=p;}',
        posTex
      );
      gpu.setVariableDependencies(velVar, [posVar, velVar]);
      gpu.setVariableDependencies(posVar, [posVar, velVar]);
      velVar.material.uniforms.uDelta = { value: 0.016 };
      velVar.material.uniforms.uTime = { value: 0 };
      velVar.material.uniforms.uTarget = { value: new THREE.Vector3(0, 0, 0) };
      velVar.material.uniforms.uPull = { value: 1 };
      posVar.material.uniforms.uDelta = { value: 0.016 };
      posVar.material.uniforms.uTime = { value: 0 };
      const err = gpu.init();
      if (err) console.warn(err);
      const geo = keep(new THREE.BufferGeometry());
      const ref = new Float32Array(SZ * SZ * 2);
      for (let j = 0; j < SZ; j++) {
        for (let i = 0; i < SZ; i++) {
          ref[(j * SZ + i) * 2] = (i + 0.5) / SZ;
          ref[(j * SZ + i) * 2 + 1] = (j + 0.5) / SZ;
        }
      }
      geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(SZ * SZ * 3), 3));
      geo.setAttribute('aRef', new THREE.BufferAttribute(ref, 2));
      const mat = keep(
        new THREE.ShaderMaterial({
          uniforms: {
            texturePosition: { value: null },
            textureVelocity: { value: null },
            uSize: { value: 0.045 },
            uScale: { value: 300 },
          },
          vertexShader:
            'uniform sampler2D texturePosition;uniform sampler2D textureVelocity;uniform float uSize;uniform float uScale;attribute vec2 aRef;varying float vS;varying float vA;' +
            'void main(){vec4 p=texture2D(texturePosition,aRef);vec4 v=texture2D(textureVelocity,aRef);vec4 mv=modelViewMatrix*vec4(p.xyz,1.0);vS=clamp(length(v.xyz)/2.2,0.0,1.0);' +
            'vA=smoothstep(0.0,0.8,p.w)*(1.0-smoothstep(9.0,10.0,p.w))*mix(1.0,0.35,clamp((-mv.z-9.0)/8.0,0.0,1.0));gl_PointSize=max(uSize*uScale*(0.75+vS*0.8)/max(-mv.z,0.1),1.0);gl_Position=projectionMatrix*mv;}',
          fragmentShader:
            'varying float vS;varying float vA;void main(){float d=length(gl_PointCoord-0.5)*2.0;if(d>1.0)discard;float a=1.0-smoothstep(0.4,1.0,d);' +
            'vec3 pale=vec3(0.62,0.77,1.0);vec3 blue=vec3(0.04,0.42,1.0);vec3 ink=vec3(0.04,0.18,0.48);vec3 c=mix(mix(pale,blue,smoothstep(0.0,0.6,vS)),ink,smoothstep(0.6,1.0,vS));gl_FragColor=vec4(c,a*vA*0.85);}',
          transparent: true,
          depthWrite: false,
          depthTest: false,
        })
      );
      mats.push(mat);
      const pts = new THREE.Points(geo, mat);
      pts.frustumCulled = false;
      scene.add(pts);
      pts.position.x = 1.0;
      camera.position.set(0, 0, 11);
      camera.fov = 40;
      size();
      play((s, dt, auto) => {
        let gx;
        let gy;
        if (auto) {
          gx = Math.sin(s * 0.6) * 2.2;
          gy = Math.cos(s * 0.45) * 1.4;
        } else {
          const h = hitPlane(tx, ty, NZ, 0);
          gx = h ? h.x - 1.0 : 0;
          gy = h ? h.y : 0;
        }
        const uv = velVar.material.uniforms;
        uv.uDelta.value = dt;
        uv.uTime.value = s;
        uv.uTarget.value.set(gx, gy, 0);
        uv.uPull.value = auto ? 0.8 : 1.4;
        posVar.material.uniforms.uDelta.value = dt;
        posVar.material.uniforms.uTime.value = s;
        gpu.compute();
        mat.uniforms.texturePosition.value = gpu.getCurrentRenderTarget(posVar).texture;
        mat.uniforms.textureVelocity.value = gpu.getCurrentRenderTarget(velVar).texture;
      });
      return () => {
        gpu.dispose();
        teardown();
      };
    },
    prompt: `Build a GPU-simulated particle field with Three.js and GPUComputationRenderer (three/addons/misc/GPUComputationRenderer.js). Create a 128 by 128 computation (16,384 particles): gpu = new GPUComputationRenderer(128, 128, renderer), two data textures from gpu.createTexture() (position xyz plus age in w, velocity xyz), and two compute variables added with gpu.addVariable('texturePosition', fragmentShader, tex) and 'textureVelocity', each depending on both (setVariableDependencies), then gpu.init(). Use setDataType(HalfFloatType) when EXT_color_buffer_float is missing. Velocity shader: a divergence-free-looking field built from sines of the position and time, a slow swirl about Y, a soft pull to the origin, and a pointer term weighted by exp(-dot(d, d) * 0.5) with both an attractive and a tangential part; ease the velocity toward that field. Position shader: p += v * dt, age += dt, and respawn from a hash when age passes 10s or the particle escapes. Draw with a Points geometry carrying an aRef attribute (uv of each texel) and a vertex shader that samples texturePosition and textureVelocity, sizes with perspective, colors pale blue to accent to ink by speed, and fades with age. Each frame set uDelta, uTime and the pointer target (raycast to z = 0), call gpu.compute(), and feed gpu.getCurrentRenderTarget(variable).texture to the material. Idle for 2.5s: ghost pointer on a Lissajous path. Dispose gpu, geometry, material and renderer on unmount; pause offscreen.`,
  });
})();
