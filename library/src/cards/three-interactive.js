// three-interactive cards (Three.js). Scenes that answer the pointer: turn, drag, hover, click.
// Three.js r186. Each run() is self-contained (it is serialized into "Copy code").
(() => {
  // Shared markup for the cards below (build-time strings only, never used inside run()).
  const HTML = '<div class="bg"></div><div class="gl"></div>';
  const CSS = `
.d{background:#fff;touch-action:pan-y}
.d .bg{position:absolute;inset:0;background:radial-gradient(70% 60% at 55% 42%,#e3efff 0%,#f6f9ff 55%,#fff 100%)}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-accent)}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
.d .hint{position:absolute;left:50%;bottom:9px;transform:translateX(-50%);padding:4px 9px;border-radius:999px;border:1px solid var(--ml-line);background:rgba(255,255,255,.78);font:600 8px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-muted);pointer-events:none;white-space:nowrap}
.d .gh{position:absolute;left:0;top:0;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;border:1.5px solid var(--ml-accent);background:rgba(255,68,51,.14);pointer-events:none;opacity:0;transition:opacity .35s,scale .15s}
.d .gh.on{opacity:1}
.d .gh.dn{scale:.65}
`;

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-product-viewer',
    cat: 'three-interactive',
    title: 'Product viewer',
    sub: 'Drag to turn a device, it glides on release',
    libs: ['three'],
    html: HTML + '<div class="copy"><p class="k">Halo One</p><h3>Turn it over.</h3></div>',
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, OrbitControls, RoundedBoxGeometry } = lib;
      const host = root.querySelector('.gl');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      camera.position.set(0, 0.5, 7.6);

      const phone = new THREE.Group();
      scene.add(phone);
      const bodyGeo = track(new RoundedBoxGeometry(1.56, 3.1, 0.17, 6, 0.22));
      const bodyMat = track(new THREE.MeshPhysicalMaterial({ color: 0xdde7f7, metalness: 0.85, roughness: 0.26, clearcoat: 0.5, clearcoatRoughness: 0.2 }));
      phone.add(new THREE.Mesh(bodyGeo, bodyMat));

      // screen: a canvas drawn lock screen on a rounded plane
      const sc = document.createElement('canvas');
      sc.width = 512;
      sc.height = 1060;
      const screenTex = track(new THREE.CanvasTexture(sc));
      screenTex.colorSpace = THREE.SRGBColorSpace;
      screenTex.anisotropy = 4;
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const drawScreen = () => {
        const g = sc.getContext('2d');
        g.clearRect(0, 0, 512, 1060);
        g.save();
        rr(g, 0, 0, 512, 1060, 62);
        g.clip();
        const bg = g.createLinearGradient(0, 0, 512, 1060);
        bg.addColorStop(0, '#FFB8A3');
        bg.addColorStop(0.55, '#3d86ff');
        bg.addColorStop(1, '#0a52d6');
        g.fillStyle = bg;
        g.fillRect(0, 0, 512, 1060);
        const sun = g.createRadialGradient(380, 250, 0, 380, 250, 330);
        sun.addColorStop(0, 'rgba(255,255,255,.55)');
        sun.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = sun;
        g.fillRect(0, 0, 512, 1060);
        g.fillStyle = '#fff';
        g.textAlign = 'center';
        g.font = '600 150px Geist, system-ui, sans-serif';
        g.fillText('9:41', 256, 330);
        g.font = '500 34px Geist, system-ui, sans-serif';
        g.fillStyle = 'rgba(255,255,255,.85)';
        g.fillText('Tuesday, 14 October', 256, 392);
        const card = (y, a) => {
          g.fillStyle = 'rgba(255,255,255,' + a + ')';
          rr(g, 44, y, 424, 120, 34);
          g.fill();
        };
        card(520, 0.3);
        card(662, 0.22);
        g.fillStyle = 'rgba(255,255,255,.9)';
        rr(g, 76, 556, 150, 18, 9);
        g.fill();
        rr(g, 76, 596, 300, 14, 7);
        g.fill();
        rr(g, 76, 698, 110, 18, 9);
        g.fill();
        rr(g, 76, 738, 250, 14, 7);
        g.fill();
        for (let i = 0; i < 4; i++) {
          g.fillStyle = 'rgba(255,255,255,.28)';
          rr(g, 44 + i * 112, 900, 92, 92, 26);
          g.fill();
        }
        g.fillStyle = 'rgba(255,255,255,.9)';
        rr(g, 176, 1030, 160, 8, 4);
        g.fill();
        g.restore();
        screenTex.needsUpdate = true;
      };
      drawScreen();
      let dead = false;
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => !dead && drawScreen());
      const screenGeo = track(new THREE.PlaneGeometry(1.44, 2.98));
      const screenMat = track(new THREE.MeshBasicMaterial({ map: screenTex, transparent: true, toneMapped: false }));
      const screen = new THREE.Mesh(screenGeo, screenMat);
      screen.position.z = 0.0865;
      phone.add(screen);

      // back camera module
      const modGeo = track(new RoundedBoxGeometry(0.68, 0.68, 0.05, 4, 0.15));
      const modMat = track(new THREE.MeshPhysicalMaterial({ color: 0xf2f6fd, metalness: 0.6, roughness: 0.25, clearcoat: 0.6 }));
      const mod = new THREE.Mesh(modGeo, modMat);
      mod.position.set(-0.38, 1.1, -0.11);
      phone.add(mod);
      const lensGeo = track(new THREE.CylinderGeometry(0.15, 0.15, 0.05, 40));
      const lensMat = track(new THREE.MeshPhysicalMaterial({ color: 0x0b1a3a, metalness: 0.4, roughness: 0.08, clearcoat: 1 }));
      [
        [-0.5, 1.22],
        [-0.26, 0.98],
      ].forEach(([x, y]) => {
        const l = new THREE.Mesh(lensGeo, lensMat);
        l.rotation.x = Math.PI / 2;
        l.position.set(x, y, -0.135);
        phone.add(l);
      });

      // soft contact shadow
      const c = document.createElement('canvas');
      c.width = c.height = 128;
      const cg = c.getContext('2d');
      const grad = cg.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.32)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      cg.fillStyle = grad;
      cg.fillRect(0, 0, 128, 128);
      const shadowTex = track(new THREE.CanvasTexture(c));
      const shadowGeo = track(new THREE.PlaneGeometry(3, 1));
      const shadowMat = track(new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false }));
      const shadow = new THREE.Mesh(shadowGeo, shadowMat);
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.set(0, -1.85, 0);
      scene.add(shadow);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.07;
      controls.enableZoom = false; // never hijack the page wheel
      controls.enablePan = false;
      controls.minPolarAngle = 1.05;
      controls.maxPolarAngle = 2.05;
      controls.rotateSpeed = 0.9;
      controls.autoRotateSpeed = 1.8;
      renderer.domElement.style.touchAction = 'pan-y';

      let dragging = false;
      let userUntil = 0;
      let spinK = 0;
      controls.addEventListener('start', () => (dragging = true));
      controls.addEventListener('end', () => {
        dragging = false;
        userUntil = performance.now() + 2500;
      });

      // a drag must not also open the preview modal
      let sx = 0;
      let sy = 0;
      let dragPx = 0;
      let down = false;
      const onDown = (e) => {
        down = true;
        sx = e.clientX;
        sy = e.clientY;
        dragPx = 0;
      };
      const onMove = (e) => {
        if (down) dragPx = Math.max(dragPx, Math.hypot(e.clientX - sx, e.clientY - sy));
      };
      const onUp = () => (down = false);
      const onClickCap = (e) => dragPx > 5 && e.stopPropagation();
      root.addEventListener('pointerdown', onDown);
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerup', onUp);
      root.addEventListener('click', onClickCap, true);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.setViewOffset(w, h, -w * 0.13, 0, w, h);
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const idle = !dragging && t > userUntil;
        spinK += ((idle ? 1 : 0) - spinK) * 0.03;
        controls.autoRotate = spinK > 0.01;
        controls.autoRotateSpeed = 1.8 * spinK;
        phone.position.y = Math.sin((t - t0) / 1000) * 0.05;
        shadowMat.opacity = 0.9 - phone.position.y * 2;
        controls.update();
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointerdown', onDown);
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerup', onUp);
        root.removeEventListener('click', onClickCap, true);
        controls.dispose();
        own.forEach((o) => o.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an interactive 3D product viewer for a hero section with Three.js and OrbitControls. Load three from a pinned CDN with an import map (three and three/addons/). Model the product procedurally: a RoundedBoxGeometry body (MeshPhysicalMaterial, metalness 0.85, roughness 0.26, clearcoat 0.5), a screen plane with a CanvasTexture UI (MeshBasicMaterial, toneMapped false), and a camera module on the back. Light it with new PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04) as scene.environment and use ACESFilmicToneMapping. Set up OrbitControls with enableDamping true (dampingFactor 0.07), enableZoom false and enablePan false so the page wheel never gets hijacked, and limit minPolarAngle and maxPolarAngle (about 1.05 to 2.05 rad) so the product never flips upside down. Set the canvas touch-action to pan-y so vertical page scroll still works on phones. Idle behavior: listen to the controls start and end events; 2.5 seconds after the last drag, ease autoRotate in (ramp autoRotateSpeed from 0 to about 1.8) so the product keeps turning by itself, and stop the moment the visitor grabs it. Add a gradient contact shadow plane under it. Size the canvas with a ResizeObserver, pause when offscreen, and dispose geometries, materials, textures, the PMREM target, controls and the renderer on unmount. Freeze autoRotate under prefers-reduced-motion.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-globe-arcs',
    cat: 'three-interactive',
    title: 'Globe with arcs',
    sub: 'Great-circle arcs, hover a city to lift it',
    libs: ['three'],
    html: HTML + '<div class="tag"></div><div class="copy"><p class="k">Network</p><h3>Everywhere,<br>fast.</h3></div>',
    css:
      CSS +
      `
.d .tag{position:absolute;left:0;top:0;padding:4px 8px;border-radius:8px;background:#fff;box-shadow:var(--ml-shadow);font:600 10px/1.1 var(--ml-font);color:var(--ml-ink);white-space:nowrap;pointer-events:none;opacity:0;transition:opacity .2s}
.d .tag b{display:block;margin-top:2px;font:600 8px/1 var(--ml-mono);color:var(--ml-accent);letter-spacing:.04em}
.d .tag.on{opacity:1}
.d h3{font-size:17px;line-height:1.02}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, SimplexNoise } = lib;
      const host = root.querySelector('.gl');
      const tag = root.querySelector('.tag');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
      camera.position.set(0, 0.3, 8.4);

      const R = 1.5;
      const tilt = new THREE.Group();
      tilt.rotation.z = 0.32;
      tilt.position.x = 1.0;
      scene.add(tilt);
      const globe = new THREE.Group();
      tilt.add(globe);

      const ballGeo = track(new THREE.SphereGeometry(R, 64, 48));
      const ballMat = track(new THREE.MeshPhysicalMaterial({ color: 0xeef4ff, roughness: 0.32, metalness: 0.0, clearcoat: 0.7, clearcoatRoughness: 0.18 }));
      globe.add(new THREE.Mesh(ballGeo, ballMat));

      // land dots: a Fibonacci sphere kept where seeded noise is high
      let seed = 7;
      const noise = new SimplexNoise({ random: () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646 });
      const pts = [];
      const N = 9000;
      const golden = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < N; i++) {
        const y = 1 - (i / (N - 1)) * 2;
        const rad = Math.sqrt(1 - y * y);
        const th = golden * i;
        const x = Math.cos(th) * rad;
        const z = Math.sin(th) * rad;
        const n = noise.noise3d(x * 1.5, y * 1.5, z * 1.5) + 0.45 * noise.noise3d(x * 3.6, y * 3.6, z * 3.6);
        if (n > 0.12) pts.push(x * R * 1.004, y * R * 1.004, z * R * 1.004);
      }
      const dotGeo = track(new THREE.BufferGeometry());
      dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
      const dc = document.createElement('canvas');
      dc.width = dc.height = 32;
      const dg = dc.getContext('2d');
      dg.fillStyle = '#fff';
      dg.beginPath();
      dg.arc(16, 16, 14, 0, Math.PI * 2);
      dg.fill();
      const dotTex = track(new THREE.CanvasTexture(dc));
      const dotMat = track(new THREE.PointsMaterial({ color: 0x2f6bff, size: 0.042, map: dotTex, alphaTest: 0.5, transparent: true, sizeAttenuation: true }));
      globe.add(new THREE.Points(dotGeo, dotMat));

      // cities and arcs
      const cities = [
        ['Manila', 14.6, 121.0, '12 ms'],
        ['San Francisco', 37.8, -122.4, '148 ms'],
        ['New York', 40.7, -74.0, '212 ms'],
        ['London', 51.5, -0.1, '176 ms'],
        ['Singapore', 1.35, 103.8, '38 ms'],
        ['Tokyo', 35.7, 139.7, '46 ms'],
        ['Sydney', -33.9, 151.2, '92 ms'],
        ['Sao Paulo', -23.5, -46.6, '302 ms'],
      ];
      const dirOf = (lat, lon) => {
        const la = (lat * Math.PI) / 180;
        const lo = (lon * Math.PI) / 180;
        return new THREE.Vector3(Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo));
      };
      const dirs = cities.map((c) => dirOf(c[1], c[2]));
      const markerGeo = track(new THREE.SphereGeometry(0.038, 20, 14));
      const markerMat = track(new THREE.MeshPhysicalMaterial({ color: 0x0a6cff, roughness: 0.25, clearcoat: 1 }));
      const markers = dirs.map((d) => {
        const m = new THREE.Mesh(markerGeo, markerMat);
        m.position.copy(d).multiplyScalar(R * 1.006);
        globe.add(m);
        return m;
      });
      const lift = cities.map(() => 0);

      const arcDefs = [[0, 1], [0, 4], [0, 5], [2, 3], [3, 4], [1, 2], [6, 0], [7, 2]];
      const arcMat = track(new THREE.MeshBasicMaterial({ color: 0x0a6cff, transparent: true, opacity: 0.9 }));
      const TUBE = 56;
      const RAD = 5;
      const arcs = arcDefs.map(([a, b], k) => {
        const A = dirs[a];
        const B = dirs[b];
        const ang = A.angleTo(B);
        const p = [];
        for (let i = 0; i <= 40; i++) {
          const u = i / 40;
          const d = new THREE.Vector3().copy(A).multiplyScalar(Math.sin((1 - u) * ang)).addScaledVector(B, Math.sin(u * ang)).divideScalar(Math.sin(ang));
          p.push(d.multiplyScalar(R * (1.006 + 0.32 * (ang / Math.PI) * Math.sin(u * Math.PI))));
        }
        const geo = track(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(p), TUBE, 0.0085, RAD, false));
        const mesh = new THREE.Mesh(geo, arcMat);
        globe.add(mesh);
        return { geo, mesh, off: k * 0.9 };
      });
      const IDX = TUBE * RAD * 6;
      const STEP = RAD * 6;

      // contact shadow
      const c = document.createElement('canvas');
      c.width = c.height = 128;
      const cg = c.getContext('2d');
      const grad = cg.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.3)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      cg.fillStyle = grad;
      cg.fillRect(0, 0, 128, 128);
      const shTex = track(new THREE.CanvasTexture(c));
      const shGeo = track(new THREE.PlaneGeometry(3.4, 0.9));
      const shMat = track(new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false }));
      const sh = new THREE.Mesh(shGeo, shMat);
      sh.rotation.x = -Math.PI / 2;
      sh.position.set(1.0, -1.75, 0);
      scene.add(sh);

      let W = 1;
      let H = 1;
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let mx = 0;
      let my = 0;
      let hasPtr = false;
      let userUntil = 0;
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        mx = e.clientX - r.left;
        my = e.clientY - r.top;
        hasPtr = true;
        tx = mx / r.width - 0.5;
        ty = my / r.height - 0.5;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const v = new THREE.Vector3();
      const wp = new THREE.Vector3();
      const cam = new THREE.Vector3();
      const t0 = performance.now();
      let last = t0;
      let spin = 0.6;
      let hot = -1;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.05, (t - last) / 1000);
        last = t;
        const s = Math.max(0, t - t0) / 1000;
        const idle = t > userUntil;
        if (idle) {
          tx = Math.sin(s * 0.35) * 0.1;
          ty = Math.cos(s * 0.3) * 0.08;
        }
        px += (tx - px) * 0.05;
        py += (ty - py) * 0.05;
        spin += dt * (idle ? 0.22 : 0.07);
        globe.rotation.y = spin + px * 0.9;
        tilt.rotation.x = 0.28 + py * 0.5;
        globe.updateMatrixWorld(true);
        tilt.updateMatrixWorld(true);

        // which city is hot: nearest to the pointer (real), or a scripted tour (idle)
        cam.copy(camera.position);
        const front = [];
        markers.forEach((m, i) => {
          m.getWorldPosition(wp);
          const nrm = v.copy(wp).sub(tilt.getWorldPosition(new THREE.Vector3())).normalize();
          const facing = nrm.dot(cam.clone().sub(wp).normalize());
          if (facing > 0.18) front.push({ i, x: (wp.clone().project(camera).x * 0.5 + 0.5) * W, y: (-wp.clone().project(camera).y * 0.5 + 0.5) * H });
        });
        let pick = -1;
        if (!idle && hasPtr) {
          let best = 26;
          front.forEach((f) => {
            const d = Math.hypot(f.x - mx, f.y - my);
            if (d < best) {
              best = d;
              pick = f.i;
            }
          });
        } else if (front.length) {
          pick = front[Math.floor(s / 1.7) % front.length].i;
        }
        hot = pick;
        markers.forEach((m, i) => {
          lift[i] += ((i === hot ? 1 : 0) - lift[i]) * (1 - Math.exp(-dt * 9));
          m.position.copy(dirs[i]).multiplyScalar(R * 1.006 + lift[i] * 0.2);
          m.scale.setScalar(1 + lift[i] * 1.6);
        });
        if (hot >= 0) {
          markers[hot].getWorldPosition(wp);
          wp.project(camera);
          tag.innerHTML = cities[hot][0] + '<b>' + cities[hot][3] + '</b>';
          tag.style.transform = 'translate(' + Math.min((wp.x * 0.5 + 0.5) * W + 12, W - tag.offsetWidth - 6) + 'px,' + Math.max(4, (-wp.y * 0.5 + 0.5) * H - 34) + 'px)';
          tag.classList.add('on');
        } else tag.classList.remove('on');

        // comet-style arcs: head runs out, tail follows
        arcs.forEach((a) => {
          const ph = (((s + a.off) % 4.2) / 4.2);
          const head = Math.min(1, ph * 1.6);
          const tail = Math.max(0, (ph - 0.45) * 1.8);
          const st = Math.min(TUBE - 1, Math.floor(tail * TUBE)) * STEP;
          const en = Math.max(st, Math.floor(head * TUBE) * STEP);
          a.geo.setDrawRange(st, Math.min(IDX, en) - st);
        });
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        own.forEach((o) => o.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an interactive 3D globe for a "global network" section with Three.js. Load three from a pinned CDN with an import map. Make a sphere (MeshPhysicalMaterial, light blue-white, clearcoat 0.7) and cover its land with round dots: generate a Fibonacci sphere of about 9000 points, keep the ones where SimplexNoise (seeded) is above a threshold, and draw them as THREE.Points with a round CanvasTexture sprite and sizeAttenuation. Place 6 to 8 cities from latitude and longitude (x = cos(lat) sin(lon), y = sin(lat), z = cos(lat) cos(lon)) as small spheres. Connect city pairs with great-circle arcs: slerp between the two unit vectors, raise the radius with sin(pi t) scaled by the angle, build a CatmullRomCurve3 and a thin TubeGeometry, and animate a comet by moving setDrawRange start and count in multiples of radialSegments * 6 indices. Hover: every frame project each city to screen space, ignore cities facing away (dot product with the view direction), pick the nearest within about 26px of the pointer, ease that marker outward and scale it up, and show an HTML label positioned from the projected point. When the pointer is idle for 2.5 seconds, tour the visible cities automatically. Spin the globe slowly and ease its tilt toward the pointer. Dispose everything on unmount and respect prefers-reduced-motion.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-hover-grid',
    cat: 'three-interactive',
    title: 'Raycast hover grid',
    sub: 'Tiles under the pointer lift and brighten',
    libs: ['three'],
    html: HTML + '<div class="gh"></div><div class="hint">Hover the grid</div>',
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry } = lib;
      const host = root.querySelector('.gl');
      const gh = root.querySelector('.gh');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
      camera.position.set(0, 8.4, 7.6);
      camera.lookAt(0, 0, 0.2);

      const COLS = 13;
      const ROWS = 9;
      const PITCH = 0.56;
      const geo = track(new RoundedBoxGeometry(0.48, 0.6, 0.48, 3, 0.08));
      const mat = track(new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0.05 }));
      const mesh = new THREE.InstancedMesh(geo, mat, COLS * ROWS);
      scene.add(mesh);
      const home = [];
      for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++) home.push([(c - (COLS - 1) / 2) * PITCH, (r - (ROWS - 1) / 2) * PITCH]);
      const lift = new Float32Array(COLS * ROWS);
      const m4 = new THREE.Matrix4();
      const base = new THREE.Color(0xd6e3f8);
      const hi = new THREE.Color(0x1f62f5);
      const col = new THREE.Color();
      const paint = () => {
        for (let i = 0; i < home.length; i++) {
          m4.makeTranslation(home[i][0], -0.3 + lift[i] * 0.62, home[i][1]);
          mesh.setMatrixAt(i, m4);
          col.copy(base).lerp(hi, Math.min(1, lift[i] * 1.15));
          mesh.setColorAt(i, col);
        }
        mesh.instanceMatrix.needsUpdate = true;
        mesh.instanceColor.needsUpdate = true;
      };
      paint();

      let W = 1;
      let H = 1;
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      const ndc = new THREE.Vector2(9, 9);
      let userUntil = 0;
      let real = false;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
        userUntil = performance.now() + 2500;
        real = true;
      };
      root.addEventListener('pointermove', onMove);

      const ray = new THREE.Raycaster();
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const hit = new THREE.Vector3();
      const sp = new THREE.Vector3();
      const t0 = performance.now();
      let last = t0;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.05, (t - last) / 1000);
        last = t;
        const s = Math.max(0, t - t0) / 1000;
        const idle = t > userUntil;
        if (idle) {
          sp.set(Math.sin(s * 0.8) * 2.7, 0, Math.sin(s * 1.3 + 1) * 1.2 + Math.cos(s * 0.5) * 0.4);
          sp.project(camera);
          ndc.set(sp.x, sp.y);
        }
        ray.setFromCamera(ndc, camera);
        const ok = ray.ray.intersectPlane(plane, hit) !== null;
        const k = 1 - Math.exp(-dt * 10);
        for (let i = 0; i < home.length; i++) {
          let target = 0;
          if (ok) {
            const d = Math.hypot(home[i][0] - hit.x, home[i][1] - hit.z);
            target = Math.max(0, 1 - d / 1.35);
            target *= target * (3 - 2 * target);
          }
          lift[i] += (target - lift[i]) * (target > lift[i] ? k : k * 0.55);
        }
        paint();
        gh.style.transform = 'translate(' + (((ndc.x + 1) / 2) * W) + 'px,' + (((1 - ndc.y) / 2) * H) + 'px)';
        gh.classList.toggle('on', idle);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        own.forEach((o) => o.dispose());
        mesh.dispose();
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a hover-reactive 3D tile grid with Three.js. Load three from a pinned CDN with an import map. Render 13 by 9 rounded tiles (RoundedBoxGeometry) as a single InstancedMesh with MeshStandardMaterial plus per-instance colors (setColorAt), under a perspective camera angled about 45 degrees down at the grid, lit with RoomEnvironment through PMREMGenerator. Each frame: convert the pointer to normalized device coordinates, call raycaster.setFromCamera, and intersect the ray with an invisible ground plane (ray.intersectPlane on a Plane with normal 0,1,0). For every tile compute its distance to the hit point, turn it into a target lift with a smoothstep falloff over about 1.35 units so the tile under the pointer and its neighbours rise together, and ease each tile toward its target with an exponential factor (1 - exp(-dt * 10)), slower on the way down so the trail eases back. Write each tile's translation into the instance matrix and lerp its color from a pale grey-blue to your accent color by its lift, then set instanceMatrix.needsUpdate and instanceColor.needsUpdate. When the visitor has not moved the pointer for 2.5 seconds, drive a ghost point on a slow Lissajous path across the grid instead. Pause offscreen, size with ResizeObserver, dispose on unmount, and freeze the ghost under prefers-reduced-motion.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-drag-inertia',
    cat: 'three-interactive',
    title: 'Drag with inertia',
    sub: 'Flick a die, it keeps its momentum',
    libs: ['three'],
    html: HTML + '<div class="hint">Drag and flick</div>',
    css: CSS + '.d{cursor:grab}',
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry } = lib;
      const host = root.querySelector('.gl');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      camera.position.set(0, 0.2, 8.6);

      // six canvas faces, opposite faces sum to 7: +x 3, -x 4, +y 2, -y 5, +z 1, -z 6
      const PIPS = {
        1: [[0.5, 0.5]],
        2: [[0.3, 0.3], [0.7, 0.7]],
        3: [[0.3, 0.3], [0.5, 0.5], [0.7, 0.7]],
        4: [[0.3, 0.3], [0.7, 0.3], [0.3, 0.7], [0.7, 0.7]],
        5: [[0.3, 0.3], [0.7, 0.3], [0.5, 0.5], [0.3, 0.7], [0.7, 0.7]],
        6: [[0.3, 0.26], [0.7, 0.26], [0.3, 0.5], [0.7, 0.5], [0.3, 0.74], [0.7, 0.74]],
      };
      const face = (n) => {
        const c = document.createElement('canvas');
        c.width = c.height = 256;
        const g = c.getContext('2d');
        const blue = n === 1;
        const bg = g.createLinearGradient(0, 0, 256, 256);
        bg.addColorStop(0, blue ? '#3d7bff' : '#ffffff');
        bg.addColorStop(1, blue ? '#0a52d6' : '#dfe9f8');
        g.fillStyle = bg;
        g.fillRect(0, 0, 256, 256);
        g.fillStyle = blue ? '#ffffff' : '#1f62f5';
        PIPS[n].forEach(([x, y]) => {
          g.beginPath();
          g.arc(x * 256, y * 256, n === 1 ? 40 : 21, 0, Math.PI * 2);
          g.fill();
        });
        const t = track(new THREE.CanvasTexture(c));
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        return t;
      };
      const geo = track(new RoundedBoxGeometry(1.75, 1.75, 1.75, 5, 0.26));
      const mats = [3, 4, 2, 5, 1, 6].map((n) => track(new THREE.MeshPhysicalMaterial({ map: face(n), roughness: 0.28, clearcoat: 0.9, clearcoatRoughness: 0.1 })));
      const die = new THREE.Mesh(geo, mats);
      die.quaternion.setFromEuler(new THREE.Euler(0.55, -0.7, 0.12));
      scene.add(die);

      const c = document.createElement('canvas');
      c.width = c.height = 128;
      const cg = c.getContext('2d');
      const grad = cg.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.3)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      cg.fillStyle = grad;
      cg.fillRect(0, 0, 128, 128);
      const shTex = track(new THREE.CanvasTexture(c));
      const shGeo = track(new THREE.PlaneGeometry(3.2, 1));
      const shMat = track(new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false }));
      const sh = new THREE.Mesh(shGeo, shMat);
      sh.rotation.x = -Math.PI / 2;
      sh.position.y = -1.6;
      scene.add(sh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer capture drag; velocity is measured while dragging and handed to the free spin on release
      const w = new THREE.Vector3(); // angular velocity, rad/s, world space
      const AX = new THREE.Vector3(1, 0, 0);
      const AY = new THREE.Vector3(0, 1, 0);
      const q1 = new THREE.Quaternion();
      const q2 = new THREE.Quaternion();
      const axis = new THREE.Vector3();
      let down = false;
      let sx = 0;
      let sy = 0;
      let lx = 0;
      let ly = 0;
      let accX = 0;
      let accY = 0;
      let dragPx = 0;
      let lastMove = 0;
      let userUntil = 0;
      const onDown = (e) => {
        down = true;
        sx = lx = e.clientX;
        sy = ly = e.clientY;
        accX = accY = dragPx = 0;
        lastMove = performance.now();
        w.set(0, 0, 0);
        try {
          root.setPointerCapture(e.pointerId);
        } catch (_) {}
        root.style.cursor = 'grabbing';
        userUntil = performance.now() + 2500;
      };
      const onMove = (e) => {
        if (!down) return;
        accX += e.clientX - lx;
        accY += e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        dragPx = Math.max(dragPx, Math.hypot(e.clientX - sx, e.clientY - sy));
        lastMove = performance.now();
        userUntil = lastMove + 2500;
      };
      const onUp = (e) => {
        if (!down) return;
        down = false;
        try {
          root.releasePointerCapture(e.pointerId);
        } catch (_) {}
        root.style.cursor = 'grab';
        const now = performance.now();
        userUntil = now + 2500;
        if (now - lastMove > 90) w.set(0, 0, 0); // held still before release: no throw
      };
      const onClickCap = (e) => dragPx > 5 && e.stopPropagation();
      root.addEventListener('pointerdown', onDown);
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerup', onUp);
      root.addEventListener('pointercancel', onUp);
      root.addEventListener('click', onClickCap, true);

      const t0 = performance.now();
      let last = t0;
      let nextFlick = t0 + 1400;
      let dir = 1;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.05, (t - last) / 1000);
        last = t;
        if (down) {
          const K = 0.0085;
          const ax = accY * K;
          const ay = accX * K;
          q1.setFromAxisAngle(AX, ax);
          q2.setFromAxisAngle(AY, ay);
          die.quaternion.premultiply(q2).premultiply(q1);
          if (dt > 0) {
            w.x += (ax / dt - w.x) * 0.35;
            w.y += (ay / dt - w.y) * 0.35;
          }
          accX = accY = 0;
          if (t - lastMove > 90) w.multiplyScalar(0.5);
        } else {
          const sp = w.length();
          if (sp > 0.002) {
            q1.setFromAxisAngle(axis.set(w.x / sp, w.y / sp, w.z / sp), sp * dt);
            die.quaternion.premultiply(q1);
            w.multiplyScalar(Math.exp(-dt * 2.0));
          }
          if (t > userUntil && sp < 0.5 && t > nextFlick) {
            // idle: a scripted flick, so the grid card shows the inertia too
            w.set(1.6 * dir, 5.4 * dir, 0);
            dir = -dir;
            nextFlick = t + 3800;
          }
        }
        die.quaternion.normalize();
        const bob = Math.sin((t - t0) / 900) * 0.06;
        die.position.y = bob;
        shMat.opacity = 0.9 - bob * 2;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointerdown', onDown);
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerup', onUp);
        root.removeEventListener('pointercancel', onUp);
        root.removeEventListener('click', onClickCap, true);
        root.style.cursor = '';
        own.forEach((o) => o.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a drag-to-rotate 3D object with real inertia using Three.js and no OrbitControls. Load three from a pinned CDN with an import map. Use a RoundedBoxGeometry die with six CanvasTexture faces (a MeshPhysicalMaterial per face, opposite faces summing to seven) lit by RoomEnvironment through PMREMGenerator. Interaction: on pointerdown call setPointerCapture and set the cursor to grabbing; on pointermove accumulate the pixel delta; each frame convert the accumulated delta to angles (about 0.0085 rad per px), build one quaternion about world X (vertical drag) and one about world Y (horizontal drag), and premultiply them onto object.quaternion so the turn always matches the finger. Also track an angular velocity vector in rad/s, smoothed with a 0.35 low-pass of angle / dt. On pointerup release the capture, and if the pointer stood still for more than 90ms zero the velocity (a held finger is not a throw). While not dragging, keep rotating by the velocity each frame about its axis and decay it with exp(-dt * 2) so it coasts to a stop smoothly. Call stopPropagation on the click that follows a drag larger than 5px so it never triggers other click handlers. Set touch-action to pan-y so vertical page scrolling still works on phones. After 2.5 seconds idle, give the die a scripted flick every few seconds. Pause offscreen, dispose all geometry, textures and materials on unmount, and under prefers-reduced-motion skip the scripted flicks.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-click-explode',
    cat: 'three-interactive',
    title: 'Click to explode',
    sub: 'Pieces fly apart and spring back together',
    libs: ['three'],
    html: HTML + '<div class="hint">Click to explode</div>',
    css: CSS + '.d{cursor:pointer}',
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry } = lib;
      const host = root.querySelector('.gl');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      camera.position.set(0, 0.4, 9.8);

      const geo = track(new RoundedBoxGeometry(0.5, 0.5, 0.5, 3, 0.1));
      const mk = (hex, rough) => track(new THREE.MeshPhysicalMaterial({ color: hex, roughness: rough, clearcoat: 0.8, clearcoatRoughness: 0.12 }));
      const matBlue = mk(0x1f62f5, 0.22);
      const matIce = mk(0xcfe0fb, 0.3);
      const matWhite = mk(0xf6f9ff, 0.3);

      const group = new THREE.Group();
      scene.add(group);
      const pieces = [];
      const P = 0.58;
      for (let x = -1; x <= 1; x++)
        for (let y = -1; y <= 1; y++)
          for (let z = -1; z <= 1; z++) {
            if (!x && !y && !z) continue;
            const n = Math.abs(x) + Math.abs(y) + Math.abs(z);
            const mesh = new THREE.Mesh(geo, n === 3 ? matBlue : n === 2 ? matIce : matWhite);
            const home = new THREE.Vector3(x * P, y * P, z * P);
            const k = x * 7 + y * 13 + z * 19;
            pieces.push({
              mesh,
              home,
              off: home.clone().multiplyScalar(1.5 + (n === 3 ? 0.4 : 0)),
              spin: new THREE.Vector3(Math.sin(k) * 1.6, Math.cos(k * 1.7) * 1.6, Math.sin(k * 2.3) * 1.2),
              e: 0,
              v: 0,
              goal: 0,
              armed: false,
              n,
            });
            group.add(mesh);
          }

      const c = document.createElement('canvas');
      c.width = c.height = 128;
      const cg = c.getContext('2d');
      const grad = cg.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.28)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      cg.fillStyle = grad;
      cg.fillRect(0, 0, 128, 128);
      const shTex = track(new THREE.CanvasTexture(c));
      const shGeo = track(new THREE.PlaneGeometry(3.4, 1.1));
      const shMat = track(new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false }));
      const sh = new THREE.Mesh(shGeo, shMat);
      sh.rotation.x = -Math.PI / 2;
      sh.position.y = -1.95;
      scene.add(sh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let exploded = false;
      let switchT = 0;
      let userUntil = 0;
      let nextAuto = performance.now() + 1500;
      const toggle = (now) => {
        exploded = !exploded;
        switchT = now;
        pieces.forEach((p) => (p.armed = false));
      };
      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      let sx = 0;
      let sy = 0;
      let down = false;
      let dragPx = 0;
      const onDown = (e) => {
        down = true;
        sx = e.clientX;
        sy = e.clientY;
        dragPx = 0;
      };
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = performance.now() + 2500;
        if (down) dragPx = Math.max(dragPx, Math.hypot(e.clientX - sx, e.clientY - sy));
      };
      const onUp = () => (down = false);
      const onClick = () => {
        if (dragPx > 5) return;
        const now = performance.now();
        toggle(now);
        userUntil = now + 2500;
        nextAuto = now + 2600;
      };
      root.addEventListener('pointerdown', onDown);
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerup', onUp);
      root.addEventListener('click', onClick);

      const t0 = performance.now();
      let last = t0;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.033, (t - last) / 1000);
        last = t;
        const s = Math.max(0, t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.5) * 0.3;
          ty = Math.cos(s * 0.4) * 0.15;
          if (t > nextAuto) {
            toggle(t);
            nextAuto = t + (exploded ? 2400 : 2000);
          }
        }
        px += (tx - px) * 0.05;
        py += (ty - py) * 0.05;
        group.rotation.y = s * 0.28 + px * 1.6;
        group.rotation.x = 0.42 + py * 1.0;
        const K = 70;
        const C = 8.4;
        pieces.forEach((p) => {
          const delay = exploded ? p.n * 0.035 : (3 - p.n) * 0.045;
          if (!p.armed && t - switchT >= delay * 1000) {
            p.goal = exploded ? 1 : 0;
            p.armed = true;
            if (exploded) p.v += 1.8; // a kick so it pops rather than creeps
          }
          p.v += (K * (p.goal - p.e) - C * p.v) * dt;
          p.e += p.v * dt;
          p.mesh.position.copy(p.home).addScaledVector(p.off, p.e);
          p.mesh.rotation.set(p.spin.x * p.e, p.spin.y * p.e, p.spin.z * p.e);
        });
        shMat.opacity = 0.9 - pieces[0].e * 0.25;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointerdown', onDown);
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerup', onUp);
        root.removeEventListener('click', onClick);
        own.forEach((o) => o.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a click-to-explode 3D object with Three.js. Load three from a pinned CDN with an import map. Assemble a 3x3x3 cube from 26 RoundedBoxGeometry pieces (skip the hidden center) that share one geometry and three MeshPhysicalMaterials: accent blue corners, pale blue edges, white faces. Light with RoomEnvironment through PMREMGenerator. Give each piece a home position, an outward offset (home times about 1.5, more for corners) and a spin vector. Drive every piece with its own damped spring on a single scalar e from 0 to 1: v += (K * (goal - e) - C * v) * dt; e += v * dt with K about 70 and C about 8.4 (slightly underdamped, so reassembly overshoots a little and settles). Position = home + offset * e, rotation = spin * e. On click flip an exploded flag and stagger when each piece's goal flips: nearer-to-center pieces first when exploding, corners first when reassembling, and add a small velocity kick on explode so it pops. Ignore the click if the pointer travelled more than 5px. Ease the whole group's rotation toward the pointer with a lerp of 0.05 and add a slow spin. When the visitor has not interacted for 2.5 seconds, toggle the explosion automatically every two seconds or so. Pause offscreen, dispose everything on unmount, and under prefers-reduced-motion shorten travel distance and skip the spin.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-pointer-spotlight',
    cat: 'three-interactive',
    title: 'Pointer spotlight',
    sub: 'A light follows you across a bumpy surface',
    libs: ['three'],
    html: HTML + '<div class="gh"></div><div class="hint" style="background:rgba(11,32,80,.6);border-color:rgba(255,255,255,.25);color:#dce8ff">Move to light it</div>',
    css: CSS + '.d .bg{background:#0b2a6e}',
    run: (root, lib) => {
      const { THREE, SimplexNoise } = lib;
      const host = root.querySelector('.gl');
      const gh = root.querySelector('.gh');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 60);
      camera.position.set(0, 4.3, 4.6);
      camera.lookAt(0, 0, 0.1);

      // displaced plane: three octaves of simplex noise, then lay it flat (up = old +z)
      let seed = 11;
      const noise = new SimplexNoise({ random: () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646 });
      const geo = track(new THREE.PlaneGeometry(11, 8, 150, 108));
      const pos = geo.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const x = pos.getX(i);
        const y = pos.getY(i);
        pos.setZ(i, noise.noise(x * 0.5, y * 0.5) * 0.38 + noise.noise(x * 1.4 + 9, y * 1.4) * 0.14 + noise.noise(x * 3.3, y * 3.3 + 5) * 0.045);
      }
      geo.rotateX(-Math.PI / 2);
      geo.computeVertexNormals();
      const mat = track(new THREE.MeshStandardMaterial({ color: 0xe8f0ff, roughness: 0.46, metalness: 0 }));
      scene.add(new THREE.Mesh(geo, mat));

      scene.add(new THREE.HemisphereLight(0x6b9bff, 0x0a2260, 0.7));
      // PointLight(color, intensity in candela, distance 0 = no cutoff, decay 2 = inverse square)
      const light = new THREE.PointLight(0xffffff, 3.4, 0, 2);
      light.position.set(0, 0.85, 0);
      scene.add(light);

      let W = 1;
      let H = 1;
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      const ndc = new THREE.Vector2(0, 0);
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const ray = new THREE.Raycaster();
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const hit = new THREE.Vector3();
      const sp = new THREE.Vector3();
      const t0 = performance.now();
      let last = t0;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.05, (t - last) / 1000);
        last = t;
        const s = Math.max(0, t - t0) / 1000;
        const idle = t > userUntil;
        if (idle) {
          sp.set(Math.sin(s * 0.7) * 2.8, 0, Math.sin(s * 1.1 + 0.6) * 1.1);
          sp.project(camera);
          ndc.set(sp.x, sp.y);
        }
        ray.setFromCamera(ndc, camera);
        if (ray.ray.intersectPlane(plane, hit)) {
          const k = 1 - Math.exp(-dt * 14);
          light.position.x += (hit.x - light.position.x) * k;
          light.position.z += (hit.z - light.position.z) * k;
        }
        light.position.y = 0.85 + Math.sin(s * 1.4) * 0.05;
        gh.style.transform = 'translate(' + (((ndc.x + 1) / 2) * W) + 'px,' + (((1 - ndc.y) / 2) * H) + 'px)';
        gh.classList.toggle('on', idle);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        own.forEach((o) => o.dispose());
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a pointer-following spotlight over a bumpy 3D surface with Three.js. Load three from a pinned CDN with an import map. Make a PlaneGeometry (about 11 by 8 units, 150 by 108 segments), displace each vertex z with three octaves of SimplexNoise (amplitudes about 0.38, 0.14, 0.045 at rising frequency), rotateX(-Math.PI / 2) to lay it flat, then computeVertexNormals() so the bumps shade correctly. Use MeshStandardMaterial in a pale blue-white (roughness 0.46) and keep ambient light low: a HemisphereLight in deep blues at intensity 0.7. The star is a PointLight low over the surface: new THREE.PointLight(0xffffff, 3.4, 0, 2). In current Three.js intensity is in candela and decay 2 is physically correct inverse-square falloff, so a light 0.85 units above the surface gives a tight pool; tune intensity rather than distance. Each frame convert the pointer to NDC, raycaster.setFromCamera, intersect with the plane y = 0 (ray.intersectPlane) and ease the light x and z toward the hit with 1 - exp(-dt * 14). Bob the light height slightly. The low raking light makes the noise relief read strongly. After 2.5 seconds without pointer movement, move the light along a slow Lissajous path (show a ring at its screen position). Size with a ResizeObserver, pause offscreen, dispose geometry, material and renderer on unmount.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-magnetic-buttons',
    cat: 'three-interactive',
    title: 'Magnetic 3D buttons',
    sub: 'Pills tilt, pull toward you, press in',
    libs: ['three'],
    html: HTML + '<div class="gh"></div>',
    css: CSS + '.d{cursor:pointer}',
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const gh = root.querySelector('.gh');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 50);
      camera.position.set(0, 0, 9.8);

      // a true pill: extruded rounded shape with a soft bevel
      const BW = 3.2;
      const BH = 0.82;
      const BEV = 0.07;
      const DEP = 0.3;
      const iw = BW - BEV * 2;
      const ih = BH - BEV * 2;
      const rad = ih / 2;
      const shape = new THREE.Shape();
      shape.moveTo(-iw / 2 + rad, -ih / 2);
      shape.lineTo(iw / 2 - rad, -ih / 2);
      shape.absarc(iw / 2 - rad, 0, rad, -Math.PI / 2, Math.PI / 2, false);
      shape.lineTo(-iw / 2 + rad, ih / 2);
      shape.absarc(-iw / 2 + rad, 0, rad, Math.PI / 2, Math.PI * 1.5, false);
      const pillGeo = track(new THREE.ExtrudeGeometry(shape, { depth: DEP, bevelEnabled: true, bevelThickness: BEV, bevelSize: BEV, bevelSegments: 6, curveSegments: 28 }));
      pillGeo.translate(0, 0, -DEP / 2);
      const frontZ = DEP / 2 + BEV + 0.003;

      // soft shadow card behind each pill
      const sc = document.createElement('canvas');
      sc.width = sc.height = 128;
      const sg = sc.getContext('2d');
      const grad = sg.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.38)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      sg.fillStyle = grad;
      sg.fillRect(0, 0, 128, 128);
      const shTex = track(new THREE.CanvasTexture(sc));
      const shGeo = track(new THREE.PlaneGeometry(4.2, 1.5));
      const planeGeo = track(new THREE.PlaneGeometry(BW - 0.5, 0.5));

      const defs = [
        { label: 'Get started', y: 1.38, color: 0x1f62f5, ink: '#ffffff', rough: 0.2 },
        { label: 'Book a demo', y: 0, color: 0xf7faff, ink: '#0b1b3a', rough: 0.24 },
        { label: 'See pricing', y: -1.38, color: 0xcfe0fb, ink: '#0b2a6e', rough: 0.24 },
      ];
      const btns = defs.map((d) => {
        const g = new THREE.Group();
        g.position.set(0, d.y, 0);
        const mat = track(new THREE.MeshPhysicalMaterial({ color: d.color, roughness: d.rough, clearcoat: 1, clearcoatRoughness: 0.08 }));
        g.add(new THREE.Mesh(pillGeo, mat));
        const cv = document.createElement('canvas');
        cv.width = 640;
        cv.height = 100;
        const tex = track(new THREE.CanvasTexture(cv));
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 4;
        const draw = () => {
          const x = cv.getContext('2d');
          x.clearRect(0, 0, 640, 100);
          x.fillStyle = d.ink;
          x.font = '600 56px Geist, system-ui, sans-serif';
          x.textAlign = 'center';
          x.textBaseline = 'middle';
          x.fillText(d.label, 320, 54);
        };
        draw();
        const lm = track(new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }));
        const label = new THREE.Mesh(planeGeo, lm);
        label.position.z = frontZ;
        g.add(label);
        const smat = track(new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false }));
        const shadow = new THREE.Mesh(shGeo, smat);
        shadow.position.set(0, -0.12, -0.5);
        g.add(shadow);
        scene.add(g);
        const S = () => ({ x: 0, v: 0 });
        return { g, d, draw, tex, shadow, smat, sx: S(), sy: S(), sz: S(), rx: S(), ry: S(), sc: { x: 1, v: 0 } };
      });
      let dead = false;
      if (document.fonts && document.fonts.ready)
        document.fonts.ready.then(() => {
          if (dead) return;
          btns.forEach((b) => {
            b.draw();
            b.tex.needsUpdate = true;
          });
        });

      let W = 1;
      let H = 1;
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      const ndc = new THREE.Vector2(9, 9);
      let userUntil = 0;
      let realDown = false;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
        userUntil = performance.now() + 2500;
      };
      const onDown = () => {
        realDown = true;
        userUntil = performance.now() + 2500;
      };
      const onUp = () => (realDown = false);
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerdown', onDown);
      root.addEventListener('pointerup', onUp);
      root.addEventListener('pointercancel', onUp);

      const stepS = (s, target, k, c, dt) => {
        s.v += (k * (target - s.x) - c * s.v) * dt;
        s.x += s.v * dt;
      };
      const ease = (u) => u * u * (3 - 2 * u);
      const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
      const ray = new THREE.Raycaster();
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const gp = new THREE.Vector3();
      const t0 = performance.now();
      let last = t0;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.033, (t - last) / 1000);
        last = t;
        const s = Math.max(0, t - t0) / 1000;
        const idle = t > userUntil;
        let down = realDown;
        let px;
        let py;
        if (idle) {
          // ghost cursor visits each pill and presses it once
          const L = 2.5;
          const i = Math.floor(s / L) % 3;
          const pi = (i + 2) % 3;
          const u = (s % L) / L;
          const k = ease(Math.min(1, u / 0.38));
          px = (1 - k) * 0.9 + Math.sin(s * 1.7) * 0.4 * k;
          py = defs[pi].y + (defs[i].y - defs[pi].y) * k + Math.cos(s * 2.1) * 0.06;
          down = u > 0.58 && u < 0.76;
          gp.set(px, py, 0).project(camera);
          ndc.set(gp.x, gp.y);
        } else {
          ray.setFromCamera(ndc, camera);
          if (ray.ray.intersectPlane(plane, hit)) {
            px = hit.x;
            py = hit.y;
          } else {
            px = 99;
            py = 99;
          }
        }
        // the pill the pointer is actually over gets the press
        let over = -1;
        btns.forEach((b, i) => {
          if (Math.abs(px) < BW / 2 && Math.abs(py - b.d.y) < BH / 2) over = i;
        });
        btns.forEach((b, i) => {
          const dx = px - 0;
          const dy = py - b.d.y;
          const e = Math.hypot(dx / 2.5, dy / 1.0);
          const f = ease(clamp(1.7 - e, 0, 1));
          const pressed = down && over === i;
          const press = pressed ? 1 : 0;
          stepS(b.sx, dx * 0.17 * f, 170, 20, dt);
          stepS(b.sy, dy * 0.22 * f, 170, 20, dt);
          stepS(b.sz, 0.16 * f - press * 0.36, press ? 420 : 150, press ? 30 : 15, dt);
          stepS(b.ry, clamp(dx / 1.7, -1, 1) * 0.34 * f * (1 - press * 0.6), 150, 17, dt);
          stepS(b.rx, -clamp(dy / 0.8, -1, 1) * 0.3 * f * (1 - press * 0.6), 150, 17, dt);
          stepS(b.sc, 1 + f * 0.04 - press * 0.05, 200, 20, dt);
          b.g.position.x = b.sx.x;
          b.g.position.y = b.d.y + b.sy.x;
          b.g.position.z = b.sz.x;
          b.g.rotation.set(b.rx.x, b.ry.x, 0);
          b.g.scale.setScalar(b.sc.x);
          b.shadow.scale.setScalar(1 - b.sz.x * 0.35);
          b.smat.opacity = clamp(0.95 - b.sz.x * 0.9, 0.2, 1);
        });
        gh.style.transform = 'translate(' + (((ndc.x + 1) / 2) * W) + 'px,' + (((1 - ndc.y) / 2) * H) + 'px)';
        gh.classList.toggle('on', idle);
        gh.classList.toggle('dn', idle && down);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerdown', onDown);
        root.removeEventListener('pointerup', onUp);
        root.removeEventListener('pointercancel', onUp);
        own.forEach((o) => o.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build magnetic 3D call-to-action buttons with Three.js. Load three from a pinned CDN with an import map. Model each button as a true pill: a THREE.Shape (two absarc caps joined by lines) passed to ExtrudeGeometry with depth 0.3 and a small bevel (bevelThickness and bevelSize about 0.07, bevelSegments 6), translated to center, in MeshPhysicalMaterial (clearcoat 1, roughness 0.2) with one blue, one white and one pale-blue variant. Draw the label into a CanvasTexture plane just in front of the front face (wait for document.fonts.ready before drawing). Light with RoomEnvironment via PMREMGenerator and a narrow-fov perspective camera. Each frame intersect the pointer ray with the z = 0 plane to get a world point. For each button compute an elliptical distance to the point and a smoothstep influence f. Drive five damped springs per button (v += (k * (target - x) - c * v) * dt): x and y pulled toward the pointer by about 0.17 and 0.22 of the offset times f, z lifted by 0.34 f, rotation.y from horizontal offset and rotation.x from vertical offset so the face leans toward the pointer. On pointerdown over a pill push z back by 0.36 and scale to 0.95 with a stiffer spring so release bounces. Add a soft gradient shadow plane behind each that fades as the button lifts. With no pointer for 2.5 seconds run a ghost cursor that visits each button and presses it. Keep each button a real link or button in your DOM for keyboard and screen readers and use the canvas only as decoration. Pause offscreen, dispose on unmount, and under prefers-reduced-motion drop the springs to a simple scale.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-tilt-card',
    cat: 'three-interactive',
    title: '3D tilt card',
    sub: 'Layers parallax, a sheen slides across',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry } = lib;
      const host = root.querySelector('.gl');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      camera.position.set(0, 0, 6.6);

      const CW = 3.1;
      const CH = 2.0;
      const PX = 200; // canvas pixels per world unit
      const rr = (g, x, y, w, h, r) => {
        g.beginPath();
        g.moveTo(x + r, y);
        g.arcTo(x + w, y, x + w, y + h, r);
        g.arcTo(x + w, y + h, x, y + h, r);
        g.arcTo(x, y + h, x, y, r);
        g.arcTo(x, y, x + w, y, r);
        g.closePath();
      };
      const poly = (g, pts) => {
        g.beginPath();
        g.moveTo(pts[0][0], pts[0][1]);
        for (let i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
        g.closePath();
      };
      const W = CW * PX;
      const H = CH * PX;
      const layerDefs = [
        {
          z: 0.07,
          depth: 0,
          draw: (g) => {
            const bg = g.createLinearGradient(0, 0, 0, H);
            bg.addColorStop(0, '#8fc0ff');
            bg.addColorStop(1, '#eaf3ff');
            g.fillStyle = bg;
            g.fillRect(0, 0, W, H);
            const sun = g.createRadialGradient(470, 120, 0, 470, 120, 150);
            sun.addColorStop(0, 'rgba(255,255,255,.95)');
            sun.addColorStop(0.3, 'rgba(255,255,255,.55)');
            sun.addColorStop(1, 'rgba(255,255,255,0)');
            g.fillStyle = sun;
            g.fillRect(0, 0, W, H);
            g.fillStyle = '#fff';
            g.beginPath();
            g.arc(470, 120, 44, 0, Math.PI * 2);
            g.fill();
          },
        },
        {
          z: 0.16,
          depth: 0.5,
          draw: (g) => {
            g.shadowColor = 'rgba(10,60,160,.25)';
            g.shadowBlur = 16;
            g.shadowOffsetY = -4;
            g.fillStyle = '#b5d3ff';
            poly(g, [[-20, 290], [100, 190], [190, 250], [320, 150], [450, 265], [540, 205], [W + 20, 262], [W + 20, H + 20], [-20, H + 20]]);
            g.fill();
          },
        },
        {
          z: 0.27,
          depth: 1.0,
          draw: (g) => {
            g.shadowColor = 'rgba(10,50,150,.3)';
            g.shadowBlur = 18;
            g.shadowOffsetY = -5;
            g.fillStyle = '#5b97ff';
            poly(g, [[-20, 330], [80, 262], [170, 320], [280, 232], [390, 322], [500, 270], [W + 20, 330], [W + 20, H + 20], [-20, H + 20]]);
            g.fill();
          },
        },
        {
          z: 0.4,
          depth: 1.7,
          draw: (g) => {
            g.shadowColor = 'rgba(5,30,110,.4)';
            g.shadowBlur = 20;
            g.shadowOffsetY = -6;
            g.fillStyle = '#1f62f5';
            g.beginPath();
            g.moveTo(-20, 368);
            g.quadraticCurveTo(150, 318, 330, 356);
            g.quadraticCurveTo(500, 392, W + 20, 340);
            g.lineTo(W + 20, H + 20);
            g.lineTo(-20, H + 20);
            g.closePath();
            g.fill();
            g.shadowBlur = 0;
            g.shadowOffsetY = 0;
            g.fillStyle = '#0b3fb4';
            [[70, 372, 1], [104, 380, 0.8], [492, 372, 0.9], [532, 364, 1.1]].forEach(([x, y, s]) => {
              poly(g, [[x, y - 64 * s], [x + 20 * s, y], [x - 20 * s, y]]);
              g.fill();
            });
          },
        },
        {
          z: 0.58,
          depth: 2.6,
          draw: (g) => {
            g.shadowColor = 'rgba(5,30,120,.35)';
            g.shadowBlur = 18;
            g.shadowOffsetY = 5;
            g.fillStyle = 'rgba(255,255,255,.96)';
            rr(g, 40, 38, 86, 30, 15);
            g.fill();
            g.fillStyle = '#1f62f5';
            g.shadowColor = 'transparent';
            g.font = '700 15px Geist, system-ui, sans-serif';
            g.textAlign = 'center';
            g.textBaseline = 'middle';
            g.fillText('NEW', 83, 54);
            g.shadowColor = 'rgba(5,30,120,.35)';
            g.shadowBlur = 18;
            g.shadowOffsetY = 5;
            g.fillStyle = '#fff';
            g.textAlign = 'left';
            g.textBaseline = 'alphabetic';
            g.font = '600 88px Geist, system-ui, sans-serif';
            g.fillText('Alpine', 40, 160);
            g.font = '500 28px Geist, system-ui, sans-serif';
            g.fillText('Weekend trips', 44, 202);
          },
        },
      ];

      const card = new THREE.Group();
      scene.add(card);
      const baseGeo = track(new RoundedBoxGeometry(CW + 0.2, CH + 0.2, 0.1, 5, 0.14));
      const baseMat = track(new THREE.MeshPhysicalMaterial({ color: 0xf6f9ff, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.1 }));
      card.add(new THREE.Mesh(baseGeo, baseMat));
      const planeGeo = track(new THREE.PlaneGeometry(CW, CH));
      const layers = layerDefs.map((L) => {
        const cv = document.createElement('canvas');
        cv.width = W;
        cv.height = H;
        const tex = track(new THREE.CanvasTexture(cv));
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 4;
        const paint = () => {
          const g = cv.getContext('2d');
          g.clearRect(0, 0, W, H);
          g.save();
          rr(g, 0, 0, W, H, 26);
          g.clip();
          L.draw(g);
          g.restore();
          tex.needsUpdate = true;
        };
        paint();
        const mat = track(new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false }));
        const m = new THREE.Mesh(planeGeo, mat);
        m.position.z = L.z + 0.05;
        card.add(m);
        return { m, paint, depth: L.depth };
      });
      let dead = false;
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => !dead && layers.forEach((l) => l.paint()));

      // glossy sheen: a diagonal band on a wide strip; its texture offset follows the pointer
      const shc = document.createElement('canvas');
      shc.width = 1024;
      shc.height = 256;
      const sg = shc.getContext('2d');
      const band = sg.createLinearGradient(380, 0, 644, 0);
      band.addColorStop(0, 'rgba(255,255,255,0)');
      band.addColorStop(0.5, 'rgba(255,255,255,.55)');
      band.addColorStop(1, 'rgba(255,255,255,0)');
      sg.fillStyle = band;
      sg.transform(1, 0, -0.5, 1, 64, 0);
      sg.fillRect(380, 0, 264, 256);
      const sheenTex = track(new THREE.CanvasTexture(shc));
      sheenTex.repeat.set(0.5, 1);
      const sheenMat = track(new THREE.MeshBasicMaterial({ map: sheenTex, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, toneMapped: false }));
      const sheen = new THREE.Mesh(planeGeo, sheenMat);
      sheen.position.z = 0.72;
      card.add(sheen);

      const sc = document.createElement('canvas');
      sc.width = sc.height = 128;
      const scg = sc.getContext('2d');
      const grad = scg.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.3)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      scg.fillStyle = grad;
      scg.fillRect(0, 0, 128, 128);
      const shTex = track(new THREE.CanvasTexture(sc));
      const shGeo = track(new THREE.PlaneGeometry(3.8, 0.9));
      const shMat = track(new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false }));
      const sh = new THREE.Mesh(shGeo, shMat);
      sh.rotation.x = -Math.PI / 2;
      sh.position.y = -1.6;
      scene.add(sh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

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
      const onLeave = () => (userUntil = performance.now() + 600);
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerleave', onLeave);

      const t0 = performance.now();
      let last = t0;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.05, (t - last) / 1000);
        last = t;
        const s = Math.max(0, t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.85) * 0.34;
          ty = Math.cos(s * 0.65) * 0.26;
        }
        const k = 1 - Math.exp(-dt * 7);
        px += (tx - px) * k;
        py += (ty - py) * k;
        card.rotation.y = px * 0.95;
        card.rotation.x = py * 0.75;
        layers.forEach((l) => {
          l.m.position.x = px * (l.depth - 1.3) * 0.17;
          l.m.position.y = -py * (l.depth - 1.3) * 0.14;
        });
        sheenTex.offset.x = 0.25 + px * 0.5;
        sheenMat.opacity = 0.3;
        sh.position.x = -px * 0.5;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerleave', onLeave);
        own.forEach((o) => o.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a 3D tilt card with parallax depth layers using Three.js. Load three from a pinned CDN with an import map. Make a thin RoundedBoxGeometry card (MeshPhysicalMaterial, clearcoat 1) and stack five transparent planes in front of it at increasing z (0.07, 0.16, 0.27, 0.4, 0.58): sky with a sun, far mountains, near mountains, foreground hills with pines, and a text layer (badge, headline, subtitle). Draw each layer into its own 2D canvas (clip every canvas to the card's rounded rectangle, give shapes a soft canvas shadowBlur so the layers read as stacked paper) and use it as a CanvasTexture on a MeshBasicMaterial with transparent true and toneMapped false. Normalize the pointer to -0.5..0.5 and ease it with a 1 - exp(-dt * 7) factor. Rotate the card group: rotation.y = x * 0.95, rotation.x = y * 0.75. On top of the real perspective parallax, shift each layer's position opposite to the foreground by (x, y) times its depth factor so the scene feels deeper. Add a glossy sheen: a wide canvas with a skewed white band, repeat.x = 0.5 and an additive-blended plane over the card, with texture.offset.x = 0.25 + x * 0.5 so the highlight slides as you tilt. Under the card put a gradient contact shadow that drifts opposite to the tilt. After 2.5 seconds without pointer input, tilt on a slow Lissajous path. Pause offscreen, size with ResizeObserver, dispose on unmount, and reduce the tilt angles under prefers-reduced-motion.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-pushed-balls',
    cat: 'three-interactive',
    title: 'Pushed balls',
    sub: 'The pointer shoves spheres, they spring home',
    libs: ['three'],
    html: HTML + '<div class="gh"></div>',
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const gh = root.querySelector('.gh');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      camera.position.set(0, 1.1, 9.4);
      camera.lookAt(0, 0, 0);

      const COLS = 11;
      const ROWS = 7;
      const N = COLS * ROWS;
      const geo = track(new THREE.SphereGeometry(0.26, 22, 15));
      const mat = track(new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08 }));
      const mesh = new THREE.InstancedMesh(geo, mat, N);
      scene.add(mesh);

      const hx = new Float32Array(N);
      const hy = new Float32Array(N);
      const x = new Float32Array(N);
      const y = new Float32Array(N);
      const z = new Float32Array(N);
      const vx = new Float32Array(N);
      const vy = new Float32Array(N);
      const vz = new Float32Array(N);
      const base = [];
      const white = new THREE.Color(0xf4f8ff);
      const ice = new THREE.Color(0xd5e4fb);
      const blue = new THREE.Color(0x2f6bff);
      for (let r = 0; r < ROWS; r++)
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;
          hx[i] = x[i] = (c - (COLS - 1) / 2 + (r % 2 ? 0.5 : 0) - (r % 2 ? 0.25 : 0)) * 0.58;
          hy[i] = y[i] = (r - (ROWS - 1) / 2) * 0.5;
          base.push(i % 7 === 3 ? blue : i % 2 ? ice : white);
        }

      const m4 = new THREE.Matrix4();
      const col = new THREE.Color();
      const hot = new THREE.Color(0x0a6cff);
      const put = () => {
        for (let i = 0; i < N; i++) {
          const m = Math.min(1, (Math.abs(x[i] - hx[i]) + Math.abs(y[i] - hy[i]) + Math.abs(z[i])) / 1.1);
          const sc = 1 + m * 0.18;
          m4.makeScale(sc, sc, sc);
          m4.setPosition(x[i], y[i], z[i]);
          mesh.setMatrixAt(i, m4);
          col.copy(base[i]).lerp(hot, m * 0.85);
          mesh.setColorAt(i, col);
        }
        mesh.instanceMatrix.needsUpdate = true;
        mesh.instanceColor.needsUpdate = true;
      };
      put();

      let W = 1;
      let H = 1;
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      const ndc = new THREE.Vector2(9, 9);
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const ray = new THREE.Raycaster();
      const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
      const hit = new THREE.Vector3();
      const gp = new THREE.Vector3();
      const t0 = performance.now();
      let last = t0;
      let raf = 0;
      const RAD = 1.25;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.033, (t - last) / 1000);
        last = t;
        const s = Math.max(0, t - t0) / 1000;
        const idle = t > userUntil;
        if (idle) {
          gp.set(Math.sin(s * 0.8) * 2.5, Math.sin(s * 1.25 + 0.5) * 0.95, 0).project(camera);
          ndc.set(gp.x, gp.y);
        }
        ray.setFromCamera(ndc, camera);
        const ok = ray.ray.intersectPlane(plane, hit) !== null;
        const px = ok ? hit.x : 99;
        const py = ok ? hit.y : 99;
        for (let i = 0; i < N; i++) {
          let ax = -26 * (x[i] - hx[i]) - 4.4 * vx[i];
          let ay = -26 * (y[i] - hy[i]) - 4.4 * vy[i];
          let az = -26 * z[i] - 4.4 * vz[i];
          const dx = x[i] - px;
          const dy = y[i] - py;
          const d = Math.hypot(dx, dy);
          if (d < RAD) {
            const f = 1 - d / RAD;
            const push = f * f * 150;
            const nx = d > 0.001 ? dx / d : 1;
            const ny = d > 0.001 ? dy / d : 0;
            ax += nx * push;
            ay += ny * push;
            az -= f * 70;
          }
          vx[i] += ax * dt;
          vy[i] += ay * dt;
          vz[i] += az * dt;
          x[i] += vx[i] * dt;
          y[i] += vy[i] * dt;
          z[i] += vz[i] * dt;
        }
        put();
        gh.style.transform = 'translate(' + (((ndc.x + 1) / 2) * W) + 'px,' + (((1 - ndc.y) / 2) * H) + 'px)';
        gh.classList.toggle('on', idle);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        own.forEach((o) => o.dispose());
        mesh.dispose();
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a field of spheres that the pointer pushes away and that spring back, with Three.js. Load three from a pinned CDN with an import map. Render about 70 glossy spheres (SphereGeometry, MeshPhysicalMaterial with clearcoat 1) as one InstancedMesh laid out on a staggered grid, with per-instance colors (white, pale blue, a few accent blue) and RoomEnvironment lighting through PMREMGenerator. Keep position and velocity in typed arrays and run simple physics each frame with dt clamped to 1/30: acceleration = -k * (position - home) - c * velocity with k about 26 and c about 4.4 (slightly underdamped so they wobble back), plus a push from the pointer. Convert the pointer to a world point by raycasting onto the z = 0 plane. For every sphere within a radius of about 1.25, add force along the vector from the pointer to the sphere of (1 - d / radius) squared times 150, and a small push back in z. Write each instance matrix and lerp its color toward your accent by how far it is displaced, then flag instanceMatrix and instanceColor as needing update. When no pointer movement has happened for 2.5 seconds, move a ghost pointer on a slow Lissajous path across the field. Pause offscreen, size with ResizeObserver, dispose geometry, material and the renderer on unmount, and freeze the ghost under prefers-reduced-motion.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-color-swatches',
    cat: 'three-interactive',
    title: 'Colour configurator',
    sub: 'Pick a swatch, the finish eases across',
    libs: ['three'],
    html:
      HTML +
      '<div class="copy"><p class="k">Pebble speaker</p><h3 class="nm">Cobalt</h3></div>' +
      '<div class="sw" role="group" aria-label="Finish">' +
      '<button type="button" class="chip" data-hex="#2f6bff" style="background:#2f6bff" aria-label="Cobalt" aria-pressed="true"></button>' +
      '<button type="button" class="chip" data-hex="#6fb0ff" style="background:#6fb0ff" aria-label="Sky" aria-pressed="false"></button>' +
      '<button type="button" class="chip" data-hex="#e9f0fa" style="background:#e9f0fa" aria-label="Ice" aria-pressed="false"></button>' +
      '<button type="button" class="chip" data-hex="#15387f" style="background:#15387f" aria-label="Navy" aria-pressed="false"></button>' +
      '</div>',
    css:
      CSS +
      `
.d .copy{top:8%;bottom:auto}
.d .sw{position:absolute;left:50%;bottom:7%;transform:translateX(-50%);display:flex;gap:12px;padding:7px 10px;border-radius:999px;background:rgba(255,255,255,.82);box-shadow:var(--ml-shadow)}
.d .chip{width:20px;height:20px;border-radius:50%;border:1px solid rgba(10,40,100,.18);padding:0;cursor:pointer;transition:transform var(--ml-spring-dur) var(--ml-spring),box-shadow .2s}
.d .chip:hover{transform:scale(1.14)}
.d .chip:active{transform:scale(.92)}
.d .chip[aria-pressed="true"]{box-shadow:0 0 0 2px #fff,0 0 0 3.5px var(--ml-accent)}
.d .chip:focus-visible{outline:2px solid var(--ml-accent);outline-offset:3px}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const chips = [...root.querySelectorAll('.chip')];
      const nm = root.querySelector('.nm');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      camera.position.set(0, 0.5, 8.8);
      camera.lookAt(0, 0.05, 0);

      // speaker body: a lathe of a rounded-rectangle profile
      const RA = 0.92;
      const HH = 1.1;
      const RC = 0.34;
      const prof = [new THREE.Vector2(0, -HH), new THREE.Vector2(RA - RC, -HH)];
      for (let i = 1; i <= 10; i++) {
        const a = -Math.PI / 2 + (i / 10) * (Math.PI / 2);
        prof.push(new THREE.Vector2(RA - RC + Math.cos(a) * RC, -HH + RC + Math.sin(a) * RC));
      }
      for (let i = 0; i <= 10; i++) {
        const a = (i / 10) * (Math.PI / 2);
        prof.push(new THREE.Vector2(RA - RC + Math.cos(a) * RC, HH - RC + Math.sin(a) * RC));
      }
      prof.push(new THREE.Vector2(0, HH));
      const bodyGeo = track(new THREE.LatheGeometry(prof, 96));
      const bodyMat = track(new THREE.MeshPhysicalMaterial({ color: 0x2f6bff, roughness: 0.38, sheen: 0.12, sheenRoughness: 0.6, sheenColor: 0xffffff, clearcoat: 0.1, clearcoatRoughness: 0.5 }));
      const product = new THREE.Group();
      product.position.y = 0.12;
      scene.add(product);
      const spin = new THREE.Group();
      product.add(spin);
      spin.add(new THREE.Mesh(bodyGeo, bodyMat));
      const bandGeo = track(new THREE.TorusGeometry(RA + 0.002, 0.02, 12, 96));
      const bandMat = track(new THREE.MeshStandardMaterial({ color: 0xdfe6f2, metalness: 1, roughness: 0.22 }));
      const band = new THREE.Mesh(bandGeo, bandMat);
      band.rotation.x = Math.PI / 2;
      band.position.y = -0.62;
      spin.add(band);
      const ringGeo = track(new THREE.TorusGeometry(0.4, 0.028, 12, 72));
      const ringMat = track(new THREE.MeshBasicMaterial({ color: 0xeaf4ff, toneMapped: false }));
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = HH + 0.004;
      spin.add(ring);
      const knobGeo = track(new THREE.CylinderGeometry(0.12, 0.12, 0.03, 32));
      const knob = new THREE.Mesh(knobGeo, bandMat);
      knob.position.y = HH + 0.012;
      spin.add(knob);

      const c = document.createElement('canvas');
      c.width = c.height = 128;
      const cg = c.getContext('2d');
      const grad = cg.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.3)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      cg.fillStyle = grad;
      cg.fillRect(0, 0, 128, 128);
      const shTex = track(new THREE.CanvasTexture(c));
      const shGeo = track(new THREE.PlaneGeometry(3.4, 1));
      const shMat = track(new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false }));
      const sh = new THREE.Mesh(shGeo, shMat);
      sh.rotation.x = -Math.PI / 2;
      sh.position.y = -1.1;
      product.add(sh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      const target = new THREE.Color(0x2f6bff);
      const pop = { x: 0, v: 0 };
      let sel = 0;
      let userUntil = 0;
      const pick = (i) => {
        sel = i;
        target.set(chips[i].dataset.hex);
        chips.forEach((ch, j) => ch.setAttribute('aria-pressed', j === i ? 'true' : 'false'));
        nm.textContent = chips[i].getAttribute('aria-label');
        pop.v += 3;
      };
      // chips are real buttons that work even inside the grid card, so they must not open the preview modal
      const handlers = chips.map((ch, i) => {
        const click = (e) => {
          e.stopPropagation();
          userUntil = performance.now() + 2500;
          pick(i);
        };
        const stop = (e) => e.stopPropagation();
        ch.addEventListener('click', click);
        ch.addEventListener('keydown', stop);
        ch.addEventListener('pointerdown', stop);
        return [ch, click, stop];
      });

      let tx = 0;
      let ty = 0;
      let px = 0;
      let py = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = (e.clientX - r.left) / r.width - 0.5;
        ty = (e.clientY - r.top) / r.height - 0.5;
        userUntil = Math.max(userUntil, performance.now() + 1200);
      };
      root.addEventListener('pointermove', onMove);

      const t0 = performance.now();
      let last = t0;
      let nextAuto = t0 + 1800;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.033, (t - last) / 1000);
        last = t;
        const s = Math.max(0, t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.5) * 0.25;
          ty = Math.cos(s * 0.4) * 0.12;
          if (t > nextAuto) {
            pick((sel + 1) % chips.length);
            nextAuto = t + 2300;
          }
        } else nextAuto = t + 2300;
        bodyMat.color.lerp(target, 1 - Math.exp(-dt * 6));
        pop.v += (-170 * pop.x - 13 * pop.v) * dt;
        pop.x += pop.v * dt;
        product.scale.setScalar(1 + pop.x * 0.04);
        px += (tx - px) * 0.05;
        py += (ty - py) * 0.05;
        spin.rotation.y = s * 0.4 + px * 1.5;
        product.rotation.x = 0.16 + py * 0.5;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        handlers.forEach(([ch, click, stop]) => {
          ch.removeEventListener('click', click);
          ch.removeEventListener('keydown', stop);
          ch.removeEventListener('pointerdown', stop);
        });
        own.forEach((o) => o.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a 3D product colour configurator with Three.js and an HTML swatch row. Load three from a pinned CDN with an import map. Model a smart speaker procedurally: a LatheGeometry whose profile is a rounded rectangle (flat bottom, quarter-circle corners, flat top), 96 radial segments, in MeshPhysicalMaterial (roughness 0.42, sheen 0.7, small clearcoat), plus a thin metal TorusGeometry band, a glowing top ring (MeshBasicMaterial, toneMapped false) and a small knob. Light with RoomEnvironment via PMREMGenerator and add a gradient contact shadow. The swatches are four real <button type="button"> elements in the HTML overlay, each with an aria-label (the finish name), aria-pressed for the current one, a visible focus-visible ring and a hover and active scale. Never paint the swatches in WebGL. On click set a target THREE.Color from the swatch's data attribute, update aria-pressed and the visible finish name, and every frame ease the material color toward the target with color.lerp(target, 1 - exp(-dt * 6)) so the finish glides rather than snaps. Give the product a quick scale pop on change using a damped spring. Slowly spin the product and ease its tilt toward the pointer. When nobody has interacted for 2.5 seconds, cycle through the swatches automatically every couple of seconds. Pause offscreen, dispose all geometry and materials on unmount, and skip the auto cycle under prefers-reduced-motion.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-xray-reveal',
    cat: 'three-interactive',
    title: 'X-ray circle reveal',
    sub: 'A circle at the pointer shows the inside',
    libs: ['three'],
    html: HTML + '<div class="ring"></div><div class="hint">Move to look inside</div>',
    css:
      CSS +
      `
.d .ring{position:absolute;left:0;top:0;border-radius:50%;border:1.5px solid rgba(255,255,255,.95);box-shadow:0 0 0 1px rgba(255,68,51,.55),0 10px 26px rgba(10,60,140,.2);pointer-events:none}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry } = lib;
      const host = root.querySelector('.gl');
      const ringEl = root.querySelector('.ring');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);
      camera.position.set(0, 0.3, 7.8);

      // the circle lives in drawing-buffer pixels; shared uniforms feed every patched material
      const uMouse = { value: new THREE.Vector2(-9999, -9999) };
      const uR = { value: 100 };
      const patch = (m, inside) => {
        m.onBeforeCompile = (sh) => {
          sh.uniforms.uMouse = uMouse;
          sh.uniforms.uR = uR;
          sh.fragmentShader =
            'uniform vec2 uMouse;\nuniform float uR;\n' +
            sh.fragmentShader.replace(
              '#include <clipping_planes_fragment>',
              '#include <clipping_planes_fragment>\n  if (distance(gl_FragCoord.xy, uMouse) ' + (inside ? '> uR' : '< uR') + ') discard;',
            );
        };
        m.customProgramCacheKey = () => (inside ? 'xray-in' : 'xray-out');
        return track(m);
      };

      const obj = new THREE.Group();
      scene.add(obj);
      const shellGeo = track(new RoundedBoxGeometry(2.1, 2.1, 2.1, 6, 0.55));
      const shell = new THREE.Mesh(shellGeo, patch(new THREE.MeshPhysicalMaterial({ color: 0x2f6bff, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 }), false));
      obj.add(shell);
      // interior wall, only visible inside the circle
      const wall = new THREE.Mesh(shellGeo, patch(new THREE.MeshStandardMaterial({ color: 0x123a8f, roughness: 0.6, side: THREE.BackSide }), true));
      obj.add(wall);
      const inner = new THREE.Group();
      obj.add(inner);
      const latGeo = track(new THREE.IcosahedronGeometry(0.82, 1));
      const lat = new THREE.Mesh(latGeo, patch(new THREE.MeshBasicMaterial({ color: 0xcfe3ff, wireframe: true }), true));
      inner.add(lat);
      const coreGeo = track(new THREE.SphereGeometry(0.34, 32, 24));
      const core = new THREE.Mesh(coreGeo, patch(new THREE.MeshBasicMaterial({ color: 0x8fc4ff }), true));
      inner.add(core);
      const orbGeo = track(new THREE.TorusGeometry(0.62, 0.012, 8, 72));
      const orbMat = patch(new THREE.MeshBasicMaterial({ color: 0x8fc4ff }), true);
      const o1 = new THREE.Mesh(orbGeo, orbMat);
      const o2 = new THREE.Mesh(orbGeo, orbMat);
      o2.rotation.x = Math.PI / 2;
      inner.add(o1);
      inner.add(o2);

      const c = document.createElement('canvas');
      c.width = c.height = 128;
      const cg = c.getContext('2d');
      const grad = cg.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.3)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      cg.fillStyle = grad;
      cg.fillRect(0, 0, 128, 128);
      const shTex = track(new THREE.CanvasTexture(c));
      const shGeo = track(new THREE.PlaneGeometry(3.6, 1));
      const shMat = track(new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false }));
      const sh = new THREE.Mesh(shGeo, shMat);
      sh.rotation.x = -Math.PI / 2;
      sh.position.y = -1.75;
      scene.add(sh);

      let W = 1;
      let H = 1;
      let RP = 60;
      const size = () => {
        W = root.clientWidth || 1;
        H = root.clientHeight || 1;
        renderer.setSize(W, H, false);
        camera.aspect = W / H;
        camera.updateProjectionMatrix();
        RP = Math.min(W, H) * 0.23;
        ringEl.style.width = ringEl.style.height = RP * 2 + 'px';
        ringEl.style.margin = -RP + 'px 0 0 ' + -RP + 'px';
        uR.value = RP * renderer.getPixelRatio();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let mx = 0.5;
      let my = 0.5;
      let cx = 0.5;
      let cy = 0.5;
      let userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        mx = (e.clientX - r.left) / r.width;
        my = (e.clientY - r.top) / r.height;
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const t0 = performance.now();
      let last = t0;
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.05, (t - last) / 1000);
        last = t;
        const s = Math.max(0, t - t0) / 1000;
        if (t > userUntil) {
          mx = 0.5 + Math.sin(s * 0.75) * 0.17;
          my = 0.48 + Math.sin(s * 1.15 + 0.8) * 0.16;
        }
        const k = 1 - Math.exp(-dt * 12);
        cx += (mx - cx) * k;
        cy += (my - cy) * k;
        ringEl.style.transform = 'translate(' + cx * W + 'px,' + cy * H + 'px)';
        const pr = renderer.getPixelRatio();
        uMouse.value.set(cx * W * pr, (1 - cy) * H * pr);
        obj.rotation.y = s * 0.3;
        obj.rotation.x = 0.35 + Math.sin(s * 0.5) * 0.08;
        inner.rotation.y = -s * 0.9;
        inner.rotation.x = s * 0.5;
        o1.rotation.z = s * 1.2;
        const pulse = 1 + Math.sin(s * 3) * 0.06;
        core.scale.setScalar(pulse);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        own.forEach((o) => o.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an x-ray circle reveal in Three.js: a glossy object whose inside shows only within a circle around the pointer. Load three from a pinned CDN with an import map. Build a RoundedBoxGeometry shell in blue MeshPhysicalMaterial (clearcoat 1) lit by RoomEnvironment through PMREMGenerator. Inside it put a navy back-face copy of the shell (MeshStandardMaterial with side BackSide, the interior wall), a wireframe IcosahedronGeometry (MeshBasicMaterial wireframe true), a pulsing core sphere and two thin orbit tori, all spinning against the shell. Do the reveal in the fragment shader with onBeforeCompile and two shared uniforms, uMouse (a vec2 in drawing-buffer pixels: pointer css px times renderer.getPixelRatio(), y flipped as height minus y) and uR (radius in the same pixels). For the shell, replace the chunk '#include <clipping_planes_fragment>' with itself plus 'if (distance(gl_FragCoord.xy, uMouse) < uR) discard;' so the shell vanishes inside the circle. For every interior material use the opposite test, '> uR', so interior parts only exist inside it. Give each variant its own material.customProgramCacheKey so Three does not share one program between them. Draw a matching ring as a plain HTML div at the pointer so the edge is crisp. Ease the circle toward the pointer with 1 - exp(-dt * 12). After 2.5 seconds of no pointer movement, move the circle along a slow Lissajous path over the object. Pause offscreen, resize with ResizeObserver and recompute the radius, dispose everything on unmount.`,
  });

  // ------------------------------------------------------------------------------------------
  ML.add({
    id: 'three-interactive-carousel-ring',
    cat: 'three-interactive',
    title: 'Draggable card ring',
    sub: 'Spin with momentum, it snaps to a card',
    libs: ['three'],
    html: HTML + '<div class="cap"><b>Studio</b><span>01 / 08</span></div><div class="dots"></div>',
    css:
      CSS +
      `
.d{cursor:grab}
.d .cap{position:absolute;left:0;right:0;bottom:30px;display:flex;flex-direction:column;align-items:center;gap:3px;pointer-events:none}
.d .cap b{font:600 13px/1 var(--ml-font);letter-spacing:-.02em;color:var(--ml-ink)}
.d .cap span{font:600 8px/1 var(--ml-mono);letter-spacing:.08em;color:var(--ml-muted)}
.d .dots{position:absolute;left:0;right:0;bottom:12px;display:flex;justify-content:center;gap:5px;pointer-events:none}
.d .dots i{width:5px;height:5px;border-radius:3px;background:var(--ml-bar-2);transition:width var(--ml-spring-dur) var(--ml-spring),background .2s}
.d .dots i.on{width:16px;background:var(--ml-accent)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment, RoundedBoxGeometry } = lib;
      const host = root.querySelector('.gl');
      const capB = root.querySelector('.cap b');
      const capS = root.querySelector('.cap span');
      const dotsEl = root.querySelector('.dots');
      const own = [];
      const track = (o) => (own.push(o), o);
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
      camera.position.set(0, 1.5, 11.9);
      camera.lookAt(0, -0.45, 0);

      const N = 8;
      const STEP = (Math.PI * 2) / N;
      const RING = 3.3;
      const names = ['Studio', 'Atlas', 'Orbit', 'Prism', 'Nova', 'Halo', 'Pulse', 'Drift'];
      const pal = [
        ['#FFB8A3', '#2f6bff', 1],
        ['#bcd7ff', '#5b97ff', 1],
        ['#4f8dff', '#0a52d6', 1],
        ['#8fbaff', '#2f6bff', 1],
        ['#7fb4ff', '#1f62f5', 1],
        ['#a9cbff', '#4f8dff', 1],
        ['#3d86ff', '#0b3fb4', 1],
        ['#c9deff', '#4a86f5', 1],
      ];
      const CWd = 256;
      const CHt = 352;
      const frontTex = [];
      const paintCard = (i) => {
        const [a, b, dark] = pal[i];
        const cv = frontTex[i].image;
        const g = cv.getContext('2d');
        const bg = g.createLinearGradient(0, 0, CWd, CHt);
        bg.addColorStop(0, a);
        bg.addColorStop(1, b);
        g.fillStyle = bg;
        g.fillRect(0, 0, CWd, CHt);
        g.fillStyle = dark ? 'rgba(255,255,255,.22)' : 'rgba(255,255,255,.55)';
        const k = i % 4;
        if (k === 0) {
          g.beginPath();
          g.arc(170, 120, 78, 0, Math.PI * 2);
          g.fill();
        } else if (k === 1) {
          for (let r = 0; r < 3; r++) {
            g.beginPath();
            g.roundRect(40, 60 + r * 46, 176 - r * 40, 26, 13);
            g.fill();
          }
        } else if (k === 2) {
          g.lineWidth = 22;
          g.strokeStyle = g.fillStyle;
          g.beginPath();
          g.arc(128, 130, 70, Math.PI * 0.15, Math.PI * 1.55);
          g.stroke();
        } else {
          for (let r = 0; r < 4; r++)
            for (let c = 0; c < 4; c++) {
              g.beginPath();
              g.arc(54 + c * 50, 62 + r * 50, 11, 0, Math.PI * 2);
              g.fill();
            }
        }
        g.fillStyle = dark ? '#ffffff' : '#0b1b3a';
        g.textAlign = 'left';
        g.font = '600 44px Geist, system-ui, sans-serif';
        g.fillText(names[i], 26, 298);
        g.font = '600 14px "Geist Mono", ui-monospace, monospace';
        g.fillStyle = dark ? 'rgba(255,255,255,.8)' : 'rgba(11,27,58,.6)';
        g.fillText('COLLECTION 0' + (i + 1), 28, 324);
        frontTex[i].needsUpdate = true;
      };
      const geo = track(new RoundedBoxGeometry(1.55, 2.14, 0.07, 3, 0.11));
      const sideMat = track(new THREE.MeshPhysicalMaterial({ color: 0x8fbaff, roughness: 0.3, clearcoat: 0.6 }));
      const backMat = track(new THREE.MeshPhysicalMaterial({ color: 0xb9d4ff, roughness: 0.35, clearcoat: 0.6 }));
      const cards = [];
      for (let i = 0; i < N; i++) {
        const cv = document.createElement('canvas');
        cv.width = CWd;
        cv.height = CHt;
        const tex = track(new THREE.CanvasTexture(cv));
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 4;
        frontTex.push(tex);
        paintCard(i);
        const fm = track(new THREE.MeshPhysicalMaterial({ map: tex, roughness: 0.5, clearcoat: 0.25, clearcoatRoughness: 0.4 }));
        const mesh = new THREE.Mesh(geo, [sideMat, sideMat, sideMat, sideMat, fm, backMat]);
        scene.add(mesh);
        cards.push(mesh);
        const d = document.createElement('i');
        dotsEl.appendChild(d);
      }
      const dots = [...dotsEl.children];
      let dead = false;
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => !dead && frontTex.forEach((_, i) => paintCard(i)));

      const sc = document.createElement('canvas');
      sc.width = sc.height = 128;
      const scg = sc.getContext('2d');
      const grad = scg.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.26)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      scg.fillStyle = grad;
      scg.fillRect(0, 0, 128, 128);
      const shTex = track(new THREE.CanvasTexture(sc));
      const shGeo = track(new THREE.PlaneGeometry(8.4, 8.4));
      const shMat = track(new THREE.MeshBasicMaterial({ map: shTex, transparent: true, depthWrite: false }));
      const sh = new THREE.Mesh(shGeo, shMat);
      sh.rotation.x = -Math.PI / 2;
      sh.position.y = -1.5;
      scene.add(sh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // drag with pointer capture, then a spring to the nearest card that inherits the release velocity
      let ang = 0;
      let av = 0; // rad/s
      let target = 0;
      let down = false;
      let sx = 0;
      let sy = 0;
      let lx = 0;
      let dragPx = 0;
      let acc = 0;
      let lastMove = 0;
      let userUntil = 0;
      const onDown = (e) => {
        down = true;
        sx = lx = e.clientX;
        sy = e.clientY;
        dragPx = acc = 0;
        av = 0;
        lastMove = performance.now();
        try {
          root.setPointerCapture(e.pointerId);
        } catch (_) {}
        root.style.cursor = 'grabbing';
        userUntil = performance.now() + 2500;
      };
      const onMove = (e) => {
        if (!down) return;
        acc += e.clientX - lx;
        lx = e.clientX;
        dragPx = Math.max(dragPx, Math.hypot(e.clientX - sx, e.clientY - sy));
        lastMove = performance.now();
        userUntil = lastMove + 2500;
      };
      const onUp = (e) => {
        if (!down) return;
        down = false;
        try {
          root.releasePointerCapture(e.pointerId);
        } catch (_) {}
        root.style.cursor = 'grab';
        const now = performance.now();
        userUntil = now + 2500;
        if (now - lastMove > 90) av = 0;
        target = Math.round((ang + av * 0.3) / STEP) * STEP;
      };
      const onClickCap = (e) => dragPx > 5 && e.stopPropagation();
      root.addEventListener('pointerdown', onDown);
      root.addEventListener('pointermove', onMove);
      root.addEventListener('pointerup', onUp);
      root.addEventListener('pointercancel', onUp);
      root.addEventListener('click', onClickCap, true);

      const t0 = performance.now();
      let last = t0;
      let nextAuto = t0 + 1600;
      let active = -1;
      let raf = 0;
      const K = 55;
      const C = 2 * Math.sqrt(K) * 0.92;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const dt = Math.min(0.033, (t - last) / 1000);
        last = t;
        if (down) {
          const da = acc * 0.0072;
          acc = 0;
          ang += da;
          if (dt > 0) av += (da / dt - av) * 0.35;
          if (t - lastMove > 90) av *= 0.6;
        } else {
          if (t > userUntil && t > nextAuto) {
            target = Math.round(ang / STEP) * STEP + STEP;
            nextAuto = t + 2200;
          }
          av += (K * (target - ang) - C * av) * dt;
          ang += av * dt;
        }
        if (down || t <= userUntil) nextAuto = Math.max(nextAuto, t + 1000);
        let idx = 0;
        let best = -2;
        cards.forEach((m, i) => {
          const a = i * STEP + ang;
          const cs = Math.cos(a);
          m.position.set(Math.sin(a) * RING, 0, cs * RING);
          m.rotation.y = a;
          m.scale.setScalar(0.88 + 0.16 * Math.pow(Math.max(0, cs), 3));
          if (cs > best) {
            best = cs;
            idx = i;
          }
        });
        if (idx !== active) {
          active = idx;
          capB.textContent = names[idx];
          capS.textContent = '0' + (idx + 1) + ' / 08';
          dots.forEach((d, i) => d.classList.toggle('on', i === idx));
        }
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointerdown', onDown);
        root.removeEventListener('pointermove', onMove);
        root.removeEventListener('pointerup', onUp);
        root.removeEventListener('pointercancel', onUp);
        root.removeEventListener('click', onClickCap, true);
        root.style.cursor = '';
        own.forEach((o) => o.dispose());
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a draggable 3D card carousel ring with Three.js. Load three from a pinned CDN with an import map. Place 8 thin RoundedBoxGeometry cards on a circle of radius 3.3: card i sits at angle a = i * (2 pi / 8) + ang, position (sin a * R, 0, cos a * R), rotation.y = a so every front faces outward, and scale it from cos(a): 0.88 plus 0.16 times max(0, cos a) cubed so the front card is largest. Use a material array on the box (index 4 is the front face) with a CanvasTexture per card drawn from a gradient, a simple shape and a title (wait for document.fonts.ready), and plain blue-white sides and back, lit by RoomEnvironment through PMREMGenerator, with a camera slightly above the ring. Drag: on pointerdown call setPointerCapture; on pointermove add the horizontal pixel delta times about 0.0072 rad to ang and low-pass the angular velocity (delta / dt, factor 0.35). On release, zero the velocity if the pointer stopped for 90ms, compute the snap target as round((ang + velocity * 0.3) / step) * step, and let a critically damped spring (k about 55, c = 2 sqrt(k) * 0.92, dt clamped to 1/30) carry the current velocity into that target, so a flick glides and settles exactly on a card. Call stopPropagation on the click after a drag over 5px. Show the active card name and dot indicators in HTML. After 2.5 seconds of no input, advance one card every couple of seconds. Add keyboard arrows in a real implementation. Pause offscreen, dispose on unmount, and under prefers-reduced-motion snap without the spring.`,
  });
})();
